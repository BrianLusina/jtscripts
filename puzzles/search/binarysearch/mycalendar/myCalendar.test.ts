import { MyCalendar } from "./myCalendar"

type testCase = {
	start    : number
	end      : number
	expected : boolean
}

const testCases: testCase[] = [
	{
		start:    10,
		end:      20,
		expected: true,
	},
	{
		start:    15,
		end:      25,
		expected: false,
	},
	{
		start:    20,
		end:      30,
		expected: true,
	},
]

describe('MyCalendar', () => {
	const myCalender = new MyCalendar()

	testCases.forEach(({ start, end, expected }) => {
		it(`should return ${expected} for start=${start} and end=${end}`, () => {
			const actual = myCalender.book(start, end)

			expect(actual).toEqual(expected)
		})
	})
})
