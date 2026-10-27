import {Q} from './data.js';
import {C2,JEUX,COLLECTES} from './programme2.js';
import {C3,J3,K3} from './programme3.js';
import {C4,J4,K4} from './programme4.js';
import {C5,J5,K5} from './programme5.js';
import {C6,J6,K6} from './programme6.js';

// Programme scolaire : niveau → matières → missions (titres). Les missions qui ont un contenu jouable
// sont listées dans CONTENU, clé « niveau|matière|numéro ». Les autres s'affichent « bientôt ».
const L=(...a)=>a;
export const PROGRAMME=[
 {id:'p1',nom:'1re primaire',matieres:[
  {id:'fr',nom:'Français',missions:L('Les voyelles : a, e, i, o, u','Les consonnes simples','Les syllabes','Lire des mots simples','Écrire son prénom','Les mots de la famille','Les mots de l’école','Les phrases courtes','Le point et la majuscule','Lire une petite histoire','Décrire un objet','Parler de soi')},
  {id:'ma',nom:'Mathématiques',missions:L('Les nombres de 1 à 5','Les nombres de 6 à 10','Comparer : plus, moins, autant','Les nombres de 11 à 20','Compter jusqu’à 50','Additionner de petits nombres','Les formes : cercle, carré, triangle','Les grandeurs : long, court, grand, petit','Les positions : devant, derrière, dessus, dessous','Trier et classer les objets','Résoudre un premier problème simple','Révision et jeu de fin d’année')},
  {id:'ev',nom:'Éveil et civisme',missions:L('Mon corps et les cinq sens','L’hygiène quotidienne','Les animaux de mon milieu','Les plantes autour de moi','L’eau et sa propreté','La politesse et le respect','Ma famille et mon école','Protéger mon environnement')}]},
 {id:'p2',nom:'2e primaire',matieres:[
  {id:'fr',nom:'Français',missions:L('Réviser les syllabes et les mots','Les phrases affirmatives','Les phrases interrogatives','Le nom : personne, animal, chose','Le verbe d’action','Le singulier et le pluriel','Lire un texte court','Répondre à des questions de lecture','Écrire une phrase complète','Décrire une image','Écrire un petit message','Raconter une courte histoire')},
  {id:'ma',nom:'Mathématiques',missions:L('Les nombres jusqu’à 100','Les dizaines et les unités','Comparer les nombres','Addition sans retenue','Addition avec retenue','Soustraction simple','Les doubles et les moitiés','Les mesures : longueur et poids','Les pièces de monnaie','Les formes géométriques','Les problèmes de la vie quotidienne','Révision générale')},
  {id:'sc',nom:'Sciences, milieu et civisme',missions:L('Les objets naturels et les objets fabriqués','Les animaux et leurs habitats','Les plantes et leurs besoins','L’alimentation équilibrée','La propreté du corps et de la maison','Les règles de vie à l’école','Les membres de la communauté','Protéger l’eau et la nature')}]},
 {id:'p3',nom:'3e primaire',matieres:[
  {id:'fr',nom:'Français',missions:L('La phrase et ses types','Le sujet et le verbe','Le nom commun et le nom propre','Les articles','Les adjectifs simples','Le présent des verbes courants','Les accords simples','La lecture d’un texte narratif','Le vocabulaire du milieu','Les synonymes et les contraires','Le récit court','La description d’un lieu','Le dialogue simple','Rédiger une lettre courte')},
  {id:'ma',nom:'Mathématiques',missions:L('Les nombres jusqu’à 1 000','Les centaines, dizaines et unités','Addition jusqu’à 1 000','Soustraction jusqu’à 1 000','Introduction à la multiplication','Les tables de 2, 5 et 10','Les tables de 3 et 4','La division simple','Les mesures de longueur','Les mesures de masse','Les figures géométriques','Le périmètre du carré et du rectangle','Les problèmes en deux étapes','Révision et évaluation')},
  {id:'sc',nom:'Sciences, histoire-géographie et civisme',missions:L('Les parties de la plante','Les animaux et leur alimentation','L’eau, l’air et le sol','La santé et la prévention des maladies','Les moyens de transport','Mon village et ma ville','Les provinces de la RDC','Les droits et devoirs de l’enfant','La paix et le respect des autres','Protéger l’environnement')}]},
 {id:'p4',nom:'4e primaire',matieres:[
  {id:'fr',nom:'Français',missions:L('Les types de phrases','Les fonctions : sujet, verbe, complément','Les déterminants','Les adjectifs qualificatifs','Le présent de tous les verbes','Le passé composé','Le futur simple','Les accords dans la phrase','La lecture d’un récit','Le résumé d’un texte','La description d’une personne','Le récit à partir d’images','La lettre administrative simple','Rédiger un petit article scolaire')},
  {id:'ma',nom:'Mathématiques',missions:L('Les nombres jusqu’à 10 000','Addition et soustraction de grands nombres','Les tables de multiplication jusqu’à 10','Multiplication par un nombre à deux chiffres','Division avec reste','Les multiples et diviseurs','Les fractions simples','Les unités de mesure','Les conversions simples','Le périmètre des figures','L’aire du carré et du rectangle','Les angles','Les problèmes complexes','Révision générale')},
  {id:'sc',nom:'Sciences, histoire-géographie et civisme',missions:L('Le corps humain et la santé','Les écosystèmes simples','L’eau dans la nature','Les énergies et leurs usages','Les moyens de communication','L’histoire de mon pays','La géographie de la RDC','Les ressources naturelles de la RDC','La démocratie et les règles de vie','La protection de l’environnement')}]},
 {id:'p5',nom:'5e primaire',matieres:[
  {id:'fr',nom:'Français',missions:L('Les classes grammaticales','Les fonctions dans la phrase','Les temps du passé','Les temps du futur','Les accords du participe passé','Les pronoms','Les mots de liaison','La lecture d’un texte descriptif','La lecture d’un texte narratif','Le résumé','La description d’un paysage','Le récit d’aventure','Le dialogue et la mise en scène','La lettre officielle simple','Rédiger un texte argumentatif court')},
  {id:'ma',nom:'Mathématiques',missions:L('Les grands nombres','Les quatre opérations','Les fractions : notion et lecture','Comparer les fractions','Additionner des fractions simples','Les nombres décimaux','Comparer les décimaux','Addition et soustraction des décimaux','Multiplication des décimaux','Les pourcentages simples','Les unités de mesure et conversions','Le périmètre et l’aire','Le volume du cube et du pavé','Les problèmes de la vie courante','Révision et évaluation')},
  {id:'sc',nom:'Sciences, histoire-géographie et civisme',missions:L('La nutrition et la santé','Les maladies et leur prévention','Les écosystèmes de la RDC','La faune et la flore congolaises','L’eau, l’air et la pollution','Les énergies renouvelables','Les grandes périodes de l’histoire de la RDC','La géographie physique de la RDC','Les provinces et les villes principales','Les droits humains','La citoyenneté et la responsabilité','Le développement durable')}]},
 {id:'p6',nom:'6e primaire',matieres:[
  {id:'fr',nom:'Français',missions:L('Révision grammaticale','Les fonctions avancées','La voix active et la voix passive','Le discours direct et indirect','Les temps du récit','Les connecteurs logiques','La lecture d’un texte argumentatif','L’idée principale et les idées secondaires','Le résumé de texte','La dissertation simple','Le compte rendu','La lettre formelle','Le débat oral','La correction et la réécriture','Préparation à l’épreuve de l’aventure')},
  {id:'ma',nom:'Mathématiques',missions:L('Les nombres entiers et décimaux','Les quatre opérations sur les décimaux','Les fractions et les décimaux','Les pourcentages','La proportionnalité','Les échelles','Les mesures de longueur, masse et capacité','Les conversions complexes','Le périmètre et l’aire des figures','Le volume des solides','Les angles et les figures','Les statistiques simples','Les problèmes de la vie quotidienne','Les défis de l’épreuve de l’aventure','Révision générale et préparation à l’épreuve de l’aventure')},
  {id:'sc',nom:'Sciences, histoire-géographie et civisme',missions:L('Le corps humain et la reproduction','Les maladies courantes et la prévention','L’hygiène alimentaire','L’environnement et le changement climatique','Les ressources naturelles et leur gestion','Les technologies utiles à la communauté','L’histoire de la RDC avant et pendant la colonisation','L’indépendance et la RDC contemporaine','La géographie économique de la RDC','Les institutions de la RDC','Les droits humains et la citoyenneté','Projet citoyen de fin d’année')}]},
 {id:'s7',nom:'7e année',matieres:[
  {id:'fr',nom:'Français',missions:L('La phrase complexe','Les propositions','Les temps du récit','Les modes et les temps verbaux','L’analyse grammaticale','La lecture d’un texte littéraire','Le résumé','Le compte rendu','La dissertation simple','L’expression orale')},
  {id:'ma',nom:'Mathématiques',missions:L('Les nombres relatifs','Les opérations sur les relatifs','Les fractions et les puissances','Les racines carrées','Le calcul littéral','Les équations du premier degré','Les proportions et pourcentages','La géométrie du triangle','Le théorème de Pythagore','Les aires et volumes','Les statistiques simples','Les problèmes concrets')},
  {id:'sc',nom:'Sciences',missions:L('La matière et ses états','L’atome et la molécule','Les mélanges et les solutions','La cellule vivante','La nutrition des êtres vivants','La respiration','La force et le mouvement','L’électricité simple','La lumière','L’environnement et le développement durable')},
  {id:'hg',nom:'Histoire, géographie et civisme',missions:L('L’Afrique précoloniale','La colonisation de la RDC','L’indépendance de la RDC','La géographie physique de l’Afrique','La géographie humaine de la RDC','Les ressources et l’économie congolaise','Les droits humains','Citoyenneté et responsabilité')}]},
 {id:'s8',nom:'8e année',matieres:[
  {id:'fr',nom:'Français',missions:L('Les subordonnées','Le discours direct et indirect','Les temps du passé','Le style et les figures de style','L’analyse littéraire','La lecture d’un roman ou d’une nouvelle','Le résumé de texte','La dissertation littéraire','La dissertation argumentative','Le débat et l’exposé oral')},
  {id:'ma',nom:'Mathématiques',missions:L('Les puissances et racines','Les identités remarquables','Les équations et inéquations','Les systèmes d’équations','Les fonctions linéaires','Les fonctions affines','La géométrie du cercle','Les théorèmes de Thalès et Pythagore','Les vecteurs simples','Les statistiques','Les probabilités simples','Les problèmes de synthèse')},
  {id:'sc',nom:'Sciences',missions:L('La structure de la matière','Les réactions chimiques','Les acides et les bases','La génétique et l’hérédité','La reproduction humaine','Les maladies et l’immunité','L’électricité et les circuits','Les forces et les machines simples','L’énergie et ses transformations','L’environnement et les technologies')},
  {id:'or',nom:'Orientation',missions:L('Les humanités scientifiques','Les humanités littéraires','Les humanités commerciales','Les humanités pédagogiques','Les humanités techniques et professionnelles','Choisir son orientation selon ses talents et projets')}]}
];

