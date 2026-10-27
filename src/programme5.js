import {Q} from './data.js';

// 5e primaire : 42 missions jouables (français 15, mathématiques 15, sciences-histoire-géographie-civisme 12).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
const COL=(consigne,items,indice,exp)=>({consigne:consigne,items:items.map(i=>[String(i[0]),i[1]]),indice:indice,exp:exp});
const ORDRE=(consigne,mots,rep,indice)=>({t:'ordre',consigne:consigne,mots:mots,rep:rep,indice:indice});
export const C5={},J5={},K5={};
const C=C5;

// ---------------- Français ----------------
C['p5|fr|0']=M(['Chaque mot a une classe grammaticale : nom, verbe, adjectif, article, pronom, adverbe, préposition, conjonction.','Reconnaître la classe d’un mot aide à bien écrire la phrase.'],[
 Q('Quel mot est un adverbe ?',['vite','maison','grand','le'],'vite','L’adverbe précise le verbe : il court vite.'),
 Q('Quel mot est une préposition ?',['dans','manger','joli','nous'],'dans','« dans » est une préposition de lieu.'),
 Q('Quel mot est une conjonction de coordination ?',['mais','table','beau','souvent'],'mais','« mais » relie deux idées.'),
 Q('Quel mot est un pronom ?',['elle','chat','rouge','chanter'],'elle','« elle » remplace un nom.')]);
K5['p5|fr|0']=[COL('Attrape tous les verbes !',[['chanter',1],['maison',0],['finir',1],['joli',0],['prendre',1],['vite',0],['aller',1]],'Un verbe dit ce que l’on fait ou ce que l’on est.','Bravo ! Chanter, finir, prendre, aller sont des verbes.')];
C['p5|fr|1']=M(['Dans une phrase, le groupe sujet fait l’action. Le complément d’objet direct (COD) répond à « quoi ? » ; le complément circonstanciel dit où, quand ou comment ; l’attribut du sujet décrit le sujet avec le verbe être.','« Hier, Lola a mangé une mangue au marché. »'],[
 Q('Dans « Lola mange une mangue », quel est le COD ?',['une mangue','Lola','mange','Lola mange'],'une mangue','Lola mange quoi ? Une mangue.'),
 Q('Dans « Il travaille au champ », « au champ » dit…',['le lieu','le temps','la manière','la cause'],'le lieu','Où travaille-t-il ? Au champ.'),
 Q('Dans « Le ciel est bleu », « bleu » est…',['attribut du sujet','COD','sujet','verbe'],'attribut du sujet','Il décrit le ciel avec le verbe être.'),
 Q('Dans « Demain, nous partirons », « demain » dit…',['le temps','le lieu','la manière','le but'],'le temps','Quand partons-nous ? Demain.')]);
C['p5|fr|2']=M(['Pour parler du passé : le passé composé (action finie : j’ai mangé), l’imparfait (décrire ou habitude : je mangeais) et le plus-que-parfait (avant une autre action).','L’imparfait finit par -ais, -ait, -ions, -iez, -aient.'],[
 Q('Complète : « Quand j’étais petit, je (jouer) … au ballon. »',['jouais','ai joué','jouerai','joue'],'jouais','L’imparfait décrit une habitude.'),
 Q('Complète : « Hier, nous (manger) … du riz. »',['avons mangé','mangeons','mangerons','mangions'],'avons mangé','Une action finie : passé composé.'),
 Q('Complète : « Il (faire) … beau ce matin-là. »',['faisait','fera','fait','a fait'],'faisait','L’imparfait décrit le temps.'),
 Q('Quelle terminaison correspond à « il » à l’imparfait ?',['-ait','-ai','-ons','-ez'],'-ait','Il mangeait.')]);
C['p5|fr|3']=M(['Pour parler de l’avenir : le futur simple (je mangerai) et le futur proche (je vais manger).','Le futur proche se forme avec le verbe aller + un infinitif.'],[
 Q('Quelle phrase est au futur proche ?',['Je vais partir.','Je pars.','Je suis parti.','Je partais.'],'Je vais partir.','Aller + infinitif : futur proche.'),
 Q('Complète : « Demain, nous (finir) … ce travail. »',['finirons','finissons','avons fini','finissions'],'finirons','Futur simple : nous finirons.'),
 Q('Complète : « Elle (aller) … au marché dans une heure. »',['ira','va','est allée','allait'],'ira','Futur simple du verbe aller : elle ira.'),
 Q('Quel mot annonce le futur ?',['bientôt','hier','autrefois','jadis'],'bientôt','« bientôt » regarde vers l’avenir.')]);
C['p5|fr|4']=M(['Avec l’auxiliaire être, le participe passé s’accorde avec le sujet : elle est partie, ils sont partis. Avec avoir, il s’accorde avec le COD s’il est placé avant le verbe : les mangues que j’ai mangées.','Sinon, il ne change pas : j’ai mangé des mangues.'],[
 Q('Complète : « Les filles sont (parti) … »',['parties','parti','partis','partie'],'parties','Sujet féminin pluriel : parties.'),
 Q('Complète : « Elle est (arrivé) … hier. »',['arrivée','arrivé','arrivés','arrivées'],'arrivée','Sujet féminin singulier : arrivée.'),
 Q('Complète : « J’ai (manger) … des mangues. »',['mangé','mangée','mangés','mangées'],'mangé','Avec avoir et COD après le verbe : pas d’accord.'),
 Q('Complète : « Les mangues que j’ai (acheter) … sont mûres. »',['achetées','acheté','achetés','achetée'],'achetées','Le COD « les mangues » est avant : accord féminin pluriel.')]);
