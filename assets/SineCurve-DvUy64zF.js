import{r as t,j as v}from"./index-DRR2ciDs.js";const b=({width:r=800,direction:s="decrease"})=>{const l=t.useRef(null),m=40,a=t.useRef(0),f=t.useRef(-4),c=t.useRef(0),h=t.useCallback((e,n)=>{const R=e.canvas.width,g=e.canvas.height,k=40,d=[];let u=0,p=0;for(;u<R;)p=g/2+a.current*Math.sin((u+n)/k),d.push({x:u,y:p}),u++;e.beginPath(),e.lineWidth=1.5,e.strokeStyle="rgb(0,0,0)",d.forEach(({x:E,y:M})=>{e.lineTo(E,M)}),e.stroke(),e.save(),e.stroke(),e.restore()},[]),i=t.useCallback(()=>{const e=l.current,n=e==null?void 0:e.getContext("2d");n&&(n.clearRect(0,0,r,r),n.save(),h(n,f.current),n.restore(),f.current+=2),requestAnimationFrame(i)},[h,r]),o=t.useCallback(()=>{a.current+=c.current,a.current=Math.max(0,Math.min(m,a.current)),(c.current===-1&&a.current>0||c.current===1&&a.current<m)&&setTimeout(o,1)},[]);return t.useEffect(()=>(requestAnimationFrame(i),s==="increase"?(c.current=1,o()):s==="decrease"&&(c.current=-1,o()),()=>{}),[r,s,i,o]),v.jsx("div",{className:"h-[100px] w-screen",children:v.jsx("canvas",{ref:l,width:r,height:"100"})})},A=(r,s)=>r.width===s.width&&r.direction===s.direction,q=t.memo(b,A);export{q as default};
