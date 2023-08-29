import trap from "./trappedRain"

type testCase = {
	height   :number[]
	expected :number
}

var testCases: testCase[] = [
	{
		height:   [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
		expected: 6,
	},
	{
		height:   [1, 2],
		expected: 0,
	},
	{
		height:   [4, 2, 0, 3, 2, 5],
		expected: 9,
	},
]

describe("trap", () => {
	testCases.forEach(({ height, expected }) => {
		it(`should return ${expected} from heights = ${height}`, () => {
			const actual = trap(height)
			expect(actual).toEqual(expected)
		})
	})
})
