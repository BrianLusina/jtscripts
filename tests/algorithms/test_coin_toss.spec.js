var coinToss = require('../../jssnips/algorithms/coin_toss/coin_toss.js');

describe('Test if coin toss', function () {
    // it("accepts number arguments only", function(){
    //     expect(function(){coinToss("2")}).toThrow();
    // });

	it('returns a number', function () {
		expect(coinToss(2)).toBeTruthy();
	});
});
