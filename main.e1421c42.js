!function(e){function s(s){for(var r,l,o=s[0],i=s[1],c=s[2],p=0,d=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(s);d.length;)d.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(n.splice(s--,1),e=l(l.s=t[0]))}return e}var r={},a={8:0},n=[];function l(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var s=[],t=a[e];if(0!==t)if(t)s.push(t[2]);else{var r=new Promise((function(s,r){t=a[e]=[s,r]}));s.push(t[2]=r);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=function(e){return l.p+"templates/"+({1:"Users/keithstellyes/projects/godzilla-spa/src/pages/404",2:"Users/keithstellyes/projects/godzilla-spa/src/pages/about",3:"Users/keithstellyes/projects/godzilla-spa/src/pages/all-monsters.jsx",4:"Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies",5:"Users/keithstellyes/projects/godzilla-spa/src/pages/all-timelines.jsx",6:"Users/keithstellyes/projects/godzilla-spa/src/pages/index",7:"Users/keithstellyes/projects/godzilla-spa/src/pages/timeline.jsx"}[e]||e)+"."+{1:"d7c6f13a",2:"ffabbec1",3:"84c0717e",4:"1e1c40cf",5:"3dcafb9e",6:"ced821c3",7:"eea44104"}[e]+".js"}(e);var i=new Error;n=function(s){o.onerror=o.onload=null,clearTimeout(c);var t=a[e];if(0!==t){if(t){var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",i.name="ChunkLoadError",i.type=r,i.request=n,t[1](i)}a[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(s)},l.m=e,l.c=r,l.d=function(e,s,t){l.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,s){if(1&s&&(e=l(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)l.d(t,r,function(s){return e[s]}.bind(null,r));return t},l.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(s,"a",s),s},l.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},l.p="https://keithstellyes.github.io/godzilla-spa/",l.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=s,o=o.slice();for(var c=0;c<o.length;c++)s(o[c]);var u=i;n.push([64,0,9]),t()}({119:function(e,s,t){var r={".":14,"./":14,"./index":14,"./index.js":14};function a(e){var s=n(e);return t(s)}function n(e){if(!t.o(r,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=119},128:function(e,s,t){"use strict";t.r(s),function(e){var r=t(0),a=t.n(r),n=t(24),l=t.n(n),o=t(49),i=t(20);if(s.default=i.a,"undefined"!=typeof document){var c=document.getElementById("root"),u=c.hasChildNodes()?l.a.hydrate:l.a.render,p=function(e){u(a.a.createElement(o.AppContainer,null,a.a.createElement(e,null)),c)};p(i.a),e&&e.hot&&e.hot.accept("./App",(function(){p(i.a)}))}}.call(this,t(129)(e))},20:function(e,s,t){"use strict";var r=t(0),a=t.n(r),n=t(15),l=t(9),o=function(){return a.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")};t(50),t(133);Object(n.addPrefetchExcludes)(["dynamic"]);s.a=function(){return a.a.createElement(n.Root,null,a.a.createElement("nav",null,a.a.createElement(l.a,{to:"/godzilla-spa/"},"Home"),a.a.createElement(l.a,{to:"about"},"About"),a.a.createElement(l.a,{to:"all-movies"},"Movies"),a.a.createElement(l.a,{to:"all-monsters"},"Monsters"),a.a.createElement(l.a,{to:"all-timelines"},"Timelines")),a.a.createElement("div",{className:"content"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("em",null,"Loading...")},a.a.createElement(l.b,null,a.a.createElement(o,{path:"dynamic"}),a.a.createElement(n.Routes,{path:"*"})))))}},25:function(e,s,t){"use strict";t.r(s);var r=t(47),a=[{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-reach-router",plugins:[],hooks:t.n(r)()({})},{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"/Users/keithstellyes/projects/godzilla-spa",plugins:[],hooks:{}}];s.default=a},45:function(e,s,t){"use strict";t.r(s),function(e){t.d(s,"notFoundTemplate",(function(){return k}));var r=t(3),a=t.n(r),n=t(4),l=t.n(n),o=t(0),i=t.n(o),c=t(6),u=t.n(c);Object(c.setHasBabelPlugin)();var p={loading:function(){return null},error:function(e){return console.error(e.error),i.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js",load:function(){return Promise.all([t.e(1).then(t.bind(null,57))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js")},resolve:function(){return 57},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/404"}}),p);d.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js";var g=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js",load:function(){return Promise.all([t.e(2).then(t.bind(null,58))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js")},resolve:function(){return 58},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/about"}}),p);g.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js";var m=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-monsters.jsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(3)]).then(t.bind(null,63))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-monsters.jsx")},resolve:function(){return 63},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/all-monsters.jsx"}}),p);m.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/all-monsters.jsx";var h=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js",load:function(){return Promise.all([Promise.all([t.e(0),t.e(4)]).then(t.bind(null,59))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js")},resolve:function(){return 59},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies"}}),p);h.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js";var f=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-timelines.jsx",load:function(){return Promise.all([t.e(5).then(t.bind(null,60))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-timelines.jsx")},resolve:function(){return 60},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/all-timelines.jsx"}}),p);f.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/all-timelines.jsx";var j=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js",load:function(){return Promise.all([t.e(6).then(t.bind(null,61))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js")},resolve:function(){return 61},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/index"}}),p);j.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js";var y=u()(l()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/timeline.jsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(7)]).then(t.bind(null,62))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/timeline.jsx")},resolve:function(){return 62},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/timeline.jsx"}}),p);y.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/timeline.jsx",s.default={"/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js":d,"/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js":g,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-monsters.jsx":m,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js":h,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-timelines.jsx":f,"/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js":j,"/Users/keithstellyes/projects/godzilla-spa/src/pages/timeline.jsx":y};var k="/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js"}.call(this,"/")},50:function(e){e.exports=JSON.parse('{"movies":[{"name":"Godzilla","year":1954,"id":0,"monsters":["Godzilla"]},{"name":"Godzilla Raids Again","year":1955,"id":1,"monsters":["Godzilla"]},{"name":"Rodan","year":1956,"id":2,"monsters":["Rodan","Meganulon"]},{"name":"Varan","year":1958,"id":3,"monsters":["Varan"]},{"name":"Mothra","year":1961,"id":4,"monsters":["Mothra","Vampire Plant"]},{"name":"King Kong vs. Godzilla","year":1962,"id":5,"monsters":["King Kong","Godzilla","Giant Lizard","Giant Octopus"]},{"name":"Atragon","year":1962,"id":6,"monsters":["Manda"]},{"name":"Mothra vs. Godzilla","year":1964,"id":7,"monsters":["Mothra","Godzilla"]},{"name":"Ghidorah, the Three-Headed Monster","year":1964,"id":8,"monsters":["Godzilla","Rodan","Mothra","Ghidorah"]},{"name":"Frankenstein vs. Baragon","year":1965,"id":9,"monsters":["Frankenstein","Baragon","Giant Boar"]},{"name":"Invasion of Astro-Monster","year":1965,"id":10,"monsters":["Godzilla","Rodan","Ghidorah"]},{"name":"The War of the Gargantuas","year":1966,"id":11,"monsters":["Gaira","Sanda","Giant Octopus"]},{"name":"Ebirah, Horror of the Deep","year":1966,"id":12,"monsters":["Godzilla","Ebirah","Mothra","Giant Condor"]},{"name":"King Kong Escapes","year":1967,"id":13,"monsters":["King Kong","Mechani-Kong","Gorosaurus","Giant Sea Serpent"]},{"name":"Son of Godzilla","year":1967,"id":14,"monsters":["Kamacuras","Kumonga","Minilla"]}]}')},64:function(e,s,t){t(65),t(117),e.exports=t(125)},9:function(e,s,t){"use strict";var r=t(19);t.d(s,"a",(function(){return r.Link})),t.d(s,"b",(function(){return r.Router}))}});