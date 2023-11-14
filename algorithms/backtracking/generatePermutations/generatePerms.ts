export function generatePermutations(letters: string): string[] {
  const dfs = (startIndex: number, path: string[], used: boolean[], res: string[]) => {
    if (startIndex == letters.length) {
      res.push(path.join(''));
      return;
    }

    for (let i = 0; i < letters.length; i++) {
      // skip used letters
      if (used[i]) continue;
      // add letter to permutation, mark letter as used
      path.push(letters[i]);
      used[i] = true;
      dfs(startIndex + 1, path, used, res);
      // remove letter from permutation, mark letter as unused
      path.pop();
      used[i] = false;
    }
  };

  const res: string[] = [];
  const used = new Array(letters.length).fill(false);
  const path: string[] = [];
  const start = 0;
  dfs(start, path, used, res);
  return res;
}
