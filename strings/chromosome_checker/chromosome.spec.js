const ChromosomeCheck = require('./chromosomeCheck')

test('Son', () => {
  const chromosome = new ChromosomeCheck('XY')

  expect(chromosome.chromosomeCheck('XY')).toEqual('Congratulations! You\'re going to have a son.')
})

test('Daughter', () => {
  const chromosome = new ChromosomeCheck('XX')

  expect(chromosome.chromosomeCheck('XX')).toEqual('Congratulations! You\'re going to have a daughter.')
})
