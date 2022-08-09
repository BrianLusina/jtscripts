class Primes {
  constructor() {}

  static first(num) {
    const sieve = [];
    const primes = [];
    for (let x = 0; x <= num; x++) {
      if (!sieve[x]) {
        primes.push(x);
        for (let j = x << 1; j <= num; j += x) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }

  /** Sum all prime numbers below a certain number* */
  static sumPrimes(num) {
    const sieve = [];
    let i;
    let j;
    const primes = [];
    for (i = 2; i <= num; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= num; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes.reduce(function (x, y) {
      return x + y;
    });
  }

  /**
   * Checks if a number is prime
   */
  static isPrime(num) {
    const range = this.get_range;
    let start = 2;
    if (num < 2) {
      return false;
    }
    while (start <= Math.sqrt(num)) {
      if (num % start++ < 1) {
        return false;
      }
    }
    return num > 1;
  }

  static get_range(num) {
    const array = [];
    for (let x = 2; x < num.length; x++) {
      array.push(x);
    }
    return array;
  }
}

module.exports = Primes;
