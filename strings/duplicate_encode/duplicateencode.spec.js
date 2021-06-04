const test = require('ava')
const expect = require('expect')
const DuplicateEncode = require('./duplicateencode')

test('Test 1', t => {
  const dup = new DuplicateEncode()
  t.is(dup.duplicateencode('din'), '(((')
})

test('Test 2', t => {
  const dup = new DuplicateEncode()
  t.is(dup.duplicateencode('recede'), '()()()')
})

test('should ignore case', t => {
  const dup = new DuplicateEncode()
  t.is(dup.duplicateencode('Success'), ')())())')
})

test('Test 4', t => {
  const dup = new DuplicateEncode()
  t.is(dup.duplicateencode('(( @")'), '))((((')
})
