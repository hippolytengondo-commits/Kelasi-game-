import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,rng,gableRoof,tree} from './world.js';
import {leafyTree,palm,grassField} from './nature.js';
import {ground,patch,sign,exitSign,waterNormal} from './stages.js';
import {panneauPub} from './pub.js';

// Générateur de lieux d'exploration : une même fabrique pour des dizaines de lieux, variés par leur type
// (bâtiment, plein air, eau, montagne, atelier, village, forêt, ville), leurs couleurs et leurs accessoires.
// Convention commune : arrivée en (0 ; 6,8), PNJ en (-5 ; -5,5) et (5,5 ; -5,5), sortie en (-3,8 ; 10,4),
// zone centrale (|x| < 9, -8 < z < 9) toujours libre.
const stone=c=>new THREE.MeshStandardMaterial({map:T.plasterTexture(c||'#efe8da'),roughness:.9});
const tin=()=>new THREE.MeshStandardMaterial({map:T.tinTexture(),roughness:.55,metalness:.35});
const wood=c=>new THREE.MeshStandardMaterial({map:T.woodTexture(c||'#9a6a3f'),roughness:.88});
const thatch=()=>new THREE.MeshStandardMaterial({map:T.thatchTexture(),roughness:1});
const BOUNDS={x0:-26,x1:26,z0:-6.5,z1:12.5};
function flat(g,w,d,col,x,y,z){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshStandardMaterial({color:col,roughness:1}));m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.receiveShadow=true;g.add(m);return m}

// ---- accessoires : chacun se place en (x, z) et déclare ses obstacles
const PROPS={
  caisses:(g,c,x,z)=>{for(let i=0;i<3;i++)box(g,1.1,1.1,1.1,wood('#8a5a32'),x+(i%2)*1.2,.55+Math.floor(i/2)*1.1,z+(i===2?.3:0));c.push({x:x+.6,z:z,r:1.5})},
  barils:(g,c,x,z)=>{[0,1,2].forEach(i=>cyl(g,.45,.45,1,std(['#2e6da4','#b3261e','#2e8b57'][i],.6),x+i*1,.5,z+(i%2)*.6,14));c.push({x:x+1,z:z,r:1.6})},
  statue:(g,c,x,z,a)=>{box(g,1.6,1,1.6,stone('#cfc6b2'),x,.5,z);const s=new THREE.Mesh(new THREE.SphereGeometry(.5,14,10),std(a,.4,{metalness:.5}));s.position.set(x,1.9,z);s.castShadow=true;g.add(s);cyl(g,.25,.4,.9,std(a,.4,{metalness:.5}),x,1.35,z,10);c.push({x:x,z:z,r:1.1})},
  fontaine:(g,c,x,z)=>{cyl(g,1.8,1.9,.5,stone('#cfc6b2'),x,.25,z,20);cyl(g,1.5,1.5,.1,std('#4da6d9',.2,{emissive:0x2a6fa0,emissiveIntensity:.3}),x,.5,z,20);cyl(g,.2,.3,1.4,stone('#cfc6b2'),x,1.1,z,10);c.push({x:x,z:z,r:1.9})},
  drapeaux:(g,c,x,z,a)=>{[0,1.8].forEach(d=>{cyl(g,.04,.05,5,std('#aaa',.4,{metalness:.7}),x+d,2.5,z,6);const f=new THREE.Mesh(new THREE.PlaneGeometry(1.4,.9),new THREE.MeshBasicMaterial({color:d?0xf7d618:new THREE.Color(a),side:THREE.DoubleSide}));f.position.set(x+d+.75,4.4,z);g.add(f);c.push({x:x+d,z:z,r:.3})})},
  banc:(g,c,x,z)=>{box(g,2.2,.14,.6,wood('#7a4a26'),x,.5,z);[-.9,.9].forEach(d=>box(g,.12,.5,.5,wood('#5a3a22'),x+d,.25,z));c.push({x:x,z:z,r:1.2})},
  tour:(g,c,x,z)=>{[[-.6,-.6],[.6,-.6],[.6,.6],[-.6,.6]].forEach(p=>cyl(g,.06,.08,9,std('#c9c9c9',.4,{metalness:.7}),x+p[0],4.5,z+p[1],6));for(let y=1.5;y<9;y+=2)box(g,1.3,.06,1.3,std('#c9c9c9',.4,{metalness:.7}),x,y,z);const l=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),new THREE.MeshBasicMaterial({color:0xff3030}));l.position.set(x,9.2,z);g.add(l);c.push({x:x,z:z,r:1})},
  silo:(g,c,x,z)=>{cyl(g,1.3,1.3,5,std('#d9d9d9',.5,{metalness:.5}),x,2.5,z,18);const t=new THREE.Mesh(new THREE.ConeGeometry(1.4,1,18),std('#8a8a8a',.5,{metalness:.5}));t.position.set(x,5.5,z);g.add(t);c.push({x:x,z:z,r:1.4})},
  etal:(g,c,x,z,a)=>{box(g,3,.9,1.1,wood('#a87445'),x,.45,z);[[-1.4,-.5],[1.4,-.5],[-1.4,.5],[1.4,.5]].forEach(p=>cyl(g,.05,.05,2.2,wood('#6b4226'),x+p[0],1.1,z+p[1],6));const aw=box(g,3.4,.08,1.7,std(a,.8),x,2.2,z);aw.rotation.x=.1;c.push({x:x,z:z,r:1.7})},
  roche:(g,c,x,z)=>{const r=new THREE.Mesh(new THREE.DodecahedronGeometry(1.2,0),std('#7a7a72',1));r.position.set(x,.8,z);r.scale.set(1.3,1,1);r.rotation.y=x;r.castShadow=true;g.add(r);c.push({x:x,z:z,r:1.5})},
  hutte:(g,c,x,z)=>{cyl(g,1.7,1.7,2,new THREE.MeshStandardMaterial({map:T.earthWallTexture(),roughness:1}),x,1,z,18);const r=new THREE.Mesh(new THREE.ConeGeometry(2.4,1.9,18),thatch());r.position.set(x,2.95,z);r.castShadow=true;g.add(r);c.push({x:x,z:z,r:1.9})},
  arbre:(g,c,x,z)=>{tree(g,x,z,1.2,false,null,c,Math.abs(x)%2<1)},
  panneau:(g,c,x,z,a)=>{cyl(g,.06,.08,2.4,wood('#5a3a22'),x,1.2,z,6);const p=box(g,1.4,.9,.08,std(a,.7),x,2.3,z);c.push({x:x,z:z,r:.4})}
};
const LISTE=Object.keys(PROPS);

