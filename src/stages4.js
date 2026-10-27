import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree,flagTexture} from './world.js';
import {leafyTree,palm,grassField,bush} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const stone=()=>new THREE.MeshStandardMaterial({map:T.plasterTexture('#efe8da'),roughness:.9});
const tin=()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35});
const glass=()=>std('#9fc6dd',.12,{emissive:0x4da6d9,emissiveIntensity:.25,metalness:.2});
const thatch=()=>new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1});
function finish(g,colliders,boxes,o){
  exitSign(g,-3.8,10.4);colliders.push({x:-3.8,z:10.4,r:.3});
  return Object.assign({group:g,colliders,boxes,dyn:{},exit:{x:0,z:9.4}},o);
}
function water(w,h,rep,col,op){
  const nm=waterNormal();nm.repeat.set(rep[0],rep[1]);
  const m=new THREE.MeshPhysicalMaterial({color:col||0x2a7a9a,roughness:.07,normalMap:nm,normalScale:new THREE.Vector2(.8,.8),envMapIntensity:1.2,transparent:true,opacity:op||.92});
  return {mesh:new THREE.Mesh(new THREE.PlaneGeometry(w,h),m),nm};
}

// ----------------------------------------------------------------- 16 · AÉROPORT
export function buildAeroport(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(121);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  const asph=new THREE.MeshStandardMaterial({color:0x3a3d42,roughness:.95});
  const tar=new THREE.Mesh(new THREE.PlaneGeometry(70,34),asph);tar.rotation.x=-Math.PI/2;tar.position.set(0,.02,-4);tar.receiveShadow=true;g.add(tar);
  patch(g,0,9,5,10,T.dirtTexture);
  const mk=[];for(let i=-6;i<=6;i++){const d=new THREE.BoxGeometry(.3,.01,3);d.translate(i*5,.04,0);mk.push(d)}
  g.add(new THREE.Mesh(mergeGeometries(mk),std('#f2f2f2',.8)));
  // terminal
  box(g,34,6,8,stone(),0,3,-21);box(g,34.4,.5,8.6,std('#7a8590'),0,6.2,-21);
  for(let i=0;i<8;i++)box(g,3,3,.12,glass(),-12+i*3.4,2.6,-16.95);
  const sg=sign('AÉROPORT DE N’DJILI','Kinshasa — le monde à portée de main',12,1.5,'#12335f','#fff');sg.position.set(0,5,-16.9);g.add(sg);
  boxes.push({x0:-17.5,x1:17.5,z0:-25.5,z1:-16.7});
  // tour de contrôle
  const tw=new THREE.Group();tw.position.set(-14,0,-12);cyl(tw,1.1,1.4,11,stone(),0,5.5,0,16);
  cyl(tw,2.3,1.6,2,glass(),0,12,0,16);cyl(tw,2.5,2.5,.4,std('#7a8590'),0,13.2,0,16);cyl(tw,.05,.05,2.5,std('#c0392b'),0,14.6,0,6);g.add(tw);colliders.push({x:-14,z:-12,r:1.6});
  // avion
  const pl=new THREE.Group();pl.position.set(14,0,-4);const wh=std('#f2f2f2',.35,{metalness:.2});
  const fus=cyl(pl,1.3,1.3,14,wh,0,2.2,0,24);fus.rotation.x=Math.PI/2;
  const nose=new THREE.Mesh(new THREE.SphereGeometry(1.3,20,14),wh);nose.position.set(0,2.2,-7);nose.scale.z=1.4;pl.add(nose);
  const tail=new THREE.Mesh(new THREE.SphereGeometry(1.3,20,14),wh);tail.position.set(0,2.4,7);tail.scale.z=1.6;pl.add(tail);
  box(pl,.2,3.2,1.8,std('#1f5fa8',.4),0,4.2,6.4);box(pl,5,.15,1.4,wh,0,2.4,6.6);
  box(pl,13,.22,3,wh,0,1.7,.4);[-4,4].forEach(x=>{const e=cyl(pl,.6,.55,2,std('#9aa0a6',.4,{metalness:.7}),x,1.2,-.3,14);e.rotation.x=Math.PI/2});
  for(let i=0;i<9;i++)box(pl,.03,.34,.34,glass(),1.31,2.7,-4.5+i*1.1);
  box(pl,.02,.6,5,std('#1f5fa8',.4),1.32,2.2,0);
  g.add(pl);[-9,-6,-3,0,3].forEach(z=>colliders.push({x:14,z:z,r:1.6}));boxes.push({x0:7.6,x1:20.4,z0:-5.2,z1:-2.3});
  // passerelle, bagages, camion de piste
  const cart=new THREE.Group();box(cart,2.4,.3,1.4,std('#555'),0,.5,0);[-.8,.8].forEach(x=>{cyl(cart,.28,.28,.2,std('#111'),x,.28,.8,10).rotation.x=Math.PI/2;cyl(cart,.28,.28,.2,std('#111'),x,.28,-.8,10).rotation.x=Math.PI/2});
  const cols=['#c0392b','#2e86de','#27ae60','#e67e22'];for(let i=0;i<4;i++)box(cart,.6,.5,.5,std(cols[i],.7),-.8+i*.55,.95,0);
  cart.position.set(-9,0,-1);g.add(cart);
  // manche à air
  const pole=cyl(g,.06,.08,5,std('#ddd'),-18,2.5,4,6);const ws=new THREE.Mesh(new THREE.ConeGeometry(.5,2.2,12,1,true),new THREE.MeshStandardMaterial({color:0xff6a1a,side:THREE.DoubleSide}));ws.position.set(-17,5,4);ws.rotation.z=-Math.PI/2;g.add(ws);colliders.push({x:-18,z:4,r:.3});
  [[-24,5],[24,5],[-26,-8],[26,-12]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-40,40,-30,14],count:6000,seed:31,exclude:(x,z)=>Math.abs(x)<35&&z>-22&&z<4||Math.abs(x)<3.2&&z>4});g.add(grass);
  return finish(g,colliders,boxes,{bounds:{x0:-30,x1:30,z0:-9,z1:12.5},sky:{elev:44,azim:160},
    update(dt,t){grass.userData.update(t);cart.position.z=-1+Math.sin(t*.35)*1.5;ws.rotation.y=Math.sin(t*.8)*.3}});
}

