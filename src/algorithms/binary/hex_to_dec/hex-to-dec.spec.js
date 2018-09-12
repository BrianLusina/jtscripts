var HexToDec = require('./hex-to-dec');
const test = require("ava");
const expect = require("expect");

test('Test 1', t => {
  var hexDec = new HexToDec();
  expect(hexDec.hexToDec('1')).toEqual(1);
});

test('Test 2', t => {
  var hexDec = new HexToDec();
  expect(hexDec.hexToDec('a')).toEqual(10);
});

test('Test 3', t => {
  var hexDec = new HexToDec();
  expect(hexDec.hexToDec('10')).toEqual(16);
});

test('Test 4', t => {
  var hexDec = new HexToDec();
  expect(hexDec.hexToDec('FF')).toEqual(255);
});

test('Test 5', t => {
  var hexDec = new HexToDec();
  expect(hexDec.hexToDec('-C')).toEqual(-12);
});
