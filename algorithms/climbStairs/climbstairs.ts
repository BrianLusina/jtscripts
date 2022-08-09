export function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }

  let first = 1;
  let second = 2;

  for (let x = 3; x <= n; x++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
}
