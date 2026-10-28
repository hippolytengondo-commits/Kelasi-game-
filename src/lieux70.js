import {THEMES} from './lieux_themes.js';
import {LIEUX_TR} from './lieux_territoires.js';

// 70 lieux d'exploration supplémentaires : 24 provinces de la RDC (questions générées à partir d'un tableau)
// et 46 lieux thématiques (métiers, histoire et civisme, sciences, sport et culture, vie pratique).
// Chaque lieu : {id, nom, ico, arch, wall, accent, seed, mj:[matériau, style], npc:[2 personnages avec 5 questions]}
const NOMS_H=['Kanku','Lumbala','Mukendi','Tshimbalanga','Mbangu','Kitoko','Bosenge','Lokuli','Ekofo','Likambo','Ilumbe','Bokungu','Isekusu','Elonga','Lomboto','Mpia','Liyolo','Bofoe','Nkoy','Bolamba','Ngbanda','Bangala','Dumbi','Mayele'];
const NOMS_F=['Mputu','Ntambue','Tshala','Ngalula','Kapya','Bokele','Likasi','Bosolo','Lisanga','Ekila','Bolenge','Itela','Mongali','Yenga','Mbolela','Zuzi','Biyoyo','Lola','Isse','Nsona','Mapendo','Safi','Neema','Furaha'];

