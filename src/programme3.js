import {Q} from './data.js';

// 3e primaire : 38 missions jouables (français 14, mathématiques 14, sciences-histoire-géographie-civisme 10).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
const COL=(consigne,items,indice,exp)=>({consigne:consigne,items:items.map(i=>[String(i[0]),i[1]]),indice:indice,exp:exp});
export const C3={},J3={},K3={};
const C=C3;

// ---------------- Français ----------------
C['p3|fr|0']=M(['Il existe plusieurs types de phrases : déclarative (elle raconte), interrogative (elle pose une question), exclamative (elle exprime une émotion) et impérative (elle donne un ordre).','Chaque type a sa ponctuation : . ? ! et souvent un point pour l’ordre.'],[
 Q('Quelle phrase est exclamative ?',['Quelle belle journée !','Où vas-tu ?','Ferme la porte.','Le chat dort.'],'Quelle belle journée !','Elle exprime une émotion et finit par « ! ».'),
 Q('Quelle phrase donne un ordre ?',['Ferme la porte.','Il ferme la porte.','Ferme-t-il la porte ?','La porte est fermée.'],'Ferme la porte.','C’est une phrase impérative.'),
 Q('Quelle phrase pose une question ?',['Où est mon cahier ?','Mon cahier est ici.','Prends mon cahier.','Quel beau cahier !'],'Où est mon cahier ?','Elle pose une question et finit par « ? ».'),
 Q('Quel signe termine une phrase exclamative ?',['!','?','.',','],'!','Le point d’exclamation.')]);
J3['p3|fr|0']=[TRI('Question ou ordre ? Range chaque phrase.',['Question','Ordre'],[['Où vas-tu ?','Question'],['Ferme la porte.','Ordre'],['Comment t’appelles-tu ?','Question'],['Assieds-toi.','Ordre'],['Qui est là ?','Question'],['Écoute bien.','Ordre']])];
C['p3|fr|1']=M(['Le sujet fait l’action. On le trouve avec « Qui est-ce qui ? ». Le verbe dit l’action ou l’état.','Dans « Les enfants jouent », le sujet est « les enfants » et le verbe est « jouent ».'],[
 Q('Dans « Les enfants jouent », quel est le sujet ?',['Les enfants','jouent','Les','jouent les'],'Les enfants','Qui est-ce qui joue ? Les enfants.'),
 Q('Dans « Maman cuisine le riz », quel est le verbe ?',['cuisine','Maman','riz','le'],'cuisine','Le verbe dit ce que fait maman.'),
 Q('Quelle question aide à trouver le sujet ?',['Qui est-ce qui ?','Où ?','Quand ?','Combien ?'],'Qui est-ce qui ?','On pose « Qui est-ce qui ? » devant le verbe.'),
 Q('Dans « Lola chante », quel est le sujet ?',['Lola','chante','la','une'],'Lola','Qui est-ce qui chante ? Lola.')]);
C['p3|fr|2']=M(['Le nom propre désigne une personne, un lieu ou une chose unique : Lola, Kinshasa, Congo. Il prend toujours une majuscule.','Le nom commun désigne une catégorie : fille, ville, fleuve.'],[
 Q('Quel mot est un nom propre ?',['Kinshasa','ville','fleuve','maison'],'Kinshasa','Kinshasa est le nom d’une ville précise.'),
 Q('Quel mot est un nom commun ?',['maison','Lola','Congo','Matadi'],'maison','« maison » désigne toutes les maisons.'),
 Q('Un nom propre commence par…',['une majuscule','une minuscule','un chiffre','un point'],'une majuscule','On écrit Lola, pas lola.'),
 Q('Quelle phrase est bien écrite ?',['Amani habite à Goma.','amani habite à goma.','Amani habite à goma.','amani habite à Goma.'],'Amani habite à Goma.','Les noms propres prennent une majuscule.')]);
J3['p3|fr|2']=[TRI('Nom propre ou nom commun ?',['Nom propre','Nom commun'],[['Lola','Nom propre'],['maison','Nom commun'],['Kinshasa','Nom propre'],['fleuve','Nom commun'],['Congo','Nom propre'],['cahier','Nom commun']])];
C['p3|fr|3']=M(['Les articles se placent devant le nom : le, la, l’, les (défini) ; un, une, des (indéfini).','Ils indiquent si le nom est masculin, féminin, singulier ou pluriel.'],[
 Q('Quel article va devant « maison » ?',['la','le','les','un'],'la','On dit « la maison ».'),
 Q('Complète : « ... mangue est mûre. »',['La','Le','Les','Un'],'La','« mangue » est féminin : la mangue.'),
 Q('Quel est le pluriel de « le chat » ?',['les chats','le chats','les chat','des chat'],'les chats','Le chat, les chats.'),
 Q('Où se place l’article ?',['devant le nom','après le verbe','à la fin de la phrase','au milieu d’un mot'],'devant le nom','L’article précède le nom.')]);
