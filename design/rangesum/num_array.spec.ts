import NumArray from "./num_array"

describe('NumArray', () => {
    it('NumArray([-2, 0, 3, -5, 2, -1]) -> sumRange(0,2) = 1 -> sumRange(2,5) = -1 -> sumRange(0,5) = -3', () => {
        const numbers = [-2, 0, 3, -5, 2, -1]
        const numArray = new NumArray(numbers)
        
        const actualSumRangeOne = numArray.sumRange(0, 2)
        expect(actualSumRangeOne).toEqual(1)

        const actualSumRangeTwo = numArray.sumRange(2, 5)
        expect(actualSumRangeTwo).toEqual(-1)

        const actualSumRangeThree = numArray.sumRange(0, 5)
        expect(actualSumRangeThree).toEqual(-3)
    })

})