// Contenu jouable : [explication (2 phrases), questions]
const M=(intro,qs)=>({intro:intro,qs:qs});
const C={};
C['p1|fr|0']=M(['Les voyelles sont a, e, i, o, u. Il y en a cinq.','On les entend dans beaucoup de mots : a comme « avion », o comme « orange ».'],[
 Q('Quelle lettre est une voyelle ?',['a','b','m','t'],'a','a est une voyelle.'),
 Q('Combien y a-t-il de voyelles ?',['3','5','7','10'],'5','Il y a cinq voyelles : a, e, i, o, u.'),
 Q('Par quelle voyelle commence le mot « orange » ?',['o','a','i','u'],'o','« orange » commence par la voyelle o.'),
 Q('Quelle lettre n’est pas une voyelle ?',['m','e','i','o'],'m','m est une consonne.')]);
C['p1|fr|1']=M(['Les consonnes sont toutes les lettres qui ne sont pas des voyelles : b, c, d, f, l, m, n, p, r, s, t…','Avec une voyelle, une consonne forme une syllabe : ma, bi, lo.'],[
 Q('Quelle lettre est une consonne ?',['m','a','e','o'],'m','m est une consonne.'),
 Q('Par quelle consonne commence « ballon » ?',['b','a','l','o'],'b','« ballon » commence par b.'),
 Q('Quelle lettre n’est pas une consonne ?',['u','t','p','l'],'u','u est une voyelle.'),
 Q('Que forme la consonne m avec la voyelle a ?',['ma','am','mm','aa'],'ma','m + a fait « ma ».')]);
