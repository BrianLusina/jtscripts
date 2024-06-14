//TwoSum returns the indices of 2 numbers in a slice that add up to the target integer
// Uses O(n) Space complexity as a map is used to store the seen integers
export const twoSum = (numbers: number[], target: number): number[] => {
  const seen = new Map<number, number>();

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const diff = target - number;

    if (seen.has(diff)) {
      const result = seen.get(diff);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return [result, index];
    }

    seen.set(number, index);
  }
  return [0, 0];
};

// twoSumII finds the indices of two integers from a 1-index based numbers slice sorted in increasing order that add up to a target
// This uses a binary search to find the two numbers that add up to the target with the left and right pointer at both ends of thes lice
// Space complexity is O(2) where we store 2 numbers in the return result, and Time complexity is O(n log(n)) as a binary search algorithm
// is used to find the two numbers
export const twoSumII = (numbers: number[], target: number): number[] => {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum > target) {
      right -= 1;
    } else if (sum < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [0, 0];
};
