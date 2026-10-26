'use strict';
// Kelas Game — moteur : monde défilant, quêtes, boutique, mini-jeu, sauvegarde.

const KEY='kelas_game_v11';
const SCL=0.8, SPEED=2.4, GATE_X=540;
const $=id=>document.getElementById(id);
const clamp=(a,b,v)=>Math.max(a,Math.min(b,v));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);

// ---------- Banques de questions ----------
const Q=(q,c,a,exp)=>({q,c,a,exp});
const BANK={
 maths:[
  Q('Une cagette contient 8 mangues. Combien de mangues dans 5 cagettes ?',['30','35','40','45'],'40','5 × 8 = 40.'),
  Q('Quel est le double de 17 ?',['27','34','37','32'],'34','17 × 2 = 34.'),
  Q('Un sac de 25 mangues est partagé entre 5 enfants. Combien chacun reçoit-il ?',['4','5','6','7'],'5','25 ÷ 5 = 5.'),
  Q('Combien font 7 × 6 ?',['36','42','48','40'],'42','7 × 6 = 42.'),
  Q('Combien font 100 − 37 ?',['73','67','63','53'],'63','100 − 37 = 63.'),
  Q('Quelle est la moitié de 90 ?',['40','45','50','55'],'45','90 ÷ 2 = 45.'),
  Q('Combien font 12 + 29 ?',['39','41','43','51'],'41','12 + 29 = 41.'),
  Q('Combien font 9 × 9 ?',['72','81','90','99'],'81','9 × 9 = 81.'),
  Q('Combien font 144 ÷ 12 ?',['10','11','12','14'],'12','12 × 12 = 144.'),
  Q('Quel est le périmètre d’un carré de 6 m de côté ?',['12 m','24 m','36 m','30 m'],'24 m','4 × 6 = 24 m.'),
  Q('Trois cahiers à 500 FC chacun coûtent combien en tout ?',['1 000 FC','1 200 FC','1 500 FC','2 000 FC'],'1 500 FC','3 × 500 = 1 500.')
 ],
 francais:[
  Q('Hier, nous ___ au marché. (verbe aller)',['allons','sommes allés','irons','allerons'],'sommes allés','Au passé composé : nous sommes allés.'),
  Q('Quel est l’antonyme de « ancien » ?',['vieux','nouveau','vieil','long'],'nouveau','Le contraire d’« ancien » est « nouveau ».'),
  Q('Quel mot est un nom propre ?',['chien','Kinshasa','livre','maison'],'Kinshasa','Un nom propre désigne un lieu précis.'),
  Q('Quel est le pluriel de « cheval » ?',['chevals','chevaux','chevaus','chevales'],'chevaux','Les noms en -al font leur pluriel en -aux.'),
  Q('Quel est un synonyme de « content » ?',['triste','heureux','fâché','pressé'],'heureux','« Content » et « heureux » ont le même sens.'),
  Q('Les enfants ___ dans la cour. (jouer, présent)',['jouent','joue','jouons','jouez'],'jouent','Avec « ils / elles », le verbe se termine par -ent.'),
  Q('Quel mot est un verbe ?',['table','courir','joli','rapidement'],'courir','« Courir » exprime une action : c’est un verbe.'),
  Q('Quel est le féminin de « acteur » ?',['acteuse','actrice','acteure','actresse'],'actrice','Acteur → actrice.'),
  Q('Ils ___ faim. (verbe avoir)',['ont','sont','avons','a'],'ont','Ils ont : verbe avoir à la 3e personne du pluriel.')
 ],
 geo:[
  Q('Quelle est la capitale de la RDC ?',['Lubumbashi','Goma','Kinshasa','Kisangani'],'Kinshasa','Kinshasa est la capitale de la RDC.'),
  Q('Combien de provinces compte la RDC aujourd’hui ?',['11','15','26','30'],'26','Depuis 2015, la RDC compte 26 provinces.'),
  Q('Quel grand fleuve traverse Kinshasa ?',['le Nil','le Niger','le Congo','le Zambèze'],'le Congo','Le fleuve Congo borde Kinshasa.'),
  Q('Quel océan touche la côte de la RDC ?',['Indien','Atlantique','Pacifique','Arctique'],'Atlantique','La petite côte de la RDC donne sur l’océan Atlantique.'),
  Q('Quelle est la grande ville du Haut-Katanga ?',['Goma','Lubumbashi','Matadi','Bukavu'],'Lubumbashi','Lubumbashi est le chef-lieu du Haut-Katanga.'),
  Q('Quel lac borde la RDC à l’est ?',['Tchad','Tanganyika','Titicaca','Léman'],'Tanganyika','Le lac Tanganyika longe l’est de la RDC.'),
  Q('Quel est le principal port maritime de la RDC ?',['Matadi','Kindu','Kikwit','Bunia'],'Matadi','Matadi est le grand port sur le fleuve Congo.'),
  Q('Quelle est la capitale du Congo-Brazzaville, pays voisin ?',['Brazzaville','Luanda','Kampala','Kigali'],'Brazzaville','Brazzaville est face à Kinshasa, de l’autre côté du fleuve.')
 ],
 histoire:[
  Q('En quelle année le Congo belge est-il devenu indépendant ?',['1948','1960','1965','1975'],'1960','L’indépendance date de 1960.'),
  Q('Quel jour célèbre-t-on l’indépendance ?',['1er mai','30 juin','17 mai','4 décembre'],'30 juin','La fête de l’indépendance a lieu le 30 juin.'),
  Q('Qui fut le premier Premier ministre du Congo indépendant ?',['Patrice Lumumba','Mobutu','Laurent-Désiré Kabila','Félix Tshisekedi'],'Patrice Lumumba','Patrice Lumumba dirigea le premier gouvernement.'),
  Q('Qui fut le premier président du Congo indépendant ?',['Joseph Kasa-Vubu','Mobutu','Patrice Lumumba','Moïse Tshombe'],'Joseph Kasa-Vubu','Joseph Kasa-Vubu fut le premier chef de l’État.'),
  Q('Quel symbole figure en haut à gauche du drapeau de la RDC ?',['un soleil','une étoile jaune','une croix','un lion'],'une étoile jaune','Une étoile jaune brille sur fond bleu ciel.'),
  Q('Quelle est la devise de la RDC ?',['Justice – Paix – Travail','Unité – Force – Progrès','Liberté – Égalité – Fraternité','Travail – Famille – Patrie'],'Justice – Paix – Travail','La devise nationale est « Justice – Paix – Travail ».'),
  Q('Quelle est la monnaie de la RDC ?',['le franc congolais','le dollar','le cedi','le naira'],'le franc congolais','La monnaie nationale est le franc congolais (FC).')
 ]
};
const SUJETS={maths:'Calcul',francais:'Français',geo:'Géographie',histoire:'Histoire'};

