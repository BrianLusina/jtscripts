var coinToss = require('../../jssnips/algorithms/coin_toss/coin_toss.js');
var expect = require("expect");

describe('Test if coin toss', function () {
    it("accepts number arguments only", function(){
        expect(function() {
            throw coinToss("2");
        }).toThrow();
    });

	it('returns a number', function () {
		expect(coinToss(2)).toBeTruthy();
	});
});