C['p5|fr|5']=M(['Un pronom remplace un nom pour éviter les répétitions : Lola chante. Elle chante bien.','Les pronoms relatifs (qui, que, où) relient deux phrases : la fille qui chante est ma sœur.'],[
 Q('Par quel pronom remplace-t-on « Lola » ?',['elle','il','ils','nous'],'elle','Lola est féminin singulier : elle.'),
 Q('Complète : « Le livre ... j’ai lu est passionnant. »',['que','qui','où','dont'],'que','« que » remplace le COD « le livre ».'),
 Q('Complète : « La fille ... chante est ma sœur. »',['qui','que','où','quoi'],'qui','« qui » remplace le sujet.'),
 Q('Complète : « Voici la ville ... j’habite. »',['où','qui','que','quand'],'où','« où » indique le lieu.')]);
C['p5|fr|6']=M(['Les mots de liaison relient les idées : car, parce que (cause) ; mais, pourtant (opposition) ; donc (conséquence) ; d’abord, puis, enfin (ordre).','Ils rendent un texte clair.'],[
 Q('Quel mot exprime la cause ?',['car','donc','mais','puis'],'car','« car » explique pourquoi.'),
 Q('Quel mot exprime l’opposition ?',['mais','donc','car','enfin'],'mais','« mais » oppose deux idées.'),
 Q('Quel mot exprime la conséquence ?',['donc','mais','car','parce que'],'donc','« donc » annonce le résultat.'),
 Q('Complète : « Il pleut, … j’ai pris mon parapluie. »',['donc','car','mais','pourtant'],'donc','Il pleut, donc j’ai pris mon parapluie.')]);
J5['p5|fr|6']=[TRI('Cause, opposition ou conséquence ? Range chaque mot.',['Cause','Opposition','Conséquence'],[['car','Cause'],['mais','Opposition'],['donc','Conséquence'],['parce que','Cause'],['pourtant','Opposition'],['alors','Conséquence']])];
C['p5|fr|7']=M(['Un texte descriptif montre un lieu, une personne ou un objet : on utilise des adjectifs, des comparaisons et des mots de lieu.','Texte : « Le marché de Gambela est animé. Des étals colorés bordent les allées étroites. On sent l’odeur du poisson fumé et des mangues mûres. »'],[
 Q('Comment est le marché ?',['animé','désert','silencieux','vide'],'animé','Le texte dit : « animé ».'),
 Q('Comment sont les allées ?',['étroites','larges','vides','sombres'],'étroites','« allées étroites ».'),
 Q('Quelles odeurs sent-on ?',['du poisson fumé et des mangues mûres','du savon','de la fumée de voiture','du café'],'du poisson fumé et des mangues mûres','Le texte cite ces deux odeurs.'),
 Q('Que fait un texte descriptif ?',['il montre comment est un lieu','il raconte des aventures','il donne des ordres','il compte'],'il montre comment est un lieu','Il décrit.')]);
C['p5|fr|8']=M(['Un texte narratif raconte des événements dans le temps. On repère les personnages, le lieu, le problème et la solution.','Texte : « Un soir, la pirogue de Mwamba se renverse dans les rapides. Heureusement, les pêcheurs du village arrivent et le sauvent. »'],[
 Q('Que arrive-t-il à la pirogue ?',['elle se renverse','elle coule en haut','elle brûle','elle disparaît'],'elle se renverse','Elle se renverse dans les rapides.'),
 Q('Qui sauve Mwamba ?',['les pêcheurs du village','le maître','le docteur','personne'],'les pêcheurs du village','Les pêcheurs arrivent et le sauvent.'),
 Q('Quand l’événement a-t-il lieu ?',['un soir','le matin','à midi','en hiver'],'un soir','« Un soir ».'),
 Q('Quel mot montre que l’histoire finit bien ?',['Heureusement','Soudain','Pourtant','Hélas'],'Heureusement','« Heureusement » annonce la bonne issue.')]);
C['p5|fr|9']=M(['Résumer, c’est dire l’essentiel en quelques phrases courtes, avec ses propres mots, sans détails ni dialogues.','On garde l’ordre des événements.'],[
 Q('Un résumé doit être…',['court et fidèle au texte','plus long que le texte','plein de détails','sans ordre'],'court et fidèle au texte','Il reprend l’essentiel.'),
 Q('Que fait-on des dialogues dans un résumé ?',['on les raconte en une phrase','on les copie tous','on les garde en entier','on les inverse'],'on les raconte en une phrase','On les condense.'),
 Q('Comment écrire un résumé ?',['avec ses propres mots','en recopiant des paragraphes','en ajoutant ses idées','en changeant l’histoire'],'avec ses propres mots','On reformule.'),
 Q('Quelle information est essentielle dans « Un soir, la pirogue se renverse et les pêcheurs sauvent Mwamba » ?',['la pirogue se renverse et Mwamba est sauvé','la couleur de la pirogue','le nom du fleuve','l’heure exacte'],'la pirogue se renverse et Mwamba est sauvé','C’est l’événement principal.')]);
