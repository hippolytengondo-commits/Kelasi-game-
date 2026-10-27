import {Q} from './data.js';

// 8e année : 38 missions jouables (français 10, mathématiques 12, sciences 10, orientation 6).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
export const C8={},J8={},K8={};
const C=C8;

// ---------------- Français ----------------
C['s8|fr|0']=M(['Une proposition subordonnée dépend d’une principale. Trois grands types : la relative (introduite par qui, que, dont, où), la complétive (introduite par que) et la circonstancielle (quand, parce que, si, pour que…).','Exemple : « Le livre que tu lis est passionnant » : « que tu lis » est une relative.'],[
 Q('Dans « La femme qui chante est ma tante », « qui chante » est une subordonnée…',['relative','complétive','circonstancielle de temps','indépendante'],'relative','Elle complète le nom « femme ».'),
 Q('Dans « Je crois que tu as raison », « que tu as raison » est une subordonnée…',['complétive','relative','circonstancielle de cause','principale'],'complétive','Elle complète le verbe « crois ».'),
 Q('Dans « Il sort parce qu’il pleut plus », la subordonnée exprime…',['la cause','le but','le temps','l’opposition'],'la cause','« parce que » introduit la cause.'),
 Q('Quel mot introduit une subordonnée de temps ?',['quand','parce que','pour que','bien que'],'quand','« quand », « lorsque », « pendant que ».')]);
C['s8|fr|1']=M(['Du discours direct au discours indirect : on supprime les guillemets, on ajoute « que » (ou « si », « de »), les pronoms et les temps s’adaptent, les indications de temps changent (demain → le lendemain).','Direct : Il dit : « Je viendrai demain. » Indirect : Il dit qu’il viendra le lendemain.'],[
 Q('Mets au discours indirect : Elle dit : « Je suis fatiguée. »',['Elle dit qu’elle est fatiguée.','Elle dit : elle est fatiguée.','Elle dit que je suis fatiguée.','Elle dit fatiguée.'],'Elle dit qu’elle est fatiguée.','« Je » devient « elle ».'),
 Q('Mets au discours indirect : Il demande : « Viens-tu ? »',['Il demande si tu viens.','Il demande que tu viens.','Il demande viens-tu.','Il demande de venir tu.'],'Il demande si tu viens.','Question → « si ».'),
 Q('« Demain » devient, au passé indirect…',['le lendemain','hier','aujourd’hui','la veille'],'le lendemain','Concordance des repères temporels.'),
 Q('Mets au discours direct : Il dit qu’il a faim.',['Il dit : « J’ai faim. »','Il dit : « Il a faim. »','Il dit : « Tu as faim. »','Il dit « faim ».'],'Il dit : « J’ai faim. »','Le pronom change à nouveau.')]);
C['s8|fr|2']=M(['Les temps du passé : l’imparfait (description, habitude), le passé composé (action achevée liée au présent), le passé simple (récit écrit) et le plus-que-parfait (action antérieure).','La concordance des temps garde la logique entre les actions.'],[
 Q('Complète : « Quand j’étais petit, je (jouer) … au ballon chaque jour. »',['jouais','jouai','ai joué','jouerai'],'jouais','Habitude passée : imparfait.'),
 Q('Complète : « Hier, elle (finir) … son devoir. »',['a fini','finissait','finira','finit-elle'],'a fini','Action achevée : passé composé.'),
 Q('Il (partir) … déjà quand tu es arrivé. Quel temps ?',['plus-que-parfait : était parti','futur : partira','présent : part','impératif : pars'],'plus-que-parfait : était parti','Action antérieure à une autre.'),
 Q('Quel temps convient pour un récit écrit littéraire ?',['le passé simple','le futur antérieur','l’impératif','le présent de vérité'],'le passé simple','Il raconte les actions principales.')]);
C['s8|fr|3']=M(['Les figures de style donnent de la force au texte : comparaison (« fort comme un lion »), métaphore (« cet homme est un lion »), personnification (« la nuit nous enveloppe »), hyperbole (exagération), antithèse (opposition), périphrase.','Elles créent des images et des émotions.'],[
 Q('« Il est fort comme un lion » est…',['une comparaison','une métaphore','une hyperbole','une antithèse'],'une comparaison','Elle emploie « comme ».'),
 Q('« Cet enfant est un soleil » est…',['une métaphore','une comparaison','une litote','une périphrase'],'une métaphore','Pas de mot de comparaison.'),
 Q('« J’ai mille choses à faire » est…',['une hyperbole','une antithèse','une personnification','une comparaison'],'une hyperbole','Exagération.'),
 Q('« La lune sourit » est…',['une personnification','une hyperbole','une antithèse','une comparaison'],'une personnification','On donne un trait humain à une chose.')]);
