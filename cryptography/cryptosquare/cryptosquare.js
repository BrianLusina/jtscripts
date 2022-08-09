'use-strict';

class Crypto {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Remove all numbers, symbols, spaces and punctuation
   * from the text */
  normalizePlaintext() {
    return this.phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }

  /** Normalizes the cipher text */
  normalizeCipherText() {
    const chunks = this.size();
    const reg = new RegExp('.{1' + chunks + '}', 'g');
    return this.ciphertext.match(reg).join(' ');
  }

  /**
   * Determines the size of the rectangle, gets the length of the rectangle
   * finds its square root and rounds up the value
   */
  size() {
    const len = Math.sqrt(this.normalizePlaintext().length);
    return Math.ceil(len);
  }

  /** splits the normalized plain text into segments
   * by the given size
   * Will group the text segments into chunks according to the length of the normalized text
   */
  plaintextSegments() {
    const plainText = this.normalizePlaintext();
    const chunks = this.size();
    const reg = new RegExp('.{1,' + chunks + '}', 'g');

    return plainText.match(reg);
  }

  /**
   * Makes a cipher from the plain text segments
   * Adds columns which will be used to add letters from the text segments
   */
  ciphertext() {
    const textSegments = this.plaintextSegments();
    const columns = [];
    let currentLetter;
    let currentSegment;
    let i, j;

    // add columns based on the length of the text segments
    for (i = 0; i < this.size(); i++) {
      columns.push([]);
    }

    // for each text segment, get a letter and push to a column
    for (i = 0; i < textSegments.length; i++) {
      currentSegment = textSegments[i];

      for (j = 0; j < columns.length; j++) {
        currentLetter = currentSegment[j];
        columns[j].push(currentLetter);
      }
    }

    // for each column, join the letters for form one word, and reassign the column to become
    // a word, so each column is a word, instead of an array of letters
    for (i = 0; i < columns.length; i++) {
      columns[i] = columns[i].join('');
    }

    // return the columns
    return columns.join('');
  }
}

module.exports = Crypto;
