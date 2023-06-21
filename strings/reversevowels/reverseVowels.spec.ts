import { reverseVowels } from "./reverseVowels";

type testCase = {
	word: string
	expected: string
}

var testCases: testCase[] = [
	{
		word:     "hello",
		expected: "holle",
	},
	{
		word:     "leetcode",
		expected: "leotcede",
	},
];

describe("ReverseVowels", () => {
	testCases.forEach(({ word, expected }) => {
		it(`should reverse ${word} to ${expected}`, () => {
			const actual = reverseVowels(word)
			expect(actual).toEqual(expected)
		})
	})
})
