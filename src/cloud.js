// Client léger du serveur de BOYEKOLI PLAY (Supabase) : connexion, classes, missions de classe, sauvegarde.
// Aucune bibliothèque : simples appels réseau, pour rester léger sur les téléphones modestes.
// Le jeu fonctionne sans connexion ; tout ce qui est envoyé hors ligne est mis en file d'attente.
const URL='https://mgaqfuilqqwmxgpowtps.supabase.co';
const KEY='sb_publishable_BouyFmkO5Tv-GWP8CkrSyg_7eBzU6K4';
const SK='kelas_session_v1',QK='kelas_file_v1';
const DOMAINE='@users.kelasi.game';

const lire=(k)=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}};
const ecrire=(k,v)=>{try{if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,JSON.stringify(v))}catch(e){}};

export const session=()=>lire(SK);
export const connecte=()=>!!session();

// transforme une erreur technique en phrase claire pour l'élève ou l'enseignant
function message(status,corps){
  const t=(corps&&(corps.erreur||corps.message||corps.msg||corps.error_description||corps.error))||'';
  if(status===0)return 'Pas de connexion Internet pour le moment. Réessaie plus tard.';
  if(/Invalid login/i.test(t))return 'Identifiant ou mot de passe incorrect.';
  if(/already registered|already been registered/i.test(t))return 'Cette adresse Gmail a déjà un compte. Connecte-toi, ou utilise « Mot de passe oublié ».';
  if(/rate limit|too many|seconds/i.test(t)||status===429)return 'Trop de demandes pour le moment. Réessaie dans quelques minutes.';
  if(/Database error saving new user|Gmail est requise/i.test(t))return 'Une adresse Gmail valide est requise pour un compte adulte.';
  if(/Email not confirmed/i.test(t))return 'Ton adresse Gmail n’est pas encore confirmée : ouvre l’e-mail reçu et clique sur le lien.';
  if(/Password should be|weak/i.test(t))return 'Mot de passe trop faible : au moins 8 caractères.';
  if(/same password/i.test(t))return 'Choisis un mot de passe différent de l’ancien.';
  if(/Code de classe inconnu/i.test(t))return 'Ce code de classe n’existe pas. Vérifie les lettres et les chiffres.';
  if(/Réservé aux enseignants/i.test(t))return 'Cette action est réservée aux enseignants.';
  if(/duplicate|déjà/i.test(t))return t&&!/duplicate/i.test(t)?t:'Cet élément existe déjà.';
  if(status===401||/JWT/i.test(t))return 'Ta connexion a expiré. Reconnecte-toi.';
  return t||'Une erreur est survenue. Réessaie.';
}
async function appel(chemin,opt){
  opt=opt||{};
  const h={apikey:KEY,'Content-Type':'application/json'};
  if(opt.token)h.Authorization='Bearer '+opt.token;
  if(opt.headers)Object.assign(h,opt.headers);
  try{
    const r=await fetch(URL+chemin,{method:opt.method||'GET',headers:h,body:opt.body===undefined?undefined:JSON.stringify(opt.body)});
    let d=null;const txt=await r.text();try{d=txt?JSON.parse(txt):null}catch(e){}
    if(!r.ok)return {ok:false,status:r.status,err:message(r.status,d)};
    return {ok:true,data:d};
  }catch(e){return {ok:false,status:0,err:message(0)}}
}

