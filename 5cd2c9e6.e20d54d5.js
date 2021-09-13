(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,m=b["".concat(r,".").concat(h)]||b[h]||d[h]||i;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mern_create-movie-4602a108f16de6f138396d8074d48435.gif"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mern_namespace-680603c9282c50dd2ede8c07d19f9e41.png"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mern_list-movies-1e35abcf065e586c788e56257b827b51.gif"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(142)),r=["components"],l={title:"Create realistic test data for your web app",author:"Christos Hadjiaslanis",author_title:"Founder",author_url:"https://github.com/getsynth",author_image_url:"https://avatars.githubusercontent.com/u/14791384?s=460&v=4",tags:["mern","test data","data generation","tutorial","beginners guide"],description:"In this post we're going to explore how we can solve the problem of test data generation using our open-source project, Synth! Synth is a state-of-the-art declarative data generator - you tell Synth what you want your data to look like and Synth will generate that data for you.",image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},s={permalink:"/synth/blog/2021/03/08/mern",source:"@site/blog/2021-03-08-mern.md",description:"In this post we're going to explore how we can solve the problem of test data generation using our open-source project, Synth! Synth is a state-of-the-art declarative data generator - you tell Synth what you want your data to look like and Synth will generate that data for you.",date:"2021-03-08T00:00:00.000Z",tags:[{label:"mern",permalink:"/synth/blog/tags/mern"},{label:"test data",permalink:"/synth/blog/tags/test-data"},{label:"data generation",permalink:"/synth/blog/tags/data-generation"},{label:"tutorial",permalink:"/synth/blog/tags/tutorial"},{label:"beginners guide",permalink:"/synth/blog/tags/beginners-guide"}],title:"Create realistic test data for your web app",readingTime:11.315,truncated:!1,prevItem:{title:"How to Create PostgreSQL Test Data",permalink:"/synth/blog/2021/03/09/postgres-data-gen"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Starting the Web App",id:"starting-the-web-app",children:[]},{value:"Let&#39;s add some movies by hand",id:"lets-add-some-movies-by-hand",children:[]},{value:"Synth",id:"synth",children:[]},{value:"Installing Synth",id:"installing-synth",children:[]},{value:"Declarative Data Generation",id:"declarative-data-generation",children:[]},{value:"Creating a Workspace",id:"creating-a-workspace",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Feeding Data into Synth",id:"feeding-data-into-synth",children:[]},{value:"Tweaking the Synth schema",id:"tweaking-the-synth-schema",children:[{value:"Rating",id:"rating",children:[]},{value:"Time",id:"time",children:[]},{value:"Name",id:"name",children:[]},{value:"Final Schema",id:"final-schema",children:[]}]},{value:"Generating data from Synth into MongoDB",id:"generating-data-from-synth-into-mongodb",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:c};function b(e){var t=e.components,l=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"So we've all been in this situation. You're building a Web App, you're super productive in your stack and you can go quickly - however generating lot's of data to see what your app will look like with enough users and traffic is a pain. "),Object(i.b)("p",null,"Either you're going to spend a lot of time manually inputting data or you're going to write some scripts to generate that data for you. There ",Object(i.b)("em",{parentName:"p"},"must")," be a better way."),Object(i.b)("p",null,"In this post we're going to explore how we can solve this problem using the open-source project ",Object(i.b)("a",{parentName:"p",href:"https://github.com/getsynth/synth"},"Synth"),". Synth is a state-of-the-art declarative data generator - you tell Synth what you want your data to look like and Synth will generate that data for you."),Object(i.b)("p",null,"This tutorial is going to use a simple MERN (",Object(i.b)("strong",{parentName:"p"},"M"),"ongo ",Object(i.b)("strong",{parentName:"p"},"E"),"xpress ",Object(i.b)("strong",{parentName:"p"},"R"),"eact ",Object(i.b)("strong",{parentName:"p"},"N"),"ode) web-app as our test subject, but really Synth is not married to any specific stack."),Object(i.b)("p",null,"I'm going to assuming you're working on MacOS or Linux (Windows support coming soon \ud83e\udd1e) and you have ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),", ",Object(i.b)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," and ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed."),Object(i.b)("p",null,"For this example we'll be running Synth version ",Object(i.b)("inlineCode",{parentName:"p"},"0.3.2")," ."),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,"As a template, we'll use a repository which will give us scaffolding for the MERN app. I picked this example because it shows how to get started quickly with a MERN stack, where the end product is a usable app you can write in 10 minutes. For our purposes, we don't really need to build it from scratch, so let's just clone the repo and avoid writing any code ourselves."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/samaronybarros/movies-app.git && cd movies-app\n")),Object(i.b)("p",null,"Next, we'll be using docker to run an ephemeral version of our database locally. Docker is great for getting started quickly with popular software, and luckily for us MongoDB has an image on the docker registry. So - let's setup an instance of MongoDB to run locally (no username / password):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name mongo-on-docker -p 27017:27017 mongo\n")),Object(i.b)("h2",{id:"starting-the-web-app"},"Starting the Web App"),Object(i.b)("p",null,"The repository we just cloned contains a working end-to-end web-app running on a MERN stack. It's a super simple CRUD application enabling the user to add / remove some movie reviews which are persisted on a MongoDB database."),Object(i.b)("p",null,"The app consists of 2 main components, a ",Object(i.b)("inlineCode",{parentName:"p"},"nodejs")," server which lives under the ",Object(i.b)("inlineCode",{parentName:"p"},"movies-app/server/")," sub-directory, and a ",Object(i.b)("inlineCode",{parentName:"p"},"React")," front-end which lives under the ",Object(i.b)("inlineCode",{parentName:"p"},"movies-app/client")," sub-directory. "),Object(i.b)("p",null,"The client and server talk to each other using a standard HTTP API under ",Object(i.b)("inlineCode",{parentName:"p"},"/movie"),"."),Object(i.b)("p",null,"So let's get started and run the back-end:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd server && yarn install && node index.js\n")),Object(i.b)("p",null,"And then the client (you'll need two terminals here \ud83e\udd37):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd client && yarn install && yarn start\n")),Object(i.b)("p",null,"Cool! If you navigate to ",Object(i.b)("a",{parentName:"p",href:"http://localhost:8000/"},Object(i.b)("inlineCode",{parentName:"a"},"http://localhost:8000/"))," you should see the React App running \ud83d\ude42"),Object(i.b)("h2",{id:"lets-add-some-movies-by-hand"},"Let's add some movies by hand"),Object(i.b)("p",null,"Hold the phone. Why are we adding movies by hand since we have a tool to generate data for us?"),Object(i.b)("p",null,"Well, by adding a little bit of test data by hand, we can then use Synth to infer the structure of the data and create as many movies as we want for us. Otherwise we would have to write the entire data definition (what we call a ",Object(i.b)("a",{parentName:"p",href:"/getting_started/schema"},"schema"),") by hand."),Object(i.b)("p",null,"So, let's add a couple of movies manually using the Web UI."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Create Movies",src:n(178).default})),Object(i.b)("p",null,"Ok, so now that we have a couple of movies, let's get started with Synth!"),Object(i.b)("h2",{id:"synth"},"Synth"),Object(i.b)("p",null,"In the following section we will cover how Synth fits into the Web App development workflow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First we'll install the Synth binary"),Object(i.b)("li",{parentName:"ol"},"Then we'll initialize a Synth workspace in our repo to host our data model"),Object(i.b)("li",{parentName:"ol"},"Next will ingest data from MongoDB into Synth"),Object(i.b)("li",{parentName:"ol"},"And finally generate a bunch of fake data from Synth and back into Mongo")),Object(i.b)("h2",{id:"installing-synth"},"Installing Synth"),Object(i.b)("p",null,"To install Synth on MacOS / Linux, visit the ",Object(i.b)("a",{parentName:"p",href:"/"},"docs")," and choose the appropriate installation for your OS. If you are feeling adventurous, you can even build from source!"),Object(i.b)("h2",{id:"declarative-data-generation"},"Declarative Data Generation"),Object(i.b)("p",null,"Synth uses a declarative data model to specify how data is generated."),Object(i.b)("p",null,"Hmmm, so what is a declarative model you may ask? A ",Object(i.b)("strong",{parentName:"p"},"declarative model"),", as opposed to an imperative model, is where you 'declare' your desired end state and the underlying program will figure out how to get there. "),Object(i.b)("p",null,"On the other had, an imperative model (which is what we are mostly used to), is step by step instructions on how to get to our end-state. Most popular programming languages like Java or C are ",Object(i.b)("em",{parentName:"p"},"imperative")," - your code is step-by-step instructions on how to reach an end state."),Object(i.b)("p",null,"Programming frameworks like SQL or React or Terraform are declarative. You don't specify how to get to your end-state, you just specify what you want and the underlying program will figure out how to get there."),Object(i.b)("p",null,"With Synth you specify what your desired dataset should look like, not how to make it. Synth figures how to build it for you \ud83d\ude09"),Object(i.b)("h2",{id:"creating-a-workspace"},"Creating a Workspace"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"workspace")," represents a set of synthetic data namespaces managed by Synth. Workspaces are marked by ",Object(i.b)("inlineCode",{parentName:"p"},".synth/")," sub-directory."),Object(i.b)("p",null,"A workspace can have ",Object(i.b)("em",{parentName:"p"},"zero or more namespaces"),", where the namespaces are just represented as sub-directories. All information pertaining to a workspace is in its directory."),Object(i.b)("p",null,"So let's create sub-directory called ",Object(i.b)("inlineCode",{parentName:"p"},"data/")," and initialize our Synth workspace."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"movies-app $ mkdir data && cd data && synth init\n")),Object(i.b)("h2",{id:"namespaces"},"Namespaces"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"namespace")," is the top-level abstraction in Synth. Namespaces are the equivalent of Schemas in SQL-land. Fields in a namespace can refer to other fields in a namespace - but you cannot reference data across namespaces."),Object(i.b)("p",null,"Namespaces in turn, have ",Object(i.b)("strong",{parentName:"p"},"collections")," which are kind of like tables in SQL-land. A visual example of the namespace/collection hierarchy can be seen below."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Alt Text",src:n(179).default})),Object(i.b)("p",null,"To create a namespace, we need to feed some data into Synth."),Object(i.b)("h2",{id:"feeding-data-into-synth"},"Feeding Data into Synth"),Object(i.b)("p",null,"There are two steps to feed data into Synth from our MongoDB instance:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"We need to export data from MongoDB into a format that Synth can ingest. Luckily for us, Synth supports JSON out of the box so this can be done quite easily with the ",Object(i.b)("inlineCode",{parentName:"li"},"mongoexport")," command - a light weight tool that ships with MongoDB to enable quick dumps of the database via the CLI. We need to specify a little bit more metadata, such as the database we want to export from using ",Object(i.b)("inlineCode",{parentName:"li"},"--db cinema")," , the collection using ",Object(i.b)("inlineCode",{parentName:"li"},"--collection")," and the specific fields we are interested in ",Object(i.b)("inlineCode",{parentName:"li"},"--fields name,rating,time"),". We want the data from ",Object(i.b)("inlineCode",{parentName:"li"},"mongoexport")," to be in a JSON array so that Synth can easily parse it, so let's specify the ",Object(i.b)("inlineCode",{parentName:"li"},"--jsonArray")," flag."),Object(i.b)("li",{parentName:"ol"},"Next, we need to create a new Synth namespace using the ",Object(i.b)("inlineCode",{parentName:"li"},"synth import")," command. ",Object(i.b)("inlineCode",{parentName:"li"},"synth import")," supports a ",Object(i.b)("inlineCode",{parentName:"li"},"--from")," flag if you want to import from a file, but if this is not specified it will default to reading from ",Object(i.b)("inlineCode",{parentName:"li"},"stdin"),". We need to feed the output of the ",Object(i.b)("inlineCode",{parentName:"li"},"mongoexport")," command into Synth. To do this we can use the convenient Bash pipe ",Object(i.b)("inlineCode",{parentName:"li"},"|")," to redirect the ",Object(i.b)("inlineCode",{parentName:"li"},"stdout")," from ",Object(i.b)("inlineCode",{parentName:"li"},"mongoexport")," into Synth's ",Object(i.b)("inlineCode",{parentName:"li"},"stdin"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker exec -i mongo-on-docker mongoexport \\\n    --db cinema \\\n    --collection movies \\\n    --fields name,rating,time \\\n    --forceTableScan \\\n    --jsonArray | synth import cinema --collection movies\n")),Object(i.b)("p",null,"Synth runs an inference step on the JSON data that it's fed, trying to infer the structure of the data. Next Synth automatically creates the ",Object(i.b)("inlineCode",{parentName:"p"},"cinema")," namespace by creating the ",Object(i.b)("inlineCode",{parentName:"p"},"cinema/")," sub-directory and populates it with the collection ",Object(i.b)("inlineCode",{parentName:"p"},"movies.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ tree -a data/\ndata/\n\u251c\u2500\u2500 .synth\n\u2502   \u2514\u2500\u2500 config.toml\n\u2514\u2500\u2500 cinema\n    \u2514\u2500\u2500 movies.json\n")),Object(i.b)("p",null,"We can now use this namespace to generate some data:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ synth generate cinema/\n{\n  "movies": [\n    {\n      "_id": {\n        "$oid": "2D4p4WBXpVTMrhRj"\n      },\n      "name": "2pvj5fas0dB",\n      "rating": 7.5,\n      "time": [\n        "TrplCeFShATp2II422rVdYQB3zVx"\n      ]\n    },\n    {\n      "_id": {\n        "$oid": "mV57kUhvdsWUwiRj"\n      },\n      "name": "Ii7rH2TSjuUiyt",\n      "rating": 2.5,\n      "time": [\n        "QRVSMW"\n      ]\n    }\n  ]\n}\n')),Object(i.b)("p",null,"So now we've generated data with the same schema as the original - but the value of the data points doesn't really line up with the semantic meaning  of our dataset. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"time")," array is just garbled text, not actual times of the day."),Object(i.b)("p",null,"The last steps is to tweak the Synth schema and create some realistic looking data!"),Object(i.b)("h2",{id:"tweaking-the-synth-schema"},"Tweaking the Synth schema"),Object(i.b)("p",null,"So let's open ",Object(i.b)("inlineCode",{parentName:"p"},"cinema/movies.json")," in our favorite text editor and take a look at the schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "low": 1,\n      "high": 4,\n      "step": 1\n    }\n  },\n  "content": {\n    "type": "object",\n    "time": {\n      "type": "array",\n      "length": {\n        "type": "number",\n        "subtype": "u64",\n        "range": {\n          "low": 1,\n          "high": 2,\n          "step": 1\n        }\n      },\n      "content": {\n        "type": "one_of",\n        "variants": [\n          {\n            "weight": 1.0,\n            "type": "string",\n            "pattern": "[a-zA-Z0-9]*"\n          }\n        ]\n      }\n    },\n    "name": {\n      "type": "string",\n      "pattern": "[a-zA-Z0-9]*"\n    },\n    "_id": {\n      "type": "object",\n      "$oid": {\n        "type": "string",\n        "pattern": "[a-zA-Z0-9]*"\n      }\n    },\n    "rating": {\n      "type": "number",\n      "subtype": "f64",\n      "range": {\n        "low": 7.0,\n        "high": 10.0,\n        "step": 1.0\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"There is a lot going on here but let's break it down. "),Object(i.b)("p",null,"The top-level object (which represents our ",Object(i.b)("inlineCode",{parentName:"p"},"movies")," collection) is of type ",Object(i.b)("inlineCode",{parentName:"p"},"array")," - where the ",Object(i.b)("inlineCode",{parentName:"p"},"content")," of the array is an object with 4 fields, ",Object(i.b)("inlineCode",{parentName:"p"},"_id"),", ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"time"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"rating"),". "),Object(i.b)("p",null,"We can completely remove the field ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," since this is automatically managed by MongoDB and get started in making our data look real. You may want to have the ",Object(i.b)("a",{parentName:"p",href:"/content/null"},"Generators Reference")," open here for reference."),Object(i.b)("h3",{id:"rating"},"Rating"),Object(i.b)("p",null,"First let's change the ",Object(i.b)("inlineCode",{parentName:"p"},"rating")," field. Our app can only accept numbers between 0 and 10 inclusive in increments of 0.5. So we'll use the ",Object(i.b)("inlineCode",{parentName:"p"},"Number::Range")," content type to represent this and replace the existing value:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "range": {\n        "high": 10,\n        "low": 0, \n        "step": 0.5\n    },\n    "subtype": "f64",\n    "type": "number"\n}\n')),Object(i.b)("h3",{id:"time"},"Time"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"time")," field has been correctly detected as an array of values. First of all, let's say a movie can be shown up to 5 times a day, so we'll change the ",Object(i.b)("inlineCode",{parentName:"p"},"high")," field at ",Object(i.b)("inlineCode",{parentName:"p"},"time.length.range")," to 6 (",Object(i.b)("inlineCode",{parentName:"p"},"high")," is exclusive). At this stage, the values are just random strings, so let's instead use the ",Object(i.b)("inlineCode",{parentName:"p"},"String::DateTime")," content type to generate hours of the day."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "range": {\n            "low": 1,\n            "high": 5,\n            "step": 1\n        }\n    },\n    "content": {\n        "type": "one_of",\n        "variants": [\n            {\n                "weight": 1.0,\n                "type": "string",\n                "date_time": {\n                    "subtype": "naive_time",\n                    "format": "%H:%M",\n                    "begin": "12:00",\n                    "end": "23:59"\n                }\n            }\n        ]\n    }\n}\n')),Object(i.b)("h3",{id:"name"},"Name"),Object(i.b)("p",null,"Finally, the movie name field should be populated with realistic looking movie names."),Object(i.b)("p",null,"Under the hood, Synth uses the Python Faker library to generate so called 'semantic types' (think credit card numbers, addresses, license plates etc.). Unfortunately Faker does no have movie names, so instead we can use a random text generator instead with a capped output size."),Object(i.b)("p",null,"So let's use the ",Object(i.b)("inlineCode",{parentName:"p"},"String::Faker")," content type to generate some fake movie names!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "string",\n    "faker": {\n        "generator": "text",\n        "max_nb_chars": 20\n    }\n}\n')),Object(i.b)("h3",{id:"final-schema"},"Final Schema"),Object(i.b)("p",null,"So, making all the changes above, we can use our beautiful finished schema to generate data for our app:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "range": {\n            "low": 1,\n            "high": 2,\n            "step": 1\n        }\n    },\n    "content": {\n        "type": "object",\n        "name": {\n            "type": "string",\n            "faker": {\n                "generator": "text",\n                "max_nb_chars": 20\n            }\n        },\n        "time": {\n            "optional": false,\n            "type": "array",\n            "length": {\n                "type": "number",\n                "subtype": "u64",\n                "range": {\n                    "low": 1,\n                    "high": 5,\n                    "step": 1\n                }\n            },\n            "content": {\n                "type": "one_of",\n                "variants": [\n                    {\n                        "weight": 1.0,\n                        "type": "string",\n                        "date_time": {\n                            "subtype": "naive_time",\n                            "format": "%H:%M",\n                            "begin": "00:00",\n                            "end": "23:59"\n                        }\n                    }\n                ]\n            }\n        },\n        "rating" : {\n            "range": {\n                "high": 10,\n                "low": 0,\n                "step": 0.5\n            },\n            "subtype": "f64",\n            "type": "number"\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'$ synth generate cinema/ --size 5\n{\n  "movies": [\n    {\n      "name": "Tonight somebody.",\n      "rating": 7,\n      "time": [\n        "15:17"\n      ]\n    },\n    {\n      "name": "Wrong investment.",\n      "rating": 7.5,\n      "time": [\n        "22:56"\n      ]\n    },\n    {\n      "name": "Put public believe.",\n      "rating": 5.5,\n      "time": [\n        "20:32",\n        "21:06",\n        "16:15"\n      ]\n    },\n    {\n      "name": "Animal firm public.",\n      "rating": 8.5,\n      "time": [\n        "20:06",\n        "20:25"\n      ]\n    },\n    {\n      "name": "Change member reach.",\n      "rating": 8.0,\n      "time": [\n        "12:36",\n        "14:34"\n      ]\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Ah, much better!"),Object(i.b)("h2",{id:"generating-data-from-synth-into-mongodb"},"Generating data from Synth into MongoDB"),Object(i.b)("p",null,"So now that we can generate as much correct data as we want, let's point Synth at MongoDB and let loose the dogs of war."),Object(i.b)("p",null,"This step can be broken into two parts:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"synth generate")," command with our desired collection ",Object(i.b)("inlineCode",{parentName:"li"},"movies")," and specifying the number of records we want using the ",Object(i.b)("inlineCode",{parentName:"li"},"--size")," field."),Object(i.b)("li",{parentName:"ol"},"Pipe ",Object(i.b)("inlineCode",{parentName:"li"},"stdout")," to the ",Object(i.b)("inlineCode",{parentName:"li"},"mongoimport")," command, ",Object(i.b)("inlineCode",{parentName:"li"},"mongoexport"),"'s long lost cousin. Again here we specify the database we want to import to, ",Object(i.b)("inlineCode",{parentName:"li"},"--db cinema")," and the specific collection ",Object(i.b)("inlineCode",{parentName:"li"},"movies"),". We also want the ",Object(i.b)("inlineCode",{parentName:"li"},"--jsonArray")," flag to notify ",Object(i.b)("inlineCode",{parentName:"li"},"mongoimport")," that it should expect a JSON array.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"synth generate cinema/ \\\n    --collection movies \\\n    --size 1000 \\\n    | docker exec -i mongo-on-docker mongoimport \\\n    --db cinema \\\n    --collection movies \\\n    --jsonArray\n")),Object(i.b)("p",null,"And voila! Our app now has hundreds of valid movies in our database!"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Alt Text",src:n(180).default})),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"This post was a summary of how you can use Synth to generate realistic looking test data for your Web App. In the next part of this tutorial, we'll explore how we can use Synth to generate relational data, i.e. where you have references between collections in your database."),Object(i.b)("p",null,"To check out the Synth source code you can visit the Synth repo on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/getsynth/synth/"},"Github"),", and to join the conversation hop-on the the ",Object(i.b)("a",{parentName:"p",href:"https://discord.com/invite/wwJVAFKKkq"},"Synth discord server"),"."))}b.isMDXComponent=!0}}]);