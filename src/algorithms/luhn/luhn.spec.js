var Luhn = require('./luhn');
const test = require("ava");
const expect = require("expect");

test('single digit strings can not be valid', t => {
  const luhn = new Luhn('1');
  expect(luhn.valid).toEqual(false);
});

test('A single zero is invalid', t => {
  const luhn = new Luhn('0');
  expect(luhn.valid).toEqual(false);
});

test('valid Canadian SIN', t => {
  const luhn = new Luhn('046 454 286');
  expect(luhn.valid).toEqual(true);
});

test('invalid Canadian SIN', t => {
  const luhn = new Luhn('046 454 287');
  expect(luhn.valid).toEqual(false);
});

test('invalid credit card', t => {
  const luhn = new Luhn('8273 1232 7352 0569');
  expect(luhn.valid).toEqual(false);
});

test('valid strings with a non-digit added become invalid', t => {
  const luhn = new Luhn('046a 454 286');
  expect(luhn.valid).toEqual(false);
});
