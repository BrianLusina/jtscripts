export const lengthOfLongestSubstringWithoutRepeatingChars = (s: string): number => {
  const visited = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  const size = s.length;

  for (let right = 0; right < size; right++) {
    const char = s[right];

    if (visited.has(char)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      left = Math.max(left, visited.get(char)! + 1);
    }

    visited.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
