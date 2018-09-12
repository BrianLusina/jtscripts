var coinToss = require('../../jssnips/algorithms/coin_toss/coin_toss.js');
var expect = require("expect");

test('Test if coin toss', function () {
    test("accepts number arguments only", function(){
        expect(function() {
            throw coinToss("2");
        }).toThrow();
    });

	test('returns a number', function () {
		expect(coinToss(2)).toBeTruthy();
	});
});
