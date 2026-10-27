import * as THREE from 'three';
import {BANK,NPC,AUTOP,AUTO,ITEMS,SUJETS,SKIN_TONES,HAIR_COLORS,EYE_COLORS,LIP_COLORS,OUTFIT_COLORS,HAIRS,ACCS,OUTFITS,DEFAULT_LOOK,LEVEL_UNLOCKS} from './data.js';
import {makeHuman} from './chars.js';
import {makePhotoChar} from './sprites.js';
import {initPhoto} from './photo.js';
import {setManifest} from './textures.js';
import {buildVille,buildClasse,buildMaison} from './world.js';

const KEY='kelas_game_v12';
const $=id=>document.getElementById(id);
const clamp=(a,b,v)=>Math.max(a,Math.min(b,v));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const dist=(ax,az,bx,bz)=>Math.hypot(ax-bx,az-bz);

// ---------- État ----------
const newAdv=()=>({done:{},stars:{},good:0,total:0,pieces:0,tissu:0,mangues:0,xp:0,items:{},bought:{},fin:false});
const G={ui:'photo',nom:'',photo:null,real:'pf1',voice:true,sexe:'f',look:Object.assign({},DEFAULT_LOOK,{acc:[]}),sound:true,sc:'ville',x:-13,z:0.5,ry:0,phi:0,pitch:.3,mode:'start',dialog:null,
  joy:{x:0,y:0},key:{x:0,y:0},speed:0,near:null,greeted:{},adv:newAdv(),mini:null,cine:null};
function readSave(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){return null}}
function save(){try{localStorage.setItem(KEY,JSON.stringify({ui:G.ui,nom:G.nom,photo:G.photo,real:G.real,voice:G.voice,look:G.look,sound:G.sound,adv:G.adv}))}catch(e){}}
const doneNpc=id=>!!G.adv.done[id];
const locked=id=>{const n=NPC[id];return !!(n.needs&&!doneNpc(n.needs))};
const doorOpen=()=>doneNpc('lola');
const lvl=()=>1+Math.floor(G.adv.xp/50);
const starsTotal=()=>Object.values(G.adv.stars).reduce((a,b)=>a+b,0);
const nbItems=()=>Object.keys(ITEMS).filter(k=>G.adv.items[k]).length;
const storyDone=()=>['lola','ilunga','junior','mavungu'].every(doneNpc);
const parler=n=>'Parler '+(/^le /.test(n.short)?n.short.replace(/^le /,'au '):'à '+n.short);

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
 win:()=>{[523,659,784,1047].forEach((f,i)=>beep(f,.18,'sine',.08,i*.12))},
 step:()=>beep(90,.05,'sine',.02)
};

// ---------- Lecture à voix haute ----------
const TTS=typeof window!=='undefined'&&'speechSynthesis' in window&&typeof SpeechSynthesisUtterance!=='undefined';
let voices=[];
function loadVoices(){if(TTS)voices=speechSynthesis.getVoices()||[]}
if(TTS){loadVoices();speechSynthesis.onvoiceschanged=loadVoices}
const VOICE={lola:{g:'f',pitch:.85,rate:.88},ilunga:{g:'f',pitch:1,rate:.95},junior:{g:'h',pitch:1.7,rate:1.05},mavungu:{g:'h',pitch:.75,rate:.9},bea:{g:'f',pitch:1.1,rate:1},mama:{g:'f',pitch:.95,rate:.95},_:{g:'f',pitch:1,rate:.95}};
function pickVoice(g){
  const fr=voices.filter(v=>/^fr/i.test(v.lang));
  if(!fr.length)return null;
  const fem=/(julie|hortense|denise|eloise|élodie|amelie|amélie|audrey|marie|brigitte|female|femme|google fran)/i,mal=/(paul|henri|claude|thomas|mathieu|male|homme|antoine|lucas)/i;
  const hit=fr.filter(v=>(g==='f'?fem:mal).test(v.name));
  return hit[0]||fr.find(v=>/google|microsoft/i.test(v.name))||fr[0];
}
let lastSpoken=null;
function cleanText(t){return String(t).replace(/×/g,' fois ').replace(/÷/g,' divisé par ').replace(/−/g,' moins ').replace(/\+/g,' plus ').replace(/=/g,' égale ').replace(/[·★☆🪙🥭⭐✔🔒👗🔊]/g,' ').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim()}
function speak(text,id){
  lastSpoken={text:text,id:id};
  if(!TTS||!G.voice)return;
  try{
    speechSynthesis.cancel();
    const v=VOICE[id]||VOICE._,u=new SpeechSynthesisUtterance(cleanText(text));
    u.lang='fr-FR';u.pitch=v.pitch;u.rate=v.rate;const vo=pickVoice(v.g);if(vo)u.voice=vo;
    speechSynthesis.speak(u);
  }catch(e){}
}
function stopSpeech(){if(TTS)try{speechSynthesis.cancel()}catch(e){}}
function replay(){if(lastSpoken){const w=G.voice;G.voice=true;speak(lastSpoken.text,lastSpoken.id);G.voice=w}}
let spokeKey='';
function autoSpeak(d){
  let key='',text='',id=d.id;
  if(d.kind==='quiz'){
    const n=NPC[d.id];key=`q|${d.id}|${d.stage}|${d.i}|${d.qi}`;
    if(d.stage==='lines')text=n.intro[d.i];
    else if(d.stage==='q'){const q=d.qs[d.qi];text='Question '+(d.qi+1)+'. '+q.q+' Réponses : '+(d.opts||[]).join(', ')}
    else if(d.stage==='fb')text=(d.fbFirst?'Bravo ! ':'C’est ça. ')+d.qs[d.qi].exp;
    else text=d.rev?'Révision terminée : '+d.firsts+' sur '+d.qs.length+' du premier coup.':n.outro;
  }else if(d.kind==='info'){key='i|'+d.title+'|'+d.i;text=d.lines[d.i]}
  else if(d.kind==='shop'){key='s|'+d.msg;text=d.msg;id='bea'}
  else return;
  if(key===spokeKey)return;
  spokeKey=key;speak(text,id);
}
const replayBtn=()=>TTS?`<button class="s" onclick="replay()">🔊 Réécouter</button>`:'';

// ---------- Moteur 3D ----------
const cv=$('cv');
const renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene();
scene.background=new THREE.Color(0x9fd0ee);
scene.fog=new THREE.Fog(0xdff0f7,70,260);
const camera=new THREE.PerspectiveCamera(58,1,.1,600);
const hemi=new THREE.HemisphereLight(0xcfe8ff,0x7a6a4a,1.0);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xfff1d6,3.0);
sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
const SC_=30;Object.assign(sun.shadow.camera,{left:-SC_,right:SC_,top:SC_,bottom:-SC_,near:1,far:140});
sun.shadow.bias=-.0004;sun.shadow.normalBias=.04;
scene.add(sun);scene.add(sun.target);
const skyDome=new THREE.Mesh(new THREE.SphereGeometry(420,24,16),new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.BackSide,fog:false,depthWrite:false}));
import('./textures.js').then(T=>{skyDome.material.map=T.skyTexture();skyDome.material.needsUpdate=true});
scene.add(skyDome);
function resize(){
  const w=$('world').clientWidth,h=$('world').clientHeight;
  renderer.setSize(w,h,false);camera.aspect=w/h;
  camera.fov=w/h<.8?72:(w/h<1.2?64:56);camera.updateProjectionMatrix();
}
window.addEventListener('resize',resize);

