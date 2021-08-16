import test from 'ava';
import filenameReservedRegex, {windowsReservedNameRegex} from './index.js';

test('main', t => {
	t.regex('foo/bar', filenameReservedRegex());
	t.regex('foo\u0000bar', filenameReservedRegex());
	t.regex('foo\u001Fbar', filenameReservedRegex());
	t.regex('foo*bar', filenameReservedRegex());
	t.regex('foo\\bar', filenameReservedRegex());
	t.regex('foo:bar', filenameReservedRegex());
	t.notRegex('foo-bar', filenameReservedRegex());

	t.notRegex('foo-bar', filenameReservedRegex());

	t.notRegex('AUX', filenameReservedRegex());
	t.regex('AUX', windowsReservedNameRegex());

	t.notRegex('com1', filenameReservedRegex());
	t.regex('com1', windowsReservedNameRegex());
});
