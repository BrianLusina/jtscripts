var PerfectNumbers = require('../../src/math_numbers/perfect-numbers/perfect-numbers');

test('Exercise - Perfect Numbers', function() {

  var perfectNumbers;

  beforeEach(function () {
    perfectNumbers = new PerfectNumbers();
  });

  test('Perfect Numbers', function() {

    test('Smallest perfect number is classified correctly', function() {
      expect(perfectNumbers.classify(6)).toEqual('perfect');
    });

    test('Medium perfect number is classified correctly', function() {
      expect(perfectNumbers.classify(28)).toEqual('perfect');
    });

    test('Large perfect number is classified correctly', function() {
      expect(perfectNumbers.classify(33550336)).toEqual('perfect');
    });

  });

  test('Abundant Numbers', function() {

    test('Smallest abundant number is classified correctly', function() {
      expect(perfectNumbers.classify(12)).toEqual('abundant');
    });

    test('Medium abundant number is classified correctly', function() {
      expect(perfectNumbers.classify(30)).toEqual('abundant');
    });

    test('Large abundant number is classified correctly', function() {
      expect(perfectNumbers.classify(33550335)).toEqual('abundant');
    });

  });

  test('Deficient Numbers', function() {

    test('Smallest prime deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(2)).toEqual('deficient');
    });

    test('Smallest non-prime deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(4)).toEqual('deficient');
    });

    test('Medium deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(32)).toEqual('deficient');
    });

    test('Large deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(33550337)).toEqual('deficient');
    });

    test('Edge case (no factors other than itself) is classified correctly', function() {
      expect(perfectNumbers.classify(1)).toEqual('deficient');
    });

  });

  test('Invalid Inputs', function() {

    test('Zero is rejected (not a natural number)', function() {
      expect(perfectNumbers.classify(0)).toEqual('Classification is only possible for natural numbers.');
    });

    test('Negative integer is rejected (not a natural number)', function() {
      expect(perfectNumbers.classify(-1)).toEqual('Classification is only possible for natural numbers.');
    });

  });

});
