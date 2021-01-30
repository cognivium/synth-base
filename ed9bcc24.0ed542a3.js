(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(91)),i={id:"one-of",title:"one_of"},c={unversionedId:"content/one-of",id:"content/one-of",isDocsHomePage:!1,title:"one_of",description:"Content Family: OneOf",source:"@site/docs/content/one-of.md",slug:"/content/one-of",permalink:"/content/one-of",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/content/one-of.md",version:"current",sidebar:"docsSidebar",previous:{title:"array",permalink:"/content/array"},next:{title:"same_as",permalink:"/content/same-as"}},p=[{value:"Content Family: OneOf",id:"content-family-oneof",children:[]}],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content-family-oneof"},"Content Family: OneOf"),Object(a.b)("h4",{id:"content-oneof"},"Content: OneOf"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"OneOf")," is similar in principle to the ",Object(a.b)("inlineCode",{parentName:"p"},"Categorical")," but variants can be arbitrary content types."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"OneOf")," has a concept of a ",Object(a.b)("inlineCode",{parentName:"p"},"weight")," per entry - where weight represents the individual entry's contribution to the probability distribution."),Object(a.b)("p",null,"Below is an example of a field ",Object(a.b)("inlineCode",{parentName:"p"},"address")," taking the value of a ",Object(a.b)("inlineCode",{parentName:"p"},"Content::String")," address generated by faker, or a ",Object(a.b)("inlineCode",{parentName:"p"},"Content::Object"),". "),Object(a.b)("h6",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"address" : {\n    "type": "one_of",\n    "variants": [\n        {\n            "type": "string",\n            "faker": {\n                "generator": "address"\n            },\n            "weight" : 9.5\n        },\n        {\n            "weight" : 0.5,\n            "type": "object",\n            "postcode": {\n                "type": "string",\n                "faker": {\n                    "generator": "postcode"\n                }\n            },\n            "number": {\n                "type": "number",\n                "subtype": "u64",\n                "range": {\n                    "low": 1,\n                    "high": 200,\n                    "step": 2\n                }\n            }\n        }\n    ]\n}\n')),Object(a.b)("h6",{id:"example-output"},"Example Output"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n      "address": "88292 Griffin Squares\\nPort Luistown, IL 76037"\n    },\n    {\n      "address": "839 Duffy Street\\nLake Nicole, DC 70017"\n    },\n    {\n      "address": {\n        "number": 149,\n        "postcode": "58762"\n      }\n    },\n    {\n      "address": {\n        "number": 159,\n        "postcode": "44704"\n      }\n    },\n    {\n      "address": "207 Nicholas Loop Apt. 012\\nRobertview, NV 01670"\n    }\n  ]\n')))}l.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(f,c(c({ref:n},s),{},{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);