J8['s8|fr|3']=[TRI('Comparaison ou métaphore ? Range chaque phrase.',['Comparaison','Métaphore'],[['Il est rapide comme l’éclair.','Comparaison'],['Cet homme est un lion.','Métaphore'],['Elle chante comme un oiseau.','Comparaison'],['La vie est un voyage.','Métaphore']])];
C['s8|fr|4']=M(['Analyser un texte littéraire, c’est lire à plusieurs niveaux : le sens (de quoi parle-t-il ?), la forme (genre, registre, procédés), l’intention de l’auteur.','On cite le texte pour justifier ses réponses, entre guillemets.'],[
 Q('Un registre comique cherche à…',['faire rire','faire peur','faire pleurer','informer sec'],'faire rire','Comique, tragique, pathétique, lyrique…'),
 Q('Pour justifier une réponse sur un texte, on…',['cite un passage','invente un passage','se tait','change de texte'],'cite un passage','On appuie la réponse sur le texte.'),
 Q('Le registre lyrique exprime…',['des sentiments personnels','des lois','des recettes','des chiffres'],'des sentiments personnels','Joie, tristesse, amour.'),
 Q('Quel est le but d’un texte argumentatif ?',['convaincre','amuser seulement','décrire un paysage','faire une liste'],'convaincre','On défend une thèse.')]);
C['s8|fr|5']=M(['Un roman ou une nouvelle suit un schéma narratif : situation initiale, élément perturbateur, péripéties, dénouement, situation finale. Le point de vue peut être interne, externe ou omniscient.','La nouvelle est plus courte que le roman et se concentre sur un seul événement.'],[
 Q('Quel point de vue connaît les pensées de tous ?',['omniscient','externe','interne seulement','aucun'],'omniscient','Le narrateur sait tout.'),
 Q('Qu’est-ce qui change la situation initiale ?',['l’élément perturbateur','la situation finale','le titre','la dédicace'],'l’élément perturbateur','Il lance l’intrigue.'),
 Q('La nouvelle est…',['un récit court','un très long roman','un poème','une pièce de théâtre'],'un récit court','Peu de personnages, une seule intrigue.'),
 Q('Le dénouement est…',['la résolution de l’intrigue','le début du récit','la préface','l’illustration'],'la résolution de l’intrigue','Les problèmes se résolvent.')]);
C['s8|fr|6']=M(['Le résumé de texte réduit un texte à un quart ou un tiers, sans ajouter d’avis personnel, en conservant l’ordre des idées. On repère le plan, on supprime exemples, citations et répétitions.','On emploie ses propres mots et des connecteurs logiques.'],[
 Q('Peut-on ajouter son opinion dans un résumé ?',['non','oui toujours','seulement à la fin','oui en début'],'non','Il rapporte les idées de l’auteur.'),
 Q('Que supprime-t-on d’un texte pour le résumer ?',['les exemples et répétitions','l’idée centrale','la thèse','la logique'],'les exemples et répétitions','On garde l’essentiel.'),
 Q('Dans quel ordre présente-t-on les idées ?',['dans l’ordre du texte','dans l’ordre inverse','au hasard','par taille de mot'],'dans l’ordre du texte','On respecte le plan.'),
 Q('Un texte de 400 mots résumé au quart fait environ…',['100 mots','200 mots','300 mots','40 mots'],'100 mots','400 ÷ 4 = 100.')]);
C['s8|fr|7']=M(['La dissertation littéraire discute une affirmation sur une œuvre ou un thème. Plan : introduction (amorce, sujet, problématique, annonce du plan), développement (deux ou trois parties avec arguments et exemples littéraires), conclusion (bilan, ouverture).','On cite des œuvres pour appuyer les arguments.'],[
 Q('Que contient l’introduction ?',['le sujet et la problématique','tous les exemples','la bibliographie complète','rien'],'le sujet et la problématique','Elle présente et annonce le plan.'),
 Q('Qu’est-ce qu’une problématique ?',['la question à laquelle on répond','une réponse toute faite','un titre décoratif','une citation seule'],'la question à laquelle on répond','Elle guide la réflexion.'),
 Q('Comment appuie-t-on un argument littéraire ?',['avec un exemple tiré d’une œuvre','avec une rumeur','sans exemple','avec un dessin'],'avec un exemple tiré d’une œuvre','L’exemple prouve l’argument.'),
 Q('La conclusion contient…',['un bilan et une ouverture','un nouvel argument long','un nouvel exemple','la préface'],'un bilan et une ouverture','On répond à la problématique.')]);
C['s8|fr|8']=M(['La dissertation argumentative défend une thèse avec des arguments et des exemples. On peut suivre le plan thèse – antithèse – synthèse, ou un plan dialectique : oui, mais, donc.','Les connecteurs logiques (d’abord, en effet, cependant, enfin) structurent le raisonnement.'],[
 Q('Que présente la thèse ?',['l’opinion défendue','l’opinion contraire','la conclusion','le titre'],'l’opinion défendue','La thèse est la position soutenue.'),
 Q('Que présente l’antithèse ?',['l’opinion contraire','la conclusion','la thèse','le titre'],'l’opinion contraire','Elle s’oppose à la thèse.'),
 Q('Quel connecteur marque l’opposition ?',['cependant','en effet','d’abord','donc'],'cependant','Il oppose deux idées.'),
 Q('Que fait la synthèse ?',['elle dépasse l’opposition','elle répète la thèse','elle supprime les arguments','elle commence le texte'],'elle dépasse l’opposition','Elle réconcilie les points de vue.')]);
