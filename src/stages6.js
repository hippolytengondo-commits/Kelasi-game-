import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree} from './world.js';
import {leafyTree,palm,grassField} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';

// Nouveaux lieux d'exploration : village des traditions, académie des arts, radio-télé, plantation, lac Kivu, sanctuaire des bonobos.
// Convention commune : arrivée en (0 ; 6,8), PNJ en (-5 ; -5,5) et (5,5 ; -5,5), sortie en (-3,8 ; 10,4).
const stone=c=>new THREE.MeshStandardMaterial({map:T.plasterTexture(c||'#efe8da'),roughness:.9});
const tin=()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35});
const thatch=()=>new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1});
const wood=c=>new THREE.MeshStandardMaterial({map:T.woodTexture(c||'#9a6a3f'),roughness:.88});
function finish(g,colliders,boxes,o){
  exitSign(g,-3.8,10.4);colliders.push({x:-3.8,z:10.4,r:.3});
  return Object.assign({group:g,colliders,boxes,dyn:{},exit:{x:0,z:9.4}},o);
}
function grassy(g,seed,area,excl,count){const gr=grassField({area:area,count:count||5000,seed:seed,exclude:excl});g.add(gr);return gr}
function flat(g,w,d,col,x,y,z){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshStandardMaterial({color:col,roughness:1}));m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.receiveShadow=true;g.add(m);return m}
function trees(g,colliders,pts){pts.forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.1,false,null,colliders,i%2===0))}
const BOUNDS={x0:-26,x1:26,z0:-6.5,z1:12.5};
const libre=(x,z)=>Math.abs(x)<30&&z>-23&&z<1||Math.abs(x)<3.2&&z>4;

// ------------------------------------------------------------ 31 · VILLAGE DES TRADITIONS
export function buildVillageTrad(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,-3,26,20,T.dirtTexture);patch(g,0,9,5,10,T.dirtTexture);
  // foyer central
  for(let i=0;i<10;i++){const a=i/10*6.28;cyl(g,.28,.32,.3,std('#6a6a6a',.95),Math.cos(a)*1.3,.15,-3+Math.sin(a)*1.3,6)}
  [[-.5,0],[.5,.2],[0,-.5]].forEach(p=>{const l=cyl(g,.12,.12,1.2,wood('#5a3a22'),p[0],.3,-3+p[1],6);l.rotation.z=1.3;l.rotation.y=p[0]*3});
  const fl=new THREE.Mesh(new THREE.ConeGeometry(.5,1.1,8),new THREE.MeshBasicMaterial({color:0xff7a1a,transparent:true,opacity:.9}));fl.position.set(0,.8,-3);g.add(fl);
  colliders.push({x:0,z:-3,r:1.7});
  // cases rondes
  [[-14,-10],[14,-10],[-18,-1],[18,-1],[-8,-15],[8,-15]].forEach(p=>{
    cyl(g,2.2,2.2,2.3,new THREE.MeshStandardMaterial({map:T.earthWallTexture(),roughness:1}),p[0],1.15,p[1],20);
    const r=new THREE.Mesh(new THREE.ConeGeometry(3.1,2.4,20),thatch());r.position.set(p[0],3.5,p[1]);r.castShadow=true;g.add(r);
    box(g,.9,1.6,.1,std('#3a2414'),p[0],.8,p[1]+2.18);colliders.push({x:p[0],z:p[1],r:2.4});
  });
  // tambour ngoma et banc des conteurs
  cyl(g,.45,.35,1,wood('#7a4a26'),8.5,.5,-1,14);const pe=cyl(g,.46,.46,.05,std('#e8d9b5',.9),8.5,1.02,-1,14);colliders.push({x:8.5,z:-1,r:.6});
  box(g,3,.18,.7,wood('#7a4a26'),-8.5,.55,-1);[-1.2,1.2].forEach(dx=>box(g,.2,.55,.6,wood('#5a3a22'),-8.5+dx,.27,-1));boxes.push({x0:-10.1,x1:-6.9,z0:-1.4,z1:-.6});
  const sg=sign('VILLAGE DES TRADITIONS','Contes · danses · proverbes',8,1.3,'#7a3b12','#fff');sg.position.set(0,3.2,-18.5);g.add(sg);cyl(g,.12,.14,3.2,wood('#5a3a22'),-3.6,1.6,-18.5,8);cyl(g,.12,.14,3.2,wood('#5a3a22'),3.6,1.6,-18.5,8);
  const gt=leafyTree({kind:'mango',seed:314,fruits:false,trunk:4.2});gt.position.set(0,0,-21);gt.scale.setScalar(2);g.add(gt);colliders.push({x:0,z:-21,r:1.6});
  trees(g,colliders,[[-22,6],[22,6],[-24,-12],[24,-12]]);
  const gr=grassy(g,311,[-36,36,-26,14],(x,z)=>libre(x,z)||Math.hypot(x,z+3)<13);g.add(gr);
  return finish(g,colliders,boxes,{bounds:BOUNDS,sky:{elev:28,azim:240,turb:4,ray:1.5},fog:.0058,update(dt,t){gr.userData.update(t);fl.scale.set(1+Math.sin(t*9)*.12,1+Math.sin(t*7)*.18,1+Math.sin(t*8)*.12)}});
}

