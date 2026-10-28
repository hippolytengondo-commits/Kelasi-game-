import * as THREE from 'three';
import {panneauLex,enseigneLex} from './pub.js';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree,flagTexture} from './world.js';
import {leafyTree,palm,grassField,bush,leafTexture} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Épisodes 6 à 15 : bibliothèque, gare, ferme, forêt, musée, stade, mine, observatoire, port, Parlement.
const stone=()=>new THREE.MeshStandardMaterial({map:T.plasterTexture('#efe8da'),roughness:.9});
const tin=()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35});
const brick=()=>new THREE.MeshStandardMaterial({map:T.brickTexture([198,108,62]),roughness:.9});
const wood=c=>new THREE.MeshStandardMaterial({map:T.woodTexture(c||'#9a6a3f'),roughness:.88});
const glass=()=>std('#9fc6dd',.12,{emissive:0x4da6d9,emissiveIntensity:.25,metalness:.2});
function bench(g,x,z,ry,colliders){
  const s=new THREE.Group();s.position.set(x,0,z);s.rotation.y=ry||0;
  box(s,2,.1,.5,std('#7a4a26',.9),0,.5,0);box(s,.1,.5,.42,std('#4a2f1b'),-.9,.25,0);box(s,.1,.5,.42,std('#4a2f1b'),.9,.25,0);
  g.add(s);if(colliders)colliders.push({x:x,z:z,r:1});
}
function cleanup(g,colliders,boxes,o){
  exitSign(g,o.exitX===undefined?-3.8:o.exitX,o.exitZ);colliders.push({x:o.exitX===undefined?-3.8:o.exitX,z:o.exitZ,r:.3});
  return Object.assign({group:g,colliders,boxes,dyn:{},exit:{x:0,z:o.exitZ-1}},o);
}
const noop=()=>{};

// ----------------------------------------------------------------- 6 · BIBLIOTHÈQUE
export function buildBiblio(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(101);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,-3,26,16,T.dirtTexture);patch(g,0,8,5,16,T.dirtTexture);
  // bâtiment
  box(g,24,6.4,8,stone(),0,3.2,-15);box(g,24.6,.5,8.6,std('#cfc6b2'),0,6.6,-15);
  for(let i=0;i<6;i++){box(g,1.6,2.4,.1,glass(),-9.5+i*3.8,3.4,-10.95);box(g,1.9,.12,.2,std('#e7dcc5'),-9.5+i*3.8,2.1,-10.9)}
  box(g,3,3.4,.15,glass(),0,1.7,-10.95);box(g,.12,3.4,.2,std('#5a3a22'),0,1.7,-10.9);
  box(g,6.7,2.3,.12,std('#1b3a6b'),0,5.35,-10.93);const sg=enseigneLex(6.4);sg.position.set(0,5.35,-10.85);g.add(sg);
  const pbl=panneauLex(4.4);pbl.position.set(-17,0,1.5);pbl.rotation.y=Math.PI/2;g.add(pbl);colliders.push({x:-17,z:1.5,r:1.7});
  boxes.push({x0:-12.5,x1:12.5,z0:-19.5,z1:-10.7});
  // sculpture : grand livre ouvert
  const pg=new THREE.MeshStandardMaterial({color:0xf5efe0,roughness:.85}),cv=std('#7a2a2a',.7);
  const book=new THREE.Group();book.position.set(0,0,-1);
  box(book,3.4,.2,2.2,cv,0,.25,0);
  const l=box(book,1.6,.12,2,pg,-.85,.6,0);l.rotation.z=.2;const rr=box(book,1.6,.12,2,pg,.85,.6,0);rr.rotation.z=-.2;
  box(book,3.8,.5,2.6,std('#cfc6b2'),0,.25,0).position.y=.1;
  g.add(book);colliders.push({x:0,z:-1,r:2});
  // arbre à palabres, bancs
  const big=leafyTree({kind:'mango',seed:12,fruits:false,trunk:3.4});big.position.set(7,0,-3);big.scale.setScalar(1.35);g.add(big);colliders.push({x:7,z:-3,r:.8});
  bench(g,5.4,-1.4,.5,colliders);bench(g,9,-1.6,-.5,colliders);bench(g,-6,-1,0,colliders);bench(g,-8.5,-4,1.4,colliders);
  // boîte à livres
  const bx=new THREE.Group();bx.position.set(-13,0,-2);
  cyl(bx,.06,.07,1.3,std('#5a3a22'),0,.65,0,6);box(bx,.7,.6,.5,wood('#b0824a'),0,1.45,0);
  const rf=box(bx,.9,.1,.7,std('#a8301e'),0,1.85,0);g.add(bx);colliders.push({x:-13,z:-2,r:.5});
  // arbres, buissons, herbe
  [[-20,-4],[20,-5],[-18,6],[19,7],[-24,0],[24,1]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.12,false,null,colliders,i%2===1));
  for(let i=0;i<16;i++){const b=bush(i+21,.6+r()*.5);const x=-24+r()*48,z=-12+r()*22;if(Math.abs(x)<8&&z<2)continue;b.position.set(x,0,z);g.add(b)}
  const grass=grassField({area:[-34,34,-14,14],count:12000,seed:21,exclude:(x,z)=>Math.abs(x)<13&&z>-12&&z<5||Math.abs(x)<3.2&&z>4});g.add(grass);
  return cleanup(g,colliders,boxes,{bounds:{x0:-27,x1:27,z0:-9.5,z1:12.5},update(dt,t){grass.userData.update(t)},exitZ:10.4,sky:{elev:40,azim:200}});
}

