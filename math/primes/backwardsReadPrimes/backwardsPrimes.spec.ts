import backwardsPrime from './backwardsPrimes'

describe('BackwardsReadPrimes', () => {
    it('should return [9923, 9931, 9941, 9967] for start = 9900 and end = 10000', () => {
        const start = 9900
        const end = 10000
        const expected = [9923, 9931, 9941, 9967]
        const actual = backwardsPrime(start, end)
        expect(actual).toEqual(expected)
    })

    it('should return [7027, 7043, 7057] for start = 7000 and end = 7100', () => {
        const start = 7000
        const end = 7100
        const expected = [7027, 7043, 7057]
        const actual = backwardsPrime(start, end)
        expect(actual).toEqual(expected)
    })
})
