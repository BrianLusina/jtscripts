import test from "ava";
import expect from "expect";
var CountBits = require('./countbits');

test('Test One', t => {
  var count = new CountBits();

  expect(count.countBits(0)).toEqual(0);
});

test('Test Two', t => {
  var count = new CountBits();
  expect(count.countBits(4)).toEqual(1);
});

test('Test Three', t => {
  var count = new CountBits();
  expect(count.countBits(7)).toEqual(3);
});

test('Test Four', t => {
  var count = new CountBits();
  expect(count.countBits(9)).toEqual(2);
});

test('Test Five', t => {
  var count = new CountBits();
  expect(count.countBits(10)).toEqual(2);
});
