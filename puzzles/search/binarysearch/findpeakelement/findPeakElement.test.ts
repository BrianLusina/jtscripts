import { findPeakElement } from './findPeakElement';


type testCase = {
	nums     :number[]
	expected : number
}

const testCases: testCase[] = [
	{
		nums:     [1, 2, 3, 1],
		expected: 2,
	},
	{
		nums:     [1, 2, 1, 3, 5, 6, 4],
		expected: 5,
	},
	{
		nums:     [0, 1, 2, 3, 2, 1, 0],
		expected: 3,
	},
	{
		nums:     [0, 10, 3, 2, 1, 0],
		expected: 1,
	},
	{
		nums:     [0, 10, 0],
		expected: 1,
	},
	{
		nums:     [0, 1, 2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 133, 132, 111, 0],
		expected: 16,
	},
	{
		nums:     [0, 10, 5, 2],
		expected: 1,
	},
	{
		nums:     [0, 2, 1, 0],
		expected: 1,
	},
	{
		nums:     [0, 1, 0],
		expected: 1,
	},
]

describe('FindPeakElement', () => {
	testCases.forEach(({ nums, expected }) => {
		it(`should return ${expected} from nums=${nums}`, () => {
			const actual = findPeakElement(nums)
			expect(actual).toEqual(expected)
		})
	})
})

