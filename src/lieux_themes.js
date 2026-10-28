// Lieux d'exploration thématiques (métiers, histoire et civisme, sciences, sport et culture, vie pratique).
// Format : « @ » ligne du lieu : id|nom|icône|type de décor|couleur des murs|couleur d'accent|matériau du mini-jeu,style
//          « # » ligne d'un personnage : nom|nom court|rôle|h ou f|phrase d'accueil|clé du sujet|titre du sujet
//          puis 5 questions : question|bonne réponse|faux 1|faux 2|faux 3|explication
export const THEMES=`
@boulangerie|La boulangerie|🥖|batiment|#e8c48a|#a8601a|legume,tap
#Boulanger Kabasele|le boulanger|Boulanger|h|Le pain sort du four dès l’aube : sens-tu l’odeur ?|farine|Farine et pain
De quoi le pain est-il surtout fait ?|de farine|de sable|de papier|de sel seul|La farine, l’eau et la levure donnent la pâte.
À quoi sert la levure ?|à faire gonfler la pâte|à colorer le pain|à le rendre salé|à le refroidir|Elle fait lever la pâte.
Un pain coûte 500 FC. Combien coûtent 4 pains ?|2 000 FC|1 000 FC|2 500 FC|900 FC|4 × 500 = 2 000.
Où cuit-on le pain ?|dans un four|dans un frigo|dans un seau|dans un sac|Le four donne la chaleur nécessaire.
Pourquoi se laver les mains avant de faire le pain ?|pour la propreté et la santé|pour le rendre rouge|pour le rendre lourd|pour rien|L’hygiène protège les clients.
#Vendeuse Mputu|la vendeuse|Vendeuse|f|Bonjour ! Combien de pains te faut-il aujourd’hui ?|rendre_monnaie|Rendre la monnaie
Tu paie 1 000 FC un pain à 600 FC. Combien te rend-on ?|400 FC|600 FC|1 600 FC|500 FC|1 000 − 600 = 400.
Une baguette coûte 300 FC. Pour 3 baguettes, on paie…|900 FC|600 FC|1 200 FC|300 FC|3 × 300 = 900.
Quelle opération sert à rendre la monnaie ?|la soustraction|l’addition|la multiplication seule|la division seule|On retire le prix de la somme donnée.
Avant de payer, il faut…|vérifier le prix|courir|crier|partir|On contrôle ce que l’on achète.
10 pains par sac, 6 sacs : combien de pains ?|60|16|66|600|6 × 10 = 60.
@menuiserie|La menuiserie|🪚|atelier|#8a5a32|#7a4a26|bois,tap
#Menuisier Lunda|le menuisier|Menuisier|h|Une bonne planche, une scie bien affûtée : et naît une table.|menuiserie|Le travail du bois
Quel outil coupe une planche ?|la scie|la cuillère|le pinceau|le thermomètre|La scie découpe le bois.
Quel outil enfonce un clou ?|le marteau|la règle|le peigne|le verre|Le marteau frappe le clou.
D’où vient le bois ?|des arbres|des roches|des nuages|des rivières|Le bois vient des arbres.
Pourquoi mesure-t-on avant de couper ?|pour couper à la bonne taille|pour perdre du temps|pour faire du bruit|pour rien|Mesurer deux fois, couper une fois.
Pour la sécurité, on porte…|des lunettes et des gants|des sandales ouvertes|rien|un chapeau de fête|On protège les yeux et les mains.
#Apprenti Mbiya|l’apprenti|Apprenti|h|Je mesure, je trace, je coupe : mon patron m’apprend tout.|perimetre_bois|Mesures et périmètre
Une planche mesure 2 m et une autre 3 m. Longueur totale ?|5 m|6 m|1 m|23 m|2 + 3 = 5.
Un cadre carré a 4 côtés de 50 cm. Périmètre ?|200 cm|100 cm|54 cm|150 cm|4 × 50 = 200.
1 mètre vaut…|100 centimètres|10 centimètres|1 000 centimètres|50 centimètres|1 m = 100 cm.
Table de 120 cm sur 80 cm. Périmètre ?|400 cm|200 cm|9 600 cm|320 cm|2 × (120 + 80) = 400.
Quelle unité mesure une longueur ?|le mètre|le litre|le kilogramme|la seconde|Le mètre mesure les longueurs.
@couture|L’atelier de couture|🧵|batiment|#d9a0c0|#c0392b|tissu,tap
#Couturière Mbombo|la couturière|Couturière|f|Un beau pagne, des ciseaux et de la patience : voilà mon métier.|couture|Coudre et mesurer
Quel outil perce le tissu pour coudre ?|l’aiguille|la lime|la pelle|la hache|L’aiguille entraîne le fil.
Que fait une machine à coudre ?|elle assemble le tissu avec du fil|elle lave le linge|elle cuit le pain|elle sèche le riz|Elle fait des coutures rapides.
Avec quoi mesure-t-on un client ?|un mètre ruban|une balance|un thermomètre|un chronomètre|Le mètre ruban prend les mesures.
Un pagne de 6 mètres coûte 3 000 FC le mètre. Prix ?|18 000 FC|9 000 FC|3 600 FC|6 000 FC|6 × 3 000 = 18 000.
Quel métier fabrique des vêtements ?|couturier|boulanger|pêcheur|maçon|Le couturier crée des habits.
#Styliste Nkulu|le styliste|Styliste|h|Je dessine les modèles avant de les couper.|couleurs_mode|Mode et motifs
Le wax est un tissu…|imprimé de motifs colorés|tout blanc|en métal|en papier|Le wax est très coloré.
Avant de couper, on fait…|un patron|un feu|un gâteau|un voyage|Le patron guide la coupe.
Pourquoi repasse-t-on un vêtement ?|pour enlever les plis|pour le salir|pour le mouiller|pour le rétrécir|Le fer lisse le tissu.
Mélanger bleu et jaune donne…|du vert|du rouge|du noir|du blanc|Bleu + jaune = vert.
Un uniforme scolaire sert à…|que tous les élèves soient habillés pareil|cacher les élèves|jouer|dormir|Il rassemble les élèves.
@garage|Le garage automobile|🔧|atelier|#4a6a8a|#2e6da4|fer,tap
#Mécanicien Kalenga|le mécanicien|Mécanicien|h|Un moteur, c’est comme un cœur : il faut l’écouter.|mecanique_auto|Moteurs et sécurité routière
Que fait le moteur d’une voiture ?|il fait avancer la voiture|il éclaire la route|il klaxonne|il lave les vitres|Il transforme le carburant en mouvement.
À quoi servent les freins ?|à ralentir et arrêter|à accélérer|à klaxonner|à chauffer|Les freins arrêtent le véhicule.
Pourquoi vérifie-t-on la pression des pneus ?|pour la sécurité et l’usure|pour les colorer|pour les alourdir|pour rien|Un pneu mal gonflé est dangereux.
Que met-on dans un moteur pour le lubrifier ?|de l’huile|de l’eau sucrée|du lait|du sable|L’huile réduit les frottements.
Que fait la batterie ?|elle fournit l’électricité|elle fait de la glace|elle lave|elle pèse|Elle démarre le moteur.
#Chauffeur Mwamba|le chauffeur|Chauffeur|h|Sur la route, on respecte les panneaux et les piétons.|securite_routiere|Règles de la route
Feu rouge : que doit faire le conducteur ?|s’arrêter|accélérer|klaxonner|reculer|Le rouge signifie stop.
À pied, où traverse-t-on la route ?|sur le passage piéton|n’importe où|en courant au hasard|derrière un camion|Le passage piéton protège.
Pourquoi attache-t-on la ceinture ?|pour se protéger en cas de choc|pour être plus lourd|pour la décoration|pour rien|Elle retient le corps.
Un panneau rond rouge avec un chiffre indique…|une limite de vitesse|un hôtel|un marché|une école de danse|Il interdit de dépasser cette vitesse.
Peut-on téléphoner en conduisant ?|non, c’est dangereux|oui toujours|seulement la nuit|seulement en ville|Le téléphone distrait le conducteur.
@avicole|La ferme avicole|🐔|plein_air|#d9c27a|#c0392b|legume,tap
#Fermière Lusamba|la fermière|Éleveuse|f|Mes poules pondent chaque jour : viens voir !|poules|Élevage de poules
Que donne la poule ?|des œufs|du lait|du miel|de la laine|La poule pond des œufs.
Comment s’appelle le petit de la poule ?|le poussin|le chiot|le veau|le chaton|Le poussin sort de l’œuf.
Que mange la poule ?|des grains|des pierres|du métal|du papier|Maïs et grains.
Pourquoi vaccine-t-on les poules ?|pour éviter les maladies|pour les rendre bleues|pour les faire chanter|pour rien|Le vaccin protège le troupeau.
Où dorment les poules ?|dans le poulailler|dans l’eau|sous la terre|dans un arbre fermé|Le poulailler les protège.
#Vendeur Ntumba|le vendeur|Vendeur d’œufs|h|Une alvéole de 30 œufs, c’est mon bon prix !|oeufs_calcul|Compter les œufs
Une alvéole contient 30 œufs. Combien dans 3 alvéoles ?|90|33|60|300|3 × 30 = 90.
Un œuf coûte 200 FC. Pour 5 œufs ?|1 000 FC|500 FC|1 200 FC|205 FC|5 × 200 = 1 000.
Une poule pond 6 œufs par semaine. Combien en 4 semaines ?|24|10|64|18|6 × 4 = 24.
Sur 12 œufs, 2 sont cassés. Combien sont intacts ?|10|14|2|6|12 − 2 = 10.
Pourquoi garde-t-on les œufs au frais ?|pour qu’ils se conservent|pour les durcir|pour les colorer|pour les alourdir|La fraîcheur les conserve.
@pisciculture|La pisciculture|🐟|eau|#8fb4d9|#1f8bd9|poisson,peche
#Pisciculteur Kitenge|le pisciculteur|Pisciculteur|h|Nous élevons des poissons dans des étangs, pour nourrir la ville.|poissons_elevage|Élever des poissons
Où élève-t-on les poissons ?|dans des étangs|dans des armoires|dans le désert|dans des sacs|Les étangs gardent l’eau.
Que donne-t-on aux poissons ?|de la nourriture adaptée|des pierres|du sable pur|des bonbons|Ils ont besoin d’aliments.
Le tilapia est…|un poisson d’eau douce|un oiseau|un insecte|un fruit|Il est très élevé en Afrique.
Pourquoi change-t-on l’eau d’un étang ?|pour qu’elle reste propre|pour la salir|pour la chauffer|pour rien|L’eau propre garde les poissons en bonne santé.
Les poissons respirent grâce à…|leurs branchies|leurs poumons|leurs ailes|leurs pattes|Les branchies filtrent l’oxygène de l’eau.
#Pêcheuse Mapendo|la pêcheuse|Pêcheuse|f|Pêcher sans épuiser le lac, c’est l’avenir de nos familles.|peche_durable|Pêche responsable
Pourquoi ne pêche-t-on pas les tout petits poissons ?|pour qu’ils grandissent|ils sont tristes|ils sont dorés|ils coûtent cher|Ils pourront se reproduire.
Un filet à mailles trop fines…|prend trop de petits poissons|ne prend rien|chante|est interdit en cuisine|Il vide le lac trop vite.
Poisson fumé : on le conserve avec…|de la fumée et de la chaleur|de la glace seule|du sucre|de la peinture|Le fumage conserve.
5 poissons à 800 FC chacun coûtent…|4 000 FC|3 000 FC|8 000 FC|5 800 FC|5 × 800 = 4 000.
Que faire d’un poisson pris sans l’avoir besoin ?|le remettre à l’eau|le casser|le jeter au sol|le cacher|On préserve les ressources.
@forge|La forge|🔨|atelier|#7a5a4a|#e67e22|fer,tap
#Forgeron Kanyinda|le forgeron|Forgeron|h|Le fer chauffé devient rouge, souple comme de la pâte.|forge|Travailler le fer
Que fait le forgeron ?|il façonne le métal|il vend du pain|il soigne les gens|il pilote un avion|Il chauffe et martèle le fer.
Sur quoi martèle-t-il le fer ?|sur une enclume|sur un coussin|sur un tapis|sur du papier|L’enclume est un bloc de fer solide.
Le fer chauffé devient…|rouge|bleu ciel|transparent|noir pour toujours|La chaleur fait rougir le métal.
Que fabrique un forgeron ?|des houes et des couteaux|des gâteaux|des vêtements|des livres|Outils en fer.
Pourquoi porte-t-il un tablier épais ?|pour se protéger des étincelles|pour la mode|pour dormir|pour rien|Sécurité.
#Apprenti Mutombo|l’apprenti|Apprenti forgeron|h|J’apprends à frapper juste, ni trop fort ni trop faible.|matieres_metaux|Métaux et mélanges
Quel métal est attiré par un aimant ?|le fer|le cuivre|l’or|l’aluminium|Le fer est magnétique.
Le fer rouille avec…|l’eau et l’air|le sable sec|le vent chaud seul|la lumière|L’humidité et l’oxygène.
Le cuivre est un bon conducteur de…|l’électricité|la rouille|la faim|la neige|Câbles électriques.
L’acier est un alliage de fer et de…|carbone|sable|eau|bois|Fer + carbone.
Pour éviter la rouille, on peut…|peindre le métal|le laisser dehors sous la pluie|le tremper dans l’eau|le casser|La peinture protège.
@chantier|Le chantier de construction|🏗️|atelier|#c9a27a|#e67e22|brique,tap
#Maçon Kasongo|le maçon|Maçon|h|Une maison solide commence par de bonnes fondations.|construction|Construire une maison
Avec quoi fait-on des murs solides ?|des briques et du ciment|du papier|des feuilles|de la neige|Briques liées par du ciment.
Les fondations, c’est…|la base de la maison|le toit|la porte|la fenêtre|Elles portent la maison.
Quel outil lisse le ciment ?|la truelle|la scie|le pinceau|la lime|La truelle étale le mortier.
Pourquoi porte-t-on un casque sur un chantier ?|pour se protéger la tête|pour la mode|pour chanter|pour se cacher|Sécurité.
Le ciment est mélangé avec…|de l’eau et du sable|du lait|du sucre|de l’huile|Mortier.
#Ingénieur Mavinga|l’ingénieur|Ingénieur civil|h|Avant de bâtir, je calcule : tout doit tenir debout !|aires_volumes|Aires et volumes
Une pièce de 4 m sur 3 m. Aire ?|12 m²|7 m²|14 m²|1 m²|4 × 3 = 12.|
Un mur de 5 m sur 2 m. Aire ?|10 m²|7 m²|25 m²|3 m²|5 × 2 = 10.
Un cube d’arête 2 m. Volume ?|8 m³|6 m³|4 m³|2 m³|2 × 2 × 2 = 8.
Une dalle de 10 m sur 4 m. Périmètre ?|28 m|40 m|14 m|20 m|2 × (10 + 4) = 28.
Combien de briques pour 3 rangées de 20 briques ?|60|23|203|600|3 × 20 = 60.
@imprimerie|L’imprimerie|🖨️|batiment|#cfd2d6|#7a1f4a|papier,tap
#Imprimeur Banza|l’imprimeur|Imprimeur|h|Livres, affiches, journaux : tout passe par nos machines.|imprimerie|Du papier au livre
Que fabrique une imprimerie ?|des livres et des journaux|des briques|du pain|des vélos|Elle imprime des textes.
Le papier est fabriqué à partir…|du bois|du sable|de l’eau seule|du fer|La pâte à papier vient du bois.
Qui a inventé l’imprimerie à caractères mobiles en Europe ?|Gutenberg|Newton|Lumumba|Pasteur|Vers 1450.
Pourquoi recycle-t-on le papier ?|pour protéger les arbres|pour le salir|pour le brûler|pour rien|Recycler économise le bois.
À quoi sert une affiche ?|à informer le public|à cuire|à laver|à peser|Elle annonce un événement.
#Correctrice Ilunga|la correctrice|Correctrice|f|Je relis chaque ligne : pas une faute ne doit passer !|relecture|Relire et corriger
Que fait un correcteur ?|il repère et corrige les fautes|il peint les murs|il vend des livres|il livre le pain|Il relit les textes.
Quelle ponctuation termine une phrase ?|le point|la virgule seulement|le tiret|les guillemets|Le point termine.
Combien de lettres dans le mot « livre » ?|5|4|6|7|l-i-v-r-e.
Dans « Les enfants jouent », le verbe est…|jouent|Les|enfants|Les enfants|Le verbe exprime l’action.
Pourquoi relire un texte avant de l’imprimer ?|pour éviter les erreurs|pour le rendre plus lourd|pour le salir|pour rien|Les erreurs imprimées sont coûteuses.
@pharmacie|La pharmacie|💊|batiment|#e4f0e8|#2e9e5b|plante,tap
#Pharmacien Mulamba|le pharmacien|Pharmacien|h|Un médicament bien pris guérit, mal pris il peut nuire.|medicaments|Bien utiliser les médicaments
Qui prescrit un médicament ?|le médecin|le voisin|un vendeur au hasard|un ami|Le médecin connaît la maladie.
Que fait-on avec la notice d’un médicament ?|on la lit|on la jette sans lire|on la mange|on la déchire|Elle explique la dose.
Peut-on prendre des médicaments périmés ?|non|oui toujours|oui avec du sucre|seulement la nuit|Ils peuvent être dangereux.
Où range-t-on les médicaments ?|loin des enfants|sur le sol|au soleil|dans la rue|Ils peuvent empoisonner.
Une vaccination sert à…|prévenir une maladie|rendre malade|perdre du temps|faire grandir|Elle protège.
#Infirmière Kyungu|l’infirmière|Infirmière|f|Le paludisme se prévient : moustiquaire, assainissement, vigilance.|paludisme|Le paludisme
Qui transmet le paludisme ?|le moustique anophèle|la mouche domestique|le rat|le chien|La femelle anophèle pique.
Comment se protège-t-on la nuit ?|avec une moustiquaire|avec un chapeau|avec des lunettes|avec un parapluie|Elle bloque les moustiques.
Symptôme fréquent du paludisme ?|la fièvre|les cheveux longs|la soif de lait|les dents blanches|La fièvre est un signal.
Que fait-on en cas de fièvre ?|on va au centre de santé|on attend un mois|on cache|on danse|Un test confirme la maladie.
Pourquoi vider les eaux stagnantes ?|les moustiques y pondent|les poissons s’y ennuient|elles font du bruit|elles sont rouges|Moins d’eau, moins de moustiques.
@laboratoire|Le laboratoire médical|🧪|batiment|#dfe8f3|#2e6da4|cuivre,tap
#Biologiste Mbuyi|le biologiste|Biologiste médical|h|Une goutte de sang raconte beaucoup de choses sur la santé.|analyses|Analyses médicales
Quel instrument grossit les microbes ?|le microscope|la balance|le marteau|la règle|Il rend visible l’invisible.
Le sang contient des globules…|rouges et blancs|verts|bleus|jaunes seulement|Les globules rouges portent l’oxygène.
Pourquoi lave-t-on les éprouvettes ?|pour éviter les mélanges|pour les casser|pour les colorer|pour rien|Propreté du laboratoire.
Une analyse sert à…|trouver la cause d’une maladie|choisir un habit|cuire le riz|peindre un mur|Elle aide au diagnostic.
Que porte-t-on au laboratoire ?|une blouse et des gants|des sandales ouvertes|un chapeau|rien|Protection contre les risques.
#Technicienne Nzuzi|la technicienne|Technicienne de laboratoire|f|Chaque échantillon a son étiquette : pas d’erreur possible !|mesures_labo|Mesurer avec précision
Un litre vaut…|1 000 millilitres|10 millilitres|100 millilitres|1 millilitre|1 L = 1 000 mL.
Quel instrument mesure la température ?|le thermomètre|la loupe|le mètre|la pile|Il donne des degrés.
Un échantillon de 250 mL et un autre de 750 mL. Total ?|1 000 mL|500 mL|1 250 mL|100 mL|250 + 750 = 1 000.
La température normale du corps est d’environ…|37 °C|10 °C|60 °C|100 °C|Autour de 37 °C.
Pourquoi étiquette-t-on chaque tube ?|pour ne pas les confondre|pour la mode|pour les cacher|pour les peser|Sécurité des patients.
@coiffure|Le salon de coiffure|💈|batiment|#e0a0b0|#8e44ad|plante,tap
#Coiffeuse Mbala|la coiffeuse|Coiffeuse|f|Nattes, tresses, coupes : chaque tête a son style !|hygiene_coiffure|Hygiène et soins
Avec quoi se lave-t-on les cheveux ?|du shampoing|du sable|de l’huile de moteur|de l’encre|Il nettoie sans abîmer.
Pourquoi ne partage-t-on pas son peigne ?|pour éviter les poux et les maladies|il est trop lourd|il est trop cher|il est interdit|Hygiène.
Les ciseaux du coiffeur doivent être…|propres et bien aiguisés|rouillés|mouillés|cassés|Sécurité et précision.
Que fait-on avant de couper les cheveux ?|on les mouille et les démêle|on les brûle|on les mange|on les peint|Pour couper proprement.
Pourquoi se laver les mains entre deux clients ?|pour la propreté|pour le bruit|pour rien|pour la couleur|Hygiène.
#Gérante Nkongolo|la gérante|Gérante|f|Gérer un salon, c’est compter, planifier et accueillir.|gestion_salon|Prix et durée
Une coiffure dure 2 heures, 3 clientes : durée totale ?|6 heures|5 heures|23 heures|1 heure|3 × 2 = 6.
Une coiffure coûte 5 000 FC. Pour 4 clientes ?|20 000 FC|9 000 FC|5 004 FC|10 000 FC|4 × 5 000 = 20 000.
Le salon ouvre à 8 h et ferme à 17 h. Combien d’heures ?|9 heures|8 heures|25 heures|7 heures|17 − 8 = 9.
Les recettes d’un jour : 30 000 FC, charges 12 000 FC. Bénéfice ?|18 000 FC|42 000 FC|12 000 FC|30 000 FC|30 000 − 12 000 = 18 000.
Pourquoi écrit-on les rendez-vous ?|pour ne pas oublier les clients|pour faire joli|pour rien|pour le bruit|L’organisation fidélise.
@restaurant|Le restaurant|🍲|batiment|#d98a6a|#c0392b|legume,tap
#Cuisinier Mbuyamba|le cuisinier|Cuisinier|h|Un bon repas est équilibré : féculents, légumes, protéines.|nutrition_resto|Manger équilibré
Le manioc est surtout un…|féculent|fruit sucré|poisson|insecte|Il apporte de l’énergie.
Les légumes apportent surtout…|des vitamines|du plastique|du sable|du métal|Ils protègent la santé.
Le poisson et la viande apportent…|des protéines|de l’eau pure|du sel seul|du sable|Elles construisent le corps.
Pourquoi boit-on de l’eau ?|le corps en a besoin|c’est joli|pour tousser|pour rien|L’eau est indispensable.
Pourquoi faut-il bien cuire la viande ?|pour tuer les microbes|pour la colorer en bleu|pour la durcir|pour rien|Cuisson sûre.
#Serveuse Zawadi|la serveuse|Serveuse|f|Bienvenue ! Voici le menu du jour.|addition|Calculer l’addition
Un plat à 4 000 FC et une boisson à 1 000 FC. Total ?|5 000 FC|3 000 FC|4 100 FC|6 000 FC|4 000 + 1 000 = 5 000.
Deux plats à 3 500 FC. Total ?|7 000 FC|3 500 FC|6 000 FC|35 000 FC|2 × 3 500 = 7 000.
Tu donnes 10 000 FC pour 6 500 FC. On te rend…|3 500 FC|4 500 FC|16 500 FC|2 500 FC|10 000 − 6 500 = 3 500.
Un pourboire est…|un petit cadeau pour le service|une taxe|un plat|une dette|C’est facultatif.
Pourquoi lire l’addition ?|pour vérifier le montant|pour la manger|pour la jeter|pour la déchirer|Contrôler ce que l’on paie.
@electricien|L’atelier d’électricité|💡|atelier|#d9c24a|#f1c40f|cuivre,tap
#Électricien Tshibola|l’électricien|Électricien|h|Le courant est utile mais dangereux : je respecte les règles.|electricite_securite|Électricité sans danger
Que fait un électricien ?|il installe et répare les circuits|il fait du pain|il soigne|il cultive|Câbles, prises, lampes.
Pourquoi ne touche-t-on pas un fil dénudé ?|on risque l’électrocution|il est froid|il est bleu|il est sucré|Danger de mort.
Quel matériau isole le courant ?|le plastique|le cuivre|le fer|l’aluminium|Les isolants protègent.
Que fait un fusible ?|il coupe le courant en cas de surcharge|il chante|il chauffe l’eau|il éclaire seul|Il protège le circuit.
Peut-on toucher l’électricité avec les mains mouillées ?|non|oui|seulement la nuit|seulement en été|L’eau conduit le courant.
#Apprenti Kabeya|l’apprenti|Apprenti électricien|h|Les circuits, c’est comme des routes pour le courant !|circuits|Circuits et lampes
Pour qu’une lampe brille, le circuit doit être…|fermé|ouvert|cassé|vide|Le courant circule en boucle.
Quel élément fournit l’énergie dans un circuit simple ?|la pile|la lampe|le fil|l’interrupteur|La pile est le générateur.
À quoi sert l’interrupteur ?|à ouvrir ou fermer le circuit|à produire du courant|à chauffer|à peser|Il commande la lampe.
Un bon conducteur est…|le cuivre|le bois sec|le verre|le plastique|Câbles en cuivre.
L’unité de la tension est…|le volt|le mètre|le litre|le gramme|Le volt (V).
@ishango|Le site d’Ishango|🦴|montagne|#b09a6a|#8a5a32|sable,tap
#Archéologue Mutuale|l’archéologue|Archéologue|f|Ici, il y a plus de vingt mille ans, des humains vivaient au bord du lac.|ishango|Les os d’Ishango
Où se trouve le site d’Ishango ?|en RDC près du lac Édouard|au Japon|au Brésil|en Islande|Dans le parc des Virunga.
Quel objet célèbre y a été trouvé ?|l’os d’Ishango|un sabre|un téléphone|un avion|Un os gravé d’encoches.
À quoi servirait l’os d’Ishango ?|à compter ou noter des quantités|à manger|à jouer du tambour|à cuire|Il montre des calculs très anciens.
Que fait un archéologue ?|il étudie les traces du passé|il construit des routes|il vend du pain|il soigne les malades|Il fouille et compare.
Pourquoi protège-t-on les sites anciens ?|ils gardent notre histoire|ils sont jolis|ils sont gratuits|ils sont rouges|Patrimoine.
#Professeur Kitenge|le professeur|Professeur d’histoire|h|Le passé de l’humanité est écrit dans la terre.|prehistoire|La préhistoire
La préhistoire est la période…|avant l’écriture|après l’invention du téléphone|des fusées|des voitures|Elle précède l’écriture.
Les premiers outils étaient en…|pierre|plastique|acier|verre|Silex et pierres.
Que découvrit l’homme préhistorique pour se chauffer ?|le feu|l’électricité|le gaz|le pétrole|La maîtrise du feu.
Les peintures sur les grottes montrent…|la vie des anciens|des publicités|des plans de ville|des cartes postales|Art préhistorique.
L’écriture marque le début…|de l’histoire|de la préhistoire|du futur|de la nuit|On passe à l’histoire.
@mairie|La mairie|🏛️|batiment|#e4dcc8|#0b5fa5|papier,tap
#Officier Mbayo|l’officier d’état civil|Officier d’état civil|h|C’est ici que l’on déclare les naissances et les mariages.|etat_civil|L’état civil
Quel document prouve ta naissance ?|l’acte de naissance|un ticket de bus|une carte postale|une affiche|Il atteste ton identité.
Qui enregistre les naissances ?|l’officier d’état civil|le boulanger|le pêcheur|le mécanicien|Il tient les registres.
Pourquoi déclare-t-on une naissance ?|pour que l’enfant ait une identité légale|pour la photo|pour le bruit|pour rien|Droit à l’identité.
Chaque enfant a droit…|à un nom et à une nationalité|à aucun papier|à être caché|à rien|Convention des droits de l’enfant.
Où trouve-t-on l’acte de naissance ?|à la commune ou à la mairie|au marché|sur l’arbre|dans le fleuve|Registre officiel.
#Bourgmestre Nsenga|le bourgmestre|Bourgmestre|h|La commune, c’est la vie de tous les jours : écoles, routes, propreté.|commune|La commune et ses services
Le bourgmestre dirige…|une commune|un pays entier|un village de poissons|une usine|Autorité locale.
Les déchets de la commune sont gérés par…|les services d’assainissement|le vent|les moustiques|les enfants seuls|Collecte et propreté.
Pourquoi paie-t-on des taxes ?|pour financer les services publics|pour rien|pour le bruit|pour le plaisir|Écoles, routes, hôpitaux.
Un bien public appartient…|à tout le monde|à une seule personne|à personne|aux étrangers|Il faut le respecter.
Que fait un citoyen responsable ?|il respecte les règles de la commune|il jette ses déchets partout|il casse les bancs|il ne vote jamais|Civisme.
@tribunal|Le tribunal|⚖️|batiment|#cfc6b2|#5a3a22|papier,tap
#Juge Mukendi|le juge|Juge|h|Ici, on rend la justice avec équité et respect de la loi.|justice|Justice et lois
Que fait un juge ?|il applique la loi et rend la justice|il vend du pain|il fabrique des chaises|il soigne|Il tranche les litiges.
Qui défend une personne au tribunal ?|l’avocat|le boulanger|le pilote|le chauffeur|L’avocat plaide.
La loi est la même pour…|tous les citoyens|seulement les riches|seulement les adultes|personne|Égalité devant la loi.
Quel symbole représente la justice ?|la balance|le marteau de forgeron|le pinceau|le ballon|La balance pèse les arguments.
Chacun est présumé…|innocent jusqu’à preuve du contraire|coupable|absent|fatigué|Présomption d’innocence.
#Greffière Bahati|la greffière|Greffière|f|Je consigne tout ce qui se dit pendant l’audience.|droits_devoirs|Droits et devoirs
Un droit de l’enfant est…|aller à l’école|travailler dans une mine|être frappé|être abandonné|Droit à l’éducation.
Un devoir du citoyen est…|respecter la loi|voler|tricher|casser|Respect de la loi.
La Constitution est…|la loi suprême du pays|un roman|un menu|une chanson|Elle organise l’État.
Que doit-on faire face à une injustice ?|la signaler à une autorité|l’ignorer toujours|y participer|rire|Agir de façon responsable.
La liberté d’expression est…|le droit de donner son avis dans le respect des autres|le droit d’insulter|un devoir de se taire|une obligation de crier|Respect et liberté.
@police|Le poste de police|👮|batiment|#4a6a8a|#2e6da4|fer,tap
#Commissaire Ngoy|le commissaire|Commissaire|h|La police protège les personnes et les biens, y compris sur la route.|police_civisme|Sécurité et civisme
La police sert à…|protéger les personnes et les biens|vendre des légumes|enseigner le calcul|soigner|Sécurité publique.
En cas de danger, quel numéro d’urgence appelle-t-on ?|celui de la police ou des secours|un numéro au hasard|celui du boulanger|aucun|Il faut alerter les secours.
Que doit faire un enfant perdu ?|demander de l’aide à un adulte responsable|suivre un inconnu|se cacher|s’enfuir|Chercher un policier ou une personne sûre.
Que signifie « civisme » ?|respecter les règles de la vie en société|faire du bruit|casser|tricher|Comportement citoyen.
Peut-on garder un objet trouvé ?|non, on le rend ou on le signale|oui toujours|oui si personne ne voit|seulement la nuit|Honnêteté.
#Agent Mwenze|l’agent|Agent de la circulation|h|Je règle la circulation : le feu et le sifflet sont mes outils.|circulation|Règles de circulation
À un feu vert, les voitures…|peuvent avancer|doivent s’arrêter|doivent reculer|doivent klaxonner|Le vert autorise le passage.
Le feu orange signifie…|ralentir et se préparer à s’arrêter|accélérer|klaxonner|reculer|Attention.
Quel véhicule a toujours la priorité ?|l’ambulance en service|la voiture rose|le camion de pain|la moto rapide|Elle sauve des vies.
Un cycliste doit…|respecter le code de la route|ignorer les feux|rouler sans freins|rouler la nuit sans lumière|Les règles protègent tous.
Qui est protégé par le passage piéton ?|le piéton|le camion|la moto|le mécanicien|Il traverse en sécurité.
@ceni|La commission électorale|🗳️|batiment|#e4f0e8|#2e7d4a|papier,tap
#Agent électoral Mbuya|l’agent électoral|Agent électoral|h|Chaque voix compte : voter est un droit et un devoir.|elections|Voter
Quel âge faut-il avoir pour voter en RDC ?|18 ans|10 ans|12 ans|15 ans|La majorité électorale.
Le vote est…|libre et secret|public et forcé|vendu|interdit|Garantie démocratique.
Que reçoit un électeur inscrit ?|une carte d’électeur|un ticket de bus|une affiche|un journal|Elle prouve l’inscription.
Que signifie « élire » ?|choisir ses représentants|obéir sans réfléchir|casser les urnes|perdre|Choisir par le vote.
L’urne sert à…|déposer les bulletins|ranger du pain|garder l’eau|cuire|On y glisse son bulletin.
#Observatrice Kabila|l’observatrice|Observatrice|f|Nous veillons à ce que le vote soit transparent et honnête.|democratie|La démocratie
La démocratie, c’est le pouvoir…|du peuple|d’un seul homme|de la peur|de l’argent|Le peuple choisit.
Pourquoi des observateurs ?|pour garantir la transparence|pour voter à la place des électeurs|pour fermer les bureaux|pour rien|Ils contrôlent le processus.
Un candidat doit respecter…|la loi et les adversaires|personne|la violence|la triche|Fair-play politique.
Qui compte les voix ?|des agents devant les témoins|un seul homme en secret|personne|les enfants|Transparence.
Après les élections, on…|accepte le résultat de manière pacifique|casse tout|se bat|détruit les urnes|Respect du vote.
@ambassade|L’ambassade|🌐|batiment|#d9dde8|#0b5fa5|papier,tap
#Ambassadeur Matondo|l’ambassadeur|Ambassadeur|h|Un ambassadeur représente son pays auprès d’un autre pays.|diplomatie|Représenter son pays
Que fait un ambassadeur ?|il représente son pays à l’étranger|il vend du pain|il cultive|il forge le fer|Il porte la voix de son État.
Un passeport sert à…|voyager à l’étranger|payer le pain|ouvrir une boutique|jouer|Document de voyage.
Quelle organisation regroupe presque tous les pays ?|l’ONU|le marché|la FIFA|l’école|Nations unies.
La langue officielle de la RDC est…|le français|l’anglais|le portugais|l’arabe|Utilisé dans l’administration.
Quel est le drapeau de la RDC ?|bleu ciel avec une étoile jaune et une bande rouge|vert et blanc|noir et rouge|bleu et blanc|Drapeau actuel.
#Traductrice Kasanda|la traductrice|Traductrice|f|Je transforme une langue en une autre : lingala, swahili, français, anglais…|langues|Langues et traduction
Combien de langues nationales en RDC ?|4|2|10|1|Lingala, swahili, kikongo, tshiluba.
« Merci » se dit en swahili…|asante|mbote|kwaheri|ndiyo|Asante = merci.
« Mbote » en lingala veut dire…|bonjour|merci|au revoir|non|Mbote = bonjour.
Pourquoi apprendre plusieurs langues ?|pour mieux communiquer|pour ne plus parler|pour se fâcher|pour rien|Elles ouvrent des portes.
Un interprète traduit…|à l’oral|seulement à l’écrit|jamais|seulement la musique|Il traduit en direct.
@kisantu|Le jardin botanique de Kisantu|🌺|plein_air|#7fa24a|#2e8b57|plante,tap
#Botaniste Mavungu|le botaniste|Botaniste|h|Plus de mille espèces de plantes poussent dans ce jardin.|plantes|Les plantes
Où se trouve le jardin botanique de Kisantu ?|dans le Kongo-Central|à Paris|au Japon|au Pôle Nord|Près de Madimba.
Que font les plantes de l’air ?|elles captent le CO₂ et rejettent de l’oxygène|elles absorbent l’oxygène seul|elles chantent|elles volent|Photosynthèse.
Quel organe de la plante absorbe l’eau ?|les racines|les feuilles seulement|les fleurs|les fruits|Les racines puisent l’eau.
Une plante médicinale sert à…|soigner|construire|cuire|peindre|Pharmacopée.
Pourquoi protège-t-on les plantes rares ?|elles peuvent disparaître|elles sont rouges|elles coûtent peu|elles chantent|Biodiversité.
#Jardinière Matondo|la jardinière|Jardinière|f|Un bon jardinier arrose, désherbe et observe.|jardinage|Entretenir un jardin
Pour grandir, une plante a besoin d’eau, de lumière et…|d’air|de sable seul|de métal|de plastique|Les trois conditions de vie.
Le meilleur moment pour arroser est…|le matin ou le soir|à midi en plein soleil|jamais|la nuit seulement|L’eau s’évapore moins.
Le compost est fait de…|déchets végétaux|plastique|verre|métal|Engrais naturel.
Une graine devient…|une plante|un caillou|un nuage|un poisson|Germination.
Pourquoi désherbe-t-on ?|pour que les cultures aient de la place|pour décorer|pour rien|pour polluer|Moins de concurrence.
@meteo|La station météo|🌦️|batiment|#cfd8e3|#2e6da4|fer,tap
#Météorologue Kasongo|le météorologue|Météorologue|h|Pluie, soleil, vent : nous les mesurons chaque jour.|meteo|Le temps qu’il fait
Quel instrument mesure la température ?|le thermomètre|le baromètre|le pluviomètre|l’anémomètre|Il donne des degrés.
Quel instrument mesure la pluie ?|le pluviomètre|le thermomètre|la boussole|la règle|Il recueille l’eau tombée.
Quel instrument mesure la vitesse du vent ?|l’anémomètre|le thermomètre|le pluviomètre|le chronomètre|Il tourne avec le vent.
La saison des pluies est…|la période où il pleut beaucoup|la période sèche|l’hiver de la neige|une danse|Climat tropical.
Pourquoi prévoit-on le temps ?|pour se préparer aux orages et aux récoltes|pour faire un spectacle|pour rien|pour jouer|Agriculture et sécurité.
#Paysan Kabamba|le paysan|Cultivateur|h|Sans pluie, pas de récolte : j’écoute la météo chaque matin.|climat|Saisons et climat
Le climat de la RDC est surtout…|chaud et humide|polaire|très froid|désertique|Zone équatoriale et tropicale.
Qu’est-ce que l’équateur ?|la ligne imaginaire au milieu de la Terre|une rivière|un volcan|une montagne|Il passe par la RDC.
Pourquoi la forêt influence-t-elle la pluie ?|elle rejette de la vapeur d’eau|elle chante|elle est verte|elle est lourde|Évapotranspiration.
Un orage s’accompagne de…|éclairs et de tonnerre|neige|brouillard sec|sable|Phénomène électrique.
Le réchauffement climatique est dû surtout…|aux gaz à effet de serre|à la lune|aux rivières|aux poissons|CO₂ et méthane.
@solaire|La centrale solaire|☀️|plein_air|#d9c24a|#f1c40f|cuivre,tap
#Ingénieure Kapinga|l’ingénieure|Ingénieure énergie|f|Ces panneaux transforment la lumière du soleil en électricité.|solaire|L’énergie solaire
Que transforme un panneau solaire ?|la lumière en électricité|l’eau en lumière|le vent en eau|le bruit en chaleur|Effet photovoltaïque.
Le soleil est une énergie…|renouvelable|épuisable|polluante|payante|Elle ne s’épuise pas.
Quel avantage a l’énergie solaire ?|elle ne pollue pas|elle fait du bruit|elle est sale|elle brûle|Énergie propre.
Que faut-il pour stocker l’électricité solaire la nuit ?|une batterie|un seau|un tamis|une corde|Batterie de stockage.
Où l’énergie solaire est-elle utile ?|dans les villages sans réseau|nulle part|seulement dans l’eau|seulement la nuit|Électrification rurale.
#Technicien Kayembe|le technicien|Technicien solaire|h|Un panneau propre produit plus : je les nettoie souvent.|energie_calcul|Énergie et calcul
Un panneau produit 300 W. Pour 4 panneaux ?|1 200 W|304 W|1 000 W|120 W|4 × 300 = 1 200.
Une lampe de 10 W allumée 5 h consomme…|50 Wh|15 Wh|2 Wh|500 Wh|10 × 5 = 50.
Un kilowatt vaut…|1 000 watts|100 watts|10 watts|10 000 watts|1 kW = 1 000 W.
Pour économiser l’énergie, on…|éteint les lampes inutiles|laisse tout allumé|ouvre les frigos|branche tout|Gestes simples.
Quelle énergie vient de l’eau en mouvement ?|l’hydroélectrique|le charbon|le nucléaire|le gaz|Comme à Inga.
@eau|La station de traitement de l’eau|🚰|batiment|#c9dde8|#2e6da4|fer,tap
#Technicien Mwamba|le technicien|Technicien de l’eau|h|Une eau propre est un trésor : nous la filtrons avant de la distribuer.|eau_potable|Eau potable
Comment rend-on l’eau potable ?|en la filtrant et la désinfectant|en la salissant|en la mélangeant à de la terre|en la chauffant au soleil seul|Filtration et chlore.
Boire une eau sale peut provoquer…|des maladies|de la force|de la joie|du sommeil|Choléra, diarrhées.
Comment purifier l’eau à la maison ?|la faire bouillir|la boire telle quelle|y jeter du sable|la laisser sale|Ébullition.
Quelle société distribue l’eau en RDC ?|la REGIDESO|la SNCC|la RTNC|la FIFA|Régie de distribution d’eau.
Pourquoi ne gaspille-t-on pas l’eau ?|c’est une ressource précieuse|elle est rouge|elle coûte rien|elle est lourde|Économie.
#Hygiéniste Mbuya|l’hygiéniste|Hygiéniste|f|Se laver les mains, c’est la meilleure défense contre les microbes.|hygiene|Hygiène et santé
Quand se lave-t-on les mains ?|avant de manger et après les toilettes|jamais|une fois par an|seulement le dimanche|Prévention.
Avec quoi se lave-t-on les mains ?|de l’eau et du savon|du sable|de l’encre|de l’huile de moteur|Savon et eau propre.
Où jette-t-on les déchets ?|à la poubelle|dans la rivière|dans la rue|dans le puits|Propreté.
Un microbe est…|un être vivant très petit|un caillou|un poisson|une pièce de monnaie|Invisible à l’œil nu.
Le choléra se transmet par…|l’eau sale|le soleil|la lune|le vent chaud|Hygiène de l’eau.
@assainissement|La station d’assainissement|🚿|batiment|#9ac5a4|#1f7a4d|fer,tap
#Ingénieur Tshiala|l’ingénieur|Ingénieur sanitaire|h|Nous traitons les eaux usées avant de les rendre à la nature.|eaux_usees|Eaux usées
Que sont les eaux usées ?|les eaux sales après usage|l’eau de pluie propre|l’eau du lac|l’eau minérale|Douche, cuisine, toilettes.
Pourquoi les traite-t-on ?|pour protéger la santé et les rivières|pour les colorer|pour les perdre|pour rien|Éviter la pollution.
Où ne jette-t-on pas les déchets ?|dans les caniveaux|à la poubelle|dans un sac fermé|au centre de tri|Ils bouchent les canaux.
Un caniveau bouché cause…|des inondations|du pain|des fleurs|du soleil|L’eau ne s’écoule plus.
Les latrines sont utiles pour…|éviter de polluer l’eau et les sols|jouer|cuire|chanter|Santé publique.
#Agent Kalenga|l’agent|Agent de salubrité|h|Chaque matin, nous ramassons les déchets des quartiers.|dechets|Gérer les déchets
Quel déchet peut être recyclé ?|le plastique et le papier|une pelure de banane seulement|l’eau|l’air|Tri.
Les déchets organiques servent à faire…|du compost|du fer|du verre|du plastique|Engrais.
Pourquoi trie-t-on les déchets ?|pour recycler et polluer moins|pour les mélanger|pour les cacher|pour rien|Environnement.
Un sac plastique mis dans la rivière…|pollue et tue des animaux|nourrit les poissons|rend l’eau claire|disparaît tout de suite|Il met des siècles à se dégrader.
Que fait-on d’une pile usagée ?|on la dépose dans un point de collecte|on la jette à l’eau|on l’enterre au jardin|on la brûle|Substances toxiques.
@petrole|Les puits de pétrole de Muanda|🛢️|plein_air|#5a5a5a|#222222|fer,tap
#Ingénieur Makiese|l’ingénieur|Ingénieur pétrolier|h|Notre pétrole se trouve sous la mer, près de l’Atlantique.|petrole|Le pétrole
Où se situe Muanda ?|près de l’océan Atlantique, en RDC|près du lac Kivu|au Katanga|au Maroc|Province du Kongo-Central.
Le pétrole est une énergie…|fossile|renouvelable|solaire|éolienne|Formée il y a des millions d’années.
Que fait-on avec le pétrole raffiné ?|de l’essence et du gasoil|du pain|du sel|du lait|Carburants.
Pourquoi faut-il économiser le pétrole ?|il est limité et pollue|il est rare dans l’eau|il est rouge|il chante|Énergie épuisable.
Quelle énergie remplace peu à peu le pétrole ?|les énergies renouvelables|le charbon seul|le sable|la craie|Solaire, hydraulique.
#Géologue Mukuna|la géologue|Géologue|f|Les roches racontent l’histoire de la Terre.|geologie|Roches et sol
Les roches se trouvent…|dans le sol|dans l’air|dans le ciel|dans les nuages|Écorce terrestre.
Le granit est…|une roche dure|un liquide|un gaz|un fruit|Roche magmatique.
Quel outil étudie les séismes ?|le sismographe|le thermomètre|le pluviomètre|le microscope|Il enregistre les secousses.
Le volcan crache…|de la lave|de l’eau pure|de la farine|du lait|Magma en surface.
Les minerais sont…|des roches contenant des métaux|des fruits|des animaux|des liquides|Cuivre, cobalt.
@okapis|La réserve à okapis|🦓|foret|#2e7d4a|#8a5a32|plante,tap
#Garde Mbuti|le garde|Garde forestier|h|L’okapi, cousin de la girafe, ne vit qu’en RDC : protégeons-le !|okapi|L’okapi
L’okapi est…|un animal de la forêt proche de la girafe|un poisson|un oiseau|un insecte|Il a des rayures sur les pattes.
Où vit l’okapi à l’état sauvage ?|en RDC|au Brésil|en Chine|en Australie|Forêt de l’Ituri.
Que mange l’okapi ?|des feuilles et des fruits|de la viande|du sable|des pierres|Herbivore.
Pourquoi protège-t-on l’okapi ?|il est rare et menacé|il est rouge|il est trop gros|il est bruyant|Espèce protégée.
Qui vit aussi dans l’Ituri ?|les Pygmées Mbuti|les Vikings|les Incas|les Mayas|Peuple de la forêt.
#Guide Mbuya|le guide|Guide|f|La forêt est vivante : écoute, observe et respecte.|foret_equatoriale|La forêt équatoriale
La forêt équatoriale est…|chaude et humide|glacée|sèche|sans arbres|Climat équatorial.
La forêt du bassin du Congo est…|la deuxième plus grande forêt tropicale du monde|la plus petite|un désert|une plage|Après l’Amazonie.
Les arbres produisent…|de l’oxygène|du plastique|du sable|du métal|Photosynthèse.
La déforestation, c’est…|couper trop d’arbres|planter des arbres|arroser|ramasser des feuilles|Elle détruit les habitats.
Pour protéger la forêt, on peut…|reboiser|tout brûler|tout couper|jeter des déchets|Planter des arbres.
@apiculture|L’apiculture|🍯|plein_air|#d9c27a|#e0a526|plante,tap
#Apiculteur Ntumba|l’apiculteur|Apiculteur|h|Les abeilles travaillent sans repos pour faire notre miel.|abeilles|Les abeilles
Que produit l’abeille ?|du miel|du lait|de la farine|du sel|Elle butine les fleurs.
Où vivent les abeilles ?|dans une ruche|dans un nuage|dans l’eau|sous le sable|La ruche est leur maison.
Pourquoi les abeilles sont-elles utiles ?|elles pollinisent les fleurs|elles chantent|elles volent plus haut|elles font peur|Pollinisation.
Que porte l’apiculteur pour se protéger ?|une combinaison et un voile|un maillot de bain|un foulard rouge|rien|Protection contre les piqûres.
Le miel est…|un aliment sucré et énergétique|du sel|du poison|du plastique|Source d’énergie.
#Commerçante Mbuya|la commerçante|Commerçante|f|Le miel pur se vend bien au marché de la ville.|miel_calcul|Vendre le miel
Un pot coûte 3 000 FC. Pour 5 pots ?|15 000 FC|8 000 FC|3 005 FC|9 000 FC|5 × 3 000 = 15 000.
Tu as 20 pots et tu en vends 14. Combien en reste-t-il ?|6|34|14|20|20 − 14 = 6.
Une ruche donne 6 kg de miel. Pour 3 ruches ?|18 kg|9 kg|2 kg|63 kg|3 × 6 = 18.
1 kg de miel vaut 8 000 FC. Pour 2 kg ?|16 000 FC|10 000 FC|8 002 FC|4 000 FC|2 × 8 000 = 16 000.
Pour bien vendre, on doit…|garder la qualité et la propreté|mélanger avec du sable|cacher le prix|mentir|Confiance des clients.
@potager|Le potager de l’école|🥕|plein_air|#7fa24a|#e67e22|legume,tap
#Jardinier Mubiala|le jardinier|Jardinier|h|Ici, les élèves sèment, arrosent et récoltent leurs légumes.|potager|Semer et récolter
Que sème-t-on dans un potager ?|des graines de légumes|des cailloux|des pièces|des briques|Pour récolter plus tard.
Quel légume pousse sous la terre ?|la carotte|la tomate|le haricot vert|le gombo|C’est une racine.
Pourquoi arrose-t-on le potager ?|les plantes ont besoin d’eau|c’est joli|pour le bruit|pour rien|Sans eau, pas de croissance.
Un engrais naturel est…|le compost|le plastique|le verre|le fer|Déchets végétaux décomposés.
Quel outil sert à creuser ?|la houe|la règle|le verre|le livre|Pour ameublir la terre.
#Cantinière Mpoyi|la cantinière|Cantinière|f|Les légumes du potager nourrissent toute l’école.|alimentation_ecole|Bien manger à l’école
Les fruits et légumes donnent…|des vitamines|du plomb|du plastique|du sable|Bonne santé.
Pourquoi mange-t-on à heures régulières ?|pour garder de l’énergie|pour dormir|pour s’ennuyer|pour rien|Équilibre.
Avant de manger, on…|se lave les mains|se couche|chante|court|Hygiène.
Un repas équilibré contient…|féculent, légume et protéine|seulement des bonbons|seulement du sel|rien|Variété.
Boire de l’eau propre protège de…|la déshydratation et des maladies|la joie|la faim de livre|la lumière|Santé.
@pepiniere|La pépinière|🌳|plein_air|#6a9a4a|#2e8b57|plante,tap
#Pépiniériste Muteba|le pépiniériste|Pépiniériste|h|Chaque jeune arbre planté est un cadeau pour les générations futures.|reboisement|Planter des arbres
Pourquoi plante-t-on des arbres ?|pour protéger le sol et l’air|pour boucher les routes|pour rien|pour polluer|Reboisement.
Un jeune plant a besoin de…|eau et soleil|sel et plastique|fer et verre|rien|Soins réguliers.
Les arbres retiennent…|le sol avec leurs racines|le vent seulement|la neige|le sable des mers|Contre l’érosion.
Quel arbre donne des mangues ?|le manguier|le bananier|le palmier|le baobab|Fruitier.
Le 5 juin, on fête…|la journée de l’environnement|la journée du pain|la fête du sport|la fête du vent|Journée mondiale.
#Ecologue Kitoko|l’écologue|Écologue|f|Chaque arbre abrite des dizaines d’espèces.|biodiversite|La biodiversité
La biodiversité, c’est…|la variété des êtres vivants|le nombre de rues|le nombre de maisons|la couleur du ciel|Animaux, plantes, champignons.
Une chaîne alimentaire commence par…|les plantes|les lions|les cailloux|les nuages|Producteurs.
Les décomposeurs…|recyclent la matière morte|chassent|chantent|volent|Bactéries et champignons.
Pourquoi les abeilles sont-elles importantes ?|elles pollinisent|elles volent haut|elles sont jaunes|elles chantent|Fruits et graines.
Détruire un habitat, c’est…|menacer les espèces qui y vivent|les aider|les nourrir|les compter|Perte d’abri.
@piscine|La piscine olympique|🏊|batiment|#8fd0e8|#1f8bd9|plante,tap
#Entraîneur Tshibangu|l’entraîneur|Entraîneur de natation|h|Nager, c’est un sport complet et une compétence qui sauve des vies.|natation|Natation et sécurité
Quelle nage se pratique sur le ventre avec des mouvements alternés des bras ?|le crawl|la marche|la course|la danse|Le crawl est la nage la plus rapide.
Pourquoi ne se baigne-t-on pas seul ?|pour la sécurité|pour s’ennuyer|pour rien|pour le bruit|Un adulte surveille.
Que fait-on avant de nager ?|on s’échauffe|on dort|on mange beaucoup|on court sans fin|Évite les crampes.
Combien de lignes d’eau dans une piscine olympique (en général) ?|8|2|20|100|Huit couloirs.
Une piscine olympique mesure…|50 mètres|5 mètres|500 mètres|15 mètres|50 m de long.
#Maître-nageuse Kadima|la maître-nageuse|Maître-nageuse|f|Je surveille et j’apprends aux enfants à nager.|chrono|Chronos et distances
Un nageur fait 4 longueurs de 50 m. Distance ?|200 m|54 m|100 m|20 m|4 × 50 = 200.
Il nage 1 longueur en 40 s. En 3 longueurs ?|120 s|43 s|80 s|400 s|3 × 40 = 120.
60 secondes font…|1 minute|1 heure|1 jour|10 minutes|1 min = 60 s.
Un nageur a un chrono de 62 s, l’autre de 58 s. Qui est le plus rapide ?|celui de 58 s|celui de 62 s|égalité|on ne peut pas savoir|Plus le temps est petit, plus c’est rapide.
Il y a 8 nageurs, 3 sont sur le podium. Combien ne montent pas ?|5|11|3|8|8 − 3 = 5.
@basket|Le terrain de basket|🏀|plein_air|#d98a6a|#e67e22|plante,tap
#Coach Tshimanga|le coach|Entraîneur de basket|h|On joue en équipe : passer, tirer, défendre.|basket|Règles du basket
Combien de joueurs par équipe sur le terrain ?|5|11|2|20|Cinq joueurs.
Un panier normal rapporte…|2 points|10 points|1 000 points|0 point|Deux points (3 de loin).
On marque en lançant le ballon…|dans le panier|dans le filet de pêche|sur la tête|au sol|Le cercle est à 3,05 m.
Quelle qualité est essentielle en basket ?|l’esprit d’équipe|la violence|la triche|l’égoïsme|Jeu collectif.
Peut-on frapper un adversaire ?|non|oui|seulement le samedi|seulement le dimanche|Faute.
#Statisticienne Ilunga|la statisticienne|Statisticienne|f|Je note chaque point et chaque passe.|stats_basket|Scores et statistiques
Une équipe marque 12, 15 et 18 points. Total ?|45|35|180|30|12 + 15 + 18 = 45.
Moyenne de 10, 20 et 30 points ?|20|60|10|30|60 ÷ 3 = 20.
Équipe A 50, équipe B 42. Écart ?|8|92|50|42|50 − 42 = 8.
Un panier à 3 points, 4 fois. Total ?|12|7|34|3|4 × 3 = 12.
Qui gagne : 45 à 38 ?|celle qui a 45|celle qui a 38|personne|les deux|Le plus de points gagne.
@athletisme|La piste d’athlétisme|🏃|plein_air|#d98a6a|#c0392b|plante,tap
#Entraîneuse Mbombo|l’entraîneuse|Entraîneuse d’athlétisme|f|Courir, sauter, lancer : l’athlétisme est le sport de base.|athletisme|Courir, sauter, lancer
Une piste de stade fait en général…|400 mètres|40 mètres|4 000 mètres|4 mètres|Un tour de piste.
Quel sport consiste à sauter le plus loin ?|le saut en longueur|le lancer du poids|la natation|le basket|Athlétisme.
Pourquoi s’échauffe-t-on ?|pour éviter les blessures|pour se fatiguer|pour rien|pour ralentir|Préparer les muscles.
Un marathon fait environ…|42 km|4 km|420 km|1 km|42,195 km.
Le fair-play, c’est…|respecter les règles et les autres|tricher|insulter|abandonner|Esprit sportif.
#Chronométreur Kasonga|le chronométreur|Chronométreur|h|Chaque centième de seconde compte !|chronos_course|Vitesse et temps
Un coureur fait 100 m en 12 s. Un autre en 11 s. Qui gagne ?|celui de 11 s|celui de 12 s|égalité|personne|Le plus petit temps.
Combien de tours de 400 m pour faire 1 600 m ?|4|16|2|40|1 600 ÷ 400 = 4.
Il court 10 km en 1 h. Vitesse ?|10 km/h|1 km/h|100 km/h|60 km/h|10 ÷ 1 = 10.
120 secondes font…|2 minutes|12 minutes|20 minutes|1 minute|120 ÷ 60 = 2.
Courir 5 km par jour pendant 7 jours fait…|35 km|12 km|57 km|70 km|5 × 7 = 35.
@echecs|Le club d’échecs|♟️|batiment|#cfc6b2|#2a2a2a|papier,tap
#Maître Nkashama|le maître d’échecs|Maître d’échecs|h|Aux échecs, on réfléchit avant de jouer : chaque coup compte.|echecs|Le jeu d’échecs
Combien de cases sur un échiquier ?|64|32|100|16|8 × 8.
Quelle pièce protège-t-on à tout prix ?|le roi|le pion|la tour|le fou|Échec et mat.
Les pions avancent…|d’une case vers l’avant|en diagonale seulement|sur tout l’échiquier|en arrière|Premier coup : une ou deux cases.
Quel jeu développe la logique et la patience ?|les échecs|le saut à la corde|le football|la course|Réflexion.
Que veut dire « échec et mat » ?|le roi ne peut plus échapper|le jeu est annulé|on a perdu les pions|on mange|Fin de la partie.
#Professeure Mbuyi|la professeure|Professeure de logique|f|La logique se muscle comme le corps.|logique|Raisonner
Suite : 2, 4, 6, 8, … La suite est…|10|9|12|11|On ajoute 2.
Si tous les chats sont des animaux et Mimi est un chat, alors Mimi est…|un animal|un oiseau|une plante|un objet|Déduction.
Quel nombre est le double de 15 ?|30|20|45|7,5|15 × 2.
Complète : 5, 10, 15, 20, …|25|30|22|21|On ajoute 5.
Un carré a combien de côtés ?|4|3|5|6|Quatre côtés égaux.
@cinema|Le cinéma|🎬|batiment|#7a3b3b|#c0392b|cuivre,tap
#Réalisateur Mbaya|le réalisateur|Réalisateur|h|Un film, c’est une histoire racontée avec des images et du son.|cinema|Faire un film
Qui dirige le tournage d’un film ?|le réalisateur|le boulanger|le pêcheur|le plombier|Il met en scène.
Les acteurs…|jouent des rôles|vendent des tickets|cuisinent|conduisent|Comédiens.
Qui écrit l’histoire d’un film ?|le scénariste|le boucher|le mécanicien|le maçon|Il écrit le scénario.
Un film est composé…|d’images et de sons|de briques|de farine|de sable|Image + son.
Pourquoi respecte-t-on le silence en salle ?|pour ne pas gêner les autres|pour dormir|pour rien|pour le bruit|Politesse.
#Projectionniste Ngalula|la projectionniste|Projectionniste|f|Je lance le film : la lumière traverse la pellicule ou le numérique.|lumiere_cinema|Lumière et image
La lumière se propage…|en ligne droite|en zigzag|en cercle seulement|à l’envers|Principe de la projection.
Un écran blanc reflète…|la lumière|le son|la chaleur|le vent|Il renvoie l’image.
Un film de 90 minutes dure…|1 h 30|9 h|19 min|1 h|90 min = 1 h 30.
Un ticket coûte 2 000 FC. Pour 3 amis ?|6 000 FC|5 000 FC|2 003 FC|9 000 FC|3 × 2 000 = 6 000.
La salle de cinéma est sombre pour…|mieux voir l’image|dormir|cacher les gens|rien|Contraste.
@theatre|Le théâtre de verdure|🎭|batiment|#8a3b5a|#8e44ad|papier,tap
#Comédien Mbuyi|le comédien|Comédien|h|Au théâtre, on joue devant le public, avec la voix et le corps.|theatre|Jouer sur scène
Qui joue sur la scène ?|les comédiens|les maçons|les boulangers|les pêcheurs|Acteurs.
Un texte de théâtre est dit…|une pièce|un roman|un poème|une recette|Pièce de théâtre.
Que montre le rideau qui s’ouvre ?|le début du spectacle|la fin|une pause pub|rien|Début de la représentation.
Un monologue est…|un texte dit par un seul personnage|une chanson|un cri|une danse|Seul en scène.
Pourquoi applaudit-on à la fin ?|pour remercier les artistes|pour faire du bruit|pour rien|pour dormir|Politesse.
#Metteuse en scène Kabuya|la metteuse en scène|Metteuse en scène|f|Je dirige les acteurs : où se placer, comment parler.|expression_orale|Bien s’exprimer
Pour être bien compris, on parle…|distinctement|très bas|en mangeant|en tournant le dos|Articulation.
Avant de monter sur scène, on…|répète|dort|mange|court|Répétitions.
Le trac est…|la peur avant de se produire|une maladie|une fête|un instrument|Il se maîtrise avec la préparation.
Un bon orateur regarde…|son public|ses chaussures|le plafond|la porte|Contact visuel.
Une didascalie indique…|les gestes et le décor|le prix|l’auteur|la page|Indication scénique.
@chorale|La chorale|🎶|batiment|#e0c898|#d4a017|cuivre,tap
#Chef de chœur Mbuya|le chef de chœur|Chef de chœur|h|Chanter ensemble, c’est apprendre à s’écouter.|musique|Musique et chant
Une chorale est…|un groupe de chanteurs|un groupe de maçons|un groupe de pêcheurs|une équipe de foot|Elle chante en chœur.
Combien de notes dans la gamme ?|7|2|20|100|Do, ré, mi, fa, sol, la, si.
Le rythme, c’est…|la régularité des sons dans le temps|la couleur d’un son|le prix d’un instrument|une adresse|Pulsation.
Quel instrument à percussion est joué avec les mains ?|le tambour|la flûte|le violon|le piano|On le frappe.
Pourquoi respire-t-on bien en chantant ?|pour tenir les notes|pour dormir|pour rien|pour rire|Souffle.
#Compositrice Zawadi|la compositrice|Compositrice|f|J’invente des mélodies que tout le monde peut chanter.|patrimoine_musical|Musiques du Congo
La rumba congolaise est…|un genre musical|un plat|un sport|une maladie|Musique populaire.
Quel instrument joue-t-on avec les pouces ?|le likembé|le violon|la trompette|la harpe|Piano à pouces.
Pourquoi fête-t-on les musiciens traditionnels ?|ils gardent notre culture|ils sont riches|ils sont bruyants|ils sont rares|Patrimoine.
Un refrain est…|la partie répétée d’une chanson|une adresse|une fin|un silence|Reprise.
La musique peut…|rassembler les gens|diviser toujours|faire peur toujours|ne rien faire|Lien social.
@photo|Le studio photo|📷|batiment|#d9c8e8|#8e44ad|cuivre,tap
#Photographe Mulumba|le photographe|Photographe|h|Une bonne photo demande de la lumière et un bon œil.|photographie|La photographie
Que capte un appareil photo ?|la lumière|le son seulement|l’odeur|le goût|Il enregistre la lumière.
Pour un portrait réussi, on cherche…|une bonne lumière|le noir complet|la pluie|le vent|Éclairage.
Que signifie « cadrer » ?|choisir ce qui entre dans l’image|casser l’appareil|peindre|chanter|Composition.
Pourquoi demande-t-on l’accord avant de photographier une personne ?|par respect|pour rien|pour le bruit|pour la couleur|Droit à l’image.
Une photo numérique est stockée…|sur une carte mémoire|dans une casserole|dans un seau|dans l’eau|Fichier.
#Retoucheuse Kasonga|la retoucheuse|Retoucheuse|f|J’améliore les couleurs, sans tromper personne.|images_numeriques|Images et numérique
Un pixel est…|un petit point d’image|une pièce|un outil|un nom|Image = pixels.
Pour une image plus nette, il faut…|plus de pixels|moins de lumière|plus de bruit|un autre nom|Résolution.
Peut-on retoucher une photo pour tromper ?|non, ce serait malhonnête|oui toujours|seulement la nuit|seulement en été|Éthique.
Avant de publier une photo d’un enfant, on demande…|l’accord des parents|rien|un prix|un cadeau|Protection.
Qui doit-on citer pour une photo d’autrui ?|son auteur|personne|le voisin|le vent|Droits d’auteur.
@change|Le bureau de change|💱|batiment|#cfd8c3|#2e8b57|papier,tap
#Cambiste Kalenga|le cambiste|Cambiste|h|Ici, on change les francs congolais contre des dollars, et inversement.|monnaie|La monnaie
Quelle est la monnaie officielle de la RDC ?|le franc congolais|le franc CFA|l’euro|le yen|Le CDF.
À quoi sert une monnaie ?|à acheter et vendre|à jouer seulement|à construire|à cuire|Moyen d’échange.
Un taux de change est…|le prix d’une monnaie en une autre|un impôt|une chanson|une danse|Conversion.
Un faux billet est…|une contrefaçon illégale|un cadeau|un jeu|un menu|Il est interdit.
Peut-on changer de l’argent dans la rue avec un inconnu ?|c’est risqué, mieux vaut un lieu officiel|oui toujours|oui la nuit|jamais de problème|Sécurité.
#Client Mulongo|le client|Client|h|Je voudrais changer 100 dollars, s’il vous plaît.|conversion|Calculer un change
1 $ = 2 000 FC. Combien font 5 $ ?|10 000 FC|2 005 FC|5 000 FC|7 000 FC|5 × 2 000 = 10 000.
1 $ = 2 000 FC. 6 000 FC font…|3 $|12 $|600 $|30 $|6 000 ÷ 2 000 = 3.
Tu changes 50 $ à 2 000 FC pour 1 $. Tu reçois…|100 000 FC|52 000 FC|40 000 FC|25 000 FC|50 × 2 000 = 100 000.
Une commission de 1 000 FC est retirée de 20 000 FC. Il reste…|19 000 FC|21 000 FC|20 000 FC|1 000 FC|20 000 − 1 000.
Pourquoi compte-t-on l’argent reçu devant le cambiste ?|pour éviter les erreurs|pour le bruit|pour rien|pour jouer|Vérification.
@gareroutiere|La gare routière|🚌|batiment|#cfc6b2|#2e6da4|fer,tap
#Chef de gare Mpanya|le chef de gare|Chef de gare routière|h|Les bus partent à l’heure : chacun doit connaître son horaire.|transport|Voyager en sécurité
Pourquoi consulte-t-on les horaires ?|pour ne pas rater son départ|pour rien|pour jouer|pour dormir|Organisation.
Dans un bus, on…|s’assoit et s’attache si possible|danse|court|grimpe sur le toit|Sécurité.
Le chauffeur doit…|se reposer et respecter la route|dormir au volant|boire de l’alcool|rouler sans freins|Prudence.
Un billet de bus prouve…|qu’on a payé son voyage|qu’on est riche|qu’on est policier|rien|Titre de transport.
Pourquoi ne voyage-t-on pas la nuit sans lumière ?|on ne voit pas la route|on est trop grand|on a faim|on rit|Danger.
#Guichetière Mpoyi|la guichetière|Guichetière|f|Un billet pour Lubumbashi ? Voici votre horaire.|horaires|Heures et trajets
Un bus part à 8 h et arrive à 14 h. Durée ?|6 h|22 h|8 h|14 h|14 − 8 = 6.
Un trajet fait 240 km à 60 km/h. Durée ?|4 h|180 h|300 h|14 400 h|240 ÷ 60 = 4.
Un billet coûte 15 000 FC. Pour 3 personnes ?|45 000 FC|18 000 FC|5 000 FC|15 003 FC|3 × 15 000.
Il est 9 h 30. Le bus part dans 45 min. À quelle heure ?|10 h 15|9 h 75|10 h 30|9 h 45|9 h 30 + 45 min = 10 h 15.
Combien de minutes dans 2 heures ?|120|20|60|200|2 × 60.
@supermarche|Le supermarché|🛒|batiment|#e4dcc8|#c0392b|papier,tap
#Caissier Mbala|le caissier|Caissier|h|Chaque article a son prix : je calcule le total.|prix|Prix et pourcentages
Un article coûte 2 000 FC. 3 articles ?|6 000 FC|5 000 FC|2 003 FC|8 000 FC|3 × 2 000.
Remise de 10 % sur 10 000 FC. Prix final ?|9 000 FC|1 000 FC|10 100 FC|8 000 FC|10 % = 1 000.
Remise de 50 % sur 4 000 FC. Prix final ?|2 000 FC|4 050 FC|1 000 FC|8 000 FC|La moitié.
On paie 20 000 FC pour un total de 17 500 FC. On rend…|2 500 FC|37 500 FC|3 500 FC|500 FC|20 000 − 17 500.
Pourquoi vérifie-t-on le ticket de caisse ?|pour s’assurer du bon montant|pour le manger|pour le jeter|pour rien|Contrôle.
#Gérante Kapinga|la gérante|Gérante|f|Il faut bien lire les étiquettes : date limite, ingrédients, prix.|etiquettes|Lire les étiquettes
La date limite de consommation indique…|jusqu’à quand on peut manger le produit|le prix|la couleur|l’auteur|Sécurité alimentaire.
Un produit périmé…|ne doit pas être consommé|est meilleur|est gratuit|est plus fort|Danger.
Le poids net est…|le poids du produit sans l’emballage|le prix|la taille|la couleur|Sans emballage.
Les ingrédients sont listés…|du plus abondant au moins abondant|au hasard|par couleur|par prix|Règle d’étiquetage.
Quel geste évite le gaspillage ?|acheter ce dont on a besoin|acheter trop|jeter tout|rien|Consommation responsable.
@stationservice|La station-service|⛽|atelier|#d9c24a|#e67e22|fer,tap
#Pompiste Ngoie|le pompiste|Pompiste|h|Essence, gasoil : attention au feu et aux étincelles !|carburants|Carburants et sécurité
Pourquoi ne fume-t-on pas à la station ?|risque d’explosion|c’est joli|on est fatigué|on a froid|L’essence est inflammable.
Que fournit la station ?|du carburant|du pain|des livres|de l’eau minérale seulement|Essence, gasoil.
Le carburant vient…|du pétrole|du lait|du sable|du bois|Raffinage.
Que fait-on avant de remplir le réservoir ?|on coupe le moteur|on danse|on court|on klaxonne|Sécurité.
Pourquoi économiser l’essence ?|elle est chère et pollue|elle est bleue|elle est sucrée|elle est lourde|Environnement et budget.
#Gérant Mulenda|le gérant|Gérant|h|Le litre, c’est mon unité de travail de chaque jour.|litres|Litres et prix
Le litre d’essence coûte 3 000 FC. 10 litres ?|30 000 FC|3 010 FC|13 000 FC|300 FC|10 × 3 000.
Un réservoir de 40 L, déjà à moitié plein. Combien ajouter ?|20 L|40 L|80 L|10 L|La moitié de 40.
Un véhicule consomme 8 L pour 100 km. Pour 200 km ?|16 L|8 L|10 L|24 L|2 × 8 = 16.
1 L vaut…|1 000 mL|10 mL|100 mL|1 mL|1 000 millilitres.
Tu mets 5 L à 3 000 FC. Tu donnes 20 000 FC. On te rend…|5 000 FC|15 000 FC|2 000 FC|17 000 FC|20 000 − 15 000.
@orphelinat|La maison des enfants|🧸|batiment|#e0c8a0|#e67e22|plante,tap
#Éducatrice Mbuyi|l’éducatrice|Éducatrice|f|Chaque enfant a des droits : être aimé, protégé et instruit.|droits_enfant|Les droits de l’enfant
Un droit de l’enfant est…|d’aller à l’école|de travailler dans une mine|d’être frappé|d’être abandonné|Convention de 1989.
Qui doit protéger les enfants ?|les adultes et l’État|personne|les enfants seuls|les animaux|Responsabilité de tous.
Un enfant a droit…|à un nom et une nationalité|à aucun droit|à être caché|à rien|Identité.
Que faire si un enfant est maltraité ?|alerter un adulte responsable|l’ignorer|rire|se taire|Signalement.
Le droit à la santé signifie…|avoir accès aux soins|ne jamais aller à l’hôpital|manger du sable|ne rien boire|Soins pour tous.
#Directrice Mbaya|la directrice|Directrice|f|Ici, on apprend à vivre ensemble et à partager.|vivre_ensemble|Vivre ensemble
Pour bien vivre ensemble, on…|respecte les autres|se moque des plus petits|vole|se bat|Respect.
Partager, c’est…|donner une partie de ce que l’on a|tout garder|tout casser|tout cacher|Générosité.
Face à un désaccord, on…|discute calmement|crie|frappe|part sans rien dire|Dialogue.
Un enfant seul a besoin…|d’attention et de protection|d’être ignoré|de bruit|de punition|Solidarité.
La solidarité, c’est…|s’entraider|se disputer|tricher|ignorer|Valeur de société.
@forage|Le forage et le puits|⛲|plein_air|#b0a07a|#2e6da4|fer,tap
#Foreur Mutombo|le foreur|Foreur|h|Creuser profond pour trouver l’eau propre qui sauve des villages.|puits|Puits et forages
Un puits sert à…|puiser l’eau du sol|cuire|jouer|dormir|Nappe phréatique.
Un forage est…|un trou profond creusé pour trouver l’eau|une danse|une fête|un champ|Puits profond.
L’eau d’un puits doit être…|protégée des saletés|laissée à découvert|salie|jetée|Couvercle et margelle.
Pourquoi éloigne-t-on les latrines du puits ?|pour ne pas polluer l’eau|pour rien|pour le bruit|pour le soleil|Hygiène.
Une pompe sert à…|faire monter l’eau|écrire|couper|cuire|Mécanisme.
#Chef de village Ngandu|le chef de village|Chef de village|h|Un puits propre, c’est moins de maladies dans le village.|sante_communautaire|Santé du village
Pour éviter le choléra, on…|se lave les mains et boit de l’eau propre|boit l’eau sale|ne lave rien|mange sans cuire|Prévention.
Les vaccins protègent…|contre des maladies graves|de la pluie|du soleil|du bruit|Santé publique.
Un enfant malade doit aller…|au centre de santé|chez personne|au marché|à la rivière|Soins.
Une femme enceinte doit…|faire des consultations prénatales|éviter les médecins|ne rien manger|boire de l’alcool|Santé de la mère et du bébé.
La moustiquaire protège du…|paludisme|rhume seulement|soleil|vent|Piqûres de moustiques.
@moulin|Le moulin à manioc|🌾|atelier|#d9c27a|#8a5a32|legume,tap
#Meunière Nkulu|la meunière|Meunière|f|Le manioc, une fois épluché et pilé, donne la farine de nos repas.|manioc|Du manioc à la farine
Le manioc est…|un tubercule|un poisson|un oiseau|un métal|Racine comestible.
Pour enlever sa toxicité, on…|le rouit et le cuit|le mange cru|le jette|le colle|Transformation indispensable.
La farine de manioc sert à faire…|le fufu et la chikwangue|du verre|du papier|du ciment|Aliments de base.
Le moulin sert à…|écraser et moudre|cuire|couper|peindre|Mécanisation.
Quelle partie du manioc mange-t-on aussi ?|les feuilles (pondu)|les cailloux|le sable|l’écorce de l’arbre|Le pondu est très apprécié.
#Gérant Mutamba|le gérant|Gérant du moulin|h|Chaque sac de farine est pesé et vendu.|farine_calcul|Peser et vendre
Un sac de farine pèse 25 kg. Combien pèsent 4 sacs ?|100 kg|29 kg|50 kg|10 kg|4 × 25 = 100.
1 kg de farine coûte 1 500 FC. 10 kg ?|15 000 FC|1 510 FC|11 500 FC|150 000 FC|10 × 1 500.
Un sac de 50 kg est partagé en 5 parts égales. Chaque part ?|10 kg|45 kg|55 kg|250 kg|50 ÷ 5.
1 tonne vaut…|1 000 kg|100 kg|10 kg|10 000 kg|1 t = 1 000 kg.
Une balance sert à…|mesurer la masse|mesurer la longueur|mesurer le temps|mesurer la pluie|Poids.
@cooperative|La coopérative agricole|🤝|plein_air|#8fb06a|#2e7d4a|legume,tap
#Président Kasongo|le président|Président de la coopérative|h|Seul on va plus vite, ensemble on va plus loin : c’est notre devise.|cooperative|S’unir pour réussir
Une coopérative est…|un groupe qui travaille et vend ensemble|un cirque|un parc|une danse|Entraide économique.
L’avantage d’une coopérative est…|acheter et vendre à de meilleurs prix|dépenser plus|travailler seul|ne pas vendre|Force du nombre.
Les membres partagent…|le travail et les bénéfices|rien|les dettes seulement|les pannes|Équité.
Une décision se prend…|en discutant et en votant|par la force|au hasard|en secret|Démocratie interne.
Pourquoi tenir un cahier de comptes ?|pour suivre les recettes et dépenses|pour dessiner|pour rien|pour jouer|Transparence.
#Trésorière Mbuyi|la trésorière|Trésorière|f|Chaque franc doit être noté et justifié.|comptes_coop|Les comptes
Recettes 80 000 FC, dépenses 50 000 FC. Bénéfice ?|30 000 FC|130 000 FC|50 000 FC|80 000 FC|80 000 − 50 000.
10 membres partagent 50 000 FC à égalité. Chacun reçoit…|5 000 FC|500 000 FC|500 FC|60 000 FC|50 000 ÷ 10.
Un prêt de 40 000 FC remboursé en 4 mois. Par mois ?|10 000 FC|44 000 FC|160 000 FC|4 000 FC|40 000 ÷ 4.
Une épargne de 5 000 FC par mois pendant 6 mois fait…|30 000 FC|11 000 FC|5 006 FC|3 000 FC|5 000 × 6.
Pourquoi épargner ?|pour faire face aux imprévus et investir|pour perdre|pour cacher|pour rien|Sécurité.
`;
