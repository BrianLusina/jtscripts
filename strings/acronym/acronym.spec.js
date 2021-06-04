const test = require('ava')
const expect = require('expect')
const Acronyms = require('./acronym.js')

test('title cased phrases', t => {
  t.is(Acronyms.parse('Portable Network Graphics'), 'PNG')
})

test('other title cased phrases', t => {
  t.is(Acronyms.parse('Ruby on Rails'), 'ROR')
})

test('inconsistently cased phrases', t => {
  t.is(Acronyms.parse('HyperText Markup Language'), 'HTML')
})

test('phrases with punctuation', t => {
  t.is(Acronyms.parse('First In, First Out'), 'FIFO')
})

test('other phrases with punctuation', t => {
  t.is(Acronyms.parse('PHP: Hypertext Preprocessor'), 'PHP')
})

test('phrases with punctuation and sentence casing', t => {
  t.is(Acronyms.parse('Complementary metal-oxide semiconductor'), 'CMOS')
})
