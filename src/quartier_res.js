import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,gableRoof} from './world.js';
import {CX} from './quartiers.js';

// Quartier résidentiel du joueur, au nord du village (du côté opposé à la ville des missions).
// Le joueur y achète des terrains avec ses points de savoir (gagnés en réussissant des missions) puis y construit
// des maisons avec des pièces et des matériaux. Les terrains s'achètent dans l'ordre et deviennent de plus en plus chers.
export const NB_TERRAINS=20;
const PAS=14,Z0=-27,DEMI=5.5;          // pas entre rangées, centre de la 1re rangée, demi-côté d'un terrain
export const prixTerrain=k=>500+100*k*(k+1);
// niveaux de construction d'un terrain : maison, étage, immeuble
export const NIVEAUX=[
  {n:'Maison',ico:'🏠',cout:{pieces:30,brique:14,sable:4,bois:4},d:'Une maison en briques avec un toit en tôle.'},
  {n:'Étage',ico:'🏢',cout:{pieces:50,brique:20,ciment:6,bois:6},d:'Un étage de plus : deux niveaux d’habitation.'},
  {n:'Immeuble',ico:'🏬',cout:{pieces:90,brique:40,ciment:16,fer:10},d:'Un petit immeuble de trois étages avec réservoir d’eau sur le toit.'}
];
const MURS=['#e8c48a','#d98a6a','#9ac5a4','#d9c24a','#8fb4d9','#e0a0b0','#c9a27a','#a8c98f','#e6b25c','#b5a0d0'];
export const posTerrain=k=>{const side=k%2,row=Math.floor(k/2);return {x:CX+(side?12:-12),z:Z0-row*PAS,side:side,ry:side?-Math.PI/2:Math.PI/2}};
export const limiteNord=-(-Z0+Math.ceil(NB_TERRAINS/2)*PAS+10);

const mats={};
const mat=(k,f)=>mats[k]||(mats[k]=f());

function maison(g,niv,k){
  const wall=mat('mur'+k%10,()=>new THREE.MeshStandardMaterial({map:T.plasterTexture(MURS[k%10]),roughness:.9}));
  const tin=mat('tin',()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35}));
  const brique=mat('brique',()=>new THREE.MeshStandardMaterial({map:T.brickTexture([198,108,62]),roughness:.9}));
  const glass=mat('verre',()=>std('#e8f3fa',.2,{emissive:0x4da6d9,emissiveIntensity:.3}));
  const porte=mat('porte',()=>std('#4a2f1b',.8));
  if(niv<=2){
    const H=niv===1?2.8:5.6;
    box(g,7,H,5,wall,0,H/2,-.5);box(g,7.3,.25,5.3,brique,0,.12,-.5);
    gableRoof(g,0,H,-.5,7,5,1.7,tin,std('#cfc6b2'),.6);
    box(g,1.2,2.0,.12,porte,0,1,2.06);
    [-2.3,2.3].forEach(dx=>box(g,1.1,1.0,.1,glass,dx,1.6,2.06));
    if(niv===2)[-2.3,0,2.3].forEach(dx=>box(g,1.1,1.0,.1,glass,dx,4.2,2.06));
  }else{
    box(g,8,9,6,wall,0,4.5,-.5);box(g,8.4,.3,6.4,brique,0,.15,-.5);box(g,8.4,.3,6.4,std('#9a9a92'),0,9.1,-.5);
    box(g,1.4,2.2,.12,porte,0,1.1,2.56);
    for(let r=0;r<3;r++)[-2.8,-.9,.9,2.8].forEach(dx=>box(g,1.1,1.1,.1,glass,dx,2.6+r*2.7,2.56));
    cyl(g,1,1,1.6,std('#2e6da4',.5,{metalness:.3}),2,10,-1,14);
    [-.7,.7].forEach(dx=>cyl(g,.08,.08,.8,std('#555'),2+dx,9.4,-1,6));
  }
}

