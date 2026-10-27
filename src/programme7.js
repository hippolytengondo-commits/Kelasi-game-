import {Q} from './data.js';

// 7e année : 40 missions jouables (français 10, mathématiques 12, sciences 10, histoire-géographie-civisme 8).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
const ORDRE=(consigne,mots,rep,indice)=>({t:'ordre',consigne:consigne,mots:mots,rep:rep,indice:indice});
export const C7={},J7={},K7={};
const C=C7;

// ---------------- Français ----------------
C['s7|fr|0']=M(['Une phrase simple ne contient qu’un seul verbe conjugué : « Lola lit. » Une phrase complexe en contient plusieurs : « Lola lit pendant que son frère dessine. »','Chaque verbe conjugué annonce une proposition.'],[
 Q('Combien de verbes conjugués contient une phrase simple ?',['un','deux','trois','aucun'],'un','Un verbe conjugué = une proposition.'),
 Q('Quelle phrase est complexe ?',['Amani chante quand il se lave.','Amani chante.','Amani et Lola chantent.','Amani chante fort.'],'Amani chante quand il se lave.','Deux verbes conjugués : chante et se lave.'),
 Q('Combien de verbes conjugués dans « Je sais que tu viendras » ?',['2','1','3','0'],'2','sais et viendras.'),
 Q('Une phrase complexe contient…',['plusieurs propositions','un seul mot','aucun verbe','seulement des noms'],'plusieurs propositions','Chaque verbe conjugué forme une proposition.')]);
C['s7|fr|1']=M(['La proposition indépendante se suffit à elle-même. La proposition principale a besoin d’une subordonnée : « Je pense (principale) que tu as raison (subordonnée). »','On relie les propositions par juxtaposition (virgule), coordination (et, mais, car) ou subordination (que, quand, parce que).'],[
 Q('Dans « Il pleut, nous restons chez nous », les propositions sont…',['juxtaposées','subordonnées','coordonnées par « et »','sans verbe'],'juxtaposées','Elles sont séparées par une virgule.'),
 Q('Quel mot coordonne deux propositions ?',['mais','que','quand','si'],'mais','« mais » est une conjonction de coordination.'),
 Q('Dans « Je veux que tu viennes », « que tu viennes » est…',['une subordonnée','une indépendante','une principale','un nom'],'une subordonnée','Elle dépend de « Je veux ».'),
 Q('Quelle proposition se suffit à elle-même ?',['l’indépendante','la subordonnée','la relative','la complétive'],'l’indépendante','Elle ne dépend d’aucune autre.')]);
C['s7|fr|2']=M(['Dans un récit au passé, le passé simple raconte les actions principales (il ouvrit), l’imparfait décrit le décor (il faisait nuit) et le plus-que-parfait marque une action antérieure (il avait fermé la porte).','Bien les combiner donne du relief au récit.'],[
 Q('Quel temps exprime une action déjà terminée avant une autre action du passé ?',['le plus-que-parfait','le futur','le présent','l’impératif'],'le plus-que-parfait','Il exprime l’antériorité.'),
 Q('Complète : « Quand il (arriver) …, le match avait déjà commencé. »',['arriva','arrivera','arrive','arrivant'],'arriva','Passé simple de arriver : il arriva.'),
 Q('Le plus-que-parfait se forme avec…',['l’auxiliaire à l’imparfait + participe passé','le présent + infinitif','le futur + participe passé','l’impératif + participe passé'],'l’auxiliaire à l’imparfait + participe passé','Il avait fini, elle était partie.'),
 Q('Quelle phrase est au plus-que-parfait ?',['Elle avait fini son travail.','Elle finit son travail.','Elle finira son travail.','Elle a fini son travail.'],'Elle avait fini son travail.','« avait fini » : imparfait + participe passé.')]);
C['s7|fr|3']=M(['Les modes se partagent en modes personnels (indicatif, subjonctif, conditionnel, impératif) et modes impersonnels (infinitif, participe, gérondif).','L’indicatif exprime des faits, le subjonctif un souhait ou un doute, le conditionnel une hypothèse, l’impératif un ordre.'],[
 Q('Quel mode exprime un ordre ?',['l’impératif','l’indicatif','le conditionnel','le subjonctif'],'l’impératif','Viens ! Sors !'),
 Q('Complète : « Il faut que tu (venir) … demain. »',['viennes','viens','viendras','venais'],'viennes','« il faut que » est suivi du subjonctif.'),
 Q('« Si j’avais de l’argent, j’achèterais un vélo » : « j’achèterais » est au…',['conditionnel présent','futur simple','imparfait','passé simple'],'conditionnel présent','Il exprime la conséquence d’une hypothèse.'),
 Q('Quel mode est impersonnel ?',['l’infinitif','l’indicatif','l’impératif','le subjonctif'],'l’infinitif','Il ne se conjugue pas selon la personne.')]);