// ---------- Scènes ----------
let W=null;            // scène courante {group,colliders,boxes,bounds,update,...}
let playerObj=null;
let npcObjs={};
let mangoGroup=null;
function playerLook(){return Object.assign({},G.look,{h:.8})}
const hasChar=id=>!!(window.__MAN&&(window.__MAN.chars||[]).includes(id));
function makePlayer(){
  if(G.real&&hasChar(G.real))return makePhotoChar(G.real,{walk:hasChar(G.real+'w')?G.real+'w':null});
  return makeHuman(playerLook());
}
function makeNpc(id,n){
  if(hasChar(id))return makePhotoChar(id);
  return makeHuman(n.look);
}
const SCENES={
 ville:{build:()=>buildVille(),interior:false,doors:[
   {x:-22,z:-5.4,r:1.9,to:'maison',label:'Entrer dans la maison',tx:0,tz:1.0,phi:-Math.PI/2},
   {x:42,z:-5.3,r:2.6,to:'classe',label:'Entrer dans l’école',ok:()=>doorOpen(),closed:'Porte fermée',tx:0,tz:2.6,phi:-Math.PI/2}]},
 maison:{build:()=>buildMaison(G.adv.items),interior:true,doors:[{x:0,z:2.5,r:1.9,to:'ville',label:'Sortir',tx:-22,tz:-3.9,phi:Math.PI/2}],
   spots:[{x:-1.6,z:-2.2,r:1.9,label:'Miroir : changer mon look',run:()=>openCreator('play')}]},
 classe:{build:()=>buildClasse(),interior:true,doors:[{x:0,z:4.1,r:1.9,to:'ville',label:'Sortir de l’école',tx:42,tz:-3.4,phi:Math.PI/2}]}
};
function clearScene(){
  if(W){scene.remove(W.group)}
  if(playerObj)scene.remove(playerObj);
  Object.values(npcObjs).forEach(o=>scene.remove(o.obj));
  npcObjs={};
}
function buildScene(){
  clearScene();
  const S=SCENES[G.sc];
  W=S.build();scene.add(W.group);
  skyDome.visible=true;
  hemi.intensity=S.interior?2.1:1.0;
  scene.fog.near=S.interior?200:70;
  sun.intensity=S.interior?2.2:3.0;
  playerObj=makePlayer();scene.add(playerObj);
  Object.keys(NPC).filter(k=>NPC[k].sc===G.sc).forEach(id=>addNpc(id,NPC[id]));
  Object.keys(AUTOP).filter(k=>AUTOP[k].sc===G.sc).forEach(id=>addNpc(id,AUTOP[id]));
  snapCamera();
}
function addNpc(id,n){
  const obj=makeNpc(id,n);
  obj.position.set(n.x,0,n.z);obj.rotation.y=n.ry||0;
  scene.add(obj);npcObjs[id]={obj,n,wave:0,ry:n.ry||0};
}

// ---------- Collisions ----------
const PR=.36;
function collide(nx,nz){
  let x=nx,z=nz;
  const cs=W.colliders;
  for(let i=0;i<cs.length;i++){
    const c=cs[i],dx=x-c.x,dz=z-c.z,d=Math.hypot(dx,dz),m=c.r+PR;
    if(d<m&&d>1e-4){x=c.x+dx/d*m;z=c.z+dz/d*m}
  }
  const bs=W.boxes.slice();
  if(G.sc==='ville'&&!doorOpen())bs.push(W.dyn.gateBox);
  bs.forEach(b=>{
    const cx=clamp(b.x0,b.x1,x),cz=clamp(b.z0,b.z1,z);
    const dx=x-cx,dz=z-cz,d=Math.hypot(dx,dz);
    if(d<PR){
      if(d>1e-4){x=cx+dx/d*PR;z=cz+dz/d*PR}
      else{ // centre dans la boîte : sortie par le bord le plus proche
        const l=x-b.x0,r=b.x1-x,t=z-b.z0,bt=b.z1-z,m=Math.min(l,r,t,bt);
        if(m===l)x=b.x0-PR;else if(m===r)x=b.x1+PR;else if(m===t)z=b.z0-PR;else z=b.z1+PR;
      }
    }
  });
  Object.keys(npcObjs).forEach(id=>{
    const o=npcObjs[id].n;if(o.sit)return;
    const dx=x-o.x,dz=z-o.z,d=Math.hypot(dx,dz),m=.5+PR;
    if(d<m&&d>1e-4){x=o.x+dx/d*m;z=o.z+dz/d*m}
  });
  const b=W.bounds;
  return [clamp(b.x0,b.x1,x),clamp(b.z0,b.z1,z)];
}

// ---------- Caméra ----------
function camTarget(){return new THREE.Vector3(G.x,1.35,G.z)}
function camDesired(dist){
  const pt=G.mode==='mini'?Math.max(G.pitch,.85):G.pitch;
  if(G.mode==='mini')dist=Math.max(dist,7.5);
  const dx=Math.cos(G.phi)*Math.cos(pt),dz=Math.sin(G.phi)*Math.cos(pt),dy=Math.sin(pt);
  const t=camTarget();
  return new THREE.Vector3(t.x-dx*dist,t.y+dy*dist+.4,t.z-dz*dist);
}
const camDist=()=>SCENES[G.sc].interior?4.4:4.9;
function snapCamera(){
  const p=camDesired(camDist());camera.position.copy(p);camera.lookAt(camTarget());
}
function updateCamera(dt){
  const p=camDesired(camDist());
  camera.position.lerp(p,1-Math.exp(-dt*9));
  if(camera.position.y<.6)camera.position.y=.6;
  camera.lookAt(camTarget());
}

// ---------- HUD ----------
function objective(){
  const a=G.adv.done;
  if(!a.lola)return 'Objectif : va à l’école et parle à Mama Lola, la gardienne du portail.';
  if(!a.ilunga)return 'Objectif : entre dans l’école et va voir la Professeure Ilunga.';
  if(!a.junior)return 'Objectif : rejoins Junior, assis dans la classe.';
  if(!a.mavungu)return 'Objectif : le Directeur Mavungu t’attend dans la classe.';
  const n=nbItems(),t=Object.keys(ITEMS).length;
  if(n<t)return 'Objectif : cueille des mangues, révise et meuble ta maison ('+n+'/'+t+').';
  return 'Tu as tout accompli ! Continue à réviser pour gagner des étoiles.';
}
function refreshHud(){
  const pu=photoUrl();
  $('stats').innerHTML=(pu?`<img class="av" src="${pu}" alt="">`:'')+'🪙 '+G.adv.pieces+' · ⭐ '+starsTotal()+' · Niv '+lvl();
  if(G.mode!=='mini')$('info').textContent=objective();
}
function gain(p,xp){
  const l0=lvl();
  G.adv.pieces+=p;G.adv.xp+=xp;
  if(lvl()>l0){toast('Niveau '+lvl()+' atteint !'+(LEVEL_UNLOCKS[lvl()]?' Nouvelle tenue débloquée !':''));SFX.win()}
  refreshHud();save();
}
let toastT=null;
function toast(t){const e=$('toast');e.textContent=t;e.style.display='block';clearTimeout(toastT);toastT=setTimeout(()=>{e.style.display='none'},2400)}
// bulle ancrée à un point du monde
let bub=null;
function bubble(html,x,z,y,ms){
  bub={pos:new THREE.Vector3(x,y||2.2,z),until:ms?performance.now()+ms:0};
  const b=$('bubble');b.innerHTML=html;b.style.display='block';
}
function hideBubble(){bub=null;$('bubble').style.display='none'}
function placeBubble(){
  if(!bub)return;
  if(bub.until&&performance.now()>bub.until){hideBubble();return}
  const v=bub.pos.clone().project(camera);
  const w=$('world').clientWidth,h=$('world').clientHeight;
  if(v.z>1){$('bubble').style.display='none';return}
  const b=$('bubble');b.style.display='block';
  b.style.left=clamp(70,w-70,(v.x*.5+.5)*w)+'px';
  b.style.top=clamp(60,h-20,(-v.y*.5+.5)*h)+'px';
}

