import { minDistance } from "./minDistance"

type testCase = {
	a        :string
	b        :string
	expected :number
}

const testCases: testCase[] = [
	{
		a:        "abcd",
		b:        "abcd",
		expected: 0,
	},
	{
		a:        "",
		b:        "abcd",
		expected: 4,
	},
	{
		a:        "abad",
		b:        "abac",
		expected: 1,
	},
	{
		a:        "Anshuman",
		b:        "Antihuman",
		expected: 2,
	},
	{
		a:        "horse",
		b:        "ros",
		expected: 3,
	},
	{
		a:        "intention",
		b:        "execution",
		expected: 5,
	},
]

describe("Min Edit Distance", () => {
	for (const {a, b, expected} of testCases) {
		it(`should return ${expected} for a=${a} & b=${b}`, () => {
			const actual = minDistance(a, b)
			expect(actual).toEqual(expected)
		})
	}
})