// ----------------------------------------------------------------- 7 · GARE ROUTIÈRE
export function buildGare(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(102);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  // chaussée
  const asph=new THREE.MeshStandardMaterial({color:0x34373b,roughness:.95});
  const road=new THREE.Mesh(new THREE.PlaneGeometry(1400,8),asph);road.rotation.x=-Math.PI/2;road.position.set(0,.02,-3);road.receiveShadow=true;g.add(road);
  [-7.4,.8].forEach(z=>{const sw=new THREE.Mesh(new THREE.BoxGeometry(1400,.18,3),std('#b9b3a8',.95));sw.position.set(0,.09,z);sw.receiveShadow=true;g.add(sw)});
  // marquage au sol et passage piéton
  const white=std('#f2f2f2',.8),dash=[];
  for(let i=-30;i<30;i++){const d=new THREE.BoxGeometry(2,.01,.18);d.translate(i*3,.04,-3);dash.push(d)}
  g.add(new THREE.Mesh(mergeGeometries(dash),white));
  const zeb=[];for(let k=0;k<8;k++){const d=new THREE.BoxGeometry(.5,.01,3.6);d.translate(-6+k*.9,.04,-3);zeb.push(d)}
  g.add(new THREE.Mesh(mergeGeometries(zeb),white));
  // feu tricolore
  const tl=new THREE.Group();tl.position.set(-8.2,0,.9);cyl(tl,.06,.08,3.4,std('#444',.5,{metalness:.4}),0,1.7,0,8);
  const hd=box(tl,.36,1.1,.3,std('#222'),0,3.5,0);
  const lr=new THREE.Mesh(new THREE.SphereGeometry(.12,12,10),new THREE.MeshStandardMaterial({color:0x330000,emissive:0xff2200,emissiveIntensity:1.6}));lr.position.set(0,3.8,.16);
  const lg=new THREE.Mesh(new THREE.SphereGeometry(.12,12,10),new THREE.MeshStandardMaterial({color:0x003300,emissive:0x00ff44,emissiveIntensity:.1}));lg.position.set(0,3.2,.16);
  tl.add(lr);tl.add(lg);g.add(tl);colliders.push({x:-8.2,z:.9,r:.3});
  // abribus
  const sh=new THREE.Group();sh.position.set(-12,0,-6.4);
  [[-1.6,-.5],[1.6,-.5],[-1.6,.5],[1.6,.5]].forEach(p=>cyl(sh,.05,.05,2.5,std('#444',.5,{metalness:.5}),p[0],1.25,p[1],8));
  box(sh,3.6,.12,1.5,tin(),0,2.55,0);box(sh,3,.08,.5,std('#7a4a26'),0,.55,.35);
  const bs=sign('ARRÊT DE BUS','',1.6,.5,'#2e86de','#fff');bs.position.set(0,2.2,-.55);sh.add(bs);g.add(sh);colliders.push({x:-12,z:-6.4,r:1.8});
  // bus jaune et bleu
  const bus=new THREE.Group();bus.position.set(9,0,-5.4);
  box(bus,9,2.9,2.7,std('#e0a526',.4),0,1.7,0);box(bus,9.02,.9,2.72,std('#1f5fa8',.4),0,.7,0);
  for(let i=0;i<6;i++)box(bus,1.1,.9,2.76,glass(),-3.6+i*1.45,2.1,0);
  box(bus,.05,1.2,2.2,glass(),4.52,2,0);
  [[-3,1.35],[3,1.35],[-3,-1.35],[3,-1.35]].forEach(p=>{const w=cyl(bus,.55,.55,.35,std('#1a1a1a',.9),p[0],.55,p[1],18);w.rotation.x=Math.PI/2});
  const bn=sign('TRANSCO','Kinshasa',3.6,.9,'#1f5fa8','#f1c40f');bn.position.set(0,2.95,1.37);bus.add(bn);
  g.add(bus);colliders.push({x:6,z:-5.4,r:2.2},{x:9,z:-5.4,r:2.2},{x:12,z:-5.4,r:2.2});
  // voitures qui passent
  const cars=[];
  [['#c0392b',-1],['#2e86de',1],['#f2f2f2',-1]].forEach((c,i)=>{
    const car=new THREE.Group();box(car,4,1,1.8,std(c[0],.35),0,.75,0);box(car,2.2,.8,1.7,glass(),-.2,1.5,0);
    [[-1.3,.95],[1.3,.95],[-1.3,-.95],[1.3,-.95]].forEach(p=>{const w=cyl(car,.38,.38,.28,std('#1a1a1a',.9),p[0],.38,p[1],14);w.rotation.x=Math.PI/2});
    car.position.set(-40+i*25,0,-3+(c[1]>0?1.5:-1.5));car.rotation.y=c[1]>0?0:Math.PI;car.userData.dir=c[1]>0?1:-1;g.add(car);cars.push(car);
  });
  // gare : bâtiment et auvent
  box(g,18,4.6,7,brick(),-6,2.3,-15);gableRoof(g,-6,4.6,-15,18,7,1.6,tin(),std('#e9dfca'),.7);
  const st=sign('GARE ROUTIÈRE','Kinshasa — Matadi — Lubumbashi',8,1.2,'#1f5fa8','#fff');st.position.set(-6,3.4,-11.45);g.add(st);
  box(g,3,3,.12,std('#5a3a22'),-6,1.5,-11.48);boxes.push({x0:-15.5,x1:3.5,z0:-18.8,z1:-11.4});
  // panneaux de signalisation (ronds, triangles)
  const sg=(x,z,col)=>{cyl(g,.04,.04,2.4,std('#777',.5,{metalness:.6}),x,1.2,z,6);const d=cyl(g,.4,.4,.05,std(col,.5),x,2.5,z,20);d.rotation.x=Math.PI/2;colliders.push({x:x,z:z,r:.25})};
  sg(-4.4,.9,'#c0392b');sg(2.8,.9,'#2e86de');sg(15,.9,'#e0a526');
  // arbres le long des trottoirs
  [-20,-15,-10,10,16,20,24].forEach((x,i)=>tree(g,x,3.6+(i%2)*.5,.9+(i%3)*.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-34,34,2,14],count:9000,seed:22,exclude:(x,z)=>z<2.4||Math.abs(x)<5&&z>2});g.add(grass);
  const phase=()=>0;
  return cleanup(g,colliders,boxes,{bounds:{x0:-28,x1:28,z0:-10,z1:12.5},exitZ:10.4,sky:{elev:46,azim:150},
    update(dt,t){
      grass.userData.update(t);
      cars.forEach(c=>{c.position.x+=c.userData.dir*dt*7;if(c.position.x>45)c.position.x=-45;if(c.position.x<-45)c.position.x=45});
      const m=t%10;lr.material.emissiveIntensity=m<5?1.6:.1;lg.material.emissiveIntensity=m<5?.1:1.6;
    }});
}

