import * as THREE from 'three';
import {Sky} from 'three/examples/jsm/objects/Sky.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/examples/jsm/postprocessing/GTAOPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';

// Rendu réaliste : ciel physique, éclairage par l'environnement, brume, occlusion ambiante, bloom, vignettage.
const VIGNETTE={
  uniforms:{tDiffuse:{value:null},amount:{value:.32}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform sampler2D tDiffuse;uniform float amount;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);vec2 d=vUv-.5;float v=smoothstep(.85,.25,length(d*vec2(1.1,1.)));c.rgb*=mix(1.-amount,1.,v);gl_FragColor=c;}'
};

export function createRig(renderer,scene,camera){
  const rig={quality:'high',sunDir:new THREE.Vector3(),sky:null,env:null,composer:null,gtao:null,bloom:null};
  // ----- ciel -----
  const sky=new Sky();sky.scale.setScalar(450);scene.add(sky);rig.sky=sky;
  const u=sky.material.uniforms;
  u.turbidity.value=3.2;u.rayleigh.value=1.25;u.mieCoefficient.value=.0045;u.mieDirectionalG.value=.86;
  function setSun(elev,azim){
    const phi=THREE.MathUtils.degToRad(90-elev),theta=THREE.MathUtils.degToRad(azim);
    rig.sunDir.setFromSphericalCoords(1,phi,theta);u.sunPosition.value.copy(rig.sunDir);
  }
  setSun(34,205);
  // ----- éclairage par l'environnement (PMREM du ciel) -----
  const pm=new THREE.PMREMGenerator(renderer);
  function bakeEnv(){
    const es=new THREE.Scene();es.add(sky);
    if(rig.env)rig.env.dispose();
    rig.env=pm.fromScene(es);scene.add(sky);
    return rig.env.texture;
  }
  rig.envTex=bakeEnv();
  scene.environment=rig.envTex;
  // ----- post-traitement -----
  function build(w,h){
    const c=new EffectComposer(renderer);c.setPixelRatio(renderer.getPixelRatio());c.setSize(w,h);
    c.addPass(new RenderPass(scene,camera));
    if(rig.quality==='high'){
      rig.gtao=new GTAOPass(scene,camera,w,h);
      rig.gtao.output=GTAOPass.OUTPUT.Default;
      rig.gtao.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1,screenSpaceRadius:false});
      rig.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12});
      rig.gtao.blendIntensity=.9;
      c.addPass(rig.gtao);
    }else rig.gtao=null;
    if(rig.quality!=='low'){
      rig.bloom=new UnrealBloomPass(new THREE.Vector2(w,h),.18,.65,.9);c.addPass(rig.bloom);
    }
    c.addPass(new OutputPass());
    if(rig.quality!=='low')c.addPass(new ShaderPass(VIGNETTE));
    rig.composer=c;
  }
  rig.setQuality=(q,w,h)=>{rig.quality=q;if(rig.composer){rig.composer.dispose&&rig.composer.dispose()}rig.composer=null;if(q!=='low')build(w,h)};
  rig.resize=(w,h)=>{if(rig.composer)rig.composer.setSize(w,h)};
  rig.render=()=>{if(rig.composer&&rig.quality!=='low')rig.composer.render();else renderer.render(scene,camera)};
  rig.follow=()=>{sky.position.copy(camera.position)};
  rig.setSun=setSun;
  // ambiance d'un lieu : hauteur du soleil, orientation, voile atmosphérique
  rig.setSky=(o)=>{
    o=o||{};
    u.turbidity.value=o.turb===undefined?3.2:o.turb;u.rayleigh.value=o.ray===undefined?1.25:o.ray;
    setSun(o.elev===undefined?34:o.elev,o.azim===undefined?205:o.azim);
    rig.envTex=bakeEnv();scene.environment=rig.envTex;
  };
  return rig;
}
