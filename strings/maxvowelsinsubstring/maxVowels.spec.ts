import { maxVowels } from "./maxVowels";

type testCase = {
	s        :string
	k        :number
	expected : number
}

var testCases: testCase[] = [
	{
		s:        "abciiidef",
		k:        3,
		expected: 3,
	},
	{
		s:        "aeiou",
		k:        2,
		expected: 2,
	},
	{
		s:        "leetcode",
		k:        3,
		expected: 2,
	},
]

describe('maxVowels', () => {
    testCases.forEach(({ s, k, expected }) => {
        it(`should return ${expected} from s=${s} and k=${k}`, () => {
            const actual = maxVowels(s, k)
            expect(actual).toEqual(expected)
        })
    })
})
