var assert = require('assert');
var once = require('./');

test('once', function () {
	test('won\'t execute more than once', function () {
		var called = 0;
		var init = once(function () {
			return ++called;
		});
		intest();
		intest();
		intest();
		assert.equal(called, 1);
	});

	test('will return the value from the original call for later calls', function () {
		var t = 10;
		var init = once(function () {
			return ++t;
		});
		var ret = intest();
		assert.deepEqual(intest(), ret);
		assert.deepEqual(intest(), ret);
	});

	test('gets called with context', function () {
		var ctx;
		var init = once(function () {
			ctx = this;
		});
		init.call(11);
		init.call(22);
		assert.equal(ctx, 11);
	});

	test('gets called with arguments', function () {
		var args;
		var init = once(function () {
			args = [].slice.call(arguments);
		});
		intest(11, 22, 33);
		intest(22, 33, 44);
		assert.deepEqual(args, [11, 22, 33]);
	});
});
