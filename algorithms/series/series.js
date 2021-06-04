class Series {
  constructor (number_str) {
    this.number_str = number_str
    this.digits = this.getDigits()
  }

  /**
     * Gets the digits from the provided number and returns an array of numbers
     * splits the string into string digits and converts each digit to a number
     * @returns {Array}
     */
  getDigits () {
    return this.number_str.split('').map((x) => {
      return +x
    }
    )
  }

  /**
     * returns a 2d array of the number string provided having sliced the array by the given
     * parameter
     * @param {Number} sliceSize the slice size to 'cut' out from the array
     * @returns {Array} 2D array with the slices
     */
  slices (sliceSize) {
    const result = []
    let slice = []

    this.validateSliceSize(sliceSize)

    for (let x = 0; x < this.digits.length - sliceSize + 1; x++) {
      for (let y = 0; y < sliceSize; y++) {
        slice.push(this.digits[x + y])
      }
      result.push(slice)
      slice = []
    }

    return result
  }

  /**
     * Validates the slice size to make sure that it is not greater than the length of the
     * digits provided
     * @throws {Error} if the slice size is larger than the length of provided digits
     * @param {Number} sliceSize the slice size to validate
     */
  validateSliceSize (sliceSize) {
    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.')
    }
  }
}

module.exports = Series
