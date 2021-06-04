const pattern = require('./completepattern')

test('Test 1', () => {
  expect(pattern(1)).toEqual('1')
})

test('Test 2', () => {
  expect(pattern(2)).toEqual('21\n2')
})

test('Test 3', () => {
  expect(pattern(5)).toEqual('54321\n5432\n543\n54\n5')
})
