import removeElement from './removeelement';

describe("Remove Element test", () => {
    it("returns 2 for [3, 2, 2, 3] and val = 3", () => {
        let arr = [3, 2, 2, 3];
        let val = 3
        expect(removeElement(arr, val)).toEqual(2);
    });
})
