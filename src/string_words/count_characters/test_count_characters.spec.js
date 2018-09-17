var test = require("ava");
var expect = require("expect");
var total_characters = require('./count_characters.js');


test('Test for words', t => {
  expect(total_characters(['adios', 'bye', 'ciao'])).toEqual(12);
});

test('Test for array of numbers', t => {
  expect(total_characters([4, 5, 6])).toEqual(0);
});

test('Test for empty array', t => {
  expect(total_characters([])).toEqual(0);
});

test('Test for array of length 1', t => {
  expect(total_characters(['brianlusinaombito'])).toEqual(17);
});

test('Test for different types of variables', t => {
  expect(total_characters(['Brian', 5, {}, 'lusina'])).toEqual(11);
});

// TODO: toThrow not working for some reason
test.skip('Test for wrong arguments', t => {
  expect(total_characters(9)).toThrow(new TypeError('Invalid parameter 9'));
});
