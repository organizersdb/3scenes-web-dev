import{g as C,j as r,n as l,r as h,A as $,a as p,L as w}from"./index-DRR2ciDs.js";import{B as T,S}from"./BaseCard-ByUQUbAa.js";import{A as j}from"./Avatar-DzGO4EEC.js";const k=({id:i,job:c,company:e,status:t="draft",statusRemark:x,updatedAt:o})=>{const a=C(),m=n=>n==="draft"?{buttonText:"",handleClick:()=>{}}:{buttonText:n==="pending screenwriter review"?"管理合約":n==="in-force"?"查看合約":"",handleClick:()=>{let u="";n==="pending screenwriter review"&&(u=`/contract/${i}/screenwriter/review`),n==="in-force"&&(u=`/contract/${i}`),a(u)}},{buttonText:f,handleClick:d}=m(t),s=()=>{if(t==="pending screenwriter review")return`邀約日期：${l(o||0)}`;if(t==="in-force")return`生效日期：${l(o||0)}`};return r.jsx(T,{title:(c==null?void 0:c.title)||"",subtitle:(e==null?void 0:e.name)||"",status:t,statusRemark:x,buttonText:f,onButtonClick:d,timeText:s()})},B=({id:i,job:c,screenwriter:e,status:t="draft",statusRemark:x,createdAt:o,updatedAt:a})=>{const m=C(),f=g=>{const v=g==="draft"?"管理合約":"查看合約",u=()=>g==="draft"?`/contract/${i}/investor/edit`:g==="pending screenwriter review"||g==="in-force"||g==="rejected by screenwriter"?`/contract/${i}`:"";return{buttonText:v,onButtonClick:()=>m(u())}},{buttonText:d,onButtonClick:s}=f(t),n=()=>{if(t==="draft")return a?`最後更新：${l(a||0)}`:`創立日期：${l(o||0)}`;if(t==="pending screenwriter review")return`邀約日期：${l(a||0)}`;if(t==="rejected by screenwriter")return`拒絕日期：${l(a||0)}`;if(t==="in-force")return`生效日期：${l(a||0)}`};return r.jsx("div",{className:"flex flex-col",children:r.jsx(T,{title:(c==null?void 0:c.title)||"",subtitle:r.jsx(j,{name:e==null?void 0:e.name,img:e==null?void 0:e.avatar}),status:t,statusRemark:x,buttonText:d,onButtonClick:s,timeText:n()})})},Y=()=>{var f,d;const[i,c]=h.useState({page:0,pageSize:10,searchText:""}),{authUser:e,authSwrFetcher:t}=h.useContext($),x=e==null?void 0:e.isScreenwriter,{data:o,isLoading:a}=p(`/contract?page=${i.page}&pageSize=${i.pageSize}&searchText=${i.searchText}${x?`&screenwriterId=${(f=e==null?void 0:e.screenwriter)==null?void 0:f.id}&status[]=in-force&status[]=pending%20screenwriter%20review`:""}`,t),m=h.useCallback(s=>{c(n=>({...n,searchText:s}))},[]);return r.jsxs("div",{className:"grid-col grid gap-y-4 py-4 md:p-4",children:[r.jsx("div",{className:"flex flex-col items-center gap-y-2 md:flex-row md:justify-between md:gap-y-0",children:r.jsx("h1",{children:"我的合約"})}),r.jsx(S,{value:i.searchText??"",onChange:m}),r.jsx("div",{children:a?r.jsx(w,{}):(d=o==null?void 0:o.data)==null?void 0:d.map((s,n)=>x?r.jsx(k,{...s},`contract-${n}`):r.jsx(B,{...s},`contract-${n}`))})]})};export{Y as default};
