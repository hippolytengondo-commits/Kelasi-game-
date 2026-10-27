import * as C from './cloud.js';

// Comptes, classes et missions de classe. Vocabulaire : côté élève « mission de classe » ;
// le mot « devoir » n'apparaît que dans l'espace enseignant (cahier des charges, 27.4).
const ROLES={eleve:'Élève',enseignant:'Enseignant'};
export function makeEspace(x){
  const {esc,PROGRAMME,CONTENU,missionCle}=x;
  const D=()=>x.G.dialog;
  const maj=p=>{Object.assign(D(),p);x.renderDialog()};
  const val=id=>{const e=document.getElementById(id);return e?e.value.trim():''};
  const etoiles=n=>n?'★'.repeat(n)+'☆'.repeat(3-n):'—';
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
      h+=`<h4>${esc(a.titre)}</h4>`+(a.consigne?`<p style="font-size:13px">${esc(a.consigne)}</p>`:'');
      a.missions.forEach(k=>{
        const c=cleInfo(k),ok=!!CONTENU[k],st=(d.res&&d.res[a.id+'|'+k])||0;
        h+=ok?`<button onclick="espJouer('${a.id}','${k}')">${st?etoiles(st):'▶'} ${esc(c.mat)} · ${esc(c.titre)}</button>`
             :`<button disabled>🔒 ${esc(c.titre)} (bientôt)</button>`;
      });
    });
    return h+retour('');
  }
  async function chargerMM(){
    const a=await C.lireTable('assignments?select=id,titre,consigne,missions,echeance,created_at&order=created_at.desc');
    if(!a.ok){maj({liste:[],msg:a.err,erreur:true});return}
    const r=await C.lireTable('mission_results?select=assignment_id,mission_key,stars&assignment_id=not.is.null');
    const res={};(r.ok?r.data:[]).forEach(z=>{res[z.assignment_id+'|'+z.mission_key]=z.stars});
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
    h+=`<button class="p" onclick="espNouvDevoir('${c.id}')">+ Nouveau devoir</button>`+retour('classes');
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
  function vueDevoir(d){
    const v=d.devoir;
    let h=entete(v.titre)+msg(d)+(v.consigne?`<p style="font-size:13px">${esc(v.consigne)}</p>`:'');
    if(!d.res){chargerDevoir(v.id);return h+'<p>Chargement des résultats…</p>'+retour('classe')}
    const par={};d.res.forEach(r=>{(par[r.pseudo]=par[r.pseudo]||{})[r.mission_key]=r});
    const noms=Object.keys(par).sort();
    if(!noms.length)h+='<p style="font-size:13px">Aucun élève dans la classe pour le moment.</p>';
    h+=`<h4>Résultats (${v.missions.length} mission(s))</h4>`;
    noms.forEach(n=>{
      const faites=v.missions.filter(k=>par[n][k]).length;
      h+=`<div class="row"><span>${esc(n)}</span><b>${faites}/${v.missions.length} terminée(s)${faites?' · '+v.missions.map(k=>par[n][k]?etoiles(par[n][k].stars):'·').join(' '):''}</b></div>`;
    });
    return h+retour('classe','← Retour à la classe');
  }
  async function chargerDevoir(id){
    const r=await C.rpc('assignment_results',{p_assignment:id});
    if(!r.ok){maj({res:[],msg:r.err,erreur:true});return}
    if(D()&&D().vue==='devoir')maj({res:r.data});
  }

  return {
    html:html,
    actions:{
      espGo:(v)=>{const d=D();maj({vue:v,msg:'',erreur:false,liste:(v==='classes'||v==='mm')?null:d.liste})},
      espForm:(mode,role)=>maj({vue:'form',mode:mode,role:role||'eleve',msg:'',erreur:false}),
      espValider:valider,espChoisir:choisir,espSauver:sauver,espDeco:deco,
      espRejoindre:rejoindre,espJouer:jouer,
      espClasse:ouvrirClasse,espCreerClasse:creerClasse,espNouvDevoir:()=>maj({vue:'nouvdevoir',form:{sel:[]},msg:''}),
      espForme:forme,espBasc:basc,espPublier:publier,espPrevisu:previsu,espDevoir:ouvrirDevoir
    }
  };
}
