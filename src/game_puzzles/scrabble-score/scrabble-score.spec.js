var test = require("ava");
var expect = require("expect")
var score = require('./scrabble-score');

test('scores an empty word as zero', t => {
  expect(score('')).toEqual(0);
});

test('scores a null as zero', t => {
  expect(score(null)).toEqual(0);
});

test('scores a very short word', t => {
  expect(score('a')).toEqual(1);
});

test('scores the word by the number of letters', t => {
  expect(score('street')).toEqual(6);
});

test('scores more complicated words with more', t => {
  expect(score('quirky')).toEqual(22);
});

test('scores case insensitive words', t => {
  expect(score('OXYPHENBUTAZONE')).toEqual(41);
});
