import { findSumOfThree } from './findSumOfThree';

type testCase = {
    numbers: number[];
	target: number
	expected: boolean
}

// TestCases for the findSomeOfThree function
const testCases: testCase[] = [
    {numbers: [1, -1, 0], target: -1, expected: false},
    {numbers: [3, 7, 1, 2, 8, 4, 5], target: 21, expected: false},
	{numbers: [3, 7, 1, 2, 8, 4, 5], target: 10, expected: true},
	{numbers: [-1, 2, 1, -4, 5, -3], target: -8, expected: true},
	{numbers: [-1, 2, 1, -4, 5, -3], target: 0, expected: true},
]

describe("findSumOfThree", () => {
    testCases.forEach((testCase) => {
        const {numbers, target, expected} = testCase;
        it(`should return ${expected} for findSumOfThree(${numbers}, ${target})`, () => {
            const result = findSumOfThree(numbers, target);
            expect(result).toBe(expected);
        });
    });
})
