/**
 * Finds the element that occurs more than n/2 times, where n is the size of the input list.
 *
 * This first sorts the list in place and finds the element at index n/2, since the majority element will always occupy
 * the middle position when the array is sorted.
 * Complexity:
 *   - Time Complexity O(n log(n)) since sorting an array of size n takes O(n log(n)) time
 *   - Space Complexity O(1) since no extra space is required
 *
 * @param {number[]} nums array of integers
 * @returns {number} majority element
 */
export function majorityElementWithSorting(nums: number[]): number {
  nums.sort();
  const n = nums.length;
  return nums[Math.floor(n / 2)];
}

/**
 * Finds the element that occurs more than n/2 times, where n is the size of the input list.
 *
 * This uses a hash map to keep track of how frequent an element occurs in the list.
 * The key value pairs will be the element itself, while the value will be the count/occurrences in the hash map.
 *
 * Complexity:
 *   - Time Complexity O(n):
 *     Since iteration is done through the array once to count the occurrences and then iterates through the hash map,
 *     which has a maximum size of the number of distinct elements in the array.
 *   - Space Complexity O(n) since a hashmap is used to keep track of frequencies of the elements in the list.
 *
 * @param {number[]} nums array of integers
 * @returns {number} majority element
 */
export function majorityElementWithMap(nums: number[]): number {
  const hashMap = new Map<number, number>();

  // Keep track of the count of each element from the list in the hash map
  for (const num of nums) {
    if (hashMap.has(num)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  // Update n to be n/2, where n is the size of the list.
  // This is done to check if an element occurs more than n/2 times
  const n = nums.length / 2;

  for (const [k, v] of hashMap.entries()) {
    if (v > n) {
      return k;
    }
  }

  // If no majority element is found in the hash map, 0 is returned as the default value.
  // This will only occur if the input array is empty or does not have a majority element.
  return 0;
}

/**
 * Finds the element that occurs more than n/2 times, where n is the size of the input list.
 *
 * This uses Moore's Voting Algorithm based on the fact that if there is a majority element in an array, it
 * will always remain in the lead, even after encountering other elements.
 *
 * Reference: https://en.wikipedia.org/wiki/Boyer-Moore_majority_vote_algorithm
 *
 * 1. The algorithm starts by assuming the first element as the majority candidate and sets the count to 1.
 * 2. As it iterates through the array, it compares each element with the candidate:
 *  - If the current element matches the candidate, it suggests that it reinforces the majority element because it
 * appears again.
 * Therefore, the count is incremented by 1.
 * - If the current element is different from the candidate, it suggests that there might be an equal number of
 * occurrences of the majority element and other elements.
 * Therefore, the count is decremented by 1.
 * Note that decrementing the count doesn't change the fact that the majority element occurs more than n/2
 * times.
 *
 * 3. If the count becomes 0, it means that the current candidate is no longer a potential majority element.
 *  In this case, a new candidate is chosen from the remaining elements.
 * 4. The algorithm continues this process until it has traversed the entire array.
 * 5. The final value of the candidate variable will hold the majority element.
 *
 * Explanation of Correctness:
 * The algorithm works on the basis of the assumption that the majority element occurs more than n/2 times in the
 * array.
 * This assumption guarantees that even if the count is reset to 0 by other elements, the majority element will
 * eventually regain the lead.
 *
 * Let's consider two cases:
 * 1. If the majority element has more than n/2 occurrences:
 *  The algorithm will ensure
 *  that the count remains positive for the majority element throughout the traversal,
 * guaranteeing that it will be selected as the final candidate.
 *
 * 2. If the majority element has exactly n/2 occurrences:
 *
 * In this case, there will be an equal number of occurrences for the majority element and the remaining elements
 * combined.
 * However, the majority element will still be selected as the final candidate because it will always
 * have a lead over any other element.
 *
 * In both cases, the algorithm will correctly identify the majority element.
 *
 * Complexity:
 * - Time Complexity O(n):
 *  Since iteration is done through the array once.
 * - Space Complexity O(1):
 *  No extra space is used to perform the algorithm.
 *
 * @param {number[]} nums array of integers
 * @returns {number} majority element
 */
export function majorityElementWithVoting(nums: number[]): number {
  // Initialize two variables, count and candidate. Set count to 0 and candidate to an arbitrary value.
  let count = 0;
  let candidate = 0;

  // Iterate through nums
  for (const num of nums) {
    // if the count is 0, assign the current element as the new candidate and increment count by 1
    if (count === 0) {
      candidate = num;
    }

    // if the current element is the same as the candidate, increment count by 1
    if (candidate === num) {
      count += 1;
    } else {
      // if the current element is different, decrement count by 1
      count -= 1;
    }
  }

  // After the iteration, the candidate variable will hold the majority element.
  return candidate;
}
