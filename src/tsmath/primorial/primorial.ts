import nthPrime from "../primes/nthPrime";

function reducer(x: number, y: number): number {
    return x *= y;
}

export default function numPrimorial(n: number): number {
    const primes = nthPrime(n)
    return primes.reduce(reducer);
}
