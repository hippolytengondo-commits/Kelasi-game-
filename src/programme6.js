import {Q} from './data.js';

// 6e primaire : 42 missions jouables (français 15, mathématiques 15, sciences-histoire-géographie-civisme 12).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
const COL=(consigne,items,indice,exp)=>({consigne:consigne,items:items.map(i=>[String(i[0]),i[1]]),indice:indice,exp:exp});
export const C6={},J6={},K6={};
const C=C6;

// ---------------- Français ----------------
C['p6|fr|0']=M(['Révision : classes grammaticales (nom, verbe, adjectif, pronom, adverbe…), fonctions (sujet, COD, complément circonstanciel), accords (sujet-verbe, nom-adjectif, participe passé).','Une phrase bien construite respecte tous ces accords.'],[
 Q('Complète : « Les enfants (courir) … dans la cour. »',['courent','court','courons','courrez'],'courent','Sujet pluriel : courent.'),
 Q('Quel mot est un adverbe ?',['rapidement','rapide','rapidité','rapide-ment'],'rapidement','L’adverbe précise le verbe.'),
 Q('Complète : « Elles sont (arrivé) … hier. »',['arrivées','arrivé','arrivés','arrivée'],'arrivées','Sujet féminin pluriel avec être.'),
 Q('Dans « Hier, Amani a lu un livre », quel est le COD ?',['un livre','Amani','Hier','a lu'],'un livre','A lu quoi ? Un livre.')]);
C['p6|fr|1']=M(['Fonctions avancées : le COI (complément d’objet indirect) se construit avec une préposition (parler à Lola) ; le complément du nom précise un nom (le livre de Lola) ; l’attribut décrit le sujet (Lola est contente).','Un complément circonstanciel donne le lieu, le temps ou la manière.'],[
 Q('Dans « Je parle à Lola », « à Lola » est…',['un COI','un COD','un attribut','un sujet'],'un COI','On parle à qui ? À Lola : complément d’objet indirect.'),
 Q('Dans « le livre de Lola », « de Lola » est…',['un complément du nom','un COD','un verbe','un adverbe'],'un complément du nom','Il précise « livre ».'),
 Q('Dans « Il est malade », « malade » est…',['un attribut du sujet','un COD','un COI','un sujet'],'un attribut du sujet','Il décrit le sujet avec le verbe être.'),
 Q('Dans « Il travaille avec soin », « avec soin » dit…',['la manière','le lieu','le temps','la cause'],'la manière','Comment travaille-t-il ? Avec soin.')]);
C['p6|fr|2']=M(['À la voix active, le sujet fait l’action : « Le chat mange la souris. » À la voix passive, le sujet subit l’action : « La souris est mangée par le chat. »','La voix passive utilise être + participe passé + par.'],[
 Q('Quelle phrase est à la voix passive ?',['La souris est mangée par le chat.','Le chat mange la souris.','Le chat a mangé.','Mange la souris !'],'La souris est mangée par le chat.','Le sujet subit l’action.'),
 Q('Transforme à la voix passive : « Papa répare la porte. »',['La porte est réparée par papa.','Papa est réparé par la porte.','La porte répare papa.','Papa la porte réparée.'],'La porte est réparée par papa.','Le COD devient sujet.'),
 Q('Quel auxiliaire utilise-t-on à la voix passive ?',['être','avoir','aller','faire'],'être','Être + participe passé.'),
 Q('Quelle phrase est à la voix active ?',['Les élèves lisent un texte.','Un texte est lu par les élèves.','Le texte a été lu.','Lisez le texte !'],'Les élèves lisent un texte.','Le sujet fait l’action.')]);
J6['p6|fr|2']=[TRI('Voix active ou voix passive ? Range chaque phrase.',['Active','Passive'],[['Lola lit un livre.','Active'],['Le livre est lu par Lola.','Passive'],['Papa répare la porte.','Active'],['La porte est réparée par papa.','Passive']])];
C['p6|fr|3']=M(['Au discours direct, on rapporte les paroles exactement, entre guillemets : Il dit : « J’ai faim. » Au discours indirect, on les rapporte avec un verbe et « que » : Il dit qu’il a faim.','Les pronoms et les temps changent parfois.'],[
 Q('Quelle phrase est au discours indirect ?',['Il dit qu’il a faim.','Il dit : « J’ai faim. »','« J’ai faim », dit-il.','Il a faim !'],'Il dit qu’il a faim.','On rapporte avec « que », sans guillemets.'),
 Q('Mets au discours indirect : Lola dit : « Je viens. »',['Lola dit qu’elle vient.','Lola dit que je viens.','Lola dit : elle vient.','Lola vient dit.'],'Lola dit qu’elle vient.','« Je » devient « elle ».'),
 Q('Que met-on au discours direct pour encadrer les paroles ?',['des guillemets','des parenthèses','des crochets','rien'],'des guillemets','Les guillemets encadrent les paroles.'),
 Q('Mets au discours direct : Il demande s’il peut sortir.',['Il demande : « Puis-je sortir ? »','Il demande qu’il sort.','Il dit sortir.','« Il sort », demande-t-il.'],'Il demande : « Puis-je sortir ? »','On rapporte la question telle quelle.')]);
