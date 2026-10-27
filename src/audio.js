// Sons et musique de BOYEKOLI PLAY, entièrement synthétisés (aucun fichier à télécharger) :
// bruits de pas, « bravo » (bonne réponse), « félicitations » (fin de mission), « perdu » (mauvaise réponse)
// et une musique d'ambiance qui change selon le lieu (accueil, village, mission, maison).
export function createAudio(opt){
  let AC=null,master=null,musGain=null;
  const sonOn=()=>opt.sound(),musOn=()=>opt.music();
  function ctx(){
    try{
      if(!AC){
        AC=new (window.AudioContext||window.webkitAudioContext)();
        master=AC.createGain();master.gain.value=1;master.connect(AC.destination);
        musGain=AC.createGain();musGain.gain.value=.5;musGain.connect(master);
      }
      if(AC.state==='suspended')AC.resume();
    }catch(e){AC=null}
    return AC;
  }
  // note simple : oscillateur + enveloppe
  function tone(f,d,type,v,delay,dest,glideTo){
    const a=ctx();if(!a)return;
    const o=a.createOscillator(),g=a.createGain(),t0=a.currentTime+(delay||0);
    o.type=type||'sine';o.frequency.setValueAtTime(f,t0);
    if(glideTo)o.frequency.exponentialRampToValueAtTime(glideTo,t0+d);
    g.gain.setValueAtTime(0.0001,t0);g.gain.exponentialRampToValueAtTime(v||.08,t0+.012);g.gain.exponentialRampToValueAtTime(.0008,t0+d);
    o.connect(g);g.connect(dest||master);o.start(t0);o.stop(t0+d+.05);
  }
  // bruit filtré : pas, applaudissements, maracas
  let bruitBuf=null;
  function bruit(d,v,delay,fType,fFreq,dest,q){
    const a=ctx();if(!a)return;
    if(!bruitBuf){bruitBuf=a.createBuffer(1,a.sampleRate,a.sampleRate);const c=bruitBuf.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=Math.random()*2-1}
    const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain(),t0=a.currentTime+(delay||0);
    s.buffer=bruitBuf;s.loop=true;f.type=fType||'lowpass';f.frequency.value=fFreq||600;if(q)f.Q.value=q;
    g.gain.setValueAtTime(0.0001,t0);g.gain.exponentialRampToValueAtTime(v||.1,t0+.008);g.gain.exponentialRampToValueAtTime(.0008,t0+d);
    s.connect(f);f.connect(g);g.connect(dest||master);s.start(t0,Math.random()*.5);s.stop(t0+d+.05);
  }
  const marimba=(f,d,v,delay,dest)=>{tone(f,d,'sine',v,delay,dest);tone(f*4,d*.35,'sine',(v||.08)*.25,delay,dest)};
  let pas=0;
  const SFX={
    // petit « ding » : réponse enregistrée
    ok:()=>{if(!sonOn())return;tone(784,.16,'triangle',.08);tone(1175,.22,'sine',.07,.08)},
    // « bravo » : fanfare courte + applaudissements
    bravo:()=>{
      if(!sonOn())return;
      [523,659,784,1047].forEach((f,i)=>{tone(f,.2,'triangle',.09,i*.09);tone(f*2,.16,'sine',.03,i*.09)});
      tone(1319,.45,'triangle',.08,.4);tone(1568,.5,'sine',.05,.42);
      for(let i=0;i<10;i++)bruit(.07,.05,.45+i*.05+Math.random()*.03,'bandpass',1800+Math.random()*1500,null,1.2);
    },
    // « félicitations » : grande fanfare et longue salve d'applaudissements
    felicitations:()=>{
      if(!sonOn())return;
      const m=[523,523,659,784,659,784,1047];
      m.forEach((f,i)=>{tone(f,i===m.length-1?.9:.22,'triangle',.1,i*.17);tone(f/2,i===m.length-1?.9:.22,'sine',.05,i*.17)});
      [1047,1319,1568].forEach(f=>tone(f,1.1,'sine',.05,1.15));
      for(let i=0;i<34;i++)bruit(.08,.06,1.2+i*.055+Math.random()*.04,'bandpass',1500+Math.random()*2200,null,1.1);
    },
    // « perdu » : trombone triste qui descend (wah-wah-wah-waaah)
    perdu:()=>{
      if(!sonOn())return;
      [[392,.2,0],[370,.2,.22],[349,.2,.44],[311,.7,.66]].forEach(([f,d,t],i)=>{
        tone(f,d,'sawtooth',.06,t,null,f*(i===3?.82:.96));tone(f*1.005,d,'square',.02,t,null,f*(i===3?.82:.96));
      });
    },
    coin:()=>{if(sonOn()){tone(1200,.08,'triangle',.07);tone(1600,.12,'triangle',.06,.06)}},
    win:()=>SFX.felicitations(),
    ko:()=>SFX.perdu(),
    // pas : petit « toc » assourdi, une fois à gauche et une fois à droite
    step:()=>{
      if(!sonOn())return;
      pas++;
      bruit(.07,.11,0,'lowpass',pas%2?520:430);
      tone(pas%2?110:95,.06,'sine',.05);
    }
  };

  // ---------- musique d'ambiance ----------
  // gamme pentatonique (do, ré, mi, sol, la) : toujours harmonieuse
  const PENTA=[0,2,4,7,9];
  const base=261.63;
  const note=(deg,oct)=>base*Math.pow(2,(PENTA[((deg%5)+5)%5]+12*(oct+Math.floor(deg/5)))/12);
  const HUMEURS={
    accueil:{bpm:96,notes:.65,perc:true,basse:true,oct:0,type:'marimba'},
    village:{bpm:108,notes:.6,perc:true,basse:true,oct:0,type:'marimba'},
    mission:{bpm:80,notes:.45,perc:false,basse:true,oct:0,type:'doux'},
    maison:{bpm:72,notes:.4,perc:false,basse:false,oct:0,type:'doux'}
  };
  const PROG=[[0,2,4],[ -1,1,3],[ -3,-1,1],[ -2,0,2]]; // accords (degrés) sur quatre mesures
  let humeur=null,actif=false,timer=null,prochain=0,pas16=0,mesure=0,dernierDeg=4,graine=7;
  const alea=()=>{graine=(graine*16807)%2147483647;return graine/2147483647};
  function planifier(){
    const a=AC;if(!a||!actif||!musOn()||!humeur)return;
    const h=HUMEURS[humeur],dt=60/h.bpm/4; // seizième de temps
    while(prochain<a.currentTime+.6){
      const t=prochain-a.currentTime,acc=PROG[mesure%4],temps=pas16%16;
      if(h.basse&&(temps===0||temps===8||(h.perc&&temps===11))){marimba(note(acc[0],-1),.5,.07,t,musGain)}
      if(temps%4===0&&temps%8!==0&&!h.perc)tone(note(acc[1],0),.9,'sine',.025,t,musGain);
      if(alea()<h.notes&&(h.perc?[0,3,6,8,10,12,14].includes(temps):temps%2===0)){
        const saut=[-2,-1,0,1,2][Math.floor(alea()*5)];
        dernierDeg=Math.max(0,Math.min(9,dernierDeg+saut));
        const deg=alea()<.55?acc[Math.floor(alea()*3)]+5:dernierDeg;
        if(h.type==='marimba')marimba(note(deg,0),.35,.06,t,musGain);else{tone(note(deg,0),.7,'triangle',.04,t,musGain)}
      }
      if(h.perc&&temps%2===0)bruit(.035,temps%4===0?.03:.018,t,'highpass',6000,musGain);
      if(h.perc&&(temps===0||temps===6||temps===10))bruit(.08,.05,t,'lowpass',260,musGain);
      prochain+=dt;pas16++;if(pas16%16===0)mesure++;
    }
  }
  const Music={
    play(nom){
      humeur=HUMEURS[nom]?nom:'village';
      if(!musOn()||!ctx())return;
      musGain.gain.cancelScheduledValues(AC.currentTime);musGain.gain.setTargetAtTime(.5,AC.currentTime,.4);
      if(!actif){actif=true;prochain=AC.currentTime+.1;pas16=0;mesure=0;timer=setInterval(planifier,180)}
    },
    stop(){actif=false;clearInterval(timer);timer=null},
    humeur(nom){if(HUMEURS[nom])humeur=nom},
    // la voix de lecture passe devant la musique
    baisser(oui){if(AC&&musGain)musGain.gain.setTargetAtTime(oui?.18:.5,AC.currentTime,.15)},
    maj(){if(!musOn())this.stop();else if(humeur&&!actif)this.play(humeur)},
    nom:()=>humeur
  };
  return {SFX,Music,unlock:ctx};
}
