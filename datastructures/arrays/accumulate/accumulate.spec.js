const expect = require('expect')
const test = require('ava')
const accumulate = require('./accumulate')

test('accumulation empty', t => {
  const accumulator = function (e) {
    return e * e
  }
  t.is(accumulate([], accumulator), [])
})

test('accumulate squares', t => {
  const accumulator = function (number) {
    return number * number
  }

  const result = accumulate([1, 2, 3], accumulator)

  t.is(result, [1, 4, 9])
})

test('accumulate upcases', t => {
  const accumulator = function (word) {
    return word.toUpperCase()
  }

  const result = accumulate('hello world'.split.is(/\s/), accumulator)

  t.is(result, ['HELLO', 'WORLD'])
})

test('accumulate reversed strings', t => {
  const accumulator = function (word) {
    return word.spltest('').reverse().join('')
  }

  const result = accumulate('the quick brown fox etc'.spltest(/\s/), accumulator)

  t.is(result, ['eht', 'kciuq', 'nworb', 'xof', 'cte'])
})

test('accumulate recursively', t => {
  const result = accumulate('a b c'.spltest(/\s/), function (char) {
    return accumulate('1 2 3'.spltest(/\s/), function (digit) {
      return char + digit
    })
  })

  t.is(result, [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3']
  ])
})