// ---------- Interactions ----------
function nearby(){
  const out=[];
  Object.keys(NPC).forEach(id=>{const n=NPC[id];if(n.sc===G.sc){const d=dist(G.x,G.z,n.x,n.z);if(d<(n.kind==='shop'?3.9:2.7))out.push({t:'npc',id:id,d:d})}});
  SCENES[G.sc].doors.forEach((d,i)=>{const dd=dist(G.x,G.z,d.x,d.z);if(dd<d.r)out.push({t:'door',i:i,d:dd})});
  (SCENES[G.sc].spots||[]).forEach((sp,i)=>{const dd=dist(G.x,G.z,sp.x,sp.z);if(dd<sp.r)out.push({t:'spot',i:i,d:dd})});
  if(G.sc==='ville'&&W.mangoTree){const dd=dist(G.x,G.z,W.mangoTree.x,W.mangoTree.z);if(dd<4)out.push({t:'tree',d:dd})}
  return out.sort((a,b)=>(a.t==='npc'?0:1)-(b.t==='npc'?0:1)||a.d-b.d);
}
function actionFor(t){
  if(!t)return {label:'',enabled:false,run:null};
  if(t.t==='npc'){
    const n=NPC[t.id];
    if(n.kind==='shop')return {label:'Aller au marché',enabled:true,run:openShop};
    if(n.kind==='talk')return {label:parler(n),enabled:true,run:()=>openTalk(t.id)};
    if(locked(t.id))return {label:n.short+' est occupé(e), reviens plus tard',enabled:false,run:null};
    if(doneNpc(t.id))return {label:'Réviser avec '+n.short,enabled:true,run:()=>startQuiz(t.id,true)};
    return {label:parler(n),enabled:true,run:()=>startQuiz(t.id,false)};
  }
  if(t.t==='tree')return {label:'Cueillir des mangues',enabled:true,run:startMini};
  if(t.t==='spot'){const sp=SCENES[G.sc].spots[t.i];return {label:sp.label,enabled:true,run:sp.run}}
  const d=SCENES[G.sc].doors[t.i];
  if(d.ok&&!d.ok())return {label:d.closed,enabled:false,run:null};
  return {label:d.label,enabled:true,run:()=>goTo(d)};
}
function goTo(d){
  G.sc=d.to;G.x=d.tx;G.z=d.tz;G.phi=d.phi;G.near=null;hideBubble();buildScene();
}

// ---------- Dialogues ----------
function openBox(d){
  G.dialog=d;G.mode='dialog';G.joy.x=G.joy.y=0;G.key.x=G.key.y=0;resetKnob();
  hideBubble();renderDialog();
  $('actwrap').classList.add('hide');
}
function closeDialog(){
  resetArmed=false;stopSpeech();spokeKey='';
  $('dlg').style.display='none';G.dialog=null;
  if(G.ui==='photo'){G.mode='pview';PM.refresh();refreshHud();return}
  G.mode='play';
  $('actwrap').classList.remove('hide');
  if(G.sc==='maison')buildScene();
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
  else if(d.kind==='profile')h=htmlProfile(d);
  else if(d.kind==='objs')h=htmlObjs(d);
  box.innerHTML='<div class="box">'+h+(d.kind==='quiz'||d.kind==='info'||d.kind==='shop'?replayBtn():'')+'</div>';
  autoSpeak(d);
}
const hasPortrait=id=>!!(window.__MAN&&(window.__MAN.portraits||[]).includes(id));
const head=(id,title)=>`<div class="hd">${id&&hasPortrait(id)?`<img class="pt" src="img/portraits/${id}.jpg" alt="">`:''}<h3>${esc(title)}</h3></div>`;
function htmlQuiz(d){
  const n=NPC[d.id];
  let h=head(d.id,n.name+' · '+n.role);
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
    else h+=`<p>${esc(n.outro)}</p><p><b>${'★'.repeat(r.stars)+'☆'.repeat(3-r.stars)}</b> · +${d.gain} 🪙${r.tissu?' · +'+r.tissu+' tissu wax':''}</p>`;
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
  const nw=G.ui==='photo'?[]:newUnlocks(id);if(nw.length)setTimeout(()=>toast('Débloqué : '+nw.join(', ')),900);
  SFX.win();save();refreshHud();
  setTimeout(checkFin,0);
}
function openTalk(id){
  const n=NPC[id];
  openBox({kind:'info',id:id,title:n.name+' · '+n.role,i:0,lines:[
    'Bonjour '+G.nom+' !',
    objective().replace('Objectif : ','Ton objectif : '),
    'Ta partie est sauvegardée automatiquement. Repose-toi quand tu veux.']});
}
function htmlInfo(d){
  const last=d.i>=d.lines.length-1;
  return head(d.id,d.title)+`<p>${esc(d.lines[d.i])}</p><button class="p" onclick="${last?'closeDialog()':'infoNext()'}">${last?'Fermer':'Suite'}</button>`;
}
function infoNext(){G.dialog.i++;renderDialog()}

