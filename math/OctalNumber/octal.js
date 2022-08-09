class Octal {
  constructor(number) {
    this.number = number;
  }

  /**
   * Validates user input and checks if the number input is a valid number
   * returns False if the number is invalid
   * @returns {Boolean}
   */
  validateInput() {
    return this.number.match(/[0-9]+/gi);
  }

  /** Converts a decimal number to Octal
   * @returns {Number} an octal number
   */
  toDecimal() {
    // check if the number is valid
    if (!this.validateInput()) {
      return 0;
    }
    // split the number string to an array
    // loop through each number multiplying it by 8 to the power of the current index
    const numberArr = this.number.split('').reverse();
    const result = [];

    // if the number 8 is found, return early with 0, 8 is invalid.
    for (let n = 0; n < numberArr.length; n++) {
      if (numberArr[n] === '8') {
        return 0;
      }
      result.push(numberArr[n] * Math.pow(8, n));
    }

    return result.reduce(function (a, b) {
      return a + b;
    });
  }
}

module.exports = Octal;
