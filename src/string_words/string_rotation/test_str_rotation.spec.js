var test = require("ava");
var expect = require("expect");
var shiftedDiff = require('./str_rotation.js');

test('test 1', t => {
  t.is(shiftedDiff('eecoff', 'coffee'),4);
});

test('test 2', t => {
  t.is(shiftedDiff('Moose', 'moose'),-1);
});

test('test 3', t => {
  t.is(shiftedDiff('isn\'t', '\'tisn'),2);
});

test('test 4', t => {
  t.is(shiftedDiff('Esham', 'Esham'),0);
});

test('test 5', t => {
  t.is(shiftedDiff(' ', ' '),0);
});

test('test 6', t => {
  t.is(shiftedDiff('hoop', 'pooh'),-1);
});

test('test 7', t => {
  t.is(shiftedDiff('  ', ' '),-1);
});
