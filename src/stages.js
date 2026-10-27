import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree,flagTexture} from './world.js';
import {leafyTree,palm,grassField,bush} from './nature.js';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Niveaux supplémentaires : Grand Marché, fleuve Congo, centre de santé, université.
export function ground(g,w,d,texFn,rep,cx,cz){
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshStandardMaterial({map:texFn(),roughness:1}));
  m.rotation.x=-Math.PI/2;m.position.set(cx||0,0,cz||0);m.receiveShadow=true;g.add(m);return m;
}
export function patch(g,x,z,w,d,tex){
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshStandardMaterial({map:tex(),roughness:1,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));
  m.rotation.x=-Math.PI/2;m.position.set(x,.02,z);m.receiveShadow=true;g.add(m);return m;
}
export function sign(text,sub,w,h,bg,fg){
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map:T.textBoard([{t:text,s:70,y:sub?.38:.5},...(sub?[{t:sub,s:34,y:.75,b:false,c:'#f1c40f'}]:[])],1024,Math.round(1024*h/w),bg||'#1f7a4d',fg||'#ffffff'),roughness:.6}));
  return m;
}

export function exitSign(g,x,z){
  cyl(g,.06,.08,2.2,std('#5a3a22',.9),x,1.1,z,8);
  const b=sign('↩ Retour au quartier','',2.4,.6,'#6b4a2a','#ffffff');b.position.set(x,2.2,z+.1);g.add(b);
}
// ---------------------------------------------------------------- GRAND MARCHÉ
export function buildMarche(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  const r=rng(41);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,-4,64,36,T.dirtTexture);
  patch(g,0,8,6,16,T.dirtTexture);
  // étals colorés, en rangées
  const umbCols=['#c0392b','#e0a526','#2e86de','#1f7a4d','#8e44ad','#e67e22'];
  const fruit=['#e68a00','#c0392b','#6bbf3a','#e0a526','#d35400','#f1c40f'];
  function stall(x,z,i,ry){
    const s=new THREE.Group();s.position.set(x,0,z);s.rotation.y=ry||0;
    const wood=std('#6b4226',.9);
    [[-1.4,-.9],[1.4,-.9],[-1.4,.9],[1.4,.9]].forEach(p=>cyl(s,.05,.05,2.3,wood,p[0],1.15,p[1],8));
    const um=new THREE.Mesh(new THREE.ConeGeometry(2.3,.75,10),std(umbCols[i%6],.85,{side:THREE.DoubleSide}));um.position.y=2.55;um.castShadow=true;s.add(um);
    box(s,2.9,.12,1.1,new THREE.MeshStandardMaterial({map:T.woodTexture('#a87445'),roughness:.9}),0,.85,.5);
    box(s,2.9,.8,.9,std('#8a5a32',.9),0,.4,.5);
    // marchandises fusionnées
    const gs=[],col=fruit[i%6];
    for(let k=0;k<14;k++){const sg=new THREE.SphereGeometry(.12,10,8);sg.translate(-1.2+k%7*.4+(Math.floor(k/7)%2)*.2,1.0+Math.floor(k/7)*.2,.35+((k*.37)%.5));gs.push(sg)}
    const gm=new THREE.Mesh(mergeGeometries(gs),std(col,.5));gm.castShadow=true;s.add(gm);
    const gs2=[];for(let k=0;k<8;k++){const sg=new THREE.SphereGeometry(.1,8,6);sg.translate(-1.1+k*.3,1.0,.9);gs2.push(sg)}
    const gm2=new THREE.Mesh(mergeGeometries(gs2),std(fruit[(i+2)%6],.5));s.add(gm2);
    g.add(s);
    // collision : étal rectangulaire (orienté selon ry, approximation par rayon)
    boxes.push({x0:x-1.6,x1:x+1.6,z0:z-.2,z1:z+1.5});
  }
  let n=0;
  [-18,-9,0,9,18].forEach(x=>{[-14,-9].forEach((z,j)=>{if(Math.abs(x)<1&&j===0)return;if(Math.abs(x+6)<1&&z===-9)return;if(Math.abs(x-8)<1&&z===-9)return;stall(x,z,n++,Math.PI)})});
  // caisses, sacs, paniers
  const crate=new THREE.MeshStandardMaterial({map:T.woodTexture('#b0824a'),roughness:.9});
  for(let i=0;i<22;i++){const x=-26+r()*52,z=-18+r()*20;if(Math.abs(x)<2.5&&z>-4)continue;box(g,.7,.5,.5,crate,x,.25,z,r()*3);}
  const sack=std('#cdb488',.95);
  for(let i=0;i<16;i++){const x=-24+r()*48,z=-16+r()*18;const s=new THREE.Mesh(new THREE.SphereGeometry(.34,10,8),sack);s.scale.set(1,.7,.8);s.position.set(x,.22,z);s.castShadow=true;g.add(s)}
  // arc d'entrée
  [-3,3].forEach(x=>box(g,.5,4.2,.5,new THREE.MeshStandardMaterial({map:T.brickTexture([198,108,62]),roughness:.9}),x,2.1,10.5));
  const arch=sign('GRAND MARCHÉ','Kinshasa',6.6,1.4,'#c0392b','#fff');arch.position.set(0,4.5,10.5);g.add(arch);
  box(g,6.8,.35,.5,std('#5a3a22'),0,3.9,10.5);
  colliders.push({x:-3,z:10.5,r:.5},{x:3,z:10.5,r:.5});
  // grand manguier d'ombre au centre
  const mt=leafyTree({kind:'mango',seed:77,fruits:true,trunk:3.2});mt.position.set(0,0,-1.5);mt.scale.setScalar(1.3);g.add(mt);colliders.push({x:0,z:-1.5,r:.8});
  // bâtiments de fond
  const cols=['#e9d9b8','#cfe3d6','#e7c9b0','#d9d4e8'];
  for(let i=0;i<7;i++){
    const x=-30+i*10,w=8+r()*2,h=3.4+r()*2.4;
    box(g,w,h,6,std(cols[i%4],.95),x,h/2,-26);
    gableRoof(g,x,h,-26,w,6,1.1,new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35}),std('#e9dfca'),.6);
    for(let k=0;k<3;k++)box(g,1,1.2,.1,std('#9fc6dd',.2,{emissive:0x4da6d9,emissiveIntensity:.25}),x-2.5+k*2.5,h*.55,-22.95);
  }
  boxes.push({x0:-36,x1:36,z0:-29.5,z1:-22.5});
  // arbres et palmiers sur les bords
  [[-33,-5],[33,-6],[-34,5],[34,4],[-28,10],[28,11]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.15,false,null,colliders,i%2===0));
  const grass=grassField({area:[-40,40,-24,16],count:9000,seed:8,exclude:(x,z)=>Math.abs(x)<32&&z>-20&&z<4||Math.abs(x)<3.5&&z>4});
  g.add(grass);
  exitSign(g,-3.8,9.6);colliders.push({x:-3.8,z:9.6,r:.3});
  return {group:g,colliders,boxes,bounds:{x0:-32,x1:32,z0:-20,z1:12.5},update(dt,t){grass.userData.update(t)},dyn:{},exit:{x:0,z:9}};
}

