// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function p(e,p){return s(p)?r(p,"flags")&&(e.flags=p.flags,!n(e.flags))?new TypeError(i("0Qz2i","flags",e.flags)):r(p,"capture")&&(e.capture=p.capture,!t(e.capture))?new TypeError(i("0Qz30","capture",e.capture)):null:new TypeError(i("0Qz2h",p))}var a="[-+]{0,1}[0-9]*\\.[0-9]+";function o(e){var s,r;if(arguments.length>0){if(r=p(s={},e))throw r;return s.capture?new RegExp("("+a+")",s.flags):new RegExp(a,s.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var l=o({capture:!0}),d=o();e(o,"REGEXP",d),e(o,"REGEXP_CAPTURE",l);export{d as REGEXP,l as REGEXP_CAPTURE,o as default};
//# sourceMappingURL=index.mjs.map
