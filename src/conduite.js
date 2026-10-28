// École de conduite : le joueur est au volant (ou sur la moto) et affronte de vraies situations de la route.
// Le véhicule roule tout seul vers chaque situation, s'arrête, et le joueur choisit le bon comportement.
import * as THREE from 'three';
import * as T from './textures.js';
import {std,box,cyl,tree} from './world.js';
import {voiture,moto} from './trafic.js';

// type : décor de la situation ; q : question ; o : [bonne réponse, mauvaises…] (mélangées à l'affichage) ; e : règle à retenir
const S=(type,txt,q,bonne,mauvaises,e)=>({type,txt,q,o:[bonne].concat(mauvaises),e});
export const AE=[
 {id:'ae1',titre:'Les panneaux de signalisation',intro:'Bienvenue à l’auto-école ! Aujourd’hui, tu apprends à lire les panneaux. Un bon conducteur les repère de loin.',sit:[
  S('stop','Tu arrives à un panneau STOP (octogone rouge).','Que fais-tu ?','Je m’arrête complètement, je regarde des deux côtés, puis je repars quand c’est libre',['Je ralentis et je passe si je ne vois personne','Je klaxonne et j’accélère','Je m’arrête seulement si un policier est présent'],'Au STOP, l’arrêt est obligatoire, même si la route paraît vide.'),
  S('cede','Un triangle rouge et blanc, pointe vers le bas, est planté au carrefour.','Que signifie ce panneau ?','Cédez le passage : je laisse passer les véhicules de la route prioritaire',['Interdiction de stationner','Route glissante','Vitesse limitée à 30'],'Le triangle pointe vers le bas : cédez le passage.'),
  S('limite','Un panneau rond à bordure rouge porte le chiffre « 30 ».','Que dois-tu faire ?','Ne pas dépasser 30 km/h sur cette portion de route',['Rouler au moins à 30 km/h','Rouler à 30 km/h seulement la nuit','Ignorer le panneau en ville'],'Le chiffre dans un rond rouge indique la vitesse maximale autorisée.'),
  S('interdit','Un panneau rond rouge avec une barre blanche horizontale t’attend au début d’une rue.','Que signifie-t-il ?','Sens interdit : je n’entre pas dans cette rue',['Route réservée aux motos','Stationnement gratuit','Fin de zone de travaux'],'Le sens interdit s’impose à tous les conducteurs.'),
  S('ecole','Un triangle avec deux enfants qui marchent annonce une zone d’école.','Comment te comportes-tu ?','Je ralentis, je suis très attentif aux enfants et prêt à freiner',['J’accélère pour sortir vite de la zone','Je klaxonne fort pour les écarter','Je roule normalement : les enfants font attention'],'Près d’une école, la prudence passe avant tout.')
 ]},
 {id:'ae2',titre:'Feux, carrefours et priorités',intro:'Les carrefours sont les endroits les plus risqués. Voyons comment les aborder avec calme.',sit:[
  S('rouge','Le feu est rouge devant toi.','Que fais-tu ?','Je m’arrête derrière la ligne et j’attends le feu vert',['Je passe vite avant qu’il change','Je passe si la route est vide, sans m’arrêter','Je klaxonne pour que le feu change'],'Le feu rouge impose l’arrêt, sans exception.'),
  S('orange','Le feu passe à l’orange alors que tu es encore assez loin de la ligne.','Que fais-tu ?','Je m’arrête, car je peux le faire en sécurité',['J’accélère pour passer avant le rouge','Je ferme les yeux et je continue','Je freine très fort au dernier moment'],'L’orange annonce le rouge : on s’arrête si on peut le faire sans danger.'),
  S('vert','Le feu est vert, mais un piéton, déjà sur la chaussée, finit de traverser.','Que fais-tu ?','Je le laisse finir de traverser avant d’avancer',['Je passe : j’ai le feu vert','Je klaxonne pour qu’il se dépêche','Je le contourne en accélérant'],'Un piéton engagé a toujours la priorité de finir sa traversée.'),
  S('giratoire','Tu arrives à un rond-point où d’autres véhicules sont déjà engagés.','Qui a la priorité ?','Les véhicules déjà dans le rond-point : je leur cède le passage',['Moi, car j’arrive en premier à l’entrée','Le plus gros véhicule, quoi qu’il arrive','Celui qui klaxonne le plus fort'],'On cède le passage aux véhicules engagés dans le rond-point, sauf indication contraire.'),
  S('policier','Un agent de la circulation te fait signe de t’arrêter.','Que fais-tu ?','Je m’arrête, je baisse ma vitesse en douceur et je présente mes documents',['Je continue, car je suis pressé','Je change de route sans m’arrêter','Je klaxonne et j’accélère'],'Les signes d’un agent de circulation priment sur les feux et les panneaux.')
 ]},
 {id:'ae3',titre:'Piétons et zones sensibles',intro:'Les piétons sont les plus fragiles de la route. Un conducteur responsable les protège.',sit:[
  S('zebra','Une femme avec un enfant s’engage sur le passage piéton.','Que fais-tu ?','Je m’arrête avant le passage et je les laisse traverser',['Je klaxonne pour qu’elles se dépêchent','J’accélère pour passer avant elles','Je passe derrière elles sans m’arrêter'],'On s’arrête devant un passage piéton lorsqu’un piéton s’y engage.'),
  S('enfants','C’est la sortie de l’école : des enfants courent près de la route.','Quelle est la bonne attitude ?','Je ralentis, je reste prêt à freiner et je laisse de la distance',['Je roule à vitesse normale','J’accélère pour dégager la zone','Je klaxonne sans ralentir'],'Les enfants sont imprévisibles : on ralentit et on anticipe.'),
  S('chevre','Une chèvre traverse la route devant toi.','Que fais-tu ?','Je ralentis et je m’arrête en douceur, sans freinage brusque, puis je repars',['Je fonce, elle va s’écarter','Je donne un coup de volant violent','Je klaxonne et je passe à toute vitesse'],'Face à un animal, on réduit la vitesse calmement pour éviter l’accident.'),
  S('bus','Un minibus est arrêté : des passagers descendent et traversent devant lui.','Que fais-tu ?','Je ralentis, je ne double pas le bus et je fais attention aux piétons cachés',['Je double vite le bus par la gauche','Je klaxonne les passagers','Je roule normalement : le bus est arrêté'],'Un piéton peut surgir devant ou derrière un bus à l’arrêt.'),
  S('aveugle','Une personne avec une canne blanche attend au bord de la chaussée.','Que fais-tu ?','Je m’arrête et je lui laisse toute la place pour traverser',['Je klaxonne pour la prévenir','Je passe lentement tout près d’elle','Je fais comme si je ne la voyais pas'],'Une personne malvoyante avec une canne blanche est prioritaire : on s’arrête.')
 ]},
 {id:'ae4',titre:'Vitesse, distances et attention',intro:'Un accident arrive vite. Les bons réflexes se prennent avant de démarrer.',sit:[
  S('ceinture','Tu t’installes au volant, avec trois passagers.','Avant de démarrer, que fais-tu ?','Tout le monde attache sa ceinture, moi y compris',['Seul le conducteur doit l’attacher','Les passagers de l’arrière n’en ont pas besoin','On l’attache seulement sur grande route'],'La ceinture sauve des vies : pour tous, à chaque trajet.'),
  S('distance','Tu roules derrière un camion qui freine souvent.','Quelle distance gardes-tu ?','Une grande distance de sécurité, d’autant plus grande que la vitesse est élevée',['Très près, pour mieux voir devant','Collé au camion pour économiser du carburant','Peu importe la distance'],'Plus on roule vite, plus il faut de distance pour s’arrêter.'),
  S('phone','Ton téléphone sonne pendant que tu conduis.','Que fais-tu ?','Je ne réponds pas ; si c’est important, je m’arrête en lieu sûr',['Je réponds en tenant le téléphone','Je lis le message en roulant','Je réponds en roulant vite pour être bref'],'Le téléphone au volant détourne l’attention et provoque des accidents.'),
  S('pluie','Il pleut fort et la route est glissante.','Comment adaptes-tu ta conduite ?','Je réduis la vitesse, j’évite les freinages brusques et j’augmente la distance',['Je roule plus vite pour sortir de la pluie','Je freine à fond dès que nécessaire','Je ne change rien'],'Sur route mouillée, la distance de freinage augmente.'),
  S('fatigue','Tu as roulé longtemps et tu sens tes yeux se fermer.','Que fais-tu ?','Je m’arrête dès que possible, en sécurité, pour me reposer',['Je baisse la vitre et je continue','Je roule plus vite pour arriver','Je mets la musique à fond et je continue'],'La somnolence au volant est très dangereuse : il faut se reposer.'),
  S('alcool','Tes amis t’offrent à boire avant de repartir en voiture.','Que fais-tu ?','Je refuse : si j’ai bu, je ne conduis pas',['Je bois un peu, ça ne change rien','Je bois, mais je conduis doucement','Je bois et je roule vite pour arriver tôt'],'Alcool et conduite ne vont jamais ensemble.')
 ]},
 {id:'ae5',titre:'Moto : équipement et comportement',intro:'À moto, tu n’as pas de carrosserie pour te protéger. L’équipement et le bon comportement sont vitaux.',sit:[
  S('casque','Tu montes sur ta moto avec un passager.','Que dois-tu faire ?','Porter chacun un casque bien attaché',['Mettre le casque seulement pour un long trajet','Porter le casque sans l’attacher','Ne pas en mettre en ville'],'Le casque attaché protège la tête du conducteur et du passager.'),
  S('passagers','Trois amis veulent monter sur ta moto avec toi.','Que réponds-tu ?','Non : je transporte au maximum un passager si la moto le permet',['Oui, ça passe si on se serre','Oui, mais seulement sur de courtes distances','Oui, si on roule doucement'],'Surcharger une moto la rend instable et dangereuse.'),
  S('slalom','Les voitures sont à l’arrêt dans les embouteillages.','Que fais-tu ?','Je reste dans ma voie et je garde mes distances',['Je me faufile entre les voitures en slalomant','Je roule sur le trottoir','Je double par la droite en accélérant'],'Se faufiler dans la circulation est une cause fréquente d’accident.'),
  S('nuit','Il fait nuit et la route est mal éclairée.','Que fais-tu ?','J’allume mes feux et je porte des vêtements visibles',['J’éteins mes feux pour économiser la batterie','Je roule vite pour avoir moins peur','Je roule sans lumière, on s’habitue vite'],'On doit voir et être vu : feux allumés et vêtements clairs.'),
  S('depasse','Tu veux dépasser un camion lent sur une route étroite.','À quelle condition peux-tu dépasser ?','Quand la route est dégagée devant, avec bonne visibilité, en signalant ma manœuvre',['Dans un virage, pour gagner du temps','Si je klaxonne assez fort','À la sortie d’une côte, sans voir plus loin'],'On ne dépasse que si l’on voit loin devant et que l’on peut revenir sans danger.')
 ]},
 {id:'ae6',titre:'Urgences, pannes et nuit',intro:'Dernière leçon : savoir réagir quand l’imprévu arrive. Un conducteur calme est un conducteur utile.',sit:[
  S('ambulance','Tu entends la sirène d’une ambulance derrière toi.','Que fais-tu ?','Je me range prudemment sur le côté et je la laisse passer',['Je continue à la même vitesse','J’accélère pour rester devant','Je m’arrête en plein milieu de la route'],'Les véhicules de secours sont prioritaires : on leur facilite le passage.'),
  S('panne','Ton véhicule tombe en panne sur la route.','Quel est le bon réflexe ?','J’allume les feux de détresse et je signale le véhicule, en me mettant à l’abri',['Je reste au milieu de la route sans rien faire','Je répare debout sur la chaussée','J’éteins toutes les lumières'],'Un véhicule en panne doit être signalé pour éviter un autre accident.'),
  S('accident','Tu arrives sur un accident : une personne est blessée.','Que fais-tu en premier ?','Je sécurise les lieux, j’appelle les secours et j’aide sans déplacer un blessé grave',['Je prends des photos et je repars','Je déplace vite la personne sans précaution','Je continue, ce n’est pas mon problème'],'Alerter les secours et sécuriser la zone sont les premiers gestes.'),
  S('brouillard','Un épais brouillard réduit la visibilité à quelques mètres.','Que fais-tu ?','J’allume mes feux, je ralentis et j’augmente la distance',['Je roule plus vite pour sortir du brouillard','J’éteins les phares pour ne pas éblouir','Je suis la voiture devant en me collant à elle'],'Dans le brouillard, on voit mal et on est mal vu : on ralentit.'),
  S('train','Les feux clignotent et les barrières descendent à un passage à niveau.','Que fais-tu ?','Je m’arrête et j’attends que le train soit passé et les barrières relevées',['Je passe vite avant les barrières','Je contourne les barrières','Je roule doucement sur les rails'],'Un train ne peut pas freiner à temps : on ne traverse jamais les voies quand les signaux sont actifs.')
 ]}
];