J7['s7|fr|3']=[TRI('Quel mode ? Range chaque verbe.',['Indicatif','Impératif'],[['il mange','Indicatif'],['mange !','Impératif'],['nous chantons','Indicatif'],['chantons !','Impératif']])];
C['s7|fr|4']=M(['Analyser un mot, c’est donner sa nature (nom, verbe, adjectif, adverbe, pronom, déterminant, préposition, conjonction) puis sa fonction (sujet, COD, COI, complément circonstanciel, attribut…).','La nature répond à « qu’est-ce que c’est ? », la fonction à « que fait-il dans la phrase ? ».'],[
 Q('Dans « Les élèves lisent un livre », quelle est la nature de « élèves » ?',['nom commun','verbe','adjectif','adverbe'],'nom commun','Il désigne des personnes.'),
 Q('Quelle est la fonction de « un livre » ?',['COD','sujet','attribut','complément du nom'],'COD','Lisent quoi ? Un livre.'),
 Q('Quelle est la fonction de « Les élèves » ?',['sujet','COD','COI','attribut'],'sujet','Qui lit ? Les élèves.'),
 Q('« rapidement » est…',['un adverbe','un adjectif','un nom','un pronom'],'un adverbe','Il précise le verbe et ne varie pas.')]);
C['s7|fr|5']=M(['Un texte littéraire raconte, décrit ou exprime des émotions avec un style travaillé. On repère le narrateur, les personnages, le lieu, l’époque et le thème.','Lire attentivement permet de comprendre le sens et le point de vue de l’auteur.'],[
 Q('Qui raconte l’histoire ?',['le narrateur','le lecteur','l’éditeur','le libraire'],'le narrateur','Le narrateur raconte.'),
 Q('Un récit à la première personne utilise…',['« je »','« il »','« vous » seulement','« on » seulement'],'« je »','Le narrateur est un personnage.'),
 Q('Le thème d’un texte, c’est…',['le sujet principal','la couverture','le prix','le nombre de pages'],'le sujet principal','Ce dont parle le texte.'),
 Q('Le schéma narratif commence par…',['la situation initiale','le dénouement','la morale','la table des matières'],'la situation initiale','Situation initiale, élément perturbateur, péripéties, dénouement, situation finale.')]);
C['s7|fr|6']=M(['Résumer, c’est garder l’essentiel d’un texte en moins de mots, avec ses propres phrases. On repère les idées principales et on supprime les exemples et les détails.','Un bon résumé fait environ le tiers du texte.'],[
 Q('Que garde-t-on dans un résumé ?',['les idées principales','tous les exemples','tous les détails','les titres de chapitres seulement'],'les idées principales','On garde l’essentiel.'),
 Q('Un résumé est en général…',['plus court que le texte','plus long que le texte','identique au texte','sans phrases'],'plus court que le texte','Environ le tiers du texte.'),
 Q('Dans un résumé, on écrit avec…',['ses propres mots','uniquement des citations','des dessins','des chiffres'],'ses propres mots','On reformule.'),
 Q('Que supprime-t-on d’abord ?',['les exemples et détails','la conclusion','l’idée principale','le sujet'],'les exemples et détails','Ils ne sont pas essentiels.')]);
C['s7|fr|7']=M(['Le compte rendu rapporte fidèlement un événement, un cours ou un texte. Il est objectif : il répond aux questions Qui ? Quoi ? Où ? Quand ? Pourquoi ?','On rédige au passé ou au présent de narration, de façon claire et ordonnée.'],[
 Q('Un compte rendu doit être…',['objectif','plein d’opinions personnelles','imaginaire','sans ordre'],'objectif','Il rapporte les faits.'),
 Q('Quelle question ne sert pas à structurer un compte rendu ?',['Qui préfère le foot ?','Qui ?','Où ?','Quand ?'],'Qui préfère le foot ?','Il rapporte des faits : qui, quoi, où, quand, pourquoi.'),
 Q('Un compte rendu de réunion indique…',['la date, les participants et les décisions','seulement le menu du repas','la météo','la couleur des murs'],'la date, les participants et les décisions','Ce sont les éléments essentiels.'),
 Q('Dans quel ordre présente-t-on les faits ?',['dans l’ordre où ils se sont passés','dans le désordre','de la fin au début sans raison','au hasard'],'dans l’ordre où ils se sont passés','L’ordre chronologique rend le texte clair.')]);
C['s7|fr|8']=M(['La dissertation simple a trois parties : l’introduction (présenter le sujet), le développement (arguments et exemples en paragraphes) et la conclusion (bilan et ouverture).','Chaque paragraphe défend une idée avec un exemple.'],[
 Q('Combien de parties principales a une dissertation ?',['3','1','5','7'],'3','Introduction, développement, conclusion.'),
 Q('Où présente-t-on le sujet ?',['dans l’introduction','dans la conclusion','dans le titre seulement','nulle part'],'dans l’introduction','L’introduction pose le sujet.'),
 Q('Que contient un paragraphe du développement ?',['une idée et un exemple','trois sujets différents','aucune idée','une liste de mots'],'une idée et un exemple','On argumente avec des exemples.'),
 Q('Que fait la conclusion ?',['elle fait le bilan','elle introduit un nouveau sujet','elle répète tous les exemples','elle ne sert à rien'],'elle fait le bilan','Elle résume la réponse au sujet.')]);
C['s7|fr|9']=M(['L’expression orale demande de parler clairement, de regarder son public, de structurer ses idées (introduction, développement, conclusion) et d’écouter les autres.','On adapte son vocabulaire et son ton à la situation.'],[
 Q('Pour bien parler en public, il faut…',['parler distinctement','murmurer','tourner le dos','parler très vite'],'parler distinctement','Une voix claire est comprise de tous.'),
 Q('Pendant un débat, on doit…',['écouter l’autre','l’interrompre toujours','crier','ne rien dire'],'écouter l’autre','L’écoute est la base du dialogue.'),
 Q('Que prépare-t-on avant un exposé ?',['un plan avec les idées','rien','un chant','des devinettes'],'un plan avec les idées','Un plan aide à structurer.'),
 Q('Quel ton convient à un exposé en classe ?',['respectueux et clair','moqueur','agressif','endormi'],'respectueux et clair','On s’adresse poliment à son public.')]);

