export function longestIncreasingSubsequence(nums: number[]): number {
  const piles = [];

  for (const num of nums) {
    // binary search over the piles
    let left = 0;
    let right = piles.length;

    while (left < right) {
      const middle = Math.floor((right + left) / 2);
      if (num > piles[middle]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }

    // if our left pointer isn't larger than piles array
    // it means we found a place to put our number
    if (left < piles.length) {
      // overwrite piles[left] with the current num
      piles[left] = num;
    } else {
      // left > length of piles array, it means there is no pile with a large
      // enough number to put this number on top of
      // create a new pile by appending current number to end
      piles.push(num);
    }
  }

  return piles.length;
}
