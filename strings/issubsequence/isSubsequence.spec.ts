import { isSubsequence } from "./isSubsequence";

type testCase = {
    s: string
    t: string
    expected: boolean
}

const testCases: testCase[] = [
	{
		s:        "abc",
		t:        "ahbgdc",
		expected: true,
	},
	{
		s:        "axc",
		t:        "ahbgdc",
		expected: false,
	},
	{
		s:        "",
		t:        "ahbgdc",
		expected: true,
	},
	{
		s:        "b",
		t:        "abc",
		expected: true,
	},
]

describe('IsSubsequence', () => {
    testCases.forEach(({ t, s, expected }) => {
        it(`should return ${expected} for s=${s} and t=${t}`, () => {
            const actual = isSubsequence(s, t)
            expect(actual).toEqual(expected)
        })
    })
})