C['s8|fr|9']=M(['Un exposé oral se prépare : choisir un sujet, rassembler des informations fiables, faire un plan, s’entraîner. Dans un débat, on respecte la parole de l’autre et on argumente.','Le regard, la voix et le geste soutiennent le message.'],[
 Q('Comment préparer un exposé ?',['avec un plan et des fiches','sans aucune préparation','en copiant tout','en lisant sans regarder'],'avec un plan et des fiches','Un plan structure la parole.'),
 Q('Dans un débat, on…',['argumente et respecte l’autre','coupe toujours la parole','insulte','se tait toujours'],'argumente et respecte l’autre','Le débat est un échange d’idées.'),
 Q('Que fait un bon orateur avec son public ?',['il le regarde','il lui tourne le dos','il lit sans lever les yeux','il murmure'],'il le regarde','Le contact visuel crée le lien.'),
 Q('Comment vérifier une information ?',['avec plusieurs sources fiables','avec une rumeur','avec une seule publicité','on ne vérifie pas'],'avec plusieurs sources fiables','Croiser les sources.')]);

// ---------------- Mathématiques ----------------
C['s8|ma|0']=M(['Règles des puissances : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐˣⁿ ; a⁻ⁿ = 1/aⁿ. Pour les racines : √(a × b) = √a × √b.','Exemple : 2³ × 2⁴ = 2⁷ = 128 et √12 = √(4 × 3) = 2√3.'],[
 Q('2³ × 2⁴ = ?',['2⁷','2¹²','4⁷','2¹'],'2⁷','On additionne les exposants : 3 + 4 = 7.'),
 Q('(3²)³ = ?',['3⁶','3⁵','3⁸','9⁵'],'3⁶','On multiplie les exposants : 2 × 3 = 6.'),
 Q('10⁻² = ?',['0,01','−100','0,1','−20'],'0,01','10⁻² = 1/100.'),
 Q('√36 × √4 = ?',['12','10','40','24'],'12','6 × 2 = 12, ou √144 = 12.')]);
C['s8|ma|1']=M(['Identités remarquables : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².','Elles servent à développer et à factoriser rapidement.'],[
 Q('(x + 3)² = ?',['x² + 6x + 9','x² + 9','x² + 3x + 9','x² + 6x + 3'],'x² + 6x + 9','a² + 2ab + b².'),
 Q('(x − 2)² = ?',['x² − 4x + 4','x² − 4','x² + 4x + 4','x² − 2x + 4'],'x² − 4x + 4','a² − 2ab + b².'),
 Q('(x + 5)(x − 5) = ?',['x² − 25','x² + 25','x² − 10x + 25','x² + 10x − 25'],'x² − 25','a² − b².'),
 Q('Calcule 101² avec (100 + 1)².',['10 201','10 101','10 001','1 201'],'10 201','10 000 + 200 + 1.')]);
C['s8|ma|2']=M(['Pour résoudre une équation, on isole l’inconnue. Une inéquation se résout de la même manière, mais quand on multiplie ou divise par un nombre négatif, le sens de l’inégalité change.','Exemple : −2x > 6 donne x < −3.'],[
 Q('Résous : 2x + 3 = 11',['x = 4','x = 7','x = 14','x = 5'],'x = 4','2x = 8, x = 4.'),
 Q('Résous : 3x − 7 < 8',['x < 5','x > 5','x < 1','x < 15'],'x < 5','3x < 15, donc x < 5.'),
 Q('Résous : −2x > 6',['x < −3','x > −3','x > 3','x < 3'],'x < −3','On divise par −2 : le sens change.'),
 Q('Résous : x/2 = 9',['x = 18','x = 4,5','x = 11','x = 7'],'x = 18','9 × 2 = 18.')]);
C['s8|ma|3']=M(['Un système de deux équations à deux inconnues se résout par substitution (on remplace une inconnue) ou par combinaison (on additionne ou soustrait les équations).','Exemple : x + y = 10 et x − y = 2 : en additionnant, 2x = 12, donc x = 6 et y = 4.'],[
 Q('x + y = 10 et x − y = 2. Que vaut x ?',['6','4','8','5'],'6','2x = 12, donc x = 6.'),
 Q('Avec x + y = 10 et x = 6, que vaut y ?',['4','16','6','2'],'4','10 − 6 = 4.'),
 Q('2x + y = 7 et y = 1. Que vaut x ?',['3','4','2','6'],'3','2x = 6, donc x = 3.'),
 Q('x + y = 12 et x = 2y. Que vaut y ?',['4','6','8','3'],'4','2y + y = 12, donc y = 4.')]);
C['s8|ma|4']=M(['Une fonction linéaire s’écrit f(x) = ax. Elle traduit une proportionnalité. Sa représentation graphique est une droite qui passe par l’origine ; a est le coefficient.','Exemple : f(x) = 3x donne f(4) = 12.'],[
 Q('Si f(x) = 3x, que vaut f(4) ?',['12','7','34','1'],'12','3 × 4 = 12.'),
 Q('Si f(x) = −2x, que vaut f(5) ?',['−10','10','−7','3'],'−10','−2 × 5.'),
 Q('Si f(2) = 10 pour une fonction linéaire, le coefficient vaut…',['5','8','12','20'],'5','10 ÷ 2 = 5.'),
 Q('La droite d’une fonction linéaire passe par…',['l’origine','le point (0 ; 1)','le point (1 ; 0)','aucun point fixe'],'l’origine','f(0) = 0.')]);
