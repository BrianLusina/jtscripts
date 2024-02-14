import { canJump } from "./canJump"

type testCase = {
	nums     :number[]
	expected :boolean
}

const testCases: testCase[] =[
	{
		nums:     [2, 3, 1, 1, 4],
		expected: true,
	},
	{
		nums:     [3, 2, 1, 0, 4],
		expected: false,
	},

]

describe("canJump", () => {
	testCases.forEach(({ nums, expected }) => {
		it(`canJump(${nums}) should return ${expected} `, () => {
			const actual = canJump(nums)
			expect(actual).toEqual(expected)
		})
	})
})
