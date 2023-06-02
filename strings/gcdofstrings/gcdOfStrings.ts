export default function gcdOfStringsBruteForce(str1: string, str2: string): string {
  const len1 = str1.length;
  const len2 = str2.length;

  const n = Math.min(len1, len2);

  const valid = (k: number): boolean => {
    if (len1 % k > 0 || len2 % k > 0) {
      return false;
    }

    const n1 = len1 / k;
    const n2 = len2 / k;
    const base = str1.slice(-k);

    return str1 == base.repeat(n1) && str2 == base.repeat(n2);
  };

  for (let i = n; i > 0; i--) {
    if (valid(i)) {
      return str1.slice(-i);
    }
  }

  return '';
}
