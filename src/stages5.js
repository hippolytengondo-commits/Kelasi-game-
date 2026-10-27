import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree,flagTexture} from './world.js';
import {leafyTree,palm,grassField,bush} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const stone=c=>new THREE.MeshStandardMaterial({map:T.plasterTexture(c||'#efe8da'),roughness:.9});
const tin=()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35});
const glass=()=>std('#9fc6dd',.12,{emissive:0x4da6d9,emissiveIntensity:.25,metalness:.2});
const thatch=()=>new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1});
const wood=c=>new THREE.MeshStandardMaterial({map:T.woodTexture(c||'#9a6a3f'),roughness:.88});
function finish(g,colliders,boxes,o){
  exitSign(g,-3.8,10.4);colliders.push({x:-3.8,z:10.4,r:.3});
  return Object.assign({group:g,colliders,boxes,dyn:{},exit:{x:0,z:9.4}},o);
}
function water(w,h,rep,col,op){
  const nm=waterNormal();nm.repeat.set(rep[0],rep[1]);
  const m=new THREE.MeshPhysicalMaterial({color:col||0x2a7a9a,roughness:.07,normalMap:nm,normalScale:new THREE.Vector2(.8,.8),envMapIntensity:1.2,transparent:true,opacity:op||.92});
  return {mesh:new THREE.Mesh(new THREE.PlaneGeometry(w,h),m),nm};
}
function flat(g,w,d,col,x,y,z){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshStandardMaterial({color:col,roughness:1}));m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.receiveShadow=true;g.add(m);return m}
function trees(g,colliders,pts){pts.forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.1,false,null,colliders,i%2===0))}
function grassy(g,seed,area,excl,count){const gr=grassField({area:area,count:count||6000,seed:seed,exclude:excl});g.add(gr);return gr}
function acacia(g,x,z,s){const t=new THREE.Group();t.position.set(x,0,z);t.scale.setScalar(s||1);cyl(t,.18,.3,3.2,std('#5a4328',.95),0,1.6,0,8);
  const c=new THREE.Mesh(new THREE.SphereGeometry(2.6,16,10),std('#6e8b3a',.9));c.scale.set(1.4,.22,1.4);c.position.y=3.5;t.add(c);g.add(t);return t}
function lamp(g,colliders,x,z,col){cyl(g,.05,.06,2.8,std('#333'),x,1.4,z,6);const b=new THREE.Mesh(new THREE.SphereGeometry(.2,12,10),new THREE.MeshStandardMaterial({color:0xfff2c0,emissive:col||0xffd070,emissiveIntensity:1.6}));b.position.set(x,2.9,z);g.add(b);colliders.push({x:x,z:z,r:.25})}

// ----------------------------------------------------------------- 21 · WAGENIA
export function buildWagenia(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(131);
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,8,5,16,T.dirtTexture);patch(g,0,-3,26,10,T.dirtTexture);
  const rv=water(120,24,[20,4],0x3a6a58,.95);rv.mesh.rotation.x=-Math.PI/2;rv.mesh.position.set(0,.05,-22);g.add(rv.mesh);
  boxes.push({x0:-32,x1:32,z0:-34,z1:-10.5});
  const rk=new THREE.MeshStandardMaterial({map:T.dirtTexture(),color:0x6a5a4a,roughness:1});
  for(let i=0;i<14;i++){const s=.7+r()*1.1,k=new THREE.Mesh(new THREE.DodecahedronGeometry(s,0),rk);k.position.set(-26+r()*52,s*.4,-14-r()*14);k.rotation.set(r()*3,r()*3,0);k.castShadow=true;g.add(k)}
  const wood2=std('#6b4a2a',.9);
  for(let i=0;i<6;i++){const s=new THREE.Group();s.position.set(-20+i*8,0,-16-(i%2)*4);
    [-1,1].forEach(a=>{const l=cyl(s,.1,.12,6,wood2,a*1.3,2.6,0,6);l.rotation.z=a*.35});box(s,3,.15,.15,wood2,0,5,0);
    const n=new THREE.Mesh(new THREE.ConeGeometry(.9,3,10,1,true),std('#b8924a',.9,{side:THREE.DoubleSide}));n.position.set(0,1.2,0);n.rotation.x=Math.PI;s.add(n);g.add(s)}
  [[-12,-9],[11,-9.5]].forEach((p,i)=>{const pg=new THREE.Group();pg.position.set(p[0],.15,p[1]);pg.rotation.y=i?.3:-.2;const b=new THREE.Mesh(new THREE.CapsuleGeometry(.4,4,4,10),wood());b.rotation.z=Math.PI/2;b.scale.set(1,1,1.3);pg.add(b);g.add(pg);colliders.push({x:p[0],z:p[1],r:1.8})});
  [[-18,-2],[18,-3]].forEach(p=>{box(g,3.4,2.2,3,std('#a5703d',.95),p[0],1.1,p[1]);gableRoof(g,p[0],2.2,p[1],3.4,3,1.1,thatch(),std('#a5703d'),.4);colliders.push({x:p[0],z:p[1],r:2.4})});
  [[-9,-1],[9,-1.2]].forEach(p=>{[-1,1].forEach(s=>cyl(g,.06,.07,1.8,wood2,p[0]+s*1.2,.9,p[1],6));box(g,2.6,.06,.06,wood2,p[0],1.7,p[1]);for(let i=0;i<5;i++)box(g,.12,.7,.05,std('#b9b9a8',.7),p[0]-1+i*.5,1.3,p[1]);colliders.push({x:p[0],z:p[1],r:1.5})});
  const sg=sign('KISANGANI','Chutes Wagenia',4.4,1.1,'#1f5f4a','#fff');sg.position.set(0,2.6,-9.4);g.add(sg);cyl(g,.06,.07,2.5,wood2,-2.1,1.25,-9.4,6);cyl(g,.06,.07,2.5,wood2,2.1,1.25,-9.4,6);colliders.push({x:-2.1,z:-9.4,r:.3},{x:2.1,z:-9.4,r:.3});
  for(let i=0;i<5;i++){const p=palm(i+3);p.position.set(-26+i*13+(Math.abs(-26+i*13)<4?6:0),0,4+(i%2)*4);g.add(p);colliders.push({x:p.position.x,z:p.position.z,r:.4})}
  const gr=grassy(g,41,[-36,36,-9,14],(x,z)=>Math.abs(x)<14&&z>-9&&z<1||Math.abs(x)<3.2&&z>4);
  const mist=new THREE.Mesh(new THREE.PlaneGeometry(60,3),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.16,depthWrite:false}));mist.position.set(0,1.4,-14);g.add(mist);
  return finish(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-9,z1:12.5},sky:{elev:40,azim:190},fog:.008,update(dt,t){gr.userData.update(t);rv.nm.offset.x=(t*.06)%1;mist.material.opacity=.14+Math.sin(t)*.03}});
}

