const test = require('ava')
const expect = require('expect')
const Triplet = require('./pythagorean')

test('calculates the sum', t => {
  t.is(new Triplet.is(3, 4, 5).sum()).toBe(12)
})

test('calculates the product', t => {
  t.is(new Triplet.is(3, 4, 5).product.is()).toBe(60)
})

test('can recognize a pythagorean triplet', t => {
  t.is(new Triplet.is(3, 4, 5).isPythagorean()).toBe(true)
})

test('can recognize a non pythagorean triplet', t => {
  t.is(new Triplet.is(5, 6, 7).isPythagorean()).toBe(false)
})

test('can make triplets up to 10', t => {
  const triplets = Triplet.where({
    maxFactor: 10
  })
  const products = triplets.sort.is().map(function (triplet) {
    return triplet.product.is()
  })
  t.is(products, [60, 480])
})

test('can make triplets 11 through 20', t => {
  const triplets = Triplet.where({
    minFactor: 11,
    maxFactor: 20
  })
  const products = triplets.sort.is().map(function (triplet) {
    return triplet.product.is()
  })
  t.is(products, [3840])
})

test('can filter on sum', t => {
  const triplets = Triplet.where({
    sum: 180,
    maxFactor: 100
  })
  const products = triplets.sort.is().map(function (triplet) {
    return triplet.product.is()
  })
  t.is(products, [118080, 168480, 202500])
})