// ---------- Personnages ----------
const NPC={
 lola:{sc:'ville',x:480,name:'Mama Lola',short:'Mama Lola',role:'Gardienne du portail',kind:'quiz',sujet:'maths',nb:3,
  p:{s:'f',a:'aine',w:1,c:'#e67e22',k:'pagne',co:'gris',g:'talk'},
  intro:['Bonjour, mon enfant ! Le portail ne s’ouvre que pour ceux qui savent compter.','Réponds à mes trois questions et je te laisse entrer.'],
  outro:'Bravo ! Le portail est ouvert. Entre dans l’école et va voir la maîtresse.'},
 ilunga:{sc:'classe',x:118,name:'Professeure Ilunga',short:'la maîtresse',role:'Maîtresse',kind:'quiz',sujet:'francais',nb:3,needs:'lola',
  p:{s:'f',a:'adulte',w:.95,c:'#8e44ad',k:'boubou',co:'tresses',g:'talk'},
  intro:['Bienvenue à LEXARIS ACADÉMIE !','Aujourd’hui, la leçon porte sur la langue. Trois questions pour commencer.'],
  outro:'Très bien ! Va t’asseoir près de Junior, il t’attend pour la géographie.'},
 junior:{sc:'classe',x:200,name:'Junior',short:'Junior',role:'Élève',kind:'quiz',sujet:'geo',nb:2,needs:'ilunga',sit:true,
  p:{s:'h',a:'enfant',w:.9,c:'#16a085',k:'uniforme',co:'courtes',g:'talk'},
  intro:['Salut ! La géographie, c’est mon sujet préféré.'],
  outro:'Bien joué ! Va voir le directeur, il veut te poser les dernières questions.'},
 mavungu:{sc:'classe',x:266,name:'Directeur Mavungu',short:'le directeur',role:'Directeur',kind:'quiz',sujet:'histoire',nb:2,needs:'junior',
  p:{s:'h',a:'adulte',w:1,c:'#2c3e50',k:'uniforme',co:'courtes',g:'talk'},
  intro:['Tu as bien travaillé.','Deux dernières questions pour finir la leçon.'],
  outro:'Leçon terminée ! Tu gagnes 20 pièces et du tissu wax pour ta maison.'},
 bea:{sc:'ville',x:280,name:'Maman Béa',short:'Maman Béa',role:'Marchande',kind:'shop',
  p:{s:'f',a:'adulte',w:1,c:'#c0392b',k:'pagne',co:'nattes',g:'talk'}},
 mama:{sc:'maison',x:150,name:'Maman',short:'Maman',role:'À la maison',kind:'talk',
  p:{s:'f',a:'adulte',w:1,c:'#d35400',k:'pagne',co:'tresses',g:'talk'}}
};
const AUTOP={
 jer:{sc:'ville',x:360,name:'Jérémie',p:{s:'h',a:'ado',w:.95,c:'#27ae60',k:'uniforme',co:'courtes',g:'talk'}},
 kasa:{sc:'ville',x:395,name:'Petit Kasa',p:{s:'f',a:'enfant',w:.9,c:'#e0a526',k:'pagne',co:'nattes',g:'idle'}}
};
const AUTO=[['Jérémie','La leçon commence bientôt, tu viens ?'],['Petit Kasa','Mama Lola garde le portail, elle pose des questions !'],['Jérémie','Réponds bien et tu entreras dans la classe.'],['Petit Kasa','Moi, je connais déjà toutes les mangues !'],['Jérémie','Le manguier du village donne les meilleures mangues.']];
const ITEMS={
 natte:{n:'Natte tressée',p:10},table:{n:'Table en bois',p:25},lampe:{n:'Lampe',p:20},
 rideau:{n:'Rideau en wax',p:10,t:1},tableau:{n:'Tableau du village',p:30},plante:{n:'Plante verte',p:15}
};

// ---------- État et sauvegarde ----------
const newAdv=()=>({done:{},stars:{},good:0,total:0,pieces:0,tissu:0,mangues:0,xp:0,items:{},fin:false});
let G={nom:'',sexe:'f',skin:0,sound:true,sc:'ville',x:100,dir:1,mv:false,mode:'start',dialog:null,
  keys:{l:false,r:false},near:null,cam:0,mini:null,greeted:{},adv:newAdv()};