// ----------------------------------------------------------------- 22 · SAVANE DE GARAMBA
export function buildGaramba(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(132);
  ground(g,1400,1400,T.dirtTexture,1,0,0);flat(g,200,120,0xb7a55a,0,.012,-20);patch(g,0,8,5,16,T.dirtTexture);
  for(let i=0;i<7;i++){const h=new THREE.Mesh(new THREE.SphereGeometry(30,16,8,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0x8a7a4a,roughness:1}));h.scale.set(1.8,.35,1);h.position.set(-120+i*40,0,-110-r()*20);g.add(h)}
  [[-14,-4],[14,-6],[-22,-12],[22,-14],[-18,6],[20,7],[0,-16],[-8,-20],[9,-22]].forEach(p=>acacia(g,p[0],p[1],.9+r()*.5));
  colliders.push({x:-14,z:-4,r:.5},{x:14,z:-6,r:.5},{x:-18,z:6,r:.5},{x:20,z:7,r:.5});
  const col={g:std('#d9a441',.9),d:std('#6b4a22',.9),e:std('#7d776f',.95)};
  const giraffe=(x,z,ry)=>{const o=new THREE.Group();o.position.set(x,0,z);o.rotation.y=ry;box(o,.7,.9,1.6,col.g,0,2,0);[[-.25,.55],[.25,.55],[-.25,-.55],[.25,-.55]].forEach(p=>cyl(o,.07,.06,1.7,col.g,p[0],.85,p[1],6));
    const nk=cyl(o,.12,.18,2.4,col.g,0,3.2,.7,8);nk.rotation.x=-.25;o.userData.neck=nk;box(o,.3,.3,.6,col.g,0,4.4,1.05);for(let i=0;i<8;i++){const sp=new THREE.Mesh(new THREE.CircleGeometry(.12,8),col.d);sp.position.set(.36,1.8+r(),r()-.5);sp.rotation.y=Math.PI/2;o.add(sp)}
    g.add(o);colliders.push({x:x,z:z,r:1.1});return o};
  const elephant=(x,z,ry)=>{const o=new THREE.Group();o.position.set(x,0,z);o.rotation.y=ry;const b=new THREE.Mesh(new THREE.SphereGeometry(1.4,16,12),col.e);b.scale.set(1.1,1,1.5);b.position.y=2;o.add(b);
    [[-.7,.9],[.7,.9],[-.7,-.9],[.7,-.9]].forEach(p=>cyl(o,.35,.32,1.4,col.e,p[0],.7,p[1],8));const hd=new THREE.Mesh(new THREE.SphereGeometry(.85,14,10),col.e);hd.position.set(0,2.4,1.9);o.add(hd);
    const tk=cyl(o,.2,.08,2,col.e,0,1.5,2.6,8);tk.rotation.x=.25;o.userData.trunk=tk;[-.9,.9].forEach(s=>{const e=new THREE.Mesh(new THREE.CircleGeometry(.7,12),new THREE.MeshStandardMaterial({color:0x7d776f,roughness:.95,side:THREE.DoubleSide}));e.position.set(s,2.5,1.7);e.rotation.y=s>0?1.1:-1.1;o.add(e)});
    g.add(o);colliders.push({x:x,z:z,r:1.9});return o};
  const gi=[giraffe(-16,-9,.6),giraffe(-11,-12,-.4),giraffe(16,-10,2.4)],el=[elephant(11,-13,-.6),elephant(-21,-5,.8)];
  const sg=sign('GARAMBA','Parc national — Observer sans déranger',4.6,1.2,'#8a5a1a','#fff');sg.position.set(5,2.6,3.5);g.add(sg);cyl(g,.06,.07,2.5,std('#5a3a22'),5,1.25,3.45,6);colliders.push({x:5,z:3.5,r:.3});
  const jp=new THREE.Group();jp.position.set(-9,0,1);box(jp,3.4,1.1,1.7,std('#4a6a3a',.5),0,1,0);box(jp,1.4,.6,1.6,glass(),.5,1.8,0);[[-1,.9],[1,.9],[-1,-.9],[1,-.9]].forEach(p=>cyl(jp,.42,.42,.3,std('#111'),p[0],.42,p[1],14).rotation.x=Math.PI/2);g.add(jp);colliders.push({x:-9,z:1,r:1.9});
  const gr=grassy(g,42,[-40,40,-10,14],(x,z)=>Math.abs(x)<3.2&&z>4,9000);
  return finish(g,colliders,boxes,{bounds:{x0:-28,x1:28,z0:-9,z1:12.5},sky:{elev:38,azim:210,turb:5},fog:.007,
    update(dt,t){gr.userData.update(t);gi.forEach((o,i)=>{o.userData.neck.rotation.x=-.25+Math.sin(t*.5+i)*.08});el.forEach((o,i)=>{o.userData.trunk.rotation.x=.25+Math.sin(t*.9+i)*.15})}});
}

