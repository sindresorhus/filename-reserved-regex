import test from 'ava';
import filenameReservedRegex, {windowsReservedNameRegex} from './index.js';

test('main', t => {
	t.regex('foo/bar', filenameReservedRegex());
	t.regex('foo\u0000bar', filenameReservedRegex());
	t.regex('foo\u001Fbar', filenameReservedRegex());
	t.regex('foo*bar', filenameReservedRegex());
	t.regex(String.raw`foo\bar`, filenameReservedRegex());
	t.regex('foo:bar', filenameReservedRegex());
	t.notRegex('foo-bar', filenameReservedRegex());

	t.notRegex('AUX', filenameReservedRegex());
	t.regex('AUX', windowsReservedNameRegex());

	t.notRegex('com1', filenameReservedRegex());
	t.regex('com1', windowsReservedNameRegex());
	t.regex('COM0', windowsReservedNameRegex());
	t.regex('LPT0', windowsReservedNameRegex());
	t.regex('COM¹.txt', windowsReservedNameRegex());
	t.regex('NUL.tar.gz', windowsReservedNameRegex());
	t.regex('CON .txt', windowsReservedNameRegex());
	t.regex('CON ', windowsReservedNameRegex());
	t.regex('LPT³ .txt', windowsReservedNameRegex());
	t.regex('CONIN$.txt', windowsReservedNameRegex());
	t.regex('conout$', windowsReservedNameRegex());
	t.notRegex('COM', windowsReservedNameRegex());
	t.notRegex('COM10', windowsReservedNameRegex());
	t.notRegex('CONIN.txt', windowsReservedNameRegex());
	t.notRegex('CONSOLE.txt', windowsReservedNameRegex());
	t.notRegex(' CON.txt', windowsReservedNameRegex());

	// Windows trailing space and period restrictions
	t.regex('file ', filenameReservedRegex());
	t.regex('test.', filenameReservedRegex());
	t.regex('name  ', filenameReservedRegex());
	t.regex('name..', filenameReservedRegex());
	t.notRegex('file.txt', filenameReservedRegex());
	t.notRegex('my file', filenameReservedRegex());
	t.notRegex('.gitignore', filenameReservedRegex());
});
