import * as THREE from 'three';
import {waxTexture, noiseTexture} from './textures.js';

// Personnage 3D articulé. Les pieds sont à y = 0, le visage regarde +z.
const mat=(color,r,m)=>new THREE.MeshStandardMaterial({color:color,roughness:r===undefined?.85:r,metalness:m||0});
const caps=(r,len,m)=>{const g=new THREE.Mesh(new THREE.CapsuleGeometry(r,len,6,14),m);g.castShadow=true;return g};
const ball=(r,m,sx,sy,sz)=>{const g=new THREE.Mesh(new THREE.SphereGeometry(r,20,16),m);g.scale.set(sx||1,sy||1,sz||1);g.castShadow=true;return g};
const jnt=(x,y,z)=>{const g=new THREE.Group();g.position.set(x,y,z);return g};

export function makeHuman(look){
  const sk=new THREE.Color(look.skin||'#6b4028');
  const skin=mat(sk,.62);
  const skinDark=mat(sk.clone().multiplyScalar(.72),.7);
  const hairC=look.co==='gris'?'#d9d9d9':'#140d09';
  const hair=mat(hairC,.9);
  const cloth=mat(look.c||'#2e86de',.85);
  const clothDark=mat(new THREE.Color(look.c||'#2e86de').multiplyScalar(.7),.85);
  const trouser=mat('#262a3a',.9);
  const shoe=mat('#1c1410',.7);
  const k=look.k||'uniforme';
  const trousers=k==='uniforme';
  const longDress=k==='boubou';
  const H=1.0;  // échelle appliquée sur le groupe parent

  const root=new THREE.Group();
  const body=new THREE.Group();root.add(body);   // monte/descend (marche, assis)
  body.position.y=0;

  // bassin et torse
  const hipY=.95;
  const hips=jnt(0,hipY,0);body.add(hips);
  const pelvis=ball(.17,trousers||longDress?(trousers?trouser:cloth):cloth,1.15,.7,.85);pelvis.position.y=.02;hips.add(pelvis);
  const spine=jnt(0,.06,0);hips.add(spine);
  const torso=caps(.165,.34,cloth);torso.scale.set(1.18,1,.75);torso.position.y=.27;spine.add(torso);
  const chestShape=look.s==='f'?.58:.52;
  if(look.s==='f'){const b=ball(.075,cloth,1,1,.9);b.position.set(-.07,.4,.1);spine.add(b);const b2=b.clone();b2.position.x=.07;spine.add(b2)}
  if(trousers&&look.s!=='f'){ // chemise d'uniforme : col blanc
    const col=ball(.09,mat('#f2f2f2',.8),1.4,.5,1);col.position.set(0,.56,.02);spine.add(col);
  }
  if(look.cravate){const t=new THREE.Mesh(new THREE.BoxGeometry(.05,.3,.015),mat('#a8301e',.7));t.position.set(0,.36,.125);spine.add(t)}

  // cou et tête
  const neckJ=jnt(0,.6,0);spine.add(neckJ);
  const neck=caps(.045,.06,skin);neck.position.y=.04;neckJ.add(neck);
  const headJ=jnt(0,.1,0);neckJ.add(headJ);
  const head=ball(.112,skin,.92,1.12,1);head.position.y=.12;headJ.add(head);
  // oreilles
  [-1,1].forEach(s=>{const e=ball(.026,skin,.5,1,.8);e.position.set(s*.103,.12,0);headJ.add(e)});
  // yeux
  const eyeWhite=mat('#f5f1ea',.4),iris=mat('#120a06',.3);
  const eyes=[];
  [-1,1].forEach(s=>{
    const w=ball(.019,eyeWhite,1.2,.8,.6);w.position.set(s*.042,.145,.098);headJ.add(w);
    const i=ball(.011,iris,1,1,.5);i.position.set(s*.042,.145,.108);headJ.add(i);eyes.push(w,i);
    const br=new THREE.Mesh(new THREE.BoxGeometry(.04,.007,.01),hair);br.position.set(s*.042,.172,.1);br.rotation.z=-s*.12;headJ.add(br);
  });
  const nose=ball(.017,skinDark,1,1.1,1);nose.position.set(0,.115,.112);headJ.add(nose);
  const mouth=new THREE.Mesh(new THREE.BoxGeometry(.05,.01,.012),mat(look.s==='f'?'#7a2a2a':'#5a2a22',.5));mouth.position.set(0,.075,.1);headJ.add(mouth);
  // coiffures
  const cap=new THREE.Mesh(new THREE.SphereGeometry(.117,20,14,0,Math.PI*2,0,Math.PI*.52),hair);
  cap.scale.set(.95,1.12,1.02);cap.position.y=.125;cap.rotation.x=-.18;cap.castShadow=true;headJ.add(cap);
  if(look.co==='nattes'){
    [-1,1].forEach(s=>{for(let i=0;i<3;i++){const b=ball(.028,hair,1,1.3,1);b.position.set(s*.105,.1-i*.05,-.01);headJ.add(b)}});
    cap.rotation.x=-.1;
  }else if(look.co==='tresses'){
    for(let i=0;i<9;i++){const a=-1.1+i*.28;const t=caps(.014,.2,hair);t.position.set(Math.sin(a)*.118,.05,-.02-Math.cos(a)*.03);t.rotation.z=Math.sin(a)*.25;headJ.add(t)}
  }else if(look.co==='gris'){
    const bun=ball(.05,hair,1,.9,1);bun.position.set(0,.24,-.06);headJ.add(bun);
    // foulard
    const wrap=new THREE.Mesh(new THREE.TorusGeometry(.105,.03,10,24),mat('#1f7a4d',.8));wrap.rotation.x=Math.PI/2;wrap.position.y=.2;wrap.scale.set(1,1.05,1);headJ.add(wrap);
  }
  if(look.s==='f'){[-1,1].forEach(s=>{const r=ball(.009,mat('#e0a526',.3,.8),1,1,1);r.position.set(s*.108,.07,.01);headJ.add(r)})}

  // bras
  const arms=[];
  [-1,1].forEach(side=>{
    const sh=jnt(side*.235,.5,0);spine.add(sh);
    const up=caps(.045,.2,trousers||k==='pagne'||longDress?cloth:cloth);up.position.y=-.14;sh.add(up);
    const el=jnt(0,-.28,0);sh.add(el);
    const fa=caps(.037,.2,skin);fa.position.y=-.13;el.add(fa);
    const hand=ball(.04,skin,1,1.15,.8);hand.position.y=-.3;el.add(hand);
    sh.rotation.z=side*.08;
    arms.push({sh,el});
  });

  // jambes
  const legs=[];
  [-1,1].forEach(side=>{
    const hj=jnt(side*.095,0,0);hips.add(hj);
    const lm=trousers?trouser:skin;
    const th=caps(.068,.3,lm);th.position.y=-.21;hj.add(th);
    const kn=jnt(0,-.42,0);hj.add(kn);
    const sh=caps(.052,.3,lm);sh.position.y=-.2;kn.add(sh);
    const ft=new THREE.Mesh(new THREE.BoxGeometry(.09,.06,.2),shoe);ft.position.set(0,-.43,.04);ft.castShadow=true;kn.add(ft);
    legs.push({hj,kn});
  });

  // jupe / pagne / boubou
  if(k==='pagne'||look.s==='f'&&k==='uniforme'){
    const tex=k==='pagne'?waxTexture(look.c,look.c2):null;
    const m=tex?new THREE.MeshStandardMaterial({map:tex,roughness:.85}):cloth;
    const skirt=new THREE.Mesh(new THREE.CylinderGeometry(.19,.3,.62,24,1,true),m);
    skirt.material.side=THREE.DoubleSide;skirt.position.y=-.34;skirt.castShadow=true;hips.add(skirt);
    skirt.userData.skirt=true;
  }
  if(longDress){
    const tex=noiseTexture(look.c,.18);
    const m=new THREE.MeshStandardMaterial({map:tex,roughness:.8,side:THREE.DoubleSide});
    const robe=new THREE.Mesh(new THREE.CylinderGeometry(.2,.36,.98,28,1,true),m);
    robe.position.y=-.45;robe.castShadow=true;hips.add(robe);
    // les jambes sont cachées : on réduit leurs tibias
    legs.forEach(l=>{l.kn.visible=false});
    const f=[-1,1].map(s=>{const t=new THREE.Mesh(new THREE.BoxGeometry(.09,.06,.2),shoe);t.position.set(s*.09,-.94,.06);hips.add(t);return t});
    root.userData.fixedFeet=f;
  }

  // pose initiale
  const state={t:Math.random()*10,speed:0,mode:'idle',talk:0,wave:0,sitting:false};

  function update(dt,o){
    state.t+=dt;
    o=o||{};
    const sp=o.speed||0, t=state.t;
    const walk=Math.min(1,sp/2.2);
    const run=sp>3.2;
    const ph=t*(run?11:7.5);
    const sit=!!o.sit;
    // assis
    if(sit){
      body.position.y=-.46;
      legs.forEach(l=>{l.hj.rotation.x=-Math.PI/2+.05;l.kn.rotation.x=Math.PI/2-.05});
      if(longDress)root.userData.fixedFeet.forEach(f=>{f.visible=false});
    }else{
      const bob=Math.abs(Math.sin(ph))*.035*walk*(run?1.6:1);
      body.position.y=bob;
      const amp=(run?.95:.6)*walk;
      legs[0].hj.rotation.x=Math.sin(ph)*amp;
      legs[1].hj.rotation.x=-Math.sin(ph)*amp;
      legs[0].kn.rotation.x=Math.max(0,-Math.sin(ph))*amp*1.3+.04;
      legs[1].kn.rotation.x=Math.max(0,Math.sin(ph))*amp*1.3+.04;
      if(longDress)root.userData.fixedFeet.forEach(f=>{f.visible=true});
    }
    // buste
    const breathe=Math.sin(t*1.8)*.012;
    torso.scale.y=1+breathe;
    spine.rotation.y=Math.sin(ph)*.12*walk;
    spine.rotation.x=.05*walk+(run?.12:0);
    hips.rotation.y=-Math.sin(ph)*.08*walk;
    // bras : marche, geste de parole, salut
    const lA=arms[0],rA=arms[1];
    const swing=(run?.9:.55)*walk;
    lA.sh.rotation.x=sit?-.5:Math.sin(ph)*swing;
    rA.sh.rotation.x=sit?-.5:-Math.sin(ph)*swing;
    lA.el.rotation.x=-.12-(sit?.6:0)-Math.max(0,Math.sin(ph))*.5*walk;
    rA.el.rotation.x=-.12-(sit?.6:0)-Math.max(0,-Math.sin(ph))*.5*walk;
    lA.sh.rotation.z=-.08;rA.sh.rotation.z=.08;
    if(!sp&&!sit){
      lA.sh.rotation.x=Math.sin(t*1.3)*.03;rA.sh.rotation.x=-Math.sin(t*1.3)*.03;
    }
    if(o.talk){
      rA.sh.rotation.x=-.9+Math.sin(t*5)*.25;rA.sh.rotation.z=.35;rA.el.rotation.x=-1.0+Math.sin(t*6.2)*.35;
      headJ.rotation.x=Math.sin(t*4)*.05;headJ.rotation.y=Math.sin(t*1.7)*.12;
      mouth.scale.y=1+Math.abs(Math.sin(t*12))*1.6;
    }else{
      headJ.rotation.x=0;headJ.rotation.y=sp?0:Math.sin(t*.7)*.18;mouth.scale.y=1;
    }
    if(o.wave){
      rA.sh.rotation.x=0;rA.sh.rotation.z=2.5+Math.sin(t*9)*.18;rA.el.rotation.x=-.5+Math.sin(t*9)*.4;
    }
    // clignement
    const bl=(Math.sin(t*.9)>.985)?.1:1;
    eyes.forEach(e=>{if(e.scale)e.scale.y=(e.userData.sy||(e.userData.sy=e.scale.y))*bl});
    if(o.lookAt!==undefined)headJ.rotation.y+=o.lookAt;
  }

  root.scale.setScalar(look.h||1);
  Object.assign(root.userData,{update,state,height:1.78*(look.h||1)});
  return root;
}
