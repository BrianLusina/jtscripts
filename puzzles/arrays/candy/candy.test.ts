import { candy } from "./candy"

type testCase = {
	ratings  :number[]
	expected :number
}

const testCases: testCase[] = [
	{
		ratings:  [1, 0, 2],
		expected: 5,
	},
	{
		ratings:  [1, 2, 2],
		expected: 4,
	},
]

describe("candies", () => {
	for (const { ratings, expected } of testCases) {
		it(`should return ${expected} from ratings=${ratings}`, () => {
			const actual = candy(ratings)
			expect(actual).toEqual(expected);
		})
	}
})
