<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sasumpw

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of absolute values ([_L1_ norm][l1norm]) of single-precision floating-point strided array elements using pairwise summation.

<section class="intro">

The [_L1_ norm][l1norm] is defined as

<!-- <equation class="equation" label="eq:l1norm" align="center" raw="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" alt="L1 norm definition."> -->

<div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" data-equation="eq:l1norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@a230d54328acdaee1e2e456106e5b5c1cfd62b18/lib/node_modules/@stdlib/blas/ext/base/sasumpw/docs/img/equation_l1norm.svg" alt="L1 norm definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import sasumpw from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sasumpw@deno/mod.js';
```

#### sasumpw( N, x, stride )

Computes the sum of absolute values ([_L1_ norm][l1norm]) of single-precision floating-point strided array elements using pairwise summation.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = sasumpw( N, x, 1 );
// returns 5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the sum of absolute values of every other element in `x`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = sasumpw( N, x, 2 );
// returns 9.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = sasumpw( N, x1, 2 );
// returns 9.0
```

#### sasumpw.ndarray( N, x, stride, offset )

Computes the sum of absolute values ([_L1_ norm][l1norm]) of single-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = sasumpw.ndarray( N, x, 1, 0 );
// returns 5.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of absolute values of every other value in `x` starting from the second value

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = sasumpw.ndarray( N, x, 2, 1 );
// returns 9.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import sasumpw from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sasumpw@deno/mod.js';

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*100.0 );
}
console.log( x );

var v = sasumpw( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/sasum`][@stdlib/blas/base/sasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dasumpw`][@stdlib/blas/ext/base/dasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (L1 norm) of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gasumpw`][@stdlib/blas/ext/base/gasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (L1 norm) of strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssumpw`][@stdlib/blas/ext/base/ssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sasumpw.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sasumpw

[test-image]: https://github.com/stdlib-js/blas-ext-base-sasumpw/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/blas-ext-base-sasumpw/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sasumpw/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sasumpw?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sasumpw.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sasumpw/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sasumpw/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sasumpw/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sasumpw/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sasumpw/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sasumpw/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[l1norm]: http://en.wikipedia.org/wiki/Norm_%28mathematics%29

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas-base-sasum/tree/deno

[@stdlib/blas/ext/base/dasumpw]: https://github.com/stdlib-js/blas-ext-base-dasumpw/tree/deno

[@stdlib/blas/ext/base/gasumpw]: https://github.com/stdlib-js/blas-ext-base-gasumpw/tree/deno

[@stdlib/blas/ext/base/ssumpw]: https://github.com/stdlib-js/blas-ext-base-ssumpw/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
