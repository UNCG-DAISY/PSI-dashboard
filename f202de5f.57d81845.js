(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(150)),i={id:"database",title:"Add Images to Database",sidebar_label:"Add Images to Database"},c={id:"code_documentation/database",title:"Add Images to Database",description:"The overall process to add catalogs, archives and images to the database is as follows.",source:"@site/docs\\code_documentation\\database.md",permalink:"/Coastal-Image-Labeler/docs/code_documentation/database",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/code_documentation/database.md",sidebar_label:"Add Images to Database",sidebar:"docs",previous:{title:"Auth0",permalink:"/Coastal-Image-Labeler/docs/code_documentation/auth0"},next:{title:"Deployment",permalink:"/Coastal-Image-Labeler/docs/code_documentation/deployment"}},s=[],l={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The overall process to add catalogs, archives and images to the database is as follows."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Use the ",Object(o.b)("inlineCode",{parentName:"li"},"cil-dashboard")," CLI to the catalogs, archives and images to database.")),Object(o.b)("p",null,"This is done in the form of a ",Object(o.b)("inlineCode",{parentName:"p"},"json")," file that is passed to the CLI, for example we have"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="/insert.json"',title:'"/insert.json"'}),'{\n    "compressedFolder":"/home/shahnafis/compressed",\n    "catalogs":[\n        {\n            "path":"/datadrive/archives/buxtoncoastalcam",\n            "name":"Buxton Coastal Camera",\n            "taggable":true,\n            "year":2019,\n            "link":"https://en.wikipedia.org/wiki/Buxton,_North_Carolina",\n            "description":"These are images from a NOAA NOS and SECOORA WebCAT coastal camera in Buxton, NC",\n            "createAllArchives":true,\n            "createAllImages":true,\n            "questionSet":"5ee3a8d801091b0dd1d62d3a"\n        }      \n    ]\n}\n')),Object(o.b)("p",null,"This json will add the catalog ",Object(o.b)("inlineCode",{parentName:"p"},"Buxton Coastal Camera")," to the database. All the fields here are required. You can add more catalogs by adding to the array"),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Then run the command")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cil-dashboard catalog add\n")),Object(o.b)("p",null,"Which will prompt you for the path to the json file. The CLI will then start inserting into the database, logging its output."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The URI to the database must be set first, this can be done with ",Object(o.b)("inlineCode",{parentName:"p"},"cil-dashboard mongoURI set")))))}d.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,u=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);