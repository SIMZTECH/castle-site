import{r as i,l as x,j as s}from"./app-D5o-_rBG.js";import{T as m}from"./index-wbaureKg.js";import n from"./TransactionCard-DgWht6iI.js";import{a as p}from"./UserAuthenticationContext-DYQ2QGHb.js";import{f}from"./index-C1wajDrb.js";import"./iconBase-LMNcHqz0.js";import"./DateFormatter-CgdAk38a.js";function g(){const{authUser:t}=i.useContext(p),[o,a]=i.useState([]),c=f();return i.useEffect(()=>{var e,l;x.isNil((e=t==null?void 0:t.transaction_history)==null?void 0:e.history)||a((l=t==null?void 0:t.transaction_history)==null?void 0:l.history)},[t]),console.log(o),s.jsxs("main",{className:"relative flex flex-col h-full sm:bg-transparent bg-[#f0f2f7] sm:w-[98%] sm:mx-auto sm:pb-8 profile-container",children:[s.jsxs("header",{className:"fixed sm:hidden flex items-center w-full h-[55px] px-4  shadow-md select-none bg-gray-800 font-poppins",children:[s.jsxs("button",{onClick:()=>c("/castle-site?page=profile"),className:" text-[16px] gap-1 cursor-pointer flex items-center justify-center",children:[s.jsx("div",{className:"w-[22px] text-gray-500 h-[22px] bg-white rounded-full flex items-center justify-center",children:s.jsx(m,{})}),s.jsx("p",{className:"text-[13px]  text-white",children:"Go Back"})]}),s.jsx("h3",{className:"flex  items-center absolute left-1/2 transform -translate-x-1/2 text-[13px] justify-center  flex-1 text-white",children:"Transaction History"})]}),s.jsxs("section",{className:"flex-1 pt-16 overflow-y-scroll sm:pt-5 font-poppins profile-container",children:[s.jsx("div",{className:"text-start hidden sm:block text-[#27393f] text-[20px] mx-4 font-medium mb-1",children:"TRANSACTION STATEMENT"}),s.jsx("h4",{className:"mx-4 text-[14px] sm:hidden text-[#27393f]",children:"Transactions"}),s.jsx("div",{className:"flex flex-col gap-1 py-4",children:o.map(e=>s.jsx(n,{dept:(e==null?void 0:e.operation)>0,trans_id:e==null?void 0:e.transaction_id,time_stamp:e==null?void 0:e.date_time,bal:e==null?void 0:e.balance,amount:e==null?void 0:e.amount,operation_name:e==null?void 0:e.operation_name,bet_id:e==null?void 0:e.bet_id}))})]})]})}export{g as default};
