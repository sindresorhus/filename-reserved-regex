# filename-reserved-regex

> Regular expression for matching reserved filename characters

On Unix-like systems `/` is reserved and [`<>:"/\|?*`](https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions) as well as non-printable characters `\u0000-\u001F` on Windows. Windows also doesn't allow names ending in space or period.

## Install

```sh
npm install filename-reserved-regex
```

## Usage

```js
import filenameReservedRegex, {windowsReservedNameRegex} from 'filename-reserved-regex';

filenameReservedRegex().test('foo/bar');
//=> true

filenameReservedRegex().test('foo-bar');
//=> false

'foo/bar'.replace(filenameReservedRegex(), '!');
//=> 'foo!bar'

windowsReservedNameRegex().test('aux');
//=> true
```

## API

### filenameReservedRegex()

Returns a regex that matches all invalid characters.

### windowsReservedNameRegex()

Returns an exact-match case-insensitive regex that matches reserved Windows device names.

These include `CON`, `PRN`, `AUX`, `NUL`, `CONIN$`, `CONOUT$`, `COM1` through `COM9`, `COM¹`, `COM²`, `COM³`, `LPT1` through `LPT9`, `LPT¹`, `LPT²`, and `LPT³`. `COM0` and `LPT0` are conservatively matched for compatibility with previous versions.

Names followed by an extension are also matched because, for example, `NUL.txt` and `NUL.tar.gz` are both equivalent to `NUL`. ASCII spaces before the extension or at the end of the name are ignored in the same way as on Windows.