// ----------------------------------------------------------------- 17 · BARRAGE D'INGA
export function buildInga(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(122);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,9,5,10,T.dirtTexture);
  const conc=new THREE.MeshStandardMaterial({map:T.plasterTexture('#b9b8b2'),roughness:.9});
  box(g,46,13,5,conc,0,6.5,-20);box(g,46,1,7,std('#9a9a94'),0,13.5,-20);
  for(let i=0;i<7;i++)box(g,2,9,5.2,std('#8d8c86',.9),-18+i*6,5,-17.4);
  // retenue d'eau et chutes
  const lake=water(120,40,[18,6],0x2a6a8a,.95);lake.mesh.rotation.x=-Math.PI/2;lake.mesh.position.set(0,12.9,-48);g.add(lake.mesh);
  const falls=[];for(let i=0;i<5;i++){const w=water(3.4,10.5,[1,3],0x9fd0e6,.85);w.mesh.position.set(-12+i*6,5.4,-17.2);g.add(w.mesh);falls.push(w)}
  const basin=water(60,14,[10,3],0x2a7a9a,.95);basin.mesh.rotation.x=-Math.PI/2;basin.mesh.position.set(0,.06,-13);g.add(basin.mesh);
  boxes.push({x0:-24,x1:24,z0:-24,z1:-10.5});
  // salle des turbines
  box(g,16,5,6,tin(),-30,2.5,-10);colliders.push({x:-30,z:-10,r:6});
  const sg=sign('BARRAGE D’INGA','Électricité pour le Congo',8,1,'#0b3d6b','#f1c40f');sg.position.set(0,10.4,-17.45);g.add(sg);
  // pylônes et lignes
  const pyl=(x,z)=>{const p=new THREE.Group();p.position.set(x,0,z);const m=std('#6b7a85',.5,{metalness:.6});
    [[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]].forEach(q=>{const l=cyl(p,.06,.1,11,m,q[0]*.6,5.5,q[1]*.6,5);l.rotation.z=-q[0]*.07;l.rotation.x=q[1]*.07});
    for(let k=0;k<4;k++)box(p,2.4-k*.4,.08,.08,m,0,3+k*2.2,0);
    box(p,9,.15,.15,m,0,10.8,0);g.add(p);colliders.push({x:x,z:z,r:.8});return p};
  pyl(-16,0);pyl(16,0);pyl(-16,-8);pyl(16,-8);
  const lines=[];[[-16,0,16,0],[-16,-8,16,-8]].forEach(a=>[-3.8,0,3.8].forEach(o=>{const pts=[];for(let i=0;i<=20;i++){const u=i/20;pts.push(new THREE.Vector3(a[0]+(a[2]-a[0])*u,10.8-Math.sin(u*Math.PI)*1.4,a[1]+o))}
    const ln=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x222222}));g.add(ln)}));
  // éclairage et éclairs de lumière
  const sp=new THREE.PointLight(0xffe9a0,1.4,16);sp.position.set(0,3,-9);g.add(sp);
  [[-22,4],[22,4],[-18,10],[18,10]].forEach((p,i)=>tree(g,p[0],p[1],1.05,false,null,colliders,i%2===0));
  const grass=grassField({area:[-36,36,-8,14],count:7000,seed:32,exclude:(x,z)=>z<-7||Math.abs(x)<3.2&&z>4});g.add(grass);
  const mist=new THREE.Mesh(new THREE.PlaneGeometry(34,3),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.14,depthWrite:false}));mist.position.set(0,1.2,-12.5);g.add(mist);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:38,azim:210},
    update(dt,t){grass.userData.update(t);lake.nm.offset.x=(t*.02)%1;basin.nm.offset.x=(t*.03)%1;falls.forEach(f=>{f.nm.offset.y=(t*-.9)%1});mist.material.opacity=.12+Math.sin(t*1.1)*.03}});
}