C['s8|ma|5']=M(['Une fonction affine s’écrit f(x) = ax + b. Sa représentation est une droite : a est le coefficient directeur (pente) et b l’ordonnée à l’origine (valeur en x = 0).','Exemple : f(x) = 2x + 1 donne f(3) = 7.'],[
 Q('Si f(x) = 2x + 1, que vaut f(3) ?',['7','6','5','9'],'7','2 × 3 + 1.'),
 Q('Si f(x) = −x + 4, que vaut f(0) ?',['4','−4','0','1'],'4','b = 4.'),
 Q('Antécédent de 9 par f(x) = 2x + 1 ?',['4','5','19','10'],'4','2x + 1 = 9, donc x = 4.'),
 Q('Une droite passe par (0 ; 1) et (2 ; 5). Son coefficient directeur ?',['2','4','1','5'],'2','(5 − 1) ÷ (2 − 0).')]);
C['s8|ma|6']=M(['Cercle : le diamètre vaut deux fois le rayon. Périmètre = 2 × π × r ; aire du disque = π × r². Une tangente est perpendiculaire au rayon au point de contact. Un angle inscrit vaut la moitié de l’angle au centre qui intercepte le même arc.','On prend π ≈ 3,14 ou 22/7.'],[
 Q('Rayon 7 cm. Périmètre du cercle avec π ≈ 22/7 ?',['44 cm','22 cm','154 cm','14 cm'],'44 cm','2 × 22/7 × 7 = 44.'),
 Q('Rayon 7 cm. Aire du disque avec π ≈ 22/7 ?',['154 cm²','44 cm²','49 cm²','22 cm²'],'154 cm²','22/7 × 49 = 154.'),
 Q('Une tangente est ___ au rayon au point de contact.',['perpendiculaire','parallèle','égale','tournante'],'perpendiculaire','Elle forme un angle droit.'),
 Q('Un angle au centre vaut 80°. L’angle inscrit qui intercepte le même arc vaut…',['40°','160°','80°','20°'],'40°','La moitié de l’angle au centre.')]);
C['s8|ma|7']=M(['Théorème de Thalès : si (MN) est parallèle à (BC) dans le triangle ABC, alors AM/AB = AN/AC = MN/BC. La réciproque de Pythagore permet de démontrer qu’un triangle est rectangle : si a² + b² = c², il est rectangle.','Exemple : 6, 8 et 10 : 36 + 64 = 100 donc rectangle.'],[
 Q('AM = 2, AB = 6, AN = 3. Que vaut AC (MN parallèle à BC) ?',['9','6','18','5'],'9','AN/AC = AM/AB = 1/3 donc AC = 9.'),
 Q('AM/AB = 1/3 et MN = 4. Que vaut BC ?',['12','4/3','8','7'],'12','BC = 3 × MN = 12.'),
 Q('Le triangle de côtés 6, 8 et 10 est…',['rectangle','équilatéral','isocèle non rectangle','impossible'],'rectangle','6² + 8² = 100 = 10².'),
 Q('Hypoténuse si les côtés de l’angle droit valent 7 et 24 ?',['25','31','26','17'],'25','49 + 576 = 625 ; √625 = 25.')]);
C['s8|ma|8']=M(['Un vecteur est défini par une direction, un sens et une norme (longueur). Dans un repère, le vecteur AB a pour coordonnées (xB − xA ; yB − yA). Deux vecteurs égaux ont mêmes coordonnées.','On additionne deux vecteurs en additionnant leurs coordonnées.'],[
 Q('A(1 ; 2) et B(4 ; 6). Coordonnées de AB ?',['(3 ; 4)','(5 ; 8)','(−3 ; −4)','(4 ; 3)'],'(3 ; 4)','(4 − 1 ; 6 − 2).'),
 Q('Norme du vecteur (3 ; 4) ?',['5','7','12','25'],'5','√(9 + 16) = 5.'),
 Q('(1 ; 2) + (3 ; −1) = ?',['(4 ; 1)','(3 ; −2)','(4 ; 3)','(2 ; 3)'],'(4 ; 1)','On additionne coordonnée par coordonnée.'),
 Q('Deux vecteurs égaux ont…',['mêmes direction, sens et norme','des sens opposés','des normes différentes','aucun point commun'],'mêmes direction, sens et norme','C’est la définition.')]);
C['s8|ma|9']=M(['En statistiques : l’effectif est le nombre de fois qu’une valeur apparaît, la fréquence est l’effectif divisé par l’effectif total (en %). La moyenne pondérée tient compte des effectifs.','Un diagramme circulaire de 360° : 25 % correspondent à 90°.'],[
 Q('5 élèves sur 20 ont choisi le football. Fréquence ?',['25 %','5 %','20 %','50 %'],'25 %','5 ÷ 20 = 0,25.'),
 Q('Notes : 10 (deux fois) et 16 (une fois). Moyenne ?',['12','13','14','10'],'12','(10 + 10 + 16) ÷ 3 = 12.'),
 Q('Quel angle représente 25 % dans un diagramme circulaire ?',['90°','25°','45°','180°'],'90°','360 × 0,25.'),
 Q('Médiane de 1, 3, 5, 7 ?',['4','3','5','16'],'4','Moyenne des deux valeurs centrales : (3 + 5) ÷ 2.')]);
