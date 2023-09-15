import { singleNonDuplicate } from "./singleNonDuplicate"

type testCase = {
	nums     : number[]
	expected : number
}

const testCases: testCase[] = [
	{
		nums:     [1, 1, 2, 3, 3, 4, 4, 8, 8],
		expected: 2,
	},
	{
		nums:     [3, 3, 7, 7, 10, 11, 11],
		expected: 10,
	},
]

describe('SingleNonDuplicate', () => {
	testCases.forEach(({ nums, expected }) => {
		it(`should return ${expected} for nums=${nums}`, () => {
			const actual = singleNonDuplicate(nums)
			expect(actual).toEqual(expected)
		})
	})
})
