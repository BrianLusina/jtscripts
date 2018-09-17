var test = require("ava");
var expect = require("expect");
var reverseString = require('./reverse-string.js');


test('empty string', t => {
  var expected = '';
  var actual = reverseString('');
  expect(actual).toEqual(expected);
});

test('a word', t => {
  var expected = 'tobor';
  var actual = reverseString('robot');
  expect(actual).toEqual(expected);
});

test('a capitalized word', t => {
  var expected = 'nemaR';
  var actual = reverseString('Ramen');
  expect(actual).toEqual(expected);
});

test('a sentence with punctuation', t => {
  var expected = '!yrgnuh ma I';
  var actual = reverseString('I am hungry!');
  expect(actual).toEqual(expected);
});

test('a palindrome', t => {
  var expected = 'racecar';
  var actual = reverseString('racecar');
  expect(actual).toEqual(expected);
});
