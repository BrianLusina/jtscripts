function longestSubstringUtil(s: string, start: number, end: number, k: number): number {
  if (end < k) {
    return 0;
  }

  const countMap = Array(26).fill(0);

  for (let x = start; x < end; x++) {
    countMap[s.charCodeAt(x) - 'a'.charCodeAt(0)] += 1;
  }

  for (let mid = start; mid < end; mid++) {
    if (countMap[s.charCodeAt(mid) - 'a'.charCodeAt(0)] >= k) {
      continue;
    }

    let midNext = mid + 1;

    while (midNext < end && countMap[s.charCodeAt(midNext) - 'a'.charCodeAt(0)] < k) {
      midNext += 1;
    }

    const leftSub = longestSubstringUtil(s, start, mid, k);
    const rightSub = longestSubstringUtil(s, midNext, end, k);

    return Math.max(leftSub, rightSub);
  }

  return end - start;
}

/**
 * Divide and Conquer is one of the popular strategies that work in 2 phases.
 *
 * Divide the problem into subproblems. (Divide Phase).
 * Repeatedly solve each subproblem independently and combine the result to solve the original problem. (Conquer Phase)
 * We could apply this strategy by recursively splitting the string into substrings and combine the result to find the
 * longest substring that satisfies the given condition. The longest substring for a string starting at index start and
 *  ending at index end can be given by,
 *
 * longestSustring(start, end) = max(longestSubstring(start, mid), longestSubstring(mid+1, end))
 * Finding the split position (mid)
 *
 * The string would be split only when we find an invalid character. An invalid character is the one with a frequency
 * of less than k. As we know, the invalid character cannot be part of the result, we split the string at the index
 * where we find the invalid character, recursively check for each split, and combine the result.
 *
 * Algorithm
 *
 * Build the countMap with the frequency of each character in the string s.
 * Find the position for mid index by iterating over the string. The mid index would be the first invalid character in
 * the string.
 * Split the string into 2 substrings at the mid index and recursively find the result.
 * To make it more efficient, we ignore all the invalid characters after the mid index as well, thereby reducing the
 * number of recursive calls.
 *
 * Complexity Analysis
 *
 * Time Complexity: O(N^2), where N is the length of string ss. Though the algorithm performs better in most cases,
 * the worst case time complexity is still (N ^ 2).
 *
 * In cases where we perform split at every index, the maximum depth of recursive call could be O(N). For each
 * recursive call it takes O(N) time to build the countMap resulting in O(n ^ 2) time complexity.
 *
 * Space Complexity: O(N) This is the space used to store the recursive call stack. The maximum depth of recursive
 * call stack would be O(N).
 *
 * @param s: String to evaluate for
 * @param k: length of the longest substring
 * @return: length of longest substring with at most repeating characters of length k
 */
export function longestSubstring(s: string, k: number): number {
  return longestSubstringUtil(s, 0, s.length, k);
}
