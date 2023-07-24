import { asteroidCollision } from "./asteroidCollision"

type testCase = {
	asteroids: number[]
	expected: number[]
}

const testCases: testCase[] = [
	{
		asteroids: [5, 10, -5],
		expected:  [5, 10],
	},
	{
		asteroids: [8, -8],
		expected:  [],
	},
	{
		asteroids: [10, 2, -5],
		expected:  [10],
	},
]

describe('asteroidCollision', () => {
	testCases.forEach(({ asteroids, expected }) => {
		it(`asteroidCollision(${asteroids}) should equal ${expected}`, () => {
			const actual = asteroidCollision(asteroids)
			expect(actual).toEqual(expected)
		})
	})
})
