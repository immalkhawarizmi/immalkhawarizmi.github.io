const Rd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Rd();function Po(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kd=Po(Od);function Fl(e){return!!e||e===""}function No(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=be(i)?Dd(i):No(i);if(r)for(const s in r)t[s]=r[s]}return t}else{if(be(e))return e;if(ye(e))return e}}const Pd=/;(?![^(]*\))/g,Nd=/:(.+)/;function Dd(e){const t={};return e.split(Pd).forEach(n=>{if(n){const i=n.split(Nd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Do(e){let t="";if(be(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const i=Do(e[n]);i&&(t+=i+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const kb=e=>be(e)?e:e==null?"":V(e)||ye(e)&&(e.toString===Hl||!K(e.toString))?JSON.stringify(e,jl,2):String(e),jl=(e,t)=>t&&t.__v_isRef?jl(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:$l(t)?{[`Set(${t.size})`]:[...t.values()]}:ye(t)&&!V(t)&&!Vl(t)?String(t):t,oe={},Sn=[],Qe=()=>{},Ld=()=>!1,Md=/^on[^a-z]/,Fr=e=>Md.test(e),Lo=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Mo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xd=Object.prototype.hasOwnProperty,Q=(e,t)=>xd.call(e,t),V=Array.isArray,Rn=e=>jr(e)==="[object Map]",$l=e=>jr(e)==="[object Set]",K=e=>typeof e=="function",be=e=>typeof e=="string",xo=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Bl=e=>ye(e)&&K(e.then)&&K(e.catch),Hl=Object.prototype.toString,jr=e=>Hl.call(e),Ud=e=>jr(e).slice(8,-1),Vl=e=>jr(e)==="[object Object]",Uo=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rr=Po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fd=/-(\w)/g,mt=$r(e=>e.replace(Fd,(t,n)=>n?n.toUpperCase():"")),jd=/\B([A-Z])/g,$n=$r(e=>e.replace(jd,"-$1").toLowerCase()),Br=$r(e=>e.charAt(0).toUpperCase()+e.slice(1)),_s=$r(e=>e?`on${Br(e)}`:""),mi=(e,t)=>!Object.is(e,t),sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},dr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ya;const $d=()=>Ya||(Ya=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let _t;class Bd{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&_t&&(this.parent=_t,this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}run(t){if(this.active)try{return _t=this,t()}finally{_t=this.parent}}on(){_t=this}off(){_t=this.parent}stop(t){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Hd(e,t=_t){t&&t.active&&t.effects.push(e)}const Fo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Kl=e=>(e.w&qt)>0,ql=e=>(e.n&qt)>0,Vd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},Kd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];Kl(r)&&!ql(r)?r.delete(e):t[n++]=r,r.w&=~qt,r.n&=~qt}t.length=n}},qs=new WeakMap;let ei=0,qt=1;const Ws=30;let ut;const rn=Symbol(""),zs=Symbol("");class jo{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hd(this,i)}run(){if(!this.active)return this.fn();let t=ut,n=Ht;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ut,ut=this,Ht=!0,qt=1<<++ei,ei<=Ws?Vd(this):Qa(this),this.fn()}finally{ei<=Ws&&Kd(this),qt=1<<--ei,ut=this.parent,Ht=n,this.parent=void 0}}stop(){this.active&&(Qa(this),this.onStop&&this.onStop(),this.active=!1)}}function Qa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ht=!0;const Wl=[];function Bn(){Wl.push(Ht),Ht=!1}function Hn(){const e=Wl.pop();Ht=e===void 0?!0:e}function Be(e,t,n){if(Ht&&ut){let i=qs.get(e);i||qs.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=Fo()),zl(r)}}function zl(e,t){let n=!1;ei<=Ws?ql(e)||(e.n|=qt,n=!Kl(e)):n=!e.has(ut),n&&(e.add(ut),ut.deps.push(e))}function Tt(e,t,n,i,r,s){const o=qs.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&V(e))o.forEach((c,l)=>{(l==="length"||l>=i)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":V(e)?Uo(n)&&a.push(o.get("length")):(a.push(o.get(rn)),Rn(e)&&a.push(o.get(zs)));break;case"delete":V(e)||(a.push(o.get(rn)),Rn(e)&&a.push(o.get(zs)));break;case"set":Rn(e)&&a.push(o.get(rn));break}if(a.length===1)a[0]&&Gs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Gs(Fo(c))}}function Gs(e,t){for(const n of V(e)?e:[...e])(n!==ut||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const qd=Po("__proto__,__v_isRef,__isVue"),Gl=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(xo)),Wd=$o(),zd=$o(!1,!0),Gd=$o(!0),Za=Xd();function Xd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=Z(this);for(let s=0,o=this.length;s<o;s++)Be(i,"get",s+"");const r=i[t](...n);return r===-1||r===!1?i[t](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bn();const i=Z(this)[t].apply(this,n);return Hn(),i}}),e}function $o(e=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?hp:Zl:t?Ql:Yl).get(i))return i;const o=V(i);if(!e&&o&&Q(Za,r))return Reflect.get(Za,r,s);const a=Reflect.get(i,r,s);return(xo(r)?Gl.has(r):qd(r))||(e||Be(i,"get",r),t)?a:we(a)?!o||!Uo(r)?a.value:a:ye(a)?e?eu(a):Vn(a):a}}const Jd=Xl(),Yd=Xl(!0);function Xl(e=!1){return function(n,i,r,s){let o=n[i];if(vi(o)&&we(o)&&!we(r))return!1;if(!e&&!vi(r)&&(tu(r)||(r=Z(r),o=Z(o)),!V(n)&&we(o)&&!we(r)))return o.value=r,!0;const a=V(n)&&Uo(i)?Number(i)<n.length:Q(n,i),c=Reflect.set(n,i,r,s);return n===Z(s)&&(a?mi(r,o)&&Tt(n,"set",i,r):Tt(n,"add",i,r)),c}}function Qd(e,t){const n=Q(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&Tt(e,"delete",t,void 0),i}function Zd(e,t){const n=Reflect.has(e,t);return(!xo(t)||!Gl.has(t))&&Be(e,"has",t),n}function ep(e){return Be(e,"iterate",V(e)?"length":rn),Reflect.ownKeys(e)}const Jl={get:Wd,set:Jd,deleteProperty:Qd,has:Zd,ownKeys:ep},tp={get:Gd,set(e,t){return!0},deleteProperty(e,t){return!0}},np=Ce({},Jl,{get:zd,set:Yd}),Bo=e=>e,Hr=e=>Reflect.getPrototypeOf(e);function Ji(e,t,n=!1,i=!1){e=e.__v_raw;const r=Z(e),s=Z(t);t!==s&&!n&&Be(r,"get",t),!n&&Be(r,"get",s);const{has:o}=Hr(r),a=i?Bo:n?Ko:yi;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Yi(e,t=!1){const n=this.__v_raw,i=Z(n),r=Z(e);return e!==r&&!t&&Be(i,"has",e),!t&&Be(i,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Qi(e,t=!1){return e=e.__v_raw,!t&&Be(Z(e),"iterate",rn),Reflect.get(e,"size",e)}function ec(e){e=Z(e);const t=Z(this);return Hr(t).has.call(t,e)||(t.add(e),Tt(t,"add",e,e)),this}function tc(e,t){t=Z(t);const n=Z(this),{has:i,get:r}=Hr(n);let s=i.call(n,e);s||(e=Z(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?mi(t,o)&&Tt(n,"set",e,t):Tt(n,"add",e,t),this}function nc(e){const t=Z(this),{has:n,get:i}=Hr(t);let r=n.call(t,e);r||(e=Z(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&Tt(t,"delete",e,void 0),s}function ic(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&Tt(e,"clear",void 0,void 0),n}function Zi(e,t){return function(i,r){const s=this,o=s.__v_raw,a=Z(o),c=t?Bo:e?Ko:yi;return!e&&Be(a,"iterate",rn),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function er(e,t,n){return function(...i){const r=this.__v_raw,s=Z(r),o=Rn(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...i),u=n?Bo:t?Ko:yi;return!t&&Be(s,"iterate",c?zs:rn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function kt(e){return function(...t){return e==="delete"?!1:this}}function ip(){const e={get(s){return Ji(this,s)},get size(){return Qi(this)},has:Yi,add:ec,set:tc,delete:nc,clear:ic,forEach:Zi(!1,!1)},t={get(s){return Ji(this,s,!1,!0)},get size(){return Qi(this)},has:Yi,add:ec,set:tc,delete:nc,clear:ic,forEach:Zi(!1,!0)},n={get(s){return Ji(this,s,!0)},get size(){return Qi(this,!0)},has(s){return Yi.call(this,s,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Zi(!0,!1)},i={get(s){return Ji(this,s,!0,!0)},get size(){return Qi(this,!0)},has(s){return Yi.call(this,s,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=er(s,!1,!1),n[s]=er(s,!0,!1),t[s]=er(s,!1,!0),i[s]=er(s,!0,!0)}),[e,n,t,i]}const[rp,sp,op,ap]=ip();function Ho(e,t){const n=t?e?ap:op:e?sp:rp;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(Q(n,r)&&r in i?n:i,r,s)}const cp={get:Ho(!1,!1)},lp={get:Ho(!1,!0)},up={get:Ho(!0,!1)},Yl=new WeakMap,Ql=new WeakMap,Zl=new WeakMap,hp=new WeakMap;function fp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dp(e){return e.__v_skip||!Object.isExtensible(e)?0:fp(Ud(e))}function Vn(e){return vi(e)?e:Vo(e,!1,Jl,cp,Yl)}function pp(e){return Vo(e,!1,np,lp,Ql)}function eu(e){return Vo(e,!0,tp,up,Zl)}function Vo(e,t,n,i,r){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=dp(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function On(e){return vi(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function vi(e){return!!(e&&e.__v_isReadonly)}function tu(e){return!!(e&&e.__v_isShallow)}function nu(e){return On(e)||vi(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function iu(e){return fr(e,"__v_skip",!0),e}const yi=e=>ye(e)?Vn(e):e,Ko=e=>ye(e)?eu(e):e;function ru(e){Ht&&ut&&(e=Z(e),zl(e.dep||(e.dep=Fo())))}function su(e,t){e=Z(e),e.dep&&Gs(e.dep)}function we(e){return!!(e&&e.__v_isRef===!0)}function gp(e){return ou(e,!1)}function mp(e){return ou(e,!0)}function ou(e,t){return we(e)?e:new vp(e,t)}class vp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:yi(t)}get value(){return ru(this),this._value}set value(t){t=this.__v_isShallow?t:Z(t),mi(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:yi(t),su(this))}}function oi(e){return we(e)?e.value:e}const yp={get:(e,t,n)=>oi(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function au(e){return On(e)?e:new Proxy(e,yp)}class _p{constructor(t,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jo(t,()=>{this._dirty||(this._dirty=!0,su(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Z(this);return ru(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wp(e,t,n=!1){let i,r;const s=K(e);return s?(i=e,r=Qe):(i=e.get,r=e.set),new _p(i,r,s||!r,n)}Promise.resolve();function Vt(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){Mi(s,t,n)}return r}function qe(e,t,n,i){if(K(e)){const s=Vt(e,t,n,i);return s&&Bl(s)&&s.catch(o=>{Mi(o,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(qe(e[s],t,n,i));return r}function Mi(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Vt(c,null,10,[e,o,a]);return}}Ip(e,n,r,i)}function Ip(e,t,n,i=!0){console.error(e)}let pr=!1,Xs=!1;const Fe=[];let wt=0;const ai=[];let ti=null,In=0;const ci=[];let Mt=null,En=0;const cu=Promise.resolve();let qo=null,Js=null;function lu(e){const t=qo||cu;return e?t.then(this?e.bind(this):e):t}function Ep(e){let t=wt+1,n=Fe.length;for(;t<n;){const i=t+n>>>1;_i(Fe[i])<e?t=i+1:n=i}return t}function uu(e){(!Fe.length||!Fe.includes(e,pr&&e.allowRecurse?wt+1:wt))&&e!==Js&&(e.id==null?Fe.push(e):Fe.splice(Ep(e.id),0,e),hu())}function hu(){!pr&&!Xs&&(Xs=!0,qo=cu.then(gu))}function bp(e){const t=Fe.indexOf(e);t>wt&&Fe.splice(t,1)}function fu(e,t,n,i){V(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?i+1:i))&&n.push(e),hu()}function Tp(e){fu(e,ti,ai,In)}function du(e){fu(e,Mt,ci,En)}function Wo(e,t=null){if(ai.length){for(Js=t,ti=[...new Set(ai)],ai.length=0,In=0;In<ti.length;In++)ti[In]();ti=null,In=0,Js=null,Wo(e,t)}}function pu(e){if(ci.length){const t=[...new Set(ci)];if(ci.length=0,Mt){Mt.push(...t);return}for(Mt=t,Mt.sort((n,i)=>_i(n)-_i(i)),En=0;En<Mt.length;En++)Mt[En]();Mt=null,En=0}}const _i=e=>e.id==null?1/0:e.id;function gu(e){Xs=!1,pr=!0,Wo(e),Fe.sort((n,i)=>_i(n)-_i(i));const t=Qe;try{for(wt=0;wt<Fe.length;wt++){const n=Fe[wt];n&&n.active!==!1&&Vt(n,null,14)}}finally{wt=0,Fe.length=0,pu(),pr=!1,qo=null,(Fe.length||ai.length||ci.length)&&gu(e)}}function Ap(e,t,...n){const i=e.vnode.props||oe;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||oe;d?r=n.map(g=>g.trim()):h&&(r=n.map(dr))}let a,c=i[a=_s(t)]||i[a=_s(mt(t))];!c&&s&&(c=i[a=_s($n(t))]),c&&qe(c,e,6,r);const l=i[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,qe(l,e,6,r)}}function mu(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!K(e)){const c=l=>{const u=mu(l,t,!0);u&&(a=!0,Ce(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(i.set(e,null),null):(V(s)?s.forEach(c=>o[c]=null):Ce(o,s),i.set(e,o),o)}function zo(e,t){return!e||!Fr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,$n(t))||Q(e,t))}let Ke=null,Vr=null;function gr(e){const t=Ke;return Ke=e,Vr=e&&e.type.__scopeId||null,t}function Pb(e){Vr=e}function Nb(){Vr=null}function Cp(e,t=Ke,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&gc(-1);const s=gr(t),o=e(...r);return gr(s),i._d&&gc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ws(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:w,inheritAttrs:P}=e;let R,O;const E=gr(e);try{if(n.shapeFlag&4){const F=r||i;R=Ye(u.call(F,F,h,s,g,d,w)),O=c}else{const F=t;R=Ye(F.length>1?F(s,{attrs:c,slots:a,emit:l}):F(s,null)),O=t.props?c:Rp(c)}}catch(F){li.length=0,Mi(F,e,1),R=Pe(ze)}let N=R;if(O&&P!==!1){const F=Object.keys(O),{shapeFlag:W}=N;F.length&&W&7&&(o&&F.some(Lo)&&(O=Op(O,o)),N=Mn(N,O))}return n.dirs&&(N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),R=N,gr(E),R}function Sp(e){let t;for(let n=0;n<e.length;n++){const i=e[n];if(vr(i)){if(i.type!==ze||i.children==="v-if"){if(t)return;t=i}}else return}return t}const Rp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fr(n))&&((t||(t={}))[n]=e[n]);return t},Op=(e,t)=>{const n={};for(const i in e)(!Lo(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function kp(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?rc(i,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!zo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?rc(i,o,l):!0:!!o;return!1}function rc(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!zo(n,s))return!0}return!1}function Go({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Pp=e=>e.__isSuspense,Np={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,c,l){e==null?Dp(t,n,i,r,s,o,a,c,l):Lp(e,t,n,i,r,o,a,c,l)},hydrate:Mp,create:Xo,normalize:xp},Db=Np;function wi(e,t){const n=e.props&&e.props[t];K(n)&&n()}function Dp(e,t,n,i,r,s,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=e.suspense=Xo(e,r,i,t,h,n,s,o,a,c);l(null,d.pendingBranch=e.ssContent,h,null,i,d,s,o),d.deps>0?(wi(e,"onPending"),wi(e,"onFallback"),l(null,e.ssFallback,t,n,i,null,s,o),kn(d,e.ssFallback)):d.resolve()}function Lp(e,t,n,i,r,s,o,a,{p:c,um:l,o:{createElement:u}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const d=t.ssContent,g=t.ssFallback,{activeBranch:w,pendingBranch:P,isInFallback:R,isHydrating:O}=h;if(P)h.pendingBranch=d,ct(d,P)?(c(P,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():R&&(c(w,g,n,i,r,null,s,o,a),kn(h,g))):(h.pendingId++,O?(h.isHydrating=!1,h.activeBranch=P):l(P,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),R?(c(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():(c(w,g,n,i,r,null,s,o,a),kn(h,g))):w&&ct(d,w)?(c(w,d,n,i,r,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0&&h.resolve()));else if(w&&ct(d,w))c(w,d,n,i,r,h,s,o,a),kn(h,d);else if(wi(t,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:E,pendingId:N}=h;E>0?setTimeout(()=>{h.pendingId===N&&h.fallback(g)},E):E===0&&h.fallback(g)}}function Xo(e,t,n,i,r,s,o,a,c,l,u=!1){const{p:h,m:d,um:g,n:w,o:{parentNode:P,remove:R}}=l,O=dr(e.props&&e.props.timeout),E={vnode:e,parent:t,parentComponent:n,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof O=="number"?O:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(N=!1){const{vnode:F,activeBranch:W,pendingBranch:G,pendingId:B,effects:ee,parentComponent:J,container:de}=E;if(E.isHydrating)E.isHydrating=!1;else if(!N){const Xe=W&&G.transition&&G.transition.mode==="out-in";Xe&&(W.transition.afterLeave=()=>{B===E.pendingId&&d(G,de,it,0)});let{anchor:it}=E;W&&(it=w(W),g(W,J,E,!0)),Xe||d(G,de,it,0)}kn(E,G),E.pendingBranch=null,E.isInFallback=!1;let le=E.parent,me=!1;for(;le;){if(le.pendingBranch){le.effects.push(...ee),me=!0;break}le=le.parent}me||du(ee),E.effects=[],wi(F,"onResolve")},fallback(N){if(!E.pendingBranch)return;const{vnode:F,activeBranch:W,parentComponent:G,container:B,isSVG:ee}=E;wi(F,"onFallback");const J=w(W),de=()=>{!E.isInFallback||(h(null,N,B,J,G,null,ee,a,c),kn(E,N))},le=N.transition&&N.transition.mode==="out-in";le&&(W.transition.afterLeave=de),E.isInFallback=!0,g(W,G,null,!0),le||de()},move(N,F,W){E.activeBranch&&d(E.activeBranch,N,F,W),E.container=N},next(){return E.activeBranch&&w(E.activeBranch)},registerDep(N,F){const W=!!E.pendingBranch;W&&E.deps++;const G=N.vnode.el;N.asyncDep.catch(B=>{Mi(B,N,0)}).then(B=>{if(N.isUnmounted||E.isUnmounted||E.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:ee}=N;so(N,B,!1),G&&(ee.el=G);const J=!G&&N.subTree.el;F(N,ee,P(G||N.subTree.el),G?null:w(N.subTree),E,o,c),J&&R(J),Go(N,ee.el),W&&--E.deps===0&&E.resolve()})},unmount(N,F){E.isUnmounted=!0,E.activeBranch&&g(E.activeBranch,n,N,F),E.pendingBranch&&g(E.pendingBranch,n,N,F)}};return E}function Mp(e,t,n,i,r,s,o,a,c){const l=t.suspense=Xo(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,s,o);return l.deps===0&&l.resolve(),u}function xp(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=sc(i?n.default:n),e.ssFallback=i?sc(n.fallback):Pe(ze)}function sc(e){let t;if(K(e)){const n=Ii&&e._c;n&&(e._d=!1,Qo()),e=e(),n&&(e._d=!0,t=Kt,xu())}return V(e)&&(e=Sp(e)),e=Ye(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Up(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):du(e)}function kn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e,r=n.el=t.el;i&&i.subTree===n&&(i.vnode.el=r,Go(i,r))}function or(e,t){if(ve){let n=ve.provides;const i=ve.parent&&ve.parent.provides;i===n&&(n=ve.provides=Object.create(i)),n[e]=t}}function dt(e,t,n=!1){const i=ve||Ke;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&K(t)?t.call(i.proxy):t}}const oc={};function Pn(e,t,n){return vu(e,t,n)}function vu(e,t,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=oe){const a=ve;let c,l=!1,u=!1;if(we(e)?(c=()=>e.value,l=tu(e)):On(e)?(c=()=>e,i=!0):V(e)?(u=!0,l=e.some(On),c=()=>e.map(O=>{if(we(O))return O.value;if(On(O))return Zt(O);if(K(O))return Vt(O,a,2)})):K(e)?t?c=()=>Vt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),qe(e,a,3,[d])}:c=Qe,t&&i){const O=c;c=()=>Zt(O())}let h,d=O=>{h=R.onStop=()=>{Vt(O,a,4)}};if(Ei)return d=Qe,t?n&&qe(t,a,3,[c(),u?[]:void 0,d]):c(),Qe;let g=u?[]:oc;const w=()=>{if(!!R.active)if(t){const O=R.run();(i||l||(u?O.some((E,N)=>mi(E,g[N])):mi(O,g)))&&(h&&h(),qe(t,a,3,[O,g===oc?void 0:g,d]),g=O)}else R.run()};w.allowRecurse=!!t;let P;r==="sync"?P=w:r==="post"?P=()=>De(w,a&&a.suspense):P=()=>{!a||a.isMounted?Tp(w):w()};const R=new jo(c,P);return t?n?w():g=R.run():r==="post"?De(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Mo(a.scope.effects,R)}}function Fp(e,t,n){const i=this.proxy,r=be(e)?e.includes(".")?yu(i,e):()=>i[e]:e.bind(i,i);let s;K(t)?s=t:(s=t.handler,n=t);const o=ve;xn(this);const a=vu(r,s.bind(i),n);return o?xn(o):sn(),a}function yu(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Zt(e,t){if(!ye(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Zt(e.value,t);else if(V(e))for(let n=0;n<e.length;n++)Zt(e[n],t);else if($l(e)||Rn(e))e.forEach(n=>{Zt(n,t)});else if(Vl(e))for(const n in e)Zt(e[n],t);return e}function jp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bu(()=>{e.isMounted=!0}),Tu(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],$p={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},setup(e,{slots:t}){const n=Ag(),i=jp();let r;return()=>{const s=t.default&&wu(t.default(),!0);if(!s||!s.length)return;const o=Z(e),{mode:a}=o,c=s[0];if(i.isLeaving)return Is(c);const l=ac(c);if(!l)return Is(c);const u=Ys(l,o,i,n);Qs(l,u);const h=n.subTree,d=h&&ac(h);let g=!1;const{getTransitionKey:w}=l.type;if(w){const P=w();r===void 0?r=P:P!==r&&(r=P,g=!0)}if(d&&d.type!==ze&&(!ct(l,d)||g)){const P=Ys(d,o,i,n);if(Qs(d,P),a==="out-in")return i.isLeaving=!0,P.afterLeave=()=>{i.isLeaving=!1,n.update()},Is(c);a==="in-out"&&l.type!==ze&&(P.delayLeave=(R,O,E)=>{const N=_u(i,d);N[String(d.key)]=d,R._leaveCb=()=>{O(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return c}}},Bp=$p;function _u(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Ys(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:P,onAppear:R,onAfterAppear:O,onAppearCancelled:E}=t,N=String(e.key),F=_u(n,e),W=(B,ee)=>{B&&qe(B,i,9,ee)},G={mode:s,persisted:o,beforeEnter(B){let ee=a;if(!n.isMounted)if(r)ee=P||a;else return;B._leaveCb&&B._leaveCb(!0);const J=F[N];J&&ct(e,J)&&J.el._leaveCb&&J.el._leaveCb(),W(ee,[B])},enter(B){let ee=c,J=l,de=u;if(!n.isMounted)if(r)ee=R||c,J=O||l,de=E||u;else return;let le=!1;const me=B._enterCb=Xe=>{le||(le=!0,Xe?W(de,[B]):W(J,[B]),G.delayedLeave&&G.delayedLeave(),B._enterCb=void 0)};ee?(ee(B,me),ee.length<=1&&me()):me()},leave(B,ee){const J=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return ee();W(h,[B]);let de=!1;const le=B._leaveCb=me=>{de||(de=!0,ee(),me?W(w,[B]):W(g,[B]),B._leaveCb=void 0,F[J]===e&&delete F[J])};F[J]=e,d?(d(B,le),d.length<=1&&le()):le()},clone(B){return Ys(B,t,n,i)}};return G}function Is(e){if(Kr(e))return e=Mn(e),e.children=null,e}function ac(e){return Kr(e)?e.children?e.children[0]:void 0:e}function Qs(e,t){e.shapeFlag&6&&e.component?Qs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wu(e,t=!1){let n=[],i=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===at?(s.patchFlag&128&&i++,n=n.concat(wu(s.children,t))):(t||s.type!==ze)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Iu(e){return K(e)?{setup:e,name:e.name}:e}const Zs=e=>!!e.type.__asyncLoader,Kr=e=>e.type.__isKeepAlive;function Hp(e,t){Eu(e,"a",t)}function Vp(e,t){Eu(e,"da",t)}function Eu(e,t,n=ve){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(qr(t,i,n),n){let r=n.parent;for(;r&&r.parent;)Kr(r.parent.vnode)&&Kp(i,t,n,r),r=r.parent}}function Kp(e,t,n,i){const r=qr(t,e,i,!0);Au(()=>{Mo(i[t],r)},n)}function qr(e,t,n=ve,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bn(),xn(n);const a=qe(t,n,e,o);return sn(),Hn(),a});return i?r.unshift(s):r.push(s),s}}const St=e=>(t,n=ve)=>(!Ei||e==="sp")&&qr(e,t,n),qp=St("bm"),bu=St("m"),Wp=St("bu"),zp=St("u"),Tu=St("bum"),Au=St("um"),Gp=St("sp"),Xp=St("rtg"),Jp=St("rtc");function Yp(e,t=ve){qr("ec",e,t)}let eo=!0;function Qp(e){const t=Su(e),n=e.proxy,i=e.ctx;eo=!1,t.beforeCreate&&cc(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:w,activated:P,deactivated:R,beforeDestroy:O,beforeUnmount:E,destroyed:N,unmounted:F,render:W,renderTracked:G,renderTriggered:B,errorCaptured:ee,serverPrefetch:J,expose:de,inheritAttrs:le,components:me,directives:Xe,filters:it}=t;if(l&&Zp(l,i,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const ne=o[ae];K(ne)&&(i[ae]=ne.bind(n))}if(r){const ae=r.call(n,n);ye(ae)&&(e.data=Vn(ae))}if(eo=!0,s)for(const ae in s){const ne=s[ae],xe=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):Qe,mn=!K(ne)&&K(ne.set)?ne.set.bind(n):Qe,yt=lt({get:xe,set:mn});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>yt.value,set:rt=>yt.value=rt})}if(a)for(const ae in a)Cu(a[ae],i,n,ae);if(c){const ae=K(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ne=>{or(ne,ae[ne])})}u&&cc(u,e,"c");function pe(ae,ne){V(ne)?ne.forEach(xe=>ae(xe.bind(n))):ne&&ae(ne.bind(n))}if(pe(qp,h),pe(bu,d),pe(Wp,g),pe(zp,w),pe(Hp,P),pe(Vp,R),pe(Yp,ee),pe(Jp,G),pe(Xp,B),pe(Tu,E),pe(Au,F),pe(Gp,J),V(de))if(de.length){const ae=e.exposed||(e.exposed={});de.forEach(ne=>{Object.defineProperty(ae,ne,{get:()=>n[ne],set:xe=>n[ne]=xe})})}else e.exposed||(e.exposed={});W&&e.render===Qe&&(e.render=W),le!=null&&(e.inheritAttrs=le),me&&(e.components=me),Xe&&(e.directives=Xe)}function Zp(e,t,n=Qe,i=!1){V(e)&&(e=to(e));for(const r in e){const s=e[r];let o;ye(s)?"default"in s?o=dt(s.from||r,s.default,!0):o=dt(s.from||r):o=dt(s),we(o)&&i?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function cc(e,t,n){qe(V(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cu(e,t,n,i){const r=i.includes(".")?yu(n,i):()=>n[i];if(be(e)){const s=t[e];K(s)&&Pn(r,s)}else if(K(e))Pn(r,e.bind(n));else if(ye(e))if(V(e))e.forEach(s=>Cu(s,t,n,i));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&Pn(r,s,e)}}function Su(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!r.length&&!n&&!i?c=t:(c={},r.length&&r.forEach(l=>mr(c,l,o,!0)),mr(c,t,o)),s.set(t,c),c}function mr(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&mr(e,s,n,!0),r&&r.forEach(o=>mr(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=eg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const eg={data:lc,props:Jt,emits:Jt,methods:Jt,computed:Jt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Jt,directives:Jt,watch:ng,provide:lc,inject:tg};function lc(e,t){return t?e?function(){return Ce(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function tg(e,t){return Jt(to(e),to(t))}function to(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?Ce(Ce(Object.create(null),e),t):t}function ng(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const i in t)n[i]=Re(e[i],t[i]);return n}function ig(e,t,n,i=!1){const r={},s={};fr(s,Wr,1),e.propsDefaults=Object.create(null),Ru(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:pp(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function rg(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=Z(r),[c]=e.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const g=t[d];if(c)if(Q(s,d))g!==s[d]&&(s[d]=g,l=!0);else{const w=mt(d);r[w]=no(c,a,w,g,e,!1)}else g!==s[d]&&(s[d]=g,l=!0)}}}else{Ru(e,t,r,s)&&(l=!0);let u;for(const h in a)(!t||!Q(t,h)&&((u=$n(h))===h||!Q(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=no(c,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!Q(t,h)&&!0)&&(delete s[h],l=!0)}l&&Tt(e,"set","$attrs")}function Ru(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(rr(c))continue;const l=t[c];let u;r&&Q(r,u=mt(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:zo(e.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=Z(n),l=a||oe;for(let u=0;u<s.length;u++){const h=s[u];n[h]=no(r,c,h,l[h],e,!Q(l,h))}}return o}function no(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=Q(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=r;n in l?i=l[n]:(xn(r),i=l[n]=c.call(null,t),sn())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$n(n))&&(i=!0))}return i}function Ou(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let c=!1;if(!K(e)){const u=h=>{c=!0;const[d,g]=Ou(h,t,!0);Ce(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return i.set(e,Sn),Sn;if(V(s))for(let u=0;u<s.length;u++){const h=mt(s[u]);uc(h)&&(o[h]=oe)}else if(s)for(const u in s){const h=mt(u);if(uc(h)){const d=s[u],g=o[h]=V(d)||K(d)?{type:d}:d;if(g){const w=dc(Boolean,g.type),P=dc(String,g.type);g[0]=w>-1,g[1]=P<0||w<P,(w>-1||Q(g,"default"))&&a.push(h)}}}const l=[o,a];return i.set(e,l),l}function uc(e){return e[0]!=="$"}function hc(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function fc(e,t){return hc(e)===hc(t)}function dc(e,t){return V(t)?t.findIndex(n=>fc(n,e)):K(t)&&fc(t,e)?0:-1}const ku=e=>e[0]==="_"||e==="$stable",Jo=e=>V(e)?e.map(Ye):[Ye(e)],sg=(e,t,n)=>{const i=Cp((...r)=>Jo(t(...r)),n);return i._c=!1,i},Pu=(e,t,n)=>{const i=e._ctx;for(const r in e){if(ku(r))continue;const s=e[r];if(K(s))t[r]=sg(r,s,i);else if(s!=null){const o=Jo(s);t[r]=()=>o}}},Nu=(e,t)=>{const n=Jo(t);e.slots.default=()=>n},og=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),fr(t,"_",n)):Pu(t,e.slots={})}else e.slots={},t&&Nu(e,t);fr(e.slots,Wr,1)},ag=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=oe;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Ce(r,t),!n&&a===1&&delete r._):(s=!t.$stable,Pu(t,r)),o=t}else t&&(Nu(e,t),o={default:1});if(s)for(const a in r)!ku(a)&&!(a in o)&&delete r[a]};function Lb(e,t){const n=Ke;if(n===null)return e;const i=n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,c,l=oe]=t[s];K(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function Gt(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Bn(),qe(c,n,8,[e.el,a,e,t]),Hn())}}function Du(){return{app:null,config:{isNativeTag:Ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cg=0;function lg(e,t){return function(i,r=null){r!=null&&!ye(r)&&(r=null);const s=Du(),o=new Set;let a=!1;const c=s.app={_uid:cg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ng,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=Pe(i,r);return d.appContext=s,u&&t?t(d,l):e(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ea(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function io(e,t,n,i,r=!1){if(V(e)){e.forEach((d,g)=>io(d,t&&(V(t)?t[g]:t),n,i,r));return}if(Zs(i)&&!r)return;const s=i.shapeFlag&4?ea(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,Q(h,l)&&(h[l]=null)):we(l)&&(l.value=null)),K(c))Vt(c,a,12,[o,u]);else{const d=be(c),g=we(c);if(d||g){const w=()=>{if(e.f){const P=d?u[c]:c.value;r?V(P)&&Mo(P,s):V(P)?P.includes(s)||P.push(s):d?u[c]=[s]:(c.value=[s],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,Q(h,c)&&(h[c]=o)):we(c)&&(c.value=o,e.k&&(u[e.k]=o))};o?(w.id=-1,De(w,n)):w()}}}const De=Up;function ug(e){return hg(e)}function hg(e,t){const n=$d();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Qe,cloneNode:w,insertStaticContent:P}=e,R=(f,p,m,_=null,y=null,T=null,S=!1,b=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!ct(f,p)&&(_=M(f),He(f,y,T,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:I,ref:x,shapeFlag:D}=p;switch(I){case Yo:O(f,p,m,_);break;case ze:E(f,p,m,_);break;case ar:f==null&&N(p,m,_,S);break;case at:Xe(f,p,m,_,y,T,S,b,A);break;default:D&1?G(f,p,m,_,y,T,S,b,A):D&6?it(f,p,m,_,y,T,S,b,A):(D&64||D&128)&&I.process(f,p,m,_,y,T,S,b,A,ce)}x!=null&&y&&io(x,f&&f.ref,T,p||f,!p)},O=(f,p,m,_)=>{if(f==null)i(p.el=a(p.children),m,_);else{const y=p.el=f.el;p.children!==f.children&&l(y,p.children)}},E=(f,p,m,_)=>{f==null?i(p.el=c(p.children||""),m,_):p.el=f.el},N=(f,p,m,_)=>{[f.el,f.anchor]=P(f.children,p,m,_,f.el,f.anchor)},F=({el:f,anchor:p},m,_)=>{let y;for(;f&&f!==p;)y=d(f),i(f,m,_),f=y;i(p,m,_)},W=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},G=(f,p,m,_,y,T,S,b,A)=>{S=S||p.type==="svg",f==null?B(p,m,_,y,T,S,b,A):de(f,p,y,T,S,b,A)},B=(f,p,m,_,y,T,S,b)=>{let A,I;const{type:x,props:D,shapeFlag:U,transition:H,patchFlag:Y,dirs:he}=f;if(f.el&&w!==void 0&&Y===-1)A=f.el=w(f.el);else{if(A=f.el=o(f.type,T,D&&D.is,D),U&8?u(A,f.children):U&16&&J(f.children,A,null,_,y,T&&x!=="foreignObject",S,b),he&&Gt(f,null,_,"created"),D){for(const ue in D)ue!=="value"&&!rr(ue)&&s(A,ue,null,D[ue],T,f.children,_,y,C);"value"in D&&s(A,"value",null,D.value),(I=D.onVnodeBeforeMount)&&ot(I,_,f)}ee(A,f,f.scopeId,S,_)}he&&Gt(f,null,_,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;re&&H.beforeEnter(A),i(A,p,m),((I=D&&D.onVnodeMounted)||re||he)&&De(()=>{I&&ot(I,_,f),re&&H.enter(A),he&&Gt(f,null,_,"mounted")},y)},ee=(f,p,m,_,y)=>{if(m&&g(f,m),_)for(let T=0;T<_.length;T++)g(f,_[T]);if(y){let T=y.subTree;if(p===T){const S=y.vnode;ee(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},J=(f,p,m,_,y,T,S,b,A=0)=>{for(let I=A;I<f.length;I++){const x=f[I]=b?xt(f[I]):Ye(f[I]);R(null,x,p,m,_,y,T,S,b)}},de=(f,p,m,_,y,T,S)=>{const b=p.el=f.el;let{patchFlag:A,dynamicChildren:I,dirs:x}=p;A|=f.patchFlag&16;const D=f.props||oe,U=p.props||oe;let H;m&&Xt(m,!1),(H=U.onVnodeBeforeUpdate)&&ot(H,m,p,f),x&&Gt(p,f,m,"beforeUpdate"),m&&Xt(m,!0);const Y=y&&p.type!=="foreignObject";if(I?le(f.dynamicChildren,I,b,m,_,Y,T):S||xe(f,p,b,null,m,_,Y,T,!1),A>0){if(A&16)me(b,p,D,U,m,_,y);else if(A&2&&D.class!==U.class&&s(b,"class",null,U.class,y),A&4&&s(b,"style",D.style,U.style,y),A&8){const he=p.dynamicProps;for(let re=0;re<he.length;re++){const ue=he[re],Je=D[ue],vn=U[ue];(vn!==Je||ue==="value")&&s(b,ue,Je,vn,y,f.children,m,_,C)}}A&1&&f.children!==p.children&&u(b,p.children)}else!S&&I==null&&me(b,p,D,U,m,_,y);((H=U.onVnodeUpdated)||x)&&De(()=>{H&&ot(H,m,p,f),x&&Gt(p,f,m,"updated")},_)},le=(f,p,m,_,y,T,S)=>{for(let b=0;b<p.length;b++){const A=f[b],I=p[b],x=A.el&&(A.type===at||!ct(A,I)||A.shapeFlag&70)?h(A.el):m;R(A,I,x,null,_,y,T,S,!0)}},me=(f,p,m,_,y,T,S)=>{if(m!==_){for(const b in _){if(rr(b))continue;const A=_[b],I=m[b];A!==I&&b!=="value"&&s(f,b,I,A,S,p.children,y,T,C)}if(m!==oe)for(const b in m)!rr(b)&&!(b in _)&&s(f,b,m[b],null,S,p.children,y,T,C);"value"in _&&s(f,"value",m.value,_.value)}},Xe=(f,p,m,_,y,T,S,b,A)=>{const I=p.el=f?f.el:a(""),x=p.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:H}=p;H&&(b=b?b.concat(H):H),f==null?(i(I,m,_),i(x,m,_),J(p.children,m,x,y,T,S,b,A)):D>0&&D&64&&U&&f.dynamicChildren?(le(f.dynamicChildren,U,m,y,T,S,b),(p.key!=null||y&&p===y.subTree)&&Lu(f,p,!0)):xe(f,p,m,x,y,T,S,b,A)},it=(f,p,m,_,y,T,S,b,A)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?y.ctx.activate(p,m,_,S,A):gn(p,m,_,y,T,S,A):pe(f,p,A)},gn=(f,p,m,_,y,T,S)=>{const b=f.component=Tg(f,_,y);if(Kr(f)&&(b.ctx.renderer=ce),Cg(b),b.asyncDep){if(y&&y.registerDep(b,ae),!f.el){const A=b.subTree=Pe(ze);E(null,A,p,m)}return}ae(b,f,p,m,y,T,S)},pe=(f,p,m)=>{const _=p.component=f.component;if(kp(f,p,m))if(_.asyncDep&&!_.asyncResolved){ne(_,p,m);return}else _.next=p,bp(_.update),_.update();else p.component=f.component,p.el=f.el,_.vnode=p},ae=(f,p,m,_,y,T,S)=>{const b=()=>{if(f.isMounted){let{next:x,bu:D,u:U,parent:H,vnode:Y}=f,he=x,re;Xt(f,!1),x?(x.el=Y.el,ne(f,x,S)):x=Y,D&&sr(D),(re=x.props&&x.props.onVnodeBeforeUpdate)&&ot(re,H,x,Y),Xt(f,!0);const ue=ws(f),Je=f.subTree;f.subTree=ue,R(Je,ue,h(Je.el),M(Je),f,y,T),x.el=ue.el,he===null&&Go(f,ue.el),U&&De(U,y),(re=x.props&&x.props.onVnodeUpdated)&&De(()=>ot(re,H,x,Y),y)}else{let x;const{el:D,props:U}=p,{bm:H,m:Y,parent:he}=f,re=Zs(p);if(Xt(f,!1),H&&sr(H),!re&&(x=U&&U.onVnodeBeforeMount)&&ot(x,he,p),Xt(f,!0),D&&q){const ue=()=>{f.subTree=ws(f),q(D,f.subTree,f,y,null)};re?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=ws(f);R(null,ue,m,_,f,y,T),p.el=ue.el}if(Y&&De(Y,y),!re&&(x=U&&U.onVnodeMounted)){const ue=p;De(()=>ot(x,he,ue),y)}p.shapeFlag&256&&f.a&&De(f.a,y),f.isMounted=!0,p=m=_=null}},A=f.effect=new jo(b,()=>uu(f.update),f.scope),I=f.update=A.run.bind(A);I.id=f.uid,Xt(f,!0),I()},ne=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,rg(f,p.props,_,m),ag(f,p.children,m),Bn(),Wo(void 0,f.update),Hn()},xe=(f,p,m,_,y,T,S,b,A=!1)=>{const I=f&&f.children,x=f?f.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:H}=p;if(U>0){if(U&128){yt(I,D,m,_,y,T,S,b,A);return}else if(U&256){mn(I,D,m,_,y,T,S,b,A);return}}H&8?(x&16&&C(I,y,T),D!==I&&u(m,D)):x&16?H&16?yt(I,D,m,_,y,T,S,b,A):C(I,y,T,!0):(x&8&&u(m,""),H&16&&J(D,m,_,y,T,S,b,A))},mn=(f,p,m,_,y,T,S,b,A)=>{f=f||Sn,p=p||Sn;const I=f.length,x=p.length,D=Math.min(I,x);let U;for(U=0;U<D;U++){const H=p[U]=A?xt(p[U]):Ye(p[U]);R(f[U],H,m,null,y,T,S,b,A)}I>x?C(f,y,T,!0,!1,D):J(p,m,_,y,T,S,b,A,D)},yt=(f,p,m,_,y,T,S,b,A)=>{let I=0;const x=p.length;let D=f.length-1,U=x-1;for(;I<=D&&I<=U;){const H=f[I],Y=p[I]=A?xt(p[I]):Ye(p[I]);if(ct(H,Y))R(H,Y,m,null,y,T,S,b,A);else break;I++}for(;I<=D&&I<=U;){const H=f[D],Y=p[U]=A?xt(p[U]):Ye(p[U]);if(ct(H,Y))R(H,Y,m,null,y,T,S,b,A);else break;D--,U--}if(I>D){if(I<=U){const H=U+1,Y=H<x?p[H].el:_;for(;I<=U;)R(null,p[I]=A?xt(p[I]):Ye(p[I]),m,Y,y,T,S,b,A),I++}}else if(I>U)for(;I<=D;)He(f[I],y,T,!0),I++;else{const H=I,Y=I,he=new Map;for(I=Y;I<=U;I++){const Ue=p[I]=A?xt(p[I]):Ye(p[I]);Ue.key!=null&&he.set(Ue.key,I)}let re,ue=0;const Je=U-Y+1;let vn=!1,Ga=0;const Yn=new Array(Je);for(I=0;I<Je;I++)Yn[I]=0;for(I=H;I<=D;I++){const Ue=f[I];if(ue>=Je){He(Ue,y,T,!0);continue}let st;if(Ue.key!=null)st=he.get(Ue.key);else for(re=Y;re<=U;re++)if(Yn[re-Y]===0&&ct(Ue,p[re])){st=re;break}st===void 0?He(Ue,y,T,!0):(Yn[st-Y]=I+1,st>=Ga?Ga=st:vn=!0,R(Ue,p[st],m,null,y,T,S,b,A),ue++)}const Xa=vn?fg(Yn):Sn;for(re=Xa.length-1,I=Je-1;I>=0;I--){const Ue=Y+I,st=p[Ue],Ja=Ue+1<x?p[Ue+1].el:_;Yn[I]===0?R(null,st,m,Ja,y,T,S,b,A):vn&&(re<0||I!==Xa[re]?rt(st,m,Ja,2):re--)}}},rt=(f,p,m,_,y=null)=>{const{el:T,type:S,transition:b,children:A,shapeFlag:I}=f;if(I&6){rt(f.component.subTree,p,m,_);return}if(I&128){f.suspense.move(p,m,_);return}if(I&64){S.move(f,p,m,ce);return}if(S===at){i(T,p,m);for(let D=0;D<A.length;D++)rt(A[D],p,m,_);i(f.anchor,p,m);return}if(S===ar){F(f,p,m);return}if(_!==2&&I&1&&b)if(_===0)b.beforeEnter(T),i(T,p,m),De(()=>b.enter(T),y);else{const{leave:D,delayLeave:U,afterLeave:H}=b,Y=()=>i(T,p,m),he=()=>{D(T,()=>{Y(),H&&H()})};U?U(T,Y,he):he()}else i(T,p,m)},He=(f,p,m,_=!1,y=!1)=>{const{type:T,props:S,ref:b,children:A,dynamicChildren:I,shapeFlag:x,patchFlag:D,dirs:U}=f;if(b!=null&&io(b,null,m,f,!0),x&256){p.ctx.deactivate(f);return}const H=x&1&&U,Y=!Zs(f);let he;if(Y&&(he=S&&S.onVnodeBeforeUnmount)&&ot(he,p,f),x&6)L(f.component,m,_);else{if(x&128){f.suspense.unmount(m,_);return}H&&Gt(f,null,p,"beforeUnmount"),x&64?f.type.remove(f,p,m,y,ce,_):I&&(T!==at||D>0&&D&64)?C(I,p,m,!1,!0):(T===at&&D&384||!y&&x&16)&&C(A,p,m),_&&ys(f)}(Y&&(he=S&&S.onVnodeUnmounted)||H)&&De(()=>{he&&ot(he,p,f),H&&Gt(f,null,p,"unmounted")},m)},ys=f=>{const{type:p,el:m,anchor:_,transition:y}=f;if(p===at){v(m,_);return}if(p===ar){W(f);return}const T=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:b}=y,A=()=>S(m,T);b?b(f.el,T,A):A()}else T()},v=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},L=(f,p,m)=>{const{bum:_,scope:y,update:T,subTree:S,um:b}=f;_&&sr(_),y.stop(),T&&(T.active=!1,He(S,f,p,m)),b&&De(b,p),De(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(f,p,m,_=!1,y=!1,T=0)=>{for(let S=T;S<f.length;S++)He(f[S],p,m,_,y)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ie=(f,p,m)=>{f==null?p._vnode&&He(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,m),pu(),p._vnode=f},ce={p:R,um:He,m:rt,r:ys,mt:gn,mc:J,pc:xe,pbc:le,n:M,o:e};let z,q;return t&&([z,q]=t(ce)),{render:ie,hydrate:z,createApp:lg(ie,z)}}function Xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lu(e,t,n=!1){const i=e.children,r=t.children;if(V(i)&&V(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xt(r[s]),a.el=o.el),n||Lu(o,a))}}function fg(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const l=e[i];if(l!==0){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const dg=e=>e.__isTeleport,Mu="components";function pg(e,t){return mg(Mu,e,!0,t)||e}const gg=Symbol();function mg(e,t,n=!0,i=!1){const r=Ke||ve;if(r){const s=r.type;if(e===Mu){const a=kg(s);if(a&&(a===t||a===mt(t)||a===Br(mt(t))))return s}const o=pc(r[e]||s[e],t)||pc(r.appContext[e],t);return!o&&i?s:o}}function pc(e,t){return e&&(e[t]||e[mt(t)]||e[Br(mt(t))])}const at=Symbol(void 0),Yo=Symbol(void 0),ze=Symbol(void 0),ar=Symbol(void 0),li=[];let Kt=null;function Qo(e=!1){li.push(Kt=e?null:[])}function xu(){li.pop(),Kt=li[li.length-1]||null}let Ii=1;function gc(e){Ii+=e}function Uu(e){return e.dynamicChildren=Ii>0?Kt||Sn:null,xu(),Ii>0&&Kt&&Kt.push(e),e}function Mb(e,t,n,i,r,s){return Uu($u(e,t,n,i,r,s,!0))}function Fu(e,t,n,i,r){return Uu(Pe(e,t,n,i,r,!0))}function vr(e){return e?e.__v_isVNode===!0:!1}function ct(e,t){return e.type===t.type&&e.key===t.key}const Wr="__vInternal",ju=({key:e})=>e!=null?e:null,cr=({ref:e,ref_key:t,ref_for:n})=>e!=null?be(e)||we(e)||K(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function $u(e,t=null,n=null,i=0,r=null,s=e===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ju(t),ref:t&&cr(t),scopeId:Vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Zo(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Ii>0&&!o&&Kt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Kt.push(c),c}const Pe=vg;function vg(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===gg)&&(e=ze),vr(e)){const a=Mn(e,t,!0);return n&&Zo(a,n),a}if(Pg(e)&&(e=e.__vccOpts),t){t=yg(t);let{class:a,style:c}=t;a&&!be(a)&&(t.class=Do(a)),ye(c)&&(nu(c)&&!V(c)&&(c=Ce({},c)),t.style=No(c))}const o=be(e)?1:Pp(e)?128:dg(e)?64:ye(e)?4:K(e)?2:0;return $u(e,t,n,i,r,o,s,!0)}function yg(e){return e?nu(e)||Wr in e?Ce({},e):e:null}function Mn(e,t,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=e,a=t?wg(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ju(a),ref:t&&t.ref?n&&r?V(r)?r.concat(cr(t)):[r,cr(t)]:cr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==at?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mn(e.ssContent),ssFallback:e.ssFallback&&Mn(e.ssFallback),el:e.el,anchor:e.anchor}}function _g(e=" ",t=0){return Pe(Yo,null,e,t)}function xb(e,t){const n=Pe(ar,null,e);return n.staticCount=t,n}function Ub(e="",t=!1){return t?(Qo(),Fu(ze,null,e)):Pe(ze,null,e)}function Ye(e){return e==null||typeof e=="boolean"?Pe(ze):V(e)?Pe(at,null,e.slice()):typeof e=="object"?xt(e):Pe(Yo,null,String(e))}function xt(e){return e.el===null||e.memo?e:Mn(e)}function Zo(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Zo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Wr in t)?t._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),i&64?(n=16,t=[_g(t)]):n=8);e.children=t,e.shapeFlag|=n}function wg(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Do([t.class,i.class]));else if(r==="style")t.style=No([t.style,i.style]);else if(Fr(r)){const s=t[r],o=i[r];o&&s!==o&&!(V(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function ot(e,t,n,i=null){qe(e,t,7,[n,i])}const ro=e=>e?Bu(e)?ea(e)||e.proxy:ro(e.parent):null,yr=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ro(e.parent),$root:e=>ro(e.root),$emit:e=>e.emit,$options:e=>Su(e),$forceUpdate:e=>()=>uu(e.update),$nextTick:e=>lu.bind(e.proxy),$watch:e=>Fp.bind(e)}),Ig={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(i!==oe&&Q(i,t))return o[t]=1,i[t];if(r!==oe&&Q(r,t))return o[t]=2,r[t];if((l=e.propsOptions[0])&&Q(l,t))return o[t]=3,s[t];if(n!==oe&&Q(n,t))return o[t]=4,n[t];eo&&(o[t]=0)}}const u=yr[t];let h,d;if(u)return t==="$attrs"&&Be(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==oe&&Q(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Q(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return r!==oe&&Q(r,t)?(r[t]=n,!0):i!==oe&&Q(i,t)?(i[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==oe&&Q(e,o)||t!==oe&&Q(t,o)||(a=s[0])&&Q(a,o)||Q(i,o)||Q(yr,o)||Q(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Eg=Du();let bg=0;function Tg(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||Eg,s={uid:bg++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ou(i,r),emitsOptions:mu(i,r),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ap.bind(null,s),e.ce&&e.ce(s),s}let ve=null;const Ag=()=>ve||Ke,xn=e=>{ve=e,e.scope.on()},sn=()=>{ve&&ve.scope.off(),ve=null};function Bu(e){return e.vnode.shapeFlag&4}let Ei=!1;function Cg(e,t=!1){Ei=t;const{props:n,children:i}=e.vnode,r=Bu(e);ig(e,n,r,t),og(e,i);const s=r?Sg(e,t):void 0;return Ei=!1,s}function Sg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=iu(new Proxy(e.ctx,Ig));const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?Og(e):null;xn(e),Bn();const s=Vt(i,e,0,[e.props,r]);if(Hn(),sn(),Bl(s)){if(s.then(sn,sn),t)return s.then(o=>{so(e,o,t)}).catch(o=>{Mi(o,e,0)});e.asyncDep=s}else so(e,s,t)}else Hu(e,t)}function so(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=au(t)),Hu(e,n)}let mc;function Hu(e,t,n){const i=e.type;if(!e.render){if(!t&&mc&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Ce(Ce({isCustomElement:s,delimiters:a},o),c);i.render=mc(r,l)}}e.render=i.render||Qe}xn(e),Bn(),Qp(e),Hn(),sn()}function Rg(e){return new Proxy(e.attrs,{get(t,n){return Be(e,"get","$attrs"),t[n]}})}function Og(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=Rg(e))},slots:e.slots,emit:e.emit,expose:t}}function ea(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(au(iu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yr)return yr[n](e)}}))}function kg(e){return K(e)&&e.displayName||e.name}function Pg(e){return K(e)&&"__vccOpts"in e}const lt=(e,t)=>wp(e,t,Ei);function Vu(e,t,n){const i=arguments.length;return i===2?ye(t)&&!V(t)?vr(t)?Pe(e,null,[t]):Pe(e,t):Pe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vr(n)&&(n=[n]),Pe(e,t,n))}const Ng="3.2.31",Dg="http://www.w3.org/2000/svg",Qt=typeof document!="undefined"?document:null,vc=Qt&&Qt.createElement("template"),Lg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?Qt.createElementNS(Dg,e):Qt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Qt.createTextNode(e),createComment:e=>Qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{vc.innerHTML=i?`<svg>${e}</svg>`:e;const a=vc.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Mg(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xg(e,t,n){const i=e.style,r=be(n);if(n&&!r){for(const s in n)oo(i,s,n[s]);if(t&&!be(t))for(const s in t)n[s]==null&&oo(i,s,"")}else{const s=i.display;r?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=s)}}const yc=/\s*!important$/;function oo(e,t,n){if(V(n))n.forEach(i=>oo(e,t,i));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Ug(e,t);yc.test(n)?e.setProperty($n(i),n.replace(yc,""),"important"):e[i]=n}}const _c=["Webkit","Moz","ms"],Es={};function Ug(e,t){const n=Es[t];if(n)return n;let i=mt(t);if(i!=="filter"&&i in e)return Es[t]=i;i=Br(i);for(let r=0;r<_c.length;r++){const s=_c[r]+i;if(s in e)return Es[t]=s}return t}const wc="http://www.w3.org/1999/xlink";function Fg(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wc,t.slice(6,t.length)):e.setAttributeNS(wc,t,n);else{const s=kd(t);n==null||s&&!Fl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function jg(e,t,n,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=Fl(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let _r=Date.now,Ku=!1;if(typeof window!="undefined"){_r()>document.createEvent("Event").timeStamp&&(_r=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ku=!!(e&&Number(e[1])<=53)}let ao=0;const $g=Promise.resolve(),Bg=()=>{ao=0},Hg=()=>ao||($g.then(Bg),ao=_r());function bn(e,t,n,i){e.addEventListener(t,n,i)}function Vg(e,t,n,i){e.removeEventListener(t,n,i)}function Kg(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[a,c]=qg(t);if(i){const l=s[t]=Wg(i,r);bn(e,a,l,c)}else o&&(Vg(e,a,o,c),s[t]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function qg(e){let t;if(Ic.test(e)){t={};let n;for(;n=e.match(Ic);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[$n(e.slice(2)),t]}function Wg(e,t){const n=i=>{const r=i.timeStamp||_r();(Ku||r>=n.attached-1)&&qe(zg(i,n.value),t,5,[i])};return n.value=e,n.attached=Hg(),n}function zg(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Ec=/^on[a-z]/,Gg=(e,t,n,i,r=!1,s,o,a,c)=>{t==="class"?Mg(e,i,r):t==="style"?xg(e,n,i):Fr(t)?Lo(t)||Kg(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xg(e,t,i,r))?jg(e,t,i,s,o,a,c):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Fg(e,t,i,r))};function Xg(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Ec.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ec.test(t)&&be(n)?!1:t in e}const Jg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bp.props;const bc=e=>{const t=e.props["onUpdate:modelValue"];return V(t)?n=>sr(t,n):t};function Yg(e){e.target.composing=!0}function Tc(e){const t=e.target;t.composing&&(t.composing=!1,Qg(t,"input"))}function Qg(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Fb={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e._assign=bc(r);const s=i||r.props&&r.props.type==="number";bn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():s&&(a=dr(a)),e._assign(a)}),n&&bn(e,"change",()=>{e.value=e.value.trim()}),t||(bn(e,"compositionstart",Yg),bn(e,"compositionend",Tc),bn(e,"change",Tc))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e._assign=bc(s),e.composing||document.activeElement===e&&(n||i&&e.value.trim()===t||(r||e.type==="number")&&dr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Zg=["ctrl","shift","alt","meta"],em={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zg.some(n=>e[`${n}Key`]&&!t.includes(n))},jb=(e,t)=>(n,...i)=>{for(let r=0;r<t.length;r++){const s=em[t[r]];if(s&&s(n,t))return}return e(n,...i)},tm=Ce({patchProp:Gg},Lg);let Ac;function nm(){return Ac||(Ac=ug(tm))}const im=(...e)=>{const t=nm().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=rm(i);if(!r)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function rm(e){return be(e)?document.querySelector(e):e}const sm="modulepreload",Cc={},om="/",Pt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${om}${i}`,i in Cc)return;Cc[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":sm,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function am(){return qu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function qu(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const cm=typeof Proxy=="function",lm="devtools-plugin:setup",um="plugin:settings:set";let yn,co;function hm(){var e;return yn!==void 0||(typeof window!="undefined"&&window.performance?(yn=!0,co=window.performance):typeof global!="undefined"&&((e=global.perf_hooks)===null||e===void 0?void 0:e.performance)?(yn=!0,co=global.perf_hooks.performance):yn=!1),yn}function fm(){return hm()?co.now():Date.now()}class dm{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const i={};if(t.settings)for(const o in t.settings){const a=t.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return fm()}},n&&n.on(um,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function pm(e,t){const n=e,i=qu(),r=am(),s=cm&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(lm,e,t);else{const o=s?new dm(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Kn=e=>Wu?Symbol(e):"_vr_"+e,gm=Kn("rvlm"),Sc=Kn("rvd"),zr=Kn("r"),zu=Kn("rl"),lo=Kn("rvl"),Tn=typeof window!="undefined";function mm(e){return e.__esModule||Wu&&e[Symbol.toStringTag]==="Module"}const se=Object.assign;function bs(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const ui=()=>{},vm=/\/$/,ym=e=>e.replace(vm,"");function Ts(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),r=e(s)),c>-1&&(i=i||t.slice(0,c),o=t.slice(c,t.length)),i=Em(i!=null?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function _m(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Rc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function wm(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Un(t.matched[i],n.matched[r])&&Gu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Im(e[n],t[n]))return!1;return!0}function Im(e,t){return Array.isArray(e)?Oc(e,t):Array.isArray(t)?Oc(t,e):e===t}function Oc(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Em(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var bi;(function(e){e.pop="pop",e.push="push"})(bi||(bi={}));var hi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hi||(hi={}));function bm(e){if(!e)if(Tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ym(e)}const Tm=/^[^#]+#/;function Am(e,t){return e.replace(Tm,"#")+t}function Cm(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sm(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Cm(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function kc(e,t){return(history.state?history.state.position-t:-1)+e}const uo=new Map;function Rm(e,t){uo.set(e,t)}function Om(e){const t=uo.get(e);return uo.delete(e),t}let km=()=>location.protocol+"//"+location.host;function Xu(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Rc(c,"")}return Rc(n,e)+i+r}function Pm(e,t,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const g=Xu(e,location),w=n.value,P=t.value;let R=0;if(d){if(n.value=g,t.value=d,o&&o===w){o=null;return}R=P?d.position-P.position:0}else i(g);r.forEach(O=>{O(n.value,w,{delta:R,type:bi.pop,direction:R?R>0?hi.forward:hi.back:hi.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const w=r.indexOf(d);w>-1&&r.splice(w,1)};return s.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(se({},d.state,{scroll:Gr()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Pc(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Gr():null}}function Nm(e){const{history:t,location:n}=window,i={value:Xu(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:km()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=se({},t.state,Pc(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=se({},r.value,t.state,{forward:c,scroll:Gr()});s(u.current,u,!0);const h=se({},Pc(i.value,c,null),{position:u.position+1},l);s(c,h,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function Dm(e){e=bm(e);const t=Nm(e),n=Pm(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=se({location:"",base:e,go:i,createHref:Am.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Lm(e){return typeof e=="string"||e&&typeof e=="object"}function Ju(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yu=Kn("nf");var Nc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Nc||(Nc={}));function Fn(e,t){return se(new Error,{type:e,[Yu]:!0},t)}function Dt(e,t){return e instanceof Error&&Yu in e&&(t==null||!!(e.type&t))}const Dc="[^/]+?",Mm={sensitive:!1,strict:!1,start:!0,end:!0},xm=/[.+*?^${}()[\]/\\]/g;function Um(e,t){const n=se({},Mm,t),i=[];let r=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(xm,"\\$&"),g+=40;else if(d.type===1){const{value:w,repeatable:P,optional:R,regexp:O}=d;s.push({name:w,repeatable:P,optional:R});const E=O||Dc;if(E!==Dc){g+=10;try{new RegExp(`(${E})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+F.message)}}let N=P?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(N=R&&l.length<2?`(?:/${N})`:"/"+N),R&&(N+="?"),r+=N,g+=20,R&&(g+=-8),P&&(g+=-20),E===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",w=s[d-1];h[w.name]=g&&w.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:P,optional:R}=g,O=w in l?l[w]:"";if(Array.isArray(O)&&!P)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(O)?O.join("/"):O;if(!E)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=E}}return u}return{re:o,score:i,keys:s,parse:a,stringify:c}}function Fm(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function jm(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=Fm(i[n],r[n]);if(s)return s;n++}return r.length-i.length}const $m={type:0,value:""},Bm=/[a-zA-Z0-9_]/;function Hm(e){if(!e)return[[]];if(e==="/")return[[$m]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:c==="("?n=2:Bm.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Vm(e,t,n){const i=Um(Hm(e.path),n),r=se(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Km(e,t){const n=[],i=new Map;t=Mc({strict:!1,end:!0,sensitive:!1},t);function r(u){return i.get(u)}function s(u,h,d){const g=!d,w=Wm(u);w.aliasOf=d&&d.record;const P=Mc(t,u),R=[w];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of N)R.push(se({},w,{components:d?d.record.components:w.components,path:F,aliasOf:d?d.record:w}))}let O,E;for(const N of R){const{path:F}=N;if(h&&F[0]!=="/"){const W=h.record.path,G=W[W.length-1]==="/"?"":"/";N.path=h.record.path+(F&&G+F)}if(O=Vm(N,h,P),d?d.alias.push(O):(E=E||O,E!==O&&E.alias.push(O),g&&u.name&&!Lc(O)&&o(u.name)),"children"in w){const W=w.children;for(let G=0;G<W.length;G++)s(W[G],O,d&&d.children[G])}d=d||O,c(O)}return E?()=>{o(E)}:ui}function o(u){if(Ju(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&jm(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lc(u)&&i.set(u.record.name,u)}function l(u,h){let d,g={},w,P;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Fn(1,{location:u});P=d.record.name,g=se(qm(h.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params),w=d.stringify(g)}else if("path"in u)w=u.path,d=n.find(E=>E.re.test(w)),d&&(g=d.parse(w),P=d.record.name);else{if(d=h.name?i.get(h.name):n.find(E=>E.re.test(h.path)),!d)throw Fn(1,{location:u,currentLocation:h});P=d.record.name,g=se({},h.params,u.params),w=d.stringify(g)}const R=[];let O=d;for(;O;)R.unshift(O.record),O=O.parent;return{name:P,path:w,params:g,matched:R,meta:Gm(R)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function qm(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Wm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:zm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function zm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function Lc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gm(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Mc(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Qu(e,t){return t.children.some(n=>n===e||Qu(e,n))}const Zu=/#/g,Xm=/&/g,Jm=/\//g,Ym=/=/g,Qm=/\?/g,eh=/\+/g,Zm=/%5B/g,ev=/%5D/g,th=/%5E/g,tv=/%60/g,nh=/%7B/g,nv=/%7C/g,ih=/%7D/g,iv=/%20/g;function ta(e){return encodeURI(""+e).replace(nv,"|").replace(Zm,"[").replace(ev,"]")}function rv(e){return ta(e).replace(nh,"{").replace(ih,"}").replace(th,"^")}function ho(e){return ta(e).replace(eh,"%2B").replace(iv,"+").replace(Zu,"%23").replace(Xm,"%26").replace(tv,"`").replace(nh,"{").replace(ih,"}").replace(th,"^")}function sv(e){return ho(e).replace(Ym,"%3D")}function ov(e){return ta(e).replace(Zu,"%23").replace(Qm,"%3F")}function av(e){return e==null?"":ov(e).replace(Jm,"%2F")}function wr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function cv(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(eh," "),o=s.indexOf("="),a=wr(o<0?s:s.slice(0,o)),c=o<0?null:wr(s.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function xc(e){let t="";for(let n in e){const i=e[n];if(n=sv(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map(s=>s&&ho(s)):[i&&ho(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function lv(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}function Qn(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ut(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Fn(4,{from:n,to:t})):h instanceof Error?a(h):Lm(h)?a(Fn(2,{from:t,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},l=e.call(i&&i.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function As(e,t,n,i){const r=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(uv(a)){const l=(a.__vccOpts||a)[t];l&&r.push(Ut(l,n,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=mm(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&Ut(d,n,i,s,o)()}))}}return r}function uv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Uc(e){const t=dt(zr),n=dt(zu),i=lt(()=>t.resolve(oi(e.to))),r=lt(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Un.bind(null,u));if(d>-1)return d;const g=Fc(c[l-2]);return l>1&&Fc(u)===g&&h[h.length-1].path!==g?h.findIndex(Un.bind(null,c[l-2])):d}),s=lt(()=>r.value>-1&&pv(n.params,i.value.params)),o=lt(()=>r.value>-1&&r.value===n.matched.length-1&&Gu(n.params,i.value.params));function a(c={}){return dv(c)?t[oi(e.replace)?"replace":"push"](oi(e.to)).catch(ui):Promise.resolve()}return{route:i,href:lt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const hv=Iu({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uc,setup(e,{slots:t}){const n=Vn(Uc(e)),{options:i}=dt(zr),r=lt(()=>({[jc(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[jc(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Vu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),fv=hv;function dv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pv(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Fc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jc=(e,t,n)=>e!=null?e:t!=null?t:n,gv=Iu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=dt(lo),r=lt(()=>e.route||i.value),s=dt(Sc,0),o=lt(()=>r.value.matched[s]);or(Sc,s+1),or(gm,o),or(lo,r);const a=gp();return Pn(()=>[a.value,o.value,e.name],([c,l,u],[h,d,g])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!Un(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[e.name],h=e.name;if(!u)return $c(n.default,{Component:u,route:c});const d=l.props[e.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,P=Vu(u,se({},g,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return $c(n.default,{Component:P,route:c})||P}}});function $c(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const mv=gv;function vv(e){const t=Km(e.routes,e),n=e.parseQuery||cv,i=e.stringifyQuery||xc,r=e.history,s=Qn(),o=Qn(),a=Qn(),c=mp(Nt);let l=Nt;Tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=bs.bind(null,v=>""+v),h=bs.bind(null,av),d=bs.bind(null,wr);function g(v,L){let C,M;return Ju(v)?(C=t.getRecordMatcher(v),M=L):M=v,t.addRoute(M,C)}function w(v){const L=t.getRecordMatcher(v);L&&t.removeRoute(L)}function P(){return t.getRoutes().map(v=>v.record)}function R(v){return!!t.getRecordMatcher(v)}function O(v,L){if(L=se({},L||c.value),typeof v=="string"){const q=Ts(n,v,L.path),f=t.resolve({path:q.path},L),p=r.createHref(q.fullPath);return se(q,f,{params:d(f.params),hash:wr(q.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=se({},v,{path:Ts(n,v.path,L.path).path});else{const q=se({},v.params);for(const f in q)q[f]==null&&delete q[f];C=se({},v,{params:h(v.params)}),L.params=h(L.params)}const M=t.resolve(C,L),ie=v.hash||"";M.params=u(d(M.params));const ce=_m(i,se({},v,{hash:rv(ie),path:M.path})),z=r.createHref(ce);return se({fullPath:ce,hash:ie,query:i===xc?lv(v.query):v.query||{}},M,{redirectedFrom:void 0,href:z})}function E(v){return typeof v=="string"?Ts(n,v,c.value.path):se({},v)}function N(v,L){if(l!==v)return Fn(8,{from:L,to:v})}function F(v){return B(v)}function W(v){return F(se(E(v),{replace:!0}))}function G(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:C}=L;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=E(M):{path:M},M.params={}),se({query:v.query,hash:v.hash,params:v.params},M)}}function B(v,L){const C=l=O(v),M=c.value,ie=v.state,ce=v.force,z=v.replace===!0,q=G(C);if(q)return B(se(E(q),{state:ie,force:ce,replace:z}),L||C);const f=C;f.redirectedFrom=L;let p;return!ce&&wm(i,M,C)&&(p=Fn(16,{to:f,from:M}),mn(M,M,!0,!1)),(p?Promise.resolve(p):J(f,M)).catch(m=>Dt(m)?Dt(m,2)?m:xe(m):ae(m,f,M)).then(m=>{if(m){if(Dt(m,2))return B(se(E(m.to),{state:ie,force:ce,replace:z}),L||f)}else m=le(f,M,!0,z,ie);return de(f,M,m),m})}function ee(v,L){const C=N(v,L);return C?Promise.reject(C):Promise.resolve()}function J(v,L){let C;const[M,ie,ce]=yv(v,L);C=As(M.reverse(),"beforeRouteLeave",v,L);for(const q of M)q.leaveGuards.forEach(f=>{C.push(Ut(f,v,L))});const z=ee.bind(null,v,L);return C.push(z),_n(C).then(()=>{C=[];for(const q of s.list())C.push(Ut(q,v,L));return C.push(z),_n(C)}).then(()=>{C=As(ie,"beforeRouteUpdate",v,L);for(const q of ie)q.updateGuards.forEach(f=>{C.push(Ut(f,v,L))});return C.push(z),_n(C)}).then(()=>{C=[];for(const q of v.matched)if(q.beforeEnter&&!L.matched.includes(q))if(Array.isArray(q.beforeEnter))for(const f of q.beforeEnter)C.push(Ut(f,v,L));else C.push(Ut(q.beforeEnter,v,L));return C.push(z),_n(C)}).then(()=>(v.matched.forEach(q=>q.enterCallbacks={}),C=As(ce,"beforeRouteEnter",v,L),C.push(z),_n(C))).then(()=>{C=[];for(const q of o.list())C.push(Ut(q,v,L));return C.push(z),_n(C)}).catch(q=>Dt(q,8)?q:Promise.reject(q))}function de(v,L,C){for(const M of a.list())M(v,L,C)}function le(v,L,C,M,ie){const ce=N(v,L);if(ce)return ce;const z=L===Nt,q=Tn?history.state:{};C&&(M||z?r.replace(v.fullPath,se({scroll:z&&q&&q.scroll},ie)):r.push(v.fullPath,ie)),c.value=v,mn(v,L,C,z),xe()}let me;function Xe(){me=r.listen((v,L,C)=>{const M=O(v),ie=G(M);if(ie){B(se(ie,{replace:!0}),M).catch(ui);return}l=M;const ce=c.value;Tn&&Rm(kc(ce.fullPath,C.delta),Gr()),J(M,ce).catch(z=>Dt(z,12)?z:Dt(z,2)?(B(z.to,M).then(q=>{Dt(q,20)&&!C.delta&&C.type===bi.pop&&r.go(-1,!1)}).catch(ui),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ae(z,M,ce))).then(z=>{z=z||le(M,ce,!1),z&&(C.delta?r.go(-C.delta,!1):C.type===bi.pop&&Dt(z,20)&&r.go(-1,!1)),de(M,ce,z)}).catch(ui)})}let it=Qn(),gn=Qn(),pe;function ae(v,L,C){xe(v);const M=gn.list();return M.length?M.forEach(ie=>ie(v,L,C)):console.error(v),Promise.reject(v)}function ne(){return pe&&c.value!==Nt?Promise.resolve():new Promise((v,L)=>{it.add([v,L])})}function xe(v){return pe||(pe=!v,Xe(),it.list().forEach(([L,C])=>v?C(v):L()),it.reset()),v}function mn(v,L,C,M){const{scrollBehavior:ie}=e;if(!Tn||!ie)return Promise.resolve();const ce=!C&&Om(kc(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return lu().then(()=>ie(v,L,ce)).then(z=>z&&Sm(z)).catch(z=>ae(z,v,L))}const yt=v=>r.go(v);let rt;const He=new Set;return{currentRoute:c,addRoute:g,removeRoute:w,hasRoute:R,getRoutes:P,resolve:O,options:e,push:F,replace:W,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:gn.add,isReady:ne,install(v){const L=this;v.component("RouterLink",fv),v.component("RouterView",mv),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>oi(c)}),Tn&&!rt&&c.value===Nt&&(rt=!0,F(r.location).catch(ie=>{}));const C={};for(const ie in Nt)C[ie]=lt(()=>c.value[ie]);v.provide(zr,L),v.provide(zu,Vn(C)),v.provide(lo,c);const M=v.unmount;He.add(v),v.unmount=function(){He.delete(v),He.size<1&&(l=Nt,me&&me(),c.value=Nt,rt=!1,pe=!1),M()}}}}function _n(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function yv(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(l=>Un(l,a))?i.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Un(l,c))||r.push(c))}return[n,i,r]}function $b(){return dt(zr)}const _v=[{name:"Main Layout",path:"/",component:()=>Pt(()=>import("./MainLayout.27ae6344.js"),["assets/MainLayout.27ae6344.js","assets/MainLayout.e726c370.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.d534291e.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Home",path:"",component:()=>Pt(()=>import("./Home.d8312d86.js"),["assets/Home.d8312d86.js","assets/Home.52703996.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Komisariat",path:"komisariat",component:()=>Pt(()=>import("./Komisariat.cd86e883.js"),["assets/Komisariat.cd86e883.js","assets/Komisariat.f9c18b6f.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Kegiatan",path:"kegiatan",component:()=>Pt(()=>import("./Kegiatan.c2e84575.js"),["assets/Kegiatan.c2e84575.js","assets/Kegiatan.6b882dd4.css","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Dashboard Layout",path:"/",component:()=>Pt(()=>import("./DashboardLayout.8aab0ac0.js"),["assets/DashboardLayout.8aab0ac0.js","assets/DashboardLayout.ab2a1f09.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Dashboard",path:"dashboard",component:()=>Pt(()=>import("./Main.c0d34afa.js"),["assets/Main.c0d34afa.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Auth Layout",path:"/",component:()=>Pt(()=>import("./AuthLayout.4f0fec94.js"),["assets/AuthLayout.4f0fec94.js","assets/AuthLayout.8273640a.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.d534291e.css","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Login",path:"login",component:()=>Pt(()=>import("./Login.821a7d2c.js"),[])}]}],rh=vv({routes:_v,history:Dm()});/**
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
 */const sh=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},wv=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(sh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),l!==64){const g=a<<4&240|l>>2;if(i.push(g),h!==64){const w=l<<6&192|h;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Iv=function(e){const t=sh(e);return oh.encodeByteArray(t,!0)},ah=function(e){return Iv(e).replace(/\./g,"")},Ev=function(e){try{return oh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class bv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function ch(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Av(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cv(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lh(){return typeof indexedDB=="object"}function uh(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Sv(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Rv="FirebaseError";class Rt extends Error{constructor(t,n,i){super(n);this.code=t,this.customData=i,this.name=Rv,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?Ov(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Rt(r,a,i)}}function Ov(e,t){return e.replace(kv,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const kv=/\{\$([^}]+)}/g;function Pv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ir(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(Bc(s)&&Bc(o)){if(!Ir(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Bc(e){return e!==null&&typeof e=="object"}/**
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
 */function xi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ni(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function ii(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Nv(e,t){const n=new Dv(e,t);return n.subscribe.bind(n)}class Dv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Lv(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Cs),r.error===void 0&&(r.error=Cs),r.complete===void 0&&(r.complete=Cs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lv(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Cs(){}/**
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
 */const Mv=1e3,xv=2,Uv=4*60*60*1e3,Fv=.5;function Hc(e,t=Mv,n=xv){const i=t*Math.pow(n,e),r=Math.round(Fv*i*(Math.random()-.5)*2);return Math.min(Uv,i+r)}/**
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
 */function Ot(e){return e&&e._delegate?e._delegate:e}/**
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
 */function ri(e,t){return new Promise((n,i)=>{e.onsuccess=r=>{n(r.target.result)},e.onerror=r=>{var s;i(`${t}: ${(s=r.target.error)===null||s===void 0?void 0:s.message}`)}})}class Vc{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new hh(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new fh(this._db.createObjectStore(t,n))}close(){this._db.close()}}class hh{constructor(t){this._transaction=t,this.complete=new Promise((n,i)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(t){return new fh(this._transaction.objectStore(t))}}class fh{constructor(t){this._store=t}index(t){return new Kc(this._store.index(t))}createIndex(t,n,i){return new Kc(this._store.createIndex(t,n,i))}get(t){const n=this._store.get(t);return ri(n,"Error reading from IndexedDB")}put(t,n){const i=this._store.put(t,n);return ri(i,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ri(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ri(t,"Error clearing IndexedDB object store")}}class Kc{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ri(n,"Error reading from IndexedDB")}}function dh(e,t,n){return new Promise((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=o=>{i(new Vc(o.target.result))},s.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Vc(s.result),o.oldVersion,o.newVersion,new hh(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}})}class et{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class jv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new bv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bv(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$v(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $v(e){return e===Yt?void 0:e}function Bv(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const Vv={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Kv=te.INFO,qv={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Wv=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=qv[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xr{constructor(t){this.name=t,this._logLevel=Kv,this._logHandler=Wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}/**
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
 */class zv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Gv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fo="@firebase/app",qc="0.7.20";/**
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
 */const na=new Xr("@firebase/app"),Xv="@firebase/app-compat",Jv="@firebase/analytics-compat",Yv="@firebase/analytics",Qv="@firebase/app-check-compat",Zv="@firebase/app-check",ey="@firebase/auth",ty="@firebase/auth-compat",ny="@firebase/database",iy="@firebase/database-compat",ry="@firebase/functions",sy="@firebase/functions-compat",oy="@firebase/installations",ay="@firebase/installations-compat",cy="@firebase/messaging",ly="@firebase/messaging-compat",uy="@firebase/performance",hy="@firebase/performance-compat",fy="@firebase/remote-config",dy="@firebase/remote-config-compat",py="@firebase/storage",gy="@firebase/storage-compat",my="@firebase/firestore",vy="@firebase/firestore-compat",yy="firebase",_y="9.6.10";/**
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
 */const ph="[DEFAULT]",wy={[fo]:"fire-core",[Xv]:"fire-core-compat",[Yv]:"fire-analytics",[Jv]:"fire-analytics-compat",[Zv]:"fire-app-check",[Qv]:"fire-app-check-compat",[ey]:"fire-auth",[ty]:"fire-auth-compat",[ny]:"fire-rtdb",[iy]:"fire-rtdb-compat",[ry]:"fire-fn",[sy]:"fire-fn-compat",[oy]:"fire-iid",[ay]:"fire-iid-compat",[cy]:"fire-fcm",[ly]:"fire-fcm-compat",[uy]:"fire-perf",[hy]:"fire-perf-compat",[fy]:"fire-rc",[dy]:"fire-rc-compat",[py]:"fire-gcs",[gy]:"fire-gcs-compat",[my]:"fire-fst",[vy]:"fire-fst-compat","fire-js":"fire-js",[yy]:"fire-js-all"};/**
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
 */const Er=new Map,po=new Map;function Iy(e,t){try{e.container.addComponent(t)}catch(n){na.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vt(e){const t=e.name;if(po.has(t))return na.debug(`There were multiple attempts to register component ${t}.`),!1;po.set(t,e);for(const n of Er.values())Iy(n,e);return!0}function Ui(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ey={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},an=new dn("app","Firebase",Ey);/**
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
 */class by{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=_y;function Ty(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:ph,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});const r=Er.get(i);if(r){if(Ir(e,r.options)&&Ir(n,r.config))return r;throw an.create("duplicate-app",{appName:i})}const s=new Hv(i);for(const a of po.values())s.addComponent(a);const o=new by(e,n,s);return Er.set(i,o),o}function gh(e=ph){const t=Er.get(e);if(!t)throw an.create("no-app",{appName:e});return t}function We(e,t,n){var i;let r=(i=wy[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),na.warn(a.join(" "));return}vt(new et(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Ay="firebase-heartbeat-database",Cy=1,Ti="firebase-heartbeat-store";let Ss=null;function mh(){return Ss||(Ss=dh(Ay,Cy,(e,t)=>{switch(t){case 0:e.createObjectStore(Ti)}}).catch(e=>{throw an.create("storage-open",{originalErrorMessage:e.message})})),Ss}async function Sy(e){try{return(await mh()).transaction(Ti).objectStore(Ti).get(vh(e))}catch(t){throw an.create("storage-get",{originalErrorMessage:t.message})}}async function Wc(e,t){try{const i=(await mh()).transaction(Ti,"readwrite");return await i.objectStore(Ti).put(t,vh(e)),i.complete}catch(n){throw an.create("storage-set",{originalErrorMessage:n.message})}}function vh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ry=1024,Oy=30*24*60*60*1e3;class ky{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ny(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Oy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zc(),{heartbeatsToSend:n,unsentEntries:i}=Py(this._heartbeatsCache.heartbeats),r=ah(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zc(){return new Date().toISOString().substring(0,10)}function Py(e,t=Ry){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Gc(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gc(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ny{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lh()?uh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Gc(e){return ah(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Dy(e){vt(new et("platform-logger",t=>new zv(t),"PRIVATE")),vt(new et("heartbeat",t=>new ky(t),"PRIVATE")),We(fo,qc,e),We(fo,qc,"esm2017"),We("fire-js","")}Dy("");/*! *****************************************************************************
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
***************************************************************************** */function ia(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function yh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ly=yh,_h=new dn("auth","Firebase",yh());/**
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
 */const Xc=new Xr("@firebase/auth");function lr(e,...t){Xc.logLevel<=te.ERROR&&Xc.error(`Auth (${Fi}): ${e}`,...t)}/**
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
 */function tt(e,...t){throw ra(e,...t)}function pt(e,...t){return ra(e,...t)}function My(e,t,n){const i=Object.assign(Object.assign({},Ly()),{[t]:n});return new dn("auth","Firebase",i).create(t,{appName:e.name})}function ra(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return _h.create(e,...t)}function j(e,t,...n){if(!e)throw ra(t,...n)}function It(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lr(t),new Error(t)}function At(e,t){e||It(t)}/**
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
 */const Jc=new Map;function Et(e){At(e instanceof Function,"Expected a class definition");let t=Jc.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Jc.set(e,t),t)}/**
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
 */function xy(e,t){const n=Ui(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ir(s,t!=null?t:{}))return r;tt(r,"already-initialized")}return n.initialize({options:t})}function Uy(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Et);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function go(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Fy(){return Yc()==="http:"||Yc()==="https:"}function Yc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function jy(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fy()||ch()||"connection"in navigator)?navigator.onLine:!0}function $y(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=Tv()||Av()}get(){return jy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sa(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class wh{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const By={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Hy=new ji(3e4,6e4);function Jr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $i(e,t,n,i,r={}){return Ih(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=xi(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),wh.fetch()(Eh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ih(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},By),t);try{const r=new Vy(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rs(e,"email-already-in-use",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw My(e,u,l);tt(e,u)}}catch(r){if(r instanceof Rt)throw r;tt(e,"network-request-failed")}}async function Yr(e,t,n,i,r={}){const s=await $i(e,t,n,i,r);return"mfaPendingCredential"in s&&tt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Eh(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?sa(e.config,r):`${e.config.apiScheme}://${r}`}class Vy{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(pt(this.auth,"network-request-failed")),Hy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rs(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=pt(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Ky(e,t){return $i(e,"POST","/v1/accounts:delete",t)}async function qy(e,t){return $i(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function fi(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Wy(e,t=!1){const n=Ot(e),i=await n.getIdToken(t),r=oa(i);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:fi(Os(r.auth_time)),issuedAtTime:fi(Os(r.iat)),expirationTime:fi(Os(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Os(e){return Number(e)*1e3}function oa(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ev(n);return r?JSON.parse(r):(lr("Failed to decode base64 JWT payload"),null)}catch(r){return lr("Caught error parsing JWT payload as JSON",r),null}}function zy(e){const t=oa(e);return j(t,"internal-error"),j(typeof t.exp!="undefined","internal-error"),j(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ai(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Rt&&Gy(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Gy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Xy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function br(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Ai(e,qy(n,{idToken:i}));j(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Qy(s.providerUserInfo):[],a=Yy(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Jy(e){const t=Ot(e);await br(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yy(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Qy(e){return e.map(t=>{var{providerId:n}=t,i=ia(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Zy(e,t){const n=await Ih(e,{},async()=>{const i=xi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=Eh(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken!="undefined","internal-error"),j(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):zy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return j(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Zy(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ci;return i&&(j(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(j(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(j(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Lt(e,t){j(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class on{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=ia(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Wy(this,t)}reload(){return Jy(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new on(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await br(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ai(this,Ky(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:F,isAnonymous:W,providerData:G,stsTokenManager:B}=n;j(N&&B,t,"internal-error");const ee=Ci.fromJSON(this.name,B);j(typeof N=="string",t,"internal-error"),Lt(h,t.name),Lt(d,t.name),j(typeof F=="boolean",t,"internal-error"),j(typeof W=="boolean",t,"internal-error"),Lt(g,t.name),Lt(w,t.name),Lt(P,t.name),Lt(R,t.name),Lt(O,t.name),Lt(E,t.name);const J=new on({uid:N,auth:t,email:d,emailVerified:F,displayName:h,isAnonymous:W,photoURL:w,phoneNumber:g,tenantId:P,stsTokenManager:ee,createdAt:O,lastLoginAt:E});return G&&Array.isArray(G)&&(J.providerData=G.map(de=>Object.assign({},de))),R&&(J._redirectEventId=R),J}static async _fromIdTokenResponse(t,n,i=!1){const r=new Ci;r.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await br(s),s}}/**
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
 */class Th{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Th.type="NONE";const Qc=Th;/**
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
 */function ur(e,t,n){return`firebase:${e}:${t}:${n}`}class Nn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ur(this.userKey,r.apiKey,s),this.fullPersistenceKey=ur("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?on._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Nn(Et(Qc),t,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Et(Qc);const o=ur(i,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=on._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Nn(s,t,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Nn(s,t,i))}}/**
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
 */function Zc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Sh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ah(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Oh(t))return"Blackberry";if(kh(t))return"Webos";if(aa(t))return"Safari";if((t.includes("chrome/")||Ch(t))&&!t.includes("edge/"))return"Chrome";if(Rh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ah(e=Se()){return/firefox\//i.test(e)}function aa(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ch(e=Se()){return/crios\//i.test(e)}function Sh(e=Se()){return/iemobile/i.test(e)}function Rh(e=Se()){return/android/i.test(e)}function Oh(e=Se()){return/blackberry/i.test(e)}function kh(e=Se()){return/webos/i.test(e)}function Qr(e=Se()){return/iphone|ipad|ipod/i.test(e)}function e_(e=Se()){var t;return Qr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function t_(){return Cv()&&document.documentMode===10}function Ph(e=Se()){return Qr(e)||Rh(e)||kh(e)||Oh(e)||/windows phone/i.test(e)||Sh(e)}function n_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Nh(e,t=[]){let n;switch(e){case"Browser":n=Zc(Se());break;case"Worker":n=`${Zc(Se())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${i}`}/**
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
 */class i_{constructor(t,n,i){this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new el(this),this.idTokenSubscription=new el(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Nn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let i=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await br(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$y()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ot(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new dn("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Et(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,i,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Nh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function ca(e){return Ot(e)}class el{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nv(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class la{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,n){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}async function r_(e,t){return $i(e,"POST","/v1/accounts:update",t)}/**
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
 */async function s_(e,t){return Yr(e,"POST","/v1/accounts:signInWithPassword",Jr(e,t))}/**
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
 */async function o_(e,t){return Yr(e,"POST","/v1/accounts:signInWithEmailLink",Jr(e,t))}async function a_(e,t){return Yr(e,"POST","/v1/accounts:signInWithEmailLink",Jr(e,t))}/**
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
 */class Si extends la{constructor(t,n,i,r=null){super("password",i);this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Si(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Si(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return s_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return o_(t,{email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return r_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return a_(t,{idToken:n,email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Dn(e,t){return Yr(e,"POST","/v1/accounts:signInWithIdp",Jr(e,t))}/**
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
 */const c_="http://localhost";class cn extends la{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=ia(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new cn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Dn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:c_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xi(n)}return t}}/**
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
 */function l_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function u_(e){const t=ni(ii(e)).link,n=t?ni(ii(t)).deep_link_id:null,i=ni(ii(e)).deep_link_id;return(i?ni(ii(i)).link:null)||i||n||t||e}class ua{constructor(t){var n,i,r,s,o,a;const c=ni(ii(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=l_((r=c.mode)!==null&&r!==void 0?r:null);j(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=u_(t);try{return new ua(n)}catch{return null}}}/**
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
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(t,n){return Si._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=ua.parseLink(n);return j(i,"argument-error"),Si._fromEmailAndCode(t,i.code,i.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends Dh{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ft extends Bi{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
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
 */class jt extends Bi{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return jt.credential(n,i)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
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
 */class $t extends Bi{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class Bt extends Bi{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Bt.credential(n,i)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await on._fromIdTokenResponse(t,i,r),o=tl(i);return new jn({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=tl(i);return new jn({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function tl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Tr extends Rt{constructor(t,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new Tr(t,n,i,r)}}function Lh(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(e,s,t,i):s})}async function h_(e,t,n=!1){const i=await Ai(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jn._forOperation(e,"link",i)}/**
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
 */async function f_(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Ai(e,Lh(i,r,t,e),n);j(s.idToken,i,"internal-error");const o=oa(s.idToken);j(o,i,"internal-error");const{sub:a}=o;return j(e.uid===a,i,"user-mismatch"),jn._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tt(i,"user-mismatch"),s}}/**
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
 */async function Mh(e,t,n=!1){const i="signIn",r=await Lh(e,i,t),s=await jn._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function d_(e,t){return Mh(ca(e),t)}function Bb(e,t,n){return d_(Ot(e),qn.credential(t,n))}/**
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
 */function Hb(e,t){return Ot(e).setPersistence(t)}function p_(e,t,n,i){return Ot(e).onAuthStateChanged(t,n,i)}function Vb(e){return Ot(e).signOut()}const Ar="__sak";/**
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
 */class xh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function g_(){const e=Se();return aa(e)||Qr(e)}const m_=1e3,v_=10;class Uh extends xh{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=g_()&&n_(),this.fallbackToPolling=Ph(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);t_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,v_):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},m_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Uh.type="LOCAL";const y_=Uh;/**
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
 */class Fh extends xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fh.type="SESSION";const jh=Fh;/**
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
 */function __(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new Zr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await __(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
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
 */function ha(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class w_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ha("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function I_(e){gt().location.href=e}/**
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
 */function $h(){return typeof gt().WorkerGlobalScope!="undefined"&&typeof gt().importScripts=="function"}async function E_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function T_(){return $h()?self:null}/**
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
 */const Bh="firebaseLocalStorageDb",A_=1,Cr="firebaseLocalStorage",Hh="fbase_key";class Hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function es(e,t){return e.transaction([Cr],t?"readwrite":"readonly").objectStore(Cr)}function C_(){const e=indexedDB.deleteDatabase(Bh);return new Hi(e).toPromise()}function mo(){const e=indexedDB.open(Bh,A_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Cr,{keyPath:Hh})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Cr)?t(i):(i.close(),await C_(),t(await mo()))})})}async function nl(e,t,n){const i=es(e,!0).put({[Hh]:t,value:n});return new Hi(i).toPromise()}async function S_(e,t){const n=es(e,!1).get(t),i=await new Hi(n).toPromise();return i===void 0?null:i.value}function il(e,t){const n=es(e,!0).delete(t);return new Hi(n).toPromise()}const R_=800,O_=3;class Vh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>O_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(T_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await E_(),!this.activeServiceWorker)return;this.sender=new w_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((t=i[0])===null||t===void 0?void 0:t.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||b_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mo();return await nl(t,Ar,"1"),await il(t,Ar),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nl(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>S_(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>il(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=es(r,!1).getAll();return new Hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vh.type="LOCAL";const k_=Vh;/**
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
 */function P_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function N_(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=pt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",P_().appendChild(i)})}function D_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ji(3e4,6e4);/**
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
 */function L_(e,t){return t?Et(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class fa extends la{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function M_(e){return Mh(e.auth,new fa(e),e.bypassAuthState)}function x_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),f_(n,new fa(e),e.bypassAuthState)}async function U_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),h_(n,new fa(e),e.bypassAuthState)}/**
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
 */class Kh{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return M_;case"linkViaPopup":case"linkViaRedirect":return U_;case"reauthViaPopup":case"reauthViaRedirect":return x_;default:tt(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const F_=new ji(2e3,1e4);class An extends Kh{constructor(t,n,i,r,s){super(t,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,F_.get())};t()}}An.currentPopupAction=null;/**
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
 */const j_="pendingRedirect",ks=new Map;class $_ extends Kh{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let t=ks.get(this.auth._key());if(!t){try{const i=await B_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}ks.set(this.auth._key(),t)}return this.bypassAuthState||ks.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(e,t){const n=V_(t),i=H_(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function H_(e){return Et(e._redirectPersistence)}function V_(e){return ur(j_,e.config.apiKey,e.name)}async function K_(e,t,n=!1){const i=ca(e),r=L_(i,t),o=await new $_(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const q_=10*60*1e3;class W_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!qh(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=q_&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(t))}saveEventToCache(t){this.cachedEventUids.add(rl(t)),this.lastProcessedEventTime=Date.now()}}function rl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function qh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function z_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qh(e);default:return!1}}/**
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
 */async function G_(e,t={}){return $i(e,"GET","/v1/projects",t)}/**
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
 */const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J_=/^https?/;async function Y_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await G_(e);for(const n of t)try{if(Q_(n))return}catch{}tt(e,"unauthorized-domain")}function Q_(e){const t=go(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!J_.test(n))return!1;if(X_.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Z_=new ji(3e4,6e4);function sl(){const e=gt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ew(e){return new Promise((t,n)=>{var i,r,s;function o(){sl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{sl(),n(pt(e,"network-request-failed"))},timeout:Z_.get()})}if(!((r=(i=gt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=gt().gapi)===null||s===void 0)&&s.load)o();else{const a=D_("iframefcb");return gt()[a]=()=>{gapi.load?o():n(pt(e,"network-request-failed"))},N_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw hr=null,t})}let hr=null;function tw(e){return hr=hr||ew(e),hr}/**
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
 */const nw=new ji(5e3,15e3),iw="__/auth/iframe",rw="emulator/auth/iframe",sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aw(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?sa(t,rw):`https://${e.config.authDomain}/${iw}`,i={apiKey:t.apiKey,appName:e.name,v:Fi},r=ow.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${xi(i).slice(1)}`}async function cw(e){const t=await tw(e),n=gt().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:aw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sw,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=pt(e,"network-request-failed"),a=gt().setTimeout(()=>{s(o)},nw.get());function c(){gt().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uw=500,hw=600,fw="_blank",dw="http://localhost";class ol{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pw(e,t,n,i=uw,r=hw){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lw),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Se().toLowerCase();n&&(a=Ch(l)?fw:n),Ah(l)&&(t=t||dw,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(e_(l)&&a!=="_self")return gw(t||"",a),new ol(null);const h=window.open(t||"",a,u);j(h,e,"popup-blocked");try{h.focus()}catch{}return new ol(h)}function gw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const mw="__/auth/handler",vw="emulator/auth/handler";function al(e,t,n,i,r,s){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Fi,eventId:r};if(t instanceof Dh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Pv(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(t instanceof Bi){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${yw(e)}?${xi(a).slice(1)}`}function yw({config:e}){return e.emulator?sa(e,vw):`https://${e.authDomain}/${mw}`}/**
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
 */const Ps="webStorageSupport";class _w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jh,this._completeRedirectFn=K_}async _openPopup(t,n,i,r){var s;At((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=al(t,n,i,go(),r);return pw(t,o,ha())}async _openRedirect(t,n,i,r){return await this._originValidation(t),I_(al(t,n,i,go(),r)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(At(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await cw(t),i=new W_(t);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ps,{type:Ps},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ps];o!==void 0&&n(!!o),tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ph()||aa()||Qr()}}const ww=_w;var cl="@firebase/auth",ll="0.19.11";/**
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
 */class Iw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{var r;t(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ew(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bw(e){vt(new et("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nh(e)},u=new i_(a,c,l);return Uy(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),vt(new et("auth-internal",t=>{const n=ca(t.getProvider("auth").getImmediate());return(i=>new Iw(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(cl,ll,Ew(e)),We(cl,ll,"esm2017")}/**
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
 */function Tw(e=gh()){const t=Ui(e,"auth");return t.isInitialized()?t.getImmediate():xy(e,{popupRedirectResolver:ww,persistence:[k_,y_,jh]})}bw("Browser");/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Wh="store";function Aw(e){return e===void 0&&(e=null),dt(e!==null?e:Wh)}function Wn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function Cw(e){return e!==null&&typeof e=="object"}function Sw(e){return e&&typeof e.then=="function"}function Rw(e,t){return function(){return e(t)}}function zh(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}function Gh(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ts(e,n,[],e._modules.root,!0),da(e,n,t)}function da(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,s={};Wn(r,function(o,a){s[a]=Rw(o,e),Object.defineProperty(e.getters,a,{get:function(){return s[a]()},enumerable:!0})}),e._state=Vn({data:t}),e.strict&&Dw(e),i&&n&&e._withCommit(function(){i.data=null})}function ts(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=pa(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=i.state})}var l=i.context=Ow(e,o,n);i.forEachMutation(function(u,h){var d=o+h;kw(e,d,u,l)}),i.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;Pw(e,d,g,l)}),i.forEachGetter(function(u,h){var d=o+h;Nw(e,d,u,l)}),i.forEachChild(function(u,h){ts(e,t,n.concat(h),u,r)})}function Ow(e,t,n){var i=t==="",r={dispatch:i?e.dispatch:function(s,o,a){var c=Sr(s,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=t+h),e.dispatch(h,l)},commit:i?e.commit:function(s,o,a){var c=Sr(s,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=t+h),e.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return Xh(e,t)}},state:{get:function(){return pa(e.state,n)}}}),r}function Xh(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach(function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function kw(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push(function(o){n.call(e,i.state,o)})}function Pw(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push(function(o){var a=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},o);return Sw(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function Nw(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function Dw(e){Pn(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function pa(e,t){return t.reduce(function(n,i){return n[i]},e)}function Sr(e,t,n){return Cw(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Lw="vuex bindings",ul="vuex:mutations",Ns="vuex:actions",wn="vuex",Mw=0;function xw(e,t){pm({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Lw]},function(n){n.addTimelineLayer({id:ul,label:"Vuex Mutations",color:hl}),n.addTimelineLayer({id:Ns,label:"Vuex Actions",color:hl}),n.addInspector({id:wn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===e&&i.inspectorId===wn)if(i.filter){var r=[];Zh(r,t._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Qh(t._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===e&&i.inspectorId===wn){var r=i.nodeId;Xh(t,r),i.state=jw(Bw(t._modules,r),r==="root"?t.getters:t._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===e&&i.inspectorId===wn){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit(function(){i.set(t._state.data,s,i.state.value)})}}),t.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(wn),n.sendInspectorState(wn),n.addTimelineEvent({layerId:ul,event:{time:Date.now(),title:i.type,data:s}})}),t.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=Mw++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:Ns,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:Ns,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var hl=8702998,Uw=6710886,Fw=16777215,Jh={label:"namespaced",textColor:Fw,backgroundColor:Uw};function Yh(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Qh(e,t){return{id:t||"root",label:Yh(t),tags:e.namespaced?[Jh]:[],children:Object.keys(e._children).map(function(n){return Qh(e._children[n],t+n+"/")})}}function Zh(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[Jh]:[]}),Object.keys(t._children).forEach(function(r){Zh(e,t._children[r],n,i+r+"/")})}function jw(e,t,n){t=n==="root"?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(i.length){var s=$w(t);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Yh(o):o,editable:!1,value:vo(function(){return s[o]})}})}return r}function $w(e){var t={};return Object.keys(e).forEach(function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=vo(function(){return e[n]})}else t[n]=vo(function(){return e[n]})}),t}function Bw(e,t){var n=t.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return s===n.length-1?o:o._children},t==="root"?e:e.root._children)}function vo(e){try{return e()}catch(t){return t}}var nt=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=(typeof i=="function"?i():i)||{}},ef={namespaced:{configurable:!0}};ef.namespaced.get=function(){return!!this._rawModule.namespaced};nt.prototype.addChild=function(t,n){this._children[t]=n};nt.prototype.removeChild=function(t){delete this._children[t]};nt.prototype.getChild=function(t){return this._children[t]};nt.prototype.hasChild=function(t){return t in this._children};nt.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};nt.prototype.forEachChild=function(t){Wn(this._children,t)};nt.prototype.forEachGetter=function(t){this._rawModule.getters&&Wn(this._rawModule.getters,t)};nt.prototype.forEachAction=function(t){this._rawModule.actions&&Wn(this._rawModule.actions,t)};nt.prototype.forEachMutation=function(t){this._rawModule.mutations&&Wn(this._rawModule.mutations,t)};Object.defineProperties(nt.prototype,ef);var pn=function(t){this.register([],t,!1)};pn.prototype.get=function(t){return t.reduce(function(n,i){return n.getChild(i)},this.root)};pn.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};pn.prototype.update=function(t){tf([],this.root,t)};pn.prototype.register=function(t,n,i){var r=this;i===void 0&&(i=!0);var s=new nt(n,i);if(t.length===0)this.root=s;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],s)}n.modules&&Wn(n.modules,function(a,c){r.register(t.concat(c),a,i)})};pn.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),i=t[t.length-1],r=n.getChild(i);!r||!r.runtime||n.removeChild(i)};pn.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),i=t[t.length-1];return n?n.hasChild(i):!1};function tf(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return;tf(e.concat(i),t.getChild(i),n.modules[i])}}function Hw(e){return new Me(e)}var Me=function(t){var n=this;t===void 0&&(t={});var i=t.plugins;i===void 0&&(i=[]);var r=t.strict;r===void 0&&(r=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new pn(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,w){return l.call(o,d,g,w)},this.strict=r;var u=this._modules.root.state;ts(this,u,[],this._modules.root),da(this,u),i.forEach(function(h){return h(n)})},ga={state:{configurable:!0}};Me.prototype.install=function(t,n){t.provide(n||Wh,this),t.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&xw(t,this)};ga.state.get=function(){return this._state.data};ga.state.set=function(e){};Me.prototype.commit=function(t,n,i){var r=this,s=Sr(t,n,i),o=s.type,a=s.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};Me.prototype.dispatch=function(t,n){var i=this,r=Sr(t,n),s=r.type,o=r.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{i._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,i.state)})}catch{}u(d)},function(d){try{i._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,i.state,d)})}catch{}h(d)})})}};Me.prototype.subscribe=function(t,n){return zh(t,this._subscribers,n)};Me.prototype.subscribeAction=function(t,n){var i=typeof t=="function"?{before:t}:t;return zh(i,this._actionSubscribers,n)};Me.prototype.watch=function(t,n,i){var r=this;return Pn(function(){return t(r.state,r.getters)},n,Object.assign({},i))};Me.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Me.prototype.registerModule=function(t,n,i){i===void 0&&(i={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),ts(this,this.state,t,this._modules.get(t),i.preserveState),da(this,this.state)};Me.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var i=pa(n.state,t.slice(0,-1));delete i[t[t.length-1]]}),Gh(this)};Me.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Me.prototype.hotUpdate=function(t){this._modules.update(t),Gh(this,!0)};Me.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Me.prototype,ga);const Vw={setup(e){const t=Aw(),n=Tw();return localStorage.getItem("to")&&(rh.push({path:localStorage.getItem("to")}),localStorage.removeItem("to")),p_(n,i=>{t.commit("updateUser",i)}),navigator.onLine?console.log(navigator.onLine):(console.log(navigator.onLine),alert("Koneksi terputus")),(i,r)=>{const s=pg("router-view");return Qo(),Fu(s)}}};var Kw="firebase",qw="9.6.10";/**
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
 */We(Kw,qw,"app");const nf="@firebase/installations",ma="0.5.7";/**
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
 */const rf=1e4,sf=`w:${ma}`,of="FIS_v2",Ww="https://firebaseinstallations.googleapis.com/v1",zw=60*60*1e3,Gw="installations",Xw="Installations";/**
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
 */const Jw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ln=new dn(Gw,Xw,Jw);function af(e){return e instanceof Rt&&e.code.includes("request-failed")}/**
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
 */function cf({projectId:e}){return`${Ww}/projects/${e}/installations`}function lf(e){return{token:e.token,requestStatus:2,expiresIn:Qw(e.expiresIn),creationTime:Date.now()}}async function uf(e,t){const i=(await t.json()).error;return ln.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function hf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Yw(e,{refreshToken:t}){const n=hf(e);return n.append("Authorization",Zw(t)),n}async function ff(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qw(e){return Number(e.replace("s","000"))}function Zw(e){return`${of} ${e}`}/**
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
 */async function eI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=cf(e),r=hf(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:of,appId:e.appId,sdkVersion:sf},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await ff(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:lf(l.authToken)}}else throw await uf("Create Installation",c)}/**
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
 */function df(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nI=/^[cdef][\w-]{21}$/,yo="";function iI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=rI(e);return nI.test(n)?n:yo}catch{return yo}}function rI(e){return tI(e).substr(0,22)}/**
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
 */function ns(e){return`${e.appName}!${e.appId}`}/**
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
 */const pf=new Map;function gf(e,t){const n=ns(e);mf(n,t),sI(n,t)}function mf(e,t){const n=pf.get(e);if(!!n)for(const i of n)i(t)}function sI(e,t){const n=oI();n&&n.postMessage({key:e,fid:t}),aI()}let en=null;function oI(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=e=>{mf(e.data.key,e.data.fid)}),en}function aI(){pf.size===0&&en&&(en.close(),en=null)}/**
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
 */const cI="firebase-installations-database",lI=1,un="firebase-installations-store";let Ds=null;function va(){return Ds||(Ds=dh(cI,lI,(e,t)=>{switch(t){case 0:e.createObjectStore(un)}})),Ds}async function Rr(e,t){const n=ns(e),r=(await va()).transaction(un,"readwrite"),s=r.objectStore(un),o=await s.get(n);return await s.put(t,n),await r.complete,(!o||o.fid!==t.fid)&&gf(e,t.fid),t}async function vf(e){const t=ns(e),i=(await va()).transaction(un,"readwrite");await i.objectStore(un).delete(t),await i.complete}async function is(e,t){const n=ns(e),r=(await va()).transaction(un,"readwrite"),s=r.objectStore(un),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.complete,a&&(!o||o.fid!==a.fid)&&gf(e,a.fid),a}/**
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
 */async function ya(e){let t;const n=await is(e.appConfig,i=>{const r=uI(i),s=hI(e,r);return t=s.registrationPromise,s.installationEntry});return n.fid===yo?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function uI(e){const t=e||{fid:iI(),registrationStatus:0};return yf(t)}function hI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ln.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=fI(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:dI(e)}:{installationEntry:t}}async function fI(e,t){try{const n=await eI(e,t);return Rr(e.appConfig,n)}catch(n){throw af(n)&&n.customData.serverCode===409?await vf(e.appConfig):await Rr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function dI(e){let t=await fl(e.appConfig);for(;t.registrationStatus===1;)await df(100),t=await fl(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await ya(e);return i||n}return t}function fl(e){return is(e,t=>{if(!t)throw ln.create("installation-not-found");return yf(t)})}function yf(e){return pI(e)?{fid:e.fid,registrationStatus:0}:e}function pI(e){return e.registrationStatus===1&&e.registrationTime+rf<Date.now()}/**
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
 */async function gI({appConfig:e,heartbeatServiceProvider:t},n){const i=mI(e,n),r=Yw(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:sf,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await ff(()=>fetch(i,a));if(c.ok){const l=await c.json();return lf(l)}else throw await uf("Generate Auth Token",c)}function mI(e,{fid:t}){return`${cf(e)}/${t}/authTokens:generate`}/**
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
 */async function _a(e,t=!1){let n;const i=await is(e.appConfig,s=>{if(!_f(s))throw ln.create("not-registered");const o=s.authToken;if(!t&&_I(o))return s;if(o.requestStatus===1)return n=vI(e,t),s;{if(!navigator.onLine)throw ln.create("app-offline");const a=II(s);return n=yI(e,a),a}});return n?await n:i.authToken}async function vI(e,t){let n=await dl(e.appConfig);for(;n.authToken.requestStatus===1;)await df(100),n=await dl(e.appConfig);const i=n.authToken;return i.requestStatus===0?_a(e,t):i}function dl(e){return is(e,t=>{if(!_f(t))throw ln.create("not-registered");const n=t.authToken;return EI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function yI(e,t){try{const n=await gI(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Rr(e.appConfig,i),n}catch(n){if(af(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vf(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rr(e.appConfig,i)}throw n}}function _f(e){return e!==void 0&&e.registrationStatus===2}function _I(e){return e.requestStatus===2&&!wI(e)}function wI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zw}function II(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function EI(e){return e.requestStatus===1&&e.requestTime+rf<Date.now()}/**
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
 */async function bI(e){const t=e,{installationEntry:n,registrationPromise:i}=await ya(t);return i?i.catch(console.error):_a(t).catch(console.error),n.fid}/**
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
 */async function TI(e,t=!1){const n=e;return await AI(n),(await _a(n,t)).token}async function AI(e){const{registrationPromise:t}=await ya(e);t&&await t}/**
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
 */function CI(e){if(!e||!e.options)throw Ls("App Configuration");if(!e.name)throw Ls("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ls(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ls(e){return ln.create("missing-app-config-values",{valueName:e})}/**
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
 */const wf="installations",SI="installations-internal",RI=e=>{const t=e.getProvider("app").getImmediate(),n=CI(t),i=Ui(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},OI=e=>{const t=e.getProvider("app").getImmediate(),n=Ui(t,wf).getImmediate();return{getId:()=>bI(n),getToken:r=>TI(n,r)}};function kI(){vt(new et(wf,RI,"PUBLIC")),vt(new et(SI,OI,"PRIVATE"))}kI();We(nf,ma);We(nf,ma,"esm2017");/**
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
 */const pl="analytics",PI="firebase_id",NI="origin",DI=60*1e3,LI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",If="https://www.googletagmanager.com/gtag/js";/**
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
 */const $e=new Xr("@firebase/analytics");/**
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
 */function Ef(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function MI(e,t){const n=document.createElement("script");n.src=`${If}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function xI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function UI(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const c=(await Ef(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(a){$e.error(a)}e("config",r,s)}async function FI(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Ef(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){$e.error(s)}}function jI(e,t,n,i){async function r(s,o,a){try{s==="event"?await FI(e,t,n,o,a):s==="config"?await UI(e,t,n,i,o,a):e("set",o)}catch(c){$e.error(c)}}return r}function $I(e,t,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=jI(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function BI(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(If))return t;return null}/**
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
 */const HI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ze=new dn("analytics","Analytics",HI);/**
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
 */const VI=30,KI=1e3;class qI{constructor(t={},n=KI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bf=new qI;function WI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function zI(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:WI(i)},s=LI.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function GI(e,t=bf,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Ze.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Ze.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YI;return setTimeout(async()=>{a.abort()},n!==void 0?n:DI),Tf({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Tf(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=bf){const{appId:s,measurementId:o}=e;try{await XI(i,t)}catch(a){if(o)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const a=await zI(e);return r.deleteThrottleMetadata(s),a}catch(a){if(!JI(a)){if(r.deleteThrottleMetadata(s),o)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?Hc(n,r.intervalMillis,VI):Hc(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(s,l),$e.debug(`Calling attemptFetch again in ${c} millis`),Tf(e,l,i,r)}}function XI(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),i(Ze.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function JI(e){if(!(e instanceof Rt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class YI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */async function QI(){if(lh())try{await uh()}catch(e){return $e.warn(Ze.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return $e.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZI(e,t,n,i,r,s,o){var a;const c=GI(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>$e.error(g)),t.push(c);const l=QI().then(g=>{if(g)return i.getId()}),[u,h]=await Promise.all([c,l]);BI()||MI(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[NI]="firebase",d.update=!0,h!=null&&(d[PI]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class eE{constructor(t){this.app=t}_delete(){return delete di[this.app.options.appId],Promise.resolve()}}let di={},gl=[];const ml={};let Ms="dataLayer",tE="gtag",vl,Af,yl=!1;function nE(){const e=[];if(ch()&&e.push("This is a browser extension environment."),Sv()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Ze.create("invalid-analytics-context",{errorInfo:t});$e.warn(n.message)}}function iE(e,t,n){nE();const i=e.options.appId;if(!i)throw Ze.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(di[i]!=null)throw Ze.create("already-exists",{id:i});if(!yl){xI(Ms);const{wrappedGtag:s,gtagCore:o}=$I(di,gl,ml,Ms,tE);Af=s,vl=o,yl=!0}return di[i]=ZI(e,gl,ml,t,vl,Ms,n),new eE(e)}/**
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
 */async function rE(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}else{const s=await t,o=Object.assign(Object.assign({},i),{send_to:s});e("event",n,o)}}function sE(e,t,n,i){e=Ot(e),rE(Af,di[e.app.options.appId],t,n,i).catch(r=>$e.error(r))}const _l="@firebase/analytics",wl="0.7.7";function oE(){vt(new et(pl,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return iE(i,r,n)},"PUBLIC")),vt(new et("analytics-internal",e,"PRIVATE")),We(_l,wl),We(_l,wl,"esm2017");function e(t){try{const n=t.getProvider(pl).getImmediate();return{logEvent:(i,r,s)=>sE(n,i,r,s)}}catch(n){throw Ze.create("interop-component-reg-failed",{reason:n})}}}oE();var aE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k,wa=wa||{},$=aE||self;function Or(){}function _o(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function cE(e){return Object.prototype.hasOwnProperty.call(e,xs)&&e[xs]||(e[xs]=++lE)}var xs="closure_uid_"+(1e9*Math.random()>>>0),lE=0;function uE(e,t,n){return e.call.apply(e.bind,arguments)}function hE(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Ie(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ie=uE:Ie=hE,Ie.apply(null,arguments)}function tr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Te(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(i,o)}}function Wt(){this.s=this.s,this.o=this.o}var fE=0,dE={};Wt.prototype.s=!1;Wt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),fE!=0)){var e=cE(this);delete dE[e]}};Wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cf=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Sf=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r=typeof e=="string"?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function pE(e){e:{var t=sb;const n=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Il(e){return Array.prototype.concat.apply([],arguments)}function Ia(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function kr(e){return/^[\s\xa0]*$/.test(e)}var El=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Oe(e,t){return e.indexOf(t)!=-1}function Us(e,t){return e<t?-1:e>t?1:0}var ke;e:{var bl=$.navigator;if(bl){var Tl=bl.userAgent;if(Tl){ke=Tl;break e}}ke=""}function Ea(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Rf(e){const t={};for(const n in e)t[n]=e[n];return t}var Al="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Of(e,t){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)e[n]=i[n];for(let s=0;s<Al.length;s++)n=Al[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function ba(e){return ba[" "](e),e}ba[" "]=Or;function gE(e){var t=yE;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var mE=Oe(ke,"Opera"),Ri=Oe(ke,"Trident")||Oe(ke,"MSIE"),kf=Oe(ke,"Edge"),wo=kf||Ri,Pf=Oe(ke,"Gecko")&&!(Oe(ke.toLowerCase(),"webkit")&&!Oe(ke,"Edge"))&&!(Oe(ke,"Trident")||Oe(ke,"MSIE"))&&!Oe(ke,"Edge"),vE=Oe(ke.toLowerCase(),"webkit")&&!Oe(ke,"Edge");function Nf(){var e=$.document;return e?e.documentMode:void 0}var Io;e:{var Fs="",js=function(){var e=ke;if(Pf)return/rv:([^\);]+)(\)|;)/.exec(e);if(kf)return/Edge\/([\d\.]+)/.exec(e);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(vE)return/WebKit\/(\S+)/.exec(e);if(mE)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(js&&(Fs=js?js[1]:""),Ri){var $s=Nf();if($s!=null&&$s>parseFloat(Fs)){Io=String($s);break e}}Io=Fs}var yE={};function _E(){return gE(function(){let e=0;const t=El(String(Io)).split("."),n=El("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;e=Us(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Us(r[2].length==0,s[2].length==0)||Us(r[2],s[2]),r=r[3],s=s[3]}while(e==0)}return 0<=e})}$.document&&Ri&&Nf();var wE=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$.addEventListener("test",Or,t),$.removeEventListener("test",Or,t)}catch{}return e}();function Ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};function Oi(e,t){if(Ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Pf){e:{try{ba(t.nodeName);var r=!0;break e}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:IE[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Oi.Z.h.call(this)}}Te(Oi,Ae);var IE={2:"touch",3:"pen",4:"mouse"};Oi.prototype.h=function(){Oi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),EE=0;function bE(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++EE,this.ca=this.fa=!1}function rs(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ss(e){this.src=e,this.g={},this.h=0}ss.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=bo(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new bE(t,this.src,s,!!i,r),t.fa=n,e.push(t)),t};function Eo(e,t){var n=t.type;if(n in e.g){var i=e.g[n],r=Cf(i,t),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(rs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bo(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}var Ta="closure_lm_"+(1e6*Math.random()|0),Bs={};function Df(e,t,n,i,r){if(i&&i.once)return Mf(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Df(e,t[s],n,i,r);return null}return n=Sa(n),e&&e[Ki]?e.N(t,n,Vi(i)?!!i.capture:!!i,r):Lf(e,t,n,!1,i,r)}function Lf(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=Vi(r)?!!r.capture:!!r,a=Ca(e);if(a||(e[Ta]=a=new ss(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=TE(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)wE||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(Uf(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function TE(){function e(n){return t.call(e.src,e.listener,n)}var t=AE;return e}function Mf(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Mf(e,t[s],n,i,r);return null}return n=Sa(n),e&&e[Ki]?e.O(t,n,Vi(i)?!!i.capture:!!i,r):Lf(e,t,n,!0,i,r)}function xf(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)xf(e,t[s],n,i,r);else i=Vi(i)?!!i.capture:!!i,n=Sa(n),e&&e[Ki]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=bo(s,n,i,r),-1<n&&(rs(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ca(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bo(t,n,i,r)),(n=-1<e?t[e]:null)&&Aa(n))}function Aa(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ki])Eo(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Uf(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ca(t))?(Eo(n,e),n.h==0&&(n.src=null,t[Ta]=null)):rs(e)}}}function Uf(e){return e in Bs?Bs[e]:Bs[e]="on"+e}function AE(e,t){if(e.ca)e=!0;else{t=new Oi(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&Aa(e),e=n.call(i,t)}return e}function Ca(e){return e=e[Ta],e instanceof ss?e:null}var Hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sa(e){return typeof e=="function"?e:(e[Hs]||(e[Hs]=function(t){return e.handleEvent(t)}),e[Hs])}function _e(){Wt.call(this),this.i=new ss(this),this.P=this,this.I=null}Te(_e,Wt);_e.prototype[Ki]=!0;_e.prototype.removeEventListener=function(e,t,n,i){xf(this,e,t,n,i)};function Ee(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new Ae(t,e);else if(t instanceof Ae)t.target=t.target||e;else{var r=t;t=new Ae(i,e),Of(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=nr(o,i,!0,t)&&r}if(o=t.g=e,r=nr(o,i,!0,t)&&r,r=nr(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=nr(o,i,!1,t)&&r}_e.prototype.M=function(){if(_e.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rs(n[i]);delete e.g[t],e.h--}}this.I=null};_e.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};_e.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function nr(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Eo(e.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Ra=$.JSON.stringify;function CE(){var e=jf;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class SE{constructor(){this.h=this.g=null}add(t,n){const i=Ff.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ff=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new RE,e=>e.reset());class RE{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OE(e){$.setTimeout(()=>{throw e},0)}function Oa(e,t){To||kE(),Ao||(To(),Ao=!0),jf.add(e,t)}var To;function kE(){var e=$.Promise.resolve(void 0);To=function(){e.then(PE)}}var Ao=!1,jf=new SE;function PE(){for(var e;e=CE();){try{e.h.call(e.g)}catch(n){OE(n)}var t=Ff;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ao=!1}function os(e,t){_e.call(this),this.h=e||1,this.g=t||$,this.j=Ie(this.kb,this),this.l=Date.now()}Te(os,_e);k=os.prototype;k.da=!1;k.S=null;k.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ee(this,"tick"),this.da&&(ka(this),this.start()))}};k.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ka(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}k.M=function(){os.Z.M.call(this),ka(this),delete this.g};function Pa(e,t,n){if(typeof e=="function")n&&(e=Ie(e,n));else if(e&&typeof e.handleEvent=="function")e=Ie(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:$.setTimeout(e,t||0)}function $f(e){e.g=Pa(()=>{e.g=null,e.i&&(e.i=!1,$f(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class NE extends Wt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$f(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(e){Wt.call(this),this.h=e,this.g={}}Te(ki,Wt);var Cl=[];function Bf(e,t,n,i){Array.isArray(n)||(n&&(Cl[0]=n.toString()),n=Cl);for(var r=0;r<n.length;r++){var s=Df(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Hf(e){Ea(e.g,function(t,n){this.g.hasOwnProperty(n)&&Aa(t)},e),e.g={}}ki.prototype.M=function(){ki.Z.M.call(this),Hf(this)};ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function as(){this.g=!0}as.prototype.Aa=function(){this.g=!1};function DE(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function LE(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+`
`+n+`
`+s+" "+o})}function Cn(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+xE(e,n)+(i?" "+i:"")})}function ME(e,t){e.info(function(){return"TIMEOUT: "+t})}as.prototype.info=function(){};function xE(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ra(n)}catch{return t}}var zn={},Sl=null;function Na(){return Sl=Sl||new _e}zn.Ma="serverreachability";function Vf(e){Ae.call(this,zn.Ma,e)}Te(Vf,Ae);function Pi(e){const t=Na();Ee(t,new Vf(t,e))}zn.STAT_EVENT="statevent";function Kf(e,t){Ae.call(this,zn.STAT_EVENT,e),this.stat=t}Te(Kf,Ae);function Ne(e){const t=Na();Ee(t,new Kf(t,e))}zn.Na="timingevent";function qf(e,t){Ae.call(this,zn.Na,e),this.size=t}Te(qf,Ae);function qi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){e()},t)}var Da={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},UE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function La(){}La.prototype.h=null;function Rl(e){return e.h||(e.h=e.i())}var cs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ma(){Ae.call(this,"d")}Te(Ma,Ae);function xa(){Ae.call(this,"c")}Te(xa,Ae);var Co;function ls(){}Te(ls,La);ls.prototype.g=function(){return new XMLHttpRequest};ls.prototype.i=function(){return{}};Co=new ls;function Wi(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new ki(this),this.P=FE,e=wo?125:void 0,this.W=new os(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wf}function Wf(){this.i=null,this.g="",this.h=!1}var FE=45e3,So={},Pr={};k=Wi.prototype;k.setTimeout=function(e){this.P=e};function Ro(e,t,n){e.K=1,e.v=hs(Ct(t)),e.s=n,e.U=!0,zf(e,null)}function zf(e,t){e.F=Date.now(),zi(e),e.A=Ct(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),ed(n.h,"t",i),e.C=0,n=e.l.H,e.h=new Wf,e.g=wd(e.l,n?t:null,!e.s),0<e.O&&(e.L=new NE(Ie(e.Ia,e,e.g),e.O)),Bf(e.V,e.g,"readystatechange",e.gb),t=e.H?Rf(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Pi(1),DE(e.j,e.u,e.A,e.m,e.X,e.s)}k.gb=function(e){e=e.target;const t=this.L;t&&bt(e)==3?t.l():this.Ia(e)};k.Ia=function(e){try{if(e==this.g)e:{const u=bt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||wo||this.g&&(this.h.h||this.g.ga()||Nl(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?Pi(3):Pi(2)),us(this);var n=this.g.ba();this.N=n;t:if(Gf(this)){var i=Nl(this.g);e="";var r=i.length,s=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){tn(this),pi(this);var o="";break t}this.h.i=new $.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,LE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kr(a)){var l=a;break t}}l=null}if(n=l)Cn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Oo(this,n);else{this.i=!1,this.o=3,Ne(12),tn(this),pi(this);break e}}this.U?(Xf(this,u,o),wo&&this.i&&u==3&&(Bf(this.V,this.W,"tick",this.fb),this.W.start())):(Cn(this.j,this.m,o,null),Oo(this,o)),u==4&&tn(this),this.i&&!this.I&&(u==4?md(this.l,this):(this.i=!1,zi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ne(12)):(this.o=0,Ne(13)),tn(this),pi(this)}}}catch{}finally{}};function Gf(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Xf(e,t,n){let i=!0,r;for(;!e.I&&e.C<n.length;)if(r=jE(e,n),r==Pr){t==4&&(e.o=4,Ne(14),i=!1),Cn(e.j,e.m,null,"[Incomplete Response]");break}else if(r==So){e.o=4,Ne(15),Cn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Cn(e.j,e.m,r,null),Oo(e,r);Gf(e)&&r!=Pr&&r!=So&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ne(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),qa(t),t.L=!0,Ne(11))):(Cn(e.j,e.m,n,"[Invalid Chunked Response]"),tn(e),pi(e))}k.fb=function(){if(this.g){var e=bt(this.g),t=this.g.ga();this.C<t.length&&(us(this),Xf(this,e,t),this.i&&e!=4&&zi(this))}};function jE(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Pr:(n=Number(t.substring(n,i)),isNaN(n)?So:(i+=1,i+n>t.length?Pr:(t=t.substr(i,n),e.C=i+n,t)))}k.cancel=function(){this.I=!0,tn(this)};function zi(e){e.Y=Date.now()+e.P,Jf(e,e.P)}function Jf(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qi(Ie(e.eb,e),t)}function us(e){e.B&&($.clearTimeout(e.B),e.B=null)}k.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ME(this.j,this.A),this.K!=2&&(Pi(3),Ne(17)),tn(this),this.o=2,pi(this)):Jf(this,this.Y-e)};function pi(e){e.l.G==0||e.I||md(e.l,e)}function tn(e){us(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ka(e.W),Hf(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Oo(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ko(n.i,e))){if(n.I=e.N,!e.J&&ko(n.i,e)&&n.G==3){try{var i=n.Ca.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Mr(n),gs(n);else break e;Ka(n),Ne(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=qi(Ie(n.ab,n),6e3));if(1>=id(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else nn(n,11)}else if((e.J||n.g==e)&&Mr(n),!kr(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=e.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=i.i;!s.g&&(Oe(w,"spdy")||Oe(w,"quic")||Oe(w,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ja(s,s.h),s.h=null))}if(i.D){const P=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(i.sa=P,fe(i.F,i.D,P))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=_d(i,i.H?i.la:null,i.W),o.J){rd(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(us(a),zi(a)),i.g=o}else pd(i);0<n.l.length&&ms(n)}else l[0]!="stop"&&l[0]!="close"||nn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?nn(n,7):Va(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Pi(4)}catch{}}function $E(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(_o(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Ua(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_o(e)||typeof e=="string")Sf(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(_o(e)||typeof e=="string"){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=$E(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Gn(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Gn)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}k=Gn.prototype;k.R=function(){Fa(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};k.T=function(){return Fa(this),this.g.concat()};function Fa(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];hn(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)i=e.g[t],hn(r,i)||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}k.get=function(e,t){return hn(this.h,e)?this.h[e]:t};k.set=function(e,t){hn(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};k.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};function hn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Yf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function BE(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function fn(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof fn){this.g=t!==void 0?t:e.g,Nr(this,e.j),this.s=e.s,Dr(this,e.i),Lr(this,e.m),this.l=e.l,t=e.h;var n=new Ni;n.i=t.i,t.g&&(n.g=new Gn(t.g),n.h=t.h),Ol(this,n),this.o=e.o}else e&&(n=String(e).match(Yf))?(this.g=!!t,Nr(this,n[1]||"",!0),this.s=gi(n[2]||""),Dr(this,n[3]||"",!0),Lr(this,n[4]),this.l=gi(n[5]||"",!0),Ol(this,n[6]||"",!0),this.o=gi(n[7]||"")):(this.g=!!t,this.h=new Ni(null,this.g))}fn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(si(t,kl,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(si(t,kl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(si(n,n.charAt(0)=="/"?WE:qE,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",si(n,GE)),e.join("")};function Ct(e){return new fn(e)}function Nr(e,t,n){e.j=n?gi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dr(e,t,n){e.i=n?gi(t,!0):t}function Lr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ol(e,t,n){t instanceof Ni?(e.h=t,XE(e.h,e.g)):(n||(t=si(t,zE)),e.h=new Ni(t,e.g))}function fe(e,t,n){e.h.set(t,n)}function hs(e){return fe(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function HE(e){return e instanceof fn?Ct(e):new fn(e,void 0)}function VE(e,t,n,i){var r=new fn(null,void 0);return e&&Nr(r,e),t&&Dr(r,t),n&&Lr(r,n),i&&(r.l=i),r}function gi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function si(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,KE),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function KE(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var kl=/[#\/\?@]/g,qE=/[#\?:]/g,WE=/[#\?]/g,zE=/[#\?@]/g,GE=/#/g;function Ni(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zt(e){e.g||(e.g=new Gn,e.h=0,e.i&&BE(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}k=Ni.prototype;k.add=function(e,t){zt(this),this.i=null,e=Xn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Qf(e,t){zt(e),t=Xn(e,t),hn(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,hn(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Fa(e)))}function Zf(e,t){return zt(e),t=Xn(e,t),hn(e.g.h,t)}k.forEach=function(e,t){zt(this),this.g.forEach(function(n,i){Sf(n,function(r){e.call(t,r,i,this)},this)},this)};k.T=function(){zt(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n};k.R=function(e){zt(this);var t=[];if(typeof e=="string")Zf(this,e)&&(t=Il(t,this.g.get(Xn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Il(t,e[n])}return t};k.set=function(e,t){return zt(this),this.i=null,e=Xn(this,e),Zf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};k.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ed(e,t,n){Qf(e,t),0<n.length&&(e.i=null,e.g.set(Xn(e,t),Ia(n)),e.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function Xn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function XE(e,t){t&&!e.j&&(zt(e),e.i=null,e.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Qf(this,i),ed(this,r,n))},e)),e.j=t}var JE=class{constructor(e,t){this.h=e,this.g=t}};function td(e){this.l=e||YE,$.PerformanceNavigationTiming?(e=$.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YE=10;function nd(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function id(e){return e.h?1:e.g?e.g.size:0}function ko(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ja(e,t){e.g?e.g.add(t):e.h=t}function rd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}td.prototype.cancel=function(){if(this.i=sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function sd(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ia(e.i)}function $a(){}$a.prototype.stringify=function(e){return $.JSON.stringify(e,void 0)};$a.prototype.parse=function(e){return $.JSON.parse(e,void 0)};function QE(){this.g=new $a}function ZE(e,t,n){const i=n||"";try{Ua(e,function(r,s){let o=r;Vi(r)&&(o=Ra(r)),t.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function eb(e,t){const n=new as;if($.Image){const i=new Image;i.onload=tr(ir,n,i,"TestLoadImage: loaded",!0,t),i.onerror=tr(ir,n,i,"TestLoadImage: error",!1,t),i.onabort=tr(ir,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=tr(ir,n,i,"TestLoadImage: timeout",!1,t),$.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function ir(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch{}}function fs(e){this.l=e.$b||null,this.j=e.ib||!1}Te(fs,La);fs.prototype.g=function(){return new ds(this.l,this.j)};fs.prototype.i=function(e){return function(){return e}}({});function ds(e,t){_e.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ba,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(ds,_e);var Ba=0;k=ds.prototype;k.open=function(e,t){if(this.readyState!=Ba)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Di(this)};k.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||$).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=Ba};k.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;od(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function od(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}k.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Gi(this):Di(this),this.readyState==3&&od(this)}};k.Ua=function(e){this.g&&(this.response=this.responseText=e,Gi(this))};k.Ta=function(e){this.g&&(this.response=e,Gi(this))};k.ha=function(){this.g&&Gi(this)};function Gi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Di(e)}k.setRequestHeader=function(e,t){this.v.append(e,t)};k.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Di(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var tb=$.JSON.parse;function ge(e){_e.call(this),this.headers=new Gn,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ad,this.K=this.L=!1}Te(ge,_e);var ad="",nb=/^https?$/i,ib=["POST","PUT"];k=ge.prototype;k.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Co.g(),this.C=this.u?Rl(this.u):Rl(Co),this.g.onreadystatechange=Ie(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){Pl(this,s);return}e=n||"";const r=new Gn(this.headers);i&&Ua(i,function(s,o){r.set(o,s)}),i=pE(r.T()),n=$.FormData&&e instanceof $.FormData,!(0<=Cf(ib,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ud(this),0<this.B&&((this.K=rb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.pa,this)):this.A=Pa(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pl(this,s)}};function rb(e){return Ri&&_E()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function sb(e){return e.toLowerCase()=="content-type"}k.pa=function(){typeof wa!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function Pl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,cd(e),ps(e)}function cd(e){e.D||(e.D=!0,Ee(e,"complete"),Ee(e,"error"))}k.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),ps(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ps(this,!0)),ge.Z.M.call(this)};k.Fa=function(){this.s||(this.F||this.v||this.l?ld(this):this.cb())};k.cb=function(){ld(this)};function ld(e){if(e.h&&typeof wa!="undefined"&&(!e.C[1]||bt(e)!=4||e.ba()!=2)){if(e.v&&bt(e)==4)Pa(e.Fa,0,e);else if(Ee(e,"readystatechange"),bt(e)==4){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var r=String(e.H).match(Yf)[1]||null;if(!r&&$.self&&$.self.location){var s=$.self.location.protocol;r=s.substr(0,s.length-1)}i=!nb.test(r?r.toLowerCase():"")}n=i}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var o=2<bt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",cd(e)}}finally{ps(e)}}}}function ps(e,t){if(e.g){ud(e);const n=e.g,i=e.C[0]?Or:null;e.g=null,e.C=null,t||Ee(e,"ready");try{n.onreadystatechange=i}catch{}}}function ud(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&($.clearTimeout(e.A),e.A=null)}function bt(e){return e.g?e.g.readyState:0}k.ba=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};k.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),tb(t)}};function Nl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ad:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}k.Da=function(){return this.m};k.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ob(e){let t="";return Ea(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Ha(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ob(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):fe(e,t,n))}function Zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function hd(e){this.za=0,this.l=[],this.h=new as,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Zn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Zn("baseRetryDelayMs",5e3,e),this.$a=Zn("retryDelaySeedMs",1e4,e),this.Ya=Zn("forwardChannelMaxRetries",2,e),this.ra=Zn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new td(e&&e.concurrentRequestLimit),this.Ca=new QE,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}k=hd.prototype;k.ma=8;k.G=1;function Va(e){if(fd(e),e.G==3){var t=e.V++,n=Ct(e.F);fe(n,"SID",e.J),fe(n,"RID",t),fe(n,"TYPE","terminate"),Xi(e,n),t=new Wi(e,e.h,t,void 0),t.K=2,t.v=hs(Ct(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(t.v.toString(),"")),!n&&$.Image&&(new Image().src=t.v,n=!0),n||(t.g=wd(t.l,null),t.g.ea(t.v)),t.F=Date.now(),zi(t)}yd(e)}k.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function gs(e){e.g&&(qa(e),e.g.cancel(),e.g=null)}function fd(e){gs(e),e.u&&($.clearTimeout(e.u),e.u=null),Mr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&$.clearTimeout(e.m),e.m=null)}function Vs(e,t){e.l.push(new JE(e.Za++,t)),e.G==3&&ms(e)}function ms(e){nd(e.i)||e.m||(e.m=!0,Oa(e.Ha,e),e.C=0)}function ab(e,t){return id(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=qi(Ie(e.Ha,e,t),vd(e,e.C)),e.C++,!0)}k.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Wi(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Rf(s),Of(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dd(this,r,t),n=Ct(this.F),fe(n,"RID",e),fe(n,"CVER",22),this.D&&fe(n,"X-HTTP-Session-Id",this.D),Xi(this,n),this.o&&s&&Ha(n,this.o,s),ja(this.i,r),this.Ra&&fe(n,"TYPE","init"),this.ja?(fe(n,"$req",t),fe(n,"SID","null"),r.$=!0,Ro(r,n,null)):Ro(r,n,t),this.G=2}}else this.G==3&&(e?Dl(this,e):this.l.length==0||nd(this.i)||Dl(this))};function Dl(e,t){var n;t?n=t.m:n=e.V++;const i=Ct(e.F);fe(i,"SID",e.J),fe(i,"RID",n),fe(i,"AID",e.U),Xi(e,i),e.o&&e.s&&Ha(i,e.o,e.s),n=new Wi(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dd(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ja(e.i,n),Ro(n,i,t)}function Xi(e,t){e.j&&Ua({},function(n,i){fe(t,i,n)})}function dd(e,t,n){n=Math.min(e.l.length,n);var i=e.j?Ie(e.j.Oa,e.j,e):null;e:{var r=e.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{ZE(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function pd(e){e.g||e.u||(e.Y=1,Oa(e.Ga,e),e.A=0)}function Ka(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=qi(Ie(e.Ga,e),vd(e,e.A)),e.A++,!0)}k.Ga=function(){if(this.u=null,gd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=qi(Ie(this.bb,this),e)}};k.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ne(10),gs(this),gd(this))};function qa(e){e.B!=null&&($.clearTimeout(e.B),e.B=null)}function gd(e){e.g=new Wi(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=Ct(e.oa);fe(t,"RID","rpc"),fe(t,"SID",e.J),fe(t,"CI",e.N?"0":"1"),fe(t,"AID",e.U),Xi(e,t),fe(t,"TYPE","xmlhttp"),e.o&&e.s&&Ha(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=hs(Ct(t)),n.s=null,n.U=!0,zf(n,e)}k.ab=function(){this.v!=null&&(this.v=null,gs(this),Ka(this),Ne(19))};function Mr(e){e.v!=null&&($.clearTimeout(e.v),e.v=null)}function md(e,t){var n=null;if(e.g==t){Mr(e),qa(e),e.g=null;var i=2}else if(ko(e.i,t))n=t.D,rd(e.i,t),i=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=Na(),Ee(i,new qf(i,n,t,r)),ms(e)}else pd(e);else if(r=t.o,r==3||r==0&&0<e.I||!(i==1&&ab(e,t)||i==2&&Ka(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}}function vd(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function nn(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var i=Ie(e.jb,e);n||(n=new fn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Nr(n,"https"),hs(n)),eb(n.toString(),i)}else Ne(2);e.G=0,e.j&&e.j.va(t),yd(e),fd(e)}k.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Ne(2)):(this.h.info("Failed to ping google.com"),Ne(1))};function yd(e){e.G=0,e.I=-1,e.j&&((sd(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Ia(e.l),e.l.length=0),e.j.ua())}function _d(e,t,n){let i=HE(n);if(i.i!="")t&&Dr(i,t+"."+i.i),Lr(i,i.m);else{const r=$.location;i=VE(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Ea(e.aa,function(r,s){fe(i,s,r)}),t=e.D,n=e.sa,t&&n&&fe(i,t,n),fe(i,"VER",e.ma),Xi(e,i),i}function wd(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new ge(new fs({ib:!0})):new ge(e.qa),t.L=e.H,t}function Id(){}k=Id.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Oa=function(){};function Ge(e,t){_e.call(this),this.g=new hd(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!kr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!kr(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jn(this)}Te(Ge,_e);Ge.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Oa(Ie(e.hb,e,t))),Ne(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=_d(e,null,e.W),ms(e)};Ge.prototype.close=function(){Va(this.g)};Ge.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Vs(this.g,t)}else this.v?(t={},t.__data__=Ra(e),Vs(this.g,t)):Vs(this.g,e)};Ge.prototype.M=function(){this.g.j=null,delete this.j,Va(this.g),delete this.g,Ge.Z.M.call(this)};function Ed(e){Ma.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Te(Ed,Ma);function bd(){xa.call(this),this.status=1}Te(bd,xa);function Jn(e){this.g=e}Te(Jn,Id);Jn.prototype.xa=function(){Ee(this.g,"a")};Jn.prototype.wa=function(e){Ee(this.g,new Ed(e))};Jn.prototype.va=function(e){Ee(this.g,new bd(e))};Jn.prototype.ua=function(){Ee(this.g,"b")};Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;Da.NO_ERROR=0;Da.TIMEOUT=8;Da.HTTP_ERROR=6;UE.COMPLETE="complete";cs.OPEN="a";cs.CLOSE="b";cs.ERROR="c";cs.MESSAGE="d";_e.prototype.listen=_e.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.La;ge.prototype.getLastErrorCode=ge.prototype.Da;ge.prototype.getStatus=ge.prototype.ba;ge.prototype.getResponseJson=ge.prototype.Qa;ge.prototype.getResponseText=ge.prototype.ga;ge.prototype.send=ge.prototype.ea;const Ll="@firebase/firestore";/**
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
 */class Le{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let vs="9.6.10";/**
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
 */const xr=new Xr("@firebase/firestore");function je(e,...t){if(xr.logLevel<=te.DEBUG){const n=t.map(Td);xr.debug(`Firestore (${vs}): ${e}`,...n)}}function Wa(e,...t){if(xr.logLevel<=te.ERROR){const n=t.map(Td);xr.error(`Firestore (${vs}): ${e}`,...n)}}function Td(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function Ad(e="Unexpected state"){const t=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+e;throw Wa(t),new Error(t)}function Ur(e,t){e||Ad()}/**
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
 */const ht={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends Rt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class cb{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class ub{constructor(t){this.t=t,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ur(typeof i.accessToken=="string"),new cb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ur(t===null||typeof t=="string"),new Le(t)}}class hb{constructor(t,n,i){this.type="FirstParty",this.user=Le.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class fb{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new hb(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class db{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pb{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const i=s=>{s.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,je("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ur(typeof n.token=="string"),this.p=n.token,new db(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gb(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}class mb{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=gb(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}/**
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
 */class vb{constructor(t,n,i,r,s,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Li{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Li&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Ml,X;(X=Ml||(Ml={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";function Cd(e){return e.name==="IndexedDbTransactionError"}function Ks(){return typeof document!="undefined"?document:null}class yb{constructor(t,n,i=1e3,r=1.5,s=6e4){this.Jn=t,this.timerId=n,this.lo=i,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&je("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class za{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new za(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(ht.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _b(e,t){if(Wa("AsyncQueue",`${t}: ${e}`),Cd(e))return new ft(ht.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class wb{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=mb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{je("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(je("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ft(ht.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=_b(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}const xl=new Map;function Ib(e,t,n,i){if(t===!0&&i===!0)throw new ft(ht.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Ul{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new ft(ht.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ft(ht.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ib("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Eb{constructor(t,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ul({}),this._settingsFrozen=!1,t instanceof Li?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ft(ht.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(r.options.projectId)}(t))}get app(){if(!this._app)throw new ft(ht.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ft(ht.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ul(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lb;switch(n.type){case"gapi":const i=n.client;return Ur(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new fb(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ft(ht.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=xl.get(t);n&&(je("ComponentProvider","Removing Datastore"),xl.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class bb{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new yb(this,"async_queue_retry"),this.Ua=()=>{const n=Ks();n&&je("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const n=Ks();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new Ln;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!Cd(t))throw t;je("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const n=this.Na.then(()=>(this.$a=!0,t().catch(i=>{this.Fa=i,this.$a=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Wa("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.$a=!1,i))));return this.Na=n,n}enqueueAfterDelay(t,n,i){this.qa(),this.La.indexOf(t)>-1&&(n=0);const r=za.createAndSchedule(this,t,n,i,s=>this.Qa(s));return this.Oa.push(r),r}qa(){this.Fa&&Ad()}verifyOperationInProgress(){}async ja(){let t;do t=this.Na,await t;while(t!==this.Na)}Wa(t){for(const n of this.Oa)if(n.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const n=this.Oa.indexOf(t);this.Oa.splice(n,1)}}class Tb extends Eb{constructor(t,n,i){super(t,n,i),this.type="firestore",this._queue=new bb,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Cb(this),this._firestoreClient.terminate()}}function Ab(e=gh()){return Ui(e,"firestore").getImmediate()}function Cb(e){var t;const n=e._freezeSettings(),i=function(r,s,o,a){return new vb(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new wb(e._authCredentials,e._appCheckCredentials,e._queue,i)}(function(e,t=!0){(function(n){vs=n})(Fi),vt(new et("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new Tb(r,new ub(n.getProvider("auth-internal")),new pb(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC")),We(Ll,"3.4.7",e),We(Ll,"3.4.7","esm2017")})();const Sb={apiKey:"AIzaSyANRHn_XwFSzlxjoTp11bO5a5Gl1G9kkGc",authDomain:"al-khawarizmi-berdaya.firebaseapp.com",projectId:"al-khawarizmi-berdaya",storageBucket:"al-khawarizmi-berdaya.appspot.com",messagingSenderId:"529015177437",appId:"1:529015177437:web:30aa94162773b421b09b34",measurementId:"G-X6QPEHLVKF"},Sd=Ty(Sb);Ab(Sd);const Rb={updateUser(e,t){e.user.data=t}},Ob=Hw({state(){return{user:{data:null}}},mutations:Rb});im(Vw).use(rh).use(Sd).use(Ob).mount("body");export{Do as A,Hb as B,Bb as C,jh as D,at as F,Db as S,$u as a,Pe as b,Mb as c,Nb as d,_g as e,xb as f,Tw as g,$b as h,bu as i,p_ as j,gp as k,Yp as l,Fu as m,Ub as n,Qo as o,Pb as p,Vn as q,pg as r,Vb as s,kb as t,Aw as u,jb as v,Cp as w,Lb as x,Fb as y,oi as z};