// ---------------- Mathématiques ----------------
C['s7|ma|0']=M(['Les nombres relatifs sont positifs (+3) ou négatifs (−3). On les place sur une droite graduée : plus on va à droite, plus le nombre est grand.','L’opposé de +5 est −5. La valeur absolue d’un nombre est sa distance à zéro : |−8| = 8.'],[
 Q('Quel nombre est le plus grand ?',['−3','−7','−10','−12'],'−3','Sur la droite, −3 est le plus à droite.'),
 Q('Quel est l’opposé de 5 ?',['−5','5','0','1/5'],'−5','L’opposé change le signe.'),
 Q('Quelle est la valeur absolue de −8 ?',['8','−8','0','16'],'8','|−8| = 8.'),
 Q('La température passe de −4 °C à 3 °C. Elle a monté de…',['7 °C','1 °C','−1 °C','12 °C'],'7 °C','De −4 à 0 : 4, puis de 0 à 3 : 3. Total 7.')]);
J7['s7|ma|0']=[TRI('Positif ou négatif ? Range chaque nombre.',['Positif','Négatif'],[['+7','Positif'],['−3','Négatif'],['12','Positif'],['−20','Négatif'],['+0,5','Positif'],['−1,5','Négatif']])];
C['s7|ma|1']=M(['Addition : même signe → on additionne les valeurs et on garde le signe ; signes différents → on soustrait et on garde le signe du plus grand. Soustraire, c’est ajouter l’opposé.','Multiplication et division : même signe → résultat positif ; signes différents → négatif.'],[
 Q('(−3) + (−5) = ?',['−8','8','−2','2'],'−8','Même signe : 3 + 5 = 8, signe moins.'),
 Q('(−7) + 9 = ?',['2','−2','16','−16'],'2','9 − 7 = 2, signe du plus grand (positif).'),
 Q('4 − (−6) = ?',['10','−2','2','−10'],'10','4 + 6 = 10.'),
 Q('(−2) × (−5) = ?',['10','−10','7','−7'],'10','Même signe : résultat positif.')]);
C['s7|ma|2']=M(['Pour additionner des fractions, on les met au même dénominateur : 2/3 + 1/6 = 4/6 + 1/6 = 5/6. Pour les multiplier : numérateur × numérateur, dénominateur × dénominateur.','Une puissance est une multiplication répétée : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Tout nombre non nul à la puissance 0 vaut 1.'],[
 Q('2/3 + 1/6 = ?',['5/6','3/9','3/6','1/2'],'5/6','2/3 = 4/6, puis 4/6 + 1/6 = 5/6.'),
 Q('3/4 × 2/5 = ?',['3/10','5/9','6/9','1/2'],'3/10','6/20 = 3/10.'),
 Q('2⁵ = ?',['32','10','25','16'],'32','2 × 2 × 2 × 2 × 2 = 32.'),
 Q('10³ = ?',['1 000','30','100','10 000'],'1 000','10 × 10 × 10.')]);
C['s7|ma|3']=M(['La racine carrée de a est le nombre positif dont le carré vaut a : √49 = 7 car 7 × 7 = 49.','Les carrés parfaits à connaître : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.'],[
 Q('√49 = ?',['7','8','6','49'],'7','7 × 7 = 49.'),
 Q('√81 = ?',['9','8','7','81'],'9','9 × 9 = 81.'),
 Q('√144 = ?',['12','14','11','16'],'12','12 × 12 = 144.'),
 Q('Quel nombre n’est pas un carré parfait ?',['50','49','64','36'],'50','50 n’est le carré d’aucun entier.')]);
C['s7|ma|4']=M(['Le calcul littéral utilise des lettres pour représenter des nombres. On réduit : 3x + 2x = 5x. On développe : 2(x + 3) = 2x + 6.','Pour calculer une valeur, on remplace la lettre par le nombre donné.'],[
 Q('3x + 2x = ?',['5x','5x²','6x','x'],'5x','3 + 2 = 5 fois x.'),
 Q('Développe : 2(x + 3)',['2x + 6','2x + 3','x + 6','5x'],'2x + 6','On multiplie chaque terme par 2.'),
 Q('Si x = 4, combien vaut 3x − 1 ?',['11','12','13','7'],'11','3 × 4 − 1 = 11.'),
 Q('Réduis : 5a − 2a + a',['4a','8a','6a','2a'],'4a','5 − 2 + 1 = 4.')]);
C['s7|ma|5']=M(['Une équation du premier degré s’écrit ax + b = c. On isole x en faisant la même opération des deux côtés : x + 7 = 12 donne x = 12 − 7 = 5.','On vérifie toujours en remplaçant x par la solution.'],[
 Q('Résous : x + 7 = 12',['x = 5','x = 19','x = 7','x = 12'],'x = 5','12 − 7 = 5.'),
 Q('Résous : 3x = 21',['x = 7','x = 18','x = 63','x = 24'],'x = 7','21 ÷ 3 = 7.'),
 Q('Résous : 2x − 5 = 9',['x = 7','x = 2','x = 14','x = 9'],'x = 7','2x = 14, donc x = 7.'),
 Q('Résous : 4x + 3 = 19',['x = 4','x = 5','x = 3','x = 16'],'x = 4','4x = 16, donc x = 4.')]);