C['p6|fr|4']=M(['Dans un récit au passé, l’imparfait décrit le décor et les habitudes (il pleuvait), le passé simple raconte les actions principales (il arriva, il ouvrit).','Le passé simple se rencontre surtout à l’écrit.'],[
 Q('Complète : « Il pleuvait quand il (arriver) … »',['arriva','arrive','arrivait','arrivera'],'arriva','Passé simple : il arriva.'),
 Q('Quel temps décrit le décor ?',['l’imparfait','le futur','le passé simple','l’impératif'],'l’imparfait','L’imparfait décrit.'),
 Q('Complète : « Il (ouvrir) … la porte et (entrer) … . »',['ouvrit / entra','ouvre / entre','ouvrira / entrera','ouvrait / entrait'],'ouvrit / entra','Actions successives au passé simple.'),
 Q('Quel verbe est au passé simple ?',['marcha','marche','marchera','marchait'],'marcha','« marcha » est au passé simple.')]);
C['p6|fr|5']=M(['Les connecteurs logiques organisent un texte : cause (car, parce que), conséquence (donc, ainsi), opposition (mais, pourtant, cependant), but (pour que, afin de), condition (si).','Ils rendent le raisonnement clair.'],[
 Q('Quel connecteur exprime le but ?',['afin de','car','donc','pourtant'],'afin de','« afin de » indique l’objectif.'),
 Q('Quel connecteur exprime l’opposition ?',['cependant','parce que','ainsi','alors'],'cependant','« cependant » oppose.'),
 Q('Complète : « Il a travaillé, … il a réussi. »',['donc','mais','car','si'],'donc','Conséquence : donc.'),
 Q('Quel connecteur exprime la condition ?',['si','car','donc','pourtant'],'si','« si » pose une condition.')]);
J6['p6|fr|5']=[TRI('Cause, conséquence ou opposition ? Range chaque mot.',['Cause','Conséquence','Opposition'],[['car','Cause'],['donc','Conséquence'],['pourtant','Opposition'],['parce que','Cause'],['ainsi','Conséquence'],['cependant','Opposition']])];
C['p6|fr|6']=M(['Un texte argumentatif défend une opinion avec des arguments. On repère la thèse (l’idée défendue), les arguments et les exemples.','Texte : « Il faut protéger les forêts. Elles produisent de l’oxygène et abritent des animaux. Par exemple, la forêt du Congo est un trésor mondial. »'],[
 Q('Quelle est la thèse ?',['il faut protéger les forêts','les forêts sont lointaines','les animaux dorment','le Congo est un pays'],'il faut protéger les forêts','C’est l’idée défendue.'),
 Q('Quel est un argument ?',['elles produisent de l’oxygène','le texte est court','il pleut','la forêt est chaude'],'elles produisent de l’oxygène','Il justifie la thèse.'),
 Q('Quel mot introduit un exemple ?',['Par exemple','Pourtant','Donc','Mais'],'Par exemple','Il annonce un exemple.'),
 Q('À quoi sert un exemple ?',['à illustrer l’argument','à finir le texte','à poser une question','à changer de sujet'],'à illustrer l’argument','Il rend l’argument concret.')]);
C['p6|fr|7']=M(['Dans un texte, l’idée principale est ce que l’auteur veut surtout dire. Les idées secondaires l’expliquent ou l’illustrent.','On la trouve souvent au début ou à la fin du paragraphe.'],[
 Q('Qu’est-ce que l’idée principale ?',['ce que l’auteur veut surtout dire','un détail','le titre seulement','le nom de l’auteur'],'ce que l’auteur veut surtout dire','C’est le message essentiel.'),
 Q('À quoi servent les idées secondaires ?',['à expliquer l’idée principale','à la remplacer','à l’effacer','à finir le texte'],'à expliquer l’idée principale','Elles précisent.'),
 Q('Où trouve-t-on souvent l’idée principale ?',['au début ou à la fin','au milieu seulement','nulle part','dans le titre de l’éditeur'],'au début ou à la fin','Elle est souvent en position forte.'),
 Q('Pour la repérer, on se demande…',['de quoi parle surtout le texte ?','combien de mots ?','quelle est la couleur ?','où est l’éditeur ?'],'de quoi parle surtout le texte ?','On cherche le sujet central.')]);
C['p6|fr|8']=M(['Résumer un texte : on le lit deux fois, on souligne l’essentiel, on rédige avec ses propres mots un texte 3 à 4 fois plus court.','On garde l’ordre et on évite les détails.'],[
 Q('Un résumé doit être…',['plus court et fidèle','plus long','différent du texte','plein de commentaires'],'plus court et fidèle','Il reprend l’essentiel.'),
 Q('Que fait-on avant de résumer ?',['lire attentivement','dormir','copier tout','effacer le titre'],'lire attentivement','On lit pour comprendre.'),
 Q('Dans un résumé, on écrit avec…',['ses propres mots','les mots du texte uniquement','des dessins','des chiffres'],'ses propres mots','On reformule.'),
 Q('Que supprime-t-on ?',['les exemples et détails inutiles','l’idée principale','la conclusion','le sens'],'les exemples et détails inutiles','On garde l’essentiel.')]);
C['p6|fr|9']=M(['Une dissertation simple comprend : une introduction (présenter le sujet), un développement (arguments et exemples) et une conclusion (réponse à la question).','On prépare toujours un plan avant d’écrire.'],[
 Q('Par quoi commence une dissertation ?',['une introduction','la conclusion','un exemple','un titre de livre'],'une introduction','Elle présente le sujet.'),
 Q('Où met-on les arguments ?',['dans le développement','dans la conclusion seulement','dans le titre','nulle part'],'dans le développement','C’est le corps du texte.'),
 Q('À quoi sert la conclusion ?',['répondre à la question posée','ajouter un nouveau sujet','tout recommencer','faire une blague'],'répondre à la question posée','Elle conclut.'),
 Q('Que prépare-t-on avant d’écrire ?',['un plan','un dessin','une recette','un jeu'],'un plan','Le plan organise les idées.')]);
