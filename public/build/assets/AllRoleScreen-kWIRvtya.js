import{j as e,a as d}from"./app-D5o-_rBG.js";import{A as c}from"./AdminLayout-DXVquWSb.js";import"./Dropdown-CwIkWmKT.js";import"./transition-386rTEbl.js";import"./index-CEEPhRai.js";import"./iconBase-LMNcHqz0.js";import"./index-B6I5inLg.js";import"./index-BVOV_8_v.js";import"./index-D4oGc_uo.js";import"./index-BetXo7Q4.js";import"./index-OGlyVes-.js";function o({rolesObject:s}){const i=["role id","role name","guard name","last modified"];return e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"#NO"}),i.map((r,t)=>e.jsx("th",{scope:"col",className:"px-6 py-3",children:r},t)),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"  "})]})}),e.jsx("tbody",{children:s.map((r,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:t+1}),e.jsx("td",{className:"px-6 py-4",children:r==null?void 0:r.id}),e.jsx("td",{className:"px-6 py-4",children:r==null?void 0:r.name}),e.jsx("td",{className:"px-6 py-4",children:r==null?void 0:r.guard_name}),e.jsx("td",{className:"px-6 py-4",children:r==null?void 0:r.created_at}),e.jsxs("td",{className:"flex gap-3 px-6 py-4",children:[e.jsx(d,{href:route("roles.edit",r==null?void 0:r.id),children:"Edit"}),e.jsx(d,{method:"DELETE",as:"button",href:route("roles.destroy",r==null?void 0:r.id),children:"Delete"})]})]},r==null?void 0:r.id))})]})})})}function f({roles:s}){return e.jsx(c,{children:e.jsx("div",{children:e.jsxs("div",{className:"w-full md:max-w-[1080px] mx-auto mt-8",children:[e.jsx("div",{className:"flex items-end justify-end",children:e.jsx(d,{href:route("roles.create"),className:"px-3 py-2 text-white bg-indigo-500 cursor-pointer hover:bg-indigo-700",children:"Add Role"})}),e.jsx(o,{rolesObject:s})]})})})}export{f as default};
