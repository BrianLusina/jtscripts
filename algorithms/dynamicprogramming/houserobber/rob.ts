export function rob(nums: number[]): number {
  let current = 0;
  let previous = 0;

  for (const house of nums) {
    const temp = Math.max(previous + house, current);
    previous = current;
    current = temp;
  }

  return current;
}
