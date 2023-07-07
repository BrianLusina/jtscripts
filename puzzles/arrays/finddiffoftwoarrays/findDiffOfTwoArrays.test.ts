import { findDifference } from "./findDiffOfTwoArrays"

type testCase = {
	nums1    : number[]
	nums2    : number[]
	expected : number[][]
}

const testCases: testCase[] = [
	{
		nums1:    [1, 2, 3],
		nums2:    [2, 4, 6],
		expected: [[1, 3], [4, 6]],
	},
	{
		nums1:    [1, 2, 3, 3],
		nums2:    [1, 1, 2, 2],
		expected: [[3], []],
	},
]

describe('findDifference', () => {
	testCases.forEach(({ nums1, nums2, expected }) => {
		it(`should return ${expected} for nums1=${nums1} and nums2=${nums2}`, () => {
			const actual = findDifference(nums1, nums2)
			expect(actual).toEqual(expected)
		})
	})
})
