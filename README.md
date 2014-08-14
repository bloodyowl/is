# is

[![browser support](https://ci.testling.com/bloodyowl/is.png)](https://ci.testling.com/bloodyowl/is)

[![Build Status](https://travis-ci.org/bloodyowl/is.svg)](https://travis-ci.org/bloodyowl/is)

`Object.is`-like function.

[ES6 Spec - 19.1.2.10](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is)

## install

```sh
$ npm install bloody-is
```

## require

```javascript
var is = require("bloody-is")
```

## api

### is(val1, val2) > boolean

like a `===` comparison with the exception that :

- comparing `NaN` with `NaN` will return `true`.
- comparing `+0` with `-0` will return `false`

## example

```javascript
is(NaN, NaN) // true
is(+0, -0)  // false
is("foo", "foo") // true
is({}, {}) // false
```
