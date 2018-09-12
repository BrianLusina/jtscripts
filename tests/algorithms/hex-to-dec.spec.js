var HexToDec = require('../../jssnips/algorithms/binary/hex_to_dec/hex-to-dec');

test('Hexadecimal to Decimal', function () {
	test('Test 1', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('1')).toEqual(1);
	});

	test('Test 2', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('a')).toEqual(10);
	});

	test('Test 3', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('10')).toEqual(16);
	});

	test('Test 4', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('FF')).toEqual(255);
	});

	test('Test 5', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('-C')).toEqual(-12);
	});
});
