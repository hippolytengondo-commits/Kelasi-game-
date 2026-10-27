# Serveur BOYEKOLI PLAY (Supabase)

Projet Supabase (nom technique : « Kelasi Game ») (région eu-west-3, Paris). Adresse : https://mgaqfuilqqwmxgpowtps.supabase.co
La clé « publishable » utilisée dans `src/cloud.js` est publique par conception : la sécurité repose sur les règles de la base (RLS).

## Scores
Chaque mission donne un score exact « points sur total » : 1 point par étape réussie du premier coup (question, énigme).
`mission_attempts` garde toutes les tentatives (évolution) ; `mission_results` garde le meilleur score. Les enseignants lisent les résultats de leurs élèves via `assignment_scores` (un devoir) et `class_scores` (toute la classe).

## Tables
`profiles` (pseudo, rôle élève/enseignant/parent/admin), `classes` (code à 6 caractères), `class_members`,
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

## Pas encore fait
Paiement en ligne (mobile money, carte), rôle administrateur de la plateforme dans l’application, récupération de mot de passe, limitation du nombre d’inscriptions par appareil, test de bout en bout des licences expirées sur la vraie base.
