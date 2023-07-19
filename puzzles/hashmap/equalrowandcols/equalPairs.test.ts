import { equalPairsBruteForce, equalPairsHashmap, equalPairsTrieNode } from "./equalPairs"

type testCase = {
	grid     : number[][]
	expected: number
}

const testCases: testCase[] = [
	{
		grid:     [[3, 2, 1], [1, 7, 6], [2, 7, 7]],
		expected: 1,
	},
	{
		grid:     [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]],
		expected: 3,
	},
	{
		grid:     [[11, 1], [1, 11]],
		expected: 2,
	},
]

describe('equalPairs', () => {
	describe('using a hashmap', () => {
		testCases.forEach(({ grid, expected }) => {
			it(`should return ${expected} for grid= ${grid}`, () => {
				const actual = equalPairsHashmap(grid)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe('using brute force', () => {
		testCases.forEach(({ grid, expected }) => {
			it(`should return ${expected} for grid= ${grid}`, () => {
				const actual = equalPairsBruteForce(grid)
				expect(actual).toEqual(expected)
			})
		})
	})

	describe('using a trie node', () => {
		testCases.forEach(({ grid, expected }) => {
			it(`should return ${expected} for grid= ${grid}`, () => {
				const actual = equalPairsTrieNode(grid)
				expect(actual).toEqual(expected)
			})
		})
	})
})