C['p1|fr|2']=M(['Une syllabe est un petit morceau de mot que l’on dit d’un seul coup de voix.','« ma-man » a deux syllabes. On peut les frapper dans les mains.'],[
 Q('Combien de syllabes y a-t-il dans « ma-man » ?',['1','2','3','4'],'2','Ma et man : deux syllabes.'),
 Q('Combien de syllabes y a-t-il dans « é-co-le » ?',['3','1','2','5'],'3','É, co, le : trois syllabes.'),
 Q('Quel mot a une seule syllabe ?',['chat','banane','maison','école'],'chat','« chat » se dit d’un seul coup.'),
 Q('Que forme b + a ?',['ba','ab','bb','aa'],'ba','b + a fait « ba ».')]);
C['p1|fr|3']=M(['Pour lire un mot, on lit chaque syllabe puis on les colle ensemble.','Par exemple : sa + c = « sac ».'],[
 Q('Lis le mot « sac ». Quel est cet objet ?',['un sac','un lit','un pot','un riz'],'un sac','« sac » désigne un sac.'),
 Q('Quel mot lit-on : m-a-m-a ?',['mama','papa','tata','nana'],'mama','m-a-m-a se lit « mama ».'),
 Q('Quel mot rime avec « chat » ?',['rat','loup','pain','sel'],'rat','« chat » et « rat » finissent par le même son.'),
 Q('Quel mot est écrit « riz » ?',['riz','ris','rit','rie'],'riz','On écrit « riz » avec un z.')]);
