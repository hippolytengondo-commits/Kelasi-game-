(()=>{var Fd=Object.defineProperty;var Lc=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Bd=(n,e)=>{for(var t in e)Fd(n,t,{get:e[t],enumerable:!0})};function fs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Ff(n,e){return(n%e+e)%e}function mo(n,e,t){return(1-t)*n+t*e}function gh(n){return(n&n-1)===0&&n!==0}function Zo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Eu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bf(){let n=Gs("canvas");return n.style.display="block",n}function Us(n){n in _h||(_h[n]=!0,console.warn(n))}function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function xo(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function yo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gi.fromArray(n,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Kf(n,e,t,i,s,r,a,o){let l;if(e.side===Dt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:n}}function Vr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Yi),n.getVertexPosition(l,$i),n.getVertexPosition(c,Zi);let h=Kf(n,e,t,i,Yi,$i,Zi,kr);if(h){s&&(Fr.fromBufferAttribute(s,o),Br.fromBufferAttribute(s,l),zr.fromBufferAttribute(s,c),h.uv=es.getInterpolation(kr,Yi,$i,Zi,Fr,Br,zr,new ye)),r&&(Fr.fromBufferAttribute(r,o),Br.fromBufferAttribute(r,l),zr.fromBufferAttribute(r,c),h.uv1=es.getInterpolation(kr,Yi,$i,Zi,Fr,Br,zr,new ye),h.uv2=h.uv1),a&&(Ph.fromBufferAttribute(a,o),Lh.fromBufferAttribute(a,l),Ih.fromBufferAttribute(a,c),h.normal=es.getInterpolation(kr,Yi,$i,Zi,Ph,Lh,Ih,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};es.getNormal(Yi,$i,Zi,u.normal),h.face=u}return h}function hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=hs(n[t]);for(let s in i)e[s]=i[s]}return e}function Qf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wu(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}function Au(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}function zg(n,e,t,i,s,r,a){let o=new He(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===La)?(h===void 0&&(h=new pe(new Mt(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:hs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,(u!==v||d!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pe(new ft(2,2),new Hn({name:"BackgroundMaterial",uniforms:hs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Wr,wu(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function kg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,O,Z,ie,Q){let J=!1;if(a){let ae=x(ie,Z,O);c!==ae&&(c=ae,f(c.object)),J=p(L,ie,Z,Q),J&&S(L,ie,Z,Q)}else{let ae=O.wireframe===!0;(c.geometry!==ie.id||c.program!==Z.id||c.wireframe!==ae)&&(c.geometry=ie.id,c.program=Z.id,c.wireframe=ae,J=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,H(L,O,Z,ie),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,Z){let ie=Z.wireframe===!0,Q=o[L.id];Q===void 0&&(Q={},o[L.id]=Q);let J=Q[O.id];J===void 0&&(J={},Q[O.id]=J);let ae=J[ie];return ae===void 0&&(ae=m(d()),J[ie]=ae),ae}function m(L){let O=[],Z=[],ie=[];for(let Q=0;Q<s;Q++)O[Q]=0,Z[Q]=0,ie[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:ie,object:L,attributes:{},index:null}}function p(L,O,Z,ie){let Q=c.attributes,J=O.attributes,ae=0,ce=Z.getAttributes();for(let ue in ce)if(ce[ue].location>=0){let ee=Q[ue],de=J[ue];if(de===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;ae++}return c.attributesNum!==ae||c.index!==ie}function S(L,O,Z,ie){let Q={},J=O.attributes,ae=0,ce=Z.getAttributes();for(let ue in ce)if(ce[ue].location>=0){let ee=J[ue];ee===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),Q[ue]=de,ae++}c.attributes=Q,c.attributesNum=ae,c.index=ie}function v(){let L=c.newAttributes;for(let O=0,Z=L.length;O<Z;O++)L[O]=0}function T(L){C(L,0)}function C(L,O){let Z=c.newAttributes,ie=c.enabledAttributes,Q=c.attributeDivisors;Z[L]=1,ie[L]===0&&(n.enableVertexAttribArray(L),ie[L]=1),Q[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),Q[L]=O)}function A(){let L=c.newAttributes,O=c.enabledAttributes;for(let Z=0,ie=O.length;Z<ie;Z++)O[Z]!==L[Z]&&(n.disableVertexAttribArray(Z),O[Z]=0)}function R(L,O,Z,ie,Q,J,ae){ae===!0?n.vertexAttribIPointer(L,O,Z,Q,J):n.vertexAttribPointer(L,O,Z,ie,Q,J)}function H(L,O,Z,ie){if(i.isWebGL2===!1&&(L.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Q=ie.attributes,J=Z.getAttributes(),ae=O.defaultAttributeValues;for(let ce in J){let ue=J[ce];if(ue.location>=0){let q=Q[ce];if(q===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let ee=q.normalized,de=q.itemSize,ve=t.get(q);if(ve===void 0)continue;let Te=ve.buffer,se=ve.type,fe=ve.bytesPerElement,he=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||q.gpuType===pu);if(q.isInterleavedBufferAttribute){let Ae=q.data,z=Ae.stride,Ne=q.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ue.locationSize;Ee++)C(ue.location+Ee,Ae.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<ue.locationSize;Ee++)T(ue.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ee=0;Ee<ue.locationSize;Ee++)R(ue.location+Ee,de/ue.locationSize,se,ee,z*fe,(Ne+de/ue.locationSize*Ee)*fe,he)}else{if(q.isInstancedBufferAttribute){for(let Ae=0;Ae<ue.locationSize;Ae++)C(ue.location+Ae,q.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ae=0;Ae<ue.locationSize;Ae++)T(ue.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ae=0;Ae<ue.locationSize;Ae++)R(ue.location+Ae,de/ue.locationSize,se,ee,de*fe,de/ue.locationSize*Ae*fe,he)}}else if(ae!==void 0){let ee=ae[ce];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(ue.location,ee);break;case 3:n.vertexAttrib3fv(ue.location,ee);break;case 4:n.vertexAttrib4fv(ue.location,ee);break;default:n.vertexAttrib1fv(ue.location,ee)}}}}A()}function _(){V();for(let L in o){let O=o[L];for(let Z in O){let ie=O[Z];for(let Q in ie)g(ie[Q].object),delete ie[Q];delete O[Z]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let O=o[L.id];for(let Z in O){let ie=O[Z];for(let Q in ie)g(ie[Q].object),delete ie[Q];delete O[Z]}delete o[L.id]}function U(L){for(let O in o){let Z=o[O];if(Z[L.id]===void 0)continue;let ie=Z[L.id];for(let Q in ie)g(ie[Q].object),delete ie[Q];delete Z[L.id]}}function V(){te(),h=!0,c!==l&&(c=l,f(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:te,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:T,disableUnusedAttributes:A}}function Hg(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Vg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,T=a||e.has("OES_texture_float"),C=v&&T,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function Gg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new On,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,v=S*4,T=p.clippingState||null;l.value=T,T=h(g,d,v,f);for(let C=0;C!==v;++C)T[C]=t[C];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,T=f;v!==x;++v,T+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Wg(n){let e=new WeakMap;function t(a,o){return o===Xo?a.mapping=os:o===qo&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xo||o===qo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new el(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Xg(n){let e=[],t=[],i=[],s=n,r=n-ts+1+Dh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ts?l=Dh[a-n+ts-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),v=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,H=A>2?0:-1,_=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];S.set(_,x*g*A),v.set(d,m*g*A);let b=[A,A,A,A,A,A];T.set(b,p*g*A)}let C=new Jt;C.setAttribute("position",new nn(S,x)),C.setAttribute("uv",new nn(v,m)),C.setAttribute("faceIndex",new nn(T,p)),e.push(C),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oh(n,e,t){let i=new zn(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qg(n,e,t){let i=new Float32Array(Mi),s=new P(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Fh(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bh(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xo||l===qo,h=l===os||l===ls;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new pa(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new pa(n));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $g(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zg(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let v=0,T=S.length;v<T;v+=3){let C=S[v+0],A=S[v+1],R=S[v+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){let S=g.array;x=g.version;for(let v=0,T=S.length/3-1;v<T;v+=3){let C=v+0,A=v+1,R=v+2;d.push(C,A,A,R,R,C)}}else return;let m=new(Eu(d)?ha:ca)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Jg(n,e,t,i){let s=i.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,o,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let S=0;S<x;S++)p+=g[S];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function jg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Kg(n,e){return n[0]-e[0]}function Qg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function e0(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],H=0;S===!0&&(H=1),v===!0&&(H=2),T===!0&&(H=3);let _=h.attributes.position.count*H,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let U=new Float32Array(_*b*4*g),V=new aa(U,_,b,g);V.type=Qn,V.needsUpdate=!0;let te=H*4;for(let O=0;O<g;O++){let Z=C[O],ie=A[O],Q=R[O],J=_*b*4*O;for(let ae=0;ae<Z.count;ae++){let ce=ae*te;S===!0&&(a.fromBufferAttribute(Z,ae),U[J+ce+0]=a.x,U[J+ce+1]=a.y,U[J+ce+2]=a.z,U[J+ce+3]=0),v===!0&&(a.fromBufferAttribute(ie,ae),U[J+ce+4]=a.x,U[J+ce+5]=a.y,U[J+ce+6]=a.z,U[J+ce+7]=0),T===!0&&(a.fromBufferAttribute(Q,ae),U[J+ce+8]=a.x,U[J+ce+9]=a.y,U[J+ce+10]=a.z,U[J+ce+11]=Q.itemSize===4?a.w:1)}}x={count:g,texture:V,size:new ye(_,b)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<f;v++){let T=g[v];T[0]=v,T[1]=d[v]}g.sort(Qg);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Kg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let T=o[v],C=T[0],A=T[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),m&&h.getAttribute("morphNormal"+v)!==m[C]&&h.setAttribute("morphNormal"+v,m[C]),s[v]=A,p+=A):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function t0(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function ps(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Da(n,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function r0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function a0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Gh.set(i),n.uniformMatrix2fv(this.addr,!1,Gh),Et(t,i)}}function o0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Vh.set(i),n.uniformMatrix3fv(this.addr,!1,Vh),Et(t,i)}}function l0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Hh.set(i),n.uniformMatrix4fv(this.addr,!1,Hh),Et(t,i)}}function c0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function u0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function d0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function f0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function m0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function g0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function _0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Cu:Ru;t.setTexture2D(e||r,s)}function x0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lu,s)}function v0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Iu,s)}function y0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pu,s)}function M0(n){switch(n){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return y0}}function b0(n,e){n.uniform1fv(this.addr,e)}function S0(n,e){let t=ps(e,this.size,2);n.uniform2fv(this.addr,t)}function E0(n,e){let t=ps(e,this.size,3);n.uniform3fv(this.addr,t)}function T0(n,e){let t=ps(e,this.size,4);n.uniform4fv(this.addr,t)}function w0(n,e){let t=ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A0(n,e){let t=ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R0(n,e){let t=ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C0(n,e){n.uniform1iv(this.addr,e)}function P0(n,e){n.uniform2iv(this.addr,e)}function L0(n,e){n.uniform3iv(this.addr,e)}function I0(n,e){n.uniform4iv(this.addr,e)}function D0(n,e){n.uniform1uiv(this.addr,e)}function U0(n,e){n.uniform2uiv(this.addr,e)}function N0(n,e){n.uniform3uiv(this.addr,e)}function O0(n,e){n.uniform4uiv(this.addr,e)}function F0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ru,r[a])}function B0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lu,r[a])}function z0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Iu,r[a])}function k0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pu,r[a])}function H0(n){switch(n){case 5126:return b0;case 35664:return S0;case 35665:return E0;case 35666:return T0;case 35674:return w0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function Wh(n,e){n.seq.push(e),n.map[e.id]=e}function V0(n,e,t){let i=n.name,s=i.length;for(Fo.lastIndex=0;;){let r=Fo.exec(i),a=Fo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wh(t,c===void 0?new tl(o,n,e):new nl(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new il(o),Wh(t,u)),t=u}}}function Xh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function X0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function q0(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===na&&t===ta?i="LinearDisplayP3ToLinearSRGB":e===ta&&t===na&&(i="LinearSRGBToLinearDisplayP3"),n){case Bn:case Ia:return[i,"LinearTransferOETF"];case it:case Fl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X0(n.getShaderSource(e),a)}else return s}function Y0(n,e){let t=q0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $0(n,e){let t;switch(e){case ff:t="Linear";break;case pf:t="Reinhard";break;case mf:t="OptimizedCineon";break;case Nl:t="ACESFilmic";break;case _f:t="AgX";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function J0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function j0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ns(n){return n!==""}function Yh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sl(n){return n.replace(Q0,t_)}function t_(n,e){let t=Ye[e];if(t===void 0){let i=e_.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}function Zh(n){return n.replace(n_,i_)}function i_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ls&&(e="ENVMAP_MODE_REFRACTION"),e}function o_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case df:e="ENVMAP_BLENDING_ADD";break}return e}function l_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function c_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=s_(t),c=r_(t),h=a_(t),u=o_(t),d=l_(t),f=t.isWebGL2?"":Z0(t),g=J0(t),x=j0(r),m=s.createProgram(),p,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ns).join(`
`),p.length>0&&(p+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ns).join(`
`),S.length>0&&(S+=`
`)):(p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),S=[f,Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ti?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=sl(a),a=Yh(a,t),a=$h(a,t),o=sl(o),o=Yh(o,t),o=$h(o,t),a=Zh(a),o=Zh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=v+p+a,C=v+S+o,A=Xh(s,s.VERTEX_SHADER,T),R=Xh(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(V){if(n.debug.checkShaderErrors){let te=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(R).trim(),Z=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,R);else{let Q=qh(s,A,"vertex"),J=qh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+Q+`
`+J)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||O==="")&&(ie=!1);ie&&(V.diagnostics={runnable:Z,programLog:te,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:S}})}s.deleteShader(A),s.deleteShader(R),_=new as(s,m),b=K0(s,m)}let _;this.getUniforms=function(){return _===void 0&&H(this),_};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,G0)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}function u_(n,e,t,i,s,r,a){let o=new la,l=new rl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function m(_,b,U,V,te){let L=V.fog,O=te.geometry,Z=_.isMeshStandardMaterial?V.environment:null,ie=(_.isMeshStandardMaterial?t:e).get(_.envMap||Z),Q=ie&&ie.mapping===La?ie.image.height:null,J=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=ae!==void 0?ae.length:0,ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let q,ee,de,ve;if(J){let Vt=Mn[J];q=Vt.vertexShader,ee=Vt.fragmentShader}else q=_.vertexShader,ee=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),ve=l.getFragmentShaderID(_);let Te=n.getRenderTarget(),se=te.isInstancedMesh===!0,fe=te.isBatchedMesh===!0,he=!!_.map,Ae=!!_.matcap,z=!!ie,Ne=!!_.aoMap,Ee=!!_.lightMap,Me=!!_.bumpMap,Re=!!_.normalMap,j=!!_.displacementMap,k=!!_.emissiveMap,M=!!_.metalnessMap,y=!!_.roughnessMap,D=_.anisotropy>0,ne=_.clearcoat>0,K=_.iridescence>0,oe=_.sheen>0,F=_.transmission>0,G=D&&!!_.anisotropyMap,B=ne&&!!_.clearcoatMap,re=ne&&!!_.clearcoatNormalMap,le=ne&&!!_.clearcoatRoughnessMap,W=K&&!!_.iridescenceMap,Be=K&&!!_.iridescenceThicknessMap,De=oe&&!!_.sheenColorMap,Pe=oe&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,we=!!_.specularColorMap,Ve=!!_.specularIntensityMap,Ke=F&&!!_.transmissionMap,st=F&&!!_.thicknessMap,We=!!_.gradientMap,me=!!_.alphaMap,I=_.alphaTest>0,_e=!!_.alphaHash,xe=!!_.extensions,ze=!!O.attributes.uv1,Oe=!!O.attributes.uv2,rt=!!O.attributes.uv3,at=ti;return _.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:h,shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:ee,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:fe,instancing:se,instancingColor:se&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Bn,map:he,matcap:Ae,envMap:z,envMapMode:z&&ie.mapping,envMapCubeUVHeight:Q,aoMap:Ne,lightMap:Ee,bumpMap:Me,normalMap:Re,displacementMap:d&&j,emissiveMap:k,normalMapObjectSpace:Re&&_.normalMapType===Cf,normalMapTangentSpace:Re&&_.normalMapType===bu,metalnessMap:M,roughnessMap:y,anisotropy:D,anisotropyMap:G,clearcoat:ne,clearcoatMap:B,clearcoatNormalMap:re,clearcoatRoughnessMap:le,iridescence:K,iridescenceMap:W,iridescenceThicknessMap:Be,sheen:oe,sheenColorMap:De,sheenRoughnessMap:Pe,specularMap:Ce,specularColorMap:we,specularIntensityMap:Ve,transmission:F,transmissionMap:Ke,thicknessMap:st,gradientMap:We,opaque:_.transparent===!1&&_.blending===ss,alphaMap:me,alphaTest:I,alphaHash:_e,combine:_.combine,mapUv:he&&x(_.map.channel),aoMapUv:Ne&&x(_.aoMap.channel),lightMapUv:Ee&&x(_.lightMap.channel),bumpMapUv:Me&&x(_.bumpMap.channel),normalMapUv:Re&&x(_.normalMap.channel),displacementMapUv:j&&x(_.displacementMap.channel),emissiveMapUv:k&&x(_.emissiveMap.channel),metalnessMapUv:M&&x(_.metalnessMap.channel),roughnessMapUv:y&&x(_.roughnessMap.channel),anisotropyMapUv:G&&x(_.anisotropyMap.channel),clearcoatMapUv:B&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(_.sheenRoughnessMap.channel),specularMapUv:Ce&&x(_.specularMap.channel),specularColorMapUv:we&&x(_.specularColorMap.channel),specularIntensityMapUv:Ve&&x(_.specularIntensityMap.channel),transmissionMapUv:Ke&&x(_.transmissionMap.channel),thicknessMapUv:st&&x(_.thicknessMap.channel),alphaMapUv:me&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Re||D),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Oe,vertexUv3s:rt,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(he||me),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===It,flipSided:_.side===Dt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:xe&&_.extensions.derivatives===!0,extensionFragDepth:xe&&_.extensions.fragDepth===!0,extensionDrawBuffers:xe&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(S(b,_),v(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function S(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function T(_){let b=g[_.type],U;if(b){let V=Mn[b];U=ep.clone(V.uniforms)}else U=_.uniforms;return U}function C(_,b){let U;for(let V=0,te=c.length;V<te;V++){let L=c[V];if(L.cacheKey===b){U=L,++U.usedTimes;break}}return U===void 0&&(U=new c_(n,b,_,r),c.push(U)),U}function A(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),_.destroy()}}function R(_){l.remove(_)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:H}}function d_(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function f_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||f_),i.length>1&&i.sort(d||jh),s.length>1&&s.sort(d||jh)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function p_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Kh,n.set(i,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function m_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function g_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function x_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v_(n,e){let t=new m_,i=g_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new ht,o=new ht;function l(h,u){let d=0,f=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let x=0,m=0,p=0,S=0,v=0,T=0,C=0,A=0,R=0,H=0,_=0;h.sort(x_);let b=u===!0?Math.PI:1;for(let V=0,te=h.length;V<te;V++){let L=h[V],O=L.color,Z=L.intensity,ie=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*Z*b,f+=O.g*Z*b,g+=O.b*Z*b;else if(L.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(L.sh.coefficients[J],Z);_++}else if(L.isDirectionalLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let ae=L.shadow,ce=i.get(L);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,s.directionalShadow[x]=ce,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=L.shadow.matrix,T++}s.directional[x]=J,x++}else if(L.isSpotLight){let J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(O).multiplyScalar(Z*b),J.distance=ie,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,s.spot[p]=J;let ae=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,ae.updateMatrices(L),L.castShadow&&H++),s.spotLightMatrix[p]=ae.matrix,L.castShadow){let ce=i.get(L);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,s.spotShadow[p]=ce,s.spotShadowMap[p]=Q,A++}p++}else if(L.isRectAreaLight){let J=t.get(L);J.color.copy(O).multiplyScalar(Z),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=J,S++}else if(L.isPointLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*b),J.distance=L.distance,J.decay=L.decay,L.castShadow){let ae=L.shadow,ce=i.get(L);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=Q,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=J,m++}else if(L.isHemisphereLight){let J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(Z*b),J.groundColor.copy(L.groundColor).multiplyScalar(Z*b),s.hemi[v]=J,v++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==S||U.hemiLength!==v||U.numDirectionalShadows!==T||U.numPointShadows!==C||U.numSpotShadows!==A||U.numSpotMaps!==R||U.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-H,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=_,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=S,U.hemiLength=v,U.numDirectionalShadows=T,U.numPointShadows=C,U.numSpotShadows=A,U.numSpotMaps=R,U.numLightProbes=_,s.version=__++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let T=h[S];if(T.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(T.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(T.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Qh(n,e){let t=new v_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function y_(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Qh(n,e),t.set(r,[l])):a>=o.length?(l=new Qh(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function S_(n,e,t){let i=new Ws,s=new ye,r=new ye,a=new dt,o=new ol({depthPacking:Rf}),l=new ll,c={},h=t.maxTextureSize,u={[ii]:Dt,[Dt]:ii,[It]:It},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:M_,fragmentShader:b_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let p=this.type;this.render=function(A,R,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ei),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let te=p!==Nn&&this.type===Nn,L=p===Nn&&this.type!==Nn;for(let O=0,Z=A.length;O<Z;O++){let ie=A[O],Q=ie.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let J=Q.getFrameExtents();if(s.multiply(J),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,Q.mapSize.y=r.y)),Q.map===null||te===!0||L===!0){let ce=this.type!==Nn?{minFilter:Xt,magFilter:Xt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new zn(s.x,s.y,ce),Q.map.texture.name=ie.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let ae=Q.getViewportCount();for(let ce=0;ce<ae;ce++){let ue=Q.getViewport(ce);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),V.viewport(a),Q.updateMatrices(ie,ce),i=Q.getFrustum(),T(R,H,Q.camera,ie,this.type)}Q.isPointLightShadow!==!0&&this.type===Nn&&S(Q,H),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(_,b,U)};function S(A,R){let H=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,H,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,H,f,x,null)}function v(A,R,H,_){let b=null,U=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=H.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=b.uuid,te=R.uuid,L=c[V];L===void 0&&(L={},c[V]=L);let O=L[te];O===void 0&&(O=b.clone(),L[te]=O,R.addEventListener("dispose",C)),b=O}if(b.visible=R.visible,b.wireframe=R.wireframe,_===Nn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=n.properties.get(b);V.light=H}return b}function T(A,R,H,_,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Nn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);let te=e.update(A),L=A.material;if(Array.isArray(L)){let O=te.groups;for(let Z=0,ie=O.length;Z<ie;Z++){let Q=O[Z],J=L[Q.materialIndex];if(J&&J.visible){let ae=v(A,J,_,b);A.onBeforeShadow(n,A,R,H,te,ae,Q),n.renderBufferDirect(H,null,te,ae,A,Q),A.onAfterShadow(n,A,R,H,te,ae,Q)}}}else if(L.visible){let O=v(A,L,_,b);A.onBeforeShadow(n,A,R,H,te,O,null),n.renderBufferDirect(H,null,te,O,A,null),A.onAfterShadow(n,A,R,H,te,O,null)}}let V=A.children;for(let te=0,L=V.length;te<L;te++)T(V[te],R,H,_,b)}function C(A){A.target.removeEventListener("dispose",C);for(let H in c){let _=c[H],b=A.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function E_(n,e,t){let i=t.isWebGL2;function s(){let I=!1,_e=new dt,xe=null,ze=new dt(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!I&&(n.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){I=Oe},setClear:function(Oe,rt,at,wt,Vt){Vt===!0&&(Oe*=wt,rt*=wt,at*=wt),_e.set(Oe,rt,at,wt),ze.equals(_e)===!1&&(n.clearColor(Oe,rt,at,wt),ze.copy(_e))},reset:function(){I=!1,xe=null,ze.set(-1,0,0,0)}}}function r(){let I=!1,_e=null,xe=null,ze=null;return{setTest:function(Oe){Oe?fe(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(Oe){_e!==Oe&&!I&&(n.depthMask(Oe),_e=Oe)},setFunc:function(Oe){if(xe!==Oe){switch(Oe){case sf:n.depthFunc(n.NEVER);break;case rf:n.depthFunc(n.ALWAYS);break;case af:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case of:n.depthFunc(n.EQUAL);break;case lf:n.depthFunc(n.GEQUAL);break;case cf:n.depthFunc(n.GREATER);break;case hf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Oe}},setLocked:function(Oe){I=Oe},setClear:function(Oe){ze!==Oe&&(n.clearDepth(Oe),ze=Oe)},reset:function(){I=!1,_e=null,xe=null,ze=null}}}function a(){let I=!1,_e=null,xe=null,ze=null,Oe=null,rt=null,at=null,wt=null,Vt=null;return{setTest:function(ot){I||(ot?fe(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!I&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,Gt,yn){(xe!==ot||ze!==Gt||Oe!==yn)&&(n.stencilFunc(ot,Gt,yn),xe=ot,ze=Gt,Oe=yn)},setOp:function(ot,Gt,yn){(rt!==ot||at!==Gt||wt!==yn)&&(n.stencilOp(ot,Gt,yn),rt=ot,at=Gt,wt=yn)},setLocked:function(ot){I=ot},setClear:function(ot){Vt!==ot&&(n.clearStencil(ot),Vt=ot)},reset:function(){I=!1,_e=null,xe=null,ze=null,Oe=null,rt=null,at=null,wt=null,Vt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,S=null,v=null,T=null,C=null,A=null,R=null,H=null,_=new He(0,0,0),b=0,U=!1,V=null,te=null,L=null,O=null,Z=null,ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,J=0,ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Q=J>=1):ae.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Q=J>=2);let ce=null,ue={},q=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),de=new dt().fromArray(q),ve=new dt().fromArray(ee);function Te(I,_e,xe,ze){let Oe=new Uint8Array(4),rt=n.createTexture();n.bindTexture(I,rt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<xe;at++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(_e+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return rt}let se={};se[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(n.DEPTH_TEST),l.setFunc(jr),k(!1),M(Ic),fe(n.CULL_FACE),Re(ei);function fe(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function he(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Ae(I,_e){return f[I]!==_e?(n.bindFramebuffer(I,_e),f[I]=_e,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function z(I,_e){let xe=x,ze=!1;if(I)if(xe=g.get(_e),xe===void 0&&(xe=[],g.set(_e,xe)),I.isWebGLMultipleRenderTargets){let Oe=I.texture;if(xe.length!==Oe.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,at=Oe.length;rt<at;rt++)xe[rt]=n.COLOR_ATTACHMENT0+rt;xe.length=Oe.length,ze=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,ze=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Ne(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let Ee={[yi]:n.FUNC_ADD,[Vd]:n.FUNC_SUBTRACT,[Gd]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Oc]=n.MIN,Ee[Fc]=n.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ee[Oc]=I.MIN_EXT,Ee[Fc]=I.MAX_EXT)}let Me={[Wd]:n.ZERO,[Xd]:n.ONE,[qd]:n.SRC_COLOR,[Go]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Jd]:n.DST_COLOR,[$d]:n.DST_ALPHA,[Yd]:n.ONE_MINUS_SRC_COLOR,[Wo]:n.ONE_MINUS_SRC_ALPHA,[jd]:n.ONE_MINUS_DST_COLOR,[Zd]:n.ONE_MINUS_DST_ALPHA,[Qd]:n.CONSTANT_COLOR,[ef]:n.ONE_MINUS_CONSTANT_COLOR,[tf]:n.CONSTANT_ALPHA,[nf]:n.ONE_MINUS_CONSTANT_ALPHA};function Re(I,_e,xe,ze,Oe,rt,at,wt,Vt,ot){if(I===ei){p===!0&&(he(n.BLEND),p=!1);return}if(p===!1&&(fe(n.BLEND),p=!0),I!==Hd){if(I!==S||ot!==U){if((v!==yi||A!==yi)&&(n.blendEquation(n.FUNC_ADD),v=yi,A=yi),ot)switch(I){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,C=null,R=null,H=null,_.set(0,0,0),b=0,S=I,U=ot}return}Oe=Oe||_e,rt=rt||xe,at=at||ze,(_e!==v||Oe!==A)&&(n.blendEquationSeparate(Ee[_e],Ee[Oe]),v=_e,A=Oe),(xe!==T||ze!==C||rt!==R||at!==H)&&(n.blendFuncSeparate(Me[xe],Me[ze],Me[rt],Me[at]),T=xe,C=ze,R=rt,H=at),(wt.equals(_)===!1||Vt!==b)&&(n.blendColor(wt.r,wt.g,wt.b,Vt),_.copy(wt),b=Vt),S=I,U=!1}function j(I,_e){I.side===It?he(n.CULL_FACE):fe(n.CULL_FACE);let xe=I.side===Dt;_e&&(xe=!xe),k(xe),I.blending===ss&&I.transparent===!1?Re(ei):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let ze=I.stencilWrite;c.setTest(ze),ze&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),D(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(I){V!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),V=I)}function M(I){I!==zd?(fe(n.CULL_FACE),I!==te&&(I===Ic?n.cullFace(n.BACK):I===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),te=I}function y(I){I!==L&&(Q&&n.lineWidth(I),L=I)}function D(I,_e,xe){I?(fe(n.POLYGON_OFFSET_FILL),(O!==_e||Z!==xe)&&(n.polygonOffset(_e,xe),O=_e,Z=xe)):he(n.POLYGON_OFFSET_FILL)}function ne(I){I?fe(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function K(I){I===void 0&&(I=n.TEXTURE0+ie-1),ce!==I&&(n.activeTexture(I),ce=I)}function oe(I,_e,xe){xe===void 0&&(ce===null?xe=n.TEXTURE0+ie-1:xe=ce);let ze=ue[xe];ze===void 0&&(ze={type:void 0,texture:void 0},ue[xe]=ze),(ze.type!==I||ze.texture!==_e)&&(ce!==xe&&(n.activeTexture(xe),ce=xe),n.bindTexture(I,_e||se[I]),ze.type=I,ze.texture=_e)}function F(){let I=ue[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(I){de.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function Ke(I){ve.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function st(I,_e){let xe=u.get(_e);xe===void 0&&(xe=new WeakMap,u.set(_e,xe));let ze=xe.get(I);ze===void 0&&(ze=n.getUniformBlockIndex(_e,I.name),xe.set(I,ze))}function We(I,_e){let ze=u.get(_e).get(I);h.get(_e)!==ze&&(n.uniformBlockBinding(_e,ze,I.__bindingPointIndex),h.set(_e,ze))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ce=null,ue={},f={},g=new WeakMap,x=[],m=null,p=!1,S=null,v=null,T=null,C=null,A=null,R=null,H=null,_=new He(0,0,0),b=0,U=!1,V=null,te=null,L=null,O=null,Z=null,de.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:he,bindFramebuffer:Ae,drawBuffers:z,useProgram:Ne,setBlending:Re,setMaterial:j,setFlipSided:k,setCullFace:M,setLineWidth:y,setPolygonOffset:D,setScissorTest:ne,activeTexture:K,bindTexture:oe,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:B,texImage2D:Ce,texImage3D:we,updateUBOMapping:st,uniformBlockBinding:We,texStorage2D:De,texStorage3D:Pe,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:W,compressedTexSubImage3D:Be,scissor:Ve,viewport:Ke,reset:me}}function T_(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return f?new OffscreenCanvas(M,y):Gs("canvas")}function x(M,y,D,ne){let K=1;if((M.width>ne||M.height>ne)&&(K=ne/Math.max(M.width,M.height)),K<1||y===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let oe=y?Zo:Math.floor,F=oe(K*M.width),G=oe(K*M.height);u===void 0&&(u=g(F,G));let B=D?g(F,G):u;return B.width=F,B.height=G,B.getContext("2d").drawImage(M,0,0,F,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+F+"x"+G+")."),B}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return gh(M.width)&&gh(M.height)}function p(M){return o?!1:M.wrapS!==mn||M.wrapT!==mn||M.minFilter!==Xt&&M.minFilter!==ln}function S(M,y){return M.generateMipmaps&&y&&M.minFilter!==Xt&&M.minFilter!==ln}function v(M){n.generateMipmap(M)}function T(M,y,D,ne,K=!1){if(o===!1)return y;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=y;if(y===n.RED&&(D===n.FLOAT&&(oe=n.R32F),D===n.HALF_FLOAT&&(oe=n.R16F),D===n.UNSIGNED_BYTE&&(oe=n.R8)),y===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(oe=n.R8UI),D===n.UNSIGNED_SHORT&&(oe=n.R16UI),D===n.UNSIGNED_INT&&(oe=n.R32UI),D===n.BYTE&&(oe=n.R8I),D===n.SHORT&&(oe=n.R16I),D===n.INT&&(oe=n.R32I)),y===n.RG&&(D===n.FLOAT&&(oe=n.RG32F),D===n.HALF_FLOAT&&(oe=n.RG16F),D===n.UNSIGNED_BYTE&&(oe=n.RG8)),y===n.RGBA){let F=K?ea:nt.getTransfer(ne);D===n.FLOAT&&(oe=n.RGBA32F),D===n.HALF_FLOAT&&(oe=n.RGBA16F),D===n.UNSIGNED_BYTE&&(oe=F===ct?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(M,y,D){return S(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Xt&&M.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function A(M){return M===Xt||M===Bc||M===ao?n.NEAREST:n.LINEAR}function R(M){let y=M.target;y.removeEventListener("dispose",R),_(y),y.isVideoTexture&&h.delete(y)}function H(M){let y=M.target;y.removeEventListener("dispose",H),U(y)}function _(M){let y=i.get(M);if(y.__webglInit===void 0)return;let D=M.source,ne=d.get(D);if(ne){let K=ne[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(M),Object.keys(ne).length===0&&d.delete(D)}i.remove(M)}function b(M){let y=i.get(M);n.deleteTexture(y.__webglTexture);let D=M.source,ne=d.get(D);delete ne[y.__cacheKey],a.memory.textures--}function U(M){let y=M.texture,D=i.get(M),ne=i.get(y);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(D.__webglFramebuffer[K]))for(let oe=0;oe<D.__webglFramebuffer[K].length;oe++)n.deleteFramebuffer(D.__webglFramebuffer[K][oe]);else n.deleteFramebuffer(D.__webglFramebuffer[K]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[K])}else{if(Array.isArray(D.__webglFramebuffer))for(let K=0;K<D.__webglFramebuffer.length;K++)n.deleteFramebuffer(D.__webglFramebuffer[K]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let K=0;K<D.__webglColorRenderbuffer.length;K++)D.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[K]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,oe=y.length;K<oe;K++){let F=i.get(y[K]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(y[K])}i.remove(y),i.remove(M)}let V=0;function te(){V=0}function L(){let M=V;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),V+=1,M}function O(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function Z(M,y){let D=i.get(M);if(M.isVideoTexture&&j(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){let ne=M.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(D,M,y);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+y)}function ie(M,y){let D=i.get(M);if(M.version>0&&D.__version!==M.version){de(D,M,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+y)}function Q(M,y){let D=i.get(M);if(M.version>0&&D.__version!==M.version){de(D,M,y);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+y)}function J(M,y){let D=i.get(M);if(M.version>0&&D.__version!==M.version){ve(D,M,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+y)}let ae={[zs]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[ks]:n.MIRRORED_REPEAT},ce={[Xt]:n.NEAREST,[Bc]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[xf]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},ue={[Pf]:n.NEVER,[Of]:n.ALWAYS,[Lf]:n.LESS,[Su]:n.LEQUAL,[If]:n.EQUAL,[Nf]:n.GEQUAL,[Df]:n.GREATER,[Uf]:n.NOTEQUAL};function q(M,y,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ae[y.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ce[y.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ce[y.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==mn||y.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(y.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==Xt&&y.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Xt||y.minFilter!==ao&&y.minFilter!==Hs||y.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(M,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ee(M,y){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",R));let ne=y.source,K=d.get(ne);K===void 0&&(K={},d.set(ne,K));let oe=O(y);if(oe!==M.__cacheKey){K[oe]===void 0&&(K[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[oe].usedTimes++;let F=K[M.__cacheKey];F!==void 0&&(K[M.__cacheKey].usedTimes--,F.usedTimes===0&&b(y)),M.__cacheKey=oe,M.__webglTexture=K[oe].texture}return D}function de(M,y,D){let ne=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=n.TEXTURE_3D);let K=ee(M,y),oe=y.source;t.bindTexture(ne,M.__webglTexture,n.TEXTURE0+D);let F=i.get(oe);if(oe.version!==F.__version||K===!0){t.activeTexture(n.TEXTURE0+D);let G=nt.getPrimaries(nt.workingColorSpace),B=y.colorSpace===cn?null:nt.getPrimaries(y.colorSpace),re=y.colorSpace===cn||G===B?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let le=p(y)&&m(y.image)===!1,W=x(y.image,le,!1,s.maxTextureSize);W=k(y,W);let Be=m(W)||o,De=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),Ce=T(y.internalFormat,De,Pe,y.colorSpace,y.isVideoTexture);q(ne,y,Be);let we,Ve=y.mipmaps,Ke=o&&y.isVideoTexture!==!0&&Ce!==yu,st=F.__version===void 0||K===!0,We=C(y,W,Be);if(y.isDepthTexture)Ce=n.DEPTH_COMPONENT,o?y.type===Qn?Ce=n.DEPTH_COMPONENT32F:y.type===Kn?Ce=n.DEPTH_COMPONENT24:y.type===bi?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:y.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Si&&Ce===n.DEPTH_COMPONENT&&y.type!==Ol&&y.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Kn,Pe=r.convert(y.type)),y.format===cs&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,y.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=bi,Pe=r.convert(y.type))),st&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ce,W.width,W.height):t.texImage2D(n.TEXTURE_2D,0,Ce,W.width,W.height,0,De,Pe,null));else if(y.isDataTexture)if(Ve.length>0&&Be){Ke&&st&&t.texStorage2D(n.TEXTURE_2D,We,Ce,Ve[0].width,Ve[0].height);for(let me=0,I=Ve.length;me<I;me++)we=Ve[me],Ke?t.texSubImage2D(n.TEXTURE_2D,me,0,0,we.width,we.height,De,Pe,we.data):t.texImage2D(n.TEXTURE_2D,me,Ce,we.width,we.height,0,De,Pe,we.data);y.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(n.TEXTURE_2D,We,Ce,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,W.width,W.height,De,Pe,W.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,W.width,W.height,0,De,Pe,W.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,Ce,Ve[0].width,Ve[0].height,W.depth);for(let me=0,I=Ve.length;me<I;me++)we=Ve[me],y.format!==gn?De!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,W.depth,De,we.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ce,we.width,we.height,W.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,W.depth,De,Pe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ce,we.width,we.height,W.depth,0,De,Pe,we.data)}else{Ke&&st&&t.texStorage2D(n.TEXTURE_2D,We,Ce,Ve[0].width,Ve[0].height);for(let me=0,I=Ve.length;me<I;me++)we=Ve[me],y.format!==gn?De!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,me,0,0,we.width,we.height,De,Pe,we.data):t.texImage2D(n.TEXTURE_2D,me,Ce,we.width,we.height,0,De,Pe,we.data)}else if(y.isDataArrayTexture)Ke?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,Ce,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,De,Pe,W.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,W.width,W.height,W.depth,0,De,Pe,W.data);else if(y.isData3DTexture)Ke?(st&&t.texStorage3D(n.TEXTURE_3D,We,Ce,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,De,Pe,W.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,W.width,W.height,W.depth,0,De,Pe,W.data);else if(y.isFramebufferTexture){if(st)if(Ke)t.texStorage2D(n.TEXTURE_2D,We,Ce,W.width,W.height);else{let me=W.width,I=W.height;for(let _e=0;_e<We;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ce,me,I,0,De,Pe,null),me>>=1,I>>=1}}else if(Ve.length>0&&Be){Ke&&st&&t.texStorage2D(n.TEXTURE_2D,We,Ce,Ve[0].width,Ve[0].height);for(let me=0,I=Ve.length;me<I;me++)we=Ve[me],Ke?t.texSubImage2D(n.TEXTURE_2D,me,0,0,De,Pe,we):t.texImage2D(n.TEXTURE_2D,me,Ce,De,Pe,we);y.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(n.TEXTURE_2D,We,Ce,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Pe,W)):t.texImage2D(n.TEXTURE_2D,0,Ce,De,Pe,W);S(y,Be)&&v(ne),F.__version=oe.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ve(M,y,D){if(y.image.length!==6)return;let ne=ee(M,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);let oe=i.get(K);if(K.version!==oe.__version||ne===!0){t.activeTexture(n.TEXTURE0+D);let F=nt.getPrimaries(nt.workingColorSpace),G=y.colorSpace===cn?null:nt.getPrimaries(y.colorSpace),B=y.colorSpace===cn||F===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let re=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,W=[];for(let me=0;me<6;me++)!re&&!le?W[me]=x(y.image[me],!1,!0,s.maxCubemapSize):W[me]=le?y.image[me].image:y.image[me],W[me]=k(y,W[me]);let Be=W[0],De=m(Be)||o,Pe=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),we=T(y.internalFormat,Pe,Ce,y.colorSpace),Ve=o&&y.isVideoTexture!==!0,Ke=oe.__version===void 0||ne===!0,st=C(y,Be,De);q(n.TEXTURE_CUBE_MAP,y,De);let We;if(re){Ve&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,st,we,Be.width,Be.height);for(let me=0;me<6;me++){We=W[me].mipmaps;for(let I=0;I<We.length;I++){let _e=We[I];y.format!==gn?Pe!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I,0,0,_e.width,_e.height,Pe,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I,we,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I,0,0,_e.width,_e.height,Pe,Ce,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I,we,_e.width,_e.height,0,Pe,Ce,_e.data)}}}else{We=y.mipmaps,Ve&&Ke&&(We.length>0&&st++,t.texStorage2D(n.TEXTURE_CUBE_MAP,st,we,W[0].width,W[0].height));for(let me=0;me<6;me++)if(le){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,W[me].width,W[me].height,Pe,Ce,W[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,we,W[me].width,W[me].height,0,Pe,Ce,W[me].data);for(let I=0;I<We.length;I++){let xe=We[I].image[me].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I+1,0,0,xe.width,xe.height,Pe,Ce,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I+1,we,xe.width,xe.height,0,Pe,Ce,xe.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe,Ce,W[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,we,Pe,Ce,W[me]);for(let I=0;I<We.length;I++){let _e=We[I];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I+1,0,0,Pe,Ce,_e.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,I+1,we,Pe,Ce,_e.image[me])}}}S(y,De)&&v(n.TEXTURE_CUBE_MAP),oe.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Te(M,y,D,ne,K,oe){let F=r.convert(D.format,D.colorSpace),G=r.convert(D.type),B=T(D.internalFormat,F,G,D.colorSpace);if(!i.get(y).__hasExternalTextures){let le=Math.max(1,y.width>>oe),W=Math.max(1,y.height>>oe);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,oe,B,le,W,y.depth,0,F,G,null):t.texImage2D(K,oe,B,le,W,0,F,G,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Re(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,K,i.get(D).__webglTexture,0,Me(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,K,i.get(D).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(M,y,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let ne=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||Re(y)){let K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Qn?ne=n.DEPTH_COMPONENT32F:K.type===Kn&&(ne=n.DEPTH_COMPONENT24));let oe=Me(y);Re(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,ne,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ne,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let ne=Me(y);D&&Re(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,y.width,y.height):Re(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0;K<ne.length;K++){let oe=ne[K],F=r.convert(oe.format,oe.colorSpace),G=r.convert(oe.type),B=T(oe.internalFormat,F,G,oe.colorSpace),re=Me(y);D&&Re(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,B,y.width,y.height):Re(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,B,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,B,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let ne=i.get(y.depthTexture).__webglTexture,K=Me(y);if(y.depthTexture.format===Si)Re(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(y.depthTexture.format===cs)Re(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function he(M){let y=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");fe(y.__webglFramebuffer,M)}else if(D){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=n.createRenderbuffer(),se(y.__webglDepthbuffer[ne],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),se(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(M,y,D){let ne=i.get(M);y!==void 0&&Te(ne.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&he(M)}function z(M){let y=M.texture,D=i.get(M),ne=i.get(y);M.addEventListener("dispose",H),M.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=y.version,a.memory.textures++);let K=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,F=m(M)||o;if(K){D.__webglFramebuffer=[];for(let G=0;G<6;G++)if(o&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[G]=[];for(let B=0;B<y.mipmaps.length;B++)D.__webglFramebuffer[G][B]=n.createFramebuffer()}else D.__webglFramebuffer[G]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let G=0;G<y.mipmaps.length;G++)D.__webglFramebuffer[G]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(oe)if(s.drawBuffers){let G=M.texture;for(let B=0,re=G.length;B<re;B++){let le=i.get(G[B]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&Re(M)===!1){let G=oe?y:[y];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let B=0;B<G.length;B++){let re=G[B];D.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[B]);let le=r.convert(re.format,re.colorSpace),W=r.convert(re.type),Be=T(re.internalFormat,le,W,re.colorSpace,M.isXRRenderTarget===!0),De=Me(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Be,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,D.__webglColorRenderbuffer[B])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),se(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,y,F);for(let G=0;G<6;G++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let B=0;B<y.mipmaps.length;B++)Te(D.__webglFramebuffer[G][B],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,B);else Te(D.__webglFramebuffer[G],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);S(y,F)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let G=M.texture;for(let B=0,re=G.length;B<re;B++){let le=G[B],W=i.get(le);t.bindTexture(n.TEXTURE_2D,W.__webglTexture),q(n.TEXTURE_2D,le,F),Te(D.__webglFramebuffer,M,le,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,0),S(le,F)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let G=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?G=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(G,ne.__webglTexture),q(G,y,F),o&&y.mipmaps&&y.mipmaps.length>0)for(let B=0;B<y.mipmaps.length;B++)Te(D.__webglFramebuffer[B],M,y,n.COLOR_ATTACHMENT0,G,B);else Te(D.__webglFramebuffer,M,y,n.COLOR_ATTACHMENT0,G,0);S(y,F)&&v(G),t.unbindTexture()}M.depthBuffer&&he(M)}function Ne(M){let y=m(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0,K=D.length;ne<K;ne++){let oe=D[ne];if(S(oe,y)){let F=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,G=i.get(oe).__webglTexture;t.bindTexture(F,G),v(F),t.unbindTexture()}}}function Ee(M){if(o&&M.samples>0&&Re(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,ne=M.height,K=n.COLOR_BUFFER_BIT,oe=[],F=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=i.get(M),B=M.isWebGLMultipleRenderTargets===!0;if(B)for(let re=0;re<y.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let re=0;re<y.length;re++){oe.push(n.COLOR_ATTACHMENT0+re),M.depthBuffer&&oe.push(F);let le=G.__ignoreDepthValues!==void 0?G.__ignoreDepthValues:!1;if(le===!1&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),B&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,G.__webglColorRenderbuffer[re]),le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[F]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[F])),B){let W=i.get(y[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,W,0)}n.blitFramebuffer(0,0,D,ne,0,0,D,ne,K,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),B)for(let re=0;re<y.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,G.__webglColorRenderbuffer[re]);let le=i.get(y[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}}function Me(M){return Math.min(s.maxSamples,M.samples)}function Re(M){let y=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function j(M){let y=a.render.frame;h.get(M)!==y&&(h.set(M,y),M.update())}function k(M,y){let D=M.colorSpace,ne=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Yo||D!==Bn&&D!==cn&&(nt.getTransfer(D)===ct?o===!1?e.has("EXT_sRGB")===!0&&ne===gn?(M.format=Yo,M.minFilter=ln,M.generateMipmaps=!1):y=sa.sRGBToLinear(y):(ne!==gn||K!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=ie,this.setTexture3D=Q,this.setTextureCube=J,this.rebindTextures=Ae,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Re}function w_(n,e,t){let i=t.isWebGL2;function s(r,a=cn){let o,l=nt.getTransfer(a);if(r===ni)return n.UNSIGNED_BYTE;if(r===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===vf)return n.BYTE;if(r===yf)return n.SHORT;if(r===Ol)return n.UNSIGNED_SHORT;if(r===pu)return n.INT;if(r===Kn)return n.UNSIGNED_INT;if(r===Qn)return n.FLOAT;if(r===Vs)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Mf)return n.ALPHA;if(r===gn)return n.RGBA;if(r===bf)return n.LUMINANCE;if(r===Sf)return n.LUMINANCE_ALPHA;if(r===Si)return n.DEPTH_COMPONENT;if(r===cs)return n.DEPTH_STENCIL;if(r===Yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ef)return n.RED;if(r===_u)return n.RED_INTEGER;if(r===Tf)return n.RG;if(r===xu)return n.RG_INTEGER;if(r===vu)return n.RGBA_INTEGER;if(r===oo||r===lo||r===co||r===ho)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zc||r===kc||r===Hc||r===Vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===zc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gc||r===Wc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Gc)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Wc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xc||r===qc||r===Yc||r===$c||r===Zc||r===Jc||r===jc||r===Kc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$c)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uo||r===rh||r===ah)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===uo)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wf||r===oh||r===lh||r===ch)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===uo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function R_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C_(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let T=v.program;i.uniformBlockBinding(S,T)}function c(S,v){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(S,C);let A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){let v=u();S.__bindingPointIndex=v;let T=n.createBuffer(),C=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=s[S.id],T=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=T.length;A<R;A++){let H=Array.isArray(T[A])?T[A]:[T[A]];for(let _=0,b=H.length;_<b;_++){let U=H[_];if(f(U,A,_,C)===!0){let V=U.__offset,te=Array.isArray(U.value)?U.value:[U.value],L=0;for(let O=0;O<te.length;O++){let Z=te[O],ie=x(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,V+L,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,L),L+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,v,T,C){let A=S.value,R=v+"_"+T;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{let H=C[R];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return C[R]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function g(S){let v=S.uniforms,T=0,C=16;for(let R=0,H=v.length;R<H;R++){let _=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,U=_.length;b<U;b++){let V=_[b],te=Array.isArray(V.value)?V.value:[V.value];for(let L=0,O=te.length;L<O;L++){let Z=te[L],ie=x(Z),Q=T%C;Q!==0&&C-Q<ie.boundary&&(T+=C-Q),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=ie.storage}}}let A=T%C;return A>0&&(T+=C-A),S.__size=T,S.__cache={},this}function x(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}function zl(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function nu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function L_(n,e){let t=1-n;return t*t*e}function I_(n,e){return 2*(1-n)*n*e}function D_(n,e){return n*n*e}function Os(n,e,t,i){return L_(n,e)+I_(n,t)+D_(n,i)}function U_(n,e){let t=1-n;return t*t*t*e}function N_(n,e){let t=1-n;return 3*t*t*n*e}function O_(n,e){return 3*(1-n)*n*n*e}function F_(n,e){return n*n*n*e}function Fs(n,e,t,i,s){return U_(n,e)+N_(n,t)+O_(n,i)+F_(n,s)}function Du(n,e,t,i,s){let r,a;if(s===ex(n,e,t,i)>0)for(r=e;r<t;r+=i)a=su(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=su(r,n[r],n[r+1],a);return a&&Ua(a,a.next)&&(js(a),a=a.next),a}function Ai(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ua(t,t.next)||gt(t.prev,t,t.next)===0)){if(js(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Zs(n,e,t,i,s,r,a){if(!n)return;!a&&r&&$_(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?k_(n,i,s,r):z_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),js(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=H_(Ai(n),e,t),Zs(n,e,t,i,s,r,2)):a===2&&V_(n,e,t,i,s,r):Zs(Ai(n),e,t,i,s,r,1);break}}}function z_(n){let e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&is(s,o,r,l,a,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function k_(n,e,t,i){let s=n.prev,r=n,a=n.next;if(gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=yl(f,g,e,t,i),S=yl(x,m,e,t,i),v=n.prevZ,T=n.nextZ;for(;v&&v.z>=p&&T&&T.z<=S;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&is(o,h,l,u,c,d,v.x,v.y)&&gt(v.prev,v,v.next)>=0||(v=v.prevZ,T.x>=f&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&is(o,h,l,u,c,d,T.x,T.y)&&gt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&is(o,h,l,u,c,d,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;T&&T.z<=S;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&is(o,h,l,u,c,d,T.x,T.y)&&gt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function H_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ua(s,r)&&Uu(s,i,i.next,r)&&Js(s,r)&&Js(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),js(i),js(i.next),i=n=r),i=i.next}while(i!==n);return Ai(i)}function V_(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&j_(a,o)){let l=Nu(a,o);a=Ai(a,a.next),l=Ai(l,l.next),Zs(a,e,t,i,s,r,0),Zs(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function G_(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Du(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(J_(c));for(s.sort(W_),r=0;r<s.length;r++)t=X_(s[r],t);return t}function W_(n,e){return n.x-e.x}function X_(n,e){let t=q_(n,e);if(!t)return e;let i=Nu(t,n);return Ai(i,i.next),Ai(t,t.next)}function q_(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&is(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Js(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Y_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Y_(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function $_(n,e,t,i){let s=n;do s.z===0&&(s.z=yl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Z_(s)}function Z_(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function yl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function J_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function is(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function j_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!K_(n,e)&&(Js(n,e)&&Js(e,n)&&Q_(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Ua(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ua(n,e){return n.x===e.x&&n.y===e.y}function Uu(n,e,t,i){let s=Zr(gt(n,e,t)),r=Zr(gt(n,e,i)),a=Zr(gt(t,i,n)),o=Zr(gt(t,i,e));return!!(s!==r&&a!==o||s===0&&$r(n,t,e)||r===0&&$r(n,i,e)||a===0&&$r(t,n,i)||o===0&&$r(t,e,i))}function $r(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Zr(n){return n>0?1:n<0?-1:0}function K_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Js(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function Q_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nu(n,e){let t=new Ml(n.i,n.x,n.y),i=new Ml(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function su(n,e,t,i){let s=new Ml(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ml(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ex(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function ru(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function au(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function tx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function Jr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var zd,Ic,kd,uu,Ul,Nn,ii,Dt,It,ei,ss,Dc,Uc,Nc,Hd,yi,Vd,Gd,Oc,Fc,Wd,Xd,qd,Yd,Go,Wo,$d,Zd,Jd,jd,Kd,Qd,ef,tf,nf,sf,rf,af,jr,of,lf,cf,hf,du,uf,df,ti,ff,pf,mf,Nl,gf,_f,fu,os,ls,Xo,qo,La,zs,mn,ks,Xt,Bc,ao,ln,xf,Hs,ni,vf,yf,Ol,pu,Kn,Qn,Vs,mu,gu,bi,Mf,gn,bf,Sf,Si,cs,Ef,_u,Tf,xu,vu,oo,lo,co,ho,zc,kc,Hc,Vc,yu,Gc,Wc,Xc,qc,Yc,$c,Zc,Jc,jc,Kc,Qc,eh,th,nh,ih,sh,uo,rh,ah,wf,oh,lh,ch,Kr,Qr,fo,hh,uh,dh,Mu,Ei,Af,Rf,bu,Cf,cn,it,Bn,Fl,Ia,ea,ct,ta,na,Fi,fh,Pf,Lf,If,Su,Df,Uf,Nf,Of,ph,mh,Yo,Fn,ia,si,Bt,po,$o,ye,Je,go,_h,xh,vh,Er,zf,nt,Bi,sa,kf,ra,Hf,sn,dt,Jo,zn,aa,jo,bn,P,vo,yh,kn,Pn,dn,Tr,zi,ki,Hi,Yn,$n,mi,As,wr,Ar,gi,Vf,Rs,Mo,Ti,Ln,bo,Rr,Zn,So,Cr,Eo,Ko,ht,Vi,fn,Gf,Wf,Jn,Pr,en,Mh,bh,oa,la,Xf,Sh,Gi,In,Lr,Cs,qf,Yf,Eh,Th,wh,$f,Zf,qt,pn,Dn,To,Un,Wi,Xi,Ah,wo,Ao,Ro,Ir,es,Tu,jn,Dr,He,zt,Jf,wi,Yt,yt,Ur,nn,ca,ha,et,jf,on,Po,qi,tn,Ps,Rt,Jt,Rh,_i,Nr,Ch,Yi,$i,Zi,Lo,Or,Fr,Br,zr,Ph,Lh,Ih,kr,Hr,pe,Mt,ep,tp,np,Hn,ua,kt,Ji,ji,Qo,da,el,Io,ip,sp,On,xi,Gr,Ws,ft,ap,op,lp,cp,hp,up,dp,fp,pp,mp,gp,_p,xp,vp,yp,Mp,bp,Sp,Ep,Tp,wp,Ap,Rp,Cp,Pp,Lp,Ip,Dp,Up,Np,Op,Fp,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,$p,Zp,Jp,jp,Kp,Qp,em,tm,nm,im,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,xm,vm,ym,Mm,bm,Sm,Em,Tm,wm,Am,Rm,Cm,Pm,Lm,Im,Dm,Um,Nm,Om,Fm,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,$m,Zm,Jm,jm,Km,Qm,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,vg,yg,Mg,bg,Sg,Eg,Tg,wg,Ag,Rg,Cg,Pg,Lg,Ig,Dg,Ug,Ng,Og,Fg,Bg,Ye,ge,Mn,Wr,fa,ts,Dh,Mi,Do,Uh,Uo,No,Oo,vi,Ki,Nh,pa,ma,Ru,Cu,Pu,Lu,Iu,zh,kh,Hh,Vh,Gh,tl,nl,il,Fo,as,G0,W0,Q0,e_,n_,h_,rl,al,__,ol,ll,M_,b_,cl,lt,A_,Ns,hl,Xs,ul,ga,_a,xa,Qi,eu,qr,tu,P_,Ls,Is,va,ri,hn,qs,dl,Yr,Bo,zo,ko,fl,ya,pl,Ma,ml,ba,gl,Sa,iu,_l,Ys,xl,Ea,Sn,vl,$s,B_,Bs,Ri,Ta,wa,Tt,Vn,qe,us,bl,Sl,El,_n,Ci,Tl,wl,Al,Ks,Pi,Rl,ou,Cl,ix,Qs,Pl,ds,er,Aa,Ho,lu,cu,Ra,hu,Ds,Vo,Ll,Ca,Il,Pa,kl,sx,Hl,rx,ax,ox,lx,cx,hx,ux,Dl,ut,wv,ms=Lc(()=>{zd=0,Ic=1,kd=2,uu=1,Ul=2,Nn=3,ii=0,Dt=1,It=2,ei=0,ss=1,Dc=2,Uc=3,Nc=4,Hd=5,yi=100,Vd=101,Gd=102,Oc=103,Fc=104,Wd=200,Xd=201,qd=202,Yd=203,Go=204,Wo=205,$d=206,Zd=207,Jd=208,jd=209,Kd=210,Qd=211,ef=212,tf=213,nf=214,sf=0,rf=1,af=2,jr=3,of=4,lf=5,cf=6,hf=7,du=0,uf=1,df=2,ti=0,ff=1,pf=2,mf=3,Nl=4,gf=5,_f=6,fu=300,os=301,ls=302,Xo=303,qo=304,La=306,zs=1e3,mn=1001,ks=1002,Xt=1003,Bc=1004,ao=1005,ln=1006,xf=1007,Hs=1008,ni=1009,vf=1010,yf=1011,Ol=1012,pu=1013,Kn=1014,Qn=1015,Vs=1016,mu=1017,gu=1018,bi=1020,Mf=1021,gn=1023,bf=1024,Sf=1025,Si=1026,cs=1027,Ef=1028,_u=1029,Tf=1030,xu=1031,vu=1033,oo=33776,lo=33777,co=33778,ho=33779,zc=35840,kc=35841,Hc=35842,Vc=35843,yu=36196,Gc=37492,Wc=37496,Xc=37808,qc=37809,Yc=37810,$c=37811,Zc=37812,Jc=37813,jc=37814,Kc=37815,Qc=37816,eh=37817,th=37818,nh=37819,ih=37820,sh=37821,uo=36492,rh=36494,ah=36495,wf=36283,oh=36284,lh=36285,ch=36286,Kr=2300,Qr=2301,fo=2302,hh=2400,uh=2401,dh=2402,Mu=3e3,Ei=3001,Af=3200,Rf=3201,bu=0,Cf=1,cn="",it="srgb",Bn="srgb-linear",Fl="display-p3",Ia="display-p3-linear",ea="linear",ct="srgb",ta="rec709",na="p3",Fi=7680,fh=519,Pf=512,Lf=513,If=514,Su=515,Df=516,Uf=517,Nf=518,Of=519,ph=35044,mh="300 es",Yo=1035,Fn=2e3,ia=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],po=Math.PI/180,$o=180/Math.PI;ye=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],v=s[4],T=s[7],C=s[2],A=s[5],R=s[8];return r[0]=a*x+o*S+l*C,r[3]=a*m+o*v+l*A,r[6]=a*p+o*T+l*R,r[1]=c*x+h*S+u*C,r[4]=c*m+h*v+u*A,r[7]=c*p+h*T+u*R,r[2]=d*x+f*S+g*C,r[5]=d*m+f*v+g*A,r[8]=d*p+f*T+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},go=new Je;_h={};xh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[Bn]:{transfer:ea,primaries:ta,toReference:n=>n,fromReference:n=>n},[it]:{transfer:ct,primaries:ta,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ia]:{transfer:ea,primaries:na,toReference:n=>n.applyMatrix3(vh),fromReference:n=>n.applyMatrix3(xh)},[Fl]:{transfer:ct,primaries:na,toReference:n=>n.convertSRGBToLinear().applyMatrix3(vh),fromReference:n=>n.applyMatrix3(xh).convertLinearToSRGB()}},zf=new Set([Bn,Ia]),nt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Er[e].toReference,s=Er[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Er[n].primaries},getTransfer:function(n){return n===cn?ea:Er[n].transfer}};sa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Gs("canvas")),Bi.width=e.width,Bi.height=e.height;let i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Gs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kf=0,ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Hf=0,sn=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mn,s=mn,r=ln,a=Hs,o=gn,l=ni,c=n.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=fs(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ei?it:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?Ei:Mu}set encoding(e){Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ei?it:cn}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=fu;sn.DEFAULT_ANISOTROPY=1;dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,T=(f+1)/2,C=(p+1)/2,A=(h+d)/4,R=(u+x)/4,H=(g+m)/4;return v>T&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=R/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=H/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=H/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?it:cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},aa=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jo=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,p*S);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let T=o*S;if(l=l*m+d*T,c=c*m+f*T,h=h*m+g*T,u=u*m+x*T,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new P,yh=new bn,kn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),wr.subVectors(this.max,As),zi.subVectors(e.a,As),ki.subVectors(e.b,As),Hi.subVectors(e.c,As),Yn.subVectors(ki,zi),$n.subVectors(Hi,ki),mi.subVectors(zi,Hi);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!yo(t,zi,ki,Hi,wr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,zi,ki,Hi,wr))?!1:(Ar.crossVectors(Yn,$n),t=[Ar.x,Ar.y,Ar.z],yo(t,zi,ki,Hi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,Tr=new kn,zi=new P,ki=new P,Hi=new P,Yn=new P,$n=new P,mi=new P,As=new P,wr=new P,Ar=new P,gi=new P;Vf=new kn,Rs=new P,Mo=new P,Ti=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Mo)),this.expandByPoint(Rs.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new P,bo=new P,Rr=new P,Zn=new P,So=new P,Cr=new P,Eo=new P,Ko=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bo.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=Zn.dot(this.direction),l=-Zn.dot(Rr),c=Zn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bo).addScaledVector(Rr,d),f}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,s,r){So.subVectors(t,e),Cr.subVectors(i,e),Eo.crossVectors(So,Cr);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);let l=o*this.direction.dot(Cr.crossVectors(Zn,Cr));if(l<0)return null;let c=o*this.direction.dot(So.cross(Zn));if(c<0||l+c>a)return null;let h=-o*Zn.dot(Eo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,Wf)}lookAt(e,t,i){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(i,en),Jn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(i,en)),Jn.normalize(),Pr.crossVectors(en,Jn),s[0]=Jn.x,s[4]=Pr.x,s[8]=en.x,s[1]=Jn.y,s[5]=Pr.y,s[9]=en.y,s[2]=Jn.z,s[6]=Pr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],v=i[7],T=i[11],C=i[15],A=s[0],R=s[4],H=s[8],_=s[12],b=s[1],U=s[5],V=s[9],te=s[13],L=s[2],O=s[6],Z=s[10],ie=s[14],Q=s[3],J=s[7],ae=s[11],ce=s[15];return r[0]=a*A+o*b+l*L+c*Q,r[4]=a*R+o*U+l*O+c*J,r[8]=a*H+o*V+l*Z+c*ae,r[12]=a*_+o*te+l*ie+c*ce,r[1]=h*A+u*b+d*L+f*Q,r[5]=h*R+u*U+d*O+f*J,r[9]=h*H+u*V+d*Z+f*ae,r[13]=h*_+u*te+d*ie+f*ce,r[2]=g*A+x*b+m*L+p*Q,r[6]=g*R+x*U+m*O+p*J,r[10]=g*H+x*V+m*Z+p*ae,r[14]=g*_+x*te+m*ie+p*ce,r[3]=S*A+v*b+T*L+C*Q,r[7]=S*R+v*U+T*O+C*J,r[11]=S*H+v*V+T*Z+C*ae,r[15]=S*_+v*te+T*ie+C*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,T=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,C=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=t*S+i*v+s*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=S*R,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*R,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*R,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*R,e[4]=v*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=T*R,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*R,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*R,e[12]=C*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*R,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,S=l*c,v=l*h,T=l*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(x+p))*C,s[1]=(f+T)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-T)*A,s[5]=(1-(d+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+v)*R,s[9]=(m-S)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),a=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);let c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Fn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(o===Fn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ia)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Fn){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,f=(i+s)*h,g,x;if(o===Fn)g=(a+r)*u,x=-2*u;else if(o===ia)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vi=new P,fn=new ht,Gf=new P(0,0,0),Wf=new P(1,1,1),Jn=new P,Pr=new P,en=new P,Mh=new ht,bh=new bn,oa=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oa.DEFAULT_ORDER="XYZ";la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xf=0,Sh=new P,Gi=new bn,In=new ht,Lr=new P,Cs=new P,qf=new P,Yf=new bn,Eh=new P(1,0,0),Th=new P(0,1,0),wh=new P(0,0,1),$f={type:"added"},Zf={type:"removed"},qt=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new oa,i=new bn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Th,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Th,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lr.copy(e):Lr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Cs,Lr,this.up):In.lookAt(Lr,Cs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(In),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};qt.DEFAULT_UP=new P(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pn=new P,Dn=new P,To=new P,Un=new P,Wi=new P,Xi=new P,Ah=new P,wo=new P,Ao=new P,Ro=new P,Ir=!1,es=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pn.subVectors(s,t),Dn.subVectors(i,t),To.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Dn),l=pn.dot(To),c=Dn.dot(Dn),h=Dn.dot(To),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,i,s,r,a,o,l){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static isFrontFacing(e,t,i,s){return pn.subVectors(i,t),Dn.subVectors(e,t),pn.cross(Dn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),pn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,i),Xi.subVectors(r,i),wo.subVectors(e,i);let l=Wi.dot(wo),c=Xi.dot(wo);if(l<=0&&c<=0)return t.copy(i);Ao.subVectors(e,s);let h=Wi.dot(Ao),u=Xi.dot(Ao);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Wi,a);Ro.subVectors(e,r);let f=Wi.dot(Ro),g=Xi.dot(Ro);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Xi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ah.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ah,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Ff(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Co(a,r,e+1/3),this.g=Co(a,r,e),this.b=Co(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=it){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let i=Tu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return nt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Lt(zt.r*255,0,255))*65536+Math.round(Lt(zt.g*255,0,255))*256+Math.round(Lt(zt.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=it){nt.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==it?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Dr);let i=mo(jn.h,Dr.h,t),s=mo(jn.s,Dr.s,t),r=mo(jn.l,Dr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new He;He.NAMES=Tu;Jf=0,wi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ss,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Wo&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yt=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yt=new P,Ur=new ye,nn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}},ca=class extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ha=class extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},et=class extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}},jf=0,on=new ht,Po=new qt,qi=new P,tn=new kn,Ps=new kn,Rt=new P,Jt=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eu(e)?ha:ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(tn.min,Ps.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Ps.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Ps.min),tn.expandByPoint(Ps.max))}tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),Rt.add(qi)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new P,h[b]=new P;let u=new P,d=new P,f=new P,g=new ye,x=new ye,m=new ye,p=new P,S=new P;function v(b,U,V){u.fromArray(s,b*3),d.fromArray(s,U*3),f.fromArray(s,V*3),g.fromArray(a,b*2),x.fromArray(a,U*2),m.fromArray(a,V*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let te=1/(x.x*m.y-m.x*x.y);isFinite(te)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(te),S.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(te),c[b].add(p),c[U].add(p),c[V].add(p),h[b].add(S),h[U].add(S),h[V].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,U=T.length;b<U;++b){let V=T[b],te=V.start,L=V.count;for(let O=te,Z=te+L;O<Z;O+=3)v(i[O+0],i[O+1],i[O+2])}let C=new P,A=new P,R=new P,H=new P;function _(b){R.fromArray(r,b*3),H.copy(R);let U=c[b];C.copy(U),C.sub(R.multiplyScalar(R.dot(U))).normalize(),A.crossVectors(H,U);let te=A.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=te}for(let b=0,U=T.length;b<U;++b){let V=T[b],te=V.start,L=V.count;for(let O=te,Z=te+L;O<Z;O+=3)_(i[O+0]),_(i[O+1]),_(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rh=new ht,_i=new Ko,Nr=new Ti,Ch=new P,Yi=new P,$i=new P,Zi=new P,Lo=new P,Or=new P,Fr=new ye,Br=new ye,zr=new ye,Ph=new P,Lh=new P,Ih=new P,kr=new P,Hr=new P,pe=class extends qt{constructor(e=new Jt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lo.fromBufferAttribute(u,e),a?Or.addScaledVector(Lo,h):Or.addScaledVector(Lo.sub(t),h))}t.add(Or)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(Nr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Nr,Ch)===null||_i.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Rh.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,C=v;T<C;T+=3){let A=o.getX(T),R=o.getX(T+1),H=o.getX(T+2);s=Vr(this,p,e,i,c,h,u,A,R,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),v=o.getX(m+1),T=o.getX(m+2);s=Vr(this,a,e,i,c,h,u,S,v,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,C=v;T<C;T+=3){let A=T,R=T+1,H=T+2;s=Vr(this,p,e,i,c,h,u,A,R,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=m,v=m+1,T=m+2;s=Vr(this,a,e,i,c,h,u,S,v,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Mt=class n extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(x,m,p,S,v,T,C,A,R,H,_){let b=T/R,U=C/H,V=T/2,te=C/2,L=A/2,O=R+1,Z=H+1,ie=0,Q=0,J=new P;for(let ae=0;ae<Z;ae++){let ce=ae*U-te;for(let ue=0;ue<O;ue++){let q=ue*b-V;J[x]=q*S,J[m]=ce*v,J[p]=L,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push(ue/R),u.push(1-ae/H),ie+=1}}for(let ae=0;ae<H;ae++)for(let ce=0;ce<R;ce++){let ue=d+ce+O*ae,q=d+ce+O*(ae+1),ee=d+(ce+1)+O*(ae+1),de=d+(ce+1)+O*ae;l.push(ue,q,de),l.push(q,ee,de),Q+=6}o.addGroup(f,Q,_),f+=Q,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ep={clone:hs,merge:Wt},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ua=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ji=-90,ji=1,Qo=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Ji,ji,e,t);s.layers=this.layers,this.add(s);let r=new kt(Ji,ji,e,t);r.layers=this.layers,this.add(r);let a=new kt(Ji,ji,e,t);a.layers=this.layers,this.add(a);let o=new kt(Ji,ji,e,t);o.layers=this.layers,this.add(o);let l=new kt(Ji,ji,e,t);l.layers=this.layers,this.add(l);let c=new kt(Ji,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},da=class extends sn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ei?it:cn),this.texture=new da(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:ei});r.uniforms.tEquirect.value=t;let a=new pe(s,r),o=t.minFilter;return t.minFilter===Hs&&(t.minFilter=ln),new Qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Io=new P,ip=new P,sp=new Je,On=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Io.subVectors(i,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sp.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Ti,Gr=new P,Ws=class{constructor(e=new On,t=new On,i=new On,s=new On,r=new On,a=new On){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],v=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,m-f,T-p).normalize(),i[1].setComponents(l+r,d+c,m+f,T+p).normalize(),i[2].setComponents(l+a,d+h,m+g,T+S).normalize(),i[3].setComponents(l-a,d-h,m-g,T-S).normalize(),i[4].setComponents(l-o,d-u,m-x,T-v).normalize(),t===Fn)i[5].setComponents(l+o,d+u,m+x,T+v).normalize();else if(t===ia)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};ft=class n extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let v=0;v<c;v++){let T=v*u-r;g.push(T,-S,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let v=S+c*p,T=S+c*(p+1),C=S+1+c*(p+1),A=S+1+c*p;f.push(v,T,A),f.push(T,C,A)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:ap,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:xp,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Ep,color_fragment:Tp,color_pars_fragment:wp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Dp,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:Op,colorspace_pars_fragment:Fp,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_fragment:$p,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:jp,lights_pars_begin:Kp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:xm,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:bm,normal_fragment_begin:Sm,normal_fragment_maps:Em,normal_pars_fragment:Tm,normal_pars_vertex:wm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Im,opaque_fragment:Dm,packing:Um,premultiplied_alpha_fragment:Nm,project_vertex:Om,dithering_fragment:Fm,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:jm,tonemapping_pars_fragment:Km,transmission_fragment:Qm,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:ag,backgroundCube_vert:og,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:xg,meshbasic_vert:vg,meshbasic_frag:yg,meshlambert_vert:Mg,meshlambert_frag:bg,meshmatcap_vert:Sg,meshmatcap_frag:Eg,meshnormal_vert:Tg,meshnormal_frag:wg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Ug,shadow_vert:Ng,shadow_frag:Og,sprite_vert:Fg,sprite_frag:Bg},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Mn={basic:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Wt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Wt([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Mn.physical={uniforms:Wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};Wr={r:0,b:0,g:0};fa=class extends ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ts=4,Dh=[.125,.215,.35,.446,.526,.582],Mi=20,Do=new fa,Uh=new He,Uo=null,No=0,Oo=0,vi=(1+Math.sqrt(5))/2,Ki=1/vi,Nh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,vi,Ki),new P(0,vi,-Ki),new P(Ki,0,vi),new P(-Ki,0,vi),new P(vi,Ki,0),new P(-vi,Ki,0)],pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,No,Oo),e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Vs,format:gn,colorSpace:Bn,depthBuffer:!1},s=Oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,e,t)}return s}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,i,s){let o=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uh),h.toneMapping=ti,h.autoClear=!1;let f=new Yt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new pe(new Mt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Uh),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Xr(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===os||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Do)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nh[(s-1)%Nh.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let p=[],S=0;for(let R=0;R<Mi;++R){let H=R/x,_=Math.exp(-H*H/2);p.push(_),R===0?S+=_:R<m&&(S+=2*_)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let T=this._sizeLods[s],C=3*T*(s>v-ts?s-v+ts:0),A=4*(this._cubeSize-T);Xr(t,C,A,3*T,2*T),l.setRenderTarget(t),l.render(u,Do)}};ma=class extends sn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Si&&(i=Kn),i===void 0&&h===cs&&(i=bi),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ru=new sn,Cu=new ma(1,1);Cu.compareFunction=Su;Pu=new aa,Lu=new jo,Iu=new da,zh=[],kh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Gh=new Float32Array(4);tl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}},nl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}},il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Fo=/(\w+)(\])?(\[|\.)?/g;as=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);V0(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};G0=37297,W0=0;Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;e_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;h_=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new al(e),t.set(e,i)),i}},al=class{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}};__=0;ol=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;cl=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},hl=class extends si{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,S=[],v=[],T=new ye,C=null,A=new kt;A.layers.enable(1),A.viewport=new dt;let R=new kt;R.layers.enable(2),R.viewport=new dt;let H=[A,R],_=new cl;_.layers.enable(1),_.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=S[q];return ee===void 0&&(ee=new Ns,S[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=S[q];return ee===void 0&&(ee=new Ns,S[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=S[q];return ee===void 0&&(ee=new Ns,S[q]=ee),ee.getHandSpace()};function V(q){let ee=v.indexOf(q.inputSource);if(ee===-1)return;let de=S[ee];de!==void 0&&(de.update(q.inputSource,q.frame,c||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function te(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",L);for(let q=0;q<S.length;q++){let ee=v[q];ee!==null&&(v[q]=null,S[q].disconnect(ee))}b=null,U=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",te),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new zn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,de=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?cs:Si,de=x.stencil?bi:Kn);let Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new zn(d.textureWidth,d.textureHeight,{format:gn,type:ni,depthTexture:new ma(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let se=e.properties.get(p);se.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let ee=0;ee<q.removed.length;ee++){let de=q.removed[ee],ve=v.indexOf(de);ve>=0&&(v[ve]=null,S[ve].disconnect(de))}for(let ee=0;ee<q.added.length;ee++){let de=q.added[ee],ve=v.indexOf(de);if(ve===-1){for(let se=0;se<S.length;se++)if(se>=v.length){v.push(de),ve=se;break}else if(v[se]===null){v[se]=de,ve=se;break}if(ve===-1)break}let Te=S[ve];Te&&Te.connect(de)}}let O=new P,Z=new P;function ie(q,ee,de){O.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);let ve=O.distanceTo(Z),Te=ee.projectionMatrix.elements,se=de.projectionMatrix.elements,fe=Te[14]/(Te[10]-1),he=Te[14]/(Te[10]+1),Ae=(Te[9]+1)/Te[5],z=(Te[9]-1)/Te[5],Ne=(Te[8]-1)/Te[0],Ee=(se[8]+1)/se[0],Me=fe*Ne,Re=fe*Ee,j=ve/(-Ne+Ee),k=j*-Ne;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(k),q.translateZ(j),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let M=fe+j,y=he+j,D=Me-k,ne=Re+(ve-k),K=Ae*he/y*M,oe=z*he/y*M;q.projectionMatrix.makePerspective(D,ne,K,oe,M,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;_.near=R.near=A.near=q.near,_.far=R.far=A.far=q.far,(b!==_.near||U!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,U=_.far);let ee=q.parent,de=_.cameras;Q(_,ee);for(let ve=0;ve<de.length;ve++)Q(de[ve],ee);de.length===2?ie(_,A,R):_.projectionMatrix.copy(A.projectionMatrix),J(q,_,ee)};function J(q,ee,de){de===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$o*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let ae=null;function ce(q,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;de.length!==_.cameras.length&&(_.cameras.length=0,ve=!0);for(let Te=0;Te<de.length;Te++){let se=de[Te],fe=null;if(f!==null)fe=f.getViewport(se);else{let Ae=u.getViewSubImage(d,se);fe=Ae.viewport,Te===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let he=H[Te];he===void 0&&(he=new kt,he.layers.enable(Te),he.viewport=new dt,H[Te]=he),he.matrix.fromArray(se.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(se.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(fe.x,fe.y,fe.width,fe.height),Te===0&&(_.matrix.copy(he.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ve===!0&&_.cameras.push(he)}}for(let de=0;de<S.length;de++){let ve=v[de],Te=S[de];ve!==null&&Te!==void 0&&Te.update(ve,ee,c||a)}ae&&ae(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let ue=new Au;ue.setAnimationLoop(ce),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}};Xs=class{constructor(e={}){let{canvas:t=Bf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let v=this,T=!1,C=0,A=0,R=null,H=-1,_=null,b=new dt,U=new dt,V=null,te=new He(0),L=0,O=t.width,Z=t.height,ie=1,Q=null,J=null,ae=new dt(0,0,O,Z),ce=new dt(0,0,O,Z),ue=!1,q=new Ws,ee=!1,de=!1,ve=null,Te=new ht,se=new ye,fe=new P,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return R===null?ie:1}let z=i;function Ne(w,N){for(let Y=0;Y<w.length;Y++){let $=w[Y],X=t.getContext($,N);if(X!==null)return X}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),z=Ne(N,w),z===null)throw Ne(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,Me,Re,j,k,M,y,D,ne,K,oe,F,G,B,re,le,W,Be,De,Pe,Ce,we,Ve,Ke;function st(){Ee=new $g(z),Me=new Vg(z,Ee,e),Ee.init(Me),we=new w_(z,Ee,Me),Re=new E_(z,Ee,Me),j=new jg(z),k=new d_,M=new T_(z,Ee,Re,k,Me,we,j),y=new Wg(v),D=new Yg(v),ne=new rp(z,Me),Ve=new kg(z,Ee,ne,Me),K=new Zg(z,ne,j,Ve),oe=new t0(z,K,ne,j),De=new e0(z,Me,M),le=new Gg(k),F=new u_(v,y,D,Ee,Me,Ve,le),G=new R_(v,k),B=new p_,re=new y_(Ee,Me),Be=new zg(v,y,D,Re,oe,d,l),W=new S_(v,oe,Me),Ke=new C_(z,j,Me,Re),Pe=new Hg(z,Ee,j,Me),Ce=new Jg(z,Ee,j,Me),j.programs=F.programs,v.capabilities=Me,v.extensions=Ee,v.properties=k,v.renderLists=B,v.shadowMap=W,v.state=Re,v.info=j}st();let We=new hl(v,z);this.xr=We,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(O,Z,!1))},this.getSize=function(w){return w.set(O,Z)},this.setSize=function(w,N,Y=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,Z=N,t.width=Math.floor(w*ie),t.height=Math.floor(N*ie),Y===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(O*ie,Z*ie).floor()},this.setDrawingBufferSize=function(w,N,Y){O=w,Z=N,ie=Y,t.width=Math.floor(w*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,N,Y,$){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,N,Y,$),Re.viewport(b.copy(ae).multiplyScalar(ie).floor())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,N,Y,$){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,N,Y,$),Re.scissor(U.copy(ce).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){Re.setScissorTest(ue=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,N=!0,Y=!0){let $=0;if(w){let X=!1;if(R!==null){let be=R.texture.format;X=be===vu||be===xu||be===_u}if(X){let be=R.texture.type,Ue=be===ni||be===Kn||be===Ol||be===bi||be===mu||be===gu,Fe=Be.getClearColor(),ke=Be.getClearAlpha(),$e=Fe.r,Ge=Fe.g,Xe=Fe.b;Ue?(f[0]=$e,f[1]=Ge,f[2]=Xe,f[3]=ke,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=$e,g[1]=Ge,g[2]=Xe,g[3]=ke,z.clearBufferiv(z.COLOR,0,g))}else $|=z.COLOR_BUFFER_BIT}N&&($|=z.DEPTH_BUFFER_BIT),Y&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),B.dispose(),re.dispose(),k.dispose(),y.dispose(),D.dispose(),oe.dispose(),Ve.dispose(),Ke.dispose(),F.dispose(),We.dispose(),We.removeEventListener("sessionstart",Vt),We.removeEventListener("sessionend",ot),ve&&(ve.dispose(),ve=null),Gt.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=j.autoReset,N=W.enabled,Y=W.autoUpdate,$=W.needsUpdate,X=W.type;st(),j.autoReset=w,W.enabled=N,W.autoUpdate=Y,W.needsUpdate=$,W.type=X}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){let N=w.target;N.removeEventListener("dispose",xe),ze(N)}function ze(w){Oe(w),k.remove(w)}function Oe(w){let N=k.get(w).programs;N!==void 0&&(N.forEach(function(Y){F.releaseProgram(Y)}),w.isShaderMaterial&&F.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,Y,$,X,be){N===null&&(N=he);let Ue=X.isMesh&&X.matrixWorld.determinant()<0,Fe=Dd(w,N,Y,$,X);Re.setMaterial($,Ue);let ke=Y.index,$e=1;if($.wireframe===!0){if(ke=K.getWireframeAttribute(Y),ke===void 0)return;$e=2}let Ge=Y.drawRange,Xe=Y.attributes.position,vt=Ge.start*$e,Qt=(Ge.start+Ge.count)*$e;be!==null&&(vt=Math.max(vt,be.start*$e),Qt=Math.min(Qt,(be.start+be.count)*$e)),ke!==null?(vt=Math.max(vt,0),Qt=Math.min(Qt,ke.count)):Xe!=null&&(vt=Math.max(vt,0),Qt=Math.min(Qt,Xe.count));let At=Qt-vt;if(At<0||At===1/0)return;Ve.setup(X,$,Fe,Y,ke);let Cn,mt=Pe;if(ke!==null&&(Cn=ne.get(ke),mt=Ce,mt.setIndex(Cn)),X.isMesh)$.wireframe===!0?(Re.setLineWidth($.wireframeLinewidth*Ae()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(X.isLine){let Ze=$.linewidth;Ze===void 0&&(Ze=1),Re.setLineWidth(Ze*Ae()),X.isLineSegments?mt.setMode(z.LINES):X.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else X.isPoints?mt.setMode(z.POINTS):X.isSprite&&mt.setMode(z.TRIANGLES);if(X.isBatchedMesh)mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)mt.renderInstances(vt,At,X.count);else if(Y.isInstancedBufferGeometry){let Ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,no=Math.min(Y.instanceCount,Ze);mt.renderInstances(vt,At,no)}else mt.render(vt,At)};function rt(w,N,Y){w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=Dt,w.needsUpdate=!0,Sr(w,N,Y),w.side=ii,w.needsUpdate=!0,Sr(w,N,Y),w.side=It):Sr(w,N,Y)}this.compile=function(w,N,Y=null){Y===null&&(Y=w),m=re.get(Y),m.init(),S.push(m),Y.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),w!==Y&&w.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v._useLegacyLights);let $=new Set;return w.traverse(function(X){let be=X.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){let Fe=be[Ue];rt(Fe,Y,X),$.add(Fe)}else rt(be,Y,X),$.add(be)}),S.pop(),m=null,$},this.compileAsync=function(w,N,Y=null){let $=this.compile(w,N,Y);return new Promise(X=>{function be(){if($.forEach(function(Ue){k.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){X(w);return}setTimeout(be,10)}Ee.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let at=null;function wt(w){at&&at(w)}function Vt(){Gt.stop()}function ot(){Gt.start()}let Gt=new Au;Gt.setAnimationLoop(wt),typeof self!="undefined"&&Gt.setContext(self),this.setAnimationLoop=function(w){at=w,We.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},We.addEventListener("sessionstart",Vt),We.addEventListener("sessionend",ot),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(N),N=We.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,R),m=re.get(w,S.length),m.init(),S.push(m),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Te),de=this.localClippingEnabled,ee=le.init(this.clippingPlanes,de),x=B.get(w,p.length),x.init(),p.push(x),yn(w,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Q,J),this.info.render.frame++,ee===!0&&le.beginShadows();let Y=m.state.shadowsArray;if(W.render(Y,w,N),ee===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(x,w),m.setupLights(v._useLegacyLights),N.isArrayCamera){let $=N.cameras;for(let X=0,be=$.length;X<be;X++){let Ue=$[X];Tc(x,w,Ue,Ue.viewport)}}else Tc(x,w,N);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,N),Ve.resetDefaultState(),H=-1,_=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function yn(w,N,Y,$){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){$&&fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);let Ue=oe.update(w),Fe=w.material;Fe.visible&&x.push(w,Ue,Fe,Y,fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let Ue=oe.update(w),Fe=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),fe.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),fe.copy(Ue.boundingSphere.center)),fe.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Fe)){let ke=Ue.groups;for(let $e=0,Ge=ke.length;$e<Ge;$e++){let Xe=ke[$e],vt=Fe[Xe.materialIndex];vt&&vt.visible&&x.push(w,Ue,vt,Y,fe.z,Xe)}}else Fe.visible&&x.push(w,Ue,Fe,Y,fe.z,null)}}let be=w.children;for(let Ue=0,Fe=be.length;Ue<Fe;Ue++)yn(be[Ue],N,Y,$)}function Tc(w,N,Y,$){let X=w.opaque,be=w.transmissive,Ue=w.transparent;m.setupLightsView(Y),ee===!0&&le.setGlobalState(v.clippingPlanes,Y),be.length>0&&Id(X,be,N,Y),$&&Re.viewport(b.copy($)),X.length>0&&br(X,N,Y),be.length>0&&br(be,N,Y),Ue.length>0&&br(Ue,N,Y),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Id(w,N,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let be=Me.isWebGL2;ve===null&&(ve=new zn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Vs:ni,minFilter:Hs,samples:be?4:0})),v.getDrawingBufferSize(se),be?ve.setSize(se.x,se.y):ve.setSize(Zo(se.x),Zo(se.y));let Ue=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(te),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Fe=v.toneMapping;v.toneMapping=ti,br(w,Y,$),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let ke=!1;for(let $e=0,Ge=N.length;$e<Ge;$e++){let Xe=N[$e],vt=Xe.object,Qt=Xe.geometry,At=Xe.material,Cn=Xe.group;if(At.side===It&&vt.layers.test($.layers)){let mt=At.side;At.side=Dt,At.needsUpdate=!0,wc(vt,Y,$,Qt,At,Cn),At.side=mt,At.needsUpdate=!0,ke=!0}}ke===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),v.setRenderTarget(Ue),v.setClearColor(te,L),v.toneMapping=Fe}function br(w,N,Y){let $=N.isScene===!0?N.overrideMaterial:null;for(let X=0,be=w.length;X<be;X++){let Ue=w[X],Fe=Ue.object,ke=Ue.geometry,$e=$===null?Ue.material:$,Ge=Ue.group;Fe.layers.test(Y.layers)&&wc(Fe,N,Y,ke,$e,Ge)}}function wc(w,N,Y,$,X,be){w.onBeforeRender(v,N,Y,$,X,be),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,N,Y,$,w,be),X.transparent===!0&&X.side===It&&X.forceSinglePass===!1?(X.side=Dt,X.needsUpdate=!0,v.renderBufferDirect(Y,N,$,X,w,be),X.side=ii,X.needsUpdate=!0,v.renderBufferDirect(Y,N,$,X,w,be),X.side=It):v.renderBufferDirect(Y,N,$,X,w,be),w.onAfterRender(v,N,Y,$,X,be)}function Sr(w,N,Y){N.isScene!==!0&&(N=he);let $=k.get(w),X=m.state.lights,be=m.state.shadowsArray,Ue=X.state.version,Fe=F.getParameters(w,X.state,be,N,Y),ke=F.getProgramCacheKey(Fe),$e=$.programs;$.environment=w.isMeshStandardMaterial?N.environment:null,$.fog=N.fog,$.envMap=(w.isMeshStandardMaterial?D:y).get(w.envMap||$.environment),$e===void 0&&(w.addEventListener("dispose",xe),$e=new Map,$.programs=$e);let Ge=$e.get(ke);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===Ue)return Rc(w,Fe),Ge}else Fe.uniforms=F.getUniforms(w),w.onBuild(Y,Fe,v),w.onBeforeCompile(Fe,v),Ge=F.acquireProgram(Fe,ke),$e.set(ke,Ge),$.uniforms=Fe.uniforms;let Xe=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=le.uniform),Rc(w,Fe),$.needsLights=Nd(w),$.lightsStateVersion=Ue,$.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Ac(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Rc(w,N){let Y=k.get(w);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Dd(w,N,Y,$,X){N.isScene!==!0&&(N=he),M.resetTextureUnits();let be=N.fog,Ue=$.isMeshStandardMaterial?N.environment:null,Fe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bn,ke=($.isMeshStandardMaterial?D:y).get($.envMap||Ue),$e=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Qt=!!Y.morphAttributes.color,At=ti;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=v.toneMapping);let Cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=Cn!==void 0?Cn.length:0,Ze=k.get($),no=m.state.lights;if(ee===!0&&(de===!0||w!==_)){let an=w===_&&$.id===H;le.setState($,w,an)}let _t=!1;$.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==no.state.version||Ze.outputColorSpace!==Fe||X.isBatchedMesh&&Ze.batching===!1||!X.isBatchedMesh&&Ze.batching===!0||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||Ze.envMap!==ke||$.fog===!0&&Ze.fog!==be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==le.numPlanes||Ze.numIntersection!==le.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Ge||Ze.morphTargets!==Xe||Ze.morphNormals!==vt||Ze.morphColors!==Qt||Ze.toneMapping!==At||Me.isWebGL2===!0&&Ze.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,Ze.__version=$.version);let fi=Ze.currentProgram;_t===!0&&(fi=Sr($,N,X));let Cc=!1,Ts=!1,io=!1,Ft=fi.getUniforms(),pi=Ze.uniforms;if(Re.useProgram(fi.program)&&(Cc=!0,Ts=!0,io=!0),$.id!==H&&(H=$.id,Ts=!0),Cc||_!==w){Ft.setValue(z,"projectionMatrix",w.projectionMatrix),Ft.setValue(z,"viewMatrix",w.matrixWorldInverse);let an=Ft.map.cameraPosition;an!==void 0&&an.setValue(z,fe.setFromMatrixPosition(w.matrixWorld)),Me.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Ts=!0,io=!0)}if(X.isSkinnedMesh){Ft.setOptional(z,X,"bindMatrix"),Ft.setOptional(z,X,"bindMatrixInverse");let an=X.skeleton;an&&(Me.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Ft.setValue(z,"boneTexture",an.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ft.setOptional(z,X,"batchingTexture"),Ft.setValue(z,"batchingTexture",X._matricesTexture,M));let so=Y.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0&&Me.isWebGL2===!0)&&De.update(X,Y,fi),(Ts||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,Ft.setValue(z,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(pi.envMap.value=ke,pi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Ts&&(Ft.setValue(z,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Ud(pi,io),be&&$.fog===!0&&G.refreshFogUniforms(pi,be),G.refreshMaterialUniforms(pi,$,ie,Z,ve),as.upload(z,Ac(Ze),pi,M)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(as.upload(z,Ac(Ze),pi,M),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(z,"center",X.center),Ft.setValue(z,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(z,"normalMatrix",X.normalMatrix),Ft.setValue(z,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let an=$.uniformsGroups;for(let ro=0,Od=an.length;ro<Od;ro++)if(Me.isWebGL2){let Pc=an[ro];Ke.update(Pc,fi),Ke.bind(Pc,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Ud(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Nd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,Y){k.get(w.texture).__webglTexture=N,k.get(w.depthTexture).__webglTexture=Y;let $=k.get(w);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){let Y=k.get(w);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,Y=0){R=w,C=N,A=Y;let $=!0,X=null,be=!1,Ue=!1;if(w){let ke=k.get(w);ke.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(z.FRAMEBUFFER,null),$=!1):ke.__webglFramebuffer===void 0?M.setupRenderTarget(w):ke.__hasExternalTextures&&M.rebindTextures(w,k.get(w.texture).__webglTexture,k.get(w.depthTexture).__webglTexture);let $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);let Ge=k.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?X=Ge[N][Y]:X=Ge[N],be=!0):Me.isWebGL2&&w.samples>0&&M.useMultisampledRTT(w)===!1?X=k.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?X=Ge[Y]:X=Ge,b.copy(w.viewport),U.copy(w.scissor),V=w.scissorTest}else b.copy(ae).multiplyScalar(ie).floor(),U.copy(ce).multiplyScalar(ie).floor(),V=ue;if(Re.bindFramebuffer(z.FRAMEBUFFER,X)&&Me.drawBuffers&&$&&Re.drawBuffers(w,X),Re.viewport(b),Re.scissor(U),Re.setScissorTest(V),be){let ke=k.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,ke.__webglTexture,Y)}else if(Ue){let ke=k.get(w.texture),$e=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,Y||0,$e)}H=-1},this.readRenderTargetPixels=function(w,N,Y,$,X,be,Ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=k.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Re.bindFramebuffer(z.FRAMEBUFFER,Fe);try{let ke=w.texture,$e=ke.format,Ge=ke.type;if($e!==gn&&we.convert($e)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=Ge===Vs&&(Ee.has("EXT_color_buffer_half_float")||Me.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ge!==ni&&we.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Qn&&(Me.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-$&&Y>=0&&Y<=w.height-X&&z.readPixels(N,Y,$,X,we.convert($e),we.convert(Ge),be)}finally{let ke=R!==null?k.get(R).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(w,N,Y=0){let $=Math.pow(2,-Y),X=Math.floor(N.image.width*$),be=Math.floor(N.image.height*$);M.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,w.x,w.y,X,be),Re.unbindTexture()},this.copyTextureToTexture=function(w,N,Y,$=0){let X=N.image.width,be=N.image.height,Ue=we.convert(Y.format),Fe=we.convert(Y.type);M.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,w.x,w.y,X,be,Ue,Fe,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Ue,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,$,w.x,w.y,Ue,Fe,N.image),$===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,N,Y,$,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=w.max.x-w.min.x+1,Ue=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,ke=we.convert($.format),$e=we.convert($.type),Ge;if($.isData3DTexture)M.setTexture3D($,0),Ge=z.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)M.setTexture2DArray($,0),Ge=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);let Xe=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qt=z.getParameter(z.UNPACK_SKIP_PIXELS),At=z.getParameter(z.UNPACK_SKIP_ROWS),Cn=z.getParameter(z.UNPACK_SKIP_IMAGES),mt=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(Ge,X,N.x,N.y,N.z,be,Ue,Fe,ke,$e,mt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ge,X,N.x,N.y,N.z,be,Ue,Fe,ke,mt.data)):z.texSubImage3D(Ge,X,N.x,N.y,N.z,be,Ue,Fe,ke,$e,mt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,At),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Cn),X===0&&$.generateMipmaps&&z.generateMipmap(Ge),Re.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,Re.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ia?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?Ei:Mu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ei?it:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ul=class extends Xs{};ul.prototype.isWebGL1Renderer=!0;ga=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_a=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},xa=class extends nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new ht,eu=new ht,qr=[],tu=new kn,P_=new ht,Ls=new pe,Is=new Ti,va=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,P_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),tu.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Is.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),eu.multiplyMatrices(i,Qi),Ls.matrixWorld=eu,Ls.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){let l=qr[a];l.instanceId=r,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends sn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],a=[],o=new P,l=new ht;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qs=class extends hn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new ye,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dl=class extends qs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Yr=new P,Bo=new zl,zo=new zl,ko=new zl,fl=class extends hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Yr.subVectors(s[0],s[1]).add(s[0]),c=Yr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Bo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),zo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ko.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ko.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Bo.calc(l),zo.calc(l),ko.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ya=class extends hn{constructor(e=new ye,t=new ye,i=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ye){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends hn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y),Fs(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends hn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends hn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends hn{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Os(e,s.x,r.x,a.x),Os(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends hn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Os(e,s.x,r.x,a.x),Os(e,s.y,r.y,a.y),Os(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},iu=Object.freeze({__proto__:null,ArcCurve:dl,CatmullRomCurve3:fl,CubicBezierCurve:ya,CubicBezierCurve3:pl,EllipseCurve:qs,LineCurve:Ma,LineCurve3:ml,QuadraticBezierCurve:ba,QuadraticBezierCurve3:gl,SplineCurve:Sa}),_l=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new iu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new iu[s.type]().fromJSON(s))}return this}},Ys=class extends _l{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ma(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ba(this.currentPoint.clone(),new ye(e,t),new ye(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ya(this.currentPoint.clone(),new ye(e,t),new ye(i,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Sa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new qs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xl=class n extends Jt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new ye,f=new P,g=new P,x=new P,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=t;S++){let v=i+S*h*s,T=Math.sin(v),C=Math.cos(v);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*T,u.y=e[A].y,u.z=e[A].x*C,a.push(u.x,u.y,u.z),d.x=S/t,d.y=A/(e.length-1),o.push(d.x,d.y);let R=l[3*A+0]*T,H=l[3*A+1],_=l[3*A+0]*C;c.push(R,H,_)}}for(let S=0;S<t;S++)for(let v=0;v<e.length-1;v++){let T=v+S*e.length,C=T,A=T+e.length,R=T+e.length+1,H=T+1;r.push(C,A,H),r.push(R,H,A)}this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ea=class n extends xl{constructor(e=1,t=1,i=4,s=8){let r=new Ys;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Sn=class n extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function S(){let T=new P,C=new P,A=0,R=(t-e)/i;for(let H=0;H<=r;H++){let _=[],b=H/r,U=b*(t-e)+e;for(let V=0;V<=s;V++){let te=V/s,L=te*l+o,O=Math.sin(L),Z=Math.cos(L);C.x=U*O,C.y=-b*i+m,C.z=U*Z,u.push(C.x,C.y,C.z),T.set(O,R,Z).normalize(),d.push(T.x,T.y,T.z),f.push(te,1-b),_.push(g++)}x.push(_)}for(let H=0;H<s;H++)for(let _=0;_<r;_++){let b=x[_][H],U=x[_+1][H],V=x[_+1][H+1],te=x[_][H+1];h.push(b,U,te),h.push(U,V,te),A+=6}c.addGroup(p,A,0),p+=A}function v(T){let C=g,A=new ye,R=new P,H=0,_=T===!0?e:t,b=T===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let U=g;for(let V=0;V<=s;V++){let L=V/s*l+o,O=Math.cos(L),Z=Math.sin(L);R.x=_*Z,R.y=m*b,R.z=_*O,u.push(R.x,R.y,R.z),d.push(0,b,0),A.x=O*.5+.5,A.y=Z*.5*b+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){let te=C+V,L=U+V;T===!0?h.push(L,L+1,te):h.push(L+1,L,te),H+=3}c.addGroup(p,H,T===!0?1:2),p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vl=class n extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new P,T=new P,C=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],T),f(t[A+2],C),l(v,T,C,S)}function l(S,v,T,C){let A=C+1,R=[];for(let H=0;H<=A;H++){R[H]=[];let _=S.clone().lerp(T,H/A),b=v.clone().lerp(T,H/A),U=A-H;for(let V=0;V<=U;V++)V===0&&H===A?R[H][V]=_:R[H][V]=_.clone().lerp(b,V/U)}for(let H=0;H<A;H++)for(let _=0;_<2*(A-H)-1;_++){let b=Math.floor(_/2);_%2===0?(d(R[H][b+1]),d(R[H+1][b]),d(R[H][b])):(d(R[H][b+1]),d(R[H+1][b+1]),d(R[H+1][b]))}}function c(S){let v=new P;for(let T=0;T<r.length;T+=3)v.x=r[T+0],v.y=r[T+1],v.z=r[T+2],v.normalize().multiplyScalar(S),r[T+0]=v.x,r[T+1]=v.y,r[T+2]=v.z}function h(){let S=new P;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let T=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;a.push(T,1-C)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let v=a[S+0],T=a[S+2],C=a[S+4],A=Math.max(v,T,C),R=Math.min(v,T,C);A>.9&&R<.1&&(v<.2&&(a[S+0]+=1),T<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){let T=S*3;v.x=e[T+0],v.y=e[T+1],v.z=e[T+2]}function g(){let S=new P,v=new P,T=new P,C=new P,A=new ye,R=new ye,H=new ye;for(let _=0,b=0;_<r.length;_+=9,b+=6){S.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),T.set(r[_+6],r[_+7],r[_+8]),A.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),H.set(a[b+4],a[b+5]),C.copy(S).add(v).add(T).divideScalar(3);let U=m(C);x(A,b+0,S,U),x(R,b+2,v,U),x(H,b+4,T,U)}}function x(S,v,T,C){C<0&&S.x===1&&(a[v]=S.x-1),T.x===0&&T.z===0&&(a[v]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},$s=class extends Ys{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ys().fromJSON(s))}return this}},B_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Du(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(i&&(r=G_(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Zs(r,a,t,o,l,f,0),a}};Bs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ru(e),au(i,e);let a=e.length;t.forEach(ru);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,au(i,t[l]);let o=B_.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Ri=class n extends vl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ta=class n extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,g=new ye;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let S=p+m,v=S,T=S+i+1,C=S+i+2,A=S+1;o.push(v,T,A),o.push(T,C,A)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},wa=class n extends Jt{constructor(e=new $s([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Bs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Bs.isClockWise(S)===!0&&(g[m]=S.reverse())}let x=Bs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){let S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){let S=x[m],v=S[0]+u,T=S[1]+u,C=S[2]+u;i.push(v,T,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return tx(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};Tt=class n extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let S=[],v=p/i,T=0;p===0&&a===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+T,1-v),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let v=h[p][S+1],T=h[p][S],C=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&f.push(v,T,A),(p!==i-1||l<Math.PI)&&f.push(T,C,A)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Vn=class n extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(x,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},qe=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uh:r=e,o=2*t-i;break;case dh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:a=e,l=2*i-t;break;case dh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,T=f*m-f*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+S*a[c+C]+v*a[l+C]+T*a[u+C];return r}},Sl=class extends us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},El=class extends us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Qr:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Qr;Ci=class extends _n{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Kr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;Tl=class extends _n{};Tl.prototype.ValueTypeName="color";wl=class extends _n{};wl.prototype.ValueTypeName="number";Al=class extends us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ks=class extends _n{InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=Qr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;Pi=class extends _n{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Kr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;Rl=class extends _n{};Rl.prototype.ValueTypeName="vector";ou={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Cl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ix=new Cl,Qs=class{constructor(e){this.manager=e!==void 0?e:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";Pl=class extends Qs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ou.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Gs("img");function l(){h(),ou.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},ds=class extends Qs{constructor(e){super(e)}load(e,t,i,s){let r=new sn,a=new Pl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},er=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Aa=class extends er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ho=new ht,lu=new P,cu=new P,Ra=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hu=new ht,Ds=new P,Vo=new P,Ll=class extends Ra{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ds),Vo.copy(i.position),Vo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vo),i.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),hu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}},Ca=class extends er{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ll}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Il=class extends Ra{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kl="\\[\\]\\.:\\/",sx=new RegExp("["+kl+"]","g"),Hl="[^"+kl+"]",rx="[^"+kl.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",Hl),ox=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),hx=new RegExp("^"+ax+ox+lx+cx+"$"),ux=["material","materials","bones","map"],Dl=class{constructor(e,t,i){let s=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){let t=hx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Dl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];wv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var jl={};Bd(jl,{brickTexture:()=>za,dirtTexture:()=>Xl,earthWallTexture:()=>ka,grassTexture:()=>Wl,noiseTexture:()=>Yl,paintingTexture:()=>Zl,photoTexture:()=>Jl,plasterTexture:()=>ql,setManifest:()=>Gl,skyTexture:()=>zu,stripeTexture:()=>$l,textBoard:()=>_s,thatchTexture:()=>Ha,tinTexture:()=>Va,upgradePhoto:()=>Ba,waxTexture:()=>Ii,woodTexture:()=>Gn});function li(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function jt(n,e,t,i,s,r){let a=document.createElement("canvas");a.width=n,a.height=e,t(a.getContext("2d"),n,e);let o=new ri(a);return o.wrapS=o.wrapT=zs,o.repeat.set(i||1,s||1),o.anisotropy=4,r!==!1&&(o.colorSpace=it),o}function Gl(n){Vl=n||{}}function Ba(n,e){if(!(Vl.tex||[]).includes(e))return n;let t=new Image;return t.onload=()=>{n.image=t,n.wrapS=n.wrapT=ks,n.colorSpace=it,n.needsUpdate=!0},t.src="img/tex/"+e+".jpg",n}function Ii(n,e){return e=e||"#e0a526",jt(128,128,(t,i,s)=>{t.fillStyle=n||"#e0a526",t.fillRect(0,0,i,s);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=a*32+16+r%2*16,l=r*32+16;t.fillStyle="#fff6df",t.beginPath(),t.arc(o,l,11,0,7),t.fill(),t.fillStyle=e,t.beginPath(),t.arc(o,l,7,0,7),t.fill(),t.fillStyle="#1b1b1b",t.beginPath(),t.arc(o,l,2.5,0,7),t.fill()}},2,2)}function _s(n,e,t,i,s,r){return jt(e,t,a=>{a.fillStyle=i,a.fillRect(0,0,e,t),a.strokeStyle=r||"#f1c40f",a.lineWidth=Math.max(4,t*.04),a.strokeRect(a.lineWidth,a.lineWidth,e-2*a.lineWidth,t-2*a.lineWidth),a.textAlign="center",a.textBaseline="middle",n.forEach((o,l)=>{a.fillStyle=o.c||s,a.font=(o.b===!1?"":"bold ")+o.s+"px Arial, sans-serif",a.fillText(o.t,e/2,t*(o.y||(l+1)/(n.length+1)),e*.92)})},1,1)}function zu(){return jt(8,256,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2f86d6"),i.addColorStop(.5,"#7cc2ee"),i.addColorStop(.82,"#dff3fb"),i.addColorStop(1,"#f2f6e8"),n.fillStyle=i,n.fillRect(0,0,e,t)},1,1)}function Jl(n){if(!(Vl.scenes||[]).includes(n))return null;let e=new ds().load("img/scenes/"+n+".jpg");return e.colorSpace=it,e.anisotropy=4,e}var Bu,En,Vl,Wl,Xl,za,ql,ka,Ha,Va,Gn,Yl,$l,Zl,or=Lc(()=>{ms();Bu={},En=(n,e)=>Bu[n]||(Bu[n]=e()),Vl={};Wl=()=>En("grass",()=>Ba(jt(512,512,(n,e,t)=>{let i=li(7);n.fillStyle="#5f9a3f",n.fillRect(0,0,e,t);for(let s=0;s<9e3;s++){let r=i()*e,a=i()*t,o=3+i()*7,l=i();n.strokeStyle=l<.33?"#4b8a33":l<.66?"#79b34b":"#3f7a2c",n.lineWidth=1,n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*3,a-o),n.stroke()}for(let s=0;s<260;s++)n.fillStyle="rgba(170,140,80,.18)",n.beginPath(),n.arc(i()*e,i()*t,2+i()*9,0,7),n.fill()},40,24),"grass")),Xl=()=>En("dirt",()=>Ba(jt(256,256,(n,e,t)=>{let i=li(11);n.fillStyle="#b98b57",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i();n.fillStyle=r<.5?"rgba(120,80,40,.35)":"rgba(230,200,150,.3)",n.fillRect(i()*e,i()*t,1+i()*3,1+i()*3)}},8,3),"dirt")),za=n=>En("brick"+n,()=>Ba(jt(256,256,(e,t,i)=>{let s=li(5);e.fillStyle="#7a4a30",e.fillRect(0,0,t,i);let r=64,a=32;for(let o=0;o<i/a;o++)for(let l=-1;l<t/r+1;l++){let c=o%2*r/2,h=.85+s()*.3;e.fillStyle=`rgb(${n[0]*h|0},${n[1]*h|0},${n[2]*h|0})`,e.fillRect(l*r+c+2,o*a+2,r-4,a-4)}for(let o=0;o<900;o++)e.fillStyle="rgba(0,0,0,.08)",e.fillRect(s()*t,s()*i,2,2)},4,2),"brick")),ql=n=>En("plaster"+n,()=>jt(256,256,(e,t,i)=>{let s=li(3);e.fillStyle=n,e.fillRect(0,0,t,i);for(let r=0;r<2200;r++)e.fillStyle=s()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.07)",e.fillRect(s()*t,s()*i,2+s()*4,2+s()*4)},3,2)),ka=()=>En("earth",()=>jt(256,256,(n,e,t)=>{let i=li(9);n.fillStyle="#b98457",n.fillRect(0,0,e,t);for(let s=0;s<3e3;s++){let r=i();n.fillStyle=r<.5?"rgba(110,70,35,.3)":"rgba(220,180,130,.3)",n.fillRect(i()*e,i()*t,2+i()*5,2+i()*5)}},3,1)),Ha=()=>En("thatch",()=>jt(256,256,(n,e,t)=>{let i=li(21);n.fillStyle="#b99a55",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i()*e,a=i()*t;n.strokeStyle=i()<.5?"#8d733a":"#d9bf7a",n.lineWidth=1+i(),n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*6,a+14+i()*14),n.stroke()}},4,3)),Va=()=>En("tin",()=>jt(256,256,(n,e,t)=>{n.fillStyle="#b13a2a",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.5,"rgba(255,255,255,.18)"),s.addColorStop(1,"rgba(0,0,0,.28)"),n.fillStyle=s,n.fillRect(i,0,16,t)}},6,3)),Gn=n=>En("wood"+n,()=>jt(256,256,(e,t,i)=>{let s=li(13);e.fillStyle=n||"#9a6a3f",e.fillRect(0,0,t,i);for(let r=0;r<i;r+=32)e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,r,t,2);for(let r=0;r<500;r++){e.strokeStyle=s()<.5?"rgba(60,30,10,.18)":"rgba(255,220,170,.12)",e.beginPath();let a=s()*i;e.moveTo(0,a),e.lineTo(t,a+(s()-.5)*6),e.stroke()}},3,3)),Yl=(n,e)=>jt(128,128,(t,i,s)=>{let r=li(17);t.fillStyle=n,t.fillRect(0,0,i,s);for(let a=0;a<900;a++)t.fillStyle=r()<.5?`rgba(0,0,0,${e})`:`rgba(255,255,255,${e})`,t.fillRect(r()*i,r()*s,3,3)},2,2);$l=()=>En("stripe",()=>jt(128,64,(n,e,t)=>{for(let i=0;i<8;i++)n.fillStyle=i%2?"#fff":"#c0392b",n.fillRect(i*16,0,16,t)},3,1));Zl=()=>En("painting",()=>jt(256,192,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#58b4ea"),i.addColorStop(1,"#e3f6ff"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#ffe07a",n.beginPath(),n.arc(190,45,24,0,7),n.fill(),n.fillStyle="#4f9c3c",n.beginPath(),n.moveTo(0,t),n.quadraticCurveTo(80,80,170,130),n.quadraticCurveTo(220,100,e,t),n.fill(),n.fillStyle="#2e8b57",n.beginPath(),n.arc(60,120,18,0,7),n.fill(),n.fillStyle="#6b4226",n.fillRect(58,120,4,30)},1,1))});ms();var je=(n,e,t,i)=>({q:n,c:e,a:t,exp:i}),Ou={maths:[je("Une cagette contient 8 mangues. Combien de mangues dans 5 cagettes ?",["30","35","40","45"],"40","5 \xD7 8 = 40."),je("Quel est le double de 17 ?",["27","34","37","32"],"34","17 \xD7 2 = 34."),je("Un sac de 25 mangues est partag\xE9 entre 5 enfants. Combien chacun re\xE7oit-il ?",["4","5","6","7"],"5","25 \xF7 5 = 5."),je("Combien font 7 \xD7 6 ?",["36","42","48","40"],"42","7 \xD7 6 = 42."),je("Combien font 100 \u2212 37 ?",["73","67","63","53"],"63","100 \u2212 37 = 63."),je("Quelle est la moiti\xE9 de 90 ?",["40","45","50","55"],"45","90 \xF7 2 = 45."),je("Combien font 12 + 29 ?",["39","41","43","51"],"41","12 + 29 = 41."),je("Combien font 9 \xD7 9 ?",["72","81","90","99"],"81","9 \xD7 9 = 81."),je("Combien font 144 \xF7 12 ?",["10","11","12","14"],"12","12 \xD7 12 = 144."),je("Quel est le p\xE9rim\xE8tre d\u2019un carr\xE9 de 6 m de c\xF4t\xE9 ?",["12 m","24 m","36 m","30 m"],"24 m","4 \xD7 6 = 24 m."),je("Trois cahiers \xE0 500 FC chacun co\xFBtent combien en tout ?",["1 000 FC","1 200 FC","1 500 FC","2 000 FC"],"1 500 FC","3 \xD7 500 = 1 500.")],francais:[je("Hier, nous ___ au march\xE9. (verbe aller)",["allons","sommes all\xE9s","irons","allerons"],"sommes all\xE9s","Au pass\xE9 compos\xE9 : nous sommes all\xE9s."),je("Quel est l\u2019antonyme de \xAB ancien \xBB ?",["vieux","nouveau","vieil","long"],"nouveau","Le contraire d\u2019\xAB ancien \xBB est \xAB nouveau \xBB."),je("Quel mot est un nom propre ?",["chien","Kinshasa","livre","maison"],"Kinshasa","Un nom propre d\xE9signe un lieu pr\xE9cis."),je("Quel est le pluriel de \xAB cheval \xBB ?",["chevals","chevaux","chevaus","chevales"],"chevaux","Les noms en -al font leur pluriel en -aux."),je("Quel est un synonyme de \xAB content \xBB ?",["triste","heureux","f\xE2ch\xE9","press\xE9"],"heureux","\xAB Content \xBB et \xAB heureux \xBB ont le m\xEAme sens."),je("Les enfants ___ dans la cour. (jouer, pr\xE9sent)",["jouent","joue","jouons","jouez"],"jouent","Avec \xAB ils / elles \xBB, le verbe se termine par -ent."),je("Quel mot est un verbe ?",["table","courir","joli","rapidement"],"courir","\xAB Courir \xBB exprime une action : c\u2019est un verbe."),je("Quel est le f\xE9minin de \xAB acteur \xBB ?",["acteuse","actrice","acteure","actresse"],"actrice","Acteur \u2192 actrice."),je("Ils ___ faim. (verbe avoir)",["ont","sont","avons","a"],"ont","Ils ont : verbe avoir \xE0 la 3e personne du pluriel.")],geo:[je("Quelle est la capitale de la RDC ?",["Lubumbashi","Goma","Kinshasa","Kisangani"],"Kinshasa","Kinshasa est la capitale de la RDC."),je("Combien de provinces compte la RDC aujourd\u2019hui ?",["11","15","26","30"],"26","Depuis 2015, la RDC compte 26 provinces."),je("Quel grand fleuve traverse Kinshasa ?",["le Nil","le Niger","le Congo","le Zamb\xE8ze"],"le Congo","Le fleuve Congo borde Kinshasa."),je("Quel oc\xE9an touche la c\xF4te de la RDC ?",["Indien","Atlantique","Pacifique","Arctique"],"Atlantique","La petite c\xF4te de la RDC donne sur l\u2019oc\xE9an Atlantique."),je("Quelle est la grande ville du Haut-Katanga ?",["Goma","Lubumbashi","Matadi","Bukavu"],"Lubumbashi","Lubumbashi est le chef-lieu du Haut-Katanga."),je("Quel lac borde la RDC \xE0 l\u2019est ?",["Tchad","Tanganyika","Titicaca","L\xE9man"],"Tanganyika","Le lac Tanganyika longe l\u2019est de la RDC."),je("Quel est le principal port maritime de la RDC ?",["Matadi","Kindu","Kikwit","Bunia"],"Matadi","Matadi est le grand port sur le fleuve Congo."),je("Quelle est la capitale du Congo-Brazzaville, pays voisin ?",["Brazzaville","Luanda","Kampala","Kigali"],"Brazzaville","Brazzaville est face \xE0 Kinshasa, de l\u2019autre c\xF4t\xE9 du fleuve.")],histoire:[je("En quelle ann\xE9e le Congo belge est-il devenu ind\xE9pendant ?",["1948","1960","1965","1975"],"1960","L\u2019ind\xE9pendance date de 1960."),je("Quel jour c\xE9l\xE8bre-t-on l\u2019ind\xE9pendance ?",["1er mai","30 juin","17 mai","4 d\xE9cembre"],"30 juin","La f\xEAte de l\u2019ind\xE9pendance a lieu le 30 juin."),je("Qui fut le premier Premier ministre du Congo ind\xE9pendant ?",["Patrice Lumumba","Mobutu","Laurent-D\xE9sir\xE9 Kabila","F\xE9lix Tshisekedi"],"Patrice Lumumba","Patrice Lumumba dirigea le premier gouvernement."),je("Qui fut le premier pr\xE9sident du Congo ind\xE9pendant ?",["Joseph Kasa-Vubu","Mobutu","Patrice Lumumba","Mo\xEFse Tshombe"],"Joseph Kasa-Vubu","Joseph Kasa-Vubu fut le premier chef de l\u2019\xC9tat."),je("Quel symbole figure en haut \xE0 gauche du drapeau de la RDC ?",["un soleil","une \xE9toile jaune","une croix","un lion"],"une \xE9toile jaune","Une \xE9toile jaune brille sur fond bleu ciel."),je("Quelle est la devise de la RDC ?",["Justice \u2013 Paix \u2013 Travail","Unit\xE9 \u2013 Force \u2013 Progr\xE8s","Libert\xE9 \u2013 \xC9galit\xE9 \u2013 Fraternit\xE9","Travail \u2013 Famille \u2013 Patrie"],"Justice \u2013 Paix \u2013 Travail","La devise nationale est \xAB Justice \u2013 Paix \u2013 Travail \xBB."),je("Quelle est la monnaie de la RDC ?",["le franc congolais","le dollar","le cedi","le naira"],"le franc congolais","La monnaie nationale est le franc congolais (FC).")]},Fu={maths:"Calcul",francais:"Fran\xE7ais",geo:"G\xE9ographie",histoire:"Histoire"},bt={lola:{sc:"ville",x:22.5,z:1.5,ry:-1.9,name:"Mama Lola",short:"Mama Lola",role:"Gardienne du portail",kind:"quiz",sujet:"maths",nb:3,look:{s:"f",h:.93,skin:"#6b4028",c:"#e67e22",c2:"#1f7a4d",k:"pagne",co:"gris",age:"aine"},intro:["Bonjour, mon enfant ! Le portail ne s\u2019ouvre que pour ceux qui savent compter.","R\xE9ponds \xE0 mes trois questions et je te laisse entrer."],outro:"Bravo ! Le portail est ouvert. Entre dans l\u2019\xE9cole et va voir la ma\xEEtresse."},ilunga:{sc:"classe",x:-3,z:-3.6,ry:0,name:"Professeure Ilunga",short:"la ma\xEEtresse",role:"Ma\xEEtresse",kind:"quiz",sujet:"francais",nb:3,needs:"lola",look:{s:"f",h:.98,skin:"#5a3623",c:"#8e44ad",k:"boubou",co:"tresses"},intro:["Bienvenue \xE0 LEXARIS ACAD\xC9MIE !","Aujourd\u2019hui, la le\xE7on porte sur la langue. Trois questions pour commencer."],outro:"Tr\xE8s bien ! Va t\u2019asseoir pr\xE8s de Junior, il t\u2019attend pour la g\xE9ographie."},junior:{sc:"classe",x:2.6,z:-.1,ry:Math.PI,name:"Junior",short:"Junior",role:"\xC9l\xE8ve",kind:"quiz",sujet:"geo",nb:2,needs:"ilunga",sit:!0,look:{s:"h",h:.74,skin:"#7a4a2e",c:"#16a085",k:"uniforme",co:"courtes"},intro:["Salut ! La g\xE9ographie, c\u2019est mon sujet pr\xE9f\xE9r\xE9."],outro:"Bien jou\xE9 ! Va voir le directeur, il veut te poser les derni\xE8res questions."},mavungu:{sc:"classe",x:5.6,z:-3.4,ry:0,name:"Directeur Mavungu",short:"le directeur",role:"Directeur",kind:"quiz",sujet:"histoire",nb:2,needs:"junior",look:{s:"h",h:1.04,skin:"#4f3020",c:"#2c3e50",k:"uniforme",co:"courtes",cravate:!0},intro:["Tu as bien travaill\xE9.","Deux derni\xE8res questions pour finir la le\xE7on."],outro:"Le\xE7on termin\xE9e ! Tu gagnes 20 pi\xE8ces et du tissu wax pour ta maison."},bea:{sc:"ville",x:3,z:-6.6,ry:0,name:"Maman B\xE9a",short:"Maman B\xE9a",role:"Marchande",kind:"shop",look:{s:"f",h:.97,skin:"#744630",c:"#c0392b",k:"pagne",co:"nattes"}},mama:{sc:"maison",x:1.4,z:-.8,ry:0,name:"Maman",short:"Maman",role:"\xC0 la maison",kind:"talk",look:{s:"f",h:.97,skin:"#6b4028",c:"#d35400",k:"pagne",co:"tresses"}}},ai={jer:{sc:"ville",x:11,z:3.2,ry:-1.2,name:"J\xE9r\xE9mie",look:{s:"h",h:.9,skin:"#6b4028",c:"#27ae60",k:"uniforme",co:"courtes"}},kasa:{sc:"ville",x:12.6,z:4.6,ry:-1.9,name:"Petit Kasa",look:{s:"f",h:.72,skin:"#8a5634",c:"#e0a526",k:"pagne",co:"nattes"}}},Na=[["J\xE9r\xE9mie","La le\xE7on commence bient\xF4t, tu viens ?"],["Petit Kasa","Mama Lola garde le portail, elle pose des questions !"],["J\xE9r\xE9mie","R\xE9ponds bien et tu entreras dans la classe."],["Petit Kasa","Moi, je connais d\xE9j\xE0 toutes les mangues !"],["J\xE9r\xE9mie","Le manguier du village donne les meilleures mangues."]],un={natte:{n:"Natte tress\xE9e",p:10},table:{n:"Table en bois",p:25},lampe:{n:"Lampe",p:20},rideau:{n:"Rideau en wax",p:10,t:1},tableau:{n:"Tableau du village",p:30},plante:{n:"Plante verte",p:15}},gs=["#c58b62","#b07a50","#9a6641","#7a4a2e","#63391f","#4f3020","#3d2416","#d9a67c"],Oa=["#140d09","#2e1a10","#5a3319","#8a3a1c","#c79a3b","#7a7a7a","#d9d9d9","#7b2a6e"],nr=["#120a06","#3b2212","#2f4a3a","#2a4a6e"],ir=["#7a3a30","#a8483c","#c0566a","#4a2a24"],Fa=["#1f7a4d","#2e86de","#c0392b","#e67e22","#8e44ad","#16a085","#e0a526","#2c3e50","#d6336c","#f1f1f1"],sr={courtes:{n:"Courts",own:!0},rase:{n:"Ras\xE9",own:!0},tresses:{n:"Tresses",own:!0},nattes:{n:"Nattes",own:!0},afro:{n:"Afro",own:!0},chignon:{n:"Chignon",unlock:"lola"},noeuds:{n:"N\u0153uds bantous",price:25},locks:{n:"Locks",price:30}},rr={boucles:{n:"Boucles d\u2019oreilles",own:!0},lunettes:{n:"Lunettes",unlock:"ilunga"},casquette:{n:"Casquette",unlock:"junior"},foulard:{n:"Foulard",price:20},collier:{n:"Collier de perles",price:15},sac:{n:"Sac \xE0 dos",price:25}},oi={uniforme:{n:"Uniforme de l\u2019\xE9cole",own:!0,top:"plain",bottom:"auto",trouser:"#262a3a",collar:!0},polo:{n:"Polo et jean",price:35,top:"plain",bottom:"trousers",trouser:"#2f4a7a",collar:!0},sport:{n:"Tenue de sport",price:40,top:"plain",bottom:"trousers",trouser:"#233044",collar:!1,matchTrouser:!0},robe:{n:"Robe de f\xEAte",price:70,top:"plain",bottom:"skirt",belt:!0},pagne:{n:"Tenue wax",unlock:"mavungu",top:"wax",bottom:"auto",trouser:"#262a3a"},boubou:{n:"Boubou brod\xE9",price:60,top:"plain",bottom:"long",trim:!0}},ar={s:"f",skin:3,faceW:.5,jaw:.4,eyeS:.5,eyeC:1,brow:0,nose:.5,lips:.5,lipC:0,hair:"tresses",hairC:0,beard:0,acc:[],outfit:"uniforme",outfitC:0,blush:.3},Li={4:{outfits:["sport"]}};ms();or();var Qe=(n,e,t,i)=>new qe(Object.assign({color:n,roughness:e===void 0?.85:e,metalness:t||0},i||{})),Wn=(n,e,t)=>{let i=new pe(new Ea(n,e,6,14),t);return i.castShadow=!0,i},pt=(n,e,t,i,s,r)=>{let a=new pe(new Tt(n,r||20,r?Math.round(r*.8):16),e);return a.scale.set(t||1,i||1,s||1),a.castShadow=!0,a},ci=(n,e,t)=>{let i=new lt;return i.position.set(n,e,t),i},dx=(n,e,t)=>n+(e-n)*t;function fx(n){let e=n.hair||n.co||"courtes",t={s:n.s||"f",h:n.h||1,skin:typeof n.skin=="number"?gs[n.skin]||gs[3]:n.skin||gs[3],faceW:n.faceW===void 0?.5:n.faceW,jaw:n.jaw===void 0?.4:n.jaw,eyeS:n.eyeS===void 0?.5:n.eyeS,eyeC:nr[n.eyeC||1]||nr[1],brow:n.brow||0,nose:n.nose===void 0?.5:n.nose,lips:n.lips===void 0?.5:n.lips,lipC:ir[n.lipC||0]||ir[0],blush:n.blush===void 0?.3:n.blush,hair:e,hairHex:n.hairHex||(typeof n.hairC=="number"?Oa[n.hairC]:e==="gris"?"#d9d9d9":"#140d09"),beard:n.beard||0,acc:n.acc||[],outfit:n.outfit||(n.k==="pagne"?"pagne":n.k==="boubou"?"boubou":"uniforme"),c:n.cHex||(typeof n.outfitC=="number"?Fa[n.outfitC]:n.c||"#1f7a4d"),c2:n.c2,cravate:!!n.cravate};return n.s!=="f"&&t.hair,t}function ku(n,e,t,i){let s=new Tt(1,40,32,0,Math.PI*2,e||0,t||Math.PI),r=s.attributes.position,a=.092+.022*n.faceW,o=.122,l=.108,c=dx(.46,.14,n.jaw);for(let h=0;h<r.count;h++){let u=r.getX(h),d=r.getY(h),f=r.getZ(h);if(d<-.05){let g=Math.min(1,(-d-.05)/.95),x=1-c*Math.pow(g,1.35);u*=x,f*=1-c*.55*Math.pow(g,1.35),f>0&&(f*=1-.1*g)}f>0&&d>-.45&&d<.2&&(u*=1+.03*n.faceW),r.setXYZ(h,u*a*(i||1),d*o*(i||1),f*l*(i||1))}return s.computeVertexNormals(),s}function Kl(n){let e=fx(n),t=oi[e.outfit]||oi.uniforme,i=e.s==="f",s=new He(e.skin),r=Qe(s,.55,0,{emissive:s.clone().multiplyScalar(.1)}),a=Qe(s.clone().multiplyScalar(.7),.6),o=Qe(e.hairHex,.5,.08),l=Qe(e.c,.85),c=Qe("#1c1410",.7),h=t.top==="wax"?Qe("#ffffff",.85,0,{map:Ii(e.c,e.c2||"#e0a526")}):null,u=h||l,d=t.bottom;d==="auto"&&(d=i?"skirt":"trousers");let f=t.matchTrouser?new He(e.c).multiplyScalar(.6):new He(t.trouser||"#262a3a"),g=Qe(f,.9),x=d==="long",m=d==="skirt",p=d==="trousers",S=new lt,v=new lt;S.add(v);let T=ci(0,.95,0);v.add(T);let C=pt(.17,p?g:x||m?u:g,1.15,.7,.85);C.position.y=.02,T.add(C);let A=ci(0,.06,0);T.add(A);let R=Wn(.165,.34,u);if(R.scale.set(i?1:1.12,1,.72),R.position.y=.27,A.add(R),i&&[-1,1].forEach(j=>{let k=pt(.072,u,1,1,.9);k.position.set(j*.065,.4,.1),A.add(k)}),t.collar){let j=pt(.09,Qe("#f2f2f2",.8),1.4,.5,1);j.position.set(0,.56,.02),A.add(j)}if(t.belt){let j=new pe(new Vn(.17,.012,8,24),Qe("#e0a526",.4,.7));j.rotation.x=Math.PI/2,j.position.set(0,.06,0),j.scale.set(1.1,.8,1),A.add(j)}if(e.cravate){let j=new pe(new Mt(.05,.3,.015),Qe("#a8301e",.7));j.position.set(0,.36,.125),A.add(j)}if(t.trim){let j=new pe(new Vn(.085,.012,8,20),Qe("#e0a526",.4,.7));j.rotation.x=Math.PI/2,j.position.set(0,.55,.03),j.scale.set(1.4,1,1.1),A.add(j)}let H=ci(0,.6,0);A.add(H);let _=Wn(.045,.06,r);_.position.y=.04,H.add(_);let b=ci(0,.1,0);b.scale.setScalar(1.12),H.add(b);let U=new pe(ku(e),r);U.position.y=.12,U.castShadow=!0,b.add(U);let V=.092+.022*e.faceW;[-1,1].forEach(j=>{let k=pt(.026,r,.5,1,.8);k.position.set(j*(V+.004),.125,-.005),b.add(k)}),e.blush>.05&&[-1,1].forEach(j=>{let k=pt(.03,Qe("#d4607a",.9,0,{transparent:!0,opacity:.18*e.blush*2}),1,.8,.3);k.position.set(j*.05,.095,.088),b.add(k)});let te=.0175*(.85+e.eyeS*.5),L=Qe("#f7f3ec",.35),O=Qe(e.eyeC,.25),Z=Qe("#050302",.2),ie=new Yt({color:16777215}),Q=[];[-1,1].forEach(j=>{let k=j*.04,M=.146,y=pt(te,L,1.25,.9,.65);y.position.set(k,M,.087),b.add(y);let D=pt(te*.62,O,1,1,.5);D.position.set(k,M,.087+te*.5),b.add(D);let ne=pt(te*.32,Z,1,1,.4);ne.position.set(k,M,.087+te*.62),b.add(ne);let K=pt(te*.16,ie,1,1,1,8);K.position.set(k+j*.0035,M+.004,.087+te*.8),b.add(K),Q.push(y,D,ne);let oe=new pe(new Tt(te*1.28,16,8,0,Math.PI*2,0,Math.PI*.46),a);if(oe.scale.set(1.2,.9,.8),oe.position.set(k,M+.001,.088),oe.rotation.x=-.15,b.add(oe),i){let re=new pe(new Mt(te*2.5,.003,.006),o);re.position.set(k,M+te*1,.097),re.rotation.z=-j*.1,b.add(re)}let F=.036,G=e.brow===1?.011:.0055,B=new pe(new Mt(F,G,.008),o);if(B.position.set(k,.176+(e.brow===2?.004:0),.092),B.rotation.z=-j*(e.brow===2?.22:.08),b.add(B),e.brow===2){let re=B.clone();re.position.x=k+j*.014,re.position.y=.172,re.rotation.z=j*.12,b.add(re)}});let J=.8+e.nose*.7,ae=new pe(new Mt(.016*J,.04,.012),r);ae.position.set(0,.128,.1),b.add(ae);let ce=pt(.0165*J,r,1,.9,1);ce.position.set(0,.103,.107),b.add(ce),[-1,1].forEach(j=>{let k=pt(.011*J,r,1,.9,.9);k.position.set(j*.015*J,.1,.1),b.add(k);let M=pt(.004,Qe("#1a0f0a",.5),1,1,1,8);M.position.set(j*.008*J,.094,.113),b.add(M)});let ue=.026+.012*e.lips,q=.0045+.0045*e.lips,ee=Qe(e.lipC,.3),de=pt(1,ee,ue,q,.009,14);de.position.set(0,.0745,.1),b.add(de);let ve=pt(1,ee,ue*.92,q*1.35,.01,14);ve.position.set(0,.0635,.099),b.add(ve);let Te=new lt;Te.position.set(0,.069,.099),b.add(Te);let se=new pe(new Mt(ue*1.7,.002,.004),Qe("#2a1210",.5));if(Te.add(se),e.beard>0&&!i){let j=ku(e,Math.PI*.54,Math.PI*.46,1.035),k=Qe(e.hairHex,.9,0,e.beard===1?{transparent:!0,opacity:.42}:{}),M=new pe(j,k);if(M.position.y=.12,b.add(M),e.beard===2){let y=pt(1,o,.026,.007,.01);y.position.set(0,.087,.104),b.add(y)}}let fe=e.hair,he=(j,k)=>{let M=(.098+.02*e.faceW)*j,y=.128*j,D=.113*j,ne=new pe(new Tt(1,28,14,0,Math.PI*2,0,Math.PI*.36),o);ne.scale.set(M,y,D),ne.position.y=.125,ne.rotation.x=k===void 0?-.12:k,ne.castShadow=!0,b.add(ne);let K=new pe(new Tt(1,28,16,Math.PI*.12,Math.PI*.76,0,Math.PI*.66),o);return K.scale.set(M*1.005,y*1.005,D*1.005),K.position.y=.125,K.rotation.y=Math.PI,K.castShadow=!0,b.add(K),ne};if(fe==="courtes"||fe==="gris")he(1.06);else if(fe==="rase")he(1);else if(fe==="tresses"){he(1.07);for(let j=0;j<11;j++){let k=-1.35+j*.27,M=Wn(.013,.22,o);M.position.set(Math.sin(k)*(V+.014),.03,-.015-Math.cos(k)*.035),M.rotation.z=Math.sin(k)*.22,b.add(M)}}else if(fe==="nattes")he(1.07),[-1,1].forEach(j=>{for(let k=0;k<4;k++){let M=pt(.026,o,1,1.35,1);M.position.set(j*(V+.012),.1-k*.05,-.01+k%2*.006),b.add(M)}});else if(fe==="afro"){let j=new pe(new Ri(.16,4),o),k=j.geometry.attributes.position;for(let M=0;M<k.count;M++){let y=1+(Math.sin(k.getX(M)*90)+Math.cos(k.getY(M)*80)*Math.sin(k.getZ(M)*70))*.035;k.setXYZ(M,k.getX(M)*y,k.getY(M)*y,k.getZ(M)*y)}j.geometry.computeVertexNormals(),j.scale.set(1,.96,.95),j.position.set(0,.225,-.05),j.castShadow=!0,b.add(j)}else if(fe==="chignon"){he(1.06);let j=pt(.055,o,1,.95,1);j.position.set(0,.255,-.045),b.add(j)}else if(fe==="noeuds"){he(1.04);for(let j=0;j<14;j++){let k=j/14*Math.PI*2,M=j<9?.075:.04,y=pt(.026,o,1,1,1,10);y.position.set(Math.sin(k)*M,.225+(j<9?0:.03),Math.cos(k)*M*.9-.02),b.add(y)}}else if(fe==="locks"){he(1.08);for(let j=0;j<20;j++){let k=-2.5+j*.26;if(Math.abs(k)<.9)continue;let M=Wn(.011,.32,o);M.position.set(Math.sin(k)*(V+.018),0,-.02-Math.cos(k)*.05),M.rotation.z=Math.sin(k)*.12,b.add(M)}for(let j=0;j<5;j++){let k=Wn(.011,.28,o);k.position.set((j-2)*.03,0,-.1),b.add(k)}}if(fe==="gris"){let j=pt(.05,o,1,.9,1);j.position.set(0,.24,-.06),b.add(j);let k=new pe(new Vn(.105,.03,10,24),Qe("#1f7a4d",.8));k.rotation.x=Math.PI/2,k.position.y=.2,k.scale.set(1,1.05,1),b.add(k)}let Ae=e.acc||[];if((Ae.indexOf("boucles")>=0||i&&n.s==="f"&&n.h&&!n.acc)&&[-1,1].forEach(j=>{let k=pt(.009,Qe("#e0a526",.3,.8),1,1,1,8);k.position.set(j*(V+.008),.075,0),b.add(k);let M=pt(.007,Qe("#e0a526",.3,.8),1,1.6,1,8);M.position.set(j*(V+.008),.055,0),b.add(M)}),Ae.indexOf("lunettes")>=0){let j=Qe("#1a1a22",.3,.5);[-1,1].forEach(M=>{let y=new pe(new Vn(.027,.0035,8,20),j);y.position.set(M*.04,.146,.1),b.add(y)});let k=new pe(new Mt(.02,.003,.003),j);k.position.set(0,.148,.103),b.add(k),[-1,1].forEach(M=>{let y=new pe(new Mt(.003,.003,.1),j);y.position.set(M*.068,.148,.05),b.add(y)})}if(Ae.indexOf("casquette")>=0){let j=Qe("#c0392b",.7),k=new pe(new Tt(.12,22,12,0,Math.PI*2,0,Math.PI*.5),j);k.position.set(0,.21,0),k.scale.set(1,.95,1.05),k.castShadow=!0,b.add(k);let M=new pe(new Sn(.1,.1,.008,18,1,!1,-Math.PI/2,Math.PI),j);M.position.set(0,.215,.1),M.scale.set(1,1,.9),M.rotation.x=0,b.add(M)}if(Ae.indexOf("foulard")>=0){let j=Qe("#e0a526",.8),k=new pe(new Vn(.108,.032,10,24),j);k.rotation.x=Math.PI/2,k.position.y=.215,k.scale.set(1,1.05,1),b.add(k);let M=pt(.04,j,1.3,.7,.7);M.position.set(0,.26,-.07),b.add(M)}if(Ae.indexOf("collier")>=0){let j=Qe("#f4efe6",.3,.2);for(let k=0;k<16;k++){let M=k/16*Math.PI*2,y=pt(.011,j,1,1,1,8);y.position.set(Math.sin(M)*.095,.585,Math.cos(M)*.075+.03),A.add(y)}}if(Ae.indexOf("sac")>=0){let j=Qe("#2e86de",.7),k=new pe(new Mt(.28,.34,.12),j);k.position.set(0,.3,-.17),k.castShadow=!0,A.add(k);let M=new pe(new Mt(.2,.14,.03),Qe("#1f5fa8",.7));M.position.set(0,.22,-.24),A.add(M),[-1,1].forEach(y=>{let D=new pe(new Mt(.03,.3,.02),Qe("#1f5fa8",.7));D.position.set(y*.09,.38,.1),A.add(D)})}let z=[];[-1,1].forEach(j=>{let k=ci(j*.235,.5,0);A.add(k);let M=x,y=Wn(.045,.2,u);y.position.y=-.14,k.add(y);let D=ci(0,-.28,0);k.add(D);let ne=Wn(.037,.2,M?u:r);ne.position.y=-.13,D.add(ne);let K=pt(.04,r,1,1.15,.8);K.position.y=-.3,D.add(K),k.rotation.z=j*.08,z.push({sh:k,el:D})});let Ne=[];[-1,1].forEach(j=>{let k=ci(j*.095,0,0);T.add(k);let M=p?g:r,y=Wn(.068,.3,M);y.position.y=-.21,k.add(y);let D=ci(0,-.42,0);k.add(D);let ne=Wn(.052,.3,M);ne.position.y=-.2,D.add(ne);let K=new pe(new Mt(.09,.06,.2),c);K.position.set(0,-.43,.04),K.castShadow=!0,D.add(K),Ne.push({hj:k,kn:D})});let Ee=null;if(m){let j=h?Ii(e.c,e.c2||"#e0a526"):null,k=j?new qe({map:j,roughness:.85,side:It}):Qe(e.c,.85,0,{side:It}),M=new pe(new Sn(.19,t.belt?.34:.3,t.belt?.7:.62,24,1,!0),k);M.position.y=t.belt?-.37:-.34,M.castShadow=!0,T.add(M)}if(x){let j=new qe({map:Yl(e.c,.16),roughness:.8,side:It}),k=new pe(new Sn(.2,.37,.98,28,1,!0),j);if(k.position.y=-.45,k.castShadow=!0,T.add(k),t.trim){let M=new pe(new Vn(.37,.012,6,28),Qe("#e0a526",.4,.7));M.rotation.x=Math.PI/2,M.position.y=-.93,T.add(M)}Ne.forEach(M=>{M.kn.visible=!1}),Ee=[-1,1].map(M=>{let y=new pe(new Mt(.09,.06,.2),c);return y.position.set(M*.09,-.94,.06),T.add(y),y})}let Me={t:Math.random()*10};function Re(j,k){Me.t+=j,k=k||{};let M=k.speed||0,y=Me.t,D=Math.min(1,M/2.2),ne=M>3.2,K=y*(ne?11:7.5),oe=!!k.sit;if(oe)v.position.y=-.46,Ne.forEach(le=>{le.hj.rotation.x=-Math.PI/2+.05,le.kn.rotation.x=Math.PI/2-.05}),Ee&&Ee.forEach(le=>{le.visible=!1});else{v.position.y=Math.abs(Math.sin(K))*.035*D*(ne?1.6:1);let le=(ne?.95:.6)*D;Ne[0].hj.rotation.x=Math.sin(K)*le,Ne[1].hj.rotation.x=-Math.sin(K)*le,Ne[0].kn.rotation.x=Math.max(0,-Math.sin(K))*le*1.3+.04,Ne[1].kn.rotation.x=Math.max(0,Math.sin(K))*le*1.3+.04,Ee&&Ee.forEach(W=>{W.visible=!0})}R.scale.y=1+Math.sin(y*1.8)*.012,A.rotation.y=Math.sin(K)*.12*D,A.rotation.x=.05*D+(ne?.12:0),T.rotation.y=-Math.sin(K)*.08*D;let F=z[0],G=z[1],B=(ne?.9:.55)*D;F.sh.rotation.x=oe?-.5:Math.sin(K)*B,G.sh.rotation.x=oe?-.5:-Math.sin(K)*B,F.el.rotation.x=-.12-(oe?.6:0)-Math.max(0,Math.sin(K))*.5*D,G.el.rotation.x=-.12-(oe?.6:0)-Math.max(0,-Math.sin(K))*.5*D,F.sh.rotation.z=-.08,G.sh.rotation.z=.08,!M&&!oe&&(F.sh.rotation.x=Math.sin(y*1.3)*.03,G.sh.rotation.x=-Math.sin(y*1.3)*.03),k.talk?(G.sh.rotation.x=-.9+Math.sin(y*5)*.25,G.sh.rotation.z=.35,G.el.rotation.x=-1+Math.sin(y*6.2)*.35,b.rotation.x=Math.sin(y*4)*.05,b.rotation.y=Math.sin(y*1.7)*.12,Te.scale.y=1+Math.abs(Math.sin(y*12))*3,ve.position.y=.0635-Math.abs(Math.sin(y*12))*.006):(b.rotation.x=0,b.rotation.y=M?0:Math.sin(y*.7)*.18,Te.scale.y=1,ve.position.y=.0635),k.wave&&(G.sh.rotation.x=0,G.sh.rotation.z=2.5+Math.sin(y*9)*.18,G.el.rotation.x=-.5+Math.sin(y*9)*.4),k.pose==="creator"&&(b.rotation.y=Math.sin(y*.5)*.15,G.sh.rotation.x=0,F.sh.rotation.x=0);let re=Math.sin(y*.9)>.985?.1:1;Q.forEach(le=>{le.scale.y=(le.userData.sy||(le.userData.sy=le.scale.y))*re})}return S.scale.setScalar(e.h||1),Object.assign(S.userData,{update:Re,state:Me,height:1.78*(e.h||1),headY:1.78}),S}ms();var px={lola:1,ilunga:1,bea:1,mama:1,kasa:1},lr={lola:1.55,ilunga:1.68,junior:1.45,mavungu:1.78,bea:1.65,mama:1.68,jer:1.62,kasa:1.25,pf1:1.72,pf2:1.68,ph1:1.82,ph2:1.78},mx=new ds,Ql={};function Hu(n){if(Ql[n])return Ql[n];let e=mx.load("img/chars/"+n+".webp");return e.colorSpace=it,e.anisotropy=4,e.generateMipmaps=!0,Ql[n]=e}var ec=null;function gx(){if(ec)return ec;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),ec=new ri(n)}function tc(n,e){e=e||{};let t=e.height||lr[n]||1.7,i=new lt,s=new pe(new ft(1,1),new Yt({map:gx(),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,s.scale.set(t*.5,t*.28,1),i.add(s);let r=new lt;i.add(r);let a=_=>new Yt({map:_,transparent:!0,alphaTest:.45,side:It,color:new He(e.tone||"#f4f1ec")}),o=a(Hu(n)),l=e.walk?a(Hu(e.walk)):null,c=14,h=36,u=new ft(1,1,c,h);u.translate(0,.5,0);let d=u.attributes.position,f=Float32Array.from(d.array),g=!!px[n],x=!!e.walk,m=new pe(u,o);r.add(m);let p=(_,b,U)=>{let V=Math.min(1,Math.max(0,(U-_)/(b-_)));return V*V*(3-2*V)};function S(_,b,U,V,te){let L=Math.sin(_),O=Math.max(0,L)*.085*b,Z=Math.max(0,-L)*.085*b,ie=L*.08*b,Q=Math.sin(V*.5)*.006*te;for(let J=0;J<d.count;J++){let ae=f[J*3],ce=f[J*3+1],ue=ae,q=ce,ee=ce;if(!g&&!x&&ee<.54&&b>0){let de=p(.52,.04,ee),ve=p(.06,-.06,ae);q+=(O*ve+Z*(1-ve))*de*de}if(g&&b>0&&ee<.62){let de=p(.6,.05,ee);ue+=Math.sin(_+ee*5)*.018*b*de,q+=Math.abs(L)*.01*b*de}if(b>0&&ee>.42&&ee<.86){let de=p(.2,.34,Math.abs(ae))*p(.42,.55,ee)*p(.86,.74,ee),ve=ae<0?1:-1;q+=(q-.8)*ie*ve*de*3}U&&ee>.84&&(q+=Math.sin(V*5)*.004*p(.84,.96,ee)),ue+=Q*p(0,1,ee),d.setXYZ(J,ue,q,0)}d.needsUpdate=!0}S(0,0,!1,0,1);let v=.33,T=()=>{m.scale.set(t*v,t,1),s.scale.set(Math.max(.5,t*v*1.1),t*.2,1)};T();let C=o.map,A=setInterval(()=>{C.image&&C.image.width&&(v=C.image.width/C.image.height,T(),clearInterval(A))},60),R={t:Math.random()*10,ph:0};function H(_,b){b=b||{},R.t+=_;let U=R.t,V=b.speed||0;b.cam&&(r.rotation.y=Math.atan2(b.cam.x-i.position.x,b.cam.z-i.position.z)-i.rotation.y);let te=0,L=0,O=1,Z=1,ie=o;if(V>.1){R.ph+=_*(V>3.2?9:6.5);let Q=Math.sin(R.ph);te=Math.abs(Q)*.012*(V>3.2?1.5:1),L=Q*.035,l&&(ie=Math.floor(R.ph/Math.PI)%2?l:o,Z=1),b.lean&&(L+=b.lean*.05)}else R.ph=0,O=1+Math.sin(U*1.8)*.004,L=Math.sin(U*.9)*.008;b.talk&&(te+=Math.abs(Math.sin(U*6))*.012,L+=Math.sin(U*4)*.012),b.wave&&(te+=Math.abs(Math.sin(U*9))*.04,L+=Math.sin(U*9)*.07),m.material=ie,m.position.y=te,m.rotation.z=L,m.scale.y=t*O,S(R.ph,Math.min(1,V/2.2),!!b.talk,U,V>.1?0:1),m.scale.x=t*v*Z}return Object.assign(i.userData,{update:H,state:R,height:t,photo:!0}),i}var _x={pf1:.256,pf2:.28,ph1:.29,ph2:.306},nc={village:{scale:[95,47,70,32],walk:[66,99],spawn:{x:30,y:92},entry:{marche:{x:70,y:86},maison:{x:24,y:88},fleuve:{x:34,y:95}}},marche:{scale:[98,56,75,38],walk:[72,99],spawn:{x:22,y:96},entry:{village:{x:14,y:96},portail:{x:62,y:80}}},portail:{scale:[98,56,78,40],walk:[76,99],spawn:{x:24,y:96},entry:{marche:{x:15,y:96},classe:{x:55,y:82}}},classe:{scale:[62,34,84,48],walk:[62,99],spawn:{x:26,y:92},entry:{portail:{x:50,y:92}}},maison:{scale:[98,64,80,48],walk:[78,99],spawn:{x:26,y:96},entry:{village:{x:76,y:96}}},fleuve:{scale:[95,50,75,34],walk:[78,99],spawn:{x:26,y:95},entry:{village:{x:16,y:95}}}},Di={village:{img:"village",name:"Mon quartier",focus:48,amb:"village",items:[{k:"npc",id:"jer",x:60,y:93,h:44},{k:"npc",id:"kasa",x:71,y:95,h:44},{k:"go",to:"maison",x:19,y:58,ico:"\u2B06",label:"Entrer dans ma maison"},{k:"go",to:"marche",x:73,y:62,ico:"\u27A1",label:"Vers le march\xE9"},{k:"go",to:"fleuve",x:30,y:90,ico:"\u2B05",label:"Vers le fleuve"},{k:"tree",x:50,y:26,label:"Cueillir des mangues"}]},marche:{img:"marche",name:"Le march\xE9",focus:50,amb:"marche",items:[{k:"npc",id:"bea",x:46,y:98,h:56},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"},{k:"go",to:"portail",x:64,y:55,ico:"\u2B06",label:"Vers l\u2019\xE9cole"}]},portail:{img:"portail",name:"Le portail de l\u2019\xE9cole",focus:48,amb:"portail",items:[{k:"npc",id:"lola",x:42,y:98,h:56},{k:"go",to:"classe",x:55,y:50,ico:"\u2B06",label:"Entrer dans l\u2019\xE9cole",need:"lola"},{k:"go",to:"marche",x:9,y:88,ico:"\u2B05",label:"Retour au march\xE9"}]},classe:{img:"classe",name:"La classe",focus:50,amb:"classe",items:[{k:"npc",id:"ilunga",x:50,y:62,h:34},{k:"npc",id:"junior",x:40,y:80,h:40},{k:"npc",id:"mavungu",x:61,y:84,h:46},{k:"go",to:"portail",x:50,y:97,ico:"\u2B07",label:"Sortir de l\u2019\xE9cole"}]},maison:{img:"maison",name:"Ma maison",focus:50,amb:"maison",items:[{k:"npc",id:"mama",x:47,y:98,h:64},{k:"objs",x:19,y:74,label:"Mes objets"},{k:"go",to:"village",x:86,y:92,ico:"\u2B07",label:"Sortir"}]},fleuve:{img:"fleuve",name:"Le fleuve Congo",focus:50,amb:"fleuve",items:[{k:"fact",x:52,y:60,label:"Le fleuve Congo"},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"}]}};function Vu(n){let{G:e,NPC:t,AUTOP:i,AUTO:s,actionFor:r,toast:a,speak:o,SFX:l,gain:c,save:h,refreshHud:u,openBox:d,esc:f,hasChar:g}=n,x=document.getElementById("pv");x.innerHTML='<div class="pblur"></div><div id="pstage"><div id="pdrift"><div class="pbg"></div><div id="pitems"></div></div></div><div class="pfade"></div><div class="pplace"></div><button class="pstop hide">Arr\xEAter</button><div class="phint hide">\u2194 Fais glisser pour regarder autour</div>';let m=x.querySelector("#pstage"),p=x.querySelector("#pdrift"),S=x.querySelector(".pbg"),v=x.querySelector("#pitems"),T=x.querySelector(".pblur"),C=x.querySelector(".phint"),A=x.querySelector(".pfade"),R=x.querySelector(".pplace"),H=x.querySelector(".pstop"),_={id:null,panX:0,W:0,H:0,dragged:!1,greeted:{},busy:!1,me:{x:30,y:92,walking:!1,cb:null}};function b(F){let G=x.clientWidth,B=x.clientHeight,re=Math.max(G,Math.min(B*16/9,G*2.15)),le=re*9/16;_.vw=G,_.vh=B,_.W=re,_.H=le,m.style.width=re+"px",m.style.height=le+"px",m.style.top=(B-le)*(le<B?.5:.75)+"px";let W=Di[_.id];F||(_.panX=G/2-re*(W?W.focus:50)/100),U(),V()}let U=()=>{_.panX=Math.min(0,Math.max(_.vw-_.W,_.panX))},V=()=>{m.style.left=_.panX+"px"};window.addEventListener("resize",()=>{_.id&&e.ui==="photo"&&b(!1)});let te=null;x.addEventListener("pointerdown",F=>{e.ui==="photo"&&(te={x:F.clientX,pan:_.panX,moved:!1},_.dragged=!1)}),x.addEventListener("pointermove",F=>{if(!te)return;let G=F.clientX-te.x;Math.abs(G)>7&&(te.moved=!0),te.moved&&(_.panX=te.pan+G,U(),V(),_.dragged=!0)});let L=()=>{te&&te.moved&&setTimeout(()=>{_.dragged=!1},80),te=null};x.addEventListener("pointerup",L),x.addEventListener("pointercancel",L);let O=()=>n.playerChar();function Z(F,G){let B=nc[F].scale,re=(G-B[2])/(B[0]-B[2]);return B[3]+(B[1]-B[3])*re}function ie(){let F=O();if(!g(F))return"";let G=_.id,B=Z(G,_.me.y)*(lr[F]||1.7)/1.7,re=`img/chars/${F}.webp`;return`<div class="pn me" style="left:${_.me.x}%;top:${_.me.y}%;height:${B}%;z-index:${Math.round(_.me.y*10)};--ar:${_x[F]||.28}"><i class="sh"></i><div class="mp"><div class="ly u" style="background-image:url(${re})"></div><div class="ly l" style="background-image:url(${re})"></div><div class="ly r" style="background-image:url(${re})"></div></div></div>`}function Q(){return v.querySelector(".me")}function J(){let F=Q();if(!F)return;let G=O(),B=Z(_.id,_.me.y)*(lr[G]||1.7)/1.7;F.style.left=_.me.x+"%",F.style.top=_.me.y+"%",F.style.height=B+"%",F.style.zIndex=Math.round(_.me.y*10)}function ae(){let F=_.panX+_.W*_.me.x/100,G=_.vw*.26,B=_.vw*.74;if(!(_.W<=_.vw+4)){if(F<G)_.panX+=(G-F)*.18;else if(F>B)_.panX-=(F-B)*.18;else return;U(),V()}}let ce=0;function ue(F,G,B){let re=nc[_.id],le=_.me;le.tx=Math.min(95,Math.max(5,F)),le.ty=Math.min(re.walk[1],Math.max(re.walk[0],G)),le.cb=B||null;let W=Q();if(!W){B&&B();return}if(le.walking)return;le.walking=!0,W.classList.add("walk");let Be=performance.now(),De=Pe=>{if(!le.walking||!Q())return;let Ce=Math.min(.05,(Pe-Be)/1e3);Be=Pe;let we=le.tx-le.x,Ve=le.ty-le.y,Ke=Math.hypot(we,Ve*.7),st=30*Ce;if(Ke<=st+.2){le.x=le.tx,le.y=le.ty,le.walking=!1,J(),Q()&&Q().classList.remove("walk");let We=le.cb;le.cb=null,We&&We();return}le.x+=we/Ke*st,le.y+=Ve/Ke*st,J(),ae(),ce=requestAnimationFrame(De)};ce=requestAnimationFrame(De)}let q=F=>{let G=_.me.x<=F.x?-1:1;return{x:F.x+G*9,y:F.y}};function ee(F,G,B){let re=Di[F];if(_.id=F,!G){let W=nc[F],Be=B&&W.entry[B]||W.spawn;_.me.x=Be.x,_.me.y=Be.y,_.me.walking=!1,_.me.cb=null}S.style.backgroundImage=`url(img/scenes/${re.img}.jpg)`,T.style.backgroundImage=`url(img/scenes/${re.img}.jpg)`,R.textContent="\u{1F4CD} "+re.name;let le="";if(re.items.forEach((W,Be)=>{if(W.k==="npc"){if(!g(W.id))return;let De=t[W.id]||i[W.id],Pe=W.h*(lr[W.id]||1.7)/1.7,Ce=de(W.id);le+=`<div class="pn ${Ce.cls}" data-i="${Be}" style="left:${W.x}%;top:${W.y}%;height:${Pe}%;z-index:${Math.round(W.y*10)}"><i class="sh"></i><img src="img/chars/${W.id}.webp" alt="" draggable="false"><span class="tag">${Ce.ico} ${f(De.short||De.name)}</span></div>`}else if(W.k==="go"){let De=W.need&&!n.doneNpc(W.need);le+=`<button class="hs go${De?" locked":""}" data-i="${Be}" style="left:${W.x}%;top:${W.y}%"><span class="ic">${De?"\u{1F512}":W.ico}</span><span class="lb">${f(De?"Mama Lola garde le passage":W.label)}</span></button>`}else le+=`<button class="hs ${W.k}" data-i="${Be}" style="left:${W.x}%;top:${W.y}%"><span class="ic">${W.k==="tree"?"\u{1F96D}":W.k==="objs"?"\u{1F9FA}":"\u2139\uFE0F"}</span><span class="lb">${f(W.label)}</span></button>`}),v.innerHTML=le+ie(),b(!1),!G){let W=re.items.find(De=>De.k==="npc"),Be=W?(_.me.x+W.x)/2:re.focus;_.panX=_.vw/2-_.W*Be/100,U(),V()}}function de(F){let G=t[F];return G?G.kind==="quiz"?n.locked(F)?{cls:"lock",ico:"\u{1F512}"}:n.doneNpc(F)?{cls:"done",ico:"\u2714"}:{cls:"todo",ico:"\u2757"}:{cls:"",ico:"\u{1F4AC}"}:{cls:"",ico:"\u{1F4AC}"}}function ve(F,G){if(_.busy)return;if(_.busy=!0,Ne(),!_.id){ee(F,!1),_.busy=!1,Te(F);return}p.style.transition="transform .28s ease-in,opacity .28s ease-in",p.style.transform=`scale(${G&&G.back?.94:1.18})`,p.style.opacity="0",A.style.opacity="1",setTimeout(()=>{ee(F,!1,G&&G.from),p.style.transition="none",p.style.transform=`scale(${G&&G.back?1.1:.94})`,p.offsetWidth,p.style.transition="transform .42s ease-out,opacity .42s ease-out",p.style.transform="scale(1)",p.style.opacity="1",A.style.opacity="0",setTimeout(()=>{p.style.transition="",_.busy=!1,Te(F)},430)},290)}function Te(F){K(Di[F].amb);let B=Di[F].items.find(re=>re.k==="npc"&&t[re.id]&&!_.greeted[re.id]&&g(re.id));B&&(_.greeted[B.id]=!0,setTimeout(()=>{_.id===F&&e.mode==="pview"&&Ae(B.id,"Bonjour "+f(e.nom)+" !",3200)},700)),n.refreshHud(),_.vw<_.W-40&&!_.hinted&&(_.hinted=!0,C.classList.remove("hide"),setTimeout(()=>C.classList.add("hide"),5200))}let se=document.getElementById("bubble"),fe=null,he=null;function Ae(F,G,B){let re=v.querySelector(`.pn[data-i="${Di[_.id].items.findIndex(le=>le.id===F)}"]`);re&&(he=re,se.innerHTML=G,se.style.display="block",z(),clearTimeout(fe),fe=setTimeout(Ne,B||3500))}function z(){if(!he)return;let F=he.getBoundingClientRect(),G=x.clientWidth;se.style.left=Math.min(G-70,Math.max(70,F.left+F.width/2))+"px",se.style.top=Math.max(70,F.top+8)+"px"}function Ne(){se.style.display="none",he=null}setInterval(()=>{he&&z()},250),v.addEventListener("click",F=>{if(_.dragged||e.mode!=="pview")return;let G=F.target.closest("[data-i]");if(!G){let re=m.getBoundingClientRect(),le=(F.clientX-re.left)/re.width*100,W=(F.clientY-re.top)/re.height*100;Ne(),ue(le,W);return}let B=Di[_.id].items[+G.dataset.i];if(B.k==="npc"){if(!t[B.id]){let W=q(B);ue(W.x,W.y);return}let re=r({t:"npc",id:B.id});if(!re.enabled){a(t[B.id].short+" est occup\xE9(e). Reviens plus tard.");return}let le=q(B);Ne(),ue(le.x,le.y,()=>{e.mode==="pview"&&re.run()})}else if(B.k==="go"){if(B.need&&!n.doneNpc(B.need)){a("Mama Lola garde le passage : r\xE9ponds d\u2019abord \xE0 ses questions."),l.ko();return}let re=_.id;ue(B.x,B.y,()=>ve(B.to,{back:B.ico==="\u2B07"||B.ico==="\u2B05",from:re}))}else B.k==="tree"?ue(50,91,()=>Re()):B.k==="objs"?ue(B.x+8,B.y+14,()=>n.openObjs()):B.k==="fact"&&ue(B.x,B.y+20,()=>Ee())}),setInterval(()=>{if(e.ui!=="photo"||e.mode!=="pview"||_.id!=="village"||he)return;_.chat=(_.chat||0)+1;let F=s[_.chat%s.length],G=F[0]==="J\xE9r\xE9mie"?"jer":"kasa";Ae(G,"<b>"+f(F[0])+"</b> : "+f(F[1]),4200)},6500);function Ee(){let F=!e.adv.facts||!e.adv.facts.fleuve;d({kind:"info",title:"Le fleuve Congo",i:0,lines:["Le fleuve Congo est le deuxi\xE8me plus long fleuve d\u2019Afrique, apr\xE8s le Nil. C\u2019est aussi l\u2019un des fleuves les plus profonds du monde.","\xC0 Kinshasa, il s\xE9pare la RDC de la R\xE9publique du Congo : de l\u2019autre c\xF4t\xE9 du fleuve, on voit Brazzaville."]}),F&&(e.adv.facts=Object.assign(e.adv.facts||{},{fleuve:!0}),c(0,5),a("+5 points d\u2019exp\xE9rience"))}let Me=null;function Re(){if(e.mode!=="pview")return;e.mode="mini",Ne();let F=document.createElement("div");F.className="pmg",v.appendChild(F),Me={t:20,caught:0,layer:F,spawn:0,list:[],last:performance.now()},H.classList.remove("hide"),a("Touche les mangues pour les attraper !"),requestAnimationFrame(j)}function j(F){if(!Me)return;let G=Math.min(.05,(F-Me.last)/1e3);if(Me.last=F,Me.t-=G,Me.spawn-=G,Me.spawn<=0){Me.spawn=.45+Math.random()*.4;let B=document.createElement("button");B.className="mgo";let re={el:B,x:36+Math.random()*30,y:16+Math.random()*10,v:0,gy:76+Math.random()*14,done:!1};B.style.left=re.x+"%",B.style.top=re.y+"%",B.addEventListener("pointerdown",le=>{le.stopPropagation(),!re.done&&(re.done=!0,Me.caught++,l.coin(),B.classList.add("pop"),setTimeout(()=>B.remove(),260))}),Me.layer.appendChild(B),Me.list.push(re)}if(Me.list=Me.list.filter(B=>B.done?!1:(B.v+=70*G,B.y+=B.v*G*.18,B.el.style.top=B.y+"%",B.y>=B.gy?(B.el.classList.add("splat"),setTimeout(()=>B.el.remove(),350),!1):!0)),document.getElementById("info").textContent="Mangues attrap\xE9es : "+Me.caught+" \xB7 temps : "+Math.max(0,Math.ceil(Me.t))+" s",Me.t<=0)return k();requestAnimationFrame(j)}function k(){if(!Me)return;let F=Me.caught;Me.layer.remove(),Me=null,H.classList.add("hide"),e.mode="pview",e.adv.mangues+=F,h(),a(F?"+"+F+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),F&&l.win(),c(0,F),u()}H.addEventListener("click",k);let M=null,y=null,D=null;function ne(){let F=M.createBuffer(1,M.sampleRate*2,M.sampleRate),G=F.getChannelData(0),B=0;for(let le=0;le<G.length;le++){let W=Math.random()*2-1;B=(B+.02*W)/1.02,G[le]=B*3.5}let re=M.createBufferSource();return re.buffer=F,re.loop=!0,re}function K(F){try{if(!e.sound){oe();return}M=M||new(window.AudioContext||window.webkitAudioContext),M.state==="suspended"&&M.resume(),oe();let G=M.createGain(),B=M.createBiquadFilter(),re=ne(),le={village:["lowpass",500,.9,.05],marche:["bandpass",850,.6,.11],portail:["lowpass",420,.8,.045],classe:["lowpass",300,.7,.025],maison:["lowpass",250,.6,.02],fleuve:["lowpass",650,.7,.07]}[F]||["lowpass",400,.7,.03];if(B.type=le[0],B.frequency.value=le[1],B.Q.value=le[2],G.gain.value=0,G.gain.linearRampToValueAtTime(le[3],M.currentTime+1.2),re.connect(B),B.connect(G),G.connect(M.destination),re.start(),y={n:re,g:G},F==="village"||F==="portail"||F==="fleuve"){let W=()=>{if(!y||!e.sound)return;let Be=M.createOscillator(),De=M.createGain(),Pe=M.currentTime,Ce=2200+Math.random()*1600;Be.frequency.setValueAtTime(Ce,Pe),Be.frequency.exponentialRampToValueAtTime(Ce*1.5,Pe+.09),Be.frequency.exponentialRampToValueAtTime(Ce*.9,Pe+.18),De.gain.setValueAtTime(1e-4,Pe),De.gain.exponentialRampToValueAtTime(.018,Pe+.03),De.gain.exponentialRampToValueAtTime(1e-4,Pe+.2),Be.connect(De),De.connect(M.destination),Be.start(Pe),Be.stop(Pe+.22),D=setTimeout(W,1800+Math.random()*4200)};D=setTimeout(W,1200)}}catch{}}function oe(){if(clearTimeout(D),y){try{y.g.gain.linearRampToValueAtTime(0,M.currentTime+.3);let F=y.n;setTimeout(()=>{try{F.stop()}catch{}},400)}catch{}y=null}}n.photo={show:F=>{x.classList.remove("hide"),_.id=null,_.busy=!1,ve(F)},hide:()=>{x.classList.add("hide"),oe(),Ne()},refresh:()=>{if(!_.id)return;let F=_.panX;ee(_.id,!0),_.panX=F,b(!0)},scene:()=>_.id,ambientOff:oe,ambientOn:()=>{_.id&&K(Di[_.id].amb)}}}or();ms();or();var Ie=(n,e,t)=>new qe(Object.assign({color:n,roughness:e===void 0?.85:e},t||{}));function Le(n,e,t,i,s,r,a,o,l){let c=new pe(new Mt(e,t,i),s);return c.position.set(r,a,o),l&&(c.rotation.y=l),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ui(n,e,t,i,s,r,a,o,l){let c=new pe(new Sn(e,t,i,l||12),s);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ga(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function Gu(n,e,t,i,s,r,a,o,l,c){let h=c||.5,u=r/2+h,d=s+h*2,f=Math.atan2(a,r/2),g=Math.hypot(a,r/2)+h*.6;[-1,1].forEach(p=>{let S=Le(n,d,.12,g,o,e,t+a/2,i+p*(r/4),0);S.rotation.x=-p*f});let x=new $s;x.moveTo(-r/2,0),x.lineTo(r/2,0),x.lineTo(0,a),x.closePath();let m=new pe(new wa(x),l);[-1,1].forEach(p=>{let S=m.clone();S.position.set(e+p*s/2,t,i),S.rotation.y=p*Math.PI/2,n.add(S)})}function xx(n){let e=[],t=Ga(4),i=new qe({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.35,transparent:!0,opacity:.92,fog:!1});for(let s=0;s<14;s++){let r=new lt;for(let a=0;a<5;a++){let o=new pe(new Tt(5+t()*5,10,8),i);o.position.set((a-2)*7+t()*3,t()*3,t()*5),o.scale.y=.55,r.add(o)}r.position.set(-150+t()*320,55+t()*25,-120+t()*240),n.add(r),e.push(r)}return e}function Wu(n,e,t,i,s,r,a){let o=new lt;o.position.set(e,0,t),o.scale.setScalar(i);let l=Ie("#5e4026",.95),c=new pe(new Sn(.22,.38,3.4,10),l);c.position.y=1.7,c.castShadow=!0,o.add(c),[[0,.5],[.5,-.4],[-.6,.2]].forEach(d=>{let f=new pe(new Sn(.08,.16,1.8,6),l);f.position.set(d[0]*.8,3.3,d[1]*.5),f.rotation.z=d[0]*.9,f.rotation.x=d[1]*.6,f.userData.canopy=!0,o.add(f)});let h=Ga(Math.floor(Math.abs(e*13+t*7))+3),u=r||["#2f7d44","#3b9150","#27693b"];for(let d=0;d<8;d++){let f=new pe(new Ri(1.7+h()*1.1,3),Ie(u[d%3],.95));f.position.set((h()-.5)*3.6,4.1+h()*1.8,(h()-.5)*3.6),f.castShadow=!0,f.scale.y=.8,f.userData.canopy=!0,o.add(f)}if(s){let d=Ie("#f0a51c",.5);for(let f=0;f<16;f++){let g=new pe(new Tt(.17,10,8),d);g.scale.y=1.25,g.position.set((h()-.5)*5,3.2+h()*2,(h()-.5)*5),g.userData.canopy=!0,o.add(g)}}return n.add(o),a&&a.push({x:e,z:t,r:.6*i}),o}function qu(n){let e=new lt,t=[],i=[],s={},r=Wl(),a=new pe(new ft(260,160),new qe({map:r,roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(12,0,0),a.receiveShadow=!0,e.add(a);let o=Xl(),l=new qe({map:o,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=(se,fe,he,Ae,z)=>{let Ne=new pe(new ft(he,Ae),l);Ne.rotation.x=-Math.PI/2,Ne.rotation.z=z||0,Ne.position.set(se,.02,fe),Ne.receiveShadow=!0,e.add(Ne)};c(-4,1,64,3.2,0),c(3,-2,11,9,0),c(-20,-4,5,6,0),c(34,0,14,3.2,0),c(41,-3.5,4,6.5,0);let h=-22,u=-9;Le(e,8,2.7,5.4,new qe({map:ka(),roughness:1}),h,1.35,u),Gu(e,h,2.7,u,8,5.4,1.8,new qe({map:Ha(),roughness:1}),Ie("#b99a55"),.7),Le(e,1.3,2.1,.12,Ie("#4a2f1b",.8),h,1.05,u+2.72),Le(e,1.5,.1,.3,Ie("#6e5a45"),h,.05,u+2.9),[-2.7,2.7].forEach(se=>{Le(e,1.2,1,.1,Ie("#e8f3fa",.2,{emissive:5088985,emissiveIntensity:.35}),h+se,1.6,u+2.72),Le(e,1.35,.12,.14,Ie("#4a2f1b"),h+se,1.08,u+2.74),Le(e,1.35,.12,.14,Ie("#4a2f1b"),h+se,2.12,u+2.74)}),i.push({x0:h-4,x1:h+4,z0:u-2.7,z1:u+2.7}),Le(e,2.2,.12,.8,Ie("#7a4a26"),-26,.5,-4.2),Le(e,.12,.5,.7,Ie("#6b4226"),-26.9,.25,-4.2),Le(e,.12,.5,.7,Ie("#6b4226"),-25.1,.25,-4.2),t.push({x:-26,z:-4.2,r:1.1});let d=Wu(e,-9,4,1.55,!0,["#2f7d44","#3f9a53","#276b3a"],t);s.mangoTree={x:-9,z:4,obj:d};let f=3,g=-6.4;[[-2.2,-1.1],[2.2,-1.1],[-2.2,1.1],[2.2,1.1]].forEach(se=>Ui(e,.06,.06,2.5,Ie("#6b4226"),f+se[0],1.25,g+se[1],8));let x=Le(e,5.2,.1,3.4,new qe({map:$l(),roughness:.9}),f,2.62,g-.1);x.rotation.x=.12,Le(e,4.6,.9,.9,new qe({map:Gn("#a87445"),roughness:.9}),f,.45,g+.9),[["#e68a00",-1.6],["#c0392b",-.8],["#6bbf3a",0],["#e0a526",.8],["#e68a00",1.6]].forEach((se,fe)=>{for(let he=0;he<5;he++){let Ae=new pe(new Tt(.13,10,8),Ie(se[0],.5));Ae.position.set(f+se[1]+he%2*.14,1.02+(he>2?.2:0),g+.9+(he%3-1)*.18),Ae.castShadow=!0,e.add(Ae)}}),Le(e,.9,.5,.7,Ie("#8a5a32"),f-1.8,.25,g-.7),Le(e,.9,.5,.7,Ie("#8a5a32"),f+1.9,.25,g-.5),i.push({x0:f-2.4,x1:f+2.4,z0:g+.35,z1:g+1.5}),Le(e,.12,.9,.12,Ie("#555"),f,2.8,g+1.6);let p=new pe(new ft(2.2,.55),new qe({map:_s([{t:"MARCH\xC9",s:90,c:"#c0392b"}],256,64,"#fff8ef","#c0392b","#c0392b")}));p.position.set(f,2.2,g+1.72),e.add(p);let S=14,v=-7;[-1.7,1.7].forEach(se=>Ui(e,.07,.07,4,Ie("#6b6b6b",.5,{metalness:.4}),S+se,2,v,8));let T=new pe(new ft(4.2,1.9),new qe({map:_s([{t:"LEXARIS ACAD\xC9MIE",s:46,y:.42},{t:"Formation en IA \xB7 juristes et jeunes",s:22,y:.72,b:!1,c:"#f1c40f"}],512,230,"#1f7a4d","#ffffff"),roughness:.6}));T.position.set(S,3.1,v+.05),T.castShadow=!0,e.add(T),t.push({x:S-1.7,z:v,r:.3},{x:S+1.7,z:v,r:.3}),Le(e,2,.1,.5,Ie("#7a4a26"),9,.5,-5.2),Le(e,.1,.5,.45,Ie("#4a2f1b"),8.1,.25,-5.2),Le(e,.1,.5,.45,Ie("#4a2f1b"),9.9,.25,-5.2),t.push({x:9,z:-5.2,r:1});let C=Ie("#8a5a32",.9),A=27,R=(se,fe)=>Ui(e,.09,.09,1.7,C,se,.85,fe,6);[[-15,-2.4],[2.4,15]].forEach(se=>{for(let he=se[0];he<=se[1];he+=1.6)R(A,he);let fe=se[1]-se[0];Le(e,.07,.08,fe,C,A,1.35,(se[0]+se[1])/2),Le(e,.07,.08,fe,C,A,.7,(se[0]+se[1])/2),i.push({x0:A-.3,x1:A+.3,z0:se[0],z1:se[1]})}),[-2.2,2.2].forEach(se=>{let fe=Le(e,.5,2.2,.5,new qe({map:za([196,106,60]),roughness:.9}),A,1.1,se);t.push({x:A,z:se,r:.4})});let H=[];[-1,1].forEach(se=>{let fe=new lt;fe.position.set(A,0,se*2);let he=new lt;he.position.set(0,0,-se*1),Le(he,.08,1.5,2,Ie("#5a3a22"),0,.95,0);for(let Ae=-4;Ae<=4;Ae+=2)Le(he,.1,1.5,.08,Ie("#7a4a26"),0,.95,Ae*.22);fe.add(he),e.add(fe),H.push({piv:fe,s:se})}),s.leaves=H,s.gateBox={x0:A-.4,x1:A+.4,z0:-2.4,z1:2.4};let _=42,b=-11,U=new qe({map:za([198,108,62]),roughness:.9});Le(e,26,3.8,9,U,_,1.9,b),Gu(e,_,3.8,b,26,9,2.2,new qe({map:Va(),roughness:.55,metalness:.35}),Ie("#e9dfca"),.9),Le(e,26,.3,.4,Ie("#efe6d2"),_,.15,b+4.6);for(let se=0;se<10;se++)Ui(e,.14,.14,3.2,Ie("#f3ecd9"),_-11.5+se*2.55,1.6,b+5.4,10);Le(e,26.5,.25,1.4,Ie("#cfc6b2"),_,3.25,b+5.2),Le(e,26.5,.12,1.6,new qe({map:Va(),roughness:.55,metalness:.35}),_,3.45,b+5.2),Le(e,26.5,.2,1.6,Ie("#d9d0bc"),_,.1,b+5.2),[-9,-5.4,5.4,9].forEach(se=>{Le(e,1.7,1.3,.1,Ie("#cfe9f7",.15,{emissive:6006742,emissiveIntensity:.3}),_+se,2.05,b+4.55),Le(e,1.9,.12,.15,Ie("#f2f2f2"),_+se,1.37,b+4.58)});let V=new lt;V.position.set(_,0,b+4.55),e.add(V),Le(V,3.2,2.9,.2,Ie("#2b1d12"),0,1.45,-.05);let te=[];[-1,1].forEach(se=>{let fe=new lt;fe.position.set(se*1.5,0,.05);let he=Le(fe,1.5,2.7,.1,Ie("#6b3f20"),-se*.75,1.35,0);Le(fe,1.2,.08,.12,Ie("#4a2f1b"),-se*.75,2.1,.02),V.add(fe),te.push({piv:fe,s:se})}),s.doorLeaves=te;let L=new pe(new ft(8,1.1),new qe({map:_s([{t:"LEXARIS ACAD\xC9MIE",s:78}],1024,140,"#1f7a4d","#ffffff"),roughness:.6}));L.position.set(_,3.15,b+4.58),e.add(L),i.push({x0:_-13,x1:_+13,z0:b-4.5,z1:b+4.6});let O=33,Z=-3;Ui(e,.05,.07,7,Ie("#999",.4,{metalness:.5}),O,3.5,Z,8);let ie=new pe(new ft(1.6,1.05,10,1),new qe({map:Yu(),side:It,roughness:.8}));ie.position.set(O+.85,6.2,Z),ie.castShadow=!0,e.add(ie),s.flag=ie,t.push({x:O,z:Z,r:.3}),[[-30,-3],[-28,9],[-18,8],[-14,-12],[-6,-10],[-4,10],[6,10],[12,9],[18,-11],[22,-9],[-32,-12],[20,11],[24,5],[34,9],[48,6],[52,-2],[31,-13],[55,10],[-24,13],[0,-13]].forEach((se,fe)=>Wu(e,se[0],se[1],.9+fe%4*.18,!1,null,t));let J=Ie("#3b8a4a",.95),ae=Ga(31);for(let se=0;se<26;se++){let fe=-33+ae()*90,he=-14+ae()*28;if(Math.abs(he)<2.3&&fe<27)continue;let Ae=new pe(new Ri(.5+ae()*.5,2),J);Ae.position.set(fe,.35,he),Ae.scale.y=.7,Ae.castShadow=!0,e.add(Ae)}let ce=Ga(31),ue=new ht,q=new He,ee=new va(new Tt(.08,6,5),Ie("#ffffff",.6),160);for(let se=0;se<160;se++){let fe=-33+ce()*60,he=-14+ce()*28;Math.abs(he)<2.2||(ue.compose(new P(fe,.28,he),new bn,new P(1,1,1)),ee.setMatrixAt(se,ue),q.set(["#ffd23f","#ff6b9a","#ffffff","#ff8a3d"][se%4]),ee.setColorAt(se,q))}e.add(ee);let de=xx(e),ve={x0:-33.5,x1:58,z0:-14.5,z1:14.5};function Te(se,fe,he){de.forEach((Ne,Ee)=>{Ne.position.x+=se*(.6+Ee%3*.2),Ne.position.x>190&&(Ne.position.x=-190)});let Ae=s.flag.geometry.attributes.position;for(let Ne=0;Ne<Ae.count;Ne++){let Ee=Ae.getX(Ne)+.8;Ae.setZ(Ne,Math.sin(fe*4+Ee*3)*.07*Ee)}Ae.needsUpdate=!0;let z=he.open?1:0;s.leaves.forEach(Ne=>{let Ee=z*Ne.s*1.45;Ne.piv.rotation.y+=(-Ee-Ne.piv.rotation.y)*Math.min(1,se*4)}),s.doorLeaves.forEach(Ne=>{let Ee=z*Ne.s*1.6;Ne.piv.rotation.y+=(Ee-Ne.piv.rotation.y)*Math.min(1,se*4)})}return{group:e,colliders:t,boxes:i,dyn:s,bounds:ve,update:Te,mangoTree:s.mangoTree}}function Yu(){let n=document.createElement("canvas");n.width=256,n.height=170;let e=n.getContext("2d");e.fillStyle="#007fff",e.fillRect(0,0,256,170),e.strokeStyle="#f7d618",e.lineWidth=40,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.strokeStyle="#ce1021",e.lineWidth=24,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.fillStyle="#f7d618",e.beginPath();for(let i=0;i<10;i++){let s=-Math.PI/2+i*Math.PI/5,r=i%2?9:22;e.lineTo(40+Math.cos(s)*r,40+Math.sin(s)*r)}e.fill();let t=new ri(n);return t.colorSpace=it,t}function $u(n,e,t,i,s,r,a){let o=new pe(new ft(e,t),r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let l=new pe(new ft(e,i),s);l.position.set(0,i/2,-t/2),l.receiveShadow=!0,n.add(l);let c=new pe(new ft(t,i),s);c.rotation.y=Math.PI/2,c.position.set(-e/2,i/2,0),c.receiveShadow=!0,n.add(c);let h=new pe(new ft(t,i),s);h.rotation.y=-Math.PI/2,h.position.set(e/2,i/2,0),h.receiveShadow=!0,n.add(h),Le(n,e,.12,.1,Ie("#e7dcc5"),0,.06,-t/2+.05),Le(n,2.2,.04,1.1,Ie("#7a4a26",1),0,.02,t/2-.7);let u=new pe(new Ta(.55,.75,32),new Yt({color:16765503,transparent:!0,opacity:.55}));u.rotation.x=-Math.PI/2,u.position.set(0,.05,t/2-.7),n.add(u)}function Xu(n,e,t,i){let s=i||.7,r=new qe({map:Gn("#b07a45"),roughness:.8});Le(n,1.1,.06,.55,r,e,s,t-.7),[[-.5,-.2],[.5,-.2],[-.5,.2],[.5,.2]].forEach(a=>Le(n,.05,s,.05,Ie("#4a2f1b"),e+a[0],s/2,t-.7+a[1])),Le(n,.42,.05,.4,r,e,.4,t),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(a=>Le(n,.04,.4,.04,Ie("#4a2f1b"),e+a[0],.2,t+a[1])),Le(n,.42,.4,.05,r,e,.62,t+.2)}function Zu(){let n=new lt,e=[],t=[],i=17,s=10;$u(n,i,s,3.8,new qe({map:ql("#f1e7cf"),roughness:1}),new qe({map:Gn("#a8744a"),roughness:.85})),n.children.forEach(c=>{c.geometry&&c.geometry.type==="PlaneGeometry"&&c.rotation.x===-Math.PI/2&&c.material.map.repeat.set(5,3)});let a=new pe(new ft(7.5,2.3),new qe({map:_s([{t:"LEXARIS ACAD\xC9MIE",s:60,y:.38,c:"#ffffff"},{t:"Kelas Game \xB7 Apprendre en jouant",s:28,y:.7,b:!1,c:"#f1c40f"}],768,230,"#2e3b33","#fff","#8d5a3b"),roughness:.9}));a.position.set(0,2.2,-s/2+.04),n.add(a),Le(n,7.8,.12,.14,Ie("#8d5a3b"),0,.98,-s/2+.06);let o=new pe(new ft(1.5,1),new qe({map:Yu(),roughness:.9}));o.position.set(5.8,2.4,-s/2+.04),n.add(o),[-2.6,2.2].forEach(c=>{let h=new pe(new ft(2,1.5),new Yt({color:13626111}));h.rotation.y=-Math.PI/2,h.position.set(i/2-.03,2.1,c),n.add(h),Le(n,.08,1.6,.08,Ie("#fff"),i/2-.05,2.1,c)}),[["kinshasa",-2.8],["fleuve",0],["marche",2.8]].forEach(c=>{let h=Jl(c[0]);if(!h)return;Le(n,.08,1.5,2.5,Ie("#5a3a22",.7),-i/2+.06,2.3,c[1]);let u=new pe(new ft(2.3,1.3),new qe({map:h,roughness:.6}));u.rotation.y=Math.PI/2,u.position.set(-i/2+.11,2.3,c[1]),n.add(u)}),[[-5.5,1.2],[-2.8,1.2],[5.7,1],[-5.5,3.4],[-2.8,3.4],[0,3.4],[2.6,3.4],[5.7,3.4],[0,1.2]].forEach(c=>Xu(n,c[0],c[1])),Xu(n,2.6,.55,.62),Le(n,2,.08,.9,new qe({map:Gn("#8a5a32")}),-6.2,.95,-3.6),[[-1,-.35],[1,-.35],[-1,.35],[1,.35]].forEach(c=>Le(n,.07,.95,.07,Ie("#4a2f1b"),-6.2+c[0]*.9,.47,-3.6+c[1])),e.push({x:-6.2,z:-3.6,r:1.2}),t.push({x0:-3.5,x1:-2.1,z0:.2,z1:1.4}),[[-5.5,.5],[-2.8,.5],[5.7,.3],[-5.5,2.7],[-2.8,2.7],[0,2.7],[2.6,2.7],[5.7,2.7],[0,.5],[2.6,-.15]].forEach(c=>t.push({x0:c[0]-.6,x1:c[0]+.6,z0:c[1]-.3,z1:c[1]+.3}));let l={x0:-i/2+.5,x1:i/2-.5,z0:-s/2+.6,z1:s/2-.2};return{group:n,colliders:e,boxes:t,bounds:l,update(){},exit:{x:0,z:s/2-.9}}}function Ju(n){let e=new lt,t=[],i=[],s=9.5,r=6.8;$u(e,s,r,3.2,new qe({map:ka(),roughness:1}),new qe({map:Gn("#8d6238"),roughness:.9}));let o=-3.2,l=-2.2;Le(e,2.2,.35,1.3,new qe({map:Gn("#7a4a26")}),o,.3,l),Le(e,2.1,.2,1.2,Ie("#f5efe3",.95),o,.55,l),Le(e,.6,.12,.9,Ie("#ffffff",.9),o-.7,.7,l),Le(e,1.4,.08,1.25,new qe({map:Ii("#c0392b","#f1c40f"),roughness:.9}),o+.3,.66,l),i.push({x0:o-1.2,x1:o+1.2,z0:l-.75,z1:l+.75}),Le(e,1,1.8,.08,Ie("#5a3a22",.7),-1.6,.95,-r/2+.12);let c=new pe(new ft(.82,1.62),new qe({color:13625074,roughness:.05,metalness:.85,emissive:7315384,emissiveIntensity:.25}));c.position.set(-1.6,.95,-r/2+.17),e.add(c);let h=new pe(new ft(1.5,1.3),new Yt({color:13626111}));if(h.position.set(2.4,1.9,-r/2+.03),e.add(h),Le(e,1.7,.1,.1,Ie("#5a3a22"),2.4,2.6,-r/2+.06),n.rideau&&[-.75,.75].forEach(d=>Le(e,.55,1.7,.06,new qe({map:Ii("#c0392b","#f1c40f"),roughness:.9}),2.4+d*1.1,1.8,-r/2+.12)),n.tableau){let d=Le(e,1.4,1.05,.07,Ie("#5a3a22"),-.4,2.1,-r/2+.06),f=new pe(new ft(1.25,.9),new qe({map:Zl()}));f.position.set(-.4,2.1,-r/2+.11),e.add(f)}if(n.natte){let d=Le(e,2.6,.03,1.7,new qe({map:Ha(),roughness:1}),.2,.02,.9);Le(e,2.7,.02,1.8,Ie("#7a4a26"),.2,.012,.9)}if(n.table){let d=new qe({map:Gn("#a87445"),roughness:.8});if(Le(e,1.5,.08,.9,d,3.1,.85,-2.5),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(f=>Le(e,.08,.85,.08,Ie("#4a2f1b"),3.1+f[0],.42,-2.5+f[1])),i.push({x0:2.3,x1:3.9,z0:-2.95,z1:-2.05}),n.lampe){Ui(e,.05,.07,.25,Ie("#6b4226"),3.1,1.02,-2.5,8);let f=new pe(new Tt(.17,14,10),Ie("#ffe9a8",.4,{emissive:16762714,emissiveIntensity:1.2}));f.position.set(3.1,1.28,-2.5),e.add(f);let g=new Ca(16760932,9,7,1.6);g.position.set(3.1,1.35,-2.4),e.add(g)}}if(n.plante){Ui(e,.2,.15,.38,Ie("#a8301e"),4,.19,-2.7,12);for(let d=0;d<9;d++){let f=new pe(new Tt(.14,8,6),Ie(d%2?"#2e8b57":"#3a9a63",.8));f.scale.set(.6,1.6,.6);let g=d/9*6.28;f.position.set(4+Math.cos(g)*.15,.7+d%3*.15,-2.7+Math.sin(g)*.15),f.rotation.z=Math.cos(g)*.5,f.rotation.x=Math.sin(g)*.5,f.castShadow=!0,e.add(f)}t.push({x:4,z:-2.7,r:.3})}let u={x0:-s/2+.5,x1:s/2-.5,z0:-r/2+.6,z1:r/2-.2};return{group:e,colliders:t,boxes:i,bounds:u,update(){},exit:{x:0,z:r/2-.9}}}var uc="kelas_game_v12",Se=n=>document.getElementById(n),hi=(n,e,t)=>Math.max(n,Math.min(e,t)),xt=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),od=n=>n.map(e=>[Math.random(),e]).sort((e,t)=>e[0]-t[0]).map(e=>e[1]),Ni=(n,e,t,i)=>Math.hypot(n-t,e-i),ja=()=>({done:{},stars:{},good:0,total:0,pieces:0,tissu:0,mangues:0,xp:0,items:{},bought:{},fin:!1}),E={ui:"photo",nom:"",photo:null,real:"pf1",voice:!0,sexe:"f",look:Object.assign({},ar,{acc:[]}),sound:!0,sc:"ville",x:-13,z:.5,ry:0,phi:0,pitch:.3,mode:"start",dialog:null,joy:{x:0,y:0},key:{x:0,y:0},speed:0,near:null,greeted:{},adv:ja(),mini:null,cine:null};function vx(){try{return JSON.parse(localStorage.getItem(uc)||"null")}catch{return null}}function Nt(){try{localStorage.setItem(uc,JSON.stringify({ui:E.ui,nom:E.nom,photo:E.photo,real:E.real,voice:E.voice,look:E.look,sound:E.sound,adv:E.adv}))}catch{}}var Es=n=>!!E.adv.done[n],ld=n=>{let e=bt[n];return!!(e.needs&&!Es(e.needs))},Ka=()=>Es("lola"),ui=()=>1+Math.floor(E.adv.xp/50),yx=()=>Object.values(E.adv.stars).reduce((n,e)=>n+e,0),dc=()=>Object.keys(un).filter(n=>E.adv.items[n]).length,Mx=()=>["lola","ilunga","junior","mavungu"].every(Es),ju=n=>"Parler "+(/^le /.test(n.short)?n.short.replace(/^le /,"au "):"\xE0 "+n.short),xs=null;function vs(n,e,t,i,s){if(E.sound)try{xs=xs||new(window.AudioContext||window.webkitAudioContext);let r=xs.createOscillator(),a=xs.createGain(),o=xs.currentTime+(s||0);r.type=t||"sine",r.frequency.value=n,a.gain.setValueAtTime(i||.08,o),a.gain.exponentialRampToValueAtTime(.001,o+e),r.connect(a),a.connect(xs.destination),r.start(o),r.stop(o+e)}catch{}}var Ht={ok:()=>{vs(660,.1),vs(880,.15,"sine",.08,.1)},ko:()=>vs(180,.25,"square",.04),coin:()=>vs(1200,.08,"triangle"),win:()=>{[523,659,784,1047].forEach((n,e)=>vs(n,.18,"sine",.08,e*.12))},step:()=>vs(90,.05,"sine",.02)},_r=typeof window!="undefined"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance!="undefined",cd=[];function Ku(){_r&&(cd=speechSynthesis.getVoices()||[])}_r&&(Ku(),speechSynthesis.onvoiceschanged=Ku);var Qu={lola:{g:"f",pitch:.85,rate:.88},ilunga:{g:"f",pitch:1,rate:.95},junior:{g:"h",pitch:1.7,rate:1.05},mavungu:{g:"h",pitch:.75,rate:.9},bea:{g:"f",pitch:1.1,rate:1},mama:{g:"f",pitch:.95,rate:.95},_:{g:"f",pitch:1,rate:.95}};function bx(n){let e=cd.filter(r=>/^fr/i.test(r.lang));if(!e.length)return null;let t=/(julie|hortense|denise|eloise|élodie|amelie|amélie|audrey|marie|brigitte|female|femme|google fran)/i,i=/(paul|henri|claude|thomas|mathieu|male|homme|antoine|lucas)/i;return e.filter(r=>(n==="f"?t:i).test(r.name))[0]||e.find(r=>/google|microsoft/i.test(r.name))||e[0]}var qa=null;function Sx(n){return String(n).replace(/×/g," fois ").replace(/÷/g," divis\xE9 par ").replace(/−/g," moins ").replace(/\+/g," plus ").replace(/=/g," \xE9gale ").replace(/[·★☆🪙🥭⭐✔🔒👗🔊]/g," ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()}function fc(n,e){if(qa={text:n,id:e},!(!_r||!E.voice))try{speechSynthesis.cancel();let t=Qu[e]||Qu._,i=new SpeechSynthesisUtterance(Sx(n));i.lang="fr-FR",i.pitch=t.pitch,i.rate=t.rate;let s=bx(t.g);s&&(i.voice=s),speechSynthesis.speak(i)}catch{}}function hd(){if(_r)try{speechSynthesis.cancel()}catch{}}function Ex(){if(qa){let n=E.voice;E.voice=!0,fc(qa.text,qa.id),E.voice=n}}var oc="";function Tx(n){let e="",t="",i=n.id;if(n.kind==="quiz"){let s=bt[n.id];if(e=`q|${n.id}|${n.stage}|${n.i}|${n.qi}`,n.stage==="lines")t=s.intro[n.i];else if(n.stage==="q"){let r=n.qs[n.qi];t="Question "+(n.qi+1)+". "+r.q+" R\xE9ponses : "+(n.opts||[]).join(", ")}else n.stage==="fb"?t=(n.fbFirst?"Bravo ! ":"C\u2019est \xE7a. ")+n.qs[n.qi].exp:t=n.rev?"R\xE9vision termin\xE9e : "+n.firsts+" sur "+n.qs.length+" du premier coup.":s.outro}else if(n.kind==="info")e="i|"+n.title+"|"+n.i,t=n.lines[n.i];else if(n.kind==="shop")e="s|"+n.msg,t=n.msg,i="bea";else return;e!==oc&&(oc=e,fc(t,i))}var wx=()=>_r?'<button class="s" onclick="replay()">\u{1F50A} R\xE9\xE9couter</button>':"",hr=Se("cv"),di=new Xs({canvas:hr,antialias:!0,powerPreference:"high-performance"});di.setPixelRatio(Math.min(window.devicePixelRatio||1,2));di.outputColorSpace=it;di.toneMapping=Nl;di.toneMappingExposure=1.05;di.shadowMap.enabled=!0;di.shadowMap.type=Ul;var Pt=new _a;Pt.background=new He(10473710);Pt.fog=new ga(14676215,70,260);var tt=new kt(58,1,.1,600),ud=new Aa(13625599,8022602,1);Pt.add(ud);var An=new Pa(16773590,3);An.castShadow=!0;An.shadow.mapSize.set(2048,2048);var Wa=30;Object.assign(An.shadow.camera,{left:-Wa,right:Wa,top:Wa,bottom:-Wa,near:1,far:140});An.shadow.bias=-4e-4;An.shadow.normalBias=.04;Pt.add(An);Pt.add(An.target);var ur=new pe(new Tt(420,24,16),new Yt({color:16777215,side:Dt,fog:!1,depthWrite:!1}));Promise.resolve().then(()=>(or(),jl)).then(n=>{ur.material.map=n.skyTexture(),ur.material.needsUpdate=!0});Pt.add(ur);function pc(){let n=Se("world").clientWidth,e=Se("world").clientHeight;di.setSize(n,e,!1),tt.aspect=n/e,tt.fov=n/e<.8?72:n/e<1.2?64:56,tt.updateProjectionMatrix()}window.addEventListener("resize",pc);var $t=null,Kt=null,rn={},Oi=null;function Ax(){return Object.assign({},E.look,{h:.8})}var dr=n=>!!(window.__MAN&&(window.__MAN.chars||[]).includes(n));function dd(){return E.real&&dr(E.real)?tc(E.real,{walk:dr(E.real+"w")?E.real+"w":null}):Kl(Ax())}function Rx(n,e){return dr(n)?tc(n):Kl(e.look)}var bs={ville:{build:()=>qu(),interior:!1,doors:[{x:-22,z:-5.4,r:1.9,to:"maison",label:"Entrer dans la maison",tx:0,tz:1,phi:-Math.PI/2},{x:42,z:-5.3,r:2.6,to:"classe",label:"Entrer dans l\u2019\xE9cole",ok:()=>Ka(),closed:"Porte ferm\xE9e",tx:0,tz:2.6,phi:-Math.PI/2}]},maison:{build:()=>Ju(E.adv.items),interior:!0,doors:[{x:0,z:2.5,r:1.9,to:"ville",label:"Sortir",tx:-22,tz:-3.9,phi:Math.PI/2}],spots:[{x:-1.6,z:-2.2,r:1.9,label:"Miroir : changer mon look",run:()=>Mc("play")}]},classe:{build:()=>Zu(),interior:!0,doors:[{x:0,z:4.1,r:1.9,to:"ville",label:"Sortir de l\u2019\xE9cole",tx:42,tz:-3.4,phi:Math.PI/2}]}};function Cx(){$t&&Pt.remove($t.group),Kt&&Pt.remove(Kt),Object.values(rn).forEach(n=>Pt.remove(n.obj)),rn={}}function fr(){Cx();let n=bs[E.sc];$t=n.build(),Pt.add($t.group),ur.visible=!0,ud.intensity=n.interior?2.1:1,Pt.fog.near=n.interior?200:70,An.intensity=n.interior?2.2:3,Kt=dd(),Pt.add(Kt),Object.keys(bt).filter(e=>bt[e].sc===E.sc).forEach(e=>ed(e,bt[e])),Object.keys(ai).filter(e=>ai[e].sc===E.sc).forEach(e=>ed(e,ai[e])),eo()}function ed(n,e){let t=Rx(n,e);t.position.set(e.x,0,e.z),t.rotation.y=e.ry||0,Pt.add(t),rn[n]={obj:t,n:e,wave:0,ry:e.ry||0}}var Xn=.36;function Px(n,e){let t=n,i=e,s=$t.colliders;for(let o=0;o<s.length;o++){let l=s[o],c=t-l.x,h=i-l.z,u=Math.hypot(c,h),d=l.r+Xn;u<d&&u>1e-4&&(t=l.x+c/u*d,i=l.z+h/u*d)}let r=$t.boxes.slice();E.sc==="ville"&&!Ka()&&r.push($t.dyn.gateBox),r.forEach(o=>{let l=hi(o.x0,o.x1,t),c=hi(o.z0,o.z1,i),h=t-l,u=i-c,d=Math.hypot(h,u);if(d<Xn)if(d>1e-4)t=l+h/d*Xn,i=c+u/d*Xn;else{let f=t-o.x0,g=o.x1-t,x=i-o.z0,m=o.z1-i,p=Math.min(f,g,x,m);p===f?t=o.x0-Xn:p===g?t=o.x1+Xn:p===x?i=o.z0-Xn:i=o.z1+Xn}}),Object.keys(rn).forEach(o=>{let l=rn[o].n;if(l.sit)return;let c=t-l.x,h=i-l.z,u=Math.hypot(c,h),d=.5+Xn;u<d&&u>1e-4&&(t=l.x+c/u*d,i=l.z+h/u*d)});let a=$t.bounds;return[hi(a.x0,a.x1,t),hi(a.z0,a.z1,i)]}function Qa(){return new P(E.x,1.35,E.z)}function mc(n){let e=E.mode==="mini"?Math.max(E.pitch,.85):E.pitch;E.mode==="mini"&&(n=Math.max(n,7.5));let t=Math.cos(E.phi)*Math.cos(e),i=Math.sin(E.phi)*Math.cos(e),s=Math.sin(e),r=Qa();return new P(r.x-t*n,r.y+s*n+.4,r.z-i*n)}var gc=()=>bs[E.sc].interior?4.4:4.9;function eo(){let n=mc(gc());tt.position.copy(n),tt.lookAt(Qa())}function Lx(n){let e=mc(gc());tt.position.lerp(e,1-Math.exp(-n*9)),tt.position.y<.6&&(tt.position.y=.6),tt.lookAt(Qa())}function _c(){let n=E.adv.done;if(!n.lola)return"Objectif : va \xE0 l\u2019\xE9cole et parle \xE0 Mama Lola, la gardienne du portail.";if(!n.ilunga)return"Objectif : entre dans l\u2019\xE9cole et va voir la Professeure Ilunga.";if(!n.junior)return"Objectif : rejoins Junior, assis dans la classe.";if(!n.mavungu)return"Objectif : le Directeur Mavungu t\u2019attend dans la classe.";let e=dc(),t=Object.keys(un).length;return e<t?"Objectif : cueille des mangues, r\xE9vise et meuble ta maison ("+e+"/"+t+").":"Tu as tout accompli ! Continue \xE0 r\xE9viser pour gagner des \xE9toiles."}function Ot(){let n=Ad();Se("stats").innerHTML=(n?`<img class="av" src="${n}" alt="">`:"")+"\u{1FA99} "+E.adv.pieces+" \xB7 \u2B50 "+yx()+" \xB7 Niv "+ui(),E.mode!=="mini"&&(Se("info").textContent=_c())}function xr(n,e){let t=ui();E.adv.pieces+=n,E.adv.xp+=e,ui()>t&&(xn("Niveau "+ui()+" atteint !"+(Li[ui()]?" Nouvelle tenue d\xE9bloqu\xE9e !":"")),Ht.win()),Ot(),Nt()}var td=null;function xn(n){let e=Se("toast");e.textContent=n,e.style.display="block",clearTimeout(td),td=setTimeout(()=>{e.style.display="none"},2400)}var qn=null;function nd(n,e,t,i,s){qn={pos:new P(e,i||2.2,t),until:s?performance.now()+s:0};let r=Se("bubble");r.innerHTML=n,r.style.display="block"}function vr(){qn=null,Se("bubble").style.display="none"}function Ix(){if(!qn)return;if(qn.until&&performance.now()>qn.until){vr();return}let n=qn.pos.clone().project(tt),e=Se("world").clientWidth,t=Se("world").clientHeight;if(n.z>1){Se("bubble").style.display="none";return}let i=Se("bubble");i.style.display="block",i.style.left=hi(70,e-70,(n.x*.5+.5)*e)+"px",i.style.top=hi(60,t-20,(-n.y*.5+.5)*t)+"px"}function Dx(){let n=[];if(Object.keys(bt).forEach(e=>{let t=bt[e];if(t.sc===E.sc){let i=Ni(E.x,E.z,t.x,t.z);i<(t.kind==="shop"?3.9:2.7)&&n.push({t:"npc",id:e,d:i})}}),bs[E.sc].doors.forEach((e,t)=>{let i=Ni(E.x,E.z,e.x,e.z);i<e.r&&n.push({t:"door",i:t,d:i})}),(bs[E.sc].spots||[]).forEach((e,t)=>{let i=Ni(E.x,E.z,e.x,e.z);i<e.r&&n.push({t:"spot",i:t,d:i})}),E.sc==="ville"&&$t.mangoTree){let e=Ni(E.x,E.z,$t.mangoTree.x,$t.mangoTree.z);e<4&&n.push({t:"tree",d:e})}return n.sort((e,t)=>(e.t==="npc"?0:1)-(t.t==="npc"?0:1)||e.d-t.d)}function fd(n){if(!n)return{label:"",enabled:!1,run:null};if(n.t==="npc"){let t=bt[n.id];return t.kind==="shop"?{label:"Aller au march\xE9",enabled:!0,run:Wx}:t.kind==="talk"?{label:ju(t),enabled:!0,run:()=>Hx(n.id)}:ld(n.id)?{label:t.short+" est occup\xE9(e), reviens plus tard",enabled:!1,run:null}:Es(n.id)?{label:"R\xE9viser avec "+t.short,enabled:!0,run:()=>id(n.id,!0)}:{label:ju(t),enabled:!0,run:()=>id(n.id,!1)}}if(n.t==="tree")return{label:"Cueillir des mangues",enabled:!0,run:Kx};if(n.t==="spot"){let t=bs[E.sc].spots[n.i];return{label:t.label,enabled:!0,run:t.run}}let e=bs[E.sc].doors[n.i];return e.ok&&!e.ok()?{label:e.closed,enabled:!1,run:null}:{label:e.label,enabled:!0,run:()=>Ux(e)}}function Ux(n){E.sc=n.to,E.x=n.tx,E.z=n.tz,E.phi=n.phi,E.near=null,vr(),fr()}function Rn(n){E.dialog=n,E.mode="dialog",E.joy.x=E.joy.y=0,E.key.x=E.key.y=0,vc(),vr(),Ut(),Se("actwrap").classList.add("hide")}function pd(){if(lc=!1,hd(),oc="",Se("dlg").style.display="none",E.dialog=null,E.ui==="photo"){E.mode="pview",gr.refresh(),Ot();return}E.mode="play",Se("actwrap").classList.remove("hide"),E.sc==="maison"&&fr(),Ot()}function id(n,e){let t=bt[n],i=Ou[t.sujet],s=e?od(i).slice(0,3):i.slice(0,t.nb);Rn({kind:"quiz",id:n,rev:e,stage:e?"q":"lines",i:0,qi:0,qs:s,opts:null,bad:[],qerr:!1,errs:0,firsts:0,gain:0,res:null})}function Ut(){let n=E.dialog,e=Se("dlg");e.style.display="block",e.scrollTop=0;let t="";n.kind==="quiz"?t=Ox(n):n.kind==="info"?t=Vx(n):n.kind==="shop"?t=Xx(n):n.kind==="menu"?t=$x(n):n.kind==="profile"?t=rv(n):n.kind==="objs"&&(t=cv(n)),e.innerHTML='<div class="box">'+t+(n.kind==="quiz"||n.kind==="info"||n.kind==="shop"?wx():"")+"</div>",Tx(n)}var Nx=n=>!!(window.__MAN&&(window.__MAN.portraits||[]).includes(n)),xc=(n,e)=>`<div class="hd">${n&&Nx(n)?`<img class="pt" src="img/portraits/${n}.jpg" alt="">`:""}<h3>${xt(e)}</h3></div>`;function Ox(n){let e=bt[n.id],t=xc(n.id,e.name+" \xB7 "+e.role);if(n.stage==="lines")t+=`<p>${xt(e.intro[n.i])}</p><button class="p" onclick="nextLine()">Suite</button>`;else if(n.stage==="q"){let i=n.qs[n.qi];n.opts||(n.opts=od(i.c)),t+=`<p><b>${xt(n.rev?"R\xE9vision \xB7 ":"")}Question ${n.qi+1} sur ${n.qs.length}</b> : ${xt(i.q)}</p>`,n.bad.length&&(t+='<p class="ko">Pas tout \xE0 fait. R\xE9fl\xE9chis encore !</p>'),t+=n.opts.map((s,r)=>`<button ${n.bad.indexOf(s)>=0?"disabled":""} onclick="answerQ(${r})">${xt(s)}</button>`).join(""),t+='<button class="s" onclick="closeDialog()">Quitter</button>'}else if(n.stage==="fb"){let i=n.qs[n.qi];t+=`<p class="ok"><b>${n.fbFirst?"Bravo !":"C\u2019est \xE7a."}</b> ${xt(i.exp)}</p><button class="p" onclick="nextQ()">Suite</button>`}else{let i=n.res;n.rev?t+=`<p>R\xE9vision termin\xE9e : ${n.firsts} sur ${n.qs.length} du premier coup. <b>+${n.gain} \u{1FA99}</b></p>`:t+=`<p>${xt(e.outro)}</p><p><b>${"\u2605".repeat(i.stars)+"\u2606".repeat(3-i.stars)}</b> \xB7 +${n.gain} \u{1FA99}${i.tissu?" \xB7 +"+i.tissu+" tissu wax":""}</p>`,t+='<button class="p" onclick="closeDialog()">Continuer</button>'}return t}function Fx(){let n=E.dialog,e=bt[n.id];n.i++,n.i>=e.intro.length&&(n.stage="q",n.qi=0,n.opts=null),Ut()}function Bx(n){let e=E.dialog,t=e.qs[e.qi],i=e.opts[n];if(i!==t.a){e.bad.push(i),e.qerr=!0,e.errs++,Ht.ko(),Ut();return}let s=!e.qerr;E.adv.total++,s&&(E.adv.good++,e.firsts++);let r=e.rev?s?2:0:s?5:1;e.gain+=r,e.fbFirst=s,xr(r,s?e.rev?4:10:3),Ht.ok(),e.stage="fb",Ut()}function zx(){let n=E.dialog;n.qi++,n.opts=null,n.bad=[],n.qerr=!1,n.qi>=n.qs.length?(kx(n),n.stage="out"):n.stage="q",Ut()}function kx(n){if(n.rev){Nt();return}let e=n.id,t=n.errs===0?3:n.errs<=2?2:1;E.adv.done[e]=!0,E.adv.stars[e]=Math.max(E.adv.stars[e]||0,t),n.gain+=10,xr(10,10);let i=0;e==="mavungu"&&(E.adv.pieces+=20,E.adv.tissu+=2,i=2,n.gain+=20),n.res={stars:t,tissu:i};let s=E.ui==="photo"?[]:dv(e);s.length&&setTimeout(()=>xn("D\xE9bloqu\xE9 : "+s.join(", ")),900),Ht.win(),Nt(),Ot(),setTimeout(md,0)}function Hx(n){let e=bt[n];Rn({kind:"info",id:n,title:e.name+" \xB7 "+e.role,i:0,lines:["Bonjour "+E.nom+" !",_c().replace("Objectif : ","Ton objectif : "),"Ta partie est sauvegard\xE9e automatiquement. Repose-toi quand tu veux."]})}function Vx(n){let e=n.i>=n.lines.length-1;return xc(n.id,n.title)+`<p>${xt(n.lines[n.i])}</p><button class="p" onclick="${e?"closeDialog()":"infoNext()"}">${e?"Fermer":"Suite"}</button>`}function Gx(){E.dialog.i++,Ut()}function Wx(){Rn({kind:"shop",msg:"Bienvenue au march\xE9, "+E.nom+" !"})}function Xx(n){let e=E.adv,t=xc("bea","Maman B\xE9a \xB7 Marchande")+`<p>${xt(n.msg)}</p><p class="row"><span>Mes pi\xE8ces</span><b>${e.pieces} \u{1FA99}</b></p><p class="row"><span>Mes mangues \xB7 tissu wax</span><b>${e.mangues} \u{1F96D} \xB7 ${e.tissu}</b></p>`;return e.mangues>0&&(t+=`<button onclick="sellMangoes()">Vendre mes ${e.mangues} mangues (+${e.mangues*2} \u{1FA99})</button>`),t+=Object.keys(un).map(i=>{let s=un[i];return e.items[i]?`<button disabled>\u2714 ${xt(s.n)} (dans ta maison)</button>`:`<button onclick="buy('${i}')">${xt(s.n)} \u2014 ${s.p} \u{1FA99}${s.t?" + "+s.t+" tissu wax":""}</button>`}).join(""),E.ui!=="photo"&&(t+='<button onclick="shopMode()">\u{1F457} Mode : essayer tenues et coiffures</button>'),t+'<button class="s" onclick="closeDialog()">Quitter le march\xE9</button>'}function qx(){let n=E.adv,e=n.mangues;e&&(n.mangues=0,xr(e*2,0),Ht.coin(),E.dialog.msg="Merci ! Tes "+e+" mangues sont vendues : +"+e*2+" pi\xE8ces.",Ut())}function Yx(n){let e=un[n],t=E.adv,i=E.dialog;if(!t.items[n]){if(t.pieces<e.p){i.msg="Il te manque "+(e.p-t.pieces)+" pi\xE8ces pour : "+e.n+".",Ht.ko(),Ut();return}if(e.t&&t.tissu<e.t){i.msg="Il te faut du tissu wax. Le Directeur Mavungu en offre \xE0 la fin de la le\xE7on.",Ht.ko(),Ut();return}t.pieces-=e.p,e.t&&(t.tissu-=e.t),t.items[n]=!0,Nt(),Ot(),Ht.coin(),i.msg="Achat r\xE9ussi : "+e.n+" ! Elle est install\xE9e dans ta maison.",Ut(),setTimeout(md,0)}}function md(){E.adv.fin||!Mx()||dc()<Object.keys(un).length||(E.adv.fin=!0,Nt(),Ht.win(),(E.mode==="play"||E.mode==="dialog")&&Rn({kind:"info",title:"F\xE9licitations !",i:0,lines:[E.nom+", tu as termin\xE9 la le\xE7on et meubl\xE9 toute ta maison !","Tu es un vrai champion de LEXARIS ACAD\xC9MIE. Continue \xE0 r\xE9viser pour gagner trois \xE9toiles partout."]}))}function gd(){(E.mode==="play"||E.mode==="pview")&&Rn({kind:"menu"})}function $x(){let n=E.adv,e=Ad();return`<div class="hd">${e?`<img class="pt" src="${e}" alt="">`:""}<h3>${xt(E.nom)} \xB7 Niveau ${ui()}</h3></div><p class="row"><span>Pi\xE8ces</span><b>${n.pieces} \u{1FA99}</b></p><p class="row"><span>Tissu wax \xB7 mangues</span><b>${n.tissu} \xB7 ${n.mangues} \u{1F96D}</b></p><p class="row"><span>R\xE9ponses justes du premier coup</span><b>${n.good}/${n.total}</b></p><h4>Le\xE7ons</h4>`+["lola","ilunga","junior","mavungu"].map(t=>{let i=n.stars[t]||0;return`<div class="row"><span>${xt(Fu[bt[t].sujet])} \xB7 ${xt(bt[t].name)}</span><b>${n.done[t]?"\u2605".repeat(i)+"\u2606".repeat(3-i):"\u2014"}</b></div>`}).join("")+"<h4>Ma maison</h4>"+Object.keys(un).map(t=>`<div class="row"><span>${xt(un[t].n)}</span><b>${n.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+`<p style="font-size:12px;margin-top:8px">${xt(_c())}</p><button class="p" onclick="closeDialog()">Fermer</button><button onclick="openProfile()">\u{1F4F7} Ma photo de profil</button><button onclick="toggleSound()">Son : ${E.sound?"activ\xE9":"coup\xE9"}</button><button onclick="toggleVoice()">Lecture \xE0 voix haute : ${E.voice?"activ\xE9e":"coup\xE9e"}</button><button class="s" onclick="resetGame()">${E.dialog&&E.dialog.confirmReset?"Appuie encore pour tout effacer":"Recommencer une nouvelle partie"}</button>`}function Zx(){E.sound=!E.sound,Nt(),E.ui==="photo"&&(E.sound?gr.ambientOn():gr.ambientOff()),Ut()}function Jx(){E.voice=!E.voice,E.voice||hd(),Nt(),Ut()}var lc=!1;function jx(){if(!lc){lc=!0,E.dialog.confirmReset=!0,Ut();return}try{localStorage.removeItem(uc)}catch{}location.reload()}function Kx(){E.mode="mini",E.mini={t:20,caught:0,list:[],sp:0},vr(),Oi=new lt,Pt.add(Oi),_d(!1),xn("Attrape les mangues qui tombent !")}var Qx=new qe({color:15770908,roughness:.5}),ev=new Tt(.17,12,10);function tv(n){let e=E.mini,t=$t.mangoTree;if(e.t-=n,e.sp-=n,e.sp<=0){e.sp=.5+Math.random()*.4;let i=Math.random()*6.28,s=Math.random()*3.4,r=new pe(ev,Qx);r.scale.y=1.25,r.castShadow=!0,r.position.set(t.x+Math.cos(i)*s,6.2,t.z+Math.sin(i)*s),Oi.add(r),e.list.push({mesh:r,v:0})}e.list=e.list.filter(i=>{i.v+=7*n,i.mesh.position.y-=i.v*n,i.mesh.rotation.x+=n*4;let s=i.mesh.position;return s.y<1.9&&s.y>.2&&Ni(s.x,s.z,E.x,E.z)<.95?(e.caught++,Ht.coin(),Oi.remove(i.mesh),!1):s.y<=.17&&(s.y=.17,i.v=0,i.gone=(i.gone||0)+n,i.gone>.5)?(Oi.remove(i.mesh),!1):!0}),Se("info").textContent="Mangues attrap\xE9es : "+e.caught+" \xB7 temps : "+Math.max(0,Math.ceil(e.t))+" s",e.t<=0&&xd()}function _d(n){$t.mangoTree.obj.children.forEach(e=>{e.userData.canopy&&(e.visible=n)})}function xd(){let n=E.mini.caught;_d(!0),Pt.remove(Oi),Oi=null,E.mini=null,E.mode="play",E.adv.mangues+=n,Nt(),xn(n?"+"+n+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),n&&Ht.win(),xr(0,n),Ot()}var pr=Se("joy"),vd=Se("knob"),to=null;function vc(){to=null,vd.style.transform="translate(0,0)",E.joy.x=E.joy.y=0}function yd(n){let e=pr.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=e.width/2-4,r=n.clientX-t,a=n.clientY-i,o=Math.hypot(r,a);o>s&&(r=r/o*s,a=a/o*s),vd.style.transform=`translate(${r}px,${a}px)`,E.joy.x=r/s,E.joy.y=-a/s}pr.addEventListener("pointerdown",n=>{n.preventDefault(),to=n.pointerId,pr.setPointerCapture(n.pointerId),yd(n)});pr.addEventListener("pointermove",n=>{n.pointerId===to&&(n.preventDefault(),yd(n))});["pointerup","pointercancel","lostpointercapture"].forEach(n=>pr.addEventListener(n,e=>{e.pointerId===to&&vc()}));var Za=null,Ya=0,cc=0;hr.addEventListener("pointerdown",n=>{E.mode!=="play"&&E.mode!=="mini"&&E.mode!=="creator"||(Za=n.pointerId,Ya=n.clientX,cc=n.clientY,hr.setPointerCapture(n.pointerId))});hr.addEventListener("pointermove",n=>{n.pointerId===Za&&(E.mode==="creator"?Ct.ang-=(n.clientX-Ya)*.012:(E.phi+=(n.clientX-Ya)*.006,E.pitch=hi(.12,1.1,E.pitch+(n.clientY-cc)*.004)),Ya=n.clientX,cc=n.clientY)});["pointerup","pointercancel"].forEach(n=>hr.addEventListener(n,e=>{e.pointerId===Za&&(Za=null)}));var Ms={},Ja={ArrowUp:"u",w:"u",z:"u",ArrowDown:"d",s:"d",ArrowLeft:"l",a:"l",q:"l",ArrowRight:"r",d:"r"};function Md(){E.key.y=(Ms.u?1:0)-(Ms.d?1:0),E.key.x=(Ms.r?1:0)-(Ms.l?1:0)}document.addEventListener("keydown",n=>{n.target&&n.target.tagName==="INPUT"||(Ja[n.key]&&(Ms[Ja[n.key]]=!0,Md(),n.preventDefault()),!(E.mode!=="play"&&E.mode!=="mini")&&((n.key==="e"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),bd()),n.key==="m"&&gd(),n.key==="ArrowLeft"&&n.shiftKey&&(E.phi-=.1)))});document.addEventListener("keyup",n=>{Ja[n.key]&&(Ms[Ja[n.key]]=!1,Md())});var hc=null;function bd(){if(E.mode==="mini")return xd();E.mode==="play"&&hc&&hc()}Se("ba").addEventListener("click",bd);Se("menu").addEventListener("click",gd);var sd=performance.now(),ic=0,sc=0,rc=3,rd=0;function ad(n,e){let t=e-n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}function Sd(n){requestAnimationFrame(Sd);let e=Math.min(.05,(n-sd)/1e3);if(sd=n,ic+=e,!$t||E.ui==="photo")return;let t=E.mode==="play"||E.mode==="mini",i=0;if(t){let s=E.joy.x+E.key.x,r=E.joy.y+E.key.y,a=Math.min(1,Math.hypot(s,r));if(a>.1){let o=Math.cos(E.phi),l=Math.sin(E.phi),c=-l,h=o,u=o*r+c*s,d=l*r+h*s,f=Math.hypot(u,d);u/=f,d/=f,i=a<.7?a/.7*2.5:2.5+(a-.7)/.3*2.1;let[g,x]=Px(E.x+u*i*e,E.z+d*i*e);E.x=g,E.z=x;let m=Math.atan2(u,d);E.ry+=ad(E.ry,m)*Math.min(1,e*12),E.lean=s*Math.min(1,a),sc+=e*i,sc>1.2&&(sc=0,Ht.step())}}if(i===0&&(E.lean=0),E.speed=i,Kt.position.set(E.x,0,E.z),Kt.rotation.y=E.ry,Kt.userData.update(e,{speed:i,pose:E.mode==="creator"?"creator":"",cam:tt.position,lean:E.lean||0}),Object.keys(rn).forEach(s=>{let r=rn[s],a=r.n,o=Ni(E.x,E.z,a.x,a.z),l=E.dialog&&E.dialog.id===s&&E.mode==="dialog",c=a.ry||0;!a.sit&&(l||o<5)&&(c=Math.atan2(E.x-a.x,E.z-a.z)),a.sit&&l&&(c=Math.atan2(E.x-a.x,E.z-a.z)*.3+(a.ry||0)*.7),r.ry+=ad(r.ry,c)*Math.min(1,e*5),r.obj.rotation.y=r.ry,r.wave>0&&(r.wave-=e),r.obj.userData.update(e,{cam:tt.position,talk:l||!!ai[s]&&qn&&qn.who===s,wave:r.wave>0,sit:!!a.sit})}),$t.update(e,ic,{open:Ka()}),An.position.set(E.x+26,E.z*0+40,E.z+16),An.target.position.set(E.x,0,E.z),E.mode==="cine")iv(e);else if(E.mode==="creator"){let s=Kt.position,r=Se("world").clientWidth,a=Se("world").clientHeight,o=r>a*1.25;tt.fov!==30&&(tt.fov=30,tt.updateProjectionMatrix());let l=Ct.ang,c=2.35,h=new P(s.x+Math.sin(l)*c,1.45,s.z+Math.cos(l)*c);tt.position.lerp(h,1-Math.exp(-e*8)),tt.lookAt(s.x,1.08,s.z),o?tt.setViewOffset(r,a,r*.2,0,r,a):tt.clearViewOffset()}else if(E.mode==="start"){let s=ic*.08;tt.position.set(8+Math.cos(s)*34,9,2+Math.sin(s)*22),tt.lookAt(10,2,-2)}else Lx(e);if(ur.position.copy(tt.position),E.mode==="play"){let s=Dx(),r=s.find(c=>c.t==="npc");r&&E.near!==r.id&&(E.near=r.id,E.greeted[r.id]||(E.greeted[r.id]=!0,rn[r.id].wave=2.4,nd("Bonjour "+xt(E.nom)+" !",bt[r.id].x,bt[r.id].z,bt[r.id].look.h*1.95,3e3))),!r&&E.near&&(E.near=null);let a=fd(s[0]);hc=a.run;let o=Se("ba");o.disabled=!a.enabled;let l=Se("alabel");if(l.textContent!==a.label&&(l.textContent=a.label),rc-=e,rc<=0&&(rc=5,E.sc==="ville"&&!E.near&&!qn)){let c=Na[rd%Na.length];rd++;let h=c[0]==="J\xE9r\xE9mie"?ai.jer:ai.kasa;Ni(E.x,E.z,h.x,h.z)<16&&nd("<b>"+xt(c[0])+"</b> : "+xt(c[1]),h.x,h.z,h.look.h*1.95,4200)}}else E.mode==="mini"&&(tv(e),Se("alabel").textContent="Arr\xEAter la cueillette",Se("ba").disabled=!1);Ix(),di.render(Pt,tt)}function nv(){E.mode="cine",E.cine={t:0,dur:9},["joy","actwrap","top","info"].forEach(n=>Se(n).classList.add("hide")),Se("cine").classList.remove("hide"),Se("skip").classList.remove("hide"),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,fr()}function iv(n){let e=E.cine;e.t+=n;let t=Math.min(1,e.t/e.dur),i=t*t*(3-2*t),s=new P(60,16,22),r=new P(10,10,26),a=mc(gc()),o;if(t<.6){let c=t/.6,h=c*c*(3-2*c);o=s.clone().lerp(r,h)}else{let c=(t-.6)/.4,h=c*c*(3-2*c);o=r.clone().lerp(a,h)}tt.position.copy(o);let l=new P(30,3,-4).lerp(Qa(),hi(0,1,(t-.45)/.55));tt.lookAt(l),e.t>=e.dur&&Ed()}function Ed(){E.cine=null,E.mode="play",["joy","actwrap","top","info"].forEach(n=>Se(n).classList.remove("hide")),Se("cine").classList.add("hide"),Se("skip").classList.add("hide"),eo(),Ot(),Rn({kind:"info",title:"Bienvenue, "+E.nom+" !",i:0,lines:["Tu es dans ton village. D\xE9place-toi avec le joystick \xE0 gauche, et fais glisser ton doigt sur l\u2019\xE9cran pour tourner la cam\xE9ra.","L\u2019\xE9cole LEXARIS ACAD\xC9MIE est tout \xE0 droite. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues au manguier, vends-les \xE0 Maman B\xE9a et meuble ta maison."]})}Se("skip").addEventListener("click",()=>{E.mode==="cine"&&Ed()});function sv(){Rn({kind:"profile"})}function rv(){let n=(window.__MAN&&window.__MAN.avatars||[]).filter(t=>t[0]===(E.look.s||"f"));return`<h3>Mon personnage</h3><div class="avs" style="margin-bottom:10px">${["pf1","pf2","ph1","ph2"].map(t=>`<button class="avb${Ec()===t?" on":""}" onclick="setChar('${t}')"><img src="img/chars/${t}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("")}</div><h3>Ma photo de profil</h3><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${E.photo==="c"?" on":""}" onclick="crPhoto('c')" style="width:auto">Mon visage de personnage</button></div><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${E.look.s==="f"?" on":""}" onclick="setGenre('f')" style="width:auto">Fille</button><button class="chip${E.look.s==="h"?" on":""}" onclick="setGenre('h')" style="width:auto">Gar\xE7on</button></div><div class="avs">`+n.map(t=>`<button class="avb${E.photo===t?" on":""}" onclick="crPhoto('${t}')"><img src="img/avatars/${t}.jpg" alt=""></button>`).join("")+(mr()?`<button class="avb${E.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${mr()}" alt=""></button>`:"")+'</div><label class="chip" style="cursor:pointer;display:block;margin-top:8px">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label><button class="p" onclick="closeDialog()">Fermer</button>'}function av(n){E.real=n,E.look.s=n[1]==="f"?"f":"h",E.sexe=E.look.s,Nt(),wd(n),Ot(),gr.refresh(),Ut()}function ov(n){E.look.s=n,E.sexe=n,Nt(),Ut()}function lv(){Rn({kind:"objs"})}function cv(){let n=dc(),e=Object.keys(un).length;return`<h3>Mes objets (${n}/${e})</h3>`+Object.keys(un).map(t=>`<div class="row"><span>${xt(un[t].n)}</span><b>${E.adv.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+'<p style="font-size:13px;margin-top:8px">Ach\xE8te-les chez Maman B\xE9a, au march\xE9, avec les pi\xE8ces gagn\xE9es en r\xE9pondant aux questions et en cueillant des mangues.</p><button class="p" onclick="closeDialog()">Fermer</button>'}var Td="kelas_photo_v1";function mr(){try{return localStorage.getItem(Td)}catch{return null}}var Xa={};function wd(n){if(Xa[n])return Xa[n];Xa[n]=null;let e=new Image;return e.onload=()=>{let t=document.createElement("canvas");t.width=t.height=96;let i=t.getContext("2d"),s=e.width,r=e.height*.2,a=Math.max(96/s,96/r),o=s*a,l=e.height*a;i.drawImage(e,(96-o)/2,0,o,l),Xa[n]=t.toDataURL("image/png"),Ot()},e.src="img/chars/"+n+".webp",null}function Ad(){return E.photo==="c"?wd(Ec()):E.photo==="u"?mr():E.photo&&window.__MAN&&(window.__MAN.avatars||[]).includes(E.photo)?"img/avatars/"+E.photo+".jpg":null}function hv(n){E.photo=n,Nt(),Ot(),E.dialog&&E.dialog.kind==="profile"?Ut():vn()}function uv(n){let e=n.files&&n.files[0];if(!e)return;let t=new Image,i=URL.createObjectURL(e);t.onload=()=>{let s=document.createElement("canvas");s.width=160,s.height=213;let r=s.getContext("2d"),a=Math.max(160/t.width,213/t.height),o=t.width*a,l=t.height*a;r.drawImage(t,(160-o)/2,(213-l)/2,o,l),URL.revokeObjectURL(i);try{localStorage.setItem(Td,s.toDataURL("image/jpeg",.82)),E.photo="u",Nt(),Ot(),E.dialog&&E.dialog.kind==="profile"?Ut():vn(),xn("Ta photo est enregistr\xE9e sur cet appareil.")}catch{xn("Impossible d\u2019enregistrer la photo.")}},t.onerror=()=>xn("Cette image ne peut pas \xEAtre lue."),t.src=i}var Ss={hair:sr,acc:rr,outfit:oi},Ct={tab:"perso",prev:null,from:"play",ang:0};function wn(n,e){let t=Ss[n][e];if(!t)return!1;if(t.own||t.unlock&&Es(t.unlock)||E.adv.bought[n+":"+e])return!0;if(n==="outfit"){for(let i in Li)if(ui()>=+i&&Li[i].outfits.indexOf(e)>=0)return!0}return!1}function $a(n,e){let t=Ss[n][e];if(t.price)return t.price+" \u{1FA99}";if(t.unlock)return"Qu\xEAte : "+bt[t.unlock].name;for(let i in Li)if(Li[i].outfits&&Li[i].outfits.indexOf(e)>=0)return"Niveau "+i;return""}function dv(n){let e=[];return[["hair",sr],["acc",rr],["outfit",oi]].forEach(t=>Object.keys(t[1]).forEach(i=>{t[1][i].unlock===n&&e.push(t[1][i].n)})),e}function Rd(){let n=E.look,e=[];return wn("hair",n.hair)||e.push({kind:"hair",id:n.hair}),wn("outfit",n.outfit)||e.push({kind:"outfit",id:n.outfit}),n.acc.forEach(t=>{wn("acc",t)||e.push({kind:"acc",id:t})}),e}function yr(){let n=Kt;Kt=dd(),Kt.position.set(E.x,0,E.z),Kt.rotation.y=E.ry,Pt.add(Kt),n&&(Pt.remove(n),n.traverse(e=>{e.geometry&&e.geometry.dispose()}))}var ac=!1;function Mr(){ac||(ac=!0,requestAnimationFrame(()=>{ac=!1,yr()}))}function yc(n){["joy","actwrap","top","info"].forEach(e=>Se(e).classList.toggle("hide",!n))}function Mc(n){Ct.from=n,Ct.tab="perso",Ct.prev=JSON.parse(JSON.stringify(E.look)),E.mode="creator",E.joy.x=E.joy.y=0,E.key.x=E.key.y=0,vc(),vr(),Ct.ang=0,E.ry=0,yr(),yc(!1),Se("creator").classList.remove("hide");{let e=!!E.real,t=Kt.position;tt.fov=30,tt.updateProjectionMatrix(),tt.position.set(t.x,e?1.25:1.45,t.z+(e?3.9:2.35))}vn()}function fv(){let n=E.look,e=Ct.prev;wn("hair",n.hair)||(n.hair=e.hair),wn("outfit",n.outfit)||(n.outfit=e.outfit),n.acc=n.acc.filter(t=>wn("acc",t)),Nt(),yr(),Se("creator").classList.add("hide"),tt.clearViewOffset(),pc(),Ct.from==="start"?nv():(E.mode="play",yc(!0),eo(),Ot())}var Tn=(n,e,t,i)=>`<button class="chip${e?" on":""}" onclick="${t}">${n}${i?`<small>${i}</small>`:""}</button>`,cr=(n,e,t)=>`<button class="swt${e?" on":""}" style="background:${n}" onclick="${t}" aria-label="couleur"></button>`,ys=(n,e)=>`<label class="sl"><span>${n}</span><input type="range" min="0" max="100" value="${Math.round(E.look[e]*100)}" oninput="crSlide('${e}',this.value)"></label>`;function vn(){let n=E.look,e=E.real?[["perso","Personnage"],["photo","Photo"]]:[["perso","Personnage"],["visage","Visage"],["cheveux","Cheveux"],["teint","Teint"],["acc","Accessoires"],["tenue","Tenue"],["photo","Photo"]];e.some(s=>s[0]===Ct.tab)||(Ct.tab="perso");let t=`<div class="crh"><b>Mon personnage</b><span>\u{1FA99} ${E.adv.pieces}</span><button class="p" onclick="creatorDone()">Terminer</button></div>`;if(t+='<div class="tabs">'+e.map(s=>`<button class="${Ct.tab===s[0]?"on":""}" onclick="crTab('${s[0]}')">${s[1]}</button>`).join("")+'</div><div class="crb">',Ct.tab==="perso")t+='<div class="lb">Style de personnage</div><div class="chips">'+Tn("R\xE9aliste (photo)",!!E.real,"crStyle('real')")+Tn("3D personnalisable",!E.real,"crStyle('3d')")+"</div>",E.real?t+='<div class="lb">Choisis ton personnage</div><div class="avs">'+["pf1","pf2","ph1","ph2"].map(s=>`<button class="avb${E.real===s?" on":""}" onclick="crChar('${s}')"><img src="img/chars/${s}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("")+"</div>":t+='<p style="font-size:13px;margin:8px 0">R\xE8gle le visage, les cheveux, le teint, les accessoires et la tenue avec les onglets.</p>';else if(Ct.tab==="visage")t+=ys("Largeur du visage","faceW")+ys("M\xE2choire","jaw")+ys("Taille des yeux","eyeS")+ys("Nez","nose")+ys("L\xE8vres","lips")+ys("Joues roses","blush"),t+='<div class="lb">Sourcils</div><div class="chips">'+["Fins","\xC9pais","Arqu\xE9s"].map((s,r)=>Tn(s,n.brow===r,`crSet('brow',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des yeux</div><div class="sws">'+nr.map((s,r)=>cr(s,n.eyeC===r,`crSet('eyeC',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des l\xE8vres</div><div class="sws">'+ir.map((s,r)=>cr(s,n.lipC===r,`crSet('lipC',${r})`)).join("")+"</div>",n.s==="h"&&(t+='<div class="lb">Barbe</div><div class="chips">'+["Aucune","L\xE9g\xE8re","Compl\xE8te"].map((s,r)=>Tn(s,n.beard===r,`crSet('beard',${r})`)).join("")+"</div>");else if(Ct.tab==="cheveux")t+='<div class="lb">Coiffure</div><div class="chips">'+Object.keys(sr).map(s=>Tn(sr[s].n,n.hair===s,`crHair('${s}')`,wn("hair",s)?"":"\u{1F512} "+$a("hair",s))).join("")+"</div>",t+='<div class="lb">Couleur des cheveux</div><div class="sws">'+Oa.map((s,r)=>cr(s,n.hairC===r,`crSet('hairC',${r})`)).join("")+"</div>";else if(Ct.tab==="teint")t+='<div class="lb">Je suis</div><div class="chips">'+Tn("Une fille",n.s==="f","crSet('s','f')")+Tn("Un gar\xE7on",n.s==="h","crSet('s','h')")+"</div>",t+='<div class="lb">Teint de la peau</div><div class="sws">'+gs.map((s,r)=>cr(s,n.skin===r,`crSet('skin',${r})`)).join("")+"</div>";else if(Ct.tab==="acc")t+='<div class="lb">Accessoires</div><div class="chips">'+Object.keys(rr).map(s=>Tn(rr[s].n,n.acc.indexOf(s)>=0,`crAcc('${s}')`,wn("acc",s)?"":"\u{1F512} "+$a("acc",s))).join("")+"</div>";else if(Ct.tab==="photo"){let s=(window.__MAN&&window.__MAN.avatars||[]).filter(r=>r[0]===n.s);t+='<div class="lb">Ma photo de profil</div><div class="avs">'+s.map(r=>`<button class="avb${E.photo===r?" on":""}" onclick="crPhoto('${r}')"><img src="img/avatars/${r}.jpg" alt=""></button>`).join("")+(mr()?`<button class="avb${E.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${mr()}" alt=""></button>`:"")+"</div>",t+='<div class="chips" style="margin-top:8px"><label class="chip" style="cursor:pointer">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label>'+Tn("Aucune photo",!E.photo,"crPhoto(null)")+"</div>"}else t+='<div class="lb">Tenue</div><div class="chips">'+Object.keys(oi).map(s=>Tn(oi[s].n,n.outfit===s,`crOutfit('${s}')`,wn("outfit",s)?"":"\u{1F512} "+$a("outfit",s))).join("")+"</div>",t+='<div class="lb">Couleur de la tenue</div><div class="sws">'+Fa.map((s,r)=>cr(s,n.outfitC===r,`crSet('outfitC',${r})`)).join("")+"</div>";t+="</div>";let i=Rd();if(i.length){let s=i.reduce((r,a)=>r+(Ss[a.kind][a.id].price||0),0);t+=`<div class="buy"><span>Essayage : ${i.map(r=>xt(Ss[r.kind][r.id].n)).join(", ")} \u2014 ${s} \u{1FA99}</span><button class="p" onclick="crBuy()">Acheter</button></div>`}Se("creator").innerHTML=t}function pv(n){if(n==="real"){let e=["pf1","pf2","ph1","ph2"].some(dr);E.real=e?E.look.s==="f"?"pf1":"ph1":null}else E.real=null;yr(),vn()}function mv(n){E.real=n,E.look.s=n[1]==="f"?"f":"h",E.sexe=E.look.s,yr(),vn()}function gv(n){Ct.tab=n,vn()}function _v(n,e){E.look[n]=e/100,Mr()}function xv(n,e){E.look[n]=e,n==="s"&&(E.sexe=e,e==="f"&&E.look.beard&&(E.look.beard=0)),Mr(),vn()}function bc(n,e){let t=Ss[n][e];return wn(n,e)||t.price?!0:(xn($a(n,e)+" pour d\xE9bloquer : "+t.n),Ht.ko(),!1)}function vv(n){bc("hair",n)&&(E.look.hair=n,Mr(),vn())}function yv(n){bc("outfit",n)&&(E.look.outfit=n,Mr(),vn())}function Mv(n){let e=E.look.acc,t=e.indexOf(n);if(t>=0)e.splice(t,1);else{if(!bc("acc",n))return;e.push(n)}Mr(),vn()}function bv(){let n=Rd(),e=n.reduce((t,i)=>t+(Ss[i.kind][i.id].price||0),0);if(E.adv.pieces<e){xn("Il te manque "+(e-E.adv.pieces)+" pi\xE8ces."),Ht.ko();return}E.adv.pieces-=e,n.forEach(t=>{E.adv.bought[t.kind+":"+t.id]=!0}),Nt(),Ot(),Ht.coin(),xn("Achat r\xE9ussi !"),vn()}function Sv(){pd(),Mc("play")}function Sc(n){E.sexe=n,E.look.s=n,n==="f"&&E.look.beard&&(E.look.beard=0),Se("fille").className=n==="f"?"p":"",Se("garcon").className=n==="h"?"p":""}Se("fille").onclick=()=>Sc("f");Se("garcon").onclick=()=>Sc("h");function Cd(n){Se("start").classList.add("hide"),Se("cv").style.display="none",yc(!0),["joy","actwrap"].forEach(e=>Se(e).classList.add("hide")),Se("cine").classList.add("hide"),E.ui="photo",E.mode="pview",gr.show("village"),Ot(),n&&Rn({kind:"info",title:"Bienvenue, "+E.nom+" !",i:0,lines:["Tu es devant ta maison, dans ton quartier de Kinshasa. Touche les fl\xE8ches pour te d\xE9placer, touche les personnes pour leur parler, et fais glisser ton doigt pour regarder autour de toi.","Ton but : aller \xE0 l\u2019\xE9cole LEXARIS ACAD\xC9MIE. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues, vends-les \xE0 Maman B\xE9a au march\xE9, et gagne des pi\xE8ces."]})}function Pd(n){Se("start").classList.add("hide"),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,n?(fr(),E.mode="creator",Mc("start")):(E.mode="play",["joy","actwrap"].forEach(e=>Se(e).classList.remove("hide")),fr(),Ot())}Se("go").onclick=()=>{let n=Se("nom").value.trim();if(!n){Se("nom").focus();return}E.nom=n,E.adv=ja(),E.ui="photo",E.look=Object.assign({},ar,{acc:[],s:E.sexe}),E.real=E.sexe==="f"?"pf1":"ph1",E.photo="c",Nt(),Cd(!0)};Se("go3d").onclick=()=>{let n=Se("nom").value.trim();if(!n){Se("nom").focus();return}E.ui="3d",Se("cv").style.display="block",E.nom=n,E.adv=ja(),E.real=(window.__MAN&&window.__MAN.chars||[]).includes(E.sexe==="f"?"pf1":"ph1")?E.sexe==="f"?"pf1":"ph1":null,E.look=Object.assign({},ar,{acc:[],s:E.sexe,hair:E.sexe==="f"?"tresses":"courtes"}),Nt(),Pd(!0)};Se("cont").onclick=()=>{E.ui==="photo"?Cd(!1):(Se("cv").style.display="block",Pd(!1))};Object.assign(window,{setChar:av,openProfile:sv,setGenre:ov,replay:Ex,toggleVoice:Jx,crStyle:pv,crChar:mv,crPhoto:hv,crUpload:uv,crTab:gv,crSlide:_v,crSet:xv,crHair:vv,crOutfit:yv,crAcc:Mv,crBuy:bv,creatorDone:fv,shopMode:Sv,nextLine:Fx,answerQ:Bx,nextQ:zx,closeDialog:pd,infoNext:Gx,sellMangoes:qx,buy:Yx,toggleSound:Zx,resetGame:jx,__G:E,__snap:()=>eo(),__dbg:()=>({cam:tt.position.toArray().map(n=>+n.toFixed(1)),bea:rn.bea&&rn.bea.obj.position.toArray(),beaVis:rn.bea&&rn.bea.obj.visible,n:Object.keys(rn)})});var Ec=()=>["pf1","pf2","ph1","ph2"].includes(E.real)?E.real:E.look.s==="f"?"pf1":"ph1",Ld={playerChar:Ec,G:E,NPC:bt,AUTOP:ai,AUTO:Na,actionFor:fd,locked:ld,doneNpc:Es,doorOpen:Ka,toast:xn,speak:fc,SFX:Ht,gain:xr,save:Nt,refreshHud:Ot,openBox:Rn,esc:xt,hasChar:dr,openObjs:lv};Vu(Ld);var gr=Ld.photo;function Ev(){let n=vx();pc(),n&&n.nom&&(E.nom=n.nom,E.ui=n.ui||"photo",E.photo=n.photo||null,E.real=n.real===void 0?null:n.real,E.voice=n.voice!==!1,E.sound=n.sound!==!1,E.look=Object.assign({},ar,{acc:[]},n.look||{s:n.sexe||"f",skin:n.skin||3}),E.sexe=E.look.s,E.adv=Object.assign(ja(),n.adv||{}),Se("nom").value=n.nom,Se("cont").textContent="Continuer \xB7 "+n.nom+" (niveau "+ui()+")",Se("cont").classList.remove("hide"),Se("go").textContent="Nouvelle partie",Se("go").className=""),Sc(E.sexe),Ot(),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,E.ui!=="photo"||!n||n.nom,Se("cv").style.display="none",Se("lb").style.width="100%",setTimeout(()=>{Se("load").classList.add("hide"),Se("start").classList.remove("hide")},150),E.mode="start",requestAnimationFrame(Sd)}fetch("img/manifest.json").then(n=>n.ok?n.json():{}).catch(()=>({})).then(n=>{window.__MAN=n||{},Gl(n),(n.scenes||[]).includes("kinshasa")&&(Se("start").style.backgroundImage="linear-gradient(rgba(10,20,30,.35),rgba(10,20,30,.35)),url(img/scenes/kinshasa.jpg)"),Ev()});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
