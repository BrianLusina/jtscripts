import { longestSubarray } from "./longestSubarrayOfOnes"

type testCase = {
	nums     :number[]
	expected :number
}

const testCases: testCase[] = [
	{
		nums:     [1, 1, 0, 1],
		expected: 3,
	},
	{
		nums:     [0, 1, 1, 1, 0, 1, 1, 0, 1],
		expected: 5,
	},
	{
		nums:     [1, 1, 1],
		expected: 2,
	},
]

describe('longestSubarrayOfOnes', () => {
	testCases.forEach(({ nums, expected }) => {
		it(`should return ${expected} from nums=${nums}`, () => {
			const actual = longestSubarray(nums)
			expect(actual).toEqual(expected)
		})
	})
})
