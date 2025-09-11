/**
 * Calculates the smallest amount of change that cannot be made from the given coins.
 * Sorts coins ascending and accumulates the reachable range; on the first gap (> currentChange + 1), returns that gap.
 *
 * Complexity: O(n log n) time (sort) and O(1) extra space.
 * @remarks Mutates: sorts the input array in place.
 * @param {number[]} coins Array of positive integers (duplicates allowed).
 * @returns {number} Smallest non-constructible amount.
 */
export const nonConstructibleChange = (coins: number[]): number => {
  const sorted = [...coins].sort((a, b) => a - b);
  let currentChange = 0;
  for (const coin of sorted) {
    if (coin > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += coin;
  }
  return currentChange + 1;
};
