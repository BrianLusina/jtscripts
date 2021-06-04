const test = require('ava')
const expect = require('chai').expect
const closedBracketWord = require('./closed-bracket-word')

test('It should works for basic tests.', t => {
  t.is(closedBracketWord('abiryz')).to.equal(true)
})

test('aibryz', t => {
  t.is(closedBracketWord('aibryz')).to.equal(false)
})

test('random word', t => {
  t.is(closedBracketWord('abitryz')).to.equal(false)
})

test('some random word', t => {
  t.is(closedBracketWord('zhuazfsa')).to.equal(true)
})

test('baby', t => {
  t.is(closedBracketWord('baby')).to.equal(false)
})

test('grit', t => {
  t.is(closedBracketWord('grit')).to.equal(true)
})

test('Foul', t => {
  t.is(closedBracketWord('foul')).to.equal(false)
})
