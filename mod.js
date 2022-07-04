// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t};var a=e;function y(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[_],u=_,r=null!=(o=t)&&d.call(o,u);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var g=b();function m(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function h(t){return p(t)||m(t)}function S(){return new Function("return this;")()}y(h,"isPrimitive",p),y(h,"isObject",m);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof E?E:null;var P=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(O)return O;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),T=P.document&&P.document.childNodes,x=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;y(V,"REGEXP",k);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function F(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=k.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F));var L="function"==typeof t||"object"==typeof x||"function"==typeof T?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};var M=/^(?:\([^)]*\) *|[^=]*)=>/,I=Function.prototype.toString;function N(t){var r;return!!function(t){return"function"===L(t)}(t)&&(r=I.call(t),M.test(r))}export{N as default};
//# sourceMappingURL=mod.js.map
