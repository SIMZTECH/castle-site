import{r as i,j as e}from"./app-CRC_HCL3.js";import{u as d}from"./index-DmpJc7lb.js";import f from"./LiveGames-B5XCkgh2.js";import c from"./LeagueCollectionGames-Cpbn4mCH.js";import n from"./BoostedGames-RF0Vx6Vn.js";import l from"./TodayGames-D_wyi7HM.js";import"./index-B8F43R27.js";import"./DataStoreTemp-1olddnbH.js";import"./index-Bi1iTqyb.js";import"./iconBase-D1VTUtoT.js";import"./index.module-CE_1FIzf.js";import"./LiveGameSportComponent-CzaTbGEh.js";import"./LiveGameRegionComponent-DdsQktXM.js";import"./LiveGameCompetitionComponent-iI7ofIuu.js";import"./LiveGameComponent-CI9UxoV4.js";import"./MarketHandlerUtilities-DPG8dd9k.js";import"./BetSlipContext-BknxR3ye.js";import"./DateFormatter-CgdAk38a.js";import"./index-Dd4GG_I3.js";import"./CastleBetFooter-CTDwEAE-.js";import"./index-rPALzYMj.js";import"./SwarmDataContext-CVEaHLqs.js";import"./Skeleton-DjqmHsVV.js";import"./ScaleLoader-_xByQcWx.js";import"./animation-RB9YhObT.js";import"./BoostedGameComponent-DM__eYMK.js";import"./BoostedGameSportComponent-DJlQUWhl.js";import"./BoostedGameRegionComponent-pVcs6SCk.js";import"./BoostedGameCompetitionComponent-DI1Fe0xW.js";import"./index-D8bcI3In.js";function O({requestTodayGamesUpdate:m,requestBoostedGamesUpdate:p,requestSpecificGamesUpdate:s}){const[t,x]=d(),[r,a]=i.useState({page:"",filter:"",compt_id:"",reg_id:""}),u=o=>{switch(o==null?void 0:o.filter){case"live":return e.jsx(f,{});case"boosted":return e.jsx(n,{onRefreshRequestUpdate:p});case"today":return e.jsx(l,{onRefreshRequestUpdate:m});default:return e.jsx(c,{urlParams:r,onRefreshRequestUpdate:s})}};return i.useEffect(()=>{a({...r,page:t.get("page"),filter:t.get("filter"),compt_id:Number(t.get("compt_id")),reg_id:Number(t.get("reg_id"))})},[t]),e.jsx("div",{children:u(r)})}export{O as default};