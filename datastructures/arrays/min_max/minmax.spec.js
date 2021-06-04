var expect = require("expect");
var test = require("ava");
var minMax = require('./minmax');

test('Test 1', t => {
  var tester = function (arr, res) {
    var minmax = new minMax();
    t.is(minmax.getMaxMin(arr),res);
  };

  var i, r;
  tester([1, 2, 3, 4, 5], [1, 5]);
  tester([2334454, 5], [5, 2334454]);

  for (i = 0; i < 20; ++i) {
    r = Math.random();
    tester([r], [r, r]);
  }
});
