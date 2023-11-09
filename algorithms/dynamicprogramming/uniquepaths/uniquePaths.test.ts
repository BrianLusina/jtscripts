import { uniquePathsBottomUp, uniquePathsMath, uniquePathsTopDown } from "./uniquePaths"

type testCase = {
	m        : number
	n        : number
	expected : number
}

const testCases: testCase[] = [
	{
		m:        3,
		n:        7,
		expected: 28,
	},
	{
		m:        3,
		n:        2,
		expected: 3,
	},
	{
		m:        51,
		n:        9,
		expected: 1916797311,
	},
]

describe('Unique Paths', () => {
	describe('using math formula', () => {
		testCases.forEach(({ m, n, expected }) => {
			it(`m=${m}, n=${n}, expected=${expected}`, () => {
				const actual = uniquePathsMath(m, n)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe('using bottom up approach', () => {
		testCases.forEach(({ m, n, expected }) => {
			it(`m=${m}, n=${n}, expected=${expected}`, () => {
				const actual = uniquePathsBottomUp(m, n)
				expect(actual).toEqual(expected)
			})
		})
	})
	describe('using top down approach', () => {
		testCases.forEach(({ m, n, expected }) => {
			it(`m=${m}, n=${n}, expected=${expected}`, () => {
				const actual = uniquePathsTopDown(m, n)
				expect(actual).toEqual(expected)
			})
		})
	})
})
