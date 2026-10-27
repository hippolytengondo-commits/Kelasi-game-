import {Q} from './data.js';

// Langues nationales : lingala et swahili (8 missions chacune). Le kikongo et le tshiluba sont annoncés,
// leur contenu sera ajouté après validation par des locuteurs natifs.
const M=(intro,qs)=>({intro:intro,qs:qs});
const TRI=(consigne,paniers,objets,indice)=>({t:'tri',consigne:consigne,paniers:paniers,objets:objets,indice:indice});
export const C11={},J11={},K11={};
const C=C11;

// ======================================= LINGALA =======================================
C['ln|lin|0']=M(['En lingala, on se salue toujours avec politesse : « Mbote » (bonjour), « Mbote na yo » (bonjour à toi), « Boni ? » (comment vas-tu ?), « Nazali malamu » (je vais bien), « Matondi » (merci).','Pour dire au revoir, on peut dire « Tokomonana » (à bientôt, on se reverra).'],[
 Q('Que veut dire « Mbote » ?',['bonjour','merci','au revoir','s’il vous plaît'],'bonjour','Salutation de base.'),
 Q('Comment dit-on « merci » ?',['Matondi','Mbote','Boni','Kende'],'Matondi','Matondi = merci.'),
 Q('« Nazali malamu » veut dire…',['je vais bien','j’ai faim','je suis fatigué','je pars'],'je vais bien','Malamu = bien.'),
 Q('« Boni ? » veut dire…',['comment ça va ?','combien ?','où ?','qui ?'],'comment ça va ?','Salutation interrogative.')]);
J11['ln|lin|0']=[TRI('Salutation ou remerciement ? Range chaque mot lingala.',['Salutation','Remerciement'],[['Mbote','Salutation'],['Matondi','Remerciement'],['Mbote na yo','Salutation'],['Matondi mingi','Remerciement']])];
C['ln|lin|1']=M(['Les nombres en lingala : moko (1), mibale (2), misato (3), minei (4), mitano (5), motoba (6), sambo (7), mwambe (8), libwa (9), zomi (10).','Compter dans sa langue, c’est aimer son patrimoine.'],[
 Q('Que veut dire « mibale » ?',['2','5','8','10'],'2','Moko, mibale, misato…'),
 Q('Comment dit-on « 5 » ?',['mitano','minei','motoba','zomi'],'mitano','Mitano = cinq.'),
 Q('« Zomi » est le nombre…',['10','1','7','3'],'10','Zomi = dix.'),
 Q('Comment dit-on « 7 » ?',['sambo','mwambe','libwa','misato'],'sambo','Sambo = sept.')]);
C['ln|lin|2']=M(['La famille en lingala : mama (maman), tata (papa), mwana (enfant), ndeko (frère, sœur ou parent proche), koko (grand-parent), libota (famille), mobali (homme), mwasi (femme).','La famille est très importante dans la culture congolaise.'],[
 Q('Que veut dire « mama » ?',['maman','papa','enfant','famille'],'maman','Mama = maman.'),
 Q('Que veut dire « mwana » ?',['enfant','femme','homme','grand-parent'],'enfant','Mwana = enfant.'),
 Q('Que veut dire « libota » ?',['famille','village','maison','école'],'famille','Libota = famille.'),
 Q('Comment dit-on « femme » ?',['mwasi','mobali','mwana','tata'],'mwasi','Mwasi = femme.')]);
C['ln|lin|3']=M(['Les animaux en lingala : nkoko (poule), ngombe (vache), ngulu (cochon), mbwa (chien), nzoku (éléphant), nkosi (lion), ngando (crocodile), nyoka (serpent), ndeke (oiseau), mbisi (poisson).','Le crocodile et le serpent vivent près du fleuve.'],[
 Q('Que veut dire « nzoku » ?',['éléphant','lion','chien','poisson'],'éléphant','Nzoku = éléphant.'),
 Q('Comment dit-on « poisson » ?',['mbisi','ngombe','nkoko','ndeke'],'mbisi','Mbisi = poisson.'),
 Q('Que veut dire « nkosi » ?',['lion','vache','cochon','oiseau'],'lion','Nkosi = lion.'),
 Q('Comment dit-on « crocodile » ?',['ngando','nyoka','mbwa','nzoku'],'ngando','Ngando = crocodile.')]);
C['ln|lin|4']=M(['Manger et boire : bilei (nourriture), mai (eau), mampa (pain), mbisi (poisson), nyama (viande), loso (riz), kwanga (pain de manioc), makemba (bananes plantain).','« Nazali na nzala » veut dire « j’ai faim ».'],[
 Q('Que veut dire « mai » ?',['eau','pain','riz','viande'],'eau','Mai = eau.'),
 Q('Que veut dire « mampa » ?',['pain','poisson','banane','eau'],'pain','Mampa = pain.'),
 Q('Que veut dire « loso » ?',['riz','viande','pain','poisson'],'riz','Loso = riz.'),
 Q('« Nazali na nzala » veut dire…',['j’ai faim','j’ai soif','je suis content','je dors'],'j’ai faim','Nzala = faim.')]);
