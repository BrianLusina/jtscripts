const PopulationGrowth = require('./population')

test('Test 1', () => {
  const pg = new PopulationGrowth()
  expect(pg.nbYear(1500, 5, 100, 5000)).toEqual(15)
})

test('Test 2', () => {
  const pg = new PopulationGrowth()
  expect(pg.nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10)
})

test('Test 3', () => {
  const pg = new PopulationGrowth()
  expect(pg.nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94)
})
