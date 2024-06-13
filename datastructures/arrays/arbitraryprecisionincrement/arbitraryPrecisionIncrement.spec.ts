import { arbitraryPrecisionIncrement } from "./arbitraryPrecisionIncrement";


describe("Arbitrary Precision Increment", () => {
    type testCase = {
        a: number[];
        expected: number[]
    }

    const testCases: testCase[] = [
        {
            a: [1, 4, 9],
            expected: [1, 5, 0]
        },
        {
            a: [9, 9, 9],
            expected: [1, 0, 0, 0]
        }
    ]

    testCases.forEach(({ a, expected }) => {
        it(`should return ${expected} for input of ${a}`, () => {
            const actual = arbitraryPrecisionIncrement(a)
            expect(actual).toEqual(expected)
        })
    })
})
