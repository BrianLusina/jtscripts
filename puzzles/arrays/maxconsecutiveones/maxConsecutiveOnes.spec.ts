import { longestOnes } from "./maxConsecutiveOnes";

type testCase = {
	nums     : number[]
	k        : number
	expected: number
}

var testCases: testCase[] = [
	{
		nums:     [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
		k:        2,
		expected: 6,
	},
	{
		nums:     [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
		k:        3,
		expected: 10,
	},
]

describe('LongestOnes', () => {
    testCases.forEach(({ nums, k, expected }) => {
        it(`should return ${expected} from nums=${nums} and k=${k}`, () => {
            const actual = longestOnes(nums, k)
            expect(actual).toEqual(expected)
        })
    })
})
