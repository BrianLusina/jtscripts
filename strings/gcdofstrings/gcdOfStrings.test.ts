import gcdOfStringsBruteForce, { gcdOfStringsGcd } from "./gcdOfStrings"

type testCase = {
	word1:    string
	word2:    string
	expected: string
}

const testCases: testCase[] = [
	{
		word1:    "ABCABC",
		word2:    "ABC",
		expected: "ABC",
	},
	{
		word1:    "ABABAB",
		word2:    "ABAB",
		expected: "AB",
	},
	{
		word1:    "LEET",
		word2:    "CODE",
		expected: "",
	},
]

describe("GCD of strings", () => {
	describe('Brute Force Approach', () => {
		testCases.forEach(({ word1, word2, expected }) => {
			it(`Should return ${expected} from str1=${word1} and str2=${word2}`, () => {
				const actual = gcdOfStringsBruteForce(word1, word2)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe('GCD', () => {
		testCases.forEach(({ word1, word2, expected }) => {
			it(`Should return ${expected} from str1=${word1} and str2=${word2}`, () => {
				const actual = gcdOfStringsGcd(word1, word2)
				expect(actual).toEqual(expected)
			})
		})
	})
})