// ----------------------------------------------------------------- 8 · FERME
export function buildFerme(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(103);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,8,5,16,T.dirtTexture);patch(g,0,-4,5,14,T.dirtTexture);
  // champs : sol labouré et plants
  const soil=new THREE.MeshStandardMaterial({map:T.dirtTexture(),roughness:1,color:0x7a5538});
  [[-14,-9,14,9],[14,-9,14,9]].forEach(f=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(f[2],f[3]),soil);m.rotation.x=-Math.PI/2;m.position.set(f[0],.03,f[1]);m.receiveShadow=true;g.add(m)});
  // manioc (gauche) et maïs (droite) : plants instanciés
  const plant=(kind)=>{
    const geos=[];
    const stem=new THREE.CylinderGeometry(.025,.035,kind==='maize'?1.8:1.3,5);stem.translate(0,(kind==='maize'?.9:.65),0);geos.push(stem);
    for(let i=0;i<(kind==='maize'?6:5);i++){const lf=new THREE.PlaneGeometry(.1,kind==='maize'?.9:.55,1,3);lf.translate(0,.3,0);lf.rotateX(-.9);lf.translate(0,(kind==='maize'?.4+i*.22:.7+i*.12),0);lf.rotateY(i*1.25);geos.push(lf)}
    return mergeGeometries(geos);
  };
  [['cassava',-14,-9],['maize',14,-9]].forEach(f=>{
    const kind=f[0],geo=plant(kind),m=new THREE.InstancedMesh(geo,std(kind==='maize'?'#5d8a2e':'#3e7d34',.85,{side:THREE.DoubleSide}),420),m4=new THREE.Matrix4();
    let n=0;for(let a=0;a<10;a++)for(let b=0;b<26&&n<420;b++){const x=f[1]-6+b*.48,z=f[2]-3.6+a*.8+r()*.1;m4.compose(new THREE.Vector3(x,0,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(0,r()*6,(r()-.5)*.15)),new THREE.Vector3(.9+r()*.3,.9+r()*.35,.9+r()*.3));m.setMatrixAt(n++,m4)}
    m.castShadow=true;g.add(m);
  });
  // grange
  box(g,10,4.6,7,wood('#8a4a2a'),-3,2.3,-19);gableRoof(g,-3,4.6,-19,10,7,2,tin(),wood('#8a4a2a'),.7);
  box(g,3.4,3.4,.15,wood('#5a3a22'),-3,1.7,-15.45);
  boxes.push({x0:-8.2,x1:2.2,z0:-22.8,z1:-15.4});
  // clôture
  for(let x=-24;x<=24;x+=2){cyl(g,.07,.07,1.3,wood('#7a5a35'),x,.65,-3,6)}
  box(g,48,.07,.07,wood('#7a5a35'),0,1.05,-3);box(g,48,.07,.07,wood('#7a5a35'),0,.6,-3);
  // épouvantail
  const sc=new THREE.Group();sc.position.set(13,0,-3.8);cyl(sc,.04,.05,2.2,wood('#6b4226'),0,1.1,0,6);box(sc,1.6,.06,.06,wood('#6b4226'),0,1.6,0);
  box(sc,.5,.8,.3,std('#c0392b',.9),0,1.4,0);const hd=new THREE.Mesh(new THREE.SphereGeometry(.17,12,10),std('#d9b46a',.9));hd.position.y=2;sc.add(hd);
  const ht=new THREE.Mesh(new THREE.ConeGeometry(.3,.35,12),std('#7a5a35',.9));ht.position.y=2.25;sc.add(ht);g.add(sc);colliders.push({x:13,z:-3.8,r:.35});
  // vaches
  const cows=[];
  [[-8,2.5,'#f2f2f2'],[-3.5,4.5,'#7a4a2a'],[6,3.2,'#d9b48a']].forEach((c,i)=>{
    const cow=new THREE.Group();cow.position.set(c[0],0,c[1]);cow.rotation.y=r()*6;
    box(cow,1.9,.9,.8,std(c[2],.85),0,1.1,0);
    [[-.7,.28],[.7,.28],[-.7,-.28],[.7,-.28]].forEach(p=>box(cow,.14,.8,.14,std(c[2],.85),p[0],.4,p[1]));
    const head=new THREE.Group();head.position.set(1.1,1.35,0);box(head,.5,.42,.4,std(c[2],.85),0,0,0);box(head,.14,.14,.5,std('#2a1a12'),.28,-.12,0);
    [-.18,.18].forEach(s=>box(head,.06,.2,.06,std('#e9dfca'),-.05,.28,s));
    cow.add(head);cow.userData.head=head;box(cow,.08,.6,.08,std('#2a1a12'),-1,.9,0);
    g.add(cow);cows.push(cow);colliders.push({x:c[0],z:c[1],r:1});
  });
  // botte de foin, abreuvoir
  [[16,4],[18,5.2]].forEach(p=>{const h=cyl(g,.8,.8,1.1,std('#d4b36a',1),p[0],.55,p[1],14);colliders.push({x:p[0],z:p[1],r:.9})});
  box(g,2.4,.5,.7,wood('#6a4a2a'),-14,.25,5);colliders.push({x:-14,z:5,r:1.3});
  // arbres, buissons, herbe
  const big=leafyTree({kind:'mango',seed:31,fruits:true,trunk:3.2});big.position.set(-20,0,3);big.scale.setScalar(1.3);g.add(big);colliders.push({x:-20,z:3,r:.8});
  [[20,6],[-24,-6],[24,-14],[-18,10],[18,11]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.12,false,null,colliders,i%2===0));
  const grass=grassField({area:[-34,34,-3,14],count:14000,seed:23,exclude:(x,z)=>Math.abs(x)<3&&z>-4});g.add(grass);
  return cleanup(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-2.5,z1:12.5},exitZ:10.4,sky:{elev:44,azim:215},
    update(dt,t){grass.userData.update(t);cows.forEach((c,i)=>{c.userData.head.rotation.z=-.35+Math.sin(t*.7+i*2)*.25})}});
}

