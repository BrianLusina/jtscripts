// longestSubarray finds the longest subarray of ones from a binary array after deleting 1 element
export function longestSubarray(nums: number[]): number {
  let longestWindow = 0;
  let left = 0;
  let lastZero = -1;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] == 0) {
      left = lastZero + 1;
      lastZero = right;
    }

    longestWindow = Math.max(longestWindow, right - left);
  }

  return longestWindow;
}
