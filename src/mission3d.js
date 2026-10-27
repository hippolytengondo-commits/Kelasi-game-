import * as THREE from 'three';

// Moteur des missions en 3D : les réponses flottent dans l'arène, le joueur marche dessus pour choisir.
// Types d'étapes : choix (réponse parmi plusieurs), collecte (attraper les bons éléments), ordre (mots dans l'ordre),
// tri (porter chaque objet dans le bon panier), panier (préparer une commande puis calculer le total).
const DW=.55;            // secondes passées sur une plateforme pour la choisir
const RAYON=1.35;
const COULEURS=['#2e86de','#e67e22','#8e44ad','#16a085','#c0392b','#f1c40f'];
const rnd=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);

function etiquette(texte,opt){
  opt=opt||{};
  const c=document.createElement('canvas');c.width=512;c.height=opt.haut||224;
  const x=c.getContext('2d'),W=c.width,H=c.height;
  x.fillStyle='rgba(255,255,255,.95)';x.strokeStyle=opt.bord||'#1f7a4d';x.lineWidth=10;
  const rr=(a,b,w,h,r)=>{x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()};
  rr(8,8,W-16,H-16,34);x.fill();x.stroke();
  x.fillStyle='#1d2b24';x.textAlign='center';x.textBaseline='middle';
  const mots=String(texte).split(' ');let taille=opt.taille||120,lignes=[String(texte)];
  const mesure=()=>{x.font='800 '+taille+'px system-ui,-apple-system,Segoe UI,Roboto,sans-serif';return Math.max(...lignes.map(l=>x.measureText(l).width))};
  while(mesure()>W-60&&taille>34){
    if(lignes.length===1&&mots.length>1){const m=Math.ceil(mots.length/2);lignes=[mots.slice(0,m).join(' '),mots.slice(m).join(' ')];}
    else taille-=6;
    if(lignes.length===2&&mots.length>3&&mesure()>W-60&&taille<=60){const t=Math.ceil(mots.length/3);lignes=[mots.slice(0,t).join(' '),mots.slice(t,2*t).join(' '),mots.slice(2*t).join(' ')]}
  }
  const lh=taille*1.08,y0=H/2-(lignes.length-1)*lh/2+4;
  lignes.forEach((l,i)=>x.fillText(l,W/2,y0+i*lh));
  if(opt.sous){x.font='700 36px system-ui,sans-serif';x.fillStyle=opt.bord||'#1f7a4d';x.fillText(opt.sous,W/2,H-34)}
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
  return {tex,aspect:H/W};
}