// ----------------------------------------------------------------- 18 · VIRUNGA
export function buildVirunga(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(123);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  const moss=new THREE.Mesh(new THREE.PlaneGeometry(120,70),new THREE.MeshStandardMaterial({color:0x2d4a2a,roughness:1}));moss.rotation.x=-Math.PI/2;moss.position.set(0,.015,-14);moss.receiveShadow=true;g.add(moss);
  patch(g,0,3,5,22,T.dirtTexture);
  // volcans
  const rock=new THREE.MeshStandardMaterial({color:0x3a3430,roughness:1,flatShading:true});
  const vol=(x,z,s,glow)=>{const c=new THREE.Mesh(new THREE.ConeGeometry(34*s,34*s,28,6,true),rock);c.position.set(x,17*s,z);g.add(c);
    if(glow){const lv=new THREE.Mesh(new THREE.CircleGeometry(5*s,20),new THREE.MeshBasicMaterial({color:0xff5a1a,fog:false}));lv.rotation.x=-Math.PI/2;lv.position.set(x,34.1*s,z);g.add(lv);const l=new THREE.PointLight(0xff6a2a,2.5,60);l.position.set(x,34*s,z);g.add(l)}};
  vol(-22,-95,1.5,true);vol(46,-110,1.1,false);
  // fumée
  const sm=[];for(let i=0;i<10;i++){const s=new THREE.Mesh(new THREE.SphereGeometry(6+i*.8,10,8),new THREE.MeshBasicMaterial({color:0x8a8580,transparent:true,opacity:.28,depthWrite:false}));s.position.set(-22+r()*8,58+i*5,-95);g.add(s);sm.push(s)}
  // forêt dense
  for(let i=0;i<30;i++){const a=r()*Math.PI*2,d=13+r()*15,x=Math.cos(a)*d*1.3,z=-8+Math.sin(a)*d*.8;
    if(Math.abs(x)<8&&z>-9&&z<12)continue;const t=leafyTree({kind:i%3?'leafy':'mango',seed:i+80,fruits:false,trunk:4+r()*2,cards:60});t.position.set(x,0,z);t.scale.setScalar(1.3+r()*.8);t.rotation.y=r()*6;g.add(t);colliders.push({x:x,z:z,r:.9})}
  for(let i=0;i<26;i++){const b=bush(i+90,.7+r()*.7);const x=-28+r()*56,z=-18+r()*30;if(Math.abs(x)<5&&z>-8)continue;b.position.set(x,0,z);g.add(b)}
  // gorilles (formes simples)
  const gor=[];[[-11,-6,.5],[12,-9,-.7],[-14,-1,.2]].forEach(p=>{
    const m=std('#2a2622',.95),go=new THREE.Group();go.position.set(p[0],0,p[1]);go.rotation.y=p[2];
    const b=new THREE.Mesh(new THREE.SphereGeometry(.8,14,12),m);b.scale.set(1,1.1,.9);b.position.y=1;go.add(b);
    const h=new THREE.Mesh(new THREE.SphereGeometry(.38,12,10),m);h.position.set(0,1.75,.35);go.add(h);
    [-.75,.75].forEach(s=>{const ar=cyl(go,.18,.15,1.2,m,s,.9,.2,8);ar.rotation.z=s*.15});[-.35,.35].forEach(s=>cyl(go,.22,.2,.6,m,s,.3,-.1,8));
    const sb=new THREE.Mesh(new THREE.SphereGeometry(.4,10,8),std('#7b756d',.9));sb.position.set(0,1.1,-.3);sb.scale.set(1,.9,.6);go.add(sb);
    g.add(go);gor.push(go);colliders.push({x:p[0],z:p[1],r:1})});
  // panneau et poste de garde
  cyl(g,.07,.08,2.4,std('#5a3a22'),4.8,1.2,3,8);const ps=sign('PARC DES VIRUNGA','Ne laisse que tes pas',2.8,1.3,'#2f5f2a','#fff');ps.position.set(4.8,2.5,3.07);g.add(ps);colliders.push({x:4.8,z:3,r:.4});
  box(g,5,2.8,4,std('#7a4a2a',.9),-8,1.4,-1.5);gableRoof(g,-8,2.8,-1.5,5,4,1.1,thatch(),std('#7a4a2a'),.5);boxes.push({x0:-10.7,x1:-5.3,z0:-3.7,z1:.7});
  // brume
  const mist=[];for(let i=0;i<6;i++){const m=new THREE.Mesh(new THREE.PlaneGeometry(40,5),new THREE.MeshBasicMaterial({color:0xdfe8e4,transparent:true,opacity:.2,depthWrite:false,fog:false}));m.position.set(-20+i*8,2.5,-14-i*3);g.add(m);mist.push(m)}
  return finish(g,colliders,boxes,{bounds:{x0:-22,x1:22,z0:-9.5,z1:12.5},sky:{elev:20,azim:200,turb:3},fog:.012,
    update(dt,t){gor.forEach((o,i)=>{o.children[1].rotation.x=Math.sin(t*.8+i)*.12});sm.forEach((s,i)=>{s.position.y=58+i*5+((t*3+i*6)%12)});mist.forEach((m,i)=>{m.material.opacity=.15+Math.sin(t*.4+i)*.06})}});
}