C['s8|ma|10']=M(['La probabilité d’un événement est un nombre entre 0 et 1 : nombre de cas favorables ÷ nombre de cas possibles. Un événement impossible a pour probabilité 0, un événement certain 1.','Exemple : lancer un dé, obtenir 6 : 1/6.'],[
 Q('Probabilité d’obtenir « pile » avec une pièce équilibrée ?',['1/2','1','1/4','2'],'1/2','Un cas favorable sur deux.'),
 Q('Probabilité d’obtenir un nombre pair avec un dé ?',['1/2','1/6','1/3','2/3'],'1/2','2, 4, 6 : trois cas sur six.'),
 Q('Un sac contient 3 billes rouges et 2 bleues. Probabilité de tirer une rouge ?',['3/5','2/5','1/2','3/2'],'3/5','3 cas favorables sur 5.'),
 Q('Quelle probabilité ne peut pas exister ?',['1,5','0','0,5','1'],'1,5','Une probabilité est comprise entre 0 et 1.')]);
C['s8|ma|11']=M(['Problèmes de synthèse : on traduit l’énoncé en équation ou en système, on résout, puis on vérifie que la solution a un sens dans la situation.','Les théorèmes de Pythagore, de Thalès et les pourcentages reviennent souvent.'],[
 Q('Un père a 3 fois l’âge de son fils. À eux deux, ils ont 48 ans. Âge du fils ?',['12 ans','16 ans','24 ans','9 ans'],'12 ans','x + 3x = 48, donc x = 12.'),
 Q('Un article à 50 $ avec une taxe de 16 %. Prix final ?',['58 $','66 $','56 $','50,16 $'],'58 $','16 % de 50 = 8 ; 50 + 8 = 58.'),
 Q('Rectangle de périmètre 36 m, longueur = 2 × largeur. Largeur ?',['6 m','12 m','9 m','18 m'],'6 m','2(2l + l) = 36 donc 6l = 36, l = 6.'),
 Q('Une échelle de 5 m, pied à 3 m du mur. Hauteur atteinte ?',['4 m','8 m','2 m','5,8 m'],'4 m','Pythagore : 25 − 9 = 16 ; √16 = 4.')]);

// ---------------- Sciences ----------------
C['s8|sc|0']=M(['Chaque élément chimique est identifié par son numéro atomique (nombre de protons). Le tableau périodique de Mendeleïev classe les éléments par numéro atomique croissant. Un atome neutre a autant de protons que d’électrons.','Un ion est un atome qui a gagné ou perdu des électrons.'],[
 Q('Le numéro atomique correspond au nombre de…',['protons','neutrons seulement','molécules','cellules'],'protons','Il identifie l’élément.'),
 Q('Un atome neutre possède…',['autant de protons que d’électrons','plus de protons','seulement des neutrons','aucun électron'],'autant de protons que d’électrons','Les charges s’annulent.'),
 Q('Qui a créé le tableau périodique ?',['Mendeleïev','Newton','Pasteur','Einstein'],'Mendeleïev','Dmitri Mendeleïev.'),
 Q('Un ion est un atome qui a…',['gagné ou perdu des électrons','perdu son noyau','changé de couleur','fondu'],'gagné ou perdu des électrons','Il porte une charge.')]);
C['s8|sc|1']=M(['Dans une réaction chimique, les réactifs se transforment en produits. La masse se conserve (Lavoisier) : « Rien ne se perd, rien ne se crée, tout se transforme. » On l’écrit avec une équation : 2 H₂ + O₂ → 2 H₂O.','La combustion et la rouille sont des réactions chimiques.'],[
 Q('Que devient la masse totale dans une réaction ?',['elle se conserve','elle disparaît','elle double','elle devient nulle'],'elle se conserve','Loi de Lavoisier.'),
 Q('Dans 2 H₂ + O₂ → 2 H₂O, l’eau est…',['le produit','le réactif','le catalyseur','le déchet'],'le produit','Elle se forme.'),
 Q('Quel est un exemple de réaction chimique ?',['la rouille du fer','la fonte de la glace','le découpage du papier','le mélange de sable et d’eau'],'la rouille du fer','Le fer réagit avec l’oxygène.'),
 Q('Que faut-il pour une combustion ?',['un combustible et du dioxygène','de l’eau seulement','du froid','du sable'],'un combustible et du dioxygène','Et une chaleur d’allumage.')]);
