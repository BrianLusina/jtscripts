import { nextGreaterElement } from "./nextGreater"

type testCase = {
	nums     :number[]
	expected :number[]
}

const testCases: testCase[] = [
	{
		nums:     [4, 5, 2, 10],
		expected: [5, 10, 10, -1],
	},
	{
		nums:     [3, 2, 1],
		expected: [-1, -1, -1],
	},
	{
		nums:     [4, 5, 2, 25],
		expected: [5, 25, 25, -1],
	},
	{
		nums:     [13, 7, 6, 12],
		expected: [-1, 12, 12, -1],
	},
	{
		nums:     [1],
		expected: [-1],
	},
	{
		nums:     [34, 35, 27, 42, 5, 28, 39, 20, 28],
		expected: [35, 42, 42, -1, 28, 39, -1, 28, -1],
	},
	{
		nums:     [11, 13, 21, 3],
		expected: [13, 21, -1, -1],
	},
	{
		nums:     [6, 8, 0, 1, 3],
		expected: [8, -1, 1, 3, -1],
	},
	{
		nums:     [3, 8, 4, 1, 2, 6, 7, 2],
		expected: [8, -1, 6, 2, 6, 7, -1, -1],
	},
	{
		nums:     [1, 3, 2, 4],
		expected: [3, 4, 4, -1],
	},
	{
		nums:     [7, 8, 1, 4],
		expected: [8, -1, 4, -1],
	},
]

describe('Next Greater Element', () => {
	testCases.forEach(({ nums, expected }) => {
		it(`should return ${expected} for nums=${nums}`, () => {
			const actual = nextGreaterElement(nums)
			expect(actual).toEqual(expected)
		})
	})
})
