# BOYEKOLI PLAY : feuille de route de l'enrichissement

Document de travail rédigé à partir du cahier des charges « Enrichissement de BOYEKOLI PLAY ».
Principe : on avance module par module, chaque module est présenté, validé, développé, testé, puis vérifié contre les fonctionnalités existantes. Aucune refonte générale. Aucune IA, aucune API payante : tout est préprogrammé dans des fichiers de données.

## 1. Ce qui existe déjà et sera réutilisé

| Besoin du cahier des charges | Déjà en place | Réutilisation |
|---|---|---|
| Personnalisation (coiffures, tenues, accessoires, couleurs) | Créateur de personnage (`crStyle`, `crHair`, `crOutfit`, `crAcc`, `crBuy`) | Ajouter des catalogues d'articles, pas un nouveau système |
| Intérieurs, hôpital, services | `interieurs.js`, `occupants()`, bâtiments repères | Supermarché, musée, laboratoire, agence : mêmes intérieurs avec de nouveaux « spots » |
| Achats, pièces, savoir | `G.adv.pieces`, points de savoir, marché (`openShop`) | Toute nouvelle dépense passe par la même monnaie |
| Terrains, maisons, parkings | `louerTerrain`, `openMaison`, `G.parkings` | Décoration, jardins, boutique, ferme |
| Missions avec questions | `mission3d.js`, `answerQ`, suivi des erreurs | Missions scénarisées, enquêtes : même moteur de questions |
| Exploration RDC | `territoires_data.js`, `missionsLibres` | Grand voyage, trésor, collections de provinces |
| Suivi parents / enseignants / établissement | Comptes, classes, erreurs, communiqués | Les nouvelles activités alimentent le même suivi |
| Véhicules, carburant | Concession, auto-école, stations | École de pilotage en phase ultérieure |

## 2. Règles de conception communes

- Contenu dans des fichiers de données (`src/contenu/…`), jamais dans la logique : ajouter une énigme ou un événement ne demande aucune modification du programme.
- Surprises et événements calculés à partir de la date du jour : aucun serveur, aucun hasard, tous les enfants d'une même date voient la même chose.
- Récompenses connues d'avance, jamais aléatoires, jamais limitées dans le temps de façon à pousser l'enfant à revenir sous pression (pas de « série à ne pas perdre »).
- Équilibre de l'économie : chaque nouveau module déclare ce qu'il fait gagner et ce qu'il fait dépenser (voir §4), pour ne pas fausser la valeur des pièces.
- Rien d'essentiel à la progression n'est payant.
- Simulations médicales : toujours présentées comme jeux pédagogiques, jamais comme conseils de santé.

## 3. Ordre de développement proposé

| Étape | Module | Pourquoi à cet endroit |
|---|---|---|
| 1 | Socle : catalogue d'objets, collections et badges, surprise du jour, calendrier hebdomadaire | Petit, sans risque, sert de base à tout le reste, donne tout de suite une raison de revenir |
| 2 | Supermarché (budget, comparaison de prix) puis Musée virtuel du Congo | Réutilisent les intérieurs et le calcul ; le musée remplit les collections |
| 3 | Missions scénarisées : Trésor congolais, Expédition au Virunga, Sauvons la forêt | Moteur de missions existant, nouveau scénario et nouvelles énigmes |
| 4 | Agence de détectives, Laboratoire scientifique, Centre hospitalier fonctionnel | Nouveaux types d'écrans interactifs |
| 5 | Atelier de décoration, animaux de compagnie, atelier mode et coiffure | S'appuient sur les maisons et le créateur de personnage |
| 6 | Agriculture et élevage, boutique du joueur, ville intelligente | Cycles dans le temps : demandent de sauvegarder des dates côté joueur |
| 7 | Studio musique et danse, école de pilotage | Demandent du son et des animations plus lourds |
| Transversal | Les 8 personnages-guides | Introduits au fur et à mesure : chaque guide apparaît avec son module (scientifique au laboratoire, architecte à l'atelier, etc.) |

## 4. Étape 1 en détail : le socle

### Fonctionnement
- **Carnet de collections** : un nouvel onglet dans le menu. Neuf collections (animaux, oiseaux, espèces aquatiques, monuments, instruments, objets historiques, provinces, découvertes, transports). Chaque fiche a un nom, un court texte pour enfant, une icône ou illustration, et une manière de l'obtenir.
- **Sources d'objets** : mission réussie, province découverte en exploration, surprise du jour, événement de la semaine, musée (plus tard).
- **Badges** : une collection complète donne un badge affiché dans le carnet et dans le profil.
- **Surprise du jour** : à la première connexion de la journée, une enveloppe apparaît. Contenu choisi dans une liste prédéfinie selon la date : une énigme, un objet à collectionner, une découverte géographique, une mission spéciale. Pas de pièces à acheter, pas de roulette.
- **Calendrier hebdomadaire** : un tableau de 7 lignes dans un fichier de données (lundi défi mathématique … dimanche grande aventure), avec pour chaque jour : titre, texte d'accueil, série de questions ou activité, récompense. Modifiable sans toucher au programme.

### Écrans
1. Bouton « 🎒 Collections » dans le menu ☰ : liste des collections avec barre de progression.
2. Page d'une collection : grille des objets, grisés tant que non obtenus.
3. Fenêtre « Surprise du jour » : enveloppe, message d'accueil, bouton pour ouvrir.
4. Fenêtre « Événement du jour » : titre, activité, récompense, bouton « Relever le défi ».

### Récompenses et points
- Objets et badges : aucune valeur en pièces, ce sont des trophées.
- Défi du jour : un petit bonus de pièces et de savoir, plafonné à une fois par jour, du même ordre qu'une mission courte. Il n'y a aucune perte si l'enfant ne se connecte pas un jour.
- Aucun impact sur les dépenses existantes (terrains, constructions, véhicules, carburant).

### Sauvegarde
- Collections et dates de surprises enregistrées dans la sauvegarde existante du joueur (locale, et cloud quand il y a un compte). Pas de nouvelle table obligatoire.

### Protection de l'existant
- Page d'accueil inchangée (Exploration et Missions scolaires).
- Une seule entrée ajoutée au menu ☰.
- Tests : chaîne de missions, évaluations, classes, achats, carburant, conduite et exploration rejoués avant mise en ligne.

## 5. Points à valider avec le responsable du projet

1. Ordre des étapes ci-dessus.
2. Rythme et montant des récompenses quotidiennes (proposition : bonus du jour équivalent à 1 bonne réponse du premier coup, une fois par jour).
3. Contenu historique du musée : les textes sont rédigés par nous à partir de sources vérifiables, à relire par une personne compétente avant publication.
4. Images du musée et des collections : illustrations générées ou fournies, libres de droits. Les photographies protégées ne seront pas utilisées sans autorisation.
5. Personnages : les 8 profils sont créés avec le moteur de personnages actuel (apparence, coiffures, tenues). La qualité visuelle dépend de ce moteur, qui est stylisé, pas photoréaliste.
