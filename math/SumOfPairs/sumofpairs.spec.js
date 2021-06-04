const test = require('ava')
const expect = require('expect')
const sum_pairs = require('./sumofpairs.js')

const l1 = [1, 4, 8, 7, 3, 15]
const l2 = [1, -2, 3, 0, -6, 1]
const l3 = [20, -13, 40]
const l4 = [1, 2, 3, 4, 1, 0]
const l5 = [10, 5, 2, 3, 7, 5]
const l6 = [4, -2, 3, 3, 4]
const l7 = [0, 2, 0]
const l8 = [5, 9, 13, -3]

test('Basic: [' + l1 + '] should return [1, 7] for sum = 8', t => {
  t.is(sum_pairs(l1, 8), [1, 7])
})

test.skip('Negatives: [' + l2 + '] should return [0, -6] for sum = -6', t => {
  t.is(sum_pairs(l2, -6), [0, -6])
})

test.skip('No Match: [' + l3 + '] should return undefined for sum = -7', t => {
  t.is(sum_pairs(l3, -7), undefined)
})

test.skip('First Match From Left: [' + l4 + '] should return [1, 1] for sum = 2 ', t => {
  t.is(sum_pairs(l4, 2), [1, 1])
})

test.skip('First Match From Left REDUX!: [' + l5 + '] should return [3, 7] for sum = 10 ', t => {
  t.is(sum_pairs(l5, 10), [3, 7])
})

test.skip('Duplicates: [' + l6 + '] should return [4, 4] for sum = 8', t => {
  t.is(sum_pairs(l6, 8), [4, 4])
})

test.skip('Zeroes: [' + l7 + '] should return [0, 0] for sum = 0', t => {
  t.is(sum_pairs(l7, 0), [0, 0])
})

test.skip('Subtraction: [' + l8 + '] should return [13, -3] for sum = 10', t => {
  t.is(sum_pairs(l8, 10), [13, -3])
})
