import{r as n,j as r}from"./app-CBVCwPI-.js";import m from"./BetCardGroup-CGnhr0Na.js";import{S as p}from"./ScaleLoader-CiaOqx0C.js";import"./index-CkSLb4vN.js";import"./iconBase-BUBZRE_X.js";import"./index-BW4KL6qC.js";import"./index-B8tlRkbN.js";import"./index-CbG4Z0os.js";import"./DateFormatter-CgdAk38a.js";import"./index-Dm_1uihe.js";import"./animation-RB9YhObT.js";function g({settledBets:s}){const[o,a]=n.useState([]);return n.useEffect(()=>{if(s.length>0){a(s);return}},[s]),r.jsxs("div",{children:[r.jsxs(r.Fragment,{children:[(o==null?void 0:o.length)>0&&r.jsx(r.Fragment,{children:o.map(i=>r.jsx(m,{amount:i==null?void 0:i.amount,odds:i==null?void 0:i.k,outcome:i==null?void 0:i.outcome,payout:i==null?void 0:i.payout,events:i==null?void 0:i.events,bet_id:i==null?void 0:i.id,date_time:i==null?void 0:i.date_time,possible_win:i==null?void 0:i.possible_win}))}),(o==null?void 0:o.length)<1&&r.jsx("div",{className:"flex items-center justify-center font-poppins text-[12px]",children:r.jsx("p",{className:"w-[60%] text-center",children:"No settled bets available bets available"})})]}),(s==null||s==null)&&r.jsx("div",{className:"flex items-center justify-center",children:r.jsx("span",{className:"",children:r.jsx(p,{size:22,color:"#0E76BC"})})})]})}export{g as default};