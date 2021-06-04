const expect = require('chai').expect
const closedBracketWord = require('./closed-bracket-word')

test('It should works for basic tests.', () => {
  expect(closedBracketWord('abiryz')).to.equal(true)
})

test('aibryz', () => {
  expect(closedBracketWord('aibryz')).to.equal(false)
})

test('random word', () => {
  expect(closedBracketWord('abitryz')).to.equal(false)
})

test('some random word', () => {
  expect(closedBracketWord('zhuazfsa')).to.equal(true)
})

test('baby', () => {
  expect(closedBracketWord('baby')).to.equal(false)
})

test('grit', () => {
  expect(closedBracketWord('grit')).to.equal(true)
})

test('Foul', () => {
  expect(closedBracketWord('foul')).to.equal(false)
})
