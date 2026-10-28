import {Q} from './data.js';
import {TERRITOIRES} from './territoires_data.js';

// Niveau « Les territoires de la RDC » : 3 missions par territoire (situer · chiffres clés · organisation et vie),
// générées à partir du tableau de données (src/territoires_data.js). Les distractors sont choisis de façon déterministe.
const M=(intro,qs)=>({intro:intro,qs:qs});
export const C12={};

const LANGUES={lingala:'Lingala',swahili:'Kiswahili',kikongo:'Kikongo ya leta',tshiluba:'Tshiluba',kiluba:'Kiluba',kinande:'Kinande',kibemba:'Kibemba',mashi:'Mashi',ngbandi:'Ngbandi',otetela:'Otetela',kisongye:'Kisongye',bondengese:'Bondengese'};
const NATIONALES=['lingala','swahili','kikongo','tshiluba'];
// territoires où plusieurs langues nationales sont mentionnées : on ne pose pas de question sur la langue
const MULTI=new Set(['Aru','Banalia','Basoko','Dungu','Fizi','Isangi','Kasangulu','Mbanza-Ngungu','Moanda','Lubero','Irumu','Kahemba','Kenge','Mahagi','Mwenga','Walungu','Idiofa','Lodja','Bongandanga','Kalehe','Gungu','Kabinda','Kabare','Uvira']);

const T=TERRITOIRES.trim().split('\n').map(l=>{
  const p=l.split('|');
  return {nom:p[0],cl:p[1],prov:p[2],pop:+p[3],an:+p[4],dens:+p[5],km2:+p[6],lang:p[7],hem:p[8],sect:+p[9],chef:+p[10],comm:+p[11],fait:p[12]};
});
const PROVS=[];T.forEach(t=>{if(!PROVS.includes(t.prov))PROVS.push(t.prov)});
const NB={};T.forEach(t=>{NB[t.prov]=(NB[t.prov]||0)+1});

const FEM=new Set(['Tshopo','Tshuapa','Lomami','Mongala']),VOY=new Set(['Équateur','Ituri']);
const dePro=p=>FEM.has(p)?'de la '+p:VOY.has(p)?'de l’'+p:'du '+p;
const slug=p=>p.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z]/g,'');
const dn=n=>/^[AEIOUÉ]/.test(n)?'d’'+n:'de '+n;
const nbsp=' ';
const fmt=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,nbsp);
const hash=s=>{let h=7;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h};
const pick=(arr,seed,k,exclure)=>{ // k éléments distincts, déterministes
  const out=[],vus=new Set(exclure||[]);
  for(let j=0;out.length<k&&j<arr.length*3;j++){const v=arr[(seed+j*7+j*j)%arr.length];if(!vus.has(v)){vus.add(v);out.push(v)}}
  return out;
};
const unique=(rep,gen)=>{ // gen(i) fournit des candidats ; on garde 3 valeurs distinctes de rep
  const out=[],vus=new Set([rep]);
  for(let i=0;out.length<3&&i<40;i++){const v=gen(i);if(!vus.has(v)){vus.add(v);out.push(v)}}
  return out;
};

const aire=a=>a<1000?fmt(a)+nbsp+'km²':'environ '+fmt(a>=10000?Math.round(a/1000)*1000:Math.round(a/100)*100)+nbsp+'km²';
const aireRep=a=>a<1000?fmt(a)+nbsp+'km²':'environ '+fmt(a>=10000?Math.round(a/1000)*1000:Math.round(a/100)*100)+nbsp+'km²';
const peuple=p=>p>=1e6?'environ '+(p/1e6).toFixed(1).replace('.',',')+' million d’habitants':'environ '+fmt(Math.round(p/1000)*1000)+' habitants';
const dens=d=>(d<10?String(Math.round(d*10)/10).replace('.',','):fmt(d))+' habitants par km²';
const compte=(n,mot)=>n+' '+mot+(n>1?'s':'');

function q(texte,rep,distract,exp){
  const c=[rep,...distract];
  return Q(texte,c,rep,exp);
}

