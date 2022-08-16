import numIslands from "./numberOfIslands";

describe('Number Of Islands', () => {
    it('should return 1 for a grid of [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', () => {
        const grid = [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
          ]
          const expected  = 1
          const actual = numIslands(grid)
          expect(actual).toEqual(expected)
    });
});
