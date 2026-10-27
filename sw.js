// Mode hors connexion de Kelasi Game.
// Principe : le jeu (page, scripts, styles) est pris sur Internet quand c'est possible, pour toujours avoir la dernière version,
// et sinon dans la mémoire de l'appareil. Les images sont gardées après leur premier chargement.
// Les appels au serveur des comptes (autre domaine) ne sont jamais mis en mémoire.
const NOM='kelasi-v1';
const COEUR=['./','index.html','style.css','dist/game.js','manifest.webmanifest','img/manifest.json','img/faces.json','icons/icon-192.png','icons/icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(NOM).then(c=>Promise.all(COEUR.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==NOM).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==self.location.origin)return;
  const code=r.mode==='navigate'||/\.(js|css|html|webmanifest)$/.test(u.pathname);
  if(code){
    // réseau d'abord (version la plus récente), mémoire en secours
    e.respondWith(fetch(r).then(rep=>{if(rep.ok){const c=rep.clone();caches.open(NOM).then(m=>m.put(r,c))}return rep}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));
  }else{
    // images et autres fichiers : mémoire d'abord
    e.respondWith(caches.match(r).then(m=>m||fetch(r).then(rep=>{if(rep.ok){const c=rep.clone();caches.open(NOM).then(m2=>m2.put(r,c))}return rep})));
  }
});
