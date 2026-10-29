# Sponsors et panneaux publicitaires

Les panneaux sont répartis à tour de rôle entre tous les sponsors de la liste `src/sponsors.js` :
- quartiers : 3 panneaux par anneau (sponsors en alternance) et 4 sur la route d'entrée ;
- lieux d'exploration : 1 lieu sur 5, avec 2 panneaux de sponsors différents ;
- quelques missions scolaires (histoire-géographie, littérature, commerce, éveil) : 2 panneaux ;
- LEXOTHÈQUE RDC a en plus son enseigne sur la façade du lieu « LEXOTHÈQUE RDC ».

Sponsors actuels : LEXOTHÈQUE RDC, Rulem’s, MC Ezemo de Zamunda.

Le grand panneau numérique en portique (route du village vers les quartiers de missions, src/panneauNumerique.js) fait défiler automatiquement tous les sponsors de cette liste, une affiche toutes les 10 secondes.

## Ajouter un sponsor
1. Déposer l'affiche (JPG ou PNG, de préférence recadrée serrée) dans `img/` (ex. `img/sponsors/nom.jpg`).
2. Ajouter UNE ligne dans `SPONSORS` (`src/sponsors.js`) : `{id, nom, img, ratio (largeur ÷ hauteur), cadre, dos, largeur}`.
3. Publier : tous les emplacements se répartissent automatiquement entre les sponsors.

Retirer un sponsor : supprimer sa ligne.
