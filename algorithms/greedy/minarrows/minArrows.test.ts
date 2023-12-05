import { findMinArrowShots } from "./minArrows"

type testCase = {
	points   : number[][]
	expected: number
}

const testCases: testCase[] = [
	{
		points:   [[10, 16], [2, 8], [1, 6], [7, 12]],
		expected: 2,
	},
	{
		points:  [[1, 2], [3, 4], [5, 6], [7, 8]],
		expected: 4,
	},
	{
		points:   [[1, 2], [2, 3], [3, 4], [4, 5]],
		expected: 2,
	},
]

describe('Find Min Arrows', () => {
	for (const {points, expected } of testCases) {
		it(`should return ${expected} from points=${points}`, () => {
			const actual = findMinArrowShots(points)
			expect(actual).toEqual(expected)
		})
	}
})
