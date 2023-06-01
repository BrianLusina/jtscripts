import mergeAlternately, { mergeAlternately2 } from "./mergestrings";

describe('Merge Strings Alternatively', () => {

    describe('using 2 pointers', () => {
        it("should merge abc and pqr to apbqcr", () => {
            const word1 = "abc"
            const word2 = "pqr"
            const expected = "apbqcr"
            const actual = mergeAlternately(word1, word2)
            expect(actual).toEqual(expected)
        })
    
        it("should merge ab and pqrs to apbqrs", () => {
            const word1 = "ab"
            const word2 = "pqrs"
            const expected = "apbqrs"
            const actual = mergeAlternately(word1, word2)
            expect(actual).toEqual(expected)
        })
    
        it("should merge abcd and pq to apbqcd", () => {
            const word1 = "abcd"
            const word2 = "pq"
            const expected = "apbqcd"
            const actual = mergeAlternately(word1, word2)
            expect(actual).toEqual(expected)
        })
    
        it("should merge cf and eee to cefee", () => {
            const word1 = "cf"
            const word2 = "eee"
            const expected = "cefee"
            const actual = mergeAlternately(word1, word2)
            expect(actual).toEqual(expected)
        })
    })

    describe('using 1 pointer', () => {

        it("should merge abc and pqr to apbqcr", () => {
            const word1 = "abc"
            const word2 = "pqr"
            const expected = "apbqcr"
            const actual = mergeAlternately2(word1, word2)
            expect(actual).toEqual(expected)
        })

        it("should merge ab and pqrs to apbqrs", () => {
            const word1 = "ab"
            const word2 = "pqrs"
            const expected = "apbqrs"
            const actual = mergeAlternately2(word1, word2)
            expect(actual).toEqual(expected)
        })

        it("should merge abcd and pq to apbqcd", () => {
            const word1 = "abcd"
            const word2 = "pq"
            const expected = "apbqcd"
            const actual = mergeAlternately2(word1, word2)
            expect(actual).toEqual(expected)
        })

        it("should merge cf and eee to cefee", () => {
            const word1 = "cf"
            const word2 = "eee"
            const expected = "cefee"
            const actual = mergeAlternately2(word1, word2)
            expect(actual).toEqual(expected)
        })
    })
})
