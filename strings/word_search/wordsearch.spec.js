const test = require('ava')
const expect = require('expect')
const WordSearch = require('./wordsearch')

test('Test 1', t => {
  const ws = new WordSearch()
  t.is(ws.wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc']), ['ab', 'abc', 'zab'])
})

test('Test 2', t => {
  const ws = new WordSearch()
  t.is(ws.wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc']), ['ab', 'abc', 'zab'])
})

test('Test 3', t => {
  const ws = new WordSearch()
  t.is(ws.wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc']), ['aB', 'Abc', 'zAB'])
})

test('Test 4', t => {
  const ws = new WordSearch()
  t.is(ws.wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']), ['Empty'])
})
