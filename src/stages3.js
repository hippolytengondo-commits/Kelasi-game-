import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree,flagTexture} from './world.js';
import {leafyTree,palm,grassField,bush} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const stone=()=>new THREE.MeshStandardMaterial({map:T.plasterTexture('#efe8da'),roughness:.9});
const tin=()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35});
const glass=()=>std('#9fc6dd',.12,{emissive:0x4da6d9,emissiveIntensity:.25,metalness:.2});
function finish(g,colliders,boxes,o){
  exitSign(g,-3.8,o.exitZ);colliders.push({x:-3.8,z:o.exitZ,r:.3});
  return Object.assign({group:g,colliders,boxes,dyn:{},exit:{x:0,z:o.exitZ-1}},o);
}

// ----------------------------------------------------------------- 11 · STADE
export function buildStade(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(111);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  // pelouse du terrain (texture canvas : bandes + lignes)
  const c=document.createElement('canvas');c.width=1024;c.height=640;const x=c.getContext('2d');
  for(let i=0;i<10;i++){x.fillStyle=i%2?'#3f8a35':'#478f3b';x.fillRect(i*102.4,0,103,640)}
  x.strokeStyle='#f4f4f4';x.lineWidth=6;x.strokeRect(24,24,976,592);x.beginPath();x.moveTo(512,24);x.lineTo(512,616);x.stroke();
  x.beginPath();x.arc(512,320,80,0,7);x.stroke();x.strokeRect(24,170,150,300);x.strokeRect(850,170,150,300);x.strokeRect(24,240,60,160);x.strokeRect(940,240,60,160);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=8;
  const pitch=new THREE.Mesh(new THREE.PlaneGeometry(44,27.5),new THREE.MeshStandardMaterial({map:tex,roughness:.95}));pitch.rotation.x=-Math.PI/2;pitch.position.set(0,.03,-2);pitch.receiveShadow=true;g.add(pitch);
  patch(g,0,9,5,10,T.dirtTexture);
  // buts
  [-1,1].forEach(s=>{
    const gl=new THREE.Group();gl.position.set(s*22.2,0,-2);
    const m=std('#f5f5f5',.5);
    [-1.8,1.8].forEach(z=>cyl(gl,.06,.06,2.4,m,0,1.2,z,8));cyl(gl,.06,.06,3.6,m,0,2.4,0,8).rotation.x=Math.PI/2;
    const net=new THREE.Mesh(new THREE.PlaneGeometry(3.6,2.4),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.22,side:THREE.DoubleSide,wireframe:true}));net.rotation.y=Math.PI/2;net.position.set(s*1.2,1.2,0);gl.add(net);
    g.add(gl);colliders.push({x:s*22.2,z:-2,r:1});
  });
  // ballon
  const ball=new THREE.Mesh(new THREE.SphereGeometry(.22,18,14),std('#f2f2f2',.45));ball.position.set(1.5,.25,-1);ball.castShadow=true;g.add(ball);
  // tribunes
  const tr=(z,ry)=>{const t=new THREE.Group();t.position.set(0,0,z);t.rotation.y=ry;
    for(let i=0;i<6;i++)box(t,46,.5,1.2,std(i%2?'#9aa0a6':'#b4bac0',.9),0,.25+i*.5,-i*1.1);
    for(let i=0;i<46;i+=2){const sx=-22+i;for(let j=0;j<6;j++)if(r()>.35)box(t,.5,.5,.4,std(['#c0392b','#2e86de','#f1c40f','#27ae60'][(i+j)%4],.8),sx+r()*.6,.75+j*.5,-j*1.1+.2)}
    box(t,46,.2,8,tin(),0,4.2,-3);[-22,22].forEach(px=>cyl(t,.12,.12,4.2,std('#666',.5,{metalness:.5}),px,2.1,0,8));g.add(t)};
  tr(-20.5,0);boxes.push({x0:-24,x1:24,z0:-27,z1:-16});
  // projecteurs
  const lights=[];[[-24,-8],[24,-8],[-24,8],[24,8]].forEach(p=>{cyl(g,.18,.25,13,std('#777',.5,{metalness:.5}),p[0],6.5,p[1],8);const h=box(g,3,1.6,.3,std('#222',.5),p[0],13.2,p[1]);h.lookAt(0,0,-2);colliders.push({x:p[0],z:p[1],r:.4})});
  // panneaux publicitaires
  const adv=sign('KELAS FOOT','Fair-play · Respect · Équipe',8,1,'#d35400','#fff');adv.position.set(0,.6,-16.4);g.add(adv);
  // drapeaux
  [-18,-6,6,18].forEach(px=>{cyl(g,.04,.04,5,std('#999'),px,2.5,-15.6,6);const f=new THREE.Mesh(new THREE.PlaneGeometry(1.4,.9),new THREE.MeshStandardMaterial({map:flagTexture(),side:THREE.DoubleSide,roughness:.9}));f.position.set(px+.7,4.6,-15.6);g.add(f)});
  [[-30,6],[30,6],[-30,-8],[30,-8]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-36,36,-18,14],count:7000,seed:26,exclude:(x,z)=>Math.abs(x)<23&&z>-16.5&&z<12||Math.abs(x)<3.2&&z>4});g.add(grass);
  return finish(g,colliders,boxes,{bounds:{x0:-33,x1:33,z0:-14.5,z1:12.5},exitZ:10.4,sky:{elev:34,azim:250},
    update(dt,t){grass.userData.update(t);ball.position.x=1.5+Math.sin(t*.8)*.08;ball.rotation.z=t*.4}});
}

