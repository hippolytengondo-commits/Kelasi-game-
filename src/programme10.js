import {Q} from './data.js';

// Humanités, 3e et 4e années : 60 missions jouables (même organisation que programme9.js).
const M=(intro,qs)=>({intro:intro,qs:qs});
export const C10={},J10={},K10={};
const C=C10;

// =============================== 3e HUMANITÉS ===============================
// ---- Français
C['h3|fr|0']=M(['L’existentialisme (Sartre, Camus) affirme que « l’existence précède l’essence » : l’être humain se définit par ses actes et sa liberté. Camus décrit l’absurde dans « L’Étranger » (1942) et « Le Mythe de Sisyphe » ; « La Peste » (1947) célèbre la solidarité.','Sisyphe pousse son rocher sans fin : il faut « l’imaginer heureux ».'],[
 Q('Qui a écrit « L’Étranger » ?',['Albert Camus','Molière','Émile Zola','Léopold Senghor'],'Albert Camus','Roman de 1942.'),
 Q('Que signifie « l’existence précède l’essence » ?',['l’homme se définit par ses actes','tout est écrit d’avance','l’homme n’est pas libre','la nature décide de tout'],'l’homme se définit par ses actes','Formule de Sartre.'),
 Q('Quel thème est central chez Camus ?',['l’absurde','la monarchie','la chevalerie','la féerie'],'l’absurde','Le monde n’a pas de sens donné.'),
 Q('« La Peste » met en avant…',['la solidarité face au fléau','la guerre des rois','les voyages dans le temps','la vie à la cour'],'la solidarité face au fléau','Les habitants d’Oran luttent ensemble.')]);
C['h3|fr|1']=M(['La poésie moderne rompt avec les règles classiques. Baudelaire (« Les Fleurs du mal », 1857) mêle beauté et spleen ; Rimbaud veut être « voyant » ; Apollinaire invente les calligrammes (« Alcools », 1913). Le vers libre abandonne rime et mesure régulières.','Les images surprenantes et les symboles remplacent la description simple.'],[
 Q('Qui a écrit « Les Fleurs du mal » ?',['Baudelaire','Molière','Camus','Balzac'],'Baudelaire','Recueil de 1857.'),
 Q('Qu’est-ce qu’un calligramme ?',['un poème dont la forme dessine un objet','une pièce de théâtre','un roman','un discours'],'un poème dont la forme dessine un objet','Invention d’Apollinaire.'),
 Q('Le vers libre…',['n’obéit pas à la rime et à la mesure régulières','est toujours rimé','compte toujours douze syllabes','est interdit'],'n’obéit pas à la rime et à la mesure régulières','Liberté de forme.'),
 Q('Quel poète voulait être « voyant » ?',['Rimbaud','Racine','Voltaire','Corneille'],'Rimbaud','Lettre du Voyant, 1871.')]);
C['h3|fr|2']=M(['Pour traiter un sujet de dissertation littéraire : lire attentivement, souligner les mots clés, reformuler, poser la problématique, chercher des arguments et des exemples tirés d’œuvres, puis organiser un plan.','Exemple de sujet : « Le roman peut-il changer le monde ? »'],[
 Q('Première étape pour un sujet de dissertation ?',['analyser les mots clés','écrire la conclusion','recopier un cours','dessiner un plan de ville'],'analyser les mots clés','On comprend d’abord le sujet.'),
 Q('Que doit-on citer pour illustrer un argument ?',['des œuvres littéraires','des rumeurs','des publicités','des numéros de téléphone'],'des œuvres littéraires','Exemples précis.'),
 Q('Que sert à poser la problématique ?',['guider la réflexion','décorer','prolonger l’introduction sans but','éviter le sujet'],'guider la réflexion','Elle reformule le sujet en question.'),
 Q('Un bon plan est…',['logique et progressif','sans ordre','sans parties','écrit à la fin'],'logique et progressif','Chaque partie fait avancer la réponse.')]);
C['h3|fr|3']=M(['Le discours argumentatif convainc par trois moyens : l’ethos (crédibilité de l’orateur), le pathos (émotions) et le logos (raisonnement). Exemples célèbres : le discours de Patrice Lumumba (30 juin 1960) et « I have a dream » de Martin Luther King (1963).','On y trouve interpellations, anaphores et métaphores.'],[
 Q('Que désigne le logos ?',['le raisonnement','l’émotion','la réputation','le style'],'le raisonnement','Arguments logiques.'),
 Q('Que désigne le pathos ?',['les émotions du public','les chiffres','la grammaire','la politesse'],'les émotions du public','On touche la sensibilité.'),
 Q('Qui a prononcé « I have a dream » ?',['Martin Luther King','Mandela','Nkrumah','Churchill'],'Martin Luther King','En 1963 à Washington.'),
 Q('Une anaphore, c’est…',['la répétition d’un mot en début de phrases','une question sans réponse','un mot étranger','une rime'],'la répétition d’un mot en début de phrases','Elle insiste sur une idée.')]);
C['h3|fr|4']=M(['Lire la presse demande de distinguer fait (vérifiable) et opinion (point de vue). Un article contient un titre, un chapeau (résumé), un corps et parfois une source ; l’éditorial exprime l’opinion du journal. Pour déjouer les fausses informations, on vérifie la source, la date et on croise les informations.','Une information partagée sans vérification peut nuire.'],[
 Q('Un fait est…',['vérifiable','toujours faux','une opinion','une rumeur'],'vérifiable','On peut le prouver.'),
 Q('Que résume le chapeau d’un article ?',['l’essentiel de l’information','le prix du journal','la météo','la publicité'],'l’essentiel de l’information','Quelques lignes sous le titre.'),
 Q('Que fait-on pour repérer une fausse information ?',['vérifier la source et croiser','la partager vite','la croire toujours','l’ignorer sans raison'],'vérifier la source et croiser','Esprit critique.'),
 Q('Qui exprime l’éditorial ?',['l’opinion du journal','la météo','les petites annonces','les résultats sportifs'],'l’opinion du journal','Texte d’opinion.')]);
// ---- Mathématiques
C['h3|ma|0']=M(['La limite décrit le comportement d’une fonction quand x tend vers un nombre ou vers l’infini : lim 1/x = 0 quand x → +∞. Formes indéterminées (0/0, ∞/∞) : on factorise ou simplifie. Une fonction est continue si sa courbe se trace sans lever le crayon.','Exemple : (x² − 1)/(x − 1) = x + 1 pour x ≠ 1 ; sa limite en 1 est 2.'],[
 Q('lim 1/x quand x → +∞ ?',['0','1','+∞','−1'],'0','Le quotient devient aussi petit qu’on veut.'),
 Q('lim (x² − 1)/(x − 1) quand x → 1 ?',['2','0','1','n’existe pas'],'2','x + 1 → 2.'),
 Q('Une fonction continue se trace…',['sans lever le crayon','avec des trous','en pointillés','uniquement en bleu'],'sans lever le crayon','Pas de saut.'),
 Q('0/0 est une forme…',['indéterminée','toujours égale à 0','toujours égale à 1','impossible à écrire'],'indéterminée','Il faut lever l’indétermination.')]);
C['h3|ma|1']=M(['Pour étudier une fonction : domaine, dérivée, signe de la dérivée, tableau de variation, extremums. Exemple : f(x) = x³ − 3x donne f′(x) = 3x² − 3 = 3(x − 1)(x + 1) ; f′ s’annule en −1 et 1.','f est croissante là où f′ > 0 et décroissante là où f′ < 0.'],[
 Q('Dérivée de x³ − 3x ?',['3x² − 3','x² − 3','3x³ − 3','3x − 3'],'3x² − 3','(x³)′ = 3x² et (3x)′ = 3.'),
 Q('Où f′(x) = 3x² − 3 s’annule-t-elle ?',['en −1 et en 1','en 0 seulement','en 3','jamais'],'en −1 et en 1','x² = 1.'),
 Q('Que vaut f(1) pour f(x) = x³ − 3x ?',['−2','2','0','−1'],'−2','1 − 3 = −2.'),
 Q('Si f′ < 0 sur un intervalle, f est…',['décroissante','croissante','constante','nulle'],'décroissante','Pente négative.')]);
