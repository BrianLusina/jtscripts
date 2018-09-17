var test = require("ava");
var expect = require("expect");
var PerfectNumbers = require('./perfect-numbers');


var perfectNumbers;

test.before(t => {
  perfectNumbers = new PerfectNumbers();
});


test('Smallest perfect number is classified correctly', t => {
  expect(perfectNumbers.classify(6)).toEqual('perfect');
});

test('Medium perfect number is classified correctly', t => {
  expect(perfectNumbers.classify(28)).toEqual('perfect');
});

test('Large perfect number is classified correctly', t => {
  expect(perfectNumbers.classify(33550336)).toEqual('perfect');
});


test('Smallest abundant number is classified correctly', t => {
  expect(perfectNumbers.classify(12)).toEqual('abundant');
});

test('Medium abundant number is classified correctly', t => {
  expect(perfectNumbers.classify(30)).toEqual('abundant');
});

test('Large abundant number is classified correctly', t => {
  expect(perfectNumbers.classify(33550335)).toEqual('abundant');
});

test('Smallest prime deficient number is classified correctly', t => {
  expect(perfectNumbers.classify(2)).toEqual('deficient');
});

test('Smallest non-prime deficient number is classified correctly', t => {
  expect(perfectNumbers.classify(4)).toEqual('deficient');
});

test('Medium deficient number is classified correctly', t => {
  expect(perfectNumbers.classify(32)).toEqual('deficient');
});

test('Large deficient number is classified correctly', t => {
  expect(perfectNumbers.classify(33550337)).toEqual('deficient');
});

test('Edge case (no factors other than itself) is classified correctly', t => {
  expect(perfectNumbers.classify(1)).toEqual('deficient');
});

test('Zero is rejected (not a natural number)', t => {
  expect(perfectNumbers.classify(0)).toEqual('Classification is only possible for natural numbers.');
});

test('Negative integer is rejected (not a natural number)', t => {
  expect(perfectNumbers.classify(-1)).toEqual('Classification is only possible for natural numbers.');
});
