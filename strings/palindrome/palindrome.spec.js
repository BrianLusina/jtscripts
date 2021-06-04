var test = require("ava");
var expect = require("expect");
var Palindrome = require('./palindrome');

test('should identifies that a string is palindrome', t => {
  var pal = new Palindrome();
  t.is(pal.isPalindrome('anna'),true);
});

test('should identifies that a string is not palindrome', t => {
  var pal = new Palindrome();
  t.is(pal.isPalindrome('walter'),false);
});

test('should identifies that a number is palindrome', t => {
  var pal = new Palindrome();
  t.is(pal.isPalindrome(12321),true);
});

test('should identifies that a number is not palindrome', t => {
  var pal = new Palindrome();
  t.is(pal.isPalindrome(123456),false);
});

test('should identify that a string is palindrome on punctuation .', t => {
  var pal = new Palindrome();
  t.is(pal.isPalindrome('.'),true);
});

test('should identify that a string is palindrome on punctuation !!', t => {
  var pal = new Palindrome();
  t.is(pal.isPalindrome('.!!.'),true);
});
