/**
 * We perform the algorithm by painting the starting pixels, plus adjacent pixels of the same color, and so on.
 * Say 'color' is the color of the starting pixel. Let's floodfill the starting pixel: we change the color of that
 * pixel to the new color, then check the 4 neighboring pixels to make sure they are valid pixels of the same color,
 * and of the valid ones, we floodfill those, and so on. We can use a function dfs to perform a floodfill on a target pixel.
 * Complexity Analysis:
 * Time Complexity: O(N), where NN is the number of pixels in the image. We might process every pixel.
 * Space Complexity: O(N), the size of the implicit call stack when calling dfs.
 * @param image: image grid to flood fill
 * @param sr: starting row position
 * @param sc: starting column position
 * @param new_color: new color
 * @returns: new image grid flood filled with new colors
 */
export default function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const rows = image.length;
  const cols = image[0].length;

  if (image[sr][sc] === color) {
    return image;
  }

  const startingCell = image[sr][sc];

  const dfs = (r: number, c: number): void => {
    if (image[r][c] === startingCell) {
      image[r][c] = color;

      // move up
      if (r >= 1) {
        dfs(r - 1, c);
      }

      // move down
      if (r + 1 < rows) {
        dfs(r + 1, c);
      }

      // move left
      if (c >= 1) {
        dfs(r, c - 1);
      }

      // move right
      if (c + 1 < cols) {
        dfs(r, c + 1);
      }
    }
  };

  dfs(sr, sc);
  return image;
}
