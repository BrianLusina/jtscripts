class PerfectNumbers{

  /**
  * Classifies numbers to either perfect, abundant or deficient base on their
  aliquot sum
  @param {Number} number to classify
  @returns {String} whether the number is perfect, abundant or deficient
  */
  classify(number){
    if(number <= 0){
      return "Classification is only possible for natural numbers."
    }
    // classify deficient numbers
    if(this.getAliquotSum(number) < number || number === 1){
      return "deficient";
    }
    // classify perfect numbers
    if(this.getAliquotSum(number) == number){
      return "perfect";
    }
    //classify abundant numbers
    if(this.getAliquotSum(number) > number){
      return "abundant";
    }

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

    return total;
  }
}

module.exports = PerfectNumbers;
