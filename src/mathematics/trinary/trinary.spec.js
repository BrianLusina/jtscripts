var test = require("ava");
var expect = require("expect");
var Trinary = require('./trinary');


test('1 is decimal 1', t => {
  t.is(new Trinary('1').toDecimal(),1);
});

test('2 is decimal 2', t => {
  t.is(new Trinary('2').toDecimal(),2);
});

test('10 is decimal 3', t => {
  t.is(new Trinary('10').toDecimal(),3);
});

test('11 is decimal 4', t => {
  t.is(new Trinary('11').toDecimal(),4);
});

test('100 is decimal 9', t => {
  t.is(new Trinary('100').toDecimal(),9);
});

test('112 is decimal 14', t => {
  t.is(new Trinary('112').toDecimal(),14);
});

test('222 is 26', t => {
  t.is(new Trinary('222').toDecimal(),26);
});

test('1122000120 is 32091', t => {
  t.is(new Trinary('1122000120').toDecimal(),32091);
});

test('invalid trinary is decimal 0', t => {
  t.is(new Trinary('carrot').toDecimal(),0);
});
