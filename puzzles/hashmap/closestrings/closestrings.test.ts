import { closeStrings } from "./closestrings";

type testCase = {
	word1    :string
	word2    :string
	expected :boolean
}

const testCases: testCase[] = [
	{
		word1:    "abc",
		word2:    "bca",
		expected: true,
	},
	{
		word1:    "a",
		word2:    "aa",
		expected: false,
	},
	{
		word1:    "cabbba",
		word2:    "abbccc",
		expected: true,
	},
]

describe('CloseStrings', () => {
    testCases.forEach(({ word1, word2, expected }) => {
        it(`should return ${expected} from word1=${word1} and word2=${word2}`, () => {
            const actual = closeStrings(word1, word2)
            expect(actual).toEqual(expected)
        })
    })
})