C['s8|sc|2']=M(['Le pH mesure l’acidité : pH inférieur à 7 = acide (citron, vinaigre), pH égal à 7 = neutre (eau pure), pH supérieur à 7 = basique (savon, eau de javel). On le mesure avec du papier pH.','Un acide mélangé à une base se neutralise en donnant un sel et de l’eau.'],[
 Q('Un liquide de pH 3 est…',['acide','basique','neutre','solide'],'acide','pH inférieur à 7.'),
 Q('L’eau pure a un pH de…',['7','1','14','0'],'7','pH neutre.'),
 Q('Le savon est plutôt…',['basique','acide','solide','gazeux'],'basique','pH supérieur à 7.'),
 Q('Quel produit est acide ?',['le jus de citron','le savon','l’eau de javel','la soude'],'le jus de citron','Il contient de l’acide citrique.')]);
J8['s8|sc|2']=[TRI('Acide ou basique ? Range chaque produit.',['Acide','Basique'],[['citron','Acide'],['savon','Basique'],['vinaigre','Acide'],['soude','Basique'],['jus d’orange','Acide'],['eau de javel','Basique']])];
C['s8|sc|3']=M(['L’hérédité transmet des caractères des parents aux enfants. L’information génétique est portée par l’ADN, organisée en gènes sur les chromosomes. L’être humain a 46 chromosomes (23 paires).','Un caractère peut être dominant ou récessif.'],[
 Q('Combien de chromosomes l’être humain a-t-il dans ses cellules ?',['46','23 seulement','64','100'],'46','23 paires.'),
 Q('Que porte l’information génétique ?',['l’ADN','le sang seul','les os','la peau seulement'],'l’ADN','Les gènes sont des portions d’ADN.'),
 Q('Les caractères hérités passent…',['des parents aux enfants','des voisins aux élèves','des amis aux amis','des écoles aux élèves'],'des parents aux enfants','C’est l’hérédité.'),
 Q('Un gène est…',['une portion d’ADN','une cellule','un organe','un os'],'une portion d’ADN','Il code un caractère.')]);
C['s8|sc|4']=M(['La reproduction humaine suppose des gamètes : le spermatozoïde (père) et l’ovule (mère). Leur union, la fécondation, donne l’œuf qui se développe pendant environ neuf mois de grossesse.','À la puberté, le corps change et devient capable de procréer. Se protéger et se respecter sont essentiels.'],[
 Q('Comment s’appelle l’union du spermatozoïde et de l’ovule ?',['la fécondation','la digestion','la respiration','la circulation'],'la fécondation','Elle donne l’œuf.'),
 Q('Quelle est la durée moyenne d’une grossesse ?',['neuf mois','trois mois','un an','vingt jours'],'neuf mois','Environ 40 semaines.'),
 Q('Qu’est-ce que la puberté ?',['la période des transformations du corps','une maladie','un sport','une fête'],'la période des transformations du corps','Passage de l’enfance à l’adolescence.'),
 Q('Pourquoi consulter un professionnel de santé ?',['pour être bien informé et protégé','pour rien','pour se cacher','pour éviter les médecins'],'pour être bien informé et protégé','La santé demande de bons conseils.')]);
C['s8|sc|5']=M(['Certains microbes (bactéries, virus, parasites) provoquent des maladies. Le corps se défend grâce aux globules blancs et aux anticorps. Le vaccin prépare le système immunitaire.','Le paludisme est transmis par la piqûre de l’anophèle femelle ; on s’en protège avec la moustiquaire.'],[
 Q('Qu’est-ce qui transmet le paludisme ?',['le moustique anophèle','la mouche tsé-tsé','le rat','l’eau potable propre'],'le moustique anophèle','Se protéger : moustiquaire.'),
 Q('Quelles cellules défendent le corps ?',['les globules blancs','les globules rouges seulement','les os','les cheveux'],'les globules blancs','Ils produisent des anticorps.'),
 Q('À quoi sert un vaccin ?',['à préparer le corps contre une maladie','à guérir toutes les maladies','à remplacer les repas','à donner de la force aux muscles'],'à préparer le corps contre une maladie','Il entraîne l’immunité.'),
 Q('Quel geste limite la propagation des microbes ?',['se laver les mains','partager ses couverts sales','jeter des déchets partout','éviter l’eau'],'se laver les mains','L’hygiène protège.')]);
C['s8|sc|6']=M(['Loi d’Ohm : U = R × I (tension en volts, résistance en ohms, intensité en ampères). Dans un circuit en série, l’intensité est la même partout et les tensions s’additionnent ; en dérivation, la tension est la même et les intensités s’additionnent.','Puissance : P = U × I (en watts).'],[
 Q('Tension 12 V, résistance 4 Ω. Intensité ?',['3 A','48 A','8 A','16 A'],'3 A','I = U ÷ R = 12 ÷ 4.'),
 Q('Quelle est l’unité de la résistance ?',['l’ohm','le volt','l’ampère','le watt'],'l’ohm','Symbole Ω.'),
 Q('En série, l’intensité est…',['la même partout','différente partout','nulle','double à chaque lampe'],'la même partout','Un seul chemin pour le courant.'),
 Q('Puissance avec U = 10 V et I = 2 A ?',['20 W','5 W','12 W','8 W'],'20 W','P = U × I.')]);
