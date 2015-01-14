'use strict';
var test = require('ava');
var filenameReservedRegex = require('./');

test(function (t) {
	t.assert(filenameReservedRegex().test('foo/bar'));
	t.assert(!filenameReservedRegex().test('foo-bar'));
	t.end();
});
