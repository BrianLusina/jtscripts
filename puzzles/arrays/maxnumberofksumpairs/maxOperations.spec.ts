import { maxOperations } from "./maxOperations";

type testCase = {
	nums     :number[]
	k:        number
	expected: number
}

const testCases: testCase[] = [
    {
		nums:     [1, 2, 3, 4],
		k:        5,
		expected: 2,
	},
	{
		nums:     [3, 1, 3, 4, 3],
		k:        6,
		expected: 1,
	},
	{
		nums:     [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4],
		k:        2,
		expected: 2,
	},
]

describe('maxOperations', () => {
    testCases.forEach(({ nums, k, expected }) => {
        it(`should return ${expected} for nums=${nums} and k=${k}`, () => {
            const actual = maxOperations(nums, k)
            expect(actual).toEqual(expected)
        })
    })
})