// ----------------------------------------------------------------- 9 · FORÊT ÉQUATORIALE
export function buildForet(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(104);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  const moss=new THREE.Mesh(new THREE.PlaneGeometry(90,90),new THREE.MeshStandardMaterial({color:0x31502a,roughness:1}));moss.rotation.x=-Math.PI/2;moss.position.set(0,.015,-8);moss.receiveShadow=true;g.add(moss);
  patch(g,0,3,5,22,T.dirtTexture);patch(g,0,-3,14,9,T.dirtTexture);
  // arbres hauts et serrés (hors clairière)
  for(let i=0;i<46;i++){
    const a=r()*Math.PI*2,d=11+r()*20,x=Math.cos(a)*d*1.2,z=-4+Math.sin(a)*d*.9;
    if(Math.abs(x)<7&&z>-8&&z<12)continue;
    const t=leafyTree({kind:i%3?'leafy':'mango',seed:i+40,fruits:false,trunk:4.6+r()*2,cards:70});t.position.set(x,0,z);t.scale.setScalar(1.5+r()*.9);t.rotation.y=r()*6;g.add(t);colliders.push({x:x,z:z,r:.9});
  }
  [[-12,6],[12,6],[-14,-9],[14,-10]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  // fougères (feuilles en éventail instanciées)
  const fg=[];for(let i=0;i<7;i++){const f=new THREE.PlaneGeometry(.35,1.4,1,2);f.translate(0,.7,0);f.rotateX(-.8);f.rotateY(i*.9);fg.push(f)}
  const fern=new THREE.InstancedMesh(mergeGeometries(fg),std('#3e7a35',.85,{side:THREE.DoubleSide}),360),m4=new THREE.Matrix4();
  for(let i=0;i<360;i++){const x=-30+r()*60,z=-20+r()*34;if(Math.abs(x)<3&&z>-6)continue;m4.compose(new THREE.Vector3(x,0,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(0,r()*6,0)),new THREE.Vector3(.8+r()*.8,.8+r()*.8,.8+r()*.8));fern.setMatrixAt(i,m4)}
  fern.receiveShadow=true;g.add(fern);
  for(let i=0;i<26;i++){const b=bush(i+61,.7+r()*.7);const x=-28+r()*56,z=-18+r()*30;if(Math.abs(x)<5&&z>-6)continue;b.position.set(x,0,z);g.add(b)}
  // troncs au sol
  [[-8,-2,.6],[9,-5,-.4],[-4,-9,1.2]].forEach(p=>{const l=cyl(g,.35,.4,4.2,std('#4a3820',.95),p[0],.35,p[1],10);l.rotation.z=Math.PI/2;l.rotation.y=p[2];colliders.push({x:p[0],z:p[1],r:1.2})});
  // ruisseau
  const nm=waterNormal();nm.repeat.set(10,3);
  const wm=new THREE.MeshPhysicalMaterial({color:0x2f6a54,roughness:.08,normalMap:nm,normalScale:new THREE.Vector2(.6,.6),envMapIntensity:1.2,transparent:true,opacity:.93});
  const stream=new THREE.Mesh(new THREE.PlaneGeometry(60,2.6),wm);stream.rotation.x=-Math.PI/2;stream.position.set(0,.04,-11.6);g.add(stream);
  boxes.push({x0:-30,x1:30,z0:-13.2,z1:-10.2});
  // panneau du parc et cabane du garde
  cyl(g,.07,.08,2.4,wood('#5a3a22'),4.8,1.2,2,8);const ps=sign('PARC NATIONAL','Ne laisse que tes pas',2.6,1.3,'#2f5f2a','#fff');ps.position.set(4.8,2.5,2.07);g.add(ps);colliders.push({x:4.8,z:2,r:.4});
  box(g,5,2.8,4,wood('#7a4a2a'),-9,1.4,-3.5);gableRoof(g,-9,2.8,-3.5,5,4,1.1,new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1}),wood('#7a4a2a'),.5);
  box(g,1,1.9,.1,wood('#3a2418'),-9,.95,-1.45);boxes.push({x0:-11.7,x1:-6.3,z0:-5.7,z1:-1.3});
  // rayons de soleil à travers la canopée
  const rays=[];
  for(let i=0;i<7;i++){const c=new THREE.Mesh(new THREE.CylinderGeometry(.15,1.6,16,12,1,true),new THREE.MeshBasicMaterial({color:0xfff2c0,transparent:true,opacity:.06,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,fog:false}));
    c.position.set(-10+i*3.4+r()*2,8,-2+r()*8);c.rotation.z=.32;c.rotation.x=-.15;g.add(c);rays.push(c)}
  return cleanup(g,colliders,boxes,{bounds:{x0:-22,x1:22,z0:-9.5,z1:12.5},exitZ:10.4,sky:{elev:52,azim:200,turb:2.2},fog:.011,
    update(dt,t){nm.offset.x=(t*.03)%1;rays.forEach((c,i)=>{c.material.opacity=.045+Math.sin(t*.6+i)*.025})}});
}

