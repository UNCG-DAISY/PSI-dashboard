(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(9),a=(r(0),r(177)),c={id:"cicd",title:"CD/CD",sidebar_label:"CI/CD"},i={id:"code_doc/cicd",title:"CD/CD",description:"V3 Dashboard uses Github Actions for CI/CD. Currently there are 2 workflows.",source:"@site/docs/code_doc/cicd.md",permalink:"/Coastal-Image-Labeler/docs/code_doc/cicd",editUrl:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/edit/master/docs/code_doc/cicd.md",sidebar_label:"CI/CD",sidebar:"docs",previous:{title:"Project Structure",permalink:"/Coastal-Image-Labeler/docs/code_doc/projectStructure"},next:{title:"Setup",permalink:"/Coastal-Image-Labeler/docs/code_doc/auth0/auth0"}},l=[{value:"Docs workflow",id:"docs-workflow",children:[]},{value:"Unit Test",id:"unit-test",children:[]}],s={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"V3 Dashboard uses Github Actions for CI/CD. Currently there are 2 workflows."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Workflow to deploy docs site"),Object(a.b)("li",{parentName:"ol"},"Workflow to run unit tests")),Object(a.b)("p",null,"Both are under ",Object(a.b)("inlineCode",{parentName:"p"},".github/workflows")),Object(a.b)("h2",{id:"docs-workflow"},"Docs workflow"),Object(a.b)("p",null,"This one requires a secret key to be set up to allow github actions to deploy the doc site."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Use Git Bash and run")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Creating RSA keys"',title:'"Creating',RSA:!0,'keys"':!0}),'ssh-keygen -t rsa -b 4096 -C "put email here"\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This will, on windows, create it at ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Users\\USER\\.ssh")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DO NOT")," enter a passphrase."),Object(a.b)("li",{parentName:"ul"},"Remember to keep track of the file names created, by default they are ",Object(a.b)("inlineCode",{parentName:"li"},"id_rsa.pub")," for the public key and ",Object(a.b)("inlineCode",{parentName:"li"},"id_rsa")," for the private key, the file names are important later on.")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Go to the deploy keys section in the settings of the repo ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/settings/keys"}),"here")," and add the public key file of ",Object(a.b)("inlineCode",{parentName:"li"},"id_rsa.pub"),". For the key name put the file name without the extension and check the box for write access. Like so")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/code_documentation/secrects/deploykey.PNG",alt:"pubkey",title:"public key"}))),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Then go to the secrets tab and a new secret called ",Object(a.b)("inlineCode",{parentName:"li"},"GH_PAGES_DEPLOY")," with its value as the private key file ",Object(a.b)("inlineCode",{parentName:"li"},"id_rsa"),". Like so.")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/code_documentation/secrects/repo_secrets.PNG",alt:"repoSecrects",title:"repo secrects"}))),Object(a.b)("p",null,"If the github action workflow is set up correctly, everything should run fine."),Object(a.b)("h2",{id:"unit-test"},"Unit Test"),Object(a.b)("p",null,"This requires that the mongoURI be set up. Going ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/settings/secrets"}),"here")," and entering the mongoURI  as ",Object(a.b)("inlineCode",{parentName:"p"},"MONGO_URI"),". The value is ",Object(a.b)("inlineCode",{parentName:"p"},"mongodb://localhost:27017")," which means connect to the local mongoDB instance which the workflow sets up, however perhaps later a cloud mongodb could be used"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/code_documentation/secrects/repo_secrets.PNG",alt:"repoSecrects",title:"repo secrects"}))))}b.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);