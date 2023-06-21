import { maxArea } from "./containerWithMostWater";

type testCase = {
	heights: number[]
	expected: number
}

const testCases: testCase[] = [
    {
		heights:  [1, 8, 6, 2, 5, 4, 8, 3, 7],
		expected: 49,
	},
	{
		heights:  [1, 1],
		expected: 1,
	},
]

describe('maxArea', () => {
    testCases.forEach(({ heights, expected }) => {
        it(`should return ${expected} for heights=${heights}`, () => {
            const actual = maxArea(heights)
            expect(actual).toEqual(expected)
        })
    })
})