C['p6|fr|10']=M(['Un compte rendu rapporte fidèlement une visite, une réunion ou une activité : titre, date, lieu, participants, déroulement, conclusion.','On écrit au passé, de façon claire et neutre.'],[
 Q('Que contient un compte rendu ?',['date, lieu, déroulement, conclusion','seulement des opinions','seulement des dessins','rien'],'date, lieu, déroulement, conclusion','Il rapporte les faits.'),
 Q('Quel ton doit-il avoir ?',['neutre et clair','moqueur','mystérieux','poétique'],'neutre et clair','Il informe sans juger.'),
 Q('À quel temps écrit-on souvent ?',['au passé','au futur','à l’impératif','à l’infinitif seulement'],'au passé','On rapporte ce qui s’est passé.'),
 Q('À quoi sert un compte rendu ?',['informer ceux qui n’étaient pas là','faire rire','donner un ordre','poser une énigme'],'informer ceux qui n’étaient pas là','Il informe.')]);
C['p6|fr|11']=M(['Une lettre formelle respecte un modèle : expéditeur, destinataire, lieu et date, objet, formule d’appel, texte poli, formule de politesse, signature.','On vouvoie toujours le destinataire.'],[
 Q('Comment s’adresse-t-on à un directeur ?',['Monsieur le Directeur,','Salut,','Hé,','Coucou,'],'Monsieur le Directeur,','Formule d’appel formelle.'),
 Q('Quelle formule de politesse convient ?',['Veuillez agréer mes salutations respectueuses.','Bisous.','À plus.','Ciao.'],'Veuillez agréer mes salutations respectueuses.','Formule finale formelle.'),
 Q('Que précise l’objet ?',['le motif de la lettre','la date','la signature','le papier'],'le motif de la lettre','L’objet dit pourquoi on écrit.'),
 Q('Quel pronom utilise-t-on pour s’adresser au destinataire ?',['vous','tu','il','on'],'vous','On vouvoie.')]);
C['p6|fr|12']=M(['Un débat oral suit des règles : on lève la main, on écoute sans interrompre, on donne un argument et un exemple, on respecte l’avis des autres.','Un bon débatteur reste calme et poli.'],[
 Q('Que fait-on avant de parler ?',['on lève la main','on crie','on interrompt','on se lève et part'],'on lève la main','On demande la parole.'),
 Q('Que fait-on quand un camarade parle ?',['on l’écoute','on rit de lui','on lui coupe la parole','on se bouche les oreilles'],'on l’écoute','Écouter, c’est respecter.'),
 Q('Que faut-il pour défendre son avis ?',['un argument et un exemple','un cri','un geste de colère','rien'],'un argument et un exemple','On justifie son opinion.'),
 Q('Si on n’est pas d’accord, on…',['répond poliment','insulte','quitte la salle','menace'],'répond poliment','On discute avec respect.')]);
C['p6|fr|13']=M(['Relire son texte permet de le corriger : orthographe, accords, ponctuation, répétitions. On peut changer un mot, supprimer une répétition, remettre une phrase en ordre.','Réécrire, c’est améliorer.'],[
 Q('Que vérifie-t-on en relisant ?',['les accords et la ponctuation','la couleur du stylo','la taille de la feuille','le nom du maître'],'les accords et la ponctuation','On corrige les erreurs.'),
 Q('Comment éviter une répétition ?',['avec un synonyme ou un pronom','en répétant plus','en supprimant la phrase','en changeant de sujet'],'avec un synonyme ou un pronom','On varie le vocabulaire.'),
 Q('Corrige : « Les enfant joue. »',['Les enfants jouent.','Les enfant jouent.','Le enfants joue.','Les enfants joue.'],'Les enfants jouent.','Accord du nom et du verbe.'),
 Q('Pourquoi réécrire un texte ?',['pour l’améliorer','pour le copier','pour le cacher','pour le jeter'],'pour l’améliorer','Un texte se corrige et s’améliore.')]);
C['p6|fr|14']=M(['Préparation à l’épreuve de l’aventure : grammaire, conjugaison, lecture, expression écrite.','Chaque question est un petit défi. Fais de ton mieux !'],[
 Q('Complète : « Nous (aller) … au marché demain. »',['irons','allons','allions','sommes allés'],'irons','Futur simple : nous irons.'),
 Q('Quelle phrase est correcte ?',['Les mangues sont mûres.','Les mangue sont mûr.','Les mangues est mûres.','La mangues sont mûre.'],'Les mangues sont mûres.','Accords corrects.'),
 Q('Quel mot est un connecteur de cause ?',['car','donc','pourtant','alors'],'car','« car » exprime la cause.'),
 Q('Mets au discours indirect : « Je viens », dit Amani.',['Amani dit qu’il vient.','Amani dit que je viens.','Amani dit : il vient.','Amani vient dit.'],'Amani dit qu’il vient.','« Je » devient « il ».')]);

// ---------------- Mathématiques ----------------
C['p6|ma|0']=M(['Les nombres entiers et décimaux se lisent, se comparent et s’arrondissent. 3,456 : 3 unités, 4 dixièmes, 5 centièmes, 6 millièmes.','Arrondir 3,456 au dixième : 3,5.'],[
 Q('Dans 3,456, quel est le chiffre des centièmes ?',['5','4','6','3'],'5','3 unités, 4 dixièmes, 5 centièmes.'),
 Q('Quel est le plus grand : 0,45 ou 0,5 ?',['0,5','0,45','égaux','on ne sait pas'],'0,5','0,50 est plus grand que 0,45.'),
 Q('Arrondi 3,456 au dixième.',['3,5','3,4','3,46','3,6'],'3,5','Le centième 5 arrondit vers le haut.'),
 Q('Range du plus petit au plus grand : 1,2 ; 1,02 ; 1,20 ; 1,1.',['1,02 ; 1,1 ; 1,2 ; 1,20','1,2 ; 1,20 ; 1,1 ; 1,02','1,1 ; 1,02 ; 1,2 ; 1,20','1,02 ; 1,2 ; 1,1 ; 1,20'],'1,02 ; 1,1 ; 1,2 ; 1,20','1,2 = 1,20.')]);