// ------------------------------------------------------------ 32 · ACADÉMIE DES ARTS
export function buildArts(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,9,5,10,T.dirtTexture);flat(g,50,22,0xe6dcc8,0,.02,-9);
  box(g,24,6.5,9,stone('#f0e4cf'),0,3.25,-17);gableRoof(g,0,6.5,-17,24,9,2.4,tin(),std('#efe6d2'),.9);boxes.push({x0:-12.5,x1:12.5,z0:-21.5,z1:-12.5});
  for(let i=0;i<6;i++)cyl(g,.35,.4,6.2,stone('#fff8ee'),-10+i*4,3.1,-12.2,14);
  box(g,3,3.2,.2,std('#4a2f1b'),0,1.6,-12.4);
  const sg=sign('ACADÉMIE DES ARTS','Peinture · sculpture · masques',9,1.3,'#7a1f4a','#fff');sg.position.set(0,7.6,-12.2);g.add(sg);
  // chevalets avec toiles colorées
  const toiles=['#d9382e','#f7d618','#1f8bd9','#2ea34a','#ff8c42','#8e44ad'];
  [-13,-8,8,13].forEach((x,i)=>{
    [-.5,.5].forEach(dx=>{const l=cyl(g,.04,.04,2.1,wood('#6b4226'),x+dx,1.05,-6,6);l.rotation.z=dx*.15});
    box(g,1.6,1.2,.06,std('#fff9ef'),x,1.5,-6.1);
    for(let k=0;k<4;k++){const m=new THREE.Mesh(new THREE.CircleGeometry(.22+k*.05,12),new THREE.MeshBasicMaterial({color:toiles[(i+k)%6]}));m.position.set(x-.4+k*.28,1.45+(k%2)*.25,-6.06);g.add(m)}
    colliders.push({x:x,z:-6,r:.9});
  });
  // sculptures : socles et formes en bois
  [[-19,-3],[19,-3]].forEach((p,i)=>{
    box(g,1.4,.8,1.4,stone('#cfc6b2'),p[0],.4,p[1]);
    const s=new THREE.Mesh(i?new THREE.TorusKnotGeometry(.55,.18,48,8):new THREE.ConeGeometry(.6,2,6),wood(i?'#5a3a22':'#7a4a26'));s.position.set(p[0],i?1.7:1.9,p[1]);s.castShadow=true;g.add(s);colliders.push({x:p[0],z:p[1],r:1});
  });
  // masques accrochés au mur
  [-8,-4,4,8].forEach((x,i)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.45,10,8),wood(i%2?'#4a2f1b':'#7a4a26'));m.scale.set(.8,1.3,.4);m.position.set(x,2.4,-12.3);g.add(m)});
  trees(g,colliders,[[-22,6],[22,6],[-24,-12],[24,-12]]);
  const gr=grassy(g,321,[-36,36,-26,14],(x,z)=>libre(x,z)||Math.abs(x)<25&&z<-3&&z>-22);g.add(gr);
  return finish(g,colliders,boxes,{bounds:BOUNDS,sky:{elev:40,azim:200,turb:3,ray:1},fog:.005,update(dt,t){gr.userData.update(t)}});
}

