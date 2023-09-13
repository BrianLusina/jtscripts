import { numberOfProvincesDfs } from "./numberOfProvinces";

type testCase = {
	isConnected   : number[][]
	expected: number
}

var testCases: testCase[] = [
	{
		isConnected:    [[]],
		expected: 0,
	},
	{
		isConnected:    [[1, 1, 0], [1, 1, 0], [0, 0, 1]],
		expected: 2,
	},
	{
		isConnected:    [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
		expected: 3,
	},
	{
		isConnected:    [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
		expected: 1,
	},
]

describe('NumberOfProvinces', () => {
    testCases.forEach(({ isConnected, expected }) => {
        it(`should return ${expected} from isConnected=${isConnected}`, () => {
            const actual = numberOfProvincesDfs(isConnected)
            expect(actual).toEqual(expected)
        })
    })
})