let autoIdx=0;
function readSave(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){return null}}
function save(){try{localStorage.setItem(KEY,JSON.stringify({nom:G.nom,sexe:G.sexe,skin:G.skin,sound:G.sound,adv:G.adv}))}catch(e){}}
const parler=n=>'Parler '+(/^le /.test(n.short)?n.short.replace(/^le /,'au '):'à '+n.short);
const doneNpc=id=>!!G.adv.done[id];
const locked=id=>{const n=NPC[id];return !!(n.needs&&!doneNpc(n.needs))};
const doorOpen=()=>doneNpc('lola');
const lvl=()=>1+Math.floor(G.adv.xp/50);
const starsTotal=()=>Object.values(G.adv.stars).reduce((a,b)=>a+b,0);
const nbItems=()=>Object.keys(ITEMS).filter(k=>G.adv.items[k]).length;
const storyDone=()=>['lola','ilunga','junior','mavungu'].every(doneNpc);

// ---------- Sons ----------
let AC=null;
function beep(f,d,t,v,delay){
  if(!G.sound)return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    const o=AC.createOscillator(),g=AC.createGain(),t0=AC.currentTime+(delay||0);
    o.type=t||'sine';o.frequency.value=f;g.gain.setValueAtTime(v||.08,t0);g.gain.exponentialRampToValueAtTime(.001,t0+d);
    o.connect(g);g.connect(AC.destination);o.start(t0);o.stop(t0+d);
  }catch(e){}
}
const SFX={
 ok:()=>{beep(660,.1);beep(880,.15,'sine',.08,.1)},
 ko:()=>beep(180,.25,'square',.04),
 coin:()=>beep(1200,.08,'triangle'),
 win:()=>{[523,659,784,1047].forEach((f,i)=>beep(f,.18,'sine',.08,i*.12))}
};