// ----------------------------------------------------------------- 23 · LAC TANGANYIKA
export function buildTanganyika(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(133);
  ground(g,1400,1400,T.grassTexture,1,0,0);flat(g,80,18,0xe0cfa0,0,.014,-6);patch(g,0,9,5,10,T.dirtTexture);
  const lk=water(300,80,[40,10],0x2a7aa0,.96);lk.mesh.rotation.x=-Math.PI/2;lk.mesh.position.set(0,.04,-55);g.add(lk.mesh);boxes.push({x0:-60,x1:60,z0:-95,z1:-11});
  for(let i=0;i<6;i++){const m=new THREE.Mesh(new THREE.ConeGeometry(40+r()*20,36,6),new THREE.MeshBasicMaterial({color:0x5a7a8a,fog:true}));m.position.set(-120+i*50,14,-170);g.add(m)}
  box(g,3,.2,14,wood(),0,.7,-16);for(let i=0;i<6;i++)[-1.3,1.3].forEach(s=>cyl(g,.12,.12,1.4,std('#4a3418'),s,.3,-9.5-i*2.2,6));boxes.push({x0:-1.5,x1:1.5,z0:-24,z1:-9.4});
  [[-12,-14,.3],[12,-16,-.5],[-20,-20,.1]].forEach((p,i)=>{const b=new THREE.Group();b.position.set(p[0],.2,p[1]);b.rotation.y=p[2];const hl=new THREE.Mesh(new THREE.CapsuleGeometry(.5,i?4:3,4,10),i?std('#2e6aa8',.6):wood());hl.rotation.z=Math.PI/2;hl.scale.set(1,.8,1.3);b.add(hl);if(i===1){box(b,1.4,1,1.2,std('#efefef',.6),-1,.9,0);cyl(b,.05,.05,2,std('#999'),1,1.3,0,5)}g.add(b)});
  [[-8,-5],[8,-5.5]].forEach(p=>{[-1,1].forEach(s=>cyl(g,.06,.07,2,wood(),p[0]+s*1.6,1,p[1],6));const n=new THREE.Mesh(new THREE.PlaneGeometry(3.2,1.4,8,4),new THREE.MeshBasicMaterial({color:0xc9b27a,wireframe:true,transparent:true,opacity:.7,side:THREE.DoubleSide}));n.position.set(p[0],1.2,p[1]);g.add(n);colliders.push({x:p[0],z:p[1],r:1.8})});
  const sg=sign('LAC TANGANYIKA','Le plus long lac d’eau douce du monde',5,1.2,'#1f5f8a','#fff');sg.position.set(-9,2.6,3.5);g.add(sg);cyl(g,.06,.07,2.5,wood(),-9,1.25,3.45,6);colliders.push({x:-9,z:3.5,r:.3});
  for(let i=0;i<7;i++){const p=palm(i+9);p.position.set(-30+i*10+(Math.abs(-30+i*10)<4?6:0),0,2+(i%3)*3);g.add(p);colliders.push({x:p.position.x,z:p.position.z,r:.4})}
  const gr=grassy(g,43,[-36,36,-2,14],(x,z)=>Math.abs(x)<3.2&&z>4);
  return finish(g,colliders,boxes,{bounds:{x0:-27,x1:27,z0:-10,z1:12.5},sky:{elev:32,azim:190},update(dt,t){gr.userData.update(t);lk.nm.offset.x=(t*.03)%1;lk.nm.offset.y=(t*.01)%1}});
}

