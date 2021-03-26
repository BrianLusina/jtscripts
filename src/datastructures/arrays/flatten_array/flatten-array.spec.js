var expect = require("expect");
var test = require("ava");
var Flattener = require("./flatten-array.js");

var flattener = new Flattener();
test('flattens a nested list', t => {
  t.is(flattener.flatten([
    []
  ]),[]);
});
test('flattens a 2 level nested list', t => {
  t.is(flattener.flatten([1, [2, 3, 4], 5]),[1, 2, 3, 4, 5]);
});
test('flattens a  3 level nested list', t => {
  t.is(flattener.flatten([1, [2, 3, 4], 5, [6, [7, 8]]]),[1, 2, 3, 4, 5, 6, 7, 8]);
});
test('flattens a 5 level nested list', t => {
  t.is(flattener.flatten([0, 2, [
    [2, 3], 8, 100, 4, [
      [
        [50]
      ]
    ]
  ], -2]),[0, 2, 2, 3, 8, 100, 4, 50, -2]);
});
test('flattens a 6 level nest list', t => {
  t.is(flattener.flatten([1, [2, [
      [3]
    ],
    [4, [
      [5]
    ]], 6, 7
  ], 8]),[1, 2, 3, 4, 5, 6, 7, 8]);
});
test('flattens a 6 level nest list with null values', t => {
  t.is(flattener.flatten([0, 2, [
    [2, 3], 8, [
      [100]
    ], null, [
      [null]
    ]
  ], -2]),[0, 2, 2, 3, 8, 100, -2]);
});
test('returns an empty list if all values in nested list are null', t => {
  t.is(flattener.flatten([null, [
    [
      [null]
    ]
  ], null, null, [
    [null, null], null
  ], null]),[]);
});
