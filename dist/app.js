webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),a=n(153),l=n(154),i=n(177),c=n(234),s=n(239),f=r(s),d=n(251),p=r(d),m=n(266),h=n(271),b=r(h),_=window.__initialState__||void 0,E=(0,m.configureStore)(i.browserHistory,_),y=(0,f["default"])(p["default"]),w=(0,i.useRouterHistory)(y)(),v=(0,c.syncHistoryWithStore)(w,E);(0,a.render)(u["default"].createElement(l.Provider,{store:E},u["default"].createElement(i.Router,{history:v,routes:b["default"]})),document.getElementById("root"))},239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){function t(){var e=b.readState(i);return e?e.scrollPosition:null}function n(e){var t=e.key;i=t}function r(){var e=t()||[0,0],n=e[0],r=e[1];window.scrollTo(n,r)}function o(e){function t(){null===n&&(n=h["default"](function(){n=null;var e=b.readState(i),t=[f["default"](window),p["default"](window)];b.saveState(i,u({},e,{scrollPosition:t}))}))}s=w["default"]("manual");var n=null;c["default"](window,"scroll",t),d=function(){return l["default"](window,"scroll",t)},m=e.listenBefore(function(){null!==n&&(h["default"].cancel(n),n=null)})}function a(){s&&s(),d(),m()}var i=void 0,s=void 0,d=void 0,m=void 0;return E["default"](r,o,a,n)(e)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=o;var a=n(240),l=r(a),i=n(242),c=r(i),s=n(243),f=r(s),d=n(245),p=r(d),m=n(246),h=r(m),b=n(247),_=n(249),E=r(_),y=n(250),w=r(y);e.exports=t["default"]},240:function(e,t,n){"use strict";var r=n(241),o=function(){};r&&(o=function(){return document.addEventListener?function(e,t,n,r){return e.removeEventListener(t,n,r||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0}()),e.exports=o},241:function(e,t){"use strict";e.exports=!("undefined"==typeof window||!window.document||!window.document.createElement)},242:function(e,t,n){"use strict";var r=n(241),o=function(){};r&&(o=function(){return document.addEventListener?function(e,t,n,r){return e.addEventListener(t,n,r||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,n)}:void 0}()),e.exports=o},243:function(e,t,n){"use strict";var r=n(244);e.exports=function(e,t){var n=r(e);return void 0===t?n?"pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft:e.scrollLeft:void(n?n.scrollTo(t,"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop):e.scrollLeft=t)}},244:function(e,t){"use strict";e.exports=function(e){return e===e.window?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}},245:function(e,t,n){"use strict";var r=n(244);e.exports=function(e,t){var n=r(e);return void 0===t?n?"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop:e.scrollTop:void(n?n.scrollTo("pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft,t):e.scrollTop=t)}},246:function(e,t,n){"use strict";function r(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-s)),r=setTimeout(e,n);return s=t,r}var o,u=n(241),a=["","webkit","moz","o","ms"],l="clearTimeout",i=r,c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};u&&a.some(function(e){var t=c(e,"request");return t in window?(l=c(e,"cancel"),i=function(e){return window[t](e)}):void 0});var s=(new Date).getTime();o=function(e){return i(e)},o.cancel=function(e){return window[l](e)},e.exports=o},247:[3314,248],248:180,249:function(e,t){"use strict";function n(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function r(e,t,r,u){return function(a){return function(){function l(){1===++b&&t&&t(h)}function i(){0===--b&&r&&r()}function c(e){l();var t=h.listenBefore(e);return function(){t(),i()}}function s(t){_=y,y=t,E.forEach(function(e){return e(t)}),u&&u(t),p&&!p(_,y)||e(t)}function f(e){return l(),0===E.length&&(w=h.listen(s)),E.push(e),e(y),function(){E=E.filter(function(t){return t!==e}),0===E.length&&w(),i()}}var d=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],p=d.shouldUpdateScroll,m=n(d,["shouldUpdateScroll"]),h=a(m),b=0,_=void 0,E=[],y=void 0,w=void 0;return o({},h,{listenBefore:c,listen:f})}}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=r,e.exports=t["default"]},250:function(e,t){"use strict";function n(e){if("scrollRestoration"in window.history){var t=function(){var t=window.history.scrollRestoration;return window.history.scrollRestoration=e,{v:function(){window.history.scrollRestoration=t}}}();if("object"==typeof t)return t.v}return null}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},251:[3321,252,253,254,255,256,247,257],252:176,253:182,254:[3313,248],255:184,256:185,257:[3315,252,255,256,258],258:[3316,248,259,254,262,253,263,264,265],259:[3317,260,261],260:190,261:191,262:192,263:[3318,248,253,254],264:[3319,248],265:[3320,248],266:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var n=(0,i.combineReducers)(a({},p,{routing:c.routerReducer})),r=(0,i.createStore)(n,t,(0,i.compose)((0,i.applyMiddleware)(f["default"],(0,c.routerMiddleware)(e))));return r}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.configureStore=u;var l=n(1),i=(o(l),n(160)),c=n(234),s=n(267),f=o(s),d=n(268),p=r(d)},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getUser=t.newestList=t.newsList=void 0;var o=n(269),u=r(o),a=n(2322),l=r(a),i=n(628),c=r(i);t.newsList=u["default"],t.newestList=l["default"],t.getUser=c["default"]},269:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case o.RECEIVE_NEWS:var n=e.newsList?e.newsList:[];return t.json.map(function(e,t){n.push({id:e.id,by:e.by,descendants:e.descendants,score:e.score,time:e.time,title:e.title,type:e.type,url:e.url})}),Object.assign({},e,{newsList:n,start:t.start+1});case o.NO_MORE_NEWS:return Object.assign({},e,{noMoreNews:!0});default:return e}}var o=n(270),u={};e.exports=r},270:function(e,t){"use strict";e.exports={API:"https://hacker-news.firebaseio.com/v0/",RECEIVE_NEWS:"RECEIVE_NEWS",RECEIVE_USER:"RECEIVE_USER",RECEIVE_NEWEST:"RECEIVE_NEWEST",NO_MORE_NEWS:"NO_MORE_NEWS",NO_MORE_NEWEST:"NO_MORE_NEWEST"}},271:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),a=n(177),l=n(272),i=r(l),c=n(277),s=r(c),f=n(285),d=r(f),p=n(287),m=r(p),h=n(289),b=r(h),_=n(291),E=r(_),y=n(293),w=r(y),v=n(295),g=r(v),O=n(327),j=r(O),N=n(297),M=r(N),P=u["default"].createElement(a.Route,{path:"/",component:i["default"]},u["default"].createElement(a.IndexRoute,{component:s["default"]}),u["default"].createElement(a.Route,{path:"/newest",component:b["default"]}),u["default"].createElement(a.Route,{path:"/comments",component:d["default"]}),u["default"].createElement(a.Route,{path:"/show",component:E["default"]}),u["default"].createElement(a.Route,{path:"/ask",component:w["default"]}),u["default"].createElement(a.Route,{path:"/jobs",component:g["default"]}),u["default"].createElement(a.Route,{path:"/submit",component:M["default"]}),u["default"].createElement(a.Route,{path:"/login",component:m["default"]}),u["default"].createElement(a.Route,{path:"/user/:id",component:j["default"]}));t["default"]=P},272:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=(e.pushPath,e.children);return a["default"].createElement("div",null,a["default"].createElement(c["default"],null),a["default"].createElement("main",{className:f["default"].main,id:"main"},t))}var u=n(1),a=r(u),l=(n(177),n(154)),i=n(273),c=r(i),s=n(275),f=r(s),d=n(276),p=r(d);Object.assign(f["default"],p["default"]),e.exports=(0,l.connect)(null)(o)},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return document.querySelector("."+f["default"].menuShow)?void u():(document.querySelector("nav div").classList.add(f["default"].menuShow),document.querySelector("."+f["default"].showMenu).classList.add(f["default"].showCurrent),void document.querySelector("#main").classList.add(f["default"].mainTop))}function u(){document.querySelector("nav div").classList.remove(f["default"].menuShow),document.querySelector("."+f["default"].showMenu).classList.remove(f["default"].showCurrent),document.querySelector("#main").classList.remove(f["default"].mainTop)}function a(){return i["default"].createElement("header",{className:f["default"].header},i["default"].createElement("div",{className:f["default"].autoWidth},i["default"].createElement("span",{className:f["default"].showMenu,onClick:o}),i["default"].createElement(c.Link,{to:"/"},i["default"].createElement("h1",null,"Hacker News")),i["default"].createElement("nav",null,i["default"].createElement("div",null,i["default"].createElement(c.Link,{to:"/newest",activeClassName:f["default"].current},"new"),i["default"].createElement(c.Link,{to:"/comments",activeClassName:f["default"].current},"comments"),i["default"].createElement(c.Link,{to:"/show",activeClassName:f["default"].current},"show"),i["default"].createElement(c.Link,{to:"/ask",activeClassName:f["default"].current},"ask"),i["default"].createElement(c.Link,{to:"/jobs",activeClassName:f["default"].current},"jobs")),i["default"].createElement(c.Link,{to:"/submit",className:p["default"].iconBlog+" "+f["default"].submit,activeClassName:f["default"].current}),i["default"].createElement(c.Link,{to:"/login",className:p["default"].iconUser+" "+f["default"].user,activeClassName:f["default"].current}))))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i=r(l),c=n(177),s=n(274),f=r(s),d=n(275),p=r(d);t["default"]=a},274:function(e,t){e.exports={header:"Header_header__1qRCL",current:"Header_current__23Yv_",submit:"Header_submit__2LZIV",user:"Header_user__2XvaP",autoWidth:"Header_autoWidth__UPgNd",showMenu:"Header_showMenu__3ZP3m",showCurrent:"Header_showCurrent__3QW4o",mainTop:"Header_mainTop__iJZIr",menuShow:"Header_menuShow__2X0yA"}},275:function(e,t){e.exports={iconBlog:"base_iconBlog__IKFf6",iconClock:"base_iconClock__1xMdw",iconBubble:"base_iconBubble__9iSM0",iconUser:"base_iconUser__sFRh-",iconSphere:"base_iconSphere__6LslJ",iconLink:"base_iconLink__3g5mV",iconSafari:"base_iconSafari__4cyQf",main:"base_main__1_J5E"}},276:function(e,t){},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{newsList:e.newsList.newsList,start:e.newsList.start,noMoreNews:e.newsList.noMoreNews}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(154),d=n(278),p=n(281),m=r(p),h=n(275),b=r(h),_=n(282),E=r(_),y=n(284),w=n(177),v=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props.start;e||this.props.dispatch((0,d.fetchNews)())}},{key:"render",value:function(){document.title="Hacker News";var e=this.props,t=e.newsList,n=e.dispatch,r=e.start,o=e.noMoreNews,u=s["default"].createElement(E["default"],null),a=null,l=!1;return document.onscroll=function(){l||(l=document.body.scrollTop>0&&document.body.scrollTop>=document.body.offsetHeight-window.innerHeight-200,l&&(u=s["default"].createElement(E["default"],null),n((0,d.fetchNews)(r))))},(0,y.isEmpty)(t)||(a=t.map(function(e,t){return s["default"].createElement("li",{key:e.id},s["default"].createElement("i",null,t+1),s["default"].createElement("button",null,e.score," ",s["default"].createElement("br",null),e.score>1?"points":"point"),s["default"].createElement("div",{className:m["default"].content},s["default"].createElement("h3",null,s["default"].createElement("a",{href:e.url,target:"_blank"},e.title)),s["default"].createElement("cite",null,s["default"].createElement("a",{href:e.url,target:"_blank"},(0,y.getHost)(e.url))," ",s["default"].createElement("time",null,"-- ",(0,y.socialTime)(e.time))),s["default"].createElement("div",{className:m["default"].actionArea},s["default"].createElement("a",{href:"https://hn.algolia.com/?query="+e.title,target:"_blank"},s["default"].createElement("span",{className:b["default"].iconClock}),"past"),s["default"].createElement("a",{href:"https://www.google.com/search?q="+e.title,target:"_blank"},s["default"].createElement("span",{className:b["default"].iconLink}),"web"),s["default"].createElement("a",{href:"#"},s["default"].createElement("span",{className:b["default"].iconBubble}),"discuss"),s["default"].createElement(w.Link,{to:"/user/"+e.by,className:m["default"].user},"@",e.by))))})),s["default"].createElement("div",{className:m["default"].timeLine},s["default"].createElement("ul",null,a),o?"":u,s["default"].createElement("div",{className:o?m["default"].noMoreNews:""},o?"No More News :)":""))}}]),t}(c.Component);t["default"]=(0,f.connect)(l)(v)},278:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=e?e*f:0;if(n>=500)return a(t);var r=d?d:(0,i["default"])(s+"topstories.json").then(function(e){var t=e.json();return d=t,t}),o=p?p:(0,i["default"])(s+"newstories.json").then(function(e){var t=e.json();return p=t,t});return function(e){(t?o:r).then(function(e){return Promise.all(e.slice(n,n+f).map(function(e){return(0,i["default"])(s+"item/"+e+".json")}))}).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(r){return e(u(r,n/f,t))})}}function u(e,t,n){return{type:n?c.RECEIVE_NEWEST:c.RECEIVE_NEWS,json:e,start:t}}function a(e){return{type:e?c.NO_MORE_NEWEST:c.NO_MORE_NEWS}}var l=n(279),i=r(l),c=n(270),s=c.API,f=25,d=null,p=null;e.exports={fetchNews:o,receiveNews:u}},281:function(e,t){e.exports={timeLine:"Home_timeLine__1HOn2",content:"Home_content__4md9A",actionArea:"Home_actionArea__34Luk",noMoreNews:"Home_noMoreNews__2o_i9",user:"Home_user__NP3Yl"}},282:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return a["default"].createElement("img",{className:i["default"].loading,src:"/dist/loading.gif"})}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),l=n(283),i=r(l);t["default"]=o},283:function(e,t){e.exports={loading:"Loader_loading__2iBHM"}},284:function(e,t){"use strict";function n(e){return void 0===e||!Object.keys(e).length}function r(e,t){if(e){if(t){var n=new Date(1e3*e);return n.getFullYear()+"-"+two(n.getMonth()+1)+"-"+two(n.getDate())+" "+two(n.getHours())+":"+two(n.getMinutes())+":"+two(n.getSeconds())}var r=Math.floor((new Date).getTime()/1e3-e),o=Math.floor(r/31536e3);return o>1?o+" years ago":(o=Math.floor(r/2592e3),o>1?o+" mons ago":(o=Math.floor(r/86400),o>=1?o+" days ago":(o=Math.floor(r/3600),o>=1?o+" hrs ago":(o=Math.floor(r/60),o>1?o+" mins ago":Math.floor(r)+" secs ago"))))}}function o(e){var t=document.createElement("a");return t.href=e,t.hostname}e.exports={isEmpty:n,socialTime:r,getHost:o}},285:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=(n(154),n(286)),f=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return document.title="New Comments",c["default"].createElement("div",{className:f["default"].comments},"Comments Page")}}]),t}(i.Component);t["default"]=d},286:function(e,t){e.exports={comments:"Comments_comments__29AER"}},287:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=(n(154),n(288)),f=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return document.title="Login",c["default"].createElement("div",{className:f["default"].login},c["default"].createElement("ul",null,c["default"].createElement("h3",null,"Login"),c["default"].createElement("li",null,c["default"].createElement("span",null,"username: "),c["default"].createElement("div",null,c["default"].createElement("input",{type:"text"}))),c["default"].createElement("li",null,c["default"].createElement("span",null,"password: "),c["default"].createElement("div",null,c["default"].createElement("input",{type:"text"}))),c["default"].createElement("button",null,"login"),c["default"].createElement("a",{href:"#"},"Forgot your password?")),c["default"].createElement("ul",null,c["default"].createElement("a",{href:"#"},"Create Account")))}}]),t}(i.Component);t["default"]=d},288:function(e,t){e.exports={login:"Login_login__16MwG"}},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{newestList:e.newestList.newestList,start:e.newestList.start,noMoreNews:e.newestList.noMoreNews}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(154),d=n(278),p=n(281),m=r(p),h=n(275),b=r(h),_=n(282),E=r(_),y=n(284),w=n(177),v=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props.start;e||this.props.dispatch((0,d.fetchNews)(0,!0))}},{key:"render",value:function(){document.title="New Links";var e=this.props,t=e.newestList,n=e.dispatch,r=e.start,o=e.noMoreNews,u=s["default"].createElement(E["default"],null),a=null,l=!1;return document.onscroll=function(){l||(l=document.body.scrollTop>0&&document.body.scrollTop>=document.body.offsetHeight-window.innerHeight-200,l&&(u=s["default"].createElement(E["default"],null),n((0,d.fetchNews)(r,!0))))},(0,y.isEmpty)(t)||(a=t.map(function(e,t){return s["default"].createElement("li",{key:e.id},s["default"].createElement("i",null,t+1),s["default"].createElement("button",null,e.score," ",s["default"].createElement("br",null),e.score>1?"points":"point"),s["default"].createElement("div",{className:m["default"].content},s["default"].createElement("h3",null,s["default"].createElement("a",{href:e.url,target:"_blank"},e.title)),s["default"].createElement("cite",null,s["default"].createElement("a",{href:e.url,target:"_blank"},(0,y.getHost)(e.url))," ",s["default"].createElement("time",null,"-- ",(0,y.socialTime)(e.time))),s["default"].createElement("div",{className:m["default"].actionArea},s["default"].createElement("a",{href:"https://hn.algolia.com/?query="+e.title,target:"_blank"},s["default"].createElement("span",{className:b["default"].iconClock}),"past"),s["default"].createElement("a",{href:"https://www.google.com/search?q="+e.title,target:"_blank"},s["default"].createElement("span",{className:b["default"].iconLink}),"web"),s["default"].createElement("a",{href:"#"},s["default"].createElement("span",{className:b["default"].iconBubble}),"discuss"),s["default"].createElement(w.Link,{to:"/user/"+e.by,className:m["default"].user},"@",e.by))))})),s["default"].createElement("div",{className:m["default"].timeLine},s["default"].createElement("ul",null,a),o?"":u,s["default"].createElement("div",{className:o?m["default"].noMoreNews:""},o?"No More News :)":""))}}]),t}(c.Component);t["default"]=(0,f.connect)(l)(v)},291:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=(n(154),n(292)),f=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return document.title="Show",c["default"].createElement("div",{className:f["default"].show},"Show Page")}}]),t}(i.Component);t["default"]=d},292:function(e,t){e.exports={show:"Show_show__1TCfH"}},293:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=(n(154),n(294)),f=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return document.title="Ask",c["default"].createElement("div",{className:f["default"].ask},"Ask Page")}}]),t}(i.Component);t["default"]=d},294:function(e,t){e.exports={ask:"Ask_ask__-HT1d"}},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=(n(154),n(296)),f=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return document.title="Jobs",c["default"].createElement("div",{className:f["default"].jobs},"Jobs Page")}}]),t}(i.Component);t["default"]=d},296:function(e,t){e.exports={jobs:"Jobs_jobs__2THk-"}},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=(n(154),n(298)),f=r(s),d=n(177),p=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return document.title="Submit",c["default"].createElement("div",{className:f["default"].submit},c["default"].createElement("h3",null,"You have to be logged in to submit. :)"),c["default"].createElement(d.Link,{to:"/login"},"Login"))}}]),t}(i.Component);t["default"]=p},298:function(e,t){e.exports={submit:"Submit_submit__25-di"}},327:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{user:e.getUser.user,created:e.getUser.created}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(154),d=n(465),p=n(282),m=r(p),h=n(338),b=r(h),_=n(284),E=(n(177),function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.dispatch((0,d.fetchUser)(this.props.params.id))}},{key:"render",value:function(){document.title="Profile: "+this.props.params.id;var e=this.props,t=e.user,n=e.created;return(0,_.isEmpty)(t)||window.createdTime==n?s["default"].createElement(m["default"],null):(window.createdTime=n,s["default"].createElement("div",{className:b["default"].user},s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("span",null,"user"),s["default"].createElement("div",null,t.id)),s["default"].createElement("li",null,s["default"].createElement("span",null,"created"),s["default"].createElement("div",null,(0,_.socialTime)(t.created))),s["default"].createElement("li",null,s["default"].createElement("span",null,"karma"),s["default"].createElement("div",null,t.karma)),t.about?s["default"].createElement("li",null,s["default"].createElement("span",null,"about"),s["default"].createElement("div",null,t.about)):"")))}}]),t}(c.Component));t["default"]=(0,f.connect)(l)(E)},338:function(e,t){e.exports={user:"User_user__iHzcO"}},465:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(t){return(0,l["default"])(c+"user/"+e+".json").then(function(e){return e.json()}).then(function(e){return t(u(e))})}}function u(e,t){return{type:i.RECEIVE_USER,json:e,created:Date.now()}}var a=n(279),l=r(a),i=n(270),c=i.API;e.exports={fetchUser:o,receiveUser:u}},628:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case o.RECEIVE_USER:return Object.assign({},e,{user:t.json,created:t.created});default:return e}}var o=n(270),u={};e.exports=r},2322:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case o.RECEIVE_NEWEST:var n=e.newestList?e.newestList:[];return t.json.map(function(e){n.push({id:e.id,by:e.by,descendants:e.descendants,score:e.score,time:e.time,title:e.title,type:e.type,url:e.url})}),Object.assign({},e,{newestList:n,start:t.start+1});case o.NO_MORE_NEWEST:return Object.assign({},e,{noMoreNews:!0});default:
return e}}var o=n(270),u={};e.exports=r}});
