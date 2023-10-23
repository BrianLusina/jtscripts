import { letterCombinations } from './letterCombinations'

type testCase = {
	n       : number
	expected: string[]
}

var testCases: testCase[] = [
	{
		n:        1,
		expected: ["a", "b"],
	},
	{
		n:        2,
		expected: ["aa", "ab", "ba", "bb"],
	},
	{
		n:        3,
		expected: ["aaa", "aab", "aba", "abb", "baa", "bab", "bba", "bbb"],
	},
	{
		n:        0,
		expected: [],
	},
]

describe("Letter Combinations", () => {
	testCases.forEach(({ n, expected }) => {
		it(`should return ${expected} for n=${n}`, () => {
			const actual = letterCombinations(n)
			expect(actual).toEqual(expected)
		})
	})
})