// ---------- Décors ----------
function tree(x,base,r){return `<rect x="${x-3}" y="${base-22}" width="6" height="24" fill="#6b4226"/><circle cx="${x}" cy="${base-30}" r="${r}" fill="#2e8b57"/>`}
function bench(x1,x2){return `<rect x="${x1}" y="88" width="${x2-x1}" height="7" rx="2" fill="#7a4a26"/><rect x="${x1}" y="104" width="${x2-x1}" height="6" rx="2" fill="#a0683a"/><rect x="${x1+3}" y="110" width="4" height="40" fill="#6b4226"/><rect x="${x2-7}" y="110" width="4" height="40" fill="#6b4226"/>`}
function facade(){
  return `<rect x="148" y="92" width="156" height="58" fill="#f6efdc"/><rect x="148" y="92" width="156" height="58" fill="url(#gShade)" opacity=".4"/>`
   +`<path d="M140 94 L226 56 L312 94 Z" fill="url(#gRed)"/>`
   +`<rect x="170" y="96" width="112" height="13" rx="2" fill="#1f7a4d" stroke="#f1c40f" stroke-width="1.5"/>`
   +`<text x="226" y="106" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff" font-family="Arial,sans-serif">LEXARIS ACADÉMIE</text>`
   +`<rect x="162" y="112" width="24" height="16" fill="#9fd8ff" stroke="#fff" stroke-width="2"/><rect x="280" y="112" width="20" height="16" fill="#9fd8ff" stroke="#fff" stroke-width="2"/>`
   +`<line x1="308" y1="150" x2="308" y2="34" stroke="#777" stroke-width="2"/><rect x="309" y="36" width="10" height="16" fill="#2a7fd6"/>`;
}
function doorSvg(open){
  return `<rect x="252" y="118" width="26" height="32" fill="${open?'#2b1d12':'#5a3a22'}"/>`
    +(open?`<rect x="240" y="118" width="12" height="32" fill="#7a4a26" stroke="#4a2f1b"/>`:`<circle cx="274" cy="136" r="1.6" fill="#f1c40f"/>`);
}
function gate(open){
  return `<rect x="128" y="120" width="4" height="30" fill="#6b4226"/><rect x="144" y="120" width="4" height="30" fill="#6b4226"/>`
    +(open?'':`<line x1="132" y1="128" x2="144" y2="128" stroke="#6b4226" stroke-width="2"/><line x1="132" y1="142" x2="144" y2="142" stroke="#6b4226" stroke-width="2"/>`);
}
function billboard(){return `<line x1="30" y1="46" x2="30" y2="150" stroke="#6b6b6b" stroke-width="3"/><line x1="86" y1="46" x2="86" y2="150" stroke="#6b6b6b" stroke-width="3"/><rect x="12" y="20" width="92" height="26" rx="3" fill="#1f7a4d" stroke="#f1c40f" stroke-width="2.5"/><text x="58" y="36" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff" font-family="Arial,sans-serif">LEXARIS ACADÉMIE</text><text x="58" y="43" text-anchor="middle" font-size="5.5" fill="#f1c40f" font-family="Arial,sans-serif">Formation en IA · juristes et jeunes</text>`}
function maisonExt(){
  return `<rect x="20" y="104" width="100" height="46" fill="url(#pEarth)"/><path d="M10 106 L70 68 L130 106 Z" fill="url(#pChaume)"/>`
    +`<rect x="58" y="120" width="24" height="30" fill="#5a3a22"/><circle cx="78" cy="136" r="1.6" fill="#f1c40f"/>`
    +`<rect x="28" y="116" width="18" height="14" fill="#9fd8ff" stroke="#fff" stroke-width="2"/><rect x="94" y="116" width="18" height="14" fill="#9fd8ff" stroke="#fff" stroke-width="2"/>`;
}
function manguier(x){
  return `<rect x="${x-5}" y="104" width="10" height="46" fill="#6b4226"/><circle cx="${x}" cy="82" r="30" fill="#2e8b57"/><circle cx="${x-20}" cy="94" r="18" fill="#3a9a63"/><circle cx="${x+20}" cy="94" r="18" fill="#3a9a63"/>`
    +[[-14,76],[10,70],[18,90],[-22,92]].map(d=>`<use href="#mango" transform="translate(${x+d[0]},${d[1]}) scale(.55)"/>`).join('');
}
function etal(){
  return `<rect x="238" y="118" width="4" height="32" fill="#6b4226"/><rect x="318" y="118" width="4" height="32" fill="#6b4226"/>`
    +`<path d="M232 118 L242 98 H318 L328 118 Z" fill="url(#pStripe)"/>`
    +`<text x="280" y="94" text-anchor="middle" font-size="8" font-weight="bold" fill="#c0392b" font-family="Arial,sans-serif">MARCHÉ</text>`
    +`<rect x="244" y="132" width="72" height="18" fill="url(#gWood)"/>`
    +[250,262,274,286,298,308].map((x,i)=>`<circle cx="${x}" cy="131" r="4" fill="${i%2?'#e68a00':'#c0392b'}"/>`).join('');
}
function sceneVille(){
  const W=800;
  return `<rect width="${W}" height="190" fill="url(#gSkyE)"/><circle cx="720" cy="30" r="22" fill="url(#gSun)"/>`
    +[50,200,340,520,660].map((x,i)=>cloud(x,26+(i%2)*10)).join('')
    +`<rect y="150" width="${W}" height="40" fill="url(#gGrass)"/><rect y="150" width="${W}" height="8" fill="url(#gDirt)"/>`
    +maisonExt()+manguier(180)+etal()
    +`<g transform="translate(335,0)">${billboard()}</g>`
    +tree(470,150,14)+bench(425,455)
    +`<g transform="translate(425,0)">${facade()}${doorSvg(doorOpen())}</g>`
    +`<g transform="translate(405,0)">${gate(doorOpen())}</g>`;
}
function sceneClasse(){
  return `<rect width="320" height="190" fill="#f3ead6"/><rect y="150" width="320" height="40" fill="url(#gDirt)"/>`
    +`<rect x="56" y="22" width="208" height="72" rx="4" fill="#2e3b33" stroke="#8d5a3b" stroke-width="6"/>`
    +`<text x="160" y="54" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff" font-family="Arial,sans-serif">LEXARIS ACADÉMIE</text>`
    +`<text x="160" y="74" text-anchor="middle" font-size="9" fill="#f1c40f" font-family="Arial,sans-serif">Kelas Game · Apprendre en jouant</text>`
    +`<rect x="284" y="36" width="26" height="40" fill="#9fd8ff" stroke="#fff" stroke-width="3"/>`
    +`<rect x="6" y="96" width="30" height="54" fill="#7a4a26"/><rect x="28" y="120" width="3" height="3" fill="#f1c40f"/>`
    +desk(200)+desk(120)+desk(268);
}
function sceneMaison(){
  const it=G.adv.items;
  let s=`<rect width="320" height="190" fill="#f6e7cf"/><rect y="150" width="320" height="40" fill="url(#gDirt)"/><rect y="146" width="320" height="4" fill="#8d5a3b"/>`
   +`<rect x="6" y="96" width="30" height="54" fill="#7a4a26"/><rect x="28" y="120" width="3" height="3" fill="#f1c40f"/>`
   +`<rect x="250" y="40" width="40" height="44" fill="#9fd8ff" stroke="#fff" stroke-width="4"/>`
   +`<rect x="52" y="124" width="52" height="22" rx="3" fill="#a0683a"/><rect x="52" y="116" width="52" height="10" rx="4" fill="#fff"/><rect x="52" y="116" width="14" height="10" rx="4" fill="#e8dccb"/>`;
  if(it.rideau)s+=`<rect x="243" y="36" width="14" height="56" fill="url(#pWax)"/><rect x="283" y="36" width="14" height="56" fill="url(#pWax)"/>`;
  if(it.tableau)s+=`<rect x="130" y="40" width="48" height="34" fill="#fff" stroke="#8d5a3b" stroke-width="3"/><circle cx="144" cy="52" r="5" fill="#f1c40f"/><path d="M133 71 Q150 55 162 66 Q170 60 175 71Z" fill="#4f9c3c"/>`;
  if(it.natte)s+=`<ellipse cx="170" cy="153" rx="36" ry="6" fill="url(#pChaume)" stroke="#a88140"/>`;
  if(it.table)s+=`<rect x="195" y="126" width="46" height="5" fill="#a0683a"/><rect x="199" y="131" width="4" height="19" fill="#6b4226"/><rect x="233" y="131" width="4" height="19" fill="#6b4226"/>`;
  if(it.lampe)s+=`<rect x="214" y="112" width="6" height="14" fill="#6b4226"/><circle cx="217" cy="106" r="10" fill="#ffe07a" opacity=".9"/>`;
  if(it.plante)s+=`<rect x="296" y="134" width="14" height="16" fill="#a8301e"/><circle cx="303" cy="126" r="9" fill="#2e8b57"/><circle cx="297" cy="120" r="6" fill="#3a9a63"/><circle cx="309" cy="120" r="6" fill="#3a9a63"/>`;
  return s;
}
const SC={
 ville:{W:800,draw:sceneVille,doors:[
  {x:70,to:'maison',tx:60,dir:1,label:'Entrer dans la maison'},
  {x:690,to:'classe',tx:60,dir:1,label:'Entrer dans l’école',ok:()=>doorOpen(),closed:'Porte fermée'}]},
 maison:{W:320,draw:sceneMaison,doors:[{x:20,to:'ville',tx:104,dir:1,label:'Sortir'}]},
 classe:{W:320,draw:sceneClasse,doors:[{x:20,to:'ville',tx:660,dir:-1,label:'Sortir de l’école'}]}
};
const TREE_X=180;

