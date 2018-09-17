var test = require("ava");
var expect = require("expect");
var NameNumber = require('./namethatnumber');

test('test 1, Zero', t => {
  var name = new NameNumber();
  expect(name.nameThatNumber(0)).toEqual('zero');
});

test('test 2, Four', t => {
  var name = new NameNumber();
  expect(name.nameThatNumber(4)).toEqual('four');
});

test('test 3, Nine', t => {
  var name = new NameNumber();
  expect(name.nameThatNumber(9)).toEqual('nine');
});

test('test 23', t => {
  var name = new NameNumber();
  expect(name.nameThatNumber(23)).toEqual('twenty three');
});

test('test 40', t => {
  var name = new NameNumber();
  expect(name.nameThatNumber(40)).toEqual('forty');
});