// ----------------------------------------------------------------- 24 · CITÉ DES SCIENCES
export function buildSciences(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(134);
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,8,5,16,T.dirtTexture);flat(g,44,22,0xcfc8b8,0,.02,-6);
  box(g,28,7,8,stone('#e9eef2'),0,3.5,-20);for(let i=0;i<7;i++)box(g,2.6,5,.12,glass(),-12+i*4,3.3,-15.9);
  const sg=sign('CITÉ DES SCIENCES','Observer · Expérimenter · Comprendre',10,1.3,'#1a3a6b','#fff');sg.position.set(0,6.2,-15.9);g.add(sg);boxes.push({x0:-14.5,x1:14.5,z0:-24.2,z1:-15.7});
  const wt=new THREE.Group();wt.position.set(14,0,-8);cyl(wt,.35,.6,16,std('#f2f2f2',.4),0,8,0,14);const hub=new THREE.Group();hub.position.set(0,16,.6);
  for(let i=0;i<3;i++){const arm=new THREE.Group();arm.rotation.z=i*Math.PI*2/3;const b=new THREE.Mesh(new THREE.BoxGeometry(.35,6,.1),std('#f2f2f2',.4));b.position.y=3;arm.add(b);hub.add(arm)}
  wt.add(hub);g.add(wt);colliders.push({x:14,z:-8,r:1});
  for(let i=0;i<4;i++){const p=box(g,3.2,.1,2,std('#1a2a5a',.2,{metalness:.5}),-16+i*3.8,1.3,-5);p.rotation.x=-.8;cyl(g,.06,.08,1.2,std('#666'),-16+i*3.8,.6,-4.4,6)}colliders.push({x:-13,z:-5,r:4.8});
  cyl(g,.35,.35,1.6,glass(),-14,.8,3,12);cyl(g,.38,.38,.1,std('#aaa'),-14,1.65,3,12);colliders.push({x:-14,z:3,r:.5});
  const rb=new THREE.Group();['#e74c3c','#e67e22','#f1c40f','#27ae60','#2e86de','#6c3fb5'].forEach((c,i)=>{const t=new THREE.Mesh(new THREE.TorusGeometry(10-i*.55,.28,8,48,Math.PI),new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:.55,fog:false}));rb.add(t)});rb.position.set(0,6,-17.5);g.add(rb);
  const mg=new THREE.Group();mg.position.set(-11,0,-9);const ar=new THREE.Mesh(new THREE.TorusGeometry(1.2,.35,10,24,Math.PI),std('#c0392b',.4,{metalness:.5}));ar.position.y=.1;ar.rotation.z=Math.PI;ar.position.y=2.2;mg.add(ar);box(mg,.7,.7,.7,std('#bbb',.3,{metalness:.8}),-1.2,.35,0);box(mg,.7,.7,.7,std('#2e86de',.4,{metalness:.5}),1.2,.35,0);g.add(mg);colliders.push({x:-11,z:-9,r:1.8});
  const gl=new THREE.Mesh(new THREE.SphereGeometry(1.1,24,18),new THREE.MeshStandardMaterial({color:0x2e86de,roughness:.5}));gl.position.set(9,2.2,-10);g.add(gl);cyl(g,.1,.12,1.6,std('#555'),9,.8,-10,6);colliders.push({x:9,z:-10,r:1.2});
  trees(g,colliders,[[-24,4],[24,4],[-22,-10],[22,-10]]);
  const gr=grassy(g,44,[-36,36,-12,14],(x,z)=>Math.abs(x)<24&&z>-14&&z<1||Math.abs(x)<3.2&&z>4);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:46,azim:200,turb:2},update(dt,t){gr.userData.update(t);hub.rotation.z=t*.9;gl.rotation.y=t*.3}});
}

// ----------------------------------------------------------------- 25 · SCÈNE DE LA RUMBA
export function buildRumba(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(135);
  ground(g,1400,1400,T.grassTexture,1,0,0);flat(g,50,24,0x6a5a4a,0,.02,-6);patch(g,0,9,5,10,T.dirtTexture);
  box(g,22,1,8,wood('#5a3a22'),0,.5,-16);box(g,22,.3,1,std('#222'),0,1.1,-12.2);
  [-11,11].forEach(x=>box(g,1,8,8,std('#1a1a22',.9),x,4,-16));box(g,22,1,8,std('#1a1a22',.9),0,8.2,-16);box(g,22,7.2,.4,std('#2b1a3a',.9),0,4.6,-19.8);
  const sg=sign('LA RUMBA CONGOLAISE','Patrimoine mondial de l’UNESCO',12,1.4,'#7a1f3a','#f1c40f');sg.position.set(0,7.4,-12);g.add(sg);boxes.push({x0:-11.6,x1:11.6,z0:-20,z1:-11.7});
  [-9,9].forEach(x=>{box(g,1.6,3,1.4,std('#111',.8),x,2.5,-13.5);[.9,2.4].forEach(y=>cyl(g,.45,.45,.1,std('#333',.5),x,y+.6,-12.78,16).rotation.x=Math.PI/2)});
  [[-3,-14.5],[0,-15],[3,-14.5]].forEach(p=>{cyl(g,.55,.45,1.1,std('#8a5a32',.8),p[0],1.6,p[1],14);cyl(g,.56,.56,.06,std('#e9dfca',.8),p[0],2.15,p[1],14)});
  const lights=[];['#ff4d6d','#4dabf7','#ffd43b','#69db7c'].forEach((c,i)=>{const l=new THREE.PointLight(new THREE.Color(c),2.2,18);l.position.set(-8+i*5.3,7,-11);g.add(l);lights.push(l);const b=new THREE.Mesh(new THREE.SphereGeometry(.25,10,8),new THREE.MeshBasicMaterial({color:c}));b.position.copy(l.position);g.add(b)});
  const bulbs=[];for(let k=0;k<3;k++)for(let i=0;i<22;i++){const x=-24+i*2.2,y=6.5-Math.sin(i/21*Math.PI)*.8-k*.3,z=-8+k*5;const b=new THREE.Mesh(new THREE.SphereGeometry(.12,8,6),new THREE.MeshStandardMaterial({color:0xfff2c0,emissive:[0xffcc66,0xff6688,0x66ccff][(i+k)%3],emissiveIntensity:2}));b.position.set(x,y,z);g.add(b);bulbs.push(b)}
  [[-10,-1],[10,-1.5],[-15,2],[15,2]].forEach(p=>{box(g,3,.1,.7,wood(),p[0],.5,p[1]);[-1.2,1.2].forEach(s=>box(g,.1,.5,.5,std('#4a2f1b'),p[0]+s,.25,p[1]));colliders.push({x:p[0],z:p[1],r:1.6})});
  trees(g,colliders,[[-24,4],[24,4],[-26,-8],[26,-8]]);
  const gr=grassy(g,45,[-36,36,-12,14],(x,z)=>Math.abs(x)<25&&z>-21&&z<1||Math.abs(x)<3.2&&z>4,4000);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:3,azim:260,turb:5,ray:2},fog:.007,
    update(dt,t){gr.userData.update(t);lights.forEach((l,i)=>{l.intensity=1.6+Math.sin(t*3+i*1.5)*.9});bulbs.forEach((b,i)=>{b.material.emissiveIntensity=1.2+Math.sin(t*4+i)*.8})}});
}

