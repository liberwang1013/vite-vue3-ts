var Le=Object.defineProperty,Pe=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))Be.call(t,n)&&oe(e,n,t[n]);if(se)for(var n of se(t))je.call(t,n)&&oe(e,n,t[n]);return e},v=(e,t)=>Pe(e,$e(t));var b=(e,t,n)=>new Promise((s,o)=>{var a=u=>{try{c(n.next(u))}catch(l){o(l)}},r=u=>{try{c(n.throw(u))}catch(l){o(l)}},c=u=>u.done?s(u.value):Promise.resolve(u.value).then(a,r);c((n=n.apply(e,t)).next())});import{u as N,a as ze,w as re,b as m,d as E,h as Ne,r as C,c as h,e as d,z as Ue,C as Ke,o as p,f as i,g as Ve,i as w,n as qe,j as We,k as Ge,l as ae,M as He,m as R,I as ie,p as Je,q as Qe,s as Xe,t as ue,v as ce,x as U,y as K,A as le,F as de,B as Ye,D as y,E as V,_ as me,G as pe,H as _e,J as Ze,K as O,L as et,N as tt,O as he,P as fe,T as nt,Q as st,R as ot,S as rt,U as at,V as it,W as ut,X as ct,Y as lt,Z as dt,$ as mt,a0 as pt,a1 as _t,a2 as ge,a3 as ve,a4 as ht,a5 as ft,a6 as gt,a7 as vt,a8 as yt,a9 as bt,aa as q,ab as kt,ac as St}from"./vendor.928f869a.js";const At=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};At();function It(){const{currentRoute:e}=N(),t=ze();re([()=>e.value.path],()=>{var o;const n=m(e),s=(o=n==null?void 0:n.meta)==null?void 0:o.title;t.value=s},{immediate:!0})}const Et=E({setup(e){return Ne.locale("zh_CN"),It(),(t,n)=>{const s=C("router-view");return p(),h(m(Ke),{locale:m(Ue)},{default:d(()=>[i(s)]),_:1},8,["locale"])}}}),Tt="modulepreload",ye={},Ct="/vite-vue3-ts/",k=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${Ct}${s}`,s in ye)return;ye[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":Tt,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((c,u)=>{r.addEventListener("load",c),r.addEventListener("error",u)})})).then(()=>t())},qn="vite-vue3-admin",wt="//at.alicdn.com/t/font_3004192_9jmc1z9neiw.js";var M=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const Rt=Ve({scriptUrl:wt}),Mt=E({components:{IconFont:Rt},props:{type:{type:String,required:!0},className:{type:String,default:""},align:{type:String,default:""},size:{type:String,default:"18px"}},setup(e){return{iconType:w(()=>`icon-a-SimpleChainlianmenglianjichubantubiao_${e.type}`),iconClass:w(()=>e.className?`my-icon ${e.className}`:"my-icon"),iconStyle:w(()=>{const t={};return e.align&&(t["vertical-align"]=e.align),e.size&&(t["font-size"]=e.size),t})}}});function xt(e,t,n,s,o,a){const r=C("icon-font");return p(),h(r,{style:qe(e.iconStyle),class:We(e.iconClass),type:e.iconType},null,8,["style","class","type"])}var W=M(Mt,[["render",xt],["__scopeId","data-v-574a32cc"]]);const G=Ge(),H="x-auth-token";function J(){return localStorage.getItem(H)||""}function Dt(e){localStorage.setItem(H,e)}function Ft(){localStorage.setItem(H,"")}const Ot=Object.prototype.toString;function Lt(e,t){return Ot.call(e)===`[object ${t}]`}function Pt(e){return Lt(e,"String")}function Wn(e){return typeof e=="function"}function be(e){return e&&Array.isArray(e)}function ke(e){return e==="warning"?i(ie,{class:"modal-icon-warning"},null):e==="success"?i(Je,{class:"modal-icon-success"},null):e==="info"?i(ie,{class:"modal-icon-info"},null):i(Qe,{class:"modal-icon-error"},null)}function Se({content:e}){return Pt(e)?i("div",{innerHTML:`<div>${e}</div>`},null):e}function $t(e){const t=e.iconType||"warning";Reflect.deleteProperty(e,"iconType");const n=v(_({centered:!0,icon:ke(t)},e),{content:Se(e)});return R.confirm(n)}const Bt=()=>({okText:"\u786E\u5B9A",centered:!0});function L(e,t){return v(_(_({},Bt()),e),{content:Se(e),icon:ke(t)})}function jt(e){return R.success(L(e,"success"))}function zt(e){return R.error(L(e,"close"))}function Nt(e){return R.info(L(e,"info"))}function Ut(e){return R.warning(L(e,"warning"))}ae.config({placement:"topRight",duration:3});function Kt(){return{createMessage:He,notification:ae,createConfirm:$t,createSuccessModal:jt,createErrorModal:zt,createInfoModal:Nt,createWarningModal:Ut}}const{createMessage:Ae}=Kt(),Vt="",x=Xe.create({baseURL:Vt,withCredentials:!0,timeout:1e4});x.interceptors.request.use(e=>{const t=J();return t&&(e.headers=v(_({},e.headers),{Authorization:t})),e},e=>Promise.reject(e));x.interceptors.response.use(e=>{const t=e.data;if(t.code===0)return t.result||!0;t.code===-1&&Jt().logout(),Ae.error(t.message)},e=>{console.log("err"+e),e!=="\u6CA1\u6709\u64CD\u4F5C\u6743\u9650"&&Ae.error("\u7F51\u7EDC\u8D85\u65F6\uFF0C\u7A0D\u540E\u518D\u8BD5\u5427")});const Ie=(e,t)=>typeof e=="string"?t?x.request(_({url:e},t)):x.request({url:e}):x.request(e);function qt(e,t){return Ie(v(_({},e),{method:"GET"}),t)}function Wt(e,t){return Ie(v(_({},e),{method:"POST"}),t)}var P;(function(e){e.login="/v1/user/login",e.permission="/v1/user/permission"})(P||(P={}));const Gt=e=>b(void 0,null,function*(){return Wt({url:P.login,data:e})}),Ht=()=>b(void 0,null,function*(){return qt({url:P.permission})});var Ee={login:Gt,permission:Ht};const Te=ue({id:"app-user",state:()=>({token:"",auths:[]}),getters:{getToken(){return this.token||J()}},actions:{setToken(e){this.token=e!=null?e:"",Dt(e)},setAuth(e){this.auths=e},resetState(){this.token="",this.auths=[]},login(e){return b(this,null,function*(){const t=yield Ee.login(e);return t&&this.setToken(t.token),t})},logout(){return b(this,null,function*(){this.resetState(),Ft(),S.replace("/login"),location.reload()})}}});function Jt(){return Te(G)}const Qt=[{icon:"yonghuguanli",name:"\u7528\u6237\u7BA1\u7406",path:"/sys/user",auth:"user"},{icon:"jiaoseguanli",name:"\u89D2\u8272\u7BA1\u7406",path:"/sys/role",auth:"role"},{icon:"xitongrizhi",name:"\u7CFB\u7EDF\u65E5\u5FD7",path:"/sys/logs",auth:"log"},{icon:"zhanghaozhongxin",name:"\u8D26\u53F7\u4E2D\u5FC3",path:"/sys/account"},{icon:"tuichudenglu_huaban1fuben17",name:"\u9000\u51FA\u767B\u5F55"}],Q=(e,t)=>{const n=[];return e.forEach(s=>{const{auth:o}=s.meta||{};o?ce(t,o).length>0&&(s.children&&(s.children=Q(s.children,t)),n.push(s)):(s.children&&(s.children=Q(s.children,t)),n.push(s))}),n},X=ue({id:"app-permission",state:()=>({isGetUserInfo:!1,isAdmin:0,auths:[],modules:[]}),getters:{getAuths(){return this.auths},getModules(){return this.modules},getIsAdmin(){return this.isAdmin},getIsGetUserInfo(){return this.isGetUserInfo}},actions:{setAuth(e,t){this.auths=e,this.isGetUserInfo=!0,this.modules=t},setIsAdmin(e){this.isAdmin=e},resetState(){this.isGetUserInfo=!1,this.isAdmin=0,this.auths=[],this.modules=[]},fetchAuths(){return b(this,null,function*(){const e=yield Ee.permission();return e&&(this.setAuth(e.auths,e.modules),this.setIsAdmin(e.is_admin||0)),e})},buildRoutesAction(){return b(this,null,function*(){let e=[...ee,...Me,...xe];return this.getIsAdmin!==1&&(e=[...ee,...Q(Me,this.modules),...xe]),e})}}});function Xt(){return X(G)}const Yt=e=>(pe("data-v-a2d2af04"),e=e(),_e(),e),Zt={class:"sys-setting"},en=Yt(()=>y("span",{class:"setting"},"\u7CFB\u7EDF\u8BBE\u7F6E",-1)),tn=E({setup(e){const t=Te(),n=X(),s=N(),o=U(Qt),a=U([]);K(()=>{const c=n.getModules;c.length&&n.getIsAdmin===0&&(o.value=m(o).filter(u=>u.auth?c.includes(u.auth):!0))}),K(()=>{if(s.currentRoute){const c=s.currentRoute.value.matched.concat();a.value=c.filter(u=>u.name!=="index").map(u=>u.path)}});const r=c=>{if(c)return s.push(c);t.logout()};return(c,u)=>{const l=W,f=Ze,F=O,j=et;return p(),le("div",Zt,[i(j,{placement:"bottomCenter"},{overlay:d(()=>[i(F,{selectedKeys:a.value,class:"menu-box"},{default:d(()=>[(p(!0),le(de,null,Ye(o.value,g=>(p(),h(f,{key:g.path,onClick:ne=>r(g==null?void 0:g.path)},{icon:d(()=>[i(l,{align:"1px",size:"20px",type:g.icon},null,8,["type"])]),default:d(()=>[y("span",null,V(g.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selectedKeys"])]),default:d(()=>[i(m(me),{class:"wrap",align:"baseline",direction:"horizontal"},{default:d(()=>[i(l,{align:"2px",type:"xitongshezhi"}),en,i(l,{align:"2px",type:"xialajiantou"})]),_:1})]),_:1})])}}});var nn=M(tn,[["__scopeId","data-v-a2d2af04"]]),sn="/vite-vue3-ts/assets/logo.0fa8bc0f.png";const on=e=>(pe("data-v-845f722e"),e=e(),_e(),e),rn={class:"logo-wrap"},an=["src"],un=on(()=>y("h1",{class:"title"}," SimpleChain\u8054\u76DF\u94FE ",-1)),cn=E({setup(e){return(t,n)=>{const s=C("router-link"),o=tt;return p(),h(o,{class:"header"},{default:d(()=>[y("div",rn,[i(s,{to:{path:"/"}},{default:d(()=>[y("img",{src:m(sn),class:"logo"},null,8,an),un]),_:1})]),y("div",null,[i(nn)])]),_:1})}}});var ln=M(cn,[["__scopeId","data-v-845f722e"]]);function Ce(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!rt(e)}var dn=E({name:"BaseMenu",props:{theme:{type:String,default:"light"},menuWidth:{type:Number,default:208},menuData:{type:Array,default:()=>[]}},setup(e){const t=he({collapsed:!1,openKeys:[],selectedKeys:[]});K(()=>{if(S.currentRoute){const a=S.currentRoute.value.matched.concat();t.selectedKeys=a.filter(r=>r.name!=="index").map(r=>r.path),t.openKeys=a.filter(r=>r.path!==S.currentRoute.value.path).map(r=>r.path)}});const n=a=>{S.push(a.key)},s=a=>a?i(W,{type:a},null):null,o=a=>a.map(r=>{var c,u;if(r.children){let l;return i(O.SubMenu,{key:r.path,title:i(de,null,[s((c=r.meta)==null?void 0:c.icon),i("span",null,[(u=r.meta)==null?void 0:u.title])])},Ce(l=o(r.children))?l:{default:()=>[l]})}return i(O.Item,{key:r.path},{default:()=>{var l,f;return[s((l=r.meta)==null?void 0:l.icon),i("span",null,[(f=r.meta)==null?void 0:f.title])]}})});return()=>{let a;return i(fe.Sider,{width:208,collapsedWidth:54,class:"my-sideMenu-sider",theme:"light",trigger:null,breakpoint:"lg",onBreakpoint:r=>t.collapsed=r,collapsible:!0,collapsed:t.collapsed},{default:()=>[i(nt,{name:"fade-top"},{default:()=>[!t.collapsed&&i("div",{class:"my-sideMenu-sider_logo"},[i(me,{align:"center",class:"link"},{default:()=>[i(W,{type:"guanlipingtai",size:"20px",align:"0px"},null),i("span",{class:"font16 nowrap"},[st("\u7BA1\u7406\u5E73\u53F0")])]})])]}),i(O,ot({theme:"light",mode:"inline",selectedKeys:t.selectedKeys},t.collapsed?{}:{openKeys:t.openKeys},{onOpenChange:r=>t.openKeys=r,onSelect:n,class:"my-sideMenu-sider_menu"}),Ce(a=o(e.menuData))?a:{default:()=>[a]}),i("div",{class:"my-sideMenu-sider_footer"},[at(t.collapsed?it:ut,{className:"trigger",style:{fontSize:16},onClick:()=>t.collapsed=!t.collapsed})])]})}}});function mn(e){return e=e||new Map,{all:e,on(t,n){const s=e==null?void 0:e.get(t);s&&s.push(n)||e==null||e.set(t,[n])},off(t,n){const s=e==null?void 0:e.get(t);s&&s.splice(s.indexOf(n)>>>0,1)},emit(t,n){((e==null?void 0:e.get(t))||[]).slice().map(s=>{s(n)}),((e==null?void 0:e.get("*"))||[]).slice().map(s=>{s(t,n)})},clear(){this.all.clear()}}}const Y=mn(),Z=Symbol(),pn=(e=!0)=>{const t=ct(),n=U(t.meta.title);re(()=>t.meta.title,a=>{n.value=a});const s=a=>n.value=a;return lt(()=>e&&Y.on(Z,s)),dt(()=>e&&Y.off(Z,s)),{title:n,setBreadcrumbTitle:a=>Y.emit(Z,a)}};function we(e){return e.map(n=>{var o,a;const s=_({},n);if(!s.name||((o=s.meta)==null?void 0:o.hideInMenu))return null;if(s&&(s==null?void 0:s.children)){if(!((a=s.meta)==null?void 0:a.hideChildInMenu)&&s.children.some(r=>{var c;return r&&r.name&&!((c=r.meta)==null?void 0:c.hideInMenu)}))return v(_({},n),{children:we(s.children)});delete s.children}return s}).filter(n=>n)}const _n=e=>{const t=[];return e.forEach(n=>{n.children&&n.children.forEach(({path:s})=>t.push(s))}),e.filter(({path:n})=>!t.includes(n))};const hn={class:"font14 color-666"},fn={class:"marL10"},gn=E({setup(e){const t=N(),{title:n}=pn(),s=_n(we(t.getRoutes()).filter(u=>u.path.startsWith("/app/"))),o=he({theme:"light",menuWidth:208,menuData:s}),a=w(()=>t.currentRoute.value.meta),r=w(()=>t.currentRoute.value.matched.filter(u=>!["/","/app"].includes(u.path)).map(u=>({path:u.path,breadcrumbName:u.meta.title||""}))),c=()=>{var l,f;const u=(f=(l=r.value)==null?void 0:l[r.value.length-2])==null?void 0:f.path;u&&t.push(u)};return(u,l)=>{const f=ht,F=ft,j=gt,g=C("router-view"),ne=vt,z=fe;return p(),h(z,{class:"basicLayout-wrap"},{default:d(()=>[i(ln),i(z,null,{default:d(()=>[i(m(dn),mt(pt(m(o))),null,16),i(z,{class:"basicLayout-content"},{default:d(()=>[m(a).breadcrumb?(p(),h(F,{key:0},{default:d(()=>[i(f,{routes:m(r)},{itemRender:d(({route:T})=>[y("span",hn,V(T.breadcrumbName),1)]),_:1},8,["routes"]),y("h2",{class:"font18 marT13 rowSC link",onClick:c},[i(m(_t)),y("span",fn,V(m(n)),1)])]),_:1})):ge("",!0),i(ne,null,{default:d(()=>[m(a).breadcrumb?(p(),h(j,{key:0,class:"line"})):ge("",!0),m(a).hiddenWrap?(p(),h(g,{key:1},{default:d(({Component:T})=>[(p(),h(ve(T)))]),_:1})):(p(),h(F,{key:2},{default:d(()=>[i(g,null,{default:d(({Component:T})=>[(p(),h(ve(T)))]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})}}});var vn=M(gn,[["__scopeId","data-v-d4aac9b4"]]);const yn={};function bn(e,t){const n=C("router-view");return p(),h(n)}var Re=M(yn,[["render",bn]]);const Me=[{path:"/app",name:"app",component:vn,redirect:"/app/home",meta:{title:"\u7BA1\u7406\u5E73\u53F0"},children:[{path:"/app/home",component:()=>k(()=>import("./index.8d9de2e2.js"),["assets/index.8d9de2e2.js","assets/index.3e66b82a.css","assets/index.0289aea8.css","assets/index.31bd26c9.css","assets/index.1ca33a27.css","assets/index.7d7ea2c6.css","assets/index.3a98f357.js","assets/index.69fab3f5.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"]),name:"home",meta:{title:"\u9996\u9875",icon:"liulanqi",auth:["home"]}},{path:"/app/website",name:"website",component:()=>k(()=>import("./index.9937b900.js"),["assets/index.9937b900.js","assets/index.621a2271.css","assets/index.31bd26c9.css","assets/index.1ca33a27.css","assets/index.7d7ea2c6.css","assets/index.0289aea8.css","assets/index.3a98f357.js","assets/index.69fab3f5.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"]),meta:{title:"\u7F51\u7AD9\u7BA1\u7406",keepAlive:!0,icon:"jiedianguanli",auth:["website"]}},{path:"/app/others",name:"others",component:Re,redirect:"/app/others/about",meta:{title:"\u5176\u4ED6\u83DC\u5355",icon:"xitongrizhi",auth:["others"]},children:[{path:"/app/others/about",name:"about",component:()=>k(()=>import("./index.59933cc8.js"),["assets/index.59933cc8.js","assets/index.0289aea8.css","assets/index.3f525870.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"]),meta:{title:"\u5173\u4E8E",keepAlive:!0,hiddenWrap:!0}},{path:"/app/others/antdv",name:"antdv",component:()=>k(()=>import("./index.409299c0.js"),["assets/index.409299c0.js","assets/index.31bd26c9.css","assets/index.0289aea8.css","assets/index.3f525870.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"]),meta:{title:"\u7EC4\u4EF6",keepAlive:!0,breadcrumb:!0}}]},{path:"/sys/account",name:"account",component:()=>k(()=>import("./index.8b6485c7.js"),["assets/index.8b6485c7.js","assets/index.e1c73b83.css","assets/index.7d7ea2c6.css","assets/index.0289aea8.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"]),meta:{title:"\u7528\u6237\u7BA1\u7406",keepAlive:!0,breadcrumb:!0}}]}],ee=[{path:"/login",component:()=>k(()=>import("./index.65fca2ad.js"),["assets/index.65fca2ad.js","assets/index.fbabf61a.css","assets/index.1ca33a27.css","assets/index.0289aea8.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"]),name:"login",meta:{title:"\u767B\u5F55"}},{path:"/",name:"Root",redirect:"/app",meta:{title:"Root"}}],xe=[{path:"/redirect",component:Re,children:[{path:"/redirect/:path(.*)",component:()=>k(()=>import("./index.4ec4b225.js"),["assets/index.4ec4b225.js","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"])}]},{path:"/:pathMatch(.*)",redirect:"/404"},{path:"/404",component:()=>k(()=>import("./404.2ba29645.js"),["assets/404.2ba29645.js","assets/404.afe0327a.css","assets/vendor.928f869a.js","assets/vendor.acd76b9f.css"])}],S=yt({history:bt(),routes:ee,strict:!0,scrollBehavior:()=>({left:0,top:0})});function kn(){const e=X();function t(n,s=!0){var o;return n?e.getIsAdmin===1?!0:be(n)?be(n)?ce(n,e.getAuths).length>0:!0:(o=e.getAuths)==null?void 0:o.includes(n):s}return{hasPermission:t}}function Sn(e,t){var o;const{hasPermission:n}=kn(),s=t.value;!s||n(s)||(o=e.parentNode)==null||o.removeChild(e)}const An=(e,t)=>{Sn(e,t)},In={mounted:An};function En(e){e.directive("auth",In)}function Tn(e){En(e)}const te=Xt(),Cn=["/login"];S.beforeEach((e,t,n)=>b(void 0,null,function*(){J()?e.path==="/login"?n({path:"/"}):te.getIsGetUserInfo?n():(yield te.fetchAuths(),(yield te.buildRoutesAction()).forEach(r=>{S.addRoute(r)}),n(v(_({},e),{replace:!0}))):Cn.indexOf(e.path)!==-1?n():n("/login")}));function I(e,{message:t="ok"}={}){return{code:0,result:e,message:t,type:"success"}}function wn(e,t,n,{message:s="ok"}={}){const o=De(e,t,n);return v(_({},I({items:o,total:n.length})),{message:s})}function A(e="Request failed",{code:t=-1,result:n=null}={}){return{code:t,result:n,message:e,type:"error"}}function De(e,t,n){const s=(e-1)*Number(t);return s+Number(t)>=n.length?n.slice(s,n.length):n.slice(s,s+Number(t))}function $({headers:e}){return e==null?void 0:e.authorization}var Rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",resultSuccess:I,resultPageSuccess:wn,resultError:A,pagination:De,getRequestToken:$});const Mn=q.mock({"items|60":[{id:"@id",url:"@url",ip:"@ip",protocol:"@protocol","host|1":[80,443],domain:"@domain",email:"@email"}]});var xn=[{url:"/v1/common/page_one/list",method:"get",response:()=>{const e=Mn.items;return{code:0,result:{total:e.length,list:e}}}}],Dn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xn});const Fn=q.mock({"items|30":[{id:"@id",title:"@ctitle",mobile:"@phone",name:"@cname",description:"@cparagraph",created_at:"@datetime",updated_at:"@datetime",age:"@natural(10,50)",color:"@color",email:"@email"}]}),On={hu_num:42,yun_num:87755,ce_num:3,create_time:1636352741,online_num:101,total_num:110,seven_days:[{id:9,num:7,time:"20211130"},{id:8,num:80,time:"20211129"},{id:0,num:280,time:"20211128"},{id:0,num:0,time:"20211127"},{id:7,num:5,time:"20211126"},{id:6,num:20,time:"20211125"},{id:5,num:5,time:"20211124"}]};var Ln=[{url:"/v1/home/info",method:"get",response:()=>I(On)},{url:"/v1/home/list",method:"get",response:()=>{const e=Fn.items;return{code:0,result:{total:e.length,list:e}}}}],Pn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ln});const $n=q.mock({"items|30":[{id:"@id",title:"@sentence(10, 20)",account:"@phone",true_name:"@name",created_at:"@datetime",role_name:"@name"}]});var Bn=[{url:"/table/list",method:"get",response:()=>{const e=$n.items;return{code:0,result:{total:e.length,list:e}}}}],jn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bn});function D(){return[{userId:"1",username:"admin",realName:"sssgoEasy Admin",avatar:"",desc:"manager",password:"123456",token:"fakeToken1",auths:[],modules:[],is_admin:1,role_name:"\u7BA1\u7406\u5458\u89D2\u8272",mobile:13e9,last_login:"2021-11-11 12:00"},{userId:"2",username:"test",password:"123456",realName:"test user",avatar:"",desc:"tester",token:"fakeToken2",auths:[],modules:["home","website"],is_admin:0,role_name:"\u666E\u901A\u7528\u6237\u89D2\u8272",mobile:18e9,last_login:"2021-11-11 12:12"}]}var zn=[{url:"/v1/user/login",timeout:200,method:"post",response:({body:e})=>{const{username:t,password:n}=e,s=D().find(o=>o.username===t&&n===o.password);return s?I(s):A("Incorrect account or password\uFF01")}},{url:"/v1/user/permission",method:"get",response:e=>{const t=$(e);if(!t)return A("Invalid token");const n=D().find(s=>s.token===t);return n?I(n):A("The corresponding user information was not obtained!")}},{url:"/v1/user/logout",timeout:200,method:"get",response:e=>{const t=$(e);return t?D().find(s=>s.token===t)?I(void 0,{message:"Token has been destroyed"}):A("Invalid token!"):A("Invalid token")}},{url:"/v1/account/info",method:"get",response:e=>{const t=$(e);if(!t)return A("Invalid token");const n=D().find(s=>s.token===t);return n?I(n):A("The corresponding user information was not obtained!")}}],Nn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",createFakeUserList:D,default:zn});const Fe={"./_util.ts":Rn,"./common.ts":Dn,"./home.ts":Pn,"./table.ts":jn,"./user.ts":Nn},Oe=[];Object.keys(Fe).forEach(e=>{e.includes("/_")||Oe.push(...Fe[e].default)});function Un(){kt(Oe)}const B=St(Et);B.use(G);B.use(S);Tn(B);B.mount("#app");Un();export{qn as A,M as _,Kt as a,Te as b,W as c,qt as g,Wn as i,Wt as p,kn as u};