C['p3|fr|4']=M(['L’adjectif décrit un nom : une grande maison, un ballon rond.','Il s’accorde avec le nom : un chat noir, une chatte noire, des chats noirs.'],[
 Q('Dans « une grande maison », quel est l’adjectif ?',['grande','maison','une','est'],'grande','« grande » décrit la maison.'),
 Q('Quel mot décrit le nom ?',['l’adjectif','le verbe','l’article','le point'],'l’adjectif','L’adjectif décrit le nom.'),
 Q('Complète : « un ballon ... »',['rond','ronde','ronds','rondes'],'rond','Ballon est masculin singulier : rond.'),
 Q('Quel est le contraire de « grand » ?',['petit','long','gros','haut'],'petit','Grand ≠ petit.')]);
K3['p3|fr|4']=[COL('Attrape tous les adjectifs !',[['grand',1],['table',0],['joli',1],['livre',0],['petit',1],['courir',0],['rouge',1]],'Un adjectif décrit comment est une chose.','Bravo ! Grand, joli, petit, rouge décrivent.')];
C['p3|fr|5']=M(['Au présent, le verbe change avec le sujet : je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent.','Les verbes en -er se terminent par -e, -es, -e, -ons, -ez, -ent.'],[
 Q('Complète : « Je (manger) … »',['mange','manges','mangent','mangeons'],'mange','Je mange.'),
 Q('Complète : « Nous (chanter) … »',['chantons','chantez','chantent','chante'],'chantons','Nous chantons.'),
 Q('Complète : « Ils (jouer) … »',['jouent','jouons','jouez','joue'],'jouent','Ils jouent.'),
 Q('Complète : « Tu (être) … content. »',['es','est','suis','êtes'],'es','Tu es content.')]);
C['p3|fr|6']=M(['Les mots s’accordent : l’adjectif prend le genre et le nombre du nom, le verbe s’accorde avec le sujet.','Un garçon content, une fille contente, des enfants contents.'],[
 Q('Complète : « Les fleurs sont (beau) … »',['belles','beau','beaux','belle'],'belles','Fleurs est féminin pluriel : belles.'),
 Q('Complète : « Une fille (content) … »',['contente','content','contents','contentes'],'contente','Fille est féminin : contente.'),
 Q('Complète : « Les enfants (jouer) … »',['jouent','joue','jouons','jouez'],'jouent','Le sujet est pluriel : jouent.'),
 Q('Complète : « des chats (noir) … »',['noirs','noir','noire','noires'],'noirs','Chats est masculin pluriel : noirs.')]);
C['p3|fr|7']=M(['Un texte narratif raconte une histoire : des personnages, un lieu, des événements dans l’ordre.','Texte : « Kito marche vers le fleuve. Il voit un pêcheur qui prépare sa pirogue. Le pêcheur lui sourit et lui dit bonjour. »'],[
 Q('Où marche Kito ?',['vers le fleuve','vers le marché','vers l’école','vers la forêt'],'vers le fleuve','Il marche vers le fleuve.'),
 Q('Qui voit-il ?',['un pêcheur','un maître','un docteur','un chauffeur'],'un pêcheur','Il voit un pêcheur.'),
 Q('Que prépare le pêcheur ?',['sa pirogue','son repas','sa maison','son vélo'],'sa pirogue','Le pêcheur prépare sa pirogue.'),
 Q('Comment réagit le pêcheur ?',['il sourit et dit bonjour','il s’enfuit','il se met en colère','il ne dit rien'],'il sourit et dit bonjour','Il sourit et salue Kito.')]);
C['p3|fr|8']=M(['Le vocabulaire du milieu, ce sont les mots de ton quartier, de ton village et de ta ville : le marché, le fleuve, la pirogue, le bus, le dispensaire.','Connaître ces mots t’aide à mieux parler et à mieux lire.'],[
 Q('Où achète-t-on les légumes et les fruits ?',['au marché','à l’école','à l’hôpital','à la gare'],'au marché','Le marché vend fruits et légumes.'),
 Q('Quel moyen de transport circule sur le fleuve ?',['la pirogue','le vélo','le train','l’avion'],'la pirogue','La pirogue navigue sur le fleuve.'),
 Q('Où va-t-on se faire soigner près de chez soi ?',['au dispensaire','à la boulangerie','au stade','à la gare'],'au dispensaire','Le dispensaire ou centre de santé soigne.'),
 Q('Qui conduit le bus ?',['le chauffeur','le pêcheur','le boulanger','le maçon'],'le chauffeur','Le chauffeur conduit le bus.')]);