C['h3|ma|2']=M(['Une primitive de f est une fonction F telle que F′ = f. Exemples : une primitive de 2x est x² ; de 3x² est x³ ; de 1/x est ln x. L’intégrale de a à b vaut F(b) − F(a) et mesure l’aire sous la courbe.','Exemple : ∫ de 0 à 1 de x dx = 1/2.'],[
 Q('Une primitive de 2x ?',['x²','2','x','2x²'],'x²','(x²)′ = 2x.'),
 Q('∫ de 0 à 2 de 3x² dx = ?',['8','6','12','2'],'8','[x³] de 0 à 2 = 8.'),
 Q('∫ de 0 à 1 de x dx = ?',['1/2','1','2','0'],'1/2','[x²/2] = 1/2.'),
 Q('À quoi correspond une intégrale d’une fonction positive ?',['à une aire','à une longueur','à un angle','à une masse'],'à une aire','Aire sous la courbe.')]);
C['h3|ma|3']=M(['Les nombres complexes s’écrivent a + bi avec i² = −1. Addition : (2 + 3i) + (1 − i) = 3 + 2i. Le conjugué de a + bi est a − bi ; (a + bi)(a − bi) = a² + b². Le module est |a + bi| = √(a² + b²).','Ils permettent de résoudre x² + 1 = 0 : x = ± i.'],[
 Q('Que vaut i² ?',['−1','1','0','i'],'−1','Définition de i.'),
 Q('(2 + 3i) + (1 − i) = ?',['3 + 2i','3 + 4i','1 + 2i','2 + 2i'],'3 + 2i','Parties réelles et imaginaires.'),
 Q('Module de 3 + 4i ?',['5','7','25','1'],'5','√(9 + 16).'),
 Q('(1 + i)(1 − i) = ?',['2','0','1','2i'],'2','1² + 1² = 2.')]);
C['h3|ma|4']=M(['La loi binomiale B(n ; p) compte le nombre de succès dans n épreuves indépendantes à deux issues, chacune de probabilité p. P(X = k) = C(n,k) pᵏ (1 − p)ⁿ⁻ᵏ ; l’espérance vaut n × p.','Exemple : lancer 3 fois une pièce et compter les « pile ».'],[
 Q('Espérance de B(10 ; 0,3) ?',['3','7','0,3','10'],'3','n × p.'),
 Q('On lance 3 fois une pièce. P(exactement 2 piles) ?',['3/8','1/2','1/8','1/4'],'3/8','C(3,2)/8 = 3/8.'),
 Q('Quelle condition est nécessaire pour une loi binomiale ?',['épreuves indépendantes à deux issues','épreuves toujours différentes','une seule épreuve','trois issues obligatoires'],'épreuves indépendantes à deux issues','Répétition d’épreuves de Bernoulli.'),
 Q('Que vaut C(4, 2) ?',['6','8','4','2'],'6','4!/(2!2!).')]);
C['h3|ma|5']=M(['Dans l’espace : volume d’une sphère V = 4/3 π r³, d’un cylindre V = π r² h, d’un cône V = 1/3 π r² h. Diagonale d’un pavé de côtés a, b, c : √(a² + b² + c²) ; d’un cube d’arête a : a√3.','Exemple : pavé 1 × 2 × 2, diagonale = √9 = 3.'],[
 Q('Volume d’une sphère de rayon 3 ?',['36π','12π','27π','9π'],'36π','4/3 × π × 27.'),
 Q('Diagonale d’un pavé 1 × 2 × 2 ?',['3','5','√5','4'],'3','√(1 + 4 + 4).'),
 Q('Volume d’un cylindre de rayon 2 et de hauteur 5 ?',['20π','10π','4π','40π'],'20π','π × 4 × 5.'),
 Q('Diagonale d’un cube d’arête 1 ?',['√3','√2','2','3'],'√3','a√3.')]);
// ---- Sciences
C['h3|sc|0']=M(['L’énergie mécanique Em = Ec + Ep se conserve s’il n’y a pas de frottements. Pour une chute libre de hauteur h : v = √(2gh). Le rendement est le rapport entre l’énergie utile et l’énergie absorbée : η = Putile / Pabsorbée.','Exemple : une pierre qui tombe de 5 m (g = 10) arrive à 10 m/s.'],[
 Q('Vitesse d’une chute libre de 5 m (g = 10) ?',['10 m/s','5 m/s','50 m/s','25 m/s'],'10 m/s','√(2 × 10 × 5) = 10.'),
 Q('Que se conserve sans frottements ?',['l’énergie mécanique','la température','la masse seule','la vitesse'],'l’énergie mécanique','Ec + Ep reste constante.'),
 Q('Puissance absorbée 100 W, utile 80 W. Rendement ?',['80 %','20 %','180 %','8 %'],'80 %','80 ÷ 100.'),
 Q('Quand l’énergie potentielle diminue, l’énergie cinétique…',['augmente','diminue','disparaît','double toujours'],'augmente','Elles se compensent.')]);
C['h3|sc|1']=M(['Un champ magnétique, mesuré en teslas (T), exerce une force sur un fil parcouru par un courant (force de Laplace) F = B × I × L. Une variation de flux magnétique crée une tension : c’est l’induction (loi de Faraday), principe de l’alternateur.','Les dynamos et les centrales produisent l’électricité ainsi.'],[
 Q('Unité du champ magnétique ?',['le tesla','le volt','le watt','l’ohm'],'le tesla','Symbole T.'),
 Q('B = 0,5 T, I = 2 A, L = 0,4 m. Force de Laplace ?',['0,4 N','0,5 N','4 N','2 N'],'0,4 N','0,5 × 2 × 0,4.'),
 Q('L’induction produit…',['une tension électrique','de la glace','du son','un gaz'],'une tension électrique','Quand le flux varie.'),
 Q('Quel appareil utilise l’induction pour produire du courant ?',['l’alternateur','le thermomètre','la balance','le miroir'],'l’alternateur','Rotor et bobines.')]);
C['h3|sc|2']=M(['La chimie organique étudie les composés du carbone. Les alcanes ont pour formule CₙH₂ₙ₊₂ : méthane CH₄, éthane C₂H₆, propane C₃H₈, butane C₄H₁₀. Les alcools portent le groupe –OH : éthanol C₂H₅OH. La combustion complète donne CO₂ et H₂O.','Le gaz de cuisine est du propane ou du butane.'],[
 Q('Formule du méthane ?',['CH₄','C₂H₆','CO₂','H₂O'],'CH₄','Premier alcane.'),
 Q('Formule générale des alcanes ?',['CₙH₂ₙ₊₂','CₙH₂ₙ','CₙHₙ','CₙH₂ₙ₋₂'],'CₙH₂ₙ₊₂','Hydrocarbures saturés.'),
 Q('Quel groupe caractérise un alcool ?',['–OH','–COOH','–NH₂','–CHO'],'–OH','Groupe hydroxyle.'),
 Q('La combustion complète d’un hydrocarbure donne…',['CO₂ et H₂O','O₂ et H₂','CO seulement','du carbone pur'],'CO₂ et H₂O','Dioxyde de carbone et eau.')]);
C['h3|sc|3']=M(['La photosynthèse, grâce à la lumière et à la chlorophylle, transforme CO₂ et H₂O en glucose et dioxygène : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. La respiration cellulaire, dans les mitochondries, libère de l’énergie (ATP). La fermentation, sans oxygène, produit par exemple de l’éthanol et du CO₂.','Les levures utilisent la fermentation pour faire lever le pain.'],[
 Q('Que produit la photosynthèse ?',['du glucose et du dioxygène','du CO₂ et de l’eau','de l’alcool','du sel'],'du glucose et du dioxygène','Avec lumière et chlorophylle.'),
 Q('Où se fait la respiration cellulaire ?',['dans les mitochondries','dans le noyau','dans la membrane','dans le sang'],'dans les mitochondries','Elles produisent l’ATP.'),
 Q('La fermentation se déroule…',['sans oxygène','uniquement avec oxygène','dans la lumière seule','dans le vide uniquement'],'sans oxygène','Anaérobie.'),
 Q('Quel organisme utilise la fermentation pour le pain ?',['la levure','le moustique','la souris','la mouche'],'la levure','Elle produit du CO₂.')]);
