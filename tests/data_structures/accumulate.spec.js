var accumulate = require('../../jssnips/data_structures/arrays/accumulate/accumulate');

test('accumulate()', function() {

  test('accumulation empty', function() {
    var accumulator = function(e) { return e * e; };
    expect(accumulate([], accumulator)).toEqual([]);
  });

  test('accumulate squares', function() {
    var accumulator = function(number) {
      return number * number;
    };

    var result = accumulate([1, 2, 3], accumulator);

    expect(result).toEqual([1, 4, 9]);
  });

  test('accumulate upcases', function() {
    var accumulator = function(word) {
      return word.toUpperCase();
    };

    var result = accumulate('hello world'.spltest(/\s/), accumulator);

    expect(result).toEqual(['HELLO', 'WORLD']);
  });

  test('accumulate reversed strings', function() {
    var accumulator = function(word) {
      return word.spltest('').reverse().join('');
    };

    var result = accumulate('the quick brown fox etc'.spltest(/\s/), accumulator);

    expect(result).toEqual(['eht', 'kciuq', 'nworb', 'xof', 'cte']);
  });

  test('accumulate recursively', function() {
    var result = accumulate('a b c'.spltest(/\s/), function(char) {
      return accumulate('1 2 3'.spltest(/\s/), function(digit) {
        return char + digit;
      });
    });

    expect(result).toEqual([['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']]);
  });

});