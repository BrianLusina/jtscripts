var test = require("ava");
var expect = require("expect");
var SumArray = require('./sumArray')

test("Test 1", t => {
  var s = new SumArray();
  t.is(s.sumArray([6, 2, 1, 8, 10]),16);
});

test("Test 2", t => {
  var s = new SumArray();
  t.is(s.sumArray([6]),0);
});

test("Test 3", t => {
  var s = new SumArray();
  t.is(s.sumArray(null),0);
});

test("Test 4", t => {
  var s = new SumArray();
  t.is(s.sumArray([]),0);
});
