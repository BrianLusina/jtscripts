export function maxOperations(nums: number[], k: number): number {
  if (nums.length <= 1) {
    return 0;
  }

  nums.sort();
  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === k) {
      operations += 1;
      left += 1;
      right -= 1;
    } else if (currentSum < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return operations;
}
