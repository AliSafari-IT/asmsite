"use strict";(self.webpackChunkasmsite=self.webpackChunkasmsite||[]).push([[63],{2524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const a={sidebar_position:2,title:"Singleton Pattern"},o=void 0,r={id:"software-development/Designing/designPatterns/singleton-pattern",title:"Singleton Pattern",description:'Singleton is a creational design pattern that restricts the instantiation of a class to one "single" instance by providing a single point of access to the class for any other code. This is useful when exactly one object is needed to coordinate actions across the system, but it is frequently used in scenarios where it is not beneficial, introduces unnecessary restrictions in situations where a sole instance of a class is not actually required. This makes the singleton as an antipattern architecture. That\'s why, its usage trend is declining.',source:"@site/docs/010-software-development/0103-Designing/001-designPatterns/singleton-pattern.md",sourceDirName:"010-software-development/0103-Designing/001-designPatterns",slug:"/software-development/Designing/designPatterns/singleton-pattern",permalink:"/dist/client-docs/docs/software-development/Designing/designPatterns/singleton-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/AliSafari-IT/asmsite/blob/main-branch/client-docs/docs/010-software-development/0103-Designing/001-designPatterns/singleton-pattern.md",tags:[],version:"current",lastUpdatedBy:"asafarim",lastUpdatedAt:1714173849e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Singleton Pattern"},sidebar:"tutorialSidebar",previous:{title:"Fa\xe7ade Pattern",permalink:"/dist/client-docs/docs/software-development/Designing/designPatterns/fa\xe7ade-pattern"},next:{title:"User Story vs User Case",permalink:"/dist/client-docs/docs/software-development/Designing/uml/user-story-user-case"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Singleton is a creational design pattern that restricts the instantiation of a class to one "single" instance by providing a single point of access to the class for any other code. This is useful when exactly one object is needed to coordinate actions across the system, but it is frequently used in scenarios where it is not beneficial, introduces unnecessary restrictions in situations where a sole instance of a class is not actually required. This makes the singleton as an antipattern architecture. That\'s why, its usage trend is declining.'}),"\n",(0,s.jsx)(n.p,{children:"The following example illustrates the structure of the Singleton design pattern:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts: Singleton Conceptual example"',children:"/**\r\n * The Singleton class defines the `getInstance` method that lets clients access\r\n * the unique singleton instance.\r\n */\r\nclass Singleton {\r\n    private static instance: Singleton;\r\n\r\n    /**\r\n     * The Singleton's constructor should always be private to prevent direct\r\n     * construction calls with the `new` operator.\r\n     */\r\n    private constructor() { }\r\n\r\n    /**\r\n     * The static method that controls the access to the singleton instance.\r\n     *\r\n     * This implementation let you subclass the Singleton class while keeping\r\n     * just one instance of each subclass around.\r\n     */\r\n    public static getInstance(): Singleton {\r\n        if (!Singleton.instance) {\r\n            Singleton.instance = new Singleton();\r\n        }\r\n\r\n        return Singleton.instance;\r\n    }\r\n\r\n    /**\r\n     * Finally, any singleton should define some business logic, which can be\r\n     * executed on its instance.\r\n     */\r\n    public someBusinessLogic() {\r\n        // ...\r\n    }\r\n}\r\n\r\n/**\r\n * The client code.\r\n */\r\nfunction clientCode() {\r\n    const s1 = Singleton.getInstance();\r\n    const s2 = Singleton.getInstance();\r\n\r\n    if (s1 === s2) {\r\n        console.log('Singleton works, both variables contain the same instance.');\r\n    } else {\r\n        console.log('Singleton failed, variables contain different instances.');\r\n    }\r\n}\r\n\r\nclientCode();\n"})}),"\n",(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("form",{action:"https://refactoring.guru/design-patterns/book",method:"get",target:"_blank",children:(0,s.jsx)("button",{type:"submit",class:"btn btn-danger active",children:"Learn more about Singleton \u2192"})}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.admonition,{title:"Applicability",type:"info",children:(0,s.jsx)(n.p,{children:"Use the Singleton pattern when you need stricter control over global variables. For example, a single instance available to all clients like a single database object shared by different parts of the program."})}),"\n",(0,s.jsx)(n.admonition,{title:"Note that",type:"tip",children:(0,s.jsx)(n.p,{children:"You can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the getInstance method."})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);