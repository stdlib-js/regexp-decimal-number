// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).reDecimalNumber={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=y()?function(t){var r,e,n;if(null==t)return b.call(t);e=t[g],r=d(t,g);try{t[g]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[g]=e:delete t[g],n}:function(t){return b.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var w=/./;function m(t){return"boolean"==typeof t}var h=Boolean.prototype.toString;var E=y();function O(t){return"object"==typeof t&&(t instanceof Boolean||(E?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function P(t){return m(t)||O(t)}function S(){return new Function("return this;")()}p(P,"isPrimitive",m),p(P,"isObject",O);var T="object"==typeof self?self:null,A="object"==typeof window?window:null,R="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof R?R:null;var B=function(t){if(arguments.length){if(!m(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(T)return T;if(A)return A;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),G=B.document&&B.document.childNodes,C=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;function U(t){return null!==t&&"object"==typeof t}function V(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return U(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(X,"REGEXP",F),p(U,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(U));var k="function"==typeof w||"object"==typeof C||"function"==typeof G?function(t){return V(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?V(t).toLowerCase():r};function z(t){return"function"===k(t)}var L,M=Object.getPrototypeOf;L=z(Object.getPrototypeOf)?M:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Q=L;var I=Object.prototype;function N(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Q(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&z(r.constructor)&&"[object Function]"===j(r.constructor)&&d(r,"isPrototypeOf")&&z(r.isPrototypeOf)&&(r===I||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function D(t){return"string"==typeof t}var q=String.prototype.valueOf;var H=y();function J(t){return"object"==typeof t&&(t instanceof String||(H?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function K(t){return D(t)||J(t)}function W(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function Y(t,r){return N(r)?d(r,"flags")&&(t.flags=r.flags,!D(t.flags))?new TypeError(W("0Qz2i","flags",t.flags)):d(r,"capture")&&(t.capture=r.capture,!m(t.capture))?new TypeError(W("0Qz30","capture",t.capture)):null:new TypeError(W("0Qz2h",r))}p(K,"isPrimitive",D),p(K,"isObject",J);var Z="[-+]{0,1}[0-9]*\\.[0-9]+";function $(t){var r,e;if(arguments.length>0){if(e=Y(r={},t))throw e;return r.capture?new RegExp("("+Z+")",r.flags):new RegExp(Z,r.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var tt=$({capture:!0}),rt=$();p($,"REGEXP",rt),p($,"REGEXP_CAPTURE",tt),t.REGEXP=rt,t.REGEXP_CAPTURE=tt,t.default=$,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
