var test = require("ava");
var expect = require("expect");
var DuplicateEncode = require('./duplicateencode');

test('Test 1', t => {
  var dup = new DuplicateEncode();
  expect(dup.duplicateencode('din')).toEqual('(((');
});

test('Test 2', t => {
  var dup = new DuplicateEncode();
  expect(dup.duplicateencode('recede')).toEqual('()()()');
});

test('should ignore case', t => {
  var dup = new DuplicateEncode();
  expect(dup.duplicateencode('Success')).toEqual(')())())');
});

test('Test 4', t => {
  var dup = new DuplicateEncode();
  expect(dup.duplicateencode('(( @")')).toEqual('))((((');
});
