-- BOYEKOLI PLAY : pièce jointe (PDF, Word, photo) à un communiqué. Script rejouable.
alter table public.communiques add column if not exists fichier_chemin text;
alter table public.communiques add column if not exists fichier_nom text check (fichier_nom is null or char_length(fichier_nom)<=150);
alter table public.communiques add column if not exists fichier_type text;
alter table public.communiques alter column texte drop not null;
alter table public.communiques drop constraint if exists communiques_texte_check;
alter table public.communiques add constraint communiques_texte_check check (texte is null or char_length(texte)<=3000);

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('communiques','communiques',false,10485760,array['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=false,file_size_limit=10485760,allowed_mime_types=excluded.allowed_mime_types;

-- dossier = identifiant de la classe : l'enseignant ou l'établissement dépose, les membres de la classe lisent
drop policy if exists comm_fichiers_depot on storage.objects;
create policy comm_fichiers_depot on storage.objects for insert to authenticated
  with check (bucket_id='communiques' and exists(select 1 from public.classes c where c.id::text=(storage.foldername(name))[1] and public.owns_class(c.id)));
drop policy if exists comm_fichiers_lecture on storage.objects;
create policy comm_fichiers_lecture on storage.objects for select to authenticated
  using (bucket_id='communiques' and exists(select 1 from public.classes c where c.id::text=(storage.foldername(name))[1] and (public.owns_class(c.id) or public.is_class_member(c.id))));
drop policy if exists comm_fichiers_suppr on storage.objects;
create policy comm_fichiers_suppr on storage.objects for delete to authenticated
  using (bucket_id='communiques' and owner=auth.uid());