// ----------------------------------------------------------------- 26 · CASERNE DES POMPIERS
export function buildPompiers(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(136);
  ground(g,1400,1400,T.grassTexture,1,0,0);flat(g,56,22,0x6a6d72,0,.02,-6);patch(g,0,9,5,10,T.dirtTexture);
  box(g,26,6,8,stone('#e8d4c6'),0,3,-20);box(g,26.4,.5,8.4,std('#b22222'),0,6.1,-20);
  [-8,0,8].forEach(x=>{box(g,6,4.6,.2,std('#c0392b',.5),x,2.4,-15.9);for(let k=0;k<6;k++)box(g,5.8,.12,.25,std('#9b2c20',.5),x,.6+k*.7,-15.8)});
  const sg=sign('CASERNE DES POMPIERS','Protéger · Secourir',9,1.2,'#8e1f1f','#fff');sg.position.set(0,5.4,-15.75);g.add(sg);boxes.push({x0:-13.5,x1:13.5,z0:-24.2,z1:-15.6});
  const tr=new THREE.Group();tr.position.set(11,0,-9);tr.rotation.y=.3;box(tr,8,2.4,2.8,std('#c0392b',.35),0,1.9,0);box(tr,2,2,2.7,std('#c0392b',.35),3.5,1.8,0);box(tr,.1,1,2.2,glass(),4.55,2.2,0);
  const lad=new THREE.Group();lad.position.set(-.3,3.4,0);for(let i=0;i<10;i++)box(lad,.06,.06,1,std('#ddd',.4,{metalness:.7}),-3.5+i*.75,0,0);[-.5,.5].forEach(z=>box(lad,7.4,.08,.08,std('#ddd',.4,{metalness:.7}),0,0,z));tr.add(lad);
  [[-2.5,1.4],[2.5,1.4],[-2.5,-1.4],[2.5,-1.4]].forEach(p=>cyl(tr,.6,.6,.35,std('#111',.95),p[0],.6,p[1],16).rotation.x=Math.PI/2);
  const bar=box(tr,1,.2,.4,std('#ff3b30',.3,{emissive:0xff1a10,emissiveIntensity:1.2}),3.5,3,0);g.add(tr);colliders.push({x:8,z:-9,r:2.2},{x:11,z:-9,r:2.2},{x:14,z:-9,r:2.2});
  const tw=new THREE.Group();tw.position.set(-14,0,-10);box(tw,3,12,3,std('#9a8a7a',.9),0,6,0);for(let i=0;i<4;i++)box(tw,3.1,.3,3.1,std('#555'),0,2+i*3,0);g.add(tw);colliders.push({x:-14,z:-10,r:2.4});
  [[-7,-2],[7,-2.5]].forEach(p=>{cyl(g,.25,.3,.9,std('#e8590c',.5),p[0],.45,p[1],10);cyl(g,.18,.18,.2,std('#e8590c'),p[0],1,p[1],10);colliders.push({x:p[0],z:p[1],r:.4})});
  [[-4,-9],[4,-9]].forEach(p=>{cyl(g,.15,.15,.7,std('#b22222',.4),p[0],.35,p[1],10);colliders.push({x:p[0],z:p[1],r:.3})});
  const hose=new THREE.Mesh(new THREE.TorusGeometry(.8,.12,8,20),std('#b8860b',.7));hose.rotation.x=Math.PI/2;hose.position.set(-9,.15,-3);g.add(hose);
  trees(g,colliders,[[-24,4],[24,4],[-22,-8],[22,-12]]);
  const gr=grassy(g,46,[-36,36,-12,14],(x,z)=>Math.abs(x)<28&&z>-17&&z<1||Math.abs(x)<3.2&&z>4,4000);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:40,azim:170},update(dt,t){gr.userData.update(t);bar.material.emissiveIntensity=(t%1<.5)?2:.2}});
}

