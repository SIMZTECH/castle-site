import{r as o,j as t}from"./app-r8XvK69h.js";import{u as h}from"./index-DB5vtFC6.js";import j from"./OpenBets-BFySjuRf.js";import v from"./SettledBets-BmsMatDY.js";import{a as g}from"./UserAuthenticationContext-DOfhghB8.js";import"./index-BCf6WEWb.js";import"./BetCardGroup-CPZEnjOx.js";import"./index-Bs6hzq6e.js";import"./iconBase-BHsM4znX.js";import"./index-DhAB4uQs.js";import"./index-CdLPJ4SW.js";import"./index-CCwBDxu7.js";import"./DateFormatter-CgdAk38a.js";import"./ScaleLoader-DfR9qC5w.js";import"./animation-6cYxsNWS.js";import"./ScaleLoader-CyUJoI2R.js";import"./animation-RB9YhObT.js";const b=[{id:1,name:"open",path:"open"},{id:2,name:"settled",path:"settled"},{id:3,name:"jackpot",path:"jackpot"},{id:4,name:"virtual",path:"virtual"},{id:5,name:"free",path:"free"}];function R(){const{authUser:n}=o.useContext(g),[r,x]=h(),[p,d]=o.useState(r.get("filter")),[l,m]=o.useState([]),u=e=>{r.has("filter")&&(r.set("filter",e),x(r))},c=e=>{var f;if((f=n.bet_history)!=null&&f.bets){const{bet_history:s}=n;if(e==0){const a=[];return s==null||s.bets.map(i=>{i.outcome==e&&a.push(i)}),a}else{const a=[];return s==null||s.bets.map(i=>{i.outcome!==0&&a.push(i)}),a}}return[]};return o.useEffect(()=>{d(r.get("filter"))},[r]),o.useEffect(()=>{if(r.get("filter")=="open"){m(c(0));return}else if(r.get("filter")=="settled"){m(c(1));return}},[r,n]),console.log(l),t.jsxs("main",{className:"flex flex-col h-full pb-8 select-none b font-poppins",children:[t.jsx("div",{className:"bg-[#f6f8fc] h-[40px] border-b-[1px] text-gray-500 flex items-center px-4",children:t.jsx("p",{children:"My Bets"})}),t.jsxs("div",{className:"flex flex-col flex-1 overflow-y-scroll mybets-container",children:[t.jsx("div",{className:"flex items-center px-2 sm:py-2 ",children:b.map(e=>t.jsx("div",{onClick:()=>u(e.path),className:`h-[40px] basis-[25%] border-b-[2px] border-b-transparent flex items-center justify-center cursor-pointer translate-transform transition ease-in-out duration-75 text-[12px] sm:text-[14px] ${p===e.path?" border-b-gray-900 border-b-2 text-gray-900 font-medium":"text-gray-400"}`,children:t.jsx("p",{children:e==null?void 0:e.name})},e==null?void 0:e.id))}),t.jsxs("div",{className:"px-1 pt-3 sm:px-2",children:[p=="open"&&t.jsx(j,{openBets:l}),p=="settled"&&t.jsx(v,{settledBets:l})]})]})]})}export{R as default};