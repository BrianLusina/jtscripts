const test = require('ava')
const expect = require('expect')
const CountBits = require('./countbits')

test('Test One', t => {
  const count = new CountBits()

  t.is(count.countBits(0), 0)
})

test('Test Two', t => {
  const count = new CountBits()
  t.is(count.countBits(4), 1)
})

test('Test Three', t => {
  const count = new CountBits()
  t.is(count.countBits(7), 3)
})

test('Test Four', t => {
  const count = new CountBits()
  t.is(count.countBits(9), 2)
})

test('Test Five', t => {
  const count = new CountBits()
  t.is(count.countBits(10), 2)
})
