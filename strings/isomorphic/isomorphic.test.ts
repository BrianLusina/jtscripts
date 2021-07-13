import isIsomorphic from "./isomorphic"

describe('IsIsomorphic', () => {

    it('should return true for aab & xyz', () => {
        const a = "aab"
        const b = "xxy"

        expect(isIsomorphic(a, b)).toBe(true)
    })

    it('should return false for unequal length strings', () => {
        const a = "aaba"
        const b = "xyz"

        expect(isIsomorphic(a, b)).toBe(false)
    })

    it('should return false for aab & xyz', () => {
        const a = "aab"
        const b = "xyz"

        expect(isIsomorphic(a, b)).toBe(false)
    })

    it('should return true for egg & add', () => {
        const a = "egg"
        const b = "add"

        expect(isIsomorphic(a, b)).toBe(true)
    })

    it('should return false for badc & baba', () => {
        const a = "badc"
        const b = "baba"

        expect(isIsomorphic(a, b)).toBe(false)
    })
})
