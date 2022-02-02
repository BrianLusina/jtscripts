import maxSumSubArray from "./maxsumsubarray"

describe('Max Sum Subarray', () => {
    it("Should return 6 for nums = [-2,1,-3,4,-1,2,1,-5,4]", () => {
        const nums: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        const expected: number = 6
        const actual: number = maxSumSubArray(nums)
        expect(actual).toEqual(expected)
    })

    it("Should return 1 for nums = [1]", () => {
        const nums: number[] = [1]
        const expected: number = 1
        const actual: number = maxSumSubArray(nums)
        expect(actual).toEqual(expected)
    })

    it("Should return 23 for nums = [5,4,-1,7,8]", () => {
        const nums: number[] = [5, 4, -1, 7, 8]
        const expected: number = 23
        const actual: number = maxSumSubArray(nums)
        expect(actual).toEqual(expected)
    })
})
