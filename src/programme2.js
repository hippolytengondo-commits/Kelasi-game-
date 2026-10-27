import {Q} from './data.js';

// 2e primaire : 32 missions jouables + énigmes ajoutées à quelques missions de la 1re primaire.
const M=(intro,qs,jeux)=>{const o={intro:intro,qs:qs};if(jeux)o.jeux=jeux;return o};
const ORDRE=(consigne,mots,rep,indice)=>({t:'ordre',consigne:consigne,mots:mots,rep:rep,indice:indice});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
export const C2={};
const C=C2;

// ---------------- Français ----------------
C['p2|fr|0']=M(['On redécoupe les mots en syllabes pour mieux les lire : ba-na-ne, car-ta-ble.','On peut aussi coller des syllabes pour fabriquer un mot : la + pin = lapin.'],[
 Q('Combien de syllabes y a-t-il dans « ba-na-ne » ?',['3','2','4','1'],'3','Ba, na, ne : trois syllabes.'),
 Q('Que fait la + pin ?',['lapin','pinla','lalin','pila'],'lapin','la + pin = lapin.'),
 Q('Quel mot commence par la syllabe « ca » ?',['cartable','tableau','maison','école'],'cartable','« cartable » commence par « car », donc par « ca ».'),
 Q('Quel mot a deux syllabes ?',['ma-man','a-vi-on','é-co-le','ba-na-ne'],'ma-man','Ma-man : deux syllabes.')]);
C['p2|fr|1']=M(['Une phrase affirmative dit que quelque chose est vrai. Elle finit par un point.','« Le chat dort. » est une phrase affirmative.'],[
 Q('Quelle phrase est affirmative ?',['Le chat dort.','Le chat dort-il ?','Où dort le chat ?','Le chat dort ?'],'Le chat dort.','Elle affirme quelque chose et finit par un point.'),
 Q('Par quel signe finit une phrase affirmative ?',['un point','un point d’interrogation','une virgule','un tiret'],'un point','Une phrase affirmative finit par un point.'),
 Q('Quelle phrase est bien écrite ?',['Amani lit un livre.','amani lit un livre','Amani lit un livre','AMANI LIT un livre.'],'Amani lit un livre.','Majuscule au début, point à la fin.'),
 Q('Quel mot commence toujours une phrase ?',['un mot avec une majuscule','un mot sans lettre','un chiffre','un point'],'un mot avec une majuscule','On commence par une majuscule.')],
 [ORDRE('Remets les mots dans l’ordre pour faire une phrase affirmative.',['aime','Lola','les','mangues'],['Lola','aime','les','mangues'],'Commence par celle qui aime : Lola.')]);
C['p2|fr|2']=M(['Une phrase interrogative pose une question. Elle finit par un point d’interrogation (?).','On utilise des mots comme : où, qui, quand, pourquoi, comment.'],[
 Q('Quelle phrase est une question ?',['Où vas-tu ?','Je vais au marché.','Le marché est grand.','Va au marché.'],'Où vas-tu ?','Elle pose une question et finit par « ? ».'),
 Q('Quel signe met-on à la fin d’une question ?',['?','.','!',','],'?','Le point d’interrogation.'),
 Q('Quel mot sert à demander un lieu ?',['où','qui','quand','pourquoi'],'où','« Où » demande le lieu.'),
 Q('Quel mot sert à demander une personne ?',['qui','où','quand','combien'],'qui','« Qui » demande la personne.')]);
C['p2|fr|3']=M(['Un nom sert à nommer une personne, un animal ou une chose.','Maître, chèvre, cahier sont des noms.'],[
 Q('Quel mot est un nom d’animal ?',['chien','table','maître','cahier'],'chien','Le chien est un animal.'),
 Q('Quel mot est un nom de chose ?',['table','poule','infirmière','chèvre'],'table','La table est une chose.'),
 Q('Quel mot est un nom de personne ?',['maîtresse','cahier','lion','chaise'],'maîtresse','La maîtresse est une personne.'),
 Q('Que nomme un nom ?',['une personne, un animal ou une chose','seulement une couleur','seulement une action','un chiffre'],'une personne, un animal ou une chose','Un nom nomme les personnes, les animaux et les choses.')],
 [TRI('Range chaque nom dans le bon panier.',['Personnes','Animaux','Choses'],[['maître','Personnes'],['chèvre','Animaux'],['cahier','Choses'],['poule','Animaux'],['infirmière','Personnes'],['chaise','Choses']])]);
