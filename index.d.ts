/**
Returns a regex that matches all invalid characters.

@example
```
import filenameReservedRegex from 'filename-reserved-regex';

filenameReservedRegex().test('foo/bar');
//=> true

filenameReservedRegex().test('foo-bar');
//=> false

'foo/bar'.replace(filenameReservedRegex(), '!');
//=> 'foo!bar'
```
*/
export default function filenameReservedRegex(): RegExp;

/**
Returns an exact-match case-insensitive regex that matches reserved Windows device names.

These include `CON`, `PRN`, `AUX`, `NUL`, `CONIN$`, `CONOUT$`, `COM1` through `COM9`, `COM¹`, `COM²`, `COM³`, `LPT1` through `LPT9`, `LPT¹`, `LPT²`, and `LPT³`. `COM0` and `LPT0` are conservatively matched for compatibility with previous versions.

Names followed by an extension are also matched because, for example, `NUL.txt` and `NUL.tar.gz` are both equivalent to `NUL`. ASCII spaces before the extension or at the end of the name are ignored in the same way as on Windows.

@example
```
import {windowsReservedNameRegex} from 'filename-reserved-regex';

windowsReservedNameRegex().test('aux');
//=> true
```
*/
export function windowsReservedNameRegex(): RegExp;
