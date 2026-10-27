# Serveur Kelasi Game (Supabase)

Projet : « Kelasi Game » (région eu-west-3, Paris). Adresse : https://mgaqfuilqqwmxgpowtps.supabase.co
La clé « publishable » utilisée dans `src/cloud.js` est publique par conception : la sécurité repose sur les règles de la base (RLS).

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

## Pas encore fait
Établissements et licences, facturation, comptes parents, rôle administrateur, limitation du nombre d'inscriptions par appareil.
