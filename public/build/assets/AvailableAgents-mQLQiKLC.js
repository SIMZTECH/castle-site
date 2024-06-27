import{r as o,l as u,j as s}from"./app-CRC_HCL3.js";import{a as j}from"./UserAuthenticationContext-hFE-INai.js";import{a as _}from"./index-DkHLDZms.js";import N from"./SelectedPaymentSystem-CH2AvNvY.js";import{u as v}from"./index-DmpJc7lb.js";import"./iconBase-D1VTUtoT.js";import"./MTNPayment-CTWNuoAp.js";import"./DataStoreTemp-1olddnbH.js";import"./index-Bi1iTqyb.js";import"./animation-6cYxsNWS.js";import"./Skeleton-DjqmHsVV.js";import"./AiretelPayment-DE07A6ou.js";import"./HashLoader-CMP3RYCq.js";import"./animation-RB9YhObT.js";import"./ZamtelPayment-ymFwDpMr.js";import"./PayGoPayment-DSVakLRv.js";import"./index-B8F43R27.js";function B(){const{authUser:r}=o.useContext(j),[i,c]=v(),[n,p]=o.useState({filter:"All",payment_id:""}),[x,f]=o.useState([]),d=e=>{p({...n,filter:e==null?void 0:e.filter,payment_id:e==null?void 0:e.payment_id}),y(e)},y=e=>{const{payment_id:a,filter:t}=e;i.has("filter")&&(i.set("filter",t.toUpperCase()),c(i)),i.has("payment_id")?(i.set("payment_id",a),c(i)):(i.append("payment_id",a),c(i))},h=e=>{const a=[];if(r!=null&&r.payment_services){const{deposit:t,withdrawal:A}=e;if(t!=null&&t.Airtel_Money){const{...l}=t==null?void 0:t.Airtel_Money;a.push({...l,agent:"airtel"})}if(t!=null&&t.ZamtelInstant){const{...l}=t==null?void 0:t.ZamtelInstant;a.push({...l,agent:"zamtel"})}if(t["MTN Deposit"]){const{...l}=t["MTN Deposit"];a.push({...l,agent:"mtn"})}if(t["Zanaco bank transfer"]){const{...l}=t["Zanaco bank transfer"];a.push({...l,agent:"zanaco"})}return a.sort(function(l,m){return(l==null?void 0:l.order)-(m==null?void 0:m.order)})}return a};return o.useEffect(()=>{p({...n,filter:i.get("filter"),payment_id:i.get("payment_id")})},[i]),o.useEffect(()=>{u.isNil(r==null?void 0:r.payment_services)||f(h(r==null?void 0:r.payment_services))},[r==null?void 0:r.payment_services]),console.log(x),s.jsxs("div",{className:"h-full",children:[(n==null?void 0:n.filter)==="All"&&s.jsxs("section",{className:"p-5",children:[s.jsxs("div",{className:"flex items-center text-[12px] text-black gap-1",children:[s.jsx("span",{children:"Account ID :"}),s.jsx("span",{children:r==null?void 0:r.user_id})]}),s.jsx("div",{className:"text-[10px] text-primaryColor text-opacity-60 mb-2",children:"Available payment systems"}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("span",{className:"text-[14px] text-primaryColor text-opacity-60",children:s.jsx(_,{})}),s.jsx("p",{className:"text-[10px] text-[#5c5c5c] font-normal",children:"Supported payment systems in your region"})]}),s.jsx("main",{className:"flex flex-col gap-5 mt-3",children:s.jsxs("div",{className:"flex flex-col",children:[s.jsx("header",{className:"text-[12px] bg-primaryColor p-1 text-white",children:"Mobile Wallet"}),s.jsx("div",{className:"flex flex-wrap items-center gap-2 px-2 pt-3 pb-3 bg-[#f6f8fc]",children:x.map((e,a)=>s.jsx("div",{onClick:()=>d({filter:e==null?void 0:e.agent,payment_id:e==null?void 0:e.PaymentSystem_id}),className:"p-1 flex transition duration-75 ease-in-out w-[80px] h-[80px] flex-wrap items-center justify-center bg-white rounded-md shadow-md cursor-pointer active:scale-100 hover:scale-95",children:s.jsx("figure",{className:"flex items-center justify-end w-full h-full ",children:s.jsx("img",{src:e==null?void 0:e.PaymentSystemIconUrl,alt:"photo",className:"object-cover rounded-md"})})},a))})]})})]}),(n==null?void 0:n.filter)!=="All"&&s.jsx(N,{auth:r,name:n==null?void 0:n.filter})]})}export{B as default};