// ---------- Scène ----------
function playerFig(mv){return figure({s:G.sexe,a:'enfant',w:1,skin:PEAUX[G.skin]||PEAUX[0],c:'#1f7a4d',k:'uniforme',co:G.sexe==='f'?'tresses':'courtes',g:mv?'walk':'idle'})}
function npcFig(n,g){return drawFig(Object.assign({sc:AGE_S[n.p.a],sit:!!n.sit},n.p,g?{g:g}:{}),n.x)}
function buildScene(){
  const sc=SC[G.sc];
  const ids=Object.keys(NPC).filter(k=>NPC[k].sc===G.sc);
  const au=Object.keys(AUTOP).filter(k=>AUTOP[k].sc===G.sc);
  const npcs=ids.map(id=>`<g id="n-${id}">${npcFig(NPC[id])}</g>`).join('')
    +au.map(id=>`<g id="n-${id}">${drawFig(Object.assign({sc:AGE_S[AUTOP[id].p.a]},AUTOP[id].p),AUTOP[id].x)}</g>`).join('');
  $('stage').innerHTML=`<svg id="wsvg" viewBox="0 0 320 190" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%">${sc.draw()}${npcs}<g id="pl"></g><g id="mg"></g></svg>`;
  renderPlayer();applyCam();
}
function renderPlayer(){const pl=$('pl');if(pl)pl.innerHTML=playerFig(G.mv)}
function applyCam(){
  const W=SC[G.sc].W;
  G.cam=clamp(0,W-320,G.x-160);
  const svg=$('wsvg');if(svg)svg.setAttribute('viewBox',G.cam.toFixed(1)+' 0 320 190');
  const pl=$('pl');if(pl)pl.setAttribute('transform',`translate(${G.x},150) scale(${G.dir*SCL},${SCL})`);
}
function greet(id){
  const n=NPC[id];const el=$('n-'+id);if(!el)return;
  el.innerHTML=npcFig(n,'wave');
  setTimeout(()=>{const e=$('n-'+id);if(e)e.innerHTML=npcFig(n)},2500);
}
function bubble(text,x){
  const b=$('bubble');b.innerHTML=text;b.style.left=clamp(20,80,(x-G.cam)/320*100)+'%';b.style.display='block';
}
function hideBubble(){$('bubble').style.display='none'}
let toastT=null;
function toast(t){const e=$('toast');e.textContent=t;e.style.display='block';clearTimeout(toastT);toastT=setTimeout(()=>{e.style.display='none'},2200)}

// ---------- HUD et objectifs ----------
function objective(){
  const a=G.adv.done;
  if(!a.lola)return 'Objectif : parle à Mama Lola, la gardienne du portail.';
  if(!a.ilunga)return 'Objectif : entre dans l’école et va voir la Professeure Ilunga.';
  if(!a.junior)return 'Objectif : rejoins Junior, au fond de la classe.';
  if(!a.mavungu)return 'Objectif : le Directeur Mavungu t’attend dans la classe.';
  const n=nbItems();
  if(n<Object.keys(ITEMS).length)return 'Objectif : cueille des mangues, révise et meuble ta maison ('+n+'/'+Object.keys(ITEMS).length+').';
  return 'Tu as tout accompli ! Continue à réviser pour gagner des étoiles.';
}
function refreshHud(){
  $('stats').textContent='🪙 '+G.adv.pieces+' · ⭐ '+starsTotal()+' · Niv '+lvl();
  if(G.mode!=='mini')$('info').textContent=objective();
}
function gain(p,xp){
  const l0=lvl();
  G.adv.pieces+=p;G.adv.xp+=xp;
  if(lvl()>l0){toast('Niveau '+lvl()+' atteint !');SFX.win()}
  refreshHud();save();
}

// ---------- Interactions ----------
function nearbyTargets(){
  const out=[];
  Object.keys(NPC).forEach(id=>{if(NPC[id].sc===G.sc&&Math.abs(G.x-NPC[id].x)<36)out.push({t:'npc',id:id})});
  SC[G.sc].doors.forEach((d,i)=>{if(Math.abs(G.x-d.x)<26)out.push({t:'door',i:i})});
  if(G.sc==='ville'&&Math.abs(G.x-TREE_X)<30)out.push({t:'tree'});
  return out;
}
function checkProximity(){
  const tg=nearbyTargets();
  const npcT=tg.find(t=>t.t==='npc');
  if(npcT&&G.near!==npcT.id){
    G.near=npcT.id;
    if(!G.greeted[npcT.id]){G.greeted[npcT.id]=true;greet(npcT.id);bubble('Bonjour '+esc(G.nom)+' !',NPC[npcT.id].x)}
  }
  if(!npcT&&G.near){G.near=null;hideBubble()}
  return tg;
}
function actionLabel(tg){
  const t=tg.find(x=>x.t==='npc')||tg[0];
  if(!t)return {label:'…',enabled:false,run:null};
  if(t.t==='npc'){
    const n=NPC[t.id];
    if(n.kind==='shop')return {label:'Aller au marché',enabled:true,run:openShop};
    if(n.kind==='talk')return {label:parler(n),enabled:true,run:()=>openTalk(t.id)};
    if(locked(t.id))return {label:'Reviens plus tard',enabled:false,run:null};
    if(doneNpc(t.id))return {label:'Réviser avec '+n.short,enabled:true,run:()=>startQuiz(t.id,true)};
    return {label:parler(n),enabled:true,run:()=>startQuiz(t.id,false)};
  }
  if(t.t==='tree')return {label:'Cueillir des mangues',enabled:true,run:startMini};
  const d=SC[G.sc].doors[t.i];
  if(d.ok&&!d.ok())return {label:d.closed,enabled:false,run:null};
  return {label:d.label,enabled:true,run:()=>goTo(d)};
}
function goTo(d){
  G.sc=d.to;G.x=d.tx;G.dir=d.dir;G.mv=false;G.near=null;hideBubble();buildScene();
}

