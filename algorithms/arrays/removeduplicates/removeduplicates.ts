export default function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let slowPointer = 0;
  let fastPointer = 1;

  for (; fastPointer < nums.length; fastPointer++) {
    if (nums[slowPointer] !== nums[fastPointer]) {
      slowPointer += 1;
      nums[slowPointer] = nums[fastPointer];
    }
  }

  return slowPointer + 1;
}

export function removeDuplicatesTwo(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length;
  }

  // Initialize an integer k that updates the kth index of the array...
  // only when the current element does not match either of the two previous indexes...
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    // If the index does not match the (k-1)th and (k-2)th elements, count that element...
    if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k += 1;
    }
    // If the index matches the (k-1)th and (k-2)th elements, we skip it...
  }

  // Return k after placing the final result in the first k slots of nums...
  return k;
}
