# Kelas Game (v12 — 3D)

Jeu d'aventure éducatif en 3D temps réel (Three.js) : village, école LEXARIS ACADÉMIE, classe et maison à explorer avec un joystick virtuel et une caméra libre.

- **Quêtes** : Mama Lola → Professeure Ilunga → Junior → Directeur Mavungu (calcul, français, géographie, histoire de la RDC ; étoiles selon les erreurs).
- **Économie** : pièces, XP, niveaux ; mini-jeu de cueillette de mangues ; boutique de Maman Béa ; 6 objets qui meublent la maison.
- **Commandes** : joystick + glisser pour tourner la caméra (tactile), ZQSD / flèches, E ou Entrée pour agir, M pour le menu.
- **Créateur de personnage** : visage (largeur, mâchoire, yeux, nez, lèvres, sourcils, barbe), coiffures, teint, accessoires, tenues et couleurs. Accessible au début, au miroir de la maison et chez Maman Béa. Les objets payants s'essaient avant d'être achetés ; d'autres se débloquent par les quêtes ou le niveau.
- **Images réalistes** : déposer des photos dans `img/tex/` (`grass`, `dirt`, `brick`.jpg : remplacent les textures dessinées) et des portraits dans `img/portraits/<id>.jpg` (`lola`, `ilunga`, `junior`, `mavungu`, `bea`, `mama`) : ils s'affichent dans les dialogues.

## Développement
```
npm install
npm run build   # src/ -> dist/game.js
```
Ouvrir `index.html` via un serveur statique. Déploiement : site statique (Netlify, `netlify.toml`).

## Aventure photographique (mode principal)
Lieux réalistes en photo (`img/scenes/`), personnages photographiques détourés (`img/chars/`), déplacement de lieu en lieu par les flèches, glisser pour regarder autour, ambiance sonore générée, dialogues lus à voix haute. Le mode 3D libre reste disponible (« Explorer en 3D (bêta) »).
