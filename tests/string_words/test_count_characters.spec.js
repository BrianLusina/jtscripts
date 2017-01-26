var total_characters = require('../../jssnips/string_words/count_characters/count_characters.js');

describe('Total Characters test', function () {
	it('Test for words', function () {
		expect(total_characters(['adios', 'bye', 'ciao'])).toEqual(12);
	});

	it('Test for array of numbers', function () {
		expect(total_characters([4, 5, 6])).toEqual(0);
	});

	it('Test for empty array', function () {
		expect(total_characters([])).toEqual(0);
	});

	it('Test for array of length 1', function () {
		expect(total_characters(['brianlusinaombito'])).toEqual(17);
	});

	it('Test for different types of variables', function () {
		expect(total_characters(['Brian', 5, {}, 'lusina'])).toEqual(11);
	});

	it('Test for wrong arguments', function () {
		expect(function () {
			total_characters(9);
		}).toThrow(new TypeError('Invalid parameter 9'));
	});
});
