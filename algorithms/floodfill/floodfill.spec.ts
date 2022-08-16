import floodFill from './floodfill';

describe('FloodFill', () => {
    it('should return [[0,0,0],[0,0,0]] for input of [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0', () => {
        const image = [[0,0,0],[0,0,0]]
        const sr = 0
        const sc = 0
        const newColor = 0
        const actual = floodFill(image, sr, sc, newColor);
        const expected = [[0,0,0],[0,0,0]]
        expect(actual).toEqual(expected);
    })

    it('should return [[2, 2, 2], [2, 2, 0], [2, 0, 1]] for input of [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', () => {
        const image = [[1,1,1],[1,1,0],[1,0,1]]
        const sr = 1
        const sc = 1
        const newColor = 2
        const actual = floodFill(image, sr, sc, newColor);
        const expected = [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
        expect(actual).toEqual(expected);
    })
});