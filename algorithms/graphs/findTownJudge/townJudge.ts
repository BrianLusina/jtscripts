/**
 * Consider trust as a graph, all pairs are directed edge.
 * The point with in-degree - out-degree = N - 1 become the judge.
 *
 * Explanation:
 *
 * Count the degree, and check at the end.
 *
 * Time Complexity:
 * Time O(T + N), space O(N)
 * @param n Number of people in the town
 * @param trust Directed graph representation
 * @returns The town judge
 */
export function findJudge(n: number, trust: number[][]): number {
  const count: number[] = Array.from(Array(n + 1)).fill(0);

  trust.forEach(([x, y]) => {
    count[x] -= 1;
    count[y] += 1;
  });

  for (let i = 1; i < count.length; i++) {
    if (count[i] === n - 1) {
      return i;
    }
  }

  return -1;
}