C['p5|fr|10']=M(['Décrire un paysage : on indique ce qu’on voit au premier plan, au milieu et au loin, avec des adjectifs et des comparaisons.','« Au loin, les collines bleues se découpent dans le ciel comme des vagues. »'],[
 Q('Quel mot indique le lointain ?',['au loin','devant','ici','juste à côté'],'au loin','« au loin » indique la distance.'),
 Q('Quel mot est une comparaison ?',['comme','donc','mais','puis'],'comme','« comme » compare.'),
 Q('Dans un paysage, on commence souvent par…',['ce qui est le plus proche','le dernier élément','un dialogue','une recette'],'ce qui est le plus proche','On suit un ordre : proche, milieu, lointain.'),
 Q('Quel adjectif décrit une forêt dense ?',['touffue','vide','nue','aride'],'touffue','Une forêt touffue est très dense.')]);
C['p5|fr|11']=M(['Un récit d’aventure suit un schéma : situation initiale, événement qui change tout, péripéties, résolution, situation finale.','Les péripéties sont les obstacles que rencontre le héros.'],[
 Q('Que se passe-t-il dans la situation initiale ?',['on présente le personnage et le lieu','on résout le problème','on termine l’histoire','on dit au revoir'],'on présente le personnage et le lieu','Elle installe le début de l’histoire.'),
 Q('Que sont les péripéties ?',['les obstacles et les événements du milieu','la fin','le titre','l’auteur'],'les obstacles et les événements du milieu','Elles font avancer le récit.'),
 Q('Que fait la résolution ?',['elle règle le problème','elle présente le héros','elle annonce le titre','elle met un dialogue'],'elle règle le problème','Le problème trouve sa solution.'),
 Q('Quel mot annonce un événement soudain ?',['Soudain','Ensuite','Pourtant','Alors'],'Soudain','« Soudain » annonce une surprise.')]);
J5['p5|fr|11']=[ORDRE('Remets dans l’ordre les étapes d’un récit.',['Soudain','un orage','éclate'],['Soudain','un orage','éclate'],'Commence par « Soudain ».')];
C['p5|fr|12']=M(['Dans un dialogue de théâtre, chaque réplique commence par le nom du personnage. Les didascalies (entre parenthèses) indiquent les gestes ou le ton.','Exemple : LOLA (surprise) : Quoi ? Déjà ?'],[
 Q('Qu’indique une didascalie ?',['un geste ou un ton','le titre','la date','le lieu seulement'],'un geste ou un ton','Elle guide les acteurs.'),
 Q('Par quoi commence une réplique ?',['le nom du personnage','un chiffre','un point','rien'],'le nom du personnage','On écrit le nom puis deux-points.'),
 Q('Où écrit-on une didascalie ?',['entre parenthèses','dans le titre','à la fin du texte','jamais'],'entre parenthèses','Elle est mise à part.'),
 Q('À quoi sert la mise en scène ?',['à montrer comment jouer la scène','à compter','à mesurer','à effacer'],'à montrer comment jouer la scène','Elle aide à jouer.')]);
C['p5|fr|13']=M(['Une lettre officielle suit des règles : expéditeur en haut à gauche, destinataire à droite, objet, appel (Monsieur le Directeur), texte poli, formule de politesse, signature.','On vouvoie le destinataire.'],[
 Q('Où met-on l’expéditeur ?',['en haut à gauche','en bas','au milieu','nulle part'],'en haut à gauche','On se présente en haut à gauche.'),
 Q('Quelle formule d’appel convient ?',['Monsieur le Directeur,','Salut,','Coucou,','Eh,'],'Monsieur le Directeur,','C’est une formule polie.'),
 Q('Que précise l’objet ?',['la raison de la lettre','la fin du texte','le nom du facteur','la couleur du papier'],'la raison de la lettre','L’objet dit pourquoi on écrit.'),
 Q('Quelle formule finale est polie ?',['Veuillez agréer mes salutations distinguées.','Bisous','À plus','Ciao'],'Veuillez agréer mes salutations distinguées.','C’est une formule finale officielle.')]);
C['p5|fr|14']=M(['Un texte argumentatif défend une idée (la thèse) avec des arguments et des exemples. On utilise des connecteurs : d’abord, de plus, enfin, en conclusion.','Exemple : « Il faut planter des arbres. D’abord, ils donnent de l’ombre. De plus, ils protègent le sol. »'],[
 Q('Qu’est-ce qu’une thèse ?',['l’idée que l’on défend','un dessin','un mot','une rime'],'l’idée que l’on défend','La thèse est la position défendue.'),
 Q('À quoi servent les arguments ?',['à appuyer la thèse','à raconter une histoire','à compter','à illustrer seulement'],'à appuyer la thèse','Ils justifient l’idée.'),
 Q('Quel connecteur ajoute un argument ?',['de plus','pourtant','hier','donc'],'de plus','« de plus » ajoute.'),
 Q('Que met-on en conclusion ?',['un rappel de l’idée défendue','un nouveau sujet','une blague','rien'],'un rappel de l’idée défendue','On termine par l’essentiel.')]);

// ---------------- Mathématiques ----------------
C['p5|ma|0']=M(['Au-delà de 9 999 : 10 000, 100 000, 1 000 000 (un million). Un million s’écrit avec six zéros.','On lit par tranches de trois chiffres : 2 345 678 = deux millions trois cent quarante-cinq mille six cent soixante-dix-huit.'],[
 Q('Combien de zéros dans un million ?',['6','5','7','3'],'6','1 000 000 a six zéros.'),
 Q('Quel nombre vient après 99 999 ?',['100 000','99 990','100 001','999 999'],'100 000','99 999 + 1 = 100 000.'),
 Q('Dans 4 502 300, quel est le chiffre des centaines de mille ?',['5','4','2','3'],'5','4 millions, 5 centaines de mille.'),
 Q('Quel est le plus grand : 1 250 000 ou 982 000 ?',['1 250 000','982 000','égaux','on ne sait pas'],'1 250 000','Un million deux cent cinquante mille est plus grand.')]);
