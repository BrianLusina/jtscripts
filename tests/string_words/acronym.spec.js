var Acronyms = require('../../src/string_words/acronym/acronym.js');

test('Acronyms are produced from', function () {
	test('title cased phrases', function () {
		expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
	});

	test('other title cased phrases', function () {
		expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
	});

	test('inconsistently cased phrases', function () {
		expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
	});

	test('phrases with punctuation', function () {
		expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
	});

	test('other phrases with punctuation', function () {
		expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
	});

	test('phrases with punctuation and sentence casing', function () {
		expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
	});
});

