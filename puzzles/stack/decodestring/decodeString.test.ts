import { decodeString } from './decodeString';

type testCase = {
	encodedString : string
	expected: string
}

const testCases: testCase[] = [
	{
		encodedString: "3[a]2[bc]",
		expected:      "aaabcbc",
	},
	{
		encodedString: "3[a2[c]]",
		expected:      "accaccacc",
	},
	{
		encodedString: "2[abc]3[cd]ef",
		expected:      "abcabccdcdcdef",
	},
]

describe("decodeString", () => {
	testCases.forEach(({ encodedString, expected }) => {
		it(`should return ${expected} from ${encodedString}`, () => {
			const actual = decodeString(encodedString)
			expect(actual).toEqual(expected)
		})
	})
})