// ---------------------------------------------------------------- FLEUVE CONGO
export function waterNormal(){
  const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');
  const id=x.createImageData(256,256),h=new Float32Array(256*256);
  const r=rng(3);
  // hauteur : somme d'ondes
  for(let y=0;y<256;y++)for(let xx=0;xx<256;xx++){
    h[y*256+xx]=Math.sin(xx*.11+Math.sin(y*.05)*3)*.5+Math.sin(y*.09+xx*.03)*.4+Math.sin((xx+y)*.07)*.3+Math.sin(xx*.23-y*.17)*.15;
  }
  for(let y=0;y<256;y++)for(let xx=0;xx<256;xx++){
    const l=h[y*256+((xx+255)&255)],rr=h[y*256+((xx+1)&255)],u=h[((y+255)&255)*256+xx],d=h[((y+1)&255)*256+xx];
    const nx=(l-rr)*2.2,ny=(u-d)*2.2,nz=1,len=Math.hypot(nx,ny,nz),i=(y*256+xx)*4;
    id.data[i]=(nx/len*.5+.5)*255;id.data[i+1]=(ny/len*.5+.5)*255;id.data[i+2]=(nz/len*.5+.5)*255;id.data[i+3]=255;
  }
  x.putImageData(id,0,0);
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(60,60);return t;
}
export function buildFleuve(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  const r=rng(55);
  // berge (herbe + sable)
  ground(g,1400,60,T.grassTexture,1,0,22);
  const sand=new THREE.Mesh(new THREE.PlaneGeometry(1400,10),new THREE.MeshStandardMaterial({color:0xd9c08a,roughness:1}));
  sand.rotation.x=-Math.PI/2;sand.position.set(0,.015,-3.5);sand.receiveShadow=true;g.add(sand);
  patch(g,0,4,60,5,T.dirtTexture);
  // eau : normal map animée, reflets du ciel
  const nm=waterNormal();
  const wm=new THREE.MeshPhysicalMaterial({color:0x1d5f78,roughness:.06,metalness:0,normalMap:nm,normalScale:new THREE.Vector2(.55,.55),envMapIntensity:1.6,clearcoat:.6,clearcoatRoughness:.08,transparent:true,opacity:.96});
  const water=new THREE.Mesh(new THREE.PlaneGeometry(1400,520),wm);water.rotation.x=-Math.PI/2;water.position.set(0,-.12,-270);g.add(water);
  // ponton en bois
  const plank=new THREE.MeshStandardMaterial({map:T.woodTexture('#8a6a45'),roughness:.9});
  for(let i=0;i<20;i++)box(g,2.4,.1,.42,plank,6,.55,-4.5-i*.46);
  [-1,1].forEach(s=>{for(let i=0;i<8;i++){cyl(g,.09,.09,1.6,std('#5a4128',.95),6+s*1.3,.1,-4.5-i*1.2,8)}});
  boxes.push({x0:4.6,x1:7.4,z0:-14,z1:-4});
  colliders.push({x:6,z:-14,r:.2});
  // pirogue : coque creusée (demi-cylindre allongé)
  const hullG=new THREE.CylinderGeometry(.55,.4,5.2,16,1,true,0,Math.PI);hullG.rotateZ(Math.PI/2);hullG.rotateY(Math.PI/2);
  const hull=new THREE.Mesh(hullG,new THREE.MeshStandardMaterial({map:T.woodTexture('#7a5230'),roughness:.9,side:THREE.DoubleSide}));
  hull.rotation.set(0,Math.PI/2,Math.PI);hull.position.set(-5.5,.1,-4.6);hull.scale.set(1,.7,1);hull.castShadow=true;g.add(hull);
  const hull2=hull.clone();hull2.position.set(-9.5,.1,-6.5);hull2.rotation.y=Math.PI/2+.5;g.add(hull2);
  // filets séchant sur des perches
  [[-3,3],[-6,3]].forEach(p=>{cyl(g,.05,.05,2.4,std('#5a4128'),p[0],1.2,p[1],6)});
  box(g,3.2,.04,.04,std('#5a4128'),-4.5,2.2,3);
  const net=new THREE.Mesh(new THREE.PlaneGeometry(3,1.4),new THREE.MeshStandardMaterial({color:0x7d8a6a,roughness:1,transparent:true,opacity:.7,side:THREE.DoubleSide,wireframe:false}));net.position.set(-4.5,1.5,3);g.add(net);
  // végétation : palmiers, roseaux, buissons
  [[-18,5],[-14,8],[-22,9],[16,6],[20,9],[24,5],[14,11],[-16,12],[22,12]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.12,false,null,colliders,i%3!==1));
  for(let i=0;i<10;i++){const b=bush(i+11,.7+r()*.6);b.position.set(-24+r()*48,0,-1+r()*8);g.add(b)}
  const reedGeo=new THREE.ConeGeometry(.03,1.3,4);reedGeo.translate(0,.65,0);
  const reeds=new THREE.InstancedMesh(reedGeo,std('#6f8a3e',.9),1400),m4=new THREE.Matrix4();
  for(let i=0;i<1400;i++){const x=-30+r()*60,z=-8.5+r()*4;m4.compose(new THREE.Vector3(x,0,z),new THREE.Quaternion().setFromEuler(new THREE.Euler((r()-.5)*.3,0,(r()-.5)*.3)),new THREE.Vector3(1,.7+r()*.8,1));reeds.setMatrixAt(i,m4)}
  g.add(reeds);
  const grass=grassField({area:[-34,34,-1,14],count:9000,seed:6,exclude:(x,z)=>z>2&&z<6.5&&Math.abs(x)<30||z<-1.5});g.add(grass);
  // rive opposée lointaine : Brazzaville
  for(let i=0;i<26;i++){
    const x=-120+i*9+r()*4,h=6+r()*5;
    const t=new THREE.Mesh(new THREE.IcosahedronGeometry(5+r()*3,1),new THREE.MeshStandardMaterial({color:0x2f6a3c,roughness:1,flatShading:true}));t.position.set(x,h*.45,-175+r()*10);t.scale.y=.8;g.add(t);
  }
  const skyline=[];for(let i=0;i<9;i++){const w=6+r()*5,h=14+r()*26;const b=box(g,w,h,6,std('#b9c6d0',.8),-50+i*13,h/2,-170);skyline.push(b)}
  // soleil bas sur l'eau : bâton de repère
  const tick=x=>{wm.normalMap.offset.x=(x*.012)%1;wm.normalMap.offset.y=(x*.007)%1};
  exitSign(g,-3.8,10.4);colliders.push({x:-3.8,z:10.4,r:.3});
  return {group:g,colliders,boxes,bounds:{x0:-30,x1:30,z0:-13,z1:13},update(dt,t){tick(t);grass.userData.update(t)},dyn:{},exit:{x:0,z:9}};
}

