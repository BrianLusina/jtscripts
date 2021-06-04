/**
 * Checks by how many characters the first string can be moved to match the second
 * @param first word to check for number of characters to rotate.
 * @param second second word
 * @return the number of characters to move the first to match the second
 */
function shiftedDiff (first, second) {
  return first.length === second.length ? (second + second).indexOf(first) : -1
}

module.exports = shiftedDiff