C['p6|ma|1']=M(['On additionne, soustrait, multiplie et divise les décimaux en alignant les virgules (+, −) ou en déplaçant la virgule (×, ÷).','12,5 + 3,75 = 16,25.'],[
 Q('Combien font 12,5 + 3,75 ?',['16,25','15,25','16,3','15,75'],'16,25','12,50 + 3,75 = 16,25.'),
 Q('Combien font 4,2 × 3 ?',['12,6','13,2','12,2','7,2'],'12,6','42 × 3 = 126, puis une décimale : 12,6.'),
 Q('Combien font 7,5 ÷ 3 ?',['2,5','2,25','3,5','2'],'2,5','3 × 2,5 = 7,5.'),
 Q('Combien font 10 − 3,25 ?',['6,75','7,25','6,25','7,75'],'6,75','10,00 − 3,25 = 6,75.')]);
C['p6|ma|2']=M(['On peut passer d’une fraction à un décimal : 1/2 = 0,5 ; 1/4 = 0,25 ; 3/4 = 0,75 ; 1/5 = 0,2 ; 1/10 = 0,1.','Pour cela, on divise le numérateur par le dénominateur.'],[
 Q('1/4 = …',['0,25','0,4','0,14','4,1'],'0,25','1 ÷ 4 = 0,25.'),
 Q('3/4 = …',['0,75','0,34','0,6','3,4'],'0,75','3 ÷ 4 = 0,75.'),
 Q('0,2 = …',['1/5','1/2','2/5','2/10 seulement'],'1/5','0,2 = 2/10 = 1/5.'),
 Q('1/2 = …',['0,5','0,2','1,2','2,1'],'0,5','Un demi = 0,5.')]);
J6['p6|ma|2']=[TRI('Fraction ou décimal égal ? Range chaque écriture.',['Égal à 0,5','Égal à 0,25'],[['1/2','Égal à 0,5'],['1/4','Égal à 0,25'],['5/10','Égal à 0,5'],['25/100','Égal à 0,25']])];
C['p6|ma|3']=M(['Un pourcentage se calcule avec une proportion : 15 % de 200 = 200 × 15 ÷ 100 = 30.','10 % = un dixième ; 50 % = la moitié ; 25 % = le quart.'],[
 Q('Combien font 15 % de 200 ?',['30','15','300','20'],'30','200 × 15 ÷ 100 = 30.'),
 Q('Combien font 25 % de 80 ?',['20','25','10','40'],'20','Le quart de 80.'),
 Q('Un article coûte 12 000 FC avec 10 % de réduction. Quel est le prix payé ?',['10 800 FC','1 200 FC','11 000 FC','13 200 FC'],'10 800 FC','12 000 − 1 200.'),
 Q('Sur 40 élèves, 30 sont présents. Quel pourcentage ?',['75 %','30 %','70 %','80 %'],'75 %','30 ÷ 40 = 0,75.')]);
C['p6|ma|4']=M(['Deux grandeurs sont proportionnelles quand l’une se multiplie quand l’autre se multiplie. Exemple : si 3 kg coûtent 6 000 FC, 5 kg coûtent 10 000 FC.','On cherche d’abord le prix d’une unité (ici 2 000 FC le kilo).'],[
 Q('3 kg coûtent 6 000 FC. Combien coûte 1 kg ?',['2 000 FC','3 000 FC','1 000 FC','18 000 FC'],'2 000 FC','6 000 ÷ 3 = 2 000.'),
 Q('3 kg coûtent 6 000 FC. Combien coûtent 5 kg ?',['10 000 FC','8 000 FC','12 000 FC','9 000 FC'],'10 000 FC','5 × 2 000.'),
 Q('Une voiture roule 60 km en 1 h. Combien de km en 3 h (même vitesse) ?',['180 km','120 km','63 km','90 km'],'180 km','60 × 3.'),
 Q('4 cahiers coûtent 1 600 FC. Combien coûtent 10 cahiers ?',['4 000 FC','3 200 FC','1 600 FC','16 000 FC'],'4 000 FC','1 cahier = 400 FC ; 10 × 400.')]);
C['p6|ma|5']=M(['Une échelle compare la carte à la réalité. Échelle 1/100 000 : 1 cm sur la carte représente 100 000 cm = 1 km.','Pour trouver la distance réelle, on multiplie la mesure de la carte.'],[
 Q('Échelle 1/100 000 : 1 cm représente…',['1 km','100 m','10 km','1 m'],'1 km','100 000 cm = 1 km.'),
 Q('Sur cette carte, 3 cm séparent deux villages. Distance réelle ?',['3 km','30 km','300 m','0,3 km'],'3 km','3 × 1 km.'),
 Q('Échelle 1/1 000 : 1 cm représente…',['10 m','1 m','100 m','1 km'],'10 m','1 000 cm = 10 m.'),
 Q('À quoi sert une échelle ?',['à réduire ou agrandir fidèlement','à compter les villes','à dessiner un cercle','à peser'],'à réduire ou agrandir fidèlement','Elle conserve les proportions.')]);
