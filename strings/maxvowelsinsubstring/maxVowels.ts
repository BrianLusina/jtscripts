export function maxVowels(s: string, k: number): number {
  const vowels = new Set('aeiou');
  let currentMax = 0;
  let maxLength = 0;

  for (let index = 0; index < s.length; index++) {
    if (vowels.has(s[index])) {
      currentMax += 1;
    }

    if (index >= k) {
      if (vowels.has(s[index - k])) {
        currentMax -= 1;
      }
    }

    maxLength = Math.max(currentMax, maxLength);
  }

  return maxLength;
}
