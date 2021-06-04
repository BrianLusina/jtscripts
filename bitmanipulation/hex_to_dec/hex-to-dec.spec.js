const HexToDec = require('./hex-to-dec')
const test = require('ava')
const expect = require('expect')

test('Test 1', t => {
  const hexDec = new HexToDec()
  t.is(hexDec.hexToDec('1'), 1)
})

test('Test 2', t => {
  const hexDec = new HexToDec()
  t.is(hexDec.hexToDec('a'), 10)
})

test('Test 3', t => {
  const hexDec = new HexToDec()
  t.is(hexDec.hexToDec('10'), 16)
})

test('Test 4', t => {
  const hexDec = new HexToDec()
  t.is(hexDec.hexToDec('FF'), 255)
})

test('Test 5', t => {
  const hexDec = new HexToDec()
  t.is(hexDec.hexToDec('-C'), -12)
})
