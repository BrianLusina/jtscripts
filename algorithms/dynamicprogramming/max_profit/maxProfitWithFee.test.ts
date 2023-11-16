import { maxProfit } from "./maxProfitWithFee"

type testCase = {
    prices: number[]
	fee: number
    expected: number
}

const testCases: testCase[] = [
    {
        prices:   [],
        expected: 0,
		fee: 0,
	},
	{
        prices:   [1, 1, 1, 1, 1],
        expected: 0,
		fee: 0,
	},
	{
        prices:   [1],
        expected: 0,
		fee: 1,
	},
	{
        prices:   [1, 3, 2, 8, 4, 9],
        expected: 8,
		fee: 2,
	},
	{
        prices:   [1, 3, 7, 5, 10, 3],
        expected: 6,
		fee: 3,
	},
	{
        prices:   [1, 4, 6, 2, 8, 3, 10, 14],
        expected: 13,
		fee: 3,
	},
]


describe("Max Profit with fee", () => {

    testCases.forEach(({ prices, fee, expected }) => {
        it(`should return ${expected} for prices of ${prices} and fee=${fee}`, () => {
            const actual = maxProfit(prices, fee)

            expect(actual).toEqual(expected)
        })
    })
})
