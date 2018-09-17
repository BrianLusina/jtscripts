var expect = require('chai').expect;
var test = require("ava");
var anagramDetection = require('./anagram');

test('should detect no change in the characters', t => {
  expect(anagramDetection('abc', 'abc')).to.equal(1);
});

test('should detect anagrams of itself', t => {
  expect(anagramDetection('aab', 'baa')).to.equal(1);
});

test('should detect child anagrams', t => {
  expect(anagramDetection('AbrAcadAbRa', 'cAda')).to.equal(2);
  expect(anagramDetection('AdnBndAndBdaBn', 'dAn')).to.equal(4);
});

test('should not fail with a larger child than parent string', t => {
  expect(anagramDetection('test', 'testing')).to.equal(0);
});
