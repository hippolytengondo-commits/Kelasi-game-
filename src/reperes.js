// Bâtiments repères de la cité : grands immeubles identifiables, répartis dans le village, où l'on entre
// pour faire la mission (comme l'école). Chacun a son architecture, une grande enseigne sur le toit et son véhicule ou son emblème.
import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl} from './world.js';
import {voiture,voitureJoueur,motoJoueur} from './trafic.js';

const W=10,D=7;
const M=(c,r)=>std(c,r===undefined?.85:r);
const verre=()=>new THREE.MeshStandardMaterial({color:0x9fd6ff,transparent:true,opacity:.35,roughness:.1,metalness:.2});

function enseigneToit(g,H,titre,sous,bg,ico){
  const pl=new THREE.Mesh(new THREE.PlaneGeometry(8.4,1.9),new THREE.MeshStandardMaterial({map:T.textBoard([{t:ico+' '+titre,s:92,y:.38},{t:sous,s:44,y:.8,b:false,c:'#ffe9a8'}],1024,232,bg,'#ffffff'),roughness:.6}));
  pl.position.set(0,H+1.7,D/2-.4);g.add(pl);
  [-3.6,3.6].forEach(x=>box(g,.18,1.5,.18,M('#333'),x,H+.75,D/2-.45));
  const dos=pl.clone();dos.rotation.y=Math.PI;dos.position.z=D/2-.5;g.add(dos);
}
function fenetres(g,H,niv,porte){
  for(let r=0;r<niv;r++)for(let i=-3;i<=3;i++){
    if(r===0&&Math.abs(i)<=1)continue;
    box(g,.9,1.1,.1,M('#cfeaff',.2),i*1.3,1.4+r*2.5,D/2+.02);
  }
}
function porte(g,col){
  box(g,2,2.6,.2,M('#4a2f1b',.8),0,1.3,D/2+.05);
  box(g,3.2,.25,1.6,M(col||'#c9c9c9'),0,2.9,D/2+.8);
  [-1.5,1.5].forEach(x=>box(g,.2,2.9,.2,M('#e8e8e8'),x,1.45,D/2+1.5));
  box(g,3,.18,1.6,M('#bdbdbd'),0,.09,D/2+.9);
}
function mat3(mur,H){return box}

