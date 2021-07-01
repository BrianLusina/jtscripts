import MyHashSetJs from './MyHashSetJs';
import MyHashSet from './MyHashSet';

describe("HashSet Tests", () => {

    describe("In TS should", () => {
        const n = 5
        const hashSet = new MyHashSet();

        it("add 1 should add 1 to map", () => {
            const actual = new Map();
            actual.set(1, true);
            hashSet.add(1);
            expect(hashSet.map).toEqual(actual)
        })

        it("add 2 should add 2 to existing map", () => {
            const actual = new Map();
            actual.set(1, true);
            actual.set(2, true);
            hashSet.add(2);
            expect(hashSet.map).toEqual(actual)
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
            const actual = new Map();
            actual.set(1, true);
            actual.set(2, true);
            hashSet.add(2);
            expect(hashSet.map).toEqual(actual)
        })

        it("contain 2 should return true", () => {
            const actual = hashSet.contains(2);
            expect(actual).toBeTruthy();
        })

        it("remove 2", () => {
            const actual = new Map();
            actual.set(1, true);
            hashSet.remove(2);
            expect(hashSet.map).toEqual(actual)
        })
    });

    describe("In JS should", () => {
        const n = 5
        const hashSet = new MyHashSetJs();

        it("add 1 should add 1 to map", () => {
            const actual = new Map();
            actual.set(1, true);
            hashSet.add(1);
            expect(hashSet.map).toEqual(actual)
        })

        it("add 2 should add 2 to existing map", () => {
            const actual = new Map();
            actual.set(1, true);
            actual.set(2, true);
            hashSet.add(2);
            expect(hashSet.map).toEqual(actual)
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
            const actual = new Map();
            actual.set(1, true);
            actual.set(2, true);
            hashSet.add(2);
            expect(hashSet.map).toEqual(actual)
        })

        it("contain 2 should return true", () => {
            const actual = hashSet.contains(2);
            expect(actual).toBeTruthy();
        })

        it("remove 2", () => {
            const actual = new Map();
            actual.set(1, true);
            hashSet.remove(2);
            expect(hashSet.map).toEqual(actual)
        })
    })
})