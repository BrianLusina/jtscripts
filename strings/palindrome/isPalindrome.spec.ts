import { isPalindrome } from './isPalindrome';

describe('Palindrome Tests', () => {
  describe("isPalindrome", () => {
    test('should identifies that a string is palindrome', () => {
      expect(isPalindrome('anna')).toEqual(true)
    })
    
    test('should identifies that a string is not palindrome', () => {
      expect(isPalindrome('walter')).toEqual(false)
    })
    
    test('should identifies that a number is palindrome', () => {
      expect(isPalindrome('12321')).toEqual(true)
    })
    
    test('should identifies that a number is not palindrome', () => {
      expect(isPalindrome('123456')).toEqual(false)
    })
    
    test('should identify that a string is palindrome on punctuation .', () => {
      expect(isPalindrome('.')).toEqual(true)
    })
    
    test('should identify that a string is palindrome on punctuation !!', () => {
      expect(isPalindrome('.!!.')).toEqual(true)
    })
  })
})
