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
 ,marche:[
  Q('Un kilo de manioc coûte 1 500 FC. Combien coûtent 3 kilos ?',['3 000 FC','4 500 FC','4 000 FC','5 500 FC'],'4 500 FC','3 × 1 500 = 4 500 FC.'),
  Q('Tu achètes pour 2 300 FC et tu donnes 5 000 FC. Combien te rend-on ?',['2 300 FC','2 500 FC','2 700 FC','3 700 FC'],'2 700 FC','5 000 − 2 300 = 2 700 FC.'),
  Q('Une caisse de 12 tomates coûte 6 000 FC. Combien coûte une tomate ?',['300 FC','400 FC','500 FC','600 FC'],'500 FC','6 000 ÷ 12 = 500 FC.'),
  Q('Quelle est la moitié de 3 600 FC ?',['1 600 FC','1 800 FC','2 000 FC','1 200 FC'],'1 800 FC','3 600 ÷ 2 = 1 800 FC.'),
  Q('Trois pains à 800 FC et un jus à 1 200 FC. Quel est le total ?',['3 200 FC','3 600 FC','4 000 FC','2 400 FC'],'3 600 FC','3 × 800 = 2 400, puis 2 400 + 1 200 = 3 600 FC.'),
  Q('Un sac de riz de 25 kg est partagé en sacs de 5 kg. Combien de sacs obtient-on ?',['4','5','6','10'],'5','25 ÷ 5 = 5 sacs.'),
  Q('Le prix passe de 4 000 FC à 5 000 FC. De combien a-t-il augmenté ?',['500 FC','1 000 FC','1 500 FC','2 000 FC'],'1 000 FC','5 000 − 4 000 = 1 000 FC.')
 ],
 nutrition:[
  Q('Quel aliment est riche en vitamine C ?',['le sel','l’orange','l’huile','le sucre'],'l’orange','Les agrumes comme l’orange contiennent beaucoup de vitamine C.'),
  Q('Quels aliments nous donnent surtout de l’énergie ?',['les féculents (manioc, riz)','les bonbons seulement','l’eau','le sel'],'les féculents (manioc, riz)','Les féculents comme le manioc et le riz donnent de l’énergie.'),
  Q('Que faut-il faire avant de manger ?',['courir','se laver les mains','dormir','jouer au ballon'],'se laver les mains','Se laver les mains évite de manger des microbes.'),
  Q('Dans quel aliment trouve-t-on des protéines ?',['le poisson','le sucre','le sel','l’eau'],'le poisson','Le poisson, la viande, les œufs et les haricots contiennent des protéines.'),
  Q('Pourquoi faut-il manger des fruits et des légumes ?',['pour être en bonne santé','pour avoir plus chaud','pour dormir','pour grandir en taille d’un coup'],'pour être en bonne santé','Ils apportent des vitamines qui protègent le corps.')
 ],
 fleuve:[
  Q('Le fleuve Congo se jette dans quel océan ?',['l’océan Indien','l’océan Atlantique','l’océan Pacifique','l’océan Arctique'],'l’océan Atlantique','Le fleuve Congo se jette dans l’océan Atlantique.'),
  Q('Quel est le deuxième plus long fleuve d’Afrique ?',['le Niger','le Congo','le Zambèze','le Nil'],'le Congo','Après le Nil, le Congo est le deuxième plus long fleuve d’Afrique.'),
  Q('Quelle ville se trouve en face de Kinshasa, de l’autre côté du fleuve ?',['Luanda','Brazzaville','Kampala','Nairobi'],'Brazzaville','Brazzaville, capitale de la République du Congo, est face à Kinshasa.'),
  Q('Quel grand animal vit dans les eaux du fleuve Congo ?',['le zèbre','l’hippopotame','le chameau','le renne'],'l’hippopotame','L’hippopotame vit dans les rivières et les fleuves d’Afrique centrale.'),
  Q('Un pêcheur attrape 12 poissons le matin et 9 l’après-midi. Combien en tout ?',['19','20','21','22'],'21','12 + 9 = 21 poissons.')
 ],
 environnement:[
  Q('Pourquoi ne faut-il pas jeter de déchets dans le fleuve ?',['ça pollue l’eau et fait mourir les poissons','ça fait grandir les poissons','ça purifie l’eau','ça n’a aucun effet'],'ça pollue l’eau et fait mourir les poissons','Les déchets polluent l’eau et menacent les animaux qui y vivent.'),
  Q('Que faut-il faire des déchets ?',['les jeter dans une poubelle','les enterrer dans le fleuve','les brûler près des maisons','les laisser dans la rue'],'les jeter dans une poubelle','On jette les déchets à la poubelle pour garder le quartier propre.'),
  Q('Que donnent les arbres à notre planète ?',['de l’oxygène','du plastique','de la fumée','du sable'],'de l’oxygène','Les arbres produisent l’oxygène que nous respirons.'),
  Q('Pourquoi faut-il économiser l’eau potable ?',['parce qu’elle est précieuse','parce qu’elle est dangereuse','parce qu’elle est gratuite et infinie','parce qu’elle est lourde'],'parce qu’elle est précieuse','L’eau potable est précieuse : tout le monde en a besoin.')
 ],
 sante:[
  Q('Combien de fois par jour faut-il au moins se brosser les dents ?',['une fois par semaine','au moins deux fois','jamais','dix fois'],'au moins deux fois','On se brosse les dents au moins deux fois par jour, matin et soir.'),
  Q('Comment attrape-t-on le paludisme ?',['par la piqûre d’un moustique','en mangeant du manioc','en jouant dehors','en buvant du lait'],'par la piqûre d’un moustique','Le paludisme est transmis par la piqûre de certains moustiques.'),
  Q('Comment se protéger du paludisme la nuit ?',['en dormant sous une moustiquaire','en dormant dehors','en laissant les fenêtres ouvertes','en mangeant beaucoup'],'en dormant sous une moustiquaire','La moustiquaire empêche les moustiques de nous piquer.'),
  Q('Pourquoi se faire vacciner ?',['pour se protéger de certaines maladies','pour grandir plus vite','pour mieux courir','pour avoir de la fièvre'],'pour se protéger de certaines maladies','Les vaccins protègent contre des maladies graves.'),
  Q('Pendant combien de temps faut-il se laver les mains avec du savon ?',['2 secondes','environ 20 secondes','10 minutes','jamais avec du savon'],'environ 20 secondes','Il faut frotter les mains environ 20 secondes avec du savon.'),
  Q('Que faut-il boire pour rester en bonne santé ?',['de l’eau propre','de l’eau sale','seulement des sodas','rien'],'de l’eau propre','L’eau propre est la meilleure boisson pour le corps.')
 ],
 corps:[
  Q('Quel organe pompe le sang dans le corps ?',['le cœur','le foie','l’estomac','le cerveau'],'le cœur','Le cœur pompe le sang dans tout le corps.'),
  Q('Avec quels organes respire-t-on ?',['les poumons','les reins','le cœur','les os'],'les poumons','On respire grâce aux poumons.'),
  Q('Que faire si quelqu’un a une petite coupure ?',['nettoyer la plaie avec de l’eau propre et du savon','mettre de la terre dessus','ne rien faire','la frotter fort'],'nettoyer la plaie avec de l’eau propre et du savon','On nettoie la plaie pour éviter une infection.'),
  Q('Combien d’heures un enfant doit-il dormir environ chaque nuit ?',['3 heures','5 heures','9 à 11 heures','15 heures'],'9 à 11 heures','Un enfant a besoin d’environ 9 à 11 heures de sommeil.')
 ],
 droit:[
  Q('Comment s’appelle la loi la plus importante d’un pays ?',['le règlement de l’école','la Constitution','le menu du marché','le calendrier'],'la Constitution','La Constitution est la loi fondamentale d’un pays.'),
  Q('À quel âge devient-on majeur en RDC ?',['14 ans','16 ans','18 ans','21 ans'],'18 ans','En RDC, on est majeur à 18 ans.'),
  Q('Qui vote les lois en RDC ?',['le Parlement','le marché','l’école','la police seule'],'le Parlement','Le Parlement (Assemblée nationale et Sénat) vote les lois.'),
  Q('Quel objet est le symbole de la justice ?',['la balance','le ballon','le marteau de menuisier','la houe'],'la balance','La balance symbolise une justice équitable.'),
  Q('À quoi sert le droit de vote ?',['à choisir ses dirigeants','à choisir son repas','à passer en classe supérieure','à voyager gratuitement'],'à choisir ses dirigeants','Voter permet de choisir les personnes qui dirigent le pays.')
 ],
 droits_enfant:[
  Q('Quel droit permet à tous les enfants d’apprendre à lire et à écrire ?',['le droit à l’éducation','le droit de conduire','le droit de voter','le droit de voyager seul'],'le droit à l’éducation','Tout enfant a le droit d’aller à l’école.'),
  Q('Un enfant peut-il être obligé de travailler à la place d’aller à l’école ?',['non, c’est interdit','oui, toujours','oui, si l’adulte le veut','oui, après 8 ans'],'non, c’est interdit','Le travail forcé des enfants est interdit.'),
  Q('Que faire si un enfant est maltraité ?',['en parler à un adulte de confiance','se taire','le cacher','se battre'],'en parler à un adulte de confiance','Il faut en parler à un adulte de confiance, qui pourra l’aider et le protéger.'),
  Q('Tout enfant a le droit à…',['la santé et la protection','aucun droit','un téléphone','un permis de conduire'],'la santé et la protection','Tous les enfants ont droit à la santé, à la protection et à l’éducation.')
 ]

};
export const SUJETS={maths:'Calcul',francais:'Français',geo:'Géographie',histoire:'Histoire',marche:'Calcul du marché',nutrition:'Alimentation',fleuve:'Le fleuve Congo',environnement:'Environnement',sante:'Santé',corps:'Le corps humain',droit:'Droit et citoyenneté',droits_enfant:'Droits de l’enfant'};


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


