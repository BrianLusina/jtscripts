export default function trap(height: number[]): number {
  if (height.length === 0 || height.length === 1) {
    return 0;
  }

  let left = 0,
    right = height.length - 1;
  let max = 0,
    min = 0;
  let rainWater = 0;

  while (left <= right) {
    min = Math.min(height[left], height[right]);
    max = Math.max(max, min);

    rainWater += max - min;

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return rainWater;
}
