var test = require("ava");
var expect = require("expect");
var DuplicateEncode = require('./duplicateencode');

test('Test 1', t => {
  var dup = new DuplicateEncode();
  t.is(dup.duplicateencode('din'),'(((');
});

test('Test 2', t => {
  var dup = new DuplicateEncode();
  t.is(dup.duplicateencode('recede'),'()()()');
});

test('should ignore case', t => {
  var dup = new DuplicateEncode();
  t.is(dup.duplicateencode('Success'),')())())');
});

test('Test 4', t => {
  var dup = new DuplicateEncode();
  t.is(dup.duplicateencode('(( @")'),'))((((');
});
