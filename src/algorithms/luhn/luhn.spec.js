var Luhn = require('./luhn');
const test = require("ava");
const expect = require("expect");

test('single digit strings can not be valid', t => {
  const luhn = new Luhn('1');
  t.is(luhn.valid,false);
});

test('A single zero is invalid', t => {
  const luhn = new Luhn('0');
  t.is(luhn.valid,false);
});

test('valid Canadian SIN', t => {
  const luhn = new Luhn('046 454 286');
  t.is(luhn.valid,true);
});

test('invalid Canadian SIN', t => {
  const luhn = new Luhn('046 454 287');
  t.is(luhn.valid,false);
});

test('invalid credit card', t => {
  const luhn = new Luhn('8273 1232 7352 0569');
  t.is(luhn.valid,false);
});

test('valid strings with a non-digit added become invalid', t => {
  const luhn = new Luhn('046a 454 286');
  t.is(luhn.valid,false);
});