C['s7|ma|6']=M(['Deux grandeurs sont proportionnelles si l’on passe de l’une à l’autre en multipliant par un même nombre. Un pourcentage est une proportion sur 100 : 20 % de 150 = 150 × 20 / 100 = 30.','Pour une remise de 10 %, on paie 90 % du prix.'],[
 Q('20 % de 150 = ?',['30','20','15','50'],'30','150 × 20 / 100 = 30.'),
 Q('3 kg de riz coûtent 9 $. Combien coûtent 5 kg ?',['15 $','12 $','18 $','14 $'],'15 $','1 kg = 3 $, donc 5 kg = 15 $.'),
 Q('Un article à 80 $ est soldé à −10 %. Prix final ?',['72 $','70 $','78 $','8 $'],'72 $','10 % de 80 = 8 ; 80 − 8 = 72.'),
 Q('25 % de 200 = ?',['50','25','100','75'],'50','25 % = un quart ; 200 ÷ 4 = 50.')]);
C['s7|ma|7']=M(['La somme des angles d’un triangle vaut toujours 180°. Un triangle équilatéral a trois côtés égaux (angles de 60°), un triangle isocèle a deux côtés égaux, un triangle rectangle a un angle de 90°.','Dans un triangle, un côté est toujours plus petit que la somme des deux autres.'],[
 Q('La somme des angles d’un triangle vaut…',['180°','90°','360°','100°'],'180°','Propriété de tout triangle.'),
 Q('Un triangle a deux angles de 50° et 60°. Le troisième vaut…',['70°','80°','60°','110°'],'70°','180 − 50 − 60 = 70.'),
 Q('Combien de côtés égaux a un triangle isocèle ?',['2','3','0','4'],'2','Deux côtés égaux.'),
 Q('Peut-on construire un triangle de côtés 3 cm, 4 cm et 9 cm ?',['non, 9 > 3 + 4','oui toujours','oui si on trace bien','non, 9 est impair'],'non, 9 > 3 + 4','Un côté doit être plus petit que la somme des deux autres.')]);
C['s7|ma|8']=M(['Dans un triangle rectangle, le carré de l’hypoténuse (le plus grand côté) est égal à la somme des carrés des deux autres côtés : a² + b² = c².','Exemple : 3² + 4² = 9 + 16 = 25 = 5², donc l’hypoténuse vaut 5.'],[
 Q('Côtés de l’angle droit : 3 et 4. Hypoténuse ?',['5','7','6','12'],'5','9 + 16 = 25 ; √25 = 5.'),
 Q('Côtés de l’angle droit : 5 et 12. Hypoténuse ?',['13','17','15','11'],'13','25 + 144 = 169 ; √169 = 13.'),
 Q('Hypoténuse 10, un côté 6. L’autre côté ?',['8','4','16','9'],'8','100 − 36 = 64 ; √64 = 8.'),
 Q('Quel est le plus grand côté d’un triangle rectangle ?',['l’hypoténuse','le côté adjacent','la base','la hauteur'],'l’hypoténuse','Il est en face de l’angle droit.')]);
C['s7|ma|9']=M(['Aire du rectangle = L × l. Aire du triangle = base × hauteur ÷ 2. Aire du disque = π × r². Volume du pavé = L × l × h. Volume du cube = arête³.','Les aires s’expriment en m², les volumes en m³.'],[
 Q('Aire d’un rectangle de 8 m sur 5 m ?',['40 m²','13 m²','26 m²','80 m²'],'40 m²','8 × 5 = 40.'),
 Q('Aire d’un triangle de base 10 m et de hauteur 6 m ?',['30 m²','60 m²','16 m²','36 m²'],'30 m²','10 × 6 ÷ 2 = 30.'),
 Q('Volume d’un cube d’arête 3 m ?',['27 m³','9 m³','18 m³','12 m³'],'27 m³','3 × 3 × 3 = 27.'),
 Q('Volume d’un pavé de 4 m, 3 m et 2 m ?',['24 m³','9 m³','12 m³','14 m³'],'24 m³','4 × 3 × 2 = 24.')]);
C['s7|ma|10']=M(['La moyenne est la somme des valeurs divisée par leur nombre. La médiane partage la série en deux moitiés. Le mode est la valeur la plus fréquente. L’étendue est la différence entre la plus grande et la plus petite valeur.','Les statistiques résument des données avec quelques nombres.'],[
 Q('Moyenne de 4, 6, 8 et 10 ?',['7','6','8','28'],'7','28 ÷ 4 = 7.'),
 Q('Médiane de 2, 5 et 7 ?',['5','2','7','4'],'5','La valeur du milieu.'),
 Q('Mode de 3, 5, 5, 7 ?',['5','3','7','4'],'5','5 apparaît deux fois.'),
 Q('Étendue de 3, 8 et 12 ?',['9','15','5','4'],'9','12 − 3 = 9.')]);
