/**
 * Checks if a word is a closed bracket word, i.e.
 * if x is the ith letter of the English alphabet, and y is the (27 - i)th for each valid i (1-based).
 * For example, 'z' is the counterpart of 'a' and vice versa, 'y' is the counterpart of 'b', and so on.
 * @param{String} word input word
 * @returns{Boolean} True if word is PCBW, false otherwise
 */
function closedBracketWord (word) {
  if (word.length % 2 !== 0) {
    return false
  }
  const count = Math.floor(word.length / 2)

  for (let x = 0; x < count; x++) {
    if (word.charCodeAt(x) - 96 + word.charCodeAt(word.length - x - 1) - 96 !== 27) {
      return false
    }
  }
  return true
}

module.exports = closedBracketWord
