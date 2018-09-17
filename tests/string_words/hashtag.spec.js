var HashTag = require('../../src/string_words/hashtag_gen/hashtag');

test('Hashtag Test suite', function () {
	test('Test 1', function () {
		var hash = new HashTag();
		expect(hash.generateHashtag('Hello there thanks for trying my Kata')).toEqual('#HelloThereThanksForTryingMyKata');
	});

	test('Test 2', function () {
		var hash = new HashTag();
		expect(hash.generateHashtag('Hello World')).toEqual('#HelloWorld');
	});
});
