(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(e,n,t){"use strict";var a=t(0),r=t.n(a);t(135);function i(e){return void 0===e.movies?r.a.createElement("b",null,"Movies"):r.a.createElement("table",{className:"Movies"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"Movies"},r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Year released"),r.a.createElement("th",null,"Monsters"))),r.a.createElement("tbody",null,e.movies.map((function(e,n){return r.a.createElement("tr",{className:"movies"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.year),r.a.createElement("td",null,function(e){var n="";Array.isArray(e.monsters)&&(n=e.monsters.join(", "));return n}(e)))}))))}t.d(n,"a",(function(){return i}))},137:function(e){e.exports=JSON.parse('[{"name":"Showa","description":"The first of the major timelines consisting of the original run of movies. Many of these are in the Criterion Collection","movies":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"id":0}]')},62:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=(t(15),t(50)),o=t(137),l=t(136);n.default=function(e){var n="";"undefined"!=typeof window&&(n=window.location.search);for(var t=new URLSearchParams(n).get("id"),a=null,s=0;s<o.length;s++)if(o[s].id==t){a=o[s];break}if(null==a)return r.a.createElement("strong",null,"Could not find timeline ID: ",t);for(var m=[],c=0;c<a.movies.length;c++)for(var u=0;u<i.movies.length;u++)if(console.log(a.movies[c].id,i.movies[u].id),a.movies[c]==i.movies[u].id){m.push(i.movies[u]);break}return r.a.createElement(l.a,{movies:m})}}}]);