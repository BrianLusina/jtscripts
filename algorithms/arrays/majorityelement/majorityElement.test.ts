import { majorityElementWithMap, majorityElementWithSorting, majorityElementWithVoting } from "./majorityElement"

type testCase = {
	nums     : number[]
	expected : number
}

const testCases: testCase[] = [
	{
		nums:     [3, 2, 3],
		expected: 3,
	},
	{
		nums:     [2, 2, 1, 1, 1, 2, 2],
		expected: 2,
	},
	{
		nums:     [6, 5, 5],
		expected: 5,
	},
]

describe("Majority Element", () => {
	describe("With Sorting", () => {
		testCases.forEach(({ nums, expected }) => {
			it(`should return ${expected} from nums=${nums}`, () => {
				const actual = majorityElementWithSorting(nums)
				expect(actual).toEqual(expected)
			})
		})
	})
	
	describe("With Map", () => {
		testCases.forEach(({ nums, expected }) => {
			it(`should return ${expected} from nums=${nums}`, () => {
				const actual = majorityElementWithMap(nums)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe("With Voting", () => {
		testCases.forEach(({ nums, expected }) => {
			it(`should return ${expected} from nums=${nums}`, () => {
				const actual = majorityElementWithVoting(nums)
				expect(actual).toEqual(expected)
			})
		})
	})
})