C['p3|fr|9']=M(['Les synonymes ont presque le même sens : content, heureux. Les contraires ont un sens opposé : grand, petit.','Les connaître enrichit ton vocabulaire.'],[
 Q('Quel est un synonyme de « content » ?',['heureux','triste','fâché','fatigué'],'heureux','Content et heureux ont le même sens.'),
 Q('Quel est le contraire de « chaud » ?',['froid','tiède','brûlant','doux'],'froid','Chaud ≠ froid.'),
 Q('Quel est le contraire de « monter » ?',['descendre','sauter','grimper','courir'],'descendre','Monter ≠ descendre.'),
 Q('Quel est un synonyme de « beau » ?',['joli','laid','sale','lent'],'joli','Beau et joli.')]);
J3['p3|fr|9']=[TRI('Mots de même sens ou mots contraires ? Range chaque paire.',['Contraires','Synonymes'],[['grand / petit','Contraires'],['content / heureux','Synonymes'],['chaud / froid','Contraires'],['beau / joli','Synonymes'],['monter / descendre','Contraires'],['rapide / vite','Synonymes']])];
C['p3|fr|10']=M(['Un récit court raconte des événements dans l’ordre : d’abord, ensuite, puis, enfin.','On commence par la situation, puis on raconte ce qui arrive, enfin on conclut.'],[
 Q('Quel mot annonce la dernière partie d’un récit ?',['enfin','d’abord','demain','hier'],'enfin','« Enfin » annonce la fin.'),
 Q('Lola se lève, puis se lave, puis déjeune. Que fait-elle en dernier ?',['elle déjeune','elle se lève','elle se lave','elle dort'],'elle déjeune','Elle déjeune en dernier.'),
 Q('Que faut-il dans un récit ?',['des personnages et des événements','seulement des chiffres','seulement des couleurs','rien'],'des personnages et des événements','Un récit raconte ce qui arrive à des personnages.'),
 Q('Quel temps utilise-t-on souvent pour raconter au passé ?',['l’imparfait et le passé composé','le futur seulement','l’impératif seulement','aucun temps'],'l’imparfait et le passé composé','On raconte au passé.')]);
C['p3|fr|11']=M(['Décrire un lieu, c’est dire ce que l’on voit, entend et sent : le marché est bruyant, coloré et plein d’odeurs.','On utilise des adjectifs et des mots de lieu : devant, derrière, au milieu.'],[
 Q('Quel mot décrit un marché animé ?',['bruyant','silencieux','désert','calme'],'bruyant','Un marché animé est bruyant.'),
 Q('Quel mot indique un lieu ?',['derrière','joyeux','rapidement','hier'],'derrière','« Derrière » indique où.'),
 Q('Pour décrire, on utilise surtout…',['des adjectifs','des chiffres','des points','des tirets'],'des adjectifs','Les adjectifs décrivent.'),
 Q('Que peut-on sentir au marché ?',['des odeurs de fruits et de poisson','rien du tout','la neige','l’océan'],'des odeurs de fruits et de poisson','On décrit aussi les odeurs.')]);
C['p3|fr|12']=M(['Dans un dialogue, on met un tiret quand une personne change de parole. Le verbe de parole dit qui parle : dit Lola, répond Junior.','On finit la parole par ? ou ! ou un point.'],[
 Q('Que met-on devant une nouvelle parole dans un dialogue ?',['un tiret','une virgule','un point final','rien'],'un tiret','Le tiret annonce la parole.'),
 Q('Dans « – Bonjour ! dit Lola. », qui parle ?',['Lola','Junior','le maître','maman'],'Lola','« dit Lola » indique qui parle.'),
 Q('Quel verbe introduit une réponse ?',['répond','mange','dort','court'],'répond','« répond » introduit la réponse.'),
 Q('À quoi sert un dialogue ?',['à faire parler les personnages','à compter','à mesurer','à dessiner'],'à faire parler les personnages','Il rend le récit vivant.')]);
C['p3|fr|13']=M(['Une lettre courte comprend : le lieu et la date, la formule d’appel (Cher ami), le message, la formule finale (Amicalement) et la signature.','On soigne l’écriture et la politesse.'],[
 Q('Par quoi commence une lettre à un ami ?',['Cher Amani,','Merci. Au revoir.','Signature','La fin'],'Cher Amani,','On commence par une formule d’appel.'),
 Q('Quelle formule termine une lettre amicale ?',['Amicalement','Bonjour','À tout de suite','Voici'],'Amicalement','C’est une formule finale.'),
 Q('Que met-on en haut de la lettre ?',['le lieu et la date','la signature','le mot « fin »','une recette'],'le lieu et la date','Par exemple : Kinshasa, le 12 mars.'),
 Q('Qui signe la lettre ?',['celui qui l’écrit','celui qui la reçoit','le facteur','personne'],'celui qui l’écrit','L’auteur signe à la fin.')]);

