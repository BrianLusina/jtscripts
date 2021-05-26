var HexToDec = require('./hex-to-dec');
const test = require("ava");
const expect = require("expect");

test('Test 1', t => {
  var hexDec = new HexToDec();
  t.is(hexDec.hexToDec('1'),1);
});

test('Test 2', t => {
  var hexDec = new HexToDec();
  t.is(hexDec.hexToDec('a'),10);
});

test('Test 3', t => {
  var hexDec = new HexToDec();
  t.is(hexDec.hexToDec('10'),16);
});

test('Test 4', t => {
  var hexDec = new HexToDec();
  t.is(hexDec.hexToDec('FF'),255);
});

test('Test 5', t => {
  var hexDec = new HexToDec();
  t.is(hexDec.hexToDec('-C'),-12);
});
