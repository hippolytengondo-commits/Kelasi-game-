import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Végétation réaliste : feuillage en cartes à transparence, écorce, palmiers, herbe animée par le vent.
function rng(seed){let s=seed>>>0||1;return()=>((s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296))}
function cv(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);return c}
const tex=(c,srgb)=>{const t=new THREE.CanvasTexture(c);t.anisotropy=4;t.wrapS=t.wrapT=THREE.RepeatWrapping;if(srgb!==false)t.colorSpace=THREE.SRGBColorSpace;return t};

// ---------- feuilles de manguier : amas de feuilles allongées avec nervure ----------
let leafCache={};
export function leafTexture(kind){
  if(leafCache[kind])return leafCache[kind];
  const r=rng(kind==='mango'?11:kind==='palm'?23:37);
  const c=cv(256,256,(g,w,h)=>{
    g.clearRect(0,0,w,h);
    const n=kind==='mango'?26:kind==='palm'?1:34;
    const base=kind==='mango'?[34,98,44]:kind==='palm'?[48,112,40]:[58,120,52];
    if(kind==='palm'){ // penne de palmier
      g.translate(w/2,h);g.strokeStyle='rgb(70,100,40)';g.lineWidth=4;g.beginPath();g.moveTo(0,0);g.lineTo(0,-h*.97);g.stroke();
      for(let i=0;i<34;i++){
        const y=-h*.06-i*(h*.93/34),len=(w*.46)*(1-i/46),a=.55+i*.012;
        [-1,1].forEach(s=>{
          const v=.8+r()*.4;g.strokeStyle=`rgb(${base[0]*v|0},${base[1]*v|0},${base[2]*v|0})`;g.lineWidth=3.4;g.beginPath();g.moveTo(0,y);
          g.quadraticCurveTo(s*len*.5,y-len*.16,s*len,y+len*.42*(1-.0));g.stroke();
        });
      }
      return;
    }
    for(let i=0;i<n;i++){
      const a=r()*Math.PI*2,d=Math.pow(r(),.6)*(w*.38),x=w/2+Math.cos(a)*d,y=h/2+Math.sin(a)*d*.8;
      const L=(kind==='mango'?64:36)*(.7+r()*.5),W2=L*(kind==='mango'?.22:.4),rot=a+Math.PI/2+(r()-.5)*.8;
      const v=.7+r()*.55;const col=`rgb(${base[0]*v|0},${base[1]*v|0},${base[2]*v|0})`;
      g.save();g.translate(x,y);g.rotate(rot);
      g.fillStyle=col;g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(W2,-L*.45,0,-L);g.quadraticCurveTo(-W2,-L*.45,0,0);g.fill();
      g.strokeStyle=`rgba(${base[0]*v*.6|0},${base[1]*v*.7|0},${base[2]*v*.6|0},.8)`;g.lineWidth=1.1;g.beginPath();g.moveTo(0,0);g.lineTo(0,-L*.9);g.stroke();
      g.restore();
    }
  });
  return leafCache[kind]=tex(c);
}
export function barkTexture(){
  const c=cv(128,256,(g,w,h)=>{
    const r=rng(5);g.fillStyle='#5a4128';g.fillRect(0,0,w,h);
    for(let i=0;i<220;i++){const x=r()*w,y=r()*h,l=18+r()*60;g.strokeStyle=r()<.5?'rgba(30,18,8,.5)':'rgba(130,100,66,.35)';g.lineWidth=1+r()*2.2;g.beginPath();g.moveTo(x,y);g.lineTo(x+(r()-.5)*5,y+l);g.stroke()}
  });
  const t=tex(c);t.repeat.set(2,3);return t;
}

function leafMat(kind,tint){
  const t=leafTexture(kind);
  const m=new THREE.MeshStandardMaterial({map:t,alphaTest:.5,side:THREE.DoubleSide,roughness:.78,metalness:0,color:tint||0xffffff,vertexColors:true});
  return m;
}
function leafDepth(kind){return new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:leafTexture(kind),alphaTest:.5})}

// carte de feuillage transformée, avec une teinte par sommet
function card(w,h,m4,tone){
  const g=new THREE.PlaneGeometry(w,h);g.applyMatrix4(m4);
  const n=g.attributes.position.count,c=new Float32Array(n*3);
  for(let i=0;i<n;i++){c[i*3]=tone*(.9+.1*Math.random());c[i*3+1]=tone;c[i*3+2]=tone*.92}
  g.setAttribute('color',new THREE.BufferAttribute(c,3));return g;
}
const _o=new THREE.Object3D();