C['p2|fr|4']=M(['Le verbe d’action dit ce que l’on fait : courir, manger, chanter, écrire.','On le trouve en demandant : « Que fait-il ? »'],[
 Q('Quel mot est un verbe d’action ?',['courir','table','rouge','grand'],'courir','Courir est une action.'),
 Q('Dans « Junior mange », quel est le verbe ?',['mange','Junior','le','un'],'mange','Junior fait l’action de manger.'),
 Q('Dans « Lola chante », quel est le verbe ?',['chante','Lola','la','une'],'chante','Que fait Lola ? Elle chante.'),
 Q('Que dit le verbe d’action ?',['ce que l’on fait','la couleur','la taille','le nom'],'ce que l’on fait','Il dit l’action.')]);
C['p2|fr|5']=M(['Singulier : une seule chose (un chat). Pluriel : plusieurs choses (des chats).','Au pluriel, on ajoute souvent un « s ».'],[
 Q('Quel est le pluriel de « chat » ?',['chats','chate','chatte','chaz'],'chats','Un chat, des chats.'),
 Q('Quel est le singulier de « livres » ?',['livre','livres','livrer','lire'],'livre','Des livres, un livre.'),
 Q('Quelle phrase est au pluriel ?',['Les enfants jouent.','L’enfant joue.','Un enfant joue.','Mon enfant joue.'],'Les enfants jouent.','« Les enfants » : plusieurs enfants.'),
 Q('Quel est le pluriel de « mangue » ?',['mangues','mangue','mangua','mangs'],'mangues','Une mangue, des mangues.')]);
C['p2|fr|6']=M(['Pour lire un texte court, on le lit deux fois : une fois pour comprendre, une fois pour retenir les détails.','Texte : « Maman va au marché. Elle achète du riz et du poisson. Elle rentre à midi. »'],[
 Q('Qui va au marché ?',['maman','papa','Junior','la maîtresse'],'maman','Maman va au marché.'),
 Q('Qu’achète maman ?',['du riz et du poisson','des livres','des mangues','du sel seulement'],'du riz et du poisson','Elle achète du riz et du poisson.'),
 Q('Quand rentre-t-elle ?',['à midi','le soir','le matin','la nuit'],'à midi','Elle rentre à midi.'),
 Q('Où va maman ?',['au marché','à l’école','au fleuve','à l’hôpital'],'au marché','Maman va au marché.')]);
C['p2|fr|7']=M(['Pour répondre à une question de lecture, on cherche la réponse dans le texte.','Texte : « Le fleuve Congo est très grand. Les pêcheurs partent le matin en pirogue. »'],[
 Q('Qui est très grand ?',['le fleuve Congo','la pirogue','le pêcheur','le matin'],'le fleuve Congo','Le texte dit : « Le fleuve Congo est très grand. »'),
 Q('Qui part le matin ?',['les pêcheurs','les maîtres','les enfants','les vendeurs'],'les pêcheurs','Les pêcheurs partent le matin.'),
 Q('Comment partent-ils ?',['en pirogue','en bus','à pied','en avion'],'en pirogue','Ils partent en pirogue.'),
 Q('Pour répondre, que faut-il faire ?',['relire le texte','deviner au hasard','ne rien dire','changer de texte'],'relire le texte','On retrouve la réponse dans le texte.')]);
C['p2|fr|8']=M(['Une phrase complète dit qui fait quoi : un sujet et un verbe, avec un sens clair.','« Junior va à l’école. » est complète.'],[
 Q('Quelle phrase est complète ?',['Junior va à l’école.','Junior va','à l’école','Va à'],'Junior va à l’école.','Elle dit qui fait quoi et où.'),
 Q('Que faut-il dans une phrase complète ?',['un sujet et un verbe','seulement un nom','seulement un chiffre','rien'],'un sujet et un verbe','Il faut dire qui fait quoi.'),
 Q('Complète : « Lola ... un livre. »',['lit','livre','rouge','sous'],'lit','« Lola lit un livre. »'),
 Q('Quelle phrase est la mieux écrite ?',['Les enfants jouent au ballon.','enfants les ballon jouent','jouent ballon','les ballon'],'Les enfants jouent au ballon.','Les mots sont dans le bon ordre.')],
 [ORDRE('Remets les mots dans l’ordre.',['va','Junior','à','l’école'],['Junior','va','à','l’école'],'Qui va ? Junior. Où ? À l’école.')]);
