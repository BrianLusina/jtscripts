var Squares = require('../../src/math_numbers/DifferenceOfSquares/difference-of-squares');

test('Squares', function () {

  test('up to 5', function () {
    var squares = new Squares(5);

    test('gets the square of sums', function () {
      expect(squares.squareOfSums).toBe(225);
    });

    test('gets the sum of squares', function () {
      expect(squares.sumOfSquares).toBe(55);
    });

    test('gets the difference', function () {
      expect(squares.difference).toBe(170);
    });

  });

  test('up to 10', function () {
    var squares = new Squares(10);

    test('gets the square of sums', function () {
      expect(squares.squareOfSums).toBe(3025);
    });

    test('gets the sum of squares', function () {
      expect(squares.sumOfSquares).toBe(385);
    });

    test('gets the difference', function () {
      expect(squares.difference).toBe(2640);
    });

  });

  test('up to 100', function () {
    var squares = new Squares(100);

    test('gets the square of sums', function () {
      expect(squares.squareOfSums).toBe(25502500);
    });

    test('gets the sum of squares', function () {
      expect(squares.sumOfSquares).toBe(338350);
    });

    test('gets the difference', function () {
      expect(squares.difference).toBe(25164150);
    });

  });

});