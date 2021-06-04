const HashTag = require('./hashtag')

test('Test 1', () => {
  const hash = new HashTag()
  expect(hash.generateHashtag('Hello there thanks for trying my Kata')).toEqual('#HelloThereThanksForTryingMyKata')
})

test('Test 2', () => {
  const hash = new HashTag()
  expect(hash.generateHashtag('Hello World')).toEqual('#HelloWorld')
})
