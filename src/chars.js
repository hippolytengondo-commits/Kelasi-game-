import * as THREE from 'three';
import {waxTexture, noiseTexture} from './textures.js';
import {SKIN_TONES,HAIR_COLORS,EYE_COLORS,LIP_COLORS,OUTFIT_COLORS,OUTFITS} from './data.js';

// Personnage 3D articulé et personnalisable. Pieds à y = 0, le visage regarde +z.
const M=(color,r,m,o)=>new THREE.MeshStandardMaterial(Object.assign({color:color,roughness:r===undefined?.85:r,metalness:m||0},o||{}));
const caps=(r,len,m)=>{const g=new THREE.Mesh(new THREE.CapsuleGeometry(r,len,6,14),m);g.castShadow=true;return g};
const ball=(r,m,sx,sy,sz,seg)=>{const g=new THREE.Mesh(new THREE.SphereGeometry(r,seg||20,seg?Math.round(seg*.8):16),m);g.scale.set(sx||1,sy||1,sz||1);g.castShadow=true;return g};
const jnt=(x,y,z)=>{const g=new THREE.Group();g.position.set(x,y,z);return g};
const lerp=(a,b,t)=>a+(b-a)*t;

// Accepte l'ancien format (k, co, c...) et le nouveau (outfit, hair, hairC...).
export function normLook(l){
  const hair=l.hair||l.co||'courtes';
  const o={
    s:l.s||'f',h:l.h||1,
    skin:typeof l.skin==='number'?SKIN_TONES[l.skin]||SKIN_TONES[3]:(l.skin||SKIN_TONES[3]),
    faceW:l.faceW===undefined?.5:l.faceW,jaw:l.jaw===undefined?.4:l.jaw,
    eyeS:l.eyeS===undefined?.5:l.eyeS,eyeC:EYE_COLORS[l.eyeC||1]||EYE_COLORS[1],
    brow:l.brow||0,nose:l.nose===undefined?.5:l.nose,lips:l.lips===undefined?.5:l.lips,
    lipC:LIP_COLORS[l.lipC||0]||LIP_COLORS[0],blush:l.blush===undefined?.3:l.blush,
    hair:hair,
    hairHex:l.hairHex||(typeof l.hairC==='number'?HAIR_COLORS[l.hairC]:(hair==='gris'?'#d9d9d9':'#140d09')),
    beard:l.beard||0,acc:l.acc||[],
    outfit:l.outfit||(l.k==='pagne'?'pagne':l.k==='boubou'?'boubou':'uniforme'),
    c:l.cHex||(typeof l.outfitC==='number'?OUTFIT_COLORS[l.outfitC]:(l.c||'#1f7a4d')),c2:l.c2,
    cravate:!!l.cravate
  };
  if(l.s!=='f'&&o.hair==='tresses'&&false)o.hair='courtes';
  return o;
}

// Tête : sphère déformée (menton, mâchoire, largeur du visage).
function headGeo(L,thetaStart,thetaLen,grow){
  const g=new THREE.SphereGeometry(1,40,32,0,Math.PI*2,thetaStart||0,thetaLen||Math.PI);
  const p=g.attributes.position;
  const W=.092+.022*L.faceW, Hh=.122, D=.108;
  const taper=lerp(.46,.14,L.jaw);
  for(let i=0;i<p.count;i++){
    let x=p.getX(i),y=p.getY(i),z=p.getZ(i);
    if(y<-.05){
      const t=Math.min(1,(-y-.05)/.95);
      const f=1-taper*Math.pow(t,1.35);
      x*=f;z*=1-taper*.55*Math.pow(t,1.35);
      if(z>0)z*=1-.10*t;
    }
    // front légèrement bombé, joues pleines
    if(z>0&&y>-.45&&y<.2)x*=1+.03*L.faceW;
    p.setXYZ(i,x*W*(grow||1),y*Hh*(grow||1),z*D*(grow||1));
  }
  g.computeVertexNormals();
  return g;
}