// ----------------------------------------------------------------- 27 · POSTE ET BANQUE
export function buildPoste(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(137);
  ground(g,1400,1400,T.grassTexture,1,0,0);flat(g,56,22,0xcbbfa8,0,.02,-6);patch(g,0,9,5,10,T.dirtTexture);
  box(g,15,6,8,stone('#f1d34a'),-9,3,-19);box(g,15.3,.5,8.3,std('#1f5fa8'),-9,6.1,-19);for(let i=0;i<3;i++)box(g,2.4,2.8,.12,glass(),-14+i*4.6,2.7,-14.95);
  const s1=sign('LA POSTE','Lettres · Colis',6,1,'#1f5fa8','#fff');s1.position.set(-9,5.2,-14.9);g.add(s1);
  box(g,15,7,8,stone('#e9eef2'),9,3.5,-19);box(g,15.3,.5,8.3,std('#1a3a6b'),9,7.1,-19);for(let i=0;i<4;i++){cyl(g,.35,.4,6.2,stone('#fff'),3.2+i*3.2,3.1,-14.5,14)}
  const s2=sign('BANQUE','Épargnez en toute sécurité',6,1,'#0b3d6b','#f1c40f');s2.position.set(9,5.8,-14.9);g.add(s2);boxes.push({x0:-16.5,x1:-1.5,z0:-23.2,z1:-14.9},{x0:1.5,x1:16.5,z0:-23.2,z1:-14.6});
  [[-6,-3],[-12,-3]].forEach(p=>{cyl(g,.05,.06,1,std('#333'),p[0],.5,p[1],6);box(g,.6,.9,.5,std('#f1c40f',.5),p[0],1.4,p[1]);colliders.push({x:p[0],z:p[1],r:.5})});
  const van=new THREE.Group();van.position.set(-18,0,-4);box(van,4,1.9,1.9,std('#f1d34a',.4),0,1.4,0);box(van,1.2,1.2,1.8,glass(),1.9,1.4,0);[[-1.3,.95],[1.3,.95],[-1.3,-.95],[1.3,-.95]].forEach(p=>cyl(van,.4,.4,.3,std('#111'),p[0],.4,p[1],14).rotation.x=Math.PI/2);g.add(van);colliders.push({x:-18,z:-4,r:2.4});
  const coin=cyl(g,1.5,1.5,.3,std('#d4af37',.25,{metalness:.9}),11,2.4,-6,28);coin.rotation.x=Math.PI/2;cyl(g,.1,.12,2.2,std('#555'),11,1.1,-6,6);colliders.push({x:11,z:-6,r:1.6});
  const pg=new THREE.Mesh(new THREE.SphereGeometry(1,20,14),std('#e89ab4',.5));pg.scale.set(1.3,1,.9);pg.position.set(15,1.1,-2);g.add(pg);[-.5,.5].forEach(s=>[-.4,.4].forEach(z=>cyl(g,.15,.12,.5,std('#e89ab4'),15+s*1.1,.3,-2+z,6)));colliders.push({x:15,z:-2,r:1.5});
  trees(g,colliders,[[-24,4],[24,4],[-24,-8],[24,-9]]);
  const gr=grassy(g,47,[-36,36,-12,14],(x,z)=>Math.abs(x)<28&&z>-17&&z<1||Math.abs(x)<3.2&&z>4,4000);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:42,azim:180},update(dt,t){gr.userData.update(t);coin.rotation.z=t*.8}});
}

// ----------------------------------------------------------------- 28 · RECYCLAGE
export function buildRecyclage(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(138);
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,8,5,16,T.dirtTexture);flat(g,44,14,0x8a8a82,0,.02,-12);
  box(g,22,5,7,tin(),-8,2.5,-20);gableRoof(g,-8,5,-20,22,7,1.4,tin(),tin(),.5);const sg=sign('CENTRE DE RECYCLAGE','Réduire · Réutiliser · Recycler',10,1.2,'#1f7a4d','#fff');sg.position.set(-8,4.6,-16.45);g.add(sg);boxes.push({x0:-19.5,x1:3.5,z0:-23.7,z1:-16.4});
  [['#2e86de','PAPIER'],['#f1c40f','PLASTIQUE'],['#27ae60','VERRE'],['#7f8c8d','MÉTAL']].forEach((b,i)=>{const x=-9+i*3;box(g,2,1.6,1.4,std(b[0],.55),x,.8,-10);box(g,2.1,.15,1.5,std('#222'),x,1.65,-10);const l=sign(b[1],'',1.8,.4,b[0],'#fff');l.position.set(x,1.1,-9.28);g.add(l);colliders.push({x:x,z:-10,r:1.1})});
  const bt=[];for(let i=0;i<120;i++){const c=new THREE.CylinderGeometry(.08,.1,.4,6);c.rotateZ(r()*3);const a=r()*6.28,d=r()*2.4;c.translate(Math.cos(a)*d,.2+r()*(1.6-d*.5),Math.sin(a)*d);bt.push(c)}
  const pile=new THREE.Mesh(mergeGeometries(bt),std('#9fd3e8',.2,{transparent:true,opacity:.8}));pile.position.set(12,0,-9);g.add(pile);colliders.push({x:12,z:-9,r:2.4});
  const cp=new THREE.Mesh(new THREE.SphereGeometry(1.5,16,10,0,Math.PI*2,0,Math.PI/2),std('#3a2a1a',1));cp.scale.set(1.6,.9,1);cp.position.set(-15,0,-3);g.add(cp);colliders.push({x:-15,z:-3,r:2.4});
  const pl=new THREE.InstancedMesh(new THREE.ConeGeometry(.2,.7,6),std('#3e8a3a',.8),120),m4=new THREE.Matrix4();let n=0;
  for(let a=0;a<6;a++)for(let b=0;b<20;b++){m4.compose(new THREE.Vector3(8+b*.55,.35,-3+a*.9),new THREE.Quaternion(),new THREE.Vector3(1,1,1));pl.setMatrixAt(n++,m4)}g.add(pl);flat(g,12,6,0x5a4630,13,.03,-.4);
  trees(g,colliders,[[-24,4],[24,4],[-24,-6],[24,-8]]);
  const gr=grassy(g,48,[-36,36,-12,14],(x,z)=>Math.abs(x)<28&&z>-24&&z<1||Math.abs(x)<3.2&&z>4,4000);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-8.5,z1:12.5},sky:{elev:44,azim:190},update(dt,t){gr.userData.update(t)}});
}

