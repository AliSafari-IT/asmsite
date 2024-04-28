"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[4528],{4219:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const r={sidebar_position:3,title:"Azure Pipelines"},o=void 0,a={id:"learn/cicd-pipelines/azure-devops/azure-pipelines",title:"Azure Pipelines",description:"When we can use Azure Pipelines?",source:"@site/docs/020-learn/0204-cicd-pipelines/azure-devops/0103-azure-pipelines.md",sourceDirName:"020-learn/0204-cicd-pipelines/azure-devops",slug:"/learn/cicd-pipelines/azure-devops/azure-pipelines",permalink:"/docs/learn/cicd-pipelines/azure-devops/azure-pipelines",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/docs/020-learn/0204-cicd-pipelines/azure-devops/0103-azure-pipelines.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Azure Pipelines"},sidebar:"tutorialSidebar",previous:{title:"Testing pipeline",permalink:"/docs/learn/cicd-pipelines/azure-devops/test-pipeline"},next:{title:"Print directory contents",permalink:"/docs/learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents"}},l={},c=[{value:"When we can use Azure Pipelines?",id:"when-we-can-use-azure-pipelines",level:2},{value:"How data flows through the CI/CD scenarios?",id:"how-data-flows-through-the-cicd-scenarios",level:2},{value:"1. Source control stage",id:"1-source-control-stage",level:3},{value:"2. Build stage",id:"2-build-stage",level:3},{value:"3. Release stage",id:"3-release-stage",level:3},{value:"4. Testing stage",id:"4-testing-stage",level:3},{value:"5. Monitoring stage",id:"5-monitoring-stage",level:3}];function d(e){const i={blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"when-we-can-use-azure-pipelines",children:"When we can use Azure Pipelines?"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Continuous integration and continuous deployment (CI/CD): You can use Azure Pipelines to build, test, and deploy your applications automatically after every code change."}),"\n",(0,t.jsx)(i.li,{children:"Multi-platform builds: Azure Pipelines supports building and deploying applications on Windows, Linux, and macOS."}),"\n",(0,t.jsx)(i.li,{children:"Container builds: You can use Azure Pipelines to build and push Docker containers to a container registry."}),"\n",(0,t.jsx)(i.li,{children:"Cloud deployments: You can use Azure Pipelines to deploy your applications to Azure or other cloud providers."}),"\n",(0,t.jsx)(i.li,{children:"On-premises deployments: Azure Pipelines can also be used to deploy your applications to on-premises servers or other environments."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"In general, Azure Pipelines is a powerful tool that can be used for any scenario that involves building, testing, and deploying applications."}),"\n",(0,t.jsx)(i.h2,{id:"how-data-flows-through-the-cicd-scenarios",children:"How data flows through the CI/CD scenarios?"}),"\n",(0,t.jsx)(i.p,{children:"In a typical CI/CD scenario, data flows through various stages as follows:"}),"\n",(0,t.jsx)(i.h3,{id:"1-source-control-stage",children:"1. Source control stage"}),"\n",(0,t.jsx)(i.p,{children:"Developers write code and store it in a source control repository, such as Azure Repos."}),"\n",(0,t.jsx)(i.h3,{id:"2-build-stage",children:"2. Build stage"}),"\n",(0,t.jsx)(i.p,{children:"When a new code change is checked in, the build process begins. Azure Pipelines retrieves the code from the source control repository and builds it into an executable package. The build process can include compiling code, running automated tests, and creating artifacts."}),"\n",(0,t.jsx)(i.h3,{id:"3-release-stage",children:"3. Release stage"}),"\n",(0,t.jsx)(i.p,{children:"Once the build is complete, the release process begins. This stage involves deploying the application to a target environment such as a test, staging, or production environment. Azure Pipelines can deploy to a variety of targets, including virtual machines, container clusters, and cloud services."}),"\n",(0,t.jsx)(i.h3,{id:"4-testing-stage",children:"4. Testing stage"}),"\n",(0,t.jsx)(i.p,{children:"Once the application is deployed, automated tests are run to ensure that it is functioning correctly. These tests can include unit tests, integration tests, and end-to-end tests."}),"\n",(0,t.jsx)(i.h3,{id:"5-monitoring-stage",children:"5. Monitoring stage"}),"\n",(0,t.jsx)(i.p,{children:"Finally, the application is monitored to ensure that it is performing well and meeting its service level objectives (SLOs). Azure provides a variety of monitoring tools that can be used to track performance metrics, troubleshoot issues, and analyze usage patterns."}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Overall, data flows through these stages in a continuous loop, with new changes triggering the build and release process again and again. This process helps ensure that applications are continuously updated, tested, and deployed with minimal manual intervention."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Ok, let's cap it up:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Stage"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Source Control"}),(0,t.jsx)("td",{children:"Developers write code and store it in a source control repository."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Build Pipeline"}),(0,t.jsx)("td",{children:"When a new code change is checked in, the build process begins. The code is retrieved and built into an executable package."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Release Pipeline"}),(0,t.jsx)("td",{children:"The application is deployed to a target environment such as a test, staging, or production environment."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Automated Testing"}),(0,t.jsx)("td",{children:"Automated tests are run to ensure that the application is functioning correctly."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Monitoring and Analytics"}),(0,t.jsx)("td",{children:"The application is monitored to ensure that it is performing well and meeting its service level objectives (SLOs)."})]})]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);