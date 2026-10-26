(()=>{var Dd=Object.defineProperty;var Rl=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Ud=(n,e)=>{for(var t in e)Dd(n,t,{get:e[t],enumerable:!0})};function fs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Df(n,e){return(n%e+e)%e}function fo(n,e,t){return(1-t)*n+t*e}function fh(n){return(n&n-1)===0&&n!==0}function Yo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Mu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uf(){let n=Gs("canvas");return n.style.display="block",n}function Us(n){n in ph||(ph[n]=!0,console.warn(n))}function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function go(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?na.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function xo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gi.fromArray(n,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Ao(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function $f(n,e,t,i,s,r,a,o){let c;if(e.side===Dt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ii,o),c===null)return null;zr.copy(o),zr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(zr);return l<t.near||l>t.far?null:{distance:l,point:zr.clone(),object:n}}function kr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Yi),n.getVertexPosition(c,$i),n.getVertexPosition(l,Zi);let h=$f(n,e,t,i,Yi,$i,Zi,Br);if(h){s&&(Nr.fromBufferAttribute(s,o),Or.fromBufferAttribute(s,c),Fr.fromBufferAttribute(s,l),h.uv=es.getInterpolation(Br,Yi,$i,Zi,Nr,Or,Fr,new xe)),r&&(Nr.fromBufferAttribute(r,o),Or.fromBufferAttribute(r,c),Fr.fromBufferAttribute(r,l),h.uv1=es.getInterpolation(Br,Yi,$i,Zi,Nr,Or,Fr,new xe),h.uv2=h.uv1),a&&(Ah.fromBufferAttribute(a,o),Rh.fromBufferAttribute(a,c),Ch.fromBufferAttribute(a,l),h.normal=es.getInterpolation(Br,Yi,$i,Zi,Ah,Rh,Ch,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};es.getNormal(Yi,$i,Zi,u.normal),h.face=u}return h}function hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=hs(n[t]);for(let s in i)e[s]=i[s]}return e}function Zf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Su(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}function Eu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function tp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}function Ng(n,e,t,i,s,r,a){let o=new Be(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let S=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?x(o,c):y&&y.isColor&&(x(y,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ca)?(h===void 0&&(h=new de(new Mt(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:hs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=nt.getTransfer(y.colorSpace)!==ct,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new de(new dt(2,2),new Hn({name:"BackgroundMaterial",uniforms:hs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(Vr,Su(n)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function Og(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(I,B,q,ee,K){let Y=!1;if(a){let ie=x(ee,q,B);l!==ie&&(l=ie,f(l.object)),Y=p(I,ee,q,K),Y&&S(I,ee,q,K)}else{let ie=B.wireframe===!0;(l.geometry!==ee.id||l.program!==q.id||l.wireframe!==ie)&&(l.geometry=ee.id,l.program=q.id,l.wireframe=ie,Y=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,k(I,B,q,ee),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,B,q){let ee=q.wireframe===!0,K=o[I.id];K===void 0&&(K={},o[I.id]=K);let Y=K[B.id];Y===void 0&&(Y={},K[B.id]=Y);let ie=Y[ee];return ie===void 0&&(ie=m(d()),Y[ee]=ie),ie}function m(I){let B=[],q=[],ee=[];for(let K=0;K<s;K++)B[K]=0,q[K]=0,ee[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:ee,object:I,attributes:{},index:null}}function p(I,B,q,ee){let K=l.attributes,Y=B.attributes,ie=0,se=q.getAttributes();for(let ue in se)if(se[ue].location>=0){let j=K[ue],le=Y[ue];if(le===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;ie++}return l.attributesNum!==ie||l.index!==ee}function S(I,B,q,ee){let K={},Y=B.attributes,ie=0,se=q.getAttributes();for(let ue in se)if(se[ue].location>=0){let j=Y[ue];j===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let le={};le.attribute=j,j&&j.data&&(le.data=j.data),K[ue]=le,ie++}l.attributes=K,l.attributesNum=ie,l.index=ee}function y(){let I=l.newAttributes;for(let B=0,q=I.length;B<q;B++)I[B]=0}function T(I){C(I,0)}function C(I,B){let q=l.newAttributes,ee=l.enabledAttributes,K=l.attributeDivisors;q[I]=1,ee[I]===0&&(n.enableVertexAttribArray(I),ee[I]=1),K[I]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),K[I]=B)}function A(){let I=l.newAttributes,B=l.enabledAttributes;for(let q=0,ee=B.length;q<ee;q++)B[q]!==I[q]&&(n.disableVertexAttribArray(q),B[q]=0)}function R(I,B,q,ee,K,Y,ie){ie===!0?n.vertexAttribIPointer(I,B,q,K,Y):n.vertexAttribPointer(I,B,q,ee,K,Y)}function k(I,B,q,ee){if(i.isWebGL2===!1&&(I.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let K=ee.attributes,Y=q.getAttributes(),ie=B.defaultAttributeValues;for(let se in Y){let ue=Y[se];if(ue.location>=0){let G=K[se];if(G===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let j=G.normalized,le=G.itemSize,oe=t.get(G);if(oe===void 0)continue;let Ee=oe.buffer,ne=oe.type,he=oe.bytesPerElement,re=i.isWebGL2===!0&&(ne===n.INT||ne===n.UNSIGNED_INT||G.gpuType===uu);if(G.isInterleavedBufferAttribute){let ve=G.data,z=ve.stride,Ue=G.offset;if(ve.isInstancedInterleavedBuffer){for(let ye=0;ye<ue.locationSize;ye++)C(ue.location+ye,ve.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ye=0;ye<ue.locationSize;ye++)T(ue.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ye=0;ye<ue.locationSize;ye++)R(ue.location+ye,le/ue.locationSize,ne,j,z*he,(Ue+le/ue.locationSize*ye)*he,re)}else{if(G.isInstancedBufferAttribute){for(let ve=0;ve<ue.locationSize;ve++)C(ue.location+ve,G.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ve=0;ve<ue.locationSize;ve++)T(ue.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ve=0;ve<ue.locationSize;ve++)R(ue.location+ve,le/ue.locationSize,ne,j,le*he,le/ue.locationSize*ve*he,re)}}else if(ie!==void 0){let j=ie[se];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ue.location,j);break;case 3:n.vertexAttrib3fv(ue.location,j);break;case 4:n.vertexAttrib4fv(ue.location,j);break;default:n.vertexAttrib1fv(ue.location,j)}}}}A()}function M(){H();for(let I in o){let B=o[I];for(let q in B){let ee=B[q];for(let K in ee)g(ee[K].object),delete ee[K];delete B[q]}delete o[I]}}function b(I){if(o[I.id]===void 0)return;let B=o[I.id];for(let q in B){let ee=B[q];for(let K in ee)g(ee[K].object),delete ee[K];delete B[q]}delete o[I.id]}function F(I){for(let B in o){let q=o[B];if(q[I.id]===void 0)continue;let ee=q[I.id];for(let K in ee)g(ee[K].object),delete ee[K];delete q[I.id]}}function H(){Q(),h=!0,l!==c&&(l=c,f(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:T,disableUnusedAttributes:A}}function Fg(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Bg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),C=y&&T,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function zg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new On,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:i,y=S*4,T=p.clippingState||null;c.value=T,T=h(g,d,y,f);for(let C=0;C!==y;++C)T[C]=t[C];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=f;y!==x;++y,T+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function kg(n){let e=new WeakMap;function t(a,o){return o===Go?a.mapping=os:o===Wo&&(a.mapping=cs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Go||o===Wo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ko(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Hg(n){let e=[],t=[],i=[],s=n,r=n-ts+1+Ph.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-ts?c=Ph[a-n+ts-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),y=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,k=A>2?0:-1,M=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];S.set(M,x*g*A),y.set(d,m*g*A);let b=[A,A,A,A,A,A];T.set(b,p*g*A)}let C=new Jt;C.setAttribute("position",new nn(S,x)),C.setAttribute("uv",new nn(y,m)),C.setAttribute("faceIndex",new nn(T,p)),e.push(C),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dh(n,e,t){let i=new zn(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Vg(n,e,t){let i=new Float32Array(Mi),s=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Uh(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Nh(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function Gg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Go||c===Wo,h=c===os||c===cs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new da(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new da(n));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Wg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Xg(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let y=0,T=S.length;y<T;y+=3){let C=S[y+0],A=S[y+1],R=S[y+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,T=S.length/3-1;y<T;y+=3){let C=y+0,A=y+1,R=y+2;d.push(C,A,A,R,R,C)}}else return;let m=new(Mu(d)?ca:oa)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function qg(n,e,t,i){let s=i.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,o,f*c),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let S=0;S<x;S++)p+=g[S];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Yg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $g(n,e){return n[0]-e[0]}function Zg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Jg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let S=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],k=0;S===!0&&(k=1),y===!0&&(k=2),T===!0&&(k=3);let M=h.attributes.position.count*k,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let F=new Float32Array(M*b*4*g),H=new sa(F,M,b,g);H.type=Qn,H.needsUpdate=!0;let Q=k*4;for(let B=0;B<g;B++){let q=C[B],ee=A[B],K=R[B],Y=M*b*4*B;for(let ie=0;ie<q.count;ie++){let se=ie*Q;S===!0&&(a.fromBufferAttribute(q,ie),F[Y+se+0]=a.x,F[Y+se+1]=a.y,F[Y+se+2]=a.z,F[Y+se+3]=0),y===!0&&(a.fromBufferAttribute(ee,ie),F[Y+se+4]=a.x,F[Y+se+5]=a.y,F[Y+se+6]=a.z,F[Y+se+7]=0),T===!0&&(a.fromBufferAttribute(K,ie),F[Y+se+8]=a.x,F[Y+se+9]=a.y,F[Y+se+10]=a.z,F[Y+se+11]=K.itemSize===4?a.w:1)}}x={count:g,texture:H,size:new xe(M,b)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<f;y++){let T=g[y];T[0]=y,T[1]=d[y]}g.sort(Zg);for(let y=0;y<8;y++)y<f&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort($g);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],C=T[0],A=T[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),m&&h.getAttribute("morphNormal"+y)!==m[C]&&h.setAttribute("morphNormal"+y,m[C]),s[y]=A,p+=A):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function jg(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function ps(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function La(n,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function n0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),Et(t,i)}}function i0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),Et(t,i)}}function s0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Bh.set(i),n.uniformMatrix4fv(this.addr,!1,Bh),Et(t,i)}}function r0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function a0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function o0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function c0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function l0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function u0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function d0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function f0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?wu:Tu;t.setTexture2D(e||r,s)}function p0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ru,s)}function m0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Cu,s)}function g0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Au,s)}function _0(n){switch(n){case 5126:return Kg;case 35664:return Qg;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(n,e){n.uniform1fv(this.addr,e)}function v0(n,e){let t=ps(e,this.size,2);n.uniform2fv(this.addr,t)}function y0(n,e){let t=ps(e,this.size,3);n.uniform3fv(this.addr,t)}function M0(n,e){let t=ps(e,this.size,4);n.uniform4fv(this.addr,t)}function b0(n,e){let t=ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S0(n,e){let t=ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function E0(n,e){let t=ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T0(n,e){n.uniform1iv(this.addr,e)}function w0(n,e){n.uniform2iv(this.addr,e)}function A0(n,e){n.uniform3iv(this.addr,e)}function R0(n,e){n.uniform4iv(this.addr,e)}function C0(n,e){n.uniform1uiv(this.addr,e)}function P0(n,e){n.uniform2uiv(this.addr,e)}function L0(n,e){n.uniform3uiv(this.addr,e)}function I0(n,e){n.uniform4uiv(this.addr,e)}function D0(n,e,t){let i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tu,r[a])}function U0(n,e,t){let i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ru,r[a])}function N0(n,e,t){let i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cu,r[a])}function O0(n,e,t){let i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Au,r[a])}function F0(n){switch(n){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return M0;case 35674:return b0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return w0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return O0}}function Hh(n,e){n.seq.push(e),n.map[e.id]=e}function B0(n,e,t){let i=n.name,s=i.length;for(No.lastIndex=0;;){let r=No.exec(i),a=No.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hh(t,l===void 0?new Qo(o,n,e):new ec(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new tc(o),Hh(t,u)),t=u}}}function Vh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function H0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function V0(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===ea&&t===Qr?i="LinearDisplayP3ToLinearSRGB":e===Qr&&t===ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Bn:case Pa:return[i,"LinearTransferOETF"];case it:case Nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+H0(n.getShaderSource(e),a)}else return s}function G0(n,e){let t=V0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function W0(n,e){let t;switch(e){case lf:t="Linear";break;case hf:t="Reinhard";break;case uf:t="OptimizedCineon";break;case Dc:t="ACESFilmic";break;case ff:t="AgX";break;case df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function X0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function q0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function Y0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ns(n){return n!==""}function Wh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function nc(n){return n.replace(Z0,j0)}function j0(n,e){let t=We[e];if(t===void 0){let i=J0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}function qh(n){return n.replace(K0,Q0)}function Q0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case cs:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===cs&&(e="ENVMAP_MODE_REFRACTION"),e}function i_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lu:e="ENVMAP_BLENDING_MULTIPLY";break;case of:e="ENVMAP_BLENDING_MIX";break;case cf:e="ENVMAP_BLENDING_ADD";break}return e}function s_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function r_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=e_(t),l=t_(t),h=n_(t),u=i_(t),d=s_(t),f=t.isWebGL2?"":X0(t),g=q0(t),x=Y0(r),m=s.createProgram(),p,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ns).join(`
`),p.length>0&&(p+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ns).join(`
`),S.length>0&&(S+=`
`)):(p=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),S=[f,Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?We.tonemapping_pars_fragment:"",t.toneMapping!==ti?W0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,G0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=nc(a),a=Wh(a,t),a=Xh(a,t),o=nc(o),o=Wh(o,t),o=Xh(o,t),a=qh(a),o=qh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=y+p+a,C=y+S+o,A=Vh(s,s.VERTEX_SHADER,T),R=Vh(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(H){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(R).trim(),q=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,R);else{let K=Gh(s,A,"vertex"),Y=Gh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+K+`
`+Y)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||B==="")&&(ee=!1);ee&&(H.diagnostics={runnable:q,programLog:Q,vertexShader:{log:I,prefix:p},fragmentShader:{log:B,prefix:S}})}s.deleteShader(A),s.deleteShader(R),M=new as(s,m),b=$0(s,m)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,z0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}function o_(n,e,t,i,s,r,a){let o=new aa,c=new ic,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,b,F,H,Q){let I=H.fog,B=Q.geometry,q=M.isMeshStandardMaterial?H.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),K=ee&&ee.mapping===Ca?ee.image.height:null,Y=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=ie!==void 0?ie.length:0,ue=0;B.morphAttributes.position!==void 0&&(ue=1),B.morphAttributes.normal!==void 0&&(ue=2),B.morphAttributes.color!==void 0&&(ue=3);let G,j,le,oe;if(Y){let Ht=Mn[Y];G=Ht.vertexShader,j=Ht.fragmentShader}else G=M.vertexShader,j=M.fragmentShader,c.update(M),le=c.getVertexShaderID(M),oe=c.getFragmentShaderID(M);let Ee=n.getRenderTarget(),ne=Q.isInstancedMesh===!0,he=Q.isBatchedMesh===!0,re=!!M.map,ve=!!M.matcap,z=!!ee,Ue=!!M.aoMap,ye=!!M.lightMap,Le=!!M.bumpMap,Z=!!M.normalMap,N=!!M.displacementMap,P=!!M.emissiveMap,_=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,J=M.clearcoat>0,$=M.iridescence>0,te=M.sheen>0,Me=M.transmission>0,ce=U&&!!M.anisotropyMap,_e=J&&!!M.clearcoatMap,we=J&&!!M.clearcoatNormalMap,Pe=J&&!!M.clearcoatRoughnessMap,ae=$&&!!M.iridescenceMap,tt=$&&!!M.iridescenceThicknessMap,Ze=te&&!!M.sheenColorMap,ze=te&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Te=!!M.specularColorMap,Ge=!!M.specularIntensityMap,et=Me&&!!M.transmissionMap,gt=Me&&!!M.thicknessMap,qe=!!M.gradientMap,fe=!!M.alphaMap,D=M.alphaTest>0,me=!!M.alphaHash,ge=!!M.extensions,Oe=!!B.attributes.uv1,De=!!B.attributes.uv2,st=!!B.attributes.uv3,rt=ti;return M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:j,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:he,instancing:ne,instancingColor:ne&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Bn,map:re,matcap:ve,envMap:z,envMapMode:z&&ee.mapping,envMapCubeUVHeight:K,aoMap:Ue,lightMap:ye,bumpMap:Le,normalMap:Z,displacementMap:d&&N,emissiveMap:P,normalMapObjectSpace:Z&&M.normalMapType===Tf,normalMapTangentSpace:Z&&M.normalMapType===vu,metalnessMap:_,roughnessMap:v,anisotropy:U,anisotropyMap:ce,clearcoat:J,clearcoatMap:_e,clearcoatNormalMap:we,clearcoatRoughnessMap:Pe,iridescence:$,iridescenceMap:ae,iridescenceThicknessMap:tt,sheen:te,sheenColorMap:Ze,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:Te,specularIntensityMap:Ge,transmission:Me,transmissionMap:et,thicknessMap:gt,gradientMap:qe,opaque:M.transparent===!1&&M.blending===ss,alphaMap:fe,alphaTest:D,alphaHash:me,combine:M.combine,mapUv:re&&x(M.map.channel),aoMapUv:Ue&&x(M.aoMap.channel),lightMapUv:ye&&x(M.lightMap.channel),bumpMapUv:Le&&x(M.bumpMap.channel),normalMapUv:Z&&x(M.normalMap.channel),displacementMapUv:N&&x(M.displacementMap.channel),emissiveMapUv:P&&x(M.emissiveMap.channel),metalnessMapUv:_&&x(M.metalnessMap.channel),roughnessMapUv:v&&x(M.roughnessMap.channel),anisotropyMapUv:ce&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(M.sheenRoughnessMap.channel),specularMapUv:Ie&&x(M.specularMap.channel),specularColorMapUv:Te&&x(M.specularColorMap.channel),specularIntensityMapUv:Ge&&x(M.specularIntensityMap.channel),transmissionMapUv:et&&x(M.transmissionMap.channel),thicknessMapUv:gt&&x(M.thicknessMap.channel),alphaMapUv:fe&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Z||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:De,vertexUv3s:st,pointsUvs:Q.isPoints===!0&&!!B.attributes.uv&&(re||fe),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===It,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)b.push(F),b.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(S(b,M),y(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function T(M){let b=g[M.type],F;if(b){let H=Mn[b];F=Jf.clone(H.uniforms)}else F=M.uniforms;return F}function C(M,b){let F;for(let H=0,Q=l.length;H<Q;H++){let I=l[H];if(I.cacheKey===b){F=I,++F.usedTimes;break}}return F===void 0&&(F=new r_(n,b,M,r),l.push(F)),F}function A(M){if(--M.usedTimes===0){let b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:k}}function c_(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function l_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||l_),i.length>1&&i.sort(d||$h),s.length>1&&s.sort(d||$h)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function h_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Zh,n.set(i,[a])):s>=r.length?(a=new Zh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function u_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function d_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function p_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m_(n,e){let t=new u_,i=d_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new lt,o=new lt;function c(h,u){let d=0,f=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let x=0,m=0,p=0,S=0,y=0,T=0,C=0,A=0,R=0,k=0,M=0;h.sort(p_);let b=u===!0?Math.PI:1;for(let H=0,Q=h.length;H<Q;H++){let I=h[H],B=I.color,q=I.intensity,ee=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*q*b,f+=B.g*q*b,g+=B.b*q*b;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(I.sh.coefficients[Y],q);M++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){let ie=I.shadow,se=i.get(I);se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,s.directionalShadow[x]=se,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=I.shadow.matrix,T++}s.directional[x]=Y,x++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(q*b),Y.distance=ee,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,s.spot[p]=Y;let ie=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,ie.updateMatrices(I),I.castShadow&&k++),s.spotLightMatrix[p]=ie.matrix,I.castShadow){let se=i.get(I);se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,s.spotShadow[p]=se,s.spotShadowMap[p]=K,A++}p++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=Y,S++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*b),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let ie=I.shadow,se=i.get(I);se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,se.shadowCameraNear=ie.camera.near,se.shadowCameraFar=ie.camera.far,s.pointShadow[m]=se,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=I.shadow.matrix,C++}s.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(q*b),Y.groundColor.copy(I.groundColor).multiplyScalar(q*b),s.hemi[y]=Y,y++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==T||F.numPointShadows!==C||F.numSpotShadows!==A||F.numSpotMaps!==R||F.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-k,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,F.directionalLength=x,F.pointLength=m,F.spotLength=p,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=T,F.numPointShadows=C,F.numSpotShadows=A,F.numSpotMaps=R,F.numLightProbes=M,s.version=f_++)}function l(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){let T=h[S];if(T.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(T.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(T.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Jh(n,e){let t=new m_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function g_(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Jh(n,e),t.set(r,[c])):a>=o.length?(c=new Jh(n,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:i,dispose:s}}function v_(n,e,t){let i=new Ws,s=new xe,r=new xe,a=new ut,o=new rc({depthPacking:Ef}),c=new ac,l={},h=t.maxTextureSize,u={[ii]:Dt,[Dt]:ii,[It]:It},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:__,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(A,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Q=p!==Nn&&this.type===Nn,I=p===Nn&&this.type!==Nn;for(let B=0,q=A.length;B<q;B++){let ee=A[B],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let Y=K.getFrameExtents();if(s.multiply(Y),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,K.mapSize.y=r.y)),K.map===null||Q===!0||I===!0){let se=this.type!==Nn?{minFilter:Wt,magFilter:Wt}:{};K.map!==null&&K.map.dispose(),K.map=new zn(s.x,s.y,se),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let ie=K.getViewportCount();for(let se=0;se<ie;se++){let ue=K.getViewport(se);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),H.viewport(a),K.updateMatrices(ee,se),i=K.getFrustum(),T(R,k,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Nn&&S(K,k),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,F)};function S(A,R){let k=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,k,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,k,f,x,null)}function y(A,R,k,M){let b=null,F=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)b=F;else if(b=k.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=b.uuid,Q=R.uuid,I=l[H];I===void 0&&(I={},l[H]=I);let B=I[Q];B===void 0&&(B=b.clone(),I[Q]=B,R.addEventListener("dispose",C)),b=B}if(b.visible=R.visible,b.wireframe=R.wireframe,M===Nn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=n.properties.get(b);H.light=k}return b}function T(A,R,k,M,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Nn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let Q=e.update(A),I=A.material;if(Array.isArray(I)){let B=Q.groups;for(let q=0,ee=B.length;q<ee;q++){let K=B[q],Y=I[K.materialIndex];if(Y&&Y.visible){let ie=y(A,Y,M,b);A.onBeforeShadow(n,A,R,k,Q,ie,K),n.renderBufferDirect(k,null,Q,ie,A,K),A.onAfterShadow(n,A,R,k,Q,ie,K)}}}else if(I.visible){let B=y(A,I,M,b);A.onBeforeShadow(n,A,R,k,Q,B,null),n.renderBufferDirect(k,null,Q,B,A,null),A.onAfterShadow(n,A,R,k,Q,B,null)}}let H=A.children;for(let Q=0,I=H.length;Q<I;Q++)T(H[Q],R,k,M,b)}function C(A){A.target.removeEventListener("dispose",C);for(let k in l){let M=l[k],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function y_(n,e,t){let i=t.isWebGL2;function s(){let D=!1,me=new ut,ge=null,Oe=new ut(0,0,0,0);return{setMask:function(De){ge!==De&&!D&&(n.colorMask(De,De,De,De),ge=De)},setLocked:function(De){D=De},setClear:function(De,st,rt,wt,Ht){Ht===!0&&(De*=wt,st*=wt,rt*=wt),me.set(De,st,rt,wt),Oe.equals(me)===!1&&(n.clearColor(De,st,rt,wt),Oe.copy(me))},reset:function(){D=!1,ge=null,Oe.set(-1,0,0,0)}}}function r(){let D=!1,me=null,ge=null,Oe=null;return{setTest:function(De){De?he(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(De){me!==De&&!D&&(n.depthMask(De),me=De)},setFunc:function(De){if(ge!==De){switch(De){case Qd:n.depthFunc(n.NEVER);break;case ef:n.depthFunc(n.ALWAYS);break;case tf:n.depthFunc(n.LESS);break;case Zr:n.depthFunc(n.LEQUAL);break;case nf:n.depthFunc(n.EQUAL);break;case sf:n.depthFunc(n.GEQUAL);break;case rf:n.depthFunc(n.GREATER);break;case af:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=De}},setLocked:function(De){D=De},setClear:function(De){Oe!==De&&(n.clearDepth(De),Oe=De)},reset:function(){D=!1,me=null,ge=null,Oe=null}}}function a(){let D=!1,me=null,ge=null,Oe=null,De=null,st=null,rt=null,wt=null,Ht=null;return{setTest:function(at){D||(at?he(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(at){me!==at&&!D&&(n.stencilMask(at),me=at)},setFunc:function(at,Vt,yn){(ge!==at||Oe!==Vt||De!==yn)&&(n.stencilFunc(at,Vt,yn),ge=at,Oe=Vt,De=yn)},setOp:function(at,Vt,yn){(st!==at||rt!==Vt||wt!==yn)&&(n.stencilOp(at,Vt,yn),st=at,rt=Vt,wt=yn)},setLocked:function(at){D=at},setClear:function(at){Ht!==at&&(n.clearStencil(at),Ht=at)},reset:function(){D=!1,me=null,ge=null,Oe=null,De=null,st=null,rt=null,wt=null,Ht=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,S=null,y=null,T=null,C=null,A=null,R=null,k=null,M=new Be(0,0,0),b=0,F=!1,H=null,Q=null,I=null,B=null,q=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,Y=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=Y>=2);let se=null,ue={},G=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),le=new ut().fromArray(G),oe=new ut().fromArray(j);function Ee(D,me,ge,Oe){let De=new Uint8Array(4),st=n.createTexture();n.bindTexture(D,st),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<ge;rt++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(me+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return st}let ne={};ne[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ne[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(n.DEPTH_TEST),c.setFunc(Zr),P(!1),_(Cl),he(n.CULL_FACE),Z(ei);function he(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function re(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function ve(D,me){return f[D]!==me?(n.bindFramebuffer(D,me),f[D]=me,i&&(D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function z(D,me){let ge=x,Oe=!1;if(D)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),D.isWebGLMultipleRenderTargets){let De=D.texture;if(ge.length!==De.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=De.length;st<rt;st++)ge[st]=n.COLOR_ATTACHMENT0+st;ge.length=De.length,Oe=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Oe=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ue(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let ye={[yi]:n.FUNC_ADD,[Bd]:n.FUNC_SUBTRACT,[zd]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[Dl]=n.MIN,ye[Ul]=n.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(ye[Dl]=D.MIN_EXT,ye[Ul]=D.MAX_EXT)}let Le={[kd]:n.ZERO,[Hd]:n.ONE,[Vd]:n.SRC_COLOR,[Ho]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[qd]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[Vo]:n.ONE_MINUS_SRC_ALPHA,[Yd]:n.ONE_MINUS_DST_COLOR,[Xd]:n.ONE_MINUS_DST_ALPHA,[Zd]:n.CONSTANT_COLOR,[Jd]:n.ONE_MINUS_CONSTANT_COLOR,[jd]:n.CONSTANT_ALPHA,[Kd]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(D,me,ge,Oe,De,st,rt,wt,Ht,at){if(D===ei){p===!0&&(re(n.BLEND),p=!1);return}if(p===!1&&(he(n.BLEND),p=!0),D!==Fd){if(D!==S||at!==F){if((y!==yi||A!==yi)&&(n.blendEquation(n.FUNC_ADD),y=yi,A=yi),at)switch(D){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.ONE,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,C=null,R=null,k=null,M.set(0,0,0),b=0,S=D,F=at}return}De=De||me,st=st||ge,rt=rt||Oe,(me!==y||De!==A)&&(n.blendEquationSeparate(ye[me],ye[De]),y=me,A=De),(ge!==T||Oe!==C||st!==R||rt!==k)&&(n.blendFuncSeparate(Le[ge],Le[Oe],Le[st],Le[rt]),T=ge,C=Oe,R=st,k=rt),(wt.equals(M)===!1||Ht!==b)&&(n.blendColor(wt.r,wt.g,wt.b,Ht),M.copy(wt),b=Ht),S=D,F=!1}function N(D,me){D.side===It?re(n.CULL_FACE):he(n.CULL_FACE);let ge=D.side===Dt;me&&(ge=!ge),P(ge),D.blending===ss&&D.transparent===!1?Z(ei):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let Oe=D.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),U(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function P(D){H!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),H=D)}function _(D){D!==Nd?(he(n.CULL_FACE),D!==Q&&(D===Cl?n.cullFace(n.BACK):D===Od?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),Q=D}function v(D){D!==I&&(K&&n.lineWidth(D),I=D)}function U(D,me,ge){D?(he(n.POLYGON_OFFSET_FILL),(B!==me||q!==ge)&&(n.polygonOffset(me,ge),B=me,q=ge)):re(n.POLYGON_OFFSET_FILL)}function J(D){D?he(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function $(D){D===void 0&&(D=n.TEXTURE0+ee-1),se!==D&&(n.activeTexture(D),se=D)}function te(D,me,ge){ge===void 0&&(se===null?ge=n.TEXTURE0+ee-1:ge=se);let Oe=ue[ge];Oe===void 0&&(Oe={type:void 0,texture:void 0},ue[ge]=Oe),(Oe.type!==D||Oe.texture!==me)&&(se!==ge&&(n.activeTexture(ge),se=ge),n.bindTexture(D,me||ne[D]),Oe.type=D,Oe.texture=me)}function Me(){let D=ue[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){le.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function et(D){oe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function gt(D,me){let ge=u.get(me);ge===void 0&&(ge=new WeakMap,u.set(me,ge));let Oe=ge.get(D);Oe===void 0&&(Oe=n.getUniformBlockIndex(me,D.name),ge.set(D,Oe))}function qe(D,me){let Oe=u.get(me).get(D);h.get(me)!==Oe&&(n.uniformBlockBinding(me,Oe,D.__bindingPointIndex),h.set(me,Oe))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},se=null,ue={},f={},g=new WeakMap,x=[],m=null,p=!1,S=null,y=null,T=null,C=null,A=null,R=null,k=null,M=new Be(0,0,0),b=0,F=!1,H=null,Q=null,I=null,B=null,q=null,le.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:he,disable:re,bindFramebuffer:ve,drawBuffers:z,useProgram:Ue,setBlending:Z,setMaterial:N,setFlipSided:P,setCullFace:_,setLineWidth:v,setPolygonOffset:U,setScissorTest:J,activeTexture:$,bindTexture:te,unbindTexture:Me,compressedTexImage2D:ce,compressedTexImage3D:_e,texImage2D:Ie,texImage3D:Te,updateUBOMapping:gt,uniformBlockBinding:qe,texStorage2D:Ze,texStorage3D:ze,texSubImage2D:we,texSubImage3D:Pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:tt,scissor:Ge,viewport:et,reset:fe}}function M_(n,e,t,i,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,v){return f?new OffscreenCanvas(_,v):Gs("canvas")}function x(_,v,U,J){let $=1;if((_.width>J||_.height>J)&&($=J/Math.max(_.width,_.height)),$<1||v===!0)if(typeof HTMLImageElement!="undefined"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&_ instanceof ImageBitmap){let te=v?Yo:Math.floor,Me=te($*_.width),ce=te($*_.height);u===void 0&&(u=g(Me,ce));let _e=U?g(Me,ce):u;return _e.width=Me,_e.height=ce,_e.getContext("2d").drawImage(_,0,0,Me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+Me+"x"+ce+")."),_e}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function m(_){return fh(_.width)&&fh(_.height)}function p(_){return o?!1:_.wrapS!==mn||_.wrapT!==mn||_.minFilter!==Wt&&_.minFilter!==cn}function S(_,v){return _.generateMipmaps&&v&&_.minFilter!==Wt&&_.minFilter!==cn}function y(_){n.generateMipmap(_)}function T(_,v,U,J,$=!1){if(o===!1)return v;if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let te=v;if(v===n.RED&&(U===n.FLOAT&&(te=n.R32F),U===n.HALF_FLOAT&&(te=n.R16F),U===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.R8UI),U===n.UNSIGNED_SHORT&&(te=n.R16UI),U===n.UNSIGNED_INT&&(te=n.R32UI),U===n.BYTE&&(te=n.R8I),U===n.SHORT&&(te=n.R16I),U===n.INT&&(te=n.R32I)),v===n.RG&&(U===n.FLOAT&&(te=n.RG32F),U===n.HALF_FLOAT&&(te=n.RG16F),U===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){let Me=$?Kr:nt.getTransfer(J);U===n.FLOAT&&(te=n.RGBA32F),U===n.HALF_FLOAT&&(te=n.RGBA16F),U===n.UNSIGNED_BYTE&&(te=Me===ct?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(_,v,U){return S(_,U)===!0||_.isFramebufferTexture&&_.minFilter!==Wt&&_.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?v.mipmaps.length:1}function A(_){return _===Wt||_===Nl||_===so?n.NEAREST:n.LINEAR}function R(_){let v=_.target;v.removeEventListener("dispose",R),M(v),v.isVideoTexture&&h.delete(v)}function k(_){let v=_.target;v.removeEventListener("dispose",k),F(v)}function M(_){let v=i.get(_);if(v.__webglInit===void 0)return;let U=_.source,J=d.get(U);if(J){let $=J[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(_),Object.keys(J).length===0&&d.delete(U)}i.remove(_)}function b(_){let v=i.get(_);n.deleteTexture(v.__webglTexture);let U=_.source,J=d.get(U);delete J[v.__cacheKey],a.memory.textures--}function F(_){let v=_.texture,U=i.get(_),J=i.get(v);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(U.__webglFramebuffer[$]))for(let te=0;te<U.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(U.__webglFramebuffer[$][te]);else n.deleteFramebuffer(U.__webglFramebuffer[$]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[$])}else{if(Array.isArray(U.__webglFramebuffer))for(let $=0;$<U.__webglFramebuffer.length;$++)n.deleteFramebuffer(U.__webglFramebuffer[$]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let $=0;$<U.__webglColorRenderbuffer.length;$++)U.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let $=0,te=v.length;$<te;$++){let Me=i.get(v[$]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(v[$])}i.remove(v),i.remove(_)}let H=0;function Q(){H=0}function I(){let _=H;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),H+=1,_}function B(_){let v=[];return v.push(_.wrapS),v.push(_.wrapT),v.push(_.wrapR||0),v.push(_.magFilter),v.push(_.minFilter),v.push(_.anisotropy),v.push(_.internalFormat),v.push(_.format),v.push(_.type),v.push(_.generateMipmaps),v.push(_.premultiplyAlpha),v.push(_.flipY),v.push(_.unpackAlignment),v.push(_.colorSpace),v.join()}function q(_,v){let U=i.get(_);if(_.isVideoTexture&&N(_),_.isRenderTargetTexture===!1&&_.version>0&&U.__version!==_.version){let J=_.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(U,_,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function ee(_,v){let U=i.get(_);if(_.version>0&&U.__version!==_.version){le(U,_,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function K(_,v){let U=i.get(_);if(_.version>0&&U.__version!==_.version){le(U,_,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function Y(_,v){let U=i.get(_);if(_.version>0&&U.__version!==_.version){oe(U,_,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let ie={[zs]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[ks]:n.MIRRORED_REPEAT},se={[Wt]:n.NEAREST,[Nl]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[pf]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},ue={[wf]:n.NEVER,[If]:n.ALWAYS,[Af]:n.LESS,[yu]:n.LEQUAL,[Rf]:n.EQUAL,[Lf]:n.GEQUAL,[Cf]:n.GREATER,[Pf]:n.NOTEQUAL};function G(_,v,U){if(U?(n.texParameteri(_,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,ie[v.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,se[v.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,se[v.minFilter])):(n.texParameteri(_,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(_,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==mn||v.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(_,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(_,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Wt&&v.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Wt||v.minFilter!==so&&v.minFilter!==Hs||v.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(_,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function j(_,v){let U=!1;_.__webglInit===void 0&&(_.__webglInit=!0,v.addEventListener("dispose",R));let J=v.source,$=d.get(J);$===void 0&&($={},d.set(J,$));let te=B(v);if(te!==_.__cacheKey){$[te]===void 0&&($[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[te].usedTimes++;let Me=$[_.__cacheKey];Me!==void 0&&($[_.__cacheKey].usedTimes--,Me.usedTimes===0&&b(v)),_.__cacheKey=te,_.__webglTexture=$[te].texture}return U}function le(_,v,U){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);let $=j(_,v),te=v.source;t.bindTexture(J,_.__webglTexture,n.TEXTURE0+U);let Me=i.get(te);if(te.version!==Me.__version||$===!0){t.activeTexture(n.TEXTURE0+U);let ce=nt.getPrimaries(nt.workingColorSpace),_e=v.colorSpace===ln?null:nt.getPrimaries(v.colorSpace),we=v.colorSpace===ln||ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Pe=p(v)&&m(v.image)===!1,ae=x(v.image,Pe,!1,s.maxTextureSize);ae=P(v,ae);let tt=m(ae)||o,Ze=r.convert(v.format,v.colorSpace),ze=r.convert(v.type),Ie=T(v.internalFormat,Ze,ze,v.colorSpace,v.isVideoTexture);G(J,v,tt);let Te,Ge=v.mipmaps,et=o&&v.isVideoTexture!==!0&&Ie!==_u,gt=Me.__version===void 0||$===!0,qe=C(v,ae,tt);if(v.isDepthTexture)Ie=n.DEPTH_COMPONENT,o?v.type===Qn?Ie=n.DEPTH_COMPONENT32F:v.type===Kn?Ie=n.DEPTH_COMPONENT24:v.type===bi?Ie=n.DEPTH24_STENCIL8:Ie=n.DEPTH_COMPONENT16:v.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Si&&Ie===n.DEPTH_COMPONENT&&v.type!==Uc&&v.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Kn,ze=r.convert(v.type)),v.format===ls&&Ie===n.DEPTH_COMPONENT&&(Ie=n.DEPTH_STENCIL,v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bi,ze=r.convert(v.type))),gt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Ze,ze,null));else if(v.isDataTexture)if(Ge.length>0&&tt){et&&gt&&t.texStorage2D(n.TEXTURE_2D,qe,Ie,Ge[0].width,Ge[0].height);for(let fe=0,D=Ge.length;fe<D;fe++)Te=Ge[fe],et?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Te.width,Te.height,Ze,ze,Te.data):t.texImage2D(n.TEXTURE_2D,fe,Ie,Te.width,Te.height,0,Ze,ze,Te.data);v.generateMipmaps=!1}else et?(gt&&t.texStorage2D(n.TEXTURE_2D,qe,Ie,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Ze,ze,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Ze,ze,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Ie,Ge[0].width,Ge[0].height,ae.depth);for(let fe=0,D=Ge.length;fe<D;fe++)Te=Ge[fe],v.format!==gn?Ze!==null?et?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,ae.depth,Ze,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ie,Te.width,Te.height,ae.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,ae.depth,Ze,ze,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ie,Te.width,Te.height,ae.depth,0,Ze,ze,Te.data)}else{et&&gt&&t.texStorage2D(n.TEXTURE_2D,qe,Ie,Ge[0].width,Ge[0].height);for(let fe=0,D=Ge.length;fe<D;fe++)Te=Ge[fe],v.format!==gn?Ze!==null?et?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Te.width,Te.height,Ze,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Te.width,Te.height,Ze,ze,Te.data):t.texImage2D(n.TEXTURE_2D,fe,Ie,Te.width,Te.height,0,Ze,ze,Te.data)}else if(v.isDataArrayTexture)et?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Ie,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ze,ze,ae.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,Ze,ze,ae.data);else if(v.isData3DTexture)et?(gt&&t.texStorage3D(n.TEXTURE_3D,qe,Ie,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ze,ze,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,Ze,ze,ae.data);else if(v.isFramebufferTexture){if(gt)if(et)t.texStorage2D(n.TEXTURE_2D,qe,Ie,ae.width,ae.height);else{let fe=ae.width,D=ae.height;for(let me=0;me<qe;me++)t.texImage2D(n.TEXTURE_2D,me,Ie,fe,D,0,Ze,ze,null),fe>>=1,D>>=1}}else if(Ge.length>0&&tt){et&&gt&&t.texStorage2D(n.TEXTURE_2D,qe,Ie,Ge[0].width,Ge[0].height);for(let fe=0,D=Ge.length;fe<D;fe++)Te=Ge[fe],et?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ze,ze,Te):t.texImage2D(n.TEXTURE_2D,fe,Ie,Ze,ze,Te);v.generateMipmaps=!1}else et?(gt&&t.texStorage2D(n.TEXTURE_2D,qe,Ie,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ze,ze,ae)):t.texImage2D(n.TEXTURE_2D,0,Ie,Ze,ze,ae);S(v,tt)&&y(J),Me.__version=te.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function oe(_,v,U){if(v.image.length!==6)return;let J=j(_,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+U);let te=i.get($);if($.version!==te.__version||J===!0){t.activeTexture(n.TEXTURE0+U);let Me=nt.getPrimaries(nt.workingColorSpace),ce=v.colorSpace===ln?null:nt.getPrimaries(v.colorSpace),_e=v.colorSpace===ln||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,Pe=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let fe=0;fe<6;fe++)!we&&!Pe?ae[fe]=x(v.image[fe],!1,!0,s.maxCubemapSize):ae[fe]=Pe?v.image[fe].image:v.image[fe],ae[fe]=P(v,ae[fe]);let tt=ae[0],Ze=m(tt)||o,ze=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),Te=T(v.internalFormat,ze,Ie,v.colorSpace),Ge=o&&v.isVideoTexture!==!0,et=te.__version===void 0||J===!0,gt=C(v,tt,Ze);G(n.TEXTURE_CUBE_MAP,v,Ze);let qe;if(we){Ge&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Te,tt.width,tt.height);for(let fe=0;fe<6;fe++){qe=ae[fe].mipmaps;for(let D=0;D<qe.length;D++){let me=qe[D];v.format!==gn?ze!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,me.width,me.height,ze,Ie,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Te,me.width,me.height,0,ze,Ie,me.data)}}}else{qe=v.mipmaps,Ge&&et&&(qe.length>0&&gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Te,ae[0].width,ae[0].height));for(let fe=0;fe<6;fe++)if(Pe){Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ae[fe].width,ae[fe].height,ze,Ie,ae[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Te,ae[fe].width,ae[fe].height,0,ze,Ie,ae[fe].data);for(let D=0;D<qe.length;D++){let ge=qe[D].image[fe].image;Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,ge.width,ge.height,ze,Ie,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Te,ge.width,ge.height,0,ze,Ie,ge.data)}}else{Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze,Ie,ae[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Te,ze,Ie,ae[fe]);for(let D=0;D<qe.length;D++){let me=qe[D];Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,ze,Ie,me.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Te,ze,Ie,me.image[fe])}}}S(v,Ze)&&y(n.TEXTURE_CUBE_MAP),te.__version=$.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Ee(_,v,U,J,$,te){let Me=r.convert(U.format,U.colorSpace),ce=r.convert(U.type),_e=T(U.internalFormat,Me,ce,U.colorSpace);if(!i.get(v).__hasExternalTextures){let Pe=Math.max(1,v.width>>te),ae=Math.max(1,v.height>>te);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,te,_e,Pe,ae,v.depth,0,Me,ce,null):t.texImage2D($,te,_e,Pe,ae,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),Z(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,i.get(U).__webglTexture,0,Le(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,$,i.get(U).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(_,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,_),v.depthBuffer&&!v.stencilBuffer){let J=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||Z(v)){let $=v.depthTexture;$&&$.isDepthTexture&&($.type===Qn?J=n.DEPTH_COMPONENT32F:$.type===Kn&&(J=n.DEPTH_COMPONENT24));let te=Le(v);Z(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,J,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,J,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,_)}else if(v.depthBuffer&&v.stencilBuffer){let J=Le(v);U&&Z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):Z(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,_)}else{let J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<J.length;$++){let te=J[$],Me=r.convert(te.format,te.colorSpace),ce=r.convert(te.type),_e=T(te.internalFormat,Me,ce,te.colorSpace),we=Le(v);U&&Z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,_e,v.width,v.height):Z(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(_,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let J=i.get(v.depthTexture).__webglTexture,$=Le(v);if(v.depthTexture.format===Si)Z(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===ls)Z(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function re(_){let v=i.get(_),U=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,_)}else if(U){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=n.createRenderbuffer(),ne(v.__webglDepthbuffer[J],_,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ne(v.__webglDepthbuffer,_,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(_,v,U){let J=i.get(_);v!==void 0&&Ee(J.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&re(_)}function z(_){let v=_.texture,U=i.get(_),J=i.get(v);_.addEventListener("dispose",k),_.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,a.memory.textures++);let $=_.isWebGLCubeRenderTarget===!0,te=_.isWebGLMultipleRenderTargets===!0,Me=m(_)||o;if($){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let _e=0;_e<v.mipmaps.length;_e++)U.__webglFramebuffer[ce][_e]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(te)if(s.drawBuffers){let ce=_.texture;for(let _e=0,we=ce.length;_e<we;_e++){let Pe=i.get(ce[_e]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&Z(_)===!1){let ce=te?v:[v];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){let we=ce[_e];U.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[_e]);let Pe=r.convert(we.format,we.colorSpace),ae=r.convert(we.type),tt=T(we.internalFormat,Pe,ae,we.colorSpace,_.isXRRenderTarget===!0),Ze=Le(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,tt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,U.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(U.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),G(n.TEXTURE_CUBE_MAP,v,Me);for(let ce=0;ce<6;ce++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Ee(U.__webglFramebuffer[ce][_e],_,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else Ee(U.__webglFramebuffer[ce],_,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(v,Me)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let ce=_.texture;for(let _e=0,we=ce.length;_e<we;_e++){let Pe=ce[_e],ae=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),G(n.TEXTURE_2D,Pe,Me),Ee(U.__webglFramebuffer,_,Pe,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),S(Pe,Me)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?ce=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,J.__webglTexture),G(ce,v,Me),o&&v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Ee(U.__webglFramebuffer[_e],_,v,n.COLOR_ATTACHMENT0,ce,_e);else Ee(U.__webglFramebuffer,_,v,n.COLOR_ATTACHMENT0,ce,0);S(v,Me)&&y(ce),t.unbindTexture()}_.depthBuffer&&re(_)}function Ue(_){let v=m(_)||o,U=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let J=0,$=U.length;J<$;J++){let te=U[J];if(S(te,v)){let Me=_.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(te).__webglTexture;t.bindTexture(Me,ce),y(Me),t.unbindTexture()}}}function ye(_){if(o&&_.samples>0&&Z(_)===!1){let v=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],U=_.width,J=_.height,$=n.COLOR_BUFFER_BIT,te=[],Me=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(_),_e=_.isWebGLMultipleRenderTargets===!0;if(_e)for(let we=0;we<v.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<v.length;we++){te.push(n.COLOR_ATTACHMENT0+we),_.depthBuffer&&te.push(Me);let Pe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Pe===!1&&(_.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),_e){let ae=i.get(v[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,U,J,0,0,U,J,$,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let we=0;we<v.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);let Pe=i.get(v[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(_){return Math.min(s.maxSamples,_.samples)}function Z(_){let v=i.get(_);return o&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(_){let v=a.render.frame;h.get(_)!==v&&(h.set(_,v),_.update())}function P(_,v){let U=_.colorSpace,J=_.format,$=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Xo||U!==Bn&&U!==ln&&(nt.getTransfer(U)===ct?o===!1?e.has("EXT_sRGB")===!0&&J===gn?(_.format=Xo,_.minFilter=cn,_.generateMipmaps=!1):v=na.sRGBToLinear(v):(J!==gn||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=ve,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Z}function b_(n,e,t){let i=t.isWebGL2;function s(r,a=ln){let o,c=nt.getTransfer(a);if(r===ni)return n.UNSIGNED_BYTE;if(r===du)return n.UNSIGNED_SHORT_4_4_4_4;if(r===fu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===mf)return n.BYTE;if(r===gf)return n.SHORT;if(r===Uc)return n.UNSIGNED_SHORT;if(r===uu)return n.INT;if(r===Kn)return n.UNSIGNED_INT;if(r===Qn)return n.FLOAT;if(r===Vs)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_f)return n.ALPHA;if(r===gn)return n.RGBA;if(r===xf)return n.LUMINANCE;if(r===vf)return n.LUMINANCE_ALPHA;if(r===Si)return n.DEPTH_COMPONENT;if(r===ls)return n.DEPTH_STENCIL;if(r===Xo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===yf)return n.RED;if(r===pu)return n.RED_INTEGER;if(r===Mf)return n.RG;if(r===mu)return n.RG_INTEGER;if(r===gu)return n.RGBA_INTEGER;if(r===ro||r===ao||r===oo||r===co)if(c===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ol||r===Fl||r===Bl||r===zl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_u)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kl||r===Hl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kl)return c===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Hl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vl||r===Gl||r===Wl||r===Xl||r===ql||r===Yl||r===$l||r===Zl||r===Jl||r===jl||r===Kl||r===Ql||r===eh||r===th)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ql)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$l)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kl)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ql)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eh)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===th)return c===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lo||r===nh||r===ih)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===lo)return c===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ih)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bf||r===sh||r===rh||r===ah)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===lo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===sh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ah)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function E_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Su(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T_(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){let T=y.program;i.uniformBlockBinding(S,T)}function l(S,y){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",m));let C=y.program;i.updateUBOMapping(S,C);let A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){let y=u();S.__bindingPointIndex=y;let T=n.createBuffer(),C=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],T=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,R=T.length;A<R;A++){let k=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,b=k.length;M<b;M++){let F=k[M];if(f(F,A,M,C)===!0){let H=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value],I=0;for(let B=0;B<Q.length;B++){let q=Q[B],ee=x(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+I,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,I),I+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,T,C){let A=S.value,R=y+"_"+T;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{let k=C[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return C[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(S){let y=S.uniforms,T=0,C=16;for(let R=0,k=y.length;R<k;R++){let M=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,F=M.length;b<F;b++){let H=M[b],Q=Array.isArray(H.value)?H.value:[H.value];for(let I=0,B=Q.length;I<B;I++){let q=Q[I],ee=x(q),K=T%C;K!==0&&C-K<ee.boundary&&(T+=C-K),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=ee.storage}}}let A=T%C;return A>0&&(T+=C-A),S.__size=T,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}function Fc(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function Qh(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function A_(n,e){let t=1-n;return t*t*e}function R_(n,e){return 2*(1-n)*n*e}function C_(n,e){return n*n*e}function Os(n,e,t,i){return A_(n,e)+R_(n,t)+C_(n,i)}function P_(n,e){let t=1-n;return t*t*t*e}function L_(n,e){let t=1-n;return 3*t*t*n*e}function I_(n,e){return 3*(1-n)*n*n*e}function D_(n,e){return n*n*n*e}function Fs(n,e,t,i,s){return P_(n,e)+L_(n,t)+I_(n,i)+D_(n,s)}function Pu(n,e,t,i,s){let r,a;if(s===J_(n,e,t,i)>0)for(r=e;r<t;r+=i)a=tu(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=tu(r,n[r],n[r+1],a);return a&&Ia(a,a.next)&&(js(a),a=a.next),a}function Ai(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ia(t,t.next)||mt(t.prev,t,t.next)===0)){if(js(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Zs(n,e,t,i,s,r,a){if(!n)return;!a&&r&&W_(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?O_(n,i,s,r):N_(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),js(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=F_(Ai(n),e,t),Zs(n,e,t,i,s,r,2)):a===2&&B_(n,e,t,i,s,r):Zs(Ai(n),e,t,i,s,r,1);break}}}function N_(n){let e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&is(s,o,r,c,a,l,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O_(n,e,t,i){let s=n.prev,r=n,a=n.next;if(mt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=xc(f,g,e,t,i),S=xc(x,m,e,t,i),y=n.prevZ,T=n.nextZ;for(;y&&y.z>=p&&T&&T.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&is(o,h,c,u,l,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=f&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&is(o,h,c,u,l,d,T.x,T.y)&&mt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&is(o,h,c,u,l,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=S;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&is(o,h,c,u,l,d,T.x,T.y)&&mt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function F_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ia(s,r)&&Lu(s,i,i.next,r)&&Js(s,r)&&Js(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),js(i),js(i.next),i=n=r),i=i.next}while(i!==n);return Ai(i)}function B_(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Y_(a,o)){let c=Iu(a,o);a=Ai(a,a.next),c=Ai(c,c.next),Zs(a,e,t,i,s,r,0),Zs(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function z_(n,e,t,i){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=Pu(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(q_(l));for(s.sort(k_),r=0;r<s.length;r++)t=H_(s[r],t);return t}function k_(n,e){return n.x-e.x}function H_(n,e){let t=V_(n,e);if(!t)return e;let i=Iu(t,n);return Ai(i,i.next),Ai(t,t.next)}function V_(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&is(a<l?r:i,a,c,l,a<l?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Js(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&G_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function G_(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function W_(n,e,t,i){let s=n;do s.z===0&&(s.z=xc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,X_(s)}function X_(n){let e,t,i,s,r,a,o,c,l=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<l&&(o++,i=i.nextZ,!!i);e++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(a>1);return n}function xc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function q_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function is(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Y_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$_(n,e)&&(Js(n,e)&&Js(e,n)&&Z_(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||Ia(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ia(n,e){return n.x===e.x&&n.y===e.y}function Lu(n,e,t,i){let s=Yr(mt(n,e,t)),r=Yr(mt(n,e,i)),a=Yr(mt(t,i,n)),o=Yr(mt(t,i,e));return!!(s!==r&&a!==o||s===0&&qr(n,t,e)||r===0&&qr(n,i,e)||a===0&&qr(t,n,i)||o===0&&qr(t,e,i))}function qr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Yr(n){return n>0?1:n<0?-1:0}function $_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Lu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Js(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function Z_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Iu(n,e){let t=new vc(n.i,n.x,n.y),i=new vc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function tu(n,e,t,i){let s=new vc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J_(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function nu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function iu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function j_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function $r(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function K_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Nd,Cl,Od,cu,Ic,Nn,ii,Dt,It,ei,ss,Pl,Ll,Il,Fd,yi,Bd,zd,Dl,Ul,kd,Hd,Vd,Gd,Ho,Vo,Wd,Xd,qd,Yd,$d,Zd,Jd,jd,Kd,Qd,ef,tf,Zr,nf,sf,rf,af,lu,of,cf,ti,lf,hf,uf,Dc,df,ff,hu,os,cs,Go,Wo,Ca,zs,mn,ks,Wt,Nl,so,cn,pf,Hs,ni,mf,gf,Uc,uu,Kn,Qn,Vs,du,fu,bi,_f,gn,xf,vf,Si,ls,yf,pu,Mf,mu,gu,ro,ao,oo,co,Ol,Fl,Bl,zl,_u,kl,Hl,Vl,Gl,Wl,Xl,ql,Yl,$l,Zl,Jl,jl,Kl,Ql,eh,th,lo,nh,ih,bf,sh,rh,ah,Jr,jr,ho,oh,ch,lh,xu,Ei,Sf,Ef,vu,Tf,ln,it,Bn,Nc,Pa,Kr,ct,Qr,ea,Fi,hh,wf,Af,Rf,yu,Cf,Pf,Lf,If,uh,dh,Xo,Fn,ta,si,Nt,uo,qo,xe,$e,po,ph,mh,gh,br,Nf,nt,Bi,na,Of,ia,Ff,sn,ut,$o,zn,sa,Zo,bn,L,_o,_h,kn,Pn,dn,Sr,zi,ki,Hi,Yn,$n,mi,As,Er,Tr,gi,Bf,Rs,vo,Ti,Ln,yo,wr,Zn,Mo,Ar,bo,Jo,lt,Vi,fn,zf,kf,Jn,Rr,en,xh,vh,ra,aa,Hf,yh,Gi,In,Cr,Cs,Vf,Gf,Mh,bh,Sh,Wf,Xf,Xt,pn,Dn,So,Un,Wi,Xi,Eh,Eo,To,wo,Pr,es,bu,jn,Lr,Be,Ot,qf,wi,qt,yt,Ir,nn,oa,ca,Ke,Yf,on,Ro,qi,tn,Ps,Rt,Jt,Th,_i,Dr,wh,Yi,$i,Zi,Co,Ur,Nr,Or,Fr,Ah,Rh,Ch,Br,zr,de,Mt,Jf,jf,Kf,Hn,la,Ft,Ji,ji,jo,ha,Ko,Po,Qf,ep,On,xi,Hr,Ws,dt,np,ip,sp,rp,ap,op,cp,lp,hp,up,dp,fp,pp,mp,gp,_p,xp,vp,yp,Mp,bp,Sp,Ep,Tp,wp,Ap,Rp,Cp,Pp,Lp,Ip,Dp,Up,Np,Op,Fp,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,$p,Zp,Jp,jp,Kp,Qp,em,tm,nm,im,sm,rm,am,om,cm,lm,hm,um,dm,fm,pm,mm,gm,_m,xm,vm,ym,Mm,bm,Sm,Em,Tm,wm,Am,Rm,Cm,Pm,Lm,Im,Dm,Um,Nm,Om,Fm,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,$m,Zm,Jm,jm,Km,Qm,eg,tg,ng,ig,sg,rg,ag,og,cg,lg,hg,ug,dg,fg,pg,mg,gg,_g,xg,vg,yg,Mg,bg,Sg,Eg,Tg,wg,Ag,Rg,Cg,Pg,Lg,Ig,Dg,Ug,We,pe,Mn,Vr,ua,ts,Ph,Mi,Lo,Lh,Io,Do,Uo,vi,Ki,Ih,da,fa,Tu,wu,Au,Ru,Cu,Oh,Fh,Bh,zh,kh,Qo,ec,tc,No,as,z0,k0,Z0,J0,K0,a_,ic,sc,f_,rc,ac,__,x_,oc,ot,S_,Ns,cc,Xs,lc,pa,ma,ga,Qi,jh,Wr,Kh,w_,Ls,Is,_a,ri,hn,qs,hc,Xr,Oo,Fo,Bo,uc,xa,dc,va,fc,ya,pc,Ma,eu,mc,Ys,gc,ba,Sn,_c,$s,U_,Bs,Ri,Sa,Ea,Tt,Vn,Ve,us,yc,Mc,bc,_n,Ci,Sc,Ec,Tc,Ks,Pi,wc,su,Ac,Q_,Qs,Rc,ds,er,Ta,zo,ru,au,wa,ou,Ds,ko,Cc,Aa,Pc,Ra,Bc,ex,zc,tx,nx,ix,sx,rx,ax,ox,Lc,ht,yv,ms=Rl(()=>{Nd=0,Cl=1,Od=2,cu=1,Ic=2,Nn=3,ii=0,Dt=1,It=2,ei=0,ss=1,Pl=2,Ll=3,Il=4,Fd=5,yi=100,Bd=101,zd=102,Dl=103,Ul=104,kd=200,Hd=201,Vd=202,Gd=203,Ho=204,Vo=205,Wd=206,Xd=207,qd=208,Yd=209,$d=210,Zd=211,Jd=212,jd=213,Kd=214,Qd=0,ef=1,tf=2,Zr=3,nf=4,sf=5,rf=6,af=7,lu=0,of=1,cf=2,ti=0,lf=1,hf=2,uf=3,Dc=4,df=5,ff=6,hu=300,os=301,cs=302,Go=303,Wo=304,Ca=306,zs=1e3,mn=1001,ks=1002,Wt=1003,Nl=1004,so=1005,cn=1006,pf=1007,Hs=1008,ni=1009,mf=1010,gf=1011,Uc=1012,uu=1013,Kn=1014,Qn=1015,Vs=1016,du=1017,fu=1018,bi=1020,_f=1021,gn=1023,xf=1024,vf=1025,Si=1026,ls=1027,yf=1028,pu=1029,Mf=1030,mu=1031,gu=1033,ro=33776,ao=33777,oo=33778,co=33779,Ol=35840,Fl=35841,Bl=35842,zl=35843,_u=36196,kl=37492,Hl=37496,Vl=37808,Gl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,$l=37814,Zl=37815,Jl=37816,jl=37817,Kl=37818,Ql=37819,eh=37820,th=37821,lo=36492,nh=36494,ih=36495,bf=36283,sh=36284,rh=36285,ah=36286,Jr=2300,jr=2301,ho=2302,oh=2400,ch=2401,lh=2402,xu=3e3,Ei=3001,Sf=3200,Ef=3201,vu=0,Tf=1,ln="",it="srgb",Bn="srgb-linear",Nc="display-p3",Pa="display-p3-linear",Kr="linear",ct="srgb",Qr="rec709",ea="p3",Fi=7680,hh=519,wf=512,Af=513,Rf=514,yu=515,Cf=516,Pf=517,Lf=518,If=519,uh=35044,dh="300 es",Xo=1035,Fn=2e3,ta=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,qo=180/Math.PI;xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],y=s[4],T=s[7],C=s[2],A=s[5],R=s[8];return r[0]=a*x+o*S+c*C,r[3]=a*m+o*y+c*A,r[6]=a*p+o*T+c*R,r[1]=l*x+h*S+u*C,r[4]=l*m+h*y+u*A,r[7]=l*p+h*T+u*R,r[2]=d*x+f*S+g*C,r[5]=d*m+f*y+g*A,r[8]=d*p+f*T+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},po=new $e;ph={};mh=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gh=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[Bn]:{transfer:Kr,primaries:Qr,toReference:n=>n,fromReference:n=>n},[it]:{transfer:ct,primaries:Qr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pa]:{transfer:Kr,primaries:ea,toReference:n=>n.applyMatrix3(gh),fromReference:n=>n.applyMatrix3(mh)},[Nc]:{transfer:ct,primaries:ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gh),fromReference:n=>n.applyMatrix3(mh).convertLinearToSRGB()}},Nf=new Set([Bn,Pa]),nt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Nf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=br[e].toReference,s=br[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return br[n].primaries},getTransfer:function(n){return n===ln?Kr:br[n].transfer}};na=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Gs("canvas")),Bi.width=e.width,Bi.height=e.height;let i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Gs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Of=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Ff=0,sn=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mn,s=mn,r=cn,a=Hs,o=gn,c=ni,l=n.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=fs(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ei?it:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?Ei:xu}set encoding(e){Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ei?it:ln}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=hu;sn.DEFAULT_ANISOTROPY=1;ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,T=(f+1)/2,C=(p+1)/2,A=(h+d)/4,R=(u+x)/4,k=(g+m)/4;return y>T&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=R/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=k/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=k/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?it:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends $o{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},sa=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zo=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*x,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),A=Math.atan2(C,p*S);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let T=o*S;if(c=c*m+d*T,l=l*m+f*T,h=h*m+g*T,u=u*m+x*T,m===1-o){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new L,_h=new bn,kn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Er.subVectors(this.max,As),zi.subVectors(e.a,As),ki.subVectors(e.b,As),Hi.subVectors(e.c,As),Yn.subVectors(ki,zi),$n.subVectors(Hi,ki),mi.subVectors(zi,Hi);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!xo(t,zi,ki,Hi,Er)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,zi,ki,Hi,Er))?!1:(Tr.crossVectors(Yn,$n),t=[Tr.x,Tr.y,Tr.z],xo(t,zi,ki,Hi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,Sr=new kn,zi=new L,ki=new L,Hi=new L,Yn=new L,$n=new L,mi=new L,As=new L,Er=new L,Tr=new L,gi=new L;Bf=new kn,Rs=new L,vo=new L,Ti=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(vo)),this.expandByPoint(Rs.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new L,yo=new L,wr=new L,Zn=new L,Mo=new L,Ar=new L,bo=new L,Jo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=Zn.dot(this.direction),c=-Zn.dot(wr),l=Zn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yo).addScaledVector(wr,d),f}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,s,r){Mo.subVectors(t,e),Ar.subVectors(i,e),bo.crossVectors(Mo,Ar);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);let c=o*this.direction.dot(Ar.crossVectors(Zn,Ar));if(c<0)return null;let l=o*this.direction.dot(Mo.cross(Zn));if(l<0||c+l>a)return null;let h=-o*Zn.dot(bo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zf,e,kf)}lookAt(e,t,i){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(i,en),Jn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(i,en)),Jn.normalize(),Rr.crossVectors(en,Jn),s[0]=Jn.x,s[4]=Rr.x,s[8]=en.x,s[1]=Jn.y,s[5]=Rr.y,s[9]=en.y,s[2]=Jn.z,s[6]=Rr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],y=i[7],T=i[11],C=i[15],A=s[0],R=s[4],k=s[8],M=s[12],b=s[1],F=s[5],H=s[9],Q=s[13],I=s[2],B=s[6],q=s[10],ee=s[14],K=s[3],Y=s[7],ie=s[11],se=s[15];return r[0]=a*A+o*b+c*I+l*K,r[4]=a*R+o*F+c*B+l*Y,r[8]=a*k+o*H+c*q+l*ie,r[12]=a*M+o*Q+c*ee+l*se,r[1]=h*A+u*b+d*I+f*K,r[5]=h*R+u*F+d*B+f*Y,r[9]=h*k+u*H+d*q+f*ie,r[13]=h*M+u*Q+d*ee+f*se,r[2]=g*A+x*b+m*I+p*K,r[6]=g*R+x*F+m*B+p*Y,r[10]=g*k+x*H+m*q+p*ie,r[14]=g*M+x*Q+m*ee+p*se,r[3]=S*A+y*b+T*I+C*K,r[7]=S*R+y*F+T*B+C*Y,r[11]=S*k+y*H+T*q+C*ie,r[15]=S*M+y*Q+T*ee+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,T=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,C=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,A=t*S+i*y+s*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=S*R,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*R,e[2]=(o*m*r-x*c*r+x*s*l-i*m*l-o*s*p+i*c*p)*R,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*R,e[4]=y*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=T*R,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*R,e[10]=(a*x*r-g*o*r+g*i*l-t*x*l-a*i*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*f-t*o*f)*R,e[12]=C*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*R,e[14]=(g*o*s-a*x*s-g*i*c+t*x*c+a*i*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,S=c*l,y=c*h,T=c*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(x+p))*C,s[1]=(f+T)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-T)*A,s[5]=(1-(d+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+y)*R,s[9]=(m-S)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),a=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);let l=1/r,h=1/a,u=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Fn){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(o===Fn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ta)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Fn){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*l,f=(i+s)*h,g,x;if(o===Fn)g=(a+r)*u,x=-2*u;else if(o===ta)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vi=new L,fn=new lt,zf=new L(0,0,0),kf=new L(1,1,1),Jn=new L,Rr=new L,en=new L,xh=new lt,vh=new bn,ra=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ra.DEFAULT_ORDER="XYZ";aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hf=0,yh=new L,Gi=new bn,In=new lt,Cr=new L,Cs=new L,Vf=new L,Gf=new bn,Mh=new L(1,0,0),bh=new L(0,1,0),Sh=new L(0,0,1),Wf={type:"added"},Xf={type:"removed"},Xt=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new ra,i=new bn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new $e}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Cs,Cr,this.up):In.lookAt(Cr,Cs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(In),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new L(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pn=new L,Dn=new L,So=new L,Un=new L,Wi=new L,Xi=new L,Eh=new L,Eo=new L,To=new L,wo=new L,Pr=!1,es=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pn.subVectors(s,t),Dn.subVectors(i,t),So.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Dn),c=pn.dot(So),l=Dn.dot(Dn),h=Dn.dot(So),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,i,s,r,a,o,c){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),this.getInterpolation(e,t,i,s,r,a,o,c)}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static isFrontFacing(e,t,i,s){return pn.subVectors(i,t),Dn.subVectors(e,t),pn.cross(Dn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),pn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,i),Xi.subVectors(r,i),Eo.subVectors(e,i);let c=Wi.dot(Eo),l=Xi.dot(Eo);if(c<=0&&l<=0)return t.copy(i);To.subVectors(e,s);let h=Wi.dot(To),u=Xi.dot(To);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Wi,a);wo.subVectors(e,r);let f=Wi.dot(wo),g=Xi.dot(wo);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Xi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Eh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Eh,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Df(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ao(a,r,e+1/3),this.g=Ao(a,r,e),this.b=Ao(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=it){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let i=bu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Lt(Ot.r*255,0,255))*65536+Math.round(Lt(Ot.g*255,0,255))*256+Math.round(Lt(Ot.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=it){nt.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==it?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Lr);let i=fo(jn.h,Lr.h,t),s=fo(jn.s,Lr.s,t),r=fo(jn.l,Lr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Be;Be.NAMES=bu;qf=0,wi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ss,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Vo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ho&&(i.blendSrc=this.blendSrc),this.blendDst!==Vo&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qt=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yt=new L,Ir=new xe,nn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}},oa=class extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ca=class extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ke=class extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Yf=0,on=new lt,Ro=new Xt,qi=new L,tn=new kn,Ps=new kn,Rt=new L,Jt=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?ca:oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(tn.min,Ps.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Ps.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Ps.min),tn.expandByPoint(Ps.max))}tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(e,l),Rt.add(qi)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new L,h[b]=new L;let u=new L,d=new L,f=new L,g=new xe,x=new xe,m=new xe,p=new L,S=new L;function y(b,F,H){u.fromArray(s,b*3),d.fromArray(s,F*3),f.fromArray(s,H*3),g.fromArray(a,b*2),x.fromArray(a,F*2),m.fromArray(a,H*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(Q),S.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Q),l[b].add(p),l[F].add(p),l[H].add(p),h[b].add(S),h[F].add(S),h[H].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,F=T.length;b<F;++b){let H=T[b],Q=H.start,I=H.count;for(let B=Q,q=Q+I;B<q;B+=3)y(i[B+0],i[B+1],i[B+2])}let C=new L,A=new L,R=new L,k=new L;function M(b){R.fromArray(r,b*3),k.copy(R);let F=l[b];C.copy(F),C.sub(R.multiplyScalar(R.dot(F))).normalize(),A.crossVectors(k,F);let Q=A.dot(h[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=Q}for(let b=0,F=T.length;b<F;++b){let H=T[b],Q=H.start,I=H.count;for(let B=Q,q=Q+I;B<q;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new lt,_i=new Jo,Dr=new Ti,wh=new L,Yi=new L,$i=new L,Zi=new L,Co=new L,Ur=new L,Nr=new xe,Or=new xe,Fr=new xe,Ah=new L,Rh=new L,Ch=new L,Br=new L,zr=new L,de=class extends Xt{constructor(e=new Jt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Co.fromBufferAttribute(u,e),a?Ur.addScaledVector(Co,h):Ur.addScaledVector(Co.sub(t),h))}t.add(Ur)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(Dr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Dr,wh)===null||_i.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Th.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,C=y;T<C;T+=3){let A=o.getX(T),R=o.getX(T+1),k=o.getX(T+2);s=kr(this,p,e,i,l,h,u,A,R,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);s=kr(this,a,e,i,l,h,u,S,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,C=y;T<C;T+=3){let A=T,R=T+1,k=T+2;s=kr(this,p,e,i,l,h,u,A,R,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=m,y=m+1,T=m+2;s=kr(this,a,e,i,l,h,u,S,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Mt=class n extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(x,m,p,S,y,T,C,A,R,k,M){let b=T/R,F=C/k,H=T/2,Q=C/2,I=A/2,B=R+1,q=k+1,ee=0,K=0,Y=new L;for(let ie=0;ie<q;ie++){let se=ie*F-Q;for(let ue=0;ue<B;ue++){let G=ue*b-H;Y[x]=G*S,Y[m]=se*y,Y[p]=I,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ue/R),u.push(1-ie/k),ee+=1}}for(let ie=0;ie<k;ie++)for(let se=0;se<R;se++){let ue=d+se+B*ie,G=d+se+B*(ie+1),j=d+(se+1)+B*(ie+1),le=d+(se+1)+B*ie;c.push(ue,G,le),c.push(G,j,le),K+=6}o.addGroup(f,K,M),f+=K,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Jf={clone:hs,merge:Gt},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},la=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ft=class extends la{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ji=-90,ji=1,jo=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Ji,ji,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Ji,ji,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Ji,ji,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Ji,ji,e,t);o.layers=this.layers,this.add(o);let c=new Ft(Ji,ji,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Ji,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ha=class extends sn{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ko=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ei?it:ln),this.texture=new ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:ei});r.uniforms.tEquirect.value=t;let a=new de(s,r),o=t.minFilter;return t.minFilter===Hs&&(t.minFilter=cn),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Po=new L,Qf=new L,ep=new $e,On=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Po.subVectors(i,t).cross(Qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Po),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ep.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Ti,Hr=new L,Ws=class{constructor(e=new On,t=new On,i=new On,s=new On,r=new On,a=new On){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-r,d-l,m-f,T-p).normalize(),i[1].setComponents(c+r,d+l,m+f,T+p).normalize(),i[2].setComponents(c+a,d+h,m+g,T+S).normalize(),i[3].setComponents(c-a,d-h,m-g,T-S).normalize(),i[4].setComponents(c-o,d-u,m-x,T-y).normalize(),t===Fn)i[5].setComponents(c+o,d+u,m+x,T+y).normalize();else if(t===ta)i[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};dt=class n extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let y=0;y<l;y++){let T=y*u-r;g.push(T,-S,0),x.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let y=S+l*p,T=S+l*(p+1),C=S+1+l*(p+1),A=S+1+l*p;f.push(y,T,A),f.push(T,C,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`
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
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,tm=`struct PhysicalMaterial {
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
}`,nm=`
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:yp,color_fragment:Mp,color_pars_fragment:bp,color_pars_vertex:Sp,color_vertex:Ep,common:Tp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Op,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Zp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:kp,fog_fragment:Hp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Gp,lightmap_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:$p,lights_toon_fragment:Jp,lights_toon_pars_fragment:jp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Qp,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:bm,normal_vertex:Sm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Hm,skinning_pars_vertex:Vm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:$m,transmission_fragment:Zm,transmission_pars_fragment:Jm,uv_pars_fragment:jm,uv_pars_vertex:Km,uv_vertex:Qm,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:bg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:Tg,meshphysical_frag:wg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Ug},pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Mn={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mn.physical={uniforms:Gt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};Vr={r:0,b:0,g:0};ua=class extends la{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ts=4,Ph=[.125,.215,.35,.446,.526,.582],Mi=20,Lo=new ua,Lh=new Be,Io=null,Do=0,Uo=0,vi=(1+Math.sqrt(5))/2,Ki=1/vi,Ih=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,vi,Ki),new L(0,vi,-Ki),new L(Ki,0,vi),new L(-Ki,0,vi),new L(vi,Ki,0),new L(-vi,Ki,0)],da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Do,Uo),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Vs,format:gn,colorSpace:Bn,depthBuffer:!1},s=Dh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Vg(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s){let o=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lh),h.toneMapping=ti,h.autoClear=!1;let f=new qt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new de(new Mt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Lh),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;Gr(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===os||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Gr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ih[(s-1)%Ih.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let p=[],S=0;for(let R=0;R<Mi;++R){let k=R/x,M=Math.exp(-k*k/2);p.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let T=this._sizeLods[s],C=3*T*(s>y-ts?s-y+ts:0),A=4*(this._cubeSize-T);Gr(t,C,A,3*T,2*T),c.setRenderTarget(t),c.render(u,Lo)}};fa=class extends sn{constructor(e,t,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:Si,h!==Si&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Si&&(i=Kn),i===void 0&&h===ls&&(i=bi),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tu=new sn,wu=new fa(1,1);wu.compareFunction=yu;Au=new sa,Ru=new Zo,Cu=new ha,Oh=[],Fh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);Qo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}},ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F0(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},No=/(\w+)(\])?(\[|\.)?/g;as=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);B0(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};z0=37297,k0=0;Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;J0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;a_=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sc(e),t.set(e,i)),i}},sc=class{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}};f_=0;rc=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},__=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;oc=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},S_={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cc=class extends si{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,S=[],y=[],T=new xe,C=null,A=new Ft;A.layers.enable(1),A.viewport=new ut;let R=new Ft;R.layers.enable(2),R.viewport=new ut;let k=[A,R],M=new oc;M.layers.enable(1),M.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=S[G];return j===void 0&&(j=new Ns,S[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=S[G];return j===void 0&&(j=new Ns,S[G]=j),j.getGripSpace()},this.getHand=function(G){let j=S[G];return j===void 0&&(j=new Ns,S[G]=j),j.getHandSpace()};function H(G){let j=y.indexOf(G.inputSource);if(j===-1)return;let le=S[j];le!==void 0&&(le.update(G.inputSource,G.frame,l||a),le.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",I);for(let G=0;G<S.length;G++){let j=y[G];j!==null&&(y[G]=null,S[G].disconnect(j))}b=null,F=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new zn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,le=null,oe=null;x.depth&&(oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?ls:Si,le=x.stencil?bi:Kn);let Ee={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new zn(d.textureWidth,d.textureHeight,{format:gn,type:ni,depthTexture:new fa(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let ne=e.properties.get(p);ne.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let j=0;j<G.removed.length;j++){let le=G.removed[j],oe=y.indexOf(le);oe>=0&&(y[oe]=null,S[oe].disconnect(le))}for(let j=0;j<G.added.length;j++){let le=G.added[j],oe=y.indexOf(le);if(oe===-1){for(let ne=0;ne<S.length;ne++)if(ne>=y.length){y.push(le),oe=ne;break}else if(y[ne]===null){y[ne]=le,oe=ne;break}if(oe===-1)break}let Ee=S[oe];Ee&&Ee.connect(le)}}let B=new L,q=new L;function ee(G,j,le){B.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);let oe=B.distanceTo(q),Ee=j.projectionMatrix.elements,ne=le.projectionMatrix.elements,he=Ee[14]/(Ee[10]-1),re=Ee[14]/(Ee[10]+1),ve=(Ee[9]+1)/Ee[5],z=(Ee[9]-1)/Ee[5],Ue=(Ee[8]-1)/Ee[0],ye=(ne[8]+1)/ne[0],Le=he*Ue,Z=he*ye,N=oe/(-Ue+ye),P=N*-Ue;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(P),G.translateZ(N),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let _=he+N,v=re+N,U=Le-P,J=Z+(oe-P),$=ve*re/v*_,te=z*re/v*_;G.projectionMatrix.makePerspective(U,J,$,te,_,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;M.near=R.near=A.near=G.near,M.far=R.far=A.far=G.far,(b!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,F=M.far);let j=G.parent,le=M.cameras;K(M,j);for(let oe=0;oe<le.length;oe++)K(le[oe],j);le.length===2?ee(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),Y(G,M,j)};function Y(G,j,le){le===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let ie=null;function se(G,j){if(h=j.getViewerPose(l||a),g=j,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let oe=!1;le.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Ee=0;Ee<le.length;Ee++){let ne=le[Ee],he=null;if(f!==null)he=f.getViewport(ne);else{let ve=u.getViewSubImage(d,ne);he=ve.viewport,Ee===0&&(e.setRenderTargetTextures(p,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(p))}let re=k[Ee];re===void 0&&(re=new Ft,re.layers.enable(Ee),re.viewport=new ut,k[Ee]=re),re.matrix.fromArray(ne.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ne.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(he.x,he.y,he.width,he.height),Ee===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(re)}}for(let le=0;le<S.length;le++){let oe=y[le],Ee=S[le];oe!==null&&Ee!==void 0&&Ee.update(oe,j,l||a)}ie&&ie(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ue=new Eu;ue.setAnimationLoop(se),this.setAnimationLoop=function(G){ie=G},this.dispose=function(){}}};Xs=class{constructor(e={}){let{canvas:t=Uf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let y=this,T=!1,C=0,A=0,R=null,k=-1,M=null,b=new ut,F=new ut,H=null,Q=new Be(0),I=0,B=t.width,q=t.height,ee=1,K=null,Y=null,ie=new ut(0,0,B,q),se=new ut(0,0,B,q),ue=!1,G=new Ws,j=!1,le=!1,oe=null,Ee=new lt,ne=new xe,he=new L,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return R===null?ee:1}let z=i;function Ue(w,O){for(let W=0;W<w.length;W++){let X=w[W],V=t.getContext(X,O);if(V!==null)return V}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){let O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),z=Ue(O,w),z===null)throw Ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,Le,Z,N,P,_,v,U,J,$,te,Me,ce,_e,we,Pe,ae,tt,Ze,ze,Ie,Te,Ge,et;function gt(){ye=new Wg(z),Le=new Bg(z,ye,e),ye.init(Le),Te=new b_(z,ye,Le),Z=new y_(z,ye,Le),N=new Yg(z),P=new c_,_=new M_(z,ye,Z,P,Le,Te,N),v=new kg(y),U=new Gg(y),J=new tp(z,Le),Ge=new Og(z,ye,J,Le),$=new Xg(z,J,N,Ge),te=new jg(z,$,J,N),Ze=new Jg(z,Le,_),Pe=new zg(P),Me=new o_(y,v,U,ye,Le,Ge,Pe),ce=new E_(y,P),_e=new h_,we=new g_(ye,Le),tt=new Ng(y,v,U,Z,te,d,c),ae=new v_(y,te,Le),et=new T_(z,N,Le,Z),ze=new Fg(z,ye,N,Le),Ie=new qg(z,ye,N,Le),N.programs=Me.programs,y.capabilities=Le,y.extensions=ye,y.properties=P,y.renderLists=_e,y.shadowMap=ae,y.state=Z,y.info=N}gt();let qe=new cc(y,z);this.xr=qe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(B,q,!1))},this.getSize=function(w){return w.set(B,q)},this.setSize=function(w,O,W=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,q=O,t.width=Math.floor(w*ee),t.height=Math.floor(O*ee),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(B*ee,q*ee).floor()},this.setDrawingBufferSize=function(w,O,W){B=w,q=O,ee=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,O,W,X){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,O,W,X),Z.viewport(b.copy(ie).multiplyScalar(ee).floor())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,O,W,X){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,O,W,X),Z.scissor(F.copy(se).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){Z.setScissorTest(ue=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let V=!1;if(R!==null){let be=R.texture.format;V=be===gu||be===mu||be===pu}if(V){let be=R.texture.type,Ce=be===ni||be===Kn||be===Uc||be===bi||be===du||be===fu,Ne=tt.getClearColor(),Fe=tt.getClearAlpha(),Xe=Ne.r,ke=Ne.g,He=Ne.b;Ce?(f[0]=Xe,f[1]=ke,f[2]=He,f[3]=Fe,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=Xe,g[1]=ke,g[2]=He,g[3]=Fe,z.clearBufferiv(z.COLOR,0,g))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),we.dispose(),P.dispose(),v.dispose(),U.dispose(),te.dispose(),Ge.dispose(),et.dispose(),Me.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ht),qe.removeEventListener("sessionend",at),oe&&(oe.dispose(),oe=null),Vt.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=N.autoReset,O=ae.enabled,W=ae.autoUpdate,X=ae.needsUpdate,V=ae.type;gt(),N.autoReset=w,ae.enabled=O,ae.autoUpdate=W,ae.needsUpdate=X,ae.type=V}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ge(w){let O=w.target;O.removeEventListener("dispose",ge),Oe(O)}function Oe(w){De(w),P.remove(w)}function De(w){let O=P.get(w).programs;O!==void 0&&(O.forEach(function(W){Me.releaseProgram(W)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,V,be){O===null&&(O=re);let Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Cd(w,O,W,X,V);Z.setMaterial(X,Ce);let Fe=W.index,Xe=1;if(X.wireframe===!0){if(Fe=$.getWireframeAttribute(W),Fe===void 0)return;Xe=2}let ke=W.drawRange,He=W.attributes.position,vt=ke.start*Xe,Qt=(ke.start+ke.count)*Xe;be!==null&&(vt=Math.max(vt,be.start*Xe),Qt=Math.min(Qt,(be.start+be.count)*Xe)),Fe!==null?(vt=Math.max(vt,0),Qt=Math.min(Qt,Fe.count)):He!=null&&(vt=Math.max(vt,0),Qt=Math.min(Qt,He.count));let At=Qt-vt;if(At<0||At===1/0)return;Ge.setup(V,X,Ne,W,Fe);let Cn,pt=ze;if(Fe!==null&&(Cn=J.get(Fe),pt=Ie,pt.setIndex(Cn)),V.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*ve()),pt.setMode(z.LINES)):pt.setMode(z.TRIANGLES);else if(V.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),Z.setLineWidth(Ye*ve()),V.isLineSegments?pt.setMode(z.LINES):V.isLineLoop?pt.setMode(z.LINE_LOOP):pt.setMode(z.LINE_STRIP)}else V.isPoints?pt.setMode(z.POINTS):V.isSprite&&pt.setMode(z.TRIANGLES);if(V.isBatchedMesh)pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)pt.renderInstances(vt,At,V.count);else if(W.isInstancedBufferGeometry){let Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,eo=Math.min(W.instanceCount,Ye);pt.renderInstances(vt,At,eo)}else pt.render(vt,At)};function st(w,O,W){w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=Dt,w.needsUpdate=!0,Mr(w,O,W),w.side=ii,w.needsUpdate=!0,Mr(w,O,W),w.side=It):Mr(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),m=we.get(W),m.init(),S.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(y._useLegacyLights);let X=new Set;return w.traverse(function(V){let be=V.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){let Ne=be[Ce];st(Ne,W,V),X.add(Ne)}else st(be,W,V),X.add(be)}),S.pop(),m=null,X},this.compileAsync=function(w,O,W=null){let X=this.compile(w,O,W);return new Promise(V=>{function be(){if(X.forEach(function(Ce){P.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){V(w);return}setTimeout(be,10)}ye.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function wt(w){rt&&rt(w)}function Ht(){Vt.stop()}function at(){Vt.start()}let Vt=new Eu;Vt.setAnimationLoop(wt),typeof self!="undefined"&&Vt.setContext(self),this.setAnimationLoop=function(w){rt=w,qe.setAnimationLoop(w),w===null?Vt.stop():Vt.start()},qe.addEventListener("sessionstart",Ht),qe.addEventListener("sessionend",at),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(O),O=qe.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,R),m=we.get(w,S.length),m.init(),S.push(m),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(Ee),le=this.localClippingEnabled,j=Pe.init(this.clippingPlanes,le),x=_e.get(w,p.length),x.init(),p.push(x),yn(w,O,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(K,Y),this.info.render.frame++,j===!0&&Pe.beginShadows();let W=m.state.shadowsArray;if(ae.render(W,w,O),j===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(x,w),m.setupLights(y._useLegacyLights),O.isArrayCamera){let X=O.cameras;for(let V=0,be=X.length;V<be;V++){let Ce=X[V];bl(x,w,Ce,Ce.viewport)}}else bl(x,w,O);R!==null&&(_.updateMultisampleRenderTarget(R),_.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,O),Ge.resetDefaultState(),k=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function yn(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){X&&he.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);let Ce=te.update(w),Ne=w.material;Ne.visible&&x.push(w,Ce,Ne,W,he.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){let Ce=te.update(w),Ne=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),he.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),he.copy(Ce.boundingSphere.center)),he.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ne)){let Fe=Ce.groups;for(let Xe=0,ke=Fe.length;Xe<ke;Xe++){let He=Fe[Xe],vt=Ne[He.materialIndex];vt&&vt.visible&&x.push(w,Ce,vt,W,he.z,He)}}else Ne.visible&&x.push(w,Ce,Ne,W,he.z,null)}}let be=w.children;for(let Ce=0,Ne=be.length;Ce<Ne;Ce++)yn(be[Ce],O,W,X)}function bl(w,O,W,X){let V=w.opaque,be=w.transmissive,Ce=w.transparent;m.setupLightsView(W),j===!0&&Pe.setGlobalState(y.clippingPlanes,W),be.length>0&&Rd(V,be,O,W),X&&Z.viewport(b.copy(X)),V.length>0&&yr(V,O,W),be.length>0&&yr(be,O,W),Ce.length>0&&yr(Ce,O,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Rd(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let be=Le.isWebGL2;oe===null&&(oe=new zn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Vs:ni,minFilter:Hs,samples:be?4:0})),y.getDrawingBufferSize(ne),be?oe.setSize(ne.x,ne.y):oe.setSize(Yo(ne.x),Yo(ne.y));let Ce=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(Q),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let Ne=y.toneMapping;y.toneMapping=ti,yr(w,W,X),_.updateMultisampleRenderTarget(oe),_.updateRenderTargetMipmap(oe);let Fe=!1;for(let Xe=0,ke=O.length;Xe<ke;Xe++){let He=O[Xe],vt=He.object,Qt=He.geometry,At=He.material,Cn=He.group;if(At.side===It&&vt.layers.test(X.layers)){let pt=At.side;At.side=Dt,At.needsUpdate=!0,Sl(vt,W,X,Qt,At,Cn),At.side=pt,At.needsUpdate=!0,Fe=!0}}Fe===!0&&(_.updateMultisampleRenderTarget(oe),_.updateRenderTargetMipmap(oe)),y.setRenderTarget(Ce),y.setClearColor(Q,I),y.toneMapping=Ne}function yr(w,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,be=w.length;V<be;V++){let Ce=w[V],Ne=Ce.object,Fe=Ce.geometry,Xe=X===null?Ce.material:X,ke=Ce.group;Ne.layers.test(W.layers)&&Sl(Ne,O,W,Fe,Xe,ke)}}function Sl(w,O,W,X,V,be){w.onBeforeRender(y,O,W,X,V,be),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(y,O,W,X,w,be),V.transparent===!0&&V.side===It&&V.forceSinglePass===!1?(V.side=Dt,V.needsUpdate=!0,y.renderBufferDirect(W,O,X,V,w,be),V.side=ii,V.needsUpdate=!0,y.renderBufferDirect(W,O,X,V,w,be),V.side=It):y.renderBufferDirect(W,O,X,V,w,be),w.onAfterRender(y,O,W,X,V,be)}function Mr(w,O,W){O.isScene!==!0&&(O=re);let X=P.get(w),V=m.state.lights,be=m.state.shadowsArray,Ce=V.state.version,Ne=Me.getParameters(w,V.state,be,O,W),Fe=Me.getProgramCacheKey(Ne),Xe=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?U:v).get(w.envMap||X.environment),Xe===void 0&&(w.addEventListener("dispose",ge),Xe=new Map,X.programs=Xe);let ke=Xe.get(Fe);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===Ce)return Tl(w,Ne),ke}else Ne.uniforms=Me.getUniforms(w),w.onBuild(W,Ne,y),w.onBeforeCompile(Ne,y),ke=Me.acquireProgram(Ne,Fe),Xe.set(Fe,ke),X.uniforms=Ne.uniforms;let He=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Pe.uniform),Tl(w,Ne),X.needsLights=Ld(w),X.lightsStateVersion=Ce,X.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function El(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Tl(w,O){let W=P.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Cd(w,O,W,X,V){O.isScene!==!0&&(O=re),_.resetTextureUnits();let be=O.fog,Ce=X.isMeshStandardMaterial?O.environment:null,Ne=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bn,Fe=(X.isMeshStandardMaterial?U:v).get(X.envMap||Ce),Xe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!W.morphAttributes.position,vt=!!W.morphAttributes.normal,Qt=!!W.morphAttributes.color,At=ti;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=y.toneMapping);let Cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=Cn!==void 0?Cn.length:0,Ye=P.get(X),eo=m.state.lights;if(j===!0&&(le===!0||w!==M)){let an=w===M&&X.id===k;Pe.setState(X,w,an)}let _t=!1;X.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==eo.state.version||Ye.outputColorSpace!==Ne||V.isBatchedMesh&&Ye.batching===!1||!V.isBatchedMesh&&Ye.batching===!0||V.isInstancedMesh&&Ye.instancing===!1||!V.isInstancedMesh&&Ye.instancing===!0||V.isSkinnedMesh&&Ye.skinning===!1||!V.isSkinnedMesh&&Ye.skinning===!0||V.isInstancedMesh&&Ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ye.instancingColor===!1&&V.instanceColor!==null||Ye.envMap!==Fe||X.fog===!0&&Ye.fog!==be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Pe.numPlanes||Ye.numIntersection!==Pe.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==ke||Ye.morphTargets!==He||Ye.morphNormals!==vt||Ye.morphColors!==Qt||Ye.toneMapping!==At||Le.isWebGL2===!0&&Ye.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,Ye.__version=X.version);let fi=Ye.currentProgram;_t===!0&&(fi=Mr(X,O,V));let wl=!1,Ts=!1,to=!1,Ut=fi.getUniforms(),pi=Ye.uniforms;if(Z.useProgram(fi.program)&&(wl=!0,Ts=!0,to=!0),X.id!==k&&(k=X.id,Ts=!0),wl||M!==w){Ut.setValue(z,"projectionMatrix",w.projectionMatrix),Ut.setValue(z,"viewMatrix",w.matrixWorldInverse);let an=Ut.map.cameraPosition;an!==void 0&&an.setValue(z,he.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&Ut.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ut.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ts=!0,to=!0)}if(V.isSkinnedMesh){Ut.setOptional(z,V,"bindMatrix"),Ut.setOptional(z,V,"bindMatrixInverse");let an=V.skeleton;an&&(Le.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Ut.setValue(z,"boneTexture",an.boneTexture,_)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ut.setOptional(z,V,"batchingTexture"),Ut.setValue(z,"batchingTexture",V._matricesTexture,_));let no=W.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&Le.isWebGL2===!0)&&Ze.update(V,W,fi),(Ts||Ye.receiveShadow!==V.receiveShadow)&&(Ye.receiveShadow=V.receiveShadow,Ut.setValue(z,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pi.envMap.value=Fe,pi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Ts&&(Ut.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ye.needsLights&&Pd(pi,to),be&&X.fog===!0&&ce.refreshFogUniforms(pi,be),ce.refreshMaterialUniforms(pi,X,ee,q,oe),as.upload(z,El(Ye),pi,_)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(as.upload(z,El(Ye),pi,_),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ut.setValue(z,"center",V.center),Ut.setValue(z,"modelViewMatrix",V.modelViewMatrix),Ut.setValue(z,"normalMatrix",V.normalMatrix),Ut.setValue(z,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let an=X.uniformsGroups;for(let io=0,Id=an.length;io<Id;io++)if(Le.isWebGL2){let Al=an[io];et.update(Al,fi),et.bind(Al,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Pd(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ld(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,W){P.get(w.texture).__webglTexture=O,P.get(w.depthTexture).__webglTexture=W;let X=P.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){let W=P.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){R=w,C=O,A=W;let X=!0,V=null,be=!1,Ce=!1;if(w){let Fe=P.get(w);Fe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(z.FRAMEBUFFER,null),X=!1):Fe.__webglFramebuffer===void 0?_.setupRenderTarget(w):Fe.__hasExternalTextures&&_.rebindTextures(w,P.get(w.texture).__webglTexture,P.get(w.depthTexture).__webglTexture);let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);let ke=P.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?V=ke[O][W]:V=ke[O],be=!0):Le.isWebGL2&&w.samples>0&&_.useMultisampledRTT(w)===!1?V=P.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[W]:V=ke,b.copy(w.viewport),F.copy(w.scissor),H=w.scissorTest}else b.copy(ie).multiplyScalar(ee).floor(),F.copy(se).multiplyScalar(ee).floor(),H=ue;if(Z.bindFramebuffer(z.FRAMEBUFFER,V)&&Le.drawBuffers&&X&&Z.drawBuffers(w,V),Z.viewport(b),Z.scissor(F),Z.setScissorTest(H),be){let Fe=P.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,W)}else if(Ce){let Fe=P.get(w.texture),Xe=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.__webglTexture,W||0,Xe)}k=-1},this.readRenderTargetPixels=function(w,O,W,X,V,be,Ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Z.bindFramebuffer(z.FRAMEBUFFER,Ne);try{let Fe=w.texture,Xe=Fe.format,ke=Fe.type;if(Xe!==gn&&Te.convert(Xe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ke===Vs&&(ye.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ke!==ni&&Te.convert(ke)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Qn&&(Le.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-V&&z.readPixels(O,W,X,V,Te.convert(Xe),Te.convert(ke),be)}finally{let Fe=R!==null?P.get(R).__webglFramebuffer:null;Z.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(w,O,W=0){let X=Math.pow(2,-W),V=Math.floor(O.image.width*X),be=Math.floor(O.image.height*X);_.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,w.x,w.y,V,be),Z.unbindTexture()},this.copyTextureToTexture=function(w,O,W,X=0){let V=O.image.width,be=O.image.height,Ce=Te.convert(W.format),Ne=Te.convert(W.type);_.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,w.x,w.y,V,be,Ce,Ne,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,X,w.x,w.y,Ce,Ne,O.image),X===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W,X,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=w.max.x-w.min.x+1,Ce=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Fe=Te.convert(X.format),Xe=Te.convert(X.type),ke;if(X.isData3DTexture)_.setTexture3D(X,0),ke=z.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)_.setTexture2DArray(X,0),ke=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);let He=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qt=z.getParameter(z.UNPACK_SKIP_PIXELS),At=z.getParameter(z.UNPACK_SKIP_ROWS),Cn=z.getParameter(z.UNPACK_SKIP_IMAGES),pt=W.isCompressedTexture?W.mipmaps[V]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(ke,V,O.x,O.y,O.z,be,Ce,Ne,Fe,Xe,pt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ke,V,O.x,O.y,O.z,be,Ce,Ne,Fe,pt.data)):z.texSubImage3D(ke,V,O.x,O.y,O.z,be,Ce,Ne,Fe,Xe,pt),z.pixelStorei(z.UNPACK_ROW_LENGTH,He),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,At),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Cn),V===0&&X.generateMipmaps&&z.generateMipmap(ke),Z.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_.setTextureCube(w,0):w.isData3DTexture?_.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_.setTexture2DArray(w,0):_.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,Z.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Nc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?Ei:xu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ei?it:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},lc=class extends Xs{};lc.prototype.isWebGL1Renderer=!0;pa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ma=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ga=class extends nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new lt,jh=new lt,Wr=[],Kh=new kn,w_=new lt,Ls=new de,Is=new Ti,_a=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,w_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Kh.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Kh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Is.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),jh.multiplyMatrices(i,Qi),Ls.matrixWorld=jh,Ls.raycast(e,Wr);for(let a=0,o=Wr.length;a<o;a++){let c=Wr[a];c.instanceId=r,c.object=this,t.push(c)}Wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends sn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new xe:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,s=[],r=[],a=[],o=new L,c=new lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qs=class extends hn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let i=t||new xe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hc=class extends qs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Xr=new L,Oo=new Fc,Fo=new Fc,Bo=new Fc,uc=class extends hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),l=Xr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Oo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Fo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Bo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Bo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Oo.calc(c),Fo.calc(c),Bo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};xa=class extends hn{constructor(e=new xe,t=new xe,i=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new xe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dc=class extends hn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y),Fs(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends hn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fc=class extends hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends hn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Os(e,s.x,r.x,a.x),Os(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pc=class extends hn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Os(e,s.x,r.x,a.x),Os(e,s.y,r.y,a.y),Os(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Qh(o,c.x,l.x,h.x,u.x),Qh(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},eu=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:uc,CubicBezierCurve:xa,CubicBezierCurve3:dc,EllipseCurve:qs,LineCurve:va,LineCurve3:fc,QuadraticBezierCurve:ya,QuadraticBezierCurve3:pc,SplineCurve:Ma}),mc=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new eu[s.type]().fromJSON(s))}return this}},Ys=class extends mc{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new va(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ya(this.currentPoint.clone(),new xe(e,t),new xe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new xa(this.currentPoint.clone(),new xe(e,t),new xe(i,s),new xe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ma(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new qs(e,t,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gc=class n extends Jt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new L,d=new xe,f=new L,g=new L,x=new L,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=t;S++){let y=i+S*h*s,T=Math.sin(y),C=Math.cos(y);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*T,u.y=e[A].y,u.z=e[A].x*C,a.push(u.x,u.y,u.z),d.x=S/t,d.y=A/(e.length-1),o.push(d.x,d.y);let R=c[3*A+0]*T,k=c[3*A+1],M=c[3*A+0]*C;l.push(R,k,M)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){let T=y+S*e.length,C=T,A=T+e.length,R=T+e.length+1,k=T+1;r.push(C,A,k),r.push(R,k,A)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ba=class n extends gc{constructor(e=1,t=1,i=4,s=8){let r=new Ys;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Sn=class n extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function S(){let T=new L,C=new L,A=0,R=(t-e)/i;for(let k=0;k<=r;k++){let M=[],b=k/r,F=b*(t-e)+e;for(let H=0;H<=s;H++){let Q=H/s,I=Q*c+o,B=Math.sin(I),q=Math.cos(I);C.x=F*B,C.y=-b*i+m,C.z=F*q,u.push(C.x,C.y,C.z),T.set(B,R,q).normalize(),d.push(T.x,T.y,T.z),f.push(Q,1-b),M.push(g++)}x.push(M)}for(let k=0;k<s;k++)for(let M=0;M<r;M++){let b=x[M][k],F=x[M+1][k],H=x[M+1][k+1],Q=x[M][k+1];h.push(b,F,Q),h.push(F,H,Q),A+=6}l.addGroup(p,A,0),p+=A}function y(T){let C=g,A=new xe,R=new L,k=0,M=T===!0?e:t,b=T===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let F=g;for(let H=0;H<=s;H++){let I=H/s*c+o,B=Math.cos(I),q=Math.sin(I);R.x=M*q,R.y=m*b,R.z=M*B,u.push(R.x,R.y,R.z),d.push(0,b,0),A.x=B*.5+.5,A.y=q*.5*b+.5,f.push(A.x,A.y),g++}for(let H=0;H<s;H++){let Q=C+H,I=F+H;T===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),k+=3}l.addGroup(p,k,T===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class n extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new L,T=new L,C=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],T),f(t[A+2],C),c(y,T,C,S)}function c(S,y,T,C){let A=C+1,R=[];for(let k=0;k<=A;k++){R[k]=[];let M=S.clone().lerp(T,k/A),b=y.clone().lerp(T,k/A),F=A-k;for(let H=0;H<=F;H++)H===0&&k===A?R[k][H]=M:R[k][H]=M.clone().lerp(b,H/F)}for(let k=0;k<A;k++)for(let M=0;M<2*(A-k)-1;M++){let b=Math.floor(M/2);M%2===0?(d(R[k][b+1]),d(R[k+1][b]),d(R[k][b])):(d(R[k][b+1]),d(R[k+1][b+1]),d(R[k+1][b]))}}function l(S){let y=new L;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(S),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let S=new L;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let T=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;a.push(T,1-C)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let y=a[S+0],T=a[S+2],C=a[S+4],A=Math.max(y,T,C),R=Math.min(y,T,C);A>.9&&R<.1&&(y<.2&&(a[S+0]+=1),T<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){let T=S*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function g(){let S=new L,y=new L,T=new L,C=new L,A=new xe,R=new xe,k=new xe;for(let M=0,b=0;M<r.length;M+=9,b+=6){S.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),T.set(r[M+6],r[M+7],r[M+8]),A.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),k.set(a[b+4],a[b+5]),C.copy(S).add(y).add(T).divideScalar(3);let F=m(C);x(A,b+0,S,F),x(R,b+2,y,F),x(k,b+4,T,F)}}function x(S,y,T,C){C<0&&S.x===1&&(a[y]=S.x-1),T.x===0&&T.z===0&&(a[y]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},$s=class extends Ys{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ys().fromJSON(s))}return this}},U_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Pu(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(i&&(r=z_(n,e,r,t)),n.length>80*t){o=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Zs(r,a,t,o,c,f,0),a}};Bs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];nu(e),iu(i,e);let a=e.length;t.forEach(nu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,iu(i,t[c]);let o=U_.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};Ri=class n extends _c{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Sa=class n extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new L,g=new xe;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let S=p+m,y=S,T=S+i+1,C=S+i+2,A=S+1;o.push(y,T,A),o.push(T,C,A)}}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ea=class n extends Jt{constructor(e=new $s([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Bs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Bs.isClockWise(S)===!0&&(g[m]=S.reverse())}let x=Bs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){let S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){let S=x[m],y=S[0]+u,T=S[1]+u,C=S[2]+u;i.push(y,T,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return j_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};Tt=class n extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let S=[],y=p/i,T=0;p===0&&a===0?T=.5/t:p===i&&c===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+T,1-y),S.push(l++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let y=h[p][S+1],T=h[p][S],C=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&f.push(y,T,A),(p!==i-1||c<Math.PI)&&f.push(T,C,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Vn=class n extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(x,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ve=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ch:r=e,o=2*t-i;break;case lh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ch:a=e,c=2*i-t;break;case lh:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,T=f*m-f*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+S*a[l+C]+y*a[c+C]+T*a[u+C];return r}},Mc=class extends us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},bc=class extends us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$r(t,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$r(e.times,Array),values:$r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&K_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=jr;Ci=class extends _n{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Jr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;Sc=class extends _n{};Sc.prototype.ValueTypeName="color";Ec=class extends _n{};Ec.prototype.ValueTypeName="number";Tc=class extends us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ks=class extends _n{InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=jr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;Pi=class extends _n{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Jr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;wc=class extends _n{};wc.prototype.ValueTypeName="vector";su={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ac=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Q_=new Ac,Qs=class{constructor(e){this.manager=e!==void 0?e:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";Rc=class extends Qs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=su.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Gs("img");function c(){h(),su.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},ds=class extends Qs{constructor(e){super(e)}load(e,t,i,s){let r=new sn,a=new Rc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},er=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ta=class extends er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zo=new lt,ru=new L,au=new L,wa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ou=new lt,Ds=new L,ko=new L,Cc=class extends wa{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ds),ko.copy(i.position),ko.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ko),i.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),ou.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou)}},Aa=class extends er{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Pc=class extends wa{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bc="\\[\\]\\.:\\/",ex=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",tx="[^"+Bc.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",zc),ix=/(WCOD+)?/.source.replace("WCOD",tx),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),ax=new RegExp("^"+nx+ix+sx+rx+"$"),ox=["material","materials","bones","map"],Lc=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ex,"")}static parseTrackName(e){let t=ax.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ox.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Lc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];yv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Zc={};Ud(Zc,{brickTexture:()=>Fa,dirtTexture:()=>Gc,earthWallTexture:()=>Ba,grassTexture:()=>Vc,noiseTexture:()=>Xc,paintingTexture:()=>Yc,photoTexture:()=>$c,plasterTexture:()=>Wc,setManifest:()=>Hc,skyTexture:()=>Ou,stripeTexture:()=>qc,textBoard:()=>_s,thatchTexture:()=>za,tinTexture:()=>ka,upgradePhoto:()=>Oa,waxTexture:()=>Ii,woodTexture:()=>Gn});function ci(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function jt(n,e,t,i,s,r){let a=document.createElement("canvas");a.width=n,a.height=e,t(a.getContext("2d"),n,e);let o=new ri(a);return o.wrapS=o.wrapT=zs,o.repeat.set(i||1,s||1),o.anisotropy=4,r!==!1&&(o.colorSpace=it),o}function Hc(n){kc=n||{}}function Oa(n,e){if(!(kc.tex||[]).includes(e))return n;let t=new Image;return t.onload=()=>{n.image=t,n.wrapS=n.wrapT=ks,n.colorSpace=it,n.needsUpdate=!0},t.src="img/tex/"+e+".jpg",n}function Ii(n,e){return e=e||"#e0a526",jt(128,128,(t,i,s)=>{t.fillStyle=n||"#e0a526",t.fillRect(0,0,i,s);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=a*32+16+r%2*16,c=r*32+16;t.fillStyle="#fff6df",t.beginPath(),t.arc(o,c,11,0,7),t.fill(),t.fillStyle=e,t.beginPath(),t.arc(o,c,7,0,7),t.fill(),t.fillStyle="#1b1b1b",t.beginPath(),t.arc(o,c,2.5,0,7),t.fill()}},2,2)}function _s(n,e,t,i,s,r){return jt(e,t,a=>{a.fillStyle=i,a.fillRect(0,0,e,t),a.strokeStyle=r||"#f1c40f",a.lineWidth=Math.max(4,t*.04),a.strokeRect(a.lineWidth,a.lineWidth,e-2*a.lineWidth,t-2*a.lineWidth),a.textAlign="center",a.textBaseline="middle",n.forEach((o,c)=>{a.fillStyle=o.c||s,a.font=(o.b===!1?"":"bold ")+o.s+"px Arial, sans-serif",a.fillText(o.t,e/2,t*(o.y||(c+1)/(n.length+1)),e*.92)})},1,1)}function Ou(){return jt(8,256,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2f86d6"),i.addColorStop(.5,"#7cc2ee"),i.addColorStop(.82,"#dff3fb"),i.addColorStop(1,"#f2f6e8"),n.fillStyle=i,n.fillRect(0,0,e,t)},1,1)}function $c(n){if(!(kc.scenes||[]).includes(n))return null;let e=new ds().load("img/scenes/"+n+".jpg");return e.colorSpace=it,e.anisotropy=4,e}var Nu,En,kc,Vc,Gc,Fa,Wc,Ba,za,ka,Gn,Xc,qc,Yc,or=Rl(()=>{ms();Nu={},En=(n,e)=>Nu[n]||(Nu[n]=e()),kc={};Vc=()=>En("grass",()=>Oa(jt(512,512,(n,e,t)=>{let i=ci(7);n.fillStyle="#5f9a3f",n.fillRect(0,0,e,t);for(let s=0;s<9e3;s++){let r=i()*e,a=i()*t,o=3+i()*7,c=i();n.strokeStyle=c<.33?"#4b8a33":c<.66?"#79b34b":"#3f7a2c",n.lineWidth=1,n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*3,a-o),n.stroke()}for(let s=0;s<260;s++)n.fillStyle="rgba(170,140,80,.18)",n.beginPath(),n.arc(i()*e,i()*t,2+i()*9,0,7),n.fill()},40,24),"grass")),Gc=()=>En("dirt",()=>Oa(jt(256,256,(n,e,t)=>{let i=ci(11);n.fillStyle="#b98b57",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i();n.fillStyle=r<.5?"rgba(120,80,40,.35)":"rgba(230,200,150,.3)",n.fillRect(i()*e,i()*t,1+i()*3,1+i()*3)}},8,3),"dirt")),Fa=n=>En("brick"+n,()=>Oa(jt(256,256,(e,t,i)=>{let s=ci(5);e.fillStyle="#7a4a30",e.fillRect(0,0,t,i);let r=64,a=32;for(let o=0;o<i/a;o++)for(let c=-1;c<t/r+1;c++){let l=o%2*r/2,h=.85+s()*.3;e.fillStyle=`rgb(${n[0]*h|0},${n[1]*h|0},${n[2]*h|0})`,e.fillRect(c*r+l+2,o*a+2,r-4,a-4)}for(let o=0;o<900;o++)e.fillStyle="rgba(0,0,0,.08)",e.fillRect(s()*t,s()*i,2,2)},4,2),"brick")),Wc=n=>En("plaster"+n,()=>jt(256,256,(e,t,i)=>{let s=ci(3);e.fillStyle=n,e.fillRect(0,0,t,i);for(let r=0;r<2200;r++)e.fillStyle=s()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.07)",e.fillRect(s()*t,s()*i,2+s()*4,2+s()*4)},3,2)),Ba=()=>En("earth",()=>jt(256,256,(n,e,t)=>{let i=ci(9);n.fillStyle="#b98457",n.fillRect(0,0,e,t);for(let s=0;s<3e3;s++){let r=i();n.fillStyle=r<.5?"rgba(110,70,35,.3)":"rgba(220,180,130,.3)",n.fillRect(i()*e,i()*t,2+i()*5,2+i()*5)}},3,1)),za=()=>En("thatch",()=>jt(256,256,(n,e,t)=>{let i=ci(21);n.fillStyle="#b99a55",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i()*e,a=i()*t;n.strokeStyle=i()<.5?"#8d733a":"#d9bf7a",n.lineWidth=1+i(),n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*6,a+14+i()*14),n.stroke()}},4,3)),ka=()=>En("tin",()=>jt(256,256,(n,e,t)=>{n.fillStyle="#b13a2a",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.5,"rgba(255,255,255,.18)"),s.addColorStop(1,"rgba(0,0,0,.28)"),n.fillStyle=s,n.fillRect(i,0,16,t)}},6,3)),Gn=n=>En("wood"+n,()=>jt(256,256,(e,t,i)=>{let s=ci(13);e.fillStyle=n||"#9a6a3f",e.fillRect(0,0,t,i);for(let r=0;r<i;r+=32)e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,r,t,2);for(let r=0;r<500;r++){e.strokeStyle=s()<.5?"rgba(60,30,10,.18)":"rgba(255,220,170,.12)",e.beginPath();let a=s()*i;e.moveTo(0,a),e.lineTo(t,a+(s()-.5)*6),e.stroke()}},3,3)),Xc=(n,e)=>jt(128,128,(t,i,s)=>{let r=ci(17);t.fillStyle=n,t.fillRect(0,0,i,s);for(let a=0;a<900;a++)t.fillStyle=r()<.5?`rgba(0,0,0,${e})`:`rgba(255,255,255,${e})`,t.fillRect(r()*i,r()*s,3,3)},2,2);qc=()=>En("stripe",()=>jt(128,64,(n,e,t)=>{for(let i=0;i<8;i++)n.fillStyle=i%2?"#fff":"#c0392b",n.fillRect(i*16,0,16,t)},3,1));Yc=()=>En("painting",()=>jt(256,192,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#58b4ea"),i.addColorStop(1,"#e3f6ff"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#ffe07a",n.beginPath(),n.arc(190,45,24,0,7),n.fill(),n.fillStyle="#4f9c3c",n.beginPath(),n.moveTo(0,t),n.quadraticCurveTo(80,80,170,130),n.quadraticCurveTo(220,100,e,t),n.fill(),n.fillStyle="#2e8b57",n.beginPath(),n.arc(60,120,18,0,7),n.fill(),n.fillStyle="#6b4226",n.fillRect(58,120,4,30)},1,1))});ms();var Je=(n,e,t,i)=>({q:n,c:e,a:t,exp:i}),Du={maths:[Je("Une cagette contient 8 mangues. Combien de mangues dans 5 cagettes ?",["30","35","40","45"],"40","5 \xD7 8 = 40."),Je("Quel est le double de 17 ?",["27","34","37","32"],"34","17 \xD7 2 = 34."),Je("Un sac de 25 mangues est partag\xE9 entre 5 enfants. Combien chacun re\xE7oit-il ?",["4","5","6","7"],"5","25 \xF7 5 = 5."),Je("Combien font 7 \xD7 6 ?",["36","42","48","40"],"42","7 \xD7 6 = 42."),Je("Combien font 100 \u2212 37 ?",["73","67","63","53"],"63","100 \u2212 37 = 63."),Je("Quelle est la moiti\xE9 de 90 ?",["40","45","50","55"],"45","90 \xF7 2 = 45."),Je("Combien font 12 + 29 ?",["39","41","43","51"],"41","12 + 29 = 41."),Je("Combien font 9 \xD7 9 ?",["72","81","90","99"],"81","9 \xD7 9 = 81."),Je("Combien font 144 \xF7 12 ?",["10","11","12","14"],"12","12 \xD7 12 = 144."),Je("Quel est le p\xE9rim\xE8tre d\u2019un carr\xE9 de 6 m de c\xF4t\xE9 ?",["12 m","24 m","36 m","30 m"],"24 m","4 \xD7 6 = 24 m."),Je("Trois cahiers \xE0 500 FC chacun co\xFBtent combien en tout ?",["1 000 FC","1 200 FC","1 500 FC","2 000 FC"],"1 500 FC","3 \xD7 500 = 1 500.")],francais:[Je("Hier, nous ___ au march\xE9. (verbe aller)",["allons","sommes all\xE9s","irons","allerons"],"sommes all\xE9s","Au pass\xE9 compos\xE9 : nous sommes all\xE9s."),Je("Quel est l\u2019antonyme de \xAB ancien \xBB ?",["vieux","nouveau","vieil","long"],"nouveau","Le contraire d\u2019\xAB ancien \xBB est \xAB nouveau \xBB."),Je("Quel mot est un nom propre ?",["chien","Kinshasa","livre","maison"],"Kinshasa","Un nom propre d\xE9signe un lieu pr\xE9cis."),Je("Quel est le pluriel de \xAB cheval \xBB ?",["chevals","chevaux","chevaus","chevales"],"chevaux","Les noms en -al font leur pluriel en -aux."),Je("Quel est un synonyme de \xAB content \xBB ?",["triste","heureux","f\xE2ch\xE9","press\xE9"],"heureux","\xAB Content \xBB et \xAB heureux \xBB ont le m\xEAme sens."),Je("Les enfants ___ dans la cour. (jouer, pr\xE9sent)",["jouent","joue","jouons","jouez"],"jouent","Avec \xAB ils / elles \xBB, le verbe se termine par -ent."),Je("Quel mot est un verbe ?",["table","courir","joli","rapidement"],"courir","\xAB Courir \xBB exprime une action : c\u2019est un verbe."),Je("Quel est le f\xE9minin de \xAB acteur \xBB ?",["acteuse","actrice","acteure","actresse"],"actrice","Acteur \u2192 actrice."),Je("Ils ___ faim. (verbe avoir)",["ont","sont","avons","a"],"ont","Ils ont : verbe avoir \xE0 la 3e personne du pluriel.")],geo:[Je("Quelle est la capitale de la RDC ?",["Lubumbashi","Goma","Kinshasa","Kisangani"],"Kinshasa","Kinshasa est la capitale de la RDC."),Je("Combien de provinces compte la RDC aujourd\u2019hui ?",["11","15","26","30"],"26","Depuis 2015, la RDC compte 26 provinces."),Je("Quel grand fleuve traverse Kinshasa ?",["le Nil","le Niger","le Congo","le Zamb\xE8ze"],"le Congo","Le fleuve Congo borde Kinshasa."),Je("Quel oc\xE9an touche la c\xF4te de la RDC ?",["Indien","Atlantique","Pacifique","Arctique"],"Atlantique","La petite c\xF4te de la RDC donne sur l\u2019oc\xE9an Atlantique."),Je("Quelle est la grande ville du Haut-Katanga ?",["Goma","Lubumbashi","Matadi","Bukavu"],"Lubumbashi","Lubumbashi est le chef-lieu du Haut-Katanga."),Je("Quel lac borde la RDC \xE0 l\u2019est ?",["Tchad","Tanganyika","Titicaca","L\xE9man"],"Tanganyika","Le lac Tanganyika longe l\u2019est de la RDC."),Je("Quel est le principal port maritime de la RDC ?",["Matadi","Kindu","Kikwit","Bunia"],"Matadi","Matadi est le grand port sur le fleuve Congo."),Je("Quelle est la capitale du Congo-Brazzaville, pays voisin ?",["Brazzaville","Luanda","Kampala","Kigali"],"Brazzaville","Brazzaville est face \xE0 Kinshasa, de l\u2019autre c\xF4t\xE9 du fleuve.")],histoire:[Je("En quelle ann\xE9e le Congo belge est-il devenu ind\xE9pendant ?",["1948","1960","1965","1975"],"1960","L\u2019ind\xE9pendance date de 1960."),Je("Quel jour c\xE9l\xE8bre-t-on l\u2019ind\xE9pendance ?",["1er mai","30 juin","17 mai","4 d\xE9cembre"],"30 juin","La f\xEAte de l\u2019ind\xE9pendance a lieu le 30 juin."),Je("Qui fut le premier Premier ministre du Congo ind\xE9pendant ?",["Patrice Lumumba","Mobutu","Laurent-D\xE9sir\xE9 Kabila","F\xE9lix Tshisekedi"],"Patrice Lumumba","Patrice Lumumba dirigea le premier gouvernement."),Je("Qui fut le premier pr\xE9sident du Congo ind\xE9pendant ?",["Joseph Kasa-Vubu","Mobutu","Patrice Lumumba","Mo\xEFse Tshombe"],"Joseph Kasa-Vubu","Joseph Kasa-Vubu fut le premier chef de l\u2019\xC9tat."),Je("Quel symbole figure en haut \xE0 gauche du drapeau de la RDC ?",["un soleil","une \xE9toile jaune","une croix","un lion"],"une \xE9toile jaune","Une \xE9toile jaune brille sur fond bleu ciel."),Je("Quelle est la devise de la RDC ?",["Justice \u2013 Paix \u2013 Travail","Unit\xE9 \u2013 Force \u2013 Progr\xE8s","Libert\xE9 \u2013 \xC9galit\xE9 \u2013 Fraternit\xE9","Travail \u2013 Famille \u2013 Patrie"],"Justice \u2013 Paix \u2013 Travail","La devise nationale est \xAB Justice \u2013 Paix \u2013 Travail \xBB."),Je("Quelle est la monnaie de la RDC ?",["le franc congolais","le dollar","le cedi","le naira"],"le franc congolais","La monnaie nationale est le franc congolais (FC).")]},Uu={maths:"Calcul",francais:"Fran\xE7ais",geo:"G\xE9ographie",histoire:"Histoire"},bt={lola:{sc:"ville",x:22.5,z:1.5,ry:-1.9,name:"Mama Lola",short:"Mama Lola",role:"Gardienne du portail",kind:"quiz",sujet:"maths",nb:3,look:{s:"f",h:.93,skin:"#6b4028",c:"#e67e22",c2:"#1f7a4d",k:"pagne",co:"gris",age:"aine"},intro:["Bonjour, mon enfant ! Le portail ne s\u2019ouvre que pour ceux qui savent compter.","R\xE9ponds \xE0 mes trois questions et je te laisse entrer."],outro:"Bravo ! Le portail est ouvert. Entre dans l\u2019\xE9cole et va voir la ma\xEEtresse."},ilunga:{sc:"classe",x:-3,z:-3.6,ry:0,name:"Professeure Ilunga",short:"la ma\xEEtresse",role:"Ma\xEEtresse",kind:"quiz",sujet:"francais",nb:3,needs:"lola",look:{s:"f",h:.98,skin:"#5a3623",c:"#8e44ad",k:"boubou",co:"tresses"},intro:["Bienvenue \xE0 LEXARIS ACAD\xC9MIE !","Aujourd\u2019hui, la le\xE7on porte sur la langue. Trois questions pour commencer."],outro:"Tr\xE8s bien ! Va t\u2019asseoir pr\xE8s de Junior, il t\u2019attend pour la g\xE9ographie."},junior:{sc:"classe",x:2.6,z:-.1,ry:Math.PI,name:"Junior",short:"Junior",role:"\xC9l\xE8ve",kind:"quiz",sujet:"geo",nb:2,needs:"ilunga",sit:!0,look:{s:"h",h:.74,skin:"#7a4a2e",c:"#16a085",k:"uniforme",co:"courtes"},intro:["Salut ! La g\xE9ographie, c\u2019est mon sujet pr\xE9f\xE9r\xE9."],outro:"Bien jou\xE9 ! Va voir le directeur, il veut te poser les derni\xE8res questions."},mavungu:{sc:"classe",x:5.6,z:-3.4,ry:0,name:"Directeur Mavungu",short:"le directeur",role:"Directeur",kind:"quiz",sujet:"histoire",nb:2,needs:"junior",look:{s:"h",h:1.04,skin:"#4f3020",c:"#2c3e50",k:"uniforme",co:"courtes",cravate:!0},intro:["Tu as bien travaill\xE9.","Deux derni\xE8res questions pour finir la le\xE7on."],outro:"Le\xE7on termin\xE9e ! Tu gagnes 20 pi\xE8ces et du tissu wax pour ta maison."},bea:{sc:"ville",x:3,z:-6.6,ry:0,name:"Maman B\xE9a",short:"Maman B\xE9a",role:"Marchande",kind:"shop",look:{s:"f",h:.97,skin:"#744630",c:"#c0392b",k:"pagne",co:"nattes"}},mama:{sc:"maison",x:1.4,z:-.8,ry:0,name:"Maman",short:"Maman",role:"\xC0 la maison",kind:"talk",look:{s:"f",h:.97,skin:"#6b4028",c:"#d35400",k:"pagne",co:"tresses"}}},ai={jer:{sc:"ville",x:11,z:3.2,ry:-1.2,name:"J\xE9r\xE9mie",look:{s:"h",h:.9,skin:"#6b4028",c:"#27ae60",k:"uniforme",co:"courtes"}},kasa:{sc:"ville",x:12.6,z:4.6,ry:-1.9,name:"Petit Kasa",look:{s:"f",h:.72,skin:"#8a5634",c:"#e0a526",k:"pagne",co:"nattes"}}},Da=[["J\xE9r\xE9mie","La le\xE7on commence bient\xF4t, tu viens ?"],["Petit Kasa","Mama Lola garde le portail, elle pose des questions !"],["J\xE9r\xE9mie","R\xE9ponds bien et tu entreras dans la classe."],["Petit Kasa","Moi, je connais d\xE9j\xE0 toutes les mangues !"],["J\xE9r\xE9mie","Le manguier du village donne les meilleures mangues."]],un={natte:{n:"Natte tress\xE9e",p:10},table:{n:"Table en bois",p:25},lampe:{n:"Lampe",p:20},rideau:{n:"Rideau en wax",p:10,t:1},tableau:{n:"Tableau du village",p:30},plante:{n:"Plante verte",p:15}},gs=["#c58b62","#b07a50","#9a6641","#7a4a2e","#63391f","#4f3020","#3d2416","#d9a67c"],Ua=["#140d09","#2e1a10","#5a3319","#8a3a1c","#c79a3b","#7a7a7a","#d9d9d9","#7b2a6e"],nr=["#120a06","#3b2212","#2f4a3a","#2a4a6e"],ir=["#7a3a30","#a8483c","#c0566a","#4a2a24"],Na=["#1f7a4d","#2e86de","#c0392b","#e67e22","#8e44ad","#16a085","#e0a526","#2c3e50","#d6336c","#f1f1f1"],sr={courtes:{n:"Courts",own:!0},rase:{n:"Ras\xE9",own:!0},tresses:{n:"Tresses",own:!0},nattes:{n:"Nattes",own:!0},afro:{n:"Afro",own:!0},chignon:{n:"Chignon",unlock:"lola"},noeuds:{n:"N\u0153uds bantous",price:25},locks:{n:"Locks",price:30}},rr={boucles:{n:"Boucles d\u2019oreilles",own:!0},lunettes:{n:"Lunettes",unlock:"ilunga"},casquette:{n:"Casquette",unlock:"junior"},foulard:{n:"Foulard",price:20},collier:{n:"Collier de perles",price:15},sac:{n:"Sac \xE0 dos",price:25}},oi={uniforme:{n:"Uniforme de l\u2019\xE9cole",own:!0,top:"plain",bottom:"auto",trouser:"#262a3a",collar:!0},polo:{n:"Polo et jean",price:35,top:"plain",bottom:"trousers",trouser:"#2f4a7a",collar:!0},sport:{n:"Tenue de sport",price:40,top:"plain",bottom:"trousers",trouser:"#233044",collar:!1,matchTrouser:!0},robe:{n:"Robe de f\xEAte",price:70,top:"plain",bottom:"skirt",belt:!0},pagne:{n:"Tenue wax",unlock:"mavungu",top:"wax",bottom:"auto",trouser:"#262a3a"},boubou:{n:"Boubou brod\xE9",price:60,top:"plain",bottom:"long",trim:!0}},ar={s:"f",skin:3,faceW:.5,jaw:.4,eyeS:.5,eyeC:1,brow:0,nose:.5,lips:.5,lipC:0,hair:"tresses",hairC:0,beard:0,acc:[],outfit:"uniforme",outfitC:0,blush:.3},Li={4:{outfits:["sport"]}};ms();or();var je=(n,e,t,i)=>new Ve(Object.assign({color:n,roughness:e===void 0?.85:e,metalness:t||0},i||{})),Wn=(n,e,t)=>{let i=new de(new ba(n,e,6,14),t);return i.castShadow=!0,i},ft=(n,e,t,i,s,r)=>{let a=new de(new Tt(n,r||20,r?Math.round(r*.8):16),e);return a.scale.set(t||1,i||1,s||1),a.castShadow=!0,a},li=(n,e,t)=>{let i=new ot;return i.position.set(n,e,t),i},cx=(n,e,t)=>n+(e-n)*t;function lx(n){let e=n.hair||n.co||"courtes",t={s:n.s||"f",h:n.h||1,skin:typeof n.skin=="number"?gs[n.skin]||gs[3]:n.skin||gs[3],faceW:n.faceW===void 0?.5:n.faceW,jaw:n.jaw===void 0?.4:n.jaw,eyeS:n.eyeS===void 0?.5:n.eyeS,eyeC:nr[n.eyeC||1]||nr[1],brow:n.brow||0,nose:n.nose===void 0?.5:n.nose,lips:n.lips===void 0?.5:n.lips,lipC:ir[n.lipC||0]||ir[0],blush:n.blush===void 0?.3:n.blush,hair:e,hairHex:n.hairHex||(typeof n.hairC=="number"?Ua[n.hairC]:e==="gris"?"#d9d9d9":"#140d09"),beard:n.beard||0,acc:n.acc||[],outfit:n.outfit||(n.k==="pagne"?"pagne":n.k==="boubou"?"boubou":"uniforme"),c:n.cHex||(typeof n.outfitC=="number"?Na[n.outfitC]:n.c||"#1f7a4d"),c2:n.c2,cravate:!!n.cravate};return n.s!=="f"&&t.hair,t}function Fu(n,e,t,i){let s=new Tt(1,40,32,0,Math.PI*2,e||0,t||Math.PI),r=s.attributes.position,a=.092+.022*n.faceW,o=.122,c=.108,l=cx(.46,.14,n.jaw);for(let h=0;h<r.count;h++){let u=r.getX(h),d=r.getY(h),f=r.getZ(h);if(d<-.05){let g=Math.min(1,(-d-.05)/.95),x=1-l*Math.pow(g,1.35);u*=x,f*=1-l*.55*Math.pow(g,1.35),f>0&&(f*=1-.1*g)}f>0&&d>-.45&&d<.2&&(u*=1+.03*n.faceW),r.setXYZ(h,u*a*(i||1),d*o*(i||1),f*c*(i||1))}return s.computeVertexNormals(),s}function Jc(n){let e=lx(n),t=oi[e.outfit]||oi.uniforme,i=e.s==="f",s=new Be(e.skin),r=je(s,.55,0,{emissive:s.clone().multiplyScalar(.1)}),a=je(s.clone().multiplyScalar(.7),.6),o=je(e.hairHex,.5,.08),c=je(e.c,.85),l=je("#1c1410",.7),h=t.top==="wax"?je("#ffffff",.85,0,{map:Ii(e.c,e.c2||"#e0a526")}):null,u=h||c,d=t.bottom;d==="auto"&&(d=i?"skirt":"trousers");let f=t.matchTrouser?new Be(e.c).multiplyScalar(.6):new Be(t.trouser||"#262a3a"),g=je(f,.9),x=d==="long",m=d==="skirt",p=d==="trousers",S=new ot,y=new ot;S.add(y);let T=li(0,.95,0);y.add(T);let C=ft(.17,p?g:x||m?u:g,1.15,.7,.85);C.position.y=.02,T.add(C);let A=li(0,.06,0);T.add(A);let R=Wn(.165,.34,u);if(R.scale.set(i?1:1.12,1,.72),R.position.y=.27,A.add(R),i&&[-1,1].forEach(N=>{let P=ft(.072,u,1,1,.9);P.position.set(N*.065,.4,.1),A.add(P)}),t.collar){let N=ft(.09,je("#f2f2f2",.8),1.4,.5,1);N.position.set(0,.56,.02),A.add(N)}if(t.belt){let N=new de(new Vn(.17,.012,8,24),je("#e0a526",.4,.7));N.rotation.x=Math.PI/2,N.position.set(0,.06,0),N.scale.set(1.1,.8,1),A.add(N)}if(e.cravate){let N=new de(new Mt(.05,.3,.015),je("#a8301e",.7));N.position.set(0,.36,.125),A.add(N)}if(t.trim){let N=new de(new Vn(.085,.012,8,20),je("#e0a526",.4,.7));N.rotation.x=Math.PI/2,N.position.set(0,.55,.03),N.scale.set(1.4,1,1.1),A.add(N)}let k=li(0,.6,0);A.add(k);let M=Wn(.045,.06,r);M.position.y=.04,k.add(M);let b=li(0,.1,0);b.scale.setScalar(1.12),k.add(b);let F=new de(Fu(e),r);F.position.y=.12,F.castShadow=!0,b.add(F);let H=.092+.022*e.faceW;[-1,1].forEach(N=>{let P=ft(.026,r,.5,1,.8);P.position.set(N*(H+.004),.125,-.005),b.add(P)}),e.blush>.05&&[-1,1].forEach(N=>{let P=ft(.03,je("#d4607a",.9,0,{transparent:!0,opacity:.18*e.blush*2}),1,.8,.3);P.position.set(N*.05,.095,.088),b.add(P)});let Q=.0175*(.85+e.eyeS*.5),I=je("#f7f3ec",.35),B=je(e.eyeC,.25),q=je("#050302",.2),ee=new qt({color:16777215}),K=[];[-1,1].forEach(N=>{let P=N*.04,_=.146,v=ft(Q,I,1.25,.9,.65);v.position.set(P,_,.087),b.add(v);let U=ft(Q*.62,B,1,1,.5);U.position.set(P,_,.087+Q*.5),b.add(U);let J=ft(Q*.32,q,1,1,.4);J.position.set(P,_,.087+Q*.62),b.add(J);let $=ft(Q*.16,ee,1,1,1,8);$.position.set(P+N*.0035,_+.004,.087+Q*.8),b.add($),K.push(v,U,J);let te=new de(new Tt(Q*1.28,16,8,0,Math.PI*2,0,Math.PI*.46),a);if(te.scale.set(1.2,.9,.8),te.position.set(P,_+.001,.088),te.rotation.x=-.15,b.add(te),i){let we=new de(new Mt(Q*2.5,.003,.006),o);we.position.set(P,_+Q*1,.097),we.rotation.z=-N*.1,b.add(we)}let Me=.036,ce=e.brow===1?.011:.0055,_e=new de(new Mt(Me,ce,.008),o);if(_e.position.set(P,.176+(e.brow===2?.004:0),.092),_e.rotation.z=-N*(e.brow===2?.22:.08),b.add(_e),e.brow===2){let we=_e.clone();we.position.x=P+N*.014,we.position.y=.172,we.rotation.z=N*.12,b.add(we)}});let Y=.8+e.nose*.7,ie=new de(new Mt(.016*Y,.04,.012),r);ie.position.set(0,.128,.1),b.add(ie);let se=ft(.0165*Y,r,1,.9,1);se.position.set(0,.103,.107),b.add(se),[-1,1].forEach(N=>{let P=ft(.011*Y,r,1,.9,.9);P.position.set(N*.015*Y,.1,.1),b.add(P);let _=ft(.004,je("#1a0f0a",.5),1,1,1,8);_.position.set(N*.008*Y,.094,.113),b.add(_)});let ue=.026+.012*e.lips,G=.0045+.0045*e.lips,j=je(e.lipC,.3),le=ft(1,j,ue,G,.009,14);le.position.set(0,.0745,.1),b.add(le);let oe=ft(1,j,ue*.92,G*1.35,.01,14);oe.position.set(0,.0635,.099),b.add(oe);let Ee=new ot;Ee.position.set(0,.069,.099),b.add(Ee);let ne=new de(new Mt(ue*1.7,.002,.004),je("#2a1210",.5));if(Ee.add(ne),e.beard>0&&!i){let N=Fu(e,Math.PI*.54,Math.PI*.46,1.035),P=je(e.hairHex,.9,0,e.beard===1?{transparent:!0,opacity:.42}:{}),_=new de(N,P);if(_.position.y=.12,b.add(_),e.beard===2){let v=ft(1,o,.026,.007,.01);v.position.set(0,.087,.104),b.add(v)}}let he=e.hair,re=(N,P)=>{let _=(.098+.02*e.faceW)*N,v=.128*N,U=.113*N,J=new de(new Tt(1,28,14,0,Math.PI*2,0,Math.PI*.36),o);J.scale.set(_,v,U),J.position.y=.125,J.rotation.x=P===void 0?-.12:P,J.castShadow=!0,b.add(J);let $=new de(new Tt(1,28,16,Math.PI*.12,Math.PI*.76,0,Math.PI*.66),o);return $.scale.set(_*1.005,v*1.005,U*1.005),$.position.y=.125,$.rotation.y=Math.PI,$.castShadow=!0,b.add($),J};if(he==="courtes"||he==="gris")re(1.06);else if(he==="rase")re(1);else if(he==="tresses"){re(1.07);for(let N=0;N<11;N++){let P=-1.35+N*.27,_=Wn(.013,.22,o);_.position.set(Math.sin(P)*(H+.014),.03,-.015-Math.cos(P)*.035),_.rotation.z=Math.sin(P)*.22,b.add(_)}}else if(he==="nattes")re(1.07),[-1,1].forEach(N=>{for(let P=0;P<4;P++){let _=ft(.026,o,1,1.35,1);_.position.set(N*(H+.012),.1-P*.05,-.01+P%2*.006),b.add(_)}});else if(he==="afro"){let N=new de(new Ri(.16,4),o),P=N.geometry.attributes.position;for(let _=0;_<P.count;_++){let v=1+(Math.sin(P.getX(_)*90)+Math.cos(P.getY(_)*80)*Math.sin(P.getZ(_)*70))*.035;P.setXYZ(_,P.getX(_)*v,P.getY(_)*v,P.getZ(_)*v)}N.geometry.computeVertexNormals(),N.scale.set(1,.96,.95),N.position.set(0,.225,-.05),N.castShadow=!0,b.add(N)}else if(he==="chignon"){re(1.06);let N=ft(.055,o,1,.95,1);N.position.set(0,.255,-.045),b.add(N)}else if(he==="noeuds"){re(1.04);for(let N=0;N<14;N++){let P=N/14*Math.PI*2,_=N<9?.075:.04,v=ft(.026,o,1,1,1,10);v.position.set(Math.sin(P)*_,.225+(N<9?0:.03),Math.cos(P)*_*.9-.02),b.add(v)}}else if(he==="locks"){re(1.08);for(let N=0;N<20;N++){let P=-2.5+N*.26;if(Math.abs(P)<.9)continue;let _=Wn(.011,.32,o);_.position.set(Math.sin(P)*(H+.018),0,-.02-Math.cos(P)*.05),_.rotation.z=Math.sin(P)*.12,b.add(_)}for(let N=0;N<5;N++){let P=Wn(.011,.28,o);P.position.set((N-2)*.03,0,-.1),b.add(P)}}if(he==="gris"){let N=ft(.05,o,1,.9,1);N.position.set(0,.24,-.06),b.add(N);let P=new de(new Vn(.105,.03,10,24),je("#1f7a4d",.8));P.rotation.x=Math.PI/2,P.position.y=.2,P.scale.set(1,1.05,1),b.add(P)}let ve=e.acc||[];if((ve.indexOf("boucles")>=0||i&&n.s==="f"&&n.h&&!n.acc)&&[-1,1].forEach(N=>{let P=ft(.009,je("#e0a526",.3,.8),1,1,1,8);P.position.set(N*(H+.008),.075,0),b.add(P);let _=ft(.007,je("#e0a526",.3,.8),1,1.6,1,8);_.position.set(N*(H+.008),.055,0),b.add(_)}),ve.indexOf("lunettes")>=0){let N=je("#1a1a22",.3,.5);[-1,1].forEach(_=>{let v=new de(new Vn(.027,.0035,8,20),N);v.position.set(_*.04,.146,.1),b.add(v)});let P=new de(new Mt(.02,.003,.003),N);P.position.set(0,.148,.103),b.add(P),[-1,1].forEach(_=>{let v=new de(new Mt(.003,.003,.1),N);v.position.set(_*.068,.148,.05),b.add(v)})}if(ve.indexOf("casquette")>=0){let N=je("#c0392b",.7),P=new de(new Tt(.12,22,12,0,Math.PI*2,0,Math.PI*.5),N);P.position.set(0,.21,0),P.scale.set(1,.95,1.05),P.castShadow=!0,b.add(P);let _=new de(new Sn(.1,.1,.008,18,1,!1,-Math.PI/2,Math.PI),N);_.position.set(0,.215,.1),_.scale.set(1,1,.9),_.rotation.x=0,b.add(_)}if(ve.indexOf("foulard")>=0){let N=je("#e0a526",.8),P=new de(new Vn(.108,.032,10,24),N);P.rotation.x=Math.PI/2,P.position.y=.215,P.scale.set(1,1.05,1),b.add(P);let _=ft(.04,N,1.3,.7,.7);_.position.set(0,.26,-.07),b.add(_)}if(ve.indexOf("collier")>=0){let N=je("#f4efe6",.3,.2);for(let P=0;P<16;P++){let _=P/16*Math.PI*2,v=ft(.011,N,1,1,1,8);v.position.set(Math.sin(_)*.095,.585,Math.cos(_)*.075+.03),A.add(v)}}if(ve.indexOf("sac")>=0){let N=je("#2e86de",.7),P=new de(new Mt(.28,.34,.12),N);P.position.set(0,.3,-.17),P.castShadow=!0,A.add(P);let _=new de(new Mt(.2,.14,.03),je("#1f5fa8",.7));_.position.set(0,.22,-.24),A.add(_),[-1,1].forEach(v=>{let U=new de(new Mt(.03,.3,.02),je("#1f5fa8",.7));U.position.set(v*.09,.38,.1),A.add(U)})}let z=[];[-1,1].forEach(N=>{let P=li(N*.235,.5,0);A.add(P);let _=x,v=Wn(.045,.2,u);v.position.y=-.14,P.add(v);let U=li(0,-.28,0);P.add(U);let J=Wn(.037,.2,_?u:r);J.position.y=-.13,U.add(J);let $=ft(.04,r,1,1.15,.8);$.position.y=-.3,U.add($),P.rotation.z=N*.08,z.push({sh:P,el:U})});let Ue=[];[-1,1].forEach(N=>{let P=li(N*.095,0,0);T.add(P);let _=p?g:r,v=Wn(.068,.3,_);v.position.y=-.21,P.add(v);let U=li(0,-.42,0);P.add(U);let J=Wn(.052,.3,_);J.position.y=-.2,U.add(J);let $=new de(new Mt(.09,.06,.2),l);$.position.set(0,-.43,.04),$.castShadow=!0,U.add($),Ue.push({hj:P,kn:U})});let ye=null;if(m){let N=h?Ii(e.c,e.c2||"#e0a526"):null,P=N?new Ve({map:N,roughness:.85,side:It}):je(e.c,.85,0,{side:It}),_=new de(new Sn(.19,t.belt?.34:.3,t.belt?.7:.62,24,1,!0),P);_.position.y=t.belt?-.37:-.34,_.castShadow=!0,T.add(_)}if(x){let N=new Ve({map:Xc(e.c,.16),roughness:.8,side:It}),P=new de(new Sn(.2,.37,.98,28,1,!0),N);if(P.position.y=-.45,P.castShadow=!0,T.add(P),t.trim){let _=new de(new Vn(.37,.012,6,28),je("#e0a526",.4,.7));_.rotation.x=Math.PI/2,_.position.y=-.93,T.add(_)}Ue.forEach(_=>{_.kn.visible=!1}),ye=[-1,1].map(_=>{let v=new de(new Mt(.09,.06,.2),l);return v.position.set(_*.09,-.94,.06),T.add(v),v})}let Le={t:Math.random()*10};function Z(N,P){Le.t+=N,P=P||{};let _=P.speed||0,v=Le.t,U=Math.min(1,_/2.2),J=_>3.2,$=v*(J?11:7.5),te=!!P.sit;if(te)y.position.y=-.46,Ue.forEach(Pe=>{Pe.hj.rotation.x=-Math.PI/2+.05,Pe.kn.rotation.x=Math.PI/2-.05}),ye&&ye.forEach(Pe=>{Pe.visible=!1});else{y.position.y=Math.abs(Math.sin($))*.035*U*(J?1.6:1);let Pe=(J?.95:.6)*U;Ue[0].hj.rotation.x=Math.sin($)*Pe,Ue[1].hj.rotation.x=-Math.sin($)*Pe,Ue[0].kn.rotation.x=Math.max(0,-Math.sin($))*Pe*1.3+.04,Ue[1].kn.rotation.x=Math.max(0,Math.sin($))*Pe*1.3+.04,ye&&ye.forEach(ae=>{ae.visible=!0})}R.scale.y=1+Math.sin(v*1.8)*.012,A.rotation.y=Math.sin($)*.12*U,A.rotation.x=.05*U+(J?.12:0),T.rotation.y=-Math.sin($)*.08*U;let Me=z[0],ce=z[1],_e=(J?.9:.55)*U;Me.sh.rotation.x=te?-.5:Math.sin($)*_e,ce.sh.rotation.x=te?-.5:-Math.sin($)*_e,Me.el.rotation.x=-.12-(te?.6:0)-Math.max(0,Math.sin($))*.5*U,ce.el.rotation.x=-.12-(te?.6:0)-Math.max(0,-Math.sin($))*.5*U,Me.sh.rotation.z=-.08,ce.sh.rotation.z=.08,!_&&!te&&(Me.sh.rotation.x=Math.sin(v*1.3)*.03,ce.sh.rotation.x=-Math.sin(v*1.3)*.03),P.talk?(ce.sh.rotation.x=-.9+Math.sin(v*5)*.25,ce.sh.rotation.z=.35,ce.el.rotation.x=-1+Math.sin(v*6.2)*.35,b.rotation.x=Math.sin(v*4)*.05,b.rotation.y=Math.sin(v*1.7)*.12,Ee.scale.y=1+Math.abs(Math.sin(v*12))*3,oe.position.y=.0635-Math.abs(Math.sin(v*12))*.006):(b.rotation.x=0,b.rotation.y=_?0:Math.sin(v*.7)*.18,Ee.scale.y=1,oe.position.y=.0635),P.wave&&(ce.sh.rotation.x=0,ce.sh.rotation.z=2.5+Math.sin(v*9)*.18,ce.el.rotation.x=-.5+Math.sin(v*9)*.4),P.pose==="creator"&&(b.rotation.y=Math.sin(v*.5)*.15,ce.sh.rotation.x=0,Me.sh.rotation.x=0);let we=Math.sin(v*.9)>.985?.1:1;K.forEach(Pe=>{Pe.scale.y=(Pe.userData.sy||(Pe.userData.sy=Pe.scale.y))*we})}return S.scale.setScalar(e.h||1),Object.assign(S.userData,{update:Z,state:Le,height:1.78*(e.h||1),headY:1.78}),S}ms();var hx={lola:1,ilunga:1,bea:1,mama:1,kasa:1},Qc={lola:1.55,ilunga:1.68,junior:1.45,mavungu:1.78,bea:1.65,mama:1.68,jer:1.62,kasa:1.25,pf1:1.72,pf2:1.68,ph1:1.82,ph2:1.78},ux=new ds,jc={};function Bu(n){if(jc[n])return jc[n];let e=ux.load("img/chars/"+n+".webp");return e.colorSpace=it,e.anisotropy=4,e.generateMipmaps=!0,jc[n]=e}var Kc=null;function dx(){if(Kc)return Kc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Kc=new ri(n)}function el(n,e){e=e||{};let t=e.height||Qc[n]||1.7,i=new ot,s=new de(new dt(1,1),new qt({map:dx(),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,s.scale.set(t*.5,t*.28,1),i.add(s);let r=new ot;i.add(r);let a=M=>new qt({map:M,transparent:!0,alphaTest:.45,side:It,color:new Be(e.tone||"#f4f1ec")}),o=a(Bu(n)),c=e.walk?a(Bu(e.walk)):null,l=14,h=36,u=new dt(1,1,l,h);u.translate(0,.5,0);let d=u.attributes.position,f=Float32Array.from(d.array),g=!!hx[n],x=!!e.walk,m=new de(u,o);r.add(m);let p=(M,b,F)=>{let H=Math.min(1,Math.max(0,(F-M)/(b-M)));return H*H*(3-2*H)};function S(M,b,F,H,Q){let I=Math.sin(M),B=Math.max(0,I)*.085*b,q=Math.max(0,-I)*.085*b,ee=I*.08*b,K=Math.sin(H*.5)*.006*Q;for(let Y=0;Y<d.count;Y++){let ie=f[Y*3],se=f[Y*3+1],ue=ie,G=se,j=se;if(!g&&!x&&j<.54&&b>0){let le=p(.52,.04,j),oe=p(.06,-.06,ie);G+=(B*oe+q*(1-oe))*le*le}if(g&&b>0&&j<.62){let le=p(.6,.05,j);ue+=Math.sin(M+j*5)*.018*b*le,G+=Math.abs(I)*.01*b*le}if(b>0&&j>.42&&j<.86){let le=p(.2,.34,Math.abs(ie))*p(.42,.55,j)*p(.86,.74,j),oe=ie<0?1:-1;G+=(G-.8)*ee*oe*le*3}F&&j>.84&&(G+=Math.sin(H*5)*.004*p(.84,.96,j)),ue+=K*p(0,1,j),d.setXYZ(Y,ue,G,0)}d.needsUpdate=!0}S(0,0,!1,0,1);let y=.33,T=()=>{m.scale.set(t*y,t,1),s.scale.set(Math.max(.5,t*y*1.1),t*.2,1)};T();let C=o.map,A=setInterval(()=>{C.image&&C.image.width&&(y=C.image.width/C.image.height,T(),clearInterval(A))},60),R={t:Math.random()*10,ph:0};function k(M,b){b=b||{},R.t+=M;let F=R.t,H=b.speed||0;b.cam&&(r.rotation.y=Math.atan2(b.cam.x-i.position.x,b.cam.z-i.position.z)-i.rotation.y);let Q=0,I=0,B=1,q=1,ee=o;if(H>.1){R.ph+=M*(H>3.2?9:6.5);let K=Math.sin(R.ph);Q=Math.abs(K)*.012*(H>3.2?1.5:1),I=K*.035,c&&(ee=Math.floor(R.ph/Math.PI)%2?c:o,q=1),b.lean&&(I+=b.lean*.05)}else R.ph=0,B=1+Math.sin(F*1.8)*.004,I=Math.sin(F*.9)*.008;b.talk&&(Q+=Math.abs(Math.sin(F*6))*.012,I+=Math.sin(F*4)*.012),b.wave&&(Q+=Math.abs(Math.sin(F*9))*.04,I+=Math.sin(F*9)*.07),m.material=ee,m.position.y=Q,m.rotation.z=I,m.scale.y=t*B,S(R.ph,Math.min(1,H/2.2),!!b.talk,F,H>.1?0:1),m.scale.x=t*y*q}return Object.assign(i.userData,{update:k,state:R,height:t,photo:!0}),i}var Di={village:{img:"village",name:"Mon quartier",focus:48,amb:"village",items:[{k:"npc",id:"jer",x:60,y:93,h:44},{k:"npc",id:"kasa",x:71,y:95,h:44},{k:"go",to:"maison",x:19,y:58,ico:"\u2B06",label:"Entrer dans ma maison"},{k:"go",to:"marche",x:73,y:62,ico:"\u27A1",label:"Vers le march\xE9"},{k:"go",to:"fleuve",x:30,y:90,ico:"\u2B05",label:"Vers le fleuve"},{k:"tree",x:50,y:26,label:"Cueillir des mangues"}]},marche:{img:"marche",name:"Le march\xE9",focus:50,amb:"marche",items:[{k:"npc",id:"bea",x:46,y:98,h:56},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"},{k:"go",to:"portail",x:64,y:55,ico:"\u2B06",label:"Vers l\u2019\xE9cole"}]},portail:{img:"portail",name:"Le portail de l\u2019\xE9cole",focus:48,amb:"portail",items:[{k:"npc",id:"lola",x:42,y:98,h:56},{k:"go",to:"classe",x:55,y:50,ico:"\u2B06",label:"Entrer dans l\u2019\xE9cole",need:"lola"},{k:"go",to:"marche",x:9,y:88,ico:"\u2B05",label:"Retour au march\xE9"}]},classe:{img:"classe",name:"La classe",focus:50,amb:"classe",items:[{k:"npc",id:"ilunga",x:50,y:62,h:34},{k:"npc",id:"junior",x:40,y:80,h:40},{k:"npc",id:"mavungu",x:61,y:84,h:46},{k:"go",to:"portail",x:50,y:97,ico:"\u2B07",label:"Sortir de l\u2019\xE9cole"}]},maison:{img:"maison",name:"Ma maison",focus:50,amb:"maison",items:[{k:"npc",id:"mama",x:47,y:98,h:64},{k:"objs",x:19,y:74,label:"Mes objets"},{k:"go",to:"village",x:86,y:92,ico:"\u2B07",label:"Sortir"}]},fleuve:{img:"fleuve",name:"Le fleuve Congo",focus:50,amb:"fleuve",items:[{k:"fact",x:52,y:60,label:"Le fleuve Congo"},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"}]}};function zu(n){let{G:e,NPC:t,AUTOP:i,AUTO:s,actionFor:r,toast:a,speak:o,SFX:c,gain:l,save:h,refreshHud:u,openBox:d,esc:f,hasChar:g}=n,x=document.getElementById("pv");x.innerHTML='<div class="pblur"></div><div id="pstage"><div id="pdrift"><div class="pbg"></div><div id="pitems"></div></div></div><div class="pfade"></div><div class="pplace"></div><button class="pstop hide">Arr\xEAter</button><div class="phint hide">\u2194 Fais glisser pour regarder autour</div>';let m=x.querySelector("#pstage"),p=x.querySelector("#pdrift"),S=x.querySelector(".pbg"),y=x.querySelector("#pitems"),T=x.querySelector(".pblur"),C=x.querySelector(".phint"),A=x.querySelector(".pfade"),R=x.querySelector(".pplace"),k=x.querySelector(".pstop"),M={id:null,panX:0,W:0,H:0,dragged:!1,greeted:{},busy:!1};function b(Z){let N=x.clientWidth,P=x.clientHeight,_=Math.max(N,Math.min(P*16/9,N*2.15)),v=_*9/16;M.vw=N,M.vh=P,M.W=_,M.H=v,m.style.width=_+"px",m.style.height=v+"px",m.style.top=(P-v)*(v<P?.5:.75)+"px";let U=Di[M.id];Z||(M.panX=N/2-_*(U?U.focus:50)/100),F(),H()}let F=()=>{M.panX=Math.min(0,Math.max(M.vw-M.W,M.panX))},H=()=>{m.style.left=M.panX+"px"};window.addEventListener("resize",()=>{M.id&&e.ui==="photo"&&b(!1)});let Q=null;x.addEventListener("pointerdown",Z=>{e.ui==="photo"&&(Q={x:Z.clientX,pan:M.panX,moved:!1},M.dragged=!1)}),x.addEventListener("pointermove",Z=>{if(!Q)return;let N=Z.clientX-Q.x;Math.abs(N)>7&&(Q.moved=!0),Q.moved&&(M.panX=Q.pan+N,F(),H(),M.dragged=!0)});let I=()=>{Q&&Q.moved&&setTimeout(()=>{M.dragged=!1},80),Q=null};x.addEventListener("pointerup",I),x.addEventListener("pointercancel",I);function B(Z){let N=Di[Z];M.id=Z,S.style.backgroundImage=`url(img/scenes/${N.img}.jpg)`,T.style.backgroundImage=`url(img/scenes/${N.img}.jpg)`,R.textContent="\u{1F4CD} "+N.name;let P="";N.items.forEach((_,v)=>{if(_.k==="npc"){if(!g(_.id))return;let U=t[_.id]||i[_.id],J=_.h*(Qc[_.id]||1.7)/1.7,$=q(_.id);P+=`<div class="pn ${$.cls}" data-i="${v}" style="left:${_.x}%;top:${_.y}%;height:${J}%"><i class="sh"></i><img src="img/chars/${_.id}.webp" alt="" draggable="false"><span class="tag">${$.ico} ${f(U.short||U.name)}</span></div>`}else if(_.k==="go"){let U=_.need&&!n.doneNpc(_.need);P+=`<button class="hs go${U?" locked":""}" data-i="${v}" style="left:${_.x}%;top:${_.y}%"><span class="ic">${U?"\u{1F512}":_.ico}</span><span class="lb">${f(U?"Mama Lola garde le passage":_.label)}</span></button>`}else P+=`<button class="hs ${_.k}" data-i="${v}" style="left:${_.x}%;top:${_.y}%"><span class="ic">${_.k==="tree"?"\u{1F96D}":_.k==="objs"?"\u{1F9FA}":"\u2139\uFE0F"}</span><span class="lb">${f(_.label)}</span></button>`}),y.innerHTML=P,b(!1)}function q(Z){let N=t[Z];return N?N.kind==="quiz"?n.locked(Z)?{cls:"lock",ico:"\u{1F512}"}:n.doneNpc(Z)?{cls:"done",ico:"\u2714"}:{cls:"todo",ico:"\u2757"}:{cls:"",ico:"\u{1F4AC}"}:{cls:"",ico:"\u{1F4AC}"}}function ee(Z,N){if(M.busy)return;if(M.busy=!0,j(),!M.id){B(Z),M.busy=!1,K(Z);return}p.style.transition="transform .28s ease-in,opacity .28s ease-in",p.style.transform=`scale(${N&&N.back?.94:1.18})`,p.style.opacity="0",A.style.opacity="1",setTimeout(()=>{B(Z),p.style.transition="none",p.style.transform=`scale(${N&&N.back?1.1:.94})`,p.offsetWidth,p.style.transition="transform .42s ease-out,opacity .42s ease-out",p.style.transform="scale(1)",p.style.opacity="1",A.style.opacity="0",setTimeout(()=>{p.style.transition="",M.busy=!1,K(Z)},430)},290)}function K(Z){ye(Di[Z].amb);let P=Di[Z].items.find(_=>_.k==="npc"&&t[_.id]&&!M.greeted[_.id]&&g(_.id));P&&(M.greeted[P.id]=!0,setTimeout(()=>{M.id===Z&&e.mode==="pview"&&ue(P.id,"Bonjour "+f(e.nom)+" !",3200)},700)),n.refreshHud(),M.vw<M.W-40&&!M.hinted&&(M.hinted=!0,C.classList.remove("hide"),setTimeout(()=>C.classList.add("hide"),5200))}let Y=document.getElementById("bubble"),ie=null,se=null;function ue(Z,N,P){let _=y.querySelector(`.pn[data-i="${Di[M.id].items.findIndex(v=>v.id===Z)}"]`);_&&(se=_,Y.innerHTML=N,Y.style.display="block",G(),clearTimeout(ie),ie=setTimeout(j,P||3500))}function G(){if(!se)return;let Z=se.getBoundingClientRect(),N=x.clientWidth;Y.style.left=Math.min(N-70,Math.max(70,Z.left+Z.width/2))+"px",Y.style.top=Math.max(70,Z.top+8)+"px"}function j(){Y.style.display="none",se=null}setInterval(()=>{se&&G()},250),y.addEventListener("click",Z=>{if(M.dragged||e.mode!=="pview")return;let N=Z.target.closest("[data-i]");if(!N)return;let P=Di[M.id].items[+N.dataset.i];if(P.k==="npc"){let _=r({t:"npc",id:P.id});if(!t[P.id])return;if(!_.enabled){a(t[P.id].short+" est occup\xE9(e). Reviens plus tard.");return}j(),_.run()}else if(P.k==="go"){if(P.need&&!n.doneNpc(P.need)){a("Mama Lola garde le passage : r\xE9ponds d\u2019abord \xE0 ses questions."),c.ko();return}ee(P.to,{back:P.ico==="\u2B07"||P.ico==="\u2B05"})}else P.k==="tree"?Ee():P.k==="objs"?n.openObjs():P.k==="fact"&&le()}),setInterval(()=>{if(e.ui!=="photo"||e.mode!=="pview"||M.id!=="village"||se)return;M.chat=(M.chat||0)+1;let Z=s[M.chat%s.length],N=Z[0]==="J\xE9r\xE9mie"?"jer":"kasa";ue(N,"<b>"+f(Z[0])+"</b> : "+f(Z[1]),4200)},6500);function le(){let Z=!e.adv.facts||!e.adv.facts.fleuve;d({kind:"info",title:"Le fleuve Congo",i:0,lines:["Le fleuve Congo est le deuxi\xE8me plus long fleuve d\u2019Afrique, apr\xE8s le Nil. C\u2019est aussi l\u2019un des fleuves les plus profonds du monde.","\xC0 Kinshasa, il s\xE9pare la RDC de la R\xE9publique du Congo : de l\u2019autre c\xF4t\xE9 du fleuve, on voit Brazzaville."]}),Z&&(e.adv.facts=Object.assign(e.adv.facts||{},{fleuve:!0}),l(0,5),a("+5 points d\u2019exp\xE9rience"))}let oe=null;function Ee(){if(e.mode!=="pview")return;e.mode="mini",j();let Z=document.createElement("div");Z.className="pmg",y.appendChild(Z),oe={t:20,caught:0,layer:Z,spawn:0,list:[],last:performance.now()},k.classList.remove("hide"),a("Touche les mangues pour les attraper !"),requestAnimationFrame(ne)}function ne(Z){if(!oe)return;let N=Math.min(.05,(Z-oe.last)/1e3);if(oe.last=Z,oe.t-=N,oe.spawn-=N,oe.spawn<=0){oe.spawn=.45+Math.random()*.4;let P=document.createElement("button");P.className="mgo";let _={el:P,x:36+Math.random()*30,y:16+Math.random()*10,v:0,gy:76+Math.random()*14,done:!1};P.style.left=_.x+"%",P.style.top=_.y+"%",P.addEventListener("pointerdown",v=>{v.stopPropagation(),!_.done&&(_.done=!0,oe.caught++,c.coin(),P.classList.add("pop"),setTimeout(()=>P.remove(),260))}),oe.layer.appendChild(P),oe.list.push(_)}if(oe.list=oe.list.filter(P=>P.done?!1:(P.v+=70*N,P.y+=P.v*N*.18,P.el.style.top=P.y+"%",P.y>=P.gy?(P.el.classList.add("splat"),setTimeout(()=>P.el.remove(),350),!1):!0)),document.getElementById("info").textContent="Mangues attrap\xE9es : "+oe.caught+" \xB7 temps : "+Math.max(0,Math.ceil(oe.t))+" s",oe.t<=0)return he();requestAnimationFrame(ne)}function he(){if(!oe)return;let Z=oe.caught;oe.layer.remove(),oe=null,k.classList.add("hide"),e.mode="pview",e.adv.mangues+=Z,h(),a(Z?"+"+Z+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),Z&&c.win(),l(0,Z),u()}k.addEventListener("click",he);let re=null,ve=null,z=null;function Ue(){let Z=re.createBuffer(1,re.sampleRate*2,re.sampleRate),N=Z.getChannelData(0),P=0;for(let v=0;v<N.length;v++){let U=Math.random()*2-1;P=(P+.02*U)/1.02,N[v]=P*3.5}let _=re.createBufferSource();return _.buffer=Z,_.loop=!0,_}function ye(Z){try{if(!e.sound){Le();return}re=re||new(window.AudioContext||window.webkitAudioContext),re.state==="suspended"&&re.resume(),Le();let N=re.createGain(),P=re.createBiquadFilter(),_=Ue(),v={village:["lowpass",500,.9,.05],marche:["bandpass",850,.6,.11],portail:["lowpass",420,.8,.045],classe:["lowpass",300,.7,.025],maison:["lowpass",250,.6,.02],fleuve:["lowpass",650,.7,.07]}[Z]||["lowpass",400,.7,.03];if(P.type=v[0],P.frequency.value=v[1],P.Q.value=v[2],N.gain.value=0,N.gain.linearRampToValueAtTime(v[3],re.currentTime+1.2),_.connect(P),P.connect(N),N.connect(re.destination),_.start(),ve={n:_,g:N},Z==="village"||Z==="portail"||Z==="fleuve"){let U=()=>{if(!ve||!e.sound)return;let J=re.createOscillator(),$=re.createGain(),te=re.currentTime,Me=2200+Math.random()*1600;J.frequency.setValueAtTime(Me,te),J.frequency.exponentialRampToValueAtTime(Me*1.5,te+.09),J.frequency.exponentialRampToValueAtTime(Me*.9,te+.18),$.gain.setValueAtTime(1e-4,te),$.gain.exponentialRampToValueAtTime(.018,te+.03),$.gain.exponentialRampToValueAtTime(1e-4,te+.2),J.connect($),$.connect(re.destination),J.start(te),J.stop(te+.22),z=setTimeout(U,1800+Math.random()*4200)};z=setTimeout(U,1200)}}catch{}}function Le(){if(clearTimeout(z),ve){try{ve.g.gain.linearRampToValueAtTime(0,re.currentTime+.3);let Z=ve.n;setTimeout(()=>{try{Z.stop()}catch{}},400)}catch{}ve=null}}n.photo={show:Z=>{x.classList.remove("hide"),M.id=null,M.busy=!1,ee(Z)},hide:()=>{x.classList.add("hide"),Le(),j()},refresh:()=>{if(!M.id)return;let Z=M.panX;B(M.id),M.panX=Z,b(!0)},scene:()=>M.id,ambientOff:Le,ambientOn:()=>{M.id&&ye(Di[M.id].amb)}}}or();ms();or();var Re=(n,e,t)=>new Ve(Object.assign({color:n,roughness:e===void 0?.85:e},t||{}));function Ae(n,e,t,i,s,r,a,o,c){let l=new de(new Mt(e,t,i),s);return l.position.set(r,a,o),c&&(l.rotation.y=c),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Ui(n,e,t,i,s,r,a,o,c){let l=new de(new Sn(e,t,i,c||12),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Ha(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function ku(n,e,t,i,s,r,a,o,c,l){let h=l||.5,u=r/2+h,d=s+h*2,f=Math.atan2(a,r/2),g=Math.hypot(a,r/2)+h*.6;[-1,1].forEach(p=>{let S=Ae(n,d,.12,g,o,e,t+a/2,i+p*(r/4),0);S.rotation.x=-p*f});let x=new $s;x.moveTo(-r/2,0),x.lineTo(r/2,0),x.lineTo(0,a),x.closePath();let m=new de(new Ea(x),c);[-1,1].forEach(p=>{let S=m.clone();S.position.set(e+p*s/2,t,i),S.rotation.y=p*Math.PI/2,n.add(S)})}function fx(n){let e=[],t=Ha(4),i=new Ve({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.35,transparent:!0,opacity:.92,fog:!1});for(let s=0;s<14;s++){let r=new ot;for(let a=0;a<5;a++){let o=new de(new Tt(5+t()*5,10,8),i);o.position.set((a-2)*7+t()*3,t()*3,t()*5),o.scale.y=.55,r.add(o)}r.position.set(-150+t()*320,55+t()*25,-120+t()*240),n.add(r),e.push(r)}return e}function Hu(n,e,t,i,s,r,a){let o=new ot;o.position.set(e,0,t),o.scale.setScalar(i);let c=Re("#5e4026",.95),l=new de(new Sn(.22,.38,3.4,10),c);l.position.y=1.7,l.castShadow=!0,o.add(l),[[0,.5],[.5,-.4],[-.6,.2]].forEach(d=>{let f=new de(new Sn(.08,.16,1.8,6),c);f.position.set(d[0]*.8,3.3,d[1]*.5),f.rotation.z=d[0]*.9,f.rotation.x=d[1]*.6,f.userData.canopy=!0,o.add(f)});let h=Ha(Math.floor(Math.abs(e*13+t*7))+3),u=r||["#2f7d44","#3b9150","#27693b"];for(let d=0;d<8;d++){let f=new de(new Ri(1.7+h()*1.1,3),Re(u[d%3],.95));f.position.set((h()-.5)*3.6,4.1+h()*1.8,(h()-.5)*3.6),f.castShadow=!0,f.scale.y=.8,f.userData.canopy=!0,o.add(f)}if(s){let d=Re("#f0a51c",.5);for(let f=0;f<16;f++){let g=new de(new Tt(.17,10,8),d);g.scale.y=1.25,g.position.set((h()-.5)*5,3.2+h()*2,(h()-.5)*5),g.userData.canopy=!0,o.add(g)}}return n.add(o),a&&a.push({x:e,z:t,r:.6*i}),o}function Gu(n){let e=new ot,t=[],i=[],s={},r=Vc(),a=new de(new dt(260,160),new Ve({map:r,roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(12,0,0),a.receiveShadow=!0,e.add(a);let o=Gc(),c=new Ve({map:o,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),l=(ne,he,re,ve,z)=>{let Ue=new de(new dt(re,ve),c);Ue.rotation.x=-Math.PI/2,Ue.rotation.z=z||0,Ue.position.set(ne,.02,he),Ue.receiveShadow=!0,e.add(Ue)};l(-4,1,64,3.2,0),l(3,-2,11,9,0),l(-20,-4,5,6,0),l(34,0,14,3.2,0),l(41,-3.5,4,6.5,0);let h=-22,u=-9;Ae(e,8,2.7,5.4,new Ve({map:Ba(),roughness:1}),h,1.35,u),ku(e,h,2.7,u,8,5.4,1.8,new Ve({map:za(),roughness:1}),Re("#b99a55"),.7),Ae(e,1.3,2.1,.12,Re("#4a2f1b",.8),h,1.05,u+2.72),Ae(e,1.5,.1,.3,Re("#6e5a45"),h,.05,u+2.9),[-2.7,2.7].forEach(ne=>{Ae(e,1.2,1,.1,Re("#e8f3fa",.2,{emissive:5088985,emissiveIntensity:.35}),h+ne,1.6,u+2.72),Ae(e,1.35,.12,.14,Re("#4a2f1b"),h+ne,1.08,u+2.74),Ae(e,1.35,.12,.14,Re("#4a2f1b"),h+ne,2.12,u+2.74)}),i.push({x0:h-4,x1:h+4,z0:u-2.7,z1:u+2.7}),Ae(e,2.2,.12,.8,Re("#7a4a26"),-26,.5,-4.2),Ae(e,.12,.5,.7,Re("#6b4226"),-26.9,.25,-4.2),Ae(e,.12,.5,.7,Re("#6b4226"),-25.1,.25,-4.2),t.push({x:-26,z:-4.2,r:1.1});let d=Hu(e,-9,4,1.55,!0,["#2f7d44","#3f9a53","#276b3a"],t);s.mangoTree={x:-9,z:4,obj:d};let f=3,g=-6.4;[[-2.2,-1.1],[2.2,-1.1],[-2.2,1.1],[2.2,1.1]].forEach(ne=>Ui(e,.06,.06,2.5,Re("#6b4226"),f+ne[0],1.25,g+ne[1],8));let x=Ae(e,5.2,.1,3.4,new Ve({map:qc(),roughness:.9}),f,2.62,g-.1);x.rotation.x=.12,Ae(e,4.6,.9,.9,new Ve({map:Gn("#a87445"),roughness:.9}),f,.45,g+.9),[["#e68a00",-1.6],["#c0392b",-.8],["#6bbf3a",0],["#e0a526",.8],["#e68a00",1.6]].forEach((ne,he)=>{for(let re=0;re<5;re++){let ve=new de(new Tt(.13,10,8),Re(ne[0],.5));ve.position.set(f+ne[1]+re%2*.14,1.02+(re>2?.2:0),g+.9+(re%3-1)*.18),ve.castShadow=!0,e.add(ve)}}),Ae(e,.9,.5,.7,Re("#8a5a32"),f-1.8,.25,g-.7),Ae(e,.9,.5,.7,Re("#8a5a32"),f+1.9,.25,g-.5),i.push({x0:f-2.4,x1:f+2.4,z0:g+.35,z1:g+1.5}),Ae(e,.12,.9,.12,Re("#555"),f,2.8,g+1.6);let p=new de(new dt(2.2,.55),new Ve({map:_s([{t:"MARCH\xC9",s:90,c:"#c0392b"}],256,64,"#fff8ef","#c0392b","#c0392b")}));p.position.set(f,2.2,g+1.72),e.add(p);let S=14,y=-7;[-1.7,1.7].forEach(ne=>Ui(e,.07,.07,4,Re("#6b6b6b",.5,{metalness:.4}),S+ne,2,y,8));let T=new de(new dt(4.2,1.9),new Ve({map:_s([{t:"LEXARIS ACAD\xC9MIE",s:46,y:.42},{t:"Formation en IA \xB7 juristes et jeunes",s:22,y:.72,b:!1,c:"#f1c40f"}],512,230,"#1f7a4d","#ffffff"),roughness:.6}));T.position.set(S,3.1,y+.05),T.castShadow=!0,e.add(T),t.push({x:S-1.7,z:y,r:.3},{x:S+1.7,z:y,r:.3}),Ae(e,2,.1,.5,Re("#7a4a26"),9,.5,-5.2),Ae(e,.1,.5,.45,Re("#4a2f1b"),8.1,.25,-5.2),Ae(e,.1,.5,.45,Re("#4a2f1b"),9.9,.25,-5.2),t.push({x:9,z:-5.2,r:1});let C=Re("#8a5a32",.9),A=27,R=(ne,he)=>Ui(e,.09,.09,1.7,C,ne,.85,he,6);[[-15,-2.4],[2.4,15]].forEach(ne=>{for(let re=ne[0];re<=ne[1];re+=1.6)R(A,re);let he=ne[1]-ne[0];Ae(e,.07,.08,he,C,A,1.35,(ne[0]+ne[1])/2),Ae(e,.07,.08,he,C,A,.7,(ne[0]+ne[1])/2),i.push({x0:A-.3,x1:A+.3,z0:ne[0],z1:ne[1]})}),[-2.2,2.2].forEach(ne=>{let he=Ae(e,.5,2.2,.5,new Ve({map:Fa([196,106,60]),roughness:.9}),A,1.1,ne);t.push({x:A,z:ne,r:.4})});let k=[];[-1,1].forEach(ne=>{let he=new ot;he.position.set(A,0,ne*2);let re=new ot;re.position.set(0,0,-ne*1),Ae(re,.08,1.5,2,Re("#5a3a22"),0,.95,0);for(let ve=-4;ve<=4;ve+=2)Ae(re,.1,1.5,.08,Re("#7a4a26"),0,.95,ve*.22);he.add(re),e.add(he),k.push({piv:he,s:ne})}),s.leaves=k,s.gateBox={x0:A-.4,x1:A+.4,z0:-2.4,z1:2.4};let M=42,b=-11,F=new Ve({map:Fa([198,108,62]),roughness:.9});Ae(e,26,3.8,9,F,M,1.9,b),ku(e,M,3.8,b,26,9,2.2,new Ve({map:ka(),roughness:.55,metalness:.35}),Re("#e9dfca"),.9),Ae(e,26,.3,.4,Re("#efe6d2"),M,.15,b+4.6);for(let ne=0;ne<10;ne++)Ui(e,.14,.14,3.2,Re("#f3ecd9"),M-11.5+ne*2.55,1.6,b+5.4,10);Ae(e,26.5,.25,1.4,Re("#cfc6b2"),M,3.25,b+5.2),Ae(e,26.5,.12,1.6,new Ve({map:ka(),roughness:.55,metalness:.35}),M,3.45,b+5.2),Ae(e,26.5,.2,1.6,Re("#d9d0bc"),M,.1,b+5.2),[-9,-5.4,5.4,9].forEach(ne=>{Ae(e,1.7,1.3,.1,Re("#cfe9f7",.15,{emissive:6006742,emissiveIntensity:.3}),M+ne,2.05,b+4.55),Ae(e,1.9,.12,.15,Re("#f2f2f2"),M+ne,1.37,b+4.58)});let H=new ot;H.position.set(M,0,b+4.55),e.add(H),Ae(H,3.2,2.9,.2,Re("#2b1d12"),0,1.45,-.05);let Q=[];[-1,1].forEach(ne=>{let he=new ot;he.position.set(ne*1.5,0,.05);let re=Ae(he,1.5,2.7,.1,Re("#6b3f20"),-ne*.75,1.35,0);Ae(he,1.2,.08,.12,Re("#4a2f1b"),-ne*.75,2.1,.02),H.add(he),Q.push({piv:he,s:ne})}),s.doorLeaves=Q;let I=new de(new dt(8,1.1),new Ve({map:_s([{t:"LEXARIS ACAD\xC9MIE",s:78}],1024,140,"#1f7a4d","#ffffff"),roughness:.6}));I.position.set(M,3.15,b+4.58),e.add(I),i.push({x0:M-13,x1:M+13,z0:b-4.5,z1:b+4.6});let B=33,q=-3;Ui(e,.05,.07,7,Re("#999",.4,{metalness:.5}),B,3.5,q,8);let ee=new de(new dt(1.6,1.05,10,1),new Ve({map:Wu(),side:It,roughness:.8}));ee.position.set(B+.85,6.2,q),ee.castShadow=!0,e.add(ee),s.flag=ee,t.push({x:B,z:q,r:.3}),[[-30,-3],[-28,9],[-18,8],[-14,-12],[-6,-10],[-4,10],[6,10],[12,9],[18,-11],[22,-9],[-32,-12],[20,11],[24,5],[34,9],[48,6],[52,-2],[31,-13],[55,10],[-24,13],[0,-13]].forEach((ne,he)=>Hu(e,ne[0],ne[1],.9+he%4*.18,!1,null,t));let Y=Re("#3b8a4a",.95),ie=Ha(31);for(let ne=0;ne<26;ne++){let he=-33+ie()*90,re=-14+ie()*28;if(Math.abs(re)<2.3&&he<27)continue;let ve=new de(new Ri(.5+ie()*.5,2),Y);ve.position.set(he,.35,re),ve.scale.y=.7,ve.castShadow=!0,e.add(ve)}let se=Ha(31),ue=new lt,G=new Be,j=new _a(new Tt(.08,6,5),Re("#ffffff",.6),160);for(let ne=0;ne<160;ne++){let he=-33+se()*60,re=-14+se()*28;Math.abs(re)<2.2||(ue.compose(new L(he,.28,re),new bn,new L(1,1,1)),j.setMatrixAt(ne,ue),G.set(["#ffd23f","#ff6b9a","#ffffff","#ff8a3d"][ne%4]),j.setColorAt(ne,G))}e.add(j);let le=fx(e),oe={x0:-33.5,x1:58,z0:-14.5,z1:14.5};function Ee(ne,he,re){le.forEach((Ue,ye)=>{Ue.position.x+=ne*(.6+ye%3*.2),Ue.position.x>190&&(Ue.position.x=-190)});let ve=s.flag.geometry.attributes.position;for(let Ue=0;Ue<ve.count;Ue++){let ye=ve.getX(Ue)+.8;ve.setZ(Ue,Math.sin(he*4+ye*3)*.07*ye)}ve.needsUpdate=!0;let z=re.open?1:0;s.leaves.forEach(Ue=>{let ye=z*Ue.s*1.45;Ue.piv.rotation.y+=(-ye-Ue.piv.rotation.y)*Math.min(1,ne*4)}),s.doorLeaves.forEach(Ue=>{let ye=z*Ue.s*1.6;Ue.piv.rotation.y+=(ye-Ue.piv.rotation.y)*Math.min(1,ne*4)})}return{group:e,colliders:t,boxes:i,dyn:s,bounds:oe,update:Ee,mangoTree:s.mangoTree}}function Wu(){let n=document.createElement("canvas");n.width=256,n.height=170;let e=n.getContext("2d");e.fillStyle="#007fff",e.fillRect(0,0,256,170),e.strokeStyle="#f7d618",e.lineWidth=40,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.strokeStyle="#ce1021",e.lineWidth=24,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.fillStyle="#f7d618",e.beginPath();for(let i=0;i<10;i++){let s=-Math.PI/2+i*Math.PI/5,r=i%2?9:22;e.lineTo(40+Math.cos(s)*r,40+Math.sin(s)*r)}e.fill();let t=new ri(n);return t.colorSpace=it,t}function Xu(n,e,t,i,s,r,a){let o=new de(new dt(e,t),r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let c=new de(new dt(e,i),s);c.position.set(0,i/2,-t/2),c.receiveShadow=!0,n.add(c);let l=new de(new dt(t,i),s);l.rotation.y=Math.PI/2,l.position.set(-e/2,i/2,0),l.receiveShadow=!0,n.add(l);let h=new de(new dt(t,i),s);h.rotation.y=-Math.PI/2,h.position.set(e/2,i/2,0),h.receiveShadow=!0,n.add(h),Ae(n,e,.12,.1,Re("#e7dcc5"),0,.06,-t/2+.05),Ae(n,2.2,.04,1.1,Re("#7a4a26",1),0,.02,t/2-.7);let u=new de(new Sa(.55,.75,32),new qt({color:16765503,transparent:!0,opacity:.55}));u.rotation.x=-Math.PI/2,u.position.set(0,.05,t/2-.7),n.add(u)}function Vu(n,e,t,i){let s=i||.7,r=new Ve({map:Gn("#b07a45"),roughness:.8});Ae(n,1.1,.06,.55,r,e,s,t-.7),[[-.5,-.2],[.5,-.2],[-.5,.2],[.5,.2]].forEach(a=>Ae(n,.05,s,.05,Re("#4a2f1b"),e+a[0],s/2,t-.7+a[1])),Ae(n,.42,.05,.4,r,e,.4,t),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(a=>Ae(n,.04,.4,.04,Re("#4a2f1b"),e+a[0],.2,t+a[1])),Ae(n,.42,.4,.05,r,e,.62,t+.2)}function qu(){let n=new ot,e=[],t=[],i=17,s=10;Xu(n,i,s,3.8,new Ve({map:Wc("#f1e7cf"),roughness:1}),new Ve({map:Gn("#a8744a"),roughness:.85})),n.children.forEach(l=>{l.geometry&&l.geometry.type==="PlaneGeometry"&&l.rotation.x===-Math.PI/2&&l.material.map.repeat.set(5,3)});let a=new de(new dt(7.5,2.3),new Ve({map:_s([{t:"LEXARIS ACAD\xC9MIE",s:60,y:.38,c:"#ffffff"},{t:"Kelas Game \xB7 Apprendre en jouant",s:28,y:.7,b:!1,c:"#f1c40f"}],768,230,"#2e3b33","#fff","#8d5a3b"),roughness:.9}));a.position.set(0,2.2,-s/2+.04),n.add(a),Ae(n,7.8,.12,.14,Re("#8d5a3b"),0,.98,-s/2+.06);let o=new de(new dt(1.5,1),new Ve({map:Wu(),roughness:.9}));o.position.set(5.8,2.4,-s/2+.04),n.add(o),[-2.6,2.2].forEach(l=>{let h=new de(new dt(2,1.5),new qt({color:13626111}));h.rotation.y=-Math.PI/2,h.position.set(i/2-.03,2.1,l),n.add(h),Ae(n,.08,1.6,.08,Re("#fff"),i/2-.05,2.1,l)}),[["kinshasa",-2.8],["fleuve",0],["marche",2.8]].forEach(l=>{let h=$c(l[0]);if(!h)return;Ae(n,.08,1.5,2.5,Re("#5a3a22",.7),-i/2+.06,2.3,l[1]);let u=new de(new dt(2.3,1.3),new Ve({map:h,roughness:.6}));u.rotation.y=Math.PI/2,u.position.set(-i/2+.11,2.3,l[1]),n.add(u)}),[[-5.5,1.2],[-2.8,1.2],[5.7,1],[-5.5,3.4],[-2.8,3.4],[0,3.4],[2.6,3.4],[5.7,3.4],[0,1.2]].forEach(l=>Vu(n,l[0],l[1])),Vu(n,2.6,.55,.62),Ae(n,2,.08,.9,new Ve({map:Gn("#8a5a32")}),-6.2,.95,-3.6),[[-1,-.35],[1,-.35],[-1,.35],[1,.35]].forEach(l=>Ae(n,.07,.95,.07,Re("#4a2f1b"),-6.2+l[0]*.9,.47,-3.6+l[1])),e.push({x:-6.2,z:-3.6,r:1.2}),t.push({x0:-3.5,x1:-2.1,z0:.2,z1:1.4}),[[-5.5,.5],[-2.8,.5],[5.7,.3],[-5.5,2.7],[-2.8,2.7],[0,2.7],[2.6,2.7],[5.7,2.7],[0,.5],[2.6,-.15]].forEach(l=>t.push({x0:l[0]-.6,x1:l[0]+.6,z0:l[1]-.3,z1:l[1]+.3}));let c={x0:-i/2+.5,x1:i/2-.5,z0:-s/2+.6,z1:s/2-.2};return{group:n,colliders:e,boxes:t,bounds:c,update(){},exit:{x:0,z:s/2-.9}}}function Yu(n){let e=new ot,t=[],i=[],s=9.5,r=6.8;Xu(e,s,r,3.2,new Ve({map:Ba(),roughness:1}),new Ve({map:Gn("#8d6238"),roughness:.9}));let o=-3.2,c=-2.2;Ae(e,2.2,.35,1.3,new Ve({map:Gn("#7a4a26")}),o,.3,c),Ae(e,2.1,.2,1.2,Re("#f5efe3",.95),o,.55,c),Ae(e,.6,.12,.9,Re("#ffffff",.9),o-.7,.7,c),Ae(e,1.4,.08,1.25,new Ve({map:Ii("#c0392b","#f1c40f"),roughness:.9}),o+.3,.66,c),i.push({x0:o-1.2,x1:o+1.2,z0:c-.75,z1:c+.75}),Ae(e,1,1.8,.08,Re("#5a3a22",.7),-1.6,.95,-r/2+.12);let l=new de(new dt(.82,1.62),new Ve({color:13625074,roughness:.05,metalness:.85,emissive:7315384,emissiveIntensity:.25}));l.position.set(-1.6,.95,-r/2+.17),e.add(l);let h=new de(new dt(1.5,1.3),new qt({color:13626111}));if(h.position.set(2.4,1.9,-r/2+.03),e.add(h),Ae(e,1.7,.1,.1,Re("#5a3a22"),2.4,2.6,-r/2+.06),n.rideau&&[-.75,.75].forEach(d=>Ae(e,.55,1.7,.06,new Ve({map:Ii("#c0392b","#f1c40f"),roughness:.9}),2.4+d*1.1,1.8,-r/2+.12)),n.tableau){let d=Ae(e,1.4,1.05,.07,Re("#5a3a22"),-.4,2.1,-r/2+.06),f=new de(new dt(1.25,.9),new Ve({map:Yc()}));f.position.set(-.4,2.1,-r/2+.11),e.add(f)}if(n.natte){let d=Ae(e,2.6,.03,1.7,new Ve({map:za(),roughness:1}),.2,.02,.9);Ae(e,2.7,.02,1.8,Re("#7a4a26"),.2,.012,.9)}if(n.table){let d=new Ve({map:Gn("#a87445"),roughness:.8});if(Ae(e,1.5,.08,.9,d,3.1,.85,-2.5),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(f=>Ae(e,.08,.85,.08,Re("#4a2f1b"),3.1+f[0],.42,-2.5+f[1])),i.push({x0:2.3,x1:3.9,z0:-2.95,z1:-2.05}),n.lampe){Ui(e,.05,.07,.25,Re("#6b4226"),3.1,1.02,-2.5,8);let f=new de(new Tt(.17,14,10),Re("#ffe9a8",.4,{emissive:16762714,emissiveIntensity:1.2}));f.position.set(3.1,1.28,-2.5),e.add(f);let g=new Aa(16760932,9,7,1.6);g.position.set(3.1,1.35,-2.4),e.add(g)}}if(n.plante){Ui(e,.2,.15,.38,Re("#a8301e"),4,.19,-2.7,12);for(let d=0;d<9;d++){let f=new de(new Tt(.14,8,6),Re(d%2?"#2e8b57":"#3a9a63",.8));f.scale.set(.6,1.6,.6);let g=d/9*6.28;f.position.set(4+Math.cos(g)*.15,.7+d%3*.15,-2.7+Math.sin(g)*.15),f.rotation.z=Math.cos(g)*.5,f.rotation.x=Math.sin(g)*.5,f.castShadow=!0,e.add(f)}t.push({x:4,z:-2.7,r:.3})}let u={x0:-s/2+.5,x1:s/2-.5,z0:-r/2+.6,z1:r/2-.2};return{group:e,colliders:t,boxes:i,bounds:u,update(){},exit:{x:0,z:r/2-.9}}}var ll="kelas_game_v12",Se=n=>document.getElementById(n),hi=(n,e,t)=>Math.max(n,Math.min(e,t)),xt=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),sd=n=>n.map(e=>[Math.random(),e]).sort((e,t)=>e[0]-t[0]).map(e=>e[1]),Ni=(n,e,t,i)=>Math.hypot(n-t,e-i),Za=()=>({done:{},stars:{},good:0,total:0,pieces:0,tissu:0,mangues:0,xp:0,items:{},bought:{},fin:!1}),E={ui:"photo",nom:"",photo:null,real:"pf1",voice:!0,sexe:"f",look:Object.assign({},ar,{acc:[]}),sound:!0,sc:"ville",x:-13,z:.5,ry:0,phi:0,pitch:.3,mode:"start",dialog:null,joy:{x:0,y:0},key:{x:0,y:0},speed:0,near:null,greeted:{},adv:Za(),mini:null,cine:null};function px(){try{return JSON.parse(localStorage.getItem(ll)||"null")}catch{return null}}function kt(){try{localStorage.setItem(ll,JSON.stringify({ui:E.ui,nom:E.nom,photo:E.photo,real:E.real,voice:E.voice,look:E.look,sound:E.sound,adv:E.adv}))}catch{}}var Es=n=>!!E.adv.done[n],rd=n=>{let e=bt[n];return!!(e.needs&&!Es(e.needs))},Ja=()=>Es("lola"),ui=()=>1+Math.floor(E.adv.xp/50),mx=()=>Object.values(E.adv.stars).reduce((n,e)=>n+e,0),hl=()=>Object.keys(un).filter(n=>E.adv.items[n]).length,gx=()=>["lola","ilunga","junior","mavungu"].every(Es),$u=n=>"Parler "+(/^le /.test(n.short)?n.short.replace(/^le /,"au "):"\xE0 "+n.short),xs=null;function vs(n,e,t,i,s){if(E.sound)try{xs=xs||new(window.AudioContext||window.webkitAudioContext);let r=xs.createOscillator(),a=xs.createGain(),o=xs.currentTime+(s||0);r.type=t||"sine",r.frequency.value=n,a.gain.setValueAtTime(i||.08,o),a.gain.exponentialRampToValueAtTime(.001,o+e),r.connect(a),a.connect(xs.destination),r.start(o),r.stop(o+e)}catch{}}var Bt={ok:()=>{vs(660,.1),vs(880,.15,"sine",.08,.1)},ko:()=>vs(180,.25,"square",.04),coin:()=>vs(1200,.08,"triangle"),win:()=>{[523,659,784,1047].forEach((n,e)=>vs(n,.18,"sine",.08,e*.12))},step:()=>vs(90,.05,"sine",.02)},mr=typeof window!="undefined"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance!="undefined",ad=[];function Zu(){mr&&(ad=speechSynthesis.getVoices()||[])}mr&&(Zu(),speechSynthesis.onvoiceschanged=Zu);var Ju={lola:{g:"f",pitch:.85,rate:.88},ilunga:{g:"f",pitch:1,rate:.95},junior:{g:"h",pitch:1.7,rate:1.05},mavungu:{g:"h",pitch:.75,rate:.9},bea:{g:"f",pitch:1.1,rate:1},mama:{g:"f",pitch:.95,rate:.95},_:{g:"f",pitch:1,rate:.95}};function _x(n){let e=ad.filter(r=>/^fr/i.test(r.lang));if(!e.length)return null;let t=/(julie|hortense|denise|eloise|élodie|amelie|amélie|audrey|marie|brigitte|female|femme|google fran)/i,i=/(paul|henri|claude|thomas|mathieu|male|homme|antoine|lucas)/i;return e.filter(r=>(n==="f"?t:i).test(r.name))[0]||e.find(r=>/google|microsoft/i.test(r.name))||e[0]}var Ga=null;function xx(n){return String(n).replace(/×/g," fois ").replace(/÷/g," divis\xE9 par ").replace(/−/g," moins ").replace(/\+/g," plus ").replace(/=/g," \xE9gale ").replace(/[·★☆🪙🥭⭐✔🔒👗🔊]/g," ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()}function ul(n,e){if(Ga={text:n,id:e},!(!mr||!E.voice))try{speechSynthesis.cancel();let t=Ju[e]||Ju._,i=new SpeechSynthesisUtterance(xx(n));i.lang="fr-FR",i.pitch=t.pitch,i.rate=t.rate;let s=_x(t.g);s&&(i.voice=s),speechSynthesis.speak(i)}catch{}}function od(){if(mr)try{speechSynthesis.cancel()}catch{}}function vx(){if(Ga){let n=E.voice;E.voice=!0,ul(Ga.text,Ga.id),E.voice=n}}var rl="";function yx(n){let e="",t="",i=n.id;if(n.kind==="quiz"){let s=bt[n.id];if(e=`q|${n.id}|${n.stage}|${n.i}|${n.qi}`,n.stage==="lines")t=s.intro[n.i];else if(n.stage==="q"){let r=n.qs[n.qi];t="Question "+(n.qi+1)+". "+r.q+" R\xE9ponses : "+(n.opts||[]).join(", ")}else n.stage==="fb"?t=(n.fbFirst?"Bravo ! ":"C\u2019est \xE7a. ")+n.qs[n.qi].exp:t=n.rev?"R\xE9vision termin\xE9e : "+n.firsts+" sur "+n.qs.length+" du premier coup.":s.outro}else if(n.kind==="info")e="i|"+n.title+"|"+n.i,t=n.lines[n.i];else if(n.kind==="shop")e="s|"+n.msg,t=n.msg,i="bea";else return;e!==rl&&(rl=e,ul(t,i))}var Mx=()=>mr?'<button class="s" onclick="replay()">\u{1F50A} R\xE9\xE9couter</button>':"",lr=Se("cv"),di=new Xs({canvas:lr,antialias:!0,powerPreference:"high-performance"});di.setPixelRatio(Math.min(window.devicePixelRatio||1,2));di.outputColorSpace=it;di.toneMapping=Dc;di.toneMappingExposure=1.05;di.shadowMap.enabled=!0;di.shadowMap.type=Ic;var Pt=new ma;Pt.background=new Be(10473710);Pt.fog=new pa(14676215,70,260);var Qe=new Ft(58,1,.1,600),cd=new Ta(13625599,8022602,1);Pt.add(cd);var An=new Ra(16773590,3);An.castShadow=!0;An.shadow.mapSize.set(2048,2048);var Va=30;Object.assign(An.shadow.camera,{left:-Va,right:Va,top:Va,bottom:-Va,near:1,far:140});An.shadow.bias=-4e-4;An.shadow.normalBias=.04;Pt.add(An);Pt.add(An.target);var hr=new de(new Tt(420,24,16),new qt({color:16777215,side:Dt,fog:!1,depthWrite:!1}));Promise.resolve().then(()=>(or(),Zc)).then(n=>{hr.material.map=n.skyTexture(),hr.material.needsUpdate=!0});Pt.add(hr);function dl(){let n=Se("world").clientWidth,e=Se("world").clientHeight;di.setSize(n,e,!1),Qe.aspect=n/e,Qe.fov=n/e<.8?72:n/e<1.2?64:56,Qe.updateProjectionMatrix()}window.addEventListener("resize",dl);var Yt=null,Kt=null,rn={},Oi=null;function bx(){return Object.assign({},E.look,{h:.8})}var ur=n=>!!(window.__MAN&&(window.__MAN.chars||[]).includes(n));function ld(){return E.real&&ur(E.real)?el(E.real,{walk:ur(E.real+"w")?E.real+"w":null}):Jc(bx())}function Sx(n,e){return ur(n)?el(n):Jc(e.look)}var bs={ville:{build:()=>Gu(),interior:!1,doors:[{x:-22,z:-5.4,r:1.9,to:"maison",label:"Entrer dans la maison",tx:0,tz:1,phi:-Math.PI/2},{x:42,z:-5.3,r:2.6,to:"classe",label:"Entrer dans l\u2019\xE9cole",ok:()=>Ja(),closed:"Porte ferm\xE9e",tx:0,tz:2.6,phi:-Math.PI/2}]},maison:{build:()=>Yu(E.adv.items),interior:!0,doors:[{x:0,z:2.5,r:1.9,to:"ville",label:"Sortir",tx:-22,tz:-3.9,phi:Math.PI/2}],spots:[{x:-1.6,z:-2.2,r:1.9,label:"Miroir : changer mon look",run:()=>vl("play")}]},classe:{build:()=>qu(),interior:!0,doors:[{x:0,z:4.1,r:1.9,to:"ville",label:"Sortir de l\u2019\xE9cole",tx:42,tz:-3.4,phi:Math.PI/2}]}};function Ex(){Yt&&Pt.remove(Yt.group),Kt&&Pt.remove(Kt),Object.values(rn).forEach(n=>Pt.remove(n.obj)),rn={}}function dr(){Ex();let n=bs[E.sc];Yt=n.build(),Pt.add(Yt.group),hr.visible=!0,cd.intensity=n.interior?2.1:1,Pt.fog.near=n.interior?200:70,An.intensity=n.interior?2.2:3,Kt=ld(),Pt.add(Kt),Object.keys(bt).filter(e=>bt[e].sc===E.sc).forEach(e=>ju(e,bt[e])),Object.keys(ai).filter(e=>ai[e].sc===E.sc).forEach(e=>ju(e,ai[e])),Ka()}function ju(n,e){let t=Sx(n,e);t.position.set(e.x,0,e.z),t.rotation.y=e.ry||0,Pt.add(t),rn[n]={obj:t,n:e,wave:0,ry:e.ry||0}}var Xn=.36;function Tx(n,e){let t=n,i=e,s=Yt.colliders;for(let o=0;o<s.length;o++){let c=s[o],l=t-c.x,h=i-c.z,u=Math.hypot(l,h),d=c.r+Xn;u<d&&u>1e-4&&(t=c.x+l/u*d,i=c.z+h/u*d)}let r=Yt.boxes.slice();E.sc==="ville"&&!Ja()&&r.push(Yt.dyn.gateBox),r.forEach(o=>{let c=hi(o.x0,o.x1,t),l=hi(o.z0,o.z1,i),h=t-c,u=i-l,d=Math.hypot(h,u);if(d<Xn)if(d>1e-4)t=c+h/d*Xn,i=l+u/d*Xn;else{let f=t-o.x0,g=o.x1-t,x=i-o.z0,m=o.z1-i,p=Math.min(f,g,x,m);p===f?t=o.x0-Xn:p===g?t=o.x1+Xn:p===x?i=o.z0-Xn:i=o.z1+Xn}}),Object.keys(rn).forEach(o=>{let c=rn[o].n;if(c.sit)return;let l=t-c.x,h=i-c.z,u=Math.hypot(l,h),d=.5+Xn;u<d&&u>1e-4&&(t=c.x+l/u*d,i=c.z+h/u*d)});let a=Yt.bounds;return[hi(a.x0,a.x1,t),hi(a.z0,a.z1,i)]}function ja(){return new L(E.x,1.35,E.z)}function fl(n){let e=E.mode==="mini"?Math.max(E.pitch,.85):E.pitch;E.mode==="mini"&&(n=Math.max(n,7.5));let t=Math.cos(E.phi)*Math.cos(e),i=Math.sin(E.phi)*Math.cos(e),s=Math.sin(e),r=ja();return new L(r.x-t*n,r.y+s*n+.4,r.z-i*n)}var pl=()=>bs[E.sc].interior?4.4:4.9;function Ka(){let n=fl(pl());Qe.position.copy(n),Qe.lookAt(ja())}function wx(n){let e=fl(pl());Qe.position.lerp(e,1-Math.exp(-n*9)),Qe.position.y<.6&&(Qe.position.y=.6),Qe.lookAt(ja())}function ml(){let n=E.adv.done;if(!n.lola)return"Objectif : va \xE0 l\u2019\xE9cole et parle \xE0 Mama Lola, la gardienne du portail.";if(!n.ilunga)return"Objectif : entre dans l\u2019\xE9cole et va voir la Professeure Ilunga.";if(!n.junior)return"Objectif : rejoins Junior, assis dans la classe.";if(!n.mavungu)return"Objectif : le Directeur Mavungu t\u2019attend dans la classe.";let e=hl(),t=Object.keys(un).length;return e<t?"Objectif : cueille des mangues, r\xE9vise et meuble ta maison ("+e+"/"+t+").":"Tu as tout accompli ! Continue \xE0 r\xE9viser pour gagner des \xE9toiles."}function $t(){let n=Sd();Se("stats").innerHTML=(n?`<img class="av" src="${n}" alt="">`:"")+"\u{1FA99} "+E.adv.pieces+" \xB7 \u2B50 "+mx()+" \xB7 Niv "+ui(),E.mode!=="mini"&&(Se("info").textContent=ml())}function gr(n,e){let t=ui();E.adv.pieces+=n,E.adv.xp+=e,ui()>t&&(xn("Niveau "+ui()+" atteint !"+(Li[ui()]?" Nouvelle tenue d\xE9bloqu\xE9e !":"")),Bt.win()),$t(),kt()}var Ku=null;function xn(n){let e=Se("toast");e.textContent=n,e.style.display="block",clearTimeout(Ku),Ku=setTimeout(()=>{e.style.display="none"},2400)}var qn=null;function Qu(n,e,t,i,s){qn={pos:new L(e,i||2.2,t),until:s?performance.now()+s:0};let r=Se("bubble");r.innerHTML=n,r.style.display="block"}function _r(){qn=null,Se("bubble").style.display="none"}function Ax(){if(!qn)return;if(qn.until&&performance.now()>qn.until){_r();return}let n=qn.pos.clone().project(Qe),e=Se("world").clientWidth,t=Se("world").clientHeight;if(n.z>1){Se("bubble").style.display="none";return}let i=Se("bubble");i.style.display="block",i.style.left=hi(70,e-70,(n.x*.5+.5)*e)+"px",i.style.top=hi(60,t-20,(-n.y*.5+.5)*t)+"px"}function Rx(){let n=[];if(Object.keys(bt).forEach(e=>{let t=bt[e];if(t.sc===E.sc){let i=Ni(E.x,E.z,t.x,t.z);i<(t.kind==="shop"?3.9:2.7)&&n.push({t:"npc",id:e,d:i})}}),bs[E.sc].doors.forEach((e,t)=>{let i=Ni(E.x,E.z,e.x,e.z);i<e.r&&n.push({t:"door",i:t,d:i})}),(bs[E.sc].spots||[]).forEach((e,t)=>{let i=Ni(E.x,E.z,e.x,e.z);i<e.r&&n.push({t:"spot",i:t,d:i})}),E.sc==="ville"&&Yt.mangoTree){let e=Ni(E.x,E.z,Yt.mangoTree.x,Yt.mangoTree.z);e<4&&n.push({t:"tree",d:e})}return n.sort((e,t)=>(e.t==="npc"?0:1)-(t.t==="npc"?0:1)||e.d-t.d)}function hd(n){if(!n)return{label:"",enabled:!1,run:null};if(n.t==="npc"){let t=bt[n.id];return t.kind==="shop"?{label:"Aller au march\xE9",enabled:!0,run:zx}:t.kind==="talk"?{label:$u(t),enabled:!0,run:()=>Ox(n.id)}:rd(n.id)?{label:t.short+" est occup\xE9(e), reviens plus tard",enabled:!1,run:null}:Es(n.id)?{label:"R\xE9viser avec "+t.short,enabled:!0,run:()=>ed(n.id,!0)}:{label:$u(t),enabled:!0,run:()=>ed(n.id,!1)}}if(n.t==="tree")return{label:"Cueillir des mangues",enabled:!0,run:Yx};if(n.t==="spot"){let t=bs[E.sc].spots[n.i];return{label:t.label,enabled:!0,run:t.run}}let e=bs[E.sc].doors[n.i];return e.ok&&!e.ok()?{label:e.closed,enabled:!1,run:null}:{label:e.label,enabled:!0,run:()=>Cx(e)}}function Cx(n){E.sc=n.to,E.x=n.tx,E.z=n.tz,E.phi=n.phi,E.near=null,_r(),dr()}function Rn(n){E.dialog=n,E.mode="dialog",E.joy.x=E.joy.y=0,E.key.x=E.key.y=0,_l(),_r(),zt(),Se("actwrap").classList.add("hide")}function ud(){if(al=!1,od(),rl="",Se("dlg").style.display="none",E.dialog=null,E.ui==="photo"){E.mode="pview",$a.refresh(),$t();return}E.mode="play",Se("actwrap").classList.remove("hide"),E.sc==="maison"&&dr(),$t()}function ed(n,e){let t=bt[n],i=Du[t.sujet],s=e?sd(i).slice(0,3):i.slice(0,t.nb);Rn({kind:"quiz",id:n,rev:e,stage:e?"q":"lines",i:0,qi:0,qs:s,opts:null,bad:[],qerr:!1,errs:0,firsts:0,gain:0,res:null})}function zt(){let n=E.dialog,e=Se("dlg");e.style.display="block",e.scrollTop=0;let t="";n.kind==="quiz"?t=Lx(n):n.kind==="info"?t=Fx(n):n.kind==="shop"?t=kx(n):n.kind==="menu"?t=Gx(n):n.kind==="profile"?t=ev(n):n.kind==="objs"&&(t=iv(n)),e.innerHTML='<div class="box">'+t+(n.kind==="quiz"||n.kind==="info"||n.kind==="shop"?Mx():"")+"</div>",yx(n)}var Px=n=>!!(window.__MAN&&(window.__MAN.portraits||[]).includes(n)),gl=(n,e)=>`<div class="hd">${n&&Px(n)?`<img class="pt" src="img/portraits/${n}.jpg" alt="">`:""}<h3>${xt(e)}</h3></div>`;function Lx(n){let e=bt[n.id],t=gl(n.id,e.name+" \xB7 "+e.role);if(n.stage==="lines")t+=`<p>${xt(e.intro[n.i])}</p><button class="p" onclick="nextLine()">Suite</button>`;else if(n.stage==="q"){let i=n.qs[n.qi];n.opts||(n.opts=sd(i.c)),t+=`<p><b>${xt(n.rev?"R\xE9vision \xB7 ":"")}Question ${n.qi+1} sur ${n.qs.length}</b> : ${xt(i.q)}</p>`,n.bad.length&&(t+='<p class="ko">Pas tout \xE0 fait. R\xE9fl\xE9chis encore !</p>'),t+=n.opts.map((s,r)=>`<button ${n.bad.indexOf(s)>=0?"disabled":""} onclick="answerQ(${r})">${xt(s)}</button>`).join(""),t+='<button class="s" onclick="closeDialog()">Quitter</button>'}else if(n.stage==="fb"){let i=n.qs[n.qi];t+=`<p class="ok"><b>${n.fbFirst?"Bravo !":"C\u2019est \xE7a."}</b> ${xt(i.exp)}</p><button class="p" onclick="nextQ()">Suite</button>`}else{let i=n.res;n.rev?t+=`<p>R\xE9vision termin\xE9e : ${n.firsts} sur ${n.qs.length} du premier coup. <b>+${n.gain} \u{1FA99}</b></p>`:t+=`<p>${xt(e.outro)}</p><p><b>${"\u2605".repeat(i.stars)+"\u2606".repeat(3-i.stars)}</b> \xB7 +${n.gain} \u{1FA99}${i.tissu?" \xB7 +"+i.tissu+" tissu wax":""}</p>`,t+='<button class="p" onclick="closeDialog()">Continuer</button>'}return t}function Ix(){let n=E.dialog,e=bt[n.id];n.i++,n.i>=e.intro.length&&(n.stage="q",n.qi=0,n.opts=null),zt()}function Dx(n){let e=E.dialog,t=e.qs[e.qi],i=e.opts[n];if(i!==t.a){e.bad.push(i),e.qerr=!0,e.errs++,Bt.ko(),zt();return}let s=!e.qerr;E.adv.total++,s&&(E.adv.good++,e.firsts++);let r=e.rev?s?2:0:s?5:1;e.gain+=r,e.fbFirst=s,gr(r,s?e.rev?4:10:3),Bt.ok(),e.stage="fb",zt()}function Ux(){let n=E.dialog;n.qi++,n.opts=null,n.bad=[],n.qerr=!1,n.qi>=n.qs.length?(Nx(n),n.stage="out"):n.stage="q",zt()}function Nx(n){if(n.rev){kt();return}let e=n.id,t=n.errs===0?3:n.errs<=2?2:1;E.adv.done[e]=!0,E.adv.stars[e]=Math.max(E.adv.stars[e]||0,t),n.gain+=10,gr(10,10);let i=0;e==="mavungu"&&(E.adv.pieces+=20,E.adv.tissu+=2,i=2,n.gain+=20),n.res={stars:t,tissu:i};let s=E.ui==="photo"?[]:av(e);s.length&&setTimeout(()=>xn("D\xE9bloqu\xE9 : "+s.join(", ")),900),Bt.win(),kt(),$t(),setTimeout(dd,0)}function Ox(n){let e=bt[n];Rn({kind:"info",id:n,title:e.name+" \xB7 "+e.role,i:0,lines:["Bonjour "+E.nom+" !",ml().replace("Objectif : ","Ton objectif : "),"Ta partie est sauvegard\xE9e automatiquement. Repose-toi quand tu veux."]})}function Fx(n){let e=n.i>=n.lines.length-1;return gl(n.id,n.title)+`<p>${xt(n.lines[n.i])}</p><button class="p" onclick="${e?"closeDialog()":"infoNext()"}">${e?"Fermer":"Suite"}</button>`}function Bx(){E.dialog.i++,zt()}function zx(){Rn({kind:"shop",msg:"Bienvenue au march\xE9, "+E.nom+" !"})}function kx(n){let e=E.adv,t=gl("bea","Maman B\xE9a \xB7 Marchande")+`<p>${xt(n.msg)}</p><p class="row"><span>Mes pi\xE8ces</span><b>${e.pieces} \u{1FA99}</b></p><p class="row"><span>Mes mangues \xB7 tissu wax</span><b>${e.mangues} \u{1F96D} \xB7 ${e.tissu}</b></p>`;return e.mangues>0&&(t+=`<button onclick="sellMangoes()">Vendre mes ${e.mangues} mangues (+${e.mangues*2} \u{1FA99})</button>`),t+=Object.keys(un).map(i=>{let s=un[i];return e.items[i]?`<button disabled>\u2714 ${xt(s.n)} (dans ta maison)</button>`:`<button onclick="buy('${i}')">${xt(s.n)} \u2014 ${s.p} \u{1FA99}${s.t?" + "+s.t+" tissu wax":""}</button>`}).join(""),E.ui!=="photo"&&(t+='<button onclick="shopMode()">\u{1F457} Mode : essayer tenues et coiffures</button>'),t+'<button class="s" onclick="closeDialog()">Quitter le march\xE9</button>'}function Hx(){let n=E.adv,e=n.mangues;e&&(n.mangues=0,gr(e*2,0),Bt.coin(),E.dialog.msg="Merci ! Tes "+e+" mangues sont vendues : +"+e*2+" pi\xE8ces.",zt())}function Vx(n){let e=un[n],t=E.adv,i=E.dialog;if(!t.items[n]){if(t.pieces<e.p){i.msg="Il te manque "+(e.p-t.pieces)+" pi\xE8ces pour : "+e.n+".",Bt.ko(),zt();return}if(e.t&&t.tissu<e.t){i.msg="Il te faut du tissu wax. Le Directeur Mavungu en offre \xE0 la fin de la le\xE7on.",Bt.ko(),zt();return}t.pieces-=e.p,e.t&&(t.tissu-=e.t),t.items[n]=!0,kt(),$t(),Bt.coin(),i.msg="Achat r\xE9ussi : "+e.n+" ! Elle est install\xE9e dans ta maison.",zt(),setTimeout(dd,0)}}function dd(){E.adv.fin||!gx()||hl()<Object.keys(un).length||(E.adv.fin=!0,kt(),Bt.win(),(E.mode==="play"||E.mode==="dialog")&&Rn({kind:"info",title:"F\xE9licitations !",i:0,lines:[E.nom+", tu as termin\xE9 la le\xE7on et meubl\xE9 toute ta maison !","Tu es un vrai champion de LEXARIS ACAD\xC9MIE. Continue \xE0 r\xE9viser pour gagner trois \xE9toiles partout."]}))}function fd(){(E.mode==="play"||E.mode==="pview")&&Rn({kind:"menu"})}function Gx(){let n=E.adv,e=Sd();return`<div class="hd">${e?`<img class="pt" src="${e}" alt="">`:""}<h3>${xt(E.nom)} \xB7 Niveau ${ui()}</h3></div><p class="row"><span>Pi\xE8ces</span><b>${n.pieces} \u{1FA99}</b></p><p class="row"><span>Tissu wax \xB7 mangues</span><b>${n.tissu} \xB7 ${n.mangues} \u{1F96D}</b></p><p class="row"><span>R\xE9ponses justes du premier coup</span><b>${n.good}/${n.total}</b></p><h4>Le\xE7ons</h4>`+["lola","ilunga","junior","mavungu"].map(t=>{let i=n.stars[t]||0;return`<div class="row"><span>${xt(Uu[bt[t].sujet])} \xB7 ${xt(bt[t].name)}</span><b>${n.done[t]?"\u2605".repeat(i)+"\u2606".repeat(3-i):"\u2014"}</b></div>`}).join("")+"<h4>Ma maison</h4>"+Object.keys(un).map(t=>`<div class="row"><span>${xt(un[t].n)}</span><b>${n.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+`<p style="font-size:12px;margin-top:8px">${xt(ml())}</p><button class="p" onclick="closeDialog()">Fermer</button><button onclick="openProfile()">\u{1F4F7} Ma photo de profil</button><button onclick="toggleSound()">Son : ${E.sound?"activ\xE9":"coup\xE9"}</button><button onclick="toggleVoice()">Lecture \xE0 voix haute : ${E.voice?"activ\xE9e":"coup\xE9e"}</button><button class="s" onclick="resetGame()">${E.dialog&&E.dialog.confirmReset?"Appuie encore pour tout effacer":"Recommencer une nouvelle partie"}</button>`}function Wx(){E.sound=!E.sound,kt(),E.ui==="photo"&&(E.sound?$a.ambientOn():$a.ambientOff()),zt()}function Xx(){E.voice=!E.voice,E.voice||od(),kt(),zt()}var al=!1;function qx(){if(!al){al=!0,E.dialog.confirmReset=!0,zt();return}try{localStorage.removeItem(ll)}catch{}location.reload()}function Yx(){E.mode="mini",E.mini={t:20,caught:0,list:[],sp:0},_r(),Oi=new ot,Pt.add(Oi),pd(!1),xn("Attrape les mangues qui tombent !")}var $x=new Ve({color:15770908,roughness:.5}),Zx=new Tt(.17,12,10);function Jx(n){let e=E.mini,t=Yt.mangoTree;if(e.t-=n,e.sp-=n,e.sp<=0){e.sp=.5+Math.random()*.4;let i=Math.random()*6.28,s=Math.random()*3.4,r=new de(Zx,$x);r.scale.y=1.25,r.castShadow=!0,r.position.set(t.x+Math.cos(i)*s,6.2,t.z+Math.sin(i)*s),Oi.add(r),e.list.push({mesh:r,v:0})}e.list=e.list.filter(i=>{i.v+=7*n,i.mesh.position.y-=i.v*n,i.mesh.rotation.x+=n*4;let s=i.mesh.position;return s.y<1.9&&s.y>.2&&Ni(s.x,s.z,E.x,E.z)<.95?(e.caught++,Bt.coin(),Oi.remove(i.mesh),!1):s.y<=.17&&(s.y=.17,i.v=0,i.gone=(i.gone||0)+n,i.gone>.5)?(Oi.remove(i.mesh),!1):!0}),Se("info").textContent="Mangues attrap\xE9es : "+e.caught+" \xB7 temps : "+Math.max(0,Math.ceil(e.t))+" s",e.t<=0&&md()}function pd(n){Yt.mangoTree.obj.children.forEach(e=>{e.userData.canopy&&(e.visible=n)})}function md(){let n=E.mini.caught;pd(!0),Pt.remove(Oi),Oi=null,E.mini=null,E.mode="play",E.adv.mangues+=n,kt(),xn(n?"+"+n+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),n&&Bt.win(),gr(0,n),$t()}var fr=Se("joy"),gd=Se("knob"),Qa=null;function _l(){Qa=null,gd.style.transform="translate(0,0)",E.joy.x=E.joy.y=0}function _d(n){let e=fr.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=e.width/2-4,r=n.clientX-t,a=n.clientY-i,o=Math.hypot(r,a);o>s&&(r=r/o*s,a=a/o*s),gd.style.transform=`translate(${r}px,${a}px)`,E.joy.x=r/s,E.joy.y=-a/s}fr.addEventListener("pointerdown",n=>{n.preventDefault(),Qa=n.pointerId,fr.setPointerCapture(n.pointerId),_d(n)});fr.addEventListener("pointermove",n=>{n.pointerId===Qa&&(n.preventDefault(),_d(n))});["pointerup","pointercancel","lostpointercapture"].forEach(n=>fr.addEventListener(n,e=>{e.pointerId===Qa&&_l()}));var qa=null,Wa=0,ol=0;lr.addEventListener("pointerdown",n=>{E.mode!=="play"&&E.mode!=="mini"&&E.mode!=="creator"||(qa=n.pointerId,Wa=n.clientX,ol=n.clientY,lr.setPointerCapture(n.pointerId))});lr.addEventListener("pointermove",n=>{n.pointerId===qa&&(E.mode==="creator"?Ct.ang-=(n.clientX-Wa)*.012:(E.phi+=(n.clientX-Wa)*.006,E.pitch=hi(.12,1.1,E.pitch+(n.clientY-ol)*.004)),Wa=n.clientX,ol=n.clientY)});["pointerup","pointercancel"].forEach(n=>lr.addEventListener(n,e=>{e.pointerId===qa&&(qa=null)}));var Ms={},Ya={ArrowUp:"u",w:"u",z:"u",ArrowDown:"d",s:"d",ArrowLeft:"l",a:"l",q:"l",ArrowRight:"r",d:"r"};function xd(){E.key.y=(Ms.u?1:0)-(Ms.d?1:0),E.key.x=(Ms.r?1:0)-(Ms.l?1:0)}document.addEventListener("keydown",n=>{n.target&&n.target.tagName==="INPUT"||(Ya[n.key]&&(Ms[Ya[n.key]]=!0,xd(),n.preventDefault()),!(E.mode!=="play"&&E.mode!=="mini")&&((n.key==="e"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),vd()),n.key==="m"&&fd(),n.key==="ArrowLeft"&&n.shiftKey&&(E.phi-=.1)))});document.addEventListener("keyup",n=>{Ya[n.key]&&(Ms[Ya[n.key]]=!1,xd())});var cl=null;function vd(){if(E.mode==="mini")return md();E.mode==="play"&&cl&&cl()}Se("ba").addEventListener("click",vd);Se("menu").addEventListener("click",fd);var td=performance.now(),tl=0,nl=0,il=3,nd=0;function id(n,e){let t=e-n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}function yd(n){requestAnimationFrame(yd);let e=Math.min(.05,(n-td)/1e3);if(td=n,tl+=e,!Yt||E.ui==="photo")return;let t=E.mode==="play"||E.mode==="mini",i=0;if(t){let s=E.joy.x+E.key.x,r=E.joy.y+E.key.y,a=Math.min(1,Math.hypot(s,r));if(a>.1){let o=Math.cos(E.phi),c=Math.sin(E.phi),l=-c,h=o,u=o*r+l*s,d=c*r+h*s,f=Math.hypot(u,d);u/=f,d/=f,i=a<.7?a/.7*2.5:2.5+(a-.7)/.3*2.1;let[g,x]=Tx(E.x+u*i*e,E.z+d*i*e);E.x=g,E.z=x;let m=Math.atan2(u,d);E.ry+=id(E.ry,m)*Math.min(1,e*12),E.lean=s*Math.min(1,a),nl+=e*i,nl>1.2&&(nl=0,Bt.step())}}if(i===0&&(E.lean=0),E.speed=i,Kt.position.set(E.x,0,E.z),Kt.rotation.y=E.ry,Kt.userData.update(e,{speed:i,pose:E.mode==="creator"?"creator":"",cam:Qe.position,lean:E.lean||0}),Object.keys(rn).forEach(s=>{let r=rn[s],a=r.n,o=Ni(E.x,E.z,a.x,a.z),c=E.dialog&&E.dialog.id===s&&E.mode==="dialog",l=a.ry||0;!a.sit&&(c||o<5)&&(l=Math.atan2(E.x-a.x,E.z-a.z)),a.sit&&c&&(l=Math.atan2(E.x-a.x,E.z-a.z)*.3+(a.ry||0)*.7),r.ry+=id(r.ry,l)*Math.min(1,e*5),r.obj.rotation.y=r.ry,r.wave>0&&(r.wave-=e),r.obj.userData.update(e,{cam:Qe.position,talk:c||!!ai[s]&&qn&&qn.who===s,wave:r.wave>0,sit:!!a.sit})}),Yt.update(e,tl,{open:Ja()}),An.position.set(E.x+26,E.z*0+40,E.z+16),An.target.position.set(E.x,0,E.z),E.mode==="cine")Kx(e);else if(E.mode==="creator"){let s=Kt.position,r=Se("world").clientWidth,a=Se("world").clientHeight,o=r>a*1.25;Qe.fov!==30&&(Qe.fov=30,Qe.updateProjectionMatrix());let c=Ct.ang,l=2.35,h=new L(s.x+Math.sin(c)*l,1.45,s.z+Math.cos(c)*l);Qe.position.lerp(h,1-Math.exp(-e*8)),Qe.lookAt(s.x,1.08,s.z),o?Qe.setViewOffset(r,a,r*.2,0,r,a):Qe.clearViewOffset()}else if(E.mode==="start"){let s=tl*.08;Qe.position.set(8+Math.cos(s)*34,9,2+Math.sin(s)*22),Qe.lookAt(10,2,-2)}else wx(e);if(hr.position.copy(Qe.position),E.mode==="play"){let s=Rx(),r=s.find(l=>l.t==="npc");r&&E.near!==r.id&&(E.near=r.id,E.greeted[r.id]||(E.greeted[r.id]=!0,rn[r.id].wave=2.4,Qu("Bonjour "+xt(E.nom)+" !",bt[r.id].x,bt[r.id].z,bt[r.id].look.h*1.95,3e3))),!r&&E.near&&(E.near=null);let a=hd(s[0]);cl=a.run;let o=Se("ba");o.disabled=!a.enabled;let c=Se("alabel");if(c.textContent!==a.label&&(c.textContent=a.label),il-=e,il<=0&&(il=5,E.sc==="ville"&&!E.near&&!qn)){let l=Da[nd%Da.length];nd++;let h=l[0]==="J\xE9r\xE9mie"?ai.jer:ai.kasa;Ni(E.x,E.z,h.x,h.z)<16&&Qu("<b>"+xt(l[0])+"</b> : "+xt(l[1]),h.x,h.z,h.look.h*1.95,4200)}}else E.mode==="mini"&&(Jx(e),Se("alabel").textContent="Arr\xEAter la cueillette",Se("ba").disabled=!1);Ax(),di.render(Pt,Qe)}function jx(){E.mode="cine",E.cine={t:0,dur:9},["joy","actwrap","top","info"].forEach(n=>Se(n).classList.add("hide")),Se("cine").classList.remove("hide"),Se("skip").classList.remove("hide"),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,dr()}function Kx(n){let e=E.cine;e.t+=n;let t=Math.min(1,e.t/e.dur),i=t*t*(3-2*t),s=new L(60,16,22),r=new L(10,10,26),a=fl(pl()),o;if(t<.6){let l=t/.6,h=l*l*(3-2*l);o=s.clone().lerp(r,h)}else{let l=(t-.6)/.4,h=l*l*(3-2*l);o=r.clone().lerp(a,h)}Qe.position.copy(o);let c=new L(30,3,-4).lerp(ja(),hi(0,1,(t-.45)/.55));Qe.lookAt(c),e.t>=e.dur&&Md()}function Md(){E.cine=null,E.mode="play",["joy","actwrap","top","info"].forEach(n=>Se(n).classList.remove("hide")),Se("cine").classList.add("hide"),Se("skip").classList.add("hide"),Ka(),$t(),Rn({kind:"info",title:"Bienvenue, "+E.nom+" !",i:0,lines:["Tu es dans ton village. D\xE9place-toi avec le joystick \xE0 gauche, et fais glisser ton doigt sur l\u2019\xE9cran pour tourner la cam\xE9ra.","L\u2019\xE9cole LEXARIS ACAD\xC9MIE est tout \xE0 droite. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues au manguier, vends-les \xE0 Maman B\xE9a et meuble ta maison."]})}Se("skip").addEventListener("click",()=>{E.mode==="cine"&&Md()});function Qx(){Rn({kind:"profile"})}function ev(){let n=(window.__MAN&&window.__MAN.avatars||[]).filter(e=>e[0]===(E.look.s||"f"));return`<h3>Ma photo de profil</h3><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${E.look.s==="f"?" on":""}" onclick="setGenre('f')" style="width:auto">Fille</button><button class="chip${E.look.s==="h"?" on":""}" onclick="setGenre('h')" style="width:auto">Gar\xE7on</button></div><div class="avs">`+n.map(e=>`<button class="avb${E.photo===e?" on":""}" onclick="crPhoto('${e}')"><img src="img/avatars/${e}.jpg" alt=""></button>`).join("")+(pr()?`<button class="avb${E.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${pr()}" alt=""></button>`:"")+'</div><label class="chip" style="cursor:pointer;display:block;margin-top:8px">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label><button class="p" onclick="closeDialog()">Fermer</button>'}function tv(n){E.look.s=n,E.sexe=n,kt(),zt()}function nv(){Rn({kind:"objs"})}function iv(){let n=hl(),e=Object.keys(un).length;return`<h3>Mes objets (${n}/${e})</h3>`+Object.keys(un).map(t=>`<div class="row"><span>${xt(un[t].n)}</span><b>${E.adv.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+'<p style="font-size:13px;margin-top:8px">Ach\xE8te-les chez Maman B\xE9a, au march\xE9, avec les pi\xE8ces gagn\xE9es en r\xE9pondant aux questions et en cueillant des mangues.</p><button class="p" onclick="closeDialog()">Fermer</button>'}var bd="kelas_photo_v1";function pr(){try{return localStorage.getItem(bd)}catch{return null}}function Sd(){return E.photo==="u"?pr():E.photo&&window.__MAN&&(window.__MAN.avatars||[]).includes(E.photo)?"img/avatars/"+E.photo+".jpg":null}function sv(n){E.photo=n,kt(),$t(),E.dialog&&E.dialog.kind==="profile"?zt():vn()}function rv(n){let e=n.files&&n.files[0];if(!e)return;let t=new Image,i=URL.createObjectURL(e);t.onload=()=>{let s=document.createElement("canvas");s.width=160,s.height=213;let r=s.getContext("2d"),a=Math.max(160/t.width,213/t.height),o=t.width*a,c=t.height*a;r.drawImage(t,(160-o)/2,(213-c)/2,o,c),URL.revokeObjectURL(i);try{localStorage.setItem(bd,s.toDataURL("image/jpeg",.82)),E.photo="u",kt(),$t(),E.dialog&&E.dialog.kind==="profile"?zt():vn(),xn("Ta photo est enregistr\xE9e sur cet appareil.")}catch{xn("Impossible d\u2019enregistrer la photo.")}},t.onerror=()=>xn("Cette image ne peut pas \xEAtre lue."),t.src=i}var Ss={hair:sr,acc:rr,outfit:oi},Ct={tab:"perso",prev:null,from:"play",ang:0};function wn(n,e){let t=Ss[n][e];if(!t)return!1;if(t.own||t.unlock&&Es(t.unlock)||E.adv.bought[n+":"+e])return!0;if(n==="outfit"){for(let i in Li)if(ui()>=+i&&Li[i].outfits.indexOf(e)>=0)return!0}return!1}function Xa(n,e){let t=Ss[n][e];if(t.price)return t.price+" \u{1FA99}";if(t.unlock)return"Qu\xEAte : "+bt[t.unlock].name;for(let i in Li)if(Li[i].outfits&&Li[i].outfits.indexOf(e)>=0)return"Niveau "+i;return""}function av(n){let e=[];return[["hair",sr],["acc",rr],["outfit",oi]].forEach(t=>Object.keys(t[1]).forEach(i=>{t[1][i].unlock===n&&e.push(t[1][i].n)})),e}function Ed(){let n=E.look,e=[];return wn("hair",n.hair)||e.push({kind:"hair",id:n.hair}),wn("outfit",n.outfit)||e.push({kind:"outfit",id:n.outfit}),n.acc.forEach(t=>{wn("acc",t)||e.push({kind:"acc",id:t})}),e}function xr(){let n=Kt;Kt=ld(),Kt.position.set(E.x,0,E.z),Kt.rotation.y=E.ry,Pt.add(Kt),n&&(Pt.remove(n),n.traverse(e=>{e.geometry&&e.geometry.dispose()}))}var sl=!1;function vr(){sl||(sl=!0,requestAnimationFrame(()=>{sl=!1,xr()}))}function xl(n){["joy","actwrap","top","info"].forEach(e=>Se(e).classList.toggle("hide",!n))}function vl(n){Ct.from=n,Ct.tab="perso",Ct.prev=JSON.parse(JSON.stringify(E.look)),E.mode="creator",E.joy.x=E.joy.y=0,E.key.x=E.key.y=0,_l(),_r(),Ct.ang=0,E.ry=0,xr(),xl(!1),Se("creator").classList.remove("hide");{let e=!!E.real,t=Kt.position;Qe.fov=30,Qe.updateProjectionMatrix(),Qe.position.set(t.x,e?1.25:1.45,t.z+(e?3.9:2.35))}vn()}function ov(){let n=E.look,e=Ct.prev;wn("hair",n.hair)||(n.hair=e.hair),wn("outfit",n.outfit)||(n.outfit=e.outfit),n.acc=n.acc.filter(t=>wn("acc",t)),kt(),xr(),Se("creator").classList.add("hide"),Qe.clearViewOffset(),dl(),Ct.from==="start"?jx():(E.mode="play",xl(!0),Ka(),$t())}var Tn=(n,e,t,i)=>`<button class="chip${e?" on":""}" onclick="${t}">${n}${i?`<small>${i}</small>`:""}</button>`,cr=(n,e,t)=>`<button class="swt${e?" on":""}" style="background:${n}" onclick="${t}" aria-label="couleur"></button>`,ys=(n,e)=>`<label class="sl"><span>${n}</span><input type="range" min="0" max="100" value="${Math.round(E.look[e]*100)}" oninput="crSlide('${e}',this.value)"></label>`;function vn(){let n=E.look,e=E.real?[["perso","Personnage"],["photo","Photo"]]:[["perso","Personnage"],["visage","Visage"],["cheveux","Cheveux"],["teint","Teint"],["acc","Accessoires"],["tenue","Tenue"],["photo","Photo"]];e.some(s=>s[0]===Ct.tab)||(Ct.tab="perso");let t=`<div class="crh"><b>Mon personnage</b><span>\u{1FA99} ${E.adv.pieces}</span><button class="p" onclick="creatorDone()">Terminer</button></div>`;if(t+='<div class="tabs">'+e.map(s=>`<button class="${Ct.tab===s[0]?"on":""}" onclick="crTab('${s[0]}')">${s[1]}</button>`).join("")+'</div><div class="crb">',Ct.tab==="perso")t+='<div class="lb">Style de personnage</div><div class="chips">'+Tn("R\xE9aliste (photo)",!!E.real,"crStyle('real')")+Tn("3D personnalisable",!E.real,"crStyle('3d')")+"</div>",E.real?t+='<div class="lb">Choisis ton personnage</div><div class="avs">'+["pf1","pf2","ph1","ph2"].map(s=>`<button class="avb${E.real===s?" on":""}" onclick="crChar('${s}')"><img src="img/chars/${s}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("")+"</div>":t+='<p style="font-size:13px;margin:8px 0">R\xE8gle le visage, les cheveux, le teint, les accessoires et la tenue avec les onglets.</p>';else if(Ct.tab==="visage")t+=ys("Largeur du visage","faceW")+ys("M\xE2choire","jaw")+ys("Taille des yeux","eyeS")+ys("Nez","nose")+ys("L\xE8vres","lips")+ys("Joues roses","blush"),t+='<div class="lb">Sourcils</div><div class="chips">'+["Fins","\xC9pais","Arqu\xE9s"].map((s,r)=>Tn(s,n.brow===r,`crSet('brow',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des yeux</div><div class="sws">'+nr.map((s,r)=>cr(s,n.eyeC===r,`crSet('eyeC',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des l\xE8vres</div><div class="sws">'+ir.map((s,r)=>cr(s,n.lipC===r,`crSet('lipC',${r})`)).join("")+"</div>",n.s==="h"&&(t+='<div class="lb">Barbe</div><div class="chips">'+["Aucune","L\xE9g\xE8re","Compl\xE8te"].map((s,r)=>Tn(s,n.beard===r,`crSet('beard',${r})`)).join("")+"</div>");else if(Ct.tab==="cheveux")t+='<div class="lb">Coiffure</div><div class="chips">'+Object.keys(sr).map(s=>Tn(sr[s].n,n.hair===s,`crHair('${s}')`,wn("hair",s)?"":"\u{1F512} "+Xa("hair",s))).join("")+"</div>",t+='<div class="lb">Couleur des cheveux</div><div class="sws">'+Ua.map((s,r)=>cr(s,n.hairC===r,`crSet('hairC',${r})`)).join("")+"</div>";else if(Ct.tab==="teint")t+='<div class="lb">Je suis</div><div class="chips">'+Tn("Une fille",n.s==="f","crSet('s','f')")+Tn("Un gar\xE7on",n.s==="h","crSet('s','h')")+"</div>",t+='<div class="lb">Teint de la peau</div><div class="sws">'+gs.map((s,r)=>cr(s,n.skin===r,`crSet('skin',${r})`)).join("")+"</div>";else if(Ct.tab==="acc")t+='<div class="lb">Accessoires</div><div class="chips">'+Object.keys(rr).map(s=>Tn(rr[s].n,n.acc.indexOf(s)>=0,`crAcc('${s}')`,wn("acc",s)?"":"\u{1F512} "+Xa("acc",s))).join("")+"</div>";else if(Ct.tab==="photo"){let s=(window.__MAN&&window.__MAN.avatars||[]).filter(r=>r[0]===n.s);t+='<div class="lb">Ma photo de profil</div><div class="avs">'+s.map(r=>`<button class="avb${E.photo===r?" on":""}" onclick="crPhoto('${r}')"><img src="img/avatars/${r}.jpg" alt=""></button>`).join("")+(pr()?`<button class="avb${E.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${pr()}" alt=""></button>`:"")+"</div>",t+='<div class="chips" style="margin-top:8px"><label class="chip" style="cursor:pointer">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label>'+Tn("Aucune photo",!E.photo,"crPhoto(null)")+"</div>"}else t+='<div class="lb">Tenue</div><div class="chips">'+Object.keys(oi).map(s=>Tn(oi[s].n,n.outfit===s,`crOutfit('${s}')`,wn("outfit",s)?"":"\u{1F512} "+Xa("outfit",s))).join("")+"</div>",t+='<div class="lb">Couleur de la tenue</div><div class="sws">'+Na.map((s,r)=>cr(s,n.outfitC===r,`crSet('outfitC',${r})`)).join("")+"</div>";t+="</div>";let i=Ed();if(i.length){let s=i.reduce((r,a)=>r+(Ss[a.kind][a.id].price||0),0);t+=`<div class="buy"><span>Essayage : ${i.map(r=>xt(Ss[r.kind][r.id].n)).join(", ")} \u2014 ${s} \u{1FA99}</span><button class="p" onclick="crBuy()">Acheter</button></div>`}Se("creator").innerHTML=t}function cv(n){if(n==="real"){let e=["pf1","pf2","ph1","ph2"].some(ur);E.real=e?E.look.s==="f"?"pf1":"ph1":null}else E.real=null;xr(),vn()}function lv(n){E.real=n,E.look.s=n[1]==="f"?"f":"h",E.sexe=E.look.s,xr(),vn()}function hv(n){Ct.tab=n,vn()}function uv(n,e){E.look[n]=e/100,vr()}function dv(n,e){E.look[n]=e,n==="s"&&(E.sexe=e,e==="f"&&E.look.beard&&(E.look.beard=0)),vr(),vn()}function yl(n,e){let t=Ss[n][e];return wn(n,e)||t.price?!0:(xn(Xa(n,e)+" pour d\xE9bloquer : "+t.n),Bt.ko(),!1)}function fv(n){yl("hair",n)&&(E.look.hair=n,vr(),vn())}function pv(n){yl("outfit",n)&&(E.look.outfit=n,vr(),vn())}function mv(n){let e=E.look.acc,t=e.indexOf(n);if(t>=0)e.splice(t,1);else{if(!yl("acc",n))return;e.push(n)}vr(),vn()}function gv(){let n=Ed(),e=n.reduce((t,i)=>t+(Ss[i.kind][i.id].price||0),0);if(E.adv.pieces<e){xn("Il te manque "+(e-E.adv.pieces)+" pi\xE8ces."),Bt.ko();return}E.adv.pieces-=e,n.forEach(t=>{E.adv.bought[t.kind+":"+t.id]=!0}),kt(),$t(),Bt.coin(),xn("Achat r\xE9ussi !"),vn()}function _v(){ud(),vl("play")}function Ml(n){E.sexe=n,E.look.s=n,n==="f"&&E.look.beard&&(E.look.beard=0),Se("fille").className=n==="f"?"p":"",Se("garcon").className=n==="h"?"p":""}Se("fille").onclick=()=>Ml("f");Se("garcon").onclick=()=>Ml("h");function Td(n){Se("start").classList.add("hide"),Se("cv").style.display="none",xl(!0),["joy","actwrap"].forEach(e=>Se(e).classList.add("hide")),Se("cine").classList.add("hide"),E.ui="photo",E.mode="pview",$a.show("village"),$t(),n&&Rn({kind:"info",title:"Bienvenue, "+E.nom+" !",i:0,lines:["Tu es devant ta maison, dans ton quartier de Kinshasa. Touche les fl\xE8ches pour te d\xE9placer, touche les personnes pour leur parler, et fais glisser ton doigt pour regarder autour de toi.","Ton but : aller \xE0 l\u2019\xE9cole LEXARIS ACAD\xC9MIE. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues, vends-les \xE0 Maman B\xE9a au march\xE9, et gagne des pi\xE8ces."]})}function wd(n){Se("start").classList.add("hide"),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,n?(dr(),E.mode="creator",vl("start")):(E.mode="play",["joy","actwrap"].forEach(e=>Se(e).classList.remove("hide")),dr(),$t())}Se("go").onclick=()=>{let n=Se("nom").value.trim();if(!n){Se("nom").focus();return}E.nom=n,E.adv=Za(),E.ui="photo",E.look=Object.assign({},ar,{acc:[],s:E.sexe}),E.photo=E.sexe==="f"?"f1":"h1",kt(),Td(!0)};Se("go3d").onclick=()=>{let n=Se("nom").value.trim();if(!n){Se("nom").focus();return}E.ui="3d",Se("cv").style.display="block",E.nom=n,E.adv=Za(),E.real=(window.__MAN&&window.__MAN.chars||[]).includes(E.sexe==="f"?"pf1":"ph1")?E.sexe==="f"?"pf1":"ph1":null,E.look=Object.assign({},ar,{acc:[],s:E.sexe,hair:E.sexe==="f"?"tresses":"courtes"}),kt(),wd(!0)};Se("cont").onclick=()=>{E.ui==="photo"?Td(!1):(Se("cv").style.display="block",wd(!1))};Object.assign(window,{openProfile:Qx,setGenre:tv,replay:vx,toggleVoice:Xx,crStyle:cv,crChar:lv,crPhoto:sv,crUpload:rv,crTab:hv,crSlide:uv,crSet:dv,crHair:fv,crOutfit:pv,crAcc:mv,crBuy:gv,creatorDone:ov,shopMode:_v,nextLine:Ix,answerQ:Dx,nextQ:Ux,closeDialog:ud,infoNext:Bx,sellMangoes:Hx,buy:Vx,toggleSound:Wx,resetGame:qx,__G:E,__snap:()=>Ka(),__dbg:()=>({cam:Qe.position.toArray().map(n=>+n.toFixed(1)),bea:rn.bea&&rn.bea.obj.position.toArray(),beaVis:rn.bea&&rn.bea.obj.visible,n:Object.keys(rn)})});var Ad={G:E,NPC:bt,AUTOP:ai,AUTO:Da,actionFor:hd,locked:rd,doneNpc:Es,doorOpen:Ja,toast:xn,speak:ul,SFX:Bt,gain:gr,save:kt,refreshHud:$t,openBox:Rn,esc:xt,hasChar:ur,openObjs:nv};zu(Ad);var $a=Ad.photo;function xv(){let n=px();dl(),n&&n.nom&&(E.nom=n.nom,E.ui=n.ui||"photo",E.photo=n.photo||null,E.real=n.real===void 0?null:n.real,E.voice=n.voice!==!1,E.sound=n.sound!==!1,E.look=Object.assign({},ar,{acc:[]},n.look||{s:n.sexe||"f",skin:n.skin||3}),E.sexe=E.look.s,E.adv=Object.assign(Za(),n.adv||{}),Se("nom").value=n.nom,Se("cont").textContent="Continuer \xB7 "+n.nom+" (niveau "+ui()+")",Se("cont").classList.remove("hide"),Se("go").textContent="Nouvelle partie",Se("go").className=""),Ml(E.sexe),$t(),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,E.ui!=="photo"||!n||n.nom,Se("cv").style.display="none",Se("lb").style.width="100%",setTimeout(()=>{Se("load").classList.add("hide"),Se("start").classList.remove("hide")},150),E.mode="start",requestAnimationFrame(yd)}fetch("img/manifest.json").then(n=>n.ok?n.json():{}).catch(()=>({})).then(n=>{window.__MAN=n||{},Hc(n),(n.scenes||[]).includes("kinshasa")&&(Se("start").style.backgroundImage="linear-gradient(rgba(10,20,30,.35),rgba(10,20,30,.35)),url(img/scenes/kinshasa.jpg)"),xv()});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
