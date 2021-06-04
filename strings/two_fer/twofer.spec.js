const test = require('ava')
const expect = require('expect')
const TwoFer = require('./two-fer')

const twoFer = new TwoFer()

test('gives one to you if no parameter given', t => {
  t.is(twoFer.twoFer(), 'One for you, one for me.')
})

test('gives one to Alice if \'Alice\' is given', t => {
  t.is(twoFer.twoFer('Alice'), 'One for Alice, one for me.')
})

test('gives one to Bob if \'Bob\' is given', t => {
  t.is(twoFer.twoFer('Bob'), 'One for Bob, one for me.')
})
