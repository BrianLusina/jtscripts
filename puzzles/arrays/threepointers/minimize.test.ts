import { minimize } from "./minimize"

type testCase = {
	a: number[],
	b: number[],
	c: number[]
	expected: number
}

const testCases: testCase[] = [
	{
		a:        [1, 4, 10],
		b:        [2, 15, 20],
		c:        [10, 12],
		expected: 5,
	},
	{
		a:        [20, 24, 100],
		b:        [2, 19, 22, 79, 800],
		c:        [10, 12, 23, 24, 119],
		expected: 2,
	},
]

describe('Minimize', () => {
	testCases.forEach(({ a, b, c, expected }) => {
		it(`for a=${a}, b=${b}, c=${c} should return ${expected}`, () => {
			const actual = minimize(a, b, c)
			expect(actual).toEqual(expected)
		})
	})
})
