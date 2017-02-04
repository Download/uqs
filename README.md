# uqs

[![Greenkeeper badge](https://badges.greenkeeper.io/Download/uqs.svg)](https://greenkeeper.io/)
Microscopically small querystring parser/stringifier

[![npm](https://img.shields.io/npm/v/uqs.svg)](https://npmjs.com/package/uqs)
[![license](https://img.shields.io/npm/l/uqs.svg)](https://creativecommons.org/licenses/by/4.0/)
[![travis](https://img.shields.io/travis/Download/uqs.svg)](https://travis-ci.org/Download/uqs)
[![greenkeeper](https://img.shields.io/david/Download/uqs.svg)](https://greenkeeper.io/)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)

<sup><sub><sup><sub>.</sub></sup></sub></sup>

uqs is a microscopically small universal querystring parser/stringifier.

## Install
```sh
npm install --save uqs
```

## require
```js
var QS = require('uqs')
```

## import
```js
import QS from 'uqs'
```

## use
```js
var params = QS.parse(location.search)
// or the other way around
var qs = QS.stringify({my:'querystring', arguments:2})
```

## why

Modern browsers make parsing URLs simple:

```js
var link = document.createElement('a')
link.href = 'https://example.com/some/path?they=did&forget=something'
console.info(link.protocol)  // >  'https:'
console.info(link.hostname)  // >  'example.com'
console.info(link.pathname)  // >  '/some/path'
```
You get the picture. So all is well... 

or not? There is this one thing they seemed to have forgotten:

```js
console.info(link.search)  // >  '?they=did&forget=something'  <== YUCK!
```

Darn it, now we *still* need to parse by hand!

### `uqs` to the resque!

uqs is a microscopically small *(< 1 kB minified and gzipped)* querystring parser 
and minifier that fills this exact gap the browser makers left us:

```js
var QS = require('uqs')
var params = QS.parse(link.search)
console.info(params)      // >  Object {they: "did", forget: "something"}
```

## Issues
Add an issue in this project's [issue tracker](https://github.com/download/uqs/issues)
to let me know of any problems you find, or questions you may have.

## Copyright
Copyright 2016 by [Stijn de Witt](http://StijnDeWitt.com). Some rights reserved.

## License
Licensed under the [Creative Commons Attribution 4.0 International (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/) Open Source license.
