(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/xialong/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1837:function(t,e,n){},"45db":function(t,e,n){"use strict";n("1837")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.done,expression:"done"}],attrs:{id:"done"}},[n("div",{attrs:{id:"doneImage"}}),n("div",{staticClass:"bottomAction"},[n("p",[t._v("长按红色图片分享到群里")]),n("button",{on:{click:function(e){return t.cancel()}}},[t._v("取消")])])]),n("div",{class:{bg:t.done},attrs:{id:"doc"}},[n("div",{staticClass:"header"},[n("p",[t._v(t._s(t.title))]),n("h2",[t._v("2020年下垅龙胜宫庙会捐献名单")]),n("h6",[t._v("(按捐款时间先后为序)")])]),n("table",{class:{before:!t.done},attrs:{cellspacing:"0",cellpadding:"0"}},[n("thead",[n("tr",[n("th",{attrs:{width:t.done?30:20}},[t._v("#")]),n("th",[t._v("姓名")]),n("th",{staticClass:"cash",attrs:{width:"40",center:""}},[t._v("现金")]),n("th",{attrs:{width:"40",center:""}},[t._v("拱门")]),n("th",{attrs:{width:"40",center:""}},[t._v("龙柱")]),n("th",{attrs:{width:"40",center:""}},[t._v("气球")]),t.done?t._e():n("th",{attrs:{width:"80",center:""}},[t._v("操作")])])]),n("tbody",[t._l(t.list,(function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(o+1))]),n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"cash",class:{novalue:t.done&&!e.cash},attrs:{center:""}},[t._v(t._s(t.done?e.cash||"-":e.cash))]),n("td",{class:{novalue:t.done&&!e.door},attrs:{center:""}},[t._v(t._s(t.done?e.door||"-":e.door))]),n("td",{class:{novalue:t.done&&!e.column},attrs:{center:""}},[t._v(t._s(t.done?e.column||"-":e.column))]),n("td",{class:{novalue:t.done&&!e.balloon},attrs:{center:""}},[t._v(t._s(t.done?e.balloon||"-":e.balloon))]),t.done?t._e():n("td",{attrs:{center:""}},[n("a",{attrs:{href:"javascript: void(0);"},on:{click:function(e){return t.edit(o,!0)}}},[t._v("编辑")]),t._v(" "),n("a",{attrs:{href:"javascript: void(0);"},on:{click:function(e){return t.remove(o)}}},[t._v("删除")])])])})),n("tr",{staticClass:"last"},[n("td"),t._m(0),n("td",{staticClass:"cash",attrs:{center:""}},[n("b",[t._v(t._s(t.totalCash))])]),n("td",{attrs:{center:""}},[n("b",[t._v(t._s(t.totalDoor))])]),n("td",{attrs:{center:""}},[n("b",[t._v(t._s(t.totalColumn))])]),n("td",{attrs:{center:""}},[n("b",[t._v(t._s(t.totalBalloon))])]),t.done?t._e():n("td",{attrs:{center:""}})])],2)]),t.done?n("div",{staticClass:"time"},[t._v(" "+t._s(t.date)+" "),n("br"),t._v(" "+t._s(t.list.length>89?"本名单生成工具由 Alien 提供技术支持":"")+" ")]):t._e(),n("div",{staticClass:"totalAll hide"},[t._v(" 总额："+t._s(t.totalCash)+" + 160×"+t._s(t.totalDoor)+" + 140×"+t._s(t.totalColumn)+" + 70×"+t._s(t.totalBalloon)+" = "),n("b",[t._v(t._s(t.totalCount))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.done,expression:"!done"}],staticStyle:{height:"200px"}})]),n("div",{staticClass:"bottomAction"},[n("button",{on:{click:function(e){return t.edit()}}},[t._v("新增捐款")]),n("button",{on:{click:function(e){return t.creat()}}},[t._v("生成截图")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNew,expression:"showNew"}],attrs:{id:"new"}},[n("ul",[n("li",[n("b",[t._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),n("li",[n("b",[t._v("现金")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCash,expression:"newCash"}],attrs:{type:"number"},domProps:{value:t.newCash},on:{input:function(e){e.target.composing||(t.newCash=e.target.value)}}})]),n("li",[n("b",[t._v("拱门")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newDoor,expression:"newDoor"}],attrs:{type:"number"},domProps:{value:t.newDoor},on:{input:function(e){e.target.composing||(t.newDoor=e.target.value)}}})]),n("li",[n("b",[t._v("柱子")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumn,expression:"newColumn"}],attrs:{type:"number"},domProps:{value:t.newColumn},on:{input:function(e){e.target.composing||(t.newColumn=e.target.value)}}})]),n("li",[n("b",[t._v("气球")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newBalloon,expression:"newBalloon"}],attrs:{type:"number"},domProps:{value:t.newBalloon},on:{input:function(e){e.target.composing||(t.newBalloon=e.target.value)}}})])]),n("div",{staticClass:"bottomAction"},[n("button",{on:{click:function(e){return t.save()}}},[t._v("保存")]),n("button",{on:{click:function(e){return t.cancelNew()}}},[t._v("取消")])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("总计：")])])}],l=(n("99af"),n("4160"),n("a434"),n("b0c0"),n("ac1f"),n("466d"),n("5319"),n("159b"),n("c0e9")),c=n.n(l),u=function(){var t=function(){var t=document.createElement("canvas"),e=t.getContext("2d");return{canvas:!!e,imageData:!!e.getImageData,dataURL:!!t.toDataURL,btoa:!!window.btoa}}(),e="image/octet-stream";function n(t,e,n){var o=t.width,a=t.height;void 0==e&&(e=o),void 0==n&&(n=a);var i=document.createElement("canvas"),r=i.getContext("2d");return i.width=e,i.height=n,r.drawImage(t,0,0,o,a,0,0,e,n),i}function o(t,e,o,a){return t=n(t,o,a),t.toDataURL(e)}function a(t){document.location.href=t}function i(t){var e=document.createElement("img");return e.src=t,e}function r(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}function s(t){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function l(t){var e=t.width,n=t.height;return t.getContext("2d").getImageData(0,0,e,n)}function c(t,e){return"data:"+e+";base64,"+t}var u=function(t){var e=t.width,n=t.height,o=e*n*3,a=o+54,i=[66,77,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,54,0,0,0],r=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l=(4-3*e%4)%4,c=t.data,u="",d=e<<2,h=n,v=String.fromCharCode;do{for(var m=d*(h-1),f="",p=0;p<e;p++){var w=p<<2;f+=v(c[m+w+2])+v(c[m+w+1])+v(c[m+w])}for(var g=0;g<l;g++)f+=String.fromCharCode(0);u+=f}while(--h);var b=s(i.concat(r))+s(u);return b},d=function(i,s,d,h){if(t.canvas&&t.dataURL)if("string"==typeof i&&(i=document.getElementById(i)),void 0==h&&(h="png"),h=r(h),/bmp/.test(h)){var v=l(n(i,s,d));a(c(u(v),e))}else a(o(i,h,s,d).replace(h,e))},h=function(e,a,s,d){if(t.canvas&&t.dataURL){if("string"==typeof e&&(e=document.getElementById(e)),void 0==d&&(d="png"),d=r(d),/bmp/.test(d)){var h=l(n(e,a,s));return i(c(u(h),"image/bmp"))}return i(o(e,d,a,s))}};return{saveAsImage:d,saveAsPNG:function(t,e,n){return d(t,e,n,"png")},saveAsJPEG:function(t,e,n){return d(t,e,n,"jpeg")},saveAsGIF:function(t,e,n){return d(t,e,n,"gif")},saveAsBMP:function(t,e,n){return d(t,e,n,"bmp")},convertToImage:h,convertToPNG:function(t,e,n){return h(t,e,n,"png")},convertToJPEG:function(t,e,n){return h(t,e,n,"jpeg")},convertToGIF:function(t,e,n){return h(t,e,n,"gif")},convertToBMP:function(t,e,n){return h(t,e,n,"bmp")}}}(),d=[],h={name:"Home",data:function(){return{title:"下垅龙胜宫，址立要穴，威灵显赫，庇佑社里四季平安、风调雨顺，近几年来，在众乡亲和众贤士的精心呵护下，龙胜宫不断完善，香火鼎盛，荫佑四方。2020年龙胜宫庙会又已临近，望众乡亲及众贤士一如既往、慷慨解囊、踊跃捐献。",done:!1,totalCount:0,totalCash:0,totalDoor:0,totalBalloon:0,totalColumn:0,isEdit:!1,editIndex:0,newName:"",newCash:"",newDoor:"",newBalloon:"",newColumn:"",showNew:!1,list:[],date:""}},methods:{creat:function(){this.done=!0,this.date=this.setDate(),window.scrollTo(0,0);var t=document.querySelector("#doc");setTimeout((function(){c()(t,{useCORS:!0,allowTaint:!0,letterRendering:!0,onrendered:function(t){var e=t.getContext("2d");e.webkitImageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.imageSmoothingEnabled=!1}}).then((function(e){document.querySelector("#doneImage").appendChild(u.convertToImage(e,750,t.offsetHeight/t.offsetWidth*750,"png"))}))}),200)},cancel:function(){this.done=!1,document.querySelector("#doneImage").innerHTML=""},setTotal:function(){var t=this;this.totalCash=0,this.totalDoor=0,this.totalBalloon=0,this.totalColumn=0,this.list.forEach((function(e){t.totalCash=t.totalCash+ +e.cash,t.totalDoor=t.totalDoor+ +e.door,t.totalBalloon=t.totalBalloon+ +e.balloon,t.totalColumn=t.totalColumn+ +e.column})),this.totalCount=this.totalCash+160*this.totalBalloon*70+140*this.totalColumn},remove:function(t){var e=confirm("确定删除 ".concat(this.list[t].name," 的捐款吗?"));1==e&&(this.list.splice(t,1),this.updateLocalVal())},edit:function(t,e){this.showNew=!0,console.log(t),this.isEdit=e,this.editIndex=t,this.newName=e?this.list[t].name:"",this.newCash=e?this.list[t].cash:0,this.newDoor=e?this.list[t].door:0,this.newBalloon=e?this.list[t].balloon:0,this.newColumn=e?this.list[t].column:0},save:function(){this.showNew=!1,this.newName&&(this.newCash=+this.newCash||0,this.newDoor=+this.newDoor||0,this.newBalloon=+this.newBalloon||0,this.newColumn=+this.newColumn||0,this.isEdit?(this.list[this.editIndex].name=this.newName,this.list[this.editIndex].cash=this.newCash,this.list[this.editIndex].door=this.newDoor,this.list[this.editIndex].balloon=this.newBalloon,this.list[this.editIndex].column=this.newColumn):this.list.push({name:this.newName,cash:this.newCash,door:this.newDoor,balloon:this.newBalloon,column:this.newColumn}),this.updateLocalVal())},updateLocalVal:function(){localStorage.setItem("list",JSON.stringify(this.list)),this.setTotal()},cancelNew:function(){this.showNew=!1},fullTwo:function(t){return t>9?t:"0"+t},setDate:function(){var t=new Date,e=t.getFullYear(),n=this.fullTwo(t.getMonth()+1),o=this.fullTwo(t.getDate()),a=this.fullTwo(t.getHours()),i=this.fullTwo(t.getMinutes()),r=this.fullTwo(t.getSeconds()),s=e+"-"+n+"-"+o,l=a+":"+i+":"+r;return s+" "+l}},mounted:function(){localStorage.getItem("list")?this.list=JSON.parse(localStorage.getItem("list")):(localStorage.setItem("list",JSON.stringify(d)),this.list=d),this.setTotal()}},v=h,m=(n("45db"),n("fb87"),n("2877")),f=Object(m["a"])(v,r,s,!1,null,"7a0f1a42",null),p=f.exports,w={name:"App",components:{Home:p}},g=w,b=(n("034f"),Object(m["a"])(g,a,i,!1,null,null,null)),_=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,n){},bbc0:function(t,e,n){},fb87:function(t,e,n){"use strict";n("bbc0")}});
//# sourceMappingURL=app.57fbd996.js.map