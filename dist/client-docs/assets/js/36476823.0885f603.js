"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[8072],{9452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(4848),i=r(8453);const n={sidebar_position:15500,title:"Overwriting local with remote repo",slug:"../overwriting-local-repo"},l=void 0,s={id:"learn/git/how-to/overwite-local-repo",title:"Overwriting local with remote repo",description:"How to overwrite local repository with remote repo",source:"@site/docs/020-learn/0203-git/how-to/overwite-local-repo.md",sourceDirName:"020-learn/0203-git/how-to",slug:"/learn/git/overwriting-local-repo",permalink:"/dist/client-docs/docs/learn/git/overwriting-local-repo",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/blob/main-branch/client-docs/docs/020-learn/0203-git/how-to/overwite-local-repo.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:15500,frontMatter:{sidebar_position:15500,title:"Overwriting local with remote repo",slug:"../overwriting-local-repo"},sidebar:"tutorialSidebar",previous:{title:"Git Fetch vs Git Pull",permalink:"/dist/client-docs/docs/learn/git/fetchpull"},next:{title:"Remove last changes",permalink:"/dist/client-docs/docs/learn/git/deserialization"}},a={},c=[{value:"How to overwrite local repository with remote repo",id:"how-to-overwrite-local-repository-with-remote-repo",level:2},{value:"Resetting to the remote tracking branch",id:"resetting-to-the-remote-tracking-branch",level:2},{value:"Resetting all local changes",id:"resetting-all-local-changes",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"how-to-overwrite-local-repository-with-remote-repo",children:"How to overwrite local repository with remote repo"}),"\n",(0,o.jsx)(t.admonition,{title:"Note: Beware of what happens if you perform the following commands",type:"warning",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Files that are tracked by Git such as uploaded user contents will not be affected."}),"\n",(0,o.jsxs)(t.li,{children:["All local changes ",(0,o.jsx)("u",{children:"will be lost"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Non-pushed local commits ",(0,o.jsx)("u",{children:"will be lost"}),"."]}),"\n"]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:'title="Git-Pull forcefully"',children:"git fetch --all\r\n// To backup current branch\r\ngit branch backup-master\r\ngit reset --hard origin/master  // or git reset --hard origin/<branch_name>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"resetting-to-the-remote-tracking-branch",children:"Resetting to the remote tracking branch"}),"\n",(0,o.jsxs)(t.p,{children:["By using ",(0,o.jsx)(t.code,{children:"git reset"})," ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"--keep"})})," as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git fetch\r\ngit reset --keep origin/$(git rev-parse --abbrev-ref HEAD) \n"})}),"\n",(0,o.jsx)(t.h2,{id:"resetting-all-local-changes",children:"Resetting all local changes"}),"\n",(0,o.jsxs)(t.p,{children:["By using ",(0,o.jsx)(t.code,{children:"git reset"})," ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"--hard"})})," as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git fetch\r\ngit reset --hard origin/$(git rev-parse --abbrev-ref HEAD) # To remove all not committed changes!\r\ngit clean -fd         # To remove all untracked (non-git) files and folders!\r\ngit pull\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Warning: if you don't have your data/files committed yet, note that the commands above can result in loss of them all! Backup your whole repository folder before taking the actions."})}),"\n",(0,o.jsx)(t.h2,{id:""})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var o=r(6540);const i={},n=o.createContext(i);function l(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);