// ---------------- Mathématiques ----------------
C['p3|ma|0']=M(['Jusqu’à 1 000 : 999 + 1 = 1 000. Après 499 vient 500.','On lit les nombres par centaines, dizaines et unités.'],[
 Q('Quel nombre vient après 499 ?',['500','490','599','498'],'500','Après 499 vient 500.'),
 Q('Quel nombre vient avant 700 ?',['699','701','600','690'],'699','Avant 700 vient 699.'),
 Q('Combien de centaines y a-t-il dans 340 ?',['3','4','34','0'],'3','340 = 3 centaines et 4 dizaines.'),
 Q('Compte de 100 en 100 : 300, 400, …',['500','410','600','450'],'500','300, 400, 500.')]);
K3['p3|ma|0']=[COL('Attrape les nombres plus grands que 500 !',[[480,0],[520,1],[999,1],[500,0],[705,1],[350,0],[610,1]],'Il faut un nombre qui vient après 500.','Bravo ! 520, 610, 705 et 999.')];
C['p3|ma|1']=M(['Dans un nombre à trois chiffres : le premier compte les centaines, le deuxième les dizaines, le troisième les unités.','482 = 4 centaines + 8 dizaines + 2 unités.'],[
 Q('482 : combien de dizaines dans le chiffre des dizaines ?',['8','4','2','48'],'8','Le chiffre des dizaines est 8.'),
 Q('5 centaines + 3 dizaines + 1 unité, quel nombre ?',['531','513','135','5 031'],'531','500 + 30 + 1 = 531.'),
 Q('Quel est le chiffre des dizaines de 275 ?',['7','2','5','27'],'7','Dans 275 : 2 centaines, 7 dizaines, 5 unités.'),
 Q('10 dizaines, c’est…',['1 centaine','10 centaines','1 unité','100 unités de dizaines'],'1 centaine','10 dizaines = 100 = 1 centaine.')]);
C['p3|ma|2']=M(['On additionne les unités, puis les dizaines, puis les centaines, avec les retenues.','245 + 132 : 5 + 2 = 7 ; 4 + 3 = 7 ; 2 + 1 = 3 ; donc 377.'],[
 Q('Combien font 245 + 132 ?',['377','367','477','387'],'377','245 + 132 = 377.'),
 Q('Combien font 340 + 250 ?',['590','580','690','490'],'590','340 + 250 = 590.'),
 Q('Combien font 468 + 25 ?',['493','483','503','492'],'493','468 + 25 = 493.'),
 Q('Combien font 506 + 194 ?',['700','690','710','600'],'700','506 + 194 = 700.')]);
C['p3|ma|3']=M(['On soustrait en partant des unités, avec des retenues si besoin.','598 − 234 : 8 − 4 = 4 ; 9 − 3 = 6 ; 5 − 2 = 3 ; donc 364.'],[
 Q('Combien font 598 − 234 ?',['364','374','464','354'],'364','598 − 234 = 364.'),
 Q('Combien font 700 − 300 ?',['400','300','500','1 000'],'400','7 centaines − 3 centaines = 4 centaines.'),
 Q('Combien font 456 − 28 ?',['428','438','418','432'],'428','456 − 28 = 428.'),
 Q('Combien font 1 000 − 1 ?',['999','990','900','1 001'],'999','1 000 − 1 = 999.')]);
C['p3|ma|4']=M(['Multiplier, c’est additionner plusieurs fois le même nombre : 4 + 4 + 4 = 3 × 4 = 12.','Le signe × se lit « fois ».'],[
 Q('Combien font 3 × 4 ?',['12','7','34','14'],'12','3 × 4 = 4 + 4 + 4 = 12.'),
 Q('4 + 4 + 4, c’est…',['3 × 4','4 × 4','4 + 3','4 − 3'],'3 × 4','Trois fois quatre.'),
 Q('Combien font 5 × 2 ?',['10','7','52','25'],'10','5 × 2 = 10.'),
 Q('2 paniers de 6 mangues, combien de mangues ?',['12','8','26','62'],'12','2 × 6 = 12.')]);
C['p3|ma|5']=M(['Les tables de 2, de 5 et de 10 sont les plus faciles : on compte de 2 en 2, de 5 en 5, de 10 en 10.','Les résultats de la table de 5 finissent par 0 ou 5.'],[
 Q('Combien font 2 × 7 ?',['14','12','9','27'],'14','2 × 7 = 14.'),
 Q('Combien font 5 × 6 ?',['30','25','35','11'],'30','5 × 6 = 30.'),
 Q('Combien font 10 × 8 ?',['80','18','108','800'],'80','10 × 8 = 80.'),
 Q('Combien font 5 × 9 ?',['45','40','50','54'],'45','5 × 9 = 45.')]);
