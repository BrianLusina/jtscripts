var shiftedDiff = require('../../src/string_words/string_rotation/str_rotation.js');

test('Shifted diff', function () {
	test('test 1', function () {
		expect(shiftedDiff('eecoff', 'coffee')).toEqual(4);
	});

	test('test 2', function () {
		expect(shiftedDiff('Moose', 'moose')).toEqual(-1);
	});

	test('test 3', function () {
		expect(shiftedDiff('isn\'t', '\'tisn')).toEqual(2);
	});

	test('test 4', function () {
		expect(shiftedDiff('Esham', 'Esham')).toEqual(0);
	});

	test('test 5', function () {
		expect(shiftedDiff(' ', ' ')).toEqual(0);
	});

	test('test 6', function () {
		expect(shiftedDiff('hoop', 'pooh')).toEqual(-1);
	});

	test('test 7', function () {
		expect(shiftedDiff('  ', ' ')).toEqual(-1);
	});
});

