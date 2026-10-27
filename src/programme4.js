import {Q} from './data.js';

// 4e primaire : 38 missions jouables (français 14, mathématiques 14, sciences-histoire-géographie-civisme 10).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
const COL=(consigne,items,indice,exp)=>({consigne:consigne,items:items.map(i=>[String(i[0]),i[1]]),indice:indice,exp:exp});
export const C4={},J4={},K4={};
const C=C4;

// ---------------- Français ----------------
C['p4|fr|0']=M(['Une phrase peut être affirmative ou négative. La négation entoure le verbe : « ne … pas », « ne … jamais », « ne … plus ».','« Lola ne mange pas de poisson. » est une phrase négative.'],[
 Q('Quelle phrase est négative ?',['Junior ne court pas.','Junior court.','Junior court-il ?','Cours, Junior !'],'Junior ne court pas.','La négation « ne … pas » entoure le verbe.'),
 Q('Quel mot complète « ne … » pour nier ?',['pas','très','aussi','déjà'],'pas','Ne … pas.'),
 Q('Quelle phrase est interrogative ?',['Où vas-tu ?','Je vais au marché.','Va au marché.','Quel beau marché !'],'Où vas-tu ?','Elle pose une question.'),
 Q('Transforme en phrase négative : « Il mange. »',['Il ne mange pas.','Il mange pas.','Il pas mange.','Ne il mange.'],'Il ne mange pas.','On place « ne … pas » autour du verbe.')]);
C['p4|fr|1']=M(['Dans une phrase, le sujet fait l’action, le verbe dit l’action et le complément précise : quoi ? où ? quand ?','« Lola mange une mangue. » : sujet Lola, verbe mange, complément une mangue.'],[
 Q('Dans « Lola mange une mangue », quel est le complément ?',['une mangue','Lola','mange','la'],'une mangue','Que mange Lola ? Une mangue.'),
 Q('Dans « Les enfants jouent dans la cour », quel groupe dit où ?',['dans la cour','Les enfants','jouent','Les'],'dans la cour','« dans la cour » donne le lieu.'),
 Q('Quelle question aide à trouver le complément d’objet ?',['quoi ? / qui ?','où ?','combien ?','comment ?'],'quoi ? / qui ?','On pose « quoi ? » après le verbe.'),
 Q('Dans « Papa lit le journal », quel est le sujet ?',['Papa','lit','le journal','journal'],'Papa','Qui est-ce qui lit ? Papa.')]);
C['p4|fr|2']=M(['Les déterminants se placent devant le nom : articles (le, un), possessifs (mon, ton, son), démonstratifs (ce, cette), numéraux (deux, trois).','Ils s’accordent avec le nom.'],[
 Q('Quel mot est un déterminant possessif ?',['mon','ce','le','trois'],'mon','« mon » indique à qui appartient quelque chose.'),
 Q('Complète : « ... fille est contente. » (celle que je montre)',['Cette','Ce','Cet','Ces'],'Cette','Fille est féminin singulier : cette.'),
 Q('Complète : « J’ai ... amis. » (3)',['trois','le','ma','ce'],'trois','« trois » est un déterminant numéral.'),
 Q('Où place-t-on le déterminant ?',['devant le nom','après le nom','à la fin','sans règle'],'devant le nom','Le déterminant précède le nom.')]);
C['p4|fr|3']=M(['L’adjectif qualificatif décrit le nom et s’accorde avec lui en genre et en nombre : un grand arbre, une grande maison, de grands arbres.','Il peut se placer avant ou après le nom.'],[
 Q('Complète : « une petite fille (joli) … »',['jolie','joli','jolis','jolies'],'jolie','Fille est féminin singulier : jolie.'),
 Q('Complète : « des enfants (heureux) … »',['heureux','heureuse','heureuses','heureu'],'heureux','Enfants est masculin pluriel : heureux.'),
 Q('Quel mot est un adjectif qualificatif ?',['rapide','courir','demain','chez'],'rapide','« rapide » décrit.'),
 Q('Que fait l’adjectif qualificatif ?',['il décrit le nom','il remplace le verbe','il relie deux phrases','il compte'],'il décrit le nom','Il apporte une précision sur le nom.')]);
