// Sponsors affichés sur les panneaux publicitaires du jeu (quartiers, lieux d'exploration, missions).
// Pour ajouter un sponsor : déposer son affiche dans img/sponsors/ (ou img/) et ajouter UNE ligne ci-dessous.
//   id : identifiant court · nom : nom affiché dans la liste · img : chemin de l'affiche · ratio : largeur ÷ hauteur de l'image
//   cadre / dos : couleurs du cadre et du dos du panneau · largeur : largeur du panneau en mètres (facultatif)
// Les panneaux sont répartis à tour de rôle entre tous les sponsors de la liste.
export const SPONSORS=[
  {id:'lex',nom:'LEXOTHÈQUE RDC',img:'img/lexotheque.jpg',ratio:970/325,cadre:0x1b3a6b,dos:0xe8eef8,largeur:4.6},
  {id:'rulems',nom:'Rulem’s · coiffure et makeup',img:'img/rulems.jpg',ratio:840/700,cadre:0x2b1d16,dos:0x1a1410,largeur:3.4},
  {id:'ezemo',nom:'MC Ezemo de Zamunda · MC et event planner',img:'img/mcezemo.jpg',ratio:800/778,cadre:0x0f5f6b,dos:0x0b3a42,largeur:3.4}
];
// n-ième sponsor, en recommençant au début quand la liste est épuisée
export const sponsorN=i=>SPONSORS[((Math.floor(i)%SPONSORS.length)+SPONSORS.length)%SPONSORS.length].id;
