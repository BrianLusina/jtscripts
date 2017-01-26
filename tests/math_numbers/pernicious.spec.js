var Pernicious = require('../../jssnips/math_numbers/Pernicious/pernicious');

describe('Pernicious Test suite', function () {
	it('Test 1', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(4)).toEqual([3]);
	});

	it('Test 2', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(5)).toEqual([3, 5]);
	});

	it('Test 3', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(232)).toEqual([3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 31, 33, 34, 35, 36, 37, 38, 40, 41, 42, 44, 47, 48, 49, 50, 52, 55, 56, 59, 61, 62, 65, 66, 67, 68, 69, 70, 72, 73, 74, 76, 79, 80, 81, 82, 84, 87, 88, 91, 93, 94, 96, 97, 98, 100, 103, 104, 107, 109, 110, 112, 115, 117, 118, 121, 122, 124, 127, 129, 130, 131, 132, 133, 134, 136, 137, 138, 140, 143, 144, 145, 146, 148, 151, 152, 155, 157, 158, 160, 161, 162, 164, 167, 168, 171, 173, 174, 176, 179, 181, 182, 185, 186, 188, 191, 192, 193, 194, 196, 199, 200, 203, 205, 206, 208, 211, 213, 214, 217, 218, 220, 223, 224, 227, 229, 230]);
	});

	it('Test 4', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(0)).toEqual('No pernicious numbers');
	});

	it('Test 5', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(1)).toEqual('No pernicious numbers');
	});

	it('Test 6', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(-54)).toEqual('No pernicious numbers');
	});

	it('Test 7, floating points', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(6.99)).toEqual([3, 5, 6]);
	});

	it('Test 8', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(-6.99)).toEqual('No pernicious numbers');
	});

	it('Test 9', function () {
		pern = Pernicious();
		expect(pern.is_pernicious(42.42424242)).toEqual([3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 31, 33, 34, 35, 36, 37, 38, 40, 41, 42]);
	});
});
