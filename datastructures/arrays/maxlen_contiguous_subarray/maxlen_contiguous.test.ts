import findMaxLength from './maxlen_contiguous';

describe('Max length contiguous subarray', () => {
    it(`should return 2 as the length of the longest contiguous subarray in an array or [0, 1]`, () => {
        const nums = [0, 1]
        const actual = findMaxLength(nums)
        const expected = 2
        expect(actual).toEqual(expected)
    })

    it(`should return 2 as the length of the longest contiguous subarray in an array or [0, 1, 0]`, () => {
        const nums = [0, 1, 0]
        const actual = findMaxLength(nums)
        const expected = 2
        expect(actual).toEqual(expected)
    })

    it(`should return 6 as the length of the longest contiguous subarray in an array or [0, 1, 0, 0, 1, 1, 0]`, () => {
        const nums = [0, 1, 0, 0, 1, 1, 0]
        const actual = findMaxLength(nums)
        const expected = 6
        expect(actual).toEqual(expected)
    })

})
