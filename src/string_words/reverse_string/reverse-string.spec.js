var test = require("ava");
var expect = require("expect");
var reverseString = require('./reverse-string.js');


test('empty string', t => {
  var expected = '';
  var actual = reverseString('');
  t.is(actual,expected);
});

test('a word', t => {
  var expected = 'tobor';
  var actual = reverseString('robot');
  t.is(actual,expected);
});

test('a capitalized word', t => {
  var expected = 'nemaR';
  var actual = reverseString('Ramen');
  t.is(actual,expected);
});

test('a sentence with punctuation', t => {
  var expected = '!yrgnuh ma I';
  var actual = reverseString('I am hungry!');
  t.is(actual,expected);
});

test('a palindrome', t => {
  var expected = 'racecar';
  var actual = reverseString('racecar');
  t.is(actual,expected);
});
