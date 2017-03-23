class PerfectNumbers{

  /**
  * Classifies numbers to either perfect, abundant or deficient base on their
  aliquot sum
  @param {Number} number to classify
  @returns {String} whether the number is perfect, abundant or deficient
  */
  classify(number){
    // classify perfect numbers

    //classify abundant numbers

    // classify deficient numbers
  }

  /**
  Gets the aliquot sum

  @param {Number} num the number to derive the aliquot sum
  @returns {Number} the sum of the factors of the provided number
  */
  getAliquotSum(num){
    // ensures a whole number, total = 1, 1 will be part of the solution
    var half = Math.floor(num / 2), total = 1, i, j;

    // determine the increment value for the loop and starting point
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for(i; i <= half;i += j){
      num % i === 0 ? total += i: false;
    }

    // include the original number
    total += num;
    return total;
  }
}

module.exports = PerfectNumbers;
