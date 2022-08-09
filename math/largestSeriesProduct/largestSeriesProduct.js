class Series {
  constructor(series) {
    if (series.match(/[^0-9]/)) {
      throw new Error('Invalid input.');
    }
    this.series = series;
    this.digits = this.getDigits();
  }

  /**
   * Gets digits from the series input
   * @returns {Array} of numbers from the series input
   */
  getDigits() {
    return this.series.split('').map(Number);
  }

  /**
   * Checks the input for validity
   * @param {Object} input object input
   */
  checkInput(input) {
    if (typeof input !== 'number' || input < 0) {
      throw Error('Invalid input.');
    }

    if (input > this.digits.length) {
      throw Error('Slice size is too big.');
    }
  }

  /**
   * Gets the largest product from a series made of digits
   *
   * @param {Number} num digits to calculate the largest product in a series
   * @returns {Number} largets product
   */
  largestProduct(num) {
    // perform sanity checks
    this.checkInput(num);

    // if number is 0 and series length is 0
    if ((num === 0 && this.digits.length === 0) || num === 0) {
      return 1;
    }

    // stores the results of the computation
    const result = {};
    this.createSlices(num).forEach(function (slice) {
      const val = slice.reduce(function (a, b) {
        return a * b;
      }, 1);

      result[slice.toString()] = val;
    });

    // get the values from the result object
    const values = Object.values(result);

    // find the largest in the array
    return Math.max.apply(null, values);
  }

  /**
   * Creates slices from the given size of the slice
   * E.g. [0, 0, 0, 0] => [ [0, 0], [0, 0] ] with slice size of 2
   * @param {Number} size size of the slice
   * @returns {Array} size dimensional array
   */
  createSlices(size) {
    const result = [];
    let slices = [];

    for (let x = 0; x < this.digits.length - size + 1; x++) {
      for (let y = 0; y < size; y++) {
        slices.push(this.digits[x + y]);
      }

      // add the slices to the result
      result.push(slices);

      // reset the slices
      slices = [];
    }

    return result;
  }
}

module.exports = Series;
