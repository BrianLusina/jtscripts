var DuplicateEncode = require('../../jssnips/string_words/duplicate_encode/duplicateencode');

test('Duplicate Encode Test Suite', function () {
	test('Test 1', function () {
		var dup = new DuplicateEncode();
		expect(dup.duplicateencode('din')).toEqual('(((');
	});

	test('Test 2', function () {
		var dup = new DuplicateEncode();
		expect(dup.duplicateencode('recede')).toEqual('()()()');
	});

	test('should ignore case', function () {
		var dup = new DuplicateEncode();
		expect(dup.duplicateencode('Success')).toEqual(')())())');
	});

	test('Test 4', function () {
		var dup = new DuplicateEncode();
		expect(dup.duplicateencode('(( @")')).toEqual('))((((');
	});
});
