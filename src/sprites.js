import * as THREE from 'three';

// Personnages photographiques détourés, placés dans le monde 3D et toujours tournés vers la caméra.
// Personnages en robe ou jupe : pas de jambes séparées, la jupe se balance.
const DRESS={lola:1,ilunga:1,bea:1,mama:1,kasa:1};
export const CHAR_HEIGHT={lola:1.55,ilunga:1.68,junior:1.45,mavungu:1.78,bea:1.65,mama:1.68,jer:1.62,kasa:1.25,pf1:1.72,pf2:1.68,ph1:1.82,ph2:1.78};
const loader=new THREE.TextureLoader();
const cache={};
function tex(name){
  if(cache[name])return cache[name];
  const t=loader.load('img/chars/'+name+'.webp');
  t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;t.generateMipmaps=true;
  return cache[name]=t;
}
let blobTex=null;
function blob(){
  if(blobTex)return blobTex;
  const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');
  const g=x.createRadialGradient(32,32,2,32,32,32);g.addColorStop(0,'rgba(0,0,0,.55)');g.addColorStop(1,'rgba(0,0,0,0)');
  x.fillStyle=g;x.fillRect(0,0,64,64);return blobTex=new THREE.CanvasTexture(c);
}

// id : nom du fichier ; frames : {walk:'pf1w'} pour une vraie pose de marche.
export function makePhotoChar(id,opts){
  opts=opts||{};
  const H=opts.height||CHAR_HEIGHT[id]||1.7;
  const root=new THREE.Group();
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:blob(),transparent:true,depthWrite:false}));
  shadow.rotation.x=-Math.PI/2;shadow.position.y=.015;shadow.scale.set(H*.5,H*.28,1);root.add(shadow);
  const pivot=new THREE.Group();root.add(pivot);
  const mk=t=>new THREE.MeshBasicMaterial({map:t,transparent:true,alphaTest:.45,side:THREE.DoubleSide,color:new THREE.Color(opts.tone||'#f4f1ec')});
  const matIdle=mk(tex(id)),matWalk=opts.walk?mk(tex(opts.walk)):null;
  const SX=14,SY=36;
  const geo=new THREE.PlaneGeometry(1,1,SX,SY);geo.translate(0,.5,0);
  const posA=geo.attributes.position,base=Float32Array.from(posA.array);
  const dress=!!DRESS[id],realStep=!!opts.walk;
  const mesh=new THREE.Mesh(geo,matIdle);pivot.add(mesh);
  const sm=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)};
  // Déformation « marionnette » : jambes, bras, jupe, tête, buste.
  function deform(ph,walk,talk,t,idle){
    const sn=Math.sin(ph),L=Math.max(0,sn)*.085*walk,R=Math.max(0,-sn)*.085*walk;
    const armK=sn*.08*walk,shift=Math.sin(t*.5)*.006*idle;
    for(let i=0;i<posA.count;i++){
      const bx=base[i*3],by=base[i*3+1];let x=bx,y=by;
      const v=by;                                   // 0 = pieds, 1 = tête
      if(!dress&&!realStep&&v<.54&&walk>0){
        const w=sm(.52,.04,v);                      // poids croissant vers les pieds
        const side=sm(.06,-.06,bx);                 // 1 = jambe gauche de l'image
        y+= (L*side+R*(1-side))*w*w;
      }
      if(dress&&walk>0&&v<.62){                     // jupe qui ondule
        const w=sm(.6,.05,v);x+=Math.sin(ph+v*5)*.018*walk*w;y+=Math.abs(sn)*.01*walk*w;
      }
      if(walk>0&&v>.42&&v<.86){                     // bras : raccourcissement alterné
        const a=sm(.2,.34,Math.abs(bx))*sm(.42,.55,v)*sm(.86,.74,v);
        const dir=bx<0?1:-1;y+=(y-.8)*armK*dir*a*3;
      }
      if(talk&&v>.84){y+=Math.sin(t*5)*.004*sm(.84,.96,v)}
      x+=shift*sm(.0,1,v);                          // léger transfert de poids à l'arrêt
      posA.setXYZ(i,x,y,0);
    }
    posA.needsUpdate=true;
  }
  deform(0,0,false,0,1);
  let aspect=.33;
  const fit=()=>{mesh.scale.set(H*aspect,H,1);shadow.scale.set(Math.max(.5,H*aspect*1.1),H*.2,1)};
  fit();
  const t0=matIdle.map;
  const chk=setInterval(()=>{if(t0.image&&t0.image.width){aspect=t0.image.width/t0.image.height;fit();clearInterval(chk)}},60);
  const state={t:Math.random()*10,ph:0};
  function update(dt,o){
    o=o||{};state.t+=dt;const t=state.t,sp=o.speed||0;
    // face à la caméra
    if(o.cam){pivot.rotation.y=Math.atan2(o.cam.x-root.position.x,o.cam.z-root.position.z)-root.rotation.y}
    let y=0,rz=0,sy=1,flip=1,m=matIdle;
    if(sp>.1){
      state.ph+=dt*(sp>3.2?9:6.5);
      const s=Math.sin(state.ph);
      y=Math.abs(s)*.012*(sp>3.2?1.5:1);
      rz=s*.035;
      if(matWalk){const k=Math.floor(state.ph/Math.PI)%2;m=k?matWalk:matIdle;flip=1}
      // légère inclinaison dans le sens du déplacement
      if(o.lean)rz+=o.lean*.05;
    }else{
      state.ph=0;
      sy=1+Math.sin(t*1.8)*.004;rz=Math.sin(t*.9)*.008;
    }
    if(o.talk){y+=Math.abs(Math.sin(t*6))*.012;rz+=Math.sin(t*4)*.012}
    if(o.wave){y+=Math.abs(Math.sin(t*9))*.04;rz+=Math.sin(t*9)*.07}
    mesh.material=m;mesh.position.y=y;mesh.rotation.z=rz;mesh.scale.y=H*sy;
    deform(state.ph,Math.min(1,sp/2.2),!!o.talk,t,sp>.1?0:1);
    mesh.scale.x=H*aspect*flip;
  }
  Object.assign(root.userData,{update,state,height:H,photo:true});
  return root;
}
