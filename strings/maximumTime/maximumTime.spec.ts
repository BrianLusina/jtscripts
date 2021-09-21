import maximumTime from './maximumTime'

describe('Latest Time by Replacing Hidden Digits', () => {
    it('should return the maximum time 23:50 from 2?:?0', () => {
        const time = "2?:?0"
        const expected = "23:50"
        const actual = maximumTime(time)
        expect(actual).toEqual(expected)
    })

    it('should return the maximum time 09:39 from 0?:3?', () => {
        const time = "0?:3?"
        const expected = "09:39"
        const actual = maximumTime(time)
        expect(actual).toEqual(expected)
    })

    it('should return the maximum time 19:22 from 1?:22', () => {
        const time = "1?:22"
        const expected = "19:22"
        const actual = maximumTime(time)
        expect(actual).toEqual(expected)
    })

    it('should return the maximum time 23:39 from ??:3?', () => {
        const time = "??:3?"
        const expected = "23:39"
        const actual = maximumTime(time)
        expect(actual).toEqual(expected)
    })
})
