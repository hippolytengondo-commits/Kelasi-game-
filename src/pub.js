import * as THREE from 'three';

// Panneaux publicitaires : LEXOTHÈQUE RDC (bibliothèque juridique numérique congolaise et OHADA, autre produit de
// LEXARIS ACADÉMIE) et Rulem's (coiffure · makeup). Affichés dans les quartiers et dans quelques lieux/missions.
const ANNONCES={
  lex:{img:'img/lexotheque.jpg',ratio:970/325,cadre:0x1b3a6b,dos:0xe8eef8},
  rulems:{img:'img/rulems.jpg',ratio:840/700,cadre:0x2b1d16,dos:0x1a1410}
};
const cache={};
let poteauM=null;
function annonce(k){
  const a=ANNONCES[k]||ANNONCES.lex;
  if(!cache[k]){
    const t=new THREE.TextureLoader().load(a.img);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;
    cache[k]={mat:new THREE.MeshBasicMaterial({map:t}),cadre:new THREE.MeshStandardMaterial({color:a.cadre,roughness:.6,metalness:.2}),dos:new THREE.MeshStandardMaterial({color:a.dos,roughness:.8}),geo:{}};
  }
  if(!poteauM)poteauM=new THREE.MeshStandardMaterial({color:0x4a4a4a,roughness:.5,metalness:.5});
  return {a:a,r:cache[k]};
}
const geo=(r,k,f)=>r.geo[k]||(r.geo[k]=f());

// panneau sur poteaux ; k = 'lex' ou 'rulems' ; l = largeur en mètres. Il regarde vers +z (à tourner avec rotation.y).
export function panneauPub(k,l){
  const {a,r}=annonce(k);l=l||(k==='rulems'?3.4:4.6);
  const h=l/a.ratio,g=new THREE.Group(),haut=2.3+h/2;
  const cadre=new THREE.Mesh(geo(r,'c'+l,()=>new THREE.BoxGeometry(l+.28,h+.28,.14)),r.cadre);cadre.position.set(0,haut,0);g.add(cadre);
  const face=new THREE.Mesh(geo(r,'f'+l,()=>new THREE.PlaneGeometry(l,h)),r.mat);face.position.set(0,haut,.08);g.add(face);
  const dos=new THREE.Mesh(geo(r,'f'+l),r.dos);dos.position.set(0,haut,-.08);dos.rotation.y=Math.PI;g.add(dos);
  [-l/2+.5,l/2-.5].forEach(x=>{const p=new THREE.Mesh(geo(r,'p',()=>new THREE.CylinderGeometry(.07,.09,2.6,8)),poteauM);p.position.set(x,1.3,0);p.castShadow=true;g.add(p)});
  return g;
}
export const panneauLex=(l)=>panneauPub('lex',l);
// enseigne murale LEXOTHÈQUE (sans poteaux) pour la façade
export function enseigneLex(l){
  const {a,r}=annonce('lex');
  return new THREE.Mesh(new THREE.PlaneGeometry(l,l/a.ratio),r.mat);
}
