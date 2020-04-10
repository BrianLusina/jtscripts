var test = require("ava");
var expect = require("expect");
var Binary = require('./binaryfirstprinciples.js');

test('0 is decimal 0', t => {
  t.is(new Binary('0').toDecimal(),0);
});

test('1 is decimal 1', t => {
  t.is(new Binary('1').toDecimal(),1);
});

test('10 is decimal 2', t => {
  t.is(new Binary('10').toDecimal(),2);
});

test('11 is decimal 3', t => {
  t.is(new Binary('11').toDecimal(),3);
});

test('100 is decimal 4', t => {
  t.is(new Binary('100').toDecimal(),4);
});

test('1001 is decimal 9', t => {
  t.is(new Binary('1001').toDecimal(),9);
});

test('11010 is decimal 26', t => {
  t.is(new Binary('11010').toDecimal(),26);
});

test('10001101000 is decimal 1128', t => {
  t.is(new Binary('10001101000').toDecimal(),1128);
});

test('00011111 is decimal 31', t => {
  t.is(new Binary('00011111').toDecimal(),31);
});

test('invalid inputs are decimal 0', t => {
  t.is(new Binary('carrot').toDecimal(),0);
  t.is(new Binary('012').toDecimal(),0);
  t.is(new Binary('10nope').toDecimal(),0);
  t.is(new Binary('nope10').toDecimal(),0);
  t.is(new Binary('10nope10').toDecimal(),0);
});