C['h3|sc|4']=M(['L’immunité comprend une défense innée (peau, globules blancs phagocytes) et une défense adaptative : les lymphocytes B fabriquent des anticorps, les lymphocytes T détruisent les cellules infectées. Le vaccin crée une mémoire immunitaire ; le sérum apporte des anticorps tout faits.','Le VIH détruit les lymphocytes T CD4 et affaiblit les défenses.'],[
 Q('Quelles cellules fabriquent les anticorps ?',['les lymphocytes B','les globules rouges','les neurones','les os'],'les lymphocytes B','Ils sécrètent les anticorps.'),
 Q('Le vaccin crée…',['une mémoire immunitaire','une maladie','un os','un muscle'],'une mémoire immunitaire','Le corps se souvient.'),
 Q('Que détruit le VIH ?',['les lymphocytes T CD4','les globules rouges','les os','les poumons'],'les lymphocytes T CD4','Il affaiblit le système immunitaire.'),
 Q('Quelle différence entre vaccin et sérum ?',['le sérum apporte des anticorps tout faits','le vaccin apporte des anticorps tout faits','ils sont identiques','aucune'],'le sérum apporte des anticorps tout faits','Effet immédiat mais temporaire.')]);
// ---- Histoire, géographie, civisme
C['h3|hg|0']=M(['La Guerre froide (1947-1991) oppose les États-Unis (OTAN, 1949) et l’URSS (Pacte de Varsovie, 1955) sans affrontement direct entre les deux. Elle connaît la crise de Cuba (1962) et le mur de Berlin (1961-1989). L’URSS se disloque en 1991.','Les pays non alignés (Bandung, 1955) refusent de choisir un camp ; le Congo de 1960 devient un enjeu de la rivalité.'],[
 Q('Quels pays dominent la Guerre froide ?',['les États-Unis et l’URSS','la France et l’Italie','la Chine et l’Inde','le Brésil et l’Argentine'],'les États-Unis et l’URSS','Deux superpuissances.'),
 Q('En quelle année tombe le mur de Berlin ?',['1989','1961','1945','1991'],'1989','Symbole de la fin de la division.'),
 Q('Que signifie « non-alignés » ?',['qui ne choisissent aucun des deux blocs','qui alignent des soldats','qui n’ont pas de pays','qui attaquent les deux blocs'],'qui ne choisissent aucun des deux blocs','Conférence de Bandung.'),
 Q('Quelle alliance regroupe l’Occident ?',['l’OTAN','le Pacte de Varsovie','la SADC','l’OUA'],'l’OTAN','Créée en 1949.')]);
C['h3|hg|1']=M(['La région des Grands Lacs réunit la RDC, le Rwanda, le Burundi, l’Ouganda et la Tanzanie. Elle a connu des conflits : génocide des Tutsi au Rwanda (1994), guerres dans l’Est de la RDC (Kivu, Ituri). La CIRGL et la mission de l’ONU (MONUSCO) cherchent la paix.','Les minerais et les tensions entre voisins alimentent l’insécurité.'],[
 Q('Quel pays est aussi une région des Grands Lacs ?',['le Burundi','le Maroc','le Gabon','le Niger'],'le Burundi','Voisin de l’Est de la RDC.'),
 Q('Quelle mission de l’ONU est présente en RDC ?',['la MONUSCO','l’OTAN','la FAO','l’UNESCO'],'la MONUSCO','Mission de stabilisation.'),
 Q('Quelles provinces de l’Est sont touchées par les conflits ?',['le Nord-Kivu et l’Ituri','le Kongo central','le Kasaï central seulement','Kinshasa'],'le Nord-Kivu et l’Ituri','Régions frontalières.'),
 Q('Quel objectif a la CIRGL ?',['la paix et la coopération','la guerre','la colonisation','l’isolement'],'la paix et la coopération','Conférence internationale sur la région des Grands Lacs.')]);
C['h3|hg|2']=M(['La RDC possède la plus grande part de la forêt du bassin du Congo, deuxième forêt tropicale du monde, et plus de la moitié du cobalt mondial exploité (indispensable aux batteries). Son potentiel hydroélectrique (Inga) est immense. Un développement durable exige de protéger la forêt, de transformer les minerais sur place et de partager les richesses.','Le coltan sert aux téléphones et ordinateurs.'],[
 Q('Quel minerai de la RDC est essentiel aux batteries ?',['le cobalt','le sel','le charbon de bois','le kaolin seulement'],'le cobalt','Voitures électriques, téléphones.'),
 Q('Quelle est la 2e plus grande forêt tropicale du monde ?',['le bassin du Congo','la forêt de Sibérie','le désert du Sahara','la savane du Serengeti'],'le bassin du Congo','Après l’Amazonie.'),
 Q('Pourquoi transformer les minerais sur place ?',['pour garder plus de valeur et créer des emplois','pour polluer plus','pour fermer les mines','pour vendre moins cher'],'pour garder plus de valeur et créer des emplois','Valeur ajoutée locale.'),
 Q('À quoi sert le coltan ?',['aux téléphones et ordinateurs','à faire du pain','à construire des routes de terre','à cuire le riz'],'aux téléphones et ordinateurs','Composants électroniques.')]);
// ---- Mécanique
C['h3|mec|0']=M(['La résistance des matériaux étudie comment une pièce supporte les efforts : traction, compression, cisaillement, flexion, torsion. La contrainte vaut σ = F ÷ S (en N/mm² = MPa). On prévoit un coefficient de sécurité pour rester loin de la rupture.','Exemple : F = 1 000 N sur S = 2 mm² donne σ = 500 MPa.'],[
 Q('Contrainte avec F = 1 000 N et S = 2 mm² ?',['500 MPa','2 000 MPa','50 MPa','5 MPa'],'500 MPa','1 000 ÷ 2.'),
 Q('Quel effort étire une barre ?',['la traction','la compression','la flexion','la torsion'],'la traction','Deux forces qui tirent.'),
 Q('À quoi sert le coefficient de sécurité ?',['rester loin de la rupture','augmenter la masse inutilement','réduire la résistance','changer la couleur'],'rester loin de la rupture','Marge de sécurité.'),
 Q('Quel effort plie une poutre ?',['la flexion','la traction','le cisaillement','la dilatation'],'la flexion','Comme une planche entre deux appuis.')]);
C['h3|mec|1']=M(['La pression vaut P = F ÷ S (en pascals, 1 bar = 10⁵ Pa). Le principe de Pascal : un liquide transmet la pression dans tout le fluide. Le débit Q = S × v (m³/s). Une pompe centrifuge aspire et refoule un liquide grâce à une roue à aubes.','Les vérins hydrauliques démultiplient la force.'],[
 Q('Pression avec F = 100 N sur S = 0,5 m² ?',['200 Pa','50 Pa','100 Pa','20 Pa'],'200 Pa','100 ÷ 0,5.'),
 Q('Débit : S = 0,01 m², v = 2 m/s ?',['0,02 m³/s','0,2 m³/s','2 m³/s','0,005 m³/s'],'0,02 m³/s','S × v.'),
 Q('1 bar correspond à…',['10⁵ Pa','10 Pa','1 Pa','10² Pa'],'10⁵ Pa','100 000 pascals.'),
 Q('Que fait une pompe centrifuge ?',['elle déplace un liquide','elle fabrique du courant','elle coupe le métal','elle mesure la pression'],'elle déplace un liquide','Roue à aubes.')]);
C['h3|mec|2']=M(['L’électricité automobile : la batterie (12 V) fournit l’énergie au démarreur, l’alternateur la recharge pendant la marche, les fusibles protègent les circuits, les bougies enflamment le mélange. P = U × I : 12 V × 5 A = 60 W.','On débranche la batterie avant d’intervenir sur le circuit.'],[
 Q('Qui recharge la batterie quand le moteur tourne ?',['l’alternateur','le démarreur','la bougie','le fusible'],'l’alternateur','Il produit du courant.'),
 Q('Tension d’une batterie de voiture ?',['12 V','220 V','1,5 V','380 V'],'12 V','Batterie automobile courante.'),
 Q('À quoi sert un fusible ?',['protéger un circuit des surintensités','faire démarrer le moteur','augmenter la tension','refroidir'],'protéger un circuit des surintensités','Il fond et coupe le courant.'),
 Q('Puissance de 12 V × 5 A ?',['60 W','17 W','7 W','2,4 W'],'60 W','P = U × I.')]);
