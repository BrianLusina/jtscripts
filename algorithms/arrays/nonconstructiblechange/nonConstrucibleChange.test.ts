import { nonConstructibleChange } from "./nonConstructibleChange";

type testCase = {
	name:   string;
	input: number[];
	output: number;
}

const testCases: testCase[] = [
	{
		name:   "should return 20 for input of [5, 7, 1, 1, 2, 3, 22]",
		input:  [5, 7, 1, 1, 2, 3, 22],
		output: 20,
	},
	{
		name:   "should return 6 for input of [1, 1, 1, 1, 1]",
		input:  [1, 1, 1, 1, 1],
		output: 6,
	},
	{
		name:   "should return 55 for input of [1, 5, 1, 1, 1, 10, 15, 20, 100]",
		input:  [1, 5, 1, 1, 1, 10, 15, 20, 100],
		output: 55,
	},
	{
		name:   "should return 3 for input of [6, 4, 5, 1, 1, 8, 9]",
		input:  [6, 4, 5, 1, 1, 8, 9],
		output: 3,
	},
	{
		name:   "should return 1 for input of []",
		input:  [],
		output: 1,
	},
	{
		name:   "should return 1 for input of [87]",
		input:  [87],
		output: 1,
	},
	{
		name:   "should return 32 for input of [5, 6, 1, 1, 2, 3, 4, 9]",
		input:  [5, 6, 1, 1, 2, 3, 4, 9],
		output: 32,
	},
	{
		name:   "should return 19 for input of [5, 6, 1, 1, 2, 3, 43]",
		input:  [5, 6, 1, 1, 2, 3, 43],
		output: 19,
	},
	{
		name:   "should return 3 for input of [1, 1]",
		input:  [1, 1],
		output: 3,
	},
	{
		name:   "should return 1 for input of [2]",
		input:  [2],
		output: 1,
	},
	{
		name:   "should return 2 for input of [1]",
		input:  [1],
		output: 2,
	},
	{
		name:   "should return 87 for input of [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]",
		input:  [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4],
		output: 87,
	},
	{
		name:   "should return 29 for input of [1, 2, 3, 4, 5, 6, 7]",
		input:  [1, 2, 3, 4, 5, 6, 7],
		output: 29,
	},
]

describe("NonConstructibleChange", () => {
	it.each(testCases)(`%s`, ({ input, output }) => {
		const actual = nonConstructibleChange(input)
		expect(actual).toEqual(output)
	})
})
