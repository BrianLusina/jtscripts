import { countBits } from "./countBits";

type testCase = {
    n: number;
    expected: number[]
}

const testCases: testCase[] = [
    {
        n: 2,
        expected: [0,1,1]
    },
    {
        n: 5,
        expected: [0, 1, 1, 2, 1, 2]
    }
]

describe('Counting Bits', () => {
    for (const {n, expected} of testCases) {
        it(`should return ${expected} for input of n=${n}`, () => {
            const actual = countBits(n)
            expect(actual).toEqual(expected)
        })
    }
})
