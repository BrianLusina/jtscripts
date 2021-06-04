const test = require('ava')
const expect = require('expect')
const ChromosomeCheck = require('./chromosomeCheck')

test('Son', t => {
  const chromosome = new ChromosomeCheck('XY')

  t.is(chromosome.chromosomeCheck('XY'), 'Congratulations! You\'re going to have a son.')
})

test('Daughter', t => {
  const chromosome = new ChromosomeCheck('XX')

  t.is(chromosome.chromosomeCheck('XX'), 'Congratulations! You\'re going to have a daughter.')
})
