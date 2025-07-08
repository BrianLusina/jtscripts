import { sortedSquaredArray, sortedSquaredArray2 } from "./sortedSquaredArray";

type testCase = {
	array    : number[];
	expected : number[];
}

const testCases: testCase[] =[
	{
		array:    [-4, -1, 0, 3, 10],
		expected: [0, 1, 9, 16, 100],
	},
	{
		array:    [-7, -3, 2, 3, 11],
		expected: [4, 9, 9, 49, 121],
	},
	{
		array:    [-10, -5, 0, 5, 10],
		expected: [0, 25, 25, 100, 100],
	},
]

describe(`Sorted Squared Array`, () => {
	describe(`version 1`, () => {
		testCases.forEach(({ array, expected }) => {
			it(`should return ${expected} from array=${array}`, () => {
				const actual = sortedSquaredArray(array)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe(`version 2`, () => {
		testCases.forEach(({ array, expected }) => {
			it(`should return ${expected} from array=${array}`, () => {
				const actual = sortedSquaredArray2(array)
				expect(actual).toEqual(expected)
			})
		})
	})
})