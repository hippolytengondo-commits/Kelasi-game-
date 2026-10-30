-- BOYEKOLI PLAY : (1) les classes sont créées par l'établissement, les enseignants les rejoignent ;
--                 (2) questions mal répondues visibles par l'enseignant, l'établissement et les parents.
-- Script rejouable. À exécuter après 2026-evaluations-communiques.sql.

-- ------------------------------------------------------------------ enseignants d'une classe
create table if not exists public.class_teachers(
  class_id uuid not null references public.classes(id) on delete cascade,
  teacher_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, teacher_id)
);
alter table public.class_teachers enable row level security;

-- « propriétaire » d'une classe : son créateur, un enseignant rattaché à la classe, ou l'administrateur de l'établissement
create or replace function public.owns_class(p_class uuid) returns boolean
language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.classes c where c.id=p_class and (
    c.teacher_id=auth.uid()
    or exists(select 1 from public.class_teachers t where t.class_id=c.id and t.teacher_id=auth.uid())
    or (c.school_id is not null and exists(select 1 from public.school_members m where m.school_id=c.school_id and m.user_id=auth.uid() and m.role='admin'))
  ))
$$;

create or replace function public.teaches_student(p_student uuid) returns boolean
language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.class_members m join public.classes c on c.id=m.class_id
    where m.student_id=p_student and (
      c.teacher_id=auth.uid()
      or exists(select 1 from public.class_teachers t where t.class_id=c.id and t.teacher_id=auth.uid())
      or (c.school_id is not null and exists(select 1 from public.school_members sm where sm.school_id=c.school_id and sm.user_id=auth.uid() and sm.role='admin'))))
$$;

drop policy if exists ct_lire on public.class_teachers;
create policy ct_lire on public.class_teachers for select to authenticated using (teacher_id=auth.uid() or public.owns_class(class_id));
drop policy if exists classes_membres on public.classes;
create policy classes_membres on public.classes for select to authenticated using (public.owns_class(id));

-- l'établissement crée ses classes
create or replace function public.create_school_class(p_school uuid, p_nom text, p_niveau text) returns public.classes
language plpgsql security definer set search_path='' as $$
declare v_code text; v_row public.classes; i int;
begin
  if not public.is_school_admin(p_school) then raise exception 'Réservé à l’administrateur de l’établissement'; end if;
  if char_length(trim(coalesce(p_nom,'')))<2 then raise exception 'Donne un nom à la classe'; end if;
  loop
    v_code := '';
    for i in 1..6 loop v_code := v_code || substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 1+floor(random()*32)::int, 1); end loop;
    exit when not exists(select 1 from public.classes where code=v_code);
  end loop;
  insert into public.classes(teacher_id,nom,niveau,code,school_id) values (auth.uid(), trim(p_nom), p_niveau, v_code, p_school) returning * into v_row;
  return v_row;
end $$;

-- un enseignant d'un établissement rejoint une classe de cet établissement
create or replace function public.join_class_teacher(p_class uuid) returns void
language plpgsql security definer set search_path='' as $$
declare c public.classes;
begin
  select * into c from public.classes where id=p_class;
  if not found or c.school_id is null then raise exception 'Classe introuvable'; end if;
  if not public.is_teacher() then raise exception 'Réservé aux enseignants'; end if;
  if not exists(select 1 from public.school_members where school_id=c.school_id and user_id=auth.uid()) then raise exception 'Rejoins d’abord l’établissement avec son code'; end if;
  insert into public.class_teachers(class_id,teacher_id) values (p_class,auth.uid()) on conflict do nothing;
end $$;

-- l'administrateur affecte un enseignant de l'établissement à une classe
create or replace function public.assign_class_teacher(p_class uuid, p_teacher uuid) returns void
language plpgsql security definer set search_path='' as $$
declare c public.classes;
begin
  select * into c from public.classes where id=p_class;
  if not found or c.school_id is null or not public.is_school_admin(c.school_id) then raise exception 'Accès refusé'; end if;
  if not exists(select 1 from public.school_members where school_id=c.school_id and user_id=p_teacher and role='enseignant') then raise exception 'Cet enseignant ne fait pas partie de l’établissement'; end if;
  insert into public.class_teachers(class_id,teacher_id) values (p_class,p_teacher) on conflict do nothing;