C['p2|fr|9']=M(['Décrire une image, c’est dire ce que l’on voit : qui, quoi, où, comment.','Image : un enfant lit sous un grand manguier.'],[
 Q('Que fait l’enfant ?',['il lit','il court','il dort','il mange'],'il lit','L’enfant lit.'),
 Q('Où est l’enfant ?',['sous le manguier','dans l’eau','au marché','dans la classe'],'sous le manguier','Il est sous le manguier.'),
 Q('Comment est l’arbre ?',['grand','petit','bleu','mort'],'grand','C’est un grand manguier.'),
 Q('Décrire une image, c’est…',['dire ce que l’on voit','raconter autre chose','dessiner seulement','éteindre la lumière'],'dire ce que l’on voit','On décrit ce que l’on observe.')]);
C['p2|fr|10']=M(['Un petit message commence par une formule de politesse et finit par ton prénom.','Exemple : « Bonjour Maman, je rentre à 5 heures. Amani »'],[
 Q('Par quoi commence un message poli ?',['Bonjour','Donne-moi','Vite','Va-t’en'],'Bonjour','On commence par « Bonjour ».'),
 Q('Par quoi finit un message ?',['par ton prénom','par rien','par un chiffre','par un point d’interrogation'],'par ton prénom','On signe avec son prénom.'),
 Q('À quoi sert un petit message ?',['donner une nouvelle ou demander quelque chose','faire peur','cacher un secret','rien'],'donner une nouvelle ou demander quelque chose','Le message transmet une information.'),
 Q('Quel message est poli ?',['Bonjour Papa, peux-tu m’aider ? Lola','Aide-moi tout de suite','Donne','Pas envie'],'Bonjour Papa, peux-tu m’aider ? Lola','Il est poli et signé.')]);
C['p2|fr|11']=M(['Une histoire a un début, un milieu et une fin. On met les événements dans l’ordre.','Les mots « d’abord », « ensuite », « enfin » aident à raconter.'],[
 Q('Amani se lève, puis mange, puis va à l’école. Que fait-il en premier ?',['il se lève','il va à l’école','il mange','il dort'],'il se lève','D’abord il se lève.'),
 Q('Quel mot annonce la suite d’une histoire ?',['ensuite','jamais','rien','non'],'ensuite','« Ensuite » annonce la suite.'),
 Q('Une histoire commence souvent par…',['Il était une fois','Pour finir','Fin','Merci'],'Il était une fois','C’est une manière de commencer.'),
 Q('Quel mot annonce la fin ?',['enfin','d’abord','hier','demain'],'enfin','« Enfin » annonce la fin.')]);

// ---------------- Mathématiques ----------------
C['p2|ma|0']=M(['On compte jusqu’à 100. Après 69 vient 70, après 79 vient 80.','De 10 en 10 : 10, 20, 30… jusqu’à 100.'],[
 Q('Quel nombre vient après 69 ?',['70','68','60','79'],'70','Après 69 vient 70.'),
 Q('Quel nombre vient avant 80 ?',['79','81','70','78'],'79','Avant 80 vient 79.'),
 Q('Quel nombre est entre 45 et 47 ?',['46','44','48','50'],'46','Entre 45 et 47 il y a 46.'),
 Q('Compte de 10 en 10 : 60, 70, …',['80','75','90','71'],'80','60, 70, 80.')]);
C['p2|ma|1']=M(['Dans un nombre à deux chiffres, le premier compte les dizaines et le second les unités.','34, c’est 3 dizaines et 4 unités.'],[
 Q('Dans 34, combien y a-t-il de dizaines ?',['3','4','7','34'],'3','34 = 3 dizaines et 4 unités.'),
 Q('Dans 34, combien y a-t-il d’unités ?',['4','3','7','30'],'4','34 = 3 dizaines et 4 unités.'),
 Q('7 dizaines et 2 unités, quel nombre ?',['72','27','9','702'],'72','7 dizaines = 70, plus 2 = 72.'),
 Q('Dans 58, quel est le chiffre des unités ?',['8','5','13','58'],'8','Dans 58 : 5 dizaines et 8 unités.')]);
