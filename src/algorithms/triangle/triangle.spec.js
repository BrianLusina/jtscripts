var Triangle = require('./triangle.js');
const test = require("ava");
const expect = require("expect");

test('equilateral triangles have equal sides', t => {
  var triangle = new Triangle(2, 2, 2);
  t.is(triangle.kind(),'equilateral');
});

test('larger equilateral triangles also have equal sides', t => {
  var triangle = new Triangle(10, 10, 10);
  t.is(triangle.kind(),'equilateral');
});

test('isosceles triangles have last two sides equal', t => {
  var triangle = new Triangle(3, 4, 4);
  t.is(triangle.kind(),'isosceles');
});

test('isosceles triangles have first two sides equal', t => {
  var triangle = new Triangle(2, 2, 3);
  t.is(triangle.kind(),'isosceles');
});

test('isosceles trianges have first and last sides equal', t => {
  var triangle = new Triangle(4, 3, 4);
  t.is(triangle.kind(),'isosceles');
});

test('isosceles triangles have two first sides equal', t => {
  var triangle = new Triangle(4, 4, 3);
  t.is(triangle.kind(),'isosceles');
});

test('isosceles triangles have in fact exactly two sides equal', t => {
  var triangle = new Triangle(10, 10, 2);
  t.is(triangle.kind(),'isosceles');
});

test('scalene triangles have no equal sides', t => {
  var triangle = new Triangle(3, 4, 5);
  t.is(triangle.kind(),'scalene');
});

test('scalene triangles have no equal sides at a larger scale too', t => {
  var triangle = new Triangle(10, 11, 12);
  t.is(triangle.kind(),'scalene');
});

test('scalene triangles have no equal sides in descending order either', t => {
  var triangle = new Triangle(5, 4, 2);
  t.is(triangle.kind(),'scalene');
});

test('very small triangles are legal', t => {
  var triangle = new Triangle(0.4, 0.6, 0.3);
  t.is(triangle.kind(),'scalene');
});

test('test triangles with no size are illegal', t => {
  var triangle = new Triangle(0, 0, 0);
  t.is(triangle.kind.bind(triangle)).toThrow();
});

test('triangles with negative sides are illegal', t => {
  var triangle = new Triangle(3, 4, -5);
  t.is(triangle.kind.bind(triangle)).toThrow();
});

test('triangles violating triangle inequality are illegal', t => {
  var triangle = new Triangle(1, 1, 3);
  t.is(triangle.kind.bind(triangle)).toThrow();
});

test('triangles violating triangle inequality are illegal 2', t => {
  var triangle = new Triangle(7, 3, 2);
  t.is(triangle.kind.bind(triangle)).toThrow();
});

test('triangles violating triangle inequality are illegal 3', t => {
  var triangle = new Triangle(10, 1, 3);
  t.is(triangle.kind.bind(triangle)).toThrow();
});