// ---------------------------------------------------------------- CENTRE DE SANTÉ
export function buildSante(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  const r=rng(61);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,-2,30,18,T.dirtTexture);patch(g,0,8,6,14,T.dirtTexture);
  const wall=new THREE.MeshStandardMaterial({map:T.plasterTexture('#f4efe6'),roughness:.95});
  const roofM=new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.5,metalness:.4,color:0x4a78a8});
  // bâtiment principal
  box(g,20,3.6,7,wall,0,1.8,-10);
  gableRoof(g,0,3.6,-10,20,7,1.8,roofM,std('#f4efe6'),.8);
  box(g,20.4,.3,.4,std('#e0d6c4'),0,.15,-6.3);
  // véranda
  for(let i=0;i<7;i++)cyl(g,.13,.13,3.0,std('#f7f2e8'),-9+i*3,1.5,-5.2,10);
  box(g,20.4,.22,2.2,std('#cfc6b2'),0,3.1,-5.6);
  box(g,20.4,.1,2.4,roofM,0,3.3,-5.5);
  box(g,20.4,.2,2.2,std('#d9d0bc'),0,.1,-5.6);
  // fenêtres et portes
  [-7.5,-4,4,7.5].forEach(x=>{box(g,1.6,1.3,.1,std('#cfe9f7',.15,{emissive:0x5ba7d6,emissiveIntensity:.3}),x,1.9,-6.45);box(g,1.8,.1,.15,std('#f2f2f2'),x,1.2,-6.42)});
  box(g,2.4,2.5,.12,std('#6fa4c8',.7),0,1.25,-6.45);box(g,.1,2.5,.14,std('#fff'),0,1.25,-6.4);
  // croix rouge
  const panel=sign('CENTRE DE SANTÉ','',7.5,1.0,'#ffffff','#c0392b');panel.position.set(0,3.9,-6.4);g.add(panel);
  const cross=new THREE.Group();box(cross,.9,.28,.1,std('#c0392b',.6),0,0,0);box(cross,.28,.9,.1,std('#c0392b',.6),0,0,0);cross.position.set(-5.2,3.9,-6.35);g.add(cross);
  const cross2=cross.clone();cross2.position.x=5.2;g.add(cross2);
  boxes.push({x0:-10.5,x1:10.5,z0:-13.8,z1:-4.6});
  // bancs de salle d'attente
  for(let i=0;i<3;i++){const x=-7+i*3.8;box(g,2.2,.1,.5,std('#7a4a26'),x,.5,-4.8);box(g,.1,.5,.4,std('#4a2f1b'),x-1,.25,-4.8);box(g,.1,.5,.4,std('#4a2f1b'),x+1,.25,-4.8);colliders.push({x:x,z:-4.8,r:1})}
  // ambulance
  const amb=new THREE.Group();amb.position.set(12,0,-2);amb.rotation.y=-.5;
  box(amb,2.2,1.9,4.2,std('#f2f2f2',.4),0,1.25,0);box(amb,2.1,1.2,1.4,std('#f2f2f2',.4),0,.95,2.6);box(amb,1.9,.7,.05,std('#9fc6dd',.1),0,1.5,3.32);
  box(amb,2.22,.3,4.22,std('#c0392b',.6),0,.85,0);
  [[-1,1.4],[1,1.4],[-1,-1.4],[1,-1.4]].forEach(p=>cyl(amb,.38,.38,.3,std('#222',.9),p[0]*1.05,.38,p[1],16).rotation.z=Math.PI/2);
  const ac=new THREE.Group();box(ac,.7,.2,.05,std('#c0392b'),0,0,0);box(ac,.2,.7,.05,std('#c0392b'),0,0,0);ac.position.set(0,1.7,2.1);amb.add(ac);
  g.add(amb);colliders.push({x:12,z:-2,r:2.4},{x:11,z:-.5,r:1.4},{x:13,z:-3.8,r:1.4});
  // affiche d'hygiène
  const post=cyl(g,.06,.06,2.6,std('#555',.5,{metalness:.4}),-12,1.3,2,8);
  const hyg=sign('LAVE-TOI LES MAINS','avec du savon',3.4,1.9,'#2e86de','#fff');hyg.position.set(-12,2.8,2.05);g.add(hyg);colliders.push({x:-12,z:2,r:.4});
  // jardin, arbres
  [[-16,-4],[16,-6],[-15,6],[15,5],[-8,10],[8,11]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.12,false,null,colliders,i%2===1));
  for(let i=0;i<14;i++){const b=bush(i+31,.6+r()*.5);const x=-18+r()*36,z=-14+r()*24;if(Math.abs(x)<10&&z<2)continue;b.position.set(x,0,z);g.add(b)}
  const grass=grassField({area:[-30,30,-14,14],count:14000,seed:12,exclude:(x,z)=>Math.abs(x)<15&&z>-13&&z<5||Math.abs(x)<3.5&&z>4||Math.abs(x-12)<3&&Math.abs(z+2)<3.6});g.add(grass);
  exitSign(g,-3.8,10);colliders.push({x:-3.8,z:10,r:.3});
  return {group:g,colliders,boxes,bounds:{x0:-24,x1:24,z0:-13,z1:12.5},update(dt,t){grass.userData.update(t)},dyn:{},exit:{x:0,z:9}};
}

