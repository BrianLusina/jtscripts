import { pivotIndex } from "./pivotIndex"

type testCase = {
	nums     :number[]
	expected : number
}

var testCases: testCase[] = [
	{
		nums:     [1, 7, 3, 6, 5, 6],
		expected: 3,
	},
	{
		nums:     [1, 2, 3],
		expected: -1,
	},
	{
		nums:     [2, 1, -1],
		expected: 0,
	},
]

describe('PivotIndex', () => {
	testCases.forEach(({ nums, expected }) => {
		it(`should return ${expected} from nums=${nums}`, () => {
			const actual = pivotIndex(nums)
			expect(actual).toEqual(expected)
		})
	})
})