// ------------------------------------------------------------ 33 · RADIO ET TÉLÉVISION
export function buildRadio(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,9,5,10,T.dirtTexture);flat(g,50,22,0xcfd2d6,0,.02,-9);
  box(g,18,5,8,stone('#e4e8ee'),-9,2.5,-15);box(g,18,.4,8.4,std('#4a4f57'),-9,5.1,-15);boxes.push({x0:-18.2,x1:.2,z0:-19.2,z1:-10.8});
  [-14,-9,-4].forEach(x=>box(g,3,1.8,.1,std('#9fc6dd',.12,{emissive:0x4da6d9,emissiveIntensity:.3}),x,2.7,-10.9));
  const sg=sign('RADIO · TÉLÉ','Informer avec vérité',6,1.2,'#b3261e','#fff');sg.position.set(-9,6.2,-10.8);g.add(sg);
  const onair=new THREE.Mesh(new THREE.BoxGeometry(2.4,.7,.2),new THREE.MeshStandardMaterial({color:0xff2a2a,emissive:0xff1a1a,emissiveIntensity:1}));onair.position.set(-3,3.8,-10.8);g.add(onair);
  // pylône d'antenne
  const ant=new THREE.Group();ant.position.set(14,0,-14);g.add(ant);
  [[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]].forEach(p=>cyl(ant,.08,.1,22,std('#c9c9c9',.4,{metalness:.7}),p[0],11,p[1],6));
  for(let y=2;y<22;y+=3)box(ant,2,.08,.08,std('#c9c9c9',.4,{metalness:.7}),0,y,-.9),box(ant,.08,.08,2,std('#c9c9c9',.4,{metalness:.7}),.9,y,0);
  const feu=new THREE.Mesh(new THREE.SphereGeometry(.3,10,8),new THREE.MeshBasicMaterial({color:0xff2a2a}));feu.position.set(0,22.4,0);ant.add(feu);colliders.push({x:14,z:-14,r:1.8});
  // parabole
  const pb=new THREE.Mesh(new THREE.SphereGeometry(2.2,24,12,0,Math.PI*2,0,1.1),std('#f2f2f2',.3,{metalness:.5}));pb.material.side=THREE.DoubleSide;pb.position.set(6,2.4,-9);pb.rotation.x=-1.1;g.add(pb);cyl(g,.12,.16,2.4,std('#999'),6,1.2,-9,8);colliders.push({x:6,z:-9,r:1.1});
  // camionnette de reportage
  box(g,4.4,1.7,2,std('#ffffff',.5),-20,1.2,-3);box(g,1.6,1.2,2,std('#ffffff',.5),-17.8,.9,-3);cyl(g,.5,.5,.2,std('#222'),-21.5,.5,-1.9,12).rotation.x=Math.PI/2;cyl(g,.5,.5,.2,std('#222'),-18.5,.5,-1.9,12).rotation.x=Math.PI/2;box(g,2,.3,.9,std('#e31e24'),-20,2.2,-3);colliders.push({x:-20,z:-3,r:2.4});
  trees(g,colliders,[[22,6],[-23,6],[24,-5]]);
  const gr=grassy(g,331,[-36,36,-26,14],(x,z)=>libre(x,z)||Math.abs(x)<25&&z<-3&&z>-22);g.add(gr);
  return finish(g,colliders,boxes,{bounds:BOUNDS,sky:{elev:34,azim:210,turb:3,ray:1},fog:.0052,update(dt,t){gr.userData.update(t);feu.visible=Math.sin(t*4)>-.2;onair.material.emissiveIntensity=.6+.4*Math.sin(t*3)}});
}

