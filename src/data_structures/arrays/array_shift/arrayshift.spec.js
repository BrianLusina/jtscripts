var expect = require("expect");
var test = require("ava");
var ArrayShift = require('./arrayshift');

test('Test one', t => {
  var arrayOfArrays = [
    [1, 2, 3, 4, 5, 6],
    [7, 7, 7, 7, 7, -7]
  ];
  var expected = [8, 9, 10, 11, 12, -1];
  var arr = new ArrayShift();
  expect(arr.addingShifted(arrayOfArrays, 0)).toEqual(expected);
});

test('Test two', t => {
  var arrayOfArrays = [
    [1, 2, 3, 4, 5, 6],
    [7, 7, 7, 7, 7, 7]
  ];
  var expected = [1, 2, 3, 11, 12, 13, 7, 7, 7];
  var arr = new ArrayShift();
  expect(arr.addingShifted(arrayOfArrays, 3)).toEqual(expected);
});

test('Test three', t => {
  var arrayOfArrays = [
    [1, 2, 3, 4, 5, 6],
    [7, 7, 7, -7, 7, 7],
    [1, 1, 1, 1, 1, 1]
  ];
  var expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
  var arr = new ArrayShift();
  expect(arr.addingShifted(arrayOfArrays, 3)).toEqual(expected);
});
