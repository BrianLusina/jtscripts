var test = require("ava");
var expect = require("expect");
var HashTag = require('./hashtag');


test('Test 1', t => {
  var hash = new HashTag();
  expect(hash.generateHashtag('Hello there thanks for trying my Kata')).toEqual('#HelloThereThanksForTryingMyKata');
});

test('Test 2', t => {
  var hash = new HashTag();
  expect(hash.generateHashtag('Hello World')).toEqual('#HelloWorld');
});
