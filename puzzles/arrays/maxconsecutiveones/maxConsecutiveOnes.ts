export function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // if we encounter a 0 then we decrement k
    if (nums[right] === 0) {
      k -= 1;
    }

    // if k < 0 then we need to move the left part of the window forward
    // to try and remove the extra 0's
    if (k < 0) {
      // if the left one was zero then we adjust K
      if (nums[left] === 0) {
        k += 1;
      }

      // regardless of whether we had a 1 or a 0 we can move left side by 1
      // if we keep seeing 1's the window still keeps moving as-is
      left += 1;
    }
    right += 1;
  }
  return right - left;
}
