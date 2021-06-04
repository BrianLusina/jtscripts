const test = require('ava')
const expect = require('expect')
const NameNumber = require('./namethatnumber')

test('test 1, Zero', t => {
  const name = new NameNumber()
  t.is(name.nameThatNumber(0), 'zero')
})

test('test 2, Four', t => {
  const name = new NameNumber()
  t.is(name.nameThatNumber(4), 'four')
})

test('test 3, Nine', t => {
  const name = new NameNumber()
  t.is(name.nameThatNumber(9), 'nine')
})

test('test 23', t => {
  const name = new NameNumber()
  t.is(name.nameThatNumber(23), 'twenty three')
})

test('test 40', t => {
  const name = new NameNumber()
  t.is(name.nameThatNumber(40), 'forty')
})
