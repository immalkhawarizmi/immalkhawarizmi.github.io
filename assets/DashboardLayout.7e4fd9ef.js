import{_ as y}from"./alkhawarizmi.b5ccb83b.js";import{g as p,u as v,h as b,r as l,o as i,c as m,a as t,b as o,w as a,p as f,d as g,e as n,i as D,j as $,S as I}from"./index.82c814cd.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const x=e=>(f("data-v-792b0a90"),e=e(),g(),e),k={class:"bg1 py-2 sticky-top"},w={class:"container"},S={class:"d-flex justify-content-between align-items-center"},L=x(()=>t("div",{class:"col-3 p-1"},[t("i",{class:"fa-light fa-square-ellipsis-vertical fa-2xl text3"})],-1)),A={class:"col text-center p-1"},H=x(()=>t("img",{class:"logo-brand",src:y,alt:"",srcset:""},null,-1)),B=n(" IMM AL-KHAWARIZMI "),C={class:"col-3 text-end p-1"},K={setup(e){p();const _=v(),s=b(),c=()=>{_.dispatch("tryLogout").then(()=>{s.push({name:"Login"})})};return(h,r)=>{const d=l("router-link");return i(),m("header",k,[t("div",w,[t("div",S,[L,t("div",A,[o(d,{class:"h4 text3 hov0 text-decoration-none fw-bold",to:{name:"Home"}},{default:a(()=>[H,B]),_:1})]),t("div",C,[t("button",{type:"button",class:"btn btn-sm bg3 hov text1 hovtd",onClick:r[0]||(r[0]=O=>c())}," Keluar ")])])])])}}};var M=u(K,[["__scopeId","data-v-792b0a90"]]);const N={},P=e=>(f("data-v-2e1d3a64"),e=e(),g(),e),R={class:"bg1 px-4 text3"},V=P(()=>t("div",{class:"p-2 py-4"},[t("h2",{class:"fw-bolder"},"Dashboard"),t("h5",null,"AL-KHAWARIZMI")],-1)),j={class:"menu"},T=n("Dashboard"),W=n("Postingan"),Z=n("Kegiatan"),q=n("Pimpinan"),E=n("Pengaturan");function z(e,_){const s=l("router-link");return i(),m("aside",R,[V,t("div",null,[t("ul",j,[t("li",null,[o(s,{class:"bg1 hovd text3 hovt p-2",to:{name:"Dashboard"}},{default:a(()=>[T]),_:1})]),t("li",null,[o(s,{class:"bg1 hovd text3 hovt p-2",to:{name:"Dashboard"}},{default:a(()=>[W]),_:1})]),t("li",null,[o(s,{class:"bg1 hovd text3 hovt p-2",to:{name:"Dashboard"}},{default:a(()=>[Z]),_:1})]),t("li",null,[o(s,{class:"bg1 hovd text3 hovt p-2",to:{name:"Dashboard"}},{default:a(()=>[q]),_:1})]),t("li",null,[o(s,{class:"bg1 hovd text3 hovt p-2",to:{name:"Dashboard"}},{default:a(()=>[E]),_:1})])])])])}var F=u(N,[["render",z],["__scopeId","data-v-2e1d3a64"]]);const G=n(" wait "),J={setup(e){const _=v(),s=b(),c=p();return _.state.user.authenticated||s.push({name:"Login"}),D(c,h=>{setTimeout(()=>{_.state.user.authenticated||s.push({name:"Login"})},2e3)}),(h,r)=>{const d=l("router-view");return i(),$(I,null,{default:a(()=>[t("div",null,[o(M),o(F),o(d)])]),fallback:a(()=>[G]),_:1})}}};var Y=u(J,[["__scopeId","data-v-660b22a2"]]);export{Y as default};
