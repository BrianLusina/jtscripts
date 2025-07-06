import { IsValidSubsequence, IsValidSubsequenceV2 } from './isValidSubsequence';

type testCase = {
	array    :number[];
	sequence :number[];
	expected :boolean;
}

const testCases: testCase[] = [
	{
		array:    [5, 1, 22, 25, 6, -1, 8, 10],
		sequence: [1, 6, -1, 10],
		expected: true,
	},
	{
		array:    [5, 1, 22, 25, 6, -1, 8, 10],
		sequence: [5, 1, 22, 6, -1, 8, 10],
		expected: true,
	},
	{
		array:    [5, 1, 22, 25, 6, -1, 8, 10],
		sequence: [5, 6, 1, 10, 22, 8, -1, 25],
		expected: false,
	},
	{
		array:    [1, 2, 3, 4],
		sequence: [1, 3, 4],
		expected: true,
	},
	{
		array:    [1, 2, 3, 4],
		sequence: [2, 4],
		expected: true,
	},
]

describe("IsValidSubsequence", () => {

	describe('using two pointers', () => {
		testCases.forEach((testCase) => {
			it(`should return ${testCase.expected} from array=${testCase.array} and sequence=${testCase.sequence}`, () => {
				const actual = IsValidSubsequence(testCase.array, testCase.sequence)
				expect(actual).toEqual(testCase.expected)
			})
		})
	})

	describe('iterating through main array', () => {
		testCases.forEach((testCase) => {
			it(`should return ${testCase.expected} from array=${testCase.array} and sequence=${testCase.sequence}`, () => {
				const actual = IsValidSubsequenceV2(testCase.array, testCase.sequence)
				expect(actual).toEqual(testCase.expected)
			})
		})
	})
})