const kl=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};kl();function Us(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Nl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ml=Us(Nl);function Qo(t){return!!t||t===""}function Fs(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pe(r)?Ll(r):Fs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(pe(t))return t;if(ge(t))return t}}const Dl=/;(?![^(]*\))/g,xl=/:(.+)/;function Ll(t){const e={};return t.split(Dl).forEach(n=>{if(n){const r=n.split(xl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $s(t){let e="";if(pe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=$s(t[n]);r&&(e+=r+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Q={},Zt=[],Ne=()=>{},Ul=()=>!1,Fl=/^on[^a-z]/,Er=t=>Fl.test(t),js=t=>t.startsWith("onUpdate:"),he=Object.assign,Bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$l=Object.prototype.hasOwnProperty,z=(t,e)=>$l.call(t,e),$=Array.isArray,Tn=t=>Tr(t)==="[object Map]",jl=t=>Tr(t)==="[object Set]",j=t=>typeof t=="function",pe=t=>typeof t=="string",Hs=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Zo=t=>ge(t)&&j(t.then)&&j(t.catch),Bl=Object.prototype.toString,Tr=t=>Bl.call(t),Hl=t=>Tr(t).slice(8,-1),Vl=t=>Tr(t)==="[object Object]",Vs=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zn=Us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wl=/-(\w)/g,qe=Sr(t=>t.replace(Wl,(e,n)=>n?n.toUpperCase():"")),Kl=/\B([A-Z])/g,un=Sr(t=>t.replace(Kl,"-$1").toLowerCase()),Ar=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Sr(t=>t?`on${Ar(t)}`:""),Mn=(t,e)=>!Object.is(t,e),er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ls=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ci;const zl=()=>Ci||(Ci=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;class ql{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Ye=this,e()}finally{Ye=this.parent}}on(){Ye=this}off(){Ye=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Gl(t,e=Ye){e&&e.active&&e.effects.push(t)}const Ws=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ea=t=>(t.w&yt)>0,ta=t=>(t.n&yt)>0,Jl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yt},Yl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ea(s)&&!ta(s)?s.delete(t):e[n++]=s,s.w&=~yt,s.n&=~yt}e.length=n}},us=new WeakMap;let yn=0,yt=1;const fs=30;let He;const kt=Symbol(""),ds=Symbol("");class Ks{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gl(this,r)}run(){if(!this.active)return this.fn();let e=He,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,_t=!0,yt=1<<++yn,yn<=fs?Jl(this):Ri(this),this.fn()}finally{yn<=fs&&Yl(this),yt=1<<--yn,He=this.parent,_t=n,this.parent=void 0}}stop(){this.active&&(Ri(this),this.onStop&&this.onStop(),this.active=!1)}}function Ri(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const na=[];function fn(){na.push(_t),_t=!1}function dn(){const t=na.pop();_t=t===void 0?!0:t}function Ae(t,e,n){if(_t&&He){let r=us.get(t);r||us.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ws()),ra(s)}}function ra(t,e){let n=!1;yn<=fs?ta(t)||(t.n|=yt,n=!ea(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function et(t,e,n,r,s,i){const o=us.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Vs(n)&&a.push(o.get("length")):(a.push(o.get(kt)),Tn(t)&&a.push(o.get(ds)));break;case"delete":$(t)||(a.push(o.get(kt)),Tn(t)&&a.push(o.get(ds)));break;case"set":Tn(t)&&a.push(o.get(kt));break}if(a.length===1)a[0]&&hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);hs(Ws(c))}}function hs(t,e){for(const n of $(t)?t:[...t])(n!==He||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Xl=Us("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Hs)),Ql=zs(),Zl=zs(!1,!0),eu=zs(!0),Oi=tu();function tu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn();const r=q(this)[e].apply(this,n);return dn(),r}}),t}function zs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?_u:la:e?ca:aa).get(r))return r;const o=$(r);if(!t&&o&&z(Oi,s))return Reflect.get(Oi,s,i);const a=Reflect.get(r,s,i);return(Hs(s)?sa.has(s):Xl(s))||(t||Ae(r,"get",s),e)?a:ue(a)?!o||!Vs(s)?a.value:a:ge(a)?t?ua(a):hn(a):a}}const nu=ia(),ru=ia(!0);function ia(t=!1){return function(n,r,s,i){let o=n[r];if(Dn(o)&&ue(o)&&!ue(s))return!1;if(!t&&!Dn(s)&&(fa(s)||(s=q(s),o=q(o)),!$(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=$(n)&&Vs(r)?Number(r)<n.length:z(n,r),c=Reflect.set(n,r,s,i);return n===q(i)&&(a?Mn(s,o)&&et(n,"set",r,s):et(n,"add",r,s)),c}}function su(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&et(t,"delete",e,void 0),r}function iu(t,e){const n=Reflect.has(t,e);return(!Hs(e)||!sa.has(e))&&Ae(t,"has",e),n}function ou(t){return Ae(t,"iterate",$(t)?"length":kt),Reflect.ownKeys(t)}const oa={get:Ql,set:nu,deleteProperty:su,has:iu,ownKeys:ou},au={get:eu,set(t,e){return!0},deleteProperty(t,e){return!0}},cu=he({},oa,{get:Zl,set:ru}),qs=t=>t,Cr=t=>Reflect.getPrototypeOf(t);function Gn(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);e!==i&&!n&&Ae(s,"get",e),!n&&Ae(s,"get",i);const{has:o}=Cr(s),a=r?qs:n?Ys:xn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Jn(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return t!==s&&!e&&Ae(r,"has",t),!e&&Ae(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Yn(t,e=!1){return t=t.__v_raw,!e&&Ae(q(t),"iterate",kt),Reflect.get(t,"size",t)}function Pi(t){t=q(t);const e=q(this);return Cr(e).has.call(e,t)||(e.add(t),et(e,"add",t,t)),this}function ki(t,e){e=q(e);const n=q(this),{has:r,get:s}=Cr(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Mn(e,o)&&et(n,"set",t,e):et(n,"add",t,e),this}function Ni(t){const e=q(this),{has:n,get:r}=Cr(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&et(e,"delete",t,void 0),i}function Mi(){const t=q(this),e=t.size!==0,n=t.clear();return e&&et(t,"clear",void 0,void 0),n}function Xn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=q(o),c=e?qs:t?Ys:xn;return!t&&Ae(a,"iterate",kt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Qn(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=Tn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?qs:e?Ys:xn;return!e&&Ae(i,"iterate",c?ds:kt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ot(t){return function(...e){return t==="delete"?!1:this}}function lu(){const t={get(i){return Gn(this,i)},get size(){return Yn(this)},has:Jn,add:Pi,set:ki,delete:Ni,clear:Mi,forEach:Xn(!1,!1)},e={get(i){return Gn(this,i,!1,!0)},get size(){return Yn(this)},has:Jn,add:Pi,set:ki,delete:Ni,clear:Mi,forEach:Xn(!1,!0)},n={get(i){return Gn(this,i,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Xn(!0,!1)},r={get(i){return Gn(this,i,!0,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qn(i,!1,!1),n[i]=Qn(i,!0,!1),e[i]=Qn(i,!1,!0),r[i]=Qn(i,!0,!0)}),[t,n,e,r]}const[uu,fu,du,hu]=lu();function Gs(t,e){const n=e?t?hu:du:t?fu:uu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const pu={get:Gs(!1,!1)},gu={get:Gs(!1,!0)},mu={get:Gs(!0,!1)},aa=new WeakMap,ca=new WeakMap,la=new WeakMap,_u=new WeakMap;function vu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yu(t){return t.__v_skip||!Object.isExtensible(t)?0:vu(Hl(t))}function hn(t){return Dn(t)?t:Js(t,!1,oa,pu,aa)}function bu(t){return Js(t,!1,cu,gu,ca)}function ua(t){return Js(t,!0,au,mu,la)}function Js(t,e,n,r,s){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function en(t){return Dn(t)?en(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function fa(t){return!!(t&&t.__v_isShallow)}function da(t){return en(t)||Dn(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function ha(t){return ar(t,"__v_skip",!0),t}const xn=t=>ge(t)?hn(t):t,Ys=t=>ge(t)?ua(t):t;function pa(t){_t&&He&&(t=q(t),ra(t.dep||(t.dep=Ws())))}function ga(t,e){t=q(t),t.dep&&hs(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Iu(t){return ma(t,!1)}function wu(t){return ma(t,!0)}function ma(t,e){return ue(t)?t:new Eu(t,e)}class Eu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:xn(e)}get value(){return pa(this),this._value}set value(e){e=this.__v_isShallow?e:q(e),Mn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:xn(e),ga(this))}}function Sn(t){return ue(t)?t.value:t}const Tu={get:(t,e,n)=>Sn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _a(t){return en(t)?t:new Proxy(t,Tu)}class Su{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ks(e,()=>{this._dirty||(this._dirty=!0,ga(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=q(this);return pa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Au(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new Su(r,s,i||!s,n)}Promise.resolve();function vt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Rr(i,e,n)}return s}function Pe(t,e,n,r){if(j(t)){const i=vt(t,e,n,r);return i&&Zo(i)&&i.catch(o=>{Rr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Rr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vt(c,null,10,[t,o,a]);return}}Cu(t,n,s,r)}function Cu(t,e,n,r=!0){console.error(t)}let cr=!1,ps=!1;const Ee=[];let Xe=0;const An=[];let bn=null,Gt=0;const Cn=[];let ut=null,Jt=0;const va=Promise.resolve();let Xs=null,gs=null;function ya(t){const e=Xs||va;return t?e.then(this?t.bind(this):t):e}function Ru(t){let e=Xe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;Ln(Ee[r])<t?e=r+1:n=r}return e}function ba(t){(!Ee.length||!Ee.includes(t,cr&&t.allowRecurse?Xe+1:Xe))&&t!==gs&&(t.id==null?Ee.push(t):Ee.splice(Ru(t.id),0,t),Ia())}function Ia(){!cr&&!ps&&(ps=!0,Xs=va.then(Ta))}function Ou(t){const e=Ee.indexOf(t);e>Xe&&Ee.splice(e,1)}function wa(t,e,n,r){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ia()}function Pu(t){wa(t,bn,An,Gt)}function ku(t){wa(t,ut,Cn,Jt)}function Qs(t,e=null){if(An.length){for(gs=e,bn=[...new Set(An)],An.length=0,Gt=0;Gt<bn.length;Gt++)bn[Gt]();bn=null,Gt=0,gs=null,Qs(t,e)}}function Ea(t){if(Cn.length){const e=[...new Set(Cn)];if(Cn.length=0,ut){ut.push(...e);return}for(ut=e,ut.sort((n,r)=>Ln(n)-Ln(r)),Jt=0;Jt<ut.length;Jt++)ut[Jt]();ut=null,Jt=0}}const Ln=t=>t.id==null?1/0:t.id;function Ta(t){ps=!1,cr=!0,Qs(t),Ee.sort((n,r)=>Ln(n)-Ln(r));const e=Ne;try{for(Xe=0;Xe<Ee.length;Xe++){const n=Ee[Xe];n&&n.active!==!1&&vt(n,null,14)}}finally{Xe=0,Ee.length=0,Ea(),cr=!1,Xs=null,(Ee.length||An.length||Cn.length)&&Ta(t)}}function Nu(t,e,...n){const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Q;h?s=n.map(m=>m.trim()):d&&(s=n.map(ls))}let a,c=r[a=zr(e)]||r[a=zr(qe(e))];!c&&i&&(c=r[a=zr(un(e))]),c&&Pe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,s)}}function Sa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Sa(l,e,!0);u&&(a=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):he(o,i),r.set(t,o),o)}function Zs(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,un(e))||z(t,e))}let Oe=null,Or=null;function lr(t){const e=Oe;return Oe=t,Or=t&&t.type.__scopeId||null,e}function vv(t){Or=t}function yv(){Or=null}function Mu(t,e=Oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wi(-1);const i=lr(e),o=t(...s);return lr(i),r._d&&Wi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function qr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:m,ctx:S,inheritAttrs:N}=t;let C,R;const x=lr(t);try{if(n.shapeFlag&4){const W=s||r;C=je(u.call(W,W,d,i,m,h,S)),R=c}else{const W=e;C=je(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),R=e.props?c:Du(c)}}catch(W){Rn.length=0,Rr(W,t,1),C=Te(bt)}let H=C;if(R&&N!==!1){const W=Object.keys(R),{shapeFlag:se}=H;W.length&&se&7&&(o&&W.some(js)&&(R=xu(R,o)),H=sn(H,R))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,lr(x),C}const Du=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const r in t)(!js(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Lu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Di(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Zs(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Di(r,o,l):!0:!!o;return!1}function Di(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zs(n,i))return!0}return!1}function Uu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fu=t=>t.__isSuspense;function $u(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):ku(t)}function tr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=le||Oe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r.proxy):e}}const xi={};function tn(t,e,n){return Aa(t,e,n)}function Aa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=le;let c,l=!1,u=!1;if(ue(t)?(c=()=>t.value,l=fa(t)):en(t)?(c=()=>t,r=!0):$(t)?(u=!0,l=t.some(en),c=()=>t.map(R=>{if(ue(R))return R.value;if(en(R))return Ot(R);if(j(R))return vt(R,a,2)})):j(t)?e?c=()=>vt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Pe(t,a,3,[h])}:c=Ne,e&&r){const R=c;c=()=>Ot(R())}let d,h=R=>{d=C.onStop=()=>{vt(R,a,4)}};if(Un)return h=Ne,e?n&&Pe(e,a,3,[c(),u?[]:void 0,h]):c(),Ne;let m=u?[]:xi;const S=()=>{if(!!C.active)if(e){const R=C.run();(r||l||(u?R.some((x,H)=>Mn(x,m[H])):Mn(R,m)))&&(d&&d(),Pe(e,a,3,[R,m===xi?void 0:m,h]),m=R)}else C.run()};S.allowRecurse=!!e;let N;s==="sync"?N=S:s==="post"?N=()=>ye(S,a&&a.suspense):N=()=>{!a||a.isMounted?Pu(S):S()};const C=new Ks(c,N);return e?n?S():m=C.run():s==="post"?ye(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Bs(a.scope.effects,C)}}function ju(t,e,n){const r=this.proxy,s=pe(t)?t.includes(".")?Ca(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=le;on(this);const a=Aa(s,i.bind(r),n);return o?on(o):Mt(),a}function Ca(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ot(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))Ot(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Ot(t[n],e);else if(jl(t)||Tn(t))t.forEach(n=>{Ot(n,e)});else if(Vl(t))for(const n in t)Ot(t[n],e);return t}function Bu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Na(()=>{t.isMounted=!0}),Ma(()=>{t.isUnmounting=!0}),t}const Re=[Function,Array],Hu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},setup(t,{slots:e}){const n=kf(),r=Bu();let s;return()=>{const i=e.default&&Oa(e.default(),!0);if(!i||!i.length)return;const o=q(t),{mode:a}=o,c=i[0];if(r.isLeaving)return Gr(c);const l=Li(c);if(!l)return Gr(c);const u=ms(l,o,r,n);_s(l,u);const d=n.subTree,h=d&&Li(d);let m=!1;const{getTransitionKey:S}=l.type;if(S){const N=S();s===void 0?s=N:N!==s&&(s=N,m=!0)}if(h&&h.type!==bt&&(!Ct(l,h)||m)){const N=ms(h,o,r,n);if(_s(h,N),a==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,n.update()},Gr(c);a==="in-out"&&l.type!==bt&&(N.delayLeave=(C,R,x)=>{const H=Ra(r,h);H[String(h.key)]=h,C._leaveCb=()=>{R(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},Vu=Hu;function Ra(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ms(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:S,onBeforeAppear:N,onAppear:C,onAfterAppear:R,onAppearCancelled:x}=e,H=String(t.key),W=Ra(n,t),se=(V,ae)=>{V&&Pe(V,r,9,ae)},oe={mode:i,persisted:o,beforeEnter(V){let ae=a;if(!n.isMounted)if(s)ae=N||a;else return;V._leaveCb&&V._leaveCb(!0);const Z=W[H];Z&&Ct(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),se(ae,[V])},enter(V){let ae=c,Z=l,fe=u;if(!n.isMounted)if(s)ae=C||c,Z=R||l,fe=x||u;else return;let de=!1;const _e=V._enterCb=it=>{de||(de=!0,it?se(fe,[V]):se(Z,[V]),oe.delayedLeave&&oe.delayedLeave(),V._enterCb=void 0)};ae?(ae(V,_e),ae.length<=1&&_e()):_e()},leave(V,ae){const Z=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ae();se(d,[V]);let fe=!1;const de=V._leaveCb=_e=>{fe||(fe=!0,ae(),_e?se(S,[V]):se(m,[V]),V._leaveCb=void 0,W[Z]===t&&delete W[Z])};W[Z]=t,h?(h(V,de),h.length<=1&&de()):de()},clone(V){return ms(V,e,n,r)}};return oe}function Gr(t){if(Pr(t))return t=sn(t),t.children=null,t}function Li(t){return Pr(t)?t.children?t.children[0]:void 0:t}function _s(t,e){t.shapeFlag&6&&t.component?_s(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oa(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===$e?(i.patchFlag&128&&r++,n=n.concat(Oa(i.children,e))):(e||i.type!==bt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Pa(t){return j(t)?{setup:t,name:t.name}:t}const vs=t=>!!t.type.__asyncLoader,Pr=t=>t.type.__isKeepAlive;function Wu(t,e){ka(t,"a",e)}function Ku(t,e){ka(t,"da",e)}function ka(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pr(s.parent.vnode)&&zu(r,e,n,s),s=s.parent}}function zu(t,e,n,r){const s=kr(e,t,r,!0);Da(()=>{Bs(r[e],s)},n)}function kr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fn(),on(n);const a=Pe(e,n,t,o);return Mt(),dn(),a});return r?s.unshift(i):s.push(i),i}}const rt=t=>(e,n=le)=>(!Un||t==="sp")&&kr(t,e,n),qu=rt("bm"),Na=rt("m"),Gu=rt("bu"),Ju=rt("u"),Ma=rt("bum"),Da=rt("um"),Yu=rt("sp"),Xu=rt("rtg"),Qu=rt("rtc");function Zu(t,e=le){kr("ec",t,e)}let ys=!0;function ef(t){const e=La(t),n=t.proxy,r=t.ctx;ys=!1,e.beforeCreate&&Ui(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:S,activated:N,deactivated:C,beforeDestroy:R,beforeUnmount:x,destroyed:H,unmounted:W,render:se,renderTracked:oe,renderTriggered:V,errorCaptured:ae,serverPrefetch:Z,expose:fe,inheritAttrs:de,components:_e,directives:it,filters:Bt}=e;if(l&&tf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const G=o[ee];j(G)&&(r[ee]=G.bind(n))}if(s){const ee=s.call(n,n);ge(ee)&&(t.data=hn(ee))}if(ys=!0,i)for(const ee in i){const G=i[ee],Ie=j(G)?G.bind(n,n):j(G.get)?G.get.bind(n,n):Ne,Vt=!j(G)&&j(G.set)?G.set.bind(n):Ne,Je=Be({get:Ie,set:Vt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Le=>Je.value=Le})}if(a)for(const ee in a)xa(a[ee],r,n,ee);if(c){const ee=j(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{tr(G,ee[G])})}u&&Ui(u,t,"c");function ce(ee,G){$(G)?G.forEach(Ie=>ee(Ie.bind(n))):G&&ee(G.bind(n))}if(ce(qu,d),ce(Na,h),ce(Gu,m),ce(Ju,S),ce(Wu,N),ce(Ku,C),ce(Zu,ae),ce(Qu,oe),ce(Xu,V),ce(Ma,x),ce(Da,W),ce(Yu,Z),$(fe))if(fe.length){const ee=t.exposed||(t.exposed={});fe.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:Ie=>n[G]=Ie})})}else t.exposed||(t.exposed={});se&&t.render===Ne&&(t.render=se),de!=null&&(t.inheritAttrs=de),_e&&(t.components=_e),it&&(t.directives=it)}function tf(t,e,n=Ne,r=!1){$(t)&&(t=bs(t));for(const s in t){const i=t[s];let o;ge(i)?"default"in i?o=Ve(i.from||s,i.default,!0):o=Ve(i.from||s):o=Ve(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ui(t,e,n){Pe($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,r){const s=r.includes(".")?Ca(n,r):()=>n[r];if(pe(t)){const i=e[t];j(i)&&tn(s,i)}else if(j(t))tn(s,t.bind(n));else if(ge(t))if($(t))t.forEach(i=>xa(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&tn(s,i,t)}}function La(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ur(c,l,o,!0)),ur(c,e,o)),i.set(e,c),c}function ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ur(t,i,n,!0),s&&s.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=nf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nf={data:Fi,props:St,emits:St,methods:St,computed:St,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:St,directives:St,watch:sf,provide:Fi,inject:rf};function Fi(t,e){return e?t?function(){return he(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function rf(t,e){return St(bs(t),bs(e))}function bs(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function St(t,e){return t?he(he(Object.create(null),t),e):e}function sf(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function of(t,e,n,r=!1){const s={},i={};ar(i,Nr,1),t.propsDefaults=Object.create(null),Ua(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function af(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const m=e[h];if(c)if(z(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const S=qe(h);s[S]=Is(c,a,S,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{Ua(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!z(e,d)&&((u=un(d))===d||!z(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Is(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!z(e,d)&&!0)&&(delete i[d],l=!0)}l&&et(t,"set","$attrs")}function Ua(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zn(c))continue;const l=e[c];let u;s&&z(s,u=qe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||Q;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Is(s,c,d,l[d],t,!z(l,d))}}return o}function Is(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(on(s),r=l[n]=c.call(null,e),Mt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===un(n))&&(r=!0))}return r}function Fa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=d=>{c=!0;const[h,m]=Fa(d,e,!0);he(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Zt),Zt;if($(i))for(let u=0;u<i.length;u++){const d=qe(i[u]);$i(d)&&(o[d]=Q)}else if(i)for(const u in i){const d=qe(u);if($i(d)){const h=i[u],m=o[d]=$(h)||j(h)?{type:h}:h;if(m){const S=Hi(Boolean,m.type),N=Hi(String,m.type);m[0]=S>-1,m[1]=N<0||S<N,(S>-1||z(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function $i(t){return t[0]!=="$"}function ji(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Bi(t,e){return ji(t)===ji(e)}function Hi(t,e){return $(e)?e.findIndex(n=>Bi(n,t)):j(e)&&Bi(e,t)?0:-1}const $a=t=>t[0]==="_"||t==="$stable",ei=t=>$(t)?t.map(je):[je(t)],cf=(t,e,n)=>{const r=Mu((...s)=>ei(e(...s)),n);return r._c=!1,r},ja=(t,e,n)=>{const r=t._ctx;for(const s in t){if($a(s))continue;const i=t[s];if(j(i))e[s]=cf(s,i,r);else if(i!=null){const o=ei(i);e[s]=()=>o}}},Ba=(t,e)=>{const n=ei(e);t.slots.default=()=>n},lf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),ar(e,"_",n)):ja(e,t.slots={})}else t.slots={},e&&Ba(t,e);ar(t.slots,Nr,1)},uf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(he(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ja(e,s)),o=e}else e&&(Ba(t,e),o={default:1});if(i)for(const a in s)!$a(a)&&!(a in o)&&delete s[a]};function bv(t,e){const n=Oe;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&Ot(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fn(),Pe(c,n,8,[t.el,a,t,e]),dn())}}function Ha(){return{app:null,config:{isNativeTag:Ul,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ff=0;function df(t,e){return function(r,s=null){s!=null&&!ge(s)&&(s=null);const i=Ha(),o=new Set;let a=!1;const c=i.app={_uid:ff++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ff,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=Te(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,ri(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ws(t,e,n,r,s=!1){if($(t)){t.forEach((h,m)=>ws(h,e&&($(e)?e[m]:e),n,r,s));return}if(vs(r)&&!s)return;const i=r.shapeFlag&4?ri(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Q?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,z(d,l)&&(d[l]=null)):ue(l)&&(l.value=null)),j(c))vt(c,a,12,[o,u]);else{const h=pe(c),m=ue(c);if(h||m){const S=()=>{if(t.f){const N=h?u[c]:c.value;s?$(N)&&Bs(N,i):$(N)?N.includes(i)||N.push(i):h?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,z(d,c)&&(d[c]=o)):ue(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,ye(S,n)):S()}}}const ye=$u;function hf(t){return pf(t)}function pf(t,e){const n=zl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Ne,cloneNode:S,insertStaticContent:N}=t,C=(f,p,g,y=null,v=null,w=null,A=!1,I=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ct(f,p)&&(y=k(f),Ce(f,v,w,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=p;switch(b){case ti:R(f,p,g,y);break;case bt:x(f,p,g,y);break;case nr:f==null&&H(p,g,y,A);break;case $e:it(f,p,g,y,v,w,A,I,E);break;default:O&1?oe(f,p,g,y,v,w,A,I,E):O&6?Bt(f,p,g,y,v,w,A,I,E):(O&64||O&128)&&b.process(f,p,g,y,v,w,A,I,E,te)}M!=null&&v&&ws(M,f&&f.ref,w,p||f,!p)},R=(f,p,g,y)=>{if(f==null)r(p.el=a(p.children),g,y);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},x=(f,p,g,y)=>{f==null?r(p.el=c(p.children||""),g,y):p.el=f.el},H=(f,p,g,y)=>{[f.el,f.anchor]=N(f.children,p,g,y,f.el,f.anchor)},W=({el:f,anchor:p},g,y)=>{let v;for(;f&&f!==p;)v=h(f),r(f,g,y),f=v;r(p,g,y)},se=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),s(f),f=g;s(p)},oe=(f,p,g,y,v,w,A,I,E)=>{A=A||p.type==="svg",f==null?V(p,g,y,v,w,A,I,E):fe(f,p,v,w,A,I,E)},V=(f,p,g,y,v,w,A,I)=>{let E,b;const{type:M,props:O,shapeFlag:D,transition:U,patchFlag:K,dirs:ie}=f;if(f.el&&S!==void 0&&K===-1)E=f.el=S(f.el);else{if(E=f.el=o(f.type,w,O&&O.is,O),D&8?u(E,f.children):D&16&&Z(f.children,E,null,y,v,w&&M!=="foreignObject",A,I),ie&&wt(f,null,y,"created"),O){for(const re in O)re!=="value"&&!Zn(re)&&i(E,re,null,O[re],w,f.children,y,v,T);"value"in O&&i(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Fe(b,y,f)}ae(E,f,f.scopeId,A,y)}ie&&wt(f,null,y,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;Y&&U.beforeEnter(E),r(E,p,g),((b=O&&O.onVnodeMounted)||Y||ie)&&ye(()=>{b&&Fe(b,y,f),Y&&U.enter(E),ie&&wt(f,null,y,"mounted")},v)},ae=(f,p,g,y,v)=>{if(g&&m(f,g),y)for(let w=0;w<y.length;w++)m(f,y[w]);if(v){let w=v.subTree;if(p===w){const A=v.vnode;ae(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},Z=(f,p,g,y,v,w,A,I,E=0)=>{for(let b=E;b<f.length;b++){const M=f[b]=I?ft(f[b]):je(f[b]);C(null,M,p,g,y,v,w,A,I)}},fe=(f,p,g,y,v,w,A)=>{const I=p.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:M}=p;E|=f.patchFlag&16;const O=f.props||Q,D=p.props||Q;let U;g&&Et(g,!1),(U=D.onVnodeBeforeUpdate)&&Fe(U,g,p,f),M&&wt(p,f,g,"beforeUpdate"),g&&Et(g,!0);const K=v&&p.type!=="foreignObject";if(b?de(f.dynamicChildren,b,I,g,y,K,w):A||Ie(f,p,I,null,g,y,K,w,!1),E>0){if(E&16)_e(I,p,O,D,g,y,v);else if(E&2&&O.class!==D.class&&i(I,"class",null,D.class,v),E&4&&i(I,"style",O.style,D.style,v),E&8){const ie=p.dynamicProps;for(let Y=0;Y<ie.length;Y++){const re=ie[Y],ke=O[re],Wt=D[re];(Wt!==ke||re==="value")&&i(I,re,ke,Wt,v,f.children,g,y,T)}}E&1&&f.children!==p.children&&u(I,p.children)}else!A&&b==null&&_e(I,p,O,D,g,y,v);((U=D.onVnodeUpdated)||M)&&ye(()=>{U&&Fe(U,g,p,f),M&&wt(p,f,g,"updated")},y)},de=(f,p,g,y,v,w,A)=>{for(let I=0;I<p.length;I++){const E=f[I],b=p[I],M=E.el&&(E.type===$e||!Ct(E,b)||E.shapeFlag&70)?d(E.el):g;C(E,b,M,null,y,v,w,A,!0)}},_e=(f,p,g,y,v,w,A)=>{if(g!==y){for(const I in y){if(Zn(I))continue;const E=y[I],b=g[I];E!==b&&I!=="value"&&i(f,I,b,E,A,p.children,v,w,T)}if(g!==Q)for(const I in g)!Zn(I)&&!(I in y)&&i(f,I,g[I],null,A,p.children,v,w,T);"value"in y&&i(f,"value",g.value,y.value)}},it=(f,p,g,y,v,w,A,I,E)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:U}=p;U&&(I=I?I.concat(U):U),f==null?(r(b,g,y),r(M,g,y),Z(p.children,g,M,v,w,A,I,E)):O>0&&O&64&&D&&f.dynamicChildren?(de(f.dynamicChildren,D,g,v,w,A,I),(p.key!=null||v&&p===v.subTree)&&Va(f,p,!0)):Ie(f,p,g,M,v,w,A,I,E)},Bt=(f,p,g,y,v,w,A,I,E)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,y,A,E):Ht(p,g,y,v,w,A,E):ce(f,p,E)},Ht=(f,p,g,y,v,w,A)=>{const I=f.component=Pf(f,y,v);if(Pr(f)&&(I.ctx.renderer=te),Nf(I),I.asyncDep){if(v&&v.registerDep(I,ee),!f.el){const E=I.subTree=Te(bt);x(null,E,p,g)}return}ee(I,f,p,g,v,w,A)},ce=(f,p,g)=>{const y=p.component=f.component;if(Lu(f,p,g))if(y.asyncDep&&!y.asyncResolved){G(y,p,g);return}else y.next=p,Ou(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ee=(f,p,g,y,v,w,A)=>{const I=()=>{if(f.isMounted){let{next:M,bu:O,u:D,parent:U,vnode:K}=f,ie=M,Y;Et(f,!1),M?(M.el=K.el,G(f,M,A)):M=K,O&&er(O),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&Fe(Y,U,M,K),Et(f,!0);const re=qr(f),ke=f.subTree;f.subTree=re,C(ke,re,d(ke.el),k(ke),f,v,w),M.el=re.el,ie===null&&Uu(f,re.el),D&&ye(D,v),(Y=M.props&&M.props.onVnodeUpdated)&&ye(()=>Fe(Y,U,M,K),v)}else{let M;const{el:O,props:D}=p,{bm:U,m:K,parent:ie}=f,Y=vs(p);if(Et(f,!1),U&&er(U),!Y&&(M=D&&D.onVnodeBeforeMount)&&Fe(M,ie,p),Et(f,!0),O&&F){const re=()=>{f.subTree=qr(f),F(O,f.subTree,f,v,null)};Y?p.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=qr(f);C(null,re,g,y,f,v,w),p.el=re.el}if(K&&ye(K,v),!Y&&(M=D&&D.onVnodeMounted)){const re=p;ye(()=>Fe(M,ie,re),v)}p.shapeFlag&256&&f.a&&ye(f.a,v),f.isMounted=!0,p=g=y=null}},E=f.effect=new Ks(I,()=>ba(f.update),f.scope),b=f.update=E.run.bind(E);b.id=f.uid,Et(f,!0),b()},G=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,af(f,p.props,y,g),uf(f,p.children,g),fn(),Qs(void 0,f.update),dn()},Ie=(f,p,g,y,v,w,A,I,E=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=p.children,{patchFlag:D,shapeFlag:U}=p;if(D>0){if(D&128){Je(b,O,g,y,v,w,A,I,E);return}else if(D&256){Vt(b,O,g,y,v,w,A,I,E);return}}U&8?(M&16&&T(b,v,w),O!==b&&u(g,O)):M&16?U&16?Je(b,O,g,y,v,w,A,I,E):T(b,v,w,!0):(M&8&&u(g,""),U&16&&Z(O,g,y,v,w,A,I,E))},Vt=(f,p,g,y,v,w,A,I,E)=>{f=f||Zt,p=p||Zt;const b=f.length,M=p.length,O=Math.min(b,M);let D;for(D=0;D<O;D++){const U=p[D]=E?ft(p[D]):je(p[D]);C(f[D],U,g,null,v,w,A,I,E)}b>M?T(f,v,w,!0,!1,O):Z(p,g,y,v,w,A,I,E,O)},Je=(f,p,g,y,v,w,A,I,E)=>{let b=0;const M=p.length;let O=f.length-1,D=M-1;for(;b<=O&&b<=D;){const U=f[b],K=p[b]=E?ft(p[b]):je(p[b]);if(Ct(U,K))C(U,K,g,null,v,w,A,I,E);else break;b++}for(;b<=O&&b<=D;){const U=f[O],K=p[D]=E?ft(p[D]):je(p[D]);if(Ct(U,K))C(U,K,g,null,v,w,A,I,E);else break;O--,D--}if(b>O){if(b<=D){const U=D+1,K=U<M?p[U].el:y;for(;b<=D;)C(null,p[b]=E?ft(p[b]):je(p[b]),g,K,v,w,A,I,E),b++}}else if(b>D)for(;b<=O;)Ce(f[b],v,w,!0),b++;else{const U=b,K=b,ie=new Map;for(b=K;b<=D;b++){const we=p[b]=E?ft(p[b]):je(p[b]);we.key!=null&&ie.set(we.key,b)}let Y,re=0;const ke=D-K+1;let Wt=!1,Ti=0;const _n=new Array(ke);for(b=0;b<ke;b++)_n[b]=0;for(b=U;b<=O;b++){const we=f[b];if(re>=ke){Ce(we,v,w,!0);continue}let Ue;if(we.key!=null)Ue=ie.get(we.key);else for(Y=K;Y<=D;Y++)if(_n[Y-K]===0&&Ct(we,p[Y])){Ue=Y;break}Ue===void 0?Ce(we,v,w,!0):(_n[Ue-K]=b+1,Ue>=Ti?Ti=Ue:Wt=!0,C(we,p[Ue],g,null,v,w,A,I,E),re++)}const Si=Wt?gf(_n):Zt;for(Y=Si.length-1,b=ke-1;b>=0;b--){const we=K+b,Ue=p[we],Ai=we+1<M?p[we+1].el:y;_n[b]===0?C(null,Ue,g,Ai,v,w,A,I,E):Wt&&(Y<0||b!==Si[Y]?Le(Ue,g,Ai,2):Y--)}}},Le=(f,p,g,y,v=null)=>{const{el:w,type:A,transition:I,children:E,shapeFlag:b}=f;if(b&6){Le(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){A.move(f,p,g,te);return}if(A===$e){r(w,p,g);for(let O=0;O<E.length;O++)Le(E[O],p,g,y);r(f.anchor,p,g);return}if(A===nr){W(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(w),r(w,p,g),ye(()=>I.enter(w),v);else{const{leave:O,delayLeave:D,afterLeave:U}=I,K=()=>r(w,p,g),ie=()=>{O(w,()=>{K(),U&&U()})};D?D(w,K,ie):ie()}else r(w,p,g)},Ce=(f,p,g,y=!1,v=!1)=>{const{type:w,props:A,ref:I,children:E,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:D}=f;if(I!=null&&ws(I,null,g,f,!0),M&256){p.ctx.deactivate(f);return}const U=M&1&&D,K=!vs(f);let ie;if(K&&(ie=A&&A.onVnodeBeforeUnmount)&&Fe(ie,p,f),M&6)P(f.component,g,y);else{if(M&128){f.suspense.unmount(g,y);return}U&&wt(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,g,v,te,y):b&&(w!==$e||O>0&&O&64)?T(b,p,g,!1,!0):(w===$e&&O&384||!v&&M&16)&&T(E,p,g),y&&Kr(f)}(K&&(ie=A&&A.onVnodeUnmounted)||U)&&ye(()=>{ie&&Fe(ie,p,f),U&&wt(f,null,p,"unmounted")},g)},Kr=f=>{const{type:p,el:g,anchor:y,transition:v}=f;if(p===$e){_(g,y);return}if(p===nr){se(f);return}const w=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:I}=v,E=()=>A(g,w);I?I(f.el,w,E):E()}else w()},_=(f,p)=>{let g;for(;f!==p;)g=h(f),s(f),f=g;s(p)},P=(f,p,g)=>{const{bum:y,scope:v,update:w,subTree:A,um:I}=f;y&&er(y),v.stop(),w&&(w.active=!1,Ce(A,f,p,g)),I&&ye(I,p),ye(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},T=(f,p,g,y=!1,v=!1,w=0)=>{for(let A=w;A<f.length;A++)Ce(f[A],p,g,y,v)},k=f=>f.shapeFlag&6?k(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),J=(f,p,g)=>{f==null?p._vnode&&Ce(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),Ea(),p._vnode=f},te={p:C,um:Ce,m:Le,r:Kr,mt:Ht,mc:Z,pc:Ie,pbc:de,n:k,o:t};let B,F;return e&&([B,F]=e(te)),{render:J,hydrate:B,createApp:df(J,B)}}function Et({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Va(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ft(s[i]),a.el=o.el),n||Va(o,a))}}function gf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mf=t=>t.__isTeleport,Wa="components";function _f(t,e){return yf(Wa,t,!0,e)||t}const vf=Symbol();function yf(t,e,n=!0,r=!1){const s=Oe||le;if(s){const i=s.type;if(t===Wa){const a=Lf(i);if(a&&(a===e||a===qe(e)||a===Ar(qe(e))))return i}const o=Vi(s[t]||i[t],e)||Vi(s.appContext[t],e);return!o&&r?i:o}}function Vi(t,e){return t&&(t[e]||t[qe(e)]||t[Ar(qe(e))])}const $e=Symbol(void 0),ti=Symbol(void 0),bt=Symbol(void 0),nr=Symbol(void 0),Rn=[];let Nt=null;function bf(t=!1){Rn.push(Nt=t?null:[])}function If(){Rn.pop(),Nt=Rn[Rn.length-1]||null}let fr=1;function Wi(t){fr+=t}function Ka(t){return t.dynamicChildren=fr>0?Nt||Zt:null,If(),fr>0&&Nt&&Nt.push(t),t}function Iv(t,e,n,r,s,i){return Ka(qa(t,e,n,r,s,i,!0))}function wf(t,e,n,r,s){return Ka(Te(t,e,n,r,s,!0))}function Es(t){return t?t.__v_isVNode===!0:!1}function Ct(t,e){return t.type===e.type&&t.key===e.key}const Nr="__vInternal",za=({key:t})=>t!=null?t:null,rr=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||ue(t)||j(t)?{i:Oe,r:t,k:e,f:!!n}:t:null;function qa(t,e=null,n=null,r=0,s=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&za(e),ref:e&&rr(e),scopeId:Or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),fr>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Te=Ef;function Ef(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vf)&&(t=bt),Es(t)){const a=sn(t,e,!0);return n&&ni(a,n),a}if(Uf(t)&&(t=t.__vccOpts),e){e=Tf(e);let{class:a,style:c}=e;a&&!pe(a)&&(e.class=$s(a)),ge(c)&&(da(c)&&!$(c)&&(c=he({},c)),e.style=Fs(c))}const o=pe(t)?1:Fu(t)?128:mf(t)?64:ge(t)?4:j(t)?2:0;return qa(t,e,n,r,s,o,i,!0)}function Tf(t){return t?da(t)||Nr in t?he({},t):t:null}function sn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Af(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&za(a),ref:e&&e.ref?n&&s?$(s)?s.concat(rr(e)):[s,rr(e)]:rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor}}function Sf(t=" ",e=0){return Te(ti,null,t,e)}function wv(t,e){const n=Te(nr,null,t);return n.staticCount=e,n}function je(t){return t==null||typeof t=="boolean"?Te(bt):$(t)?Te($e,null,t.slice()):typeof t=="object"?ft(t):Te(ti,null,String(t))}function ft(t){return t.el===null||t.memo?t:sn(t)}function ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Nr in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),r&64?(n=16,e=[Sf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Af(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$s([e.class,r.class]));else if(s==="style")e.style=Fs([e.style,r.style]);else if(Er(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Pe(t,e,7,[n,r])}const Ts=t=>t?Ga(t)?ri(t)||t.proxy:Ts(t.parent):null,dr=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ts(t.parent),$root:t=>Ts(t.root),$emit:t=>t.emit,$options:t=>La(t),$forceUpdate:t=>()=>ba(t.update),$nextTick:t=>ya.bind(t.proxy),$watch:t=>ju.bind(t)}),Cf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&z(r,e))return o[e]=1,r[e];if(s!==Q&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==Q&&z(n,e))return o[e]=4,n[e];ys&&(o[e]=0)}}const u=dr[e];let d,h;if(u)return e==="$attrs"&&Ae(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Q&&z(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,z(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&z(s,e)?(s[e]=n,!0):r!==Q&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&z(t,o)||e!==Q&&z(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(dr,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Rf=Ha();let Of=0;function Pf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Rf,i={uid:Of++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ql(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fa(r,s),emitsOptions:Sa(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nu.bind(null,i),t.ce&&t.ce(i),i}let le=null;const kf=()=>le||Oe,on=t=>{le=t,t.scope.on()},Mt=()=>{le&&le.scope.off(),le=null};function Ga(t){return t.vnode.shapeFlag&4}let Un=!1;function Nf(t,e=!1){Un=e;const{props:n,children:r}=t.vnode,s=Ga(t);of(t,n,s,e),lf(t,r);const i=s?Mf(t,e):void 0;return Un=!1,i}function Mf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ha(new Proxy(t.ctx,Cf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?xf(t):null;on(t),fn();const i=vt(r,t,0,[t.props,s]);if(dn(),Mt(),Zo(i)){if(i.then(Mt,Mt),e)return i.then(o=>{Ki(t,o,e)}).catch(o=>{Rr(o,t,0)});t.asyncDep=i}else Ki(t,i,e)}else Ja(t,e)}function Ki(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=_a(e)),Ja(t,n)}let zi;function Ja(t,e,n){const r=t.type;if(!t.render){if(!e&&zi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=he(he({isCustomElement:i,delimiters:a},o),c);r.render=zi(s,l)}}t.render=r.render||Ne}on(t),fn(),ef(t),dn(),Mt()}function Df(t){return new Proxy(t.attrs,{get(e,n){return Ae(t,"get","$attrs"),e[n]}})}function xf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Df(t))},slots:t.slots,emit:t.emit,expose:e}}function ri(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_a(ha(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dr)return dr[n](t)}}))}function Lf(t){return j(t)&&t.displayName||t.name}function Uf(t){return j(t)&&"__vccOpts"in t}const Be=(t,e)=>Au(t,e,Un);function Ya(t,e,n){const r=arguments.length;return r===2?ge(e)&&!$(e)?Es(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Es(n)&&(n=[n]),Te(t,e,n))}const Ff="3.2.31",$f="http://www.w3.org/2000/svg",Rt=typeof document!="undefined"?document:null,qi=Rt&&Rt.createElement("template"),jf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rt.createElementNS($f,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qi.innerHTML=r?`<svg>${t}</svg>`:t;const a=qi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Bf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Hf(t,e,n){const r=t.style,s=pe(n);if(n&&!s){for(const i in n)Ss(r,i,n[i]);if(e&&!pe(e))for(const i in e)n[i]==null&&Ss(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Gi=/\s*!important$/;function Ss(t,e,n){if($(n))n.forEach(r=>Ss(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Vf(t,e);Gi.test(n)?t.setProperty(un(r),n.replace(Gi,""),"important"):t[r]=n}}const Ji=["Webkit","Moz","ms"],Jr={};function Vf(t,e){const n=Jr[e];if(n)return n;let r=qe(e);if(r!=="filter"&&r in t)return Jr[e]=r;r=Ar(r);for(let s=0;s<Ji.length;s++){const i=Ji[s]+r;if(i in t)return Jr[e]=i}return e}const Yi="http://www.w3.org/1999/xlink";function Wf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yi,e.slice(6,e.length)):t.setAttributeNS(Yi,e,n);else{const i=Ml(e);n==null||i&&!Qo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Kf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Qo(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let hr=Date.now,Xa=!1;if(typeof window!="undefined"){hr()>document.createEvent("Event").timeStamp&&(hr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Xa=!!(t&&Number(t[1])<=53)}let As=0;const zf=Promise.resolve(),qf=()=>{As=0},Gf=()=>As||(zf.then(qf),As=hr());function Yt(t,e,n,r){t.addEventListener(e,n,r)}function Jf(t,e,n,r){t.removeEventListener(e,n,r)}function Yf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Xf(e);if(r){const l=i[e]=Qf(r,s);Yt(t,a,l,c)}else o&&(Jf(t,a,o,c),i[e]=void 0)}}const Xi=/(?:Once|Passive|Capture)$/;function Xf(t){let e;if(Xi.test(t)){e={};let n;for(;n=t.match(Xi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[un(t.slice(2)),e]}function Qf(t,e){const n=r=>{const s=r.timeStamp||hr();(Xa||s>=n.attached-1)&&Pe(Zf(r,n.value),e,5,[r])};return n.value=t,n.attached=Gf(),n}function Zf(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qi=/^on[a-z]/,ed=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Bf(t,r,s):e==="style"?Hf(t,n,r):Er(e)?js(e)||Yf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):td(t,e,r,s))?Kf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wf(t,e,r,s))};function td(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Qi.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qi.test(e)&&pe(n)?!1:e in t}const nd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vu.props;const Zi=t=>{const e=t.props["onUpdate:modelValue"];return $(e)?n=>er(e,n):e};function rd(t){t.target.composing=!0}function eo(t){const e=t.target;e.composing&&(e.composing=!1,sd(e,"input"))}function sd(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Ev={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Zi(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=ls(a)),t._assign(a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",rd),Yt(t,"compositionend",eo),Yt(t,"change",eo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Zi(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ls(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},id=["ctrl","shift","alt","meta"],od={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>id.some(n=>t[`${n}Key`]&&!e.includes(n))},Tv=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=od[e[s]];if(i&&i(n,e))return}return t(n,...r)},ad=he({patchProp:ed},jf);let to;function cd(){return to||(to=hf(ad))}const ld=(...t)=>{const e=cd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ud(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ud(t){return pe(t)?document.querySelector(t):t}const fd="modulepreload",no={},dd="/",Tt=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${dd}${r}`,r in no)return;no[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":fd,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function hd(){return Qa().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Qa(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const pd=typeof Proxy=="function",gd="devtools-plugin:setup",md="plugin:settings:set";let Kt,Cs;function _d(){var t;return Kt!==void 0||(typeof window!="undefined"&&window.performance?(Kt=!0,Cs=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Kt=!0,Cs=global.perf_hooks.performance):Kt=!1),Kt}function vd(){return _d()?Cs.now():Date.now()}class yd{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return vd()}},n&&n.on(md,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function bd(t,e){const n=t,r=Qa(),s=hd(),i=pd&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(gd,t,e);else{const o=i?new yd(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Za=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",pn=t=>Za?Symbol(t):"_vr_"+t,Id=pn("rvlm"),ro=pn("rvd"),Mr=pn("r"),ec=pn("rl"),Rs=pn("rvl"),Xt=typeof window!="undefined";function wd(t){return t.__esModule||Za&&t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Yr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const On=()=>{},Ed=/\/$/,Td=t=>t.replace(Ed,"");function Xr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Rd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Sd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function so(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ad(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&an(e.matched[r],n.matched[s])&&tc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function an(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cd(t[n],e[n]))return!1;return!0}function Cd(t,e){return Array.isArray(t)?io(t,e):Array.isArray(e)?io(e,t):t===e}function io(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Rd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Fn;(function(t){t.pop="pop",t.push="push"})(Fn||(Fn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function Od(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Td(t)}const Pd=/^[^#]+#/;function kd(t,e){return t.replace(Pd,"#")+e}function Nd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Md(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function oo(t,e){return(history.state?history.state.position-e:-1)+t}const Os=new Map;function Dd(t,e){Os.set(t,e)}function xd(t){const e=Os.get(t);return Os.delete(t),e}let Ld=()=>location.protocol+"//"+location.host;function nc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),so(c,"")}return so(n,t)+r+s}function Ud(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=nc(t,location),S=n.value,N=e.value;let C=0;if(h){if(n.value=m,e.value=h,o&&o===S){o=null;return}C=N?h.position-N.position:0}else r(m);s.forEach(R=>{R(n.value,S,{delta:C,type:Fn.pop,direction:C?C>0?Pn.forward:Pn.back:Pn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const S=s.indexOf(h);S>-1&&s.splice(S,1)};return i.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(X({},h.state,{scroll:Dr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function ao(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dr():null}}function Fd(t){const{history:e,location:n}=window,r={value:nc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Ld()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=X({},e.state,ao(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=X({},s.value,e.state,{forward:c,scroll:Dr()});i(u.current,u,!0);const d=X({},ao(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function $d(t){t=Od(t);const e=Fd(t),n=Ud(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:kd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jd(t){return typeof t=="string"||t&&typeof t=="object"}function rc(t){return typeof t=="string"||typeof t=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sc=pn("nf");var co;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(co||(co={}));function cn(t,e){return X(new Error,{type:t,[sc]:!0},e)}function ct(t,e){return t instanceof Error&&sc in t&&(e==null||!!(t.type&e))}const lo="[^/]+?",Bd={sensitive:!1,strict:!1,start:!0,end:!0},Hd=/[.+*?^${}()[\]/\\]/g;function Vd(t,e){const n=X({},Bd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(Hd,"\\$&"),m+=40;else if(h.type===1){const{value:S,repeatable:N,optional:C,regexp:R}=h;i.push({name:S,repeatable:N,optional:C});const x=R||lo;if(x!==lo){m+=10;try{new RegExp(`(${x})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+W.message)}}let H=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(H=C&&l.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),s+=H,m+=20,C&&(m+=-8),N&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",S=i[h-1];d[S.name]=m&&S.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:S,repeatable:N,optional:C}=m,R=S in l?l[S]:"";if(Array.isArray(R)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(R)?R.join("/"):R;if(!x)if(C)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);u+=x}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Wd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Kd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Wd(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const zd={type:0,value:""},qd=/[a-zA-Z0-9_]/;function Gd(t){if(!t)return[[]];if(t==="/")return[[zd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:qd.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Jd(t,e,n){const r=Vd(Gd(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yd(t,e){const n=[],r=new Map;e=fo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,h){const m=!h,S=Qd(u);S.aliasOf=h&&h.record;const N=fo(e,u),C=[S];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of H)C.push(X({},S,{components:h?h.record.components:S.components,path:W,aliasOf:h?h.record:S}))}let R,x;for(const H of C){const{path:W}=H;if(d&&W[0]!=="/"){const se=d.record.path,oe=se[se.length-1]==="/"?"":"/";H.path=d.record.path+(W&&oe+W)}if(R=Jd(H,d,N),h?h.alias.push(R):(x=x||R,x!==R&&x.alias.push(R),m&&u.name&&!uo(R)&&o(u.name)),"children"in S){const se=S.children;for(let oe=0;oe<se.length;oe++)i(se[oe],R,h&&h.children[oe])}h=h||R,c(R)}return x?()=>{o(x)}:On}function o(u){if(rc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Kd(u,n[d])>=0&&(u.record.path!==n[d].record.path||!ic(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!uo(u)&&r.set(u.record.name,u)}function l(u,d){let h,m={},S,N;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw cn(1,{location:u});N=h.record.name,m=X(Xd(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),S=h.stringify(m)}else if("path"in u)S=u.path,h=n.find(x=>x.re.test(S)),h&&(m=h.parse(S),N=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw cn(1,{location:u,currentLocation:d});N=h.record.name,m=X({},d.params,u.params),S=h.stringify(m)}const C=[];let R=h;for(;R;)C.unshift(R.record),R=R.parent;return{name:N,path:S,params:m,matched:C,meta:eh(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Xd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Zd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Zd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function uo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eh(t){return t.reduce((e,n)=>X(e,n.meta),{})}function fo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ic(t,e){return e.children.some(n=>n===t||ic(t,n))}const oc=/#/g,th=/&/g,nh=/\//g,rh=/=/g,sh=/\?/g,ac=/\+/g,ih=/%5B/g,oh=/%5D/g,cc=/%5E/g,ah=/%60/g,lc=/%7B/g,ch=/%7C/g,uc=/%7D/g,lh=/%20/g;function si(t){return encodeURI(""+t).replace(ch,"|").replace(ih,"[").replace(oh,"]")}function uh(t){return si(t).replace(lc,"{").replace(uc,"}").replace(cc,"^")}function Ps(t){return si(t).replace(ac,"%2B").replace(lh,"+").replace(oc,"%23").replace(th,"%26").replace(ah,"`").replace(lc,"{").replace(uc,"}").replace(cc,"^")}function fh(t){return Ps(t).replace(rh,"%3D")}function dh(t){return si(t).replace(oc,"%23").replace(sh,"%3F")}function hh(t){return t==null?"":dh(t).replace(nh,"%2F")}function pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ph(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ac," "),o=i.indexOf("="),a=pr(o<0?i:i.slice(0,o)),c=o<0?null:pr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ho(t){let e="";for(let n in t){const r=t[n];if(n=fh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ps(i)):[r&&Ps(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(cn(4,{from:n,to:e})):d instanceof Error?a(d):jd(d)?a(cn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Qr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(dt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wd(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&dt(h,n,r,i,o)()}))}}return s}function mh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function po(t){const e=Ve(Mr),n=Ve(ec),r=Be(()=>e.resolve(Sn(t.to))),s=Be(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(an.bind(null,u));if(h>-1)return h;const m=go(c[l-2]);return l>1&&go(u)===m&&d[d.length-1].path!==m?d.findIndex(an.bind(null,c[l-2])):h}),i=Be(()=>s.value>-1&&bh(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&tc(n.params,r.value.params));function a(c={}){return yh(c)?e[Sn(t.replace)?"replace":"push"](Sn(t.to)).catch(On):Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const _h=Pa({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:po,setup(t,{slots:e}){const n=hn(po(t)),{options:r}=Ve(Mr),s=Be(()=>({[mo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ya("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vh=_h;function yh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function go(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mo=(t,e,n)=>t!=null?t:e!=null?e:n,Ih=Pa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Ve(Rs),s=Be(()=>t.route||r.value),i=Ve(ro,0),o=Be(()=>s.value.matched[i]);tr(ro,i+1),tr(Id,o),tr(Rs,s);const a=Iu();return tn(()=>[a.value,o.value,t.name],([c,l,u],[d,h,m])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!an(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],d=t.name;if(!u)return _o(n.default,{Component:u,route:c});const h=l.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,N=Ya(u,X({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return _o(n.default,{Component:N,route:c})||N}}});function _o(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wh=Ih;function Eh(t){const e=Yd(t.routes,t),n=t.parseQuery||ph,r=t.stringifyQuery||ho,s=t.history,i=vn(),o=vn(),a=vn(),c=wu(at);let l=at;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yr.bind(null,_=>""+_),d=Yr.bind(null,hh),h=Yr.bind(null,pr);function m(_,P){let T,k;return rc(_)?(T=e.getRecordMatcher(_),k=P):k=_,e.addRoute(k,T)}function S(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function N(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function R(_,P){if(P=X({},P||c.value),typeof _=="string"){const F=Xr(n,_,P.path),f=e.resolve({path:F.path},P),p=s.createHref(F.fullPath);return X(F,f,{params:h(f.params),hash:pr(F.hash),redirectedFrom:void 0,href:p})}let T;if("path"in _)T=X({},_,{path:Xr(n,_.path,P.path).path});else{const F=X({},_.params);for(const f in F)F[f]==null&&delete F[f];T=X({},_,{params:d(_.params)}),P.params=d(P.params)}const k=e.resolve(T,P),J=_.hash||"";k.params=u(h(k.params));const te=Sd(r,X({},_,{hash:uh(J),path:k.path})),B=s.createHref(te);return X({fullPath:te,hash:J,query:r===ho?gh(_.query):_.query||{}},k,{redirectedFrom:void 0,href:B})}function x(_){return typeof _=="string"?Xr(n,_,c.value.path):X({},_)}function H(_,P){if(l!==_)return cn(8,{from:P,to:_})}function W(_){return V(_)}function se(_){return W(X(x(_),{replace:!0}))}function oe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(_):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=x(k):{path:k},k.params={}),X({query:_.query,hash:_.hash,params:_.params},k)}}function V(_,P){const T=l=R(_),k=c.value,J=_.state,te=_.force,B=_.replace===!0,F=oe(T);if(F)return V(X(x(F),{state:J,force:te,replace:B}),P||T);const f=T;f.redirectedFrom=P;let p;return!te&&Ad(r,k,T)&&(p=cn(16,{to:f,from:k}),Vt(k,k,!0,!1)),(p?Promise.resolve(p):Z(f,k)).catch(g=>ct(g)?ct(g,2)?g:Ie(g):ee(g,f,k)).then(g=>{if(g){if(ct(g,2))return V(X(x(g.to),{state:J,force:te,replace:B}),P||f)}else g=de(f,k,!0,B,J);return fe(f,k,g),g})}function ae(_,P){const T=H(_,P);return T?Promise.reject(T):Promise.resolve()}function Z(_,P){let T;const[k,J,te]=Th(_,P);T=Qr(k.reverse(),"beforeRouteLeave",_,P);for(const F of k)F.leaveGuards.forEach(f=>{T.push(dt(f,_,P))});const B=ae.bind(null,_,P);return T.push(B),zt(T).then(()=>{T=[];for(const F of i.list())T.push(dt(F,_,P));return T.push(B),zt(T)}).then(()=>{T=Qr(J,"beforeRouteUpdate",_,P);for(const F of J)F.updateGuards.forEach(f=>{T.push(dt(f,_,P))});return T.push(B),zt(T)}).then(()=>{T=[];for(const F of _.matched)if(F.beforeEnter&&!P.matched.includes(F))if(Array.isArray(F.beforeEnter))for(const f of F.beforeEnter)T.push(dt(f,_,P));else T.push(dt(F.beforeEnter,_,P));return T.push(B),zt(T)}).then(()=>(_.matched.forEach(F=>F.enterCallbacks={}),T=Qr(te,"beforeRouteEnter",_,P),T.push(B),zt(T))).then(()=>{T=[];for(const F of o.list())T.push(dt(F,_,P));return T.push(B),zt(T)}).catch(F=>ct(F,8)?F:Promise.reject(F))}function fe(_,P,T){for(const k of a.list())k(_,P,T)}function de(_,P,T,k,J){const te=H(_,P);if(te)return te;const B=P===at,F=Xt?history.state:{};T&&(k||B?s.replace(_.fullPath,X({scroll:B&&F&&F.scroll},J)):s.push(_.fullPath,J)),c.value=_,Vt(_,P,T,B),Ie()}let _e;function it(){_e=s.listen((_,P,T)=>{const k=R(_),J=oe(k);if(J){V(X(J,{replace:!0}),k).catch(On);return}l=k;const te=c.value;Xt&&Dd(oo(te.fullPath,T.delta),Dr()),Z(k,te).catch(B=>ct(B,12)?B:ct(B,2)?(V(B.to,k).then(F=>{ct(F,20)&&!T.delta&&T.type===Fn.pop&&s.go(-1,!1)}).catch(On),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(B,k,te))).then(B=>{B=B||de(k,te,!1),B&&(T.delta?s.go(-T.delta,!1):T.type===Fn.pop&&ct(B,20)&&s.go(-1,!1)),fe(k,te,B)}).catch(On)})}let Bt=vn(),Ht=vn(),ce;function ee(_,P,T){Ie(_);const k=Ht.list();return k.length?k.forEach(J=>J(_,P,T)):console.error(_),Promise.reject(_)}function G(){return ce&&c.value!==at?Promise.resolve():new Promise((_,P)=>{Bt.add([_,P])})}function Ie(_){return ce||(ce=!_,it(),Bt.list().forEach(([P,T])=>_?T(_):P()),Bt.reset()),_}function Vt(_,P,T,k){const{scrollBehavior:J}=t;if(!Xt||!J)return Promise.resolve();const te=!T&&xd(oo(_.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return ya().then(()=>J(_,P,te)).then(B=>B&&Md(B)).catch(B=>ee(B,_,P))}const Je=_=>s.go(_);let Le;const Ce=new Set;return{currentRoute:c,addRoute:m,removeRoute:S,hasRoute:C,getRoutes:N,resolve:R,options:t,push:W,replace:se,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ht.add,isReady:G,install(_){const P=this;_.component("RouterLink",vh),_.component("RouterView",wh),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Sn(c)}),Xt&&!Le&&c.value===at&&(Le=!0,W(s.location).catch(J=>{}));const T={};for(const J in at)T[J]=Be(()=>c.value[J]);_.provide(Mr,P),_.provide(ec,hn(T)),_.provide(Rs,c);const k=_.unmount;Ce.add(_),_.unmount=function(){Ce.delete(_),Ce.size<1&&(l=at,_e&&_e(),c.value=at,Le=!1,ce=!1),k()}}}}function zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Th(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>an(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>an(l,c))||s.push(c))}return[n,r,s]}function Sv(){return Ve(Mr)}const Sh=[{name:"Main Layout",path:"/",component:()=>Tt(()=>import("./MainLayout.661b7b20.js"),["assets/MainLayout.661b7b20.js","assets/MainLayout.e726c370.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.20c648bf.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Home",path:"",component:()=>Tt(()=>import("./Home.fa0c81c8.js"),["assets/Home.fa0c81c8.js","assets/Home.7f50fe90.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Komisariat",path:"komisariat",component:()=>Tt(()=>import("./Komisariat.c25665fd.js"),["assets/Komisariat.c25665fd.js","assets/Komisariat.fc75bca7.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Dashboard Layout",path:"/",component:()=>Tt(()=>import("./DashboardLayout.79f0e4a0.js"),["assets/DashboardLayout.79f0e4a0.js","assets/DashboardLayout.580ab6c1.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Dashboard",path:"dashboard",component:()=>Tt(()=>import("./Main.5aa37c55.js"),["assets/Main.5aa37c55.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Auth Layout",path:"/",component:()=>Tt(()=>import("./AuthLayout.184c767f.js"),["assets/AuthLayout.184c767f.js","assets/AuthLayout.fdeb7410.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.20c648bf.css","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Login",path:"login",component:()=>Tt(()=>import("./Login.61498f81.js"),[])}]}],fc=Eh({routes:Sh,history:$d()});/**
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
 */const dc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ah=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ah(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const S=l<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ch=function(t){const e=dc(t);return hc.encodeByteArray(e,!0)},pc=function(t){return Ch(t).replace(/\./g,"")},Rh=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function me(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function gc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nh(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mc(){return typeof indexedDB=="object"}function _c(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Mh(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Dh="FirebaseError";class It extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Dh,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$t.prototype.create)}}class $t{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new It(s,a,r)}}function xh(t,e){return t.replace(Lh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lh=/\{\$([^}]+)}/g;function Uh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vo(i)&&vo(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vo(t){return t!==null&&typeof t=="object"}/**
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
 */function Vn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fh(t,e){const n=new $h(t,e);return n.subscribe.bind(n)}class $h{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zr),s.error===void 0&&(s.error=Zr),s.complete===void 0&&(s.complete=Zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zr(){}/**
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
 */const Bh=1e3,Hh=2,Vh=4*60*60*1e3,Wh=.5;function yo(t,e=Bh,n=Hh){const r=e*Math.pow(n,t),s=Math.round(Wh*r*(Math.random()-.5)*2);return Math.min(Vh,r+s)}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}/**
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
 */function En(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class bo{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new vc(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new yc(this._db.createObjectStore(e,n))}close(){this._db.close()}}class vc{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new yc(this._transaction.objectStore(e))}}class yc{constructor(e){this._store=e}index(e){return new Io(this._store.index(e))}createIndex(e,n,r){return new Io(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return En(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return En(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return En(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return En(e,"Error clearing IndexedDB object store")}}class Io{constructor(e){this._index=e}get(e){const n=this._index.get(e);return En(n,"Error reading from IndexedDB")}}function bc(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new bo(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new bo(i.result),o.oldVersion,o.newVersion,new vc(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Ge{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Kh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Oh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qh(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zh(t){return t===At?void 0:t}function qh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Jh={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Yh=ne.INFO,Xh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Qh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ii{constructor(e){this.name=e,this._logLevel=Yh,this._logHandler=Qh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
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
 */class Zh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ep(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ep(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",wo="0.7.20";/**
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
 */const oi=new ii("@firebase/app"),tp="@firebase/app-compat",np="@firebase/analytics-compat",rp="@firebase/analytics",sp="@firebase/app-check-compat",ip="@firebase/app-check",op="@firebase/auth",ap="@firebase/auth-compat",cp="@firebase/database",lp="@firebase/database-compat",up="@firebase/functions",fp="@firebase/functions-compat",dp="@firebase/installations",hp="@firebase/installations-compat",pp="@firebase/messaging",gp="@firebase/messaging-compat",mp="@firebase/performance",_p="@firebase/performance-compat",vp="@firebase/remote-config",yp="@firebase/remote-config-compat",bp="@firebase/storage",Ip="@firebase/storage-compat",wp="@firebase/firestore",Ep="@firebase/firestore-compat",Tp="firebase",Sp="9.6.10";/**
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
 */const Ic="[DEFAULT]",Ap={[ks]:"fire-core",[tp]:"fire-core-compat",[rp]:"fire-analytics",[np]:"fire-analytics-compat",[ip]:"fire-app-check",[sp]:"fire-app-check-compat",[op]:"fire-auth",[ap]:"fire-auth-compat",[cp]:"fire-rtdb",[lp]:"fire-rtdb-compat",[up]:"fire-fn",[fp]:"fire-fn-compat",[dp]:"fire-iid",[hp]:"fire-iid-compat",[pp]:"fire-fcm",[gp]:"fire-fcm-compat",[mp]:"fire-perf",[_p]:"fire-perf-compat",[vp]:"fire-rc",[yp]:"fire-rc-compat",[bp]:"fire-gcs",[Ip]:"fire-gcs-compat",[wp]:"fire-fst",[Ep]:"fire-fst-compat","fire-js":"fire-js",[Tp]:"fire-js-all"};/**
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
 */const mr=new Map,Ns=new Map;function Cp(t,e){try{t.container.addComponent(e)}catch(n){oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tt(t){const e=t.name;if(Ns.has(e))return oi.debug(`There were multiple attempts to register component ${e}.`),!1;Ns.set(e,t);for(const n of mr.values())Cp(n,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Rp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},xt=new $t("app","Firebase",Rp);/**
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
 */class Op{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Lr=Sp;function Pp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw xt.create("bad-app-name",{appName:String(r)});const s=mr.get(r);if(s){if(gr(t,s.options)&&gr(n,s.config))return s;throw xt.create("duplicate-app",{appName:r})}const i=new Gh(r);for(const a of Ns.values())i.addComponent(a);const o=new Op(t,n,i);return mr.set(r,o),o}function kp(t=Ic){const e=mr.get(t);if(!e)throw xt.create("no-app",{appName:t});return e}function We(t,e,n){var r;let s=(r=Ap[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oi.warn(a.join(" "));return}tt(new Ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Np="firebase-heartbeat-database",Mp=1,$n="firebase-heartbeat-store";let es=null;function wc(){return es||(es=bc(Np,Mp,(t,e)=>{switch(e){case 0:t.createObjectStore($n)}}).catch(t=>{throw xt.create("storage-open",{originalErrorMessage:t.message})})),es}async function Dp(t){try{return(await wc()).transaction($n).objectStore($n).get(Ec(t))}catch(e){throw xt.create("storage-get",{originalErrorMessage:e.message})}}async function Eo(t,e){try{const r=(await wc()).transaction($n,"readwrite");return await r.objectStore($n).put(e,Ec(t)),r.complete}catch(n){throw xt.create("storage-set",{originalErrorMessage:n.message})}}function Ec(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xp=1024,Lp=30*24*60*60*1e3;class Up{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $p(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=To();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Lp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=To(),{heartbeatsToSend:n,unsentEntries:r}=Fp(this._heartbeatsCache.heartbeats),s=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function To(){return new Date().toISOString().substring(0,10)}function Fp(t,e=xp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),So(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),So(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mc()?_c().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function So(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jp(t){tt(new Ge("platform-logger",e=>new Zh(e),"PRIVATE")),tt(new Ge("heartbeat",e=>new Up(e),"PRIVATE")),We(ks,wo,t),We(ks,wo,"esm2017"),We("fire-js","")}jp("");/*! *****************************************************************************
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
***************************************************************************** */function ai(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bp=Tc,Sc=new $t("auth","Firebase",Tc());/**
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
 */const Ao=new ii("@firebase/auth");function sr(t,...e){Ao.logLevel<=ne.ERROR&&Ao.error(`Auth (${Lr}): ${t}`,...e)}/**
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
 */function De(t,...e){throw ci(t,...e)}function Ke(t,...e){return ci(t,...e)}function Hp(t,e,n){const r=Object.assign(Object.assign({},Bp()),{[e]:n});return new $t("auth","Firebase",r).create(e,{appName:t.name})}function ci(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sc.create(t,...e)}function L(t,e,...n){if(!t)throw ci(e,...n)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function nt(t,e){t||Qe(e)}/**
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
 */const Co=new Map;function Ze(t){nt(t instanceof Function,"Expected a class definition");let e=Co.get(t);return e?(nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Co.set(t,e),e)}/**
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
 */function Vp(t,e){const n=xr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(gr(i,e!=null?e:{}))return s;De(s,"already-initialized")}return n.initialize({options:e})}function Wp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ms(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kp(){return Ro()==="http:"||Ro()==="https:"}function Ro(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kp()||gc()||"connection"in navigator)?navigator.onLine:!0}function qp(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wn{constructor(e,n){this.shortDelay=e,this.longDelay=n,nt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ph()||kh()}get(){return zp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function li(t,e){nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ac{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Jp=new Wn(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,s={}){return Cc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ac.fetch()(Rc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Cc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gp),e);try{const s=new Yp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ts(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ts(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ts(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hp(t,u,l);De(t,u)}}catch(s){if(s instanceof It)throw s;De(t,"network-request-failed")}}async function Fr(t,e,n,r,s={}){const i=await Kn(t,e,n,r,s);return"mfaPendingCredential"in i&&De(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?li(t.config,s):`${t.config.apiScheme}://${s}`}class Yp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Jp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ts(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Xp(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function Qp(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zp(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=ui(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:kn(ns(s.auth_time)),issuedAtTime:kn(ns(s.iat)),expirationTime:kn(ns(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ns(t){return Number(t)*1e3}function ui(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rh(n);return s?JSON.parse(s):(sr("Failed to decode base64 JWT payload"),null)}catch(s){return sr("Caught error parsing JWT payload as JSON",s),null}}function eg(t){const e=ui(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof It&&tg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jn(t,Qp(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ig(i.providerUserInfo):[],a=sg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function rg(t){const e=st(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ig(t){return t.map(e=>{var{providerId:n}=e,r=ai(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function og(t,e){const n=await Cc(t,{},async()=>{const r=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ac.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await og(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function lt(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ai(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zp(this,e)}reload(){return rg(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jn(this,Xp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:W,isAnonymous:se,providerData:oe,stsTokenManager:V}=n;L(H&&V,e,"internal-error");const ae=Bn.fromJSON(this.name,V);L(typeof H=="string",e,"internal-error"),lt(d,e.name),lt(h,e.name),L(typeof W=="boolean",e,"internal-error"),L(typeof se=="boolean",e,"internal-error"),lt(m,e.name),lt(S,e.name),lt(N,e.name),lt(C,e.name),lt(R,e.name),lt(x,e.name);const Z=new Dt({uid:H,auth:e,email:h,emailVerified:W,displayName:d,isAnonymous:se,photoURL:S,phoneNumber:m,tenantId:N,stsTokenManager:ae,createdAt:R,lastLoginAt:x});return oe&&Array.isArray(oe)&&(Z.providerData=oe.map(fe=>Object.assign({},fe))),C&&(Z._redirectEventId=C),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bn;s.updateFromServerResponse(n);const i=new Dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _r(i),i}}/**
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
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pc.type="NONE";const Oo=Pc;/**
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
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nn(Ze(Oo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ze(Oo);const o=ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Dt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new nn(i,e,r))}}/**
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
 */function Po(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xc(e))return"Blackberry";if(Lc(e))return"Webos";if(fi(e))return"Safari";if((e.includes("chrome/")||Nc(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kc(t=me()){return/firefox\//i.test(t)}function fi(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nc(t=me()){return/crios\//i.test(t)}function Mc(t=me()){return/iemobile/i.test(t)}function Dc(t=me()){return/android/i.test(t)}function xc(t=me()){return/blackberry/i.test(t)}function Lc(t=me()){return/webos/i.test(t)}function $r(t=me()){return/iphone|ipad|ipod/i.test(t)}function ag(t=me()){var e;return $r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cg(){return Nh()&&document.documentMode===10}function Uc(t=me()){return $r(t)||Dc(t)||Lc(t)||xc(t)||/windows phone/i.test(t)||Mc(t)}function lg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=Po(me());break;case"Worker":n=`${Po(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
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
 */class ug{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ko(this),this.idTokenSubscription=new ko(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $t("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ze(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[Ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function di(t){return st(t)}class ko{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fh(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class hi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function fg(t,e){return Kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dg(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function hg(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function pg(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class Hn extends hi{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hg(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pg(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rn(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
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
 */const gg="http://localhost";class Lt extends hi{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ai(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Lt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rn(e,n)}buildRequest(){const e={requestUri:gg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}}/**
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
 */function mg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _g(t){const e=In(wn(t)).link,n=e?In(wn(e)).deep_link_id:null,r=In(wn(t)).deep_link_id;return(r?In(wn(r)).link:null)||r||n||e||t}class pi{constructor(e){var n,r,s,i,o,a;const c=In(wn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=mg((s=c.mode)!==null&&s!==void 0?s:null);L(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_g(e);try{return new pi(n)}catch{return null}}}/**
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
 */class gn{constructor(){this.providerId=gn.PROVIDER_ID}static credential(e,n){return Hn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pi.parseLink(n);return L(r,"argument-error"),Hn._fromEmailAndCode(e,r.code,r.tenantId)}}gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends $c{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends zn{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends zn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Lt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends zn{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends zn{constructor(){super("twitter.com")}static credential(e,n){return Lt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),o=No(r);return new ln({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=No(r);return new ln({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function No(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vr extends It{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vr(e,n,r,s)}}function jc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vr._fromErrorAndOperation(t,i,e,r):i})}async function vg(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ln._forOperation(t,"link",r)}/**
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
 */async function yg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await jn(t,jc(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=ui(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),ln._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&De(r,"user-mismatch"),i}}/**
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
 */async function Bc(t,e,n=!1){const r="signIn",s=await jc(t,r,e),i=await ln._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bg(t,e){return Bc(di(t),e)}function Av(t,e,n){return bg(st(t),gn.credential(e,n))}/**
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
 */function Cv(t,e){return st(t).setPersistence(e)}function Ig(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function Rv(t){return st(t).signOut()}const yr="__sak";/**
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
 */class Hc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yr,"1"),this.storage.removeItem(yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wg(){const t=me();return fi(t)||$r(t)}const Eg=1e3,Tg=10;class Vc extends Hc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wg()&&lg(),this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Tg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vc.type="LOCAL";const Sg=Vc;/**
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
 */class Wc extends Hc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const Kc=Wc;/**
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
 */function Ag(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ag(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
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
 */function gi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Cg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=gi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Rg(t){ze().location.href=t}/**
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
 */function zc(){return typeof ze().WorkerGlobalScope!="undefined"&&typeof ze().importScripts=="function"}async function Og(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kg(){return zc()?self:null}/**
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
 */const qc="firebaseLocalStorageDb",Ng=1,br="firebaseLocalStorage",Gc="fbase_key";class qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Br(t,e){return t.transaction([br],e?"readwrite":"readonly").objectStore(br)}function Mg(){const t=indexedDB.deleteDatabase(qc);return new qn(t).toPromise()}function Ds(){const t=indexedDB.open(qc,Ng);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(br,{keyPath:Gc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(br)?e(r):(r.close(),await Mg(),e(await Ds()))})})}async function Mo(t,e,n){const r=Br(t,!0).put({[Gc]:e,value:n});return new qn(r).toPromise()}async function Dg(t,e){const n=Br(t,!1).get(e),r=await new qn(n).toPromise();return r===void 0?null:r.value}function Do(t,e){const n=Br(t,!0).delete(e);return new qn(n).toPromise()}const xg=800,Lg=3;class Jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(kg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Og(),!this.activeServiceWorker)return;this.sender=new Cg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ds();return await Mo(e,yr,"1"),await Do(e,yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Dg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Do(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Br(s,!1).getAll();return new qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jc.type="LOCAL";const Ug=Jc;/**
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
 */function Fg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $g(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fg().appendChild(r)})}function jg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wn(3e4,6e4);/**
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
 */function Bg(t,e){return e?Ze(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mi extends hi{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hg(t){return Bc(t.auth,new mi(t),t.bypassAuthState)}function Vg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),yg(n,new mi(t),t.bypassAuthState)}async function Wg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),vg(n,new mi(t),t.bypassAuthState)}/**
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
 */class Yc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hg;case"linkViaPopup":case"linkViaRedirect":return Wg;case"reauthViaPopup":case"reauthViaRedirect":return Vg;default:De(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kg=new Wn(2e3,1e4);class Qt extends Yc{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Kg.get())};e()}}Qt.currentPopupAction=null;/**
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
 */const zg="pendingRedirect",rs=new Map;class qg extends Yc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const r=await Gg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gg(t,e){const n=Yg(e),r=Jg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Jg(t){return Ze(t._redirectPersistence)}function Yg(t){return ir(zg,t.config.apiKey,t.name)}async function Xg(t,e,n=!1){const r=di(t),s=Bg(r,e),o=await new qg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Qg=10*60*1e3;class Zg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!em(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qg&&this.cachedEventUids.clear(),this.cachedEventUids.has(xo(e))}saveEventToCache(e){this.cachedEventUids.add(xo(e)),this.lastProcessedEventTime=Date.now()}}function xo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function em(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xc(t);default:return!1}}/**
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
 */async function tm(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
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
 */const nm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rm=/^https?/;async function sm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tm(t);for(const n of e)try{if(im(n))return}catch{}De(t,"unauthorized-domain")}function im(t){const e=Ms(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rm.test(n))return!1;if(nm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const om=new Wn(3e4,6e4);function Lo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function am(t){return new Promise((e,n)=>{var r,s,i;function o(){Lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lo(),n(Ke(t,"network-request-failed"))},timeout:om.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=jg("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},$g(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw or=null,e})}let or=null;function cm(t){return or=or||am(t),or}/**
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
 */const lm=new Wn(5e3,15e3),um="__/auth/iframe",fm="emulator/auth/iframe",dm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pm(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?li(e,fm):`https://${t.config.authDomain}/${um}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},s=hm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vn(r).slice(1)}`}async function gm(t){const e=await cm(t),n=ze().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:pm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},lm.get());function c(){ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const mm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_m=500,vm=600,ym="_blank",bm="http://localhost";class Uo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Im(t,e,n,r=_m,s=vm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=me().toLowerCase();n&&(a=Nc(l)?ym:n),kc(l)&&(e=e||bm,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,S])=>`${h}${m}=${S},`,"");if(ag(l)&&a!=="_self")return wm(e||"",a),new Uo(null);const d=window.open(e||"",a,u);L(d,t,"popup-blocked");try{d.focus()}catch{}return new Uo(d)}function wm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Em="__/auth/handler",Tm="emulator/auth/handler";function Fo(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:s};if(e instanceof $c){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof zn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Sm(t)}?${Vn(a).slice(1)}`}function Sm({config:t}){return t.emulator?li(t,Tm):`https://${t.authDomain}/${Em}`}/**
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
 */const ss="webStorageSupport";class Am{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=Xg}async _openPopup(e,n,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Fo(e,n,r,Ms(),s);return Im(e,o,gi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Rg(Fo(e,n,r,Ms(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gm(e),r=new Zg(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ss,{type:ss},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ss];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uc()||fi()||$r()}}const Cm=Am;var $o="@firebase/auth",jo="0.19.11";/**
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
 */class Rm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Om(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pm(t){tt(new Ge("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},u=new ug(a,c,l);return Wp(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tt(new Ge("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new Rm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We($o,jo,Om(t)),We($o,jo,"esm2017")}/**
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
 */function km(t=kp()){const e=xr(t,"auth");return e.isInitialized()?e.getImmediate():Vp(t,{popupRedirectResolver:Cm,persistence:[Ug,Sg,Kc]})}Pm("Browser");/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Qc="store";function Nm(t){return t===void 0&&(t=null),Ve(t!==null?t:Qc)}function mn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Mm(t){return t!==null&&typeof t=="object"}function Dm(t){return t&&typeof t.then=="function"}function xm(t,e){return function(){return t(e)}}function Zc(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function el(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Hr(t,n,[],t._modules.root,!0),_i(t,n,e)}function _i(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};mn(s,function(o,a){i[a]=xm(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=hn({data:e}),t.strict&&jm(t),r&&n&&t._withCommit(function(){r.data=null})}function Hr(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=vi(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=Lm(t,o,n);r.forEachMutation(function(u,d){var h=o+d;Um(t,h,u,l)}),r.forEachAction(function(u,d){var h=u.root?d:o+d,m=u.handler||u;Fm(t,h,m,l)}),r.forEachGetter(function(u,d){var h=o+d;$m(t,h,u,l)}),r.forEachChild(function(u,d){Hr(t,e,n.concat(d),u,s)})}function Lm(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Ir(i,o,a),l=c.payload,u=c.options,d=c.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,l)},commit:r?t.commit:function(i,o,a){var c=Ir(i,o,a),l=c.payload,u=c.options,d=c.type;(!u||!u.root)&&(d=e+d),t.commit(d,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return tl(t,e)}},state:{get:function(){return vi(t.state,n)}}}),s}function tl(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Um(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Fm(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Dm(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function $m(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function jm(t){tn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function vi(t,e){return e.reduce(function(n,r){return n[r]},t)}function Ir(t,e,n){return Mm(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Bm="vuex bindings",Bo="vuex:mutations",is="vuex:actions",qt="vuex",Hm=0;function Vm(t,e){bd({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Bm]},function(n){n.addTimelineLayer({id:Bo,label:"Vuex Mutations",color:Ho}),n.addTimelineLayer({id:is,label:"Vuex Actions",color:Ho}),n.addInspector({id:qt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===qt)if(r.filter){var s=[];il(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[sl(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===qt){var s=r.nodeId;tl(e,s),r.state=zm(Gm(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===qt){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(qt),n.sendInspectorState(qt),n.addTimelineEvent({layerId:Bo,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Hm++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:is,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:is,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Ho=8702998,Wm=6710886,Km=16777215,nl={label:"namespaced",textColor:Km,backgroundColor:Wm};function rl(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function sl(t,e){return{id:e||"root",label:rl(e),tags:t.namespaced?[nl]:[],children:Object.keys(t._children).map(function(n){return sl(t._children[n],e+n+"/")})}}function il(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[nl]:[]}),Object.keys(e._children).forEach(function(s){il(t,e._children[s],n,r+s+"/")})}function zm(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=qm(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?rl(o):o,editable:!1,value:xs(function(){return i[o]})}})}return s}function qm(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=xs(function(){return t[n]})}else e[n]=xs(function(){return t[n]})}),e}function Gm(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function xs(t){try{return t()}catch(e){return e}}var xe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ol={namespaced:{configurable:!0}};ol.namespaced.get=function(){return!!this._rawModule.namespaced};xe.prototype.addChild=function(e,n){this._children[e]=n};xe.prototype.removeChild=function(e){delete this._children[e]};xe.prototype.getChild=function(e){return this._children[e]};xe.prototype.hasChild=function(e){return e in this._children};xe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};xe.prototype.forEachChild=function(e){mn(this._children,e)};xe.prototype.forEachGetter=function(e){this._rawModule.getters&&mn(this._rawModule.getters,e)};xe.prototype.forEachAction=function(e){this._rawModule.actions&&mn(this._rawModule.actions,e)};xe.prototype.forEachMutation=function(e){this._rawModule.mutations&&mn(this._rawModule.mutations,e)};Object.defineProperties(xe.prototype,ol);var jt=function(e){this.register([],e,!1)};jt.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};jt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};jt.prototype.update=function(e){al([],this.root,e)};jt.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new xe(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&mn(n.modules,function(a,c){s.register(e.concat(c),a,r)})};jt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};jt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function al(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;al(t.concat(r),e.getChild(r),n.modules[r])}}function Jm(t){return new be(t)}var be=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new jt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(h,m){return c.call(o,h,m)},this.commit=function(h,m,S){return l.call(o,h,m,S)},this.strict=s;var u=this._modules.root.state;Hr(this,u,[],this._modules.root),_i(this,u),r.forEach(function(d){return d(n)})},yi={state:{configurable:!0}};be.prototype.install=function(e,n){e.provide(n||Qc,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Vm(e,this)};yi.state.get=function(){return this._state.data};yi.state.set=function(t){};be.prototype.commit=function(e,n,r){var s=this,i=Ir(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};be.prototype.dispatch=function(e,n){var r=this,s=Ir(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,d){l.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,h)})}catch{}d(h)})})}};be.prototype.subscribe=function(e,n){return Zc(e,this._subscribers,n)};be.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Zc(r,this._actionSubscribers,n)};be.prototype.watch=function(e,n,r){var s=this;return tn(function(){return e(s.state,s.getters)},n,Object.assign({},r))};be.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};be.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Hr(this,this.state,e,this._modules.get(e),r.preserveState),_i(this,this.state)};be.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=vi(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),el(this)};be.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};be.prototype.hotUpdate=function(e){this._modules.update(e),el(this,!0)};be.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(be.prototype,yi);const Ym={setup(t){const e=Nm(),n=km();return localStorage.getItem("to")&&(fc.push({path:localStorage.getItem("to")}),localStorage.removeItem("to")),Ig(n,r=>{e.commit("updateUser",r)}),(r,s)=>{const i=_f("router-view");return bf(),wf(i)}}};var Xm="firebase",Qm="9.6.10";/**
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
 */We(Xm,Qm,"app");const cl="@firebase/installations",bi="0.5.7";/**
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
 */const ll=1e4,ul=`w:${bi}`,fl="FIS_v2",Zm="https://firebaseinstallations.googleapis.com/v1",e_=60*60*1e3,t_="installations",n_="Installations";/**
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
 */const r_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ut=new $t(t_,n_,r_);function dl(t){return t instanceof It&&t.code.includes("request-failed")}/**
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
 */function hl({projectId:t}){return`${Zm}/projects/${t}/installations`}function pl(t){return{token:t.token,requestStatus:2,expiresIn:i_(t.expiresIn),creationTime:Date.now()}}async function gl(t,e){const r=(await e.json()).error;return Ut.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ml({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function s_(t,{refreshToken:e}){const n=ml(t);return n.append("Authorization",o_(e)),n}async function _l(t){const e=await t();return e.status>=500&&e.status<600?t():e}function i_(t){return Number(t.replace("s","000"))}function o_(t){return`${fl} ${t}`}/**
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
 */async function a_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=hl(t),s=ml(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:fl,appId:t.appId,sdkVersion:ul},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await _l(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:pl(l.authToken)}}else throw await gl("Create Installation",c)}/**
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
 */function vl(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function c_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const l_=/^[cdef][\w-]{21}$/,Ls="";function u_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=f_(t);return l_.test(n)?n:Ls}catch{return Ls}}function f_(t){return c_(t).substr(0,22)}/**
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
 */function Vr(t){return`${t.appName}!${t.appId}`}/**
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
 */const yl=new Map;function bl(t,e){const n=Vr(t);Il(n,e),d_(n,e)}function Il(t,e){const n=yl.get(t);if(!!n)for(const r of n)r(e)}function d_(t,e){const n=h_();n&&n.postMessage({key:t,fid:e}),p_()}let Pt=null;function h_(){return!Pt&&"BroadcastChannel"in self&&(Pt=new BroadcastChannel("[Firebase] FID Change"),Pt.onmessage=t=>{Il(t.data.key,t.data.fid)}),Pt}function p_(){yl.size===0&&Pt&&(Pt.close(),Pt=null)}/**
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
 */const g_="firebase-installations-database",m_=1,Ft="firebase-installations-store";let os=null;function Ii(){return os||(os=bc(g_,m_,(t,e)=>{switch(e){case 0:t.createObjectStore(Ft)}})),os}async function wr(t,e){const n=Vr(t),s=(await Ii()).transaction(Ft,"readwrite"),i=s.objectStore(Ft),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&bl(t,e.fid),e}async function wl(t){const e=Vr(t),r=(await Ii()).transaction(Ft,"readwrite");await r.objectStore(Ft).delete(e),await r.complete}async function Wr(t,e){const n=Vr(t),s=(await Ii()).transaction(Ft,"readwrite"),i=s.objectStore(Ft),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&bl(t,a.fid),a}/**
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
 */async function wi(t){let e;const n=await Wr(t.appConfig,r=>{const s=__(r),i=v_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ls?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function __(t){const e=t||{fid:u_(),registrationStatus:0};return El(e)}function v_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=y_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b_(t)}:{installationEntry:e}}async function y_(t,e){try{const n=await a_(t,e);return wr(t.appConfig,n)}catch(n){throw dl(n)&&n.customData.serverCode===409?await wl(t.appConfig):await wr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function b_(t){let e=await Vo(t.appConfig);for(;e.registrationStatus===1;)await vl(100),e=await Vo(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await wi(t);return r||n}return e}function Vo(t){return Wr(t,e=>{if(!e)throw Ut.create("installation-not-found");return El(e)})}function El(t){return I_(t)?{fid:t.fid,registrationStatus:0}:t}function I_(t){return t.registrationStatus===1&&t.registrationTime+ll<Date.now()}/**
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
 */async function w_({appConfig:t,heartbeatServiceProvider:e},n){const r=E_(t,n),s=s_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:ul,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await _l(()=>fetch(r,a));if(c.ok){const l=await c.json();return pl(l)}else throw await gl("Generate Auth Token",c)}function E_(t,{fid:e}){return`${hl(t)}/${e}/authTokens:generate`}/**
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
 */async function Ei(t,e=!1){let n;const r=await Wr(t.appConfig,i=>{if(!Tl(i))throw Ut.create("not-registered");const o=i.authToken;if(!e&&A_(o))return i;if(o.requestStatus===1)return n=T_(t,e),i;{if(!navigator.onLine)throw Ut.create("app-offline");const a=R_(i);return n=S_(t,a),a}});return n?await n:r.authToken}async function T_(t,e){let n=await Wo(t.appConfig);for(;n.authToken.requestStatus===1;)await vl(100),n=await Wo(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ei(t,e):r}function Wo(t){return Wr(t,e=>{if(!Tl(e))throw Ut.create("not-registered");const n=e.authToken;return O_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function S_(t,e){try{const n=await w_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wr(t.appConfig,r),n}catch(n){if(dl(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wl(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wr(t.appConfig,r)}throw n}}function Tl(t){return t!==void 0&&t.registrationStatus===2}function A_(t){return t.requestStatus===2&&!C_(t)}function C_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+e_}function R_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function O_(t){return t.requestStatus===1&&t.requestTime+ll<Date.now()}/**
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
 */async function P_(t){const e=t,{installationEntry:n,registrationPromise:r}=await wi(e);return r?r.catch(console.error):Ei(e).catch(console.error),n.fid}/**
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
 */async function k_(t,e=!1){const n=t;return await N_(n),(await Ei(n,e)).token}async function N_(t){const{registrationPromise:e}=await wi(t);e&&await e}/**
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
 */function M_(t){if(!t||!t.options)throw as("App Configuration");if(!t.name)throw as("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw as(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function as(t){return Ut.create("missing-app-config-values",{valueName:t})}/**
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
 */const Sl="installations",D_="installations-internal",x_=t=>{const e=t.getProvider("app").getImmediate(),n=M_(e),r=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},L_=t=>{const e=t.getProvider("app").getImmediate(),n=xr(e,Sl).getImmediate();return{getId:()=>P_(n),getToken:s=>k_(n,s)}};function U_(){tt(new Ge(Sl,x_,"PUBLIC")),tt(new Ge(D_,L_,"PRIVATE"))}U_();We(cl,bi);We(cl,bi,"esm2017");/**
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
 */const Ko="analytics",F_="firebase_id",$_="origin",j_=60*1e3,B_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Al="https://www.googletagmanager.com/gtag/js";/**
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
 */const Se=new ii("@firebase/analytics");/**
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
 */function Cl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function H_(t,e){const n=document.createElement("script");n.src=`${Al}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function V_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function W_(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Cl(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Se.error(a)}t("config",s,i)}async function K_(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Cl(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Se.error(i)}}function z_(t,e,n,r){async function s(i,o,a){try{i==="event"?await K_(t,e,n,o,a):i==="config"?await W_(t,e,n,r,o,a):t("set",o)}catch(c){Se.error(c)}}return s}function q_(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=z_(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function G_(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Al))return e;return null}/**
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
 */const J_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Me=new $t("analytics","Analytics",J_);/**
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
 */const Y_=30,X_=1e3;class Q_{constructor(e={},n=X_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Rl=new Q_;function Z_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ev(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Z_(r)},i=B_.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tv(t,e=Rl,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Me.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sv;return setTimeout(async()=>{a.abort()},n!==void 0?n:j_),Ol({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Ol(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Rl){const{appId:i,measurementId:o}=t;try{await nv(r,e)}catch(a){if(o)return Se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await ev(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!rv(a)){if(s.deleteThrottleMetadata(i),o)return Se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?yo(n,s.intervalMillis,Y_):yo(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(i,l),Se.debug(`Calling attemptFetch again in ${c} millis`),Ol(t,l,r,s)}}function nv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rv(t){if(!(t instanceof It)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function iv(){if(mc())try{await _c()}catch(t){return Se.warn(Me.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Se.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ov(t,e,n,r,s,i,o){var a;const c=tv(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Se.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Se.error(m)),e.push(c);const l=iv().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([c,l]);G_()||H_(i,u.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[$_]="firebase",h.update=!0,d!=null&&(h[F_]=d),s("config",u.measurementId,h),u.measurementId}/**
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
 */class av{constructor(e){this.app=e}_delete(){return delete Nn[this.app.options.appId],Promise.resolve()}}let Nn={},zo=[];const qo={};let cs="dataLayer",cv="gtag",Go,Pl,Jo=!1;function lv(){const t=[];if(gc()&&t.push("This is a browser extension environment."),Mh()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:e});Se.warn(n.message)}}function uv(t,e,n){lv();const r=t.options.appId;if(!r)throw Me.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(Nn[r]!=null)throw Me.create("already-exists",{id:r});if(!Jo){V_(cs);const{wrappedGtag:i,gtagCore:o}=q_(Nn,zo,qo,cs,cv);Pl=i,Go=o,Jo=!0}return Nn[r]=ov(t,zo,qo,e,Go,cs,n),new av(t)}/**
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
 */async function fv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function dv(t,e,n,r){t=st(t),fv(Pl,Nn[t.app.options.appId],e,n,r).catch(s=>Se.error(s))}const Yo="@firebase/analytics",Xo="0.7.7";function hv(){tt(new Ge(Ko,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return uv(r,s,n)},"PUBLIC")),tt(new Ge("analytics-internal",t,"PRIVATE")),We(Yo,Xo),We(Yo,Xo,"esm2017");function t(e){try{const n=e.getProvider(Ko).getImmediate();return{logEvent:(r,s,i)=>dv(n,r,s,i)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}hv();const pv={apiKey:"AIzaSyANRHn_XwFSzlxjoTp11bO5a5Gl1G9kkGc",authDomain:"al-khawarizmi-berdaya.firebaseapp.com",projectId:"al-khawarizmi-berdaya",storageBucket:"al-khawarizmi-berdaya.appspot.com",messagingSenderId:"529015177437",appId:"1:529015177437:web:30aa94162773b421b09b34",measurementId:"G-X6QPEHLVKF"},gv=Pp(pv),mv={updateUser(t,e){t.user.data=e}},_v=Jm({state(){return{user:{data:null}}},mutations:mv});ld(Ym).use(fc).use(gv).use(_v).mount("body");export{$e as F,qa as a,Te as b,Iv as c,yv as d,Sf as e,wv as f,km as g,Sv as h,Ig as i,hn as j,Tv as k,bv as l,Sn as m,$s as n,bf as o,vv as p,Cv as q,_f as r,Rv as s,Av as t,Nm as u,Ev as v,Mu as w,Kc as x};
