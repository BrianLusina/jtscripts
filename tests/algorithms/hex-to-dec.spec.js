var HexToDec = require('../../jssnips/algorithms/binary/hex_to_dec/hex-to-dec');

describe('Hexadecimal to Decimal', function () {
	it('Test 1', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('1')).toEqual(1);
	});

	it('Test 2', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('a')).toEqual(10);
	});

	it('Test 3', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('10')).toEqual(16);
	});

	it('Test 4', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('FF')).toEqual(255);
	});

	it('Test 5', function () {
		var hexDec = new HexToDec();
		expect(hexDec.hexToDec('-C')).toEqual(-12);
	});
});