// ---------- manguier / arbre feuillu ----------
export function leafyTree(opts){
  opts=opts||{};
  const kind=opts.kind||'mango',seed=opts.seed||3,r=rng(seed);
  const g=new THREE.Group();
  const bark=new THREE.MeshStandardMaterial({map:barkTexture(),roughness:.95,color:0xb8a58c});
  const H=opts.trunk||3.4;
  // tronc légèrement incurvé
  const pts=[[0,0,0],[.15,H*.35,.08],[-.1,H*.7,-.05],[.05,H,0]].map(p=>new THREE.Vector3(p[0],p[1],p[2]));
  const trunk=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),14,.34,10),bark);
  // empâtement à la base
  const tp=trunk.geometry.attributes.position;
  for(let i=0;i<tp.count;i++){const y=tp.getY(i);if(y<.7){const k=1+(.7-y)*.55;tp.setX(i,tp.getX(i)*k);tp.setZ(i,tp.getZ(i)*k)}}
  trunk.geometry.computeVertexNormals();trunk.castShadow=true;trunk.receiveShadow=true;g.add(trunk);
  // branches maîtresses
  const nb=5;
  for(let i=0;i<nb;i++){
    const a=i/nb*Math.PI*2+r()*.6,len=2.2+r()*1.4,y0=H*(.72+r()*.25);
    const p=[new THREE.Vector3(0,y0,0),new THREE.Vector3(Math.cos(a)*len*.5,y0+len*.35,Math.sin(a)*len*.5),new THREE.Vector3(Math.cos(a)*len,y0+len*.55,Math.sin(a)*len)];
    const b=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p),8,.11,6),bark);b.castShadow=true;g.add(b);
  }
  // cœur sombre (évite de voir à travers) + cartes de feuilles
  const core=new THREE.Mesh(new THREE.IcosahedronGeometry(2.1,2),new THREE.MeshStandardMaterial({color:kind==='mango'?0x1c4a26:0x23552c,roughness:1}));
  core.position.set(0,H+1.6,0);core.scale.set(1.35,.85,1.35);core.castShadow=true;g.add(core);
  const mat=leafMat(kind,opts.tint),dm=leafDepth(kind);
  const N=opts.cards||80,geos=[];
  for(let i=0;i<N;i++){
    const a=r()*Math.PI*2,e=Math.acos(1-r()*.85),R=2.4+r()*1.4;
    const x=Math.sin(e)*Math.cos(a)*R,y=Math.cos(e)*R*.7+H+1.5,z=Math.sin(e)*Math.sin(a)*R;
    _o.position.set(x,y,z);_o.lookAt(x*2,y*1.2+1,z*2);_o.rotateZ(r()*6.28);_o.scale.setScalar(.8+r()*.8);_o.updateMatrix();
    const up=(y-H)/(R*.7+1.5);               // plus sombre à l'intérieur et en bas
    geos.push(card(2.3,2.3,_o.matrix,.5+.5*Math.min(1,Math.max(0,up*.9+.25))));
  }
  const leaves=new THREE.Mesh(mergeGeometries(geos),mat);leaves.castShadow=true;leaves.receiveShadow=true;leaves.customDepthMaterial=dm;leaves.userData.canopy=true;g.add(leaves);
  if(kind==='mango'&&opts.fruits!==false){
    const fm=new THREE.MeshStandardMaterial({color:0xe89a1a,roughness:.45});
    const fg=[];
    for(let i=0;i<22;i++){
      const a=r()*6.28,R=1.2+r()*2.2,sg=new THREE.SphereGeometry(.15,10,8);
      sg.scale(1,1.3,1);sg.translate(Math.cos(a)*R,H+.9+r()*1.7,Math.sin(a)*R);fg.push(sg);
    }
    const fr=new THREE.Mesh(mergeGeometries(fg),fm);fr.castShadow=true;fr.userData.canopy=true;g.add(fr);
  }
  core.userData.canopy=true;
  return g;
}

// ---------- palmier ----------
export function palm(seed){
  const r=rng(seed||7),g=new THREE.Group();
  const bark=new THREE.MeshStandardMaterial({map:barkTexture(),roughness:.9,color:0xd0c0a8});
  const H=7+r()*3,lean=(r()-.5)*1.6;
  const pts=[0,.3,.6,.9,1].map((t,i)=>new THREE.Vector3(lean*t*t,H*t,0));
  const tr=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),24,.22,8),bark);
  const p=tr.geometry.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i),k=1-(y/H)*.45+(y<.6?(.6-y)*.6:0);p.setX(i,(p.getX(i)-lean*(y/H)*(y/H))*k+lean*(y/H)*(y/H));p.setZ(i,p.getZ(i)*k)}
  tr.geometry.computeVertexNormals();tr.castShadow=true;g.add(tr);
  const mat=leafMat('palm'),dm=leafDepth('palm');
  const pg=[];
  for(let i=0;i<14;i++){
    _o.position.set(lean,H,0);_o.rotation.order='YXZ';_o.rotation.set(-(.3+r()*.85),i/14*Math.PI*2+r()*.3,0);_o.scale.set(1,1,1);_o.updateMatrix();
    const gg=new THREE.PlaneGeometry(3.8,3.8);gg.translate(0,1.9,0);gg.applyMatrix4(_o.matrix);
    const n=gg.attributes.position.count,c=new Float32Array(n*3);const t=.7+r()*.3;for(let k=0;k<n;k++){c[k*3]=t;c[k*3+1]=t;c[k*3+2]=t*.9}
    gg.setAttribute('color',new THREE.BufferAttribute(c,3));pg.push(gg);
  }
  const fronds=new THREE.Mesh(mergeGeometries(pg),mat);fronds.castShadow=true;fronds.customDepthMaterial=dm;g.add(fronds);
  return g;
}

