var score = require('../../jssnips/game_puzzles/scrabble-score/scrabble-score');

test('Scrabble', function () {
	test('scores an empty word as zero', function () {
		expect(score('')).toEqual(0);
	});

	test('scores a null as zero', function () {
		expect(score(null)).toEqual(0);
	});

	test('scores a very short word', function () {
		expect(score('a')).toEqual(1);
	});

	test('scores the word by the number of letters', function () {
		expect(score('street')).toEqual(6);
	});

	test('scores more complicated words with more', function () {
		expect(score('quirky')).toEqual(22);
	});

	test('scores case insensitive words', function () {
		expect(score('OXYPHENBUTAZONE')).toEqual(41);
	});
});
