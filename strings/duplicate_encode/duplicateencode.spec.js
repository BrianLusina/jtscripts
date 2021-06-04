const DuplicateEncode = require('./duplicateencode')

test('Test 1', () => {
  const dup = new DuplicateEncode()
  expect(dup.duplicateencode('din')).toEqual('(((')
})

test('Test 2', () => {
  const dup = new DuplicateEncode()
  expect(dup.duplicateencode('recede')).toEqual('()()()')
})

test('should ignore case', () => {
  const dup = new DuplicateEncode()
  expect(dup.duplicateencode('Success')).toEqual(')())())')
})

test('Test 4', () => {
  const dup = new DuplicateEncode()
  expect(dup.duplicateencode('(( @")')).toEqual('))((((')
})
