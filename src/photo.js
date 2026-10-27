// Mode « aventure photographique » : lieux réalistes en photo, déplacement de lieu en lieu,
// personnages placés dans la scène, mini-jeu de mangues, ambiance sonore.
import {CHAR_HEIGHT} from './sprites.js';

// x, y : position en % de l'image (pour un personnage : ses pieds) ; h : hauteur en % de l'image pour 1,70 m.
const ASPECT={pf1:.256,pf2:.28,ph1:.29,ph2:.306};
// scale : [y1,h1,y2,h2] (hauteur en % pour 1,70 m à deux profondeurs) ; walk : [ymin,ymax] ; spawn/entry : arrivée du joueur
const GEO={
 village:{scale:[95,47,70,32],walk:[66,99],spawn:{x:30,y:92},entry:{marche:{x:70,y:86},maison:{x:24,y:88},fleuve:{x:34,y:95}}},
 marche:{scale:[98,56,75,38],walk:[72,99],spawn:{x:22,y:96},entry:{village:{x:14,y:96},portail:{x:62,y:80}}},
 portail:{scale:[98,56,78,40],walk:[76,99],spawn:{x:24,y:96},entry:{marche:{x:15,y:96},classe:{x:55,y:82}}},
 classe:{scale:[62,34,84,48],walk:[62,99],spawn:{x:26,y:92},entry:{portail:{x:50,y:92}}},
 maison:{scale:[98,64,80,48],walk:[78,99],spawn:{x:26,y:96},entry:{village:{x:76,y:96}}},
 fleuve:{scale:[95,50,75,34],walk:[78,99],spawn:{x:26,y:95},entry:{village:{x:16,y:95}}}
};
const SCENES={
 village:{img:'village',name:'Mon quartier',focus:48,amb:'village',items:[
  {k:'npc',id:'jer',x:60,y:93,h:44},{k:'npc',id:'kasa',x:71,y:95,h:44},
  {k:'go',to:'maison',x:19,y:58,ico:'⬆',label:'Entrer dans ma maison'},
  {k:'go',to:'marche',x:73,y:62,ico:'➡',label:'Vers le marché'},
  {k:'go',to:'fleuve',x:30,y:90,ico:'⬅',label:'Vers le fleuve'},
  {k:'tree',x:50,y:26,label:'Cueillir des mangues'}]},
 marche:{img:'marche',name:'Le marché',focus:50,amb:'marche',items:[
  {k:'npc',id:'bea',x:46,y:98,h:56},
  {k:'go',to:'village',x:9,y:88,ico:'⬅',label:'Retour au quartier'},
  {k:'go',to:'portail',x:64,y:55,ico:'⬆',label:'Vers l’école'}]},
 portail:{img:'portail',name:'Le portail de l’école',focus:48,amb:'portail',items:[
  {k:'npc',id:'lola',x:42,y:98,h:56},
  {k:'go',to:'classe',x:55,y:50,ico:'⬆',label:'Entrer dans l’école',need:'lola'},
  {k:'go',to:'marche',x:9,y:88,ico:'⬅',label:'Retour au marché'}]},
 classe:{img:'classe',name:'La classe',focus:50,amb:'classe',items:[
  {k:'npc',id:'ilunga',x:50,y:62,h:34},{k:'npc',id:'junior',x:40,y:80,h:40},{k:'npc',id:'mavungu',x:61,y:84,h:46},
  {k:'go',to:'portail',x:50,y:97,ico:'⬇',label:'Sortir de l’école'}]},
 maison:{img:'maison',name:'Ma maison',focus:50,amb:'maison',items:[
  {k:'npc',id:'mama',x:47,y:98,h:64},
  {k:'objs',x:19,y:74,label:'Mes objets'},
  {k:'go',to:'village',x:86,y:92,ico:'⬇',label:'Sortir'}]},
 fleuve:{img:'fleuve',name:'Le fleuve Congo',focus:50,amb:'fleuve',items:[
  {k:'fact',x:52,y:60,label:'Le fleuve Congo'},
  {k:'go',to:'village',x:9,y:88,ico:'⬅',label:'Retour au quartier'}]}
};

