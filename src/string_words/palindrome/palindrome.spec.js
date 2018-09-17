var test = require("ava");
var expect = require("expect");
var Palindrome = require('./palindrome');

test('should identifies that a string is palindrome', t => {
  var pal = new Palindrome();
  expect(pal.isPalindrome('anna')).toEqual(true);
});

test('should identifies that a string is not palindrome', t => {
  var pal = new Palindrome();
  expect(pal.isPalindrome('walter')).toEqual(false);
});

test('should identifies that a number is palindrome', t => {
  var pal = new Palindrome();
  expect(pal.isPalindrome(12321)).toEqual(true);
});

test('should identifies that a number is not palindrome', t => {
  var pal = new Palindrome();
  expect(pal.isPalindrome(123456)).toEqual(false);
});

test('should identifies that a string is palindrome on punctuation', t => {
  var pal = new Palindrome();
  expect(pal.isPalindrome('.')).toEqual(true);
});

test('should identifies that a string is palindrome on punctuation', t => {
  var pal = new Palindrome();
  expect(pal.isPalindrome('.!!.')).toEqual(true);
});
