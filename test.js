import {test} from 'node:test';
import assert from 'node:assert/strict';
import filenameReservedRegex, {windowsReservedNameRegex} from './index.js';

test('reserved characters and Windows device names', () => {
	assert.match('foo/bar', filenameReservedRegex());
	assert.match('foo\u{0}bar', filenameReservedRegex());
	assert.match('foo\u{1F}bar', filenameReservedRegex());
	assert.match('foo*bar', filenameReservedRegex());
	assert.match(String.raw`foo\bar`, filenameReservedRegex());
	assert.match('foo:bar', filenameReservedRegex());
	assert.doesNotMatch('foo-bar', filenameReservedRegex());

	assert.doesNotMatch('AUX', filenameReservedRegex());
	assert.match('AUX', windowsReservedNameRegex());

	assert.doesNotMatch('com1', filenameReservedRegex());
	assert.match('com1', windowsReservedNameRegex());
	assert.match('COM0', windowsReservedNameRegex());
	assert.match('LPT0', windowsReservedNameRegex());
	assert.match('COM¹.txt', windowsReservedNameRegex());
	assert.match('NUL.tar.gz', windowsReservedNameRegex());
	assert.match('CON .txt', windowsReservedNameRegex());
	assert.match('CON ', windowsReservedNameRegex());
	assert.match('LPT³ .txt', windowsReservedNameRegex());
	assert.match('CONIN$.txt', windowsReservedNameRegex());
	assert.match('conout$', windowsReservedNameRegex());
	assert.doesNotMatch('COM', windowsReservedNameRegex());
	assert.doesNotMatch('COM10', windowsReservedNameRegex());
	assert.doesNotMatch('CONIN.txt', windowsReservedNameRegex());
	assert.doesNotMatch('CONSOLE.txt', windowsReservedNameRegex());
	assert.doesNotMatch(' CON.txt', windowsReservedNameRegex());

	// Windows trailing space and period restrictions
	assert.match('file ', filenameReservedRegex());
	assert.match('test.', filenameReservedRegex());
	assert.match('name  ', filenameReservedRegex());
	assert.match('name..', filenameReservedRegex());
	assert.doesNotMatch('file.txt', filenameReservedRegex());
	assert.doesNotMatch('my file', filenameReservedRegex());
	assert.doesNotMatch('.gitignore', filenameReservedRegex());
});
