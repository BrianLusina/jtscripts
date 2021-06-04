const test = require('ava')
const expect = require('expect')
const Squares = require('./difference-of-squares')

test('up to 5', t => {
  const squares = new Squares(5)

  test('gets the square of sums', t => {
    t.is(squares.squareOfSums).toBe(225)
  })

  test('gets the sum of squares', t => {
    t.is(squares.sumOfSquares).toBe(55)
  })

  test('gets the difference', t => {
    t.is(squares.difference).toBe(170)
  })
})

test('up to 10', t => {
  const squares = new Squares(10)

  test('gets the square of sums', t => {
    t.is(squares.squareOfSums).toBe(3025)
  })

  test('gets the sum of squares', t => {
    t.is(squares.sumOfSquares).toBe(385)
  })

  test('gets the difference', t => {
    t.is(squares.difference).toBe(2640)
  })
})

test('up to 100', t => {
  const squares = new Squares(100)

  test('gets the square of sums', t => {
    t.is(squares.squareOfSums).toBe(25502500)
  })

  test('gets the sum of squares', t => {
    t.is(squares.sumOfSquares).toBe(338350)
  })

  test('gets the difference', t => {
    t.is(squares.difference).toBe(25164150)
  })
})
