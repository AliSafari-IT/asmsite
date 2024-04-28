"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[3372],{8233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(4848),o=n(8453);const r={sidebar_position:18500,title:"Remove last changes",slug:"../deserialization"},s=void 0,l={id:"learn/git/how-to/remove-last-changes",title:"Remove last changes",description:"How to remove changes since last git commit",source:"@site/docs/020-learn/0203-git/how-to/remove-last-changes.md",sourceDirName:"020-learn/0203-git/how-to",slug:"/learn/git/deserialization",permalink:"/dist/client-docs/docs/learn/git/deserialization",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/blob/main-branch/client-docs/docs/020-learn/0203-git/how-to/remove-last-changes.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:18500,frontMatter:{sidebar_position:18500,title:"Remove last changes",slug:"../deserialization"},sidebar:"tutorialSidebar",previous:{title:"Overwriting local with remote repo",permalink:"/dist/client-docs/docs/learn/git/overwriting-local-repo"},next:{title:"Rollback to a previous state",permalink:"/dist/client-docs/docs/learn/git/rollback-commit"}},a={},c=[{value:"How to remove changes since last git commit",id:"how-to-remove-changes-since-last-git-commit",level:2},{value:"Git-Clean interactive mode",id:"git-clean-interactive-mode",level:2},{value:"Dry run",id:"dry-run",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"how-to-remove-changes-since-last-git-commit",children:"How to remove changes since last git commit"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"git clean"})," deletes all your untracked files/directories permanantly. Backup your whole repository folder before taking the actions."]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"To clean your local working directory by resetting every part of the repository just to the last committed state, try the command below:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git reset --hard\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then for removing untracked files from the working tree, we use ",(0,i.jsx)(t.code,{children:"git clean"})," command as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clean -fd\n"})}),"\n",(0,i.jsxs)(t.p,{children:["where ",(0,i.jsx)(t.code,{children:"-d"})," is to let git to recurse into untracked directories and ",(0,i.jsx)(t.code,{children:"-f"}),"is the flag ",(0,i.jsx)(t.code,{children:"--force"}),', allowing you to order Git "Just do it anyway"!']}),"\n",(0,i.jsxs)(t.admonition,{title:"git-clean SYNOPSIS:",type:"tip",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] <path>\u2026\u200b"})}),(0,i.jsxs)(t.p,{children:["If any paths are specified, then ",(0,i.jsx)(t.code,{children:"-d"})," is irrelevant. Hence, when any optional ",(0,i.jsx)(t.code,{children:"<path>..."})," arguments are given, only those paths are being affected."]})]}),"\n",(0,i.jsx)(t.h2,{id:"git-clean-interactive-mode",children:"Git-Clean interactive mode"}),"\n",(0,i.jsxs)(t.p,{children:["using the flag ",(0,i.jsx)(t.code,{children:"--interactive"})," or shortly ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"-i"})}),", takes you into its interactive command loop by showing you what would be done/cleaned interactively."]}),"\n",(0,i.jsx)(t.p,{children:"*** Interactive subcommands ***"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"1: clean"}),"\n",(0,i.jsx)(t.li,{children:"2: filter by pattern"}),"\n",(0,i.jsx)(t.li,{children:"3: select by numbers"}),"\n",(0,i.jsx)(t.li,{children:"4: ask each"}),"\n",(0,i.jsx)(t.li,{children:"5: quit"}),"\n",(0,i.jsx)(t.li,{children:"6: help"}),"\n",(0,i.jsxs)(t.li,{children:["What now> 1\r\nIn this mode you will be prompte with ",(0,i.jsx)(t.code,{children:'"What now> "'}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"dry-run",children:"Dry run"}),"\n",(0,i.jsxs)(t.p,{children:["In order to removed all untracked files/folders from your working tree such as a settings folder of your IDE, 'dry run' can come to the rescue by using the ",(0,i.jsx)(t.code,{children:"--dry-run"})," flag or shortly ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"-n"})}),". This option will check what the git command is about to do, before actually doing so."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="Git clean with dry run to remove any changes occured since last commit"',children:"git clean -d -f -n\n"})}),"\n",(0,i.jsx)(t.p,{children:":::"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);