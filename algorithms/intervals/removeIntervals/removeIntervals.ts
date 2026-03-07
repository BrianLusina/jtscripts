export const removeCoveredIntervals = (intervals: number[][]): number => {
  if (intervals.length == 0) {
    return 0;
  }

  // sort intervals by start time in ascending order and then by end time in descending order
  intervals.sort((x, y) => {
    if (x[0] != y[0]) {
      return x[0] - y[0];
    }
    return y[1] - x[1];
  });

  let maxEndSeen = -Infinity;
  let count = 0;
  for (const interval of intervals) {
    const currentEnd = interval[1];
    if (currentEnd > maxEndSeen) {
      count += 1;
      maxEndSeen = currentEnd;
    }
  }

  return count;
};
