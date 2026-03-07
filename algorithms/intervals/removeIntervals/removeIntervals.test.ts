import { removeCoveredIntervals } from "./removeIntervals";

type testCase = {
    intervals: number[][];
    expected: number;
}

const testCases: testCase[] = [
	{
		intervals: [
			[1, 5],
			[2, 5],
			[3, 5],
			[4, 5],
        ],
		expected: 1,
	},
	{
		intervals: [
			[1, 3],
            [3, 6],
			[6, 9],
        ],
		expected: 3,
	},
	{
		intervals: [
			[1, 3],
			[4, 6],
			[7, 9],
        ],
		expected: 3,
	},
	{
		intervals: [
			[1, 10],
			[2, 9],
			[3, 8],
			[4, 7],
        ],
		expected: 1,
	},
	{
		intervals: [
			[1, 4],
			[3, 6],
			[2, 8],
        ],
		expected: 2,
	},
	{
		intervals: [
			[1, 2],
			[1, 4],
			[3, 4],
        ],
		expected: 1,
	},
	{
		intervals: [
			[1, 5],
			[2, 3],
			[4, 6],
        ],
		expected: 2,
	},
]

describe("Remove Covered Intervals", () => {
    testCases.forEach(({ intervals, expected}) => {
        it(`removeCoveredIntervals(${intervals})`, () => {
            const actual = removeCoveredIntervals(intervals);
            expect(actual).toEqual(expected)
        });
    });
});
