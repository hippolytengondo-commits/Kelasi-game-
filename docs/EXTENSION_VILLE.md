# Extension de la ville du joueur : cahier des charges (à réaliser plus tard)

Idée de Ngondo Shako Hippolyte. Statut : étape 1 réalisée (octobre 2026) ; étapes 2 à 4 à faire.

## Principe
Deuxième motivation du joueur : ses points gagnés en réussissant les missions deviennent de la monnaie, qui sert à agrandir SA ville et SA société, de l'autre côté de la ville des missions (quartiers résidentiels). Apprendre rapporte donc deux choses : la progression dans le jeu et la croissance de sa ville.

## Règles d'équilibre
- Les terrains sont chers : il faut réussir beaucoup de missions (de l'ordre de plusieurs dizaines pour le premier terrain, davantage pour les suivants). Le prix augmente à chaque achat.
- La progression doit prendre du temps : le temps d'apprendre. Pas d'achat facile ni immédiat.
- Les points viennent de la réussite des missions (et non du simple fait de jouer). Les pièces actuelles des mini-jeux restent un complément.
- Les matériaux (briques, ciment, bois, fer) restent nécessaires pour construire.

## Étapes
1. Quartier résidentiel : terrains à acheter avec des pièces de réussite, maison à construire sur chaque terrain, routes et lampadaires.
2. Circulation d'ambiance (voitures, motos, taxis-bus) qui augmente avec le nombre de maisons ; sans conduite, légère sur téléphone.
3. Nouvelles villes : rachat de terres plus loin, revenu en pièces.
4. Personnalisation : chacun construit maisons, immeubles et bâtiments selon ses aspirations, avec davantage de choix au fil des mises à jour.

## Précautions
- Performance sur téléphone modeste (ville des missions déjà à plus de 4 000 éléments 3D quand tout est ouvert) : constructions économes, nombre de véhicules limité.
- Ne pas casser les parties sauvegardées : ajouter les nouveaux champs sans toucher à l'existant.
- Équilibrage des prix à tester avec de vrais joueurs.

## Étape 1 réalisée
- Quartier résidentiel au nord du village (route centrale, lampadaires, 20 terrains) : `src/quartier_res.js`.
- Monnaie « points de savoir » 🎓 : gagnée uniquement en réussissant des missions (10 par bonne réponse du premier coup, 3 sinon, 4 en révision). Les mini-jeux ne donnent pas de points de savoir.
- Prix du terrain n°k+1 : 500 + 100·k·(k+1) points (500, 700, 1100, 1700…), formule dans `prixTerrain` (à ajuster après essais). Les terrains s'achètent dans l'ordre.
- Sur un terrain acheté : Maison, puis Étage, puis Immeuble, payés en pièces et matériaux (`NIVEAUX`).
- Sauvegarde : `adv.savoir`, `adv.terrains`, `adv.maisRes` (anciennes parties compatibles, valeurs par défaut).
