export default function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number,
): boolean {
  if (nums.length === 0 || k < 1 || t < 0) {
    return false;
  }

  const map = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const remappedNum = num - Number.MIN_VALUE;
    const bucket = remappedNum / (t + 1);

    if (
      map.has(bucket) ||
      // @ts-ignore
      (map.has(bucket - 1) && remappedNum - map.get(bucket - 1) <= t) ||
      // @ts-ignore
      (map.has(bucket + 1) && map.get(bucket + 1) - remappedNum <= t)
    ) {
      return true;
    }

    if (map.size >= k) {
      const lastBucket = (nums[index - k] - Number.MIN_VALUE) / (t + 1);
      map.delete(lastBucket);
    }
    map.set(bucket, remappedNum);
  }
  return false;
}
