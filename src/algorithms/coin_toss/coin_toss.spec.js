var coinToss = require('./coin_toss.js');
const test = require("ava");
const expect = require("expect");

test("accepts number arguments only", t => {
  expect(() => {
    throw coinToss("2");
  }).toThrow();
});

test('returns a number', t => {
  expect(coinToss(2)).toBeTruthy();
});
