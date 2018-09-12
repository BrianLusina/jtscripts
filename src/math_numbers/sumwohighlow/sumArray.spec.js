var SumArray = require('./sumArray')

test("Sum Array Tests", function(){
  test("Test 1", function(){
    var s = new SumArray();
    expect(s.sumArray([ 6, 2, 1, 8, 10 ])).toEqual(16);
  });

  test("Test 2", function(){
    var s = new SumArray();
    expect(s.sumArray([ 6])).toEqual(0);
  });

  test("Test 3", function(){
    var s = new SumArray();
    expect(s.sumArray(null)).toEqual(0);
  });

  test("Test 4", function(){
    var s = new SumArray();
    expect(s.sumArray([])).toEqual(0);
  });
});
