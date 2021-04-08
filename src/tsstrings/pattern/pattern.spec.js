var test = require("ava");
var expect = require("expect");
var Pattern = require('./pattern');

test('Test 1', t => {
  var pattern = new Pattern();
  t.is(pattern.getPattern(1),'1');
});

test('Test 2', t => {
  var pattern = new Pattern();
  t.is(pattern.getPattern(2),'1\n22');
});

test('Test 3', t => {
  var pattern = new Pattern();
  t.is(pattern.getPattern(5),'1\n22\n333\n4444\n55555');
});
