import HashMap from './HashMap'
import HashMapJs from './HashMapJs'

describe('HashMap', () => {

    describe('TS', () => {
        const hashMap = new HashMap()

        it('should return 1', () => {
            hashMap.put(1, 1)
            hashMap.put(2, 2)
            const actual = hashMap.get(1)
            expect(actual).toEqual(1)
        })

        it('should return 2', () => {
            const actual = hashMap.get(2)
            expect(actual).toEqual(2)
        })

        it('should return undefined for 3', () => {
            const actual = hashMap.get(3)
            expect(actual).toBeUndefined()
        })

        it('should update existing value of key 2 with 1 and return 1', () => {
            hashMap.put(2, 1)
            const actual = hashMap.get(2)
            expect(actual).toEqual(1)
        })

        it('should return undefined for removed keys', () => {
            hashMap.remove(2)
            const actual = hashMap.get(2)
            expect(actual).toBeUndefined()
        })
    })

    describe('JS', () => {
        const hashMap = new HashMapJs()

        it('should return 1', () => {
            hashMap.put(1, 1)
            hashMap.put(2, 2)
            const actual = hashMap.get(1)
            expect(actual).toEqual(1)
        })

        it('should return 2', () => {
            const actual = hashMap.get(2)
            expect(actual).toEqual(2)
        })

        it('should return undefined for 3', () => {
            const actual = hashMap.get(3)
            expect(actual).toBeNull()
        })

        it('should update existing value of key 2 with 1 and return 1', () => {
            hashMap.put(2, 1)
            const actual = hashMap.get(2)
            expect(actual).toEqual(1)
        })

        it('should return undefined for removed keys', () => {
            hashMap.remove(2)
            const actual = hashMap.get(2)
            expect(actual).toBeNull()
        })
    })
})
