import { longestCommonSubsequence } from "./lcs"

type testCase = {
	text1    : string
	text2    : string
	expected : number
}

var testCases: testCase[]=[
	{
		text1:    "abcde",
		text2:    "ace",
		expected: 3,
	},
	{
		text1:    "abc",
		text2:    "abc",
		expected: 3,
	},
	{
		text1:    "abc",
		text2:    "def",
		expected: 0,
	},
]

describe("Longest Common Subsequence", () => {
	testCases.forEach(({ text1, text2, expected }) => {
		it(`should return ${expected} for text1=${text1} and text2=${text2}`, () => {
			const actual = longestCommonSubsequence(text1, text2)
			expect(actual).toEqual(expected)
		})
	})
})