C['p6|ma|6']=M(['Longueur : km, m, cm. Masse : t, kg, g. Capacité : L, cL, mL. On choisit l’unité adaptée et on convertit si besoin.','1 L = 100 cL = 1 000 mL.'],[
 Q('Quelle unité pour la masse d’un camion ?',['la tonne','le gramme','le litre','le centimètre'],'la tonne','On pèse les camions en tonnes.'),
 Q('1 L = … cL',['100','10','1 000','1'],'100','1 L = 100 cL.'),
 Q('Quelle unité pour la contenance d’une bouteille ?',['le litre','le mètre','le kilogramme','l’heure'],'le litre','Le litre mesure la capacité.'),
 Q('1 t = … kg',['1 000','100','10','10 000'],'1 000','Une tonne = 1 000 kg.')]);
C['p6|ma|7']=M(['Conversions complexes : 1,5 h = 90 min ; 0,75 km = 750 m ; 250 cL = 2,5 L.','On pense à la valeur de l’unité : 1 h = 60 min, 1 km = 1 000 m, 1 L = 100 cL.'],[
 Q('1,5 h = … min',['90','150','105','75'],'90','1 h = 60 min, 0,5 h = 30 min.'),
 Q('0,75 km = … m',['750','75','7 500','7,5'],'750','0,75 × 1 000.'),
 Q('250 cL = … L',['2,5','25','0,25','250'],'2,5','250 ÷ 100.'),
 Q('2 h 15 min = … min',['135','215','120','175'],'135','120 + 15.')]);
C['p6|ma|8']=M(['Périmètre d’un cercle : 2 × π × r (π ≈ 3,14). Aire d’un disque : π × r × r. Pour un rayon de 5 cm : périmètre 31,4 cm, aire 78,5 cm².','Pour les polygones, le périmètre est la somme des côtés.'],[
 Q('Périmètre d’un cercle de rayon 5 cm (π ≈ 3,14) ?',['31,4 cm','15,7 cm','78,5 cm','25 cm'],'31,4 cm','2 × 3,14 × 5.'),
 Q('Aire d’un disque de rayon 5 cm (π ≈ 3,14) ?',['78,5 cm²','31,4 cm²','25 cm²','15,7 cm²'],'78,5 cm²','3,14 × 5 × 5.'),
 Q('Aire d’un rectangle de 12 m sur 7 m ?',['84 m²','38 m²','19 m²','72 m²'],'84 m²','12 × 7 = 84.'),
 Q('Périmètre d’un carré de côté 15 cm ?',['60 cm','30 cm','225 cm','45 cm'],'60 cm','4 × 15.')]);
C['p6|ma|9']=M(['Volume d’un pavé : longueur × largeur × hauteur. Volume d’un cube : arête³. 1 dm³ = 1 L.','Un cube de 10 cm d’arête contient exactement 1 litre.'],[
 Q('Volume d’un pavé de 5 cm, 4 cm et 3 cm ?',['60 cm³','12 cm³','45 cm³','20 cm³'],'60 cm³','5 × 4 × 3.'),
 Q('Volume d’un cube d’arête 4 cm ?',['64 cm³','16 cm³','32 cm³','12 cm³'],'64 cm³','4 × 4 × 4.'),
 Q('1 dm³ = …',['1 L','1 mL','10 L','100 L'],'1 L','Un décimètre cube = un litre.'),
 Q('Un aquarium mesure 50 cm, 30 cm et 20 cm. Quel volume ?',['30 000 cm³','100 cm³','3 000 cm³','300 000 cm³'],'30 000 cm³','50 × 30 × 20 = 30 000 cm³ = 30 L.')]);
C['p6|ma|10']=M(['La somme des angles d’un triangle est toujours 180°. Un carré et un rectangle ont 4 angles droits. Deux angles qui forment un angle plat font 180°.','Un triangle équilatéral a trois angles de 60°.'],[
 Q('Quelle est la somme des angles d’un triangle ?',['180°','90°','360°','100°'],'180°','Toujours 180°.'),
 Q('Un triangle a deux angles de 50° et 60°. Combien mesure le troisième ?',['70°','110°','90°','50°'],'70°','180 − 110 = 70.'),
 Q('Combien d’angles droits a un rectangle ?',['4','2','3','0'],'4','Un rectangle a 4 angles droits.'),
 Q('Combien mesure chaque angle d’un triangle équilatéral ?',['60°','90°','45°','30°'],'60°','180 ÷ 3.')]);
C['p6|ma|11']=M(['Les statistiques résument des données. La moyenne s’obtient en additionnant les valeurs et en divisant par leur nombre : (4 + 6 + 8) ÷ 3 = 6.','On lit aussi les tableaux et les diagrammes.'],[
 Q('Quelle est la moyenne de 4, 6 et 8 ?',['6','8','18','4'],'6','(4 + 6 + 8) ÷ 3 = 6.'),
 Q('Quelle est la moyenne de 10, 12, 14 et 16 ?',['13','12','14','52'],'13','52 ÷ 4 = 13.'),
 Q('Que montre un diagramme en bâtons ?',['des quantités comparées','la météo seulement','un plan de ville','un calendrier'],'des quantités comparées','Il compare visuellement des données.'),
 Q('Un élève a eu 12, 14 et 16. Sa moyenne est…',['14','16','12','42'],'14','42 ÷ 3 = 14.')]);
