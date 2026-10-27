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
  papier:{e:'📄',n:'papier',p:1}
};

// style : fall (ça tombe), tap (ça apparaît), peche (timing), penalty (tirs au but)
const L=(r,s,t,d)=>({r:r,s:s,t:t,d:d});
export const MJ={
  marche:L('legume','fall','Récolte au marché','Rattrape les légumes qui tombent des étals. Évite les cailloux !'),
  fleuve:L('poisson','peche','Pêche sur le fleuve','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  sante:L('plante','tap','Plantes médicinales','Touche les plantes qui poussent pour les cueillir avant qu’elles disparaissent.'),
  univ:L('papier','fall','Feuilles du campus','Rattrape les feuilles de cours qui s’envolent.'),
  biblio:L('papier','tap','Rangement de la bibliothèque','Touche les feuilles et livres égarés pour les ramasser.'),
  gare:L('fer','tap','Rails de la gare','Ramasse les pièces de fer tombées le long de la voie.'),
  ferme:L('legume','tap','Récolte à la ferme','Touche les légumes mûrs avant qu’ils ne se cachent.'),
  foret:L('bois','fall','Bois de la forêt','Rattrape les branches qui tombent. Attention aux pierres !'),
  musee:L('sable','tap','Fouilles du musée','Touche les taches de sable pour fouiller les vestiges.'),
  stade:L('','penalty','Penalty au stade','Tire 5 penalties : touche la zone du but où tu veux frapper !'),
  mine:L('cuivre','tap','Mine de cuivre','Frappe les filons de cuivre en les touchant.'),
  observatoire:L('fer','fall','Météorites','Rattrape les morceaux de fer tombés du ciel.'),
  port:L('fer','tap','Quai du port','Ramasse les pièces de fer sur le quai.'),
  parlement:L('papier','fall','Papiers du parlement','Rattrape les documents qui s’envolent.'),
  aeroport:L('fer','fall','Pièces d’avion','Rattrape les pièces de fer tombées de la soute.'),
  inga:L('ciment','tap','Chantier du barrage','Touche les sacs de ciment pour les mettre à l’abri.'),
  virunga:L('plante','tap','Plantes de Virunga','Touche les plantes rares pour les cueillir.'),
  zongo:L('bois','tap','Bois des chutes','Touche les troncs portés par l’eau pour les récupérer.'),
  atelier:L('brique','tap','Atelier du maçon','Touche les briques cuites pour les empiler.'),
  wagenia:L('poisson','peche','Pêche Wagenia','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  garamba:L('plante','tap','Savane de Garamba','Touche les herbes utiles pour les cueillir.'),
  tanganyika:L('poisson','peche','Pêche sur le lac','Touche l’eau, à la profondeur du poisson, quand il passe sous la canne.'),
  sciences:L('cuivre','fall','Laboratoire','Rattrape les fils de cuivre qui tombent.'),
  rumba:L('cafe','fall','Café de la rumba','Rattrape les grains de café qui tombent.'),
  pompiers:L('sable','fall','Seaux de sable','Rattrape les seaux de sable lancés par les pompiers.'),
  poste:L('papier','tap','Courrier de la poste','Touche les lettres égarées pour les ramasser.'),
  recyclage:L('brique','fall','Recyclage de briques','Rattrape les briques récupérées sur les décombres.'),
  numerique:L('cuivre','tap','Câbles du numérique','Touche les câbles de cuivre pour les récupérer.'),
  place:L('brique','tap','Pavés de la place','Touche les briques de la place pour les récupérer.'),
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
  const fermer=()=>{vivant=false;clear();box.remove()};

  function intro(){
    clear();
    box.innerHTML=`<div class="mjc"><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p>`
      +(R?`<p class="mjg">Tu récoltes : <b>${R.e} ${esc(R.n)}</b> (à vendre ${R.p} 🪙 pièce chacun chez Maman Béa).</p>`:`<p class="mjg">Chaque but marqué rapporte <b>3 🪙</b>.</p>`)
      +`<button class="p" data-a="go">▶ Jouer</button><button class="s" data-a="non">Plus tard</button></div>`;
    box.querySelector('[data-a=go]').onclick=demarrer;
    box.querySelector('[data-a=non]').onclick=()=>{fermer();opt.fin&&opt.fin(null)};
  }
  function fin(n){
    clear();
    const res={res:c.r||'',n:n,pieces:c.s==='penalty'?n*3:0};
    play(n?'win':'ko');
    box.innerHTML=`<div class="mjc"><h3>${n?'Bravo !':'Dommage…'}</h3>`
      +(c.s==='penalty'?`<p class="mjg">${n} but${n>1?'s':''} sur 5 : <b>+${n*3} 🪙</b></p>`
        :n?`<p class="mjg">Tu as récolté <b>${n} ${R.e} ${esc(R.n)}</b>.</p><p>Ils sont dans ton sac : vends-les chez Maman Béa ou garde-les pour tes chantiers.</p>`:`<p>Rien récolté cette fois. Réessaie !</p>`)
      +`<button class="p" data-a="re">↻ Rejouer</button><button class="s" data-a="ok">Retour à l’exploration</button></div>`;
    opt.fin&&opt.fin(res);
    box.querySelector('[data-a=re]').onclick=demarrer;
    box.querySelector('[data-a=ok]').onclick=()=>{fermer();opt.fin&&opt.fin('fermer')};
  }
  function demarrer(){
    if(c.s==='penalty')return penalty();
    if(c.s==='peche')return pecher();
    const dur=opt.duree||20;
    box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">${R.e} 0</span><span class="mjt">${dur} s</span></div><div class="mja"></div>`
      +(c.s==='peche'?`<button class="p mjl" data-a="lancer">🎣 Lancer</button>`:'');
    const arene=box.querySelector('.mja'),sc=box.querySelector('.mjs'),tm=box.querySelector('.mjt');
    let n=0,t=dur,sp=.3,last=performance.now();const objs=[];
    const maj=()=>{sc.textContent=R.e+' '+n};
    const prendre=(o,piege)=>{
      if(o.fait)return;o.fait=true;o.el.remove();
      if(piege){n=Math.max(0,n-1);play('ko')}else{n++;play('coin')}
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
      const dt=Math.min(.1,(now-last)/1000);last=now;
      t-=dt;sp-=dt;
      tm.textContent=Math.max(0,Math.ceil(t))+' s';
      if(sp<=0){
        if(c.s==='fall'){sp=.45+Math.random()*.4;const o=creer(Math.random()<.18);o.x=8+Math.random()*(W()-60);o.y=-44;o.v=110+Math.random()*90}
        else if(c.s==='tap'){sp=.5+Math.random()*.35;if(objs.filter(o=>!o.fait).length<5){const o=creer(Math.random()<.14);o.x=8+Math.random()*(W()-60);o.y=8+Math.random()*(H()-60);o.vie=1.3+Math.random()*.7;o.el.classList.add('pop')}}
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
    const dur=opt.duree||20;
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
      const dt=Math.min(.1,(now-last)/1000);last=now;t-=dt;sp-=dt;
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
  function penalty(){
    clear();
    let tir=0,buts=0,bloque=false;
    const zones=['gauche','centre','droite'];
    const dessiner=(msg)=>{
      box.innerHTML=`<div class="mjh"><b>${esc(c.t)}</b><span class="mjs">⚽ ${buts} but${buts>1?'s':''}</span><span class="mjt">tir ${Math.min(tir+1,5)}/5</span></div>`
        +`<div class="mja pen"><div class="but">`+zones.map((z,i)=>`<button class="zone" data-z="${i}" aria-label="${z}"></button>`).join('')+`<div class="gb" id="gb">🧤</div></div><div class="bal">⚽</div><p class="pmsg">${esc(msg)}</p></div>`;
      box.querySelectorAll('.zone').forEach(b=>b.onclick=()=>tirer(+b.dataset.z));
    };
    const tirer=(z)=>{
      if(bloque)return;bloque=true;
      const g=Math.random()<.45?1:Math.floor(Math.random()*3);
      const gb=box.querySelector('#gb'),bal=box.querySelector('.bal');
      gb.style.left=(g*33.3+16.6)+'%';bal.style.left=(z*33.3+16.6)+'%';bal.style.bottom='62%';bal.style.transform='translateX(-50%) scale(.55)';
      const but=g!==z;
      if(but){buts++;play('coin')}else play('ko');
      setTimeout(()=>{
        if(!vivant)return;
        tir++;bloque=false;
        if(tir>=5)return fin(buts);
        dessiner(but?'⚽ BUT !':'🧤 Arrêté par le gardien…');
      },1100);
      box.querySelector('.pmsg').textContent=but?'⚽ BUT !':'🧤 Arrêté par le gardien…';
    };
    dessiner('Choisis où tirer : gauche, centre ou droite.');
  }
  intro();
  return {fermer:fermer};
}
