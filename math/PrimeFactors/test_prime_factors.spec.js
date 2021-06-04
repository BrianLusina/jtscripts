const test = require('ava')
const expect = require('expect')
const primeFactors = require('./primefactors.js')

test('returns an empty array for 1', t => {
  t.is(primeFactors.for(1), [])
})

test('factors 2', t => {
  t.is(primeFactors.for(2), [2])
})

test('factors 3', t => {
  t.is(primeFactors.for(3), [3])
})

test('factors 4', t => {
  t.is(primeFactors.for(4), [2, 2])
})

test('factors 6', t => {
  t.is(primeFactors.for(6), [2, 3])
})

test('factors 8', t => {
  t.is(primeFactors.for(8), [2, 2, 2])
})

test('factors 9', t => {
  t.is(primeFactors.for(9), [3, 3])
})

test('factors 27', t => {
  t.is(primeFactors.for(27), [3, 3, 3])
})

test('factors 625', t => {
  t.is(primeFactors.for(625), [5, 5, 5, 5])
})

test('factors 901255', t => {
  t.is(primeFactors.for(901255), [5, 17, 23, 461])
})

test('factors 93819012551', t => {
  t.is(primeFactors.for(93819012551), [11, 9539, 894119])
})
