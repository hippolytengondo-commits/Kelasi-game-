// Pièces construites avec les matériaux : chambre, cuisine, étage.
import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,room} from './world.js';

const wall=(mf)=>mf&&mf.murs?new THREE.MeshStandardMaterial({map:T.plasterTexture('#efe3c8'),roughness:.95}):new THREE.MeshStandardMaterial({map:T.earthWallTexture(),roughness:1});
const floor=()=>new THREE.MeshStandardMaterial({map:T.woodTexture('#8d6238'),roughness:.9});
const wood=(c)=>new THREE.MeshStandardMaterial({map:T.woodTexture(c||'#7a4a26')});
const wax=(a,b)=>new THREE.MeshStandardMaterial({map:T.waxTexture(a,b),roughness:.9});

function lit(g,x,z,boxes,col){
  box(g,2.2,.35,1.3,wood('#7a4a26'),x,.3,z);
  box(g,2.1,.2,1.2,std('#f5efe3',.95),x,.55,z);
  box(g,.6,.12,.9,std('#ffffff',.9),x-.7,.7,z);
  box(g,1.4,.08,1.25,wax(col[0],col[1]),x+.3,.66,z);
  boxes.push({x0:x-1.2,x1:x+1.2,z0:z-.75,z1:z+.75});
}
function fenetre(g,x,y,z,mf){
  const wn=new THREE.Mesh(new THREE.PlaneGeometry(1.5,1.3),new THREE.MeshBasicMaterial({color:0xcfeaff}));wn.position.set(x,y,z+.03);g.add(wn);
  box(g,1.7,.1,.1,std('#5a3a22'),x,y+.7,z+.06);
}
function lampe(g,mf,W,H){
  if(!mf||!mf.solaire)return;
  const lp=new THREE.Mesh(new THREE.SphereGeometry(.2,12,10),std('#fff6cf',.4,{emissive:0xfff0b0,emissiveIntensity:1.4}));lp.position.set(0,H-.3,.3);g.add(lp);
  const pl=new THREE.PointLight(0xfff0c0,10,12,1.5);pl.position.set(0,H-.4,.3);g.add(pl);
}

export function buildChambre(mf){
  const g=new THREE.Group(),colliders=[],boxes=[];const W=6.4,D=5,H=3.2;
  room(g,W,D,H,wall(mf),floor());
  lit(g,-1.7,-1.6,boxes,['#2e86de','#f1c40f']);lit(g,.9,-1.6,boxes,['#1f7a4d','#f1f1f1']);
  box(g,.9,2.1,.6,wood('#5a3a22'),2.65,1.05,-2.0);boxes.push({x0:2.2,x1:3.1,z0:-2.3,z1:-1.7});
  box(g,2.4,.03,1.6,new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1}),0,.02,.6);
  fenetre(g,0,1.9,-D/2,mf);lampe(g,mf,W,H);
  return {group:g,colliders,boxes,bounds:{x0:-W/2+.5,x1:W/2-.5,z0:-D/2+.6,z1:D/2-.2},update(){},exit:{x:0,z:D/2-.9}};
}
export function buildCuisine(mf){
  const g=new THREE.Group(),colliders=[],boxes=[];const W=6.4,D=5,H=3.2;
  room(g,W,D,H,wall(mf),floor());
  // foyer
  box(g,1.5,.9,.75,std('#4a4a4a',.7),-1.9,.45,-2.0);
  [-2.3,-1.5].forEach(x=>{cyl(g,.26,.22,.28,std('#2b2b2b',.5,{metalness:.5}),x,1.04,-2.0,12)});
  const braise=new THREE.Mesh(new THREE.BoxGeometry(.5,.05,.4),std('#ff6a1a',.5,{emissive:0xff4a00,emissiveIntensity:1.2}));braise.position.set(-1.9,.93,-1.7);g.add(braise);
  boxes.push({x0:-2.7,x1:-1.1,z0:-2.4,z1:-1.6});
  // table et tabourets
  box(g,1.5,.08,.9,wood('#a87445'),1.5,.85,-1.5);[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(p=>box(g,.08,.85,.08,std('#4a2f1b'),1.5+p[0],.42,-1.5+p[1]));
  boxes.push({x0:.7,x1:2.3,z0:-1.95,z1:-1.05});
  [0.6,2.4].forEach(x=>cyl(g,.22,.2,.4,wood('#8d6238'),x,.2,-.6,10));
  // étagère avec marmites
  box(g,2.4,.08,.4,wood('#6b4226'),.1,1.5,-D/2+.25);box(g,2.4,.08,.4,wood('#6b4226'),.1,2.1,-D/2+.25);
  [-.8,0,.8].forEach((x,i)=>{cyl(g,.18,.22,.3,std(['#c0392b','#e0a526','#2e86de'][i],.6),x+.1,1.69,-D/2+.25,12)});
  // jarre d’eau et sac de riz
  cyl(g,.4,.3,.9,std('#a8603a',.9),2.6,.45,-2.0,16);colliders.push({x:2.6,z:-2.0,r:.45});
  box(g,.6,.5,.4,std('#d9c7a0',.95),-.2,.25,-2.2);boxes.push({x0:-.5,x1:.1,z0:-2.4,z1:-2.0});
  fenetre(g,2.2,1.9,-D/2,mf);lampe(g,mf,W,H);
  return {group:g,colliders,boxes,bounds:{x0:-W/2+.5,x1:W/2-.5,z0:-D/2+.6,z1:D/2-.2},update(){},exit:{x:0,z:D/2-.9}};
}
export function buildEtage(mf){
  const g=new THREE.Group(),colliders=[],boxes=[];const W=9.5,D=6.8,H=3.2;
  room(g,W,D,H,wall(mf),floor());
  lit(g,-3.2,-2.2,boxes,['#c0392b','#f1c40f']);lit(g,-.6,-2.2,boxes,['#8e44ad','#f1f1f1']);
  // bureau et bibliothèque
  box(g,1.6,.08,.8,wood('#a87445'),3.0,.85,-2.5);[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(p=>box(g,.08,.85,.08,std('#4a2f1b'),3.0+p[0],.42,-2.5+p[1]));
  boxes.push({x0:2.2,x1:3.8,z0:-2.9,z1:-2.1});
  box(g,1.6,2.2,.4,wood('#5a3a22'),1.2,1.1,-D/2+.3);boxes.push({x0:.4,x1:2.0,z0:-3.4,z1:-2.8});
  for(let r=0;r<3;r++)for(let k=0;k<6;k++)box(g,.18,.4,.3,std(['#c0392b','#2e86de','#1f7a4d','#e0a526','#8e44ad'][(r+k)%5],.7),.58+k*.24,.5+r*.7,-D/2+.52);
  // grande baie vitrée
  const wn=new THREE.Mesh(new THREE.PlaneGeometry(2.6,1.6),new THREE.MeshBasicMaterial({color:0xcfeaff}));wn.position.set(-4.74,1.9,.2);wn.rotation.y=Math.PI/2;g.add(wn);
  // escalier vers le bas (à droite)
  for(let k=0;k<6;k++)box(g,.9,.14,.34,std('#a87445'),W/2-.6,.1+(5-k)*.0,.2+k*.28,0);
  box(g,.9,.04,1.9,std('#6b4226'),W/2-.6,.02,1.1,0);
  box(g,2.4,.03,1.8,new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1}),-1,.02,1.2);
  lampe(g,mf,W,H);
  return {group:g,colliders,boxes,bounds:{x0:-W/2+.5,x1:W/2-.5,z0:-D/2+.6,z1:D/2-.2},update(){},exit:{x:0,z:D/2-.9}};
}
