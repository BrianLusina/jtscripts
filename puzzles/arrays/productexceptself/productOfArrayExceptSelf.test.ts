import { productExceptSelf } from "./productOfArrayExceptSelf"

type testCase = {
	input: number[]
	output: number[]
}

const testCases: testCase[] = [
	{
		input:  [1, 2, 3, 4],
		output: [24, 12, 8, 6],
	},
	{
		input:  [-1, 1, 0, -3, 3],
		output: [0, 0, 9, 0, 0],
	},
]

describe('ProductOfArrayExceptSelf', () => {
	testCases.forEach(({ input, output }) => {
		it(`should return ${output} for input of ${input}`, () => {
			const actual = productExceptSelf(input)
			expect(actual).toEqual(output)
		})
	})
})
