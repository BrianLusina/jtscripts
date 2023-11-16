export function numberOfWaysToDecodeMessage(digits: string): number {
  const memo = new Map<number, number>();

  const dfs = (startIndex: number): number => {
    if (memo.has(startIndex)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return memo.get(startIndex)!;
    }

    if (startIndex === digits.length) {
      return 1;
    }

    let ways = 0;

    // can't decode string with leading 0
    if (digits[startIndex] == '0') {
      return ways;
    }

    // decode 1 digit
    ways += dfs(startIndex + 1);

    // decode 2 digits
    if (
      startIndex + 2 <= digits.length &&
      parseInt(digits.substring(startIndex, startIndex + 2)) <= 26
    ) {
      ways += dfs(startIndex + 2);
    }

    memo.set(startIndex, ways);
    return ways;
  };

  return dfs(0);
}