C['p2|ma|2']=M(['Pour comparer deux nombres, on regarde d’abord les dizaines. Le signe > veut dire « plus grand que », < veut dire « plus petit que ».','45 < 54 car 4 dizaines est plus petit que 5 dizaines.'],[
 Q('Quel signe va entre 45 et 54 : 45 … 54 ?',['<','>','=','+'],'<','45 est plus petit que 54.'),
 Q('Quel est le plus grand : 67, 76 ou 58 ?',['76','67','58','aucun'],'76','76 a 7 dizaines.'),
 Q('Range du plus petit au plus grand : 12, 9, 15.',['9, 12, 15','12, 9, 15','15, 12, 9','9, 15, 12'],'9, 12, 15','9 < 12 < 15.'),
 Q('Que veut dire le signe > ?',['plus grand que','plus petit que','égal à','plus'],'plus grand que','> veut dire plus grand que.')]);
C['p2|ma|3']=M(['Additionner sans retenue : on ajoute les unités, puis les dizaines.','23 + 14 : 3 + 4 = 7 et 2 + 1 = 3, donc 37.'],[
 Q('Combien font 23 + 14 ?',['37','36','47','27'],'37','23 + 14 = 37.'),
 Q('Combien font 41 + 25 ?',['66','65','56','76'],'66','41 + 25 = 66.'),
 Q('Combien font 30 + 20 ?',['50','60','40','10'],'50','30 + 20 = 50.'),
 Q('Combien font 52 + 7 ?',['59','57','69','49'],'59','52 + 7 = 59.')]);
C['p2|ma|4']=M(['Quand les unités dépassent 9, on fait une retenue : 18 + 7, c’est 8 + 7 = 15, on pose 5 et on retient 1 dizaine.','18 + 7 = 25.'],[
 Q('Combien font 18 + 7 ?',['25','24','15','26'],'25','18 + 7 = 25.'),
 Q('Combien font 36 + 9 ?',['45','35','44','46'],'45','36 + 9 = 45.'),
 Q('Combien font 27 + 15 ?',['42','32','41','52'],'42','27 + 15 = 42.'),
 Q('Combien font 49 + 13 ?',['62','52','61','72'],'62','49 + 13 = 62.')]);
C['p2|ma|5']=M(['Soustraire, c’est enlever. 15 − 6 = 9.','On peut compter à l’envers ou utiliser les dizaines.'],[
 Q('Combien font 15 − 6 ?',['9','8','10','11'],'9','15 − 6 = 9.'),
 Q('Combien font 40 − 10 ?',['30','50','20','31'],'30','40 − 10 = 30.'),
 Q('Combien font 28 − 5 ?',['23','33','22','25'],'23','28 − 5 = 23.'),
 Q('Amani a 25 billes et en perd 5. Combien lui en reste-t-il ?',['20','30','15','25'],'20','25 − 5 = 20.')]);
C['p2|ma|6']=M(['Le double d’un nombre, c’est ce nombre deux fois : le double de 6 est 12.','La moitié, c’est partager en deux parts égales : la moitié de 8 est 4.'],[
 Q('Quel est le double de 6 ?',['12','8','3','66'],'12','6 + 6 = 12.'),
 Q('Quel est le double de 10 ?',['20','100','5','12'],'20','10 + 10 = 20.'),
 Q('Quelle est la moitié de 8 ?',['4','16','2','6'],'4','8 partagé en deux : 4.'),
 Q('Quelle est la moitié de 20 ?',['10','40','5','2'],'10','20 partagé en deux : 10.')]);
C['p2|ma|7']=M(['On mesure la longueur avec une règle ou un mètre, et le poids avec une balance.','1 mètre = 100 centimètres.'],[
 Q('Avec quoi mesure-t-on une longueur ?',['une règle','une balance','un thermomètre','une montre'],'une règle','La règle mesure les longueurs.'),
 Q('Avec quoi mesure-t-on le poids ?',['une balance','une règle','une horloge','un seau'],'une balance','La balance mesure le poids.'),
 Q('1 mètre, c’est combien de centimètres ?',['100','10','1 000','50'],'100','1 m = 100 cm.'),
 Q('Qu’est-ce qui est le plus lourd ?',['un sac de riz','une plume','une feuille','un crayon'],'un sac de riz','Un sac de riz est lourd.')]);
