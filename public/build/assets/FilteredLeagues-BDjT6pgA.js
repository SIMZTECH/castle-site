import{r as i,j as e}from"./app-CBVCwPI-.js";import{u as f}from"./index-BTiZ8sTW.js";import c from"./LiveGames-Dh-kwspj.js";import n from"./LeagueCollectionGames-lkUuxLD5.js";import l from"./BoostedGames-Du4_UrQs.js";import x from"./TodayGames-C7bk194T.js";import"./index-Dm_1uihe.js";import"./DataStoreTemp-CMSu0HN3.js";import"./index-CkSLb4vN.js";import"./iconBase-BUBZRE_X.js";import"./index.module-Db9i3qXa.js";import"./LiveGameSportComponent-7qWJij82.js";import"./LiveGameRegionComponent-BJkQvUCt.js";import"./LiveGameCompetitionComponent-BvhUyI-G.js";import"./LiveGameComponent-BQcIDVx5.js";import"./MarketHandlerUtilities-U0nD3TQT.js";import"./BetSlipContext-QY2tDnKW.js";import"./DateFormatter-CgdAk38a.js";import"./index-BNPO5em8.js";import"./CastleBetFooter-dfJMA9cs.js";import"./index-Bn9-GECV.js";import"./SwarmDataContext-BKcrXvrl.js";import"./Skeleton-Cv_UY2eX.js";import"./ScaleLoader-CiaOqx0C.js";import"./animation-RB9YhObT.js";import"./BoostedGameComponent-Ci2P0D7l.js";import"./BoostedGameSportComponent-CZZsZMnN.js";import"./BoostedGameRegionComponent--aqACT9T.js";import"./BoostedGameCompetitionComponent-oMuCNC0U.js";import"./index-CrePnuC3.js";function Q({requestLiveGamesUpdate:m,requestTodayGamesUpdate:p,requestBoostedGamesUpdate:s,requestSpecificGamesUpdate:a}){const[t,g]=f(),[r,u]=i.useState({page:"",filter:"",compt_id:"",reg_id:""}),d=o=>{switch(o==null?void 0:o.filter){case"live":return e.jsx(c,{requestLiveGamesUpdate:m});case"boosted":return e.jsx(l,{onRefreshRequestUpdate:s});case"today":return e.jsx(x,{onRefreshRequestUpdate:p});default:return e.jsx(n,{urlParams:r,onRefreshRequestUpdate:a})}};return i.useEffect(()=>{u({...r,page:t.get("page"),filter:t.get("filter"),compt_id:Number(t.get("compt_id")),reg_id:Number(t.get("reg_id"))})},[t]),e.jsx("div",{children:d(r)})}export{Q as default};
