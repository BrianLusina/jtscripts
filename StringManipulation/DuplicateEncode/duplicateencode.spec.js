var DuplicateEncode = require('./duplicateencode')

describe("Duplicate Encode Test Suite", function(){
  it("Test 1", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateEncode("din")).toEqual("(((");
  });

  it("Test 1", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateEncode("recede")).toEqual("()()()");
  });

  it("should ignore case", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateEncode("Success")).toEqual("""),")())())"");
  });

  it("Test 1", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateEncode('(( @")')).toEqual("))((");
  });

});
