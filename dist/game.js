(()=>{var zp=0,nh=1,Bp=2;var Fd=1,$c=2,vi=3,Oi=0,Qt=1,ot=2;var Ft=0,Qs=1,nr=2,ih=3,sh=4,Zc=5,Nn=100,kp=101,Hp=102,rh=103,ah=104,gr=200,Gp=201,Vp=202,Wp=203,cc=204,uc=205,Vo=206,qp=207,Wo=208,Xp=209,jp=210,Yp=211,$p=212,Zp=213,Kp=214,Jp=0,Qp=1,em=2,ho=3,tm=4,nm=5,im=6,sm=7,Od=0,rm=1,am=2,Ni=0,Kc=1,Jc=2,Qc=3,_s=4,om=5,eu=6;var zd=300,ir=301,sr=302,hc=303,dc=304,qo=306,Wt=1e3,jn=1001,ps=1002,Dt=1003,oh=1004;var Cl=1005;var Un=1006,lm=1007;var Yr=1008;var ni=1009,cm=1010,um=1011,tu=1012,Bd=1013,Di=1014,Ui=1015,yn=1016,kd=1017,Hd=1018,_i=1020,hm=1021,An=1023,dm=1024,fm=1025,ds=1026,zi=1027,pm=1028,Gd=1029,mm=1030,Vd=1031,Wd=1033,Pl=33776,Ll=33777,Il=33778,Dl=33779,lh=35840,ch=35841,uh=35842,hh=35843,qd=36196,dh=37492,fh=37496,ph=37808,mh=37809,gh=37810,vh=37811,xh=37812,yh=37813,_h=37814,Mh=37815,bh=37816,Eh=37817,Sh=37818,Th=37819,wh=37820,Ah=37821,Ul=36492,Rh=36494,Ch=36495,gm=36283,Ph=36284,Lh=36285,Ih=36286;var fo=2300,po=2301,Nl=2302,Dh=2400,Uh=2401,Nh=2402;var Xd=3e3,fs=3001,vm=3200,nu=3201,iu=0,xm=1,Fn="",at="srgb",Mi="srgb-linear",su="display-p3",Xo="display-p3-linear",mo="linear",pt="srgb",go="rec709",vo="p3";var Ls=7680;var Fh=519,ym=512,_m=513,Mm=514,jd=515,bm=516,Em=517,Sm=518,Tm=519,Oh=35044;var zh="300 es",fc=1035,yi=2e3,xo=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,Gr=Math.PI/180,$r=180/Math.PI;function Ms(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function ru(n,e){return(n%e+e)%e}function wm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Am(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function Rm(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function Cm(n,e=1){return e-Math.abs(ru(n,e*2)-e)}function Pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Im(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dm(n,e){return n+Math.random()*(e-n)}function Um(n){return n*(.5-Math.random())}function Nm(n){n!==void 0&&(Bh=n);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(n){return n*Gr}function Om(n){return n*$r}function pc(n){return(n&n-1)===0&&n!==0}function zm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),f=a((e-i)/2),h=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*p,l*h,o*c);break;case"YXY":n.set(l*h,o*u,l*p,o*c);break;case"ZYZ":n.set(l*p,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var au={DEG2RAD:Gr,RAD2DEG:$r,generateUUID:Ms,clamp:Nt,euclideanModulo:ru,mapLinear:wm,inverseLerp:Am,lerp:Vr,damp:Rm,pingpong:Cm,smoothstep:Pm,smootherstep:Lm,randInt:Im,randFloat:Dm,randFloatSpread:Um,seededRandom:Nm,degToRad:Fm,radToDeg:Om,isPowerOfTwo:pc,ceilPowerOfTwo:zm,floorPowerOfTwo:yo,setQuaternionFromProperEuler:Bm,normalize:mn,denormalize:Ys},fe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],v=s[0],g=s[3],m=s[6],_=s[1],x=s[4],M=s[7],C=s[2],S=s[5],w=s[8];return r[0]=a*v+o*_+l*C,r[3]=a*g+o*x+l*S,r[6]=a*m+o*M+l*w,r[1]=c*v+u*_+d*C,r[4]=c*g+u*x+d*S,r[7]=c*m+u*M+d*w,r[2]=f*v+h*_+p*C,r[5]=f*g+h*x+p*S,r[8]=f*m+h*M+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,h=c*r-a*l,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fl=new st;function Yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function km(){let n=Zr("canvas");return n.style.display="block",n}var kh={};function Wr(n){n in kh||(kh[n]=!0,console.warn(n))}var Hh=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fa={[Mi]:{transfer:mo,primaries:go,toReference:n=>n,fromReference:n=>n},[at]:{transfer:pt,primaries:go,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xo]:{transfer:mo,primaries:vo,toReference:n=>n.applyMatrix3(Gh),fromReference:n=>n.applyMatrix3(Hh)},[su]:{transfer:pt,primaries:vo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gh),fromReference:n=>n.applyMatrix3(Hh).convertLinearToSRGB()}},Hm=new Set([Mi,Xo]),lt={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Hm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Fa[e].toReference,s=Fa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fa[n].primaries},getTransfer:function(n){return n===Fn?mo:Fa[n].transfer}};function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ol(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Is,_o=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=Zr("canvas")),Is.width=e.width,Is.height=e.height;let i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=er(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gm=0,Mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Ms(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zl(s[a].image)):r.push(zl(s[a]))}else r=zl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function zl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?_o.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vm=0,_n=class n extends Bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=jn,s=jn,r=Un,a=Yr,o=An,l=ni,c=n.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Ms(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fs?at:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wt:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wt:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?fs:Xd}set encoding(e){Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?at:Fn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=zd;_n.DEFAULT_ANISOTROPY=1;var Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(h+1)/2,C=(m+1)/2,S=(u+f)/4,w=(d+v)/4,O=(p+g)/4;return x>M&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=w/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=O/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=O/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?at:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends mc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},bo=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gc=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[a+0],h=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=v;return}if(d!==v||l!==f||c!==h||u!==p){let g=1-o,m=l*f+c*h+u*p+d*v,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let C=Math.sqrt(x),S=Math.atan2(C,m*_);g=Math.sin(g*S)/C,o=Math.sin(o*S)/C}let M=o*_;if(l=l*g+f*M,c=c*g+h*M,u=u*g+p*M,d=d*g+v*M,g===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],h=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-o*h,e[t+2]=c*p+u*h+o*f-l*d,e[t+3]=u*p-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>d){let h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>d){let h=2*Math.sqrt(1+o-i-d);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new P,Vh=new en,bi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),za.subVectors(this.max,Nr),Ds.subVectors(e.a,Nr),Us.subVectors(e.b,Nr),Ns.subVectors(e.c,Nr),Ri.subVectors(Us,Ds),Ci.subVectors(Ns,Us),as.subVectors(Ds,Ns);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-as.z,as.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,as.z,0,-as.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-as.y,as.x,0];return!kl(t,Ds,Us,Ns,za)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Ds,Us,Ns,za))?!1:(Ba.crossVectors(Ri,Ci),t=[Ba.x,Ba.y,Ba.z],kl(t,Ds,Us,Ns,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new P,new P,new P,new P,new P,new P,new P,new P],Wn=new P,Oa=new bi,Ds=new P,Us=new P,Ns=new P,Ri=new P,Ci=new P,as=new P,Nr=new P,za=new P,Ba=new P,os=new P;function kl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){os.fromArray(n,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Wm=new bi,Fr=new P,Hl=new P,ki=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Hl)),this.expandByPoint(Fr.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new P,Gl=new P,ka=new P,Pi=new P,Vl=new P,Ha=new P,Wl=new P,Eo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gl.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ka),o=Pi.dot(this.direction),l=-Pi.dot(ka),c=Pi.lengthSq(),u=Math.abs(1-a*a),d,f,h,p;if(u>0)if(d=a*l-o,f=a*o-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gl).addScaledVector(ka,f),h}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){Vl.subVectors(t,e),Ha.subVectors(i,e),Wl.crossVectors(Vl,Ha);let a=this.direction.dot(Wl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let l=o*this.direction.dot(Ha.crossVectors(Pi,Ha));if(l<0)return null;let c=o*this.direction.dot(Vl.cross(Pi));if(c<0||l+c>a)return null;let u=-o*Pi.dot(Wl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class n{constructor(e,t,i,s,r,a,o,l,c,u,d,f,h,p,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,f,h,p,v,g)}set(e,t,i,s,r,a,o,l,c,u,d,f,h,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,v=c*d;t[0]=f+v*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,h=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,h=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=p*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*l,h=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Xm)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Li.crossVectors(i,Tn),Li.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Li.crossVectors(i,Tn)),Li.normalize(),Ga.crossVectors(Tn,Li),s[0]=Li.x,s[4]=Ga.x,s[8]=Tn.x,s[1]=Li.y,s[5]=Ga.y,s[9]=Tn.y,s[2]=Li.z,s[6]=Ga.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],x=i[7],M=i[11],C=i[15],S=s[0],w=s[4],O=s[8],y=s[12],b=s[1],N=s[5],X=s[9],G=s[13],D=s[2],z=s[6],Z=s[10],de=s[14],re=s[3],te=s[7],pe=s[11],me=s[15];return r[0]=a*S+o*b+l*D+c*re,r[4]=a*w+o*N+l*z+c*te,r[8]=a*O+o*X+l*Z+c*pe,r[12]=a*y+o*G+l*de+c*me,r[1]=u*S+d*b+f*D+h*re,r[5]=u*w+d*N+f*z+h*te,r[9]=u*O+d*X+f*Z+h*pe,r[13]=u*y+d*G+f*de+h*me,r[2]=p*S+v*b+g*D+m*re,r[6]=p*w+v*N+g*z+m*te,r[10]=p*O+v*X+g*Z+m*pe,r[14]=p*y+v*G+g*de+m*me,r[3]=_*S+x*b+M*D+C*re,r[7]=_*w+x*N+M*z+C*te,r[11]=_*O+x*X+M*Z+C*pe,r[15]=_*y+x*G+M*de+C*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*h-i*l*h)+v*(+t*l*h-t*c*f+r*a*f-s*a*h+s*c*u-r*l*u)+g*(+t*c*d-t*o*h-r*a*d+i*a*h+r*o*u-i*c*u)+m*(-s*o*u-t*l*d+t*o*f+s*a*d-i*a*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=d*g*c-v*f*c+v*l*h-o*g*h-d*l*m+o*f*m,x=p*f*c-u*g*c-p*l*h+a*g*h+u*l*m-a*f*m,M=u*v*c-p*d*c+p*o*h-a*v*h-u*o*m+a*d*m,C=p*d*l-u*v*l-p*o*f+a*v*f+u*o*g-a*d*g,S=t*_+i*x+s*M+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=_*w,e[1]=(v*f*r-d*g*r-v*s*h+i*g*h+d*s*m-i*f*m)*w,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*m+i*l*m)*w,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*h-i*l*h)*w,e[4]=x*w,e[5]=(u*g*r-p*f*r+p*s*h-t*g*h-u*s*m+t*f*m)*w,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*m-t*l*m)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*h+t*l*h)*w,e[8]=M*w,e[9]=(p*d*r-u*v*r-p*i*h+t*v*h+u*i*m-t*d*m)*w,e[10]=(a*v*r-p*o*r+p*i*c-t*v*c-a*i*m+t*o*m)*w,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*h-t*o*h)*w,e[12]=C*w,e[13]=(u*v*s-p*d*s+p*i*f-t*v*f-u*i*g+t*d*g)*w,e[14]=(p*o*s-a*v*s-p*i*l+t*v*l+a*i*g-t*o*g)*w,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*f+t*o*f)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,h=r*u,p=r*d,v=a*u,g=a*d,m=o*d,_=l*c,x=l*u,M=l*d,C=i.x,S=i.y,w=i.z;return s[0]=(1-(v+m))*C,s[1]=(h+M)*C,s[2]=(p-x)*C,s[3]=0,s[4]=(h-M)*S,s[5]=(1-(f+m))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(p+x)*w,s[9]=(g-_)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),a=Fs.set(s[4],s[5],s[6]).length(),o=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let c=1/r,u=1/a,d=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=yi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),h,p;if(o===yi)h=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===xo)h=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=yi){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),f=(t+e)*c,h=(i+s)*u,p,v;if(o===yi)p=(a+r)*d,v=-2*d;else if(o===xo)p=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fs=new P,qn=new nt,qm=new P(0,0,0),Xm=new P(1,1,1),Li=new P,Ga=new P,Tn=new P,Wh=new nt,qh=new en,Yn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jm=0,Xh=new P,Os=new en,pi=new nt,Va=new P,Or=new P,Ym=new P,$m=new en,jh=new P(1,0,0),Yh=new P(0,1,0),$h=new P(0,0,1),Zm={type:"added"},Km={type:"removed"},Xt=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Yn,i=new en,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new st}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Or,Va,this.up):pi.lookAt(Va,Or,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(pi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,$m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new P(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new P,mi=new P,ql=new P,gi=new P,zs=new P,Bs=new P,Zh=new P,Xl=new P,jl=new P,Yl=new P,Wa=!1,$s=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),mi.subVectors(i,t),ql.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(mi),l=Xn.dot(ql),c=mi.dot(mi),u=mi.dot(ql),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-o*u)*f,p=(a*u-o*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,i,s,r,a,o,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),mi.subVectors(e,t),Xn.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,i),Bs.subVectors(r,i),Xl.subVectors(e,i);let l=zs.dot(Xl),c=Bs.dot(Xl);if(l<=0&&c<=0)return t.copy(i);jl.subVectors(e,s);let u=zs.dot(jl),d=Bs.dot(jl);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(zs,a);Yl.subVectors(e,r);let h=zs.dot(Yl),p=Bs.dot(Yl);if(p>=0&&h<=p)return t.copy(r);let v=h*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Bs,o);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return Zh.subVectors(r,s),o=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(Zh,o);let m=1/(g+v+f);return a=v*m,o=f*m,t.copy(i).addScaledVector(zs,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},qa={h:0,s:0,l:0};function $l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=ru(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=$l(a,r,e+1/3),this.g=$l(a,r,e),this.b=$l(a,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=$d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Ol(e.r),this.g=Ol(e.g),this.b=Ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return lt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Nt(ln.r*255,0,255))*65536+Math.round(Nt(ln.g*255,0,255))*256+Math.round(Nt(ln.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=at){lt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(qa);let i=Vr(Ii.h,qa.h,t),s=Vr(Ii.s,qa.s,t),r=Vr(Ii.l,qa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ve;Ve.NAMES=$d;var Jm=0,Ei=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=Qs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==uc&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ct=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new P,Xa=new fe,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}};var To=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wo=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ze=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Qm=0,Dn=new nt,Zl=new Xt,ks=new P,wn=new bi,zr=new bi,Vt=new P,xt=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?wo:To)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(wn.min,zr.min),wn.expandByPoint(Vt),Vt.addVectors(wn.max,zr.max),wn.expandByPoint(Vt)):(wn.expandByPoint(zr.min),wn.expandByPoint(zr.max))}wn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),Vt.add(ks)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new P,u[b]=new P;let d=new P,f=new P,h=new P,p=new fe,v=new fe,g=new fe,m=new P,_=new P;function x(b,N,X){d.fromArray(s,b*3),f.fromArray(s,N*3),h.fromArray(s,X*3),p.fromArray(a,b*2),v.fromArray(a,N*2),g.fromArray(a,X*2),f.sub(d),h.sub(d),v.sub(p),g.sub(p);let G=1/(v.x*g.y-g.x*v.y);isFinite(G)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(h,-v.y).multiplyScalar(G),_.copy(h).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(G),c[b].add(m),c[N].add(m),c[X].add(m),u[b].add(_),u[N].add(_),u[X].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let b=0,N=M.length;b<N;++b){let X=M[b],G=X.start,D=X.count;for(let z=G,Z=G+D;z<Z;z+=3)x(i[z+0],i[z+1],i[z+2])}let C=new P,S=new P,w=new P,O=new P;function y(b){w.fromArray(r,b*3),O.copy(w);let N=c[b];C.copy(N),C.sub(w.multiplyScalar(w.dot(N))).normalize(),S.crossVectors(O,N);let G=S.dot(u[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=G}for(let b=0,N=M.length;b<N;++b){let X=M[b],G=X.start,D=X.count;for(let z=G,Z=G+D;z<Z;z+=3)y(i[z+0]),y(i[z+1]),y(i[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new At(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new nt,ls=new Eo,ja=new ki,Jh=new P,Hs=new P,Gs=new P,Vs=new P,Kl=new P,Ya=new P,$a=new fe,Za=new fe,Ka=new fe,Qh=new P,ed=new P,td=new P,Ja=new P,Qa=new P,K=class extends Xt{constructor(e=new xt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Kl.fromBufferAttribute(d,e),a?Ya.addScaledVector(Kl,u):Ya.addScaledVector(Kl.sub(t),u))}t.add(Ya)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(ja.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ja,Jh)===null||ls.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],_=Math.max(g.start,h.start),x=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let M=_,C=x;M<C;M+=3){let S=o.getX(M),w=o.getX(M+1),O=o.getX(M+2);s=eo(this,m,e,i,c,u,d,S,w,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){let _=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);s=eo(this,a,e,i,c,u,d,_,x,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],_=Math.max(g.start,h.start),x=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let M=_,C=x;M<C;M+=3){let S=M,w=M+1,O=M+2;s=eo(this,m,e,i,c,u,d,S,w,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){let _=g,x=g+1,M=g+2;s=eo(this,a,e,i,c,u,d,_,x,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function e0(n,e,t,i,s,r,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:n}}function eo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Hs),n.getVertexPosition(l,Gs),n.getVertexPosition(c,Vs);let u=e0(n,e,t,i,Hs,Gs,Vs,Ja);if(u){s&&($a.fromBufferAttribute(s,o),Za.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,c),u.uv=$s.getInterpolation(Ja,Hs,Gs,Vs,$a,Za,Ka,new fe)),r&&($a.fromBufferAttribute(r,o),Za.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,c),u.uv1=$s.getInterpolation(Ja,Hs,Gs,Vs,$a,Za,Ka,new fe),u.uv2=u.uv1),a&&(Qh.fromBufferAttribute(a,o),ed.fromBufferAttribute(a,l),td.fromBufferAttribute(a,c),u.normal=$s.getInterpolation(Ja,Hs,Gs,Vs,Qh,ed,td,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};$s.getNormal(Hs,Gs,Vs,d.normal),u.face=d}return u}var dt=class n extends xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(d,2));function p(v,g,m,_,x,M,C,S,w,O,y){let b=M/w,N=C/O,X=M/2,G=C/2,D=S/2,z=w+1,Z=O+1,de=0,re=0,te=new P;for(let pe=0;pe<Z;pe++){let me=pe*N-G;for(let Se=0;Se<z;Se++){let Q=Se*b-X;te[v]=Q*_,te[g]=me*x,te[m]=D,c.push(te.x,te.y,te.z),te[v]=0,te[g]=0,te[m]=S>0?1:-1,u.push(te.x,te.y,te.z),d.push(Se/w),d.push(1-pe/O),de+=1}}for(let pe=0;pe<O;pe++)for(let me=0;me<w;me++){let Se=f+me+z*pe,Q=f+me+z*(pe+1),ue=f+(me+1)+z*(pe+1),be=f+(me+1)+z*pe;l.push(Se,Q,be),l.push(Q,ue,be),re+=6}o.addGroup(h,re,y),h+=re,f+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=rr(n[t]);for(let s in i)e[s]=i[s]}return e}function t0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zd(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}var un={clone:rr,merge:gn},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ao=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends Ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ws=-90,qs=1,vc=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Ws,qs,e,t);s.layers=this.layers,this.add(s);let r=new cn(Ws,qs,e,t);r.layers=this.layers,this.add(r);let a=new cn(Ws,qs,e,t);a.layers=this.layers,this.add(a);let o=new cn(Ws,qs,e,t);o.layers=this.layers,this.add(o);let l=new cn(Ws,qs,e,t);l.layers=this.layers,this.add(l);let c=new cn(Ws,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ro=class extends _n{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xc=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?at:Fn),this.texture=new Ro(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ft});r.uniforms.tEquirect.value=t;let a=new K(s,r),o=t.minFilter;return t.minFilter===Yr&&(t.minFilter=Un),new vc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Jl=new P,s0=new P,r0=new st,xi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Jl.subVectors(i,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||r0.getNormalMatrix(e),s=this.coplanarPoint(Jl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new ki,to=new P,Kr=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],p=s[9],v=s[10],g=s[11],m=s[12],_=s[13],x=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,g-h,M-m).normalize(),i[1].setComponents(l+r,f+c,g+h,M+m).normalize(),i[2].setComponents(l+a,f+u,g+p,M+_).normalize(),i[3].setComponents(l-a,f-u,g-p,M-_).normalize(),i[4].setComponents(l-o,f-d,g-v,M-x).normalize(),t===yi)i[5].setComponents(l+o,f+d,g+v,M+x).normalize();else if(t===xo)i[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function a0(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,f=c.usage,h=d.byteLength,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:h}}function r(c,u,d){let f=u.array,h=u._updateRange,p=u.updateRanges;if(n.bindBuffer(d,c),h.count===-1&&p.length===0&&n.bufferSubData(d,0,f),p.length!==0){for(let v=0,g=p.length;v<g;v++){let m=p[v];t?n.bufferSubData(d,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):n.bufferSubData(d,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}h.count!==-1&&(t?n.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):n.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}var qe=class n extends xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,h=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let _=m*f-a;for(let x=0;x<c;x++){let M=x*d-r;p.push(M,-_,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let x=_+c*m,M=_+c*(m+1),C=_+1+c*(m+1),S=_+1+c*m;h.push(x,M,S),h.push(M,C,S)}this.setIndex(h),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vg=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
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
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,Sv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,wv=`#define NORMAL
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Lv=`#define STANDARD
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
}`,Iv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Ov=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:o0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:u0,alphatest_fragment:h0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:v0,beginnormal_vertex:x0,bsdfs:y0,iridescence_fragment:_0,bumpmap_pars_fragment:M0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:T0,color_fragment:w0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:I0,displacementmap_pars_vertex:D0,displacementmap_vertex:U0,emissivemap_fragment:N0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:z0,envmap_fragment:B0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:eg,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:q0,fog_fragment:X0,fog_pars_fragment:j0,gradientmap_pars_fragment:Y0,lightmap_fragment:$0,lightmap_pars_fragment:Z0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:J0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:vg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:yg,morphcolor_vertex:_g,morphnormal_vertex:Mg,morphtarget_pars_vertex:bg,morphtarget_vertex:Eg,normal_fragment_begin:Sg,normal_fragment_maps:Tg,normal_pars_fragment:wg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Dg,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:zg,dithering_pars_fragment:Bg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:qg,skinbase_vertex:Xg,skinning_pars_vertex:jg,skinning_vertex:Yg,skinnormal_vertex:$g,specularmap_fragment:Zg,specularmap_pars_fragment:Kg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:av,background_frag:ov,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:hv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:vv,linedashed_vert:xv,linedashed_frag:yv,meshbasic_vert:_v,meshbasic_frag:Mv,meshlambert_vert:bv,meshlambert_frag:Ev,meshmatcap_vert:Sv,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Iv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:zv,sprite_frag:Bv},Pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ti={basic:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:gn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:gn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:gn([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:gn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:gn([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:gn([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:gn([Pe.common,Pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:gn([Pe.lights,Pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ti.physical={uniforms:gn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var no={r:0,b:0,g:0};function kv(n,e,t,i,s,r,a){let o=new Ve(0),l=r===!0?0:1,c,u,d=null,f=0,h=null;function p(g,m){let _=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),_=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qo)?(u===void 0&&(u=new K(new dt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:rr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=lt.getTransfer(x.colorSpace)!==pt,(d!==x||f!==x.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,h=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new K(new qe(2,2),new yt({name:"BackgroundMaterial",uniforms:rr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,m){g.getRGB(no,Zd(n)),i.buffers.color.setClear(no.r,no.g,no.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:p}}function Hv(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=g(null),c=l,u=!1;function d(D,z,Z,de,re){let te=!1;if(a){let pe=v(de,Z,z);c!==pe&&(c=pe,h(c.object)),te=m(D,de,Z,re),te&&_(D,de,Z,re)}else{let pe=z.wireframe===!0;(c.geometry!==de.id||c.program!==Z.id||c.wireframe!==pe)&&(c.geometry=de.id,c.program=Z.id,c.wireframe=pe,te=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,O(D,z,Z,de),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function h(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function p(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,z,Z){let de=Z.wireframe===!0,re=o[D.id];re===void 0&&(re={},o[D.id]=re);let te=re[z.id];te===void 0&&(te={},re[z.id]=te);let pe=te[de];return pe===void 0&&(pe=g(f()),te[de]=pe),pe}function g(D){let z=[],Z=[],de=[];for(let re=0;re<s;re++)z[re]=0,Z[re]=0,de[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:de,object:D,attributes:{},index:null}}function m(D,z,Z,de){let re=c.attributes,te=z.attributes,pe=0,me=Z.getAttributes();for(let Se in me)if(me[Se].location>=0){let ue=re[Se],be=te[Se];if(be===void 0&&(Se==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),Se==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),ue===void 0||ue.attribute!==be||be&&ue.data!==be.data)return!0;pe++}return c.attributesNum!==pe||c.index!==de}function _(D,z,Z,de){let re={},te=z.attributes,pe=0,me=Z.getAttributes();for(let Se in me)if(me[Se].location>=0){let ue=te[Se];ue===void 0&&(Se==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),Se==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor));let be={};be.attribute=ue,ue&&ue.data&&(be.data=ue.data),re[Se]=be,pe++}c.attributes=re,c.attributesNum=pe,c.index=de}function x(){let D=c.newAttributes;for(let z=0,Z=D.length;z<Z;z++)D[z]=0}function M(D){C(D,0)}function C(D,z){let Z=c.newAttributes,de=c.enabledAttributes,re=c.attributeDivisors;Z[D]=1,de[D]===0&&(n.enableVertexAttribArray(D),de[D]=1),re[D]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),re[D]=z)}function S(){let D=c.newAttributes,z=c.enabledAttributes;for(let Z=0,de=z.length;Z<de;Z++)z[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),z[Z]=0)}function w(D,z,Z,de,re,te,pe){pe===!0?n.vertexAttribIPointer(D,z,Z,re,te):n.vertexAttribPointer(D,z,Z,de,re,te)}function O(D,z,Z,de){if(i.isWebGL2===!1&&(D.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let re=de.attributes,te=Z.getAttributes(),pe=z.defaultAttributeValues;for(let me in te){let Se=te[me];if(Se.location>=0){let Q=re[me];if(Q===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let ue=Q.normalized,be=Q.itemSize,Ne=t.get(Q);if(Ne===void 0)continue;let we=Ne.buffer,ze=Ne.type,he=Ne.bytesPerElement,ge=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||Q.gpuType===Bd);if(Q.isInterleavedBufferAttribute){let Ce=Q.data,L=Ce.stride,Me=Q.offset;if(Ce.isInstancedInterleavedBuffer){for(let $=0;$<Se.locationSize;$++)C(Se.location+$,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let $=0;$<Se.locationSize;$++)M(Se.location+$);n.bindBuffer(n.ARRAY_BUFFER,we);for(let $=0;$<Se.locationSize;$++)w(Se.location+$,be/Se.locationSize,ze,ue,L*he,(Me+be/Se.locationSize*$)*he,ge)}else{if(Q.isInstancedBufferAttribute){for(let Ce=0;Ce<Se.locationSize;Ce++)C(Se.location+Ce,Q.meshPerAttribute);D.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<Se.locationSize;Ce++)M(Se.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ce=0;Ce<Se.locationSize;Ce++)w(Se.location+Ce,be/Se.locationSize,ze,ue,be*he,be/Se.locationSize*Ce*he,ge)}}else if(pe!==void 0){let ue=pe[me];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(Se.location,ue);break;case 3:n.vertexAttrib3fv(Se.location,ue);break;case 4:n.vertexAttrib4fv(Se.location,ue);break;default:n.vertexAttrib1fv(Se.location,ue)}}}}S()}function y(){X();for(let D in o){let z=o[D];for(let Z in z){let de=z[Z];for(let re in de)p(de[re].object),delete de[re];delete z[Z]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;let z=o[D.id];for(let Z in z){let de=z[Z];for(let re in de)p(de[re].object),delete de[re];delete z[Z]}delete o[D.id]}function N(D){for(let z in o){let Z=o[z];if(Z[D.id]===void 0)continue;let de=Z[D.id];for(let re in de)p(de[re].object),delete de[re];delete Z[D.id]}}function X(){G(),u=!0,c!==l&&(c=l,h(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:G,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:M,disableUnusedAttributes:S}}function Gv(n,e,t,i){let s=i.isWebGL2,r;function a(u){r=u}function o(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,f){if(f===0)return;let h,p;if(s)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,u,d,f),t.update(d,r,f)}function c(u,d,f){if(f===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(u[p],d[p]);else{h.multiDrawArraysWEBGL(r,u,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=d[v];t.update(p,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Vv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=a||e.has("OES_texture_float"),C=x&&M,S=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:S}}function Wv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new xi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:i,x=_*4,M=m.clippingState||null;l.value=M,M=u(p,f,x,h);for(let C=0;C!==x;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=h+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,M=h;x!==v;++x,M+=4)a.copy(d[x]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function qv(n){let e=new WeakMap;function t(a,o){return o===hc?a.mapping=ir:o===dc&&(a.mapping=sr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===hc||o===dc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new xc(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Hi=class extends Ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zs=4,nd=[.125,.215,.35,.446,.526,.582],hs=20,Ql=new Hi,id=new Ve,ec=null,tc=0,nc=0,us=(1+Math.sqrt(5))/2,Xs=1/us,sd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,us,Xs),new P(0,us,-Xs),new P(Xs,0,us),new P(-Xs,0,us),new P(us,Xs,0),new P(-us,Xs,0)],ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:yn,format:An,colorSpace:Mi,depthBuffer:!1},s=rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xv(r)),this._blurMaterial=jv(r,e,t)}return s}_compileMaterial(e){let t=new K(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,i,s){let o=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(id),u.toneMapping=Ni,u.autoClear=!1;let h=new Ct({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),p=new K(new dt,h),v=!1,g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,v=!0):(h.color.copy(id),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let x=this._cubeSize;io(s,_*x,m>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ql)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sd[(s-1)%sd.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new K(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*hs-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);let m=[],_=0;for(let w=0;w<hs;++w){let O=w/v,y=Math.exp(-O*O/2);m.push(y),w===0?_+=y:w<g&&(_+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-i;let M=this._sizeLods[s],C=3*M*(s>x-Zs?s-x+Zs:0),S=4*(this._cubeSize-M);io(t,C,S,3*M,2*M),l.setRenderTarget(t),l.render(d,Ql)}};function Xv(n){let e=[],t=[],i=[],s=n,r=n-Zs+1+nd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Zs?l=nd[a-n+Zs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*h),x=new Float32Array(g*p*h),M=new Float32Array(m*p*h);for(let S=0;S<h;S++){let w=S%3*2/3-1,O=S>2?0:-1,y=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];_.set(y,v*p*S),x.set(f,g*p*S);let b=[S,S,S,S,S,S];M.set(b,m*p*S)}let C=new xt;C.setAttribute("position",new At(_,v)),C.setAttribute("uv",new At(x,g)),C.setAttribute("faceIndex",new At(M,m)),e.push(C),s>Zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rd(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jv(n,e,t){let i=new Float32Array(hs),s=new P(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function ad(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function od(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function Yv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===hc||l===dc,u=l===ir||l===sr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new ar(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new ar(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $v(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zv(n,e,t,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let v=f.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER);let h=d.morphAttributes;for(let p in h){let v=h[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(d){let f=[],h=d.index,p=d.attributes.position,v=0;if(h!==null){let _=h.array;v=h.version;for(let x=0,M=_.length;x<M;x+=3){let C=_[x+0],S=_[x+1],w=_[x+2];f.push(C,S,S,w,w,C)}}else if(p!==void 0){let _=p.array;v=p.version;for(let x=0,M=_.length/3-1;x<M;x+=3){let C=x+0,S=x+1,w=x+2;f.push(C,S,S,w,w,C)}}else return;let g=new(Yd(f)?wo:To)(f,1);g.version=v;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Kv(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(r,p,o,h*l),t.update(p,r,1)}function d(h,p,v){if(v===0)return;let g,m;if(s)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,h*l,v),t.update(p,r,v)}function f(h,p,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(h[m]/l,p[m]);else{g.multiDrawElementsWEBGL(r,p,0,o,h,0,v);let m=0;for(let _=0;_<v;_++)m+=p[_];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Jv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Qv(n,e){return n[0]-e[0]}function ex(n,e){return Math.abs(e[1])-Math.abs(n[1])}function tx(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0,v=r.get(u);if(v===void 0||v.count!==p){let D=function(){X.dispose(),r.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();let _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],O=0;_===!0&&(O=1),x===!0&&(O=2),M===!0&&(O=3);let y=u.attributes.position.count*O,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let N=new Float32Array(y*b*4*p),X=new bo(N,y,b,p);X.type=Ui,X.needsUpdate=!0;let G=O*4;for(let z=0;z<p;z++){let Z=C[z],de=S[z],re=w[z],te=y*b*4*z;for(let pe=0;pe<Z.count;pe++){let me=pe*G;_===!0&&(a.fromBufferAttribute(Z,pe),N[te+me+0]=a.x,N[te+me+1]=a.y,N[te+me+2]=a.z,N[te+me+3]=0),x===!0&&(a.fromBufferAttribute(de,pe),N[te+me+4]=a.x,N[te+me+5]=a.y,N[te+me+6]=a.z,N[te+me+7]=0),M===!0&&(a.fromBufferAttribute(re,pe),N[te+me+8]=a.x,N[te+me+9]=a.y,N[te+me+10]=a.z,N[te+me+11]=re.itemSize===4?a.w:1)}}v={count:p,texture:X,size:new fe(y,b)},r.set(u,v),u.addEventListener("dispose",D)}let g=0;for(let _=0;_<f.length;_++)g+=f[_];let m=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",m),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let h=f===void 0?0:f.length,p=i[u.id];if(p===void 0||p.length!==h){p=[];for(let x=0;x<h;x++)p[x]=[x,0];i[u.id]=p}for(let x=0;x<h;x++){let M=p[x];M[0]=x,M[1]=f[x]}p.sort(ex);for(let x=0;x<8;x++)x<h&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Qv);let v=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let M=o[x],C=M[0],S=M[1];C!==Number.MAX_SAFE_INTEGER&&S?(v&&u.getAttribute("morphTarget"+x)!==v[C]&&u.setAttribute("morphTarget"+x,v[C]),g&&u.getAttribute("morphNormal"+x)!==g[C]&&u.setAttribute("morphNormal"+x,g[C]),s[x]=S,m+=S):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),g&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}let _=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function nx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var or=class extends _n{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:ds,u!==ds&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ds&&(i=Di),i===void 0&&u===zi&&(i=_i),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jd=new _n,Qd=new or(1,1);Qd.compareFunction=jd;var ef=new bo,tf=new gc,nf=new Ro,ld=[],cd=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jo(n,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ix(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function ox(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),zt(t,i)}}function lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,i))return;hd.set(i),n.uniformMatrix3fv(this.addr,!1,hd),zt(t,i)}}function cx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),zt(t,i)}}function ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function px(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qd:Jd;t.setTexture2D(e||r,s)}function yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tf,s)}function _x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nf,s)}function Mx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ef,s)}function bx(n){switch(n){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ax;case 35674:return ox;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return Mx}}function Ex(n,e){n.uniform1fv(this.addr,e)}function Sx(n,e){let t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function Tx(n,e){let t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function wx(n,e){let t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ax(n,e){let t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rx(n,e){let t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cx(n,e){let t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Px(n,e){n.uniform1iv(this.addr,e)}function Lx(n,e){n.uniform2iv(this.addr,e)}function Ix(n,e){n.uniform3iv(this.addr,e)}function Dx(n,e){n.uniform4iv(this.addr,e)}function Ux(n,e){n.uniform1uiv(this.addr,e)}function Nx(n,e){n.uniform2uiv(this.addr,e)}function Fx(n,e){n.uniform3uiv(this.addr,e)}function Ox(n,e){n.uniform4uiv(this.addr,e)}function zx(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Jd,r[a])}function Bx(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tf,r[a])}function kx(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nf,r[a])}function Hx(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ef,r[a])}function Gx(n){switch(n){case 5126:return Ex;case 35664:return Sx;case 35665:return Tx;case 35666:return wx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Ix;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Hx}}var yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}},_c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ic=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function Vx(n,e,t){let i=n.name,s=i.length;for(ic.lastIndex=0;;){let r=ic.exec(i),a=ic.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fd(t,c===void 0?new yc(o,n,e):new _c(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Mc(o),fd(t,d)),t=d}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Vx(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Wx=37297,qx=0;function Xx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function jx(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===vo&&t===go?i="LinearDisplayP3ToLinearSRGB":e===go&&t===vo&&(i="LinearSRGBToLinearDisplayP3"),n){case Mi:case Xo:return[i,"LinearTransferOETF"];case at:case su:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xx(n.getShaderSource(e),a)}else return s}function Yx(n,e){let t=jx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $x(n,e){let t;switch(e){case Kc:t="Linear";break;case Jc:t="Reinhard";break;case Qc:t="OptimizedCineon";break;case _s:t="ACESFilmic";break;case eu:t="AgX";break;case om:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function Kx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ks).join(`
`)}function Jx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ks(n){return n!==""}function gd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(e1,n1)}var t1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n1(n,e){let t=et[e];if(t===void 0){let i=t1.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}var i1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(i1,s1)}function s1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function a1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===sr&&(e="ENVMAP_MODE_REFRACTION"),e}function l1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Od:e="ENVMAP_BLENDING_MULTIPLY";break;case rm:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function c1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function u1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=r1(t),c=a1(t),u=o1(t),d=l1(t),f=c1(t),h=t.isWebGL2?"":Zx(t),p=Kx(t),v=Jx(r),g=s.createProgram(),m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ks).join(`
`),m.length>0&&(m+=`
`),_=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ks).join(`
`),_.length>0&&(_+=`
`)):(m=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),_=[h,yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?et.tonemapping_pars_fragment:"",t.toneMapping!==Ni?$x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=bc(a),a=gd(a,t),a=vd(a,t),o=bc(o),o=gd(o,t),o=vd(o,t),a=xd(a),o=xd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=x+m+a,C=x+_+o,S=pd(s,s.VERTEX_SHADER,M),w=pd(s,s.FRAGMENT_SHADER,C);s.attachShader(g,S),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function O(X){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(S).trim(),z=s.getShaderInfoLog(w).trim(),Z=!0,de=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,w);else{let re=md(s,S,"vertex"),te=md(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+re+`
`+te)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(D===""||z==="")&&(de=!1);de&&(X.diagnostics={runnable:Z,programLog:G,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:_}})}s.deleteShader(S),s.deleteShader(w),y=new tr(s,g),b=Qx(s,g)}let y;this.getUniforms=function(){return y===void 0&&O(this),y};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Wx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var h1=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sc(e),t.set(e,i)),i}},Sc=class{constructor(e){this.id=h1++,this.code=e,this.usedTimes=0}};function d1(n,e,t,i,s,r,a){let o=new So,l=new Ec,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function g(y,b,N,X,G){let D=X.fog,z=G.geometry,Z=y.isMeshStandardMaterial?X.environment:null,de=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),re=de&&de.mapping===qo?de.image.height:null,te=p[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=pe!==void 0?pe.length:0,Se=0;z.morphAttributes.position!==void 0&&(Se=1),z.morphAttributes.normal!==void 0&&(Se=2),z.morphAttributes.color!==void 0&&(Se=3);let Q,ue,be,Ne;if(te){let fn=ti[te];Q=fn.vertexShader,ue=fn.fragmentShader}else Q=y.vertexShader,ue=y.fragmentShader,l.update(y),be=l.getVertexShaderID(y),Ne=l.getFragmentShaderID(y);let we=n.getRenderTarget(),ze=G.isInstancedMesh===!0,he=G.isBatchedMesh===!0,ge=!!y.map,Ce=!!y.matcap,L=!!de,Me=!!y.aoMap,$=!!y.lightMap,ve=!!y.bumpMap,oe=!!y.normalMap,Be=!!y.displacementMap,Ae=!!y.emissiveMap,A=!!y.metalnessMap,T=!!y.roughnessMap,k=y.anisotropy>0,xe=y.clearcoat>0,U=y.iridescence>0,I=y.sheen>0,W=y.transmission>0,ee=k&&!!y.anisotropyMap,ye=xe&&!!y.clearcoatMap,Te=xe&&!!y.clearcoatNormalMap,Re=xe&&!!y.clearcoatRoughnessMap,ce=U&&!!y.iridescenceMap,j=U&&!!y.iridescenceThicknessMap,J=I&&!!y.sheenColorMap,q=I&&!!y.sheenRoughnessMap,le=!!y.specularMap,ie=!!y.specularColorMap,He=!!y.specularIntensityMap,De=W&&!!y.transmissionMap,$e=W&&!!y.thicknessMap,Ge=!!y.gradientMap,Ee=!!y.alphaMap,F=y.alphaTest>0,Le=!!y.alphaHash,Ie=!!y.extensions,je=!!z.attributes.uv1,Xe=!!z.attributes.uv2,mt=!!z.attributes.uv3,gt=Ni;return y.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(gt=n.toneMapping),{isWebGL2:u,shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:ue,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:Ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:he,instancing:ze,instancingColor:ze&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Mi,map:ge,matcap:Ce,envMap:L,envMapMode:L&&de.mapping,envMapCubeUVHeight:re,aoMap:Me,lightMap:$,bumpMap:ve,normalMap:oe,displacementMap:f&&Be,emissiveMap:Ae,normalMapObjectSpace:oe&&y.normalMapType===xm,normalMapTangentSpace:oe&&y.normalMapType===iu,metalnessMap:A,roughnessMap:T,anisotropy:k,anisotropyMap:ee,clearcoat:xe,clearcoatMap:ye,clearcoatNormalMap:Te,clearcoatRoughnessMap:Re,iridescence:U,iridescenceMap:ce,iridescenceThicknessMap:j,sheen:I,sheenColorMap:J,sheenRoughnessMap:q,specularMap:le,specularColorMap:ie,specularIntensityMap:He,transmission:W,transmissionMap:De,thicknessMap:$e,gradientMap:Ge,opaque:y.transparent===!1&&y.blending===Qs,alphaMap:Ee,alphaTest:F,alphaHash:Le,combine:y.combine,mapUv:ge&&v(y.map.channel),aoMapUv:Me&&v(y.aoMap.channel),lightMapUv:$&&v(y.lightMap.channel),bumpMapUv:ve&&v(y.bumpMap.channel),normalMapUv:oe&&v(y.normalMap.channel),displacementMapUv:Be&&v(y.displacementMap.channel),emissiveMapUv:Ae&&v(y.emissiveMap.channel),metalnessMapUv:A&&v(y.metalnessMap.channel),roughnessMapUv:T&&v(y.roughnessMap.channel),anisotropyMapUv:ee&&v(y.anisotropyMap.channel),clearcoatMapUv:ye&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:q&&v(y.sheenRoughnessMap.channel),specularMapUv:le&&v(y.specularMap.channel),specularColorMapUv:ie&&v(y.specularColorMap.channel),specularIntensityMapUv:He&&v(y.specularIntensityMap.channel),transmissionMapUv:De&&v(y.transmissionMap.channel),thicknessMapUv:$e&&v(y.thicknessMap.channel),alphaMapUv:Ee&&v(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(oe||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:Xe,vertexUv3s:mt,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(ge||Ee),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ot,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Ie&&y.extensions.derivatives===!0,extensionFragDepth:Ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(b,y),x(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){let b=p[y.type],N;if(b){let X=ti[b];N=un.clone(X.uniforms)}else N=y.uniforms;return N}function C(y,b){let N;for(let X=0,G=c.length;X<G;X++){let D=c[X];if(D.cacheKey===b){N=D,++N.usedTimes;break}}return N===void 0&&(N=new u1(n,b,y,r),c.push(N)),N}function S(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:C,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:O}}function f1(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function p1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Md(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,h,p,v,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:v,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=v,m.group=g),e++,m}function o(d,f,h,p,v,g){let m=a(d,f,h,p,v,g);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(d,f,h,p,v,g){let m=a(d,f,h,p,v,g);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||p1),i.length>1&&i.sort(f||_d),s.length>1&&s.sort(f||_d)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function m1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Md,n.set(i,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function g1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function v1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var x1=0;function y1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _1(n,e){let t=new g1,i=v1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);let r=new P,a=new nt,o=new nt;function l(u,d){let f=0,h=0,p=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let v=0,g=0,m=0,_=0,x=0,M=0,C=0,S=0,w=0,O=0,y=0;u.sort(y1);let b=d===!0?Math.PI:1;for(let X=0,G=u.length;X<G;X++){let D=u[X],z=D.color,Z=D.intensity,de=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*Z*b,h+=z.g*Z*b,p+=z.b*Z*b;else if(D.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(D.sh.coefficients[te],Z);y++}else if(D.isDirectionalLight){let te=t.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){let pe=D.shadow,me=i.get(D);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,s.directionalShadow[v]=me,s.directionalShadowMap[v]=re,s.directionalShadowMatrix[v]=D.shadow.matrix,M++}s.directional[v]=te,v++}else if(D.isSpotLight){let te=t.get(D);te.position.setFromMatrixPosition(D.matrixWorld),te.color.copy(z).multiplyScalar(Z*b),te.distance=de,te.coneCos=Math.cos(D.angle),te.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),te.decay=D.decay,s.spot[m]=te;let pe=D.shadow;if(D.map&&(s.spotLightMap[w]=D.map,w++,pe.updateMatrices(D),D.castShadow&&O++),s.spotLightMatrix[m]=pe.matrix,D.castShadow){let me=i.get(D);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,s.spotShadow[m]=me,s.spotShadowMap[m]=re,S++}m++}else if(D.isRectAreaLight){let te=t.get(D);te.color.copy(z).multiplyScalar(Z),te.halfWidth.set(D.width*.5,0,0),te.halfHeight.set(0,D.height*.5,0),s.rectArea[_]=te,_++}else if(D.isPointLight){let te=t.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity*b),te.distance=D.distance,te.decay=D.decay,D.castShadow){let pe=D.shadow,me=i.get(D);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,me.shadowCameraNear=pe.camera.near,me.shadowCameraFar=pe.camera.far,s.pointShadow[g]=me,s.pointShadowMap[g]=re,s.pointShadowMatrix[g]=D.shadow.matrix,C++}s.point[g]=te,g++}else if(D.isHemisphereLight){let te=t.get(D);te.skyColor.copy(D.color).multiplyScalar(Z*b),te.groundColor.copy(D.groundColor).multiplyScalar(Z*b),s.hemi[x]=te,x++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=h,s.ambient[2]=p;let N=s.hash;(N.directionalLength!==v||N.pointLength!==g||N.spotLength!==m||N.rectAreaLength!==_||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==C||N.numSpotShadows!==S||N.numSpotMaps!==w||N.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=_,s.point.length=g,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=S+w-O,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=y,N.directionalLength=v,N.pointLength=g,N.spotLength=m,N.rectAreaLength=_,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=C,N.numSpotShadows=S,N.numSpotMaps=w,N.numLightProbes=y,s.version=x1++)}function c(u,d){let f=0,h=0,p=0,v=0,g=0,m=d.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){let M=u[_];if(M.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),f++}else if(M.isSpotLight){let C=s.spot[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let C=s.rectArea[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let C=s.point[h];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let C=s.hemi[g];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:s}}function bd(n,e){let t=new _1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M1(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new bd(n,e),t.set(r,[l])):a>=o.length?(l=new bd(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Jr=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E1=`uniform sampler2D shadow_pass;
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
}`;function S1(n,e,t){let i=new Kr,s=new fe,r=new fe,a=new Mt,o=new Jr({depthPacking:nu}),l=new Tc,c={},u=t.maxTextureSize,d={[Oi]:Qt,[Qt]:Oi,[ot]:ot},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:b1,fragmentShader:E1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new xt;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new K(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd;let m=this.type;this.render=function(S,w,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ft),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let G=m!==vi&&this.type===vi,D=m===vi&&this.type!==vi;for(let z=0,Z=S.length;z<Z;z++){let de=S[z],re=de.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let te=re.getFrameExtents();if(s.multiply(te),r.copy(re.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,re.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,re.mapSize.y=r.y)),re.map===null||G===!0||D===!0){let me=this.type!==vi?{minFilter:Dt,magFilter:Dt}:{};re.map!==null&&re.map.dispose(),re.map=new qt(s.x,s.y,me),re.map.texture.name=de.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();let pe=re.getViewportCount();for(let me=0;me<pe;me++){let Se=re.getViewport(me);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),X.viewport(a),re.updateMatrices(de,me),i=re.getFrustum(),M(w,O,re.camera,de,this.type)}re.isPointLightShadow!==!0&&this.type===vi&&_(re,O),re.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(y,b,N)};function _(S,w){let O=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,O,f,v,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,O,h,v,null)}function x(S,w,O,y){let b=null,N=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)b=N;else if(b=O.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let X=b.uuid,G=w.uuid,D=c[X];D===void 0&&(D={},c[X]=D);let z=D[G];z===void 0&&(z=b.clone(),D[G]=z,w.addEventListener("dispose",C)),b=z}if(b.visible=w.visible,b.wireframe=w.wireframe,y===vi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let X=n.properties.get(b);X.light=O}return b}function M(S,w,O,y,b){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===vi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);let G=e.update(S),D=S.material;if(Array.isArray(D)){let z=G.groups;for(let Z=0,de=z.length;Z<de;Z++){let re=z[Z],te=D[re.materialIndex];if(te&&te.visible){let pe=x(S,te,y,b);S.onBeforeShadow(n,S,w,O,G,pe,re),n.renderBufferDirect(O,null,G,pe,S,re),S.onAfterShadow(n,S,w,O,G,pe,re)}}}else if(D.visible){let z=x(S,D,y,b);S.onBeforeShadow(n,S,w,O,G,z,null),n.renderBufferDirect(O,null,G,z,S,null),S.onAfterShadow(n,S,w,O,G,z,null)}}let X=S.children;for(let G=0,D=X.length;G<D;G++)M(X[G],w,O,y,b)}function C(S){S.target.removeEventListener("dispose",C);for(let O in c){let y=c[O],b=S.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function T1(n,e,t){let i=t.isWebGL2;function s(){let F=!1,Le=new Mt,Ie=null,je=new Mt(0,0,0,0);return{setMask:function(Xe){Ie!==Xe&&!F&&(n.colorMask(Xe,Xe,Xe,Xe),Ie=Xe)},setLocked:function(Xe){F=Xe},setClear:function(Xe,mt,gt,Ht,fn){fn===!0&&(Xe*=Ht,mt*=Ht,gt*=Ht),Le.set(Xe,mt,gt,Ht),je.equals(Le)===!1&&(n.clearColor(Xe,mt,gt,Ht),je.copy(Le))},reset:function(){F=!1,Ie=null,je.set(-1,0,0,0)}}}function r(){let F=!1,Le=null,Ie=null,je=null;return{setTest:function(Xe){Xe?he(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Xe){Le!==Xe&&!F&&(n.depthMask(Xe),Le=Xe)},setFunc:function(Xe){if(Ie!==Xe){switch(Xe){case Jp:n.depthFunc(n.NEVER);break;case Qp:n.depthFunc(n.ALWAYS);break;case em:n.depthFunc(n.LESS);break;case ho:n.depthFunc(n.LEQUAL);break;case tm:n.depthFunc(n.EQUAL);break;case nm:n.depthFunc(n.GEQUAL);break;case im:n.depthFunc(n.GREATER);break;case sm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Xe}},setLocked:function(Xe){F=Xe},setClear:function(Xe){je!==Xe&&(n.clearDepth(Xe),je=Xe)},reset:function(){F=!1,Le=null,Ie=null,je=null}}}function a(){let F=!1,Le=null,Ie=null,je=null,Xe=null,mt=null,gt=null,Ht=null,fn=null;return{setTest:function(vt){F||(vt?he(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(vt){Le!==vt&&!F&&(n.stencilMask(vt),Le=vt)},setFunc:function(vt,pn,ei){(Ie!==vt||je!==pn||Xe!==ei)&&(n.stencilFunc(vt,pn,ei),Ie=vt,je=pn,Xe=ei)},setOp:function(vt,pn,ei){(mt!==vt||gt!==pn||Ht!==ei)&&(n.stencilOp(vt,pn,ei),mt=vt,gt=pn,Ht=ei)},setLocked:function(vt){F=vt},setClear:function(vt){fn!==vt&&(n.clearStencil(vt),fn=vt)},reset:function(){F=!1,Le=null,Ie=null,je=null,Xe=null,mt=null,gt=null,Ht=null,fn=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap,f={},h={},p=new WeakMap,v=[],g=null,m=!1,_=null,x=null,M=null,C=null,S=null,w=null,O=null,y=new Ve(0,0,0),b=0,N=!1,X=null,G=null,D=null,z=null,Z=null,de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,te=0,pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(pe)[1]),re=te>=1):pe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),re=te>=2);let me=null,Se={},Q=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),be=new Mt().fromArray(Q),Ne=new Mt().fromArray(ue);function we(F,Le,Ie,je){let Xe=new Uint8Array(4),mt=n.createTexture();n.bindTexture(F,mt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<Ie;gt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Le,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,Xe):n.texImage2D(Le+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Xe);return mt}let ze={};ze[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(n.DEPTH_TEST),l.setFunc(ho),Ae(!1),A(nh),he(n.CULL_FACE),oe(Ft);function he(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function ge(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function Ce(F,Le){return h[F]!==Le?(n.bindFramebuffer(F,Le),h[F]=Le,i&&(F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le)),!0):!1}function L(F,Le){let Ie=v,je=!1;if(F)if(Ie=p.get(Le),Ie===void 0&&(Ie=[],p.set(Le,Ie)),F.isWebGLMultipleRenderTargets){let Xe=F.texture;if(Ie.length!==Xe.length||Ie[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,gt=Xe.length;mt<gt;mt++)Ie[mt]=n.COLOR_ATTACHMENT0+mt;Ie.length=Xe.length,je=!0}}else Ie[0]!==n.COLOR_ATTACHMENT0&&(Ie[0]=n.COLOR_ATTACHMENT0,je=!0);else Ie[0]!==n.BACK&&(Ie[0]=n.BACK,je=!0);je&&(t.isWebGL2?n.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function Me(F){return g!==F?(n.useProgram(F),g=F,!0):!1}let $={[Nn]:n.FUNC_ADD,[kp]:n.FUNC_SUBTRACT,[Hp]:n.FUNC_REVERSE_SUBTRACT};if(i)$[rh]=n.MIN,$[ah]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&($[rh]=F.MIN_EXT,$[ah]=F.MAX_EXT)}let ve={[gr]:n.ZERO,[Gp]:n.ONE,[Vp]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[jp]:n.SRC_ALPHA_SATURATE,[Wo]:n.DST_COLOR,[Vo]:n.DST_ALPHA,[Wp]:n.ONE_MINUS_SRC_COLOR,[uc]:n.ONE_MINUS_SRC_ALPHA,[Xp]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[Yp]:n.CONSTANT_COLOR,[$p]:n.ONE_MINUS_CONSTANT_COLOR,[Zp]:n.CONSTANT_ALPHA,[Kp]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(F,Le,Ie,je,Xe,mt,gt,Ht,fn,vt){if(F===Ft){m===!0&&(ge(n.BLEND),m=!1);return}if(m===!1&&(he(n.BLEND),m=!0),F!==Zc){if(F!==_||vt!==N){if((x!==Nn||S!==Nn)&&(n.blendEquation(n.FUNC_ADD),x=Nn,S=Nn),vt)switch(F){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nr:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,C=null,w=null,O=null,y.set(0,0,0),b=0,_=F,N=vt}return}Xe=Xe||Le,mt=mt||Ie,gt=gt||je,(Le!==x||Xe!==S)&&(n.blendEquationSeparate($[Le],$[Xe]),x=Le,S=Xe),(Ie!==M||je!==C||mt!==w||gt!==O)&&(n.blendFuncSeparate(ve[Ie],ve[je],ve[mt],ve[gt]),M=Ie,C=je,w=mt,O=gt),(Ht.equals(y)===!1||fn!==b)&&(n.blendColor(Ht.r,Ht.g,Ht.b,fn),y.copy(Ht),b=fn),_=F,N=!1}function Be(F,Le){F.side===ot?ge(n.CULL_FACE):he(n.CULL_FACE);let Ie=F.side===Qt;Le&&(Ie=!Ie),Ae(Ie),F.blending===Qs&&F.transparent===!1?oe(Ft):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);let je=F.stencilWrite;c.setTest(je),je&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),k(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){X!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),X=F)}function A(F){F!==zp?(he(n.CULL_FACE),F!==G&&(F===nh?n.cullFace(n.BACK):F===Bp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),G=F}function T(F){F!==D&&(re&&n.lineWidth(F),D=F)}function k(F,Le,Ie){F?(he(n.POLYGON_OFFSET_FILL),(z!==Le||Z!==Ie)&&(n.polygonOffset(Le,Ie),z=Le,Z=Ie)):ge(n.POLYGON_OFFSET_FILL)}function xe(F){F?he(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function U(F){F===void 0&&(F=n.TEXTURE0+de-1),me!==F&&(n.activeTexture(F),me=F)}function I(F,Le,Ie){Ie===void 0&&(me===null?Ie=n.TEXTURE0+de-1:Ie=me);let je=Se[Ie];je===void 0&&(je={type:void 0,texture:void 0},Se[Ie]=je),(je.type!==F||je.texture!==Le)&&(me!==Ie&&(n.activeTexture(Ie),me=Ie),n.bindTexture(F,Le||ze[F]),je.type=F,je.texture=Le)}function W(){let F=Se[me];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(F){be.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),be.copy(F))}function De(F){Ne.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ne.copy(F))}function $e(F,Le){let Ie=d.get(Le);Ie===void 0&&(Ie=new WeakMap,d.set(Le,Ie));let je=Ie.get(F);je===void 0&&(je=n.getUniformBlockIndex(Le,F.name),Ie.set(F,je))}function Ge(F,Le){let je=d.get(Le).get(F);u.get(Le)!==je&&(n.uniformBlockBinding(Le,je,F.__bindingPointIndex),u.set(Le,je))}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},me=null,Se={},h={},p=new WeakMap,v=[],g=null,m=!1,_=null,x=null,M=null,C=null,S=null,w=null,O=null,y=new Ve(0,0,0),b=0,N=!1,X=null,G=null,D=null,z=null,Z=null,be.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:he,disable:ge,bindFramebuffer:Ce,drawBuffers:L,useProgram:Me,setBlending:oe,setMaterial:Be,setFlipSided:Ae,setCullFace:A,setLineWidth:T,setPolygonOffset:k,setScissorTest:xe,activeTexture:U,bindTexture:I,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:ye,texImage2D:le,texImage3D:ie,updateUBOMapping:$e,uniformBlockBinding:Ge,texStorage2D:J,texStorage3D:q,texSubImage2D:Te,texSubImage3D:Re,compressedTexSubImage2D:ce,compressedTexSubImage3D:j,scissor:He,viewport:De,reset:Ee}}function w1(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,T){return h?new OffscreenCanvas(A,T):Zr("canvas")}function v(A,T,k,xe){let U=1;if((A.width>xe||A.height>xe)&&(U=xe/Math.max(A.width,A.height)),U<1||T===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let I=T?yo:Math.floor,W=I(U*A.width),ee=I(U*A.height);d===void 0&&(d=p(W,ee));let ye=k?p(W,ee):d;return ye.width=W,ye.height=ee,ye.getContext("2d").drawImage(A,0,0,W,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+W+"x"+ee+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return pc(A.width)&&pc(A.height)}function m(A){return o?!1:A.wrapS!==jn||A.wrapT!==jn||A.minFilter!==Dt&&A.minFilter!==Un}function _(A,T){return A.generateMipmaps&&T&&A.minFilter!==Dt&&A.minFilter!==Un}function x(A){n.generateMipmap(A)}function M(A,T,k,xe,U=!1){if(o===!1)return T;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let I=T;if(T===n.RED&&(k===n.FLOAT&&(I=n.R32F),k===n.HALF_FLOAT&&(I=n.R16F),k===n.UNSIGNED_BYTE&&(I=n.R8)),T===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(I=n.R8UI),k===n.UNSIGNED_SHORT&&(I=n.R16UI),k===n.UNSIGNED_INT&&(I=n.R32UI),k===n.BYTE&&(I=n.R8I),k===n.SHORT&&(I=n.R16I),k===n.INT&&(I=n.R32I)),T===n.RG&&(k===n.FLOAT&&(I=n.RG32F),k===n.HALF_FLOAT&&(I=n.RG16F),k===n.UNSIGNED_BYTE&&(I=n.RG8)),T===n.RGBA){let W=U?mo:lt.getTransfer(xe);k===n.FLOAT&&(I=n.RGBA32F),k===n.HALF_FLOAT&&(I=n.RGBA16F),k===n.UNSIGNED_BYTE&&(I=W===pt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function C(A,T,k){return _(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Un?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function S(A){return A===Dt||A===oh||A===Cl?n.NEAREST:n.LINEAR}function w(A){let T=A.target;T.removeEventListener("dispose",w),y(T),T.isVideoTexture&&u.delete(T)}function O(A){let T=A.target;T.removeEventListener("dispose",O),N(T)}function y(A){let T=i.get(A);if(T.__webglInit===void 0)return;let k=A.source,xe=f.get(k);if(xe){let U=xe[T.__cacheKey];U.usedTimes--,U.usedTimes===0&&b(A),Object.keys(xe).length===0&&f.delete(k)}i.remove(A)}function b(A){let T=i.get(A);n.deleteTexture(T.__webglTexture);let k=A.source,xe=f.get(k);delete xe[T.__cacheKey],a.memory.textures--}function N(A){let T=A.texture,k=i.get(A),xe=i.get(T);if(xe.__webglTexture!==void 0&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(k.__webglFramebuffer[U]))for(let I=0;I<k.__webglFramebuffer[U].length;I++)n.deleteFramebuffer(k.__webglFramebuffer[U][I]);else n.deleteFramebuffer(k.__webglFramebuffer[U]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[U])}else{if(Array.isArray(k.__webglFramebuffer))for(let U=0;U<k.__webglFramebuffer.length;U++)n.deleteFramebuffer(k.__webglFramebuffer[U]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let U=0;U<k.__webglColorRenderbuffer.length;U++)k.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[U]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let U=0,I=T.length;U<I;U++){let W=i.get(T[U]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(T[U])}i.remove(T),i.remove(A)}let X=0;function G(){X=0}function D(){let A=X;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function z(A){let T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function Z(A,T){let k=i.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let xe=A.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,A,T);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+T)}function de(A,T){let k=i.get(A);if(A.version>0&&k.__version!==A.version){be(k,A,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+T)}function re(A,T){let k=i.get(A);if(A.version>0&&k.__version!==A.version){be(k,A,T);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+T)}function te(A,T){let k=i.get(A);if(A.version>0&&k.__version!==A.version){Ne(k,A,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+T)}let pe={[Wt]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[ps]:n.MIRRORED_REPEAT},me={[Dt]:n.NEAREST,[oh]:n.NEAREST_MIPMAP_NEAREST,[Cl]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[lm]:n.LINEAR_MIPMAP_NEAREST,[Yr]:n.LINEAR_MIPMAP_LINEAR},Se={[ym]:n.NEVER,[Tm]:n.ALWAYS,[_m]:n.LESS,[jd]:n.LEQUAL,[Mm]:n.EQUAL,[Sm]:n.GEQUAL,[bm]:n.GREATER,[Em]:n.NOTEQUAL};function Q(A,T,k){if(k?(n.texParameteri(A,n.TEXTURE_WRAP_S,pe[T.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,pe[T.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,pe[T.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,me[T.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,me[T.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==jn||T.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,S(T.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,S(T.minFilter)),T.minFilter!==Dt&&T.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Dt||T.minFilter!==Cl&&T.minFilter!==Yr||T.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===yn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(A,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ue(A,T){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",w));let xe=T.source,U=f.get(xe);U===void 0&&(U={},f.set(xe,U));let I=z(T);if(I!==A.__cacheKey){U[I]===void 0&&(U[I]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),U[I].usedTimes++;let W=U[A.__cacheKey];W!==void 0&&(U[A.__cacheKey].usedTimes--,W.usedTimes===0&&b(T)),A.__cacheKey=I,A.__webglTexture=U[I].texture}return k}function be(A,T,k){let xe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=n.TEXTURE_3D);let U=ue(A,T),I=T.source;t.bindTexture(xe,A.__webglTexture,n.TEXTURE0+k);let W=i.get(I);if(I.version!==W.__version||U===!0){t.activeTexture(n.TEXTURE0+k);let ee=lt.getPrimaries(lt.workingColorSpace),ye=T.colorSpace===Fn?null:lt.getPrimaries(T.colorSpace),Te=T.colorSpace===Fn||ee===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Re=m(T)&&g(T.image)===!1,ce=v(T.image,Re,!1,s.maxTextureSize);ce=Ae(T,ce);let j=g(ce)||o,J=r.convert(T.format,T.colorSpace),q=r.convert(T.type),le=M(T.internalFormat,J,q,T.colorSpace,T.isVideoTexture);Q(xe,T,j);let ie,He=T.mipmaps,De=o&&T.isVideoTexture!==!0&&le!==qd,$e=W.__version===void 0||U===!0,Ge=C(T,ce,j);if(T.isDepthTexture)le=n.DEPTH_COMPONENT,o?T.type===Ui?le=n.DEPTH_COMPONENT32F:T.type===Di?le=n.DEPTH_COMPONENT24:T.type===_i?le=n.DEPTH24_STENCIL8:le=n.DEPTH_COMPONENT16:T.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ds&&le===n.DEPTH_COMPONENT&&T.type!==tu&&T.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Di,q=r.convert(T.type)),T.format===zi&&le===n.DEPTH_COMPONENT&&(le=n.DEPTH_STENCIL,T.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=_i,q=r.convert(T.type))),$e&&(De?t.texStorage2D(n.TEXTURE_2D,1,le,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,le,ce.width,ce.height,0,J,q,null));else if(T.isDataTexture)if(He.length>0&&j){De&&$e&&t.texStorage2D(n.TEXTURE_2D,Ge,le,He[0].width,He[0].height);for(let Ee=0,F=He.length;Ee<F;Ee++)ie=He[Ee],De?t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,ie.width,ie.height,J,q,ie.data):t.texImage2D(n.TEXTURE_2D,Ee,le,ie.width,ie.height,0,J,q,ie.data);T.generateMipmaps=!1}else De?($e&&t.texStorage2D(n.TEXTURE_2D,Ge,le,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,J,q,ce.data)):t.texImage2D(n.TEXTURE_2D,0,le,ce.width,ce.height,0,J,q,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,le,He[0].width,He[0].height,ce.depth);for(let Ee=0,F=He.length;Ee<F;Ee++)ie=He[Ee],T.format!==An?J!==null?De?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,ie.width,ie.height,ce.depth,J,ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,le,ie.width,ie.height,ce.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,ie.width,ie.height,ce.depth,J,q,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,le,ie.width,ie.height,ce.depth,0,J,q,ie.data)}else{De&&$e&&t.texStorage2D(n.TEXTURE_2D,Ge,le,He[0].width,He[0].height);for(let Ee=0,F=He.length;Ee<F;Ee++)ie=He[Ee],T.format!==An?J!==null?De?t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,ie.width,ie.height,J,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,le,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,ie.width,ie.height,J,q,ie.data):t.texImage2D(n.TEXTURE_2D,Ee,le,ie.width,ie.height,0,J,q,ie.data)}else if(T.isDataArrayTexture)De?($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,le,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,J,q,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,ce.width,ce.height,ce.depth,0,J,q,ce.data);else if(T.isData3DTexture)De?($e&&t.texStorage3D(n.TEXTURE_3D,Ge,le,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,J,q,ce.data)):t.texImage3D(n.TEXTURE_3D,0,le,ce.width,ce.height,ce.depth,0,J,q,ce.data);else if(T.isFramebufferTexture){if($e)if(De)t.texStorage2D(n.TEXTURE_2D,Ge,le,ce.width,ce.height);else{let Ee=ce.width,F=ce.height;for(let Le=0;Le<Ge;Le++)t.texImage2D(n.TEXTURE_2D,Le,le,Ee,F,0,J,q,null),Ee>>=1,F>>=1}}else if(He.length>0&&j){De&&$e&&t.texStorage2D(n.TEXTURE_2D,Ge,le,He[0].width,He[0].height);for(let Ee=0,F=He.length;Ee<F;Ee++)ie=He[Ee],De?t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,J,q,ie):t.texImage2D(n.TEXTURE_2D,Ee,le,J,q,ie);T.generateMipmaps=!1}else De?($e&&t.texStorage2D(n.TEXTURE_2D,Ge,le,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J,q,ce)):t.texImage2D(n.TEXTURE_2D,0,le,J,q,ce);_(T,j)&&x(xe),W.__version=I.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Ne(A,T,k){if(T.image.length!==6)return;let xe=ue(A,T),U=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let I=i.get(U);if(U.version!==I.__version||xe===!0){t.activeTexture(n.TEXTURE0+k);let W=lt.getPrimaries(lt.workingColorSpace),ee=T.colorSpace===Fn?null:lt.getPrimaries(T.colorSpace),ye=T.colorSpace===Fn||W===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Te=T.isCompressedTexture||T.image[0].isCompressedTexture,Re=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let Ee=0;Ee<6;Ee++)!Te&&!Re?ce[Ee]=v(T.image[Ee],!1,!0,s.maxCubemapSize):ce[Ee]=Re?T.image[Ee].image:T.image[Ee],ce[Ee]=Ae(T,ce[Ee]);let j=ce[0],J=g(j)||o,q=r.convert(T.format,T.colorSpace),le=r.convert(T.type),ie=M(T.internalFormat,q,le,T.colorSpace),He=o&&T.isVideoTexture!==!0,De=I.__version===void 0||xe===!0,$e=C(T,j,J);Q(n.TEXTURE_CUBE_MAP,T,J);let Ge;if(Te){He&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ie,j.width,j.height);for(let Ee=0;Ee<6;Ee++){Ge=ce[Ee].mipmaps;for(let F=0;F<Ge.length;F++){let Le=Ge[F];T.format!==An?q!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,0,0,Le.width,Le.height,q,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,ie,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,0,0,Le.width,Le.height,q,le,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,ie,Le.width,Le.height,0,q,le,Le.data)}}}else{Ge=T.mipmaps,He&&De&&(Ge.length>0&&$e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ie,ce[0].width,ce[0].height));for(let Ee=0;Ee<6;Ee++)if(Re){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ce[Ee].width,ce[Ee].height,q,le,ce[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ie,ce[Ee].width,ce[Ee].height,0,q,le,ce[Ee].data);for(let F=0;F<Ge.length;F++){let Ie=Ge[F].image[Ee].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,0,0,Ie.width,Ie.height,q,le,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,ie,Ie.width,Ie.height,0,q,le,Ie.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,q,le,ce[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ie,q,le,ce[Ee]);for(let F=0;F<Ge.length;F++){let Le=Ge[F];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,0,0,q,le,Le.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,ie,q,le,Le.image[Ee])}}}_(T,J)&&x(n.TEXTURE_CUBE_MAP),I.__version=U.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function we(A,T,k,xe,U,I){let W=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),ye=M(k.internalFormat,W,ee,k.colorSpace);if(!i.get(T).__hasExternalTextures){let Re=Math.max(1,T.width>>I),ce=Math.max(1,T.height>>I);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,I,ye,Re,ce,T.depth,0,W,ee,null):t.texImage2D(U,I,ye,Re,ce,0,W,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),oe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,U,i.get(k).__webglTexture,0,ve(T)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,U,i.get(k).__webglTexture,I),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,T,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let xe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||oe(T)){let U=T.depthTexture;U&&U.isDepthTexture&&(U.type===Ui?xe=n.DEPTH_COMPONENT32F:U.type===Di&&(xe=n.DEPTH_COMPONENT24));let I=ve(T);oe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,xe,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,I,xe,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,xe,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){let xe=ve(T);k&&oe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,n.DEPTH24_STENCIL8,T.width,T.height):oe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let xe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let U=0;U<xe.length;U++){let I=xe[U],W=r.convert(I.format,I.colorSpace),ee=r.convert(I.type),ye=M(I.internalFormat,W,ee,I.colorSpace),Te=ve(T);k&&oe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ye,T.width,T.height):oe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ye,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ye,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);let xe=i.get(T.depthTexture).__webglTexture,U=ve(T);if(T.depthTexture.format===ds)oe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,xe,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,xe,0);else if(T.depthTexture.format===zi)oe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,xe,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ge(A){let T=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,A)}else if(k){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]=n.createRenderbuffer(),ze(T.__webglDepthbuffer[xe],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),ze(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(A,T,k){let xe=i.get(A);T!==void 0&&we(xe.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ge(A)}function L(A){let T=A.texture,k=i.get(A),xe=i.get(T);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=T.version,a.memory.textures++);let U=A.isWebGLCubeRenderTarget===!0,I=A.isWebGLMultipleRenderTargets===!0,W=g(A)||o;if(U){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(o&&T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let ye=0;ye<T.mipmaps.length;ye++)k.__webglFramebuffer[ee][ye]=n.createFramebuffer()}else k.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<T.mipmaps.length;ee++)k.__webglFramebuffer[ee]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(I)if(s.drawBuffers){let ee=A.texture;for(let ye=0,Te=ee.length;ye<Te;ye++){let Re=i.get(ee[ye]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&oe(A)===!1){let ee=I?T:[T];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<ee.length;ye++){let Te=ee[ye];k.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);let Re=r.convert(Te.format,Te.colorSpace),ce=r.convert(Te.type),j=M(Te.internalFormat,Re,ce,Te.colorSpace,A.isXRRenderTarget===!0),J=ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,j,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),Q(n.TEXTURE_CUBE_MAP,T,W);for(let ee=0;ee<6;ee++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)we(k.__webglFramebuffer[ee][ye],A,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye);else we(k.__webglFramebuffer[ee],A,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);_(T,W)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){let ee=A.texture;for(let ye=0,Te=ee.length;ye<Te;ye++){let Re=ee[ye],ce=i.get(Re);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Q(n.TEXTURE_2D,Re,W),we(k.__webglFramebuffer,A,Re,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),_(Re,W)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ee=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,xe.__webglTexture),Q(ee,T,W),o&&T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)we(k.__webglFramebuffer[ye],A,T,n.COLOR_ATTACHMENT0,ee,ye);else we(k.__webglFramebuffer,A,T,n.COLOR_ATTACHMENT0,ee,0);_(T,W)&&x(ee),t.unbindTexture()}A.depthBuffer&&ge(A)}function Me(A){let T=g(A)||o,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0,U=k.length;xe<U;xe++){let I=k[xe];if(_(I,T)){let W=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ee=i.get(I).__webglTexture;t.bindTexture(W,ee),x(W),t.unbindTexture()}}}function $(A){if(o&&A.samples>0&&oe(A)===!1){let T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,xe=A.height,U=n.COLOR_BUFFER_BIT,I=[],W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=i.get(A),ye=A.isWebGLMultipleRenderTargets===!0;if(ye)for(let Te=0;Te<T.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Te=0;Te<T.length;Te++){I.push(n.COLOR_ATTACHMENT0+Te),A.depthBuffer&&I.push(W);let Re=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(Re===!1&&(A.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),ye&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]),Re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[W]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[W])),ye){let ce=i.get(T[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,k,xe,0,0,k,xe,U,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<T.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);let Re=i.get(T[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function ve(A){return Math.min(s.maxSamples,A.samples)}function oe(A){let T=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(A){let T=a.render.frame;u.get(A)!==T&&(u.set(A,T),A.update())}function Ae(A,T){let k=A.colorSpace,xe=A.format,U=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===fc||k!==Mi&&k!==Fn&&(lt.getTransfer(k)===pt?o===!1?e.has("EXT_sRGB")===!0&&xe===An?(A.format=fc,A.minFilter=Un,A.generateMipmaps=!1):T=_o.sRGBToLinear(T):(xe!==An||U!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}this.allocateTextureUnit=D,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=de,this.setTexture3D=re,this.setTextureCube=te,this.rebindTextures=Ce,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=we,this.useMultisampledRTT=oe}function A1(n,e,t){let i=t.isWebGL2;function s(r,a=Fn){let o,l=lt.getTransfer(a);if(r===ni)return n.UNSIGNED_BYTE;if(r===kd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Hd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===cm)return n.BYTE;if(r===um)return n.SHORT;if(r===tu)return n.UNSIGNED_SHORT;if(r===Bd)return n.INT;if(r===Di)return n.UNSIGNED_INT;if(r===Ui)return n.FLOAT;if(r===yn)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===hm)return n.ALPHA;if(r===An)return n.RGBA;if(r===dm)return n.LUMINANCE;if(r===fm)return n.LUMINANCE_ALPHA;if(r===ds)return n.DEPTH_COMPONENT;if(r===zi)return n.DEPTH_STENCIL;if(r===fc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===pm)return n.RED;if(r===Gd)return n.RED_INTEGER;if(r===mm)return n.RG;if(r===Vd)return n.RG_INTEGER;if(r===Wd)return n.RGBA_INTEGER;if(r===Pl||r===Ll||r===Il||r===Dl)if(l===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===ch||r===uh||r===hh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dh||r===fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dh)return l===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===fh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ph||r===mh||r===gh||r===vh||r===xh||r===yh||r===_h||r===Mh||r===bh||r===Eh||r===Sh||r===Th||r===wh||r===Ah)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ph)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===Rh||r===Ch)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ul)return l===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gm||r===Ph||r===Lh||r===Ih)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ul)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_i?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var wc=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ue=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},R1={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ac=class extends Bi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,v=t.getContextAttributes(),g=null,m=null,_=[],x=[],M=new fe,C=null,S=new cn;S.layers.enable(1),S.viewport=new Mt;let w=new cn;w.layers.enable(2),w.viewport=new Mt;let O=[S,w],y=new wc;y.layers.enable(1),y.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=_[Q];return ue===void 0&&(ue=new qr,_[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=_[Q];return ue===void 0&&(ue=new qr,_[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=_[Q];return ue===void 0&&(ue=new qr,_[Q]=ue),ue.getHandSpace()};function X(Q){let ue=x.indexOf(Q.inputSource);if(ue===-1)return;let be=_[ue];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||a),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",D);for(let Q=0;Q<_.length;Q++){let ue=x[Q];ue!==null&&(x[Q]=null,_[Q].disconnect(ue))}b=null,N=null,e.setRenderTarget(g),h=null,f=null,d=null,s=null,m=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),m=new qt(h.framebufferWidth,h.framebufferHeight,{format:An,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,be=null,Ne=null;v.depth&&(Ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?zi:ds,be=v.stencil?_i:Di);let we={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new qt(f.textureWidth,f.textureHeight,{format:An,type:ni,depthTexture:new or(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ze=e.properties.get(m);ze.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(Q){for(let ue=0;ue<Q.removed.length;ue++){let be=Q.removed[ue],Ne=x.indexOf(be);Ne>=0&&(x[Ne]=null,_[Ne].disconnect(be))}for(let ue=0;ue<Q.added.length;ue++){let be=Q.added[ue],Ne=x.indexOf(be);if(Ne===-1){for(let ze=0;ze<_.length;ze++)if(ze>=x.length){x.push(be),Ne=ze;break}else if(x[ze]===null){x[ze]=be,Ne=ze;break}if(Ne===-1)break}let we=_[Ne];we&&we.connect(be)}}let z=new P,Z=new P;function de(Q,ue,be){z.setFromMatrixPosition(ue.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);let Ne=z.distanceTo(Z),we=ue.projectionMatrix.elements,ze=be.projectionMatrix.elements,he=we[14]/(we[10]-1),ge=we[14]/(we[10]+1),Ce=(we[9]+1)/we[5],L=(we[9]-1)/we[5],Me=(we[8]-1)/we[0],$=(ze[8]+1)/ze[0],ve=he*Me,oe=he*$,Be=Ne/(-Me+$),Ae=Be*-Me;ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ae),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let A=he+Be,T=ge+Be,k=ve-Ae,xe=oe+(Ne-Ae),U=Ce*ge/T*A,I=L*ge/T*A;Q.projectionMatrix.makePerspective(k,xe,U,I,A,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function re(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;y.near=w.near=S.near=Q.near,y.far=w.far=S.far=Q.far,(b!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,N=y.far);let ue=Q.parent,be=y.cameras;re(y,ue);for(let Ne=0;Ne<be.length;Ne++)re(be[Ne],ue);be.length===2?de(y,S,w):y.projectionMatrix.copy(S.projectionMatrix),te(Q,y,ue)};function te(Q,ue,be){be===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$r*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)};let pe=null;function me(Q,ue){if(u=ue.getViewerPose(c||a),p=ue,u!==null){let be=u.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let Ne=!1;be.length!==y.cameras.length&&(y.cameras.length=0,Ne=!0);for(let we=0;we<be.length;we++){let ze=be[we],he=null;if(h!==null)he=h.getViewport(ze);else{let Ce=d.getViewSubImage(f,ze);he=Ce.viewport,we===0&&(e.setRenderTargetTextures(m,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(m))}let ge=O[we];ge===void 0&&(ge=new cn,ge.layers.enable(we),ge.viewport=new Mt,O[we]=ge),ge.matrix.fromArray(ze.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ze.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(he.x,he.y,he.width,he.height),we===0&&(y.matrix.copy(ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ne===!0&&y.cameras.push(ge)}}for(let be=0;be<_.length;be++){let Ne=x[be],we=_[be];Ne!==null&&we!==void 0&&we.update(Ne,ue,c||a)}pe&&pe(Q,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),p=null}let Se=new Kd;Se.setAnimationLoop(me),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}};function C1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Zd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P1(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){let M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=s[_.id];M===void 0&&(p(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",g));let C=x.program;i.updateUBOMapping(_,C);let S=e.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function u(_){let x=d();_.__bindingPointIndex=x;let M=n.createBuffer(),C=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=s[_.id],M=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,w=M.length;S<w;S++){let O=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,b=O.length;y<b;y++){let N=O[y];if(h(N,S,y,C)===!0){let X=N.__offset,G=Array.isArray(N.value)?N.value:[N.value],D=0;for(let z=0;z<G.length;z++){let Z=G[z],de=v(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,X+D,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,D),D+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,x,M,C){let S=_.value,w=x+"_"+M;if(C[w]===void 0)return typeof S=="number"||typeof S=="boolean"?C[w]=S:C[w]=S.clone(),!0;{let O=C[w];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return C[w]=S,!0}else if(O.equals(S)===!1)return O.copy(S),!0}return!1}function p(_){let x=_.uniforms,M=0,C=16;for(let w=0,O=x.length;w<O;w++){let y=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,N=y.length;b<N;b++){let X=y[b],G=Array.isArray(X.value)?X.value:[X.value];for(let D=0,z=G.length;D<z;D++){let Z=G[D],de=v(Z),re=M%C;re!==0&&C-re<de.boundary&&(M+=C-re),X.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=de.storage}}}let S=M%C;return S>0&&(M+=C-S),_.__size=M,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ms=class{constructor(e={}){let{canvas:t=km(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let h=new Uint32Array(4),p=new Int32Array(4),v=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let x=this,M=!1,C=0,S=0,w=null,O=-1,y=null,b=new Mt,N=new Mt,X=null,G=new Ve(0),D=0,z=t.width,Z=t.height,de=1,re=null,te=null,pe=new Mt(0,0,z,Z),me=new Mt(0,0,z,Z),Se=!1,Q=new Kr,ue=!1,be=!1,Ne=null,we=new nt,ze=new fe,he=new P,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return w===null?de:1}let L=i;function Me(R,Y){for(let se=0;se<R.length;se++){let ae=R[se],ne=t.getContext(ae,Y);if(ne!==null)return ne}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Le,!1),L===null){let Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),L=Me(Y,R),L===null)throw Me(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $,ve,oe,Be,Ae,A,T,k,xe,U,I,W,ee,ye,Te,Re,ce,j,J,q,le,ie,He,De;function $e(){$=new $v(L),ve=new Vv(L,$,e),$.init(ve),ie=new A1(L,$,ve),oe=new T1(L,$,ve),Be=new Jv(L),Ae=new f1,A=new w1(L,$,oe,Ae,ve,ie,Be),T=new qv(x),k=new Yv(x),xe=new a0(L,ve),He=new Hv(L,$,xe,ve),U=new Zv(L,xe,Be,He),I=new nx(L,U,xe,Be),J=new tx(L,ve,A),Re=new Wv(Ae),W=new d1(x,T,k,$,ve,He,Re),ee=new C1(x,Ae),ye=new m1,Te=new M1($,ve),j=new kv(x,T,k,oe,I,f,l),ce=new S1(x,I,ve),De=new P1(L,Be,ve,oe),q=new Gv(L,$,Be,ve),le=new Kv(L,$,Be,ve),Be.programs=W.programs,x.capabilities=ve,x.extensions=$,x.properties=Ae,x.renderLists=ye,x.shadowMap=ce,x.state=oe,x.info=Be}$e();let Ge=new Ac(x,L);this.xr=Ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=$.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=$.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(R){R!==void 0&&(de=R,this.setSize(z,Z,!1))},this.getSize=function(R){return R.set(z,Z)},this.setSize=function(R,Y,se=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Z=Y,t.width=Math.floor(R*de),t.height=Math.floor(Y*de),se===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*de,Z*de).floor()},this.setDrawingBufferSize=function(R,Y,se){z=R,Z=Y,de=se,t.width=Math.floor(R*se),t.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,Y,se,ae){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,Y,se,ae),oe.viewport(b.copy(pe).multiplyScalar(de).floor())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,Y,se,ae){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,Y,se,ae),oe.scissor(N.copy(me).multiplyScalar(de).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){oe.setScissorTest(Se=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(R=!0,Y=!0,se=!0){let ae=0;if(R){let ne=!1;if(w!==null){let ke=w.texture.format;ne=ke===Wd||ke===Vd||ke===Gd}if(ne){let ke=w.texture.type,We=ke===ni||ke===Di||ke===tu||ke===_i||ke===kd||ke===Hd,Ye=j.getClearColor(),Ke=j.getClearAlpha(),tt=Ye.r,Je=Ye.g,Qe=Ye.b;We?(h[0]=tt,h[1]=Je,h[2]=Qe,h[3]=Ke,L.clearBufferuiv(L.COLOR,0,h)):(p[0]=tt,p[1]=Je,p[2]=Qe,p[3]=Ke,L.clearBufferiv(L.COLOR,0,p))}else ae|=L.COLOR_BUFFER_BIT}Y&&(ae|=L.DEPTH_BUFFER_BIT),se&&(ae|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ye.dispose(),Te.dispose(),Ae.dispose(),T.dispose(),k.dispose(),I.dispose(),He.dispose(),De.dispose(),W.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",fn),Ge.removeEventListener("sessionend",vt),Ne&&(Ne.dispose(),Ne=null),pn.stop()};function Ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=Be.autoReset,Y=ce.enabled,se=ce.autoUpdate,ae=ce.needsUpdate,ne=ce.type;$e(),Be.autoReset=R,ce.enabled=Y,ce.autoUpdate=se,ce.needsUpdate=ae,ce.type=ne}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){let Y=R.target;Y.removeEventListener("dispose",Ie),je(Y)}function je(R){Xe(R),Ae.remove(R)}function Xe(R){let Y=Ae.get(R).programs;Y!==void 0&&(Y.forEach(function(se){W.releaseProgram(se)}),R.isShaderMaterial&&W.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,ae,ne,ke){Y===null&&(Y=ge);let We=ne.isMesh&&ne.matrixWorld.determinant()<0,Ye=Up(R,Y,se,ae,ne);oe.setMaterial(ae,We);let Ke=se.index,tt=1;if(ae.wireframe===!0){if(Ke=U.getWireframeAttribute(se),Ke===void 0)return;tt=2}let Je=se.drawRange,Qe=se.attributes.position,Rt=Je.start*tt,Sn=(Je.start+Je.count)*tt;ke!==null&&(Rt=Math.max(Rt,ke.start*tt),Sn=Math.min(Sn,(ke.start+ke.count)*tt)),Ke!==null?(Rt=Math.max(Rt,0),Sn=Math.min(Sn,Ke.count)):Qe!=null&&(Rt=Math.max(Rt,0),Sn=Math.min(Sn,Qe.count));let Gt=Sn-Rt;if(Gt<0||Gt===1/0)return;He.setup(ne,ae,Ye,se,Ke);let hi,Et=q;if(Ke!==null&&(hi=xe.get(Ke),Et=le,Et.setIndex(hi)),ne.isMesh)ae.wireframe===!0?(oe.setLineWidth(ae.wireframeLinewidth*Ce()),Et.setMode(L.LINES)):Et.setMode(L.TRIANGLES);else if(ne.isLine){let it=ae.linewidth;it===void 0&&(it=1),oe.setLineWidth(it*Ce()),ne.isLineSegments?Et.setMode(L.LINES):ne.isLineLoop?Et.setMode(L.LINE_LOOP):Et.setMode(L.LINE_STRIP)}else ne.isPoints?Et.setMode(L.POINTS):ne.isSprite&&Et.setMode(L.TRIANGLES);if(ne.isBatchedMesh)Et.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)Et.renderInstances(Rt,Gt,ne.count);else if(se.isInstancedBufferGeometry){let it=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Tl=Math.min(se.instanceCount,it);Et.renderInstances(Rt,Gt,Tl)}else Et.render(Rt,Gt)};function mt(R,Y,se){R.transparent===!0&&R.side===ot&&R.forceSinglePass===!1?(R.side=Qt,R.needsUpdate=!0,Na(R,Y,se),R.side=Oi,R.needsUpdate=!0,Na(R,Y,se),R.side=ot):Na(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),g=Te.get(se),g.init(),_.push(g),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),R!==se&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),g.setupLights(x._useLegacyLights);let ae=new Set;return R.traverse(function(ne){let ke=ne.material;if(ke)if(Array.isArray(ke))for(let We=0;We<ke.length;We++){let Ye=ke[We];mt(Ye,se,ne),ae.add(Ye)}else mt(ke,se,ne),ae.add(ke)}),_.pop(),g=null,ae},this.compileAsync=function(R,Y,se=null){let ae=this.compile(R,Y,se);return new Promise(ne=>{function ke(){if(ae.forEach(function(We){Ae.get(We).currentProgram.isReady()&&ae.delete(We)}),ae.size===0){ne(R);return}setTimeout(ke,10)}$.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let gt=null;function Ht(R){gt&&gt(R)}function fn(){pn.stop()}function vt(){pn.start()}let pn=new Kd;pn.setAnimationLoop(Ht),typeof self!="undefined"&&pn.setContext(self),this.setAnimationLoop=function(R){gt=R,Ge.setAnimationLoop(R),R===null?pn.stop():pn.start()},Ge.addEventListener("sessionstart",fn),Ge.addEventListener("sessionend",vt),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Y),Y=Ge.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,Y,w),g=Te.get(R,_.length),g.init(),_.push(g),we.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(we),be=this.localClippingEnabled,ue=Re.init(this.clippingPlanes,be),v=ye.get(R,m.length),v.init(),m.push(v),ei(R,Y,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(re,te),this.info.render.frame++,ue===!0&&Re.beginShadows();let se=g.state.shadowsArray;if(ce.render(se,R,Y),ue===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(v,R),g.setupLights(x._useLegacyLights),Y.isArrayCamera){let ae=Y.cameras;for(let ne=0,ke=ae.length;ne<ke;ne++){let We=ae[ne];Zu(v,R,We,We.viewport)}}else Zu(v,R,Y);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(x,R,Y),He.resetDefaultState(),O=-1,y=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ei(R,Y,se,ae){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ae&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);let We=I.update(R),Ye=R.material;Ye.visible&&v.push(R,We,Ye,se,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){let We=I.update(R),Ye=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),he.copy(We.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Ye)){let Ke=We.groups;for(let tt=0,Je=Ke.length;tt<Je;tt++){let Qe=Ke[tt],Rt=Ye[Qe.materialIndex];Rt&&Rt.visible&&v.push(R,We,Rt,se,he.z,Qe)}}else Ye.visible&&v.push(R,We,Ye,se,he.z,null)}}let ke=R.children;for(let We=0,Ye=ke.length;We<Ye;We++)ei(ke[We],Y,se,ae)}function Zu(R,Y,se,ae){let ne=R.opaque,ke=R.transmissive,We=R.transparent;g.setupLightsView(se),ue===!0&&Re.setGlobalState(x.clippingPlanes,se),ke.length>0&&Dp(ne,ke,Y,se),ae&&oe.viewport(b.copy(ae)),ne.length>0&&Ua(ne,Y,se),ke.length>0&&Ua(ke,Y,se),We.length>0&&Ua(We,Y,se),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Dp(R,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;let ke=ve.isWebGL2;Ne===null&&(Ne=new qt(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?yn:ni,minFilter:Yr,samples:ke?4:0})),x.getDrawingBufferSize(ze),ke?Ne.setSize(ze.x,ze.y):Ne.setSize(yo(ze.x),yo(ze.y));let We=x.getRenderTarget();x.setRenderTarget(Ne),x.getClearColor(G),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let Ye=x.toneMapping;x.toneMapping=Ni,Ua(R,se,ae),A.updateMultisampleRenderTarget(Ne),A.updateRenderTargetMipmap(Ne);let Ke=!1;for(let tt=0,Je=Y.length;tt<Je;tt++){let Qe=Y[tt],Rt=Qe.object,Sn=Qe.geometry,Gt=Qe.material,hi=Qe.group;if(Gt.side===ot&&Rt.layers.test(ae.layers)){let Et=Gt.side;Gt.side=Qt,Gt.needsUpdate=!0,Ku(Rt,se,ae,Sn,Gt,hi),Gt.side=Et,Gt.needsUpdate=!0,Ke=!0}}Ke===!0&&(A.updateMultisampleRenderTarget(Ne),A.updateRenderTargetMipmap(Ne)),x.setRenderTarget(We),x.setClearColor(G,D),x.toneMapping=Ye}function Ua(R,Y,se){let ae=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,ke=R.length;ne<ke;ne++){let We=R[ne],Ye=We.object,Ke=We.geometry,tt=ae===null?We.material:ae,Je=We.group;Ye.layers.test(se.layers)&&Ku(Ye,Y,se,Ke,tt,Je)}}function Ku(R,Y,se,ae,ne,ke){R.onBeforeRender(x,Y,se,ae,ne,ke),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(x,Y,se,ae,R,ke),ne.transparent===!0&&ne.side===ot&&ne.forceSinglePass===!1?(ne.side=Qt,ne.needsUpdate=!0,x.renderBufferDirect(se,Y,ae,ne,R,ke),ne.side=Oi,ne.needsUpdate=!0,x.renderBufferDirect(se,Y,ae,ne,R,ke),ne.side=ot):x.renderBufferDirect(se,Y,ae,ne,R,ke),R.onAfterRender(x,Y,se,ae,ne,ke)}function Na(R,Y,se){Y.isScene!==!0&&(Y=ge);let ae=Ae.get(R),ne=g.state.lights,ke=g.state.shadowsArray,We=ne.state.version,Ye=W.getParameters(R,ne.state,ke,Y,se),Ke=W.getProgramCacheKey(Ye),tt=ae.programs;ae.environment=R.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(R.isMeshStandardMaterial?k:T).get(R.envMap||ae.environment),tt===void 0&&(R.addEventListener("dispose",Ie),tt=new Map,ae.programs=tt);let Je=tt.get(Ke);if(Je!==void 0){if(ae.currentProgram===Je&&ae.lightsStateVersion===We)return Qu(R,Ye),Je}else Ye.uniforms=W.getUniforms(R),R.onBuild(se,Ye,x),R.onBeforeCompile(Ye,x),Je=W.acquireProgram(Ye,Ke),tt.set(Ke,Je),ae.uniforms=Ye.uniforms;let Qe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Re.uniform),Qu(R,Ye),ae.needsLights=Fp(R),ae.lightsStateVersion=We,ae.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMap.value=ne.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotShadowMap.value=ne.state.spotShadowMap,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMap.value=ne.state.pointShadowMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.currentProgram=Je,ae.uniformsList=null,Je}function Ju(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=tr.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Qu(R,Y){let se=Ae.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Up(R,Y,se,ae,ne){Y.isScene!==!0&&(Y=ge),A.resetTextureUnits();let ke=Y.fog,We=ae.isMeshStandardMaterial?Y.environment:null,Ye=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mi,Ke=(ae.isMeshStandardMaterial?k:T).get(ae.envMap||We),tt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Je=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!se.morphAttributes.position,Rt=!!se.morphAttributes.normal,Sn=!!se.morphAttributes.color,Gt=Ni;ae.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let hi=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Et=hi!==void 0?hi.length:0,it=Ae.get(ae),Tl=g.state.lights;if(ue===!0&&(be===!0||R!==y)){let In=R===y&&ae.id===O;Re.setState(ae,R,In)}let wt=!1;ae.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Tl.state.version||it.outputColorSpace!==Ye||ne.isBatchedMesh&&it.batching===!1||!ne.isBatchedMesh&&it.batching===!0||ne.isInstancedMesh&&it.instancing===!1||!ne.isInstancedMesh&&it.instancing===!0||ne.isSkinnedMesh&&it.skinning===!1||!ne.isSkinnedMesh&&it.skinning===!0||ne.isInstancedMesh&&it.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&it.instancingColor===!1&&ne.instanceColor!==null||it.envMap!==Ke||ae.fog===!0&&it.fog!==ke||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Re.numPlanes||it.numIntersection!==Re.numIntersection)||it.vertexAlphas!==tt||it.vertexTangents!==Je||it.morphTargets!==Qe||it.morphNormals!==Rt||it.morphColors!==Sn||it.toneMapping!==Gt||ve.isWebGL2===!0&&it.morphTargetsCount!==Et)&&(wt=!0):(wt=!0,it.__version=ae.version);let ss=it.currentProgram;wt===!0&&(ss=Na(ae,Y,ne));let eh=!1,Ur=!1,wl=!1,an=ss.getUniforms(),rs=it.uniforms;if(oe.useProgram(ss.program)&&(eh=!0,Ur=!0,wl=!0),ae.id!==O&&(O=ae.id,Ur=!0),eh||y!==R){an.setValue(L,"projectionMatrix",R.projectionMatrix),an.setValue(L,"viewMatrix",R.matrixWorldInverse);let In=an.map.cameraPosition;In!==void 0&&In.setValue(L,he.setFromMatrixPosition(R.matrixWorld)),ve.logarithmicDepthBuffer&&an.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&an.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ur=!0,wl=!0)}if(ne.isSkinnedMesh){an.setOptional(L,ne,"bindMatrix"),an.setOptional(L,ne,"bindMatrixInverse");let In=ne.skeleton;In&&(ve.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),an.setValue(L,"boneTexture",In.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(an.setOptional(L,ne,"batchingTexture"),an.setValue(L,"batchingTexture",ne._matricesTexture,A));let Al=se.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&ve.isWebGL2===!0)&&J.update(ne,se,ss),(Ur||it.receiveShadow!==ne.receiveShadow)&&(it.receiveShadow=ne.receiveShadow,an.setValue(L,"receiveShadow",ne.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(rs.envMap.value=Ke,rs.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Ur&&(an.setValue(L,"toneMappingExposure",x.toneMappingExposure),it.needsLights&&Np(rs,wl),ke&&ae.fog===!0&&ee.refreshFogUniforms(rs,ke),ee.refreshMaterialUniforms(rs,ae,de,Z,Ne),tr.upload(L,Ju(it),rs,A)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(tr.upload(L,Ju(it),rs,A),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&an.setValue(L,"center",ne.center),an.setValue(L,"modelViewMatrix",ne.modelViewMatrix),an.setValue(L,"normalMatrix",ne.normalMatrix),an.setValue(L,"modelMatrix",ne.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let In=ae.uniformsGroups;for(let Rl=0,Op=In.length;Rl<Op;Rl++)if(ve.isWebGL2){let th=In[Rl];De.update(th,ss),De.bind(th,ss)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ss}function Np(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Fp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,Y,se){Ae.get(R.texture).__webglTexture=Y,Ae.get(R.depthTexture).__webglTexture=se;let ae=Ae.get(R);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Y){let se=Ae.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,se=0){w=R,C=Y,S=se;let ae=!0,ne=null,ke=!1,We=!1;if(R){let Ke=Ae.get(R);Ke.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(L.FRAMEBUFFER,null),ae=!1):Ke.__webglFramebuffer===void 0?A.setupRenderTarget(R):Ke.__hasExternalTextures&&A.rebindTextures(R,Ae.get(R.texture).__webglTexture,Ae.get(R.depthTexture).__webglTexture);let tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(We=!0);let Je=Ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?ne=Je[Y][se]:ne=Je[Y],ke=!0):ve.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?ne=Ae.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[se]:ne=Je,b.copy(R.viewport),N.copy(R.scissor),X=R.scissorTest}else b.copy(pe).multiplyScalar(de).floor(),N.copy(me).multiplyScalar(de).floor(),X=Se;if(oe.bindFramebuffer(L.FRAMEBUFFER,ne)&&ve.drawBuffers&&ae&&oe.drawBuffers(R,ne),oe.viewport(b),oe.scissor(N),oe.setScissorTest(X),ke){let Ke=Ae.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ke.__webglTexture,se)}else if(We){let Ke=Ae.get(R.texture),tt=Y||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ke.__webglTexture,se||0,tt)}O=-1},this.readRenderTargetPixels=function(R,Y,se,ae,ne,ke,We){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){oe.bindFramebuffer(L.FRAMEBUFFER,Ye);try{let Ke=R.texture,tt=Ke.format,Je=Ke.type;if(tt!==An&&ie.convert(tt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Je===yn&&($.has("EXT_color_buffer_half_float")||ve.isWebGL2&&$.has("EXT_color_buffer_float"));if(Je!==ni&&ie.convert(Je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Ui&&(ve.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ae&&se>=0&&se<=R.height-ne&&L.readPixels(Y,se,ae,ne,ie.convert(tt),ie.convert(Je),ke)}finally{let Ke=w!==null?Ae.get(w).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(R,Y,se=0){let ae=Math.pow(2,-se),ne=Math.floor(Y.image.width*ae),ke=Math.floor(Y.image.height*ae);A.setTexture2D(Y,0),L.copyTexSubImage2D(L.TEXTURE_2D,se,0,0,R.x,R.y,ne,ke),oe.unbindTexture()},this.copyTextureToTexture=function(R,Y,se,ae=0){let ne=Y.image.width,ke=Y.image.height,We=ie.convert(se.format),Ye=ie.convert(se.type);A.setTexture2D(se,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,se.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,se.unpackAlignment),Y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ae,R.x,R.y,ne,ke,We,Ye,Y.image.data):Y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ae,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,We,Y.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,ae,R.x,R.y,We,Ye,Y.image),ae===0&&se.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,se,ae,ne=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ke=R.max.x-R.min.x+1,We=R.max.y-R.min.y+1,Ye=R.max.z-R.min.z+1,Ke=ie.convert(ae.format),tt=ie.convert(ae.type),Je;if(ae.isData3DTexture)A.setTexture3D(ae,0),Je=L.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)A.setTexture2DArray(ae,0),Je=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ae.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ae.unpackAlignment);let Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Gt=L.getParameter(L.UNPACK_SKIP_ROWS),hi=L.getParameter(L.UNPACK_SKIP_IMAGES),Et=se.isCompressedTexture?se.mipmaps[ne]:se.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,R.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,R.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,R.min.z),se.isDataTexture||se.isData3DTexture?L.texSubImage3D(Je,ne,Y.x,Y.y,Y.z,ke,We,Ye,Ke,tt,Et.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Je,ne,Y.x,Y.y,Y.z,ke,We,Ye,Ke,Et.data)):L.texSubImage3D(Je,ne,Y.x,Y.y,Y.z,ke,We,Ye,Ke,tt,Et),L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hi),ne===0&&ae.generateMipmaps&&L.generateMipmap(Je),oe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),oe.unbindTexture()},this.resetState=function(){C=0,S=0,w=null,oe.reset(),He.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===su?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?fs:Xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?at:Mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Rc=class extends ms{};Rc.prototype.isWebGL1Renderer=!0;var Co=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Gi=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var lr=class extends _n{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Dt,u=Dt,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new nt,Ed=new nt,so=[],Sd=new bi,L1=new nt,Br=new K,kr=new ki,$n=class extends K{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,L1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Sd.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Sd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),kr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(i),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Ed.multiplyMatrices(i,js),Br.matrixWorld=Ed,Br.raycast(e,so);for(let a=0,o=so.length;a<o;a++){let l=so[a];l.instanceId=r,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var cr=class extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Td=new nt,Cc=new Eo,ro=new ki,ao=new P,ea=class extends Xt{constructor(e=new xt,t=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;Td.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(Td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=f,v=h;p<v;p++){let g=c.getX(p);ao.fromBufferAttribute(d,g),wd(ao,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let p=f,v=h;p<v;p++)ao.fromBufferAttribute(d,p),wd(ao,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wd(n,e,t,i,s,r,a){let o=Cc.distanceSqToPoint(n);if(o<t){let l=new P;Cc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var jt=class extends _n{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(a-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new fe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],a=[],o=new P,l=new nt;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Nt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,p))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Nt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ta=class extends On{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pc=class extends ta{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,s(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var oo=new P,sc=new lu,rc=new lu,ac=new lu,gs=class extends On{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(oo.subVectors(s[0],s[1]).add(s[0]),c=oo);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),sc.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,v,g),rc.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,v,g),ac.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),rc.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),ac.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(sc.calc(l),rc.calc(l),ac.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ad(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function I1(n,e){let t=1-n;return t*t*e}function D1(n,e){return 2*(1-n)*n*e}function U1(n,e){return n*n*e}function Xr(n,e,t,i){return I1(n,e)+D1(n,t)+U1(n,i)}function N1(n,e){let t=1-n;return t*t*t*e}function F1(n,e){let t=1-n;return 3*t*t*n*e}function O1(n,e){return 3*(1-n)*n*n*e}function z1(n,e){return n*n*n*e}function jr(n,e,t,i,s){return N1(n,e)+F1(n,t)+O1(n,i)+z1(n,s)}var Po=class extends On{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends On{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y),jr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends On{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends On{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends On{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Xr(e,s.x,r.x,a.x),Xr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends On{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Xr(e,s.x,r.x,a.x),Xr(e,s.y,r.y,a.y),Xr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ad(o,l.x,c.x,u.x,d.x),Ad(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},No=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:gs,CubicBezierCurve:Po,CubicBezierCurve3:Lc,EllipseCurve:ta,LineCurve:Lo,LineCurve3:Ic,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Do,SplineCurve:Uo}),Dc=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new No[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new No[s.type]().fromJSON(s))}return this}},na=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Lo(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Io(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Po(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Uo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ta(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ia=class n extends xt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Nt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new P,f=new fe,h=new P,p=new P,v=new P,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,h.x=m*1,h.y=-g,h.z=m*0,v.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),l.push(h.x,h.y,h.z),v.copy(p)}for(let _=0;_<=t;_++){let x=i+_*u*s,M=Math.sin(x),C=Math.cos(x);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*M,d.y=e[S].y,d.z=e[S].x*C,a.push(d.x,d.y,d.z),f.x=_/t,f.y=S/(e.length-1),o.push(f.x,f.y);let w=l[3*S+0]*M,O=l[3*S+1],y=l[3*S+0]*C;c.push(w,O,y)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let M=x+_*e.length,C=M,S=M+e.length,w=M+e.length+1,O=M+1;r.push(C,S,O),r.push(w,O,S)}this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Fo=class n extends ia{constructor(e=1,t=1,i=4,s=8){let r=new na;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}};var tn=class n extends xt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,v=[],g=i/2,m=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(h,2));function _(){let M=new P,C=new P,S=0,w=(t-e)/i;for(let O=0;O<=r;O++){let y=[],b=O/r,N=b*(t-e)+e;for(let X=0;X<=s;X++){let G=X/s,D=G*l+o,z=Math.sin(D),Z=Math.cos(D);C.x=N*z,C.y=-b*i+g,C.z=N*Z,d.push(C.x,C.y,C.z),M.set(z,w,Z).normalize(),f.push(M.x,M.y,M.z),h.push(G,1-b),y.push(p++)}v.push(y)}for(let O=0;O<s;O++)for(let y=0;y<r;y++){let b=v[y][O],N=v[y+1][O],X=v[y+1][O+1],G=v[y][O+1];u.push(b,N,G),u.push(N,X,G),S+=6}c.addGroup(m,S,0),m+=S}function x(M){let C=p,S=new fe,w=new P,O=0,y=M===!0?e:t,b=M===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,g*b,0),f.push(0,b,0),h.push(.5,.5),p++;let N=p;for(let X=0;X<=s;X++){let D=X/s*l+o,z=Math.cos(D),Z=Math.sin(D);w.x=y*Z,w.y=g*b,w.z=y*z,d.push(w.x,w.y,w.z),f.push(0,b,0),S.x=z*.5+.5,S.y=Z*.5*b+.5,h.push(S.x,S.y),p++}for(let X=0;X<s;X++){let G=C+X,D=N+X;M===!0?u.push(D,D+1,G):u.push(D+1,D,G),O+=3}c.addGroup(m,O,M===!0?1:2),m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mn=class n extends tn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uc=class n extends xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let x=new P,M=new P,C=new P;for(let S=0;S<t.length;S+=3)h(t[S+0],x),h(t[S+1],M),h(t[S+2],C),l(x,M,C,_)}function l(_,x,M,C){let S=C+1,w=[];for(let O=0;O<=S;O++){w[O]=[];let y=_.clone().lerp(M,O/S),b=x.clone().lerp(M,O/S),N=S-O;for(let X=0;X<=N;X++)X===0&&O===S?w[O][X]=y:w[O][X]=y.clone().lerp(b,X/N)}for(let O=0;O<S;O++)for(let y=0;y<2*(S-O)-1;y++){let b=Math.floor(y/2);y%2===0?(f(w[O][b+1]),f(w[O+1][b]),f(w[O][b])):(f(w[O][b+1]),f(w[O+1][b+1]),f(w[O+1][b]))}}function c(_){let x=new P;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(_),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function u(){let _=new P;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let M=g(_)/2/Math.PI+.5,C=m(_)/Math.PI+.5;a.push(M,1-C)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){let x=a[_+0],M=a[_+2],C=a[_+4],S=Math.max(x,M,C),w=Math.min(x,M,C);S>.9&&w<.1&&(x<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function h(_,x){let M=_*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function p(){let _=new P,x=new P,M=new P,C=new P,S=new fe,w=new fe,O=new fe;for(let y=0,b=0;y<r.length;y+=9,b+=6){_.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),S.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),O.set(a[b+4],a[b+5]),C.copy(_).add(x).add(M).divideScalar(3);let N=g(C);v(S,b+0,_,N),v(w,b+2,x,N),v(O,b+4,M,N)}}function v(_,x,M,C){C<0&&_.x===1&&(a[x]=_.x-1),M.x===0&&M.z===0&&(a[x]=C/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Vi=class extends na{constructor(e){super(e),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new na().fromJSON(s))}return this}},B1={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=sf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,f,h;if(i&&(r=W1(n,e,r,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let p=t;p<s;p+=t)d=n[p],f=n[p+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return sa(r,a,t,o,l,h,0),a}};function sf(n,e,t,i,s){let r,a;if(s===ty(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Rd(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Rd(r,n[r],n[r+1],a);return a&&Yo(a,a.next)&&(aa(a),a=a.next),a}function vs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Yo(t,t.next)||St(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function sa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&$1(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?H1(n,i,s,r):k1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),aa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=G1(vs(n),e,t),sa(n,e,t,i,s,r,2)):a===2&&V1(n,e,t,i,s,r):sa(vs(n),e,t,i,s,r,1);break}}}function k1(n){let e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,h=o>l?o>c?o:c:l>c?l:c,p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&Js(s,o,r,l,a,c,p.x,p.y)&&St(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function H1(n,e,t,i){let s=n.prev,r=n,a=n.next;if(St(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,f=a.y,h=o<l?o<c?o:c:l<c?l:c,p=u<d?u<f?u:f:d<f?d:f,v=o>l?o>c?o:c:l>c?l:c,g=u>d?u>f?u:f:d>f?d:f,m=Nc(h,p,e,t,i),_=Nc(v,g,e,t,i),x=n.prevZ,M=n.nextZ;for(;x&&x.z>=m&&M&&M.z<=_;){if(x.x>=h&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Js(o,u,l,d,c,f,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=h&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Js(o,u,l,d,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=h&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Js(o,u,l,d,c,f,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=h&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Js(o,u,l,d,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function G1(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Yo(s,r)&&rf(s,i,i.next,r)&&ra(s,r)&&ra(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),aa(i),aa(i.next),i=n=r),i=i.next}while(i!==n);return vs(i)}function V1(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J1(a,o)){let l=af(a,o);a=vs(a,a.next),l=vs(l,l.next),sa(a,e,t,i,s,r,0),sa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function W1(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=sf(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(K1(c));for(s.sort(q1),r=0;r<s.length;r++)t=X1(s[r],t);return t}function q1(n,e){return n.x-e.x}function X1(n,e){let t=j1(n,e);if(!t)return e;let i=af(t,n);return vs(i,i.next),vs(t,t.next)}function j1(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Js(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),ra(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Y1(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function Y1(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function $1(n,e,t,i){let s=n;do s.z===0&&(s.z=Nc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Z1(s)}function Z1(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Nc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function K1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Js(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function J1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Q1(n,e)&&(ra(n,e)&&ra(e,n)&&ey(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||Yo(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Yo(n,e){return n.x===e.x&&n.y===e.y}function rf(n,e,t,i){let s=co(St(n,e,t)),r=co(St(n,e,i)),a=co(St(t,i,n)),o=co(St(t,i,e));return!!(s!==r&&a!==o||s===0&&lo(n,t,e)||r===0&&lo(n,i,e)||a===0&&lo(t,n,i)||o===0&&lo(t,e,i))}function lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function co(n){return n>0?1:n<0?-1:0}function Q1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&rf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ra(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function ey(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function af(n,e){let t=new Fc(n.i,n.x,n.y),i=new Fc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rd(n,e,t,i){let s=new Fc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ty(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Fi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Cd(e),Pd(i,e);let a=e.length;t.forEach(Cd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Pd(i,t[l]);let o=B1.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Cd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Pd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Oo=class n extends xt{constructor(e=new Vi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:ny,x,M=!1,C,S,w,O;m&&(x=m.getSpacedPoints(u),M=!0,f=!1,C=m.computeFrenetFrames(u,!1),S=new P,w=new P,O=new P),f||(g=0,h=0,p=0,v=0);let y=o.extractPoints(c),b=y.shape,N=y.holes;if(!Fi.isClockWise(b)){b=b.reverse();for(let L=0,Me=N.length;L<Me;L++){let $=N[L];Fi.isClockWise($)&&(N[L]=$.reverse())}}let G=Fi.triangulateShape(b,N),D=b;for(let L=0,Me=N.length;L<Me;L++){let $=N[L];b=b.concat($)}function z(L,Me,$){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(Me,$)}let Z=b.length,de=G.length;function re(L,Me,$){let ve,oe,Be,Ae=L.x-Me.x,A=L.y-Me.y,T=$.x-L.x,k=$.y-L.y,xe=Ae*Ae+A*A,U=Ae*k-A*T;if(Math.abs(U)>Number.EPSILON){let I=Math.sqrt(xe),W=Math.sqrt(T*T+k*k),ee=Me.x-A/I,ye=Me.y+Ae/I,Te=$.x-k/W,Re=$.y+T/W,ce=((Te-ee)*k-(Re-ye)*T)/(Ae*k-A*T);ve=ee+Ae*ce-L.x,oe=ye+A*ce-L.y;let j=ve*ve+oe*oe;if(j<=2)return new fe(ve,oe);Be=Math.sqrt(j/2)}else{let I=!1;Ae>Number.EPSILON?T>Number.EPSILON&&(I=!0):Ae<-Number.EPSILON?T<-Number.EPSILON&&(I=!0):Math.sign(A)===Math.sign(k)&&(I=!0),I?(ve=-A,oe=Ae,Be=Math.sqrt(xe)):(ve=Ae,oe=A,Be=Math.sqrt(xe/2))}return new fe(ve/Be,oe/Be)}let te=[];for(let L=0,Me=D.length,$=Me-1,ve=L+1;L<Me;L++,$++,ve++)$===Me&&($=0),ve===Me&&(ve=0),te[L]=re(D[L],D[$],D[ve]);let pe=[],me,Se=te.concat();for(let L=0,Me=N.length;L<Me;L++){let $=N[L];me=[];for(let ve=0,oe=$.length,Be=oe-1,Ae=ve+1;ve<oe;ve++,Be++,Ae++)Be===oe&&(Be=0),Ae===oe&&(Ae=0),me[ve]=re($[ve],$[Be],$[Ae]);pe.push(me),Se=Se.concat(me)}for(let L=0;L<g;L++){let Me=L/g,$=h*Math.cos(Me*Math.PI/2),ve=p*Math.sin(Me*Math.PI/2)+v;for(let oe=0,Be=D.length;oe<Be;oe++){let Ae=z(D[oe],te[oe],ve);we(Ae.x,Ae.y,-$)}for(let oe=0,Be=N.length;oe<Be;oe++){let Ae=N[oe];me=pe[oe];for(let A=0,T=Ae.length;A<T;A++){let k=z(Ae[A],me[A],ve);we(k.x,k.y,-$)}}}let Q=p+v;for(let L=0;L<Z;L++){let Me=f?z(b[L],Se[L],Q):b[L];M?(w.copy(C.normals[0]).multiplyScalar(Me.x),S.copy(C.binormals[0]).multiplyScalar(Me.y),O.copy(x[0]).add(w).add(S),we(O.x,O.y,O.z)):we(Me.x,Me.y,0)}for(let L=1;L<=u;L++)for(let Me=0;Me<Z;Me++){let $=f?z(b[Me],Se[Me],Q):b[Me];M?(w.copy(C.normals[L]).multiplyScalar($.x),S.copy(C.binormals[L]).multiplyScalar($.y),O.copy(x[L]).add(w).add(S),we(O.x,O.y,O.z)):we($.x,$.y,d/u*L)}for(let L=g-1;L>=0;L--){let Me=L/g,$=h*Math.cos(Me*Math.PI/2),ve=p*Math.sin(Me*Math.PI/2)+v;for(let oe=0,Be=D.length;oe<Be;oe++){let Ae=z(D[oe],te[oe],ve);we(Ae.x,Ae.y,d+$)}for(let oe=0,Be=N.length;oe<Be;oe++){let Ae=N[oe];me=pe[oe];for(let A=0,T=Ae.length;A<T;A++){let k=z(Ae[A],me[A],ve);M?we(k.x,k.y+x[u-1].y,x[u-1].x+$):we(k.x,k.y,d+$)}}}ue(),be();function ue(){let L=s.length/3;if(f){let Me=0,$=Z*Me;for(let ve=0;ve<de;ve++){let oe=G[ve];ze(oe[2]+$,oe[1]+$,oe[0]+$)}Me=u+g*2,$=Z*Me;for(let ve=0;ve<de;ve++){let oe=G[ve];ze(oe[0]+$,oe[1]+$,oe[2]+$)}}else{for(let Me=0;Me<de;Me++){let $=G[Me];ze($[2],$[1],$[0])}for(let Me=0;Me<de;Me++){let $=G[Me];ze($[0]+Z*u,$[1]+Z*u,$[2]+Z*u)}}i.addGroup(L,s.length/3-L,0)}function be(){let L=s.length/3,Me=0;Ne(D,Me),Me+=D.length;for(let $=0,ve=N.length;$<ve;$++){let oe=N[$];Ne(oe,Me),Me+=oe.length}i.addGroup(L,s.length/3-L,1)}function Ne(L,Me){let $=L.length;for(;--$>=0;){let ve=$,oe=$-1;oe<0&&(oe=L.length-1);for(let Be=0,Ae=u+g*2;Be<Ae;Be++){let A=Z*Be,T=Z*(Be+1),k=Me+ve+A,xe=Me+oe+A,U=Me+oe+T,I=Me+ve+T;he(k,xe,U,I)}}}function we(L,Me,$){l.push(L),l.push(Me),l.push($)}function ze(L,Me,$){ge(L),ge(Me),ge($);let ve=s.length/3,oe=_.generateTopUV(i,s,ve-3,ve-2,ve-1);Ce(oe[0]),Ce(oe[1]),Ce(oe[2])}function he(L,Me,$,ve){ge(L),ge(Me),ge(ve),ge(Me),ge($),ge(ve);let oe=s.length/3,Be=_.generateSideWallUV(i,s,oe-6,oe-3,oe-2,oe-1);Ce(Be[0]),Ce(Be[1]),Ce(Be[3]),Ce(Be[1]),Ce(Be[2]),Ce(Be[3])}function ge(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Ce(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return iy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new No[s.type]().fromJSON(s)),new n(i,e.options)}},ny={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new fe(r,a),new fe(o,l),new fe(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-d),new fe(f,1-p),new fe(v,1-m)]:[new fe(o,1-l),new fe(u,1-d),new fe(h,1-p),new fe(g,1-m)]}};function iy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Si=class n extends Uc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ur=class n extends xt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,f=(t-e)/s,h=new P,p=new fe;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let m=r+g/i*a;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let v=0;v<s;v++){let g=v*(i+1);for(let m=0;m<i;m++){let _=m+g,x=_,M=_+i+1,C=_+i+2,S=_+1;o.push(x,M,S),o.push(M,C,S)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zo=class n extends xt{constructor(e=new Vi([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(a,2));function c(u){let d=s.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;Fi.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Fi.isClockWise(_)===!0&&(p[g]=_.reverse())}let v=Fi.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];h=h.concat(_)}for(let g=0,m=h.length;g<m;g++){let _=h[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){let _=v[g],x=_[0]+d,M=_[1]+d,C=_[2]+d;i.push(x,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return sy(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function sy(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var rt=class n extends xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new P,f=new P,h=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let _=[],x=m/i,M=0;m===0&&a===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let S=C/t;d.x=-e*Math.cos(s+S*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+S*r)*Math.sin(a+x*o),p.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(S+M,1-x),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let x=u[m][_+1],M=u[m][_],C=u[m+1][_],S=u[m+1][_+1];(m!==0||a>0)&&h.push(x,M,S),(m!==i-1||l<Math.PI)&&h.push(M,C,S)}this.setIndex(h),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zn=class n extends xt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new P,d=new P,f=new P;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let v=p/s*r,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let v=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,_=(s+1)*h+p;a.push(v,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var hr=class n extends xt{constructor(e=new Do(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new fe,u=new P,d=[],f=[],h=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(h,2));function v(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),_(),m()}function g(x){u=e.getPointAt(x/t,u);let M=a.normals[x],C=a.binormals[x];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,O=Math.sin(w),y=-Math.cos(w);l.x=y*M.x+O*C.x,l.y=y*M.y+O*C.y,l.z=y*M.z+O*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let M=1;M<=s;M++){let C=(s+1)*(x-1)+(M-1),S=(s+1)*x+(M-1),w=(s+1)*x+M,O=(s+1)*(x-1)+M;p.push(C,S,O),p.push(S,w,O)}}function _(){for(let x=0;x<=t;x++)for(let M=0;M<=s;M++)c.x=x/t,c.y=M/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new No[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Bo=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends _e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ko=class extends Ei{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function uo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ry(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var dr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends dr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uh:r=e,o=2*t-i;break;case Nh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:a=e,l=2*i-t;break;case Nh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,_=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,x=(-1-h)*g+(1.5+h)*v+.5*p,M=h*g-h*v;for(let C=0;C!==o;++C)r[C]=m*a[u+C]+_*a[c+C]+x*a[l+C]+M*a[d+C];return r}},zc=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Bc=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ry(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let v=t[d+p];if(v!==t[f+p]||v!==t[h+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=po;var xs=class extends Zn{};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=fo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Zn{};kc.prototype.ValueTypeName="color";var Hc=class extends Zn{};Hc.prototype.ValueTypeName="number";var Gc=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},oa=class extends Zn{InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.DefaultInterpolation=po;oa.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Zn{};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=fo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Zn{};Vc.prototype.ValueTypeName="vector";var Ld={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Wc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null}}},ay=new Wc,la=class{constructor(e){this.manager=e!==void 0?e:ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};la.DEFAULT_MATERIAL_NAME="__DEFAULT";var qc=class extends la{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ld.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Zr("img");function l(){u(),Ld.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Wi=class extends la{constructor(e){super(e)}load(e,t,i,s){let r=new _n,a=new qc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ca=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},fr=class extends ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},oc=new nt,Id=new P,Dd=new P,Ho=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ud=new nt,Hr=new P,lc=new P,Xc=class extends Ho{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hr),lc.copy(i.position),lc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lc),i.updateMatrixWorld(),s.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud)}},pr=class extends ca{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jc=class extends Ho{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Nd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Nd(){return(typeof performance=="undefined"?Date:performance).now()}var cu="\\[\\]\\.:\\/",oy=new RegExp("["+cu+"]","g"),uu="[^"+cu+"]",ly="[^"+cu.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",uu),uy=/(WCOD+)?/.source.replace("WCOD",ly),hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),fy=new RegExp("^"+cy+uy+hy+dy+"$"),py=["material","materials","bones","map"],Yc=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oy,"")}static parseTrackName(e){let t=fy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);py.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Yc;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function qi(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function Rn(n,e,t,i,s,r){let a=document.createElement("canvas");a.width=n,a.height=e,t(a.getContext("2d"),n,e);let o=new jt(a);return o.wrapS=o.wrapT=Wt,o.repeat.set(i||1,s||1),o.anisotropy=4,r!==!1&&(o.colorSpace=at),o}var of={},ii=(n,e)=>of[n]||(of[n]=e()),hu={};function lf(n){hu=n||{}}function du(n,e){if(!(hu.tex||[]).includes(e))return n;let t=new Image;return t.onload=()=>{n.image=t,n.wrapS=n.wrapT=ps,n.colorSpace=at,n.needsUpdate=!0},t.src="img/tex/"+e+".jpg",n}var nn=()=>ii("grass",()=>du(Rn(512,512,(n,e,t)=>{let i=qi(7);n.fillStyle="#5f9a3f",n.fillRect(0,0,e,t);for(let s=0;s<9e3;s++){let r=i()*e,a=i()*t,o=3+i()*7,l=i();n.strokeStyle=l<.33?"#4b8a33":l<.66?"#79b34b":"#3f7a2c",n.lineWidth=1,n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*3,a-o),n.stroke()}for(let s=0;s<260;s++)n.fillStyle="rgba(170,140,80,.18)",n.beginPath(),n.arc(i()*e,i()*t,2+i()*9,0,7),n.fill()},215,215),"grass")),ft=()=>ii("dirt",()=>du(Rn(256,256,(n,e,t)=>{let i=qi(11);n.fillStyle="#b98b57",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i();n.fillStyle=r<.5?"rgba(120,80,40,.35)":"rgba(230,200,150,.3)",n.fillRect(i()*e,i()*t,1+i()*3,1+i()*3)}},8,3),"dirt")),bs=n=>ii("brick"+n,()=>du(Rn(256,256,(e,t,i)=>{let s=qi(5);e.fillStyle="#7a4a30",e.fillRect(0,0,t,i);let r=64,a=32;for(let o=0;o<i/a;o++)for(let l=-1;l<t/r+1;l++){let c=o%2*r/2,u=.85+s()*.3;e.fillStyle=`rgb(${n[0]*u|0},${n[1]*u|0},${n[2]*u|0})`,e.fillRect(l*r+c+2,o*a+2,r-4,a-4)}for(let o=0;o<900;o++)e.fillStyle="rgba(0,0,0,.08)",e.fillRect(s()*t,s()*i,2,2)},4,2),"brick")),kn=n=>ii("plaster"+n,()=>Rn(256,256,(e,t,i)=>{let s=qi(3);e.fillStyle=n,e.fillRect(0,0,t,i);for(let r=0;r<2200;r++)e.fillStyle=s()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.07)",e.fillRect(s()*t,s()*i,2+s()*4,2+s()*4)},3,2)),fu=()=>ii("earth",()=>Rn(256,256,(n,e,t)=>{let i=qi(9);n.fillStyle="#b98457",n.fillRect(0,0,e,t);for(let s=0;s<3e3;s++){let r=i();n.fillStyle=r<.5?"rgba(110,70,35,.3)":"rgba(220,180,130,.3)",n.fillRect(i()*e,i()*t,2+i()*5,2+i()*5)}},3,1)),ua=()=>ii("thatch",()=>Rn(256,256,(n,e,t)=>{let i=qi(21);n.fillStyle="#b99a55",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i()*e,a=i()*t;n.strokeStyle=i()<.5?"#8d733a":"#d9bf7a",n.lineWidth=1+i(),n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*6,a+14+i()*14),n.stroke()}},4,3)),si=()=>ii("tin",()=>Rn(256,256,(n,e,t)=>{n.fillStyle="#b13a2a",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.5,"rgba(255,255,255,.18)"),s.addColorStop(1,"rgba(0,0,0,.28)"),n.fillStyle=s,n.fillRect(i,0,16,t)}},6,3)),vn=n=>ii("wood"+n,()=>Rn(256,256,(e,t,i)=>{let s=qi(13);e.fillStyle=n||"#9a6a3f",e.fillRect(0,0,t,i);for(let r=0;r<i;r+=32)e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,r,t,2);for(let r=0;r<500;r++){e.strokeStyle=s()<.5?"rgba(60,30,10,.18)":"rgba(255,220,170,.12)",e.beginPath();let a=s()*i;e.moveTo(0,a),e.lineTo(t,a+(s()-.5)*6),e.stroke()}},3,3)),cf=(n,e)=>Rn(128,128,(t,i,s)=>{let r=qi(17);t.fillStyle=n,t.fillRect(0,0,i,s);for(let a=0;a<900;a++)t.fillStyle=r()<.5?`rgba(0,0,0,${e})`:`rgba(255,255,255,${e})`,t.fillRect(r()*i,r()*s,3,3)},2,2);function xr(n,e){return e=e||"#e0a526",Rn(128,128,(t,i,s)=>{t.fillStyle=n||"#e0a526",t.fillRect(0,0,i,s);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=a*32+16+r%2*16,l=r*32+16;t.fillStyle="#fff6df",t.beginPath(),t.arc(o,l,11,0,7),t.fill(),t.fillStyle=e,t.beginPath(),t.arc(o,l,7,0,7),t.fill(),t.fillStyle="#1b1b1b",t.beginPath(),t.arc(o,l,2.5,0,7),t.fill()}},2,2)}var uf=()=>ii("stripe",()=>Rn(128,64,(n,e,t)=>{for(let i=0;i<8;i++)n.fillStyle=i%2?"#fff":"#c0392b",n.fillRect(i*16,0,16,t)},3,1));function Xi(n,e,t,i,s,r){return Rn(e,t,a=>{a.fillStyle=i,a.fillRect(0,0,e,t),a.strokeStyle=r||"#f1c40f",a.lineWidth=Math.max(4,t*.04),a.strokeRect(a.lineWidth,a.lineWidth,e-2*a.lineWidth,t-2*a.lineWidth),a.textAlign="center",a.textBaseline="middle",n.forEach((o,l)=>{a.fillStyle=o.c||s,a.font=(o.b===!1?"":"bold ")+o.s+"px Arial, sans-serif",a.fillText(o.t,e/2,t*(o.y||(l+1)/(n.length+1)),e*.92)})},1,1)}var hf=()=>ii("painting",()=>Rn(256,192,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#58b4ea"),i.addColorStop(1,"#e3f6ff"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#ffe07a",n.beginPath(),n.arc(190,45,24,0,7),n.fill(),n.fillStyle="#4f9c3c",n.beginPath(),n.moveTo(0,t),n.quadraticCurveTo(80,80,170,130),n.quadraticCurveTo(220,100,e,t),n.fill(),n.fillStyle="#2e8b57",n.beginPath(),n.arc(60,120,18,0,7),n.fill(),n.fillStyle="#6b4226",n.fillRect(58,120,4,30)},1,1));function df(n){if(!(hu.scenes||[]).includes(n))return null;let e=new Wi().load("img/scenes/"+n+".jpg");return e.colorSpace=at,e.anisotropy=4,e}function Cn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new xt,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=ff(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let v=0;v<a[u].length;++v)h.push(a[u][v][f]);let p=ff(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function ff(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let c=0;c<n.length;++c)a.set(n[c].array,o),o+=n[c].array.length;let l=new At(a,t,i);return s!==void 0&&(l.gpuType=s),l}function yr(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function pf(n,e,t){let i=document.createElement("canvas");return i.width=n,i.height=e,t(i.getContext("2d"),n,e),i}var mf=(n,e)=>{let t=new jt(n);return t.anisotropy=4,t.wrapS=t.wrapT=Wt,e!==!1&&(t.colorSpace=at),t},pu={};function gf(n){if(pu[n])return pu[n];let e=yr(n==="mango"?11:n==="palm"?23:37),t=pf(256,256,(i,s,r)=>{i.clearRect(0,0,s,r);let a=n==="mango"?26:n==="palm"?1:34,o=n==="mango"?[34,98,44]:n==="palm"?[48,112,40]:[58,120,52];if(n==="palm"){i.translate(s/2,r),i.strokeStyle="rgb(70,100,40)",i.lineWidth=4,i.beginPath(),i.moveTo(0,0),i.lineTo(0,-r*.97),i.stroke();for(let l=0;l<34;l++){let c=-r*.06-l*(r*.93/34),u=s*.46*(1-l/46),d=.55+l*.012;[-1,1].forEach(f=>{let h=.8+e()*.4;i.strokeStyle=`rgb(${o[0]*h|0},${o[1]*h|0},${o[2]*h|0})`,i.lineWidth=3.4,i.beginPath(),i.moveTo(0,c),i.quadraticCurveTo(f*u*.5,c-u*.16,f*u,c+u*.42*1),i.stroke()})}return}for(let l=0;l<a;l++){let c=e()*Math.PI*2,u=Math.pow(e(),.6)*(s*.38),d=s/2+Math.cos(c)*u,f=r/2+Math.sin(c)*u*.8,h=(n==="mango"?64:36)*(.7+e()*.5),p=h*(n==="mango"?.22:.4),v=c+Math.PI/2+(e()-.5)*.8,g=.7+e()*.55,m=`rgb(${o[0]*g|0},${o[1]*g|0},${o[2]*g|0})`;i.save(),i.translate(d,f),i.rotate(v),i.fillStyle=m,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(p,-h*.45,0,-h),i.quadraticCurveTo(-p,-h*.45,0,0),i.fill(),i.strokeStyle=`rgba(${o[0]*g*.6|0},${o[1]*g*.7|0},${o[2]*g*.6|0},.8)`,i.lineWidth=1.1,i.beginPath(),i.moveTo(0,0),i.lineTo(0,-h*.9),i.stroke(),i.restore()}});return pu[n]=mf(t)}function vf(){let n=pf(128,256,(t,i,s)=>{let r=yr(5);t.fillStyle="#5a4128",t.fillRect(0,0,i,s);for(let a=0;a<220;a++){let o=r()*i,l=r()*s,c=18+r()*60;t.strokeStyle=r()<.5?"rgba(30,18,8,.5)":"rgba(130,100,66,.35)",t.lineWidth=1+r()*2.2,t.beginPath(),t.moveTo(o,l),t.lineTo(o+(r()-.5)*5,l+c),t.stroke()}}),e=mf(n);return e.repeat.set(2,3),e}function mu(n,e){let t=gf(n);return new _e({map:t,alphaTest:.5,side:ot,roughness:.78,metalness:0,color:e||16777215,vertexColors:!0})}function gu(n){return new Jr({depthPacking:nu,map:gf(n),alphaTest:.5})}function xf(n,e,t,i){let s=new qe(n,e);s.applyMatrix4(t);let r=s.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=i*(.9+.1*Math.random()),a[o*3+1]=i,a[o*3+2]=i*.92;return s.setAttribute("color",new At(a,3)),s}var Pt=new Xt;function ji(n){n=n||{};let e=n.kind||"mango",t=n.seed||3,i=yr(t),s=new Ue,r=new _e({map:vf(),roughness:.95,color:12101004}),a=n.trunk||3.4,o=[[0,0,0],[.15,a*.35,.08],[-.1,a*.7,-.05],[.05,a,0]].map(m=>new P(m[0],m[1],m[2])),l=new K(new hr(new gs(o),14,.34,10),r),c=l.geometry.attributes.position;for(let m=0;m<c.count;m++){let _=c.getY(m);if(_<.7){let x=1+(.7-_)*.55;c.setX(m,c.getX(m)*x),c.setZ(m,c.getZ(m)*x)}}l.geometry.computeVertexNormals(),l.castShadow=!0,l.receiveShadow=!0,s.add(l);let u=5;for(let m=0;m<u;m++){let _=m/u*Math.PI*2+i()*.6,x=2.2+i()*1.4,M=a*(.72+i()*.25),C=[new P(0,M,0),new P(Math.cos(_)*x*.5,M+x*.35,Math.sin(_)*x*.5),new P(Math.cos(_)*x,M+x*.55,Math.sin(_)*x)],S=new K(new hr(new gs(C),8,.11,6),r);S.castShadow=!0,s.add(S)}let d=new K(new Si(2.1,2),new _e({color:e==="mango"?1853990:2315564,roughness:1}));d.position.set(0,a+1.6,0),d.scale.set(1.35,.85,1.35),d.castShadow=!0,s.add(d);let f=mu(e,n.tint),h=gu(e),p=n.cards||80,v=[];for(let m=0;m<p;m++){let _=i()*Math.PI*2,x=Math.acos(1-i()*.85),M=2.4+i()*1.4,C=Math.sin(x)*Math.cos(_)*M,S=Math.cos(x)*M*.7+a+1.5,w=Math.sin(x)*Math.sin(_)*M;Pt.position.set(C,S,w),Pt.lookAt(C*2,S*1.2+1,w*2),Pt.rotateZ(i()*6.28),Pt.scale.setScalar(.8+i()*.8),Pt.updateMatrix();let O=(S-a)/(M*.7+1.5);v.push(xf(2.3,2.3,Pt.matrix,.5+.5*Math.min(1,Math.max(0,O*.9+.25))))}let g=new K(Cn(v),f);if(g.castShadow=!0,g.receiveShadow=!0,g.customDepthMaterial=h,g.userData.canopy=!0,s.add(g),e==="mango"&&n.fruits!==!1){let m=new _e({color:15243802,roughness:.45}),_=[];for(let M=0;M<22;M++){let C=i()*6.28,S=1.2+i()*2.2,w=new rt(.15,10,8);w.scale(1,1.3,1),w.translate(Math.cos(C)*S,a+.9+i()*1.7,Math.sin(C)*S),_.push(w)}let x=new K(Cn(_),m);x.castShadow=!0,x.userData.canopy=!0,s.add(x)}return d.userData.canopy=!0,s}function yf(n){let e=yr(n||7),t=new Ue,i=new _e({map:vf(),roughness:.9,color:13680808}),s=7+e()*3,r=(e()-.5)*1.6,a=[0,.3,.6,.9,1].map((h,p)=>new P(r*h*h,s*h,0)),o=new K(new hr(new gs(a),24,.22,8),i),l=o.geometry.attributes.position;for(let h=0;h<l.count;h++){let p=l.getY(h),v=1-p/s*.45+(p<.6?(.6-p)*.6:0);l.setX(h,(l.getX(h)-r*(p/s)*(p/s))*v+r*(p/s)*(p/s)),l.setZ(h,l.getZ(h)*v)}o.geometry.computeVertexNormals(),o.castShadow=!0,t.add(o);let c=mu("palm"),u=gu("palm"),d=[];for(let h=0;h<14;h++){Pt.position.set(r,s,0),Pt.rotation.order="YXZ",Pt.rotation.set(-(.3+e()*.85),h/14*Math.PI*2+e()*.3,0),Pt.scale.set(1,1,1),Pt.updateMatrix();let p=new qe(3.8,3.8);p.translate(0,1.9,0),p.applyMatrix4(Pt.matrix);let v=p.attributes.position.count,g=new Float32Array(v*3),m=.7+e()*.3;for(let _=0;_<v;_++)g[_*3]=m,g[_*3+1]=m,g[_*3+2]=m*.9;p.setAttribute("color",new At(g,3)),d.push(p)}let f=new K(Cn(d),c);return f.castShadow=!0,f.customDepthMaterial=u,t.add(f),t}function ri(n,e){let t=yr(n||4),i=new Ue,s=mu("leafy"),r=[],a=e||.9;for(let c=0;c<26;c++){let u=t()*6.28,d=t()*1.2,f=a*(.4+t()*.6);Pt.position.set(Math.cos(u)*f*Math.cos(d),.25+Math.sin(d)*a*.9,Math.sin(u)*f*Math.cos(d)),Pt.lookAt(Pt.position.x*2,Pt.position.y+.6,Pt.position.z*2),Pt.rotateZ(t()*6.28),Pt.scale.setScalar(.45+t()*.4),Pt.updateMatrix(),r.push(xf(1.6,1.6,Pt.matrix,.5+t()*.5))}let o=new K(Cn(r),s);o.castShadow=!0,o.customDepthMaterial=gu("leafy"),i.add(o);let l=new K(new Si(a*.55,1),new _e({color:1919526,roughness:1}));return l.position.y=.45,l.scale.y=.7,i.add(l),i}function hn(n){let{area:e,count:t,exclude:i,seed:s}=n,r=yr(s||9),a=new xt,o=3,l=[],c=[],u=[],d=[];for(let S=0;S<=o;S++){let w=S/o,O=.032*(1-w*.9),y=w*.34;if(l.push(-O,y,0,O,y,0),c.push(0,w,1,w),d.push(.45+.55*w,.5+.5*w,.4+.4*w,.45+.55*w,.5+.5*w,.4+.4*w),S<o){let b=S*2;u.push(b,b+1,b+2,b+1,b+3,b+2)}}a.setAttribute("position",new Ze(l,3)),a.setAttribute("uv",new Ze(c,2)),a.setIndex(u),a.setAttribute("color",new Ze(d,3));let f=[];for(let S=0;S<l.length/3;S++)f.push(0,1,0);a.setAttribute("normal",new Ze(f,3));let h=new _e({color:16777215,roughness:.9,side:ot,vertexColors:!0}),p={value:0};h.onBeforeCompile=S=>{S.uniforms.uTime=p,S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sw=uv.y*uv.y;
#ifdef USE_INSTANCING
vec3 ip=vec3(instanceMatrix[3][0],0.,instanceMatrix[3][2]);
#else
vec3 ip=vec3(0.);
#endif
transformed.x+=sin(uTime*1.7+ip.x*.45+ip.z*.3)*.11*sw;transformed.z+=cos(uTime*1.3+ip.z*.4)*.07*sw;`),h.userData.sh=S};let v=new $n(a,h,t),g=new nt,m=new Ve,_=new en,x=new Yn,M=0,C=0;for(;M<t&&C<t*6;){C++;let S=e[0]+r()*(e[1]-e[0]),w=e[2]+r()*(e[3]-e[2]);if(i&&i(S,w))continue;let O=.8+r()*.8;x.set((r()-.5)*.3,r()*6.28,(r()-.5)*.3),_.setFromEuler(x),g.compose(new P(S,0,w),_,new P(O,O*(.6+r()*1),O)),v.setMatrixAt(M,g),m.setHSL(.23+r()*.07,.55+r()*.15,.22+r()*.14),v.setColorAt(M,m),M++}return v.count=M,v.receiveShadow=!0,v.frustumCulled=!1,v.userData.update=S=>{p.value=S},v}var B=(n,e,t)=>new _e(Object.assign({color:n,roughness:e===void 0?.85:e},t||{}));function H(n,e,t,i,s,r,a,o,l){let c=new K(new dt(e,t,i),s);return c.position.set(r,a,o),l&&(c.rotation.y=l),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Fe(n,e,t,i,s,r,a,o,l){let c=new K(new tn(e,t,i,l||12),s);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ut(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function Jn(n,e,t,i,s,r,a,o,l,c){let u=c||.5,d=r/2+u,f=s+u*2,h=Math.atan2(a,r/2),p=Math.hypot(a,r/2)+u*.6;[-1,1].forEach(m=>{let _=H(n,f,.12,p,o,e,t+a/2,i+m*(r/4),0);_.rotation.x=-m*h});let v=new Vi;v.moveTo(-r/2,0),v.lineTo(r/2,0),v.lineTo(0,a),v.closePath();let g=new K(new zo(v),l);[-1,1].forEach(m=>{let _=g.clone();_.position.set(e+m*s/2,t,i),_.rotation.y=m*Math.PI/2,n.add(_)})}function sn(n,e,t,i,s,r,a,o){let l=o?yf(Math.floor(Math.abs(e*7+t*3))+2):ji({kind:s?"mango":"leafy",seed:Math.floor(Math.abs(e*13+t*7))+3,fruits:!!s,trunk:3+i*7%1*1.4});return l.position.set(e,0,t),l.scale.setScalar(o?1:i),n.add(l),a&&a.push({x:e,z:t,r:(o?.35:.6)*(o?1:i)}),l}function Mf(n){let e=new Ue,t=[],i=[],s={},r=nn(),a=new K(new qe(1400,1400),new _e({map:r,roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(12,0,0),a.receiveShadow=!0,e.add(a);let o=ft(),l=new _e({map:o,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=(he,ge,Ce,L,Me)=>{let $=new K(new qe(Ce,L),l);$.rotation.x=-Math.PI/2,$.rotation.z=Me||0,$.position.set(he,.02,ge),$.receiveShadow=!0,e.add($)};c(-4,1,64,3.2,0),c(3,-2,11,9,0),c(-20,-4,5,6,0),c(34,0,14,3.2,0),c(41,-3.5,4,6.5,0);let u=-22,d=-9;H(e,8,2.7,5.4,new _e({map:fu(),roughness:1}),u,1.35,d),Jn(e,u,2.7,d,8,5.4,1.8,new _e({map:ua(),roughness:1}),B("#b99a55"),.7),H(e,1.3,2.1,.12,B("#4a2f1b",.8),u,1.05,d+2.72),H(e,1.5,.1,.3,B("#6e5a45"),u,.05,d+2.9),[-2.7,2.7].forEach(he=>{H(e,1.2,1,.1,B("#e8f3fa",.2,{emissive:5088985,emissiveIntensity:.35}),u+he,1.6,d+2.72),H(e,1.35,.12,.14,B("#4a2f1b"),u+he,1.08,d+2.74),H(e,1.35,.12,.14,B("#4a2f1b"),u+he,2.12,d+2.74)}),i.push({x0:u-4,x1:u+4,z0:d-2.7,z1:d+2.7}),H(e,2.2,.12,.8,B("#7a4a26"),-26,.5,-4.2),H(e,.12,.5,.7,B("#6b4226"),-26.9,.25,-4.2),H(e,.12,.5,.7,B("#6b4226"),-25.1,.25,-4.2),t.push({x:-26,z:-4.2,r:1.1});let f=sn(e,-9,4,1.55,!0,["#2f7d44","#3f9a53","#276b3a"],t);s.mangoTree={x:-9,z:4,obj:f};let h=3,p=-6.4;[[-2.2,-1.1],[2.2,-1.1],[-2.2,1.1],[2.2,1.1]].forEach(he=>Fe(e,.06,.06,2.5,B("#6b4226"),h+he[0],1.25,p+he[1],8));let v=H(e,5.2,.1,3.4,new _e({map:uf(),roughness:.9}),h,2.62,p-.1);v.rotation.x=.12,H(e,4.6,.9,.9,new _e({map:vn("#a87445"),roughness:.9}),h,.45,p+.9),[["#e68a00",-1.6],["#c0392b",-.8],["#6bbf3a",0],["#e0a526",.8],["#e68a00",1.6]].forEach((he,ge)=>{for(let Ce=0;Ce<5;Ce++){let L=new K(new rt(.13,10,8),B(he[0],.5));L.position.set(h+he[1]+Ce%2*.14,1.02+(Ce>2?.2:0),p+.9+(Ce%3-1)*.18),L.castShadow=!0,e.add(L)}}),H(e,.9,.5,.7,B("#8a5a32"),h-1.8,.25,p-.7),H(e,.9,.5,.7,B("#8a5a32"),h+1.9,.25,p-.5),i.push({x0:h-2.4,x1:h+2.4,z0:p+.35,z1:p+1.5}),H(e,.12,.9,.12,B("#555"),h,2.8,p+1.6);let m=new K(new qe(2.2,.55),new _e({map:Xi([{t:"MARCH\xC9",s:90,c:"#c0392b"}],256,64,"#fff8ef","#c0392b","#c0392b")}));m.position.set(h,2.2,p+1.72),e.add(m);let _=14,x=-7;[-1.7,1.7].forEach(he=>Fe(e,.07,.07,4,B("#6b6b6b",.5,{metalness:.4}),_+he,2,x,8));let M=new K(new qe(4.2,1.9),new _e({map:Xi([{t:"LEXARIS ACAD\xC9MIE",s:46,y:.42},{t:"Formation en IA \xB7 juristes et jeunes",s:22,y:.72,b:!1,c:"#f1c40f"}],512,230,"#1f7a4d","#ffffff"),roughness:.6}));M.position.set(_,3.1,x+.05),M.castShadow=!0,e.add(M),t.push({x:_-1.7,z:x,r:.3},{x:_+1.7,z:x,r:.3}),Fe(e,.07,.09,2.6,B("#5a3a22",.9),-9,1.3,-3.6,8);let C=new K(new qe(2.2,1.5),new _e({map:Xi([{t:"CARTE",s:70,y:.2},{t:"\u{1F6D2} March\xE9 \xB7 \u{1F30A} Fleuve",s:34,y:.45,b:!1,c:"#f1c40f"},{t:"\u{1F3E5} Sant\xE9 \xB7 \u{1F393} Universit\xE9",s:34,y:.65,b:!1,c:"#f1c40f"},{t:"Touche pour voyager",s:28,y:.85,b:!1}],512,350,"#6b4a2a","#ffffff","#e0a526"),roughness:.7}));C.position.set(-9,2.5,-3.52),C.castShadow=!0,e.add(C),t.push({x:-9,z:-3.6,r:.35}),H(e,2,.1,.5,B("#7a4a26"),9,.5,-5.2),H(e,.1,.5,.45,B("#4a2f1b"),8.1,.25,-5.2),H(e,.1,.5,.45,B("#4a2f1b"),9.9,.25,-5.2),t.push({x:9,z:-5.2,r:1});let S=B("#8a5a32",.9),w=27,O=(he,ge)=>Fe(e,.09,.09,1.7,S,he,.85,ge,6);[[-15,-2.4],[2.4,15]].forEach(he=>{for(let Ce=he[0];Ce<=he[1];Ce+=1.6)O(w,Ce);let ge=he[1]-he[0];H(e,.07,.08,ge,S,w,1.35,(he[0]+he[1])/2),H(e,.07,.08,ge,S,w,.7,(he[0]+he[1])/2),i.push({x0:w-.3,x1:w+.3,z0:he[0],z1:he[1]})}),[-2.2,2.2].forEach(he=>{let ge=H(e,.5,2.2,.5,new _e({map:bs([196,106,60]),roughness:.9}),w,1.1,he);t.push({x:w,z:he,r:.4})});let y=[];[-1,1].forEach(he=>{let ge=new Ue;ge.position.set(w,0,he*2);let Ce=new Ue;Ce.position.set(0,0,-he*1),H(Ce,.08,1.5,2,B("#5a3a22"),0,.95,0);for(let L=-4;L<=4;L+=2)H(Ce,.1,1.5,.08,B("#7a4a26"),0,.95,L*.22);ge.add(Ce),e.add(ge),y.push({piv:ge,s:he})}),s.leaves=y,s.gateBox={x0:w-.4,x1:w+.4,z0:-2.4,z1:2.4};let b=42,N=-11,X=new _e({map:bs([198,108,62]),roughness:.9});H(e,26,3.8,9,X,b,1.9,N),Jn(e,b,3.8,N,26,9,2.2,new _e({map:si(),roughness:.55,metalness:.35}),B("#e9dfca"),.9),H(e,26,.3,.4,B("#efe6d2"),b,.15,N+4.6);for(let he=0;he<10;he++)Fe(e,.14,.14,3.2,B("#f3ecd9"),b-11.5+he*2.55,1.6,N+5.4,10);H(e,26.5,.25,1.4,B("#cfc6b2"),b,3.25,N+5.2),H(e,26.5,.12,1.6,new _e({map:si(),roughness:.55,metalness:.35}),b,3.45,N+5.2),H(e,26.5,.2,1.6,B("#d9d0bc"),b,.1,N+5.2),[-9,-5.4,5.4,9].forEach(he=>{H(e,1.7,1.3,.1,B("#cfe9f7",.15,{emissive:6006742,emissiveIntensity:.3}),b+he,2.05,N+4.55),H(e,1.9,.12,.15,B("#f2f2f2"),b+he,1.37,N+4.58)});let G=new Ue;G.position.set(b,0,N+4.55),e.add(G),H(G,3.2,2.9,.2,B("#2b1d12"),0,1.45,-.05);let D=[];[-1,1].forEach(he=>{let ge=new Ue;ge.position.set(he*1.5,0,.05);let Ce=H(ge,1.5,2.7,.1,B("#6b3f20"),-he*.75,1.35,0);H(ge,1.2,.08,.12,B("#4a2f1b"),-he*.75,2.1,.02),G.add(ge),D.push({piv:ge,s:he})}),s.doorLeaves=D;let z=new K(new qe(8,1.1),new _e({map:Xi([{t:"LEXARIS ACAD\xC9MIE",s:78}],1024,140,"#1f7a4d","#ffffff"),roughness:.6}));z.position.set(b,3.15,N+4.58),e.add(z),i.push({x0:b-13,x1:b+13,z0:N-4.5,z1:N+4.6});let Z=33,de=-3;Fe(e,.05,.07,7,B("#999",.4,{metalness:.5}),Z,3.5,de,8);let re=new K(new qe(1.6,1.05,10,1),new _e({map:Ti(),side:ot,roughness:.8}));re.position.set(Z+.85,6.2,de),re.castShadow=!0,e.add(re),s.flag=re,t.push({x:Z,z:de,r:.3}),[[-30,-3],[-28,9],[-18,8],[-14,-12],[-6,-10],[-4,10],[6,10],[12,9],[18,-11],[22,-9],[-32,-12],[20,11],[24,5],[34,9],[48,6],[52,-2],[31,-13],[55,10],[-24,13],[0,-13]].forEach((he,ge)=>sn(e,he[0],he[1],.9+ge%4*.18,!1,null,t,ge%3===1));let pe=Ut(31);for(let he=0;he<30;he++){let ge=-33+pe()*90,Ce=-14+pe()*28;if(Math.abs(Ce)<2.3&&ge<27)continue;let L=ri(he+3,.7+pe()*.7);L.position.set(ge,0,Ce),L.rotation.y=pe()*6,e.add(L)}let me=hn({area:[-34,58,-15,15],count:34e3,seed:5,exclude:(he,ge)=>Math.abs(ge)<2&&he<27||he>-27&&he<-17&&ge>-11.7&&ge<-6.3||he>26&&he<44&&ge>-8&&ge<5||he>0&&he<7&&ge>-8&&ge<-3||he>0&&he<8&&ge>-5.5&&ge<1.5});e.add(me);let Se=Ut(31),Q=new nt,ue=new Ve,be=new $n(new rt(.08,6,5),B("#ffffff",.6),160);for(let he=0;he<160;he++){let ge=-33+Se()*60,Ce=-14+Se()*28;Math.abs(Ce)<2.2||(Q.compose(new P(ge,.28,Ce),new en,new P(1,1,1)),be.setMatrixAt(he,Q),ue.set(["#ffd23f","#ff6b9a","#ffffff","#ff8a3d"][he%4]),be.setColorAt(he,ue))}e.add(be);let Ne=[],we={x0:-33.5,x1:58,z0:-14.5,z1:14.5};function ze(he,ge,Ce){Ne.forEach(($,ve)=>{$.position.x+=he*(.6+ve%3*.2),$.position.x>190&&($.position.x=-190)}),me.userData.update(ge);let L=s.flag.geometry.attributes.position;for(let $=0;$<L.count;$++){let ve=L.getX($)+.8;L.setZ($,Math.sin(ge*4+ve*3)*.07*ve)}L.needsUpdate=!0;let Me=Ce.open?1:0;s.leaves.forEach($=>{let ve=Me*$.s*1.45;$.piv.rotation.y+=(-ve-$.piv.rotation.y)*Math.min(1,he*4)}),s.doorLeaves.forEach($=>{let ve=Me*$.s*1.6;$.piv.rotation.y+=(ve-$.piv.rotation.y)*Math.min(1,he*4)})}return{group:e,colliders:t,boxes:i,dyn:s,bounds:we,update:ze,mangoTree:s.mangoTree}}function Ti(){let n=document.createElement("canvas");n.width=256,n.height=170;let e=n.getContext("2d");e.fillStyle="#007fff",e.fillRect(0,0,256,170),e.strokeStyle="#f7d618",e.lineWidth=40,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.strokeStyle="#ce1021",e.lineWidth=24,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.fillStyle="#f7d618",e.beginPath();for(let i=0;i<10;i++){let s=-Math.PI/2+i*Math.PI/5,r=i%2?9:22;e.lineTo(40+Math.cos(s)*r,40+Math.sin(s)*r)}e.fill();let t=new jt(n);return t.colorSpace=at,t}function bf(n,e,t,i,s,r,a){let o=new K(new qe(e,t),r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let l=new K(new qe(e,i),s);l.position.set(0,i/2,-t/2),l.receiveShadow=!0,n.add(l);let c=new K(new qe(t,i),s);c.rotation.y=Math.PI/2,c.position.set(-e/2,i/2,0),c.receiveShadow=!0,n.add(c);let u=new K(new qe(t,i),s);u.rotation.y=-Math.PI/2,u.position.set(e/2,i/2,0),u.receiveShadow=!0,n.add(u),H(n,e,.12,.1,B("#e7dcc5"),0,.06,-t/2+.05),H(n,2.2,.04,1.1,B("#7a4a26",1),0,.02,t/2-.7);let d=new K(new ur(.55,.75,32),new Ct({color:16765503,transparent:!0,opacity:.55}));d.rotation.x=-Math.PI/2,d.position.set(0,.05,t/2-.7),n.add(d)}function _f(n,e,t,i){let s=i||.7,r=new _e({map:vn("#b07a45"),roughness:.8});H(n,1.1,.06,.55,r,e,s,t-.7),[[-.5,-.2],[.5,-.2],[-.5,.2],[.5,.2]].forEach(a=>H(n,.05,s,.05,B("#4a2f1b"),e+a[0],s/2,t-.7+a[1])),H(n,.42,.05,.4,r,e,.4,t),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(a=>H(n,.04,.4,.04,B("#4a2f1b"),e+a[0],.2,t+a[1])),H(n,.42,.4,.05,r,e,.62,t+.2)}function Ef(){let n=new Ue,e=[],t=[],i=17,s=10;bf(n,i,s,3.8,new _e({map:kn("#f1e7cf"),roughness:1}),new _e({map:vn("#a8744a"),roughness:.85})),n.children.forEach(c=>{c.geometry&&c.geometry.type==="PlaneGeometry"&&c.rotation.x===-Math.PI/2&&c.material.map.repeat.set(5,3)});let a=new K(new qe(7.5,2.3),new _e({map:Xi([{t:"LEXARIS ACAD\xC9MIE",s:60,y:.38,c:"#ffffff"},{t:"Kelas Game \xB7 Apprendre en jouant",s:28,y:.7,b:!1,c:"#f1c40f"}],768,230,"#2e3b33","#fff","#8d5a3b"),roughness:.9}));a.position.set(0,2.2,-s/2+.04),n.add(a),H(n,7.8,.12,.14,B("#8d5a3b"),0,.98,-s/2+.06);let o=new K(new qe(1.5,1),new _e({map:Ti(),roughness:.9}));o.position.set(5.8,2.4,-s/2+.04),n.add(o),[-2.6,2.2].forEach(c=>{let u=new K(new qe(2,1.5),new Ct({color:13626111}));u.rotation.y=-Math.PI/2,u.position.set(i/2-.03,2.1,c),n.add(u),H(n,.08,1.6,.08,B("#fff"),i/2-.05,2.1,c)}),[["kinshasa",-2.8],["fleuve",0],["marche",2.8]].forEach(c=>{let u=df(c[0]);if(!u)return;H(n,.08,1.5,2.5,B("#5a3a22",.7),-i/2+.06,2.3,c[1]);let d=new K(new qe(2.3,1.3),new _e({map:u,roughness:.6}));d.rotation.y=Math.PI/2,d.position.set(-i/2+.11,2.3,c[1]),n.add(d)}),[[-5.5,1.2],[-2.8,1.2],[5.7,1],[-5.5,3.4],[-2.8,3.4],[0,3.4],[2.6,3.4],[5.7,3.4],[0,1.2]].forEach(c=>_f(n,c[0],c[1])),_f(n,2.6,.55,.62),H(n,2,.08,.9,new _e({map:vn("#8a5a32")}),-6.2,.95,-3.6),[[-1,-.35],[1,-.35],[-1,.35],[1,.35]].forEach(c=>H(n,.07,.95,.07,B("#4a2f1b"),-6.2+c[0]*.9,.47,-3.6+c[1])),e.push({x:-6.2,z:-3.6,r:1.2}),t.push({x0:-3.5,x1:-2.1,z0:.2,z1:1.4}),[[-5.5,.5],[-2.8,.5],[5.7,.3],[-5.5,2.7],[-2.8,2.7],[0,2.7],[2.6,2.7],[5.7,2.7],[0,.5],[2.6,-.15]].forEach(c=>t.push({x0:c[0]-.6,x1:c[0]+.6,z0:c[1]-.3,z1:c[1]+.3}));let l={x0:-i/2+.5,x1:i/2-.5,z0:-s/2+.6,z1:s/2-.2};return{group:n,colliders:e,boxes:t,bounds:l,update(){},exit:{x:0,z:s/2-.9}}}function Sf(n){let e=new Ue,t=[],i=[],s=9.5,r=6.8;bf(e,s,r,3.2,new _e({map:fu(),roughness:1}),new _e({map:vn("#8d6238"),roughness:.9}));let o=-3.2,l=-2.2;H(e,2.2,.35,1.3,new _e({map:vn("#7a4a26")}),o,.3,l),H(e,2.1,.2,1.2,B("#f5efe3",.95),o,.55,l),H(e,.6,.12,.9,B("#ffffff",.9),o-.7,.7,l),H(e,1.4,.08,1.25,new _e({map:xr("#c0392b","#f1c40f"),roughness:.9}),o+.3,.66,l),i.push({x0:o-1.2,x1:o+1.2,z0:l-.75,z1:l+.75}),H(e,1,1.8,.08,B("#5a3a22",.7),-1.6,.95,-r/2+.12);let c=new K(new qe(.82,1.62),new _e({color:13625074,roughness:.05,metalness:.85,emissive:7315384,emissiveIntensity:.25}));c.position.set(-1.6,.95,-r/2+.17),e.add(c);let u=new K(new qe(1.5,1.3),new Ct({color:13626111}));if(u.position.set(2.4,1.9,-r/2+.03),e.add(u),H(e,1.7,.1,.1,B("#5a3a22"),2.4,2.6,-r/2+.06),n.rideau&&[-.75,.75].forEach(f=>H(e,.55,1.7,.06,new _e({map:xr("#c0392b","#f1c40f"),roughness:.9}),2.4+f*1.1,1.8,-r/2+.12)),n.tableau){let f=H(e,1.4,1.05,.07,B("#5a3a22"),-.4,2.1,-r/2+.06),h=new K(new qe(1.25,.9),new _e({map:hf()}));h.position.set(-.4,2.1,-r/2+.11),e.add(h)}if(n.natte){let f=H(e,2.6,.03,1.7,new _e({map:ua(),roughness:1}),.2,.02,.9);H(e,2.7,.02,1.8,B("#7a4a26"),.2,.012,.9)}if(n.table){let f=new _e({map:vn("#a87445"),roughness:.8});if(H(e,1.5,.08,.9,f,3.1,.85,-2.5),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(h=>H(e,.08,.85,.08,B("#4a2f1b"),3.1+h[0],.42,-2.5+h[1])),i.push({x0:2.3,x1:3.9,z0:-2.95,z1:-2.05}),n.lampe){Fe(e,.05,.07,.25,B("#6b4226"),3.1,1.02,-2.5,8);let h=new K(new rt(.17,14,10),B("#ffe9a8",.4,{emissive:16762714,emissiveIntensity:1.2}));h.position.set(3.1,1.28,-2.5),e.add(h);let p=new pr(16760932,9,7,1.6);p.position.set(3.1,1.35,-2.4),e.add(p)}}if(n.plante){Fe(e,.2,.15,.38,B("#a8301e"),4,.19,-2.7,12);for(let f=0;f<9;f++){let h=new K(new rt(.14,8,6),B(f%2?"#2e8b57":"#3a9a63",.8));h.scale.set(.6,1.6,.6);let p=f/9*6.28;h.position.set(4+Math.cos(p)*.15,.7+f%3*.15,-2.7+Math.sin(p)*.15),h.rotation.z=Math.cos(p)*.5,h.rotation.x=Math.sin(p)*.5,h.castShadow=!0,e.add(h)}t.push({x:4,z:-2.7,r:.3})}let d={x0:-s/2+.5,x1:s/2-.5,z0:-r/2+.6,z1:r/2-.2};return{group:e,colliders:t,boxes:i,bounds:d,update(){},exit:{x:0,z:r/2-.9}}}function dn(n,e,t,i,s,r,a){let o=new K(new qe(e,t),new _e({map:i(),roughness:1}));return o.rotation.x=-Math.PI/2,o.position.set(r||0,0,a||0),o.receiveShadow=!0,n.add(o),o}function Lt(n,e,t,i,s,r){let a=new K(new qe(i,s),new _e({map:r(),roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));return a.rotation.x=-Math.PI/2,a.position.set(e,.02,t),a.receiveShadow=!0,n.add(a),a}function Yt(n,e,t,i,s,r){return new K(new qe(t,i),new _e({map:Xi([{t:n,s:70,y:e?.38:.5},...e?[{t:e,s:34,y:.75,b:!1,c:"#f1c40f"}]:[]],1024,Math.round(1024*i/t),s||"#1f7a4d",r||"#ffffff"),roughness:.6}))}function Yi(n,e,t){Fe(n,.06,.08,2.2,B("#5a3a22",.9),e,1.1,t,8);let i=Yt("\u21A9 Retour au quartier","",2.4,.6,"#6b4a2a","#ffffff");i.position.set(e,2.2,t+.1),n.add(i)}function Tf(){let n=new Ue,e=[],t=[],i=Ut(41);dn(n,1400,1400,nn,1,0,0),Lt(n,0,-4,64,36,ft),Lt(n,0,8,6,16,ft);let s=["#c0392b","#e0a526","#2e86de","#1f7a4d","#8e44ad","#e67e22"],r=["#e68a00","#c0392b","#6bbf3a","#e0a526","#d35400","#f1c40f"];function a(p,v,g,m){let _=new Ue;_.position.set(p,0,v),_.rotation.y=m||0;let x=B("#6b4226",.9);[[-1.4,-.9],[1.4,-.9],[-1.4,.9],[1.4,.9]].forEach(b=>Fe(_,.05,.05,2.3,x,b[0],1.15,b[1],8));let M=new K(new Mn(2.3,.75,10),B(s[g%6],.85,{side:ot}));M.position.y=2.55,M.castShadow=!0,_.add(M),H(_,2.9,.12,1.1,new _e({map:vn("#a87445"),roughness:.9}),0,.85,.5),H(_,2.9,.8,.9,B("#8a5a32",.9),0,.4,.5);let C=[],S=r[g%6];for(let b=0;b<14;b++){let N=new rt(.12,10,8);N.translate(-1.2+b%7*.4+Math.floor(b/7)%2*.2,1+Math.floor(b/7)*.2,.35+b*.37%.5),C.push(N)}let w=new K(Cn(C),B(S,.5));w.castShadow=!0,_.add(w);let O=[];for(let b=0;b<8;b++){let N=new rt(.1,8,6);N.translate(-1.1+b*.3,1,.9),O.push(N)}let y=new K(Cn(O),B(r[(g+2)%6],.5));_.add(y),n.add(_),t.push({x0:p-1.6,x1:p+1.6,z0:v-.2,z1:v+1.5})}let o=0;[-18,-9,0,9,18].forEach(p=>{[-14,-9].forEach((v,g)=>{Math.abs(p)<1&&g===0||Math.abs(p+6)<1&&v===-9||Math.abs(p-8)<1&&v===-9||a(p,v,o++,Math.PI)})});let l=new _e({map:vn("#b0824a"),roughness:.9});for(let p=0;p<22;p++){let v=-26+i()*52,g=-18+i()*20;Math.abs(v)<2.5&&g>-4||H(n,.7,.5,.5,l,v,.25,g,i()*3)}let c=B("#cdb488",.95);for(let p=0;p<16;p++){let v=-24+i()*48,g=-16+i()*18,m=new K(new rt(.34,10,8),c);m.scale.set(1,.7,.8),m.position.set(v,.22,g),m.castShadow=!0,n.add(m)}[-3,3].forEach(p=>H(n,.5,4.2,.5,new _e({map:bs([198,108,62]),roughness:.9}),p,2.1,10.5));let u=Yt("GRAND MARCH\xC9","Kinshasa",6.6,1.4,"#c0392b","#fff");u.position.set(0,4.5,10.5),n.add(u),H(n,6.8,.35,.5,B("#5a3a22"),0,3.9,10.5),e.push({x:-3,z:10.5,r:.5},{x:3,z:10.5,r:.5});let d=ji({kind:"mango",seed:77,fruits:!0,trunk:3.2});d.position.set(0,0,-1.5),d.scale.setScalar(1.3),n.add(d),e.push({x:0,z:-1.5,r:.8});let f=["#e9d9b8","#cfe3d6","#e7c9b0","#d9d4e8"];for(let p=0;p<7;p++){let v=-30+p*10,g=8+i()*2,m=3.4+i()*2.4;H(n,g,m,6,B(f[p%4],.95),v,m/2,-26),Jn(n,v,m,-26,g,6,1.1,new _e({map:si(),roughness:.55,metalness:.35}),B("#e9dfca"),.6);for(let _=0;_<3;_++)H(n,1,1.2,.1,B("#9fc6dd",.2,{emissive:5088985,emissiveIntensity:.25}),v-2.5+_*2.5,m*.55,-22.95)}t.push({x0:-36,x1:36,z0:-29.5,z1:-22.5}),[[-33,-5],[33,-6],[-34,5],[34,4],[-28,10],[28,11]].forEach((p,v)=>sn(n,p[0],p[1],1+v%3*.15,!1,null,e,v%2===0));let h=hn({area:[-40,40,-24,16],count:9e3,seed:8,exclude:(p,v)=>Math.abs(p)<32&&v>-20&&v<4||Math.abs(p)<3.5&&v>4});return n.add(h),Yi(n,-3.8,9.6),e.push({x:-3.8,z:9.6,r:.3}),{group:n,colliders:e,boxes:t,bounds:{x0:-32,x1:32,z0:-20,z1:12.5},update(p,v){h.userData.update(v)},dyn:{},exit:{x:0,z:9}}}function ha(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256),i=new Float32Array(256*256),s=Ut(3);for(let a=0;a<256;a++)for(let o=0;o<256;o++)i[a*256+o]=Math.sin(o*.11+Math.sin(a*.05)*3)*.5+Math.sin(a*.09+o*.03)*.4+Math.sin((o+a)*.07)*.3+Math.sin(o*.23-a*.17)*.15;for(let a=0;a<256;a++)for(let o=0;o<256;o++){let l=i[a*256+(o+255&255)],c=i[a*256+(o+1&255)],u=i[(a+255&255)*256+o],d=i[(a+1&255)*256+o],f=(l-c)*2.2,h=(u-d)*2.2,p=1,v=Math.hypot(f,h,p),g=(a*256+o)*4;t.data[g]=(f/v*.5+.5)*255,t.data[g+1]=(h/v*.5+.5)*255,t.data[g+2]=(p/v*.5+.5)*255,t.data[g+3]=255}e.putImageData(t,0,0);let r=new jt(n);return r.wrapS=r.wrapT=Wt,r.repeat.set(60,60),r}function wf(){let n=new Ue,e=[],t=[],i=Ut(55);dn(n,1400,60,nn,1,0,22);let s=new K(new qe(1400,10),new _e({color:14270602,roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-3.5),s.receiveShadow=!0,n.add(s),Lt(n,0,4,60,5,ft);let r=ha(),a=new Bn({color:1924984,roughness:.06,metalness:0,normalMap:r,normalScale:new fe(.55,.55),envMapIntensity:1.6,clearcoat:.6,clearcoatRoughness:.08,transparent:!0,opacity:.96}),o=new K(new qe(1400,520),a);o.rotation.x=-Math.PI/2,o.position.set(0,-.12,-270),n.add(o);let l=new _e({map:vn("#8a6a45"),roughness:.9});for(let x=0;x<20;x++)H(n,2.4,.1,.42,l,6,.55,-4.5-x*.46);[-1,1].forEach(x=>{for(let M=0;M<8;M++)Fe(n,.09,.09,1.6,B("#5a4128",.95),6+x*1.3,.1,-4.5-M*1.2,8)}),t.push({x0:4.6,x1:7.4,z0:-14,z1:-4}),e.push({x:6,z:-14,r:.2});let c=new tn(.55,.4,5.2,16,1,!0,0,Math.PI);c.rotateZ(Math.PI/2),c.rotateY(Math.PI/2);let u=new K(c,new _e({map:vn("#7a5230"),roughness:.9,side:ot}));u.rotation.set(0,Math.PI/2,Math.PI),u.position.set(-5.5,.1,-4.6),u.scale.set(1,.7,1),u.castShadow=!0,n.add(u);let d=u.clone();d.position.set(-9.5,.1,-6.5),d.rotation.y=Math.PI/2+.5,n.add(d),[[-3,3],[-6,3]].forEach(x=>{Fe(n,.05,.05,2.4,B("#5a4128"),x[0],1.2,x[1],6)}),H(n,3.2,.04,.04,B("#5a4128"),-4.5,2.2,3);let f=new K(new qe(3,1.4),new _e({color:8227434,roughness:1,transparent:!0,opacity:.7,side:ot,wireframe:!1}));f.position.set(-4.5,1.5,3),n.add(f),[[-18,5],[-14,8],[-22,9],[16,6],[20,9],[24,5],[14,11],[-16,12],[22,12]].forEach((x,M)=>sn(n,x[0],x[1],1+M%3*.12,!1,null,e,M%3!==1));for(let x=0;x<10;x++){let M=ri(x+11,.7+i()*.6);M.position.set(-24+i()*48,0,-1+i()*8),n.add(M)}let h=new Mn(.03,1.3,4);h.translate(0,.65,0);let p=new $n(h,B("#6f8a3e",.9),1400),v=new nt;for(let x=0;x<1400;x++){let M=-30+i()*60,C=-8.5+i()*4;v.compose(new P(M,0,C),new en().setFromEuler(new Yn((i()-.5)*.3,0,(i()-.5)*.3)),new P(1,.7+i()*.8,1)),p.setMatrixAt(x,v)}n.add(p);let g=hn({area:[-34,34,-1,14],count:9e3,seed:6,exclude:(x,M)=>M>2&&M<6.5&&Math.abs(x)<30||M<-1.5});n.add(g);for(let x=0;x<26;x++){let M=-120+x*9+i()*4,C=6+i()*5,S=new K(new Si(5+i()*3,1),new _e({color:3107388,roughness:1,flatShading:!0}));S.position.set(M,C*.45,-175+i()*10),S.scale.y=.8,n.add(S)}let m=[];for(let x=0;x<9;x++){let M=6+i()*5,C=14+i()*26,S=H(n,M,C,6,B("#b9c6d0",.8),-50+x*13,C/2,-170);m.push(S)}let _=x=>{a.normalMap.offset.x=x*.012%1,a.normalMap.offset.y=x*.007%1};return Yi(n,-3.8,10.4),e.push({x:-3.8,z:10.4,r:.3}),{group:n,colliders:e,boxes:t,bounds:{x0:-30,x1:30,z0:-13,z1:13},update(x,M){_(M),g.userData.update(M)},dyn:{},exit:{x:0,z:9}}}function Af(){let n=new Ue,e=[],t=[],i=Ut(61);dn(n,1400,1400,nn,1,0,0),Lt(n,0,-2,30,18,ft),Lt(n,0,8,6,14,ft);let s=new _e({map:kn("#f4efe6"),roughness:.95}),r=new _e({map:si(),roughness:.5,metalness:.4,color:4880552});H(n,20,3.6,7,s,0,1.8,-10),Jn(n,0,3.6,-10,20,7,1.8,r,B("#f4efe6"),.8),H(n,20.4,.3,.4,B("#e0d6c4"),0,.15,-6.3);for(let p=0;p<7;p++)Fe(n,.13,.13,3,B("#f7f2e8"),-9+p*3,1.5,-5.2,10);H(n,20.4,.22,2.2,B("#cfc6b2"),0,3.1,-5.6),H(n,20.4,.1,2.4,r,0,3.3,-5.5),H(n,20.4,.2,2.2,B("#d9d0bc"),0,.1,-5.6),[-7.5,-4,4,7.5].forEach(p=>{H(n,1.6,1.3,.1,B("#cfe9f7",.15,{emissive:6006742,emissiveIntensity:.3}),p,1.9,-6.45),H(n,1.8,.1,.15,B("#f2f2f2"),p,1.2,-6.42)}),H(n,2.4,2.5,.12,B("#6fa4c8",.7),0,1.25,-6.45),H(n,.1,2.5,.14,B("#fff"),0,1.25,-6.4);let a=Yt("CENTRE DE SANT\xC9","",7.5,1,"#ffffff","#c0392b");a.position.set(0,3.9,-6.4),n.add(a);let o=new Ue;H(o,.9,.28,.1,B("#c0392b",.6),0,0,0),H(o,.28,.9,.1,B("#c0392b",.6),0,0,0),o.position.set(-5.2,3.9,-6.35),n.add(o);let l=o.clone();l.position.x=5.2,n.add(l),t.push({x0:-10.5,x1:10.5,z0:-13.8,z1:-4.6});for(let p=0;p<3;p++){let v=-7+p*3.8;H(n,2.2,.1,.5,B("#7a4a26"),v,.5,-4.8),H(n,.1,.5,.4,B("#4a2f1b"),v-1,.25,-4.8),H(n,.1,.5,.4,B("#4a2f1b"),v+1,.25,-4.8),e.push({x:v,z:-4.8,r:1})}let c=new Ue;c.position.set(12,0,-2),c.rotation.y=-.5,H(c,2.2,1.9,4.2,B("#f2f2f2",.4),0,1.25,0),H(c,2.1,1.2,1.4,B("#f2f2f2",.4),0,.95,2.6),H(c,1.9,.7,.05,B("#9fc6dd",.1),0,1.5,3.32),H(c,2.22,.3,4.22,B("#c0392b",.6),0,.85,0),[[-1,1.4],[1,1.4],[-1,-1.4],[1,-1.4]].forEach(p=>Fe(c,.38,.38,.3,B("#222",.9),p[0]*1.05,.38,p[1],16).rotation.z=Math.PI/2);let u=new Ue;H(u,.7,.2,.05,B("#c0392b"),0,0,0),H(u,.2,.7,.05,B("#c0392b"),0,0,0),u.position.set(0,1.7,2.1),c.add(u),n.add(c),e.push({x:12,z:-2,r:2.4},{x:11,z:-.5,r:1.4},{x:13,z:-3.8,r:1.4});let d=Fe(n,.06,.06,2.6,B("#555",.5,{metalness:.4}),-12,1.3,2,8),f=Yt("LAVE-TOI LES MAINS","avec du savon",3.4,1.9,"#2e86de","#fff");f.position.set(-12,2.8,2.05),n.add(f),e.push({x:-12,z:2,r:.4}),[[-16,-4],[16,-6],[-15,6],[15,5],[-8,10],[8,11]].forEach((p,v)=>sn(n,p[0],p[1],1+v%3*.12,!1,null,e,v%2===1));for(let p=0;p<14;p++){let v=ri(p+31,.6+i()*.5),g=-18+i()*36,m=-14+i()*24;Math.abs(g)<10&&m<2||(v.position.set(g,0,m),n.add(v))}let h=hn({area:[-30,30,-14,14],count:14e3,seed:12,exclude:(p,v)=>Math.abs(p)<15&&v>-13&&v<5||Math.abs(p)<3.5&&v>4||Math.abs(p-12)<3&&Math.abs(v+2)<3.6});return n.add(h),Yi(n,-3.8,10),e.push({x:-3.8,z:10,r:.3}),{group:n,colliders:e,boxes:t,bounds:{x0:-24,x1:24,z0:-13,z1:12.5},update(p,v){h.userData.update(v)},dyn:{},exit:{x:0,z:9}}}function Rf(){let n=new Ue,e=[],t=[],i=Ut(71);dn(n,1400,1400,nn,1,0,0),Lt(n,0,-4,5,22,ft),Lt(n,0,6,5,16,ft);let s=new _e({map:kn("#efe8da"),roughness:.9}),r=B("#cfc6b2",.9);H(n,30,7.5,9,s,0,3.75,-14),H(n,30.8,.5,9.8,r,0,7.7,-14);for(let d=0;d<5;d++)H(n,14,.2,.6,r,0,.1+d*.2,-7-d*.5);for(let d=0;d<8;d++)Fe(n,.45,.5,6.2,s,-8.4+d*2.4,3.4,-9.4,18);H(n,20.6,.9,1.6,r,0,6.65,-9.4);let a=new Vi;a.moveTo(-10.4,0),a.lineTo(10.4,0),a.lineTo(0,2.4),a.closePath();let o=new K(new Oo(a,{depth:.6,bevelEnabled:!1}),s);o.position.set(0,7.1,-10),o.castShadow=!0,n.add(o);let l=Yt("UNIVERSIT\xC9","Facult\xE9 de droit",9,1.2,"#0b3a6b","#ffffff");l.position.set(0,6.6,-8.55),n.add(l),H(n,3,3.6,.15,B("#5a3a22",.7),0,1.8,-9.45),[-11,-7,7,11].forEach(d=>{H(n,1.6,2.4,.12,B("#cfe9f7",.15,{emissive:6006742,emissiveIntensity:.3}),d,3.2,-9.45),H(n,1.9,.14,.2,r,d,1.95,-9.4)}),t.push({x0:-15,x1:15,z0:-18.6,z1:-9});let c=new _e({color:13936936,roughness:.28,metalness:.85});H(n,2.2,.5,2.2,r,0,.25,2.5),H(n,1.4,1.1,1.4,s,0,1.05,2.5),Fe(n,.08,.1,2.4,c,0,3.1,2.5,12),H(n,3,.08,.08,c,0,4.25,2.5),[-1.45,1.45].forEach(d=>{let f=new K(new tn(.55,.15,.14,18),c);f.position.set(d,3.15,2.5),n.add(f),[[-.4,0],[.4,0],[0,.4],[0,-.4]].forEach(h=>{let p=Fe(n,.01,.01,1.1,c,d+h[0]*.7,3.7,2.5+h[1]*.7,4)})}),e.push({x:0,z:2.5,r:1.4}),[-7,7].forEach(d=>{Fe(n,.05,.07,7,B("#999",.4,{metalness:.5}),d,3.5,-4,8);let f=new K(new qe(1.6,1.05),new _e({map:Ti(),side:ot,roughness:.8}));f.position.set(d+.85,6.3,-4),n.add(f),e.push({x:d,z:-4,r:.3})});for(let d=0;d<4;d++){let f=[-12,-12,12,12][d],h=[-3,3,-3,3][d];H(n,2,.1,.5,B("#7a4a26"),f,.5,h),H(n,.1,.5,.4,B("#4a2f1b"),f-.9,.25,h),H(n,.1,.5,.4,B("#4a2f1b"),f+.9,.25,h),e.push({x:f,z:h,r:1})}[[-20,-6],[20,-6],[-19,6],[19,7],[-8,11],[8,11],[-24,-1],[24,0]].forEach((d,f)=>sn(n,d[0],d[1],1+f%3*.12,!1,null,e,f%2===0));for(let d=0;d<14;d++){let f=ri(d+51,.6+i()*.4),h=-22+i()*44,p=-8+i()*20;Math.abs(h)<4||(f.position.set(h,0,p),n.add(f))}let u=hn({area:[-34,34,-10,16],count:16e3,seed:14,exclude:(d,f)=>Math.abs(d)<3.2&&f>-12||f<-8.6&&Math.abs(d)<16});return n.add(u),Yi(n,-3.8,10.4),e.push({x:-3.8,z:10.4,r:.3}),{group:n,colliders:e,boxes:t,bounds:{x0:-28,x1:28,z0:-8.2,z1:12.5},update(d,f){u.userData.update(f)},dyn:{},exit:{x:0,z:9}}}var Cf=()=>new _e({map:kn("#efe8da"),roughness:.9}),vu=()=>new _e({map:si(),roughness:.55,metalness:.35}),my=()=>new _e({map:bs([198,108,62]),roughness:.9}),bn=n=>new _e({map:vn(n||"#9a6a3f"),roughness:.88}),_r=()=>B("#9fc6dd",.12,{emissive:5088985,emissiveIntensity:.25,metalness:.2});function Zo(n,e,t,i,s){let r=new Ue;r.position.set(e,0,t),r.rotation.y=i||0,H(r,2,.1,.5,B("#7a4a26",.9),0,.5,0),H(r,.1,.5,.42,B("#4a2f1b"),-.9,.25,0),H(r,.1,.5,.42,B("#4a2f1b"),.9,.25,0),n.add(r),s&&s.push({x:e,z:t,r:1})}function da(n,e,t,i){return Yi(n,i.exitX===void 0?-3.8:i.exitX,i.exitZ),e.push({x:i.exitX===void 0?-3.8:i.exitX,z:i.exitZ,r:.3}),Object.assign({group:n,colliders:e,boxes:t,dyn:{},exit:{x:0,z:i.exitZ-1}},i)}function Pf(){let n=new Ue,e=[],t=[],i=Ut(101);dn(n,1400,1400,nn,1,0,0),Lt(n,0,-3,26,16,ft),Lt(n,0,8,5,16,ft),H(n,24,6.4,8,Cf(),0,3.2,-15),H(n,24.6,.5,8.6,B("#cfc6b2"),0,6.6,-15);for(let p=0;p<6;p++)H(n,1.6,2.4,.1,_r(),-9.5+p*3.8,3.4,-10.95),H(n,1.9,.12,.2,B("#e7dcc5"),-9.5+p*3.8,2.1,-10.9);H(n,3,3.4,.15,_r(),0,1.7,-10.95),H(n,.12,3.4,.2,B("#5a3a22"),0,1.7,-10.9);let s=Yt("BIBLIOTH\xC8QUE","Lire, c\u2019est grandir",10,1.5,"#6a2c91","#fff");s.position.set(0,5.6,-10.9),n.add(s),t.push({x0:-12.5,x1:12.5,z0:-19.5,z1:-10.7});let r=new _e({color:16117728,roughness:.85}),a=B("#7a2a2a",.7),o=new Ue;o.position.set(0,0,-1),H(o,3.4,.2,2.2,a,0,.25,0);let l=H(o,1.6,.12,2,r,-.85,.6,0);l.rotation.z=.2;let c=H(o,1.6,.12,2,r,.85,.6,0);c.rotation.z=-.2,H(o,3.8,.5,2.6,B("#cfc6b2"),0,.25,0).position.y=.1,n.add(o),e.push({x:0,z:-1,r:2});let u=ji({kind:"mango",seed:12,fruits:!1,trunk:3.4});u.position.set(7,0,-3),u.scale.setScalar(1.35),n.add(u),e.push({x:7,z:-3,r:.8}),Zo(n,5.4,-1.4,.5,e),Zo(n,9,-1.6,-.5,e),Zo(n,-6,-1,0,e),Zo(n,-8.5,-4,1.4,e);let d=new Ue;d.position.set(-13,0,-2),Fe(d,.06,.07,1.3,B("#5a3a22"),0,.65,0,6),H(d,.7,.6,.5,bn("#b0824a"),0,1.45,0);let f=H(d,.9,.1,.7,B("#a8301e"),0,1.85,0);n.add(d),e.push({x:-13,z:-2,r:.5}),[[-20,-4],[20,-5],[-18,6],[19,7],[-24,0],[24,1]].forEach((p,v)=>sn(n,p[0],p[1],1+v%3*.12,!1,null,e,v%2===1));for(let p=0;p<16;p++){let v=ri(p+21,.6+i()*.5),g=-24+i()*48,m=-12+i()*22;Math.abs(g)<8&&m<2||(v.position.set(g,0,m),n.add(v))}let h=hn({area:[-34,34,-14,14],count:12e3,seed:21,exclude:(p,v)=>Math.abs(p)<13&&v>-12&&v<5||Math.abs(p)<3.2&&v>4});return n.add(h),da(n,e,t,{bounds:{x0:-27,x1:27,z0:-9.5,z1:12.5},update(p,v){h.userData.update(v)},exitZ:10.4,sky:{elev:40,azim:200}})}function Lf(){let n=new Ue,e=[],t=[],i=Ut(102);dn(n,1400,1400,nn,1,0,0);let s=new _e({color:3422011,roughness:.95}),r=new K(new qe(1400,8),s);r.rotation.x=-Math.PI/2,r.position.set(0,.02,-3),r.receiveShadow=!0,n.add(r),[-7.4,.8].forEach(S=>{let w=new K(new dt(1400,.18,3),B("#b9b3a8",.95));w.position.set(0,.09,S),w.receiveShadow=!0,n.add(w)});let a=B("#f2f2f2",.8),o=[];for(let S=-30;S<30;S++){let w=new dt(2,.01,.18);w.translate(S*3,.04,-3),o.push(w)}n.add(new K(Cn(o),a));let l=[];for(let S=0;S<8;S++){let w=new dt(.5,.01,3.6);w.translate(-6+S*.9,.04,-3),l.push(w)}n.add(new K(Cn(l),a));let c=new Ue;c.position.set(-8.2,0,.9),Fe(c,.06,.08,3.4,B("#444",.5,{metalness:.4}),0,1.7,0,8);let u=H(c,.36,1.1,.3,B("#222"),0,3.5,0),d=new K(new rt(.12,12,10),new _e({color:3342336,emissive:16720384,emissiveIntensity:1.6}));d.position.set(0,3.8,.16);let f=new K(new rt(.12,12,10),new _e({color:13056,emissive:65348,emissiveIntensity:.1}));f.position.set(0,3.2,.16),c.add(d),c.add(f),n.add(c),e.push({x:-8.2,z:.9,r:.3});let h=new Ue;h.position.set(-12,0,-6.4),[[-1.6,-.5],[1.6,-.5],[-1.6,.5],[1.6,.5]].forEach(S=>Fe(h,.05,.05,2.5,B("#444",.5,{metalness:.5}),S[0],1.25,S[1],8)),H(h,3.6,.12,1.5,vu(),0,2.55,0),H(h,3,.08,.5,B("#7a4a26"),0,.55,.35);let p=Yt("ARR\xCAT DE BUS","",1.6,.5,"#2e86de","#fff");p.position.set(0,2.2,-.55),h.add(p),n.add(h),e.push({x:-12,z:-6.4,r:1.8});let v=new Ue;v.position.set(9,0,-5.4),H(v,9,2.9,2.7,B("#e0a526",.4),0,1.7,0),H(v,9.02,.9,2.72,B("#1f5fa8",.4),0,.7,0);for(let S=0;S<6;S++)H(v,1.1,.9,2.76,_r(),-3.6+S*1.45,2.1,0);H(v,.05,1.2,2.2,_r(),4.52,2,0),[[-3,1.35],[3,1.35],[-3,-1.35],[3,-1.35]].forEach(S=>{let w=Fe(v,.55,.55,.35,B("#1a1a1a",.9),S[0],.55,S[1],18);w.rotation.x=Math.PI/2});let g=Yt("TRANSCO","Kinshasa",3.6,.9,"#1f5fa8","#f1c40f");g.position.set(0,2.95,1.37),v.add(g),n.add(v),e.push({x:6,z:-5.4,r:2.2},{x:9,z:-5.4,r:2.2},{x:12,z:-5.4,r:2.2});let m=[];[["#c0392b",-1],["#2e86de",1],["#f2f2f2",-1]].forEach((S,w)=>{let O=new Ue;H(O,4,1,1.8,B(S[0],.35),0,.75,0),H(O,2.2,.8,1.7,_r(),-.2,1.5,0),[[-1.3,.95],[1.3,.95],[-1.3,-.95],[1.3,-.95]].forEach(y=>{let b=Fe(O,.38,.38,.28,B("#1a1a1a",.9),y[0],.38,y[1],14);b.rotation.x=Math.PI/2}),O.position.set(-40+w*25,0,-3+(S[1]>0?1.5:-1.5)),O.rotation.y=S[1]>0?0:Math.PI,O.userData.dir=S[1]>0?1:-1,n.add(O),m.push(O)}),H(n,18,4.6,7,my(),-6,2.3,-15),Jn(n,-6,4.6,-15,18,7,1.6,vu(),B("#e9dfca"),.7);let _=Yt("GARE ROUTI\xC8RE","Kinshasa \u2014 Matadi \u2014 Lubumbashi",8,1.2,"#1f5fa8","#fff");_.position.set(-6,3.4,-11.45),n.add(_),H(n,3,3,.12,B("#5a3a22"),-6,1.5,-11.48),t.push({x0:-15.5,x1:3.5,z0:-18.8,z1:-11.4});let x=(S,w,O)=>{Fe(n,.04,.04,2.4,B("#777",.5,{metalness:.6}),S,1.2,w,6);let y=Fe(n,.4,.4,.05,B(O,.5),S,2.5,w,20);y.rotation.x=Math.PI/2,e.push({x:S,z:w,r:.25})};x(-4.4,.9,"#c0392b"),x(2.8,.9,"#2e86de"),x(15,.9,"#e0a526"),[-20,-15,-10,10,16,20,24].forEach((S,w)=>sn(n,S,3.6+w%2*.5,.9+w%3*.1,!1,null,e,w%2===0));let M=hn({area:[-34,34,2,14],count:9e3,seed:22,exclude:(S,w)=>w<2.4||Math.abs(S)<5&&w>2});n.add(M);let C=()=>0;return da(n,e,t,{bounds:{x0:-28,x1:28,z0:-10,z1:12.5},exitZ:10.4,sky:{elev:46,azim:150},update(S,w){M.userData.update(w),m.forEach(y=>{y.position.x+=y.userData.dir*S*7,y.position.x>45&&(y.position.x=-45),y.position.x<-45&&(y.position.x=45)});let O=w%10;d.material.emissiveIntensity=O<5?1.6:.1,f.material.emissiveIntensity=O<5?.1:1.6}})}function If(){let n=new Ue,e=[],t=[],i=Ut(103);dn(n,1400,1400,nn,1,0,0),Lt(n,0,8,5,16,ft),Lt(n,0,-4,5,14,ft);let s=new _e({map:ft(),roughness:1,color:8017208});[[-14,-9,14,9],[14,-9,14,9]].forEach(f=>{let h=new K(new qe(f[2],f[3]),s);h.rotation.x=-Math.PI/2,h.position.set(f[0],.03,f[1]),h.receiveShadow=!0,n.add(h)});let r=f=>{let h=[],p=new tn(.025,.035,f==="maize"?1.8:1.3,5);p.translate(0,f==="maize"?.9:.65,0),h.push(p);for(let v=0;v<(f==="maize"?6:5);v++){let g=new qe(.1,f==="maize"?.9:.55,1,3);g.translate(0,.3,0),g.rotateX(-.9),g.translate(0,f==="maize"?.4+v*.22:.7+v*.12,0),g.rotateY(v*1.25),h.push(g)}return Cn(h)};[["cassava",-14,-9],["maize",14,-9]].forEach(f=>{let h=f[0],p=r(h),v=new $n(p,B(h==="maize"?"#5d8a2e":"#3e7d34",.85,{side:ot}),420),g=new nt,m=0;for(let _=0;_<10;_++)for(let x=0;x<26&&m<420;x++){let M=f[1]-6+x*.48,C=f[2]-3.6+_*.8+i()*.1;g.compose(new P(M,0,C),new en().setFromEuler(new Yn(0,i()*6,(i()-.5)*.15)),new P(.9+i()*.3,.9+i()*.35,.9+i()*.3)),v.setMatrixAt(m++,g)}v.castShadow=!0,n.add(v)}),H(n,10,4.6,7,bn("#8a4a2a"),-3,2.3,-19),Jn(n,-3,4.6,-19,10,7,2,vu(),bn("#8a4a2a"),.7),H(n,3.4,3.4,.15,bn("#5a3a22"),-3,1.7,-15.45),t.push({x0:-8.2,x1:2.2,z0:-22.8,z1:-15.4});for(let f=-24;f<=24;f+=2)Fe(n,.07,.07,1.3,bn("#7a5a35"),f,.65,-3,6);H(n,48,.07,.07,bn("#7a5a35"),0,1.05,-3),H(n,48,.07,.07,bn("#7a5a35"),0,.6,-3);let a=new Ue;a.position.set(13,0,-3.8),Fe(a,.04,.05,2.2,bn("#6b4226"),0,1.1,0,6),H(a,1.6,.06,.06,bn("#6b4226"),0,1.6,0),H(a,.5,.8,.3,B("#c0392b",.9),0,1.4,0);let o=new K(new rt(.17,12,10),B("#d9b46a",.9));o.position.y=2,a.add(o);let l=new K(new Mn(.3,.35,12),B("#7a5a35",.9));l.position.y=2.25,a.add(l),n.add(a),e.push({x:13,z:-3.8,r:.35});let c=[];[[-8,2.5,"#f2f2f2"],[-3.5,4.5,"#7a4a2a"],[6,3.2,"#d9b48a"]].forEach((f,h)=>{let p=new Ue;p.position.set(f[0],0,f[1]),p.rotation.y=i()*6,H(p,1.9,.9,.8,B(f[2],.85),0,1.1,0),[[-.7,.28],[.7,.28],[-.7,-.28],[.7,-.28]].forEach(g=>H(p,.14,.8,.14,B(f[2],.85),g[0],.4,g[1]));let v=new Ue;v.position.set(1.1,1.35,0),H(v,.5,.42,.4,B(f[2],.85),0,0,0),H(v,.14,.14,.5,B("#2a1a12"),.28,-.12,0),[-.18,.18].forEach(g=>H(v,.06,.2,.06,B("#e9dfca"),-.05,.28,g)),p.add(v),p.userData.head=v,H(p,.08,.6,.08,B("#2a1a12"),-1,.9,0),n.add(p),c.push(p),e.push({x:f[0],z:f[1],r:1})}),[[16,4],[18,5.2]].forEach(f=>{let h=Fe(n,.8,.8,1.1,B("#d4b36a",1),f[0],.55,f[1],14);e.push({x:f[0],z:f[1],r:.9})}),H(n,2.4,.5,.7,bn("#6a4a2a"),-14,.25,5),e.push({x:-14,z:5,r:1.3});let u=ji({kind:"mango",seed:31,fruits:!0,trunk:3.2});u.position.set(-20,0,3),u.scale.setScalar(1.3),n.add(u),e.push({x:-20,z:3,r:.8}),[[20,6],[-24,-6],[24,-14],[-18,10],[18,11]].forEach((f,h)=>sn(n,f[0],f[1],1+h%3*.12,!1,null,e,h%2===0));let d=hn({area:[-34,34,-3,14],count:14e3,seed:23,exclude:(f,h)=>Math.abs(f)<3&&h>-4});return n.add(d),da(n,e,t,{bounds:{x0:-26,x1:26,z0:-2.5,z1:12.5},exitZ:10.4,sky:{elev:44,azim:215},update(f,h){d.userData.update(h),c.forEach((p,v)=>{p.userData.head.rotation.z=-.35+Math.sin(h*.7+v*2)*.25})}})}function Df(){let n=new Ue,e=[],t=[],i=Ut(104);dn(n,1400,1400,nn,1,0,0);let s=new K(new qe(90,90),new _e({color:3231786,roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-8),s.receiveShadow=!0,n.add(s),Lt(n,0,3,5,22,ft),Lt(n,0,-3,14,9,ft);for(let h=0;h<46;h++){let p=i()*Math.PI*2,v=11+i()*20,g=Math.cos(p)*v*1.2,m=-4+Math.sin(p)*v*.9;if(Math.abs(g)<7&&m>-8&&m<12)continue;let _=ji({kind:h%3?"leafy":"mango",seed:h+40,fruits:!1,trunk:4.6+i()*2,cards:70});_.position.set(g,0,m),_.scale.setScalar(1.5+i()*.9),_.rotation.y=i()*6,n.add(_),e.push({x:g,z:m,r:.9})}[[-12,6],[12,6],[-14,-9],[14,-10]].forEach((h,p)=>sn(n,h[0],h[1],1.1,!1,null,e,p%2===0));let r=[];for(let h=0;h<7;h++){let p=new qe(.35,1.4,1,2);p.translate(0,.7,0),p.rotateX(-.8),p.rotateY(h*.9),r.push(p)}let a=new $n(Cn(r),B("#3e7a35",.85,{side:ot}),360),o=new nt;for(let h=0;h<360;h++){let p=-30+i()*60,v=-20+i()*34;Math.abs(p)<3&&v>-6||(o.compose(new P(p,0,v),new en().setFromEuler(new Yn(0,i()*6,0)),new P(.8+i()*.8,.8+i()*.8,.8+i()*.8)),a.setMatrixAt(h,o))}a.receiveShadow=!0,n.add(a);for(let h=0;h<26;h++){let p=ri(h+61,.7+i()*.7),v=-28+i()*56,g=-18+i()*30;Math.abs(v)<5&&g>-6||(p.position.set(v,0,g),n.add(p))}[[-8,-2,.6],[9,-5,-.4],[-4,-9,1.2]].forEach(h=>{let p=Fe(n,.35,.4,4.2,B("#4a3820",.95),h[0],.35,h[1],10);p.rotation.z=Math.PI/2,p.rotation.y=h[2],e.push({x:h[0],z:h[1],r:1.2})});let l=ha();l.repeat.set(10,3);let c=new Bn({color:3107412,roughness:.08,normalMap:l,normalScale:new fe(.6,.6),envMapIntensity:1.2,transparent:!0,opacity:.93}),u=new K(new qe(60,2.6),c);u.rotation.x=-Math.PI/2,u.position.set(0,.04,-11.6),n.add(u),t.push({x0:-30,x1:30,z0:-13.2,z1:-10.2}),Fe(n,.07,.08,2.4,bn("#5a3a22"),4.8,1.2,2,8);let d=Yt("PARC NATIONAL","Ne laisse que tes pas",2.6,1.3,"#2f5f2a","#fff");d.position.set(4.8,2.5,2.07),n.add(d),e.push({x:4.8,z:2,r:.4}),H(n,5,2.8,4,bn("#7a4a2a"),-9,1.4,-3.5),Jn(n,-9,2.8,-3.5,5,4,1.1,new _e({map:ua(),roughness:1}),bn("#7a4a2a"),.5),H(n,1,1.9,.1,bn("#3a2418"),-9,.95,-1.45),t.push({x0:-11.7,x1:-6.3,z0:-5.7,z1:-1.3});let f=[];for(let h=0;h<7;h++){let p=new K(new tn(.15,1.6,16,12,1,!0),new Ct({color:16773824,transparent:!0,opacity:.06,depthWrite:!1,side:ot,blending:nr,fog:!1}));p.position.set(-10+h*3.4+i()*2,8,-2+i()*8),p.rotation.z=.32,p.rotation.x=-.15,n.add(p),f.push(p)}return da(n,e,t,{bounds:{x0:-22,x1:22,z0:-9.5,z1:12.5},exitZ:10.4,sky:{elev:52,azim:200,turb:2.2},fog:.011,update(h,p){l.offset.x=p*.03%1,f.forEach((v,g)=>{v.material.opacity=.045+Math.sin(p*.6+g)*.025})}})}function gy(n,e,t,i,s){let r=new Ue;r.position.set(e,1.9,t),r.scale.setScalar(i||1);let a=new K(new rt(.42,20,16),B(s||"#6b3f20",.7));a.scale.set(.75,1.1,.45),r.add(a),[-1,1].forEach(c=>{let u=new K(new rt(.07,10,8),B("#f1e7c8",.5));u.scale.set(1.4,.5,.6),u.position.set(c*.16,.12,.17),r.add(u)});let o=new K(new Mn(.07,.4,6),B(s||"#6b3f20",.7));o.position.set(0,-.02,.2),o.rotation.x=.3,r.add(o);let l=new K(new zn(.12,.03,6,12,Math.PI),B("#3a2010",.7));l.position.set(0,-.26,.16),l.rotation.z=Math.PI,r.add(l);for(let c=0;c<9;c++){let u=new K(new tn(.01,.02,.45,5),B("#c9a55a",.8)),d=c/9*Math.PI*2;u.position.set(Math.cos(d)*.3,.55+Math.sin(d)*.2,0),u.rotation.z=d-Math.PI/2,r.add(u)}return n.add(r),r}function Uf(){let n=new Ue,e=[],t=[],i=Ut(105);dn(n,1400,1400,nn,1,0,0);let s=new K(new qe(40,26),new _e({map:kn("#cbbfa8"),roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,.02,-3),s.receiveShadow=!0,n.add(s),Lt(n,0,8,5,16,ft);let r=Cf(),a=B("#cfc6b2",.9);H(n,28,7,9,r,0,3.5,-15),H(n,28.8,.5,9.8,a,0,7.2,-15);for(let d=0;d<4;d++)H(n,16-d*.4,.2,.6,a,0,.1+d*.2,-10.4+(3-d)*0-d*0);for(let d=0;d<4;d++){let f=H(n,16,.2,.6,a,0,.1+d*.2,-8.2-d*.55)}[-8,-4,4,8].forEach(d=>{H(n,2.4,4,.12,_r(),d,3.6,-10.45)}),H(n,4,4.4,.2,B("#3a2418",.7),0,2.2,-10.4);let o=Yt("MUS\xC9E NATIONAL","M\xE9moire et culture du Congo",11,1.5,"#7a1f1f","#fff");o.position.set(0,6.4,-10.4),n.add(o),[[-11,"#c0392b"],[11,"#2e86de"]].forEach(d=>{let f=new K(new qe(1.6,4.5),new _e({color:d[1],side:ot,roughness:.9}));f.position.set(d[0],4.2,-10.35),n.add(f)}),t.push({x0:-14.5,x1:14.5,z0:-19.8,z1:-7.2}),[[-10,-1.5,"#6b3f20"],[-6,-8,"#7a2a1a"],[6,-8,"#3f5a2a"],[10,-1.5,"#6b3f20"]].forEach((d,f)=>{H(n,1.3,1.3,1.3,a,d[0],.65,d[1]),Fe(n,.35,.4,.7,B("#4a2e18",.8),d[0],1.65,d[1],12);let h=gy(n,d[0],d[1],1,d[2]);h.position.y=2.45,e.push({x:d[0],z:d[1],r:1})}),[[-3,-3],[3,-4]].forEach(d=>{let f=Fe(n,.45,.35,1,B("#8a5a32",.8),d[0],.6,d[1],14);Fe(n,.46,.46,.06,B("#e9dfca",.8),d[0],1.1,d[1],14),e.push({x:d[0],z:d[1],r:.55})}),Fe(n,2.4,2.5,.5,a,0,.25,3,24);let l=Fe(n,2.1,2.1,.1,new Bn({color:2783898,roughness:.05,transparent:!0,opacity:.85}),0,.5,3,24);Fe(n,.25,.3,1.6,a,0,1.1,3,12),e.push({x:0,z:3,r:2.5});let c=new K(new qe(5,3),new _e({map:Ti(),roughness:.8,side:ot}));c.position.set(-16,3,-4),c.rotation.y=Math.PI/2,n.add(c),[[-20,-6],[20,-6],[-19,7],[19,7],[-24,0],[24,0]].forEach((d,f)=>sn(n,d[0],d[1],1+f%3*.12,!1,null,e,f%2===0));for(let d=0;d<14;d++){let f=ri(d+71,.6+i()*.4),h=-24+i()*48,p=-8+i()*20;Math.abs(h)<9&&p<6||Math.abs(h)<3||(f.position.set(h,0,p),n.add(f))}let u=hn({area:[-34,34,-8,14],count:9e3,seed:25,exclude:(d,f)=>Math.abs(d)<20&&f>-16&&f<4||Math.abs(d)<3.2&&f>3});return n.add(u),da(n,e,t,{bounds:{x0:-27,x1:27,z0:-9.5,z1:12.5},exitZ:10.4,sky:{elev:36,azim:230},update(d,f){u.userData.update(f)}})}var vy=()=>new _e({map:kn("#efe8da"),roughness:.9}),Ko=()=>new _e({map:si(),roughness:.55,metalness:.35}),Nf=()=>B("#9fc6dd",.12,{emissive:5088985,emissiveIntensity:.25,metalness:.2});function fa(n,e,t,i){return Yi(n,-3.8,i.exitZ),e.push({x:-3.8,z:i.exitZ,r:.3}),Object.assign({group:n,colliders:e,boxes:t,dyn:{},exit:{x:0,z:i.exitZ-1}},i)}function Ff(){let n=new Ue,e=[],t=[],i=Ut(111);dn(n,1400,1400,nn,1,0,0);let s=document.createElement("canvas");s.width=1024,s.height=640;let r=s.getContext("2d");for(let h=0;h<10;h++)r.fillStyle=h%2?"#3f8a35":"#478f3b",r.fillRect(h*102.4,0,103,640);r.strokeStyle="#f4f4f4",r.lineWidth=6,r.strokeRect(24,24,976,592),r.beginPath(),r.moveTo(512,24),r.lineTo(512,616),r.stroke(),r.beginPath(),r.arc(512,320,80,0,7),r.stroke(),r.strokeRect(24,170,150,300),r.strokeRect(850,170,150,300),r.strokeRect(24,240,60,160),r.strokeRect(940,240,60,160);let a=new jt(s);a.colorSpace=at,a.anisotropy=8;let o=new K(new qe(44,27.5),new _e({map:a,roughness:.95}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,-2),o.receiveShadow=!0,n.add(o),Lt(n,0,9,5,10,ft),[-1,1].forEach(h=>{let p=new Ue;p.position.set(h*22.2,0,-2);let v=B("#f5f5f5",.5);[-1.8,1.8].forEach(m=>Fe(p,.06,.06,2.4,v,0,1.2,m,8)),Fe(p,.06,.06,3.6,v,0,2.4,0,8).rotation.x=Math.PI/2;let g=new K(new qe(3.6,2.4),new Ct({color:16777215,transparent:!0,opacity:.22,side:ot,wireframe:!0}));g.rotation.y=Math.PI/2,g.position.set(h*1.2,1.2,0),p.add(g),n.add(p),e.push({x:h*22.2,z:-2,r:1})});let l=new K(new rt(.22,18,14),B("#f2f2f2",.45));l.position.set(1.5,.25,-1),l.castShadow=!0,n.add(l),((h,p)=>{let v=new Ue;v.position.set(0,0,h),v.rotation.y=p;for(let g=0;g<6;g++)H(v,46,.5,1.2,B(g%2?"#9aa0a6":"#b4bac0",.9),0,.25+g*.5,-g*1.1);for(let g=0;g<46;g+=2){let m=-22+g;for(let _=0;_<6;_++)i()>.35&&H(v,.5,.5,.4,B(["#c0392b","#2e86de","#f1c40f","#27ae60"][(g+_)%4],.8),m+i()*.6,.75+_*.5,-_*1.1+.2)}H(v,46,.2,8,Ko(),0,4.2,-3),[-22,22].forEach(g=>Fe(v,.12,.12,4.2,B("#666",.5,{metalness:.5}),g,2.1,0,8)),n.add(v)})(-20.5,0),t.push({x0:-24,x1:24,z0:-27,z1:-16});let u=[];[[-24,-8],[24,-8],[-24,8],[24,8]].forEach(h=>{Fe(n,.18,.25,13,B("#777",.5,{metalness:.5}),h[0],6.5,h[1],8),H(n,3,1.6,.3,B("#222",.5),h[0],13.2,h[1]).lookAt(0,0,-2),e.push({x:h[0],z:h[1],r:.4})});let d=Yt("KELAS FOOT","Fair-play \xB7 Respect \xB7 \xC9quipe",8,1,"#d35400","#fff");d.position.set(0,.6,-16.4),n.add(d),[-18,-6,6,18].forEach(h=>{Fe(n,.04,.04,5,B("#999"),h,2.5,-15.6,6);let p=new K(new qe(1.4,.9),new _e({map:Ti(),side:ot,roughness:.9}));p.position.set(h+.7,4.6,-15.6),n.add(p)}),[[-30,6],[30,6],[-30,-8],[30,-8]].forEach((h,p)=>sn(n,h[0],h[1],1.1,!1,null,e,p%2===0));let f=hn({area:[-36,36,-18,14],count:7e3,seed:26,exclude:(h,p)=>Math.abs(h)<23&&p>-16.5&&p<12||Math.abs(h)<3.2&&p>4});return n.add(f),fa(n,e,t,{bounds:{x0:-33,x1:33,z0:-14.5,z1:12.5},exitZ:10.4,sky:{elev:34,azim:250},update(h,p){f.userData.update(p),l.position.x=1.5+Math.sin(p*.8)*.08,l.rotation.z=p*.4}})}function Of(){let n=new Ue,e=[],t=[],i=Ut(112);dn(n,1400,1400,ft,1,0,0);let s=new _e({map:ft(),color:11888698,roughness:1});for(let c=0;c<5;c++){let u=60-c*8,d=new K(new dt(u,1.8,6),s);d.position.set(0,.9+c*1.8,-8-c*6),d.castShadow=d.receiveShadow=!0,d.material=new _e({color:new Ve().setHSL(.05+c*.005,.5,.42-c*.03),roughness:1}),n.add(d)}t.push({x0:-30,x1:30,z0:-12,z1:-9}),Lt(n,0,6,5,14,ft),[[-9,-2,"#2f7f6a"],[8,-3,"#6a7a9a"],[-5,2,"#a85a2a"],[12,2,"#2f7f6a"]].forEach((c,u)=>{let d=new K(new Mn(2.4,2.4,9),B(c[2],1));d.position.set(c[0],1.2,c[1]),d.castShadow=!0,n.add(d),e.push({x:c[0],z:c[1],r:2.1})}),[[-14,-5,.3],[16,-6,-.4]].forEach(c=>{let u=new Ue;u.position.set(c[0],0,c[1]),u.rotation.y=c[2],H(u,2.6,2.2,2.6,B("#e0a526",.45),2.2,1.6,0),H(u,1,1,2.2,Nf(),3.2,2.1,0),H(u,4.6,1.6,2.8,B("#e0a526",.5),-1,2.2,0).rotation.z=.06,[[3,1.4],[-.6,1.4],[-2.4,1.4],[3,-1.4],[-.6,-1.4],[-2.4,-1.4]].forEach(d=>{let f=Fe(u,.9,.9,.5,B("#1a1a1a",.95),d[0],.9,d[1],18);f.rotation.x=Math.PI/2}),n.add(u),e.push({x:c[0],z:c[1],r:3})});let r=new Ue;r.position.set(0,0,-6),[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]].forEach(c=>{let u=Fe(r,.1,.14,9,B("#3d4a52",.6,{metalness:.5}),c[0]*.8,4.5,c[1]*.8,6);u.rotation.z=c[0]*.04});for(let c=0;c<4;c++)H(r,2.6-c*.2,.1,.1,B("#3d4a52",.6,{metalness:.5}),0,1.5+c*2,1.1);let a=Fe(r,1.2,1.2,.35,B("#2a2a2a",.6,{metalness:.5}),0,9.2,0,24);a.rotation.x=Math.PI/2,n.add(r),e.push({x:0,z:-6,r:2.2}),H(n,10,4,6,Ko(),-18,2,-3),Jn(n,-18,4,-3,10,6,1.2,Ko(),Ko(),.5),e.push({x:-18,z:-3,r:4.5});let o=Yt("ZONE MINI\xC8RE","Casque obligatoire",4,1,"#f1c40f","#222");o.position.set(4.4,2.4,2),n.add(o),Fe(n,.06,.07,2.5,B("#555"),4.4,1.25,1.95,6),e.push({x:4.4,z:2,r:.3});for(let c=0;c<6;c++){let u=new K(new Mn(.22,.6,10),B("#e8590c",.6));u.position.set(-12+c*1.4,.3,9),n.add(u)}let l=new ea(new xt().setAttribute("position",new At(new Float32Array(Array.from({length:600},(c,u)=>u%3==0?-30+i()*60:u%3==1?.3+i()*5:-12+i()*26)),3)),new cr({color:14263930,size:.12,transparent:!0,opacity:.35,depthWrite:!1}));return n.add(l),fa(n,e,t,{bounds:{x0:-26,x1:26,z0:-9,z1:12.5},exitZ:10.4,sky:{elev:30,azim:140,turb:8},fog:.013,update(c,u){l.rotation.y=u*.01,l.position.x=Math.sin(u*.2)*.6}})}function zf(){let n=new Ue,e=[],t=[],i=Ut(113);dn(n,1400,1400,nn,1,0,0),Lt(n,0,7,5,14,ft),Lt(n,0,-4,18,12,ft);let s=[];for(let _=0;_<1400;_++){let x=i()*Math.PI*2,M=i()*1.35+.1,C=420;s.push(Math.cos(x)*Math.cos(M)*C,Math.sin(M)*C,Math.sin(x)*Math.cos(M)*C)}let r=new ea(new xt().setAttribute("position",new Ze(s,3)),new cr({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));n.add(r);let a=new K(new rt(14,24,18),new Ct({color:16052708,fog:!1}));a.position.set(-190,210,-300),n.add(a);let o=new Ue;o.position.set(0,0,-13),Fe(o,5.4,5.6,4.6,vy(),0,2.3,0,32);let l=new K(new rt(5.5,32,16,0,Math.PI*2,0,Math.PI/2),new _e({color:15133422,roughness:.35,metalness:.55}));l.position.y=4.6,l.castShadow=!0,o.add(l);let c=H(o,1.3,5,.6,B("#05080f",.9),0,6.4,4.9);c.rotation.x=-.5;let u=Fe(o,.5,.7,4.2,B("#c9ced3",.3,{metalness:.7}),0,6.4,0,16);u.rotation.x=-1,n.add(o),t.push({x0:-5.8,x1:5.8,z0:-18.8,z1:-7.2});let d=Yt("OBSERVATOIRE","Regarder le ciel",4.6,1,"#1a2a55","#9fd0ff");d.position.set(0,2.4,-7.4),n.add(d),[[-6,-2],[6,-2]].forEach(_=>{let x=new Ue;x.position.set(_[0],0,_[1]);for(let C=0;C<3;C++){let S=Fe(x,.04,.04,1.6,B("#444",.5,{metalness:.5}),Math.cos(C*2.1)*.5,.7,Math.sin(C*2.1)*.5,5);S.rotation.z=Math.cos(C*2.1)*.3,S.rotation.x=Math.sin(C*2.1)*.3}let M=Fe(x,.12,.18,1.4,B("#ddd",.3,{metalness:.6}),0,1.8,0,12);M.rotation.x=-1.1,n.add(x),e.push({x:_[0],z:_[1],r:.7})});let f=new Ue;f.position.set(0,0,2),Fe(f,.1,.12,1.2,B("#555",.5,{metalness:.5}),0,.6,0,8);let h=new K(new rt(.55,20,16),new _e({color:16765770,emissive:16754176,emissiveIntensity:1.4}));h.position.y=1.5,f.add(h);let v=[[1,.1,"#9a8f85"],[1.5,.16,"#e0b97a"],[2.1,.17,"#2f7fd0"],[2.6,.13,"#c1440e"],[3.5,.35,"#d9a066"],[4.4,.3,"#e6d7a8"]].map((_,x)=>{let M=new Ue;M.position.y=1.5;let C=new K(new rt(_[1],14,12),B(_[2],.7));C.position.x=_[0]*.8+.5,M.add(C);let S=new K(new ur(_[0]*.8+.49,_[0]*.8+.51,48),new Ct({color:7317759,transparent:!0,opacity:.25,side:ot}));return S.rotation.x=Math.PI/2,S.position.y=1.5,f.add(S),f.add(M),M});n.add(f),e.push({x:0,z:2,r:.6});let g=new pr(16762976,2.2,12);g.position.set(0,1.6,2),n.add(g),[[-9,4],[9,4],[-9,-6],[9,-6]].forEach(_=>{Fe(n,.05,.06,2.6,B("#333"),_[0],1.3,_[1],6);let x=new K(new rt(.2,12,10),new _e({color:16773824,emissive:16765040,emissiveIntensity:1.6}));x.position.set(_[0],2.7,_[1]),n.add(x),e.push({x:_[0],z:_[1],r:.25})}),[[-20,-3],[20,-3],[-18,8],[18,8]].forEach((_,x)=>sn(n,_[0],_[1],1.1,!1,null,e,x%2===0));let m=hn({area:[-34,34,-18,14],count:6e3,seed:27,exclude:(_,x)=>Math.abs(_)<10&&x>-18&&x<5||Math.abs(_)<3.2&&x>4});return n.add(m),fa(n,e,t,{bounds:{x0:-26,x1:26,z0:-6.5,z1:12.5},exitZ:10.4,sky:{elev:-7,azim:180,turb:.5,ray:.1},night:!0,fog:.006,update(_,x){m.userData.update(x),v.forEach((M,C)=>{M.rotation.y=x*(.9-C*.12)}),h.rotation.y=x*.2}})}function Bf(){let n=new Ue,e=[],t=[],i=Ut(114);dn(n,1400,1400,ft,1,0,0);let s=new K(new qe(60,24),new _e({color:9277588,roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,.02,0),s.receiveShadow=!0,n.add(s);let r=ha();r.repeat.set(24,6);let a=new Bn({color:1923706,roughness:.06,normalMap:r,normalScale:new fe(.8,.8),envMapIntensity:1.3,transparent:!0,opacity:.95}),o=new K(new qe(400,160),a);o.rotation.x=-Math.PI/2,o.position.set(0,-.25,-95),n.add(o),H(n,60,.7,2,B("#6b6e72",.95),0,.35,-12),t.push({x0:-30,x1:30,z0:-13.2,z1:-10.6});let l=new Ue;l.position.set(-4,-.2,-24),H(l,34,4.4,8,B("#25405f",.55),0,2.2,0),H(l,34.2,.8,8.2,B("#b22222",.55),0,.3,0);let c=new K(new Mn(4,7,4),B("#25405f",.55));c.rotation.z=-Math.PI/2,c.rotation.y=Math.PI/4,c.position.set(20,2.2,0),l.add(c),H(l,6,6,6.6,B("#efefef",.5),-11,7.4,0);for(let g=0;g<3;g++)H(l,6.04,.7,6.64,Nf(),-11,6+g*1.4,0);Fe(l,.7,.9,3,B("#d35400",.5),-12,12,0,12);let u=["#c0392b","#2e86de","#f1c40f","#27ae60","#e67e22"];for(let g=0;g<4;g++)for(let m=0;m<2;m++)H(l,2.4,2.4,6,B(u[(g+m)%5],.55),-2+g*2.6,5.6+m*2.4,0);n.add(l);let d=new Ue;d.position.set(8,0,-9);let f=B("#e0a526",.5,{metalness:.35});[[-3,-3],[3,-3],[-3,3],[3,3]].forEach(g=>Fe(d,.25,.3,14,f,g[0],7,g[1],8)),H(d,8,.8,.8,f,0,14,-3),H(d,8,.8,.8,f,0,14,3),H(d,.8,.8,8,f,0,14.4,0);let h=new Ue;H(h,1.4,.6,1.4,B("#333"),0,0,0),Fe(h,.03,.03,5,B("#222"),0,-2.5,0,5),H(h,2.4,.5,.9,B("#c0392b",.55),0,-5.2,0),h.position.set(0,14,0),d.add(h),n.add(d),e.push({x:5,z:-12,r:.5},{x:11,z:-12,r:.5}),[[-16,-3],[-13,-3],[-16,2],[15,3],[18,3],[15,-3.2]].forEach((g,m)=>{H(n,6,2.6,2.4,B(u[m%5],.6),g[0],1.3,g[1]),m%2===0&&H(n,6,2.6,2.4,B(u[(m+2)%5],.6),g[0],3.9,g[1]),e.push({x:g[0],z:g[1],r:3.2})}),[-12,-8,-4,0,4,12].forEach(g=>Fe(n,.2,.26,.6,B("#222",.6),g,.3,-10.1,10));let p=Yt("PORT DE BANANA","Le Congo ouvert sur l\u2019oc\xE9an",6,1,"#1a3f66","#fff");p.position.set(-9,2.8,4),n.add(p),Fe(n,.07,.08,3,B("#555"),-9,1.5,3.95,6),Fe(n,.07,.08,3,B("#555"),-12,1.5,3.95,6);let v=[];for(let g=0;g<5;g++){let m=new K(new Mn(.12,.4,4),B("#f7f7f7",.8));m.rotation.x=Math.PI/2,m.position.set(-10+g*5,10+g%3,-14),n.add(m),v.push(m)}return fa(n,e,t,{bounds:{x0:-26,x1:26,z0:-9.2,z1:12.5},exitZ:10.4,sky:{elev:28,azim:300,turb:4},update(g,m){r.offset.x=m*.025%1,r.offset.y=m*.012%1,h.position.x=Math.sin(m*.4)*3,v.forEach((_,x)=>{_.position.x=-10+x*5+Math.sin(m*.5+x)*8,_.position.y=10+Math.sin(m*.9+x)*1.2})}})}function kf(){let n=new Ue,e=[],t=[],i=Ut(115);dn(n,1400,1400,nn,1,0,0);let s=new _e({map:kn("#f4efe4"),roughness:.55,metalness:.05}),r=new K(new qe(44,28),new _e({map:kn("#cfc4ae"),roughness:.9}));r.rotation.x=-Math.PI/2,r.position.set(0,.02,-3),r.receiveShadow=!0,n.add(r),Lt(n,0,9,5,10,ft),H(n,30,7,9,s,0,3.5,-16);for(let h=0;h<4;h++)H(n,16-h*.5,.25,.7,s,0,.12+h*.25,-10.8+h*-0);for(let h=0;h<4;h++)H(n,18,.25,.9,s,0,.12+h*.25,-9.6+(3-h)*.5);for(let h=0;h<8;h++){let p=-7.7+h*2.2;Fe(n,.45,.5,6.4,s,p,3.9,-11.6,18),Fe(n,.6,.6,.3,s,p,.95+.1,-11.6,18),Fe(n,.6,.6,.3,s,p,7.2,-11.6,18)}let a=new K(new Mn(11,2.6,3),s);a.rotation.y=Math.PI/2,a.scale.set(.4,1,1),a.rotation.z=0,a.position.set(0,8.5,-11.5),a.rotation.x=0,a.scale.set(1,1,.35),a.rotation.y=Math.PI,a.position.y=8.7,n.add(a),H(n,20,.5,2.2,s,0,7.6,-11.5);let o=new K(new rt(4.6,32,16,0,Math.PI*2,0,Math.PI/2),new _e({color:13620956,roughness:.4,metalness:.5}));o.position.set(0,7,-16),o.castShadow=!0,n.add(o),Fe(n,4.7,4.8,1.2,s,0,6.9,-16,32),Fe(n,.1,.12,2.4,B("#c9a03d",.3,{metalness:.8}),0,12.8,-16,8),H(n,3.2,4.4,.2,B("#3a2418",.7),0,2.2,-11.1);let l=Yt("PARLEMENT","Les lois prot\xE8gent tous les citoyens",9,1.2,"#0b3d6b","#fff");l.position.set(0,9.8,-11.6),n.add(l),t.push({x0:-15.3,x1:15.3,z0:-20.6,z1:-9}),[-8,-4,4,8].forEach(h=>{Fe(n,.05,.06,7,B("#aaa",.4,{metalness:.7}),h,3.5,0,8);let p=new K(new qe(2.2,1.4,8,4),new _e({map:Ti(),side:ot,roughness:.9}));p.position.set(h+1.1,6.2,0),n.add(p),e.push({x:h,z:0,r:.3})});let c=n.children.filter(h=>h.geometry&&h.geometry.type==="PlaneGeometry"&&h.geometry.parameters.widthSegments===8);Fe(n,2.6,2.7,.55,s,0,.28,4,28),Fe(n,2.3,2.3,.1,new Bn({color:2783898,roughness:.05,transparent:!0,opacity:.88}),0,.55,4,28),Fe(n,.3,.4,1.9,s,0,1.2,4,12),e.push({x:0,z:4,r:2.7});let u=new Ue;u.position.set(-9,0,0),H(u,1.4,1.2,1.4,s,0,.6,0),Fe(u,.28,.35,1.8,B("#b8860b",.4,{metalness:.8}),0,2.1,0,12);let d=new K(new rt(.22,14,12),B("#b8860b",.4,{metalness:.8}));d.position.y=3.2,u.add(d),H(u,1.6,.05,.05,B("#b8860b",.4,{metalness:.8}),0,2.9,0),[-.8,.8].forEach(h=>{Fe(u,.28,.28,.04,B("#b8860b",.4,{metalness:.8}),h,2.5,0,12)}),n.add(u),e.push({x:-9,z:0,r:1});for(let h=0;h<8;h++)[-1,1].forEach(p=>{let v=new K(new dt(1.6,1,1.6),B("#2f6a2a",1));v.position.set(p*6.2,.5,-8+h*2.2),h>2,n.add(v)});[[-22,-2],[22,-2],[-20,8],[20,8]].forEach((h,p)=>sn(n,h[0],h[1],1.1,!1,null,e,p%2===0));let f=hn({area:[-36,36,-3,14],count:6e3,seed:28,exclude:(h,p)=>Math.abs(h)<23&&p>-16&&p<-2||Math.abs(h)<3.2&&p>4});return n.add(f),fa(n,e,t,{bounds:{x0:-27,x1:27,z0:-8.5,z1:12.5},exitZ:10.4,sky:{elev:8,azim:255,turb:6,ray:2},fog:.007,update(h,p){f.userData.update(p),c.forEach((v,g)=>{let m=v.geometry.attributes.position;for(let _=0;_<m.count;_++){let x=m.getX(_);m.setZ(_,Math.sin(x*2.2+p*3+g)*.12*(x+1.1)/2.2)}m.needsUpdate=!0})}})}var V=(n,e,t,i)=>({q:n,c:e,a:t,exp:i}),xu={maths:[V("Une cagette contient 8 mangues. Combien de mangues dans 5 cagettes ?",["30","35","40","45"],"40","5 \xD7 8 = 40."),V("Quel est le double de 17 ?",["27","34","37","32"],"34","17 \xD7 2 = 34."),V("Un sac de 25 mangues est partag\xE9 entre 5 enfants. Combien chacun re\xE7oit-il ?",["4","5","6","7"],"5","25 \xF7 5 = 5."),V("Combien font 7 \xD7 6 ?",["36","42","48","40"],"42","7 \xD7 6 = 42."),V("Combien font 100 \u2212 37 ?",["73","67","63","53"],"63","100 \u2212 37 = 63."),V("Quelle est la moiti\xE9 de 90 ?",["40","45","50","55"],"45","90 \xF7 2 = 45."),V("Combien font 12 + 29 ?",["39","41","43","51"],"41","12 + 29 = 41."),V("Combien font 9 \xD7 9 ?",["72","81","90","99"],"81","9 \xD7 9 = 81."),V("Combien font 144 \xF7 12 ?",["10","11","12","14"],"12","12 \xD7 12 = 144."),V("Quel est le p\xE9rim\xE8tre d\u2019un carr\xE9 de 6 m de c\xF4t\xE9 ?",["12 m","24 m","36 m","30 m"],"24 m","4 \xD7 6 = 24 m."),V("Trois cahiers \xE0 500 FC chacun co\xFBtent combien en tout ?",["1 000 FC","1 200 FC","1 500 FC","2 000 FC"],"1 500 FC","3 \xD7 500 = 1 500.")],francais:[V("Hier, nous ___ au march\xE9. (verbe aller)",["allons","sommes all\xE9s","irons","allerons"],"sommes all\xE9s","Au pass\xE9 compos\xE9 : nous sommes all\xE9s."),V("Quel est l\u2019antonyme de \xAB ancien \xBB ?",["vieux","nouveau","vieil","long"],"nouveau","Le contraire d\u2019\xAB ancien \xBB est \xAB nouveau \xBB."),V("Quel mot est un nom propre ?",["chien","Kinshasa","livre","maison"],"Kinshasa","Un nom propre d\xE9signe un lieu pr\xE9cis."),V("Quel est le pluriel de \xAB cheval \xBB ?",["chevals","chevaux","chevaus","chevales"],"chevaux","Les noms en -al font leur pluriel en -aux."),V("Quel est un synonyme de \xAB content \xBB ?",["triste","heureux","f\xE2ch\xE9","press\xE9"],"heureux","\xAB Content \xBB et \xAB heureux \xBB ont le m\xEAme sens."),V("Les enfants ___ dans la cour. (jouer, pr\xE9sent)",["jouent","joue","jouons","jouez"],"jouent","Avec \xAB ils / elles \xBB, le verbe se termine par -ent."),V("Quel mot est un verbe ?",["table","courir","joli","rapidement"],"courir","\xAB Courir \xBB exprime une action : c\u2019est un verbe."),V("Quel est le f\xE9minin de \xAB acteur \xBB ?",["acteuse","actrice","acteure","actresse"],"actrice","Acteur \u2192 actrice."),V("Ils ___ faim. (verbe avoir)",["ont","sont","avons","a"],"ont","Ils ont : verbe avoir \xE0 la 3e personne du pluriel.")],geo:[V("Quelle est la capitale de la RDC ?",["Lubumbashi","Goma","Kinshasa","Kisangani"],"Kinshasa","Kinshasa est la capitale de la RDC."),V("Combien de provinces compte la RDC aujourd\u2019hui ?",["11","15","26","30"],"26","Depuis 2015, la RDC compte 26 provinces."),V("Quel grand fleuve traverse Kinshasa ?",["le Nil","le Niger","le Congo","le Zamb\xE8ze"],"le Congo","Le fleuve Congo borde Kinshasa."),V("Quel oc\xE9an touche la c\xF4te de la RDC ?",["Indien","Atlantique","Pacifique","Arctique"],"Atlantique","La petite c\xF4te de la RDC donne sur l\u2019oc\xE9an Atlantique."),V("Quelle est la grande ville du Haut-Katanga ?",["Goma","Lubumbashi","Matadi","Bukavu"],"Lubumbashi","Lubumbashi est le chef-lieu du Haut-Katanga."),V("Quel lac borde la RDC \xE0 l\u2019est ?",["Tchad","Tanganyika","Titicaca","L\xE9man"],"Tanganyika","Le lac Tanganyika longe l\u2019est de la RDC."),V("Quel est le principal port maritime de la RDC ?",["Matadi","Kindu","Kikwit","Bunia"],"Matadi","Matadi est le grand port sur le fleuve Congo."),V("Quelle est la capitale du Congo-Brazzaville, pays voisin ?",["Brazzaville","Luanda","Kampala","Kigali"],"Brazzaville","Brazzaville est face \xE0 Kinshasa, de l\u2019autre c\xF4t\xE9 du fleuve.")],histoire:[V("En quelle ann\xE9e le Congo belge est-il devenu ind\xE9pendant ?",["1948","1960","1965","1975"],"1960","L\u2019ind\xE9pendance date de 1960."),V("Quel jour c\xE9l\xE8bre-t-on l\u2019ind\xE9pendance ?",["1er mai","30 juin","17 mai","4 d\xE9cembre"],"30 juin","La f\xEAte de l\u2019ind\xE9pendance a lieu le 30 juin."),V("Qui fut le premier Premier ministre du Congo ind\xE9pendant ?",["Patrice Lumumba","Mobutu","Laurent-D\xE9sir\xE9 Kabila","F\xE9lix Tshisekedi"],"Patrice Lumumba","Patrice Lumumba dirigea le premier gouvernement."),V("Qui fut le premier pr\xE9sident du Congo ind\xE9pendant ?",["Joseph Kasa-Vubu","Mobutu","Patrice Lumumba","Mo\xEFse Tshombe"],"Joseph Kasa-Vubu","Joseph Kasa-Vubu fut le premier chef de l\u2019\xC9tat."),V("Quel symbole figure en haut \xE0 gauche du drapeau de la RDC ?",["un soleil","une \xE9toile jaune","une croix","un lion"],"une \xE9toile jaune","Une \xE9toile jaune brille sur fond bleu ciel."),V("Quelle est la devise de la RDC ?",["Justice \u2013 Paix \u2013 Travail","Unit\xE9 \u2013 Force \u2013 Progr\xE8s","Libert\xE9 \u2013 \xC9galit\xE9 \u2013 Fraternit\xE9","Travail \u2013 Famille \u2013 Patrie"],"Justice \u2013 Paix \u2013 Travail","La devise nationale est \xAB Justice \u2013 Paix \u2013 Travail \xBB."),V("Quelle est la monnaie de la RDC ?",["le franc congolais","le dollar","le cedi","le naira"],"le franc congolais","La monnaie nationale est le franc congolais (FC).")],marche:[V("Un kilo de manioc co\xFBte 1 500 FC. Combien co\xFBtent 3 kilos ?",["3 000 FC","4 500 FC","4 000 FC","5 500 FC"],"4 500 FC","3 \xD7 1 500 = 4 500 FC."),V("Tu ach\xE8tes pour 2 300 FC et tu donnes 5 000 FC. Combien te rend-on ?",["2 300 FC","2 500 FC","2 700 FC","3 700 FC"],"2 700 FC","5 000 \u2212 2 300 = 2 700 FC."),V("Une caisse de 12 tomates co\xFBte 6 000 FC. Combien co\xFBte une tomate ?",["300 FC","400 FC","500 FC","600 FC"],"500 FC","6 000 \xF7 12 = 500 FC."),V("Quelle est la moiti\xE9 de 3 600 FC ?",["1 600 FC","1 800 FC","2 000 FC","1 200 FC"],"1 800 FC","3 600 \xF7 2 = 1 800 FC."),V("Trois pains \xE0 800 FC et un jus \xE0 1 200 FC. Quel est le total ?",["3 200 FC","3 600 FC","4 000 FC","2 400 FC"],"3 600 FC","3 \xD7 800 = 2 400, puis 2 400 + 1 200 = 3 600 FC."),V("Un sac de riz de 25 kg est partag\xE9 en sacs de 5 kg. Combien de sacs obtient-on ?",["4","5","6","10"],"5","25 \xF7 5 = 5 sacs."),V("Le prix passe de 4 000 FC \xE0 5 000 FC. De combien a-t-il augment\xE9 ?",["500 FC","1 000 FC","1 500 FC","2 000 FC"],"1 000 FC","5 000 \u2212 4 000 = 1 000 FC.")],nutrition:[V("Quel aliment est riche en vitamine C ?",["le sel","l\u2019orange","l\u2019huile","le sucre"],"l\u2019orange","Les agrumes comme l\u2019orange contiennent beaucoup de vitamine C."),V("Quels aliments nous donnent surtout de l\u2019\xE9nergie ?",["les f\xE9culents (manioc, riz)","les bonbons seulement","l\u2019eau","le sel"],"les f\xE9culents (manioc, riz)","Les f\xE9culents comme le manioc et le riz donnent de l\u2019\xE9nergie."),V("Que faut-il faire avant de manger ?",["courir","se laver les mains","dormir","jouer au ballon"],"se laver les mains","Se laver les mains \xE9vite de manger des microbes."),V("Dans quel aliment trouve-t-on des prot\xE9ines ?",["le poisson","le sucre","le sel","l\u2019eau"],"le poisson","Le poisson, la viande, les \u0153ufs et les haricots contiennent des prot\xE9ines."),V("Pourquoi faut-il manger des fruits et des l\xE9gumes ?",["pour \xEAtre en bonne sant\xE9","pour avoir plus chaud","pour dormir","pour grandir en taille d\u2019un coup"],"pour \xEAtre en bonne sant\xE9","Ils apportent des vitamines qui prot\xE8gent le corps.")],fleuve:[V("Le fleuve Congo se jette dans quel oc\xE9an ?",["l\u2019oc\xE9an Indien","l\u2019oc\xE9an Atlantique","l\u2019oc\xE9an Pacifique","l\u2019oc\xE9an Arctique"],"l\u2019oc\xE9an Atlantique","Le fleuve Congo se jette dans l\u2019oc\xE9an Atlantique."),V("Quel est le deuxi\xE8me plus long fleuve d\u2019Afrique ?",["le Niger","le Congo","le Zamb\xE8ze","le Nil"],"le Congo","Apr\xE8s le Nil, le Congo est le deuxi\xE8me plus long fleuve d\u2019Afrique."),V("Quelle ville se trouve en face de Kinshasa, de l\u2019autre c\xF4t\xE9 du fleuve ?",["Luanda","Brazzaville","Kampala","Nairobi"],"Brazzaville","Brazzaville, capitale de la R\xE9publique du Congo, est face \xE0 Kinshasa."),V("Quel grand animal vit dans les eaux du fleuve Congo ?",["le z\xE8bre","l\u2019hippopotame","le chameau","le renne"],"l\u2019hippopotame","L\u2019hippopotame vit dans les rivi\xE8res et les fleuves d\u2019Afrique centrale."),V("Un p\xEAcheur attrape 12 poissons le matin et 9 l\u2019apr\xE8s-midi. Combien en tout ?",["19","20","21","22"],"21","12 + 9 = 21 poissons.")],environnement:[V("Pourquoi ne faut-il pas jeter de d\xE9chets dans le fleuve ?",["\xE7a pollue l\u2019eau et fait mourir les poissons","\xE7a fait grandir les poissons","\xE7a purifie l\u2019eau","\xE7a n\u2019a aucun effet"],"\xE7a pollue l\u2019eau et fait mourir les poissons","Les d\xE9chets polluent l\u2019eau et menacent les animaux qui y vivent."),V("Que faut-il faire des d\xE9chets ?",["les jeter dans une poubelle","les enterrer dans le fleuve","les br\xFBler pr\xE8s des maisons","les laisser dans la rue"],"les jeter dans une poubelle","On jette les d\xE9chets \xE0 la poubelle pour garder le quartier propre."),V("Que donnent les arbres \xE0 notre plan\xE8te ?",["de l\u2019oxyg\xE8ne","du plastique","de la fum\xE9e","du sable"],"de l\u2019oxyg\xE8ne","Les arbres produisent l\u2019oxyg\xE8ne que nous respirons."),V("Pourquoi faut-il \xE9conomiser l\u2019eau potable ?",["parce qu\u2019elle est pr\xE9cieuse","parce qu\u2019elle est dangereuse","parce qu\u2019elle est gratuite et infinie","parce qu\u2019elle est lourde"],"parce qu\u2019elle est pr\xE9cieuse","L\u2019eau potable est pr\xE9cieuse : tout le monde en a besoin.")],sante:[V("Combien de fois par jour faut-il au moins se brosser les dents ?",["une fois par semaine","au moins deux fois","jamais","dix fois"],"au moins deux fois","On se brosse les dents au moins deux fois par jour, matin et soir."),V("Comment attrape-t-on le paludisme ?",["par la piq\xFBre d\u2019un moustique","en mangeant du manioc","en jouant dehors","en buvant du lait"],"par la piq\xFBre d\u2019un moustique","Le paludisme est transmis par la piq\xFBre de certains moustiques."),V("Comment se prot\xE9ger du paludisme la nuit ?",["en dormant sous une moustiquaire","en dormant dehors","en laissant les fen\xEAtres ouvertes","en mangeant beaucoup"],"en dormant sous une moustiquaire","La moustiquaire emp\xEAche les moustiques de nous piquer."),V("Pourquoi se faire vacciner ?",["pour se prot\xE9ger de certaines maladies","pour grandir plus vite","pour mieux courir","pour avoir de la fi\xE8vre"],"pour se prot\xE9ger de certaines maladies","Les vaccins prot\xE8gent contre des maladies graves."),V("Pendant combien de temps faut-il se laver les mains avec du savon ?",["2 secondes","environ 20 secondes","10 minutes","jamais avec du savon"],"environ 20 secondes","Il faut frotter les mains environ 20 secondes avec du savon."),V("Que faut-il boire pour rester en bonne sant\xE9 ?",["de l\u2019eau propre","de l\u2019eau sale","seulement des sodas","rien"],"de l\u2019eau propre","L\u2019eau propre est la meilleure boisson pour le corps.")],corps:[V("Quel organe pompe le sang dans le corps ?",["le c\u0153ur","le foie","l\u2019estomac","le cerveau"],"le c\u0153ur","Le c\u0153ur pompe le sang dans tout le corps."),V("Avec quels organes respire-t-on ?",["les poumons","les reins","le c\u0153ur","les os"],"les poumons","On respire gr\xE2ce aux poumons."),V("Que faire si quelqu\u2019un a une petite coupure ?",["nettoyer la plaie avec de l\u2019eau propre et du savon","mettre de la terre dessus","ne rien faire","la frotter fort"],"nettoyer la plaie avec de l\u2019eau propre et du savon","On nettoie la plaie pour \xE9viter une infection."),V("Combien d\u2019heures un enfant doit-il dormir environ chaque nuit ?",["3 heures","5 heures","9 \xE0 11 heures","15 heures"],"9 \xE0 11 heures","Un enfant a besoin d\u2019environ 9 \xE0 11 heures de sommeil.")],droit:[V("Comment s\u2019appelle la loi la plus importante d\u2019un pays ?",["le r\xE8glement de l\u2019\xE9cole","la Constitution","le menu du march\xE9","le calendrier"],"la Constitution","La Constitution est la loi fondamentale d\u2019un pays."),V("\xC0 quel \xE2ge devient-on majeur en RDC ?",["14 ans","16 ans","18 ans","21 ans"],"18 ans","En RDC, on est majeur \xE0 18 ans."),V("Qui vote les lois en RDC ?",["le Parlement","le march\xE9","l\u2019\xE9cole","la police seule"],"le Parlement","Le Parlement (Assembl\xE9e nationale et S\xE9nat) vote les lois."),V("Quel objet est le symbole de la justice ?",["la balance","le ballon","le marteau de menuisier","la houe"],"la balance","La balance symbolise une justice \xE9quitable."),V("\xC0 quoi sert le droit de vote ?",["\xE0 choisir ses dirigeants","\xE0 choisir son repas","\xE0 passer en classe sup\xE9rieure","\xE0 voyager gratuitement"],"\xE0 choisir ses dirigeants","Voter permet de choisir les personnes qui dirigent le pays.")],droits_enfant:[V("Quel droit permet \xE0 tous les enfants d\u2019apprendre \xE0 lire et \xE0 \xE9crire ?",["le droit \xE0 l\u2019\xE9ducation","le droit de conduire","le droit de voter","le droit de voyager seul"],"le droit \xE0 l\u2019\xE9ducation","Tout enfant a le droit d\u2019aller \xE0 l\u2019\xE9cole."),V("Un enfant peut-il \xEAtre oblig\xE9 de travailler \xE0 la place d\u2019aller \xE0 l\u2019\xE9cole ?",["non, c\u2019est interdit","oui, toujours","oui, si l\u2019adulte le veut","oui, apr\xE8s 8 ans"],"non, c\u2019est interdit","Le travail forc\xE9 des enfants est interdit."),V("Que faire si un enfant est maltrait\xE9 ?",["en parler \xE0 un adulte de confiance","se taire","le cacher","se battre"],"en parler \xE0 un adulte de confiance","Il faut en parler \xE0 un adulte de confiance, qui pourra l\u2019aider et le prot\xE9ger."),V("Tout enfant a le droit \xE0\u2026",["la sant\xE9 et la protection","aucun droit","un t\xE9l\xE9phone","un permis de conduire"],"la sant\xE9 et la protection","Tous les enfants ont droit \xE0 la sant\xE9, \xE0 la protection et \xE0 l\u2019\xE9ducation.")]},yu={maths:"Calcul",francais:"Fran\xE7ais",geo:"G\xE9ographie",histoire:"Histoire",marche:"Calcul du march\xE9",nutrition:"Alimentation",fleuve:"Le fleuve Congo",environnement:"Environnement",sante:"Sant\xE9",corps:"Le corps humain",droit:"Droit et citoyennet\xE9",droits_enfant:"Droits de l\u2019enfant"},Tt={lola:{sc:"ville",x:22.5,z:1.5,ry:-1.9,name:"Mama Lola",short:"Mama Lola",role:"Gardienne du portail",kind:"quiz",sujet:"maths",nb:3,look:{s:"f",h:.93,skin:"#6b4028",c:"#e67e22",c2:"#1f7a4d",k:"pagne",co:"gris",age:"aine"},intro:["Bonjour, mon enfant ! Le portail ne s\u2019ouvre que pour ceux qui savent compter.","R\xE9ponds \xE0 mes trois questions et je te laisse entrer."],outro:"Bravo ! Le portail est ouvert. Entre dans l\u2019\xE9cole et va voir la ma\xEEtresse."},ilunga:{sc:"classe",x:-3,z:-3.6,ry:0,name:"Professeure Ilunga",short:"la ma\xEEtresse",role:"Ma\xEEtresse",kind:"quiz",sujet:"francais",nb:3,needs:"lola",look:{s:"f",h:.98,skin:"#5a3623",c:"#8e44ad",k:"boubou",co:"tresses"},intro:["Bienvenue \xE0 LEXARIS ACAD\xC9MIE !","Aujourd\u2019hui, la le\xE7on porte sur la langue. Trois questions pour commencer."],outro:"Tr\xE8s bien ! Va t\u2019asseoir pr\xE8s de Junior, il t\u2019attend pour la g\xE9ographie."},junior:{sc:"classe",x:2.6,z:-.1,ry:Math.PI,name:"Junior",short:"Junior",role:"\xC9l\xE8ve",kind:"quiz",sujet:"geo",nb:2,needs:"ilunga",sit:!0,look:{s:"h",h:.74,skin:"#7a4a2e",c:"#16a085",k:"uniforme",co:"courtes"},intro:["Salut ! La g\xE9ographie, c\u2019est mon sujet pr\xE9f\xE9r\xE9."],outro:"Bien jou\xE9 ! Va voir le directeur, il veut te poser les derni\xE8res questions."},mavungu:{sc:"classe",x:5.6,z:-3.4,ry:0,name:"Directeur Mavungu",short:"le directeur",role:"Directeur",kind:"quiz",sujet:"histoire",nb:2,needs:"junior",look:{s:"h",h:1.04,skin:"#4f3020",c:"#2c3e50",k:"uniforme",co:"courtes",cravate:!0},intro:["Tu as bien travaill\xE9.","Deux derni\xE8res questions pour finir la le\xE7on."],outro:"Le\xE7on termin\xE9e ! Tu gagnes 20 pi\xE8ces et du tissu wax pour ta maison."},bea:{sc:"ville",x:3,z:-6.6,ry:0,name:"Maman B\xE9a",short:"Maman B\xE9a",role:"Marchande",kind:"shop",look:{s:"f",h:.97,skin:"#744630",c:"#c0392b",k:"pagne",co:"nattes"}},mama:{sc:"maison",x:1.4,z:-.8,ry:0,name:"Maman",short:"Maman",role:"\xC0 la maison",kind:"talk",look:{s:"f",h:.97,skin:"#6b4028",c:"#d35400",k:"pagne",co:"tresses"}}},$i={jer:{sc:"ville",x:11,z:3.2,ry:-1.2,name:"J\xE9r\xE9mie",look:{s:"h",h:.9,skin:"#6b4028",c:"#27ae60",k:"uniforme",co:"courtes"}},kasa:{sc:"ville",x:12.6,z:4.6,ry:-1.9,name:"Petit Kasa",look:{s:"f",h:.72,skin:"#8a5634",c:"#e0a526",k:"pagne",co:"nattes"}}},Jo=[["J\xE9r\xE9mie","La le\xE7on commence bient\xF4t, tu viens ?"],["Petit Kasa","Mama Lola garde le portail, elle pose des questions !"],["J\xE9r\xE9mie","R\xE9ponds bien et tu entreras dans la classe."],["Petit Kasa","Moi, je connais d\xE9j\xE0 toutes les mangues !"],["J\xE9r\xE9mie","Le manguier du village donne les meilleures mangues."]],Hn={natte:{n:"Natte tress\xE9e",p:10},table:{n:"Table en bois",p:25},lampe:{n:"Lampe",p:20},rideau:{n:"Rideau en wax",p:10,t:1},tableau:{n:"Tableau du village",p:30},plante:{n:"Plante verte",p:15}},Mr=["#c58b62","#b07a50","#9a6641","#7a4a2e","#63391f","#4f3020","#3d2416","#d9a67c"],Qo=["#140d09","#2e1a10","#5a3319","#8a3a1c","#c79a3b","#7a7a7a","#d9d9d9","#7b2a6e"],pa=["#120a06","#3b2212","#2f4a3a","#2a4a6e"],ma=["#7a3a30","#a8483c","#c0566a","#4a2a24"],el=["#1f7a4d","#2e86de","#c0392b","#e67e22","#8e44ad","#16a085","#e0a526","#2c3e50","#d6336c","#f1f1f1"],ga={courtes:{n:"Courts",own:!0},rase:{n:"Ras\xE9",own:!0},tresses:{n:"Tresses",own:!0},nattes:{n:"Nattes",own:!0},afro:{n:"Afro",own:!0},chignon:{n:"Chignon",unlock:"lola"},noeuds:{n:"N\u0153uds bantous",price:25},locks:{n:"Locks",price:30}},va={boucles:{n:"Boucles d\u2019oreilles",own:!0},lunettes:{n:"Lunettes",unlock:"ilunga"},casquette:{n:"Casquette",unlock:"junior"},foulard:{n:"Foulard",price:20},collier:{n:"Collier de perles",price:15},sac:{n:"Sac \xE0 dos",price:25}},Zi={uniforme:{n:"Uniforme de l\u2019\xE9cole",own:!0,top:"plain",bottom:"auto",trouser:"#262a3a",collar:!0},polo:{n:"Polo et jean",price:35,top:"plain",bottom:"trousers",trouser:"#2f4a7a",collar:!0},sport:{n:"Tenue de sport",price:40,top:"plain",bottom:"trousers",trouser:"#233044",collar:!1,matchTrouser:!0},robe:{n:"Robe de f\xEAte",price:70,top:"plain",bottom:"skirt",belt:!0},pagne:{n:"Tenue wax",unlock:"mavungu",top:"wax",bottom:"auto",trouser:"#262a3a"},boubou:{n:"Boubou brod\xE9",price:60,top:"plain",bottom:"long",trim:!0}},xa={s:"f",skin:3,faceW:.5,jaw:.4,eyeS:.5,eyeC:1,brow:0,nose:.5,lips:.5,lipC:0,hair:"tresses",hairC:0,beard:0,acc:[],outfit:"uniforme",outfitC:0,blush:.3},Es={4:{outfits:["sport"]}};Object.assign(Tt,{esther:{sc:"marche",x:-6,z:-6.2,ry:0,name:"Maman Esther",short:"Maman Esther",role:"Vendeuse de l\xE9gumes",kind:"quiz",sujet:"marche",nb:3,needs:"mavungu",look:{s:"f",h:.97,skin:"#b17869",c:"#e0a526",k:"pagne",co:"tresses",faceKey:"avatars/f2"},intro:["Bienvenue au Grand March\xE9 de Kinshasa !","Ici, il faut savoir compter vite pour bien vendre et bien acheter. Trois petits calculs pour commencer."],outro:"Bravo ! Tu sais compter comme une vraie commer\xE7ante. Va voir Papa Tshala, il vend des fruits."},tshala:{sc:"marche",x:8,z:-5.4,ry:0,name:"Papa Tshala",short:"Papa Tshala",role:"Marchand de fruits",kind:"quiz",sujet:"nutrition",nb:3,needs:"esther",look:{s:"h",h:1,skin:"#955342",c:"#2e86de",k:"uniforme",co:"courtes",faceKey:"avatars/h2"},intro:["Mes mangues, mes oranges, mes bananes\u2026 tout est frais !","Dis-moi ce que tu sais sur l\u2019alimentation et la sant\xE9."],outro:"Excellent ! Tu manges intelligemment. Va maintenant au bord du fleuve voir Tonton Mbo."},mbo:{sc:"fleuve",x:2.5,z:-1.4,ry:-1.5,name:"Tonton Mbo",short:"Tonton Mbo",role:"P\xEAcheur",kind:"quiz",sujet:"fleuve",nb:3,needs:"tshala",look:{s:"h",h:1,skin:"#a7766b",c:"#c0392b",k:"uniforme",co:"courtes",faceKey:"avatars/h4"},intro:["Bonjour ! Je p\xEAche ici depuis que je suis petit.","Le fleuve Congo est immense et plein de secrets. Que sais-tu de lui ?"],outro:"Bravo ! Tu connais bien notre fleuve. Parle aussi \xE0 Madame Kitoko, elle prot\xE8ge la nature."},kitoko:{sc:"fleuve",x:-8,z:1.8,ry:.6,name:"Madame Kitoko",short:"Madame Kitoko",role:"Protectrice de la nature",kind:"quiz",sujet:"environnement",nb:3,needs:"mbo",look:{s:"f",h:.97,skin:"#6b4028",c:"#16a085",k:"pagne",co:"nattes",faceKey:"portraits/mama"},intro:["La nature est notre tr\xE9sor : l\u2019eau, les arbres, les animaux.","Voyons si tu sais comment la prot\xE9ger."],outro:"Merci de prot\xE9ger la nature ! Direction le centre de sant\xE9, on a besoin de toi l\xE0-bas."},mukendi:{sc:"sante",x:-4,z:-3.4,ry:.2,name:"Infirmi\xE8re Mukendi",short:"l\u2019infirmi\xE8re",role:"Infirmi\xE8re",kind:"quiz",sujet:"sante",nb:3,needs:"kitoko",look:{s:"f",h:.97,skin:"#bb7253",c:"#f2f2f2",k:"uniforme",co:"chignon",faceKey:"avatars/f3"},intro:["Bonjour ! Bienvenue au centre de sant\xE9.","Bien se soigner, c\u2019est d\u2019abord bien se prot\xE9ger. Trois questions de sant\xE9."],outro:"Tr\xE8s bien ! Tu as de bons r\xE9flexes de sant\xE9. Le Docteur Kabongo veut te parler."},kabongo:{sc:"sante",x:5,z:-2.4,ry:-.3,name:"Docteur Kabongo",short:"le docteur",role:"M\xE9decin",kind:"quiz",sujet:"corps",nb:3,needs:"mukendi",look:{s:"h",h:1.02,skin:"#c38a7e",c:"#f2f2f2",k:"uniforme",co:"courtes",faceKey:"avatars/h1"},intro:["Bonjour ! Je suis m\xE9decin.","Ton corps est une machine extraordinaire. Voyons ce que tu en sais."],outro:"Bravo ! Tu connais bien ton corps. Il te reste un dernier lieu : l\u2019universit\xE9."},ngoy:{sc:"univ",x:-5,z:-6.4,ry:.3,name:"Professeur Ngoy",short:"le professeur",role:"Professeur de droit",kind:"quiz",sujet:"droit",nb:3,needs:"kabongo",look:{s:"h",h:1.03,skin:"#79493b",c:"#2c3e50",k:"uniforme",co:"rase",cravate:!0,faceKey:"avatars/h3"},intro:["Bienvenue \xE0 l\u2019universit\xE9 !","Le droit, c\u2019est l\u2019ensemble des r\xE8gles qui permettent de vivre ensemble. Voyons ce que tu en sais."],outro:"Excellent ! Ma\xEEtre Lukusa t\u2019attend pour la derni\xE8re \xE9preuve : les droits de l\u2019enfant."},lukusa:{sc:"univ",x:6,z:-6.2,ry:-.3,name:"Ma\xEEtre Lukusa",short:"Ma\xEEtre Lukusa",role:"Avocate",kind:"quiz",sujet:"droits_enfant",nb:3,needs:"ngoy",look:{s:"f",h:.98,skin:"#cd8e71",c:"#2c3e50",k:"uniforme",co:"tresses",faceKey:"avatars/f4"},intro:["Bonjour ! Je d\xE9fends les droits des personnes devant la justice.","Les enfants aussi ont des droits. Les connais-tu ?"],outro:"F\xE9licitations ! Tu as r\xE9ussi tous les niveaux. Tu es un vrai citoyen !"}});var ai=[{id:"ville",scene:"ville",name:"Quartier et \xE9cole",icon:"\u{1F3EB}",npcs:["lola","ilunga","junior","mavungu"]},{id:"marche",scene:"marche",name:"Le Grand March\xE9",icon:"\u{1F6D2}",npcs:["esther","tshala"]},{id:"fleuve",scene:"fleuve",name:"Le fleuve Congo",icon:"\u{1F30A}",npcs:["mbo","kitoko"]},{id:"sante",scene:"sante",name:"Le centre de sant\xE9",icon:"\u{1F3E5}",npcs:["mukendi","kabongo"]},{id:"univ",scene:"univ",name:"L\u2019universit\xE9",icon:"\u{1F393}",npcs:["ngoy","lukusa"]}];Object.assign(xu,{lecture:[V("Quel est le verbe dans la phrase : \xAB Les enfants lisent un livre \xBB ?",["enfants","lisent","livre","les"],"lisent","\xAB lisent \xBB exprime l\u2019action : c\u2019est le verbe."),V("Quel est le pluriel de \xAB journal \xBB ?",["journals","journaux","journales","journalx"],"journaux","Les noms en -al font leur pluriel en -aux."),V("Comment \xE9crit-on correctement ?",["ecole","\xE9cole","\xE9ecole","\xE9colle"],"\xE9cole","On \xE9crit \xAB \xE9cole \xBB avec un accent aigu sur le premier \xE9."),V("Quel signe termine une question ?",["le point","le point d\u2019interrogation","la virgule","les guillemets"],"le point d\u2019interrogation","Une question se termine par un point d\u2019interrogation."),V("Un livre qui raconte la vie d\u2019une personne s\u2019appelle une\u2026",["biographie","g\xE9ographie","chanson","recette"],"biographie","Une biographie raconte la vie de quelqu\u2019un."),V("Quel est le contraire de \xAB grand \xBB ?",["petit","long","large","haut"],"petit","Le contraire de \xAB grand \xBB est \xAB petit \xBB.")],contes:[V("Compl\xE8te le proverbe : \xAB Petit \xE0 petit, l\u2019oiseau fait son\u2026 \xBB",["nid","pain","chemin","bruit"],"nid","Petit \xE0 petit, l\u2019oiseau fait son nid : avec de la patience, on r\xE9ussit."),V("Que veut dire \xAB Qui s\xE8me le vent r\xE9colte la temp\xEAte \xBB ?",["nos mauvaises actions ont des cons\xE9quences","il faut planter des arbres","il faut aimer le vent","il pleut toujours"],"nos mauvaises actions ont des cons\xE9quences","Ce proverbe dit que les mauvaises actions reviennent contre leur auteur."),V("Comment commence souvent un conte ?",["Il \xE9tait une fois\u2026","Voici la m\xE9t\xE9o\u2026","Achetez vite\u2026","Attention, danger !"],"Il \xE9tait une fois\u2026","Beaucoup de contes commencent par \xAB Il \xE9tait une fois\u2026 \xBB."),V("Compl\xE8te le proverbe africain : \xAB Seul on va plus vite, ensemble on va\u2026 \xBB",["moins loin","plus loin","nulle part","en arri\xE8re"],"plus loin","Ensemble, on va plus loin : l\u2019union fait la force."),V("Quel mot est un synonyme de \xAB courageux \xBB ?",["brave","lent","triste","petit"],"brave","\xAB Brave \xBB a le m\xEAme sens que \xAB courageux \xBB.")],route:[V("Que signifie un feu rouge ?",["s\u2019arr\xEAter","acc\xE9l\xE9rer","klaxonner","reculer"],"s\u2019arr\xEAter","Au feu rouge, tout le monde s\u2019arr\xEAte."),V("O\xF9 traverse-t-on la rue en s\xE9curit\xE9 ?",["n\u2019importe o\xF9","sur le passage pour pi\xE9tons","entre deux voitures","en courant au milieu"],"sur le passage pour pi\xE9tons","On traverse sur le passage pour pi\xE9tons, apr\xE8s avoir regard\xE9."),V("Que faut-il faire avant de traverser ?",["regarder \xE0 gauche et \xE0 droite","fermer les yeux","courir tr\xE8s vite","t\xE9l\xE9phoner"],"regarder \xE0 gauche et \xE0 droite","On regarde des deux c\xF4t\xE9s pour v\xE9rifier qu\u2019aucun v\xE9hicule n\u2019arrive."),V("Que faut-il attacher en voiture ?",["la ceinture de s\xE9curit\xE9","ses lacets","le coffre","la radio"],"la ceinture de s\xE9curit\xE9","La ceinture de s\xE9curit\xE9 sauve des vies."),V("Que doit porter le conducteur d\u2019une moto ?",["un casque","un chapeau de paille","un foulard","rien du tout"],"un casque","Le casque prot\xE8ge la t\xEAte en cas de chute.")],transport:[V("Un bus roule 60 km en 1 heure. Combien de kilom\xE8tres fait-il en 2 heures ?",["90 km","100 km","120 km","180 km"],"120 km","60 \xD7 2 = 120 km."),V("Le trajet dure 45 minutes. On part \xE0 8 h. \xC0 quelle heure arrive-t-on ?",["8 h 15","8 h 45","9 h 15","9 h 45"],"8 h 45","8 h + 45 minutes = 8 h 45."),V("Un billet co\xFBte 500 FC. Combien co\xFBtent 4 billets ?",["1 500 FC","2 000 FC","2 500 FC","4 000 FC"],"2 000 FC","4 \xD7 500 = 2 000 FC."),V("Un bus transporte 40 passagers. 12 descendent. Combien en reste-t-il ?",["26","28","30","52"],"28","40 \u2212 12 = 28 passagers."),V("Il y a 5 bus de 30 places chacun. Combien de places en tout ?",["120","150","180","35"],"150","5 \xD7 30 = 150 places.")],agriculture:[V("De quelle plante tire-t-on les racines dont on fait le foufou ?",["le manioc","le caf\xE9","le cacao","le palmier"],"le manioc","Le foufou se fait avec la farine de manioc."),V("Les feuilles de quelle plante pr\xE9pare-t-on le \xAB pondu \xBB ?",["le manioc","le bananier","le manguier","l\u2019avocatier"],"le manioc","Le pondu se pr\xE9pare avec des feuilles de manioc pil\xE9es."),V("Pourquoi arrose-t-on les plantes ?",["elles ont besoin d\u2019eau pour vivre","pour les rendre bleues","pour les faire taire","pour les d\xE9placer"],"elles ont besoin d\u2019eau pour vivre","Comme nous, les plantes ont besoin d\u2019eau."),V("Quel animal de la ferme nous donne du lait ?",["la vache","la poule","le canard","le cheval de course"],"la vache","La vache donne du lait."),V("Que nous donne la poule ?",["des \u0153ufs","du lait","de la laine","du miel"],"des \u0153ufs","La poule pond des \u0153ufs.")],saisons:[V("Quelle plante donne le caf\xE9 ?",["le caf\xE9ier","le manguier","le bananier","le palmier"],"le caf\xE9ier","Le grain de caf\xE9 vient du caf\xE9ier."),V("La RDC est travers\xE9e par quelle ligne imaginaire ?",["l\u2019\xE9quateur","le m\xE9ridien de Paris","le p\xF4le Nord","l\u2019\xE9cliptique"],"l\u2019\xE9quateur","L\u2019\xE9quateur traverse la RDC."),V("Quelles sont les deux grandes saisons dans une grande partie de la RDC ?",["la saison des pluies et la saison s\xE8che","l\u2019hiver et l\u2019\xE9t\xE9","le printemps et l\u2019automne","la neige et le verglas"],"la saison des pluies et la saison s\xE8che","Le climat tropical alterne saison des pluies et saison s\xE8che."),V("Pourquoi ajoute-t-on du compost dans un champ ?",["pour enrichir le sol","pour faire fuir la pluie","pour \xE9clairer","pour faire du bruit"],"pour enrichir le sol","Le compost nourrit la terre."),V("Un champ rectangulaire mesure 20 m sur 10 m. Quelle est sa surface ?",["30 m\xB2","60 m\xB2","200 m\xB2","2 000 m\xB2"],"200 m\xB2","20 \xD7 10 = 200 m\xB2.")],foret:[V("Quelle for\xEAt est la deuxi\xE8me plus grande for\xEAt tropicale du monde ?",["la for\xEAt du bassin du Congo","la for\xEAt de Fontainebleau","la for\xEAt noire","la for\xEAt bor\xE9ale"],"la for\xEAt du bassin du Congo","Apr\xE8s l\u2019Amazonie, c\u2019est la plus grande for\xEAt tropicale du monde."),V("Pourquoi la for\xEAt est-elle importante ?",["elle produit de l\u2019oxyg\xE8ne et abrite des animaux","elle fait du bruit","elle rend le ciel noir","elle ne sert \xE0 rien"],"elle produit de l\u2019oxyg\xE8ne et abrite des animaux","Les for\xEAts nous donnent de l\u2019oxyg\xE8ne et abritent de nombreux animaux."),V("Comment appelle-t-on la for\xEAt chaude, tr\xE8s humide et toujours verte pr\xE8s de l\u2019\xE9quateur ?",["la for\xEAt \xE9quatoriale","la for\xEAt de pins","la savane","le d\xE9sert"],"la for\xEAt \xE9quatoriale","C\u2019est la for\xEAt \xE9quatoriale."),V("Quel parc national de RDC est c\xE9l\xE8bre pour ses gorilles de montagne ?",["le parc des Virunga","le parc Kruger","le Serengeti","le parc de Yellowstone"],"le parc des Virunga","Le parc national des Virunga abrite des gorilles de montagne."),V("Que ne faut-il jamais faire dans une for\xEAt ?",["allumer un feu sans surveillance","marcher doucement","observer les oiseaux","ramasser ses d\xE9chets"],"allumer un feu sans surveillance","Un feu mal surveill\xE9 peut d\xE9truire toute la for\xEAt.")],animaux:[V("Quel animal ray\xE9, cousin de la girafe, ne vit qu\u2019en RDC ?",["l\u2019okapi","le z\xE8bre","le tigre","le tapir"],"l\u2019okapi","L\u2019okapi vit uniquement dans les for\xEAts de RDC."),V("Quel singe proche de l\u2019homme ne vit \xE0 l\u2019\xE9tat sauvage qu\u2019en RDC ?",["le bonobo","le babouin","le macaque","le ouistiti"],"le bonobo","Le bonobo vit seulement en RDC, au sud du fleuve Congo."),V("Un animal qui ne mange que des plantes est\u2026",["herbivore","carnivore","insectivore","piscivore"],"herbivore","Un herbivore se nourrit de plantes."),V("Un animal qui mange de la viande est\u2026",["carnivore","herbivore","v\xE9g\xE9tarien","v\xE9g\xE9tal"],"carnivore","Un carnivore mange de la viande."),V("Quel est le plus grand animal terrestre ?",["l\u2019\xE9l\xE9phant","la girafe","le lion","le rhinoc\xE9ros blanc"],"l\u2019\xE9l\xE9phant","L\u2019\xE9l\xE9phant d\u2019Afrique est le plus grand animal terrestre.")],culture:[V("Quelle musique n\xE9e au Congo fait danser toute l\u2019Afrique ?",["la rumba congolaise","le tango","la valse","le flamenco"],"la rumba congolaise","La rumba congolaise est c\xE9l\xE8bre dans toute l\u2019Afrique."),V("Quelle langue nationale est tr\xE8s parl\xE9e \xE0 Kinshasa ?",["le lingala","le japonais","le russe","le hindi"],"le lingala","Le lingala est tr\xE8s parl\xE9 \xE0 Kinshasa."),V("Quelle est la langue officielle de la RDC ?",["le fran\xE7ais","l\u2019anglais","le portugais","l\u2019arabe"],"le fran\xE7ais","Le fran\xE7ais est la langue officielle de la RDC."),V("Combien de langues nationales la RDC compte-t-elle ?",["quatre","une","dix","cent"],"quatre","Le kikongo, le lingala, le swahili et le tshiluba sont les quatre langues nationales."),V("\xC0 quoi servaient souvent les masques traditionnels africains ?",["aux c\xE9r\xE9monies, pour repr\xE9senter des esprits ou des anc\xEAtres","\xE0 jouer au football","\xE0 cuisiner","\xE0 voyager"],"aux c\xE9r\xE9monies, pour repr\xE9senter des esprits ou des anc\xEAtres","Ils servaient surtout lors de c\xE9r\xE9monies traditionnelles.")],histoire2:[V("Quel artiste a chant\xE9 \xAB Ind\xE9pendance Cha Cha \xBB en 1960 ?",["Grand Kall\xE9","Michael Jackson","Bob Marley","Elvis Presley"],"Grand Kall\xE9","Grand Kall\xE9 et l\u2019African Jazz ont chant\xE9 \xAB Ind\xE9pendance Cha Cha \xBB."),V("Comment s\u2019appelle l\u2019hymne national de la RDC ?",["Debout Congolais","La Marseillaise","Braban\xE7onne","God Save the King"],"Debout Congolais","L\u2019hymne national de la RDC est \xAB Debout Congolais \xBB."),V("Quel pays a colonis\xE9 le Congo avant 1960 ?",["la Belgique","la Chine","le Japon","le Br\xE9sil"],"la Belgique","Le Congo \xE9tait une colonie belge avant son ind\xE9pendance en 1960."),V("Comment s\u2019appelait le pays entre 1971 et 1997 ?",["le Za\xEFre","le Gabon","le Rwanda","le Mali"],"le Za\xEFre","De 1971 \xE0 1997, le pays s\u2019appelait le Za\xEFre."),V("Quelle est la couleur de fond du drapeau de la RDC ?",["bleu ciel","vert","noir","blanc"],"bleu ciel","Le drapeau est bleu ciel avec une bande rouge et une \xE9toile jaune.")],sport:[V("Combien de joueurs une \xE9quipe de football aligne-t-elle sur le terrain ?",["9","11","13","15"],"11","Une \xE9quipe de football compte 11 joueurs sur le terrain."),V("Quel est le surnom de l\u2019\xE9quipe nationale de football de la RDC ?",["les L\xE9opards","les Lions","les Aigles","les \xC9l\xE9phants"],"les L\xE9opards","L\u2019\xE9quipe de RDC s\u2019appelle \xAB les L\xE9opards \xBB."),V("Que signifie le fair-play ?",["respecter les r\xE8gles et l\u2019adversaire","gagner \xE0 tout prix","tricher discr\xE8tement","insulter l\u2019arbitre"],"respecter les r\xE8gles et l\u2019adversaire","Le fair-play, c\u2019est jouer honn\xEAtement et respecter les autres."),V("Combien de temps dure un match de football (sans arr\xEAts de jeu) ?",["45 minutes","60 minutes","90 minutes","120 minutes"],"90 minutes","Deux mi-temps de 45 minutes : 90 minutes."),V("Pourquoi faut-il s\u2019\xE9chauffer avant de faire du sport ?",["pour pr\xE9parer son corps et \xE9viter les blessures","pour se fatiguer","pour dormir","pour manger"],"pour pr\xE9parer son corps et \xE9viter les blessures","L\u2019\xE9chauffement pr\xE9pare les muscles.")],footmaths:[V("Une \xE9quipe marque 3 buts en premi\xE8re mi-temps et 2 en seconde. Combien en tout ?",["4","5","6","7"],"5","3 + 2 = 5 buts."),V("Le match commence \xE0 15 h et dure 1 h 30. \xC0 quelle heure finit-il ?",["16 h","16 h 30","17 h","17 h 30"],"16 h 30","15 h + 1 h 30 = 16 h 30."),V("Chaque \xE9quipe a 11 joueurs. Combien de joueurs sur le terrain pour les deux \xE9quipes ?",["11","20","22","24"],"22","2 \xD7 11 = 22 joueurs."),V("Un billet co\xFBte 2 000 FC. Combien co\xFBtent 5 billets ?",["8 000 FC","10 000 FC","12 000 FC","7 000 FC"],"10 000 FC","5 \xD7 2 000 = 10 000 FC."),V("Une victoire rapporte 3 points. Combien de points pour 4 victoires ?",["7","9","12","16"],"12","4 \xD7 3 = 12 points.")],mines:[V("Quel m\xE9tal la RDC produit-elle en grande quantit\xE9, surtout au Katanga ?",["le cuivre","l\u2019argent","le fer-blanc","le zinc seulement"],"le cuivre","La RDC est un grand producteur de cuivre, surtout au Katanga."),V("Quel minerai, utilis\xE9 dans les batteries, la RDC poss\xE8de-t-elle en grande quantit\xE9 ?",["le cobalt","le sel","le charbon de bois","le sable"],"le cobalt","La RDC poss\xE8de une grande partie du cobalt du monde."),V("Dans quelle province se trouve la ville de Lubumbashi ?",["le Haut-Katanga","le Kongo-Central","le Nord-Kivu","l\u2019Ituri"],"le Haut-Katanga","Lubumbashi est la capitale du Haut-Katanga."),V("Comment s\u2019appelle la science qui \xE9tudie les roches ?",["la g\xE9ologie","la g\xE9ographie","la biologie","l\u2019astronomie"],"la g\xE9ologie","La g\xE9ologie \xE9tudie la Terre et les roches."),V("Dans quelle r\xE9gion de RDC se trouvent les c\xE9l\xE8bres mines de cuivre ?",["le Katanga","le Maniema","le Kasa\xEF central","l\u2019\xC9quateur"],"le Katanga","Le Katanga est riche en cuivre et en cobalt.")],minesec:[V("Quel \xE9quipement prot\xE8ge la t\xEAte dans une mine ?",["le casque","la casquette","le bonnet","le chapeau"],"le casque","Le casque prot\xE8ge contre les chutes de pierres."),V("Pourquoi les enfants ne doivent-ils pas travailler dans les mines ?",["c\u2019est dangereux et ils doivent aller \xE0 l\u2019\xE9cole","c\u2019est trop propre","c\u2019est trop silencieux","c\u2019est interdit aux adultes"],"c\u2019est dangereux et ils doivent aller \xE0 l\u2019\xE9cole","Le travail dans les mines est dangereux : les enfants ont le droit d\u2019aller \xE0 l\u2019\xE9cole."),V("Comment prot\xE9ger l\u2019environnement autour d\u2019une mine ?",["\xE9viter de polluer l\u2019eau et replanter des arbres","jeter les d\xE9chets dans la rivi\xE8re","abattre toute la for\xEAt","laisser les produits couler"],"\xE9viter de polluer l\u2019eau et replanter des arbres","Il faut prot\xE9ger l\u2019eau et replanter apr\xE8s les travaux."),V("Un camion transporte 20 tonnes de minerai. Combien de tonnes en 3 voyages ?",["40","50","60","80"],"60","3 \xD7 20 = 60 tonnes.")],espace:[V("Quelle \xE9toile \xE9claire la Terre le jour ?",["le Soleil","la Lune","Mars","V\xE9nus"],"le Soleil","Le Soleil est l\u2019\xE9toile qui nous \xE9claire."),V("Combien y a-t-il de plan\xE8tes dans le syst\xE8me solaire ?",["6","8","10","12"],"8","Le syst\xE8me solaire compte huit plan\xE8tes."),V("Quelle plan\xE8te est la plus proche du Soleil ?",["Mercure","Mars","Jupiter","Neptune"],"Mercure","Mercure est la plan\xE8te la plus proche du Soleil."),V("Autour de quoi la Terre tourne-t-elle ?",["le Soleil","la Lune","Mars","Saturne"],"le Soleil","La Terre tourne autour du Soleil en un an."),V("Quel astre tourne autour de la Terre ?",["la Lune","le Soleil","Jupiter","Pluton"],"la Lune","La Lune est le satellite naturel de la Terre.")],sciences:[V("\xC0 quelle temp\xE9rature l\u2019eau bout-elle (au niveau de la mer) ?",["50 \xB0C","80 \xB0C","100 \xB0C","200 \xB0C"],"100 \xB0C","L\u2019eau bout \xE0 100 \xB0C."),V("Quel gaz respirons-nous pour vivre ?",["l\u2019oxyg\xE8ne","le gaz carbonique seulement","l\u2019h\xE9lium","l\u2019azote pur"],"l\u2019oxyg\xE8ne","Nous avons besoin d\u2019oxyg\xE8ne pour vivre."),V("Que devient l\u2019eau quand elle g\xE8le ?",["de la glace","de la vapeur","du sable","de l\u2019huile"],"de la glace","L\u2019eau qui g\xE8le devient de la glace."),V("Quelle force nous attire vers le sol ?",["la gravit\xE9","le vent","le magn\xE9tisme seulement","le bruit"],"la gravit\xE9","La gravit\xE9 attire les objets vers le sol."),V("Qu\u2019est-ce qui produit la lumi\xE8re du jour ?",["le Soleil","la Lune","les nuages","les \xE9toiles filantes"],"le Soleil","La lumi\xE8re du jour vient du Soleil.")],port:[V("Quel est le principal port maritime de la RDC ?",["Matadi","Kisangani","Goma","Mbuji-Mayi"],"Matadi","Matadi est le principal port maritime de la RDC."),V("Sur quel fleuve se trouve Matadi ?",["le fleuve Congo","le Nil","le Niger","le Zamb\xE8ze"],"le fleuve Congo","Matadi est situ\xE9e sur le fleuve Congo."),V("Qu\u2019est-ce qu\u2019un conteneur ?",["une grande caisse m\xE9tallique pour transporter des marchandises","un petit bateau","une grue","un sac de riz"],"une grande caisse m\xE9tallique pour transporter des marchandises","Les conteneurs transportent des marchandises par bateau, train ou camion."),V("Comment appelle-t-on les produits vendus \xE0 l\u2019\xE9tranger ?",["les exportations","les importations","les cadeaux","les d\xE9chets"],"les exportations","Exporter, c\u2019est vendre \xE0 l\u2019\xE9tranger."),V("Comment appelle-t-on les produits achet\xE9s \xE0 l\u2019\xE9tranger ?",["les importations","les exportations","les r\xE9coltes","les souvenirs"],"les importations","Importer, c\u2019est acheter \xE0 l\u2019\xE9tranger.")],argent:[V("Quelle est la monnaie de la RDC ?",["le franc congolais","le dinar","la roupie","le yen"],"le franc congolais","La monnaie de la RDC est le franc congolais."),V("Un article co\xFBte 8 000 FC avec une r\xE9duction de 1 000 FC. Quel est le prix final ?",["6 000 FC","7 000 FC","8 000 FC","9 000 FC"],"7 000 FC","8 000 \u2212 1 000 = 7 000 FC."),V("Tu as 10 000 FC et tu d\xE9penses 3 500 FC. Combien te reste-t-il ?",["5 500 FC","6 500 FC","7 500 FC","13 500 FC"],"6 500 FC","10 000 \u2212 3 500 = 6 500 FC."),V("\xC0 quoi sert une banque ?",["\xE0 garder l\u2019argent en s\xE9curit\xE9","\xE0 vendre des l\xE9gumes","\xE0 soigner les malades","\xE0 construire des routes"],"\xE0 garder l\u2019argent en s\xE9curit\xE9","Une banque garde l\u2019argent en s\xE9curit\xE9."),V("Qu\u2019est-ce qu\u2019\xE9conomiser ?",["mettre de l\u2019argent de c\xF4t\xE9","tout d\xE9penser tout de suite","perdre son argent","pr\xEAter sans r\xE9fl\xE9chir"],"mettre de l\u2019argent de c\xF4t\xE9","\xC9conomiser, c\u2019est garder de l\u2019argent pour plus tard.")],institutions:[V("Quelles sont les deux chambres du Parlement de la RDC ?",["l\u2019Assembl\xE9e nationale et le S\xE9nat","le S\xE9nat et la Cour d\u2019appel","le Tribunal et la Mairie","l\u2019\xC9cole et l\u2019H\xF4pital"],"l\u2019Assembl\xE9e nationale et le S\xE9nat","Le Parlement est form\xE9 de l\u2019Assembl\xE9e nationale et du S\xE9nat."),V("Combien de provinces compte la RDC ?",["11","15","26","30"],"26","La RDC compte 26 provinces."),V("Qui dirige une province ?",["le gouverneur","le professeur","le p\xEAcheur","le chef de gare"],"le gouverneur","Une province est dirig\xE9e par un gouverneur."),V("Quelle est la dur\xE9e d\u2019un mandat du Pr\xE9sident de la R\xE9publique en RDC ?",["5 ans","2 ans","10 ans","1 an"],"5 ans","Le mandat pr\xE9sidentiel dure 5 ans, renouvelable une fois."),V("Quelle est la capitale de la RDC ?",["Kinshasa","Goma","Kisangani","Matadi"],"Kinshasa","Kinshasa est la capitale de la RDC.")],civisme:[V("Quel est un devoir du citoyen ?",["respecter les lois","ignorer les r\xE8gles","jeter ses d\xE9chets partout","d\xE9sob\xE9ir toujours"],"respecter les lois","Respecter les lois est un devoir de chaque citoyen."),V("Comment garder son quartier propre ?",["en jetant ses d\xE9chets \xE0 la poubelle","en les laissant dans la rue","en les jetant au caniveau","en les br\xFBlant devant les maisons"],"en jetant ses d\xE9chets \xE0 la poubelle","On jette les d\xE9chets \xE0 la poubelle."),V("Pourquoi faut-il respecter les autres ?",["pour vivre ensemble en paix","pour avoir des cadeaux","par obligation de la t\xE9l\xE9vision","pour devenir roi"],"pour vivre ensemble en paix","Le respect permet de vivre ensemble en paix."),V("Que veut dire \xAB vivre en paix \xBB ?",["vivre ensemble sans violence","faire du bruit","se disputer","se cacher"],"vivre ensemble sans violence","La paix, c\u2019est vivre ensemble sans violence."),V("Quelle est la date de la f\xEAte nationale de l\u2019ind\xE9pendance ?",["30 juin","1er janvier","25 d\xE9cembre","14 juillet"],"30 juin","La RDC f\xEAte son ind\xE9pendance le 30 juin.")]});Object.assign(yu,{lecture:"Lecture",contes:"Contes et proverbes",route:"S\xE9curit\xE9 routi\xE8re",transport:"Calcul : les transports",agriculture:"Agriculture",saisons:"Cultures et saisons",foret:"La for\xEAt \xE9quatoriale",animaux:"Les animaux",culture:"Culture congolaise",histoire2:"Histoire et musique",sport:"Le sport",footmaths:"Calcul : le football",mines:"Les richesses du sous-sol",minesec:"S\xE9curit\xE9 et environnement",espace:"L\u2019espace",sciences:"Sciences",port:"Le port",argent:"L\u2019argent",institutions:"Les institutions",civisme:"Civisme"});Object.assign(Tt,{nzuzi:{sc:"biblio",x:-5,z:-3.8,ry:.3,name:"Madame Nzuzi",short:"Madame Nzuzi",role:"Biblioth\xE9caire",kind:"quiz",sujet:"lecture",nb:3,needs:"lukusa",look:{s:"f",h:.97,skin:"#7a4a2e",c:"#8e44ad",k:"boubou",co:"tresses",faceKey:"portraits/ilunga"},intro:["Bienvenue \xE0 la biblioth\xE8que !","Ici, chaque livre est une porte ouverte sur le monde. Quelques questions de fran\xE7ais pour commencer."],outro:"Bravo ! Tu lis d\xE9j\xE0 comme un vrai champion. Va \xE9couter les histoires de Papa Kabasele."},kabasele:{sc:"biblio",x:8.5,z:-6.2,ry:-.4,name:"Papa Kabasele",short:"Papa Kabasele",role:"Conteur",kind:"quiz",sujet:"contes",nb:3,needs:"nzuzi",look:{s:"h",h:1.02,skin:"#916f64",c:"#c0392b",k:"uniforme",co:"rase",faceKey:"portraits/mavungu"},intro:["Viens, assieds-toi sous le grand arbre.","Les anciens disent que les proverbes sont la sagesse des peuples. Voyons ce que tu en as retenu."],outro:"Quelle sagesse ! Tu es pr\xEAt pour la route : direction la gare."},mayala:{sc:"gare",x:-3.6,z:-1.4,ry:.5,name:"Agent Mayala",short:"l\u2019agent Mayala",role:"Agent de la circulation",kind:"quiz",sujet:"route",nb:3,needs:"kabasele",look:{s:"h",h:1,skin:"#a7766b",c:"#2e5f9e",k:"uniforme",co:"courtes",faceKey:"avatars/h2"},intro:["Attention, on traverse avec prudence !","La route peut \xEAtre dangereuse si on ne conna\xEEt pas les r\xE8gles. Trois questions de s\xE9curit\xE9."],outro:"Parfait ! Tu connais les r\xE8gles. Va voir Chauffeur Bokasa, pr\xE8s du bus."},bokasa:{sc:"gare",x:2.5,z:-5.4,ry:-.5,name:"Chauffeur Bokasa",short:"Chauffeur Bokasa",role:"Chauffeur de bus",kind:"quiz",sujet:"transport",nb:3,needs:"mayala",look:{s:"h",h:1.04,skin:"#a7766b",c:"#e0a526",k:"uniforme",co:"courtes",faceKey:"avatars/h4"},intro:["Bonjour ! Mon bus fait Kinshasa \u2013 Matadi tous les jours.","Un bon chauffeur sait bien calculer le temps, la distance et les prix."],outro:"Excellent ! En route pour la campagne : la ferme de Mama Mwamba."},mwamba:{sc:"ferme",x:-6,z:.2,ry:.3,name:"Mama Mwamba",short:"Mama Mwamba",role:"Agricultrice",kind:"quiz",sujet:"agriculture",nb:3,needs:"bokasa",look:{s:"f",h:.97,skin:"#895430",c:"#e67e22",k:"pagne",co:"nattes",faceKey:"portraits/bea"},intro:["Bonjour ! Bienvenue dans mes champs de manioc.","La terre nous nourrit. Voyons si tu sais d\u2019o\xF9 vient ce que tu manges."],outro:"Bravo ! Maintenant, l\u2019agronome Lutumba va te parler des cultures et des saisons."},lutumba:{sc:"ferme",x:9.5,z:.5,ry:-.4,name:"Agronome Lutumba",short:"l\u2019agronome",role:"Agronome",kind:"quiz",sujet:"saisons",nb:3,needs:"mwamba",look:{s:"h",h:1.02,skin:"#79493b",c:"#27ae60",k:"uniforme",co:"courtes",faceKey:"avatars/h3"},intro:["Je suis agronome : j\u2019aide les paysans \xE0 mieux cultiver.","Le climat, les saisons, la terre : tout compte pour une bonne r\xE9colte."],outro:"Tr\xE8s bien ! Tu as l\u2019esprit d\u2019un agronome. Direction la grande for\xEAt !"},mutombo:{sc:"foret",x:-4,z:-3,ry:.3,name:"Garde Mutombo",short:"le garde",role:"Garde-forestier",kind:"quiz",sujet:"foret",nb:3,needs:"lutumba",look:{s:"h",h:1.03,skin:"#c38a7e",c:"#4a6b3a",k:"uniforme",co:"courtes",faceKey:"avatars/h1"},intro:["Chut\u2026 \xE9coute : la for\xEAt est vivante.","Je prot\xE8ge ces arbres et les animaux qui y vivent. Que sais-tu de la for\xEAt du Congo ?"],outro:"Bravo ! Tu peux devenir un protecteur de la for\xEAt. Madame Bisimwa t\u2019attend pour parler des animaux."},bisimwa:{sc:"foret",x:6,z:-3.8,ry:-.4,name:"Madame Bisimwa",short:"Madame Bisimwa",role:"Biologiste",kind:"quiz",sujet:"animaux",nb:3,needs:"mutombo",look:{s:"f",h:.97,skin:"#b17869",c:"#f2f2f2",k:"uniforme",co:"chignon",faceKey:"avatars/f2"},intro:["Bonjour ! Je suis biologiste, j\u2019\xE9tudie les animaux.","La RDC abrite des animaux qu\u2019on ne trouve nulle part ailleurs. Teste tes connaissances !"],outro:"Magnifique ! Tu connais bien nos animaux. Le mus\xE9e t\u2019attend maintenant."},tshibola:{sc:"musee",x:-5,z:-4.8,ry:.3,name:"Madame Tshibola",short:"Madame Tshibola",role:"Conservatrice du mus\xE9e",kind:"quiz",sujet:"culture",nb:3,needs:"bisimwa",look:{s:"f",h:.96,skin:"#6b4028",c:"#d35400",k:"boubou",co:"gris",faceKey:"portraits/lola"},intro:["Bienvenue au mus\xE9e ! Ici, on garde la m\xE9moire de notre peuple.","Masques, musique, langues : la culture congolaise est riche. Trois questions."],outro:"Bravo ! Maintenant Monsieur Kitenge va te raconter l\u2019histoire."},kitenge:{sc:"musee",x:6,z:-4.6,ry:-.3,name:"Monsieur Kitenge",short:"Monsieur Kitenge",role:"Guide du mus\xE9e",kind:"quiz",sujet:"histoire2",nb:3,needs:"tshibola",look:{s:"h",h:1.02,skin:"#a7766b",c:"#2c3e50",k:"uniforme",co:"courtes",faceKey:"avatars/h4",cravate:!0},intro:["Je suis le guide : je raconte l\u2019histoire de notre pays.","Des chansons de l\u2019ind\xE9pendance \xE0 l\u2019hymne national, que sais-tu ?"],outro:"Excellent ! Tu connais bien l\u2019histoire. Allons au stade, il y a un match !"},mbemba:{sc:"stade",x:-4,z:-2,ry:.4,name:"Entra\xEEneur Mbemba",short:"l\u2019entra\xEEneur",role:"Entra\xEEneur de football",kind:"quiz",sujet:"sport",nb:3,needs:"kitenge",look:{s:"h",h:1.04,skin:"#79493b",c:"#c0392b",k:"uniforme",co:"courtes",faceKey:"avatars/h3"},intro:["Bienvenue au stade ! Aujourd\u2019hui, grand match de quartier.","Le sport, c\u2019est la sant\xE9 et l\u2019amiti\xE9. Voyons ce que tu sais."],outro:"Bravo ! Tu as l\u2019esprit d\u2019\xE9quipe. L\u2019arbitre Kalala a des calculs pour toi."},kalala:{sc:"stade",x:6,z:-2.8,ry:-.4,name:"Arbitre Kalala",short:"l\u2019arbitre",role:"Arbitre",kind:"quiz",sujet:"footmaths",nb:3,needs:"mbemba",look:{s:"h",h:1,skin:"#955342",c:"#222222",k:"uniforme",co:"rase",faceKey:"avatars/h2"},intro:["Je suis l\u2019arbitre : je compte les buts et le temps.","Un bon arbitre sait calculer vite. \xC0 toi de jouer !"],outro:"Parfait ! Tu comptes comme un champion. Prochain lieu : la mine de cuivre."},kasongo:{sc:"mine",x:-5,z:-3,ry:.3,name:"G\xE9ologue Kasongo",short:"la g\xE9ologue",role:"G\xE9ologue",kind:"quiz",sujet:"mines",nb:3,needs:"kalala",look:{s:"f",h:.97,skin:"#cd8e71",c:"#e67e22",k:"uniforme",co:"tresses",faceKey:"avatars/f4"},intro:["Bienvenue \xE0 la mine ! Casque sur la t\xEAte, ici on fait attention.","Le sous-sol de la RDC cache de grandes richesses. Que sais-tu d\u2019elles ?"],outro:"Tr\xE8s bien ! L\u2019ing\xE9nieur Mwenze va te parler de s\xE9curit\xE9."},mwenze:{sc:"mine",x:4.5,z:-5,ry:-.4,name:"Ing\xE9nieur Mwenze",short:"l\u2019ing\xE9nieur",role:"Ing\xE9nieur des mines",kind:"quiz",sujet:"minesec",nb:3,needs:"kasongo",look:{s:"h",h:1.03,skin:"#c38a7e",c:"#e0a526",k:"uniforme",co:"courtes",faceKey:"avatars/h1"},intro:["Je suis ing\xE9nieur : je veille \xE0 la s\xE9curit\xE9 de tous.","Prot\xE9ger les personnes et la nature, c\u2019est le plus important."],outro:"Bravo ! La s\xE9curit\xE9 d\u2019abord. Prochaine \xE9tape : l\u2019observatoire, regarder les \xE9toiles."},mulumba:{sc:"observatoire",x:-4,z:-4.2,ry:.3,name:"Docteur Mulumba",short:"le docteur Mulumba",role:"Astronome",kind:"quiz",sujet:"espace",nb:3,needs:"mwenze",look:{s:"h",h:1.02,skin:"#916f64",c:"#2c3e50",k:"uniforme",co:"gris",faceKey:"portraits/mavungu"},intro:["Bonsoir ! Le ciel de ce soir est magnifique.","L\u2019espace est immense. Voyons ce que tu sais du Soleil, de la Lune et des plan\xE8tes."],outro:"Bravo ! Tu as l\u2019\xE2me d\u2019un astronome. Mademoiselle Mbuyi t\u2019attend pour les sciences."},mbuyi:{sc:"observatoire",x:6,z:-3.4,ry:-.4,name:"Assistante Mbuyi",short:"Mademoiselle Mbuyi",role:"Assistante scientifique",kind:"quiz",sujet:"sciences",nb:3,needs:"mulumba",look:{s:"f",h:.97,skin:"#bb7253",c:"#f2f2f2",k:"uniforme",co:"tresses",faceKey:"avatars/f3"},intro:["Je suis scientifique : j\u2019aime comprendre comment marche le monde.","Eau, air, lumi\xE8re, gravit\xE9 : testons tes connaissances."],outro:"Excellent ! Tu es un petit scientifique. Direction le port de Matadi."},lunda:{sc:"port",x:-5,z:-3,ry:.3,name:"Capitaine Lunda",short:"le capitaine",role:"Capitaine de port",kind:"quiz",sujet:"port",nb:3,needs:"mbuyi",look:{s:"h",h:1.03,skin:"#a7766b",c:"#f2f2f2",k:"uniforme",co:"courtes",faceKey:"avatars/h4",cravate:!0},intro:["Bienvenue au port de Matadi ! Les bateaux arrivent du monde entier.","Ici, on charge et on d\xE9charge des tonnes de marchandises."],outro:"Tr\xE8s bien ! Madame Ndala va te parler d\u2019argent."},ndala:{sc:"port",x:6,z:-4,ry:-.4,name:"Madame Ndala",short:"Madame Ndala",role:"Comptable",kind:"quiz",sujet:"argent",nb:3,needs:"lunda",look:{s:"f",h:.97,skin:"#b17869",c:"#2c3e50",k:"uniforme",co:"nattes",faceKey:"avatars/f2"},intro:["Je suis comptable : je m\u2019occupe de l\u2019argent du port.","Bien g\xE9rer son argent, c\u2019est apprendre \xE0 compter et \xE0 \xE9conomiser."],outro:"Bravo ! Il te reste une derni\xE8re \xE9tape : le Parlement, \xE0 Kinshasa."},mbala:{sc:"parlement",x:-5,z:-6.2,ry:.3,name:"Honorable Mbala",short:"l\u2019Honorable Mbala",role:"D\xE9put\xE9",kind:"quiz",sujet:"institutions",nb:3,needs:"ndala",look:{s:"h",h:1.02,skin:"#79493b",c:"#1c2a44",k:"uniforme",co:"courtes",faceKey:"avatars/h3",cravate:!0},intro:["Bienvenue au Parlement ! Ici se votent les lois du pays.","Un bon citoyen conna\xEEt le fonctionnement de ses institutions."],outro:"Excellent ! Il te reste une derni\xE8re personne : la s\xE9natrice Nkulu."},nkulu:{sc:"parlement",x:6,z:-6,ry:-.4,name:"S\xE9natrice Nkulu",short:"la s\xE9natrice",role:"S\xE9natrice",kind:"quiz",sujet:"civisme",nb:3,needs:"mbala",look:{s:"f",h:.98,skin:"#7a4a2e",c:"#8e44ad",k:"boubou",co:"tresses",faceKey:"portraits/ilunga"},intro:["F\xE9licitations, tu es arriv\xE9 au dernier \xE9pisode !","\xCAtre citoyen, c\u2019est respecter les autres et participer \xE0 la vie du pays."],outro:"F\xE9licitations ! Tu as termin\xE9 les quinze \xE9pisodes. Tu es un vrai citoyen et un champion !"}});ai.push({id:"biblio",scene:"biblio",name:"La biblioth\xE8que",icon:"\u{1F4DA}",npcs:["nzuzi","kabasele"]},{id:"gare",scene:"gare",name:"La gare routi\xE8re",icon:"\u{1F68C}",npcs:["mayala","bokasa"]},{id:"ferme",scene:"ferme",name:"La ferme",icon:"\u{1F33D}",npcs:["mwamba","lutumba"]},{id:"foret",scene:"foret",name:"La for\xEAt \xE9quatoriale",icon:"\u{1F333}",npcs:["mutombo","bisimwa"]},{id:"musee",scene:"musee",name:"Le mus\xE9e",icon:"\u{1F3DB}",npcs:["tshibola","kitenge"]},{id:"stade",scene:"stade",name:"Le stade",icon:"\u26BD",npcs:["mbemba","kalala"]},{id:"mine",scene:"mine",name:"La mine de cuivre",icon:"\u26CF",npcs:["kasongo","mwenze"]},{id:"observatoire",scene:"observatoire",name:"L\u2019observatoire",icon:"\u{1F52D}",npcs:["mulumba","mbuyi"]},{id:"port",scene:"port",name:"Le port de Matadi",icon:"\u{1F6A2}",npcs:["lunda","ndala"]},{id:"parlement",scene:"parlement",name:"Le Parlement",icon:"\u{1F3DB}",npcs:["mbala","nkulu"]});var ct=(n,e,t,i)=>new _e(Object.assign({color:n,roughness:e===void 0?.85:e,metalness:t||0},i||{})),tl=(n,e,t)=>{let i=new K(new Fo(n,e,6,14),t);return i.castShadow=!0,i},ut=(n,e,t,i,s,r)=>{let a=new K(new rt(n,r||20,r?Math.round(r*.8):16),e);return a.scale.set(t||1,i||1,s||1),a.castShadow=!0,a},Ki=(n,e,t)=>{let i=new Ue;return i.position.set(n,e,t),i},xy=(n,e,t)=>n+(e-n)*t,ya=(n,e,t,i,s)=>{let r=new tn(n,e,t,s||14,3);r.translate(0,-t/2,0);let a=new K(r,i);return a.castShadow=!0,a};function yy(n){let e=n?[[.14,0],[.16,.07],[.15,.15],[.118,.27],[.138,.38],[.152,.46],[.142,.54],[.09,.6],[.05,.64]]:[[.14,0],[.156,.07],[.15,.15],[.13,.27],[.15,.38],[.168,.47],[.16,.55],[.1,.61],[.055,.65]],t=new ia(e.map(i=>new fe(i[0],i[1])),28);if(t.scale(n?1.12:1.24,1,.76),n){let i=t.attributes.position;for(let s=0;s<i.count;s++){let r=i.getY(s),a=i.getZ(s);if(a>0&&r>.32&&r<.5){let o=Math.exp(-Math.pow((r-.41)/.06,2));i.setZ(s,a*(1+.17*o)),i.setY(s,r+.004*o)}}}return t.computeVertexNormals(),t}var Ss=null;function _a(){if(Ss)return Ss;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgb(128,128,255)",e.fillRect(0,0,128,128);for(let t=0;t<60;t++){let i=Math.random()*128,s=Math.random()*128,r=20+Math.random()*50,a=(Math.random()-.5)*.8,o=e.createLinearGradient(i,s,i+8,s);o.addColorStop(0,"rgba(90,128,255,.7)"),o.addColorStop(.5,"rgba(160,128,255,.7)"),o.addColorStop(1,"rgba(128,128,255,0)"),e.save(),e.translate(i,s),e.rotate(Math.PI/2+a),e.fillStyle=o,e.fillRect(0,0,r,6),e.restore()}return Ss=new jt(n),Ss.wrapS=Ss.wrapT=Wt,Ss.repeat.set(3,3),Ss}function nl(n,e,t){let i=new Image;i.onload=()=>{let s=document.createElement("canvas");s.width=s.height=128;let r=t[0]*i.width,a=t[1]*i.height,o=(t[2]-t[0])*i.width,l=(t[3]-t[1])*i.height;s.getContext("2d").drawImage(i,r,a,o,l,0,0,128,128);let c=new jt(s);c.colorSpace=at,c.wrapS=c.wrapT=ps,c.repeat.set(2,2),c.anisotropy=4,n.map=c,n.color.set(16777215),n.needsUpdate=!0},i.src="img/chars/"+e+".webp"}var Mu={};function Eu(n){Mu=n||{}}var _y=new Wi,_u={};function My(n,e){let t=e||n;if(_u[t])return _u[t];let i=_y.load(e||"img/"+n+".jpg");return i.colorSpace=at,i.anisotropy=4,_u[t]=i}var bu=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function by(n){let e=n.hair||n.co||"courtes",t={s:n.s||"f",h:n.h||1,skin:typeof n.skin=="number"?Mr[n.skin]||Mr[3]:n.skin||Mr[3],faceW:n.faceW===void 0?.5:n.faceW,jaw:n.jaw===void 0?.4:n.jaw,eyeS:n.eyeS===void 0?.5:n.eyeS,eyeC:pa[n.eyeC||1]||pa[1],brow:n.brow||0,nose:n.nose===void 0?.5:n.nose,lips:n.lips===void 0?.5:n.lips,lipC:ma[n.lipC||0]||ma[0],blush:n.blush===void 0?.3:n.blush,hair:e,hairHex:n.hairHex||(typeof n.hairC=="number"?Qo[n.hairC]:e==="gris"?"#d9d9d9":"#140d09"),beard:n.beard||0,acc:n.acc||[],outfit:n.outfit||(n.k==="pagne"?"pagne":n.k==="boubou"?"boubou":"uniforme"),c:n.cHex||(typeof n.outfitC=="number"?el[n.outfitC]:n.c||"#1f7a4d"),c2:n.c2,cravate:!!n.cravate,faceKey:n.faceKey||null,faceUrl:n.faceUrl||null};return n.s!=="f"&&t.hair,t}function Hf(n,e,t,i,s){let r=new rt(1,40,32,0,Math.PI*2,e||0,t||Math.PI),a=r.attributes.position,o=.092+.022*n.faceW,l=.122,c=.108,u=xy(.46,.14,n.jaw),d=r.attributes.uv,f=s?new Float32Array(a.count):null;for(let h=0;h<a.count;h++){let p=a.getX(h),v=a.getY(h),g=a.getZ(h);if(s){let m=s.rect,_=m.x+m.w/2,x=m.y+m.h*s.cy,M=_+p*m.w*.5*s.kx,C=x-(v-s.y0)*m.h*.5*s.ky;d.setXY(h,M,1-C);let S=Math.hypot(p/.98,(v-s.y0)/1.05);f[h]=bu(.12,.5,g)*(1-bu(.62,.95,S))}if(v<-.05){let m=Math.min(1,(-v-.05)/.95),_=1-u*Math.pow(m,1.35);p*=_,g*=1-u*.55*Math.pow(m,1.35),g>0&&(g*=1-.1*m)}g>0&&v>-.45&&v<.2&&(p*=1+.03*n.faceW),a.setXYZ(h,p*o*(i||1),v*l*(i||1),g*c*(i||1))}return s&&r.setAttribute("faceMask",new At(f,1)),r.computeVertexNormals(),r}function il(n){let e=by(n),t=Zi[e.outfit]||Zi.uniforme,i=e.s==="f",s=e.faceUrl?"u":e.faceKey,r=e.faceUrl&&Mu._user||Mu[e.faceKey||""],a=r?{rect:r,cy:.5,kx:1.12,ky:1.08,y0:-.2}:null;a&&r.skin&&(e.skin=r.skin);let o=new Ve(e.skin),l=new Bn({color:o,roughness:.55,emissive:o.clone().multiplyScalar(.09),sheen:.5,sheenRoughness:.5,sheenColor:o.clone().multiplyScalar(1.5)}),c=ct(o.clone().multiplyScalar(.7),.6),u=ct(e.hairHex,.5,.08),d=ct(e.c,.85,0,{normalMap:_a(),normalScale:new fe(.5,.5)});n.fabric&&nl(d,n.fabric.id,n.fabric.top);let f=ct("#1c1410",.7),h=t.top==="wax"?ct("#ffffff",.85,0,{map:xr(e.c,e.c2||"#e0a526")}):null,p=h||d,v=t.bottom;v==="auto"&&(v=i?"skirt":"trousers");let g=t.matchTrouser?new Ve(e.c).multiplyScalar(.6):new Ve(t.trouser||"#262a3a"),m=ct(g,.9,0,{normalMap:_a(),normalScale:new fe(.55,.55)});n.fabric&&n.fabric.bottom&&nl(m,n.fabric.id,n.fabric.bottom);let _=v==="long",x=v==="skirt",M=v==="trousers",C=new Ue,S=new Ue;C.add(S);let w=Ki(0,.95,0);S.add(w);let O=ut(.16,M?m:_||x?p:m,1.22,.62,.86);O.position.y=.02,w.add(O);let y=Ki(0,.06,0);w.add(y);let b=new K(yy(i),p);if(b.castShadow=!0,y.add(b),t.collar){let U=new K(new zn(.072,.016,8,20),ct("#f2f2f2",.8));U.rotation.x=Math.PI/2,U.position.set(0,.605,.005),U.scale.set(1.25,1,.9),y.add(U)}if(t.belt){let U=new K(new zn(.17,.012,8,24),ct("#e0a526",.4,.7));U.rotation.x=Math.PI/2,U.position.set(0,.06,0),U.scale.set(1.1,.8,1),y.add(U)}if(e.cravate){let U=new K(new dt(.05,.3,.015),ct("#a8301e",.7));U.position.set(0,.36,.125),y.add(U)}if(t.trim){let U=new K(new zn(.085,.012,8,20),ct("#e0a526",.4,.7));U.rotation.x=Math.PI/2,U.position.set(0,.55,.03),U.scale.set(1.4,1,1.1),y.add(U)}let N=Ki(0,.6,0);y.add(N);let X=tl(.045,.06,l);X.position.y=.04,N.add(X);let G=Ki(0,.1,0);G.scale.setScalar(1.12),N.add(G);let D=l;a&&(D=new _e({color:o,map:My(e.faceKey,e.faceUrl),roughness:.62,emissive:o.clone().multiplyScalar(.05)}),D.onBeforeCompile=U=>{U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
attribute float faceMask;
varying float vFM;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFM=faceMask;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
varying float vFM;`).replace("#include <map_fragment>","vec4 txc=texture2D(map,vMapUv);diffuseColor.rgb=mix(diffuseColor.rgb,txc.rgb,vFM);")});let z=new K(Hf(e,0,Math.PI,1,a),D);z.position.y=.12,z.castShadow=!0,G.add(z);let Z=.092+.022*e.faceW;[-1,1].forEach(U=>{let I=ut(.026,l,.5,1,.8);I.position.set(U*(Z+.004),.125,-.005),G.add(I)});let de=G.children.length;e.blush>.05&&[-1,1].forEach(U=>{let I=ut(.03,ct("#d4607a",.9,0,{transparent:!0,opacity:.18*e.blush*2}),1,.8,.3);I.position.set(U*.05,.095,.088),G.add(I)});let re=.0175*(.85+e.eyeS*.5),te=ct("#f7f3ec",.35),pe=ct(e.eyeC,.25),me=ct("#050302",.2),Se=new Ct({color:16777215}),Q=[];[-1,1].forEach(U=>{let I=U*.04,W=.146,ee=ut(re,te,1.25,.9,.65);ee.position.set(I,W,.087),G.add(ee);let ye=ut(re*.62,pe,1,1,.5);ye.position.set(I,W,.087+re*.5),G.add(ye);let Te=ut(re*.32,me,1,1,.4);Te.position.set(I,W,.087+re*.62),G.add(Te);let Re=ut(re*.16,Se,1,1,1,8);Re.position.set(I+U*.0035,W+.004,.087+re*.8),G.add(Re),Q.push(ee,ye,Te);let ce=new K(new rt(re*1.28,16,8,0,Math.PI*2,0,Math.PI*.46),c);if(ce.scale.set(1.2,.9,.8),ce.position.set(I,W+.001,.088),ce.rotation.x=-.15,G.add(ce),i){let le=new K(new dt(re*2.5,.003,.006),u);le.position.set(I,W+re*1,.097),le.rotation.z=-U*.1,G.add(le)}let j=.036,J=e.brow===1?.011:.0055,q=new K(new dt(j,J,.008),u);if(q.position.set(I,.176+(e.brow===2?.004:0),.092),q.rotation.z=-U*(e.brow===2?.22:.08),G.add(q),e.brow===2){let le=q.clone();le.position.x=I+U*.014,le.position.y=.172,le.rotation.z=U*.12,G.add(le)}});let ue=.8+e.nose*.7,be=new K(new dt(.016*ue,.04,.012),l);be.position.set(0,.128,.1),G.add(be);let Ne=ut(.0165*ue,l,1,.9,1);Ne.position.set(0,.103,.107),G.add(Ne),[-1,1].forEach(U=>{let I=ut(.011*ue,l,1,.9,.9);I.position.set(U*.015*ue,.1,.1),G.add(I);let W=ut(.004,ct("#1a0f0a",.5),1,1,1,8);W.position.set(U*.008*ue,.094,.113),G.add(W)});let we=.026+.012*e.lips,ze=.0045+.0045*e.lips,he=ct(e.lipC,.3),ge=ut(1,he,we,ze,.009,14);ge.position.set(0,.0745,.1),G.add(ge);let Ce=ut(1,he,we*.92,ze*1.35,.01,14);Ce.position.set(0,.0635,.099),G.add(Ce);let L=new Ue;L.position.set(0,.069,.099),G.add(L);let Me=new K(new dt(we*1.7,.002,.004),ct("#2a1210",.5));if(L.add(Me),a&&G.children.slice(de).forEach(I=>G.remove(I)),e.beard>0&&!i){let U=Hf(e,Math.PI*.54,Math.PI*.46,1.035),I=ct(e.hairHex,.9,0,e.beard===1?{transparent:!0,opacity:.42}:{}),W=new K(U,I);if(W.position.y=.12,G.add(W),e.beard===2){let ee=ut(1,u,.026,.007,.01);ee.position.set(0,.087,.104),G.add(ee)}}let $=e.hair,ve=(()=>{let U=document.createElement("canvas");U.width=64,U.height=128;let I=U.getContext("2d");I.fillStyle="rgb(128,128,255)",I.fillRect(0,0,64,128);for(let ee=0;ee<90;ee++){let ye=Math.random()*64,Te=I.createLinearGradient(ye-2,0,ye+2,0);Te.addColorStop(0,"rgba(80,128,255,.8)"),Te.addColorStop(.5,"rgba(180,128,255,.8)"),Te.addColorStop(1,"rgba(80,128,255,.0)"),I.fillStyle=Te,I.fillRect(ye-2,0,4,128)}let W=new jt(U);return W.wrapS=W.wrapT=Wt,W.repeat.set(6,1),W})();u.normalMap=ve,u.normalScale=new fe(.8,.8),u.roughness=.55;let oe=(U,I)=>{let W=(.098+.02*e.faceW)*U,ee=.128*U,ye=.113*U,Te=new rt(1,32,16,0,Math.PI*2,0,Math.PI*.4),Re=Te.attributes.position;for(let J=0;J<Re.count;J++){let q=Re.getX(J),le=Re.getY(J),ie=Re.getZ(J);if(ie>.15&&le<.82){let He=bu(.15,.9,ie)*(.82-le)/.4;Re.setY(J,le+.2*He*(1-.5*Math.abs(q)))}}Te.computeVertexNormals();let ce=new K(Te,u);ce.scale.set(W,ee,ye),ce.position.y=.125,ce.rotation.x=I===void 0?-.08:I,ce.castShadow=!0,G.add(ce);let j=new K(new rt(1,32,18,Math.PI*.1,Math.PI*.8,0,Math.PI*.66),u);return j.scale.set(W*1.01,ee*1.01,ye*1.01),j.position.y=.125,j.rotation.y=Math.PI,j.castShadow=!0,G.add(j),ce};if($==="courtes"||$==="gris")oe(1.06);else if($==="rase")oe(1);else if($==="tresses"){oe(1.07);for(let U=0;U<11;U++){let I=-1.35+U*.27,W=tl(.013,.22,u);W.position.set(Math.sin(I)*(Z+.014),.03,-.015-Math.cos(I)*.035),W.rotation.z=Math.sin(I)*.22,G.add(W)}}else if($==="nattes")oe(1.07),[-1,1].forEach(U=>{for(let I=0;I<4;I++){let W=ut(.026,u,1,1.35,1);W.position.set(U*(Z+.012),.1-I*.05,-.01+I%2*.006),G.add(W)}});else if($==="afro"){let U=new K(new Si(.16,4),u),I=U.geometry.attributes.position;for(let W=0;W<I.count;W++){let ee=1+(Math.sin(I.getX(W)*90)+Math.cos(I.getY(W)*80)*Math.sin(I.getZ(W)*70))*.035;I.setXYZ(W,I.getX(W)*ee,I.getY(W)*ee,I.getZ(W)*ee)}U.geometry.computeVertexNormals(),U.scale.set(1,.96,.95),U.position.set(0,.225,-.05),U.castShadow=!0,G.add(U)}else if($==="chignon"){oe(1.06);let U=ut(.055,u,1,.95,1);U.position.set(0,.255,-.045),G.add(U)}else if($==="noeuds"){oe(1.04);for(let U=0;U<14;U++){let I=U/14*Math.PI*2,W=U<9?.075:.04,ee=ut(.026,u,1,1,1,10);ee.position.set(Math.sin(I)*W,.225+(U<9?0:.03),Math.cos(I)*W*.9-.02),G.add(ee)}}else if($==="locks"){oe(1.08);for(let U=0;U<20;U++){let I=-2.5+U*.26;if(Math.abs(I)<.9)continue;let W=tl(.011,.32,u);W.position.set(Math.sin(I)*(Z+.018),0,-.02-Math.cos(I)*.05),W.rotation.z=Math.sin(I)*.12,G.add(W)}for(let U=0;U<5;U++){let I=tl(.011,.28,u);I.position.set((U-2)*.03,0,-.1),G.add(I)}}if($==="gris"){let U=ut(.05,u,1,.9,1);U.position.set(0,.24,-.06),G.add(U);let I=new K(new zn(.105,.03,10,24),ct("#1f7a4d",.8));I.rotation.x=Math.PI/2,I.position.y=.2,I.scale.set(1,1.05,1),G.add(I)}let Be=e.acc||[];if((Be.indexOf("boucles")>=0||i&&n.s==="f"&&n.h&&!n.acc)&&[-1,1].forEach(U=>{let I=ut(.009,ct("#e0a526",.3,.8),1,1,1,8);I.position.set(U*(Z+.008),.075,0),G.add(I);let W=ut(.007,ct("#e0a526",.3,.8),1,1.6,1,8);W.position.set(U*(Z+.008),.055,0),G.add(W)}),Be.indexOf("lunettes")>=0){let U=ct("#1a1a22",.3,.5);[-1,1].forEach(W=>{let ee=new K(new zn(.027,.0035,8,20),U);ee.position.set(W*.04,.146,.1),G.add(ee)});let I=new K(new dt(.02,.003,.003),U);I.position.set(0,.148,.103),G.add(I),[-1,1].forEach(W=>{let ee=new K(new dt(.003,.003,.1),U);ee.position.set(W*.068,.148,.05),G.add(ee)})}if(Be.indexOf("casquette")>=0){let U=ct("#c0392b",.7),I=new K(new rt(.12,22,12,0,Math.PI*2,0,Math.PI*.5),U);I.position.set(0,.21,0),I.scale.set(1,.95,1.05),I.castShadow=!0,G.add(I);let W=new K(new tn(.1,.1,.008,18,1,!1,-Math.PI/2,Math.PI),U);W.position.set(0,.215,.1),W.scale.set(1,1,.9),W.rotation.x=0,G.add(W)}if(Be.indexOf("foulard")>=0){let U=ct("#e0a526",.8),I=new K(new zn(.108,.032,10,24),U);I.rotation.x=Math.PI/2,I.position.y=.215,I.scale.set(1,1.05,1),G.add(I);let W=ut(.04,U,1.3,.7,.7);W.position.set(0,.26,-.07),G.add(W)}if(Be.indexOf("collier")>=0){let U=ct("#f4efe6",.3,.2);for(let I=0;I<16;I++){let W=I/16*Math.PI*2,ee=ut(.011,U,1,1,1,8);ee.position.set(Math.sin(W)*.095,.585,Math.cos(W)*.075+.03),y.add(ee)}}if(Be.indexOf("sac")>=0){let U=ct("#2e86de",.7),I=new K(new dt(.28,.34,.12),U);I.position.set(0,.3,-.17),I.castShadow=!0,y.add(I);let W=new K(new dt(.2,.14,.03),ct("#1f5fa8",.7));W.position.set(0,.22,-.24),y.add(W),[-1,1].forEach(ee=>{let ye=new K(new dt(.03,.3,.02),ct("#1f5fa8",.7));ye.position.set(ee*.09,.38,.1),y.add(ye)})}let Ae=[];[-1,1].forEach(U=>{let I=Ki(U*(i?.215:.24),.5,0);y.add(I);let W=_||t.sleeves==="long",ee=ut(.058,p,1,1,1,14);I.add(ee);let ye=ya(.052,.042,.29,l);I.add(ye);let Te=ya(.058,W?.047:.05,W?.29:.15,p);I.add(Te);let Re=Ki(0,-.29,0);I.add(Re);let ce=ut(.043,W?p:l,1,1,1,12);Re.add(ce);let j=ya(.042,.031,.26,W?p:l);Re.add(j);let J=new Ue;J.position.y=-.27,Re.add(J);let q=ut(1,l,.036,.058,.02,12);q.position.y=-.05,J.add(q);let le=ut(1,l,.034,.045,.016,10);le.position.y=-.1,J.add(le);let ie=ut(1,l,.015,.035,.015,8);ie.position.set(U*-.03,-.045,.012),ie.rotation.z=U*.5,J.add(ie),I.rotation.z=U*.07,Ae.push({sh:I,el:Re})});let A=[];[-1,1].forEach(U=>{let I=Ki(U*.09,0,0);w.add(I);let W=M?m:l,ee=M?.012:0,ye=ya(.088+ee,.062+ee,.43,W);I.add(ye);let Te=Ki(0,-.43,0);I.add(Te);let Re=ut(.063+ee,W,1,1,1,12);Te.add(Re);let ce=ya(.058+ee,.036+ee,.41,W);Te.add(ce);let j=ut(1,W,.056+ee,.12,.062+ee,12);j.position.set(0,-.12,-.012),Te.add(j);let J=new Ue;J.position.y=-.43,Te.add(J);let q=ut(1,f,.05,.036,.115,12);q.position.set(0,-.012,.05),J.add(q);let le=ut(1,f,.043,.04,.05,10);le.position.set(0,0,-.03),J.add(le),A.push({hj:I,kn:Te})});let T=null;if(x){let U=h?xr(e.c,e.c2||"#e0a526"):null,I=U?new _e({map:U,roughness:.85,side:ot,normalMap:_a(),normalScale:new fe(.5,.5)}):ct(e.c,.85,0,{side:ot,normalMap:_a(),normalScale:new fe(.5,.5)});n.fabric&&!U&&nl(I,n.fabric.id,n.fabric.skirt||n.fabric.top);let W=new K(new tn(.19,t.belt?.34:.3,t.belt?.7:.62,24,1,!0),I);W.position.y=t.belt?-.37:-.34,W.castShadow=!0,w.add(W)}if(_){let U=new _e({map:cf(e.c,.16),roughness:.8,side:ot,normalMap:_a(),normalScale:new fe(.6,.6)});n.fabric&&nl(U,n.fabric.id,n.fabric.skirt||n.fabric.top);let I=new K(new tn(.2,.37,.98,28,1,!0),U);if(I.position.y=-.45,I.castShadow=!0,w.add(I),t.trim){let W=new K(new zn(.37,.012,6,28),ct("#e0a526",.4,.7));W.rotation.x=Math.PI/2,W.position.y=-.93,w.add(W)}A.forEach(W=>{W.kn.visible=!1}),T=[-1,1].map(W=>{let ee=new K(new dt(.09,.06,.2),f);return ee.position.set(W*.09,-.94,.06),w.add(ee),ee})}let k={t:Math.random()*10};function xe(U,I){k.t+=U,I=I||{};let W=I.speed||0,ee=k.t,ye=Math.min(1,W/2.2),Te=W>3.2,Re=ee*(Te?11:7.5),ce=!!I.sit;if(ce)S.position.y=-.46,A.forEach(ie=>{ie.hj.rotation.x=-Math.PI/2+.05,ie.kn.rotation.x=Math.PI/2-.05}),T&&T.forEach(ie=>{ie.visible=!1});else{S.position.y=Math.abs(Math.sin(Re))*.035*ye*(Te?1.6:1);let ie=(Te?.95:.6)*ye;A[0].hj.rotation.x=Math.sin(Re)*ie,A[1].hj.rotation.x=-Math.sin(Re)*ie,A[0].kn.rotation.x=Math.max(0,-Math.sin(Re))*ie*1.3+.04,A[1].kn.rotation.x=Math.max(0,Math.sin(Re))*ie*1.3+.04,T&&T.forEach(He=>{He.visible=!0})}b.scale.y=1+Math.sin(ee*1.8)*.012,y.rotation.y=Math.sin(Re)*.12*ye,y.rotation.x=.05*ye+(Te?.12:0),w.rotation.y=-Math.sin(Re)*.08*ye;let j=Ae[0],J=Ae[1],q=(Te?.9:.55)*ye;j.sh.rotation.x=ce?-.5:Math.sin(Re)*q,J.sh.rotation.x=ce?-.5:-Math.sin(Re)*q,j.el.rotation.x=-.12-(ce?.6:0)-Math.max(0,Math.sin(Re))*.5*ye,J.el.rotation.x=-.12-(ce?.6:0)-Math.max(0,-Math.sin(Re))*.5*ye,j.sh.rotation.z=-.08,J.sh.rotation.z=.08,!W&&!ce&&(j.sh.rotation.x=Math.sin(ee*1.3)*.03,J.sh.rotation.x=-Math.sin(ee*1.3)*.03),I.talk?(J.sh.rotation.x=-.9+Math.sin(ee*5)*.25,J.sh.rotation.z=.35,J.el.rotation.x=-1+Math.sin(ee*6.2)*.35,G.rotation.x=Math.sin(ee*4)*.05,G.rotation.y=Math.sin(ee*1.7)*.12,L.scale.y=1+Math.abs(Math.sin(ee*12))*3,Ce.position.y=.0635-Math.abs(Math.sin(ee*12))*.006):(G.rotation.x=0,G.rotation.y=W?0:Math.sin(ee*.7)*.18,L.scale.y=1,Ce.position.y=.0635),I.wave&&(J.sh.rotation.x=0,J.sh.rotation.z=2.5+Math.sin(ee*9)*.18,J.el.rotation.x=-.5+Math.sin(ee*9)*.4),I.pose==="creator"&&(G.rotation.y=Math.sin(ee*.5)*.15,J.sh.rotation.x=0,j.sh.rotation.x=0);let le=Math.sin(ee*.9)>.985?.1:1;Q.forEach(ie=>{ie.scale.y=(ie.userData.sy||(ie.userData.sy=ie.scale.y))*le})}return C.scale.setScalar(e.h||1),Object.assign(C.userData,{update:xe,state:k,height:1.78*(e.h||1),headY:1.78}),C}var Ey={lola:1,ilunga:1,bea:1,mama:1,kasa:1},Ma={lola:1.55,ilunga:1.68,junior:1.45,mavungu:1.78,bea:1.65,mama:1.68,jer:1.62,kasa:1.25,pf1:1.72,pf2:1.68,ph1:1.82,ph2:1.78},Sy=new Wi,Su={};function Gf(n){if(Su[n])return Su[n];let e=Sy.load("img/chars/"+n+".webp");return e.colorSpace=at,e.anisotropy=4,e.generateMipmaps=!0,Su[n]=e}var Tu=null;function Ty(){if(Tu)return Tu;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Tu=new jt(n)}function wu(n,e){e=e||{};let t=e.height||Ma[n]||1.7,i=new Ue,s=new K(new qe(1,1),new Ct({map:Ty(),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,s.scale.set(t*.5,t*.28,1),i.add(s);let r=new Ue;i.add(r);let a=y=>new Ct({map:y,transparent:!0,alphaTest:.45,side:ot,color:new Ve(e.tone||"#f4f1ec")}),o=a(Gf(n)),l=e.walk?a(Gf(e.walk)):null,c=14,u=36,d=new qe(1,1,c,u);d.translate(0,.5,0);let f=d.attributes.position,h=Float32Array.from(f.array),p=!!Ey[n],v=!!e.walk,g=new K(d,o);r.add(g);let m=(y,b,N)=>{let X=Math.min(1,Math.max(0,(N-y)/(b-y)));return X*X*(3-2*X)};function _(y,b,N,X,G){let D=Math.sin(y),z=Math.max(0,D)*.085*b,Z=Math.max(0,-D)*.085*b,de=D*.08*b,re=Math.sin(X*.5)*.006*G;for(let te=0;te<f.count;te++){let pe=h[te*3],me=h[te*3+1],Se=pe,Q=me,ue=me;if(!p&&!v&&ue<.54&&b>0){let be=m(.52,.04,ue),Ne=m(.06,-.06,pe);Q+=(z*Ne+Z*(1-Ne))*be*be}if(p&&b>0&&ue<.62){let be=m(.6,.05,ue);Se+=Math.sin(y+ue*5)*.018*b*be,Q+=Math.abs(D)*.01*b*be}if(b>0&&ue>.42&&ue<.86){let be=m(.2,.34,Math.abs(pe))*m(.42,.55,ue)*m(.86,.74,ue),Ne=pe<0?1:-1;Q+=(Q-.8)*de*Ne*be*3}N&&ue>.84&&(Q+=Math.sin(X*5)*.004*m(.84,.96,ue)),Se+=re*m(0,1,ue),f.setXYZ(te,Se,Q,0)}f.needsUpdate=!0}_(0,0,!1,0,1);let x=.33,M=()=>{g.scale.set(t*x,t,1),s.scale.set(Math.max(.5,t*x*1.1),t*.2,1)};M();let C=o.map,S=setInterval(()=>{C.image&&C.image.width&&(x=C.image.width/C.image.height,M(),clearInterval(S))},60),w={t:Math.random()*10,ph:0};function O(y,b){b=b||{},w.t+=y;let N=w.t,X=b.speed||0;b.cam&&(r.rotation.y=Math.atan2(b.cam.x-i.position.x,b.cam.z-i.position.z)-i.rotation.y);let G=0,D=0,z=1,Z=1,de=o;if(X>.1){w.ph+=y*(X>3.2?9:6.5);let re=Math.sin(w.ph);G=Math.abs(re)*.012*(X>3.2?1.5:1),D=re*.035,l&&(de=Math.floor(w.ph/Math.PI)%2?l:o,Z=1),b.lean&&(D+=b.lean*.05)}else w.ph=0,z=1+Math.sin(N*1.8)*.004,D=Math.sin(N*.9)*.008;b.talk&&(G+=Math.abs(Math.sin(N*6))*.012,D+=Math.sin(N*4)*.012),b.wave&&(G+=Math.abs(Math.sin(N*9))*.04,D+=Math.sin(N*9)*.07),g.material=de,g.position.y=G,g.rotation.z=D,g.scale.y=t*z,_(w.ph,Math.min(1,X/2.2),!!b.talk,N,X>.1?0:1),g.scale.x=t*x*Z}return Object.assign(i.userData,{update:O,state:w,height:t,photo:!0}),i}var ba=class n extends K{constructor(){let e=n.SkyShader,t=new yt({name:e.name,uniforms:un.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Qt,depthWrite:!1});super(new dt(1,1,1),t),this.isSky=!0}};ba.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Ji={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wy=new Hi(-1,1,1,-1,0,1),Au=class extends xt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},Ay=new Au,oi=class{constructor(e){this._mesh=new K(Ay,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var br=class extends xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=un.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new oi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ea=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sl=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new br(Ji),this.copyPass.material.blending=Ft,this.clock=new Go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ea!==void 0&&(a instanceof Ea?i=!0:a instanceof sl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var al=class extends xn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Sa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ta={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ol={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Vf(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Ry(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new lr(s,e,e);return r.wrapS=Wt,r.wrapT=Wt,r.needsUpdate=!0,r}function Ry(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}var wa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ru(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ru(n,e,t){let i=Cy(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function Cy(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new P(Math.cos(r),Math.sin(r),a))}return i}var ll=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(l+c)*u,f=l-d,h=c-d,p=e-f,v=t-h,g,m;p>v?(g=1,m=0):(g=0,m=1);let _=p-g+u,x=v-m+u,M=p-1+2*u,C=v-1+2*u,S=l&255,w=c&255,O=this.perm[S+this.perm[w]]%12,y=this.perm[S+g+this.perm[w+m]]%12,b=this.perm[S+1+this.perm[w+1]]%12,N=.5-p*p-v*v;N<0?i=0:(N*=N,i=N*N*this.dot(this.grad3[O],p,v));let X=.5-_*_-x*x;X<0?s=0:(X*=X,s=X*X*this.dot(this.grad3[y],_,x));let G=.5-M*M-C*C;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[b],M,C)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(i+c),h=1/6,p=(u+d+f)*h,v=u-p,g=d-p,m=f-p,_=e-v,x=t-g,M=i-m,C,S,w,O,y,b;_>=x?x>=M?(C=1,S=0,w=0,O=1,y=1,b=0):_>=M?(C=1,S=0,w=0,O=1,y=0,b=1):(C=0,S=0,w=1,O=1,y=0,b=1):x<M?(C=0,S=0,w=1,O=0,y=1,b=1):_<M?(C=0,S=1,w=0,O=0,y=1,b=1):(C=0,S=1,w=0,O=1,y=1,b=0);let N=_-C+h,X=x-S+h,G=M-w+h,D=_-O+2*h,z=x-y+2*h,Z=M-b+2*h,de=_-1+3*h,re=x-1+3*h,te=M-1+3*h,pe=u&255,me=d&255,Se=f&255,Q=this.perm[pe+this.perm[me+this.perm[Se]]]%12,ue=this.perm[pe+C+this.perm[me+S+this.perm[Se+w]]]%12,be=this.perm[pe+O+this.perm[me+y+this.perm[Se+b]]]%12,Ne=this.perm[pe+1+this.perm[me+1+this.perm[Se+1]]]%12,we=.6-_*_-x*x-M*M;we<0?s=0:(we*=we,s=we*we*this.dot3(this.grad3[Q],_,x,M));let ze=.6-N*N-X*X-G*G;ze<0?r=0:(ze*=ze,r=ze*ze*this.dot3(this.grad3[ue],N,X,G));let he=.6-D*D-z*z-Z*Z;he<0?a=0:(he*=he,a=he*he*this.dot3(this.grad3[be],D,z,Z));let ge=.6-de*de-re*re-te*te;return ge<0?o=0:(ge*=ge,o=ge*ge*this.dot3(this.grad3[Ne],de,re,te)),32*(s+r+a+o)}noise4d(e,t,i,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,d,f,h,p,v=(e+t+i+s)*l,g=Math.floor(e+v),m=Math.floor(t+v),_=Math.floor(i+v),x=Math.floor(s+v),M=(g+m+_+x)*c,C=g-M,S=m-M,w=_-M,O=x-M,y=e-C,b=t-S,N=i-w,X=s-O,G=y>b?32:0,D=y>N?16:0,z=b>N?8:0,Z=y>X?4:0,de=b>X?2:0,re=N>X?1:0,te=G+D+z+Z+de+re,pe=a[te][0]>=3?1:0,me=a[te][1]>=3?1:0,Se=a[te][2]>=3?1:0,Q=a[te][3]>=3?1:0,ue=a[te][0]>=2?1:0,be=a[te][1]>=2?1:0,Ne=a[te][2]>=2?1:0,we=a[te][3]>=2?1:0,ze=a[te][0]>=1?1:0,he=a[te][1]>=1?1:0,ge=a[te][2]>=1?1:0,Ce=a[te][3]>=1?1:0,L=y-pe+c,Me=b-me+c,$=N-Se+c,ve=X-Q+c,oe=y-ue+2*c,Be=b-be+2*c,Ae=N-Ne+2*c,A=X-we+2*c,T=y-ze+3*c,k=b-he+3*c,xe=N-ge+3*c,U=X-Ce+3*c,I=y-1+4*c,W=b-1+4*c,ee=N-1+4*c,ye=X-1+4*c,Te=g&255,Re=m&255,ce=_&255,j=x&255,J=o[Te+o[Re+o[ce+o[j]]]]%32,q=o[Te+pe+o[Re+me+o[ce+Se+o[j+Q]]]]%32,le=o[Te+ue+o[Re+be+o[ce+Ne+o[j+we]]]]%32,ie=o[Te+ze+o[Re+he+o[ce+ge+o[j+Ce]]]]%32,He=o[Te+1+o[Re+1+o[ce+1+o[j+1]]]]%32,De=.6-y*y-b*b-N*N-X*X;De<0?u=0:(De*=De,u=De*De*this.dot4(r[J],y,b,N,X));let $e=.6-L*L-Me*Me-$*$-ve*ve;$e<0?d=0:($e*=$e,d=$e*$e*this.dot4(r[q],L,Me,$,ve));let Ge=.6-oe*oe-Be*Be-Ae*Ae-A*A;Ge<0?f=0:(Ge*=Ge,f=Ge*Ge*this.dot4(r[le],oe,Be,Ae,A));let Ee=.6-T*T-k*k-xe*xe-U*U;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this.dot4(r[ie],T,k,xe,U));let F=.6-I*I-W*W-ee*ee-ye*ye;return F<0?p=0:(F*=F,p=F*F*this.dot4(r[He],I,W,ee,ye)),27*(u+d+f+h+p)}};var Er=class n extends xn{constructor(e,t,i,s,r,a,o){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:yn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Sa.defines),uniforms:un.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,blending:Ft,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ko,this.normalMaterial.blending=Ft,this.pdMaterial=new yt({defines:Object.assign({},wa.defines),uniforms:un.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},Ta.defines),uniforms:un.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:Ft}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:un.clone(Ji.uniforms),vertexShader:Ji.vertexShader,fragmentShader:Ji.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Wo,blendDst:gr,blendEquation:Nn,blendSrcAlpha:Vo,blendDstAlpha:gr,blendEquationAlpha:Nn}),this.blendMaterial=new yt({uniforms:un.clone(ol.uniforms),vertexShader:ol.vertexShader,fragmentShader:ol.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zc,blendSrc:Wo,blendDst:gr,blendEquation:Nn,blendSrcAlpha:Vo,blendDstAlpha:gr,blendEquationAlpha:Nn}),this.fsQuad=new oi(null),this.originalClearColor=new Ve,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new or,this.depthTexture.format=zi,this.depthTexture.type=_i,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Dt,magFilter:Dt,type:yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ru(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ft,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ft,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ft,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ft,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ft,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new ll,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new lr(s,e,e,An,ni);return r.wrapS=Wt,r.wrapT=Wt,r.needsUpdate=!0,r}};Er.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Sr=class n extends xn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new qt(r,a,{type:yn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new qt(r,a,{type:yn});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=Wf;this.highPassUniforms=un.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ji;this.copyUniforms=un.clone(u.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ve,this.oldClearAlpha=1,this.basic=new Ct,this.fsQuad=new oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Sr.BlurDirectionX=new fe(1,0);Sr.BlurDirectionY=new fe(0,1);var qf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var cl=class extends xn{constructor(){super();let e=qf;this.uniforms=un.clone(e.uniforms),this.material=new Bo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Py={uniforms:{tDiffuse:{value:null},amount:{value:.32}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float amount;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);vec2 d=vUv-.5;float v=smoothstep(.85,.25,length(d*vec2(1.1,1.)));c.rgb*=mix(1.-amount,1.,v);gl_FragColor=c;}"};function Xf(n,e,t){let i={quality:"high",sunDir:new P,sky:null,env:null,composer:null,gtao:null,bloom:null},s=new ba;s.scale.setScalar(450),e.add(s),i.sky=s;let r=s.material.uniforms;r.turbidity.value=3.2,r.rayleigh.value=1.25,r.mieCoefficient.value=.0045,r.mieDirectionalG.value=.86;function a(u,d){let f=au.degToRad(90-u),h=au.degToRad(d);i.sunDir.setFromSphericalCoords(1,f,h),r.sunPosition.value.copy(i.sunDir)}a(34,205);let o=new ar(n);function l(){let u=new Gi;return u.add(s),i.env&&i.env.dispose(),i.env=o.fromScene(u),e.add(s),i.env.texture}i.envTex=l(),e.environment=i.envTex;function c(u,d){let f=new rl(n);f.setPixelRatio(n.getPixelRatio()),f.setSize(u,d),f.addPass(new al(e,t)),i.quality==="high"?(i.gtao=new Er(e,t,u,d),i.gtao.output=Er.OUTPUT.Default,i.gtao.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),i.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),i.gtao.blendIntensity=.9,f.addPass(i.gtao)):i.gtao=null,i.quality!=="low"&&(i.bloom=new Sr(new fe(u,d),.18,.65,.9),f.addPass(i.bloom)),f.addPass(new cl),i.quality!=="low"&&f.addPass(new br(Py)),i.composer=f}return i.setQuality=(u,d,f)=>{i.quality=u,i.composer&&i.composer.dispose&&i.composer.dispose(),i.composer=null,u!=="low"&&c(d,f)},i.resize=(u,d)=>{i.composer&&i.composer.setSize(u,d)},i.render=()=>{i.composer&&i.quality!=="low"?i.composer.render():n.render(e,t)},i.follow=()=>{s.position.copy(t.position)},i.setSun=a,i.setSky=u=>{u=u||{},r.turbidity.value=u.turb===void 0?3.2:u.turb,r.rayleigh.value=u.ray===void 0?1.25:u.ray,a(u.elev===void 0?34:u.elev,u.azim===void 0?205:u.azim),i.envTex=l(),e.environment=i.envTex},i}var Ly={pf1:.256,pf2:.28,ph1:.29,ph2:.306},Cu={village:{scale:[95,47,70,32],walk:[66,99],spawn:{x:30,y:92},entry:{marche:{x:70,y:86},maison:{x:24,y:88},fleuve:{x:34,y:95}}},marche:{scale:[98,56,75,38],walk:[72,99],spawn:{x:22,y:96},entry:{village:{x:14,y:96},portail:{x:62,y:80}}},portail:{scale:[98,56,78,40],walk:[76,99],spawn:{x:24,y:96},entry:{marche:{x:15,y:96},classe:{x:55,y:82}}},classe:{scale:[62,34,84,48],walk:[62,99],spawn:{x:26,y:92},entry:{portail:{x:50,y:92}}},maison:{scale:[98,64,80,48],walk:[78,99],spawn:{x:26,y:96},entry:{village:{x:76,y:96}}},fleuve:{scale:[95,50,75,34],walk:[78,99],spawn:{x:26,y:95},entry:{village:{x:16,y:95}}}},Qi={village:{img:"village",name:"Mon quartier",focus:48,amb:"village",items:[{k:"npc",id:"jer",x:60,y:93,h:44},{k:"npc",id:"kasa",x:71,y:95,h:44},{k:"go",to:"maison",x:19,y:58,ico:"\u2B06",label:"Entrer dans ma maison"},{k:"go",to:"marche",x:73,y:62,ico:"\u27A1",label:"Vers le march\xE9"},{k:"go",to:"fleuve",x:30,y:90,ico:"\u2B05",label:"Vers le fleuve"},{k:"tree",x:50,y:26,label:"Cueillir des mangues"}]},marche:{img:"marche",name:"Le march\xE9",focus:50,amb:"marche",items:[{k:"npc",id:"bea",x:46,y:98,h:56},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"},{k:"go",to:"portail",x:64,y:55,ico:"\u2B06",label:"Vers l\u2019\xE9cole"}]},portail:{img:"portail",name:"Le portail de l\u2019\xE9cole",focus:48,amb:"portail",items:[{k:"npc",id:"lola",x:42,y:98,h:56},{k:"go",to:"classe",x:55,y:50,ico:"\u2B06",label:"Entrer dans l\u2019\xE9cole",need:"lola"},{k:"go",to:"marche",x:9,y:88,ico:"\u2B05",label:"Retour au march\xE9"}]},classe:{img:"classe",name:"La classe",focus:50,amb:"classe",items:[{k:"npc",id:"ilunga",x:50,y:62,h:34},{k:"npc",id:"junior",x:40,y:80,h:40},{k:"npc",id:"mavungu",x:61,y:84,h:46},{k:"go",to:"portail",x:50,y:97,ico:"\u2B07",label:"Sortir de l\u2019\xE9cole"}]},maison:{img:"maison",name:"Ma maison",focus:50,amb:"maison",items:[{k:"npc",id:"mama",x:47,y:98,h:64},{k:"objs",x:19,y:74,label:"Mes objets"},{k:"go",to:"village",x:86,y:92,ico:"\u2B07",label:"Sortir"}]},fleuve:{img:"fleuve",name:"Le fleuve Congo",focus:50,amb:"fleuve",items:[{k:"fact",x:52,y:60,label:"Le fleuve Congo"},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"}]}};function jf(n){let{G:e,NPC:t,AUTOP:i,AUTO:s,actionFor:r,toast:a,speak:o,SFX:l,gain:c,save:u,refreshHud:d,openBox:f,esc:h,hasChar:p}=n,v=document.getElementById("pv");v.innerHTML='<div class="pblur"></div><div id="pstage"><div id="pdrift"><div class="pbg"></div><div id="pitems"></div></div></div><div class="pfade"></div><div class="pplace"></div><button class="pstop hide">Arr\xEAter</button><div class="phint hide">\u2194 Fais glisser pour regarder autour</div>';let g=v.querySelector("#pstage"),m=v.querySelector("#pdrift"),_=v.querySelector(".pbg"),x=v.querySelector("#pitems"),M=v.querySelector(".pblur"),C=v.querySelector(".phint"),S=v.querySelector(".pfade"),w=v.querySelector(".pplace"),O=v.querySelector(".pstop"),y={id:null,panX:0,W:0,H:0,dragged:!1,greeted:{},busy:!1,me:{x:30,y:92,walking:!1,cb:null}};function b(j){let J=v.clientWidth,q=v.clientHeight,le=Math.max(J,Math.min(q*16/9,J*2.15)),ie=le*9/16;y.vw=J,y.vh=q,y.W=le,y.H=ie,g.style.width=le+"px",g.style.height=ie+"px",g.style.top=(q-ie)*(ie<q?.5:.75)+"px";let He=Qi[y.id];j||(y.panX=J/2-le*(He?He.focus:50)/100),N(),X()}let N=()=>{y.panX=Math.min(0,Math.max(y.vw-y.W,y.panX))},X=()=>{g.style.left=y.panX+"px"};window.addEventListener("resize",()=>{y.id&&e.ui==="photo"&&b(!1)});let G=null;v.addEventListener("pointerdown",j=>{e.ui==="photo"&&(G={x:j.clientX,pan:y.panX,moved:!1},y.dragged=!1)}),v.addEventListener("pointermove",j=>{if(!G)return;let J=j.clientX-G.x;Math.abs(J)>7&&(G.moved=!0),G.moved&&(y.panX=G.pan+J,N(),X(),y.dragged=!0)});let D=()=>{G&&G.moved&&setTimeout(()=>{y.dragged=!1},80),G=null};v.addEventListener("pointerup",D),v.addEventListener("pointercancel",D);let z={renderer:null,scene:null,cam:null,model:null,canvas:null,sig:"",ry:0,last:0,active:!1};function Z(){if(z.renderer)return;let j=document.createElement("canvas");j.width=340,j.height=486,j.className="pcv",z.canvas=j;let J=new ms({canvas:j,alpha:!0,antialias:!0,premultipliedAlpha:!0});J.setPixelRatio(1),J.setSize(340,486,!1),J.setClearColor(0,0),J.outputColorSpace=at,J.toneMapping=_s,J.toneMappingExposure=1;let q=new Gi;q.add(new fr(14674687,9071178,1.5));let le=new mr(16773336,2.6);le.position.set(-1.5,3,3),q.add(le);let ie=new Hi(-.84,.84,2.25,-.15,-10,10);ie.position.z=5,z.renderer=J,z.scene=q,z.cam=ie}let de=()=>!(e.real&&p(e.real));function re(){Z();let j=JSON.stringify([e.look,e.photo]);z.model&&z.sig===j||(z.model&&(z.scene.remove(z.model),z.model.traverse(J=>{J.geometry&&J.geometry.dispose()})),z.model=n.makePlayer3D(),z.sig=j,z.model&&z.scene.add(z.model))}let te=(j,J)=>{let q=J-j;for(;q>Math.PI;)q-=2*Math.PI;for(;q<-Math.PI;)q+=2*Math.PI;return q};function pe(j){if(requestAnimationFrame(pe),!z.active||!z.model||!z.canvas.parentNode)return;let J=Math.min(.05,(j-z.last)/1e3);if(J<.026)return;z.last=j;let q=y.me,le=q.walking?q.hd||0:q.face||0;z.ry+=te(z.ry,le)*Math.min(1,J*(q.walking?12:7)),z.model.rotation.y=z.ry,z.model.userData.update(J,{speed:q.walking?2.7:0}),z.renderer.render(z.scene,z.cam)}requestAnimationFrame(pe);let me=()=>n.playerChar();function Se(j,J){let q=Cu[j].scale,le=(J-q[2])/(q[0]-q[2]);return q[3]+(q[1]-q[3])*le}function Q(){if(de()){let ie=Se(y.id,y.me.y)*1.72/1.7;return`<div class="pn me me3d" style="left:${y.me.x}%;top:${y.me.y}%;height:${ie}%;z-index:${Math.round(y.me.y*10)}"><i class="sh"></i></div>`}let j=me();if(!p(j))return"";let J=y.id,q=Se(J,y.me.y)*(Ma[j]||1.7)/1.7,le=`img/chars/${j}.webp`;return`<div class="pn me" style="left:${y.me.x}%;top:${y.me.y}%;height:${q}%;z-index:${Math.round(y.me.y*10)};--ar:${Ly[j]||.28}"><i class="sh"></i><div class="mp"><div class="ly u" style="background-image:url(${le})"></div><div class="ly l" style="background-image:url(${le})"></div><div class="ly r" style="background-image:url(${le})"></div></div></div>`}function ue(){return x.querySelector(".me")}function be(){let j=ue();if(!j)return;let J=me(),q=Se(y.id,y.me.y)*(de()?1.72:Ma[J]||1.7)/1.7;j.style.left=y.me.x+"%",j.style.top=y.me.y+"%",j.style.height=q+"%",j.style.zIndex=Math.round(y.me.y*10)}function Ne(){let j=y.panX+y.W*y.me.x/100,J=y.vw*.26,q=y.vw*.74;if(!(y.W<=y.vw+4)){if(j<J)y.panX+=(J-j)*.18;else if(j>q)y.panX-=(j-q)*.18;else return;N(),X()}}let we=0;function ze(j,J,q){let le=Cu[y.id],ie=y.me;ie.face=0,ie.tx=Math.min(95,Math.max(5,j)),ie.ty=Math.min(le.walk[1],Math.max(le.walk[0],J)),ie.cb=q||null;let He=ue();if(!He){q&&q();return}if(ie.walking)return;ie.walking=!0,He.classList.add("walk");let De=performance.now(),$e=Ge=>{if(!ie.walking||!ue())return;let Ee=Math.min(.05,(Ge-De)/1e3);De=Ge;let F=ie.tx-ie.x,Le=ie.ty-ie.y,Ie=Math.hypot(F,Le*.7),je=30*Ee;if(Ie<=je+.2){ie.x=ie.tx,ie.y=ie.ty,ie.walking=!1,be(),ue()&&ue().classList.remove("walk");let Xe=ie.cb;ie.cb=null,Xe&&Xe();return}ie.hd=Math.atan2(F*y.W/100,Le*y.H/100*1.7),ie.x+=F/Ie*je,ie.y+=Le/Ie*je,be(),Ne(),we=requestAnimationFrame($e)};we=requestAnimationFrame($e)}let he=j=>{let J=y.me.x<=j.x?-1:1;return{x:j.x+J*9,y:j.y}};function ge(j,J,q){let le=Qi[j];if(y.id=j,!J){let De=Cu[j],$e=q&&De.entry[q]||De.spawn;y.me.x=$e.x,y.me.y=$e.y,y.me.walking=!1,y.me.cb=null}_.style.backgroundImage=`url(img/scenes/${le.img}.jpg)`,M.style.backgroundImage=`url(img/scenes/${le.img}.jpg)`,w.textContent="\u{1F4CD} "+le.name;let ie="";le.items.forEach((De,$e)=>{if(De.k==="npc"){if(!p(De.id))return;let Ge=t[De.id]||i[De.id],Ee=De.h*(Ma[De.id]||1.7)/1.7,F=Ce(De.id);ie+=`<div class="pn ${F.cls}" data-i="${$e}" style="left:${De.x}%;top:${De.y}%;height:${Ee}%;z-index:${Math.round(De.y*10)}"><i class="sh"></i><img src="img/chars/${De.id}.webp" alt="" draggable="false"><span class="tag">${F.ico} ${h(Ge.short||Ge.name)}</span></div>`}else if(De.k==="go"){let Ge=De.need&&!n.doneNpc(De.need);ie+=`<button class="hs go${Ge?" locked":""}" data-i="${$e}" style="left:${De.x}%;top:${De.y}%"><span class="ic">${Ge?"\u{1F512}":De.ico}</span><span class="lb">${h(Ge?"Mama Lola garde le passage":De.label)}</span></button>`}else ie+=`<button class="hs ${De.k}" data-i="${$e}" style="left:${De.x}%;top:${De.y}%"><span class="ic">${De.k==="tree"?"\u{1F96D}":De.k==="objs"?"\u{1F9FA}":"\u2139\uFE0F"}</span><span class="lb">${h(De.label)}</span></button>`}),x.innerHTML=ie+Q();let He=x.querySelector(".me3d");if(He?(re(),He.appendChild(z.canvas),z.active=!0):z.active=!1,b(!1),!J){let De=le.items.find(Ge=>Ge.k==="npc"),$e=De?(y.me.x+De.x)/2:le.focus;y.panX=y.vw/2-y.W*$e/100,N(),X()}}function Ce(j){let J=t[j];return J?J.kind==="quiz"?n.locked(j)?{cls:"lock",ico:"\u{1F512}"}:n.doneNpc(j)?{cls:"done",ico:"\u2714"}:{cls:"todo",ico:"\u2757"}:{cls:"",ico:"\u{1F4AC}"}:{cls:"",ico:"\u{1F4AC}"}}function L(j,J){if(y.busy)return;if(y.busy=!0,A(),!y.id){ge(j,!1),y.busy=!1,Me(j);return}m.style.transition="transform .28s ease-in,opacity .28s ease-in",m.style.transform=`scale(${J&&J.back?.94:1.18})`,m.style.opacity="0",S.style.opacity="1",setTimeout(()=>{ge(j,!1,J&&J.from),m.style.transition="none",m.style.transform=`scale(${J&&J.back?1.1:.94})`,m.offsetWidth,m.style.transition="transform .42s ease-out,opacity .42s ease-out",m.style.transform="scale(1)",m.style.opacity="1",S.style.opacity="0",setTimeout(()=>{m.style.transition="",y.busy=!1,Me(j)},430)},290)}function Me(j){Re(Qi[j].amb);let q=Qi[j].items.find(le=>le.k==="npc"&&t[le.id]&&!y.greeted[le.id]&&p(le.id));q&&(y.greeted[q.id]=!0,setTimeout(()=>{y.id===j&&e.mode==="pview"&&Be(q.id,"Bonjour "+h(e.nom)+" !",3200)},700)),n.refreshHud(),y.vw<y.W-40&&!y.hinted&&(y.hinted=!0,C.classList.remove("hide"),setTimeout(()=>C.classList.add("hide"),5200))}let $=document.getElementById("bubble"),ve=null,oe=null;function Be(j,J,q){let le=x.querySelector(`.pn[data-i="${Qi[y.id].items.findIndex(ie=>ie.id===j)}"]`);le&&(oe=le,$.innerHTML=J,$.style.display="block",Ae(),clearTimeout(ve),ve=setTimeout(A,q||3500))}function Ae(){if(!oe)return;let j=oe.getBoundingClientRect(),J=v.clientWidth;$.style.left=Math.min(J-70,Math.max(70,j.left+j.width/2))+"px",$.style.top=Math.max(70,j.top+8)+"px"}function A(){$.style.display="none",oe=null}setInterval(()=>{oe&&Ae()},250),x.addEventListener("click",j=>{if(y.dragged||e.mode!=="pview")return;let J=j.target.closest("[data-i]");if(!J){let le=g.getBoundingClientRect(),ie=(j.clientX-le.left)/le.width*100,He=(j.clientY-le.top)/le.height*100;A(),ze(ie,He);return}let q=Qi[y.id].items[+J.dataset.i];if(q.k==="npc"){if(!t[q.id]){let He=he(q);ze(He.x,He.y,()=>{y.me.face=(q.x>=y.me.x?1:-1)*1.25});return}let le=r({t:"npc",id:q.id});if(!le.enabled){a(t[q.id].short+" est occup\xE9(e). Reviens plus tard.");return}let ie=he(q);A(),ze(ie.x,ie.y,()=>{y.me.face=(q.x>=y.me.x?1:-1)*1.25,e.mode==="pview"&&le.run()})}else if(q.k==="go"){if(q.need&&!n.doneNpc(q.need)){a("Mama Lola garde le passage : r\xE9ponds d\u2019abord \xE0 ses questions."),l.ko();return}let le=y.id;ze(q.x,q.y,()=>L(q.to,{back:q.ico==="\u2B07"||q.ico==="\u2B05",from:le}))}else q.k==="tree"?ze(50,91,()=>xe()):q.k==="objs"?ze(q.x+8,q.y+14,()=>n.openObjs()):q.k==="fact"&&ze(q.x,q.y+20,()=>T())}),setInterval(()=>{if(e.ui!=="photo"||e.mode!=="pview"||y.id!=="village"||oe)return;y.chat=(y.chat||0)+1;let j=s[y.chat%s.length],J=j[0]==="J\xE9r\xE9mie"?"jer":"kasa";Be(J,"<b>"+h(j[0])+"</b> : "+h(j[1]),4200)},6500);function T(){let j=!e.adv.facts||!e.adv.facts.fleuve;f({kind:"info",title:"Le fleuve Congo",i:0,lines:["Le fleuve Congo est le deuxi\xE8me plus long fleuve d\u2019Afrique, apr\xE8s le Nil. C\u2019est aussi l\u2019un des fleuves les plus profonds du monde.","\xC0 Kinshasa, il s\xE9pare la RDC de la R\xE9publique du Congo : de l\u2019autre c\xF4t\xE9 du fleuve, on voit Brazzaville."]}),j&&(e.adv.facts=Object.assign(e.adv.facts||{},{fleuve:!0}),c(0,5),a("+5 points d\u2019exp\xE9rience"))}let k=null;function xe(){if(e.mode!=="pview")return;e.mode="mini",A();let j=document.createElement("div");j.className="pmg",x.appendChild(j),k={t:20,caught:0,layer:j,spawn:0,list:[],last:performance.now()},O.classList.remove("hide"),a("Touche les mangues pour les attraper !"),requestAnimationFrame(U)}function U(j){if(!k)return;let J=Math.min(.05,(j-k.last)/1e3);if(k.last=j,k.t-=J,k.spawn-=J,k.spawn<=0){k.spawn=.45+Math.random()*.4;let q=document.createElement("button");q.className="mgo";let le={el:q,x:36+Math.random()*30,y:16+Math.random()*10,v:0,gy:76+Math.random()*14,done:!1};q.style.left=le.x+"%",q.style.top=le.y+"%",q.addEventListener("pointerdown",ie=>{ie.stopPropagation(),!le.done&&(le.done=!0,k.caught++,l.coin(),q.classList.add("pop"),setTimeout(()=>q.remove(),260))}),k.layer.appendChild(q),k.list.push(le)}if(k.list=k.list.filter(q=>q.done?!1:(q.v+=70*J,q.y+=q.v*J*.18,q.el.style.top=q.y+"%",q.y>=q.gy?(q.el.classList.add("splat"),setTimeout(()=>q.el.remove(),350),!1):!0)),document.getElementById("info").textContent="Mangues attrap\xE9es : "+k.caught+" \xB7 temps : "+Math.max(0,Math.ceil(k.t))+" s",k.t<=0)return I();requestAnimationFrame(U)}function I(){if(!k)return;let j=k.caught;k.layer.remove(),k=null,O.classList.add("hide"),e.mode="pview",e.adv.mangues+=j,u(),a(j?"+"+j+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),j&&l.win(),c(0,j),d()}O.addEventListener("click",I);let W=null,ee=null,ye=null;function Te(){let j=W.createBuffer(1,W.sampleRate*2,W.sampleRate),J=j.getChannelData(0),q=0;for(let ie=0;ie<J.length;ie++){let He=Math.random()*2-1;q=(q+.02*He)/1.02,J[ie]=q*3.5}let le=W.createBufferSource();return le.buffer=j,le.loop=!0,le}function Re(j){try{if(!e.sound){ce();return}W=W||new(window.AudioContext||window.webkitAudioContext),W.state==="suspended"&&W.resume(),ce();let J=W.createGain(),q=W.createBiquadFilter(),le=Te(),ie={village:["lowpass",500,.9,.05],marche:["bandpass",850,.6,.11],portail:["lowpass",420,.8,.045],classe:["lowpass",300,.7,.025],maison:["lowpass",250,.6,.02],fleuve:["lowpass",650,.7,.07]}[j]||["lowpass",400,.7,.03];if(q.type=ie[0],q.frequency.value=ie[1],q.Q.value=ie[2],J.gain.value=0,J.gain.linearRampToValueAtTime(ie[3],W.currentTime+1.2),le.connect(q),q.connect(J),J.connect(W.destination),le.start(),ee={n:le,g:J},j==="village"||j==="portail"||j==="fleuve"){let He=()=>{if(!ee||!e.sound)return;let De=W.createOscillator(),$e=W.createGain(),Ge=W.currentTime,Ee=2200+Math.random()*1600;De.frequency.setValueAtTime(Ee,Ge),De.frequency.exponentialRampToValueAtTime(Ee*1.5,Ge+.09),De.frequency.exponentialRampToValueAtTime(Ee*.9,Ge+.18),$e.gain.setValueAtTime(1e-4,Ge),$e.gain.exponentialRampToValueAtTime(.018,Ge+.03),$e.gain.exponentialRampToValueAtTime(1e-4,Ge+.2),De.connect($e),$e.connect(W.destination),De.start(Ge),De.stop(Ge+.22),ye=setTimeout(He,1800+Math.random()*4200)};ye=setTimeout(He,1200)}}catch{}}function ce(){if(clearTimeout(ye),ee){try{ee.g.gain.linearRampToValueAtTime(0,W.currentTime+.3);let j=ee.n;setTimeout(()=>{try{j.stop()}catch{}},400)}catch{}ee=null}}n.photo={show:j=>{v.classList.remove("hide"),y.id=null,y.busy=!1,L(j)},hide:()=>{v.classList.add("hide"),z.active=!1,ce(),A()},resume:()=>{v.classList.remove("hide"),z.sig="";let j=y.panX;ge(y.id,!0),y.panX=j,b(!0),Re(Qi[y.id].amb)},refresh:()=>{if(!y.id)return;let j=y.panX;ge(y.id,!0),y.panX=j,b(!0)},scene:()=>y.id,ambientOff:ce,ambientOn:()=>{y.id&&Re(Qi[y.id].amb)}}}var zu="kelas_game_v12",Oe=n=>document.getElementById(n),es=(n,e,t)=>Math.max(n,Math.min(e,t)),bt=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),rp=n=>n.map(e=>[Math.random(),e]).sort((e,t)=>e[0]-t[0]).map(e=>e[1]),Ts=(n,e,t,i)=>Math.hypot(n-t,e-i),xl=()=>({done:{},stars:{},good:0,total:0,pieces:0,tissu:0,mangues:0,xp:0,items:{},bought:{},fin:!1}),E={ui:"photo",nom:"",photo:null,real:"pf1",voice:!0,sexe:"f",look:Object.assign({},xa,{acc:[]}),sound:!0,sc:"ville",x:-13,z:.5,ry:0,phi:0,pitch:.3,mode:"start",dialog:null,joy:{x:0,y:0},key:{x:0,y:0},speed:0,near:null,greeted:{},adv:xl(),mini:null,cine:null};function Iy(){try{return JSON.parse(localStorage.getItem(zu)||"null")}catch{return null}}function Jt(){try{localStorage.setItem(zu,JSON.stringify({ui:E.ui,nom:E.nom,photo:E.photo,real:E.real,voice:E.voice,look:E.look,sound:E.sound,adv:E.adv}))}catch{}}var ns=n=>!!E.adv.done[n],ap=n=>{let e=Tt[n];return!!(e.needs&&!ns(e.needs))},yl=()=>ns("lola"),ts=()=>1+Math.floor(E.adv.xp/50),Dy=()=>Object.values(E.adv.stars).reduce((n,e)=>n+e,0),Bu=()=>Object.keys(Hn).filter(n=>E.adv.items[n]).length,Uy=()=>["lola","ilunga","junior","mavungu"].every(ns),Yf=n=>"Parler "+(/^le /.test(n.short)?n.short.replace(/^le /,"au "):"\xE0 "+n.short),Tr=null;function wr(n,e,t,i,s){if(E.sound)try{Tr=Tr||new(window.AudioContext||window.webkitAudioContext);let r=Tr.createOscillator(),a=Tr.createGain(),o=Tr.currentTime+(s||0);r.type=t||"sine",r.frequency.value=n,a.gain.setValueAtTime(i||.08,o),a.gain.exponentialRampToValueAtTime(.001,o+e),r.connect(a),a.connect(Tr.destination),r.start(o),r.stop(o+e)}catch{}}var rn={ok:()=>{wr(660,.1),wr(880,.15,"sine",.08,.1)},ko:()=>wr(180,.25,"square",.04),coin:()=>wr(1200,.08,"triangle"),win:()=>{[523,659,784,1047].forEach((n,e)=>wr(n,.18,"sine",.08,e*.12))},step:()=>wr(90,.05,"sine",.02)},La=typeof window!="undefined"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance!="undefined",op=[];function $f(){La&&(op=speechSynthesis.getVoices()||[])}La&&($f(),speechSynthesis.onvoiceschanged=$f);var Zf={lola:{g:"f",pitch:.85,rate:.88},ilunga:{g:"f",pitch:1,rate:.95},junior:{g:"h",pitch:1.7,rate:1.05},mavungu:{g:"h",pitch:.75,rate:.9},bea:{g:"f",pitch:1.1,rate:1},mama:{g:"f",pitch:.95,rate:.95},_:{g:"f",pitch:1,rate:.95}};function Ny(n){let e=op.filter(r=>/^fr/i.test(r.lang));if(!e.length)return null;let t=/(julie|hortense|denise|eloise|élodie|amelie|amélie|audrey|marie|brigitte|female|femme|google fran)/i,i=/(paul|henri|claude|thomas|mathieu|male|homme|antoine|lucas)/i;return e.filter(r=>(n==="f"?t:i).test(r.name))[0]||e.find(r=>/google|microsoft/i.test(r.name))||e[0]}var dl=null;function Fy(n){return String(n).replace(/×/g," fois ").replace(/÷/g," divis\xE9 par ").replace(/−/g," moins ").replace(/\+/g," plus ").replace(/=/g," \xE9gale ").replace(/[·★☆🪙🥭⭐✔🔒👗🔊]/g," ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()}function ku(n,e){if(dl={text:n,id:e},!(!La||!E.voice))try{speechSynthesis.cancel();let t=Zf[e]||Zf._,i=new SpeechSynthesisUtterance(Fy(n));i.lang="fr-FR",i.pitch=t.pitch,i.rate=t.rate;let s=Ny(t.g);s&&(i.voice=s),speechSynthesis.speak(i)}catch{}}function lp(){if(La)try{speechSynthesis.cancel()}catch{}}function Oy(){if(dl){let n=E.voice;E.voice=!0,ku(dl.text,dl.id),E.voice=n}}var Uu="";function zy(n){let e="",t="",i=n.id;if(n.kind==="quiz"){let s=Tt[n.id];if(e=`q|${n.id}|${n.stage}|${n.i}|${n.qi}`,n.stage==="lines")t=s.intro[n.i];else if(n.stage==="q"){let r=n.qs[n.qi];t="Question "+(n.qi+1)+". "+r.q+" R\xE9ponses : "+(n.opts||[]).join(", ")}else n.stage==="fb"?t=(n.fbFirst?"Bravo ! ":"C\u2019est \xE7a. ")+n.qs[n.qi].exp:t=n.rev?"R\xE9vision termin\xE9e : "+n.firsts+" sur "+n.qs.length+" du premier coup.":s.outro}else if(n.kind==="info")e="i|"+n.title+"|"+n.i,t=n.lines[n.i];else if(n.kind==="shop")e="s|"+n.msg,t=n.msg,i="bea";else return;e!==Uu&&(Uu=e,ku(t,i))}var By=()=>La?'<button class="s" onclick="replay()">\u{1F50A} R\xE9\xE9couter</button>':"",Ra=Oe("cv"),is=new ms({canvas:Ra,antialias:!0,powerPreference:"high-performance"});is.setPixelRatio(Math.min(window.devicePixelRatio||1,window.matchMedia&&matchMedia("(pointer:coarse)").matches?1.5:2));is.outputColorSpace=at;is.toneMapping=_s;is.toneMappingExposure=.82;is.shadowMap.enabled=!0;is.shadowMap.type=$c;var $t=new Gi;$t.fog=new Co(12374240,.0052);var ht=new cn(58,1,.1,900),cp=new fr(13625599,8022602,.45);$t.add(cp);var ci=Xf(is,$t,ht),Gn=new mr(16773332,3.4);Gn.castShadow=!0;Gn.shadow.mapSize.set(2048,2048);var ul=34;Object.assign(Gn.shadow.camera,{left:-ul,right:ul,top:ul,bottom:-ul,near:1,far:160});Gn.shadow.bias=-3e-4;Gn.shadow.normalBias=.05;Gn.shadow.radius=3;$t.add(Gn);$t.add(Gn.target);var ky=ci.sky,up="kelas_quality",Rr=(()=>{try{let n=localStorage.getItem(up);if(n)return n}catch{}return window.matchMedia&&matchMedia("(pointer:coarse)").matches||window.innerWidth<760?"medium":"high"})();function hp(){ci.setQuality(Rr,Oe("world").clientWidth,Oe("world").clientHeight)}function Hy(){Rr=Rr==="high"?"medium":Rr==="medium"?"low":"high";try{localStorage.setItem(up,Rr)}catch{}hp(),Kt()}var Gy={high:"\xE9lev\xE9e",medium:"moyenne",low:"basse"};function Hu(){let n=Oe("world").clientWidth,e=Oe("world").clientHeight;is.setSize(n,e,!1),ci.resize(n,e),ht.aspect=n/e,ht.fov=n/e<.8?66:n/e<1.2?58:50,ht.updateProjectionMatrix()}window.addEventListener("resize",Hu);var Zt=null,En=null,Pn={},ws=null,Vy={mavungu:{top:[.27,.36,.42,.52],bottom:[.3,.62,.44,.78]},ilunga:{top:[.3,.4,.42,.58],skirt:[.3,.62,.7,.82]},lola:{top:[.3,.34,.7,.46],skirt:[.3,.62,.7,.82]},bea:{top:[.3,.34,.7,.46],skirt:[.3,.62,.7,.82]},mama:{top:[.3,.34,.7,.46],skirt:[.3,.62,.7,.82]}};function Wy(n,e){let t=Object.assign({},e);if(window.__FACES&&window.__FACES["portraits/"+n]&&(t.faceKey="portraits/"+n),Pr(n)){let i=Vy[n]||{top:[.3,.34,.7,.46],bottom:[.3,.62,.7,.76]};t.fabric={id:n,top:i.top,bottom:i.bottom||[.3,.62,.7,.76],skirt:i.skirt}}return t}function dp(){let n={};return E.photo&&window.__FACES&&window.__FACES["avatars/"+E.photo]?n.faceKey="avatars/"+E.photo:E.photo==="u"&&Cs()&&(n.faceUrl=Cs()),n}function qy(){return Object.assign({},E.look,{h:.95},dp())}var Pr=n=>!!(window.__MAN&&(window.__MAN.chars||[]).includes(n));function fp(){return E.real&&Pr(E.real)?wu(E.real,{walk:Pr(E.real+"w")?E.real+"w":null}):il(qy())}function Xy(n,e){return Pr(n)?wu(n):il(Wy(n,e.look))}var As={ville:{build:()=>Mf(),interior:!1,spots:[{x:-9,z:-2.2,r:2.6,label:"Carte des lieux",run:()=>Tp()}],doors:[{x:-22,z:-5.4,r:1.9,to:"maison",label:"Entrer dans la maison",tx:0,tz:1,phi:-Math.PI/2},{x:42,z:-5.3,r:2.6,to:"classe",label:"Entrer dans l\u2019\xE9cole",ok:()=>yl(),closed:"Porte ferm\xE9e",tx:0,tz:2.6,phi:-Math.PI/2}]},maison:{build:()=>Sf(E.adv.items),interior:!0,doors:[{x:0,z:2.5,r:1.9,to:"ville",label:"Sortir",tx:-22,tz:-3.9,phi:Math.PI/2}],spots:[{x:-1.6,z:-2.2,r:1.9,label:"Miroir : changer mon look",run:()=>Sl("play")}]},marche:{build:()=>Tf(),interior:!1,spawn:{x:0,z:6.2,phi:-Math.PI/2},doors:[{x:-3.8,z:9.6,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},fleuve:{build:()=>wf(),interior:!1,spawn:{x:0,z:6.5,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},sante:{build:()=>Af(),interior:!1,spawn:{x:0,z:6.4,phi:-Math.PI/2},doors:[{x:-3.8,z:10,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},univ:{build:()=>Rf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},biblio:{build:()=>Pf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},gare:{build:()=>Lf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},ferme:{build:()=>If(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},foret:{build:()=>Df(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},musee:{build:()=>Uf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},stade:{build:()=>Ff(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},mine:{build:()=>Of(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},observatoire:{build:()=>zf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},port:{build:()=>Bf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},parlement:{build:()=>kf(),interior:!1,spawn:{x:0,z:6.8,phi:-Math.PI/2},doors:[{x:-3.8,z:10.4,r:2.2,to:"ville",label:"Retour au quartier",tx:-7,tz:-1.2,phi:0}]},classe:{build:()=>Ef(),interior:!0,doors:[{x:0,z:4.1,r:1.9,to:"ville",label:"Sortir de l\u2019\xE9cole",tx:42,tz:-3.4,phi:Math.PI/2}]}};function jy(){Zt&&$t.remove(Zt.group),En&&$t.remove(En),Object.values(Pn).forEach(n=>$t.remove(n.obj)),Pn={}}var Kf="";function Rs(){jy();let n=As[E.sc];Zt=n.build(),$t.add(Zt.group),ky.visible=!0;let e=!n.interior&&Zt.sky||null,t=e?JSON.stringify(e):"";!n.interior&&t!==Kf&&(ci.setSky(e||void 0),Kf=t),$t.environment=n.interior?null:ci.envTex;let i=e&&e.elev!==void 0?e.elev:34;cp.intensity=n.interior?1.9:i<=0?1.1:.45,$t.fog.density=n.interior?6e-4:Zt.fog||.0052,$t.fog.color.set(i<=0?725808:i<14?14727316:12374240),Gn.color.set(i<=0?10335487:i<14?16756848:16773332),Gn.intensity=n.interior?2.4:i<=0?.35:i<14?2.2:3.4,En=fp(),$t.add(En),Object.keys(Tt).filter(s=>Tt[s].sc===E.sc).forEach(s=>Jf(s,Tt[s])),Object.keys($i).filter(s=>$i[s].sc===E.sc).forEach(s=>Jf(s,$i[s])),Ml()}function Jf(n,e){let t=Xy(n,e);t.position.set(e.x,0,e.z),t.rotation.y=e.ry||0,$t.add(t),Pn[n]={obj:t,n:e,wave:0,ry:e.ry||0}}var wi=.36;function Yy(n,e){let t=n,i=e,s=Zt.colliders;for(let o=0;o<s.length;o++){let l=s[o],c=t-l.x,u=i-l.z,d=Math.hypot(c,u),f=l.r+wi;d<f&&d>1e-4&&(t=l.x+c/d*f,i=l.z+u/d*f)}let r=Zt.boxes.slice();E.sc==="ville"&&!yl()&&r.push(Zt.dyn.gateBox),r.forEach(o=>{let l=es(o.x0,o.x1,t),c=es(o.z0,o.z1,i),u=t-l,d=i-c,f=Math.hypot(u,d);if(f<wi)if(f>1e-4)t=l+u/f*wi,i=c+d/f*wi;else{let h=t-o.x0,p=o.x1-t,v=i-o.z0,g=o.z1-i,m=Math.min(h,p,v,g);m===h?t=o.x0-wi:m===p?t=o.x1+wi:m===v?i=o.z0-wi:i=o.z1+wi}}),Object.keys(Pn).forEach(o=>{let l=Pn[o].n;if(l.sit)return;let c=t-l.x,u=i-l.z,d=Math.hypot(c,u),f=.5+wi;d<f&&d>1e-4&&(t=l.x+c/d*f,i=l.z+u/d*f)});let a=Zt.bounds;return[es(a.x0,a.x1,t),es(a.z0,a.z1,i)]}function _l(){return new P(E.x,1.35,E.z)}function Gu(n){let e=E.mode==="mini"?Math.max(E.pitch,.85):E.pitch;E.mode==="mini"&&(n=Math.max(n,7.5));let t=Math.cos(E.phi)*Math.cos(e),i=Math.sin(E.phi)*Math.cos(e),s=Math.sin(e),r=_l();return new P(r.x-t*n,r.y+s*n+.4,r.z-i*n)}var Vu=()=>E.camOverride||(As[E.sc].interior?3.5:3.9);function Ml(){let n=Gu(Vu());ht.position.copy(n),ht.lookAt(_l())}function $y(n){let e=Gu(Vu());ht.position.lerp(e,1-Math.exp(-n*9)),ht.position.y<.6&&(ht.position.y=.6),ht.lookAt(_l())}function Wu(){let n=E.adv.done;if(!n.lola)return"Objectif : va \xE0 l\u2019\xE9cole et parle \xE0 Mama Lola, la gardienne du portail.";if(!n.ilunga)return"Objectif : entre dans l\u2019\xE9cole et va voir la Professeure Ilunga.";if(!n.junior)return"Objectif : rejoins Junior, assis dans la classe.";if(!n.mavungu)return"Objectif : le Directeur Mavungu t\u2019attend dans la classe.";for(let i=1;i<ai.length;i++){let s=ai[i];if(!Pa(s)&&E.ui!=="photo")return"Objectif : ouvre la carte (panneau pr\xE8s de ta maison, ou menu \u2630) et va ici : "+s.icon+" "+s.name+"."}let e=Bu(),t=Object.keys(Hn).length;return e<t?"Objectif : cueille des mangues, r\xE9vise et meuble ta maison ("+e+"/"+t+").":"Tu as tout accompli ! Continue \xE0 r\xE9viser pour gagner des \xE9toiles."}function kt(){let n=Rp();Oe("stats").innerHTML=(n?`<img class="av" src="${n}" alt="">`:"")+"\u{1FA99} "+E.adv.pieces+" \xB7 \u2B50 "+Dy()+" \xB7 Niv "+ts(),E.mode!=="mini"&&(Oe("info").textContent=Wu())}function Ir(n,e){let t=ts();E.adv.pieces+=n,E.adv.xp+=e,ts()>t&&(Ln("Niveau "+ts()+" atteint !"+(Es[ts()]?" Nouvelle tenue d\xE9bloqu\xE9e !":"")),rn.win()),kt(),Jt()}var Qf=null;function Ln(n){let e=Oe("toast");e.textContent=n,e.style.display="block",clearTimeout(Qf),Qf=setTimeout(()=>{e.style.display="none"},2400)}var Ai=null;function ep(n,e,t,i,s){Ai={pos:new P(e,i||2.2,t),until:s?performance.now()+s:0};let r=Oe("bubble");r.innerHTML=n,r.style.display="block"}function Dr(){Ai=null,Oe("bubble").style.display="none"}function Zy(){if(!Ai)return;if(Ai.until&&performance.now()>Ai.until){Dr();return}let n=Ai.pos.clone().project(ht),e=Oe("world").clientWidth,t=Oe("world").clientHeight;if(n.z>1){Oe("bubble").style.display="none";return}let i=Oe("bubble");i.style.display="block",i.style.left=es(70,e-70,(n.x*.5+.5)*e)+"px",i.style.top=es(60,t-20,(-n.y*.5+.5)*t)+"px"}function Ky(){let n=[];if(Object.keys(Tt).forEach(e=>{let t=Tt[e];if(t.sc===E.sc){let i=Ts(E.x,E.z,t.x,t.z);i<(t.kind==="shop"?3.9:2.7)&&n.push({t:"npc",id:e,d:i})}}),As[E.sc].doors.forEach((e,t)=>{let i=Ts(E.x,E.z,e.x,e.z);i<e.r&&n.push({t:"door",i:t,d:i})}),(As[E.sc].spots||[]).forEach((e,t)=>{let i=Ts(E.x,E.z,e.x,e.z);i<e.r&&n.push({t:"spot",i:t,d:i})}),E.sc==="ville"&&Zt.mangoTree){let e=Ts(E.x,E.z,Zt.mangoTree.x,Zt.mangoTree.z);e<4&&n.push({t:"tree",d:e})}return n.sort((e,t)=>(e.t==="npc"?0:1)-(t.t==="npc"?0:1)||e.d-t.d)}function pp(n){if(!n)return{label:"",enabled:!1,run:null};if(n.t==="npc"){let t=Tt[n.id];return t.kind==="shop"?{label:"Aller au march\xE9",enabled:!0,run:l_}:t.kind==="talk"?{label:Yf(t),enabled:!0,run:()=>r_(n.id)}:ap(n.id)?{label:t.short+" est occup\xE9(e), reviens plus tard",enabled:!1,run:null}:ns(n.id)?{label:"R\xE9viser avec "+t.short,enabled:!0,run:()=>tp(n.id,!0)}:{label:Yf(t),enabled:!0,run:()=>tp(n.id,!1)}}if(n.t==="tree")return{label:"Cueillir des mangues",enabled:!0,run:g_};if(n.t==="spot"){let t=As[E.sc].spots[n.i];return{label:t.label,enabled:!0,run:t.run}}let e=As[E.sc].doors[n.i];return e.ok&&!e.ok()?{label:e.closed,enabled:!1,run:null}:{label:e.label,enabled:!0,run:()=>Jy(e)}}function Jy(n){E.sc=n.to,E.x=n.tx,E.z=n.tz,E.phi=n.phi,E.near=null,Dr(),Rs()}function Vn(n){E.dialog=n,E.mode="dialog",E.joy.x=E.joy.y=0,E.key.x=E.key.y=0,Xu(),Dr(),Kt(),Oe("actwrap").classList.add("hide")}function bl(){if(Nu=!1,lp(),Uu="",Oe("dlg").style.display="none",E.dialog=null,E.ui==="photo"){E.mode="pview",Ps.refresh(),kt();return}E.mode="play",Oe("actwrap").classList.remove("hide"),E.sc==="maison"&&Rs(),kt()}function tp(n,e){let t=Tt[n],i=xu[t.sujet],s=e?rp(i).slice(0,3):i.slice(0,t.nb);Vn({kind:"quiz",id:n,rev:e,stage:e?"q":"lines",i:0,qi:0,qs:s,opts:null,bad:[],qerr:!1,errs:0,firsts:0,gain:0,res:null})}function Kt(){let n=E.dialog,e=Oe("dlg");e.style.display="block",e.scrollTop=0;let t="";n.kind==="quiz"?t=e_(n):n.kind==="info"?t=a_(n):n.kind==="shop"?t=c_(n):n.kind==="menu"?t=d_(n):n.kind==="profile"?t=C_(n):n.kind==="map"?t=S_(n):n.kind==="objs"&&(t=D_(n)),e.innerHTML='<div class="box">'+t+(n.kind==="quiz"||n.kind==="info"||n.kind==="shop"?By():"")+"</div>",zy(n)}var Qy=n=>!!(window.__MAN&&(window.__MAN.portraits||[]).includes(n)),qu=(n,e)=>`<div class="hd">${n&&Qy(n)?`<img class="pt" src="img/portraits/${n}.jpg" alt="">`:""}<h3>${bt(e)}</h3></div>`;function e_(n){let e=Tt[n.id],t=qu(n.id,e.name+" \xB7 "+e.role);if(n.stage==="lines")t+=`<p>${bt(e.intro[n.i])}</p><button class="p" onclick="nextLine()">Suite</button>`;else if(n.stage==="q"){let i=n.qs[n.qi];n.opts||(n.opts=rp(i.c)),t+=`<p><b>${bt(n.rev?"R\xE9vision \xB7 ":"")}Question ${n.qi+1} sur ${n.qs.length}</b> : ${bt(i.q)}</p>`,n.bad.length&&(t+='<p class="ko">Pas tout \xE0 fait. R\xE9fl\xE9chis encore !</p>'),t+=n.opts.map((s,r)=>`<button ${n.bad.indexOf(s)>=0?"disabled":""} onclick="answerQ(${r})">${bt(s)}</button>`).join(""),t+='<button class="s" onclick="closeDialog()">Quitter</button>'}else if(n.stage==="fb"){let i=n.qs[n.qi];t+=`<p class="ok"><b>${n.fbFirst?"Bravo !":"C\u2019est \xE7a."}</b> ${bt(i.exp)}</p><button class="p" onclick="nextQ()">Suite</button>`}else{let i=n.res;n.rev?t+=`<p>R\xE9vision termin\xE9e : ${n.firsts} sur ${n.qs.length} du premier coup. <b>+${n.gain} \u{1FA99}</b></p>`:t+=`<p>${bt(e.outro)}</p><p><b>${"\u2605".repeat(i.stars)+"\u2606".repeat(3-i.stars)}</b> \xB7 +${n.gain} \u{1FA99}${i.tissu?" \xB7 +"+i.tissu+" tissu wax":""}</p>`,t+='<button class="p" onclick="closeDialog()">Continuer</button>'}return t}function t_(){let n=E.dialog,e=Tt[n.id];n.i++,n.i>=e.intro.length&&(n.stage="q",n.qi=0,n.opts=null),Kt()}function n_(n){let e=E.dialog,t=e.qs[e.qi],i=e.opts[n];if(i!==t.a){e.bad.push(i),e.qerr=!0,e.errs++,rn.ko(),Kt();return}let s=!e.qerr;E.adv.total++,s&&(E.adv.good++,e.firsts++);let r=e.rev?s?2:0:s?5:1;e.gain+=r,e.fbFirst=s,Ir(r,s?e.rev?4:10:3),rn.ok(),e.stage="fb",Kt()}function i_(){let n=E.dialog;n.qi++,n.opts=null,n.bad=[],n.qerr=!1,n.qi>=n.qs.length?(s_(n),n.stage="out"):n.stage="q",Kt()}function s_(n){if(n.rev){Jt();return}let e=n.id,t=n.errs===0?3:n.errs<=2?2:1;E.adv.done[e]=!0,E.adv.stars[e]=Math.max(E.adv.stars[e]||0,t),n.gain+=10,Ir(10,10);let i=0;e==="mavungu"&&(E.adv.pieces+=20,E.adv.tissu+=2,i=2,n.gain+=20),n.res={stars:t,tissu:i};let s=E.ui==="photo"?[]:F_(e);s.length&&setTimeout(()=>Ln("D\xE9bloqu\xE9 : "+s.join(", ")),900),rn.win(),Jt(),kt(),setTimeout(mp,0),setTimeout(()=>w_(e),400)}function r_(n){let e=Tt[n];Vn({kind:"info",id:n,title:e.name+" \xB7 "+e.role,i:0,lines:["Bonjour "+E.nom+" !",Wu().replace("Objectif : ","Ton objectif : "),"Ta partie est sauvegard\xE9e automatiquement. Repose-toi quand tu veux."]})}function a_(n){let e=n.i>=n.lines.length-1;return qu(n.id,n.title)+`<p>${bt(n.lines[n.i])}</p><button class="p" onclick="${e?"closeDialog()":"infoNext()"}">${e?"Fermer":"Suite"}</button>`}function o_(){E.dialog.i++,Kt()}function l_(){Vn({kind:"shop",msg:"Bienvenue au march\xE9, "+E.nom+" !"})}function c_(n){let e=E.adv,t=qu("bea","Maman B\xE9a \xB7 Marchande")+`<p>${bt(n.msg)}</p><p class="row"><span>Mes pi\xE8ces</span><b>${e.pieces} \u{1FA99}</b></p><p class="row"><span>Mes mangues \xB7 tissu wax</span><b>${e.mangues} \u{1F96D} \xB7 ${e.tissu}</b></p>`;return e.mangues>0&&(t+=`<button onclick="sellMangoes()">Vendre mes ${e.mangues} mangues (+${e.mangues*2} \u{1FA99})</button>`),t+=Object.keys(Hn).map(i=>{let s=Hn[i];return e.items[i]?`<button disabled>\u2714 ${bt(s.n)} (dans ta maison)</button>`:`<button onclick="buy('${i}')">${bt(s.n)} \u2014 ${s.p} \u{1FA99}${s.t?" + "+s.t+" tissu wax":""}</button>`}).join(""),E.ui!=="photo"&&(t+='<button onclick="shopMode()">\u{1F457} Mode : essayer tenues et coiffures</button>'),t+'<button class="s" onclick="closeDialog()">Quitter le march\xE9</button>'}function u_(){let n=E.adv,e=n.mangues;e&&(n.mangues=0,Ir(e*2,0),rn.coin(),E.dialog.msg="Merci ! Tes "+e+" mangues sont vendues : +"+e*2+" pi\xE8ces.",Kt())}function h_(n){let e=Hn[n],t=E.adv,i=E.dialog;if(!t.items[n]){if(t.pieces<e.p){i.msg="Il te manque "+(e.p-t.pieces)+" pi\xE8ces pour : "+e.n+".",rn.ko(),Kt();return}if(e.t&&t.tissu<e.t){i.msg="Il te faut du tissu wax. Le Directeur Mavungu en offre \xE0 la fin de la le\xE7on.",rn.ko(),Kt();return}t.pieces-=e.p,e.t&&(t.tissu-=e.t),t.items[n]=!0,Jt(),kt(),rn.coin(),i.msg="Achat r\xE9ussi : "+e.n+" ! Elle est install\xE9e dans ta maison.",Kt(),setTimeout(mp,0)}}function mp(){E.adv.fin||!Uy()||Bu()<Object.keys(Hn).length||(E.adv.fin=!0,Jt(),rn.win(),(E.mode==="play"||E.mode==="dialog")&&Vn({kind:"info",title:"F\xE9licitations !",i:0,lines:[E.nom+", tu as termin\xE9 la le\xE7on et meubl\xE9 toute ta maison !","Tu es un vrai champion de LEXARIS ACAD\xC9MIE. Continue \xE0 r\xE9viser pour gagner trois \xE9toiles partout."]}))}function gp(){(E.mode==="play"||E.mode==="pview")&&Vn({kind:"menu"})}function d_(){let n=E.adv,e=Rp();return`<div class="hd">${e?`<img class="pt" src="${e}" alt="">`:""}<h3>${bt(E.nom)} \xB7 Niveau ${ts()}</h3></div><p class="row"><span>Pi\xE8ces</span><b>${n.pieces} \u{1FA99}</b></p><p class="row"><span>Tissu wax \xB7 mangues</span><b>${n.tissu} \xB7 ${n.mangues} \u{1F96D}</b></p><p class="row"><span>R\xE9ponses justes du premier coup</span><b>${n.good}/${n.total}</b></p><h4>Le\xE7ons</h4>`+["lola","ilunga","junior","mavungu"].map(t=>{let i=n.stars[t]||0;return`<div class="row"><span>${bt(yu[Tt[t].sujet])} \xB7 ${bt(Tt[t].name)}</span><b>${n.done[t]?"\u2605".repeat(i)+"\u2606".repeat(3-i):"\u2014"}</b></div>`}).join("")+"<h4>Ma maison</h4>"+Object.keys(Hn).map(t=>`<div class="row"><span>${bt(Hn[t].n)}</span><b>${n.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+`<p style="font-size:12px;margin-top:8px">${bt(Wu())}</p><button class="p" onclick="closeDialog()">Fermer</button>`+(E.ui==="photo"?"":'<button onclick="closeDialog();openMap()">\u{1F5FA} Carte des lieux</button>')+(E.ui==="photo"?'<button onclick="openCreatorFromPhoto()">\u{1F9CD} Mon personnage (visage, tenue)</button>':"")+`<button onclick="openProfile()">\u{1F4F7} Ma photo de profil</button><button onclick="cycleQuality()">Qualit\xE9 graphique : ${Gy[Rr]}</button><button onclick="toggleSound()">Son : ${E.sound?"activ\xE9":"coup\xE9"}</button><button onclick="toggleVoice()">Lecture \xE0 voix haute : ${E.voice?"activ\xE9e":"coup\xE9e"}</button><button class="s" onclick="resetGame()">${E.dialog&&E.dialog.confirmReset?"Appuie encore pour tout effacer":"Recommencer une nouvelle partie"}</button>`}function f_(){E.sound=!E.sound,Jt(),E.ui==="photo"&&(E.sound?Ps.ambientOn():Ps.ambientOff()),Kt()}function p_(){E.voice=!E.voice,E.voice||lp(),Jt(),Kt()}var Nu=!1;function m_(){if(!Nu){Nu=!0,E.dialog.confirmReset=!0,Kt();return}try{localStorage.removeItem(zu)}catch{}location.reload()}function g_(){E.mode="mini",E.mini={t:20,caught:0,list:[],sp:0},Dr(),ws=new Ue,$t.add(ws),vp(!1),Ln("Attrape les mangues qui tombent !")}var v_=new _e({color:15770908,roughness:.5}),x_=new rt(.17,12,10);function y_(n){let e=E.mini,t=Zt.mangoTree;if(e.t-=n,e.sp-=n,e.sp<=0){e.sp=.5+Math.random()*.4;let i=Math.random()*6.28,s=Math.random()*3.4,r=new K(x_,v_);r.scale.y=1.25,r.castShadow=!0,r.position.set(t.x+Math.cos(i)*s,6.2,t.z+Math.sin(i)*s),ws.add(r),e.list.push({mesh:r,v:0})}e.list=e.list.filter(i=>{i.v+=7*n,i.mesh.position.y-=i.v*n,i.mesh.rotation.x+=n*4;let s=i.mesh.position;return s.y<1.9&&s.y>.2&&Ts(s.x,s.z,E.x,E.z)<.95?(e.caught++,rn.coin(),ws.remove(i.mesh),!1):s.y<=.17&&(s.y=.17,i.v=0,i.gone=(i.gone||0)+n,i.gone>.5)?(ws.remove(i.mesh),!1):!0}),Oe("info").textContent="Mangues attrap\xE9es : "+e.caught+" \xB7 temps : "+Math.max(0,Math.ceil(e.t))+" s",e.t<=0&&xp()}function vp(n){Zt.mangoTree.obj.children.forEach(e=>{e.userData.canopy&&(e.visible=n)})}function xp(){let n=E.mini.caught;vp(!0),$t.remove(ws),ws=null,E.mini=null,E.mode="play",E.adv.mangues+=n,Jt(),Ln(n?"+"+n+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),n&&rn.win(),Ir(0,n),kt()}var Ca=Oe("joy"),yp=Oe("knob"),El=null;function Xu(){El=null,yp.style.transform="translate(0,0)",E.joy.x=E.joy.y=0}function _p(n){let e=Ca.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=e.width/2-4,r=n.clientX-t,a=n.clientY-i,o=Math.hypot(r,a);o>s&&(r=r/o*s,a=a/o*s),yp.style.transform=`translate(${r}px,${a}px)`,E.joy.x=r/s,E.joy.y=-a/s}Ca.addEventListener("pointerdown",n=>{n.preventDefault(),El=n.pointerId,Ca.setPointerCapture(n.pointerId),_p(n)});Ca.addEventListener("pointermove",n=>{n.pointerId===El&&(n.preventDefault(),_p(n))});["pointerup","pointercancel","lostpointercapture"].forEach(n=>Ca.addEventListener(n,e=>{e.pointerId===El&&Xu()}));var ml=null,fl=0,Fu=0;Ra.addEventListener("pointerdown",n=>{E.mode!=="play"&&E.mode!=="mini"&&E.mode!=="creator"||(ml=n.pointerId,fl=n.clientX,Fu=n.clientY,Ra.setPointerCapture(n.pointerId))});Ra.addEventListener("pointermove",n=>{n.pointerId===ml&&(E.mode==="creator"?Bt.ang-=(n.clientX-fl)*.012:(E.phi+=(n.clientX-fl)*.006,E.pitch=es(.12,1.1,E.pitch+(n.clientY-Fu)*.004)),fl=n.clientX,Fu=n.clientY)});["pointerup","pointercancel"].forEach(n=>Ra.addEventListener(n,e=>{e.pointerId===ml&&(ml=null)}));var Cr={},gl={ArrowUp:"u",w:"u",z:"u",ArrowDown:"d",s:"d",ArrowLeft:"l",a:"l",q:"l",ArrowRight:"r",d:"r"};function Mp(){E.key.y=(Cr.u?1:0)-(Cr.d?1:0),E.key.x=(Cr.r?1:0)-(Cr.l?1:0)}document.addEventListener("keydown",n=>{n.target&&n.target.tagName==="INPUT"||(gl[n.key]&&(Cr[gl[n.key]]=!0,Mp(),n.preventDefault()),!(E.mode!=="play"&&E.mode!=="mini")&&((n.key==="e"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),bp()),n.key==="m"&&gp(),n.key==="ArrowLeft"&&n.shiftKey&&(E.phi-=.1)))});document.addEventListener("keyup",n=>{gl[n.key]&&(Cr[gl[n.key]]=!1,Mp())});var Ou=null;function bp(){if(E.mode==="mini")return xp();E.mode==="play"&&Ou&&Ou()}Oe("ba").addEventListener("click",bp);Oe("menu").addEventListener("click",gp);var np=performance.now(),Pu=0,Lu=0,Iu=3,ip=0;function sp(n,e){let t=e-n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}function Ep(n){requestAnimationFrame(Ep);let e=Math.min(.05,(n-np)/1e3);if(np=n,Pu+=e,!Zt||E.ui==="photo"&&E.mode!=="creator")return;let t=E.mode==="play"||E.mode==="mini",i=0;if(t){let s=E.joy.x+E.key.x,r=E.joy.y+E.key.y,a=Math.min(1,Math.hypot(s,r));if(a>.1){let o=Math.cos(E.phi),l=Math.sin(E.phi),c=-l,u=o,d=o*r+c*s,f=l*r+u*s,h=Math.hypot(d,f);d/=h,f/=h,i=a<.7?a/.7*2.5:2.5+(a-.7)/.3*2.1;let[p,v]=Yy(E.x+d*i*e,E.z+f*i*e);E.x=p,E.z=v;let g=Math.atan2(d,f);E.ry+=sp(E.ry,g)*Math.min(1,e*12),E.lean=s*Math.min(1,a),Lu+=e*i,Lu>1.2&&(Lu=0,rn.step())}}if(i===0&&(E.lean=0),E.speed=i,En.position.set(E.x,0,E.z),En.rotation.y=E.ry,En.userData.update(e,{speed:i,pose:E.mode==="creator"?"creator":"",cam:ht.position,lean:E.lean||0}),Object.keys(Pn).forEach(s=>{let r=Pn[s],a=r.n,o=Ts(E.x,E.z,a.x,a.z),l=E.dialog&&E.dialog.id===s&&E.mode==="dialog",c=a.ry||0;!a.sit&&(l||o<5)&&(c=Math.atan2(E.x-a.x,E.z-a.z)),a.sit&&l&&(c=Math.atan2(E.x-a.x,E.z-a.z)*.3+(a.ry||0)*.7),r.ry+=sp(r.ry,c)*Math.min(1,e*5),r.obj.rotation.y=r.ry,r.wave>0&&(r.wave-=e),r.obj.userData.update(e,{cam:ht.position,talk:l||!!$i[s]&&Ai&&Ai.who===s,wave:r.wave>0,sit:!!a.sit})}),Zt.update(e,Pu,{open:yl()}),Gn.position.set(E.x+ci.sunDir.x*70,ci.sunDir.y*70,E.z+ci.sunDir.z*70),Gn.target.position.set(E.x,0,E.z),E.mode==="cine")M_(e);else if(E.mode==="creator"){let s=En.position,r=Oe("world").clientWidth,a=Oe("world").clientHeight,o=r>a*1.25;ht.fov!==30&&(ht.fov=30,ht.updateProjectionMatrix());let l=Bt.ang,c=2.35,u=new P(s.x+Math.sin(l)*c,1.45,s.z+Math.cos(l)*c);ht.position.lerp(u,1-Math.exp(-e*8)),ht.lookAt(s.x,1.08,s.z),o?ht.setViewOffset(r,a,r*.2,0,r,a):ht.clearViewOffset()}else if(E.mode==="start"){let s=Pu*.08;ht.position.set(8+Math.cos(s)*34,9,2+Math.sin(s)*22),ht.lookAt(10,2,-2)}else $y(e);if(ci.follow(),E.mode==="play"){let s=Ky(),r=s.find(c=>c.t==="npc");r&&E.near!==r.id&&(E.near=r.id,E.greeted[r.id]||(E.greeted[r.id]=!0,Pn[r.id].wave=2.4,ep("Bonjour "+bt(E.nom)+" !",Tt[r.id].x,Tt[r.id].z,Tt[r.id].look.h*1.95,3e3))),!r&&E.near&&(E.near=null);let a=pp(s[0]);Ou=a.run;let o=Oe("ba");o.disabled=!a.enabled;let l=Oe("alabel");if(l.textContent!==a.label&&(l.textContent=a.label),Iu-=e,Iu<=0&&(Iu=5,E.sc==="ville"&&!E.near&&!Ai)){let c=Jo[ip%Jo.length];ip++;let u=c[0]==="J\xE9r\xE9mie"?$i.jer:$i.kasa;Ts(E.x,E.z,u.x,u.z)<16&&ep("<b>"+bt(c[0])+"</b> : "+bt(c[1]),u.x,u.z,u.look.h*1.95,4200)}}else E.mode==="mini"&&(y_(e),Oe("alabel").textContent="Arr\xEAter la cueillette",Oe("ba").disabled=!1);Zy(),ci.render()}function __(){E.mode="cine",E.cine={t:0,dur:9},["joy","actwrap","top","info"].forEach(n=>Oe(n).classList.add("hide")),Oe("cine").classList.remove("hide"),Oe("skip").classList.remove("hide"),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,Rs()}function M_(n){let e=E.cine;e.t+=n;let t=Math.min(1,e.t/e.dur),i=t*t*(3-2*t),s=new P(60,16,22),r=new P(10,10,26),a=Gu(Vu()),o;if(t<.6){let c=t/.6,u=c*c*(3-2*c);o=s.clone().lerp(r,u)}else{let c=(t-.6)/.4,u=c*c*(3-2*c);o=r.clone().lerp(a,u)}ht.position.copy(o);let l=new P(30,3,-4).lerp(_l(),es(0,1,(t-.45)/.55));ht.lookAt(l),e.t>=e.dur&&Sp()}function Sp(){E.cine=null,E.mode="play",["joy","actwrap","top","info"].forEach(n=>Oe(n).classList.remove("hide")),Oe("cine").classList.add("hide"),Oe("skip").classList.add("hide"),Ml(),kt(),Vn({kind:"info",title:"Bienvenue, "+E.nom+" !",i:0,lines:["Tu es dans ton village. D\xE9place-toi avec le joystick \xE0 gauche, et fais glisser ton doigt sur l\u2019\xE9cran pour tourner la cam\xE9ra.","L\u2019\xE9cole LEXARIS ACAD\xC9MIE est tout \xE0 droite. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues au manguier, vends-les \xE0 Maman B\xE9a et meuble ta maison."]})}Oe("skip").addEventListener("click",()=>{E.mode==="cine"&&Sp()});var Pa=n=>n.npcs.every(ns),b_=n=>n===0||Pa(ai[n-1]);function E_(n){return n.npcs.reduce((e,t)=>e+(E.adv.stars[t]||0),0)}function Tp(){Vn({kind:"map"})}function S_(){let n='<h3>Carte des lieux</h3><p style="font-size:13px">Choisis un lieu. Chaque niveau se d\xE9bloque quand tu as fini le pr\xE9c\xE9dent.</p>';return ai.forEach((e,t)=>{let i=b_(t),s=e.npcs.filter(ns).length,r=Pa(e);n+=`<button ${i?"":"disabled"} onclick="travel('${e.id}')"><b>${e.icon} ${bt(e.name)}</b><br><small>${i?(r?"\u2714 Termin\xE9 \xB7 ":"")+s+"/"+e.npcs.length+" personnes rencontr\xE9es \xB7 \u2605 "+E_(e):"\u{1F512} Termine \xAB "+bt(ai[t-1].name)+" \xBB pour d\xE9bloquer"}</small></button>`}),n+'<button class="s" onclick="closeDialog()">Fermer</button>'}function T_(n){let e=ai.find(i=>i.id===n);if(!e)return;let t=As[e.scene];bl(),E.sc=e.scene,t.spawn?(E.x=t.spawn.x,E.z=t.spawn.z,E.phi=t.spawn.phi):(E.x=-12,E.z=0,E.phi=0),E.near=null,Dr(),Rs(),Ln(e.icon+" "+e.name),kt()}function w_(n){let e=ai.find(t=>t.npcs.includes(n));!e||!Pa(e)||(E.adv.stageBonus=E.adv.stageBonus||{},E.adv.stageBonus[e.id]||(E.adv.stageBonus[e.id]=!0,Ir(30,30),Ln(e.icon+" Niveau termin\xE9 : "+e.name+" ! +30 pi\xE8ces"),rn.win()),ai.every(Pa)&&!E.adv.diplome&&(E.adv.diplome=!0,Jt(),setTimeout(()=>Vn({kind:"info",title:"Dipl\xF4me de LEXARIS ACAD\xC9MIE",i:0,lines:["F\xE9licitations "+E.nom+" ! Tu as termin\xE9 les quinze \xE9pisodes, de l\u2019\xE9cole au Parlement.","Tu sais compter, lire, prot\xE9ger la nature, prendre soin de ta sant\xE9, conna\xEEtre ton pays et tes droits. Tu es un vrai citoyen et un champion !"]}),1500)))}function A_(){Vn({kind:"profile"})}function R_(){bl(),Ps.hide(),Oe("cv").style.display="block",E.sc="ville",E.x=-13,E.z=.5,E.phi=0,Rs(),Sl("photo")}function C_(){let n=(window.__MAN&&window.__MAN.avatars||[]).filter(t=>t[0]===(E.look.s||"f")),e=["pf1","pf2","ph1","ph2"].map(t=>`<button class="avb${$u()===t?" on":""}" onclick="setChar('${t}')"><img src="img/chars/${t}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("");return`<h3>Mon personnage</h3><div class="chips" style="margin-bottom:8px"><button class="chip${E.real?"":" on"}" onclick="setChar(null)">3D, tous les mouvements (360\xB0)</button><button class="chip" onclick="openCreatorFromPhoto()">Personnaliser visage et tenue</button></div><div class="lb" style="font-size:12px;font-weight:700;margin:4px 0">Ou un personnage photo (de face uniquement)</div><div class="avs" style="margin-bottom:10px">${e}</div><h3>Ma photo de profil</h3><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${E.photo==="c"?" on":""}" onclick="crPhoto('c')" style="width:auto">Mon visage de personnage</button></div><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${E.look.s==="f"?" on":""}" onclick="setGenre('f')" style="width:auto">Fille</button><button class="chip${E.look.s==="h"?" on":""}" onclick="setGenre('h')" style="width:auto">Gar\xE7on</button></div><div class="avs">`+n.map(t=>`<button class="avb${E.photo===t?" on":""}" onclick="crPhoto('${t}')"><img src="img/avatars/${t}.jpg" alt=""></button>`).join("")+(Cs()?`<button class="avb${E.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${Cs()}" alt=""></button>`:"")+'</div><label class="chip" style="cursor:pointer;display:block;margin-top:8px">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label><button class="p" onclick="closeDialog()">Fermer</button>'}function P_(n){E.real=n,n&&(E.look.s=n[1]==="f"?"f":"h",E.sexe=E.look.s),Jt(),n&&Ap(n),kt(),Ps.resume(),Kt()}function L_(n){E.look.s=n,E.sexe=n,Jt(),Kt()}function I_(){Vn({kind:"objs"})}function D_(){let n=Bu(),e=Object.keys(Hn).length;return`<h3>Mes objets (${n}/${e})</h3>`+Object.keys(Hn).map(t=>`<div class="row"><span>${bt(Hn[t].n)}</span><b>${E.adv.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+'<p style="font-size:13px;margin-top:8px">Ach\xE8te-les chez Maman B\xE9a, au march\xE9, avec les pi\xE8ces gagn\xE9es en r\xE9pondant aux questions et en cueillant des mangues.</p><button class="p" onclick="closeDialog()">Fermer</button>'}var wp="kelas_photo_v1";function Cs(){try{return localStorage.getItem(wp)}catch{return null}}var hl={};function Ap(n){if(hl[n])return hl[n];hl[n]=null;let e=new Image;return e.onload=()=>{let t=document.createElement("canvas");t.width=t.height=96;let i=t.getContext("2d"),s=e.width,r=e.height*.2,a=Math.max(96/s,96/r),o=s*a,l=e.height*a;i.drawImage(e,(96-o)/2,0,o,l),hl[n]=t.toDataURL("image/png"),kt()},e.src="img/chars/"+n+".webp",null}function Rp(){return E.photo==="c"?Ap($u()):E.photo==="u"?Cs():E.photo&&window.__MAN&&(window.__MAN.avatars||[]).includes(E.photo)?"img/avatars/"+E.photo+".jpg":null}function U_(n){E.photo=n,Jt(),kt(),E.dialog&&E.dialog.kind==="profile"?Kt():Qn()}function N_(n){let e=n.files&&n.files[0];if(!e)return;let t=new Image,i=URL.createObjectURL(e);t.onload=()=>{let s=document.createElement("canvas");s.width=160,s.height=213;let r=s.getContext("2d"),a=Math.max(160/t.width,213/t.height),o=t.width*a,l=t.height*a;r.drawImage(t,(160-o)/2,(213-l)/2,o,l),URL.revokeObjectURL(i);try{let c=r.getImageData(68,95,24,30).data,u=0,d=0,f=0,h=c.length/4;for(let p=0;p<c.length;p+=4)u+=c[p],d+=c[p+1],f+=c[p+2];window.__FACES=Object.assign(window.__FACES||{},{_user:{x:.2,y:.1,w:.6,h:.45,skin:"#"+[u,d,f].map(p=>Math.round(p/h).toString(16).padStart(2,"0")).join("")}}),Eu(window.__FACES)}catch{}try{localStorage.setItem(wp,s.toDataURL("image/jpeg",.82)),E.photo="u",Jt(),kt(),E.dialog&&E.dialog.kind==="profile"?Kt():Qn(),Ln("Ta photo est enregistr\xE9e sur cet appareil.")}catch{Ln("Impossible d\u2019enregistrer la photo.")}},t.onerror=()=>Ln("Cette image ne peut pas \xEAtre lue."),t.src=i}var Lr={hair:ga,acc:va,outfit:Zi},Bt={tab:"perso",prev:null,from:"play",ang:0};function ui(n,e){let t=Lr[n][e];if(!t)return!1;if(t.own||t.unlock&&ns(t.unlock)||E.adv.bought[n+":"+e])return!0;if(n==="outfit"){for(let i in Es)if(ts()>=+i&&Es[i].outfits.indexOf(e)>=0)return!0}return!1}function pl(n,e){let t=Lr[n][e];if(t.price)return t.price+" \u{1FA99}";if(t.unlock)return"Qu\xEAte : "+Tt[t.unlock].name;for(let i in Es)if(Es[i].outfits&&Es[i].outfits.indexOf(e)>=0)return"Niveau "+i;return""}function F_(n){let e=[];return[["hair",ga],["acc",va],["outfit",Zi]].forEach(t=>Object.keys(t[1]).forEach(i=>{t[1][i].unlock===n&&e.push(t[1][i].n)})),e}function Cp(){let n=E.look,e=[];return ui("hair",n.hair)||e.push({kind:"hair",id:n.hair}),ui("outfit",n.outfit)||e.push({kind:"outfit",id:n.outfit}),n.acc.forEach(t=>{ui("acc",t)||e.push({kind:"acc",id:t})}),e}function Ia(){let n=En;En=fp(),En.position.set(E.x,0,E.z),En.rotation.y=E.ry,$t.add(En),n&&($t.remove(n),n.traverse(e=>{e.geometry&&e.geometry.dispose()}))}var Du=!1;function Da(){Du||(Du=!0,requestAnimationFrame(()=>{Du=!1,Ia()}))}function vl(n){["joy","actwrap","top","info"].forEach(e=>Oe(e).classList.toggle("hide",!n))}function Sl(n){Bt.from=n,Bt.tab="perso",Bt.prev=JSON.parse(JSON.stringify(E.look)),E.mode="creator",E.joy.x=E.joy.y=0,E.key.x=E.key.y=0,Xu(),Dr(),Bt.ang=0,E.ry=0,Ia(),vl(!1),Oe("creator").classList.remove("hide");{let e=!!E.real,t=En.position;ht.fov=30,ht.updateProjectionMatrix(),ht.position.set(t.x,e?1.25:1.45,t.z+(e?3.9:2.35))}Qn()}function O_(){let n=E.look,e=Bt.prev;if(ui("hair",n.hair)||(n.hair=e.hair),ui("outfit",n.outfit)||(n.outfit=e.outfit),n.acc=n.acc.filter(t=>ui("acc",t)),Jt(),Ia(),Oe("creator").classList.add("hide"),ht.clearViewOffset(),Hu(),Bt.from==="photo"){Oe("cv").style.display="none",E.mode="pview",vl(!0),["joy","actwrap"].forEach(t=>Oe(t).classList.add("hide")),Ps.resume(),kt();return}Bt.from==="start"?__():(E.mode="play",vl(!0),Ml(),kt())}var li=(n,e,t,i)=>`<button class="chip${e?" on":""}" onclick="${t}">${n}${i?`<small>${i}</small>`:""}</button>`,Aa=(n,e,t)=>`<button class="swt${e?" on":""}" style="background:${n}" onclick="${t}" aria-label="couleur"></button>`,Ar=(n,e)=>`<label class="sl"><span>${n}</span><input type="range" min="0" max="100" value="${Math.round(E.look[e]*100)}" oninput="crSlide('${e}',this.value)"></label>`;function Qn(){let n=E.look,e=E.real?[["perso","Personnage"],["photo","Photo"]]:[["perso","Personnage"],["visage","Visage"],["cheveux","Cheveux"],["teint","Teint"],["acc","Accessoires"],["tenue","Tenue"],["photo","Photo"]];e.some(s=>s[0]===Bt.tab)||(Bt.tab="perso");let t=`<div class="crh"><b>Mon personnage</b><span>\u{1FA99} ${E.adv.pieces}</span><button class="p" onclick="creatorDone()">Terminer</button></div>`;if(t+='<div class="tabs">'+e.map(s=>`<button class="${Bt.tab===s[0]?"on":""}" onclick="crTab('${s[0]}')">${s[1]}</button>`).join("")+'</div><div class="crb">',Bt.tab==="perso")t+='<div class="lb">Style de personnage</div><div class="chips">'+li("R\xE9aliste (photo)",!!E.real,"crStyle('real')")+li("3D personnalisable",!E.real,"crStyle('3d')")+"</div>",E.real?t+='<div class="lb">Choisis ton personnage</div><div class="avs">'+["pf1","pf2","ph1","ph2"].map(s=>`<button class="avb${E.real===s?" on":""}" onclick="crChar('${s}')"><img src="img/chars/${s}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("")+"</div>":t+='<p style="font-size:13px;margin:8px 0">R\xE8gle le visage, les cheveux, le teint, les accessoires et la tenue avec les onglets.</p>';else if(Bt.tab==="visage")t+=Ar("Largeur du visage","faceW")+Ar("M\xE2choire","jaw")+Ar("Taille des yeux","eyeS")+Ar("Nez","nose")+Ar("L\xE8vres","lips")+Ar("Joues roses","blush"),t+='<div class="lb">Sourcils</div><div class="chips">'+["Fins","\xC9pais","Arqu\xE9s"].map((s,r)=>li(s,n.brow===r,`crSet('brow',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des yeux</div><div class="sws">'+pa.map((s,r)=>Aa(s,n.eyeC===r,`crSet('eyeC',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des l\xE8vres</div><div class="sws">'+ma.map((s,r)=>Aa(s,n.lipC===r,`crSet('lipC',${r})`)).join("")+"</div>",n.s==="h"&&(t+='<div class="lb">Barbe</div><div class="chips">'+["Aucune","L\xE9g\xE8re","Compl\xE8te"].map((s,r)=>li(s,n.beard===r,`crSet('beard',${r})`)).join("")+"</div>");else if(Bt.tab==="cheveux")t+='<div class="lb">Coiffure</div><div class="chips">'+Object.keys(ga).map(s=>li(ga[s].n,n.hair===s,`crHair('${s}')`,ui("hair",s)?"":"\u{1F512} "+pl("hair",s))).join("")+"</div>",t+='<div class="lb">Couleur des cheveux</div><div class="sws">'+Qo.map((s,r)=>Aa(s,n.hairC===r,`crSet('hairC',${r})`)).join("")+"</div>";else if(Bt.tab==="teint")t+='<div class="lb">Je suis</div><div class="chips">'+li("Une fille",n.s==="f","crSet('s','f')")+li("Un gar\xE7on",n.s==="h","crSet('s','h')")+"</div>",t+='<div class="lb">Teint de la peau</div><div class="sws">'+Mr.map((s,r)=>Aa(s,n.skin===r,`crSet('skin',${r})`)).join("")+"</div>";else if(Bt.tab==="acc")t+='<div class="lb">Accessoires</div><div class="chips">'+Object.keys(va).map(s=>li(va[s].n,n.acc.indexOf(s)>=0,`crAcc('${s}')`,ui("acc",s)?"":"\u{1F512} "+pl("acc",s))).join("")+"</div>";else if(Bt.tab==="photo"){let s=(window.__MAN&&window.__MAN.avatars||[]).filter(r=>r[0]===n.s);t+='<div class="lb">Ma photo de profil</div><div class="avs">'+s.map(r=>`<button class="avb${E.photo===r?" on":""}" onclick="crPhoto('${r}')"><img src="img/avatars/${r}.jpg" alt=""></button>`).join("")+(Cs()?`<button class="avb${E.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${Cs()}" alt=""></button>`:"")+"</div>",t+='<div class="chips" style="margin-top:8px"><label class="chip" style="cursor:pointer">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label>'+li("Aucune photo",!E.photo,"crPhoto(null)")+"</div>"}else t+='<div class="lb">Tenue</div><div class="chips">'+Object.keys(Zi).map(s=>li(Zi[s].n,n.outfit===s,`crOutfit('${s}')`,ui("outfit",s)?"":"\u{1F512} "+pl("outfit",s))).join("")+"</div>",t+='<div class="lb">Couleur de la tenue</div><div class="sws">'+el.map((s,r)=>Aa(s,n.outfitC===r,`crSet('outfitC',${r})`)).join("")+"</div>";t+="</div>";let i=Cp();if(i.length){let s=i.reduce((r,a)=>r+(Lr[a.kind][a.id].price||0),0);t+=`<div class="buy"><span>Essayage : ${i.map(r=>bt(Lr[r.kind][r.id].n)).join(", ")} \u2014 ${s} \u{1FA99}</span><button class="p" onclick="crBuy()">Acheter</button></div>`}Oe("creator").innerHTML=t}function z_(n){if(n==="real"){let e=["pf1","pf2","ph1","ph2"].some(Pr);E.real=e?E.look.s==="f"?"pf1":"ph1":null}else E.real=null;Ia(),Qn()}function B_(n){E.real=n,E.look.s=n[1]==="f"?"f":"h",E.sexe=E.look.s,Ia(),Qn()}function k_(n){Bt.tab=n,Qn()}function H_(n,e){E.look[n]=e/100,Da()}function G_(n,e){E.look[n]=e,n==="s"&&(E.sexe=e,e==="f"&&E.look.beard&&(E.look.beard=0)),Da(),Qn()}function ju(n,e){let t=Lr[n][e];return ui(n,e)||t.price?!0:(Ln(pl(n,e)+" pour d\xE9bloquer : "+t.n),rn.ko(),!1)}function V_(n){ju("hair",n)&&(E.look.hair=n,Da(),Qn())}function W_(n){ju("outfit",n)&&(E.look.outfit=n,Da(),Qn())}function q_(n){let e=E.look.acc,t=e.indexOf(n);if(t>=0)e.splice(t,1);else{if(!ju("acc",n))return;e.push(n)}Da(),Qn()}function X_(){let n=Cp(),e=n.reduce((t,i)=>t+(Lr[i.kind][i.id].price||0),0);if(E.adv.pieces<e){Ln("Il te manque "+(e-E.adv.pieces)+" pi\xE8ces."),rn.ko();return}E.adv.pieces-=e,n.forEach(t=>{E.adv.bought[t.kind+":"+t.id]=!0}),Jt(),kt(),rn.coin(),Ln("Achat r\xE9ussi !"),Qn()}function j_(){bl(),Sl("play")}function Yu(n){E.sexe=n,E.look.s=n,n==="f"&&E.look.beard&&(E.look.beard=0),Oe("fille").className=n==="f"?"p":"",Oe("garcon").className=n==="h"?"p":""}Oe("fille").onclick=()=>Yu("f");Oe("garcon").onclick=()=>Yu("h");function Pp(n){Oe("start").classList.add("hide"),Oe("cv").style.display="none",vl(!0),["joy","actwrap"].forEach(e=>Oe(e).classList.add("hide")),Oe("cine").classList.add("hide"),E.ui="photo",E.mode="pview",Ps.show("village"),kt(),n&&Vn({kind:"info",title:"Bienvenue, "+E.nom+" !",i:0,lines:["Tu es devant ta maison, dans ton quartier de Kinshasa. Touche les fl\xE8ches pour te d\xE9placer, touche les personnes pour leur parler, et fais glisser ton doigt pour regarder autour de toi.","Ton but : aller \xE0 l\u2019\xE9cole LEXARIS ACAD\xC9MIE. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues, vends-les \xE0 Maman B\xE9a au march\xE9, et gagne des pi\xE8ces."]})}function Lp(n){Oe("start").classList.add("hide"),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,n?(Rs(),E.mode="creator",Sl("start")):(E.mode="play",["joy","actwrap"].forEach(e=>Oe(e).classList.remove("hide")),Rs(),kt())}Oe("go").onclick=()=>{let n=Oe("nom").value.trim();if(!n){Oe("nom").focus();return}E.ui="3d",E.photo=E.sexe==="f"?"f1":"h1",Oe("cv").style.display="block",E.nom=n,E.adv=xl(),E.real=null,E.look=Object.assign({},xa,{acc:[],s:E.sexe,hair:E.sexe==="f"?"tresses":"courtes"}),Jt(),Lp(!0)};Oe("go3d").onclick=()=>{let n=Oe("nom").value.trim();if(!n){Oe("nom").focus();return}E.nom=n,E.adv=xl(),E.ui="photo",E.look=Object.assign({},xa,{acc:[],s:E.sexe}),E.real=null,E.photo=E.sexe==="f"?"f1":"h1",Jt(),Pp(!0)};Oe("cont").onclick=()=>{E.ui==="photo"?Pp(!1):(Oe("cv").style.display="block",Lp(!1))};Object.assign(window,{__NPCDATA:Tt,travel:T_,openMap:Tp,cycleQuality:Hy,openCreatorFromPhoto:R_,setChar:P_,openProfile:A_,setGenre:L_,replay:Oy,toggleVoice:p_,crStyle:z_,crChar:B_,crPhoto:U_,crUpload:N_,crTab:k_,crSlide:H_,crSet:G_,crHair:V_,crOutfit:W_,crAcc:q_,crBuy:X_,creatorDone:O_,shopMode:j_,nextLine:t_,answerQ:n_,nextQ:i_,closeDialog:bl,infoNext:o_,sellMangoes:u_,buy:h_,toggleSound:f_,resetGame:m_,__G:E,__W:()=>Zt,__snap:()=>Ml(),__dbg:()=>({cam:ht.position.toArray().map(n=>+n.toFixed(1)),bea:Pn.bea&&Pn.bea.obj.position.toArray(),beaVis:Pn.bea&&Pn.bea.obj.visible,n:Object.keys(Pn)})});var $u=()=>["pf1","pf2","ph1","ph2"].includes(E.real)?E.real:E.look.s==="f"?"pf1":"ph1",Y_=()=>il(Object.assign({},E.look,{h:1},dp())),Ip={makePlayer3D:Y_,playerChar:$u,G:E,NPC:Tt,AUTOP:$i,AUTO:Jo,actionFor:pp,locked:ap,doneNpc:ns,doorOpen:yl,toast:Ln,speak:ku,SFX:rn,gain:Ir,save:Jt,refreshHud:kt,openBox:Vn,esc:bt,hasChar:Pr,openObjs:I_};jf(Ip);var Ps=Ip.photo;function $_(){let n=Iy();Hu(),hp(),n&&n.nom&&(E.nom=n.nom,E.ui=n.ui||"photo",E.photo=n.photo||null,E.real=n.real===void 0?null:n.real,E.voice=n.voice!==!1,E.sound=n.sound!==!1,E.look=Object.assign({},xa,{acc:[]},n.look||{s:n.sexe||"f",skin:n.skin||3}),E.sexe=E.look.s,E.adv=Object.assign(xl(),n.adv||{}),Oe("nom").value=n.nom,Oe("cont").textContent="Continuer \xB7 "+n.nom+" (niveau "+ts()+")",Oe("cont").classList.remove("hide"),Oe("go").textContent="Nouvelle partie",Oe("go").className=""),Yu(E.sexe),kt(),E.sc="ville",E.x=-13,E.z=.5,E.phi=0,E.ui!=="photo"||!n||n.nom,Oe("cv").style.display="none",Oe("lb").style.width="100%",setTimeout(()=>{Oe("load").classList.add("hide"),Oe("start").classList.remove("hide")},150),E.mode="start",requestAnimationFrame(Ep)}fetch("img/manifest.json").then(n=>n.ok?n.json():{}).catch(()=>({})).then(async n=>{window.__MAN=n||{},lf(n);try{let e=await(await fetch("img/faces.json")).json();window.__FACES=e,Eu(e)}catch{window.__FACES={}}(n.scenes||[]).includes("kinshasa")&&(Oe("start").style.backgroundImage="linear-gradient(rgba(10,20,30,.35),rgba(10,20,30,.35)),url(img/scenes/kinshasa.jpg)"),$_()});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
