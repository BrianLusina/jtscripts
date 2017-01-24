var pattern = require("../../jssnips/string_words/complete_pattern/completepattern");

describe("Complete Pattern tests", function(){
    it("Test 1", ()=>{
        expect(pattern(1)).toEqual("1")
    });

    it("Test 2", function(){
        expect(pattern(2)).toEqual("21\n2");
    });

    it("Test 3", function(){
        expect(pattern(5)).toEqual("54321\n5432\n543\n54\n5");
    });
});
