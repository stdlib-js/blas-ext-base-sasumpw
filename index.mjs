// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.2-esm/index.mjs";var i=128;function d(e,r,o,m){var a,f,l,j,p,b,h,u,v,c,x,g,y;if(e<=0)return 0;if(a=m,0===o)return t(e*n(r[a]));if(e<8){for(x=0,y=0;y<e;y++)x=t(x+n(r[a])),a+=o;return x}if(e<=i){for(f=n(r[a]),l=n(r[a+o]),j=n(r[a+2*o]),p=n(r[a+3*o]),b=n(r[a+4*o]),h=n(r[a+5*o]),u=n(r[a+6*o]),v=n(r[a+7*o]),a+=8*o,c=e%8,y=8;y<e-c;y+=8)f=t(f+n(r[a])),l=t(l+n(r[a+o])),j=t(j+n(r[a+2*o])),p=t(p+n(r[a+3*o])),b=t(b+n(r[a+4*o])),h=t(h+n(r[a+5*o])),u=t(u+n(r[a+6*o])),v=t(v+n(r[a+7*o])),a+=8*o;for(x=t(t(t(f+l)+t(j+p))+t(t(b+h)+t(u+v)));y<e;y++)x=t(x+n(r[a])),a+=o;return x}return g=s(e/2),t(d(g-=g%8,r,o,a)+d(e-g,r,o,a+g*o))}function o(e,t,s){return d(e,t,s,r(e,s))}e(o,"ndarray",d);export{o as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
