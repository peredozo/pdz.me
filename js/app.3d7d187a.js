(function(t){function e(e){for(var o,i,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("main",[o("div",{staticClass:"logobox",on:{click:function(e){return e.preventDefault(),t.playAudio(e)}}},[o("img",{directives:[{name:"svg-inline",rawName:"v-svg-inline"}],staticClass:"logo",attrs:{src:n("7598")}})]),o("div",{staticClass:"contactbox"},[o("a",{attrs:{href:"https://vk.com/peredozo",target:"_blank"}},[o("fa-i",{attrs:{icon:["fab","vk"]}})],1),o("a",{attrs:{href:"https://instagram.com/peredozo",target:"_blank"}},[o("fa-i",{attrs:{icon:["fab","instagram"]}})],1),o("a",{attrs:{href:"https://telegram.me/peredozo",target:"_blank"}},[o("fa-i",{attrs:{icon:["fab","telegram-plane"]}})],1),o("a",{attrs:{href:"https://api.whatsapp.com/send?phone=79096999966",target:"_blank"}},[o("fa-i",{attrs:{icon:["fab","whatsapp"]}})],1)])]),o("div",{staticClass:"about"},[t._v(" Так же как люди выращивают куриц, чтобы пропитать себя, инопланетяне засеяли когда-то эту планету людьми, чтобы потом прилететь и собрать урожай. Но фарш для инопланетных котлет начал эволюционировать, и развился до такой степени, что среди всего этого отребья появился чудесный источник ума, храбрости, доблести, чести, света и доброты - Я. Он же PDZ, PEREDOZO, Алеша Душевнобольной и еще пара тысяч разнообразных личностей. А это мой новый всемирно известный ласковый и нежный сайт, которого пока не существует, потому что у всех вас не хватает совести решать мои материальные проблемы. ")])])},r=[],i=(n("d3b7"),"/snd/pdz.me-Pupunanny_10a.ogg"),c={components:{},data:function(){return{audio:null}},methods:{playAudio:function(){var t=this;if(this.audio)if(this.audio.a)this.audio.a.stop(),this.audio.a=null;else{this.audio.c||(this.audio.c=new window.AudioContext);var e=this.audio.c.createBufferSource();e.connect(this.audio.c.destination),this.audio.b?(e.buffer=this.audio.b,e.loop=!0,e.start(0),this.audio.on=!0,this.audio.a=e):this.audio.c.decodeAudioData(this.audio.r,(function(n){t.audio.b=n,e.buffer=t.audio.b,e.loop=!0,e.start(0),t.audio.on=!0,t.audio.a=e}),(function(t){console.error(t)}))}},loadAudio:function(){var t=this;fetch(i,{cache:"force-cache"}).then((function(t){return t.arrayBuffer()})).then((function(e){t.audio={r:e,c:null,b:null,a:null}})).catch((function(t){console.error(t)}))},licount:function(){var t="t999ru",e="15.1",n="//counter.yadro.ru/hit"+(t?";"+t:"")+"?t"+e+";r"+encodeURIComponent(document.referrer)+("undefined"==typeof screen?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+encodeURIComponent(document.URL)+";"+Math.random();(new Image).src=n}},created:function(){this.loadAudio(),this.licount()}},u=c,s=(n("034f"),n("2877")),d=Object(s["a"])(u,a,r,!1,null,null,null),l=d.exports,f=n("ecee"),p=n("ad3d"),h=n("f2d1"),b=n("c074"),v=n("9583");o["a"].config.productionTip=!1,f["c"].add(h["d"]),f["c"].add(h["a"]),f["c"].add(h["b"]),f["c"].add(h["c"]),f["c"].add(b["a"]),o["a"].component("fa-i",p["a"]),o["a"].use(v["a"]),new o["a"]({render:function(t){return t(l)}}).$mount("#app")},7598:function(t,e,n){t.exports=n.p+"img/pdz_rotor.orig.290e2378.svg"},"85ec":function(t,e,n){}});