C['s8|sc|7']=M(['Les machines simples réduisent l’effort : le levier, la poulie, le plan incliné, la roue et l’axe. Le travail d’une force vaut W = F × d (en joules). Une machine ne diminue pas le travail, elle change la force et la distance.','Un levier est d’autant plus efficace que son bras est long.'],[
 Q('Que permet un plan incliné ?',['monter une charge avec moins de force','supprimer le poids','créer de l’énergie','arrêter le temps'],'monter une charge avec moins de force','Mais la distance est plus grande.'),
 Q('La poulie fixe permet de…',['changer la direction de la force','supprimer la charge','doubler la masse','chauffer la corde'],'changer la direction de la force','On tire vers le bas pour monter.'),
 Q('Quel est le travail d’une force de 10 N sur 5 m ?',['50 J','15 J','2 J','5 J'],'50 J','W = F × d.'),
 Q('Quel outil est un levier ?',['la pince ou le pied-de-biche','le thermomètre','le livre','le verre'],'la pince ou le pied-de-biche','Il démultiplie la force.')]);
C['s8|sc|8']=M(['L’énergie existe sous plusieurs formes : cinétique (mouvement), potentielle (position), thermique, électrique, chimique, lumineuse. Elle ne se perd pas : elle se transforme (principe de conservation). Unité : le joule.','Dans une centrale hydroélectrique comme Inga : énergie potentielle de l’eau → cinétique → électrique.'],[
 Q('Quelle est l’unité de l’énergie ?',['le joule','le newton','le volt','le mètre'],'le joule','Symbole J.'),
 Q('Que transforme un panneau solaire ?',['la lumière en électricité','la chaleur en son','l’eau en lumière','le vent en eau'],'la lumière en électricité','Cellules photovoltaïques.'),
 Q('Que devient l’énergie dans un système isolé ?',['elle se conserve','elle disparaît','elle double','elle devient nulle'],'elle se conserve','Principe de conservation.'),
 Q('Quelle énergie possède un objet qui bouge ?',['cinétique','potentielle seulement','chimique','nucléaire seulement'],'cinétique','Énergie de mouvement.')]);
C['s8|sc|9']=M(['L’activité humaine rejette des gaz à effet de serre (CO₂, méthane) qui réchauffent la planète. La forêt du bassin du Congo absorbe du CO₂ et doit être protégée. Les technologies propres (solaire, hydroélectrique, recyclage) réduisent l’impact.','Les technologies numériques aident aussi à s’informer, à apprendre et à protéger l’environnement.'],[
 Q('Quel gaz contribue le plus à l’effet de serre ?',['le dioxyde de carbone','l’oxygène','l’azote','l’hélium'],'le dioxyde de carbone','Produit par la combustion.'),
 Q('Pourquoi protéger la forêt du bassin du Congo ?',['elle absorbe du CO₂ et abrite la biodiversité','elle ne sert à rien','elle gêne les routes','elle est inutile'],'elle absorbe du CO₂ et abrite la biodiversité','C’est un grand « poumon » de la planète.'),
 Q('Quelle technologie est propre ?',['le panneau solaire','le feu de déchets plastiques','le brûlis sans contrôle','le moteur sans entretien'],'le panneau solaire','Pas de gaz polluant.'),
 Q('Que permet le recyclage ?',['réduire les déchets et économiser les ressources','augmenter la pollution','supprimer l’eau','fabriquer du plastique neuf'],'réduire les déchets et économiser les ressources','Il donne une seconde vie aux matériaux.')]);

// ---------------- Orientation ----------------
C['s8|or|0']=M(['Les humanités scientifiques (mathématiques-physique, biologie-chimie) préparent aux études de médecine, d’ingénierie, de pharmacie, d’agronomie et de sciences.','Elles conviennent à ceux qui aiment comprendre, calculer et expérimenter.'],[
 Q('Quelle filière prépare à la médecine ?',['biologie-chimie','coupe et couture','menuiserie','comptabilité seulement'],'biologie-chimie','Biologie-chimie ou mathématiques-physique.'),
 Q('Quel talent convient à une section scientifique ?',['aimer les expériences et les calculs','détester les sciences','fuir les maths','ne pas aimer lire'],'aimer les expériences et les calculs','L’intérêt guide le choix.'),
 Q('Quel métier demande des humanités scientifiques ?',['ingénieur','chanteur seulement','tailleur','mannequin'],'ingénieur','Études supérieures scientifiques.'),
 Q('Que faut-il surtout développer ?',['la rigueur et la logique','la paresse','la triche','l’ignorance'],'la rigueur et la logique','Qualités essentielles.')]);
C['s8|or|1']=M(['Les humanités littéraires (latin-philosophie, langues) forment à l’écriture, à la réflexion et à la communication. Elles ouvrent vers le droit, le journalisme, l’enseignement des lettres, les langues et les arts.','Elles conviennent à ceux qui aiment lire, écrire et débattre.'],[
 Q('Quel métier est lié aux lettres ?',['journaliste','mécanicien','soudeur','électricien'],'journaliste','L’écrit et la communication.'),
 Q('Quelle qualité est utile en section littéraire ?',['aimer lire et écrire','refuser de lire','éviter de parler','détester les langues'],'aimer lire et écrire','La lecture nourrit l’esprit.'),
 Q('Les humanités littéraires ouvrent vers…',['le droit et la communication','la maçonnerie seulement','la pêche seulement','la mécanique seulement'],'le droit et la communication','Avocat, juriste, communicant.'),
 Q('Quelle matière est typique de la section ?',['la philosophie','la soudure','la plomberie','la menuiserie'],'la philosophie','Penser, argumenter.')]);
