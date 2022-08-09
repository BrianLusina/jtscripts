export default function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length === 0 || k < 1) {
    return false;
  }

  const map = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (map.has(num)) {
      // @ts-ignore
      if (index - map.get(num) <= k) {
        return true;
      }
    }
    map.set(num, index);
  }
  return false;
}