// ---- provinces : [id, province, chef-lieu, cours d'eau ou lac, atout, richesse, matériau du mini-jeu, décor, murs, accent]
const PROV=[
 ['kongocentral','Kongo-Central','Matadi','le fleuve Congo (jusqu’à l’océan Atlantique)','le port de Matadi et les barrages d’Inga','le port et l’électricité','fer','eau','#9ac5a4','#1f7a4d'],
 ['kwango','Kwango','Kenge','la rivière Kwango','la savane du sud-ouest, à la frontière de l’Angola','le manioc et le maïs','legume','plein_air','#d9c27a','#a8601a'],
 ['kwilu','Kwilu','Kikwit','la rivière Kwilu','la grande ville de Kikwit','l’huile de palme','legume','plein_air','#8fb06a','#2e7d4a'],
 ['maindombe','Mai-Ndombe','Inongo','le lac Mai-Ndombe','le lac Mai-Ndombe aux eaux sombres','le bois et la pêche','poisson','eau','#8fb4d9','#1f6b8a'],
 ['kasai','Kasaï','Tshikapa','la rivière Kasaï','la ville de Tshikapa, au bord de la rivière Kasaï','le diamant','sable','montagne','#d9c8a0','#8a5a32'],
 ['kasaicentral','Kasaï-Central','Kananga','la rivière Lulua','la ville de Kananga','le maïs et le manioc','legume','plein_air','#e0c898','#c0392b'],
 ['kasaioriental','Kasaï-Oriental','Mbuji-Mayi','la rivière Mbujimayi','la ville de Mbuji-Mayi','le diamant','sable','montagne','#d9dde8','#2e6da4'],
 ['lomami','Lomami','Kabinda','la rivière Lomami','la ville de Kabinda','l’agriculture','legume','plein_air','#c9dca0','#2e8b57'],
 ['sankuru','Sankuru','Lusambo','la rivière Sankuru','la région natale de Patrice Lumumba','la forêt et l’agriculture','bois','foret','#7fa24a','#1f6b3a'],
 ['maniema','Maniema','Kindu','le fleuve Lualaba','la ville de Kindu, au bord du Lualaba','l’or et l’étain','fer','eau','#e6b25c','#8a5a32'],
 ['sudkivu','Sud-Kivu','Bukavu','le lac Kivu','le parc de Kahuzi-Biega et ses gorilles de plaine','le café et l’or','cafe','montagne','#9ac5a4','#2e8b57'],
 ['ituri','Ituri','Bunia','le lac Albert','la réserve de faune à okapis','l’or','fer','foret','#5a8a4a','#8a5a32'],
 ['hautuele','Haut-Uele','Isiro','la rivière Uele','le parc de Garamba, partagé avec le Haut-Uele','l’or et le coton','fer','plein_air','#d9c27a','#e67e22'],
 ['basuele','Bas-Uele','Buta','la rivière Uele','la ville de Buta, au bord de l’Uele','le coton','tissu','plein_air','#e8dcc4','#c0392b'],
 ['tshopo','Tshopo','Kisangani','le fleuve Congo','les chutes Wagenia (Boyoma)','le bois','bois','eau','#8fb4d9','#2e6da4'],
 ['mongala','Mongala','Lisala','le fleuve Congo','le port fluvial de Bumba','le commerce sur le fleuve','poisson','eau','#9fc6dd','#1f8bd9'],
 ['nordubangi','Nord-Ubangi','Gbadolite','la rivière Ubangi','la ville de Gbadolite, ancienne résidence de Mobutu','le café et l’huile de palme','cafe','village','#d98a6a','#7a3b12'],
 ['sudubangi','Sud-Ubangi','Gemena','la rivière Ubangi','la ville de Gemena','le café','cafe','plein_air','#c9a27a','#8a5a32'],
 ['equateur','Équateur','Mbandaka','le fleuve Congo (au confluent de la Ruki)','la ville de Mbandaka, traversée par l’équateur','le bois et la pêche','bois','foret','#5a8a4a','#2e7d4a'],
 ['tshuapa','Tshuapa','Boende','la rivière Tshuapa','le parc national de la Salonga, en partie','la forêt','bois','foret','#6a9a4a','#1f6b3a'],
 ['hautlomami','Haut-Lomami','Kamina','le lac Upemba','le parc national de l’Upemba','la pêche et le maïs','poisson','eau','#9fc6dd','#2e6da4'],
 ['lualaba','Lualaba','Kolwezi','la rivière Lualaba','les mines de cuivre et de cobalt de Kolwezi','le cuivre et le cobalt','cuivre','atelier','#b09a6a','#e67e22'],
 ['hautkatanga','Haut-Katanga','Lubumbashi','la rivière Lubumbashi','la ville de Lubumbashi, deuxième ville du pays','le cuivre','cuivre','ville','#d5dbe3','#8a3b12'],
 ['kinshasa','Kinshasa','Kinshasa (ville-province)','le fleuve Congo','la capitale, face à Brazzaville','le commerce et les services','papier','ville','#cfd8e3','#0b5fa5']
];
function autres(champ,i,k,exclure){
  const vus=new Set([exclure]),out=[];
  for(let j=1;out.length<k&&j<PROV.length*2;j++){const v=PROV[(i+j*5)%PROV.length][champ];if(!vus.has(v)){vus.add(v);out.push(v)}}
  return out;
}
function lieuProvince(row,i){
  const [id,nom,cap,cours,atout,riche,res,arch,wall,acc]=row;
  const art=nom==='Kinshasa'?'de ':/^[AEIOUÉ]/.test(nom)?'de l’':'du ';
  const A=[
   [`Quel est le chef-lieu de la province ${art}${nom} ?`,cap,...autres(2,i,3,cap),`Le chef-lieu est ${cap}.`],
   [`« ${cap} » est le chef-lieu de quelle province ?`,nom,...autres(1,i,3,nom),`${cap} est le chef-lieu de la province ${art}${nom}.`],
   [`Quel cours d’eau ou lac est associé à la province ${art}${nom} ?`,cours,...autres(3,i,3,cours),`Il joue un grand rôle pour cette province.`],
   [`Quelle province est connue pour ${atout} ?`,nom,...autres(1,i,3,nom),`C’est la province ${art}${nom}.`],
   ['Combien de provinces compte la RDC ?','26','11','6','13','La RDC compte 26 provinces, dont Kinshasa.']];
  const B=[
   [`Quelle richesse est associée à la province ${art}${nom} ?`,riche,...autres(5,i,3,riche),`La province ${art}${nom} est connue pour ${riche}.`],
   [`Quelle province est connue pour ${riche} ?`,nom,...PROV.filter((p,j)=>j!==i&&p[5]!==riche).filter((p,j)=>(j+i)%3===0||j<3).slice(0,3).map(p=>p[1]),`${nom} est connue pour ${riche}.`],
   ['Quelle est la capitale de la RDC ?','Kinshasa','Lubumbashi','Goma','Kisangani','La capitale est Kinshasa.'],
   ['Combien de langues nationales la RDC compte-t-elle ?','4','2','10','1','Lingala, swahili, kikongo et tshiluba.'],
   ['Pourquoi faut-il bien gérer les richesses naturelles ?','pour que tous en profitent et les préserver','pour tout vendre très vite','pour les cacher','pour les jeter','Une gestion durable profite aux générations futures.']];
  const hA=i%2===0,hB=!hA;
  const nA=hA?NOMS_H[i%NOMS_H.length]:NOMS_F[i%NOMS_F.length],nB=hB?NOMS_H[(i+7)%NOMS_H.length]:NOMS_F[(i+7)%NOMS_F.length];
  return {id:'pv_'+id,nom:'Province '+art+nom,ico:'🗺️',arch:arch,wall:wall,accent:acc,seed:200+i,mj:[res,res==='poisson'?'peche':(i%3===0?'fall':'tap')],
    npc:[
     {id:'pv'+i+'a',nom:'Guide '+nA,court:hA?'le guide':'la guide',role:'Guide de la province',s:hA?'h':'f',salut:`Bienvenue dans la province ${art}${nom} ! Notre chef-lieu est ${cap}.`,suj:'prov_geo_'+id,lib:'La province '+art+nom,qs:A},
     {id:'pv'+i+'b',nom:'Spécialiste '+nB,court:hB?'le spécialiste':'la spécialiste',role:'Spécialiste local',s:hB?'h':'f',salut:`Les richesses ${art}${nom} sont nombreuses : viens les découvrir !`,suj:'prov_riche_'+id,lib:'Les richesses '+art+nom,qs:B}]};
}
function lireThemes(){
  const out=[];let cur=null,npc=null,seed=400;
  THEMES.split('\n').forEach(l=>{
    l=l.trim();if(!l)return;
    if(l[0]==='@'){const p=l.slice(1).split('|');const mj=(p[6]||'legume,tap').split(',');cur={id:'th_'+p[0],nom:p[1],ico:p[2],arch:p[3],wall:p[4],accent:p[5],seed:seed++,mj:mj,npc:[]};out.push(cur);return}
    if(l[0]==='#'){const p=l.slice(1).split('|');const h=p[3]==='h';npc={id:cur.id.slice(3)+(cur.npc.length?'b':'a'),nom:p[0],court:p[1],role:p[2],s:h?'h':'f',salut:p[4],suj:'th_'+p[5],lib:p[6],qs:[]};cur.npc.push(npc);return}
    const q=l.split('|').filter(x=>x!=='');
    if(q.length>=6)npc.qs.push(q.slice(0,6));
  });
  return out;
}
const THEMATIQUES=lireThemes();
const PROVINCES=PROV.map(lieuProvince);

// ordre de découverte : on alterne thèmes et provinces
export const LIEUX=[];
(function(){let t=0,p=0;while(t<THEMATIQUES.length||p<PROVINCES.length){
  for(let k=0;k<2&&t<THEMATIQUES.length;k++)LIEUX.push(THEMATIQUES[t++]);
  if(p<PROVINCES.length)LIEUX.push(PROVINCES[p++]);
}})();
// les 145 lieux « territoires » sont fusionnés avec les autres : après chaque lieu existant, deux territoires (par province)
(function(){const base=LIEUX.splice(0,LIEUX.length);let k=0;
  base.forEach(l=>{LIEUX.push(l);for(let j=0;j<2&&k<LIEUX_TR.length;j++)LIEUX.push(LIEUX_TR[k++])});
  while(k<LIEUX_TR.length)LIEUX.push(LIEUX_TR[k++]);
})();
