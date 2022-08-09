import isPrime from './isprime';

export default function nthPrime(thatNumber: number): number[] {
  const Primes: number[] = [];

  for (let i = 2; Primes.length !== thatNumber; i++) {
    if (isPrime(i)) Primes.push(i);
  }

  return Primes;
}
