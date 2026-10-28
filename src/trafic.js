// Circulation dans la ville : piétons sur les trottoirs et véhicules sur la route principale.
// Plus le joueur construit, plus il y a de monde ; les services publics envoient leurs véhicules (police, ambulance, pompiers).
import * as THREE from 'three';

const std=(c,r,o)=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:r===undefined?.6:r},o||{}));
const mats={};const M=(c,r,o)=>mats[c+(r||'')]||(mats[c+(r||'')]=std(c,r,o));

function voiture(kind,col){
  const g=new THREE.Group();
  const add=(w,h,d,m,x,y,z)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);b.castShadow=true;g.add(b);return b};
  const verre=M('#27384a',.2,{metalness:.3});
  if(kind==='bus'){
    add(2,1.5,5,M(col),0,1.05,0);add(2.02,.6,4.4,verre,0,1.55,0);add(2.04,.2,5.02,M('#f2f2f2'),0,.45,0);
  }else if(kind==='pompiers'){
    add(2,1.6,5.2,M('#d93025'),0,1.1,0);add(1.9,.7,1.5,verre,0,1.6,1.8);add(.2,.2,4.2,M('#cccccc'),0,2.1,-.4);add(.5,.25,.25,new THREE.MeshBasicMaterial({color:0x2e7bff}),0,2.0,1.2);
  }else if(kind==='ambulance'){
    add(1.9,1.5,4.2,M('#ffffff'),0,1.05,0);add(1.8,.6,1.2,verre,0,1.5,1.4);add(.2,.8,.05,M('#c0392b'),0,1.3,-2.12);add(.8,.2,.05,M('#c0392b'),0,1.3,-2.12);add(.5,.2,.25,new THREE.MeshBasicMaterial({color:0xe74c3c}),0,1.9,1.0);
  }else if(kind==='police'){
    add(1.8,.7,4,M('#f2f2f2'),0,.7,0);add(1.6,.6,2,M('#2e4a7a'),0,1.3,-.1);add(1.62,.35,1.7,verre,0,1.4,-.1);add(.35,.2,.25,new THREE.MeshBasicMaterial({color:0x2e7bff}),-.2,1.72,-.1);add(.35,.2,.25,new THREE.MeshBasicMaterial({color:0xe74c3c}),.2,1.72,-.1);
  }else{
    add(1.7,.7,3.8,M(col),0,.7,0);add(1.5,.6,1.9,M(col),0,1.3,-.1);add(1.52,.35,1.6,verre,0,1.38,-.1);
  }
  const ro=M('#1b1b1b',.9);
  [[-1,1.3],[1,1.3],[-1,-1.3],[1,-1.3]].forEach(([sx,z])=>{const w=new THREE.Mesh(new THREE.CylinderGeometry(.38,.38,.3,12),ro);w.rotation.z=Math.PI/2;w.position.set(sx*(kind==='bus'||kind==='pompiers'?1:.88),.38,z*(kind==='bus'||kind==='pompiers'?1.5:1));g.add(w)});
  return g;
}

// opt : {cx, rond, zN (extrémité nord), zS (extrémité sud), nbBat, nbLoc, routeOk, services:[types], makeHuman}
export function creerTrafic(parent,opt){
  const g=new THREE.Group();parent.add(g);
  const agents=[];
  let seed=17;const r=()=>(seed=(seed*16807)%2147483647)/2147483647;
  const {cx,zN,zS}=opt;
  // véhicules : une voie dans chaque sens
  if(opt.routeOk){
    const n=Math.min(8,1+opt.nbBat);
    const spe={police:'police',sante:'ambulance',pompiers:'pompiers'};
    const kinds=[];opt.services.forEach(t=>{if(spe[t])kinds.push(spe[t])});
    const COL=['#e0a526','#2e86de','#c0392b','#27ae60','#8e44ad','#f1f1f1','#d35400'];
    for(let i=0;i<n;i++){
      const kind=kinds[i]||(i%3===2?'bus':'auto');
      const dir=i%2?1:-1;                    // -1 : vers le nord
      const v=voiture(kind,COL[i%COL.length]);
      v.userData={dir:dir,v:(kind==='bus'?3.2:4.2)+r()*1.8,z:zS+(zN-zS)*r()};
      v.rotation.y=dir<0?Math.PI:0;v.position.set(cx+(dir<0?-1.3:1.3),0,v.userData.z);
      g.add(v);agents.push({o:v,veh:true});
    }
  }
  // piétons sur les trottoirs
  const np=opt.nbBat>0?Math.min(12,2+opt.nbBat*2+opt.nbLoc*2):0;
  const PEAUX=['#7a4a2e','#6b4028','#8a5634','#63391f','#916f64','#5a3319'],TEINTES=['#c0392b','#2e86de','#27ae60','#8e44ad','#d35400','#16a085','#e0a526','#2c3e50'];
  for(let i=0;i<np;i++){
    const sx=i%2?'f':'h';
    const h=opt.makeHuman({s:sx,h:sx==='h'?1:.96,skin:PEAUX[i%PEAUX.length],c:TEINTES[(i*3)%TEINTES.length],k:i%3===0?'boubou':'pagne',co:sx==='h'?'courtes':'tresses'});
    const dir=i%2?1:-1,x=cx+(i%4<2?-3.4:3.4);
    h.userData.m={dir:dir,v:1.0+r()*.7,x:x};
    h.position.set(x,0,zS+(zN-zS)*r());h.rotation.y=dir<0?Math.PI:0;
    g.add(h);agents.push({o:h,veh:false});
  }
  return {
    group:g,
    update(dt,cam){
      agents.forEach(a=>{
        if(a.veh){
          const d=a.o.userData;d.z+=d.dir*d.v*dt;
          if(d.z<zN){d.z=zN;d.dir=1;a.o.rotation.y=0;a.o.position.x=cx+1.3}
          else if(d.z>zS){d.z=zS;d.dir=-1;a.o.rotation.y=Math.PI;a.o.position.x=cx-1.3}
          a.o.position.z=d.z;
          if(opt.rond&&Math.abs(d.z)<6.65)a.o.position.x=cx+(d.dir<0?-1:1)*Math.max(1.3,Math.sqrt(6.65*6.65-d.z*d.z));
        }else{
          const m=a.o.userData.m;let z=a.o.position.z+m.dir*m.v*dt;
          if(z<zN){z=zN;m.dir=1}else if(z>zS){z=zS;m.dir=-1}
          a.o.position.z=z;a.o.rotation.y=m.dir<0?Math.PI:0;
          if(a.o.userData.update)a.o.userData.update(dt,{speed:m.v*1.6,cam:cam});
        }
      });
    }
  };
}
