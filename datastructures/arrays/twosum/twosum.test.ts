import { twoNumberSum, twoSum, twoSumII, twoNumberSumII } from "./twosum";

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

const testCasesTwoNumSum: testCase[] = [
	{
		numbers:  [2, 7, 11, 15],
		target:   9,
		expected: [2, 7],
	},
	{
		numbers:  [2, 3, 4],
		target:   6,
		expected: [2, 4],
	},
	{
		numbers:  [-1, 0],
		target:   -1,
		expected: [-1, 0],
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
	
	describe('Using Two Number Sum', () => {
		testCasesTwoNumSum.forEach(({ numbers, target, expected }) => {
			it(`should return ${expected} from numbers=${numbers} and target=${target}`, () => {
				const actual = twoNumberSum(numbers, target)
				const sortedActual = actual.sort()
				const sortedExpected = expected.sort()
				expect(actual).toHaveLength(2)
				expect(sortedActual.sort()).toEqual(sortedExpected)
			})
		})
	})

	describe('Using Two Number Sum with sorting', () => {
		testCasesTwoNumSum.forEach(({ numbers, target, expected }) => {
			it(`should return ${expected} from numbers=${numbers} and target=${target}`, () => {
				const actual = twoNumberSumII(numbers, target)
				const sortedActual = actual.sort()
				const sortedExpected = expected.sort()
				expect(actual).toHaveLength(2)
				expect(sortedActual.sort()).toEqual(sortedExpected)
			})
		})
	})
})
