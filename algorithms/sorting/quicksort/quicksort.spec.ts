import { quicksort } from "./quicksort";

describe('QuickSort', () => {
    it("should sort a list of [0,5,2,1,6,3]", () => {
        const numbers = [0,5,2,1,6,3]
        const expected = [0, 1, 2, 3, 5, 6]
        const actual = quicksort(numbers)
        expect(actual).toEqual(expected)
    })
})