// ---------- Créateur de personnage ----------
export const SKIN_TONES=['#c58b62','#b07a50','#9a6641','#7a4a2e','#63391f','#4f3020','#3d2416','#d9a67c'];
export const HAIR_COLORS=['#140d09','#2e1a10','#5a3319','#8a3a1c','#c79a3b','#7a7a7a','#d9d9d9','#7b2a6e'];
export const EYE_COLORS=['#120a06','#3b2212','#2f4a3a','#2a4a6e'];
export const LIP_COLORS=['#7a3a30','#a8483c','#c0566a','#4a2a24'];
export const OUTFIT_COLORS=['#1f7a4d','#2e86de','#c0392b','#e67e22','#8e44ad','#16a085','#e0a526','#2c3e50','#d6336c','#f1f1f1'];

// own : disponible dès le départ ; unlock : cadeau d'une quête ; price : à acheter chez Maman Béa
export const HAIRS={
 courtes:{n:'Courts',own:true},rase:{n:'Rasé',own:true},tresses:{n:'Tresses',own:true},nattes:{n:'Nattes',own:true},afro:{n:'Afro',own:true},
 chignon:{n:'Chignon',unlock:'lola'},noeuds:{n:'Nœuds bantous',price:25},locks:{n:'Locks',price:30}
};
export const ACCS={
 boucles:{n:'Boucles d’oreilles',own:true},
 lunettes:{n:'Lunettes',unlock:'ilunga'},casquette:{n:'Casquette',unlock:'junior'},
 foulard:{n:'Foulard',price:20},collier:{n:'Collier de perles',price:15},sac:{n:'Sac à dos',price:25}
};
export const OUTFITS={
 uniforme:{n:'Uniforme de l’école',own:true,top:'plain',bottom:'auto',trouser:'#262a3a',collar:true},
 polo:{n:'Polo et jean',price:35,top:'plain',bottom:'trousers',trouser:'#2f4a7a',collar:true},
 sport:{n:'Tenue de sport',price:40,top:'plain',bottom:'trousers',trouser:'#233044',collar:false,matchTrouser:true},
 robe:{n:'Robe de fête',price:70,top:'plain',bottom:'skirt',belt:true},
 pagne:{n:'Tenue wax',unlock:'mavungu',top:'wax',bottom:'auto',trouser:'#262a3a'},
 boubou:{n:'Boubou brodé',price:60,top:'plain',bottom:'long',trim:true}
};
export const DEFAULT_LOOK={s:'f',skin:3,faceW:.5,jaw:.4,eyeS:.5,eyeC:1,brow:0,nose:.5,lips:.5,lipC:0,hair:'tresses',hairC:0,beard:0,acc:[],outfit:'uniforme',outfitC:0,blush:.3};
// récompenses automatiques selon les quêtes / le niveau
export const LEVEL_UNLOCKS={4:{outfits:['sport']}};

