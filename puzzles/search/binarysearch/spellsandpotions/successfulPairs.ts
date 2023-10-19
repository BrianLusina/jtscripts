// successfulPairs finds the successful pairs of spells and potions that meet the given success criteria
// Space: O(n) - storing the result
// Time: O(mlogm + nlogm), where O(mlogm) is sorting the potions and O(nlogm) is performing the binary search on the potions
export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  const validPosition = (sortedPotions: number[], target: number): number => {
    let left = 0;
    let right = sortedPotions.length;

    while (left < right) {
      const middle = (left + right) >> 1;

      if (sortedPotions[middle] >= target) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    return left;
  };

  potions.sort((a, b) => a - b);
  const result = [];

  for (const spell of spells) {
    const count = potions.length - validPosition(potions, Math.ceil(success / spell));
    result.push(count);
  }

  return result;
}
