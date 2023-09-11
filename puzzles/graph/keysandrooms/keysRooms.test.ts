import { canVisitAllRooms } from "./keysRooms"

type testCase = {
	rooms   : number[][]
	expected:  boolean
}

const testCases: testCase[] = [
	{
		rooms:    [[1], [2], [3], []],
		expected: true,
	},
	{
		rooms:    [[1, 3], [3, 0, 1], [2], [0]],
		expected: false,
	},
	{
		rooms:    [[2, 3], [], [2], [1, 3]],
		expected: true,
	},
]

describe('CanVisitAllRooms', () => {
	testCases.forEach(({ rooms, expected }) => {
		it(`should return ${expected} for rooms = ${rooms}`, () => {
			const actual = canVisitAllRooms(rooms)
			expect(actual).toEqual(expected)
		})
	})
})
