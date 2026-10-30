import * as C from './cloud.js';
import {lancer} from './evaluation.js';

// Évaluations (enseignant : créer, corriger, publier ; élève : passer, voir son résultat) et communiqués avec accusé de lecture.
// Les écrans s'insèrent dans la fenêtre « Mon compte » (espace.js).
export function makeEvalViews(h){
  const {esc,D,maj,val,entete,retour,msg}=h;
  const dt=iso=>iso?new Date(iso).toLocaleString('fr-FR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}):'—';
  const local=d=>{const z=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())+'T'+z(d.getHours())+':'+z(d.getMinutes())};
  const LIB={sortie:'sortie(s) de l’application',focus:'perte(s) de focus',collage:'collage(s)',copie:'copie(s)',coupe:'coupe(s)',capture:'capture(s) d’écran',raccourci:'raccourci(s) clavier',outils:'outils développeur',hors_ligne:'coupure(s) réseau',fenetre:'fenêtre réduite',plein_ecran:'sortie(s) du plein écran'};
  const resumeIncidents=inc=>{const c={};(inc||[]).forEach(z=>{c[z.type]=(c[z.type]||0)+1});return Object.keys(c).map(k=>c[k]+' '+(LIB[k]||k)).join(' · ')};
  const gravite=inc=>{const n=(inc||[]).filter(z=>['sortie','capture','collage','copie','coupe','raccourci','outils'].includes(z.type)).length;return n===0?'ok':n<=2?'moyen':'fort'};
  const pastille=g=>g==='ok'?'🟢':g==='moyen'?'🟠':'🔴';

  function html(d){
    switch(d.vue){
      case 'evmes':return vueEvMes(d);
      case 'evres':return vueEvRes(d);
      case 'commes':return vueComMes(d);
      case 'comlire':return vueComLire(d);
      case 'evprof':return vueEvProf(d);
      case 'evnouv':return vueEvNouv(d);
      case 'evcop':return vueEvCop(d);
      case 'evcopie':return vueEvCopie(d);
      case 'comprof':return vueComProf(d);
      case 'comnouv':return vueComNouv(d);
      case 'comsuivi':return vueComSuivi(d);
    }
    return null;
  }

  // ---------------------------------------------------------------- élève : mes évaluations
  function vueEvMes(d){
    let s=entete('📝 Mes évaluations')+msg(d);
    if(!d.evals){chargerEvMes();return s+'<p>Chargement…</p>'+retour('')}
    if(!d.evals.length)s+='<p style="font-size:13px">Aucune évaluation pour le moment.</p>';
    d.evals.forEach(e=>{
      const maintenant=new Date(e.maintenant||Date.now()),ouvert=new Date(e.ouvre)<=maintenant&&maintenant<=new Date(e.ferme);
      const etat=e.statut==='en_cours'?'▶ En cours : reprends-la':e.statut==='a_faire'?(ouvert?'À passer maintenant':(maintenant<new Date(e.ouvre)?'Ouvre le '+dt(e.ouvre):'Fermée')):(e.statut==='corrigee'&&e.visible?'✔ Résultat disponible':'✔ Rendue · en attente de correction');
      const bouton=(e.statut==='a_faire'&&ouvert)||e.statut==='en_cours'?`<button class="p" onclick="evPasser('${e.id}')">📝 ${esc(e.titre)}<br><small>${etat} · ${e.nb} question(s) · ${e.duree_min} min · jusqu’au ${dt(e.ferme)}</small></button>`
        :e.statut!=='a_faire'?`<button onclick="evResultat('${e.id}','${esc(e.titre).replace(/'/g,'’')}')">📝 ${esc(e.titre)}<br><small>${etat}</small></button>`
        :`<button disabled>📝 ${esc(e.titre)}<br><small>${etat}</small></button>`;
      s+=bouton;
    });
    return s+retour('');
  }
  async function chargerEvMes(){
    const r=await C.rpc('eval_liste');
    if(D()&&D().vue==='evmes')maj({evals:r.ok?r.data:[],msg:r.ok?'':r.err,erreur:!r.ok});
  }
  function passer(id){
    const dlg=document.getElementById('dlg');if(dlg)dlg.style.display='none';
    lancer({id:id,lire:t=>h.lire&&h.lire(t),msg:t=>{if(dlg)dlg.style.display='block';maj({msg:t,erreur:true})},
      fin:()=>{if(dlg)dlg.style.display='block';maj({vue:'evmes',evals:null,msg:'',erreur:false});h.apres&&h.apres()}});
  }
  async function resultat(id,titre){maj({vue:'evres',evTitre:titre,evId:id,evRes:null,msg:''})}
  function vueEvRes(d){
    let s=entete('📝 '+(d.evTitre||'Évaluation'))+msg(d);
    if(!d.evRes){chargerEvRes(d.evId);return s+'<p>Chargement…</p>'+retour('evmes','← Mes évaluations')}
    const r=d.evRes;
    if(!r.disponible)return s+`<p style="font-size:13px">${esc(r.raison||'Résultat non disponible.')}</p>`+retour('evmes','← Mes évaluations');
    s+=`<div class="mscore">${r.points} sur ${r.total}</div>`+(r.commentaire?`<p><b>Commentaire de l’enseignant :</b> ${esc(r.commentaire)}</p>`:'');
    (r.detail||[]).forEach((q,i)=>{
      const rep=q.ta_reponse;
      s+=`<h4>Question ${i+1}</h4><p style="font-size:13px">${esc(q.q)}</p>`;
      if(q.t==='qcm'){
        const ok=String(rep)===String(q.bonne);
        s+=`<p style="font-size:13px">${ok?'✔':'✖'} Ta réponse : <b>${rep===null||rep===undefined?'—':esc(q.opts[rep])}</b></p>`+(ok?'':`<p style="font-size:13px">Bonne réponse : <b>${esc(q.opts[q.bonne])}</b></p>`);
      }else s+=`<p style="font-size:13px">Ta réponse : ${rep?esc(rep):'—'}</p><p style="font-size:13px">Note : <b>${q.note===null||q.note===undefined?'non notée':q.note+' sur '+q.pts}</b></p>`;
      if(q.expl)s+=`<p style="font-size:12px;opacity:.8">💡 ${esc(q.expl)}</p>`;
    });
    return s+retour('evmes','← Mes évaluations');
  }
  async function chargerEvRes(id){
    const r=await C.rpc('eval_resultat',{p_eval:id});
    if(D()&&D().vue==='evres')maj({evRes:r.ok?r.data:{disponible:false,raison:r.err}});
  }

  // ---------------------------------------------------------------- élève : communiqués
  function vueComMes(d){
    let s=entete('📢 Communiqués')+msg(d);
    if(!d.coms){chargerComMes();return s+'<p>Chargement…</p>'+retour('')}
    if(!d.coms.length)s+='<p style="font-size:13px">Aucun communiqué.</p>';
    d.coms.forEach(c=>{
      const lu=d.lus&&d.lus.has(c.id);
      s+=`<button class="${lu?'':'p'}" onclick="comLire('${c.id}')">${c.important?'❗ ':''}${lu?'':'🔵 '}${esc(c.titre)}<br><small>${dt(c.created_at)}${lu?' · lu':' · non lu'}</small></button>`;
    });
    return s+retour('');
  }
  async function chargerComMes(){
    const [a,b]=await Promise.all([C.lireTable('communiques?select=id,titre,texte,important,created_at,fichier_chemin,fichier_nom,fichier_type&order=created_at.desc&limit=50'),C.lireTable('communique_lus?select=communique_id')]);
    if(D()&&D().vue==='commes')maj({coms:a.ok?a.data:[],lus:new Set((b.ok?b.data:[]).map(z=>z.communique_id)),msg:a.ok?'':a.err,erreur:!a.ok});
  }
  async function lire(id){
    const c=D().coms.find(z=>z.id===id);
    maj({vue:'comlire',com:c,accuse:null,msg:''});
    const r=await C.rpc('communique_lu',{p_id:id});
    if(D()&&D().vue==='comlire'){
      if(D().lus)D().lus.add(id);
      maj({accuse:r.ok});h.apres&&h.apres();
    }
  }
  function boutonFichier(c){
    if(!c||!c.fichier_chemin)return '';
    const ic=/pdf/.test(c.fichier_type||'')?'📄':/^image/.test(c.fichier_type||'')?'🖼':'📝';
    return `<button class="p" onclick="comFichier('${c.id}')">${ic} Ouvrir : ${esc(c.fichier_nom||'fichier joint')}</button>`;
  }
  async function ouvrirFichier(id){
    const c=[].concat(D().coms||[],D().comsProf||[]).find(z=>z.id===id);if(!c)return;
    maj({msg:'Ouverture du fichier…',erreur:false});
    const r=await C.lireFichier(c.fichier_chemin);
    if(!r.ok){maj({msg:r.err,erreur:true});return}
    const u=URL.createObjectURL(r.blob);
    if(/^image|pdf/.test(c.fichier_type||'')&&window.open(u,'_blank')){maj({msg:'',erreur:false});return}
    const a=document.createElement('a');a.href=u;a.download=c.fichier_nom||'communique';document.body.appendChild(a);a.click();a.remove();
    maj({msg:'',erreur:false});
  }
  function vueComLire(d){
    const c=d.com;
    return entete((c.important?'❗ ':'')+c.titre)+`<p style="font-size:12px;opacity:.7">${dt(c.created_at)}</p>${c.texte?`<p style="white-space:pre-wrap">${esc(c.texte)}</p>`:''}`+boutonFichier(c)
      +(d.accuse===true?'<p class="ok">✔ Ta lecture est enregistrée : ton enseignant sait que tu as lu ce communiqué.</p>':d.accuse===false?'<p class="ko">Lecture non enregistrée (connexion). Réessaie plus tard.</p>':'<p style="font-size:12px;opacity:.7">Enregistrement de ta lecture…</p>')
      +retour('commes','← Communiqués');
  }

  // ---------------------------------------------------------------- enseignant : évaluations d'une classe
  function vueEvProf(d){
    const c=d.classe;
    let s=entete('📝 Évaluations · '+c.nom)+msg(d);
    if(!d.evsProf){chargerEvProf(c.id);return s+'<p>Chargement…</p>'+retour('classe','← Classe')}
    if(!d.evsProf.length)s+='<p style="font-size:13px">Aucune évaluation. Crée la première : QCM (corrigé automatiquement) et questions ouvertes (corrigées par toi).</p>';
    d.evsProf.forEach(e=>{
      s+=`<button onclick="evCopies('${e.id}')">📝 ${esc(e.titre)}<br><small>${e.questions.length} question(s) · ${e.duree_min} min · ${dt(e.ouvre)} → ${dt(e.ferme)} · résultats ${e.resultats_visibles?'publiés':'non publiés'}</small></button>`;
    });
    return s+`<button class="p" onclick="evNouv()">+ Nouvelle évaluation</button>`+retour('classe','← Classe');
  }
  async function chargerEvProf(id){
    const r=await C.lireTable('evaluations?select=id,titre,duree_min,ouvre,ferme,resultats_visibles,questions&class_id=eq.'+id+'&order=created_at.desc');
    if(D()&&D().vue==='evprof')maj({evsProf:r.ok?r.data:[],msg:r.ok?'':r.err,erreur:!r.ok});
  }

  // ---------------------------------------------------------------- enseignant : créer une évaluation
  const qVide=t=>t==='qcm'?{t:'qcm',q:'',opts:['','','',''],bonne:0,pts:1,expl:''}:{t:'ouverte',q:'',pts:3,expl:''};
  function nouv(){
    const m=new Date();m.setSeconds(0,0);const f=new Date(m.getTime()+24*3600e3);
    maj({vue:'evnouv',ev:{titre:'',consigne:'',duree:30,ouvre:local(m),ferme:local(f),melanger:true,max:3,qs:[qVide('qcm')]},msg:'',erreur:false});
  }
  function lireEv(){
    const d=D(),e=Object.assign({},d.ev);
    e.titre=val('evTitre');e.consigne=val('evConsigne');e.duree=+val('evDuree')||0;e.ouvre=val('evOuvre');e.ferme=val('evFerme');
    e.melanger=!!(document.getElementById('evMel')||{}).checked;e.max=+val('evMax')||3;
    e.qs=(d.ev.qs||[]).map((q,i)=>{
      const n=Object.assign({},q);n.q=val('evq'+i);n.pts=Math.max(.5,+val('evpts'+i)||1);n.expl=val('evx'+i);
      if(q.t==='qcm'){n.opts=(q.opts||[]).map((o,k)=>val('evo'+i+'_'+k));const r=document.querySelector('input[name="evb'+i+'"]:checked');n.bonne=r?+r.value:q.bonne}
      return n;
    });
    return e;
  }
  function vueEvNouv(d){
    const e=d.ev;
    let s=entete('Nouvelle évaluation')+msg(d)
      +`<input id="evTitre" maxlength="120" placeholder="Titre de l’évaluation" value="${esc(e.titre)}">`
      +`<textarea id="evConsigne" rows="2" maxlength="1000" placeholder="Consigne pour les élèves (facultatif)">${esc(e.consigne)}</textarea>`
      +`<div class="row"><span>Durée (minutes)</span><input id="evDuree" type="number" min="1" max="240" value="${e.duree}" style="width:90px"></div>`
      +`<div class="row"><span>Ouvre le</span><input id="evOuvre" type="datetime-local" value="${esc(e.ouvre)}"></div>`
      +`<div class="row"><span>Ferme le</span><input id="evFerme" type="datetime-local" value="${esc(e.ferme)}"></div>`
      +`<label style="display:block;margin:6px 0;font-size:13px"><input id="evMel" type="checkbox" ${e.melanger?'checked':''}> Mélanger les questions et les choix pour chaque élève</label>`
      +`<div class="row"><span>Sorties tolérées avant rendu automatique</span><input id="evMax" type="number" min="1" max="20" value="${e.max}" style="width:70px"></div>`;
    e.qs.forEach((q,i)=>{
      s+=`<div style="border:1px solid #d9d2bd;border-radius:10px;padding:8px;margin:8px 0"><b>Question ${i+1} · ${q.t==='qcm'?'QCM':'Question ouverte'}</b>`
        +`<textarea id="evq${i}" rows="2" maxlength="500" placeholder="Énoncé">${esc(q.q)}</textarea>`;
      if(q.t==='qcm')s+=q.opts.map((o,k)=>`<div style="display:flex;gap:6px;align-items:center"><input type="radio" name="evb${i}" value="${k}" ${q.bonne===k?'checked':''} title="Bonne réponse"><input id="evo${i}_${k}" maxlength="200" placeholder="Choix ${'ABCDEF'[k]}" value="${esc(o)}" style="flex:1"></div>`).join('')
        +`<p style="font-size:12px;opacity:.7;margin:2px 0">Coche la bonne réponse (le serveur corrige automatiquement). ${q.opts.length<6?`<a href="#" onclick="evAjoutChoix(${i});return false">+ un choix</a>`:''}</p>`;
      else s+=`<p style="font-size:12px;opacity:.7;margin:2px 0">L’élève écrit sa réponse ; tu la notes toi-même.</p>`;
      s+=`<div class="row"><span>Points</span><input id="evpts${i}" type="number" min="0.5" step="0.5" value="${q.pts}" style="width:80px"></div>`
        +`<input id="evx${i}" maxlength="300" placeholder="Explication montrée avec le résultat (facultatif)" value="${esc(q.expl||'')}">`
        +(e.qs.length>1?`<button class="s" onclick="evSuppQ(${i})">Supprimer cette question</button>`:'')+`</div>`;
    });
    s+=`<div class="row"><button onclick="evAjoutQ('qcm')">+ QCM</button><button onclick="evAjoutQ('ouverte')">+ Question ouverte</button></div>`
      +`<button class="p" onclick="evCreer()">✔ Publier l’évaluation</button>`+retour('evprof','← Annuler');
    return s;
  }
  const evAjoutQ=t=>{const e=lireEv();e.qs.push(qVide(t));maj({ev:e})};
  const evSuppQ=i=>{const e=lireEv();e.qs.splice(i,1);maj({ev:e})};
  const evAjoutChoix=i=>{const e=lireEv();e.qs[i].opts.push('');maj({ev:e})};
  async function creer(){
    const e=lireEv(),d=D();
    const err=t=>{maj({ev:e,msg:t,erreur:true})};
    if(e.titre.length<2)return err('Donne un titre à l’évaluation.');
    if(e.duree<1||e.duree>240)return err('La durée doit être comprise entre 1 et 240 minutes.');
    const o=new Date(e.ouvre),f=new Date(e.ferme);
    if(isNaN(o)||isNaN(f))return err('Choisis les dates d’ouverture et de fermeture.');
    if(f<=o)return err('La fermeture doit être après l’ouverture.');
    const questions=[];
    for(let i=0;i<e.qs.length;i++){
      const q=e.qs[i];
      if(!q.q)return err('Écris l’énoncé de la question '+(i+1)+'.');
      if(q.t==='qcm'){
        const garde=[];let bonne=-1;
        q.opts.forEach((x,k)=>{if(x){if(k===q.bonne)bonne=garde.length;garde.push(x)}});
        if(garde.length<2)return err('La question '+(i+1)+' doit avoir au moins deux choix.');
        if(bonne<0)return err('Indique la bonne réponse de la question '+(i+1)+' (elle doit avoir un texte).');
        questions.push({t:'qcm',q:q.q,opts:garde,bonne:bonne,pts:q.pts,expl:q.expl||undefined});
      }else questions.push({t:'ouverte',q:q.q,pts:q.pts,expl:q.expl||undefined});
    }
    maj({ev:e,msg:'Publication…',erreur:false});
    const r=await C.inserer('evaluations',{class_id:d.classe.id,titre:e.titre,consigne:e.consigne||null,duree_min:e.duree,ouvre:o.toISOString(),ferme:f.toISOString(),melanger:e.melanger,max_sorties:Math.max(1,Math.min(20,e.max)),questions:questions});
    if(!r.ok){maj({ev:e,msg:r.err||'Création impossible.',erreur:true});return}
    maj({vue:'evprof',evsProf:null,msg:'Évaluation publiée : les élèves de la classe la voient dans « Mes évaluations ».',erreur:false});
  }

  // ---------------------------------------------------------------- enseignant : copies et correction
  function copies(id){maj({vue:'evcop',evId:id,evData:null,msg:''})}
  async function chargerCop(id){
    const r=await C.rpc('eval_resultats_prof',{p_eval:id});
    if(D()&&D().vue==='evcop')maj({evData:r.ok?r.data:{questions:[],copies:[]},msg:r.ok?'':r.err,erreur:!r.ok});
  }
  const totalQ=qs=>qs.reduce((a,q)=>a+(+q.pts||1),0);
  const noteCopie=c=>(+c.score_auto||0)+Object.values(c.notes||{}).reduce((a,v)=>a+(+v||0),0);
  function vueEvCop(d){
    const e=d.evsProf&&d.evsProf.find(z=>z.id===d.evId);
    let s=entete('📝 '+(e?e.titre:'Évaluation'))+msg(d);
    if(!d.evData){chargerCop(d.evId);return s+'<p>Chargement…</p>'+retour('evprof','← Évaluations')}
    const q=d.evData.questions,tot=totalQ(q),cps=d.evData.copies,rendues=cps.filter(c=>c.statut!=='absent'&&c.statut!=='en_cours');
    s+=`<p style="font-size:13px">${rendues.length} copie(s) rendue(s) sur ${cps.length} · total ${tot} point(s)</p>`;
    cps.forEach(c=>{
      const g=gravite(c.incidents),ico=c.statut==='absent'?'⚪':pastille(g);
      s+=`<button ${c.statut==='absent'?'disabled':''} onclick="evCopie('${c.id}')">${ico} ${esc(c.pseudo)} · ${c.statut==='absent'?'n’a pas commencé':c.statut==='en_cours'?'en cours':(c.statut==='a_corriger'?'à corriger · ':'corrigée · ')+noteCopie(c)+' / '+tot}<br><small>${resumeIncidents(c.incidents)||'aucun incident'}</small></button>`;
    });
    const vis=e&&e.resultats_visibles;
    s+=`<button class="${vis?'':'p'}" onclick="evPublier('${d.evId}',${!vis})">${vis?'🙈 Masquer les résultats aux élèves':'📣 Publier les résultats aux élèves'}</button>`
      +`<p style="font-size:12px;opacity:.75">Légende : 🟢 aucun incident · 🟠 1 à 2 incidents · 🔴 3 incidents ou plus. Les incidents sont des indices, pas des preuves : discute avec l’élève avant toute décision.</p>`;
    return s+retour('evprof','← Évaluations');
  }
  function copie(id){maj({vue:'evcopie',evCopieId:id,msg:''})}
  function vueEvCopie(d){
    const c=d.evData.copies.find(z=>z.id===d.evCopieId),qs=d.evData.questions,tot=totalQ(qs);
    let s=entete('📄 Copie de '+c.pseudo)+msg(d)+`<p style="font-size:13px">Commencée : ${dt(c.demarre)} · rendue : ${dt(c.soumis_le)} · note actuelle <b>${noteCopie(c)} / ${tot}</b></p>`
      +`<p style="font-size:13px">${pastille(gravite(c.incidents))} Incidents : ${resumeIncidents(c.incidents)||'aucun'}</p>`;
    if((c.incidents||[]).length)s+=`<details><summary style="font-size:12px">Détail des incidents</summary><p style="font-size:12px">${c.incidents.map(z=>esc((LIB[z.type]||z.type)+' à '+z.t+' s'+(z.type==='sortie'&&z.d?' (durée '+z.d+' s)':''))).join('<br>')}</p></details>`;
    qs.forEach((q,i)=>{
      const rep=c.reponses[String(i)];
      s+=`<h4>Question ${i+1} (${q.pts} pt)</h4><p style="font-size:13px">${esc(q.q)}</p>`;
      if(q.t==='qcm'){
        const ok=rep!==undefined&&String(rep)===String(q.bonne);
        s+=`<p style="font-size:13px">${ok?'✔':'✖'} Réponse : <b>${rep===undefined?'—':esc(q.opts[rep])}</b>${ok?'':' · bonne réponse : <b>'+esc(q.opts[q.bonne])+'</b>'}</p>`;
      }else{
        s+=`<p style="font-size:13px;background:#f6f1e3;padding:8px;border-radius:8px;white-space:pre-wrap">${rep?esc(rep):'(pas de réponse)'}</p>`
          +`<div class="row"><span>Note (sur ${q.pts})</span><input id="evn${i}" type="number" min="0" max="${q.pts}" step="0.5" value="${c.notes&&c.notes[String(i)]!==undefined?c.notes[String(i)]:''}" style="width:80px"></div>`;
      }
    });
    s+=`<textarea id="evComm" rows="2" maxlength="1000" placeholder="Commentaire pour l’élève (facultatif)">${esc(c.commentaire||'')}</textarea>`
      +`<button class="p" onclick="evNoter('${c.tentative}')">💾 Enregistrer la correction</button>`+retour('evcop','← Copies');
    return s;
  }
  async function noter(tentative){
    const d=D(),c=d.evData.copies.find(z=>z.tentative===tentative),qs=d.evData.questions,notes={};
    qs.forEach((q,i)=>{if(q.t!=='qcm'){const v=val('evn'+i);if(v!==''){notes[String(i)]=Math.max(0,Math.min(+q.pts,+v||0))}}});
    const comm=val('evComm');
    const r=await C.rpc('eval_noter',{p_tentative:tentative,p_notes:notes,p_commentaire:comm});
    if(!r.ok){maj({msg:r.err,erreur:true});return}
    c.notes=notes;c.commentaire=comm;c.statut='corrigee';
    maj({vue:'evcop',msg:'Correction enregistrée.',erreur:false});
  }
  async function publier(id,v){
    const r=await C.rpc('eval_publier',{p_eval:id,p_visible:v});
    if(!r.ok){maj({msg:r.err,erreur:true});return}
    const e=D().evsProf.find(z=>z.id===id);if(e)e.resultats_visibles=v;
    maj({msg:v?'Résultats publiés : les élèves peuvent les consulter.':'Résultats masqués.',erreur:false});
  }

  // ---------------------------------------------------------------- enseignant : communiqués
  function vueComProf(d){
    const c=d.classe;
    let s=entete('📢 Communiqués · '+c.nom)+msg(d);
    if(!d.comsProf){chargerComProf(c.id);return s+'<p>Chargement…</p>'+retour('classe','← Classe')}
    if(!d.comsProf.length)s+='<p style="font-size:13px">Aucun communiqué. Les élèves reçoivent chaque communiqué dans leur compte et ton suivi montre qui l’a lu.</p>';
    d.comsProf.forEach(x=>{s+=`<button onclick="comSuivi('${x.id}')">${x.important?'❗ ':''}${esc(x.titre)}<br><small>${dt(x.created_at)} · voir qui a lu</small></button>`});
    return s+`<button class="p" onclick="comNouv()">+ Nouveau communiqué</button>`+retour('classe','← Classe');
  }
  async function chargerComProf(id){
    const r=await C.lireTable('communiques?select=id,titre,texte,important,created_at,fichier_chemin,fichier_nom,fichier_type&class_id=eq.'+id+'&order=created_at.desc');
    if(D()&&D().vue==='comprof')maj({comsProf:r.ok?r.data:[],msg:r.ok?'':r.err,erreur:!r.ok});
  }
  function vueComNouv(d){
    return entete('Nouveau communiqué')+msg(d)
      +`<input id="comTitre" maxlength="120" placeholder="Titre" value="${esc(d.cTitre||'')}">`
      +`<textarea id="comTexte" rows="6" maxlength="3000" placeholder="Message pour la classe">${esc(d.cTexte||'')}</textarea>`
      +`<label style="display:block;margin:6px 0;font-size:13px">📎 Joindre un fichier (PDF, Word ou photo, 10 Mo maximum)<input id="comFic" type="file" accept=".pdf,.doc,.docx,image/jpeg,image/png,image/webp,application/pdf"></label>`
      +`<label style="display:block;margin:6px 0;font-size:13px"><input id="comImp" type="checkbox"> ❗ Important</label>`
      +`<button class="p" onclick="comPublier()">📢 Envoyer à la classe</button>`+retour('comprof','← Annuler');
  }
  async function publierCom(){
    const t=val('comTitre'),x=val('comTexte'),imp=!!(document.getElementById('comImp')||{}).checked;
    const f=(document.getElementById('comFic')||{}).files&&document.getElementById('comFic').files[0];
    if(t.length<2||(!x&&!f)){maj({cTitre:t,cTexte:x,msg:'Écris un titre, puis un message ou joins un fichier.',erreur:true});return}
    const ext=f?(/\.(pdf|docx?|jpe?g|png|webp)$/i.exec(f.name)||[])[1]:null;
    if(f&&!ext){maj({cTitre:t,cTexte:x,msg:'Format non accepté : PDF, Word (.doc, .docx) ou photo (JPG, PNG).',erreur:true});return}
    if(f&&f.size>10485760){maj({cTitre:t,cTexte:x,msg:'Fichier trop lourd (10 Mo maximum).',erreur:true});return}
    const ligne={class_id:D().classe.id,titre:t,texte:x||null,important:imp};
    if(f){
      const MIME={pdf:'application/pdf',doc:'application/msword',docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp'};
      const type=MIME[ext.toLowerCase()],chemin=D().classe.id+'/'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)+'.'+ext.toLowerCase();
      maj({msg:'Envoi du fichier…',erreur:false,cTitre:t,cTexte:x});
      const u=await C.deposerFichier(chemin,f.type===type?f:new Blob([f],{type}));
      if(!u.ok){maj({cTitre:t,cTexte:x,msg:u.err,erreur:true});return}
      ligne.fichier_chemin=chemin;ligne.fichier_nom=f.name.slice(0,150);ligne.fichier_type=type;
    }
    const r=await C.inserer('communiques',ligne);
    if(!r.ok){maj({cTitre:t,cTexte:x,msg:r.err,erreur:true});return}
    maj({vue:'comprof',comsProf:null,cTitre:'',cTexte:'',msg:'Communiqué envoyé.',erreur:false});
  }
  function suivi(id){maj({vue:'comsuivi',comId:id,suiviData:null,msg:''})}
  async function chargerSuivi(id){
    const r=await C.rpc('communique_suivi',{p_id:id});
    if(D()&&D().vue==='comsuivi')maj({suiviData:r.ok?r.data:[],msg:r.ok?'':r.err,erreur:!r.ok});
  }
  function vueComSuivi(d){
    const x=d.comsProf.find(z=>z.id===d.comId);
    let s=entete('📢 '+(x?x.titre:'Communiqué'))+msg(d)+(x?(x.texte?`<p style="white-space:pre-wrap;font-size:13px">${esc(x.texte)}</p>`:'')+boutonFichier(x):'');
    if(!d.suiviData){chargerSuivi(d.comId);return s+'<p>Chargement…</p>'+retour('comprof','← Communiqués')}
    const lus=d.suiviData.filter(z=>z.lu_le).length;
    s+=`<h4>Accusés de lecture : ${lus} sur ${d.suiviData.length}</h4>`+d.suiviData.map(z=>`<p class="row" style="margin:2px 0"><span>${z.lu_le?'✔':'⏳'} ${esc(z.pseudo)}</span><b style="font-size:12px">${z.lu_le?dt(z.lu_le):'pas encore lu'}</b></p>`).join('');
    return s+retour('comprof','← Communiqués');
  }

  // ---------------------------------------------------------------- rattrapage à la connexion
  async function rattrapage(){
    const r=await C.rpc('a_faire');
    if(!r.ok||!r.data)return null;
    return r.data;
  }

  return {
    html:html,rattrapage:rattrapage,
    actions:{
      evPasser:passer,evResultat:resultat,comLire:lire,evNouv:nouv,evAjoutQ:evAjoutQ,evSuppQ:evSuppQ,evAjoutChoix:evAjoutChoix,evCreer:creer,
      evCopies:copies,evCopie:copie,evNoter:noter,evPublier:publier,comNouv:()=>maj({vue:'comnouv',cTitre:'',cTexte:'',msg:'',erreur:false}),comPublier:publierCom,comFichier:ouvrirFichier,comSuivi:suivi
    }
  };
}
