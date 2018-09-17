var toRoman = require('../../src/math_numbers/roman-numerals/roman-numerals2');

test('toRoman()', function () {
	test('converts 1', function () {
		expect(toRoman(1)).toEqual('I');
	});

	test('converts 2', function () {
		expect(toRoman(2)).toEqual('II');
	});

	test('converts 3', function () {
		expect(toRoman(3)).toEqual('III');
	});

	test('converts 4', function () {
		expect(toRoman(4)).toEqual('IV');
	});

	test('converts 5', function () {
		expect(toRoman(5)).toEqual('V');
	});

	test('converts 6', function () {
		expect(toRoman(6)).toEqual('VI');
	});

	test('converts 9', function () {
		expect(toRoman(9)).toEqual('IX');
	});

	test('converts 50', () => {
		expect(toRoman(50)).toEqual('L');
	});

	test('converts 27', function () {
		expect(toRoman(27)).toEqual('XXVII');
	});

	test('converts 48', function () {
		expect(toRoman(48)).toEqual('XLVIII');
	});

	test('converts 59', function () {
		expect(toRoman(59)).toEqual('LIX');
	});

	test('converts 93', function () {
		expect(toRoman(93)).toEqual('XCIII');
	});

	test('converts 100', function () {
		expect(toRoman(100)).toEqual('C');
	});

	test('converts 200', function () {
		expect(toRoman(200)).toEqual('CC');
	});

	test('converts 141', function () {
		expect(toRoman(141)).toEqual('CXLI');
	});

	test('converts 163', function () {
		expect(toRoman(163)).toEqual('CLXIII');
	});

	test('converts 402', function () {
		expect(toRoman(402)).toEqual('CDII');
	});

	test('converts 575', function () {
		expect(toRoman(575)).toEqual('DLXXV');
	});

	test('converts 911', function () {
		expect(toRoman(911)).toEqual('CMXI');
	});

	test('converts 1204', function () {
		expect(toRoman(1204)).toEqual('MCCIV');
	});

	test('converts 1024', function () {
		expect(toRoman(1024)).toEqual('MXXIV');
	});

	test('converts 1290', function () {
		expect(toRoman(1290)).toEqual('MCCXC');
	});

	test('converts 3000', function () {
		expect(toRoman(3000)).toEqual('MMM');
	});
});