C['p1|fr|4']=M(['Ton prénom est important. Il commence toujours par une lettre majuscule.','Par exemple : Amani, Lola, Junior.'],[
 Q('Comment commence ton prénom ?',['par une majuscule','par un chiffre','par un point','par un tiret'],'par une majuscule','Un prénom commence par une majuscule.'),
 Q('Quelle écriture est correcte ?',['Amani','aMANI','amANi','aManI'],'Amani','Majuscule au début, puis des minuscules.'),
 Q('Avec quoi écrit-on son prénom ?',['un crayon','une fourchette','un seau','un balai'],'un crayon','On écrit avec un crayon ou un stylo.'),
 Q('Combien de lettres y a-t-il dans « Lola » ?',['4','3','5','6'],'4','L, o, l, a : quatre lettres.')]);
C['p1|fr|5']=M(['Ma famille, ce sont les personnes qui vivent avec moi ou qui m’aiment : papa, maman, frères, sœurs, grands-parents.','Chaque personne a un nom de parenté.'],[
 Q('Qui est la maman de ma maman ?',['ma grand-mère','ma tante','ma sœur','ma voisine'],'ma grand-mère','La maman de ma maman est ma grand-mère.'),
 Q('Le fils de mon papa et de ma maman est mon…',['frère','oncle','cousin','voisin'],'frère','C’est mon frère.'),
 Q('La sœur de ma maman est ma…',['tante','grand-mère','voisine','maîtresse'],'tante','C’est ma tante.'),
 Q('Quel mot désigne une personne de ma famille ?',['papa','table','chaise','crayon'],'papa','Papa fait partie de la famille.')]);
C['p1|fr|6']=M(['À l’école, on trouve des objets et des personnes : le cahier, le crayon, le tableau, le maître, la maîtresse, le directeur.','Connaître ces mots aide à bien parler en classe.'],[
 Q('Avec quoi écrit-on sur le cahier ?',['un crayon','un balai','une casserole','un sac de riz'],'un crayon','On écrit avec un crayon ou un stylo.'),
 Q('Qui nous apprend à lire en classe ?',['le maître ou la maîtresse','le pêcheur','le chauffeur','le boulanger'],'le maître ou la maîtresse','Le maître ou la maîtresse enseigne.'),
 Q('Quel mot est un objet de l’école ?',['le tableau','la casserole','le pneu','le marteau'],'le tableau','Le tableau est dans la classe.'),
 Q('Où range-t-on ses cahiers ?',['dans le cartable','dans le fleuve','dans un arbre','dans le feu'],'dans le cartable','Le cartable protège les cahiers.')]);
C['p1|fr|7']=M(['Une phrase dit quelque chose avec des mots dans le bon ordre. Elle commence par une majuscule et finit par un point.','« Maman cuisine le riz. » est une phrase.'],[
 Q('Quelle est une phrase ?',['Maman cuisine le riz.','riz maman le','cuisine riz','Maman riz'],'Maman cuisine le riz.','Les mots sont dans le bon ordre.'),
 Q('Remets dans l’ordre : « mange / Junior / une mangue ».',['Junior mange une mangue.','Mange Junior une mangue.','Une mangue Junior mange.','Mangue mange Junior.'],'Junior mange une mangue.','Qui fait quoi : Junior mange une mangue.'),
 Q('Que met-on à la fin d’une phrase ?',['un point','une virgule','un chiffre','rien'],'un point','Une phrase finit par un point.'),
 Q('Quelle phrase est complète ?',['Lola lit un livre.','Lola lit','un livre','Lola un'],'Lola lit un livre.','Elle dit qui fait quoi.')]);
C['p1|fr|8']=M(['Au début d’une phrase, on écrit une majuscule. À la fin, on met un point.','Les noms de personnes ont aussi une majuscule.'],[
 Q('Une phrase commence par…',['une majuscule','un chiffre','un point','un tiret'],'une majuscule','Toute phrase commence par une majuscule.'),
 Q('Quelle phrase est bien écrite ?',['Lola joue au ballon.','lola joue au ballon','Lola joue au ballon','LOLA joue AU ballon'],'Lola joue au ballon.','Majuscule au début, point à la fin.'),
 Q('Quel signe met-on à la fin d’une phrase ?',['le point','le plus','le moins','l’étoile'],'le point','Le point termine la phrase.'),
 Q('Quel mot prend une majuscule ?',['Junior','table','riz','chaise'],'Junior','Les prénoms prennent une majuscule.')]);
