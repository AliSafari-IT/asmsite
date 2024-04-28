"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[9864],{3128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=a(4848),n=a(8453);const o={sidebar_position:1,title:"Using MessagePack in TypeScript"},i=void 0,c={id:"devtools/dataformats/msgpack-lite/ts-example",title:"Using MessagePack in TypeScript",description:"Here's an example of how to use MessagePack in TypeScript using the msgpack-lite library:",source:"@site/docs/015-devtools/02-dataformats/006-msgpack-lite/02-ts-example.md",sourceDirName:"015-devtools/02-dataformats/006-msgpack-lite",slug:"/devtools/dataformats/msgpack-lite/ts-example",permalink:"/dist/client-docs/docs/devtools/dataformats/msgpack-lite/ts-example",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/blob/main-branch/client-docs/docs/015-devtools/02-dataformats/006-msgpack-lite/02-ts-example.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using MessagePack in TypeScript"},sidebar:"tutorialSidebar",previous:{title:"MessagePack data format",permalink:"/dist/client-docs/docs/devtools/dataformats/msgpack-lite/msgpack"},next:{title:"Using MessagePack in .Net ",permalink:"/dist/client-docs/docs/devtools/dataformats/msgpack-lite/csharp-example"}},r={},d=[];function l(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Here's an example of how to use MessagePack in TypeScript using the ",(0,s.jsx)(t.em,{children:"msgpack-lite"})," library:"]}),"\n",(0,s.jsx)(t.p,{children:"First, you need to install the library:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"npm install msgpack-lite\n"})}),"\n",(0,s.jsx)(t.p,{children:"Then, you can use the msgpack-lite library to encode and decode your objects:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import * as msgpack from 'msgpack-lite';\r\n\r\n// Define your object\r\nconst obj = { name: 'Alice', age: 30, email: ['alice@example.com'] };\r\n\r\n// Encode the object as a MessagePack buffer\r\nconst buffer = msgpack.encode(obj);\r\n\r\n// Decode the buffer back into an object\r\nconst decodedObj = msgpack.decode(buffer);\r\n\r\nconsole.log(decodedObj); // { name: 'Alice', age: 30, email: ['alice@example.com'] }\r\n\n"})}),"\n",(0,s.jsx)(t.p,{children:"This code defines an object obj, encodes it as a MessagePack buffer using msgpack.encode, and decodes the buffer back into an object using msgpack.decode. The resulting decodedObj should be the same as the original obj."}),"\n",(0,s.jsxs)(t.p,{children:["Note that msgpack-lite supports a wide range of data types, including arrays, maps, numbers, and strings. You can find more information about how to use the library in the official documentation: ",(0,s.jsx)(t.a,{href:"https://github.com/kawanet/msgpack-lite",children:"https://github.com/kawanet/msgpack-lite"})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var s=a(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);