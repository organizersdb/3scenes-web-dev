import{g as j,j as e,n as p,r as m,A as v,a as N,B as A,L as C}from"./index-DRR2ciDs.js";import{B as y,S as T}from"./BaseCard-ByUQUbAa.js";const S=({id:d,title:l="",createdAt:o,updatedAt:r,proposalCnt:x,messagedCount:g,hiredCount:n,status:a="draft",rate:c})=>{const t=j(),i=(h=>h==="open"||h==="closed"?{text:"查看申請",onClick:()=>t(`/job/${d}`)}:h==="draft"?{text:"編輯徵稿",onClick:()=>t(`/job/${d}/edit`)}:null)(a),f=e.jsxs("div",{className:"grid grid-cols-3 gap-x-4",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("div",{children:a==="draft"?"N/A":x}),e.jsx("div",{className:"text-gray-500",children:"申請人數"})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("div",{children:a==="draft"?"N/A":g||0}),e.jsx("div",{className:"text-gray-500",children:"已聯絡"})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("div",{children:a==="draft"?"N/A":n||0}),e.jsx("div",{className:"text-gray-500",children:"已聘請"})]})]}),u=()=>{if(a==="pending admin review")return`提交日期：${p(o||0)}`;if(a==="open")return`發布日期：${p(r||0)}`;if(a==="closed")return`結束日期：${p(r||0)}`};return e.jsx(y,{title:l,subtitle:e.jsx("div",{children:c}),status:a,children:f,buttonText:i==null?void 0:i.text,onButtonClick:i==null?void 0:i.onClick,timeText:u()})},k=()=>{var c;const d=j(),{authUser:l,authSwrFetcher:o}=m.useContext(v),[r,x]=m.useState({page:0,pageSize:100,searchText:""}),g=m.useCallback(t=>{x(s=>({...s,searchText:t}))},[]),{data:n,isLoading:a}=N(`/job?page=${r.page}&pageSize=${r.pageSize}&searchText=${r.searchText}`,o);return l?e.jsxs("div",{className:"grid-col grid gap-y-4 py-4 md:p-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-y-2 md:flex-row md:justify-between md:gap-y-0",children:[e.jsx("h1",{children:"我的徵稿啟事"}),e.jsx(A,{className:"border-indigo bg-indigo text-white",text:"發布徵稿啟事",onClick:()=>d("/job/new")})]}),e.jsx(T,{value:r.searchText??"",onChange:g}),e.jsx("div",{children:a?e.jsx(C,{}):(c=n==null?void 0:n.data)==null?void 0:c.sort((t,s)=>t.updatedAt&&s.updatedAt?s.updatedAt-t.updatedAt:t.createdAt&&s.createdAt?s.createdAt-t.createdAt:0).map(t=>e.jsx(S,{...t},t.id))})]}):e.jsx(e.Fragment,{})};export{k as default};