C['p5|ma|1']=M(['Dans un calcul, on fait d’abord les parenthèses, puis les multiplications et divisions, puis les additions et soustractions.','3 + 4 × 2 = 3 + 8 = 11.'],[
 Q('Combien font 3 + 4 × 2 ?',['11','14','10','24'],'11','On fait 4 × 2 = 8 puis 3 + 8.'),
 Q('Combien font (3 + 4) × 2 ?',['14','11','10','24'],'14','Les parenthèses d’abord : 7 × 2.'),
 Q('Combien font 20 − 6 ÷ 2 ?',['17','7','14','10'],'17','6 ÷ 2 = 3 puis 20 − 3.'),
 Q('Quelle opération fait-on d’abord dans 5 + 2 × 3 ?',['la multiplication','l’addition','la soustraction','aucune'],'la multiplication','Multiplication avant addition.')]);
C['p5|ma|2']=M(['Une fraction a un numérateur (en haut) et un dénominateur (en bas). 3/5 : on partage en 5 parts égales et on en prend 3.','Le dénominateur ne peut pas être zéro.'],[
 Q('Dans 3/5, quel est le dénominateur ?',['5','3','8','2'],'5','Le dénominateur est le nombre du bas.'),
 Q('Dans 3/5, que dit le numérateur ?',['combien de parts on prend','en combien de parts on coupe','la couleur','le prix'],'combien de parts on prend','Le numérateur compte les parts prises.'),
 Q('Quelle fraction représente 2 parts sur 7 ?',['2/7','7/2','2/9','5/7'],'2/7','2 sur 7 : 2/7.'),
 Q('Un tout coupé en 8 parts égales, on en prend 3. Quelle fraction ?',['3/8','8/3','3/5','5/8'],'3/8','3 sur 8.')]);
C['p5|ma|3']=M(['Pour comparer deux fractions de même dénominateur, on compare les numérateurs : 2/5 < 3/5.','Si le numérateur est le même, la fraction au plus petit dénominateur est la plus grande : 1/2 > 1/4.'],[
 Q('Quelle fraction est la plus grande ?',['3/5','2/5','1/5','0/5'],'3/5','Même dénominateur : le plus grand numérateur.'),
 Q('Quelle est la plus grande : 1/2 ou 1/4 ?',['1/2','1/4','égales','on ne sait pas'],'1/2','Un demi est plus grand qu’un quart.'),
 Q('2/4 est égal à…',['1/2','1/4','3/4','2/2'],'1/2','2/4 = 1/2.'),
 Q('Range du plus petit au plus grand : 1/4, 3/4, 2/4.',['1/4, 2/4, 3/4','3/4, 2/4, 1/4','2/4, 1/4, 3/4','1/4, 3/4, 2/4'],'1/4, 2/4, 3/4','Même dénominateur : on range les numérateurs.')]);
C['p5|ma|4']=M(['Pour additionner des fractions de même dénominateur, on additionne les numérateurs et on garde le dénominateur : 1/5 + 2/5 = 3/5.','On peut simplifier ensuite.'],[
 Q('Combien font 1/5 + 2/5 ?',['3/5','3/10','2/5','1/5'],'3/5','1 + 2 = 3, dénominateur 5.'),
 Q('Combien font 2/7 + 3/7 ?',['5/7','5/14','6/7','1/7'],'5/7','2 + 3 = 5, dénominateur 7.'),
 Q('Combien font 1/4 + 1/4 ?',['2/4','1/8','2/8','1/2 seulement'],'2/4','1 + 1 = 2, dénominateur 4 (2/4 = 1/2).'),
 Q('Combien font 3/8 + 2/8 ?',['5/8','5/16','1/8','6/8'],'5/8','3 + 2 = 5, dénominateur 8.')]);
C['p5|ma|5']=M(['Un nombre décimal a une partie entière et une partie décimale séparées par une virgule : 2,5. Les dixièmes sont le 1er chiffre après la virgule, les centièmes le 2e.','0,5 = 5/10 = 1/2.'],[
 Q('0,5 est égal à…',['1/2','5','50','1/5'],'1/2','5 dixièmes, c’est la moitié.'),
 Q('Dans 3,47, quel est le chiffre des dixièmes ?',['4','7','3','47'],'4','Après la virgule : 4 dixièmes puis 7 centièmes.'),
 Q('Comment écrit-on 1 + 25 centièmes ?',['1,25','125','1,025','12,5'],'1,25','1 + 0,25.'),
 Q('0,1 est égal à…',['1/10','1/100','10','1/2'],'1/10','Un dixième.')]);
