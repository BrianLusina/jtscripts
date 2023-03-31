import SubrectangleQueries from "./SubrectangleQueries";

describe('SubrectangleQueries', () => {
    it('[[1,1,1],[2,2,2],[3,3,3]] -> getValue(0, 0) = 1 -> updateSubrectangle(0, 0, 2, 2, 100) -> getValue(0, 0) = 100 -> getValue(2, 2) = 100 -> updateSubrectangle(1, 1, 2, 2, 20) -> getValue(2, 2) = 20', () => {
        const originalRectangle = [[1,1,1],[2,2,2],[3,3,3]]
        
        const subRectangle = new SubrectangleQueries(originalRectangle)
        
        // return 1
        expect(subRectangle.getValue(0, 0)).toEqual(1)

        expect(() => subRectangle.updateSubrectangle(0, 0, 2, 2, 100)).not.toThrowError()

        // return 100
        expect(subRectangle.getValue(0, 0)).toEqual(100)
        
        // return 100
        expect(subRectangle.getValue(2, 2)).toEqual(100);
        
        expect(() => subRectangle.updateSubrectangle(1, 1, 2, 2, 20)).not.toThrowError();

        // return 20
        expect(subRectangle.getValue(2, 2)).toEqual(20);
    })

    it('[[1,2,1],[4,3,4],[3,2,1],[1,1,1]] -> getValue(0, 2) = 1 -> updateSubrectangle(0, 0, 3, 2, 5) -> getValue(0, 2) = 5 -> updateSubrectangle(3, 0, 3, 2, 10) -> getValue(3, 1) = 10 -> getValue(0, 2) = 5', () => {
        const originalRectangle = [[1,2,1],[4,3,4],[3,2,1],[1,1,1]]
        
        const subRectangle = new SubrectangleQueries(originalRectangle)
        
        // return 1
        expect(subRectangle.getValue(0, 2)).toEqual(1)

        expect(() => subRectangle.updateSubrectangle(0, 0, 3, 2, 5)).not.toThrowError()

        // return 5
        expect(subRectangle.getValue(0, 2)).toEqual(5)
        
        // return 5
        expect(subRectangle.getValue(3, 1)).toEqual(5);
        
        expect(() => subRectangle.updateSubrectangle(3, 0, 3, 2, 10)).not.toThrowError();

        // return 10
        expect(subRectangle.getValue(3, 1)).toEqual(10);

        // return 5
        expect(subRectangle.getValue(0, 2)).toEqual(5);
    })
})