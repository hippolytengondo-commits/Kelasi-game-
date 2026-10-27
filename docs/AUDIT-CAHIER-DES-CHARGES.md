# Audit : Kelasi Game / Kelasi Éducation

Document de travail. Compare le cahier des charges complémentaire à l'état réel du projet.
Rien n'est présenté comme fait s'il n'existe pas.

## 1. Existant (vérifié dans le code)

| Élément | État |
|---|---|
| Jeu 3D (Three.js), 30 épisodes, 64 personnages, quiz (325 questions), pièces, tenues, créateur de personnage | Fait |
| Jeu sans inscription : l'utilisateur saisit un prénom et joue | Fait |
| Sauvegarde locale (navigateur, clé `kelas_game_v12`) | Fait |
| Voix (lecture des dialogues), qualité graphique réglable, mini-carte GPS | Fait |
| Publication gratuite (GitHub Pages) et lien Claude | Fait |
| Fonctionne sans serveur (aucun appel réseau hors fichiers du jeu) | Fait |

## 2. Absent (aucune ligne de code)

- Comptes (personnel, élève, enseignant, établissement, parent, administrateur) et connexion.
- Base de données, serveur, authentification, droits côté serveur, isolation entre établissements.
- Classes, invitations d'élèves, groupes.
- Devoirs : bibliothèque filtrable de missions, composition, attribution, statuts, « Mes devoirs », tableau de bord enseignant.
- Étiquetage pédagogique des questions (matière, niveau, compétence, difficulté, durée, programme, langue). Aujourd'hui chaque question n'a qu'un thème.
- Abonnements, licences, périodicités, facturation, paiements.
- Mode hors ligne avec synchronisation (la sauvegarde locale existe, pas la synchronisation).
- Application Android (le jeu actuel est une page web ; voir décision D6).

## 3. Décisions à prendre avant de développer

- D1. Base de données et authentification : créer un projet Supabase dédié à Kelasi (aucun n'existe aujourd'hui ; les deux projets présents appartiennent à d'autres produits). Coût et région à valider.
- D2. Âge minimum et consentement parental pour les comptes d'élèves mineurs.
- D3. Connexion des élèves : e-mail, numéro de téléphone, ou code de classe donné par l'enseignant.
- D4. Fonctions gratuites et payantes du jeu libre (non définies dans le document).
- D5. Moyens de paiement (mobile money, carte, facture) et prestataire. Aucun paiement ne sera simulé.
- D6. Android : application web installable (PWA), ou application native ?
- D7. Programme congolais : référentiel officiel de compétences à fournir pour étiqueter les missions.
- D8. Langues : français seul pour l'instant, ou plus ?

## 4. Ordre de réalisation proposé

1. Phase 1 (jeu libre) : déjà en place. Reste à ajouter l'écran d'accueil « Jouer librement » et le compte personnel facultatif (nécessite D1).
2. Étiquetage des 30 missions par matière, niveau et compétence (aucune base de données nécessaire).
3. Phase 2 : comptes enseignants, classes, devoirs, suivi (nécessite D1 à D3).
4. Phases 3 à 5 : établissements, licences et facturation, comptes parents, rapports.