C['h3|mec|3']=M(['La maintenance préventive (vidanges, contrôles, remplacement des filtres) évite les pannes ; la maintenance corrective répare après une panne. Un bon diagnostic relie symptôme, cause et remède, avec des outils : multimètre, manomètre, valise de diagnostic.','Un carnet d’entretien garde la mémoire des interventions.'],[
 Q('Quelle maintenance évite les pannes ?',['préventive','corrective','aucune','accidentelle'],'préventive','On agit avant la panne.'),
 Q('Quel outil mesure une tension électrique ?',['le multimètre','le manomètre','le pied à coulisse','la clé dynamométrique'],'le multimètre','Volts, ampères, ohms.'),
 Q('À quoi sert un manomètre ?',['mesurer une pression','mesurer une longueur','couper','souder'],'mesurer une pression','Pneus, huile, circuits.'),
 Q('Pourquoi tenir un carnet d’entretien ?',['garder la trace des interventions','décorer le garage','payer moins','éviter l’huile'],'garder la trace des interventions','Suivi et traçabilité.')]);
// ---- Commerciale et gestion
C['h3|com|0']=M(['La gestion financière analyse la santé de l’entreprise : la rentabilité = bénéfice ÷ capital investi ; le fonds de roulement = ressources stables − emplois stables ; le ratio d’endettement = dettes ÷ capitaux propres ; le seuil de rentabilité est le chiffre d’affaires où l’on ne perd ni ne gagne.','Une entreprise rentable doit aussi rester liquide pour payer ses dettes à court terme.'],[
 Q('Bénéfice 20 000 $ pour un capital de 100 000 $. Rentabilité ?',['20 %','5 %','2 %','80 %'],'20 %','20 000 ÷ 100 000.'),
 Q('Le seuil de rentabilité est le moment où…',['on ne perd ni ne gagne','on perd tout','on ferme','on double le prix'],'on ne perd ni ne gagne','Résultat nul.'),
 Q('Dettes 30 000 $, capitaux propres 60 000 $. Ratio d’endettement ?',['0,5','2','1','0,3'],'0,5','30 ÷ 60.'),
 Q('La liquidité mesure…',['la capacité à payer à court terme','la hauteur du stock','la couleur du bilan','le nombre de clients'],'la capacité à payer à court terme','Argent disponible.')]);
C['h3|com|1']=M(['La comptabilité analytique calcule les coûts : coût d’achat, coût de production, coût de revient (= coût de production + frais de distribution). Les charges fixes ne dépendent pas de la production ; les charges variables augmentent avec elle. Marge = prix de vente − coût.','Exemple : charges fixes 100, charges variables 5 par unité, 20 unités : coût total 200, coût moyen 10.'],[
 Q('Charges fixes 100 $, variables 5 $/unité, 20 unités. Coût total ?',['200 $','125 $','105 $','500 $'],'200 $','100 + 5 × 20.'),
 Q('Coût moyen du même exemple ?',['10 $','5 $','20 $','100 $'],'10 $','200 ÷ 20.'),
 Q('Une charge fixe…',['ne dépend pas de la production','augmente avec la production','disparaît','est un produit'],'ne dépend pas de la production','Loyer, assurance.'),
 Q('Prix de vente 15 $, coût 10 $. Marge ?',['5 $','25 $','150 $','1,5 $'],'5 $','15 − 10.')]);
C['h3|com|2']=M(['Créer une entreprise : trouver une idée, étudier le marché, rédiger un plan d’affaires (produits, clients, ressources, financement, risques), choisir une forme juridique et accomplir les formalités (en RDC, immatriculation au RCCM, numéro d’impôt…).','Le microcrédit finance de petits projets.'],[
 Q('Que contient un plan d’affaires ?',['marché, ressources, financement, risques','une recette de cuisine','un poème','les notes de classe'],'marché, ressources, financement, risques','Il décrit le projet.'),
 Q('Que signifie RCCM ?',['registre du commerce et du crédit mobilier','règlement civil des conflits maritimes','réseau congolais de crédit mobile','registre central des citoyens mariés'],'registre du commerce et du crédit mobilier','Immatriculation des commerçants.'),
 Q('Quelle est la première étape ?',['avoir une idée et étudier le marché','acheter un camion','fermer la boutique','augmenter les prix'],'avoir une idée et étudier le marché','Avant d’investir.'),
 Q('Le microcrédit sert à…',['financer de petits projets','payer l’État','acheter des bijoux','supprimer les impôts'],'financer de petits projets','Petits prêts aux entrepreneurs.')]);
// ---- Pédagogique
C['h3|ped|0']=M(['L’adolescent traverse la puberté, cherche son identité (Erikson), veut être reconnu par ses pairs, et vit de fortes émotions. L’enseignant l’aide en écoutant, en valorisant ses efforts et en prévenant le harcèlement.','La motivation vient du sens, de la réussite et du soutien.'],[
 Q('Que cherche l’adolescent ?',['son identité','un nouveau nom officiel','à quitter la vie','à éviter tous les amis'],'son identité','Qui suis-je ?'),
 Q('Comment motiver un élève ?',['donner du sens et valoriser les efforts','le comparer aux autres','le punir toujours','l’ignorer'],'donner du sens et valoriser les efforts','Soutien et réussite.'),
 Q('Que faire face au harcèlement ?',['intervenir et protéger la victime','l’ignorer','rire','le cacher'],'intervenir et protéger la victime','Devoir de protection.'),
 Q('Quelle attitude aide un adolescent ?',['l’écoute','le mépris','la moquerie','l’isolement'],'l’écoute','Écouter est fondamental.')]);
C['h3|ped|1']=M(['La gestion de classe repose sur des règles claires et co-construites, des routines, un climat de respect, des encouragements (renforcement positif) et des sanctions justes et éducatives. La communication non violente exprime faits, sentiments, besoins et demandes.','Un enseignant cohérent est respecté.'],[
 Q('Que favorise une classe bien gérée ?',['des règles claires','le désordre','la peur','l’absence de consignes'],'des règles claires','Cadre sûr.'),
 Q('Qu’est-ce que le renforcement positif ?',['encourager un bon comportement','punir chaque erreur','ignorer l’effort','crier'],'encourager un bon comportement','Valorisation.'),
 Q('La communication non violente exprime…',['faits, sentiments, besoins, demande','insultes','menaces','silence total'],'faits, sentiments, besoins, demande','Quatre étapes.'),
 Q('Une sanction éducative doit être…',['juste et proportionnée','humiliante','aléatoire','publique et cruelle'],'juste et proportionnée','Elle aide l’élève à progresser.')]);
// ---- Littéraire
C['h3|lit|0']=M(['La morale étudie le bien et le mal. Pour Kant, il faut agir par devoir selon l’impératif catégorique : « Agis de telle sorte que ta maxime puisse devenir une loi universelle. » L’utilitarisme juge une action par ses conséquences (le plus grand bien du plus grand nombre).','Être libre, c’est choisir en assumant ses responsabilités.'],[
 Q('Quel philosophe a formulé l’impératif catégorique ?',['Kant','Platon','Hugo','Mendel'],'Kant','Philosophe allemand.'),
 Q('L’utilitarisme juge une action…',['par ses conséquences','par l’intention seulement','par la tradition','par le hasard'],'par ses conséquences','Le plus grand bien du plus grand nombre.'),
 Q('Être libre, c’est…',['choisir en assumant ses actes','faire n’importe quoi sans conséquences','obéir sans penser','fuir ses responsabilités'],'choisir en assumant ses actes','Liberté et responsabilité.'),
 Q('Agir par devoir, c’est agir…',['selon une règle morale universelle','selon son seul plaisir','selon la peur','selon la mode'],'selon une règle morale universelle','Idée de Kant.')]);
