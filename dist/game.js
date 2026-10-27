(()=>{var Zf=0,bh=1,Jf=2;var ed=1,pc=2,Yn=3,ui=0,Ht=1,wt=2;var Pt=0,Es=1,Do=2,Sh=3,Eh=4,mc=5,_n=100,Kf=101,Qf=102,Th=103,wh=104,zs=200,ep=201,tp=202,np=203,Al=204,Rl=205,ua=206,ip=207,da=208,sp=209,rp=210,op=211,ap=212,lp=213,cp=214,hp=0,up=1,dp=2,Uo=3,fp=4,pp=5,mp=6,gp=7,td=0,vp=1,xp=2,hi=0,gc=1,vc=2,xc=3,Yi=4,_p=5,_c=6;var nd=300,As=301,Rs=302,Cl=303,Pl=304,fa=306,jt=1e3,An=1001,zi=1002,Tt=1003,Ah=1004;var Ya=1005;var xn=1006,yp=1007;var xr=1008;var Un=1009,Mp=1010,bp=1011,yc=1012,id=1013,li=1014,ci=1015,on=1016,sd=1017,rd=1018,Zn=1020,Sp=1021,fn=1023,Ep=1024,Tp=1025,Fi=1026,di=1027,wp=1028,od=1029,Ap=1030,ad=1031,ld=1033,$a=33776,ja=33777,Za=33778,Ja=33779,Rh=35840,Ch=35841,Ph=35842,Ih=35843,cd=36196,Lh=37492,Dh=37496,Uh=37808,Nh=37809,Oh=37810,Fh=37811,Bh=37812,zh=37813,kh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,Xh=37819,qh=37820,Yh=37821,Ka=36492,$h=36494,jh=36495,Rp=36283,Zh=36284,Jh=36285,Kh=36286;var No=2300,Oo=2301,Qa=2302,Qh=2400,eu=2401,tu=2402;var hd=3e3,Bi=3001,Cp=3200,Mc=3201,bc=0,Pp=1,yn="",tt="srgb",Jn="srgb-linear",Sc="display-p3",pa="display-p3-linear",Fo="linear",lt="srgb",Bo="rec709",zo="p3";var ns=7680;var nu=519,Ip=512,Lp=513,Dp=514,ud=515,Up=516,Np=517,Op=518,Fp=519,iu=35044;var su="300 es",Il=1035,jn=2e3,ko=2001,fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,ur=Math.PI/180,_r=180/Math.PI;function $i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Ec(n,e){return(n%e+e)%e}function Bp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function zp(n,e,t){return n!==e?(t-n)/(e-n):0}function dr(n,e,t){return(1-t)*n+t*e}function kp(n,e,t,i){return dr(n,e,1-Math.exp(-t*i))}function Hp(n,e=1){return e-Math.abs(Ec(n,e*2)-e)}function Vp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xp(n,e){return n+Math.random()*(e-n)}function qp(n){return n*(.5-Math.random())}function Yp(n){n!==void 0&&(ru=n);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $p(n){return n*ur}function jp(n){return n*_r}function Ll(n){return(n&n-1)===0&&n!==0}function Zp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Tc={DEG2RAD:ur,RAD2DEG:_r,generateUUID:$i,clamp:Ct,euclideanModulo:Ec,mapLinear:Bp,inverseLerp:zp,lerp:dr,damp:kp,pingpong:Hp,smoothstep:Vp,smootherstep:Gp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:Yp,degToRad:$p,radToDeg:jp,isPowerOfTwo:Ll,ceilPowerOfTwo:Zp,floorPowerOfTwo:Ho,setQuaternionFromProperEuler:Jp,normalize:en,denormalize:_s},he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*_+a*y+l*C,r[3]=o*m+a*x+l*T,r[6]=o*p+a*M+l*R,r[1]=c*_+h*y+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*M+u*R,r[2]=f*_+d*y+g*C,r[5]=f*m+d*x+g*T,r[8]=f*p+d*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new Ke;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kp(){let n=yr("canvas");return n.style.display="block",n}var ou={};function fr(n){n in ou||(ou[n]=!0,console.warn(n))}var au=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[Jn]:{transfer:Fo,primaries:Bo,toReference:n=>n,fromReference:n=>n},[tt]:{transfer:lt,primaries:Bo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pa]:{transfer:Fo,primaries:zo,toReference:n=>n.applyMatrix3(lu),fromReference:n=>n.applyMatrix3(au)},[Sc]:{transfer:lt,primaries:zo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(lu),fromReference:n=>n.applyMatrix3(au).convertLinearToSRGB()}},Qp=new Set([Jn,pa]),it={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ro[e].toReference,s=ro[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ro[n].primaries},getTransfer:function(n){return n===yn?Fo:ro[n].transfer}};function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var is,Vo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=yr("canvas")),is.width=e.width,is.height=e.height;let i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},em=0,Go=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function nl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tm=0,an=class n extends fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=An,s=An,r=xn,o=xr,a=fn,l=Un,c=n.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=$i(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bi?tt:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jt:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case zi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jt:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case zi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Bi:hd}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bi?tt:yn}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=nd;an.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(d+1)/2,C=(p+1)/2,T=(h+f)/4,R=(u+_)/4,F=(g+m)/4;return x>M&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=R/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=F/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=F/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Bi?tt:yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Dl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wo=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,p*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let M=a*y;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new P,cu=new Mn,Kn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),ao.subVectors(this.max,sr),ss.subVectors(e.a,sr),rs.subVectors(e.b,sr),os.subVectors(e.c,sr),ii.subVectors(rs,ss),si.subVectors(os,rs),Ii.subVectors(ss,os);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ii.z,Ii.y,ii.z,0,-ii.x,si.z,0,-si.x,Ii.z,0,-Ii.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ii.y,Ii.x,0];return!sl(t,ss,rs,os,ao)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,ss,rs,os,ao))?!1:(lo.crossVectors(ii,si),t=[lo.x,lo.y,lo.z],sl(t,ss,rs,os,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,oo=new Kn,ss=new P,rs=new P,os=new P,ii=new P,si=new P,Ii=new P,sr=new P,ao=new P,lo=new P,Li=new P;function sl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Li.fromArray(n,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nm=new Kn,rr=new P,rl=new P,ki=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):nm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(rl)),this.expandByPoint(rr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new P,ol=new P,co=new P,ri=new P,al=new P,ho=new P,ll=new P,Nl=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ol.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=ri.dot(this.direction),l=-ri.dot(co),c=ri.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(co,f),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){al.subVectors(t,e),ho.subVectors(i,e),ll.crossVectors(al,ho);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);let l=a*this.direction.dot(ho.crossVectors(ri,ho));if(l<0)return null;let c=a*this.direction.dot(al.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(im,e,sm)}lookAt(e,t,i){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),oi.crossVectors(i,un),oi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),oi.crossVectors(i,un)),oi.normalize(),uo.crossVectors(un,oi),s[0]=oi.x,s[4]=uo.x,s[8]=un.x,s[1]=oi.y,s[5]=uo.y,s[9]=un.y,s[2]=oi.z,s[6]=uo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],M=i[11],C=i[15],T=s[0],R=s[4],F=s[8],v=s[12],b=s[1],O=s[5],H=s[9],k=s[13],D=s[2],N=s[6],Z=s[10],oe=s[14],ie=s[3],Y=s[7],ae=s[11],le=s[15];return r[0]=o*T+a*b+l*D+c*ie,r[4]=o*R+a*O+l*N+c*Y,r[8]=o*F+a*H+l*Z+c*ae,r[12]=o*v+a*k+l*oe+c*le,r[1]=h*T+u*b+f*D+d*ie,r[5]=h*R+u*O+f*N+d*Y,r[9]=h*F+u*H+f*Z+d*ae,r[13]=h*v+u*k+f*oe+d*le,r[2]=g*T+_*b+m*D+p*ie,r[6]=g*R+_*O+m*N+p*Y,r[10]=g*F+_*H+m*Z+p*ae,r[14]=g*v+_*k+m*oe+p*le,r[3]=y*T+x*b+M*D+C*ie,r[7]=y*R+x*O+M*N+C*Y,r[11]=y*F+x*H+M*Z+C*ae,r[15]=y*v+x*k+M*oe+C*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=t*y+i*x+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=y*R,e[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*R,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*R,e[4]=x*R,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*R,e[8]=M*R,e[9]=(g*u*r-h*_*r-g*i*d+t*_*d+h*i*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*R,e[12]=C*R,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,x=l*h,M=l*u,C=i.x,T=i.y,R=i.z;return s[0]=(1-(_+p))*C,s[1]=(d+M)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-y)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);let c=1/r,h=1/o,u=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=jn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===jn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ko)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h,g,_;if(a===jn)g=(o+r)*u,_=-2*u;else if(a===ko)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},as=new P,Tn=new nt,im=new P(0,0,0),sm=new P(1,1,1),oi=new P,uo=new P,un=new P,hu=new nt,uu=new Mn,Cs=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cs.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rm=0,du=new P,ls=new Mn,Wn=new nt,fo=new P,or=new P,om=new P,am=new Mn,fu=new P(1,0,0),pu=new P(0,1,0),mu=new P(0,0,1),lm={type:"added"},cm={type:"removed"},Vt=class n extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Cs,i=new Mn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ke}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fo.copy(e):fo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(or,fo,this.up):Wn.lookAt(fo,or,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Wn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new P(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new P,Xn=new P,cl=new P,qn=new P,cs=new P,hs=new P,gu=new P,hl=new P,ul=new P,dl=new P,po=!1,ys=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Xn.subVectors(i,t),cl.subVectors(e,t);let o=wn.dot(wn),a=wn.dot(Xn),l=wn.dot(cl),c=Xn.dot(Xn),h=Xn.dot(cl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,s,r,o,a,l){return po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),po=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Xn.subVectors(e,t),wn.cross(Xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),po=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,i),hs.subVectors(r,i),hl.subVectors(e,i);let l=cs.dot(hl),c=hs.dot(hl);if(l<=0&&c<=0)return t.copy(i);ul.subVectors(e,s);let h=cs.dot(ul),u=hs.dot(ul);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(cs,o);dl.subVectors(e,r);let d=cs.dot(dl),g=hs.dot(dl);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(hs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return gu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(gu,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(cs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},mo={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Ec(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let i=fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return it.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ct(Yt.r*255,0,255))*65536+Math.round(Ct(Yt.g*255,0,255))*256+Math.round(Ct(Yt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=tt){it.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,s=Yt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(mo);let i=dr(ai.h,mo.h,t),s=dr(ai.s,mo.s,t),r=dr(ai.l,mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new De;De.NAMES=fd;var hm=0,pi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Es,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==_n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new P,go=new he,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}};var qo=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Yo=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ye=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}};var um=0,vn=new nt,pl=new Vt,us=new P,dn=new Kn,ar=new Kn,Ot=new P,Mt=class n extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?Yo:qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(dn.min,ar.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,ar.max),dn.expandByPoint(Ot)):(dn.expandByPoint(ar.min),dn.expandByPoint(ar.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Ot.add(us)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new P,h[b]=new P;let u=new P,f=new P,d=new P,g=new he,_=new he,m=new he,p=new P,y=new P;function x(b,O,H){u.fromArray(s,b*3),f.fromArray(s,O*3),d.fromArray(s,H*3),g.fromArray(o,b*2),_.fromArray(o,O*2),m.fromArray(o,H*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let k=1/(_.x*m.y-m.x*_.y);isFinite(k)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(k),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(k),c[b].add(p),c[O].add(p),c[H].add(p),h[b].add(y),h[O].add(y),h[H].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let b=0,O=M.length;b<O;++b){let H=M[b],k=H.start,D=H.count;for(let N=k,Z=k+D;N<Z;N+=3)x(i[N+0],i[N+1],i[N+2])}let C=new P,T=new P,R=new P,F=new P;function v(b){R.fromArray(r,b*3),F.copy(R);let O=c[b];C.copy(O),C.sub(R.multiplyScalar(R.dot(O))).normalize(),T.crossVectors(F,O);let k=T.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=k}for(let b=0,O=M.length;b<O;++b){let H=M[b],k=H.start,D=H.count;for(let N=k,Z=k+D;N<Z;N+=3)v(i[N+0]),v(i[N+1]),v(i[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vu=new nt,Di=new Nl,vo=new ki,xu=new P,ds=new P,fs=new P,ps=new P,ml=new P,xo=new P,_o=new he,yo=new he,Mo=new he,_u=new P,yu=new P,Mu=new P,bo=new P,So=new P,ge=class extends Vt{constructor(e=new Mt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ml.fromBufferAttribute(u,e),o?xo.addScaledVector(ml,h):xo.addScaledVector(ml.sub(t),h))}t.add(xo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(vo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(vo,xu)===null||Di.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(vu.copy(r).invert(),Di.copy(e.ray).applyMatrix4(vu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,C=x;M<C;M+=3){let T=a.getX(M),R=a.getX(M+1),F=a.getX(M+2);s=Eo(this,p,e,i,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Eo(this,o,e,i,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,C=x;M<C;M+=3){let T=M,R=M+1,F=M+2;s=Eo(this,p,e,i,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=Eo(this,o,e,i,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dm(n,e,t,i,s,r,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ui,a),l===null)return null;So.copy(a),So.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:n}}function Eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ds),n.getVertexPosition(l,fs),n.getVertexPosition(c,ps);let h=dm(n,e,t,i,ds,fs,ps,bo);if(h){s&&(_o.fromBufferAttribute(s,a),yo.fromBufferAttribute(s,l),Mo.fromBufferAttribute(s,c),h.uv=ys.getInterpolation(bo,ds,fs,ps,_o,yo,Mo,new he)),r&&(_o.fromBufferAttribute(r,a),yo.fromBufferAttribute(r,l),Mo.fromBufferAttribute(r,c),h.uv1=ys.getInterpolation(bo,ds,fs,ps,_o,yo,Mo,new he),h.uv2=h.uv1),o&&(_u.fromBufferAttribute(o,a),yu.fromBufferAttribute(o,l),Mu.fromBufferAttribute(o,c),h.normal=ys.getInterpolation(bo,ds,fs,ps,_u,yu,Mu,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};ys.getNormal(ds,fs,ps,u.normal),h.face=u}return h}var bt=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function g(_,m,p,y,x,M,C,T,R,F,v){let b=M/R,O=C/F,H=M/2,k=C/2,D=T/2,N=R+1,Z=F+1,oe=0,ie=0,Y=new P;for(let ae=0;ae<Z;ae++){let le=ae*O-k;for(let ve=0;ve<N;ve++){let $=ve*b-H;Y[_]=$*y,Y[m]=le*x,Y[p]=D,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ve/R),u.push(1-ae/F),oe+=1}}for(let ae=0;ae<F;ae++)for(let le=0;le<R;le++){let ve=f+le+N*ae,$=f+le+N*(ae+1),se=f+(le+1)+N*(ae+1),pe=f+(le+1)+N*ae;l.push(ve,$,pe),l.push($,se,pe),ie+=6}a.addGroup(d,ie,v),d+=ie,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ps(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=Ps(n[t]);for(let s in i)e[s]=i[s]}return e}function fm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pd(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}var Zt={clone:Ps,merge:tn},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},$o=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$t=class extends $o{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,gs=1,Ol=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(ms,gs,e,t);s.layers=this.layers,this.add(s);let r=new $t(ms,gs,e,t);r.layers=this.layers,this.add(r);let o=new $t(ms,gs,e,t);o.layers=this.layers,this.add(o);let a=new $t(ms,gs,e,t);a.layers=this.layers,this.add(a);let l=new $t(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new $t(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jo=class extends an{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fl=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bi?tt:yn),this.texture=new jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bt(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Pt});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===xr&&(t.minFilter=xn),new Ol(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},gl=new P,gm=new P,vm=new Ke,$n=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gl.subVectors(i,t).cross(gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||vm.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new ki,To=new P,Mr=class{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+h,m+g,M+y).normalize(),i[3].setComponents(l-o,f-h,m-g,M-y).normalize(),i[4].setComponents(l-a,f-u,m-_,M-x).normalize(),t===jn)i[5].setComponents(l+a,f+u,m+_,M+x).normalize();else if(t===ko)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function md(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xm(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var ct=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<c;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let x=y+c*p,M=y+c*(p+1),C=y+1+c*(p+1),T=y+1+c*p;d.push(x,M,T),d.push(M,C,T)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},_m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`#ifdef USE_BATCHING
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
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vm=`#define PI 3.141592653589793
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
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`
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
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
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
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,xg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cg=`#if defined( USE_POINTS_UV )
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
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,T0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
}`,O0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,k0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,W0=`#define TOON
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
}`,X0=`#define TOON
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
}`,q0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
}`,Z0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:_m,alphahash_pars_fragment:ym,alphamap_fragment:Mm,alphamap_pars_fragment:bm,alphatest_fragment:Sm,alphatest_pars_fragment:Em,aomap_fragment:Tm,aomap_pars_fragment:wm,batching_pars_vertex:Am,batching_vertex:Rm,begin_vertex:Cm,beginnormal_vertex:Pm,bsdfs:Im,iridescence_fragment:Lm,bumpmap_pars_fragment:Dm,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Fm,color_fragment:Bm,color_pars_fragment:zm,color_pars_vertex:km,color_vertex:Hm,common:Vm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Wm,displacementmap_pars_vertex:Xm,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:$m,colorspace_fragment:jm,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Qm,envmap_pars_vertex:eg,envmap_physical_pars_fragment:dg,envmap_vertex:tg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:sg,fog_pars_fragment:rg,gradientmap_pars_fragment:og,lightmap_fragment:ag,lightmap_pars_fragment:lg,lights_lambert_fragment:cg,lights_lambert_pars_fragment:hg,lights_pars_begin:ug,lights_toon_fragment:fg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:gg,lights_physical_fragment:vg,lights_physical_pars_fragment:xg,lights_fragment_begin:_g,lights_fragment_maps:yg,lights_fragment_end:Mg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Tg,map_fragment:wg,map_pars_fragment:Ag,map_particle_fragment:Rg,map_particle_pars_fragment:Cg,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Ig,morphcolor_vertex:Lg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ug,morphtarget_vertex:Ng,normal_fragment_begin:Og,normal_fragment_maps:Fg,normal_pars_fragment:Bg,normal_pars_vertex:zg,normal_vertex:kg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:$g,project_vertex:jg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:t0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:o0,skinnormal_vertex:a0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:v0,background_vert:x0,background_frag:_0,backgroundCube_vert:y0,backgroundCube_frag:M0,cube_vert:b0,cube_frag:S0,depth_vert:E0,depth_frag:T0,distanceRGBA_vert:w0,distanceRGBA_frag:A0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:P0,linedashed_frag:I0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:U0,meshlambert_frag:N0,meshmatcap_vert:O0,meshmatcap_frag:F0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:k0,meshphong_frag:H0,meshphysical_vert:V0,meshphysical_frag:G0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:$0,shadow_frag:j0,sprite_vert:Z0,sprite_frag:J0},ye={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Dn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Dn.physical={uniforms:tn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var wo={r:0,b:0,g:0};function K0(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fa)?(h===void 0&&(h=new ge(new bt(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Ps(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=it.getTransfer(x.colorSpace)!==lt,(u!==x||f!==x.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ge(new ct(2,2),new ft({name:"BackgroundMaterial",uniforms:Ps(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(wo,pd(n)),i.buffers.color.setClear(wo.r,wo.g,wo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Q0(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(D,N,Z,oe,ie){let Y=!1;if(o){let ae=_(oe,Z,N);c!==ae&&(c=ae,d(c.object)),Y=p(D,oe,Z,ie),Y&&y(D,oe,Z,ie)}else{let ae=N.wireframe===!0;(c.geometry!==oe.id||c.program!==Z.id||c.wireframe!==ae)&&(c.geometry=oe.id,c.program=Z.id,c.wireframe=ae,Y=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,F(D,N,Z,oe),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,N,Z){let oe=Z.wireframe===!0,ie=a[D.id];ie===void 0&&(ie={},a[D.id]=ie);let Y=ie[N.id];Y===void 0&&(Y={},ie[N.id]=Y);let ae=Y[oe];return ae===void 0&&(ae=m(f()),Y[oe]=ae),ae}function m(D){let N=[],Z=[],oe=[];for(let ie=0;ie<s;ie++)N[ie]=0,Z[ie]=0,oe[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:oe,object:D,attributes:{},index:null}}function p(D,N,Z,oe){let ie=c.attributes,Y=N.attributes,ae=0,le=Z.getAttributes();for(let ve in le)if(le[ve].location>=0){let se=ie[ve],pe=Y[ve];if(pe===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;ae++}return c.attributesNum!==ae||c.index!==oe}function y(D,N,Z,oe){let ie={},Y=N.attributes,ae=0,le=Z.getAttributes();for(let ve in le)if(le[ve].location>=0){let se=Y[ve];se===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));let pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),ie[ve]=pe,ae++}c.attributes=ie,c.attributesNum=ae,c.index=oe}function x(){let D=c.newAttributes;for(let N=0,Z=D.length;N<Z;N++)D[N]=0}function M(D){C(D,0)}function C(D,N){let Z=c.newAttributes,oe=c.enabledAttributes,ie=c.attributeDivisors;Z[D]=1,oe[D]===0&&(n.enableVertexAttribArray(D),oe[D]=1),ie[D]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),ie[D]=N)}function T(){let D=c.newAttributes,N=c.enabledAttributes;for(let Z=0,oe=N.length;Z<oe;Z++)N[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),N[Z]=0)}function R(D,N,Z,oe,ie,Y,ae){ae===!0?n.vertexAttribIPointer(D,N,Z,ie,Y):n.vertexAttribPointer(D,N,Z,oe,ie,Y)}function F(D,N,Z,oe){if(i.isWebGL2===!1&&(D.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let ie=oe.attributes,Y=Z.getAttributes(),ae=N.defaultAttributeValues;for(let le in Y){let ve=Y[le];if(ve.location>=0){let $=ie[le];if($===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let se=$.normalized,pe=$.itemSize,Re=t.get($);if(Re===void 0)continue;let we=Re.buffer,ee=Re.type,ue=Re.bytesPerElement,me=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||$.gpuType===id);if($.isInterleavedBufferAttribute){let Le=$.data,X=Le.stride,Ge=$.offset;if(Le.isInstancedInterleavedBuffer){for(let _e=0;_e<ve.locationSize;_e++)C(ve.location+_e,Le.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let _e=0;_e<ve.locationSize;_e++)M(ve.location+_e);n.bindBuffer(n.ARRAY_BUFFER,we);for(let _e=0;_e<ve.locationSize;_e++)R(ve.location+_e,pe/ve.locationSize,ee,se,X*ue,(Ge+pe/ve.locationSize*_e)*ue,me)}else{if($.isInstancedBufferAttribute){for(let Le=0;Le<ve.locationSize;Le++)C(ve.location+Le,$.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Le=0;Le<ve.locationSize;Le++)M(ve.location+Le);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Le=0;Le<ve.locationSize;Le++)R(ve.location+Le,pe/ve.locationSize,ee,se,pe*ue,pe/ve.locationSize*Le*ue,me)}}else if(ae!==void 0){let se=ae[le];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(ve.location,se);break;case 3:n.vertexAttrib3fv(ve.location,se);break;case 4:n.vertexAttrib4fv(ve.location,se);break;default:n.vertexAttrib1fv(ve.location,se)}}}}T()}function v(){H();for(let D in a){let N=a[D];for(let Z in N){let oe=N[Z];for(let ie in oe)g(oe[ie].object),delete oe[ie];delete N[Z]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;let N=a[D.id];for(let Z in N){let oe=N[Z];for(let ie in oe)g(oe[ie].object),delete oe[ie];delete N[Z]}delete a[D.id]}function O(D){for(let N in a){let Z=a[N];if(Z[D.id]===void 0)continue;let oe=Z[D.id];for(let ie in oe)g(oe[ie].object),delete oe[ie];delete Z[D.id]}}function H(){k(),h=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:k,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function ev(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||e.has("OES_texture_float"),C=x&&M,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:T}}function nv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new $n,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,x=y*4,M=p.clippingState||null;l.value=M,M=h(g,f,x,d);for(let C=0;C!==x;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function iv(n){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=As:a===Pl&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cl||a===Pl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fl(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var mi=class extends $o{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,bu=[.125,.215,.35,.446,.526,.582],Oi=20,vl=new mi,Su=new De,xl=null,_l=0,yl=0,Ni=(1+Math.sqrt(5))/2,vs=1/Ni,Eu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ni,vs),new P(0,Ni,-vs),new P(vs,0,Ni),new P(-vs,0,Ni),new P(Ni,vs,0),new P(-Ni,vs,0)],Is=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,_l,yl),e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:on,format:fn,colorSpace:Jn,depthBuffer:!1},s=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sv(r)),this._blurMaterial=rv(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,i,s){let a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Su),h.toneMapping=hi,h.autoClear=!1;let d=new nn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new ge(new bt,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Su),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Ao(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Eu[(s-1)%Eu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let p=[],y=0;for(let R=0;R<Oi;++R){let F=R/_,v=Math.exp(-F*F/2);p.push(v),R===0?y+=v:R<m&&(y+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let M=this._sizeLods[s],C=3*M*(s>x-Ms?s-x+Ms:0),T=4*(this._cubeSize-M);Ao(t,C,T,3*M,2*M),l.setRenderTarget(t),l.render(u,vl)}};function sv(n){let e=[],t=[],i=[],s=n,r=n-Ms+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ms?l=bu[o-n+Ms-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,F=T>2?0:-1,v=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(v,_*g*T),x.set(f,m*g*T);let b=[T,T,T,T,T,T];M.set(b,p*g*T)}let C=new Mt;C.setAttribute("position",new At(y,_)),C.setAttribute("uv",new At(x,m)),C.setAttribute("faceIndex",new At(M,p)),e.push(C),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tu(n,e,t){let i=new Ft(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rv(n,e,t){let i=new Float32Array(Oi),s=new P(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function wu(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Au(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function ov(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cl||l===Pl,h=l===As||l===Rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Is(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Is(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function av(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lv(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){let C=y[x+0],T=y[x+1],R=y[x+2];f.push(C,T,T,R,R,C)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let C=x+0,T=x+1,R=x+2;f.push(C,T,T,R,R,C)}}else return;let m=new(dd(f)?Yo:qo)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function cv(n,e,t,i){let s=i.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){n.drawElements(r,g,a,d*l),t.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function hv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uv(n,e){return n[0]-e[0]}function dv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let D=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],F=0;y===!0&&(F=1),x===!0&&(F=2),M===!0&&(F=3);let v=h.attributes.position.count*F,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let O=new Float32Array(v*b*4*g),H=new Wo(O,v,b,g);H.type=ci,H.needsUpdate=!0;let k=F*4;for(let N=0;N<g;N++){let Z=C[N],oe=T[N],ie=R[N],Y=v*b*4*N;for(let ae=0;ae<Z.count;ae++){let le=ae*k;y===!0&&(o.fromBufferAttribute(Z,ae),O[Y+le+0]=o.x,O[Y+le+1]=o.y,O[Y+le+2]=o.z,O[Y+le+3]=0),x===!0&&(o.fromBufferAttribute(oe,ae),O[Y+le+4]=o.x,O[Y+le+5]=o.y,O[Y+le+6]=o.z,O[Y+le+7]=0),M===!0&&(o.fromBufferAttribute(ie,ae),O[Y+le+8]=o.x,O[Y+le+9]=o.y,O[Y+le+10]=o.z,O[Y+le+11]=ie.itemSize===4?o.w:1)}}_={count:g,texture:H,size:new he(v,b)},r.set(h,_),h.addEventListener("dispose",D)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<d;x++){let M=g[x];M[0]=x,M[1]=f[x]}g.sort(dv);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(uv);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],C=M[0],T=M[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[C]&&h.setAttribute("morphTarget"+x,_[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function pv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ls=class extends an{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Fi,h!==Fi&&h!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fi&&(i=li),i===void 0&&h===di&&(i=Zn),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gd=new an,vd=new Ls(1,1);vd.compareFunction=ud;var xd=new Wo,_d=new Ul,yd=new jo,Ru=[],Cu=[],Pu=new Float32Array(16),Iu=new Float32Array(9),Lu=new Float32Array(4);function ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function _v(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Lu.set(i),n.uniformMatrix2fv(this.addr,!1,Lu),Lt(t,i)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),Lt(t,i)}}function Mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),Lt(t,i)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?vd:gd;t.setTexture2D(e||r,s)}function Iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_d,s)}function Lv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yd,s)}function Dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xd,s)}function Uv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return vv;case 35666:return xv;case 35674:return _v;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return wv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Nv(n,e){n.uniform1fv(this.addr,e)}function Ov(n,e){let t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function Fv(n,e){let t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function Bv(n,e){let t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function zv(n,e){let t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kv(n,e){let t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){let t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Wv(n,e){n.uniform3iv(this.addr,e)}function Xv(n,e){n.uniform4iv(this.addr,e)}function qv(n,e){n.uniform1uiv(this.addr,e)}function Yv(n,e){n.uniform2uiv(this.addr,e)}function $v(n,e){n.uniform3uiv(this.addr,e)}function jv(n,e){n.uniform4uiv(this.addr,e)}function Zv(n,e,t){let i=this.cache,s=e.length,r=ma(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gd,r[o])}function Jv(n,e,t){let i=this.cache,s=e.length,r=ma(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_d,r[o])}function Kv(n,e,t){let i=this.cache,s=e.length,r=ma(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yd,r[o])}function Qv(n,e,t){let i=this.cache,s=e.length,r=ma(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xd,r[o])}function ex(n){switch(n){case 5126:return Nv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return zv;case 35675:return kv;case 35676:return Hv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return $v;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Qv}}var Bl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}},zl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function Du(n,e){n.seq.push(e),n.map[e.id]=e}function tx(n,e,t){let i=n.name,s=i.length;for(Ml.lastIndex=0;;){let r=Ml.exec(i),o=Ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(t,c===void 0?new Bl(a,n,e):new zl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new kl(a),Du(t,u)),t=u}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tx(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Uu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var nx=37297,ix=0;function sx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function rx(n){let e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n),i;switch(e===t?i="":e===zo&&t===Bo?i="LinearDisplayP3ToLinearSRGB":e===Bo&&t===zo&&(i="LinearSRGBToLinearDisplayP3"),n){case Jn:case pa:return[i,"LinearTransferOETF"];case tt:case Sc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sx(n.getShaderSource(e),o)}else return s}function ox(n,e){let t=rx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ax(n,e){let t;switch(e){case gc:t="Linear";break;case vc:t="Reinhard";break;case xc:t="OptimizedCineon";break;case Yi:t="ACESFilmic";break;case _c:t="AgX";break;case _p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function hx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ux(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function Ou(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(dx,px)}var fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function px(n,e){let t=je[e];if(t===void 0){let i=fx.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hl(t)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(mx,gx)}function gx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function xx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function yx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case td:e="ENVMAP_BLENDING_MULTIPLY";break;case vp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bx(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=vx(t),c=xx(t),h=_x(t),u=yx(t),f=Mx(t),d=t.isWebGL2?"":lx(t),g=cx(t),_=hx(r),m=s.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),y.length>0&&(y+=`
`)):(p=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),y=[d,zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?je.tonemapping_pars_fragment:"",t.toneMapping!==hi?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=Hl(o),o=Ou(o,t),o=Fu(o,t),a=Hl(a),a=Ou(a,t),a=Fu(a,t),o=Bu(o),a=Bu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,C=x+y+a,T=Uu(s,s.VERTEX_SHADER,M),R=Uu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(H){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(R).trim(),Z=!0,oe=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,R);else{let ie=Nu(s,T,"vertex"),Y=Nu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+ie+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||N==="")&&(oe=!1);oe&&(H.diagnostics={runnable:Z,programLog:k,vertexShader:{log:D,prefix:p},fragmentShader:{log:N,prefix:y}})}s.deleteShader(T),s.deleteShader(R),v=new ws(s,m),b=ux(s,m)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,nx)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var Sx=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gl(e),t.set(e,i)),i}},Gl=class{constructor(e){this.id=Sx++,this.code=e,this.usedTimes=0}};function Ex(n,e,t,i,s,r,o){let a=new Xo,l=new Vl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,b,O,H,k){let D=H.fog,N=k.geometry,Z=v.isMeshStandardMaterial?H.environment:null,oe=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),ie=oe&&oe.mapping===fa?oe.image.height:null,Y=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=ae!==void 0?ae.length:0,ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let $,se,pe,Re;if(Y){let Kt=Dn[Y];$=Kt.vertexShader,se=Kt.fragmentShader}else $=v.vertexShader,se=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),Re=l.getFragmentShaderID(v);let we=n.getRenderTarget(),ee=k.isInstancedMesh===!0,ue=k.isBatchedMesh===!0,me=!!v.map,Le=!!v.matcap,X=!!oe,Ge=!!v.aoMap,_e=!!v.lightMap,Be=!!v.bumpMap,Te=!!v.normalMap,Qe=!!v.displacementMap,ze=!!v.emissiveMap,w=!!v.metalnessMap,E=!!v.roughnessMap,z=v.anisotropy>0,ce=v.clearcoat>0,I=v.iridescence>0,L=v.sheen>0,B=v.transmission>0,j=z&&!!v.anisotropyMap,de=ce&&!!v.clearcoatMap,xe=ce&&!!v.clearcoatNormalMap,Me=ce&&!!v.clearcoatRoughnessMap,re=I&&!!v.iridescenceMap,W=I&&!!v.iridescenceThicknessMap,q=L&&!!v.sheenColorMap,V=L&&!!v.sheenRoughnessMap,ne=!!v.specularMap,K=!!v.specularColorMap,Pe=!!v.specularIntensityMap,Ee=B&&!!v.transmissionMap,We=B&&!!v.thicknessMap,Ie=!!v.gradientMap,fe=!!v.alphaMap,U=v.alphaTest>0,be=!!v.alphaHash,Se=!!v.extensions,ke=!!N.attributes.uv1,Oe=!!N.attributes.uv2,ht=!!N.attributes.uv3,ut=hi;return v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(ut=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:se,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ue,instancing:ee,instancingColor:ee&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Jn,map:me,matcap:Le,envMap:X,envMapMode:X&&oe.mapping,envMapCubeUVHeight:ie,aoMap:Ge,lightMap:_e,bumpMap:Be,normalMap:Te,displacementMap:f&&Qe,emissiveMap:ze,normalMapObjectSpace:Te&&v.normalMapType===Pp,normalMapTangentSpace:Te&&v.normalMapType===bc,metalnessMap:w,roughnessMap:E,anisotropy:z,anisotropyMap:j,clearcoat:ce,clearcoatMap:de,clearcoatNormalMap:xe,clearcoatRoughnessMap:Me,iridescence:I,iridescenceMap:re,iridescenceThicknessMap:W,sheen:L,sheenColorMap:q,sheenRoughnessMap:V,specularMap:ne,specularColorMap:K,specularIntensityMap:Pe,transmission:B,transmissionMap:Ee,thicknessMap:We,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===Es,alphaMap:fe,alphaTest:U,alphaHash:be,combine:v.combine,mapUv:me&&_(v.map.channel),aoMapUv:Ge&&_(v.aoMap.channel),lightMapUv:_e&&_(v.lightMap.channel),bumpMapUv:Be&&_(v.bumpMap.channel),normalMapUv:Te&&_(v.normalMap.channel),displacementMapUv:Qe&&_(v.displacementMap.channel),emissiveMapUv:ze&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:E&&_(v.roughnessMap.channel),anisotropyMapUv:j&&_(v.anisotropyMap.channel),clearcoatMapUv:de&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:W&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:q&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:V&&_(v.sheenRoughnessMap.channel),specularMapUv:ne&&_(v.specularMap.channel),specularColorMapUv:K&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:Ee&&_(v.transmissionMap.channel),thicknessMapUv:We&&_(v.thicknessMap.channel),alphaMapUv:fe&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Te||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Oe,vertexUv3s:ht,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(me||fe),fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,useLegacyLights:n._useLegacyLights,decodeVideoTexture:me&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wt,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Se&&v.extensions.derivatives===!0,extensionFragDepth:Se&&v.extensions.fragDepth===!0,extensionDrawBuffers:Se&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)b.push(O),b.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(y(b,v),x(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let b=g[v.type],O;if(b){let H=Dn[b];O=Zt.clone(H.uniforms)}else O=v.uniforms;return O}function C(v,b){let O;for(let H=0,k=c.length;H<k;H++){let D=c[H];if(D.cacheKey===b){O=D,++O.usedTimes;break}}return O===void 0&&(O=new bx(n,b,v,r),c.push(O)),O}function T(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:F}}function Tx(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function wx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||wx),i.length>1&&i.sort(f||ku),s.length>1&&s.sort(f||ku)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ax(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Hu,n.set(i,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Cx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Px=0;function Ix(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lx(n,e){let t=new Rx,i=Cx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new nt,a=new nt;function l(h,u){let f=0,d=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,C=0,T=0,R=0,F=0,v=0;h.sort(Ix);let b=u===!0?Math.PI:1;for(let H=0,k=h.length;H<k;H++){let D=h[H],N=D.color,Z=D.intensity,oe=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=N.r*Z*b,d+=N.g*Z*b,g+=N.b*Z*b;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);v++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){let ae=D.shadow,le=i.get(D);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,s.directionalShadow[_]=le,s.directionalShadowMap[_]=ie,s.directionalShadowMatrix[_]=D.shadow.matrix,M++}s.directional[_]=Y,_++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(N).multiplyScalar(Z*b),Y.distance=oe,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,s.spot[p]=Y;let ae=D.shadow;if(D.map&&(s.spotLightMap[R]=D.map,R++,ae.updateMatrices(D),D.castShadow&&F++),s.spotLightMatrix[p]=ae.matrix,D.castShadow){let le=i.get(D);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,s.spotShadow[p]=le,s.spotShadowMap[p]=ie,T++}p++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(N).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=Y,y++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*b),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let ae=D.shadow,le=i.get(D);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,le.shadowCameraNear=ae.camera.near,le.shadowCameraFar=ae.camera.far,s.pointShadow[m]=le,s.pointShadowMap[m]=ie,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=Y,m++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z*b),Y.groundColor.copy(D.groundColor).multiplyScalar(Z*b),s.hemi[x]=Y,x++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==M||O.numPointShadows!==C||O.numSpotShadows!==T||O.numSpotMaps!==R||O.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+R-F,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=v,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=M,O.numPointShadows=C,O.numSpotShadows=T,O.numSpotMaps=R,O.numLightProbes=v,s.version=Px++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(M.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let C=s.point[d];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Vu(n,e){let t=new Lx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dx(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Vu(n,e),t.set(r,[l])):o>=a.length?(l=new Vu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var br=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wl=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`;function Ox(n,e,t){let i=new Mr,s=new he,r=new he,o=new mt,a=new br({depthPacking:Mc}),l=new Wl,c={},h=t.maxTextureSize,u={[ui]:Ht,[Ht]:ui,[wt]:wt},f=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Ux,fragmentShader:Nx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ge(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let p=this.type;this.render=function(T,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Pt),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==Yn&&this.type===Yn,D=p===Yn&&this.type!==Yn;for(let N=0,Z=T.length;N<Z;N++){let oe=T[N],ie=oe.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let Y=ie.getFrameExtents();if(s.multiply(Y),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,ie.mapSize.y=r.y)),ie.map===null||k===!0||D===!0){let le=this.type!==Yn?{minFilter:Tt,magFilter:Tt}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Ft(s.x,s.y,le),ie.map.texture.name=oe.name+".shadowMap",ie.camera.updateProjectionMatrix()}n.setRenderTarget(ie.map),n.clear();let ae=ie.getViewportCount();for(let le=0;le<ae;le++){let ve=ie.getViewport(le);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),H.viewport(o),ie.updateMatrices(oe,le),i=ie.getFrustum(),M(R,F,ie.camera,oe,this.type)}ie.isPointLightShadow!==!0&&this.type===Yn&&y(ie,F),ie.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,O)};function y(T,R){let F=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ft(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,F,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,F,d,_,null)}function x(T,R,F,v){let b=null,O=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)b=O;else if(b=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=b.uuid,k=R.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let N=D[k];N===void 0&&(N=b.clone(),D[k]=N,R.addEventListener("dispose",C)),b=N}if(b.visible=R.visible,b.wireframe=R.wireframe,v===Yn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=n.properties.get(b);H.light=F}return b}function M(T,R,F,v,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Yn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let k=e.update(T),D=T.material;if(Array.isArray(D)){let N=k.groups;for(let Z=0,oe=N.length;Z<oe;Z++){let ie=N[Z],Y=D[ie.materialIndex];if(Y&&Y.visible){let ae=x(T,Y,v,b);T.onBeforeShadow(n,T,R,F,k,ae,ie),n.renderBufferDirect(F,null,k,ae,T,ie),T.onAfterShadow(n,T,R,F,k,ae,ie)}}}else if(D.visible){let N=x(T,D,v,b);T.onBeforeShadow(n,T,R,F,k,N,null),n.renderBufferDirect(F,null,k,N,T,null),T.onAfterShadow(n,T,R,F,k,N,null)}}let H=T.children;for(let k=0,D=H.length;k<D;k++)M(H[k],R,F,v,b)}function C(T){T.target.removeEventListener("dispose",C);for(let F in c){let v=c[F],b=T.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Fx(n,e,t){let i=t.isWebGL2;function s(){let U=!1,be=new mt,Se=null,ke=new mt(0,0,0,0);return{setMask:function(Oe){Se!==Oe&&!U&&(n.colorMask(Oe,Oe,Oe,Oe),Se=Oe)},setLocked:function(Oe){U=Oe},setClear:function(Oe,ht,ut,Ut,Kt){Kt===!0&&(Oe*=Ut,ht*=Ut,ut*=Ut),be.set(Oe,ht,ut,Ut),ke.equals(be)===!1&&(n.clearColor(Oe,ht,ut,Ut),ke.copy(be))},reset:function(){U=!1,Se=null,ke.set(-1,0,0,0)}}}function r(){let U=!1,be=null,Se=null,ke=null;return{setTest:function(Oe){Oe?ue(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Oe){be!==Oe&&!U&&(n.depthMask(Oe),be=Oe)},setFunc:function(Oe){if(Se!==Oe){switch(Oe){case hp:n.depthFunc(n.NEVER);break;case up:n.depthFunc(n.ALWAYS);break;case dp:n.depthFunc(n.LESS);break;case Uo:n.depthFunc(n.LEQUAL);break;case fp:n.depthFunc(n.EQUAL);break;case pp:n.depthFunc(n.GEQUAL);break;case mp:n.depthFunc(n.GREATER);break;case gp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Oe}},setLocked:function(Oe){U=Oe},setClear:function(Oe){ke!==Oe&&(n.clearDepth(Oe),ke=Oe)},reset:function(){U=!1,be=null,Se=null,ke=null}}}function o(){let U=!1,be=null,Se=null,ke=null,Oe=null,ht=null,ut=null,Ut=null,Kt=null;return{setTest:function(dt){U||(dt?ue(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(dt){be!==dt&&!U&&(n.stencilMask(dt),be=dt)},setFunc:function(dt,Qt,Ln){(Se!==dt||ke!==Qt||Oe!==Ln)&&(n.stencilFunc(dt,Qt,Ln),Se=dt,ke=Qt,Oe=Ln)},setOp:function(dt,Qt,Ln){(ht!==dt||ut!==Qt||Ut!==Ln)&&(n.stencilOp(dt,Qt,Ln),ht=dt,ut=Qt,Ut=Ln)},setLocked:function(dt){U=dt},setClear:function(dt){Kt!==dt&&(n.clearStencil(dt),Kt=dt)},reset:function(){U=!1,be=null,Se=null,ke=null,Oe=null,ht=null,ut=null,Ut=null,Kt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,C=null,T=null,R=null,F=null,v=new De(0,0,0),b=0,O=!1,H=null,k=null,D=null,N=null,Z=null,oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,Y=0,ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ie=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ie=Y>=2);let le=null,ve={},$=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),pe=new mt().fromArray($),Re=new mt().fromArray(se);function we(U,be,Se,ke){let Oe=new Uint8Array(4),ht=n.createTexture();n.bindTexture(U,ht),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<Se;ut++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(be+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return ht}let ee={};ee[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(n.DEPTH_TEST),l.setFunc(Uo),ze(!1),w(bh),ue(n.CULL_FACE),Te(Pt);function ue(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function me(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Le(U,be){return d[U]!==be?(n.bindFramebuffer(U,be),d[U]=be,i&&(U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function X(U,be){let Se=_,ke=!1;if(U)if(Se=g.get(be),Se===void 0&&(Se=[],g.set(be,Se)),U.isWebGLMultipleRenderTargets){let Oe=U.texture;if(Se.length!==Oe.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,ut=Oe.length;ht<ut;ht++)Se[ht]=n.COLOR_ATTACHMENT0+ht;Se.length=Oe.length,ke=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,ke=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Ge(U){return m!==U?(n.useProgram(U),m=U,!0):!1}let _e={[_n]:n.FUNC_ADD,[Kf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[Th]=n.MIN,_e[wh]=n.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(_e[Th]=U.MIN_EXT,_e[wh]=U.MAX_EXT)}let Be={[zs]:n.ZERO,[ep]:n.ONE,[tp]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[rp]:n.SRC_ALPHA_SATURATE,[da]:n.DST_COLOR,[ua]:n.DST_ALPHA,[np]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[sp]:n.ONE_MINUS_DST_COLOR,[ip]:n.ONE_MINUS_DST_ALPHA,[op]:n.CONSTANT_COLOR,[ap]:n.ONE_MINUS_CONSTANT_COLOR,[lp]:n.CONSTANT_ALPHA,[cp]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(U,be,Se,ke,Oe,ht,ut,Ut,Kt,dt){if(U===Pt){p===!0&&(me(n.BLEND),p=!1);return}if(p===!1&&(ue(n.BLEND),p=!0),U!==mc){if(U!==y||dt!==O){if((x!==_n||T!==_n)&&(n.blendEquation(n.FUNC_ADD),x=_n,T=_n),dt)switch(U){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.ONE,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,C=null,R=null,F=null,v.set(0,0,0),b=0,y=U,O=dt}return}Oe=Oe||be,ht=ht||Se,ut=ut||ke,(be!==x||Oe!==T)&&(n.blendEquationSeparate(_e[be],_e[Oe]),x=be,T=Oe),(Se!==M||ke!==C||ht!==R||ut!==F)&&(n.blendFuncSeparate(Be[Se],Be[ke],Be[ht],Be[ut]),M=Se,C=ke,R=ht,F=ut),(Ut.equals(v)===!1||Kt!==b)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Kt),v.copy(Ut),b=Kt),y=U,O=!1}function Qe(U,be){U.side===wt?me(n.CULL_FACE):ue(n.CULL_FACE);let Se=U.side===Ht;be&&(Se=!Se),ze(Se),U.blending===Es&&U.transparent===!1?Te(Pt):Te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let ke=U.stencilWrite;c.setTest(ke),ke&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){H!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),H=U)}function w(U){U!==Zf?(ue(n.CULL_FACE),U!==k&&(U===bh?n.cullFace(n.BACK):U===Jf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),k=U}function E(U){U!==D&&(ie&&n.lineWidth(U),D=U)}function z(U,be,Se){U?(ue(n.POLYGON_OFFSET_FILL),(N!==be||Z!==Se)&&(n.polygonOffset(be,Se),N=be,Z=Se)):me(n.POLYGON_OFFSET_FILL)}function ce(U){U?ue(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function I(U){U===void 0&&(U=n.TEXTURE0+oe-1),le!==U&&(n.activeTexture(U),le=U)}function L(U,be,Se){Se===void 0&&(le===null?Se=n.TEXTURE0+oe-1:Se=le);let ke=ve[Se];ke===void 0&&(ke={type:void 0,texture:void 0},ve[Se]=ke),(ke.type!==U||ke.texture!==be)&&(le!==Se&&(n.activeTexture(Se),le=Se),n.bindTexture(U,be||ee[U]),ke.type=U,ke.texture=be)}function B(){let U=ve[le];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){pe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function Ee(U){Re.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Re.copy(U))}function We(U,be){let Se=u.get(be);Se===void 0&&(Se=new WeakMap,u.set(be,Se));let ke=Se.get(U);ke===void 0&&(ke=n.getUniformBlockIndex(be,U.name),Se.set(U,ke))}function Ie(U,be){let ke=u.get(be).get(U);h.get(be)!==ke&&(n.uniformBlockBinding(be,ke,U.__bindingPointIndex),h.set(be,ke))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},le=null,ve={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,C=null,T=null,R=null,F=null,v=new De(0,0,0),b=0,O=!1,H=null,k=null,D=null,N=null,Z=null,pe.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:me,bindFramebuffer:Le,drawBuffers:X,useProgram:Ge,setBlending:Te,setMaterial:Qe,setFlipSided:ze,setCullFace:w,setLineWidth:E,setPolygonOffset:z,setScissorTest:ce,activeTexture:I,bindTexture:L,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:de,texImage2D:ne,texImage3D:K,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:q,texStorage3D:V,texSubImage2D:xe,texSubImage3D:Me,compressedTexSubImage2D:re,compressedTexSubImage3D:W,scissor:Pe,viewport:Ee,reset:fe}}function Bx(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return d?new OffscreenCanvas(w,E):yr("canvas")}function _(w,E,z,ce){let I=1;if((w.width>ce||w.height>ce)&&(I=ce/Math.max(w.width,w.height)),I<1||E===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let L=E?Ho:Math.floor,B=L(I*w.width),j=L(I*w.height);u===void 0&&(u=g(B,j));let de=z?g(B,j):u;return de.width=B,de.height=j,de.getContext("2d").drawImage(w,0,0,B,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+B+"x"+j+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Ll(w.width)&&Ll(w.height)}function p(w){return a?!1:w.wrapS!==An||w.wrapT!==An||w.minFilter!==Tt&&w.minFilter!==xn}function y(w,E){return w.generateMipmaps&&E&&w.minFilter!==Tt&&w.minFilter!==xn}function x(w){n.generateMipmap(w)}function M(w,E,z,ce,I=!1){if(a===!1)return E;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let L=E;if(E===n.RED&&(z===n.FLOAT&&(L=n.R32F),z===n.HALF_FLOAT&&(L=n.R16F),z===n.UNSIGNED_BYTE&&(L=n.R8)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(L=n.R8UI),z===n.UNSIGNED_SHORT&&(L=n.R16UI),z===n.UNSIGNED_INT&&(L=n.R32UI),z===n.BYTE&&(L=n.R8I),z===n.SHORT&&(L=n.R16I),z===n.INT&&(L=n.R32I)),E===n.RG&&(z===n.FLOAT&&(L=n.RG32F),z===n.HALF_FLOAT&&(L=n.RG16F),z===n.UNSIGNED_BYTE&&(L=n.RG8)),E===n.RGBA){let B=I?Fo:it.getTransfer(ce);z===n.FLOAT&&(L=n.RGBA32F),z===n.HALF_FLOAT&&(L=n.RGBA16F),z===n.UNSIGNED_BYTE&&(L=B===lt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function C(w,E,z){return y(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function T(w){return w===Tt||w===Ah||w===Ya?n.NEAREST:n.LINEAR}function R(w){let E=w.target;E.removeEventListener("dispose",R),v(E),E.isVideoTexture&&h.delete(E)}function F(w){let E=w.target;E.removeEventListener("dispose",F),O(E)}function v(w){let E=i.get(w);if(E.__webglInit===void 0)return;let z=w.source,ce=f.get(z);if(ce){let I=ce[E.__cacheKey];I.usedTimes--,I.usedTimes===0&&b(w),Object.keys(ce).length===0&&f.delete(z)}i.remove(w)}function b(w){let E=i.get(w);n.deleteTexture(E.__webglTexture);let z=w.source,ce=f.get(z);delete ce[E.__cacheKey],o.memory.textures--}function O(w){let E=w.texture,z=i.get(w),ce=i.get(E);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(z.__webglFramebuffer[I]))for(let L=0;L<z.__webglFramebuffer[I].length;L++)n.deleteFramebuffer(z.__webglFramebuffer[I][L]);else n.deleteFramebuffer(z.__webglFramebuffer[I]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[I])}else{if(Array.isArray(z.__webglFramebuffer))for(let I=0;I<z.__webglFramebuffer.length;I++)n.deleteFramebuffer(z.__webglFramebuffer[I]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let I=0;I<z.__webglColorRenderbuffer.length;I++)z.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[I]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let I=0,L=E.length;I<L;I++){let B=i.get(E[I]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(E[I])}i.remove(E),i.remove(w)}let H=0;function k(){H=0}function D(){let w=H;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),H+=1,w}function N(w){let E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Z(w,E){let z=i.get(w);if(w.isVideoTexture&&Qe(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let ce=w.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(z,w,E);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function oe(w,E){let z=i.get(w);if(w.version>0&&z.__version!==w.version){pe(z,w,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function ie(w,E){let z=i.get(w);if(w.version>0&&z.__version!==w.version){pe(z,w,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function Y(w,E){let z=i.get(w);if(w.version>0&&z.__version!==w.version){Re(z,w,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}let ae={[jt]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[zi]:n.MIRRORED_REPEAT},le={[Tt]:n.NEAREST,[Ah]:n.NEAREST_MIPMAP_NEAREST,[Ya]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[yp]:n.LINEAR_MIPMAP_NEAREST,[xr]:n.LINEAR_MIPMAP_LINEAR},ve={[Ip]:n.NEVER,[Fp]:n.ALWAYS,[Lp]:n.LESS,[ud]:n.LEQUAL,[Dp]:n.EQUAL,[Op]:n.GEQUAL,[Up]:n.GREATER,[Np]:n.NOTEQUAL};function $(w,E,z){if(z?(n.texParameteri(w,n.TEXTURE_WRAP_S,ae[E.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ae[E.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ae[E.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,le[E.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,le[E.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==An||E.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,T(E.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Tt&&E.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ce=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Tt||E.minFilter!==Ya&&E.minFilter!==xr||E.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===on&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(w,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function se(w,E){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",R));let ce=E.source,I=f.get(ce);I===void 0&&(I={},f.set(ce,I));let L=N(E);if(L!==w.__cacheKey){I[L]===void 0&&(I[L]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),I[L].usedTimes++;let B=I[w.__cacheKey];B!==void 0&&(I[w.__cacheKey].usedTimes--,B.usedTimes===0&&b(E)),w.__cacheKey=L,w.__webglTexture=I[L].texture}return z}function pe(w,E,z){let ce=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=n.TEXTURE_3D);let I=se(w,E),L=E.source;t.bindTexture(ce,w.__webglTexture,n.TEXTURE0+z);let B=i.get(L);if(L.version!==B.__version||I===!0){t.activeTexture(n.TEXTURE0+z);let j=it.getPrimaries(it.workingColorSpace),de=E.colorSpace===yn?null:it.getPrimaries(E.colorSpace),xe=E.colorSpace===yn||j===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Me=p(E)&&m(E.image)===!1,re=_(E.image,Me,!1,s.maxTextureSize);re=ze(E,re);let W=m(re)||a,q=r.convert(E.format,E.colorSpace),V=r.convert(E.type),ne=M(E.internalFormat,q,V,E.colorSpace,E.isVideoTexture);$(ce,E,W);let K,Pe=E.mipmaps,Ee=a&&E.isVideoTexture!==!0&&ne!==cd,We=B.__version===void 0||I===!0,Ie=C(E,re,W);if(E.isDepthTexture)ne=n.DEPTH_COMPONENT,a?E.type===ci?ne=n.DEPTH_COMPONENT32F:E.type===li?ne=n.DEPTH_COMPONENT24:E.type===Zn?ne=n.DEPTH24_STENCIL8:ne=n.DEPTH_COMPONENT16:E.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Fi&&ne===n.DEPTH_COMPONENT&&E.type!==yc&&E.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=li,V=r.convert(E.type)),E.format===di&&ne===n.DEPTH_COMPONENT&&(ne=n.DEPTH_STENCIL,E.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zn,V=r.convert(E.type))),We&&(Ee?t.texStorage2D(n.TEXTURE_2D,1,ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ne,re.width,re.height,0,q,V,null));else if(E.isDataTexture)if(Pe.length>0&&W){Ee&&We&&t.texStorage2D(n.TEXTURE_2D,Ie,ne,Pe[0].width,Pe[0].height);for(let fe=0,U=Pe.length;fe<U;fe++)K=Pe[fe],Ee?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,K.width,K.height,q,V,K.data):t.texImage2D(n.TEXTURE_2D,fe,ne,K.width,K.height,0,q,V,K.data);E.generateMipmaps=!1}else Ee?(We&&t.texStorage2D(n.TEXTURE_2D,Ie,ne,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,q,V,re.data)):t.texImage2D(n.TEXTURE_2D,0,ne,re.width,re.height,0,q,V,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ee&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,ne,Pe[0].width,Pe[0].height,re.depth);for(let fe=0,U=Pe.length;fe<U;fe++)K=Pe[fe],E.format!==fn?q!==null?Ee?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,K.width,K.height,re.depth,q,K.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,ne,K.width,K.height,re.depth,0,K.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,K.width,K.height,re.depth,q,V,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,ne,K.width,K.height,re.depth,0,q,V,K.data)}else{Ee&&We&&t.texStorage2D(n.TEXTURE_2D,Ie,ne,Pe[0].width,Pe[0].height);for(let fe=0,U=Pe.length;fe<U;fe++)K=Pe[fe],E.format!==fn?q!==null?Ee?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,K.width,K.height,q,K.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,ne,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,K.width,K.height,q,V,K.data):t.texImage2D(n.TEXTURE_2D,fe,ne,K.width,K.height,0,q,V,K.data)}else if(E.isDataArrayTexture)Ee?(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,ne,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,q,V,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,re.width,re.height,re.depth,0,q,V,re.data);else if(E.isData3DTexture)Ee?(We&&t.texStorage3D(n.TEXTURE_3D,Ie,ne,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,q,V,re.data)):t.texImage3D(n.TEXTURE_3D,0,ne,re.width,re.height,re.depth,0,q,V,re.data);else if(E.isFramebufferTexture){if(We)if(Ee)t.texStorage2D(n.TEXTURE_2D,Ie,ne,re.width,re.height);else{let fe=re.width,U=re.height;for(let be=0;be<Ie;be++)t.texImage2D(n.TEXTURE_2D,be,ne,fe,U,0,q,V,null),fe>>=1,U>>=1}}else if(Pe.length>0&&W){Ee&&We&&t.texStorage2D(n.TEXTURE_2D,Ie,ne,Pe[0].width,Pe[0].height);for(let fe=0,U=Pe.length;fe<U;fe++)K=Pe[fe],Ee?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,q,V,K):t.texImage2D(n.TEXTURE_2D,fe,ne,q,V,K);E.generateMipmaps=!1}else Ee?(We&&t.texStorage2D(n.TEXTURE_2D,Ie,ne,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,q,V,re)):t.texImage2D(n.TEXTURE_2D,0,ne,q,V,re);y(E,W)&&x(ce),B.__version=L.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Re(w,E,z){if(E.image.length!==6)return;let ce=se(w,E),I=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let L=i.get(I);if(I.version!==L.__version||ce===!0){t.activeTexture(n.TEXTURE0+z);let B=it.getPrimaries(it.workingColorSpace),j=E.colorSpace===yn?null:it.getPrimaries(E.colorSpace),de=E.colorSpace===yn||B===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let xe=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,re=[];for(let fe=0;fe<6;fe++)!xe&&!Me?re[fe]=_(E.image[fe],!1,!0,s.maxCubemapSize):re[fe]=Me?E.image[fe].image:E.image[fe],re[fe]=ze(E,re[fe]);let W=re[0],q=m(W)||a,V=r.convert(E.format,E.colorSpace),ne=r.convert(E.type),K=M(E.internalFormat,V,ne,E.colorSpace),Pe=a&&E.isVideoTexture!==!0,Ee=L.__version===void 0||ce===!0,We=C(E,W,q);$(n.TEXTURE_CUBE_MAP,E,q);let Ie;if(xe){Pe&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,We,K,W.width,W.height);for(let fe=0;fe<6;fe++){Ie=re[fe].mipmaps;for(let U=0;U<Ie.length;U++){let be=Ie[U];E.format!==fn?V!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,0,0,be.width,be.height,V,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,K,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,0,0,be.width,be.height,V,ne,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,K,be.width,be.height,0,V,ne,be.data)}}}else{Ie=E.mipmaps,Pe&&Ee&&(Ie.length>0&&We++,t.texStorage2D(n.TEXTURE_CUBE_MAP,We,K,re[0].width,re[0].height));for(let fe=0;fe<6;fe++)if(Me){Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,re[fe].width,re[fe].height,V,ne,re[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,K,re[fe].width,re[fe].height,0,V,ne,re[fe].data);for(let U=0;U<Ie.length;U++){let Se=Ie[U].image[fe].image;Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,0,0,Se.width,Se.height,V,ne,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,K,Se.width,Se.height,0,V,ne,Se.data)}}else{Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,V,ne,re[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,K,V,ne,re[fe]);for(let U=0;U<Ie.length;U++){let be=Ie[U];Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,0,0,V,ne,be.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,K,V,ne,be.image[fe])}}}y(E,q)&&x(n.TEXTURE_CUBE_MAP),L.__version=I.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function we(w,E,z,ce,I,L){let B=r.convert(z.format,z.colorSpace),j=r.convert(z.type),de=M(z.internalFormat,B,j,z.colorSpace);if(!i.get(E).__hasExternalTextures){let Me=Math.max(1,E.width>>L),re=Math.max(1,E.height>>L);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,L,de,Me,re,E.depth,0,B,j,null):t.texImage2D(I,L,de,Me,re,0,B,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Te(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,I,i.get(z).__webglTexture,0,Be(E)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,I,i.get(z).__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(w,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ce=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Te(E)){let I=E.depthTexture;I&&I.isDepthTexture&&(I.type===ci?ce=n.DEPTH_COMPONENT32F:I.type===li&&(ce=n.DEPTH_COMPONENT24));let L=Be(E);Te(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,ce,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,L,ce,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){let ce=Be(E);z&&Te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,E.width,E.height):Te(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let ce=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let I=0;I<ce.length;I++){let L=ce[I],B=r.convert(L.format,L.colorSpace),j=r.convert(L.type),de=M(L.internalFormat,B,j,L.colorSpace),xe=Be(E);z&&Te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,de,E.width,E.height):Te(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,de,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,de,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);let ce=i.get(E.depthTexture).__webglTexture,I=Be(E);if(E.depthTexture.format===Fi)Te(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(E.depthTexture.format===di)Te(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function me(w){let E=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,w)}else if(z){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]=n.createRenderbuffer(),ee(E.__webglDepthbuffer[ce],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),ee(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,E,z){let ce=i.get(w);E!==void 0&&we(ce.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&me(w)}function X(w){let E=w.texture,z=i.get(w),ce=i.get(E);w.addEventListener("dispose",F),w.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=E.version,o.memory.textures++);let I=w.isWebGLCubeRenderTarget===!0,L=w.isWebGLMultipleRenderTargets===!0,B=m(w)||a;if(I){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let de=0;de<E.mipmaps.length;de++)z.__webglFramebuffer[j][de]=n.createFramebuffer()}else z.__webglFramebuffer[j]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)z.__webglFramebuffer[j]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(L)if(s.drawBuffers){let j=w.texture;for(let de=0,xe=j.length;de<xe;de++){let Me=i.get(j[de]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Te(w)===!1){let j=L?E:[E];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<j.length;de++){let xe=j[de];z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[de]);let Me=r.convert(xe.format,xe.colorSpace),re=r.convert(xe.type),W=M(xe.internalFormat,Me,re,xe.colorSpace,w.isXRRenderTarget===!0),q=Be(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,W,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),$(n.TEXTURE_CUBE_MAP,E,B);for(let j=0;j<6;j++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)we(z.__webglFramebuffer[j][de],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de);else we(z.__webglFramebuffer[j],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);y(E,B)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){let j=w.texture;for(let de=0,xe=j.length;de<xe;de++){let Me=j[de],re=i.get(Me);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),$(n.TEXTURE_2D,Me,B),we(z.__webglFramebuffer,w,Me,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),y(Me,B)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?j=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,ce.__webglTexture),$(j,E,B),a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)we(z.__webglFramebuffer[de],w,E,n.COLOR_ATTACHMENT0,j,de);else we(z.__webglFramebuffer,w,E,n.COLOR_ATTACHMENT0,j,0);y(E,B)&&x(j),t.unbindTexture()}w.depthBuffer&&me(w)}function Ge(w){let E=m(w)||a,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0,I=z.length;ce<I;ce++){let L=z[ce];if(y(L,E)){let B=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,j=i.get(L).__webglTexture;t.bindTexture(B,j),x(B),t.unbindTexture()}}}function _e(w){if(a&&w.samples>0&&Te(w)===!1){let E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,ce=w.height,I=n.COLOR_BUFFER_BIT,L=[],B=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){L.push(n.COLOR_ATTACHMENT0+xe),w.depthBuffer&&L.push(B);let Me=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(Me===!1&&(w.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[xe]),Me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[B]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[B])),de){let re=i.get(E[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,z,ce,0,0,z,ce,I,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,j.__webglColorRenderbuffer[xe]);let Me=i.get(E[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function Be(w){return Math.min(s.maxSamples,w.samples)}function Te(w){let E=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qe(w){let E=o.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function ze(w,E){let z=w.colorSpace,ce=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Il||z!==Jn&&z!==yn&&(it.getTransfer(z)===lt?a===!1?e.has("EXT_sRGB")===!0&&ce===fn?(w.format=Il,w.minFilter=xn,w.generateMipmaps=!1):E=Vo.sRGBToLinear(E):(ce!==fn||I!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=oe,this.setTexture3D=ie,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Te}function zx(n,e,t){let i=t.isWebGL2;function s(r,o=yn){let a,l=it.getTransfer(o);if(r===Un)return n.UNSIGNED_BYTE;if(r===sd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Mp)return n.BYTE;if(r===bp)return n.SHORT;if(r===yc)return n.UNSIGNED_SHORT;if(r===id)return n.INT;if(r===li)return n.UNSIGNED_INT;if(r===ci)return n.FLOAT;if(r===on)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Sp)return n.ALPHA;if(r===fn)return n.RGBA;if(r===Ep)return n.LUMINANCE;if(r===Tp)return n.LUMINANCE_ALPHA;if(r===Fi)return n.DEPTH_COMPONENT;if(r===di)return n.DEPTH_STENCIL;if(r===Il)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wp)return n.RED;if(r===od)return n.RED_INTEGER;if(r===Ap)return n.RG;if(r===ad)return n.RG_INTEGER;if(r===ld)return n.RGBA_INTEGER;if(r===$a||r===ja||r===Za||r===Ja)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===Ph||r===Ih)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lh||r===Dh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lh)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Dh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uh||r===Nh||r===Oh||r===Fh||r===Bh||r===zh||r===kh||r===Hh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ka||r===$h||r===jh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ka)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rp||r===Zh||r===Jh||r===Kh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ka)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Xl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kx={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new st;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ql=class extends fi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,y=[],x=[],M=new he,C=null,T=new $t;T.layers.enable(1),T.viewport=new mt;let R=new $t;R.layers.enable(2),R.viewport=new mt;let F=[T,R],v=new Xl;v.layers.enable(1),v.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new pr,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new pr,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new pr,y[$]=se),se.getHandSpace()};function H($){let se=x.indexOf($.inputSource);if(se===-1)return;let pe=y[se];pe!==void 0&&(pe.update($.inputSource,$.frame,c||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",D);for(let $=0;$<y.length;$++){let se=x[$];se!==null&&(x[$]=null,y[$].disconnect(se))}b=null,O=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let se={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ft(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let se=null,pe=null,Re=null;_.depth&&(Re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=_.stencil?di:Fi,pe=_.stencil?Zn:li);let we={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Ft(f.textureWidth,f.textureHeight,{format:fn,type:Un,depthTexture:new Ls(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let ee=e.properties.get(p);ee.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D($){for(let se=0;se<$.removed.length;se++){let pe=$.removed[se],Re=x.indexOf(pe);Re>=0&&(x[Re]=null,y[Re].disconnect(pe))}for(let se=0;se<$.added.length;se++){let pe=$.added[se],Re=x.indexOf(pe);if(Re===-1){for(let ee=0;ee<y.length;ee++)if(ee>=x.length){x.push(pe),Re=ee;break}else if(x[ee]===null){x[ee]=pe,Re=ee;break}if(Re===-1)break}let we=y[Re];we&&we.connect(pe)}}let N=new P,Z=new P;function oe($,se,pe){N.setFromMatrixPosition(se.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);let Re=N.distanceTo(Z),we=se.projectionMatrix.elements,ee=pe.projectionMatrix.elements,ue=we[14]/(we[10]-1),me=we[14]/(we[10]+1),Le=(we[9]+1)/we[5],X=(we[9]-1)/we[5],Ge=(we[8]-1)/we[0],_e=(ee[8]+1)/ee[0],Be=ue*Ge,Te=ue*_e,Qe=Re/(-Ge+_e),ze=Qe*-Ge;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ze),$.translateZ(Qe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let w=ue+Qe,E=me+Qe,z=Be-ze,ce=Te+(Re-ze),I=Le*me/E*w,L=X*me/E*w;$.projectionMatrix.makePerspective(z,ce,I,L,w,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ie($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;v.near=R.near=T.near=$.near,v.far=R.far=T.far=$.far,(b!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,O=v.far);let se=$.parent,pe=v.cameras;ie(v,se);for(let Re=0;Re<pe.length;Re++)ie(pe[Re],se);pe.length===2?oe(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),Y($,v,se)};function Y($,se,pe){pe===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_r*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let ae=null;function le($,se){if(h=se.getViewerPose(c||o),g=se,h!==null){let pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Re=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,Re=!0);for(let we=0;we<pe.length;we++){let ee=pe[we],ue=null;if(d!==null)ue=d.getViewport(ee);else{let Le=u.getViewSubImage(f,ee);ue=Le.viewport,we===0&&(e.setRenderTargetTextures(p,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let me=F[we];me===void 0&&(me=new $t,me.layers.enable(we),me.viewport=new mt,F[we]=me),me.matrix.fromArray(ee.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ee.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ue.x,ue.y,ue.width,ue.height),we===0&&(v.matrix.copy(me.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Re===!0&&v.cameras.push(me)}}for(let pe=0;pe<y.length;pe++){let Re=x[pe],we=y[pe];Re!==null&&we!==void 0&&we.update(Re,se,c||o)}ae&&ae($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let ve=new md;ve.setAnimationLoop(le),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}};function Hx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vx(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let M=x.program;i.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(y,C);let T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let M=n.createBuffer(),C=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],M=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,R=M.length;T<R;T++){let F=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,b=F.length;v<b;v++){let O=F[v];if(d(O,T,v,C)===!0){let H=O.__offset,k=Array.isArray(O.value)?O.value:[O.value],D=0;for(let N=0;N<k.length;N++){let Z=k[N],oe=_(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,H+D,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,D),D+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,x,M,C){let T=y.value,R=x+"_"+M;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let F=C[R];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return C[R]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(y){let x=y.uniforms,M=0,C=16;for(let R=0,F=x.length;R<F;R++){let v=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,O=v.length;b<O;b++){let H=v[b],k=Array.isArray(H.value)?H.value:[H.value];for(let D=0,N=k.length;D<N;D++){let Z=k[D],oe=_(Z),ie=M%C;ie!==0&&C-ie<oe.boundary&&(M+=C-ie),H.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=oe.storage}}}let T=M%C;return T>0&&(M+=C-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Hi=class{constructor(e={}){let{canvas:t=Kp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,M=!1,C=0,T=0,R=null,F=-1,v=null,b=new mt,O=new mt,H=null,k=new De(0),D=0,N=t.width,Z=t.height,oe=1,ie=null,Y=null,ae=new mt(0,0,N,Z),le=new mt(0,0,N,Z),ve=!1,$=new Mr,se=!1,pe=!1,Re=null,we=new nt,ee=new he,ue=new P,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return R===null?oe:1}let X=i;function Ge(A,G){for(let Q=0;Q<A.length;Q++){let te=A[Q],J=t.getContext(te,G);if(J!==null)return J}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",be,!1),X===null){let G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),X=Ge(G,A),X===null)throw Ge(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Be,Te,Qe,ze,w,E,z,ce,I,L,B,j,de,xe,Me,re,W,q,V,ne,K,Pe,Ee;function We(){_e=new av(X),Be=new tv(X,_e,e),_e.init(Be),K=new zx(X,_e,Be),Te=new Fx(X,_e,Be),Qe=new hv(X),ze=new Tx,w=new Bx(X,_e,Te,ze,Be,K,Qe),E=new iv(x),z=new ov(x),ce=new xm(X,Be),Pe=new Q0(X,_e,ce,Be),I=new lv(X,ce,Qe,Pe),L=new pv(X,I,ce,Qe),q=new fv(X,Be,w),Me=new nv(ze),B=new Ex(x,E,z,_e,Be,Pe,Me),j=new Hx(x,ze),de=new Ax,xe=new Dx(_e,Be),W=new K0(x,E,z,Te,L,f,l),re=new Ox(x,L,Be),Ee=new Vx(X,Qe,Be,Te),V=new ev(X,_e,Qe,Be),ne=new cv(X,_e,Qe,Be),Qe.programs=B.programs,x.capabilities=Be,x.extensions=_e,x.properties=ze,x.renderLists=de,x.shadowMap=re,x.state=Te,x.info=Qe}We();let Ie=new ql(x,X);this.xr=Ie,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(N,Z,!1))},this.getSize=function(A){return A.set(N,Z)},this.setSize=function(A,G,Q=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,Z=G,t.width=Math.floor(A*oe),t.height=Math.floor(G*oe),Q===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(N*oe,Z*oe).floor()},this.setDrawingBufferSize=function(A,G,Q){N=A,Z=G,oe=Q,t.width=Math.floor(A*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,G,Q,te){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,G,Q,te),Te.viewport(b.copy(ae).multiplyScalar(oe).floor())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,G,Q,te){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,G,Q,te),Te.scissor(O.copy(le).multiplyScalar(oe).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){Te.setScissorTest(ve=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(A=!0,G=!0,Q=!0){let te=0;if(A){let J=!1;if(R!==null){let Ce=R.texture.format;J=Ce===ld||Ce===ad||Ce===od}if(J){let Ce=R.texture.type,Ne=Ce===Un||Ce===li||Ce===yc||Ce===Zn||Ce===sd||Ce===rd,Ve=W.getClearColor(),Xe=W.getClearAlpha(),Ze=Ve.r,qe=Ve.g,$e=Ve.b;Ne?(d[0]=Ze,d[1]=qe,d[2]=$e,d[3]=Xe,X.clearBufferuiv(X.COLOR,0,d)):(g[0]=Ze,g[1]=qe,g[2]=$e,g[3]=Xe,X.clearBufferiv(X.COLOR,0,g))}else te|=X.COLOR_BUFFER_BIT}G&&(te|=X.DEPTH_BUFFER_BIT),Q&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",be,!1),de.dispose(),xe.dispose(),ze.dispose(),E.dispose(),z.dispose(),L.dispose(),Pe.dispose(),Ee.dispose(),B.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Kt),Ie.removeEventListener("sessionend",dt),Re&&(Re.dispose(),Re=null),Qt.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Qe.autoReset,G=re.enabled,Q=re.autoUpdate,te=re.needsUpdate,J=re.type;We(),Qe.autoReset=A,re.enabled=G,re.autoUpdate=Q,re.needsUpdate=te,re.type=J}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Se(A){let G=A.target;G.removeEventListener("dispose",Se),ke(G)}function ke(A){Oe(A),ze.remove(A)}function Oe(A){let G=ze.get(A).programs;G!==void 0&&(G.forEach(function(Q){B.releaseProgram(Q)}),A.isShaderMaterial&&B.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,te,J,Ce){G===null&&(G=me);let Ne=J.isMesh&&J.matrixWorld.determinant()<0,Ve=qf(A,G,Q,te,J);Te.setMaterial(te,Ne);let Xe=Q.index,Ze=1;if(te.wireframe===!0){if(Xe=I.getWireframeAttribute(Q),Xe===void 0)return;Ze=2}let qe=Q.drawRange,$e=Q.attributes.position,yt=qe.start*Ze,hn=(qe.start+qe.count)*Ze;Ce!==null&&(yt=Math.max(yt,Ce.start*Ze),hn=Math.min(hn,(Ce.start+Ce.count)*Ze)),Xe!==null?(yt=Math.max(yt,0),hn=Math.min(hn,Xe.count)):$e!=null&&(yt=Math.max(yt,0),hn=Math.min(hn,$e.count));let Nt=hn-yt;if(Nt<0||Nt===1/0)return;Pe.setup(J,te,Ve,Q,Xe);let Hn,gt=V;if(Xe!==null&&(Hn=ce.get(Xe),gt=ne,gt.setIndex(Hn)),J.isMesh)te.wireframe===!0?(Te.setLineWidth(te.wireframeLinewidth*Le()),gt.setMode(X.LINES)):gt.setMode(X.TRIANGLES);else if(J.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),Te.setLineWidth(Je*Le()),J.isLineSegments?gt.setMode(X.LINES):J.isLineLoop?gt.setMode(X.LINE_LOOP):gt.setMode(X.LINE_STRIP)}else J.isPoints?gt.setMode(X.POINTS):J.isSprite&&gt.setMode(X.TRIANGLES);if(J.isBatchedMesh)gt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)gt.renderInstances(yt,Nt,J.count);else if(Q.isInstancedBufferGeometry){let Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ga=Math.min(Q.instanceCount,Je);gt.renderInstances(yt,Nt,Ga)}else gt.render(yt,Nt)};function ht(A,G,Q){A.transparent===!0&&A.side===wt&&A.forceSinglePass===!1?(A.side=Ht,A.needsUpdate=!0,so(A,G,Q),A.side=ui,A.needsUpdate=!0,so(A,G,Q),A.side=wt):so(A,G,Q)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),m=xe.get(Q),m.init(),y.push(m),Q.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),A!==Q&&A.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(x._useLegacyLights);let te=new Set;return A.traverse(function(J){let Ce=J.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){let Ve=Ce[Ne];ht(Ve,Q,J),te.add(Ve)}else ht(Ce,Q,J),te.add(Ce)}),y.pop(),m=null,te},this.compileAsync=function(A,G,Q=null){let te=this.compile(A,G,Q);return new Promise(J=>{function Ce(){if(te.forEach(function(Ne){ze.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){J(A);return}setTimeout(Ce,10)}_e.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ut=null;function Ut(A){ut&&ut(A)}function Kt(){Qt.stop()}function dt(){Qt.start()}let Qt=new md;Qt.setAnimationLoop(Ut),typeof self!="undefined"&&Qt.setContext(self),this.setAnimationLoop=function(A){ut=A,Ie.setAnimationLoop(A),A===null?Qt.stop():Qt.start()},Ie.addEventListener("sessionstart",Kt),Ie.addEventListener("sessionend",dt),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(G),G=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,G,R),m=xe.get(A,y.length),m.init(),y.push(m),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(we),pe=this.localClippingEnabled,se=Me.init(this.clippingPlanes,pe),_=de.get(A,p.length),_.init(),p.push(_),Ln(A,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ie,Y),this.info.render.frame++,se===!0&&Me.beginShadows();let Q=m.state.shadowsArray;if(re.render(Q,A,G),se===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(_,A),m.setupLights(x._useLegacyLights),G.isArrayCamera){let te=G.cameras;for(let J=0,Ce=te.length;J<Ce;J++){let Ne=te[J];gh(_,A,Ne,Ne.viewport)}}else gh(_,A,G);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,G),Pe.resetDefaultState(),F=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ln(A,G,Q,te){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){te&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);let Ne=L.update(A),Ve=A.material;Ve.visible&&_.push(A,Ne,Ve,Q,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){let Ne=L.update(A),Ve=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ue.copy(Ne.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){let Xe=Ne.groups;for(let Ze=0,qe=Xe.length;Ze<qe;Ze++){let $e=Xe[Ze],yt=Ve[$e.materialIndex];yt&&yt.visible&&_.push(A,Ne,yt,Q,ue.z,$e)}}else Ve.visible&&_.push(A,Ne,Ve,Q,ue.z,null)}}let Ce=A.children;for(let Ne=0,Ve=Ce.length;Ne<Ve;Ne++)Ln(Ce[Ne],G,Q,te)}function gh(A,G,Q,te){let J=A.opaque,Ce=A.transmissive,Ne=A.transparent;m.setupLightsView(Q),se===!0&&Me.setGlobalState(x.clippingPlanes,Q),Ce.length>0&&Xf(J,Ce,G,Q),te&&Te.viewport(b.copy(te)),J.length>0&&io(J,G,Q),Ce.length>0&&io(Ce,G,Q),Ne.length>0&&io(Ne,G,Q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Xf(A,G,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Ce=Be.isWebGL2;Re===null&&(Re=new Ft(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?on:Un,minFilter:xr,samples:Ce?4:0})),x.getDrawingBufferSize(ee),Ce?Re.setSize(ee.x,ee.y):Re.setSize(Ho(ee.x),Ho(ee.y));let Ne=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(k),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let Ve=x.toneMapping;x.toneMapping=hi,io(A,Q,te),w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re);let Xe=!1;for(let Ze=0,qe=G.length;Ze<qe;Ze++){let $e=G[Ze],yt=$e.object,hn=$e.geometry,Nt=$e.material,Hn=$e.group;if(Nt.side===wt&&yt.layers.test(te.layers)){let gt=Nt.side;Nt.side=Ht,Nt.needsUpdate=!0,vh(yt,Q,te,hn,Nt,Hn),Nt.side=gt,Nt.needsUpdate=!0,Xe=!0}}Xe===!0&&(w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re)),x.setRenderTarget(Ne),x.setClearColor(k,D),x.toneMapping=Ve}function io(A,G,Q){let te=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Ce=A.length;J<Ce;J++){let Ne=A[J],Ve=Ne.object,Xe=Ne.geometry,Ze=te===null?Ne.material:te,qe=Ne.group;Ve.layers.test(Q.layers)&&vh(Ve,G,Q,Xe,Ze,qe)}}function vh(A,G,Q,te,J,Ce){A.onBeforeRender(x,G,Q,te,J,Ce),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(x,G,Q,te,A,Ce),J.transparent===!0&&J.side===wt&&J.forceSinglePass===!1?(J.side=Ht,J.needsUpdate=!0,x.renderBufferDirect(Q,G,te,J,A,Ce),J.side=ui,J.needsUpdate=!0,x.renderBufferDirect(Q,G,te,J,A,Ce),J.side=wt):x.renderBufferDirect(Q,G,te,J,A,Ce),A.onAfterRender(x,G,Q,te,J,Ce)}function so(A,G,Q){G.isScene!==!0&&(G=me);let te=ze.get(A),J=m.state.lights,Ce=m.state.shadowsArray,Ne=J.state.version,Ve=B.getParameters(A,J.state,Ce,G,Q),Xe=B.getProgramCacheKey(Ve),Ze=te.programs;te.environment=A.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(A.isMeshStandardMaterial?z:E).get(A.envMap||te.environment),Ze===void 0&&(A.addEventListener("dispose",Se),Ze=new Map,te.programs=Ze);let qe=Ze.get(Xe);if(qe!==void 0){if(te.currentProgram===qe&&te.lightsStateVersion===Ne)return _h(A,Ve),qe}else Ve.uniforms=B.getUniforms(A),A.onBuild(Q,Ve,x),A.onBeforeCompile(Ve,x),qe=B.acquireProgram(Ve,Xe),Ze.set(Xe,qe),te.uniforms=Ve.uniforms;let $e=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Me.uniform),_h(A,Ve),te.needsLights=$f(A),te.lightsStateVersion=Ne,te.needsLights&&($e.ambientLightColor.value=J.state.ambient,$e.lightProbe.value=J.state.probe,$e.directionalLights.value=J.state.directional,$e.directionalLightShadows.value=J.state.directionalShadow,$e.spotLights.value=J.state.spot,$e.spotLightShadows.value=J.state.spotShadow,$e.rectAreaLights.value=J.state.rectArea,$e.ltc_1.value=J.state.rectAreaLTC1,$e.ltc_2.value=J.state.rectAreaLTC2,$e.pointLights.value=J.state.point,$e.pointLightShadows.value=J.state.pointShadow,$e.hemisphereLights.value=J.state.hemi,$e.directionalShadowMap.value=J.state.directionalShadowMap,$e.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$e.spotShadowMap.value=J.state.spotShadowMap,$e.spotLightMatrix.value=J.state.spotLightMatrix,$e.spotLightMap.value=J.state.spotLightMap,$e.pointShadowMap.value=J.state.pointShadowMap,$e.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=qe,te.uniformsList=null,qe}function xh(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=ws.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function _h(A,G){let Q=ze.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function qf(A,G,Q,te,J){G.isScene!==!0&&(G=me),w.resetTextureUnits();let Ce=G.fog,Ne=te.isMeshStandardMaterial?G.environment:null,Ve=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Jn,Xe=(te.isMeshStandardMaterial?z:E).get(te.envMap||Ne),Ze=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!Q.morphAttributes.position,yt=!!Q.morphAttributes.normal,hn=!!Q.morphAttributes.color,Nt=hi;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=x.toneMapping);let Hn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=Hn!==void 0?Hn.length:0,Je=ze.get(te),Ga=m.state.lights;if(se===!0&&(pe===!0||A!==v)){let gn=A===v&&te.id===F;Me.setState(te,A,gn)}let xt=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ga.state.version||Je.outputColorSpace!==Ve||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||Je.envMap!==Xe||te.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Me.numPlanes||Je.numIntersection!==Me.numIntersection)||Je.vertexAlphas!==Ze||Je.vertexTangents!==qe||Je.morphTargets!==$e||Je.morphNormals!==yt||Je.morphColors!==hn||Je.toneMapping!==Nt||Be.isWebGL2===!0&&Je.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,Je.__version=te.version);let Ci=Je.currentProgram;xt===!0&&(Ci=so(te,G,J));let yh=!1,ir=!1,Wa=!1,Xt=Ci.getUniforms(),Pi=Je.uniforms;if(Te.useProgram(Ci.program)&&(yh=!0,ir=!0,Wa=!0),te.id!==F&&(F=te.id,ir=!0),yh||v!==A){Xt.setValue(X,"projectionMatrix",A.projectionMatrix),Xt.setValue(X,"viewMatrix",A.matrixWorldInverse);let gn=Xt.map.cameraPosition;gn!==void 0&&gn.setValue(X,ue.setFromMatrixPosition(A.matrixWorld)),Be.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,ir=!0,Wa=!0)}if(J.isSkinnedMesh){Xt.setOptional(X,J,"bindMatrix"),Xt.setOptional(X,J,"bindMatrixInverse");let gn=J.skeleton;gn&&(Be.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Xt.setValue(X,"boneTexture",gn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Xt.setOptional(X,J,"batchingTexture"),Xt.setValue(X,"batchingTexture",J._matricesTexture,w));let Xa=Q.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&Be.isWebGL2===!0)&&q.update(J,Q,Ci),(ir||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,Xt.setValue(X,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Pi.envMap.value=Xe,Pi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ir&&(Xt.setValue(X,"toneMappingExposure",x.toneMappingExposure),Je.needsLights&&Yf(Pi,Wa),Ce&&te.fog===!0&&j.refreshFogUniforms(Pi,Ce),j.refreshMaterialUniforms(Pi,te,oe,Z,Re),ws.upload(X,xh(Je),Pi,w)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ws.upload(X,xh(Je),Pi,w),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Xt.setValue(X,"center",J.center),Xt.setValue(X,"modelViewMatrix",J.modelViewMatrix),Xt.setValue(X,"normalMatrix",J.normalMatrix),Xt.setValue(X,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let gn=te.uniformsGroups;for(let qa=0,jf=gn.length;qa<jf;qa++)if(Be.isWebGL2){let Mh=gn[qa];Ee.update(Mh,Ci),Ee.bind(Mh,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Yf(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function $f(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,G,Q){ze.get(A.texture).__webglTexture=G,ze.get(A.depthTexture).__webglTexture=Q;let te=ze.get(A);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){let Q=ze.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Q=0){R=A,C=G,T=Q;let te=!0,J=null,Ce=!1,Ne=!1;if(A){let Xe=ze.get(A);Xe.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(X.FRAMEBUFFER,null),te=!1):Xe.__webglFramebuffer===void 0?w.setupRenderTarget(A):Xe.__hasExternalTextures&&w.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);let Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ne=!0);let qe=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?J=qe[G][Q]:J=qe[G],Ce=!0):Be.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?J=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?J=qe[Q]:J=qe,b.copy(A.viewport),O.copy(A.scissor),H=A.scissorTest}else b.copy(ae).multiplyScalar(oe).floor(),O.copy(le).multiplyScalar(oe).floor(),H=ve;if(Te.bindFramebuffer(X.FRAMEBUFFER,J)&&Be.drawBuffers&&te&&Te.drawBuffers(A,J),Te.viewport(b),Te.scissor(O),Te.setScissorTest(H),Ce){let Xe=ze.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Xe.__webglTexture,Q)}else if(Ne){let Xe=ze.get(A.texture),Ze=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,Q||0,Ze)}F=-1},this.readRenderTargetPixels=function(A,G,Q,te,J,Ce,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){Te.bindFramebuffer(X.FRAMEBUFFER,Ve);try{let Xe=A.texture,Ze=Xe.format,qe=Xe.type;if(Ze!==fn&&K.convert(Ze)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=qe===on&&(_e.has("EXT_color_buffer_half_float")||Be.isWebGL2&&_e.has("EXT_color_buffer_float"));if(qe!==Un&&K.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ci&&(Be.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-te&&Q>=0&&Q<=A.height-J&&X.readPixels(G,Q,te,J,K.convert(Ze),K.convert(qe),Ce)}finally{let Xe=R!==null?ze.get(R).__webglFramebuffer:null;Te.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(A,G,Q=0){let te=Math.pow(2,-Q),J=Math.floor(G.image.width*te),Ce=Math.floor(G.image.height*te);w.setTexture2D(G,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,A.x,A.y,J,Ce),Te.unbindTexture()},this.copyTextureToTexture=function(A,G,Q,te=0){let J=G.image.width,Ce=G.image.height,Ne=K.convert(Q.format),Ve=K.convert(Q.type);w.setTexture2D(Q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,te,A.x,A.y,J,Ce,Ne,Ve,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,te,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Ne,G.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,te,A.x,A.y,Ne,Ve,G.image),te===0&&Q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Q,te,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ce=A.max.x-A.min.x+1,Ne=A.max.y-A.min.y+1,Ve=A.max.z-A.min.z+1,Xe=K.convert(te.format),Ze=K.convert(te.type),qe;if(te.isData3DTexture)w.setTexture3D(te,0),qe=X.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)w.setTexture2DArray(te,0),qe=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,te.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,te.unpackAlignment);let $e=X.getParameter(X.UNPACK_ROW_LENGTH),yt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),hn=X.getParameter(X.UNPACK_SKIP_PIXELS),Nt=X.getParameter(X.UNPACK_SKIP_ROWS),Hn=X.getParameter(X.UNPACK_SKIP_IMAGES),gt=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,A.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,A.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?X.texSubImage3D(qe,J,G.x,G.y,G.z,Ce,Ne,Ve,Xe,Ze,gt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(qe,J,G.x,G.y,G.z,Ce,Ne,Ve,Xe,gt.data)):X.texSubImage3D(qe,J,G.x,G.y,G.z,Ce,Ne,Ve,Xe,Ze,gt),X.pixelStorei(X.UNPACK_ROW_LENGTH,$e),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,hn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Nt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Hn),J===0&&te.generateMipmaps&&X.generateMipmap(qe),Te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Te.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Bi:hd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bi?tt:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yl=class extends Hi{};Yl.prototype.isWebGL1Renderer=!0;var Zo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gi=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ds=class extends an{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Tt,h=Tt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new nt,Gu=new nt,Ro=[],Wu=new Kn,Gx=new nt,lr=new ge,cr=new ki,Us=class extends ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),Wu.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),cr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Gu.multiplyMatrices(i,xs),lr.matrixWorld=Gu,lr.raycast(e,Ro);for(let o=0,a=Ro.length;o<a;o++){let l=Ro[o];l.instanceId=r,l.object=this,t.push(l)}Ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ln=class extends an{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new nt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new he,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends Er{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Co=new P,bl=new Ac,Sl=new Ac,El=new Ac,Vi=class extends bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),c=Co);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),bl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),El.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(bl.calc(l),Sl.calc(l),El.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Wx(n,e){let t=1-n;return t*t*e}function Xx(n,e){return 2*(1-n)*n*e}function qx(n,e){return n*n*e}function mr(n,e,t,i){return Wx(n,e)+Xx(n,t)+qx(n,i)}function Yx(n,e){let t=1-n;return t*t*t*e}function $x(n,e){let t=1-n;return 3*t*t*n*e}function jx(n,e){return 3*(1-n)*n*n*e}function Zx(n,e){return n*n*n*e}function gr(n,e,t,i,s){return Yx(n,e)+$x(n,t)+jx(n,i)+Zx(n,s)}var Jo=class extends bn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends bn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y),gr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends bn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends bn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends bn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(e,s.x,r.x,o.x),mr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends bn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(e,s.x,r.x,o.x),mr(e,s.y,r.y,o.y),mr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Xu(a,l.x,c.x,h.x,u.x),Xu(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Jl=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:Vi,CubicBezierCurve:Jo,CubicBezierCurve3:jl,EllipseCurve:Er,LineCurve:Ko,LineCurve3:Zl,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:ea,SplineCurve:ta}),Kl=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Jl[s.type]().fromJSON(s))}return this}},Tr=class extends Kl{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ko(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Qo(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Jo(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ta(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Er(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wr=class n extends Mt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,f=new he,d=new P,g=new P,_=new P,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=t;y++){let x=i+y*h*s,M=Math.sin(x),C=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*C,o.push(u.x,u.y,u.z),f.x=y/t,f.y=T/(e.length-1),a.push(f.x,f.y);let R=l[3*T+0]*M,F=l[3*T+1],v=l[3*T+0]*C;c.push(R,F,v)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let M=x+y*e.length,C=M,T=M+e.length,R=M+e.length+1,F=M+1;r.push(C,T,F),r.push(R,F,T)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},na=class n extends wr{constructor(e=1,t=1,i=4,s=8){let r=new Tr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}};var Qn=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function y(){let M=new P,C=new P,T=0,R=(t-e)/i;for(let F=0;F<=r;F++){let v=[],b=F/r,O=b*(t-e)+e;for(let H=0;H<=s;H++){let k=H/s,D=k*l+a,N=Math.sin(D),Z=Math.cos(D);C.x=O*N,C.y=-b*i+m,C.z=O*Z,u.push(C.x,C.y,C.z),M.set(N,R,Z).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-b),v.push(g++)}_.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){let b=_[v][F],O=_[v+1][F],H=_[v+1][F+1],k=_[v][F+1];h.push(b,O,k),h.push(O,H,k),T+=6}c.addGroup(p,T,0),p+=T}function x(M){let C=g,T=new he,R=new P,F=0,v=M===!0?e:t,b=M===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let O=g;for(let H=0;H<=s;H++){let D=H/s*l+a,N=Math.cos(D),Z=Math.sin(D);R.x=v*Z,R.y=m*b,R.z=v*N,u.push(R.x,R.y,R.z),f.push(0,b,0),T.x=N*.5+.5,T.y=Z*.5*b+.5,d.push(T.x,T.y),g++}for(let H=0;H<s;H++){let k=C+H,D=O+H;M===!0?h.push(D,D+1,k):h.push(D+1,D,k),F+=3}c.addGroup(p,F,M===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ql=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new P,M=new P,C=new P;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],M),d(t[T+2],C),l(x,M,C,y)}function l(y,x,M,C){let T=C+1,R=[];for(let F=0;F<=T;F++){R[F]=[];let v=y.clone().lerp(M,F/T),b=x.clone().lerp(M,F/T),O=T-F;for(let H=0;H<=O;H++)H===0&&F===T?R[F][H]=v:R[F][H]=v.clone().lerp(b,H/O)}for(let F=0;F<T;F++)for(let v=0;v<2*(T-F)-1;v++){let b=Math.floor(v/2);v%2===0?(f(R[F][b+1]),f(R[F+1][b]),f(R[F][b])):(f(R[F][b+1]),f(R[F+1][b+1]),f(R[F+1][b]))}}function c(y){let x=new P;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],C=o[y+4],T=Math.max(x,M,C),R=Math.min(x,M,C);T>.9&&R<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){let y=new P,x=new P,M=new P,C=new P,T=new he,R=new he,F=new he;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),T.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),F.set(o[b+4],o[b+5]),C.copy(y).add(x).add(M).divideScalar(3);let O=m(C);_(T,b+0,y,O),_(R,b+2,x,O),_(F,b+4,M,O)}}function _(y,x,M,C){C<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Ar=class extends Tr{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Tr().fromJSON(s))}return this}},Jx={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Md(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=n_(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Rr(r,o,t,a,l,d,0),o}};function Md(n,e,t,i,s){let r,o;if(s===f_(n,e,t,i)>0)for(r=e;r<t;r+=i)o=qu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=qu(r,n[r],n[r+1],o);return o&&ga(o,o.next)&&(Pr(o),o=o.next),o}function Gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ga(t,t.next)||vt(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&a_(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Qx(n,i,s,r):Kx(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Pr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=e_(Gi(n),e,t),Rr(n,e,t,i,s,r,2)):o===2&&t_(n,e,t,i,s,r):Rr(Gi(n),e,t,i,s,r,1);break}}}function Kx(n){let e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ss(s,a,r,l,o,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=ec(d,g,e,t,i),y=ec(_,m,e,t,i),x=n.prevZ,M=n.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ss(a,h,l,u,c,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ss(a,h,l,u,c,f,M.x,M.y)&&vt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ss(a,h,l,u,c,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ss(a,h,l,u,c,f,M.x,M.y)&&vt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function e_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!ga(s,r)&&bd(s,i,i.next,r)&&Cr(s,r)&&Cr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Pr(i),Pr(i.next),i=n=r),i=i.next}while(i!==n);return Gi(i)}function t_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let l=Sd(o,a);o=Gi(o,o.next),l=Gi(l,l.next),Rr(o,e,t,i,s,r,0),Rr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function n_(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Md(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(c_(c));for(s.sort(i_),r=0;r<s.length;r++)t=s_(s[r],t);return t}function i_(n,e){return n.x-e.x}function s_(n,e){let t=r_(n,e);if(!t)return e;let i=Sd(t,n);return Gi(i,i.next),Gi(t,t.next)}function r_(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ss(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Cr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&o_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function o_(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function a_(n,e,t,i){let s=n;do s.z===0&&(s.z=ec(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,l_(s)}function l_(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function ec(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function c_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ss(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function h_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!u_(n,e)&&(Cr(n,e)&&Cr(e,n)&&d_(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||ga(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ga(n,e){return n.x===e.x&&n.y===e.y}function bd(n,e,t,i){let s=Io(vt(n,e,t)),r=Io(vt(n,e,i)),o=Io(vt(t,i,n)),a=Io(vt(t,i,e));return!!(s!==r&&o!==a||s===0&&Po(n,t,e)||r===0&&Po(n,i,e)||o===0&&Po(t,n,i)||a===0&&Po(t,e,i))}function Po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function u_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cr(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function d_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sd(n,e){let t=new tc(n.i,n.x,n.y),i=new tc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qu(n,e,t,i){let s=new tc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var vr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Yu(e),$u(i,e);let o=e.length;t.forEach(Yu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$u(i,t[l]);let a=Jx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Yu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $u(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Wi=class n extends Ql{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ia=class n extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new P,g=new he;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let y=p+m,x=y,M=y+i+1,C=y+i+2,T=y+1;a.push(x,M,T),a.push(M,C,T)}}this.setIndex(a),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},sa=class n extends Mt{constructor(e=new Ar([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;vr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];vr.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=vr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],x=y[0]+u,M=y[1]+u,C=y[2]+u;i.push(x,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return p_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function p_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Bt=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],x=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let x=h[p][y+1],M=h[p][y],C=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(x,M,T),(p!==i-1||l<Math.PI)&&d.push(M,C,T)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Nn=class n extends Mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ns=class n extends Mt{constructor(e=new ea(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new he,h=new P,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),p()}function m(x){h=e.getPointAt(x/t,h);let M=o.normals[x],C=o.binormals[x];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,F=Math.sin(R),v=-Math.cos(R);l.x=v*M.x+F*C.x,l.y=v*M.y+F*C.y,l.z=v*M.z+F*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let M=1;M<=s;M++){let C=(s+1)*(x-1)+(M-1),T=(s+1)*x+(M-1),R=(s+1)*x+M,F=(s+1)*(x-1)+M;g.push(C,T,F),g.push(T,R,F)}}function y(){for(let x=0;x<=t;x++)for(let M=0;M<=s;M++)c.x=x/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Jl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ra=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oa=class extends He{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var aa=class extends pi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Lo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function m_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eu:r=e,a=2*t-i;break;case tu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eu:o=e,l=2*i-t;break;case tu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[c+C]+x*o[l+C]+M*o[u+C];return r}},ic=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},sc=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&m_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Oo;var Xi=class extends Rn{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=No;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Rn{};rc.prototype.ValueTypeName="color";var oc=class extends Rn{};oc.prototype.ValueTypeName="number";var ac=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ir=class extends Rn{InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.DefaultInterpolation=Oo;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Rn{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=No;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Rn{};lc.prototype.ValueTypeName="vector";var ju={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},cc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},g_=new cc,Lr=class{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var hc=class extends Lr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ju.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=yr("img");function l(){h(),ju.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var vi=class extends Lr{constructor(e){super(e)}load(e,t,i,s){let r=new an,o=new hc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Dr=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Fs=class extends Dr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new nt,Zu=new P,Ju=new P,la=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ku=new nt,hr=new P,wl=new P,uc=class extends la{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(hr),wl.copy(i.position),wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wl),i.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Ku.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku)}},ca=class extends Dr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dc=class extends la{constructor(){super(new mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ha=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Qu(){return(typeof performance=="undefined"?Date:performance).now()}var Rc="\\[\\]\\.:\\/",v_=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",x_="[^"+Rc.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",Cc),y_=/(WCOD+)?/.source.replace("WCOD",x_),M_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),b_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),S_=new RegExp("^"+__+y_+M_+b_+"$"),E_=["material","materials","bones","map"],fc=class{constructor(e,t,i){let s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=fc;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qy=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var et=(n,e,t,i)=>({q:n,c:e,a:t,exp:i}),Ed={maths:[et("Une cagette contient 8 mangues. Combien de mangues dans 5 cagettes ?",["30","35","40","45"],"40","5 \xD7 8 = 40."),et("Quel est le double de 17 ?",["27","34","37","32"],"34","17 \xD7 2 = 34."),et("Un sac de 25 mangues est partag\xE9 entre 5 enfants. Combien chacun re\xE7oit-il ?",["4","5","6","7"],"5","25 \xF7 5 = 5."),et("Combien font 7 \xD7 6 ?",["36","42","48","40"],"42","7 \xD7 6 = 42."),et("Combien font 100 \u2212 37 ?",["73","67","63","53"],"63","100 \u2212 37 = 63."),et("Quelle est la moiti\xE9 de 90 ?",["40","45","50","55"],"45","90 \xF7 2 = 45."),et("Combien font 12 + 29 ?",["39","41","43","51"],"41","12 + 29 = 41."),et("Combien font 9 \xD7 9 ?",["72","81","90","99"],"81","9 \xD7 9 = 81."),et("Combien font 144 \xF7 12 ?",["10","11","12","14"],"12","12 \xD7 12 = 144."),et("Quel est le p\xE9rim\xE8tre d\u2019un carr\xE9 de 6 m de c\xF4t\xE9 ?",["12 m","24 m","36 m","30 m"],"24 m","4 \xD7 6 = 24 m."),et("Trois cahiers \xE0 500 FC chacun co\xFBtent combien en tout ?",["1 000 FC","1 200 FC","1 500 FC","2 000 FC"],"1 500 FC","3 \xD7 500 = 1 500.")],francais:[et("Hier, nous ___ au march\xE9. (verbe aller)",["allons","sommes all\xE9s","irons","allerons"],"sommes all\xE9s","Au pass\xE9 compos\xE9 : nous sommes all\xE9s."),et("Quel est l\u2019antonyme de \xAB ancien \xBB ?",["vieux","nouveau","vieil","long"],"nouveau","Le contraire d\u2019\xAB ancien \xBB est \xAB nouveau \xBB."),et("Quel mot est un nom propre ?",["chien","Kinshasa","livre","maison"],"Kinshasa","Un nom propre d\xE9signe un lieu pr\xE9cis."),et("Quel est le pluriel de \xAB cheval \xBB ?",["chevals","chevaux","chevaus","chevales"],"chevaux","Les noms en -al font leur pluriel en -aux."),et("Quel est un synonyme de \xAB content \xBB ?",["triste","heureux","f\xE2ch\xE9","press\xE9"],"heureux","\xAB Content \xBB et \xAB heureux \xBB ont le m\xEAme sens."),et("Les enfants ___ dans la cour. (jouer, pr\xE9sent)",["jouent","joue","jouons","jouez"],"jouent","Avec \xAB ils / elles \xBB, le verbe se termine par -ent."),et("Quel mot est un verbe ?",["table","courir","joli","rapidement"],"courir","\xAB Courir \xBB exprime une action : c\u2019est un verbe."),et("Quel est le f\xE9minin de \xAB acteur \xBB ?",["acteuse","actrice","acteure","actresse"],"actrice","Acteur \u2192 actrice."),et("Ils ___ faim. (verbe avoir)",["ont","sont","avons","a"],"ont","Ils ont : verbe avoir \xE0 la 3e personne du pluriel.")],geo:[et("Quelle est la capitale de la RDC ?",["Lubumbashi","Goma","Kinshasa","Kisangani"],"Kinshasa","Kinshasa est la capitale de la RDC."),et("Combien de provinces compte la RDC aujourd\u2019hui ?",["11","15","26","30"],"26","Depuis 2015, la RDC compte 26 provinces."),et("Quel grand fleuve traverse Kinshasa ?",["le Nil","le Niger","le Congo","le Zamb\xE8ze"],"le Congo","Le fleuve Congo borde Kinshasa."),et("Quel oc\xE9an touche la c\xF4te de la RDC ?",["Indien","Atlantique","Pacifique","Arctique"],"Atlantique","La petite c\xF4te de la RDC donne sur l\u2019oc\xE9an Atlantique."),et("Quelle est la grande ville du Haut-Katanga ?",["Goma","Lubumbashi","Matadi","Bukavu"],"Lubumbashi","Lubumbashi est le chef-lieu du Haut-Katanga."),et("Quel lac borde la RDC \xE0 l\u2019est ?",["Tchad","Tanganyika","Titicaca","L\xE9man"],"Tanganyika","Le lac Tanganyika longe l\u2019est de la RDC."),et("Quel est le principal port maritime de la RDC ?",["Matadi","Kindu","Kikwit","Bunia"],"Matadi","Matadi est le grand port sur le fleuve Congo."),et("Quelle est la capitale du Congo-Brazzaville, pays voisin ?",["Brazzaville","Luanda","Kampala","Kigali"],"Brazzaville","Brazzaville est face \xE0 Kinshasa, de l\u2019autre c\xF4t\xE9 du fleuve.")],histoire:[et("En quelle ann\xE9e le Congo belge est-il devenu ind\xE9pendant ?",["1948","1960","1965","1975"],"1960","L\u2019ind\xE9pendance date de 1960."),et("Quel jour c\xE9l\xE8bre-t-on l\u2019ind\xE9pendance ?",["1er mai","30 juin","17 mai","4 d\xE9cembre"],"30 juin","La f\xEAte de l\u2019ind\xE9pendance a lieu le 30 juin."),et("Qui fut le premier Premier ministre du Congo ind\xE9pendant ?",["Patrice Lumumba","Mobutu","Laurent-D\xE9sir\xE9 Kabila","F\xE9lix Tshisekedi"],"Patrice Lumumba","Patrice Lumumba dirigea le premier gouvernement."),et("Qui fut le premier pr\xE9sident du Congo ind\xE9pendant ?",["Joseph Kasa-Vubu","Mobutu","Patrice Lumumba","Mo\xEFse Tshombe"],"Joseph Kasa-Vubu","Joseph Kasa-Vubu fut le premier chef de l\u2019\xC9tat."),et("Quel symbole figure en haut \xE0 gauche du drapeau de la RDC ?",["un soleil","une \xE9toile jaune","une croix","un lion"],"une \xE9toile jaune","Une \xE9toile jaune brille sur fond bleu ciel."),et("Quelle est la devise de la RDC ?",["Justice \u2013 Paix \u2013 Travail","Unit\xE9 \u2013 Force \u2013 Progr\xE8s","Libert\xE9 \u2013 \xC9galit\xE9 \u2013 Fraternit\xE9","Travail \u2013 Famille \u2013 Patrie"],"Justice \u2013 Paix \u2013 Travail","La devise nationale est \xAB Justice \u2013 Paix \u2013 Travail \xBB."),et("Quelle est la monnaie de la RDC ?",["le franc congolais","le dollar","le cedi","le naira"],"le franc congolais","La monnaie nationale est le franc congolais (FC).")]},Td={maths:"Calcul",francais:"Fran\xE7ais",geo:"G\xE9ographie",histoire:"Histoire"},Rt={lola:{sc:"ville",x:22.5,z:1.5,ry:-1.9,name:"Mama Lola",short:"Mama Lola",role:"Gardienne du portail",kind:"quiz",sujet:"maths",nb:3,look:{s:"f",h:.93,skin:"#6b4028",c:"#e67e22",c2:"#1f7a4d",k:"pagne",co:"gris",age:"aine"},intro:["Bonjour, mon enfant ! Le portail ne s\u2019ouvre que pour ceux qui savent compter.","R\xE9ponds \xE0 mes trois questions et je te laisse entrer."],outro:"Bravo ! Le portail est ouvert. Entre dans l\u2019\xE9cole et va voir la ma\xEEtresse."},ilunga:{sc:"classe",x:-3,z:-3.6,ry:0,name:"Professeure Ilunga",short:"la ma\xEEtresse",role:"Ma\xEEtresse",kind:"quiz",sujet:"francais",nb:3,needs:"lola",look:{s:"f",h:.98,skin:"#5a3623",c:"#8e44ad",k:"boubou",co:"tresses"},intro:["Bienvenue \xE0 LEXARIS ACAD\xC9MIE !","Aujourd\u2019hui, la le\xE7on porte sur la langue. Trois questions pour commencer."],outro:"Tr\xE8s bien ! Va t\u2019asseoir pr\xE8s de Junior, il t\u2019attend pour la g\xE9ographie."},junior:{sc:"classe",x:2.6,z:-.1,ry:Math.PI,name:"Junior",short:"Junior",role:"\xC9l\xE8ve",kind:"quiz",sujet:"geo",nb:2,needs:"ilunga",sit:!0,look:{s:"h",h:.74,skin:"#7a4a2e",c:"#16a085",k:"uniforme",co:"courtes"},intro:["Salut ! La g\xE9ographie, c\u2019est mon sujet pr\xE9f\xE9r\xE9."],outro:"Bien jou\xE9 ! Va voir le directeur, il veut te poser les derni\xE8res questions."},mavungu:{sc:"classe",x:5.6,z:-3.4,ry:0,name:"Directeur Mavungu",short:"le directeur",role:"Directeur",kind:"quiz",sujet:"histoire",nb:2,needs:"junior",look:{s:"h",h:1.04,skin:"#4f3020",c:"#2c3e50",k:"uniforme",co:"courtes",cravate:!0},intro:["Tu as bien travaill\xE9.","Deux derni\xE8res questions pour finir la le\xE7on."],outro:"Le\xE7on termin\xE9e ! Tu gagnes 20 pi\xE8ces et du tissu wax pour ta maison."},bea:{sc:"ville",x:3,z:-6.6,ry:0,name:"Maman B\xE9a",short:"Maman B\xE9a",role:"Marchande",kind:"shop",look:{s:"f",h:.97,skin:"#744630",c:"#c0392b",k:"pagne",co:"nattes"}},mama:{sc:"maison",x:1.4,z:-.8,ry:0,name:"Maman",short:"Maman",role:"\xC0 la maison",kind:"talk",look:{s:"f",h:.97,skin:"#6b4028",c:"#d35400",k:"pagne",co:"tresses"}}},_i={jer:{sc:"ville",x:11,z:3.2,ry:-1.2,name:"J\xE9r\xE9mie",look:{s:"h",h:.9,skin:"#6b4028",c:"#27ae60",k:"uniforme",co:"courtes"}},kasa:{sc:"ville",x:12.6,z:4.6,ry:-1.9,name:"Petit Kasa",look:{s:"f",h:.72,skin:"#8a5634",c:"#e0a526",k:"pagne",co:"nattes"}}},va=[["J\xE9r\xE9mie","La le\xE7on commence bient\xF4t, tu viens ?"],["Petit Kasa","Mama Lola garde le portail, elle pose des questions !"],["J\xE9r\xE9mie","R\xE9ponds bien et tu entreras dans la classe."],["Petit Kasa","Moi, je connais d\xE9j\xE0 toutes les mangues !"],["J\xE9r\xE9mie","Le manguier du village donne les meilleures mangues."]],Sn={natte:{n:"Natte tress\xE9e",p:10},table:{n:"Table en bois",p:25},lampe:{n:"Lampe",p:20},rideau:{n:"Rideau en wax",p:10,t:1},tableau:{n:"Tableau du village",p:30},plante:{n:"Plante verte",p:15}},Hs=["#c58b62","#b07a50","#9a6641","#7a4a2e","#63391f","#4f3020","#3d2416","#d9a67c"],xa=["#140d09","#2e1a10","#5a3319","#8a3a1c","#c79a3b","#7a7a7a","#d9d9d9","#7b2a6e"],Ur=["#120a06","#3b2212","#2f4a3a","#2a4a6e"],Nr=["#7a3a30","#a8483c","#c0566a","#4a2a24"],_a=["#1f7a4d","#2e86de","#c0392b","#e67e22","#8e44ad","#16a085","#e0a526","#2c3e50","#d6336c","#f1f1f1"],Or={courtes:{n:"Courts",own:!0},rase:{n:"Ras\xE9",own:!0},tresses:{n:"Tresses",own:!0},nattes:{n:"Nattes",own:!0},afro:{n:"Afro",own:!0},chignon:{n:"Chignon",unlock:"lola"},noeuds:{n:"N\u0153uds bantous",price:25},locks:{n:"Locks",price:30}},Fr={boucles:{n:"Boucles d\u2019oreilles",own:!0},lunettes:{n:"Lunettes",unlock:"ilunga"},casquette:{n:"Casquette",unlock:"junior"},foulard:{n:"Foulard",price:20},collier:{n:"Collier de perles",price:15},sac:{n:"Sac \xE0 dos",price:25}},yi={uniforme:{n:"Uniforme de l\u2019\xE9cole",own:!0,top:"plain",bottom:"auto",trouser:"#262a3a",collar:!0},polo:{n:"Polo et jean",price:35,top:"plain",bottom:"trousers",trouser:"#2f4a7a",collar:!0},sport:{n:"Tenue de sport",price:40,top:"plain",bottom:"trousers",trouser:"#233044",collar:!1,matchTrouser:!0},robe:{n:"Robe de f\xEAte",price:70,top:"plain",bottom:"skirt",belt:!0},pagne:{n:"Tenue wax",unlock:"mavungu",top:"wax",bottom:"auto",trouser:"#262a3a"},boubou:{n:"Boubou brod\xE9",price:60,top:"plain",bottom:"long",trim:!0}},Br={s:"f",skin:3,faceW:.5,jaw:.4,eyeS:.5,eyeC:1,brow:0,nose:.5,lips:.5,lipC:0,hair:"tresses",hairC:0,beard:0,acc:[],outfit:"uniforme",outfitC:0,blush:.3},ji={4:{outfits:["sport"]}};function Mi(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function pn(n,e,t,i,s,r){let o=document.createElement("canvas");o.width=n,o.height=e,t(o.getContext("2d"),n,e);let a=new ln(o);return a.wrapS=a.wrapT=jt,a.repeat.set(i||1,s||1),a.anisotropy=4,r!==!1&&(a.colorSpace=tt),a}var wd={},On=(n,e)=>wd[n]||(wd[n]=e()),Pc={};function Ad(n){Pc=n||{}}function Ic(n,e){if(!(Pc.tex||[]).includes(e))return n;let t=new Image;return t.onload=()=>{n.image=t,n.wrapS=n.wrapT=zi,n.colorSpace=tt,n.needsUpdate=!0},t.src="img/tex/"+e+".jpg",n}var Rd=()=>On("grass",()=>Ic(pn(512,512,(n,e,t)=>{let i=Mi(7);n.fillStyle="#5f9a3f",n.fillRect(0,0,e,t);for(let s=0;s<9e3;s++){let r=i()*e,o=i()*t,a=3+i()*7,l=i();n.strokeStyle=l<.33?"#4b8a33":l<.66?"#79b34b":"#3f7a2c",n.lineWidth=1,n.beginPath(),n.moveTo(r,o),n.lineTo(r+(i()-.5)*3,o-a),n.stroke()}for(let s=0;s<260;s++)n.fillStyle="rgba(170,140,80,.18)",n.beginPath(),n.arc(i()*e,i()*t,2+i()*9,0,7),n.fill()},215,215),"grass")),Cd=()=>On("dirt",()=>Ic(pn(256,256,(n,e,t)=>{let i=Mi(11);n.fillStyle="#b98b57",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i();n.fillStyle=r<.5?"rgba(120,80,40,.35)":"rgba(230,200,150,.3)",n.fillRect(i()*e,i()*t,1+i()*3,1+i()*3)}},8,3),"dirt")),Lc=n=>On("brick"+n,()=>Ic(pn(256,256,(e,t,i)=>{let s=Mi(5);e.fillStyle="#7a4a30",e.fillRect(0,0,t,i);let r=64,o=32;for(let a=0;a<i/o;a++)for(let l=-1;l<t/r+1;l++){let c=a%2*r/2,h=.85+s()*.3;e.fillStyle=`rgb(${n[0]*h|0},${n[1]*h|0},${n[2]*h|0})`,e.fillRect(l*r+c+2,a*o+2,r-4,o-4)}for(let a=0;a<900;a++)e.fillStyle="rgba(0,0,0,.08)",e.fillRect(s()*t,s()*i,2,2)},4,2),"brick")),Pd=n=>On("plaster"+n,()=>pn(256,256,(e,t,i)=>{let s=Mi(3);e.fillStyle=n,e.fillRect(0,0,t,i);for(let r=0;r<2200;r++)e.fillStyle=s()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.07)",e.fillRect(s()*t,s()*i,2+s()*4,2+s()*4)},3,2)),Dc=()=>On("earth",()=>pn(256,256,(n,e,t)=>{let i=Mi(9);n.fillStyle="#b98457",n.fillRect(0,0,e,t);for(let s=0;s<3e3;s++){let r=i();n.fillStyle=r<.5?"rgba(110,70,35,.3)":"rgba(220,180,130,.3)",n.fillRect(i()*e,i()*t,2+i()*5,2+i()*5)}},3,1)),Uc=()=>On("thatch",()=>pn(256,256,(n,e,t)=>{let i=Mi(21);n.fillStyle="#b99a55",n.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=i()*e,o=i()*t;n.strokeStyle=i()<.5?"#8d733a":"#d9bf7a",n.lineWidth=1+i(),n.beginPath(),n.moveTo(r,o),n.lineTo(r+(i()-.5)*6,o+14+i()*14),n.stroke()}},4,3)),Nc=()=>On("tin",()=>pn(256,256,(n,e,t)=>{n.fillStyle="#b13a2a",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"rgba(0,0,0,.28)"),s.addColorStop(.5,"rgba(255,255,255,.18)"),s.addColorStop(1,"rgba(0,0,0,.28)"),n.fillStyle=s,n.fillRect(i,0,16,t)}},6,3)),bi=n=>On("wood"+n,()=>pn(256,256,(e,t,i)=>{let s=Mi(13);e.fillStyle=n||"#9a6a3f",e.fillRect(0,0,t,i);for(let r=0;r<i;r+=32)e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,r,t,2);for(let r=0;r<500;r++){e.strokeStyle=s()<.5?"rgba(60,30,10,.18)":"rgba(255,220,170,.12)",e.beginPath();let o=s()*i;e.moveTo(0,o),e.lineTo(t,o+(s()-.5)*6),e.stroke()}},3,3)),Id=(n,e)=>pn(128,128,(t,i,s)=>{let r=Mi(17);t.fillStyle=n,t.fillRect(0,0,i,s);for(let o=0;o<900;o++)t.fillStyle=r()<.5?`rgba(0,0,0,${e})`:`rgba(255,255,255,${e})`,t.fillRect(r()*i,r()*s,3,3)},2,2);function Vs(n,e){return e=e||"#e0a526",pn(128,128,(t,i,s)=>{t.fillStyle=n||"#e0a526",t.fillRect(0,0,i,s);for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=o*32+16+r%2*16,l=r*32+16;t.fillStyle="#fff6df",t.beginPath(),t.arc(a,l,11,0,7),t.fill(),t.fillStyle=e,t.beginPath(),t.arc(a,l,7,0,7),t.fill(),t.fillStyle="#1b1b1b",t.beginPath(),t.arc(a,l,2.5,0,7),t.fill()}},2,2)}var Ld=()=>On("stripe",()=>pn(128,64,(n,e,t)=>{for(let i=0;i<8;i++)n.fillStyle=i%2?"#fff":"#c0392b",n.fillRect(i*16,0,16,t)},3,1));function zr(n,e,t,i,s,r){return pn(e,t,o=>{o.fillStyle=i,o.fillRect(0,0,e,t),o.strokeStyle=r||"#f1c40f",o.lineWidth=Math.max(4,t*.04),o.strokeRect(o.lineWidth,o.lineWidth,e-2*o.lineWidth,t-2*o.lineWidth),o.textAlign="center",o.textBaseline="middle",n.forEach((a,l)=>{o.fillStyle=a.c||s,o.font=(a.b===!1?"":"bold ")+a.s+"px Arial, sans-serif",o.fillText(a.t,e/2,t*(a.y||(l+1)/(n.length+1)),e*.92)})},1,1)}var Dd=()=>On("painting",()=>pn(256,192,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#58b4ea"),i.addColorStop(1,"#e3f6ff"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#ffe07a",n.beginPath(),n.arc(190,45,24,0,7),n.fill(),n.fillStyle="#4f9c3c",n.beginPath(),n.moveTo(0,t),n.quadraticCurveTo(80,80,170,130),n.quadraticCurveTo(220,100,e,t),n.fill(),n.fillStyle="#2e8b57",n.beginPath(),n.arc(60,120,18,0,7),n.fill(),n.fillStyle="#6b4226",n.fillRect(58,120,4,30)},1,1));function Ud(n){if(!(Pc.scenes||[]).includes(n))return null;let e=new vi().load("img/scenes/"+n+".jpg");return e.colorSpace=tt,e.anisotropy=4,e}var rt=(n,e,t,i)=>new He(Object.assign({color:n,roughness:e===void 0?.85:e,metalness:t||0},i||{})),ya=(n,e,t)=>{let i=new ge(new na(n,e,6,14),t);return i.castShadow=!0,i},ot=(n,e,t,i,s,r)=>{let o=new ge(new Bt(n,r||20,r?Math.round(r*.8):16),e);return o.scale.set(t||1,i||1,s||1),o.castShadow=!0,o},Si=(n,e,t)=>{let i=new st;return i.position.set(n,e,t),i},w_=(n,e,t)=>n+(e-n)*t,kr=(n,e,t,i,s)=>{let r=new Qn(n,e,t,s||14,3);r.translate(0,-t/2,0);let o=new ge(r,i);return o.castShadow=!0,o};function A_(n){let e=n?[[.14,0],[.16,.07],[.15,.15],[.118,.27],[.138,.38],[.152,.46],[.142,.54],[.09,.6],[.05,.64]]:[[.14,0],[.156,.07],[.15,.15],[.13,.27],[.15,.38],[.168,.47],[.16,.55],[.1,.61],[.055,.65]],t=new wr(e.map(i=>new he(i[0],i[1])),28);if(t.scale(n?1.12:1.24,1,.76),n){let i=t.attributes.position;for(let s=0;s<i.count;s++){let r=i.getY(s),o=i.getZ(s);if(o>0&&r>.32&&r<.5){let a=Math.exp(-Math.pow((r-.41)/.06,2));i.setZ(s,o*(1+.17*a)),i.setY(s,r+.004*a)}}}return t.computeVertexNormals(),t}var Zi=null;function Hr(){if(Zi)return Zi;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgb(128,128,255)",e.fillRect(0,0,128,128);for(let t=0;t<60;t++){let i=Math.random()*128,s=Math.random()*128,r=20+Math.random()*50,o=(Math.random()-.5)*.8,a=e.createLinearGradient(i,s,i+8,s);a.addColorStop(0,"rgba(90,128,255,.7)"),a.addColorStop(.5,"rgba(160,128,255,.7)"),a.addColorStop(1,"rgba(128,128,255,0)"),e.save(),e.translate(i,s),e.rotate(Math.PI/2+o),e.fillStyle=a,e.fillRect(0,0,r,6),e.restore()}return Zi=new ln(n),Zi.wrapS=Zi.wrapT=jt,Zi.repeat.set(3,3),Zi}function Ma(n,e,t){let i=new Image;i.onload=()=>{let s=document.createElement("canvas");s.width=s.height=128;let r=t[0]*i.width,o=t[1]*i.height,a=(t[2]-t[0])*i.width,l=(t[3]-t[1])*i.height;s.getContext("2d").drawImage(i,r,o,a,l,0,0,128,128);let c=new ln(s);c.colorSpace=tt,c.wrapS=c.wrapT=zi,c.repeat.set(2,2),c.anisotropy=4,n.map=c,n.color.set(16777215),n.needsUpdate=!0},i.src="img/chars/"+e+".webp"}var Fc={};function zc(n){Fc=n||{}}var R_=new vi,Oc={};function C_(n,e){let t=e||n;if(Oc[t])return Oc[t];let i=R_.load(e||"img/"+n+".jpg");return i.colorSpace=tt,i.anisotropy=4,Oc[t]=i}var Bc=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function P_(n){let e=n.hair||n.co||"courtes",t={s:n.s||"f",h:n.h||1,skin:typeof n.skin=="number"?Hs[n.skin]||Hs[3]:n.skin||Hs[3],faceW:n.faceW===void 0?.5:n.faceW,jaw:n.jaw===void 0?.4:n.jaw,eyeS:n.eyeS===void 0?.5:n.eyeS,eyeC:Ur[n.eyeC||1]||Ur[1],brow:n.brow||0,nose:n.nose===void 0?.5:n.nose,lips:n.lips===void 0?.5:n.lips,lipC:Nr[n.lipC||0]||Nr[0],blush:n.blush===void 0?.3:n.blush,hair:e,hairHex:n.hairHex||(typeof n.hairC=="number"?xa[n.hairC]:e==="gris"?"#d9d9d9":"#140d09"),beard:n.beard||0,acc:n.acc||[],outfit:n.outfit||(n.k==="pagne"?"pagne":n.k==="boubou"?"boubou":"uniforme"),c:n.cHex||(typeof n.outfitC=="number"?_a[n.outfitC]:n.c||"#1f7a4d"),c2:n.c2,cravate:!!n.cravate,faceKey:n.faceKey||null,faceUrl:n.faceUrl||null};return n.s!=="f"&&t.hair,t}function Nd(n,e,t,i,s){let r=new Bt(1,40,32,0,Math.PI*2,e||0,t||Math.PI),o=r.attributes.position,a=.092+.022*n.faceW,l=.122,c=.108,h=w_(.46,.14,n.jaw),u=r.attributes.uv,f=s?new Float32Array(o.count):null;for(let d=0;d<o.count;d++){let g=o.getX(d),_=o.getY(d),m=o.getZ(d);if(s){let p=s.rect,y=p.x+p.w/2,x=p.y+p.h*s.cy,M=y+g*p.w*.5*s.kx,C=x-(_-s.y0)*p.h*.5*s.ky;u.setXY(d,M,1-C);let T=Math.hypot(g/.98,(_-s.y0)/1.05);f[d]=Bc(.12,.5,m)*(1-Bc(.62,.95,T))}if(_<-.05){let p=Math.min(1,(-_-.05)/.95),y=1-h*Math.pow(p,1.35);g*=y,m*=1-h*.55*Math.pow(p,1.35),m>0&&(m*=1-.1*p)}m>0&&_>-.45&&_<.2&&(g*=1+.03*n.faceW),o.setXYZ(d,g*a*(i||1),_*l*(i||1),m*c*(i||1))}return s&&r.setAttribute("faceMask",new At(f,1)),r.computeVertexNormals(),r}function ba(n){let e=P_(n),t=yi[e.outfit]||yi.uniforme,i=e.s==="f",s=e.faceUrl?"u":e.faceKey,r=e.faceUrl&&Fc._user||Fc[e.faceKey||""],o=r?{rect:r,cy:.5,kx:1.12,ky:1.08,y0:-.2}:null;o&&r.skin&&(e.skin=r.skin);let a=new De(e.skin),l=new oa({color:a,roughness:.55,emissive:a.clone().multiplyScalar(.09),sheen:.5,sheenRoughness:.5,sheenColor:a.clone().multiplyScalar(1.5)}),c=rt(a.clone().multiplyScalar(.7),.6),h=rt(e.hairHex,.5,.08),u=rt(e.c,.85,0,{normalMap:Hr(),normalScale:new he(.5,.5)});n.fabric&&Ma(u,n.fabric.id,n.fabric.top);let f=rt("#1c1410",.7),d=t.top==="wax"?rt("#ffffff",.85,0,{map:Vs(e.c,e.c2||"#e0a526")}):null,g=d||u,_=t.bottom;_==="auto"&&(_=i?"skirt":"trousers");let m=t.matchTrouser?new De(e.c).multiplyScalar(.6):new De(t.trouser||"#262a3a"),p=rt(m,.9,0,{normalMap:Hr(),normalScale:new he(.55,.55)});n.fabric&&n.fabric.bottom&&Ma(p,n.fabric.id,n.fabric.bottom);let y=_==="long",x=_==="skirt",M=_==="trousers",C=new st,T=new st;C.add(T);let R=Si(0,.95,0);T.add(R);let F=ot(.16,M?p:y||x?g:p,1.22,.62,.86);F.position.y=.02,R.add(F);let v=Si(0,.06,0);R.add(v);let b=new ge(A_(i),g);if(b.castShadow=!0,v.add(b),t.collar){let I=new ge(new Nn(.072,.016,8,20),rt("#f2f2f2",.8));I.rotation.x=Math.PI/2,I.position.set(0,.605,.005),I.scale.set(1.25,1,.9),v.add(I)}if(t.belt){let I=new ge(new Nn(.17,.012,8,24),rt("#e0a526",.4,.7));I.rotation.x=Math.PI/2,I.position.set(0,.06,0),I.scale.set(1.1,.8,1),v.add(I)}if(e.cravate){let I=new ge(new bt(.05,.3,.015),rt("#a8301e",.7));I.position.set(0,.36,.125),v.add(I)}if(t.trim){let I=new ge(new Nn(.085,.012,8,20),rt("#e0a526",.4,.7));I.rotation.x=Math.PI/2,I.position.set(0,.55,.03),I.scale.set(1.4,1,1.1),v.add(I)}let O=Si(0,.6,0);v.add(O);let H=ya(.045,.06,l);H.position.y=.04,O.add(H);let k=Si(0,.1,0);k.scale.setScalar(1.12),O.add(k);let D=l;o&&(D=new He({color:a,map:C_(e.faceKey,e.faceUrl),roughness:.62,emissive:a.clone().multiplyScalar(.05)}),D.onBeforeCompile=I=>{I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
attribute float faceMask;
varying float vFM;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFM=faceMask;`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
varying float vFM;`).replace("#include <map_fragment>","vec4 txc=texture2D(map,vMapUv);diffuseColor.rgb=mix(diffuseColor.rgb,txc.rgb,vFM);")});let N=new ge(Nd(e,0,Math.PI,1,o),D);N.position.y=.12,N.castShadow=!0,k.add(N);let Z=.092+.022*e.faceW;[-1,1].forEach(I=>{let L=ot(.026,l,.5,1,.8);L.position.set(I*(Z+.004),.125,-.005),k.add(L)});let oe=k.children.length;e.blush>.05&&[-1,1].forEach(I=>{let L=ot(.03,rt("#d4607a",.9,0,{transparent:!0,opacity:.18*e.blush*2}),1,.8,.3);L.position.set(I*.05,.095,.088),k.add(L)});let ie=.0175*(.85+e.eyeS*.5),Y=rt("#f7f3ec",.35),ae=rt(e.eyeC,.25),le=rt("#050302",.2),ve=new nn({color:16777215}),$=[];[-1,1].forEach(I=>{let L=I*.04,B=.146,j=ot(ie,Y,1.25,.9,.65);j.position.set(L,B,.087),k.add(j);let de=ot(ie*.62,ae,1,1,.5);de.position.set(L,B,.087+ie*.5),k.add(de);let xe=ot(ie*.32,le,1,1,.4);xe.position.set(L,B,.087+ie*.62),k.add(xe);let Me=ot(ie*.16,ve,1,1,1,8);Me.position.set(L+I*.0035,B+.004,.087+ie*.8),k.add(Me),$.push(j,de,xe);let re=new ge(new Bt(ie*1.28,16,8,0,Math.PI*2,0,Math.PI*.46),c);if(re.scale.set(1.2,.9,.8),re.position.set(L,B+.001,.088),re.rotation.x=-.15,k.add(re),i){let ne=new ge(new bt(ie*2.5,.003,.006),h);ne.position.set(L,B+ie*1,.097),ne.rotation.z=-I*.1,k.add(ne)}let W=.036,q=e.brow===1?.011:.0055,V=new ge(new bt(W,q,.008),h);if(V.position.set(L,.176+(e.brow===2?.004:0),.092),V.rotation.z=-I*(e.brow===2?.22:.08),k.add(V),e.brow===2){let ne=V.clone();ne.position.x=L+I*.014,ne.position.y=.172,ne.rotation.z=I*.12,k.add(ne)}});let se=.8+e.nose*.7,pe=new ge(new bt(.016*se,.04,.012),l);pe.position.set(0,.128,.1),k.add(pe);let Re=ot(.0165*se,l,1,.9,1);Re.position.set(0,.103,.107),k.add(Re),[-1,1].forEach(I=>{let L=ot(.011*se,l,1,.9,.9);L.position.set(I*.015*se,.1,.1),k.add(L);let B=ot(.004,rt("#1a0f0a",.5),1,1,1,8);B.position.set(I*.008*se,.094,.113),k.add(B)});let we=.026+.012*e.lips,ee=.0045+.0045*e.lips,ue=rt(e.lipC,.3),me=ot(1,ue,we,ee,.009,14);me.position.set(0,.0745,.1),k.add(me);let Le=ot(1,ue,we*.92,ee*1.35,.01,14);Le.position.set(0,.0635,.099),k.add(Le);let X=new st;X.position.set(0,.069,.099),k.add(X);let Ge=new ge(new bt(we*1.7,.002,.004),rt("#2a1210",.5));if(X.add(Ge),o&&k.children.slice(oe).forEach(L=>k.remove(L)),e.beard>0&&!i){let I=Nd(e,Math.PI*.54,Math.PI*.46,1.035),L=rt(e.hairHex,.9,0,e.beard===1?{transparent:!0,opacity:.42}:{}),B=new ge(I,L);if(B.position.y=.12,k.add(B),e.beard===2){let j=ot(1,h,.026,.007,.01);j.position.set(0,.087,.104),k.add(j)}}let _e=e.hair,Be=(()=>{let I=document.createElement("canvas");I.width=64,I.height=128;let L=I.getContext("2d");L.fillStyle="rgb(128,128,255)",L.fillRect(0,0,64,128);for(let j=0;j<90;j++){let de=Math.random()*64,xe=L.createLinearGradient(de-2,0,de+2,0);xe.addColorStop(0,"rgba(80,128,255,.8)"),xe.addColorStop(.5,"rgba(180,128,255,.8)"),xe.addColorStop(1,"rgba(80,128,255,.0)"),L.fillStyle=xe,L.fillRect(de-2,0,4,128)}let B=new ln(I);return B.wrapS=B.wrapT=jt,B.repeat.set(6,1),B})();h.normalMap=Be,h.normalScale=new he(.8,.8),h.roughness=.55;let Te=(I,L)=>{let B=(.098+.02*e.faceW)*I,j=.128*I,de=.113*I,xe=new Bt(1,32,16,0,Math.PI*2,0,Math.PI*.4),Me=xe.attributes.position;for(let q=0;q<Me.count;q++){let V=Me.getX(q),ne=Me.getY(q),K=Me.getZ(q);if(K>.15&&ne<.82){let Pe=Bc(.15,.9,K)*(.82-ne)/.4;Me.setY(q,ne+.2*Pe*(1-.5*Math.abs(V)))}}xe.computeVertexNormals();let re=new ge(xe,h);re.scale.set(B,j,de),re.position.y=.125,re.rotation.x=L===void 0?-.08:L,re.castShadow=!0,k.add(re);let W=new ge(new Bt(1,32,18,Math.PI*.1,Math.PI*.8,0,Math.PI*.66),h);return W.scale.set(B*1.01,j*1.01,de*1.01),W.position.y=.125,W.rotation.y=Math.PI,W.castShadow=!0,k.add(W),re};if(_e==="courtes"||_e==="gris")Te(1.06);else if(_e==="rase")Te(1);else if(_e==="tresses"){Te(1.07);for(let I=0;I<11;I++){let L=-1.35+I*.27,B=ya(.013,.22,h);B.position.set(Math.sin(L)*(Z+.014),.03,-.015-Math.cos(L)*.035),B.rotation.z=Math.sin(L)*.22,k.add(B)}}else if(_e==="nattes")Te(1.07),[-1,1].forEach(I=>{for(let L=0;L<4;L++){let B=ot(.026,h,1,1.35,1);B.position.set(I*(Z+.012),.1-L*.05,-.01+L%2*.006),k.add(B)}});else if(_e==="afro"){let I=new ge(new Wi(.16,4),h),L=I.geometry.attributes.position;for(let B=0;B<L.count;B++){let j=1+(Math.sin(L.getX(B)*90)+Math.cos(L.getY(B)*80)*Math.sin(L.getZ(B)*70))*.035;L.setXYZ(B,L.getX(B)*j,L.getY(B)*j,L.getZ(B)*j)}I.geometry.computeVertexNormals(),I.scale.set(1,.96,.95),I.position.set(0,.225,-.05),I.castShadow=!0,k.add(I)}else if(_e==="chignon"){Te(1.06);let I=ot(.055,h,1,.95,1);I.position.set(0,.255,-.045),k.add(I)}else if(_e==="noeuds"){Te(1.04);for(let I=0;I<14;I++){let L=I/14*Math.PI*2,B=I<9?.075:.04,j=ot(.026,h,1,1,1,10);j.position.set(Math.sin(L)*B,.225+(I<9?0:.03),Math.cos(L)*B*.9-.02),k.add(j)}}else if(_e==="locks"){Te(1.08);for(let I=0;I<20;I++){let L=-2.5+I*.26;if(Math.abs(L)<.9)continue;let B=ya(.011,.32,h);B.position.set(Math.sin(L)*(Z+.018),0,-.02-Math.cos(L)*.05),B.rotation.z=Math.sin(L)*.12,k.add(B)}for(let I=0;I<5;I++){let L=ya(.011,.28,h);L.position.set((I-2)*.03,0,-.1),k.add(L)}}if(_e==="gris"){let I=ot(.05,h,1,.9,1);I.position.set(0,.24,-.06),k.add(I);let L=new ge(new Nn(.105,.03,10,24),rt("#1f7a4d",.8));L.rotation.x=Math.PI/2,L.position.y=.2,L.scale.set(1,1.05,1),k.add(L)}let Qe=e.acc||[];if((Qe.indexOf("boucles")>=0||i&&n.s==="f"&&n.h&&!n.acc)&&[-1,1].forEach(I=>{let L=ot(.009,rt("#e0a526",.3,.8),1,1,1,8);L.position.set(I*(Z+.008),.075,0),k.add(L);let B=ot(.007,rt("#e0a526",.3,.8),1,1.6,1,8);B.position.set(I*(Z+.008),.055,0),k.add(B)}),Qe.indexOf("lunettes")>=0){let I=rt("#1a1a22",.3,.5);[-1,1].forEach(B=>{let j=new ge(new Nn(.027,.0035,8,20),I);j.position.set(B*.04,.146,.1),k.add(j)});let L=new ge(new bt(.02,.003,.003),I);L.position.set(0,.148,.103),k.add(L),[-1,1].forEach(B=>{let j=new ge(new bt(.003,.003,.1),I);j.position.set(B*.068,.148,.05),k.add(j)})}if(Qe.indexOf("casquette")>=0){let I=rt("#c0392b",.7),L=new ge(new Bt(.12,22,12,0,Math.PI*2,0,Math.PI*.5),I);L.position.set(0,.21,0),L.scale.set(1,.95,1.05),L.castShadow=!0,k.add(L);let B=new ge(new Qn(.1,.1,.008,18,1,!1,-Math.PI/2,Math.PI),I);B.position.set(0,.215,.1),B.scale.set(1,1,.9),B.rotation.x=0,k.add(B)}if(Qe.indexOf("foulard")>=0){let I=rt("#e0a526",.8),L=new ge(new Nn(.108,.032,10,24),I);L.rotation.x=Math.PI/2,L.position.y=.215,L.scale.set(1,1.05,1),k.add(L);let B=ot(.04,I,1.3,.7,.7);B.position.set(0,.26,-.07),k.add(B)}if(Qe.indexOf("collier")>=0){let I=rt("#f4efe6",.3,.2);for(let L=0;L<16;L++){let B=L/16*Math.PI*2,j=ot(.011,I,1,1,1,8);j.position.set(Math.sin(B)*.095,.585,Math.cos(B)*.075+.03),v.add(j)}}if(Qe.indexOf("sac")>=0){let I=rt("#2e86de",.7),L=new ge(new bt(.28,.34,.12),I);L.position.set(0,.3,-.17),L.castShadow=!0,v.add(L);let B=new ge(new bt(.2,.14,.03),rt("#1f5fa8",.7));B.position.set(0,.22,-.24),v.add(B),[-1,1].forEach(j=>{let de=new ge(new bt(.03,.3,.02),rt("#1f5fa8",.7));de.position.set(j*.09,.38,.1),v.add(de)})}let ze=[];[-1,1].forEach(I=>{let L=Si(I*(i?.215:.24),.5,0);v.add(L);let B=y||t.sleeves==="long",j=ot(.058,g,1,1,1,14);L.add(j);let de=kr(.052,.042,.29,l);L.add(de);let xe=kr(.058,B?.047:.05,B?.29:.15,g);L.add(xe);let Me=Si(0,-.29,0);L.add(Me);let re=ot(.043,B?g:l,1,1,1,12);Me.add(re);let W=kr(.042,.031,.26,B?g:l);Me.add(W);let q=new st;q.position.y=-.27,Me.add(q);let V=ot(1,l,.036,.058,.02,12);V.position.y=-.05,q.add(V);let ne=ot(1,l,.034,.045,.016,10);ne.position.y=-.1,q.add(ne);let K=ot(1,l,.015,.035,.015,8);K.position.set(I*-.03,-.045,.012),K.rotation.z=I*.5,q.add(K),L.rotation.z=I*.07,ze.push({sh:L,el:Me})});let w=[];[-1,1].forEach(I=>{let L=Si(I*.09,0,0);R.add(L);let B=M?p:l,j=M?.012:0,de=kr(.088+j,.062+j,.43,B);L.add(de);let xe=Si(0,-.43,0);L.add(xe);let Me=ot(.063+j,B,1,1,1,12);xe.add(Me);let re=kr(.058+j,.036+j,.41,B);xe.add(re);let W=ot(1,B,.056+j,.12,.062+j,12);W.position.set(0,-.12,-.012),xe.add(W);let q=new st;q.position.y=-.43,xe.add(q);let V=ot(1,f,.05,.036,.115,12);V.position.set(0,-.012,.05),q.add(V);let ne=ot(1,f,.043,.04,.05,10);ne.position.set(0,0,-.03),q.add(ne),w.push({hj:L,kn:xe})});let E=null;if(x){let I=d?Vs(e.c,e.c2||"#e0a526"):null,L=I?new He({map:I,roughness:.85,side:wt,normalMap:Hr(),normalScale:new he(.5,.5)}):rt(e.c,.85,0,{side:wt,normalMap:Hr(),normalScale:new he(.5,.5)});n.fabric&&!I&&Ma(L,n.fabric.id,n.fabric.skirt||n.fabric.top);let B=new ge(new Qn(.19,t.belt?.34:.3,t.belt?.7:.62,24,1,!0),L);B.position.y=t.belt?-.37:-.34,B.castShadow=!0,R.add(B)}if(y){let I=new He({map:Id(e.c,.16),roughness:.8,side:wt,normalMap:Hr(),normalScale:new he(.6,.6)});n.fabric&&Ma(I,n.fabric.id,n.fabric.skirt||n.fabric.top);let L=new ge(new Qn(.2,.37,.98,28,1,!0),I);if(L.position.y=-.45,L.castShadow=!0,R.add(L),t.trim){let B=new ge(new Nn(.37,.012,6,28),rt("#e0a526",.4,.7));B.rotation.x=Math.PI/2,B.position.y=-.93,R.add(B)}w.forEach(B=>{B.kn.visible=!1}),E=[-1,1].map(B=>{let j=new ge(new bt(.09,.06,.2),f);return j.position.set(B*.09,-.94,.06),R.add(j),j})}let z={t:Math.random()*10};function ce(I,L){z.t+=I,L=L||{};let B=L.speed||0,j=z.t,de=Math.min(1,B/2.2),xe=B>3.2,Me=j*(xe?11:7.5),re=!!L.sit;if(re)T.position.y=-.46,w.forEach(K=>{K.hj.rotation.x=-Math.PI/2+.05,K.kn.rotation.x=Math.PI/2-.05}),E&&E.forEach(K=>{K.visible=!1});else{T.position.y=Math.abs(Math.sin(Me))*.035*de*(xe?1.6:1);let K=(xe?.95:.6)*de;w[0].hj.rotation.x=Math.sin(Me)*K,w[1].hj.rotation.x=-Math.sin(Me)*K,w[0].kn.rotation.x=Math.max(0,-Math.sin(Me))*K*1.3+.04,w[1].kn.rotation.x=Math.max(0,Math.sin(Me))*K*1.3+.04,E&&E.forEach(Pe=>{Pe.visible=!0})}b.scale.y=1+Math.sin(j*1.8)*.012,v.rotation.y=Math.sin(Me)*.12*de,v.rotation.x=.05*de+(xe?.12:0),R.rotation.y=-Math.sin(Me)*.08*de;let W=ze[0],q=ze[1],V=(xe?.9:.55)*de;W.sh.rotation.x=re?-.5:Math.sin(Me)*V,q.sh.rotation.x=re?-.5:-Math.sin(Me)*V,W.el.rotation.x=-.12-(re?.6:0)-Math.max(0,Math.sin(Me))*.5*de,q.el.rotation.x=-.12-(re?.6:0)-Math.max(0,-Math.sin(Me))*.5*de,W.sh.rotation.z=-.08,q.sh.rotation.z=.08,!B&&!re&&(W.sh.rotation.x=Math.sin(j*1.3)*.03,q.sh.rotation.x=-Math.sin(j*1.3)*.03),L.talk?(q.sh.rotation.x=-.9+Math.sin(j*5)*.25,q.sh.rotation.z=.35,q.el.rotation.x=-1+Math.sin(j*6.2)*.35,k.rotation.x=Math.sin(j*4)*.05,k.rotation.y=Math.sin(j*1.7)*.12,X.scale.y=1+Math.abs(Math.sin(j*12))*3,Le.position.y=.0635-Math.abs(Math.sin(j*12))*.006):(k.rotation.x=0,k.rotation.y=B?0:Math.sin(j*.7)*.18,X.scale.y=1,Le.position.y=.0635),L.wave&&(q.sh.rotation.x=0,q.sh.rotation.z=2.5+Math.sin(j*9)*.18,q.el.rotation.x=-.5+Math.sin(j*9)*.4),L.pose==="creator"&&(k.rotation.y=Math.sin(j*.5)*.15,q.sh.rotation.x=0,W.sh.rotation.x=0);let ne=Math.sin(j*.9)>.985?.1:1;$.forEach(K=>{K.scale.y=(K.userData.sy||(K.userData.sy=K.scale.y))*ne})}return C.scale.setScalar(e.h||1),Object.assign(C.userData,{update:ce,state:z,height:1.78*(e.h||1),headY:1.78}),C}var I_={lola:1,ilunga:1,bea:1,mama:1,kasa:1},Vr={lola:1.55,ilunga:1.68,junior:1.45,mavungu:1.78,bea:1.65,mama:1.68,jer:1.62,kasa:1.25,pf1:1.72,pf2:1.68,ph1:1.82,ph2:1.78},L_=new vi,kc={};function Od(n){if(kc[n])return kc[n];let e=L_.load("img/chars/"+n+".webp");return e.colorSpace=tt,e.anisotropy=4,e.generateMipmaps=!0,kc[n]=e}var Hc=null;function D_(){if(Hc)return Hc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Hc=new ln(n)}function Vc(n,e){e=e||{};let t=e.height||Vr[n]||1.7,i=new st,s=new ge(new ct(1,1),new nn({map:D_(),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,s.scale.set(t*.5,t*.28,1),i.add(s);let r=new st;i.add(r);let o=v=>new nn({map:v,transparent:!0,alphaTest:.45,side:wt,color:new De(e.tone||"#f4f1ec")}),a=o(Od(n)),l=e.walk?o(Od(e.walk)):null,c=14,h=36,u=new ct(1,1,c,h);u.translate(0,.5,0);let f=u.attributes.position,d=Float32Array.from(f.array),g=!!I_[n],_=!!e.walk,m=new ge(u,a);r.add(m);let p=(v,b,O)=>{let H=Math.min(1,Math.max(0,(O-v)/(b-v)));return H*H*(3-2*H)};function y(v,b,O,H,k){let D=Math.sin(v),N=Math.max(0,D)*.085*b,Z=Math.max(0,-D)*.085*b,oe=D*.08*b,ie=Math.sin(H*.5)*.006*k;for(let Y=0;Y<f.count;Y++){let ae=d[Y*3],le=d[Y*3+1],ve=ae,$=le,se=le;if(!g&&!_&&se<.54&&b>0){let pe=p(.52,.04,se),Re=p(.06,-.06,ae);$+=(N*Re+Z*(1-Re))*pe*pe}if(g&&b>0&&se<.62){let pe=p(.6,.05,se);ve+=Math.sin(v+se*5)*.018*b*pe,$+=Math.abs(D)*.01*b*pe}if(b>0&&se>.42&&se<.86){let pe=p(.2,.34,Math.abs(ae))*p(.42,.55,se)*p(.86,.74,se),Re=ae<0?1:-1;$+=($-.8)*oe*Re*pe*3}O&&se>.84&&($+=Math.sin(H*5)*.004*p(.84,.96,se)),ve+=ie*p(0,1,se),f.setXYZ(Y,ve,$,0)}f.needsUpdate=!0}y(0,0,!1,0,1);let x=.33,M=()=>{m.scale.set(t*x,t,1),s.scale.set(Math.max(.5,t*x*1.1),t*.2,1)};M();let C=a.map,T=setInterval(()=>{C.image&&C.image.width&&(x=C.image.width/C.image.height,M(),clearInterval(T))},60),R={t:Math.random()*10,ph:0};function F(v,b){b=b||{},R.t+=v;let O=R.t,H=b.speed||0;b.cam&&(r.rotation.y=Math.atan2(b.cam.x-i.position.x,b.cam.z-i.position.z)-i.rotation.y);let k=0,D=0,N=1,Z=1,oe=a;if(H>.1){R.ph+=v*(H>3.2?9:6.5);let ie=Math.sin(R.ph);k=Math.abs(ie)*.012*(H>3.2?1.5:1),D=ie*.035,l&&(oe=Math.floor(R.ph/Math.PI)%2?l:a,Z=1),b.lean&&(D+=b.lean*.05)}else R.ph=0,N=1+Math.sin(O*1.8)*.004,D=Math.sin(O*.9)*.008;b.talk&&(k+=Math.abs(Math.sin(O*6))*.012,D+=Math.sin(O*4)*.012),b.wave&&(k+=Math.abs(Math.sin(O*9))*.04,D+=Math.sin(O*9)*.07),m.material=oe,m.position.y=k,m.rotation.z=D,m.scale.y=t*N,y(R.ph,Math.min(1,H/2.2),!!b.talk,O,H>.1?0:1),m.scale.x=t*x*Z}return Object.assign(i.userData,{update:F,state:R,height:t,photo:!0}),i}var Gr=class n extends ge{constructor(){let e=n.SkyShader,t=new ft({name:e.name,uniforms:Zt.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Ht,depthWrite:!1});super(new bt(1,1,1),t),this.isSky=!0}};Gr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
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

		}`};var Ei={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U_=new mi(-1,1,1,-1,0,1),Gc=class extends Mt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},N_=new Gc,Fn=class{constructor(e){this._mesh=new ge(N_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Gs=class extends sn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zt.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Wr=class extends sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Sa=class extends sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ea=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gs(Ei),this.copyPass.material.blending=Pt,this.clock=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wr!==void 0&&(o instanceof Wr?i=!0:o instanceof Sa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ta=class extends sn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Xr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

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
		}`},qr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},wa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Fd(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=O_(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ds(s,e,e);return r.wrapS=jt,r.wrapT=jt,r.needsUpdate=!0,r}function O_(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Yr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Wc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Wc(n,e,t){let i=F_(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function F_(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new P(Math.cos(r),Math.sin(r),o))}return i}var Aa=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,_=t-d,m,p;g>_?(m=1,p=0):(m=0,p=1);let y=g-m+h,x=_-p+h,M=g-1+2*h,C=_-1+2*h,T=l&255,R=c&255,F=this.perm[T+this.perm[R]]%12,v=this.perm[T+m+this.perm[R+p]]%12,b=this.perm[T+1+this.perm[R+1]]%12,O=.5-g*g-_*_;O<0?i=0:(O*=O,i=O*O*this.dot(this.grad3[F],g,_));let H=.5-y*y-x*x;H<0?s=0:(H*=H,s=H*H*this.dot(this.grad3[v],y,x));let k=.5-M*M-C*C;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[b],M,C)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(i+c),d=1/6,g=(h+u+f)*d,_=h-g,m=u-g,p=f-g,y=e-_,x=t-m,M=i-p,C,T,R,F,v,b;y>=x?x>=M?(C=1,T=0,R=0,F=1,v=1,b=0):y>=M?(C=1,T=0,R=0,F=1,v=0,b=1):(C=0,T=0,R=1,F=1,v=0,b=1):x<M?(C=0,T=0,R=1,F=0,v=1,b=1):y<M?(C=0,T=1,R=0,F=0,v=1,b=1):(C=0,T=1,R=0,F=1,v=1,b=0);let O=y-C+d,H=x-T+d,k=M-R+d,D=y-F+2*d,N=x-v+2*d,Z=M-b+2*d,oe=y-1+3*d,ie=x-1+3*d,Y=M-1+3*d,ae=h&255,le=u&255,ve=f&255,$=this.perm[ae+this.perm[le+this.perm[ve]]]%12,se=this.perm[ae+C+this.perm[le+T+this.perm[ve+R]]]%12,pe=this.perm[ae+F+this.perm[le+v+this.perm[ve+b]]]%12,Re=this.perm[ae+1+this.perm[le+1+this.perm[ve+1]]]%12,we=.6-y*y-x*x-M*M;we<0?s=0:(we*=we,s=we*we*this.dot3(this.grad3[$],y,x,M));let ee=.6-O*O-H*H-k*k;ee<0?r=0:(ee*=ee,r=ee*ee*this.dot3(this.grad3[se],O,H,k));let ue=.6-D*D-N*N-Z*Z;ue<0?o=0:(ue*=ue,o=ue*ue*this.dot3(this.grad3[pe],D,N,Z));let me=.6-oe*oe-ie*ie-Y*Y;return me<0?a=0:(me*=me,a=me*me*this.dot3(this.grad3[Re],oe,ie,Y)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,_=(e+t+i+s)*l,m=Math.floor(e+_),p=Math.floor(t+_),y=Math.floor(i+_),x=Math.floor(s+_),M=(m+p+y+x)*c,C=m-M,T=p-M,R=y-M,F=x-M,v=e-C,b=t-T,O=i-R,H=s-F,k=v>b?32:0,D=v>O?16:0,N=b>O?8:0,Z=v>H?4:0,oe=b>H?2:0,ie=O>H?1:0,Y=k+D+N+Z+oe+ie,ae=o[Y][0]>=3?1:0,le=o[Y][1]>=3?1:0,ve=o[Y][2]>=3?1:0,$=o[Y][3]>=3?1:0,se=o[Y][0]>=2?1:0,pe=o[Y][1]>=2?1:0,Re=o[Y][2]>=2?1:0,we=o[Y][3]>=2?1:0,ee=o[Y][0]>=1?1:0,ue=o[Y][1]>=1?1:0,me=o[Y][2]>=1?1:0,Le=o[Y][3]>=1?1:0,X=v-ae+c,Ge=b-le+c,_e=O-ve+c,Be=H-$+c,Te=v-se+2*c,Qe=b-pe+2*c,ze=O-Re+2*c,w=H-we+2*c,E=v-ee+3*c,z=b-ue+3*c,ce=O-me+3*c,I=H-Le+3*c,L=v-1+4*c,B=b-1+4*c,j=O-1+4*c,de=H-1+4*c,xe=m&255,Me=p&255,re=y&255,W=x&255,q=a[xe+a[Me+a[re+a[W]]]]%32,V=a[xe+ae+a[Me+le+a[re+ve+a[W+$]]]]%32,ne=a[xe+se+a[Me+pe+a[re+Re+a[W+we]]]]%32,K=a[xe+ee+a[Me+ue+a[re+me+a[W+Le]]]]%32,Pe=a[xe+1+a[Me+1+a[re+1+a[W+1]]]]%32,Ee=.6-v*v-b*b-O*O-H*H;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this.dot4(r[q],v,b,O,H));let We=.6-X*X-Ge*Ge-_e*_e-Be*Be;We<0?u=0:(We*=We,u=We*We*this.dot4(r[V],X,Ge,_e,Be));let Ie=.6-Te*Te-Qe*Qe-ze*ze-w*w;Ie<0?f=0:(Ie*=Ie,f=Ie*Ie*this.dot4(r[ne],Te,Qe,ze,w));let fe=.6-E*E-z*z-ce*ce-I*I;fe<0?d=0:(fe*=fe,d=fe*fe*this.dot4(r[K],E,z,ce,I));let U=.6-L*L-B*B-j*j-de*de;return U<0?g=0:(U*=U,g=U*U*this.dot4(r[Pe],L,B,j,de)),27*(h+u+f+d+g)}};var Ws=class n extends sn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Fd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:on}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ft({defines:Object.assign({},Xr.defines),uniforms:Zt.clone(Xr.uniforms),vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new aa,this.normalMaterial.blending=Pt,this.pdMaterial=new ft({defines:Object.assign({},Yr.defines),uniforms:Zt.clone(Yr.uniforms),vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ft({defines:Object.assign({},qr.defines),uniforms:Zt.clone(qr.uniforms),vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,blending:Pt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ft({uniforms:Zt.clone(Ei.uniforms),vertexShader:Ei.vertexShader,fragmentShader:Ei.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:da,blendDst:zs,blendEquation:_n,blendSrcAlpha:ua,blendDstAlpha:zs,blendEquationAlpha:_n}),this.blendMaterial=new ft({uniforms:Zt.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:mc,blendSrc:da,blendDst:zs,blendEquation:_n,blendSrcAlpha:ua,blendDstAlpha:zs,blendEquationAlpha:_n}),this.fsQuad=new Fn(null),this.originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ls,this.depthTexture.format=di,this.depthTexture.type=Zn,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:Tt,magFilter:Tt,type:on,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Aa,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ds(s,e,e,fn,Un);return r.wrapS=jt,r.wrapT=jt,r.needsUpdate=!0,r}};Ws.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Bd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xs=class n extends sn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,o,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ft(r,o,{type:on});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ft(r,o,{type:on});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Bd;this.highPassUniforms=Zt.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ei;this.copyUniforms=Zt.clone(h.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Do,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new nn,this.fsQuad=new Fn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xs.BlurDirectionX=new he(1,0);Xs.BlurDirectionY=new he(0,1);var zd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ra=class extends sn{constructor(){super();let e=zd;this.uniforms=Zt.clone(e.uniforms),this.material=new ra({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_c&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var B_={uniforms:{tDiffuse:{value:null},amount:{value:.32}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float amount;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);vec2 d=vUv-.5;float v=smoothstep(.85,.25,length(d*vec2(1.1,1.)));c.rgb*=mix(1.-amount,1.,v);gl_FragColor=c;}"};function kd(n,e,t){let i={quality:"high",sunDir:new P,sky:null,env:null,composer:null,gtao:null,bloom:null},s=new Gr;s.scale.setScalar(450),e.add(s),i.sky=s;let r=s.material.uniforms;r.turbidity.value=3.2,r.rayleigh.value=1.25,r.mieCoefficient.value=.0045,r.mieDirectionalG.value=.86;function o(h,u){let f=Tc.degToRad(90-h),d=Tc.degToRad(u);i.sunDir.setFromSphericalCoords(1,f,d),r.sunPosition.value.copy(i.sunDir)}o(34,205);let a=new Is(n);function l(){let h=new gi;return h.add(s),i.env&&i.env.dispose(),i.env=a.fromScene(h),e.add(s),i.env.texture}i.envTex=l(),e.environment=i.envTex;function c(h,u){let f=new Ea(n);f.setPixelRatio(n.getPixelRatio()),f.setSize(h,u),f.addPass(new Ta(e,t)),i.quality==="high"?(i.gtao=new Ws(e,t,h,u),i.gtao.output=Ws.OUTPUT.Default,i.gtao.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),i.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),i.gtao.blendIntensity=.9,f.addPass(i.gtao)):i.gtao=null,i.quality!=="low"&&(i.bloom=new Xs(new he(h,u),.18,.65,.9),f.addPass(i.bloom)),f.addPass(new Ra),i.quality!=="low"&&f.addPass(new Gs(B_)),i.composer=f}return i.setQuality=(h,u,f)=>{i.quality=h,i.composer&&i.composer.dispose&&i.composer.dispose(),i.composer=null,h!=="low"&&c(u,f)},i.resize=(h,u)=>{i.composer&&i.composer.setSize(h,u)},i.render=()=>{i.composer&&i.quality!=="low"?i.composer.render():n.render(e,t)},i.follow=()=>{s.position.copy(t.position)},i.setSun=o,i}var z_={pf1:.256,pf2:.28,ph1:.29,ph2:.306},Xc={village:{scale:[95,47,70,32],walk:[66,99],spawn:{x:30,y:92},entry:{marche:{x:70,y:86},maison:{x:24,y:88},fleuve:{x:34,y:95}}},marche:{scale:[98,56,75,38],walk:[72,99],spawn:{x:22,y:96},entry:{village:{x:14,y:96},portail:{x:62,y:80}}},portail:{scale:[98,56,78,40],walk:[76,99],spawn:{x:24,y:96},entry:{marche:{x:15,y:96},classe:{x:55,y:82}}},classe:{scale:[62,34,84,48],walk:[62,99],spawn:{x:26,y:92},entry:{portail:{x:50,y:92}}},maison:{scale:[98,64,80,48],walk:[78,99],spawn:{x:26,y:96},entry:{village:{x:76,y:96}}},fleuve:{scale:[95,50,75,34],walk:[78,99],spawn:{x:26,y:95},entry:{village:{x:16,y:95}}}},Ti={village:{img:"village",name:"Mon quartier",focus:48,amb:"village",items:[{k:"npc",id:"jer",x:60,y:93,h:44},{k:"npc",id:"kasa",x:71,y:95,h:44},{k:"go",to:"maison",x:19,y:58,ico:"\u2B06",label:"Entrer dans ma maison"},{k:"go",to:"marche",x:73,y:62,ico:"\u27A1",label:"Vers le march\xE9"},{k:"go",to:"fleuve",x:30,y:90,ico:"\u2B05",label:"Vers le fleuve"},{k:"tree",x:50,y:26,label:"Cueillir des mangues"}]},marche:{img:"marche",name:"Le march\xE9",focus:50,amb:"marche",items:[{k:"npc",id:"bea",x:46,y:98,h:56},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"},{k:"go",to:"portail",x:64,y:55,ico:"\u2B06",label:"Vers l\u2019\xE9cole"}]},portail:{img:"portail",name:"Le portail de l\u2019\xE9cole",focus:48,amb:"portail",items:[{k:"npc",id:"lola",x:42,y:98,h:56},{k:"go",to:"classe",x:55,y:50,ico:"\u2B06",label:"Entrer dans l\u2019\xE9cole",need:"lola"},{k:"go",to:"marche",x:9,y:88,ico:"\u2B05",label:"Retour au march\xE9"}]},classe:{img:"classe",name:"La classe",focus:50,amb:"classe",items:[{k:"npc",id:"ilunga",x:50,y:62,h:34},{k:"npc",id:"junior",x:40,y:80,h:40},{k:"npc",id:"mavungu",x:61,y:84,h:46},{k:"go",to:"portail",x:50,y:97,ico:"\u2B07",label:"Sortir de l\u2019\xE9cole"}]},maison:{img:"maison",name:"Ma maison",focus:50,amb:"maison",items:[{k:"npc",id:"mama",x:47,y:98,h:64},{k:"objs",x:19,y:74,label:"Mes objets"},{k:"go",to:"village",x:86,y:92,ico:"\u2B07",label:"Sortir"}]},fleuve:{img:"fleuve",name:"Le fleuve Congo",focus:50,amb:"fleuve",items:[{k:"fact",x:52,y:60,label:"Le fleuve Congo"},{k:"go",to:"village",x:9,y:88,ico:"\u2B05",label:"Retour au quartier"}]}};function Hd(n){let{G:e,NPC:t,AUTOP:i,AUTO:s,actionFor:r,toast:o,speak:a,SFX:l,gain:c,save:h,refreshHud:u,openBox:f,esc:d,hasChar:g}=n,_=document.getElementById("pv");_.innerHTML='<div class="pblur"></div><div id="pstage"><div id="pdrift"><div class="pbg"></div><div id="pitems"></div></div></div><div class="pfade"></div><div class="pplace"></div><button class="pstop hide">Arr\xEAter</button><div class="phint hide">\u2194 Fais glisser pour regarder autour</div>';let m=_.querySelector("#pstage"),p=_.querySelector("#pdrift"),y=_.querySelector(".pbg"),x=_.querySelector("#pitems"),M=_.querySelector(".pblur"),C=_.querySelector(".phint"),T=_.querySelector(".pfade"),R=_.querySelector(".pplace"),F=_.querySelector(".pstop"),v={id:null,panX:0,W:0,H:0,dragged:!1,greeted:{},busy:!1,me:{x:30,y:92,walking:!1,cb:null}};function b(W){let q=_.clientWidth,V=_.clientHeight,ne=Math.max(q,Math.min(V*16/9,q*2.15)),K=ne*9/16;v.vw=q,v.vh=V,v.W=ne,v.H=K,m.style.width=ne+"px",m.style.height=K+"px",m.style.top=(V-K)*(K<V?.5:.75)+"px";let Pe=Ti[v.id];W||(v.panX=q/2-ne*(Pe?Pe.focus:50)/100),O(),H()}let O=()=>{v.panX=Math.min(0,Math.max(v.vw-v.W,v.panX))},H=()=>{m.style.left=v.panX+"px"};window.addEventListener("resize",()=>{v.id&&e.ui==="photo"&&b(!1)});let k=null;_.addEventListener("pointerdown",W=>{e.ui==="photo"&&(k={x:W.clientX,pan:v.panX,moved:!1},v.dragged=!1)}),_.addEventListener("pointermove",W=>{if(!k)return;let q=W.clientX-k.x;Math.abs(q)>7&&(k.moved=!0),k.moved&&(v.panX=k.pan+q,O(),H(),v.dragged=!0)});let D=()=>{k&&k.moved&&setTimeout(()=>{v.dragged=!1},80),k=null};_.addEventListener("pointerup",D),_.addEventListener("pointercancel",D);let N={renderer:null,scene:null,cam:null,model:null,canvas:null,sig:"",ry:0,last:0,active:!1};function Z(){if(N.renderer)return;let W=document.createElement("canvas");W.width=340,W.height=486,W.className="pcv",N.canvas=W;let q=new Hi({canvas:W,alpha:!0,antialias:!0,premultipliedAlpha:!0});q.setPixelRatio(1),q.setSize(340,486,!1),q.setClearColor(0,0),q.outputColorSpace=tt,q.toneMapping=Yi,q.toneMappingExposure=1;let V=new gi;V.add(new Fs(14674687,9071178,1.5));let ne=new Bs(16773336,2.6);ne.position.set(-1.5,3,3),V.add(ne);let K=new mi(-.84,.84,2.25,-.15,-10,10);K.position.z=5,N.renderer=q,N.scene=V,N.cam=K}let oe=()=>!(e.real&&g(e.real));function ie(){Z();let W=JSON.stringify([e.look,e.photo]);N.model&&N.sig===W||(N.model&&(N.scene.remove(N.model),N.model.traverse(q=>{q.geometry&&q.geometry.dispose()})),N.model=n.makePlayer3D(),N.sig=W,N.model&&N.scene.add(N.model))}let Y=(W,q)=>{let V=q-W;for(;V>Math.PI;)V-=2*Math.PI;for(;V<-Math.PI;)V+=2*Math.PI;return V};function ae(W){if(requestAnimationFrame(ae),!N.active||!N.model||!N.canvas.parentNode)return;let q=Math.min(.05,(W-N.last)/1e3);if(q<.026)return;N.last=W;let V=v.me,ne=V.walking?V.hd||0:V.face||0;N.ry+=Y(N.ry,ne)*Math.min(1,q*(V.walking?12:7)),N.model.rotation.y=N.ry,N.model.userData.update(q,{speed:V.walking?2.7:0}),N.renderer.render(N.scene,N.cam)}requestAnimationFrame(ae);let le=()=>n.playerChar();function ve(W,q){let V=Xc[W].scale,ne=(q-V[2])/(V[0]-V[2]);return V[3]+(V[1]-V[3])*ne}function $(){if(oe()){let K=ve(v.id,v.me.y)*1.72/1.7;return`<div class="pn me me3d" style="left:${v.me.x}%;top:${v.me.y}%;height:${K}%;z-index:${Math.round(v.me.y*10)}"><i class="sh"></i></div>`}let W=le();if(!g(W))return"";let q=v.id,V=ve(q,v.me.y)*(Vr[W]||1.7)/1.7,ne=`img/chars/${W}.webp`;return`<div class="pn me" style="left:${v.me.x}%;top:${v.me.y}%;height:${V}%;z-index:${Math.round(v.me.y*10)};--ar:${z_[W]||.28}"><i class="sh"></i><div class="mp"><div class="ly u" style="background-image:url(${ne})"></div><div class="ly l" style="background-image:url(${ne})"></div><div class="ly r" style="background-image:url(${ne})"></div></div></div>`}function se(){return x.querySelector(".me")}function pe(){let W=se();if(!W)return;let q=le(),V=ve(v.id,v.me.y)*(oe()?1.72:Vr[q]||1.7)/1.7;W.style.left=v.me.x+"%",W.style.top=v.me.y+"%",W.style.height=V+"%",W.style.zIndex=Math.round(v.me.y*10)}function Re(){let W=v.panX+v.W*v.me.x/100,q=v.vw*.26,V=v.vw*.74;if(!(v.W<=v.vw+4)){if(W<q)v.panX+=(q-W)*.18;else if(W>V)v.panX-=(W-V)*.18;else return;O(),H()}}let we=0;function ee(W,q,V){let ne=Xc[v.id],K=v.me;K.face=0,K.tx=Math.min(95,Math.max(5,W)),K.ty=Math.min(ne.walk[1],Math.max(ne.walk[0],q)),K.cb=V||null;let Pe=se();if(!Pe){V&&V();return}if(K.walking)return;K.walking=!0,Pe.classList.add("walk");let Ee=performance.now(),We=Ie=>{if(!K.walking||!se())return;let fe=Math.min(.05,(Ie-Ee)/1e3);Ee=Ie;let U=K.tx-K.x,be=K.ty-K.y,Se=Math.hypot(U,be*.7),ke=30*fe;if(Se<=ke+.2){K.x=K.tx,K.y=K.ty,K.walking=!1,pe(),se()&&se().classList.remove("walk");let Oe=K.cb;K.cb=null,Oe&&Oe();return}K.hd=Math.atan2(U*v.W/100,be*v.H/100*1.7),K.x+=U/Se*ke,K.y+=be/Se*ke,pe(),Re(),we=requestAnimationFrame(We)};we=requestAnimationFrame(We)}let ue=W=>{let q=v.me.x<=W.x?-1:1;return{x:W.x+q*9,y:W.y}};function me(W,q,V){let ne=Ti[W];if(v.id=W,!q){let Ee=Xc[W],We=V&&Ee.entry[V]||Ee.spawn;v.me.x=We.x,v.me.y=We.y,v.me.walking=!1,v.me.cb=null}y.style.backgroundImage=`url(img/scenes/${ne.img}.jpg)`,M.style.backgroundImage=`url(img/scenes/${ne.img}.jpg)`,R.textContent="\u{1F4CD} "+ne.name;let K="";ne.items.forEach((Ee,We)=>{if(Ee.k==="npc"){if(!g(Ee.id))return;let Ie=t[Ee.id]||i[Ee.id],fe=Ee.h*(Vr[Ee.id]||1.7)/1.7,U=Le(Ee.id);K+=`<div class="pn ${U.cls}" data-i="${We}" style="left:${Ee.x}%;top:${Ee.y}%;height:${fe}%;z-index:${Math.round(Ee.y*10)}"><i class="sh"></i><img src="img/chars/${Ee.id}.webp" alt="" draggable="false"><span class="tag">${U.ico} ${d(Ie.short||Ie.name)}</span></div>`}else if(Ee.k==="go"){let Ie=Ee.need&&!n.doneNpc(Ee.need);K+=`<button class="hs go${Ie?" locked":""}" data-i="${We}" style="left:${Ee.x}%;top:${Ee.y}%"><span class="ic">${Ie?"\u{1F512}":Ee.ico}</span><span class="lb">${d(Ie?"Mama Lola garde le passage":Ee.label)}</span></button>`}else K+=`<button class="hs ${Ee.k}" data-i="${We}" style="left:${Ee.x}%;top:${Ee.y}%"><span class="ic">${Ee.k==="tree"?"\u{1F96D}":Ee.k==="objs"?"\u{1F9FA}":"\u2139\uFE0F"}</span><span class="lb">${d(Ee.label)}</span></button>`}),x.innerHTML=K+$();let Pe=x.querySelector(".me3d");if(Pe?(ie(),Pe.appendChild(N.canvas),N.active=!0):N.active=!1,b(!1),!q){let Ee=ne.items.find(Ie=>Ie.k==="npc"),We=Ee?(v.me.x+Ee.x)/2:ne.focus;v.panX=v.vw/2-v.W*We/100,O(),H()}}function Le(W){let q=t[W];return q?q.kind==="quiz"?n.locked(W)?{cls:"lock",ico:"\u{1F512}"}:n.doneNpc(W)?{cls:"done",ico:"\u2714"}:{cls:"todo",ico:"\u2757"}:{cls:"",ico:"\u{1F4AC}"}:{cls:"",ico:"\u{1F4AC}"}}function X(W,q){if(v.busy)return;if(v.busy=!0,w(),!v.id){me(W,!1),v.busy=!1,Ge(W);return}p.style.transition="transform .28s ease-in,opacity .28s ease-in",p.style.transform=`scale(${q&&q.back?.94:1.18})`,p.style.opacity="0",T.style.opacity="1",setTimeout(()=>{me(W,!1,q&&q.from),p.style.transition="none",p.style.transform=`scale(${q&&q.back?1.1:.94})`,p.offsetWidth,p.style.transition="transform .42s ease-out,opacity .42s ease-out",p.style.transform="scale(1)",p.style.opacity="1",T.style.opacity="0",setTimeout(()=>{p.style.transition="",v.busy=!1,Ge(W)},430)},290)}function Ge(W){Me(Ti[W].amb);let V=Ti[W].items.find(ne=>ne.k==="npc"&&t[ne.id]&&!v.greeted[ne.id]&&g(ne.id));V&&(v.greeted[V.id]=!0,setTimeout(()=>{v.id===W&&e.mode==="pview"&&Qe(V.id,"Bonjour "+d(e.nom)+" !",3200)},700)),n.refreshHud(),v.vw<v.W-40&&!v.hinted&&(v.hinted=!0,C.classList.remove("hide"),setTimeout(()=>C.classList.add("hide"),5200))}let _e=document.getElementById("bubble"),Be=null,Te=null;function Qe(W,q,V){let ne=x.querySelector(`.pn[data-i="${Ti[v.id].items.findIndex(K=>K.id===W)}"]`);ne&&(Te=ne,_e.innerHTML=q,_e.style.display="block",ze(),clearTimeout(Be),Be=setTimeout(w,V||3500))}function ze(){if(!Te)return;let W=Te.getBoundingClientRect(),q=_.clientWidth;_e.style.left=Math.min(q-70,Math.max(70,W.left+W.width/2))+"px",_e.style.top=Math.max(70,W.top+8)+"px"}function w(){_e.style.display="none",Te=null}setInterval(()=>{Te&&ze()},250),x.addEventListener("click",W=>{if(v.dragged||e.mode!=="pview")return;let q=W.target.closest("[data-i]");if(!q){let ne=m.getBoundingClientRect(),K=(W.clientX-ne.left)/ne.width*100,Pe=(W.clientY-ne.top)/ne.height*100;w(),ee(K,Pe);return}let V=Ti[v.id].items[+q.dataset.i];if(V.k==="npc"){if(!t[V.id]){let Pe=ue(V);ee(Pe.x,Pe.y,()=>{v.me.face=(V.x>=v.me.x?1:-1)*1.25});return}let ne=r({t:"npc",id:V.id});if(!ne.enabled){o(t[V.id].short+" est occup\xE9(e). Reviens plus tard.");return}let K=ue(V);w(),ee(K.x,K.y,()=>{v.me.face=(V.x>=v.me.x?1:-1)*1.25,e.mode==="pview"&&ne.run()})}else if(V.k==="go"){if(V.need&&!n.doneNpc(V.need)){o("Mama Lola garde le passage : r\xE9ponds d\u2019abord \xE0 ses questions."),l.ko();return}let ne=v.id;ee(V.x,V.y,()=>X(V.to,{back:V.ico==="\u2B07"||V.ico==="\u2B05",from:ne}))}else V.k==="tree"?ee(50,91,()=>ce()):V.k==="objs"?ee(V.x+8,V.y+14,()=>n.openObjs()):V.k==="fact"&&ee(V.x,V.y+20,()=>E())}),setInterval(()=>{if(e.ui!=="photo"||e.mode!=="pview"||v.id!=="village"||Te)return;v.chat=(v.chat||0)+1;let W=s[v.chat%s.length],q=W[0]==="J\xE9r\xE9mie"?"jer":"kasa";Qe(q,"<b>"+d(W[0])+"</b> : "+d(W[1]),4200)},6500);function E(){let W=!e.adv.facts||!e.adv.facts.fleuve;f({kind:"info",title:"Le fleuve Congo",i:0,lines:["Le fleuve Congo est le deuxi\xE8me plus long fleuve d\u2019Afrique, apr\xE8s le Nil. C\u2019est aussi l\u2019un des fleuves les plus profonds du monde.","\xC0 Kinshasa, il s\xE9pare la RDC de la R\xE9publique du Congo : de l\u2019autre c\xF4t\xE9 du fleuve, on voit Brazzaville."]}),W&&(e.adv.facts=Object.assign(e.adv.facts||{},{fleuve:!0}),c(0,5),o("+5 points d\u2019exp\xE9rience"))}let z=null;function ce(){if(e.mode!=="pview")return;e.mode="mini",w();let W=document.createElement("div");W.className="pmg",x.appendChild(W),z={t:20,caught:0,layer:W,spawn:0,list:[],last:performance.now()},F.classList.remove("hide"),o("Touche les mangues pour les attraper !"),requestAnimationFrame(I)}function I(W){if(!z)return;let q=Math.min(.05,(W-z.last)/1e3);if(z.last=W,z.t-=q,z.spawn-=q,z.spawn<=0){z.spawn=.45+Math.random()*.4;let V=document.createElement("button");V.className="mgo";let ne={el:V,x:36+Math.random()*30,y:16+Math.random()*10,v:0,gy:76+Math.random()*14,done:!1};V.style.left=ne.x+"%",V.style.top=ne.y+"%",V.addEventListener("pointerdown",K=>{K.stopPropagation(),!ne.done&&(ne.done=!0,z.caught++,l.coin(),V.classList.add("pop"),setTimeout(()=>V.remove(),260))}),z.layer.appendChild(V),z.list.push(ne)}if(z.list=z.list.filter(V=>V.done?!1:(V.v+=70*q,V.y+=V.v*q*.18,V.el.style.top=V.y+"%",V.y>=V.gy?(V.el.classList.add("splat"),setTimeout(()=>V.el.remove(),350),!1):!0)),document.getElementById("info").textContent="Mangues attrap\xE9es : "+z.caught+" \xB7 temps : "+Math.max(0,Math.ceil(z.t))+" s",z.t<=0)return L();requestAnimationFrame(I)}function L(){if(!z)return;let W=z.caught;z.layer.remove(),z=null,F.classList.add("hide"),e.mode="pview",e.adv.mangues+=W,h(),o(W?"+"+W+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),W&&l.win(),c(0,W),u()}F.addEventListener("click",L);let B=null,j=null,de=null;function xe(){let W=B.createBuffer(1,B.sampleRate*2,B.sampleRate),q=W.getChannelData(0),V=0;for(let K=0;K<q.length;K++){let Pe=Math.random()*2-1;V=(V+.02*Pe)/1.02,q[K]=V*3.5}let ne=B.createBufferSource();return ne.buffer=W,ne.loop=!0,ne}function Me(W){try{if(!e.sound){re();return}B=B||new(window.AudioContext||window.webkitAudioContext),B.state==="suspended"&&B.resume(),re();let q=B.createGain(),V=B.createBiquadFilter(),ne=xe(),K={village:["lowpass",500,.9,.05],marche:["bandpass",850,.6,.11],portail:["lowpass",420,.8,.045],classe:["lowpass",300,.7,.025],maison:["lowpass",250,.6,.02],fleuve:["lowpass",650,.7,.07]}[W]||["lowpass",400,.7,.03];if(V.type=K[0],V.frequency.value=K[1],V.Q.value=K[2],q.gain.value=0,q.gain.linearRampToValueAtTime(K[3],B.currentTime+1.2),ne.connect(V),V.connect(q),q.connect(B.destination),ne.start(),j={n:ne,g:q},W==="village"||W==="portail"||W==="fleuve"){let Pe=()=>{if(!j||!e.sound)return;let Ee=B.createOscillator(),We=B.createGain(),Ie=B.currentTime,fe=2200+Math.random()*1600;Ee.frequency.setValueAtTime(fe,Ie),Ee.frequency.exponentialRampToValueAtTime(fe*1.5,Ie+.09),Ee.frequency.exponentialRampToValueAtTime(fe*.9,Ie+.18),We.gain.setValueAtTime(1e-4,Ie),We.gain.exponentialRampToValueAtTime(.018,Ie+.03),We.gain.exponentialRampToValueAtTime(1e-4,Ie+.2),Ee.connect(We),We.connect(B.destination),Ee.start(Ie),Ee.stop(Ie+.22),de=setTimeout(Pe,1800+Math.random()*4200)};de=setTimeout(Pe,1200)}}catch{}}function re(){if(clearTimeout(de),j){try{j.g.gain.linearRampToValueAtTime(0,B.currentTime+.3);let W=j.n;setTimeout(()=>{try{W.stop()}catch{}},400)}catch{}j=null}}n.photo={show:W=>{_.classList.remove("hide"),v.id=null,v.busy=!1,X(W)},hide:()=>{_.classList.add("hide"),N.active=!1,re(),w()},resume:()=>{_.classList.remove("hide"),N.sig="";let W=v.panX;me(v.id,!0),v.panX=W,b(!0),Me(Ti[v.id].amb)},refresh:()=>{if(!v.id)return;let W=v.panX;me(v.id,!0),v.panX=W,b(!0)},scene:()=>v.id,ambientOff:re,ambientOn:()=>{v.id&&Me(Ti[v.id].amb)}}}function $r(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Mt,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Vd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=Vd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new At(o,t,i);return s!==void 0&&(l.gpuType=s),l}function qs(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function Gd(n,e,t){let i=document.createElement("canvas");return i.width=n,i.height=e,t(i.getContext("2d"),n,e),i}var Wd=(n,e)=>{let t=new ln(n);return t.anisotropy=4,t.wrapS=t.wrapT=jt,e!==!1&&(t.colorSpace=tt),t},qc={};function Xd(n){if(qc[n])return qc[n];let e=qs(n==="mango"?11:n==="palm"?23:37),t=Gd(256,256,(i,s,r)=>{i.clearRect(0,0,s,r);let o=n==="mango"?26:n==="palm"?1:34,a=n==="mango"?[34,98,44]:n==="palm"?[48,112,40]:[58,120,52];if(n==="palm"){i.translate(s/2,r),i.strokeStyle="rgb(70,100,40)",i.lineWidth=4,i.beginPath(),i.moveTo(0,0),i.lineTo(0,-r*.97),i.stroke();for(let l=0;l<34;l++){let c=-r*.06-l*(r*.93/34),h=s*.46*(1-l/46),u=.55+l*.012;[-1,1].forEach(f=>{let d=.8+e()*.4;i.strokeStyle=`rgb(${a[0]*d|0},${a[1]*d|0},${a[2]*d|0})`,i.lineWidth=3.4,i.beginPath(),i.moveTo(0,c),i.quadraticCurveTo(f*h*.5,c-h*.16,f*h,c+h*.42*1),i.stroke()})}return}for(let l=0;l<o;l++){let c=e()*Math.PI*2,h=Math.pow(e(),.6)*(s*.38),u=s/2+Math.cos(c)*h,f=r/2+Math.sin(c)*h*.8,d=(n==="mango"?64:36)*(.7+e()*.5),g=d*(n==="mango"?.22:.4),_=c+Math.PI/2+(e()-.5)*.8,m=.7+e()*.55,p=`rgb(${a[0]*m|0},${a[1]*m|0},${a[2]*m|0})`;i.save(),i.translate(u,f),i.rotate(_),i.fillStyle=p,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(g,-d*.45,0,-d),i.quadraticCurveTo(-g,-d*.45,0,0),i.fill(),i.strokeStyle=`rgba(${a[0]*m*.6|0},${a[1]*m*.7|0},${a[2]*m*.6|0},.8)`,i.lineWidth=1.1,i.beginPath(),i.moveTo(0,0),i.lineTo(0,-d*.9),i.stroke(),i.restore()}});return qc[n]=Wd(t)}function qd(){let n=Gd(128,256,(t,i,s)=>{let r=qs(5);t.fillStyle="#5a4128",t.fillRect(0,0,i,s);for(let o=0;o<220;o++){let a=r()*i,l=r()*s,c=18+r()*60;t.strokeStyle=r()<.5?"rgba(30,18,8,.5)":"rgba(130,100,66,.35)",t.lineWidth=1+r()*2.2,t.beginPath(),t.moveTo(a,l),t.lineTo(a+(r()-.5)*5,l+c),t.stroke()}}),e=Wd(n);return e.repeat.set(2,3),e}function Yc(n,e){let t=Xd(n);return new He({map:t,alphaTest:.5,side:wt,roughness:.78,metalness:0,color:e||16777215,vertexColors:!0})}function $c(n){return new br({depthPacking:Mc,map:Xd(n),alphaTest:.5})}function Yd(n,e,t,i){let s=new ct(n,e);s.applyMatrix4(t);let r=s.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=i*(.9+.1*Math.random()),o[a*3+1]=i,o[a*3+2]=i*.92;return s.setAttribute("color",new At(o,3)),s}var St=new Vt;function $d(n){n=n||{};let e=n.kind||"mango",t=n.seed||3,i=qs(t),s=new st,r=new He({map:qd(),roughness:.95,color:12101004}),o=n.trunk||3.4,a=[[0,0,0],[.15,o*.35,.08],[-.1,o*.7,-.05],[.05,o,0]].map(p=>new P(p[0],p[1],p[2])),l=new ge(new Ns(new Vi(a),14,.34,10),r),c=l.geometry.attributes.position;for(let p=0;p<c.count;p++){let y=c.getY(p);if(y<.7){let x=1+(.7-y)*.55;c.setX(p,c.getX(p)*x),c.setZ(p,c.getZ(p)*x)}}l.geometry.computeVertexNormals(),l.castShadow=!0,l.receiveShadow=!0,s.add(l);let h=5;for(let p=0;p<h;p++){let y=p/h*Math.PI*2+i()*.6,x=2.2+i()*1.4,M=o*(.72+i()*.25),C=[new P(0,M,0),new P(Math.cos(y)*x*.5,M+x*.35,Math.sin(y)*x*.5),new P(Math.cos(y)*x,M+x*.55,Math.sin(y)*x)],T=new ge(new Ns(new Vi(C),8,.11,6),r);T.castShadow=!0,s.add(T)}let u=new ge(new Wi(2.1,2),new He({color:e==="mango"?1853990:2315564,roughness:1}));u.position.set(0,o+1.6,0),u.scale.set(1.35,.85,1.35),u.castShadow=!0,s.add(u);let f=Yc(e,n.tint),d=$c(e),g=n.cards||80,_=[];for(let p=0;p<g;p++){let y=i()*Math.PI*2,x=Math.acos(1-i()*.85),M=2.4+i()*1.4,C=Math.sin(x)*Math.cos(y)*M,T=Math.cos(x)*M*.7+o+1.5,R=Math.sin(x)*Math.sin(y)*M;St.position.set(C,T,R),St.lookAt(C*2,T*1.2+1,R*2),St.rotateZ(i()*6.28),St.scale.setScalar(.8+i()*.8),St.updateMatrix();let F=(T-o)/(M*.7+1.5);_.push(Yd(2.3,2.3,St.matrix,.5+.5*Math.min(1,Math.max(0,F*.9+.25))))}let m=new ge($r(_),f);if(m.castShadow=!0,m.receiveShadow=!0,m.customDepthMaterial=d,m.userData.canopy=!0,s.add(m),e==="mango"&&n.fruits!==!1){let p=new He({color:15243802,roughness:.45}),y=[];for(let M=0;M<22;M++){let C=i()*6.28,T=1.2+i()*2.2,R=new Bt(.15,10,8);R.scale(1,1.3,1),R.translate(Math.cos(C)*T,o+.9+i()*1.7,Math.sin(C)*T),y.push(R)}let x=new ge($r(y),p);x.castShadow=!0,x.userData.canopy=!0,s.add(x)}return u.userData.canopy=!0,s}function jd(n){let e=qs(n||7),t=new st,i=new He({map:qd(),roughness:.9,color:13680808}),s=7+e()*3,r=(e()-.5)*1.6,o=[0,.3,.6,.9,1].map((d,g)=>new P(r*d*d,s*d,0)),a=new ge(new Ns(new Vi(o),24,.22,8),i),l=a.geometry.attributes.position;for(let d=0;d<l.count;d++){let g=l.getY(d),_=1-g/s*.45+(g<.6?(.6-g)*.6:0);l.setX(d,(l.getX(d)-r*(g/s)*(g/s))*_+r*(g/s)*(g/s)),l.setZ(d,l.getZ(d)*_)}a.geometry.computeVertexNormals(),a.castShadow=!0,t.add(a);let c=Yc("palm"),h=$c("palm"),u=[];for(let d=0;d<14;d++){St.position.set(r,s,0),St.rotation.order="YXZ",St.rotation.set(-(.3+e()*.85),d/14*Math.PI*2+e()*.3,0),St.scale.set(1,1,1),St.updateMatrix();let g=new ct(3.8,3.8);g.translate(0,1.9,0),g.applyMatrix4(St.matrix);let _=g.attributes.position.count,m=new Float32Array(_*3),p=.7+e()*.3;for(let y=0;y<_;y++)m[y*3]=p,m[y*3+1]=p,m[y*3+2]=p*.9;g.setAttribute("color",new At(m,3)),u.push(g)}let f=new ge($r(u),c);return f.castShadow=!0,f.customDepthMaterial=h,t.add(f),t}function Zd(n,e){let t=qs(n||4),i=new st,s=Yc("leafy"),r=[],o=e||.9;for(let c=0;c<26;c++){let h=t()*6.28,u=t()*1.2,f=o*(.4+t()*.6);St.position.set(Math.cos(h)*f*Math.cos(u),.25+Math.sin(u)*o*.9,Math.sin(h)*f*Math.cos(u)),St.lookAt(St.position.x*2,St.position.y+.6,St.position.z*2),St.rotateZ(t()*6.28),St.scale.setScalar(.45+t()*.4),St.updateMatrix(),r.push(Yd(1.6,1.6,St.matrix,.5+t()*.5))}let a=new ge($r(r),s);a.castShadow=!0,a.customDepthMaterial=$c("leafy"),i.add(a);let l=new ge(new Wi(o*.55,1),new He({color:1919526,roughness:1}));return l.position.y=.45,l.scale.y=.7,i.add(l),i}function Jd(n){let{area:e,count:t,exclude:i,seed:s}=n,r=qs(s||9),o=new Mt,a=3,l=[],c=[],h=[],u=[];for(let T=0;T<=a;T++){let R=T/a,F=.032*(1-R*.9),v=R*.34;if(l.push(-F,v,0,F,v,0),c.push(0,R,1,R),u.push(.45+.55*R,.5+.5*R,.4+.4*R,.45+.55*R,.5+.5*R,.4+.4*R),T<a){let b=T*2;h.push(b,b+1,b+2,b+1,b+3,b+2)}}o.setAttribute("position",new Ye(l,3)),o.setAttribute("uv",new Ye(c,2)),o.setIndex(h),o.setAttribute("color",new Ye(u,3));let f=[];for(let T=0;T<l.length/3;T++)f.push(0,1,0);o.setAttribute("normal",new Ye(f,3));let d=new He({color:16777215,roughness:.9,side:wt,vertexColors:!0}),g={value:0};d.onBeforeCompile=T=>{T.uniforms.uTime=g,T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sw=uv.y*uv.y;
#ifdef USE_INSTANCING
vec3 ip=vec3(instanceMatrix[3][0],0.,instanceMatrix[3][2]);
#else
vec3 ip=vec3(0.);
#endif
transformed.x+=sin(uTime*1.7+ip.x*.45+ip.z*.3)*.11*sw;transformed.z+=cos(uTime*1.3+ip.z*.4)*.07*sw;`),d.userData.sh=T};let _=new Us(o,d,t),m=new nt,p=new De,y=new Mn,x=new Cs,M=0,C=0;for(;M<t&&C<t*6;){C++;let T=e[0]+r()*(e[1]-e[0]),R=e[2]+r()*(e[3]-e[2]);if(i&&i(T,R))continue;let F=.8+r()*.8;x.set((r()-.5)*.3,r()*6.28,(r()-.5)*.3),y.setFromEuler(x),m.compose(new P(T,0,R),y,new P(F,F*(.6+r()*1),F)),_.setMatrixAt(M,m),p.setHSL(.23+r()*.07,.55+r()*.15,.22+r()*.14),_.setColorAt(M,p),M++}return _.count=M,_.receiveShadow=!0,_.frustumCulled=!1,_.userData.update=T=>{g.value=T},_}var Fe=(n,e,t)=>new He(Object.assign({color:n,roughness:e===void 0?.85:e},t||{}));function Ue(n,e,t,i,s,r,o,a,l){let c=new ge(new bt(e,t,i),s);return c.position.set(r,o,a),l&&(c.rotation.y=l),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ji(n,e,t,i,s,r,o,a,l){let c=new ge(new Qn(e,t,i,l||12),s);return c.position.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Kd(n){let e=n>>>0||1;return()=>(e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296)}function Qd(n,e,t,i,s,r,o,a,l,c){let h=c||.5,u=r/2+h,f=s+h*2,d=Math.atan2(o,r/2),g=Math.hypot(o,r/2)+h*.6;[-1,1].forEach(p=>{let y=Ue(n,f,.12,g,a,e,t+o/2,i+p*(r/4),0);y.rotation.x=-p*d});let _=new Ar;_.moveTo(-r/2,0),_.lineTo(r/2,0),_.lineTo(0,o),_.closePath();let m=new ge(new sa(_),l);[-1,1].forEach(p=>{let y=m.clone();y.position.set(e+p*s/2,t,i),y.rotation.y=p*Math.PI/2,n.add(y)})}function ef(n,e,t,i,s,r,o,a){let l=a?jd(Math.floor(Math.abs(e*7+t*3))+2):$d({kind:s?"mango":"leafy",seed:Math.floor(Math.abs(e*13+t*7))+3,fruits:!!s,trunk:3+i*7%1*1.4});return l.position.set(e,0,t),l.scale.setScalar(a?1:i),n.add(l),o&&o.push({x:e,z:t,r:(a?.35:.6)*(a?1:i)}),l}function nf(n){let e=new st,t=[],i=[],s={},r=Rd(),o=new ge(new ct(1400,1400),new He({map:r,roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(12,0,0),o.receiveShadow=!0,e.add(o);let a=Cd(),l=new He({map:a,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=(ee,ue,me,Le,X)=>{let Ge=new ge(new ct(me,Le),l);Ge.rotation.x=-Math.PI/2,Ge.rotation.z=X||0,Ge.position.set(ee,.02,ue),Ge.receiveShadow=!0,e.add(Ge)};c(-4,1,64,3.2,0),c(3,-2,11,9,0),c(-20,-4,5,6,0),c(34,0,14,3.2,0),c(41,-3.5,4,6.5,0);let h=-22,u=-9;Ue(e,8,2.7,5.4,new He({map:Dc(),roughness:1}),h,1.35,u),Qd(e,h,2.7,u,8,5.4,1.8,new He({map:Uc(),roughness:1}),Fe("#b99a55"),.7),Ue(e,1.3,2.1,.12,Fe("#4a2f1b",.8),h,1.05,u+2.72),Ue(e,1.5,.1,.3,Fe("#6e5a45"),h,.05,u+2.9),[-2.7,2.7].forEach(ee=>{Ue(e,1.2,1,.1,Fe("#e8f3fa",.2,{emissive:5088985,emissiveIntensity:.35}),h+ee,1.6,u+2.72),Ue(e,1.35,.12,.14,Fe("#4a2f1b"),h+ee,1.08,u+2.74),Ue(e,1.35,.12,.14,Fe("#4a2f1b"),h+ee,2.12,u+2.74)}),i.push({x0:h-4,x1:h+4,z0:u-2.7,z1:u+2.7}),Ue(e,2.2,.12,.8,Fe("#7a4a26"),-26,.5,-4.2),Ue(e,.12,.5,.7,Fe("#6b4226"),-26.9,.25,-4.2),Ue(e,.12,.5,.7,Fe("#6b4226"),-25.1,.25,-4.2),t.push({x:-26,z:-4.2,r:1.1});let f=ef(e,-9,4,1.55,!0,["#2f7d44","#3f9a53","#276b3a"],t);s.mangoTree={x:-9,z:4,obj:f};let d=3,g=-6.4;[[-2.2,-1.1],[2.2,-1.1],[-2.2,1.1],[2.2,1.1]].forEach(ee=>Ji(e,.06,.06,2.5,Fe("#6b4226"),d+ee[0],1.25,g+ee[1],8));let _=Ue(e,5.2,.1,3.4,new He({map:Ld(),roughness:.9}),d,2.62,g-.1);_.rotation.x=.12,Ue(e,4.6,.9,.9,new He({map:bi("#a87445"),roughness:.9}),d,.45,g+.9),[["#e68a00",-1.6],["#c0392b",-.8],["#6bbf3a",0],["#e0a526",.8],["#e68a00",1.6]].forEach((ee,ue)=>{for(let me=0;me<5;me++){let Le=new ge(new Bt(.13,10,8),Fe(ee[0],.5));Le.position.set(d+ee[1]+me%2*.14,1.02+(me>2?.2:0),g+.9+(me%3-1)*.18),Le.castShadow=!0,e.add(Le)}}),Ue(e,.9,.5,.7,Fe("#8a5a32"),d-1.8,.25,g-.7),Ue(e,.9,.5,.7,Fe("#8a5a32"),d+1.9,.25,g-.5),i.push({x0:d-2.4,x1:d+2.4,z0:g+.35,z1:g+1.5}),Ue(e,.12,.9,.12,Fe("#555"),d,2.8,g+1.6);let p=new ge(new ct(2.2,.55),new He({map:zr([{t:"MARCH\xC9",s:90,c:"#c0392b"}],256,64,"#fff8ef","#c0392b","#c0392b")}));p.position.set(d,2.2,g+1.72),e.add(p);let y=14,x=-7;[-1.7,1.7].forEach(ee=>Ji(e,.07,.07,4,Fe("#6b6b6b",.5,{metalness:.4}),y+ee,2,x,8));let M=new ge(new ct(4.2,1.9),new He({map:zr([{t:"LEXARIS ACAD\xC9MIE",s:46,y:.42},{t:"Formation en IA \xB7 juristes et jeunes",s:22,y:.72,b:!1,c:"#f1c40f"}],512,230,"#1f7a4d","#ffffff"),roughness:.6}));M.position.set(y,3.1,x+.05),M.castShadow=!0,e.add(M),t.push({x:y-1.7,z:x,r:.3},{x:y+1.7,z:x,r:.3}),Ue(e,2,.1,.5,Fe("#7a4a26"),9,.5,-5.2),Ue(e,.1,.5,.45,Fe("#4a2f1b"),8.1,.25,-5.2),Ue(e,.1,.5,.45,Fe("#4a2f1b"),9.9,.25,-5.2),t.push({x:9,z:-5.2,r:1});let C=Fe("#8a5a32",.9),T=27,R=(ee,ue)=>Ji(e,.09,.09,1.7,C,ee,.85,ue,6);[[-15,-2.4],[2.4,15]].forEach(ee=>{for(let me=ee[0];me<=ee[1];me+=1.6)R(T,me);let ue=ee[1]-ee[0];Ue(e,.07,.08,ue,C,T,1.35,(ee[0]+ee[1])/2),Ue(e,.07,.08,ue,C,T,.7,(ee[0]+ee[1])/2),i.push({x0:T-.3,x1:T+.3,z0:ee[0],z1:ee[1]})}),[-2.2,2.2].forEach(ee=>{let ue=Ue(e,.5,2.2,.5,new He({map:Lc([196,106,60]),roughness:.9}),T,1.1,ee);t.push({x:T,z:ee,r:.4})});let F=[];[-1,1].forEach(ee=>{let ue=new st;ue.position.set(T,0,ee*2);let me=new st;me.position.set(0,0,-ee*1),Ue(me,.08,1.5,2,Fe("#5a3a22"),0,.95,0);for(let Le=-4;Le<=4;Le+=2)Ue(me,.1,1.5,.08,Fe("#7a4a26"),0,.95,Le*.22);ue.add(me),e.add(ue),F.push({piv:ue,s:ee})}),s.leaves=F,s.gateBox={x0:T-.4,x1:T+.4,z0:-2.4,z1:2.4};let v=42,b=-11,O=new He({map:Lc([198,108,62]),roughness:.9});Ue(e,26,3.8,9,O,v,1.9,b),Qd(e,v,3.8,b,26,9,2.2,new He({map:Nc(),roughness:.55,metalness:.35}),Fe("#e9dfca"),.9),Ue(e,26,.3,.4,Fe("#efe6d2"),v,.15,b+4.6);for(let ee=0;ee<10;ee++)Ji(e,.14,.14,3.2,Fe("#f3ecd9"),v-11.5+ee*2.55,1.6,b+5.4,10);Ue(e,26.5,.25,1.4,Fe("#cfc6b2"),v,3.25,b+5.2),Ue(e,26.5,.12,1.6,new He({map:Nc(),roughness:.55,metalness:.35}),v,3.45,b+5.2),Ue(e,26.5,.2,1.6,Fe("#d9d0bc"),v,.1,b+5.2),[-9,-5.4,5.4,9].forEach(ee=>{Ue(e,1.7,1.3,.1,Fe("#cfe9f7",.15,{emissive:6006742,emissiveIntensity:.3}),v+ee,2.05,b+4.55),Ue(e,1.9,.12,.15,Fe("#f2f2f2"),v+ee,1.37,b+4.58)});let H=new st;H.position.set(v,0,b+4.55),e.add(H),Ue(H,3.2,2.9,.2,Fe("#2b1d12"),0,1.45,-.05);let k=[];[-1,1].forEach(ee=>{let ue=new st;ue.position.set(ee*1.5,0,.05);let me=Ue(ue,1.5,2.7,.1,Fe("#6b3f20"),-ee*.75,1.35,0);Ue(ue,1.2,.08,.12,Fe("#4a2f1b"),-ee*.75,2.1,.02),H.add(ue),k.push({piv:ue,s:ee})}),s.doorLeaves=k;let D=new ge(new ct(8,1.1),new He({map:zr([{t:"LEXARIS ACAD\xC9MIE",s:78}],1024,140,"#1f7a4d","#ffffff"),roughness:.6}));D.position.set(v,3.15,b+4.58),e.add(D),i.push({x0:v-13,x1:v+13,z0:b-4.5,z1:b+4.6});let N=33,Z=-3;Ji(e,.05,.07,7,Fe("#999",.4,{metalness:.5}),N,3.5,Z,8);let oe=new ge(new ct(1.6,1.05,10,1),new He({map:sf(),side:wt,roughness:.8}));oe.position.set(N+.85,6.2,Z),oe.castShadow=!0,e.add(oe),s.flag=oe,t.push({x:N,z:Z,r:.3}),[[-30,-3],[-28,9],[-18,8],[-14,-12],[-6,-10],[-4,10],[6,10],[12,9],[18,-11],[22,-9],[-32,-12],[20,11],[24,5],[34,9],[48,6],[52,-2],[31,-13],[55,10],[-24,13],[0,-13]].forEach((ee,ue)=>ef(e,ee[0],ee[1],.9+ue%4*.18,!1,null,t,ue%3===1));let Y=Kd(31);for(let ee=0;ee<30;ee++){let ue=-33+Y()*90,me=-14+Y()*28;if(Math.abs(me)<2.3&&ue<27)continue;let Le=Zd(ee+3,.7+Y()*.7);Le.position.set(ue,0,me),Le.rotation.y=Y()*6,e.add(Le)}let ae=Jd({area:[-34,58,-15,15],count:34e3,seed:5,exclude:(ee,ue)=>Math.abs(ue)<2&&ee<27||ee>-27&&ee<-17&&ue>-11.7&&ue<-6.3||ee>26&&ee<44&&ue>-8&&ue<5||ee>0&&ee<7&&ue>-8&&ue<-3||ee>0&&ee<8&&ue>-5.5&&ue<1.5});e.add(ae);let le=Kd(31),ve=new nt,$=new De,se=new Us(new Bt(.08,6,5),Fe("#ffffff",.6),160);for(let ee=0;ee<160;ee++){let ue=-33+le()*60,me=-14+le()*28;Math.abs(me)<2.2||(ve.compose(new P(ue,.28,me),new Mn,new P(1,1,1)),se.setMatrixAt(ee,ve),$.set(["#ffd23f","#ff6b9a","#ffffff","#ff8a3d"][ee%4]),se.setColorAt(ee,$))}e.add(se);let pe=[],Re={x0:-33.5,x1:58,z0:-14.5,z1:14.5};function we(ee,ue,me){pe.forEach((Ge,_e)=>{Ge.position.x+=ee*(.6+_e%3*.2),Ge.position.x>190&&(Ge.position.x=-190)}),ae.userData.update(ue);let Le=s.flag.geometry.attributes.position;for(let Ge=0;Ge<Le.count;Ge++){let _e=Le.getX(Ge)+.8;Le.setZ(Ge,Math.sin(ue*4+_e*3)*.07*_e)}Le.needsUpdate=!0;let X=me.open?1:0;s.leaves.forEach(Ge=>{let _e=X*Ge.s*1.45;Ge.piv.rotation.y+=(-_e-Ge.piv.rotation.y)*Math.min(1,ee*4)}),s.doorLeaves.forEach(Ge=>{let _e=X*Ge.s*1.6;Ge.piv.rotation.y+=(_e-Ge.piv.rotation.y)*Math.min(1,ee*4)})}return{group:e,colliders:t,boxes:i,dyn:s,bounds:Re,update:we,mangoTree:s.mangoTree}}function sf(){let n=document.createElement("canvas");n.width=256,n.height=170;let e=n.getContext("2d");e.fillStyle="#007fff",e.fillRect(0,0,256,170),e.strokeStyle="#f7d618",e.lineWidth=40,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.strokeStyle="#ce1021",e.lineWidth=24,e.beginPath(),e.moveTo(-10,190),e.lineTo(270,-20),e.stroke(),e.fillStyle="#f7d618",e.beginPath();for(let i=0;i<10;i++){let s=-Math.PI/2+i*Math.PI/5,r=i%2?9:22;e.lineTo(40+Math.cos(s)*r,40+Math.sin(s)*r)}e.fill();let t=new ln(n);return t.colorSpace=tt,t}function rf(n,e,t,i,s,r,o){let a=new ge(new ct(e,t),r);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);let l=new ge(new ct(e,i),s);l.position.set(0,i/2,-t/2),l.receiveShadow=!0,n.add(l);let c=new ge(new ct(t,i),s);c.rotation.y=Math.PI/2,c.position.set(-e/2,i/2,0),c.receiveShadow=!0,n.add(c);let h=new ge(new ct(t,i),s);h.rotation.y=-Math.PI/2,h.position.set(e/2,i/2,0),h.receiveShadow=!0,n.add(h),Ue(n,e,.12,.1,Fe("#e7dcc5"),0,.06,-t/2+.05),Ue(n,2.2,.04,1.1,Fe("#7a4a26",1),0,.02,t/2-.7);let u=new ge(new ia(.55,.75,32),new nn({color:16765503,transparent:!0,opacity:.55}));u.rotation.x=-Math.PI/2,u.position.set(0,.05,t/2-.7),n.add(u)}function tf(n,e,t,i){let s=i||.7,r=new He({map:bi("#b07a45"),roughness:.8});Ue(n,1.1,.06,.55,r,e,s,t-.7),[[-.5,-.2],[.5,-.2],[-.5,.2],[.5,.2]].forEach(o=>Ue(n,.05,s,.05,Fe("#4a2f1b"),e+o[0],s/2,t-.7+o[1])),Ue(n,.42,.05,.4,r,e,.4,t),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(o=>Ue(n,.04,.4,.04,Fe("#4a2f1b"),e+o[0],.2,t+o[1])),Ue(n,.42,.4,.05,r,e,.62,t+.2)}function of(){let n=new st,e=[],t=[],i=17,s=10;rf(n,i,s,3.8,new He({map:Pd("#f1e7cf"),roughness:1}),new He({map:bi("#a8744a"),roughness:.85})),n.children.forEach(c=>{c.geometry&&c.geometry.type==="PlaneGeometry"&&c.rotation.x===-Math.PI/2&&c.material.map.repeat.set(5,3)});let o=new ge(new ct(7.5,2.3),new He({map:zr([{t:"LEXARIS ACAD\xC9MIE",s:60,y:.38,c:"#ffffff"},{t:"Kelas Game \xB7 Apprendre en jouant",s:28,y:.7,b:!1,c:"#f1c40f"}],768,230,"#2e3b33","#fff","#8d5a3b"),roughness:.9}));o.position.set(0,2.2,-s/2+.04),n.add(o),Ue(n,7.8,.12,.14,Fe("#8d5a3b"),0,.98,-s/2+.06);let a=new ge(new ct(1.5,1),new He({map:sf(),roughness:.9}));a.position.set(5.8,2.4,-s/2+.04),n.add(a),[-2.6,2.2].forEach(c=>{let h=new ge(new ct(2,1.5),new nn({color:13626111}));h.rotation.y=-Math.PI/2,h.position.set(i/2-.03,2.1,c),n.add(h),Ue(n,.08,1.6,.08,Fe("#fff"),i/2-.05,2.1,c)}),[["kinshasa",-2.8],["fleuve",0],["marche",2.8]].forEach(c=>{let h=Ud(c[0]);if(!h)return;Ue(n,.08,1.5,2.5,Fe("#5a3a22",.7),-i/2+.06,2.3,c[1]);let u=new ge(new ct(2.3,1.3),new He({map:h,roughness:.6}));u.rotation.y=Math.PI/2,u.position.set(-i/2+.11,2.3,c[1]),n.add(u)}),[[-5.5,1.2],[-2.8,1.2],[5.7,1],[-5.5,3.4],[-2.8,3.4],[0,3.4],[2.6,3.4],[5.7,3.4],[0,1.2]].forEach(c=>tf(n,c[0],c[1])),tf(n,2.6,.55,.62),Ue(n,2,.08,.9,new He({map:bi("#8a5a32")}),-6.2,.95,-3.6),[[-1,-.35],[1,-.35],[-1,.35],[1,.35]].forEach(c=>Ue(n,.07,.95,.07,Fe("#4a2f1b"),-6.2+c[0]*.9,.47,-3.6+c[1])),e.push({x:-6.2,z:-3.6,r:1.2}),t.push({x0:-3.5,x1:-2.1,z0:.2,z1:1.4}),[[-5.5,.5],[-2.8,.5],[5.7,.3],[-5.5,2.7],[-2.8,2.7],[0,2.7],[2.6,2.7],[5.7,2.7],[0,.5],[2.6,-.15]].forEach(c=>t.push({x0:c[0]-.6,x1:c[0]+.6,z0:c[1]-.3,z1:c[1]+.3}));let l={x0:-i/2+.5,x1:i/2-.5,z0:-s/2+.6,z1:s/2-.2};return{group:n,colliders:e,boxes:t,bounds:l,update(){},exit:{x:0,z:s/2-.9}}}function af(n){let e=new st,t=[],i=[],s=9.5,r=6.8;rf(e,s,r,3.2,new He({map:Dc(),roughness:1}),new He({map:bi("#8d6238"),roughness:.9}));let a=-3.2,l=-2.2;Ue(e,2.2,.35,1.3,new He({map:bi("#7a4a26")}),a,.3,l),Ue(e,2.1,.2,1.2,Fe("#f5efe3",.95),a,.55,l),Ue(e,.6,.12,.9,Fe("#ffffff",.9),a-.7,.7,l),Ue(e,1.4,.08,1.25,new He({map:Vs("#c0392b","#f1c40f"),roughness:.9}),a+.3,.66,l),i.push({x0:a-1.2,x1:a+1.2,z0:l-.75,z1:l+.75}),Ue(e,1,1.8,.08,Fe("#5a3a22",.7),-1.6,.95,-r/2+.12);let c=new ge(new ct(.82,1.62),new He({color:13625074,roughness:.05,metalness:.85,emissive:7315384,emissiveIntensity:.25}));c.position.set(-1.6,.95,-r/2+.17),e.add(c);let h=new ge(new ct(1.5,1.3),new nn({color:13626111}));if(h.position.set(2.4,1.9,-r/2+.03),e.add(h),Ue(e,1.7,.1,.1,Fe("#5a3a22"),2.4,2.6,-r/2+.06),n.rideau&&[-.75,.75].forEach(f=>Ue(e,.55,1.7,.06,new He({map:Vs("#c0392b","#f1c40f"),roughness:.9}),2.4+f*1.1,1.8,-r/2+.12)),n.tableau){let f=Ue(e,1.4,1.05,.07,Fe("#5a3a22"),-.4,2.1,-r/2+.06),d=new ge(new ct(1.25,.9),new He({map:Dd()}));d.position.set(-.4,2.1,-r/2+.11),e.add(d)}if(n.natte){let f=Ue(e,2.6,.03,1.7,new He({map:Uc(),roughness:1}),.2,.02,.9);Ue(e,2.7,.02,1.8,Fe("#7a4a26"),.2,.012,.9)}if(n.table){let f=new He({map:bi("#a87445"),roughness:.8});if(Ue(e,1.5,.08,.9,f,3.1,.85,-2.5),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(d=>Ue(e,.08,.85,.08,Fe("#4a2f1b"),3.1+d[0],.42,-2.5+d[1])),i.push({x0:2.3,x1:3.9,z0:-2.95,z1:-2.05}),n.lampe){Ji(e,.05,.07,.25,Fe("#6b4226"),3.1,1.02,-2.5,8);let d=new ge(new Bt(.17,14,10),Fe("#ffe9a8",.4,{emissive:16762714,emissiveIntensity:1.2}));d.position.set(3.1,1.28,-2.5),e.add(d);let g=new ca(16760932,9,7,1.6);g.position.set(3.1,1.35,-2.4),e.add(g)}}if(n.plante){Ji(e,.2,.15,.38,Fe("#a8301e"),4,.19,-2.7,12);for(let f=0;f<9;f++){let d=new ge(new Bt(.14,8,6),Fe(f%2?"#2e8b57":"#3a9a63",.8));d.scale.set(.6,1.6,.6);let g=f/9*6.28;d.position.set(4+Math.cos(g)*.15,.7+f%3*.15,-2.7+Math.sin(g)*.15),d.rotation.z=Math.cos(g)*.5,d.rotation.x=Math.sin(g)*.5,d.castShadow=!0,e.add(d)}t.push({x:4,z:-2.7,r:.3})}let u={x0:-s/2+.5,x1:s/2-.5,z0:-r/2+.6,z1:r/2-.2};return{group:e,colliders:t,boxes:i,bounds:u,update(){},exit:{x:0,z:r/2-.9}}}var ih="kelas_game_v12",Ae=n=>document.getElementById(n),wi=(n,e,t)=>Math.max(n,Math.min(e,t)),_t=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),xf=n=>n.map(e=>[Math.random(),e]).sort((e,t)=>e[0]-t[0]).map(e=>e[1]),Ki=(n,e,t,i)=>Math.hypot(n-t,e-i),Fa=()=>({done:{},stars:{},good:0,total:0,pieces:0,tissu:0,mangues:0,xp:0,items:{},bought:{},fin:!1}),S={ui:"photo",nom:"",photo:null,real:"pf1",voice:!0,sexe:"f",look:Object.assign({},Br,{acc:[]}),sound:!0,sc:"ville",x:-13,z:.5,ry:0,phi:0,pitch:.3,mode:"start",dialog:null,joy:{x:0,y:0},key:{x:0,y:0},speed:0,near:null,greeted:{},adv:Fa(),mini:null,cine:null};function k_(){try{return JSON.parse(localStorage.getItem(ih)||"null")}catch{return null}}function Wt(){try{localStorage.setItem(ih,JSON.stringify({ui:S.ui,nom:S.nom,photo:S.photo,real:S.real,voice:S.voice,look:S.look,sound:S.sound,adv:S.adv}))}catch{}}var nr=n=>!!S.adv.done[n],_f=n=>{let e=Rt[n];return!!(e.needs&&!nr(e.needs))},Ba=()=>nr("lola"),Ai=()=>1+Math.floor(S.adv.xp/50),H_=()=>Object.values(S.adv.stars).reduce((n,e)=>n+e,0),sh=()=>Object.keys(Sn).filter(n=>S.adv.items[n]).length,V_=()=>["lola","ilunga","junior","mavungu"].every(nr),lf=n=>"Parler "+(/^le /.test(n.short)?n.short.replace(/^le /,"au "):"\xE0 "+n.short),Ys=null;function $s(n,e,t,i,s){if(S.sound)try{Ys=Ys||new(window.AudioContext||window.webkitAudioContext);let r=Ys.createOscillator(),o=Ys.createGain(),a=Ys.currentTime+(s||0);r.type=t||"sine",r.frequency.value=n,o.gain.setValueAtTime(i||.08,a),o.gain.exponentialRampToValueAtTime(.001,a+e),r.connect(o),o.connect(Ys.destination),r.start(a),r.stop(a+e)}catch{}}var Jt={ok:()=>{$s(660,.1),$s(880,.15,"sine",.08,.1)},ko:()=>$s(180,.25,"square",.04),coin:()=>$s(1200,.08,"triangle"),win:()=>{[523,659,784,1047].forEach((n,e)=>$s(n,.18,"sine",.08,e*.12))},step:()=>$s(90,.05,"sine",.02)},Kr=typeof window!="undefined"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance!="undefined",yf=[];function cf(){Kr&&(yf=speechSynthesis.getVoices()||[])}Kr&&(cf(),speechSynthesis.onvoiceschanged=cf);var hf={lola:{g:"f",pitch:.85,rate:.88},ilunga:{g:"f",pitch:1,rate:.95},junior:{g:"h",pitch:1.7,rate:1.05},mavungu:{g:"h",pitch:.75,rate:.9},bea:{g:"f",pitch:1.1,rate:1},mama:{g:"f",pitch:.95,rate:.95},_:{g:"f",pitch:1,rate:.95}};function G_(n){let e=yf.filter(r=>/^fr/i.test(r.lang));if(!e.length)return null;let t=/(julie|hortense|denise|eloise|élodie|amelie|amélie|audrey|marie|brigitte|female|femme|google fran)/i,i=/(paul|henri|claude|thomas|mathieu|male|homme|antoine|lucas)/i;return e.filter(r=>(n==="f"?t:i).test(r.name))[0]||e.find(r=>/google|microsoft/i.test(r.name))||e[0]}var Ia=null;function W_(n){return String(n).replace(/×/g," fois ").replace(/÷/g," divis\xE9 par ").replace(/−/g," moins ").replace(/\+/g," plus ").replace(/=/g," \xE9gale ").replace(/[·★☆🪙🥭⭐✔🔒👗🔊]/g," ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()}function rh(n,e){if(Ia={text:n,id:e},!(!Kr||!S.voice))try{speechSynthesis.cancel();let t=hf[e]||hf._,i=new SpeechSynthesisUtterance(W_(n));i.lang="fr-FR",i.pitch=t.pitch,i.rate=t.rate;let s=G_(t.g);s&&(i.voice=s),speechSynthesis.speak(i)}catch{}}function Mf(){if(Kr)try{speechSynthesis.cancel()}catch{}}function X_(){if(Ia){let n=S.voice;S.voice=!0,rh(Ia.text,Ia.id),S.voice=n}}var Qc="";function q_(n){let e="",t="",i=n.id;if(n.kind==="quiz"){let s=Rt[n.id];if(e=`q|${n.id}|${n.stage}|${n.i}|${n.qi}`,n.stage==="lines")t=s.intro[n.i];else if(n.stage==="q"){let r=n.qs[n.qi];t="Question "+(n.qi+1)+". "+r.q+" R\xE9ponses : "+(n.opts||[]).join(", ")}else n.stage==="fb"?t=(n.fbFirst?"Bravo ! ":"C\u2019est \xE7a. ")+n.qs[n.qi].exp:t=n.rev?"R\xE9vision termin\xE9e : "+n.firsts+" sur "+n.qs.length+" du premier coup.":s.outro}else if(n.kind==="info")e="i|"+n.title+"|"+n.i,t=n.lines[n.i];else if(n.kind==="shop")e="s|"+n.msg,t=n.msg,i="bea";else return;e!==Qc&&(Qc=e,rh(t,i))}var Y_=()=>Kr?'<button class="s" onclick="replay()">\u{1F50A} R\xE9\xE9couter</button>':"",Zr=Ae("cv"),Ri=new Hi({canvas:Zr,antialias:!0,powerPreference:"high-performance"});Ri.setPixelRatio(Math.min(window.devicePixelRatio||1,window.matchMedia&&matchMedia("(pointer:coarse)").matches?1.5:2));Ri.outputColorSpace=tt;Ri.toneMapping=Yi;Ri.toneMappingExposure=.82;Ri.shadowMap.enabled=!0;Ri.shadowMap.type=pc;var Gt=new gi;Gt.fog=new Zo(12374240,.0052);var at=new $t(58,1,.1,900),bf=new Fs(13625599,8022602,.45);Gt.add(bf);var ti=kd(Ri,Gt,at),Pn=new Bs(16773332,3.4);Pn.castShadow=!0;Pn.shadow.mapSize.set(2048,2048);var Ca=34;Object.assign(Pn.shadow.camera,{left:-Ca,right:Ca,top:Ca,bottom:-Ca,near:1,far:160});Pn.shadow.bias=-3e-4;Pn.shadow.normalBias=.05;Pn.shadow.radius=3;Gt.add(Pn);Gt.add(Pn.target);var $_=ti.sky,Sf="kelas_quality",Zs=(()=>{try{let n=localStorage.getItem(Sf);if(n)return n}catch{}return window.matchMedia&&matchMedia("(pointer:coarse)").matches||window.innerWidth<760?"medium":"high"})();function Ef(){ti.setQuality(Zs,Ae("world").clientWidth,Ae("world").clientHeight)}function j_(){Zs=Zs==="high"?"medium":Zs==="medium"?"low":"high";try{localStorage.setItem(Sf,Zs)}catch{}Ef(),zt()}var Z_={high:"\xE9lev\xE9e",medium:"moyenne",low:"basse"};function oh(){let n=Ae("world").clientWidth,e=Ae("world").clientHeight;Ri.setSize(n,e,!1),ti.resize(n,e),at.aspect=n/e,at.fov=n/e<.8?66:n/e<1.2?58:50,at.updateProjectionMatrix()}window.addEventListener("resize",oh);var rn=null,cn=null,mn={},Qi=null,J_={mavungu:{top:[.27,.36,.42,.52],bottom:[.3,.62,.44,.78]},ilunga:{top:[.3,.4,.42,.58],skirt:[.3,.62,.7,.82]},lola:{top:[.3,.34,.7,.46],skirt:[.3,.62,.7,.82]},bea:{top:[.3,.34,.7,.46],skirt:[.3,.62,.7,.82]},mama:{top:[.3,.34,.7,.46],skirt:[.3,.62,.7,.82]}};function K_(n,e){let t=Object.assign({},e);if(window.__FACES&&window.__FACES["portraits/"+n]&&(t.faceKey="portraits/"+n),Ks(n)){let i=J_[n]||{top:[.3,.34,.7,.46],bottom:[.3,.62,.7,.76]};t.fabric={id:n,top:i.top,bottom:i.bottom||[.3,.62,.7,.76],skirt:i.skirt}}return t}function Tf(){let n={};return S.photo&&window.__FACES&&window.__FACES["avatars/"+S.photo]?n.faceKey="avatars/"+S.photo:S.photo==="u"&&es()&&(n.faceUrl=es()),n}function Q_(){return Object.assign({},S.look,{h:.95},Tf())}var Ks=n=>!!(window.__MAN&&(window.__MAN.chars||[]).includes(n));function wf(){return S.real&&Ks(S.real)?Vc(S.real,{walk:Ks(S.real+"w")?S.real+"w":null}):ba(Q_())}function ey(n,e){return Ks(n)?Vc(n):ba(K_(n,e.look))}var Qs={ville:{build:()=>nf(),interior:!1,doors:[{x:-22,z:-5.4,r:1.9,to:"maison",label:"Entrer dans la maison",tx:0,tz:1,phi:-Math.PI/2},{x:42,z:-5.3,r:2.6,to:"classe",label:"Entrer dans l\u2019\xE9cole",ok:()=>Ba(),closed:"Porte ferm\xE9e",tx:0,tz:2.6,phi:-Math.PI/2}]},maison:{build:()=>af(S.adv.items),interior:!0,doors:[{x:0,z:2.5,r:1.9,to:"ville",label:"Sortir",tx:-22,tz:-3.9,phi:Math.PI/2}],spots:[{x:-1.6,z:-2.2,r:1.9,label:"Miroir : changer mon look",run:()=>Va("play")}]},classe:{build:()=>of(),interior:!0,doors:[{x:0,z:4.1,r:1.9,to:"ville",label:"Sortir de l\u2019\xE9cole",tx:42,tz:-3.4,phi:Math.PI/2}]}};function ty(){rn&&Gt.remove(rn.group),cn&&Gt.remove(cn),Object.values(mn).forEach(n=>Gt.remove(n.obj)),mn={}}function er(){ty();let n=Qs[S.sc];rn=n.build(),Gt.add(rn.group),$_.visible=!0,Gt.environment=n.interior?null:ti.envTex,bf.intensity=n.interior?1.9:.45,Gt.fog.density=n.interior?6e-4:.0052,Pn.intensity=n.interior?2.4:3.4,cn=wf(),Gt.add(cn),Object.keys(Rt).filter(e=>Rt[e].sc===S.sc).forEach(e=>uf(e,Rt[e])),Object.keys(_i).filter(e=>_i[e].sc===S.sc).forEach(e=>uf(e,_i[e])),ka()}function uf(n,e){let t=ey(n,e);t.position.set(e.x,0,e.z),t.rotation.y=e.ry||0,Gt.add(t),mn[n]={obj:t,n:e,wave:0,ry:e.ry||0}}var ei=.36;function ny(n,e){let t=n,i=e,s=rn.colliders;for(let a=0;a<s.length;a++){let l=s[a],c=t-l.x,h=i-l.z,u=Math.hypot(c,h),f=l.r+ei;u<f&&u>1e-4&&(t=l.x+c/u*f,i=l.z+h/u*f)}let r=rn.boxes.slice();S.sc==="ville"&&!Ba()&&r.push(rn.dyn.gateBox),r.forEach(a=>{let l=wi(a.x0,a.x1,t),c=wi(a.z0,a.z1,i),h=t-l,u=i-c,f=Math.hypot(h,u);if(f<ei)if(f>1e-4)t=l+h/f*ei,i=c+u/f*ei;else{let d=t-a.x0,g=a.x1-t,_=i-a.z0,m=a.z1-i,p=Math.min(d,g,_,m);p===d?t=a.x0-ei:p===g?t=a.x1+ei:p===_?i=a.z0-ei:i=a.z1+ei}}),Object.keys(mn).forEach(a=>{let l=mn[a].n;if(l.sit)return;let c=t-l.x,h=i-l.z,u=Math.hypot(c,h),f=.5+ei;u<f&&u>1e-4&&(t=l.x+c/u*f,i=l.z+h/u*f)});let o=rn.bounds;return[wi(o.x0,o.x1,t),wi(o.z0,o.z1,i)]}function za(){return new P(S.x,1.35,S.z)}function ah(n){let e=S.mode==="mini"?Math.max(S.pitch,.85):S.pitch;S.mode==="mini"&&(n=Math.max(n,7.5));let t=Math.cos(S.phi)*Math.cos(e),i=Math.sin(S.phi)*Math.cos(e),s=Math.sin(e),r=za();return new P(r.x-t*n,r.y+s*n+.4,r.z-i*n)}var lh=()=>S.camOverride||(Qs[S.sc].interior?3.5:3.9);function ka(){let n=ah(lh());at.position.copy(n),at.lookAt(za())}function iy(n){let e=ah(lh());at.position.lerp(e,1-Math.exp(-n*9)),at.position.y<.6&&(at.position.y=.6),at.lookAt(za())}function ch(){let n=S.adv.done;if(!n.lola)return"Objectif : va \xE0 l\u2019\xE9cole et parle \xE0 Mama Lola, la gardienne du portail.";if(!n.ilunga)return"Objectif : entre dans l\u2019\xE9cole et va voir la Professeure Ilunga.";if(!n.junior)return"Objectif : rejoins Junior, assis dans la classe.";if(!n.mavungu)return"Objectif : le Directeur Mavungu t\u2019attend dans la classe.";let e=sh(),t=Object.keys(Sn).length;return e<t?"Objectif : cueille des mangues, r\xE9vise et meuble ta maison ("+e+"/"+t+").":"Tu as tout accompli ! Continue \xE0 r\xE9viser pour gagner des \xE9toiles."}function kt(){let n=kf();Ae("stats").innerHTML=(n?`<img class="av" src="${n}" alt="">`:"")+"\u{1FA99} "+S.adv.pieces+" \xB7 \u2B50 "+H_()+" \xB7 Niv "+Ai(),S.mode!=="mini"&&(Ae("info").textContent=ch())}function Qr(n,e){let t=Ai();S.adv.pieces+=n,S.adv.xp+=e,Ai()>t&&(Cn("Niveau "+Ai()+" atteint !"+(ji[Ai()]?" Nouvelle tenue d\xE9bloqu\xE9e !":"")),Jt.win()),kt(),Wt()}var df=null;function Cn(n){let e=Ae("toast");e.textContent=n,e.style.display="block",clearTimeout(df),df=setTimeout(()=>{e.style.display="none"},2400)}var ni=null;function ff(n,e,t,i,s){ni={pos:new P(e,i||2.2,t),until:s?performance.now()+s:0};let r=Ae("bubble");r.innerHTML=n,r.style.display="block"}function eo(){ni=null,Ae("bubble").style.display="none"}function sy(){if(!ni)return;if(ni.until&&performance.now()>ni.until){eo();return}let n=ni.pos.clone().project(at),e=Ae("world").clientWidth,t=Ae("world").clientHeight;if(n.z>1){Ae("bubble").style.display="none";return}let i=Ae("bubble");i.style.display="block",i.style.left=wi(70,e-70,(n.x*.5+.5)*e)+"px",i.style.top=wi(60,t-20,(-n.y*.5+.5)*t)+"px"}function ry(){let n=[];if(Object.keys(Rt).forEach(e=>{let t=Rt[e];if(t.sc===S.sc){let i=Ki(S.x,S.z,t.x,t.z);i<(t.kind==="shop"?3.9:2.7)&&n.push({t:"npc",id:e,d:i})}}),Qs[S.sc].doors.forEach((e,t)=>{let i=Ki(S.x,S.z,e.x,e.z);i<e.r&&n.push({t:"door",i:t,d:i})}),(Qs[S.sc].spots||[]).forEach((e,t)=>{let i=Ki(S.x,S.z,e.x,e.z);i<e.r&&n.push({t:"spot",i:t,d:i})}),S.sc==="ville"&&rn.mangoTree){let e=Ki(S.x,S.z,rn.mangoTree.x,rn.mangoTree.z);e<4&&n.push({t:"tree",d:e})}return n.sort((e,t)=>(e.t==="npc"?0:1)-(t.t==="npc"?0:1)||e.d-t.d)}function Af(n){if(!n)return{label:"",enabled:!1,run:null};if(n.t==="npc"){let t=Rt[n.id];return t.kind==="shop"?{label:"Aller au march\xE9",enabled:!0,run:gy}:t.kind==="talk"?{label:lf(t),enabled:!0,run:()=>fy(n.id)}:_f(n.id)?{label:t.short+" est occup\xE9(e), reviens plus tard",enabled:!1,run:null}:nr(n.id)?{label:"R\xE9viser avec "+t.short,enabled:!0,run:()=>pf(n.id,!0)}:{label:lf(t),enabled:!0,run:()=>pf(n.id,!1)}}if(n.t==="tree")return{label:"Cueillir des mangues",enabled:!0,run:Ey};if(n.t==="spot"){let t=Qs[S.sc].spots[n.i];return{label:t.label,enabled:!0,run:t.run}}let e=Qs[S.sc].doors[n.i];return e.ok&&!e.ok()?{label:e.closed,enabled:!1,run:null}:{label:e.label,enabled:!0,run:()=>oy(e)}}function oy(n){S.sc=n.to,S.x=n.tx,S.z=n.tz,S.phi=n.phi,S.near=null,eo(),er()}function kn(n){S.dialog=n,S.mode="dialog",S.joy.x=S.joy.y=0,S.key.x=S.key.y=0,dh(),eo(),zt(),Ae("actwrap").classList.add("hide")}function hh(){if(eh=!1,Mf(),Qc="",Ae("dlg").style.display="none",S.dialog=null,S.ui==="photo"){S.mode="pview",ts.refresh(),kt();return}S.mode="play",Ae("actwrap").classList.remove("hide"),S.sc==="maison"&&er(),kt()}function pf(n,e){let t=Rt[n],i=Ed[t.sujet],s=e?xf(i).slice(0,3):i.slice(0,t.nb);kn({kind:"quiz",id:n,rev:e,stage:e?"q":"lines",i:0,qi:0,qs:s,opts:null,bad:[],qerr:!1,errs:0,firsts:0,gain:0,res:null})}function zt(){let n=S.dialog,e=Ae("dlg");e.style.display="block",e.scrollTop=0;let t="";n.kind==="quiz"?t=ly(n):n.kind==="info"?t=py(n):n.kind==="shop"?t=vy(n):n.kind==="menu"?t=yy(n):n.kind==="profile"?t=Ly(n):n.kind==="objs"&&(t=Oy(n)),e.innerHTML='<div class="box">'+t+(n.kind==="quiz"||n.kind==="info"||n.kind==="shop"?Y_():"")+"</div>",q_(n)}var ay=n=>!!(window.__MAN&&(window.__MAN.portraits||[]).includes(n)),uh=(n,e)=>`<div class="hd">${n&&ay(n)?`<img class="pt" src="img/portraits/${n}.jpg" alt="">`:""}<h3>${_t(e)}</h3></div>`;function ly(n){let e=Rt[n.id],t=uh(n.id,e.name+" \xB7 "+e.role);if(n.stage==="lines")t+=`<p>${_t(e.intro[n.i])}</p><button class="p" onclick="nextLine()">Suite</button>`;else if(n.stage==="q"){let i=n.qs[n.qi];n.opts||(n.opts=xf(i.c)),t+=`<p><b>${_t(n.rev?"R\xE9vision \xB7 ":"")}Question ${n.qi+1} sur ${n.qs.length}</b> : ${_t(i.q)}</p>`,n.bad.length&&(t+='<p class="ko">Pas tout \xE0 fait. R\xE9fl\xE9chis encore !</p>'),t+=n.opts.map((s,r)=>`<button ${n.bad.indexOf(s)>=0?"disabled":""} onclick="answerQ(${r})">${_t(s)}</button>`).join(""),t+='<button class="s" onclick="closeDialog()">Quitter</button>'}else if(n.stage==="fb"){let i=n.qs[n.qi];t+=`<p class="ok"><b>${n.fbFirst?"Bravo !":"C\u2019est \xE7a."}</b> ${_t(i.exp)}</p><button class="p" onclick="nextQ()">Suite</button>`}else{let i=n.res;n.rev?t+=`<p>R\xE9vision termin\xE9e : ${n.firsts} sur ${n.qs.length} du premier coup. <b>+${n.gain} \u{1FA99}</b></p>`:t+=`<p>${_t(e.outro)}</p><p><b>${"\u2605".repeat(i.stars)+"\u2606".repeat(3-i.stars)}</b> \xB7 +${n.gain} \u{1FA99}${i.tissu?" \xB7 +"+i.tissu+" tissu wax":""}</p>`,t+='<button class="p" onclick="closeDialog()">Continuer</button>'}return t}function cy(){let n=S.dialog,e=Rt[n.id];n.i++,n.i>=e.intro.length&&(n.stage="q",n.qi=0,n.opts=null),zt()}function hy(n){let e=S.dialog,t=e.qs[e.qi],i=e.opts[n];if(i!==t.a){e.bad.push(i),e.qerr=!0,e.errs++,Jt.ko(),zt();return}let s=!e.qerr;S.adv.total++,s&&(S.adv.good++,e.firsts++);let r=e.rev?s?2:0:s?5:1;e.gain+=r,e.fbFirst=s,Qr(r,s?e.rev?4:10:3),Jt.ok(),e.stage="fb",zt()}function uy(){let n=S.dialog;n.qi++,n.opts=null,n.bad=[],n.qerr=!1,n.qi>=n.qs.length?(dy(n),n.stage="out"):n.stage="q",zt()}function dy(n){if(n.rev){Wt();return}let e=n.id,t=n.errs===0?3:n.errs<=2?2:1;S.adv.done[e]=!0,S.adv.stars[e]=Math.max(S.adv.stars[e]||0,t),n.gain+=10,Qr(10,10);let i=0;e==="mavungu"&&(S.adv.pieces+=20,S.adv.tissu+=2,i=2,n.gain+=20),n.res={stars:t,tissu:i};let s=S.ui==="photo"?[]:zy(e);s.length&&setTimeout(()=>Cn("D\xE9bloqu\xE9 : "+s.join(", ")),900),Jt.win(),Wt(),kt(),setTimeout(Rf,0)}function fy(n){let e=Rt[n];kn({kind:"info",id:n,title:e.name+" \xB7 "+e.role,i:0,lines:["Bonjour "+S.nom+" !",ch().replace("Objectif : ","Ton objectif : "),"Ta partie est sauvegard\xE9e automatiquement. Repose-toi quand tu veux."]})}function py(n){let e=n.i>=n.lines.length-1;return uh(n.id,n.title)+`<p>${_t(n.lines[n.i])}</p><button class="p" onclick="${e?"closeDialog()":"infoNext()"}">${e?"Fermer":"Suite"}</button>`}function my(){S.dialog.i++,zt()}function gy(){kn({kind:"shop",msg:"Bienvenue au march\xE9, "+S.nom+" !"})}function vy(n){let e=S.adv,t=uh("bea","Maman B\xE9a \xB7 Marchande")+`<p>${_t(n.msg)}</p><p class="row"><span>Mes pi\xE8ces</span><b>${e.pieces} \u{1FA99}</b></p><p class="row"><span>Mes mangues \xB7 tissu wax</span><b>${e.mangues} \u{1F96D} \xB7 ${e.tissu}</b></p>`;return e.mangues>0&&(t+=`<button onclick="sellMangoes()">Vendre mes ${e.mangues} mangues (+${e.mangues*2} \u{1FA99})</button>`),t+=Object.keys(Sn).map(i=>{let s=Sn[i];return e.items[i]?`<button disabled>\u2714 ${_t(s.n)} (dans ta maison)</button>`:`<button onclick="buy('${i}')">${_t(s.n)} \u2014 ${s.p} \u{1FA99}${s.t?" + "+s.t+" tissu wax":""}</button>`}).join(""),S.ui!=="photo"&&(t+='<button onclick="shopMode()">\u{1F457} Mode : essayer tenues et coiffures</button>'),t+'<button class="s" onclick="closeDialog()">Quitter le march\xE9</button>'}function xy(){let n=S.adv,e=n.mangues;e&&(n.mangues=0,Qr(e*2,0),Jt.coin(),S.dialog.msg="Merci ! Tes "+e+" mangues sont vendues : +"+e*2+" pi\xE8ces.",zt())}function _y(n){let e=Sn[n],t=S.adv,i=S.dialog;if(!t.items[n]){if(t.pieces<e.p){i.msg="Il te manque "+(e.p-t.pieces)+" pi\xE8ces pour : "+e.n+".",Jt.ko(),zt();return}if(e.t&&t.tissu<e.t){i.msg="Il te faut du tissu wax. Le Directeur Mavungu en offre \xE0 la fin de la le\xE7on.",Jt.ko(),zt();return}t.pieces-=e.p,e.t&&(t.tissu-=e.t),t.items[n]=!0,Wt(),kt(),Jt.coin(),i.msg="Achat r\xE9ussi : "+e.n+" ! Elle est install\xE9e dans ta maison.",zt(),setTimeout(Rf,0)}}function Rf(){S.adv.fin||!V_()||sh()<Object.keys(Sn).length||(S.adv.fin=!0,Wt(),Jt.win(),(S.mode==="play"||S.mode==="dialog")&&kn({kind:"info",title:"F\xE9licitations !",i:0,lines:[S.nom+", tu as termin\xE9 la le\xE7on et meubl\xE9 toute ta maison !","Tu es un vrai champion de LEXARIS ACAD\xC9MIE. Continue \xE0 r\xE9viser pour gagner trois \xE9toiles partout."]}))}function Cf(){(S.mode==="play"||S.mode==="pview")&&kn({kind:"menu"})}function yy(){let n=S.adv,e=kf();return`<div class="hd">${e?`<img class="pt" src="${e}" alt="">`:""}<h3>${_t(S.nom)} \xB7 Niveau ${Ai()}</h3></div><p class="row"><span>Pi\xE8ces</span><b>${n.pieces} \u{1FA99}</b></p><p class="row"><span>Tissu wax \xB7 mangues</span><b>${n.tissu} \xB7 ${n.mangues} \u{1F96D}</b></p><p class="row"><span>R\xE9ponses justes du premier coup</span><b>${n.good}/${n.total}</b></p><h4>Le\xE7ons</h4>`+["lola","ilunga","junior","mavungu"].map(t=>{let i=n.stars[t]||0;return`<div class="row"><span>${_t(Td[Rt[t].sujet])} \xB7 ${_t(Rt[t].name)}</span><b>${n.done[t]?"\u2605".repeat(i)+"\u2606".repeat(3-i):"\u2014"}</b></div>`}).join("")+"<h4>Ma maison</h4>"+Object.keys(Sn).map(t=>`<div class="row"><span>${_t(Sn[t].n)}</span><b>${n.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+`<p style="font-size:12px;margin-top:8px">${_t(ch())}</p><button class="p" onclick="closeDialog()">Fermer</button>`+(S.ui==="photo"?'<button onclick="openCreatorFromPhoto()">\u{1F9CD} Mon personnage (visage, tenue)</button>':"")+`<button onclick="openProfile()">\u{1F4F7} Ma photo de profil</button><button onclick="cycleQuality()">Qualit\xE9 graphique : ${Z_[Zs]}</button><button onclick="toggleSound()">Son : ${S.sound?"activ\xE9":"coup\xE9"}</button><button onclick="toggleVoice()">Lecture \xE0 voix haute : ${S.voice?"activ\xE9e":"coup\xE9e"}</button><button class="s" onclick="resetGame()">${S.dialog&&S.dialog.confirmReset?"Appuie encore pour tout effacer":"Recommencer une nouvelle partie"}</button>`}function My(){S.sound=!S.sound,Wt(),S.ui==="photo"&&(S.sound?ts.ambientOn():ts.ambientOff()),zt()}function by(){S.voice=!S.voice,S.voice||Mf(),Wt(),zt()}var eh=!1;function Sy(){if(!eh){eh=!0,S.dialog.confirmReset=!0,zt();return}try{localStorage.removeItem(ih)}catch{}location.reload()}function Ey(){S.mode="mini",S.mini={t:20,caught:0,list:[],sp:0},eo(),Qi=new st,Gt.add(Qi),Pf(!1),Cn("Attrape les mangues qui tombent !")}var Ty=new He({color:15770908,roughness:.5}),wy=new Bt(.17,12,10);function Ay(n){let e=S.mini,t=rn.mangoTree;if(e.t-=n,e.sp-=n,e.sp<=0){e.sp=.5+Math.random()*.4;let i=Math.random()*6.28,s=Math.random()*3.4,r=new ge(wy,Ty);r.scale.y=1.25,r.castShadow=!0,r.position.set(t.x+Math.cos(i)*s,6.2,t.z+Math.sin(i)*s),Qi.add(r),e.list.push({mesh:r,v:0})}e.list=e.list.filter(i=>{i.v+=7*n,i.mesh.position.y-=i.v*n,i.mesh.rotation.x+=n*4;let s=i.mesh.position;return s.y<1.9&&s.y>.2&&Ki(s.x,s.z,S.x,S.z)<.95?(e.caught++,Jt.coin(),Qi.remove(i.mesh),!1):s.y<=.17&&(s.y=.17,i.v=0,i.gone=(i.gone||0)+n,i.gone>.5)?(Qi.remove(i.mesh),!1):!0}),Ae("info").textContent="Mangues attrap\xE9es : "+e.caught+" \xB7 temps : "+Math.max(0,Math.ceil(e.t))+" s",e.t<=0&&If()}function Pf(n){rn.mangoTree.obj.children.forEach(e=>{e.userData.canopy&&(e.visible=n)})}function If(){let n=S.mini.caught;Pf(!0),Gt.remove(Qi),Qi=null,S.mini=null,S.mode="play",S.adv.mangues+=n,Wt(),Cn(n?"+"+n+" mangues dans ton panier ! Vends-les \xE0 Maman B\xE9a.":"Aucune mangue cette fois\u2026"),n&&Jt.win(),Qr(0,n),kt()}var Jr=Ae("joy"),Lf=Ae("knob"),Ha=null;function dh(){Ha=null,Lf.style.transform="translate(0,0)",S.joy.x=S.joy.y=0}function Df(n){let e=Jr.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=e.width/2-4,r=n.clientX-t,o=n.clientY-i,a=Math.hypot(r,o);a>s&&(r=r/a*s,o=o/a*s),Lf.style.transform=`translate(${r}px,${o}px)`,S.joy.x=r/s,S.joy.y=-o/s}Jr.addEventListener("pointerdown",n=>{n.preventDefault(),Ha=n.pointerId,Jr.setPointerCapture(n.pointerId),Df(n)});Jr.addEventListener("pointermove",n=>{n.pointerId===Ha&&(n.preventDefault(),Df(n))});["pointerup","pointercancel","lostpointercapture"].forEach(n=>Jr.addEventListener(n,e=>{e.pointerId===Ha&&dh()}));var Ua=null,La=0,th=0;Zr.addEventListener("pointerdown",n=>{S.mode!=="play"&&S.mode!=="mini"&&S.mode!=="creator"||(Ua=n.pointerId,La=n.clientX,th=n.clientY,Zr.setPointerCapture(n.pointerId))});Zr.addEventListener("pointermove",n=>{n.pointerId===Ua&&(S.mode==="creator"?Dt.ang-=(n.clientX-La)*.012:(S.phi+=(n.clientX-La)*.006,S.pitch=wi(.12,1.1,S.pitch+(n.clientY-th)*.004)),La=n.clientX,th=n.clientY)});["pointerup","pointercancel"].forEach(n=>Zr.addEventListener(n,e=>{e.pointerId===Ua&&(Ua=null)}));var Js={},Na={ArrowUp:"u",w:"u",z:"u",ArrowDown:"d",s:"d",ArrowLeft:"l",a:"l",q:"l",ArrowRight:"r",d:"r"};function Uf(){S.key.y=(Js.u?1:0)-(Js.d?1:0),S.key.x=(Js.r?1:0)-(Js.l?1:0)}document.addEventListener("keydown",n=>{n.target&&n.target.tagName==="INPUT"||(Na[n.key]&&(Js[Na[n.key]]=!0,Uf(),n.preventDefault()),!(S.mode!=="play"&&S.mode!=="mini")&&((n.key==="e"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),Nf()),n.key==="m"&&Cf(),n.key==="ArrowLeft"&&n.shiftKey&&(S.phi-=.1)))});document.addEventListener("keyup",n=>{Na[n.key]&&(Js[Na[n.key]]=!1,Uf())});var nh=null;function Nf(){if(S.mode==="mini")return If();S.mode==="play"&&nh&&nh()}Ae("ba").addEventListener("click",Nf);Ae("menu").addEventListener("click",Cf);var mf=performance.now(),jc=0,Zc=0,Jc=3,gf=0;function vf(n,e){let t=e-n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}function Of(n){requestAnimationFrame(Of);let e=Math.min(.05,(n-mf)/1e3);if(mf=n,jc+=e,!rn||S.ui==="photo"&&S.mode!=="creator")return;let t=S.mode==="play"||S.mode==="mini",i=0;if(t){let s=S.joy.x+S.key.x,r=S.joy.y+S.key.y,o=Math.min(1,Math.hypot(s,r));if(o>.1){let a=Math.cos(S.phi),l=Math.sin(S.phi),c=-l,h=a,u=a*r+c*s,f=l*r+h*s,d=Math.hypot(u,f);u/=d,f/=d,i=o<.7?o/.7*2.5:2.5+(o-.7)/.3*2.1;let[g,_]=ny(S.x+u*i*e,S.z+f*i*e);S.x=g,S.z=_;let m=Math.atan2(u,f);S.ry+=vf(S.ry,m)*Math.min(1,e*12),S.lean=s*Math.min(1,o),Zc+=e*i,Zc>1.2&&(Zc=0,Jt.step())}}if(i===0&&(S.lean=0),S.speed=i,cn.position.set(S.x,0,S.z),cn.rotation.y=S.ry,cn.userData.update(e,{speed:i,pose:S.mode==="creator"?"creator":"",cam:at.position,lean:S.lean||0}),Object.keys(mn).forEach(s=>{let r=mn[s],o=r.n,a=Ki(S.x,S.z,o.x,o.z),l=S.dialog&&S.dialog.id===s&&S.mode==="dialog",c=o.ry||0;!o.sit&&(l||a<5)&&(c=Math.atan2(S.x-o.x,S.z-o.z)),o.sit&&l&&(c=Math.atan2(S.x-o.x,S.z-o.z)*.3+(o.ry||0)*.7),r.ry+=vf(r.ry,c)*Math.min(1,e*5),r.obj.rotation.y=r.ry,r.wave>0&&(r.wave-=e),r.obj.userData.update(e,{cam:at.position,talk:l||!!_i[s]&&ni&&ni.who===s,wave:r.wave>0,sit:!!o.sit})}),rn.update(e,jc,{open:Ba()}),Pn.position.set(S.x+ti.sunDir.x*70,ti.sunDir.y*70,S.z+ti.sunDir.z*70),Pn.target.position.set(S.x,0,S.z),S.mode==="cine")Cy(e);else if(S.mode==="creator"){let s=cn.position,r=Ae("world").clientWidth,o=Ae("world").clientHeight,a=r>o*1.25;at.fov!==30&&(at.fov=30,at.updateProjectionMatrix());let l=Dt.ang,c=2.35,h=new P(s.x+Math.sin(l)*c,1.45,s.z+Math.cos(l)*c);at.position.lerp(h,1-Math.exp(-e*8)),at.lookAt(s.x,1.08,s.z),a?at.setViewOffset(r,o,r*.2,0,r,o):at.clearViewOffset()}else if(S.mode==="start"){let s=jc*.08;at.position.set(8+Math.cos(s)*34,9,2+Math.sin(s)*22),at.lookAt(10,2,-2)}else iy(e);if(ti.follow(),S.mode==="play"){let s=ry(),r=s.find(c=>c.t==="npc");r&&S.near!==r.id&&(S.near=r.id,S.greeted[r.id]||(S.greeted[r.id]=!0,mn[r.id].wave=2.4,ff("Bonjour "+_t(S.nom)+" !",Rt[r.id].x,Rt[r.id].z,Rt[r.id].look.h*1.95,3e3))),!r&&S.near&&(S.near=null);let o=Af(s[0]);nh=o.run;let a=Ae("ba");a.disabled=!o.enabled;let l=Ae("alabel");if(l.textContent!==o.label&&(l.textContent=o.label),Jc-=e,Jc<=0&&(Jc=5,S.sc==="ville"&&!S.near&&!ni)){let c=va[gf%va.length];gf++;let h=c[0]==="J\xE9r\xE9mie"?_i.jer:_i.kasa;Ki(S.x,S.z,h.x,h.z)<16&&ff("<b>"+_t(c[0])+"</b> : "+_t(c[1]),h.x,h.z,h.look.h*1.95,4200)}}else S.mode==="mini"&&(Ay(e),Ae("alabel").textContent="Arr\xEAter la cueillette",Ae("ba").disabled=!1);sy(),ti.render()}function Ry(){S.mode="cine",S.cine={t:0,dur:9},["joy","actwrap","top","info"].forEach(n=>Ae(n).classList.add("hide")),Ae("cine").classList.remove("hide"),Ae("skip").classList.remove("hide"),S.sc="ville",S.x=-13,S.z=.5,S.phi=0,er()}function Cy(n){let e=S.cine;e.t+=n;let t=Math.min(1,e.t/e.dur),i=t*t*(3-2*t),s=new P(60,16,22),r=new P(10,10,26),o=ah(lh()),a;if(t<.6){let c=t/.6,h=c*c*(3-2*c);a=s.clone().lerp(r,h)}else{let c=(t-.6)/.4,h=c*c*(3-2*c);a=r.clone().lerp(o,h)}at.position.copy(a);let l=new P(30,3,-4).lerp(za(),wi(0,1,(t-.45)/.55));at.lookAt(l),e.t>=e.dur&&Ff()}function Ff(){S.cine=null,S.mode="play",["joy","actwrap","top","info"].forEach(n=>Ae(n).classList.remove("hide")),Ae("cine").classList.add("hide"),Ae("skip").classList.add("hide"),ka(),kt(),kn({kind:"info",title:"Bienvenue, "+S.nom+" !",i:0,lines:["Tu es dans ton village. D\xE9place-toi avec le joystick \xE0 gauche, et fais glisser ton doigt sur l\u2019\xE9cran pour tourner la cam\xE9ra.","L\u2019\xE9cole LEXARIS ACAD\xC9MIE est tout \xE0 droite. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues au manguier, vends-les \xE0 Maman B\xE9a et meuble ta maison."]})}Ae("skip").addEventListener("click",()=>{S.mode==="cine"&&Ff()});function Py(){kn({kind:"profile"})}function Iy(){hh(),ts.hide(),Ae("cv").style.display="block",S.sc="ville",S.x=-13,S.z=.5,S.phi=0,er(),Va("photo")}function Ly(){let n=(window.__MAN&&window.__MAN.avatars||[]).filter(t=>t[0]===(S.look.s||"f")),e=["pf1","pf2","ph1","ph2"].map(t=>`<button class="avb${mh()===t?" on":""}" onclick="setChar('${t}')"><img src="img/chars/${t}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("");return`<h3>Mon personnage</h3><div class="chips" style="margin-bottom:8px"><button class="chip${S.real?"":" on"}" onclick="setChar(null)">3D, tous les mouvements (360\xB0)</button><button class="chip" onclick="openCreatorFromPhoto()">Personnaliser visage et tenue</button></div><div class="lb" style="font-size:12px;font-weight:700;margin:4px 0">Ou un personnage photo (de face uniquement)</div><div class="avs" style="margin-bottom:10px">${e}</div><h3>Ma photo de profil</h3><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${S.photo==="c"?" on":""}" onclick="crPhoto('c')" style="width:auto">Mon visage de personnage</button></div><div class="row" style="border:0;gap:8px;margin-bottom:6px"><button class="chip${S.look.s==="f"?" on":""}" onclick="setGenre('f')" style="width:auto">Fille</button><button class="chip${S.look.s==="h"?" on":""}" onclick="setGenre('h')" style="width:auto">Gar\xE7on</button></div><div class="avs">`+n.map(t=>`<button class="avb${S.photo===t?" on":""}" onclick="crPhoto('${t}')"><img src="img/avatars/${t}.jpg" alt=""></button>`).join("")+(es()?`<button class="avb${S.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${es()}" alt=""></button>`:"")+'</div><label class="chip" style="cursor:pointer;display:block;margin-top:8px">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label><button class="p" onclick="closeDialog()">Fermer</button>'}function Dy(n){S.real=n,n&&(S.look.s=n[1]==="f"?"f":"h",S.sexe=S.look.s),Wt(),n&&zf(n),kt(),ts.resume(),zt()}function Uy(n){S.look.s=n,S.sexe=n,Wt(),zt()}function Ny(){kn({kind:"objs"})}function Oy(){let n=sh(),e=Object.keys(Sn).length;return`<h3>Mes objets (${n}/${e})</h3>`+Object.keys(Sn).map(t=>`<div class="row"><span>${_t(Sn[t].n)}</span><b>${S.adv.items[t]?"\u2714":"\u2014"}</b></div>`).join("")+'<p style="font-size:13px;margin-top:8px">Ach\xE8te-les chez Maman B\xE9a, au march\xE9, avec les pi\xE8ces gagn\xE9es en r\xE9pondant aux questions et en cueillant des mangues.</p><button class="p" onclick="closeDialog()">Fermer</button>'}var Bf="kelas_photo_v1";function es(){try{return localStorage.getItem(Bf)}catch{return null}}var Pa={};function zf(n){if(Pa[n])return Pa[n];Pa[n]=null;let e=new Image;return e.onload=()=>{let t=document.createElement("canvas");t.width=t.height=96;let i=t.getContext("2d"),s=e.width,r=e.height*.2,o=Math.max(96/s,96/r),a=s*o,l=e.height*o;i.drawImage(e,(96-a)/2,0,a,l),Pa[n]=t.toDataURL("image/png"),kt()},e.src="img/chars/"+n+".webp",null}function kf(){return S.photo==="c"?zf(mh()):S.photo==="u"?es():S.photo&&window.__MAN&&(window.__MAN.avatars||[]).includes(S.photo)?"img/avatars/"+S.photo+".jpg":null}function Fy(n){S.photo=n,Wt(),kt(),S.dialog&&S.dialog.kind==="profile"?zt():In()}function By(n){let e=n.files&&n.files[0];if(!e)return;let t=new Image,i=URL.createObjectURL(e);t.onload=()=>{let s=document.createElement("canvas");s.width=160,s.height=213;let r=s.getContext("2d"),o=Math.max(160/t.width,213/t.height),a=t.width*o,l=t.height*o;r.drawImage(t,(160-a)/2,(213-l)/2,a,l),URL.revokeObjectURL(i);try{let c=r.getImageData(68,95,24,30).data,h=0,u=0,f=0,d=c.length/4;for(let g=0;g<c.length;g+=4)h+=c[g],u+=c[g+1],f+=c[g+2];window.__FACES=Object.assign(window.__FACES||{},{_user:{x:.2,y:.1,w:.6,h:.45,skin:"#"+[h,u,f].map(g=>Math.round(g/d).toString(16).padStart(2,"0")).join("")}}),zc(window.__FACES)}catch{}try{localStorage.setItem(Bf,s.toDataURL("image/jpeg",.82)),S.photo="u",Wt(),kt(),S.dialog&&S.dialog.kind==="profile"?zt():In(),Cn("Ta photo est enregistr\xE9e sur cet appareil.")}catch{Cn("Impossible d\u2019enregistrer la photo.")}},t.onerror=()=>Cn("Cette image ne peut pas \xEAtre lue."),t.src=i}var tr={hair:Or,acc:Fr,outfit:yi},Dt={tab:"perso",prev:null,from:"play",ang:0};function zn(n,e){let t=tr[n][e];if(!t)return!1;if(t.own||t.unlock&&nr(t.unlock)||S.adv.bought[n+":"+e])return!0;if(n==="outfit"){for(let i in ji)if(Ai()>=+i&&ji[i].outfits.indexOf(e)>=0)return!0}return!1}function Da(n,e){let t=tr[n][e];if(t.price)return t.price+" \u{1FA99}";if(t.unlock)return"Qu\xEAte : "+Rt[t.unlock].name;for(let i in ji)if(ji[i].outfits&&ji[i].outfits.indexOf(e)>=0)return"Niveau "+i;return""}function zy(n){let e=[];return[["hair",Or],["acc",Fr],["outfit",yi]].forEach(t=>Object.keys(t[1]).forEach(i=>{t[1][i].unlock===n&&e.push(t[1][i].n)})),e}function Hf(){let n=S.look,e=[];return zn("hair",n.hair)||e.push({kind:"hair",id:n.hair}),zn("outfit",n.outfit)||e.push({kind:"outfit",id:n.outfit}),n.acc.forEach(t=>{zn("acc",t)||e.push({kind:"acc",id:t})}),e}function to(){let n=cn;cn=wf(),cn.position.set(S.x,0,S.z),cn.rotation.y=S.ry,Gt.add(cn),n&&(Gt.remove(n),n.traverse(e=>{e.geometry&&e.geometry.dispose()}))}var Kc=!1;function no(){Kc||(Kc=!0,requestAnimationFrame(()=>{Kc=!1,to()}))}function Oa(n){["joy","actwrap","top","info"].forEach(e=>Ae(e).classList.toggle("hide",!n))}function Va(n){Dt.from=n,Dt.tab="perso",Dt.prev=JSON.parse(JSON.stringify(S.look)),S.mode="creator",S.joy.x=S.joy.y=0,S.key.x=S.key.y=0,dh(),eo(),Dt.ang=0,S.ry=0,to(),Oa(!1),Ae("creator").classList.remove("hide");{let e=!!S.real,t=cn.position;at.fov=30,at.updateProjectionMatrix(),at.position.set(t.x,e?1.25:1.45,t.z+(e?3.9:2.35))}In()}function ky(){let n=S.look,e=Dt.prev;if(zn("hair",n.hair)||(n.hair=e.hair),zn("outfit",n.outfit)||(n.outfit=e.outfit),n.acc=n.acc.filter(t=>zn("acc",t)),Wt(),to(),Ae("creator").classList.add("hide"),at.clearViewOffset(),oh(),Dt.from==="photo"){Ae("cv").style.display="none",S.mode="pview",Oa(!0),["joy","actwrap"].forEach(t=>Ae(t).classList.add("hide")),ts.resume(),kt();return}Dt.from==="start"?Ry():(S.mode="play",Oa(!0),ka(),kt())}var Bn=(n,e,t,i)=>`<button class="chip${e?" on":""}" onclick="${t}">${n}${i?`<small>${i}</small>`:""}</button>`,jr=(n,e,t)=>`<button class="swt${e?" on":""}" style="background:${n}" onclick="${t}" aria-label="couleur"></button>`,js=(n,e)=>`<label class="sl"><span>${n}</span><input type="range" min="0" max="100" value="${Math.round(S.look[e]*100)}" oninput="crSlide('${e}',this.value)"></label>`;function In(){let n=S.look,e=S.real?[["perso","Personnage"],["photo","Photo"]]:[["perso","Personnage"],["visage","Visage"],["cheveux","Cheveux"],["teint","Teint"],["acc","Accessoires"],["tenue","Tenue"],["photo","Photo"]];e.some(s=>s[0]===Dt.tab)||(Dt.tab="perso");let t=`<div class="crh"><b>Mon personnage</b><span>\u{1FA99} ${S.adv.pieces}</span><button class="p" onclick="creatorDone()">Terminer</button></div>`;if(t+='<div class="tabs">'+e.map(s=>`<button class="${Dt.tab===s[0]?"on":""}" onclick="crTab('${s[0]}')">${s[1]}</button>`).join("")+'</div><div class="crb">',Dt.tab==="perso")t+='<div class="lb">Style de personnage</div><div class="chips">'+Bn("R\xE9aliste (photo)",!!S.real,"crStyle('real')")+Bn("3D personnalisable",!S.real,"crStyle('3d')")+"</div>",S.real?t+='<div class="lb">Choisis ton personnage</div><div class="avs">'+["pf1","pf2","ph1","ph2"].map(s=>`<button class="avb${S.real===s?" on":""}" onclick="crChar('${s}')"><img src="img/chars/${s}.webp" alt="" style="object-fit:contain;object-position:top"></button>`).join("")+"</div>":t+='<p style="font-size:13px;margin:8px 0">R\xE8gle le visage, les cheveux, le teint, les accessoires et la tenue avec les onglets.</p>';else if(Dt.tab==="visage")t+=js("Largeur du visage","faceW")+js("M\xE2choire","jaw")+js("Taille des yeux","eyeS")+js("Nez","nose")+js("L\xE8vres","lips")+js("Joues roses","blush"),t+='<div class="lb">Sourcils</div><div class="chips">'+["Fins","\xC9pais","Arqu\xE9s"].map((s,r)=>Bn(s,n.brow===r,`crSet('brow',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des yeux</div><div class="sws">'+Ur.map((s,r)=>jr(s,n.eyeC===r,`crSet('eyeC',${r})`)).join("")+"</div>",t+='<div class="lb">Couleur des l\xE8vres</div><div class="sws">'+Nr.map((s,r)=>jr(s,n.lipC===r,`crSet('lipC',${r})`)).join("")+"</div>",n.s==="h"&&(t+='<div class="lb">Barbe</div><div class="chips">'+["Aucune","L\xE9g\xE8re","Compl\xE8te"].map((s,r)=>Bn(s,n.beard===r,`crSet('beard',${r})`)).join("")+"</div>");else if(Dt.tab==="cheveux")t+='<div class="lb">Coiffure</div><div class="chips">'+Object.keys(Or).map(s=>Bn(Or[s].n,n.hair===s,`crHair('${s}')`,zn("hair",s)?"":"\u{1F512} "+Da("hair",s))).join("")+"</div>",t+='<div class="lb">Couleur des cheveux</div><div class="sws">'+xa.map((s,r)=>jr(s,n.hairC===r,`crSet('hairC',${r})`)).join("")+"</div>";else if(Dt.tab==="teint")t+='<div class="lb">Je suis</div><div class="chips">'+Bn("Une fille",n.s==="f","crSet('s','f')")+Bn("Un gar\xE7on",n.s==="h","crSet('s','h')")+"</div>",t+='<div class="lb">Teint de la peau</div><div class="sws">'+Hs.map((s,r)=>jr(s,n.skin===r,`crSet('skin',${r})`)).join("")+"</div>";else if(Dt.tab==="acc")t+='<div class="lb">Accessoires</div><div class="chips">'+Object.keys(Fr).map(s=>Bn(Fr[s].n,n.acc.indexOf(s)>=0,`crAcc('${s}')`,zn("acc",s)?"":"\u{1F512} "+Da("acc",s))).join("")+"</div>";else if(Dt.tab==="photo"){let s=(window.__MAN&&window.__MAN.avatars||[]).filter(r=>r[0]===n.s);t+='<div class="lb">Ma photo de profil</div><div class="avs">'+s.map(r=>`<button class="avb${S.photo===r?" on":""}" onclick="crPhoto('${r}')"><img src="img/avatars/${r}.jpg" alt=""></button>`).join("")+(es()?`<button class="avb${S.photo==="u"?" on":""}" onclick="crPhoto('u')"><img src="${es()}" alt=""></button>`:"")+"</div>",t+='<div class="chips" style="margin-top:8px"><label class="chip" style="cursor:pointer">\u{1F4F7} Ajouter ma propre photo<small>Reste sur cet appareil</small><input type="file" accept="image/*" style="display:none" onchange="crUpload(this)"></label>'+Bn("Aucune photo",!S.photo,"crPhoto(null)")+"</div>"}else t+='<div class="lb">Tenue</div><div class="chips">'+Object.keys(yi).map(s=>Bn(yi[s].n,n.outfit===s,`crOutfit('${s}')`,zn("outfit",s)?"":"\u{1F512} "+Da("outfit",s))).join("")+"</div>",t+='<div class="lb">Couleur de la tenue</div><div class="sws">'+_a.map((s,r)=>jr(s,n.outfitC===r,`crSet('outfitC',${r})`)).join("")+"</div>";t+="</div>";let i=Hf();if(i.length){let s=i.reduce((r,o)=>r+(tr[o.kind][o.id].price||0),0);t+=`<div class="buy"><span>Essayage : ${i.map(r=>_t(tr[r.kind][r.id].n)).join(", ")} \u2014 ${s} \u{1FA99}</span><button class="p" onclick="crBuy()">Acheter</button></div>`}Ae("creator").innerHTML=t}function Hy(n){if(n==="real"){let e=["pf1","pf2","ph1","ph2"].some(Ks);S.real=e?S.look.s==="f"?"pf1":"ph1":null}else S.real=null;to(),In()}function Vy(n){S.real=n,S.look.s=n[1]==="f"?"f":"h",S.sexe=S.look.s,to(),In()}function Gy(n){Dt.tab=n,In()}function Wy(n,e){S.look[n]=e/100,no()}function Xy(n,e){S.look[n]=e,n==="s"&&(S.sexe=e,e==="f"&&S.look.beard&&(S.look.beard=0)),no(),In()}function fh(n,e){let t=tr[n][e];return zn(n,e)||t.price?!0:(Cn(Da(n,e)+" pour d\xE9bloquer : "+t.n),Jt.ko(),!1)}function qy(n){fh("hair",n)&&(S.look.hair=n,no(),In())}function Yy(n){fh("outfit",n)&&(S.look.outfit=n,no(),In())}function $y(n){let e=S.look.acc,t=e.indexOf(n);if(t>=0)e.splice(t,1);else{if(!fh("acc",n))return;e.push(n)}no(),In()}function jy(){let n=Hf(),e=n.reduce((t,i)=>t+(tr[i.kind][i.id].price||0),0);if(S.adv.pieces<e){Cn("Il te manque "+(e-S.adv.pieces)+" pi\xE8ces."),Jt.ko();return}S.adv.pieces-=e,n.forEach(t=>{S.adv.bought[t.kind+":"+t.id]=!0}),Wt(),kt(),Jt.coin(),Cn("Achat r\xE9ussi !"),In()}function Zy(){hh(),Va("play")}function ph(n){S.sexe=n,S.look.s=n,n==="f"&&S.look.beard&&(S.look.beard=0),Ae("fille").className=n==="f"?"p":"",Ae("garcon").className=n==="h"?"p":""}Ae("fille").onclick=()=>ph("f");Ae("garcon").onclick=()=>ph("h");function Vf(n){Ae("start").classList.add("hide"),Ae("cv").style.display="none",Oa(!0),["joy","actwrap"].forEach(e=>Ae(e).classList.add("hide")),Ae("cine").classList.add("hide"),S.ui="photo",S.mode="pview",ts.show("village"),kt(),n&&kn({kind:"info",title:"Bienvenue, "+S.nom+" !",i:0,lines:["Tu es devant ta maison, dans ton quartier de Kinshasa. Touche les fl\xE8ches pour te d\xE9placer, touche les personnes pour leur parler, et fais glisser ton doigt pour regarder autour de toi.","Ton but : aller \xE0 l\u2019\xE9cole LEXARIS ACAD\xC9MIE. Mama Lola garde le portail : r\xE9ponds \xE0 ses questions pour entrer.","En chemin, cueille des mangues, vends-les \xE0 Maman B\xE9a au march\xE9, et gagne des pi\xE8ces."]})}function Gf(n){Ae("start").classList.add("hide"),S.sc="ville",S.x=-13,S.z=.5,S.phi=0,n?(er(),S.mode="creator",Va("start")):(S.mode="play",["joy","actwrap"].forEach(e=>Ae(e).classList.remove("hide")),er(),kt())}Ae("go").onclick=()=>{let n=Ae("nom").value.trim();if(!n){Ae("nom").focus();return}S.ui="3d",S.photo=S.sexe==="f"?"f1":"h1",Ae("cv").style.display="block",S.nom=n,S.adv=Fa(),S.real=null,S.look=Object.assign({},Br,{acc:[],s:S.sexe,hair:S.sexe==="f"?"tresses":"courtes"}),Wt(),Gf(!0)};Ae("go3d").onclick=()=>{let n=Ae("nom").value.trim();if(!n){Ae("nom").focus();return}S.nom=n,S.adv=Fa(),S.ui="photo",S.look=Object.assign({},Br,{acc:[],s:S.sexe}),S.real=null,S.photo=S.sexe==="f"?"f1":"h1",Wt(),Vf(!0)};Ae("cont").onclick=()=>{S.ui==="photo"?Vf(!1):(Ae("cv").style.display="block",Gf(!1))};Object.assign(window,{cycleQuality:j_,openCreatorFromPhoto:Iy,setChar:Dy,openProfile:Py,setGenre:Uy,replay:X_,toggleVoice:by,crStyle:Hy,crChar:Vy,crPhoto:Fy,crUpload:By,crTab:Gy,crSlide:Wy,crSet:Xy,crHair:qy,crOutfit:Yy,crAcc:$y,crBuy:jy,creatorDone:ky,shopMode:Zy,nextLine:cy,answerQ:hy,nextQ:uy,closeDialog:hh,infoNext:my,sellMangoes:xy,buy:_y,toggleSound:My,resetGame:Sy,__G:S,__snap:()=>ka(),__dbg:()=>({cam:at.position.toArray().map(n=>+n.toFixed(1)),bea:mn.bea&&mn.bea.obj.position.toArray(),beaVis:mn.bea&&mn.bea.obj.visible,n:Object.keys(mn)})});var mh=()=>["pf1","pf2","ph1","ph2"].includes(S.real)?S.real:S.look.s==="f"?"pf1":"ph1",Jy=()=>ba(Object.assign({},S.look,{h:1},Tf())),Wf={makePlayer3D:Jy,playerChar:mh,G:S,NPC:Rt,AUTOP:_i,AUTO:va,actionFor:Af,locked:_f,doneNpc:nr,doorOpen:Ba,toast:Cn,speak:rh,SFX:Jt,gain:Qr,save:Wt,refreshHud:kt,openBox:kn,esc:_t,hasChar:Ks,openObjs:Ny};Hd(Wf);var ts=Wf.photo;function Ky(){let n=k_();oh(),Ef(),n&&n.nom&&(S.nom=n.nom,S.ui=n.ui||"photo",S.photo=n.photo||null,S.real=n.real===void 0?null:n.real,S.voice=n.voice!==!1,S.sound=n.sound!==!1,S.look=Object.assign({},Br,{acc:[]},n.look||{s:n.sexe||"f",skin:n.skin||3}),S.sexe=S.look.s,S.adv=Object.assign(Fa(),n.adv||{}),Ae("nom").value=n.nom,Ae("cont").textContent="Continuer \xB7 "+n.nom+" (niveau "+Ai()+")",Ae("cont").classList.remove("hide"),Ae("go").textContent="Nouvelle partie",Ae("go").className=""),ph(S.sexe),kt(),S.sc="ville",S.x=-13,S.z=.5,S.phi=0,S.ui!=="photo"||!n||n.nom,Ae("cv").style.display="none",Ae("lb").style.width="100%",setTimeout(()=>{Ae("load").classList.add("hide"),Ae("start").classList.remove("hide")},150),S.mode="start",requestAnimationFrame(Of)}fetch("img/manifest.json").then(n=>n.ok?n.json():{}).catch(()=>({})).then(async n=>{window.__MAN=n||{},Ad(n);try{let e=await(await fetch("img/faces.json")).json();window.__FACES=e,zc(e)}catch{window.__FACES={}}(n.scenes||[]).includes("kinshasa")&&(Ae("start").style.backgroundImage="linear-gradient(rgba(10,20,30,.35),rgba(10,20,30,.35)),url(img/scenes/kinshasa.jpg)"),Ky()});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
