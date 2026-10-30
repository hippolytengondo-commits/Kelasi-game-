-- BOYEKOLI PLAY : un élève peut saisir le code de l'établissement (8 caractères) et choisir sa classe dans la liste.
-- Script rejouable. À exécuter après 2026-classes-etablissement-erreurs.sql.
create or replace function public.classes_par_code_ecole(p_code text)
returns table(nom text, niveau text, code text)
language plpgsql stable security definer set search_path='' as $$
begin
  if auth.uid() is null then raise exception 'Connexion requise'; end if;
  return query
  select c.nom, c.niveau, c.code from public.classes c join public.schools s on s.id=c.school_id
  where s.code=upper(trim(p_code)) order by c.nom;
end $$;
grant execute on function public.classes_par_code_ecole(text) to authenticated;
revoke execute on function public.classes_par_code_ecole(text) from anon, public;
