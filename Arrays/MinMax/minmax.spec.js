var MinMax = require('./minmax');

describe("MinMax Test Cases", function(){
    it("Test 1", function(){
        var i, r;
        test([1,2,3,4,5], [1,5]);
        test([2334454,5], [5, 2334454]);
    
        for(i = 0; i < 20; ++i){
            r = Math.random();
            test([r], [r,r]);
        }
        var test = function(arr, res){
            expect(MinMax(arr)).toEqual(res);
        };
    });
})