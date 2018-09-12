var closedBracketWord = require("../../jssnips/string_words/closed_bracket_word/closed-bracket-word")
var expect = require('chai').expect;

test("Basic Tests", function(){ 
    
    test("It should works for basic tests.", function(){
        expect(closedBracketWord("abiryz")).to.equal(true)
    });

    test("", function(){
        expect(closedBracketWord("aibryz")).to.equal(false)
    });

    test("random word", function(){
        expect(closedBracketWord("abitryz")).to.equal(false)
    });

    test("some random word", function(){
        expect(closedBracketWord("zhuazfsa")).to.equal(true)
    });

    test("baby", function(){
        expect(closedBracketWord("baby")).to.equal(false)
    });

    test("grit", function(){
        expect(closedBracketWord("grit")).to.equal(true)
    });

    test("Foul", function(){
        expect(closedBracketWord("foul")).to.equal(false)
    });

})