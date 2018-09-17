var ChromosomeCheck = require('../../src/string_words/chromosome_checker/chromosomeCheck');

test('Chromosome Test Suite', function () {
	test('Son', function () {
		var chromosome = new ChromosomeCheck('XY');

		expect(chromosome.chromosomeCheck('XY')).toEqual('Congratulations! You\'re going to have a son.');
	});

	test('Daughter', function () {
		var chromosome = new ChromosomeCheck('XX');

		expect(chromosome.chromosomeCheck('XX')).toEqual('Congratulations! You\'re going to have a daughter.');
	});
});