// ----------------------------------------------------------------- 10 · MUSÉE
function mask(g,x,z,s,col){
  const m=new THREE.Group();m.position.set(x,1.9,z);m.scale.setScalar(s||1);
  const face=new THREE.Mesh(new THREE.SphereGeometry(.42,20,16),std(col||'#6b3f20',.7));face.scale.set(.75,1.1,.45);m.add(face);
  [-1,1].forEach(sd=>{const e=new THREE.Mesh(new THREE.SphereGeometry(.07,10,8),std('#f1e7c8',.5));e.scale.set(1.4,.5,.6);e.position.set(sd*.16,.12,.17);m.add(e)});
  const nose=new THREE.Mesh(new THREE.ConeGeometry(.07,.4,6),std(col||'#6b3f20',.7));nose.position.set(0,-.02,.2);nose.rotation.x=.3;m.add(nose);
  const mouth=new THREE.Mesh(new THREE.TorusGeometry(.12,.03,6,12,Math.PI),std('#3a2010',.7));mouth.position.set(0,-.26,.16);mouth.rotation.z=Math.PI;m.add(mouth);
  for(let i=0;i<9;i++){const f=new THREE.Mesh(new THREE.CylinderGeometry(.01,.02,.45,5),std('#c9a55a',.8));const a=i/9*Math.PI*2;f.position.set(Math.cos(a)*.3,.55+Math.sin(a)*.2,0);f.rotation.z=a-Math.PI/2;m.add(f)}
  g.add(m);return m;
}
export function buildMusee(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(105);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  const paving=new THREE.Mesh(new THREE.PlaneGeometry(40,26),new THREE.MeshStandardMaterial({map:T.plasterTexture('#cbbfa8'),roughness:.95}));paving.rotation.x=-Math.PI/2;paving.position.set(0,.02,-3);paving.receiveShadow=true;g.add(paving);
  patch(g,0,8,5,16,T.dirtTexture);
  const st=stone(),dk=std('#cfc6b2',.9);
  box(g,28,7,9,st,0,3.5,-15);box(g,28.8,.5,9.8,dk,0,7.2,-15);
  for(let i=0;i<4;i++)box(g,16-i*.4,.2,.6,dk,0,.1+i*.2,-10.4+(3-i)*.0-i*.0);
  for(let i=0;i<4;i++){const s=box(g,16,.2,.6,dk,0,.1+i*.2,-8.2-i*.55)}
  // grandes baies vitrées et bannières
  [-8,-4,4,8].forEach(x=>{box(g,2.4,4,.12,glass(),x,3.6,-10.45)});
  box(g,4,4.4,.2,std('#3a2418',.7),0,2.2,-10.4);
  const bn=sign('MUSÉE NATIONAL','Mémoire et culture du Congo',11,1.5,'#7a1f1f','#fff');bn.position.set(0,6.4,-10.4);g.add(bn);
  [[-11,'#c0392b'],[11,'#2e86de']].forEach(b=>{const f=new THREE.Mesh(new THREE.PlaneGeometry(1.6,4.5),new THREE.MeshStandardMaterial({color:b[1],side:THREE.DoubleSide,roughness:.9}));f.position.set(b[0],4.2,-10.35);g.add(f)});
  boxes.push({x0:-14.5,x1:14.5,z0:-19.8,z1:-7.2});
  // statues et masques sur socles
  [[-10,-1.5,'#6b3f20'],[-6,-8,'#7a2a1a'],[6,-8,'#3f5a2a'],[10,-1.5,'#6b3f20']].forEach((p,i)=>{
    box(g,1.3,1.3,1.3,dk,p[0],.65,p[1]);cyl(g,.35,.4,.7,std('#4a2e18',.8),p[0],1.65,p[1],12);
    const mk=mask(g,p[0],p[1],1,p[2]);mk.position.y=2.45;colliders.push({x:p[0],z:p[1],r:1});
  });
  // tambours de la rumba
  [[-3,-3],[3,-4]].forEach(p=>{const d=cyl(g,.45,.35,1,std('#8a5a32',.8),p[0],.6,p[1],14);cyl(g,.46,.46,.06,std('#e9dfca',.8),p[0],1.1,p[1],14);colliders.push({x:p[0],z:p[1],r:.55})});
  // fontaine
  cyl(g,2.4,2.5,.5,dk,0,.25,3,24);const wtr=cyl(g,2.1,2.1,.1,new THREE.MeshPhysicalMaterial({color:0x2a7a9a,roughness:.05,transparent:true,opacity:.85}),0,.5,3,24);cyl(g,.25,.3,1.6,dk,0,1.1,3,12);colliders.push({x:0,z:3,r:2.5});
  // fresque murale : couleurs du drapeau
  const fl=new THREE.Mesh(new THREE.PlaneGeometry(5,3),new THREE.MeshStandardMaterial({map:flagTexture(),roughness:.8,side:THREE.DoubleSide}));fl.position.set(-16,3,-4);fl.rotation.y=Math.PI/2;g.add(fl);
  [[-20,-6],[20,-6],[-19,7],[19,7],[-24,0],[24,0]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.12,false,null,colliders,i%2===0));
  for(let i=0;i<14;i++){const b=bush(i+71,.6+r()*.4);const x=-24+r()*48,z=-8+r()*20;if(Math.abs(x)<9&&z<6||Math.abs(x)<3)continue;b.position.set(x,0,z);g.add(b)}
  const grass=grassField({area:[-34,34,-8,14],count:9000,seed:25,exclude:(x,z)=>Math.abs(x)<20&&z>-16&&z<4||Math.abs(x)<3.2&&z>3});g.add(grass);
  return cleanup(g,colliders,boxes,{bounds:{x0:-27,x1:27,z0:-9.5,z1:12.5},exitZ:10.4,sky:{elev:36,azim:230},
    update(dt,t){grass.userData.update(t)}});
}
