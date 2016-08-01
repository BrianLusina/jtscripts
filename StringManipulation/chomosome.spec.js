var ChromosomeCheck = require('/.chromosomeCheck');

Test.assertEquals(chromosomeCheck('XX'), )

describe('Isogram Test Suite', function () {
  it('Son', function () {
    var chromosome = new ChromosomeCheck('XY');

    expect(chromosome.chromosomeCheck("XY")).toEqual("Congratulations! You're going to have a son.");
  });

  it('Daughter', function () {
    var chromosome = new ChromosomeCheck('XX');

    expect(chromosome.chromosomeCheck("XX")).toEqual("Congratulations! You're going to have a daughter.");
  });

});
