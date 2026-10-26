// Données du jeu : banques de questions, personnages, objets.
export const Q=(q,c,a,exp)=>({q,c,a,exp});
export const BANK={
 maths:[
  Q('Une cagette contient 8 mangues. Combien de mangues dans 5 cagettes ?',['30','35','40','45'],'40','5 × 8 = 40.'),
  Q('Quel est le double de 17 ?',['27','34','37','32'],'34','17 × 2 = 34.'),
  Q('Un sac de 25 mangues est partagé entre 5 enfants. Combien chacun reçoit-il ?',['4','5','6','7'],'5','25 ÷ 5 = 5.'),
  Q('Combien font 7 × 6 ?',['36','42','48','40'],'42','7 × 6 = 42.'),
  Q('Combien font 100 − 37 ?',['73','67','63','53'],'63','100 − 37 = 63.'),
  Q('Quelle est la moitié de 90 ?',['40','45','50','55'],'45','90 ÷ 2 = 45.'),
  Q('Combien font 12 + 29 ?',['39','41','43','51'],'41','12 + 29 = 41.'),
  Q('Combien font 9 × 9 ?',['72','81','90','99'],'81','9 × 9 = 81.'),
  Q('Combien font 144 ÷ 12 ?',['10','11','12','14'],'12','12 × 12 = 144.'),
  Q('Quel est le périmètre d’un carré de 6 m de côté ?',['12 m','24 m','36 m','30 m'],'24 m','4 × 6 = 24 m.'),
  Q('Trois cahiers à 500 FC chacun coûtent combien en tout ?',['1 000 FC','1 200 FC','1 500 FC','2 000 FC'],'1 500 FC','3 × 500 = 1 500.')
 ],
 francais:[
  Q('Hier, nous ___ au marché. (verbe aller)',['allons','sommes allés','irons','allerons'],'sommes allés','Au passé composé : nous sommes allés.'),
  Q('Quel est l’antonyme de « ancien » ?',['vieux','nouveau','vieil','long'],'nouveau','Le contraire d’« ancien » est « nouveau ».'),
  Q('Quel mot est un nom propre ?',['chien','Kinshasa','livre','maison'],'Kinshasa','Un nom propre désigne un lieu précis.'),
  Q('Quel est le pluriel de « cheval » ?',['chevals','chevaux','chevaus','chevales'],'chevaux','Les noms en -al font leur pluriel en -aux.'),
  Q('Quel est un synonyme de « content » ?',['triste','heureux','fâché','pressé'],'heureux','« Content » et « heureux » ont le même sens.'),
  Q('Les enfants ___ dans la cour. (jouer, présent)',['jouent','joue','jouons','jouez'],'jouent','Avec « ils / elles », le verbe se termine par -ent.'),
  Q('Quel mot est un verbe ?',['table','courir','joli','rapidement'],'courir','« Courir » exprime une action : c’est un verbe.'),
  Q('Quel est le féminin de « acteur » ?',['acteuse','actrice','acteure','actresse'],'actrice','Acteur → actrice.'),
  Q('Ils ___ faim. (verbe avoir)',['ont','sont','avons','a'],'ont','Ils ont : verbe avoir à la 3e personne du pluriel.')
 ],
 geo:[
  Q('Quelle est la capitale de la RDC ?',['Lubumbashi','Goma','Kinshasa','Kisangani'],'Kinshasa','Kinshasa est la capitale de la RDC.'),
  Q('Combien de provinces compte la RDC aujourd’hui ?',['11','15','26','30'],'26','Depuis 2015, la RDC compte 26 provinces.'),
  Q('Quel grand fleuve traverse Kinshasa ?',['le Nil','le Niger','le Congo','le Zambèze'],'le Congo','Le fleuve Congo borde Kinshasa.'),
  Q('Quel océan touche la côte de la RDC ?',['Indien','Atlantique','Pacifique','Arctique'],'Atlantique','La petite côte de la RDC donne sur l’océan Atlantique.'),
  Q('Quelle est la grande ville du Haut-Katanga ?',['Goma','Lubumbashi','Matadi','Bukavu'],'Lubumbashi','Lubumbashi est le chef-lieu du Haut-Katanga.'),
  Q('Quel lac borde la RDC à l’est ?',['Tchad','Tanganyika','Titicaca','Léman'],'Tanganyika','Le lac Tanganyika longe l’est de la RDC.'),
  Q('Quel est le principal port maritime de la RDC ?',['Matadi','Kindu','Kikwit','Bunia'],'Matadi','Matadi est le grand port sur le fleuve Congo.'),
  Q('Quelle est la capitale du Congo-Brazzaville, pays voisin ?',['Brazzaville','Luanda','Kampala','Kigali'],'Brazzaville','Brazzaville est face à Kinshasa, de l’autre côté du fleuve.')
 ],
 histoire:[
  Q('En quelle année le Congo belge est-il devenu indépendant ?',['1948','1960','1965','1975'],'1960','L’indépendance date de 1960.'),
  Q('Quel jour célèbre-t-on l’indépendance ?',['1er mai','30 juin','17 mai','4 décembre'],'30 juin','La fête de l’indépendance a lieu le 30 juin.'),
  Q('Qui fut le premier Premier ministre du Congo indépendant ?',['Patrice Lumumba','Mobutu','Laurent-Désiré Kabila','Félix Tshisekedi'],'Patrice Lumumba','Patrice Lumumba dirigea le premier gouvernement.'),
  Q('Qui fut le premier président du Congo indépendant ?',['Joseph Kasa-Vubu','Mobutu','Patrice Lumumba','Moïse Tshombe'],'Joseph Kasa-Vubu','Joseph Kasa-Vubu fut le premier chef de l’État.'),
  Q('Quel symbole figure en haut à gauche du drapeau de la RDC ?',['un soleil','une étoile jaune','une croix','un lion'],'une étoile jaune','Une étoile jaune brille sur fond bleu ciel.'),
  Q('Quelle est la devise de la RDC ?',['Justice – Paix – Travail','Unité – Force – Progrès','Liberté – Égalité – Fraternité','Travail – Famille – Patrie'],'Justice – Paix – Travail','La devise nationale est « Justice – Paix – Travail ».'),
  Q('Quelle est la monnaie de la RDC ?',['le franc congolais','le dollar','le cedi','le naira'],'le franc congolais','La monnaie nationale est le franc congolais (FC).')
 ]
};
export const SUJETS={maths:'Calcul',francais:'Français',geo:'Géographie',histoire:'Histoire'};


