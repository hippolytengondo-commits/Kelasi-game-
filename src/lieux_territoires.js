import {TERRITOIRES_LISTE as T,BUILD,TITRES,dn,slug} from './territoires_gen.js';

// 145 lieux d'exploration libre : un par territoire de la RDC, avec 3 missions (3 personnes à rencontrer).
// Ils sont fusionnés avec les autres lieux d'exploration (voir lieux70.js) et suivent la même progression.
const NOMS_H=['Kanku','Lumbala','Mukendi','Mbangu','Kitoko','Bosenge','Lokuli','Ekofo','Ilumbe','Elonga','Mpia','Nkoy','Bolamba','Dumbi','Mayele','Kasongo','Tshibola'];
const NOMS_F=['Mputu','Tshala','Ngalula','Kapya','Bokele','Likasi','Bosolo','Lisanga','Ekila','Bolenge','Itela','Zuzi','Lola','Nsona','Mapendo','Safi','Neema'];
// style du lieu selon la province : [ressource du mini-jeu, décor, murs, accent]
const STY={
 'Kongo-Central':['fer','eau','#9ac5a4','#1f7a4d'],'Kwango':['legume','plein_air','#d9c27a','#a8601a'],'Kwilu':['legume','plein_air','#8fb06a','#2e7d4a'],
 'Mai-Ndombe':['poisson','eau','#8fb4d9','#1f6b8a'],'Kasaï':['sable','montagne','#d9c8a0','#8a5a32'],'Kasaï-Central':['legume','plein_air','#e0c898','#c0392b'],
 'Kasaï-Oriental':['sable','montagne','#d9dde8','#2e6da4'],'Lomami':['legume','plein_air','#c9dca0','#2e8b57'],'Sankuru':['bois','foret','#7fa24a','#1f6b3a'],
 'Maniema':['fer','eau','#e6b25c','#8a5a32'],'Sud-Kivu':['cafe','montagne','#9ac5a4','#2e8b57'],'Nord-Kivu':['cafe','montagne','#a9c9a4','#1f6b3a'],
 'Ituri':['fer','foret','#5a8a4a','#8a5a32'],'Haut-Uele':['fer','plein_air','#d9c27a','#e67e22'],'Bas-Uele':['tissu','plein_air','#e8dcc4','#c0392b'],
 'Tshopo':['bois','eau','#8fb4d9','#2e6da4'],'Mongala':['poisson','eau','#9fc6dd','#1f8bd9'],'Nord-Ubangi':['cafe','village','#d98a6a','#7a3b12'],
 'Sud-Ubangi':['cafe','plein_air','#c9a27a','#8a5a32'],'Équateur':['bois','foret','#5a8a4a','#2e7d4a'],'Tshuapa':['bois','foret','#6a9a4a','#1f6b3a'],
 'Haut-Lomami':['poisson','eau','#9fc6dd','#2e6da4'],'Lualaba':['cuivre','atelier','#b09a6a','#e67e22'],'Haut-Katanga':['cuivre','ville','#d5dbe3','#8a3b12'],
 'Tanganyika':['poisson','eau','#9fc6dd','#1f6b8a']
};
const ROLES=[
  ['Guide','le guide','la guide','Guide du territoire'],
  ['Statisticien','le statisticien','la statisticienne','Chiffres du territoire'],
  ['Administrateur','l’administrateur','l’administratrice','Administration du territoire']];

const ORDRE=[];T.forEach(t=>{if(!ORDRE.includes(t.prov))ORDRE.push(t.prov)});
export const LIEUX_TR=T.map((t,i)=>{
  const st=STY[t.prov]||['legume','plein_air','#d9c27a','#2e7d4a'];
  const style=st[0]==='poisson'?'peche':(i%3===1?'tap':'fall');
  const sl=slug(t.nom);
  const npc=[0,1,2].map(j=>{
    const m=BUILD[j](t,i),h=(i+j)%2===0,r=ROLES[j];
    const prenom=h?NOMS_H[(i*3+j)%NOMS_H.length]:NOMS_F[(i*3+j)%NOMS_F.length];
    return {id:'tr'+i+'abc'[j],nom:(h||j===0?r[0]:r[0]+'ne').replace('Administrateurne','Administratrice').replace('Statisticienne','Statisticienne')+' '+prenom,court:h?r[1]:r[2],role:r[3],s:h?'h':'f',
      salut:m.intro[0],intro:[...m.intro,'Voyons ce que tu sais !'],suj:'tr_'+sl+'_'+'abc'[j],lib:TITRES[j](t.nom),
      qs:m.qs.map(q=>[q.q,q.a,...q.c.filter(x=>x!==q.a),q.exp])};
  });
  return {id:'tr_'+sl,nom:'Territoire '+dn(t.nom),ico:'🗺️',arch:st[1],wall:st[2],accent:st[3],seed:700+i,mj:[st[0],style],npc:npc};
}).map((l,i)=>[l,i]).sort((a,b)=>ORDRE.indexOf(T[a[1]].prov)-ORDRE.indexOf(T[b[1]].prov)||a[1]-b[1]).map(x=>x[0]);