// ---------- mission 0 : situer ----------
function mSituer(t,i){
  const dp=dePro(t.prov),h=t.hem==='N'?'au nord':'au sud';
  const memes=T.filter(u=>u.prov===t.prov&&u!==t);
  const autres=T.filter(u=>u.prov!==t.prov);
  const seed=hash(t.nom);
  const provD=pick(PROVS,seed,3,[t.prov]);
  const clPool=[...memes.map(u=>u.cl),...autres.map(u=>u.cl)].filter(c=>c!==t.cl);
  const clD=[...pick(memes.map(u=>u.cl).filter(c=>c!==t.cl),seed,Math.min(2,memes.length),[t.cl]),];
  while(clD.length<3){const c=pick(clPool,seed+clD.length*13,1,[t.cl,...clD])[0];if(c===undefined)break;clD.push(c)}
  const terrD=pick(autres.map(u=>u.nom),seed+5,3,[t.nom]);
  const n=NB[t.prov];
  const hemD=t.hem==='N'?['au sud de l’équateur','exactement sur l’équateur','en dehors de la RDC']:['au nord de l’équateur','exactement sur l’équateur','en dehors de la RDC'];
  const nD=unique(String(n),k=>String(Math.max(1,n+[1,-1,2,-2,3,4,5][k%7]+(k>6?k:0))));
  const memeNom=t.cl===t.nom?' Le chef-lieu porte le même nom que le territoire.':'';
  return M([
    `Le territoire ${dn(t.nom)} se trouve dans la province ${dp}. Son chef-lieu est ${t.cl}.${memeNom}`,
    `Il est situé ${h} de l’équateur. La RDC est divisée en provinces, et chaque province en territoires (la province ${dp} en compte ${n}).`],[
    q(`Dans quelle province se trouve le territoire ${dn(t.nom)} ?`,t.prov,provD,`${t.nom} est un territoire de la province ${dp}.`),
    q(`Quel est le chef-lieu du territoire ${dn(t.nom)} ?`,t.cl,clD,`Le chef-lieu du territoire ${dn(t.nom)} est ${t.cl}.`),
    q(`Lequel de ces territoires fait partie de la province ${dp} ?`,t.nom,terrD,`Le territoire ${dn(t.nom)} appartient à la province ${dp}.`),
    q(`Le territoire ${dn(t.nom)} est situé…`,h+' de l’équateur',hemD,`Selon ses coordonnées, ${t.nom} est ${h} de l’équateur.`),
    q(`Combien de territoires compte la province ${dp} ?`,String(n),nD,`D’après la liste officielle utilisée ici, la province ${dp} compte ${n} territoires.`)]);
}

