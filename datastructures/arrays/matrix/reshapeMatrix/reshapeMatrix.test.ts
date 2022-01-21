import { matrixReshape } from "./reshapeMatrix"

describe('Matrix Reshape', () => {
  describe('Iteration One', () => {
    it('Should return [[1,2,3,4]] for input[[1,2],[3,4]] and r=1 and c=4', () => {
        const mat: number[][] = [[1, 2], [3, 4]]
        const r: number = 1
        const c: number = 4
        const expected: number[][] = [[1, 2, 3, 4]]
        const actual: number[][] = matrixReshape(mat, r, c)
        expect(actual).toEqual(expected)
    })

    it('Should return [[1,2],[3,4]] for input[[1,2],[3,4]] and r=2 and c=4', () => {
        const mat: number[][] = [[1, 2], [3, 4]]
        const r: number = 2
        const c: number = 4
        const expected: number[][] = [[1, 2], [3, 4]]
        const actual: number[][] = matrixReshape(mat, r, c)
        expect(actual).toEqual(expected)
    })

  })
})
