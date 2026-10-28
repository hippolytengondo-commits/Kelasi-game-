// Mini-jeux de ressources : chaque mission-lieu possède un petit jeu qui rapporte des matériaux
// (à vendre chez Maman Béa ou à garder pour les chantiers) ou des pièces (penalty).
import * as THREE from 'three';

export const RESS={
  brique:{e:'🧱',n:'briques',p:3},
  bois:{e:'🪵',n:'bois',p:3},
  sable:{e:'🟨',n:'sable',p:2},
  ciment:{e:'🪣',n:'ciment',p:5},
  fer:{e:'🔩',n:'fer',p:4},
  poisson:{e:'🐟',n:'poissons',p:3},
  legume:{e:'🥬',n:'légumes',p:2},
  plante:{e:'🌿',n:'plantes',p:2},
  cuivre:{e:'🟠',n:'cuivre',p:5},
  cafe:{e:'☕',n:'café',p:3},
  papier:{e:'📄',n:'papier',p:1},
  tissu:{e:'🧵',n:'tissu',p:3},
  bitume:{e:'🛣️',n:'bitume',p:6}
};

// style : fall (ça tombe), tap (ça apparaît), peche (timing), penalty (tirs au but)
const L=(r,s,t,d)=>({r:r,s:s,t:t,d:d});
export const MJ={
  marche:L('legume','fall','Récolte au marché','Rattrape les légumes qui tombent des étals. Évite les cailloux !'),
  fleuve:L('poisson','peche','Pêche sur le fleuve','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  sante:L('plante','tap','Plantes médicinales','Touche les plantes qui poussent pour les cueillir avant qu’elles disparaissent.'),
  univ:L('papier','fall','Feuilles du campus','Rattrape les feuilles de cours qui s’envolent.'),
  biblio:L('papier','memoire','Rangement de la LEXOTHÈQUE RDC','Retrouve les paires de livres et de feuilles.'),
  gare:L('fer','tap','Rails de la gare','Ramasse les pièces de fer tombées le long de la voie.'),
  ferme:L('legume','tap','Récolte à la ferme','Touche les légumes mûrs avant qu’ils ne se cachent.'),
  foret:L('bois','fall','Bois de la forêt','Rattrape les branches qui tombent. Attention aux pierres !'),
  musee:L('sable','memoire','Fouilles du musée','Retrouve les paires de vestiges.'),
  stade:L('','penalty','Penalty au stade','Tire un maximum de penalties en une minute !'),
  mine:L('cuivre','tap','Mine de cuivre','Frappe les filons de cuivre en les touchant.'),
  observatoire:L('fer','fall','Météorites','Rattrape les morceaux de fer tombés du ciel.'),
  port:L('fer','tap','Quai du port','Ramasse les pièces de fer sur le quai.'),
  parlement:L('papier','fall','Papiers du parlement','Rattrape les documents qui s’envolent.'),
  aeroport:L('fer','fall','Pièces d’avion','Rattrape les pièces de fer tombées de la soute.'),
  inga:L('ciment','empile','Chantier du barrage','Empile les blocs de béton bien droit.'),
  virunga:L('plante','tap','Plantes de Virunga','Touche les plantes rares pour les cueillir.'),
  zongo:L('bois','tap','Bois des chutes','Touche les troncs portés par l’eau pour les récupérer.'),
  atelier:L('brique','empile','Atelier du maçon','Empile les briques bien droit pour monter le mur.'),
  wagenia:L('poisson','peche','Pêche Wagenia','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  garamba:L('plante','tap','Savane de Garamba','Touche les herbes utiles pour les cueillir.'),
  tanganyika:L('poisson','peche','Pêche sur le lac','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  sciences:L('cuivre','fall','Laboratoire','Rattrape les fils de cuivre qui tombent.'),
  rumba:L('cafe','fall','Café de la rumba','Rattrape les grains de café qui tombent.'),
  pompiers:L('sable','fall','Seaux de sable','Rattrape les seaux de sable lancés par les pompiers.'),
  poste:L('papier','tap','Courrier de la poste','Touche les lettres égarées pour les ramasser.'),
  recyclage:L('brique','empile','Recyclage de briques','Empile les briques récupérées.'),
  numerique:L('cuivre','tap','Câbles du numérique','Touche les câbles de cuivre pour les récupérer.'),
  place:L('brique','empile','Pavés de la place','Empile les pavés bien droit.'),
  village:L('bois','fall','Bois du village','Rattrape les bûches qui tombent pour entretenir le feu. Évite les cailloux !'),
  art:L('bois','tap','Atelier de sculpture','Touche les blocs de bois pour les ramasser avant qu’ils ne disparaissent.'),
  radio:L('cuivre','tap','Câbles de la radio','Touche les câbles de cuivre pour les récupérer.'),
  plantation:L('cafe','tap','Récolte du café','Touche les cerises de café mûres avant qu’elles ne tombent.'),
  kivu:L('poisson','peche','Pêche sur le lac Kivu','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  bonobos:L('plante','tap','Fruits pour les bonobos','Touche les fruits et les feuilles pour préparer le repas des bonobos.')
};

// emplacement du jeu dans chaque lieu (près du point d’arrivée)
const MJPOS={x:2.4,z:5.6,r:2.7};
const AILLEURS={parlement:{x:4.2,z:7.6}};
export const mjPos=(id)=>Object.assign({},MJPOS,AILLEURS[id]||{});

const PIEGE='🪨';
const CONSEIL={
  fall:'Déplace ton personnage avec ◀ ▶ (ou les flèches du clavier, ou glisse le doigt) pour rattraper ce qui tombe. Un piège 🪨 dans le panier met fin au jeu !',
  tap:'Touche les objets avant qu’ils ne disparaissent. Si tu touches un piège 🪨, le jeu s’arrête !',
  peche:'Touche l’eau à la profondeur du poisson. Les vieilles bottes 🥾 te font perdre un poisson.',
  memoire:'Retourne deux cartes : si elles sont identiques, tu gagnes une ressource. Vite, le temps passe !',
  empile:'Touche l’écran (ou la barre d’espace) pour poser le bloc : empile-les bien droit, sinon la tour s’arrête.',
  penalty:'Touche une zone du but (ou ◀ ▲ ▶) pour tirer. Le gardien s’améliore à mesure que tu marques !'
};
// varie les systèmes de jeu selon la ressource (pour les lieux générés)
export const varier=(res,style,i)=>{
  if(style!=='tap')return style;
  if(res==='brique'||res==='ciment'||res==='fer')return i%2?'empile':'tap';
  if(res==='papier'||res==='sable'||res==='tissu')return i%2?'memoire':'tap';
  return style;
};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// repère 3D : anneau lumineux + pastille de la ressource
export function marqueur(id){
  const c=MJ[id];if(!c)return null;
  const g=new THREE.Group();
  const ring=new THREE.Mesh(new THREE.RingGeometry(.9,1.2,32),new THREE.MeshBasicMaterial({color:0xffd23f,transparent:true,opacity:.8,side:THREE.DoubleSide}));
  ring.rotation.x=-Math.PI/2;ring.position.y=.05;g.add(ring);
  const cv=document.createElement('canvas');cv.width=cv.height=128;
  const x=cv.getContext('2d');x.fillStyle='rgba(255,255,255,.95)';x.beginPath();x.arc(64,64,58,0,6.3);x.fill();
  x.lineWidth=6;x.strokeStyle='#ffd23f';x.stroke();
  x.font='64px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(c.s==='penalty'?'⚽':RESS[c.r].e,64,70);
  const t=new THREE.CanvasTexture(cv);t.colorSpace=THREE.SRGBColorSpace;
  const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthWrite:false}));
  sp.scale.set(1.1,1.1,1);sp.position.y=1.7;g.add(sp);
  const q=mjPos(id);g.position.set(q.x,0,q.z);
  g.userData.update=(t)=>{sp.position.y=1.7+Math.sin(t*2.4)*.12;ring.scale.setScalar(1+Math.sin(t*3)*.06)};
  return g;
}

// ---------- jeu ----------
// opt : {host, sfx:{coin,ko,win}, fin(resultat), duree}
export function lancer(id,opt){
  const c=MJ[id];if(!c)return null;
  const sfx=opt.sfx||{};const play=(k)=>{try{sfx[k]&&sfx[k]()}catch(e){}};
  const box=document.createElement('div');box.className='mj';opt.host.appendChild(box);
  const R=c.r?RESS[c.r]:null;
  let raf=0,vivant=true,etat=null;
  const clear=()=>{cancelAnimationFrame(raf)};
  // clavier : flèches / A-D-Q pour se déplacer, espace pour agir
  const touches={g:false,d:false};let crochet=null;
  const kd=e=>{const k=e.key;let u=true;
    if(k==='ArrowLeft'||k==='a'||k==='q')touches.g=true;
    else if(k==='ArrowRight'||k==='d')touches.d=true;
    else u=false;
    if(crochet&&crochet(k))u=true;
    if(u)e.preventDefault()};
  const ku=e=>{const k=e.key;
    if(k==='ArrowLeft'||k==='a'||k==='q')touches.g=false;
    else if(k==='ArrowRight'||k==='d')touches.d=false};
  window.addEventListener('keydown',kd);window.addEventListener('keyup',ku);
  const delier=()=>{window.removeEventListener('keydown',kd);window.removeEventListener('keyup',ku);crochet=null};
  const fermer=()=>{vivant=false;clear();delier();box.remove()};

  function intro(){
    clear();
    box.innerHTML=`<div class="mjc"><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p>`
      +(R?`<p class="mjg">Tu récoltes : <b>${R.e} ${esc(R.n)}</b> (à vendre ${R.p} 🪙 pièce chacun chez Maman Béa).</p>`:`<p class="mjg">Chaque but marqué rapporte <b>2 🪙</b>.</p>`)
      +`<p>${esc(CONSEIL[c.s]||'')}</p><p class="mjinfo">Durée : 1 minute. Une seule partie par mission.</p>`
      +`<button class="p" data-a="go">▶ Jouer</button><button class="s" data-a="non">Plus tard</button></div>`;
    box.querySelector('[data-a=go]').onclick=demarrer;
    box.querySelector('[data-a=non]').onclick=()=>{fermer();opt.fin&&opt.fin(null)};
  }
  function fin(n,piege){
    clear();crochet=null;touches.g=touches.d=false;
    const pen=c.s==='penalty';
    const res={res:c.r||'',n:n,pieces:pen?n*2:0};
    play(n?'win':'ko');
    box.innerHTML=`<div class="mjc"><h3>${piege?'Piège !':n?'Bravo !':'Dommage…'}</h3>`
      +(piege?`<p class="mjg">Tu as touché un piège : le jeu s’arrête.</p>`:'')
      +(pen?`<p class="mjg">${n} but${n>1?'s':''} marqué${n>1?'s':''} : <b>+${n*2} 🪙</b></p>`
        :n?`<p class="mjg">Tu as récolté <b>${n} ${R.e} ${esc(R.n)}</b>.</p><p>Ils sont dans ton sac : vends-les chez Maman Béa ou garde-les pour tes chantiers.</p>`:`<p>Rien récolté cette fois.</p>`)
      +`<p class="mjinfo">Le mini-jeu se joue une seule fois par mission. Pour rejouer, reprends la mission.</p>`
      +`<button class="p" data-a="ok">Retour à l’exploration</button></div>`;
    opt.fin&&opt.fin(res);
    box.querySelector('[data-a=ok]').onclick=()=>{fermer();opt.fin&&opt.fin('fermer')};
  }
  function demarrer(){
    if(c.s==='penalty')return penalty();
    if(c.s==='peche')return pecher();
    if(c.s==='fall')return attraper();
    if(c.s==='memoire')return memoire();
    if(c.s==='empile')return empile();
    const dur=opt.duree||60;
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">${R.e} 0</span><span class="mjt">${dur} s</span></div><div class="mja"></div>`
      +(c.s==='peche'?`<button class="p mjl" data-a="lancer">🎣 Lancer</button>`:'');
    const arene=box.querySelector('.mja'),sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt');
    let n=0,t=dur,sp=.3,last=performance.now();const objs=[];
    const maj=()=>{sc.textContent=R.e+' '+n};
    const prendre=(o,piege)=>{
      if(o.fait)return;o.fait=true;o.el.remove();
      if(piege){play('ko');return fin(n,true)}else{n++;play('coin')}
      maj();
    };
    const creer=(piege)=>{
      const el=document.createElement('button');el.className='mjo';el.textContent=piege?PIEGE:R.e;el.dataset.p=piege?'1':'0';
      const o={el:el,piege:piege,fait:false,age:0};
      el.addEventListener('pointerdown',e=>{e.preventDefault();prendre(o,piege)});
      arene.appendChild(el);objs.push(o);return o;
    };
    const W=()=>arene.clientWidth||300,H=()=>arene.clientHeight||300;
    let cx=0;
    if(c.s==='peche'){
      const z=document.createElement('div');z.className='mjz';arene.appendChild(z);
      box.querySelector('[data-a=lancer]').onclick=()=>{
        const zone=W()*.14;let best=null,bd=1e9;
        objs.forEach(o=>{if(o.fait)return;const d=Math.abs(o.x+22-W()/2);if(d<zone&&d<bd){bd=d;best=o}});
        if(best)prendre(best,best.piege);else{play('ko')}
      };
    }
    const boucle=(now)=>{
      if(!vivant)return;
      const dt=Math.min(.2,(now-last)/1000);last=now;
      t-=dt;sp-=dt;
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      if(sp<=0){
        if(c.s==='fall'){sp=.45+Math.random()*.4;const o=creer(Math.random()<.18);o.x=8+Math.random()*(W()-60);o.y=-44;o.v=110+Math.random()*90}
        else if(c.s==='tap'){const el=dur-t;sp=Math.max(.28,.55-el*.004)+Math.random()*.3;if(objs.filter(o=>!o.fait).length<6){const o=creer(el>3&&Math.random()<.14);o.x=8+Math.random()*(W()-60);o.y=8+Math.random()*(H()-60);o.vie=Math.max(.8,1.5-el*.01)+Math.random()*.5;o.el.classList.add('pop')}}
        else{sp=.7+Math.random()*.7;const o=creer(Math.random()<.15);const g=Math.random()<.5;o.x=g?-44:W();o.y=24+Math.floor(Math.random()*3)*(H()-90)/2;o.v=(g?1:-1)*(90+Math.random()*110);if(!g)o.el.style.transform='scaleX(-1)'}
      }
      objs.forEach(o=>{
        if(o.fait)return;
        o.age+=dt;
        if(c.s==='fall'){o.y+=o.v*dt;if(o.y>H()){o.fait=true;o.el.remove()}}
        else if(c.s==='tap'){if(o.age>o.vie){o.fait=true;o.el.remove()}}
        else{o.x+=o.v*dt;if(o.x<-60||o.x>W()+20){o.fait=true;o.el.remove()}}
        if(!o.fait){o.el.style.left=o.x+'px';o.el.style.top=o.y+'px'}
      });
      if(t<=0){objs.forEach(o=>o.el.remove());return fin(n)}
      raf=requestAnimationFrame(boucle);
    };
    etat={n:()=>n};
    raf=requestAnimationFrame(boucle);
  }
  function pecher(){
    clear();
    const dur=opt.duree||60;
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">🐟 0</span><span class="mjt">${dur} s</span></div>`
      +`<div class="mja pe"><div class="ciel"><span class="bateau">🛶</span></div><div class="eau"></div><div class="canne"></div><div class="hame">🪝</div><p class="pmsg2">Touche l’eau à la profondeur du poisson, quand il passe sous la canne.</p></div>`;
    const arene=box.querySelector('.mja'),sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt');
    const canne=box.querySelector('.canne'),hame=box.querySelector('.hame'),msg=box.querySelector('.pmsg2');
    const W=()=>arene.clientWidth||300,H=()=>arene.clientHeight||300;
    let n=0,t=dur,sp=.2,last=performance.now();const poissons=[];
    let h={y:0,cible:0,etat:'repos'};
    const top0=()=>H()*.2;
    const poser=()=>{hame.style.top=h.y+'px';canne.style.height=Math.max(0,h.y-top0())+'px'};
    h.y=top0();poser();
    const SORTES=[['🐟',1,.62],['🐠',2,.2],['🐡',1,.1],['🥾',-1,.08]];
    const tirer=()=>{let r=Math.random(),a=0;for(const x of SORTES){a+=x[2];if(r<a)return x}return SORTES[0]};
    const flotte=(txt,x,y,bon)=>{const f=document.createElement('div');f.className='flot'+(bon?'':' mal');f.textContent=txt;f.style.left=x+'px';f.style.top=y+'px';arene.appendChild(f);setTimeout(()=>f.remove(),800)};
    arene.addEventListener('pointerdown',e=>{
      if(h.etat!=='repos')return;
      const r=arene.getBoundingClientRect();
      h.cible=Math.min(H()-30,Math.max(top0()+30,e.clientY-r.top));h.etat='descend';msg.style.display='none';
    });
    const boucle=(now)=>{
      if(!vivant)return;
      const dt=Math.min(.2,(now-last)/1000);last=now;t-=dt;sp-=dt;
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      if(sp<=0){
        sp=.6+Math.random()*.6;
        const so=tirer(),el=document.createElement('div');el.className='poi';el.textContent=so[0];arene.appendChild(el);
        const g=Math.random()<.5;
        poissons.push({el:el,e:so[0],v:so[1],x:g?-40:W(),y:top0()+50+Math.random()*(H()-top0()-110),vx:(g?1:-1)*(60+Math.random()*80),fait:false});
        if(!g)el.style.transform='scaleX(-1)';
      }
      poissons.forEach(o=>{
        if(o.fait)return;
        o.x+=o.vx*dt;o.y+=Math.sin(now/500+o.x/40)*10*dt;
        if(o.x<-70||o.x>W()+30){o.fait=true;o.el.remove();return}
        o.el.style.left=o.x+'px';o.el.style.top=o.y+'px';
      });
      if(h.etat==='descend'){
        h.y+=900*dt;
        if(h.y>=h.cible){
          h.y=h.cible;h.etat='monte';
          const cx=W()/2;let best=null,bd=1e9;
          poissons.forEach(o=>{if(o.fait)return;const dx=Math.abs(o.x+22-cx),dy=Math.abs(o.y+22-h.cible);if(dx<W()*.1+18&&dy<40&&dx+dy<bd){bd=dx+dy;best=o}});
          if(best){
            best.fait=true;best.el.remove();
            if(best.v>0){n+=best.v;play('coin');flotte('+'+best.v,cx,h.cible-20,true)}
            else{n=Math.max(0,n-1);play('ko');flotte('−1 🥾',cx,h.cible-20,false)}
            sc.textContent='🐟 '+n;
          }else{flotte('raté',cx,h.cible-20,false)}
        }
      }else if(h.etat==='monte'){
        h.y-=700*dt;if(h.y<=top0()){h.y=top0();h.etat='repos'}
      }
      poser();
      if(t<=0){poissons.forEach(o=>o.el.remove());return fin(n)}
      raf=requestAnimationFrame(boucle);
    };
    raf=requestAnimationFrame(boucle);
  }
  // ---- rattraper : le personnage se déplace (◀ ▶, flèches, glisser) pour attraper ce qui tombe ----
  function attraper(){
    clear();
    const dur=opt.duree||60,av=opt.sexe==='f'?'👧':'🧒';
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">${R.e} 0</span><span class="mjt">${dur} s</span></div>`
      +`<div class="mja"><div class="mjp"><span class="mjpa">${av}</span><span class="mjpb">🧺</span></div></div>`
      +`<div class="mjpad"><button class="mjb" data-d="-1" aria-label="Gauche">◀</button><button class="mjb" data-d="1" aria-label="Droite">▶</button></div>`;
    const arene=box.querySelector('.mja'),sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt'),jo=box.querySelector('.mjp');
    const W=()=>arene.clientWidth||300,H=()=>arene.clientHeight||300;
    let n=0,t=dur,sp=.6,last=performance.now(),px=W()/2,cible=null,pad=0;const objs=[];
    box.querySelectorAll('.mjb').forEach(b=>{
      const d=+b.dataset.d;
      b.addEventListener('pointerdown',e=>{e.preventDefault();pad=d});
      ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>{if(pad===d)pad=0}));
    });
    arene.addEventListener('pointerdown',e=>{cible=e.clientX-arene.getBoundingClientRect().left});
    arene.addEventListener('pointermove',e=>{if(cible!==null)cible=e.clientX-arene.getBoundingClientRect().left});
    ['pointerup','pointerleave','pointercancel'].forEach(ev=>arene.addEventListener(ev,()=>{cible=null}));
    const boucle=(now)=>{
      if(!vivant)return;
      const dt=Math.min(.2,(now-last)/1000);last=now;t-=dt;sp-=dt;
      const el=dur-t,w=W(),h=H();
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      // déplacement du joueur
      const dir=(touches.d?1:0)-(touches.g?1:0)+pad;
      px+=dir*360*dt;
      if(cible!==null)px+=(cible-px)*Math.min(1,14*dt);
      px=Math.max(34,Math.min(w-34,px));
      jo.style.left=(px-34)+'px';
      // apparition : de plus en plus vite
      if(sp<=0){
        sp=Math.max(.3,.72-el*.007)+Math.random()*.3;
        const piege=el>3&&Math.random()<.2;
        const e=document.createElement('div');e.className='mjo fl';e.textContent=piege?PIEGE:R.e;arene.appendChild(e);
        objs.push({el:e,piege:piege,x:8+Math.random()*(w-64),y:-56,v:Math.min(380,115+el*3.2+Math.random()*60),fait:false});
      }
      const hautPanier=h-86;
      for(const o of objs){
        if(o.fait)continue;
        o.y+=o.v*dt;
        if(o.y+50>=hautPanier&&o.y<=hautPanier+60&&Math.abs(o.x+28-px)<44){
          o.fait=true;o.el.remove();
          if(o.piege){play('ko');return fin(n,true)}
          n++;play('coin');sc.textContent=R.e+' '+n;continue;
        }
        if(o.y>h){o.fait=true;o.el.remove();continue}
        o.el.style.left=o.x+'px';o.el.style.top=o.y+'px';
      }
      if(t<=0){objs.forEach(o=>o.el.remove());return fin(n)}
      raf=requestAnimationFrame(boucle);
    };
    raf=requestAnimationFrame(boucle);
  }
  // ---- mémoire : retrouver les paires ----
  function memoire(){
    clear();
    const dur=opt.duree||60;
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">${R.e} 0</span><span class="mjt">${dur} s</span></div><div class="mja"><div class="mjm"></div></div>`;
    const grille=box.querySelector('.mjm'),sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt');
    const BASE=['🍎','⭐','🌳','🔑','🎒','🪁','🔔','🥁','🌺','🧭'];
    let n=0,t=dur,last=performance.now(),ouvertes=[],verrou=false,restantes=0;
    const melange=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
    const plateau=()=>{
      const sy=[R.e,...melange(BASE.filter(x=>x!==R.e)).slice(0,7)];
      const cartes=melange([...sy,...sy]);restantes=8;ouvertes=[];verrou=false;
      grille.innerHTML=cartes.map((e,i)=>`<button class="mjcard" data-e="${e}" aria-label="carte ${i+1}"><span>?</span></button>`).join('');
      grille.querySelectorAll('.mjcard').forEach(b=>b.addEventListener('pointerdown',ev=>{
        ev.preventDefault();
        if(verrou||b.classList.contains('on')||b.classList.contains('ok'))return;
        b.classList.add('on');b.firstChild.textContent=b.dataset.e;ouvertes.push(b);
        if(ouvertes.length===2){
          verrou=true;const [x,y]=ouvertes;
          if(x.dataset.e===y.dataset.e){
            setTimeout(()=>{if(!vivant)return;x.classList.add('ok');y.classList.add('ok');n++;play('coin');sc.textContent=R.e+' '+n;ouvertes=[];verrou=false;
              if(--restantes===0)setTimeout(()=>{if(vivant)plateau()},400)},350);
          }else setTimeout(()=>{if(!vivant)return;[x,y].forEach(k=>{k.classList.remove('on');k.firstChild.textContent='?'});ouvertes=[];verrou=false},750);
        }
      }));
    };
    plateau();
    const boucle=(now)=>{
      if(!vivant)return;
      const dt=Math.min(.2,(now-last)/1000);last=now;t-=dt;
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      if(t<=0)return fin(n);
      raf=requestAnimationFrame(boucle);
    };
    raf=requestAnimationFrame(boucle);
  }
  // ---- empiler : poser les blocs bien droit ----
  function empile(){
    clear();
    const dur=opt.duree||60;
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">${R.e} 0</span><span class="mjt">${dur} s</span></div><div class="mja mje"><p class="mjconseil">Touche l’écran pour poser le bloc</p></div>`;
    const arene=box.querySelector('.mja'),sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt');
    const W=arene.clientWidth||300,H=arene.clientHeight||300,bh=32;
    let n=0,t=dur,last=performance.now(),dep=0;
    const blocs=[];
    const faire=(x,w,i)=>{const e=document.createElement('div');e.className='mjblk';e.style.background=`hsl(${(18+i*23)%360} 62% 52%)`;e.style.width=w+'px';e.style.left=x+'px';arene.appendChild(e);return e};
    const ytop=(i)=>H-12-(i+1)*bh+dep;
    const base={x:W*.2,w:W*.6,el:null};base.el=faire(base.x,base.w,0);base.el.style.top=ytop(0)+'px';blocs.push(base);
    let cur={x:0,w:base.w,v:150,dir:1,el:faire(0,base.w,1)};cur.el.style.top=ytop(1)+'px';
    const placer=()=>{
      const bas=blocs[blocs.length-1];
      const l=Math.max(cur.x,bas.x),r=Math.min(cur.x+cur.w,bas.x+bas.w),ov=r-l;
      if(ov<8){cur.el.remove();return fin(n)}
      const parfait=Math.abs(cur.x-bas.x)<6;
      const x=parfait?bas.x:l,w=parfait?bas.w:ov;
      cur.el.style.left=x+'px';cur.el.style.width=w+'px';
      blocs.push({x:x,w:w,el:cur.el});
      n+=parfait?2:1;play('coin');sc.textContent=R.e+' '+n;
      const haut=blocs.length+1;
      dep=Math.max(0,(haut*bh+12)-H*.62);
      blocs.forEach((b,i)=>{b.el.style.top=ytop(i)+'px'});
      const e=faire(dir0(),w,blocs.length);
      cur={x:dir0(),w:w,v:Math.min(430,150+n*9),dir:cur.dir*-1,el:e};
      e.style.top=ytop(blocs.length)+'px';
    };
    const dir0=()=>0;
    arene.addEventListener('pointerdown',e=>{e.preventDefault();placer()});
    crochet=(k)=>{if(k===' '||k==='Enter'||k==='ArrowDown'){placer();return true}return false};
    const boucle=(now)=>{
      if(!vivant)return;
      const dt=Math.min(.2,(now-last)/1000);last=now;t-=dt;
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      cur.x+=cur.v*cur.dir*dt;
      if(cur.x<0){cur.x=0;cur.dir=1}
      if(cur.x+cur.w>W){cur.x=W-cur.w;cur.dir=-1}
      cur.el.style.left=cur.x+'px';
      if(t<=0)return fin(n);
      raf=requestAnimationFrame(boucle);
    };
    raf=requestAnimationFrame(boucle);
  }
  // ---- penalty : le joueur court et tire pendant une minute ----
  function penalty(){
    clear();
    const dur=opt.duree||60,pers=opt.sexe==='f'?'🏃‍♀️':'🏃‍♂️',att=opt.sexe==='f'?'🧍‍♀️':'🧍‍♂️';
    let buts=0,tirs=0,bloque=false,t=dur,last=performance.now(),fini=false;
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">⚽ 0 but</span><span class="mjt">${dur} s</span></div>`
      +`<div class="mja pen"><div class="but">`+['gauche','centre','droite'].map((z,i)=>`<button class="zone" data-z="${i}" aria-label="${z}"></button>`).join('')+`<div class="gb" id="gb">🧤</div></div>`
      +`<div class="bal" id="bal">⚽</div><div class="joueur" id="jo">${att}</div><div class="choc" id="choc">💥</div><p class="pmsg">Choisis où tirer : gauche, centre ou droite.</p></div>`;
    const sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt'),msg=box.querySelector('.pmsg');
    const gb=box.querySelector('#gb'),bal=box.querySelector('#bal'),jo=box.querySelector('#jo'),choc=box.querySelector('#choc');
    const POS=[22,50,78],GK=[17,50,83]; // position horizontale du ballon (terrain) et du gardien (but), en %
    const pose=(el,props)=>Object.assign(el.style,props);
    const repos=()=>{
      pose(bal,{transition:'none',left:'50%',bottom:'7%',transform:'translateX(-50%) scale(1)'});
      pose(jo,{transition:'none',left:'14%',bottom:'3%'});jo.textContent=att;
      pose(gb,{transition:'none',left:'50%',transform:'translateX(-50%) rotate(0deg)'});
      choc.style.opacity=0;
    };
    repos();
    const tirer=(z)=>{
      if(bloque||fini)return;bloque=true;tirs++;
      msg.textContent='';
      const bon=Math.min(.68,.36+buts*.02);
      const g=Math.random()<bon?z:[0,1,2].filter(x=>x!==z)[Math.floor(Math.random()*2)];
      // 1. le joueur court vers le ballon
      jo.textContent=pers;
      pose(jo,{transition:'left .5s ease-in',left:'41%'});
      setTimeout(()=>{
        if(!vivant||!bal.isConnected)return;
        // 2. frappe : le ballon part, le gardien plonge
        play('coin');
        jo.textContent=att;pose(jo,{transform:'rotate(-14deg)'});
        pose(choc,{opacity:1,left:'46%',bottom:'9%'});
        pose(bal,{transition:'all .55s cubic-bezier(.2,.7,.3,1)',left:POS[z]+'%',bottom:'60%',transform:'translateX(-50%) scale(.5)'});
        pose(gb,{transition:'all .45s ease-out',left:GK[g]+'%',transform:'translateX(-50%) rotate('+(g===1?0:g===0?-70:70)+'deg)'});
        const but=g!==z;
        setTimeout(()=>{
          if(!vivant||!msg.isConnected)return;
          choc.style.opacity=0;jo.style.transform='';
          if(but){buts++;sc.textContent='⚽ '+buts+' but'+(buts>1?'s':'');msg.textContent='⚽ BUT !'}
          else{play('ko');msg.textContent='🧤 Arrêté par le gardien…'}
          setTimeout(()=>{
            if(!vivant)return;
            bloque=false;
            if(t<=0){fini=true;return fin(buts)}
            repos();msg.textContent='Choisis où tirer : gauche, centre ou droite.';
          },1000);
        },650);
      },520);
    };
    box.querySelectorAll('.zone').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();tirer(+b.dataset.z)}));
    crochet=(k)=>{
      if(k==='ArrowLeft'||k==='a'||k==='q'){tirer(0);return true}
      if(k==='ArrowRight'||k==='d'){tirer(2);return true}
      if(k==='ArrowUp'||k==='ArrowDown'||k===' '||k==='Enter'){tirer(1);return true}
      return false;
    };
    const boucle=(now)=>{
      if(!vivant)return;
      const dt=Math.min(.2,(now-last)/1000);last=now;t-=dt;
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      if(t<=0&&!bloque){fini=true;return fin(buts)}
      raf=requestAnimationFrame(boucle);
    };
    raf=requestAnimationFrame(boucle);
  }
  intro();
  return {fermer:fermer};
}
