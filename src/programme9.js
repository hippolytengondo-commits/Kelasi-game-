import {Q} from './data.js';

// Humanités, 1re et 2e années : 60 missions jouables
// (tronc commun : français, mathématiques, sciences, histoire-géographie-civisme ;
//  sections : mécanique, commerciale et gestion, pédagogique, littéraire).
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
export const C9={},J9={},K9={};
const C=C9;

// =============================== 1re HUMANITÉS ===============================
// ---- Français
C['h1|fr|0']=M(['Le texte argumentatif défend une thèse avec des arguments (logiques, d’autorité, d’exemple). Il peut aussi réfuter la thèse adverse et faire une concession (« certes… mais »).','Les connecteurs (d’abord, en effet, cependant, donc) organisent le raisonnement.'],[
 Q('Que défend un texte argumentatif ?',['une thèse','un décor','un souvenir','une recette'],'une thèse','La thèse est l’opinion soutenue.'),
 Q('« Selon l’OMS, l’eau potable sauve des vies » est un argument…',['d’autorité','d’exemple personnel','de politesse','de rime'],'d’autorité','On s’appuie sur une institution reconnue.'),
 Q('Que fait-on quand on réfute une thèse ?',['on montre qu’elle est fausse ou insuffisante','on la recopie','on l’ignore','on la traduit'],'on montre qu’elle est fausse ou insuffisante','Réfuter, c’est contredire avec des raisons.'),
 Q('Quel connecteur introduit une concession ?',['certes','donc','car','enfin'],'certes','« Certes… mais » accorde un point à l’adversaire.')]);
C['h1|fr|1']=M(['L’alexandrin est un vers de douze syllabes. Les rimes peuvent être plates (AABB), croisées (ABAB) ou embrassées (ABBA). Un quatrain a quatre vers, un tercet trois ; le sonnet compte quatorze vers (deux quatrains et deux tercets).','Le « e » muet ne compte pas devant une voyelle ou en fin de vers.'],[
 Q('Combien de syllabes a un alexandrin ?',['12','8','10','14'],'12','Douze syllabes.'),
 Q('Quelle disposition de rimes est croisée ?',['ABAB','AABB','ABBA','AAAA'],'ABAB','Une rime sur deux se répond.'),
 Q('Combien de vers compte un sonnet ?',['14','12','10','16'],'14','Deux quatrains et deux tercets.'),
 Q('Une strophe de trois vers s’appelle…',['un tercet','un quatrain','un distique','un sizain'],'un tercet','Tercet = trois vers.')]);
C['h1|fr|2']=M(['La Négritude est un mouvement littéraire des années 1930 fondé par Léopold Sédar Senghor (Sénégal), Aimé Césaire (Martinique) et Léon-Gontran Damas (Guyane). Il affirme la fierté et la culture noires.','Césaire écrit le « Cahier d’un retour au pays natal » ; Senghor est le premier Africain élu à l’Académie française (1983).'],[
 Q('Qui a fondé la Négritude avec Césaire ?',['Senghor','Molière','Hugo','Zola'],'Senghor','Senghor, Césaire et Damas.'),
 Q('De quel pays est Senghor ?',['le Sénégal','la RDC','la Côte d’Ivoire','le Mali'],'le Sénégal','Premier président du Sénégal aussi.'),
 Q('Quelle œuvre est d’Aimé Césaire ?',['Cahier d’un retour au pays natal','Les Misérables','Germinal','L’Avare'],'Cahier d’un retour au pays natal','Poème publié en 1939.'),
 Q('La Négritude affirme…',['la fierté de la culture noire','la supériorité d’un peuple','le rejet de toute lecture','l’oubli des traditions'],'la fierté de la culture noire','Elle valorise l’identité africaine.')]);
C['h1|fr|3']=M(['La contraction de texte consiste à réduire un texte au quart, au tiers ou à un nombre de mots précis (avec dix pour cent de tolérance) en gardant les idées essentielles et leur ordre.','On n’y ajoute ni opinion, ni citation, ni exemple, et on reformule avec ses mots.'],[
 Q('Peut-on citer le texte dans une contraction ?',['non, on reformule','oui, abondamment','oui, en entier','seulement le titre'],'non, on reformule','On utilise ses propres mots.'),
 Q('Un texte de 400 mots contracté au quart fait…',['100 mots','200 mots','300 mots','40 mots'],'100 mots','400 ÷ 4 = 100.'),
 Q('Que supprime-t-on d’abord ?',['les exemples et illustrations','la thèse','l’idée principale','la logique'],'les exemples et illustrations','On garde l’essentiel.'),
 Q('Dans quel ordre présente-t-on les idées ?',['celui du texte','l’inverse','au hasard','par longueur'],'celui du texte','On respecte la progression de l’auteur.')]);
C['h1|fr|4']=M(['Les registres (tonalités) donnent « l’ambiance » d’un texte : lyrique (sentiments), pathétique (pitié), tragique (fatalité), comique (rire), satirique (critique), épique (exploit), polémique (attaque), didactique (enseigner).','On les repère grâce au vocabulaire, au rythme et aux figures de style.'],[
 Q('Quel registre cherche à faire rire ?',['comique','tragique','épique','didactique'],'comique','Il provoque le rire.'),
 Q('Quel registre célèbre un exploit héroïque ?',['épique','satirique','lyrique','polémique'],'épique','Héros, grandeur, hyperboles.'),
 Q('Quel registre critique un défaut de la société en s’en moquant ?',['satirique','pathétique','didactique','lyrique'],'satirique','La satire critique en riant.'),
 Q('Quel registre exprime les sentiments personnels ?',['lyrique','épique','polémique','comique'],'lyrique','Joie, amour, mélancolie.')]);
// ---- Mathématiques
C['h1|ma|0']=M(['Un ensemble est une collection d’éléments. On note x ∈ A (appartient), A ⊂ B (inclus), A ∪ B (union), A ∩ B (intersection). Pour deux ensembles : |A ∪ B| = |A| + |B| − |A ∩ B|.','La logique utilise la négation, la conjonction (et), la disjonction (ou) et l’implication.'],[
 Q('A = {1, 2, 3} et B = {2, 3, 4}. Que vaut A ∩ B ?',['{2, 3}','{1, 4}','{1, 2, 3, 4}','{3}'],'{2, 3}','Les éléments communs.'),
 Q('A = {1, 2, 3} et B = {2, 3, 4}. Combien d’éléments a A ∪ B ?',['4','6','3','2'],'4','{1, 2, 3, 4}.'),
 Q('|A| = 12, |B| = 8 et |A ∩ B| = 3. Que vaut |A ∪ B| ?',['17','20','23','15'],'17','12 + 8 − 3 = 17.'),
 Q('Quel symbole signifie « appartient à » ?',['∈','⊂','∪','∅'],'∈','x ∈ A : x est élément de A.')]);
C['h1|ma|1']=M(['Une fonction du second degré s’écrit f(x) = ax² + bx + c (a ≠ 0). Sa courbe est une parabole, tournée vers le haut si a > 0 et vers le bas si a < 0. Son sommet a pour abscisse −b/(2a).','Les racines sont les valeurs de x pour lesquelles f(x) = 0.'],[
 Q('La parabole de f(x) = 2x² + 1 est tournée vers…',['le haut','le bas','la droite','la gauche'],'le haut','a = 2 > 0.'),
 Q('Abscisse du sommet de f(x) = x² − 4x + 3 ?',['2','−2','4','3'],'2','−b/(2a) = 4/2 = 2.'),
 Q('f(x) = x² − 4x + 3. Que vaut f(2) ?',['−1','0','1','3'],'−1','4 − 8 + 3 = −1.'),
 Q('Quelles sont les racines de x² − 4x + 3 ?',['1 et 3','−1 et −3','2 et 3','0 et 4'],'1 et 3','(x − 1)(x − 3) = 0.')]);