C['p5|ma|6']=M(['Pour comparer des décimaux, on compare d’abord les parties entières, puis les dixièmes, puis les centièmes.','0,7 > 0,07 et 3,4 < 3,45.'],[
 Q('Quel est le plus grand : 0,7 ou 0,07 ?',['0,7','0,07','égaux','on ne sait pas'],'0,7','7 dixièmes sont plus que 7 centièmes.'),
 Q('Quel signe : 3,4 … 3,45 ?',['<','>','=','+'],'<','3,40 est plus petit que 3,45.'),
 Q('Range du plus petit au plus grand : 2,5 ; 2,05 ; 2,15.',['2,05 ; 2,15 ; 2,5','2,5 ; 2,15 ; 2,05','2,15 ; 2,05 ; 2,5','2,05 ; 2,5 ; 2,15'],'2,05 ; 2,15 ; 2,5','On compare les dixièmes puis les centièmes.'),
 Q('Quel nombre est entre 1,2 et 1,3 ?',['1,25','1,35','1,15','1,4'],'1,25','1,25 est entre 1,2 et 1,3.')]);
C['p5|ma|7']=M(['Pour additionner ou soustraire des décimaux, on aligne les virgules.','2,5 + 1,25 = 3,75 ; 5 − 1,5 = 3,5.'],[
 Q('Combien font 2,5 + 1,25 ?',['3,75','3,30','4,25','3,5'],'3,75','2,50 + 1,25 = 3,75.'),
 Q('Combien font 5 − 1,5 ?',['3,5','4,5','3,05','6,5'],'3,5','5,0 − 1,5 = 3,5.'),
 Q('Combien font 0,75 + 0,25 ?',['1','0,100','1,5','0,5'],'1','0,75 + 0,25 = 1.'),
 Q('Combien font 10 − 2,4 ?',['7,6','8,4','7,4','12,4'],'7,6','10,0 − 2,4 = 7,6.')]);
C['p5|ma|8']=M(['Pour multiplier un décimal, on multiplie comme des entiers puis on place la virgule.','2,5 × 4 = 10 ; 0,5 × 6 = 3 ; 1,2 × 3 = 3,6.'],[
 Q('Combien font 2,5 × 4 ?',['10','8','9,5','6,5'],'10','2,5 × 4 = 10.'),
 Q('Combien font 0,5 × 6 ?',['3','30','0,3','5,6'],'3','La moitié de 6 est 3.'),
 Q('Combien font 1,2 × 3 ?',['3,6','36','2,6','4,2'],'3,6','12 × 3 = 36 puis on place la virgule : 3,6.'),
 Q('Combien font 0,25 × 4 ?',['1','0,1','10','0,8'],'1','Quatre quarts : 1.')]);
C['p5|ma|9']=M(['Un pourcentage est une fraction sur 100 : 50 % = la moitié, 25 % = un quart, 100 % = le tout.','10 % de 200 = 200 ÷ 10 = 20.'],[
 Q('50 % d’une quantité, c’est…',['la moitié','le quart','le tout','le double'],'la moitié','50 % = 1/2.'),
 Q('25 % d’une quantité, c’est…',['le quart','la moitié','le tiers','le double'],'le quart','25 % = 1/4.'),
 Q('Combien font 10 % de 200 ?',['20','10','2','100'],'20','200 ÷ 10 = 20.'),
 Q('Un commerçant fait 20 % de réduction sur 1 000 FC. Combien de réduction ?',['200 FC','20 FC','100 FC','800 FC'],'200 FC','20 % de 1 000 = 200.')]);
C['p5|ma|10']=M(['Longueurs : km, m, dm, cm, mm. Masses : t, kg, g. Capacités : L, cL, mL. Temps : h, min, s.','Pour convertir, on multiplie ou on divise par 10, 100 ou 1 000.'],[
 Q('3,5 m = … cm',['350','35','3 500','0,35'],'350','3,5 × 100 = 350.'),
 Q('2 t = … kg',['2 000','200','20','20 000'],'2 000','1 tonne = 1 000 kg.'),
 Q('1,5 L = … mL',['1 500','150','15','15 000'],'1 500','1,5 × 1 000 = 1 500.'),
 Q('2 h 30 min = … min',['150','230','120','180'],'150','2 × 60 + 30 = 150.')]);
C['p5|ma|11']=M(['Aire du rectangle : longueur × largeur. Aire du triangle : base × hauteur ÷ 2. Périmètre : somme des côtés.','Les aires s’expriment en cm² ou m².'],[
 Q('Aire d’un triangle de base 6 cm et de hauteur 4 cm ?',['12 cm²','24 cm²','10 cm²','20 cm²'],'12 cm²','6 × 4 ÷ 2 = 12.'),
 Q('Aire d’un rectangle de 9 m sur 5 m ?',['45 m²','28 m²','14 m²','54 m²'],'45 m²','9 × 5 = 45.'),
 Q('Périmètre d’un rectangle de 9 m sur 5 m ?',['28 m','45 m','14 m','19 m'],'28 m','2 × (9 + 5) = 28.'),
 Q('Aire d’un carré de côté 12 cm ?',['144 cm²','48 cm²','24 cm²','120 cm²'],'144 cm²','12 × 12 = 144.')]);
C['p5|ma|12']=M(['Le volume mesure la place occupée dans l’espace. Cube d’arête 3 cm : 3 × 3 × 3 = 27 cm³. Pavé : longueur × largeur × hauteur.','Un litre correspond à 1 000 cm³.'],[
 Q('Volume d’un cube d’arête 3 cm ?',['27 cm³','9 cm³','18 cm³','81 cm³'],'27 cm³','3 × 3 × 3.'),
 Q('Volume d’un pavé de 4 cm, 3 cm et 2 cm ?',['24 cm³','9 cm³','12 cm³','14 cm³'],'24 cm³','4 × 3 × 2.'),
 Q('Volume d’un cube d’arête 2 m ?',['8 m³','4 m³','6 m³','16 m³'],'8 m³','2 × 2 × 2.'),
 Q('Le volume s’exprime en…',['cm³','cm²','cm','kg'],'cm³','Une unité cubique.')]);