K4['p4|fr|3']=[COL('Attrape tous les adjectifs qualificatifs !',[['rapide',1],['maison',0],['sucré',1],['courir',0],['grand',1],['hier',0],['lourd',1]],'Un adjectif décrit comment est quelqu’un ou quelque chose.','Bravo ! Rapide, sucré, grand, lourd décrivent.')];
C['p4|fr|4']=M(['Il y a trois groupes de verbes : le 1er groupe (chanter : je chante), le 2e groupe (finir : je finis) et le 3e groupe (aller, faire, prendre…).','Les verbes être et avoir sont très importants : je suis, j’ai.'],[
 Q('Complète : « Je (finir) … mon travail. »',['finis','finit','finissent','finir'],'finis','Je finis.'),
 Q('Complète : « Nous (aller) … au marché. »',['allons','allez','vont','vais'],'allons','Nous allons.'),
 Q('Complète : « Vous (avoir) … faim. »',['avez','avons','ont','as'],'avez','Vous avez.'),
 Q('Complète : « Elles (faire) … le ménage. »',['font','fait','faisons','faites'],'font','Elles font.')]);
C['p4|fr|5']=M(['Le passé composé raconte une action finie. Il se forme avec avoir ou être au présent + le participe passé : j’ai mangé, elle est partie.','Les verbes de mouvement comme aller, venir, partir se conjuguent avec être.'],[
 Q('Complète : « Hier, j’(manger) … du riz. »',['ai mangé','suis mangé','mange','mangerai'],'ai mangé','Passé composé : j’ai mangé.'),
 Q('Complète : « Elle (partir) … ce matin. »',['est partie','a parti','part','partira'],'est partie','Partir se conjugue avec être : elle est partie.'),
 Q('Quel auxiliaire utilise-t-on avec « chanter » ?',['avoir','être','aller','faire'],'avoir','J’ai chanté.'),
 Q('Quel est le participe passé de « finir » ?',['fini','finit','finissant','finira'],'fini','J’ai fini.')]);
C['p4|fr|6']=M(['Le futur simple raconte ce qui arrivera : je mangerai, tu finiras, il ira, nous ferons.','Les terminaisons sont : -rai, -ras, -ra, -rons, -rez, -ront.'],[
 Q('Complète : « Demain, je (manger) … à la maison. »',['mangerai','mange','ai mangé','mangeais'],'mangerai','Futur : je mangerai.'),
 Q('Complète : « Tu (finir) … bientôt. »',['finiras','finis','as fini','finissais'],'finiras','Futur : tu finiras.'),
 Q('Complète : « Nous (aller) … au fleuve. »',['irons','allons','sommes allés','allions'],'irons','Futur : nous irons.'),
 Q('Quel mot annonce souvent le futur ?',['demain','hier','autrefois','avant-hier'],'demain','« Demain » annonce le futur.')]);
C['p4|fr|7']=M(['Dans une phrase, tout s’accorde : le verbe avec son sujet, l’adjectif avec son nom.','« Les petites filles jouent » : petites (féminin pluriel), jouent (3e personne du pluriel).'],[
 Q('Complète : « Les garçons (courir) … vite. »',['courent','court','courons','courez'],'courent','Sujet pluriel : courent.'),
 Q('Complète : « La mangue est (mûr) … »',['mûre','mûr','mûrs','mûres'],'mûre','Mangue est féminin : mûre.'),
 Q('Complète : « Mes amis (arriver) … demain. »',['arriveront','arrivera','arrive','arrivons'],'arriveront','Sujet pluriel au futur : arriveront.'),
 Q('Quel groupe est correct ?',['des fleurs rouges','des fleur rouge','un fleurs rouges','une fleurs rouge'],'des fleurs rouges','Fleurs rouges : féminin pluriel.')]);
C['p4|fr|8']=M(['Pour comprendre un récit, on cherche : qui ? où ? quand ? quel problème ? quelle fin ?','Récit : « Un matin, Kito aide une vieille dame à porter son panier jusqu’au marché. Pour le remercier, elle lui offre une mangue. »'],[
 Q('Qui aide la vieille dame ?',['Kito','le pêcheur','le maître','Lola'],'Kito','Kito aide la dame.'),
 Q('Que porte la dame ?',['un panier','un livre','un seau','un sac de riz'],'un panier','Elle porte un panier.'),
 Q('Où va-t-elle ?',['au marché','à l’école','au fleuve','à la gare'],'au marché','Jusqu’au marché.'),
 Q('Comment la dame remercie-t-elle Kito ?',['elle lui offre une mangue','elle lui donne de l’argent','elle l’invite à dîner','elle ne dit rien'],'elle lui offre une mangue','Elle lui offre une mangue.')]);
C['p4|fr|9']=M(['Résumer un texte, c’est le raconter en peu de mots : on garde l’essentiel et on enlève les détails.','Un bon résumé répond à qui ? quoi ? où ? quand ? pourquoi ?'],[
 Q('Que garde-t-on dans un résumé ?',['l’essentiel','tous les détails','seulement les dialogues','seulement le titre'],'l’essentiel','On garde les idées principales.'),
 Q('Un résumé est…',['plus court que le texte','plus long que le texte','identique au texte','sans phrase'],'plus court que le texte','Il est plus court.'),
 Q('Que supprime-t-on dans un résumé ?',['les détails inutiles','les personnages principaux','les événements importants','le sens'],'les détails inutiles','On enlève les détails.'),
 Q('Quelle question aide à repérer l’essentiel ?',['Qui fait quoi, et pourquoi ?','Quelle est la couleur du stylo ?','Combien de lignes ?','Quel jour est-ce ?'],'Qui fait quoi, et pourquoi ?','Elle fait ressortir l’essentiel.')]);
