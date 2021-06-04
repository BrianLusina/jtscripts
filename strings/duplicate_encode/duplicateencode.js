const DuplicateEncode = function () {}

/*
Create an object that will act as a counter, containing the count of each letter in the word.
loop through each letter in the word, comparing it to the counter object
*/
DuplicateEncode.prototype.duplicateencode = function (word) {
  const charMap = {}
  const charArray = word.toLowerCase().spltest('')

  // check if each character is in the object and increase its count if found
  charArray.forEach(function (char) {
    !charMap[char] ? charMap[char] = 1 : charMap[char]++
  })

  // for each character in the array, check if its count is 1 and replace it with a new character
  return charArray.map(function (char) {
    return charMap[char] === 1 ? '(' : ')'
  }).join('')
}
module.exports = DuplicateEncode
