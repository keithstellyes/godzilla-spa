!function(e){function t(t){for(var r,o,l=t[0],i=t[1],c=t[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,l=1;l<s.length;l++){var i=s[l];0!==n[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={4:0},a=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,r){s=n[e]=[t,r]}));t.push(s[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+"templates/"+({0:"Users/keithstellyes/projects/godzilla-spa/src/pages/404",1:"Users/keithstellyes/projects/godzilla-spa/src/pages/about",2:"Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies",3:"Users/keithstellyes/projects/godzilla-spa/src/pages/index"}[e]||e)+"."+{0:"ea14028e",1:"f3ac62df",2:"ac6a3a44",3:"f7f4c4dc"}[e]+".js"}(e);var i=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var s=n[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,s[1](i)}n[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://keithstellyes.github.io/godzilla-spa/",o.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;a.push([54,5,6]),s()}({115:function(e,t,s){var r={".":13,"./":13,"./index":13,"./index.js":13};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=115},124:function(e,t,s){"use strict";s.r(t),function(e){var r=s(0),n=s.n(r),a=s(23),o=s.n(a),l=s(48),i=s(19);if(t.default=i.a,"undefined"!=typeof document){var c=document.getElementById("root"),u=c.hasChildNodes()?o.a.hydrate:o.a.render,p=function(e){u(n.a.createElement(l.AppContainer,null,n.a.createElement(e,null)),c)};p(i.a),e&&e.hot&&e.hot.accept("./App",(function(){p(i.a)}))}}.call(this,s(125)(e))},19:function(e,t,s){"use strict";var r=s(0),n=s.n(r),a=s(14),o=s(18),l=function(){return n.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")};s(49),s(129);Object(a.addPrefetchExcludes)(["dynamic"]);t.a=function(){return n.a.createElement(a.Root,null,n.a.createElement("nav",null,n.a.createElement(o.Link,{to:"/"},"Home"),n.a.createElement(o.Link,{to:"about"},"About"),n.a.createElement(o.Link,{to:"all-movies"},"Movies")),n.a.createElement("div",{className:"content"},n.a.createElement(n.a.Suspense,{fallback:n.a.createElement("em",null,"Loading...")},n.a.createElement(o.Router,null,n.a.createElement(l,{path:"dynamic"}),n.a.createElement(a.Routes,{path:"*"})))))}},24:function(e,t,s){"use strict";s.r(t);var r=s(46),n=[{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-reach-router",plugins:[],hooks:s.n(r)()({})},{location:"/Users/keithstellyes/projects/godzilla-spa/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"/Users/keithstellyes/projects/godzilla-spa",plugins:[],hooks:{}}];t.default=n},44:function(e,t,s){"use strict";s.r(t),function(e){s.d(t,"notFoundTemplate",(function(){return m}));var r=s(6),n=s.n(r),a=s(7),o=s.n(a),l=s(0),i=s.n(l),c=s(4),u=s.n(c);Object(c.setHasBabelPlugin)();var p={loading:function(){return null},error:function(e){return console.error(e.error),i.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=u()(o()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js",load:function(){return Promise.all([s.e(0).then(s.bind(null,50))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js")},resolve:function(){return 50},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/404"}}),p);d.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js";var f=u()(o()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js",load:function(){return Promise.all([s.e(1).then(s.bind(null,51))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js")},resolve:function(){return 51},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/about"}}),p);f.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js";var g=u()(o()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js",load:function(){return Promise.all([s.e(2).then(s.bind(null,53))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js")},resolve:function(){return 53},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies"}}),p);g.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js";var h=u()(o()({id:"/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js",load:function(){return Promise.all([s.e(3).then(s.bind(null,52))]).then((function(e){return e[0]}))},path:function(){return n.a.join(e,"/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js")},resolve:function(){return 52},chunkName:function(){return"Users/keithstellyes/projects/godzilla-spa/src/pages/index"}}),p);h.template="/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js",t.default={"/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js":d,"/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js":f,"/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js":g,"/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js":h};var m="/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js"}.call(this,"/")},49:function(e){e.exports=JSON.parse('{"movies":[{"name":"Godzilla","year":1954,"id":0,"monsters":["Godzilla"]},{"name":"Godzilla Raids Again","year":1955,"id":1,"monsters":["Godzilla"]},{"name":"Rodan","year":1956,"id":2,"monsters":["Rodan","Meganulon"]},{"name":"Varan","year":1958,"id":3,"monsters":["Varan"]}]}')},54:function(e,t,s){s(55),s(113),e.exports=s(121)}});