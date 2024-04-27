"use strict";var j=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var E=j(function(P,R){
var n=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-special-floor/dist'),e=require('@stdlib/math-base-special-abs/dist'),S=128;function b(v,r,u,f){var a,i,p,l,m,c,t,w,y,O,q,s,o;if(v<=0)return 0;if(v===1||u===0)return e(r[f]);if(a=f,v<8){for(q=0,o=0;o<v;o++)q=n(q+e(r[a])),a+=u;return q}if(v<=S){for(i=e(r[a]),p=e(r[a+u]),l=e(r[a+2*u]),m=e(r[a+3*u]),c=e(r[a+4*u]),t=e(r[a+5*u]),w=e(r[a+6*u]),y=e(r[a+7*u]),a+=8*u,O=v%8,o=8;o<v-O;o+=8)i=n(i+e(r[a])),p=n(p+e(r[a+u])),l=n(l+e(r[a+2*u])),m=n(m+e(r[a+3*u])),c=n(c+e(r[a+4*u])),t=n(t+e(r[a+5*u])),w=n(w+e(r[a+6*u])),y=n(y+e(r[a+7*u])),a+=8*u;for(q=n(n(n(i+p)+n(l+m))+n(n(c+t)+n(w+y))),o;o<v;o++)q=n(q+e(r[a])),a+=u;return q}return s=M(v/2),s-=s%8,n(b(s,r,u,a)+b(v-s,r,u,a+s*u))}R.exports=b
});var B=j(function(Q,_){
var Z=require('@stdlib/number-float64-base-to-float32/dist'),T=require('@stdlib/math-base-special-abs/dist'),g=E();function h(v,r,u){var f,a,i;if(v<=0)return 0;if(v===1||u===0)return T(r[0]);if(u<0?f=(1-v)*u:f=0,v<8){for(a=0,i=0;i<v;i++)a=Z(a+T(r[f])),f+=u;return a}return g(v,r,u,f)}_.exports=h
});var K=j(function(U,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=E();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=K(),F,L=D(A(__dirname,"./native.js"));G(L)?F=H:F=L;module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