C['h1|ma|2']=M(['Pour résoudre ax² + bx + c = 0, on calcule le discriminant Δ = b² − 4ac. Si Δ > 0 : deux solutions (−b ± √Δ)/(2a) ; si Δ = 0 : une solution double −b/(2a) ; si Δ < 0 : aucune solution réelle.','On résout une inéquation du second degré en étudiant le signe de l’expression.'],[
 Q('Résous x² − 5x + 6 = 0.',['x = 2 ou x = 3','x = −2 ou x = −3','x = 1 ou x = 6','x = 5 ou x = 6'],'x = 2 ou x = 3','Δ = 25 − 24 = 1 ; x = (5 ± 1)/2.'),
 Q('Combien de solutions réelles pour x² + 2x + 1 = 0 ?',['une (double)','deux distinctes','aucune','trois'],'une (double)','Δ = 4 − 4 = 0.'),
 Q('Résous x² − 9 = 0.',['x = 3 ou x = −3','x = 9','x = 3 seulement','x = 0'],'x = 3 ou x = −3','x² = 9.'),
 Q('Résous x² − 4 < 0.',['−2 < x < 2','x < −2 ou x > 2','x > 2','x < 2'],'−2 < x < 2','Le polynôme est négatif entre les racines.')]);
C['h1|ma|3']=M(['Dans un triangle rectangle : sin = côté opposé ÷ hypoténuse, cos = côté adjacent ÷ hypoténuse, tan = opposé ÷ adjacent. Valeurs à connaître : sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1. Toujours : sin² + cos² = 1.','180° = π radians.'],[
 Q('Que vaut sin 30° ?',['1/2','√3/2','1','0'],'1/2','Valeur remarquable.'),
 Q('Que vaut tan 45° ?',['1','0','1/2','√2'],'1','Opposé = adjacent.'),
 Q('Côté opposé 3, hypoténuse 5. Que vaut sin ?',['3/5','5/3','4/5','3/4'],'3/5','opposé ÷ hypoténuse.'),
 Q('90° équivaut à…',['π/2 rad','π rad','2π rad','π/4 rad'],'π/2 rad','180° = π, donc 90° = π/2.')]);
C['h1|ma|4']=M(['Dans un repère, la distance AB = √[(xB − xA)² + (yB − yA)²] et le milieu de [AB] a pour coordonnées ((xA + xB)/2 ; (yA + yB)/2). Une droite a pour équation y = mx + p (m : pente).','Deux vecteurs sont colinéaires si leurs coordonnées sont proportionnelles.'],[
 Q('Distance entre A(1 ; 2) et B(4 ; 6) ?',['5','7','25','3'],'5','√(9 + 16) = 5.'),
 Q('Milieu de A(2 ; 4) et B(6 ; 8) ?',['(4 ; 6)','(8 ; 12)','(2 ; 2)','(3 ; 5)'],'(4 ; 6)','Moyenne des coordonnées.'),
 Q('Droite de pente 2 passant par (0 ; 1) ?',['y = 2x + 1','y = x + 2','y = 2x − 1','y = 1/2 x'],'y = 2x + 1','p = 1.'),
 Q('Les vecteurs (2 ; 4) et (1 ; 2) sont…',['colinéaires','perpendiculaires','égaux','opposés'],'colinéaires','(2 ; 4) = 2 × (1 ; 2).')]);
C['h1|ma|5']=M(['Une suite arithmétique augmente (ou diminue) d’une raison r constante : uₙ = u₀ + n × r. La somme des n premiers entiers 1 + 2 + … + n vaut n(n + 1)/2.','Exemple : 5, 9, 13, 17… a pour raison 4.'],[
 Q('Raison de la suite 5, 9, 13, 17 ?',['4','5','9','2'],'4','Chaque terme ajoute 4.'),
 Q('u₀ = 3 et r = 2. Que vaut u₅ ?',['13','10','15','8'],'13','3 + 5 × 2.'),
 Q('Que vaut 1 + 2 + … + 10 ?',['55','45','100','50'],'55','10 × 11 ÷ 2.'),
 Q('Somme de 2 + 4 + 6 + … + 20 ?',['110','100','120','90'],'110','2 × (1 + … + 10) = 2 × 55.')]);
// ---- Sciences
C['h1|sc|0']=M(['Mouvement rectiligne uniforme : v = d/t. Mouvement uniformément accéléré : v = v₀ + at et d = ½at² (départ arrêté). L’accélération a = Δv/Δt s’exprime en m/s².','Conversion : 72 km/h = 20 m/s (diviser par 3,6).'],[
 Q('72 km/h valent…',['20 m/s','72 m/s','7,2 m/s','200 m/s'],'20 m/s','72 ÷ 3,6 = 20.'),
 Q('Un mobile passe de 0 à 20 m/s en 4 s. Accélération ?',['5 m/s²','80 m/s²','24 m/s²','0,2 m/s²'],'5 m/s²','20 ÷ 4 = 5.'),
 Q('a = 2 m/s², départ arrêté. Distance en 3 s ?',['9 m','6 m','12 m','18 m'],'9 m','½ × 2 × 9 = 9.'),
 Q('Une voiture roule à 60 km/h pendant 2 h. Distance ?',['120 km','30 km','62 km','240 km'],'120 km','d = v × t.')]);
C['h1|sc|1']=M(['Lois de Newton : (1) inertie : sans force, un corps garde son mouvement ; (2) F = m × a ; (3) action-réaction : à toute action correspond une réaction égale et opposée. Le poids vaut P = m × g (g ≈ 10 N/kg).','La force se mesure en newtons.'],[
 Q('Force nécessaire pour accélérer 5 kg de 2 m/s² ?',['10 N','2,5 N','7 N','25 N'],'10 N','F = 5 × 2.'),
 Q('Poids d’une masse de 60 kg (g = 10) ?',['600 N','60 N','6 N','6 000 N'],'600 N','P = m × g.'),
 Q('Quelle loi dit « action = −réaction » ?',['la 3e loi','la 1re loi','la 2e loi','la loi d’Ohm'],'la 3e loi','Action-réaction.'),
 Q('Sans force, un corps en mouvement…',['continue en ligne droite à vitesse constante','s’arrête aussitôt','accélère','tourne sur lui-même'],'continue en ligne droite à vitesse constante','Principe d’inertie.')]);
C['h1|sc|2']=M(['La mole est une quantité de matière : n = m ÷ M (masse ÷ masse molaire). Une mole contient 6,02 × 10²³ entités (nombre d’Avogadro). Masses atomiques : H = 1, C = 12, O = 16 g/mol.','Volume molaire d’un gaz dans les conditions normales : 22,4 L/mol.'],[
 Q('Masse molaire de l’eau H₂O ?',['18 g/mol','16 g/mol','10 g/mol','20 g/mol'],'18 g/mol','2 × 1 + 16.'),
 Q('Masse molaire de CO₂ ?',['44 g/mol','28 g/mol','32 g/mol','12 g/mol'],'44 g/mol','12 + 2 × 16.'),
 Q('Combien de moles dans 36 g d’eau ?',['2 mol','1 mol','4 mol','0,5 mol'],'2 mol','36 ÷ 18.'),
 Q('Volume de 2 mol de gaz (conditions normales) ?',['44,8 L','22,4 L','11,2 L','2 L'],'44,8 L','2 × 22,4.')]);
C['h1|sc|3']=M(['La mitose produit deux cellules filles identiques à la cellule mère, avec le même nombre de chromosomes (46 chez l’humain). Ses phases : prophase, métaphase, anaphase, télophase, précédées de l’interphase où l’ADN est copié.','Elle permet la croissance et le renouvellement des cellules.'],[
 Q('La mitose donne…',['deux cellules identiques','quatre cellules différentes','un gamète','une bactérie'],'deux cellules identiques','Division conforme.'),
 Q('Quelle phase vient en premier ?',['la prophase','l’anaphase','la télophase','la métaphase'],'la prophase','Prophase, métaphase, anaphase, télophase.'),
 Q('Quand l’ADN est-il copié ?',['pendant l’interphase','pendant la télophase','jamais','après la mort'],'pendant l’interphase','Avant la division.'),
 Q('Combien de chromosomes dans une cellule humaine ordinaire ?',['46','23','92','12'],'46','23 paires.')]);
