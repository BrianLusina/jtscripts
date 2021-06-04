'use-strict'

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const REVERSED_LETTERS = LETTERS.split('').reverse().join('')

module.exports = {

  /** Inserts spacing to the words in the phrase after a specific interval.
   * @param str, the string to insert spacing
   * @param interval, the interval to insert
   */
  insertSpacing (str, interval) {
    // matches new characters except line terminators
    const matcher = new RegExp('.{1,' + interval + '}', 'g')
    return str.match(matcher).join(' ')
  },

  /**
   * If the char matches a digit, add it to the array,
   * if not, invert the character
   * @param character: character to check for
   */
  invert (character) {
    this.push(character.match(/\d/) ? character : LETTERS[REVERSED_LETTERS.indexOf(character)])
  },

  /**
   * Does the actual encoding,
   * lowercases the phrase, splits it into an array and for each character checks if it matches
   * the callback function and adds it to the characters array
   * Inserts spacing to the phrase at intervals of 5 and returns the encoded phrase.
   * @param phrase, the phrase to encode, usually a string.
   * @returns an encoded message
   */
  encode (phrase) {
    let encoded = ''
    const characters = []
    phrase.toLowerCase().spltest('').forEach(this.invert, characters)
    encoded = this.insertSpacing(characters.join(''), 5)
    return encoded
  }
}
