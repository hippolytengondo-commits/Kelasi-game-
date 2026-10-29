// Immeubles des institutions dans les quartiers de la ville : hauts, colorés et bien visibles de loin.
// Chaque mission d'institution (parlement, mairie, tribunal, police, université…) se joue dans son propre immeuble.
import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl} from './world.js';
import {MODELES} from './reperes.js';

const M=(c,r)=>std(c,r===undefined?.85:r);
const W=5.8,D=4.4;

// h : hauteur · mur · toit : coiffe · bg : couleur de l'enseigne
const CONFIG={
  parlement:{h:11,mur:'#e8dcc0',toit:'dome',bg:'#1f3c88',col:true},
  th_mairie:{h:9,mur:'#f2e3b5',toit:'horloge',bg:'#b8860b'},
  th_tribunal:{h:8,mur:'#d9d0bd',toit:'fronton',bg:'#4a3b2a',col:true},
  th_ceni:{h:7,mur:'#cfe3f7',toit:'plat',bg:'#2e86de'},
  th_ambassade:{h:8,mur:'#f7e3df',toit:'mats',bg:'#c0392b'},
  pompiers:{h:8,mur:'#d9534f',toit:'tour',bg:'#7b241c'},
  poste:{h:6.5,mur:'#f4d03f',toit:'plat',bg:'#1f5f9e'},
  aeroport:{h:6,mur:'#e9eef2',toit:'controle',bg:'#1c3b5a'},
  gare:{h:7,mur:'#e8c48a',toit:'horloge',bg:'#8a3b12'},
  musee:{h:8.5,mur:'#cdbb97',toit:'fronton',bg:'#6b3f2a',col:true},
  observatoire:{h:8,mur:'#dfe5ee',toit:'dome',bg:'#2c3e50'},
  stade:{h:7,mur:'#c9d8c5',toit:'plat',bg:'#1f7a4d'},
  port:{h:7,mur:'#cfd8dc',toit:'grue',bg:'#1f5f9e'},
  th_police:null,univ:null,sante:null,biblio:null
};
const MODELE_REPERE={th_police:'police',univ:'univ',sante:'sante',biblio:'biblio'};

function banniere(g,h,e,bg){
  const nm=e.name.length>22?44:e.name.length>17?52:e.name.length>13?60:70;
  const mk=()=>new THREE.Mesh(new THREE.PlaneGeometry(5.6,1.5),new THREE.MeshStandardMaterial({map:T.textBoard([{t:e.icon+' '+e.name,s:nm,y:.5}],1024,274,bg,'#ffffff'),roughness:.6}));
  const a=mk();a.position.set(0,h+1.4,D/2-.2);g.add(a);
  const b=mk();b.rotation.y=Math.PI;b.position.set(0,h+1.4,D/2-.3);g.add(b);
  [-2.5,2.5].forEach(x=>box(g,.14,1.4,.14,M('#333'),x,h+.7,D/2-.25));
  // mât et drapeau : repère visible de loin
  cyl(g,.06,.07,h+5,M('#999'),-W/2+.3,(h+5)/2,-D/2+.4,6);
  const f=new THREE.Mesh(new THREE.PlaneGeometry(1.4,.9),new THREE.MeshBasicMaterial({color:new THREE.Color(bg),side:THREE.DoubleSide}));f.position.set(-W/2+1,h+4.4,-D/2+.4);g.add(f);
}

// renvoie true si le lieu a un immeuble d'institution
export function grandBatiment(lg,e){
  const rp=MODELE_REPERE[e.id];
  if(rp){const m=new THREE.Group();MODELES[rp](m,{compact:true});m.scale.set(.58,1.2,.62);lg.add(m);return true}
  const c=CONFIG[e.id];if(!c)return false;
  const h=c.h;
  box(lg,W,h,D,M(c.mur),0,h/2,0);box(lg,W+.4,.4,D+.4,M('#8d8d85'),0,h+.2,0);
  for(let r=0;r<Math.floor((h-2)/2.4);r++)for(const x of [-2,0,2]){if(r===0&&x===0)continue;box(lg,.9,1.1,.1,std('#cfeaff',.2,{emissive:0x4da6d9,emissiveIntensity:.25}),x,1.8+r*2.4,D/2+.03)}
  box(lg,1.4,2.3,.14,M('#4a2f1b',.8),0,1.15,D/2+.04);box(lg,2.4,.2,1,M('#bdbdbd'),0,2.6,D/2+.5);
  if(c.col)[-2.4,-.8,.8,2.4].forEach(x=>cyl(lg,.2,.24,h-1.5,M('#f1ede2'),x,(h-1.5)/2,D/2+.9,10));
  const t=c.toit;
  if(t==='dome'){const d=new THREE.Mesh(new THREE.SphereGeometry(2,18,10,0,Math.PI*2,0,Math.PI/2),M('#2b6aa3',.45));d.position.set(0,h+.4,0);lg.add(d);box(lg,.2,1.4,.2,M('#999'),0,h+3,0)}
  else if(t==='horloge'){box(lg,2,3.2,2,M('#a07a50'),0,h+1.8,0);const cl=new THREE.Mesh(new THREE.CircleGeometry(.7,20),new THREE.MeshBasicMaterial({color:0xf8f4e6}));cl.position.set(0,h+2.3,1.02);lg.add(cl);box(lg,2.4,.4,2.4,M('#7a4a26'),0,h+3.6,0)}
  else if(t==='fronton'){const fr=new THREE.Mesh(new THREE.ConeGeometry(3.4,1.4,3),M('#e8e2d3'));fr.rotation.y=Math.PI/2;fr.scale.set(1,1,.4);fr.position.set(0,h+1.1,D/2+.5);lg.add(fr)}
  else if(t==='mats'){[-2.4,0,2.4].forEach((x,i)=>{cyl(lg,.05,.06,3,M('#aaa'),x,h+1.5,D/2-.4,6);box(lg,.9,.5,.04,M(['#c0392b','#f1c40f','#1f5f9e'][i]),x+.5,h+2.6,D/2-.4)})}
  else if(t==='tour'){box(lg,1.6,4.5,1.6,M('#a93226'),W/2-1,h+2.2,-D/2+1);box(lg,2,.4,2,M('#7b241c'),W/2-1,h+4.6,-D/2+1)}
  else if(t==='controle'){cyl(lg,.5,.7,6,M('#d5dde0'),W/2-.9,h+3,-D/2+.9,12);box(lg,1.8,1.1,1.8,std('#9fd6ff',.2,{transparent:true,opacity:.6}),W/2-.9,h+6.4,-D/2+.9)}
  else if(t==='grue'){box(lg,.3,5,.3,M('#e0a526'),-W/2+.5,h+2.5,0);box(lg,4.6,.3,.3,M('#e0a526'),-W/2+2.5,h+5,0);box(lg,.08,2,.08,M('#333'),-W/2+4.4,h+4,0)}
  banniere(lg,h+(t==='dome'?0:0)+(t==='horloge'?3.6:0)*0,e,c.bg);
  return true;
}
