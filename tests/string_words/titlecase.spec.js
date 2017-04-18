var TitleCase = require('../../jssnips/string_words/title_case/titlecase');

describe('Title Case Test suite', function () {
	it('Test 1', function () {
		var title = new TitleCase();
		expect(title.titleCase('a clash of KINGS', 'a an the of')).toEqual('A Clash of Kings');
	});

	it('Test 2', function () {
		var title = new TitleCase();
		expect(title.titleCase('THE WIND IN THE WILLOWS', 'The In')).toEqual('The Wind in the Willows');
	});

	it('Test 3', function () {
		var title = new TitleCase();
		expect(title.titleCase('the quick brown fox')).toEqual('The Quick Brown Fox');
	});
});