// ---------------------------------------------------------------- UNIVERSITÉ
export function buildUniv(){
  const g=new THREE.Group(),colliders=[],boxes=[];
  const r=rng(71);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  patch(g,0,-4,5,22,T.dirtTexture);patch(g,0,6,5,16,T.dirtTexture);
  const stone=new THREE.MeshStandardMaterial({map:T.plasterTexture('#efe8da'),roughness:.9});
  const dark=std('#cfc6b2',.9);
  // grand bâtiment à colonnes
  box(g,30,7.5,9,stone,0,3.75,-14);
  box(g,30.8,.5,9.8,dark,0,7.7,-14);
  // marches (de bas en haut vers l'entrée)
  for(let i=0;i<5;i++)box(g,14,.2,.6,dark,0,.1+i*.2,-7.0-i*.5);
  // colonnes
  for(let i=0;i<8;i++)cyl(g,.45,.5,6.2,stone,-8.4+i*2.4,3.4,-9.4,18);
  box(g,20.6,.9,1.6,dark,0,6.65,-9.4);
  // fronton triangulaire
  const sh=new THREE.Shape();sh.moveTo(-10.4,0);sh.lineTo(10.4,0);sh.lineTo(0,2.4);sh.closePath();
  const fr=new THREE.Mesh(new THREE.ExtrudeGeometry(sh,{depth:.6,bevelEnabled:false}),stone);fr.position.set(0,7.1,-10);fr.castShadow=true;g.add(fr);
  const nm=sign('UNIVERSITÉ','Faculté de droit',9,1.2,'#0b3a6b','#ffffff');nm.position.set(0,6.6,-8.55);g.add(nm);
  // portes et fenêtres
  box(g,3,3.6,.15,std('#5a3a22',.7),0,1.8,-9.45);
  [-11,-7,7,11].forEach(x=>{box(g,1.6,2.4,.12,std('#cfe9f7',.15,{emissive:0x5ba7d6,emissiveIntensity:.3}),x,3.2,-9.45);box(g,1.9,.14,.2,dark,x,1.95,-9.4)});
  boxes.push({x0:-15,x1:15,z0:-18.6,z1:-9});
  // statue : la balance de la justice
  const gold=new THREE.MeshStandardMaterial({color:0xd4a928,roughness:.28,metalness:.85});
  box(g,2.2,.5,2.2,dark,0,.25,2.5);box(g,1.4,1.1,1.4,stone,0,1.05,2.5);
  cyl(g,.08,.1,2.4,gold,0,3.1,2.5,12);
  box(g,3.0,.08,.08,gold,0,4.25,2.5);
  [-1.45,1.45].forEach(x=>{
    const pan=new THREE.Mesh(new THREE.CylinderGeometry(.55,.15,.14,18),gold);pan.position.set(x,3.15,2.5);g.add(pan);
    [[-.4,0],[.4,0],[0,.4],[0,-.4]].forEach(o=>{const l=cyl(g,.01,.01,1.1,gold,x+o[0]*.7,3.7,2.5+o[1]*.7,4)});
  });
  colliders.push({x:0,z:2.5,r:1.4});
  // mâts de drapeaux
  [-7,7].forEach(x=>{cyl(g,.05,.07,7,std('#999',.4,{metalness:.5}),x,3.5,-4,8);const fl=new THREE.Mesh(new THREE.PlaneGeometry(1.6,1.05),new THREE.MeshStandardMaterial({map:flagTexture(),side:THREE.DoubleSide,roughness:.8}));fl.position.set(x+.85,6.3,-4);g.add(fl);colliders.push({x:x,z:-4,r:.3})});
  // bancs et pelouse
  for(let i=0;i<4;i++){const x=[-12,-12,12,12][i],z=[-3,3,-3,3][i];box(g,2,.1,.5,std('#7a4a26'),x,.5,z);box(g,.1,.5,.4,std('#4a2f1b'),x-.9,.25,z);box(g,.1,.5,.4,std('#4a2f1b'),x+.9,.25,z);colliders.push({x:x,z:z,r:1})}
  [[-20,-6],[20,-6],[-19,6],[19,7],[-8,11],[8,11],[-24,-1],[24,0]].forEach((p,i)=>tree(g,p[0],p[1],1+(i%3)*.12,false,null,colliders,i%2===0));
  for(let i=0;i<14;i++){const b=bush(i+51,.6+r()*.4);const x=-22+r()*44,z=-8+r()*20;if(Math.abs(x)<4)continue;b.position.set(x,0,z);g.add(b)}
  const grass=grassField({area:[-34,34,-10,16],count:16000,seed:14,exclude:(x,z)=>Math.abs(x)<3.2&&z>-12||z<-8.6&&Math.abs(x)<16});g.add(grass);
  exitSign(g,-3.8,10.4);colliders.push({x:-3.8,z:10.4,r:.3});
  return {group:g,colliders,boxes,bounds:{x0:-28,x1:28,z0:-8.2,z1:12.5},update(dt,t){grass.userData.update(t)},dyn:{},exit:{x:0,z:9}};
}