// Personnages : position (x,z en mètres) dans leur scène, orientation ry, apparence.
// k : tenue (uniforme, pagne, boubou) ; co : coiffure ; h : taille relative ; skin : teint.
export const NPC={
 lola:{sc:'ville',x:22.5,z:1.5,ry:-1.9,name:'Mama Lola',short:'Mama Lola',role:'Gardienne du portail',kind:'quiz',sujet:'maths',nb:3,
  look:{s:'f',h:.93,skin:'#6b4028',c:'#e67e22',c2:'#1f7a4d',k:'pagne',co:'gris',age:'aine'},
  intro:['Bonjour, mon enfant ! Le portail ne s’ouvre que pour ceux qui savent compter.','Réponds à mes trois questions et je te laisse entrer.'],
  outro:'Bravo ! Le portail est ouvert. Entre dans l’école et va voir la maîtresse.'},
 ilunga:{sc:'classe',x:-3,z:-3.6,ry:0,name:'Professeure Ilunga',short:'la maîtresse',role:'Maîtresse',kind:'quiz',sujet:'francais',nb:3,needs:'lola',
  look:{s:'f',h:.98,skin:'#5a3623',c:'#8e44ad',k:'boubou',co:'tresses'},
  intro:['Bienvenue à LEXARIS ACADÉMIE !','Aujourd’hui, la leçon porte sur la langue. Trois questions pour commencer.'],
  outro:'Très bien ! Va t’asseoir près de Junior, il t’attend pour la géographie.'},
 junior:{sc:'classe',x:2.6,z:-0.1,ry:Math.PI,name:'Junior',short:'Junior',role:'Élève',kind:'quiz',sujet:'geo',nb:2,needs:'ilunga',sit:true,
  look:{s:'h',h:.74,skin:'#7a4a2e',c:'#16a085',k:'uniforme',co:'courtes'},
  intro:['Salut ! La géographie, c’est mon sujet préféré.'],
  outro:'Bien joué ! Va voir le directeur, il veut te poser les dernières questions.'},
 mavungu:{sc:'classe',x:5.6,z:-3.4,ry:0,name:'Directeur Mavungu',short:'le directeur',role:'Directeur',kind:'quiz',sujet:'histoire',nb:2,needs:'junior',
  look:{s:'h',h:1.04,skin:'#4f3020',c:'#2c3e50',k:'uniforme',co:'courtes',cravate:true},
  intro:['Tu as bien travaillé.','Deux dernières questions pour finir la leçon.'],
  outro:'Leçon terminée ! Tu gagnes 20 pièces et du tissu wax pour ta maison.'},
 bea:{sc:'ville',x:3,z:-6.6,ry:0,name:'Maman Béa',short:'Maman Béa',role:'Marchande',kind:'shop',
  look:{s:'f',h:.97,skin:'#744630',c:'#c0392b',k:'pagne',co:'nattes'}},
 mama:{sc:'maison',x:1.4,z:-0.8,ry:0,name:'Maman',short:'Maman',role:'À la maison',kind:'talk',
  look:{s:'f',h:.97,skin:'#6b4028',c:'#d35400',k:'pagne',co:'tresses'}}
};
export const AUTOP={
 jer:{sc:'ville',x:11,z:3.2,ry:-1.2,name:'Jérémie',look:{s:'h',h:.9,skin:'#6b4028',c:'#27ae60',k:'uniforme',co:'courtes'}},
 kasa:{sc:'ville',x:12.6,z:4.6,ry:-1.9,name:'Petit Kasa',look:{s:'f',h:.72,skin:'#8a5634',c:'#e0a526',k:'pagne',co:'nattes'}}
};
export const AUTO=[['Jérémie','La leçon commence bientôt, tu viens ?'],['Petit Kasa','Mama Lola garde le portail, elle pose des questions !'],['Jérémie','Réponds bien et tu entreras dans la classe.'],['Petit Kasa','Moi, je connais déjà toutes les mangues !'],['Jérémie','Le manguier du village donne les meilleures mangues.']];
export const ITEMS={
 natte:{n:'Natte tressée',p:10},table:{n:'Table en bois',p:25},lampe:{n:'Lampe',p:20},
 rideau:{n:'Rideau en wax',p:10,t:1},tableau:{n:'Tableau du village',p:30},plante:{n:'Plante verte',p:15}
};

