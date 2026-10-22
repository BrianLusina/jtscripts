import { runningSum, runningSumV2 } from "./running_sum";

type testCase = {
    nums: number[];
    expected: number[];
}

const testCases: testCase[] = [
    {
        nums: [1, 2, 3, 4],
        expected: [1, 3, 6, 10]
    },
    {
        nums: [1, 1, 1, 1, 1],
        expected: [1, 2, 3, 4, 5]
    },
    {
        nums: [3, 1, 2, 10, 1],
        expected: [3, 4, 6, 16, 17]
    }
]

describe('runningSum', () => {
    testCases.forEach(({ nums, expected }) => {
        it(`runningSum(${JSON.stringify(nums)}) should return ${JSON.stringify(expected)}`, () => {
            const actual = runningSum(nums);
            expect(actual).toEqual(expected);
        });
    });

    testCases.forEach(({ nums, expected }) => {
        it(`runningSumV2(${JSON.stringify(nums)}) should return ${JSON.stringify(expected)}`, () => {
            const actual = runningSumV2(nums);
            expect(actual).toEqual(expected);
        });
    });
})