C['p4|fr|10']=M(['Décrire une personne : son apparence (grand, mince, cheveux courts), son caractère (gentil, courageux) et ce qu’elle fait.','On utilise des adjectifs précis.'],[
 Q('Quel mot décrit le caractère ?',['courageux','grand','mince','brun'],'courageux','« courageux » décrit le caractère.'),
 Q('Quel mot décrit l’apparence ?',['grand','gentil','honnête','patient'],'grand','« grand » décrit le corps.'),
 Q('Dans un portrait, on décrit…',['l’apparence et le caractère','seulement le nom','seulement l’âge','seulement le métier'],'l’apparence et le caractère','Un portrait montre l’extérieur et l’intérieur.'),
 Q('Quel est le contraire de « courageux » ?',['peureux','fort','joyeux','grand'],'peureux','Courageux ≠ peureux.')]);
C['p4|fr|11']=M(['Pour raconter une histoire à partir d’images, on décrit chaque image dans l’ordre, avec des mots de liaison : d’abord, ensuite, puis, enfin.','Image 1 : Kito plante un arbre. Image 2 : il l’arrose. Image 3 : l’arbre a grandi.'],[
 Q('Que fait Kito sur la première image ?',['il plante un arbre','il arrose l’arbre','il mange un fruit','il dort'],'il plante un arbre','D’abord il plante.'),
 Q('Quel mot relie bien la 1re et la 2e image ?',['ensuite','jamais','hier','non'],'ensuite','« Ensuite » enchaîne.'),
 Q('Que montre la dernière image ?',['l’arbre qui a grandi','Kito qui plante','Kito qui arrose','un fleuve'],'l’arbre qui a grandi','C’est la fin de l’histoire.'),
 Q('Pourquoi Kito arrose-t-il l’arbre ?',['pour qu’il grandisse','pour s’amuser','pour le déplacer','pour le couper'],'pour qu’il grandisse','Un arbre a besoin d’eau.')]);
C['p4|fr|12']=M(['Une lettre administrative demande ou informe : lieu et date, destinataire, objet (« Objet : demande d’inscription »), texte poli et formule finale (« Veuillez agréer, Monsieur le Directeur, mes salutations respectueuses »).','On vouvoie la personne.'],[
 Q('Que précise l’objet d’une lettre ?',['le sujet de la lettre','la date','la signature','le nom du facteur'],'le sujet de la lettre','L’objet dit pourquoi on écrit.'),
 Q('Comment s’adresse-t-on au directeur ?',['en le vouvoyant','en le tutoyant','par un surnom','sans formule'],'en le vouvoyant','On vouvoie dans une lettre administrative.'),
 Q('Par quoi finit une lettre administrative ?',['une formule de politesse et la signature','un dessin','un proverbe','rien'],'une formule de politesse et la signature','Formule finale puis signature.'),
 Q('Où met-on le lieu et la date ?',['en haut à droite','en bas','au milieu du texte','nulle part'],'en haut à droite','Par exemple : Kinshasa, le 3 mai.')]);
C['p4|fr|13']=M(['Un petit article d’école a un titre accrocheur et répond aux questions : qui ? quoi ? où ? quand ? pourquoi ?','On informe les lecteurs de façon claire et courte.'],[
 Q('À quoi sert le titre ?',['à donner envie de lire','à terminer l’article','à remplacer le texte','à dessiner'],'à donner envie de lire','Le titre attire le lecteur.'),
 Q('Quelles questions un article doit-il éclairer ?',['qui, quoi, où, quand, pourquoi','combien de lettres','quelle couleur','quel prix'],'qui, quoi, où, quand, pourquoi','Ce sont les questions essentielles.'),
 Q('Un article est écrit…',['pour informer','pour faire peur','pour cacher','pour rien'],'pour informer','Il informe.'),
 Q('Quel style est préférable ?',['clair et court','long et confus','sans ponctuation','sans phrase'],'clair et court','On écrit simplement.')]);

