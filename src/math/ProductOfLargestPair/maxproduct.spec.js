var test = require("ava");
var expect = require("expect");
var MaxProduct = require('./maxproduct');

test('Test 2', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([56, 335, 195, 443, 6, 494, 252]),218842);
});

test('Test 3', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([154, 428, 455, 346]),194740);
});

test('Test 4', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]),187827);
});

test('Test 5', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([136, 376, 10, 146, 105, 63, 234]),87984);
});

test('Test 6', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]),218536);
});

test('Test 7', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]),192672);
});

test('Test 8', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([134, 320, 266, 299]),95680);
});

test('Test 9', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]),139496);
});

test('Test 10', t => {
  var m = new MaxProduct.is();
  t.is(m.maxProduct.is([375, 56, 337, 466, 203]),174750);
});