C['p6|ma|12']=M(['Dans la vie quotidienne : on achète, on mesure, on partage, on compare. Lis bien, choisis les opérations, calcule étape par étape et vérifie.','Pense toujours à l’unité de la réponse.'],[
 Q('Un taxi-moto coûte 1 500 FC par trajet. Combien pour 12 trajets ?',['18 000 FC','15 000 FC','13 500 FC','1 800 FC'],'18 000 FC','12 × 1 500.'),
 Q('Un marché ouvre à 7 h 30 et ferme à 16 h 15. Combien de temps est-il ouvert ?',['8 h 45','9 h 15','8 h 15','9 h 45'],'8 h 45','De 7 h 30 à 16 h 15 : 8 h 45.'),
 Q('Une famille consomme 3,5 L d’eau par jour. Combien de litres en 7 jours ?',['24,5 L','21 L','28 L','10,5 L'],'24,5 L','3,5 × 7.'),
 Q('Un terrain rectangulaire de 25 m sur 18 m est clôturé. Quelle longueur de clôture ?',['86 m','450 m','43 m','70 m'],'86 m','2 × (25 + 18).')]);
C['p6|ma|13']=M(['Défis de l’épreuve de l’aventure (fin de cycle) : plusieurs étapes, des unités variées, des pourcentages et des proportions.','Respire, lis deux fois, calcule tranquillement.'],[
 Q('Un sac de riz de 25 kg coûte 30 000 FC. Combien coûte 1 kg ?',['1 200 FC','1 000 FC','1 500 FC','750 FC'],'1 200 FC','30 000 ÷ 25.'),
 Q('Un livre coûte 8 000 FC. On offre 20 % de réduction. Prix payé ?',['6 400 FC','1 600 FC','7 200 FC','6 000 FC'],'6 400 FC','8 000 − 1 600.'),
 Q('Quelle est la moyenne de 7, 9, 11 et 13 ?',['10','9','11','40'],'10','40 ÷ 4.'),
 Q('Aire d’un triangle de base 10 cm et de hauteur 6 cm ?',['30 cm²','60 cm²','16 cm²','36 cm²'],'30 cm²','10 × 6 ÷ 2.')]);
C['p6|ma|14']=M(['Révision générale : décimaux, fractions, pourcentages, proportionnalité, mesures, périmètre, aire, volume et statistiques.','Tu es prêt pour la suite de ton aventure !'],[
 Q('Combien font 2,5 × 1,2 ?',['3','3,5','2,7','30'],'3','2,5 × 1,2 = 3.'),
 Q('Combien font 3/4 + 1/4 ?',['1','4/8','3/16','4/4 seulement'],'1','4/4 = 1.'),
 Q('50 % de 90 = ?',['45','50','40','9'],'45','La moitié.'),
 Q('Volume d’un cube de 6 cm d’arête ?',['216 cm³','36 cm³','18 cm³','72 cm³'],'216 cm³','6 × 6 × 6.')]);

// ---------------- Sciences, histoire-géographie et civisme ----------------
C['p6|sc|0']=M(['Le corps grandit et change : à la puberté, le corps se transforme et devient capable de se reproduire. La reproduction humaine commence par la rencontre d’une cellule de la mère et d’une cellule du père : la fécondation.','Ces changements sont naturels et demandent de l’hygiène et du respect.'],[
 Q('Comment s’appelle la période de transformation du corps vers l’âge adulte ?',['la puberté','la naissance','la vieillesse','l’enfance'],'la puberté','La puberté.'),
 Q('Qu’est-ce que la fécondation ?',['la rencontre de deux cellules reproductrices','la naissance du bébé','la digestion','la respiration'],'la rencontre de deux cellules reproductrices','Elle débute la formation d’un bébé.'),
 Q('Pourquoi l’hygiène est-elle importante pendant la puberté ?',['le corps change et transpire plus','pour rien','pour jouer','pour dormir'],'le corps change et transpire plus','On prend soin de son corps.'),
 Q('Comment doit-on parler de ces sujets ?',['avec respect, auprès d’adultes de confiance','en se moquant','en cachant tout','sur des rumeurs'],'avec respect, auprès d’adultes de confiance','On s’informe auprès de personnes fiables.')]);
C['p6|sc|1']=M(['Maladies courantes : paludisme, rougeole, tuberculose, choléra, infections respiratoires, VIH/sida. On se protège par la vaccination, l’hygiène, une eau propre, la moustiquaire et le dépistage.','Une personne malade a droit aux soins et au respect, sans moquerie ni rejet.'],[
 Q('Comment se protège-t-on du paludisme ?',['avec une moustiquaire','en mangeant plus','en dormant le jour','en courant'],'avec une moustiquaire','On évite les piqûres de moustiques.'),
 Q('Quelle maladie se transmet par une eau sale ?',['le choléra','la rougeole','la carie','le rhume seulement'],'le choléra','Le choléra se transmet par l’eau souillée.'),
 Q('Quel moyen protège contre la rougeole ?',['le vaccin','la moustiquaire','le savon seulement','un médicament au hasard'],'le vaccin','La vaccination.'),
 Q('Comment traiter une personne malade ?',['avec respect et soin','en se moquant','en l’évitant par peur','en la punissant'],'avec respect et soin','Tout malade a droit au respect.')]);
C['p6|sc|2']=M(['L’hygiène alimentaire : laver les fruits et légumes, bien cuire la viande et le poisson, conserver les aliments au frais ou fumés, vérifier les dates, boire de l’eau propre.','Une mauvaise conservation peut rendre malade.'],[
 Q('Que faire avant de manger un fruit ?',['le laver','le jeter','le frotter dans la terre','le laisser au soleil sans eau'],'le laver','On enlève les microbes.'),
 Q('Comment conserver du poisson plus longtemps ?',['le fumer ou le sécher','le laisser au soleil sans protection','le poser par terre','le mouiller'],'le fumer ou le sécher','Fumer ou sécher conserve.'),
 Q('Que vérifie-t-on sur un produit emballé ?',['la date limite','la couleur de l’emballage','le prix des voisins','la marque seulement'],'la date limite','Un produit périmé est dangereux.'),
 Q('Quelle eau faut-il boire ?',['une eau propre ou traitée','n’importe quelle eau','une eau trouble','l’eau d’une mare'],'une eau propre ou traitée','Faire bouillir ou filtrer l’eau.')]);
