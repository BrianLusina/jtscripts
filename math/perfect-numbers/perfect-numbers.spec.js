const test = require('ava')
const expect = require('expect')
const PerfectNumbers = require('./perfect-numbers')

let perfectNumbers

test.before(t => {
  perfectNumbers = new PerfectNumbers()
})

test('Smallest perfect number is classified correctly', t => {
  t.is(perfectNumbers.classify(6), 'perfect')
})

test('Medium perfect number is classified correctly', t => {
  t.is(perfectNumbers.classify(28), 'perfect')
})

test('Large perfect number is classified correctly', t => {
  t.is(perfectNumbers.classify(33550336), 'perfect')
})

test('Smallest abundant number is classified correctly', t => {
  t.is(perfectNumbers.classify(12), 'abundant')
})

test('Medium abundant number is classified correctly', t => {
  t.is(perfectNumbers.classify(30), 'abundant')
})

test('Large abundant number is classified correctly', t => {
  t.is(perfectNumbers.classify(33550335), 'abundant')
})

test('Smallest prime deficient number is classified correctly', t => {
  t.is(perfectNumbers.classify(2), 'deficient')
})

test('Smallest non-prime deficient number is classified correctly', t => {
  t.is(perfectNumbers.classify(4), 'deficient')
})

test('Medium deficient number is classified correctly', t => {
  t.is(perfectNumbers.classify(32), 'deficient')
})

test('Large deficient number is classified correctly', t => {
  t.is(perfectNumbers.classify(33550337), 'deficient')
})

test('Edge case (no factors other than itself) is classified correctly', t => {
  t.is(perfectNumbers.classify(1), 'deficient')
})

test('Zero is rejected (not a natural number)', t => {
  t.is(perfectNumbers.classify(0), 'Classification is only possible for natural numbers.')
})

test('Negative integer is rejected (not a natural number)', t => {
  t.is(perfectNumbers.classify(-1), 'Classification is only possible for natural numbers.')
})
