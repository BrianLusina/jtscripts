class PerfectNumbers {
  /**
  * Classifies numbers to either perfect, abundant or deficient base on their
  aliquot sum
  @param {Number} number to classify
  @returns {String} whether the number is perfect, abundant or deficient
  */
  classify(number) {
    if (number <= 0) {
      return 'Classification is only possible for natural numbers.';
    }
    // classify deficient numbers
    if (this.getAliquotSum(number) < number || number === 1) {
      return 'deficient';
    }
    // classify perfect numbers
    if (this.getAliquotSum(number) === number) {
      return 'perfect';
    }
    // classify abundant numbers
    if (this.getAliquotSum(number) > number) {
      return 'abundant';
    }
  }

  /**
  Gets the aliquot sum
  This speeds up the process by checking if the number is odd/even
  Odd numbers don't need to be checked against each number like evens do. Odd numbers can be checked
  against every other number.
  There is not need to check beyond half the given number as nothing beyond half the number will work
  Excludes 0 and starts from 1
  @param {Number} num the number to derive the aliquot sum
  @returns {Number} the sum of the factors of the provided number
  */
  getAliquotSum(num) {
    // ensures a whole number, total = 1, 1 will be part of the solution
    const half = Math.floor(num / 2);
    let total = 1;
    let i;
    let j;

    // determine the increment value for the loop and starting point
    num % 2 === 0 ? ((i = 2), (j = 1)) : ((i = 3), (j = 2));

    for (i; i <= half; i += j) {
      num % i === 0 ? (total += i) : false;
    }

    return total;
  }
}

module.exports = PerfectNumbers;
