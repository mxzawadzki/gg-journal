(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13e13f76"],{"2bfd":function(t,e,r){"use strict";r.r(e);r("b0c0");var n=r("7a23"),o={class:"bestiary"},i={class:"bestiary__buttons"},a=["onClick","disabled"],c={class:"monster__name"},u={class:"monster__alignment"},s=Object(n["g"])(" Alignment: "),l={class:"monster__ac"},h=Object(n["g"])(" AC: "),f={class:"monster__hp"},p=Object(n["g"])(" Hit Points: ");function y(t,e,r,y,v,m){return Object(n["r"])(),Object(n["e"])("div",o,[Object(n["f"])("div",i,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(t.monsterList,(function(e,r){return Object(n["r"])(),Object(n["e"])("button",{class:"bestiary__btn",key:e,onClick:function(n){return t.getMonster(e.name,r)},disabled:e.isFetched},Object(n["y"])(e.name),9,a)})),128))]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(t.monsters,(function(t){return Object(n["r"])(),Object(n["e"])("div",{key:t.name,class:"bestiary__monster monster"},[Object(n["f"])("h2",c,Object(n["y"])(t.name),1),Object(n["f"])("p",u,[s,Object(n["f"])("span",null,Object(n["y"])(t.alignment),1)]),Object(n["f"])("p",l,[h,Object(n["f"])("span",null,Object(n["y"])(t.armor_class),1)]),Object(n["f"])("p",f,[p,Object(n["f"])("span",null,Object(n["y"])(t.hit_points),1)])])})),128))])}r("d3b7");function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}r("96cf");var d=Object(n["i"])({name:"Bestiary",setup:function(){var t=Object(n["u"])([]),e=Object(n["u"])([{name:"mimic",isFetched:!1},{name:"kobold",isFetched:!1},{name:"owlbear",isFetched:!1},{name:"will-o-wisp",isFetched:!1}]),r=function(){var r=m(regeneratorRuntime.mark((function r(n,o){var i,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://www.dnd5eapi.co/api/monsters/".concat(n,"/"));case 3:return i=r.sent,r.next=6,i.json();case 6:a=r.sent,c={name:a.name,alignment:a.alignment,armor_class:a.armor_class,hit_points:a.hit_points},t.value.push(c),e.value[o].isFetched=!0,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(t,e){return r.apply(this,arguments)}}();return{monsters:t,monsterList:e,getMonster:r}}}),g=(r("c176"),r("6b0d")),b=r.n(g);const w=b()(d,[["render",y]]);e["default"]=w},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=L(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",y="completed",v={};function m(){}function d(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(G([])));j&&j!==r&&n.call(j,i)&&(b=j);var O=g.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?y:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return d.prototype=g,u(O,"constructor",g),u(g,"constructor",d),d.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},c176:function(t,e,r){"use strict";r("ca85")},ca85:function(t,e,r){}}]);
//# sourceMappingURL=chunk-13e13f76.c06c36a0.js.map