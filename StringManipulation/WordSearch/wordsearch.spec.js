var wordSearch = require('/wordsearch');

describe("Word Search Test Suite" function(){
  it("Test 1", function(){
    var ws = new WordSearch();
    expect(ws.wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])).toEqual(["ab", "abc", "zab"]);
  });

  it("Test 2", function(){
    var ws = new WordSearch();
    expect(ws.wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])).toEqual(["ab", "abc", "zab"]);
  });

  it("Test 3", function(){
    var ws = new WordSearch();
    expect(ws.wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])).toEqual(["aB", "Abc", "zAB"]);
  });

  it("Test 4", function(){
    var ws = new WordSearch();
    expect(ws.wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])).toEqual(["Empty"]);
  });

});
