# [@fav/prop.enum-all-symbols][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Lists enumerable own and inherited property symbols of an object.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.enum-all-symbols
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.enum-all-symbols/` directory manually.*


## Usage

For Node.js:

```js
var enumAllSymbols = require('@fav/prop.enum-all-symbols');

var symbol = Symbol('foo');
var obj0 = {}, obj1 = {}, obj2 = {};

obj0[symbol] = 123;
enumAllSymbols(obj0); // => [ Symbol(foo) ]

Object.defineProperty(obj1, symbol, { value: 1 });
enumAllSymbols(obj1); // => []

var Fn2 = function() {}
Fn2.prototype = obj0;
var fn2 = new Fn2();
fn2[symbol]; // => 123
enumAllSymbols(fn2); // => [ Symbol(foo) ]
```

For Web browsers:

```html
<script src="fav.prop.enum-all-keys.min.js"></script>
<script>
var enumAllSymbols = fav.prop.enumAllSymbols;
var symbol = Symbol('foo');

obj0[symbol] = 123;
enumAllSymbols(obj0); // => [ Symbol(foo) ]
</script>
```


## API

### <u>enumAllSymbols(obj) : Array</u>

Lists enumerable own and inherited property symbols of the given object.

This function returns same result with `Object.getOwnPropertySymbols` except that it returns an empty object when the argument is nullish. 

#### Parameter:

| Parameter |  Type  | Description                                   |
|-----------|:------:|-----------------------------------------------|
| *obj*     | object | The object to be listed its property symbols. |

#### Return:

An array of property symbols.

**Type:** Array


## Checked                                                                      

### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.enum-all-symbols/
[npm-img]: https://img.shields.io/badge/npm-v0.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.enum-all-symbols
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.enum-all-symbols.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.enum-all-symbols
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.enum-all-symbols?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-enum-all-symbols
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.enum-all-symbols/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.enum-all-symbols?branch=master
