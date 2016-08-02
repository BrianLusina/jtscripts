var CountBits = require("./countbits")

describe("Count Bits Test Suite", function(){
  it("Test One",function(){
    var count = new CountBits();

    expect(count.countBits(0)).toEqual(0);
  });

  it("Test Two",function(){
    var count = new CountBits();
    expect(count.countBits(4)).toEqual(1);
  });

  it("Test Three",function(){
    var count = new CountBits();
    expect(count.countBits(7)).toEqual(3);
  });

  it("Test Four",function(){
    var count = new CountBits();
    expect(count.countBits(9)).toEqual(2);
  });

  it("Test Five",function(){
    var count = new CountBits();
    expect(count.countBits(10)).toEqual(2);
  });

});