C['h3|lit|1']=M(['Quelques expressions latines : « Veni, vidi, vici » (Jules César : je suis venu, j’ai vu, j’ai vaincu), « Carpe diem » (Horace : cueille le jour), « Errare humanum est » (se tromper est humain), « Mens sana in corpore sano » (un esprit sain dans un corps sain).','Beaucoup de mots français viennent du latin.'],[
 Q('Que signifie « Carpe diem » ?',['cueille le jour','je suis venu','la terre','un esprit sain'],'cueille le jour','Profite du présent.'),
 Q('Qui a dit « Veni, vidi, vici » ?',['Jules César','Platon','Molière','Socrate'],'Jules César','Après sa victoire à Zéla.'),
 Q('« Errare humanum est » signifie…',['se tromper est humain','la fille aime la rose','j’aime','la terre est ronde'],'se tromper est humain','Nul n’est parfait.'),
 Q('« Mens sana in corpore sano » parle de…',['santé de l’esprit et du corps','vitesse','argent','guerre'],'santé de l’esprit et du corps','Un esprit sain dans un corps sain.')]);

// =============================== 4e HUMANITÉS ===============================
// ---- Français
C['h4|fr|0']=M(['Méthode de la dissertation à l’examen d’État : lire le sujet, repérer les mots clés, dégager la problématique, établir un plan (dialectique ou thématique), rédiger l’introduction, développer en paragraphes argumentés et illustrés d’exemples, conclure. Gérer son temps : un quart pour le brouillon.','Soigner la langue, l’orthographe et la présentation.'],[
 Q('Que fait-on en premier ?',['analyser le sujet','conclure','recopier','mesurer la copie'],'analyser le sujet','Comprendre les mots clés.'),
 Q('Combien de temps garder pour le brouillon environ ?',['un quart','tout le temps','aucun','trois quarts'],'un quart','Pour structurer avant de rédiger.'),
 Q('Que contient chaque paragraphe ?',['une idée, un argument, un exemple','trois sujets mélangés','aucune idée','seulement une citation'],'une idée, un argument, un exemple','Structure claire.'),
 Q('Quelle partie répond à la problématique ?',['la conclusion','l’introduction seulement','le brouillon','le titre'],'la conclusion','Elle fait le bilan.')]);
C['h4|fr|1']=M(['L’analyse d’un texte (texte d’étude) comprend : situer le texte (auteur, œuvre, époque), dégager le thème et la structure, étudier le style (figures, champs lexicaux, rythme), puis conclure sur l’intention et l’intérêt du texte.','On appuie chaque remarque sur une citation.'],[
 Q('Que fait-on d’abord pour analyser un texte ?',['le situer','le recopier','le résumer en un mot','le traduire'],'le situer','Auteur, œuvre, époque.'),
 Q('Que dégage-t-on à la fin ?',['l’intention et l’intérêt du texte','le prix du livre','la couleur de la couverture','le nombre de mots'],'l’intention et l’intérêt du texte','Conclusion de l’analyse.'),
 Q('Un champ lexical regroupe…',['des mots d’un même thème','des rimes','des verbes seulement','des noms propres seulement'],'des mots d’un même thème','Mots de la mer, de la guerre…'),
 Q('Pourquoi citer ?',['pour prouver une remarque','pour allonger','pour éviter d’analyser','pour décorer'],'pour prouver une remarque','Preuve textuelle.')]);
C['h4|fr|2']=M(['La synthèse de documents confronte plusieurs textes sur un même thème : repérer les idées communes et les différences, les regrouper en un plan thématique et rédiger un texte structuré sans copier ni donner son avis. On indique la source (auteur, numéro du document).','Elle exige rigueur, clarté et concision.'],[
 Q('Dans une synthèse, on…',['confronte plusieurs documents','résume un seul document','écrit son opinion libre','recopie le plus long'],'confronte plusieurs documents','Mise en relation.'),
 Q('Faut-il donner son avis ?',['non','toujours','dans l’introduction','dans le titre'],'non','On reste neutre.'),
 Q('Comment organise-t-on les idées ?',['par thèmes','par ordre alphabétique des auteurs','au hasard','par longueur'],'par thèmes','Plan thématique.'),
 Q('Que précise-t-on pour chaque idée ?',['le document d’origine','le prix du journal','l’âge du lecteur','le nombre de lignes'],'le document d’origine','Source citée.')]);
C['h4|fr|3']=M(['Révision de grammaire et d’orthographe : accord du participe passé, concordance des temps, homophones (a/à, ou/où, ce/se, son/sont, ses/ces), pluriels, accord sujet-verbe, ponctuation. Se relire est indispensable.','Une copie soignée gagne des points.'],[
 Q('Complète : « Les lettres que j’ai (écrire) … sont parties. »',['écrites','écrit','écrite','écrits'],'écrites','COD « lettres » placé avant : accord féminin pluriel.'),
 Q('Quelle phrase est correcte ?',['Ils sont partis où il fallait.','Ils sont partis ou il fallait.','Ils son partis où il fallait.','Ils sont partis où il fallais.'],'Ils sont partis où il fallait.','« où » lieu, « sont » verbe être.'),
 Q('Complète : « Il faut que nous (finir) … avant midi. »',['finissions','finirons','finissons','finirions'],'finissions','« Il faut que » + subjonctif présent.'),
 Q('Quelle phrase est correcte ?',['Ces enfants ont fini leurs devoirs.','Ses enfants ont fini leur devoirs.','Ces enfants on fini leurs devoir.','Ces enfant ont fini leurs devoirs.'],'Ces enfants ont fini leurs devoirs.','Accords et auxiliaire avoir.')]);
C['h4|fr|4']=M(['Le rapport et le compte rendu professionnels informent de façon claire : titre, date, auteur, contexte, faits, analyse, conclusions et recommandations. Le style est simple, précis, objectif, sans abréviations inutiles.','Utile pour le travail administratif, scolaire et associatif.'],[
 Q('Le style d’un rapport est…',['objectif et précis','poétique','humoristique','vague'],'objectif et précis','On rapporte les faits.'),
 Q('Que contient la conclusion d’un rapport ?',['des conclusions et recommandations','des blagues','des devinettes','un poème'],'des conclusions et recommandations','Ce qu’il faut faire.'),
 Q('Pourquoi dater un rapport ?',['pour situer les faits dans le temps','pour décorer','pour le rendre plus long','pour rien'],'pour situer les faits dans le temps','Traçabilité.'),
 Q('Quels éléments identifient l’auteur ?',['nom et fonction','un surnom seulement','une photo','un numéro de bus'],'nom et fonction','Responsabilité de l’auteur.')]);
// ---- Mathématiques
C['h4|ma|0']=M(['Révision d’algèbre : équations et inéquations du 1er et du 2e degré, systèmes, factorisation, identités remarquables, polynômes. Δ = b² − 4ac ; (a + b)² = a² + 2ab + b² ; a² − b² = (a − b)(a + b).','Vérifie toujours tes solutions.'],[
 Q('Résous 3x − 5 = 10.',['x = 5','x = 15','x = 3','x = 1,67'],'x = 5','3x = 15.'),
 Q('Factorise x² − 16.',['(x − 4)(x + 4)','(x − 8)(x + 2)','(x − 4)²','(x + 4)²'],'(x − 4)(x + 4)','a² − b².'),
 Q('Δ de x² − 6x + 9 ?',['0','36','−36','9'],'0','36 − 36.'),
 Q('Résous le système x + y = 7, x − y = 1.',['x = 4, y = 3','x = 3, y = 4','x = 5, y = 2','x = 6, y = 1'],'x = 4, y = 3','2x = 8.')]);
C['h4|ma|1']=M(['Révision d’analyse : limites, continuité, dérivées, étude de fonction, primitives et intégrales. Dérivées usuelles : (xⁿ)′ = n xⁿ⁻¹, (eˣ)′ = eˣ, (ln x)′ = 1/x. Produit : (uv)′ = u′v + uv′.','Un tableau de variation résume le comportement de f.'],[
 Q('Dérivée de ln x ?',['1/x','x','ln x','eˣ'],'1/x','Dérivée usuelle.'),
 Q('Dérivée de eˣ ?',['eˣ','xeˣ⁻¹','1','ln x'],'eˣ','Elle est égale à elle-même.'),
 Q('Dérivée de x · eˣ ?',['eˣ + x eˣ','eˣ','x eˣ','2x eˣ'],'eˣ + x eˣ','(uv)′ = u′v + uv′.'),
 Q('∫ de 1 à e de 1/x dx = ?',['1','e','0','e − 1'],'1','[ln x] = ln e − ln 1 = 1.')]);
