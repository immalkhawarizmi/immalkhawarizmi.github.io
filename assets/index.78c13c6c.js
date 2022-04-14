const Wl=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Wl();function Bs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zl=Bs(Kl);function sa(t){return!!t||t===""}function js(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?Jl(r):js(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ge(t))return t;if(he(t))return t}}const ql=/;(?![^(]*\))/g,Gl=/:(.+)/;function Jl(t){const e={};return t.split(ql).forEach(n=>{if(n){const r=n.split(Gl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hs(t){let e="";if(ge(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Hs(t[n]);r&&(e+=r+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ov=t=>ge(t)?t:t==null?"":j(t)||he(t)&&(t.toString===ca||!H(t.toString))?JSON.stringify(t,ia,2):String(t),ia=(t,e)=>e&&e.__v_isRef?ia(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:oa(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!j(e)&&!la(e)?String(e):e,ne={},Zt=[],xe=()=>{},Yl=()=>!1,Xl=/^on[^a-z]/,Rr=t=>Xl.test(t),Vs=t=>t.startsWith("onUpdate:"),me=Object.assign,Ws=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ql=Object.prototype.hasOwnProperty,J=(t,e)=>Ql.call(t,e),j=Array.isArray,en=t=>Or(t)==="[object Map]",oa=t=>Or(t)==="[object Set]",H=t=>typeof t=="function",ge=t=>typeof t=="string",Ks=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",aa=t=>he(t)&&H(t.then)&&H(t.catch),ca=Object.prototype.toString,Or=t=>ca.call(t),Zl=t=>Or(t).slice(8,-1),la=t=>Or(t)==="[object Object]",zs=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rr=Bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},eu=/-(\w)/g,Xe=kr(t=>t.replace(eu,(e,n)=>n?n.toUpperCase():"")),tu=/\B([A-Z])/g,dn=kr(t=>t.replace(tu,"-$1").toLowerCase()),Pr=kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yr=kr(t=>t?`on${Pr(t)}`:""),Dn=(t,e)=>!Object.is(t,e),sr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},dr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mi;const nu=()=>Mi||(Mi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let et;class ru{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&et&&(this.parent=et,this.index=(et.scopes||(et.scopes=[])).push(this)-1)}run(e){if(this.active)try{return et=this,e()}finally{et=this.parent}}on(){et=this}off(){et=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function su(t,e=et){e&&e.active&&e.effects.push(t)}const qs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ua=t=>(t.w&Et)>0,fa=t=>(t.n&Et)>0,iu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Et},ou=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ua(s)&&!fa(s)?s.delete(t):e[n++]=s,s.w&=~Et,s.n&=~Et}e.length=n}},hs=new WeakMap;let In=0,Et=1;const ps=30;let ze;const Mt=Symbol(""),gs=Symbol("");class Gs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,su(this,r)}run(){if(!this.active)return this.fn();let e=ze,n=bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ze,ze=this,bt=!0,Et=1<<++In,In<=ps?iu(this):Di(this),this.fn()}finally{In<=ps&&ou(this),Et=1<<--In,ze=this.parent,bt=n,this.parent=void 0}}stop(){this.active&&(Di(this),this.onStop&&this.onStop(),this.active=!1)}}function Di(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bt=!0;const da=[];function hn(){da.push(bt),bt=!1}function pn(){const t=da.pop();bt=t===void 0?!0:t}function Ae(t,e,n){if(bt&&ze){let r=hs.get(t);r||hs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qs()),ha(s)}}function ha(t,e){let n=!1;In<=ps?fa(t)||(t.n|=Et,n=!ua(t)):n=!t.has(ze),n&&(t.add(ze),ze.deps.push(t))}function st(t,e,n,r,s,i){const o=hs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?zs(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),en(t)&&a.push(o.get(gs)));break;case"delete":j(t)||(a.push(o.get(Mt)),en(t)&&a.push(o.get(gs)));break;case"set":en(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&ms(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ms(qs(c))}}function ms(t,e){for(const n of j(t)?t:[...t])(n!==ze||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const au=Bs("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ks)),cu=Js(),lu=Js(!1,!0),uu=Js(!0),xi=fu();function fu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hn();const r=Y(this)[e].apply(this,n);return pn(),r}}),t}function Js(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Cu:ya:e?va:_a).get(r))return r;const o=j(r);if(!t&&o&&J(xi,s))return Reflect.get(xi,s,i);const a=Reflect.get(r,s,i);return(Ks(s)?pa.has(s):au(s))||(t||Ae(r,"get",s),e)?a:pe(a)?!o||!zs(s)?a.value:a:he(a)?t?ba(a):gn(a):a}}const du=ga(),hu=ga(!0);function ga(t=!1){return function(n,r,s,i){let o=n[r];if(xn(o)&&pe(o)&&!pe(s))return!1;if(!t&&!xn(s)&&(Ia(s)||(s=Y(s),o=Y(o)),!j(n)&&pe(o)&&!pe(s)))return o.value=s,!0;const a=j(n)&&zs(r)?Number(r)<n.length:J(n,r),c=Reflect.set(n,r,s,i);return n===Y(i)&&(a?Dn(s,o)&&st(n,"set",r,s):st(n,"add",r,s)),c}}function pu(t,e){const n=J(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&st(t,"delete",e,void 0),r}function gu(t,e){const n=Reflect.has(t,e);return(!Ks(e)||!pa.has(e))&&Ae(t,"has",e),n}function mu(t){return Ae(t,"iterate",j(t)?"length":Mt),Reflect.ownKeys(t)}const ma={get:cu,set:du,deleteProperty:pu,has:gu,ownKeys:mu},_u={get:uu,set(t,e){return!0},deleteProperty(t,e){return!0}},vu=me({},ma,{get:lu,set:hu}),Ys=t=>t,Nr=t=>Reflect.getPrototypeOf(t);function Qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);e!==i&&!n&&Ae(s,"get",e),!n&&Ae(s,"get",i);const{has:o}=Nr(s),a=r?Ys:n?Zs:Ln;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Zn(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return t!==s&&!e&&Ae(r,"has",t),!e&&Ae(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function er(t,e=!1){return t=t.__v_raw,!e&&Ae(Y(t),"iterate",Mt),Reflect.get(t,"size",t)}function Li(t){t=Y(t);const e=Y(this);return Nr(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function Ui(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=Nr(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Dn(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function Fi(t){const e=Y(this),{has:n,get:r}=Nr(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function $i(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function tr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?Ys:t?Zs:Ln;return!t&&Ae(a,"iterate",Mt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function nr(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ys:e?Zs:Ln;return!e&&Ae(i,"iterate",c?gs:Mt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:this}}function yu(){const t={get(i){return Qn(this,i)},get size(){return er(this)},has:Zn,add:Li,set:Ui,delete:Fi,clear:$i,forEach:tr(!1,!1)},e={get(i){return Qn(this,i,!1,!0)},get size(){return er(this)},has:Zn,add:Li,set:Ui,delete:Fi,clear:$i,forEach:tr(!1,!0)},n={get(i){return Qn(this,i,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:tr(!0,!1)},r={get(i){return Qn(this,i,!0,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=nr(i,!1,!1),n[i]=nr(i,!0,!1),e[i]=nr(i,!1,!0),r[i]=nr(i,!0,!0)}),[t,n,e,r]}const[bu,Iu,wu,Eu]=yu();function Xs(t,e){const n=e?t?Eu:wu:t?Iu:bu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const Tu={get:Xs(!1,!1)},Su={get:Xs(!1,!0)},Au={get:Xs(!0,!1)},_a=new WeakMap,va=new WeakMap,ya=new WeakMap,Cu=new WeakMap;function Ru(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ou(t){return t.__v_skip||!Object.isExtensible(t)?0:Ru(Zl(t))}function gn(t){return xn(t)?t:Qs(t,!1,ma,Tu,_a)}function ku(t){return Qs(t,!1,vu,Su,va)}function ba(t){return Qs(t,!0,_u,Au,ya)}function Qs(t,e,n,r,s){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ou(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tn(t){return xn(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function xn(t){return!!(t&&t.__v_isReadonly)}function Ia(t){return!!(t&&t.__v_isShallow)}function wa(t){return tn(t)||xn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Ea(t){return fr(t,"__v_skip",!0),t}const Ln=t=>he(t)?gn(t):t,Zs=t=>he(t)?ba(t):t;function Ta(t){bt&&ze&&(t=Y(t),ha(t.dep||(t.dep=qs())))}function Sa(t,e){t=Y(t),t.dep&&ms(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Pu(t){return Aa(t,!1)}function Nu(t){return Aa(t,!0)}function Aa(t,e){return pe(t)?t:new Mu(t,e)}class Mu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Ln(e)}get value(){return Ta(this),this._value}set value(e){e=this.__v_isShallow?e:Y(e),Dn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ln(e),Sa(this))}}function An(t){return pe(t)?t.value:t}const Du={get:(t,e,n)=>An(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ca(t){return tn(t)?t:new Proxy(t,Du)}class xu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Gs(e,()=>{this._dirty||(this._dirty=!0,Sa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return Ta(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lu(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=xe):(r=t.get,s=t.set),new xu(r,s,i||!s,n)}Promise.resolve();function It(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){zn(i,e,n)}return s}function ke(t,e,n,r){if(H(t)){const i=It(t,e,n,r);return i&&aa(i)&&i.catch(o=>{zn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ke(t[i],e,n,r));return s}function zn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,o,a]);return}}Uu(t,n,s,r)}function Uu(t,e,n,r=!0){console.error(t)}let hr=!1,_s=!1;const Te=[];let tt=0;const Cn=[];let wn=null,Gt=0;const Rn=[];let ht=null,Jt=0;const Ra=Promise.resolve();let ei=null,vs=null;function Oa(t){const e=ei||Ra;return t?e.then(this?t.bind(this):t):e}function Fu(t){let e=tt+1,n=Te.length;for(;e<n;){const r=e+n>>>1;Un(Te[r])<t?e=r+1:n=r}return e}function ka(t){(!Te.length||!Te.includes(t,hr&&t.allowRecurse?tt+1:tt))&&t!==vs&&(t.id==null?Te.push(t):Te.splice(Fu(t.id),0,t),Pa())}function Pa(){!hr&&!_s&&(_s=!0,ei=Ra.then(xa))}function $u(t){const e=Te.indexOf(t);e>tt&&Te.splice(e,1)}function Na(t,e,n,r){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Pa()}function Bu(t){Na(t,wn,Cn,Gt)}function Ma(t){Na(t,ht,Rn,Jt)}function ti(t,e=null){if(Cn.length){for(vs=e,wn=[...new Set(Cn)],Cn.length=0,Gt=0;Gt<wn.length;Gt++)wn[Gt]();wn=null,Gt=0,vs=null,ti(t,e)}}function Da(t){if(Rn.length){const e=[...new Set(Rn)];if(Rn.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,r)=>Un(n)-Un(r)),Jt=0;Jt<ht.length;Jt++)ht[Jt]();ht=null,Jt=0}}const Un=t=>t.id==null?1/0:t.id;function xa(t){_s=!1,hr=!0,ti(t),Te.sort((n,r)=>Un(n)-Un(r));const e=xe;try{for(tt=0;tt<Te.length;tt++){const n=Te[tt];n&&n.active!==!1&&It(n,null,14)}}finally{tt=0,Te.length=0,Da(),hr=!1,ei=null,(Te.length||Cn.length||Rn.length)&&xa(t)}}function ju(t,e,...n){const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ne;h?s=n.map(m=>m.trim()):f&&(s=n.map(dr))}let a,c=r[a=Yr(e)]||r[a=Yr(Xe(e))];!c&&i&&(c=r[a=Yr(dn(e))]),c&&ke(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ke(l,t,6,s)}}function La(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=La(l,e,!0);u&&(a=!0,me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):me(o,i),r.set(t,o),o)}function ni(t,e){return!t||!Rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,dn(e))||J(t,e))}let Oe=null,Mr=null;function pr(t){const e=Oe;return Oe=t,Mr=t&&t.type.__scopeId||null,e}function kv(t){Mr=t}function Pv(){Mr=null}function Hu(t,e=Oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xi(-1);const i=pr(e),o=t(...s);return pr(i),r._d&&Xi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Xr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:I,inheritAttrs:P}=t;let R,O;const w=pr(t);try{if(n.shapeFlag&4){const U=s||r;R=De(u.call(U,U,f,i,m,h,I)),O=c}else{const U=e;R=De(U.length>1?U(i,{attrs:c,slots:a,emit:l}):U(i,null)),O=e.props?c:Wu(c)}}catch(U){On.length=0,zn(U,t,1),R=ye(Pe)}let k=R;if(O&&P!==!1){const U=Object.keys(O),{shapeFlag:W}=k;U.length&&W&7&&(o&&U.some(Vs)&&(O=Ku(O,o)),k=an(k,O))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),R=k,pr(w),R}function Vu(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(mr(r)){if(r.type!==Pe||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Wu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rr(n))&&((e||(e={}))[n]=t[n]);return e},Ku=(t,e)=>{const n={};for(const r in t)(!Vs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!ni(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bi(r,o,l):!0:!!o;return!1}function Bi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ni(n,i))return!0}return!1}function ri({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qu=t=>t.__isSuspense,Gu={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Ju(e,n,r,s,i,o,a,c,l):Yu(t,e,n,r,s,o,a,c,l)},hydrate:Xu,create:si,normalize:Qu},Nv=Gu;function Fn(t,e){const n=t.props&&t.props[e];H(n)&&n()}function Ju(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),h=t.suspense=si(t,s,r,e,f,n,i,o,a,c);l(null,h.pendingBranch=t.ssContent,f,null,r,h,i,o),h.deps>0?(Fn(t,"onPending"),Fn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),nn(h,t.ssFallback)):h.resolve()}function Yu(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:I,pendingBranch:P,isInFallback:R,isHydrating:O}=f;if(P)f.pendingBranch=h,We(h,P)?(c(P,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():R&&(c(I,m,n,r,s,null,i,o,a),nn(f,m))):(f.pendingId++,O?(f.isHydrating=!1,f.activeBranch=P):l(P,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),R?(c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(I,m,n,r,s,null,i,o,a),nn(f,m))):I&&We(h,I)?(c(I,h,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(I&&We(h,I))c(I,h,n,r,s,f,i,o,a),nn(f,h);else if(Fn(e,"onPending"),f.pendingBranch=h,f.pendingId++,c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:w,pendingId:k}=f;w>0?setTimeout(()=>{f.pendingId===k&&f.fallback(m)},w):w===0&&f.fallback(m)}}function si(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:h,um:m,n:I,o:{parentNode:P,remove:R}}=l,O=dr(t.props&&t.props.timeout),w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof O=="number"?O:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(k=!1){const{vnode:U,activeBranch:W,pendingBranch:z,pendingId:$,effects:X,parentComponent:q,container:le}=w;if(w.isHydrating)w.isHydrating=!1;else if(!k){const Ne=W&&z.transition&&z.transition.mode==="out-in";Ne&&(W.transition.afterLeave=()=>{$===w.pendingId&&h(z,le,$e,0)});let{anchor:$e}=w;W&&($e=I(W),m(W,q,w,!0)),Ne||h(z,le,$e,0)}nn(w,z),w.pendingBranch=null,w.isInFallback=!1;let oe=w.parent,fe=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...X),fe=!0;break}oe=oe.parent}fe||Ma(X),w.effects=[],Fn(U,"onResolve")},fallback(k){if(!w.pendingBranch)return;const{vnode:U,activeBranch:W,parentComponent:z,container:$,isSVG:X}=w;Fn(U,"onFallback");const q=I(W),le=()=>{!w.isInFallback||(f(null,k,$,q,z,null,X,a,c),nn(w,k))},oe=k.transition&&k.transition.mode==="out-in";oe&&(W.transition.afterLeave=le),w.isInFallback=!0,m(W,z,null,!0),oe||le()},move(k,U,W){w.activeBranch&&h(w.activeBranch,k,U,W),w.container=k},next(){return w.activeBranch&&I(w.activeBranch)},registerDep(k,U){const W=!!w.pendingBranch;W&&w.deps++;const z=k.vnode.el;k.asyncDep.catch($=>{zn($,k,0)}).then($=>{if(k.isUnmounted||w.isUnmounted||w.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:X}=k;Cs(k,$,!1),z&&(X.el=z);const q=!z&&k.subTree.el;U(k,X,P(z||k.subTree.el),z?null:I(k.subTree),w,o,c),q&&R(q),ri(k,X.el),W&&--w.deps===0&&w.resolve()})},unmount(k,U){w.isUnmounted=!0,w.activeBranch&&m(w.activeBranch,n,k,U),w.pendingBranch&&m(w.pendingBranch,n,k,U)}};return w}function Xu(t,e,n,r,s,i,o,a,c){const l=e.suspense=si(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function Qu(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=ji(r?n.default:n),t.ssFallback=r?ji(n.fallback):ye(Pe)}function ji(t){let e;if(H(t)){const n=$n&&t._c;n&&(t._d=!1,ai()),t=t(),n&&(t._d=!0,e=wt,nc())}return j(t)&&(t=Vu(t)),t=De(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Zu(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Ma(t)}function nn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,ri(r,s))}function ir(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function qe(t,e,n=!1){const r=de||Oe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Hi={};function rn(t,e,n){return Ua(t,e,n)}function Ua(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ne){const a=de;let c,l=!1,u=!1;if(pe(t)?(c=()=>t.value,l=Ia(t)):tn(t)?(c=()=>t,r=!0):j(t)?(u=!0,l=t.some(tn),c=()=>t.map(O=>{if(pe(O))return O.value;if(tn(O))return Pt(O);if(H(O))return It(O,a,2)})):H(t)?e?c=()=>It(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),ke(t,a,3,[h])}:c=xe,e&&r){const O=c;c=()=>Pt(O())}let f,h=O=>{f=R.onStop=()=>{It(O,a,4)}};if(Bn)return h=xe,e?n&&ke(e,a,3,[c(),u?[]:void 0,h]):c(),xe;let m=u?[]:Hi;const I=()=>{if(!!R.active)if(e){const O=R.run();(r||l||(u?O.some((w,k)=>Dn(w,m[k])):Dn(O,m)))&&(f&&f(),ke(e,a,3,[O,m===Hi?void 0:m,h]),m=O)}else R.run()};I.allowRecurse=!!e;let P;s==="sync"?P=I:s==="post"?P=()=>be(I,a&&a.suspense):P=()=>{!a||a.isMounted?Bu(I):I()};const R=new Gs(c,P);return e?n?I():m=R.run():s==="post"?be(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Ws(a.scope.effects,R)}}function ef(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?Fa(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=de;cn(this);const a=Ua(s,i.bind(r),n);return o?cn(o):Dt(),a}function Fa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))Pt(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(oa(t)||en(t))t.forEach(n=>{Pt(n,e)});else if(la(t))for(const n in t)Pt(t[n],e);return t}function tf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Va(()=>{t.isMounted=!0}),Wa(()=>{t.isUnmounting=!0}),t}const Re=[Function,Array],nf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},setup(t,{slots:e}){const n=Hf(),r=tf();let s;return()=>{const i=e.default&&Ba(e.default(),!0);if(!i||!i.length)return;const o=Y(t),{mode:a}=o,c=i[0];if(r.isLeaving)return Qr(c);const l=Vi(c);if(!l)return Qr(c);const u=ys(l,o,r,n);bs(l,u);const f=n.subTree,h=f&&Vi(f);let m=!1;const{getTransitionKey:I}=l.type;if(I){const P=I();s===void 0?s=P:P!==s&&(s=P,m=!0)}if(h&&h.type!==Pe&&(!We(l,h)||m)){const P=ys(h,o,r,n);if(bs(h,P),a==="out-in")return r.isLeaving=!0,P.afterLeave=()=>{r.isLeaving=!1,n.update()},Qr(c);a==="in-out"&&l.type!==Pe&&(P.delayLeave=(R,O,w)=>{const k=$a(r,h);k[String(h.key)]=h,R._leaveCb=()=>{O(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return c}}},rf=nf;function $a(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ys(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:I,onBeforeAppear:P,onAppear:R,onAfterAppear:O,onAppearCancelled:w}=e,k=String(t.key),U=$a(n,t),W=($,X)=>{$&&ke($,r,9,X)},z={mode:i,persisted:o,beforeEnter($){let X=a;if(!n.isMounted)if(s)X=P||a;else return;$._leaveCb&&$._leaveCb(!0);const q=U[k];q&&We(t,q)&&q.el._leaveCb&&q.el._leaveCb(),W(X,[$])},enter($){let X=c,q=l,le=u;if(!n.isMounted)if(s)X=R||c,q=O||l,le=w||u;else return;let oe=!1;const fe=$._enterCb=Ne=>{oe||(oe=!0,Ne?W(le,[$]):W(q,[$]),z.delayedLeave&&z.delayedLeave(),$._enterCb=void 0)};X?(X($,fe),X.length<=1&&fe()):fe()},leave($,X){const q=String(t.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return X();W(f,[$]);let le=!1;const oe=$._leaveCb=fe=>{le||(le=!0,X(),fe?W(I,[$]):W(m,[$]),$._leaveCb=void 0,U[q]===t&&delete U[q])};U[q]=t,h?(h($,oe),h.length<=1&&oe()):oe()},clone($){return ys($,e,n,r)}};return z}function Qr(t){if(Dr(t))return t=an(t),t.children=null,t}function Vi(t){return Dr(t)?t.children?t.children[0]:void 0:t}function bs(t,e){t.shapeFlag&6&&t.component?bs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ba(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Ve?(i.patchFlag&128&&r++,n=n.concat(Ba(i.children,e))):(e||i.type!==Pe)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ja(t){return H(t)?{setup:t,name:t.name}:t}const Is=t=>!!t.type.__asyncLoader,Dr=t=>t.type.__isKeepAlive;function sf(t,e){Ha(t,"a",e)}function of(t,e){Ha(t,"da",e)}function Ha(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dr(s.parent.vnode)&&af(r,e,n,s),s=s.parent}}function af(t,e,n,r){const s=xr(e,t,r,!0);Ka(()=>{Ws(r[e],s)},n)}function xr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hn(),cn(n);const a=ke(e,n,t,o);return Dt(),pn(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=de)=>(!Bn||t==="sp")&&xr(t,e,n),cf=at("bm"),Va=at("m"),lf=at("bu"),uf=at("u"),Wa=at("bum"),Ka=at("um"),ff=at("sp"),df=at("rtg"),hf=at("rtc");function pf(t,e=de){xr("ec",t,e)}let ws=!0;function gf(t){const e=qa(t),n=t.proxy,r=t.ctx;ws=!1,e.beforeCreate&&Wi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:I,activated:P,deactivated:R,beforeDestroy:O,beforeUnmount:w,destroyed:k,unmounted:U,render:W,renderTracked:z,renderTriggered:$,errorCaptured:X,serverPrefetch:q,expose:le,inheritAttrs:oe,components:fe,directives:Ne,filters:$e}=e;if(l&&mf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const Q=o[re];H(Q)&&(r[re]=Q.bind(n))}if(s){const re=s.call(n,n);he(re)&&(t.data=gn(re))}if(ws=!0,i)for(const re in i){const Q=i[re],we=H(Q)?Q.bind(n,n):H(Q.get)?Q.get.bind(n,n):xe,Vt=!H(Q)&&H(Q.set)?Q.set.bind(n):xe,Ze=Ke({get:we,set:Vt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Be=>Ze.value=Be})}if(a)for(const re in a)za(a[re],r,n,re);if(c){const re=H(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Q=>{ir(Q,re[Q])})}u&&Wi(u,t,"c");function ue(re,Q){j(Q)?Q.forEach(we=>re(we.bind(n))):Q&&re(Q.bind(n))}if(ue(cf,f),ue(Va,h),ue(lf,m),ue(uf,I),ue(sf,P),ue(of,R),ue(pf,X),ue(hf,z),ue(df,$),ue(Wa,w),ue(Ka,U),ue(ff,q),j(le))if(le.length){const re=t.exposed||(t.exposed={});le.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:we=>n[Q]=we})})}else t.exposed||(t.exposed={});W&&t.render===xe&&(t.render=W),oe!=null&&(t.inheritAttrs=oe),fe&&(t.components=fe),Ne&&(t.directives=Ne)}function mf(t,e,n=xe,r=!1){j(t)&&(t=Es(t));for(const s in t){const i=t[s];let o;he(i)?"default"in i?o=qe(i.from||s,i.default,!0):o=qe(i.from||s):o=qe(i),pe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Wi(t,e,n){ke(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function za(t,e,n,r){const s=r.includes(".")?Fa(n,r):()=>n[r];if(ge(t)){const i=e[t];H(i)&&rn(s,i)}else if(H(t))rn(s,t.bind(n));else if(he(t))if(j(t))t.forEach(i=>za(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&rn(s,i,t)}}function qa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>gr(c,l,o,!0)),gr(c,e,o)),i.set(e,c),c}function gr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&gr(t,i,n,!0),s&&s.forEach(o=>gr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=_f[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _f={data:Ki,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Rt,directives:Rt,watch:yf,provide:Ki,inject:vf};function Ki(t,e){return e?t?function(){return me(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function vf(t,e){return Rt(Es(t),Es(e))}function Es(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Rt(t,e){return t?me(me(Object.create(null),t),e):e}function yf(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function bf(t,e,n,r=!1){const s={},i={};fr(i,Lr,1),t.propsDefaults=Object.create(null),Ga(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ku(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function If(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];const m=e[h];if(c)if(J(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const I=Xe(h);s[I]=Ts(c,a,I,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{Ga(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!J(e,f)&&((u=dn(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ts(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!J(e,f)&&!0)&&(delete i[f],l=!0)}l&&st(t,"set","$attrs")}function Ga(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(rr(c))continue;const l=e[c];let u;s&&J(s,u=Xe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ni(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||ne;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ts(s,c,f,l[f],t,!J(l,f))}}return o}function Ts(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(cn(s),r=l[n]=c.call(null,e),Dt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dn(n))&&(r=!0))}return r}function Ja(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[h,m]=Ja(f,e,!0);me(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Zt),Zt;if(j(i))for(let u=0;u<i.length;u++){const f=Xe(i[u]);zi(f)&&(o[f]=ne)}else if(i)for(const u in i){const f=Xe(u);if(zi(f)){const h=i[u],m=o[f]=j(h)||H(h)?{type:h}:h;if(m){const I=Ji(Boolean,m.type),P=Ji(String,m.type);m[0]=I>-1,m[1]=P<0||I<P,(I>-1||J(m,"default"))&&a.push(f)}}}const l=[o,a];return r.set(t,l),l}function zi(t){return t[0]!=="$"}function qi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Gi(t,e){return qi(t)===qi(e)}function Ji(t,e){return j(e)?e.findIndex(n=>Gi(n,t)):H(e)&&Gi(e,t)?0:-1}const Ya=t=>t[0]==="_"||t==="$stable",ii=t=>j(t)?t.map(De):[De(t)],wf=(t,e,n)=>{const r=Hu((...s)=>ii(e(...s)),n);return r._c=!1,r},Xa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ya(s))continue;const i=t[s];if(H(i))e[s]=wf(s,i,r);else if(i!=null){const o=ii(i);e[s]=()=>o}}},Qa=(t,e)=>{const n=ii(e);t.slots.default=()=>n},Ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),fr(e,"_",n)):Xa(e,t.slots={})}else t.slots={},e&&Qa(t,e);fr(t.slots,Lr,1)},Tf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Xa(e,s)),o=e}else e&&(Qa(t,e),o={default:1});if(i)for(const a in s)!Ya(a)&&!(a in o)&&delete s[a]};function Mv(t,e){const n=Oe;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ne]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function St(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(hn(),ke(c,n,8,[t.el,a,t,e]),pn())}}function Za(){return{app:null,config:{isNativeTag:Yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function Af(t,e){return function(r,s=null){s!=null&&!he(s)&&(s=null);const i=Za(),o=new Set;let a=!1;const c=i.app={_uid:Sf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=ye(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,li(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ss(t,e,n,r,s=!1){if(j(t)){t.forEach((h,m)=>Ss(h,e&&(j(e)?e[m]:e),n,r,s));return}if(Is(r)&&!s)return;const i=r.shapeFlag&4?li(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ne?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,J(f,l)&&(f[l]=null)):pe(l)&&(l.value=null)),H(c))It(c,a,12,[o,u]);else{const h=ge(c),m=pe(c);if(h||m){const I=()=>{if(t.f){const P=h?u[c]:c.value;s?j(P)&&Ws(P,i):j(P)?P.includes(i)||P.push(i):h?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,J(f,c)&&(f[c]=o)):pe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,be(I,n)):I()}}}const be=Zu;function Cf(t){return Rf(t)}function Rf(t,e){const n=nu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=xe,cloneNode:I,insertStaticContent:P}=t,R=(d,p,g,y=null,v=null,T=null,C=!1,E=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!We(d,p)&&(y=D(d),Ce(d,v,T,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:x,shapeFlag:N}=p;switch(b){case oi:O(d,p,g,y);break;case Pe:w(d,p,g,y);break;case or:d==null&&k(p,g,y,C);break;case Ve:Ne(d,p,g,y,v,T,C,E,S);break;default:N&1?z(d,p,g,y,v,T,C,E,S):N&6?$e(d,p,g,y,v,T,C,E,S):(N&64||N&128)&&b.process(d,p,g,y,v,T,C,E,S,se)}x!=null&&v&&Ss(x,d&&d.ref,T,p||d,!p)},O=(d,p,g,y)=>{if(d==null)r(p.el=a(p.children),g,y);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},w=(d,p,g,y)=>{d==null?r(p.el=c(p.children||""),g,y):p.el=d.el},k=(d,p,g,y)=>{[d.el,d.anchor]=P(d.children,p,g,y,d.el,d.anchor)},U=({el:d,anchor:p},g,y)=>{let v;for(;d&&d!==p;)v=h(d),r(d,g,y),d=v;r(p,g,y)},W=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},z=(d,p,g,y,v,T,C,E,S)=>{C=C||p.type==="svg",d==null?$(p,g,y,v,T,C,E,S):le(d,p,v,T,C,E,S)},$=(d,p,g,y,v,T,C,E)=>{let S,b;const{type:x,props:N,shapeFlag:L,transition:B,patchFlag:G,dirs:ce}=d;if(d.el&&I!==void 0&&G===-1)S=d.el=I(d.el);else{if(S=d.el=o(d.type,T,N&&N.is,N),L&8?u(S,d.children):L&16&&q(d.children,S,null,y,v,T&&x!=="foreignObject",C,E),ce&&St(d,null,y,"created"),N){for(const ae in N)ae!=="value"&&!rr(ae)&&i(S,ae,null,N[ae],T,d.children,y,v,A);"value"in N&&i(S,"value",null,N.value),(b=N.onVnodeBeforeMount)&&He(b,y,d)}X(S,d,d.scopeId,C,y)}ce&&St(d,null,y,"beforeMount");const ee=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;ee&&B.beforeEnter(S),r(S,p,g),((b=N&&N.onVnodeMounted)||ee||ce)&&be(()=>{b&&He(b,y,d),ee&&B.enter(S),ce&&St(d,null,y,"mounted")},v)},X=(d,p,g,y,v)=>{if(g&&m(d,g),y)for(let T=0;T<y.length;T++)m(d,y[T]);if(v){let T=v.subTree;if(p===T){const C=v.vnode;X(d,C,C.scopeId,C.slotScopeIds,v.parent)}}},q=(d,p,g,y,v,T,C,E,S=0)=>{for(let b=S;b<d.length;b++){const x=d[b]=E?pt(d[b]):De(d[b]);R(null,x,p,g,y,v,T,C,E)}},le=(d,p,g,y,v,T,C)=>{const E=p.el=d.el;let{patchFlag:S,dynamicChildren:b,dirs:x}=p;S|=d.patchFlag&16;const N=d.props||ne,L=p.props||ne;let B;g&&At(g,!1),(B=L.onVnodeBeforeUpdate)&&He(B,g,p,d),x&&St(p,d,g,"beforeUpdate"),g&&At(g,!0);const G=v&&p.type!=="foreignObject";if(b?oe(d.dynamicChildren,b,E,g,y,G,T):C||we(d,p,E,null,g,y,G,T,!1),S>0){if(S&16)fe(E,p,N,L,g,y,v);else if(S&2&&N.class!==L.class&&i(E,"class",null,L.class,v),S&4&&i(E,"style",N.style,L.style,v),S&8){const ce=p.dynamicProps;for(let ee=0;ee<ce.length;ee++){const ae=ce[ee],Me=N[ae],Wt=L[ae];(Wt!==Me||ae==="value")&&i(E,ae,Me,Wt,v,d.children,g,y,A)}}S&1&&d.children!==p.children&&u(E,p.children)}else!C&&b==null&&fe(E,p,N,L,g,y,v);((B=L.onVnodeUpdated)||x)&&be(()=>{B&&He(B,g,p,d),x&&St(p,d,g,"updated")},y)},oe=(d,p,g,y,v,T,C)=>{for(let E=0;E<p.length;E++){const S=d[E],b=p[E],x=S.el&&(S.type===Ve||!We(S,b)||S.shapeFlag&70)?f(S.el):g;R(S,b,x,null,y,v,T,C,!0)}},fe=(d,p,g,y,v,T,C)=>{if(g!==y){for(const E in y){if(rr(E))continue;const S=y[E],b=g[E];S!==b&&E!=="value"&&i(d,E,b,S,C,p.children,v,T,A)}if(g!==ne)for(const E in g)!rr(E)&&!(E in y)&&i(d,E,g[E],null,C,p.children,v,T,A);"value"in y&&i(d,"value",g.value,y.value)}},Ne=(d,p,g,y,v,T,C,E,S)=>{const b=p.el=d?d.el:a(""),x=p.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:B}=p;B&&(E=E?E.concat(B):B),d==null?(r(b,g,y),r(x,g,y),q(p.children,g,x,v,T,C,E,S)):N>0&&N&64&&L&&d.dynamicChildren?(oe(d.dynamicChildren,L,g,v,T,C,E),(p.key!=null||v&&p===v.subTree)&&ec(d,p,!0)):we(d,p,g,x,v,T,C,E,S)},$e=(d,p,g,y,v,T,C,E,S)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?v.ctx.activate(p,g,y,C,S):Ht(p,g,y,v,T,C,S):ue(d,p,S)},Ht=(d,p,g,y,v,T,C)=>{const E=d.component=jf(d,y,v);if(Dr(d)&&(E.ctx.renderer=se),Vf(E),E.asyncDep){if(v&&v.registerDep(E,re),!d.el){const S=E.subTree=ye(Pe);w(null,S,p,g)}return}re(E,d,p,g,v,T,C)},ue=(d,p,g)=>{const y=p.component=d.component;if(zu(d,p,g))if(y.asyncDep&&!y.asyncResolved){Q(y,p,g);return}else y.next=p,$u(y.update),y.update();else p.component=d.component,p.el=d.el,y.vnode=p},re=(d,p,g,y,v,T,C)=>{const E=()=>{if(d.isMounted){let{next:x,bu:N,u:L,parent:B,vnode:G}=d,ce=x,ee;At(d,!1),x?(x.el=G.el,Q(d,x,C)):x=G,N&&sr(N),(ee=x.props&&x.props.onVnodeBeforeUpdate)&&He(ee,B,x,G),At(d,!0);const ae=Xr(d),Me=d.subTree;d.subTree=ae,R(Me,ae,f(Me.el),D(Me),d,v,T),x.el=ae.el,ce===null&&ri(d,ae.el),L&&be(L,v),(ee=x.props&&x.props.onVnodeUpdated)&&be(()=>He(ee,B,x,G),v)}else{let x;const{el:N,props:L}=p,{bm:B,m:G,parent:ce}=d,ee=Is(p);if(At(d,!1),B&&sr(B),!ee&&(x=L&&L.onVnodeBeforeMount)&&He(x,ce,p),At(d,!0),N&&V){const ae=()=>{d.subTree=Xr(d),V(N,d.subTree,d,v,null)};ee?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ae()):ae()}else{const ae=d.subTree=Xr(d);R(null,ae,g,y,d,v,T),p.el=ae.el}if(G&&be(G,v),!ee&&(x=L&&L.onVnodeMounted)){const ae=p;be(()=>He(x,ce,ae),v)}p.shapeFlag&256&&d.a&&be(d.a,v),d.isMounted=!0,p=g=y=null}},S=d.effect=new Gs(E,()=>ka(d.update),d.scope),b=d.update=S.run.bind(S);b.id=d.uid,At(d,!0),b()},Q=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,If(d,p.props,y,g),Tf(d,p.children,g),hn(),ti(void 0,d.update),pn()},we=(d,p,g,y,v,T,C,E,S=!1)=>{const b=d&&d.children,x=d?d.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:B}=p;if(L>0){if(L&128){Ze(b,N,g,y,v,T,C,E,S);return}else if(L&256){Vt(b,N,g,y,v,T,C,E,S);return}}B&8?(x&16&&A(b,v,T),N!==b&&u(g,N)):x&16?B&16?Ze(b,N,g,y,v,T,C,E,S):A(b,v,T,!0):(x&8&&u(g,""),B&16&&q(N,g,y,v,T,C,E,S))},Vt=(d,p,g,y,v,T,C,E,S)=>{d=d||Zt,p=p||Zt;const b=d.length,x=p.length,N=Math.min(b,x);let L;for(L=0;L<N;L++){const B=p[L]=S?pt(p[L]):De(p[L]);R(d[L],B,g,null,v,T,C,E,S)}b>x?A(d,v,T,!0,!1,N):q(p,g,y,v,T,C,E,S,N)},Ze=(d,p,g,y,v,T,C,E,S)=>{let b=0;const x=p.length;let N=d.length-1,L=x-1;for(;b<=N&&b<=L;){const B=d[b],G=p[b]=S?pt(p[b]):De(p[b]);if(We(B,G))R(B,G,g,null,v,T,C,E,S);else break;b++}for(;b<=N&&b<=L;){const B=d[N],G=p[L]=S?pt(p[L]):De(p[L]);if(We(B,G))R(B,G,g,null,v,T,C,E,S);else break;N--,L--}if(b>N){if(b<=L){const B=L+1,G=B<x?p[B].el:y;for(;b<=L;)R(null,p[b]=S?pt(p[b]):De(p[b]),g,G,v,T,C,E,S),b++}}else if(b>L)for(;b<=N;)Ce(d[b],v,T,!0),b++;else{const B=b,G=b,ce=new Map;for(b=G;b<=L;b++){const Ee=p[b]=S?pt(p[b]):De(p[b]);Ee.key!=null&&ce.set(Ee.key,b)}let ee,ae=0;const Me=L-G+1;let Wt=!1,ki=0;const yn=new Array(Me);for(b=0;b<Me;b++)yn[b]=0;for(b=B;b<=N;b++){const Ee=d[b];if(ae>=Me){Ce(Ee,v,T,!0);continue}let je;if(Ee.key!=null)je=ce.get(Ee.key);else for(ee=G;ee<=L;ee++)if(yn[ee-G]===0&&We(Ee,p[ee])){je=ee;break}je===void 0?Ce(Ee,v,T,!0):(yn[je-G]=b+1,je>=ki?ki=je:Wt=!0,R(Ee,p[je],g,null,v,T,C,E,S),ae++)}const Pi=Wt?Of(yn):Zt;for(ee=Pi.length-1,b=Me-1;b>=0;b--){const Ee=G+b,je=p[Ee],Ni=Ee+1<x?p[Ee+1].el:y;yn[b]===0?R(null,je,g,Ni,v,T,C,E,S):Wt&&(ee<0||b!==Pi[ee]?Be(je,g,Ni,2):ee--)}}},Be=(d,p,g,y,v=null)=>{const{el:T,type:C,transition:E,children:S,shapeFlag:b}=d;if(b&6){Be(d.component.subTree,p,g,y);return}if(b&128){d.suspense.move(p,g,y);return}if(b&64){C.move(d,p,g,se);return}if(C===Ve){r(T,p,g);for(let N=0;N<S.length;N++)Be(S[N],p,g,y);r(d.anchor,p,g);return}if(C===or){U(d,p,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(T),r(T,p,g),be(()=>E.enter(T),v);else{const{leave:N,delayLeave:L,afterLeave:B}=E,G=()=>r(T,p,g),ce=()=>{N(T,()=>{G(),B&&B()})};L?L(T,G,ce):ce()}else r(T,p,g)},Ce=(d,p,g,y=!1,v=!1)=>{const{type:T,props:C,ref:E,children:S,dynamicChildren:b,shapeFlag:x,patchFlag:N,dirs:L}=d;if(E!=null&&Ss(E,null,g,d,!0),x&256){p.ctx.deactivate(d);return}const B=x&1&&L,G=!Is(d);let ce;if(G&&(ce=C&&C.onVnodeBeforeUnmount)&&He(ce,p,d),x&6)M(d.component,g,y);else{if(x&128){d.suspense.unmount(g,y);return}B&&St(d,null,p,"beforeUnmount"),x&64?d.type.remove(d,p,g,v,se,y):b&&(T!==Ve||N>0&&N&64)?A(b,p,g,!1,!0):(T===Ve&&N&384||!v&&x&16)&&A(S,p,g),y&&Jr(d)}(G&&(ce=C&&C.onVnodeUnmounted)||B)&&be(()=>{ce&&He(ce,p,d),B&&St(d,null,p,"unmounted")},g)},Jr=d=>{const{type:p,el:g,anchor:y,transition:v}=d;if(p===Ve){_(g,y);return}if(p===or){W(d);return}const T=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:E}=v,S=()=>C(g,T);E?E(d.el,T,S):S()}else T()},_=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},M=(d,p,g)=>{const{bum:y,scope:v,update:T,subTree:C,um:E}=d;y&&sr(y),v.stop(),T&&(T.active=!1,Ce(C,d,p,g)),E&&be(E,p),be(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(d,p,g,y=!1,v=!1,T=0)=>{for(let C=T;C<d.length;C++)Ce(d[C],p,g,y,v)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),Z=(d,p,g)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),Da(),p._vnode=d},se={p:R,um:Ce,m:Be,r:Jr,mt:Ht,mc:q,pc:we,pbc:oe,n:D,o:t};let K,V;return e&&([K,V]=e(se)),{render:Z,hydrate:K,createApp:Af(Z,K)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ec(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),n||ec(o,a))}}function Of(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const kf=t=>t.__isTeleport,tc="components";function Pf(t,e){return Mf(tc,t,!0,e)||t}const Nf=Symbol();function Mf(t,e,n=!0,r=!1){const s=Oe||de;if(s){const i=s.type;if(t===tc){const a=qf(i);if(a&&(a===e||a===Xe(e)||a===Pr(Xe(e))))return i}const o=Yi(s[t]||i[t],e)||Yi(s.appContext[t],e);return!o&&r?i:o}}function Yi(t,e){return t&&(t[e]||t[Xe(e)]||t[Pr(Xe(e))])}const Ve=Symbol(void 0),oi=Symbol(void 0),Pe=Symbol(void 0),or=Symbol(void 0),On=[];let wt=null;function ai(t=!1){On.push(wt=t?null:[])}function nc(){On.pop(),wt=On[On.length-1]||null}let $n=1;function Xi(t){$n+=t}function rc(t){return t.dynamicChildren=$n>0?wt||Zt:null,nc(),$n>0&&wt&&wt.push(t),t}function Dv(t,e,n,r,s,i){return rc(oc(t,e,n,r,s,i,!0))}function sc(t,e,n,r,s){return rc(ye(t,e,n,r,s,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function We(t,e){return t.type===e.type&&t.key===e.key}const Lr="__vInternal",ic=({key:t})=>t!=null?t:null,ar=({ref:t,ref_key:e,ref_for:n})=>t!=null?ge(t)||pe(t)||H(t)?{i:Oe,r:t,k:e,f:!!n}:t:null;function oc(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ic(e),ref:e&&ar(e),scopeId:Mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(ci(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),$n>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const ye=Df;function Df(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Nf)&&(t=Pe),mr(t)){const a=an(t,e,!0);return n&&ci(a,n),a}if(Gf(t)&&(t=t.__vccOpts),e){e=xf(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=Hs(a)),he(c)&&(wa(c)&&!j(c)&&(c=me({},c)),e.style=js(c))}const o=ge(t)?1:qu(t)?128:kf(t)?64:he(t)?4:H(t)?2:0;return oc(t,e,n,r,s,o,i,!0)}function xf(t){return t?wa(t)||Lr in t?me({},t):t:null}function an(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Uf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ic(a),ref:e&&e.ref?n&&s?j(s)?s.concat(ar(e)):[s,ar(e)]:ar(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor}}function Lf(t=" ",e=0){return ye(oi,null,t,e)}function xv(t,e){const n=ye(or,null,t);return n.staticCount=e,n}function Lv(t="",e=!1){return e?(ai(),sc(Pe,null,t)):ye(Pe,null,t)}function De(t){return t==null||typeof t=="boolean"?ye(Pe):j(t)?ye(Ve,null,t.slice()):typeof t=="object"?pt(t):ye(oi,null,String(t))}function pt(t){return t.el===null||t.memo?t:an(t)}function ci(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ci(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Lr in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),r&64?(n=16,e=[Lf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Hs([e.class,r.class]));else if(s==="style")e.style=js([e.style,r.style]);else if(Rr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){ke(t,e,7,[n,r])}const As=t=>t?ac(t)?li(t)||t.proxy:As(t.parent):null,_r=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>As(t.parent),$root:t=>As(t.root),$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>()=>ka(t.update),$nextTick:t=>Oa.bind(t.proxy),$watch:t=>ef.bind(t)}),Ff={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ne&&J(r,e))return o[e]=1,r[e];if(s!==ne&&J(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==ne&&J(n,e))return o[e]=4,n[e];ws&&(o[e]=0)}}const u=_r[e];let f,h;if(u)return e==="$attrs"&&Ae(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ne&&J(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,J(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ne&&J(s,e)?(s[e]=n,!0):r!==ne&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ne&&J(t,o)||e!==ne&&J(e,o)||(a=i[0])&&J(a,o)||J(r,o)||J(_r,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},$f=Za();let Bf=0;function jf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$f,i={uid:Bf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ja(r,s),emitsOptions:La(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ju.bind(null,i),t.ce&&t.ce(i),i}let de=null;const Hf=()=>de||Oe,cn=t=>{de=t,t.scope.on()},Dt=()=>{de&&de.scope.off(),de=null};function ac(t){return t.vnode.shapeFlag&4}let Bn=!1;function Vf(t,e=!1){Bn=e;const{props:n,children:r}=t.vnode,s=ac(t);bf(t,n,s,e),Ef(t,r);const i=s?Wf(t,e):void 0;return Bn=!1,i}function Wf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ea(new Proxy(t.ctx,Ff));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zf(t):null;cn(t),hn();const i=It(r,t,0,[t.props,s]);if(pn(),Dt(),aa(i)){if(i.then(Dt,Dt),e)return i.then(o=>{Cs(t,o,e)}).catch(o=>{zn(o,t,0)});t.asyncDep=i}else Cs(t,i,e)}else cc(t,e)}function Cs(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Ca(e)),cc(t,n)}let Qi;function cc(t,e,n){const r=t.type;if(!t.render){if(!e&&Qi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=me(me({isCustomElement:i,delimiters:a},o),c);r.render=Qi(s,l)}}t.render=r.render||xe}cn(t),hn(),gf(t),pn(),Dt()}function Kf(t){return new Proxy(t.attrs,{get(e,n){return Ae(t,"get","$attrs"),e[n]}})}function zf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Kf(t))},slots:t.slots,emit:t.emit,expose:e}}function li(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ca(Ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _r)return _r[n](t)}}))}function qf(t){return H(t)&&t.displayName||t.name}function Gf(t){return H(t)&&"__vccOpts"in t}const Ke=(t,e)=>Lu(t,e,Bn);function lc(t,e,n){const r=arguments.length;return r===2?he(e)&&!j(e)?mr(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mr(n)&&(n=[n]),ye(t,e,n))}const Jf="3.2.31",Yf="http://www.w3.org/2000/svg",kt=typeof document!="undefined"?document:null,Zi=kt&&kt.createElement("template"),Xf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?kt.createElementNS(Yf,t):kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kt.createTextNode(t),createComment:t=>kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Zi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zf(t,e,n){const r=t.style,s=ge(n);if(n&&!s){for(const i in n)Rs(r,i,n[i]);if(e&&!ge(e))for(const i in e)n[i]==null&&Rs(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const eo=/\s*!important$/;function Rs(t,e,n){if(j(n))n.forEach(r=>Rs(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=ed(t,e);eo.test(n)?t.setProperty(dn(r),n.replace(eo,""),"important"):t[r]=n}}const to=["Webkit","Moz","ms"],Zr={};function ed(t,e){const n=Zr[e];if(n)return n;let r=Xe(e);if(r!=="filter"&&r in t)return Zr[e]=r;r=Pr(r);for(let s=0;s<to.length;s++){const i=to[s]+r;if(i in t)return Zr[e]=i}return e}const no="http://www.w3.org/1999/xlink";function td(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(no,e.slice(6,e.length)):t.setAttributeNS(no,e,n);else{const i=zl(e);n==null||i&&!sa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=sa(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let vr=Date.now,uc=!1;if(typeof window!="undefined"){vr()>document.createEvent("Event").timeStamp&&(vr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);uc=!!(t&&Number(t[1])<=53)}let Os=0;const rd=Promise.resolve(),sd=()=>{Os=0},id=()=>Os||(rd.then(sd),Os=vr());function Yt(t,e,n,r){t.addEventListener(e,n,r)}function od(t,e,n,r){t.removeEventListener(e,n,r)}function ad(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cd(e);if(r){const l=i[e]=ld(r,s);Yt(t,a,l,c)}else o&&(od(t,a,o,c),i[e]=void 0)}}const ro=/(?:Once|Passive|Capture)$/;function cd(t){let e;if(ro.test(t)){e={};let n;for(;n=t.match(ro);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[dn(t.slice(2)),e]}function ld(t,e){const n=r=>{const s=r.timeStamp||vr();(uc||s>=n.attached-1)&&ke(ud(r,n.value),e,5,[r])};return n.value=t,n.attached=id(),n}function ud(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const so=/^on[a-z]/,fd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Qf(t,r,s):e==="style"?Zf(t,n,r):Rr(e)?Vs(e)||ad(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dd(t,e,r,s))?nd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),td(t,e,r,s))};function dd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&so.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||so.test(e)&&ge(n)?!1:e in t}const hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};rf.props;const io=t=>{const e=t.props["onUpdate:modelValue"];return j(e)?n=>sr(e,n):e};function pd(t){t.target.composing=!0}function oo(t){const e=t.target;e.composing&&(e.composing=!1,gd(e,"input"))}function gd(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Uv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=io(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=dr(a)),t._assign(a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",pd),Yt(t,"compositionend",oo),Yt(t,"change",oo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=io(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&dr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},md=["ctrl","shift","alt","meta"],_d={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>md.some(n=>t[`${n}Key`]&&!e.includes(n))},Fv=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=_d[e[s]];if(i&&i(n,e))return}return t(n,...r)},vd=me({patchProp:fd},Xf);let ao;function yd(){return ao||(ao=Cf(vd))}const bd=(...t)=>{const e=yd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Id(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Id(t){return ge(t)?document.querySelector(t):t}const wd="modulepreload",co={},Ed="/",Ct=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Ed}${r}`,r in co)return;co[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":wd,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function Td(){return fc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function fc(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Sd=typeof Proxy=="function",Ad="devtools-plugin:setup",Cd="plugin:settings:set";let Kt,ks;function Rd(){var t;return Kt!==void 0||(typeof window!="undefined"&&window.performance?(Kt=!0,ks=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Kt=!0,ks=global.perf_hooks.performance):Kt=!1),Kt}function Od(){return Rd()?ks.now():Date.now()}class kd{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Od()}},n&&n.on(Cd,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Pd(t,e){const n=t,r=fc(),s=Td(),i=Sd&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Ad,t,e);else{const o=i?new kd(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const dc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",mn=t=>dc?Symbol(t):"_vr_"+t,Nd=mn("rvlm"),lo=mn("rvd"),Ur=mn("r"),hc=mn("rl"),Ps=mn("rvl"),Xt=typeof window!="undefined";function Md(t){return t.__esModule||dc&&t[Symbol.toStringTag]==="Module"}const te=Object.assign;function es(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const kn=()=>{},Dd=/\/$/,xd=t=>t.replace(Dd,"");function ts(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=$d(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ld(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ud(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&pc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fd(t[n],e[n]))return!1;return!0}function Fd(t,e){return Array.isArray(t)?fo(t,e):Array.isArray(e)?fo(e,t):t===e}function fo(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $d(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function Bd(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xd(t)}const jd=/^[^#]+#/;function Hd(t,e){return t.replace(jd,"#")+e}function Vd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Vd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ho(t,e){return(history.state?history.state.position-e:-1)+t}const Ns=new Map;function Kd(t,e){Ns.set(t,e)}function zd(t){const e=Ns.get(t);return Ns.delete(t),e}let qd=()=>location.protocol+"//"+location.host;function gc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),uo(c,"")}return uo(n,t)+r+s}function Gd(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=gc(t,location),I=n.value,P=e.value;let R=0;if(h){if(n.value=m,e.value=h,o&&o===I){o=null;return}R=P?h.position-P.position:0}else r(m);s.forEach(O=>{O(n.value,I,{delta:R,type:jn.pop,direction:R?R>0?Pn.forward:Pn.back:Pn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const I=s.indexOf(h);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(te({},h.state,{scroll:Fr()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function po(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fr():null}}function Jd(t){const{history:e,location:n}=window,r={value:gc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:qd()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=te({},e.state,po(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=te({},s.value,e.state,{forward:c,scroll:Fr()});i(u.current,u,!0);const f=te({},po(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Yd(t){t=Bd(t);const e=Jd(t),n=Gd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:Hd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xd(t){return typeof t=="string"||t&&typeof t=="object"}function mc(t){return typeof t=="string"||typeof t=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_c=mn("nf");var go;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(go||(go={}));function un(t,e){return te(new Error,{type:t,[_c]:!0},e)}function ft(t,e){return t instanceof Error&&_c in t&&(e==null||!!(t.type&e))}const mo="[^/]+?",Qd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function eh(t,e){const n=te({},Qd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Zd,"\\$&"),m+=40;else if(h.type===1){const{value:I,repeatable:P,optional:R,regexp:O}=h;i.push({name:I,repeatable:P,optional:R});const w=O||mo;if(w!==mo){m+=10;try{new RegExp(`(${w})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${I}" (${w}): `+U.message)}}let k=P?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(k=R&&l.length<2?`(?:/${k})`:"/"+k),R&&(k+="?"),s+=k,m+=20,R&&(m+=-8),P&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",I=i[h-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:P,optional:R}=m,O=I in l?l[I]:"";if(Array.isArray(O)&&!P)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(O)?O.join("/"):O;if(!w)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=w}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=th(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const rh={type:0,value:""},sh=/[a-zA-Z0-9_]/;function ih(t){if(!t)return[[]];if(t==="/")return[[rh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:sh.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function oh(t,e,n){const r=eh(ih(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ah(t,e){const n=[],r=new Map;e=vo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const m=!h,I=lh(u);I.aliasOf=h&&h.record;const P=vo(e,u),R=[I];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of k)R.push(te({},I,{components:h?h.record.components:I.components,path:U,aliasOf:h?h.record:I}))}let O,w;for(const k of R){const{path:U}=k;if(f&&U[0]!=="/"){const W=f.record.path,z=W[W.length-1]==="/"?"":"/";k.path=f.record.path+(U&&z+U)}if(O=oh(k,f,P),h?h.alias.push(O):(w=w||O,w!==O&&w.alias.push(O),m&&u.name&&!_o(O)&&o(u.name)),"children"in I){const W=I.children;for(let z=0;z<W.length;z++)i(W[z],O,h&&h.children[z])}h=h||O,c(O)}return w?()=>{o(w)}:kn}function o(u){if(mc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&nh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!vc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!_o(u)&&r.set(u.record.name,u)}function l(u,f){let h,m={},I,P;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw un(1,{location:u});P=h.record.name,m=te(ch(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),I=h.stringify(m)}else if("path"in u)I=u.path,h=n.find(w=>w.re.test(I)),h&&(m=h.parse(I),P=h.record.name);else{if(h=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw un(1,{location:u,currentLocation:f});P=h.record.name,m=te({},f.params,u.params),I=h.stringify(m)}const R=[];let O=h;for(;O;)R.unshift(O.record),O=O.parent;return{name:P,path:I,params:m,matched:R,meta:fh(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ch(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function uh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function _o(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fh(t){return t.reduce((e,n)=>te(e,n.meta),{})}function vo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vc(t,e){return e.children.some(n=>n===t||vc(t,n))}const yc=/#/g,dh=/&/g,hh=/\//g,ph=/=/g,gh=/\?/g,bc=/\+/g,mh=/%5B/g,_h=/%5D/g,Ic=/%5E/g,vh=/%60/g,wc=/%7B/g,yh=/%7C/g,Ec=/%7D/g,bh=/%20/g;function ui(t){return encodeURI(""+t).replace(yh,"|").replace(mh,"[").replace(_h,"]")}function Ih(t){return ui(t).replace(wc,"{").replace(Ec,"}").replace(Ic,"^")}function Ms(t){return ui(t).replace(bc,"%2B").replace(bh,"+").replace(yc,"%23").replace(dh,"%26").replace(vh,"`").replace(wc,"{").replace(Ec,"}").replace(Ic,"^")}function wh(t){return Ms(t).replace(ph,"%3D")}function Eh(t){return ui(t).replace(yc,"%23").replace(gh,"%3F")}function Th(t){return t==null?"":Eh(t).replace(hh,"%2F")}function yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bc," "),o=i.indexOf("="),a=yr(o<0?i:i.slice(0,o)),c=o<0?null:yr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yo(t){let e="";for(let n in t){const r=t[n];if(n=wh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ms(i)):[r&&Ms(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ah(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(un(4,{from:n,to:e})):f instanceof Error?a(f):Xd(f)?a(un(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function ns(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Ch(a)){const l=(a.__vccOpts||a)[e];l&&s.push(gt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Md(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&gt(h,n,r,i,o)()}))}}return s}function Ch(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bo(t){const e=qe(Ur),n=qe(hc),r=Ke(()=>e.resolve(An(t.to))),s=Ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ln.bind(null,u));if(h>-1)return h;const m=Io(c[l-2]);return l>1&&Io(u)===m&&f[f.length-1].path!==m?f.findIndex(ln.bind(null,c[l-2])):h}),i=Ke(()=>s.value>-1&&Ph(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&pc(n.params,r.value.params));function a(c={}){return kh(c)?e[An(t.replace)?"replace":"push"](An(t.to)).catch(kn):Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Rh=ja({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bo,setup(t,{slots:e}){const n=gn(bo(t)),{options:r}=qe(Ur),s=Ke(()=>({[wo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:lc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Oh=Rh;function kh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ph(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Io(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wo=(t,e,n)=>t!=null?t:e!=null?e:n,Nh=ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=qe(Ps),s=Ke(()=>t.route||r.value),i=qe(lo,0),o=Ke(()=>s.value.matched[i]);ir(lo,i+1),ir(Nd,o),ir(Ps,s);const a=Pu();return rn(()=>[a.value,o.value,t.name],([c,l,u],[f,h,m])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!ln(l,h)||!f)&&(l.enterCallbacks[u]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],f=t.name;if(!u)return Eo(n.default,{Component:u,route:c});const h=l.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,P=lc(u,te({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[f]=null)},ref:a}));return Eo(n.default,{Component:P,route:c})||P}}});function Eo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mh=Nh;function Dh(t){const e=ah(t.routes,t),n=t.parseQuery||Sh,r=t.stringifyQuery||yo,s=t.history,i=bn(),o=bn(),a=bn(),c=Nu(ut);let l=ut;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=es.bind(null,_=>""+_),f=es.bind(null,Th),h=es.bind(null,yr);function m(_,M){let A,D;return mc(_)?(A=e.getRecordMatcher(_),D=M):D=_,e.addRoute(D,A)}function I(_){const M=e.getRecordMatcher(_);M&&e.removeRoute(M)}function P(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function O(_,M){if(M=te({},M||c.value),typeof _=="string"){const V=ts(n,_,M.path),d=e.resolve({path:V.path},M),p=s.createHref(V.fullPath);return te(V,d,{params:h(d.params),hash:yr(V.hash),redirectedFrom:void 0,href:p})}let A;if("path"in _)A=te({},_,{path:ts(n,_.path,M.path).path});else{const V=te({},_.params);for(const d in V)V[d]==null&&delete V[d];A=te({},_,{params:f(_.params)}),M.params=f(M.params)}const D=e.resolve(A,M),Z=_.hash||"";D.params=u(h(D.params));const se=Ld(r,te({},_,{hash:Ih(Z),path:D.path})),K=s.createHref(se);return te({fullPath:se,hash:Z,query:r===yo?Ah(_.query):_.query||{}},D,{redirectedFrom:void 0,href:K})}function w(_){return typeof _=="string"?ts(n,_,c.value.path):te({},_)}function k(_,M){if(l!==_)return un(8,{from:M,to:_})}function U(_){return $(_)}function W(_){return U(te(w(_),{replace:!0}))}function z(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:A}=M;let D=typeof A=="function"?A(_):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=w(D):{path:D},D.params={}),te({query:_.query,hash:_.hash,params:_.params},D)}}function $(_,M){const A=l=O(_),D=c.value,Z=_.state,se=_.force,K=_.replace===!0,V=z(A);if(V)return $(te(w(V),{state:Z,force:se,replace:K}),M||A);const d=A;d.redirectedFrom=M;let p;return!se&&Ud(r,D,A)&&(p=un(16,{to:d,from:D}),Vt(D,D,!0,!1)),(p?Promise.resolve(p):q(d,D)).catch(g=>ft(g)?ft(g,2)?g:we(g):re(g,d,D)).then(g=>{if(g){if(ft(g,2))return $(te(w(g.to),{state:Z,force:se,replace:K}),M||d)}else g=oe(d,D,!0,K,Z);return le(d,D,g),g})}function X(_,M){const A=k(_,M);return A?Promise.reject(A):Promise.resolve()}function q(_,M){let A;const[D,Z,se]=xh(_,M);A=ns(D.reverse(),"beforeRouteLeave",_,M);for(const V of D)V.leaveGuards.forEach(d=>{A.push(gt(d,_,M))});const K=X.bind(null,_,M);return A.push(K),zt(A).then(()=>{A=[];for(const V of i.list())A.push(gt(V,_,M));return A.push(K),zt(A)}).then(()=>{A=ns(Z,"beforeRouteUpdate",_,M);for(const V of Z)V.updateGuards.forEach(d=>{A.push(gt(d,_,M))});return A.push(K),zt(A)}).then(()=>{A=[];for(const V of _.matched)if(V.beforeEnter&&!M.matched.includes(V))if(Array.isArray(V.beforeEnter))for(const d of V.beforeEnter)A.push(gt(d,_,M));else A.push(gt(V.beforeEnter,_,M));return A.push(K),zt(A)}).then(()=>(_.matched.forEach(V=>V.enterCallbacks={}),A=ns(se,"beforeRouteEnter",_,M),A.push(K),zt(A))).then(()=>{A=[];for(const V of o.list())A.push(gt(V,_,M));return A.push(K),zt(A)}).catch(V=>ft(V,8)?V:Promise.reject(V))}function le(_,M,A){for(const D of a.list())D(_,M,A)}function oe(_,M,A,D,Z){const se=k(_,M);if(se)return se;const K=M===ut,V=Xt?history.state:{};A&&(D||K?s.replace(_.fullPath,te({scroll:K&&V&&V.scroll},Z)):s.push(_.fullPath,Z)),c.value=_,Vt(_,M,A,K),we()}let fe;function Ne(){fe=s.listen((_,M,A)=>{const D=O(_),Z=z(D);if(Z){$(te(Z,{replace:!0}),D).catch(kn);return}l=D;const se=c.value;Xt&&Kd(ho(se.fullPath,A.delta),Fr()),q(D,se).catch(K=>ft(K,12)?K:ft(K,2)?($(K.to,D).then(V=>{ft(V,20)&&!A.delta&&A.type===jn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),re(K,D,se))).then(K=>{K=K||oe(D,se,!1),K&&(A.delta?s.go(-A.delta,!1):A.type===jn.pop&&ft(K,20)&&s.go(-1,!1)),le(D,se,K)}).catch(kn)})}let $e=bn(),Ht=bn(),ue;function re(_,M,A){we(_);const D=Ht.list();return D.length?D.forEach(Z=>Z(_,M,A)):console.error(_),Promise.reject(_)}function Q(){return ue&&c.value!==ut?Promise.resolve():new Promise((_,M)=>{$e.add([_,M])})}function we(_){return ue||(ue=!_,Ne(),$e.list().forEach(([M,A])=>_?A(_):M()),$e.reset()),_}function Vt(_,M,A,D){const{scrollBehavior:Z}=t;if(!Xt||!Z)return Promise.resolve();const se=!A&&zd(ho(_.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return Oa().then(()=>Z(_,M,se)).then(K=>K&&Wd(K)).catch(K=>re(K,_,M))}const Ze=_=>s.go(_);let Be;const Ce=new Set;return{currentRoute:c,addRoute:m,removeRoute:I,hasRoute:R,getRoutes:P,resolve:O,options:t,push:U,replace:W,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ht.add,isReady:Q,install(_){const M=this;_.component("RouterLink",Oh),_.component("RouterView",Mh),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>An(c)}),Xt&&!Be&&c.value===ut&&(Be=!0,U(s.location).catch(Z=>{}));const A={};for(const Z in ut)A[Z]=Ke(()=>c.value[Z]);_.provide(Ur,M),_.provide(hc,gn(A)),_.provide(Ps,c);const D=_.unmount;Ce.add(_),_.unmount=function(){Ce.delete(_),Ce.size<1&&(l=ut,fe&&fe(),c.value=ut,Be=!1,ue=!1),D()}}}}function zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function xh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ln(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ln(l,c))||s.push(c))}return[n,r,s]}function $v(){return qe(Ur)}const Lh=[{name:"Main Layout",path:"/",component:()=>Ct(()=>import("./MainLayout.dcca612f.js"),["assets/MainLayout.dcca612f.js","assets/MainLayout.e726c370.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.f92d809a.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Home",path:"",component:()=>Ct(()=>import("./Home.62daf1be.js"),["assets/Home.62daf1be.js","assets/Home.7f50fe90.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Komisariat",path:"komisariat",component:()=>Ct(()=>import("./Komisariat.0479d2c7.js"),["assets/Komisariat.0479d2c7.js","assets/Komisariat.fc75bca7.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Dashboard Layout",path:"/",component:()=>Ct(()=>import("./DashboardLayout.924c75cc.js"),["assets/DashboardLayout.924c75cc.js","assets/DashboardLayout.7d70aab2.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Dashboard",path:"dashboard",component:()=>Ct(()=>import("./Main.f220c875.js"),["assets/Main.f220c875.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Auth Layout",path:"/",component:()=>Ct(()=>import("./AuthLayout.0a4da250.js"),["assets/AuthLayout.0a4da250.js","assets/AuthLayout.fdeb7410.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.f92d809a.css","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Login",path:"login",component:()=>Ct(()=>import("./Login.81ee18a7.js"),[])}]}],Tc=Dh({routes:Lh,history:Yd()});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Uh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fh=function(t){const e=Sc(t);return Ac.encodeByteArray(e,!0)},Cc=function(t){return Fh(t).replace(/\./g,"")},$h=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Rc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vh(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oc(){return typeof indexedDB=="object"}function kc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Wh(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Kh,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,r)}}function zh(t,e){return t.replace(qh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qh=/\{\$([^}]+)}/g;function Gh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(To(i)&&To(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function To(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jh(t,e){const n=new Yh(t,e);return n.subscribe.bind(n)}class Yh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rs),s.error===void 0&&(s.error=rs),s.complete===void 0&&(s.complete=rs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=1e3,Zh=2,ep=4*60*60*1e3,tp=.5;function So(t,e=Qh,n=Zh){const r=e*Math.pow(n,t),s=Math.round(tp*r*(Math.random()-.5)*2);return Math.min(ep,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Ao{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new Pc(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Nc(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Pc{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Nc(this._transaction.objectStore(e))}}class Nc{constructor(e){this._store=e}index(e){return new Co(this._store.index(e))}createIndex(e,n,r){return new Co(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Sn(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Sn(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Sn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Sn(e,"Error clearing IndexedDB object store")}}class Co{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Sn(n,"Error reading from IndexedDB")}}function Mc(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Ao(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Ao(i.result),o.oldVersion,o.newVersion,new Pc(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Qe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sp(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rp(t){return t===Ot?void 0:t}function sp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new np(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const op={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ap=ie.INFO,cp={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},lp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fi{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ds="@firebase/app",Ro="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new fi("@firebase/app"),dp="@firebase/app-compat",hp="@firebase/analytics-compat",pp="@firebase/analytics",gp="@firebase/app-check-compat",mp="@firebase/app-check",_p="@firebase/auth",vp="@firebase/auth-compat",yp="@firebase/database",bp="@firebase/database-compat",Ip="@firebase/functions",wp="@firebase/functions-compat",Ep="@firebase/installations",Tp="@firebase/installations-compat",Sp="@firebase/messaging",Ap="@firebase/messaging-compat",Cp="@firebase/performance",Rp="@firebase/performance-compat",Op="@firebase/remote-config",kp="@firebase/remote-config-compat",Pp="@firebase/storage",Np="@firebase/storage-compat",Mp="@firebase/firestore",Dp="@firebase/firestore-compat",xp="firebase",Lp="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="[DEFAULT]",Up={[Ds]:"fire-core",[dp]:"fire-core-compat",[pp]:"fire-analytics",[hp]:"fire-analytics-compat",[mp]:"fire-app-check",[gp]:"fire-app-check-compat",[_p]:"fire-auth",[vp]:"fire-auth-compat",[yp]:"fire-rtdb",[bp]:"fire-rtdb-compat",[Ip]:"fire-fn",[wp]:"fire-fn-compat",[Ep]:"fire-iid",[Tp]:"fire-iid-compat",[Sp]:"fire-fcm",[Ap]:"fire-fcm-compat",[Cp]:"fire-perf",[Rp]:"fire-perf-compat",[Op]:"fire-rc",[kp]:"fire-rc-compat",[Pp]:"fire-gcs",[Np]:"fire-gcs-compat",[Mp]:"fire-fst",[Dp]:"fire-fst-compat","fire-js":"fire-js",[xp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Map,xs=new Map;function Fp(t,e){try{t.container.addComponent(e)}catch(n){di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function it(t){const e=t.name;if(xs.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;xs.set(e,t);for(const n of Ir.values())Fp(n,t);return!0}function $r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Lt=new Bt("app","Firebase",$p);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=Lp;function jp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Dc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});const s=Ir.get(r);if(s){if(br(t,s.options)&&br(n,s.config))return s;throw Lt.create("duplicate-app",{appName:r})}const i=new ip(r);for(const a of xs.values())i.addComponent(a);const o=new Bp(t,n,i);return Ir.set(r,o),o}function Hp(t=Dc){const e=Ir.get(t);if(!e)throw Lt.create("no-app",{appName:t});return e}function Ge(t,e,n){var r;let s=(r=Up[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(a.join(" "));return}it(new Qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="firebase-heartbeat-database",Wp=1,Hn="firebase-heartbeat-store";let ss=null;function xc(){return ss||(ss=Mc(Vp,Wp,(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}).catch(t=>{throw Lt.create("storage-open",{originalErrorMessage:t.message})})),ss}async function Kp(t){try{return(await xc()).transaction(Hn).objectStore(Hn).get(Lc(t))}catch(e){throw Lt.create("storage-get",{originalErrorMessage:e.message})}}async function Oo(t,e){try{const r=(await xc()).transaction(Hn,"readwrite");return await r.objectStore(Hn).put(e,Lc(t)),r.complete}catch(n){throw Lt.create("storage-set",{originalErrorMessage:n.message})}}function Lc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=1024,qp=30*24*60*60*1e3;class Gp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=qp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ko(),{heartbeatsToSend:n,unsentEntries:r}=Jp(this._heartbeatsCache.heartbeats),s=Cc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ko(){return new Date().toISOString().substring(0,10)}function Jp(t,e=zp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Po(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Po(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oc()?kc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Po(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){it(new Qe("platform-logger",e=>new up(e),"PRIVATE")),it(new Qe("heartbeat",e=>new Gp(e),"PRIVATE")),Ge(Ds,Ro,t),Ge(Ds,Ro,"esm2017"),Ge("fire-js","")}Xp("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function hi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Uc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qp=Uc,Fc=new Bt("auth","Firebase",Uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new fi("@firebase/auth");function cr(t,...e){No.logLevel<=ie.ERROR&&No.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw pi(t,...e)}function Je(t,...e){return pi(t,...e)}function Zp(t,e,n){const r=Object.assign(Object.assign({},Qp()),{[e]:n});return new Bt("auth","Firebase",r).create(e,{appName:t.name})}function pi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fc.create(t,...e)}function F(t,e,...n){if(!t)throw pi(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function ot(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=Mo.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e){const n=$r(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e!=null?e:{}))return s;Ue(s,"already-initialized")}return n.initialize({options:e})}function tg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ng(){return Do()==="http:"||Do()==="https:"}function Do(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ng()||Rc()||"connection"in navigator)?navigator.onLine:!0}function sg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=jh()||Hh()}get(){return rg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Gn(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,s={}){return Bc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$c.fetch()(jc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ig),e);try{const s=new ag(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw is(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw is(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw is(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Zp(t,u,l);Ue(t,u)}}catch(s){if(s instanceof Tt)throw s;Ue(t,"network-request-failed")}}async function Hr(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gi(t.config,s):`${t.config.apiScheme}://${s}`}class ag{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),og.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function is(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function lg(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ug(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=mi(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Nn(os(s.auth_time)),issuedAtTime:Nn(os(s.iat)),expirationTime:Nn(os(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function os(t){return Number(t)*1e3}function mi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(n);return s?JSON.parse(s):(cr("Failed to decode base64 JWT payload"),null)}catch(s){return cr("Caught error parsing JWT payload as JSON",s),null}}function fg(t){const e=mi(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&dg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vn(t,lg(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mg(i.providerUserInfo):[],a=gg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function pg(t){const e=ct(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mg(t){return t.map(e=>{var{providerId:n}=e,r=hi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t,e){const n=await Bc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=jc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$c.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _g(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ug(this,e)}reload(){return pg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vn(this,cg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:U,isAnonymous:W,providerData:z,stsTokenManager:$}=n;F(k&&$,e,"internal-error");const X=Wn.fromJSON(this.name,$);F(typeof k=="string",e,"internal-error"),dt(f,e.name),dt(h,e.name),F(typeof U=="boolean",e,"internal-error"),F(typeof W=="boolean",e,"internal-error"),dt(m,e.name),dt(I,e.name),dt(P,e.name),dt(R,e.name),dt(O,e.name),dt(w,e.name);const q=new xt({uid:k,auth:e,email:h,emailVerified:U,displayName:f,isAnonymous:W,photoURL:I,phoneNumber:m,tenantId:P,stsTokenManager:X,createdAt:O,lastLoginAt:w});return z&&Array.isArray(z)&&(q.providerData=z.map(le=>Object.assign({},le))),R&&(q._redirectEventId=R),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Wn;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vc.type="NONE";const xo=Vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(rt(xo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(xo);const o=lr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=xt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gc(e))return"Blackberry";if(Jc(e))return"Webos";if(_i(e))return"Safari";if((e.includes("chrome/")||Kc(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wc(t=_e()){return/firefox\//i.test(t)}function _i(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kc(t=_e()){return/crios\//i.test(t)}function zc(t=_e()){return/iemobile/i.test(t)}function qc(t=_e()){return/android/i.test(t)}function Gc(t=_e()){return/blackberry/i.test(t)}function Jc(t=_e()){return/webos/i.test(t)}function Vr(t=_e()){return/iphone|ipad|ipod/i.test(t)}function vg(t=_e()){var e;return Vr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yg(){return Vh()&&document.documentMode===10}function Yc(t=_e()){return Vr(t)||qc(t)||Jc(t)||Gc(t)||/windows phone/i.test(t)||zc(t)}function bg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e=[]){let n;switch(t){case"Browser":n=Lo(_e());break;case"Worker":n=`${Lo(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uo(this),this.idTokenSubscription=new Uo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function vi(t){return ct(t)}class Uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jh(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function wg(t,e){return Jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e){return Hr(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e){return Hr(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function Sg(t,e){return Hr(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends yi{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Eg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tg(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t,e){return Hr(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="http://localhost";class Ut extends yi{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:Ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rg(t){const e=En(Tn(t)).link,n=e?En(Tn(e)).deep_link_id:null,r=En(Tn(t)).deep_link_id;return(r?En(Tn(r)).link:null)||r||n||e||t}class bi{constructor(e){var n,r,s,i,o,a;const c=En(Tn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Cg((s=c.mode)!==null&&s!==void 0?s:null);F(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rg(e);try{return new bi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return Kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bi.parseLink(n);return F(r,"argument-error"),Kn._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Qc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Yn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Yn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Yn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Yn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=Fo(r);return new fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fo(r);return new fn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Tt{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Er(e,n,r,s)}}function Zc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(t,i,e,r):i})}async function Og(t,e,n=!1){const r=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Vn(t,Zc(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=mi(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),fn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t,e,n=!1){const r="signIn",s=await Zc(t,r,e),i=await fn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Pg(t,e){return el(vi(t),e)}function Bv(t,e,n){return Pg(ct(t),_n.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){return ct(t).setPersistence(e)}function Ng(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function Hv(t){return ct(t).signOut()}const Tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){const t=_e();return _i(t)||Vr(t)}const Dg=1e3,xg=10;class nl extends tl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mg()&&bg(),this.fallbackToPolling=Yc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nl.type="LOCAL";const Lg=nl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends tl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rl.type="SESSION";const sl=rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ug(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ii("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function $g(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof Ye().WorkerGlobalScope!="undefined"&&typeof Ye().importScripts=="function"}async function Bg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hg(){return il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="firebaseLocalStorageDb",Vg=1,Sr="firebaseLocalStorage",al="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function Wg(){const t=indexedDB.deleteDatabase(ol);return new Xn(t).toPromise()}function Us(){const t=indexedDB.open(ol,Vg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sr,{keyPath:al})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sr)?e(r):(r.close(),await Wg(),e(await Us()))})})}async function $o(t,e,n){const r=Kr(t,!0).put({[al]:e,value:n});return new Xn(r).toPromise()}async function Kg(t,e){const n=Kr(t,!1).get(e),r=await new Xn(n).toPromise();return r===void 0?null:r.value}function Bo(t,e){const n=Kr(t,!0).delete(e);return new Xn(n).toPromise()}const zg=800,qg=3;class cl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Us(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wr._getInstance(Hg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bg(),!this.activeServiceWorker)return;this.sender=new Fg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Us();return await $o(e,Tr,"1"),await Bo(e,Tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$o(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Kg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Kr(s,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cl.type="LOCAL";const Gg=cl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jg().appendChild(r)})}function Xg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){return e?rt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends yi{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zg(t){return el(t.auth,new wi(t),t.bypassAuthState)}function em(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),kg(n,new wi(t),t.bypassAuthState)}async function tm(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Og(n,new wi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zg;case"linkViaPopup":case"linkViaRedirect":return tm;case"reauthViaPopup":case"reauthViaRedirect":return em;default:Ue(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Gn(2e3,1e4);class Qt extends ll{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nm.get())};e()}}Qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="pendingRedirect",as=new Map;class sm extends ll{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=as.get(this.auth._key());if(!e){try{const r=await im(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}as.set(this.auth._key(),e)}return this.bypassAuthState||as.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function im(t,e){const n=am(e),r=om(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function om(t){return rt(t._redirectPersistence)}function am(t){return lr(rm,t.config.apiKey,t.name)}async function cm(t,e,n=!1){const r=vi(t),s=Qg(r,e),o=await new sm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=10*60*1e3;class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(jo(e))}saveEventToCache(e){this.cachedEventUids.add(jo(e)),this.lastProcessedEventTime=Date.now()}}function jo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pm=/^https?/;async function gm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dm(t);for(const n of e)try{if(mm(n))return}catch{}Ue(t,"unauthorized-domain")}function mm(t){const e=Ls(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pm.test(n))return!1;if(hm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Gn(3e4,6e4);function Ho(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vm(t){return new Promise((e,n)=>{var r,s,i;function o(){Ho(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ho(),n(Je(t,"network-request-failed"))},timeout:_m.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=Xg("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Yg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ur=null,e})}let ur=null;function ym(t){return ur=ur||vm(t),ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Gn(5e3,15e3),Im="__/auth/iframe",wm="emulator/auth/iframe",Em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sm(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gi(e,wm):`https://${t.config.authDomain}/${Im}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=Tm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function Am(t){const e=await ym(t),n=Ye().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Sm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Em,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},bm.get());function c(){Ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Om=600,km="_blank",Pm="http://localhost";class Vo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nm(t,e,n,r=Rm,s=Om){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=Kc(l)?km:n),Wc(l)&&(e=e||Pm,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,I])=>`${h}${m}=${I},`,"");if(vg(l)&&a!=="_self")return Mm(e||"",a),new Vo(null);const f=window.open(e||"",a,u);F(f,t,"popup-blocked");try{f.focus()}catch{}return new Vo(f)}function Mm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="__/auth/handler",xm="emulator/auth/handler";function Wo(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof Qc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Yn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Lm(t)}?${qn(a).slice(1)}`}function Lm({config:t}){return t.emulator?gi(t,xm):`https://${t.authDomain}/${Dm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="webStorageSupport";class Um{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sl,this._completeRedirectFn=cm}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wo(e,n,r,Ls(),s);return Nm(e,o,Ii())}async _openRedirect(e,n,r,s){return await this._originValidation(e),$g(Wo(e,n,r,Ls(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Am(e),r=new um(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cs];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yc()||_i()||Vr()}}const Fm=Um;var Ko="@firebase/auth",zo="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jm(t){it(new Qe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xc(t)},u=new Ig(a,c,l);return tg(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),it(new Qe("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(r=>new $m(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Ko,zo,Bm(t)),Ge(Ko,zo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t=Hp()){const e=$r(t,"auth");return e.isInitialized()?e.getImmediate():eg(t,{popupRedirectResolver:Fm,persistence:[Gg,Lg,sl]})}jm("Browser");/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var fl="store";function Vm(t){return t===void 0&&(t=null),qe(t!==null?t:fl)}function vn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Wm(t){return t!==null&&typeof t=="object"}function Km(t){return t&&typeof t.then=="function"}function zm(t,e){return function(){return t(e)}}function dl(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function hl(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;zr(t,n,[],t._modules.root,!0),Ei(t,n,e)}function Ei(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};vn(s,function(o,a){i[a]=zm(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=gn({data:e}),t.strict&&Xm(t),r&&n&&t._withCommit(function(){r.data=null})}function zr(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Ti(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=qm(t,o,n);r.forEachMutation(function(u,f){var h=o+f;Gm(t,h,u,l)}),r.forEachAction(function(u,f){var h=u.root?f:o+f,m=u.handler||u;Jm(t,h,m,l)}),r.forEachGetter(function(u,f){var h=o+f;Ym(t,h,u,l)}),r.forEachChild(function(u,f){zr(t,e,n.concat(f),u,s)})}function qm(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Ar(i,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=e+f),t.dispatch(f,l)},commit:r?t.commit:function(i,o,a){var c=Ar(i,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=e+f),t.commit(f,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return pl(t,e)}},state:{get:function(){return Ti(t.state,n)}}}),s}function pl(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Gm(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Jm(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Km(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Ym(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Xm(t){rn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ti(t,e){return e.reduce(function(n,r){return n[r]},t)}function Ar(t,e,n){return Wm(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Qm="vuex bindings",qo="vuex:mutations",ls="vuex:actions",qt="vuex",Zm=0;function e_(t,e){Pd({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Qm]},function(n){n.addTimelineLayer({id:qo,label:"Vuex Mutations",color:Go}),n.addTimelineLayer({id:ls,label:"Vuex Actions",color:Go}),n.addInspector({id:qt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===qt)if(r.filter){var s=[];vl(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[_l(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===qt){var s=r.nodeId;pl(e,s),r.state=r_(i_(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===qt){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(qt),n.sendInspectorState(qt),n.addTimelineEvent({layerId:qo,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Zm++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:ls,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:ls,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Go=8702998,t_=6710886,n_=16777215,gl={label:"namespaced",textColor:n_,backgroundColor:t_};function ml(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function _l(t,e){return{id:e||"root",label:ml(e),tags:t.namespaced?[gl]:[],children:Object.keys(t._children).map(function(n){return _l(t._children[n],e+n+"/")})}}function vl(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[gl]:[]}),Object.keys(e._children).forEach(function(s){vl(t,e._children[s],n,r+s+"/")})}function r_(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=s_(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?ml(o):o,editable:!1,value:Fs(function(){return i[o]})}})}return s}function s_(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Fs(function(){return t[n]})}else e[n]=Fs(function(){return t[n]})}),e}function i_(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Fs(t){try{return t()}catch(e){return e}}var Fe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},yl={namespaced:{configurable:!0}};yl.namespaced.get=function(){return!!this._rawModule.namespaced};Fe.prototype.addChild=function(e,n){this._children[e]=n};Fe.prototype.removeChild=function(e){delete this._children[e]};Fe.prototype.getChild=function(e){return this._children[e]};Fe.prototype.hasChild=function(e){return e in this._children};Fe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Fe.prototype.forEachChild=function(e){vn(this._children,e)};Fe.prototype.forEachGetter=function(e){this._rawModule.getters&&vn(this._rawModule.getters,e)};Fe.prototype.forEachAction=function(e){this._rawModule.actions&&vn(this._rawModule.actions,e)};Fe.prototype.forEachMutation=function(e){this._rawModule.mutations&&vn(this._rawModule.mutations,e)};Object.defineProperties(Fe.prototype,yl);var jt=function(e){this.register([],e,!1)};jt.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};jt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};jt.prototype.update=function(e){bl([],this.root,e)};jt.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Fe(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&vn(n.modules,function(a,c){s.register(e.concat(c),a,r)})};jt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};jt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function bl(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;bl(t.concat(r),e.getChild(r),n.modules[r])}}function o_(t){return new Ie(t)}var Ie=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new jt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(h,m){return c.call(o,h,m)},this.commit=function(h,m,I){return l.call(o,h,m,I)},this.strict=s;var u=this._modules.root.state;zr(this,u,[],this._modules.root),Ei(this,u),r.forEach(function(f){return f(n)})},Si={state:{configurable:!0}};Ie.prototype.install=function(e,n){e.provide(n||fl,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&e_(e,this)};Si.state.get=function(){return this._state.data};Si.state.set=function(t){};Ie.prototype.commit=function(e,n,r){var s=this,i=Ar(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};Ie.prototype.dispatch=function(e,n){var r=this,s=Ar(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,h)})}catch{}f(h)})})}};Ie.prototype.subscribe=function(e,n){return dl(e,this._subscribers,n)};Ie.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return dl(r,this._actionSubscribers,n)};Ie.prototype.watch=function(e,n,r){var s=this;return rn(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Ie.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ie.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),zr(this,this.state,e,this._modules.get(e),r.preserveState),Ei(this,this.state)};Ie.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Ti(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),hl(this)};Ie.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ie.prototype.hotUpdate=function(e){this._modules.update(e),hl(this,!0)};Ie.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ie.prototype,Si);const a_={setup(t){const e=Vm(),n=Hm();return localStorage.getItem("to")&&(Tc.push({path:localStorage.getItem("to")}),localStorage.removeItem("to")),Ng(n,r=>{e.commit("updateUser",r)}),(r,s)=>{const i=Pf("router-view");return ai(),sc(i)}}};var c_="firebase",l_="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(c_,l_,"app");const Il="@firebase/installations",Ai="0.5.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=1e4,El=`w:${Ai}`,Tl="FIS_v2",u_="https://firebaseinstallations.googleapis.com/v1",f_=60*60*1e3,d_="installations",h_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ft=new Bt(d_,h_,p_);function Sl(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al({projectId:t}){return`${u_}/projects/${t}/installations`}function Cl(t){return{token:t.token,requestStatus:2,expiresIn:m_(t.expiresIn),creationTime:Date.now()}}async function Rl(t,e){const r=(await e.json()).error;return Ft.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ol({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function g_(t,{refreshToken:e}){const n=Ol(t);return n.append("Authorization",__(e)),n}async function kl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function m_(t){return Number(t.replace("s","000"))}function __(t){return`${Tl} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Al(t),s=Ol(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Tl,appId:t.appId,sdkVersion:El},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await kl(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Cl(l.authToken)}}else throw await Rl("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=/^[cdef][\w-]{21}$/,$s="";function I_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=w_(t);return b_.test(n)?n:$s}catch{return $s}}function w_(t){return y_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map;function Ml(t,e){const n=qr(t);Dl(n,e),E_(n,e)}function Dl(t,e){const n=Nl.get(t);if(!!n)for(const r of n)r(e)}function E_(t,e){const n=T_();n&&n.postMessage({key:t,fid:e}),S_()}let Nt=null;function T_(){return!Nt&&"BroadcastChannel"in self&&(Nt=new BroadcastChannel("[Firebase] FID Change"),Nt.onmessage=t=>{Dl(t.data.key,t.data.fid)}),Nt}function S_(){Nl.size===0&&Nt&&(Nt.close(),Nt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="firebase-installations-database",C_=1,$t="firebase-installations-store";let us=null;function Ci(){return us||(us=Mc(A_,C_,(t,e)=>{switch(e){case 0:t.createObjectStore($t)}})),us}async function Cr(t,e){const n=qr(t),s=(await Ci()).transaction($t,"readwrite"),i=s.objectStore($t),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Ml(t,e.fid),e}async function xl(t){const e=qr(t),r=(await Ci()).transaction($t,"readwrite");await r.objectStore($t).delete(e),await r.complete}async function Gr(t,e){const n=qr(t),s=(await Ci()).transaction($t,"readwrite"),i=s.objectStore($t),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Ml(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t){let e;const n=await Gr(t.appConfig,r=>{const s=R_(r),i=O_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===$s?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function R_(t){const e=t||{fid:I_(),registrationStatus:0};return Ll(e)}function O_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=k_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P_(t)}:{installationEntry:e}}async function k_(t,e){try{const n=await v_(t,e);return Cr(t.appConfig,n)}catch(n){throw Sl(n)&&n.customData.serverCode===409?await xl(t.appConfig):await Cr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P_(t){let e=await Jo(t.appConfig);for(;e.registrationStatus===1;)await Pl(100),e=await Jo(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ri(t);return r||n}return e}function Jo(t){return Gr(t,e=>{if(!e)throw Ft.create("installation-not-found");return Ll(e)})}function Ll(t){return N_(t)?{fid:t.fid,registrationStatus:0}:t}function N_(t){return t.registrationStatus===1&&t.registrationTime+wl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_({appConfig:t,heartbeatServiceProvider:e},n){const r=D_(t,n),s=g_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:El,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await kl(()=>fetch(r,a));if(c.ok){const l=await c.json();return Cl(l)}else throw await Rl("Generate Auth Token",c)}function D_(t,{fid:e}){return`${Al(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e=!1){let n;const r=await Gr(t.appConfig,i=>{if(!Ul(i))throw Ft.create("not-registered");const o=i.authToken;if(!e&&U_(o))return i;if(o.requestStatus===1)return n=x_(t,e),i;{if(!navigator.onLine)throw Ft.create("app-offline");const a=$_(i);return n=L_(t,a),a}});return n?await n:r.authToken}async function x_(t,e){let n=await Yo(t.appConfig);for(;n.authToken.requestStatus===1;)await Pl(100),n=await Yo(t.appConfig);const r=n.authToken;return r.requestStatus===0?Oi(t,e):r}function Yo(t){return Gr(t,e=>{if(!Ul(e))throw Ft.create("not-registered");const n=e.authToken;return B_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function L_(t,e){try{const n=await M_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Cr(t.appConfig,r),n}catch(n){if(Sl(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xl(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cr(t.appConfig,r)}throw n}}function Ul(t){return t!==void 0&&t.registrationStatus===2}function U_(t){return t.requestStatus===2&&!F_(t)}function F_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+f_}function $_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function B_(t){return t.requestStatus===1&&t.requestTime+wl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ri(e);return r?r.catch(console.error):Oi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(t,e=!1){const n=t;return await V_(n),(await Oi(n,e)).token}async function V_(t){const{registrationPromise:e}=await Ri(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){if(!t||!t.options)throw fs("App Configuration");if(!t.name)throw fs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fs(t){return Ft.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="installations",K_="installations-internal",z_=t=>{const e=t.getProvider("app").getImmediate(),n=W_(e),r=$r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},q_=t=>{const e=t.getProvider("app").getImmediate(),n=$r(e,Fl).getImmediate();return{getId:()=>j_(n),getToken:s=>H_(n,s)}};function G_(){it(new Qe(Fl,z_,"PUBLIC")),it(new Qe(K_,q_,"PRIVATE"))}G_();Ge(Il,Ai);Ge(Il,Ai,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="analytics",J_="firebase_id",Y_="origin",X_=60*1e3,Q_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$l="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new fi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Z_(t,e){const n=document.createElement("script");n.src=`${$l}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function ev(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tv(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Bl(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Se.error(a)}t("config",s,i)}async function nv(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Bl(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Se.error(i)}}function rv(t,e,n,r){async function s(i,o,a){try{i==="event"?await nv(t,e,n,o,a):i==="config"?await tv(t,e,n,r,o,a):t("set",o)}catch(c){Se.error(c)}}return s}function sv(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=rv(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function iv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes($l))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Le=new Bt("analytics","Analytics",ov);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=30,cv=1e3;class lv{constructor(e={},n=cv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jl=new lv;function uv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fv(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:uv(r)},i=Q_.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function dv(t,e=jl,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Le.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Le.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gv;return setTimeout(async()=>{a.abort()},n!==void 0?n:X_),Hl({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Hl(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=jl){const{appId:i,measurementId:o}=t;try{await hv(r,e)}catch(a){if(o)return Se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await fv(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!pv(a)){if(s.deleteThrottleMetadata(i),o)return Se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?So(n,s.intervalMillis,av):So(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(i,l),Se.debug(`Calling attemptFetch again in ${c} millis`),Hl(t,l,r,s)}}function hv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pv(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(){if(Oc())try{await kc()}catch(t){return Se.warn(Le.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Se.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _v(t,e,n,r,s,i,o){var a;const c=dv(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Se.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Se.error(m)),e.push(c);const l=mv().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);iv()||Z_(i,u.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Y_]="firebase",h.update=!0,f!=null&&(h[J_]=f),s("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.app=e}_delete(){return delete Mn[this.app.options.appId],Promise.resolve()}}let Mn={},Qo=[];const Zo={};let ds="dataLayer",yv="gtag",ea,Vl,ta=!1;function bv(){const t=[];if(Rc()&&t.push("This is a browser extension environment."),Wh()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Le.create("invalid-analytics-context",{errorInfo:e});Se.warn(n.message)}}function Iv(t,e,n){bv();const r=t.options.appId;if(!r)throw Le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(Mn[r]!=null)throw Le.create("already-exists",{id:r});if(!ta){ev(ds);const{wrappedGtag:i,gtagCore:o}=sv(Mn,Qo,Zo,ds,yv);Vl=i,ea=o,ta=!0}return Mn[r]=_v(t,Qo,Zo,e,ea,ds,n),new vv(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function Ev(t,e,n,r){t=ct(t),wv(Vl,Mn[t.app.options.appId],e,n,r).catch(s=>Se.error(s))}const na="@firebase/analytics",ra="0.7.7";function Tv(){it(new Qe(Xo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Iv(r,s,n)},"PUBLIC")),it(new Qe("analytics-internal",t,"PRIVATE")),Ge(na,ra),Ge(na,ra,"esm2017");function t(e){try{const n=e.getProvider(Xo).getImmediate();return{logEvent:(r,s,i)=>Ev(n,r,s,i)}}catch(n){throw Le.create("interop-component-reg-failed",{reason:n})}}}Tv();const Sv={apiKey:"AIzaSyANRHn_XwFSzlxjoTp11bO5a5Gl1G9kkGc",authDomain:"al-khawarizmi-berdaya.firebaseapp.com",projectId:"al-khawarizmi-berdaya",storageBucket:"al-khawarizmi-berdaya.appspot.com",messagingSenderId:"529015177437",appId:"1:529015177437:web:30aa94162773b421b09b34",measurementId:"G-X6QPEHLVKF"},Av=jp(Sv),Cv={updateUser(t,e){t.user.data=e}},Rv=o_({state(){return{user:{data:null}}},mutations:Cv});bd(a_).use(Tc).use(Av).use(Rv).mount("body");export{jv as A,Bv as B,sl as C,Ve as F,Nv as S,oc as a,ye as b,Dv as c,Pv as d,Lf as e,xv as f,Hm as g,$v as h,Ng as i,Pu as j,pf as k,sc as l,Lv as m,gn as n,ai as o,kv as p,Fv as q,Pf as r,Hv as s,Ov as t,Vm as u,Mv as v,Hu as w,Uv as x,An as y,Hs as z};
