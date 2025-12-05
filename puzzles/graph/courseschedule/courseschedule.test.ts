import { canFinish } from './courseschedule';

type testCase = {
	numCourses: number;
	prerequisites: number[][];
	expected:      boolean;
}

var testCases: testCase[] = [
	{
		numCourses:    2,
		prerequisites: [[1, 0]],
		expected:      true,
	},
	{
		numCourses:    4,
		prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]],
		expected:      true,
	},
	{
		numCourses:    1,
		prerequisites: [],
		expected:      true,
	},
	{
		numCourses:    3,
		prerequisites: [[1, 0], [2, 1]],
		expected:      true,
	},
	{
		numCourses:    3,
		prerequisites: [[1, 0], [2, 1], [1, 2]],
		expected:      false,
	},
	{
		numCourses:    3,
		prerequisites: [[1, 0], [2, 1], [4, 3]],
		expected:      true,
	},
]

describe("Course Schedule", () => {
    describe("can finish", () => {
        testCases.forEach(({ numCourses, prerequisites, expected }) => {
            it(`canFinish(${numCourses}, [${prerequisites}])`, () => {
                const actual = canFinish(numCourses, prerequisites)
                expect(actual).toEqual(expected)
            })
        })
    })
})
