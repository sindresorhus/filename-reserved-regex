import test from 'ava';
import m from './';

test(t => {
	t.true(m().test('foo/bar'));
	t.true(m().test('foo\x00bar'));
	t.true(m().test('foo\x1Fbar'));
	t.true(m().test('foo*bar'));
	t.true(m().test('foo\\bar'));
	t.true(m().test('foo:bar'));
	t.false(m().test('foo-bar'));
});
