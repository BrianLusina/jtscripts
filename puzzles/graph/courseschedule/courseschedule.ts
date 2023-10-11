const WHITE = 1;
const GRAY = 2;
const BLACK = 3;

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adjacencyList: Map<number, number[]> = new Map();

  for (const prerequisite of prerequisites) {
    const source = prerequisite[1];
    const destination = prerequisite[0];
    if (adjacencyList.has(source)) {
      const neighbours = adjacencyList.get(source);
      neighbours?.push(destination);
      adjacencyList.set(source, neighbours || []);
    } else {
      adjacencyList.set(source, [destination]);
    }
  }

  let isPossible = true;
  const color: Map<number, number> = new Map();

  for (let num = 0; num < numCourses; num++) {
    color.set(num, WHITE);
  }

  const dfs = (node: number) => {
    if (!isPossible) {
      return;
    }

    color.set(node, GRAY);

    if (adjacencyList.has(node)) {
      for (const neighbour of adjacencyList.get(node) || []) {
        if (color.get(neighbour) === WHITE) {
          dfs(neighbour);
        } else if (color.get(neighbour) === GRAY) {
          isPossible = false;
        }
      }
    }

    color.set(node, BLACK);
  };

  for (let index = 0; index < numCourses; index++) {
    if (color.get(index) === WHITE) {
      dfs(index);
    }
  }

  return isPossible;
}
