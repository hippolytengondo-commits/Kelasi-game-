import * as THREE from 'three';

// Textures procédurales (canvas). Si un fichier photo existe dans img/tex/, il remplace la version dessinée.
function rng(seed){let s=seed>>>0||1;return()=>((s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296))}
function canvasTex(w,h,draw,rx,ry,srgb){
  const c=document.createElement('canvas');c.width=w;c.height=h;
  draw(c.getContext('2d'),w,h);
  const t=new THREE.CanvasTexture(c);
  t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rx||1,ry||1);t.anisotropy=4;
  if(srgb!==false)t.colorSpace=THREE.SRGBColorSpace;
  return t;
}
const cache={};
const once=(k,f)=>cache[k]||(cache[k]=f());

// Remplace la texture dessinée par une photo si elle est présente.
let MAN={};
export function setManifest(m){MAN=m||{}}
export function upgradePhoto(tex,name){
  if(!(MAN.tex||[]).includes(name))return tex;
  const img=new Image();
  img.onload=()=>{tex.image=img;tex.wrapS=tex.wrapT=THREE.MirroredRepeatWrapping;tex.colorSpace=THREE.SRGBColorSpace;tex.needsUpdate=true};
  img.src='img/tex/'+name+'.jpg';
  return tex;
}

export const grassTexture=()=>once('grass',()=>upgradePhoto(canvasTex(512,512,(g,w,h)=>{
  const r=rng(7);g.fillStyle='#5f9a3f';g.fillRect(0,0,w,h);
  for(let i=0;i<9000;i++){const x=r()*w,y=r()*h,l=3+r()*7;const v=r();
    g.strokeStyle=v<.33?'#4b8a33':v<.66?'#79b34b':'#3f7a2c';g.lineWidth=1;
    g.beginPath();g.moveTo(x,y);g.lineTo(x+(r()-.5)*3,y-l);g.stroke()}
  for(let i=0;i<260;i++){g.fillStyle='rgba(170,140,80,.18)';g.beginPath();g.arc(r()*w,r()*h,2+r()*9,0,7);g.fill()}
},40,24),'grass'));
export const dirtTexture=()=>once('dirt',()=>upgradePhoto(canvasTex(256,256,(g,w,h)=>{
  const r=rng(11);g.fillStyle='#b98b57';g.fillRect(0,0,w,h);
  for(let i=0;i<2600;i++){const v=r();g.fillStyle=v<.5?'rgba(120,80,40,.35)':'rgba(230,200,150,.3)';g.fillRect(r()*w,r()*h,1+r()*3,1+r()*3)}
},8,3),'dirt'));
export const brickTexture=(c1)=>once('brick'+c1,()=>upgradePhoto(canvasTex(256,256,(g,w,h)=>{
  const r=rng(5);g.fillStyle='#7a4a30';g.fillRect(0,0,w,h);
  const bw=64,bh=32;
  for(let y=0;y<h/bh;y++)for(let x=-1;x<w/bw+1;x++){
    const ox=(y%2)*bw/2;const v=.85+r()*.3;
    g.fillStyle=`rgb(${c1[0]*v|0},${c1[1]*v|0},${c1[2]*v|0})`;g.fillRect(x*bw+ox+2,y*bh+2,bw-4,bh-4);
  }
  for(let i=0;i<900;i++){g.fillStyle='rgba(0,0,0,.08)';g.fillRect(r()*w,r()*h,2,2)}
},4,2),'brick'));
export const plasterTexture=(col)=>once('plaster'+col,()=>canvasTex(256,256,(g,w,h)=>{
  const r=rng(3);g.fillStyle=col;g.fillRect(0,0,w,h);
  for(let i=0;i<2200;i++){g.fillStyle=r()<.5?'rgba(0,0,0,.05)':'rgba(255,255,255,.07)';g.fillRect(r()*w,r()*h,2+r()*4,2+r()*4)}
},3,2));
export const earthWallTexture=()=>once('earth',()=>canvasTex(256,256,(g,w,h)=>{
  const r=rng(9);g.fillStyle='#b98457';g.fillRect(0,0,w,h);
  for(let i=0;i<3000;i++){const v=r();g.fillStyle=v<.5?'rgba(110,70,35,.3)':'rgba(220,180,130,.3)';g.fillRect(r()*w,r()*h,2+r()*5,2+r()*5)}
},3,1));
export const thatchTexture=()=>once('thatch',()=>canvasTex(256,256,(g,w,h)=>{
  const r=rng(21);g.fillStyle='#b99a55';g.fillRect(0,0,w,h);
  for(let i=0;i<2600;i++){const x=r()*w,y=r()*h;g.strokeStyle=r()<.5?'#8d733a':'#d9bf7a';g.lineWidth=1+r();g.beginPath();g.moveTo(x,y);g.lineTo(x+(r()-.5)*6,y+14+r()*14);g.stroke()}
},4,3));
export const tinTexture=()=>once('tin',()=>canvasTex(256,256,(g,w,h)=>{
  g.fillStyle='#b13a2a';g.fillRect(0,0,w,h);
  for(let x=0;x<w;x+=16){const gr=g.createLinearGradient(x,0,x+16,0);gr.addColorStop(0,'rgba(0,0,0,.28)');gr.addColorStop(.5,'rgba(255,255,255,.18)');gr.addColorStop(1,'rgba(0,0,0,.28)');g.fillStyle=gr;g.fillRect(x,0,16,h)}
},6,3));
export const woodTexture=(base)=>once('wood'+base,()=>canvasTex(256,256,(g,w,h)=>{
  const r=rng(13);g.fillStyle=base||'#9a6a3f';g.fillRect(0,0,w,h);
  for(let y=0;y<h;y+=32){g.fillStyle='rgba(0,0,0,.35)';g.fillRect(0,y,w,2)}
  for(let i=0;i<500;i++){g.strokeStyle=r()<.5?'rgba(60,30,10,.18)':'rgba(255,220,170,.12)';g.beginPath();const y=r()*h;g.moveTo(0,y);g.lineTo(w,y+(r()-.5)*6);g.stroke()}
},3,3));
export const noiseTexture=(col,amt)=>{
  return canvasTex(128,128,(g,w,h)=>{
    const r=rng(17);g.fillStyle=col;g.fillRect(0,0,w,h);
    for(let i=0;i<900;i++){g.fillStyle=r()<.5?`rgba(0,0,0,${amt})`:`rgba(255,255,255,${amt})`;g.fillRect(r()*w,r()*h,3,3)}
  },2,2);
};
export function waxTexture(c1,c2){
  c2=c2||'#e0a526';
  return canvasTex(128,128,(g,w,h)=>{
    g.fillStyle=c1||'#e0a526';g.fillRect(0,0,w,h);
    for(let y=0;y<4;y++)for(let x=0;x<4;x++){
      const cx=x*32+16+(y%2)*16,cy=y*32+16;
      g.fillStyle='#fff6df';g.beginPath();g.arc(cx,cy,11,0,7);g.fill();
      g.fillStyle=c2;g.beginPath();g.arc(cx,cy,7,0,7);g.fill();
      g.fillStyle='#1b1b1b';g.beginPath();g.arc(cx,cy,2.5,0,7);g.fill();
    }
  },2,2);
}
export const stripeTexture=()=>once('stripe',()=>canvasTex(128,64,(g,w,h)=>{
  for(let x=0;x<8;x++){g.fillStyle=x%2?'#fff':'#c0392b';g.fillRect(x*16,0,16,h)}
},3,1));
export function textBoard(lines,w,h,bg,fg,fg2){
  return canvasTex(w,h,(g)=>{
    g.fillStyle=bg;g.fillRect(0,0,w,h);
    g.strokeStyle=fg2||'#f1c40f';g.lineWidth=Math.max(4,h*.04);g.strokeRect(g.lineWidth,g.lineWidth,w-2*g.lineWidth,h-2*g.lineWidth);
    g.textAlign='center';g.textBaseline='middle';
    lines.forEach((l,i)=>{
      g.fillStyle=l.c||fg;g.font=(l.b===false?'':'bold ')+l.s+'px Arial, sans-serif';
      g.fillText(l.t,w/2,h*(l.y||(i+1)/(lines.length+1)),w*.92);
    });
  },1,1);
}
export const paintingTexture=()=>once('painting',()=>canvasTex(256,192,(g,w,h)=>{
  const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#58b4ea');gr.addColorStop(1,'#e3f6ff');g.fillStyle=gr;g.fillRect(0,0,w,h);
  g.fillStyle='#ffe07a';g.beginPath();g.arc(190,45,24,0,7);g.fill();
  g.fillStyle='#4f9c3c';g.beginPath();g.moveTo(0,h);g.quadraticCurveTo(80,80,170,130);g.quadraticCurveTo(220,100,w,h);g.fill();
  g.fillStyle='#2e8b57';g.beginPath();g.arc(60,120,18,0,7);g.fill();g.fillStyle='#6b4226';g.fillRect(58,120,4,30);
},1,1));
export function skyTexture(){
  return canvasTex(8,256,(g,w,h)=>{
    const gr=g.createLinearGradient(0,0,0,h);
    gr.addColorStop(0,'#2f86d6');gr.addColorStop(.5,'#7cc2ee');gr.addColorStop(.82,'#dff3fb');gr.addColorStop(1,'#f2f6e8');
    g.fillStyle=gr;g.fillRect(0,0,w,h);
  },1,1);
}

// Photo de scène (affiche) : null si elle n'existe pas.
export function photoTexture(name){
  if(!(MAN.scenes||[]).includes(name))return null;
  const t=new THREE.TextureLoader().load('img/scenes/'+name+'.jpg');
  t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;
}