C['h1|sc|4']=M(['Le travail d’une force : W = F × d (joules). L’énergie cinétique : Ec = ½ m v². L’énergie potentielle de pesanteur : Ep = m g h. La puissance : P = W ÷ t (watts).','L’énergie se conserve et se transforme.'],[
 Q('m = 2 kg, v = 3 m/s. Énergie cinétique ?',['9 J','6 J','18 J','3 J'],'9 J','½ × 2 × 9.'),
 Q('m = 1 kg, h = 10 m, g = 10. Ep ?',['100 J','10 J','1 J','1 000 J'],'100 J','m g h.'),
 Q('600 J fournis en 10 s. Puissance ?',['60 W','6 000 W','610 W','16 W'],'60 W','W ÷ t.'),
 Q('Quelle est l’unité de la puissance ?',['le watt','le joule','le newton','le volt'],'le watt','Symbole W.')]);
// ---- Histoire, géographie, civisme
C['h1|hg|0']=M(['La Première Guerre mondiale (1914-1918) oppose les Alliés (France, Royaume-Uni, Russie…) aux Empires centraux (Allemagne, Autriche-Hongrie…). Elle commence après l’attentat de Sarajevo, se termine par l’armistice du 11 novembre 1918 et le traité de Versailles (1919).','La Force publique du Congo belge a combattu en Afrique orientale (Tabora, 1916).'],[
 Q('En quelle année commence la Première Guerre mondiale ?',['1914','1939','1905','1918'],'1914','1914-1918.'),
 Q('Quel événement déclenche la guerre ?',['l’attentat de Sarajevo','la chute du Mur de Berlin','l’indépendance du Congo','le krach de 1929'],'l’attentat de Sarajevo','Assassinat de l’archiduc François-Ferdinand.'),
 Q('Quel traité conclut la guerre avec l’Allemagne ?',['le traité de Versailles','le traité de Rome','la charte de l’ONU','le traité de Berlin'],'le traité de Versailles','Signé en 1919.'),
 Q('Quelle troupe congolaise a combattu en Afrique orientale ?',['la Force publique','l’armée zaïroise','les FARDC','les Léopards'],'la Force publique','Elle a pris Tabora en 1916.')]);
C['h1|hg|1']=M(['La Seconde Guerre mondiale (1939-1945) oppose les Alliés à l’Axe (Allemagne nazie, Italie, Japon). Elle commence avec l’invasion de la Pologne (1er septembre 1939) et se termine après Hiroshima et Nagasaki (août 1945). L’ONU est créée en 1945.','L’uranium de Shinkolobwe (Congo belge) a servi aux premières bombes atomiques.'],[
 Q('Quand commence la Seconde Guerre mondiale ?',['1939','1914','1945','1960'],'1939','Invasion de la Pologne.'),
 Q('Quelle organisation naît en 1945 ?',['l’ONU','l’Union africaine','l’OTAN seulement','la SADC'],'l’ONU','Organisation des Nations unies.'),
 Q('D’où venait l’uranium utilisé par les États-Unis ?',['du Congo belge (Shinkolobwe)','du Sénégal','du Kenya','d’Égypte'],'du Congo belge (Shinkolobwe)','Mine du Katanga.'),
 Q('Quel pays faisait partie de l’Axe ?',['le Japon','la France','le Royaume-Uni','les États-Unis'],'le Japon','Axe : Allemagne, Italie, Japon.')]);
C['h1|hg|2']=M(['La Constitution de la RDC de 2006 organise la séparation des pouvoirs : exécutif (Président et Gouvernement), législatif (Parlement : Assemblée nationale et Sénat) et judiciaire (cours et tribunaux, dont la Cour constitutionnelle). Le pays compte 26 provinces.','Le Président est élu pour cinq ans, renouvelable une fois.'],[
 Q('Qui fait les lois ?',['le Parlement','le Président seul','la police','les provinces seules'],'le Parlement','Assemblée nationale et Sénat.'),
 Q('Quelle est la durée du mandat présidentiel ?',['5 ans','7 ans','3 ans','10 ans'],'5 ans','Renouvelable une fois.'),
 Q('Quelle institution vérifie la conformité des lois à la Constitution ?',['la Cour constitutionnelle','l’Assemblée provinciale','la Mairie','l’armée'],'la Cour constitutionnelle','Elle veille au respect de la Constitution.'),
 Q('Combien de provinces compte la RDC ?',['26','11','6','13'],'26','Depuis le découpage.')]);
// ---- Mécanique (section technique)
C['h1|mec|0']=M(['À l’atelier, la sécurité passe d’abord : équipements de protection individuelle (lunettes, gants, chaussures de sécurité, casque), tenue ajustée, pas de bijoux près des machines, ordre et propreté, extincteur à portée.','Un accident évité vaut mieux qu’un blessé soigné.'],[
 Q('Que porte-t-on pour meuler du métal ?',['des lunettes de protection','des sandales','un foulard flottant','rien'],'des lunettes de protection','Les étincelles blessent les yeux.'),
 Q('Quelle tenue est la bonne ?',['ajustée, sans bijoux','ample avec bracelets','pieds nus','cheveux longs détachés'],'ajustée, sans bijoux','Elle ne peut pas se prendre dans une machine.'),
 Q('Que faire d’un sol d’atelier huileux ?',['le nettoyer aussitôt','le laisser','l’agrandir','le cacher'],'le nettoyer aussitôt','On évite les chutes.'),
 Q('Où doit se trouver l’extincteur ?',['à portée, visible','enfermé à clé','sous un établi','à l’extérieur du site'],'à portée, visible','Il faut pouvoir l’atteindre vite.')]);
C['h1|mec|1']=M(['Mesurer avec précision : la règle graduée donne le millimètre, le pied à coulisse le dixième (ou le vingtième) de millimètre, le micromètre le centième de millimètre. Le comparateur contrôle un écart.','On mesure toujours sur une pièce propre et à température normale.'],[
 Q('Quel instrument est le plus précis ?',['le micromètre','la règle','le mètre ruban','l’équerre'],'le micromètre','Précision de 0,01 mm.'),
 Q('Que mesure un pied à coulisse ?',['des diamètres et des profondeurs','des températures','des poids','des tensions électriques'],'des diamètres et des profondeurs','Intérieur, extérieur, profondeur.'),
 Q('Quelle précision a un pied à coulisse courant ?',['0,1 ou 0,05 mm','1 m','1 cm','10 cm'],'0,1 ou 0,05 mm','Au dixième de millimètre ou mieux.'),
 Q('Combien de millimètres dans 2,5 cm ?',['25 mm','250 mm','2,5 mm','0,25 mm'],'25 mm','1 cm = 10 mm.')]);
C['h1|mec|2']=M(['Les métaux ferreux contiennent du fer : l’acier (moins de 2,1 % de carbone) et la fonte (plus). Les non ferreux : aluminium (léger), cuivre (bon conducteur), laiton (cuivre + zinc), bronze (cuivre + étain).','Le fer non protégé rouille au contact de l’air humide.'],[
 Q('Le laiton est un alliage de…',['cuivre et zinc','fer et carbone','cuivre et étain','aluminium et zinc'],'cuivre et zinc','Cuivre + zinc.'),
 Q('Quel métal est un excellent conducteur électrique ?',['le cuivre','la fonte','le bois','le verre'],'le cuivre','Câbles électriques.'),
 Q('Quel métal est léger et ne rouille pas comme le fer ?',['l’aluminium','la fonte','l’acier brut','le plomb'],'l’aluminium','Faible densité.'),
 Q('La rouille se forme sur…',['le fer et l’acier','le cuivre pur','le verre','le plastique'],'le fer et l’acier','Fer + eau + oxygène.')]);
