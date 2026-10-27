import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng} from './world.js';
import {leafyTree,palm,grassField,bush} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';

// Arène de mission : un grand espace dégagé où flottent les réponses, selon la matière.
const THEMES={
  fr:{titre:'JARDIN DES MOTS',sous:'Lettres, mots et phrases',sol:0x4f8a3a,dalle:0xe8dcc0,accent:0xe0a526,sky:{elev:42,azim:200},pil:'#c9a15a'},
  ma:{titre:'PLACE DES NOMBRES',sous:'Compter, mesurer, calculer',sol:0x6a7a86,dalle:0xd9dde2,accent:0x2e86de,sky:{elev:52,azim:170},pil:'#9aa7b3'},
  sc:{titre:'CLAIRIÈRE DES DÉCOUVERTES',sous:'Observer et comprendre',sol:0x3f8a4a,dalle:0xcfe6c4,accent:0x27ae60,sky:{elev:46,azim:210},pil:'#7a9a6a'},
  ev:{titre:'CLAIRIÈRE DES DÉCOUVERTES',sous:'Observer et comprendre',sol:0x3f8a4a,dalle:0xcfe6c4,accent:0x27ae60,sky:{elev:46,azim:210},pil:'#7a9a6a'},
  hg:{titre:'CARREFOUR DU SAVOIR',sous:'Histoire, géographie, civisme',sol:0x8a7a4a,dalle:0xe6d9b8,accent:0xc0392b,sky:{elev:36,azim:230},pil:'#b08a5a'},
  or:{titre:'CARREFOUR DU SAVOIR',sous:'Histoire, géographie, civisme',sol:0x8a7a4a,dalle:0xe6d9b8,accent:0xc0392b,sky:{elev:36,azim:230},pil:'#b08a5a'}
};
export function buildArene(matiere){
  const th=THEMES[matiere]||THEMES.fr;
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(77);
  ground(g,1400,1400,T.grassTexture,1,0,0);
  const sol=new THREE.Mesh(new THREE.CircleGeometry(26,48),new THREE.MeshStandardMaterial({color:th.sol,roughness:1}));sol.rotation.x=-Math.PI/2;sol.position.y=.012;sol.receiveShadow=true;g.add(sol);
  // grande dalle centrale et cercle lumineux
  const dalle=new THREE.Mesh(new THREE.CircleGeometry(15,56),new THREE.MeshStandardMaterial({map:T.plasterTexture('#efe8da'),color:th.dalle,roughness:.85}));dalle.rotation.x=-Math.PI/2;dalle.position.y=.02;dalle.receiveShadow=true;g.add(dalle);
  const anneau=new THREE.Mesh(new THREE.RingGeometry(14.4,15,64),new THREE.MeshBasicMaterial({color:th.accent,transparent:true,opacity:.7}));anneau.rotation.x=-Math.PI/2;anneau.position.y=.03;g.add(anneau);
  // piliers
  for(let i=0;i<14;i++){const a=i/14*Math.PI*2,x=Math.cos(a)*17.5,z=Math.sin(a)*17.5;
    cyl(g,.55,.65,4.2,std(th.pil,.85),x,2.1,z,12);cyl(g,.8,.8,.35,std('#efe8da',.8),x,4.35,z,12);colliders.push({x:x,z:z,r:.8})}
  // arbres au loin
  for(let i=0;i<22;i++){const a=r()*6.28,d=22+r()*10;const x=Math.cos(a)*d,z=Math.sin(a)*d;
    const t=i%3===0?palm(i+5):leafyTree({kind:i%2?'mango':'leafy',seed:i+30,fruits:false,trunk:3.2+r()*1.4});t.position.set(x,0,z);t.scale.setScalar(i%3===0?1:1.2+r()*.4);g.add(t);colliders.push({x:x,z:z,r:.7})}
  // panneau de la zone, derrière les réponses
  const s=sign(th.titre,th.sous,8,1.3,'#1a3a5f','#fff');s.position.set(0,5.6,-13.5);g.add(s);cyl(g,.12,.14,5.6,std('#5a3a22'),-3.6,2.8,-13.45,8);cyl(g,.12,.14,5.6,std('#5a3a22'),3.6,2.8,-13.45,8);
  // bulles de lumière flottantes
  const orbs=[];for(let i=0;i<16;i++){const o=new THREE.Mesh(new THREE.SphereGeometry(.18,10,8),new THREE.MeshBasicMaterial({color:th.accent,transparent:true,opacity:.7}));
    o.position.set((r()-.5)*28,2+r()*5,(r()-.5)*24);o.userData.p=r()*6;g.add(o);orbs.push(o)}
  const grass=grassField({area:[-30,30,-26,26],count:5000,seed:61,exclude:(x,z)=>Math.hypot(x,z)<15.5});g.add(grass);
  return {group:g,colliders,boxes,dyn:{},exit:{x:0,z:9},bounds:{x0:-15,x1:15,z0:-12.5,z1:12.5},sky:th.sky,
    update(dt,t){grass.userData.update(t);orbs.forEach(o=>{o.position.y+=Math.sin(t*1.2+o.userData.p)*.004;o.material.opacity=.45+.3*Math.sin(t*2+o.userData.p)})}};
}
