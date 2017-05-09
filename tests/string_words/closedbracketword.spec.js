var closedBracketWord = require("../../jssnips/string_words/closed_bracket_word/closed-bracket-word")

describe("Basic Tests", function(){ 
    
    it("It should works for basic tests.", function(){
        expect(closedBracketWord("abiryz")).toEqual(true)
    });

    it("", function(){
        expect(closedBracketWord("aibryz"),false)
    });

    it("random word", function(){
        expect(closedBracketWord("abitryz"),false)
    });

    it("some random word", function(){
        expect(closedBracketWord("zhuazfsa"),true)
    });

    it("baby", function(){
        expect(closedBracketWord("baby"),false)
    });

    it("grit", function(){
        expect(closedBracketWord("grit"),true)
    });

    it("Foul", function(){
        expect(closedBracketWord("foul"),false)
    });

})