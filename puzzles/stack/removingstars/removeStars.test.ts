import { removeStars } from "./removeStars"

type testCase = {
	word: string
	expected: string
}

const testCases: testCase[] = [
	{
		word:     "leet**cod*e",
		expected: "lecoe",
	},
	{
		word:     "erase*****",
		expected: "",
	},
]

describe("removeStars", () => {
	testCases.forEach(({ word, expected }) => {
		it(`should return ${expected} from ${word}`, () => {
			const actual = removeStars(word)
			expect(actual).toEqual(expected)
		})
	})
})
