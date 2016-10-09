import test from 'ava';
import m from './';

test(t => {
	t.regex('foo/bar', m());
	t.regex('foo\x00bar', m());
	t.regex('foo\x1Fbar', m());
	t.regex('foo*bar', m());
	t.regex('foo\\bar', m());
	t.regex('foo:bar', m());
	t.notRegex('foo-bar', m());

	t.notRegex('foo-bar', m());

	t.notRegex('AUX', m());
	t.regex('AUX', m.windowsNames());

	t.notRegex('com1', m());
	t.regex('com1', m.windowsNames());
});
