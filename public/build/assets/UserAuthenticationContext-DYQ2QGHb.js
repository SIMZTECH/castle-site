import{r,j as n}from"./app-D5o-_rBG.js";const u={auth_token:null,balance:null,deposit_count:null,is_new_client:null,qr_code_origin:null},s={authUser:localStorage.getItem("authUser")!=null?JSON.parse(localStorage.getItem("authUser")):u},o=r.createContext(s),l=(e,t)=>{switch(t.type){case"AUTHUSERUNLOGGED":return{authUser:{auth_token:null,balance:null,deposit_count:null,is_new_client:null,qr_code_origin:null}};case"AUTHUSERLOGGED":return{authUser:t.payload.authUser};default:return e}},i=({children:e})=>{const[t,a]=r.useReducer(l,s);return r.useEffect(()=>{localStorage.setItem("authUser",JSON.stringify(t.authUser))},[t]),n.jsx(o.Provider,{value:{authUser:t.authUser,dispatch:a},children:e})};export{i as A,o as a};
