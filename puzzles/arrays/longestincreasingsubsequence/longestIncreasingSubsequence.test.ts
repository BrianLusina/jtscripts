import { longestIncreasingSubsequence } from "./longestIncreasingSubsequence"

type testCase = {
	nums     :number[]
	expected: number
}

var testCases: testCase[] = [
	{
		nums:     [1, 2, 1, 5],
		expected: 3,
	},
	{
		nums:     [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
		expected: 6,
	},
	{
		nums:     [3, 10, 2, 1, 20],
		expected: 3,
	},
	{
		nums:     [3, 2],
		expected: 1,
	},
	{
		nums:     [50, 3, 10, 7, 40, 80],
		expected: 4,
	},
	{
		nums:     [10, 9, 2, 5, 3, 7, 101, 18],
		expected: 4,
	},
	{
		nums:     [0, 1, 0, 3, 2, 3],
		expected: 4,
	},
	{
		nums:     [7, 7, 7, 7, 7, 7, 7],
		expected: 1,
	},
]


describe("Longest Increasing Subsequence", () => {
	testCases.forEach(({ expected, nums }) => {
		it(`should return ${expected} for input of nums=${nums}`, () => {
			const actual = longestIncreasingSubsequence(nums)
			expect(actual).toEqual(expected)
		})
	})
})