C['p1|fr|9']=M(['Pour comprendre une histoire, on la lit lentement et on cherche : qui ? où ? quoi ?','Lis bien chaque petite histoire avant de répondre.'],[
 Q('Amani va au marché. Il achète des mangues. Qu’achète Amani ?',['des mangues','du poisson','un livre','un ballon'],'des mangues','Il achète des mangues.'),
 Q('Amani va au marché. Où va Amani ?',['au marché','à l’école','au fleuve','à l’hôpital'],'au marché','Amani va au marché.'),
 Q('Lola a un chat. Il dort sur le lit. Qui dort sur le lit ?',['le chat','Lola','le chien','maman'],'le chat','C’est le chat qui dort.'),
 Q('Junior a faim. Il mange du pain. Pourquoi mange-t-il ?',['parce qu’il a faim','parce qu’il a froid','parce qu’il dort','parce qu’il joue'],'parce qu’il a faim','Il mange car il a faim.')]);
C['p1|fr|10']=M(['Décrire un objet, c’est dire comment il est : sa forme, sa couleur, sa taille.','Par exemple : une orange est ronde et orange.'],[
 Q('Une orange est…',['ronde et orange','carrée et bleue','longue et noire','plate et verte'],'ronde et orange','Une orange est ronde et orange.'),
 Q('De quelle couleur est le ciel sans nuage ?',['bleu','noir','rouge','marron'],'bleu','Le ciel est bleu.'),
 Q('Un éléphant est…',['grand','minuscule','transparent','carré'],'grand','L’éléphant est très grand.'),
 Q('Une fourmi est…',['petite','énorme','géante','immense'],'petite','La fourmi est petite.')]);
C['p1|fr|11']=M(['Parler de soi, c’est dire son prénom, son âge, ce que l’on aime.','On commence par « Je m’appelle… ».'],[
 Q('Pour te présenter, tu dis d’abord…',['Je m’appelle…','Donne-moi…','Va-t’en','Je ne sais pas'],'Je m’appelle…','On dit son prénom en premier.'),
 Q('Quelle phrase parle de moi ?',['J’ai six ans.','Il a six ans.','Elle a six ans.','Ils ont six ans.'],'J’ai six ans.','« J’ai » parle de moi.'),
 Q('Comment salue-t-on poliment le matin ?',['Bonjour !','Tais-toi !','Va-t’en !','Donne !'],'Bonjour !','On dit « Bonjour ».'),
 Q('Que peux-tu dire sur toi ?',['ce que j’aime','le secret de mon voisin','le mot de passe de maman','rien du tout'],'ce que j’aime','On parle de soi : prénom, âge, goûts.')]);

C['p1|ma|0']=M(['Compter de 1 à 5 : 1, 2, 3, 4, 5. Une main a cinq doigts.','On compte en touchant chaque objet une seule fois.'],[
 Q('Combien de doigts a une main ?',['5','3','7','10'],'5','Une main a cinq doigts.'),
 Q('Quel nombre vient après 3 ?',['4','2','5','6'],'4','Après 3 vient 4.'),
 Q('Quel nombre vient avant 5 ?',['4','6','3','2'],'4','Avant 5 vient 4.'),
 Q('Combien de mangues : 🥭🥭🥭 ?',['3','2','4','5'],'3','Il y a trois mangues.')]);
C['p1|ma|1']=M(['On continue : 6, 7, 8, 9, 10. Deux mains ont dix doigts.','Plus on avance, plus le nombre est grand.'],[
 Q('Quel nombre vient après 7 ?',['8','6','9','10'],'8','Après 7 vient 8.'),
 Q('Combien de doigts ont deux mains ?',['10','5','8','12'],'10','Deux mains : dix doigts.'),
 Q('Quel nombre est entre 8 et 10 ?',['9','7','6','11'],'9','Entre 8 et 10 il y a 9.'),
 Q('Quel est le plus grand nombre : 6, 9 ou 7 ?',['9','6','7','5'],'9','9 est le plus grand.')]);
C['p1|ma|2']=M(['Comparer, c’est dire qui en a plus, moins ou autant.','5 est plus grand que 3. 3 est plus petit que 5.'],[
 Q('Qui en a le plus : 3 mangues ou 5 mangues ?',['5 mangues','3 mangues','autant','aucune'],'5 mangues','5 est plus que 3.'),
 Q('Lola a 4 billes, Junior a 4 billes. Ils ont…',['autant','plus','moins','zéro'],'autant','4 et 4 : autant.'),
 Q('Quel nombre est plus petit que 6 ?',['4','8','7','9'],'4','4 est plus petit que 6.'),
 Q('Quel nombre est plus grand que 7 ?',['9','5','3','2'],'9','9 est plus grand que 7.')]);