// ---------- Niveaux supplémentaires (3D) ----------
Object.assign(NPC,{
 esther:{sc:'marche',x:-6,z:-6.2,ry:0,name:'Maman Esther',short:'Maman Esther',role:'Vendeuse de légumes',kind:'quiz',sujet:'marche',nb:3,needs:'mavungu',
  look:{s:'f',h:.97,skin:'#b17869',c:'#e0a526',k:'pagne',co:'tresses',faceKey:'avatars/f2'},
  intro:['Bienvenue au Grand Marché de Kinshasa !','Ici, il faut savoir compter vite pour bien vendre et bien acheter. Trois petits calculs pour commencer.'],
  outro:'Bravo ! Tu sais compter comme une vraie commerçante. Va voir Papa Tshala, il vend des fruits.'},
 tshala:{sc:'marche',x:8,z:-5.4,ry:0,name:'Papa Tshala',short:'Papa Tshala',role:'Marchand de fruits',kind:'quiz',sujet:'nutrition',nb:3,needs:'esther',
  look:{s:'h',h:1,skin:'#955342',c:'#2e86de',k:'uniforme',co:'courtes',faceKey:'avatars/h2'},
  intro:['Mes mangues, mes oranges, mes bananes… tout est frais !','Dis-moi ce que tu sais sur l’alimentation et la santé.'],
  outro:'Excellent ! Tu manges intelligemment. Va maintenant au bord du fleuve voir Tonton Mbo.'},
 mbo:{sc:'fleuve',x:2.5,z:-1.4,ry:-1.5,name:'Tonton Mbo',short:'Tonton Mbo',role:'Pêcheur',kind:'quiz',sujet:'fleuve',nb:3,needs:'tshala',
  look:{s:'h',h:1,skin:'#a7766b',c:'#c0392b',k:'uniforme',co:'courtes',faceKey:'avatars/h4'},
  intro:['Bonjour ! Je pêche ici depuis que je suis petit.','Le fleuve Congo est immense et plein de secrets. Que sais-tu de lui ?'],
  outro:'Bravo ! Tu connais bien notre fleuve. Parle aussi à Madame Kitoko, elle protège la nature.'},
 kitoko:{sc:'fleuve',x:-8,z:1.8,ry:.6,name:'Madame Kitoko',short:'Madame Kitoko',role:'Protectrice de la nature',kind:'quiz',sujet:'environnement',nb:3,needs:'mbo',
  look:{s:'f',h:.97,skin:'#6b4028',c:'#16a085',k:'pagne',co:'nattes',faceKey:'portraits/mama'},
  intro:['La nature est notre trésor : l’eau, les arbres, les animaux.','Voyons si tu sais comment la protéger.'],
  outro:'Merci de protéger la nature ! Direction le centre de santé, on a besoin de toi là-bas.'},
 mukendi:{sc:'sante',x:-4,z:-3.4,ry:.2,name:'Infirmière Mukendi',short:'l’infirmière',role:'Infirmière',kind:'quiz',sujet:'sante',nb:3,needs:'kitoko',
  look:{s:'f',h:.97,skin:'#bb7253',c:'#f2f2f2',k:'uniforme',co:'chignon',faceKey:'avatars/f3'},
  intro:['Bonjour ! Bienvenue au centre de santé.','Bien se soigner, c’est d’abord bien se protéger. Trois questions de santé.'],
  outro:'Très bien ! Tu as de bons réflexes de santé. Le Docteur Kabongo veut te parler.'},
 kabongo:{sc:'sante',x:5,z:-2.4,ry:-.3,name:'Docteur Kabongo',short:'le docteur',role:'Médecin',kind:'quiz',sujet:'corps',nb:3,needs:'mukendi',
  look:{s:'h',h:1.02,skin:'#c38a7e',c:'#f2f2f2',k:'uniforme',co:'courtes',faceKey:'avatars/h1'},
  intro:['Bonjour ! Je suis médecin.','Ton corps est une machine extraordinaire. Voyons ce que tu en sais.'],
  outro:'Bravo ! Tu connais bien ton corps. Il te reste un dernier lieu : l’université.'},
 ngoy:{sc:'univ',x:-5,z:-6.4,ry:.3,name:'Professeur Ngoy',short:'le professeur',role:'Professeur de droit',kind:'quiz',sujet:'droit',nb:3,needs:'kabongo',
  look:{s:'h',h:1.03,skin:'#79493b',c:'#2c3e50',k:'uniforme',co:'rase',cravate:true,faceKey:'avatars/h3'},
  intro:['Bienvenue à l’université !','Le droit, c’est l’ensemble des règles qui permettent de vivre ensemble. Voyons ce que tu en sais.'],
  outro:'Excellent ! Maître Lukusa t’attend pour la dernière épreuve : les droits de l’enfant.'},
 lukusa:{sc:'univ',x:6,z:-6.2,ry:-.3,name:'Maître Lukusa',short:'Maître Lukusa',role:'Avocate',kind:'quiz',sujet:'droits_enfant',nb:3,needs:'ngoy',
  look:{s:'f',h:.98,skin:'#cd8e71',c:'#2c3e50',k:'uniforme',co:'tresses',faceKey:'avatars/f4'},
  intro:['Bonjour ! Je défends les droits des personnes devant la justice.','Les enfants aussi ont des droits. Les connais-tu ?'],
  outro:'Félicitations ! Tu as réussi tous les niveaux. Tu es un vrai citoyen !'}
});
export const STAGES=[
 {id:'ville',scene:'ville',name:'Quartier et école',icon:'🏫',npcs:['lola','ilunga','junior','mavungu']},
 {id:'marche',scene:'marche',name:'Le Grand Marché',icon:'🛒',npcs:['esther','tshala']},
 {id:'fleuve',scene:'fleuve',name:'Le fleuve Congo',icon:'🌊',npcs:['mbo','kitoko']},
 {id:'sante',scene:'sante',name:'Le centre de santé',icon:'🏥',npcs:['mukendi','kabongo']},
 {id:'univ',scene:'univ',name:'L’université',icon:'🎓',npcs:['ngoy','lukusa']}
];

