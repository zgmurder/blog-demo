(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{418:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=s.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},419:function(t,e,n){"use strict";var r=n(3),i=n(81)(1);r(r.P+r.F*!n(28)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},420:function(t,e,n){"use strict";var r=n(3),i=n(81)(3);r(r.P+r.F*!n(28)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},421:function(t,e,n){},422:function(t,e,n){var r=n(3);r(r.S,"Array",{isArray:n(126)})},423:function(t,e,n){var r=n(3),i=n(29),a=n(12),s=n(424),o="["+s+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var i={},o=a((function(){return!!s[t]()||"​"!="​"[t]()})),u=i[t]=o?e(f):s[t];n&&(i[n]=u),r(r.P+r.F*o,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},424:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},425:function(t,e,n){},426:function(t,e,n){},427:function(t,e,n){var r=n(23),i=n(428).set;t.exports=function(t,e,n){var a,s=e.constructor;return s!==n&&"function"==typeof s&&(a=s.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},428:function(t,e,n){var r=n(23),i=n(10),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(82)(Function.call,n(121).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},429:function(t,e,n){},430:function(t,e,n){},431:function(t,e,n){},432:function(t,e,n){},433:function(t,e,n){},434:function(t,e,n){},435:function(t,e,n){},436:function(t,e,n){},437:function(t,e,n){},438:function(t,e,n){},446:function(t,e,n){"use strict";var r=n(10),i=n(51),a=n(131),s=n(122);n(123)("match",1,(function(t,e,n,o){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return s(u,c);var l=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=s(u,c));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=a(c,i(u.lastIndex),l)),p++}return 0===p?null:h}]}))},447:function(t,e,n){var r=n(83),i=n(18)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},448:function(t,e,n){"use strict";var r=n(10),i=n(32),a=n(51),s=n(54),o=n(131),u=n(122),c=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(123)("replace",2,(function(t,e,n,d){return[function(r,i){var a=t(this),s=null==r?void 0:r[e];return void 0!==s?s.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),h=String(this),p="function"==typeof e;p||(e=String(e));var v=f.global;if(v){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var _=u(f,h);if(null===_)break;if(b.push(_),!v)break;""===String(_[0])&&(f.lastIndex=o(h,a(f.lastIndex),m))}for(var k,x="",y=0,$=0;$<b.length;$++){_=b[$];for(var C=String(_[0]),L=c(l(s(_.index),h.length),0),w=[],S=1;S<_.length;S++)w.push(void 0===(k=_[S])?k:String(k));var O=_.groups;if(p){var j=[C].concat(w,L,h);void 0!==O&&j.push(O);var A=String(e.apply(void 0,j))}else A=g(C,h,L,w,O,e);L>=y&&(x+=h.slice(y,L)+A,y=L+C.length)}return x+h.slice(y)}];function g(t,e,r,a,s,o){var u=r+t.length,c=a.length,l=p;return void 0!==s&&(s=i(s),l=h),n.call(o,l,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":o=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>c){var h=f(l/10);return 0===h?n:h<=c?void 0===a[h-1]?i.charAt(1):a[h-1]+i.charAt(1):n}o=a[l-1]}return void 0===o?"":o}))}}))},449:function(t,e){t.exports=function(t){return null==t}},450:function(t,e,n){var r=n(487).Symbol;t.exports=r},451:function(t,e,n){"use strict";n.r(e);n(420);var r=n(418),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(452).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(451).default},methods:{isActive:r.e}},a=(n(495),n(1)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(419),n(496);function o(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,i,a,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(r.e)(a,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(r.e)(a,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),v=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,a,v)]:(d||m)&&f.headers&&!r.d.test(f.path)?[g,u(t,Object(r.c)(f.headers),f.path,a,v)]:g}};n(497);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},h=Object(a.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},452:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(479),n(1)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},453:function(t,e,n){"use strict";n(454)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},454:function(t,e,n){var r=n(3),i=n(12),a=n(29),s=/"/g,o=function(t,e,n,r){var i=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},455:function(t,e,n){"use strict";var r=n(421);n.n(r).a},456:function(t,e,n){"use strict";var r=n(3),i=n(86)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(128)("includes")},457:function(t,e,n){"use strict";var r=n(3),i=n(458);r(r.P+r.F*n(459)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},458:function(t,e,n){var r=n(130),i=n(29);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},459:function(t,e,n){var r=n(4)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},460:function(t,e,n){"use strict";n(423)("trim",(function(t){return function(){return t(this,3)}}))},461:function(t,e,n){"use strict";var r=n(425);n.n(r).a},462:function(t,e,n){"use strict";var r=n(426);n.n(r).a},463:function(t,e,n){var r=n(7),i=n(427),a=n(22).f,s=n(125).f,o=n(130),u=n(138),c=r.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,d=new c(h)!==h;if(n(11)&&(!d||n(12)((function(){return p[n(4)("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")})))){c=function(t,e){var n=this instanceof c,r=o(t),a=void 0===e;return!n&&r&&t.constructor===c&&a?t:i(d?new l(r&&!a?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&a?u.call(t):e),n?this:f,c)};for(var g=function(t){t in c||a(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=s(l),m=0;v.length>m;)g(v[m++]);f.constructor=c,c.prototype=f,n(31)(r,"RegExp",c)}n(464)("RegExp")},464:function(t,e,n){"use strict";var r=n(7),i=n(22),a=n(11),s=n(4)("species");t.exports=function(t){var e=r[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},465:function(t,e,n){t.exports=n(466)},466:function(t,e,n){n(467),t.exports=n(19).Array.isArray},467:function(t,e,n){var r=n(30);r(r.S,"Array",{isArray:n(135)})},468:function(t,e,n){t.exports=n(469)},469:function(t,e,n){n(124),n(470),t.exports=n(19).Array.from},470:function(t,e,n){"use strict";var r=n(132),i=n(30),a=n(52),s=n(471),o=n(472),u=n(133),c=n(473),l=n(474);i(i.S+i.F*!n(475)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,h=a(t),p="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,v=void 0!==g,m=0,b=l(h);if(v&&(g=r(g,d>2?arguments[2]:void 0,2)),null==b||p==Array&&o(b))for(n=new p(e=u(h.length));e>m;m++)c(n,m,v?g(h[m],m):h[m]);else for(f=b.call(h),n=new p;!(i=f.next()).done;m++)c(n,m,v?s(f,g,[i.value,m],!0):i.value);return n.length=m,n}})},471:function(t,e,n){var r=n(33);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},472:function(t,e,n){var r=n(50),i=n(18)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},473:function(t,e,n){"use strict";var r=n(13),i=n(34);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},474:function(t,e,n){var r=n(447),i=n(18)("iterator"),a=n(50);t.exports=n(19).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||a[r(t)]}},475:function(t,e,n){var r=n(18)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],s=a[r]();s.next=function(){return{done:n=!0}},a[r]=function(){return s},t(a)}catch(t){}return n}},476:function(t,e,n){t.exports=n(477)},477:function(t,e,n){n(134),n(124),t.exports=n(478)},478:function(t,e,n){var r=n(447),i=n(18)("iterator"),a=n(50);t.exports=n(19).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(r(e))}},479:function(t,e,n){"use strict";var r=n(429);n.n(r).a},480:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},481:function(t,e,n){"use strict";var r=n(430);n.n(r).a},482:function(t,e,n){"use strict";var r=n(431);n.n(r).a},483:function(t,e,n){"use strict";var r=n(432);n.n(r).a},484:function(t,e,n){"use strict";var r=n(433);n.n(r).a},485:function(t,e,n){var r=n(486),i=n(491),a=n(492),s="[object String]";t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&r(t)==s}},486:function(t,e,n){var r=n(450),i=n(489),a=n(490),s="[object Null]",o="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?o:s:u&&u in Object(t)?i(t):a(t)}},487:function(t,e,n){var r=n(488),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},488:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},489:function(t,e,n){var r=n(450),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,o=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,o),n=t[o];try{t[o]=void 0;var r=!0}catch(t){}var i=s.call(t);return r&&(e?t[o]=n:delete t[o]),i}},490:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},491:function(t,e){var n=Array.isArray;t.exports=n},492:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},493:function(t,e,n){"use strict";var r=n(434);n.n(r).a},494:function(t,e,n){"use strict";var r=n(435);n.n(r).a},495:function(t,e,n){"use strict";var r=n(436);n.n(r).a},496:function(t,e,n){"use strict";var r=n(3),i=n(81)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(128)("find")},497:function(t,e,n){"use strict";var r=n(437);n.n(r).a},498:function(t,e,n){"use strict";var r=n(438);n.n(r).a},510:function(t,e,n){"use strict";n.r(e);n(120),n(127),n(420),n(453);var r=n(418),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h,focusoutAction:function(){this.$emit("focusout")}}},a=n(1),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,o={components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(455),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(456),n(457),n(446),n(136),n(422),n(87),n(460),{data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],s=0;s<e.length&&!(a.length>=n);s++){var o=e[s];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(i(o))a.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(a.length>=n);u++){var c=o.headers[u];i(c)&&a.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(461),Object(a.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),f=(n(462),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=(n(463),n(465)),p=n.n(h);var d=n(468),g=n.n(d),v=n(476),m=n.n(v);function b(t){return function(t){if(p()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(m()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return g()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(448),n(419);var _=n(452),k=n(480),x=n.n(k),y={components:{NavLink:s,DropdownTransition:_.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return x()(e)===t}},watch:{$route:function(){this.open=!1}}},$=(n(481),{components:{NavLink:s,DropdownLink:Object(a.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var s,o=e[a],u=i[a]&&i[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),r.some((function(t){return t.path===s}))||(s=a)),{text:u,link:s}}))};return[].concat(b(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),C=(n(482),Object(a.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function L(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={components:{SidebarButton:f,NavLinks:C,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(L(this.$el,"paddingLeft"))+parseInt(L(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(483),Object(a.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),O=n(449),j=n.n(O),A={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=j()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,i=void 0===r?"":r,a=e.docsBranch,s=void 0===a?"master":a,o=e.docsRepo,u=void 0===o?n:o;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,i,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+a}}},I=(n(484),Object(a.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),E=n(485),P=n.n(E),T={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return D(N.PREV,this)},next:function(){return D(N.NEXT,this)}}};var N={NEXT:{resolveLink:function(t,e){return U(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return U(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function D(t,e){var n=e.$themeConfig,i=e.$page,a=e.$route,s=e.$site,o=e.sidebarItems,u=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,f=c(n),h=l(i),p=j()(h)?f:h;return!1===p?void 0:P()(p)?Object(r.k)(s.pages,p,a.path):u(i,o)}function U(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var a=r[i];if("page"===a.type&&a.path===decodeURIComponent(t.path))return r[i+n]}}var H=T,M=(n(493),{components:{PageEdit:I,PageNav:Object(a.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),R=(n(494),Object(a.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),W={name:"Sidebar",components:{SidebarLinks:n(451).default,NavLinks:C},props:["items"]},G=(n(498),{components:{Home:u,Page:R,Sidebar:Object(a.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),B=Object(a.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)}),[],!1,null,null,null);e.default=B.exports}}]);