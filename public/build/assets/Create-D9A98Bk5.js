import{W as p,j as e,a as l}from"./app-CBVCwPI-.js";import{A as c}from"./AdminLayout-BRkglKD7.js";import{T as x,I as d}from"./TextInput-D1b92x8L.js";import{I as u}from"./InputLabel-D2t45HIq.js";import{P as h}from"./PrimaryButton-CX0pN_8-.js";import{T as f}from"./index-CbG4Z0os.js";import"./Dropdown-Dx2iHlIf.js";import"./transition-B6BpYvuT.js";import"./index-DC1DQd6V.js";import"./iconBase-BUBZRE_X.js";import"./index-CkSLb4vN.js";import"./index-CtXaslrX.js";import"./index-D0BPGt83.js";import"./index-DkHLz7aV.js";import"./index-CrePnuC3.js";function B(){const{data:s,setData:r,post:a,processing:i,errors:m,reset:j,recentlySuccessful:g}=p({name:""}),o=t=>{r(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},n=t=>{t.preventDefault(),a(route("permissions.store"))};return e.jsx(c,{children:e.jsx("div",{children:e.jsxs("div",{className:"w-full md:max-w-[1080px] mx-auto mt-8",children:[e.jsx(l,{href:route("permissions.index"),children:e.jsx("div",{className:"w-[40px] text-[25px] text-white rounded-full bg-opacity-60 flex items-center justify-center h-[40px] bg-slate-500",children:e.jsx(f,{})})}),e.jsxs("form",{onSubmit:n,className:"max-w-[400px] mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx(u,{children:"permission name"}),e.jsx(x,{id:"name",type:"text",name:"name",value:s.name,placeholder:"permission",className:"block w-full mt-1",autoComplete:"name",isFocused:!0,onChange:o}),e.jsx(d,{message:m.name})]}),e.jsx("div",{className:"",children:e.jsx(h,{disabled:i,children:"Create"})})]})]})})})}export{B as default};