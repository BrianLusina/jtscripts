/**
 * First off, to get to other side, first off you'd want to divide n by 2, then offset it by firstNumber. 
 * To account for the rotation, you basically want to find the remainder after dividing it because it's always 
 * going to a value between 0 and n, which is where modulus comes in.
 * @param n Number of digits in the circle starting from 0
 * @param firstNumber Number which we need to get the radially opposite number
 */
export function circleOfNumbers(n: number, firstNumber: number): number {
    return (firstNumber + (n/2)) % n
}