// ---------------- Mathématiques ----------------
C['p4|ma|0']=M(['Jusqu’à 10 000 : on ajoute les milliers. 3 482 = 3 milliers, 4 centaines, 8 dizaines, 2 unités.','1 000 + 1 000 = 2 000.'],[
 Q('Combien y a-t-il de milliers dans 3 482 ?',['3','4','8','2'],'3','Le chiffre des milliers est 3.'),
 Q('Quel nombre vient après 4 999 ?',['5 000','4 990','5 999','4 998'],'5 000','4 999 + 1 = 5 000.'),
 Q('7 milliers + 2 centaines + 5 unités, quel nombre ?',['7 205','7 250','2 705','7 025'],'7 205','7 000 + 200 + 5 = 7 205.'),
 Q('Quel est le plus grand nombre : 8 120, 8 021, 8 210 ?',['8 210','8 120','8 021','tous égaux'],'8 210','On compare les centaines.')]);
C['p4|ma|1']=M(['On additionne et on soustrait en colonnes, en gardant bien les chiffres alignés.','3 456 + 2 345 = 5 801.'],[
 Q('Combien font 3 456 + 2 345 ?',['5 801','5 701','5 811','4 801'],'5 801','3 456 + 2 345 = 5 801.'),
 Q('Combien font 7 000 − 2 500 ?',['4 500','5 500','4 000','5 000'],'4 500','7 000 − 2 500 = 4 500.'),
 Q('Combien font 1 250 + 750 ?',['2 000','1 900','2 100','1 000'],'2 000','1 250 + 750 = 2 000.'),
 Q('Combien font 9 000 − 1 001 ?',['7 999','8 001','7 099','8 999'],'7 999','9 000 − 1 001 = 7 999.')]);
C['p4|ma|2']=M(['Les tables de multiplication de 1 à 10 sont à connaître par cœur : 6 × 7 = 42, 8 × 9 = 72, 7 × 7 = 49, 9 × 6 = 54.','On utilise aussi la commutativité : 6 × 7 = 7 × 6.'],[
 Q('Combien font 6 × 7 ?',['42','36','48','49'],'42','6 × 7 = 42.'),
 Q('Combien font 8 × 9 ?',['72','63','81','64'],'72','8 × 9 = 72.'),
 Q('Combien font 7 × 7 ?',['49','42','56','47'],'49','7 × 7 = 49.'),
 Q('Combien font 9 × 6 ?',['54','48','63','56'],'54','9 × 6 = 54.')]);
C['p4|ma|3']=M(['Multiplier par un nombre à deux chiffres : on décompose. 23 × 10 = 230 ; 25 × 4 = 100 ; 13 × 12 = 13 × 10 + 13 × 2 = 156.','Multiplier par 10, c’est ajouter un zéro.'],[
 Q('Combien font 23 × 10 ?',['230','203','2 300','33'],'230','On ajoute un zéro : 230.'),
 Q('Combien font 25 × 4 ?',['100','90','29','200'],'100','25 × 4 = 100.'),
 Q('Combien font 13 × 12 ?',['156','146','136','166'],'156','130 + 26 = 156.'),
 Q('Combien font 15 × 20 ?',['300','150','35','3 000'],'300','15 × 2 = 30, puis ajouter un zéro : 300.')]);
C['p4|ma|4']=M(['Quand le partage ne tombe pas juste, il reste un reste : 17 ÷ 5 = 3 reste 2, car 5 × 3 + 2 = 17.','Le reste est toujours plus petit que le diviseur.'],[
 Q('17 ÷ 5 = ?',['3 reste 2','4 reste 1','3 reste 5','2 reste 3'],'3 reste 2','5 × 3 = 15 et 17 − 15 = 2.'),
 Q('25 ÷ 4 = ?',['6 reste 1','5 reste 5','7 reste 3','6 reste 4'],'6 reste 1','4 × 6 = 24, reste 1.'),
 Q('20 ÷ 6 = ?',['3 reste 2','4 reste 1','3 reste 4','2 reste 8'],'3 reste 2','6 × 3 = 18, reste 2.'),
 Q('Le reste d’une division par 5 peut être…',['3','7','10','12'],'3','Le reste est plus petit que 5.')]);
C['p4|ma|5']=M(['Un multiple de 3 est un nombre de la table de 3 : 3, 6, 9, 12… Un diviseur de 12 est un nombre qui le divise exactement : 1, 2, 3, 4, 6, 12.','Les multiples de 5 finissent par 0 ou 5.'],[
 Q('Quel nombre est un multiple de 3 ?',['21','22','25','28'],'21','3 × 7 = 21.'),
 Q('5 est un diviseur de…',['20','23','27','31'],'20','20 ÷ 5 = 4.'),
 Q('Quel nombre est un multiple de 5 ?',['35','36','37','38'],'35','35 finit par 5.'),
 Q('Combien 12 a-t-il de diviseurs ?',['6','4','3','12'],'6','1, 2, 3, 4, 6 et 12.')]);