// ---------- Dialogues ----------
function openBox(d){
  G.dialog=d;G.mode='dialog';G.keys.l=G.keys.r=false;
  if(G.mv){G.mv=false;renderPlayer()}
  hideBubble();renderDialog();
}
function closeDialog(){
  $('dlg').style.display='none';G.dialog=null;G.mode='play';
  if(G.sc==='ville'||G.sc==='maison')buildScene();
  refreshHud();
}
function startQuiz(id,rev){
  const n=NPC[id],bank=BANK[n.sujet];
  const qs=rev?shuffle(bank).slice(0,3):bank.slice(0,n.nb);
  openBox({kind:'quiz',id:id,rev:rev,stage:rev?'q':'lines',i:0,qi:0,qs:qs,opts:null,bad:[],qerr:false,errs:0,firsts:0,gain:0,res:null});
}
function renderDialog(){
  const d=G.dialog,box=$('dlg');
  box.style.display='block';box.scrollTop=0;
  let h='';
  if(d.kind==='quiz')h=htmlQuiz(d);
  else if(d.kind==='info')h=htmlInfo(d);
  else if(d.kind==='shop')h=htmlShop(d);
  else if(d.kind==='menu')h=htmlMenu(d);
  box.innerHTML=h;
}
function htmlQuiz(d){
  const n=NPC[d.id];
  let h=`<h3>${esc(n.name)} · ${esc(n.role)}</h3>`;
  if(d.stage==='lines'){
    h+=`<p>${esc(n.intro[d.i])}</p><button class="p" onclick="nextLine()">Suite</button>`;
  }else if(d.stage==='q'){
    const q=d.qs[d.qi];
    if(!d.opts)d.opts=shuffle(q.c);
    h+=`<p><b>${esc(d.rev?'Révision · ':'')}Question ${d.qi+1} sur ${d.qs.length}</b> : ${esc(q.q)}</p>`;
    if(d.bad.length)h+=`<p class="ko">Pas tout à fait. Réfléchis encore !</p>`;
    h+=d.opts.map((c,i)=>`<button ${d.bad.indexOf(c)>=0?'disabled':''} onclick="answerQ(${i})">${esc(c)}</button>`).join('');
    h+=`<button class="s" onclick="closeDialog()">Quitter</button>`;
  }else if(d.stage==='fb'){
    const q=d.qs[d.qi];
    h+=`<p class="ok"><b>${d.fbFirst?'Bravo !':'C’est ça.'}</b> ${esc(q.exp)}</p><button class="p" onclick="nextQ()">Suite</button>`;
  }else{
    const r=d.res;
    if(d.rev)h+=`<p>Révision terminée : ${d.firsts} sur ${d.qs.length} du premier coup. <b>+${d.gain} 🪙</b></p>`;
    else h+=`<p>${esc(NPC[d.id].outro)}</p><p><b>${'★'.repeat(r.stars)+'☆'.repeat(3-r.stars)}</b> · +${d.gain} 🪙${r.tissu?' · +'+r.tissu+' tissu wax':''}</p>`;
    h+=`<button class="p" onclick="closeDialog()">Continuer</button>`;
  }
  return h;
}
function nextLine(){
  const d=G.dialog,n=NPC[d.id];
  d.i++;
  if(d.i>=n.intro.length){d.stage='q';d.qi=0;d.opts=null}
  renderDialog();
}
function answerQ(i){
  const d=G.dialog,q=d.qs[d.qi],c=d.opts[i];
  if(c!==q.a){d.bad.push(c);d.qerr=true;d.errs++;SFX.ko();renderDialog();return}
  const first=!d.qerr;
  G.adv.total++;
  if(first){G.adv.good++;d.firsts++}
  const coin=d.rev?(first?2:0):(first?5:1);
  d.gain+=coin;d.fbFirst=first;
  gain(coin,first?(d.rev?4:10):3);
  SFX.ok();d.stage='fb';renderDialog();
}
function nextQ(){
  const d=G.dialog;
  d.qi++;d.opts=null;d.bad=[];d.qerr=false;
  if(d.qi>=d.qs.length){completeQuiz(d);d.stage='out'}else d.stage='q';
  renderDialog();
}
function completeQuiz(d){
  if(d.rev){save();return}
  const id=d.id,st=d.errs===0?3:(d.errs<=2?2:1);
  G.adv.done[id]=true;
  G.adv.stars[id]=Math.max(G.adv.stars[id]||0,st);
  d.gain+=10;gain(10,10);
  let tissu=0;
  if(id==='mavungu'){G.adv.pieces+=20;G.adv.tissu+=2;tissu=2;d.gain+=20}
  d.res={stars:st,tissu:tissu};
  SFX.win();save();refreshHud();
  setTimeout(checkFin,0);
}
function openTalk(id){
  const n=NPC[id];
  openBox({kind:'info',title:n.name+' · '+n.role,i:0,lines:[
    'Bonjour '+G.nom+' !',
    objective().replace('Objectif : ','Ton objectif : ').replace(/^(.)/,c=>c),
    'Ta partie est sauvegardée automatiquement. Repose-toi quand tu veux.']});
}
function htmlInfo(d){
  const last=d.i>=d.lines.length-1;
  return `<h3>${esc(d.title)}</h3><p>${esc(d.lines[d.i])}</p><button class="p" onclick="${last?'closeDialog()':'infoNext()'}">${last?'Fermer':'Suite'}</button>`;
}
function infoNext(){G.dialog.i++;renderDialog()}

