var test = require("ava");
var expect = require('expect');
var ChromosomeCheck = require('./chromosomeCheck');

test('Son', t => {
  var chromosome = new ChromosomeCheck('XY');

  expect(chromosome.chromosomeCheck('XY')).toEqual('Congratulations! You\'re going to have a son.');
});

test('Daughter', t => {
  var chromosome = new ChromosomeCheck('XX');

  expect(chromosome.chromosomeCheck('XX')).toEqual('Congratulations! You\'re going to have a daughter.');
});