export function createMission3D(env){
  const scene=env.scene;
  let S=null;
  const groupe=new THREE.Group();

  function jeton(texte,x,z,opt){
    opt=opt||{};
    const g=new THREE.Group();g.position.set(x,0,z);
    const col=new THREE.Color(opt.couleur||COULEURS[Math.floor(Math.random()*COULEURS.length)]);
    const pad=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.25,.22,32),new THREE.MeshStandardMaterial({color:col,roughness:.4,emissive:col,emissiveIntensity:.35}));pad.position.y=.12;pad.castShadow=true;pad.receiveShadow=true;g.add(pad);
    const anneau=new THREE.Mesh(new THREE.RingGeometry(1.3,1.5,40),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.7,side:THREE.DoubleSide}));anneau.rotation.x=-Math.PI/2;anneau.position.y=.26;g.add(anneau);
    const rempli=new THREE.Mesh(new THREE.CircleGeometry(1.15,32),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.0,side:THREE.DoubleSide}));rempli.rotation.x=-Math.PI/2;rempli.position.y=.27;g.add(rempli);
    const faisceau=new THREE.Mesh(new THREE.CylinderGeometry(.95,1.05,3.6,20,1,true),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:.14,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}));faisceau.position.y=1.9;g.add(faisceau);
    const e=etiquette(texte,{bord:'#'+col.getHexString(),sous:opt.sous,haut:opt.sous?250:224,taille:opt.taille});
    const lw=opt.large||Math.min(4.4,Math.max(2.2,1.6+String(texte).length*.13));
    const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:e.tex,transparent:true,depthWrite:false}));sp.scale.set(lw,lw*e.aspect,1);sp.position.y=2.55+lw*e.aspect*.4;g.add(sp);
    g.userData={texte,pad,anneau,rempli,faisceau,sp,col,dwell:0,actif:true,sortir:false,x0:x,z0:z,phase:Math.random()*6,lw,sous:opt.sous};
    Object.assign(g.userData,opt.donnees||{});
    groupe.add(g);S.jetons.push(g);return g;
  }
  function reetiqueter(j,texte,sous){
    const u=j.userData,e=etiquette(texte,{bord:'#'+u.col.getHexString(),sous:sous,haut:sous?250:224});
    u.sp.material.map.dispose();u.sp.material.map=e.tex;u.sp.material.needsUpdate=true;u.sp.scale.set(u.lw,u.lw*e.aspect,1);u.texte=texte;
  }
  function eclat(x,y,z,couleur,n){
    n=n||40;const pos=new Float32Array(n*3),vit=[];
    for(let i=0;i<n;i++){pos[i*3]=x;pos[i*3+1]=y;pos[i*3+2]=z;const a=Math.random()*6.28,b=Math.random()*1.2+.3,v=2+Math.random()*3;vit.push(Math.cos(a)*v,b*v*1.4,Math.sin(a)*v)}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
    const pts=new THREE.Points(geo,new THREE.PointsMaterial({color:couleur,size:.28,transparent:true,opacity:1,depthWrite:false,blending:THREE.AdditiveBlending}));
    groupe.add(pts);S.fx.push({pts,vit,vie:0});
  }
  function vider(){
    while(S.jetons.length){const j=S.jetons.pop();groupe.remove(j);j.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){if(o.material.map)o.material.map.dispose();o.material.dispose()}})}
    S.porte=null;
  }
  const hud=(p)=>env.hud(Object.assign({},p));
  const voix=t=>{S.voix=t;env.voix(t)};

  // ---------- préparation d'une étape ----------
  function suivante(){
    vider();S.i++;S.err=0;S.msg='';
    if(S.i>=S.etapes.length){S.fini=true;env.fin();return}
    const e=S.etapes[S.i];S.etape=e;
    const prog=(S.i+1)+' / '+S.etapes.length;
    if(e.type==='choix')preparerChoix(e,prog);
    else if(e.type==='collecte'){
      const items=rnd(e.items.map((it,i)=>({l:it[0],ok:!!it[1]})));
      S.besoin=items.filter(i=>i.ok).length;S.trouve=0;
      const n=items.length,cols=Math.min(5,Math.ceil(n/2)),rangs=Math.ceil(n/cols);
      items.forEach((it,k)=>{const c=k%cols,rg=Math.floor(k/cols),x=(c-(cols-1)/2)*(cols>4?3.5:4.2),z=-1.5-rg*3.6+(rangs>1?1.8:0);
        jeton(it.l,x,z,{couleur:COULEURS[k%COULEURS.length],large:2.6,taille:130,donnees:{ok:it.ok}})});
      hud({prog:prog,q:e.consigne,sous:'0 / '+S.besoin,msg:''});voix(e.consigne);
    }else if(e.type==='ordre'){
      S.k=0;
      const mots=rnd(e.mots.map(m=>m));
      const n=mots.length,cols=Math.min(4,n),rangs=Math.ceil(n/cols);
      mots.forEach((m,k)=>{const c=k%cols,rg=Math.floor(k/cols),x=(c-(Math.min(cols,n-rg*cols)-1)/2)*4.4,z=-1.5-rg*3.6+(rangs>1?1.8:0);
        jeton(m,x,z,{couleur:COULEURS[k%COULEURS.length],large:3.2,taille:120})});
      hud({prog:prog,q:e.consigne,sous:'Ma phrase : …',msg:''});voix(e.consigne);
    }else if(e.type==='tri'){
      S.places=0;
      const objs=rnd(e.objets.map(o=>o));const n=objs.length,cols=Math.min(4,n),rangs=Math.ceil(n/cols);
      objs.forEach((o,k)=>{const c=k%cols,rg=Math.floor(k/cols),x=(c-(Math.min(cols,n-rg*cols)-1)/2)*3.8,z=.8-rg*3.4;
        jeton(o[0],x,z,{couleur:'#f1c40f',large:2.6,taille:120,donnees:{genre:'objet',cat:o[1]}})});
      const m=e.paniers.length;
      e.paniers.forEach((b,k)=>{const x=(k-(m-1)/2)*(m>2?6.6:9),z=-8.2;
        jeton('📦 '+b,x,z,{couleur:COULEURS[k%COULEURS.length],large:3.6,taille:110,donnees:{genre:'panier',cat:b}})});
      hud({prog:prog,q:e.consigne,sous:'Touche un objet pour le porter, puis va dans son panier.',msg:''});voix(e.consigne);
    }else if(e.type==='panier'){
      S.qte={};
      const n=e.articles.length;
      e.articles.forEach((a,k)=>{const x=(k-(n-1)/2)*4.6;
        jeton(a.e+' '+a.n,x,-2,{couleur:COULEURS[k%COULEURS.length],large:3.2,taille:110,sous:a.p+' FC · ×0',donnees:{genre:'article',art:a}})});
      jeton('✔ Commande prête',7.4,4.5,{couleur:'#27ae60',large:3.4,taille:100,donnees:{genre:'valider'}});
      jeton('↺ Vider',-7.4,4.5,{couleur:'#7f8c8d',large:2.4,taille:110,donnees:{genre:'vider'}});
      hud({prog:prog,q:e.consigne,sous:'Chaque passage sur un article en ajoute un.',msg:''});voix(e.consigne);
    }
  }
  function preparerChoix(e,prog){
    const ch=rnd(e.choices.slice());const n=ch.length;
    ch.forEach((c,k)=>{const x=(k-(n-1)/2)*(n>3?4.9:5.6),z=-2.5+Math.abs(k-(n-1)/2)*.6;
      jeton(c,x,z,{couleur:COULEURS[k%COULEURS.length],large:Math.min(4.6,Math.max(2.8,1.7+c.length*.11)),taille:110,donnees:{ok:c===e.answer}})});
    hud({prog:prog,q:e.q,sous:'Marche sur la bonne réponse.',msg:''});
    voix(e.q+' Réponses : '+ch.join(', '));
  }

  // ---------- événements ----------
  function reussite(j,message){
    const e=S.etape;
    eclat(j.position.x,1.2,j.position.z,0x6bff9e,60);
    env.sfx('ok');env.etape(S.err===0,e.type);
    S.attente=2.3;S.apres=suivante;S.bloque=true;
    hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.q||e.consigne,sous:'',msg:message||'Bravo !'});
    if(message)voix(message);
  }
  function faux(j,message,rester){
    S.err++;env.erreur();env.sfx('ko');
    const u=j.userData;
    eclat(j.position.x,1.0,j.position.z,0xff6b6b,24);
    u.pad.material.color.set('#c0392b');u.pad.material.emissive.set('#c0392b');
    S.secoue=j;S.secT=.5;
    if(!rester){u.actif=false;u.sp.material.opacity=.35}
    else setTimeout(()=>{if(S&&u.pad){u.pad.material.color.copy(u.col);u.pad.material.emissive.copy(u.col)}},800);
    hud({prog:(S.i+1)+' / '+S.etapes.length,q:S.etape.q||S.etape.consigne,sous:S.sousAff||'',msg:message||'Pas tout à fait. Réfléchis encore !'});
  }
  function declencher(j){
    const e=S.etape,u=j.userData;
    if(e.type==='choix'||S.phaseTotal){
      if(u.ok)reussite(j,e.exp||(S.phaseTotal&&e.total.exp)||'Bravo !');else faux(j,e.indice&&S.err>0?e.indice:null);
      return;
    }
    if(e.type==='collecte'){
      if(u.ok){u.actif=false;eclat(j.position.x,1.4,j.position.z,0xfff08a,30);j.visible=false;env.sfx('ok');S.trouve++;
        hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.consigne,sous:S.trouve+' / '+S.besoin,msg:''});
        if(S.trouve>=S.besoin)reussite(j,e.exp||'Tu as tout trouvé, bravo !')}
      else faux(j,e.indice||'Celui-là ne convient pas. Regarde bien la consigne !',true);
      return;
    }
    if(e.type==='ordre'){
      if(u.texte===e.rep[S.k]){u.actif=false;j.visible=false;eclat(j.position.x,1.4,j.position.z,0xfff08a,30);env.sfx('ok');S.k++;
        const ph=e.rep.slice(0,S.k).join(' ');
        hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.consigne,sous:'Ma phrase : '+ph+(S.k<e.rep.length?' …':''),msg:''});
        if(S.k>=e.rep.length)reussite(j,'Bravo ! La phrase est : « '+e.rep.join(' ')+' ».')}
      else faux(j,e.indice||'Ce n’est pas le bon mot pour le moment. Réfléchis à l’ordre.',true);
      return;
    }
    if(e.type==='tri'){
      if(u.genre==='objet'&&!S.porte){S.porte=j;u.actif=false;u.pad.visible=false;u.anneau.visible=false;u.faisceau.visible=false;env.sfx('ok');
        hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.consigne,sous:'Tu portes « '+u.texte+' » : va dans le bon panier.',msg:''})}
      else if(u.genre==='panier'&&S.porte){
        const p=S.porte;
        if(p.userData.cat===u.cat){eclat(j.position.x,1.6,j.position.z,0x6bff9e,40);p.visible=false;S.porte=null;S.places++;env.sfx('ok');
          hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.consigne,sous:S.places+' / '+e.objets.length+' rangés',msg:''});
          if(S.places>=e.objets.length)reussite(j,e.exp||'Tout est bien rangé, bravo !')}
        else{S.err++;env.erreur();env.sfx('ko');eclat(j.position.x,1.2,j.position.z,0xff6b6b,24);
          p.position.set(p.userData.x0,0,p.userData.z0);p.userData.pad.visible=true;p.userData.anneau.visible=true;p.userData.faisceau.visible=true;p.userData.actif=true;S.porte=null;
          hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.consigne,sous:'Touche un objet pour le porter, puis va dans son panier.',msg:e.indice||('« '+p.userData.texte+' » ne va pas dans ce panier. L’objet est revenu à sa place.')})}
      }
      return;
    }
    if(e.type==='panier'){
      if(u.genre==='article'){S.qte[u.art.n]=Math.min(9,(S.qte[u.art.n]||0)+1);reetiqueter(j,u.art.e+' '+u.art.n,u.art.p+' FC · ×'+S.qte[u.art.n]);env.sfx('ok')}
      else if(u.genre==='vider'){S.qte={};S.jetons.forEach(t=>{if(t.userData.genre==='article')reetiqueter(t,t.userData.art.e+' '+t.userData.art.n,t.userData.art.p+' FC · ×0')});env.sfx('ok')}
      else if(u.genre==='valider'){
        const ok=e.articles.every(a=>(S.qte[a.n]||0)===(e.cible[a.n]||0));
        if(ok){
          eclat(j.position.x,1.4,j.position.z,0x6bff9e,40);env.sfx('ok');
          vider();S.phaseTotal=true;
          const ch=rnd(e.total.c.slice());
          ch.forEach((c,k)=>{const x=(k-(ch.length-1)/2)*4.9;jeton(c,x,-2.5+Math.abs(k-(ch.length-1)/2)*.6,{couleur:COULEURS[k%COULEURS.length],large:3,taille:120,donnees:{ok:c===e.total.a}})});
          hud({prog:(S.i+1)+' / '+S.etapes.length,q:e.total.q,sous:'Marche sur le bon total.',msg:'La commande est prête !'});
          voix(e.total.q+' Réponses : '+ch.join(', '));
        }else faux(j,'Relis la commande du marchand : il manque ou il y a trop d’articles.',true);
      }
      return;
    }
  }

  return {
    actif:()=>!!S,
    etat:()=>S,
    groupe:groupe,
    demarrer(etapes){
      if(S)this.arreter();
      S={etapes:etapes,i:-1,jetons:[],fx:[],err:0,attente:0,apres:null,bloque:false,phaseTotal:false,porte:null,secoue:null,secT:0,voix:''};
      scene.add(groupe);suivante();
    },
    arreter(){
      if(!S)return;
      vider();S.fx.forEach(f=>{groupe.remove(f.pts);f.pts.geometry.dispose()});
      scene.remove(groupe);S=null;
    },
    reecouter(){if(S&&S.voix)env.voix(S.voix,true)},
    mettreAJour(dt,t,p){
      if(!S||S.fini)return;
      // effets
      for(let i=S.fx.length-1;i>=0;i--){
        const f=S.fx[i];f.vie+=dt;const pos=f.pts.geometry.attributes.position;
        for(let k=0;k<pos.count;k++){pos.setX(k,pos.getX(k)+f.vit[k*3]*dt);pos.setY(k,pos.getY(k)+f.vit[k*3+1]*dt-6*dt*f.vie);pos.setZ(k,pos.getZ(k)+f.vit[k*3+2]*dt)}
        pos.needsUpdate=true;f.pts.material.opacity=Math.max(0,1-f.vie/.9);
        if(f.vie>.9){groupe.remove(f.pts);f.pts.geometry.dispose();S.fx.splice(i,1)}
      }
      // animation des plateformes
      S.jetons.forEach(j=>{const u=j.userData;
        u.sp.position.y=2.55+u.lw*u.sp.scale.y/u.lw*.4+Math.sin(t*2+u.phase)*.12;
        u.anneau.rotation.z=t*.6+u.phase;u.faisceau.material.opacity=u.actif?.12+.05*Math.sin(t*3+u.phase):.03});
      if(S.secoue&&S.secT>0){S.secT-=dt;S.secoue.position.x=S.secoue.userData.x0+Math.sin(S.secT*60)*.12;if(S.secT<=0)S.secoue.position.x=S.secoue.userData.x0}
      // objet porté
      if(S.porte){S.porte.position.set(p.x,0,p.z);S.porte.userData.sp.position.y=3.3}
      if(S.attente>0){S.attente-=dt;if(S.attente<=0&&S.apres){const f=S.apres;S.apres=null;S.bloque=false;S.phaseTotal=false;f()}return}
      if(S.bloque)return;
      // plateformes
      for(const j of S.jetons){
        const u=j.userData;if(!u.actif||!j.visible)continue;
        const d=Math.hypot(p.x-j.position.x,p.z-j.position.z);
        if(u.sortir){if(d>RAYON+.7)u.sortir=false;u.dwell=0;u.rempli.material.opacity=0;continue}
        if(S.porte&&u.genre==='objet')continue;
        if(d<RAYON){u.dwell+=dt;u.rempli.material.opacity=.25+.45*Math.min(1,u.dwell/DW);u.rempli.scale.setScalar(.3+.7*Math.min(1,u.dwell/DW))}
        else{u.dwell=Math.max(0,u.dwell-dt*2);u.rempli.material.opacity=u.dwell>0?.25:0}
        if(u.dwell>=DW){u.dwell=0;u.rempli.material.opacity=0;u.sortir=true;declencher(j);if(S.bloque)break}
      }
    }
  };
}
