const Palindrome = require('./palindrome')

test('should identifies that a string is palindrome', () => {
  const pal = new Palindrome()
  expect(pal.isPalindrome('anna')).toEqual(true)
})

test('should identifies that a string is not palindrome', () => {
  const pal = new Palindrome()
  expect(pal.isPalindrome('walter')).toEqual(false)
})

test('should identifies that a number is palindrome', () => {
  const pal = new Palindrome()
  expect(pal.isPalindrome(12321)).toEqual(true)
})

test('should identifies that a number is not palindrome', () => {
  const pal = new Palindrome()
  expect(pal.isPalindrome(123456)).toEqual(false)
})

test('should identify that a string is palindrome on punctuation .', () => {
  const pal = new Palindrome()
  expect(pal.isPalindrome('.')).toEqual(true)
})

test('should identify that a string is palindrome on punctuation !!', () => {
  const pal = new Palindrome()
  expect(pal.isPalindrome('.!!.')).toEqual(true)
})
