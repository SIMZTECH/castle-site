import{r as x,W as R,j as s,a as p}from"./app-CvnXDNqH.js";import{A}from"./AdminLayout-BssCtX9X.js";import{T as C,I as T}from"./TextInput-CHs0Lnur.js";import{I as l}from"./InputLabel-DrNi6Pwa.js";import{P as I}from"./PrimaryButton-DyTl7wgh.js";import{T as V}from"./index-_l9Kf6Ul.js";import{M as g}from"./index-DUfaqzCG.js";import{s as d}from"./index-DVATffkL.js";import"./Dropdown-DJtZ-6rc.js";import"./transition-CHpg7afy.js";import"./index-1zygdKgz.js";import"./iconBase-709gmDFl.js";import"./index-Chbva42Y.js";import"./index-1k-Oawyf.js";import"./index-C48BZS1h.js";import"./index-HSfTtyqq.js";import"./index-DHLaGtTn.js";const b=(t=[],n=[])=>t.filter(i=>n.filter(o=>(o==null?void 0:o.id)==(i==null?void 0:i.id)));function P({user:t,roles:n=[],permissions:a=[]}){const[i,o]=x.useState(b(t==null?void 0:t.permissions,a)),[m,h]=x.useState(b(t==null?void 0:t.roles,n)),{data:j,setData:f,patch:u,processing:N,errors:w,reset:D,recentlySuccessful:L}=R({mobile_number:t==null?void 0:t.mobile_number,roles:[],permissions:[]}),k=["permission id","permission name","guard name","last modified"],_=["role id","role name","guard name","last modified"],y=(e=[])=>{const r=[];return e&&e.map(c=>{r.push({label:c==null?void 0:c.name,value:c==null?void 0:c.name,name:c==null?void 0:c.name})}),r},E=e=>{f(e.target.name,e.target.value)},S=e=>{e.preventDefault(),u(d("users.update",t==null?void 0:t.id))};return x.useEffect(()=>{f({...j,permissions:i,roles:m})},[m,i]),s.jsx(A,{children:s.jsx("div",{children:s.jsxs("div",{className:"w-full md:max-w-[1080px] mx-auto mt-8",children:[s.jsx(p,{href:d("users.index"),children:s.jsx("div",{className:"w-[40px] text-[25px] text-white rounded-full bg-opacity-60 flex items-center justify-center h-[40px] bg-slate-500",children:s.jsx(V,{})})}),s.jsxs("form",{onSubmit:S,className:"max-w-[400px] mt-4 space-y-4",children:[s.jsxs("div",{children:[s.jsx(l,{children:"Mobile number"}),s.jsx(C,{id:"mobile_number",type:"text",name:"mobile_number",value:j.mobile_number,placeholder:"role",className:"block w-full mt-1",autoComplete:"phone",isFocused:!0,onChange:E}),s.jsx(T,{message:w.mobile_number})]}),s.jsxs("div",{children:[s.jsx(l,{children:"Assign roles"}),s.jsx(g,{displayValue:"value",onKeyPressFn:function(){},onRemove:h,onSearch:function(){},onSelect:h,options:y(n),selectedValues:m})]}),s.jsxs("div",{children:[s.jsx(l,{children:"Assign permissions"}),s.jsx(g,{displayValue:"value",onKeyPressFn:function(){},onRemove:o,onSearch:function(){},onSelect:o,options:y(a),selectedValues:i})]}),s.jsx("div",{className:"",children:s.jsx(I,{disabled:N,children:"Update"})})]}),s.jsx("div",{className:"w-full mt-5 mb-5",children:s.jsx("div",{className:"relative overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400",children:[s.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",className:"px-6 py-3",children:"#NO"}),k.map((e,r)=>s.jsx("th",{scope:"col",className:"px-6 py-3",children:e},r)),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"  "})]})}),s.jsx("tbody",{children:t.permissions.map((e,r)=>s.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:r+1}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.id}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.name}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.guard_name}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.created_at}),s.jsx("td",{className:"flex gap-4 px-6 py-4",children:s.jsx(p,{method:"DELETE",as:"button",href:d("users.permissions.destroy",[t==null?void 0:t.id,e==null?void 0:e.id]),children:"revock"})})]},e==null?void 0:e.id))})]})})}),s.jsx("div",{className:"w-full mt-5 mb-5",children:s.jsx("div",{className:"relative overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400",children:[s.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",className:"px-6 py-3",children:"#NO"}),_.map((e,r)=>s.jsx("th",{scope:"col",className:"px-6 py-3",children:e},r)),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"  "})]})}),s.jsx("tbody",{children:t.roles.map((e,r)=>s.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:r+1}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.id}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.name}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.guard_name}),s.jsx("td",{className:"px-6 py-4",children:e==null?void 0:e.created_at}),s.jsx("td",{className:"flex gap-4 px-6 py-4",children:s.jsx(p,{method:"DELETE",as:"button",href:d("users.roles.destroy",[t==null?void 0:t.id,e==null?void 0:e.id]),children:"revock"})})]},e==null?void 0:e.id))})]})})})]})})})}export{P as default};