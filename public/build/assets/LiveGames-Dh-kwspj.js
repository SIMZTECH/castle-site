import{r as o,j as r,l as i}from"./app-CBVCwPI-.js";import{s as a}from"./DataStoreTemp-CMSu0HN3.js";import{c as m}from"./index-CkSLb4vN.js";import{D as c}from"./index.module-Db9i3qXa.js";import l from"./LiveGameSportComponent-7qWJij82.js";import{S as x}from"./Skeleton-Cv_UY2eX.js";import{S as d}from"./ScaleLoader-CiaOqx0C.js";import"./iconBase-BUBZRE_X.js";import"./LiveGameRegionComponent-BJkQvUCt.js";import"./LiveGameCompetitionComponent-BvhUyI-G.js";import"./LiveGameComponent-BQcIDVx5.js";import"./MarketHandlerUtilities-U0nD3TQT.js";import"./BetSlipContext-QY2tDnKW.js";import"./DateFormatter-CgdAk38a.js";import"./index-BTiZ8sTW.js";import"./index-Dm_1uihe.js";import"./index-BNPO5em8.js";import"./CastleBetFooter-dfJMA9cs.js";import"./index-Bn9-GECV.js";import"./SwarmDataContext-BKcrXvrl.js";import"./animation-RB9YhObT.js";function R({requestLiveGamesUpdate:n}){const{liveGames:t,tempSwarmData:e}=o.useContext(a),p=()=>{n()};return o.useEffect(()=>{t&&console.log(t==null?void 0:t.sport,"in live games screen")},[t]),o.useEffect(()=>{if(e){n();return}},[e]),r.jsxs("div",{className:"flex flex-col flex-1 h-full",children:[!e&&r.jsx(x,{animation:"wave",variant:"triangular",width:"100%",height:40}),e&&r.jsxs("header",{className:"flex items-center justify-between gap-1 h-[40px] bg-whiteSmoke border-b-[1px] px-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{children:r.jsx(m,{})}),r.jsx("p",{children:" Live matches"})]}),!i.isNil(t==null?void 0:t.sport)&&r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("p",{className:"text-[10px] text-[#0E76BC] font-medium",children:"refresh"}),r.jsx(c,{isPlaying:!0,size:30,strokeWidth:2,duration:20,colors:["#004777","#F7B801","#A30000","#A30000"],colorsTime:[7,5,2,0],onComplete:()=>(p(),{shouldRepeat:!0,delay:1.5}),children:({remainingTime:s})=>r.jsx("span",{className:"text-[14px] text-[#0E76BC] font-medium",children:s})})]})]}),r.jsx("section",{className:"flex-1 px-4 pt-5 overflow-y-scroll mainHome-content",children:r.jsxs("div",{className:"h-[600px]",children:[!i.isNil(t==null?void 0:t.sport)&&r.jsx(r.Fragment,{children:Object.keys(t==null?void 0:t.sport).map(s=>r.jsx(l,{allData:t==null?void 0:t.sport,sport_id:s,sportData:t==null?void 0:t.sport[s]},s))}),i.isNil(t==null?void 0:t.sport)&&e&&r.jsx("div",{className:"flex items-center justify-center",children:r.jsx(d,{color:"#0E76BC",size:20})})]})})]})}export{R as default};