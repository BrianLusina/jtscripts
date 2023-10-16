import { totalCost } from "./totalCost"

type testCase = {
	costs:      number[];
	k          :number
	candidates :number
	expected   :number
}

const testCases: testCase[] = [
	{
		costs:      [17, 12, 10, 2, 7, 2, 11, 20, 8],
		k:          3,
		candidates: 4,
		expected:   11,
	},
	{
		costs:      [1, 2, 4, 1],
		k:          3,
		candidates: 3,
		expected:   4,
	},
]

describe("TotalCost", () => {
    testCases.forEach(({ costs, k, candidates, expected }) => {
        it(`should return ${expected} for costs=${costs}, k=${k}, candidates=${candidates}`, () => {
            const actual = totalCost(costs, k, candidates)
            expect(actual).toEqual(expected)
         })
    })
})
