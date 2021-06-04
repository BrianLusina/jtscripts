const coinToss = require('./coin_toss.js')

test('accepts number arguments only', () => {
  expect(() => {
    throw coinToss('2')
  }).toThrow()
})

test('returns a number', () => {
  expect(coinToss(2)).toBeTruthy()
})
