// uniquePathsMath uses a math formula to determine the number of unique paths.
// We need to make n-1 + m-1 steps in total. How many ways to choose from m-1 right steps and n-1 down steps out of the total steps?
export function uniquePathsMath(m: number, n: number): number {
  let ans = 1;
  let x = m + n - 2;
  const k = Math.min(n - 1, m - 1);

  for (let i = 1; i < k + 1; i++) {
    ans *= x;
    x -= 1;
    ans /= i;
  }

  return ans;
}

// uniquePathsTopDown uses top-down approach with memoization
// We are going to traverse all the unique paths, and store the values of the number of unique paths of each cell
// in our cache. Slight difference, we can start at m,n and traverse towards 0,0 to get the same result, which allows
// us to reuse the function as our recursive function.
//
// Complexity Analysis:
// - Time Complexity: O(m*n)
// - Space Complexity: O(m*n)
export function uniquePathsTopDown(m: number, n: number): number {
  const cache: Map<string, number> = new Map();

  const uniquePathsHelper = (row: number, col: number): number => {
    const search = `${row}#${col}`;

    if (cache.has(search)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return cache.get(search);
    }

    let result: number;
    if (row == 1 || col == 1) {
      result = 1;
    } else {
      result = uniquePathsHelper(row - 1, col) + uniquePathsHelper(row, col - 1);
    }

    cache.set(search, result);
    return result;
  };

  return uniquePathsHelper(m, n);
}

// uniquePathsBottomUp uses bottom-up approach
// Complexity Analysis:
// - Time Complexity: O(m*n)
// - Space Complexity: O(n)
export function uniquePathsBottomUp(m: number, n: number): number {
  let row = Array(n).fill(1);

  // go through all rows except the last one
  for (let i = 0; i < m - 1; i++) {
    const newRow = Array(n).fill(1);

    // go through every column except the right most column
    // because the last value in every row is 1
    // start at second to last position and
    // keep going until we get to the beginning (reverse order)

    for (let j = n - 2; j > -1; j--) {
      // right value + value below
      newRow[j] = newRow[j + 1] + row[j];
    }
    // update the row
    row = newRow;
  }

  return row[0];
}
