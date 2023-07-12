export function uniqueOccurrences(arr: number[]): boolean {
  const frequencyMap = new Map<number, number>();
  for (const number of arr) {
    if (frequencyMap.has(number)) {
      frequencyMap.set(number, frequencyMap.get(number) + 1);
    } else {
      frequencyMap.set(number, 1);
    }
  }

  const frequencySet = new Set<number>(frequencyMap.values());
  return frequencySet.size === frequencyMap.size;
}
