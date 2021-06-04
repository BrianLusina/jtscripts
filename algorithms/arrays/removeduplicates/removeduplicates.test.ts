import removeDuplicates from './removeduplicates';

describe("Remove Duplicates test", () => {
    it("returns 2 for [1, 1, 2]", () => {
        let arr = [1, 1, 2];
        expect(removeDuplicates(arr)).toEqual(2);
    });
})
