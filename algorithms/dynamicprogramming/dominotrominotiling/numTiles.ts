const MOD = 1e9 + 7;

export function numTilings(n: number): number {
  if (n < 3) {
    return n;
  }

  const dp = Array(n + 1)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .fill()
    .map(() => Array(3).fill(0));

  dp[0][0] = dp[1][0] = 1;
  dp[1][1] = dp[1][2] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 2][1] + dp[i - 2][2]) % MOD;

    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;

    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
  }

  return dp[n][0];
}