K4['p4|ma|5']=[COL('Attrape les multiples de 4 !',[[8,1],[10,0],[12,1],[14,0],[16,1],[18,0],[20,1],[21,0]],'Les multiples de 4 : 4, 8, 12, 16, 20…','Bravo ! 8, 12, 16 et 20.')];
C['p4|ma|6']=M(['Une fraction partage un tout en parts égales : 1/2 (un demi), 1/4 (un quart), 3/4 (trois quarts).','Le nombre du bas dit en combien de parts on coupe, le nombre du haut combien on en prend.'],[
 Q('Une pizza est coupée en 4 parts égales. On en mange 1. Quelle fraction ?',['1/4','1/2','4/1','3/4'],'1/4','Une part sur quatre.'),
 Q('La moitié s’écrit…',['1/2','1/4','2/1','1/3'],'1/2','La moitié est 1/2.'),
 Q('Quelle fraction est la plus grande ?',['3/4','1/4','1/2','1/8'],'3/4','3/4 > 1/2 > 1/4 > 1/8.'),
 Q('Combien font 2/4 ?',['1/2','1/4','3/4','1'],'1/2','2 quarts valent 1 demi.')]);
C['p4|ma|7']=M(['Les unités de mesure : longueur (m), masse (kg), capacité (L), temps (h, min). 1 L = 1 000 mL ; 1 h = 60 min.','On choisit toujours la bonne unité.'],[
 Q('1 h = … minutes',['60','100','30','24'],'60','Une heure = 60 minutes.'),
 Q('Quelle unité pour mesurer l’eau d’un seau ?',['le litre','le mètre','le kilogramme','l’heure'],'le litre','Le litre mesure la capacité.'),
 Q('1 L = … mL',['1 000','100','10','10 000'],'1 000','1 L = 1 000 mL.'),
 Q('Quelle unité pour la durée d’un trajet ?',['l’heure','le litre','le gramme','le mètre'],'l’heure','L’heure mesure le temps.')]);
C['p4|ma|8']=M(['Convertir, c’est changer d’unité : 2 km = 2 000 m ; 5 kg = 5 000 g ; 90 min = 1 h 30 min.','On multiplie par 1 000 pour passer de km à m ou de kg à g.'],[
 Q('2 km = … m',['2 000','200','20','20 000'],'2 000','2 × 1 000.'),
 Q('5 kg = … g',['5 000','500','50','5'],'5 000','5 × 1 000.'),
 Q('90 minutes = …',['1 h 30','1 h 90','2 h','9 h'],'1 h 30','60 + 30 minutes.'),
 Q('3 L = … mL',['3 000','300','30','3'],'3 000','3 × 1 000.')]);
C['p4|ma|9']=M(['Périmètre d’une figure = somme de ses côtés. Triangle de côtés 3, 4 et 5 : 3 + 4 + 5 = 12.','Pour un rectangle : 2 × (longueur + largeur).'],[
 Q('Périmètre d’un triangle de côtés 3, 4 et 5 cm ?',['12 cm','10 cm','15 cm','60 cm'],'12 cm','3 + 4 + 5 = 12.'),
 Q('Périmètre d’un rectangle de 8 cm sur 3 cm ?',['22 cm','11 cm','24 cm','16 cm'],'22 cm','2 × (8 + 3) = 22.'),
 Q('Périmètre d’un carré de côté 6 m ?',['24 m','12 m','36 m','18 m'],'24 m','4 × 6 = 24.'),
 Q('Que mesure le périmètre ?',['le tour d’une figure','l’intérieur','la hauteur seulement','le poids'],'le tour d’une figure','Le périmètre est la longueur du contour.')]);
C['p4|ma|10']=M(['L’aire mesure la surface à l’intérieur d’une figure, en cm² ou m². Carré : côté × côté. Rectangle : longueur × largeur.','Carré de côté 5 cm : 5 × 5 = 25 cm².'],[
 Q('Aire d’un carré de côté 5 cm ?',['25 cm²','20 cm²','10 cm²','55 cm²'],'25 cm²','5 × 5 = 25.'),
 Q('Aire d’un rectangle de 6 cm sur 4 cm ?',['24 cm²','20 cm²','10 cm²','48 cm²'],'24 cm²','6 × 4 = 24.'),
 Q('Aire d’un carré de côté 9 m ?',['81 m²','36 m²','18 m²','90 m²'],'81 m²','9 × 9 = 81.'),
 Q('En quelle unité exprime-t-on une aire ?',['en cm²','en cm','en kg','en L'],'en cm²','Une aire s’exprime en unités carrées.')]);