C['p6|sc|3']=M(['Le changement climatique : les gaz à effet de serre (comme le CO₂) retiennent la chaleur et réchauffent la Terre. Les causes : fumées, déforestation, brûlis. Les effets : sécheresses, inondations, saisons dérangées.','Les forêts du Congo absorbent beaucoup de CO₂.'],[
 Q('Que retiennent les gaz à effet de serre ?',['la chaleur','le vent','l’eau','la lumière seulement'],'la chaleur','Ils réchauffent la planète.'),
 Q('Quelle cause aggrave le réchauffement ?',['la déforestation','le tri des déchets','la plantation d’arbres','le recyclage'],'la déforestation','Moins d’arbres, moins de CO₂ absorbé.'),
 Q('Quel est un effet du changement climatique ?',['des sécheresses et inondations plus fréquentes','plus de neige au Congo','des saisons parfaites','la disparition du soleil'],'des sécheresses et inondations plus fréquentes','Le climat devient plus extrême.'),
 Q('Quel geste aide à lutter contre le changement climatique ?',['planter des arbres','brûler les déchets','gaspiller l’énergie','couper sans replanter'],'planter des arbres','Les arbres captent le CO₂.')]);
C['p6|sc|4']=M(['Les ressources naturelles se divisent en renouvelables (eau, forêt, soleil, vent) et épuisables (pétrole, minerais). On les gère en exploitant avec mesure, en recyclant et en protégeant les milieux.','Une bonne gestion profite à tous et préserve l’avenir.'],[
 Q('Quelle ressource est épuisable ?',['le pétrole','le vent','le soleil','l’eau de pluie'],'le pétrole','Le pétrole ne se renouvelle pas à notre échelle.'),
 Q('Quelle ressource est renouvelable ?',['la forêt bien gérée','le cuivre','le cobalt','le charbon'],'la forêt bien gérée','Une forêt peut repousser.'),
 Q('Que veut dire « gérer » une ressource ?',['l’utiliser avec mesure pour qu’elle dure','la gaspiller','l’ignorer','la cacher'],'l’utiliser avec mesure pour qu’elle dure','Gérer, c’est utiliser durablement.'),
 Q('Quel geste économise les ressources ?',['recycler','jeter','brûler','abandonner'],'recycler','Recycler évite le gaspillage.')]);
J6['p6|sc|4']=[TRI('Renouvelable ou épuisable ? Range chaque ressource.',['Renouvelable','Épuisable'],[['vent','Renouvelable'],['pétrole','Épuisable'],['soleil','Renouvelable'],['cobalt','Épuisable'],['eau de pluie','Renouvelable'],['charbon','Épuisable']])];
C['p6|sc|5']=M(['Des technologies utiles à la communauté : panneaux solaires pour l’électricité, puits et pompes pour l’eau, téléphones et Internet pour communiquer, moulins à manioc, vaccins et centres de santé.','La technologie sert à mieux vivre si elle est bien utilisée.'],[
 Q('Quelle technologie apporte de l’électricité sans réseau ?',['le panneau solaire','la lampe de poche seule','le pneu','le cahier'],'le panneau solaire','Le solaire est utile dans les villages.'),
 Q('Quelle technologie aide à avoir de l’eau ?',['la pompe et le puits','le téléphone','le tableau','la radio'],'la pompe et le puits','Ils apportent de l’eau.'),
 Q('À quoi sert un téléphone mobile dans un village ?',['à communiquer et s’informer','à cuire le manioc','à cultiver','à pêcher'],'à communiquer et s’informer','Il relie les gens.'),
 Q('Pourquoi bien utiliser la technologie ?',['pour qu’elle serve à tous et sans danger','pour rien','pour gaspiller','pour tricher'],'pour qu’elle serve à tous et sans danger','Une bonne utilisation profite à la communauté.')]);
C['p6|sc|6']=M(['Avant la colonisation, des royaumes puissants existaient (Kongo, Luba, Lunda, Kuba). La conférence de Berlin (1884-1885) confie le Congo au roi Léopold II (État indépendant du Congo). En 1908, la Belgique reprend le pays : le Congo belge.','Des Congolais ont résisté, comme Simon Kimbangu.'],[
 Q('Qui a reçu le Congo à la conférence de Berlin ?',['le roi Léopold II','le roi de France','le président américain','le pape'],'le roi Léopold II','Léopold II, avec l’État indépendant du Congo.'),
 Q('En quelle année le Congo devient-il colonie belge ?',['1908','1885','1960','1997'],'1908','1908.'),
 Q('Quel royaume existait avant la colonisation ?',['le royaume Kongo','l’empire du Mali','le royaume de Prusse','l’empire Ottoman'],'le royaume Kongo','Le royaume Kongo.'),
 Q('Quel mouvement de résistance est associé à Simon Kimbangu ?',['un mouvement spirituel et anticolonial','une armée belge','un parti royal','une compagnie commerciale'],'un mouvement spirituel et anticolonial','Kimbangu est une grande figure de résistance.')]);