// ------------------------------------------------------------ 34 · PLANTATION DE CAFÉ ET DE CACAO
export function buildPlantation(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(341);
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,9,5,10,T.dirtTexture);patch(g,0,-8,6,24,T.dirtTexture);
  // rangées de caféiers et cacaoyers (instances)
  const pos=[];for(let row=0;row<2;row++)for(const side of [-1,1])for(let x=10;x<=22;x+=2.4)for(let z=-4;z>-20;z-=2.6)pos.push([side*x+(r()-.5)*.4,z+(r()-.5)*.4,row]);
  const bush=new THREE.InstancedMesh(new THREE.SphereGeometry(.9,10,8),std('#2f7d3a',.9),pos.length),cer=new THREE.InstancedMesh(new THREE.SphereGeometry(.12,6,5),std('#c0261e',.6),pos.length*3);
  const m4=new THREE.Matrix4(),q=new THREE.Quaternion();let ci=0;
  pos.forEach((p,i)=>{m4.compose(new THREE.Vector3(p[0],.9,p[1]),q,new THREE.Vector3(1,1.1,1));bush.setMatrixAt(i,m4);colliders.push({x:p[0],z:p[1],r:.8});
    for(let k=0;k<3;k++){m4.compose(new THREE.Vector3(p[0]+(r()-.5)*1.2,.8+r()*.6,p[1]+.7*(r()>.5?1:-1)*r()),q,new THREE.Vector3(1,1,1));cer.setMatrixAt(ci++,m4)}});
  bush.castShadow=true;g.add(bush);g.add(cer);
  // séchoirs à grains
  [[-8,-12],[8,-12]].forEach(p=>{box(g,4,.1,2.4,wood('#8d6238'),p[0],.9,p[1]);[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(l=>cyl(g,.06,.06,.9,wood('#5a3a22'),p[0]+l[0],.45,p[1]+l[1],6));
    box(g,3.6,.08,2,std('#6b3f1f',.95),p[0],.98,p[1]);colliders.push({x:p[0],z:p[1],r:2.1})});
  // hangar
  box(g,8,3,5,wood('#8a5a32'),0,1.5,-22);gableRoof(g,0,3,-22,8,5,1.6,tin(),std('#cfc6b2'),.7);boxes.push({x0:-4.2,x1:4.2,z0:-24.7,z1:-19.3});
  const sg=sign('PLANTATION','Café · cacao',5,1.1,'#5a3a22','#fff');sg.position.set(0,3.7,-19.4);g.add(sg);
  // sacs de grains
  [[-3,-17.5],[-2,-17.5],[3,-17.5]].forEach(p=>box(g,.9,.6,.6,std('#d9c7a0',.95),p[0],.3,p[1]));
  trees(g,colliders,[[-24,6],[24,6],[-5,-26],[6,-26]]);
  const gr=grassy(g,341,[-36,36,-27,14],(x,z)=>libre(x,z)||Math.abs(x)<3.4&&z<4);g.add(gr);
  return finish(g,colliders,boxes,{bounds:BOUNDS,sky:{elev:44,azim:190,turb:4,ray:1},fog:.0055,update(dt,t){gr.userData.update(t)}});
}

// ------------------------------------------------------------ 35 · LAC KIVU ET GOMA
export function buildKivu(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,9,5,10,T.dirtTexture);flat(g,52,10,0xd8c99a,0,.02,-9);
  const nm=waterNormal();nm.repeat.set(14,6);
  const lac=new THREE.Mesh(new THREE.PlaneGeometry(220,70),new THREE.MeshPhysicalMaterial({color:0x2a7aa6,roughness:.06,normalMap:nm,normalScale:new THREE.Vector2(.7,.7),transparent:true,opacity:.92}));
  lac.rotation.x=-Math.PI/2;lac.position.set(0,.05,-48);g.add(lac);
  // volcan et collines au loin
  const vol=new THREE.Mesh(new THREE.ConeGeometry(30,26,28),std('#4a4f4a',1));vol.position.set(-30,13,-110);g.add(vol);
  const crt=new THREE.Mesh(new THREE.CylinderGeometry(6,4,1,20),new THREE.MeshStandardMaterial({color:0xff5a1a,emissive:0xff3a00,emissiveIntensity:.9}));crt.position.set(-30,26,-110);g.add(crt);
  [[40,-100,22],[70,-95,26],[-80,-100,24]].forEach(h=>{const c=new THREE.Mesh(new THREE.ConeGeometry(h[2],14,16),std('#5f8a5a',1));c.position.set(h[0],7,h[1]);g.add(c)});
  // ponton et pirogues
  box(g,3,.25,16,wood('#7a4a26'),14,.55,-18);[-1.2,1.2].forEach(dx=>[-24,-18,-12].forEach(z=>cyl(g,.15,.15,1.3,wood('#4a2f1b'),14+dx,.2,z+0,6)));
  [[10,-16],[18,-23]].forEach((p,i)=>{const b=box(g,1.2,.4,4.5,wood('#a87445'),p[0],.3,p[1]);b.rotation.y=.2*(i?1:-1);const mt=cyl(g,.05,.05,2.6,std('#6b4226'),p[0],1.6,p[1],6)});
  boxes.push({x0:12.4,x1:15.6,z0:-26,z1:-10});
  [[-14,-9],[-20,-9],[22,-8],[26,-4]].forEach(p=>{const pl=palm(Math.floor(Math.abs(p[0]*3))+2);pl.position.set(p[0],0,p[1]);g.add(pl);colliders.push({x:p[0],z:p[1],r:.4})});
  box(g,6,.9,1.6,wood('#9a6a3f'),-10,.45,-1.5);boxes.push({x0:-13.1,x1:-6.9,z0:-2.3,z1:-.7});
  const sg=sign('LAC KIVU','Goma · Bukavu · Idjwi',6,1.2,'#0b5fa5','#fff');sg.position.set(-4.5,3.2,-8.6);g.add(sg);cyl(g,.1,.12,3.2,wood('#5a3a22'),-7.4,1.6,-8.6,8);cyl(g,.1,.12,3.2,wood('#5a3a22'),-1.6,1.6,-8.6,8);colliders.push({x:-7.4,z:-8.6,r:.3},{x:-1.6,z:-8.6,r:.3});
  trees(g,colliders,[[-24,6],[24,6]]);
  const gr=grassy(g,351,[-36,36,-14,14],(x,z)=>libre(x,z)||z<-4);g.add(gr);
  return finish(g,colliders,boxes,{bounds:BOUNDS,sky:{elev:30,azim:150,turb:3,ray:1.5},fog:.0046,update(dt,t){gr.userData.update(t);nm.offset.x=t*.01;nm.offset.y=t*.006}});
}

