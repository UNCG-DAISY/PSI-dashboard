(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(9),o=(a(0),a(193)),i={id:"indexDoc",title:"Coastal Image Labeler",sidebar_label:"Introduction"},s={id:"indexDoc",title:"Coastal Image Labeler",description:"Project Overview",source:"@site/docs/index.md",permalink:"/Coastal-Image-Labeler/docs/indexDoc",editUrl:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/edit/master/docs/docs/index.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Contributor Covenant Code of Conduct",permalink:"/Coastal-Image-Labeler/docs/code_of_conduct"}},l=[{value:"Project Overview",id:"project-overview",children:[]},{value:"Project Goals",id:"project-goals",children:[]},{value:"Some FAQs:",id:"some-faqs",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"project-overview"},"Project Overview"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://uncg-daisy.github.io/Coastal-Image-Labeler/"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/Documentation-Click%20Me-brightgreen",alt:"Documentation"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/commits/master"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/last-commit/UNCG-DAISY/Coastal-Image-Labeler",alt:"Last Commit"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://zenodo.org/badge/latestdoi/226252747"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://zenodo.org/badge/226252747.svg",alt:"DOI"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/actions"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/workflows/Unit%20Tests/badge.svg",alt:"Actions Status1"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/actions"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://github.com/UNCG-DAISY/Coastal-Image-Labeler/workflows/Deploy%20Docusaurus/badge.svg",alt:"Actions Status2"})))),Object(o.b)("p",null,"Generally, the Coastal Image Labeler presents users with\ncoastal images to be labeled using a given set of questions. We designed the labeler to be hosted on a virtual machine and exposed via a web address. Labels provided by the user are written to a database and exported later by a user or admin."),Object(o.b)("p",null,"There are two general roles in this project: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An Admin \u2014 who uploads images to be labeled, developing questions for the labeler to ask, assigning sets of images to users, managing the VM that hosts the project, and exporting data from the database. "),Object(o.b)("li",{parentName:"ul"},"A Labeler  \u2014 who navigates to the website, logs on to the server, labels images, and can download their individual labels.")),Object(o.b)("p",null,"The Coastal Image Labeler Documentation is focused on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Describing the goals of the project and our ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/Coastal-Image-Labeler/docs/code_of_conduct"}),"Code of Conduct"),"."),Object(o.b)("li",{parentName:"ul"},"Documenting the underlying source code for the labeling tool. This is intended to be most useful for an Admin \u2014 see the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"code_documentation/overview.md"}),"Code Documentation")," section."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://coastalimagelabeler.science/"}),"deployed labeler")," \u2014 and not this doc site \u2014 provides instructions for researchers interested in labeling images.")),Object(o.b)("h2",{id:"project-goals"},"Project Goals"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Coastal Image Labeler is designed to collaboratively label\ncoastal images and then provide these labeled images as open data (FAIR) for\ngeneral community use.")),Object(o.b)("h2",{id:"some-faqs"},"Some FAQs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Why labeling images?")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Labeled images are important for supervised machine learning research. There are many well known labeled image databases (e.g., ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.image-net.org"}),"ImageNet"),"), but these existing databases tend to focus on general features (e.g., cats, dogs, horses, etc.). Our goal with this project is to develop a discipline-specific database of labeled images that is relevant for coastal scientists. "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Why not use an existing tool for labeling?"),"  "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Many good labeling tools already exist, but our goal with this project is to\ncreate a tool for collaborative, asynchronous labeling. Additionally,\nwe wanted a tool to easily accommodate multiple users labeling a single\nimages (to ensure correct labeling via consensus)."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Isn't this similar to iCOAST from the USGS?")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Yes \u2014 it is definitely one of the inspirations for this project. The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.usgs.gov/centers/spcmsc/science/icoast-did-coast-change?qt-science_center_objects=0#qt-science_center_objects"}),"USGS iCOAST")," project is an example of a labeled coastal database for storm impacts that was labeled collaboratively. We are extending this idea in atleast 2 ways: First, the Coastal Image Labeler does currently host NOAA post-storm images (we have ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://doi.org/10.6084/m9.figshare.11604192.v1"}),"released some data already"),"), but any image can be loaded and any question set can be created (for example, we have already labeled ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://doi.org/10.6084/m9.figshare.12765494.v1"}),"wave-scarp interaction images"),", and images of beach state). Second, this project is very closely tied to machine learning \u2014 crowdsourcing labels for coastal images to advance ML applications to Coastal science. One clear example of this linkage is \u2014 for some image catalogs \u2014\xa0the images a user labels are shown to them in a specific order to help the ML algorithm learn samples that are confusing (i.e., ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Active_learning_(machine_learning)"}),"active learning"),").")))))}b.isMDXComponent=!0},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(a),d=r,u=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?n.a.createElement(u,s(s({ref:t},c),{},{components:a})):n.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);