const test = require('ava')
const expect = require('expect')
const Hexadecimal = require('./hexadecimal')

test('hex 1 is decimal 1', t => {
  const hex = new Hexadecimal('1')
  t.is(hex.toDecimal(), 1)
})

test('hex c is decimal 12', t => {
  const hex = new Hexadecimal('c')
  t.is(hex.toDecimal(), 12)
})

test('hex 10 is decimal 16', t => {
  const hex = new Hexadecimal('10')
  t.is(hex.toDecimal(), 16)
})

test('hex af is decimal 175', t => {
  const hex = new Hexadecimal('af')
  t.is(hex.toDecimal(), 175)
})

test('hex 100 is decimal 256', t => {
  const hex = new Hexadecimal('100')
  t.is(hex.toDecimal(), 256)
})

test('hex 19ace is decimal 105166', t => {
  const hex = new Hexadecimal('19ace')
  t.is(hex.toDecimal(), 105166)
})

test('invalid hex is decimal 0', t => {
  const hex = new Hexadecimal('carrot')
  t.is(hex.toDecimal(), 0)
})

test('black', t => {
  const hex = new Hexadecimal('000000')
  t.is(hex.toDecimal(), 0)
})

test('white', t => {
  const hex = new Hexadecimal('ffffff')
  t.is(hex.toDecimal(), 16777215)
})

test('yellow', t => {
  const hex = new Hexadecimal('ffff00')
  t.is(hex.toDecimal(), 16776960)
})
