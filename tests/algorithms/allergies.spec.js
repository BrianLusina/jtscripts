var Allergies = require('../../jssnips/algorithms/allergies/allergies');

test('Allergies', function () {
	test('no allergies at all', function () {
		var allergies = new Allergies(0);
		expect(allergies.list()).toEqual([]);
	});

	test('allergies to eggs', function () {
		var allergies = new Allergies(1);
		expect(allergies.list()).toEqual(['eggs']);
	});

	test('allergies to peanuts', function () {
		var allergies = new Allergies(2);
		expect(allergies.list()).toEqual(['peanuts']);
	});

	test('allergies to strawberries', function () {
		var allergies = new Allergies(8);
		expect(allergies.list()).toEqual(['strawberries']);
	});

	test('allergies to eggs and peanuts', function () {
		var allergies = new Allergies(3);
		expect(allergies.list()).toEqual(['eggs', 'peanuts']);
	});

	test('allergies to more than eggs but not peanuts', function () {
		var allergies = new Allergies(5);
		expect(allergies.list()).toEqual(['eggs', 'shellfish']);
	});

	test('allergic to lots of stuff', function () {
		var allergies = new Allergies(248);
		expect(allergies.list()).toEqual(['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
	});

	test('allergic to everything', function () {
		var allergies = new Allergies(255);
		expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
	});

	test('no allergic means not allergic', function () {
		var allergies = new Allergies(0);
		expect(allergies.allergicTo('peanuts')).toEqual(false);
		expect(allergies.allergicTo('cats')).toEqual(false);
		expect(allergies.allergicTo('strawberries')).toEqual(false);
	});

	test('allergic to eggs', function () {
		var allergies = new Allergies(1);
		expect(allergies.allergicTo('eggs')).toEqual(true);
	});

	test('allergic to eggs and other things', function () {
		var allergies = new Allergies(5);
		expect(allergies.allergicTo('eggs')).toEqual(true);
	});

	test('ignore non allergen score parts', function () {
		var allergies = new Allergies(509);
		expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
	});
});
