import{e as y,f as g,af as C,ag as h,ah as x,a as E,ai as A,aj as P,o as n,l as R,u as o,c as p,m as k,b as v,d as c,_ as l}from"./entry.0f755084.js";const z=c(()=>l(()=>import("./PageRenderer.5a510a29.js"),["PageRenderer.5a510a29.js","Prose.6d7cea88.js","Prose.34e9590c.css","entry.0f755084.js","entry.f084df7e.css","ContentRenderer.7cd1b5ea.js","MarkdownRenderer.4e77094d.js"],import.meta.url).then(e=>e.default||e)),L=c(()=>l(()=>import("./PostRenderer.5ae2667b.js"),["PostRenderer.5ae2667b.js","entry.0f755084.js","entry.f084df7e.css","Breadcrumbs.50578814.js","Breadcrumbs.779fa518.css","ContentRenderer.7cd1b5ea.js","MarkdownRenderer.4e77094d.js","Prose.6d7cea88.js","Prose.34e9590c.css"],import.meta.url).then(e=>e.default||e)),N=y({__name:"[...slug]",async setup(e){let a,s;const d=([a,s]=g(()=>v()),a=await a,s(),a),{data:t,error:m}=d;if(m.value){const r=C();h(r,A,[x({statusCode:404,statusMessage:`Page not found: ${E().path}`})])}else P(t);return(r,w)=>{var _,u;const i=z,f=L;return n(),R("div",null,[((_=o(t))==null?void 0:_.renderer)==="page"?(n(),p(i,{key:0,page:o(t)},null,8,["page"])):((u=o(t))==null?void 0:u.renderer)==="post"?(n(),p(f,{key:1,post:o(t)},null,8,["post"])):k("",!0)])}}});export{N as default};
