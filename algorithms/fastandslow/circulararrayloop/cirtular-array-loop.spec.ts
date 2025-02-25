import { circularArrayLoop } from "./circular-array-loop";

type testCase = {
	nums : number[];
	expected: boolean;
}

const testCases: testCase[] = [
	{
		nums:     [3, 1, 2],
		expected: true,
	},
	{
		nums:     [-2, -1, -3],
		expected: true,
	},
	{
		nums:     [2, 1, -1, -2],
		expected: false,
	},
	{
		nums:     [3, -3, 1, 1],
		expected: true,
	},
	{
		nums:     [1, 3, -2, -4, 1],
		expected: true,
	},
	{
		nums:     [5, 4, -2, -1, 3],
		expected: false,
	},
	{
		nums:     [1, 2, -3, 3, 4, 7, 1],
		expected: true,
	},
	{
		nums:     [3, 3, 1, -1, 2],
		expected: true,
	},
]

describe('circularArrayLoop', () => {
    testCases.forEach((tc: testCase) => {
        test(`circularArrayLoop(${tc.nums}) === ${tc.expected}`, () => {
            expect(circularArrayLoop(tc.nums)).toBe(tc.expected);
        });
    });
})
