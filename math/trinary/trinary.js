'use-strict';

class Trinary {
  constructor(number) {
    this.number = number;
  }

  /** Converts given trinary number to decimal
   * by first principles.
   */
  toDecimal() {
    // check if the input is a valid number
    const num = new RegExp(/[0-9]+/, 'g');

    // return early if the string is not a valid number
    if (!this.number.match(num)) {
      return 0;
    }

    // split and reverse the array of numbers
    const list = this.number.split('').reverse();
    let sum = 0;
    for (let x = 0; x < list.length; x++) {
      sum += +list[x] * Math.pow(3, x);
    }
    return sum;
  }
}

module.exports = Trinary;

const BASE = 3;

function Trinary_2(decimal) {
  this.digits = decimal.split('').reverse().map(Number);
}

Trinary_2.prototype.toDecimal = function () {
  const decimal = this.digits.reduce(this.accumulator, 0);
  return isNaN(decimal) ? 0 : decimal;
};

Trinary_2.prototype.accumulator = function (decimal, digit, index) {
  return (decimal += digit * Math.pow(BASE, index));
};
