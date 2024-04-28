"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[10],{8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(4848),i=n(8453);const s={sidebar_position:1,title:"Redux vs Redux toolkit"},r=void 0,d={id:"learn/react/Redux/Redux-Basic-Example",title:"Redux vs Redux toolkit",description:"Redux in React",source:"@site/docs/020-learn/0202-react/Redux/Redux-Basic-Example.md",sourceDirName:"020-learn/0202-react/Redux",slug:"/learn/react/Redux/Redux-Basic-Example",permalink:"/docs/learn/react/Redux/Redux-Basic-Example",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/docs/020-learn/0202-react/Redux/Redux-Basic-Example.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Redux vs Redux toolkit"},sidebar:"tutorialSidebar",previous:{title:"Axios",permalink:"/docs/learn/react/Axios/"},next:{title:"What is GIT",permalink:"/docs/learn/git"}},o={},c=[{value:"Redux in React",id:"redux-in-react",level:2},{value:"State flow in Redux",id:"state-flow-in-redux",level:2},{value:"Redux Toolkit",id:"redux-toolkit",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"redux-in-react",children:"Redux in React"}),"\n",(0,a.jsx)(t.p,{children:"Redux is a state management library for JavaScript applications, including React applications. It provides a centralized store that holds the state of the application, and allows you to manage state changes in a predictable way."}),"\n",(0,a.jsx)(t.p,{children:"In a React application, each component can have its own local state, but managing the state of a large application can be challenging. Redux provides a global store where you can store the state of the entire application in one place. This makes it much easier to manage the state of the application as a whole."}),"\n",(0,a.jsx)(t.p,{children:"When a component needs to update the state, it dispatches an action to the Redux store. An action is a plain JavaScript object that describes what happened. The action is then processed by a reducer, which is a pure function that takes the current state and the action as input, and returns a new state."}),"\n",(0,a.jsx)(t.p,{children:"The reducer calculates the new state based on the current state and the action, and returns the new state to the store. The store then notifies all the components that are subscribed to the store that the state has changed. The components can then re-render based on the new state."}),"\n",(0,a.jsx)(t.p,{children:"By using Redux, you can write more predictable and maintainable code, and make it easier to reason about the state of your application. It also makes it easier to debug your application, as you can see the entire state of the application in one place."}),"\n",(0,a.jsx)(t.h2,{id:"state-flow-in-redux",children:"State flow in Redux"}),"\n",(0,a.jsx)(t.p,{children:"Following table summarizes the state flow in a Redux application"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Step"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"1"}),(0,a.jsx)("td",{children:"The application state is stored in the Redux store, which is a plain JavaScript object."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"2"}),(0,a.jsx)("td",{children:"The components in the application can dispatch actions to the store to update the state."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"3"}),(0,a.jsx)("td",{children:"An action is a plain JavaScript object that describes what happened, and contains a type property that specifies the type of action."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"4"}),(0,a.jsx)("td",{children:"When an action is dispatched, it is sent to the reducers."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"5"}),(0,a.jsx)("td",{children:"A reducer is a pure function that takes the current state and the action as input, and returns a new state."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"6"}),(0,a.jsx)("td",{children:"The reducer calculates the new state based on the current state and the action, and returns the new state to the store."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"7"}),(0,a.jsx)("td",{children:"The store updates its state with the new state returned by the reducer."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"8"}),(0,a.jsx)("td",{children:"The store then notifies all the components that are subscribed to the store that the state has changed."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"9"}),(0,a.jsx)("td",{children:"The components can then re-render based on the new state."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"redux-toolkit",children:"Redux Toolkit"}),"\n",(0,a.jsx)(t.p,{children:"Redux Toolkit is a set of utility functions and opinionated defaults that simplify the process of writing Redux code. It is designed to be a more efficient and streamlined way of writing Redux applications, and provides several benefits over traditional Redux:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Benefit"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"1"}),(0,a.jsx)("td",{children:"Simplified syntax: Redux Toolkit provides a simplified syntax for defining actions and reducers, making it easier to write and read Redux code."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"2"}),(0,a.jsx)("td",{children:"Automatic reducer generation: Redux Toolkit can automatically generate reducers based on the functions you define, which can save you time and reduce the amount of boilerplate code you need to write."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"3"}),(0,a.jsx)("td",{children:"Immutable state updates: Redux Toolkit uses the Immer library under the hood to enable you to write simpler, more intuitive code for updating state immutably."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"4"}),(0,a.jsxs)("td",{children:["Built-in middleware: Redux Toolkit includes several built-in middleware functions, such as ",(0,a.jsx)(t.code,{children:"createAsyncThunk"})," and ",(0,a.jsx)(t.code,{children:"createSlice"}),", that make it easier to handle common use cases like fetching data from an API or managing state for a specific feature."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"5"}),(0,a.jsx)("td",{children:"Better performance: By using Redux Toolkit, you can reduce the amount of boilerplate code you need to write, which can help your application run faster and more efficiently."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(6540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);