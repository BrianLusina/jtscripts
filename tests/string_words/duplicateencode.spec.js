var DuplicateEncode = require('../../jssnips/string_words/duplicate_encode/duplicateencode')

describe("Duplicate Encode Test Suite", function(){
  it("Test 1", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateencode("din")).toEqual("(((");
  });

  it("Test 2", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateencode("recede")).toEqual("()()()");
  });

  it("should ignore case", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateencode("Success")).toEqual(")())())");
  });

  it("Test 4", function(){
    var dup = new DuplicateEncode();
    expect(dup.duplicateencode('(( @")')).toEqual("))((");
  });

});
