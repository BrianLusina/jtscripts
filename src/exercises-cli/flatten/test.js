var assert = require('assert');
var flatten = require('./');

test('flatten', function () {
	var arr = [1, [2], [3, 4, [5]]];

	test('will return another array', function () {
		assert.notEqual(flatten(arr), arr);
	});

	test('will flatten an simple array', function () {
		assert.deepEqual(flatten([1, 2, 3, 4, [5]]), [1, 2, 3, 4, 5]);
	});

	test('will flatten an array', function () {
		assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5]);
	});
});
