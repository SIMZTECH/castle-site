import{r as a,W as j,j as e,a as g}from"./app-Bdz8U-JN.js";import{A as b}from"./AdminLayout-BEv1yfu3.js";import{T as y,I as C}from"./TextInput-CeU4glsG.js";import{I as c}from"./InputLabel-BPF4v9ZX.js";import{P as S}from"./PrimaryButton-DekYmlo9.js";import{T as w}from"./index-D38Vun6w.js";import{M as N}from"./index-DXAxeEQu.js";import"./Dropdown-ByUF5YLp.js";import"./transition-B7TXYEI3.js";import"./index-3s6h75TQ.js";import"./iconBase-1NaSG4wA.js";import"./index-5uflDiLC.js";import"./index-KcG-XtG0.js";import"./index-DfpGWnH-.js";import"./index-BT-Uq5RZ.js";import"./index-B2V79RLg.js";function z({permissions:l=[]}){const[r,o]=a.useState([]),{data:n,setData:i,post:p,processing:u,errors:d,reset:k,recentlySuccessful:I}=j({name:"",permissions:""}),x=(t=[])=>{const m=[];return t&&t.map(s=>{m.push({label:s==null?void 0:s.name,value:s==null?void 0:s.name,name:s==null?void 0:s.name})}),m},f=t=>{i(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},h=t=>{t.preventDefault(),p(route("roles.store"))};return a.useEffect(()=>{i({...n,permissions:r})},[r]),e.jsx(b,{children:e.jsx("div",{children:e.jsxs("div",{className:"w-full md:max-w-[1080px] mx-auto mt-8",children:[e.jsx(g,{href:route("roles.index"),children:e.jsx("div",{className:"w-[40px] text-[25px] text-white rounded-full bg-opacity-60 flex items-center justify-center h-[40px] bg-slate-500",children:e.jsx(w,{})})}),e.jsxs("form",{onSubmit:h,className:"max-w-[400px] mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx(c,{children:"Role name"}),e.jsx(y,{id:"name",type:"text",name:"name",value:n.name,placeholder:"role",className:"block w-full mt-1",autoComplete:"name",isFocused:!0,onChange:f}),e.jsx(C,{message:d.name})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{children:"Assign permissions"}),e.jsx(N,{displayValue:"value",onKeyPressFn:function(){},onRemove:o,onSearch:function(){},onSelect:o,options:x(l),selectedValues:r})]}),e.jsx("div",{className:"",children:e.jsx(S,{disabled:u,children:"Create"})})]})]})})})}export{z as default};