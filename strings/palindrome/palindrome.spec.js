const test = require('ava')
const expect = require('expect')
const Palindrome = require('./palindrome')

test('should identifies that a string is palindrome', t => {
  const pal = new Palindrome()
  t.is(pal.isPalindrome('anna'), true)
})

test('should identifies that a string is not palindrome', t => {
  const pal = new Palindrome()
  t.is(pal.isPalindrome('walter'), false)
})

test('should identifies that a number is palindrome', t => {
  const pal = new Palindrome()
  t.is(pal.isPalindrome(12321), true)
})

test('should identifies that a number is not palindrome', t => {
  const pal = new Palindrome()
  t.is(pal.isPalindrome(123456), false)
})

test('should identify that a string is palindrome on punctuation .', t => {
  const pal = new Palindrome()
  t.is(pal.isPalindrome('.'), true)
})

test('should identify that a string is palindrome on punctuation !!', t => {
  const pal = new Palindrome()
  t.is(pal.isPalindrome('.!!.'), true)
})
