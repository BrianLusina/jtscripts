import { isPowerOfTwo } from "./powerOfTwo";

type testCase = {
	n        : number
	expected : boolean
}

const testCases: testCase[] = [
	{n: 1, expected: true},
	{n: 16, expected: true},
	{n: 4, expected: true},
	{n: 3, expected: false},
	{n: -512, expected: false},
	{n: 123456, expected: false},
]

describe("IsPowerOfTwo", () => {
    testCases.forEach(({n, expected}) => {
        it(`isPowerOfTwo(${n})`, () => {
            const actual = isPowerOfTwo(n)
            expect(actual).toEqual(expected)
        })
    })
})