C['h4|ma|2']=M(['Révision de trigonométrie et de géométrie : sin² + cos² = 1 ; sin 30° = 1/2 ; cos 60° = 1/2 ; tan = sin/cos ; théorèmes de Pythagore et de Thalès ; aire du triangle ½ b h ; volume des solides ; distance et milieu dans un repère.','Un schéma clair résout la moitié du problème.'],[
 Q('Que vaut cos² x + sin² x ?',['1','0','2','cos 2x'],'1','Relation fondamentale.'),
 Q('Triangle rectangle de côtés 6 et 8. Hypoténuse ?',['10','14','12','7'],'10','36 + 64 = 100.'),
 Q('Aire d’un triangle de base 12 et de hauteur 5 ?',['30','60','17','24'],'30','½ × 12 × 5.'),
 Q('tan 45° = ?',['1','0','1/2','√3'],'1','Opposé = adjacent.')]);
C['h4|ma|3']=M(['Révision de probabilités et statistiques : moyenne, médiane, variance, écart-type ; dénombrement (n!, C(n,k)) ; probabilité = favorables ÷ possibles ; loi binomiale B(n ; p) d’espérance np.','Un tableau ou un arbre aide à organiser les cas.'],[
 Q('On lance un dé. P(nombre premier) ?',['1/2','1/3','2/3','1/6'],'1/2','2, 3, 5 : trois cas sur six.'),
 Q('Combien de comités de 3 parmi 5 personnes ?',['10','15','6','20'],'10','C(5, 3).'),
 Q('Moyenne de 8, 10, 12, 14, 16 ?',['12','10','14','60'],'12','60 ÷ 5.'),
 Q('Espérance de B(20 ; 0,25) ?',['5','4','10','0,25'],'5','20 × 0,25.')]);
C['h4|ma|4']=M(['Problèmes types : âges, mélanges, vitesses, intérêts, pourcentages. On pose les inconnues, on traduit l’énoncé en équations, on résout, on vérifie et on conclut.','Exemple : intérêts simples I = C × t × n.'],[
 Q('Un père a 4 fois l’âge de son fils ; ensemble ils ont 50 ans. Âge du fils ?',['10 ans','12 ans','20 ans','8 ans'],'10 ans','x + 4x = 50.'),
 Q('Un capital de 2 000 $ placé à 5 % simple pendant 3 ans. Intérêt ?',['300 $','100 $','150 $','600 $'],'300 $','2 000 × 0,05 × 3.'),
 Q('Un train roule à 90 km/h pendant 2,5 h. Distance ?',['225 km','180 km','90 km','250 km'],'225 km','90 × 2,5.'),
 Q('Un prix passe de 80 $ à 100 $. Augmentation en % ?',['25 %','20 %','80 %','10 %'],'25 %','20 ÷ 80.')]);
C['h4|ma|5']=M(['Le raisonnement par récurrence prouve une propriété pour tout entier n : initialisation (vraie pour n₀), hérédité (si vraie pour n, alors vraie pour n + 1), conclusion. La logique distingue la réciproque, la contraposée et le raisonnement par l’absurde.','La contraposée de « A ⇒ B » est « non B ⇒ non A », équivalente.'],[
 Q('Quelles sont les deux étapes d’une récurrence ?',['initialisation et hérédité','introduction et conclusion','hypothèse et rumeur','thèse et antithèse'],'initialisation et hérédité','Puis on conclut.'),
 Q('La contraposée de « A ⇒ B » est…',['non B ⇒ non A','B ⇒ A','non A ⇒ non B','A et B'],'non B ⇒ non A','Elle est équivalente.'),
 Q('Le raisonnement par l’absurde consiste à…',['supposer le contraire et aboutir à une contradiction','supposer le résultat vrai sans preuve','recopier la réponse','faire un schéma'],'supposer le contraire et aboutir à une contradiction','On prouve en niant.'),
 Q('« Si x est pair alors x² est pair » : sa réciproque est…',['si x² est pair alors x est pair','si x est impair alors x² est impair','si x est pair alors x est pair','x² est un carré'],'si x² est pair alors x est pair','On inverse l’implication.')]);
// ---- Sciences
C['h4|sc|0']=M(['Révision de mécanique : cinématique (v = d/t, v = v₀ + at), dynamique (F = ma), poids (P = mg), énergie (Ec = ½mv², Ep = mgh), travail (W = F·d), puissance (P = W/t), conservation de l’énergie.','Fais toujours un schéma et pose les unités.'],[
 Q('F = ma : m = 4 kg, a = 3 m/s². F ?',['12 N','7 N','1,3 N','43 N'],'12 N','4 × 3.'),
 Q('Ec d’un mobile de 2 kg à 4 m/s ?',['16 J','8 J','32 J','4 J'],'16 J','½ × 2 × 16.'),
 Q('Travail d’une force de 20 N sur 3 m ?',['60 J','23 J','6,7 J','17 J'],'60 J','20 × 3.'),
 Q('Unité de la puissance ?',['le watt','le joule','le pascal','le newton'],'le watt','1 W = 1 J/s.')]);
C['h4|sc|1']=M(['Révision d’électricité : loi d’Ohm U = R·I ; puissance P = U·I ; énergie E = P·t ; résistances en série (R = R₁ + R₂) et en dérivation (1/R = 1/R₁ + 1/R₂) ; courant alternatif et transformateur ; induction.','Le kilowattheure mesure l’énergie électrique consommée.'],[
 Q('U = 24 V, R = 8 Ω. I = ?',['3 A','192 A','0,33 A','16 A'],'3 A','24 ÷ 8.'),
 Q('Deux résistances de 4 Ω et 6 Ω en série ?',['10 Ω','2,4 Ω','24 Ω','5 Ω'],'10 Ω','4 + 6.'),
 Q('Un appareil de 2 kW fonctionne 3 h. Énergie ?',['6 kWh','5 kWh','1,5 kWh','2 kWh'],'6 kWh','2 × 3.'),
 Q('Deux résistances de 6 Ω en dérivation ?',['3 Ω','12 Ω','6 Ω','1 Ω'],'3 Ω','1/R = 1/6 + 1/6.')]);
C['h4|sc|2']=M(['Révision de chimie : mole et masse molaire (n = m/M), concentration (C = n/V), pH, réactions acide-base, équilibrage des équations, chimie organique (alcanes, alcools), combustion.','Équilibrer : même nombre d’atomes de chaque côté.'],[
 Q('Combien de moles dans 22 g de CO₂ (M = 44) ?',['0,5 mol','2 mol','1 mol','22 mol'],'0,5 mol','22 ÷ 44.'),
 Q('Équilibre : H₂ + O₂ → H₂O. Coefficients ?',['2, 1, 2','1, 1, 1','1, 2, 1','2, 2, 1'],'2, 1, 2','2 H₂ + O₂ → 2 H₂O.'),
 Q('0,2 mol dans 0,5 L. Concentration ?',['0,4 mol/L','0,1 mol/L','2,5 mol/L','0,7 mol/L'],'0,4 mol/L','0,2 ÷ 0,5.'),
 Q('Formule du propane ?',['C₃H₈','C₂H₆','C₄H₁₀','CH₄'],'C₃H₈','Alcane à trois carbones.')]);
C['h4|sc|3']=M(['Révision de biologie humaine : digestion (bouche, estomac, intestin grêle), circulation (cœur, artères, veines), respiration (poumons, alvéoles), excrétion (reins), système nerveux et hormonal, reproduction, défenses immunitaires.','Chaque fonction relie des organes et des échanges.'],[
 Q('Quel organe pompe le sang ?',['le cœur','le foie','le rein','le poumon'],'le cœur','Il propulse le sang.'),
 Q('Où se fait l’absorption des nutriments ?',['dans l’intestin grêle','dans l’estomac seulement','dans la bouche','dans le cœur'],'dans l’intestin grêle','Villosités intestinales.'),
 Q('Quel organe filtre le sang pour former l’urine ?',['le rein','le foie','le cerveau','le poumon'],'le rein','Excrétion.'),
 Q('Les échanges gazeux se font…',['dans les alvéoles pulmonaires','dans la trachée','dans le larynx','dans l’estomac'],'dans les alvéoles pulmonaires','Oxygène entre, CO₂ sort.')]);
