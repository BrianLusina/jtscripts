/**
 * merge uses a 3 pointer approach to merge sorted arrays.
 * The first pointer i points to the last element of the subarray of size m in the nums1 array,
 * The second pointer j points to the last element of the nums2 array of size n.
 * The pointer k points to the end of the array nums1 of size m + n.
 * Until the pointer j reaches 0 (that is, until we reach the beginning of the nums2 array), we check the following conditions:
 * - If nums1[i] <= nums2[j] => write nums2[j] to nums1[k] and then decrease the value of j
 * - In all other cases, write nums1[i] to nums1[k] and then decrease the value of i
 * Complexity:
 * - Time complexity: O(n+m)
 * - Space complexity: O(1)
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j -= 1;
      k -= 1;
    } else {
      nums1[k] = nums1[i];
      i -= 1;
      k -= 1;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    k -= 1;
    j -= 1;
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    k -= 1;
    i -= 1;
  }
}