C['p5|ma|13']=M(['Dans la vie courante, les mathématiques servent à acheter, mesurer, partager, comparer.','Lis bien, calcule étape par étape et vérifie la réponse.'],[
 Q('Maman achète 2,5 kg de riz à 1 200 FC le kilo. Combien paie-t-elle ?',['3 000 FC','2 400 FC','3 500 FC','1 200 FC'],'3 000 FC','2,5 × 1 200 = 3 000.'),
 Q('Un trajet dure 1 h 45 min et commence à 14 h 30. À quelle heure finit-il ?',['16 h 15','16 h 45','15 h 45','15 h 15'],'16 h 15','14 h 30 + 1 h 45 = 16 h 15.'),
 Q('Un sac coûte 8 000 FC. On fait 25 % de réduction. Combien paie-t-on ?',['6 000 FC','2 000 FC','4 000 FC','7 000 FC'],'6 000 FC','25 % de 8 000 = 2 000 ; 8 000 − 2 000.'),
 Q('On partage 3,6 L de jus entre 4 enfants. Combien chacun ?',['0,9 L','0,6 L','1,2 L','1,4 L'],'0,9 L','3,6 ÷ 4 = 0,9.')]);
C['p5|ma|14']=M(['Révision de l’année : grands nombres, fractions, décimaux, pourcentages, mesures, aire, périmètre et volume.','Tu es presque prêt pour la 6e primaire !'],[
 Q('Combien font 3/10 + 4/10 ?',['7/10','7/20','1/10','12/10'],'7/10','3 + 4 = 7 dixièmes.'),
 Q('Combien font 1,5 × 4 ?',['6','5,4','4,5','15'],'6','1,5 × 4 = 6.'),
 Q('Combien font 50 % de 80 ?',['40','50','30','4'],'40','La moitié de 80.'),
 Q('Aire d’un rectangle de 10 cm sur 7 cm ?',['70 cm²','34 cm²','17 cm²','700 cm²'],'70 cm²','10 × 7 = 70.')]);

// ---------------- Sciences, histoire-géographie et civisme ----------------
C['p5|sc|0']=M(['Les aliments se classent en trois groupes : ceux qui donnent de l’énergie (manioc, riz, huile), ceux qui construisent le corps (poisson, haricots, viande) et ceux qui protègent (fruits et légumes).','Un repas équilibré contient les trois groupes.'],[
 Q('Quel aliment donne de l’énergie ?',['le manioc','la mangue seule','l’eau seule','le sel seul'],'le manioc','Le manioc est riche en glucides.'),
 Q('Quel aliment aide à construire le corps ?',['le poisson','l’huile','le sucre','le sel'],'le poisson','Les protéines construisent le corps.'),
 Q('Que nous apportent les fruits et légumes ?',['des vitamines qui protègent','seulement du bruit','du plastique','rien'],'des vitamines qui protègent','Ils protègent le corps.'),
 Q('Un repas équilibré contient…',['les trois groupes d’aliments','un seul aliment','seulement du sucre','seulement de l’huile'],'les trois groupes d’aliments','Il faut de tout un peu.')]);
J5['p5|sc|0']=[TRI('Énergie ou construction ? Range chaque aliment.',['Énergie','Construction'],[['manioc','Énergie'],['poisson','Construction'],['riz','Énergie'],['haricots','Construction'],['huile','Énergie'],['viande','Construction']])];
C['p5|sc|1']=M(['Certaines maladies sont dues à des microbes : paludisme (moustique), choléra (eau sale), rougeole, tuberculose. On les prévient par l’hygiène, la vaccination et les moustiquaires.','Consulter vite un soignant évite les complications.'],[
 Q('Comment le paludisme se transmet-il ?',['par la piqûre d’un moustique','par l’air seulement','par l’eau claire','par les arbres'],'par la piqûre d’un moustique','Le moustique anophèle transmet le paludisme.'),
 Q('Le choléra se transmet surtout par…',['l’eau et les aliments souillés','le vent','la lumière','le sommeil'],'l’eau et les aliments souillés','Il faut boire de l’eau propre.'),
 Q('Quel geste protège de nombreuses maladies ?',['se laver les mains','manger beaucoup','rester sans bouger','garder l’eau sale'],'se laver les mains','Les mains propres arrêtent les microbes.'),
 Q('À quoi sert un vaccin ?',['préparer le corps à se défendre','soigner la faim','donner de l’énergie','remplacer l’eau'],'préparer le corps à se défendre','Le vaccin prévient la maladie.')]);
C['p5|sc|2']=M(['La RDC possède plusieurs écosystèmes : la forêt équatoriale, les savanes, les montagnes, les fleuves et les lacs. Chacun a ses plantes et ses animaux.','La forêt du Bassin du Congo est la deuxième plus grande forêt tropicale du monde.'],[
 Q('Quel écosystème couvre une grande partie de la RDC ?',['la forêt équatoriale','le désert','la banquise','la toundra'],'la forêt équatoriale','La forêt équatoriale est immense.'),
 Q('Quel écosystème est riche en herbes et peu en arbres ?',['la savane','la forêt dense','le lac profond','la mangrove'],'la savane','La savane est herbeuse.'),
 Q('Quel milieu se trouve autour du lac Tanganyika ?',['un écosystème lacustre','un désert de sable','la banquise','un glacier'],'un écosystème lacustre','Les lacs ont leur propre vie.'),
 Q('Pourquoi protéger les écosystèmes ?',['tout y est lié','pour rien','ils sont inutiles','ils sont dangereux'],'tout y est lié','Si un élément disparaît, tout est touché.')]);
