import { numTilings } from "./numTiles"

type testCase = {
	n        :number
	expected : number
}

const testCases: testCase[] = [
	{
		n:        3,
		expected: 5,
	},
	{
		n:        1,
		expected: 1,
	},
	{
		n:        30,
		expected: 312342182,
	},
]

describe("NumTiles", () => {
	testCases.forEach(({ n, expected }) => {
		it(`should return ${expected} for n=${n}`, () => {
			const actual = numTilings(n)
			expect(actual).toEqual(expected)
		})

	})	
})
