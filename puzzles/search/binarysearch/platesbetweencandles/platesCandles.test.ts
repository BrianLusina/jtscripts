import { platesBetweenCandles } from "./platesCandles"

type testCase = {
	s        : string
	queries  : number[][]
	expected : number[]
}

const testCases: testCase[] = [
	{
		s:        "**|**|***|",
		queries:  [[2, 5], [5, 9]],
		expected: [2, 3],
	},
	{
		s:        "***|**|*****|**||**|*",
		queries:  [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]],
		expected: [9, 0, 0, 0, 0],
	},
	{
		s:        "||**||**|*",
		queries:  [[3, 8]],
		expected: [2],
	},
]

describe('PlatesBetweenCandles', () => {
	testCases.forEach(({ s, queries, expected }) => {
		it(`should return ${expected} for s =${s} and queries=${queries}`, () => {
			const actual = platesBetweenCandles(s, queries)
			expect(actual).toEqual(expected)
		})
	})
})
