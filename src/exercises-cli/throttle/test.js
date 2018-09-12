var assert = require('assert');
var sinon = require('sinon');
var throttle = require('./');

test('throttle', function () {
	var clock;

	beforeEach(function () {
		clock = sinon.useFakeTimers();
	});
	afterEach(function () {
		clock.restore();
	});

	test('executes right away', function () {
		var passed = false;
		var throttled = throttle(function () {
			passed = true;
		}, 10);
		throttled();
		assert(passed);
		clock.tick(100);
	});

	test('won\'t execute more than once within the threshold', function (done) {
		var called = 0;
		var throttled = throttle(function () {
			called++;
		}, 10);
		throttled();
		throttled();
		throttled();
		setTimeout(function () {
			assert.equal(called, 1);
			done();
		}, 5);
		clock.tick(100);
	});

	test('will execute at least once more to make up for swallowed calls', function (done) {
		var called = 0;
		var throttled = throttle(function () {
			called++;
		}, 10);
		throttled();
		throttled();
		setTimeout(function () {
			assert.equal(called, 2);
			done();
		}, 15);
		clock.tick(100);
	});

	test('will execute every threshold ms', function (done) {
		var startTime = new Date();
		var calledTimes = [];
		var throttled = throttle(function () {
			calledTimes.push(new Date() - startTime);
		}, 10);
		throttled(); // start now
		var interval = setInterval(throttled, 1);
		setTimeout(function () {
			clearInterval(interval);

			assert.deepEqual(calledTimes, [0, 11, 22, 33, 44, 55]);

			done();
		}, 59);
		clock.tick(100);
	});

	test('gets called with context', function () {
		var ctx;
		var throttled = throttle(function () {
			ctx = this;
		}, 10);
		throttled.call(22);
		assert.equal(ctx, 22);
	});

	test('gets called with arguments', function () {
		var args;
		var throttled = throttle(function () {
			args = [].slice.call(arguments);
		}, 10);
		throttled(22, 33, 44);
		assert.deepEqual(args, [22, 33, 44]);
	});

	test('gets called with the later arguments', function (done) {
		var args;
		var throttled = throttle(function () {
			args = [].slice.call(arguments);
		}, 10);
		throttled(11, 22, 33);
		throttled(22, 33, 44);
		throttled(33, 44, 55);
		setTimeout(function () {
			assert.deepEqual(args, [33, 44, 55]);
			done();
		}, 15);
		clock.tick(100);
	});
});