C['h1|mec|3']=M(['Le dessin technique représente une pièce par plusieurs vues (face, dessus, gauche) avec des traits normalisés : trait fort continu pour les contours visibles, trait interrompu pour les contours cachés, trait mixte pour les axes. Les cotes sont en millimètres.','Une échelle 1:2 signifie que le dessin est deux fois plus petit que la pièce.'],[
 Q('Que représente un trait interrompu ?',['un contour caché','un contour visible','un axe','une cote'],'un contour caché','Ce qu’on ne voit pas.'),
 Q('Échelle 1:2 : le dessin est…',['réduit de moitié','doublé','identique','inversé'],'réduit de moitié','1 sur le papier = 2 en vrai.'),
 Q('Quelle unité utilise-t-on pour les cotes ?',['le millimètre','le kilomètre','le litre','le gramme'],'le millimètre','Norme habituelle.'),
 Q('La vue de face montre…',['la pièce vue de devant','le dessous seulement','l’intérieur uniquement','le prix'],'la pièce vue de devant','Une des vues principales.')]);
// ---- Commerciale et gestion
C['h1|com|0']=M(['La comptabilité enregistre les opérations de l’entreprise. L’actif regroupe ce que l’entreprise possède, le passif ce qu’elle doit (capitaux propres et dettes). Le bilan est équilibré : Actif = Passif.','Le résultat = produits − charges.'],[
 Q('Que regroupe l’actif ?',['ce que l’entreprise possède','ce qu’elle doit','ses salaires','ses impôts'],'ce que l’entreprise possède','Biens, stocks, argent.'),
 Q('Quelle égalité est toujours vraie dans un bilan ?',['Actif = Passif','Actif = Charges','Passif = Produits','Actif = 0'],'Actif = Passif','Le bilan est équilibré.'),
 Q('Produits 500 000 FC, charges 350 000 FC. Résultat ?',['150 000 FC','850 000 FC','350 000 FC','500 000 FC'],'150 000 FC','Bénéfice : 500 − 350.'),
 Q('Les dettes figurent…',['au passif','à l’actif','dans les produits','nulle part'],'au passif','Elles sont ce que l’entreprise doit.')]);
C['h1|com|1']=M(['Sur un marché, l’offre est la quantité que les vendeurs proposent, la demande celle que les acheteurs veulent. Quand le prix monte, la demande baisse ; quand la rareté augmente, le prix monte. L’équilibre fixe le prix du marché.','L’inflation est une hausse générale et durable des prix.'],[
 Q('Si le prix d’un produit monte beaucoup, la demande…',['baisse en général','augmente toujours','reste identique','disparaît toujours'],'baisse en général','Moins de clients acceptent d’acheter.'),
 Q('Un produit rare a tendance à être…',['plus cher','moins cher','gratuit','interdit'],'plus cher','La rareté fait monter le prix.'),
 Q('L’inflation, c’est…',['une hausse générale des prix','une baisse des prix','un impôt','une monnaie'],'une hausse générale des prix','Le pouvoir d’achat diminue.'),
 Q('Qui propose les produits sur un marché ?',['les vendeurs (offre)','les acheteurs (demande)','les douaniers','les élèves'],'les vendeurs (offre)','L’offre vient des vendeurs.')]);
C['h1|com|2']=M(['La lettre commerciale comprend : l’en-tête de l’entreprise, la date, l’objet, la formule d’appel (Madame, Monsieur), le corps de la lettre, la formule de politesse et la signature. Les documents courants : devis, bon de commande, facture.','Le ton est clair, courtois et précis.'],[
 Q('Quel document donne le prix proposé avant l’achat ?',['le devis','la facture','le reçu','le bilan'],'le devis','Il estime le coût.'),
 Q('Quel document réclame le paiement d’une vente ?',['la facture','le devis','la carte de visite','le plan'],'la facture','Elle détaille ce qui est dû.'),
 Q('Comment commence une lettre à un client inconnu ?',['Madame, Monsieur,','Salut !','Coucou,','Hé !'],'Madame, Monsieur,','Formule d’appel de politesse.'),
 Q('Que précise l’objet d’une lettre ?',['le sujet du courrier','le prix de la poste','la couleur du papier','l’âge du client'],'le sujet du courrier','Il résume la demande.')]);
// ---- Pédagogique
C['h1|ped|0']=M(['Jean Piaget décrit quatre stades du développement de l’enfant : sensori-moteur (0-2 ans), préopératoire (2-7 ans), opératoire concret (7-11 ans) et opératoire formel (dès 11-12 ans, raisonnement abstrait).','Connaître ces stades aide l’enseignant à adapter ses leçons.'],[
 Q('Quel stade correspond à 7-11 ans ?',['opératoire concret','sensori-moteur','préopératoire','opératoire formel'],'opératoire concret','L’enfant raisonne sur du concret.'),
 Q('À quel âge apparaît le raisonnement abstrait ?',['vers 11-12 ans','vers 1 an','vers 3 ans','vers 5 ans'],'vers 11-12 ans','Stade opératoire formel.'),
 Q('Qui est l’auteur de ces stades ?',['Jean Piaget','Molière','Newton','Mendeleïev'],'Jean Piaget','Psychologue suisse.'),
 Q('Pourquoi un enseignant doit-il connaître les stades ?',['pour adapter son enseignement','pour punir plus','pour sauter les leçons','pour éviter les élèves'],'pour adapter son enseignement','Enseigner selon le niveau de développement.')]);
C['h1|ped|1']=M(['Les méthodes d’enseignement : expositive (le maître explique), démonstrative (il montre), interrogative (par questions), active (l’élève agit, expérimente) et par projet. Les méthodes actives mobilisent mieux l’élève.','Un bon enseignant varie les méthodes.'],[
 Q('Dans quelle méthode l’élève agit-il lui-même ?',['la méthode active','la méthode expositive','le cours dicté','la copie'],'la méthode active','L’élève expérimente et découvre.'),
 Q('Dans la méthode expositive…',['le maître explique','l’élève invente tout','il n’y a pas de leçon','on joue seulement'],'le maître explique','Cours magistral.'),
 Q('Pourquoi varier les méthodes ?',['pour garder l’attention et toucher tous les élèves','pour confondre','pour gagner du temps','pour éviter l’évaluation'],'pour garder l’attention et toucher tous les élèves','Les élèves apprennent différemment.'),
 Q('La méthode interrogative utilise…',['des questions','des chansons uniquement','des punitions','le silence'],'des questions','On guide par questions-réponses.')]);
// ---- Littéraire
C['h1|lit|0']=M(['« Philosophie » vient du grec philo-sophia : amour de la sagesse. Socrate, Platon et Aristote en sont des fondateurs. Philosopher, c’est questionner, argumenter et douter pour comprendre, au lieu de répéter une opinion.','« Connais-toi toi-même » est la devise attribuée à Socrate.'],[
 Q('Que signifie « philosophie » ?',['amour de la sagesse','science des nombres','art de parler','étude des étoiles'],'amour de la sagesse','Philo = amour, sophia = sagesse.'),
 Q('Quel penseur grec a dit « Connais-toi toi-même » ?',['Socrate','Newton','Molière','César'],'Socrate','Devise de la sagesse.'),
 Q('Philosopher, c’est surtout…',['questionner et argumenter','mémoriser sans comprendre','obéir sans réfléchir','éviter les débats'],'questionner et argumenter','Esprit critique.'),
 Q('Qui fut l’élève de Platon ?',['Aristote','Socrate','Descartes','Kant'],'Aristote','Platon enseigne Aristote.')]);
C['h1|lit|1']=M(['Le latin est une langue à cas : le nominatif (sujet), l’accusatif (COD), le génitif (complément du nom)… Première déclinaison : rosa, rosae (la rose) ; terra (la terre) ; puella (la fille).','Exemple : « Puella rosam amat » = la fille aime la rose.'],[
 Q('« Rosa » signifie…',['la rose','la rue','le roi','la route'],'la rose','Nominatif singulier.'),
 Q('Dans « Puella rosam amat », qui aime ?',['la fille','la rose','la terre','le roi'],'la fille','« puella » est au nominatif : sujet.'),
 Q('Quel cas désigne le COD ?',['l’accusatif','le nominatif','le génitif','l’ablatif'],'l’accusatif','Rosam est à l’accusatif.'),
 Q('« Terra » signifie…',['la terre','la tour','le temps','le toit'],'la terre','Comme dans « terrain ».')]);

