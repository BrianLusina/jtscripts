const coinToss = require('./coin_toss.js')
const test = require('ava')
const expect = require('expect')

test('accepts number arguments only', t => {
  t.is(() => {
    throw coinToss('2')
  }).toThrow()
})

test('returns a number', t => {
  t.is(coinToss(2)).toBeTruthy()
})
