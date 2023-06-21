export function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) {
    return false;
  }

  if (s.length === 0) {
    return true;
  }

  let i = 0;
  let j = 0;

  while (i < t.length && j < s.length) {
    if (s[j] === t[i]) {
      j += 1;
    }
    i += 1;
  }

  return j === s.length;
}