// =============================== 2e HUMANITÉS ===============================
// ---- Français
C['h2|fr|0']=M(['Le théâtre classique du XVIIe siècle respecte la règle des trois unités (temps, lieu, action) et la bienséance. Corneille et Racine écrivent des tragédies, Molière des comédies (L’Avare, Le Tartuffe).','Un texte de théâtre comprend des répliques, des didascalies et des tirades.'],[
 Q('Quelles sont les trois unités ?',['temps, lieu, action','nom, verbe, adjectif','début, milieu, fin','rime, rythme, strophe'],'temps, lieu, action','Une action, en un lieu, en un jour.'),
 Q('Qui a écrit « L’Avare » ?',['Molière','Racine','Hugo','Voltaire'],'Molière','Comédie de 1668.'),
 Q('Que sont les didascalies ?',['les indications scéniques','les rimes','les titres','les préfaces'],'les indications scéniques','Gestes, décor, ton.'),
 Q('Une tragédie classique est écrite par…',['Racine ou Corneille','Molière seul','Zola','Camus'],'Racine ou Corneille','Maîtres de la tragédie.')]);
C['h2|fr|1']=M(['Le roman réaliste (Balzac, Flaubert) peint la société telle qu’elle est ; le naturalisme (Zola) y ajoute l’influence du milieu et de l’hérédité. « Germinal » (1885) décrit la vie des mineurs.','Les descriptions précises et la peinture sociale caractérisent ces romans.'],[
 Q('Qui est l’auteur de « Germinal » ?',['Émile Zola','Molière','Racine','Senghor'],'Émile Zola','Roman naturaliste.'),
 Q('Le roman réaliste cherche à…',['peindre la société telle qu’elle est','raconter des féeries','rimer chaque phrase','abolir les personnages'],'peindre la société telle qu’elle est','Observation du réel.'),
 Q('Que décrit « Germinal » ?',['la vie des mineurs','la vie des rois','les voyages dans l’espace','la mer'],'la vie des mineurs','Mines de charbon du Nord.'),
 Q('Qui est un grand romancier réaliste ?',['Balzac','Ronsard','Corneille','Rimbaud'],'Balzac','« La Comédie humaine ».')]);
C['h2|fr|2']=M(['La littérature d’Afrique centrale et francophone s’exprime en poésie, roman et théâtre : Senghor et Césaire (Négritude), Mudimbe (RDC, philosophe et romancier), Sony Labou Tansi (Congo-Brazzaville), Tchicaya U Tam’si (poète congolais).','Elle raconte les colonisations, les indépendances, les identités et les espoirs des peuples.'],[
 Q('Qui est un écrivain de la RDC ?',['Valentin-Yves Mudimbe','Victor Hugo','Molière','Albert Camus'],'Valentin-Yves Mudimbe','Philosophe et romancier congolais.'),
 Q('De quel pays est Sony Labou Tansi ?',['le Congo-Brazzaville','le Sénégal','la France','le Kenya'],'le Congo-Brazzaville','Auteur de « La Vie et demie ».'),
 Q('Quels thèmes reviennent souvent ?',['colonisation, indépendance, identité','uniquement la mer','uniquement la mode','uniquement le sport'],'colonisation, indépendance, identité','La mémoire et l’avenir.'),
 Q('Quel mouvement a été fondé par Senghor et Césaire ?',['la Négritude','le romantisme','le réalisme','le surréalisme'],'la Négritude','Fierté de la culture noire.')]);
C['h2|fr|3']=M(['La dissertation suit un plan : introduction (amorce, problématique, annonce du plan), développement (parties et sous-parties avec arguments et exemples) et conclusion (réponse et ouverture). Les plans fréquents : dialectique (thèse, antithèse, synthèse), analytique, thématique.','Chaque paragraphe : une idée, un argument, un exemple.'],[
 Q('Quel plan oppose deux idées puis les dépasse ?',['le plan dialectique','le plan alphabétique','le plan chronologique seulement','le plan de ville'],'le plan dialectique','Thèse, antithèse, synthèse.'),
 Q('Que contient l’introduction ?',['amorce, problématique, annonce du plan','tous les exemples','la bibliographie','rien'],'amorce, problématique, annonce du plan','Elle ouvre le sujet.'),
 Q('Qu’est-ce que la problématique ?',['la question posée par le sujet','le titre du livre','le nom de l’auteur','la date'],'la question posée par le sujet','Elle guide la réflexion.'),
 Q('Que fait la conclusion ?',['répond à la problématique et ouvre','répète tous les exemples','introduit un nouveau sujet','supprime le plan'],'répond à la problématique et ouvre','Bilan et ouverture.')]);
C['h2|fr|4']=M(['Le commentaire composé analyse un texte littéraire selon deux ou trois axes (par exemple : le thème, le style, l’intention). On cite le texte, on identifie les procédés (figures de style, champs lexicaux, rythme) et on interprète leur effet.','Pas de paraphrase : on explique comment le texte produit son effet.'],[
 Q('Que fait-on dans un commentaire composé ?',['on analyse le texte selon des axes','on recopie le texte','on résume sans analyser','on invente une suite'],'on analyse le texte selon des axes','Analyse structurée.'),
 Q('Pourquoi cite-t-on le texte ?',['pour prouver ses idées','pour allonger','pour éviter d’analyser','pour décorer'],'pour prouver ses idées','Une citation soutient l’analyse.'),
 Q('Qu’est-ce qu’une paraphrase ?',['redire le texte avec d’autres mots sans l’analyser','une figure de style','un genre théâtral','un plan'],'redire le texte avec d’autres mots sans l’analyser','À éviter.'),
 Q('Un champ lexical est…',['un ensemble de mots sur un même thème','une règle de grammaire','une rime','un acte de théâtre'],'un ensemble de mots sur un même thème','Par exemple les mots de la mer.')]);
// ---- Mathématiques
C['h2|ma|0']=M(['La fonction exponentielle eˣ est toujours positive et croissante ; le logarithme népérien ln est sa réciproque : ln(eˣ) = x. Propriétés : ln(ab) = ln a + ln b, ln(aⁿ) = n ln a. Valeurs : ln 1 = 0, e⁰ = 1.','Les puissances suivent aᵐ × aⁿ = aᵐ⁺ⁿ.'],[
 Q('Que vaut ln 1 ?',['0','1','e','−1'],'0','e⁰ = 1.'),
 Q('Que vaut e⁰ ?',['1','0','e','−1'],'1','Toute puissance 0 vaut 1.'),
 Q('ln(ab) = ?',['ln a + ln b','ln a × ln b','ln a − ln b','a + b'],'ln a + ln b','Le logarithme transforme un produit en somme.'),
 Q('eˣ est…',['toujours positive','parfois négative','nulle en 0','décroissante'],'toujours positive','eˣ > 0 pour tout x.')]);
C['h2|ma|1']=M(['La dérivée mesure la pente de la courbe. Règles : (xⁿ)′ = n xⁿ⁻¹, (constante)′ = 0, (u + v)′ = u′ + v′. Exemples : (x²)′ = 2x, (x³)′ = 3x², (5x)′ = 5.','Si f′ > 0, la fonction est croissante ; si f′ < 0, elle est décroissante.'],[
 Q('Dérivée de x² ?',['2x','x','x²','2'],'2x','n xⁿ⁻¹ avec n = 2.'),
 Q('Dérivée de 3x² + 5x ?',['6x + 5','3x + 5','6x² + 5','6x'],'6x + 5','(3x²)′ = 6x et (5x)′ = 5.'),
 Q('Dérivée d’une constante ?',['0','1','la constante','−1'],'0','Une constante ne varie pas.'),
 Q('Si f′(x) > 0 sur un intervalle, f est…',['croissante','décroissante','constante','nulle'],'croissante','Pente positive.')]);
