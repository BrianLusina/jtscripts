const test = require('ava');
const expect = require("expect");
var CountBits = require('./countbits');

test('Test One', t => {
  var count = new CountBits();

  t.is(count.countBits(0), 0);
});

test('Test Two', t => {
  var count = new CountBits();
  t.is(count.countBits(4),1);
});

test('Test Three', t => {
  var count = new CountBits();
  t.is(count.countBits(7),3);
});

test('Test Four', t => {
  var count = new CountBits();
  t.is(count.countBits(9),2);
});

test('Test Five', t => {
  var count = new CountBits();
  t.is(count.countBits(10),2);
});
