import { singleNumber, singleNumberMath } from "./singleNumber";

type testCase = {
	nums     :number[];
	expected: number
}

const testCases: testCase[] = [
	{
		nums:     [2, 2, 1],
		expected: 1,
	},
	{
		nums:     [4, 1, 2, 1, 2],
		expected: 4,
	},
	{
		nums:     [1],
		expected: 1,
	},
]

describe("Single Number", () => {
	testCases.forEach(({ nums, expected }) => {
		describe('using bit wise operations', () => {
			it(`should return ${expected} from nums=${nums}`, () => {
				const actual = singleNumber(nums)
				expect(actual).toEqual(expected)
			})
		})
		
		describe('using math', () => {
			it(`should return ${expected} from nums=${nums}`, () => {
				const actual = singleNumberMath(nums)
				expect(actual).toEqual(expected)
			})
		})
		
	})
})
