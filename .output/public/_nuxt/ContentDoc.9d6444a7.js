import{e as h,a as m,G as y,H as o,a1 as g,a2 as C}from"./entry.0f755084.js";import D from"./ContentRenderer.7cd1b5ea.js";import q from"./ContentQuery.395bd61a.js";import"./MarkdownRenderer.4e77094d.js";const S=h({props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>m().path},query:{type:Object,required:!1,default:void 0}},render(c){const t=y(),{tag:d,excerpt:a,path:p,query:s}=c,f=Object.assign(s||{},{path:p,find:"one"}),l=(n,e)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:e},null,2)),u=n=>{if(p!==m().path)return;const e=Object.assign({},n.head);e.title=e.title||n.title,e.meta=e.meta||[];const r=e.description||n.description;r&&e.meta.filter(i=>i.name==="description").length===0&&e.meta.push({name:"description",content:r}),e.image&&e.meta.filter(i=>i.property==="og:image").length===0&&e.meta.push({property:"og:image",content:e.image}),g(()=>C(e))};return o(q,f,{default:t!=null&&t.default?({data:n,refresh:e,isPartial:r})=>(u(n),t.default({doc:n,refresh:e,isPartial:r,excerpt:a,...this.$attrs})):({data:n})=>(u(n),o(D,{value:n,excerpt:a,tag:d,...this.$attrs},{empty:e=>t!=null&&t.empty?t.empty(e):l("default",n)})),empty:n=>{var e;return((e=t==null?void 0:t.empty)==null?void 0:e.call(t,n))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var e;return((e=t==null?void 0:t["not-found"])==null?void 0:e.call(t,n))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{S as default};