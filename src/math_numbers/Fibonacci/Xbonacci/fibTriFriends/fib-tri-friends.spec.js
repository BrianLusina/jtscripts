var test = require("ava");
var expect = require("expect")
var Xbonacci = require('./fibTriFriends');

test('Test for 2 elements', t => {
  expect(Xbonacci([0, 1], 10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Test for 2 elements, 1, 1', t => {
  expect(Xbonacci([1, 1], 10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

test('Test for signature of 5', t => {
  expect(Xbonacci([0, 0, 0, 0, 1], 10)).toEqual([0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
});

test('Test for signature of 7', t => {
  expect(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10)).toEqual([1, 0, 0, 0, 0, 0, 1, 2, 3, 6]);
});