// etat : {n: terrains achetés, niv: [niveau par terrain], savoir: points de savoir disponibles}
// cb : {acheter(k), ouvrir(k), verrou(k)} ; renvoie les points d'action et étend les limites de la scène
export function construireRes(w,etat,cb){
  const g=new THREE.Group();w.group.add(g);
  const cols=w.colliders,bxs=w.boxes;
  const dirt=mat('dirt',()=>new THREE.MeshStandardMaterial({map:T.dirtTexture(),roughness:1,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));
  const flat=(geo,m,x,y,z)=>{const o=new THREE.Mesh(geo,m);o.rotation.x=-Math.PI/2;o.position.set(x,y,z);o.receiveShadow=true;g.add(o);return o};
  const yMin=Z0-(Math.ceil(NB_TERRAINS/2)-1)*PAS-9;
  // route centrale vers le nord
  flat(new THREE.PlaneGeometry(5.2,-14-yMin),dirt,CX,.02,(-14+yMin)/2);
  // panneau d'entrée, côté village
  cyl(g,.07,.09,2.6,std('#5a3a22',.9),CX+4,1.3,-12,8);
  const en=new THREE.Mesh(new THREE.PlaneGeometry(3,1.6),new THREE.MeshStandardMaterial({map:T.textBoard([{t:'QUARTIER',s:60,y:.25},{t:'RÉSIDENTIEL ↑',s:50,y:.52},{t:'Terrains à acheter',s:26,y:.78}],1024,546,'#0f2f6b','#ffffff'),roughness:.6}));
  en.position.set(CX+4,2.55,-11.9);g.add(en);cols.push({x:CX+4,z:-12,r:.4});
  // lampadaires le long de la route
  for(let z=-20;z>yMin;z-=12)[-3.4,3.4].forEach(dx=>{cyl(g,.05,.07,3,std('#444',.5,{metalness:.5}),CX+dx,1.5,z,6);const a=new THREE.Mesh(new THREE.SphereGeometry(.2,8,6),new THREE.MeshBasicMaterial({color:0xfff0b0}));a.position.set(CX+dx,3.1,z);g.add(a);cols.push({x:CX+dx,z:z,r:.25})});

  const spots=[];
  for(let k=0;k<NB_TERRAINS;k++){
    const p=posTerrain(k),t=new THREE.Group();t.position.set(p.x,0,p.z);t.rotation.y=p.ry;g.add(t);
    const possede=k<etat.n,vente=k===etat.n;
    // sol du terrain
    const sol=new THREE.Mesh(new THREE.PlaneGeometry(DEMI*2,DEMI*2),std(possede?'#cdbb8a':vente?'#d9d29a':'#7e9a62',1));sol.rotation.x=-Math.PI/2;sol.position.y=.03;sol.receiveShadow=true;t.add(sol);
    // bornes aux quatre coins
    [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>cyl(t,.1,.12,1.1,std(possede?'#7a4a26':'#c9c9c9',.8),a*DEMI,.55,b*DEMI,6));
    // panneau devant le terrain
    let l1,l2,bg;
    if(possede){l1='MON TERRAIN';l2=(etat.niv[k]||0)?NIVEAUX[(etat.niv[k]||1)-1].n:'à construire';bg='#1f7a4d'}
    else if(vente){l1='À VENDRE';l2=prixTerrain(k)+' points de savoir';bg='#b8860b'}
    else{l1='TERRAIN N°'+(k+1);l2='bientôt disponible';bg='#5a6275'}
    cyl(t,.06,.08,2.2,std('#5a3a22',.9),-3.4,1.1,DEMI-.3,6);
    const sg=new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.2),new THREE.MeshStandardMaterial({map:T.textBoard([{t:l1,s:70,y:.35},{t:l2,s:l2.length>14?34:44,y:.72}],1024,512,bg,'#ffffff'),roughness:.6}));
    sg.position.set(-3.4,2.3,DEMI-.2);t.add(sg);
    const niv=etat.niv[k]||0;
    if(possede&&niv>0){
      maison(t,niv,k);
      // emprise de la maison dans le repère du monde (les terrains sont tournés d'un quart de tour)
      const hw=niv>=3?4.2:3.7,hd=niv>=3?3.3:2.7,cxw=p.x+(p.side?.5:-.5);
      bxs.push({x0:cxw-hd,x1:cxw+hd,z0:p.z-hw,z1:p.z+hw});
    }
    // point d'action, au bord de la route
    const fx=p.x+(p.side?-DEMI-1.2:DEMI+1.2);
    const lab=possede?(niv>=3?'Mon immeuble (terrain n°'+(k+1)+')':niv>0?'Améliorer ma maison (terrain n°'+(k+1)+')':'Construire sur mon terrain n°'+(k+1)):vente?'Acheter le terrain n°'+(k+1)+' · '+prixTerrain(k)+' points de savoir':'Terrain n°'+(k+1)+' : achète d’abord le précédent';
    spots.push({x:fx,z:p.z,r:3.6,label:lab,run:()=>possede?cb.ouvrir(k):vente?cb.acheter(k):cb.verrou(k)});
  }
  w.bounds.z0=Math.min(w.bounds.z0,limiteNord);
  return {spots};
}