// ---------- Boutique ----------
function openShop(){openBox({kind:'shop',msg:'Bienvenue au marché, '+G.nom+' !'})}
function htmlShop(d){
  const a=G.adv;
  let h=head('bea','Maman Béa · Marchande')+`<p>${esc(d.msg)}</p><p class="row"><span>Mes pièces</span><b>${a.pieces} 🪙</b></p><p class="row"><span>Mes mangues · tissu wax</span><b>${a.mangues} 🥭 · ${a.tissu}</b></p>`;
  if(a.mangues>0)h+=`<button onclick="sellMangoes()">Vendre mes ${a.mangues} mangues (+${a.mangues*2} 🪙)</button>`;
  h+=Object.keys(ITEMS).map(k=>{
    const it=ITEMS[k];
    if(a.items[k])return `<button disabled>✔ ${esc(it.n)} (dans ta maison)</button>`;
    return `<button onclick="buy('${k}')">${esc(it.n)} — ${it.p} 🪙${it.t?' + '+it.t+' tissu wax':''}</button>`;
  }).join('');
  if(G.ui!=='photo')h+=`<button onclick="shopMode()">👗 Mode : essayer tenues et coiffures</button>`;
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
function openMenu(){if(G.mode==='play'||G.mode==='pview')openBox({kind:'menu'})}
function htmlMenu(){
  const a=G.adv;
  const pu=photoUrl();
  return `<div class="hd">${pu?`<img class="pt" src="${pu}" alt="">`:''}<h3>${esc(G.nom)} · Niveau ${lvl()}</h3></div><p class="row"><span>Pièces</span><b>${a.pieces} 🪙</b></p><p class="row"><span>Tissu wax · mangues</span><b>${a.tissu} · ${a.mangues} 🥭</b></p>`
   +`<p class="row"><span>Réponses justes du premier coup</span><b>${a.good}/${a.total}</b></p>`
   +`<h4>Leçons</h4>`+['lola','ilunga','junior','mavungu'].map(id=>{
      const s=a.stars[id]||0;
      return `<div class="row"><span>${esc(SUJETS[NPC[id].sujet])} · ${esc(NPC[id].name)}</span><b>${a.done[id]?'★'.repeat(s)+'☆'.repeat(3-s):'—'}</b></div>`;
    }).join('')
   +`<h4>Ma maison</h4>`+Object.keys(ITEMS).map(k=>`<div class="row"><span>${esc(ITEMS[k].n)}</span><b>${a.items[k]?'✔':'—'}</b></div>`).join('')
   +`<p style="font-size:12px;margin-top:8px">${esc(objective())}</p>`
   +`<button class="p" onclick="closeDialog()">Fermer</button>`
   +(G.ui==='photo'?`<button onclick="openCreatorFromPhoto()">🧍 Mon personnage (visage, tenue)</button>`:'')
   +`<button onclick="openProfile()">📷 Ma photo de profil</button>`
   +`<button onclick="toggleSound()">Son : ${G.sound?'activé':'coupé'}</button>`
   +`<button onclick="toggleVoice()">Lecture à voix haute : ${G.voice?'activée':'coupée'}</button>`
   +`<button class="s" onclick="resetGame()">${G.dialog&&G.dialog.confirmReset?'Appuie encore pour tout effacer':'Recommencer une nouvelle partie'}</button>`;
}
function toggleSound(){G.sound=!G.sound;save();if(G.ui==='photo'){if(G.sound)PM.ambientOn();else PM.ambientOff()}renderDialog()}
function toggleVoice(){G.voice=!G.voice;if(!G.voice)stopSpeech();save();renderDialog()}
let resetArmed=false;
function resetGame(){
  if(!resetArmed){resetArmed=true;G.dialog.confirmReset=true;renderDialog();return}
  try{localStorage.removeItem(KEY)}catch(e){}
  location.reload();
}

// ---------- Mini-jeu : cueillette de mangues ----------
function startMini(){
  G.mode='mini';G.mini={t:20,caught:0,list:[],sp:0};hideBubble();
  mangoGroup=new THREE.Group();scene.add(mangoGroup);
  canopy(false);
  toast('Attrape les mangues qui tombent !');
}
const mangoMat=new THREE.MeshStandardMaterial({color:0xf0a51c,roughness:.5});
const mangoGeo=new THREE.SphereGeometry(.17,12,10);
function tickMini(dt){
  const m=G.mini,tr=W.mangoTree;
  m.t-=dt;m.sp-=dt;
  if(m.sp<=0){
    m.sp=.5+Math.random()*.4;
    const a=Math.random()*6.28,r=Math.random()*3.4;
    const mesh=new THREE.Mesh(mangoGeo,mangoMat);mesh.scale.y=1.25;mesh.castShadow=true;
    mesh.position.set(tr.x+Math.cos(a)*r,6.2,tr.z+Math.sin(a)*r);
    mangoGroup.add(mesh);m.list.push({mesh:mesh,v:0});
  }
  m.list=m.list.filter(o=>{
    o.v+=7*dt;o.mesh.position.y-=o.v*dt;o.mesh.rotation.x+=dt*4;
    const p=o.mesh.position;
    if(p.y<1.9&&p.y>.2&&dist(p.x,p.z,G.x,G.z)<.95){m.caught++;SFX.coin();mangoGroup.remove(o.mesh);return false}
    if(p.y<=.17){p.y=.17;o.v=0;o.gone=(o.gone||0)+dt;if(o.gone>.5){mangoGroup.remove(o.mesh);return false}}
    return true;
  });
  $('info').textContent='Mangues attrapées : '+m.caught+' · temps : '+Math.max(0,Math.ceil(m.t))+' s';
  if(m.t<=0)endMini();
}
function canopy(v){W.mangoTree.obj.children.forEach(c=>{if(c.userData.canopy)c.visible=v})}
function endMini(){
  const c=G.mini.caught;canopy(true);
  scene.remove(mangoGroup);mangoGroup=null;G.mini=null;G.mode='play';
  G.adv.mangues+=c;save();
  toast(c?'+'+c+' mangues dans ton panier ! Vends-les à Maman Béa.':'Aucune mangue cette fois…');
  if(c)SFX.win();
  gain(0,c);refreshHud();
}

// ---------- Commandes : joystick, clavier, caméra ----------
const joy=$('joy'),knob=$('knob');let joyId=null;
function resetKnob(){joyId=null;knob.style.transform='translate(0,0)';G.joy.x=G.joy.y=0}
function joyMove(e){
  const r=joy.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,R=r.width/2-4;
  let dx=e.clientX-cx,dy=e.clientY-cy;const d=Math.hypot(dx,dy);
  if(d>R){dx=dx/d*R;dy=dy/d*R}
  knob.style.transform=`translate(${dx}px,${dy}px)`;
  G.joy.x=dx/R;G.joy.y=-dy/R;
}
joy.addEventListener('pointerdown',e=>{e.preventDefault();joyId=e.pointerId;joy.setPointerCapture(e.pointerId);joyMove(e)});
joy.addEventListener('pointermove',e=>{if(e.pointerId===joyId){e.preventDefault();joyMove(e)}});
['pointerup','pointercancel','lostpointercapture'].forEach(ev=>joy.addEventListener(ev,e=>{if(e.pointerId===joyId)resetKnob()}));
// glisser sur la scène : orienter la caméra
let camPtr=null,lastX=0,lastY=0;
cv.addEventListener('pointerdown',e=>{if(G.mode!=='play'&&G.mode!=='mini'&&G.mode!=='creator')return;camPtr=e.pointerId;lastX=e.clientX;lastY=e.clientY;cv.setPointerCapture(e.pointerId)});
cv.addEventListener('pointermove',e=>{
  if(e.pointerId!==camPtr)return;
  if(G.mode==='creator'){CR.ang-=(e.clientX-lastX)*.012}
  else{G.phi+=(e.clientX-lastX)*.006;G.pitch=clamp(.12,1.1,G.pitch+(e.clientY-lastY)*.004)}
  lastX=e.clientX;lastY=e.clientY;
});
['pointerup','pointercancel'].forEach(ev=>cv.addEventListener(ev,e=>{if(e.pointerId===camPtr)camPtr=null}));
const held={};
const kmap={ArrowUp:'u',w:'u',z:'u',ArrowDown:'d',s:'d',ArrowLeft:'l',a:'l',q:'l',ArrowRight:'r',d:'r'};
function keyVec(){G.key.y=(held.u?1:0)-(held.d?1:0);G.key.x=(held.r?1:0)-(held.l?1:0)}
document.addEventListener('keydown',e=>{
  if(e.target&&e.target.tagName==='INPUT')return;
  if(kmap[e.key]){held[kmap[e.key]]=true;keyVec();e.preventDefault()}
  if(G.mode!=='play'&&G.mode!=='mini')return;
  if(e.key==='e'||e.key==='Enter'||e.key===' '){e.preventDefault();act()}
  if(e.key==='m')openMenu();
  if(e.key==='ArrowLeft'&&e.shiftKey)G.phi-=.1;
});
document.addEventListener('keyup',e=>{if(kmap[e.key]){held[kmap[e.key]]=false;keyVec()}});
let runAct=null;
function act(){if(G.mode==='mini')return endMini();if(G.mode==='play'&&runAct)runAct()}
$('ba').addEventListener('click',act);
$('menu').addEventListener('click',openMenu);

// ---------- Boucle ----------
let last=performance.now(),tt=0,stepT=0,autoT=3,autoIdx=0;
function angDiff(a,b){let d=b-a;while(d>Math.PI)d-=2*Math.PI;while(d<-Math.PI)d+=2*Math.PI;return d}
function loop(now){
  requestAnimationFrame(loop);
  const dt=Math.min(.05,(now-last)/1000);last=now;tt+=dt;
  if(!W||(G.ui==='photo'&&G.mode!=='creator'))return;
  const playing=G.mode==='play'||G.mode==='mini';
  // déplacement
  let sp=0;
  if(playing){
    const ix=G.joy.x+G.key.x,iy=G.joy.y+G.key.y;
    const mag=Math.min(1,Math.hypot(ix,iy));
    if(mag>.1){
      const fx=Math.cos(G.phi),fz=Math.sin(G.phi),rx=-fz,rz=fx;
      let mx=fx*iy+rx*ix,mz=fz*iy+rz*ix;const ml=Math.hypot(mx,mz);mx/=ml;mz/=ml;
      sp=mag<.7?mag/.7*2.5:2.5+(mag-.7)/.3*2.1;
      const [nx,nz]=collide(G.x+mx*sp*dt,G.z+mz*sp*dt);
      G.x=nx;G.z=nz;
      const tr=Math.atan2(mx,mz);G.ry+=angDiff(G.ry,tr)*Math.min(1,dt*12);
      G.lean=ix*Math.min(1,mag);
      stepT+=dt*sp;if(stepT>1.2){stepT=0;SFX.step()}
    }
  }
  if(sp===0)G.lean=0;
  G.speed=sp;
  playerObj.position.set(G.x,0,G.z);playerObj.rotation.y=G.ry;
  playerObj.userData.update(dt,{speed:sp,pose:G.mode==='creator'?'creator':'',cam:camera.position,lean:G.lean||0});
  // PNJ
  Object.keys(npcObjs).forEach(id=>{
    const o=npcObjs[id],n=o.n;
    const d=dist(G.x,G.z,n.x,n.z);
    const talking=G.dialog&&G.dialog.id===id&&G.mode==='dialog';
    let tr=n.ry||0;
    if(!n.sit&&(talking||d<5))tr=Math.atan2(G.x-n.x,G.z-n.z);
    if(n.sit&&talking)tr=Math.atan2(G.x-n.x,G.z-n.z)*.3+(n.ry||0)*.7;
    o.ry+=angDiff(o.ry,tr)*Math.min(1,dt*5);
    o.obj.rotation.y=o.ry;
    if(o.wave>0)o.wave-=dt;
    o.obj.userData.update(dt,{cam:camera.position,talk:talking||(!!AUTOP[id]&&bub&&bub.who===id),wave:o.wave>0,sit:!!n.sit});
  });
  W.update(dt,tt,{open:doorOpen()});
  // soleil qui suit le joueur
  sun.position.set(G.x+26,G.z*0+40,G.z+16);sun.target.position.set(G.x,0,G.z);
  if(G.mode==='cine')cineStep(dt);
  else if(G.mode==='creator'){
    const P=playerObj.position,ww=$('world').clientWidth,hh=$('world').clientHeight,land=ww>hh*1.25;
    if(camera.fov!==30){camera.fov=30;camera.updateProjectionMatrix()}
    const a=CR.ang,d=2.35,tp=new THREE.Vector3(P.x+Math.sin(a)*d,1.45,P.z+Math.cos(a)*d);
    camera.position.lerp(tp,1-Math.exp(-dt*8));camera.lookAt(P.x,1.08,P.z);
    if(land)camera.setViewOffset(ww,hh,ww*.2,0,ww,hh);else camera.clearViewOffset();
  }
  else if(G.mode==='start'){const a=tt*.08;camera.position.set(8+Math.cos(a)*34,9,2+Math.sin(a)*22);camera.lookAt(10,2,-2)}
  else updateCamera(dt);
  skyDome.position.copy(camera.position);
  // interactions
  if(G.mode==='play'){
    const tg=nearby();
    const npcT=tg.find(t=>t.t==='npc');
    if(npcT&&G.near!==npcT.id){
      G.near=npcT.id;
      if(!G.greeted[npcT.id]){G.greeted[npcT.id]=true;npcObjs[npcT.id].wave=2.4;bubble('Bonjour '+esc(G.nom)+' !',NPC[npcT.id].x,NPC[npcT.id].z,NPC[npcT.id].look.h*1.95,3000)}
    }
    if(!npcT&&G.near){G.near=null}
    const a=actionFor(tg[0]);
    runAct=a.run;
    const b=$('ba');b.disabled=!a.enabled;
    const label=$('alabel');if(label.textContent!==a.label)label.textContent=a.label;
    // bavardage des enfants
    autoT-=dt;
    if(autoT<=0){
      autoT=5;
      if(G.sc==='ville'&&!G.near&&!bub){
        const e=AUTO[autoIdx%AUTO.length];autoIdx++;
        const p=e[0]==='Jérémie'?AUTOP.jer:AUTOP.kasa;
        if(dist(G.x,G.z,p.x,p.z)<16){bubble('<b>'+esc(e[0])+'</b> : '+esc(e[1]),p.x,p.z,p.look.h*1.95,4200)}
      }
    }
  }else if(G.mode==='mini'){
    tickMini(dt);
    $('alabel').textContent='Arrêter la cueillette';$('ba').disabled=false;
  }
  placeBubble();
  renderer.render(scene,camera);
}

// ---------- Cinématique d'introduction ----------
function startCine(){
  G.mode='cine';G.cine={t:0,dur:9};
  ['joy','actwrap','top','info'].forEach(i=>$(i).classList.add('hide'));
  $('cine').classList.remove('hide');$('skip').classList.remove('hide');
  G.sc='ville';G.x=-13;G.z=0.5;G.phi=0;buildScene();
}
function cineStep(dt){
  const c=G.cine;c.t+=dt;
  const k=Math.min(1,c.t/c.dur),e=k*k*(3-2*k);
  // survol : de l'école vers le joueur
  const a=new THREE.Vector3(60,16,22),b=new THREE.Vector3(10,10,26),f=camDesired(camDist());
  let p;
  if(k<.6){const u=k/.6,s=u*u*(3-2*u);p=a.clone().lerp(b,s)}
  else{const u=(k-.6)/.4,s=u*u*(3-2*u);p=b.clone().lerp(f,s)}
  camera.position.copy(p);
  const look=new THREE.Vector3(30,3,-4).lerp(camTarget(),clamp(0,1,(k-.45)/.55));
  camera.lookAt(look);
  if(c.t>=c.dur)endCine();
}
function endCine(){
  G.cine=null;G.mode='play';
  ['joy','actwrap','top','info'].forEach(i=>$(i).classList.remove('hide'));
  $('cine').classList.add('hide');$('skip').classList.add('hide');
  snapCamera();refreshHud();
  openBox({kind:'info',title:'Bienvenue, '+G.nom+' !',i:0,lines:[
    'Tu es dans ton village. Déplace-toi avec le joystick à gauche, et fais glisser ton doigt sur l’écran pour tourner la caméra.',
    'L’école LEXARIS ACADÉMIE est tout à droite. Mama Lola garde le portail : réponds à ses questions pour entrer.',
    'En chemin, cueille des mangues au manguier, vends-les à Maman Béa et meuble ta maison.']});
}
$('skip').addEventListener('click',()=>{if(G.mode==='cine')endCine()});

// ---------- Profil et objets (mode photo) ----------
function openProfile(){openBox({kind:'profile'})}
function openCreatorFromPhoto(){
  closeDialog();PM.hide();$('cv').style.display='block';
  G.sc='ville';G.x=-13;G.z=0.5;G.phi=0;buildScene();
  openCreator('photo');
}
function htmlProfile(){
  const av=((window.__MAN&&window.__MAN.avatars)||[]).filter(a=>a[0]===(G.look.s||'f'));
  const pcs=['pf1','pf2','ph1','ph2'].map(c=>`<button class="avb${playerChar()===c?' on':''}" onclick="setChar('${c}')"><img src="img/chars/${c}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join('');
  return `<h3>Mon personnage</h3><div class="chips" style="margin-bottom:8px"><button class="chip${G.real?'':' on'}" onclick="setChar(null)">3D, tous les mouvements (360°)</button><button class="chip" onclick="openCreatorFromPhoto()">Personnaliser visage et tenue</button></div><div class="lb" style="font-size:12px;font-weight:700;margin:4px 0">Ou un personnage photo (de face uniquement)</div><div class="avs" style="margin-bottom:10px">${pcs}</div><h3>Ma photo de profil</h3><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${G.photo==='c'?' on':''}" onclick="crPhoto('c')" style="width:auto">Mon visage de personnage</button></div>`+`<div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${G.look.s==='f'?' on':''}" onclick="setGenre('f')" style="width:auto">Fille</button><button class="chip${G.look.s==='h'?' on':''}" onclick="setGenre('h')" style="width:auto">Garçon</button></div>`
   +`<div class="avs">`+av.map(a=>`<button class="avb${G.photo===a?' on':''}" onclick="crPhoto('${a}')"><img src="img/avatars/${a}.jpg" alt=""></button>`).join('')+(userPhoto()?`<button class="avb${G.photo==='u'?' on':''}" onclick="crPhoto('u')"><img src="${userPhoto()}" alt=""></button>`:'')+`</div>`
   +`<label class="chip" style="cursor:pointer;display:block;margin-top:8px">📷 Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label>`
   +`<button class="p" onclick="closeDialog()">Fermer</button>`;
}
function setChar(c){G.real=c;if(c){G.look.s=c[1]==='f'?'f':'h';G.sexe=G.look.s}save();if(c)charAvatar(c);refreshHud();PM.resume();renderDialog()}
function setGenre(g){G.look.s=g;G.sexe=g;save();renderDialog()}
function openObjs(){openBox({kind:'objs'})}
function htmlObjs(){
  const n=nbItems(),t=Object.keys(ITEMS).length;
  return `<h3>Mes objets (${n}/${t})</h3>`+Object.keys(ITEMS).map(k=>`<div class="row"><span>${esc(ITEMS[k].n)}</span><b>${G.adv.items[k]?'✔':'—'}</b></div>`).join('')
   +`<p style="font-size:13px;margin-top:8px">Achète-les chez Maman Béa, au marché, avec les pièces gagnées en répondant aux questions et en cueillant des mangues.</p><button class="p" onclick="closeDialog()">Fermer</button>`;
}

// ---------- Photo de profil ----------
const PHOTO_KEY='kelas_photo_v1';
function userPhoto(){try{return localStorage.getItem(PHOTO_KEY)}catch(e){return null}}
let charAv={};
function charAvatar(id){
  if(charAv[id])return charAv[id];
  charAv[id]=null;
  const im=new Image();im.onload=()=>{
    const c=document.createElement('canvas');c.width=c.height=96;const x=c.getContext('2d'),sw=im.width,sh=im.height*.2;
    const k=Math.max(96/sw,96/sh),w=sw*k,h=im.height*k;x.drawImage(im,(96-w)/2,0,w,h);
    charAv[id]=c.toDataURL('image/png');refreshHud();
  };im.src='img/chars/'+id+'.webp';return null;
}
function photoUrl(){
  if(G.photo==='c')return charAvatar(playerChar());
  if(G.photo==='u')return userPhoto();
  if(G.photo&&window.__MAN&&(window.__MAN.avatars||[]).includes(G.photo))return 'img/avatars/'+G.photo+'.jpg';
  return null;
}
function crPhoto(id){G.photo=id;save();refreshHud();if(G.dialog&&G.dialog.kind==='profile')renderDialog();else renderCreator()}
function crUpload(inp){
  const f=inp.files&&inp.files[0];if(!f)return;
  const img=new Image(),url=URL.createObjectURL(f);
  img.onload=()=>{
    const c=document.createElement('canvas');c.width=160;c.height=213;
    const x=c.getContext('2d'),k=Math.max(160/img.width,213/img.height),w=img.width*k,h=img.height*k;
    x.drawImage(img,(160-w)/2,(213-h)/2,w,h);URL.revokeObjectURL(url);
    try{localStorage.setItem(PHOTO_KEY,c.toDataURL('image/jpeg',.82));G.photo='u';save();refreshHud();if(G.dialog&&G.dialog.kind==='profile')renderDialog();else renderCreator();toast('Ta photo est enregistrée sur cet appareil.')}
    catch(e){toast('Impossible d’enregistrer la photo.')}
  };
  img.onerror=()=>toast('Cette image ne peut pas être lue.');
  img.src=url;
}

// ---------- Créateur de personnage ----------
const CATS={hair:HAIRS,acc:ACCS,outfit:OUTFITS};
const CR={tab:'perso',prev:null,from:'play',ang:0};
function isOwned(kind,id){
  const d=CATS[kind][id];if(!d)return false;
  if(d.own)return true;
  if(d.unlock&&doneNpc(d.unlock))return true;
  if(G.adv.bought[kind+':'+id])return true;
  if(kind==='outfit')for(const lv in LEVEL_UNLOCKS){if(lvl()>=+lv&&LEVEL_UNLOCKS[lv].outfits.indexOf(id)>=0)return true}
  return false;
}
function lockText(kind,id){
  const d=CATS[kind][id];
  if(d.price)return d.price+' 🪙';
  if(d.unlock)return 'Quête : '+NPC[d.unlock].name;
  for(const lv in LEVEL_UNLOCKS)if(LEVEL_UNLOCKS[lv].outfits&&LEVEL_UNLOCKS[lv].outfits.indexOf(id)>=0)return 'Niveau '+lv;
  return '';
}
function newUnlocks(questId){
  const out=[];
  [['hair',HAIRS],['acc',ACCS],['outfit',OUTFITS]].forEach(c=>Object.keys(c[1]).forEach(k=>{if(c[1][k].unlock===questId)out.push(c[1][k].n)}));
  return out;
}
function pendingItems(){
  const L=G.look,list=[];
  if(!isOwned('hair',L.hair))list.push({kind:'hair',id:L.hair});
  if(!isOwned('outfit',L.outfit))list.push({kind:'outfit',id:L.outfit});
  L.acc.forEach(a=>{if(!isOwned('acc',a))list.push({kind:'acc',id:a})});
  return list;
}
function rebuildPlayer(){
  const old=playerObj;
  playerObj=makePlayer();
  playerObj.position.set(G.x,0,G.z);playerObj.rotation.y=G.ry;
  scene.add(playerObj);
  if(old){scene.remove(old);old.traverse(o=>{if(o.geometry)o.geometry.dispose()})}
}
let rbPend=false;
function rebuildSoon(){if(rbPend)return;rbPend=true;requestAnimationFrame(()=>{rbPend=false;rebuildPlayer()})}
function hudVisible(v){['joy','actwrap','top','info'].forEach(i=>$(i).classList.toggle('hide',!v))}
function openCreator(from){
  CR.from=from;CR.tab='perso';CR.prev=JSON.parse(JSON.stringify(G.look));
  G.mode='creator';G.joy.x=G.joy.y=0;G.key.x=G.key.y=0;resetKnob();hideBubble();
  CR.ang=0;G.ry=0;rebuildPlayer();
  hudVisible(false);$('creator').classList.remove('hide');
  {const re=!!G.real,P=playerObj.position;camera.fov=30;camera.updateProjectionMatrix();camera.position.set(P.x,re?1.25:1.45,P.z+(re?3.9:2.35))}
  renderCreator();
}
function creatorDone(){
  const L=G.look,P=CR.prev;
  if(!isOwned('hair',L.hair))L.hair=P.hair;
  if(!isOwned('outfit',L.outfit))L.outfit=P.outfit;
  L.acc=L.acc.filter(a=>isOwned('acc',a));
  save();rebuildPlayer();
  $('creator').classList.add('hide');camera.clearViewOffset();resize();
  if(CR.from==='photo'){
    $('cv').style.display='none';G.mode='pview';hudVisible(true);['joy','actwrap'].forEach(i=>$(i).classList.add('hide'));
    PM.resume();refreshHud();return;
  }
  if(CR.from==='start'){startCine()}
  else{G.mode='play';hudVisible(true);snapCamera();refreshHud()}
}
const chip=(label,active,onclick,sub)=>`<button class="chip${active?' on':''}" onclick="${onclick}">${label}${sub?`<small>${sub}</small>`:''}</button>`;
const sw=(color,active,onclick)=>`<button class="swt${active?' on':''}" style="background:${color}" onclick="${onclick}" aria-label="couleur"></button>`;
const slider=(label,key)=>`<label class="sl"><span>${label}</span><input type="range" min="0" max="100" value="${Math.round(G.look[key]*100)}" oninput="crSlide('${key}',this.value)"></label>`;
function renderCreator(){
  const L=G.look,tabs=G.real?[['perso','Personnage'],['photo','Photo']]:[['perso','Personnage'],['visage','Visage'],['cheveux','Cheveux'],['teint','Teint'],['acc','Accessoires'],['tenue','Tenue'],['photo','Photo']];
  if(!tabs.some(t=>t[0]===CR.tab))CR.tab='perso';
  let h=`<div class="crh"><b>Mon personnage</b><span>🪙 ${G.adv.pieces}</span><button class="p" onclick="creatorDone()">Terminer</button></div>`;
  h+=`<div class="tabs">`+tabs.map(t=>`<button class="${CR.tab===t[0]?'on':''}" onclick="crTab('${t[0]}')">${t[1]}</button>`).join('')+`</div><div class="crb">`;
  if(CR.tab==='perso'){
    h+=`<div class="lb">Style de personnage</div><div class="chips">`+chip('Réaliste (photo)',!!G.real,`crStyle('real')`)+chip('3D personnalisable',!G.real,`crStyle('3d')`)+`</div>`;
    if(G.real){
      h+=`<div class="lb">Choisis ton personnage</div><div class="avs">`+['pf1','pf2','ph1','ph2'].map(c=>`<button class="avb${G.real===c?' on':''}" onclick="crChar('${c}')"><img src="img/chars/${c}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join('')+`</div>`;
    }else h+=`<p style="font-size:13px;margin:8px 0">Règle le visage, les cheveux, le teint, les accessoires et la tenue avec les onglets.</p>`;
  }else if(CR.tab==='visage'){
    h+=slider('Largeur du visage','faceW')+slider('Mâchoire','jaw')+slider('Taille des yeux','eyeS')+slider('Nez','nose')+slider('Lèvres','lips')+slider('Joues roses','blush');
    h+=`<div class="lb">Sourcils</div><div class="chips">`+['Fins','Épais','Arqués'].map((n,i)=>chip(n,L.brow===i,`crSet('brow',${i})`)).join('')+`</div>`;
    h+=`<div class="lb">Couleur des yeux</div><div class="sws">`+EYE_COLORS.map((c,i)=>sw(c,L.eyeC===i,`crSet('eyeC',${i})`)).join('')+`</div>`;
    h+=`<div class="lb">Couleur des lèvres</div><div class="sws">`+LIP_COLORS.map((c,i)=>sw(c,L.lipC===i,`crSet('lipC',${i})`)).join('')+`</div>`;
    if(L.s==='h')h+=`<div class="lb">Barbe</div><div class="chips">`+['Aucune','Légère','Complète'].map((n,i)=>chip(n,L.beard===i,`crSet('beard',${i})`)).join('')+`</div>`;
  }else if(CR.tab==='cheveux'){
    h+=`<div class="lb">Coiffure</div><div class="chips">`+Object.keys(HAIRS).map(k=>chip(HAIRS[k].n,L.hair===k,`crHair('${k}')`,isOwned('hair',k)?'':'🔒 '+lockText('hair',k))).join('')+`</div>`;
    h+=`<div class="lb">Couleur des cheveux</div><div class="sws">`+HAIR_COLORS.map((c,i)=>sw(c,L.hairC===i,`crSet('hairC',${i})`)).join('')+`</div>`;
  }else if(CR.tab==='teint'){
    h+=`<div class="lb">Je suis</div><div class="chips">`+chip('Une fille',L.s==='f',`crSet('s','f')`)+chip('Un garçon',L.s==='h',`crSet('s','h')`)+`</div>`;
    h+=`<div class="lb">Teint de la peau</div><div class="sws">`+SKIN_TONES.map((c,i)=>sw(c,L.skin===i,`crSet('skin',${i})`)).join('')+`</div>`;
  }else if(CR.tab==='acc'){
    h+=`<div class="lb">Accessoires</div><div class="chips">`+Object.keys(ACCS).map(k=>chip(ACCS[k].n,L.acc.indexOf(k)>=0,`crAcc('${k}')`,isOwned('acc',k)?'':'🔒 '+lockText('acc',k))).join('')+`</div>`;
  }else if(CR.tab==='photo'){
    const av=((window.__MAN&&window.__MAN.avatars)||[]).filter(a=>a[0]===L.s);
    h+=`<div class="lb">Ma photo de profil</div><div class="avs">`+av.map(a=>`<button class="avb${G.photo===a?' on':''}" onclick="crPhoto('${a}')"><img src="img/avatars/${a}.jpg" alt=""></button>`).join('')
      +(userPhoto()?`<button class="avb${G.photo==='u'?' on':''}" onclick="crPhoto('u')"><img src="${userPhoto()}" alt=""></button>`:'')+`</div>`;
    h+=`<div class="chips" style="margin-top:8px"><label class="chip" style="cursor:pointer">📷 Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label>`
      +chip('Aucune photo',!G.photo,`crPhoto(null)`)+`</div>`;
  }else{
    h+=`<div class="lb">Tenue</div><div class="chips">`+Object.keys(OUTFITS).map(k=>chip(OUTFITS[k].n,L.outfit===k,`crOutfit('${k}')`,isOwned('outfit',k)?'':'🔒 '+lockText('outfit',k))).join('')+`</div>`;
    h+=`<div class="lb">Couleur de la tenue</div><div class="sws">`+OUTFIT_COLORS.map((c,i)=>sw(c,L.outfitC===i,`crSet('outfitC',${i})`)).join('')+`</div>`;
  }
  h+=`</div>`;
  const pend=pendingItems();
  if(pend.length){
    const tot=pend.reduce((a,p)=>a+(CATS[p.kind][p.id].price||0),0);
    h+=`<div class="buy"><span>Essayage : ${pend.map(p=>esc(CATS[p.kind][p.id].n)).join(', ')} — ${tot} 🪙</span><button class="p" onclick="crBuy()">Acheter</button></div>`;
  }
  $('creator').innerHTML=h;
}
function crStyle(m){
  if(m==='real'){const ok=['pf1','pf2','ph1','ph2'].some(hasChar);G.real=ok?(G.look.s==='f'?'pf1':'ph1'):null}
  else G.real=null;
  rebuildPlayer();renderCreator();
}
function crChar(id){G.real=id;G.look.s=id[1]==='f'?'f':'h';G.sexe=G.look.s;rebuildPlayer();renderCreator()}
function crTab(t){CR.tab=t;renderCreator()}
function crSlide(k,v){G.look[k]=v/100;rebuildSoon()}
function crSet(k,v){
  G.look[k]=v;
  if(k==='s'){G.sexe=v;if(v==='f'&&G.look.beard)G.look.beard=0}
  rebuildSoon();renderCreator();
}
function crTryable(kind,id){
  const d=CATS[kind][id];
  if(isOwned(kind,id)||d.price)return true;
  toast(lockText(kind,id)+' pour débloquer : '+d.n);SFX.ko();return false;
}
function crHair(id){if(!crTryable('hair',id))return;G.look.hair=id;rebuildSoon();renderCreator()}
function crOutfit(id){if(!crTryable('outfit',id))return;G.look.outfit=id;rebuildSoon();renderCreator()}
function crAcc(id){
  const a=G.look.acc,i=a.indexOf(id);
  if(i>=0)a.splice(i,1);else{if(!crTryable('acc',id))return;a.push(id)}
  rebuildSoon();renderCreator();
}
function crBuy(){
  const pend=pendingItems();
  const tot=pend.reduce((a,p)=>a+(CATS[p.kind][p.id].price||0),0);
  if(G.adv.pieces<tot){toast('Il te manque '+(tot-G.adv.pieces)+' pièces.');SFX.ko();return}
  G.adv.pieces-=tot;pend.forEach(p=>{G.adv.bought[p.kind+':'+p.id]=true});
  save();refreshHud();SFX.coin();toast('Achat réussi !');renderCreator();
}
function shopMode(){closeDialog();openCreator('play')}

