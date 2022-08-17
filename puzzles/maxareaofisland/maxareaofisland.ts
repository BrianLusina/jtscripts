export default function maxAreaOfIsland(grid: number[][]): number {
  const numberOfRows = grid.length;
  const numberOfCols = grid[0].length;
  let maxArea = 0;

  const area = (r: number, c: number): number => {
    if (r < 0 || r >= numberOfRows || c < 0 || c >= numberOfCols || grid[r][c] === 0) {
      return 0;
    }

    grid[r][c] = 0;
    const up = area(r - 1, c);
    const down = area(r + 1, c);
    const left = area(r, c - 1);
    const right = area(r, c + 1);
    return 1 + up + down + left + right;
  };

  for (let row = 0; row < numberOfRows; row++) {
    for (let col = 0; col < numberOfCols; col++) {
      maxArea = Math.max(maxArea, area(row, col));
    }
  }

  return maxArea;
}