C['p6|sc|7']=M(['Le 30 juin 1960, le Congo devient indépendant : Joseph Kasa-Vubu est président, Patrice Lumumba Premier ministre. Le pays s’appelle ensuite Zaïre (1971-1997) puis République démocratique du Congo. Félix Tshisekedi est président depuis 2019.','L’histoire contemporaine reste marquée par la recherche de paix et de développement.'],[
 Q('Qui fut le premier Premier ministre du Congo indépendant ?',['Patrice Lumumba','Joseph Kasa-Vubu','Mobutu','Moïse Tshombe'],'Patrice Lumumba','Patrice Lumumba.'),
 Q('Qui fut le premier président ?',['Joseph Kasa-Vubu','Patrice Lumumba','Mobutu','Laurent-Désiré Kabila'],'Joseph Kasa-Vubu','Joseph Kasa-Vubu.'),
 Q('Quel nom le pays a-t-il porté de 1971 à 1997 ?',['Zaïre','Congo belge','Katanga','Kivu'],'Zaïre','Le Zaïre.'),
 Q('Quelle est la fête nationale de l’indépendance ?',['le 30 juin','le 1er mai','le 17 mai','le 25 décembre'],'le 30 juin','Le 30 juin.')]);
C['p6|sc|8']=M(['L’économie congolaise repose sur l’agriculture (manioc, maïs, café, cacao, huile de palme), les mines (cuivre, cobalt, diamant, or), la pêche, le bois et l’hydroélectricité (Inga).','Les ports de Matadi et de Boma permettent d’exporter vers le monde.'],[
 Q('Quelle culture vivrière est très répandue ?',['le manioc','le blé','la betterave','l’avoine'],'le manioc','Le manioc nourrit des millions de Congolais.'),
 Q('Quel minerai est exporté en grande quantité ?',['le cuivre','le sel de mer','le charbon de bois','l’aluminium seul'],'le cuivre','Le cuivre du Katanga.'),
 Q('Quel port est sur le fleuve Congo, près de l’Atlantique ?',['Matadi','Goma','Kananga','Mbuji-Mayi'],'Matadi','Matadi.'),
 Q('Que produit le barrage d’Inga ?',['de l’électricité','du cuivre','du coton','du pétrole'],'de l’électricité','Hydroélectricité.')]);
J6['p6|sc|8']=[TRI('Agriculture ou mines ? Range chaque production.',['Agriculture','Mines'],[['manioc','Agriculture'],['cuivre','Mines'],['café','Agriculture'],['cobalt','Mines'],['cacao','Agriculture'],['diamant','Mines']])];
C['p6|sc|9']=M(['Les institutions de la RDC : le Président de la République, le Gouvernement, le Parlement (Assemblée nationale et Sénat) et la justice (cours et tribunaux). La Constitution actuelle date de 2006.','Chaque pouvoir a son rôle : exécuter, faire les lois, juger.'],[
 Q('Qui fait les lois ?',['le Parlement','le Président seul','les tribunaux','l’armée'],'le Parlement','L’Assemblée nationale et le Sénat votent les lois.'),
 Q('Qui juge ?',['les tribunaux','le Parlement','le Gouvernement','les élèves'],'les tribunaux','La justice juge.'),
 Q('Quelles chambres forment le Parlement ?',['l’Assemblée nationale et le Sénat','le Sénat et la Cour','la Mairie et la Cour','l’Armée et la Police'],'l’Assemblée nationale et le Sénat','Deux chambres.'),
 Q('Quelle est la loi suprême ?',['la Constitution','le règlement de l’école','un décret','un proverbe'],'la Constitution','La Constitution.')]);
C['p6|sc|10']=M(['Les droits humains sont universels : droit à la vie, à l’éducation, à la santé, à la liberté d’expression, à l’égalité. Chaque personne a aussi des devoirs : respecter la loi et les droits des autres.','La citoyenneté, c’est vivre ses droits et ses devoirs.'],[
 Q('Quel est un droit humain ?',['le droit à l’éducation','le droit de frapper','le droit de voler','le droit d’insulter'],'le droit à l’éducation','L’éducation est un droit.'),
 Q('Quel est un devoir du citoyen ?',['respecter la loi','ignorer la loi','tricher','casser les biens publics'],'respecter la loi','On respecte la loi.'),
 Q('Les droits humains concernent…',['toute personne','seulement les adultes','seulement les riches','seulement les chefs'],'toute personne','Ils sont universels.'),
 Q('Que faire si l’on voit une injustice ?',['en parler à un adulte ou à une autorité','l’ignorer toujours','l’encourager','se moquer'],'en parler à un adulte ou à une autorité','On agit de façon responsable.')]);
C['p6|sc|11']=M(['Projet citoyen de fin d’année : identifier un problème de ton quartier (déchets, eau, sécurité routière), proposer une solution et agir avec les autres (nettoyage, plantation d’arbres, campagne d’information).','Un projet réussi réunit des idées, des gestes et de la persévérance.'],[
 Q('Première étape d’un projet citoyen ?',['repérer un problème dans le quartier','acheter un cadeau','dormir','attendre'],'repérer un problème dans le quartier','On part d’un besoin réel.'),
 Q('Quelle action peut aider le quartier ?',['organiser un nettoyage','jeter des déchets','casser un banc','ignorer le problème'],'organiser un nettoyage','Agir ensemble.'),
 Q('Pourquoi travailler en équipe ?',['on réussit mieux ensemble','pour se disputer','pour rien','pour tricher'],'on réussit mieux ensemble','Le travail d’équipe est plus efficace.'),
 Q('Que fait-on à la fin d’un projet ?',['on évalue ce qui a bien marché','on oublie tout','on casse tout','on cache les résultats'],'on évalue ce qui a bien marché','On retient les enseignements de l’action.')]);
