import{j as s}from"./app-CvnXDNqH.js";import{f as h}from"./index-Chbva42Y.js";import{I as a}from"./index-COKPrLgz.js";import{H as m}from"./index-CD-ue5hF.js";import{b as f}from"./index-_l9Kf6Ul.js";import{f as N}from"./DateFormatter-CgdAk38a.js";import{f as b}from"./index-37nCpuvi.js";import"./iconBase-709gmDFl.js";function M({amount:t,odds:l,outcome:e,payout:x,events:i,bet_id:r,date_time:n,possible_win:d}){const{formattedDate:p,formattedTime:c}=N(n),j=b();return s.jsxs("div",{onClick:()=>j(`/castle-site?page=betslip&betslip_id=${r}`,{state:{bet_id:r}}),className:"px-3 py-1 mb-3 bg-[#f6f8fc8d] rounded-md cursor-pointer shadow-sm",children:[s.jsxs("header",{className:"flex items-center gap-3 border-b-[1px] pb-1",children:[(e==0||e==2)&&s.jsx("span",{className:"text-textMediumBlue text-[18px]",children:s.jsx(a,{})}),e==1&&s.jsx("span",{className:"text-red-700 text-[18px]",children:s.jsx(h,{})}),(e==5||e==3)&&s.jsx("span",{className:"text-green-700 text-[18px]",children:s.jsx(a,{})}),s.jsxs("div",{className:"flex-1 text-[11px]",children:[s.jsxs("p",{children:[p," ",s.jsxs("span",{children:["(",c,")"]})]}),s.jsxs("p",{className:"flex items-center gap-1",children:["Accumulator"," ",s.jsx("span",{className:"b text-primaryColor",children:s.jsx(m,{})})," ",i==null?void 0:i.length]}),s.jsxs("p",{children:["ID ",s.jsx("span",{children:r})]})]}),s.jsx("span",{className:"text-[15px]",children:s.jsx(f,{})})]}),s.jsxs("div",{className:"flex flex-col pt-1 space-y-1 text-[11px] text-textMediumBlue",children:[e!==5&&s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{children:"Odds"}),s.jsx("p",{children:l})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{children:"Stake"}),s.jsxs("p",{children:["K",t]})]}),(e==3||e==5)&&s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{children:"Paid Out"}),s.jsxs("p",{children:["K",x]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{children:"status"}),s.jsxs("p",{className:`capitalize b ${e==1?"text-red-500 font-medium":`${e==3||e==5?"text-green-500 font-medium":`${e==2||e==0?"text-gray-700":""}`}`}`,children:[e==3&&s.jsx("span",{children:"Won"}),e==5&&s.jsx("span",{children:"Cashed Out"}),e==1&&s.jsx("span",{children:"Lost"}),e==2&&s.jsx("span",{children:"Void"}),e==0&&s.jsx("span",{children:"Not Resulted"})]})]}),e!==5&&s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{children:"return"}),s.jsxs("p",{children:["K",d]})]})]})]})}export{M as default};