// ---------- mission 1 : chiffres clés ----------
function mChiffres(t,i){
  const seed=hash(t.nom)+11,dp=dePro(t.prov);
  const qs=[],s1=[],s2=[];
  if(t.km2>0)s1.push(`Le territoire ${dn(t.nom)} couvre ${aire(t.km2)}.`);
  if(t.pop>0)s1.push(`Sa population est estimée à ${peuple(t.pop)}${t.an?' ('+t.an+')':''}.`);
  if(!s1.length)s1.push(`Pour le territoire ${dn(t.nom)}, nos sources ne donnent pas de chiffres fiables de superficie ou de population.`);
  if(t.dens>0)s2.push(`Cela donne une densité d’environ ${dens(t.dens)}.`);
  s2.push('La superficie se mesure en kilomètres carrés (km²) ; la densité est le nombre d’habitants par km².');
  if(t.km2>0){
    const rep=aireRep(t.km2),mult=[0.45,1.8,3.1,0.2,2.4,4.5];
    const d=unique(rep,k=>aireRep(Math.max(50,t.km2*mult[k%6]*(1+Math.floor(k/6)*0.37))));
    qs.push(q(`Quelle est la superficie du territoire ${dn(t.nom)} ?`,rep,d,`Le territoire ${dn(t.nom)} couvre ${aire(t.km2)}.`));
  }
  if(t.pop>0){
    const rep=peuple(t.pop),mult=[0.4,1.9,3.3,0.2,2.6,5];
    const d=unique(rep,k=>peuple(Math.max(20000,t.pop*mult[k%6]*(1+Math.floor(k/6)*0.41))));
    qs.push(q(`Combien d’habitants compte le territoire ${dn(t.nom)}, d’après les chiffres disponibles ?`,rep,d,`Ses habitants sont estimés à ${peuple(t.pop)}.`));
  }
  if(t.dens>0){
    const rep=dens(t.dens),mult=[0.25,3,8,0.1,5,12];
    const d=unique(rep,k=>dens(Math.max(0.5,t.dens*mult[k%6]*(1+Math.floor(k/6)*0.43))));
    qs.push(q(`Quelle est la densité de population du territoire ${dn(t.nom)} ?`,rep,d,`La densité est d’environ ${dens(t.dens)}.`));
  }
  // comparaison avec un voisin de la même province
  const cands=T.filter(u=>u!==t&&u.prov===t.prov&&u.km2>0&&t.km2>0&&(u.km2/t.km2>=1.3||t.km2/u.km2>=1.3));
  if(cands.length){
    const u=cands[seed%cands.length],gr=t.km2>u.km2?t:u;
    qs.push(q(`Dans la province ${dp}, lequel de ces deux territoires est le plus vaste : ${t.nom} ou ${u.nom} ?`,gr.nom,[gr===t?u.nom:t.nom,'Ils ont exactement la même superficie','On ne peut pas le savoir'],`${gr.nom} couvre ${aire(gr.km2)} contre ${aire(gr===t?u.km2:t.km2)}.`));
  }
  const cp=T.filter(u=>u!==t&&u.prov===t.prov&&u.pop>0&&t.pop>0&&(u.pop/t.pop>=1.6||t.pop/u.pop>=1.6));
  if(cp.length){
    const u=cp[Math.floor(seed/8)%cp.length],gr=t.pop>u.pop?t:u;
    qs.push(q(`Dans la province ${dp}, lequel de ces deux territoires est le plus peuplé : ${t.nom} ou ${u.nom} ?`,gr.nom,[gr===t?u.nom:t.nom,'Ils ont exactement le même nombre d’habitants','On ne peut pas le savoir'],`${gr.nom} compte ${peuple(gr.pop)} contre ${peuple(gr===t?u.pop:t.pop)}.`));
  }
  const F=[
    q('Quelle unité utilise-t-on pour mesurer la superficie d’un territoire ?','le kilomètre carré (km²)',['le kilogramme','le litre','le degré Celsius'],'La superficie se mesure en km².'),
    q('Que mesure la densité de population ?','le nombre d’habitants par kilomètre carré',['la hauteur des montagnes','la longueur des fleuves','la température moyenne'],'Densité = habitants ÷ superficie.'),
    q('Qu’appelle-t-on un recensement ?','le comptage officiel des habitants',['la mesure d’un fleuve','la construction d’une route','la vente de produits'],'Un recensement compte les habitants.'),
    q('Pourquoi les chiffres de population changent-ils d’une source à l’autre ?','la population évolue et les sources n’ont pas la même date',['les habitants sont toujours les mêmes','le territoire change de pays','les chiffres sont tirés au sort'],'Il faut toujours regarder l’année du chiffre.')];
  let k=0;while(qs.length<4)qs.push(F[(seed+k++)%F.length]);
  // pas de doublons de question
  const vus=new Set(),res=qs.filter(x=>!vus.has(x.q)&&vus.add(x.q)).slice(0,5);
  return M([s1.join(' '),s2.join(' ')],res);
}

