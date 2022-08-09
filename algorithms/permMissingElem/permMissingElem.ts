/**
 * Finds the missing element from an array of numbers
 * @param {Number[]} numbers Array of numbers
 * @returns {Number}
 */
export function permMissingElem(numbers: number[]): number {
  let missingElement = numbers.length + 1;

  for (let index = 0; index < numbers.length; index++) {
    const value = numbers[index];
    missingElement = missingElement ^ value ^ (index + 1);
  }

  return missingElement;
}
