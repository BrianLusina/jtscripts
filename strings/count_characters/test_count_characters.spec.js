const test = require('ava')
const expect = require('expect')
const total_characters = require('./count_characters.js')

test('Test for words', t => {
  t.is(total_characters(['adios', 'bye', 'ciao']), 12)
})

test('Test for array of numbers', t => {
  t.is(total_characters([4, 5, 6]), 0)
})

test('Test for empty array', t => {
  t.is(total_characters([]), 0)
})

test('Test for array of length 1', t => {
  t.is(total_characters(['brianlusinaombito']), 17)
})

test('Test for different types of variables', t => {
  t.is(total_characters(['Brian', 5, {}, 'lusina']), 11)
})

// TODO: toThrow not working for some reason
test.skip('Test for wrong arguments', t => {
  t.is(total_characters(9)).toThrow(new TypeError('Invalid parameter 9'))
})
