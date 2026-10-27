import * as C from './cloud.js';

// Comptes, classes et missions de classe. Vocabulaire : côté élève « mission de classe » ;
// le mot « devoir » n'apparaît que dans l'espace enseignant (cahier des charges, 27.4).
const ROLES={eleve:'Élève',enseignant:'Enseignant'};
export function makeEspace(x){
  const {esc,PROGRAMME,CONTENU,missionCle}=x;
  const D=()=>x.G.dialog;
  const maj=p=>{Object.assign(D(),p);x.renderDialog()};
  const val=id=>{const e=document.getElementById(id);return e?e.value.trim():''};
  const pct=(p,t)=>t?Math.round(100*p/t):0;
  const sc=(p,t)=>p===null||p===undefined?'—':p+' sur '+t+' ('+pct(p,t)+' %)';
  const cleInfo=k=>{const[n,m,i]=k.split('|');const N=PROGRAMME.find(a=>a.id===n),M=N&&N.matieres.find(a=>a.id===m);return {n:N,m:M,i:+i,titre:M?M.missions[+i]:k,nom:N?N.nom:'',mat:M?M.nom:''}};
  const jouables=()=>{const o=[];PROGRAMME.forEach(n=>n.matieres.forEach(m=>m.missions.forEach((t,i)=>{const k=missionCle(n.id,m.id,i);if(CONTENU[k])o.push({n,m,i,k,t})})));return o};
  const entete=(t)=>`<div class="hd"><h3>${esc(t)}</h3></div>`;
  const retour=(vue,lib)=>`<button class="s" onclick="espGo('${vue}')">${lib||'← Retour'}</button>`;
  const msg=d=>d.msg?`<p class="${d.erreur?'ko':'ok'}">${esc(d.msg)}</p>`:'';

  function html(d){
    const s=C.session();
    if(d.vue==='form')return vueForm(d);
    if(!s)return vueAccueil(d);
    if(d.vue==='choix')return vueChoix(d);
    if(d.vue==='rejoindre')return vueRejoindre(d);
    if(d.vue==='mm')return vueMesMissions(d);
    if(d.vue==='classes')return vueClasses(d);
    if(d.vue==='classe')return vueClasse(d);
    if(d.vue==='nouvclasse')return vueNouvClasse(d);
    if(d.vue==='nouvdevoir')return vueNouvDevoir(d);
    if(d.vue==='devoir')return vueDevoir(d);
    if(d.vue==='bilan')return vueBilan(d);
    return vueCompte(d,s);
  }

  // ---------- accueil / formulaires ----------
  function vueAccueil(d){
    return entete('👤 Mon compte')+`<p style="font-size:13px">Tu peux jouer sans compte. Un compte gratuit sert à garder ta progression sur plusieurs appareils et à rejoindre une classe.</p>`
      +`<button onclick="espForm('creer','eleve')">Je suis un élève : créer mon compte</button>`
      +`<button onclick="espForm('creer','enseignant')">Je suis un enseignant : créer mon compte</button>`
      +`<button onclick="espForm('connecter')">J’ai déjà un compte : me connecter</button>`
      +`<p style="font-size:12px;opacity:.75">Établissements scolaires et comptes parents : bientôt.</p>`
      +`<button class="s" onclick="closeDialog()">Fermer</button>`;
  }
  function vueForm(d){
    const creer=d.mode==='creer';
    return entete(creer?'Créer mon compte '+(d.role==='enseignant'?'enseignant':'élève'):'Me connecter')+msg(d)
      +`<p style="font-size:13px">${creer?'Choisis un pseudonyme (3 à 20 caractères : lettres, chiffres, point, tiret) et un mot de passe d’au moins 6 caractères. Aucune autre information n’est demandée.':'Entre ton pseudonyme et ton mot de passe.'}</p>`
      +`<input id="espPseudo" maxlength="20" placeholder="Pseudonyme" autocomplete="username" value="${esc(d.pseudo||'')}">`
      +`<input id="espMdp" type="password" maxlength="72" placeholder="Mot de passe" autocomplete="${creer?'new-password':'current-password'}">`
      +`<button class="p" ${d.occupe?'disabled':''} onclick="espValider()">${d.occupe?'Un instant…':(creer?'Créer mon compte':'Me connecter')}</button>`
      +`<button class="s" onclick="espGo('')">← Retour</button>`;
  }
  async function valider(){
    const d=D(),pseudo=val('espPseudo'),mdp=document.getElementById('espMdp').value;
    if(!pseudo||!mdp){maj({msg:'Écris ton pseudonyme et ton mot de passe.',erreur:true,pseudo:pseudo});return}
    maj({occupe:true,msg:'',pseudo:pseudo});
    const r=d.mode==='creer'?await C.inscrire(pseudo,mdp,d.role,null):await C.connecter(pseudo,mdp);
    if(!r.ok){maj({occupe:false,msg:r.err,erreur:true,pseudo:pseudo});return}
    maj({occupe:false,vue:'',msg:'',erreur:false});
    await synchroniser();
  }
  // après connexion : récupérer ou envoyer la progression
  async function synchroniser(){
    const r=await C.lireSauvegarde();
    if(!r.ok){maj({vue:'',msg:'Connecté. La progression sera envoyée plus tard.',erreur:false});return}
    if(r.data&&r.data.data&&r.data.data.nom){
      if(!x.aProgression()){x.applySave(r.data.data);maj({vue:'',msg:'Bienvenue ! Ta progression a été récupérée.',erreur:false});return}
      maj({vue:'choix',distant:r.data.data});return;
    }
    if(x.aProgression())C.envoyerSauvegarde(x.getSave());
    maj({vue:'',msg:'Compte connecté. Ta progression est sauvegardée.',erreur:false});
  }
  function vueChoix(d){
    const a=d.distant&&d.distant.adv||{},nb=Object.keys(a.done||{}).length;
    return entete('Quelle progression garder ?')+`<p style="font-size:13px">Ton compte contient déjà une partie : <b>${esc(d.distant.nom||'')}</b>, ${nb} mission(s) accomplies, ${a.pieces||0} 🪙.</p>`
      +`<button class="p" onclick="espChoisir('compte')">Récupérer la partie de mon compte</button>`
      +`<button onclick="espChoisir('ici')">Garder la partie de cet appareil (elle remplacera celle du compte)</button>`;
  }
  function choisir(w){
    const d=D();
    if(w==='compte'){x.applySave(d.distant);maj({vue:'',distant:null,msg:'Ta progression a été récupérée.',erreur:false})}
    else{C.envoyerSauvegarde(x.getSave());maj({vue:'',distant:null,msg:'Ta progression de cet appareil est sauvegardée.',erreur:false})}
  }

  // ---------- compte connecté ----------
  function vueCompte(d,s){
    let h=entete('👤 '+s.pseudo+' · '+(ROLES[s.role]||s.role))+msg(d);
    const att=C.enAttente();
    if(att)h+=`<p style="font-size:12px;opacity:.75">${att} résultat(s) seront envoyés dès que la connexion revient.</p>`;
    if(s.role==='enseignant'){
      h+=`<button class="p" onclick="espGo('classes')">🏫 Espace enseignant : mes classes et missions de classe</button>`
        +`<button onclick="openProg()">🎓 Essayer les missions moi-même</button>`
        +`<p style="font-size:12px;opacity:.75">Ton activité de jeu n’influence jamais les résultats de tes élèves.</p>`;
    }else{
      h+=`<button class="p" onclick="espGo('mm')">📘 Mes missions de classe</button>`
        +`<button onclick="espGo('rejoindre')">Rejoindre une classe avec un code</button>`;
    }
    h+=`<button onclick="espSauver()">☁ Sauvegarder ma progression maintenant</button>`
      +`<button onclick="espDeco()">Me déconnecter</button>`
      +`<button class="s" onclick="closeDialog()">Fermer</button>`;
    return h;
  }
  async function sauver(){
    maj({msg:'Envoi en cours…',erreur:false});
    const r=await C.envoyerSauvegarde(x.getSave());
    maj({msg:r.ok?'Progression sauvegardée dans ton compte.':(r.err||'Envoi impossible pour le moment.'),erreur:!r.ok});
  }
  function deco(){C.deconnecter();maj({vue:'',msg:'Tu es déconnecté. Ta partie reste sur cet appareil.',erreur:false})}

  // ---------- élève ----------
  function vueRejoindre(d){
    return entete('Rejoindre une classe')+msg(d)+`<p style="font-size:13px">Demande le code à ton enseignant (6 lettres ou chiffres).</p>`
      +`<input id="espCode" maxlength="6" placeholder="CODE" style="text-transform:uppercase" autocomplete="off">`
      +`<button class="p" onclick="espRejoindre()">Rejoindre</button>`+retour('');
  }
  async function rejoindre(){
    const code=val('espCode');if(!code){maj({msg:'Écris le code de la classe.',erreur:true});return}
    const r=await C.rpc('join_class',{p_code:code});
    if(!r.ok){maj({msg:r.err,erreur:true});return}
    maj({vue:'mm',msg:'Tu as rejoint la classe !',erreur:false,liste:null});
    chargerMM();
  }
  function vueMesMissions(d){
    let h=entete('📘 Mes missions de classe')+msg(d);
    if(!d.liste){chargerMM();return h+'<p>Chargement…</p>'+retour('')}
    if(!d.liste.length)h+=`<p style="font-size:13px">Pas encore de mission de classe. Si ton enseignant t’a donné un code, rejoins sa classe.</p>`;
    d.liste.forEach(a=>{
      let p=0,t=0,faites=0;
      a.missions.forEach(k=>{const r=d.res&&d.res[a.id+'|'+k];if(r&&r.total){p+=r.pts;t+=r.total;faites++}});
      h+=`<h4>${esc(a.titre)}</h4>`+(a.consigne?`<p style="font-size:13px">${esc(a.consigne)}</p>`:'');
      if(faites)h+=`<p style="font-size:13px;margin:0 0 4px">Ton score : <b>${p} sur ${t}</b> (${pct(p,t)} %) · ${faites}/${a.missions.length} mission(s) faite(s)</p>`;
      a.missions.forEach(k=>{
        const c=cleInfo(k),ok=!!CONTENU[k],r=d.res&&d.res[a.id+'|'+k];
        const score=r&&r.total?`<b>${r.pts} sur ${r.total}</b> · ${pct(r.pts,r.total)} %${r.n>1?' · '+r.n+' essais':''}`:'▶';
        h+=ok?`<button onclick="espJouer('${a.id}','${k}')">${score} · ${esc(c.mat)} · ${esc(c.titre)}</button>`
             :`<button disabled>🔒 ${esc(c.titre)} (bientôt)</button>`;
      });
    });
    return h+retour('');
  }
  async function chargerMM(){
    const a=await C.lireTable('assignments?select=id,titre,consigne,missions,echeance,created_at&order=created_at.desc');
    if(!a.ok){maj({liste:[],msg:a.err,erreur:true});return}
    const r=await C.lireTable('mission_results?select=assignment_id,mission_key,pts,total,attempts&assignment_id=not.is.null');
    const res={};(r.ok?r.data:[]).forEach(z=>{res[z.assignment_id+'|'+z.mission_key]={pts:z.pts,total:z.total,n:z.attempts}});
    if(D()&&D().kind==='esp')maj({liste:a.data,res:res});
  }
  function jouer(aid,k){
    const c=cleInfo(k);
    x.startMission(c.n.id,c.m.id,c.i,{assignment:aid,retourEsp:true});
  }

  // ---------- enseignant ----------
  function vueClasses(d){
    let h=entete('🏫 Espace enseignant')+msg(d);
    if(!d.liste){chargerClasses();return h+'<p>Chargement…</p>'+retour('')}
    if(!d.liste.length)h+=`<p style="font-size:13px">Crée ta première classe : tes élèves la rejoindront avec un code.</p>`;
    h+=d.liste.map(c=>`<button onclick="espClasse('${c.id}')">${esc(c.nom)} · code <b>${esc(c.code)}</b></button>`).join('');
    return h+`<button class="p" onclick="espGo('nouvclasse')">+ Créer une classe</button>`+retour('');
  }
  async function chargerClasses(){
    const r=await C.lireTable('classes?select=id,nom,niveau,code&order=created_at.desc');
    if(!r.ok){maj({liste:[],msg:r.err,erreur:true});return}
    if(D()&&D().kind==='esp')maj({liste:r.data});
  }
  function vueNouvClasse(d){
    return entete('Nouvelle classe')+msg(d)
      +`<input id="espNom" maxlength="60" placeholder="Nom de la classe (ex. 1re A)">`
      +`<select id="espNiv">${PROGRAMME.map(n=>`<option value="${n.id}">${esc(n.nom)}</option>`).join('')}</select>`
      +`<button class="p" onclick="espCreerClasse()">Créer la classe</button>`+retour('classes');
  }
  async function creerClasse(){
    const nom=val('espNom');if(!nom){maj({msg:'Donne un nom à la classe.',erreur:true});return}
    const r=await C.rpc('create_class',{p_nom:nom,p_niveau:val('espNiv')});
    if(!r.ok){maj({msg:r.err,erreur:true});return}
    maj({vue:'classes',liste:null,msg:'Classe créée. Donne le code '+r.data.code+' à tes élèves.',erreur:false});
  }
  function vueClasse(d){
    const c=d.classe;
    let h=entete(c.nom)+msg(d)+`<p>Code à donner aux élèves : <b style="font-size:22px;letter-spacing:3px">${esc(c.code)}</b></p>`;
    if(!d.eleves||!d.devoirs){chargerClasse(c.id);return h+'<p>Chargement…</p>'+retour('classes')}
    h+=`<h4>Élèves (${d.eleves.length})</h4>`+(d.eleves.length?`<p style="font-size:13px">${d.eleves.map(e=>esc(e.profiles&&e.profiles.pseudo||'?')).join(', ')}</p>`:'<p style="font-size:13px">Personne n’a encore rejoint la classe.</p>');
    h+=`<h4>Devoirs</h4>`+d.devoirs.map(v=>`<button onclick="espDevoir('${v.id}')">${esc(v.titre)} · ${v.missions.length} mission(s)</button>`).join('');
    h+=`<button class="p" onclick="espNouvDevoir('${c.id}')">+ Nouveau devoir</button><button onclick="espBilan()">📊 Bilan de la classe (pourcentages)</button>`+retour('classes');
    return h;
  }
  async function ouvrirClasse(id){
    const c=D().liste.find(z=>z.id===id);
    maj({vue:'classe',classe:c,eleves:null,devoirs:null,msg:''});
  }
  async function chargerClasse(id){
    const [m,a]=await Promise.all([C.lireTable('class_members?select=student_id,profiles(pseudo)&class_id=eq.'+id),C.lireTable('assignments?select=id,titre,consigne,missions,created_at&class_id=eq.'+id+'&order=created_at.desc')]);
    if(!m.ok||!a.ok){maj({eleves:[],devoirs:[],msg:(m.err||a.err),erreur:true});return}
    if(D()&&D().vue==='classe')maj({eleves:m.data,devoirs:a.data});
  }
  function vueNouvDevoir(d){
    const f=d.form||{};
    const nivs=PROGRAMME.filter(n=>n.matieres.some(m=>m.missions.some((t,i)=>CONTENU[missionCle(n.id,m.id,i)])));
    const nv=f.niv||(nivs[0]&&nivs[0].id),N=PROGRAMME.find(n=>n.id===nv);
    const mats=N?N.matieres.filter(m=>m.missions.some((t,i)=>CONTENU[missionCle(N.id,m.id,i)])):[];
    const mt=f.mat&&mats.find(m=>m.id===f.mat)?f.mat:(mats[0]&&mats[0].id),M=mats.find(m=>m.id===mt);
    const sel=f.sel||[];
    let h=entete('Nouveau devoir')+msg(d)
      +`<input id="espTitre" maxlength="80" placeholder="Titre du devoir" value="${esc(f.titre||'')}">`
      +`<input id="espConsigne" maxlength="300" placeholder="Consigne pour les élèves (facultatif)" value="${esc(f.consigne||'')}">`
      +`<select id="espNivSel" onchange="espForme()">${nivs.map(n=>`<option value="${n.id}" ${n.id===nv?'selected':''}>${esc(n.nom)}</option>`).join('')}</select>`
      +`<select id="espMatSel" onchange="espForme()">${mats.map(m=>`<option value="${m.id}" ${m.id===mt?'selected':''}>${esc(m.nom)}</option>`).join('')}</select>`
      +`<h4>Missions à attribuer (${sel.length} choisie(s))</h4>`;
    if(M)M.missions.forEach((t,i)=>{const k=missionCle(N.id,M.id,i);if(!CONTENU[k])return;
      h+=`<button onclick="espBasc('${k}')">${sel.includes(k)?'☑':'☐'} ${esc(t)}</button>`});
    h+=`<button class="p" onclick="espPublier()">Attribuer à la classe</button>`
      +`<button onclick="espPrevisu()" ${sel.length?'':'disabled'}>👁 Prévisualiser la 1re mission choisie (sans enregistrer)</button>`
      +retour('classe');
    return h;
  }
  function lireForme(){const d=D(),f=Object.assign({},d.form);f.titre=val('espTitre')||f.titre||'';f.consigne=val('espConsigne')||f.consigne||'';const n=val('espNivSel'),m=val('espMatSel');if(n)f.niv=n;if(m)f.mat=m;return f}
  function forme(){const f=lireForme();maj({form:f})}
  function basc(k){const f=lireForme();f.sel=(f.sel||[]).slice();const i=f.sel.indexOf(k);if(i>=0)f.sel.splice(i,1);else f.sel.push(k);maj({form:f})}
  async function publier(){
    const f=lireForme(),d=D();
    if(!f.titre){maj({form:f,msg:'Donne un titre au devoir.',erreur:true});return}
    if(!(f.sel||[]).length){maj({form:f,msg:'Choisis au moins une mission.',erreur:true});return}
    const r=await C.inserer('assignments',{class_id:d.classe.id,teacher_id:C.session().uid,titre:f.titre,consigne:f.consigne||null,missions:f.sel});
    if(!r.ok){maj({form:f,msg:r.err,erreur:true});return}
    maj({vue:'classe',form:null,eleves:null,devoirs:null,msg:'Devoir attribué à la classe.',erreur:false});
  }
  function previsu(){
    const f=lireForme();maj({form:f});
    const k=(f.sel||[])[0];if(!k)return;
    const c=cleInfo(k);x.startMission(c.n.id,c.m.id,c.i,{apercu:true});
  }
  async function ouvrirDevoir(id){
    maj({vue:'devoir',devoir:D().devoirs.find(v=>v.id===id),res:null,msg:''});
  }
  function lignesDevoir(v,res){
    // res : lignes {student_id,pseudo,mission_key,pts,total,last_pts,last_total,attempts}
    const par={};res.forEach(r=>{const e=par[r.pseudo]=par[r.pseudo]||{};if(r.mission_key)e[r.mission_key]=r});
    const noms=Object.keys(par).sort();
    const eleves=noms.map(n=>{let p=0,t=0,faites=0;v.missions.forEach(k=>{const r=par[n][k];if(r&&r.total){p+=r.pts;t+=r.total;faites++}});return {nom:n,p,t,faites,rows:par[n]}});
    const parMission=v.missions.map(k=>{let p=0,t=0,n=0;eleves.forEach(e=>{const r=e.rows[k];if(r&&r.total){p+=r.pts;t+=r.total;n++}});return {k,p,t,n}});
    let P=0,T=0;eleves.forEach(e=>{P+=e.p;T+=e.t});
    return {eleves,parMission,P,T};
  }
  function vueDevoir(d){
    const v=d.devoir;
    let h=entete(v.titre)+msg(d)+(v.consigne?`<p style="font-size:13px">${esc(v.consigne)}</p>`:'');
    if(!d.res){chargerDevoir(v.id);return h+'<p>Chargement des résultats…</p>'+retour('classe')}
    const L=lignesDevoir(v,d.res);
    if(!L.eleves.length)h+='<p style="font-size:13px">Aucun élève dans la classe pour le moment.</p>';
    else{
      h+=`<h4>Résultats (${v.missions.length} mission(s))</h4>`;
      L.eleves.forEach(e=>{
        h+=`<div class="row" style="display:block"><div style="display:flex;justify-content:space-between;gap:8px"><b>${esc(e.nom)}</b><span>${e.faites?`<b>${e.p} sur ${e.t}</b> · ${pct(e.p,e.t)} %`:'pas commencé'}</span></div>`
          +`<div style="font-size:11px;opacity:.75">${v.missions.map((k,i)=>{const r=e.rows[k];return 'M'+(i+1)+' : '+(r&&r.total?r.pts+'/'+r.total+(r.attempts>1?' ('+r.attempts+' essais, dernier '+r.last_pts+'/'+r.last_total+')':''):'—')}).join(' · ')}</div></div>`;
      });
      h+=`<h4>Bilan de la classe</h4><p style="font-size:14px;margin:2px 0">Total : <b>${L.P} sur ${L.T}</b> · moyenne <b>${pct(L.P,L.T)} %</b></p>`;
      h+=`<div style="font-size:12px">${L.parMission.map((m,i)=>'Mission '+(i+1)+' ('+esc(cleInfo(m.k).titre)+') : '+(m.t?pct(m.p,m.t)+' % · '+m.n+' élève(s)':'—')).join('<br>')}</div>`;
      h+=`<button onclick="espExport()">⬇ Exporter en tableau (CSV)</button>`;
    }
    return h+retour('classe','← Retour à la classe');
  }
  async function chargerDevoir(id){
    const r=await C.rpc('assignment_scores',{p_assignment:id});
    if(!r.ok){maj({res:[],msg:r.err,erreur:true});return}
    if(D()&&D().vue==='devoir')maj({res:r.data});
  }
  function exporterDevoir(){
    const d=D(),v=d.devoir;if(!d.res)return;
    const L=lignesDevoir(v,d.res);
    const q=x=>'"'+String(x).replace(/"/g,'""')+'"';
    const lignes=[['Élève',...v.missions.map((k,i)=>'M'+(i+1)+' '+cleInfo(k).titre),'Total','Sur','Pourcentage'].map(q).join(';')];
    L.eleves.forEach(e=>lignes.push([e.nom,...v.missions.map(k=>{const r=e.rows[k];return r&&r.total?r.pts+'/'+r.total:''}),e.p,e.t,pct(e.p,e.t)+' %'].map(q).join(';')));
    lignes.push(['Classe',...L.parMission.map(m=>m.t?pct(m.p,m.t)+' %':''),L.P,L.T,pct(L.P,L.T)+' %'].map(q).join(';'));
    const blob=new Blob(['\ufeff'+lignes.join('\r\n')],{type:'text/csv;charset=utf-8'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=('devoir-'+v.titre).replace(/[^\w.-]+/g,'_')+'.csv';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
  }

  // ---------- bilan de la classe (tous les devoirs) : pourcentages par élève et par matière ----------
  async function ouvrirBilan(){maj({vue:'bilan',bilan:null,msg:''})}
  async function chargerBilan(id){
    const r=await C.rpc('class_scores',{p_class:id});
    if(!r.ok){maj({bilan:[],msg:r.err,erreur:true});return}
    if(D()&&D().vue==='bilan')maj({bilan:r.data});
  }
  function vueBilan(d){
    let h=entete('📊 Bilan de la classe')+msg(d);
    if(!d.bilan){chargerBilan(d.classe.id);return h+'<p>Chargement…</p>'+retour('classe')}
    if(!d.bilan.length)return h+'<p style="font-size:13px">Aucun résultat pour le moment : attribue un devoir et attends que les élèves jouent.</p>'+retour('classe');
    const eleves={},matCl={};let P=0,T=0;
    d.bilan.forEach(r=>{
      const i=cleInfo(r.mission_key),mat=i.nom+' · '+i.mat;
      const e=eleves[r.pseudo]=eleves[r.pseudo]||{p:0,t:0,mats:{}};
      e.p+=r.pts;e.t+=r.total;(e.mats[mat]=e.mats[mat]||{p:0,t:0});e.mats[mat].p+=r.pts;e.mats[mat].t+=r.total;
      (matCl[mat]=matCl[mat]||{p:0,t:0});matCl[mat].p+=r.pts;matCl[mat].t+=r.total;P+=r.pts;T+=r.total;
    });
    h+=`<p style="font-size:15px">Classe : <b>${P} sur ${T}</b> · moyenne <b>${pct(P,T)} %</b></p>`;
    h+='<h4>Par matière (toute la classe)</h4>'+Object.keys(matCl).sort().map(m=>`<div class="row"><span>${esc(m)}</span><b>${matCl[m].p} sur ${matCl[m].t} · ${pct(matCl[m].p,matCl[m].t)} %</b></div>`).join('');
    h+='<h4>Par élève</h4>';
    Object.keys(eleves).sort().forEach(n=>{
      const e=eleves[n],ms=Object.keys(e.mats).map(m=>({m,p:e.mats[m].p,t:e.mats[m].t})).filter(x=>x.t>0).sort((a,b)=>pct(b.p,b.t)-pct(a.p,a.t));
      const fort=ms.length>1?ms[0]:null,faible=ms.length>1?ms[ms.length-1]:null;
      h+=`<div class="row" style="display:block"><div style="display:flex;justify-content:space-between;gap:8px"><b>${esc(n)}</b><span><b>${e.p} sur ${e.t}</b> · ${pct(e.p,e.t)} %</span></div>`
        +(fort?`<div style="font-size:11px;opacity:.8">👍 ${esc(fort.m)} : ${pct(fort.p,fort.t)} % · 🎯 à renforcer : ${esc(faible.m)} : ${pct(faible.p,faible.t)} %</div>`:'')+'</div>';
    });
    return h+retour('classe','← Retour à la classe');
  }

  return {
    html:html,
    actions:{
      espGo:(v)=>{const d=D();maj({vue:v,msg:'',erreur:false,liste:(v==='classes'||v==='mm')?null:d.liste})},
      espForm:(mode,role)=>maj({vue:'form',mode:mode,role:role||'eleve',msg:'',erreur:false}),
      espValider:valider,espChoisir:choisir,espSauver:sauver,espDeco:deco,
      espRejoindre:rejoindre,espJouer:jouer,
      espClasse:ouvrirClasse,espCreerClasse:creerClasse,espNouvDevoir:()=>maj({vue:'nouvdevoir',form:{sel:[]},msg:''}),
      espForme:forme,espBasc:basc,espPublier:publier,espPrevisu:previsu,espDevoir:ouvrirDevoir,espExport:exporterDevoir,espBilan:ouvrirBilan
    }
  };
}
