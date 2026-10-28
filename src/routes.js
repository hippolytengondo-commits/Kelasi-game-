import * as THREE from 'three';
import * as T from './textures.js';

// Routes bitumées : le joueur transforme les pistes en terre en routes goudronnées en payant du bitume,
// des pièces et des points de savoir. Les tronçons sont identifiés par un code ('liaison', 'entree', 'anneau0', 'res3', ...).
let asph=null;
export const asphalte=()=>asph||(asph=new THREE.MeshStandardMaterial({map:T.noiseTexture('#3b3c40',.12),roughness:.92,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-3}));
let blanc=null;
const tiret=()=>blanc||(blanc=new THREE.MeshBasicMaterial({color:0xf2f2f2,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-4}));

// tronçon droit nord-sud de x, de z1 à z2, large de lg
export function bitumeDroit(g,x,z1,z2,lg){
  const len=Math.abs(z2-z1),zc=(z1+z2)/2;
  const a=new THREE.Mesh(new THREE.PlaneGeometry(lg,len),asphalte());a.rotation.x=-Math.PI/2;a.position.set(x,.034,zc);a.receiveShadow=true;g.add(a);
  for(let z=Math.min(z1,z2)+2;z<Math.max(z1,z2)-1;z+=4){const t=new THREE.Mesh(new THREE.PlaneGeometry(.18,1.8),tiret());t.rotation.x=-Math.PI/2;t.position.set(x,.036,z);g.add(t)}
}
// anneau de rayon r (route de largeur lg) centré sur (cx,cz)
export function bitumeAnneau(g,cx,cz,r,lg,seg){
  const a=new THREE.Mesh(new THREE.RingGeometry(r-lg/2,r+lg/2,seg),asphalte());a.rotation.x=-Math.PI/2;a.position.set(cx,.034,cz);a.receiveShadow=true;g.add(a);
  const n=Math.max(16,Math.round(r*2.2));
  for(let i=0;i<n;i++){const th=i/n*Math.PI*2,t=new THREE.Mesh(new THREE.PlaneGeometry(.18,1.6),tiret());t.rotation.x=-Math.PI/2;t.rotation.z=-th-Math.PI/2;t.position.set(cx+Math.cos(th)*r,.036,cz+Math.sin(th)*r);g.add(t)}
}
// coût d'un tronçon : i = rang du tronçon (plus loin = plus cher)
export const coutRoute=(type,i)=>{
  if(type==='liaison')return {pieces:30,savoir:40,bitume:6};
  if(type==='entree')return {pieces:50,savoir:60,bitume:8};
  if(type==='anneau')return {pieces:60+30*i,savoir:100+50*i,bitume:10+4*i};
  return {pieces:20+10*i,savoir:30+20*i,bitume:5+i};   // res
};

// rond-point au centre du village : îlot fleuri avec fontaine, route circulaire bitumée
export function rondPoint(g,cx,cz){
  bitumeAnneau(g,cx,cz,6.65,3.5,56);
  const ile=new THREE.Mesh(new THREE.CircleGeometry(4.9,40),new THREE.MeshStandardMaterial({color:0x4f9c3c,roughness:1,polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-5}));
  ile.rotation.x=-Math.PI/2;ile.position.set(cx,.05,cz);g.add(ile);
  const pierre=new THREE.MeshStandardMaterial({color:0xcfc6b2,roughness:.8});
  const bas=new THREE.Mesh(new THREE.CylinderGeometry(1.7,1.9,.5,20),pierre);bas.position.set(cx,.3,cz);g.add(bas);
  const eau=new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.5,.1,20),new THREE.MeshStandardMaterial({color:0x3fa9d9,roughness:.2}));eau.position.set(cx,.58,cz);g.add(eau);
  const col=new THREE.Mesh(new THREE.CylinderGeometry(.18,.25,1.6,10),pierre);col.position.set(cx,1.2,cz);g.add(col);
  const vas=new THREE.Mesh(new THREE.CylinderGeometry(.7,.3,.3,14),pierre);vas.position.set(cx,2.0,cz);g.add(vas);
}
export const COUT_ROND={pieces:120,savoir:200,bitume:12,ciment:6,brique:10};

// trottoirs : dalles légèrement surélevées avec bordure, de chaque côté de la route
let dalle=null,bord=null;
const matDalle=()=>dalle||(dalle=new THREE.MeshStandardMaterial({color:0xc9c4b8,roughness:.95}));
const matBord=()=>bord||(bord=new THREE.MeshStandardMaterial({color:0xe6e2d8,roughness:.9}));
const H_TROTTOIR=.1;
// route droite nord-sud : lg = largeur de la chaussée, tr = largeur du trottoir
export function trottoirsDroit(g,x,z1,z2,lg,tr){
  const len=Math.abs(z2-z1),zc=(z1+z2)/2,w=tr||1.6;
  [-1,1].forEach(s=>{
    const cx=x+s*(lg/2+w/2);
    const d=new THREE.Mesh(new THREE.BoxGeometry(w,H_TROTTOIR,len),matDalle());d.position.set(cx,H_TROTTOIR/2,zc);d.receiveShadow=true;g.add(d);
    const b=new THREE.Mesh(new THREE.BoxGeometry(.16,H_TROTTOIR+.03,len),matBord());b.position.set(x+s*(lg/2+.08),(H_TROTTOIR+.03)/2,zc);g.add(b);
  });
}
// anneau : trottoirs intérieur et extérieur
export function trottoirsAnneau(g,cx,cz,r,lg,tr,seg){
  const w=tr||1.0;
  [[r-lg/2-w,r-lg/2],[r+lg/2,r+lg/2+w]].forEach(([a,b])=>{
    const d=new THREE.Mesh(new THREE.RingGeometry(a,b,seg),matDalle());d.rotation.x=-Math.PI/2;d.position.set(cx,H_TROTTOIR,cz);d.receiveShadow=true;g.add(d);
  });
  [r-lg/2,r+lg/2].forEach(rr=>{
    const m=new THREE.Mesh(new THREE.CylinderGeometry(rr,rr,H_TROTTOIR,seg,1,true),new THREE.MeshStandardMaterial({color:0xe6e2d8,roughness:.9,side:THREE.DoubleSide}));
    m.position.set(cx,H_TROTTOIR/2,cz);g.add(m);
  });
}