C['ln|lin|5']=M(['Phrases utiles : « Nkombo na ngai ezali Amani » (je m’appelle Amani), « Nalingi mai » (je veux de l’eau), « Yaka awa » (viens ici), « Kende » (va), « Nazali awa » (je suis ici).','Dire quelques phrases dans la langue de l’autre crée de la complicité.'],[
 Q('« Yaka awa » veut dire…',['viens ici','va-t’en','merci','bonne nuit'],'viens ici','Yaka = viens ; awa = ici.'),
 Q('« Nalingi mai » veut dire…',['je veux de l’eau','j’ai faim','je suis ici','je m’appelle'],'je veux de l’eau','Nalingi = je veux.'),
 Q('« Nkombo na ngai » veut dire…',['mon nom','ma maison','mon enfant','mon pain'],'mon nom','Nkombo = nom.'),
 Q('« Kende » veut dire…',['va','viens','mange','dors'],'va','Kende = va.')]);
C['ln|lin|6']=M(['La nature et le temps : moyi (soleil), sanza (lune ou mois), mbula (pluie ou année), mai (eau), moto (feu), nzela (chemin), ndako (maison), mboka (village), mokolo (jour), butu (nuit).','Le fleuve Congo, en lingala, c’est « Ebale ».'],[
 Q('Que veut dire « mbula » ?',['pluie ou année','soleil','nuit','chemin'],'pluie ou année','Mbula : la pluie, et aussi l’année.'),
 Q('Que veut dire « ndako » ?',['maison','village','chemin','eau'],'maison','Ndako = maison.'),
 Q('Que veut dire « butu » ?',['nuit','jour','soleil','lune'],'nuit','Butu = nuit.'),
 Q('Comment dit-on « village » ?',['mboka','ndako','nzela','moyi'],'mboka','Mboka = village ou pays.')]);
C['ln|lin|7']=M(['Au marché : « Motuya ezali boni ? » (combien ça coûte ?), « mingi » (beaucoup, cher), « moke » (peu, petit), « malamu » (bon), « mabe » (mauvais), « mbongo » (argent), « kosomba » (acheter).','Marchander poliment, c’est un art au marché.'],[
 Q('« Motuya ezali boni ? » veut dire…',['combien ça coûte ?','où es-tu ?','qui es-tu ?','que fais-tu ?'],'combien ça coûte ?','Motuya = prix.'),
 Q('Que veut dire « mingi » ?',['beaucoup','peu','bon','mauvais'],'beaucoup','Mingi = beaucoup.'),
 Q('Que veut dire « mbongo » ?',['argent','pain','route','marché'],'argent','Mbongo = argent.'),
 Q('Que veut dire « malamu » ?',['bon, bien','mauvais','petit','grand'],'bon, bien','Malamu = bien.')]);

// ======================================= SWAHILI =======================================
C['ln|swa|0']=M(['En swahili : « Jambo » ou « Hujambo ? » (bonjour, comment vas-tu ?), « Sijambo » (je vais bien), « Habari ? » (quoi de neuf ?) – « Nzuri » (bien), « Asante » (merci), « Karibu » (bienvenue), « Kwaheri » (au revoir), « Tafadhali » (s’il vous plaît), « Pole » (désolé, courage).','« Ndiyo » veut dire oui, « Hapana » veut dire non.'],[
 Q('Que veut dire « Asante » ?',['merci','bonjour','au revoir','bienvenue'],'merci','Asante = merci.'),
 Q('Que veut dire « Karibu » ?',['bienvenue','merci','au revoir','non'],'bienvenue','Karibu = bienvenue.'),
 Q('Comment dit-on « au revoir » ?',['Kwaheri','Jambo','Asante','Ndiyo'],'Kwaheri','Kwaheri = au revoir.'),
 Q('« Hapana » veut dire…',['non','oui','merci','peut-être'],'non','Hapana = non.')]);
J11['ln|swa|0']=[TRI('Oui ou non ? Range chaque mot swahili.',['Oui','Non'],[['Ndiyo','Oui'],['Hapana','Non'],['Naam','Oui'],['La','Non']])];
C['ln|swa|1']=M(['Les nombres en swahili : moja (1), mbili (2), tatu (3), nne (4), tano (5), sita (6), saba (7), nane (8), tisa (9), kumi (10).','Le swahili est parlé dans l’Est de la RDC et dans toute l’Afrique de l’Est.'],[
 Q('Que veut dire « tatu » ?',['3','4','5','6'],'3','Tatu = trois.'),
 Q('Comment dit-on « 10 » ?',['kumi','tisa','nane','saba'],'kumi','Kumi = dix.'),
 Q('« Mbili » est le nombre…',['2','1','7','8'],'2','Mbili = deux.'),
 Q('Comment dit-on « 5 » ?',['tano','sita','nne','moja'],'tano','Tano = cinq.')]);