end $$;

create or replace function public.retire_class_teacher(p_class uuid, p_teacher uuid) returns void
language plpgsql security definer set search_path='' as $$
declare c public.classes;
begin
  select * into c from public.classes where id=p_class;
  if not found then raise exception 'Classe introuvable'; end if;
  if p_teacher<>auth.uid() and not (c.school_id is not null and public.is_school_admin(c.school_id)) then raise exception 'Accès refusé'; end if;
  delete from public.class_teachers where class_id=p_class and teacher_id=p_teacher;
end $$;

-- un enseignant rattaché à un établissement ne crée plus de classe lui-même (l'établissement s'en charge)
create or replace function public.create_class(p_nom text, p_niveau text) returns public.classes
language plpgsql security definer set search_path='' as $$
declare v_code text; v_row public.classes; i int;
begin
  if not public.is_teacher() then raise exception 'Réservé aux enseignants'; end if;
  if exists(select 1 from public.school_members where user_id=auth.uid()) then
    raise exception 'Les classes de ton établissement sont créées par l’établissement : rejoins-en une depuis « Mon établissement ».';
  end if;
  loop
    v_code := '';
    for i in 1..6 loop v_code := v_code || substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 1+floor(random()*32)::int, 1); end loop;
    exit when not exists(select 1 from public.classes where code=v_code);
  end loop;
  insert into public.classes(teacher_id,nom,niveau,code) values (auth.uid(), p_nom, p_niveau, v_code) returning * into v_row;
  return v_row;
end $$;

-- vue d'ensemble de l'établissement : toutes les classes, leurs enseignants ; chacun voit les classes qu'il peut rejoindre
create or replace function public.school_overview(p_school uuid)
returns table(school_id uuid, nom text, code text, mon_role text, plan text, places integer, fin timestamptz, statut text, eleves integer, enseignants jsonb, classes jsonb)
language plpgsql stable security definer set search_path='' as $$
begin
  if not public.is_school_member(p_school) then raise exception 'Accès refusé'; end if;
  return query
  select s.id, s.nom, case when public.is_school_admin(s.id) then s.code else null end,
    (select m.role from public.school_members m where m.school_id=s.id and m.user_id=auth.uid()),
    lc.plan, lc.places, lc.fin, case when lc.id is null then 'expiree' else lc.statut end,
    (select count(distinct cm.student_id)::int from public.class_members cm join public.classes c on c.id=cm.class_id where c.school_id=s.id),
    coalesce((select jsonb_agg(jsonb_build_object('id',m.user_id,'pseudo',p.pseudo,'role',m.role) order by p.pseudo) from public.school_members m join public.profiles p on p.id=m.user_id where m.school_id=s.id and public.is_school_admin(s.id)),'[]'::jsonb),
    coalesce((select jsonb_agg(jsonb_build_object('id',c.id,'nom',c.nom,'niveau',c.niveau,
        'code',case when public.owns_class(c.id) then c.code else null end,
        'enseignants',coalesce((select jsonb_agg(p.pseudo order by p.pseudo) from public.class_teachers t join public.profiles p on p.id=t.teacher_id where t.class_id=c.id),'[]'::jsonb),
        'mien',exists(select 1 from public.class_teachers t where t.class_id=c.id and t.teacher_id=auth.uid()),
        'eleves',(select count(*) from public.class_members cm where cm.class_id=c.id)) order by c.nom)
      from public.classes c where c.school_id=s.id),'[]'::jsonb)
  from public.schools s left join lateral (select * from public.licence_active(s.id)) lc on true
  where s.id=p_school;
end $$;

