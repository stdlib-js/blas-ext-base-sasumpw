"use strict";var j=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var E=j(function(P,_){
var v=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-special-floor/dist'),e=require('@stdlib/math-base-special-absf/dist'),Z=128;function l(n,r,u,M){var a,q,i,p,m,c,y,t,w,R,o,s,f;if(n<=0)return 0;if(a=M,u===0)return v(n*e(r[a]));if(n<8){for(o=0,f=0;f<n;f++)o=v(o+e(r[a])),a+=u;return o}if(n<=Z){for(q=e(r[a]),i=e(r[a+u]),p=e(r[a+2*u]),m=e(r[a+3*u]),c=e(r[a+4*u]),y=e(r[a+5*u]),t=e(r[a+6*u]),w=e(r[a+7*u]),a+=8*u,R=n%8,f=8;f<n-R;f+=8)q=v(q+e(r[a])),i=v(i+e(r[a+u])),p=v(p+e(r[a+2*u])),m=v(m+e(r[a+3*u])),c=v(c+e(r[a+4*u])),y=v(y+e(r[a+5*u])),t=v(t+e(r[a+6*u])),w=v(w+e(r[a+7*u])),a+=8*u;for(o=v(v(v(q+i)+v(p+m))+v(v(c+y)+v(t+w))),f;f<n;f++)o=v(o+e(r[a])),a+=u;return o}return s=S(n/2),s-=s%8,v(l(s,r,u,a)+l(n-s,r,u,a+s*u))}_.exports=l
});var B=j(function(Q,b){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=E();function k(n,r,u){return h(n,r,u,g(n,u))}b.exports=k
});var K=j(function(T,I){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),A=E();z(C,"ndarray",A);I.exports=C
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=K(),O,L=F(D(__dirname,"./native.js"));G(L)?O=H:O=L;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