export const LONG=42;          // distance entre deux situations
export const zArret=k=>-(k+1)*LONG;

const sh=(L,seed)=>{const a=L.map((x,i)=>[x,i]);let h=seed;for(let i=a.length-1;i>0;i--){h=(h*1103515245+12345)>>>0;const j=h%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a.map(x=>x[0])};
export const melanger=(opts,seed)=>sh(opts,seed);

const sign=(g,x,z,lignes,bg,rot)=>{
  cyl(g,.06,.07,2.6,std('#5a5a5a'),x,1.3,z,6);
  const p=new THREE.Mesh(new THREE.PlaneGeometry(1.3,1.3),new THREE.MeshStandardMaterial({map:T.textBoard(lignes,512,512,bg||'#c0392b','#fff','#fff'),roughness:.6}));
  p.position.set(x,2.9,z);p.rotation.y=rot||0;g.add(p);p.userData.panneau=true;return p;
};
function feu(g,x,z,rouge){
  cyl(g,.08,.1,4,std('#333'),x,2,z,8);box(g,.5,1.4,.4,std('#1b1b1b'),x,4.2,z);
  [['#e74c3c',rouge==='r'],['#f1c40f',rouge==='o'],['#2ecc71',rouge==='v']].forEach((c,i)=>{const l=new THREE.Mesh(new THREE.SphereGeometry(.17,10,8),new THREE.MeshBasicMaterial({color:c[1]?c[0]:'#222'}));l.position.set(x,4.65-i*.45,z+.22);g.add(l)});
}
function zebra(g,z){for(let i=-3;i<=3;i++)box(g,.7,.02,3,std('#f2f2f2'),i*1.2,.04,z)}
function chevre(g,x,z){const m=std('#f2e6d0',.9);box(g,.5,.5,1.1,m,x,.6,z);box(g,.3,.3,.4,m,x,.95,z-.7);[[-.18,-.4],[.18,-.4],[-.18,.4],[.18,.4]].forEach(p=>box(g,.08,.4,.08,m,x+p[0],.2,z+p[1]));box(g,.05,.2,.05,std('#555'),x-.1,1.2,z-.7);box(g,.05,.2,.05,std('#555'),x+.1,1.2,z-.7)}

const PANNEAUX={
  stop:[[{t:'STOP',s:200,y:.5}],'#c0392b'],cede:[[{t:'▽',s:300,y:.4},{t:'CÉDEZ',s:70,y:.85}],'#e8e8e8'],limite:[[{t:'30',s:300,y:.5}],'#c0392b'],
  interdit:[[{t:'⛔',s:300,y:.5}],'#c0392b'],ecole:[[{t:'🧒🧒',s:160,y:.4},{t:'ÉCOLE',s:80,y:.85}],'#e0a526'],
  enfants:[[{t:'🧒',s:200,y:.4},{t:'ENFANTS',s:80,y:.85}],'#e0a526'],giratoire:[[{t:'⟳',s:260,y:.5}],'#1f5f9e'],
  phone:[[{t:'📵',s:240,y:.5}],'#1f5f9e'],pluie:[[{t:'🌧',s:240,y:.5}],'#5a6275'],fatigue:[[{t:'😴',s:240,y:.5}],'#5a6275'],alcool:[[{t:'🚫🍺',s:200,y:.5}],'#c0392b'],
  ceinture:[[{t:'🔔',s:200,y:.4},{t:'CEINTURE',s:70,y:.85}],'#1f5f9e'],distance:[[{t:'↔',s:240,y:.4},{t:'DISTANCE',s:60,y:.85}],'#1f5f9e'],
  casque:[[{t:'⛑',s:240,y:.5}],'#1f5f9e'],passagers:[[{t:'🏍',s:200,y:.4},{t:'1 + 1',s:80,y:.85}],'#1f5f9e'],slalom:[[{t:'🚗🚗',s:150,y:.5}],'#e0a526'],
  nuit:[[{t:'🌙',s:240,y:.5}],'#2c3e50'],depasse:[[{t:'⚠',s:220,y:.4},{t:'VIRAGE',s:70,y:.85}],'#e0a526'],ambulance:[[{t:'🚑',s:220,y:.5}],'#e8e8e8'],
  panne:[[{t:'⚠',s:240,y:.5}],'#e0a526'],accident:[[{t:'🚨',s:240,y:.5}],'#c0392b'],brouillard:[[{t:'🌫',s:240,y:.5}],'#5a6275'],train:[[{t:'🚆',s:220,y:.4},{t:'PASSAGE',s:60,y:.85}],'#c0392b'],
  policier:[[{t:'👮',s:240,y:.5}],'#1f5f9e'],bus:[[{t:'🚌',s:220,y:.4},{t:'ARRÊT',s:70,y:.85}],'#1f7a4d'],aveugle:[[{t:'🦯',s:240,y:.5}],'#1f5f9e'],zebra:[[{t:'🚶',s:240,y:.5}],'#1f5f9e']
};

// monde de conduite : route droite vers le nord avec une situation tous les LONG mètres
export function buildConduite(mission,veh,makeHuman){
  const g=new THREE.Group(),colliders=[],boxes=[];
  const n=mission.sit.length,Lr=(n+1)*LONG+30;
  const herbe=new THREE.Mesh(new THREE.PlaneGeometry(220,Lr+80),new THREE.MeshStandardMaterial({map:T.grassTexture(),roughness:1}));
  herbe.rotation.x=-Math.PI/2;herbe.position.set(0,0,-Lr/2+20);g.add(herbe);
  herbe.material.map=herbe.material.map.clone();herbe.material.map.repeat.set(40,Lr/5);herbe.material.map.wrapS=herbe.material.map.wrapT=THREE.RepeatWrapping;herbe.material.map.needsUpdate=true;
  const route=new THREE.Mesh(new THREE.PlaneGeometry(9,Lr+40),new THREE.MeshStandardMaterial({map:T.noiseTexture('#3b3c40',.12),roughness:.92}));
  route.rotation.x=-Math.PI/2;route.position.set(0,.03,-Lr/2+10);g.add(route);
  for(let z=10;z>-Lr;z-=5){const t=new THREE.Mesh(new THREE.PlaneGeometry(.2,2.2),new THREE.MeshBasicMaterial({color:0xf2f2f2}));t.rotation.x=-Math.PI/2;t.position.set(0,.05,z);g.add(t)}
  [-4.4,4.4].forEach(x=>{const b=new THREE.Mesh(new THREE.PlaneGeometry(.18,Lr+40),new THREE.MeshBasicMaterial({color:0xf2f2f2}));b.rotation.x=-Math.PI/2;b.position.set(x,.05,-Lr/2+10);g.add(b)});
  // décor : arbres et maisons des deux côtés
  for(let z=4,i=0;z>-Lr;z-=9,i++){[-1,1].forEach((s,j)=>{const x=s*(9+((i*7+j*3)%5)*1.6);if(i%3===0)box(g,6,3,5,std(['#e8c48a','#d98a6a','#9ac5a4','#8fb4d9'][(i+j)%4],.9),x*1.9,1.5,z);else tree(g,x,z,1+((i+j)%3)*.15,false,null,colliders)})}
  // situations
  mission.sit.forEach((s,k)=>{
    const z=zArret(k);
    const P=PANNEAUX[s.type];
    if(s.type==='rouge'||s.type==='orange'||s.type==='vert'){feu(g,5.2,z-3,s.type==='rouge'?'r':s.type==='orange'?'o':'v');box(g,9,.02,.5,std('#f2f2f2'),0,.05,z-1)}
    else if(P)sign(g,5.4,z-3,P[0],P[1],-.25);
    if(['zebra','vert','policier','aveugle','enfants','ecole','bus'].includes(s.type)||s.type==='zebra'){
      if(['zebra','vert','aveugle'].includes(s.type))zebra(g,z-4);
      if(makeHuman){const hs=makeHuman({s:'f',h:.96,skin:'#6b4028',c:'#c0392b',k:'pagne',co:'tresses'});hs.position.set(-4.8,0,z-4);hs.rotation.y=Math.PI/2;g.add(hs);
        const ps=hs.userData.update;g.userData.pietons=(g.userData.pietons||[]);g.userData.pietons.push(hs)}
      if(s.type==='enfants'||s.type==='ecole'){[-5.5,-6.2].forEach((x,i)=>{const e=makeHuman&&makeHuman({s:i?'f':'h',h:.7,skin:'#5a3319',c:'#2e86de',k:'uniforme',co:'courtes'});if(e){e.position.set(x,0,z-5-i);e.scale.setScalar(.75);g.add(e)}})}
    }
    if(s.type==='chevre')chevre(g,-4.6,z-4);
    if(s.type==='bus'){const b=voiture('bus','#1f7a4d');b.position.set(3.2,0,z-7);g.add(b)}
    if(s.type==='ambulance'){const a=voiture('ambulance');a.position.set(0,0,z+16);a.rotation.y=Math.PI;g.add(a);g.userData.amb=a}
    if(s.type==='panne'){const c=voiture('auto','#8e44ad');c.position.set(-2.2,0,z-6);g.add(c);box(g,.5,.02,.5,std('#e74c3c'),-2.2,.06,z-1.5)}
    if(s.type==='accident'){const c=voiture('auto','#c0392b');c.position.set(1.5,0,z-7);c.rotation.y=.5;g.add(c);const d=voiture('auto','#2e86de');d.position.set(-1.5,0,z-9);d.rotation.y=-.4;g.add(d)}
    if(s.type==='train'){box(g,9,.12,.3,std('#c0392b'),0,1.2,z-5);box(g,.1,1.2,.1,std('#333'),-4.4,.6,z-5);box(g,.1,1.2,.1,std('#333'),4.4,.6,z-5)}
    if(s.type==='brouillard'||s.type==='nuit'){}
  });
  // fin de parcours : portail
  box(g,10,.4,.4,std('#1f7a4d'),0,5,zArret(n-1)-LONG);
  // le véhicule du joueur
  const car=veh==='moto'?moto('#2e86de'):voiture('auto','#2e86de');g.add(car);
  const hero=makeHuman?makeHuman({s:'h',h:1,skin:'#6b4028',c:'#2e86de',k:'uniforme',co:'courtes'}):null;
  if(hero){hero.position.set(0,veh==='moto'?.45:.35,veh==='moto'?-.1:-.2);hero.scale.setScalar(veh==='moto'?.75:.7);if(veh!=='moto')hero.position.y=.55;car.add(hero);car.userData.hero=hero}
  return {group:g,colliders,boxes,dyn:{},exit:{x:0,z:4},bounds:{x0:-8,x1:8,z0:-Lr-60,z1:12},car:car,update(dt,t){}};
}
