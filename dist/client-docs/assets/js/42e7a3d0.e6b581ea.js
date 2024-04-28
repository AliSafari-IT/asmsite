"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[373],{1921:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=r(4848),s=r(8453);const n={sidebar_position:2,title:"Triggers in YAML pipelines"},l=void 0,a={id:"learn/cicd-pipelines/azure-devops/yamlscripts/triggers",title:"Triggers in YAML pipelines",description:"info",source:"@site/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/02-triggers.md",sourceDirName:"020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts",slug:"/learn/cicd-pipelines/azure-devops/yamlscripts/triggers",permalink:"/dist/client-docs/docs/learn/cicd-pipelines/azure-devops/yamlscripts/triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/blob/main-branch/client-docs/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/02-triggers.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Triggers in YAML pipelines"},sidebar:"tutorialSidebar",previous:{title:"Print directory contents",permalink:"/dist/client-docs/docs/learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents"},next:{title:"YAML templates",permalink:"/dist/client-docs/docs/learn/cicd-pipelines/azure-devops/yamlscripts/Yaml-templates"}},c={},d=[{value:"info",id:"info",level:2},{value:"Push triggers",id:"push-triggers",level:3},{value:"Pull request triggers",id:"pull-request-triggers",level:3},{value:"Scheduled triggers",id:"scheduled-triggers",level:3}];function o(e){const i={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"info",children:"info"}),"\n",(0,t.jsx)(i.p,{children:"In YAML pipelines, triggers are used to specify the events that can trigger a pipeline run. There are different types of triggers available in YAML pipelines, including:"}),"\n",(0,t.jsx)(i.h3,{id:"push-triggers",children:"Push triggers"}),"\n",(0,t.jsx)(i.p,{children:"These triggers are used to start a pipeline run when changes are pushed to the repository branch that the pipeline is configured to monitor."}),"\n",(0,t.jsx)(i.h3,{id:"pull-request-triggers",children:"Pull request triggers"}),"\n",(0,t.jsx)(i.p,{children:"These triggers are used to start a pipeline run when a pull request is created or updated in the repository branch that the pipeline is configured to monitor."}),"\n",(0,t.jsx)(i.h3,{id:"scheduled-triggers",children:"Scheduled triggers"}),"\n",(0,t.jsx)(i.p,{children:"These triggers are used to start a pipeline run at a specified time or on a specified schedule."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",metastring:'title="Example YAML Pipeline with Multiple Triggers and Path Filters"',children:"trigger:\r\n  branches:\r\n    include:\r\n    - master\r\n    - releases/*\r\n  paths:\r\n    include:\r\n    - src/**\r\n    exclude:\r\n    - src/**/tests/**\r\n  tags:\r\n    include:\r\n    - v*\n"})}),"\n",(0,t.jsx)(i.admonition,{title:"Description",type:"info",children:(0,t.jsxs)(i.p,{children:["In this example, the trigger is configured to start a pipeline run when changes are pushed to the ",(0,t.jsx)(i.em,{children:"master"})," branch or any branch that starts with ",(0,t.jsx)(i.em,{children:"releases/"}),". The trigger is also configured to include changes to files in the ",(0,t.jsx)(i.em,{children:"src/"})," directory and its subdirectories, but exclude changes to files in ",(0,t.jsx)(i.em,{children:"src/**/tests/"})," directories. Finally, the trigger is configured to include tags that start with ",(0,t.jsx)(i.em,{children:"v"}),"."]})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>a});var t=r(6540);const s={},n=t.createContext(s);function l(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);