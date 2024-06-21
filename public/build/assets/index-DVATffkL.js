var K=String.prototype.replace,W=/%20/g,A={RFC1738:"RFC1738",RFC3986:"RFC3986"},Q={default:A.RFC3986,formatters:{RFC1738:function(l){return K.call(l,W,"+")},RFC3986:function(l){return String(l)}},RFC1738:A.RFC1738,RFC3986:A.RFC3986},X=Q,C=Object.prototype.hasOwnProperty,O=Array.isArray,b=function(){for(var l=[],e=0;e<256;++e)l.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return l}(),Y=function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(O(t)){for(var n=[],i=0;i<t.length;++i)typeof t[i]<"u"&&n.push(t[i]);r.obj[r.prop]=n}}},k=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},n=0;n<e.length;++n)typeof e[n]<"u"&&(t[n]=e[n]);return t},J=function l(e,r,t){if(!r)return e;if(typeof r!="object"){if(O(e))e.push(r);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!C.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var n=e;return O(e)&&!O(r)&&(n=k(e,t)),O(e)&&O(r)?(r.forEach(function(i,a){if(C.call(e,a)){var s=e[a];s&&typeof s=="object"&&i&&typeof i=="object"?e[a]=l(s,i,t):e.push(i)}else e[a]=i}),e):Object.keys(r).reduce(function(i,a){var s=r[a];return C.call(i,a)?i[a]=l(i[a],s,t):i[a]=s,i},n)},ee=function(e,r){return Object.keys(r).reduce(function(t,n){return t[n]=r[n],t},e)},re=function(l,e,r){var t=l.replace(/\+/g," ");if(r==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},te=function(e,r,t,n,i){if(e.length===0)return e;var a=e;if(typeof e=="symbol"?a=Symbol.prototype.toString.call(e):typeof e!="string"&&(a=String(e)),t==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(f){return"%26%23"+parseInt(f.slice(2),16)+"%3B"});for(var s="",u=0;u<a.length;++u){var o=a.charCodeAt(u);if(o===45||o===46||o===95||o===126||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||i===X.RFC1738&&(o===40||o===41)){s+=a.charAt(u);continue}if(o<128){s=s+b[o];continue}if(o<2048){s=s+(b[192|o>>6]+b[128|o&63]);continue}if(o<55296||o>=57344){s=s+(b[224|o>>12]+b[128|o>>6&63]+b[128|o&63]);continue}u+=1,o=65536+((o&1023)<<10|a.charCodeAt(u)&1023),s+=b[240|o>>18]+b[128|o>>12&63]+b[128|o>>6&63]+b[128|o&63]}return s},ne=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],n=0;n<r.length;++n)for(var i=r[n],a=i.obj[i.prop],s=Object.keys(a),u=0;u<s.length;++u){var o=s[u],f=a[o];typeof f=="object"&&f!==null&&t.indexOf(f)===-1&&(r.push({obj:a,prop:o}),t.push(f))}return Y(r),e},ie=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},ae=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},le=function(e,r){return[].concat(e,r)},oe=function(e,r){if(O(e)){for(var t=[],n=0;n<e.length;n+=1)t.push(r(e[n]));return t}return r(e)},q={arrayToObject:k,assign:ee,combine:le,compact:ne,decode:re,encode:te,isBuffer:ae,isRegExp:ie,maybeMap:oe,merge:J},R=q,S=Q,se=Object.prototype.hasOwnProperty,I={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},x=Array.isArray,ue=String.prototype.split,fe=Array.prototype.push,_=function(l,e){fe.apply(l,x(e)?e:[e])},ce=Date.prototype.toISOString,U=S.default,g={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:R.encode,encodeValuesOnly:!1,format:U,formatter:S.formatters[U],indices:!1,serializeDate:function(e){return ce.call(e)},skipNulls:!1,strictNullHandling:!1},de=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},he=function l(e,r,t,n,i,a,s,u,o,f,h,p,y,d){var c=e;if(typeof s=="function"?c=s(r,c):c instanceof Date?c=f(c):t==="comma"&&x(c)&&(c=R.maybeMap(c,function(P){return P instanceof Date?f(P):P})),c===null){if(n)return a&&!y?a(r,g.encoder,d,"key",h):r;c=""}if(de(c)||R.isBuffer(c)){if(a){var L=y?r:a(r,g.encoder,d,"key",h);if(t==="comma"&&y){for(var H=ue.call(String(c),","),Z="",E=0;E<H.length;++E)Z+=(E===0?"":",")+p(a(H[E],g.encoder,d,"value",h));return[p(L)+"="+Z]}return[p(L)+"="+p(a(c,g.encoder,d,"value",h))]}return[p(r)+"="+p(String(c))]}var N=[];if(typeof c>"u")return N;var $;if(t==="comma"&&x(c))$=[{value:c.length>0?c.join(",")||null:void 0}];else if(x(s))$=s;else{var z=Object.keys(c);$=u?z.sort(u):z}for(var F=0;F<$.length;++F){var w=$[F],B=typeof w=="object"&&typeof w.value<"u"?w.value:c[w];if(!(i&&B===null)){var G=x(c)?typeof t=="function"?t(r,w):r:r+(o?"."+w:"["+w+"]");_(N,l(B,G,t,n,i,a,s,u,o,f,h,p,y,d))}}return N},pe=function(e){if(!e)return g;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||g.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=S.default;if(typeof e.format<"u"){if(!se.call(S.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var n=S.formatters[t],i=g.filter;return(typeof e.filter=="function"||x(e.filter))&&(i=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:g.addQueryPrefix,allowDots:typeof e.allowDots>"u"?g.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:g.charsetSentinel,delimiter:typeof e.delimiter>"u"?g.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:g.encode,encoder:typeof e.encoder=="function"?e.encoder:g.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:g.encodeValuesOnly,filter:i,format:t,formatter:n,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:g.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:g.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:g.strictNullHandling}},ye=function(l,e){var r=l,t=pe(e),n,i;typeof t.filter=="function"?(i=t.filter,r=i("",r)):x(t.filter)&&(i=t.filter,n=i);var a=[];if(typeof r!="object"||r===null)return"";var s;e&&e.arrayFormat in I?s=e.arrayFormat:e&&"indices"in e?s=e.indices?"indices":"repeat":s="indices";var u=I[s];n||(n=Object.keys(r)),t.sort&&n.sort(t.sort);for(var o=0;o<n.length;++o){var f=n[o];t.skipNulls&&r[f]===null||_(a,he(r[f],f,u,t.strictNullHandling,t.skipNulls,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset))}var h=a.join(t.delimiter),p=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),h.length>0?p+h:""},j=q,T=Object.prototype.hasOwnProperty,me=Array.isArray,m={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:j.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},ge=function(l){return l.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},V=function(l,e){return l&&typeof l=="string"&&e.comma&&l.indexOf(",")>-1?l.split(","):l},ve="utf8=%26%2310003%3B",be="utf8=%E2%9C%93",we=function(e,r){var t={},n=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,a=n.split(r.delimiter,i),s=-1,u,o=r.charset;if(r.charsetSentinel)for(u=0;u<a.length;++u)a[u].indexOf("utf8=")===0&&(a[u]===be?o="utf-8":a[u]===ve&&(o="iso-8859-1"),s=u,u=a.length);for(u=0;u<a.length;++u)if(u!==s){var f=a[u],h=f.indexOf("]="),p=h===-1?f.indexOf("="):h+1,y,d;p===-1?(y=r.decoder(f,m.decoder,o,"key"),d=r.strictNullHandling?null:""):(y=r.decoder(f.slice(0,p),m.decoder,o,"key"),d=j.maybeMap(V(f.slice(p+1),r),function(c){return r.decoder(c,m.decoder,o,"value")})),d&&r.interpretNumericEntities&&o==="iso-8859-1"&&(d=ge(d)),f.indexOf("[]=")>-1&&(d=me(d)?[d]:d),T.call(t,y)?t[y]=j.combine(t[y],d):t[y]=d}return t},Oe=function(l,e,r,t){for(var n=t?e:V(e,r),i=l.length-1;i>=0;--i){var a,s=l[i];if(s==="[]"&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var u=s.charAt(0)==="["&&s.charAt(s.length-1)==="]"?s.slice(1,-1):s,o=parseInt(u,10);!r.parseArrays&&u===""?a={0:n}:!isNaN(o)&&s!==u&&String(o)===u&&o>=0&&r.parseArrays&&o<=r.arrayLimit?(a=[],a[o]=n):u!=="__proto__"&&(a[u]=n)}n=a}return n},xe=function(e,r,t,n){if(e){var i=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,u=t.depth>0&&a.exec(i),o=u?i.slice(0,u.index):i,f=[];if(o){if(!t.plainObjects&&T.call(Object.prototype,o)&&!t.allowPrototypes)return;f.push(o)}for(var h=0;t.depth>0&&(u=s.exec(i))!==null&&h<t.depth;){if(h+=1,!t.plainObjects&&T.call(Object.prototype,u[1].slice(1,-1))&&!t.allowPrototypes)return;f.push(u[1])}return u&&f.push("["+i.slice(u.index)+"]"),Oe(f,r,t,n)}},je=function(e){if(!e)return m;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?m.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?m.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:m.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:m.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:m.comma,decoder:typeof e.decoder=="function"?e.decoder:m.decoder,delimiter:typeof e.delimiter=="string"||j.isRegExp(e.delimiter)?e.delimiter:m.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:m.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:m.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:m.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:m.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling}},$e=function(l,e){var r=je(e);if(l===""||l===null||typeof l>"u")return r.plainObjects?Object.create(null):{};for(var t=typeof l=="string"?we(l,r):l,n=r.plainObjects?Object.create(null):{},i=Object.keys(t),a=0;a<i.length;++a){var s=i[a],u=xe(s,t[s],r,typeof l=="string");n=j.merge(n,u,r)}return j.compact(n)},Se=ye,Ee=$e,Ne=Q,M={formats:Ne,parse:Ee,stringify:Se};function v(){return v=Object.assign?Object.assign.bind():function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t])}return l},v.apply(this,arguments)}class D{constructor(e,r,t){var n,i;this.name=e,this.definition=r,this.bindings=(n=r.bindings)!=null?n:{},this.wheres=(i=r.wheres)!=null?i:{},this.config=t}get template(){const e=`${this.origin}/${this.definition.uri}`.replace(/\/+$/,"");return e===""?"/":e}get origin(){return this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}get parameterSegments(){var e,r;return(e=(r=this.template.match(/{[^}?]+\??}/g))==null?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))!=null?e:[]}matchesUrl(e){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/(\/?){([^}?]*)(\??)}/g,(a,s,u,o)=>{var f;const h=`(?<${u}>${((f=this.wheres[u])==null?void 0:f.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return o?`(${s}${h})?`:`${s}${h}`}).replace(/^\w+:\/\//,""),[t,n]=e.replace(/^\w+:\/\//,"").split("?"),i=new RegExp(`^${r}/?$`).exec(decodeURI(t));if(i){for(const a in i.groups)i.groups[a]=typeof i.groups[a]=="string"?decodeURIComponent(i.groups[a]):i.groups[a];return{params:i.groups,query:M.parse(n)}}return!1}compile(e){return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(r,t,n)=>{var i,a;if(!n&&[null,void 0].includes(e[t]))throw new Error(`Ziggy error: '${t}' parameter is required for route '${this.name}'.`);if(this.wheres[t]&&!new RegExp(`^${n?`(${this.wheres[t]})?`:this.wheres[t]}$`).test((a=e[t])!=null?a:""))throw new Error(`Ziggy error: '${t}' parameter '${e[t]}' does not match required format '${this.wheres[t]}' for route '${this.name}'.`);return encodeURI((i=e[t])!=null?i:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(this.config.absolute?/(\.[^/]+?)(\/\/)/:/(^)(\/\/)/,"$1/").replace(/\/+$/,""):this.template}}class Fe extends String{constructor(e,r,t=!0,n){if(super(),this.t=n??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),this.t=v({},this.t,{absolute:t}),e){if(!this.t.routes[e])throw new Error(`Ziggy error: route '${e}' is not in the route list.`);this.i=new D(e,this.t.routes[e],this.t),this.o=this.h(r)}}toString(){const e=Object.keys(this.o).filter(r=>!this.i.parameterSegments.some(({name:t})=>t===r)).filter(r=>r!=="_query").reduce((r,t)=>v({},r,{[t]:this.o[t]}),{});return this.i.compile(this.o)+M.stringify(v({},e,this.o._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(r,t)=>typeof r=="boolean"?Number(r):t(r)})}u(e){e?this.t.absolute&&e.startsWith("/")&&(e=this.l().host+e):e=this.m();let r={};const[t,n]=Object.entries(this.t.routes).find(([i,a])=>r=new D(i,a,this.t).matchesUrl(e))||[void 0,void 0];return v({name:t},r,{route:n})}m(){const{host:e,pathname:r,search:t}=this.l();return(this.t.absolute?e+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t}current(e,r){const{name:t,params:n,query:i,route:a}=this.u();if(!e)return t;const s=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(t);if([null,void 0].includes(r)||!s)return s;const u=new D(t,a,this.t);r=this.h(r,u);const o=v({},n,i);if(Object.values(r).every(h=>!h)&&!Object.values(o).some(h=>h!==void 0))return!0;const f=(h,p)=>Object.entries(h).every(([y,d])=>Array.isArray(d)&&Array.isArray(p[y])?d.every(c=>p[y].includes(c)):typeof d=="object"&&typeof p[y]=="object"&&d!==null&&p[y]!==null?f(d,p[y]):p[y]==d);return f(r,o)}l(){var e,r,t,n,i,a;const{host:s="",pathname:u="",search:o=""}=typeof window<"u"?window.location:{};return{host:(e=(r=this.t.location)==null?void 0:r.host)!=null?e:s,pathname:(t=(n=this.t.location)==null?void 0:n.pathname)!=null?t:u,search:(i=(a=this.t.location)==null?void 0:a.search)!=null?i:o}}get params(){const{params:e,query:r}=this.u();return v({},e,r)}has(e){return Object.keys(this.t.routes).includes(e)}h(e={},r=this.i){e!=null||(e={}),e=["string","number"].includes(typeof e)?[e]:e;const t=r.parameterSegments.filter(({name:n})=>!this.t.defaults[n]);return Array.isArray(e)?e=e.reduce((n,i,a)=>v({},n,t[a]?{[t[a].name]:i}:typeof i=="object"?i:{[i]:""}),{}):t.length!==1||e[t[0].name]||!e.hasOwnProperty(Object.values(r.bindings)[0])&&!e.hasOwnProperty("id")||(e={[t[0].name]:e}),v({},this.p(r),this.$(e,r))}p(e){return e.parameterSegments.filter(({name:r})=>this.t.defaults[r]).reduce((r,{name:t},n)=>v({},r,{[t]:this.t.defaults[t]}),{})}$(e,{bindings:r,parameterSegments:t}){return Object.entries(e).reduce((n,[i,a])=>{if(!a||typeof a!="object"||Array.isArray(a)||!t.some(({name:s})=>s===i))return v({},n,{[i]:a});if(!a.hasOwnProperty(r[i])){if(!a.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${i}' parameter is missing route model binding key '${r[i]}'.`);r[i]="id"}return v({},n,{[i]:a[r[i]]})},{})}valueOf(){return this.toString()}}function Pe(l,e,r,t){const n=new Fe(l,e,r,t);return l?n.toString():n}function Ae(l){if(!globalThis.Ziggy&&typeof Ziggy>"u")throw new Error("Ziggy error: missing configuration. Ensure that a `Ziggy` variable is defined globally or pass a config object into the useRoute hook.");return(e,r,t,n=l)=>Pe(e,r,t,n)}export{Ae as h,Pe as s};
