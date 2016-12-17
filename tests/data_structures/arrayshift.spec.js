var ArrayShift = require('../../jssnips/data_structures/arrays/array_shift/arrayshift');

describe("Array Shift test suite", function(){
    it("Test one", function(){
        var arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]];
        var expected = [8, 9, 10, 11, 12, -1 ];
        var arr = new ArrayShift();
        expect(arr.addingShifted(arrayOfArrays, 0)).toEqual(expected);
    });
   
    it("Test two", function(){
        var arrayOfArrays = [[1, 2, 3, 4, 5, 6],[7, 7, 7, 7, 7, 7]];
        var expected = [ 1, 2, 3, 11, 12, 13, 7, 7, 7];
        var arr = new ArrayShift();
        expect(arr.addingShifted(arrayOfArrays, 3)).toEqual(expected);
    });
    
    it("Test three", function(){
        var arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]];
        var expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
        var arr = new ArrayShift();
        expect(arr.addingShifted(arrayOfArrays, 3)).toEqual(expected);
    });

});