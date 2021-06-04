const test = require('ava')
const expect = require('expect')
const HashTag = require('./hashtag')

test('Test 1', t => {
  const hash = new HashTag()
  t.is(hash.generateHashtag('Hello there thanks for trying my Kata'), '#HelloThereThanksForTryingMyKata')
})

test('Test 2', t => {
  const hash = new HashTag()
  t.is(hash.generateHashtag('Hello World'), '#HelloWorld')
})
