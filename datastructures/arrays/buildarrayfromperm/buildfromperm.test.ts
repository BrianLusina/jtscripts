import buildArray from './buildfromperm';

describe("Build Array From Permutation", () => {
    
    test('Test one', () => {
        const nums = [0, 2, 1, 5, 3, 4];
        const expected = [0, 1, 2, 4, 5, 3]
        const actual = buildArray(nums);
        expect(actual).toEqual(expected)
    })

    test('Test two', () => {
        const nums = [5, 0, 1, 2, 3, 4]
        const expected = [4, 5, 0, 1, 2, 3]
        const actual = buildArray(nums);
        expect(actual).toEqual(expected)
    })
})
