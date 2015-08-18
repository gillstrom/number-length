'use strict';
var assert = require('assert');
var numberLength = require('./');

it('Should return true', function () {
	assert.strictEqual(numberLength(0), 1);
	assert.strictEqual(numberLength(9), 1);
	assert.strictEqual(numberLength(100), 3);
	assert.strictEqual(numberLength(123.45), 5);
	assert.strictEqual(numberLength(-1234), 4);
});
