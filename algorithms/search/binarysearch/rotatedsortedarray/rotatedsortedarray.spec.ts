import search from "./rotatedsortedarray";

describe('Rotated Sorted Array', () => {
	it('nums = [4, 5, 6, 7, 0, 1, 2] and target = 0 should return 4', () => {
		const nums = [4, 5, 6, 7, 0, 1, 2];
		const target = 0
		const expected = 4
		const actual = search(nums, target)
		expect(actual).toEqual(expected)
	})

	it('nums = [4, 5, 6, 7, 0, 1, 2], target = 3 should return - 1', () => {
		const nums = [4, 5, 6, 7, 0, 1, 2];
		const target = 3
		const expected = -1
		const actual = search(nums, target)
		expect(actual).toEqual(expected)
	})

	it('nums = [1], target = 0 should return -1', () => {
		const nums = [1];
		const target = 0
		const expected = -1
		const actual = search(nums, target)
		expect(actual).toEqual(expected)
	})

	it('nums = [1, 3], target = 1 should return 0', () => {
		const nums = [1, 3];
		const target = 1
		const expected = 0
		const actual = search(nums, target)
		expect(actual).toEqual(expected)
	})
})

