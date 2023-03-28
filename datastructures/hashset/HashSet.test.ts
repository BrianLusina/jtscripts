import MyHashSet from './HashSet';

describe("HashSet Tests", () => {
    const hashSet = new MyHashSet();

    it("add 1 to map", () => {
        const expected = new Set();
        expected.add(1);
        hashSet.add(1);
        expect(hashSet.container).toEqual(expected)
    })

    it("add 2 to existing map", () => {
        const expected = new Set();
        expected.add(1);
        expected.add(2);
        hashSet.add(2);
        expect(hashSet.container).toEqual(expected)
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
        expect(hashSet.container).toEqual(expected)
    })

    it("contain 2 should return true", () => {
        const actual = hashSet.contains(2);
        expect(actual).toBeTruthy();
    })

    it("remove 2", () => {
        const expected = new Set();
        expected.add(1);
        hashSet.remove(2);
        expect(hashSet.container).toEqual(expected)
    })
})