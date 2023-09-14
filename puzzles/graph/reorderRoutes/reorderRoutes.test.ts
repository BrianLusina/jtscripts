import { minReorder } from "./reorderRoutes"

type testCase = {
	n           :number
	connections :number[][]
	expected    :number
}

const testCases: testCase[] = [
	{
		connections: [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]],
		n:           6,
		expected:    3,
	},
	{
		connections: [[1, 0], [1, 2], [3, 2], [3, 4]],
		n:           5,
		expected:    2,
	},
	{
		connections: [[1, 0], [2, 0]],
		n:           3,
		expected:    0,
	},
]

describe('MinReorder', () => {
	testCases.forEach(({ n, connections, expected }) => {
		it(`for n=${n}, connections=${connections}, should return ${expected}`, () => {
			const actual = minReorder(n, connections)
			expect(actual).toEqual(expected)
		})
	})
})
