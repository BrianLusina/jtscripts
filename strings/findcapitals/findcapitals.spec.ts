import findCapitals from "./findcapitals";

describe('Find Capitals', () => {
    it('CodEWaRs should return [0,3,4,6]', () => {
        const word = 'CodEWaRs'
        const expected = [0,3,4,6] 
        const actual = findCapitals(word)
        expect(actual).toEqual(expected)
    })
})