// ----------------------------------------------------------------- 12 · MINE
export function buildMine(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(112);
  ground(g,1400,1400,T.dirtTexture,1,0,0);
  const rock=new THREE.MeshStandardMaterial({map:T.dirtTexture(),color:0xb5683a,roughness:1});
  // paliers de la carrière (gradins) au fond
  for(let i=0;i<5;i++){const w=60-i*8;const t=new THREE.Mesh(new THREE.BoxGeometry(w,1.8,6),rock);t.position.set(0,.9+i*1.8,-8-i*6);t.castShadow=t.receiveShadow=true;
    t.material=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.05+i*.005,.5,.42-i*.03),roughness:1});g.add(t)}
  boxes.push({x0:-30,x1:30,z0:-12,z1:-9});
  patch(g,0,6,5,14,T.dirtTexture);
  // tas de minerai (cuivre vert / cobalt bleuté)
  [[-9,-2,'#2f7f6a'],[8,-3,'#6a7a9a'],[-5,2,'#a85a2a'],[12,2,'#2f7f6a']].forEach((p,i)=>{
    const m=new THREE.Mesh(new THREE.ConeGeometry(2.4,2.4,9),std(p[2],1));m.position.set(p[0],1.2,p[1]);m.castShadow=true;g.add(m);colliders.push({x:p[0],z:p[1],r:2.1})});
  // camions-bennes
  [[-14,-5,.3],[16,-6,-.4]].forEach(p=>{
    const t=new THREE.Group();t.position.set(p[0],0,p[1]);t.rotation.y=p[2];
    box(t,2.6,2.2,2.6,std('#e0a526',.45),2.2,1.6,0);box(t,1,1,2.2,glass(),3.2,2.1,0);
    box(t,4.6,1.6,2.8,std('#e0a526',.5),-1,2.2,0).rotation.z=.06;
    [[3,1.4],[-.6,1.4],[-2.4,1.4],[3,-1.4],[-.6,-1.4],[-2.4,-1.4]].forEach(w=>{const x=cyl(t,.9,.9,.5,std('#1a1a1a',.95),w[0],.9,w[1],18);x.rotation.x=Math.PI/2});
    g.add(t);colliders.push({x:p[0],z:p[1],r:3})});
  // chevalement (tour de mine)
  const hd=new THREE.Group();hd.position.set(0,0,-6);
  [[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]].forEach(q=>{const l=cyl(hd,.1,.14,9,std('#3d4a52',.6,{metalness:.5}),q[0]*.8,4.5,q[1]*.8,6);l.rotation.z=q[0]*.04});
  for(let i=0;i<4;i++)box(hd,2.6-i*.2,.1,.1,std('#3d4a52',.6,{metalness:.5}),0,1.5+i*2,1.1);
  const wh=cyl(hd,1.2,1.2,.35,std('#2a2a2a',.6,{metalness:.5}),0,9.2,0,24);wh.rotation.x=Math.PI/2;g.add(hd);colliders.push({x:0,z:-6,r:2.2});
  // hangar et signalisation
  box(g,10,4,6,tin(),-18,2,-3);gableRoof(g,-18,4,-3,10,6,1.2,tin(),tin(),.5);colliders.push({x:-18,z:-3,r:4.5});
  const s=sign('ZONE MINIÈRE','Casque obligatoire',4,1,'#f1c40f','#222');s.position.set(4.4,2.4,2);g.add(s);cyl(g,.06,.07,2.5,std('#555'),4.4,1.25,1.95,6);colliders.push({x:4.4,z:2,r:.3});
  // cônes et barrières
  for(let i=0;i<6;i++){const c=new THREE.Mesh(new THREE.ConeGeometry(.22,.6,10),std('#e8590c',.6));c.position.set(-12+i*1.4,.3,9);g.add(c)}
  // poussière
  const dust=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.BufferAttribute(new Float32Array(Array.from({length:600},(_,i)=>i%3==0?-30+r()*60:i%3==1?.3+r()*5:-12+r()*26)),3)),new THREE.PointsMaterial({color:0xd9a67a,size:.12,transparent:true,opacity:.35,depthWrite:false}));g.add(dust);
  return finish(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-9,z1:12.5},exitZ:10.4,sky:{elev:30,azim:140,turb:8},fog:.013,
    update(dt,t){dust.rotation.y=t*.01;dust.position.x=Math.sin(t*.2)*.6}});
}

