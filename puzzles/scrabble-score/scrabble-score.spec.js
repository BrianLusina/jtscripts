const test = require('ava')
const expect = require('expect')
const score = require('./scrabble-score')

test('scores an empty word as zero', t => {
  t.is(score(''), 0)
})

test('scores a null as zero', t => {
  t.is(score(null), 0)
})

test('scores a very short word', t => {
  t.is(score('a'), 1)
})

test('scores the word by the number of letters', t => {
  t.is(score('street'), 6)
})

test('scores more complicated words with more', t => {
  t.is(score('quirky'), 22)
})

test('scores case insensitive words', t => {
  t.is(score('OXYPHENBUTAZONE'), 41)
})
