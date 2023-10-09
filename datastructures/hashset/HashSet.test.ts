import HashSet from './HashSet';

describe("HashSet Tests", () => {
    const hashSet = new HashSet();

    it("add 1 to map", () => {
        hashSet.add(1);
        expect(hashSet.contains(1)).toEqual(true)
    })

    it("add 2 to existing map", () => {
        hashSet.add(2);
        expect(hashSet.contains(1)).toEqual(true)
        expect(hashSet.contains(2)).toEqual(true)
    })
    
    it("contains 1 should return true", () => {
        const actual = hashSet.contains(1);
        expect(actual).toBeTruthy();
    })

    it("contains 3 should return false", () => {
        const actual = hashSet.contains(3);
        expect(actual).toBeFalsy();
    })

    it("add another 2, but retain the previous hashset", () => {
        const expected = new Set();
        expected.add(1);
        expected.add(2);
        hashSet.add(2);
        expect(hashSet.contains(2)).toEqual(true)
    })

    it("contain 2 should return true", () => {
        const actual = hashSet.contains(2);
        expect(actual).toBeTruthy();
    })

    it("remove 2", () => {
        const expected = new Set();
        expected.add(1);
        hashSet.remove(2);
        expect(hashSet.contains(2)).toEqual(false)
    })
})