import findMin from "./minInRotatedSortedArray";


describe('FindMin', () => {
    it('Should return 1 from nums = [3,4,5,1,2]', () => {
        const nums = [3,4,5,1,2]
        const expected = 1
        const actual = findMin(nums)
        expect(actual).toEqual(expected)
    })

    it('Should return 0 from nums = [4,5,6,7,0,1,2]', () => {
        const nums = [4,5,6,7,0,1,2]
        const expected = 0
        const actual = findMin(nums)
        expect(actual).toEqual(expected)
    })

    it('Should return 11 from nums = [11,13,15,17]', () => {
        const nums = [11,13,15,17]
        const expected = 11
        const actual = findMin(nums)
        expect(actual).toEqual(expected)
    })
})
