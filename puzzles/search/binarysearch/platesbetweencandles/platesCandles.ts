export function platesBetweenCandles(s: string, queries: number[][]): number[] {
  // This will hold the indices of candles in the plates and candles
  // This allows us to do basic arithmetic on the indices to find the number of plates.
  // Also, we perform a binary search on this candle list.
  // We find the left_pos and right_pos indicating the outside candles positions in the input.
  // Then, We know that the number of plates is given by the interval between the two
  // bounding candles subtracted by the number of candles in between.
  // With the indices left_pos and right_pos, we can
  // derive the number of plates to be (candles[right_pos] - candles[left_pos]) - (right_pos - left_pos).
  // Space complexity is O(c) where c is the number of candles.
  // The worst case is that there are all candles.
  const candles: number[] = [];

  // Adds all candle indices on the table to the candle list.
  // Time Complexity is O(n) where n is the number of candles and plates. We have to scan over all plates and candles
  // to check which is a candle before adding its index.
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] == '|') {
      candles.push(idx);
    }
  }

  // our result list will store answers to each query
  const result: number[] = [];

  for (const [qLeft, qRight] of queries) {
    let leftPos = -1;
    let rightPos = -1;

    // 1. find the index of the first candle that comes after q_left
    // the index left_pos in candles of the first candle that is greater than q_left means that whenever
    // candles[index] >= q_left, we can update left_pos until we find the leftmost index at candles[index] >= q_left
    // (recurse on left-half).
    let left = 0;
    let right = candles.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (candles[mid] >= qLeft) {
        leftPos = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 2. Find the index of the last candle that comes before q_right
    // The index right_pos in candles of the last candle that is smaller than q_right means that whenever
    // candles[index] <= q_right, we can update right_pos until we find the rightmost index
    // at candles[index] >= q_right (recurse on right-half).
    left = 0;
    right = candles.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (candles[mid] <= qRight) {
        left = mid + 1;
        rightPos = mid;
      } else {
        right = mid - 1;
      }
    }

    // result = range between two outermost candles - candle count in between
    if (leftPos != -1 && rightPos != -1 && rightPos >= leftPos) {
      const numberOfCandles = candles[rightPos] - candles[leftPos] - (rightPos - leftPos);
      result.push(numberOfCandles);
    } else {
      result.push(0);
    }
  }

  return result;
}