K3['p3|ma|5']=[COL('Attrape les résultats de la table de 5 !',[[10,1],[12,0],[25,1],[34,0],[40,1],[18,0],[35,1]],'Dans la table de 5, le résultat finit par 0 ou 5.','Bravo ! 10, 25, 35 et 40 sont dans la table de 5.')];
C['p3|ma|6']=M(['Les tables de 3 et de 4 demandent un peu plus d’entraînement.','3 × 7 = 21 ; 4 × 6 = 24 ; 3 × 9 = 27 ; 4 × 8 = 32.'],[
 Q('Combien font 3 × 7 ?',['21','24','10','27'],'21','3 × 7 = 21.'),
 Q('Combien font 4 × 6 ?',['24','10','28','20'],'24','4 × 6 = 24.'),
 Q('Combien font 3 × 9 ?',['27','12','30','24'],'27','3 × 9 = 27.'),
 Q('Combien font 4 × 8 ?',['32','12','36','28'],'32','4 × 8 = 32.')]);
C['p3|ma|7']=M(['Diviser, c’est partager en parts égales : 12 ÷ 3 = 4 car 3 × 4 = 12.','Le signe ÷ se lit « divisé par ».'],[
 Q('Combien font 12 ÷ 3 ?',['4','9','36','15'],'4','3 × 4 = 12, donc 12 ÷ 3 = 4.'),
 Q('Combien font 20 ÷ 5 ?',['4','15','25','100'],'4','5 × 4 = 20.'),
 Q('On partage 18 bonbons entre 3 enfants. Combien chacun ?',['6','15','21','9'],'6','18 ÷ 3 = 6.'),
 Q('Combien font 15 ÷ 3 ?',['5','12','18','45'],'5','3 × 5 = 15.')]);
C['p3|ma|8']=M(['Les mesures de longueur : le millimètre, le centimètre, le mètre, le kilomètre. 1 m = 100 cm ; 1 km = 1 000 m.','On choisit l’unité selon ce que l’on mesure.'],[
 Q('1 km = … m',['1 000','100','10','10 000'],'1 000','1 km = 1 000 m.'),
 Q('2 m = … cm',['200','20','2 000','22'],'200','2 × 100 = 200 cm.'),
 Q('Quelle unité pour la distance entre deux villes ?',['le kilomètre','le centimètre','le millimètre','le gramme'],'le kilomètre','Pour les grandes distances : le km.'),
 Q('Quelle unité pour la longueur d’un crayon ?',['le centimètre','le kilomètre','le litre','le kilo'],'le centimètre','Le cm convient aux petits objets.')]);
C['p3|ma|9']=M(['Les mesures de masse : le gramme et le kilogramme. 1 kg = 1 000 g.','On pèse avec une balance.'],[
 Q('1 kg = … g',['1 000','100','10','10 000'],'1 000','1 kg = 1 000 g.'),
 Q('3 kg = … g',['3 000','300','30','3'],'3 000','3 × 1 000 = 3 000 g.'),
 Q('Quelle unité pour peser un enfant ?',['le kilogramme','le gramme','le mètre','le litre'],'le kilogramme','On pèse un enfant en kilogrammes.'),
 Q('Qu’est-ce qui est le plus lourd ?',['un sac de riz de 25 kg','un crayon','un cahier','une feuille'],'un sac de riz de 25 kg','25 kg est bien plus lourd.')]);
C['p3|ma|10']=M(['Le carré a 4 côtés égaux. Le rectangle a 4 côtés, égaux deux à deux. Le triangle a 3 côtés. Le cercle est rond.','Les figures ont des sommets (coins) et des côtés.'],[
 Q('Combien de sommets a un rectangle ?',['4','3','5','2'],'4','Un rectangle a 4 sommets.'),
 Q('Quelle figure a 3 côtés ?',['le triangle','le carré','le rectangle','le cercle'],'le triangle','Le triangle a 3 côtés.'),
 Q('Les côtés opposés d’un rectangle sont…',['égaux','différents','courbes','absents'],'égaux','Ils ont la même longueur.'),
 Q('Quelle figure a ses 4 côtés égaux ?',['le carré','le rectangle','le triangle','le cercle'],'le carré','Le carré a 4 côtés égaux.')]);
