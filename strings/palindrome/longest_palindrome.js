const longestPalindrome = function (s) {
  s = s.toLowerCase(), finalStr = ''
  const arrIterator = s.split('').entries()
  const isPalindrome = function (v) {
    return v === v.split('').reverse() // check if palindrome
  }
  if (s === '') {
    return 0
  } else {
    for (const y of arrIterator) {
      for (const x of arrIterator) {
        testStr = s.slice(y, x + 1)
        if (isPalindrome(testStr) && testStr.length > lenfinalStr.length) {
          finalStr = testStr
        }
      }
    }
  }
  return finalStr.length
}
console.log(longestPalindrome('baablkj12345432133d'))