// ----------------------------------------------------------------- 29 · CENTRE NUMÉRIQUE
export function buildNumerique(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(139);
  ground(g,1400,1400,T.grassTexture,1,0,0);flat(g,50,22,0xd5d9de,0,.02,-6);patch(g,0,9,5,10,T.dirtTexture);
  box(g,26,7,8,std('#2a3340',.4,{metalness:.3}),0,3.5,-20);for(let i=0;i<8;i++)box(g,2.6,5,.12,glass(),-11+i*3.1,3.6,-15.95);
  const c=document.createElement('canvas');c.width=1024;c.height=512;const x=c.getContext('2d');
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;
  const draw=t=>{x.fillStyle='#071a33';x.fillRect(0,0,1024,512);x.fillStyle='#4dabf7';x.font='bold 70px sans-serif';x.textAlign='center';x.fillText('CENTRE NUMÉRIQUE',512,150);x.fillStyle='#fff';x.font='42px sans-serif';x.fillText('Apprendre · Créer · Protéger',512,230);
    x.fillStyle='#69db7c';x.font='bold 40px monospace';const s='> mot de passe : ********';x.fillText(s.slice(0,Math.floor(t*6)%(s.length+6)),512,350);x.fillStyle='#ffd43b';x.fillRect(80,430,((t*120)%860),14);tex.needsUpdate=true};draw(0);
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(12,6),new THREE.MeshBasicMaterial({map:tex,toneMapped:false}));scr.position.set(0,5.2,-15.8);g.add(scr);boxes.push({x0:-13.5,x1:13.5,z0:-24.2,z1:-15.6});
  [[-12,-9],[12,-9],[-16,-3],[16,-3]].forEach(p=>{box(g,3.4,.12,1.4,std('#e9edf2',.6),p[0],1,p[1]);[-1.5,1.5].forEach(s=>cyl(g,.06,.06,1,std('#777'),p[0]+s,.5,p[1],6));[-.7,.7].forEach(s=>{box(g,.9,.6,.05,std('#111'),p[0]+s,1.4,p[1]-.3).rotation.x=-.2;box(g,.9,.05,.6,std('#555'),p[0]+s,1.08,p[1]+.05)});colliders.push({x:p[0],z:p[1],r:2})});
  const an=new THREE.Group();an.position.set(15,0,-12);cyl(an,.15,.22,12,std('#bbb',.4,{metalness:.6}),0,6,0,8);const ds=cyl(an,.9,.9,.12,std('#eee',.4),0,10,0,20);ds.rotation.x=.6;const rg=[];for(let i=1;i<=3;i++){const t=new THREE.Mesh(new THREE.TorusGeometry(i*.9,.04,6,24,Math.PI),new THREE.MeshBasicMaterial({color:0x4dabf7,transparent:true,opacity:.5}));t.position.set(0,11,0);t.rotation.set(0,0,Math.PI/2);an.add(t);rg.push(t)}g.add(an);colliders.push({x:15,z:-12,r:.8});
  const rb=new THREE.Group();rb.position.set(-9,0,-2);box(rb,1,1.2,.8,std('#d0d6dc',.3,{metalness:.7}),0,1.3,0);box(rb,.7,.6,.6,std('#d0d6dc',.3,{metalness:.7}),0,2.3,0);[-.15,.15].forEach(s=>box(rb,.12,.12,.05,new THREE.MeshBasicMaterial({color:0x4dabf7}),s,2.35,.31));[-.75,.75].forEach(s=>box(rb,.2,1,.2,std('#a8b0b8',.3,{metalness:.7}),s,1.2,0));box(rb,.4,.8,.4,std('#a8b0b8'),-.25,.4,0);box(rb,.4,.8,.4,std('#a8b0b8'),.25,.4,0);g.add(rb);colliders.push({x:-9,z:-2,r:.9});
  trees(g,colliders,[[-24,4],[24,4],[-24,-8],[24,-9]]);
  const gr=grassy(g,49,[-36,36,-12,14],(x,z)=>Math.abs(x)<28&&z>-17&&z<1||Math.abs(x)<3.2&&z>4,4000);
  return finish(g,colliders,boxes,{bounds:{x0:-24,x1:24,z0:-9,z1:12.5},sky:{elev:36,azim:180},update(dt,t){gr.userData.update(t);draw(t);rg.forEach((q,i)=>{q.material.opacity=.25+.3*Math.abs(Math.sin(t*2-i*.7))});rb.rotation.y=Math.sin(t*.6)*.4}});
}

