import{j as e,a as i}from"./app-D5o-_rBG.js";import{A as m}from"./AdminLayout-DXVquWSb.js";import"./Dropdown-CwIkWmKT.js";import"./transition-386rTEbl.js";import"./index-CEEPhRai.js";import"./iconBase-LMNcHqz0.js";import"./index-B6I5inLg.js";import"./index-BVOV_8_v.js";import"./index-D4oGc_uo.js";import"./index-BetXo7Q4.js";import"./index-OGlyVes-.js";function c({permissionsObject:r}){const d=["permission id","permission name","guard name","last modified"];return e.jsx("div",{className:"w-full md:max-w-[990px] mx-auto mt-8",children:e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"#NO"}),d.map((s,t)=>e.jsx("th",{scope:"col",className:"px-6 py-3",children:s},t)),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"  "})]})}),e.jsx("tbody",{children:r.map((s,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:t+1}),e.jsx("td",{className:"px-6 py-4",children:s==null?void 0:s.id}),e.jsx("td",{className:"px-6 py-4",children:s==null?void 0:s.name}),e.jsx("td",{className:"px-6 py-4",children:s==null?void 0:s.guard_name}),e.jsx("td",{className:"px-6 py-4",children:s==null?void 0:s.created_at}),e.jsxs("td",{className:"flex gap-4 px-6 py-4",children:[e.jsx(i,{href:route("permissions.edit",s==null?void 0:s.id),children:"Edit"}),e.jsx(i,{method:"DELETE",as:"button",href:route("permissions.destroy",s==null?void 0:s.id),children:"Delete"})]})]},s==null?void 0:s.id))})]})})})}function f({permissions:r}){return e.jsx(m,{children:e.jsxs("div",{children:[e.jsx("div",{className:"w-full md:max-w-[1080px] mx-auto mt-8",children:e.jsx("div",{className:"flex items-end justify-end",children:e.jsx(i,{href:route("permissions.create"),className:"px-3 py-2 text-white bg-indigo-500 cursor-pointer hover:bg-indigo-700",children:"Add Permission"})})}),e.jsx(c,{permissionsObject:r})]})})}export{f as default};