C['h2|ma|2']=M(['Une suite géométrique multiplie par une raison q à chaque terme : uₙ = u₀ × qⁿ. Exemple : 2, 6, 18, 54… a pour raison 3. La somme de n+1 premiers termes vaut u₀ (1 − qⁿ⁺¹)/(1 − q).','Elle modélise par exemple la croissance d’une population ou un intérêt composé.'],[
 Q('Raison de 2, 6, 18, 54 ?',['3','4','2','6'],'3','Chaque terme est multiplié par 3.'),
 Q('u₀ = 5, q = 2. Que vaut u₃ ?',['40','30','15','25'],'40','5 × 2³.'),
 Q('Suite géométrique de raison 1/2 : 80, 40, 20… Prochain terme ?',['10','0','60','5'],'10','20 ÷ 2.'),
 Q('Un capital de 1 000 $ augmente de 10 % par an. Après 2 ans ?',['1 210 $','1 200 $','1 100 $','1 020 $'],'1 210 $','1 000 × 1,1².')]);
C['h2|ma|3']=M(['En statistiques, la moyenne x̄ résume la série, la variance mesure la dispersion autour de la moyenne (moyenne des carrés des écarts) et l’écart-type σ est sa racine carrée.','Plus l’écart-type est petit, plus les valeurs sont regroupées.'],[
 Q('Moyenne de 2, 4, 6, 8 ?',['5','4','6','20'],'5','20 ÷ 4.'),
 Q('Variance de 2, 4, 6, 8 (moyenne 5) ?',['5','2,5','20','10'],'5','(9 + 1 + 1 + 9) ÷ 4 = 5.'),
 Q('L’écart-type est…',['la racine carrée de la variance','le carré de la moyenne','la médiane','le mode'],'la racine carrée de la variance','σ = √V.'),
 Q('Un écart-type faible signifie…',['des valeurs regroupées','des valeurs très dispersées','une moyenne nulle','une erreur de calcul'],'des valeurs regroupées','Peu de dispersion.')]);
C['h2|ma|4']=M(['Dénombrement : le nombre de façons de ranger n objets est n! (n! = 1 × 2 × … × n). Combinaisons : C(n, k) = n!/(k!(n − k)!). Probabilité = cas favorables ÷ cas possibles. La probabilité de A sachant B : P(A|B) = P(A ∩ B)/P(B).','Les arbres de probabilités aident à organiser le calcul.'],[
 Q('Que vaut 4! ?',['24','16','10','12'],'24','1 × 2 × 3 × 4.'),
 Q('Combien de façons de choisir 2 élèves parmi 5 ?',['10','20','25','5'],'10','C(5, 2) = 10.'),
 Q('Probabilité d’obtenir un 3 ou un 4 avec un dé ?',['1/3','1/6','1/2','2/3'],'1/3','Deux cas sur six.'),
 Q('Combien d’anagrammes de « ABC » ?',['6','3','9','12'],'6','3! = 6.')]);
C['h2|ma|5']=M(['Transformations du plan : la translation déplace par un vecteur, la rotation tourne autour d’un centre d’un angle donné, l’homothétie agrandit ou réduit de rapport k. Les symétries conservent les longueurs ; l’homothétie multiplie les longueurs par |k|.','Une homothétie de rapport 2 double les longueurs et quadruple les aires.'],[
 Q('Une homothétie de rapport 3 multiplie les longueurs par…',['3','9','1/3','6'],'3','Les longueurs sont multipliées par |k|.'),
 Q('Une homothétie de rapport 2 multiplie les aires par…',['4','2','8','6'],'4','k² = 4.'),
 Q('Quelle transformation conserve les longueurs et déplace par un vecteur ?',['la translation','l’homothétie','la projection','l’agrandissement'],'la translation','Déplacement sans déformation.'),
 Q('Que faut-il pour définir une rotation ?',['un centre et un angle','un seul point','un nom','un rapport'],'un centre et un angle','Centre + angle (et sens).')]);
// ---- Sciences
C['h2|sc|0']=M(['Une lentille convergente (bords minces) fait converger les rayons ; elle donne une image réelle renversée si l’objet est au-delà du foyer. Vergence : C = 1/f (en dioptries, f en mètres). L’œil et la loupe utilisent des lentilles.','Formule de conjugaison : 1/OA′ − 1/OA = 1/f′.'],[
 Q('Une lentille convergente a des bords…',['minces','épais','coupants','colorés'],'minces','Elle est plus épaisse au centre.'),
 Q('Distance focale 0,5 m. Vergence ?',['2 dioptries','0,5 dioptrie','5 dioptries','0,2 dioptrie'],'2 dioptries','C = 1/0,5.'),
 Q('Quel instrument utilise une lentille convergente ?',['la loupe','le miroir plan','la vitre','le fil'],'la loupe','Elle grossit un objet proche.'),
 Q('Quelle unité mesure la vergence ?',['la dioptrie','le watt','le newton','le pascal'],'la dioptrie','Symbole δ.')]);
C['h2|sc|1']=M(['Un acide libère des ions H⁺ ; une base libère des ions OH⁻. Le pH = −log[H⁺] : pH < 7 acide, = 7 neutre, > 7 basique. Acide + base → sel + eau (neutralisation). Un dosage permet de trouver une concentration inconnue.','Concentration : C = n/V (mol/L).'],[
 Q('pH d’une solution neutre à 25 °C ?',['7','0','14','1'],'7','Eau pure.'),
 Q('Acide + base donne…',['un sel et de l’eau','un gaz seulement','un métal','de l’huile'],'un sel et de l’eau','Neutralisation.'),
 Q('0,5 mol dans 2 L. Concentration ?',['0,25 mol/L','1 mol/L','4 mol/L','2,5 mol/L'],'0,25 mol/L','C = n/V.'),
 Q('Une solution de pH 2 est…',['fortement acide','basique','neutre','impossible'],'fortement acide','pH très inférieur à 7.')]);
C['h2|sc|2']=M(['Gregor Mendel, avec ses petits pois, découvre l’hérédité : chaque caractère dépend de deux allèles ; l’allèle dominant masque le récessif. Parents Aa × Aa : 25 % AA, 50 % Aa, 25 % aa, donc 3 dominants pour 1 récessif.','Génotype = les allèles ; phénotype = le caractère visible.'],[
 Q('Quel savant a étudié l’hérédité chez le pois ?',['Mendel','Pasteur','Newton','Darwin'],'Mendel','Père de la génétique.'),
 Q('Parents Aa × Aa : quelle proportion d’enfants aa ?',['25 %','50 %','75 %','0 %'],'25 %','Un quart.'),
 Q('Le phénotype est…',['le caractère visible','l’ADN seul','le nom du gène','le chromosome'],'le caractère visible','Observable.'),
 Q('Un allèle dominant…',['masque le récessif','disparaît','est toujours rare','est toujours muté'],'masque le récessif','Il s’exprime dès qu’il est présent.')]);
C['h2|sc|3']=M(['Le système nerveux (cerveau, moelle épinière, nerfs) transmet des messages électriques rapides ; les hormones, produites par les glandes (hypophyse, thyroïde, pancréas…), transmettent des messages chimiques par le sang, plus lents et plus durables.','L’insuline, produite par le pancréas, baisse la glycémie.'],[
 Q('Quel système envoie des messages électriques rapides ?',['le système nerveux','le système digestif','la peau','le squelette'],'le système nerveux','Neurones et nerfs.'),
 Q('Les hormones circulent par…',['le sang','l’air','les os','les cheveux'],'le sang','Messages chimiques.'),
 Q('Quel organe produit l’insuline ?',['le pancréas','le foie','le cœur','le poumon'],'le pancréas','Elle régule la glycémie.'),
 Q('Quelle maladie vient d’un manque d’insuline ?',['le diabète','le paludisme','la rougeole','le choléra'],'le diabète','Glycémie trop élevée.')]);
