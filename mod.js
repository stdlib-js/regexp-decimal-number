// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,h,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,E=isNaN,_=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,u,s,l,f,p,g,d,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",s+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){var e,t;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var A,V=Object.prototype,R=V.toString,F=V.__defineGetter__,C=V.__defineSetter__,B=V.__lookupGetter__,I=V.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(r,e)||I.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var $=A;function G(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&X.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0,N="function"==typeof M?M.toStringTag:"";var z=U()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[N],e=Z(r,N);try{r[N]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[N]=t:delete r[N],n}:function(r){return W.call(r)};var q=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};var D=/./;function H(r){return"boolean"==typeof r}var J=Boolean,K=Boolean.prototype.toString;var Q=U();function Y(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function rr(r){return H(r)||Y(r)}G(rr,"isPrimitive",H),G(rr,"isObject",Y);var er="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},or="object"==typeof nr?nr:null,ir="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!H(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(er)return er;if(tr)return tr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var lr=/^\s*function\s*([^(]*)/i;function fr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(sr,"REGEXP",lr),G(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var gr="function"==typeof D||"object"==typeof ur||"function"==typeof cr?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function dr(r){return"function"===gr(r)}var yr,br=Object,hr=Object.getPrototypeOf;yr=dr(Object.getPrototypeOf)?hr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var vr=yr;var wr=Object.prototype;function mr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!q(r)}(r)&&(e=function(r){return null==r?null:(r=br(r),vr(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&dr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&dr(e.isPrototypeOf)&&(e===wr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function jr(r){return"string"==typeof r}var Er=String.prototype.valueOf;var _r=U();function Sr(r){return"object"==typeof r&&(r instanceof String||(_r?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function Or(r){return jr(r)||Sr(r)}function xr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}G(Or,"isPrimitive",jr),G(Or,"isObject",Sr);var kr="[-+]{0,1}[0-9]*\\.[0-9]+";function Tr(r){var e,t;if(arguments.length>0){if(t=function(r,e){return mr(e)?Z(e,"flags")&&(r.flags=e.flags,!jr(r.flags))?new TypeError(xr("0sB2W","flags",r.flags)):Z(e,"capture")&&(r.capture=e.capture,!H(r.capture))?new TypeError(xr("0sB2o","capture",r.capture)):null:new TypeError(xr("0sB2V",e))}(e={},r),t)throw t;return e.capture?new RegExp("("+kr+")",e.flags):new RegExp(kr,e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var Pr=Tr({capture:!0}),Ar=Tr();G(Tr,"REGEXP",Ar),G(Tr,"REGEXP_CAPTURE",Pr);export{Ar as REGEXP,Pr as REGEXP_CAPTURE,Tr as default};
//# sourceMappingURL=mod.js.map
