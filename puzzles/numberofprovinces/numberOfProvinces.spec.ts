import numberOfProvinces from './numberOfProvinces'

describe('Number of provices', () => {
    it('should return 0 for empty grid', () => {
        const grid: number[][] = []
        const expected = 0
        const actual = numberOfProvinces(grid)
        expect(actual).toEqual(expected)
    })

    it('should return 2 for grid=[[1,1,0],[1,1,0],[0,0,1]]', () => {
        const grid: number[][] = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
        const expected = 2
        const actual = numberOfProvinces(grid)
        expect(actual).toEqual(expected)
    })

    it('should return 3 for grid=[[1,0,0],[0,1,0],[0,0,1]]', () => {
        const grid: number[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        const expected = 3
        const actual = numberOfProvinces(grid)
        expect(actual).toEqual(expected)
    })
})
