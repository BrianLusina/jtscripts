import { generatePermutations } from "./generatePerms"

type testCase = {
	letters  :string
	expected: string[]
}

const testCases: testCase[] = [
	{
		letters:  "ab",
		expected: ["ab", "ba"],
	},
	{
		letters:  "abc",
		expected: ["abc", "acb", "bac", "bca", "cab", "cba"],
	},
]

describe('Generate Permutations', () => {
    testCases.forEach(({ letters, expected }) => {
        it(`should return ${expected} for letters=${letters}`, () => {
            const actual = generatePermutations(letters)
            expect(actual).toEqual(expected)
        })
    })
})
