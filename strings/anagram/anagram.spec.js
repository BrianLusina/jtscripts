const expect = require('chai').expect
const test = require('ava')
const anagramDetection = require('./anagram')

test('should detect no change in the characters', t => {
  t.is(anagramDetection('abc', 'abc')).to.equal(1)
})

test('should detect anagrams of itself', t => {
  t.is(anagramDetection('aab', 'baa')).to.equal(1)
})

test('should detect child anagrams', t => {
  t.is(anagramDetection('AbrAcadAbRa', 'cAda')).to.equal(2)
  t.is(anagramDetection('AdnBndAndBdaBn', 'dAn')).to.equal(4)
})

test('should not fail with a larger child than parent string', t => {
  t.is(anagramDetection('test', 'testing')).to.equal(0)
})