J3['p3|ma|10']=[TRI('Range chaque figure selon son nombre de côtés.',['3 côtés','4 côtés'],[['triangle','3 côtés'],['carré','4 côtés'],['rectangle','4 côtés'],['triangle équilatéral','3 côtés']])];
C['p3|ma|11']=M(['Le périmètre est la longueur du tour d’une figure : on additionne tous les côtés.','Carré de côté 5 : 5 + 5 + 5 + 5 = 20.'],[
 Q('Quel est le périmètre d’un carré de côté 5 cm ?',['20 cm','10 cm','25 cm','5 cm'],'20 cm','4 × 5 = 20.'),
 Q('Quel est le périmètre d’un rectangle de 6 cm sur 4 cm ?',['20 cm','10 cm','24 cm','16 cm'],'20 cm','6 + 4 + 6 + 4 = 20.'),
 Q('Quel est le périmètre d’un carré de côté 8 cm ?',['32 cm','16 cm','64 cm','24 cm'],'32 cm','4 × 8 = 32.'),
 Q('Le périmètre, c’est…',['la somme des côtés','l’intérieur de la figure','le nombre de sommets','la couleur'],'la somme des côtés','On additionne tous les côtés.')]);
C['p3|ma|12']=M(['Un problème en deux étapes demande deux calculs. On lit, on cherche ce que l’on veut savoir, puis on calcule étape par étape.','Garde bien chaque résultat intermédiaire.'],[
 Q('Maman achète 3 sacs de 5 kg et 2 sacs de 10 kg. Combien de kilos en tout ?',['35 kg','25 kg','50 kg','20 kg'],'35 kg','3 × 5 = 15 ; 2 × 10 = 20 ; 15 + 20 = 35.'),
 Q('Amani a 500 FC. Il achète 2 pains à 100 FC. Combien lui reste-t-il ?',['300 FC','400 FC','200 FC','100 FC'],'300 FC','2 × 100 = 200 ; 500 − 200 = 300.'),
 Q('Une classe a 4 rangs de 6 élèves. 3 élèves sont absents. Combien sont présents ?',['21','24','27','18'],'21','4 × 6 = 24 ; 24 − 3 = 21.'),
 Q('Un seau contient 10 L. On remplit 3 seaux, puis on en verse 5 L. Combien reste-t-il ?',['25 L','30 L','35 L','15 L'],'25 L','3 × 10 = 30 ; 30 − 5 = 25.')]);
C['p3|ma|13']=M(['Révision de l’année : nombres jusqu’à 1 000, additions, soustractions, multiplications, divisions, mesures et périmètres.','Tu es presque prêt pour la 4e primaire !'],[
 Q('Combien font 7 × 4 ?',['28','24','32','11'],'28','7 × 4 = 28.'),
 Q('Combien font 36 ÷ 4 ?',['9','8','10','32'],'9','4 × 9 = 36.'),
 Q('Combien font 645 + 258 ?',['903','893','913','803'],'903','645 + 258 = 903.'),
 Q('Quel est le périmètre d’un carré de côté 7 m ?',['28 m','14 m','49 m','21 m'],'28 m','4 × 7 = 28.')]);

// ---------------- Sciences, histoire-géographie et civisme ----------------
C['p3|sc|0']=M(['Une plante a des racines (sous la terre), une tige, des feuilles, des fleurs et des fruits.','Les racines boivent l’eau, les feuilles respirent et fabriquent la nourriture de la plante.'],[
 Q('Quelle partie de la plante est sous la terre ?',['les racines','les feuilles','les fleurs','les fruits'],'les racines','Les racines sont dans le sol.'),
 Q('À quoi servent les racines ?',['à boire l’eau et tenir la plante','à faire de l’ombre','à chanter','à faire du bruit'],'à boire l’eau et tenir la plante','Elles absorbent l’eau et fixent la plante.'),
 Q('Quelle partie se transforme en fruit ?',['la fleur','la racine','la tige','la feuille'],'la fleur','La fleur donne le fruit.'),
 Q('Quelle partie porte les feuilles ?',['la tige','la racine','le fruit','la graine'],'la tige','La tige porte les feuilles.')]);
J3['p3|sc|0']=[TRI('Sous la terre ou à l’air libre ? Range chaque partie.',['Sous la terre','À l’air libre'],[['racine','Sous la terre'],['feuille','À l’air libre'],['fleur','À l’air libre'],['tige','À l’air libre']])];
C['p3|sc|1']=M(['Certains animaux mangent des plantes : ce sont les herbivores (la vache, l’éléphant). D’autres mangent de la viande : les carnivores (le lion, le crocodile). Les omnivores mangent de tout (l’homme, le singe).','Chaque animal mange selon son corps et son milieu.'],[
 Q('Quel animal est herbivore ?',['la vache','le lion','le crocodile','le léopard'],'la vache','La vache mange de l’herbe.'),
 Q('Quel animal est carnivore ?',['le lion','la chèvre','le zèbre','la girafe'],'le lion','Le lion mange de la viande.'),
 Q('Comment appelle-t-on un animal qui mange de tout ?',['un omnivore','un herbivore','un carnivore','un insecte'],'un omnivore','Omnivore = mange de tout.'),
 Q('Que mange l’éléphant ?',['des plantes','de la viande','du poisson','des cailloux'],'des plantes','L’éléphant est herbivore.')]);
