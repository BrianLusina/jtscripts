function total_characters (wordArray) {
  // check if parameter is a valid array/ or is an array
  if (!(wordArray instanceof Array)) {
    throw new TypeError(`Invalid parameter ${wordArray}`)
  }

  // create a variable that will have initial total set to 0
  let total = 0

  // early return, if the array is empty
  if (wordArray.length === 0) {
    return 0
  }

  // loop through array and for each word get the length of the array
  // add this total to the total variable.
  // check if the word is a word, if not, add 0 instead
  for (let x = 0; x < wordArray.length; x++) {
    if (typeof wordArray[x] === 'string') {
      total += wordArray[x].length
    } else {
      total += 0
    }
  }

  // return the total
  return total
}

module.exports = total_characters
