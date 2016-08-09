var HexToDec = require('./hex-to-dec')

describe("Hexadecimal to Decimal", function(){
  it("Test 1", function(){
    var hexDec = new HexToDec();
    expect(hexDec.hextoDec("1")).toEqual(1);
  });

  it("Test 2", function(){
    var hexDec = new HexToDec();
    expect(hexDec.hextoDec("a")).toEqual(10);
  });

  it("Test 3", function(){
    var hexDec = new HexToDec();
    expect(hexDec.hextoDec("10")).toEqual(16);
  });

  it("Test 4", function(){
    var hexDec = new HexToDec();
    expect(hexDec.hextoDec("FF")).toEqual(255);
  });

  it("Test 5", function(){
    var hexDec = new HexToDec();
    expect(hexDec.hextoDec("-C")).toEqual(12);
  });

})
