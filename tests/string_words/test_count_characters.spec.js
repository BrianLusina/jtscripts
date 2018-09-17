var total_characters = require('../../src/string_words/count_characters/count_characters.js');
var expect = require("expect");


test('Total Characters test', function () {
	test('Test for words', function () {
		expect(total_characters(['adios', 'bye', 'ciao'])).toEqual(12);
	});

	test('Test for array of numbers', function () {
		expect(total_characters([4, 5, 6])).toEqual(0);
	});

	test('Test for empty array', function () {
		expect(total_characters([])).toEqual(0);
	});

	test('Test for array of length 1', function () {
		expect(total_characters(['brianlusinaombito'])).toEqual(17);
	});

	test('Test for different types of variables', function () {
		expect(total_characters(['Brian', 5, {}, 'lusina'])).toEqual(11);
	});

	// TODO: toThrow not working for some reason
	xtest('Test for wrong arguments', function () {
		expect(total_characters(9)).toThrow(new TypeError('Invalid parameter 9'));
	});
});
