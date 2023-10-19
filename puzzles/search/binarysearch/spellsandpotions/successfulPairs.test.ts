import { successfulPairs } from "./successfulPairs"

type testCase = {
	spells   :number[]
	potions  :number[]
	success  :number
	expected :number[]
}

const testCases: testCase[] = [
	{
		spells:   [5, 1, 3],
		potions:  [1, 2, 3, 4, 5],
		success:  7,
		expected: [4, 0, 3],
	},
	{
		spells:   [3, 1, 2],
		potions:  [8, 5, 8],
		success:  16,
		expected: [2, 0, 2],
	},
]

describe('SuccessfulPairs', () => {
	testCases.forEach(({ spells, potions, success, expected }) => {
		it(`should return ${expected} for spells=${spells}, potions=${potions}, success=${success}`, () => {
			const actual = successfulPairs(spells, potions, success)
			expect(actual).toEqual(expected)
		})
	 })
})