// ---------- mission 2 : organisation et vie ----------
const motsFaits=f=>(f.match(/[A-ZÉÈ][\p{L}-]{4,}/gu)||[]).slice(1);
function mVie(t,i){
  const seed=hash(t.nom)+23,dp=dePro(t.prov);
  const parts=[];
  if(t.comm>0)parts.push(compte(t.comm,'commune')+(t.comm>1?' rurales':' rurale'));
  if(t.sect>0)parts.push(compte(t.sect,'secteur'));
  if(t.chef>0)parts.push(compte(t.chef,'chefferie'));
  const langOk=t.lang&&!MULTI.has(t.nom);
  const s1=parts.length?`Selon les informations disponibles, le territoire ${dn(t.nom)} comprend ${parts.join(', ').replace(/, ([^,]*)$/,' et $1')}.`
    :`Un territoire est divisé en collectivités : des secteurs et des chefferies, parfois aussi des communes.`;
  const s2=(langOk?`La langue nationale indiquée est le ${LANGUES[t.lang].toLowerCase()}. `:'')+t.fait+'.';
  const qs=[];
  const nombre=(n,mot,pl)=>{
    const d=unique(String(n),k=>String(Math.max(1,n+[1,-1,2,-2,3,4,5][k%7]+(k>6?k:0))));
    qs.push(q(`Combien de ${pl} compte le territoire ${dn(t.nom)}, d’après les informations disponibles ?`,String(n),d,`Le territoire ${dn(t.nom)} compte ${compte(n,mot)}.`));
  };
  if(t.sect>0)nombre(t.sect,'secteur','secteurs');
  if(t.chef>0)nombre(t.chef,'chefferie','chefferies');
  if(t.comm>1)nombre(t.comm,'commune','communes');
  if(langOk){
    const rep=LANGUES[t.lang],pool=NATIONALES.map(x=>LANGUES[x]).filter(x=>x!==rep);
    const d=NATIONALES.includes(t.lang)?pool:pick(Object.values(LANGUES).filter(x=>x!==rep),seed,3,[rep]);
    qs.push(q(`Quelle langue est indiquée pour le territoire ${dn(t.nom)} ?`,rep,d,`Pour ce territoire, la langue indiquée est le ${rep.toLowerCase()}.`));
  }
  // fait exact parmi des faits d’autres provinces (sans mots propres en commun)
  const mots=new Set(motsFaits(t.fait));
  const faux=T.filter(u=>u.prov!==t.prov&&u.fait!==t.fait&&!motsFaits(u.fait).some(m=>mots.has(m))&&!u.fait.includes(t.nom)).map(u=>u.fait+'.');
  if(faux.length>=3){
    qs.push(q(`Laquelle de ces phrases est exacte à propos du territoire ${dn(t.nom)} ?`,t.fait+'.',pick(faux,seed,3),`À propos ${dn(t.nom)} : ${t.fait.charAt(0).toLowerCase()+t.fait.slice(1)}.`));
  }
  const F=[
    q('Comment appelle-t-on les grandes divisions d’un territoire ?','des secteurs et des chefferies',['des quartiers et des avenues','des provinces et des villes','des écoles et des hôpitaux'],'Un territoire est divisé en secteurs, chefferies (et parfois communes).'),
    q('Qui dirige un territoire ?','un administrateur de territoire',['un capitaine de bateau','un directeur d’école','un chef de gare'],'Chaque territoire est dirigé par un administrateur.'),
    q('Laquelle de ces langues est une langue nationale de la RDC ?',LANGUES[NATIONALES[seed%4]],['L’anglais','Le portugais','L’espagnol'],'Les quatre langues nationales sont le lingala, le swahili, le kikongo et le tshiluba.'),
    q(`Le territoire ${dn(t.nom)} appartient à quelle division plus grande ?`,'la province '+dp,['la commune de Gombe','le village voisin','le quartier central'],`${t.nom} est dans la province ${dp}.`)];
  let k=0;while(qs.length<4)qs.push(F[(seed+k++)%F.length]);
  const vus=new Set(),res=qs.filter(x=>!vus.has(x.q)&&vus.add(x.q)).slice(0,5);
  return M([s1,s2],res);
}

// ---------- niveau ----------
const BUILD=[mSituer,mChiffres,mVie];
const TITRES=[t=>t+' : situer le territoire',t=>t+' : chiffres clés',t=>t+' : organisation et vie'];
export const NIVEAU_TR={id:'tr',nom:'Les territoires de la RDC',matieres:PROVS.map(p=>{
  const ts=T.filter(t=>t.prov===p),id=slug(p),missions=[];
  ts.forEach((t,k)=>BUILD.forEach((b,j)=>{missions.push(TITRES[j](t.nom));C12['tr|'+id+'|'+(k*3+j)]=b(t,k)}));
  return {id:id,nom:p+' ('+ts.length+' territoires)',missions:missions};
})};
export const NB_TERRITOIRES=T.length;
