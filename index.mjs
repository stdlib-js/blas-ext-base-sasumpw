// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";var s=128;function i(r,o,a,f){var d,m,l,u,p,j,v,b,h,c,x,g,y;if(r<=0)return 0;if(1===r||0===a)return t(o[f]);if(d=f,r<8){for(x=0,y=0;y<r;y++)x=e(x+t(o[d])),d+=a;return x}if(r<=s){for(m=t(o[d]),l=t(o[d+a]),u=t(o[d+2*a]),p=t(o[d+3*a]),j=t(o[d+4*a]),v=t(o[d+5*a]),b=t(o[d+6*a]),h=t(o[d+7*a]),d+=8*a,c=r%8,y=8;y<r-c;y+=8)m=e(m+t(o[d])),l=e(l+t(o[d+a])),u=e(u+t(o[d+2*a])),p=e(p+t(o[d+3*a])),j=e(j+t(o[d+4*a])),v=e(v+t(o[d+5*a])),b=e(b+t(o[d+6*a])),h=e(h+t(o[d+7*a])),d+=8*a;for(x=e(e(e(m+l)+e(u+p))+e(e(j+v)+e(b+h)));y<r;y++)x=e(x+t(o[d])),d+=a;return x}return g=n(r/2),e(i(g-=g%8,o,a,d)+i(r-g,o,a,d+g*a))}function o(r,n,s){var o,a,f;if(r<=0)return 0;if(1===r||0===s)return t(n[0]);if(o=s<0?(1-r)*s:0,r<8){for(a=0,f=0;f<r;f++)a=e(a+t(n[o])),o+=s;return a}return i(r,n,s,o)}r(o,"ndarray",i);export{o as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