// ---------- buisson feuillu ----------
export function bush(seed,size){
  const r=rng(seed||4),g=new THREE.Group(),mat=leafMat('leafy'),geos=[];
  const R=size||.9;
  for(let i=0;i<26;i++){
    const a=r()*6.28,e=r()*1.2,d=R*(.4+r()*.6);
    _o.position.set(Math.cos(a)*d*Math.cos(e),.25+Math.sin(e)*R*.9,Math.sin(a)*d*Math.cos(e));
    _o.lookAt(_o.position.x*2,_o.position.y+.6,_o.position.z*2);_o.rotateZ(r()*6.28);_o.scale.setScalar(.45+r()*.4);_o.updateMatrix();
    geos.push(card(1.6,1.6,_o.matrix,.5+r()*.5));
  }
  const m=new THREE.Mesh(mergeGeometries(geos),mat);m.castShadow=true;m.customDepthMaterial=leafDepth('leafy');g.add(m);
  const core=new THREE.Mesh(new THREE.IcosahedronGeometry(R*.55,1),new THREE.MeshStandardMaterial({color:0x1d4a26,roughness:1}));core.position.y=.45;core.scale.y=.7;g.add(core);
  return g;
}

// ---------- herbe : brins instanciés, balancés par le vent ----------
export function grassField(opts){
  const {area,count,exclude,seed}=opts;
  const r=rng(seed||9);
  const blade=new THREE.BufferGeometry();
  // brin à 4 segments, effilé
  const segs=3,v=[],uv=[],idx=[],cl=[];
  for(let i=0;i<=segs;i++){
    const t=i/segs,w=.032*(1-t*.9),y=t*.34;
    v.push(-w,y,0,w,y,0);uv.push(0,t,1,t);cl.push(.45+.55*t,.5+.5*t,.4+.4*t,.45+.55*t,.5+.5*t,.4+.4*t);
    if(i<segs){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2)}
  }
  blade.setAttribute('position',new THREE.Float32BufferAttribute(v,3));blade.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));blade.setIndex(idx);blade.setAttribute('color',new THREE.Float32BufferAttribute(cl,3));
  const nr=[];for(let i=0;i<v.length/3;i++)nr.push(0,1,0);blade.setAttribute('normal',new THREE.Float32BufferAttribute(nr,3));
  const mat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.9,side:THREE.DoubleSide,vertexColors:true});
  const uTime={value:0};
  mat.onBeforeCompile=sh=>{
    sh.uniforms.uTime=uTime;
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>','#include <begin_vertex>\nfloat sw=uv.y*uv.y;\n#ifdef USE_INSTANCING\nvec3 ip=vec3(instanceMatrix[3][0],0.,instanceMatrix[3][2]);\n#else\nvec3 ip=vec3(0.);\n#endif\ntransformed.x+=sin(uTime*1.7+ip.x*.45+ip.z*.3)*.11*sw;transformed.z+=cos(uTime*1.3+ip.z*.4)*.07*sw;');
    mat.userData.sh=sh;
  };
  const inst=new THREE.InstancedMesh(blade,mat,count);
  const m4=new THREE.Matrix4(),col=new THREE.Color(),q=new THREE.Quaternion(),e=new THREE.Euler();
  let n=0,tries=0;
  while(n<count&&tries<count*6){
    tries++;
    const x=area[0]+r()*(area[1]-area[0]),z=area[2]+r()*(area[3]-area[2]);
    if(exclude&&exclude(x,z))continue;
    const s=.8+r()*.8;e.set((r()-.5)*.3,r()*6.28,(r()-.5)*.3);q.setFromEuler(e);
    m4.compose(new THREE.Vector3(x,0,z),q,new THREE.Vector3(s,s*(.6+r()*1.0),s));
    inst.setMatrixAt(n,m4);col.setHSL(.23+r()*.07,.55+r()*.15,.22+r()*.14);inst.setColorAt(n,col);n++;
  }
  inst.count=n;inst.receiveShadow=true;inst.frustumCulled=false;
  inst.userData.update=t=>{uTime.value=t};
  return inst;
}
