<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reDecimalNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][mdn-regexp] to match a decimal number.

<section class="installation">

## Installation

```bash
npm install @stdlib/regexp-decimal-number
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var reDecimalNumber = require( '@stdlib/regexp-decimal-number' );
```

#### reDecimalNumber( \[options] )

Returns a [regular expression][mdn-regexp] to match a decimal number. 

```javascript
var RE_DECIMAL_NUMBER = reDecimalNumber();

var out = RE_DECIMAL_NUMBER.test( 'foo 1.234.' );
// returns true

out = RE_DECIMAL_NUMBER.test( '2:3' );
// returns false
```

The function accepts an `options` object with optional properties:

-   **flags**: `string` specifying regular expression [flags][mdn-regexp-flags]. Default: `''`.
-   **capture**: `boolean` indicating whether to create a capture group for the match. Default: `false`.

By default, the function returns a regular expression which does not have any flags specified. To specify [flags][mdn-regexp-flags], set the `flags` option with a list of flags (which may be in any order).

```javascript
var replace = require( '@stdlib/string-replace' );

var RE_DECIMAL_NUMBER = reDecimalNumber({
    'flags': 'g'
});

var str = 'beep 1.234 boop 1.234';
var out = replace( str, RE_DECIMAL_NUMBER, '' );
// returns 'beep  boop '
```

By default, the function returns a regular expression which does not capture the part of a string matching the regular expression. To capture matches, set the `capture` option.

```javascript
var RE_DECIMAL_NUMBER = reDecimalNumber({
    'capture': true
});

var out = RE_DECIMAL_NUMBER.exec( 'beep 1.234 boop' ).slice();
// returns [ '1.234', '1.234' ]

out = RE_DECIMAL_NUMBER.exec( '' );
// returns null
```

#### reDecimalNumber.REGEXP

[Regular expression][mdn-regexp] to match a decimal number. 

```javascript
var bool = reDecimalNumber.REGEXP.test( '2:3' );
// returns false
```

#### reDecimalNumber.REGEXP_CAPTURE

[Regular expression][mdn-regexp] to capture characters matching a decimal number. 

```javascript
var parts = reDecimalNumber.REGEXP_CAPTURE.exec( '1.234' );
// returns [ '1.234', '1.234' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A leading digit is not required.

    ```javascript
    var bool = reDecimalNumber.REGEXP.test( '.5' );
    // returns true
    ```

-   A decimal point and at least one trailing digit is required.

    ```javascript
    var bool = reDecimalNumber.REGEXP.test( '5.' );
    // returns false
    ```

-   The `REGEXP` regular expression is defined as 

    ```text
    /[-+]{0,1}[0-9]*\.[0-9]+/
    ```

-   The `REGEXP_CAPTURE` regular expression is defined as 

    ```text
    /([-+]{0,1}[0-9]*\.[0-9]+)/
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reDecimalNumber = require( '@stdlib/regexp-decimal-number' );

var RE_DECIMAL_NUMBER = reDecimalNumber();

var bool = RE_DECIMAL_NUMBER.test( '1.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'beep 1.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234 boop' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'foo 1.234.' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'foo 1.234.567.890' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234!' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '0.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'beep .234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '.234 boop' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '-1.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '+1.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '0.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234:' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234%' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '0' );
// returns false

bool = RE_DECIMAL_NUMBER.test( 'beep 0' );
// returns false

bool = RE_DECIMAL_NUMBER.test( '2:3' );
// returns false

bool = RE_DECIMAL_NUMBER.test( 'beep' );
// returns false

bool = RE_DECIMAL_NUMBER.test( '' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-decimal-number.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-decimal-number

[test-image]: https://github.com/stdlib-js/regexp-decimal-number/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-decimal-number/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-decimal-number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-decimal-number?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-decimal-number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-decimal-number/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-decimal-number/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp-decimal-number/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp-decimal-number/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp-decimal-number/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp-decimal-number/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp-decimal-number/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp-decimal-number/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-decimal-number/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-regexp-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2

</section>

<!-- /.links -->
