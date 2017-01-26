var MaxProduct = require('../../jssnips/math_numbers/ProductOfLargestPair/maxproduct');

describe('Max Product Test Suite', function () {
	it('Test 2', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([56, 335, 195, 443, 6, 494, 252])).toEqual(218842);
	});

	it('Test 3', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([154, 428, 455, 346])).toEqual(194740);
	});

	it('Test 4', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411])).toEqual(187827);
	});

	it('Test 5', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([136, 376, 10, 146, 105, 63, 234])).toEqual(87984);
	});

	it('Test 6', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89])).toEqual(218536);
	});

	it('Test 7', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14])).toEqual(192672);
	});

	it('Test 8', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([134, 320, 266, 299])).toEqual(95680);
	});

	it('Test 9', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252])).toEqual(139496);
	});

	it('Test 10', function () {
		var m = new MaxProduct();
		expect(m.maxProduct([375, 56, 337, 466, 203])).toEqual(174750);
	});
});
