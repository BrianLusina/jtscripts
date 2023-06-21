export function maxArea(height: number[]): number {
  let maxPossibleArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left], height[right]);
    maxPossibleArea = Math.max(maxPossibleArea, area);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxPossibleArea;
}
