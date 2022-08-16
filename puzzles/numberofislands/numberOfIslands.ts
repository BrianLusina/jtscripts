export default function numIslands(grid: string[][]): number {
  let islands = 0;

  if (grid.length === 0 || grid[0].length === 0) {
    return islands;
  }

  const numberOfRows = grid.length;
  const numberOfCols = grid[0].length;
  const visited = new Map<string, boolean>();

  const dfs = (r: number, c: number) => {
    if (
      r < 0 ||
      r >= numberOfRows ||
      c < 0 ||
      c >= numberOfCols ||
      grid[r][c] === '0' ||
      visited.get(`${r}, ${c}`)
    ) {
      return;
    }

    visited.set(`${r}, ${c}`, true);
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    directions.forEach((direction) => {
      const [dr, dc] = direction;
      dfs(r + dr, c + dc);
    });
  };

  for (let row = 0; row < numberOfRows; row++) {
    for (let col = 0; col < numberOfCols; col++) {
      if (grid[row][col] === '1' && !visited.get(`${row}, ${col}`)) {
        islands += 1;
        dfs(row, col);
      }
    }
  }

  return islands;
}
