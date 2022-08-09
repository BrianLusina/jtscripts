/**
 * For all possible values of i, consider i as root, then [1….i-1] numbers will fall in the left subtree and [i+1….n]
 * numbers will fall in the right subtree.
 * So, add (i-1)*(n-i) to the answer. The summation of the products will be the answer to the number of unique BST.
 * @param n
 * @returns
 */
export function numTrees(n: number): number {
  const dp: number[] = Array.from(Array(n + 1)).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let x = 2; x <= n; x++) {
    for (let y = 1; y <= x; y++) {
      dp[x] = dp[x] + dp[x - y] * dp[y - 1];
    }
  }

  return dp[n];
}
