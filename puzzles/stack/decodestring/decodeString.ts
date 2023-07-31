export function decodeString(s: string): string {
  const stack: [number, string][] = [];
  let result = '';
  let currentMultiplier = 0;

  for (const char of s) {
    if (!isNaN(Number(char))) {
      currentMultiplier = currentMultiplier * 10 + +char;
    } else if (char == '[') {
      stack.push([currentMultiplier, result]);
      currentMultiplier = 0;
      result = '';
    } else if (char == ']') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const [previousMultiplier, prevString] = stack.pop();
      result = prevString + result.repeat(previousMultiplier);
    } else {
      result += char;
    }
  }

  return result;
}
