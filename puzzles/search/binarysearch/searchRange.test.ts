import { searchRange } from "./searchRange"

type testCase = {
	nums     : number[]
	target   : number
	expected : number[]
}

const testCases: testCase[] = [
	{
		nums:     [5, 7, 7, 8, 8, 10],
		target:   8,
		expected: [3, 4],
	},
	{
		nums:     [5, 7, 7, 8, 8, 10],
		target:   6,
		expected: [-1, -1],
	},
	{
		nums:     [],
		target:   0,
		expected: [-1, -1],
	},
	{
		nums:     [1],
		target:   1,
		expected: [0, 0],
	},
	{
		nums:     [1, 3],
		target:   1,
		expected: [0, 0],
	},
	{
		nums:     [1, 4],
		target:   4,
		expected: [1, 1],
	},
	{
		nums:     [1, 2, 3],
		target:   2,
		expected: [1, 1],
	},
	{
		nums:     [3, 3, 3],
		target:   3,
		expected: [0, 2],
	},
]

describe('SearchRange', () => {
	testCases.forEach(({ nums, target, expected }) => {
		it(`for nums=${nums}, target=${target}, should return ${expected}`, () => {
			const actual = searchRange(nums, target)
			expect(actual).toEqual(expected)
		})
	})
})
