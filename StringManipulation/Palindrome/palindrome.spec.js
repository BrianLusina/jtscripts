var palindrome = require('./palindrome')
describe("Palindrome", function() {
    it("should identifies that a string is palindrome", function() {
        Test.assertEquals(isPalindrome("anna"), true);
    });

    it("should identifies that a string is not palindrome", function() {
        Test.assertEquals(isPalindrome("walter"), false);
    });

    it("should identifies that a number is palindrome", function() {
        Test.assertEquals(isPalindrome(12321), true);
    });

    it("should identifies that a number is not palindrome", function() {
        Test.assertEquals(isPalindrome(123456), false);
    });

    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome("."), true);
    });

    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome(".!!."), true);
    });
});