// ----------------------------------------------------------------- 30 · PLACE DE L'INDÉPENDANCE
export function buildPlace(){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(140);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  flat(g,60,34,0xd2c7b0,0,.02,-6);patch(g,0,9,5,10,T.dirtTexture);
  const mar=new THREE.MeshStandardMaterial({map:T.plasterTexture('#f4efe4'),roughness:.5});
  for(let i=0;i<3;i++)box(g,9-i*1.6,.5,9-i*1.6,mar,0,.25+i*.5,-13);
  const ob=new THREE.Mesh(new THREE.ConeGeometry(1.4,16,4),mar);ob.position.set(0,9.5,-13);ob.rotation.y=Math.PI/4;ob.castShadow=true;g.add(ob);
  const star=new THREE.Mesh(new THREE.OctahedronGeometry(1.4,0),new THREE.MeshStandardMaterial({color:0xf1c40f,emissive:0xf1c40f,emissiveIntensity:.8,metalness:.8,roughness:.25}));star.position.set(0,19.5,-13);g.add(star);
  const sg=sign('30 JUIN 1960','Justice · Paix · Travail',7,1.2,'#0b5fa5','#fff');sg.position.set(0,2.6,-8.4);g.add(sg);boxes.push({x0:-4.8,x1:4.8,z0:-17.5,z1:-8.4});
  const flags=[];[-14,-9,9,14].forEach(px=>{cyl(g,.05,.07,9,std('#aaa',.4,{metalness:.7}),px,4.5,-8,8);const f=new THREE.Mesh(new THREE.PlaneGeometry(3,1.9,10,5),new THREE.MeshStandardMaterial({map:flagTexture(),side:THREE.DoubleSide,roughness:.9}));f.position.set(px+1.5,8,-8);g.add(f);flags.push(f);colliders.push({x:px,z:-8,r:.3})});
  cyl(g,2.6,2.7,.55,mar,0,.28,1,28);cyl(g,2.3,2.3,.1,new THREE.MeshPhysicalMaterial({color:0x2a7a9a,roughness:.05,transparent:true,opacity:.88}),0,.55,1,28);cyl(g,.3,.4,1.8,mar,0,1.2,1,12);colliders.push({x:0,z:1,r:2.7});
  box(g,14,1.2,3,std('#7a1f1f',.8),-18,.6,-3);box(g,14,.2,3.4,tin(),-18,4,-3);[-24,-12].forEach(px=>cyl(g,.1,.1,4,std('#666'),px,2,-3,8));colliders.push({x:-18,z:-3,r:4});
  const fw=[];for(let k=0;k<4;k++){const n=120,pos=new Float32Array(n*3),col=new Float32Array(n*3),c=new THREE.Color().setHSL(r(),.9,.6);for(let i=0;i<n;i++){const a=r()*6.28,b=Math.acos(2*r()-1);pos[i*3]=Math.sin(b)*Math.cos(a);pos[i*3+1]=Math.sin(b)*Math.sin(a);pos[i*3+2]=Math.cos(b);col[i*3]=c.r;col[i*3+1]=c.g;col[i*3+2]=c.b}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));
    const pts=new THREE.Points(geo,new THREE.PointsMaterial({size:.5,vertexColors:true,transparent:true,opacity:0,depthWrite:false,fog:false,blending:THREE.AdditiveBlending}));pts.position.set(-30+k*20,28+r()*8,-40-r()*10);g.add(pts);fw.push(pts)}
  [[-22,6],[22,6],[-24,-12],[24,-12]].forEach((p,i)=>tree(g,p[0],p[1],1.1,false,null,colliders,i%2===0));
  [[-8,-3],[8,-3],[-8,5],[8,5]].forEach(p=>lamp(g,colliders,p[0],p[1]));
  const gr=grassy(g,50,[-36,36,-14,14],(x,z)=>Math.abs(x)<30&&z>-23&&z<1||Math.abs(x)<3.2&&z>4,4000);
  return finish(g,colliders,boxes,{bounds:{x0:-26,x1:26,z0:-6.5,z1:12.5},sky:{elev:2,azim:250,turb:6,ray:2},fog:.006,
    update(dt,t){gr.userData.update(t);star.rotation.y=t*.6;flags.forEach((f,i)=>{const p=f.geometry.attributes.position;for(let k=0;k<p.count;k++){const x=p.getX(k);p.setZ(k,Math.sin(x*2+t*3+i)*.14*(x+1.5)/3)}p.needsUpdate=true});
      fw.forEach((p,i)=>{const u=((t*.35+i*.27)%1);p.scale.setScalar(1+u*14);p.material.opacity=u<.08?u/.08:Math.max(0,1-u)*.9})}});
}
