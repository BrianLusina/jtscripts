const test = require('ava')
const expect = require('expect')
const reverseString = require('./reverse-string.js')

test('empty string', t => {
  const expected = ''
  const actual = reverseString('')
  t.is(actual, expected)
})

test('a word', t => {
  const expected = 'tobor'
  const actual = reverseString('robot')
  t.is(actual, expected)
})

test('a capitalized word', t => {
  const expected = 'nemaR'
  const actual = reverseString('Ramen')
  t.is(actual, expected)
})

test('a sentence with punctuation', t => {
  const expected = '!yrgnuh ma I'
  const actual = reverseString('I am hungry!')
  t.is(actual, expected)
})

test('a palindrome', t => {
  const expected = 'racecar'
  const actual = reverseString('racecar')
  t.is(actual, expected)
})