C['p4|ma|11']=M(['Un angle droit mesure 90°, comme le coin d’une feuille. Un angle aigu est plus petit qu’un angle droit, un angle obtus est plus grand.','Un angle plat mesure 180°.'],[
 Q('Combien mesure un angle droit ?',['90°','45°','180°','60°'],'90°','Un angle droit : 90°.'),
 Q('Un angle plus petit que 90° est…',['aigu','obtus','plat','droit'],'aigu','Aigu < 90°.'),
 Q('Un angle plus grand que 90° (mais plus petit que 180°) est…',['obtus','aigu','droit','nul'],'obtus','Obtus : entre 90° et 180°.'),
 Q('Quelle figure a quatre angles droits ?',['le rectangle','le triangle','le cercle','le losange quelconque'],'le rectangle','Le rectangle a 4 angles droits.')]);
J4['p4|ma|11']=[TRI('Aigu, droit ou obtus ? Range chaque angle.',['Aigu','Droit','Obtus'],[['30°','Aigu'],['90°','Droit'],['120°','Obtus'],['45°','Aigu'],['150°','Obtus'],['coin d’une feuille','Droit']])];
C['p4|ma|12']=M(['Un problème complexe demande plusieurs étapes. On range les données, on choisit les opérations et on vérifie que le résultat est possible.','Écris toujours une phrase réponse.'],[
 Q('Un marchand a 120 mangues. Il en vend 45 le matin et 38 l’après-midi. Combien lui reste-t-il ?',['37','83','165','77'],'37','45 + 38 = 83 ; 120 − 83 = 37.'),
 Q('Un cahier coûte 400 FC. Combien coûtent 6 cahiers ?',['2 400 FC','2 000 FC','1 600 FC','4 600 FC'],'2 400 FC','6 × 400 = 2 400.'),
 Q('Un terrain rectangulaire mesure 12 m sur 8 m. Quelle est son aire ?',['96 m²','40 m²','20 m²','80 m²'],'96 m²','12 × 8 = 96.'),
 Q('On partage 85 billes entre 5 enfants. Combien chacun ?',['17','15','18','20'],'17','85 ÷ 5 = 17.')]);
C['p4|ma|13']=M(['Révision de l’année : grands nombres, multiplications, divisions, fractions, mesures, périmètre, aire et angles.','Tu es presque prêt pour la 5e primaire !'],[
 Q('Combien font 8 × 7 ?',['56','54','48','64'],'56','8 × 7 = 56.'),
 Q('Combien font 5 400 + 2 700 ?',['8 100','7 100','8 000','7 700'],'8 100','5 400 + 2 700 = 8 100.'),
 Q('Aire d’un carré de côté 7 cm ?',['49 cm²','28 cm²','14 cm²','56 cm²'],'49 cm²','7 × 7 = 49.'),
 Q('Quelle fraction représente la moitié ?',['1/2','1/4','2/1','1/3'],'1/2','La moitié : 1/2.')]);

// ---------------- Sciences, histoire-géographie et civisme ----------------
C['p4|sc|0']=M(['Le corps humain a des organes : le cœur pompe le sang, les poumons permettent de respirer, l’estomac digère, le cerveau commande le corps.','Pour rester en bonne santé : bien manger, bouger, dormir, se laver.'],[
 Q('Quel organe pompe le sang ?',['le cœur','les poumons','l’estomac','le cerveau'],'le cœur','Le cœur pompe le sang dans tout le corps.'),
 Q('Quels organes servent à respirer ?',['les poumons','les reins','le foie','les yeux'],'les poumons','Les poumons font entrer l’air.'),
 Q('Quel organe commande le corps ?',['le cerveau','l’estomac','le cœur','les os'],'le cerveau','Le cerveau dirige le corps.'),
 Q('Où se fait la digestion ?',['dans l’estomac et l’intestin','dans les poumons','dans le cerveau','dans le cœur'],'dans l’estomac et l’intestin','La digestion transforme les aliments.')]);
J4['p4|sc|0']=[TRI('À quoi sert chaque organe ? Range-le.',['Respirer','Faire circuler le sang'],[['poumons','Respirer'],['cœur','Faire circuler le sang'],['trachée','Respirer'],['vaisseaux','Faire circuler le sang']])];
C['p4|sc|1']=M(['Un écosystème est un milieu avec ses êtres vivants et leurs relations : les plantes fabriquent leur nourriture, les herbivores mangent les plantes, les carnivores mangent d’autres animaux.','Une chaîne alimentaire : herbe → zèbre → lion.'],[
 Q('Dans « herbe → zèbre → lion », qui est le producteur ?',['l’herbe','le zèbre','le lion','l’eau'],'l’herbe','Les plantes fabriquent la matière vivante.'),
 Q('Qui mange l’herbe ?',['le zèbre','le lion','le vautour','le serpent'],'le zèbre','Le zèbre est herbivore.'),
 Q('Que représente la flèche → ?',['« est mangé par »','« plus grand que »','« est ami de »','« dort avec »'],'« est mangé par »','L’herbe est mangée par le zèbre.'),
 Q('Que se passe-t-il si on supprime tous les herbivores ?',['les carnivores manquent de nourriture','rien ne change','les plantes disparaissent aussitôt','l’eau disparaît'],'les carnivores manquent de nourriture','Tout est lié dans un écosystème.')]);
