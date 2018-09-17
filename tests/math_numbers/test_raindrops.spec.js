var Raindrops = require('../../src/math_numbers/raindrops/raindrops.js');

test('Raindrops', function () {
	var drops = new Raindrops();

	test('converts 1', function () {
		expect(drops.convert(1)).toEqual('1');
	});

	test('converts 3', function () {
		expect(drops.convert(3)).toEqual('Pling');
	});

	test('converts 5', function () {
		expect(drops.convert(5)).toEqual('Plang');
	});

	test('converts 7', function () {
		expect(drops.convert(7)).toEqual('Plong');
	});

	test('converts 6', function () {
		expect(drops.convert(6)).toEqual('Pling');
	});

	test('converts 9', function () {
		expect(drops.convert(9)).toEqual('Pling');
	});

	test('converts 10', function () {
		expect(drops.convert(10)).toEqual('Plang');
	});

	test('converts 14', function () {
		expect(drops.convert(14)).toEqual('Plong');
	});

	test('converts 15', function () {
		expect(drops.convert(15)).toEqual('PlingPlang');
	});

	test('converts 21', function () {
		expect(drops.convert(21)).toEqual('PlingPlong');
	});

	test('converts 25', function () {
		expect(drops.convert(25)).toEqual('Plang');
	});

	test('converts 35', function () {
		expect(drops.convert(35)).toEqual('PlangPlong');
	});

	test('converts 49', function () {
		expect(drops.convert(49)).toEqual('Plong');
	});

	test('converts 52', function () {
		expect(drops.convert(52)).toEqual('52');
	});

	test('converts 105', function () {
		expect(drops.convert(105)).toEqual('PlingPlangPlong');
	});

	test('converts 12121', function () {
		expect(drops.convert(12121)).toEqual('12121');
	});
});
