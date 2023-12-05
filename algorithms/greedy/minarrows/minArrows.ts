// findMinArrowShots finds the minimum number of arrows to burst all balloons
// The answer is at least 1. First we sort the balloons by the end coordinate. Set the first end coordinate as
// current. Iterate over all balloons to check if the balloon starts after current. If so, increase answer by 1 and set
// current = right.
export function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let current = points[0][1];

  for (const point of points) {
    const left = point[0];
    const right = point[1];

    if (current < left) {
      count += 1;
      current = right;
    }
  }

  return count;
}
