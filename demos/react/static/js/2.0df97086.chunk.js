webpackJsonp([2],{142:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(4),l=o(c),p=n(42),s=n(73);n(290);var f=function(t){function e(){var t,n,o,i;r(this,e);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=o=u(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o.substructionChange=function(){o.props.dispatch((0,s.numChange)("-",o.substructionInput.value))},o.additionChange=function(t){o.props.dispatch((0,s.numChange)("+",o.additionInput.value))},i=n,u(o,i)}return i(e,t),a(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.state,o=e.dispatch,r=function(){return o((0,s.compute)("+",t.additionInput.value))},u=function(){return o((0,s.compute)("-",t.additionInput.value))};return l.default.createElement("div",{id:"Counter"},"Result:",l.default.createElement("span",null,n.value),l.default.createElement("button",{onClick:r},"+",n.addition),l.default.createElement("input",{type:"range",min:"1",max:"10",value:n.addition,onChange:this.additionChange,ref:function(e){return t.additionInput=e}})," ",l.default.createElement("button",{onClick:u,className:"substruction"},"-",n.substruction),l.default.createElement("input",{type:"range",min:"1",max:"10",value:n.substruction,onChange:this.substructionChange,ref:function(e){return t.substructionInput=e}}))}}]),e}(c.Component);e.default=(0,p.connect)(function(t){return{state:t.Counter}})(f)},150:function(t,e,n){e=t.exports=n(17)(),e.push([t.id,"#Counter{color:#888}#Counter span{min-width:24px;font-weight:700}#Counter button,#Counter span{display:inline-block;color:#666;margin-left:5px}#Counter button{min-width:40px;border:1px solid #ccc;border-radius:2px;background:#f5f5f5;cursor:pointer;outline:none}#Counter button.substruction{margin-left:30px}#Counter input{margin-left:10px}",""])},290:[298,150]});
//# sourceMappingURL=2.0df97086.chunk.js.map