C['s8|or|2']=M(['Les humanités commerciales et de gestion (commerciale et gestion, secrétariat, comptabilité) forment aux métiers de l’entreprise : comptable, gestionnaire, secrétaire, entrepreneur.','Elles conviennent à ceux qui aiment les chiffres, l’organisation et le commerce.'],[
 Q('Quel métier relève de la gestion ?',['comptable','chirurgien','pilote','forgeron'],'comptable','Il tient les comptes d’une entreprise.'),
 Q('Que faut-il pour bien gérer une entreprise ?',['de l’organisation et de l’honnêteté','du désordre','de la triche','de l’ignorance'],'de l’organisation et de l’honnêteté','Qualités d’un gestionnaire.'),
 Q('Qu’apprend-on en comptabilité ?',['à tenir des comptes','à réparer un moteur','à soigner','à construire un mur'],'à tenir des comptes','Recettes et dépenses.'),
 Q('Quel talent aide dans cette section ?',['aimer les chiffres et le contact','détester les calculs','éviter les gens','fuir l’organisation'],'aimer les chiffres et le contact','Calcul et relation client.')]);
C['s8|or|3']=M(['Les humanités pédagogiques préparent à devenir enseignant du primaire ou de la maternelle. On y étudie la psychologie de l’enfant, les méthodes d’enseignement et les stages pratiques.','Elles conviennent à ceux qui aiment transmettre, expliquer et aider les autres à apprendre.'],[
 Q('Quel métier prépare la section pédagogique ?',['enseignant','mécanicien','plombier','pilote'],'enseignant','Enseignement primaire ou maternel.'),
 Q('Quelle qualité faut-il pour enseigner ?',['la patience','l’impatience','le mépris','le désordre'],'la patience','Les enfants apprennent à leur rythme.'),
 Q('Que fait-on en stage pédagogique ?',['on enseigne sous la direction d’un titulaire','on regarde la télévision','on joue seulement','on fuit la classe'],'on enseigne sous la direction d’un titulaire','Pratique encadrée.'),
 Q('Quel talent convient à cette section ?',['aimer transmettre et expliquer','détester les enfants','fuir la parole','mépriser l’école'],'aimer transmettre et expliquer','Le goût de transmettre.')]);
C['s8|or|4']=M(['Les humanités techniques et professionnelles forment à un métier : mécanique, électricité, construction, menuiserie, agriculture, coupe et couture, informatique, hôtellerie… Elles mènent à l’emploi ou à des études techniques supérieures.','Elles conviennent à ceux qui aiment faire, construire et réparer.'],[
 Q('Quelle section forme au métier de mécanicien ?',['technique : mécanique','littéraire','pédagogique','commerciale'],'technique : mécanique','Moteurs et véhicules.'),
 Q('Quel métier relève de la construction ?',['maçon','journaliste','comptable','professeur de lettres'],'maçon','Il bâtit des murs.'),
 Q('Que permettent ces humanités ?',['entrer vite dans un métier','éviter tout travail','ne rien apprendre','fuir la pratique'],'entrer vite dans un métier','Compétences concrètes.'),
 Q('Quel talent convient à cette section ?',['aimer fabriquer et réparer','détester les outils','éviter la pratique','fuir le travail'],'aimer fabriquer et réparer','Habileté manuelle.')]);
J8['s8|or|4']=[TRI('Technique ou littéraire ? Range chaque métier.',['Technique','Littéraire'],[['électricien','Technique'],['journaliste','Littéraire'],['menuisier','Technique'],['écrivain','Littéraire'],['mécanicien','Technique'],['traducteur','Littéraire']])];
C['s8|or|5']=M(['Pour choisir son orientation : faire le point sur ses talents et ses intérêts, regarder ses résultats, parler avec ses parents, ses enseignants et un conseiller, visiter des écoles et se renseigner sur les débouchés.','Un bon choix tient compte de ses goûts, de ses capacités et des besoins du pays.'],[
 Q('Sur quoi se baser pour choisir ?',['ses talents, ses goûts et ses résultats','la mode seulement','le hasard','la peur'],'ses talents, ses goûts et ses résultats','Un choix réfléchi.'),
 Q('Avec qui faut-il en parler ?',['parents, enseignants et conseillers','personne','ceux qui se moquent','des inconnus'],'parents, enseignants et conseillers','Les conseils éclairent.'),
 Q('Que faire avant de décider ?',['se renseigner sur les débouchés','copier un ami sans réfléchir','ignorer les métiers','refuser de choisir'],'se renseigner sur les débouchés','Savoir où mène chaque filière.'),
 Q('Peut-on réussir dans toutes les filières ?',['oui, avec travail et motivation','non, jamais','seulement les riches','seulement les adultes'],'oui, avec travail et motivation','Chaque filière a sa valeur.')]);
