
var Pattern = require('./pattern');

describe("Pattern Tests", function(){

  it("Test 1", function(){
    var pattern = new Pattern();
    expect(pattern.getPattern(1)).toEqual("1");
  });

  it("Test 2", function(){
    var pattern = new Pattern();
    expect(pattern.getPattern(2)).toEqual("1\n22");
  });

  it("Test 3", function(){
    var pattern = new Pattern();
    expect(pattern.getPattern(5)).toEqual("1\n22\n333\n4444\n55555");
  });

});
