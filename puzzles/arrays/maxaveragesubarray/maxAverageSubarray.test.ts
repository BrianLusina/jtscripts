import { findMaxAverage } from "./maxAverageSubarray"

type testCase = {
	nums     :number[]
	k        :number
	expected: number
}

const testCases: testCase[] = [
	{
		nums:     [1, 12, -5, -6, 50, 3],
		k:        4,
		expected: 12.75000,
	},
	{
		nums:     [5],
		k:        1,
		expected: 5.00000,
	},
	{
		nums:     [0, 1, 1, 3, 3],
		k:        4,
		expected: 2.00000,
	},
	{
		nums:     [4, 0, 4, 3, 3],
		k:        5,
		expected: 2.80000,
	},
]

describe('findMaxAverage', () => {
	testCases.forEach(({ nums, k, expected }) => {
		it(`findMaxAverage(nums=${nums}, k=${k}) should equal ${expected}`, () => {
			const actual = findMaxAverage(nums, k)
			expect(actual).toEqual(expected)
		})
	})
})