C['p2|ma|8']=M(['En RDC, on utilise le franc congolais (FC). On additionne les prix pour savoir combien on doit payer.','Aide le marchand à préparer une commande !'],[
 Q('Quelle monnaie utilise-t-on en RDC ?',['le franc congolais','l’euro','le dollar seulement','le yen'],'le franc congolais','En RDC, la monnaie est le franc congolais.'),
 Q('Combien font 100 FC + 100 FC ?',['200 FC','100 FC','1 000 FC','20 FC'],'200 FC','100 + 100 = 200.'),
 Q('Combien font 500 FC − 200 FC ?',['300 FC','700 FC','200 FC','400 FC'],'300 FC','500 − 200 = 300.'),
 Q('Avec 1 000 FC, peut-on acheter 2 pains à 500 FC ?',['oui','non','seulement un','on ne sait pas'],'oui','500 + 500 = 1 000.')],
 [{t:'panier',consigne:'Le marchand demande : 2 mangues et 1 pain. Prépare la commande !',articles:[{n:'mangue',e:'🥭',p:100},{n:'pain',e:'🍞',p:50},{n:'arachides',e:'🥜',p:200}],cible:{mangue:2,pain:1},total:{q:'Combien le client doit-il payer ?',c:['250 FC','300 FC','150 FC','350 FC'],a:'250 FC',indice:'2 mangues = 100 + 100, puis ajoute le pain à 50.'}}]);
C['p2|ma|9']=M(['Un rectangle a 4 côtés et 4 sommets. Un carré est un rectangle dont les 4 côtés sont égaux.','Un triangle a 3 côtés. Un cercle n’a pas de côté.'],[
 Q('Combien de côtés a un rectangle ?',['4','3','5','2'],'4','Un rectangle a 4 côtés.'),
 Q('Les côtés d’un carré sont…',['tous égaux','tous différents','arrondis','absents'],'tous égaux','Un carré a 4 côtés égaux.'),
 Q('Quelle forme n’a pas de côté ?',['le cercle','le carré','le triangle','le rectangle'],'le cercle','Le cercle est tout rond.'),
 Q('Combien de sommets a un triangle ?',['3','4','2','5'],'3','Un triangle a 3 sommets.')]);
C['p2|ma|10']=M(['Dans un problème, on lit bien, on cherche ce que l’on sait, puis on calcule.','Choisis la bonne opération : ajouter ou enlever.'],[
 Q('Maman achète 3 mangues à 100 FC chacune. Combien paie-t-elle ?',['300 FC','100 FC','30 FC','400 FC'],'300 FC','100 + 100 + 100 = 300 FC.'),
 Q('Junior a 12 billes et en gagne 8. Combien en a-t-il ?',['20','4','18','21'],'20','12 + 8 = 20.'),
 Q('Il y a 30 élèves dont 12 filles. Combien de garçons ?',['18','42','20','28'],'18','30 − 12 = 18.'),
 Q('Un seau contient 10 litres. Combien de litres dans 2 seaux ?',['20','12','5','100'],'20','10 + 10 = 20.')]);
C['p2|ma|11']=M(['Révision de l’année : nombres, additions, soustractions, mesures et monnaie.','Tu es presque prêt pour la 3e primaire !'],[
 Q('Combien font 45 + 38 ?',['83','73','82','93'],'83','45 + 38 = 83.'),
 Q('Combien font 70 − 25 ?',['45','55','35','95'],'45','70 − 25 = 45.'),
 Q('Quelle est la moitié de 30 ?',['15','60','10','20'],'15','30 partagé en deux : 15.'),
 Q('1 mètre = … centimètres',['100','10','1 000','60'],'100','1 m = 100 cm.')]);