export function makeHuman(look){
  const L=normLook(look);
  const out=OUTFITS[L.outfit]||OUTFITS.uniforme;
  const female=L.s==='f';
  const sk=new THREE.Color(L.skin);
  const skinM=M(sk,.55,0,{emissive:sk.clone().multiplyScalar(.10)});
  const skinDark=M(sk.clone().multiplyScalar(.7),.6);
  const hairM=M(L.hairHex,.5,.08);
  const cloth=M(L.c,.85);
  const shoe=M('#1c1410',.7);
  const wax=out.top==='wax'?M('#ffffff',.85,0,{map:waxTexture(L.c,L.c2||'#e0a526')}):null;
  const topM=wax||cloth;
  let bottom=out.bottom;if(bottom==='auto')bottom=female?'skirt':'trousers';
  const trouserColor=out.matchTrouser?new THREE.Color(L.c).multiplyScalar(.6):new THREE.Color(out.trouser||'#262a3a');
  const trouserM=M(trouserColor,.9);
  const longD=bottom==='long',skirt=bottom==='skirt',trousers=bottom==='trousers';

  const root=new THREE.Group();
  const body=new THREE.Group();root.add(body);

  const hips=jnt(0,.95,0);body.add(hips);
  const pelvis=ball(.17,trousers?trouserM:(longD?topM:(skirt?topM:trouserM)),1.15,.7,.85);pelvis.position.y=.02;hips.add(pelvis);
  const spine=jnt(0,.06,0);hips.add(spine);
  const torso=caps(.165,.34,topM);torso.scale.set(female?1.0:1.12,1,.72);torso.position.y=.27;spine.add(torso);
  if(female){[-1,1].forEach(s=>{const b=ball(.072,topM,1,1,.9);b.position.set(s*.065,.4,.1);spine.add(b)})}
  if(out.collar){const col=ball(.09,M('#f2f2f2',.8),1.4,.5,1);col.position.set(0,.56,.02);spine.add(col)}
  if(out.belt){const bl=new THREE.Mesh(new THREE.TorusGeometry(.17,.012,8,24),M('#e0a526',.4,.7));bl.rotation.x=Math.PI/2;bl.position.set(0,.06,0);bl.scale.set(1.1,.8,1);spine.add(bl)}
  if(L.cravate){const t=new THREE.Mesh(new THREE.BoxGeometry(.05,.3,.015),M('#a8301e',.7));t.position.set(0,.36,.125);spine.add(t)}
  if(out.trim){const tr=new THREE.Mesh(new THREE.TorusGeometry(.085,.012,8,20),M('#e0a526',.4,.7));tr.rotation.x=Math.PI/2;tr.position.set(0,.55,.03);tr.scale.set(1.4,1,1.1);spine.add(tr)}

  // cou et tête
  const neckJ=jnt(0,.6,0);spine.add(neckJ);
  const neck=caps(.045,.06,skinM);neck.position.y=.04;neckJ.add(neck);
  const headJ=jnt(0,.1,0);headJ.scale.setScalar(1.12);neckJ.add(headJ);
  const head=new THREE.Mesh(headGeo(L),skinM);head.position.y=.12;head.castShadow=true;headJ.add(head);
  const W=.092+.022*L.faceW;
  // oreilles
  [-1,1].forEach(s=>{const e=ball(.026,skinM,.5,1,.8);e.position.set(s*(W+.004),.125,-.005);headJ.add(e)});
  // joues (fard léger)
  if(L.blush>.05){[-1,1].forEach(s=>{const c=ball(.03,M('#d4607a',.9,0,{transparent:true,opacity:.18*L.blush*2}),1,.8,.3);c.position.set(s*.05,.095,.088);headJ.add(c)})}
  // yeux
  const eyeR=.0175*(.85+L.eyeS*.5);
  const eyeWhite=M('#f7f3ec',.35),iris=M(L.eyeC,.25),pupil=M('#050302',.2),glint=new THREE.MeshBasicMaterial({color:0xffffff});
  const eyes=[];
  [-1,1].forEach(s=>{
    const ex=s*.040,ey=.146;
    const w=ball(eyeR,eyeWhite,1.25,.9,.65);w.position.set(ex,ey,.087);headJ.add(w);
    const ir=ball(eyeR*.62,iris,1,1,.5);ir.position.set(ex,ey,.087+eyeR*.5);headJ.add(ir);
    const pu=ball(eyeR*.32,pupil,1,1,.4);pu.position.set(ex,ey,.087+eyeR*.62);headJ.add(pu);
    const gl=ball(eyeR*.16,glint,1,1,1,8);gl.position.set(ex+s*.0035,ey+.004,.087+eyeR*.8);headJ.add(gl);
    eyes.push(w,ir,pu);
    // paupières
    const lid=new THREE.Mesh(new THREE.SphereGeometry(eyeR*1.28,16,8,0,Math.PI*2,0,Math.PI*.46),skinDark);
    lid.scale.set(1.2,.9,.8);lid.position.set(ex,ey+.001,.088);lid.rotation.x=-.15;headJ.add(lid);
    if(female){const lash=new THREE.Mesh(new THREE.BoxGeometry(eyeR*2.5,.003,.006),hairM);lash.position.set(ex,ey+eyeR*1.0,.097);lash.rotation.z=-s*.1;headJ.add(lash)}
    // sourcils
    const bw=.036,bh=L.brow===1?.011:.0055;
    const br=new THREE.Mesh(new THREE.BoxGeometry(bw,bh,.008),hairM);
    br.position.set(ex,.176+(L.brow===2?.004:0),.092);br.rotation.z=-s*(L.brow===2?.22:.08);headJ.add(br);
    if(L.brow===2){const b2=br.clone();b2.position.x=ex+s*.014;b2.position.y=.172;b2.rotation.z=s*.12;headJ.add(b2)}
  });
  // nez
  const nz=.8+L.nose*.7;
  const nb=new THREE.Mesh(new THREE.BoxGeometry(.016*nz,.04,.012),skinM);nb.position.set(0,.128,.1);headJ.add(nb);
  const tip=ball(.0165*nz,skinM,1,.9,1);tip.position.set(0,.103,.107);headJ.add(tip);
  [-1,1].forEach(s=>{const wg=ball(.011*nz,skinM,1,.9,.9);wg.position.set(s*.015*nz,.1,.1);headJ.add(wg);
    const ns=ball(.004,M('#1a0f0a',.5),1,1,1,8);ns.position.set(s*.008*nz,.094,.113);headJ.add(ns)});
  // lèvres
  const lw=.026+.012*L.lips,lt=.0045+.0045*L.lips;
  const lipM=M(L.lipC,.3);
  const up=ball(1,lipM,lw,lt,.009,14);up.position.set(0,.0745,.1);headJ.add(up);
  const lo=ball(1,lipM,lw*.92,lt*1.35,.01,14);lo.position.set(0,.0635,.099);headJ.add(lo);
  const mouth=new THREE.Group();mouth.position.set(0,.069,.099);headJ.add(mouth); // pour l'animation de parole
  const mline=new THREE.Mesh(new THREE.BoxGeometry(lw*1.7,.002,.004),M('#2a1210',.5));mouth.add(mline);

  // barbe
  if(L.beard>0&&!female){
    const bg=headGeo(L,Math.PI*.54,Math.PI*.46,1.035);
    const bm=M(L.hairHex,.9,0,L.beard===1?{transparent:true,opacity:.42}:{});
    const beard=new THREE.Mesh(bg,bm);beard.position.y=.12;headJ.add(beard);
    if(L.beard===2){const mu=ball(1,hairM,.026,.007,.01);mu.position.set(0,.087,.104);headJ.add(mu)}
  }

  // coiffures
  const hs=L.hair;
  const scalp=(scale,tilt)=>{
    const sx=(.098+.02*L.faceW)*scale,sy=.128*scale,sz=.113*scale;
    const top=new THREE.Mesh(new THREE.SphereGeometry(1,28,14,0,Math.PI*2,0,Math.PI*.36),hairM);
    top.scale.set(sx,sy,sz);top.position.y=.125;top.rotation.x=tilt===undefined?-.12:tilt;top.castShadow=true;headJ.add(top);
    const back=new THREE.Mesh(new THREE.SphereGeometry(1,28,16,Math.PI*.12,Math.PI*.76,0,Math.PI*.66),hairM);
    back.scale.set(sx*1.005,sy*1.005,sz*1.005);back.position.y=.125;back.rotation.y=Math.PI;back.castShadow=true;headJ.add(back);
    return top;
  };
  if(hs==='courtes'||hs==='gris'){scalp(1.06)}
  else if(hs==='rase'){scalp(1.0)}
  else if(hs==='tresses'){
    scalp(1.07);
    for(let i=0;i<11;i++){const a=-1.35+i*.27;const t=caps(.013,.22,hairM);t.position.set(Math.sin(a)*(W+.014),.03,-.015-Math.cos(a)*.035);t.rotation.z=Math.sin(a)*.22;headJ.add(t)}
  }else if(hs==='nattes'){
    scalp(1.07);
    [-1,1].forEach(s=>{for(let i=0;i<4;i++){const b=ball(.026,hairM,1,1.35,1);b.position.set(s*(W+.012),.1-i*.05,-.01+(i%2)*.006);headJ.add(b)}});
  }else if(hs==='afro'){
    const af=new THREE.Mesh(new THREE.IcosahedronGeometry(.16,4),hairM);
    const p=af.geometry.attributes.position;for(let i=0;i<p.count;i++){const n=1+(Math.sin(p.getX(i)*90)+Math.cos(p.getY(i)*80)*Math.sin(p.getZ(i)*70))*.035;p.setXYZ(i,p.getX(i)*n,p.getY(i)*n,p.getZ(i)*n)}
    af.geometry.computeVertexNormals();af.scale.set(1.0,.96,.95);af.position.set(0,.225,-.05);af.castShadow=true;headJ.add(af);
  }else if(hs==='chignon'){
    scalp(1.06);const bun=ball(.055,hairM,1,.95,1);bun.position.set(0,.255,-.045);headJ.add(bun);
  }else if(hs==='noeuds'){
    scalp(1.04);
    for(let i=0;i<14;i++){const a=i/14*Math.PI*2,r=i<9?.075:.04;const b=ball(.026,hairM,1,1,1,10);b.position.set(Math.sin(a)*r,.225+(i<9?0:.03),Math.cos(a)*r*.9-.02);headJ.add(b)}
  }else if(hs==='locks'){
    scalp(1.08);
    for(let i=0;i<20;i++){const a=-2.5+i*.26;if(Math.abs(a)<.9)continue;const t=caps(.011,.32,hairM);t.position.set(Math.sin(a)*(W+.018),.0,-.02-Math.cos(a)*.05);t.rotation.z=Math.sin(a)*.12;headJ.add(t)}
    for(let i=0;i<5;i++){const t=caps(.011,.28,hairM);t.position.set((i-2)*.03,.0,-.1);headJ.add(t)}
  }
  if(hs==='gris'){ // foulard et chignon de Mama Lola
    const bun=ball(.05,hairM,1,.9,1);bun.position.set(0,.24,-.06);headJ.add(bun);
    const wrap=new THREE.Mesh(new THREE.TorusGeometry(.105,.03,10,24),M('#1f7a4d',.8));wrap.rotation.x=Math.PI/2;wrap.position.y=.2;wrap.scale.set(1,1.05,1);headJ.add(wrap);
  }
  // accessoires
  const acc=L.acc||[];
  if(acc.indexOf('boucles')>=0||(female&&look.s==='f'&&look.h&&!look.acc)){[-1,1].forEach(s=>{const r=ball(.009,M('#e0a526',.3,.8),1,1,1,8);r.position.set(s*(W+.008),.075,.0);headJ.add(r);const d=ball(.007,M('#e0a526',.3,.8),1,1.6,1,8);d.position.set(s*(W+.008),.055,.0);headJ.add(d)})}
  if(acc.indexOf('lunettes')>=0){
    const gm=M('#1a1a22',.3,.5);
    [-1,1].forEach(s=>{const t=new THREE.Mesh(new THREE.TorusGeometry(.027,.0035,8,20),gm);t.position.set(s*.04,.146,.1);headJ.add(t)});
    const br=new THREE.Mesh(new THREE.BoxGeometry(.02,.003,.003),gm);br.position.set(0,.148,.103);headJ.add(br);
    [-1,1].forEach(s=>{const a=new THREE.Mesh(new THREE.BoxGeometry(.003,.003,.1),gm);a.position.set(s*.068,.148,.05);headJ.add(a)});
  }
  if(acc.indexOf('casquette')>=0){
    const cm=M('#c0392b',.7);
    const dome=new THREE.Mesh(new THREE.SphereGeometry(.12,22,12,0,Math.PI*2,0,Math.PI*.5),cm);dome.position.set(0,.21,0);dome.scale.set(1,.95,1.05);dome.castShadow=true;headJ.add(dome);
    const vis=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.008,18,1,false,-Math.PI/2,Math.PI),cm);vis.position.set(0,.215,.1);vis.scale.set(1,1,.9);vis.rotation.x=0;headJ.add(vis);
  }
  if(acc.indexOf('foulard')>=0){
    const fm=M('#e0a526',.8);
    const wrap=new THREE.Mesh(new THREE.TorusGeometry(.108,.032,10,24),fm);wrap.rotation.x=Math.PI/2;wrap.position.y=.215;wrap.scale.set(1,1.05,1);headJ.add(wrap);
    const kn=ball(.04,fm,1.3,.7,.7);kn.position.set(0,.26,-.07);headJ.add(kn);
  }
  if(acc.indexOf('collier')>=0){
    const pm=M('#f4efe6',.3,.2);
    for(let i=0;i<16;i++){const a=i/16*Math.PI*2;const b=ball(.011,pm,1,1,1,8);b.position.set(Math.sin(a)*.095,.585,Math.cos(a)*.075+.03);spine.add(b)}
  }
  if(acc.indexOf('sac')>=0){
    const sm=M('#2e86de',.7);
    const bag=new THREE.Mesh(new THREE.BoxGeometry(.28,.34,.12),sm);bag.position.set(0,.3,-.17);bag.castShadow=true;spine.add(bag);
    const pk=new THREE.Mesh(new THREE.BoxGeometry(.2,.14,.03),M('#1f5fa8',.7));pk.position.set(0,.22,-.24);spine.add(pk);
    [-1,1].forEach(s=>{const st=new THREE.Mesh(new THREE.BoxGeometry(.03,.3,.02),M('#1f5fa8',.7));st.position.set(s*.09,.38,.1);spine.add(st)});
  }

  // bras
  const arms=[];
  [-1,1].forEach(side=>{
    const sh=jnt(side*.235,.5,0);spine.add(sh);
    const longSleeve=longD;
    const up=caps(.045,.2,topM);up.position.y=-.14;sh.add(up);
    const el=jnt(0,-.28,0);sh.add(el);
    const fa=caps(.037,.2,longSleeve?topM:skinM);fa.position.y=-.13;el.add(fa);
    const hand=ball(.04,skinM,1,1.15,.8);hand.position.y=-.3;el.add(hand);
    sh.rotation.z=side*.08;
    arms.push({sh,el});
  });

  // jambes
  const legs=[];
  [-1,1].forEach(side=>{
    const hj=jnt(side*.095,0,0);hips.add(hj);
    const lm=trousers?trouserM:skinM;
    const th=caps(.068,.3,lm);th.position.y=-.21;hj.add(th);
    const kn=jnt(0,-.42,0);hj.add(kn);
    const sh=caps(.052,.3,lm);sh.position.y=-.2;kn.add(sh);
    const ft=new THREE.Mesh(new THREE.BoxGeometry(.09,.06,.2),shoe);ft.position.set(0,-.43,.04);ft.castShadow=true;kn.add(ft);
    legs.push({hj,kn});
  });

  // jupe / robe / boubou
  let fixedFeet=null;
  if(skirt){
    const tex=wax?waxTexture(L.c,L.c2||'#e0a526'):null;
    const sm=tex?new THREE.MeshStandardMaterial({map:tex,roughness:.85,side:THREE.DoubleSide}):M(L.c,.85,0,{side:THREE.DoubleSide});
    const sk2=new THREE.Mesh(new THREE.CylinderGeometry(.19,out.belt?.34:.3,out.belt?.7:.62,24,1,true),sm);
    sk2.position.y=out.belt?-.37:-.34;sk2.castShadow=true;hips.add(sk2);
  }
  if(longD){
    const m=new THREE.MeshStandardMaterial({map:noiseTexture(L.c,.16),roughness:.8,side:THREE.DoubleSide});
    const robe=new THREE.Mesh(new THREE.CylinderGeometry(.2,.37,.98,28,1,true),m);robe.position.y=-.45;robe.castShadow=true;hips.add(robe);
    if(out.trim){const hem=new THREE.Mesh(new THREE.TorusGeometry(.37,.012,6,28),M('#e0a526',.4,.7));hem.rotation.x=Math.PI/2;hem.position.y=-.93;hips.add(hem)}
    legs.forEach(l=>{l.kn.visible=false});
    fixedFeet=[-1,1].map(s=>{const t=new THREE.Mesh(new THREE.BoxGeometry(.09,.06,.2),shoe);t.position.set(s*.09,-.94,.06);hips.add(t);return t});
  }

  const state={t:Math.random()*10};
  function update(dt,o){
    state.t+=dt;o=o||{};
    const sp=o.speed||0,t=state.t;
    const walk=Math.min(1,sp/2.2),run=sp>3.2;
    const ph=t*(run?11:7.5);
    const sit=!!o.sit;
    if(sit){
      body.position.y=-.46;
      legs.forEach(l=>{l.hj.rotation.x=-Math.PI/2+.05;l.kn.rotation.x=Math.PI/2-.05});
      if(fixedFeet)fixedFeet.forEach(f=>{f.visible=false});
    }else{
      body.position.y=Math.abs(Math.sin(ph))*.035*walk*(run?1.6:1);
      const amp=(run?.95:.6)*walk;
      legs[0].hj.rotation.x=Math.sin(ph)*amp;legs[1].hj.rotation.x=-Math.sin(ph)*amp;
      legs[0].kn.rotation.x=Math.max(0,-Math.sin(ph))*amp*1.3+.04;legs[1].kn.rotation.x=Math.max(0,Math.sin(ph))*amp*1.3+.04;
      if(fixedFeet)fixedFeet.forEach(f=>{f.visible=true});
    }
    torso.scale.y=1+Math.sin(t*1.8)*.012;
    spine.rotation.y=Math.sin(ph)*.12*walk;spine.rotation.x=.05*walk+(run?.12:0);hips.rotation.y=-Math.sin(ph)*.08*walk;
    const lA=arms[0],rA=arms[1],swing=(run?.9:.55)*walk;
    lA.sh.rotation.x=sit?-.5:Math.sin(ph)*swing;rA.sh.rotation.x=sit?-.5:-Math.sin(ph)*swing;
    lA.el.rotation.x=-.12-(sit?.6:0)-Math.max(0,Math.sin(ph))*.5*walk;
    rA.el.rotation.x=-.12-(sit?.6:0)-Math.max(0,-Math.sin(ph))*.5*walk;
    lA.sh.rotation.z=-.08;rA.sh.rotation.z=.08;
    if(!sp&&!sit){lA.sh.rotation.x=Math.sin(t*1.3)*.03;rA.sh.rotation.x=-Math.sin(t*1.3)*.03}
    if(o.talk){
      rA.sh.rotation.x=-.9+Math.sin(t*5)*.25;rA.sh.rotation.z=.35;rA.el.rotation.x=-1.0+Math.sin(t*6.2)*.35;
      headJ.rotation.x=Math.sin(t*4)*.05;headJ.rotation.y=Math.sin(t*1.7)*.12;
      mouth.scale.y=1+Math.abs(Math.sin(t*12))*3;lo.position.y=.0635-Math.abs(Math.sin(t*12))*.006;
    }else{
      headJ.rotation.x=0;headJ.rotation.y=sp?0:Math.sin(t*.7)*.18;mouth.scale.y=1;lo.position.y=.0635;
    }
    if(o.wave){rA.sh.rotation.x=0;rA.sh.rotation.z=2.5+Math.sin(t*9)*.18;rA.el.rotation.x=-.5+Math.sin(t*9)*.4}
    if(o.pose==='creator'){headJ.rotation.y=Math.sin(t*.5)*.15;rA.sh.rotation.x=0;lA.sh.rotation.x=0}
    const bl=(Math.sin(t*.9)>.985)?.1:1;
    eyes.forEach(e=>{e.scale.y=(e.userData.sy||(e.userData.sy=e.scale.y))*bl});
  }

  root.scale.setScalar(L.h||1);
  Object.assign(root.userData,{update,state,height:1.78*(L.h||1),headY:1.78});
  return root;
}
