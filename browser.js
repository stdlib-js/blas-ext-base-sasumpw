// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,i=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(t,r)||i.call(t,r)?(f=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=f):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,e.get),p&&l&&l.call(t,r,e.set),t};var f,c=t,y="function"==typeof Math.fround?Math.fround:null,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";f=p&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,o,n,a;if(null==t)return b.call(t);e=t[_],a=_,r=null!=(n=t)&&d.call(n,a);try{t[_]=void 0}catch(r){return b.call(t)}return o=b.call(t),r?t[_]=e:delete t[_],o}:function(t){return b.call(t)};var s,m=f,v="function"==typeof Float32Array,h=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,j="function"==typeof Float32Array?Float32Array:void 0;s=function(){var t,r,e;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,5e40]),e=r,t=(v&&e instanceof Float32Array||"[object Float32Array]"===m(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===h}catch(r){t=!1}return t}()?j:function(){throw new Error("not implemented")};var w=new s(1),S="function"==typeof y?y:function(t){return w[0]=t,w[0]};function A(t){return Math.abs(t)}var F=Math.floor;function O(t,r,e,o){var n,a,l,u,i,f,c,y,p,b,d,_,s;if(t<=0)return 0;if(1===t||0===e)return A(r[o]);if(n=o,t<8){for(d=0,s=0;s<t;s++)d=S(d+A(r[n])),n+=e;return d}if(t<=128){for(a=A(r[n]),l=A(r[n+e]),u=A(r[n+2*e]),i=A(r[n+3*e]),f=A(r[n+4*e]),c=A(r[n+5*e]),y=A(r[n+6*e]),p=A(r[n+7*e]),n+=8*e,b=t%8,s=8;s<t-b;s+=8)a=S(a+A(r[n])),l=S(l+A(r[n+e])),u=S(u+A(r[n+2*e])),i=S(i+A(r[n+3*e])),f=S(f+A(r[n+4*e])),c=S(c+A(r[n+5*e])),y=S(y+A(r[n+6*e])),p=S(p+A(r[n+7*e])),n+=8*e;for(d=S(S(S(a+l)+S(u+i))+S(S(f+c)+S(y+p)));s<t;s++)d=S(d+A(r[n])),n+=e;return d}return _=F(t/2),S(O(_-=_%8,r,e,n)+O(t-_,r,e,n+_*e))}function T(t,r,e){var o,n,a;if(t<=0)return 0;if(1===t||0===e)return A(r[0]);if(o=e<0?(1-t)*e:0,t<8){for(n=0,a=0;a<t;a++)n=S(n+A(r[o])),o+=e;return n}return O(t,r,e,o)}return c(T,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:O}),T},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).sasumpw=r();
//# sourceMappingURL=browser.js.map