// ---------------- Sciences, milieu et civisme ----------------
C['p2|sc|0']=M(['Les objets naturels existent dans la nature : arbre, pierre, rivière. Les objets fabriqués sont faits par les humains : table, cahier, chaussure.','Regarde autour de toi : que peux-tu classer ?'],[
 Q('Quel objet est naturel ?',['une pierre','une table','un cahier','une chaussure'],'une pierre','La pierre existe dans la nature.'),
 Q('Quel objet est fabriqué ?',['un cahier','un arbre','une rivière','un nuage'],'un cahier','Le cahier est fait par les humains.'),
 Q('Qui fabrique les objets ?',['les humains','la pluie','le vent','les nuages'],'les humains','Les humains fabriquent les objets.'),
 Q('Un arbre est…',['naturel','fabriqué','en plastique','en fer'],'naturel','L’arbre pousse tout seul.')],
 [TRI('Range chaque objet dans le bon panier.',['Naturel','Fabriqué'],[['arbre','Naturel'],['table','Fabriqué'],['pierre','Naturel'],['cahier','Fabriqué'],['rivière','Naturel'],['chaussure','Fabriqué']])]);
C['p2|sc|1']=M(['Chaque animal vit dans un endroit qu’on appelle son habitat : le poisson dans l’eau, le singe dans la forêt, la poule au poulailler.','L’habitat donne à l’animal de quoi manger et se protéger.'],[
 Q('Où vit le poisson ?',['dans l’eau','dans l’arbre','sous terre seulement','dans le ciel'],'dans l’eau','Le poisson vit dans l’eau.'),
 Q('Où vit le singe ?',['dans la forêt','dans l’eau','dans le désert','dans la mer'],'dans la forêt','Le singe vit dans la forêt.'),
 Q('Qu’est-ce qu’un habitat ?',['l’endroit où vit un animal','un jouet','un aliment','un outil'],'l’endroit où vit un animal','C’est le lieu de vie de l’animal.'),
 Q('Où vit la poule ?',['au poulailler','dans le fleuve','dans la forêt dense','dans la mine'],'au poulailler','La poule vit au poulailler.')],
 [TRI('Où vit chaque animal ? Range-le.',['Eau','Forêt','Maison'],[['poisson','Eau'],['crocodile','Eau'],['singe','Forêt'],['gorille','Forêt'],['chien','Maison'],['poule','Maison']])]);
C['p2|sc|2']=M(['Les plantes ont besoin de lumière, d’eau, d’air et de terre pour grandir.','Sans eau, une plante se fane.'],[
 Q('De quoi une plante a-t-elle besoin ?',['d’eau et de lumière','de plastique','de bruit','de sucre'],'d’eau et de lumière','Elle a besoin d’eau et de lumière.'),
 Q('Que devient une plante sans eau ?',['elle se fane','elle grandit vite','elle chante','elle change de couleur en bleu'],'elle se fane','Sans eau, elle se dessèche.'),
 Q('Où poussent la plupart des plantes ?',['dans la terre','dans le feu','dans la glace','dans l’huile'],'dans la terre','Leurs racines vont dans la terre.'),
 Q('À quoi servent les racines ?',['à boire l’eau du sol','à voler','à chanter','à nager'],'à boire l’eau du sol','Les racines absorbent l’eau.')]);
C['p2|sc|3']=M(['Manger équilibré, c’est manger de tout : des aliments qui donnent de l’énergie (manioc, riz), des fruits et légumes, du poisson ou des haricots.','Et il faut boire de l’eau propre.'],[
 Q('Quel aliment donne de l’énergie ?',['le manioc','le sel seul','le savon','le charbon'],'le manioc','Le manioc est riche en énergie.'),
 Q('Que nous apportent les fruits et légumes ?',['des vitamines','du plastique','du bruit','de l’essence'],'des vitamines','Ils apportent des vitamines.'),
 Q('Que veut dire manger équilibré ?',['manger varié','manger toujours la même chose','ne pas manger','manger très vite'],'manger varié','Un repas équilibré est varié.'),
 Q('Que faut-il boire pendant la journée ?',['de l’eau propre','de l’eau sale','de l’huile','de la boue'],'de l’eau propre','L’eau propre est indispensable.')]);