C['p1|ma|3']=M(['Après 10 viennent 11, 12, 13… jusqu’à 20.','10 + 1 = 11.'],[
 Q('Quel nombre vient après 14 ?',['15','13','16','12'],'15','Après 14 vient 15.'),
 Q('Quel nombre est entre 17 et 19 ?',['18','16','20','15'],'18','Entre 17 et 19 il y a 18.'),
 Q('Combien font 10 + 1 ?',['11','12','9','20'],'11','10 + 1 = 11.'),
 Q('Quel est le plus grand : 12, 19 ou 15 ?',['19','12','15','11'],'19','19 est le plus grand.')]);
C['p1|ma|4']=M(['On peut compter de 1 en 1, ou de 10 en 10 : 10, 20, 30, 40, 50.','Après 29 vient 30. Après 49 vient 50.'],[
 Q('Compte de 10 en 10 : 10, 20, … Quel est le suivant ?',['30','25','40','21'],'30','10, 20, 30.'),
 Q('Quel nombre vient après 29 ?',['30','28','31','20'],'30','Après 29 vient 30.'),
 Q('Quel nombre vient après 49 ?',['50','48','40','51'],'50','Après 49 vient 50.'),
 Q('Quel nombre vient avant 40 ?',['39','41','30','38'],'39','Avant 40 vient 39.')]);
C['p1|ma|5']=M(['Additionner, c’est ajouter. 2 + 3 = 5.','On peut compter sur ses doigts pour vérifier.'],[
 Q('Combien font 2 + 3 ?',['5','4','6','1'],'5','2 + 3 = 5.'),
 Q('Combien font 4 + 4 ?',['8','6','7','9'],'8','4 + 4 = 8.'),
 Q('Lola a 3 mangues, elle en reçoit 2. Combien en a-t-elle ?',['5','4','6','1'],'5','3 + 2 = 5.'),
 Q('Combien font 1 + 9 ?',['10','8','11','9'],'10','1 + 9 = 10.')]);
C['p1|ma|6']=M(['Le cercle est rond. Le carré a 4 côtés égaux. Le triangle a 3 côtés.','On trouve ces formes partout autour de nous.'],[
 Q('Quelle forme est ronde ?',['le cercle','le carré','le triangle','le rectangle'],'le cercle','Le cercle est rond.'),
 Q('Combien de côtés a un triangle ?',['3','4','5','2'],'3','Un triangle a trois côtés.'),
 Q('Combien de côtés a un carré ?',['4','3','5','6'],'4','Un carré a quatre côtés.'),
 Q('Une assiette ronde ressemble à un…',['cercle','carré','triangle','losange'],'cercle','Elle a la forme d’un cercle.')]);
C['p1|ma|7']=M(['Les choses n’ont pas toutes la même taille : grand, petit, long, court.','On compare toujours deux choses.'],[
 Q('Qui est le plus grand ?',['un éléphant','une fourmi','une souris','une abeille'],'un éléphant','L’éléphant est très grand.'),
 Q('Quel est le contraire de « long » ?',['court','grand','gros','haut'],'court','Le contraire de long est court.'),
 Q('Quel est le contraire de « grand » ?',['petit','long','lourd','large'],'petit','Le contraire de grand est petit.'),
 Q('Un crayon est… qu’un arbre.',['plus court','plus long','plus grand','plus haut'],'plus court','Le crayon est plus court.')]);
C['p1|ma|8']=M(['Pour dire où est une chose : devant, derrière, dessus, dessous.','Le chat est sous la table : il est dessous.'],[
 Q('Le chapeau est sur la tête. Il est…',['dessus','dessous','derrière','loin'],'dessus','Sur la tête : dessus.'),
 Q('Le chat est sous la table. Il est…',['dessous','dessus','devant','sur'],'dessous','Sous la table : dessous.'),
 Q('Dans la file, Amani est devant Lola. Qui est derrière ?',['Lola','Amani','personne','le maître'],'Lola','Lola est derrière Amani.'),
 Q('Quel est le contraire de « devant » ?',['derrière','dessus','loin','haut'],'derrière','Le contraire de devant est derrière.')]);
C['p1|ma|9']=M(['Trier, c’est ranger ensemble ce qui va ensemble.','Les fruits avec les fruits, les animaux avec les animaux.'],[
 Q('Quel objet n’est pas un fruit ?',['une chaise','une mangue','une banane','une orange'],'une chaise','Une chaise n’est pas un fruit.'),
 Q('Dans quel groupe va le chien ?',['les animaux','les fruits','les meubles','les outils'],'les animaux','Le chien est un animal.'),
 Q('Quel est l’intrus : lion, chat, chien, table ?',['table','lion','chat','chien'],'table','La table n’est pas un animal.'),
 Q('Quel est l’intrus : riz, pain, manioc, crayon ?',['crayon','riz','pain','manioc'],'crayon','Le crayon ne se mange pas.')]);
