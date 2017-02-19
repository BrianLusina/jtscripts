var shiftedDiff = require('../../jssnips/string_words/string_rotation/str_rotation.js');

describe('Shifted diff', function () {
	it('test 1', function () {
		expect(shiftedDiff('eecoff', 'coffee')).toEqual(4);
	});

	it('test 2', function () {
		expect(shiftedDiff('Moose', 'moose')).toEqual(-1);
	});

	it('test 3', function () {
		expect(shiftedDiff('isn\'t', '\'tisn')).toEqual(2);
	});

	it('test 4', function () {
		expect(shiftedDiff('Esham', 'Esham')).toEqual(0);
	});

	it('test 5', function () {
		expect(shiftedDiff(' ', ' ')).toEqual(0);
	});

	it('test 6', function () {
		expect(shiftedDiff('hoop', 'pooh')).toEqual(-1);
	});

	it('test 7', function () {
		expect(shiftedDiff('  ', ' ')).toEqual(-1);
	});
});

