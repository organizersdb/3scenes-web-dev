import{r as l,T as R,u as P,f as G,J as Y,g as z,A as H,j as e,B as d,M as k}from"./index-DRR2ciDs.js";import{u as K,b as T,C as x}from"./Input-B6_56Pay.js";import{T as V}from"./Textarea-kr1sqQC7.js";import{R as w,S as m}from"./RadioGroup-B9-TZJ69.js";import{S as h}from"./SectionTitle-D1bwP6RQ.js";import{S as W}from"./Separator-C5vIcpzW.js";import{F as Q}from"./FullScreenLoading-Bp5CqUL4.js";const te=()=>{var S,M;const{theme:a}=l.useContext(R),{jobId:j}=P(),{createJob:q,updateJob:B}=l.useContext(G),{job:f}=l.useContext(Y),{showAlert:g}=l.useContext(R),b=z(),[I,N]=l.useState(!1),[O,r]=l.useState(!1),[A,v]=l.useState(!1),{companies:L}=l.useContext(H),y=((S=f==null?void 0:f.company)==null?void 0:S.id)||((M=L[0])==null?void 0:M.id),{register:n,control:c,trigger:D,formState:{errors:t},handleSubmit:E,watch:o}=K({mode:"onChange",defaultValues:f}),C=l.useCallback(async()=>{b("/acknowledgement",{state:{initialCountdown:3,heading:"你的徵稿啟事申請已成功遞交！",paragraphs:["3scenes.io 將會於 3 個工作天內審閱申請，成功申請將會刊登於本平台。","如有任何查詢，請聯絡 info@3scenes.io"],countdownText:"頁面將於{countdown}秒後返回 Dashboard",redirectPath:"/dashboard"}})},[b]),F=l.useCallback(()=>{r(!0)},[]),J=l.useCallback(async s=>{if(r(!0),v(!0),s.id){const i=await B({...s,companyId:y});v(!1),i.id?C():(r(!1),g({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"}))}else{const i=await q({...s,companyId:y,status:"pending admin review"});v(!1),i.id?C():(r(!1),g({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"}))}},[y,q,C,g,B]);return A?e.jsx(Q,{}):e.jsx("div",{className:"flex max-w-2xl justify-center",children:e.jsxs("form",{className:"flex max-w-lg flex-col",children:[e.jsxs("h1",{className:"text-center font-sans text-xl font-bold md:text-left md:text-3xl",children:[j?"更新":"發布","徵稿啟事"," "]}),e.jsx(W,{className:"hidden md:block"}),e.jsxs("div",{className:"mt-12 flex flex-col gap-y-16",children:[e.jsxs("section",{children:[e.jsx(h,{current:1,total:5,title:"你想發布那一類型的徵稿啟事？"}),e.jsx("div",{className:"flex flex-col gap-y-6 py-9",children:e.jsx(w,{label:"合作模式：",multiple:!0,fieldName:"collabMode",options:[{label:"具體工作",value:"具體工作"},{label:"初期開發",value:"初期開發"},{label:"構思",value:"構思"}],register:n,watch:o,errors:t,validation:{required:"請選擇合作模式"}})})]}),e.jsxs("section",{children:[e.jsx(h,{current:2,total:5,title:"為你的徵稿啟事起題"}),e.jsx("p",{className:"text-sm",children:"想將你的構思化為故事橋段？你可以寫一個有趣的題目引起編劇興趣，亦可以詳述你需要的服務內容，讓編劇馬上瞭解到你的需要。"}),e.jsxs("div",{className:"flex flex-col gap-y-2 py-[60px]",children:[e.jsx(T,{watch:o,fieldName:"title",register:n,errors:t,maxLength:25,label:"題目",theme:a,dataToolTipId:"title-tooltip",toolTipContent:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-2",children:"例子："}),e.jsxs("ul",{className:"list-[square] pl-4",children:[e.jsx("li",{children:"一對新婚夫婦突然遇上車禍…"}),e.jsx("li",{children:"一個科學家意外穿越時空，回到秦朝…"}),e.jsx("li",{children:"緊急重寫喜劇劇本（已有分場、初稿）"}),e.jsx("li",{children:"尋找代筆，代寫大綱及簡單分場"})]})]}),validation:{required:"請輸入題目"}}),e.jsx(x,{name:"projectType",control:c,rules:{required:"請選擇項目規模"},render:({field:s})=>e.jsx(m,{...s,options:["參展短片","網絡短片","劇情長片","電視劇","舞台劇場","廣播劇","教學內容"],label:"項目規模",hintText:"（單選）",componentTheme:a,errors:t})}),e.jsx(x,{name:"categories",control:c,rules:{required:"請選擇類型"},render:({field:s})=>e.jsx(m,{...s,options:["教學內容","劇情","愛情","喜劇","家庭","警匪","犯罪","恐怖","懸疑","動作","武俠","古裝","科幻","律政","運動","推理","青春","兒童","記錄片","短片劇本","英語劇本"],label:"類型",hintText:"（最多兩項）",isMulti:!0,componentTheme:a,max:2,errors:t})})]})]}),e.jsxs("section",{children:[e.jsx(h,{current:3,total:5,title:"請估算一下這個項目的規模和編劇的工作範圍"}),e.jsx("p",{className:"text-sm",children:"請填寫以下資訊，幫助我們為你推薦符合你需要的合適人才。你之後仍可隨時修改詳情。"}),e.jsxs("div",{className:"flex flex-col gap-y-2 py-[60px]",children:[e.jsx(x,{name:"helpNeed",control:c,rules:{required:"請選擇工作"},render:({field:s})=>e.jsx(m,{...s,options:["Research / 提供點子","試稿／劇本代筆","故事大綱","人物小傳","其他文案","簡單分場","詳細分場","分場發展成劇本","緊急重寫／修改某稿","顧問／劇本醫生"],label:"在這個階段，你希望這次應徵的編劇能為你完成那一些工作？",hintText:"（可多選）",isMulti:!0,componentTheme:a,errors:t})}),e.jsx(x,{name:"deadline",control:c,rules:{required:"請選擇限期"},render:({field:s})=>e.jsx(m,{...s,options:["接單後1周內","接單後2周內","接單後1個月內","接單後2個月內","接單後3個月內"],label:"編劇需要在甚麼限期內完成以上工作？",hintText:"（單選）",componentTheme:a,errors:t})}),e.jsx(x,{name:"authorship",control:c,rules:{required:"請選擇署名權"},render:({field:s})=>e.jsx(m,{...s,options:["可議（或視乎實際參與程度）","編劇（單一編劇，或名單首名）","聯合編劇","編審","跟場編劇","故事","沒有署名（代筆）"],label:"完成以上工作後，編劇可得到甚麼署名權？",hintText:"（單選）",componentTheme:a,errors:t})}),e.jsx(w,{register:n,label:"完成以上工作後，編劇可保留那些部分的版權？（單選）",fieldName:"copyright",options:[{label:"可議",value:"可議"},{label:"沒有版權",value:"沒有版權"}],watch:o,errors:t,validation:{required:"請選擇版權"}})]})]}),e.jsxs("section",{children:[e.jsx(h,{current:4,total:5,title:"你能為以上的工作提供多少預算？"}),e.jsx("p",{className:"text-sm",children:"我們會按此預算範圍為你尋找合適編劇。"}),e.jsxs("div",{className:"flex flex-col gap-y-6 py-9",children:[e.jsx(w,{register:n,fieldName:"rate",options:[{label:"月薪結算",value:"月薪結算"},{label:"定額結算",value:"定額結算"}],watch:o,errors:t,validation:{required:"請選擇結算方式"}}),e.jsxs("div",{className:"md:items-top flex flex-col gap-x-4 gap-y-4 md:flex-row",children:[e.jsx(x,{name:"currency",control:c,rules:{required:"請選擇貨幣"},render:({field:s})=>e.jsx(m,{...s,className:"w-[200px]",options:["HKD","TWD","CNY","MYR","SGD"],label:"貨幣",size:"small",componentTheme:a,errors:t})}),e.jsx(T,{watch:o,type:"number",inputMode:"decimal",fieldName:"minBudget",register:n,errors:t,label:"最少",theme:a,validation:{required:"請輸入最少預算",validate:{lessThanMaxBudget:(s,i)=>{const u=Number(s),p=Number(i.maxBudget);return!i.maxBudget||isNaN(p)||isNaN(u)?!0:p>u||"最多預算需高於最低預算"}}}}),e.jsx("span",{children:"-"}),e.jsx(T,{fieldName:"maxBudget",register:n,watch:o,type:"number",inputMode:"decimal",errors:t,label:"最多",theme:a,validation:{required:"請輸入最多預算",validate:{greaterThanMinBudget:(s,i)=>{const u=Number(s),p=Number(i.minBudget);return!i.minBudget||isNaN(u)||isNaN(p)?!0:u>p||"最多預算需高於最低預算"}}}})]})]})]}),e.jsxs("section",{children:[e.jsx(h,{current:5,total:5,title:"請詳述是次徵稿的工作內容",dataToolTipId:"title-5-tooltip",toolTipContent:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-2",children:"編劇會想看到："}),e.jsxs("ul",{className:"list-[square] pl-4",children:[e.jsx("li",{children:"清晰列明你的期望"}),e.jsx("li",{children:"需要交付的檔案"}),e.jsx("li",{children:"良好的溝通"}),e.jsx("li",{children:"有關你或你的團隊的工作方式之細節"})]})]})}),e.jsx(V,{fieldName:"fullDescription",register:n,placeholder:"計劃簡介",maxLength:200,errors:t,validation:{required:"請輸入計劃簡介",maxLength:{value:200,message:"最多輸入200字"}},watch:o})]}),e.jsxs("section",{className:"flex justify-end gap-x-8 py-10",children:[e.jsx(d,{text:"取消",type:"reset",onClick:()=>N(!0)}),e.jsx(d,{className:"border-indigo bg-indigo text-white",text:j?"更新徵稿啟事":"發布徵稿啟事",onClick:async()=>{await D()&&F()}})]})]}),e.jsx(k,{isOpen:I,onClose:()=>N(!1),children:e.jsxs("div",{className:"mx-auto flex flex-col items-center gap-y-2 py-10 text-center",children:[e.jsxs("div",{className:"font-serif text-3xl font-bold",children:["你確定要取消",j?"更新":"發布",e.jsx("br",{}),"新徵稿啟事嗎？"]}),e.jsx("div",{className:"font-light",children:"3scenes 不會紀錄未儲存資料"}),e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx(d,{text:"取消發布",type:"button",onClick:()=>b("/dashboard")}),e.jsx(d,{text:"繼續發布",type:"button",onClick:()=>N(!1)})]})]})}),e.jsx(k,{isOpen:O,onClose:()=>r(!1),children:e.jsxs("div",{className:"mx-auto flex flex-col items-center gap-y-2 py-10 text-center",children:[e.jsx("div",{className:"font-serif text-3xl font-bold",children:"你確定要發布徵稿啟事嗎？"}),e.jsx("div",{className:"font-light",children:"3scenes.io 將會於 3 個工作天內審閱，成功申請將會刊登於本平台。"}),e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx(d,{text:"返回",type:"button",onClick:()=>r(!1)}),e.jsx(d,{className:"border-indigo bg-indigo text-white",text:j?"更新徵稿啟事":"建立徵稿啟事",type:"button",onClick:E(J)})]})]})})]})})};export{te as default};
