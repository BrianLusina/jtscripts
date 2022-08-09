import sieveOfErastothenes from '../sieveOfErastothenes/sieveOfErastothenes';
import isPrime from '../isprime';

function reverseNumber(n: number): number {
  return parseInt(n.toString(10).split('').reverse().join(''), 10);
}

export default function backwardsPrime(start: number, stop: number): number[] {
  const primes = sieveOfErastothenes(stop, start);
  const result: number[] = [];

  for (const prime of primes) {
    const reversedPrime = reverseNumber(prime);

    if (isPrime(reversedPrime) && reversedPrime !== prime) {
      result.push(prime);
    }
  }

  return result;
}
