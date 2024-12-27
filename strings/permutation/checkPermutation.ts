/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 *
 * Complexity:
 * Time: O(nlog(n)) as sorting is used and sorting here is an O(nlog(n)) time complexity
 * Space: O(1) as no extra space is used to achieve checking for permutations
 *
 * @param s1 {string} first string
 * @param s2 {string} second string
 * @returns {boolean}
 */
export const checkPermutationWithSorting = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) return false;
  const s1Sorted = s1.toLowerCase().split('').sort().join('');
  const s2Sorted = s2.toLowerCase().split('').sort().join('');

  for (let i = 0; i < s1Sorted.length; i++) {
    if (s1Sorted[i] !== s2Sorted[i]) return false;
  }
  return true;
};

export const checkPermutationWithMap = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) return false;
  const charMap = new Map<string, number>();

  const s1Lower = s1.toLowerCase();
  const s2Lower = s2.toLowerCase();

  for (let i = 0; i < s1Lower.length; i++) {
    const char = s1Lower[i];
    if (charMap.has(char)) {
      charMap.set(char, (charMap.get(char) ?? 0) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2Lower[i];
    if (charMap.has(char)) {
      charMap.set(char, (charMap.get(char) ?? 0) - 1);
    } else {
      return false;
    }
  }

  for (const count of charMap.values()) {
    if (count !== 0) return false;
  }
  return true;
};