// ----------------------------------------------------------------- 13 · OBSERVATOIRE
export function buildObservatoire(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(113);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,7,5,14,T.dirtTexture);patch(g,0,-4,18,12,T.dirtTexture);
  // étoiles
  const sp=[];for(let i=0;i<1400;i++){const a=r()*Math.PI*2,e=r()*1.35+.1,d=420;sp.push(Math.cos(a)*Math.cos(e)*d,Math.sin(e)*d,Math.sin(a)*Math.cos(e)*d)}
  const stars=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(sp,3)),new THREE.PointsMaterial({color:0xffffff,size:1.6,sizeAttenuation:false,fog:false,transparent:true,opacity:.9}));g.add(stars);
  const moon=new THREE.Mesh(new THREE.SphereGeometry(14,24,18),new THREE.MeshBasicMaterial({color:0xf4f1e4,fog:false}));moon.position.set(-190,210,-300);g.add(moon);
  // coupole
  const dm=new THREE.Group();dm.position.set(0,0,-13);
  cyl(dm,5.4,5.6,4.6,stone(),0,2.3,0,32);
  const dome=new THREE.Mesh(new THREE.SphereGeometry(5.5,32,16,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xe6eaee,roughness:.35,metalness:.55}));dome.position.y=4.6;dome.castShadow=true;dm.add(dome);
  const slit=box(dm,1.3,5,.6,std('#05080f',.9),0,6.4,4.9);slit.rotation.x=-.5;
  const tel=cyl(dm,.5,.7,4.2,std('#c9ced3',.3,{metalness:.7}),0,6.4,0,16);tel.rotation.x=-1;
  g.add(dm);boxes.push({x0:-5.8,x1:5.8,z0:-18.8,z1:-7.2});
  const nm=sign('OBSERVATOIRE','Regarder le ciel',4.6,1,'#1a2a55','#9fd0ff');nm.position.set(0,2.4,-7.4);g.add(nm);
  // télescopes de visite
  [[-6,-2],[6,-2]].forEach(p=>{const t=new THREE.Group();t.position.set(p[0],0,p[1]);
    for(let k=0;k<3;k++){const l=cyl(t,.04,.04,1.6,std('#444',.5,{metalness:.5}),Math.cos(k*2.1)*.5,.7,Math.sin(k*2.1)*.5,5);l.rotation.z=Math.cos(k*2.1)*.3;l.rotation.x=Math.sin(k*2.1)*.3}
    const tb=cyl(t,.12,.18,1.4,std('#ddd',.3,{metalness:.6}),0,1.8,0,12);tb.rotation.x=-1.1;g.add(t);colliders.push({x:p[0],z:p[1],r:.7})});
  // maquette du système solaire
  const sys=new THREE.Group();sys.position.set(0,0,2);
  cyl(sys,.1,.12,1.2,std('#555',.5,{metalness:.5}),0,.6,0,8);
  const sun=new THREE.Mesh(new THREE.SphereGeometry(.55,20,16),new THREE.MeshStandardMaterial({color:0xffd34a,emissive:0xffa600,emissiveIntensity:1.4}));sun.position.y=1.5;sys.add(sun);
  const plan=[[1,.1,'#9a8f85'],[1.5,.16,'#e0b97a'],[2.1,.17,'#2f7fd0'],[2.6,.13,'#c1440e'],[3.5,.35,'#d9a066'],[4.4,.3,'#e6d7a8']];
  const orbits=plan.map((p,i)=>{const o=new THREE.Group();o.position.y=1.5;const pl=new THREE.Mesh(new THREE.SphereGeometry(p[1],14,12),std(p[2],.7));pl.position.x=p[0]*.8+.5;o.add(pl);
    const ring=new THREE.Mesh(new THREE.RingGeometry(p[0]*.8+.49,p[0]*.8+.51,48),new THREE.MeshBasicMaterial({color:0x6fa8ff,transparent:true,opacity:.25,side:THREE.DoubleSide}));ring.rotation.x=Math.PI/2;ring.position.y=1.5;sys.add(ring);sys.add(o);return o});
  g.add(sys);colliders.push({x:0,z:2,r:.6});
  // lumière de la maquette
  const gl=new THREE.PointLight(0xffc860,2.2,12);gl.position.set(0,1.6,2);g.add(gl);
  // lampadaires bas
  [[-9,4],[9,4],[-9,-6],[9,-6]].forEach(p=>{cyl(g,.05,.06,2.6,std('#333'),p[0],1.3,p[1],6);const b=new THREE.Mesh(new THREE.SphereGeometry(.2,12,10),new THREE.MeshStandardMaterial({color:0xfff2c0,emissive:0xffd070,emissiveIntensity:1.6}));b.position.set(p[0],2.7,p[1]);g.add(b);colliders.push({x:p[0],z:p[1],r:.25})});
  [[-20,-3],[20,-3],[-18,8],[18,8]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-34,34,-18,14],count:6000,seed:27,exclude:(x,z)=>Math.abs(x)<10&&z>-18&&z<5||Math.abs(x)<3.2&&z>4});g.add(grass);
  return finish(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-6.5,z1:12.5},exitZ:10.4,sky:{elev:-7,azim:180,turb:.5,ray:.1},night:true,fog:.006,
    update(dt,t){grass.userData.update(t);orbits.forEach((o,i)=>{o.rotation.y=t*(.9-i*.12)});sun.rotation.y=t*.2}});
}