// ---------- Boutique ----------
function openShop(){openBox({kind:'shop',msg:'Bienvenue au marché, '+G.nom+' !'})}
function htmlShop(d){
  const a=G.adv;
  let h=`<h3>Maman Béa · Marchande</h3><p>${esc(d.msg)}</p><p class="row"><span>Mes pièces</span><b>${a.pieces} 🪙</b></p><p class="row"><span>Mes mangues · tissu wax</span><b>${a.mangues} 🥭 · ${a.tissu}</b></p>`;
  if(a.mangues>0)h+=`<button onclick="sellMangoes()">Vendre mes ${a.mangues} mangues (+${a.mangues*2} 🪙)</button>`;
  h+=Object.keys(ITEMS).map(k=>{
    const it=ITEMS[k];
    if(a.items[k])return `<button disabled>✔ ${esc(it.n)} (dans ta maison)</button>`;
    return `<button onclick="buy('${k}')">${esc(it.n)} — ${it.p} 🪙${it.t?' + '+it.t+' tissu wax':''}</button>`;
  }).join('');
  return h+`<button class="s" onclick="closeDialog()">Quitter le marché</button>`;
}
function sellMangoes(){
  const a=G.adv,n=a.mangues;
  if(!n)return;
  a.mangues=0;gain(n*2,0);SFX.coin();
  G.dialog.msg='Merci ! Tes '+n+' mangues sont vendues : +'+(n*2)+' pièces.';renderDialog();
}
function buy(k){
  const it=ITEMS[k],a=G.adv,d=G.dialog;
  if(a.items[k])return;
  if(a.pieces<it.p){d.msg='Il te manque '+(it.p-a.pieces)+' pièces pour : '+it.n+'.';SFX.ko();renderDialog();return}
  if(it.t&&a.tissu<it.t){d.msg='Il te faut du tissu wax. Le Directeur Mavungu en offre à la fin de la leçon.';SFX.ko();renderDialog();return}
  a.pieces-=it.p;if(it.t)a.tissu-=it.t;
  a.items[k]=true;save();refreshHud();SFX.coin();
  d.msg='Achat réussi : '+it.n+' ! Elle est installée dans ta maison.';renderDialog();
  setTimeout(checkFin,0);
}
function checkFin(){
  if(G.adv.fin||!storyDone()||nbItems()<Object.keys(ITEMS).length)return;
  G.adv.fin=true;save();SFX.win();
  if(G.mode==='play'||G.mode==='dialog')openBox({kind:'info',title:'Félicitations !',i:0,lines:[
    G.nom+', tu as terminé la leçon et meublé toute ta maison !',
    'Tu es un vrai champion de LEXARIS ACADÉMIE. Continue à réviser pour gagner trois étoiles partout.']});
}

// ---------- Menu ----------
function openMenu(){if(G.mode==='play')openBox({kind:'menu'})}
function htmlMenu(){
  const a=G.adv;
  let h=`<h3>${esc(G.nom)} · Niveau ${lvl()}</h3><p class="row"><span>Pièces</span><b>${a.pieces} 🪙</b></p><p class="row"><span>Tissu wax · mangues</span><b>${a.tissu} · ${a.mangues} 🥭</b></p>`
   +`<p class="row"><span>Réponses justes du premier coup</span><b>${a.good}/${a.total}</b></p>`
   +`<h4>Leçons</h4>`+['lola','ilunga','junior','mavungu'].map(id=>{
      const s=a.stars[id]||0;
      return `<div class="row"><span>${esc(SUJETS[NPC[id].sujet])} · ${esc(NPC[id].name)}</span><b>${a.done[id]?'★'.repeat(s)+'☆'.repeat(3-s):'—'}</b></div>`;
    }).join('')
   +`<h4>Ma maison</h4>`+Object.keys(ITEMS).map(k=>`<div class="row"><span>${esc(ITEMS[k].n)}</span><b>${a.items[k]?'✔':'—'}</b></div>`).join('')
   +`<p style="font-size:12px;margin-top:8px">${esc(objective())}</p>`
   +`<button class="p" onclick="closeDialog()">Fermer</button>`
   +`<button onclick="toggleSound()">Son : ${G.sound?'activé':'coupé'}</button>`
   +`<button class="s" onclick="resetGame()">Recommencer une nouvelle partie</button>`;
  return h;
}
function toggleSound(){G.sound=!G.sound;save();renderDialog()}
function resetGame(){
  if(!confirm('Effacer toute ta progression et recommencer ?'))return;
  try{localStorage.removeItem(KEY)}catch(e){}
  location.reload();
}

// ---------- Mini-jeu : cueillette de mangues ----------
function startMini(){
  G.mode='mini';G.mini={t:400,caught:0,list:[],sp:0};hideBubble();
  toast('Attrape les mangues qui tombent !');
}
function tickMini(){
  const m=G.mini;
  m.t--;m.sp--;
  if(m.sp<=0){m.sp=10+Math.floor(Math.random()*8);m.list.push({x:TREE_X+(Math.random()*110-55),y:78,v:1.8+Math.random()*1.4})}
  m.list=m.list.filter(o=>{
    o.y+=o.v;
    if(o.y>=134&&Math.abs(o.x-G.x)<16){m.caught++;SFX.coin();return false}
    return o.y<150;
  });
  const mg=$('mg');if(mg)mg.innerHTML=m.list.map(o=>`<use href="#mango" transform="translate(${o.x.toFixed(1)},${o.y.toFixed(1)}) scale(.6)"/>`).join('');
  $('info').textContent='Mangues attrapées : '+m.caught+' · temps : '+Math.ceil(m.t/20)+' s';
  if(m.t<=0)endMini();
}
function endMini(){
  const c=G.mini.caught;
  G.mini=null;G.mode='play';
  const mg=$('mg');if(mg)mg.innerHTML='';
  G.adv.mangues+=c;save();
  toast(c?'+'+c+' mangues dans ton panier ! Vends-les à Maman Béa.':'Aucune mangue cette fois…');
  if(c)SFX.win();
  gain(0,c);refreshHud();
}