export async function inscrire(pseudo,mdp,role,niveau){
  const r=await appel('/functions/v1/inscription',{method:'POST',body:{pseudo:pseudo,mdp:mdp,role:role,niveau:niveau||null}});
  if(!r.ok)return r;
  return connecter(pseudo,mdp);
}
// identifiant : adresse Gmail (adultes) ou pseudonyme (élèves et anciens comptes)
export async function connecter(identifiant,mdp){
  const id=identifiant.trim().toLowerCase();
  const r=await appel('/auth/v1/token?grant_type=password',{method:'POST',body:{email:id.includes('@')?id:id+DOMAINE,password:mdp}});
  if(!r.ok)return r;
  const s=stocker(r.data);
  const p=await appel('/rest/v1/profiles?select=pseudo,role,niveau&id=eq.'+s.uid,{token:s.access});
  if(p.ok&&p.data&&p.data[0]){s.pseudo=p.data[0].pseudo;s.role=p.data[0].role;s.niveau=p.data[0].niveau;ecrire(SK,s)}
  return {ok:true,data:s};
}
export const estGmail=e=>/^[^\s@]+@(gmail|googlemail)\.com$/i.test(String(e).trim());
// compte adulte (enseignant, parent) : adresse Gmail + mot de passe ; Supabase envoie un e-mail de confirmation
export async function inscrireAdulte(pseudo,email,mdp,role){
  const r=await appel('/auth/v1/signup',{method:'POST',body:{email:email.trim().toLowerCase(),password:mdp,data:{pseudo:pseudo.trim(),role:role}}});
  if(!r.ok)return r;
  if(r.data&&r.data.access_token)return connecter(email,mdp); // confirmation non exigée par le serveur : connexion immédiate
  return {ok:true,attente:true};
}
// mot de passe oublié : e-mail avec un lien pour choisir un nouveau mot de passe
export function demanderReset(email){
  const retour=typeof location!=='undefined'?location.origin+location.pathname:'';
  return appel('/auth/v1/recover?redirect_to='+encodeURIComponent(retour),{method:'POST',body:{email:email.trim().toLowerCase()}});
}
// le lien de l'e-mail ramène sur le jeu avec un jeton dans l'adresse (#access_token=…&type=recovery)
export function jetonRecuperation(){
  if(typeof location==='undefined'||!/type=recovery/.test(location.hash||''))return null;
  const h=new URLSearchParams(location.hash.slice(1));
  try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}
  return h.get('access_token')||null;
}
export async function nouveauMotDePasse(jeton,mdp){
  const r=await appel('/auth/v1/user',{method:'PUT',token:jeton,body:{password:mdp}});
  if(!r.ok)return r;
  return connecter(r.data&&r.data.email||'',mdp);
}
function stocker(d){
  const s={access:d.access_token,refresh:d.refresh_token,exp:Date.now()+(d.expires_in||3600)*1000,uid:d.user&&d.user.id,pseudo:'',role:'eleve',niveau:null};
  const o=session();if(o&&o.uid===s.uid){s.pseudo=o.pseudo;s.role=o.role;s.niveau=o.niveau}
  ecrire(SK,s);return s;
}
export function deconnecter(){ecrire(SK,null)}
async function jeton(){
  const s=session();if(!s)return null;
  if(s.exp-Date.now()>60000)return s.access;
  const r=await appel('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:s.refresh}});
  if(!r.ok){if(r.status===400||r.status===401)ecrire(SK,null);return null}
  return stocker(r.data).access;
}
async function authAppel(chemin,opt){
  const t=await jeton();
  if(!t)return {ok:false,status:401,err:'Tu n’es pas connecté.'};
  opt=Object.assign({},opt,{token:t});return appel(chemin,opt);
}
export const lireTable=(requete)=>authAppel('/rest/v1/'+requete);
export const rpc=(nom,args)=>authAppel('/rest/v1/rpc/'+nom,{method:'POST',body:args||{}});
export const inserer=(table,ligne)=>authAppel('/rest/v1/'+table,{method:'POST',body:ligne,headers:{Prefer:'return=representation'}});
export const supprimer=(requete)=>authAppel('/rest/v1/'+requete,{method:'DELETE'});

// ---- sauvegarde de la progression (facultative) ----
export async function envoyerSauvegarde(data){
  const s=session();if(!s)return {ok:false};
  return authAppel('/rest/v1/save_games?on_conflict=user_id',{method:'POST',body:{user_id:s.uid,data:data,updated_at:new Date().toISOString()},headers:{Prefer:'resolution=merge-duplicates'}});
}
export async function lireSauvegarde(){
  const s=session();if(!s)return {ok:false};
  const r=await authAppel('/rest/v1/save_games?select=data,updated_at&user_id=eq.'+s.uid);
  if(!r.ok)return r;
  return {ok:true,data:r.data&&r.data[0]||null};
}
let minuteur=null;
export function planifierSauvegarde(getData){
  if(!connecte())return;
  clearTimeout(minuteur);
  minuteur=setTimeout(()=>{envoyerSauvegarde(getData())},6000);
}

// ---- résultats de missions : file d'attente locale, envoyée dès que possible ----
export function enregistrerScore(mission,assignment,pts,total){
  if(!connecte())return;
  const f=lire(QK)||[];
  f.push({m:mission,a:assignment||null,p:pts,t:total,h:Date.now()});
  ecrire(QK,f.slice(-200));
  vider();
}
let enCours=false;
export async function vider(){
  if(enCours||!connecte())return;
  enCours=true;
  try{
    let f=lire(QK)||[];
    while(f.length){
      const x=f[0];
      const r=x.p!==undefined?await rpc('record_score',{p_mission:x.m,p_assignment:x.a,p_pts:x.p,p_total:x.t})
        :await rpc('record_result',{p_mission:x.m,p_assignment:x.a,p_stars:x.s,p_errs:x.e});
      if(r.ok||(r.status>=400&&r.status<500&&r.status!==401&&r.status!==408&&r.status!==429)){f.shift();ecrire(QK,f)}
      else break; // réseau coupé ou connexion expirée : on réessaiera plus tard
    }
  }finally{enCours=false}
}
export const enAttente=()=>(lire(QK)||[]).length;
if(typeof window!=='undefined')window.addEventListener('online',()=>{vider()});
