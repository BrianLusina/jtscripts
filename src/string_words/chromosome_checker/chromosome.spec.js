var test = require("ava");
var expect = require('expect');
var ChromosomeCheck = require('./chromosomeCheck');

test('Son', t => {
  var chromosome = new ChromosomeCheck('XY');

  t.is(chromosome.chromosomeCheck('XY'),'Congratulations! You\'re going to have a son.');
});

test('Daughter', t => {
  var chromosome = new ChromosomeCheck('XX');

  t.is(chromosome.chromosomeCheck('XX'),'Congratulations! You\'re going to have a daughter.');
});
