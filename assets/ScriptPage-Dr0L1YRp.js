import{r as a,j as e,T as x,A as h,u as m,a as p,L as f,d as g}from"./index-DRR2ciDs.js";import{S as j}from"./SceneCard-CIrGpZac.js";import{S as u}from"./ScriptHeader-BeMvvwfA.js";import"./index-CDqgC5ys.js";const b=()=>e.jsx("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.5 10V0L5.5 5L0.5 10Z",fill:"#1C1B1F"})}),w=()=>e.jsx("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0 0.5L10 0.5L5 5.5L0 0.5Z",fill:"#1C1B1F"})}),v=({screenwriters:n})=>{const[r,c]=a.useState(!1),t=a.useCallback(s=>{s&&(console.log(s),window.open(s,"_blank"))},[]),o="block w-[120px] px-4 py-1 rounded-full bg-white text-black border border-black";if(n.length===1){const{url:s}=n[0];return e.jsx("div",{className:`text-center font-sans ${o} select-none`,onClick:()=>t(s),children:"編劇檔案"})}return e.jsxs("div",{className:"font-sans",children:[e.jsxs("div",{className:`${o} flex items-center justify-between`,onClick:()=>c(!r),children:["編劇檔案 ",r?e.jsx(w,{}):e.jsx(b,{})]}),r&&e.jsx("ul",{className:"absolute mt-2 flex w-[120px] flex-col",children:n.map(({url:s,name:i},l)=>e.jsx("li",{className:`border border-x-black border-b-black px-2 py-1 text-center ${l===0&&"rounded-t-xl border-t-black"}  ${l===n.length-1&&"rounded-b-xl"}`,onClick:()=>t(s),children:i},i))})]})},N=[{anchor:"logline",text:"前文題要"},{anchor:"scenes",text:"劇本"},{anchor:"screenwriters",text:"編劇檔案"}],L=()=>{var i;const{showAlert:n}=a.useContext(x),{authSwrFetcher:r}=a.useContext(h),{id:c}=m(),{data:t,isLoading:o,error:s}=p(`/script/view?id=${c}`,r);return a.useEffect(()=>{s&&n({severity:"ERROR",content:JSON.stringify(s)})},[s,n]),c?o?e.jsx(f,{}):t?e.jsxs("div",{className:"mt-8 font-serif md:mt-24",children:[t.highlight&&e.jsx(u,{text:t.highlight}),e.jsxs("div",{className:"grid md:grid-cols-12 md:px-12 md:py-32",children:[e.jsx("aside",{className:"sticky top-[220px] col-span-3 hidden self-start md:block",children:e.jsx(g,{anchors:N})}),e.jsxs("div",{className:"col-span-9",children:[e.jsx("section",{id:"logline",className:"mb-20 md:mb-36",children:e.jsx("p",{className:"md:text-3xl md:leading-[3rem]",children:t.logline})}),e.jsx("section",{id:"scenes",className:"mb-16 flex flex-col gap-y-16 md:mb-36 md:gap-y-36",children:(i=t.scenes)==null?void 0:i.map((l,d)=>{if(l)return e.jsx("div",{children:e.jsx(j,{scene:l})},d)})}),e.jsxs("section",{id:"screenwriters",children:[e.jsx("hr",{className:"long-dash"}),e.jsx("div",{className:"mx-auto flex justify-center py-12",children:e.jsx(v,{screenwriters:t.author})})]})]})]})]}):e.jsx(e.Fragment,{}):e.jsx("div",{children:"No script ID provided"})};export{L as default};
