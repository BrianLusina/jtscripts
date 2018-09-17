var test = require("ava");
var expect = require("expect");
const Triplet = require('./pythagorean');


test('calculates the sum', t => {
  expect(new Triplet(3, 4, 5).sum()).toBe(12);
});

test('calculates the product', t => {
  expect(new Triplet(3, 4, 5).product()).toBe(60);
});

test('can recognize a pythagorean triplet', t => {
  expect(new Triplet(3, 4, 5).isPythagorean()).toBe(true);
});

test('can recognize a non pythagorean triplet', t => {
  expect(new Triplet(5, 6, 7).isPythagorean()).toBe(false);
});

test('can make triplets up to 10', t => {
  var triplets = Triplet.where({
    maxFactor: 10
  });
  var products = triplets.sort().map(function (triplet) {
    return triplet.product();
  });
  expect(products).toEqual([60, 480]);
});

test('can make triplets 11 through 20', t => {
  var triplets = Triplet.where({
    minFactor: 11,
    maxFactor: 20
  });
  var products = triplets.sort().map(function (triplet) {
    return triplet.product();
  });
  expect(products).toEqual([3840]);
});

test('can filter on sum', t => {
  var triplets = Triplet.where({
    sum: 180,
    maxFactor: 100
  });
  var products = triplets.sort().map(function (triplet) {
    return triplet.product();
  });
  expect(products).toEqual([118080, 168480, 202500]);
});