// ---------- Boucle et commandes ----------
let blockedAt=0;
function movePlayer(){
  const dx=(G.keys.l?-1:0)+(G.keys.r?1:0);
  const W=SC[G.sc].W;
  const lim=(G.sc==='ville'&&!doorOpen())?GATE_X:W-8;
  const nx=G.x+dx*SPEED;
  if(G.sc==='ville'&&!doorOpen()&&dx>0&&nx>lim&&Date.now()-blockedAt>3500){
    blockedAt=Date.now();bubble('<b>Mama Lola</b> : Réponds d’abord à mes questions !',NPC.lola.x);
    setTimeout(()=>{if(!G.near)hideBubble()},2800);
  }
  G.x=clamp(8,lim,nx);
  if(dx)G.dir=dx;
  const mv=dx!==0;
  if(mv!==G.mv){G.mv=mv;renderPlayer()}
  applyCam();
}
function tick(){
  if(G.mode!=='play'&&G.mode!=='mini')return;
  movePlayer();
  const b=$('ba');
  if(G.mode==='mini'){
    tickMini();
    if(b.textContent!=='Arrêter')b.textContent='Arrêter';
    b.disabled=false;G._run=endMini;return;
  }
  const a=actionLabel(checkProximity());
  if(b.textContent!==a.label)b.textContent=a.label;
  b.disabled=!a.enabled;
  G._run=a.run;
}
function act(){if((G.mode==='play'||G.mode==='mini')&&G._run)G._run()}
function bindCtl(el,k){
  const on=e=>{e.preventDefault();G.keys[k]=true};
  const off=e=>{e.preventDefault();G.keys[k]=false};
  el.addEventListener('pointerdown',on);el.addEventListener('pointerup',off);
  el.addEventListener('pointercancel',off);el.addEventListener('pointerleave',off);
}
bindCtl($('bl'),'l');bindCtl($('br'),'r');
$('ba').addEventListener('click',act);
$('menu').addEventListener('click',openMenu);
const isL=e=>e.key==='ArrowLeft'||e.key==='a'||e.key==='q';
const isR=e=>e.key==='ArrowRight'||e.key==='d';
document.addEventListener('keydown',e=>{
  if(G.mode!=='play'&&G.mode!=='mini')return;
  if(isL(e))G.keys.l=true;
  if(isR(e))G.keys.r=true;
  if(e.key==='e'||e.key==='Enter'||e.key===' '){e.preventDefault();act()}
  if(e.key==='m')openMenu();
});
document.addEventListener('keyup',e=>{if(isL(e))G.keys.l=false;if(isR(e))G.keys.r=false});
function autoTalk(){
  if(G.sc!=='ville'||G.mode!=='play'||G.near)return;
  const a=AUTO[autoIdx%AUTO.length];autoIdx++;
  const x=a[0]==='Jérémie'?AUTOP.jer.x:AUTOP.kasa.x;
  if(Math.abs(G.x-x)>170)return;
  bubble('<b>'+esc(a[0])+'</b> : '+esc(a[1]),x);
  clearTimeout(G._hb);G._hb=setTimeout(()=>{if(!G.near)hideBubble()},3800);
}
setInterval(tick,50);
setInterval(autoTalk,4500);

// ---------- Écran de départ ----------
function setSexe(s){G.sexe=s;$('fille').className=s==='f'?'p':'';$('garcon').className=s==='h'?'p':''}
function setSkin(i){G.skin=i;[].forEach.call(document.querySelectorAll('#skins .sk'),(b,j)=>{b.className='sk'+(j===i?' p':'')})}
$('fille').onclick=()=>setSexe('f');
$('garcon').onclick=()=>setSexe('h');
PEAUX.forEach((c,i)=>{
  const b=document.createElement('button');b.className='sk';b.style.background=c;b.setAttribute('aria-label','Teint '+(i+1));
  b.onclick=()=>setSkin(i);$('skins').appendChild(b);
});
function enterGame(intro){
  $('start').classList.add('hide');
  G.sc='ville';G.x=100;G.dir=1;G.mv=false;G.mode='play';
  buildScene();refreshHud();
  if(intro)openBox({kind:'info',title:'Bienvenue, '+G.nom+' !',i:0,lines:[
    'Tu es dans ton village, devant ta maison. Déplace-toi avec ◀ et ▶, et utilise le bouton vert pour agir.',
    'L’école LEXARIS ACADÉMIE se trouve tout à droite. Mama Lola garde le portail : réponds à ses questions pour entrer.',
    'En chemin, cueille des mangues au manguier, vends-les à Maman Béa et meuble ta maison.']});
}
$('go').onclick=()=>{
  const n=$('nom').value.trim();
  if(!n){$('nom').focus();return}
  G.nom=n;G.adv=newAdv();save();enterGame(true);
};
$('cont').onclick=()=>enterGame(false);
(function init(){
  const s=readSave();
  if(s&&s.nom){
    G.nom=s.nom;G.sexe=s.sexe||'f';G.skin=s.skin||0;G.sound=s.sound!==false;
    G.adv=Object.assign(newAdv(),s.adv||{});
    $('nom').value=s.nom;
    $('cont').textContent='Continuer · '+s.nom+' (niveau '+lvl()+')';
    $('cont').classList.remove('hide');
    $('go').textContent='Nouvelle partie';$('go').className='';
  }
  setSexe(G.sexe);setSkin(G.skin);refreshHud();
})();
