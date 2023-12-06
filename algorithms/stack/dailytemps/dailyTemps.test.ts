import { dailyTemperatures } from "./dailyTemps"

type testCase = {
	temperatures : number[]
	expected     : number[]
}

const testCases: testCase[] = [
	{
		temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
		expected:     [1, 1, 4, 2, 1, 1, 0, 0],
	},
	{
		temperatures: [30, 40, 50, 603],
		expected:     [1, 1, 1, 0],
	},
	{
		temperatures: [30, 60, 90],
		expected:     [1, 1, 0],
	},
]

describe("Daily temperatures", () => {
	for (const { temperatures, expected } of testCases) {
		it(`should return ${expected} from temperatures=${temperatures}`, () => {
			const actual = dailyTemperatures(temperatures)
			expect(actual).toEqual(expected)
		})
	}
})
