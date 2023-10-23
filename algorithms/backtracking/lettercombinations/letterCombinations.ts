export function letterCombinations(n: number): string[] {
  const result: string[] = [];
  if (n == 0) {
    return result;
  }

  const dfs = (startIndex: number, path: string[]) => {
    if (startIndex == n) {
      result.push(path.join(''));
      return;
    }

    for (const char of ['a', 'b']) {
      path.push(char);
      dfs(startIndex + 1, path);
      path.pop();
    }
  };

  dfs(0, []);

  return result;
}
