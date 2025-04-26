"use strict";var w=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var E=w(function(J,_){
var v=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-special-floor/dist'),e=require('@stdlib/math-base-special-absf/dist'),S=128;function j(n,r,u,L){var a,q,i,p,m,c,t,l,y,R,f,s,o;if(n<=0)return 0;if(a=L,u===0)return v(n*e(r[a]));if(n<8){for(f=0,o=0;o<n;o++)f=v(f+e(r[a])),a+=u;return f}if(n<=S){for(q=e(r[a]),i=e(r[a+u]),p=e(r[a+2*u]),m=e(r[a+3*u]),c=e(r[a+4*u]),t=e(r[a+5*u]),l=e(r[a+6*u]),y=e(r[a+7*u]),a+=8*u,R=n%8,o=8;o<n-R;o+=8)q=v(q+e(r[a])),i=v(i+e(r[a+u])),p=v(p+e(r[a+2*u])),m=v(m+e(r[a+3*u])),c=v(c+e(r[a+4*u])),t=v(t+e(r[a+5*u])),l=v(l+e(r[a+6*u])),y=v(y+e(r[a+7*u])),a+=8*u;for(f=v(v(v(q+i)+v(p+m))+v(v(c+t)+v(l+y))),o;o<n;o++)f=v(f+e(r[a])),a+=u;return f}return s=M(n/2),s-=s%8,v(j(s,r,u,a)+j(n-s,r,u,a+s*u))}_.exports=j
});var B=w(function(P,b){
var T=require('@stdlib/strided-base-stride2offset/dist'),Z=E();function g(n,r,u){return Z(n,r,u,T(n,u))}b.exports=g
});var I=w(function(Q,F){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),k=E();h(C,"ndarray",k);F.exports=C
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=I(),O,K=A(z(__dirname,"./native.js"));D(K)?O=G:O=K;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
