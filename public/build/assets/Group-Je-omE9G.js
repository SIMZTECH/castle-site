import{j as e,r as G,R as g}from"./app-Bdz8U-JN.js";import{W as X}from"./WelcomeGuestLayout-CnKaiDK2.js";import{F as $}from"./FetchSwarmData-CuL63YVo.js";import{_ as q}from"./ScaleLoader-sEsA_HUc.js";import{b as J}from"./index-vyvQfyPS.js";import{j as z}from"./index-5uflDiLC.js";import{b as Q,B as T}from"./BetSlipContext-DJX6SmXt.js";import"./iconBase-1NaSG4wA.js";import"./GameFile-BHWl_uPj.js";import"./zambia-uSIXTnlC.js";import"./index-D38Vun6w.js";import"./index-DfpGWnH-.js";import"./index-D31IpMiY.js";import"./index-C_RXlj0E.js";import"./index-D-oKYPRd.js";import"./UserAuthenticationContext-B9CgKNWH.js";import"./index-B2V79RLg.js";import"./DataStoreTemp-dR6HfQ01.js";import"./index-BT-Uq5RZ.js";import"./index-KcG-XtG0.js";import"./DateFormatter-CgdAk38a.js";import"./animation-RB9YhObT.js";import"./UtilizedHooks-CHuqxHq9.js";import"./HashLoader-BrsX1Acl.js";import"./animation-6cYxsNWS.js";import"./Skeleton-CyVWMQ4S.js";function B({type:a,price:m,isHighlight:o,market_id:l,callBack:f}){const w=()=>`${o?"selectedGameHighlight":"bg-primaryColor"} basis-[33%] px-2 py-2 flex items-center justify-between cursor-pointer text-white font-medium text-[15px]`;return e.jsxs("div",{onClick:()=>f(l,m,a),className:w(),children:[e.jsx("span",{children:a}),e.jsx("span",{children:m})]})}function U({dataObject:a,gameDetails:m}){var S,I,D,H,W,L,R,P,v;const{sport_id:o,region_id:l,competition_id:f,market_type:w}=m,{bet_slip:h,dispatch:b}=G.useContext(Q),{sport:d}=a,i=(D=(I=(S=d[o])==null?void 0:S.region[l])==null?void 0:I.competition[f])==null?void 0:D.game,[r,E]=g.useState({sport_name:(H=d[o])==null?void 0:H.name,region_name:(L=(W=d[o])==null?void 0:W.region[l])==null?void 0:L.name,competition_name:(v=(P=(R=d[o])==null?void 0:R.region[l])==null?void 0:P.competition[f])==null?void 0:v.name}),k=t=>{const{market_id:s,game_id:n,selection:c,market_price:p,home_team:x,away_team:_,competition:A,start_time:M}=t;if(!j(s)){const N=[...h],F=N.find(u=>(u==null?void 0:u.game_id)==n);if(F){const u=N.findIndex(O=>(O==null?void 0:O.game_id)==F.game_id);console.log({message:"found index",foundGameIndex:u,game_details:F}),N.splice(u,1)}N.push({game_id:n,home_team:x,away_team:_,start_time:M,competition:A,market_id:s,market_price:p,selection:c,bet_type:"1X2"}),b({type:"LOGGED",payload:{bet_slip:N}});return}C(n,s)},j=t=>!!h.find(s=>(s==null?void 0:s.market_id)==t),C=(t,s)=>{const n=[...h],c=n.findIndex(p=>(p==null?void 0:p.market_id)==s);console.log({message:"removed game from slip",game_id:t,foundIndex:c,market_id:s,market_price:n[c].market_price}),n.splice(c,1),b({type:"LOGGED",payload:{bet_slip:n}})};return e.jsx(e.Fragment,{children:Object.keys(i).map(t=>e.jsxs("div",{className:"flex flex-col basis-[100%] sm:basis-[33%] font-poppins text-[12px]  bg-white p-3 shadow-sm rounded-sm",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("p",{className:"flex items-center gap-1 text-[10px]",children:[e.jsx("span",{className:"text-[13px]",children:e.jsx(J,{})}),r==null?void 0:r.region_name,"-",r==null?void 0:r.competition_name]}),e.jsx("span",{className:"text-[12px]",children:"01/22"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-[16px] font-poppins font-semibold",children:[e.jsxs("p",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"b text-primaryColor",children:e.jsx(z,{})}),i[t].team1_name]}),e.jsxs("p",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-red-500 b",children:e.jsx(z,{})}),i[t].team2_name]})]}),e.jsx("span",{className:"b text-primaryColor cursor-pointer font-poppins text-[16px]",children:i[t].markets_count})]}),e.jsx("div",{className:"flex items-center gap-1 pt-2",children:Object.keys(i[t].market).map(s=>e.jsxs(e.Fragment,{children:[Object.keys(i[t].market[s].event).map(n=>e.jsx(e.Fragment,{children:i[t].market[s].event[n].name=="W1"&&e.jsx(B,{type:i[t].market[s].event[n].name,price:i[t].market[s].event[n].price,isHighlight:j(i[t].market[s].event[n].id),market_id:i[t].market[s].event[n].id,callBack:(c,p,x)=>{const _={market_id:c,game_id:i[t].id,selection:x,market_price:p,home_team:i[t].team1_name,away_team:i[t].team2_name,competition:r==null?void 0:r.competition_name,start_time:"05/06/24"};k(_)}},i[t].market[s].event[n].id)})),Object.keys(i[t].market[s].event).map(n=>e.jsx(e.Fragment,{children:i[t].market[s].event[n].name=="Draw"&&e.jsx(B,{type:i[t].market[s].event[n].name,price:i[t].market[s].event[n].price,isHighlight:j(i[t].market[s].event[n].id),market_id:i[t].market[s].event[n].id,callBack:(c,p,x)=>{const _={market_id:c,game_id:i[t].id,selection:x,market_price:p,home_team:i[t].team1_name,away_team:i[t].team2_name,competition:r==null?void 0:r.competition_name,start_time:"05/06/24"};k(_)}},i[t].market[s].event[n].id)})),Object.keys(i[t].market[s].event).map(n=>e.jsx(e.Fragment,{children:i[t].market[s].event[n].name=="W2"&&e.jsx(B,{type:i[t].market[s].event[n].name,price:i[t].market[s].event[n].price,isHighlight:j(i[t].market[s].event[n].id),market_id:i[t].market[s].event[n].id,callBack:(c,p,x)=>{const _={market_id:c,game_id:i[t].id,selection:x,market_price:p,home_team:i[t].team1_name,away_team:i[t].team2_name,competition:r==null?void 0:r.competition_name,start_time:"05/06/24"};k(_)}},i[t].market[s].event[n].id)}))]}))})]},i[t].id))})}function V({fetchedData:a,gameDetails:m}){return e.jsxs("div",{className:"flex flex-wrap gap-1 py-2 mx-3",children:[a&&m&&e.jsx(U,{gameDetails:m,dataObject:a}),!a&&e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("span",{className:"b text-primaryColor",children:e.jsx(q,{size:18,color:"#0E76BC"})})})]})}function wt({params:a}){const[m,o,l,f,w]=$(),[h,b]=g.useState(!1),[d,i]=g.useState(1),[r,E]=g.useState(1),{sport_id:k,region_id:j,competition_id:C,market_type:S}=a;return G.useEffect(()=>{if(b(!0),m&&d==1){i(d+1),b(!1),f();return}},[m]),G.useEffect(()=>{m&&l&&r==1&&(E(r+1),w(Number(j),Number(k),"Soccer",Number(C),S))},[l]),G.useEffect(()=>{console.log("finally the swarm data is here",o)},[o]),e.jsx(T,{children:e.jsx(X,{showSplashScreen:h,children:e.jsx(V,{fetchedData:o==null?void 0:o.data,gameDetails:a})})})}export{wt as default};
