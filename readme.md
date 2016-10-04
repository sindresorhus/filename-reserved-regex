# filename-reserved-regex [![Build Status](https://travis-ci.org/sindresorhus/filename-reserved-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/filename-reserved-regex)

> Regular expression for matching reserved filename characters

On Unix-like systems `/` is reserved and [`<>:"/\|?*`](http://msdn.microsoft.com/en-us/library/aa365247%28VS.85%29#naming_conventions) as well as non-printable characters `\x00-\x1F` on Windows.


## Install

```
$ npm install --save filename-reserved-regex
```


## Usage

```js
const filenameReservedRegex = require('filename-reserved-regex');

filenameReservedRegex().test('foo/bar');
//=> true

filenameReservedRegex().test('foo-bar');
//=> false

'foo/bar'.replace(filenameReservedRegex(), '!');
//=> 'foo!bar'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
