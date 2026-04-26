"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=a(function(_,v){
var R=require('@stdlib/assert-is-plain-object/dist'),s=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/assert-is-boolean/dist').isPrimitive,q=require('@stdlib/assert-is-string/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function b(e,r){return R(r)?s(r,"flags")&&(e.flags=r.flags,!q(e.flags))?new TypeError(u('0sB2W',"flags",e.flags)):s(r,"capture")&&(e.capture=r.capture,!P(e.capture))?new TypeError(u('0sB2o',"capture",e.capture)):null:new TypeError(u('0sB2V',r));}v.exports=b
});var i=a(function(h,c){
var G=l(),E="[-+]{0,1}[0-9]*\\.[0-9]+";function w(e){var r,t;if(arguments.length>0){if(r={},t=G(r,e),t)throw t;return r.capture?new RegExp("("+E+")",r.flags):new RegExp(E,r.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}c.exports=w
});var p=a(function(A,f){
var x=i(),T=x({capture:!0});f.exports=T
});var m=a(function(C,g){
var X=i(),d=X();g.exports=d
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=i(),O=p(),y=m();o(n,"REGEXP",y);o(n,"REGEXP_CAPTURE",O);module.exports=n;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
