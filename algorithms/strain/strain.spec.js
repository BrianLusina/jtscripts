const strain = require('./strain')

test('keeps on empty array returns empty array', function () {
  expect(strain.keep([], function (e) {
    return e < 10
  })).toEqual([])
})

test('keeps everything ', function () {
  expect(strain.keep([1, 2, 3], function (e) {
    return e < 10
  })).toEqual([1, 2, 3])
})

test('keeps first and last', function () {
  expect(strain.keep([1, 2, 3], function (e) {
    return (e % 2) === 1
  })).toEqual([1, 3])
})

test('keeps neither first nor last', function () {
  expect(strain.keep([1, 2, 3, 4, 5], function (e) {
    return (e % 2) === 0
  })).toEqual([2, 4])
})

test('keeps strings', function () {
  const words = 'apple zebra banana zombies cherimoya zelot'.split(' ')
  const result = strain.keep(words, function (word) {
    return word.indexOf('z') === 0
  })
  expect(result).toEqual('zebra zombies zelot'.split(' '))
})

test('keeps arrays', function () {
  const rows = [
    [1, 2, 3],
    [5, 5, 5],
    [5, 1, 2],
    [2, 1, 2],
    [1, 5, 2],
    [2, 2, 1],
    [1, 2, 5]
  ]
  const result = strain.keep(rows, function (row) {
    return row.indexOf(5) > -1
  })
  expect(result).toEqual([
    [5, 5, 5],
    [5, 1, 2],
    [1, 5, 2],
    [1, 2, 5]
  ])
})

test('empty discard', function () {
  expect(strain.discard([], function (e) {
    return e < 10
  })).toEqual([])
})

test('discards nothing', function () {
  expect(strain.discard([1, 2, 3], function (e) {
    return e > 10
  })).toEqual([1, 2, 3])
})

test('discards first and last', function () {
  expect(strain.discard([1, 2, 3], function (e) {
    return e % 2 === 1
  })).toEqual([2])
})

test('discards neither first nor last', function () {
  const result = strain.discard([1, 2, 3, 4, 5], function (e) {
    return e % 2 === 0
  })
  expect(result).toEqual([1, 3, 5])
})

test('discards strings', function () {
  const words = 'apple zebra banana zombies cherimoya zelot'.split(' ')
  const result = strain.discard(words, function (word) {
    return word.indexOf('z') === 0
  })
  expect(result).toEqual('apple banana cherimoya'.split(' '))
})

test('discards arrays', function () {
  const rows = [
    [1, 2, 3],
    [5, 5, 5],
    [5, 1, 2],
    [2, 1, 2],
    [1, 5, 2],
    [2, 2, 1],
    [1, 2, 5]
  ]
  const result = strain.discard(rows, function (row) {
    return row.indexOf(5) > -1
  })
  expect(result).toEqual([
    [1, 2, 3],
    [2, 1, 2],
    [2, 2, 1]
  ])
})