C['p4|sc|2']=M(['Le cycle de l’eau : le soleil chauffe l’eau, qui s’évapore ; la vapeur monte et forme des nuages (condensation) ; l’eau retombe en pluie (précipitations) puis retourne aux rivières et à la mer.','L’eau tourne ainsi en cercle.'],[
 Q('Comment s’appelle le passage de l’eau liquide à la vapeur ?',['l’évaporation','la condensation','la précipitation','la congélation'],'l’évaporation','L’eau chauffée s’évapore.'),
 Q('Comment se forment les nuages ?',['par condensation de la vapeur','par le vent seulement','par des feux','par des volcans'],'par condensation de la vapeur','La vapeur refroidit et forme des gouttelettes.'),
 Q('Que sont les précipitations ?',['la pluie, la grêle, la neige','les nuages','la vapeur','le vent'],'la pluie, la grêle, la neige','Ce sont les eaux qui tombent.'),
 Q('Qui chauffe l’eau ?',['le soleil','la lune','le vent','la nuit'],'le soleil','La chaleur du soleil fait s’évaporer l’eau.')]);
C['p4|sc|3']=M(['Les énergies servent à s’éclairer, se chauffer, cuisiner, se déplacer. Il y a des énergies renouvelables (soleil, vent, eau) et non renouvelables (pétrole, charbon).','Le barrage d’Inga produit de l’électricité grâce à l’eau.'],[
 Q('Quelle énergie vient du soleil ?',['l’énergie solaire','le charbon','le pétrole','le gaz'],'l’énergie solaire','Les panneaux solaires captent le soleil.'),
 Q('Quelle énergie est renouvelable ?',['le vent','le pétrole','le charbon','le gaz'],'le vent','Le vent se renouvelle sans cesse.'),
 Q('Que produit un barrage hydroélectrique ?',['de l’électricité','du pétrole','du bois','du pain'],'de l’électricité','L’eau fait tourner des turbines.'),
 Q('Pourquoi économiser l’énergie ?',['pour ne pas la gaspiller','pour rien','pour casser les appareils','pour jouer'],'pour ne pas la gaspiller','Économiser protège les ressources.')]);
J4['p4|sc|3']=[TRI('Renouvelable ou non renouvelable ? Range chaque énergie.',['Renouvelable','Non renouvelable'],[['soleil','Renouvelable'],['pétrole','Non renouvelable'],['vent','Renouvelable'],['charbon','Non renouvelable'],['eau','Renouvelable'],['gaz','Non renouvelable']])];
C['p4|sc|4']=M(['Communiquer, c’est échanger des messages : la parole, le courrier, le téléphone, la radio, la télévision, Internet.','Les moyens de communication ont évolué : le tam-tam, puis la lettre, le téléphone, Internet.'],[
 Q('Quel moyen permet de parler à quelqu’un très loin ?',['le téléphone','le cahier','la craie','le balai'],'le téléphone','Le téléphone relie à distance.'),
 Q('Quel moyen diffuse des informations par le son ?',['la radio','le livre','la lettre','le journal'],'la radio','La radio diffuse des sons.'),
 Q('Quel moyen fait voir et entendre des images ?',['la télévision','la radio','la lettre','l’affiche'],'la télévision','La télévision montre images et sons.'),
 Q('Que faut-il pour envoyer un courrier ?',['une adresse et un timbre','une radio','une antenne','un haut-parleur'],'une adresse et un timbre','Le courrier a besoin d’une adresse.')]);
C['p4|sc|5']=M(['Avant la colonisation, de grands royaumes existaient sur le territoire de la RDC : Kongo, Luba, Lunda, Kuba. En 1885, le roi belge Léopold II reçoit le Congo ; en 1908 il devient colonie belge ; le 30 juin 1960, il devient indépendant.','Patrice Lumumba fut le premier Premier ministre.'],[
 Q('Quel royaume existait sur le territoire de la RDC ?',['le royaume Kongo','le royaume de France','l’empire romain','le royaume du Japon'],'le royaume Kongo','Le royaume Kongo était puissant.'),
 Q('En quelle année la RDC est-elle devenue indépendante ?',['1960','1885','1908','2000'],'1960','Le 30 juin 1960.'),
 Q('Qui fut le premier Premier ministre ?',['Patrice Lumumba','Mobutu','Léopold II','Joseph Kabila'],'Patrice Lumumba','Patrice Lumumba, en 1960.'),
 Q('De quel pays le Congo est-il devenu indépendant ?',['de la Belgique','de la France','de l’Angleterre','du Portugal'],'de la Belgique','Le Congo était colonie belge.')]);