export const MODELES={
  police(g,o={}){
    const H=7;box(g,W,H,D,M('#6f8fb5'),0,H/2,0);box(g,W+.6,.5,D+.6,M('#2b3f5c'),0,H+.25,0);
    fenetres(g,H,2);porte(g,'#2b3f5c');box(g,W,.4,.2,M('#2e4a7a'),0,3.9,D/2+.06);
    [-1,1].forEach(s=>{box(g,.7,.4,.5,new THREE.MeshBasicMaterial({color:s<0?0x2e7bff:0xe74c3c}),s*.8,H+.7,0)});
    cyl(g,.1,.12,6,M('#999'),-W/2+.8,3,D/2+1.2,8);box(g,1.6,1,.05,M('#1f5f9e'),-W/2+1.7,5.4,D/2+1.2);
    if(!o.compact){const v1=voiture('police');v1.position.set(-3.8,0,D/2+3.2);v1.rotation.y=Math.PI/2;g.add(v1);
    const v2=voiture('police');v2.position.set(3.8,0,D/2+3.2);v2.rotation.y=-Math.PI/2+.1;g.add(v2)}
    enseigneToit(g,H,'POLICE','Commissariat · Sécurité','#1c2e4a','🚓');
  },
  univ(g,o={}){
    const H=9;box(g,W,H,D,M('#b5532f'),0,H/2,0);box(g,W+.6,.5,D+.6,M('#7a3a22'),0,H+.25,0);
    fenetres(g,H,3);porte(g,'#e8e8e8');
    if(!o.compact){[-3,-1,1,3].forEach(x=>cyl(g,.35,.4,H-1,M('#f1ede2'),x,(H-1)/2+.3,D/2+2.3,12));   // portique
    box(g,8,.5,3,M('#f1ede2'),0,H-.4,D/2+1.8);
    const fr=new THREE.Mesh(new THREE.ConeGeometry(4.6,1.6,3),M('#f1ede2'));fr.rotation.y=Math.PI/2;fr.scale.set(1,1,.35);fr.position.set(0,H+.4,D/2+2.1);fr.rotation.z=0;g.add(fr)}
    box(g,3,3.5,3,M('#8c3f22'),0,H+2,-.5);
    const cl=new THREE.Mesh(new THREE.CircleGeometry(.9,24),new THREE.MeshBasicMaterial({color:0xf8f4e6}));cl.position.set(0,H+2.3,1.02);g.add(cl);
    const d=new THREE.Mesh(new THREE.SphereGeometry(1.7,18,10,0,Math.PI*2,0,Math.PI/2),M('#2b6aa3',.5));d.position.set(0,H+3.7,-.5);g.add(d);
    enseigneToit(g,H+4.6,'UNIVERSITÉ','Savoir et recherche','#7d3c98','🎓');
  },
  sante(g,o={}){
    const H=7;box(g,W,H,D,M('#f2f5f5'),0,H/2,0);box(g,W+.6,.5,D+.6,M('#c9cfd1'),0,H+.25,0);
    fenetres(g,H,2);porte(g,'#d93025');
    box(g,2.8,.8,.1,M('#c0392b'),0,5.2,D/2+.08);box(g,.8,2.8,.1,M('#c0392b'),0,5.2,D/2+.08);
    if(!o.compact){const am=voiture('ambulance');am.position.set(-3.6,0,D/2+3.2);am.rotation.y=Math.PI/2;g.add(am)}
    const h=new THREE.Mesh(new THREE.CircleGeometry(1.8,24),new THREE.MeshStandardMaterial({color:0x444444}));h.rotation.x=-Math.PI/2;h.position.set(2,H+.52,-.5);g.add(h);
    box(g,.25,.02,1.6,M('#fff'),1.6,H+.54,-.5);box(g,.25,.02,1.6,M('#fff'),2.4,H+.54,-.5);box(g,.8,.02,.25,M('#fff'),2,H+.54,-.5);
    enseigneToit(g,H,'CENTRE DE SANTÉ','Soins pour tous','#1f7a4d','🏥');
  },
  biblio(g,o={}){
    const H=7;box(g,W,H,D,M('#efe3c8'),0,H/2,0);box(g,W+.6,.5,D+.6,M('#8c5a2b'),0,H+.25,0);
    fenetres(g,H,2);porte(g,'#8c5a2b');
    if(!o.compact){[-3.6,-1.2,1.2,3.6].forEach(x=>cyl(g,.3,.34,H-1.2,M('#f7f1e1'),x,(H-1.2)/2+.3,D/2+1.9,12));
    box(g,8.6,.4,2.6,M('#f7f1e1'),0,H-.7,D/2+1.6);
    for(let i=0;i<3;i++)box(g,9,.18,1.2-i*.25,M('#cfc6b2'),0,.09+i*.18,D/2+1.2+ (2-i)*.3);
    [[-4.2,'#c0392b'],[-3.7,'#2e86de'],[-3.2,'#e0a526'],[3.2,'#1f7a4d'],[3.7,'#8e44ad'],[4.2,'#d35400']].forEach(([x,c],i)=>box(g,.35,1.3+(i%3)*.2,.9,M(c),x,.9,D/2+4.2))}
    enseigneToit(g,H,'BIBLIOTHÈQUE','Lire · Apprendre · Rêver','#8c5a2b','📚');
  },
  autoecole(g){
    const H=6;box(g,W,H,D,M('#f4d03f'),0,H/2,0);box(g,W+.6,.5,D+.6,M('#1f5f9e'),0,H+.25,0);
    box(g,W,.7,.2,M('#1f5f9e'),0,H*.55,D/2+.06);fenetres(g,H,2);porte(g,'#1f5f9e');
    const v=voiture('auto','#ffffff');v.position.set(-3.6,0,D/2+3.4);v.rotation.y=Math.PI/2;g.add(v);box(g,.6,.3,.25,M('#e0a526'),-3.6,1.8,D/2+3.4);
    [2,3,4,5].forEach(x=>cyl(g,.2,.32,.6,M('#e67e22'),x,.3,D/2+3.2,10));
    box(g,.12,2.4,.12,M('#555'),4.2,1.2,D/2+4.4);box(g,1.1,1.1,.08,M('#c0392b'),4.2,2.7,D/2+4.4);
    enseigneToit(g,H,'AUTO-ÉCOLE','Permis · Conduite · Sécurité','#1f5f9e','🚦');
  },
  concession(g){
    const H=6;box(g,W,H,D,M('#2b2b2b'),0,H/2,0);box(g,W+.6,.5,D+.6,M('#b8860b'),0,H+.25,0);
    const vi=new THREE.Mesh(new THREE.PlaneGeometry(8,3.6),verre());vi.position.set(0,2.2,D/2+.06);g.add(vi);
    box(g,8.2,.2,.2,M('#b8860b'),0,4.1,D/2+.1);porte(g,'#b8860b');
    const sa=voitureJoueur('#c0392b');sa.position.set(-3,.3,D/2+2.2);sa.rotation.y=Math.PI/2+.4;sa.scale.setScalar(.95);g.add(sa);box(g,4.6,.3,3,M('#e0d6b8'),-3,.15,D/2+2.2);
    const sm=motoJoueur('#2e86de');sm.position.set(3.2,.3,D/2+2.2);sm.rotation.y=Math.PI/2-.4;g.add(sm);box(g,3,.3,2,M('#e0d6b8'),3.2,.15,D/2+2.2);
    [-4.6,4.6].forEach(x=>{cyl(g,.06,.06,5,M('#777'),x,2.5,D/2+4.2,6);box(g,1.1,.7,.04,M(x<0?'#e74c3c':'#f1c40f'),x+(x<0?.6:-.6),4.7,D/2+4.2)});
    enseigneToit(g,H,'CONCESSION','Motos · Voitures','#b8860b','🏍');
  }
};

// emplacements dans le village (portes tournées vers la grand-place) ; ry 0 : porte au sud (+z), ry π : porte au nord (-z)
export const REPERES=[
  {id:'concession',x:-22.2,z:9.6,ry:Math.PI,interieur:'concession',nom:'la Concession',coul:'#b8860b'},
  {id:'autoecole',x:8.2,z:9.6,ry:Math.PI,interieur:'autoecole',nom:'l’Auto-école',coul:'#1f5f9e'}
];

export function construireReperes(w){
  const g=new THREE.Group();w.group.add(g);
  const portes=[];
  REPERES.forEach(r=>{
    const b=new THREE.Group();b.position.set(r.x,0,r.z);b.rotation.y=r.ry;g.add(b);
    MODELES[r.id==='police'?'police':r.id==='univ'?'univ':r.id==='sante'?'sante':r.id==='biblio'?'biblio':r.id](b);
    const cs=Math.cos(r.ry),sn=Math.sin(r.ry);
    // emprise (le véhicule garé devant reste traversable)
    w.boxes.push({x0:r.x-W/2,x1:r.x+W/2,z0:r.z-D/2,z1:r.z+D/2});
    const dz=D/2+1.4;
    portes.push(Object.assign({},r,{px:r.x+dz*sn,pz:r.z+dz*cs}));
  });
  return {portes};
}
