import { twoSum, twoSumII } from "./twosum";

type testCase = {
	numbers  :number[];
	target : number;
	expected: number[];
}

const testCases: testCase[] = [
	{
		numbers:  [2, 7, 11, 15],
		target:   9,
		expected: [1, 2],
	},
	{
		numbers:  [2, 3, 4],
		target:   6,
		expected: [1, 3],
	},
	{
		numbers:  [-1, 0],
		target:   -1,
		expected: [1, 2],
	},
]

describe('Two Sum', () => {
	xdescribe('Using a Map', () => {	
		testCases.forEach(({ numbers, target, expected }) => {
			it(`should return ${expected} from numbers=${numbers} and target=${target}`, () => {
				const actual = twoSum(numbers, target)
				expect(actual).toEqual(expected)
			})
		})
	})
	
	describe('Using Two Pointers', () => {
		testCases.forEach(({ numbers, target, expected }) => {
			it(`should return ${expected} from numbers=${numbers} and target=${target}`, () => {
				const actual = twoSumII(numbers, target)
				expect(actual).toEqual(expected)
			})
		})		
	})
})
