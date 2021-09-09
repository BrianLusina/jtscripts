import isPrime from "../isprime"

/**
 * Seive of erastothenes returns a list of numbers which are prime froms tart to end
 * @param start Beginning of the range
 * @param end End of the range
 * @returns List of prime numbers
 */
export default function sieveOfErastothenes(end: number, start: number = 2, ): number[] {
    const possiblePrimes: number[] = []

    for (let i = start; i <= end; i++) {
        possiblePrimes.push(i)
    }

    return possiblePrimes.filter(isPrime)
}