// ----------------------------------------------------------------- 14 · PORT
export function buildPort(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(114);
  ground(g,1400,1400,T.dirtTexture,1,0,0);
  const conc=new THREE.Mesh(new THREE.PlaneGeometry(60,24),new THREE.MeshStandardMaterial({color:0x8d9094,roughness:.95}));conc.rotation.x=-Math.PI/2;conc.position.set(0,.02,0);conc.receiveShadow=true;g.add(conc);
  // eau au fond
  const nm=waterNormal();nm.repeat.set(24,6);
  const wm=new THREE.MeshPhysicalMaterial({color:0x1d5a7a,roughness:.06,normalMap:nm,normalScale:new THREE.Vector2(.8,.8),envMapIntensity:1.3,transparent:true,opacity:.95});
  const sea=new THREE.Mesh(new THREE.PlaneGeometry(400,160),wm);sea.rotation.x=-Math.PI/2;sea.position.set(0,-.25,-95);g.add(sea);
  box(g,60,.7,2,std('#6b6e72',.95),0,.35,-12);boxes.push({x0:-30,x1:30,z0:-13.2,z1:-10.6});
  // navire cargo
  const sh=new THREE.Group();sh.position.set(-4,-.2,-24);
  box(sh,34,4.4,8,std('#25405f',.55),0,2.2,0);box(sh,34.2,.8,8.2,std('#b22222',.55),0,.3,0);
  const bow=new THREE.Mesh(new THREE.ConeGeometry(4,7,4),std('#25405f',.55));bow.rotation.z=-Math.PI/2;bow.rotation.y=Math.PI/4;bow.position.set(20,2.2,0);sh.add(bow);
  box(sh,6,6,6.6,std('#efefef',.5),-11,7.4,0);for(let i=0;i<3;i++)box(sh,6.04,.7,6.64,glass(),-11,6+i*1.4,0);
  cyl(sh,.7,.9,3,std('#d35400',.5),-12,12,0,12);
  const cols=['#c0392b','#2e86de','#f1c40f','#27ae60','#e67e22'];
  for(let k=0;k<4;k++)for(let l=0;l<2;l++)box(sh,2.4,2.4,6,std(cols[(k+l)%5],.55),-2+k*2.6,5.6+l*2.4,0);
  g.add(sh);
  // portique de levage
  const cr=new THREE.Group();cr.position.set(8,0,-9);const st=std('#e0a526',.5,{metalness:.35});
  [[-3,-3],[3,-3],[-3,3],[3,3]].forEach(q=>cyl(cr,.25,.3,14,st,q[0],7,q[1],8));
  box(cr,8,.8,.8,st,0,14,-3);box(cr,8,.8,.8,st,0,14,3);box(cr,.8,.8,8,st,0,14.4,0);
  const trolley=new THREE.Group();box(trolley,1.4,.6,1.4,std('#333'),0,0,0);cyl(trolley,.03,.03,5,std('#222'),0,-2.5,0,5);box(trolley,2.4,.5,.9,std('#c0392b',.55),0,-5.2,0);trolley.position.set(0,14,0);cr.add(trolley);
  g.add(cr);colliders.push({x:5,z:-12,r:.5},{x:11,z:-12,r:.5});
  // conteneurs empilés au sol
  [[-16,-3],[-13,-3],[-16,2],[15,3],[18,3],[15,-3.2]].forEach((p,i)=>{
    box(g,6,2.6,2.4,std(cols[i%5],.6),p[0],1.3,p[1]);if(i%2===0)box(g,6,2.6,2.4,std(cols[(i+2)%5],.6),p[0],3.9,p[1]);colliders.push({x:p[0],z:p[1],r:3.2})});
  // bollards, bouées, panneau
  [-12,-8,-4,0,4,12].forEach(x=>cyl(g,.2,.26,.6,std('#222',.6),x,.3,-10.1,10));
  const s=sign('PORT DE BANANA','Le Congo ouvert sur l’océan',6,1,'#1a3f66','#fff');s.position.set(-9,2.8,4);g.add(s);cyl(g,.07,.08,3,std('#555'),-9,1.5,3.95,6);cyl(g,.07,.08,3,std('#555'),-12,1.5,3.95,6);
  // mouettes
  const gulls=[];for(let i=0;i<5;i++){const b=new THREE.Mesh(new THREE.ConeGeometry(.12,.4,4),std('#f7f7f7',.8));b.rotation.x=Math.PI/2;b.position.set(-10+i*5,10+i%3,-14);g.add(b);gulls.push(b)}
  return finish(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-9.2,z1:12.5},exitZ:10.4,sky:{elev:28,azim:300,turb:4},
    update(dt,t){nm.offset.x=(t*.025)%1;nm.offset.y=(t*.012)%1;trolley.position.x=Math.sin(t*.4)*3;
      gulls.forEach((b,i)=>{b.position.x=-10+i*5+Math.sin(t*.5+i)*8;b.position.y=10+Math.sin(t*.9+i)*1.2})}});
}

