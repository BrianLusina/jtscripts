import { canCompleteCircuit } from "./gasStations"

type testCase = {
	gas      :number[]
	cost     :number[]
	expected :number
}

const testCases: testCase[] = [
	{
		gas:      [1, 2, 3, 4, 5],
		cost:     [3, 4, 5, 1, 2],
		expected: 3,
	},
	{
		gas:      [2, 3, 4],
		cost:     [3, 4, 3],
		expected: -1,
	},
]

describe("canCompleteCircuit", () => {
	for(const {gas, cost, expected} of testCases) {
		it(`gas=${gas}, cost=${cost} should return ${expected}`, () => {
			const actual = canCompleteCircuit(gas, cost)
			expect(actual).toEqual(expected)
		})
	}
})