-- ------------------------------------------------------------------ questions mal répondues
create table if not exists public.eleve_erreurs(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  mission_key text not null,
  assignment_id uuid,
  question text not null check (char_length(question)<=500),
  reponse text check (reponse is null or char_length(reponse)<=300),
  bonne text check (bonne is null or char_length(bonne)<=300),
  nb int not null default 1,
  derniere timestamptz not null default now(),
  unique (student_id, mission_key, question)
);
alter table public.eleve_erreurs enable row level security;   -- aucun accès direct : uniquement par les fonctions ci-dessous

create or replace function public.noter_erreur(p_mission text, p_assignment uuid, p_question text, p_reponse text, p_bonne text) returns void
language plpgsql security definer set search_path='' as $$
begin
  if auth.uid() is null then raise exception 'Connexion requise'; end if;
  if char_length(coalesce(p_question,''))<1 then return; end if;
  insert into public.eleve_erreurs(student_id,mission_key,assignment_id,question,reponse,bonne)
    values (auth.uid(), left(p_mission,120), p_assignment, left(p_question,500), left(p_reponse,300), left(p_bonne,300))
    on conflict (student_id,mission_key,question) do update
      set nb=public.eleve_erreurs.nb+1, reponse=excluded.reponse, bonne=excluded.bonne, derniere=now();
  delete from public.eleve_erreurs where student_id=auth.uid()
    and id not in (select id from public.eleve_erreurs where student_id=auth.uid() order by derniere desc limit 400);
end $$;

-- qui peut voir les erreurs d'un élève : lui-même, ses enseignants, l'administrateur de l'établissement, ses parents (code parent)
create or replace function public.peut_voir_eleve(p_student uuid) returns boolean
language sql stable security definer set search_path='' as $$
  select auth.uid()=p_student
    or public.teaches_student(p_student)
    or exists(select 1 from public.parent_links where parent_id=auth.uid() and child_id=p_student)
$$;

create or replace function public.erreurs_eleve(p_student uuid, p_limite int default 80) returns jsonb
language plpgsql stable security definer set search_path='' as $$
begin
  if not public.peut_voir_eleve(p_student) then raise exception 'Accès refusé'; end if;
  return coalesce((select jsonb_agg(jsonb_build_object('question',e.question,'reponse',e.reponse,'bonne',e.bonne,'mission',e.mission_key,'nb',e.nb,'derniere',e.derniere) order by e.derniere desc)
    from (select * from public.eleve_erreurs where student_id=p_student order by derniere desc limit least(greatest(p_limite,1),200)) e),'[]'::jsonb);
end $$;

-- questions les plus ratées d'une classe (enseignant ou établissement)
create or replace function public.erreurs_classe(p_class uuid) returns jsonb
language plpgsql stable security definer set search_path='' as $$
begin
  if not public.owns_class(p_class) then raise exception 'Accès refusé'; end if;
  return coalesce((select jsonb_agg(x order by (x->>'eleves')::int desc, (x->>'total')::int desc) from (
    select jsonb_build_object('question',e.question,'bonne',max(e.bonne),'eleves',count(distinct e.student_id),'total',sum(e.nb)) as x
    from public.eleve_erreurs e join public.class_members m on m.student_id=e.student_id and m.class_id=p_class
    group by e.question order by count(distinct e.student_id) desc, sum(e.nb) desc limit 30) t),'[]'::jsonb);
end $$;

grant execute on function public.create_school_class(uuid,text,text), public.join_class_teacher(uuid), public.assign_class_teacher(uuid,uuid), public.retire_class_teacher(uuid,uuid),
  public.noter_erreur(text,uuid,text,text,text), public.erreurs_eleve(uuid,int), public.erreurs_classe(uuid), public.peut_voir_eleve(uuid) to authenticated;
revoke execute on function public.create_school_class(uuid,text,text), public.join_class_teacher(uuid), public.assign_class_teacher(uuid,uuid), public.retire_class_teacher(uuid,uuid),
  public.noter_erreur(text,uuid,text,text,text), public.erreurs_eleve(uuid,int), public.erreurs_classe(uuid), public.peut_voir_eleve(uuid) from anon, public;
