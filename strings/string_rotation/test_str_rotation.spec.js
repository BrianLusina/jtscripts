const shiftedDiff = require('./str_rotation.js')

test('test 1', () => {
  expect(shiftedDiff('eecoff', 'coffee')).toEqual(4)
})

test('test 2', () => {
  expect(shiftedDiff('Moose', 'moose')).toEqual(-1)
})

test('test 3', () => {
  expect(shiftedDiff('isn\'t', '\'tisn')).toEqual(2)
})

test('test 4', () => {
  expect(shiftedDiff('Esham', 'Esham')).toEqual(0)
})

test('test 5', () => {
  expect(shiftedDiff(' ', ' ')).toEqual(0)
})

test('test 6', () => {
  expect(shiftedDiff('hoop', 'pooh')).toEqual(-1)
})

test('test 7', () => {
  expect(shiftedDiff('  ', ' ')).toEqual(-1)
})
