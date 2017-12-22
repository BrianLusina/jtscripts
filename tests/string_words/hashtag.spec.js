var HashTag = require('../../jssnips/string_words/hashtag_gen/hashtag');

describe('Hashtag Test suite', function () {
	it('Test 1', function () {
		var hash = new HashTag();
		expect(hash.generateHashtag('Hello there thanks for trying my Kata')).toEqual('#HelloThereThanksForTryingMyKata');
	});

	it('Test 2', function () {
		var hash = new HashTag();
		expect(hash.generateHashtag('Hello World')).toEqual('#HelloWorld');
	});
});
