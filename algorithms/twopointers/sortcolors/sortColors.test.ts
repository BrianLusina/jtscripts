import { sortColors } from './sortColors';

type testCase = {
	colors: number[];
	expected: number[];
}

const testCases: testCase[] = [
	{
		colors:   [1, 0, 2, 1, 2, 2],
		expected: [0, 1, 1, 2, 2, 2],
	},
	{
		colors:   [0, 1, 1, 2, 0, 2, 0, 2, 1, 2],
		expected: [0, 0, 0, 1, 1, 1, 2, 2, 2, 2],
	},
	{
		colors:   [0],
		expected: [0],
	},
	{
		colors:   [0, 1, 0],
		expected: [0, 0, 1],
	},
	{
		colors:   [1],
		expected: [1],
	},
	{
		colors:   [2, 2],
		expected: [2, 2],
	},
	{
		colors:   [2, 2],
		expected: [2, 2],
	},
	{
		colors:   [1, 1, 0, 2],
		expected: [0, 1, 1, 2],
	},
	{
		colors:   [2, 1, 1, 0, 0],
		expected: [0, 0, 1, 1, 2],
	},
]

describe('sortColors', () => {
	testCases.forEach((tc: testCase) => {
		test(`sortColors(${tc.colors}) === ${tc.expected}`, () => {
			expect(sortColors(tc.colors)).toEqual(tc.expected);
		});
	});
})
