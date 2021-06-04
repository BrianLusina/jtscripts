const test = require('ava')
const expect = require('expect')
const Octal = require('./octal')

test('1 is decimal 1', function () {
  t.is(new Octal('1').toDecimal(), 1)
})

test('10 is decimal 8', function () {
  t.is(new Octal('10').toDecimal(), 8)
})

test('17 is decimal 15', function () {
  t.is(new Octal('17').toDecimal(), 15)
})

test('11 is decimal 9', function () {
  t.is(new Octal('11').toDecimal(), 9)
})

test('130 is decimal 88', function () {
  t.is(new Octal('130').toDecimal(), 88)
})

test('2047 is decimal 1063', function () {
  t.is(new Octal('2047').toDecimal(), 1063)
})

test('7777 is decimal 4095', function () {
  t.is(new Octal('7777').toDecimal(), 4095)
})

test('1234567 is decimal 342391', function () {
  t.is(new Octal('1234567').toDecimal(), 342391)
})

test('invalid is decimal 0', function () {
  t.is(new Octal('carrot').toDecimal(), 0)
})

test('considers the digit 8 as invalid', function () {
  t.is(new Octal('12345678').toDecimal(), 0)
})