C['p4|sc|6']=M(['La RDC est le deuxième plus grand pays d’Afrique. Elle est traversée par le fleuve Congo et couverte en grande partie par la forêt équatoriale. Sa capitale est Kinshasa et elle a 9 pays voisins.','Elle ouvre sur l’océan Atlantique par une petite côte.'],[
 Q('Quel grand fleuve traverse la RDC ?',['le fleuve Congo','le Nil','le Niger','le Zambèze'],'le fleuve Congo','Le fleuve Congo est immense.'),
 Q('Quelle est la capitale de la RDC ?',['Kinshasa','Lubumbashi','Goma','Kisangani'],'Kinshasa','La capitale est Kinshasa.'),
 Q('Combien de pays voisins la RDC a-t-elle ?',['9','5','3','12'],'9','La RDC a 9 voisins.'),
 Q('Quel océan touche la RDC ?',['l’océan Atlantique','l’océan Indien','l’océan Pacifique','l’océan Arctique'],'l’océan Atlantique','Une petite côte donne sur l’Atlantique.')]);
C['p4|sc|7']=M(['La RDC possède de grandes richesses naturelles : le cuivre et le cobalt (Katanga), le diamant (Kasaï), l’or, le bois de la forêt, l’eau et le potentiel hydroélectrique.','Il faut les gérer avec sagesse pour tous.'],[
 Q('Quel métal est très présent au Katanga ?',['le cuivre','le fer-blanc seulement','l’argent','le sodium'],'le cuivre','Le Katanga est riche en cuivre et en cobalt.'),
 Q('D’où vient surtout le diamant en RDC ?',['du Kasaï','du Kongo Central','du Nord-Kivu','de la ville de Matadi'],'du Kasaï','Le Kasaï est une région diamantifère.'),
 Q('Que produit la forêt équatoriale ?',['du bois','du cuivre','du pétrole','du sel'],'du bois','La forêt fournit du bois.'),
 Q('Pourquoi bien gérer les richesses ?',['pour qu’elles profitent à tous','pour les gaspiller','pour les cacher','pour rien'],'pour qu’elles profitent à tous','Les richesses sont un bien commun.')]);
J4['p4|sc|7']=[TRI('Mine ou forêt ? Range chaque ressource.',['Mine','Forêt'],[['cuivre','Mine'],['bois','Forêt'],['cobalt','Mine'],['plantes médicinales','Forêt'],['diamant','Mine'],['fruits sauvages','Forêt']])];
C['p4|sc|8']=M(['Dans une démocratie, les citoyens choisissent leurs dirigeants en votant. En RDC, on peut voter à partir de 18 ans. La Constitution est la loi la plus importante : elle protège les droits de tous.','Chacun doit respecter les règles de vie commune.'],[
 Q('À partir de quel âge peut-on voter en RDC ?',['18 ans','12 ans','16 ans','25 ans'],'18 ans','Le droit de vote commence à 18 ans.'),
 Q('Qu’est-ce que la Constitution ?',['la loi la plus importante du pays','un livre de recettes','un journal','un jeu'],'la loi la plus importante du pays','Elle organise le pays et protège les droits.'),
 Q('Que fait-on pendant des élections ?',['on choisit des représentants','on casse tout','on part en voyage','on ferme l’école'],'on choisit des représentants','Les citoyens votent.'),
 Q('Dans une démocratie, le pouvoir vient…',['du peuple','d’un seul homme sans élection','des armes','du hasard'],'du peuple','Le peuple choisit.')]);
C['p4|sc|9']=M(['Protéger l’environnement : lutter contre la déforestation, trier les déchets, ne pas polluer l’eau, replanter des arbres.','Les forêts du Congo sont un poumon pour toute la planète.'],[
 Q('Pourquoi la forêt est-elle importante ?',['elle produit de l’oxygène et abrite des animaux','elle est inutile','elle gêne les routes','elle pollue'],'elle produit de l’oxygène et abrite des animaux','La forêt est un trésor.'),
 Q('Que veut dire « déforestation » ?',['couper trop d’arbres','planter des arbres','arroser des plantes','nettoyer la rivière'],'couper trop d’arbres','C’est la destruction des forêts.'),
 Q('Quel geste aide la nature ?',['trier ses déchets','jeter du plastique dans l’eau','brûler le plastique','couper sans replanter'],'trier ses déchets','Trier permet de recycler.'),
 Q('Que faire pour remplacer un arbre coupé ?',['en planter un autre','l’oublier','en couper un deuxième','le brûler'],'en planter un autre','Reboiser compense les arbres coupés.')]);
