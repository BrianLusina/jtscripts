export function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((a, b) => a + b);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}
