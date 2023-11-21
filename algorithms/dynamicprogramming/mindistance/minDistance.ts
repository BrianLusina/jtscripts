/**
 * Returns the minimum number of operations required to convert a string a into string b
 *
 * Edit distance is a classic DP problem. It is used to quantify the dissimilarity of two given strings by counting
 * the minimum possible number of operations required to transform one string into the other.
 * Given that the constraints, we assume that a O(m * n) solution would pass.
 *
 * Let's define dp[i][j] as the minimum edit distance between the first i character of word1 and the first j characters
 *  of word2. In example 1, dp[3][2] would be the edit distance between word1[1..3] (HOR) and word2[1..2](RO).
 *
 * If the last character is the same, then dp[i][j] would be dp[i - 1][j - 1] because we don't need to perform any
 * operation. Otherwise, we need to perform either one. There are three possible ways to do the transformation.
 * 1. We can transform word1[1..i] to word2[1..j-1] by adding word2[j] afterwards to get word2[1..j].
 * 2. We can transform word1[1..i-1] to word2[1..j] by deleting word1[i].
 * 3. We can transform word1[1..i-1] to word2[1..j-1] by exchanging the original word1[i] for word2[j].
 *
 * Therefore, the transition would be dp[i][j] = 1 + min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) if word1[i] is
 * not equal to word2[j].
 *
 * What is the base case then? The base case is simply an edit distance between the empty string and non-empty string,
 * i.e. dp[i][0] = i and dp[0][j] = j. The answer would be dp[m][n]. This algorithm is also known as Wagner–Fischer algorithm.
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 *
 * @param word1 {string}
 * @param word2 {string}
 * @returns {number}
 */
export function minDistance(word1: string, word2: string): number {
  if (word1 === word2) {
    return 0;
  }

  if (word1.length === 0) {
    return word2.length;
  }

  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));

  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // swap or identical character
      const x = dp[i][j] + (word1[i] === word2[j] ? 0 : 1);

      // remove last character
      const y = dp[i][j + 1] + 1;

      // add last character
      const z = dp[i + 1][j] + 1;

      dp[i + 1][j + 1] = Math.min(x, y, z);
    }
  }

  return dp[m][n];
}
