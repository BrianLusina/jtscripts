var assert = require('assert');
var curry = require('./');

test('curry', function () {
	test('curries the function at least once', function () {
		var add = curry(function (a, b) {
			return a + b;
		});
		assert.equal(add(1)(2), 3);
	});

	test('curries the function even with a single argument', function () {
		var output = curry(function (n) {
			return n;
		});
		assert.equal(output(1), 1);
	});

	test('curries the function until the arguments needed are given at least once', function () {
		var add = curry(function (a, b, c) {
			return a + b + c;
		});
		assert.equal(add(1, 2)(3), 6);
	});

	test('curries the function until the arguments needed are given multiple times', function () {
		var add = curry(function (a, b, c) {
			return a + b + c;
		});
		assert.equal(add(1)(2)(3), 6);
	});

	test('doesn\'t share state between calls', function () {
		var add = curry(function (a, b, c) {
			return a + b + c;
		});
		assert.equal(add(1)(2)(3), 6);
		assert.equal(add(2)(3)(4), 9);
	});

	test('doesn\'t only work with addition', function () {
		var merge = curry(function (a, b, c) {
			return [a, b, c].join(', ');
		});
		assert.equal(merge('1')(2)(3), '1, 2, 3');
	});

	test('doesn\'t share state between inner calls', function () {
		var add = curry(function (a, b, c, d) {
			return a + b + c + d;
		});
		var firstTwo = add(1)(2);
		assert.equal(firstTwo(3)(4), 10);
		var firstThree = firstTwo(5);
		assert.equal(firstThree(6), 14);
	});
});
