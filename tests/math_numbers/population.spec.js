var PopulationGrowth = require('../../jssnips/math_numbers/PopulationGrowth/population');

describe('Population Growth Tests', function () {
	it('Test 1', function () {
		pg = new PopulationGrowth();
		expect(pg.nbYear(1500, 5, 100, 5000)).toEqual(15);
	});

	it('Test 2', function () {
		pg = new PopulationGrowth();
		expect(pg.nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10);
	});

	it('Test 3', function () {
		pg = new PopulationGrowth();
		expect(pg.nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94);
	});
});
