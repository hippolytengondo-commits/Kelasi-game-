// Grand panneau publicitaire numérique en portique au-dessus de la route du village vers les quartiers de missions.
// Il fait défiler les affiches de tous les sponsors de src/sponsors.js, une nouvelle affiche toutes les 10 secondes.
import * as THREE from 'three';
import {SPONSORS} from './sponsors.js';
import {std,box,cyl} from './world.js';

const DUREE=10,FONDU=.9;

export function panneauNumerique(g,cols,x,z){
  const cv=document.createElement('canvas');cv.width=1024;cv.height=384;const ctx=cv.getContext('2d');
  const tex=new THREE.CanvasTexture(cv);tex.colorSpace=THREE.SRGBColorSpace;
  const imgs=SPONSORS.map(s=>{const i=new Image();i.src=s.img;return i});
  const mat=new THREE.MeshBasicMaterial({map:tex,toneMapped:false});
  const L=9.6,H=3.6,yc=10.1;
  // structure : deux pylônes, une poutre, le cadre de l'écran
  [-5.7,5.7].forEach(dx=>{cyl(g,.3,.4,9,std('#3a3f46',.5,{metalness:.5}),x+dx,4.5,z,10);cols.push({x:x+dx,z:z,r:.6})});
  box(g,12.4,.6,.8,std('#3a3f46',.5,{metalness:.5}),x,8.7,z);
  box(g,L+.5,H+.5,.5,std('#14181d',.6),x,yc,z);
  box(g,L+.5,.12,.56,new THREE.MeshBasicMaterial({color:0x35e0ff}),x,yc+H/2+.3,z);box(g,L+.5,.12,.56,new THREE.MeshBasicMaterial({color:0x35e0ff}),x,yc-H/2-.3,z);
  // deux faces : celle du village, et celle de la ville
  [[-1,Math.PI],[1,0]].forEach(([s,ry])=>{
    const e=new THREE.Mesh(new THREE.PlaneGeometry(L,H),mat);e.position.set(x,yc,z+s*.27);e.rotation.y=ry;g.add(e);
  });
  function afficher(i,alpha,prec){
    const W=cv.width,Hh=cv.height;
    ctx.fillStyle='#0b1018';ctx.fillRect(0,0,W,Hh);
    const poser=(k,a)=>{
      if(a<=0)return;const s=SPONSORS[k],im=imgs[k];ctx.globalAlpha=a;
      if(im&&im.complete&&im.naturalWidth){
        const r=im.naturalWidth/im.naturalHeight;let w=W-70,h=w/r;if(h>Hh-70){h=Hh-70;w=h*r}
        ctx.fillStyle='#fff';ctx.fillRect((W-w)/2-8,(Hh-h)/2-8,w+16,h+16);
        ctx.drawImage(im,(W-w)/2,(Hh-h)/2,w,h);
      }else{ctx.fillStyle='#fff';ctx.font='bold 70px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(s.nom,W/2,Hh/2)}
      ctx.globalAlpha=1;
    };
    if(prec>=0)poser(prec,1-alpha);
    poser(i,prec>=0?alpha:1);
    ctx.globalAlpha=1;ctx.fillStyle='rgba(255,255,255,.55)';ctx.font='bold 22px Arial';ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.fillText('PUBLICITÉ',22,Hh-14);
    tex.needsUpdate=true;
  }
  let cur=-1,fini=false;
  afficher(0,1,-1);
  return {
    update(t){
      const n=SPONSORS.length;if(!n)return;
      const k=Math.floor(t/DUREE)%n,dt=t%DUREE;
      if(k!==cur){cur=k;fini=false}
      if(dt<FONDU){afficher(k,dt/FONDU,(k+n-1)%n)}
      else if(!fini){afficher(k,1,-1);fini=true}
    }
  };
}
