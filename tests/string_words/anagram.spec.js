var expect = require('chai').expect;
var anagramDetection = require('../../jssnips/string_words/anagram/anagram');

test('Anagram Detection', function () {
	test('should detect no change in the characters', function () {
		expect(anagramDetection('abc', 'abc')).to.equal(1);
	});

	test('should detect anagrams of itself', function () {
		expect(anagramDetection('aab', 'baa')).to.equal(1);
	});

	test('should detect child anagrams', function () {
		expect(anagramDetection('AbrAcadAbRa', 'cAda')).to.equal(2);
		expect(anagramDetection('AdnBndAndBdaBn', 'dAn')).to.equal(4);
	});

	test('should not fail with a larger child than parent string', function () {
		expect(anagramDetection('test', 'testing')).to.equal(0);
	});
});