Object.assign(BANK,{
 lecture:[
  Q('Quel est le verbe dans la phrase : « Les enfants lisent un livre » ?',['enfants','lisent','livre','les'],'lisent','« lisent » exprime l’action : c’est le verbe.'),
  Q('Quel est le pluriel de « journal » ?',['journals','journaux','journales','journalx'],'journaux','Les noms en -al font leur pluriel en -aux.'),
  Q('Comment écrit-on correctement ?',['ecole','école','éecole','écolle'],'école','On écrit « école » avec un accent aigu sur le premier é.'),
  Q('Quel signe termine une question ?',['le point','le point d’interrogation','la virgule','les guillemets'],'le point d’interrogation','Une question se termine par un point d’interrogation.'),
  Q('Un livre qui raconte la vie d’une personne s’appelle une…',['biographie','géographie','chanson','recette'],'biographie','Une biographie raconte la vie de quelqu’un.'),
  Q('Quel est le contraire de « grand » ?',['petit','long','large','haut'],'petit','Le contraire de « grand » est « petit ».')
 ],
 contes:[
  Q('Complète le proverbe : « Petit à petit, l’oiseau fait son… »',['nid','pain','chemin','bruit'],'nid','Petit à petit, l’oiseau fait son nid : avec de la patience, on réussit.'),
  Q('Que veut dire « Qui sème le vent récolte la tempête » ?',['nos mauvaises actions ont des conséquences','il faut planter des arbres','il faut aimer le vent','il pleut toujours'],'nos mauvaises actions ont des conséquences','Ce proverbe dit que les mauvaises actions reviennent contre leur auteur.'),
  Q('Comment commence souvent un conte ?',['Il était une fois…','Voici la météo…','Achetez vite…','Attention, danger !'],'Il était une fois…','Beaucoup de contes commencent par « Il était une fois… ».'),
  Q('Complète le proverbe africain : « Seul on va plus vite, ensemble on va… »',['moins loin','plus loin','nulle part','en arrière'],'plus loin','Ensemble, on va plus loin : l’union fait la force.'),
  Q('Quel mot est un synonyme de « courageux » ?',['brave','lent','triste','petit'],'brave','« Brave » a le même sens que « courageux ».')
 ],
 route:[
  Q('Que signifie un feu rouge ?',['s’arrêter','accélérer','klaxonner','reculer'],'s’arrêter','Au feu rouge, tout le monde s’arrête.'),
  Q('Où traverse-t-on la rue en sécurité ?',['n’importe où','sur le passage pour piétons','entre deux voitures','en courant au milieu'],'sur le passage pour piétons','On traverse sur le passage pour piétons, après avoir regardé.'),
  Q('Que faut-il faire avant de traverser ?',['regarder à gauche et à droite','fermer les yeux','courir très vite','téléphoner'],'regarder à gauche et à droite','On regarde des deux côtés pour vérifier qu’aucun véhicule n’arrive.'),
  Q('Que faut-il attacher en voiture ?',['la ceinture de sécurité','ses lacets','le coffre','la radio'],'la ceinture de sécurité','La ceinture de sécurité sauve des vies.'),
  Q('Que doit porter le conducteur d’une moto ?',['un casque','un chapeau de paille','un foulard','rien du tout'],'un casque','Le casque protège la tête en cas de chute.')
 ],
 transport:[
  Q('Un bus roule 60 km en 1 heure. Combien de kilomètres fait-il en 2 heures ?',['90 km','100 km','120 km','180 km'],'120 km','60 × 2 = 120 km.'),
  Q('Le trajet dure 45 minutes. On part à 8 h. À quelle heure arrive-t-on ?',['8 h 15','8 h 45','9 h 15','9 h 45'],'8 h 45','8 h + 45 minutes = 8 h 45.'),
  Q('Un billet coûte 500 FC. Combien coûtent 4 billets ?',['1 500 FC','2 000 FC','2 500 FC','4 000 FC'],'2 000 FC','4 × 500 = 2 000 FC.'),
  Q('Un bus transporte 40 passagers. 12 descendent. Combien en reste-t-il ?',['26','28','30','52'],'28','40 − 12 = 28 passagers.'),
  Q('Il y a 5 bus de 30 places chacun. Combien de places en tout ?',['120','150','180','35'],'150','5 × 30 = 150 places.')
 ],
 agriculture:[
  Q('De quelle plante tire-t-on les racines dont on fait le foufou ?',['le manioc','le café','le cacao','le palmier'],'le manioc','Le foufou se fait avec la farine de manioc.'),
  Q('Les feuilles de quelle plante prépare-t-on le « pondu » ?',['le manioc','le bananier','le manguier','l’avocatier'],'le manioc','Le pondu se prépare avec des feuilles de manioc pilées.'),
  Q('Pourquoi arrose-t-on les plantes ?',['elles ont besoin d’eau pour vivre','pour les rendre bleues','pour les faire taire','pour les déplacer'],'elles ont besoin d’eau pour vivre','Comme nous, les plantes ont besoin d’eau.'),
  Q('Quel animal de la ferme nous donne du lait ?',['la vache','la poule','le canard','le cheval de course'],'la vache','La vache donne du lait.'),
  Q('Que nous donne la poule ?',['des œufs','du lait','de la laine','du miel'],'des œufs','La poule pond des œufs.')
 ],
 saisons:[
  Q('Quelle plante donne le café ?',['le caféier','le manguier','le bananier','le palmier'],'le caféier','Le grain de café vient du caféier.'),
  Q('La RDC est traversée par quelle ligne imaginaire ?',['l’équateur','le méridien de Paris','le pôle Nord','l’écliptique'],'l’équateur','L’équateur traverse la RDC.'),
  Q('Quelles sont les deux grandes saisons dans une grande partie de la RDC ?',['la saison des pluies et la saison sèche','l’hiver et l’été','le printemps et l’automne','la neige et le verglas'],'la saison des pluies et la saison sèche','Le climat tropical alterne saison des pluies et saison sèche.'),
  Q('Pourquoi ajoute-t-on du compost dans un champ ?',['pour enrichir le sol','pour faire fuir la pluie','pour éclairer','pour faire du bruit'],'pour enrichir le sol','Le compost nourrit la terre.'),
  Q('Un champ rectangulaire mesure 20 m sur 10 m. Quelle est sa surface ?',['30 m²','60 m²','200 m²','2 000 m²'],'200 m²','20 × 10 = 200 m².')
 ],
 foret:[
  Q('Quelle forêt est la deuxième plus grande forêt tropicale du monde ?',['la forêt du bassin du Congo','la forêt de Fontainebleau','la forêt noire','la forêt boréale'],'la forêt du bassin du Congo','Après l’Amazonie, c’est la plus grande forêt tropicale du monde.'),
  Q('Pourquoi la forêt est-elle importante ?',['elle produit de l’oxygène et abrite des animaux','elle fait du bruit','elle rend le ciel noir','elle ne sert à rien'],'elle produit de l’oxygène et abrite des animaux','Les forêts nous donnent de l’oxygène et abritent de nombreux animaux.'),
  Q('Comment appelle-t-on la forêt chaude, très humide et toujours verte près de l’équateur ?',['la forêt équatoriale','la forêt de pins','la savane','le désert'],'la forêt équatoriale','C’est la forêt équatoriale.'),
  Q('Quel parc national de RDC est célèbre pour ses gorilles de montagne ?',['le parc des Virunga','le parc Kruger','le Serengeti','le parc de Yellowstone'],'le parc des Virunga','Le parc national des Virunga abrite des gorilles de montagne.'),
  Q('Que ne faut-il jamais faire dans une forêt ?',['allumer un feu sans surveillance','marcher doucement','observer les oiseaux','ramasser ses déchets'],'allumer un feu sans surveillance','Un feu mal surveillé peut détruire toute la forêt.')
 ],
 animaux:[
  Q('Quel animal rayé, cousin de la girafe, ne vit qu’en RDC ?',['l’okapi','le zèbre','le tigre','le tapir'],'l’okapi','L’okapi vit uniquement dans les forêts de RDC.'),
  Q('Quel singe proche de l’homme ne vit à l’état sauvage qu’en RDC ?',['le bonobo','le babouin','le macaque','le ouistiti'],'le bonobo','Le bonobo vit seulement en RDC, au sud du fleuve Congo.'),
  Q('Un animal qui ne mange que des plantes est…',['herbivore','carnivore','insectivore','piscivore'],'herbivore','Un herbivore se nourrit de plantes.'),
  Q('Un animal qui mange de la viande est…',['carnivore','herbivore','végétarien','végétal'],'carnivore','Un carnivore mange de la viande.'),
  Q('Quel est le plus grand animal terrestre ?',['l’éléphant','la girafe','le lion','le rhinocéros blanc'],'l’éléphant','L’éléphant d’Afrique est le plus grand animal terrestre.')
 ],
 culture:[
  Q('Quelle musique née au Congo fait danser toute l’Afrique ?',['la rumba congolaise','le tango','la valse','le flamenco'],'la rumba congolaise','La rumba congolaise est célèbre dans toute l’Afrique.'),
  Q('Quelle langue nationale est très parlée à Kinshasa ?',['le lingala','le japonais','le russe','le hindi'],'le lingala','Le lingala est très parlé à Kinshasa.'),
  Q('Quelle est la langue officielle de la RDC ?',['le français','l’anglais','le portugais','l’arabe'],'le français','Le français est la langue officielle de la RDC.'),
  Q('Combien de langues nationales la RDC compte-t-elle ?',['quatre','une','dix','cent'],'quatre','Le kikongo, le lingala, le swahili et le tshiluba sont les quatre langues nationales.'),
  Q('À quoi servaient souvent les masques traditionnels africains ?',['aux cérémonies, pour représenter des esprits ou des ancêtres','à jouer au football','à cuisiner','à voyager'],'aux cérémonies, pour représenter des esprits ou des ancêtres','Ils servaient surtout lors de cérémonies traditionnelles.')
 ],
 histoire2:[
  Q('Quel artiste a chanté « Indépendance Cha Cha » en 1960 ?',['Grand Kallé','Michael Jackson','Bob Marley','Elvis Presley'],'Grand Kallé','Grand Kallé et l’African Jazz ont chanté « Indépendance Cha Cha ».'),
  Q('Comment s’appelle l’hymne national de la RDC ?',['Debout Congolais','La Marseillaise','Brabançonne','God Save the King'],'Debout Congolais','L’hymne national de la RDC est « Debout Congolais ».'),
  Q('Quel pays a colonisé le Congo avant 1960 ?',['la Belgique','la Chine','le Japon','le Brésil'],'la Belgique','Le Congo était une colonie belge avant son indépendance en 1960.'),
  Q('Comment s’appelait le pays entre 1971 et 1997 ?',['le Zaïre','le Gabon','le Rwanda','le Mali'],'le Zaïre','De 1971 à 1997, le pays s’appelait le Zaïre.'),
  Q('Quelle est la couleur de fond du drapeau de la RDC ?',['bleu ciel','vert','noir','blanc'],'bleu ciel','Le drapeau est bleu ciel avec une bande rouge et une étoile jaune.')
 ],
 sport:[
  Q('Combien de joueurs une équipe de football aligne-t-elle sur le terrain ?',['9','11','13','15'],'11','Une équipe de football compte 11 joueurs sur le terrain.'),
  Q('Quel est le surnom de l’équipe nationale de football de la RDC ?',['les Léopards','les Lions','les Aigles','les Éléphants'],'les Léopards','L’équipe de RDC s’appelle « les Léopards ».'),
  Q('Que signifie le fair-play ?',['respecter les règles et l’adversaire','gagner à tout prix','tricher discrètement','insulter l’arbitre'],'respecter les règles et l’adversaire','Le fair-play, c’est jouer honnêtement et respecter les autres.'),
  Q('Combien de temps dure un match de football (sans arrêts de jeu) ?',['45 minutes','60 minutes','90 minutes','120 minutes'],'90 minutes','Deux mi-temps de 45 minutes : 90 minutes.'),
  Q('Pourquoi faut-il s’échauffer avant de faire du sport ?',['pour préparer son corps et éviter les blessures','pour se fatiguer','pour dormir','pour manger'],'pour préparer son corps et éviter les blessures','L’échauffement prépare les muscles.')
 ],
 footmaths:[
  Q('Une équipe marque 3 buts en première mi-temps et 2 en seconde. Combien en tout ?',['4','5','6','7'],'5','3 + 2 = 5 buts.'),
  Q('Le match commence à 15 h et dure 1 h 30. À quelle heure finit-il ?',['16 h','16 h 30','17 h','17 h 30'],'16 h 30','15 h + 1 h 30 = 16 h 30.'),
  Q('Chaque équipe a 11 joueurs. Combien de joueurs sur le terrain pour les deux équipes ?',['11','20','22','24'],'22','2 × 11 = 22 joueurs.'),
  Q('Un billet coûte 2 000 FC. Combien coûtent 5 billets ?',['8 000 FC','10 000 FC','12 000 FC','7 000 FC'],'10 000 FC','5 × 2 000 = 10 000 FC.'),
  Q('Une victoire rapporte 3 points. Combien de points pour 4 victoires ?',['7','9','12','16'],'12','4 × 3 = 12 points.')
 ],
 mines:[
  Q('Quel métal la RDC produit-elle en grande quantité, surtout au Katanga ?',['le cuivre','l’argent','le fer-blanc','le zinc seulement'],'le cuivre','La RDC est un grand producteur de cuivre, surtout au Katanga.'),
  Q('Quel minerai, utilisé dans les batteries, la RDC possède-t-elle en grande quantité ?',['le cobalt','le sel','le charbon de bois','le sable'],'le cobalt','La RDC possède une grande partie du cobalt du monde.'),
  Q('Dans quelle province se trouve la ville de Lubumbashi ?',['le Haut-Katanga','le Kongo-Central','le Nord-Kivu','l’Ituri'],'le Haut-Katanga','Lubumbashi est la capitale du Haut-Katanga.'),
  Q('Comment s’appelle la science qui étudie les roches ?',['la géologie','la géographie','la biologie','l’astronomie'],'la géologie','La géologie étudie la Terre et les roches.'),
  Q('Dans quelle région de RDC se trouvent les célèbres mines de cuivre ?',['le Katanga','le Maniema','le Kasaï central','l’Équateur'],'le Katanga','Le Katanga est riche en cuivre et en cobalt.')
 ],
 minesec:[
  Q('Quel équipement protège la tête dans une mine ?',['le casque','la casquette','le bonnet','le chapeau'],'le casque','Le casque protège contre les chutes de pierres.'),
  Q('Pourquoi les enfants ne doivent-ils pas travailler dans les mines ?',['c’est dangereux et ils doivent aller à l’école','c’est trop propre','c’est trop silencieux','c’est interdit aux adultes'],'c’est dangereux et ils doivent aller à l’école','Le travail dans les mines est dangereux : les enfants ont le droit d’aller à l’école.'),
  Q('Comment protéger l’environnement autour d’une mine ?',['éviter de polluer l’eau et replanter des arbres','jeter les déchets dans la rivière','abattre toute la forêt','laisser les produits couler'],'éviter de polluer l’eau et replanter des arbres','Il faut protéger l’eau et replanter après les travaux.'),
  Q('Un camion transporte 20 tonnes de minerai. Combien de tonnes en 3 voyages ?',['40','50','60','80'],'60','3 × 20 = 60 tonnes.')
 ],
 espace:[
  Q('Quelle étoile éclaire la Terre le jour ?',['le Soleil','la Lune','Mars','Vénus'],'le Soleil','Le Soleil est l’étoile qui nous éclaire.'),
  Q('Combien y a-t-il de planètes dans le système solaire ?',['6','8','10','12'],'8','Le système solaire compte huit planètes.'),
  Q('Quelle planète est la plus proche du Soleil ?',['Mercure','Mars','Jupiter','Neptune'],'Mercure','Mercure est la planète la plus proche du Soleil.'),
  Q('Autour de quoi la Terre tourne-t-elle ?',['le Soleil','la Lune','Mars','Saturne'],'le Soleil','La Terre tourne autour du Soleil en un an.'),
  Q('Quel astre tourne autour de la Terre ?',['la Lune','le Soleil','Jupiter','Pluton'],'la Lune','La Lune est le satellite naturel de la Terre.')
 ],
 sciences:[
  Q('À quelle température l’eau bout-elle (au niveau de la mer) ?',['50 °C','80 °C','100 °C','200 °C'],'100 °C','L’eau bout à 100 °C.'),
  Q('Quel gaz respirons-nous pour vivre ?',['l’oxygène','le gaz carbonique seulement','l’hélium','l’azote pur'],'l’oxygène','Nous avons besoin d’oxygène pour vivre.'),
  Q('Que devient l’eau quand elle gèle ?',['de la glace','de la vapeur','du sable','de l’huile'],'de la glace','L’eau qui gèle devient de la glace.'),
  Q('Quelle force nous attire vers le sol ?',['la gravité','le vent','le magnétisme seulement','le bruit'],'la gravité','La gravité attire les objets vers le sol.'),
  Q('Qu’est-ce qui produit la lumière du jour ?',['le Soleil','la Lune','les nuages','les étoiles filantes'],'le Soleil','La lumière du jour vient du Soleil.')
 ],
 port:[
  Q('Quel est le principal port maritime de la RDC ?',['Matadi','Kisangani','Goma','Mbuji-Mayi'],'Matadi','Matadi est le principal port maritime de la RDC.'),
  Q('Sur quel fleuve se trouve Matadi ?',['le fleuve Congo','le Nil','le Niger','le Zambèze'],'le fleuve Congo','Matadi est située sur le fleuve Congo.'),
  Q('Qu’est-ce qu’un conteneur ?',['une grande caisse métallique pour transporter des marchandises','un petit bateau','une grue','un sac de riz'],'une grande caisse métallique pour transporter des marchandises','Les conteneurs transportent des marchandises par bateau, train ou camion.'),
  Q('Comment appelle-t-on les produits vendus à l’étranger ?',['les exportations','les importations','les cadeaux','les déchets'],'les exportations','Exporter, c’est vendre à l’étranger.'),
  Q('Comment appelle-t-on les produits achetés à l’étranger ?',['les importations','les exportations','les récoltes','les souvenirs'],'les importations','Importer, c’est acheter à l’étranger.')
 ],
 argent:[
  Q('Quelle est la monnaie de la RDC ?',['le franc congolais','le dinar','la roupie','le yen'],'le franc congolais','La monnaie de la RDC est le franc congolais.'),
  Q('Un article coûte 8 000 FC avec une réduction de 1 000 FC. Quel est le prix final ?',['6 000 FC','7 000 FC','8 000 FC','9 000 FC'],'7 000 FC','8 000 − 1 000 = 7 000 FC.'),
  Q('Tu as 10 000 FC et tu dépenses 3 500 FC. Combien te reste-t-il ?',['5 500 FC','6 500 FC','7 500 FC','13 500 FC'],'6 500 FC','10 000 − 3 500 = 6 500 FC.'),
  Q('À quoi sert une banque ?',['à garder l’argent en sécurité','à vendre des légumes','à soigner les malades','à construire des routes'],'à garder l’argent en sécurité','Une banque garde l’argent en sécurité.'),
  Q('Qu’est-ce qu’économiser ?',['mettre de l’argent de côté','tout dépenser tout de suite','perdre son argent','prêter sans réfléchir'],'mettre de l’argent de côté','Économiser, c’est garder de l’argent pour plus tard.')
 ],
 institutions:[
  Q('Quelles sont les deux chambres du Parlement de la RDC ?',['l’Assemblée nationale et le Sénat','le Sénat et la Cour d’appel','le Tribunal et la Mairie','l’École et l’Hôpital'],'l’Assemblée nationale et le Sénat','Le Parlement est formé de l’Assemblée nationale et du Sénat.'),
  Q('Combien de provinces compte la RDC ?',['11','15','26','30'],'26','La RDC compte 26 provinces.'),
  Q('Qui dirige une province ?',['le gouverneur','le professeur','le pêcheur','le chef de gare'],'le gouverneur','Une province est dirigée par un gouverneur.'),
  Q('Quelle est la durée d’un mandat du Président de la République en RDC ?',['5 ans','2 ans','10 ans','1 an'],'5 ans','Le mandat présidentiel dure 5 ans, renouvelable une fois.'),
  Q('Quelle est la capitale de la RDC ?',['Kinshasa','Goma','Kisangani','Matadi'],'Kinshasa','Kinshasa est la capitale de la RDC.')
 ],
 civisme:[
  Q('Quel est un devoir du citoyen ?',['respecter les lois','ignorer les règles','jeter ses déchets partout','désobéir toujours'],'respecter les lois','Respecter les lois est un devoir de chaque citoyen.'),
  Q('Comment garder son quartier propre ?',['en jetant ses déchets à la poubelle','en les laissant dans la rue','en les jetant au caniveau','en les brûlant devant les maisons'],'en jetant ses déchets à la poubelle','On jette les déchets à la poubelle.'),
  Q('Pourquoi faut-il respecter les autres ?',['pour vivre ensemble en paix','pour avoir des cadeaux','par obligation de la télévision','pour devenir roi'],'pour vivre ensemble en paix','Le respect permet de vivre ensemble en paix.'),
  Q('Que veut dire « vivre en paix » ?',['vivre ensemble sans violence','faire du bruit','se disputer','se cacher'],'vivre ensemble sans violence','La paix, c’est vivre ensemble sans violence.'),
  Q('Quelle est la date de la fête nationale de l’indépendance ?',['30 juin','1er janvier','25 décembre','14 juillet'],'30 juin','La RDC fête son indépendance le 30 juin.')
 ]
});
Object.assign(SUJETS,{lecture:'Lecture',contes:'Contes et proverbes',route:'Sécurité routière',transport:'Calcul : les transports',agriculture:'Agriculture',saisons:'Cultures et saisons',foret:'La forêt équatoriale',animaux:'Les animaux',culture:'Culture congolaise',histoire2:'Histoire et musique',sport:'Le sport',footmaths:'Calcul : le football',mines:'Les richesses du sous-sol',minesec:'Sécurité et environnement',espace:'L’espace',sciences:'Sciences',port:'Le port',argent:'L’argent',institutions:'Les institutions',civisme:'Civisme'});

