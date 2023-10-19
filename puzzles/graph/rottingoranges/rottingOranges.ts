/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * orangesRotting returns the minimum time it will take to make all oranges rotten in a grid. If this is not possible, -1 is returned
 * Since we must track time, a breadth-first search approach makes the most sense, as we can track each iteration of
 * our bfs loop, and update the time before moving on to the next.
 *
 * First, we need to iterate our grid looking for rotten oranges to add to our queue. Note, if we also take the time
 * during this iteration to count the number of fresh oranges, we can save a little time in the end.
 *
 * Once we have a queue of oranges, we just need to run our BFS and update our time after we exhaust all current cells
 * in each iteration of it, and finally return the time as long as we have successfully converted all fresh oranges to
 * rotten ones.
 *
 * Time Complexity: O(m*n)
 * where m is the number of rows, and n is the number of columns. We must traverse the graph once to find all our
 * fresh/rotten oranges, and then potentially again during our BFS.
 *
 * Space Complexity: O(m*n). In the worst case, all oranges will be rotten, and our queue will be of size m*n.
 */
export function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  // keep track of rotting oranges
  const queue: { row: number; col: number }[] = [];

  // number of fresh oranges
  let fresh = 0;

  // keep track of the time
  let time = 0;

  // directions in the form of x,y
  const directions = [
    { row: 1, col: 0 },
    { row: -1, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: -1 },
  ];

  // iterate the grid to find the rotting oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push({ row: r, col: c });
      }

      if (grid[r][c] === 1) {
        fresh += 1;
      }
    }
  }

  // while we have a queue of rotten oranges, and there are still fresh oranges.
  while (queue.length > 0 && fresh !== 0) {
    for (let i = 0; i < queue.length; i++) {
      const rotting_orange_coordinates = queue.shift();

      if (!rotting_orange_coordinates) {
        throw new Error('empty array');
      }

      const { row: rottingOrangeRow, col: rottingOrangeCol } = rotting_orange_coordinates;

      // check the 4 adjacent oranges of this rotten orange
      for (const { row: dx, col: dy } of directions) {
        // position of adjacent orange
        const adjacentOrangeRow = dx + rottingOrangeRow;
        const adjacentOrangeCol = dy + rottingOrangeCol;

        // check the adjacent orange is in bounds and fresh
        if (
          adjacentOrangeRow >= 0 &&
          adjacentOrangeRow < rows &&
          adjacentOrangeCol >= 0 &&
          adjacentOrangeCol < cols &&
          grid[adjacentOrangeRow][adjacentOrangeCol] === 1
        ) {
          // they are fresh, therefore, it becomes rotten
          grid[adjacentOrangeRow][adjacentOrangeCol] = 2;
          fresh -= 1;

          // add new rotten orange to the queue, we won't reach it on this iteration, as we are only iterating
          // through the rotten from the last iteration
          queue.push({ row: adjacentOrangeRow, col: adjacentOrangeCol });
        }
      }
    }
    // since we only looped through the rotten oranges inside the queue, and not the adjacent ones, we can increment
    // the time now, and on the next iteration we will check those adjacent ones
    time += 1;
  }

  // if we turned all oranges rotten, return the time, else -1
  return fresh === 0 ? time : -1;
}
