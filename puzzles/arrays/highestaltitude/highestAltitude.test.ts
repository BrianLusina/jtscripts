import { largestAltitude } from "./higestAltitude"

type testCase = {
	gain: number[]
	expected: number
}

const testCases : testCase[] = [
	{
		gain:     [-5, 1, 5, 0, -7],
		expected: 1,
	},
	{
		gain:     [-4, -3, -2, -1, 4, 3, 2],
		expected: 0,
	},
]

describe('LargestAltitude', () => {
	testCases.forEach(({ gain, expected}) => {
		it(`should return ${expected} from gain=${gain}`, () => {
			const actual = largestAltitude(gain)
			expect(actual).toEqual(expected)
		})
	})
})
