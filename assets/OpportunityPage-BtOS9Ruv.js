import{u as c,r as u,A as x,a as d,g as m,j as s,L as l,B as p}from"./index-DRR2ciDs.js";import{B as j}from"./Back-D9ukjQ2Z.js";import{O as f}from"./OpportunityDetail-CnR58Gq9.js";const v=()=>{const{id:e}=c(),{authUser:a,authSwrFetcher:r}=u.useContext(x),{data:t,isLoading:o}=d(`/job/view?id=${e}`,r),i=m();if(!e)return s.jsx("div",{children:"No job post ID provided"});if(o||!t||!a)return s.jsx(l,{});const n=a.isScreenwriter;return s.jsxs("div",{className:"mt-16",children:[s.jsx(j,{}),s.jsx(f,{...t}),n&&s.jsx(p,{size:"small",className:"mx-auto my-6 block border border-black",text:"立即投稿",onClick:()=>i(`/proposal/new/${t.id}`)}),s.jsx("p",{className:"text-center text-sm font-light",children:"如有任何疑問，請電郵 info@3scenes.io"})]})};export{v as default};