export function initPhoto(A){
  const {G,NPC,AUTOP,AUTO,actionFor,toast,speak,SFX,gain,save,refreshHud,openBox,esc,hasChar}=A;
  const pv=document.getElementById('pv');
  pv.innerHTML=`<div class="pblur"></div><div id="pstage"><div id="pdrift"><div class="pbg"></div><div id="pitems"></div></div></div><div class="pfade"></div><div class="pplace"></div><button class="pstop hide">Arrêter</button><div class="phint hide">↔ Fais glisser pour regarder autour</div>`;
  const stage=pv.querySelector('#pstage'),drift=pv.querySelector('#pdrift'),bg=pv.querySelector('.pbg'),items=pv.querySelector('#pitems');
  const blur=pv.querySelector('.pblur'),hint=pv.querySelector('.phint');
  const fade=pv.querySelector('.pfade'),place=pv.querySelector('.pplace'),stopBtn=pv.querySelector('.pstop');
  const S={id:null,panX:0,W:0,H:0,dragged:false,greeted:{},busy:false,me:{x:30,y:92,walking:false,cb:null}};

  // ---------- mise en page : l'image couvre l'écran, on la fait glisser pour regarder autour ----------
  function layout(keepPan){
    const vw=pv.clientWidth,vh=pv.clientHeight;
    const W=Math.max(vw,Math.min(vh*16/9,vw*2.15)),H=W*9/16;
    S.vw=vw;S.vh=vh;S.W=W;S.H=H;
    stage.style.width=W+'px';stage.style.height=H+'px';
    stage.style.top=((vh-H)*(H<vh?.5:.75))+'px';
    const sc=SCENES[S.id];
    if(!keepPan)S.panX=vw/2-W*(sc?sc.focus:50)/100;
    clampPan();apply();
  }
  const clampPan=()=>{S.panX=Math.min(0,Math.max(S.vw-S.W,S.panX))};
  const apply=()=>{stage.style.left=S.panX+'px'};
  window.addEventListener('resize',()=>{if(S.id&&G.ui==='photo')layout(false)});

  let drag=null;
  pv.addEventListener('pointerdown',e=>{if(G.ui!=='photo')return;drag={x:e.clientX,pan:S.panX,moved:false};S.dragged=false});
  pv.addEventListener('pointermove',e=>{
    if(!drag)return;const dx=e.clientX-drag.x;
    if(Math.abs(dx)>7)drag.moved=true;
    if(drag.moved){S.panX=drag.pan+dx;clampPan();apply();S.dragged=true}
  });
  const endDrag=()=>{if(drag&&drag.moved)setTimeout(()=>{S.dragged=false},80);drag=null};
  pv.addEventListener('pointerup',endDrag);pv.addEventListener('pointercancel',endDrag);

  // ---------- le joueur ----------
  const pc=()=>A.playerChar();
  function hFor(id,y){const g=GEO[id].scale,t=(y-g[2])/(g[0]-g[2]);return g[3]+(g[1]-g[3])*t}
  function meHtml(){
    const c=pc();if(!hasChar(c))return '';
    const sc=S.id,h=hFor(sc,S.me.y)*(CHAR_HEIGHT[c]||1.7)/1.7,url=`img/chars/${c}.webp`;
    return `<div class="pn me" style="left:${S.me.x}%;top:${S.me.y}%;height:${h}%;z-index:${Math.round(S.me.y*10)};--ar:${ASPECT[c]||.28}"><i class="sh"></i><div class="mp"><div class="ly u" style="background-image:url(${url})"></div><div class="ly l" style="background-image:url(${url})"></div><div class="ly r" style="background-image:url(${url})"></div></div></div>`;
  }
  function meEl(){return items.querySelector('.me')}
  function placeMe(){
    const el=meEl();if(!el)return;
    const c=pc(),h=hFor(S.id,S.me.y)*(CHAR_HEIGHT[c]||1.7)/1.7;
    el.style.left=S.me.x+'%';el.style.top=S.me.y+'%';el.style.height=h+'%';el.style.zIndex=Math.round(S.me.y*10);
  }
  function followPan(){
    const px=S.panX+S.W*S.me.x/100,lo=S.vw*.26,hi=S.vw*.74;
    if(S.W<=S.vw+4)return;
    if(px<lo)S.panX+=(lo-px)*.18;else if(px>hi)S.panX-=(px-hi)*.18;else return;
    clampPan();apply();
  }
  let walkRaf=0;
  function walkTo(x,y,cb){
    const g=GEO[S.id],m=S.me;
    m.tx=Math.min(95,Math.max(5,x));m.ty=Math.min(g.walk[1],Math.max(g.walk[0],y));m.cb=cb||null;
    const el=meEl();if(!el){if(cb)cb();return}
    if(m.walking)return;
    m.walking=true;el.classList.add('walk');
    let last=performance.now();
    const step=now=>{
      if(!m.walking||!meEl())return;
      const dt=Math.min(.05,(now-last)/1000);last=now;
      const dx=m.tx-m.x,dy=(m.ty-m.y),d=Math.hypot(dx,dy*.7),sp=30*dt;
      if(d<=sp+.2){
        m.x=m.tx;m.y=m.ty;m.walking=false;placeMe();meEl()&&meEl().classList.remove('walk');
        const f=m.cb;m.cb=null;if(f)f();return;
      }
      m.x+=dx/d*sp;m.y+=dy/d*sp;
      placeMe();followPan();walkRaf=requestAnimationFrame(step);
    };
    walkRaf=requestAnimationFrame(step);
  }
  const stand=(npcItem)=>{const side=S.me.x<=npcItem.x?-1:1;return {x:npcItem.x+side*9,y:npcItem.y}};

  // ---------- construction d'une scène ----------
  function build(id,keep,from){
    const sc=SCENES[id];S.id=id;
    if(!keep){const g=GEO[id],e=(from&&g.entry[from])||g.spawn;S.me.x=e.x;S.me.y=e.y;S.me.walking=false;S.me.cb=null}
    bg.style.backgroundImage=`url(img/scenes/${sc.img}.jpg)`;blur.style.backgroundImage=`url(img/scenes/${sc.img}.jpg)`;
    place.textContent='📍 '+sc.name;
    let h='';
    sc.items.forEach((it,i)=>{
      if(it.k==='npc'){
        if(!hasChar(it.id))return;
        const n=NPC[it.id]||AUTOP[it.id],hh=it.h*(CHAR_HEIGHT[it.id]||1.7)/1.7;
        const st=npcState(it.id);
        h+=`<div class="pn ${st.cls}" data-i="${i}" style="left:${it.x}%;top:${it.y}%;height:${hh}%;z-index:${Math.round(it.y*10)}"><i class="sh"></i><img src="img/chars/${it.id}.webp" alt="" draggable="false"><span class="tag">${st.ico} ${esc(n.short||n.name)}</span></div>`;
      }else if(it.k==='go'){
        const lock=it.need&&!A.doneNpc(it.need);
        h+=`<button class="hs go${lock?' locked':''}" data-i="${i}" style="left:${it.x}%;top:${it.y}%"><span class="ic">${lock?'🔒':it.ico}</span><span class="lb">${esc(lock?'Mama Lola garde le passage':it.label)}</span></button>`;
      }else{
        h+=`<button class="hs ${it.k}" data-i="${i}" style="left:${it.x}%;top:${it.y}%"><span class="ic">${it.k==='tree'?'🥭':it.k==='objs'?'🧺':'ℹ️'}</span><span class="lb">${esc(it.label)}</span></button>`;
      }
    });
    items.innerHTML=h+meHtml();
    layout(false);
    if(!keep){const f=sc.items.find(it=>it.k==='npc'),fx=f?(S.me.x+f.x)/2:sc.focus;S.panX=S.vw/2-S.W*fx/100;clampPan();apply()}
  }
  function npcState(id){
    const n=NPC[id];
    if(!n)return {cls:'',ico:'💬'};
    if(n.kind==='quiz'){
      if(A.locked(id))return {cls:'lock',ico:'🔒'};
      if(A.doneNpc(id))return {cls:'done',ico:'✔'};
      return {cls:'todo',ico:'❗'};
    }
    return {cls:'',ico:'💬'};
  }

  // ---------- déplacement entre les lieux ----------
  function show(id,opt){
    if(S.busy)return;
    S.busy=true;hideBubble();
    const first=!S.id;
    if(first){build(id,false);S.busy=false;enterScene(id);return}
    drift.style.transition='transform .28s ease-in,opacity .28s ease-in';
    drift.style.transform=`scale(${opt&&opt.back?.94:1.18})`;drift.style.opacity='0';fade.style.opacity='1';
    setTimeout(()=>{
      build(id,false,opt&&opt.from);
      drift.style.transition='none';drift.style.transform=`scale(${opt&&opt.back?1.1:.94})`;
      void drift.offsetWidth;
      drift.style.transition='transform .42s ease-out,opacity .42s ease-out';drift.style.transform='scale(1)';drift.style.opacity='1';fade.style.opacity='0';
      setTimeout(()=>{drift.style.transition='';S.busy=false;enterScene(id)},430);
    },290);
  }
  function enterScene(id){
    ambient(SCENES[id].amb);
    // salutations
    const sc=SCENES[id];
    const first=sc.items.find(it=>it.k==='npc'&&NPC[it.id]&&!S.greeted[it.id]&&hasChar(it.id));
    if(first){
      S.greeted[first.id]=true;
      setTimeout(()=>{if(S.id===id&&G.mode==='pview')say(first.id,'Bonjour '+esc(G.nom)+' !',3200)},700);
    }
    A.refreshHud();
    if(S.vw<S.W-40&&!S.hinted){S.hinted=true;hint.classList.remove('hide');setTimeout(()=>hint.classList.add('hide'),5200)}
  }

  // ---------- bulles ----------
  const bub=document.getElementById('bubble');let bubT=null,bubEl=null;
  function say(id,html,ms){
    const el=items.querySelector(`.pn[data-i="${SCENES[S.id].items.findIndex(it=>it.id===id)}"]`);
    if(!el)return;
    bubEl=el;bub.innerHTML=html;bub.style.display='block';placeBubble();
    clearTimeout(bubT);bubT=setTimeout(hideBubble,ms||3500);
  }
  function placeBubble(){
    if(!bubEl)return;
    const r=bubEl.getBoundingClientRect(),w=pv.clientWidth;
    bub.style.left=Math.min(w-70,Math.max(70,r.left+r.width/2))+'px';
    bub.style.top=Math.max(70,r.top+8)+'px';
  }
  function hideBubble(){bub.style.display='none';bubEl=null}
  setInterval(()=>{if(bubEl)placeBubble()},250);

  // ---------- interactions ----------
  items.addEventListener('click',e=>{
    if(S.dragged||G.mode!=='pview')return;
    const el=e.target.closest('[data-i]');
    if(!el){ // toucher le sol : le joueur y marche
      const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*100,y=(e.clientY-r.top)/r.height*100;
      hideBubble();walkTo(x,y);return;
    }
    const it=SCENES[S.id].items[+el.dataset.i];
    if(it.k==='npc'){
      if(!NPC[it.id]){const t=stand(it);walkTo(t.x,t.y);return}
      const a=actionFor({t:'npc',id:it.id});
      if(!a.enabled){toast(NPC[it.id].short+' est occupé(e). Reviens plus tard.');return}
      const t=stand(it);hideBubble();walkTo(t.x,t.y,()=>{if(G.mode==='pview')a.run()});
    }else if(it.k==='go'){
      if(it.need&&!A.doneNpc(it.need)){toast('Mama Lola garde le passage : réponds d’abord à ses questions.');SFX.ko();return}
      const from=S.id;walkTo(it.x,it.y,()=>show(it.to,{back:it.ico==='⬇'||it.ico==='⬅',from:from}));
    }else if(it.k==='tree')walkTo(50,91,()=>startMango());
    else if(it.k==='objs')walkTo(it.x+8,it.y+14,()=>A.openObjs());
    else if(it.k==='fact')walkTo(it.x,it.y+20,()=>fact());
  });
  // les enfants du quartier bavardent
  setInterval(()=>{
    if(G.ui!=='photo'||G.mode!=='pview'||S.id!=='village'||bubEl)return;
    S.chat=(S.chat||0)+1;const l=AUTO[S.chat%AUTO.length];
    const id=l[0]==='Jérémie'?'jer':'kasa';say(id,'<b>'+esc(l[0])+'</b> : '+esc(l[1]),4200);
  },6500);
  function fact(){
    const first=!G.adv.facts||!G.adv.facts.fleuve;
    openBox({kind:'info',title:'Le fleuve Congo',i:0,lines:[
      'Le fleuve Congo est le deuxième plus long fleuve d’Afrique, après le Nil. C’est aussi l’un des fleuves les plus profonds du monde.',
      'À Kinshasa, il sépare la RDC de la République du Congo : de l’autre côté du fleuve, on voit Brazzaville.']});
    if(first){G.adv.facts=Object.assign(G.adv.facts||{},{fleuve:true});gain(0,5);toast('+5 points d’expérience')}
  }

  // ---------- mini-jeu : mangues qui tombent, à attraper en touchant ----------
  let mg=null;
  function startMango(){
    if(G.mode!=='pview')return;
    G.mode='mini';hideBubble();
    const layer=document.createElement('div');layer.className='pmg';items.appendChild(layer);
    mg={t:20,caught:0,layer:layer,spawn:0,list:[],last:performance.now()};
    stopBtn.classList.remove('hide');toast('Touche les mangues pour les attraper !');
    requestAnimationFrame(mgLoop);
  }
  function mgLoop(now){
    if(!mg)return;
    const dt=Math.min(.05,(now-mg.last)/1000);mg.last=now;
    mg.t-=dt;mg.spawn-=dt;
    if(mg.spawn<=0){
      mg.spawn=.45+Math.random()*.4;
      const el=document.createElement('button');el.className='mgo';
      const m={el:el,x:36+Math.random()*30,y:16+Math.random()*10,v:0,gy:76+Math.random()*14,done:false};
      el.style.left=m.x+'%';el.style.top=m.y+'%';
      el.addEventListener('pointerdown',ev=>{ev.stopPropagation();if(m.done)return;m.done=true;mg.caught++;SFX.coin();el.classList.add('pop');setTimeout(()=>el.remove(),260)});
      mg.layer.appendChild(el);mg.list.push(m);
    }
    mg.list=mg.list.filter(m=>{
      if(m.done)return false;
      m.v+=70*dt;m.y+=m.v*dt*.18;m.el.style.top=m.y+'%';
      if(m.y>=m.gy){m.el.classList.add('splat');setTimeout(()=>m.el.remove(),350);return false}
      return true;
    });
    document.getElementById('info').textContent='Mangues attrapées : '+mg.caught+' · temps : '+Math.max(0,Math.ceil(mg.t))+' s';
    if(mg.t<=0)return endMango();
    requestAnimationFrame(mgLoop);
  }
  function endMango(){
    if(!mg)return;
    const c=mg.caught;mg.layer.remove();mg=null;stopBtn.classList.add('hide');
    G.mode='pview';G.adv.mangues+=c;save();
    toast(c?'+'+c+' mangues dans ton panier ! Vends-les à Maman Béa.':'Aucune mangue cette fois…');
    if(c)SFX.win();
    gain(0,c);refreshHud();
  }
  stopBtn.addEventListener('click',endMango);

  // ---------- ambiance sonore (générée, sans fichier) ----------
  let ac=null,amb=null,chirpT=null;
  function noise(){
    const b=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate),d=b.getChannelData(0);
    let l=0;for(let i=0;i<d.length;i++){const w=Math.random()*2-1;l=(l+.02*w)/1.02;d[i]=l*3.5}
    const s=ac.createBufferSource();s.buffer=b;s.loop=true;return s;
  }
  function ambient(kind){
    try{
      if(!G.sound){stopAmb();return}
      ac=ac||new (window.AudioContext||window.webkitAudioContext)();
      if(ac.state==='suspended')ac.resume();
      stopAmb();
      const g=ac.createGain(),f=ac.createBiquadFilter(),n=noise();
      const P={village:['lowpass',500,.9,.05],marche:['bandpass',850,.6,.11],portail:['lowpass',420,.8,.045],classe:['lowpass',300,.7,.025],maison:['lowpass',250,.6,.02],fleuve:['lowpass',650,.7,.07]}[kind]||['lowpass',400,.7,.03];
      f.type=P[0];f.frequency.value=P[1];f.Q.value=P[2];g.gain.value=0;g.gain.linearRampToValueAtTime(P[3],ac.currentTime+1.2);
      n.connect(f);f.connect(g);g.connect(ac.destination);n.start();
      amb={n:n,g:g};
      if(kind==='village'||kind==='portail'||kind==='fleuve'){
        const chirp=()=>{
          if(!amb||!G.sound)return;
          const o=ac.createOscillator(),gg=ac.createGain(),t=ac.currentTime,f0=2200+Math.random()*1600;
          o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f0*1.5,t+.09);o.frequency.exponentialRampToValueAtTime(f0*.9,t+.18);
          gg.gain.setValueAtTime(.0001,t);gg.gain.exponentialRampToValueAtTime(.018,t+.03);gg.gain.exponentialRampToValueAtTime(.0001,t+.2);
          o.connect(gg);gg.connect(ac.destination);o.start(t);o.stop(t+.22);
          chirpT=setTimeout(chirp,1800+Math.random()*4200);
        };
        chirpT=setTimeout(chirp,1200);
      }
    }catch(e){}
  }
  function stopAmb(){
    clearTimeout(chirpT);
    if(amb){try{amb.g.gain.linearRampToValueAtTime(0,ac.currentTime+.3);const n=amb.n;setTimeout(()=>{try{n.stop()}catch(e){}},400)}catch(e){}amb=null}
  }

  A.photo={
    show:id=>{pv.classList.remove('hide');S.id=null;S.busy=false;show(id)},
    hide:()=>{pv.classList.add('hide');stopAmb();hideBubble()},
    refresh:()=>{if(!S.id)return;const pan=S.panX;build(S.id,true);S.panX=pan;layout(true)},
    scene:()=>S.id,
    ambientOff:stopAmb,
    ambientOn:()=>{if(S.id)ambient(SCENES[S.id].amb)}
  };
}