J3['p3|sc|1']=[TRI('Herbivore ou carnivore ? Range chaque animal.',['Herbivore','Carnivore'],[['vache','Herbivore'],['lion','Carnivore'],['éléphant','Herbivore'],['crocodile','Carnivore'],['chèvre','Herbivore'],['léopard','Carnivore']])];
C['p3|sc|2']=M(['L’eau, l’air et le sol sont indispensables à la vie. L’eau peut être liquide, solide (glace) ou gazeuse (vapeur). L’air nous permet de respirer. Le sol peut être sableux, argileux ou riche en humus.','Il faut les protéger.'],[
 Q('Que respire-t-on ?',['l’air','le sable','l’eau','la terre'],'l’air','On respire l’air.'),
 Q('Quel état est la glace ?',['solide','liquide','gazeux','invisible'],'solide','La glace est de l’eau solide.'),
 Q('Qu’est-ce que le sol ?',['la couche de terre où poussent les plantes','le ciel','un nuage','l’eau du fleuve'],'la couche de terre où poussent les plantes','Le sol porte les plantes.'),
 Q('Comment la vapeur d’eau se forme-t-elle ?',['quand l’eau chauffe','quand l’eau gèle','quand on la boit','quand on la salit'],'quand l’eau chauffe','La chaleur transforme l’eau en vapeur.')]);
C['p3|sc|3']=M(['Certaines maladies se préviennent : le paludisme se transmet par les moustiques, donc on dort sous moustiquaire. Les vaccins protègent. Se laver les mains évite beaucoup de maladies.','La prévention, c’est agir avant d’être malade.'],[
 Q('Comment éviter le paludisme ?',['dormir sous une moustiquaire','manger beaucoup','courir','rester au soleil'],'dormir sous une moustiquaire','La moustiquaire protège des moustiques.'),
 Q('À quoi servent les vaccins ?',['à protéger contre des maladies','à faire grandir vite','à calmer la faim','à jouer'],'à protéger contre des maladies','Ils préparent le corps à se défendre.'),
 Q('Quel geste évite les maladies ?',['se laver les mains','jeter ses déchets','jouer dans l’eau sale','boire de l’eau non propre'],'se laver les mains','Se laver les mains élimine les microbes.'),
 Q('Que faire quand on est malade ?',['aller au centre de santé','rester sans soigner','manger tout ce qu’on veut','éviter tout le monde sans raison'],'aller au centre de santé','Il faut consulter un infirmier ou un médecin.')]);
C['p3|sc|4']=M(['Les moyens de transport : sur terre (vélo, bus, train), sur l’eau (pirogue, bateau) et dans les airs (avion).','On choisit selon la distance et le lieu.'],[
 Q('Quel transport circule dans les airs ?',['l’avion','le bus','la pirogue','le vélo'],'l’avion','L’avion vole.'),
 Q('Quel transport circule sur le fleuve ?',['la pirogue','le train','le taxi','la moto'],'la pirogue','La pirogue navigue.'),
 Q('Quel transport roule sur des rails ?',['le train','le bus','l’avion','le bateau'],'le train','Le train roule sur des rails.'),
 Q('Pour aller loin et vite, on prend plutôt…',['l’avion','la marche','la brouette','le vélo'],'l’avion','L’avion est rapide pour les longues distances.')]);
J3['p3|sc|4']=[TRI('Terre, eau ou air ? Range chaque transport.',['Terre','Eau','Air'],[['bus','Terre'],['pirogue','Eau'],['avion','Air'],['train','Terre'],['bateau','Eau'],['hélicoptère','Air']])];
C['p3|sc|5']=M(['Le village et la ville sont différents : en ville, il y a plus de maisons, de routes et de voitures ; au village, il y a plus de champs et de nature.','Chacun a ses habitants, ses métiers et ses besoins.'],[
 Q('Où trouve-t-on plus de champs ?',['au village','au centre de la grande ville','sur l’autoroute','dans le port'],'au village','Les villages sont entourés de champs.'),
 Q('Quelle est la capitale de la RDC ?',['Kinshasa','Goma','Lubumbashi','Matadi'],'Kinshasa','Kinshasa est la capitale.'),
 Q('Que trouve-t-on surtout en ville ?',['des immeubles et des routes','seulement des champs','seulement des forêts','seulement des rivières'],'des immeubles et des routes','La ville est très construite.'),
 Q('Pourquoi des gens quittent-ils parfois le village pour la ville ?',['pour chercher du travail ou étudier','pour dormir','pour rien','pour fuir la pluie seulement'],'pour chercher du travail ou étudier','Beaucoup cherchent des études ou un emploi.')]);
