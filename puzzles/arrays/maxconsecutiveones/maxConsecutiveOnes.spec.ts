import { longestOnes, findMaxConsecutiveOnes } from "./maxConsecutiveOnes";

type testCase = {
	nums     : number[]
	expected: number
}

type longestOnesTestCase = {
	k: number;
} & testCase

var longestOnesTestCases: longestOnesTestCase[] = [
	{
		nums:     [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
		k:        2,
		expected: 6,
	},
	{
		nums:     [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
		k:        3,
		expected: 10,
	},
]

var maxConsecutiveOnesTestCases: testCase[] = [
	{
		nums:     [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
		expected: 4,
	},
	{
		nums:     [1, 0, 1, 1, 0, 1],
		expected: 2,
	},
	{
		nums:     [0, 0, 0],
		expected: 0,
	},
	{
		nums:     [1, 1, 1],
		expected: 3,
	},
]

describe('MaxConsecutiveOnes', () => {

	describe('FindMaxConsecutiveOnes', () => {
		maxConsecutiveOnesTestCases.forEach(({ nums, expected }) => {
			it(`should return ${expected} from nums=${nums}`, () => {
				const actual = findMaxConsecutiveOnes(nums)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe('LongestOnes', () => {
		longestOnesTestCases.forEach(({ nums, k, expected }) => {
			it(`should return ${expected} from nums=${nums} and k=${k}`, () => {
				const actual = longestOnes(nums, k)
				expect(actual).toEqual(expected)
			})
		})
	})
})