C['s7|ma|11']=M(['Pour résoudre un problème : lire l’énoncé, repérer les données et la question, choisir l’opération ou l’équation, calculer, vérifier la réponse et écrire une phrase.','Les problèmes concrets (prix, vitesse, périmètre, partage) utilisent tout ce que tu as appris.'],[
 Q('Un commerçant achète 40 sacs à 15 $ et les revend 20 $ pièce. Son bénéfice ?',['200 $','100 $','800 $','600 $'],'200 $','Bénéfice par sac : 5 $ ; 40 × 5 = 200.'),
 Q('Une voiture parcourt 120 km en 2 h. Sa vitesse moyenne ?',['60 km/h','240 km/h','100 km/h','122 km/h'],'60 km/h','120 ÷ 2 = 60.'),
 Q('Terrain de 30 m sur 20 m. Longueur de clôture ?',['100 m','50 m','600 m','80 m'],'100 m','2 × (30 + 20) = 100.'),
 Q('3 ouvriers font un mur en 12 jours. 6 ouvriers (même rythme) le font en…',['6 jours','24 jours','12 jours','9 jours'],'6 jours','Deux fois plus d’ouvriers, deux fois moins de temps.')]);

// ---------------- Sciences ----------------
C['s7|sc|0']=M(['La matière existe sous trois états : solide (forme propre), liquide (prend la forme du récipient) et gaz (occupe tout l’espace). Les changements d’état sont la fusion, la solidification, la vaporisation et la condensation.','L’eau gèle à 0 °C et bout à 100 °C au niveau de la mer.'],[
 Q('Quel état a une forme propre ?',['solide','liquide','gaz','vapeur seule'],'solide','Un solide garde sa forme.'),
 Q('Le passage de liquide à gaz s’appelle…',['la vaporisation','la fusion','la solidification','la condensation'],'la vaporisation','Par exemple l’eau qui bout.'),
 Q('À quelle température l’eau gèle-t-elle ?',['0 °C','100 °C','10 °C','−100 °C'],'0 °C','Solidification de l’eau.'),
 Q('La glace qui fond subit…',['une fusion','une condensation','une vaporisation','une solidification'],'une fusion','Solide → liquide.')]);
J7['s7|sc|0']=[TRI('Solide, liquide ou gaz ? Range chaque exemple.',['Solide','Liquide','Gaz'],[['pierre','Solide'],['eau','Liquide'],['air','Gaz'],['bois','Solide'],['huile','Liquide'],['vapeur d’eau','Gaz']])];
C['s7|sc|1']=M(['L’atome est la plus petite partie d’un élément : un noyau (protons, neutrons) entouré d’électrons. Une molécule est formée d’atomes liés : l’eau (H₂O) a deux atomes d’hydrogène et un d’oxygène.','Chaque élément a un symbole : H, O, C, Fe, Cu…'],[
 Q('De quoi est formée une molécule ?',['d’atomes liés','de cellules','d’organes','de roches'],'d’atomes liés','Plusieurs atomes liés.'),
 Q('Quelle est la formule de l’eau ?',['H₂O','CO₂','O₂','NaCl'],'H₂O','2 hydrogène, 1 oxygène.'),
 Q('Quelles particules tournent autour du noyau ?',['les électrons','les protons','les neutrons','les cellules'],'les électrons','Les électrons sont chargés négativement.'),
 Q('Quel symbole désigne le cuivre ?',['Cu','Fe','Au','Co'],'Cu','Cu = cuivre.')]);
C['s7|sc|2']=M(['Un mélange homogène a un seul aspect (sel dans l’eau). Un mélange hétérogène montre plusieurs parties (sable dans l’eau). Dans une solution, le soluté (sel) se dissout dans le solvant (eau).','On sépare les mélanges par filtration, décantation ou évaporation.'],[
 Q('Le sel dissous dans l’eau forme un mélange…',['homogène','hétérogène','solide','gazeux'],'homogène','On ne distingue plus le sel.'),
 Q('Comment séparer le sable de l’eau ?',['par filtration','par évaporation du sable','par un aimant','par la lumière'],'par filtration','Le filtre retient le sable.'),
 Q('Comment récupérer le sel d’eau salée ?',['par évaporation','par filtration simple','par décantation','par un aimant'],'par évaporation','L’eau s’évapore, le sel reste.'),
 Q('Dans une solution de sucre, le sucre est le…',['soluté','solvant','filtre','gaz'],'soluté','Le soluté se dissout.')]);
C['s7|sc|3']=M(['La cellule est l’unité de base de tous les êtres vivants. Elle comprend une membrane, un cytoplasme et un noyau. La cellule végétale possède en plus une paroi et des chloroplastes.','On observe les cellules au microscope.'],[
 Q('La cellule est…',['l’unité de base du vivant','un organe','un os','un atome'],'l’unité de base du vivant','Tout être vivant est fait de cellules.'),
 Q('Quel élément contient l’information génétique ?',['le noyau','la membrane','la paroi','le cytoplasme'],'le noyau','Le noyau commande la cellule.'),
 Q('Que possède la cellule végétale en plus ?',['des chloroplastes','des os','des poumons','un cœur'],'des chloroplastes','Ils servent à la photosynthèse.'),
 Q('Quel instrument permet d’observer les cellules ?',['le microscope','le thermomètre','la balance','le baromètre'],'le microscope','Il grossit les objets minuscules.')]);
