import { hIndex } from "./hIndex";

type testCase = {
	citations :number[];
	expected  :number
}

const testCases: testCase[] = [
	{
		citations: [3, 0, 6, 1, 5],
		expected:  3,
	},
	{
		citations: [1, 3, 1],
		expected:  1,
	},
	{
		citations: [9, 7, 6, 2, 1],
		expected:  3,
	},
	{
		citations: [6,6,4,8,4,3,3,10],
		expected:  4,
	},
]

describe("hIndex", () => {

	for (const {citations, expected} of testCases) {
		it(`should return ${expected} from citations=${citations}`, () => {
			const actual = hIndex(citations)
			expect(actual).toEqual(expected)

		})
	}
})
