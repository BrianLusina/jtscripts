export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: number[][] = [[], []];
  const firstSet = new Set(nums1);
  const secondSet = new Set(nums2);

  for (const n1 of firstSet) {
    if (!secondSet.has(n1)) {
      result[0].push(n1);
    }
  }

  for (const n2 of secondSet) {
    if (!firstSet.has(n2)) {
      result[1].push(n2);
    }
  }

  return result;
}
