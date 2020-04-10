var test = require("ava");
var expect = require("expect");
var HashTag = require('./hashtag');


test('Test 1', t => {
  var hash = new HashTag();
  t.is(hash.generateHashtag('Hello there thanks for trying my Kata'),'#HelloThereThanksForTryingMyKata');
});

test('Test 2', t => {
  var hash = new HashTag();
  t.is(hash.generateHashtag('Hello World'),'#HelloWorld');
});
