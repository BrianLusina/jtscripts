'use strict';

function newArrayWithRange(first, last) {
  let i;
  const array = [];
  for (i = first; i <= last; i++) {
    array.push(i);
  }
  return array;
}

function indivisibleBy(value) {
  return value % this !== 0;
}

function sieve(n) {
  let prime;
  let possibilities;
  const primes = [];

  possibilities = newArrayWithRange(2, n);

  do {
    prime = possibilities.shift();
    primes.push(prime);
    possibilities = possibilities.filter(indivisibleBy, prime);
  } while (possibilities.length > 0);

  return primes;
}

module.exports = function (n) {
  this.primes = sieve(n);
};