C['p5|sc|3']=M(['La RDC abrite une faune et une flore exceptionnelles : l’okapi (que l’on ne trouve qu’en RDC), le bonobo, le gorille de montagne, l’éléphant de forêt, le palmier à huile, de grands acajous.','Ces espèces sont fragiles et protégées dans les parcs nationaux.'],[
 Q('Quel animal ne vit qu’en RDC ?',['l’okapi','le lion','le zèbre','le chameau'],'l’okapi','L’okapi vit seulement dans les forêts de RDC.'),
 Q('Quel primate rare vit en RDC ?',['le bonobo','le kangourou','le lama','l’ours'],'le bonobo','Le bonobo ne vit qu’en RDC.'),
 Q('Quel arbre donne de l’huile ?',['le palmier à huile','le baobab','le cerisier','le sapin'],'le palmier à huile','On en tire l’huile de palme.'),
 Q('Où protège-t-on ces animaux ?',['dans les parcs nationaux','dans les marchés','dans les gares','dans les usines'],'dans les parcs nationaux','Les parcs les protègent.')]);
J5['p5|sc|3']=[TRI('Faune ou flore ? Range chaque être vivant.',['Faune','Flore'],[['okapi','Faune'],['palmier à huile','Flore'],['bonobo','Faune'],['acajou','Flore'],['gorille','Faune'],['fougère','Flore']])];
C['p5|sc|4']=M(['La pollution salit l’eau, l’air et le sol : déchets plastiques, fumées, produits chimiques. Elle rend malade et tue des animaux.','On la réduit en triant les déchets, en évitant de brûler le plastique et en protégeant les rivières.'],[
 Q('Qu’est-ce qui pollue l’eau ?',['les déchets jetés dans la rivière','la pluie','les poissons','le soleil'],'les déchets jetés dans la rivière','Les déchets salissent l’eau.'),
 Q('Qu’est-ce qui pollue l’air ?',['la fumée des brûlis et des moteurs','le vent','les nuages','les oiseaux'],'la fumée des brûlis et des moteurs','Les fumées salissent l’air.'),
 Q('Que faire du plastique ?',['le trier et le recycler','le brûler','le jeter dans le fleuve','l’enterrer partout'],'le trier et le recycler','Le recyclage réduit la pollution.'),
 Q('Pourquoi la pollution est-elle dangereuse ?',['elle rend malade les êtres vivants','elle fait de la musique','elle sert de jeu','elle est utile'],'elle rend malade les êtres vivants','Elle nuit à la santé.')]);
C['p5|sc|5']=M(['Les énergies renouvelables ne s’épuisent pas : solaire, éolienne, hydraulique (barrage d’Inga), biomasse (bois, déchets végétaux).','Elles polluent moins que le pétrole ou le charbon.'],[
 Q('Quelle énergie utilise le soleil ?',['solaire','éolienne','hydraulique','nucléaire'],'solaire','Les panneaux solaires.'),
 Q('Quelle énergie utilise le vent ?',['éolienne','solaire','pétrolière','charbon'],'éolienne','Les éoliennes.'),
 Q('Quelle énergie utilise la force de l’eau ?',['hydraulique','solaire','éolienne','gazeuse'],'hydraulique','Les barrages.'),
 Q('Pourquoi préfère-t-on les énergies renouvelables ?',['elles polluent moins et ne s’épuisent pas','elles coûtent toujours plus','elles sont rares','elles sont dangereuses'],'elles polluent moins et ne s’épuisent pas','Elles protègent l’avenir.')]);
C['p5|sc|6']=M(['Grandes périodes de l’histoire de la RDC : les royaumes anciens (Kongo, Luba, Lunda, Kuba), l’État indépendant du Congo (1885), le Congo belge (1908), l’indépendance (30 juin 1960), le Zaïre (1971) et la République démocratique du Congo (1997).','Chaque période a marqué le pays.'],[
 Q('En quelle année le Congo devient-il colonie belge ?',['1908','1885','1960','1997'],'1908','En 1908, la Belgique reprend le Congo.'),
 Q('Quand l’indépendance a-t-elle été proclamée ?',['le 30 juin 1960','le 1er janvier 1971','le 17 mai 1997','le 25 décembre 1908'],'le 30 juin 1960','C’est la fête nationale.'),
 Q('Quel nom le pays porta-t-il de 1971 à 1997 ?',['le Zaïre','le Katanga','le Rwanda','le Kongo'],'le Zaïre','Le Zaïre.'),
 Q('Quel royaume était l’un des plus anciens ?',['le royaume Kongo','l’Empire romain','le royaume de Prusse','l’empire Inca'],'le royaume Kongo','Le royaume Kongo.')]);