// ---------- Écran de départ ----------
function setSexe(s){G.sexe=s;G.look.s=s;if(s==='f'&&G.look.beard)G.look.beard=0;$('fille').className=s==='f'?'p':'';$('garcon').className=s==='h'?'p':''}
$('fille').onclick=()=>setSexe('f');
$('garcon').onclick=()=>setSexe('h');
function enterPhoto(intro){
  $('start').classList.add('hide');$('cv').style.display='none';
  hudVisible(true);['joy','actwrap'].forEach(i=>$(i).classList.add('hide'));$('cine').classList.add('hide');
  G.ui='photo';G.mode='pview';
  PM.show('village');refreshHud();
  if(intro)openBox({kind:'info',title:'Bienvenue, '+G.nom+' !',i:0,lines:[
    'Tu es devant ta maison, dans ton quartier de Kinshasa. Touche les flèches pour te déplacer, touche les personnes pour leur parler, et fais glisser ton doigt pour regarder autour de toi.',
    'Ton but : aller à l’école LEXARIS ACADÉMIE. Mama Lola garde le portail : réponds à ses questions pour entrer.',
    'En chemin, cueille des mangues, vends-les à Maman Béa au marché, et gagne des pièces.']});
}
function enterGame(newGame){
  $('start').classList.add('hide');
  G.sc='ville';G.x=-13;G.z=0.5;G.phi=0;
  if(newGame){buildScene();G.mode='creator';openCreator('start')}
  else{
    G.mode='play';
    ['joy','actwrap'].forEach(i=>$(i).classList.remove('hide'));
    buildScene();refreshHud();
  }
}
$('go').onclick=()=>{
  const n=$('nom').value.trim();
  if(!n){$('nom').focus();return}
  G.nom=n;G.adv=newAdv();G.ui='photo';
  G.look=Object.assign({},DEFAULT_LOOK,{acc:[],s:G.sexe});G.real=null;G.photo=G.sexe==='f'?'f1':'h1';
  save();enterPhoto(true);
};
$('go3d').onclick=()=>{
  const n=$('nom').value.trim();
  if(!n){$('nom').focus();return}
  G.ui='3d';$('cv').style.display='block';
  G.nom=n;G.adv=newAdv();G.real=((window.__MAN&&window.__MAN.chars)||[]).includes(G.sexe==='f'?'pf1':'ph1')?(G.sexe==='f'?'pf1':'ph1'):null;
  G.look=Object.assign({},DEFAULT_LOOK,{acc:[],s:G.sexe,hair:G.sexe==='f'?'tresses':'courtes'});
  save();
  enterGame(true);
};
$('cont').onclick=()=>{if(G.ui==='photo')enterPhoto(false);else{$('cv').style.display='block';enterGame(false)}};