C['h4|sc|4']=M(['Révision d’écologie et d’environnement : écosystème, chaîne alimentaire (producteurs, consommateurs, décomposeurs), cycle du carbone, effet de serre, changement climatique, biodiversité, énergies renouvelables, gestion des déchets.','Protéger l’environnement, c’est préserver la vie.'],[
 Q('Qui sont les producteurs d’une chaîne alimentaire ?',['les plantes','les lions','les champignons seulement','les poissons seulement'],'les plantes','Ils fabriquent la matière organique.'),
 Q('Que font les décomposeurs ?',['recycler la matière morte','produire de la lumière','chasser','fabriquer le sol minéral'],'recycler la matière morte','Bactéries et champignons.'),
 Q('Quel gaz augmente l’effet de serre ?',['le dioxyde de carbone','l’hélium','l’argon','l’hydrogène pur'],'le dioxyde de carbone','Dû à la combustion des énergies fossiles.'),
 Q('Quelle énergie est renouvelable ?',['l’hydraulique','le charbon','le pétrole','le gaz fossile'],'l’hydraulique','Comme à Inga.')]);
// ---- Histoire, géographie, civisme
C['h4|hg|0']=M(['La RDC contemporaine : transition après les guerres (accords de Sun City, 2002), Constitution de 2006, premières élections pluralistes en 2006, alternance en 2019 avec l’élection de Félix Tshisekedi. Défis : sécurité à l’Est, développement, infrastructures, gouvernance.','Les institutions et la participation citoyenne consolident la démocratie.'],[
 Q('En quelle année est adoptée la Constitution actuelle ?',['2006','1960','1997','2019'],'2006','Elle organise les institutions.'),
 Q('Quel événement marque 2019 ?',['une alternance au sommet de l’État','l’indépendance','la colonisation','la chute de Mobutu'],'une alternance au sommet de l’État','Élection de Félix Tshisekedi.'),
 Q('Quel est un défi majeur de la RDC ?',['la sécurité à l’Est','le manque de lumière du soleil','l’absence de fleuves','le manque de forêts'],'la sécurité à l’Est','Conflits dans certaines provinces.'),
 Q('Comment consolider la démocratie ?',['par la participation citoyenne','par l’abstention','par la violence','par la censure'],'par la participation citoyenne','Voter, s’informer, contrôler.')]);
C['h4|hg|1']=M(['Le monde actuel est organisé par des organisations internationales : ONU (paix, développement), Union africaine (unité du continent), SADC (communauté de l’Afrique australe, dont la RDC), CEEAC (Afrique centrale), OMC (commerce), FMI et Banque mondiale (finance). Des puissances comme les États-Unis, la Chine, l’Inde et l’Europe pèsent sur l’économie mondiale.','Les BRICS réunissent des économies émergentes.'],[
 Q('De quelle communauté régionale la RDC fait-elle partie ?',['la SADC','l’ASEAN','l’OPEP','le Mercosur'],'la SADC','Communauté de développement de l’Afrique australe.'),
 Q('Quelle organisation a son siège à Addis-Abeba ?',['l’Union africaine','l’OTAN','l’UNESCO','la FIFA'],'l’Union africaine','Capitale éthiopienne.'),
 Q('L’ONU a pour but principal…',['la paix et la coopération','la guerre','la colonisation','le sport'],'la paix et la coopération','Charte de 1945.'),
 Q('L’OMC s’occupe…',['du commerce international','de la santé','de l’éducation','des élections'],'du commerce international','Règles des échanges.')]);
C['h4|hg|2']=M(['Les élections permettent aux citoyens de choisir leurs représentants. En RDC, la CENI organise le scrutin ; l’électeur s’inscrit, reçoit une carte d’électeur et vote librement et en secret. Les observateurs veillent à la transparence. Voter est un droit et un devoir civique.','Un citoyen informé vote mieux.'],[
 Q('Quelle institution organise les élections en RDC ?',['la CENI','la FIFA','l’OMS','la SNCC'],'la CENI','Commission électorale nationale indépendante.'),
 Q('Le vote est…',['libre et secret','public et obligatoire sous contrainte','vendu au plus offrant','réservé aux chefs'],'libre et secret','Garantie démocratique.'),
 Q('À quoi servent les observateurs ?',['garantir la transparence','voter à la place des électeurs','fermer les bureaux','choisir le gagnant'],'garantir la transparence','Ils contrôlent le processus.'),
 Q('Pour voter, il faut être…',['inscrit sur la liste électorale','étranger','âgé de 10 ans','absent'],'inscrit sur la liste électorale','Et avoir l’âge requis.')]);
// ---- Mécanique
C['h4|mec|0']=M(['Diagnostic d’une panne de démarrage : vérifier la batterie (tension, cosses), le démarreur, le carburant, les bougies ou les injecteurs, les fusibles. On procède du plus simple au plus complexe, en testant une hypothèse à la fois.','Écouter, regarder, mesurer.'],[
 Q('Un moteur ne démarre pas et les phares sont faibles. Cause probable ?',['batterie déchargée','pneu crevé','essuie-glace usé','rétroviseur cassé'],'batterie déchargée','Tension insuffisante.'),
 Q('Quel outil teste la tension de la batterie ?',['le multimètre','la clé à molette','le pied à coulisse','le niveau à bulle'],'le multimètre','Mesure en volts.'),
 Q('Comment procède-t-on pour diagnostiquer ?',['du simple au complexe, une hypothèse à la fois','au hasard en changeant tout','en frappant le moteur','en attendant'],'du simple au complexe, une hypothèse à la fois','Méthode rigoureuse.'),
 Q('Que vérifie-t-on côté carburant ?',['l’arrivée et le filtre','le klaxon','les rétroviseurs','la peinture'],'l’arrivée et le filtre','Pompe, filtre, injecteurs.')]);
C['h4|mec|1']=M(['Organiser l’atelier avec la méthode des 5S : Trier (garder l’utile), Ranger (une place pour chaque chose), Nettoyer, Standardiser (règles communes), Soutenir (garder l’habitude). Un atelier ordonné est plus sûr et plus efficace.','Chaque outil retourne à sa place.'],[
 Q('Que signifie le premier S de la méthode 5S ?',['Trier','Souder','Scier','Sauter'],'Trier','Éliminer l’inutile.'),
 Q('Quel est le bénéfice d’un atelier rangé ?',['sécurité et gain de temps','plus de bruit','plus de risques','plus de pannes'],'sécurité et gain de temps','Chaque chose à sa place.'),
 Q('« Standardiser » signifie…',['fixer des règles communes','tout jeter','tout peindre','éteindre la lumière'],'fixer des règles communes','Procédures partagées.'),
 Q('Que fait-on avec un outil usé ou cassé ?',['on le signale ou le remplace','on le cache','on le prête','on l’utilise quand même'],'on le signale ou le remplace','Sécurité d’abord.')]);
C['h4|mec|2']=M(['Lire un plan : repérer le cartouche (titre, échelle, auteur), les vues, les cotes (en mm), les tolérances et les états de surface ; les normes (ISO, NF) assurent que tous comprennent le même dessin.','Une tolérance de ± 0,1 mm indique l’écart admis.'],[
 Q('Que contient le cartouche d’un plan ?',['titre, échelle, auteur','la météo','le menu','une chanson'],'titre, échelle, auteur','Identité du plan.'),
 Q('Que signifie une tolérance de ± 0,1 mm ?',['un écart admis autour de la cote','une vitesse','un prix','une masse'],'un écart admis autour de la cote','Précision acceptable.'),
 Q('Que garantissent les normes ?',['un langage commun','la gratuité','la rapidité','le silence'],'un langage commun','ISO, NF.'),
 Q('Les cotes sont généralement en…',['millimètres','kilomètres','litres','grammes'],'millimètres','Unité standard.')]);