C['h2|sc|4']=M(['Le courant alternatif change de sens périodiquement (en RDC : 220 V, 50 Hz). Un transformateur élève ou abaisse la tension : Us/Up = Ns/Np. Il ne fonctionne qu’en courant alternatif.','Le transport d’électricité se fait en haute tension pour limiter les pertes.'],[
 Q('Quelle fréquence a le courant du réseau (RDC) ?',['50 Hz','500 Hz','5 Hz','5 000 Hz'],'50 Hz','Cinquante cycles par seconde.'),
 Q('Un transformateur élève ou abaisse…',['la tension','la masse','la température','la longueur'],'la tension','Selon le rapport des spires.'),
 Q('Primaire 100 spires, 220 V ; secondaire 50 spires. Tension secondaire ?',['110 V','440 V','220 V','55 V'],'110 V','220 × 50/100.'),
 Q('Pourquoi transporter l’électricité en haute tension ?',['pour limiter les pertes','pour la rendre dangereuse','pour économiser les fils seulement','pour la colorer'],'pour limiter les pertes','Moins de pertes par chaleur.')]);
// ---- Histoire, géographie, civisme
C['h2|hg|0']=M(['Après 1945, la décolonisation de l’Afrique s’accélère : le Ghana de Nkrumah est indépendant en 1957, l’année 1960 est « l’année de l’Afrique » (dix-sept pays), dont le Congo (30 juin 1960). Les pays rejoignent l’ONU et créent l’OUA (1963), devenue Union africaine en 2002.','Patrice Lumumba et Kwame Nkrumah comptent parmi les figures du panafricanisme.'],[
 Q('Quelle année est « l’année de l’Afrique » ?',['1960','1945','1975','1990'],'1960','Dix-sept pays indépendants.'),
 Q('Quelle organisation remplace l’OUA en 2002 ?',['l’Union africaine','la SADC','l’OTAN','la CEEAC'],'l’Union africaine','Siège à Addis-Abeba.'),
 Q('Qui a mené le Ghana à l’indépendance en 1957 ?',['Kwame Nkrumah','Mobutu','Senghor','Mandela'],'Kwame Nkrumah','Premier pays d’Afrique noire indépendant.'),
 Q('Le panafricanisme défend…',['l’unité des peuples africains','la division','la colonisation','l’isolement'],'l’unité des peuples africains','Solidarité et unité.')]);
C['h2|hg|1']=M(['De 1965 à 1997, Mobutu dirige le pays (rebaptisé Zaïre en 1971) et impose le parti unique. La crise économique des années 1990 et le génocide au Rwanda (1994) provoquent la guerre de 1996-1997 ; Laurent-Désiré Kabila prend Kinshasa le 17 mai 1997 et le pays redevient République démocratique du Congo.','Les conflits dans l’Est continuent ensuite.'],[
 Q('Qui dirige le pays de 1965 à 1997 ?',['Mobutu','Kasa-Vubu','Tshisekedi','Lumumba'],'Mobutu','Régime de parti unique.'),
 Q('Quel nom porte le pays de 1971 à 1997 ?',['Zaïre','Congo belge','Katanga','Kongo'],'Zaïre','Nom imposé par Mobutu.'),
 Q('Quel événement du 17 mai 1997 est célèbre ?',['l’arrivée de L.-D. Kabila à Kinshasa','l’indépendance','l’adoption de la Constitution','le premier vol d’avion'],'l’arrivée de L.-D. Kabila à Kinshasa','Fin du régime Mobutu.'),
 Q('Quel régime existait sous Mobutu ?',['le parti unique','le multipartisme libre','la monarchie héréditaire','la colonie'],'le parti unique','Le MPR.')]);
C['h2|hg|2']=M(['La mondialisation est l’intensification des échanges de marchandises, de capitaux, d’informations et de personnes. Elle profite aux uns et creuse parfois les inégalités. Le commerce, les transports et Internet la favorisent.','Les grandes organisations : OMC (commerce), FMI, Banque mondiale, ONU.'],[
 Q('La mondialisation, c’est…',['l’intensification des échanges mondiaux','l’isolement des pays','la fin des transports','la disparition du commerce'],'l’intensification des échanges mondiaux','Biens, capitaux, idées.'),
 Q('Quelle organisation régule le commerce mondial ?',['l’OMC','l’OMS','l’UNICEF','la FAO'],'l’OMC','Organisation mondiale du commerce.'),
 Q('Quel outil accélère la mondialisation ?',['Internet','le cahier','le tableau noir','la craie'],'Internet','Communication instantanée.'),
 Q('Un risque de la mondialisation est…',['les inégalités entre pays','la fin des écoles','le manque de lumière','la disparition du temps'],'les inégalités entre pays','Tous n’en profitent pas également.')]);
// ---- Mécanique
C['h2|mec|0']=M(['Le moteur à quatre temps : admission (le piston descend, le mélange entre), compression (le piston monte), explosion-détente (la bougie enflamme, le piston descend : temps moteur) et échappement (les gaz sortent).','Le vilebrequin transforme le mouvement rectiligne des pistons en rotation.'],[
 Q('Quel est le temps moteur ?',['l’explosion-détente','l’admission','la compression','l’échappement'],'l’explosion-détente','C’est lui qui fournit l’énergie.'),
 Q('Que fait la bougie d’un moteur à essence ?',['elle enflamme le mélange','elle refroidit','elle lubrifie','elle filtre l’air'],'elle enflamme le mélange','Étincelle.'),
 Q('Combien de temps compte le cycle ?',['4','2','6','8'],'4','Admission, compression, explosion, échappement.'),
 Q('Que transforme le vilebrequin ?',['le mouvement des pistons en rotation','l’essence en eau','la chaleur en glace','la rotation en lumière'],'le mouvement des pistons en rotation','Mouvement alternatif → rotation.')]);
C['h2|mec|1']=M(['La transmission amène la puissance du moteur aux roues : embrayage (relie ou sépare le moteur et la boîte), boîte de vitesses (change le rapport), arbre de transmission, différentiel (laisse les roues tourner à des vitesses différentes dans un virage).','Sans différentiel, les roues se contraindraient dans les virages.'],[
 Q('À quoi sert l’embrayage ?',['relier ou séparer le moteur et la boîte','refroidir le moteur','éclairer','freiner'],'relier ou séparer le moteur et la boîte','On débraye pour changer de vitesse.'),
 Q('À quoi sert le différentiel ?',['laisser les roues tourner à vitesses différentes','augmenter la pression des pneus','filtrer l’huile','tendre la courroie'],'laisser les roues tourner à vitesses différentes','Utile dans les virages.'),
 Q('Que change la boîte de vitesses ?',['le rapport de transmission','la couleur','la taille des roues','le carburant'],'le rapport de transmission','Couple et vitesse.'),
 Q('Quel organe est le premier maillon après le moteur ?',['l’embrayage','le différentiel','la roue','le pot d’échappement'],'l’embrayage','Il suit le volant moteur.')]);
C['h2|mec|2']=M(['Le freinage hydraulique : en appuyant sur la pédale, le piston du maître-cylindre pousse le liquide de frein dans des tuyaux ; la pression se transmet (principe de Pascal) aux pistons des étriers ou cylindres de roue qui serrent les plaquettes ou les mâchoires.','Le liquide de frein doit être changé régulièrement.'],[
 Q('Quel liquide transmet la force dans les freins ?',['le liquide de frein','l’eau du robinet','l’essence','l’huile de cuisine'],'le liquide de frein','Incompressible.'),
 Q('Quelle loi explique la transmission de pression ?',['la loi de Pascal','la loi d’Ohm','la loi de Newton seule','la loi de Mendel'],'la loi de Pascal','La pression se transmet partout.'),
 Q('Que serrent les plaquettes ?',['le disque','le pneu','le vilebrequin','le volant'],'le disque','Elles frottent contre le disque.'),
 Q('Une pédale de frein molle peut indiquer…',['de l’air dans le circuit','un pneu neuf','un bon freinage','un moteur parfait'],'de l’air dans le circuit','Il faut purger.')]);
