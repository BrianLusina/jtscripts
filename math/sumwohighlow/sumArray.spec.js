const test = require('ava')
const expect = require('expect')
const SumArray = require('./sumArray')

test('Test 1', t => {
  const s = new SumArray()
  t.is(s.sumArray([6, 2, 1, 8, 10]), 16)
})

test('Test 2', t => {
  const s = new SumArray()
  t.is(s.sumArray([6]), 0)
})

test('Test 3', t => {
  const s = new SumArray()
  t.is(s.sumArray(null), 0)
})

test('Test 4', t => {
  const s = new SumArray()
  t.is(s.sumArray([]), 0)
})
