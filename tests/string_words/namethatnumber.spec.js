var NameNumber = require('../../jssnips/string_words/name_that_number/namethatnumber');

test('Name That Number tests', function () {
	test('test 1, Zero', function () {
		var name = new NameNumber();
		expect(name.nameThatNumber(0)).toEqual('zero');
	});

	test('test 2, Four', function () {
		var name = new NameNumber();
		expect(name.nameThatNumber(4)).toEqual('four');
	});

	test('test 3, Nine', function () {
		var name = new NameNumber();
		expect(name.nameThatNumber(9)).toEqual('nine');
	});

	test('test 23', function () {
		var name = new NameNumber();
		expect(name.nameThatNumber(23)).toEqual('twenty three');
	});

	test('test 40', function () {
		var name = new NameNumber();
		expect(name.nameThatNumber(40)).toEqual('forty');
	});
});