C['s7|sc|4']=M(['Les aliments apportent des nutriments : glucides (énergie), lipides (réserves), protides (construction), vitamines et sels minéraux (protection) et eau. La digestion les transforme en éléments assez petits pour passer dans le sang.','L’absorption se fait surtout dans l’intestin grêle.'],[
 Q('Quels nutriments servent à construire le corps ?',['les protides','l’eau seule','les glucides','l’air'],'les protides','Viande, poisson, haricots.'),
 Q('Où se fait surtout l’absorption des nutriments ?',['dans l’intestin grêle','dans l’estomac seulement','dans la bouche','dans les poumons'],'dans l’intestin grêle','Ses parois laissent passer les nutriments.'),
 Q('Quel aliment est riche en glucides ?',['le manioc','l’huile pure','l’eau','le sel'],'le manioc','Manioc, riz, banane plantain.'),
 Q('Que fait la digestion ?',['elle transforme les aliments en nutriments','elle fabrique de l’air','elle fait grandir les os directement','elle supprime la faim sans aliments'],'elle transforme les aliments en nutriments','Mastication, estomac, intestin.')]);
C['s7|sc|5']=M(['Par la respiration, le corps prend du dioxygène (O₂) dans l’air et rejette du dioxyde de carbone (CO₂). L’air passe par le nez, la trachée, les bronches et les alvéoles des poumons, où le sang s’enrichit en oxygène.','Les muscles utilisent l’oxygène pour produire de l’énergie.'],[
 Q('Quel gaz le corps prend-il dans l’air ?',['le dioxygène','le dioxyde de carbone','l’azote seul','l’hydrogène'],'le dioxygène','L’oxygène sert aux cellules.'),
 Q('Où se font les échanges gazeux ?',['dans les alvéoles','dans l’estomac','dans le foie','dans les reins'],'dans les alvéoles','Au bout des bronches.'),
 Q('Quel gaz rejette-t-on en expirant ?',['le dioxyde de carbone','le dioxygène pur','l’hydrogène','l’hélium'],'le dioxyde de carbone','Déchet de la respiration.'),
 Q('Quel organe est le siège de la respiration ?',['les poumons','le cœur','le foie','le cerveau'],'les poumons','Ils sont protégés par les côtes.')]);
C['s7|sc|6']=M(['Une force peut mettre en mouvement, arrêter, déformer ou changer la direction d’un objet. Elle se mesure en newtons (N) avec un dynamomètre. Le poids P = m × g, avec g ≈ 10 N/kg.','La vitesse est la distance parcourue divisée par le temps : v = d ÷ t.'],[
 Q('Quelle est l’unité de force ?',['le newton','le kilogramme','le mètre','le litre'],'le newton','Symbole N.'),
 Q('Quel est le poids d’une masse de 5 kg (g = 10 N/kg) ?',['50 N','5 N','15 N','0,5 N'],'50 N','5 × 10 = 50.'),
 Q('Un cycliste parcourt 30 km en 2 h. Sa vitesse ?',['15 km/h','60 km/h','32 km/h','28 km/h'],'15 km/h','30 ÷ 2 = 15.'),
 Q('Quel appareil mesure une force ?',['le dynamomètre','le thermomètre','le baromètre','la balance de marché seulement'],'le dynamomètre','Un ressort gradué.')]);
C['s7|sc|7']=M(['Un circuit électrique simple comprend un générateur (pile), un récepteur (lampe) et des fils, avec un interrupteur. Il doit être fermé pour que le courant circule.','Les conducteurs (métaux) laissent passer le courant ; les isolants (plastique, bois sec, verre) ne le laissent pas passer.'],[
 Q('Pour que la lampe brille, le circuit doit être…',['fermé','ouvert','coupé','vide'],'fermé','Le courant circule en boucle.'),
 Q('Quel matériau est un bon conducteur ?',['le cuivre','le plastique','le verre','le bois sec'],'le cuivre','Les métaux conduisent.'),
 Q('Quel est le rôle de l’interrupteur ?',['ouvrir ou fermer le circuit','produire du courant','faire de la lumière','refroidir'],'ouvrir ou fermer le circuit','Il commande le passage du courant.'),
 Q('Quel élément est un générateur ?',['la pile','la lampe','le fil','l’interrupteur'],'la pile','Elle fournit l’énergie électrique.')]);
J7['s7|sc|7']=[TRI('Conducteur ou isolant ? Range chaque matériau.',['Conducteur','Isolant'],[['cuivre','Conducteur'],['plastique','Isolant'],['fer','Conducteur'],['verre','Isolant'],['aluminium','Conducteur'],['caoutchouc','Isolant']])];
C['s7|sc|8']=M(['La lumière se propage en ligne droite, très vite : environ 300 000 km par seconde. Un objet opaque arrête la lumière et fait une ombre. Un miroir réfléchit la lumière.','Un prisme ou une goutte d’eau décomposent la lumière blanche en couleurs : c’est l’arc-en-ciel.'],[
 Q('La lumière se propage…',['en ligne droite','en zigzag','en cercle','à l’envers'],'en ligne droite','C’est ce qui forme les ombres.'),
 Q('Que forme un objet opaque éclairé ?',['une ombre','un arc-en-ciel','un miroir','de la chaleur seule'],'une ombre','Il arrête la lumière.'),
 Q('Qu’est-ce qu’un arc-en-ciel ?',['la décomposition de la lumière blanche','un nuage coloré','un reflet de la mer','un feu de brousse'],'la décomposition de la lumière blanche','Gouttes d’eau et soleil.'),
 Q('Un miroir…',['réfléchit la lumière','absorbe toute la lumière','produit de la lumière','arrête le son seulement'],'réfléchit la lumière','Il renvoie les rayons.')]);
