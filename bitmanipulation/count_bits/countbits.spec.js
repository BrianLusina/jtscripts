const CountBits = require('./countbits')

test('Test One', () => {
  const count = new CountBits()

  expect(count.countBits(0)).toEqual(0)
})

test('Test Two', () => {
  const count = new CountBits()
  expect(count.countBits(4)).toEqual(1)
})

test('Test Three', () => {
  const count = new CountBits()
  expect(count.countBits(7)).toEqual(3)
})

test('Test Four', () => {
  const count = new CountBits()
  expect(count.countBits(9)).toEqual(2)
})

test('Test Five', () => {
  const count = new CountBits()
  expect(count.countBits(10)).toEqual(2)
})
