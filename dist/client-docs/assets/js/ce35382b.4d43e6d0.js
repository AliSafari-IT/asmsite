"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[9654],{9880:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=i(4848),r=i(8453);const n={sidebar_position:18550,title:"Rollback to a previous state",slug:"../rollback-commit"},s=void 0,a={id:"learn/git/how-to/rollback",title:"Rollback to a previous state",description:"Reverting a Git repository to an earlier commit",source:"@site/docs/020-learn/0203-git/how-to/rollback.md",sourceDirName:"020-learn/0203-git/how-to",slug:"/learn/git/rollback-commit",permalink:"/docs/learn/git/rollback-commit",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/docs/020-learn/0203-git/how-to/rollback.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:18550,frontMatter:{sidebar_position:18550,title:"Rollback to a previous state",slug:"../rollback-commit"},sidebar:"tutorialSidebar",previous:{title:"Remove last changes",permalink:"/docs/learn/git/deserialization"},next:{title:".Net Core",permalink:"/docs/learn/cicd-pipelines/azure/tasks/build-tasks/dotnet.core"}},c={},l=[{value:"Reverting a Git repository to an earlier commit",id:"reverting-a-git-repository-to-an-earlier-commit",level:2},{value:"Method 1: <code>git reset</code>",id:"method-1-git-reset",level:3},{value:"Method 2 <code>git revert</code>",id:"method-2-git-revert",level:3},{value:"Reverting multiple commits",id:"reverting-multiple-commits",level:3}];function m(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"reverting-a-git-repository-to-an-earlier-commit",children:"Reverting a Git repository to an earlier commit"}),"\n",(0,o.jsx)(t.admonition,{title:"Caution!",type:"warning",children:(0,o.jsx)(t.p,{children:"This command might cause losing commit history. To be on the safe side, have a backup of your git repo first."})}),"\n",(0,o.jsxs)(t.h3,{id:"method-1-git-reset",children:["Method 1: ",(0,o.jsx)(t.code,{children:"git reset"})]}),"\n",(0,o.jsxs)(t.p,{children:["When you don't want to keep the newer commit(s), go with the ",(0,o.jsx)(t.code,{children:"--hard"})," flag:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git reset --hard CommitId && git clean -f\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Get the commit Id by running the ",(0,o.jsx)(t.code,{children:"git reflog"})," command.\r\nBy now, you are done with your lical repository. Then, for updating your remote repository run the git command below:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git push -f\n"})}),"\n",(0,o.jsx)(t.p,{children:"If the goal is to uncommit the last commit, then just use this command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git reset HEAD~\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"method-2-git-revert",children:["Method 2 ",(0,o.jsx)(t.code,{children:"git revert"})]}),"\n",(0,o.jsx)(t.p,{children:"Revert is the command to rollback the commits. To revert a particular commit, or a set of commits."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git revert --no-commit CommitId..HEAD\r\ngit commit\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In this command, you will need to include enough of the sha to identify the commit as unique among that repository: e.g. ",(0,o.jsx)(t.code,{children:"git revert f688f767"}),". By using ",(0,o.jsx)(t.code,{children:"reflog"}),' you can have access to the list of commits and their SHAs.\r\nThis will return everything from the HEAD back to the commit hash, meaning it will restore that commit state in the working tree as if every commit after the reverting commit had been walked back. You can then commit the current tree, and it will create a brand new commit essentially the same to the commit you "reverted" to.\r\nThe ',(0,o.jsx)(t.code,{children:"--no-commit"})," flag lets git revert all the commits at once- otherwise you'll be prompted for a message for each commit in the range, littering your history with unnecessary new commits."]}),"\n",(0,o.jsxs)(t.p,{children:["Other common gitrevisions are branch names followed by ",(0,o.jsx)(t.code,{children:"~"}),". For example, ",(0,o.jsx)(t.code,{children:"git revert master~3"})," is 3 commits behind the head commit on the ",(0,o.jsx)(t.code,{children:"master"})," branch.\r\nIf you don\u2019t wish to change your commmit message, skip it by including the ",(0,o.jsx)(t.code,{children:"--no-edit"})," flag before the gitrevision:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git revert --no-edit master~3\n"})}),"\n",(0,o.jsx)(t.h3,{id:"reverting-multiple-commits",children:"Reverting multiple commits"}),"\n",(0,o.jsxs)(t.p,{children:["Just use ",(0,o.jsx)(t.code,{children:".."})," between two gitrevisions:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git revert HEAD~4..HEAD~2\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will revert 3 commits: commit #2, #3 and #4."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(6540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);