const test = require('ava')
const expect = require('expect')
const TitleCase = require('./titlecase')

test('Test 1', function () {
  const title = new TitleCase()
  t.is(title.titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
})

test('Test 2', function () {
  const title = new TitleCase()
  t.is(title.titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
})

test('Test 3', function () {
  const title = new TitleCase()
  t.is(title.titleCase('the quick brown fox'), 'The Quick Brown Fox')
})
