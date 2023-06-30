/*
findMaxAverage finds the maximum average in sub array of length k
Finds the maximum average in a sub array of length k from the provided list/array.

Uses a sliding window to find the maximum average.
This traverses over nums just once, and on the go keep determining the sums possible for the subarrays of length k.
To understand the idea, assume that we already know the sum of elements from index i to index i+k, say it is
current_sum.

Now, to determine the sum of elements from the index i+1 to the index i+k+1, all we need to do is to subtract the
element nums[i] from x and to add the element nums[i+k+1] to current_sum. We can carry out our process based on this
idea and determine the maximum possible average.

Complexity Analysis:
- Time Complexity: O(n). Iterate over the given nums array of length n only once
- Space Complexity: O(1). Constant extra space is used
*/
export function findMaxAverage(nums: number[], k: number): number {
  const size = nums.length;
  if (size <= 1 || size === k) {
    return nums.reduce((a, b) => a + b) / k;
  }

  let currentSum = 0;
  for (let x = 0; x < k; x++) {
    currentSum += nums[x];
  }

  let currentMaxSum = currentSum;
  for (let x = k; x < size; x++) {
    currentSum += nums[x] - nums[x - k];
    currentMaxSum = Math.max(currentSum, currentMaxSum);
  }

  return currentMaxSum / k;
}
