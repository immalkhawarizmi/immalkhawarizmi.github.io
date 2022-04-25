const wd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};wd();function Ro(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ed=Ro(Id);function Ll(e){return!!e||e===""}function Oo(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Ie(i)?Ad(i):Oo(i);if(r)for(const s in r)t[s]=r[s]}return t}else{if(Ie(e))return e;if(pe(e))return e}}const bd=/;(?![^(]*\))/g,Td=/:(.+)/;function Ad(e){const t={};return e.split(bd).forEach(n=>{if(n){const i=n.split(Td);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Po(e){let t="";if(Ie(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const i=Po(e[n]);i&&(t+=i+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Tb=e=>Ie(e)?e:e==null?"":B(e)||pe(e)&&(e.toString===Fl||!H(e.toString))?JSON.stringify(e,Ml,2):String(e),Ml=(e,t)=>t&&t.__v_isRef?Ml(e,t.value):Cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:xl(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!B(t)&&!jl(t)?String(t):t,ie={},Sn=[],Ge=()=>{},Sd=()=>!1,Cd=/^on[^a-z]/,Fr=e=>Cd.test(e),ko=e=>e.startsWith("onUpdate:"),Pe=Object.assign,Do=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rd=Object.prototype.hasOwnProperty,J=(e,t)=>Rd.call(e,t),B=Array.isArray,Cn=e=>jr(e)==="[object Map]",xl=e=>jr(e)==="[object Set]",H=e=>typeof e=="function",Ie=e=>typeof e=="string",No=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ul=e=>pe(e)&&H(e.then)&&H(e.catch),Fl=Object.prototype.toString,jr=e=>Fl.call(e),Od=e=>jr(e).slice(8,-1),jl=e=>jr(e)==="[object Object]",Lo=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rr=Ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Pd=/-(\w)/g,ht=$r(e=>e.replace(Pd,(t,n)=>n?n.toUpperCase():"")),kd=/\B([A-Z])/g,Fn=$r(e=>e.replace(kd,"-$1").toLowerCase()),Br=$r(e=>e.charAt(0).toUpperCase()+e.slice(1)),_s=$r(e=>e?`on${Br(e)}`:""),gi=(e,t)=>!Object.is(e,t),sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},dr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ga;const Dd=()=>Ga||(Ga=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let mt;class Nd{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&mt&&(this.parent=mt,this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}run(t){if(this.active)try{return mt=this,t()}finally{mt=this.parent}}on(){mt=this}off(){mt=this.parent}stop(t){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Ld(e,t=mt){t&&t.active&&t.effects.push(e)}const Mo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$l=e=>(e.w&Vt)>0,Bl=e=>(e.n&Vt)>0,Md=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Vt},xd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];$l(r)&&!Bl(r)?r.delete(e):t[n++]=r,r.w&=~Vt,r.n&=~Vt}t.length=n}},Ks=new WeakMap;let Qn=0,Vt=1;const qs=30;let st;const tn=Symbol(""),Ws=Symbol("");class xo{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,i)}run(){if(!this.active)return this.fn();let t=st,n=$t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=st,st=this,$t=!0,Vt=1<<++Qn,Qn<=qs?Md(this):Xa(this),this.fn()}finally{Qn<=qs&&xd(this),Vt=1<<--Qn,st=this.parent,$t=n,this.parent=void 0}}stop(){this.active&&(Xa(this),this.onStop&&this.onStop(),this.active=!1)}}function Xa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let $t=!0;const Hl=[];function jn(){Hl.push($t),$t=!1}function $n(){const e=Hl.pop();$t=e===void 0?!0:e}function $e(e,t,n){if($t&&st){let i=Ks.get(e);i||Ks.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=Mo()),Vl(r)}}function Vl(e,t){let n=!1;Qn<=qs?Bl(e)||(e.n|=Vt,n=!$l(e)):n=!e.has(st),n&&(e.add(st),st.deps.push(e))}function Et(e,t,n,i,r,s){const o=Ks.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e))o.forEach((c,l)=>{(l==="length"||l>=i)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?Lo(n)&&a.push(o.get("length")):(a.push(o.get(tn)),Cn(e)&&a.push(o.get(Ws)));break;case"delete":B(e)||(a.push(o.get(tn)),Cn(e)&&a.push(o.get(Ws)));break;case"set":Cn(e)&&a.push(o.get(tn));break}if(a.length===1)a[0]&&zs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zs(Mo(c))}}function zs(e,t){for(const n of B(e)?e:[...e])(n!==st||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ud=Ro("__proto__,__v_isRef,__isVue"),Kl=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(No)),Fd=Uo(),jd=Uo(!1,!0),$d=Uo(!0),Ja=Bd();function Bd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=Y(this);for(let s=0,o=this.length;s<o;s++)$e(i,"get",s+"");const r=i[t](...n);return r===-1||r===!1?i[t](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){jn();const i=Y(this)[t].apply(this,n);return $n(),i}}),e}function Uo(e=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?ip:Xl:t?Gl:zl).get(i))return i;const o=B(i);if(!e&&o&&J(Ja,r))return Reflect.get(Ja,r,s);const a=Reflect.get(i,r,s);return(No(r)?Kl.has(r):Ud(r))||(e||$e(i,"get",r),t)?a:_e(a)?!o||!Lo(r)?a.value:a:pe(a)?e?Jl(a):Bn(a):a}}const Hd=ql(),Vd=ql(!0);function ql(e=!1){return function(n,i,r,s){let o=n[i];if(mi(o)&&_e(o)&&!_e(r))return!1;if(!e&&!mi(r)&&(Yl(r)||(r=Y(r),o=Y(o)),!B(n)&&_e(o)&&!_e(r)))return o.value=r,!0;const a=B(n)&&Lo(i)?Number(i)<n.length:J(n,i),c=Reflect.set(n,i,r,s);return n===Y(s)&&(a?gi(r,o)&&Et(n,"set",i,r):Et(n,"add",i,r)),c}}function Kd(e,t){const n=J(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&Et(e,"delete",t,void 0),i}function qd(e,t){const n=Reflect.has(e,t);return(!No(t)||!Kl.has(t))&&$e(e,"has",t),n}function Wd(e){return $e(e,"iterate",B(e)?"length":tn),Reflect.ownKeys(e)}const Wl={get:Fd,set:Hd,deleteProperty:Kd,has:qd,ownKeys:Wd},zd={get:$d,set(e,t){return!0},deleteProperty(e,t){return!0}},Gd=Pe({},Wl,{get:jd,set:Vd}),Fo=e=>e,Hr=e=>Reflect.getPrototypeOf(e);function Ji(e,t,n=!1,i=!1){e=e.__v_raw;const r=Y(e),s=Y(t);t!==s&&!n&&$e(r,"get",t),!n&&$e(r,"get",s);const{has:o}=Hr(r),a=i?Fo:n?Bo:vi;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Yi(e,t=!1){const n=this.__v_raw,i=Y(n),r=Y(e);return e!==r&&!t&&$e(i,"has",e),!t&&$e(i,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Qi(e,t=!1){return e=e.__v_raw,!t&&$e(Y(e),"iterate",tn),Reflect.get(e,"size",e)}function Ya(e){e=Y(e);const t=Y(this);return Hr(t).has.call(t,e)||(t.add(e),Et(t,"add",e,e)),this}function Qa(e,t){t=Y(t);const n=Y(this),{has:i,get:r}=Hr(n);let s=i.call(n,e);s||(e=Y(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?gi(t,o)&&Et(n,"set",e,t):Et(n,"add",e,t),this}function Za(e){const t=Y(this),{has:n,get:i}=Hr(t);let r=n.call(t,e);r||(e=Y(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&Et(t,"delete",e,void 0),s}function ec(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Et(e,"clear",void 0,void 0),n}function Zi(e,t){return function(i,r){const s=this,o=s.__v_raw,a=Y(o),c=t?Fo:e?Bo:vi;return!e&&$e(a,"iterate",tn),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function er(e,t,n){return function(...i){const r=this.__v_raw,s=Y(r),o=Cn(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...i),u=n?Fo:t?Bo:vi;return!t&&$e(s,"iterate",c?Ws:tn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rt(e){return function(...t){return e==="delete"?!1:this}}function Xd(){const e={get(s){return Ji(this,s)},get size(){return Qi(this)},has:Yi,add:Ya,set:Qa,delete:Za,clear:ec,forEach:Zi(!1,!1)},t={get(s){return Ji(this,s,!1,!0)},get size(){return Qi(this)},has:Yi,add:Ya,set:Qa,delete:Za,clear:ec,forEach:Zi(!1,!0)},n={get(s){return Ji(this,s,!0)},get size(){return Qi(this,!0)},has(s){return Yi.call(this,s,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Zi(!0,!1)},i={get(s){return Ji(this,s,!0,!0)},get size(){return Qi(this,!0)},has(s){return Yi.call(this,s,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=er(s,!1,!1),n[s]=er(s,!0,!1),t[s]=er(s,!1,!0),i[s]=er(s,!0,!0)}),[e,n,t,i]}const[Jd,Yd,Qd,Zd]=Xd();function jo(e,t){const n=t?e?Zd:Qd:e?Yd:Jd;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(J(n,r)&&r in i?n:i,r,s)}const ep={get:jo(!1,!1)},tp={get:jo(!1,!0)},np={get:jo(!0,!1)},zl=new WeakMap,Gl=new WeakMap,Xl=new WeakMap,ip=new WeakMap;function rp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sp(e){return e.__v_skip||!Object.isExtensible(e)?0:rp(Od(e))}function Bn(e){return mi(e)?e:$o(e,!1,Wl,ep,zl)}function op(e){return $o(e,!1,Gd,tp,Gl)}function Jl(e){return $o(e,!0,zd,np,Xl)}function $o(e,t,n,i,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=sp(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function Rn(e){return mi(e)?Rn(e.__v_raw):!!(e&&e.__v_isReactive)}function mi(e){return!!(e&&e.__v_isReadonly)}function Yl(e){return!!(e&&e.__v_isShallow)}function Ql(e){return Rn(e)||mi(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Zl(e){return fr(e,"__v_skip",!0),e}const vi=e=>pe(e)?Bn(e):e,Bo=e=>pe(e)?Jl(e):e;function eu(e){$t&&st&&(e=Y(e),Vl(e.dep||(e.dep=Mo())))}function tu(e,t){e=Y(e),e.dep&&zs(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function ap(e){return nu(e,!1)}function cp(e){return nu(e,!0)}function nu(e,t){return _e(e)?e:new lp(e,t)}class lp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:vi(t)}get value(){return eu(this),this._value}set value(t){t=this.__v_isShallow?t:Y(t),gi(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:vi(t),tu(this))}}function si(e){return _e(e)?e.value:e}const up={get:(e,t,n)=>si(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return _e(r)&&!_e(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function iu(e){return Rn(e)?e:new Proxy(e,up)}class hp{constructor(t,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new xo(t,()=>{this._dirty||(this._dirty=!0,tu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Y(this);return eu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function fp(e,t,n=!1){let i,r;const s=H(e);return s?(i=e,r=Ge):(i=e.get,r=e.set),new hp(i,r,s||!r,n)}Promise.resolve();function Bt(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){Mi(s,t,n)}return r}function Xe(e,t,n,i){if(H(e)){const s=Bt(e,t,n,i);return s&&Ul(s)&&s.catch(o=>{Mi(o,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(Xe(e[s],t,n,i));return r}function Mi(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Bt(c,null,10,[e,o,a]);return}}dp(e,n,r,i)}function dp(e,t,n,i=!0){console.error(e)}let pr=!1,Gs=!1;const Ue=[];let _t=0;const oi=[];let Zn=null,wn=0;const ai=[];let Dt=null,In=0;const ru=Promise.resolve();let Ho=null,Xs=null;function su(e){const t=Ho||ru;return e?t.then(this?e.bind(this):e):t}function pp(e){let t=_t+1,n=Ue.length;for(;t<n;){const i=t+n>>>1;_i(Ue[i])<e?t=i+1:n=i}return t}function ou(e){(!Ue.length||!Ue.includes(e,pr&&e.allowRecurse?_t+1:_t))&&e!==Xs&&(e.id==null?Ue.push(e):Ue.splice(pp(e.id),0,e),au())}function au(){!pr&&!Gs&&(Gs=!0,Ho=ru.then(hu))}function gp(e){const t=Ue.indexOf(e);t>_t&&Ue.splice(t,1)}function cu(e,t,n,i){B(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?i+1:i))&&n.push(e),au()}function mp(e){cu(e,Zn,oi,wn)}function lu(e){cu(e,Dt,ai,In)}function Vo(e,t=null){if(oi.length){for(Xs=t,Zn=[...new Set(oi)],oi.length=0,wn=0;wn<Zn.length;wn++)Zn[wn]();Zn=null,wn=0,Xs=null,Vo(e,t)}}function uu(e){if(ai.length){const t=[...new Set(ai)];if(ai.length=0,Dt){Dt.push(...t);return}for(Dt=t,Dt.sort((n,i)=>_i(n)-_i(i)),In=0;In<Dt.length;In++)Dt[In]();Dt=null,In=0}}const _i=e=>e.id==null?1/0:e.id;function hu(e){Gs=!1,pr=!0,Vo(e),Ue.sort((n,i)=>_i(n)-_i(i));const t=Ge;try{for(_t=0;_t<Ue.length;_t++){const n=Ue[_t];n&&n.active!==!1&&Bt(n,null,14)}}finally{_t=0,Ue.length=0,uu(),pr=!1,Ho=null,(Ue.length||oi.length||ai.length)&&hu(e)}}function vp(e,t,...n){const i=e.vnode.props||ie;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||ie;d?r=n.map(g=>g.trim()):h&&(r=n.map(dr))}let a,c=i[a=_s(t)]||i[a=_s(ht(t))];!c&&s&&(c=i[a=_s(Fn(t))]),c&&Xe(c,e,6,r);const l=i[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(l,e,6,r)}}function fu(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=fu(l,t,!0);u&&(a=!0,Pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(i.set(e,null),null):(B(s)?s.forEach(c=>o[c]=null):Pe(o,s),i.set(e,o),o)}function Ko(e,t){return!e||!Fr(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,Fn(t))||J(e,t))}let ze=null,Vr=null;function gr(e){const t=ze;return ze=e,Vr=e&&e.type.__scopeId||null,t}function Ab(e){Vr=e}function Sb(){Vr=null}function _p(e,t=ze,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&hc(-1);const s=gr(t),o=e(...r);return gr(s),i._d&&hc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ys(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:I,inheritAttrs:L}=e;let O,P;const T=gr(e);try{if(n.shapeFlag&4){const V=r||i;O=We(u.call(V,V,h,s,g,d,I)),P=c}else{const V=t;O=We(V.length>1?V(s,{attrs:c,slots:a,emit:l}):V(s,null)),P=t.props?c:wp(c)}}catch(V){ci.length=0,Mi(V,e,1),O=Ne(sn)}let k=O;if(P&&L!==!1){const V=Object.keys(P),{shapeFlag:G}=k;V.length&&G&7&&(o&&V.some(ko)&&(P=Ip(P,o)),k=Ii(k,P))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),O=k,gr(T),O}function yp(e){let t;for(let n=0;n<e.length;n++){const i=e[n];if(vr(i)){if(i.type!==sn||i.children==="v-if"){if(t)return;t=i}}else return}return t}const wp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fr(n))&&((t||(t={}))[n]=e[n]);return t},Ip=(e,t)=>{const n={};for(const i in e)(!ko(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Ep(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?tc(i,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Ko(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?tc(i,o,l):!0:!!o;return!1}function tc(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Ko(n,s))return!0}return!1}function qo({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bp=e=>e.__isSuspense,Tp={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,c,l){e==null?Ap(t,n,i,r,s,o,a,c,l):Sp(e,t,n,i,r,o,a,c,l)},hydrate:Cp,create:Wo,normalize:Rp},Cb=Tp;function yi(e,t){const n=e.props&&e.props[t];H(n)&&n()}function Ap(e,t,n,i,r,s,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=e.suspense=Wo(e,r,i,t,h,n,s,o,a,c);l(null,d.pendingBranch=e.ssContent,h,null,i,d,s,o),d.deps>0?(yi(e,"onPending"),yi(e,"onFallback"),l(null,e.ssFallback,t,n,i,null,s,o),On(d,e.ssFallback)):d.resolve()}function Sp(e,t,n,i,r,s,o,a,{p:c,um:l,o:{createElement:u}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const d=t.ssContent,g=t.ssFallback,{activeBranch:I,pendingBranch:L,isInFallback:O,isHydrating:P}=h;if(L)h.pendingBranch=d,Mt(d,L)?(c(L,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():O&&(c(I,g,n,i,r,null,s,o,a),On(h,g))):(h.pendingId++,P?(h.isHydrating=!1,h.activeBranch=L):l(L,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),O?(c(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0?h.resolve():(c(I,g,n,i,r,null,s,o,a),On(h,g))):I&&Mt(d,I)?(c(I,d,n,i,r,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0&&h.resolve()));else if(I&&Mt(d,I))c(I,d,n,i,r,h,s,o,a),On(h,d);else if(yi(t,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:T,pendingId:k}=h;T>0?setTimeout(()=>{h.pendingId===k&&h.fallback(g)},T):T===0&&h.fallback(g)}}function Wo(e,t,n,i,r,s,o,a,c,l,u=!1){const{p:h,m:d,um:g,n:I,o:{parentNode:L,remove:O}}=l,P=dr(e.props&&e.props.timeout),T={vnode:e,parent:t,parentComponent:n,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof P=="number"?P:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(k=!1){const{vnode:V,activeBranch:G,pendingBranch:X,pendingId:ue,effects:me,parentComponent:le,container:be}=T;if(T.isHydrating)T.isHydrating=!1;else if(!k){const dt=G&&X.transition&&X.transition.mode==="out-in";dt&&(G.transition.afterLeave=()=>{ue===T.pendingId&&d(X,be,et,0)});let{anchor:et}=T;G&&(et=I(G),g(G,le,T,!0)),dt||d(X,be,et,0)}On(T,X),T.pendingBranch=null,T.isInFallback=!1;let de=T.parent,Be=!1;for(;de;){if(de.pendingBranch){de.effects.push(...me),Be=!0;break}de=de.parent}Be||lu(me),T.effects=[],yi(V,"onResolve")},fallback(k){if(!T.pendingBranch)return;const{vnode:V,activeBranch:G,parentComponent:X,container:ue,isSVG:me}=T;yi(V,"onFallback");const le=I(G),be=()=>{!T.isInFallback||(h(null,k,ue,le,X,null,me,a,c),On(T,k))},de=k.transition&&k.transition.mode==="out-in";de&&(G.transition.afterLeave=be),T.isInFallback=!0,g(G,X,null,!0),de||be()},move(k,V,G){T.activeBranch&&d(T.activeBranch,k,V,G),T.container=k},next(){return T.activeBranch&&I(T.activeBranch)},registerDep(k,V){const G=!!T.pendingBranch;G&&T.deps++;const X=k.vnode.el;k.asyncDep.catch(ue=>{Mi(ue,k,0)}).then(ue=>{if(k.isUnmounted||T.isUnmounted||T.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:me}=k;no(k,ue,!1),X&&(me.el=X);const le=!X&&k.subTree.el;V(k,me,L(X||k.subTree.el),X?null:I(k.subTree),T,o,c),le&&O(le),qo(k,me.el),G&&--T.deps===0&&T.resolve()})},unmount(k,V){T.isUnmounted=!0,T.activeBranch&&g(T.activeBranch,n,k,V),T.pendingBranch&&g(T.pendingBranch,n,k,V)}};return T}function Cp(e,t,n,i,r,s,o,a,c){const l=t.suspense=Wo(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,s,o);return l.deps===0&&l.resolve(),u}function Rp(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=nc(i?n.default:n),e.ssFallback=i?nc(n.fallback):Ne(sn)}function nc(e){let t;if(H(e)){const n=wi&&e._c;n&&(e._d=!1,Ou()),e=e(),n&&(e._d=!0,t=Ht,Pu())}return B(e)&&(e=yp(e)),e=We(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Op(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):lu(e)}function On(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e,r=n.el=t.el;i&&i.subTree===n&&(i.vnode.el=r,qo(i,r))}function or(e,t){if(ve){let n=ve.provides;const i=ve.parent&&ve.parent.provides;i===n&&(n=ve.provides=Object.create(i)),n[e]=t}}function ct(e,t,n=!1){const i=ve||ze;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&H(t)?t.call(i.proxy):t}}const ic={};function Pn(e,t,n){return du(e,t,n)}function du(e,t,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ie){const a=ve;let c,l=!1,u=!1;if(_e(e)?(c=()=>e.value,l=Yl(e)):Rn(e)?(c=()=>e,i=!0):B(e)?(u=!0,l=e.some(Rn),c=()=>e.map(P=>{if(_e(P))return P.value;if(Rn(P))return Yt(P);if(H(P))return Bt(P,a,2)})):H(e)?t?c=()=>Bt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Xe(e,a,3,[d])}:c=Ge,t&&i){const P=c;c=()=>Yt(P())}let h,d=P=>{h=O.onStop=()=>{Bt(P,a,4)}};if(Ei)return d=Ge,t?n&&Xe(t,a,3,[c(),u?[]:void 0,d]):c(),Ge;let g=u?[]:ic;const I=()=>{if(!!O.active)if(t){const P=O.run();(i||l||(u?P.some((T,k)=>gi(T,g[k])):gi(P,g)))&&(h&&h(),Xe(t,a,3,[P,g===ic?void 0:g,d]),g=P)}else O.run()};I.allowRecurse=!!t;let L;r==="sync"?L=I:r==="post"?L=()=>ke(I,a&&a.suspense):L=()=>{!a||a.isMounted?mp(I):I()};const O=new xo(c,L);return t?n?I():g=O.run():r==="post"?ke(O.run.bind(O),a&&a.suspense):O.run(),()=>{O.stop(),a&&a.scope&&Do(a.scope.effects,O)}}function Pp(e,t,n){const i=this.proxy,r=Ie(e)?e.includes(".")?pu(i,e):()=>i[e]:e.bind(i,i);let s;H(t)?s=t:(s=t.handler,n=t);const o=ve;Ln(this);const a=du(r,s.bind(i),n);return o?Ln(o):nn(),a}function pu(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Yt(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))Yt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Yt(e[n],t);else if(xl(e)||Cn(e))e.forEach(n=>{Yt(n,t)});else if(jl(e))for(const n in e)Yt(e[n],t);return e}function gu(e){return H(e)?{setup:e,name:e.name}:e}const Js=e=>!!e.type.__asyncLoader,mu=e=>e.type.__isKeepAlive;function kp(e,t){vu(e,"a",t)}function Dp(e,t){vu(e,"da",t)}function vu(e,t,n=ve){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Kr(t,i,n),n){let r=n.parent;for(;r&&r.parent;)mu(r.parent.vnode)&&Np(i,t,n,r),r=r.parent}}function Np(e,t,n,i){const r=Kr(t,e,i,!0);_u(()=>{Do(i[t],r)},n)}function Kr(e,t,n=ve,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;jn(),Ln(n);const a=Xe(t,n,e,o);return nn(),$n(),a});return i?r.unshift(s):r.push(s),s}}const At=e=>(t,n=ve)=>(!Ei||e==="sp")&&Kr(e,t,n),Lp=At("bm"),Mp=At("m"),xp=At("bu"),Up=At("u"),Fp=At("bum"),_u=At("um"),jp=At("sp"),$p=At("rtg"),Bp=At("rtc");function Hp(e,t=ve){Kr("ec",e,t)}let Ys=!0;function Vp(e){const t=wu(e),n=e.proxy,i=e.ctx;Ys=!1,t.beforeCreate&&rc(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:I,activated:L,deactivated:O,beforeDestroy:P,beforeUnmount:T,destroyed:k,unmounted:V,render:G,renderTracked:X,renderTriggered:ue,errorCaptured:me,serverPrefetch:le,expose:be,inheritAttrs:de,components:Be,directives:dt,filters:et}=t;if(l&&Kp(l,i,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const Z=o[re];H(Z)&&(i[re]=Z.bind(n))}if(r){const re=r.call(n,n);pe(re)&&(e.data=Bn(re))}if(Ys=!0,s)for(const re in s){const Z=s[re],Me=H(Z)?Z.bind(n,n):H(Z.get)?Z.get.bind(n,n):Ge,gn=!H(Z)&&H(Z.set)?Z.set.bind(n):Ge,pt=rt({get:Me,set:gn});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>pt.value,set:tt=>pt.value=tt})}if(a)for(const re in a)yu(a[re],i,n,re);if(c){const re=H(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Z=>{or(Z,re[Z])})}u&&rc(u,e,"c");function he(re,Z){B(Z)?Z.forEach(Me=>re(Me.bind(n))):Z&&re(Z.bind(n))}if(he(Lp,h),he(Mp,d),he(xp,g),he(Up,I),he(kp,L),he(Dp,O),he(Hp,me),he(Bp,X),he($p,ue),he(Fp,T),he(_u,V),he(jp,le),B(be))if(be.length){const re=e.exposed||(e.exposed={});be.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:Me=>n[Z]=Me})})}else e.exposed||(e.exposed={});G&&e.render===Ge&&(e.render=G),de!=null&&(e.inheritAttrs=de),Be&&(e.components=Be),dt&&(e.directives=dt)}function Kp(e,t,n=Ge,i=!1){B(e)&&(e=Qs(e));for(const r in e){const s=e[r];let o;pe(s)?"default"in s?o=ct(s.from||r,s.default,!0):o=ct(s.from||r):o=ct(s),_e(o)&&i?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function rc(e,t,n){Xe(B(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function yu(e,t,n,i){const r=i.includes(".")?pu(n,i):()=>n[i];if(Ie(e)){const s=t[e];H(s)&&Pn(r,s)}else if(H(e))Pn(r,e.bind(n));else if(pe(e))if(B(e))e.forEach(s=>yu(s,t,n,i));else{const s=H(e.handler)?e.handler.bind(n):t[e.handler];H(s)&&Pn(r,s,e)}}function wu(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!r.length&&!n&&!i?c=t:(c={},r.length&&r.forEach(l=>mr(c,l,o,!0)),mr(c,t,o)),s.set(t,c),c}function mr(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&mr(e,s,n,!0),r&&r.forEach(o=>mr(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=qp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const qp={data:sc,props:Gt,emits:Gt,methods:Gt,computed:Gt,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Gt,directives:Gt,watch:zp,provide:sc,inject:Wp};function sc(e,t){return t?e?function(){return Pe(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Wp(e,t){return Gt(Qs(e),Qs(t))}function Qs(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Se(e,t){return e?[...new Set([].concat(e,t))]:t}function Gt(e,t){return e?Pe(Pe(Object.create(null),e),t):t}function zp(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const i in t)n[i]=Se(e[i],t[i]);return n}function Gp(e,t,n,i=!1){const r={},s={};fr(s,qr,1),e.propsDefaults=Object.create(null),Iu(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:op(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function Xp(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=Y(r),[c]=e.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const g=t[d];if(c)if(J(s,d))g!==s[d]&&(s[d]=g,l=!0);else{const I=ht(d);r[I]=Zs(c,a,I,g,e,!1)}else g!==s[d]&&(s[d]=g,l=!0)}}}else{Iu(e,t,r,s)&&(l=!0);let u;for(const h in a)(!t||!J(t,h)&&((u=Fn(h))===h||!J(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Zs(c,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!J(t,h)&&!0)&&(delete s[h],l=!0)}l&&Et(e,"set","$attrs")}function Iu(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(rr(c))continue;const l=t[c];let u;r&&J(r,u=ht(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ko(e.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=Y(n),l=a||ie;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Zs(r,c,h,l[h],e,!J(l,h))}}return o}function Zs(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=J(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=r;n in l?i=l[n]:(Ln(r),i=l[n]=c.call(null,t),nn())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Fn(n))&&(i=!0))}return i}function Eu(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let c=!1;if(!H(e)){const u=h=>{c=!0;const[d,g]=Eu(h,t,!0);Pe(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return i.set(e,Sn),Sn;if(B(s))for(let u=0;u<s.length;u++){const h=ht(s[u]);oc(h)&&(o[h]=ie)}else if(s)for(const u in s){const h=ht(u);if(oc(h)){const d=s[u],g=o[h]=B(d)||H(d)?{type:d}:d;if(g){const I=lc(Boolean,g.type),L=lc(String,g.type);g[0]=I>-1,g[1]=L<0||I<L,(I>-1||J(g,"default"))&&a.push(h)}}}const l=[o,a];return i.set(e,l),l}function oc(e){return e[0]!=="$"}function ac(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function cc(e,t){return ac(e)===ac(t)}function lc(e,t){return B(t)?t.findIndex(n=>cc(n,e)):H(t)&&cc(t,e)?0:-1}const bu=e=>e[0]==="_"||e==="$stable",zo=e=>B(e)?e.map(We):[We(e)],Jp=(e,t,n)=>{const i=_p((...r)=>zo(t(...r)),n);return i._c=!1,i},Tu=(e,t,n)=>{const i=e._ctx;for(const r in e){if(bu(r))continue;const s=e[r];if(H(s))t[r]=Jp(r,s,i);else if(s!=null){const o=zo(s);t[r]=()=>o}}},Au=(e,t)=>{const n=zo(t);e.slots.default=()=>n},Yp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),fr(t,"_",n)):Tu(t,e.slots={})}else e.slots={},t&&Au(e,t);fr(e.slots,qr,1)},Qp=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Pe(r,t),!n&&a===1&&delete r._):(s=!t.$stable,Tu(t,r)),o=t}else t&&(Au(e,t),o={default:1});if(s)for(const a in r)!bu(a)&&!(a in o)&&delete r[a]};function Rb(e,t){const n=ze;if(n===null)return e;const i=n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,c,l=ie]=t[s];H(o)&&(o={mounted:o,updated:o}),o.deep&&Yt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function Wt(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(jn(),Xe(c,n,8,[e.el,a,e,t]),$n())}}function Su(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zp=0;function eg(e,t){return function(i,r=null){r!=null&&!pe(r)&&(r=null);const s=Su(),o=new Set;let a=!1;const c=s.app={_uid:Zp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:bg,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=Ne(i,r);return d.appContext=s,u&&t?t(d,l):e(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Jo(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function eo(e,t,n,i,r=!1){if(B(e)){e.forEach((d,g)=>eo(d,t&&(B(t)?t[g]:t),n,i,r));return}if(Js(i)&&!r)return;const s=i.shapeFlag&4?Jo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ie(l)?(u[l]=null,J(h,l)&&(h[l]=null)):_e(l)&&(l.value=null)),H(c))Bt(c,a,12,[o,u]);else{const d=Ie(c),g=_e(c);if(d||g){const I=()=>{if(e.f){const L=d?u[c]:c.value;r?B(L)&&Do(L,s):B(L)?L.includes(s)||L.push(s):d?u[c]=[s]:(c.value=[s],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,J(h,c)&&(h[c]=o)):_e(c)&&(c.value=o,e.k&&(u[e.k]=o))};o?(I.id=-1,ke(I,n)):I()}}}const ke=Op;function tg(e){return ng(e)}function ng(e,t){const n=Dd();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ge,cloneNode:I,insertStaticContent:L}=e,O=(f,p,m,y=null,_=null,b=null,C=!1,E=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!Mt(f,p)&&(y=M(f),He(f,_,b,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:w,ref:x,shapeFlag:D}=p;switch(w){case Go:P(f,p,m,y);break;case sn:T(f,p,m,y);break;case ar:f==null&&k(p,m,y,C);break;case vt:dt(f,p,m,y,_,b,C,E,A);break;default:D&1?X(f,p,m,y,_,b,C,E,A):D&6?et(f,p,m,y,_,b,C,E,A):(D&64||D&128)&&w.process(f,p,m,y,_,b,C,E,A,se)}x!=null&&_&&eo(x,f&&f.ref,b,p||f,!p)},P=(f,p,m,y)=>{if(f==null)i(p.el=a(p.children),m,y);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},T=(f,p,m,y)=>{f==null?i(p.el=c(p.children||""),m,y):p.el=f.el},k=(f,p,m,y)=>{[f.el,f.anchor]=L(f.children,p,m,y,f.el,f.anchor)},V=({el:f,anchor:p},m,y)=>{let _;for(;f&&f!==p;)_=d(f),i(f,m,y),f=_;i(p,m,y)},G=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},X=(f,p,m,y,_,b,C,E,A)=>{C=C||p.type==="svg",f==null?ue(p,m,y,_,b,C,E,A):be(f,p,_,b,C,E,A)},ue=(f,p,m,y,_,b,C,E)=>{let A,w;const{type:x,props:D,shapeFlag:U,transition:$,patchFlag:z,dirs:ae}=f;if(f.el&&I!==void 0&&z===-1)A=f.el=I(f.el);else{if(A=f.el=o(f.type,b,D&&D.is,D),U&8?u(A,f.children):U&16&&le(f.children,A,null,y,_,b&&x!=="foreignObject",C,E),ae&&Wt(f,null,y,"created"),D){for(const oe in D)oe!=="value"&&!rr(oe)&&s(A,oe,null,D[oe],b,f.children,y,_,S);"value"in D&&s(A,"value",null,D.value),(w=D.onVnodeBeforeMount)&&it(w,y,f)}me(A,f,f.scopeId,C,y)}ae&&Wt(f,null,y,"beforeMount");const te=(!_||_&&!_.pendingBranch)&&$&&!$.persisted;te&&$.beforeEnter(A),i(A,p,m),((w=D&&D.onVnodeMounted)||te||ae)&&ke(()=>{w&&it(w,y,f),te&&$.enter(A),ae&&Wt(f,null,y,"mounted")},_)},me=(f,p,m,y,_)=>{if(m&&g(f,m),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(_){let b=_.subTree;if(p===b){const C=_.vnode;me(f,C,C.scopeId,C.slotScopeIds,_.parent)}}},le=(f,p,m,y,_,b,C,E,A=0)=>{for(let w=A;w<f.length;w++){const x=f[w]=E?Nt(f[w]):We(f[w]);O(null,x,p,m,y,_,b,C,E)}},be=(f,p,m,y,_,b,C)=>{const E=p.el=f.el;let{patchFlag:A,dynamicChildren:w,dirs:x}=p;A|=f.patchFlag&16;const D=f.props||ie,U=p.props||ie;let $;m&&zt(m,!1),($=U.onVnodeBeforeUpdate)&&it($,m,p,f),x&&Wt(p,f,m,"beforeUpdate"),m&&zt(m,!0);const z=_&&p.type!=="foreignObject";if(w?de(f.dynamicChildren,w,E,m,y,z,b):C||Me(f,p,E,null,m,y,z,b,!1),A>0){if(A&16)Be(E,p,D,U,m,y,_);else if(A&2&&D.class!==U.class&&s(E,"class",null,U.class,_),A&4&&s(E,"style",D.style,U.style,_),A&8){const ae=p.dynamicProps;for(let te=0;te<ae.length;te++){const oe=ae[te],qe=D[oe],mn=U[oe];(mn!==qe||oe==="value")&&s(E,oe,qe,mn,_,f.children,m,y,S)}}A&1&&f.children!==p.children&&u(E,p.children)}else!C&&w==null&&Be(E,p,D,U,m,y,_);(($=U.onVnodeUpdated)||x)&&ke(()=>{$&&it($,m,p,f),x&&Wt(p,f,m,"updated")},y)},de=(f,p,m,y,_,b,C)=>{for(let E=0;E<p.length;E++){const A=f[E],w=p[E],x=A.el&&(A.type===vt||!Mt(A,w)||A.shapeFlag&70)?h(A.el):m;O(A,w,x,null,y,_,b,C,!0)}},Be=(f,p,m,y,_,b,C)=>{if(m!==y){for(const E in y){if(rr(E))continue;const A=y[E],w=m[E];A!==w&&E!=="value"&&s(f,E,w,A,C,p.children,_,b,S)}if(m!==ie)for(const E in m)!rr(E)&&!(E in y)&&s(f,E,m[E],null,C,p.children,_,b,S);"value"in y&&s(f,"value",m.value,y.value)}},dt=(f,p,m,y,_,b,C,E,A)=>{const w=p.el=f?f.el:a(""),x=p.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:$}=p;$&&(E=E?E.concat($):$),f==null?(i(w,m,y),i(x,m,y),le(p.children,m,x,_,b,C,E,A)):D>0&&D&64&&U&&f.dynamicChildren?(de(f.dynamicChildren,U,m,_,b,C,E),(p.key!=null||_&&p===_.subTree)&&Cu(f,p,!0)):Me(f,p,m,x,_,b,C,E,A)},et=(f,p,m,y,_,b,C,E,A)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?_.ctx.activate(p,m,y,C,A):pn(p,m,y,_,b,C,A):he(f,p,A)},pn=(f,p,m,y,_,b,C)=>{const E=f.component=mg(f,y,_);if(mu(f)&&(E.ctx.renderer=se),vg(E),E.asyncDep){if(_&&_.registerDep(E,re),!f.el){const A=E.subTree=Ne(sn);T(null,A,p,m)}return}re(E,f,p,m,_,b,C)},he=(f,p,m)=>{const y=p.component=f.component;if(Ep(f,p,m))if(y.asyncDep&&!y.asyncResolved){Z(y,p,m);return}else y.next=p,gp(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},re=(f,p,m,y,_,b,C)=>{const E=()=>{if(f.isMounted){let{next:x,bu:D,u:U,parent:$,vnode:z}=f,ae=x,te;zt(f,!1),x?(x.el=z.el,Z(f,x,C)):x=z,D&&sr(D),(te=x.props&&x.props.onVnodeBeforeUpdate)&&it(te,$,x,z),zt(f,!0);const oe=ys(f),qe=f.subTree;f.subTree=oe,O(qe,oe,h(qe.el),M(qe),f,_,b),x.el=oe.el,ae===null&&qo(f,oe.el),U&&ke(U,_),(te=x.props&&x.props.onVnodeUpdated)&&ke(()=>it(te,$,x,z),_)}else{let x;const{el:D,props:U}=p,{bm:$,m:z,parent:ae}=f,te=Js(p);if(zt(f,!1),$&&sr($),!te&&(x=U&&U.onVnodeBeforeMount)&&it(x,ae,p),zt(f,!0),D&&K){const oe=()=>{f.subTree=ys(f),K(D,f.subTree,f,_,null)};te?p.type.__asyncLoader().then(()=>!f.isUnmounted&&oe()):oe()}else{const oe=f.subTree=ys(f);O(null,oe,m,y,f,_,b),p.el=oe.el}if(z&&ke(z,_),!te&&(x=U&&U.onVnodeMounted)){const oe=p;ke(()=>it(x,ae,oe),_)}p.shapeFlag&256&&f.a&&ke(f.a,_),f.isMounted=!0,p=m=y=null}},A=f.effect=new xo(E,()=>ou(f.update),f.scope),w=f.update=A.run.bind(A);w.id=f.uid,zt(f,!0),w()},Z=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Xp(f,p.props,y,m),Qp(f,p.children,m),jn(),Vo(void 0,f.update),$n()},Me=(f,p,m,y,_,b,C,E,A=!1)=>{const w=f&&f.children,x=f?f.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:$}=p;if(U>0){if(U&128){pt(w,D,m,y,_,b,C,E,A);return}else if(U&256){gn(w,D,m,y,_,b,C,E,A);return}}$&8?(x&16&&S(w,_,b),D!==w&&u(m,D)):x&16?$&16?pt(w,D,m,y,_,b,C,E,A):S(w,_,b,!0):(x&8&&u(m,""),$&16&&le(D,m,y,_,b,C,E,A))},gn=(f,p,m,y,_,b,C,E,A)=>{f=f||Sn,p=p||Sn;const w=f.length,x=p.length,D=Math.min(w,x);let U;for(U=0;U<D;U++){const $=p[U]=A?Nt(p[U]):We(p[U]);O(f[U],$,m,null,_,b,C,E,A)}w>x?S(f,_,b,!0,!1,D):le(p,m,y,_,b,C,E,A,D)},pt=(f,p,m,y,_,b,C,E,A)=>{let w=0;const x=p.length;let D=f.length-1,U=x-1;for(;w<=D&&w<=U;){const $=f[w],z=p[w]=A?Nt(p[w]):We(p[w]);if(Mt($,z))O($,z,m,null,_,b,C,E,A);else break;w++}for(;w<=D&&w<=U;){const $=f[D],z=p[U]=A?Nt(p[U]):We(p[U]);if(Mt($,z))O($,z,m,null,_,b,C,E,A);else break;D--,U--}if(w>D){if(w<=U){const $=U+1,z=$<x?p[$].el:y;for(;w<=U;)O(null,p[w]=A?Nt(p[w]):We(p[w]),m,z,_,b,C,E,A),w++}}else if(w>U)for(;w<=D;)He(f[w],_,b,!0),w++;else{const $=w,z=w,ae=new Map;for(w=z;w<=U;w++){const xe=p[w]=A?Nt(p[w]):We(p[w]);xe.key!=null&&ae.set(xe.key,w)}let te,oe=0;const qe=U-z+1;let mn=!1,qa=0;const Xn=new Array(qe);for(w=0;w<qe;w++)Xn[w]=0;for(w=$;w<=D;w++){const xe=f[w];if(oe>=qe){He(xe,_,b,!0);continue}let nt;if(xe.key!=null)nt=ae.get(xe.key);else for(te=z;te<=U;te++)if(Xn[te-z]===0&&Mt(xe,p[te])){nt=te;break}nt===void 0?He(xe,_,b,!0):(Xn[nt-z]=w+1,nt>=qa?qa=nt:mn=!0,O(xe,p[nt],m,null,_,b,C,E,A),oe++)}const Wa=mn?ig(Xn):Sn;for(te=Wa.length-1,w=qe-1;w>=0;w--){const xe=z+w,nt=p[xe],za=xe+1<x?p[xe+1].el:y;Xn[w]===0?O(null,nt,m,za,_,b,C,E,A):mn&&(te<0||w!==Wa[te]?tt(nt,m,za,2):te--)}}},tt=(f,p,m,y,_=null)=>{const{el:b,type:C,transition:E,children:A,shapeFlag:w}=f;if(w&6){tt(f.component.subTree,p,m,y);return}if(w&128){f.suspense.move(p,m,y);return}if(w&64){C.move(f,p,m,se);return}if(C===vt){i(b,p,m);for(let D=0;D<A.length;D++)tt(A[D],p,m,y);i(f.anchor,p,m);return}if(C===ar){V(f,p,m);return}if(y!==2&&w&1&&E)if(y===0)E.beforeEnter(b),i(b,p,m),ke(()=>E.enter(b),_);else{const{leave:D,delayLeave:U,afterLeave:$}=E,z=()=>i(b,p,m),ae=()=>{D(b,()=>{z(),$&&$()})};U?U(b,z,ae):ae()}else i(b,p,m)},He=(f,p,m,y=!1,_=!1)=>{const{type:b,props:C,ref:E,children:A,dynamicChildren:w,shapeFlag:x,patchFlag:D,dirs:U}=f;if(E!=null&&eo(E,null,m,f,!0),x&256){p.ctx.deactivate(f);return}const $=x&1&&U,z=!Js(f);let ae;if(z&&(ae=C&&C.onVnodeBeforeUnmount)&&it(ae,p,f),x&6)N(f.component,m,y);else{if(x&128){f.suspense.unmount(m,y);return}$&&Wt(f,null,p,"beforeUnmount"),x&64?f.type.remove(f,p,m,_,se,y):w&&(b!==vt||D>0&&D&64)?S(w,p,m,!1,!0):(b===vt&&D&384||!_&&x&16)&&S(A,p,m),y&&vs(f)}(z&&(ae=C&&C.onVnodeUnmounted)||$)&&ke(()=>{ae&&it(ae,p,f),$&&Wt(f,null,p,"unmounted")},m)},vs=f=>{const{type:p,el:m,anchor:y,transition:_}=f;if(p===vt){v(m,y);return}if(p===ar){G(f);return}const b=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,A=()=>C(m,b);E?E(f.el,b,A):A()}else b()},v=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},N=(f,p,m)=>{const{bum:y,scope:_,update:b,subTree:C,um:E}=f;y&&sr(y),_.stop(),b&&(b.active=!1,He(C,f,p,m)),E&&ke(E,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(f,p,m,y=!1,_=!1,b=0)=>{for(let C=b;C<f.length;C++)He(f[C],p,m,y,_)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ee=(f,p,m)=>{f==null?p._vnode&&He(p._vnode,null,null,!0):O(p._vnode||null,f,p,null,null,null,m),uu(),p._vnode=f},se={p:O,um:He,m:tt,r:vs,mt:pn,mc:le,pc:Me,pbc:de,n:M,o:e};let q,K;return t&&([q,K]=t(se)),{render:ee,hydrate:q,createApp:eg(ee,q)}}function zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cu(e,t,n=!1){const i=e.children,r=t.children;if(B(i)&&B(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Nt(r[s]),a.el=o.el),n||Cu(o,a))}}function ig(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const l=e[i];if(l!==0){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const rg=e=>e.__isTeleport,Ru="components";function sg(e,t){return ag(Ru,e,!0,t)||e}const og=Symbol();function ag(e,t,n=!0,i=!1){const r=ze||ve;if(r){const s=r.type;if(e===Ru){const a=Ig(s);if(a&&(a===t||a===ht(t)||a===Br(ht(t))))return s}const o=uc(r[e]||s[e],t)||uc(r.appContext[e],t);return!o&&i?s:o}}function uc(e,t){return e&&(e[t]||e[ht(t)]||e[Br(ht(t))])}const vt=Symbol(void 0),Go=Symbol(void 0),sn=Symbol(void 0),ar=Symbol(void 0),ci=[];let Ht=null;function Ou(e=!1){ci.push(Ht=e?null:[])}function Pu(){ci.pop(),Ht=ci[ci.length-1]||null}let wi=1;function hc(e){wi+=e}function ku(e){return e.dynamicChildren=wi>0?Ht||Sn:null,Pu(),wi>0&&Ht&&Ht.push(e),e}function Ob(e,t,n,i,r,s){return ku(Nu(e,t,n,i,r,s,!0))}function cg(e,t,n,i,r){return ku(Ne(e,t,n,i,r,!0))}function vr(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const qr="__vInternal",Du=({key:e})=>e!=null?e:null,cr=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||_e(e)||H(e)?{i:ze,r:e,k:t,f:!!n}:e:null;function Nu(e,t=null,n=null,i=0,r=null,s=e===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Du(t),ref:t&&cr(t),scopeId:Vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Xo(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),wi>0&&!o&&Ht&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ht.push(c),c}const Ne=lg;function lg(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===og)&&(e=sn),vr(e)){const a=Ii(e,t,!0);return n&&Xo(a,n),a}if(Eg(e)&&(e=e.__vccOpts),t){t=ug(t);let{class:a,style:c}=t;a&&!Ie(a)&&(t.class=Po(a)),pe(c)&&(Ql(c)&&!B(c)&&(c=Pe({},c)),t.style=Oo(c))}const o=Ie(e)?1:bp(e)?128:rg(e)?64:pe(e)?4:H(e)?2:0;return Nu(e,t,n,i,r,o,s,!0)}function ug(e){return e?Ql(e)||qr in e?Pe({},e):e:null}function Ii(e,t,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=e,a=t?fg(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Du(a),ref:t&&t.ref?n&&r?B(r)?r.concat(cr(t)):[r,cr(t)]:cr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==vt?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ii(e.ssContent),ssFallback:e.ssFallback&&Ii(e.ssFallback),el:e.el,anchor:e.anchor}}function hg(e=" ",t=0){return Ne(Go,null,e,t)}function Pb(e,t){const n=Ne(ar,null,e);return n.staticCount=t,n}function We(e){return e==null||typeof e=="boolean"?Ne(sn):B(e)?Ne(vt,null,e.slice()):typeof e=="object"?Nt(e):Ne(Go,null,String(e))}function Nt(e){return e.el===null||e.memo?e:Ii(e)}function Xo(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Xo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(qr in t)?t._ctx=ze:r===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),i&64?(n=16,t=[hg(t)]):n=8);e.children=t,e.shapeFlag|=n}function fg(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Po([t.class,i.class]));else if(r==="style")t.style=Oo([t.style,i.style]);else if(Fr(r)){const s=t[r],o=i[r];o&&s!==o&&!(B(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function it(e,t,n,i=null){Xe(e,t,7,[n,i])}const to=e=>e?Lu(e)?Jo(e)||e.proxy:to(e.parent):null,_r=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$emit:e=>e.emit,$options:e=>wu(e),$forceUpdate:e=>()=>ou(e.update),$nextTick:e=>su.bind(e.proxy),$watch:e=>Pp.bind(e)}),dg={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(i!==ie&&J(i,t))return o[t]=1,i[t];if(r!==ie&&J(r,t))return o[t]=2,r[t];if((l=e.propsOptions[0])&&J(l,t))return o[t]=3,s[t];if(n!==ie&&J(n,t))return o[t]=4,n[t];Ys&&(o[t]=0)}}const u=_r[t];let h,d;if(u)return t==="$attrs"&&$e(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==ie&&J(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,J(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return r!==ie&&J(r,t)?(r[t]=n,!0):i!==ie&&J(i,t)?(i[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==ie&&J(e,o)||t!==ie&&J(t,o)||(a=s[0])&&J(a,o)||J(i,o)||J(_r,o)||J(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},pg=Su();let gg=0;function mg(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||pg,s={uid:gg++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eu(i,r),emitsOptions:fu(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=vp.bind(null,s),e.ce&&e.ce(s),s}let ve=null;const Ln=e=>{ve=e,e.scope.on()},nn=()=>{ve&&ve.scope.off(),ve=null};function Lu(e){return e.vnode.shapeFlag&4}let Ei=!1;function vg(e,t=!1){Ei=t;const{props:n,children:i}=e.vnode,r=Lu(e);Gp(e,n,r,t),Yp(e,i);const s=r?_g(e,t):void 0;return Ei=!1,s}function _g(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zl(new Proxy(e.ctx,dg));const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?wg(e):null;Ln(e),jn();const s=Bt(i,e,0,[e.props,r]);if($n(),nn(),Ul(s)){if(s.then(nn,nn),t)return s.then(o=>{no(e,o,t)}).catch(o=>{Mi(o,e,0)});e.asyncDep=s}else no(e,s,t)}else Mu(e,t)}function no(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=iu(t)),Mu(e,n)}let fc;function Mu(e,t,n){const i=e.type;if(!e.render){if(!t&&fc&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Pe(Pe({isCustomElement:s,delimiters:a},o),c);i.render=fc(r,l)}}e.render=i.render||Ge}Ln(e),jn(),Vp(e),$n(),nn()}function yg(e){return new Proxy(e.attrs,{get(t,n){return $e(e,"get","$attrs"),t[n]}})}function wg(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=yg(e))},slots:e.slots,emit:e.emit,expose:t}}function Jo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(iu(Zl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _r)return _r[n](e)}}))}function Ig(e){return H(e)&&e.displayName||e.name}function Eg(e){return H(e)&&"__vccOpts"in e}const rt=(e,t)=>fp(e,t,Ei);function xu(e,t,n){const i=arguments.length;return i===2?pe(t)&&!B(t)?vr(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vr(n)&&(n=[n]),Ne(e,t,n))}const bg="3.2.31",Tg="http://www.w3.org/2000/svg",Jt=typeof document!="undefined"?document:null,dc=Jt&&Jt.createElement("template"),Ag={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?Jt.createElementNS(Tg,e):Jt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Jt.createTextNode(e),createComment:e=>Jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{dc.innerHTML=i?`<svg>${e}</svg>`:e;const a=dc.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Sg(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Cg(e,t,n){const i=e.style,r=Ie(n);if(n&&!r){for(const s in n)io(i,s,n[s]);if(t&&!Ie(t))for(const s in t)n[s]==null&&io(i,s,"")}else{const s=i.display;r?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=s)}}const pc=/\s*!important$/;function io(e,t,n){if(B(n))n.forEach(i=>io(e,t,i));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Rg(e,t);pc.test(n)?e.setProperty(Fn(i),n.replace(pc,""),"important"):e[i]=n}}const gc=["Webkit","Moz","ms"],ws={};function Rg(e,t){const n=ws[t];if(n)return n;let i=ht(t);if(i!=="filter"&&i in e)return ws[t]=i;i=Br(i);for(let r=0;r<gc.length;r++){const s=gc[r]+i;if(s in e)return ws[t]=s}return t}const mc="http://www.w3.org/1999/xlink";function Og(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(mc,t.slice(6,t.length)):e.setAttributeNS(mc,t,n);else{const s=Ed(t);n==null||s&&!Ll(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Pg(e,t,n,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=Ll(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let yr=Date.now,Uu=!1;if(typeof window!="undefined"){yr()>document.createEvent("Event").timeStamp&&(yr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Uu=!!(e&&Number(e[1])<=53)}let ro=0;const kg=Promise.resolve(),Dg=()=>{ro=0},Ng=()=>ro||(kg.then(Dg),ro=yr());function En(e,t,n,i){e.addEventListener(t,n,i)}function Lg(e,t,n,i){e.removeEventListener(t,n,i)}function Mg(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[a,c]=xg(t);if(i){const l=s[t]=Ug(i,r);En(e,a,l,c)}else o&&(Lg(e,a,o,c),s[t]=void 0)}}const vc=/(?:Once|Passive|Capture)$/;function xg(e){let t;if(vc.test(e)){t={};let n;for(;n=e.match(vc);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Fn(e.slice(2)),t]}function Ug(e,t){const n=i=>{const r=i.timeStamp||yr();(Uu||r>=n.attached-1)&&Xe(Fg(i,n.value),t,5,[i])};return n.value=e,n.attached=Ng(),n}function Fg(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const _c=/^on[a-z]/,jg=(e,t,n,i,r=!1,s,o,a,c)=>{t==="class"?Sg(e,i,r):t==="style"?Cg(e,n,i):Fr(t)?ko(t)||Mg(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$g(e,t,i,r))?Pg(e,t,i,s,o,a,c):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Og(e,t,i,r))};function $g(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&_c.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_c.test(t)&&Ie(n)?!1:t in e}const yc=e=>{const t=e.props["onUpdate:modelValue"];return B(t)?n=>sr(t,n):t};function Bg(e){e.target.composing=!0}function wc(e){const t=e.target;t.composing&&(t.composing=!1,Hg(t,"input"))}function Hg(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const kb={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e._assign=yc(r);const s=i||r.props&&r.props.type==="number";En(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():s&&(a=dr(a)),e._assign(a)}),n&&En(e,"change",()=>{e.value=e.value.trim()}),t||(En(e,"compositionstart",Bg),En(e,"compositionend",wc),En(e,"change",wc))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e._assign=yc(s),e.composing||document.activeElement===e&&(n||i&&e.value.trim()===t||(r||e.type==="number")&&dr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Vg=["ctrl","shift","alt","meta"],Kg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Vg.some(n=>e[`${n}Key`]&&!t.includes(n))},Db=(e,t)=>(n,...i)=>{for(let r=0;r<t.length;r++){const s=Kg[t[r]];if(s&&s(n,t))return}return e(n,...i)},qg=Pe({patchProp:jg},Ag);let Ic;function Wg(){return Ic||(Ic=tg(qg))}const zg=(...e)=>{const t=Wg().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=Gg(i);if(!r)return;const s=t._component;!H(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Gg(e){return Ie(e)?document.querySelector(e):e}const Xg="modulepreload",Ec={},Jg="/",gt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${Jg}${i}`,i in Ec)return;Ec[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Xg,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Yg(){return Fu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Fu(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Qg=typeof Proxy=="function",Zg="devtools-plugin:setup",em="plugin:settings:set";let vn,so;function tm(){var e;return vn!==void 0||(typeof window!="undefined"&&window.performance?(vn=!0,so=window.performance):typeof global!="undefined"&&((e=global.perf_hooks)===null||e===void 0?void 0:e.performance)?(vn=!0,so=global.perf_hooks.performance):vn=!1),vn}function nm(){return tm()?so.now():Date.now()}class im{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const i={};if(t.settings)for(const o in t.settings){const a=t.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return nm()}},n&&n.on(em,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function rm(e,t){const n=e,i=Fu(),r=Yg(),s=Qg&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(Zg,e,t);else{const o=s?new im(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ju=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Hn=e=>ju?Symbol(e):"_vr_"+e,sm=Hn("rvlm"),bc=Hn("rvd"),Wr=Hn("r"),$u=Hn("rl"),oo=Hn("rvl"),bn=typeof window!="undefined";function om(e){return e.__esModule||ju&&e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Is(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const li=()=>{},am=/\/$/,cm=e=>e.replace(am,"");function Es(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),r=e(s)),c>-1&&(i=i||t.slice(0,c),o=t.slice(c,t.length)),i=fm(i!=null?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function lm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Tc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function um(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Mn(t.matched[i],n.matched[r])&&Bu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Bu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!hm(e[n],t[n]))return!1;return!0}function hm(e,t){return Array.isArray(e)?Ac(e,t):Array.isArray(t)?Ac(t,e):e===t}function Ac(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function fm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var bi;(function(e){e.pop="pop",e.push="push"})(bi||(bi={}));var ui;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ui||(ui={}));function dm(e){if(!e)if(bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cm(e)}const pm=/^[^#]+#/;function gm(e,t){return e.replace(pm,"#")+t}function mm(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const zr=()=>({left:window.pageXOffset,top:window.pageYOffset});function vm(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=mm(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Sc(e,t){return(history.state?history.state.position-t:-1)+e}const ao=new Map;function _m(e,t){ao.set(e,t)}function ym(e){const t=ao.get(e);return ao.delete(e),t}let wm=()=>location.protocol+"//"+location.host;function Hu(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Tc(c,"")}return Tc(n,e)+i+r}function Im(e,t,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const g=Hu(e,location),I=n.value,L=t.value;let O=0;if(d){if(n.value=g,t.value=d,o&&o===I){o=null;return}O=L?d.position-L.position:0}else i(g);r.forEach(P=>{P(n.value,I,{delta:O,type:bi.pop,direction:O?O>0?ui.forward:ui.back:ui.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const I=r.indexOf(d);I>-1&&r.splice(I,1)};return s.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ne({},d.state,{scroll:zr()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Cc(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?zr():null}}function Em(e){const{history:t,location:n}=window,i={value:Hu(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:wm()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ne({},t.state,Cc(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=ne({},r.value,t.state,{forward:c,scroll:zr()});s(u.current,u,!0);const h=ne({},Cc(i.value,c,null),{position:u.position+1},l);s(c,h,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function bm(e){e=dm(e);const t=Em(e),n=Im(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ne({location:"",base:e,go:i,createHref:gm.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Tm(e){return typeof e=="string"||e&&typeof e=="object"}function Vu(e){return typeof e=="string"||typeof e=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ku=Hn("nf");var Rc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rc||(Rc={}));function xn(e,t){return ne(new Error,{type:e,[Ku]:!0},t)}function Pt(e,t){return e instanceof Error&&Ku in e&&(t==null||!!(e.type&t))}const Oc="[^/]+?",Am={sensitive:!1,strict:!1,start:!0,end:!0},Sm=/[.+*?^${}()[\]/\\]/g;function Cm(e,t){const n=ne({},Am,t),i=[];let r=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Sm,"\\$&"),g+=40;else if(d.type===1){const{value:I,repeatable:L,optional:O,regexp:P}=d;s.push({name:I,repeatable:L,optional:O});const T=P||Oc;if(T!==Oc){g+=10;try{new RegExp(`(${T})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${I}" (${T}): `+V.message)}}let k=L?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(k=O&&l.length<2?`(?:/${k})`:"/"+k),O&&(k+="?"),r+=k,g+=20,O&&(g+=-8),L&&(g+=-20),T===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",I=s[d-1];h[I.name]=g&&I.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:I,repeatable:L,optional:O}=g,P=I in l?l[I]:"";if(Array.isArray(P)&&!L)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const T=Array.isArray(P)?P.join("/"):P;if(!T)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${I}"`);u+=T}}return u}return{re:o,score:i,keys:s,parse:a,stringify:c}}function Rm(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Om(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=Rm(i[n],r[n]);if(s)return s;n++}return r.length-i.length}const Pm={type:0,value:""},km=/[a-zA-Z0-9_]/;function Dm(e){if(!e)return[[]];if(e==="/")return[[Pm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:c==="("?n=2:km.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Nm(e,t,n){const i=Cm(Dm(e.path),n),r=ne(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Lm(e,t){const n=[],i=new Map;t=kc({strict:!1,end:!0,sensitive:!1},t);function r(u){return i.get(u)}function s(u,h,d){const g=!d,I=xm(u);I.aliasOf=d&&d.record;const L=kc(t,u),O=[I];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of k)O.push(ne({},I,{components:d?d.record.components:I.components,path:V,aliasOf:d?d.record:I}))}let P,T;for(const k of O){const{path:V}=k;if(h&&V[0]!=="/"){const G=h.record.path,X=G[G.length-1]==="/"?"":"/";k.path=h.record.path+(V&&X+V)}if(P=Nm(k,h,L),d?d.alias.push(P):(T=T||P,T!==P&&T.alias.push(P),g&&u.name&&!Pc(P)&&o(u.name)),"children"in I){const G=I.children;for(let X=0;X<G.length;X++)s(G[X],P,d&&d.children[X])}d=d||P,c(P)}return T?()=>{o(T)}:li}function o(u){if(Vu(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Om(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Pc(u)&&i.set(u.record.name,u)}function l(u,h){let d,g={},I,L;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw xn(1,{location:u});L=d.record.name,g=ne(Mm(h.params,d.keys.filter(T=>!T.optional).map(T=>T.name)),u.params),I=d.stringify(g)}else if("path"in u)I=u.path,d=n.find(T=>T.re.test(I)),d&&(g=d.parse(I),L=d.record.name);else{if(d=h.name?i.get(h.name):n.find(T=>T.re.test(h.path)),!d)throw xn(1,{location:u,currentLocation:h});L=d.record.name,g=ne({},h.params,u.params),I=d.stringify(g)}const O=[];let P=d;for(;P;)O.unshift(P.record),P=P.parent;return{name:L,path:I,params:g,matched:O,meta:Fm(O)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Mm(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function xm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Um(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Um(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function Pc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fm(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function kc(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function qu(e,t){return t.children.some(n=>n===e||qu(e,n))}const Wu=/#/g,jm=/&/g,$m=/\//g,Bm=/=/g,Hm=/\?/g,zu=/\+/g,Vm=/%5B/g,Km=/%5D/g,Gu=/%5E/g,qm=/%60/g,Xu=/%7B/g,Wm=/%7C/g,Ju=/%7D/g,zm=/%20/g;function Yo(e){return encodeURI(""+e).replace(Wm,"|").replace(Vm,"[").replace(Km,"]")}function Gm(e){return Yo(e).replace(Xu,"{").replace(Ju,"}").replace(Gu,"^")}function co(e){return Yo(e).replace(zu,"%2B").replace(zm,"+").replace(Wu,"%23").replace(jm,"%26").replace(qm,"`").replace(Xu,"{").replace(Ju,"}").replace(Gu,"^")}function Xm(e){return co(e).replace(Bm,"%3D")}function Jm(e){return Yo(e).replace(Wu,"%23").replace(Hm,"%3F")}function Ym(e){return e==null?"":Jm(e).replace($m,"%2F")}function wr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Qm(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(zu," "),o=s.indexOf("="),a=wr(o<0?s:s.slice(0,o)),c=o<0?null:wr(s.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Dc(e){let t="";for(let n in e){const i=e[n];if(n=Xm(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map(s=>s&&co(s)):[i&&co(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Zm(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}function Jn(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Lt(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xn(4,{from:n,to:t})):h instanceof Error?a(h):Tm(h)?a(xn(2,{from:t,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},l=e.call(i&&i.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function bs(e,t,n,i){const r=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(ev(a)){const l=(a.__vccOpts||a)[t];l&&r.push(Lt(l,n,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=om(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&Lt(d,n,i,s,o)()}))}}return r}function ev(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nc(e){const t=ct(Wr),n=ct($u),i=rt(()=>t.resolve(si(e.to))),r=rt(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Mn.bind(null,u));if(d>-1)return d;const g=Lc(c[l-2]);return l>1&&Lc(u)===g&&h[h.length-1].path!==g?h.findIndex(Mn.bind(null,c[l-2])):d}),s=rt(()=>r.value>-1&&rv(n.params,i.value.params)),o=rt(()=>r.value>-1&&r.value===n.matched.length-1&&Bu(n.params,i.value.params));function a(c={}){return iv(c)?t[si(e.replace)?"replace":"push"](si(e.to)).catch(li):Promise.resolve()}return{route:i,href:rt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const tv=gu({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nc,setup(e,{slots:t}){const n=Bn(Nc(e)),{options:i}=ct(Wr),r=rt(()=>({[Mc(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Mc(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:xu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),nv=tv;function iv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rv(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Lc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Mc=(e,t,n)=>e!=null?e:t!=null?t:n,sv=gu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=ct(oo),r=rt(()=>e.route||i.value),s=ct(bc,0),o=rt(()=>r.value.matched[s]);or(bc,s+1),or(sm,o),or(oo,r);const a=ap();return Pn(()=>[a.value,o.value,e.name],([c,l,u],[h,d,g])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!Mn(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[e.name],h=e.name;if(!u)return xc(n.default,{Component:u,route:c});const d=l.props[e.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,L=xu(u,ne({},g,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return xc(n.default,{Component:L,route:c})||L}}});function xc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ov=sv;function av(e){const t=Lm(e.routes,e),n=e.parseQuery||Qm,i=e.stringifyQuery||Dc,r=e.history,s=Jn(),o=Jn(),a=Jn(),c=cp(Ot);let l=Ot;bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Is.bind(null,v=>""+v),h=Is.bind(null,Ym),d=Is.bind(null,wr);function g(v,N){let S,M;return Vu(v)?(S=t.getRecordMatcher(v),M=N):M=v,t.addRoute(M,S)}function I(v){const N=t.getRecordMatcher(v);N&&t.removeRoute(N)}function L(){return t.getRoutes().map(v=>v.record)}function O(v){return!!t.getRecordMatcher(v)}function P(v,N){if(N=ne({},N||c.value),typeof v=="string"){const K=Es(n,v,N.path),f=t.resolve({path:K.path},N),p=r.createHref(K.fullPath);return ne(K,f,{params:d(f.params),hash:wr(K.hash),redirectedFrom:void 0,href:p})}let S;if("path"in v)S=ne({},v,{path:Es(n,v.path,N.path).path});else{const K=ne({},v.params);for(const f in K)K[f]==null&&delete K[f];S=ne({},v,{params:h(v.params)}),N.params=h(N.params)}const M=t.resolve(S,N),ee=v.hash||"";M.params=u(d(M.params));const se=lm(i,ne({},v,{hash:Gm(ee),path:M.path})),q=r.createHref(se);return ne({fullPath:se,hash:ee,query:i===Dc?Zm(v.query):v.query||{}},M,{redirectedFrom:void 0,href:q})}function T(v){return typeof v=="string"?Es(n,v,c.value.path):ne({},v)}function k(v,N){if(l!==v)return xn(8,{from:N,to:v})}function V(v){return ue(v)}function G(v){return V(ne(T(v),{replace:!0}))}function X(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:S}=N;let M=typeof S=="function"?S(v):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=T(M):{path:M},M.params={}),ne({query:v.query,hash:v.hash,params:v.params},M)}}function ue(v,N){const S=l=P(v),M=c.value,ee=v.state,se=v.force,q=v.replace===!0,K=X(S);if(K)return ue(ne(T(K),{state:ee,force:se,replace:q}),N||S);const f=S;f.redirectedFrom=N;let p;return!se&&um(i,M,S)&&(p=xn(16,{to:f,from:M}),gn(M,M,!0,!1)),(p?Promise.resolve(p):le(f,M)).catch(m=>Pt(m)?Pt(m,2)?m:Me(m):re(m,f,M)).then(m=>{if(m){if(Pt(m,2))return ue(ne(T(m.to),{state:ee,force:se,replace:q}),N||f)}else m=de(f,M,!0,q,ee);return be(f,M,m),m})}function me(v,N){const S=k(v,N);return S?Promise.reject(S):Promise.resolve()}function le(v,N){let S;const[M,ee,se]=cv(v,N);S=bs(M.reverse(),"beforeRouteLeave",v,N);for(const K of M)K.leaveGuards.forEach(f=>{S.push(Lt(f,v,N))});const q=me.bind(null,v,N);return S.push(q),_n(S).then(()=>{S=[];for(const K of s.list())S.push(Lt(K,v,N));return S.push(q),_n(S)}).then(()=>{S=bs(ee,"beforeRouteUpdate",v,N);for(const K of ee)K.updateGuards.forEach(f=>{S.push(Lt(f,v,N))});return S.push(q),_n(S)}).then(()=>{S=[];for(const K of v.matched)if(K.beforeEnter&&!N.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const f of K.beforeEnter)S.push(Lt(f,v,N));else S.push(Lt(K.beforeEnter,v,N));return S.push(q),_n(S)}).then(()=>(v.matched.forEach(K=>K.enterCallbacks={}),S=bs(se,"beforeRouteEnter",v,N),S.push(q),_n(S))).then(()=>{S=[];for(const K of o.list())S.push(Lt(K,v,N));return S.push(q),_n(S)}).catch(K=>Pt(K,8)?K:Promise.reject(K))}function be(v,N,S){for(const M of a.list())M(v,N,S)}function de(v,N,S,M,ee){const se=k(v,N);if(se)return se;const q=N===Ot,K=bn?history.state:{};S&&(M||q?r.replace(v.fullPath,ne({scroll:q&&K&&K.scroll},ee)):r.push(v.fullPath,ee)),c.value=v,gn(v,N,S,q),Me()}let Be;function dt(){Be=r.listen((v,N,S)=>{const M=P(v),ee=X(M);if(ee){ue(ne(ee,{replace:!0}),M).catch(li);return}l=M;const se=c.value;bn&&_m(Sc(se.fullPath,S.delta),zr()),le(M,se).catch(q=>Pt(q,12)?q:Pt(q,2)?(ue(q.to,M).then(K=>{Pt(K,20)&&!S.delta&&S.type===bi.pop&&r.go(-1,!1)}).catch(li),Promise.reject()):(S.delta&&r.go(-S.delta,!1),re(q,M,se))).then(q=>{q=q||de(M,se,!1),q&&(S.delta?r.go(-S.delta,!1):S.type===bi.pop&&Pt(q,20)&&r.go(-1,!1)),be(M,se,q)}).catch(li)})}let et=Jn(),pn=Jn(),he;function re(v,N,S){Me(v);const M=pn.list();return M.length?M.forEach(ee=>ee(v,N,S)):console.error(v),Promise.reject(v)}function Z(){return he&&c.value!==Ot?Promise.resolve():new Promise((v,N)=>{et.add([v,N])})}function Me(v){return he||(he=!v,dt(),et.list().forEach(([N,S])=>v?S(v):N()),et.reset()),v}function gn(v,N,S,M){const{scrollBehavior:ee}=e;if(!bn||!ee)return Promise.resolve();const se=!S&&ym(Sc(v.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return su().then(()=>ee(v,N,se)).then(q=>q&&vm(q)).catch(q=>re(q,v,N))}const pt=v=>r.go(v);let tt;const He=new Set;return{currentRoute:c,addRoute:g,removeRoute:I,hasRoute:O,getRoutes:L,resolve:P,options:e,push:V,replace:G,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:pn.add,isReady:Z,install(v){const N=this;v.component("RouterLink",nv),v.component("RouterView",ov),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>si(c)}),bn&&!tt&&c.value===Ot&&(tt=!0,V(r.location).catch(ee=>{}));const S={};for(const ee in Ot)S[ee]=rt(()=>c.value[ee]);v.provide(Wr,N),v.provide($u,Bn(S)),v.provide(oo,c);const M=v.unmount;He.add(v),v.unmount=function(){He.delete(v),He.size<1&&(l=Ot,Be&&Be(),c.value=Ot,tt=!1,he=!1),M()}}}}function _n(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function cv(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(l=>Mn(l,a))?i.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Mn(l,c))||r.push(c))}return[n,i,r]}function lv(){return ct(Wr)}const uv=[{name:"Main Layout",path:"/",component:()=>gt(()=>import("./MainLayout.3be5c767.js"),["assets/MainLayout.3be5c767.js","assets/MainLayout.e726c370.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.aca1cfb8.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Home",path:"",component:()=>gt(()=>import("./Home.ce14ec7b.js"),["assets/Home.ce14ec7b.js","assets/Home.aeedae49.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Komisariat",path:"komisariat",component:()=>gt(()=>import("./Komisariat.700abc80.js"),["assets/Komisariat.700abc80.js","assets/Komisariat.f9c18b6f.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Kegiatan",path:"kegiatan",component:()=>gt(()=>import("./Kegiatan.29c68826.js"),["assets/Kegiatan.29c68826.js","assets/Kegiatan.6b882dd4.css","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Dashboard Layout",path:"/dashboard",component:()=>gt(()=>import("./DashboardLayout.381526cf.js"),["assets/DashboardLayout.381526cf.js","assets/DashboardLayout.93ca250f.css","assets/alkhawarizmi.b5ccb83b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Dashboard",path:"",component:()=>gt(()=>import("./Main.229aa23b.js"),["assets/Main.229aa23b.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Pimpinan",path:"pimpinan",component:()=>gt(()=>import("./Pimpinan.a7c00f72.js"),["assets/Pimpinan.a7c00f72.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{name:"Auth Layout",path:"/",component:()=>gt(()=>import("./AuthLayout.f897e567.js"),["assets/AuthLayout.f897e567.js","assets/AuthLayout.c73f263a.css","assets/HeaderMain.vue_vue_type_style_index_0_scoped_true_lang.aca1cfb8.css","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{name:"Login",path:"login",component:()=>gt(()=>import("./Login.73bb2170.js"),[])}]}],ei=av({routes:uv,history:bm()});/**
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
 */const Yu=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},hv=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):hv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),l!==64){const g=a<<4&240|l>>2;if(i.push(g),h!==64){const I=l<<6&192|h;i.push(I)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},fv=function(e){const t=Yu(e);return Qu.encodeByteArray(t,!0)},Zu=function(e){return fv(e).replace(/\./g,"")},dv=function(e){try{return Qu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class pv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function eh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function mv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vv(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function th(){return typeof indexedDB=="object"}function nh(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function _v(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const yv="FirebaseError";class St extends Error{constructor(t,n,i){super(n);this.code=t,this.customData=i,this.name=yv,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?wv(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new St(r,a,i)}}function wv(e,t){return e.replace(Iv,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Iv=/\{\$([^}]+)}/g;function Ev(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ir(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(Uc(s)&&Uc(o)){if(!Ir(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Uc(e){return e!==null&&typeof e=="object"}/**
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
 */function xi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function ni(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function bv(e,t){const n=new Tv(e,t);return n.subscribe.bind(n)}class Tv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Av(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Ts),r.error===void 0&&(r.error=Ts),r.complete===void 0&&(r.complete=Ts);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Av(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ts(){}/**
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
 */const Sv=1e3,Cv=2,Rv=4*60*60*1e3,Ov=.5;function Fc(e,t=Sv,n=Cv){const i=t*Math.pow(n,e),r=Math.round(Ov*i*(Math.random()-.5)*2);return Math.min(Rv,i+r)}/**
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}/**
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
 */function ii(e,t){return new Promise((n,i)=>{e.onsuccess=r=>{n(r.target.result)},e.onerror=r=>{var s;i(`${t}: ${(s=r.target.error)===null||s===void 0?void 0:s.message}`)}})}class jc{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new ih(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new rh(this._db.createObjectStore(t,n))}close(){this._db.close()}}class ih{constructor(t){this._transaction=t,this.complete=new Promise((n,i)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(t){return new rh(this._transaction.objectStore(t))}}class rh{constructor(t){this._store=t}index(t){return new $c(this._store.index(t))}createIndex(t,n,i){return new $c(this._store.createIndex(t,n,i))}get(t){const n=this._store.get(t);return ii(n,"Error reading from IndexedDB")}put(t,n){const i=this._store.put(t,n);return ii(i,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ii(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ii(t,"Error clearing IndexedDB object store")}}class $c{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ii(n,"Error reading from IndexedDB")}}function sh(e,t,n){return new Promise((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=o=>{i(new jc(o.target.result))},s.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new jc(s.result),o.oldVersion,o.newVersion,new ih(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}})}class Ye{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class Pv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new pv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dv(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kv(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kv(e){return e===Xt?void 0:e}function Dv(e){return e.instantiationMode==="EAGER"}/**
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
 */class Nv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const Lv={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Mv=Q.INFO,xv={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Uv=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=xv[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gr{constructor(t){this.name=t,this._logLevel=Mv,this._logHandler=Uv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}/**
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
 */class Fv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lo="@firebase/app",Bc="0.7.20";/**
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
 */const Qo=new Gr("@firebase/app"),$v="@firebase/app-compat",Bv="@firebase/analytics-compat",Hv="@firebase/analytics",Vv="@firebase/app-check-compat",Kv="@firebase/app-check",qv="@firebase/auth",Wv="@firebase/auth-compat",zv="@firebase/database",Gv="@firebase/database-compat",Xv="@firebase/functions",Jv="@firebase/functions-compat",Yv="@firebase/installations",Qv="@firebase/installations-compat",Zv="@firebase/messaging",e_="@firebase/messaging-compat",t_="@firebase/performance",n_="@firebase/performance-compat",i_="@firebase/remote-config",r_="@firebase/remote-config-compat",s_="@firebase/storage",o_="@firebase/storage-compat",a_="@firebase/firestore",c_="@firebase/firestore-compat",l_="firebase",u_="9.6.10";/**
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
 */const oh="[DEFAULT]",h_={[lo]:"fire-core",[$v]:"fire-core-compat",[Hv]:"fire-analytics",[Bv]:"fire-analytics-compat",[Kv]:"fire-app-check",[Vv]:"fire-app-check-compat",[qv]:"fire-auth",[Wv]:"fire-auth-compat",[zv]:"fire-rtdb",[Gv]:"fire-rtdb-compat",[Xv]:"fire-fn",[Jv]:"fire-fn-compat",[Yv]:"fire-iid",[Qv]:"fire-iid-compat",[Zv]:"fire-fcm",[e_]:"fire-fcm-compat",[t_]:"fire-perf",[n_]:"fire-perf-compat",[i_]:"fire-rc",[r_]:"fire-rc-compat",[s_]:"fire-gcs",[o_]:"fire-gcs-compat",[a_]:"fire-fst",[c_]:"fire-fst-compat","fire-js":"fire-js",[l_]:"fire-js-all"};/**
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
 */const Er=new Map,uo=new Map;function f_(e,t){try{e.container.addComponent(t)}catch(n){Qo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(uo.has(t))return Qo.debug(`There were multiple attempts to register component ${t}.`),!1;uo.set(t,e);for(const n of Er.values())f_(n,e);return!0}function Ui(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const d_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},on=new fn("app","Firebase",d_);/**
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
 */class p_{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=u_;function g_(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:oh,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});const r=Er.get(i);if(r){if(Ir(e,r.options)&&Ir(n,r.config))return r;throw on.create("duplicate-app",{appName:i})}const s=new Nv(i);for(const a of uo.values())s.addComponent(a);const o=new p_(e,n,s);return Er.set(i,o),o}function ah(e=oh){const t=Er.get(e);if(!t)throw on.create("no-app",{appName:e});return t}function Ve(e,t,n){var i;let r=(i=h_[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qo.warn(a.join(" "));return}ft(new Ye(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const m_="firebase-heartbeat-database",v_=1,Ti="firebase-heartbeat-store";let As=null;function ch(){return As||(As=sh(m_,v_,(e,t)=>{switch(t){case 0:e.createObjectStore(Ti)}}).catch(e=>{throw on.create("storage-open",{originalErrorMessage:e.message})})),As}async function __(e){try{return(await ch()).transaction(Ti).objectStore(Ti).get(lh(e))}catch(t){throw on.create("storage-get",{originalErrorMessage:t.message})}}async function Hc(e,t){try{const i=(await ch()).transaction(Ti,"readwrite");return await i.objectStore(Ti).put(t,lh(e)),i.complete}catch(n){throw on.create("storage-set",{originalErrorMessage:n.message})}}function lh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const y_=1024,w_=30*24*60*60*1e3;class I_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=w_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vc(),{heartbeatsToSend:n,unsentEntries:i}=E_(this._heartbeatsCache.heartbeats),r=Zu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vc(){return new Date().toISOString().substring(0,10)}function E_(e,t=y_){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Kc(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Kc(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class b_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return th()?nh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await __(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Kc(e){return Zu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function T_(e){ft(new Ye("platform-logger",t=>new Fv(t),"PRIVATE")),ft(new Ye("heartbeat",t=>new I_(t),"PRIVATE")),Ve(lo,Bc,e),Ve(lo,Bc,"esm2017"),Ve("fire-js","")}T_("");/*! *****************************************************************************
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
***************************************************************************** */function Zo(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function uh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A_=uh,hh=new fn("auth","Firebase",uh());/**
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
 */const qc=new Gr("@firebase/auth");function lr(e,...t){qc.logLevel<=Q.ERROR&&qc.error(`Auth (${Fi}): ${e}`,...t)}/**
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
 */function Qe(e,...t){throw ea(e,...t)}function lt(e,...t){return ea(e,...t)}function S_(e,t,n){const i=Object.assign(Object.assign({},A_()),{[t]:n});return new fn("auth","Firebase",i).create(t,{appName:e.name})}function ea(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return hh.create(e,...t)}function F(e,t,...n){if(!e)throw ea(t,...n)}function yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lr(t),new Error(t)}function bt(e,t){e||yt(t)}/**
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
 */const Wc=new Map;function wt(e){bt(e instanceof Function,"Expected a class definition");let t=Wc.get(e);return t?(bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wc.set(e,t),t)}/**
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
 */function C_(e,t){const n=Ui(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ir(s,t!=null?t:{}))return r;Qe(r,"already-initialized")}return n.initialize({options:t})}function R_(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(wt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function ho(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O_(){return zc()==="http:"||zc()==="https:"}function zc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function P_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O_()||eh()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,bt(n>t,"Short delay should be less than long delay!"),this.isMobile=gv()||mv()}get(){return P_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ta(e,t){bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class fh{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const N_=new ji(3e4,6e4);function Xr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $i(e,t,n,i,r={}){return dh(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=xi(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),fh.fetch()(ph(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function dh(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D_),t);try{const r=new L_(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ss(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ss(e,"email-already-in-use",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw S_(e,u,l);Qe(e,u)}}catch(r){if(r instanceof St)throw r;Qe(e,"network-request-failed")}}async function Jr(e,t,n,i,r={}){const s=await $i(e,t,n,i,r);return"mfaPendingCredential"in s&&Qe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ph(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?ta(e.config,r):`${e.config.apiScheme}://${r}`}class L_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(lt(this.auth,"network-request-failed")),N_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ss(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=lt(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */async function M_(e,t){return $i(e,"POST","/v1/accounts:delete",t)}async function x_(e,t){return $i(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function hi(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function U_(e,t=!1){const n=Ct(e),i=await n.getIdToken(t),r=na(i);F(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:hi(Cs(r.auth_time)),issuedAtTime:hi(Cs(r.iat)),expirationTime:hi(Cs(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cs(e){return Number(e)*1e3}function na(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=dv(n);return r?JSON.parse(r):(lr("Failed to decode base64 JWT payload"),null)}catch(r){return lr("Caught error parsing JWT payload as JSON",r),null}}function F_(e){const t=na(e);return F(t,"internal-error"),F(typeof t.exp!="undefined","internal-error"),F(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ai(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof St&&j_(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function j_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class $_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function br(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Ai(e,x_(n,{idToken:i}));F(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?V_(s.providerUserInfo):[],a=H_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function B_(e){const t=Ct(e);await br(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function H_(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function V_(e){return e.map(t=>{var{providerId:n}=t,i=Zo(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function K_(e,t){const n=await dh(e,{},async()=>{const i=xi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=ph(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken!="undefined","internal-error"),F(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):F_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await K_(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Si;return i&&(F(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(F(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(F(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
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
 */function kt(e,t){F(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class rn{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=Zo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return U_(this,t)}reload(){return B_(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await br(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ai(this,M_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:V,isAnonymous:G,providerData:X,stsTokenManager:ue}=n;F(k&&ue,t,"internal-error");const me=Si.fromJSON(this.name,ue);F(typeof k=="string",t,"internal-error"),kt(h,t.name),kt(d,t.name),F(typeof V=="boolean",t,"internal-error"),F(typeof G=="boolean",t,"internal-error"),kt(g,t.name),kt(I,t.name),kt(L,t.name),kt(O,t.name),kt(P,t.name),kt(T,t.name);const le=new rn({uid:k,auth:t,email:d,emailVerified:V,displayName:h,isAnonymous:G,photoURL:I,phoneNumber:g,tenantId:L,stsTokenManager:me,createdAt:P,lastLoginAt:T});return X&&Array.isArray(X)&&(le.providerData=X.map(be=>Object.assign({},be))),O&&(le._redirectEventId=O),le}static async _fromIdTokenResponse(t,n,i=!1){const r=new Si;r.updateFromServerResponse(n);const s=new rn({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await br(s),s}}/**
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
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mh.type="NONE";const Gc=mh;/**
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
 */function ur(e,t,n){return`firebase:${e}:${t}:${n}`}class kn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ur(this.userKey,r.apiKey,s),this.fullPersistenceKey=ur("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new kn(wt(Gc),t,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||wt(Gc);const o=ur(i,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rn._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new kn(s,t,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new kn(s,t,i))}}/**
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
 */function Xc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ih(t))return"Blackberry";if(Eh(t))return"Webos";if(ia(t))return"Safari";if((t.includes("chrome/")||_h(t))&&!t.includes("edge/"))return"Chrome";if(wh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vh(e=Ae()){return/firefox\//i.test(e)}function ia(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _h(e=Ae()){return/crios\//i.test(e)}function yh(e=Ae()){return/iemobile/i.test(e)}function wh(e=Ae()){return/android/i.test(e)}function Ih(e=Ae()){return/blackberry/i.test(e)}function Eh(e=Ae()){return/webos/i.test(e)}function Yr(e=Ae()){return/iphone|ipad|ipod/i.test(e)}function q_(e=Ae()){var t;return Yr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function W_(){return vv()&&document.documentMode===10}function bh(e=Ae()){return Yr(e)||wh(e)||Eh(e)||Ih(e)||/windows phone/i.test(e)||yh(e)}function z_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Th(e,t=[]){let n;switch(e){case"Browser":n=Xc(Ae());break;case"Worker":n=`${Xc(Ae())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${i}`}/**
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
 */class G_{constructor(t,n,i){this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jc(this),this.idTokenSubscription=new Jc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=wt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await kn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let i=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await br(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ct(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new fn("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&wt(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,i,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function ra(e){return Ct(e)}class Jc{constructor(t){this.auth=t,this.observer=null,this.addObserver=bv(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class sa{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return yt("not implemented")}_getIdTokenResponse(t){return yt("not implemented")}_linkToIdToken(t,n){return yt("not implemented")}_getReauthenticationResolver(t){return yt("not implemented")}}async function X_(e,t){return $i(e,"POST","/v1/accounts:update",t)}/**
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
 */async function J_(e,t){return Jr(e,"POST","/v1/accounts:signInWithPassword",Xr(e,t))}/**
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
 */async function Y_(e,t){return Jr(e,"POST","/v1/accounts:signInWithEmailLink",Xr(e,t))}async function Q_(e,t){return Jr(e,"POST","/v1/accounts:signInWithEmailLink",Xr(e,t))}/**
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
 */class Ci extends sa{constructor(t,n,i,r=null){super("password",i);this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Ci(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Ci(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return J_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Y_(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return X_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Q_(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Dn(e,t){return Jr(e,"POST","/v1/accounts:signInWithIdp",Xr(e,t))}/**
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
 */const Z_="http://localhost";class an extends sa{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new an(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=Zo(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new an(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Dn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xi(n)}return t}}/**
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
 */function ey(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ty(e){const t=ti(ni(e)).link,n=t?ti(ni(t)).deep_link_id:null,i=ti(ni(e)).deep_link_id;return(i?ti(ni(i)).link:null)||i||n||t||e}class oa{constructor(t){var n,i,r,s,o,a;const c=ti(ni(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=ey((r=c.mode)!==null&&r!==void 0?r:null);F(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=ty(t);try{return new oa(n)}catch{return null}}}/**
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
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(t,n){return Ci._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=oa.parseLink(n);return F(i,"argument-error"),Ci._fromEmailAndCode(t,i.code,i.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ah{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends Ah{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends Bi{constructor(){super("facebook.com")}static credential(t){return an._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends Bi{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return an._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Ut.credential(n,i)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Ft extends Bi{constructor(){super("github.com")}static credential(t){return an._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class jt extends Bi{constructor(){super("twitter.com")}static credential(t,n){return an._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return jt.credential(n,i)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */class Un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await rn._fromIdTokenResponse(t,i,r),o=Yc(i);return new Un({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=Yc(i);return new Un({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function Yc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Tr extends St{constructor(t,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new Tr(t,n,i,r)}}function Sh(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(e,s,t,i):s})}async function ny(e,t,n=!1){const i=await Ai(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Un._forOperation(e,"link",i)}/**
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
 */async function iy(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Ai(e,Sh(i,r,t,e),n);F(s.idToken,i,"internal-error");const o=na(s.idToken);F(o,i,"internal-error");const{sub:a}=o;return F(e.uid===a,i,"user-mismatch"),Un._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(i,"user-mismatch"),s}}/**
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
 */async function Ch(e,t,n=!1){const i="signIn",r=await Sh(e,i,t),s=await Un._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function ry(e,t){return Ch(ra(e),t)}function sy(e,t,n){return ry(Ct(e),Vn.credential(t,n))}/**
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
 */function oy(e,t){return Ct(e).setPersistence(t)}function ay(e,t,n,i){return Ct(e).onAuthStateChanged(t,n,i)}function cy(e){return Ct(e).signOut()}const Ar="__sak";/**
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
 */class Rh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ly(){const e=Ae();return ia(e)||Yr(e)}const uy=1e3,hy=10;class Oh extends Rh{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ly()&&z_(),this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);W_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,hy):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Oh.type="LOCAL";const fy=Oh;/**
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
 */class Ph extends Rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ph.type="SESSION";const aa=Ph;/**
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
 */function dy(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new Qr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await dy(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
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
 */function ca(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class py{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ca("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ut(){return window}function gy(e){ut().location.href=e}/**
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
 */function kh(){return typeof ut().WorkerGlobalScope!="undefined"&&typeof ut().importScripts=="function"}async function my(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function _y(){return kh()?self:null}/**
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
 */const Dh="firebaseLocalStorageDb",yy=1,Sr="firebaseLocalStorage",Nh="fbase_key";class Hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zr(e,t){return e.transaction([Sr],t?"readwrite":"readonly").objectStore(Sr)}function wy(){const e=indexedDB.deleteDatabase(Dh);return new Hi(e).toPromise()}function fo(){const e=indexedDB.open(Dh,yy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Sr,{keyPath:Nh})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Sr)?t(i):(i.close(),await wy(),t(await fo()))})})}async function Qc(e,t,n){const i=Zr(e,!0).put({[Nh]:t,value:n});return new Hi(i).toPromise()}async function Iy(e,t){const n=Zr(e,!1).get(t),i=await new Hi(n).toPromise();return i===void 0?null:i.value}function Zc(e,t){const n=Zr(e,!0).delete(t);return new Hi(n).toPromise()}const Ey=800,by=3;class Lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>by)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(_y()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await my(),!this.activeServiceWorker)return;this.sender=new py(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((t=i[0])===null||t===void 0?void 0:t.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fo();return await Qc(t,Ar,"1"),await Zc(t,Ar),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qc(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>Iy(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Zr(r,!1).getAll();return new Hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ey)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lh.type="LOCAL";const Ty=Lh;/**
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
 */function Ay(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Sy(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=lt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Ay().appendChild(i)})}function Cy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ji(3e4,6e4);/**
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
 */function Ry(e,t){return t?wt(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class la extends sa{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Oy(e){return Ch(e.auth,new la(e),e.bypassAuthState)}function Py(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),iy(n,new la(e),e.bypassAuthState)}async function ky(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),ny(n,new la(e),e.bypassAuthState)}/**
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
 */class Mh{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Oy;case"linkViaPopup":case"linkViaRedirect":return ky;case"reauthViaPopup":case"reauthViaRedirect":return Py;default:Qe(this.auth,"internal-error")}}resolve(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Dy=new ji(2e3,1e4);class Tn extends Mh{constructor(t,n,i,r,s){super(t,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const t=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Dy.get())};t()}}Tn.currentPopupAction=null;/**
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
 */const Ny="pendingRedirect",Rs=new Map;class Ly extends Mh{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let t=Rs.get(this.auth._key());if(!t){try{const i=await My(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Rs.set(this.auth._key(),t)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function My(e,t){const n=Uy(t),i=xy(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function xy(e){return wt(e._redirectPersistence)}function Uy(e){return ur(Ny,e.config.apiKey,e.name)}async function Fy(e,t,n=!1){const i=ra(e),r=Ry(i,t),o=await new Ly(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const jy=10*60*1e3;class $y{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!By(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!xh(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(t))}saveEventToCache(t){this.cachedEventUids.add(el(t)),this.lastProcessedEventTime=Date.now()}}function el(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function xh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function By(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xh(e);default:return!1}}/**
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
 */async function Hy(e,t={}){return $i(e,"GET","/v1/projects",t)}/**
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
 */const Vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ky=/^https?/;async function qy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Hy(e);for(const n of t)try{if(Wy(n))return}catch{}Qe(e,"unauthorized-domain")}function Wy(e){const t=ho(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Ky.test(n))return!1;if(Vy.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const zy=new ji(3e4,6e4);function tl(){const e=ut().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Gy(e){return new Promise((t,n)=>{var i,r,s;function o(){tl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tl(),n(lt(e,"network-request-failed"))},timeout:zy.get()})}if(!((r=(i=ut().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)o();else{const a=Cy("iframefcb");return ut()[a]=()=>{gapi.load?o():n(lt(e,"network-request-failed"))},Sy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw hr=null,t})}let hr=null;function Xy(e){return hr=hr||Gy(e),hr}/**
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
 */const Jy=new ji(5e3,15e3),Yy="__/auth/iframe",Qy="emulator/auth/iframe",Zy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ew=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tw(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ta(t,Qy):`https://${e.config.authDomain}/${Yy}`,i={apiKey:t.apiKey,appName:e.name,v:Fi},r=ew.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${xi(i).slice(1)}`}async function nw(e){const t=await Xy(e),n=ut().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:tw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zy,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=lt(e,"network-request-failed"),a=ut().setTimeout(()=>{s(o)},Jy.get());function c(){ut().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rw=500,sw=600,ow="_blank",aw="http://localhost";class nl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cw(e,t,n,i=rw,r=sw){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iw),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Ae().toLowerCase();n&&(a=_h(l)?ow:n),vh(l)&&(t=t||aw,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,I])=>`${d}${g}=${I},`,"");if(q_(l)&&a!=="_self")return lw(t||"",a),new nl(null);const h=window.open(t||"",a,u);F(h,e,"popup-blocked");try{h.focus()}catch{}return new nl(h)}function lw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const uw="__/auth/handler",hw="emulator/auth/handler";function il(e,t,n,i,r,s){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Fi,eventId:r};if(t instanceof Ah){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ev(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(t instanceof Bi){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${fw(e)}?${xi(a).slice(1)}`}function fw({config:e}){return e.emulator?ta(e,hw):`https://${e.authDomain}/${uw}`}/**
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
 */const Os="webStorageSupport";class dw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aa,this._completeRedirectFn=Fy}async _openPopup(t,n,i,r){var s;bt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=il(t,n,i,ho(),r);return cw(t,o,ca())}async _openRedirect(t,n,i,r){return await this._originValidation(t),gy(il(t,n,i,ho(),r)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(bt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await nw(t),i=new $y(t);return n.register("authEvent",r=>(F(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Os,{type:Os},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Os];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bh()||ia()||Yr()}}const pw=dw;var rl="@firebase/auth",sl="0.19.11";/**
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
 */class gw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{var r;t(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vw(e){ft(new Ye("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Th(e)},u=new G_(a,c,l);return R_(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),ft(new Ye("auth-internal",t=>{const n=ra(t.getProvider("auth").getImmediate());return(i=>new gw(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(rl,sl,mw(e)),Ve(rl,sl,"esm2017")}/**
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
 */function Uh(e=ah()){const t=Ui(e,"auth");return t.isInitialized()?t.getImmediate():C_(e,{popupRedirectResolver:pw,persistence:[Ty,fy,aa]})}vw("Browser");/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Fh="store";function _w(e){return e===void 0&&(e=null),ct(e!==null?e:Fh)}function Kn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function yw(e){return e!==null&&typeof e=="object"}function ww(e){return e&&typeof e.then=="function"}function Iw(e,t){return function(){return e(t)}}function jh(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}function $h(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;es(e,n,[],e._modules.root,!0),ua(e,n,t)}function ua(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,s={};Kn(r,function(o,a){s[a]=Iw(o,e),Object.defineProperty(e.getters,a,{get:function(){return s[a]()},enumerable:!0})}),e._state=Bn({data:t}),e.strict&&Sw(e),i&&n&&e._withCommit(function(){i.data=null})}function es(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=ha(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=i.state})}var l=i.context=Ew(e,o,n);i.forEachMutation(function(u,h){var d=o+h;bw(e,d,u,l)}),i.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;Tw(e,d,g,l)}),i.forEachGetter(function(u,h){var d=o+h;Aw(e,d,u,l)}),i.forEachChild(function(u,h){es(e,t,n.concat(h),u,r)})}function Ew(e,t,n){var i=t==="",r={dispatch:i?e.dispatch:function(s,o,a){var c=Cr(s,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=t+h),e.dispatch(h,l)},commit:i?e.commit:function(s,o,a){var c=Cr(s,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=t+h),e.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return Bh(e,t)}},state:{get:function(){return ha(e.state,n)}}}),r}function Bh(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach(function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function bw(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push(function(o){n.call(e,i.state,o)})}function Tw(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push(function(o){var a=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},o);return ww(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function Aw(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function Sw(e){Pn(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function ha(e,t){return t.reduce(function(n,i){return n[i]},e)}function Cr(e,t,n){return yw(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Cw="vuex bindings",ol="vuex:mutations",Ps="vuex:actions",yn="vuex",Rw=0;function Ow(e,t){rm({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Cw]},function(n){n.addTimelineLayer({id:ol,label:"Vuex Mutations",color:al}),n.addTimelineLayer({id:Ps,label:"Vuex Actions",color:al}),n.addInspector({id:yn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===e&&i.inspectorId===yn)if(i.filter){var r=[];qh(r,t._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Kh(t._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===e&&i.inspectorId===yn){var r=i.nodeId;Bh(t,r),i.state=Dw(Lw(t._modules,r),r==="root"?t.getters:t._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===e&&i.inspectorId===yn){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit(function(){i.set(t._state.data,s,i.state.value)})}}),t.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(yn),n.sendInspectorState(yn),n.addTimelineEvent({layerId:ol,event:{time:Date.now(),title:i.type,data:s}})}),t.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=Rw++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:Ps,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:Ps,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var al=8702998,Pw=6710886,kw=16777215,Hh={label:"namespaced",textColor:kw,backgroundColor:Pw};function Vh(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Kh(e,t){return{id:t||"root",label:Vh(t),tags:e.namespaced?[Hh]:[],children:Object.keys(e._children).map(function(n){return Kh(e._children[n],t+n+"/")})}}function qh(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[Hh]:[]}),Object.keys(t._children).forEach(function(r){qh(e,t._children[r],n,i+r+"/")})}function Dw(e,t,n){t=n==="root"?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(i.length){var s=Nw(t);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Vh(o):o,editable:!1,value:po(function(){return s[o]})}})}return r}function Nw(e){var t={};return Object.keys(e).forEach(function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=po(function(){return e[n]})}else t[n]=po(function(){return e[n]})}),t}function Lw(e,t){var n=t.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return s===n.length-1?o:o._children},t==="root"?e:e.root._children)}function po(e){try{return e()}catch(t){return t}}var Ze=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=(typeof i=="function"?i():i)||{}},Wh={namespaced:{configurable:!0}};Wh.namespaced.get=function(){return!!this._rawModule.namespaced};Ze.prototype.addChild=function(t,n){this._children[t]=n};Ze.prototype.removeChild=function(t){delete this._children[t]};Ze.prototype.getChild=function(t){return this._children[t]};Ze.prototype.hasChild=function(t){return t in this._children};Ze.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Ze.prototype.forEachChild=function(t){Kn(this._children,t)};Ze.prototype.forEachGetter=function(t){this._rawModule.getters&&Kn(this._rawModule.getters,t)};Ze.prototype.forEachAction=function(t){this._rawModule.actions&&Kn(this._rawModule.actions,t)};Ze.prototype.forEachMutation=function(t){this._rawModule.mutations&&Kn(this._rawModule.mutations,t)};Object.defineProperties(Ze.prototype,Wh);var dn=function(t){this.register([],t,!1)};dn.prototype.get=function(t){return t.reduce(function(n,i){return n.getChild(i)},this.root)};dn.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};dn.prototype.update=function(t){zh([],this.root,t)};dn.prototype.register=function(t,n,i){var r=this;i===void 0&&(i=!0);var s=new Ze(n,i);if(t.length===0)this.root=s;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],s)}n.modules&&Kn(n.modules,function(a,c){r.register(t.concat(c),a,i)})};dn.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),i=t[t.length-1],r=n.getChild(i);!r||!r.runtime||n.removeChild(i)};dn.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),i=t[t.length-1];return n?n.hasChild(i):!1};function zh(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return;zh(e.concat(i),t.getChild(i),n.modules[i])}}function Mw(e){return new Le(e)}var Le=function(t){var n=this;t===void 0&&(t={});var i=t.plugins;i===void 0&&(i=[]);var r=t.strict;r===void 0&&(r=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new dn(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,I){return l.call(o,d,g,I)},this.strict=r;var u=this._modules.root.state;es(this,u,[],this._modules.root),ua(this,u),i.forEach(function(h){return h(n)})},fa={state:{configurable:!0}};Le.prototype.install=function(t,n){t.provide(n||Fh,this),t.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&Ow(t,this)};fa.state.get=function(){return this._state.data};fa.state.set=function(e){};Le.prototype.commit=function(t,n,i){var r=this,s=Cr(t,n,i),o=s.type,a=s.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};Le.prototype.dispatch=function(t,n){var i=this,r=Cr(t,n),s=r.type,o=r.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{i._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,i.state)})}catch{}u(d)},function(d){try{i._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,i.state,d)})}catch{}h(d)})})}};Le.prototype.subscribe=function(t,n){return jh(t,this._subscribers,n)};Le.prototype.subscribeAction=function(t,n){var i=typeof t=="function"?{before:t}:t;return jh(i,this._actionSubscribers,n)};Le.prototype.watch=function(t,n,i){var r=this;return Pn(function(){return t(r.state,r.getters)},n,Object.assign({},i))};Le.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Le.prototype.registerModule=function(t,n,i){i===void 0&&(i={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),es(this,this.state,t,this._modules.get(t),i.preserveState),ua(this,this.state)};Le.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var i=ha(n.state,t.slice(0,-1));delete i[t[t.length-1]]}),$h(this)};Le.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Le.prototype.hotUpdate=function(t){this._modules.update(t),$h(this,!0)};Le.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Le.prototype,fa);const xw={setup(e){const t=_w(),n=Uh();return localStorage.getItem("to")&&(ei.push({path:localStorage.getItem("to")}),localStorage.removeItem("to")),ay(n,i=>{t.commit("updateUser",i),(ei.currentRoute.value.name=="Dashboard"||t.state.user.data!=null)&&ei.push({name:"Dashboard"})}),ei.beforeEach(i=>{if(i.name=="Dashboard"&&t.state.user.authenticated!==!0)return{name:"Login"}}),(i,r)=>{const s=sg("router-view");return Ou(),cg(s)}}};var Uw="firebase",Fw="9.6.10";/**
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
 */Ve(Uw,Fw,"app");const Gh="@firebase/installations",da="0.5.7";/**
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
 */const Xh=1e4,Jh=`w:${da}`,Yh="FIS_v2",jw="https://firebaseinstallations.googleapis.com/v1",$w=60*60*1e3,Bw="installations",Hw="Installations";/**
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
 */const Vw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},cn=new fn(Bw,Hw,Vw);function Qh(e){return e instanceof St&&e.code.includes("request-failed")}/**
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
 */function Zh({projectId:e}){return`${jw}/projects/${e}/installations`}function ef(e){return{token:e.token,requestStatus:2,expiresIn:qw(e.expiresIn),creationTime:Date.now()}}async function tf(e,t){const i=(await t.json()).error;return cn.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function nf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Kw(e,{refreshToken:t}){const n=nf(e);return n.append("Authorization",Ww(t)),n}async function rf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function qw(e){return Number(e.replace("s","000"))}function Ww(e){return`${Yh} ${e}`}/**
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
 */async function zw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Zh(e),r=nf(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Yh,appId:e.appId,sdkVersion:Jh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await rf(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ef(l.authToken)}}else throw await tf("Create Installation",c)}/**
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
 */function sf(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Gw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Xw=/^[cdef][\w-]{21}$/,go="";function Jw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Yw(e);return Xw.test(n)?n:go}catch{return go}}function Yw(e){return Gw(e).substr(0,22)}/**
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
 */function ts(e){return`${e.appName}!${e.appId}`}/**
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
 */const of=new Map;function af(e,t){const n=ts(e);cf(n,t),Qw(n,t)}function cf(e,t){const n=of.get(e);if(!!n)for(const i of n)i(t)}function Qw(e,t){const n=Zw();n&&n.postMessage({key:e,fid:t}),eI()}let Qt=null;function Zw(){return!Qt&&"BroadcastChannel"in self&&(Qt=new BroadcastChannel("[Firebase] FID Change"),Qt.onmessage=e=>{cf(e.data.key,e.data.fid)}),Qt}function eI(){of.size===0&&Qt&&(Qt.close(),Qt=null)}/**
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
 */const tI="firebase-installations-database",nI=1,ln="firebase-installations-store";let ks=null;function pa(){return ks||(ks=sh(tI,nI,(e,t)=>{switch(t){case 0:e.createObjectStore(ln)}})),ks}async function Rr(e,t){const n=ts(e),r=(await pa()).transaction(ln,"readwrite"),s=r.objectStore(ln),o=await s.get(n);return await s.put(t,n),await r.complete,(!o||o.fid!==t.fid)&&af(e,t.fid),t}async function lf(e){const t=ts(e),i=(await pa()).transaction(ln,"readwrite");await i.objectStore(ln).delete(t),await i.complete}async function ns(e,t){const n=ts(e),r=(await pa()).transaction(ln,"readwrite"),s=r.objectStore(ln),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.complete,a&&(!o||o.fid!==a.fid)&&af(e,a.fid),a}/**
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
 */async function ga(e){let t;const n=await ns(e.appConfig,i=>{const r=iI(i),s=rI(e,r);return t=s.registrationPromise,s.installationEntry});return n.fid===go?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function iI(e){const t=e||{fid:Jw(),registrationStatus:0};return uf(t)}function rI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(cn.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=sI(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:oI(e)}:{installationEntry:t}}async function sI(e,t){try{const n=await zw(e,t);return Rr(e.appConfig,n)}catch(n){throw Qh(n)&&n.customData.serverCode===409?await lf(e.appConfig):await Rr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function oI(e){let t=await cl(e.appConfig);for(;t.registrationStatus===1;)await sf(100),t=await cl(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await ga(e);return i||n}return t}function cl(e){return ns(e,t=>{if(!t)throw cn.create("installation-not-found");return uf(t)})}function uf(e){return aI(e)?{fid:e.fid,registrationStatus:0}:e}function aI(e){return e.registrationStatus===1&&e.registrationTime+Xh<Date.now()}/**
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
 */async function cI({appConfig:e,heartbeatServiceProvider:t},n){const i=lI(e,n),r=Kw(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Jh,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await rf(()=>fetch(i,a));if(c.ok){const l=await c.json();return ef(l)}else throw await tf("Generate Auth Token",c)}function lI(e,{fid:t}){return`${Zh(e)}/${t}/authTokens:generate`}/**
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
 */async function ma(e,t=!1){let n;const i=await ns(e.appConfig,s=>{if(!hf(s))throw cn.create("not-registered");const o=s.authToken;if(!t&&fI(o))return s;if(o.requestStatus===1)return n=uI(e,t),s;{if(!navigator.onLine)throw cn.create("app-offline");const a=pI(s);return n=hI(e,a),a}});return n?await n:i.authToken}async function uI(e,t){let n=await ll(e.appConfig);for(;n.authToken.requestStatus===1;)await sf(100),n=await ll(e.appConfig);const i=n.authToken;return i.requestStatus===0?ma(e,t):i}function ll(e){return ns(e,t=>{if(!hf(t))throw cn.create("not-registered");const n=t.authToken;return gI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function hI(e,t){try{const n=await cI(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Rr(e.appConfig,i),n}catch(n){if(Qh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lf(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rr(e.appConfig,i)}throw n}}function hf(e){return e!==void 0&&e.registrationStatus===2}function fI(e){return e.requestStatus===2&&!dI(e)}function dI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$w}function pI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function gI(e){return e.requestStatus===1&&e.requestTime+Xh<Date.now()}/**
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
 */async function mI(e){const t=e,{installationEntry:n,registrationPromise:i}=await ga(t);return i?i.catch(console.error):ma(t).catch(console.error),n.fid}/**
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
 */async function vI(e,t=!1){const n=e;return await _I(n),(await ma(n,t)).token}async function _I(e){const{registrationPromise:t}=await ga(e);t&&await t}/**
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
 */function yI(e){if(!e||!e.options)throw Ds("App Configuration");if(!e.name)throw Ds("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ds(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ds(e){return cn.create("missing-app-config-values",{valueName:e})}/**
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
 */const ff="installations",wI="installations-internal",II=e=>{const t=e.getProvider("app").getImmediate(),n=yI(t),i=Ui(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},EI=e=>{const t=e.getProvider("app").getImmediate(),n=Ui(t,ff).getImmediate();return{getId:()=>mI(n),getToken:r=>vI(n,r)}};function bI(){ft(new Ye(ff,II,"PUBLIC")),ft(new Ye(wI,EI,"PRIVATE"))}bI();Ve(Gh,da);Ve(Gh,da,"esm2017");/**
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
 */const ul="analytics",TI="firebase_id",AI="origin",SI=60*1e3,CI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",df="https://www.googletagmanager.com/gtag/js";/**
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
 */const je=new Gr("@firebase/analytics");/**
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
 */function pf(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function RI(e,t){const n=document.createElement("script");n.src=`${df}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function OI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function PI(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const c=(await pf(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(a){je.error(a)}e("config",r,s)}async function kI(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await pf(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){je.error(s)}}function DI(e,t,n,i){async function r(s,o,a){try{s==="event"?await kI(e,t,n,o,a):s==="config"?await PI(e,t,n,i,o,a):e("set",o)}catch(c){je.error(c)}}return r}function NI(e,t,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=DI(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function LI(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(df))return t;return null}/**
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
 */const MI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Je=new fn("analytics","Analytics",MI);/**
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
 */const xI=30,UI=1e3;class FI{constructor(t={},n=UI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const gf=new FI;function jI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $I(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:jI(i)},s=CI.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function BI(e,t=gf,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Je.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Je.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new KI;return setTimeout(async()=>{a.abort()},n!==void 0?n:SI),mf({appId:i,apiKey:r,measurementId:s},o,a,t)}async function mf(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=gf){const{appId:s,measurementId:o}=e;try{await HI(i,t)}catch(a){if(o)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const a=await $I(e);return r.deleteThrottleMetadata(s),a}catch(a){if(!VI(a)){if(r.deleteThrottleMetadata(s),o)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?Fc(n,r.intervalMillis,xI):Fc(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(s,l),je.debug(`Calling attemptFetch again in ${c} millis`),mf(e,l,i,r)}}function HI(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),i(Je.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function VI(e){if(!(e instanceof St)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class KI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */async function qI(){if(th())try{await nh()}catch(e){return je.warn(Je.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return je.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WI(e,t,n,i,r,s,o){var a;const c=BI(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>je.error(g)),t.push(c);const l=qI().then(g=>{if(g)return i.getId()}),[u,h]=await Promise.all([c,l]);LI()||RI(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[AI]="firebase",d.update=!0,h!=null&&(d[TI]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class zI{constructor(t){this.app=t}_delete(){return delete fi[this.app.options.appId],Promise.resolve()}}let fi={},hl=[];const fl={};let Ns="dataLayer",GI="gtag",dl,vf,pl=!1;function XI(){const e=[];if(eh()&&e.push("This is a browser extension environment."),_v()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:t});je.warn(n.message)}}function JI(e,t,n){XI();const i=e.options.appId;if(!i)throw Je.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(fi[i]!=null)throw Je.create("already-exists",{id:i});if(!pl){OI(Ns);const{wrappedGtag:s,gtagCore:o}=NI(fi,hl,fl,Ns,GI);vf=s,dl=o,pl=!0}return fi[i]=WI(e,hl,fl,t,dl,Ns,n),new zI(e)}/**
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
 */async function YI(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}else{const s=await t,o=Object.assign(Object.assign({},i),{send_to:s});e("event",n,o)}}function QI(e,t,n,i){e=Ct(e),YI(vf,fi[e.app.options.appId],t,n,i).catch(r=>je.error(r))}const gl="@firebase/analytics",ml="0.7.7";function ZI(){ft(new Ye(ul,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return JI(i,r,n)},"PUBLIC")),ft(new Ye("analytics-internal",e,"PRIVATE")),Ve(gl,ml),Ve(gl,ml,"esm2017");function e(t){try{const n=t.getProvider(ul).getImmediate();return{logEvent:(i,r,s)=>QI(n,i,r,s)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}ZI();var eE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R,va=va||{},j=eE||self;function Or(){}function mo(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function tE(e){return Object.prototype.hasOwnProperty.call(e,Ls)&&e[Ls]||(e[Ls]=++nE)}var Ls="closure_uid_"+(1e9*Math.random()>>>0),nE=0;function iE(e,t,n){return e.call.apply(e.bind,arguments)}function rE(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function ye(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ye=iE:ye=rE,ye.apply(null,arguments)}function tr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Ee(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(i,o)}}function Kt(){this.s=this.s,this.o=this.o}var sE=0,oE={};Kt.prototype.s=!1;Kt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),sE!=0)){var e=tE(this);delete oE[e]}};Kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _f=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},yf=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r=typeof e=="string"?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function aE(e){e:{var t=QE;const n=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function vl(e){return Array.prototype.concat.apply([],arguments)}function _a(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Pr(e){return/^[\s\xa0]*$/.test(e)}var _l=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ce(e,t){return e.indexOf(t)!=-1}function Ms(e,t){return e<t?-1:e>t?1:0}var Re;e:{var yl=j.navigator;if(yl){var wl=yl.userAgent;if(wl){Re=wl;break e}}Re=""}function ya(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function wf(e){const t={};for(const n in e)t[n]=e[n];return t}var Il="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function If(e,t){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)e[n]=i[n];for(let s=0;s<Il.length;s++)n=Il[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function wa(e){return wa[" "](e),e}wa[" "]=Or;function cE(e){var t=hE;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var lE=Ce(Re,"Opera"),Ri=Ce(Re,"Trident")||Ce(Re,"MSIE"),Ef=Ce(Re,"Edge"),vo=Ef||Ri,bf=Ce(Re,"Gecko")&&!(Ce(Re.toLowerCase(),"webkit")&&!Ce(Re,"Edge"))&&!(Ce(Re,"Trident")||Ce(Re,"MSIE"))&&!Ce(Re,"Edge"),uE=Ce(Re.toLowerCase(),"webkit")&&!Ce(Re,"Edge");function Tf(){var e=j.document;return e?e.documentMode:void 0}var _o;e:{var xs="",Us=function(){var e=Re;if(bf)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ef)return/Edge\/([\d\.]+)/.exec(e);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(uE)return/WebKit\/(\S+)/.exec(e);if(lE)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Us&&(xs=Us?Us[1]:""),Ri){var Fs=Tf();if(Fs!=null&&Fs>parseFloat(xs)){_o=String(Fs);break e}}_o=xs}var hE={};function fE(){return cE(function(){let e=0;const t=_l(String(_o)).split("."),n=_l("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;e=Ms(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Ms(r[2].length==0,s[2].length==0)||Ms(r[2],s[2]),r=r[3],s=s[3]}while(e==0)}return 0<=e})}j.document&&Ri&&Tf();var dE=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{j.addEventListener("test",Or,t),j.removeEventListener("test",Or,t)}catch{}return e}();function Te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};function Oi(e,t){if(Te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(bf){e:{try{wa(t.nodeName);var r=!0;break e}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:pE[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Oi.Z.h.call(this)}}Ee(Oi,Te);var pE={2:"touch",3:"pen",4:"mouse"};Oi.prototype.h=function(){Oi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),gE=0;function mE(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++gE,this.ca=this.fa=!1}function is(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function rs(e){this.src=e,this.g={},this.h=0}rs.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=wo(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new mE(t,this.src,s,!!i,r),t.fa=n,e.push(t)),t};function yo(e,t){var n=t.type;if(n in e.g){var i=e.g[n],r=_f(i,t),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(is(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function wo(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}var Ia="closure_lm_"+(1e6*Math.random()|0),js={};function Af(e,t,n,i,r){if(i&&i.once)return Cf(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Af(e,t[s],n,i,r);return null}return n=Ta(n),e&&e[Ki]?e.N(t,n,Vi(i)?!!i.capture:!!i,r):Sf(e,t,n,!1,i,r)}function Sf(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=Vi(r)?!!r.capture:!!r,a=ba(e);if(a||(e[Ia]=a=new rs(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=vE(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)dE||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(Of(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vE(){function e(n){return t.call(e.src,e.listener,n)}var t=_E;return e}function Cf(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Cf(e,t[s],n,i,r);return null}return n=Ta(n),e&&e[Ki]?e.O(t,n,Vi(i)?!!i.capture:!!i,r):Sf(e,t,n,!0,i,r)}function Rf(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Rf(e,t[s],n,i,r);else i=Vi(i)?!!i.capture:!!i,n=Ta(n),e&&e[Ki]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=wo(s,n,i,r),-1<n&&(is(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=ba(e))&&(t=e.g[t.toString()],e=-1,t&&(e=wo(t,n,i,r)),(n=-1<e?t[e]:null)&&Ea(n))}function Ea(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ki])yo(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Of(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ba(t))?(yo(n,e),n.h==0&&(n.src=null,t[Ia]=null)):is(e)}}}function Of(e){return e in js?js[e]:js[e]="on"+e}function _E(e,t){if(e.ca)e=!0;else{t=new Oi(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&Ea(e),e=n.call(i,t)}return e}function ba(e){return e=e[Ia],e instanceof rs?e:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(e){return typeof e=="function"?e:(e[$s]||(e[$s]=function(t){return e.handleEvent(t)}),e[$s])}function ge(){Kt.call(this),this.i=new rs(this),this.P=this,this.I=null}Ee(ge,Kt);ge.prototype[Ki]=!0;ge.prototype.removeEventListener=function(e,t,n,i){Rf(this,e,t,n,i)};function we(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new Te(t,e);else if(t instanceof Te)t.target=t.target||e;else{var r=t;t=new Te(i,e),If(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=nr(o,i,!0,t)&&r}if(o=t.g=e,r=nr(o,i,!0,t)&&r,r=nr(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=nr(o,i,!1,t)&&r}ge.prototype.M=function(){if(ge.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)is(n[i]);delete e.g[t],e.h--}}this.I=null};ge.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};ge.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function nr(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&yo(e.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Aa=j.JSON.stringify;function yE(){var e=kf;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class wE{constructor(){this.h=this.g=null}add(t,n){const i=Pf.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Pf=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new IE,e=>e.reset());class IE{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EE(e){j.setTimeout(()=>{throw e},0)}function Sa(e,t){Io||bE(),Eo||(Io(),Eo=!0),kf.add(e,t)}var Io;function bE(){var e=j.Promise.resolve(void 0);Io=function(){e.then(TE)}}var Eo=!1,kf=new wE;function TE(){for(var e;e=yE();){try{e.h.call(e.g)}catch(n){EE(n)}var t=Pf;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Eo=!1}function ss(e,t){ge.call(this),this.h=e||1,this.g=t||j,this.j=ye(this.kb,this),this.l=Date.now()}Ee(ss,ge);R=ss.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),we(this,"tick"),this.da&&(Ca(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ca(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}R.M=function(){ss.Z.M.call(this),Ca(this),delete this.g};function Ra(e,t,n){if(typeof e=="function")n&&(e=ye(e,n));else if(e&&typeof e.handleEvent=="function")e=ye(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:j.setTimeout(e,t||0)}function Df(e){e.g=Ra(()=>{e.g=null,e.i&&(e.i=!1,Df(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class AE extends Kt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Df(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(e){Kt.call(this),this.h=e,this.g={}}Ee(Pi,Kt);var El=[];function Nf(e,t,n,i){Array.isArray(n)||(n&&(El[0]=n.toString()),n=El);for(var r=0;r<n.length;r++){var s=Af(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Lf(e){ya(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ea(t)},e),e.g={}}Pi.prototype.M=function(){Pi.Z.M.call(this),Lf(this)};Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function os(){this.g=!0}os.prototype.Aa=function(){this.g=!1};function SE(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function CE(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+`
`+n+`
`+s+" "+o})}function An(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+OE(e,n)+(i?" "+i:"")})}function RE(e,t){e.info(function(){return"TIMEOUT: "+t})}os.prototype.info=function(){};function OE(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Aa(n)}catch{return t}}var qn={},bl=null;function Oa(){return bl=bl||new ge}qn.Ma="serverreachability";function Mf(e){Te.call(this,qn.Ma,e)}Ee(Mf,Te);function ki(e){const t=Oa();we(t,new Mf(t,e))}qn.STAT_EVENT="statevent";function xf(e,t){Te.call(this,qn.STAT_EVENT,e),this.stat=t}Ee(xf,Te);function Oe(e){const t=Oa();we(t,new xf(t,e))}qn.Na="timingevent";function Uf(e,t){Te.call(this,qn.Na,e),this.size=t}Ee(Uf,Te);function qi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){e()},t)}var Pa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},PE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ka(){}ka.prototype.h=null;function Tl(e){return e.h||(e.h=e.i())}var as={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Da(){Te.call(this,"d")}Ee(Da,Te);function Na(){Te.call(this,"c")}Ee(Na,Te);var bo;function cs(){}Ee(cs,ka);cs.prototype.g=function(){return new XMLHttpRequest};cs.prototype.i=function(){return{}};bo=new cs;function Wi(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Pi(this),this.P=kE,e=vo?125:void 0,this.W=new ss(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ff}function Ff(){this.i=null,this.g="",this.h=!1}var kE=45e3,To={},kr={};R=Wi.prototype;R.setTimeout=function(e){this.P=e};function Ao(e,t,n){e.K=1,e.v=us(Tt(t)),e.s=n,e.U=!0,jf(e,null)}function jf(e,t){e.F=Date.now(),zi(e),e.A=Tt(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),Wf(n.h,"t",i),e.C=0,n=e.l.H,e.h=new Ff,e.g=fd(e.l,n?t:null,!e.s),0<e.O&&(e.L=new AE(ye(e.Ia,e,e.g),e.O)),Nf(e.V,e.g,"readystatechange",e.gb),t=e.H?wf(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ki(1),SE(e.j,e.u,e.A,e.m,e.X,e.s)}R.gb=function(e){e=e.target;const t=this.L;t&&It(e)==3?t.l():this.Ia(e)};R.Ia=function(e){try{if(e==this.g)e:{const u=It(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||vo||this.g&&(this.h.h||this.g.ga()||Rl(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?ki(3):ki(2)),ls(this);var n=this.g.ba();this.N=n;t:if($f(this)){var i=Rl(this.g);e="";var r=i.length,s=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Zt(this),di(this);var o="";break t}this.h.i=new j.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,CE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var l=a;break t}}l=null}if(n=l)An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,So(this,n);else{this.i=!1,this.o=3,Oe(12),Zt(this),di(this);break e}}this.U?(Bf(this,u,o),vo&&this.i&&u==3&&(Nf(this.V,this.W,"tick",this.fb),this.W.start())):(An(this.j,this.m,o,null),So(this,o)),u==4&&Zt(this),this.i&&!this.I&&(u==4?cd(this.l,this):(this.i=!1,zi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Oe(12)):(this.o=0,Oe(13)),Zt(this),di(this)}}}catch{}finally{}};function $f(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Bf(e,t,n){let i=!0,r;for(;!e.I&&e.C<n.length;)if(r=DE(e,n),r==kr){t==4&&(e.o=4,Oe(14),i=!1),An(e.j,e.m,null,"[Incomplete Response]");break}else if(r==To){e.o=4,Oe(15),An(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else An(e.j,e.m,r,null),So(e,r);$f(e)&&r!=kr&&r!=To&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Oe(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ha(t),t.L=!0,Oe(11))):(An(e.j,e.m,n,"[Invalid Chunked Response]"),Zt(e),di(e))}R.fb=function(){if(this.g){var e=It(this.g),t=this.g.ga();this.C<t.length&&(ls(this),Bf(this,e,t),this.i&&e!=4&&zi(this))}};function DE(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?kr:(n=Number(t.substring(n,i)),isNaN(n)?To:(i+=1,i+n>t.length?kr:(t=t.substr(i,n),e.C=i+n,t)))}R.cancel=function(){this.I=!0,Zt(this)};function zi(e){e.Y=Date.now()+e.P,Hf(e,e.P)}function Hf(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qi(ye(e.eb,e),t)}function ls(e){e.B&&(j.clearTimeout(e.B),e.B=null)}R.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(RE(this.j,this.A),this.K!=2&&(ki(3),Oe(17)),Zt(this),this.o=2,di(this)):Hf(this,this.Y-e)};function di(e){e.l.G==0||e.I||cd(e.l,e)}function Zt(e){ls(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ca(e.W),Lf(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function So(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Co(n.i,e))){if(n.I=e.N,!e.J&&Co(n.i,e)&&n.G==3){try{var i=n.Ca.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Mr(n),ps(n);else break e;Ba(n),Oe(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=qi(ye(n.ab,n),6e3));if(1>=Xf(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else en(n,11)}else if((e.J||n.g==e)&&Mr(n),!Pr(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=e.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=i.i;!s.g&&(Ce(I,"spdy")||Ce(I,"quic")||Ce(I,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xa(s,s.h),s.h=null))}if(i.D){const L=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;L&&(i.sa=L,ce(i.F,i.D,L))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=hd(i,i.H?i.la:null,i.W),o.J){Jf(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(ls(a),zi(a)),i.g=o}else od(i);0<n.l.length&&gs(n)}else l[0]!="stop"&&l[0]!="close"||en(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?en(n,7):$a(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ki(4)}catch{}}function NE(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(mo(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function La(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(mo(e)||typeof e=="string")yf(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(mo(e)||typeof e=="string"){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=NE(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Wn(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Wn)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}R=Wn.prototype;R.R=function(){Ma(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};R.T=function(){return Ma(this),this.g.concat()};function Ma(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];un(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)i=e.g[t],un(r,i)||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}R.get=function(e,t){return un(this.h,e)?this.h[e]:t};R.set=function(e,t){un(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};R.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};function un(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Vf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function LE(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function hn(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof hn){this.g=t!==void 0?t:e.g,Dr(this,e.j),this.s=e.s,Nr(this,e.i),Lr(this,e.m),this.l=e.l,t=e.h;var n=new Di;n.i=t.i,t.g&&(n.g=new Wn(t.g),n.h=t.h),Al(this,n),this.o=e.o}else e&&(n=String(e).match(Vf))?(this.g=!!t,Dr(this,n[1]||"",!0),this.s=pi(n[2]||""),Nr(this,n[3]||"",!0),Lr(this,n[4]),this.l=pi(n[5]||"",!0),Al(this,n[6]||"",!0),this.o=pi(n[7]||"")):(this.g=!!t,this.h=new Di(null,this.g))}hn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ri(t,Sl,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ri(t,Sl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ri(n,n.charAt(0)=="/"?jE:FE,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ri(n,BE)),e.join("")};function Tt(e){return new hn(e)}function Dr(e,t,n){e.j=n?pi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nr(e,t,n){e.i=n?pi(t,!0):t}function Lr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Al(e,t,n){t instanceof Di?(e.h=t,HE(e.h,e.g)):(n||(t=ri(t,$E)),e.h=new Di(t,e.g))}function ce(e,t,n){e.h.set(t,n)}function us(e){return ce(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ME(e){return e instanceof hn?Tt(e):new hn(e,void 0)}function xE(e,t,n,i){var r=new hn(null,void 0);return e&&Dr(r,e),t&&Nr(r,t),n&&Lr(r,n),i&&(r.l=i),r}function pi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ri(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,UE),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function UE(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sl=/[#\/\?@]/g,FE=/[#\?:]/g,jE=/[#\?]/g,$E=/[#\?@]/g,BE=/#/g;function Di(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function qt(e){e.g||(e.g=new Wn,e.h=0,e.i&&LE(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}R=Di.prototype;R.add=function(e,t){qt(this),this.i=null,e=zn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Kf(e,t){qt(e),t=zn(e,t),un(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,un(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ma(e)))}function qf(e,t){return qt(e),t=zn(e,t),un(e.g.h,t)}R.forEach=function(e,t){qt(this),this.g.forEach(function(n,i){yf(n,function(r){e.call(t,r,i,this)},this)},this)};R.T=function(){qt(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n};R.R=function(e){qt(this);var t=[];if(typeof e=="string")qf(this,e)&&(t=vl(t,this.g.get(zn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=vl(t,e[n])}return t};R.set=function(e,t){return qt(this),this.i=null,e=zn(this,e),qf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};R.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Wf(e,t,n){Kf(e,t),0<n.length&&(e.i=null,e.g.set(zn(e,t),_a(n)),e.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function zn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function HE(e,t){t&&!e.j&&(qt(e),e.i=null,e.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Kf(this,i),Wf(this,r,n))},e)),e.j=t}var VE=class{constructor(e,t){this.h=e,this.g=t}};function zf(e){this.l=e||KE,j.PerformanceNavigationTiming?(e=j.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KE=10;function Gf(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Xf(e){return e.h?1:e.g?e.g.size:0}function Co(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xa(e,t){e.g?e.g.add(t):e.h=t}function Jf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}zf.prototype.cancel=function(){if(this.i=Yf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Yf(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _a(e.i)}function Ua(){}Ua.prototype.stringify=function(e){return j.JSON.stringify(e,void 0)};Ua.prototype.parse=function(e){return j.JSON.parse(e,void 0)};function qE(){this.g=new Ua}function WE(e,t,n){const i=n||"";try{La(e,function(r,s){let o=r;Vi(r)&&(o=Aa(r)),t.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function zE(e,t){const n=new os;if(j.Image){const i=new Image;i.onload=tr(ir,n,i,"TestLoadImage: loaded",!0,t),i.onerror=tr(ir,n,i,"TestLoadImage: error",!1,t),i.onabort=tr(ir,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=tr(ir,n,i,"TestLoadImage: timeout",!1,t),j.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function ir(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch{}}function hs(e){this.l=e.$b||null,this.j=e.ib||!1}Ee(hs,ka);hs.prototype.g=function(){return new fs(this.l,this.j)};hs.prototype.i=function(e){return function(){return e}}({});function fs(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(fs,ge);var Fa=0;R=fs.prototype;R.open=function(e,t){if(this.readyState!=Fa)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ni(this)};R.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||j).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=Fa};R.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qf(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Qf(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}R.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Gi(this):Ni(this),this.readyState==3&&Qf(this)}};R.Ua=function(e){this.g&&(this.response=this.responseText=e,Gi(this))};R.Ta=function(e){this.g&&(this.response=e,Gi(this))};R.ha=function(){this.g&&Gi(this)};function Gi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ni(e)}R.setRequestHeader=function(e,t){this.v.append(e,t)};R.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ni(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var GE=j.JSON.parse;function fe(e){ge.call(this),this.headers=new Wn,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zf,this.K=this.L=!1}Ee(fe,ge);var Zf="",XE=/^https?$/i,JE=["POST","PUT"];R=fe.prototype;R.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bo.g(),this.C=this.u?Tl(this.u):Tl(bo),this.g.onreadystatechange=ye(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){Cl(this,s);return}e=n||"";const r=new Wn(this.headers);i&&La(i,function(s,o){r.set(o,s)}),i=aE(r.T()),n=j.FormData&&e instanceof j.FormData,!(0<=_f(JE,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{nd(this),0<this.B&&((this.K=YE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ye(this.pa,this)):this.A=Ra(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Cl(this,s)}};function YE(e){return Ri&&fE()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function QE(e){return e.toLowerCase()=="content-type"}R.pa=function(){typeof va!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function Cl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ed(e),ds(e)}function ed(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}R.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),ds(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ds(this,!0)),fe.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?td(this):this.cb())};R.cb=function(){td(this)};function td(e){if(e.h&&typeof va!="undefined"&&(!e.C[1]||It(e)!=4||e.ba()!=2)){if(e.v&&It(e)==4)Ra(e.Fa,0,e);else if(we(e,"readystatechange"),It(e)==4){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var r=String(e.H).match(Vf)[1]||null;if(!r&&j.self&&j.self.location){var s=j.self.location.protocol;r=s.substr(0,s.length-1)}i=!XE.test(r?r.toLowerCase():"")}n=i}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var o=2<It(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",ed(e)}}finally{ds(e)}}}}function ds(e,t){if(e.g){nd(e);const n=e.g,i=e.C[0]?Or:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=i}catch{}}}function nd(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(j.clearTimeout(e.A),e.A=null)}function It(e){return e.g?e.g.readyState:0}R.ba=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),GE(t)}};function Rl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Zf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ZE(e){let t="";return ya(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function ja(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ZE(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ce(e,t,n))}function Yn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function id(e){this.za=0,this.l=[],this.h=new os,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yn("baseRetryDelayMs",5e3,e),this.$a=Yn("retryDelaySeedMs",1e4,e),this.Ya=Yn("forwardChannelMaxRetries",2,e),this.ra=Yn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new zf(e&&e.concurrentRequestLimit),this.Ca=new qE,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}R=id.prototype;R.ma=8;R.G=1;function $a(e){if(rd(e),e.G==3){var t=e.V++,n=Tt(e.F);ce(n,"SID",e.J),ce(n,"RID",t),ce(n,"TYPE","terminate"),Xi(e,n),t=new Wi(e,e.h,t,void 0),t.K=2,t.v=us(Tt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(t.v.toString(),"")),!n&&j.Image&&(new Image().src=t.v,n=!0),n||(t.g=fd(t.l,null),t.g.ea(t.v)),t.F=Date.now(),zi(t)}ud(e)}R.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function ps(e){e.g&&(Ha(e),e.g.cancel(),e.g=null)}function rd(e){ps(e),e.u&&(j.clearTimeout(e.u),e.u=null),Mr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&j.clearTimeout(e.m),e.m=null)}function Bs(e,t){e.l.push(new VE(e.Za++,t)),e.G==3&&gs(e)}function gs(e){Gf(e.i)||e.m||(e.m=!0,Sa(e.Ha,e),e.C=0)}function eb(e,t){return Xf(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=qi(ye(e.Ha,e,t),ld(e,e.C)),e.C++,!0)}R.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Wi(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=wf(s),If(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=sd(this,r,t),n=Tt(this.F),ce(n,"RID",e),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Xi(this,n),this.o&&s&&ja(n,this.o,s),xa(this.i,r),this.Ra&&ce(n,"TYPE","init"),this.ja?(ce(n,"$req",t),ce(n,"SID","null"),r.$=!0,Ao(r,n,null)):Ao(r,n,t),this.G=2}}else this.G==3&&(e?Ol(this,e):this.l.length==0||Gf(this.i)||Ol(this))};function Ol(e,t){var n;t?n=t.m:n=e.V++;const i=Tt(e.F);ce(i,"SID",e.J),ce(i,"RID",n),ce(i,"AID",e.U),Xi(e,i),e.o&&e.s&&ja(i,e.o,e.s),n=new Wi(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=sd(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xa(e.i,n),Ao(n,i,t)}function Xi(e,t){e.j&&La({},function(n,i){ce(t,i,n)})}function sd(e,t,n){n=Math.min(e.l.length,n);var i=e.j?ye(e.j.Oa,e.j,e):null;e:{var r=e.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{WE(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function od(e){e.g||e.u||(e.Y=1,Sa(e.Ga,e),e.A=0)}function Ba(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=qi(ye(e.Ga,e),ld(e,e.A)),e.A++,!0)}R.Ga=function(){if(this.u=null,ad(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=qi(ye(this.bb,this),e)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Oe(10),ps(this),ad(this))};function Ha(e){e.B!=null&&(j.clearTimeout(e.B),e.B=null)}function ad(e){e.g=new Wi(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=Tt(e.oa);ce(t,"RID","rpc"),ce(t,"SID",e.J),ce(t,"CI",e.N?"0":"1"),ce(t,"AID",e.U),Xi(e,t),ce(t,"TYPE","xmlhttp"),e.o&&e.s&&ja(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=us(Tt(t)),n.s=null,n.U=!0,jf(n,e)}R.ab=function(){this.v!=null&&(this.v=null,ps(this),Ba(this),Oe(19))};function Mr(e){e.v!=null&&(j.clearTimeout(e.v),e.v=null)}function cd(e,t){var n=null;if(e.g==t){Mr(e),Ha(e),e.g=null;var i=2}else if(Co(e.i,t))n=t.D,Jf(e.i,t),i=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=Oa(),we(i,new Uf(i,n,t,r)),gs(e)}else od(e);else if(r=t.o,r==3||r==0&&0<e.I||!(i==1&&eb(e,t)||i==2&&Ba(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:en(e,5);break;case 4:en(e,10);break;case 3:en(e,6);break;default:en(e,2)}}}function ld(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function en(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var i=ye(e.jb,e);n||(n=new hn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Dr(n,"https"),us(n)),zE(n.toString(),i)}else Oe(2);e.G=0,e.j&&e.j.va(t),ud(e),rd(e)}R.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Oe(2)):(this.h.info("Failed to ping google.com"),Oe(1))};function ud(e){e.G=0,e.I=-1,e.j&&((Yf(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,_a(e.l),e.l.length=0),e.j.ua())}function hd(e,t,n){let i=ME(n);if(i.i!="")t&&Nr(i,t+"."+i.i),Lr(i,i.m);else{const r=j.location;i=xE(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&ya(e.aa,function(r,s){ce(i,s,r)}),t=e.D,n=e.sa,t&&n&&ce(i,t,n),ce(i,"VER",e.ma),Xi(e,i),i}function fd(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new fe(new hs({ib:!0})):new fe(e.qa),t.L=e.H,t}function dd(){}R=dd.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function Ke(e,t){ge.call(this),this.g=new id(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Pr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pr(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Gn(this)}Ee(Ke,ge);Ke.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Sa(ye(e.hb,e,t))),Oe(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=hd(e,null,e.W),gs(e)};Ke.prototype.close=function(){$a(this.g)};Ke.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Bs(this.g,t)}else this.v?(t={},t.__data__=Aa(e),Bs(this.g,t)):Bs(this.g,e)};Ke.prototype.M=function(){this.g.j=null,delete this.j,$a(this.g),delete this.g,Ke.Z.M.call(this)};function pd(e){Da.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ee(pd,Da);function gd(){Na.call(this),this.status=1}Ee(gd,Na);function Gn(e){this.g=e}Ee(Gn,dd);Gn.prototype.xa=function(){we(this.g,"a")};Gn.prototype.wa=function(e){we(this.g,new pd(e))};Gn.prototype.va=function(e){we(this.g,new gd(e))};Gn.prototype.ua=function(){we(this.g,"b")};Ke.prototype.send=Ke.prototype.u;Ke.prototype.open=Ke.prototype.m;Ke.prototype.close=Ke.prototype.close;Pa.NO_ERROR=0;Pa.TIMEOUT=8;Pa.HTTP_ERROR=6;PE.COMPLETE="complete";as.OPEN="a";as.CLOSE="b";as.ERROR="c";as.MESSAGE="d";ge.prototype.listen=ge.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.La;fe.prototype.getLastErrorCode=fe.prototype.Da;fe.prototype.getStatus=fe.prototype.ba;fe.prototype.getResponseJson=fe.prototype.Qa;fe.prototype.getResponseText=fe.prototype.ga;fe.prototype.send=fe.prototype.ea;const Pl="@firebase/firestore";/**
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
 */class De{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let ms="9.6.10";/**
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
 */const xr=new Gr("@firebase/firestore");function Fe(e,...t){if(xr.logLevel<=Q.DEBUG){const n=t.map(md);xr.debug(`Firestore (${ms}): ${e}`,...n)}}function Va(e,...t){if(xr.logLevel<=Q.ERROR){const n=t.map(md);xr.error(`Firestore (${ms}): ${e}`,...n)}}function md(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function vd(e="Unexpected state"){const t=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+e;throw Va(t),new Error(t)}function Ur(e,t){e||vd()}/**
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
 */const ot={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends St{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class tb{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(De.UNAUTHENTICATED))}shutdown(){}}class ib{constructor(t){this.t=t,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ur(typeof i.accessToken=="string"),new tb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ur(t===null||typeof t=="string"),new De(t)}}class rb{constructor(t,n,i){this.type="FirstParty",this.user=De.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class sb{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new rb(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ob{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ab{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const i=s=>{s.error!=null&&Fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,Fe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):Fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ur(typeof n.token=="string"),this.p=n.token,new ob(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function cb(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}class lb{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=cb(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}/**
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
 */class ub{constructor(t,n,i,r,s,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Li{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Li&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var kl,W;(W=kl||(kl={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";function _d(e){return e.name==="IndexedDbTransactionError"}function Hs(){return typeof document!="undefined"?document:null}class hb{constructor(t,n,i=1e3,r=1.5,s=6e4){this.Jn=t,this.timerId=n,this.lo=i,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&Fe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Ka{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new Ka(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(ot.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fb(e,t){if(Va("AsyncQueue",`${t}: ${e}`),_d(e))return new at(ot.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class db{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=De.UNAUTHENTICATED,this.clientId=lb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Fe("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Fe("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new at(ot.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=fb(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}const Dl=new Map;function pb(e,t,n,i){if(t===!0&&i===!0)throw new at(ot.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Nl{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new at(ot.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new at(ot.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,pb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class gb{constructor(t,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nl({}),this._settingsFrozen=!1,t instanceof Li?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new at(ot.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(r.options.projectId)}(t))}get app(){if(!this._app)throw new at(ot.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new at(ot.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nl(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nb;switch(n.type){case"gapi":const i=n.client;return Ur(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new sb(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new at(ot.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Dl.get(t);n&&(Fe("ComponentProvider","Removing Datastore"),Dl.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class mb{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new hb(this,"async_queue_retry"),this.Ua=()=>{const n=Hs();n&&Fe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const n=Hs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new Nn;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!_d(t))throw t;Fe("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const n=this.Na.then(()=>(this.$a=!0,t().catch(i=>{this.Fa=i,this.$a=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Va("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.$a=!1,i))));return this.Na=n,n}enqueueAfterDelay(t,n,i){this.qa(),this.La.indexOf(t)>-1&&(n=0);const r=Ka.createAndSchedule(this,t,n,i,s=>this.Qa(s));return this.Oa.push(r),r}qa(){this.Fa&&vd()}verifyOperationInProgress(){}async ja(){let t;do t=this.Na,await t;while(t!==this.Na)}Wa(t){for(const n of this.Oa)if(n.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const n=this.Oa.indexOf(t);this.Oa.splice(n,1)}}class vb extends gb{constructor(t,n,i){super(t,n,i),this.type="firestore",this._queue=new mb,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yb(this),this._firestoreClient.terminate()}}function _b(e=ah()){return Ui(e,"firestore").getImmediate()}function yb(e){var t;const n=e._freezeSettings(),i=function(r,s,o,a){return new ub(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new db(e._authCredentials,e._appCheckCredentials,e._queue,i)}(function(e,t=!0){(function(n){ms=n})(Fi),ft(new Ye("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new vb(r,new ib(n.getProvider("auth-internal")),new ab(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC")),Ve(Pl,"3.4.7",e),Ve(Pl,"3.4.7","esm2017")})();const wb={apiKey:"AIzaSyANRHn_XwFSzlxjoTp11bO5a5Gl1G9kkGc",authDomain:"al-khawarizmi-berdaya.firebaseapp.com",projectId:"al-khawarizmi-berdaya",storageBucket:"al-khawarizmi-berdaya.appspot.com",messagingSenderId:"529015177437",appId:"1:529015177437:web:30aa94162773b421b09b34",measurementId:"G-X6QPEHLVKF"},yd=g_(wb);_b(yd);const Ib={updateUser(e,t=null){t!=null?(e.user.data=t,e.user.authenticated=!0):(e.user.data=null,e.user.authenticated=!1)},sidebarTrigger(e,t=!1){e.dashboardSidebarOpen=t}};lv();const Vs=Uh(),Eb={tryLogin(e,{email:t,password:n}){oy(Vs,aa).then(()=>{sy(Vs,t,n).then(i=>{e.commit("updateUser",i)}).catch(i=>{alert(i)})})},tryLogout(e){cy(Vs).then(t=>e.commit("updateUser",t)).catch(t=>{alert(t)})}},bb=Mw({state(){return{user:{authenticated:!1,data:null},dashboardSidebarOpen:!0}},mutations:Ib,actions:Eb});zg(xw).use(ei).use(yd).use(bb).mount("body");export{vt as F,Cb as S,Nu as a,Ne as b,Ob as c,Sb as d,hg as e,Pb as f,Uh as g,lv as h,Db as i,ay as j,rt as k,cg as l,si as m,Po as n,Ou as o,Ab as p,Bn as q,sg as r,Rb as s,Tb as t,_w as u,kb as v,_p as w};
