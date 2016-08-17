var ConsecutiveString = require('./consecutivestring')

describe("Consecutive String Test Cases", function(){
  it("Test 1", function(){
    var longCon = new ConsecutiveString();
    expect(longCon.longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toEqual("abigailtheta");
  });

  it("Test 2", function(){
    var longCon = new ConsecutiveString();
    expect(longCon.longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toEqual("oocccffuucccjjjkkkjyyyeehh");
  });

  it("Test 3", function(){
    var longCon = new ConsecutiveString();
    expect(longCon.longestConsec([], 3).toEqual("");
  });

  it("Test 4", function(){
    var longCon = new ConsecutiveString();
    expect(longCon.longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2).toEqual("wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
  });

  it("Test 5", function(){
    var longCon = new ConsecutiveString();
    expect(longCon.longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2).toEqual("wlwsasphmxxowiaxujylentrklctozmymu");
  });

  it("Test 6", function(){
      var longCon = new ConsecutiveString();
      expect(longCon.longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2).toEqual("");
  });

  it("Test 7", function(){
      var longCon = new ConsecutiveString();
      expect(longCon.longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3).toEqual("ixoyx3452zzzzzzzzzzzz");
  });

  it("Test 8", function(){
      var longCon = new ConsecutiveString();
      expect(longCon.longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15).toEqual("");
  });

  it("Test 9", function(){
      var longCon = new ConsecutiveString();
      expect(longCon.longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0).toEqual("");
  });

});
