import * as THREE from 'three';

// Panneaux publicitaires LEXOTHÈQUE RDC (bibliothèque juridique numérique congolaise et OHADA) :
// affichés dans les quartiers et dans quelques lieux/missions pour faire connaître l'autre produit de LEXARIS ACADÉMIE.
const RATIO=970/325;
let tex=null,mat=null,cadreM=null,poteauM=null,geoCache={};
function ressources(){
  if(!tex){
    tex=new THREE.TextureLoader().load('img/lexotheque.jpg');tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
    mat=new THREE.MeshBasicMaterial({map:tex});
    cadreM=new THREE.MeshStandardMaterial({color:0x1b3a6b,roughness:.6,metalness:.2});
    poteauM=new THREE.MeshStandardMaterial({color:0x4a4a4a,roughness:.5,metalness:.5});
  }
}
const geo=(k,f)=>geoCache[k]||(geoCache[k]=f());

// largeur l (m) ; le panneau regarde vers +z (à tourner avec rotation.y)
export function panneauLex(l){
  ressources();l=l||4.6;
  const h=l/RATIO,g=new THREE.Group();
  const haut=2.3+h/2;
  const cadre=new THREE.Mesh(geo('c'+l,()=>new THREE.BoxGeometry(l+.28,h+.28,.14)),cadreM);cadre.position.set(0,haut,0);g.add(cadre);
  const face=new THREE.Mesh(geo('f'+l,()=>new THREE.PlaneGeometry(l,h)),mat);face.position.set(0,haut,.08);g.add(face);
  const dos=new THREE.Mesh(geo('f'+l),new THREE.MeshStandardMaterial({color:0xe8eef8,roughness:.8}));dos.position.set(0,haut,-.08);dos.rotation.y=Math.PI;g.add(dos);
  [-l/2+.5,l/2-.5].forEach(x=>{const p=new THREE.Mesh(geo('p',()=>new THREE.CylinderGeometry(.07,.09,2.6,8)),poteauM);p.position.set(x,1.3,0);p.castShadow=true;g.add(p)});
  g.userData.rayon=Math.min(1.8,l/2);
  return g;
}
// enseigne murale (sans poteaux) pour la façade de la LEXOTHÈQUE
export function enseigneLex(l){
  ressources();const h=l/RATIO;
  const m=new THREE.Mesh(new THREE.PlaneGeometry(l,h),mat);return m;
}