C['s7|sc|9']=M(['Le développement durable répond aux besoins d’aujourd’hui sans compromettre ceux des générations futures. Il tient compte de l’économie, du social et de l’environnement.','Gestes utiles : trier et recycler, économiser l’eau et l’énergie, reboiser, éviter le plastique.'],[
 Q('Que veut dire développement durable ?',['préserver les ressources pour demain','tout consommer vite','ne plus rien produire','polluer plus'],'préserver les ressources pour demain','Penser aux générations futures.'),
 Q('Quel geste protège la forêt ?',['reboiser','brûler les arbres','couper sans replanter','jeter des déchets'],'reboiser','Planter des arbres.'),
 Q('Quelle énergie est renouvelable ?',['le solaire','le charbon','le pétrole','le gaz fossile'],'le solaire','Le soleil ne s’épuise pas.'),
 Q('Que faire des déchets plastiques ?',['les trier et les recycler','les brûler dans la rue','les jeter au fleuve','les enterrer dans le jardin voisin'],'les trier et les recycler','Éviter la pollution.')]);

// ---------------- Histoire, géographie et civisme ----------------
C['s7|hg|0']=M(['Avant la colonisation, l’Afrique comptait de grands royaumes et empires : Ghana, Mali (Mansa Moussa), Songhaï, ainsi que, en Afrique centrale, les royaumes Kongo, Luba, Lunda et Kuba. Le commerce transsaharien échangeait or, sel et étoffes.','La traite des esclaves a ensuite saigné le continent.'],[
 Q('Quel empereur du Mali est célèbre pour sa richesse ?',['Mansa Moussa','Léopold II','Napoléon','Cléopâtre'],'Mansa Moussa','Son pèlerinage à La Mecque (1324) est resté célèbre.'),
 Q('Quel royaume existait en Afrique centrale ?',['le royaume Kongo','l’empire Ottoman','le royaume de Prusse','l’empire Inca'],'le royaume Kongo','Le royaume Kongo.'),
 Q('Que transportait-on dans le commerce transsaharien ?',['de l’or et du sel','des voitures','des ordinateurs','du pétrole'],'de l’or et du sel','Par caravanes de chameaux.'),
 Q('Quel mot désigne la déportation d’Africains vers l’Amérique ?',['la traite négrière','le commerce équitable','l’exode rural','l’exploration'],'la traite négrière','Un crime contre l’humanité.')]);
C['s7|hg|1']=M(['La conférence de Berlin (1884-1885) attribue le Congo à Léopold II, qui crée l’État indépendant du Congo. La population subit les travaux forcés (caoutchouc, ivoire). En 1908, la Belgique reprend le pays : le Congo belge.','Des Congolais ont résisté, par exemple Simon Kimbangu.'],[
 Q('À qui le Congo est-il confié à Berlin ?',['à Léopold II','à Napoléon III','au Portugal','à la Reine Victoria'],'à Léopold II','Roi des Belges.'),
 Q('En quelle année le Congo devient-il colonie belge ?',['1908','1960','1885','1997'],'1908','L’État indépendant devient le Congo belge.'),
 Q('Quelle ressource a causé des abus sous Léopold II ?',['le caoutchouc','le café seul','le coton seul','l’huile de palme seule'],'le caoutchouc','Récolte forcée.'),
 Q('Qui fut un grand résistant spirituel et anticolonial ?',['Simon Kimbangu','Stanley','Léopold II','Mobutu'],'Simon Kimbangu','Fondateur du kimbanguisme.')]);
C['s7|hg|2']=M(['Le 30 juin 1960, la RDC devient indépendante : Kasa-Vubu est président et Patrice Lumumba Premier ministre. Le pays traverse des crises (mutinerie, sécession du Katanga). Lumumba est assassiné en janvier 1961. Mobutu prend le pouvoir en 1965.','De 1971 à 1997, le pays s’appelle Zaïre.'],[
 Q('Quelle est la date de l’indépendance ?',['le 30 juin 1960','le 17 mai 1997','le 1er janvier 1900','le 24 novembre 1965'],'le 30 juin 1960','Fête nationale.'),
 Q('Qui fut le premier Premier ministre ?',['Patrice Lumumba','Joseph Kasa-Vubu','Mobutu','Moïse Tshombe'],'Patrice Lumumba','Héros de l’indépendance.'),
 Q('Quelle province a fait sécession en 1960 ?',['le Katanga','le Kongo central','l’Ituri','le Kasaï'],'le Katanga','Avec Moïse Tshombe.'),
 Q('Quel nom porte le pays de 1971 à 1997 ?',['Zaïre','Congo belge','Katanga','Kivu'],'Zaïre','Sous Mobutu.')]);