C['p1|ma|10']=M(['Un problème raconte une petite histoire avec des nombres.','On lit bien, puis on ajoute ou on enlève.'],[
 Q('J’ai 4 oranges, j’en mange 1. Combien en reste-t-il ?',['3','5','4','2'],'3','4 − 1 = 3.'),
 Q('Il y a 5 enfants, 2 enfants arrivent. Combien d’enfants maintenant ?',['7','3','5','6'],'7','5 + 2 = 7.'),
 Q('6 oiseaux sont sur l’arbre, 2 s’envolent. Combien en reste-t-il ?',['4','8','2','6'],'4','6 − 2 = 4.'),
 Q('J’ai 3 billes, j’en gagne 3. Combien en ai-je ?',['6','0','3','9'],'6','3 + 3 = 6.')]);
C['p1|ma|11']=M(['Bravo, tu as parcouru toute l’année. Voici un jeu de révision.','Compter, comparer, ajouter : tu sais tout faire !'],[
 Q('Combien font 5 + 5 ?',['10','5','15','11'],'10','5 + 5 = 10.'),
 Q('Quel nombre vient après 19 ?',['20','18','21','10'],'20','Après 19 vient 20.'),
 Q('Quelle forme a 3 côtés ?',['le triangle','le carré','le cercle','le rectangle'],'le triangle','Le triangle a 3 côtés.'),
 Q('J’ai 7 mangues, j’en donne 2. Combien me reste-t-il ?',['5','9','4','2'],'5','7 − 2 = 5.')]);

C['p1|ev|0']=M(['Nous avons cinq sens : la vue, l’ouïe, l’odorat, le goût et le toucher.','Chaque sens utilise une partie du corps.'],[
 Q('Avec quoi voit-on ?',['les yeux','les oreilles','le nez','les mains'],'les yeux','On voit avec les yeux.'),
 Q('Avec quoi entend-on ?',['les oreilles','les yeux','la bouche','les pieds'],'les oreilles','On entend avec les oreilles.'),
 Q('Combien avons-nous de sens ?',['5','3','2','10'],'5','Nous avons cinq sens.'),
 Q('Avec quoi sent-on les odeurs ?',['le nez','les yeux','les genoux','les cheveux'],'le nez','On sent avec le nez.')]);
C['p1|ev|1']=M(['L’hygiène, c’est rester propre pour ne pas tomber malade.','On se lave les mains, on se brosse les dents, on se baigne.'],[
 Q('Quand se lave-t-on les mains ?',['avant de manger','jamais','seulement le dimanche','après avoir dormi'],'avant de manger','On se lave les mains avant de manger.'),
 Q('Avec quoi se brosse-t-on les dents ?',['une brosse à dents','un balai','une cuillère','un peigne'],'une brosse à dents','On utilise une brosse à dents.'),
 Q('Pourquoi se laver ?',['pour éviter les microbes','pour salir ses vêtements','pour rien','pour faire du bruit'],'pour éviter les microbes','Se laver éloigne les microbes.'),
 Q('Après les toilettes, on…',['se lave les mains','mange tout de suite','court','dort'],'se lave les mains','On se lave toujours les mains.')]);
C['p1|ev|2']=M(['Autour de nous vivent des animaux : la poule, la vache, le chien, le poisson…','Chaque animal vit à sa façon.'],[
 Q('Quel animal donne du lait ?',['la vache','la poule','le poisson','le serpent'],'la vache','La vache donne du lait.'),
 Q('Quel animal pond des œufs ?',['la poule','le chien','la vache','le chat'],'la poule','La poule pond des œufs.'),
 Q('Quel animal aboie ?',['le chien','le chat','la poule','la vache'],'le chien','Le chien aboie.'),
 Q('Quel animal vit dans l’eau ?',['le poisson','le chien','la poule','la chèvre'],'le poisson','Le poisson vit dans l’eau.')]);
C['p1|ev|3']=M(['Les plantes ont des racines, une tige, des feuilles et parfois des fleurs et des fruits.','Elles ont besoin d’eau et de lumière.'],[
 Q('De quoi une plante a-t-elle besoin ?',['d’eau et de lumière','de sucre','de plastique','de bruit'],'d’eau et de lumière','Elle a besoin d’eau et de lumière.'),
 Q('Quelle partie de la plante est sous la terre ?',['les racines','les feuilles','les fleurs','les fruits'],'les racines','Les racines sont sous la terre.'),
 Q('Quel arbre donne des mangues ?',['le manguier','le bananier','le palmier','le baobab'],'le manguier','Le manguier donne des mangues.'),
 Q('Quelle partie devient un fruit ?',['la fleur','la racine','la tige','la terre'],'la fleur','La fleur devient un fruit.')]);
