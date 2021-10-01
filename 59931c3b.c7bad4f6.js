(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(146)),o=["components"],c={id:"command-line",title:"Command-line"},l={unversionedId:"getting_started/command-line",id:"getting_started/command-line",isDocsHomePage:!1,title:"Command-line",description:"synth is a Unix-y command line tool wrapped around the core synthetic data engine.",source:"@site/docs/getting_started/cli.md",slug:"/getting_started/command-line",permalink:"/synth/getting_started/command-line",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/getting_started/cli.md",version:"current",sidebar:"docsSidebar",previous:{title:"Schema",permalink:"/synth/getting_started/schema"},next:{title:"How it works",permalink:"/synth/getting_started/how-it-works"}},s=[{value:"Usage",id:"usage",children:[{value:"Command: import",id:"command-import",children:[]},{value:"Command: generate",id:"command-generate",children:[]}]}],p={toc:s};function m(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"synth")," is a Unix-y command line tool wrapped around the core synthetic data engine. "),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"command-import"},"Command: import"),Object(i.b)("p",null,"Usage: ",Object(i.b)("inlineCode",{parentName:"p"},"synth import [OPTIONS] <namespace>")),Object(i.b)("p",null,"Synth can create schema files from different data sources using the ",Object(i.b)("inlineCode",{parentName:"p"},"synth import")," command.\nAccidentally running ",Object(i.b)("inlineCode",{parentName:"p"},"synth import")," on an existing directory is safe - the operation will fail."),Object(i.b)("p",null,"If a subdirectory for a given namespace does not exist, Synth will create it."),Object(i.b)("h4",{id:"argument"},"Argument"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<namespace>")," - The path to the namespace directory into which to save schema files. The directory will be created by ",Object(i.b)("inlineCode",{parentName:"li"},"synth"),".")),Object(i.b)("h4",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"--from <from>")," - The location from which to import. Synth supports multiple import strategies. "),Object(i.b)("p",{parentName:"li"},"Importing from a file: Currently we support importing from JSON files by specifying the path to\nthe file: ",Object(i.b)("inlineCode",{parentName:"p"},"/some/path/to/file.json"),"."),Object(i.b)("p",{parentName:"li"},"Importing from standard input: Not specifying ",Object(i.b)("inlineCode",{parentName:"p"},"from")," will accept JSON files from stdin."),Object(i.b)("p",{parentName:"li"},"Importing from a database (e.g.\npostgres): ",Object(i.b)("inlineCode",{parentName:"p"},"synth import tpch --from postgres://user:pass@localhost:5432/tpch")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"command-generate"},"Command: generate"),Object(i.b)("p",null,"Usage: ",Object(i.b)("inlineCode",{parentName:"p"},"synth generate [OPTIONS] <namespace>")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"synth generate")," command will generate data from a collection of schema files."),Object(i.b)("p",null,"If there is a misconfiguration in your schema (for example referring to a field that does not exist), ",Object(i.b)("inlineCode",{parentName:"p"},"synth generate")," will exit with a non-zero exit code and output an error message to help you understand which part of the schema is misconfigured."),Object(i.b)("h4",{id:"argument-1"},"Argument"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<namespace>")," - The path to the namespace directory from which to load schema files.")),Object(i.b)("h4",{id:"options-1"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--collection <collection>")," - Specify a specific collection in a namespace if you don't want to generate data from all collections."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--size <size>")," - The number of elements which should be generated per collection. This number is not guaranteed, it serves as a lower bound."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--to <uri>")," - The generation destination. If unspecified, generation defaults to stdout."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--seed <seed>")," - An unsigned 64 bit integer seed to be used as a seed for generation. Defaults to 0 if unspecified."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--random")," - A flag which toggles generation with a random seed. This cannot be used with --seed.")))}m.isMDXComponent=!0}}]);