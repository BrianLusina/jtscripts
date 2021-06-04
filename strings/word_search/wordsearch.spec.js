const WordSearch = require('./wordsearch')

test('Test 1', () => {
  const ws = new WordSearch()
  expect(ws.wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc'])).toEqual(['ab', 'abc', 'zab'])
})

test('Test 2', () => {
  const ws = new WordSearch()
  expect(ws.wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc'])).toEqual(['ab', 'abc', 'zab'])
})

test('Test 3', () => {
  const ws = new WordSearch()
  expect(ws.wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc'])).toEqual(['aB', 'Abc', 'zAB'])
})

test('Test 4', () => {
  const ws = new WordSearch()
  expect(ws.wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc'])).toEqual(['Empty'])
})
