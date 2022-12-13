export default function findMin(nums: number[]): number {
  let [left, right] = [0, nums.length - 1];
  let currentMin = Infinity;

  while (left < right) {
    const middle = (left + right) >> 1;
    currentMin = Math.min(currentMin, nums[middle]);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return Math.min(currentMin, nums[left]);
}
