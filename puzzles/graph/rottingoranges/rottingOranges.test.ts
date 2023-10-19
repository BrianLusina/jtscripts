import { orangesRotting } from "./rottingOranges"

type testCase = {
	grid     :number[][]
	expected: number
}

const testCases: testCase[] = [
	{
		grid:     [[2, 1, 1], [1, 1, 0], [0, 1, 1]],
		expected: 4,
	},
	{
		grid:     [[2, 1, 1], [0, 1, 1], [1, 0, 1]],
		expected: -1,
	},
	{
		grid:     [[0, 2]],
		expected: 0,
	},
	{
		grid: [[2,1,1],[1,1,1],[0,1,2]],
		expected: 2
	}
]

describe("RottingOranges", () => {
	testCases.forEach(({ grid, expected }) => {
		it(`for grid of ${grid} should return ${expected}`, () => {
			const actual = orangesRotting(grid)
			expect(actual).toEqual(expected)
		})
	})
})