// ------------------------------------------------------------ 36 · SANCTUAIRE DES BONOBOS
function bonobo(g,x,z,ry,s){
  const b=new THREE.Group();b.position.set(x,0,z);b.rotation.y=ry;b.scale.setScalar(s||1);
  const fur=std('#2a2a2a',.95),peau=std('#b88a6a',.9);
  const body=new THREE.Mesh(new THREE.SphereGeometry(.42,12,10),fur);body.scale.set(1,1.2,.9);body.position.y=.55;b.add(body);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.26,12,10),fur);head.position.set(0,1.15,.1);b.add(head);
  const face=new THREE.Mesh(new THREE.SphereGeometry(.17,10,8),peau);face.position.set(0,1.1,.27);b.add(face);
  [-1,1].forEach(s2=>{box(b,.16,.7,.16,fur,s2*.5,.5,.05).rotation.z=s2*.2;box(b,.18,.4,.2,fur,s2*.22,.2,.22)});
  g.add(b);return b;
}
export function buildBonobos(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(361);
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,9,5,10,T.dirtTexture);flat(g,40,18,0x6a9a4a,0,.02,-13);
  // enclos : poteaux et lisses
  const clot=wood('#6b4226');
  for(let x=-18;x<=18;x+=2){cyl(g,.1,.1,1.8,clot,x,.9,-9,6)}
  box(g,36,.08,.08,clot,0,1.5,-9);box(g,36,.08,.08,clot,0,.8,-9);boxes.push({x0:-18.2,x1:18.2,z0:-9.2,z1:-8.8});
  // forêt dense et lianes derrière la clôture
  for(let i=0;i<26;i++){const t=leafyTree({kind:'leafy',seed:361+i,fruits:false,trunk:4+r()*2});t.position.set(-24+i*1.95,0,-14-r()*8);t.scale.setScalar(1.3+r()*.6);g.add(t);colliders.push({x:t.position.x,z:t.position.z,r:.6})}
  [[-12,-12,.6],[-4,-15,-.4],[5,-11.5,.2],[12,-14,.9],[0,-12.5,-.8]].forEach(p=>bonobo(g,p[0],p[1],p[2],1));
  // clinique vétérinaire
  box(g,6,3,4,stone('#f4f0e8'),-16,1.5,-3);gableRoof(g,-16,3,-3,6,4,1.4,tin(),std('#efe6d2'),.6);boxes.push({x0:-19.2,x1:-12.8,z0:-5.2,z1:-.8});
  const croix=new THREE.Group();box(croix,.9,.28,.06,std('#d9382e'),0,0,0);box(croix,.28,.9,.06,std('#d9382e'),0,0,0);croix.position.set(-16,2.2,-.78);g.add(croix);
  const sg=sign('SANCTUAIRE DES BONOBOS','Protéger nos cousins de la forêt',9,1.3,'#1f6b3a','#fff');sg.position.set(0,3.4,-8.6);g.add(sg);cyl(g,.12,.14,3.4,clot,-4.5,1.7,-8.6,8);cyl(g,.12,.14,3.4,clot,4.5,1.7,-8.6,8);colliders.push({x:-4.5,z:-8.6,r:.3},{x:4.5,z:-8.6,r:.3});
  trees(g,colliders,[[-24,6],[24,6]]);
  const gr=grassy(g,361,[-36,36,-26,14],(x,z)=>libre(x,z));g.add(gr);
  return finish(g,colliders,boxes,{bounds:BOUNDS,sky:{elev:36,azim:215,turb:5,ray:1},fog:.0062,update(dt,t){gr.userData.update(t)}});
}
