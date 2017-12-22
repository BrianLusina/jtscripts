var closedBracketWord = require("../../jssnips/string_words/closed_bracket_word/closed-bracket-word")
var expect = require('chai').expect;

describe("Basic Tests", function(){ 
    
    it("It should works for basic tests.", function(){
        expect(closedBracketWord("abiryz")).to.equal(true)
    });

    it("", function(){
        expect(closedBracketWord("aibryz")).to.equal(false)
    });

    it("random word", function(){
        expect(closedBracketWord("abitryz")).to.equal(false)
    });

    it("some random word", function(){
        expect(closedBracketWord("zhuazfsa")).to.equal(true)
    });

    it("baby", function(){
        expect(closedBracketWord("baby")).to.equal(false)
    });

    it("grit", function(){
        expect(closedBracketWord("grit")).to.equal(true)
    });

    it("Foul", function(){
        expect(closedBracketWord("foul")).to.equal(false)
    });

})