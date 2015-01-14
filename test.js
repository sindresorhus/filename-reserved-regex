import test from 'ava';
import m from './';

test(t => {
	t.true(m().test('foo/bar'));
	t.false(m().test('foo-bar'));
});
