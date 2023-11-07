(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{98404:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/document_explorer",function(){return n(78006)}])},78006:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(85893),s=n(67294),l=n(84230),c=n(85280),o=n(19954);let i=(0,o.getApiHost)();function r(){let[e,t]=(0,s.useState)(""),[n,r]=(0,s.useState)(""),[d,u]=(0,s.useState)(""),[m,p]=(0,s.useState)("Documentation"),[h,f]=(0,s.useState)("#"),[x,y]=(0,s.useState)([]),[w,_]=(0,s.useState)(null),g=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{let t=e?"".concat(i,"/api/search_documents"):"".concat(i,"/api/get_all_documents"),n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e?{query:e}:{})}),a=await n.json();y(a.documents)}catch(e){console.error("Failed to fetch documents: ".concat(e))}};(0,s.useEffect)(()=>{g()},[]),(0,s.useEffect)(()=>{let e=async()=>{if(w&&w._additional.id)try{let e=await fetch(i+"/api/get_document",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:w._additional.id})}),t=await e.json();r(t.document.properties.doc_name),u(t.document.properties.text),p(t.document.properties.doc_type),f(t.document.properties.doc_link)}catch(e){console.error("Failed to fetch document:",e)}};e()},[w]);let j=async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),a=n.get("searchInput");g(a)};return(0,a.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10 text-gray-900",children:(0,a.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsxs)("div",{className:"flex justify-between items-center w-full",children:[" ",(0,a.jsx)("div",{className:"flex-none",children:(0,a.jsx)("div",{className:"bg-yellow-200 border-2 border-gray-800 rounded-lg shadow-lg animate-pop-in hover-container mr-4 ",children:(0,a.jsx)("img",{src:"".concat("static/","verba.png"),alt:"Verba Logo",className:" w-24 h-24 shadow-lg"})})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h1",{className:" text-6xl font-bold",children:"SmartyAI"}),(0,a.jsx)("div",{className:"flex text-lg",children:(0,a.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Intelligent response playground"})})]})]})}),(0,a.jsxs)("div",{className:"flex w-full space-x-4 mt-12",children:[(0,a.jsxs)("div",{className:"w-1/2 p-2 border-2 shadow-lg h-2/3 border-gray-900 rounded-xl animate-pop-in",children:[(0,a.jsx)("div",{className:"rounded-t-xl bg-yellow-200 p-4 flex justify- between items-center",children:(0,a.jsx)("form",{className:"rounded-b-xl p-4 w-full",onSubmit:j,children:(0,a.jsx)("input",{type:"text",name:"searchInput",placeholder:"Search for documents",className:"w-full p-2 rounded-md bg-white text-gray-900 placeholder-gray-400"})})}),x.length>0&&(0,a.jsx)(c.t7,{height:528,itemCount:x.length,itemSize:100,width:825,children:e=>{let{index:t,style:n}=e;return(0,a.jsx)("button",{style:n,className:" w-full p-4 animate-pop-in-late",onClick:()=>_(x[t]),children:(0,a.jsx)("p",{className:"".concat(o.DOC_TYPE_COLORS[x[t].doc_type]," p-8 w-full rounded-md shadow-md ").concat(o.DOC_TYPE_COLOR_HOVER[x[t].doc_type]),children:x[t].doc_name})},t)}})]}),(0,a.jsx)("div",{className:"w-1/2 space-y-4",children:(0,a.jsx)(l.I,{title:n,text:d,extract:"",docLink:h,type:m})})]})]})})}}},function(e){e.O(0,[280,774,888,179],function(){return e(e.s=98404)}),_N_E=e.O()}]);