-- BOYEKOLI PLAY : évaluations (QCM et questions ouvertes), anti-triche côté serveur, communiqués avec accusé de lecture.
-- À exécuter une fois dans Supabase (SQL Editor) ou via l'outil d'administration. Script rejouable.
-- Principes de sécurité :
--  * les bonnes réponses ne quittent jamais le serveur tant que l'enseignant n'a pas publié les résultats ;
--  * l'élève passe uniquement par des fonctions (SECURITY DEFINER) : démarrer, sauvegarder, soumettre ;
--  * le chrono est tenu par le serveur (l'horloge de l'appareil n'a aucun effet) ; une seule tentative par élève ;
--  * les incidents (sortie de l'application, copier-coller, capture d'écran détectée…) sont enregistrés pour l'enseignant.

create table if not exists public.evaluations(
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  teacher_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  titre text not null check (char_length(titre) between 2 and 120),
  consigne text check (consigne is null or char_length(consigne)<=1000),
  duree_min int not null check (duree_min between 1 and 240),
  ouvre timestamptz not null,
  ferme timestamptz not null check (ferme > ouvre),
  melanger boolean not null default true,
  max_sorties int not null default 3 check (max_sorties between 1 and 20),
  resultats_visibles boolean not null default false,
  questions jsonb not null check (jsonb_typeof(questions)='array' and jsonb_array_length(questions) between 1 and 100),
  created_at timestamptz not null default now()
);
alter table public.evaluations enable row level security;
drop policy if exists eval_prof on public.evaluations;
create policy eval_prof on public.evaluations for all to authenticated
  using (teacher_id = auth.uid() and public.owns_class(class_id))
  with check (teacher_id = auth.uid() and public.owns_class(class_id));

create table if not exists public.eval_tentatives(
  id uuid primary key default gen_random_uuid(),
  eval_id uuid not null references public.evaluations(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  demarre timestamptz not null default now(),
  soumis_le timestamptz,
  statut text not null default 'en_cours' check (statut in ('en_cours','soumise','a_corriger','corrigee')),
  seed int not null default floor(random()*1000000)::int,
  reponses jsonb not null default '{}'::jsonb,
  incidents jsonb not null default '[]'::jsonb,
  score_auto numeric not null default 0,
  notes jsonb not null default '{}'::jsonb,
  commentaire text,
  unique (eval_id, student_id)
);
alter table public.eval_tentatives enable row level security;
drop policy if exists tent_prof on public.eval_tentatives;
create policy tent_prof on public.eval_tentatives for select to authenticated
  using (exists(select 1 from public.evaluations e where e.id=eval_id and e.teacher_id=auth.uid() and public.owns_class(e.class_id)));

create table if not exists public.communiques(
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  auteur uuid not null default auth.uid() references auth.users(id) on delete cascade,
  titre text not null check (char_length(titre) between 2 and 120),
  texte text not null check (char_length(texte) between 1 and 3000),
  important boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.communiques enable row level security;
drop policy if exists comm_prof on public.communiques;
create policy comm_prof on public.communiques for all to authenticated
  using (auteur = auth.uid() and public.owns_class(class_id))
  with check (auteur = auth.uid() and public.owns_class(class_id));
drop policy if exists comm_eleve on public.communiques;
create policy comm_eleve on public.communiques for select to authenticated using (public.is_class_member(class_id));

create table if not exists public.communique_lus(
  communique_id uuid not null references public.communiques(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  lu_le timestamptz not null default now(),
  primary key (communique_id, user_id)
);
alter table public.communique_lus enable row level security;
drop policy if exists lus_moi on public.communique_lus;
create policy lus_moi on public.communique_lus for select to authenticated using (user_id = auth.uid());
drop policy if exists lus_prof on public.communique_lus;
create policy lus_prof on public.communique_lus for select to authenticated
  using (exists(select 1 from public.communiques c where c.id=communique_id and c.auteur=auth.uid()));

-- ---------------------------------------------------------------- élève : liste des évaluations de mes classes
create or replace function public.eval_liste() returns jsonb
language sql security definer set search_path='' stable as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id',e.id,'titre',e.titre,'consigne',e.consigne,'duree_min',e.duree_min,'ouvre',e.ouvre,'ferme',e.ferme,
    'nb',jsonb_array_length(e.questions),
    'total',(select coalesce(sum(coalesce((q->>'pts')::numeric,1)),0) from jsonb_array_elements(e.questions) q),
    'statut',coalesce(t.statut,'a_faire'),'visible',e.resultats_visibles,'maintenant',now()
  ) order by e.ouvre desc),'[]'::jsonb)
  from public.evaluations e
  left join public.eval_tentatives t on t.eval_id=e.id and t.student_id=auth.uid()
  where public.is_class_member(e.class_id);
$$;

-- ---------------------------------------------------------------- élève : démarrer ou reprendre (sans bonnes réponses)
create or replace function public.eval_demarrer(p_eval uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare e public.evaluations; t public.eval_tentatives; fin_at timestamptz; v_q jsonb;
begin
  if auth.uid() is null then raise exception 'Connexion requise'; end if;
  select * into e from public.evaluations where id=p_eval;
  if not found or not public.is_class_member(e.class_id) then raise exception 'Évaluation introuvable'; end if;
  select * into t from public.eval_tentatives where eval_id=p_eval and student_id=auth.uid();
  if found then
    if t.statut<>'en_cours' then raise exception 'Tu as déjà rendu cette évaluation'; end if;
  else
    if now()<e.ouvre then raise exception 'L’évaluation n’est pas encore ouverte'; end if;
    if now()>e.ferme then raise exception 'L’évaluation est fermée'; end if;
    insert into public.eval_tentatives(eval_id,student_id) values (p_eval,auth.uid()) returning * into t;
  end if;
  fin_at := least(t.demarre + make_interval(mins=>e.duree_min), e.ferme);
  if now() > fin_at + interval '20 seconds' then
    perform public.eval_finaliser(t.id);
    return jsonb_build_object('termine',true);
  end if;
  select coalesce(jsonb_agg(jsonb_build_object('i',o-1,'t',q->>'t','q',q->>'q','opts',coalesce(q->'opts','[]'::jsonb),'pts',coalesce((q->>'pts')::numeric,1)) order by o),'[]'::jsonb)
    into v_q from jsonb_array_elements(e.questions) with ordinality as x(q,o);
  return jsonb_build_object('termine',false,'tentative',t.id,'titre',e.titre,'consigne',e.consigne,'melanger',e.melanger,
    'max_sorties',e.max_sorties,'seed',t.seed,'questions',v_q,'reponses',t.reponses,'incidents',t.incidents,
    'restant_s',greatest(0,floor(extract(epoch from (fin_at-now()))))::int,'duree_s',e.duree_min*60);
end $$;

-- ---------------------------------------------------------------- calcul de la note automatique (QCM) et statut
create or replace function public.eval_finaliser(p_tentative uuid) returns void
language plpgsql security definer set search_path='' as $$
declare t public.eval_tentatives; e public.evaluations; s numeric:=0; ouverte boolean:=false; q jsonb; o int;
begin
  select * into t from public.eval_tentatives where id=p_tentative for update;
  if not found or t.statut<>'en_cours' then return; end if;
  select * into e from public.evaluations where id=t.eval_id;
  for q,o in select x.q,(x.o-1)::int from jsonb_array_elements(e.questions) with ordinality as x(q,o) loop
    if q->>'t'='qcm' then
      if (t.reponses->>(o::text)) is not null and (t.reponses->>(o::text))=(q->>'bonne') then s:=s+coalesce((q->>'pts')::numeric,1); end if;
    else ouverte:=true; end if;
  end loop;
  update public.eval_tentatives set statut=case when ouverte then 'a_corriger' else 'corrigee' end,
    soumis_le=now(), score_auto=s where id=p_tentative;
end $$;
revoke all on function public.eval_finaliser(uuid) from public, anon, authenticated;

-- ---------------------------------------------------------------- élève : sauvegarde automatique
create or replace function public.eval_sauver(p_eval uuid, p_reponses jsonb, p_incidents jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare e public.evaluations; t public.eval_tentatives; fin_at timestamptz;
begin
  select * into t from public.eval_tentatives where eval_id=p_eval and student_id=auth.uid();
  if not found then raise exception 'Évaluation non démarrée'; end if;
  select * into e from public.evaluations where id=p_eval;
  fin_at := least(t.demarre + make_interval(mins=>e.duree_min), e.ferme);
  if t.statut<>'en_cours' then return jsonb_build_object('ok',false,'termine',true); end if;
  if now() > fin_at + interval '20 seconds' then perform public.eval_finaliser(t.id); return jsonb_build_object('ok',false,'termine',true); end if;
  if jsonb_typeof(p_reponses)<>'object' or length(p_reponses::text)>200000 then raise exception 'Réponses invalides'; end if;
  update public.eval_tentatives set reponses=p_reponses,
    incidents=case when jsonb_typeof(p_incidents)='array' and jsonb_array_length(p_incidents)<=200 then p_incidents else incidents end
    where id=t.id;
  return jsonb_build_object('ok',true,'termine',false,'restant_s',greatest(0,floor(extract(epoch from (fin_at-now()))))::int);
end $$;

-- ---------------------------------------------------------------- élève : rendre la copie
create or replace function public.eval_soumettre(p_eval uuid, p_reponses jsonb, p_incidents jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare t public.eval_tentatives; e public.evaluations; fin_at timestamptz;
begin
  select * into t from public.eval_tentatives where eval_id=p_eval and student_id=auth.uid();
  if not found then raise exception 'Évaluation non démarrée'; end if;
  if t.statut<>'en_cours' then return jsonb_build_object('ok',true,'deja',true); end if;
  select * into e from public.evaluations where id=p_eval;
  fin_at := least(t.demarre + make_interval(mins=>e.duree_min), e.ferme);
  -- les réponses tardives (plus de 20 s après l'heure) ne sont pas prises en compte : on garde la dernière sauvegarde
  if now() <= fin_at + interval '20 seconds' and jsonb_typeof(p_reponses)='object' and length(p_reponses::text)<=200000 then
    update public.eval_tentatives set reponses=p_reponses,
      incidents=case when jsonb_typeof(p_incidents)='array' and jsonb_array_length(p_incidents)<=200 then p_incidents else incidents end
      where id=t.id;
  end if;
  perform public.eval_finaliser(t.id);
  return jsonb_build_object('ok',true,'deja',false);
end $$;

-- ---------------------------------------------------------------- élève : mon résultat (seulement si l'enseignant l'a publié)
create or replace function public.eval_resultat(p_eval uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare e public.evaluations; t public.eval_tentatives; total numeric; pts numeric; det jsonb;
begin
  select * into t from public.eval_tentatives where eval_id=p_eval and student_id=auth.uid();
  if not found or t.statut='en_cours' then return jsonb_build_object('disponible',false,'raison','Pas encore rendue'); end if;
  select * into e from public.evaluations where id=p_eval;
  if not e.resultats_visibles then return jsonb_build_object('disponible',false,'raison','Les résultats ne sont pas encore publiés par ton enseignant.'); end if;
  select coalesce(sum(coalesce((q->>'pts')::numeric,1)),0) into total from jsonb_array_elements(e.questions) q;
  pts := t.score_auto + coalesce((select sum(value::numeric) from jsonb_each_text(t.notes)),0);
  select coalesce(jsonb_agg(jsonb_build_object('q',q->>'q','t',q->>'t','opts',q->'opts','ta_reponse',t.reponses->((x.o-1)::text),
      'bonne',case when q->>'t'='qcm' then q->'bonne' else null end,'expl',q->>'expl','pts',coalesce((q->>'pts')::numeric,1),
      'note',t.notes->((x.o-1)::text)) order by x.o),'[]'::jsonb)
    into det from jsonb_array_elements(e.questions) with ordinality as x(q,o);
  return jsonb_build_object('disponible',true,'statut',t.statut,'points',pts,'total',total,'commentaire',t.commentaire,'detail',det);
end $$;

-- ---------------------------------------------------------------- enseignant : copies d'une évaluation
create or replace function public.eval_resultats_prof(p_eval uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare e public.evaluations;
begin
  select * into e from public.evaluations where id=p_eval;
  if not found or e.teacher_id<>auth.uid() or not public.owns_class(e.class_id) then raise exception 'Accès refusé'; end if;
  return jsonb_build_object(
    'questions',e.questions,
    'copies',(select coalesce(jsonb_agg(jsonb_build_object(
        'id',m.student_id,'pseudo',p.pseudo,'tentative',t.id,'statut',coalesce(t.statut,'absent'),
        'demarre',t.demarre,'soumis_le',t.soumis_le,'score_auto',coalesce(t.score_auto,0),'notes',coalesce(t.notes,'{}'::jsonb),
        'reponses',coalesce(t.reponses,'{}'::jsonb),'incidents',coalesce(t.incidents,'[]'::jsonb),'commentaire',t.commentaire
      ) order by p.pseudo),'[]'::jsonb)
      from public.class_members m
      join public.profiles p on p.id=m.student_id
      left join public.eval_tentatives t on t.eval_id=e.id and t.student_id=m.student_id
      where m.class_id=e.class_id));
end $$;

-- ---------------------------------------------------------------- enseignant : noter les questions ouvertes
create or replace function public.eval_noter(p_tentative uuid, p_notes jsonb, p_commentaire text) returns void
language plpgsql security definer set search_path='' as $$
declare t public.eval_tentatives; e public.evaluations;
begin
  select * into t from public.eval_tentatives where id=p_tentative;
  if not found then raise exception 'Copie introuvable'; end if;
  select * into e from public.evaluations where id=t.eval_id;
  if e.teacher_id<>auth.uid() or not public.owns_class(e.class_id) then raise exception 'Accès refusé'; end if;
  if t.statut='en_cours' then raise exception 'La copie n’est pas encore rendue'; end if;
  update public.eval_tentatives set notes=coalesce(p_notes,'{}'::jsonb),commentaire=left(p_commentaire,1000),statut='corrigee' where id=p_tentative;
end $$;

-- ---------------------------------------------------------------- enseignant : publier ou masquer les résultats
create or replace function public.eval_publier(p_eval uuid, p_visible boolean) returns void
language plpgsql security definer set search_path='' as $$
begin
  update public.evaluations set resultats_visibles=p_visible where id=p_eval and teacher_id=auth.uid() and public.owns_class(class_id);
  if not found then raise exception 'Accès refusé'; end if;
end $$;

-- ---------------------------------------------------------------- communiqués : accusé de lecture
create or replace function public.communique_lu(p_id uuid) returns void
language plpgsql security definer set search_path='' as $$
declare c public.communiques;
begin
  select * into c from public.communiques where id=p_id;
  if not found or not public.is_class_member(c.class_id) then raise exception 'Communiqué introuvable'; end if;
  insert into public.communique_lus(communique_id,user_id) values (p_id,auth.uid()) on conflict do nothing;
end $$;

create or replace function public.communique_suivi(p_id uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare c public.communiques;
begin
  select * into c from public.communiques where id=p_id;
  if not found or c.auteur<>auth.uid() or not public.owns_class(c.class_id) then raise exception 'Accès refusé'; end if;
  return (select coalesce(jsonb_agg(jsonb_build_object('pseudo',p.pseudo,'lu_le',l.lu_le) order by p.pseudo),'[]'::jsonb)
    from public.class_members m join public.profiles p on p.id=m.student_id
    left join public.communique_lus l on l.communique_id=p_id and l.user_id=m.student_id
    where m.class_id=c.class_id);
end $$;

-- ---------------------------------------------------------------- rattrapage : ce qui attend l'élève à la connexion
create or replace function public.a_faire() returns jsonb
language sql security definer set search_path='' stable as $$
  select jsonb_build_object(
    'communiques',(select count(*) from public.communiques c where public.is_class_member(c.class_id)
        and not exists(select 1 from public.communique_lus l where l.communique_id=c.id and l.user_id=auth.uid())),
    'evaluations',(select count(*) from public.evaluations e where public.is_class_member(e.class_id) and now()<=e.ferme and now()>=e.ouvre
        and not exists(select 1 from public.eval_tentatives t where t.eval_id=e.id and t.student_id=auth.uid() and t.statut<>'en_cours')),
    'prochaine_fermeture',(select min(e.ferme) from public.evaluations e where public.is_class_member(e.class_id) and now()<=e.ferme and now()>=e.ouvre
        and not exists(select 1 from public.eval_tentatives t where t.eval_id=e.id and t.student_id=auth.uid() and t.statut<>'en_cours'))
  );
$$;

grant execute on function public.eval_liste(), public.eval_demarrer(uuid), public.eval_sauver(uuid,jsonb,jsonb), public.eval_soumettre(uuid,jsonb,jsonb),
  public.eval_resultat(uuid), public.eval_resultats_prof(uuid), public.eval_noter(uuid,jsonb,text), public.eval_publier(uuid,boolean),
  public.communique_lu(uuid), public.communique_suivi(uuid), public.a_faire() to authenticated;
revoke execute on function public.eval_liste(), public.eval_demarrer(uuid), public.eval_sauver(uuid,jsonb,jsonb), public.eval_soumettre(uuid,jsonb,jsonb),
  public.eval_resultat(uuid), public.eval_resultats_prof(uuid), public.eval_noter(uuid,jsonb,text), public.eval_publier(uuid,boolean),
  public.communique_lu(uuid), public.communique_suivi(uuid), public.a_faire() from anon, public;