C['p2|sc|4']=M(['Pour rester en bonne santé, on se lave les mains, on garde sa maison propre et on dort sous une moustiquaire.','On couvre la nourriture pour que les mouches ne la salissent pas.'],[
 Q('Pourquoi couvrir la nourriture ?',['pour éloigner les mouches','pour la cacher','pour la rendre bleue','pour rien'],'pour éloigner les mouches','Les mouches apportent des microbes.'),
 Q('À quoi sert la moustiquaire ?',['à se protéger des moustiques','à se protéger du soleil','à jouer','à cuisiner'],'à se protéger des moustiques','Elle protège contre les moustiques et le paludisme.'),
 Q('Quand se lave-t-on les mains ?',['avant de manger et après les toilettes','jamais','seulement le soir','seulement le lundi'],'avant de manger et après les toilettes','C’est le bon réflexe.'),
 Q('Que fait-on pour garder la maison propre ?',['on balaie','on jette tout par terre','on casse les fenêtres','on ferme les yeux'],'on balaie','On balaie et on range.')]);
C['p2|sc|5']=M(['À l’école, on respecte des règles : on lève la main pour parler, on écoute, on ne court pas en classe.','Les règles permettent à tout le monde de bien apprendre.'],[
 Q('Que fait-on pour demander la parole ?',['on lève la main','on crie','on se lève et on part','on tape sur la table'],'on lève la main','On lève la main.'),
 Q('Pendant que le maître explique, on…',['écoute','joue','dort','crie'],'écoute','On écoute pour comprendre.'),
 Q('Pourquoi y a-t-il des règles à l’école ?',['pour bien vivre ensemble','pour embêter','pour rien','pour jouer seulement'],'pour bien vivre ensemble','Les règles aident tout le monde.'),
 Q('Que fait-on avec le matériel de l’école ?',['on en prend soin','on le casse','on le cache','on le jette'],'on en prend soin','Le matériel est à tous.')]);
C['p2|sc|6']=M(['Dans la communauté, chacun a un métier utile : l’infirmière soigne, le policier protège, le boulanger fait le pain, l’enseignant enseigne.','On se rend service les uns aux autres.'],[
 Q('Qui soigne les malades ?',['l’infirmière','le boulanger','le policier','le chauffeur'],'l’infirmière','L’infirmière soigne.'),
 Q('Qui fait le pain ?',['le boulanger','le pêcheur','le pilote','le maçon'],'le boulanger','Le boulanger fait le pain.'),
 Q('Qui protège les habitants ?',['le policier','le tailleur','le coiffeur','le facteur'],'le policier','Le policier protège.'),
 Q('Pourquoi chaque métier est-il utile ?',['il rend service aux autres','il ne sert à rien','il est amusant','il fait du bruit'],'il rend service aux autres','Chaque métier est utile à la communauté.')]);
C['p2|sc|7']=M(['L’eau et la nature sont précieuses : on ne jette pas de déchets, on ferme le robinet, on plante des arbres.','Protéger la nature, c’est protéger notre avenir.'],[
 Q('Que faire d’un robinet qui coule ?',['le fermer','le laisser couler','le casser','le cacher'],'le fermer','On ne gaspille pas l’eau.'),
 Q('Où jette-t-on les déchets ?',['à la poubelle','dans la rivière','dans la rue','dans le puits'],'à la poubelle','On trie et on jette à la poubelle.'),
 Q('Quel geste aide la nature ?',['planter un arbre','couper tous les arbres','brûler le plastique','salir l’eau'],'planter un arbre','Un arbre aide la nature.'),
 Q('Pourquoi protéger l’eau ?',['tous les êtres vivants en ont besoin','elle est inutile','elle est dangereuse','elle est chère à jeter'],'tous les êtres vivants en ont besoin','Sans eau, pas de vie.')]);

// ---------------- Énigmes ajoutées à des missions de la 1re primaire ----------------
export const JEUX={
 'p1|fr|7':[ORDRE('Remets les mots dans l’ordre pour faire une phrase.',['mange','Junior','une mangue'],['Junior','mange','une mangue'],'Qui fait quoi ? Commence par « Junior ».')],
 'p1|ma|9':[TRI('Trie les objets : fruits ou animaux ?',['Fruits','Animaux'],[['mangue','Fruits'],['chien','Animaux'],['banane','Fruits'],['lion','Animaux'],['orange','Fruits'],['chat','Animaux']])],
 'p1|ev|2':[TRI('Où vit chaque animal ? À la maison ou dans la forêt ?',['Maison','Forêt'],[['chien','Maison'],['poule','Maison'],['singe','Forêt'],['éléphant','Forêt'],['chèvre','Maison'],['lion','Forêt']])]
};
