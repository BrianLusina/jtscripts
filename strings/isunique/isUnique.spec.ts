import { isUnique } from "./isUnique";

type testCase = {
	input: string
	expected: boolean
}

// TestCases for the IsUnique function
const testCases: testCase[] = [
	{input: "", expected: true},
    {input: "a", expected: true},
	{input: "aa", expected: false},
	{input: "abc", expected: true},
	{input: "abca", expected: false},
	{input: "abcdefghijklmnopqrstuvwxyz", expected: true},
	{input: "abcdefghijklmnopqrstuvwxyza", expected: false},
	{input: "1234567890", expected: true},
	{input: "12345678901", expected: false},
	{input: "abCDefGh", expected: true},
	{input: "nonunique", expected: false},
	{input: "abCedFghI", expected: true},
	{input: "I Am Not Unique", expected: false},
	{input: "heythere", expected: false},
	{input: "hi", expected: true},
]

describe("IsUnique", () => {
    testCases.forEach((testCase) => {
        it(`Input: ${testCase.input} => Expected: ${testCase.expected}`, () => {
            expect(isUnique(testCase.input)).toBe(testCase.expected);
        }
    )}
)})
