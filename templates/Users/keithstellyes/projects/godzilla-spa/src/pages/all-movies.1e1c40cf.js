(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(135);function l(e){return void 0===e.movies?r.a.createElement("b",null,"Movies"):r.a.createElement("table",{className:"Movies"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"Movies"},r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Year released"),r.a.createElement("th",null,"Monsters"))),r.a.createElement("tbody",null,e.movies.map((function(e,t){return r.a.createElement("tr",{className:"movies"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.year),r.a.createElement("td",null,function(e){var t="";Array.isArray(e.monsters)&&(t=e.monsters.join(", "));return t}(e)))}))))}n.d(t,"a",(function(){return l}))},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(136),s=n(50);t.default=function(){return r.a.createElement(l.a,{movies:s.movies})}}}]);