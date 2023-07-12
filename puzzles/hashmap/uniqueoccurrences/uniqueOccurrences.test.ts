import { uniqueOccurrences } from "./uniqueOccurrences";

type testCase = {
    arr: number[]
    expected: boolean
}

const testCases: testCase[] = [
	{
		arr:      [1, 2, 2, 1, 1, 3],
		expected: true,
	},
	{
		arr:      [1, 2],
		expected: false,
	},
	{
		arr:      [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
		expected: true,
	},
	{
		arr:      [1, 2, 4, 3, 1, 3, 3, 4],
		expected: false,
	},
	{
		arr:      [1, 2, 4, 3, 1, 3, 3, 4, 4, 4],
		expected: true,
	},
	{
		arr:      [-1, -1, -1, -3, -1, -1],
		expected: true,
	},
]

describe('UniqueOccurrences', () => {
    testCases.forEach(({ arr, expected}) => {
        it(`should return ${expected} for arr=${arr}`, () => {
            const actual = uniqueOccurrences(arr)
            expect(actual).toEqual(expected)
        })
    })
})
