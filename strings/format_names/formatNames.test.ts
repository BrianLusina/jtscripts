import formatNames from "./formatNames"

describe('formatNames', () => {
    it('should return an empty string when list is empty', () => {
        expect(formatNames([])).toBe('')
    })

    it('should return a string with the first name when list has one item', () => {
        const names = [{name: 'Bart'}]
        expect(formatNames(names)).toBe('Bart')
    })

    it('should add ampersand with 2 names only', () => {
        const names = [{name: 'Bart'}, {name: 'Lisa'}]
        const actual = formatNames(names)
        expect(actual).toBe('Bart & Lisa')
    })

    it('should add ampersand with 3 names', () => {
        const names = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]
        const actual = formatNames(names)
        expect(actual).toBe('Bart, Lisa & Maggie')
    })

    it('should add ampersand with 4+ names', () => {
        const names = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}]
        const actual = formatNames(names)
        expect(actual).toBe('Bart, Lisa, Maggie & Homer')
    })
})
