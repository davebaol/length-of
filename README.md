# length-of  [![Build Status](https://travis-ci.org/davebaol/length-of.svg?branch=master)](https://travis-ci.org/davebaol/length-of) [![dependencies Status](https://david-dm.org/davebaol/length-of/status.svg)](https://david-dm.org/davebaol/length-of) [![devDependencies Status](https://david-dm.org/davebaol/length-of/dev-status.svg)](https://david-dm.org/davebaol/length-of?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Get the length of its argument, i.e. the number of items of an array, characters of a string or properties of an object; undefined otherwise.

## Install with [npm](npmjs.org)

```bash
npm i length-of --save
```

## Usage

```js
var lengthOf = require('length-of');

lengthOf({a: 'a', b: 'b'});
//=> 2

lengthOf('length-of');
//=> 9

lengthOf(['foo', 'bar']);
//=> 2

lengthOf(123);
//=> undefined
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/davebaol/length-of/issues)

## Running tests
Install dev dependencies.

```bash
npm i -d && npm test
```

# License

MIT © Davide Sessi
