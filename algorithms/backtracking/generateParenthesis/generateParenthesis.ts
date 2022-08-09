export default function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const result: string[] = [];

  const backtrack = (openCount: number, closedCount: number) => {
    if (openCount === closedCount && openCount === n && closedCount === n) {
      result.push(stack.join(''));
      return;
    }

    if (openCount < n) {
      stack.push('(');
      backtrack(openCount + 1, closedCount);
      stack.pop();
    }

    if (closedCount < openCount) {
      stack.push(')');
      backtrack(openCount, closedCount + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return result;
}
