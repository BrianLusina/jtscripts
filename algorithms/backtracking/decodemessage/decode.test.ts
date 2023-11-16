import { numberOfWaysToDecodeMessage } from "./decode"

type testCase = {
	digits   :string
	expected :number
}

const testCases: testCase[] = [
	{
		digits:   "12",
		expected: 2,
	},
	{
		digits:   "123",
		expected: 3,
	},
	{
		digits:   "11223",
		expected: 8,
	},
	{
		digits:   "313",
		expected: 2,
	},
	{
		digits:   "02",
		expected: 0,
	},
]

describe("Number of ways to decode a message", () => {
	for(const { digits, expected } of testCases) {
		it(`should return ${expected} for digits=${digits}`, () => {
			const actual = numberOfWaysToDecodeMessage(digits)
			expect(actual).toEqual(expected)
		})
	}
})
