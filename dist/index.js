"use strict";var j=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var E=j(function(P,_){
var v=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-special-floor/dist'),e=require('@stdlib/math-base-special-absf/dist'),Z=128;function l(n,r,a,M){var u,q,i,p,m,c,y,t,w,R,o,s,f;if(n<=0)return 0;if(u=M,a===0)return v(n*e(r[u]));if(n<8){for(o=0,f=0;f<n;f++)o=v(o+e(r[u])),u+=a;return o}if(n<=Z){for(q=e(r[u]),i=e(r[u+a]),p=e(r[u+2*a]),m=e(r[u+3*a]),c=e(r[u+4*a]),y=e(r[u+5*a]),t=e(r[u+6*a]),w=e(r[u+7*a]),u+=8*a,R=n%8,f=8;f<n-R;f+=8)q=v(q+e(r[u])),i=v(i+e(r[u+a])),p=v(p+e(r[u+2*a])),m=v(m+e(r[u+3*a])),c=v(c+e(r[u+4*a])),y=v(y+e(r[u+5*a])),t=v(t+e(r[u+6*a])),w=v(w+e(r[u+7*a])),u+=8*a;for(o=v(v(v(q+i)+v(p+m))+v(v(c+y)+v(t+w))),f;f<n;f++)o=v(o+e(r[u])),u+=a;return o}return s=S(n/2),s-=s%8,v(l(s,r,a,u)+l(n-s,r,a,u+s*a))}_.exports=l
});var B=j(function(Q,b){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=E();function k(n,r,a){return h(n,r,a,g(n,a))}b.exports=k
});var K=j(function(T,I){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),A=E();z(C,"ndarray",A);I.exports=C
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=K(),O,L=F(D(__dirname,"./native.js"));G(L)?O=H:O=L;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
