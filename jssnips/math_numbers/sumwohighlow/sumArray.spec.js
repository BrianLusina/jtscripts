var SumArray = require('./sumArray')

describe("Sum Array Tests", function(){
  it("Test 1", function(){
    var s = new SumArray();
    expect(s.sumArray([ 6, 2, 1, 8, 10 ])).toEqual(16);
  });

  it("Test 2", function(){
    var s = new SumArray();
    expect(s.sumArray([ 6])).toEqual(0);
  });

  it("Test 3", function(){
    var s = new SumArray();
    expect(s.sumArray(null)).toEqual(0);
  });

  it("Test 4", function(){
    var s = new SumArray();
    expect(s.sumArray([])).toEqual(0);
  });
});
