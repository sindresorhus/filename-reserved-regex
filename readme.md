# filename-reserved-regex [![Build Status](https://travis-ci.com/sindresorhus/filename-reserved-regex.svg?branch=master)](https://travis-ci.com/sindresorhus/filename-reserved-regex)

> Regular expression for matching reserved filename characters

On Unix-like systems `/` is reserved and [`<>:"/\|?*`](https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions) as well as non-printable characters `\u0000-\u001F` on Windows.


## Install

```
$ npm install filename-reserved-regex
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

filenameReservedRegex.windowsNames().test('aux');
//=> true
```

## API

### filenameReservedRegex()

Returns a regex that matches all invalid characters.

### filenameReservedRegex.windowsNames()

Returns an exact-match case-insensitive regex that matches invalid Windows
filenames. These include `CON`, `PRN`, `AUX`, `NUL`, `COM1`, `COM2`, `COM3`, `COM4`, `COM5`,
`COM6`, `COM7`, `COM8`, `COM9`, `LPT1`, `LPT2`, `LPT3`, `LPT4`, `LPT5`, `LPT6`, `LPT7`, `LPT8`
and `LPT9`.
