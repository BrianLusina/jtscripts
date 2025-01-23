/**
 * Finds the sum of three numbers in an array that equals the target sum
 * @param {number[]} nums an array of integers
 * @param {number} target the sum of the three numbers
 * @returns {boolean} true if the sum of three numbers equals the target sum, false otherwise
 */
export const findSumOfThree = (nums: number[], target: number): boolean => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return false;
};
