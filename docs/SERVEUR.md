# Serveur BOYEKOLI PLAY (Supabase)

Projet Supabase (nom technique : « Kelasi Game ») (région eu-west-3, Paris). Adresse : https://mgaqfuilqqwmxgpowtps.supabase.co
La clé « publishable » utilisée dans `src/cloud.js` est publique par conception : la sécurité repose sur les règles de la base (RLS).

## Scores
Chaque mission donne un score exact « points sur total » : 1 point par étape réussie du premier coup (question, énigme).
`mission_attempts` garde toutes les tentatives (évolution) ; `mission_results` garde le meilleur score. Les enseignants lisent les résultats de leurs élèves via `assignment_scores` (un devoir) et `class_scores` (toute la classe).

## Tables
`profiles` (pseudo, rôle élève/enseignant/parent/établissement/admin), `classes` (code à 6 caractères), `class_members`,
`assignments` (devoirs : missions choisies par l'enseignant), `mission_results`, `save_games` (progression facultative).

## Règles de sécurité (vérifiées dans la base)
- Un élève ne peut ni créer de classe, ni écrire directement un résultat, ni voir les devoirs d'une autre classe.
- Un enseignant ne voit que les élèves de ses classes ; un élève ne lit jamais les résultats des autres.
- Les résultats passent uniquement par `record_result` (vérifie l'appartenance à la classe).
- Les rôles ne se modifient pas depuis l'application ; l'inscription ne permet que « élève » et « enseignant ».

## Fonctions
`inscription` (Edge Function publique) : crée le compte à partir d'un pseudonyme (e-mail interne `pseudo@users.kelasi.game`, sans envoi de courrier).
Pas de récupération de mot de passe pour l'instant (aucun e-mail réel collecté).

## Établissements, licences, parents
Tables : `schools` (code à 8 caractères), `school_members` (administrateur ou enseignant), `licences` (plan essai ou établissement, places, dates, statut), `parent_codes`, `parent_links`. `classes.school_id` rattache une classe à un établissement.
Fonctions : `create_school` (crée l’établissement et une licence d’essai gratuite de 30 jours, 60 places), `join_school`, `school_overview`, `attach_class`, `my_parent_code`, `link_child`, `unlink_child`, `children_summary`, `child_detail`.
Une classe rattachée à un établissement n’accepte de nouveaux élèves que si la licence est active et qu’il reste des places (`join_class`).
Un parent ne voit que les scores (missions libres) des enfants qui lui ont donné leur code parent ; il peut les retirer à tout moment.
Les licences payantes ne sont pas activées par l’application : aucun paiement n’est simulé. L’activation se fait par l’administrateur de la plateforme (Supabase), après accord.

## Comptes
- **Élèves** : pseudonyme + date de naissance (JJMMAAAA) comme mot de passe. Aucune adresse e-mail n’est collectée. Compte créé par la fonction `inscription` (adresse interne `pseudo@users.kelasi.game`).
- **Adultes (enseignants, parents)** : adresse **Gmail** + mot de passe (8 caractères minimum). Inscription par Supabase Auth (`/auth/v1/signup`) : un e-mail de confirmation est envoyé. Le profil (pseudonyme, rôle) est créé automatiquement par le déclencheur `handle_new_user` à partir des informations d’inscription ; seules les adresses Gmail et les rôles enseignant/parent sont acceptés.
- **Mot de passe oublié (adultes)** : e-mail de récupération (`/auth/v1/recover`) ; le lien ramène sur le jeu qui propose de choisir un nouveau mot de passe.
- À régler dans le tableau de bord Supabase (Authentication) : « Site URL » et « Redirect URLs » = adresse publique du jeu ; « Confirm email » activé ; pour un usage réel, brancher un serveur d’envoi d’e-mails (SMTP) car l’envoi par défaut est très limité.

## Comptes établissement et administrateur (octobre 2026)
- **Établissement** : inscription adulte (Gmail + mot de passe) avec le nom de l'école. À la première connexion, la fonction `completer_profil` crée le profil, l'établissement (code à 8 caractères), l'appartenance administrateur et la licence d'essai (30 jours, 60 places). Aucun déclencheur sur `auth.users` n'est nécessaire.
- **Administrateur de la plateforme** : rôle `admin` attribué uniquement dans la base (jamais par l'application) : `update public.profiles set role='admin' where pseudo='…';`. Fonctions `admin_overview` (comptes par rôle, établissements, licences), `admin_set_licence`, `admin_suspend_licence`, toutes réservées à `is_platform_admin()`.
- `create_school` accepte les rôles enseignant et établissement ; `join_school` reste réservé aux enseignants.

## Pas encore fait
Paiement en ligne (mobile money, carte), limitation du nombre d’inscriptions par appareil, test de bout en bout des licences expirées sur la vraie base.

Évaluations (minuteur, QCM, anti-triche), communiqués avec accusé de lecture, notifications push (FCM/APNs) et options Android natives (FLAG_SECURE, épinglage d'écran) : à concevoir ; les notifications push et FLAG_SECURE exigent une application Android native (hors application web).
