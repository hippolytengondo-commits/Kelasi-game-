// Passage d'une évaluation par l'élève : chrono tenu par le serveur, sauvegarde automatique, reprise après coupure,
// questions et choix mélangés par élève, et mesures anti-triche (sorties de l'application, copier-coller, captures détectées).
// Honnêteté : une application web ne peut pas bloquer les captures d'écran ni les autres applications ; elle les détecte
// quand c'est possible et enregistre tout pour l'enseignant. Le blocage réel des captures demande une application Android native.
import * as C from './cloud.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=s=>{s=Math.max(0,Math.floor(s));const m=Math.floor(s/60),r=s%60;return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0')};
// mélange reproductible (même ordre pour un même élève après une reprise)
function rng(seed){let a=seed>>>0||1;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function melanger(arr,r){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

let courant=null;   // évaluation en cours (une seule à la fois)

export const enCours=()=>!!courant;

// opt : {id, lire(texte), fin(), msg(texte)}
export async function lancer(opt){
  if(courant)return;
  const hote=document.getElementById('ev')||(()=>{const e=document.createElement('div');e.id='ev';document.body.appendChild(e);return e})();
  hote.className='';hote.style.display='block';
  hote.innerHTML='<div class="evb"><p>Chargement de l’évaluation…</p></div>';
  // 1. récupérer les informations (sans démarrer le chrono) : la liste donne titre, durée et consigne
  const l=await C.rpc('eval_liste');
  const info=l.ok&&(l.data||[]).find(z=>z.id===opt.id);
  if(!info){hote.style.display='none';opt.msg&&opt.msg('Évaluation introuvable.');return}
  const dejaRendue=info.statut&&info.statut!=='a_faire'&&info.statut!=='en_cours';
  if(dejaRendue){hote.style.display='none';opt.msg&&opt.msg('Tu as déjà rendu cette évaluation.');return}
  accueil(hote,info,opt);
}

function accueil(hote,info,opt){
  const reprise=info.statut==='en_cours';
  hote.innerHTML=`<div class="evb">
    <h2>📝 ${esc(info.titre)}</h2>
    ${info.consigne?`<p>${esc(info.consigne)}</p>`:''}
    <p><b>${info.nb}</b> question(s) · <b>${info.duree_min} min</b> · ${info.total} point(s)</p>
    <div class="evr"><b>Règles de l’évaluation</b>
      <ul>
        <li>Le chrono est tenu par le serveur : il continue même si tu fermes l’application.</li>
        <li>Tes réponses sont sauvegardées automatiquement.</li>
        <li>Reste dans l’application : chaque <b>sortie</b> (changer d’application, d’onglet, verrouiller l’écran) est enregistrée et vue par ton enseignant. Après plusieurs sorties, ta copie est rendue automatiquement.</li>
        <li>Copier, coller et capture d’écran sont enregistrés.</li>
        <li>Les questions et les choix sont mélangés : ne compare pas avec ton voisin.</li>
        <li>Tu ne peux rendre ta copie qu’une seule fois.</li>
      </ul></div>
    <div class="evbtn"><button class="p" id="evgo">${reprise?'▶ Reprendre l’évaluation':'▶ Commencer maintenant'}</button><button id="evno">Annuler</button></div>
    <p id="evmsg" class="evm"></p></div>`;
  hote.querySelector('#evno').onclick=()=>{hote.style.display='none';hote.innerHTML='';opt.fin&&opt.fin()};
  hote.querySelector('#evgo').onclick=async()=>{
    const b=hote.querySelector('#evgo');b.disabled=true;b.textContent='Un instant…';
    const r=await C.rpc('eval_demarrer',{p_eval:opt.id});
    if(!r.ok){hote.querySelector('#evmsg').textContent=r.err||'Impossible de démarrer.';b.disabled=false;b.textContent='Réessayer';return}
    if(r.data.termine){hote.querySelector('.evb').innerHTML='<h2>⏱ Temps écoulé</h2><p>Le temps de cette évaluation est terminé : ta copie a été rendue avec les réponses sauvegardées.</p><div class="evbtn"><button class="p" id="evok">OK</button></div>';
      hote.querySelector('#evok').onclick=()=>{hote.style.display='none';opt.fin&&opt.fin()};return}
    demarrer(hote,opt,r.data);
  };
}

function demarrer(hote,opt,s){
  const id=opt.id,LS='kelas_eval_'+id;
  const r=rng(s.seed);
  // ordre d'affichage des questions et des choix (propre à l'élève)
  let ordre=s.questions.map((q,i)=>i);
  if(s.melanger)ordre=melanger(ordre,r);
  const opts={};s.questions.forEach(q=>{opts[q.i]=q.t==='qcm'?(s.melanger?melanger(q.opts.map((o,k)=>k),r):q.opts.map((o,k)=>k)):[]});
  let reponses=Object.assign({},s.reponses||{});
  try{const loc=JSON.parse(localStorage.getItem(LS)||'null');if(loc&&loc.reponses)reponses=Object.assign({},loc.reponses,s.reponses)}catch(e){}
  let incidents=Array.isArray(s.incidents)?s.incidents.slice():[];
  let pos=0,restant=s.restant_s,tFin=performance.now()+restant*1000,sale=false,termine=false,derniereSauv=null,hors=false,sorties=incidents.filter(z=>z.type==='sortie').length;
  const t0=performance.now()-(s.duree_s-s.restant_s)*1000;
  courant={id};
  const incident=(type,detail)=>{if(termine)return;if(incidents.length<200)incidents.push({type:type,t:Math.round((performance.now()-t0)/1000),d:detail||undefined});sale=true;ecrireLocal()};
  const ecrireLocal=()=>{try{localStorage.setItem(LS,JSON.stringify({reponses:reponses,incidents:incidents}))}catch(e){}};

  // ---------- dessin ----------
  function dessiner(){
    const qi=ordre[pos],q=s.questions[qi];
    const rep=reponses[String(qi)];
    let corps=`<div class="evq"><div class="evn">Question ${pos+1} sur ${ordre.length} · ${q.pts} point${q.pts>1?'s':''}</div><p class="evt">${esc(q.q)}</p>`;
    if(q.t==='qcm'){
      corps+=opts[qi].map((k,j)=>`<button class="evo ${String(rep)===String(k)?'sel':''}" data-k="${k}"><span>${'ABCDEF'[j]}</span>${esc(q.opts[k])}</button>`).join('');
    }else{
      corps+=`<textarea id="evtxt" rows="6" maxlength="3000" placeholder="Écris ta réponse ici…">${esc(typeof rep==='string'?rep:'')}</textarea><div class="evm">Le copier-coller est désactivé pendant l’évaluation.</div>`;
    }
    corps+='</div>';
    const pastilles=ordre.map((z,j)=>`<i class="${j===pos?'cur':''} ${reponses[String(z)]!==undefined&&reponses[String(z)]!==''?'ok':''}" data-j="${j}">${j+1}</i>`).join('');
    hote.innerHTML=`<div class="evb">
      <div class="evh"><b>${esc(s.titre)}</b><span id="evchr" class="evc">⏱ ${fmt(Math.max(0,(tFin-performance.now())/1000))}</span></div>
      <div class="evp">${pastilles}</div>${corps}
      <div class="evbtn"><button id="evpr" ${pos===0?'disabled':''}>← Précédente</button>
        ${pos<ordre.length-1?'<button class="p" id="evsu">Suivante →</button>':'<button class="p" id="evrendre">✔ Rendre ma copie</button>'}
        ${opt.lire?'<button id="evlire">🔊</button>':''}</div>
      <p id="evinfo" class="evm">${hors?'⚠ Hors ligne : tes réponses sont gardées sur l’appareil et seront envoyées dès que la connexion revient.':(derniereSauv?'💾 Sauvegardé à '+derniereSauv:'')}${sorties?' · Sorties enregistrées : '+sorties+' sur '+s.max_sorties:''}</p></div>`;
    hote.querySelectorAll('.evo').forEach(b=>b.onclick=()=>{reponses[String(qi)]=+b.dataset.k;sale=true;ecrireLocal();sauver();dessiner()});
    const ta=hote.querySelector('#evtxt');if(ta){ta.oninput=()=>{reponses[String(qi)]=ta.value;sale=true;ecrireLocal()};ta.onblur=()=>sauver();ta.onpaste=e=>{e.preventDefault();incident('collage')};ta.oncopy=ta.oncut=e=>{e.preventDefault();incident('copie')}}
    hote.querySelectorAll('.evp i').forEach(i=>i.onclick=()=>{pos=+i.dataset.j;dessiner()});
    const pr=hote.querySelector('#evpr');if(pr)pr.onclick=()=>{pos=Math.max(0,pos-1);dessiner()};
    const su=hote.querySelector('#evsu');if(su)su.onclick=()=>{pos=Math.min(ordre.length-1,pos+1);dessiner()};
    const rd=hote.querySelector('#evrendre');if(rd)rd.onclick=confirmerRendu;
    const li=hote.querySelector('#evlire');if(li)li.onclick=()=>opt.lire(q.q+(q.t==='qcm'?'. '+opts[qi].map((k,j)=>'Réponse '+'ABCDEF'[j]+' : '+q.opts[k]).join('. '):''));
  }
  function confirmerRendu(){
    const vides=s.questions.filter(q=>{const v=reponses[String(q.i)];return v===undefined||v===''}).length;
    hote.innerHTML=`<div class="evb"><h2>Rendre ma copie ?</h2><p>${vides?`<b>${vides}</b> question(s) sans réponse.`:'Toutes les questions ont une réponse.'} Tu ne pourras plus modifier ta copie.</p>
      <div class="evbtn"><button class="p" id="evoui">✔ Oui, rendre ma copie</button><button id="evnon">← Revenir aux questions</button></div></div>`;
    hote.querySelector('#evoui').onclick=()=>rendre('manuel');
    hote.querySelector('#evnon').onclick=dessiner;
  }

  // ---------- sauvegarde ----------
  let enCoursSauv=false;
  async function sauver(){
    if(termine||enCoursSauv||!sale&&!hors)return;
    enCoursSauv=true;
    const rr=await C.rpc('eval_sauver',{p_eval:id,p_reponses:reponses,p_incidents:incidents});
    enCoursSauv=false;
    if(!rr.ok){hors=true;majInfo();return}
    hors=false;sale=false;
    if(rr.data&&rr.data.termine){await finir('temps');return}
    if(typeof rr.data.restant_s==='number')tFin=performance.now()+rr.data.restant_s*1000;   // le serveur fait foi
    derniereSauv=new Date().toLocaleTimeString('fr-FR');majInfo();
  }
  function majInfo(){const e=hote.querySelector('#evinfo');if(e)e.textContent=(hors?'⚠ Hors ligne : tes réponses sont gardées sur l’appareil et seront envoyées dès que la connexion revient.':(derniereSauv?'💾 Sauvegardé à '+derniereSauv:''))+(sorties?' · Sorties enregistrées : '+sorties+' sur '+s.max_sorties:'')}

  // ---------- rendu ----------
  async function rendre(raison){
    if(termine)return;termine=true;
    hote.innerHTML='<div class="evb"><p>Envoi de ta copie…</p></div>';
    let r=await C.rpc('eval_soumettre',{p_eval:id,p_reponses:reponses,p_incidents:incidents});
    for(let k=0;!r.ok&&k<4;k++){await new Promise(z=>setTimeout(z,1500));r=await C.rpc('eval_soumettre',{p_eval:id,p_reponses:reponses,p_incidents:incidents})}
    if(!r.ok){termine=false;hote.innerHTML=`<div class="evb"><h2>Connexion impossible</h2><p>Ta copie n’a pas pu être envoyée. Tes réponses sont gardées sur l’appareil. Vérifie ta connexion puis réessaie ; le chrono continue.</p><div class="evbtn"><button class="p" id="evre">Réessayer</button></div></div>`;hote.querySelector('#evre').onclick=()=>rendre(raison);return}
    await finir(raison);
  }
  async function finir(raison){
    termine=true;nettoyer();
    try{localStorage.removeItem(LS)}catch(e){}
    const titre={manuel:'✔ Copie rendue',temps:'⏱ Temps écoulé : copie rendue',sorties:'🚪 Trop de sorties : copie rendue automatiquement'}[raison]||'✔ Copie rendue';
    hote.innerHTML=`<div class="evb"><h2>${titre}</h2><p>Ton enseignant va corriger ta copie. Tu verras ton résultat dans « Mes évaluations » dès qu’il l’aura publié.</p><div class="evbtn"><button class="p" id="evok">OK</button></div></div>`;
    hote.querySelector('#evok').onclick=()=>{hote.style.display='none';hote.innerHTML='';opt.fin&&opt.fin()};
    courant=null;
  }

  // ---------- anti-triche ----------
  const handlers=[];
  const ecoute=(cible,ev,fn,o)=>{cible.addEventListener(ev,fn,o);handlers.push([cible,ev,fn,o])};
  let sortieDebut=0;
  ecoute(document,'visibilitychange',()=>{
    if(termine)return;
    if(document.hidden){sortieDebut=performance.now();return}
    // retour dans l'application : une sortie est comptée
    sorties++;incident('sortie',Math.round((performance.now()-sortieDebut)/1000));
    sauver();majInfo();avertir('⚠ Sortie enregistrée ('+sorties+' sur '+s.max_sorties+'). Reste dans l’application pendant l’évaluation.');
    if(sorties>=s.max_sorties)rendre('sorties').then(()=>{});
  });
  ecoute(window,'blur',()=>{if(!termine&&!document.hidden)incident('focus')});
  ecoute(document,'contextmenu',e=>{e.preventDefault()});
  ['copy','cut'].forEach(ev=>ecoute(document,ev,e=>{e.preventDefault();incident(ev==='copy'?'copie':'coupe')}));
  ecoute(document,'paste',e=>{e.preventDefault();incident('collage')});
  ecoute(document,'dragstart',e=>e.preventDefault());
  ecoute(document,'keyup',e=>{if(e.key==='PrintScreen'){incident('capture');avertir('⚠ Capture d’écran détectée : elle est enregistrée et vue par ton enseignant.')}});
  ecoute(document,'keydown',e=>{
    const k=(e.key||'').toLowerCase();
    if((e.ctrlKey||e.metaKey)&&['c','v','x','p','s','u','a'].includes(k)&&!(e.target&&e.target.id==='evtxt'&&(k==='a'))){e.preventDefault();incident('raccourci',k);return}
    if(e.key==='F12'||((e.ctrlKey||e.metaKey)&&e.shiftKey&&['i','j','c'].includes(k))){e.preventDefault();incident('outils')}
  });
  ecoute(window,'offline',()=>{hors=true;incident('hors_ligne');majInfo()});
  ecoute(window,'online',()=>{hors=false;sale=true;sauver()});
  const aire0=window.innerWidth*window.innerHeight;
  ecoute(window,'resize',()=>{if(termine)return;const a=window.innerWidth*window.innerHeight;if(a<aire0*.7&&!ecoute.avert){ecoute.avert=1;incident('fenetre');avertir('⚠ La fenêtre a été réduite : reste en plein écran pendant l’évaluation.')}if(a>=aire0*.9)ecoute.avert=0});
  ecoute(window,'beforeunload',e=>{if(!termine){e.preventDefault();e.returnValue=''}});
  ecoute(document,'fullscreenchange',()=>{if(!termine&&!document.fullscreenElement){incident('plein_ecran')}});
  try{(hote.requestFullscreen||hote.webkitRequestFullscreen||(()=>Promise.resolve())).call(hote).catch(()=>{})}catch(e){}
  hote.classList.add('evsec');
  function avertir(t){let a=document.getElementById('evalert');if(!a){a=document.createElement('div');a.id='evalert';document.body.appendChild(a)}a.textContent=t;a.style.display='block';clearTimeout(avertir.t);avertir.t=setTimeout(()=>{a.style.display='none'},6000)}
  function nettoyer(){
    handlers.forEach(([c,ev,fn,o])=>c.removeEventListener(ev,fn,o));handlers.length=0;
    clearInterval(tic);clearInterval(auto);hote.classList.remove('evsec');
    try{if(document.fullscreenElement)document.exitFullscreen()}catch(e){}
    const a=document.getElementById('evalert');if(a)a.style.display='none';
  }

  // chrono (affichage) et sauvegarde périodique
  const tic=setInterval(()=>{
    if(termine)return;
    const reste=(tFin-performance.now())/1000;
    const c=hote.querySelector('#evchr');if(c){c.textContent='⏱ '+fmt(reste);c.classList.toggle('urgent',reste<60)}
    if(reste<=0)rendre('temps');
  },500);
  const auto=setInterval(()=>sauver(),10000);
  dessiner();
}
