var TitleCase = require('../../src/string_words/title_case/titlecase');

test('Title Case Test suite', function () {
	test('Test 1', function () {
		var title = new TitleCase();
		expect(title.titleCase('a clash of KINGS', 'a an the of')).toEqual('A Clash of Kings');
	});

	test('Test 2', function () {
		var title = new TitleCase();
		expect(title.titleCase('THE WIND IN THE WILLOWS', 'The In')).toEqual('The Wind in the Willows');
	});

	test('Test 3', function () {
		var title = new TitleCase();
		expect(title.titleCase('the quick brown fox')).toEqual('The Quick Brown Fox');
	});
});
