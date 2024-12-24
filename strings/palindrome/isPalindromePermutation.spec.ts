import { isPalindromePermutation } from './isPalindromePermutation';

describe('isPalindromePermutation', () => {
    test('should return true for a palindrome permutation', () => {
        expect(isPalindromePermutation('Tact Coa')).toEqual(true);
    });
    
    test('should return false for a non-palindrome permutation', () => {
        expect(isPalindromePermutation('hello')).toEqual(false);
    });
    
    test('should return true for an empty string', () => {
        expect(isPalindromePermutation('')).toEqual(true);
    });
    
    test('should return true for a string with only one character', () => {
        expect(isPalindromePermutation('a')).toEqual(true);
    });
    
    test('should return true for a string with only spaces', () => {
        expect(isPalindromePermutation('   ')).toEqual(true);
    });
    
    test('should return true for a string with only spaces and punctuation', () => {
        expect(isPalindromePermutation('   .!!   ')).toEqual(true);
    });
});
