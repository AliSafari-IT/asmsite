"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[9588],{5336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(4848),a=n(8453);const s={sidebar_position:20},o="Handle Data from API",i={id:"learn/react/Basics/handle-data-from-api",title:"Handle Data from API",description:"XMLHttpRequest &amp; Ajax",source:"@site/docs/020-learn/0202-react/Basics/handle-data-from-api.md",sourceDirName:"020-learn/0202-react/Basics",slug:"/learn/react/Basics/handle-data-from-api",permalink:"/docs/learn/react/Basics/handle-data-from-api",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/docs/020-learn/0202-react/Basics/handle-data-from-api.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"React Single Page Application",permalink:"/docs/learn/react/intro"},next:{title:"useFetch()",permalink:"/docs/learn/react/Hooks/useFetch"}},c={},l=[{value:"XMLHttpRequest &amp; Ajax",id:"xmlhttprequest--ajax",level:2},{value:"Fetch API",id:"fetch-api",level:2},{value:"Supplying request options",id:"supplying-request-options",level:3}];function d(e){const t={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"handle-data-from-api",children:"Handle Data from API"}),"\n",(0,r.jsx)(t.h2,{id:"xmlhttprequest--ajax",children:"XMLHttpRequest & Ajax"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"XMLHttpRequest"})," (XHR) objects are meant to interact with servers by retrieving data from a URL without refreshing the page. This is good when only part of the page needs to be updated. XMLHttpRequest has been used in ",(0,r.jsx)(t.code,{children:"AJAX"})," programming."]}),"\n",(0,r.jsx)(t.h2,{id:"fetch-api",children:"Fetch API"}),"\n",(0,r.jsxs)(t.p,{children:["Fetch API is Promise based, resulting a more concise syntax compared to the ajax method.",(0,r.jsx)(t.br,{}),"\n","A basic fetch request is really simple to set up. Have a look at the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="Fetch basic request"',children:"fetch('http://example.com/movies.json')\r\n  .then(response => response.json())\r\n  .then(data => console.log(data));\r\n\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"danger",children:(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"fetch()"})," will not send or receive any ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"cookies"})})," from the server, resulting in ",(0,r.jsx)("u",{children:"unauthenticated"})," requests."]})}),"\n",(0,r.jsx)(t.h3,{id:"supplying-request-options",children:"Supplying request options"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"fetch()"})," method can optionally accept a second parameter, an ",(0,r.jsx)(t.code,{children:"init"})," object that allows you to control a number of different settings:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="An example of POST method implementation"',children:"async function postData(url = '', data = {}) {\r\n  // Default options are marked with *\r\n  const response = await fetch(url, {\r\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\r\n    mode: 'cors', // no-cors, *cors, same-origin\r\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\r\n    credentials: 'same-origin', // include, *same-origin, omit\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n      // 'Content-Type': 'application/x-www-form-urlencoded',\r\n    },\r\n    redirect: 'follow', // manual, *follow, error\r\n    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\r\n    body: JSON.stringify(data) // body data type must match \"Content-Type\" header\r\n  });\r\n  return response.json(); // parses JSON response into native JavaScript objects\r\n}\r\n\r\npostData('https://example.com/answer', { answer: 42 })\r\n  .then(data => {\r\n    console.log(data); // JSON data parsed by `data.json()` call\r\n  });\r\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);