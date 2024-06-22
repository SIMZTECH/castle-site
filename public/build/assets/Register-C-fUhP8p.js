import{r as a,j as e}from"./app-CvnXDNqH.js";import{L as x}from"./index-D-9L1GeS.js";import{C as u}from"./CastleBetFooter-CNKeCqO4.js";import{f as p}from"./zambia-uSIXTnlC.js";import{H as f}from"./HashLoader-o-yBqv8a.js";import"./index-37nCpuvi.js";import"./index-Chbva42Y.js";import"./iconBase-709gmDFl.js";import"./index-DcIKpsUE.js";import"./SwarmDataContext-CvRijnCG.js";import"./Skeleton-BY4G3q0P.js";import"./animation-RB9YhObT.js";function L({userRegistrationCallBack:n,registerRes:o}){const[c,l]=a.useState(!1),[s,m]=a.useState({username:"",password:"",confirmPassword:"",agreement:!0}),i=()=>s.password===s.confirmPassword,t=async r=>{m({...s,[r.target.name]:r.target.value})},d=async r=>{r.preventDefault(),l(!0),n(s)};return a.useEffect(()=>{l(!1),console.log(o,"i have recieved the response in register")},[o]),e.jsxs("main",{className:"flex flex-col flex-1 h-full px-3 bg-gray-50 ",children:[e.jsx("section",{children:e.jsxs("form",{onSubmit:d,className:"flex-1 w-full sm:max-w-[450px] border mx-auto rounded-md mt-8 p-3 mb-5 shadow-sm",children:[e.jsxs("div",{className:"pt-2 mb-1",children:[e.jsx("label",{for:"username",className:"block mb-1 text-sm font-medium text-[#5c5c5c]",children:"Mobile number"}),e.jsxs("div",{className:"relative ",children:[e.jsx("div",{className:"absolute inset-y-0 flex items-center pointer-events-none start-0 ps-2",children:e.jsx("figure",{className:"h-[15px] w-[15]",children:e.jsx("img",{src:p})})}),e.jsx("input",{name:"username",type:"username",id:"username",value:s.username,onChange:t,class:"bg-gray-50 border border-gray-300 text-[#5c5c5c] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5",placeholder:"+260 96 or 076",required:!0})]}),e.jsx("p",{className:"px-2 text-[#5c5c5c] py-1 text-[13px]",children:"min(10 digits)"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{for:"password",className:"block mb-1 text-sm font-medium text-[#5c5c5c]",children:"Create Password"}),e.jsx("input",{name:"password",type:"password",value:s.password,onChange:t,id:"password",placeholder:"******",className:"shadow-sm bg-gray-50 border border-gray-300 text-[#5c5c5c] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0}),e.jsx("p",{className:"px-2 text-gray-400 py-1 text-[13px]",children:"min(4 digits)"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{for:"confirmPassword",className:"block mb-1 text-sm font-medium text-[#5c5c5c]",children:"Confirm Password"}),e.jsx("input",{name:"confirmPassword",type:"password",value:s.confirmPassword,onChange:t,id:"confirmPassword",placeholder:"******",class:"shadow-sm bg-gray-50 border border-gray-300 text-[#5c5c5c] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:!0}),i()&&e.jsx("p",{className:"px-2 text-gray-400 text-[13px]",children:"min(4 digits)"}),e.jsx("p",{className:"text-red-500 text-[12px] px-2 h-[10px] items-center",children:e.jsx("span",{className:`${i()?"hidden":"block"}`,children:"Passwords do not match!!!"})})]}),e.jsxs("div",{className:"flex items-start mb-5",children:[e.jsx("div",{className:"flex items-center h-5",children:e.jsx("input",{id:"terms",type:"checkbox",checked:!0,className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300",required:!0})}),e.jsxs("label",{for:"terms",className:"text-sm font-medium text-[#5c5c5c] ms-2",children:["I agree with the"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"terms and conditions"})]})]}),e.jsx("button",{disabled:c,className:"w-full text-[14px] h-[35px] flex items-center justify-center text-center active:scale-95 text-white bg-black rounded-md",children:c?e.jsx(f,{size:25,color:"white"}):"CREATE ACCOUNT"}),e.jsxs("p",{className:"text-[13px] text-center text-black py-1",children:["Already have an account?"," ",e.jsx(x,{className:"text-[12px] font-medium hover:underline text-primaryColor",to:"/castle-site?page=login",children:"LOGIN"})]})]})}),e.jsx(u,{})]})}export{L as default};