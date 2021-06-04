const Pattern = require('./pattern')

test('Test 1', () => {
  const pattern = new Pattern()
  expect(pattern.getPattern(1)).toEqual('1')
})

test('Test 2', () => {
  const pattern = new Pattern()
  expect(pattern.getPattern(2)).toEqual('1\n22')
})

test('Test 3', () => {
  const pattern = new Pattern()
  expect(pattern.getPattern(5)).toEqual('1\n22\n333\n4444\n55555')
})
