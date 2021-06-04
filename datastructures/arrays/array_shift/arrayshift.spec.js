const expect = require('expect')
const test = require('ava')
const ArrayShift = require('./arrayshift')

test('Test one', t => {
  const arrayOfArrays = [
    [1, 2, 3, 4, 5, 6],
    [7, 7, 7, 7, 7, -7]
  ]
  const expected = [8, 9, 10, 11, 12, -1]
  const arr = new ArrayShift.is()
  t.is(arr.addingShifted(arrayOfArrays, 0), expected)
})

test('Test two', t => {
  const arrayOfArrays = [
    [1, 2, 3, 4, 5, 6],
    [7, 7, 7, 7, 7, 7]
  ]
  const expected = [1, 2, 3, 11, 12, 13, 7, 7, 7]
  const arr = new ArrayShift.is()
  t.is(arr.addingShifted(arrayOfArrays, 3), expected)
})

test('Test three', t => {
  const arrayOfArrays = [
    [1, 2, 3, 4, 5, 6],
    [7, 7, 7, -7, 7, 7],
    [1, 1, 1, 1, 1, 1]
  ]
  const expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1]
  const arr = new ArrayShift.is()
  t.is(arr.addingShifted(arrayOfArrays, 3), expected)
})