C['p3|sc|6']=M(['La RDC est divisée en 26 provinces. Kinshasa est une province-ville. Lubumbashi est le chef-lieu du Haut-Katanga, Goma celui du Nord-Kivu, Kisangani celui de la Tshopo et Matadi celui du Kongo Central.','Chaque province a ses richesses et sa culture.'],[
 Q('Combien de provinces la RDC compte-t-elle ?',['26','11','15','30'],'26','La RDC compte 26 provinces.'),
 Q('Goma est le chef-lieu de quelle province ?',['le Nord-Kivu','le Haut-Katanga','la Tshopo','le Kongo Central'],'le Nord-Kivu','Goma est dans le Nord-Kivu.'),
 Q('Matadi est le chef-lieu de…',['le Kongo Central','le Nord-Kivu','le Haut-Katanga','la Tshopo'],'le Kongo Central','Matadi est un grand port du Kongo Central.'),
 Q('Kisangani est dans la province de…',['la Tshopo','le Katanga seulement','le Nord-Kivu','Kinshasa'],'la Tshopo','Kisangani est le chef-lieu de la Tshopo.')]);
C['p3|sc|7']=M(['Chaque enfant a des droits : aller à l’école, être soigné, être protégé, jouer, avoir un nom et une nationalité. Il a aussi des devoirs : respecter les autres, aider à la maison, bien travailler.','Les droits et les devoirs vont ensemble.'],[
 Q('Quel est un droit de l’enfant ?',['aller à l’école','travailler toute la journée','être puni sans raison','ne jamais jouer'],'aller à l’école','L’éducation est un droit.'),
 Q('Quel est un devoir de l’enfant ?',['respecter les autres','tout casser','insulter','abandonner l’école'],'respecter les autres','Respecter les autres est un devoir.'),
 Q('Un enfant malade a le droit…',['d’être soigné','d’être ignoré','d’être enfermé','d’être renvoyé'],'d’être soigné','La santé est un droit.'),
 Q('Pourquoi des règles protègent-elles les enfants ?',['pour qu’ils grandissent en sécurité','pour les empêcher de rire','pour rien','pour les faire travailler'],'pour qu’ils grandissent en sécurité','Les droits protègent les enfants.')]);
C['p3|sc|8']=M(['La paix, c’est vivre ensemble sans violence. Pour régler un désaccord, on écoute, on parle calmement, on s’excuse si besoin et on cherche une solution.','Le respect des autres rend la vie agréable.'],[
 Q('Que faire en cas de dispute ?',['en parler calmement','se battre','crier plus fort','partir sans rien dire'],'en parler calmement','Parler calmement aide à trouver une solution.'),
 Q('Que veut dire « respecter » quelqu’un ?',['l’écouter et le traiter avec politesse','se moquer de lui','lui prendre ses affaires','l’ignorer'],'l’écouter et le traiter avec politesse','Respecter, c’est considérer l’autre.'),
 Q('Que dit-on quand on a fait de la peine ?',['pardon','tais-toi','laisse-moi','non'],'pardon','S’excuser répare.'),
 Q('Qu’est-ce que la paix ?',['vivre ensemble sans violence','une fête','un jeu','une saison'],'vivre ensemble sans violence','La paix est l’absence de violence.')]);
C['p3|sc|9']=M(['Protéger l’environnement, c’est garder propre notre milieu : trier les déchets, ne pas couper les arbres sans en planter, économiser l’eau.','Chaque geste compte pour les générations futures.'],[
 Q('Que faire des déchets ?',['les jeter à la poubelle ou les trier','les jeter dans la rivière','les brûler partout','les laisser dans la rue'],'les jeter à la poubelle ou les trier','On garde le milieu propre.'),
 Q('Quel geste protège la forêt ?',['planter des arbres','couper sans replanter','allumer des feux partout','chasser tous les animaux'],'planter des arbres','Planter des arbres aide la forêt.'),
 Q('Comment économiser l’eau ?',['fermer le robinet','laisser couler','laver sans besoin','jeter l’eau propre'],'fermer le robinet','On ferme le robinet quand on n’a pas besoin.'),
 Q('Pourquoi protéger l’environnement ?',['pour que tous puissent vivre bien, aujourd’hui et demain','pour rien','pour embêter','pour jouer'],'pour que tous puissent vivre bien, aujourd’hui et demain','La nature est notre bien commun.')]);
