class Sieve{
  constructor(limit){
    this.limit = limit;
  }

  /**
  Get all prime numbers from 2 upto the limit
  */
  primes(){
    var primeNum, primes = [];
    var possibilities = this.createRange(2, this.limit);

    do {
      primeNum = possibilities.shift();
      primes.push(primeNum);
      possibilities = possibilities.filter(this.indivisibleBy, primeNum);
    } while (possibilities.length > 0);

    return primes;
  }

  /**
  Checks if a value is indivisible By the prime number
  @param {Number} value
  @return {Boolean}
  */
  indivisibleBy(value){
    return value % this !== 0;
  }

  /**
  Creates a range from first number to the limit which is the last
  @param {Number} first the first number in the sequence/range, which is 2
  @param {Number} last the last, or limit number in the range
  @return {Array} an array which will represent the range
  */
  createRange(first, last){
    var arr = [];
    for(var i = first; i <= last; i++){
      arr.push(i);
    }
    return arr;
  }
}

module.exports = Sieve;
