import { jump } from "./jump"

type testCase = {
	nums     :number[]
	expected :number
}

const testCases: testCase[] =[
	{
		nums:     [2, 3, 1, 1, 4],
		expected: 2,
	},
	{
		nums:     [2, 3, 0, 1, 4],
		expected: 2,
	},

]

describe("jump", () => {
	testCases.forEach(({ nums, expected }) => {
		it(`jump(${nums}) should return ${expected} `, () => {
			const actual = jump(nums)
			expect(actual).toEqual(expected)
		})
	})
})