// ----------------------------------------------------------------- 19 · CHUTES DE ZONGO
export function buildZongo(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(124);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,8,5,16,T.dirtTexture);
  const rk=new THREE.MeshStandardMaterial({map:T.dirtTexture(),color:0x7a6a58,roughness:1});
  // falaise
  for(let i=0;i<9;i++){const h=12+r()*5,b=box(g,6,h,5,rk,-24+i*6,h/2,-24-r()*2);b.rotation.y=(r()-.5)*.3}
  // chutes (nappe verticale)
  const falls=[];[-6,0,6].forEach((x,i)=>{const w=water(5,15,[1,4],0xb7e1ef,.9);w.mesh.position.set(x,7.6,-21.2);g.add(w.mesh);falls.push(w)});
  const pool=water(44,12,[8,2],0x1f7a8a,.95);pool.mesh.rotation.x=-Math.PI/2;pool.mesh.position.set(0,.05,-15.6);g.add(pool.mesh);
  boxes.push({x0:-24,x1:24,z0:-26,z1:-9.6});
  // écume
  const foam=new THREE.Mesh(new THREE.PlaneGeometry(22,3),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.35,depthWrite:false}));foam.rotation.x=-Math.PI/2;foam.position.set(0,.08,-19.5);g.add(foam);
  // brume d'eau
  const mist=new THREE.Mesh(new THREE.PlaneGeometry(26,10),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.18,depthWrite:false}));mist.position.set(0,5,-19.5);g.add(mist);
  // rochers
  [[-12,-8],[12,-9],[-16,-3],[17,-2],[-9,-10.5],[9,-10.8]].forEach(p=>{const s=.8+r()*.9;const k=new THREE.Mesh(new THREE.DodecahedronGeometry(s*1.1,0),rk);k.position.set(p[0],s*.7,p[1]);k.rotation.set(r()*3,r()*3,0);k.castShadow=true;g.add(k);colliders.push({x:p[0],z:p[1],r:s*1.1})});
  // pont de planches
  const br=new THREE.Group();br.position.set(10,0,-1);for(let i=0;i<8;i++)box(br,.7,.1,2.2,std('#7a5a35',.9),i*.8-3,.45,0);[-1.2,1.2].forEach(z=>box(br,6.4,.08,.08,std('#5a3a22'),.4,1.1,z));g.add(br);
  // panneau de sécurité et bouée
  cyl(g,.06,.07,2.4,std('#5a3a22'),-8.5,1.2,3,6);const sg=sign('DANGER','Ne pas se baigner au pied des chutes',3.2,1.2,'#b22222','#fff');sg.position.set(-8.5,2.5,3.07);g.add(sg);colliders.push({x:-8.5,z:3,r:.4});
  const bu=new THREE.Mesh(new THREE.TorusGeometry(.4,.12,10,20),std('#e8590c',.6));bu.position.set(-6.8,1.3,3.06);g.add(bu);
  [[-18,5],[18,5],[-22,-6],[22,-5],[-20,10],[20,11]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-36,36,-8,14],count:7000,seed:34,exclude:(x,z)=>z<-7||Math.abs(x)<3.2&&z>4});g.add(grass);
  return finish(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-9,z1:12.5},sky:{elev:48,azim:190},
    update(dt,t){grass.userData.update(t);falls.forEach(f=>{f.nm.offset.y=(t*-1.1)%1});pool.nm.offset.x=(t*.03)%1;mist.material.opacity=.16+Math.sin(t*.9)*.04;foam.material.opacity=.3+Math.sin(t*2)*.08}});
}