C['h2|mec|3']=M(['L’usinage retire de la matière (tournage, fraisage, perçage, limage). La soudure assemble deux pièces par fusion : soudage à l’arc (électrode), à la flamme (chalumeau) ou MIG/TIG. On porte masque, gants et tablier.','Le perçage s’effectue avec un foret adapté au métal.'],[
 Q('Comment appelle-t-on l’opération qui enlève de la matière ?',['l’usinage','la soudure','la peinture','le pliage seulement'],'l’usinage','Tournage, fraisage…'),
 Q('Que protège le masque de soudeur ?',['les yeux contre l’éclat de l’arc','les oreilles','les pieds','les mains seulement'],'les yeux contre l’éclat de l’arc','Évite les brûlures de la rétine.'),
 Q('La soudure à l’arc utilise…',['une électrode et un courant électrique','une pompe à eau','de la colle','un marteau'],'une électrode et un courant électrique','L’arc fait fondre le métal.'),
 Q('Quelle machine fait un trou ?',['la perceuse','le tour à bois','la lime plate','le marteau'],'la perceuse','Avec un foret.')]);
// ---- Commerciale et gestion
C['h2|com|0']=M(['Le journal enregistre chronologiquement les opérations (date, comptes débités et crédités, montant). Le grand livre regroupe ensuite les opérations par compte. Règle : tout débit a un crédit égal (partie double).','Le solde d’un compte est la différence entre débit et crédit.'],[
 Q('Le journal enregistre les opérations…',['par ordre chronologique','par ordre alphabétique de clients','au hasard','par taille'],'par ordre chronologique','Date après date.'),
 Q('Dans la partie double, le total des débits est…',['égal au total des crédits','toujours plus grand','toujours nul','sans rapport'],'égal au total des crédits','Équilibre comptable.'),
 Q('Que regroupe le grand livre ?',['les opérations par compte','les lettres de clients','les photos','les contrats de travail uniquement'],'les opérations par compte','Un compte par page.'),
 Q('Achat de marchandises 20 000 FC au comptant : quel compte est crédité ?',['la caisse','les ventes','le capital','les salaires'],'la caisse','L’argent sort de la caisse.')]);
C['h2|com|1']=M(['Le marketing étudie les besoins des clients pour proposer le bon produit. Les « 4 P » : Produit, Prix, Place (distribution), Promotion (publicité). Une étude de marché collecte des informations avant de lancer un produit.','Un client satisfait revient et en parle autour de lui.'],[
 Q('Que signifient les « 4 P » ?',['Produit, Prix, Place, Promotion','Pays, Police, Poste, Port','Papier, Plume, Pain, Pot','Paix, Patrie, Peuple, Pouvoir'],'Produit, Prix, Place, Promotion','Mix marketing.'),
 Q('À quoi sert une étude de marché ?',['connaître les besoins des clients','imprimer des billets','creuser un puits','fabriquer des clés'],'connaître les besoins des clients','Avant de lancer un produit.'),
 Q('La promotion, c’est…',['faire connaître le produit','fixer le prix','ranger le stock','embaucher'],'faire connaître le produit','Publicité, offres, affiches.'),
 Q('Pourquoi satisfaire un client ?',['il revient et recommande','il paie moins','il devient actionnaire','il ferme la boutique'],'il revient et recommande','Fidélisation.')]);
C['h2|com|2']=M(['La TVA (taxe sur la valeur ajoutée) est un impôt sur la consommation, payé par le client et reversé à l’État par l’entreprise. Prix TTC = prix HT × (1 + taux). Le droit commercial régit les commerçants, les contrats de vente et les sociétés (SARL, SA…).','Un commerçant doit tenir une comptabilité et s’enregistrer.'],[
 Q('Prix HT = 100 $, TVA 16 %. Prix TTC ?',['116 $','160 $','84 $','100,16 $'],'116 $','100 × 1,16.'),
 Q('Que signifie HT ?',['hors taxes','heures de travail','haute tension','habitation tranquille'],'hors taxes','Prix sans la TVA.'),
 Q('Qui encaisse la TVA pour l’État ?',['l’entreprise qui vend','l’école','le client directement','la police'],'l’entreprise qui vend','Elle la reverse ensuite.'),
 Q('SARL signifie…',['société à responsabilité limitée','service à retard long','société d’achats rapides locaux','système à revenu libre'],'société à responsabilité limitée','Forme de société.')]);
// ---- Pédagogique
C['h2|ped|0']=M(['Préparer une leçon : définir l’objectif (ce que l’élève saura faire), choisir les contenus, la méthode, le matériel, prévoir les activités et l’évaluation. Une bonne fiche de leçon a une introduction, un développement et une conclusion.','L’objectif doit être précis et observable : « l’élève sait additionner deux nombres à deux chiffres ».'],[
 Q('Que définit-on d’abord en préparant une leçon ?',['l’objectif','la récréation','le prix du cahier','la couleur du tableau'],'l’objectif','Ce que l’élève doit savoir faire.'),
 Q('Quel objectif est précis et observable ?',['l’élève écrit correctement 3 phrases','l’élève comprend un peu','l’élève aime l’école','l’élève s’améliore'],'l’élève écrit correctement 3 phrases','On peut le constater.'),
 Q('Quelles parties comporte une leçon ?',['introduction, développement, conclusion','titre, dessin, chant','salut, jeu, fin','aucune'],'introduction, développement, conclusion','Structure de base.'),
 Q('Pourquoi prévoir le matériel ?',['pour que la leçon se déroule sans interruption','pour dépenser','pour retarder','pour éviter les élèves'],'pour que la leçon se déroule sans interruption','La préparation évite les imprévus.')]);
C['h2|ped|1']=M(['Évaluer, c’est mesurer les acquis. Évaluation diagnostique (au début : où en sont-ils ?), formative (pendant : aider à progresser), sommative (à la fin : bilan, note). Une bonne évaluation est claire, juste et suivie de remédiation.','On corrige ensemble les erreurs pour apprendre.'],[
 Q('Quelle évaluation a lieu au début ?',['diagnostique','sommative','finale','aucune'],'diagnostique','Elle repère les acquis et les besoins.'),
 Q('Quelle évaluation aide à progresser pendant l’apprentissage ?',['formative','sommative','diagnostique','punitive'],'formative','Feed-back régulier.'),
 Q('Quelle évaluation fait le bilan en fin de période ?',['sommative','formative','diagnostique','orale seulement'],'sommative','Elle donne la note.'),
 Q('Que fait-on après une erreur ?',['une remédiation','une punition collective','rien','un renvoi'],'une remédiation','On aide à corriger.')]);
// ---- Littéraire
C['h2|lit|0']=M(['La théorie de la connaissance se demande comment nous savons : par l’expérience (empirisme : Locke, Hume) ou par la raison (rationalisme : Descartes). Descartes doute de tout pour trouver une certitude : « Je pense, donc je suis. »','Connaître demande de distinguer opinion, croyance et savoir.'],[
 Q('Qui a dit « Je pense, donc je suis » ?',['Descartes','Platon','Molière','Hugo'],'Descartes','Le cogito.'),
 Q('L’empirisme affirme que la connaissance vient…',['de l’expérience','de la raison seule','de la naissance','du hasard'],'de l’expérience','Les sens nous apprennent.'),
 Q('Le rationalisme valorise…',['la raison','les sens seuls','la tradition','la rumeur'],'la raison','Descartes en est un représentant.'),
 Q('Quelle différence entre opinion et savoir ?',['le savoir est démontré','l’opinion est toujours vraie','le savoir est une rumeur','il n’y en a pas'],'le savoir est démontré','Le savoir a des preuves.')]);
C['h2|lit|1']=M(['Verbes latins du 1er groupe : amo (j’aime), amas (tu aimes), amat (il aime), amamus, amatis, amant. Le verbe « sum » (être) : sum, es, est, sumus, estis, sunt.','Exemple : « Ego te amo. » = je t’aime.'],[
 Q('« Amo » signifie…',['j’aime','il aime','nous aimons','aimez'],'j’aime','1re personne du singulier.'),
 Q('« Est » signifie…',['il est','je suis','nous sommes','ils sont'],'il est','3e personne du singulier de sum.'),
 Q('« Amant » signifie…',['ils aiment','tu aimes','j’aime','nous aimons'],'ils aiment','3e personne du pluriel.'),
 Q('« Sumus » signifie…',['nous sommes','vous êtes','ils sont','je suis'],'nous sommes','1re personne du pluriel de sum.')]);
