import{j as n}from"./app-D5o-_rBG.js";import{M as B,E as j}from"./MarketHandlerUtilities-DJh1FoHh.js";import{f as H}from"./DateFormatter-CgdAk38a.js";import{L as E}from"./index-CwTspyl8.js";import"./iconBase-LMNcHqz0.js";import"./BetSlipContext-CuiqOm1M.js";import"./index-C1wajDrb.js";function A({fetchedGameData:b,allData:l,sport_id:x,region_id:_,competition_id:f,game_id:m}){const{onPressGameOddHighlighter:N,isEventIdExistInBetSlip:h}=B(),{market:t,markets_count:v,start_ts:r,strong_team:g,team1_id:L,team1_name:c,team2_id:O,team2_name:o}=b,{formattedDate:w,formattedTime:S}=H(r),s=l[x].region[_].competition[f].name,p=l[x].alias,d=l[x].region[_].alias,C=()=>`/castle-site?page=game&game_id=${m}&compt_id=${f}&reg_id=${_}&markt_type=All`;function u(e){N(e)}return n.jsxs("div",{className:"flex flex-col pt-4 mb-3 space-y-1 font-poppins",children:[n.jsxs("p",{className:"text-[11px] flex items-center gap-1 text-black",children:[n.jsx("span",{children:`${S}`}),n.jsx("span",{className:"",children:w})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-medium text-[#03396c] w-contain b text-[16px] hover:underline cursor-pointer",children:c}),n.jsx("p",{className:"font-medium text-[#03396c] w-contain b text-[16px] hover:underline cursor-pointer",children:o})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"text-[11px] text-[#5c5c5c]",children:[p,"/",d,"/",s]}),n.jsxs(E,{to:C(),className:"text-[11px] cursor-pointer hover:underline hover:text-opacity-100 font-poppins text-primaryColor text-opacity-70",children:["Market ",n.jsxs("span",{children:["+",v]})]})]}),n.jsx("div",{children:Object.keys(t).map(e=>n.jsxs("div",{className:"flex items-center justify-between",children:[Object.keys(t[e].event).map(a=>n.jsx(n.Fragment,{children:t[e].event[a].name=="W1"&&n.jsx(j,{isHighLighted:h(t[e].event[a].id),isStrongTeam:g==1,onSelectedCallBack:()=>{const i={market_id:Number(e),game_id:Number(m),selection:t[e].event[a].name,market_price:t[e].event[a].price,home_team:c,away_team:o,competition:s,start_time:r,event_id:Number(a),sport_name:p,region_name:d,market_name:t[e].name};u(i)},name:"1",price:t[e].event[a].price},t[e].event[a].id)})),Object.keys(t[e].event).map(a=>n.jsx(n.Fragment,{children:t[e].event[a].name=="Draw"&&n.jsx(j,{isHighLighted:h(t[e].event[a].id),onSelectedCallBack:()=>{const i={market_id:Number(e),game_id:Number(m),selection:t[e].event[a].name,market_price:t[e].event[a].price,home_team:c,away_team:o,competition:s,start_time:r,event_id:Number(a),sport_name:p,region_name:d,market_name:t[e].name};u(i)},isStrongTeam:!1,name:"X",price:t[e].event[a].price},t[e].event[a].id)})),Object.keys(t[e].event).map(a=>n.jsx(n.Fragment,{children:t[e].event[a].name=="W2"&&n.jsx(j,{isHighLighted:h(t[e].event[a].id),onSelectedCallBack:()=>{const i={market_id:Number(e),game_id:Number(m),selection:t[e].event[a].name,market_price:t[e].event[a].price,home_team:c,away_team:o,competition:s,start_time:r,event_id:Number(a),sport_name:p,region_name:d,market_name:t[e].name};u(i)},isStrongTeam:g==2,name:"2",price:t[e].event[a].price},t[e].event[a].id)}))]},e))})]})}export{A as default};