C['p5|sc|7']=M(['La RDC compte de grandes réalités physiques : le fleuve Congo (environ 4 700 km, 2e fleuve d’Afrique), le massif du Rwenzori (pic Marguerite, plus haut sommet du pays), les lacs Tanganyika, Kivu, Albert, et les volcans Virunga.','Le climat est équatorial au centre, tropical au nord et au sud.'],[
 Q('Quel est le grand fleuve du pays ?',['le fleuve Congo','le Zambèze','le Nil','l’Orange'],'le fleuve Congo','Le fleuve Congo, 2e d’Afrique par sa longueur.'),
 Q('Où trouve-t-on les volcans Nyiragongo et Nyamuragira ?',['dans les Virunga','dans le Kasaï','dans le Haut-Katanga','dans la Tshopo'],'dans les Virunga','Les Virunga sont une chaîne volcanique.'),
 Q('Quel lac borde l’est de la RDC et est très profond ?',['le lac Tanganyika','le lac Tchad','le lac Léman','le lac Victoria seulement'],'le lac Tanganyika','C’est un très grand lac.'),
 Q('Quel climat règne au centre de la RDC ?',['équatorial','polaire','désertique','tempéré froid'],'équatorial','Chaud et pluvieux toute l’année.')]);
C['p5|sc|8']=M(['Les principales villes de la RDC : Kinshasa (capitale), Lubumbashi, Mbuji-Mayi, Kisangani, Kananga, Goma, Bukavu, Matadi.','Chaque province a un chef-lieu.'],[
 Q('Quelle est la capitale ?',['Kinshasa','Goma','Matadi','Kananga'],'Kinshasa','Kinshasa.'),
 Q('Quelle ville est le grand centre minier du Sud ?',['Lubumbashi','Matadi','Kisangani','Bukavu'],'Lubumbashi','Lubumbashi, au Haut-Katanga.'),
 Q('Quelle ville est au bord du lac Kivu ?',['Goma','Kinshasa','Matadi','Lubumbashi'],'Goma','Goma et Bukavu sont au bord du lac Kivu.'),
 Q('Quelle ville est le grand port de l’Atlantique ?',['Matadi','Goma','Kananga','Kisangani'],'Matadi','Matadi, sur le fleuve Congo.')]);
J5['p5|sc|8']=[TRI('Nord-Kivu ou Haut-Katanga ? Range chaque ville.',['Nord-Kivu','Haut-Katanga'],[['Goma','Nord-Kivu'],['Lubumbashi','Haut-Katanga'],['Butembo','Nord-Kivu'],['Likasi','Haut-Katanga']])];
C['p5|sc|9']=M(['Les droits humains sont les droits de toutes les personnes : vivre en sécurité, s’exprimer, aller à l’école, être soigné. La Déclaration universelle des droits de l’homme date de 1948 ; la Convention relative aux droits de l’enfant date de 1989.','Les droits s’accompagnent de devoirs.'],[
 Q('Qui a des droits humains ?',['tout le monde','seulement les adultes','seulement les riches','seulement les chefs'],'tout le monde','Les droits sont universels.'),
 Q('Quel est un droit de l’enfant ?',['aller à l’école','travailler à la mine','être battu','être abandonné'],'aller à l’école','L’éducation est un droit.'),
 Q('En quelle année a été adoptée la Déclaration universelle ?',['1948','1789','1960','2000'],'1948','En 1948.'),
 Q('Que doit-on faire de ses droits ?',['les respecter chez les autres aussi','les oublier','les cacher','les vendre'],'les respecter chez les autres aussi','Mes droits s’arrêtent où commencent ceux des autres.')]);
C['p5|sc|10']=M(['Être citoyen, c’est faire partie d’un pays, respecter ses lois, voter, payer ses impôts et participer à la vie de la communauté.','Chaque citoyen est responsable de ses actes.'],[
 Q('Que fait un bon citoyen ?',['il respecte les lois','il ignore les règles','il casse les biens communs','il triche'],'il respecte les lois','Le respect des lois fait un citoyen.'),
 Q('Quelle est une responsabilité du citoyen ?',['voter à l’âge fixé','se cacher','ne jamais aider','abandonner ses voisins'],'voter à l’âge fixé','Voter est un devoir civique.'),
 Q('Que signifie « bien commun » ?',['ce qui appartient à tous','ce qui m’appartient seul','ce qui est interdit','ce qui est caché'],'ce qui appartient à tous','Les écoles, les routes, la nature.'),
 Q('Comment participer à sa communauté ?',['en aidant, en s’engageant','en s’isolant','en détruisant','en se disputant'],'en aidant, en s’engageant','L’entraide fait vivre la communauté.')]);
C['p5|sc|11']=M(['Le développement durable répond aux besoins d’aujourd’hui sans compromettre ceux de demain. Il relie trois piliers : économique, social et environnemental.','Exemples : planter des arbres, économiser l’eau, recycler, partager équitablement.'],[
 Q('Que cherche le développement durable ?',['vivre bien sans abîmer l’avenir','tout consommer vite','ne rien changer','tout vendre'],'vivre bien sans abîmer l’avenir','Il pense aux générations futures.'),
 Q('Quels sont les trois piliers ?',['économique, social, environnemental','sportif, musical, artistique','médical, militaire, minier','rouge, vert, bleu'],'économique, social, environnemental','Ils doivent être en équilibre.'),
 Q('Quel geste relève du développement durable ?',['recycler ses déchets','gaspiller l’eau','couper les forêts sans replanter','brûler le plastique'],'recycler ses déchets','Recycler protège l’environnement.'),
 Q('Pourquoi penser aux générations futures ?',['elles auront besoin des ressources aussi','elles n’existent pas','c’est inutile','elles ne vivront pas'],'elles auront besoin des ressources aussi','Nous devons préserver pour elles.')]);
