var WordSearch = require('../../jssnips/string_words/word_search/wordsearch');

test('Word Search Test Suite', function () {
	test('Test 1', function () {
		var ws = new WordSearch();
		expect(ws.wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc'])).toEqual(['ab', 'abc', 'zab']);
	});

	test('Test 2', function () {
		var ws = new WordSearch();
		expect(ws.wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc'])).toEqual(['ab', 'abc', 'zab']);
	});

	test('Test 3', function () {
		var ws = new WordSearch();
		expect(ws.wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc'])).toEqual(['aB', 'Abc', 'zAB']);
	});

	test('Test 4', function () {
		var ws = new WordSearch();
		expect(ws.wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc'])).toEqual(['Empty']);
	});
});
