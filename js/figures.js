const PEAUX=['#8d5a3b','#5e3b24','#b67a50'];
const AGE_S={enfant:.62,ado:.8,adulte:.95,aine:.92};
const fs=(t,w,m)=>Math.min(m,w/(t.length*0.62));
function cloud(x,y){return `<g fill="#fff" opacity=".85"><ellipse cx="${x}" cy="${y}" rx="22" ry="8"/><ellipse cx="${x+14}" cy="${y-5}" rx="14" ry="9"/></g>`}
function desk(x){return `<rect x="${x-34}" y="122" width="68" height="6" rx="2" fill="#a0683a"/><rect x="${x-30}" y="128" width="4" height="22" fill="#6b4226"/><rect x="${x+26}" y="128" width="4" height="22" fill="#6b4226"/>`}
function gest(g){
  switch(g){
    case 'wave':return['-150;-120;-150','.9s','4;-4;4','2s'];
    case 'point':return['-92;-78;-92','1.2s','4;-4;4','2s'];
    case 'clap':return['0;50;0','.5s','0;-50;0','.5s'];
    case 'talk':return['-25;-8;-25','1.4s','8;-8;8','1.8s'];
    case 'walk':return['-14;14;-14','.7s','14;-14;14','.7s'];
    default:return['3;-3;3','2.4s','-3;3;-3','2.4s'];
  }
}
// p.sit : position assise (jambes horizontales), la hanche reste à la hauteur de l'assise.
function figure(p){
  const w=p.w||1,sk=p.skin||PEAUX[0],tc=p.c||'#2e86de',k=p.k||'uniforme',g=p.g||'idle',HC='#1d130c';
  const trousers=k==='uniforme'||(k==='pagne'&&p.s==='h');
  const longW=k==='boubou',skirt=!longW&&!trousers;
  const bw=17*w,lc=trousers?'#2b2b3a':sk;
  const ani=(v,d,b)=>`<animateTransform attributeName="transform" type="rotate" values="${v}" dur="${d}" repeatCount="indefinite" begin="${b||'0s'}"/>`;
  const [rv,rd,lv,ld]=gest(g);
  let s=`<ellipse cx="0" cy="2" rx="${16*w}" ry="4" fill="#000" opacity=".25"/>`;
  // jambes
  if(!longW&&p.sit){
    [0,1].forEach(i=>{
      const d=i?1:-1;
      s+=`<g transform="translate(${d*5*w},-48)"><line x1="0" y1="0" x2="12" y2="0" stroke="${lc}" stroke-width="${trousers?9*w:6}" stroke-linecap="round"/><line x1="12" y1="0" x2="12" y2="48" stroke="${lc}" stroke-width="${trousers?8*w:5}" stroke-linecap="round"/><ellipse cx="14" cy="49" rx="6" ry="3" fill="#2b1d12"/></g>`;
    });
  }else if(!longW){
    [0,1].forEach(i=>{
      const d=i?1:-1;
      const anim=g==='walk'?ani(i?'16;-16;16':'-16;16;-16','.7s',i?'-0.35s':'0s'):'';
      s+=`<g transform="translate(${d*5*w},-48)"><g>${anim}<line x1="0" y1="0" x2="0" y2="44" stroke="${lc}" stroke-width="${trousers?9*w:6}" stroke-linecap="round"/><ellipse cx="2" cy="46" rx="6" ry="3" fill="#2b1d12"/></g></g>`;
    });
  }
  // tronc et vêtement
  if(longW){
    const path=`M${-bw} -90 Q${-bw-3} -60 ${-bw-8*w} -2 L${bw+8*w} -2 Q${bw+3} -60 ${bw} -90 Z`;
    s+=`<path d="${path}" fill="${tc}"/><path d="${path}" fill="url(#gShade)"/>`;
  }else{
    s+=`<rect x="${-bw}" y="-90" width="${2*bw}" height="46" rx="10" fill="${tc}"/>`;
    if(skirt){
      const f=k==='pagne'?'url(#pWax)':tc;
      s+=`<path d="M${-bw+1} -48 L${-bw-7*w} -6 Q0 2 ${bw+7*w} -6 L${bw-1} -48 Z" fill="${f}"/>`;
    }
    s+=`<rect x="${-bw}" y="-90" width="${2*bw}" height="46" rx="10" fill="url(#gShade)"/>`;
  }
  s+=`<rect x="-4" y="-94" width="8" height="8" fill="${sk}"/>`;
  // bras
  const arm=(side,anim)=>`<g transform="translate(${side*(bw+1)},-84)"><g>${anim}<line x1="0" y1="0" x2="${side*2}" y2="25" stroke="${tc}" stroke-width="${8*w}" stroke-linecap="round"/><line x1="${side*2}" y1="25" x2="${side*3}" y2="40" stroke="${sk}" stroke-width="${6*w}" stroke-linecap="round"/></g></g>`;
  s+=arm(-1,ani(lv,ld))+arm(1,ani(rv,rd));
  if(p.a==='aine')s+=`<line x1="${-bw-6}" y1="-44" x2="${-bw-9}" y2="0" stroke="#7a4a26" stroke-width="2.5" stroke-linecap="round"/>`;
  if(p.montre)s+=`<circle cx="${-bw-6}" cy="-44" r="3" fill="#d9d9d9" stroke="#333" stroke-width="1"/>`;
  // tête et coiffure
  const hb=g==='talk'?ani('-3;3;-3','1.4s'):'';
  const braids=p.co==='nattes'?`<rect x="-13" y="-4" width="4" height="22" rx="2" fill="${HC}"/><rect x="9" y="-4" width="4" height="22" rx="2" fill="${HC}"/><circle cx="-11" cy="18" r="1.6" fill="#e0a526"/><circle cx="11" cy="18" r="1.6" fill="#e0a526"/>`:'';
  let hair;
  if(p.co==='gris')hair=`<path d="M-11.5 0 Q-12.5 -17 0 -17.5 Q12.5 -17 11.5 0 Q7 -9 0 -9.5 Q-7 -9 -11.5 0Z" fill="#d6d6d6"/>`;
  else if(p.co==='tresses')hair=`<path d="M-11.5 0 Q-12.5 -18.5 0 -18.5 Q12.5 -18.5 11.5 0 Q7 -9.5 0 -10 Q-7 -9.5 -11.5 0Z" fill="${HC}"/>`+[-10,-7,7,10].map(x=>`<line x1="${x}" y1="-4" x2="${x}" y2="10" stroke="${HC}" stroke-width="2.2" stroke-linecap="round"/>`).join('');
  else hair=`<path d="M-11.5 0 Q-12 -19 0 -19.5 Q12 -19 11.5 0 Q7 -10 2 -10.5 Q-3 -9 -8 -8 Q-10 -6 -11.5 0Z" fill="${HC}"/>`;
  const face=`<path d="M-11 -2 Q-11 12 0 13 Q11 12 11 -2 Q11 -12 0 -12 Q-11 -12 -11 -2Z" fill="${sk}"/>`
    +`<path d="M-11 -2 Q-11 12 0 13 Q11 12 11 -2 Q11 -12 0 -12 Q-11 -12 -11 -2Z" fill="url(#gShade)" opacity=".4"/>`
    +`<ellipse cx="-6" cy="5" rx="3" ry="2" fill="#ff7b6b" opacity=".22"/><ellipse cx="6" cy="5" rx="3" ry="2" fill="#ff7b6b" opacity=".22"/>`;
  const ears=`<ellipse cx="-11.5" cy="1" rx="2.2" ry="3.2" fill="${sk}"/><ellipse cx="11.5" cy="1" rx="2.2" ry="3.2" fill="${sk}"/>`;
  const eyes=`<ellipse cx="-4.2" cy="0" rx="2.4" ry="1.9" fill="#fff"/><ellipse cx="4.2" cy="0" rx="2.4" ry="1.9" fill="#fff"/>`
    +`<circle cx="-4.2" cy="0.2" r="1.35" fill="${HC}"/><circle cx="4.2" cy="0.2" r="1.35" fill="${HC}"/>`
    +`<circle cx="-3.7" cy="-0.3" r=".45" fill="#fff"/><circle cx="4.7" cy="-0.3" r=".45" fill="#fff"/>`
    +`<path d="M-6.8 -3.4 Q-4.2 -5 -1.6 -3.4" stroke="${HC}" stroke-width="1" fill="none" stroke-linecap="round"/>`
    +`<path d="M1.6 -3.4 Q4.2 -5 6.8 -3.4" stroke="${HC}" stroke-width="1" fill="none" stroke-linecap="round"/>`;
  const nose=`<path d="M0 0.8 Q-1.4 3.6 0.7 4 Q1.5 4.1 2 3.5" stroke="#4a2f1b" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/>`;
  const mouth=`<path d="M-3.6 7 Q0 9.4 3.6 7 Q0 8 -3.6 7Z" fill="#8e3b33"/><path d="M-3 7.2 Q0 7.8 3 7.2" stroke="#e8b4a0" stroke-width=".5" fill="none" opacity=".6"/>`;
  s+=`<g transform="translate(0,-101)"><g>${hb}${braids}${ears}${face}${hair}${eyes}${nose}${mouth}`
    +(p.s==='f'?`<circle cx="-11.5" cy="5" r="1.3" fill="#e0a526"/><circle cx="11.5" cy="5" r="1.3" fill="#e0a526"/>`:'')
    +`</g></g>`;
  return s;
}
function drawFig(p,x){
  const sc=p.sc||AGE_S[p.a]||1;
  return `<g transform="translate(${x},150) scale(${sc})">${figure(p)}</g>`;
}
