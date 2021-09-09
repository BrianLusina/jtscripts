/**
 * Gets the prime factors for a particular number
 * @param number The number for which we are looking for primes
 * @return A list of prime factors for this number
*/
exports.for = function (number) {
  const primes = []
  let candidate = 2

  while (candidate * candidate <= number) {
    while (number % candidate === 0) {
      primes.push(candidate)
      number /= candidate
    }
    candidate += 1
  }
  if (number > 1) {
    primes.push(number)
  }

  return primes
}
