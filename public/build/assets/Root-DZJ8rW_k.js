import{r,R as H,j as e}from"./app-r8XvK69h.js";import{u as O}from"./index-DB5vtFC6.js";import{B as P}from"./BetSlipContext-DcjUfPjE.js";import{F as b}from"./FetchSwarmData-C825pgsC.js";import{a as L}from"./SwarmDataContext-CrAlUiX0.js";import{W}from"./WelcomeGuestLayout-osn9w7Md.js";import v from"./Welcome-BcyB38n7.js";import M from"./GameScreen-BLTknPeL.js";import _ from"./Login-Cp2BAvl-.js";import K from"./Profile-BJGBMJ6i.js";import{a as z}from"./UserAuthenticationContext-DOfhghB8.js";import I from"./AvailableAgents-DCzJCyr7.js";import J from"./MyBetsScreen-C5KsAMgZ.js";import N from"./ActualBetSlip-CEKArhit.js";import Q from"./Register-ClEOcwW5.js";import V from"./FilteredLeagues-CfjK5fOK.js";import{s as X}from"./DataStoreTemp-D60g7j7S.js";import Y from"./TransactionHistory-XPDyWDGj.js";import"./index-BCf6WEWb.js";import"./iconBase-BHsM4znX.js";import"./GameFile-DYS5qk98.js";import"./index-Bs6hzq6e.js";import"./zambia-uSIXTnlC.js";import"./index-CCwBDxu7.js";import"./index-DhAB4uQs.js";import"./index-DBHZhA6V.js";import"./index-Dul_ih0x.js";import"./index-BvqTu_aC.js";import"./index-DsOsJtub.js";import"./index-Cbbwr3n9.js";import"./DateFormatter-CgdAk38a.js";import"./animation-RB9YhObT.js";import"./UtilizedHooks-CHuqxHq9.js";import"./HashLoader-oyD9OkyJ.js";import"./animation-6cYxsNWS.js";import"./Skeleton-AYxjryWC.js";import"./CastleBetFooter-DLhPhQ4C.js";import"./index.module-CKCr6Tp1.js";import"./index-CUwZOzdo.js";import"./MarketHandlerUtilities-BPKOhKIv.js";import"./index-BhW4rTCj.js";import"./ScaleLoader-CyUJoI2R.js";import"./PopupBox-B5OqJk0x.js";import"./SelectedPaymentSystem-yHKfv-EO.js";import"./MTNPayment-lldhccZo.js";import"./AiretelPayment-BIUMToYa.js";import"./ZamtelPayment-l8-UO2e8.js";import"./PayGoPayment-jfRe-Jfj.js";import"./OpenBets-BFySjuRf.js";import"./BetCardGroup-CPZEnjOx.js";import"./index-CdLPJ4SW.js";import"./ScaleLoader-DfR9qC5w.js";import"./SettledBets-BmsMatDY.js";import"./BetEventCard-DiRyN2ib.js";import"./LiveGames-DK41olou.js";import"./LiveGameSportComponent-BqvVnN1l.js";import"./LiveGameRegionComponent-D5oLCVtG.js";import"./LiveGameCompetitionComponent-CN9nZm2d.js";import"./LiveGameComponent-Bams6qFd.js";import"./LeagueCollectionGames-Bc_mh1m7.js";import"./BoostedGameComponent-Cib7C_Y9.js";import"./BoostedGames-DlnCTPoj.js";import"./BoostedGameSportComponent-eN4KQpGw.js";import"./BoostedGameRegionComponent-i33vdr5i.js";import"./BoostedGameCompetitionComponent-CNBmH-j9.js";import"./TodayGames-LBqHJH1o.js";import"./TransactionCard-CIN-ACsp.js";function fe(){const{dispatch:g}=r.useContext(L),{authUser:m}=r.useContext(z),{setGetGamesByCompetition:f}=r.useContext(X),[i,Z]=O(),[t,d]=r.useState({page:""}),{isReady:a,writeSessionData:u,loginUserFirstTime:x,swarmData:p,userAuth:h,logoutUser:S,logoutRes:y,registerUser:$,requestCashout:G,cashOutRes:n,getSingleGameDetails:j,getBoostedGames:C,getTodayGamesByTimeStamp:B,getGameByRegionAndCompetition:c,socket:s}=b(),[l,R]=H.useState(1);function D(o){console.log("fetched swarm data stored in storage...."),g({type:"SWARMLOGGED",payload:{storeSwarmData:o}})}const U=o=>{S(m)},w=o=>{console.log(o,"cashout bet id......."),G(o)},A=o=>{const{compt_id:k,reg_id:q}=o;f(null),setTimeout(()=>{c({compt_id:k,reg_id:q})},100),console.log(o,"the params.....")},T=()=>{B()},E=()=>{C()},F=o=>{j(o)};return r.useEffect(()=>{if(a&&l==1){R(l+1),u();return}},[a]),r.useEffect(()=>{D(p)},[p]),r.useEffect(()=>{d({...t,page:i.get("page")})},[i]),e.jsx(P,{children:e.jsxs(W,{socket:s,logoutRes:y,logOutCallBackHandler:U,cashOutRes:n,auth:m,onSelectedFilterHandler:A,children:[((t==null?void 0:t.page)==null||(t==null?void 0:t.page)=="home")&&e.jsx(v,{}),(t==null?void 0:t.page)=="league"&&e.jsx(V,{requestTodayGamesUpdate:T,requestBoostedGamesUpdate:E,requestSpecificGamesUpdate:c}),(t==null?void 0:t.page)=="game"&&e.jsx(M,{socket:s,requestGetGameDetails:F}),(t==null?void 0:t.page)=="profile"&&e.jsx(K,{}),(t==null?void 0:t.page)=="transaction-history"&&e.jsx(Y,{}),(t==null?void 0:t.page)=="mybets"&&e.jsx(J,{}),(t==null?void 0:t.page)=="register"&&e.jsx(Q,{socket:s}),(t==null?void 0:t.page)=="login"&&e.jsx(_,{loginCallBackHandler:x,authStatus:h}),(t==null?void 0:t.page)=="deposit"&&e.jsx(I,{}),(t==null?void 0:t.page)=="betslip"&&e.jsx(N,{cashOutRes:n,cashOutCallBackHandler:w})]})})}export{fe as default};