import { rob } from "./rob"

type testCase = {
	nums     :number[]
	expected : number
}

const testCases: testCase[] = [
	{
		nums:     [1, 2, 3, 1],
		expected: 4,
	},
	{
		nums:     [2, 7, 9, 3, 1],
		expected: 12,
	},
	{
		nums:     [],
		expected: 0,
	},
	{
		nums:     [3],
		expected: 3,
	},
	{
		nums:     [3, 5],
		expected: 5,
	},
]

describe("Rob", () => {
	testCases.forEach(({ nums, expected }) => {
		it(`should return ${expected} for nums=${nums}`, () => {
			const actual = rob(nums)
			expect(actual).toEqual(expected)
		})
	})
})
