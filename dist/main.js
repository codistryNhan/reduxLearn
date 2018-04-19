!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";(function(t,r){var o,i=n(4);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var u=Object(i.a)(o);e.a=u}).call(this,n(3),n(7)(t))},function(t,e,n){"use strict";n.r(e);var r=n(9),o="object"==typeof self&&self&&self.Object===Object&&self,i=(r.a||o||Function("return this")()).Symbol,u=Object.prototype,c=u.hasOwnProperty,a=u.toString,f=i?i.toStringTag:void 0;var s=function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[f]=n:delete t[f]),o},d=Object.prototype.toString;var l=function(t){return d.call(t)},p="[object Null]",y="[object Undefined]",v=i?i.toStringTag:void 0;var b=function(t){return null==t?void 0===t?y:p:v&&v in Object(t)?s(t):l(t)};var h=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object);var w=function(t){return null!=t&&"object"==typeof t},O="[object Object]",j=Function.prototype,E=Object.prototype,g=j.toString,T=E.hasOwnProperty,m=g.call(Object);var P=function(t){if(!w(t)||b(t)!=O)return!1;var e=h(t);if(null===e)return!0;var n=T.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&g.call(n)==m},x=n(0),S={INIT:"@@redux/INIT"};function _(t,e,n){var r;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(_)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var o=t,i=e,u=[],c=u,a=!1;function f(){c===u&&(c=u.slice())}function s(){return i}function d(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return f(),c.push(t),function(){if(e){e=!1,f();var n=c.indexOf(t);c.splice(n,1)}}}function l(t){if(!P(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(a)throw new Error("Reducers may not dispatch actions.");try{a=!0,i=o(i,t)}finally{a=!1}for(var e=u=c,n=0;n<e.length;n++){(0,e[n])()}return t}return l({type:S.INIT}),(r={dispatch:l,subscribe:d,getState:s,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");o=t,l({type:S.INIT})}})[x.a]=function(){var t,e=d;return(t={subscribe:function(t){if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(s())}return n(),{unsubscribe:e(n)}}})[x.a]=function(){return this},t},r}function I(t,e){var n=e&&e.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function A(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var o=e[r];0,"function"==typeof t[o]&&(n[o]=t[o])}var i=Object.keys(n);var u=void 0;try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:S.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+S.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){u=t}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(u)throw u;for(var r=!1,o={},c=0;c<i.length;c++){var a=i[c],f=n[a],s=t[a],d=f(s,e);if(void 0===d){var l=I(a,e);throw new Error(l)}o[a]=d,r=r||d!==s}return r?o:t}}function R(t,e){return function(){return e(t.apply(void 0,arguments))}}function N(t,e){if("function"==typeof t)return R(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),r={},o=0;o<n.length;o++){var i=n[o],u=t[i];"function"==typeof u&&(r[i]=R(u,e))}return r}function C(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}var F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function M(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var i,u=t(n,r,o),c=u.dispatch,a={getState:u.getState,dispatch:function(t){return c(t)}};return i=e.map(function(t){return t(a)}),c=C.apply(void 0,i)(u.dispatch),F({},u,{dispatch:c})}}}n.d(e,"createStore",function(){return _}),n.d(e,"combineReducers",function(){return A}),n.d(e,"bindActionCreators",function(){return N}),n.d(e,"applyMiddleware",function(){return M}),n.d(e,"compose",function(){return C})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CREATE_POST="CREATE_POST",e.EDIT_POST="EDIT_POST",e.SET_FILTER="SET_FILTER"},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(2);function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var u=(0,n(1).combineReducers)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];switch(e.type){case o.CREATE_POST:e.type;var n=i(e,["type"]);return[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t),[n]);case o.EDIT_POST:e.type,e.id;var u=i(e,["type","id"]);return t.map(function(t,n){return e.id===n?r({},t,u):t});default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments[1];return e.type===o.SET_FILTER?e.filter:t}});e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setFilter=e.editPost=e.createPost=void 0;var r=n(2);e.createPost=function(t,e){return{type:r.CREATE_POST,user:t,text:e}},e.editPost=function(t,e){return{type:r.EDIT_POST,id:t,text:e}},e.setFilter=function(t){return{type:r.SET_FILTER,filter:t}}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";var r,o=n(1),i=n(6),u=n(5),c=(r=u)&&r.__esModule?r:{default:r};var a=(0,o.createStore)(c.default),f=document.getElementById("root");a.subscribe(function(){f.innerHTML="",a.getState().posts.forEach(function(t){var e=document.createElement("li"),n=document.createTextNode(t.user+" - "+t.text);e.appendChild(n),f.appendChild(e)})});a.dispatch((0,i.createPost)("dan","hello world")),a.dispatch((0,i.createPost)("des","second post"))},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(3))}]);