Object.assign(NPC,{
 nzuzi:{sc:'biblio',x:-5,z:-3.8,ry:0.3,name:'Madame Nzuzi',short:'Madame Nzuzi',role:'Bibliothécaire',kind:'quiz',sujet:'lecture',nb:3,needs:'lukusa',
  look:{s:'f',h:0.97,skin:'#7a4a2e',c:'#8e44ad',k:'boubou',co:'tresses',faceKey:'portraits/ilunga'},
  intro:['Bienvenue à la bibliothèque !','Ici, chaque livre est une porte ouverte sur le monde. Quelques questions de français pour commencer.'],
  outro:'Bravo ! Tu lis déjà comme un vrai champion. Va écouter les histoires de Papa Kabasele.'},
 kabasele:{sc:'biblio',x:8.5,z:-6.2,ry:-0.4,name:'Papa Kabasele',short:'Papa Kabasele',role:'Conteur',kind:'quiz',sujet:'contes',nb:3,needs:'nzuzi',
  look:{s:'h',h:1.02,skin:'#916f64',c:'#c0392b',k:'uniforme',co:'rase',faceKey:'portraits/mavungu'},
  intro:['Viens, assieds-toi sous le grand arbre.','Les anciens disent que les proverbes sont la sagesse des peuples. Voyons ce que tu en as retenu.'],
  outro:'Quelle sagesse ! Tu es prêt pour la route : direction la gare.'},
 mayala:{sc:'gare',x:-3.6,z:-1.4,ry:0.5,name:'Agent Mayala',short:'l’agent Mayala',role:'Agent de la circulation',kind:'quiz',sujet:'route',nb:3,needs:'kabasele',
  look:{s:'h',h:1,skin:'#a7766b',c:'#2e5f9e',k:'uniforme',co:'courtes',faceKey:'avatars/h2'},
  intro:['Attention, on traverse avec prudence !','La route peut être dangereuse si on ne connaît pas les règles. Trois questions de sécurité.'],
  outro:'Parfait ! Tu connais les règles. Va voir Chauffeur Bokasa, près du bus.'},
 bokasa:{sc:'gare',x:2.5,z:-5.4,ry:-0.5,name:'Chauffeur Bokasa',short:'Chauffeur Bokasa',role:'Chauffeur de bus',kind:'quiz',sujet:'transport',nb:3,needs:'mayala',
  look:{s:'h',h:1.04,skin:'#a7766b',c:'#e0a526',k:'uniforme',co:'courtes',faceKey:'avatars/h4'},
  intro:['Bonjour ! Mon bus fait Kinshasa – Matadi tous les jours.','Un bon chauffeur sait bien calculer le temps, la distance et les prix.'],
  outro:'Excellent ! En route pour la campagne : la ferme de Mama Mwamba.'},
 mwamba:{sc:'ferme',x:-6,z:.2,ry:0.3,name:'Mama Mwamba',short:'Mama Mwamba',role:'Agricultrice',kind:'quiz',sujet:'agriculture',nb:3,needs:'bokasa',
  look:{s:'f',h:0.97,skin:'#895430',c:'#e67e22',k:'pagne',co:'nattes',faceKey:'portraits/bea'},
  intro:['Bonjour ! Bienvenue dans mes champs de manioc.','La terre nous nourrit. Voyons si tu sais d’où vient ce que tu manges.'],
  outro:'Bravo ! Maintenant, l’agronome Lutumba va te parler des cultures et des saisons.'},
 lutumba:{sc:'ferme',x:9.5,z:.5,ry:-0.4,name:'Agronome Lutumba',short:'l’agronome',role:'Agronome',kind:'quiz',sujet:'saisons',nb:3,needs:'mwamba',
  look:{s:'h',h:1.02,skin:'#79493b',c:'#27ae60',k:'uniforme',co:'courtes',faceKey:'avatars/h3'},
  intro:['Je suis agronome : j’aide les paysans à mieux cultiver.','Le climat, les saisons, la terre : tout compte pour une bonne récolte.'],
  outro:'Très bien ! Tu as l’esprit d’un agronome. Direction la grande forêt !'},
 mutombo:{sc:'foret',x:-4,z:-3,ry:0.3,name:'Garde Mutombo',short:'le garde',role:'Garde-forestier',kind:'quiz',sujet:'foret',nb:3,needs:'lutumba',
  look:{s:'h',h:1.03,skin:'#c38a7e',c:'#4a6b3a',k:'uniforme',co:'courtes',faceKey:'avatars/h1'},
  intro:['Chut… écoute : la forêt est vivante.','Je protège ces arbres et les animaux qui y vivent. Que sais-tu de la forêt du Congo ?'],
  outro:'Bravo ! Tu peux devenir un protecteur de la forêt. Madame Bisimwa t’attend pour parler des animaux.'},
 bisimwa:{sc:'foret',x:6,z:-3.8,ry:-0.4,name:'Madame Bisimwa',short:'Madame Bisimwa',role:'Biologiste',kind:'quiz',sujet:'animaux',nb:3,needs:'mutombo',
  look:{s:'f',h:0.97,skin:'#b17869',c:'#f2f2f2',k:'uniforme',co:'chignon',faceKey:'avatars/f2'},
  intro:['Bonjour ! Je suis biologiste, j’étudie les animaux.','La RDC abrite des animaux qu’on ne trouve nulle part ailleurs. Teste tes connaissances !'],
  outro:'Magnifique ! Tu connais bien nos animaux. Le musée t’attend maintenant.'},
 tshibola:{sc:'musee',x:-5,z:-4.8,ry:0.3,name:'Madame Tshibola',short:'Madame Tshibola',role:'Conservatrice du musée',kind:'quiz',sujet:'culture',nb:3,needs:'bisimwa',
  look:{s:'f',h:0.96,skin:'#6b4028',c:'#d35400',k:'boubou',co:'gris',faceKey:'portraits/lola'},
  intro:['Bienvenue au musée ! Ici, on garde la mémoire de notre peuple.','Masques, musique, langues : la culture congolaise est riche. Trois questions.'],
  outro:'Bravo ! Maintenant Monsieur Kitenge va te raconter l’histoire.'},
 kitenge:{sc:'musee',x:6,z:-4.6,ry:-0.3,name:'Monsieur Kitenge',short:'Monsieur Kitenge',role:'Guide du musée',kind:'quiz',sujet:'histoire2',nb:3,needs:'tshibola',
  look:{s:'h',h:1.02,skin:'#a7766b',c:'#2c3e50',k:'uniforme',co:'courtes',faceKey:'avatars/h4',cravate:true},
  intro:['Je suis le guide : je raconte l’histoire de notre pays.','Des chansons de l’indépendance à l’hymne national, que sais-tu ?'],
  outro:'Excellent ! Tu connais bien l’histoire. Allons au stade, il y a un match !'},
 mbemba:{sc:'stade',x:-4,z:-2,ry:0.4,name:'Entraîneur Mbemba',short:'l’entraîneur',role:'Entraîneur de football',kind:'quiz',sujet:'sport',nb:3,needs:'kitenge',
  look:{s:'h',h:1.04,skin:'#79493b',c:'#c0392b',k:'uniforme',co:'courtes',faceKey:'avatars/h3'},
  intro:['Bienvenue au stade ! Aujourd’hui, grand match de quartier.','Le sport, c’est la santé et l’amitié. Voyons ce que tu sais.'],
  outro:'Bravo ! Tu as l’esprit d’équipe. L’arbitre Kalala a des calculs pour toi.'},
 kalala:{sc:'stade',x:6,z:-2.8,ry:-0.4,name:'Arbitre Kalala',short:'l’arbitre',role:'Arbitre',kind:'quiz',sujet:'footmaths',nb:3,needs:'mbemba',
  look:{s:'h',h:1,skin:'#955342',c:'#222222',k:'uniforme',co:'rase',faceKey:'avatars/h2'},
  intro:['Je suis l’arbitre : je compte les buts et le temps.','Un bon arbitre sait calculer vite. À toi de jouer !'],
  outro:'Parfait ! Tu comptes comme un champion. Prochain lieu : la mine de cuivre.'},
 kasongo:{sc:'mine',x:-5,z:-3,ry:0.3,name:'Géologue Kasongo',short:'la géologue',role:'Géologue',kind:'quiz',sujet:'mines',nb:3,needs:'kalala',
  look:{s:'f',h:0.97,skin:'#cd8e71',c:'#e67e22',k:'uniforme',co:'tresses',faceKey:'avatars/f4'},
  intro:['Bienvenue à la mine ! Casque sur la tête, ici on fait attention.','Le sous-sol de la RDC cache de grandes richesses. Que sais-tu d’elles ?'],
  outro:'Très bien ! L’ingénieur Mwenze va te parler de sécurité.'},
 mwenze:{sc:'mine',x:4.5,z:-5,ry:-0.4,name:'Ingénieur Mwenze',short:'l’ingénieur',role:'Ingénieur des mines',kind:'quiz',sujet:'minesec',nb:3,needs:'kasongo',
  look:{s:'h',h:1.03,skin:'#c38a7e',c:'#e0a526',k:'uniforme',co:'courtes',faceKey:'avatars/h1'},
  intro:['Je suis ingénieur : je veille à la sécurité de tous.','Protéger les personnes et la nature, c’est le plus important.'],
  outro:'Bravo ! La sécurité d’abord. Prochaine étape : l’observatoire, regarder les étoiles.'},
 mulumba:{sc:'observatoire',x:-4,z:-4.2,ry:0.3,name:'Docteur Mulumba',short:'le docteur Mulumba',role:'Astronome',kind:'quiz',sujet:'espace',nb:3,needs:'mwenze',
  look:{s:'h',h:1.02,skin:'#916f64',c:'#2c3e50',k:'uniforme',co:'gris',faceKey:'portraits/mavungu'},
  intro:['Bonsoir ! Le ciel de ce soir est magnifique.','L’espace est immense. Voyons ce que tu sais du Soleil, de la Lune et des planètes.'],
  outro:'Bravo ! Tu as l’âme d’un astronome. Mademoiselle Mbuyi t’attend pour les sciences.'},
 mbuyi:{sc:'observatoire',x:6,z:-3.4,ry:-0.4,name:'Assistante Mbuyi',short:'Mademoiselle Mbuyi',role:'Assistante scientifique',kind:'quiz',sujet:'sciences',nb:3,needs:'mulumba',
  look:{s:'f',h:0.97,skin:'#bb7253',c:'#f2f2f2',k:'uniforme',co:'tresses',faceKey:'avatars/f3'},
  intro:['Je suis scientifique : j’aime comprendre comment marche le monde.','Eau, air, lumière, gravité : testons tes connaissances.'],
  outro:'Excellent ! Tu es un petit scientifique. Direction le port de Matadi.'},
 lunda:{sc:'port',x:-5,z:-3,ry:0.3,name:'Capitaine Lunda',short:'le capitaine',role:'Capitaine de port',kind:'quiz',sujet:'port',nb:3,needs:'mbuyi',
  look:{s:'h',h:1.03,skin:'#a7766b',c:'#f2f2f2',k:'uniforme',co:'courtes',faceKey:'avatars/h4',cravate:true},
  intro:['Bienvenue au port de Matadi ! Les bateaux arrivent du monde entier.','Ici, on charge et on décharge des tonnes de marchandises.'],
  outro:'Très bien ! Madame Ndala va te parler d’argent.'},
 ndala:{sc:'port',x:6,z:-4,ry:-0.4,name:'Madame Ndala',short:'Madame Ndala',role:'Comptable',kind:'quiz',sujet:'argent',nb:3,needs:'lunda',
  look:{s:'f',h:0.97,skin:'#b17869',c:'#2c3e50',k:'uniforme',co:'nattes',faceKey:'avatars/f2'},
  intro:['Je suis comptable : je m’occupe de l’argent du port.','Bien gérer son argent, c’est apprendre à compter et à économiser.'],
  outro:'Bravo ! Il te reste une dernière étape : le Parlement, à Kinshasa.'},
 mbala:{sc:'parlement',x:-5,z:-6.2,ry:0.3,name:'Honorable Mbala',short:'l’Honorable Mbala',role:'Député',kind:'quiz',sujet:'institutions',nb:3,needs:'ndala',
  look:{s:'h',h:1.02,skin:'#79493b',c:'#1c2a44',k:'uniforme',co:'courtes',faceKey:'avatars/h3',cravate:true},
  intro:['Bienvenue au Parlement ! Ici se votent les lois du pays.','Un bon citoyen connaît le fonctionnement de ses institutions.'],
  outro:'Excellent ! Il te reste une dernière personne : la sénatrice Nkulu.'},
 nkulu:{sc:'parlement',x:6,z:-6,ry:-0.4,name:'Sénatrice Nkulu',short:'la sénatrice',role:'Sénatrice',kind:'quiz',sujet:'civisme',nb:3,needs:'mbala',
  look:{s:'f',h:0.98,skin:'#7a4a2e',c:'#8e44ad',k:'boubou',co:'tresses',faceKey:'portraits/ilunga'},
  intro:['Félicitations, tu es arrivé au dernier épisode !','Être citoyen, c’est respecter les autres et participer à la vie du pays.'],
  outro:'Félicitations ! Tu as terminé les quinze épisodes. Tu es un vrai citoyen et un champion !'}
});
STAGES.push(
 {id:'biblio',scene:'biblio',name:'La bibliothèque',icon:'📚',npcs:['nzuzi','kabasele']},
 {id:'gare',scene:'gare',name:'La gare routière',icon:'🚌',npcs:['mayala','bokasa']},
 {id:'ferme',scene:'ferme',name:'La ferme',icon:'🌽',npcs:['mwamba','lutumba']},
 {id:'foret',scene:'foret',name:'La forêt équatoriale',icon:'🌳',npcs:['mutombo','bisimwa']},
 {id:'musee',scene:'musee',name:'Le musée',icon:'🏛',npcs:['tshibola','kitenge']},
 {id:'stade',scene:'stade',name:'Le stade',icon:'⚽',npcs:['mbemba','kalala']},
 {id:'mine',scene:'mine',name:'La mine de cuivre',icon:'⛏',npcs:['kasongo','mwenze']},
 {id:'observatoire',scene:'observatoire',name:'L’observatoire',icon:'🔭',npcs:['mulumba','mbuyi']},
 {id:'port',scene:'port',name:'Le port de Matadi',icon:'🚢',npcs:['lunda','ndala']},
 {id:'parlement',scene:'parlement',name:'Le Parlement',icon:'🏛',npcs:['mbala','nkulu']}
);
