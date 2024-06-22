import{r as s,R as m,e as Te,j as p,W as et}from"./app-CBVCwPI-.js";import{T as tt,I as nt}from"./TextInput-D1b92x8L.js";import{I as rt}from"./InputLabel-D2t45HIq.js";import{s as oe,I as L,H as N,y as C,n as R,o as w,a as le,u as k,b as ae,t as ie,T as ot,l as ue,p as lt,f as Pe,O as we,c as at,d as Y,m as it,K as J}from"./transition-B6BpYvuT.js";function se(e){return oe.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ut=s.createContext(void 0);function st(){return s.useContext(ut)}let ct="div";var K=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(K||{});function dt(e,t){var n;let{features:r=1,...o}=e,i={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return N({ourProps:i,theirProps:o,slot:{},defaultTag:ct,name:"Hidden"})}let Q=L(dt),ft=s.createContext(null);function mt({children:e}){let t=s.useContext(ft);if(!t)return m.createElement(m.Fragment,null,e);let{target:n}=t;return n?Te.createPortal(m.createElement(m.Fragment,null,e),n):null}let ce=s.createContext(null);ce.displayName="DescriptionContext";function Le(){let e=s.useContext(ce);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Le),t}return e}function pt(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(i=>(t(l=>[...l,i]),()=>t(l=>{let a=l.slice(),u=a.indexOf(i);return u!==-1&&a.splice(u,1),a}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return m.createElement(ce.Provider,{value:o},n.children)},[t])]}let vt="p";function ht(e,t){let n=s.useId(),r=st(),{id:o=`headlessui-description-${n}`,...i}=e,l=Le(),a=C(t);R(()=>l.register(o),[o,l.register]);let u=r||!1,c=s.useMemo(()=>({...l.slot,disabled:u}),[l.slot,u]),d={ref:a,...l.props,id:o};return N({ourProps:d,theirProps:i,slot:c,defaultTag:vt,name:l.name||"Description"})}let gt=L(ht),wt=Object.assign(gt,{});var Ne=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ne||{});let Et=s.createContext(()=>{});function yt({value:e,children:t}){return m.createElement(Et.Provider,{value:e},t)}let Z=new Map,j=new Map;function Ee(e){var t;let n=(t=j.get(e))!=null?t:0;return j.set(e,n+1),n!==0?()=>ye(e):(Z.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>ye(e))}function ye(e){var t;let n=(t=j.get(e))!=null?t:1;if(n===1?j.delete(e):j.set(e,n-1),n!==1)return;let r=Z.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,Z.delete(e))}function bt({allowed:e,disallowed:t}={},n=!0){R(()=>{var r,o;if(!n)return;let i=le();for(let a of(r=t==null?void 0:t())!=null?r:[])a&&i.add(Ee(a));let l=(o=e==null?void 0:e())!=null?o:[];for(let a of l){if(!a)continue;let u=se(a);if(!u)continue;let c=a.parentElement;for(;c&&c!==u.body;){for(let d of c.children)l.some(f=>d.contains(f))||i.add(Ee(d));c=c.parentElement}}return i.dispose},[n,e,t])}let ee=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),xt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(T||{}),te=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(te||{}),$t=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))($t||{});function Ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ee)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function Tt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(xt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Se=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Se||{});function Pt(e,t=0){var n;return e===((n=se(e))==null?void 0:n.body)?!1:k(t,{0(){return e.matches(ee)},1(){let r=e;for(;r!==null;){if(r.matches(ee))return!0;r=r.parentElement}return!1}})}var Lt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Lt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function P(e){e==null||e.focus({preventScroll:!0})}let Nt=["textarea","input"].join(",");function St(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Nt))!=null?n:!1}function Dt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let l=o.compareDocumentPosition(i);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function H(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?Dt(e):e:t&64?Tt(e):Ft(e);o.length>0&&l.length>1&&(l=l.filter(g=>!o.some(E=>E!=null&&"current"in E?(E==null?void 0:E.current)===g:E===g))),r=r??i.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,f=l.length,h;do{if(d>=f||d+f<=0)return 0;let g=u+d;if(t&16)g=(g+f)%f;else{if(g<0)return 3;if(g>=f)return 1}h=l[g],h==null||h.focus(c),d+=a}while(h!==i.activeElement);return t&6&&St(h)&&h.select(),2}function De(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ct(){return/Android/gi.test(window.navigator.userAgent)}function At(){return De()||Ct()}function G(e,t,n){let r=ae(t);s.useEffect(()=>{function o(i){r.current(i)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Ce(e,t,n){let r=ae(t);s.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function Mt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,a){if(!r.current||l.defaultPrevented)return;let u=a(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let c=function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let d of c){if(d===null)continue;let f=d instanceof HTMLElement?d:d.current;if(f!=null&&f.contains(u)||l.composed&&l.composedPath().includes(f))return}return!Pt(u,Se.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let i=s.useRef(null);G("pointerdown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),G("mousedown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),G("click",l=>{At()||i.current&&(o(l,()=>i.current),i.current=null)},!0),G("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Ce("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>se(...e),[...e])}function Ae(e,t,n,r){let o=ae(n);s.useEffect(()=>{e=e??window;function i(l){o.current(l)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}function Rt(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function It(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...i){let l=t[o].call(n,...i);l&&(n=l,r.forEach(a=>a()))}}}function kt(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),i=Math.max(0,e-o);n.style(r,"paddingRight",`${i}px`)}}}function Ot(){return De()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(i=>i()).some(i=>i.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=le();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let i=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:c}=new URL(u.href),d=e.querySelector(c);d&&!r(d)&&(l=d)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let u=a.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let u=(a=window.scrollY)!=null?a:window.pageYOffset;i!==u&&window.scrollTo(0,i),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function jt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ht(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let M=It(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:le(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ht(n)},o=[Ot(),kt(),jt()];o.forEach(({before:i})=>i==null?void 0:i(r)),o.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});M.subscribe(()=>{let e=M.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&M.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&M.dispatch("TEARDOWN",n)}});function Ut(e,t,n=()=>({containers:[]})){let r=Rt(M),o=e?r.get(e):void 0,i=o?o.count>0:!1;return R(()=>{if(!(!e||!t))return M.dispatch("PUSH",e,n),()=>M.dispatch("POP",e,n)},[t,e]),i}function Wt(e,t,n=()=>[document.body]){Ut(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function de(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let o=[...n.current];for(let[i,l]of t.entries())if(n.current[i]!==l){let a=r(t,o);return n.current=t,a}},[r,...t])}function _t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let D=[];_t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Me(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,ie(()=>{n.current&&t()})}),[t])}let Re=s.createContext(!1);function Bt(){return s.useContext(Re)}function be(e){return m.createElement(Re.Provider,{value:e.force},e.children)}function Yt(e){let t=Bt(),n=s.useContext(ke),r=U(e),[o,i]=s.useState(()=>{var l;if(!t&&n!==null)return(l=n.current)!=null?l:null;if(oe.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let u=r.createElement("div");return u.setAttribute("id","headlessui-portal-root"),r.body.appendChild(u)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),o}let Ie=s.Fragment,Gt=L(function(e,t){let n=e,r=s.useRef(null),o=C(ot(d=>{r.current=d}),t),i=U(r),l=Yt(r),[a]=s.useState(()=>{var d;return oe.isServer?null:(d=i==null?void 0:i.createElement("div"))!=null?d:null}),u=s.useContext(ne),c=ue();return R(()=>{!l||!a||l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a))},[l,a]),R(()=>{if(a&&u)return u.register(a)},[u,a]),Me(()=>{var d;!l||!a||(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&((d=l.parentElement)==null||d.removeChild(l)))}),c?!l||!a?null:Te.createPortal(N({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Ie,name:"Portal"}),a):null});function Kt(e,t){let n=C(t),{enabled:r=!0,...o}=e;return r?m.createElement(Gt,{...o,ref:n}):N({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Ie,name:"Portal"})}let Vt=s.Fragment,ke=s.createContext(null);function qt(e,t){let{target:n,...r}=e,o={ref:C(t)};return m.createElement(ke.Provider,{value:n},N({ourProps:o,theirProps:r,defaultTag:Vt,name:"Popover.Group"}))}let ne=s.createContext(null);function Xt(){let e=s.useContext(ne),t=s.useRef([]),n=w(i=>(t.current.push(i),e&&e.register(i),()=>r(i))),r=w(i=>{let l=t.current.indexOf(i);l!==-1&&t.current.splice(l,1),e&&e.unregister(i)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:i}){return m.createElement(ne.Provider,{value:o},i)},[o])]}let zt=L(Kt),Jt=L(qt),xe=Object.assign(zt,{Group:Jt});function Qt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return R(()=>{if(!t)return;function o(i){r(i.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function Zt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),i=U(o),l=w(()=>{var a,u,c;let d=[];for(let f of e)f!==null&&(f instanceof HTMLElement?d.push(f):"current"in f&&f.current instanceof HTMLElement&&d.push(f.current));if(t!=null&&t.current)for(let f of t.current)d.push(f);for(let f of(a=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?a:[])f!==document.body&&f!==document.head&&f instanceof HTMLElement&&f.id!=="headlessui-portal-root"&&(f.contains(o.current)||f.contains((c=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:c.host)||d.some(h=>f.contains(h))||d.push(f));return d});return{resolveContainers:l,contains:w(a=>l().some(u=>u.contains(a))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:m.createElement(Q,{features:K.Hidden,ref:o})},[o,n])}}let fe=s.createContext(()=>{});fe.displayName="StackContext";var re=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(re||{});function en(){return s.useContext(fe)}function tn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=en(),l=w((...a)=>{t==null||t(...a),i(...a)});return R(()=>{let a=o===void 0||o===!0;return a&&l(0,n,r),()=>{a&&l(1,n,r)}},[l,n,r,o]),m.createElement(fe.Provider,{value:l},e)}var O=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(O||{});function nn(){let e=s.useRef(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Oe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let rn="div";var F=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.AutoFocus=32]="AutoFocus",e[e.All=30]="All",e))(F||{});function on(e,t){let n=s.useRef(null),r=C(n,t),{initialFocus:o,initialFocusFallback:i,containers:l,features:a=30,...u}=e;ue()||(a=1);let c=U(n);sn({ownerDocument:c},!!(a&16));let d=cn({ownerDocument:c,container:n,initialFocus:o,initialFocusFallback:i},a);dn({ownerDocument:c,container:n,containers:l,previousActiveElement:d},!!(a&8));let f=nn(),h=w(y=>{let $=n.current;$&&(S=>S())(()=>{k(f.current,{[O.Forwards]:()=>{H($,T.First,{skipElements:[y.relatedTarget,i]})},[O.Backwards]:()=>{H($,T.Last,{skipElements:[y.relatedTarget,i]})}})})}),g=lt(),E=s.useRef(!1),x={ref:r,onKeyDown(y){y.key=="Tab"&&(E.current=!0,g.requestAnimationFrame(()=>{E.current=!1}))},onBlur(y){if(!(a&8))return;let $=Oe(l);n.current instanceof HTMLElement&&$.add(n.current);let S=y.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(je($,S)||(E.current?H(n.current,k(f.current,{[O.Forwards]:()=>T.Next,[O.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&P(y.target)))}};return m.createElement(m.Fragment,null,!!(a&4)&&m.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:K.Focusable}),N({ourProps:x,theirProps:u,defaultTag:rn,name:"FocusTrap"}),!!(a&4)&&m.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:K.Focusable}))}let ln=L(on),an=Object.assign(ln,{features:F});function un(e=!0){let t=s.useRef(D.slice());return de(([n],[r])=>{r===!0&&n===!1&&ie(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function sn({ownerDocument:e},t){let n=un(t);de(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&P(n())},[t]),Me(()=>{t&&P(n())})}function cn({ownerDocument:e,container:t,initialFocus:n,initialFocusFallback:r},o){let i=!!(o&2),l=s.useRef(null),a=Pe();return de(()=>{if(!i){r!=null&&r.current&&P(r.current);return}let u=t.current;u&&ie(()=>{if(!a.current)return;let c=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===c){l.current=c;return}}else if(u.contains(c)){l.current=c;return}if(n!=null&&n.current)P(n.current);else{if(o&32){if(H(u,T.First|T.AutoFocus)!==te.Error)return}else if(H(u,T.First)!==te.Error)return;if(r!=null&&r.current&&(P(r.current),(e==null?void 0:e.activeElement)===r.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=e==null?void 0:e.activeElement})},[r,i,o]),l}function dn({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=Pe();Ae(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!i.current)return;let a=Oe(n);t.current instanceof HTMLElement&&a.add(t.current);let u=r.current;if(!u)return;let c=l.target;c&&c instanceof HTMLElement?je(a,c)?(r.current=c,P(c)):(l.preventDefault(),l.stopPropagation(),P(u)):P(r.current)},!0)}function je(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var fn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(fn||{}),mn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(mn||{});let pn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},V=s.createContext(null);V.displayName="DialogContext";function me(e){let t=s.useContext(V);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,me),n}return t}function vn(e,t){return k(t.type,pn,e,t)}let hn="div",gn=we.RenderStrategy|we.Static;function wn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:i,initialFocus:l,role:a="dialog",autoFocus:u=!0,__demoMode:c=!1,...d}=e,[f,h]=s.useState(0),g=s.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(g.current||(g.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let E=at();o===void 0&&E!==null&&(o=(E&Y.Open)===Y.Open);let x=s.useRef(null),y=C(x,t),$=U(x),S=e.hasOwnProperty("open")||E!==null,pe=e.hasOwnProperty("onClose");if(!S&&!pe)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!pe)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof i!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);let b=o?0:1,[W,He]=s.useReducer(vn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),I=w(()=>i(!1)),ve=w(v=>He({type:0,id:v})),q=ue()?b===0:!1,_=f>1,Ue=s.useContext(V)!==null,[We,_e]=Xt(),Be={get current(){var v;return(v=W.panelRef.current)!=null?v:x.current}},{resolveContainers:X,mainTreeNodeRef:Ye,MainTreeNode:Ge}=Zt({portals:We,defaultContainers:[Be]}),Ke=_?"parent":"leaf",he=E!==null?(E&Y.Closing)===Y.Closing:!1,Ve=_||he?!1:q;bt({allowed:w(()=>{var v,A;return[(A=(v=x.current)==null?void 0:v.closest("[data-headlessui-portal]"))!=null?A:null]}),disallowed:w(()=>{var v,A;return[(A=(v=Ye.current)==null?void 0:v.closest("body > *:not(#headlessui-portal-root)"))!=null?A:null]})},c?!1:Ve),Mt(X,v=>{v.preventDefault(),I()},!(!q||_));let qe=!(_||b!==0);Ae($==null?void 0:$.defaultView,"keydown",v=>{qe&&(v.defaultPrevented||v.key===Ne.Escape&&(v.preventDefault(),v.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),I()))}),Wt($,c?!1:!(he||b!==0||Ue),X),it(x,I,b===0);let[Xe,ze]=pt(),Je=s.useMemo(()=>[{dialogState:b,close:I,setTitleId:ve},W],[b,W,I,ve]),ge=s.useMemo(()=>({open:b===0}),[b]),Qe={ref:y,id:r,role:a,tabIndex:-1,"aria-modal":c?void 0:b===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":Xe},Ze=!Qt(),B=q?k(Ke,{parent:F.RestoreFocus,leaf:F.All&~F.FocusLock}):F.None;return u&&(B|=F.AutoFocus),Ze||(B&=~F.InitialFocus),c&&(B=F.None),m.createElement(tn,{type:"Dialog",enabled:b===0,element:x,onUpdate:w((v,A)=>{A==="Dialog"&&k(v,{[re.Add]:()=>h(z=>z+1),[re.Remove]:()=>h(z=>z-1)})})},m.createElement(be,{force:!0},m.createElement(xe,null,m.createElement(V.Provider,{value:Je},m.createElement(xe.Group,{target:x},m.createElement(be,{force:!1},m.createElement(ze,{slot:ge,name:"Dialog.Description"},m.createElement(_e,null,m.createElement(an,{initialFocus:l,initialFocusFallback:c?void 0:x,containers:X,features:B},m.createElement(yt,{value:I},N({ourProps:Qe,theirProps:d,slot:ge,defaultTag:hn,features:gn,visible:b===0,name:"Dialog"})))))))))),m.createElement(mt,null,m.createElement(Ge,null)))}let En="div";function yn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:i},l]=me("Dialog.Panel"),a=C(t,l.panelRef),u=s.useMemo(()=>({open:i===0}),[i]),c=w(d=>{d.stopPropagation()});return N({ourProps:{ref:a,id:r,onClick:c},theirProps:o,slot:u,defaultTag:En,name:"Dialog.Panel"})}let bn="h2";function xn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:i,setTitleId:l}]=me("Dialog.Title"),a=C(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let u=s.useMemo(()=>({open:i===0}),[i]);return N({ourProps:{ref:a,id:r},theirProps:o,slot:u,defaultTag:bn,name:"Dialog.Title"})}let $n=L(wn),Fn=L(yn),Tn=L(xn),$e=Object.assign($n,{Panel:Fn,Title:Tn,Description:wt});function Fe({className:e="",disabled:t,children:n,...r}){return p.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function Pn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const i=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return p.jsx(J,{show:t,as:s.Fragment,leave:"duration-200",children:p.jsxs($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:i,children:[p.jsx(J.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),p.jsx(J.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:p.jsx($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function Ln({type:e="button",className:t="",disabled:n,children:r,...o}){return p.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Rn({className:e}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:i,delete:l,processing:a,reset:u,errors:c}=et({password:""}),d=()=>{n(!0)},f=g=>{g.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>u()})},h=()=>{n(!1),u()};return p.jsxs("section",{className:`space-y-6 ${e}`,children:[p.jsxs("header",{children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),p.jsx(Fe,{onClick:d,children:"Delete Account"}),p.jsx(Pn,{show:t,onClose:h,children:p.jsxs("form",{onSubmit:f,className:"p-6",children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),p.jsxs("div",{className:"mt-6",children:[p.jsx(rt,{htmlFor:"password",value:"Password",className:"sr-only"}),p.jsx(tt,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:g=>i("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),p.jsx(nt,{message:c.password,className:"mt-2"})]}),p.jsxs("div",{className:"mt-6 flex justify-end",children:[p.jsx(Ln,{onClick:h,children:"Cancel"}),p.jsx(Fe,{className:"ml-3",disabled:a,children:"Delete Account"})]})]})})]})}export{Rn as default};