// ---- scènes
function grassy(g,seed,area,excl,count){const gr=grassField({area:area,count:count||4500,seed:seed,exclude:excl});g.add(gr);return gr}
const libre=(x,z)=>Math.abs(x)<30&&z>-23&&z<1||Math.abs(x)<3.2&&z>4;

export function buildLieu(cfg){
  const g=new THREE.Group(),colliders=[],boxes=[],r=rng(cfg.seed||7);
  const wall=cfg.wall||'#e8dcc4',roofC=cfg.roof||'#8a3b2a',acc=cfg.accent||'#1f7a4d',sol=cfg.sol||0xdcd2bc;
  ground(g,1400,1400,T.grassTexture,1,0,0);patch(g,0,9,5,10,T.dirtTexture);
  let sky={elev:38,azim:200,turb:3,ray:1},fog=.0052,update=()=>{};
  const titre=cfg.titre,sous=cfg.sous||'';
  const plaque=(x,y,z,w,h)=>{const s=sign(titre.toUpperCase().slice(0,26),sous.slice(0,34),w||8,h||1.3,acc,'#fff');s.position.set(x,y,z);g.add(s);return s};
  // accessoires choisis selon le lieu (deux zones latérales + fond)
  const accessoires=(zones)=>{const noms=cfg.props&&cfg.props.length?cfg.props:[LISTE[Math.floor(r()*LISTE.length)],LISTE[Math.floor(r()*LISTE.length)],LISTE[Math.floor(r()*LISTE.length)]];
    zones.forEach((p,i)=>PROPS[noms[i%noms.length]](g,colliders,p[0],p[1],acc))};
  const arch=cfg.arch||'batiment';
  if(arch==='batiment'||arch==='ville'){
    flat(g,50,22,sol,0,.02,-9);
    if(arch==='ville'){
      [[-14,-18,7,12],[-3,-19,8,16],[9,-18,7,10],[18,-16,6,14]].forEach((b,i)=>{
        box(g,b[2],b[3],5,stone(i%2?wall:'#d5dbe3'),b[0],b[3]/2,b[1]);
        for(let y=1.5;y<b[3]-1;y+=2.2)for(let x=-b[2]/2+1;x<b[2]/2;x+=1.8)box(g,.8,1,.1,std('#cfe9f7',.15,{emissive:0x4da6d9,emissiveIntensity:.3}),b[0]+x,y,b[1]+2.55);
        boxes.push({x0:b[0]-b[2]/2,x1:b[0]+b[2]/2,z0:b[1]-2.5,z1:b[1]+2.5})});
      plaque(0,3.1,-14.3,8,1.2);
    }else{
      box(g,24,6.5,9,stone(wall),0,3.25,-17);
      gableRoof(g,0,6.5,-17,24,9,2.4,cfg.roof?new THREE.MeshStandardMaterial({color:roofC,roughness:.7}):tin(),std('#efe6d2'),.9);
      boxes.push({x0:-12.5,x1:12.5,z0:-21.5,z1:-12.5});
      for(let i=0;i<5;i++)cyl(g,.35,.4,6.2,stone('#fff8ee'),-8+i*4,3.1,-12.2,14);
      box(g,3,3.2,.2,std('#4a2f1b'),0,1.6,-12.4);
      plaque(0,7.6,-12.2,9,1.3);
    }
    accessoires([[-17,-4],[17,-4],[-15,-9],[15,-9]]);
  }else if(arch==='plein_air'){
    flat(g,60,34,0x7fa24a,0,.015,-12);
    // champs en rangées
    const pos=[];for(const side of [-1,1])for(let x=11;x<=23;x+=2.4)for(let z=-4;z>-20;z-=2.8)pos.push([side*x,z]);
    const cult=new THREE.InstancedMesh(new THREE.SphereGeometry(.7,8,6),std(cfg.cult||'#3a8a3a',.9),pos.length),m4=new THREE.Matrix4(),q=new THREE.Quaternion();
    pos.forEach((p,i)=>{m4.compose(new THREE.Vector3(p[0],.55,p[1]),q,new THREE.Vector3(1,.8+r()*.4,1));cult.setMatrixAt(i,m4);colliders.push({x:p[0],z:p[1],r:.7})});
    g.add(cult);
    box(g,7,3,5,wood('#8a5a32'),0,1.5,-20);gableRoof(g,0,3,-20,7,5,1.5,tin(),std('#cfc6b2'),.6);boxes.push({x0:-3.6,x1:3.6,z0:-22.6,z1:-17.4});
    plaque(0,3.7,-17.3,5.5,1.1);
    accessoires([[-8,-12],[8,-12],[-8,-17],[8,-17]]);
  }else if(arch==='eau'){
    flat(g,52,10,0xd8c99a,0,.02,-9);
    const nm=waterNormal();nm.repeat.set(12,5);
    const lac=new THREE.Mesh(new THREE.PlaneGeometry(200,60),new THREE.MeshPhysicalMaterial({color:cfg.eau||0x2a7aa6,roughness:.06,normalMap:nm,normalScale:new THREE.Vector2(.7,.7),transparent:true,opacity:.92}));
    lac.rotation.x=-Math.PI/2;lac.position.set(0,.05,-44);g.add(lac);
    box(g,3,.25,14,wood('#7a4a26'),13,.55,-17);[-1.2,1.2].forEach(dx=>[-22,-17,-12].forEach(z=>cyl(g,.15,.15,1.3,wood('#4a2f1b'),13+dx,.2,z,6)));boxes.push({x0:11.4,x1:14.6,z0:-24,z1:-10});
    [[9,-15],[17,-21]].forEach((p,i)=>{const b=box(g,1.2,.4,4.5,wood('#a87445'),p[0],.3,p[1]);b.rotation.y=.2*(i?1:-1)});
    [[-14,-9],[-20,-8],[22,-8]].forEach(p=>{const pl=palm(Math.floor(Math.abs(p[0]*3))+2);pl.position.set(p[0],0,p[1]);g.add(pl);colliders.push({x:p[0],z:p[1],r:.4})});
    plaque(-6,3.2,-8.6,7,1.2);cyl(g,.1,.12,3.2,wood('#5a3a22'),-9.4,1.6,-8.6,8);cyl(g,.1,.12,3.2,wood('#5a3a22'),-2.6,1.6,-8.6,8);colliders.push({x:-9.4,z:-8.6,r:.3},{x:-2.6,z:-8.6,r:.3});
    update=(dt,t)=>{nm.offset.x=t*.01;nm.offset.y=t*.006};sky={elev:30,azim:160,turb:3,ray:1.5};
    accessoires([[-18,-3],[18,-3]]);
  }else if(arch==='montagne'){
    flat(g,60,30,0x9a8a6a,0,.015,-12);
    [[-24,-28,24,26],[-4,-34,30,34],[20,-30,24,24],[-40,-22,16,18],[40,-22,18,20]].forEach((m,i)=>{const c=new THREE.Mesh(new THREE.ConeGeometry(m[2],m[3],7+i%3),std(i%2?'#7a7a72':'#6b6b64',1));c.position.set(m[0],m[3]/2,m[1]);c.rotation.y=i;g.add(c)});
    // entrée de galerie
    box(g,3.4,3.4,1,std('#2a2a2a'),0,1.7,-13);[-2,2].forEach(dx=>box(g,.5,3.8,.8,wood('#5a3a22'),dx,1.9,-12.9));box(g,4.8,.5,.8,wood('#5a3a22'),0,3.8,-12.9);boxes.push({x0:-2.6,x1:2.6,z0:-14,z1:-12.4});
    plaque(0,5.2,-12.7,6.5,1.2);
    accessoires([[-12,-6],[12,-6],[-18,-10],[18,-10]]);
    sky={elev:34,azim:230,turb:4,ray:1.5};
  }else if(arch==='atelier'){
    flat(g,50,22,0xb9b2a2,0,.02,-9);
    box(g,20,4.5,7,wood(cfg.wall?wall:'#8a5a32'),0,2.25,-18);gableRoof(g,0,4.5,-18,20,7,1.8,tin(),std('#cfc6b2'),.8);
    box(g,12,3.6,.4,std('#2a2a2a',.9),0,1.9,-14.6);boxes.push({x0:-10.5,x1:10.5,z0:-21.8,z1:-14.2});
    // machines et établis
    [-6,-2,2,6].forEach((x,i)=>{box(g,1.6,1.1,1,std(i%2?'#4a6a8a':'#8a4a2a',.5,{metalness:.4}),x,.55,-13.5);cyl(g,.4,.4,.5,std('#555',.4,{metalness:.7}),x,1.35,-13.5,12)});
    plaque(0,5.4,-14.4,8,1.2);
    accessoires([[-17,-4],[17,-4],[-16,-10],[16,-10]]);
  }else if(arch==='village'){
    patch(g,0,-4,26,18,T.dirtTexture);
    [[-14,-10],[14,-10],[-18,-1],[18,-1],[-8,-15],[8,-15]].forEach(p=>PROPS.hutte(g,colliders,p[0],p[1]));
    plaque(0,3.2,-18.5,8,1.3);cyl(g,.12,.14,3.2,wood('#5a3a22'),-3.6,1.6,-18.5,8);cyl(g,.12,.14,3.2,wood('#5a3a22'),3.6,1.6,-18.5,8);
    accessoires([[-9,-1],[9,-1],[-20,-12],[20,-12]]);
    sky={elev:28,azim:240,turb:4,ray:1.5};fog=.0058;
  }else{ // foret
    flat(g,40,18,0x6a9a4a,0,.02,-13);
    for(let i=0;i<30;i++){const t=leafyTree({kind:'leafy',seed:(cfg.seed||7)+i,fruits:false,trunk:4+r()*2});t.position.set(-26+i*1.8,0,-12-r()*10);t.scale.setScalar(1.3+r()*.6);g.add(t);colliders.push({x:t.position.x,z:t.position.z,r:.6})}
    box(g,6,3,4,wood('#8a5a32'),-15,1.5,-5);gableRoof(g,-15,3,-5,6,4,1.4,tin(),std('#cfc6b2'),.6);boxes.push({x0:-18.2,x1:-11.8,z0:-7.2,z1:-2.8});
    plaque(0,3.4,-9.5,8,1.3);cyl(g,.12,.14,3.4,wood('#6b4226'),-4,1.7,-9.5,8);cyl(g,.12,.14,3.4,wood('#6b4226'),4,1.7,-9.5,8);colliders.push({x:-4,z:-9.5,r:.3},{x:4,z:-9.5,r:.3});
    accessoires([[14,-4],[18,-9]]);fog=.0064;sky={elev:36,azim:215,turb:5,ray:1};
  }
  // arbres de bordure et sortie
  [[-24,6],[24,6]].forEach((p,i)=>tree(g,p[0],p[1],1+i*.1,false,null,colliders,i%2===0));
  const gr=grassy(g,(cfg.seed||7)*3,[-36,36,-26,14],(x,z)=>libre(x,z)||arch==='eau'&&z<-4||arch==='batiment'&&Math.abs(x)<25&&z<-3&&z>-22);
  exitSign(g,-3.8,10.4);colliders.push({x:-3.8,z:10.4,r:.3});
  if(cfg.pub){const sx=(cfg.seed||0)%2?16:-16,pb=panneauPub((cfg.seed||0)%4<2?'lex':'rulems');pb.position.set(sx,0,1.5);pb.rotation.y=sx>0?-Math.PI/2:Math.PI/2;g.add(pb);colliders.push({x:sx,z:1.5,r:1.7})}
  return {group:g,colliders,boxes,dyn:{},exit:{x:0,z:9.4},bounds:BOUNDS,sky:sky,fog:fog,update(dt,t){gr.userData.update(t);update(dt,t)}};
}