// ----------------------------------------------------------------- 20 · ATELIER DES ARTISANS
export function buildAtelier(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(125);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,-3,36,16,T.dirtTexture);patch(g,0,9,5,10,T.dirtTexture);
  // grand auvent en chaume
  box(g,30,.3,9,thatch(),0,5,-17);[-14,-5,5,14].forEach(x=>{cyl(g,.25,.3,5,std('#6b4226',.9),x,2.5,-13.2,8);cyl(g,.25,.3,5,std('#6b4226',.9),x,2.5,-20.8,8)});
  const bk=box(g,30,4.8,.3,std('#b98a55',.9),0,2.4,-21.3);
  const sg=sign('ATELIER DES ARTISANS','Sculpture · Tissage · Poterie',9,1.2,'#7a3f1f','#fff');sg.position.set(0,6.1,-13.1);g.add(sg);
  boxes.push({x0:-15,x1:15,z0:-21.6,z1:-12.8});
  // étals
  const tableMat=std('#8a5a32',.9);
  [-9,9].forEach(x=>{box(g,5,.15,1.6,tableMat,x,1,-10.5);[-2.2,2.2].forEach(dx=>[-.6,.6].forEach(dz=>box(g,.12,1,.12,tableMat,x+dx,.5,-10.5+dz)))});
  boxes.push({x0:-11.6,x1:-6.4,z0:-11.4,z1:-9.6},{x0:6.4,x1:11.6,z0:-11.4,z1:-9.6});
  // tissus suspendus (wax)
  const pal=[['#c0392b','#f1c40f'],['#2e86de','#f2f2f2'],['#27ae60','#f1c40f'],['#8e44ad','#f39c12'],['#e67e22','#2c3e50'],['#16a085','#e74c3c']];
  const cloths=[];for(let i=0;i<6;i++){const m=new THREE.Mesh(new THREE.PlaneGeometry(2.2,3,6,6),new THREE.MeshStandardMaterial({map:T.waxTexture(pal[i][0],pal[i][1]),side:THREE.DoubleSide,roughness:.85}));m.position.set(-12.5+i*5,3.2,-12.9);g.add(m);cloths.push(m)}
  cyl(g,.05,.05,30,std('#5a3a22'),0,4.8,-12.9,6).rotation.z=Math.PI/2;
  // sculptures totems
  [[-13,-5],[13,-5],[-15,-9],[15,-9]].forEach((p,i)=>{const tt=new THREE.Group();tt.position.set(p[0],0,p[1]);
    cyl(tt,.35,.42,3.2,std('#5a3a22',.85),0,1.6,0,10);for(let k=0;k<3;k++){const f=new THREE.Mesh(new THREE.SphereGeometry(.34,14,10),std('#7a4a26',.8));f.scale.set(.9,1,.6);f.position.set(0,.8+k*.9,.28);tt.add(f);[-1,1].forEach(s=>{const e=new THREE.Mesh(new THREE.SphereGeometry(.05,8,6),std('#f1e7c8'));e.position.set(s*.12,.86+k*.9,.5);tt.add(e)})}
    g.add(tt);colliders.push({x:p[0],z:p[1],r:.6})});
  // poteries
  [[-3,-9],[3,-9.5],[0,-10.4],[-18,-3],[18,-3]].forEach((p,i)=>{const pot=new THREE.Mesh(new THREE.LatheGeometry([[.0,0],[.4,.05],[.55,.35],[.45,.7],[.28,.9],[.34,1]].map(q=>new THREE.Vector2(q[0],q[1])),18),std(['#b5651d','#a0522d','#c27a3d'][i%3],.85));pot.position.set(p[0],0,p[1]);g.add(pot);colliders.push({x:p[0],z:p[1],r:.55})});
  // métier à tisser
  const lm=new THREE.Group();lm.position.set(-6,0,-16.8);const wd=std('#6b4226',.9);[-1.1,1.1].forEach(x=>box(lm,.14,2.4,.14,wd,x,1.2,0));box(lm,2.4,.14,.14,wd,0,2.4,0);box(lm,2.4,.14,.14,wd,0,.4,0);
  for(let i=0;i<12;i++)box(lm,.02,2,.02,std(i%2?'#f1c40f':'#c0392b'),-1+i*.18,1.4,0);g.add(lm);
  // foyer de forge
  const fg=new THREE.Group();fg.position.set(6,0,-16.8);box(fg,2,.9,1.2,std('#555',.8),0,.45,0);const fl=new THREE.Mesh(new THREE.SphereGeometry(.3,10,8),new THREE.MeshBasicMaterial({color:0xff6a1a}));fl.position.set(0,1,0);fg.add(fl);const fp=new THREE.PointLight(0xff8a3a,1.6,9);fp.position.set(0,1.4,0);fg.add(fp);box(fg,.5,.5,.4,std('#222',.5,{metalness:.7}),1.5,.55,0);g.add(fg);
  [[-24,2],[24,2],[-20,10],[20,10]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  const grass=grassField({area:[-36,36,-12,14],count:6000,seed:35,exclude:(x,z)=>Math.abs(x)<18&&z>-13&&z<1||Math.abs(x)<3.2&&z>4});g.add(grass);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:30,azim:230},
    update(dt,t){grass.userData.update(t);cloths.forEach((m,i)=>{const p=m.geometry.attributes.position;for(let k=0;k<p.count;k++){const y=p.getY(k);p.setZ(k,Math.sin(y*1.5+t*1.6+i)*.1*(1.5-y)/3)}p.needsUpdate=true});fl.scale.setScalar(1+Math.sin(t*9)*.15);fp.intensity=1.5+Math.sin(t*11)*.3}});
}