C['ln|swa|2']=M(['La famille en swahili : mama (maman), baba (papa), mtoto (enfant), kaka (frère), dada (sœur), babu (grand-père), bibi (grand-mère), rafiki (ami), familia (famille).','Le préfixe « wa- » marque souvent le pluriel des personnes : watoto = les enfants.'],[
 Q('Que veut dire « baba » ?',['papa','maman','frère','sœur'],'papa','Baba = papa.'),
 Q('Que veut dire « mtoto » ?',['enfant','ami','grand-père','école'],'enfant','Mtoto = enfant.'),
 Q('Comment dit-on « sœur » ?',['dada','kaka','bibi','babu'],'dada','Dada = sœur.'),
 Q('« Rafiki » veut dire…',['ami','famille','maison','maître'],'ami','Rafiki = ami.')]);
C['ln|swa|3']=M(['Les animaux en swahili : simba (lion), tembo (éléphant), twiga (girafe), nyoka (serpent), ndege (oiseau), paka (chat), mbwa (chien), ng’ombe (vache), kuku (poule), samaki (poisson), mamba (crocodile).','Le « roi de la jungle » s’appelle « simba ».'],[
 Q('Que veut dire « simba » ?',['lion','éléphant','chat','chien'],'lion','Simba = lion.'),
 Q('Que veut dire « tembo » ?',['éléphant','girafe','serpent','poule'],'éléphant','Tembo = éléphant.'),
 Q('Comment dit-on « poisson » ?',['samaki','kuku','paka','ndege'],'samaki','Samaki = poisson.'),
 Q('Comment dit-on « chien » ?',['mbwa','paka','mamba','twiga'],'mbwa','Mbwa = chien.')]);
C['ln|swa|4']=M(['Manger et boire : maji (eau), chakula (nourriture), mkate (pain), nyama (viande), samaki (poisson), mchele (riz), ndizi (banane), maziwa (lait), mahindi (maïs), ugali (pâte de maïs), chai (thé).','« Nina njaa » veut dire « j’ai faim » et « Nina kiu » veut dire « j’ai soif ».'],[
 Q('Que veut dire « maji » ?',['eau','lait','pain','riz'],'eau','Maji = eau.'),
 Q('Que veut dire « mkate » ?',['pain','poisson','banane','maïs'],'pain','Mkate = pain.'),
 Q('« Nina njaa » veut dire…',['j’ai faim','j’ai soif','je suis fatigué','j’ai peur'],'j’ai faim','Njaa = faim.'),
 Q('Comment dit-on « banane » ?',['ndizi','mchele','maziwa','chai'],'ndizi','Ndizi = banane.')]);
C['ln|swa|5']=M(['Phrases utiles : « Jina langu ni Amani » (je m’appelle Amani), « Unaitwa nani ? » (comment t’appelles-tu ?), « Bei gani ? » (combien ça coûte ?), « Ninaenda shuleni » (je vais à l’école), « Sielewi » (je ne comprends pas).','« Naomba maji » veut dire « je voudrais de l’eau ».'],[
 Q('« Jina langu ni… » veut dire…',['je m’appelle…','je vais…','j’ai…','je veux…'],'je m’appelle…','Jina = nom.'),
 Q('« Bei gani ? » veut dire…',['combien ça coûte ?','où vas-tu ?','qui es-tu ?','quel jour ?'],'combien ça coûte ?','Bei = prix.'),
 Q('« Sielewi » veut dire…',['je ne comprends pas','je suis content','je pars','je mange'],'je ne comprends pas','Utile quand on apprend !'),
 Q('« Ninaenda shuleni » veut dire…',['je vais à l’école','je mange du pain','je suis malade','je dors'],'je vais à l’école','Shule = école.')]);
C['ln|swa|6']=M(['Les jours de la semaine : Jumatatu (lundi), Jumanne (mardi), Jumatano (mercredi), Alhamisi (jeudi), Ijumaa (vendredi), Jumamosi (samedi), Jumapili (dimanche).','« Siku » veut dire « jour ».'],[
 Q('Comment dit-on « dimanche » ?',['Jumapili','Jumamosi','Ijumaa','Jumatatu'],'Jumapili','Jumapili = dimanche.'),
 Q('Que veut dire « Jumamosi » ?',['samedi','lundi','jeudi','mardi'],'samedi','Jumamosi = samedi.'),
 Q('Que veut dire « Jumatatu » ?',['lundi','mardi','mercredi','jeudi'],'lundi','Jumatatu = lundi.'),
 Q('Que veut dire « siku » ?',['jour','nuit','semaine','mois'],'jour','Siku = jour.')]);
C['ln|swa|7']=M(['Les couleurs : nyekundu (rouge), nyeupe (blanc), nyeusi (noir), kijani (vert), njano (jaune), bluu (bleu).','Le drapeau de la RDC est bleu, jaune et rouge.'],[
 Q('Que veut dire « nyekundu » ?',['rouge','vert','noir','blanc'],'rouge','Nyekundu = rouge.'),
 Q('Comment dit-on « vert » ?',['kijani','njano','nyeusi','bluu'],'kijani','Kijani = vert.'),
 Q('Que veut dire « njano » ?',['jaune','bleu','noir','rouge'],'jaune','Njano = jaune.'),
 Q('Que veut dire « nyeupe » ?',['blanc','noir','vert','bleu'],'blanc','Nyeupe = blanc.')]);
