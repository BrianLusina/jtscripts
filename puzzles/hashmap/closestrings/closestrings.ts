export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();
  const set1 = new Set<string>(word1.split(''));

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], map1.has(word1[i]) ? map1.get(word1[i]) + 1 : 1);
    map2.set(word2[i], map2.has(word2[i]) ? map2.get(word2[i]) + 1 : 1);

    if (!set1.has(word2[i])) return false;
  }

  const arr1 = Array.from(map1.values()).sort();
  const arr2 = Array.from(map2.values()).sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
