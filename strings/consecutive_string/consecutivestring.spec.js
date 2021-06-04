const test = require('ava')
const expect = require('expect')
const ConsecutiveString = require('./consecutivestring')

test('Test 1', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta')
})

test('Test 2', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1), 'oocccffuucccjjjkkkjyyyeehh')
})

test('Test 3', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec([], 3), '')
})

test('Test 4', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2), 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck')
})

test('Test 5', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2), 'wlwsasphmxxowiaxujylentrklctozmymu')
})

test('Test 6', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '')
})

test('Test 7', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3), 'ixoyx3452zzzzzzzzzzzz')
})

test('Test 8', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '')
})

test('Test 9', function () {
  const longCon = new ConsecutiveString()
  t.is(longCon.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '')
})
