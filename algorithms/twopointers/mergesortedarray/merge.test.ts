import { merge } from "./merge"

type testCase = {
	nums1    : number[]
	m        : number
	nums2    : number[]
	n        : number
	expected : number[]
}

const testCases: testCase[] = [
	{
		nums1:    [],
		m:        0,
		nums2:    [],
		n:        0,
		expected: [],
	},
	{
		nums1:    [1, 2, 3, 0, 0, 0],
		m:        3,
		nums2:    [2, 5, 6],
		n:        3,
		expected: [1, 2, 2, 3, 5, 6],
	},
	{
		nums1:    [0],
		m:        0,
		nums2:    [1],
		n:        1,
		expected: [1],
	},
] 

describe("merge", () => {
	for (const { nums1, m, nums2, n, expected } of testCases) {
		it(`should return ${expected} for nums1=${nums1}, m=${m}, nums2=${nums2}, n=${n}`, () => {
			merge(nums1, m, nums2, n)
			expect(nums1).toEqual(expected)
		})
	}
})
