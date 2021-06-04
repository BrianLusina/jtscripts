const ConsecutiveString = require('./consecutivestring')

test('Test 1', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toEqual('abigailtheta')
})

test('Test 2', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1)).toEqual('oocccffuucccjjjkkkjyyyeehh')
})

test('Test 3', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec([], 3)).toEqual('')
})

test('Test 4', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2)).toEqual('wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck')
})

test('Test 5', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)).toEqual('wlwsasphmxxowiaxujylentrklctozmymu')
})

test('Test 6', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)).toEqual('')
})

test('Test 7', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toEqual('ixoyx3452zzzzzzzzzzzz')
})

test('Test 8', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)).toEqual('')
})

test('Test 9', function () {
  const longCon = new ConsecutiveString()
  expect(longCon.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)).toEqual('')
})