Object.assign(window,{openCreatorFromPhoto,setChar,openProfile,setGenre,replay,toggleVoice,crStyle,crChar,crPhoto,crUpload,crTab,crSlide,crSet,crHair,crOutfit,crAcc,crBuy,creatorDone,shopMode,nextLine,answerQ,nextQ,closeDialog,infoNext,sellMangoes,buy,toggleSound,resetGame,__G:G,__snap:()=>snapCamera(),__dbg:()=>({cam:camera.position.toArray().map(v=>+v.toFixed(1)),bea:npcObjs.bea&&npcObjs.bea.obj.position.toArray(),beaVis:npcObjs.bea&&npcObjs.bea.obj.visible,n:Object.keys(npcObjs)})});

// ---------- Démarrage ----------
const playerChar=()=>['pf1','pf2','ph1','ph2'].includes(G.real)?G.real:(G.look.s==='f'?'pf1':'ph1');
const makePlayer3D=()=>makeHuman(Object.assign({},G.look,{h:1}));
const PA={makePlayer3D,playerChar,G,NPC,AUTOP,AUTO,actionFor,locked,doneNpc,doorOpen,toast,speak,SFX,gain,save,refreshHud,openBox,esc,hasChar,openObjs};
initPhoto(PA);const PM=PA.photo;
function init(){
  const s=readSave();
  resize();
  if(s&&s.nom){
    G.nom=s.nom;G.ui=s.ui||'photo';G.photo=s.photo||null;G.real=s.real===undefined?null:s.real;G.voice=s.voice!==false;G.sound=s.sound!==false;
    G.look=Object.assign({},DEFAULT_LOOK,{acc:[]},s.look||{s:s.sexe||'f',skin:s.skin||3});G.sexe=G.look.s;
    G.adv=Object.assign(newAdv(),s.adv||{});
    $('nom').value=s.nom;
    $('cont').textContent='Continuer · '+s.nom+' (niveau '+lvl()+')';
    $('cont').classList.remove('hide');
    $('go').textContent='Nouvelle partie';$('go').className='';
  }
  setSexe(G.sexe);refreshHud();
  G.sc='ville';G.x=-13;G.z=0.5;G.phi=0;
  if(G.ui!=='photo'||!s||!s.nom){/* fond 3D inutile : la photo sert de décor */}
  $('cv').style.display='none';
  $('lb').style.width='100%';
  setTimeout(()=>{$('load').classList.add('hide');$('start').classList.remove('hide')},150);
  G.mode='start';
  requestAnimationFrame(loop);
}
fetch('img/manifest.json').then(r=>r.ok?r.json():{}).catch(()=>({})).then(m=>{
  window.__MAN=m||{};setManifest(m);
  if((m.scenes||[]).includes('kinshasa'))$('start').style.backgroundImage='linear-gradient(rgba(10,20,30,.35),rgba(10,20,30,.35)),url(img/scenes/kinshasa.jpg)';
  init();
});