C['s7|hg|3']=M(['L’Afrique est le deuxième continent par la taille. Le Sahara est le plus grand désert chaud, le Nil le plus long fleuve, le Congo le plus puissant fleuve d’Afrique, le Kilimandjaro le plus haut sommet (5 895 m). L’équateur traverse le continent, qui compte donc des climats équatorial, tropical, désertique et méditerranéen.','Les grands lacs : Victoria, Tanganyika, Malawi.'],[
 Q('Quel est le plus long fleuve d’Afrique ?',['le Nil','le Congo','le Niger','le Zambèze'],'le Nil','Environ 6 650 km.'),
 Q('Quel est le plus haut sommet d’Afrique ?',['le Kilimandjaro','le mont Stanley','le mont Nyiragongo','le mont Kenya'],'le Kilimandjaro','5 895 m.'),
 Q('Quel est le plus grand désert chaud ?',['le Sahara','le Kalahari','le Namib','le Gobi'],'le Sahara','Au nord du continent.'),
 Q('Quel climat règne près de l’équateur ?',['équatorial','désertique','polaire','méditerranéen'],'équatorial','Chaud et humide toute l’année.')]);
C['s7|hg|4']=M(['La RDC compte plus de 100 millions d’habitants, une population très jeune. Sa capitale est Kinshasa. Elle a 26 provinces et quatre langues nationales : le lingala, le swahili, le kikongo et le tshiluba ; le français est la langue officielle.','Le pays compte plus de 200 groupes ethniques.'],[
 Q('Quelle est la capitale de la RDC ?',['Kinshasa','Lubumbashi','Goma','Kisangani'],'Kinshasa','Sur le fleuve Congo.'),
 Q('Combien de langues nationales la RDC compte-t-elle ?',['4','2','10','1'],'4','Lingala, swahili, kikongo, tshiluba.'),
 Q('Quelle est la langue officielle ?',['le français','l’anglais','le portugais','l’arabe'],'le français','Utilisé dans l’administration et l’école.'),
 Q('Combien de provinces compte la RDC ?',['26','11','6','54'],'26','Depuis le découpage de 2015.')]);
J7['s7|hg|4']=[TRI('Langue nationale ou langue officielle ? Range chaque langue.',['Langue nationale','Langue officielle'],[['lingala','Langue nationale'],['français','Langue officielle'],['swahili','Langue nationale'],['kikongo','Langue nationale'],['tshiluba','Langue nationale']])];
C['s7|hg|5']=M(['La RDC est un « scandale géologique » : cuivre et cobalt du Katanga, diamants du Kasaï, or, coltan, étain. Elle possède aussi d’immenses forêts, des terres fertiles et le potentiel hydroélectrique d’Inga.','Malgré ces richesses, beaucoup de Congolais restent pauvres : il faut mieux gérer et transformer sur place.'],[
 Q('Quel minerai est abondant dans le Katanga ?',['le cuivre et le cobalt','le charbon de bois','le sel marin','le sable noir seul'],'le cuivre et le cobalt','Ceinture de cuivre.'),
 Q('Où trouve-t-on surtout le diamant ?',['au Kasaï','en Ituri','au Kongo central','à Kinshasa'],'au Kasaï','Mbuji-Mayi, Tshikapa.'),
 Q('Que produit Inga ?',['de l’électricité','du cuivre','du coton','du pétrole'],'de l’électricité','Hydroélectricité.'),
 Q('Pourquoi transformer les minerais sur place ?',['pour gagner plus et créer des emplois','pour polluer plus','pour fermer les usines','pour rien'],'pour gagner plus et créer des emplois','La valeur ajoutée reste dans le pays.')]);
C['s7|hg|6']=M(['La Déclaration universelle des droits de l’homme a été adoptée par l’ONU en 1948. La Convention relative aux droits de l’enfant date de 1989. Droits fondamentaux : vie, éducation, santé, liberté d’expression, égalité.','Chaque droit s’accompagne de devoirs : respecter la loi et les autres.'],[
 Q('Quelle organisation a adopté la Déclaration universelle de 1948 ?',['l’ONU','la FIFA','l’OMS','l’UNESCO seule'],'l’ONU','Organisation des Nations unies.'),
 Q('Quel est un droit de l’enfant ?',['aller à l’école','travailler dans une mine','être frappé','être abandonné'],'aller à l’école','Droit à l’éducation.'),
 Q('Les droits humains sont…',['les mêmes pour tous','réservés aux riches','réservés aux adultes','réservés aux chefs'],'les mêmes pour tous','Ils sont universels.'),
 Q('Que faire face à une injustice ?',['la signaler à une personne responsable','la cacher','y participer','s’en moquer'],'la signaler à une personne responsable','Une action responsable.')]);
C['s7|hg|7']=M(['Le citoyen vote à partir de 18 ans, respecte la loi, paie ses impôts et protège les biens publics. Les élections permettent de choisir ses représentants.','La responsabilité, c’est assumer ses actes et participer à la vie de la communauté.'],[
 Q('À quel âge peut-on voter en RDC ?',['18 ans','12 ans','15 ans','25 ans'],'18 ans','Majorité électorale.'),
 Q('À quoi servent les impôts ?',['à financer les services publics','à enrichir une seule personne','à rien','à acheter des bonbons'],'à financer les services publics','Écoles, routes, hôpitaux.'),
 Q('Quel geste est civique ?',['protéger les biens publics','casser un banc','jeter des déchets partout','tricher à un examen'],'protéger les biens publics','Un bien public est à tous.'),
 Q('Pourquoi voter ?',['pour choisir ses représentants','pour recevoir un cadeau','pour rien','pour obliger les voisins'],'pour choisir ses représentants','Le vote exprime la volonté du peuple.')]);