C['p1|ev|4']=M(['L’eau est précieuse. Pour boire, il faut une eau propre.','Une eau sale peut rendre malade.'],[
 Q('Quelle eau peut-on boire ?',['l’eau propre','l’eau sale','l’eau de la mare','l’eau des égouts'],'l’eau propre','On boit une eau propre.'),
 Q('Comment garder l’eau propre ?',['couvrir le seau','le laisser ouvert','y jeter des déchets','y mettre de la boue'],'couvrir le seau','Couvrir protège l’eau.'),
 Q('Pourquoi l’eau sale est-elle dangereuse ?',['elle rend malade','elle est utile','elle est sucrée','elle est chaude'],'elle rend malade','Elle peut donner des maladies.'),
 Q('Qui a besoin d’eau ?',['tous les êtres vivants','seulement les poissons','personne','seulement les enfants'],'tous les êtres vivants','Tous les êtres vivants ont besoin d’eau.')]);
C['p1|ev|5']=M(['Être poli, c’est respecter les autres avec de bons mots.','Bonjour, merci, s’il vous plaît, pardon.'],[
 Q('Que dit-on pour remercier ?',['merci','pardon','au revoir','bonne nuit'],'merci','On dit « merci ».'),
 Q('Que dit-on le matin en arrivant ?',['bonjour','bonne nuit','à demain','au revoir'],'bonjour','On dit « bonjour ».'),
 Q('Pour demander poliment, on dit…',['s’il vous plaît','donne-moi','vite','tais-toi'],'s’il vous plaît','On dit « s’il vous plaît ».'),
 Q('Si je bouscule quelqu’un, je dis…',['pardon','merci','bonjour','tais-toi'],'pardon','On dit « pardon ».')]);
C['p1|ev|6']=M(['Ma famille m’aime et m’aide. À l’école, je retrouve mes camarades et mes maîtres.','Chacun a un rôle.'],[
 Q('Qui est le chef de l’école ?',['le directeur','le chauffeur','le pêcheur','le boulanger'],'le directeur','Le directeur dirige l’école.'),
 Q('Qui nous enseigne ?',['le maître ou la maîtresse','le facteur','le pilote','le tailleur'],'le maître ou la maîtresse','Il ou elle nous enseigne.'),
 Q('Pourquoi va-t-on à l’école ?',['pour apprendre','pour dormir','pour se disputer','pour rien'],'pour apprendre','On va à l’école pour apprendre.'),
 Q('Que fait-on en classe quand le maître parle ?',['on écoute','on crie','on court','on dort'],'on écoute','On écoute le maître.')]);
C['p1|ev|7']=M(['Protéger l’environnement, c’est garder propre notre quartier, notre fleuve et nos arbres.','Chaque petit geste compte.'],[
 Q('Où jette-t-on les déchets ?',['à la poubelle','dans le fleuve','dans la rue','sous un arbre'],'à la poubelle','On jette les déchets à la poubelle.'),
 Q('Quel geste protège la nature ?',['planter un arbre','couper tous les arbres','brûler les déchets','salir l’eau'],'planter un arbre','Planter un arbre aide la nature.'),
 Q('Pourquoi ne faut-il pas jeter de plastique dans le fleuve ?',['il fait du mal aux poissons','il nourrit les poissons','il est joli','il purifie l’eau'],'il fait du mal aux poissons','Le plastique pollue et blesse les animaux.'),
 Q('Que faut-il faire de l’eau du robinet ?',['ne pas la gaspiller','la laisser couler','la salir','la jeter'],'ne pas la gaspiller','L’eau est précieuse.')]);

Object.assign(C,C2);
Object.keys(JEUX).forEach(k=>{if(C[k])C[k].jeux=JEUX[k]});
Object.keys(COLLECTES).forEach(k=>{if(C[k])C[k].collecte=COLLECTES[k]});
[[C3,J3,K3],[C4,J4,K4],[C5,J5,K5],[C6,J6,K6]].forEach(([c,j,k])=>{Object.assign(C,c);Object.keys(j).forEach(x=>{if(C[x])C[x].jeux=j[x]});Object.keys(k).forEach(x=>{if(C[x])C[x].collecte=k[x]})});
export const CONTENU=C;
export const missionCle=(n,m,i)=>n+'|'+m+'|'+i;
