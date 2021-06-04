const expect = require('chai').expect

const anagramDetection = require('./anagram')

test('should detect no change in the characters', () => {
  expect(anagramDetection('abc', 'abc')).to.equal(1)
})

test('should detect anagrams of itself', () => {
  expect(anagramDetection('aab', 'baa')).to.equal(1)
})

test('should detect child anagrams', () => {
  expect(anagramDetection('AbrAcadAbRa', 'cAda')).to.equal(2)
  expect(anagramDetection('AdnBndAndBdaBn', 'dAn')).to.equal(4)
})

test('should not fail with a larger child than parent string', () => {
  expect(anagramDetection('test', 'testing')).to.equal(0)
})
