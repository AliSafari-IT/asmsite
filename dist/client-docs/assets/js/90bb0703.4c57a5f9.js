"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[2532],{6033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=t(4848),r=t(8453);const s={sidebar_position:1,title:"Print directory contents"},o=void 0,c={id:"learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents",title:"Print directory contents",description:"info",source:"@site/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/01-print-dir-contents.md",sourceDirName:"020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts",slug:"/learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents",permalink:"/dist/client-docs/docs/learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/blob/main-branch/client-docs/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/01-print-dir-contents.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Print directory contents"},sidebar:"tutorialSidebar",previous:{title:"Azure Pipelines",permalink:"/dist/client-docs/docs/learn/cicd-pipelines/azure-devops/azure-pipelines"},next:{title:"Triggers in YAML pipelines",permalink:"/dist/client-docs/docs/learn/cicd-pipelines/azure-devops/yamlscripts/triggers"}},a={},p=[{value:"info",id:"info",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"info",children:"info"}),"\n",(0,i.jsx)(n.p,{children:"In this example, the name property is set to 'Print directory contents' for the Bash task. When the pipeline runs, this name will be displayed in the logs and in the pipeline's visual editor."}),"\n",(0,i.jsx)(n.p,{children:"You can modify the name property to set a different name for the task."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-{7}",children:"trigger:\r\n- main\r\n\r\npool:\r\n  vmImage: 'ubuntu-latest'\r\n\r\nsteps:\r\n- name: 'Print directory contents'\r\n  task: Bash@3\r\n  inputs:\r\n    targetType: 'inline'\r\n    script: 'ls ./'\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This will help you locate your files and figure out where you should run your commands."})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);