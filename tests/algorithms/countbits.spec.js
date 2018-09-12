var CountBits = require('../../jssnips/algorithms/binary/count_bits/countbits');

test('Count Bits Test Suite', function () {
	test('Test One', function () {
		var count = new CountBits();

		expect(count.countBits(0)).toEqual(0);
	});

	test('Test Two', function () {
		var count = new CountBits();
		expect(count.countBits(4)).toEqual(1);
	});

	test('Test Three', function () {
		var count = new CountBits();
		expect(count.countBits(7)).toEqual(3);
	});

	test('Test Four', function () {
		var count = new CountBits();
		expect(count.countBits(9)).toEqual(2);
	});

	test('Test Five', function () {
		var count = new CountBits();
		expect(count.countBits(10)).toEqual(2);
	});
});
