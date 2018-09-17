var test = require("ava");
var expect = require("expect");
var shiftedDiff = require('./str_rotation.js');

test('test 1', t => {
  expect(shiftedDiff('eecoff', 'coffee')).toEqual(4);
});

test('test 2', t => {
  expect(shiftedDiff('Moose', 'moose')).toEqual(-1);
});

test('test 3', t => {
  expect(shiftedDiff('isn\'t', '\'tisn')).toEqual(2);
});

test('test 4', t => {
  expect(shiftedDiff('Esham', 'Esham')).toEqual(0);
});

test('test 5', t => {
  expect(shiftedDiff(' ', ' ')).toEqual(0);
});

test('test 6', t => {
  expect(shiftedDiff('hoop', 'pooh')).toEqual(-1);
});

test('test 7', t => {
  expect(shiftedDiff('  ', ' ')).toEqual(-1);
});
