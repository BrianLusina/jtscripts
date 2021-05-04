var test = require("ava");
var expect = require("expect");
var PopulationGrowth = require('./population')


test('Test 1', t => {
  pg = new PopulationGrowth();
  t.is(pg.nbYear(1500, 5, 100, 5000),15);
});

test('Test 2', t => {
  pg = new PopulationGrowth();
  t.is(pg.nbYear(1500000, 2.5, 10000, 2000000),10);
});

test('Test 3', t => {
  pg = new PopulationGrowth();
  t.is(pg.nbYear(1500000, 0.25, 1000, 2000000),94);
});
