const test = require('ava')
const expect = require('expect')
const pattern = require('./completepattern')

test('Test 1', t => {
  t.is(pattern(1), '1')
})

test('Test 2', t => {
  t.is(pattern(2), '21\n2')
})

test('Test 3', t => {
  t.is(pattern(5), '54321\n5432\n543\n54\n5')
})
