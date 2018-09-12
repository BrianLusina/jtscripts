var Palindrome = require('../../jssnips/string_words/palindrome/palindrome');

test('Palindrome', function () {
	test('should identifies that a string is palindrome', function () {
		var pal = new Palindrome();
		expect(pal.isPalindrome('anna')).toEqual(true);
	});

	test('should identifies that a string is not palindrome', function () {
		var pal = new Palindrome();
		expect(pal.isPalindrome('walter')).toEqual(false);
	});

	test('should identifies that a number is palindrome', function () {
		var pal = new Palindrome();
		expect(pal.isPalindrome(12321)).toEqual(true);
	});

	test('should identifies that a number is not palindrome', function () {
		var pal = new Palindrome();
		expect(pal.isPalindrome(123456)).toEqual(false);
	});

	test('should identifies that a string is palindrome on punctuation', function () {
		var pal = new Palindrome();
		expect(pal.isPalindrome('.')).toEqual(true);
	});

	test('should identifies that a string is palindrome on punctuation', function () {
		var pal = new Palindrome();
		expect(pal.isPalindrome('.!!.')).toEqual(true);
	});
});