C['h4|mec|3']=M(['L’entretien préventif d’un véhicule : vidange de l’huile et remplacement du filtre à huile selon le kilométrage, filtre à air, liquide de refroidissement, niveau du liquide de frein, pression et état des pneus, courroies, bougies.','Un véhicule bien entretenu dure plus longtemps et consomme moins.'],[
 Q('Pourquoi vidanger le moteur ?',['l’huile s’use et perd ses propriétés','pour changer de couleur','pour vider le réservoir','pour gagner du poids'],'l’huile s’use et perd ses propriétés','Lubrification efficace.'),
 Q('Que contrôle-t-on sur un pneu ?',['la pression et l’usure','le prix','la couleur','la marque seulement'],'la pression et l’usure','Sécurité.'),
 Q('À quoi sert le filtre à air ?',['arrêter les poussières avant le moteur','refroidir l’huile','éclairer','freiner'],'arrêter les poussières avant le moteur','Il protège le moteur.'),
 Q('Quel liquide contrôle-t-on avant un long trajet ?',['le liquide de refroidissement','le jus de fruit','l’eau de javel','le lait'],'le liquide de refroidissement','Évite la surchauffe.')]);
// ---- Commerciale et gestion
C['h4|com|0']=M(['Le bilan présente à une date donnée l’actif (ce que possède l’entreprise : immobilisations, stocks, créances, trésorerie) et le passif (capitaux propres et dettes). Le compte de résultat récapitule sur une période les produits et les charges : résultat = produits − charges.','Un résultat positif est un bénéfice, négatif une perte.'],[
 Q('Que présente le compte de résultat ?',['produits et charges d’une période','l’inventaire des meubles uniquement','la liste des clients','le plan de l’usine'],'produits et charges d’une période','Il donne le résultat.'),
 Q('Produits 800 000 FC, charges 900 000 FC. Résultat ?',['perte de 100 000 FC','bénéfice de 100 000 FC','bénéfice de 1 700 000 FC','nul'],'perte de 100 000 FC','800 − 900 < 0.'),
 Q('Les stocks et la trésorerie sont à…',['l’actif','au passif','aux charges','aux produits'],'l’actif','Ce que l’entreprise possède.'),
 Q('Les capitaux propres figurent…',['au passif','à l’actif','dans les charges','dans les produits'],'au passif','Ressources des associés.')]);
C['h4|com|1']=M(['Gérer un stock : stock final = stock initial + entrées − sorties. On valorise les sorties selon FIFO (premier entré, premier sorti) ou CMUP (coût moyen unitaire pondéré). L’inventaire compare le stock réel et le stock comptable.','Éviter la rupture et le sur-stockage.'],[
 Q('Stock initial 50, entrées 30, sorties 40. Stock final ?',['40','120','20','80'],'40','50 + 30 − 40.'),
 Q('FIFO signifie…',['premier entré, premier sorti','dernier entré, premier sorti','fin de l’inventaire fixe','facture interne finale'],'premier entré, premier sorti','Les plus anciens sortent d’abord.'),
 Q('À quoi sert l’inventaire ?',['comparer le stock réel et le stock comptable','imprimer des billets','embaucher','faire de la publicité'],'comparer le stock réel et le stock comptable','Il détecte les écarts.'),
 Q('Une rupture de stock, c’est…',['ne plus avoir un produit à vendre','avoir trop de produits','perdre une clé','changer de prix'],'ne plus avoir un produit à vendre','Elle fait perdre des ventes.')]);
C['h4|com|2']=M(['Créer et gérer une petite entreprise demande : un statut juridique, un capital, un compte bancaire, une comptabilité tenue régulièrement et le respect des obligations fiscales (déclarations, impôts sur les bénéfices, TVA selon le cas). La bonne gestion et l’honnêteté fidélisent la clientèle.','Payer ses impôts finance les services publics.'],[
 Q('Pourquoi tenir une comptabilité régulière ?',['pour connaître sa situation et respecter la loi','pour décorer','pour éviter les clients','pour cacher des résultats'],'pour connaître sa situation et respecter la loi','Suivi et conformité.'),
 Q('Que financent les impôts ?',['les services publics','les voyages privés du patron','rien','les amendes'],'les services publics','Écoles, routes, hôpitaux.'),
 Q('Que représente le capital ?',['les apports de départ','les dettes','les ventes','les impôts'],'les apports de départ','Argent ou biens apportés.'),
 Q('Quelle qualité fidélise les clients ?',['l’honnêteté','le retard','la tromperie','le désordre'],'l’honnêteté','Confiance durable.')]);
// ---- Pédagogique
C['h4|ped|0']=M(['Le stage pratique permet d’enseigner en situation réelle sous la direction d’un titulaire : observer, préparer des fiches, donner des leçons, être évalué et se remettre en question. Ponctualité, tenue correcte et respect des élèves sont de rigueur.','Après chaque leçon, on analyse ce qui a marché.'],[
 Q('À quoi sert le stage pratique ?',['enseigner en situation réelle','éviter les cours','jouer','fuir l’école'],'enseigner en situation réelle','Mise en pratique.'),
 Q('Que prépare le stagiaire avant la leçon ?',['une fiche de leçon','un menu','un voyage','un cadeau'],'une fiche de leçon','Objectifs, méthode, évaluation.'),
 Q('Après la leçon, le stagiaire doit…',['analyser et s’améliorer','oublier','blâmer les élèves','changer de métier'],'analyser et s’améliorer','Réflexion sur la pratique.'),
 Q('Quelle attitude est attendue du stagiaire ?',['ponctualité et respect','retard et moqueries','indifférence','arrogance'],'ponctualité et respect','Professionnalisme.')]);
C['h4|ped|1']=M(['L’éthique de l’enseignant repose sur le respect de chaque élève, la justice et l’équité, l’honnêteté, la confidentialité, la protection de l’enfant contre toute violence et le refus de toute discrimination. L’enseignant est un modèle.','Le Code de déontologie guide le métier.'],[
 Q('Que doit refuser l’enseignant ?',['toute discrimination et violence','la préparation','la ponctualité','l’écoute'],'toute discrimination et violence','Égalité et protection.'),
 Q('La confidentialité consiste à…',['ne pas divulguer les informations privées des élèves','tout raconter à tout le monde','publier les notes sans raison','révéler les secrets de famille'],'ne pas divulguer les informations privées des élèves','Respect de la vie privée.'),
 Q('L’enseignant est aussi…',['un modèle pour ses élèves','un simple spectateur','un adversaire','un invité'],'un modèle pour ses élèves','Il éduque par l’exemple.'),
 Q('Que signifie l’équité ?',['traiter chacun avec justice','donner tout au préféré','ignorer les faibles','punir au hasard'],'traiter chacun avec justice','Justice envers tous.')]);
// ---- Littéraire
C['h4|lit|0']=M(['Liberté, justice et société : pour Hobbes, l’État protège de la violence ; pour Rousseau, le contrat social fonde la société sur la volonté générale ; pour Montesquieu, la séparation des pouvoirs (législatif, exécutif, judiciaire) empêche l’abus de pouvoir.','Une société juste garantit les droits de tous.'],[
 Q('Qui a défendu la séparation des pouvoirs ?',['Montesquieu','Molière','Camus','Platon'],'Montesquieu','« De l’esprit des lois ».'),
 Q('Quel philosophe parle du contrat social ?',['Rousseau','Aristote','Descartes','Kant seul'],'Rousseau','Du contrat social, 1762.'),
 Q('Pourquoi séparer les pouvoirs ?',['pour empêcher l’abus de pouvoir','pour rendre l’État faible','pour supprimer les lois','pour créer la guerre'],'pour empêcher l’abus de pouvoir','Un pouvoir arrête l’autre.'),
 Q('Une société juste garantit…',['les droits de tous','les privilèges d’un seul','le silence','l’ignorance'],'les droits de tous','Égalité en droits.')]);
C['h4|lit|1']=M(['Révision de latin : déclinaison de rosa, rosae (nominatif rosa, accusatif rosam, génitif rosae), verbes amo/amas/amat, sum/es/est, vocabulaire (terra, puella, aqua, vita), expressions et maximes latines.','Le latin éclaire l’origine des mots français.'],[
 Q('« Aqua » signifie…',['l’eau','la terre','le feu','le vent'],'l’eau','Aquatique, aquarium.'),
 Q('« Vita » signifie…',['la vie','la vitesse','la vue','la vigne'],'la vie','Vital, vitamine.'),
 Q('« Tu amas » signifie…',['tu aimes','il aime','j’aime','vous aimez'],'tu aimes','2e personne du singulier.'),
 Q('« Rosam » est à quel cas ?',['l’accusatif','le nominatif','le génitif','le datif'],'l’accusatif','Complément d’objet direct.')]);