// ----------------------------------------------------------------- 15 · PARLEMENT
export function buildParlement(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(115);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  const mar=new THREE.MeshStandardMaterial({map:T.plasterTexture('#f4efe4'),roughness:.55,metalness:.05});
  const pave=new THREE.Mesh(new THREE.PlaneGeometry(44,28),new THREE.MeshStandardMaterial({map:T.plasterTexture('#cfc4ae'),roughness:.9}));pave.rotation.x=-Math.PI/2;pave.position.set(0,.02,-3);pave.receiveShadow=true;g.add(pave);
  patch(g,0,9,5,10,T.dirtTexture);
  // façade, colonnes, fronton, coupole
  box(g,30,7,9,mar,0,3.5,-16);
  for(let i=0;i<4;i++)box(g,16-i*.5,.25,.7,mar,0,.12+i*.25,-10.8+i*-.0),0;
  for(let i=0;i<4;i++)box(g,18,.25,.9,mar,0,.12+i*.25,-9.6+(3-i)*.5);
  for(let i=0;i<8;i++){const px=-7.7+i*2.2;cyl(g,.45,.5,6.4,mar,px,3.9,-11.6,18);cyl(g,.6,.6,.3,mar,px,.95+.1,-11.6,18);cyl(g,.6,.6,.3,mar,px,7.2,-11.6,18)}
  const fr=new THREE.Mesh(new THREE.ConeGeometry(11,2.6,3),mar);fr.rotation.y=Math.PI/2;fr.scale.set(.4,1,1);fr.rotation.z=0;fr.position.set(0,8.5,-11.5);fr.rotation.x=0;fr.scale.set(1,1,.35);fr.rotation.y=Math.PI;fr.position.y=8.7;g.add(fr);
  box(g,20,.5,2.2,mar,0,7.6,-11.5);
  const dm=new THREE.Mesh(new THREE.SphereGeometry(4.6,32,16,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xcfd6dc,roughness:.4,metalness:.5}));dm.position.set(0,7,-16);dm.castShadow=true;g.add(dm);
  cyl(g,4.7,4.8,1.2,mar,0,6.9,-16,32);cyl(g,.1,.12,2.4,std('#c9a03d',.3,{metalness:.8}),0,12.8,-16,8);
  box(g,3.2,4.4,.2,std('#3a2418',.7),0,2.2,-11.1);
  const bn=sign('PARLEMENT','Les lois protègent tous les citoyens',9,1.2,'#0b3d6b','#fff');bn.position.set(0,9.8,-11.6);g.add(bn);
  boxes.push({x0:-15.3,x1:15.3,z0:-20.6,z1:-9});
  // mâts et drapeaux
  [-8,-4,4,8].forEach(px=>{cyl(g,.05,.06,7,std('#aaa',.4,{metalness:.7}),px,3.5,0,8);const f=new THREE.Mesh(new THREE.PlaneGeometry(2.2,1.4,8,4),new THREE.MeshStandardMaterial({map:flagTexture(),side:THREE.DoubleSide,roughness:.9}));f.position.set(px+1.1,6.2,0);g.add(f);colliders.push({x:px,z:0,r:.3})});
  const flags=g.children.filter(c=>c.geometry&&c.geometry.type==='PlaneGeometry'&&c.geometry.parameters.widthSegments===8);
  // fontaine
  cyl(g,2.6,2.7,.55,mar,0,.28,4,28);cyl(g,2.3,2.3,.1,new THREE.MeshPhysicalMaterial({color:0x2a7a9a,roughness:.05,transparent:true,opacity:.88}),0,.55,4,28);cyl(g,.3,.4,1.9,mar,0,1.2,4,12);colliders.push({x:0,z:4,r:2.7});
  // statue de la Justice (balance)
  const j=new THREE.Group();j.position.set(-9,0,0);box(j,1.4,1.2,1.4,mar,0,.6,0);cyl(j,.28,.35,1.8,std('#b8860b',.4,{metalness:.8}),0,2.1,0,12);
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.22,14,12),std('#b8860b',.4,{metalness:.8}));hd.position.y=3.2;j.add(hd);box(j,1.6,.05,.05,std('#b8860b',.4,{metalness:.8}),0,2.9,0);
  [-.8,.8].forEach(s=>{cyl(j,.28,.28,.04,std('#b8860b',.4,{metalness:.8}),s,2.5,0,12)});g.add(j);colliders.push({x:-9,z:0,r:1});
  // allée et haies
  for(let i=0;i<8;i++){[-1,1].forEach(s=>{const h=new THREE.Mesh(new THREE.BoxGeometry(1.6,1,1.6),std('#2f6a2a',1));h.position.set(s*6.2,.5,-8+i*2.2);if(i>2||true)g.add(h)})}
  [[-22,-2],[22,-2],[-20,8],[20,8]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-36,36,-3,14],count:6000,seed:28,exclude:(x,z)=>Math.abs(x)<23&&z>-16&&z<-2||Math.abs(x)<3.2&&z>4});g.add(grass);
  return finish(g,colliders,boxes,{bounds:{x0:-27,x1:27,z0:-8.5,z1:12.5},exitZ:10.4,sky:{elev:8,azim:255,turb:6,ray:2},fog:.007,
    update(dt,t){grass.userData.update(t);flags.forEach((f,i)=>{const p=f.geometry.attributes.position;for(let k=0;k<p.count;k++){const x=p.getX(k);p.setZ(k,Math.sin(x*2.2+t*3+i)*.12*(x+1.1)/2.2)}p.needsUpdate=true})}});
}
