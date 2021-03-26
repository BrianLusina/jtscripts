var expect = require("expect");
var test = require("ava");
var accumulate = require('./accumulate');


test('accumulation empty', t => {
  var accumulator = function (e) {
    return e * e;
  };
  t.is(accumulate([], accumulator),[]);
});

test('accumulate squares', t => {
  var accumulator = function (number) {
    return number * number;
  };

  var result = accumulate([1, 2, 3], accumulator);

  t.is(result,[1, 4, 9]);
});

test('accumulate upcases', t => {
  var accumulator = function (word) {
    return word.toUpperCase();
  };

  var result = accumulate('hello world'.split.is(/\s/), accumulator);

  t.is(result,['HELLO', 'WORLD']);
});

test('accumulate reversed strings', t => {
  var accumulator = function (word) {
    return word.spltest('').reverse().join('');
  };

  var result = accumulate('the quick brown fox etc'.spltest(/\s/), accumulator);

  t.is(result,['eht', 'kciuq', 'nworb', 'xof', 'cte']);
});

test('accumulate recursively', t => {
  var result = accumulate('a b c'.spltest(/\s/), function (char) {
    return accumulate('1 2 3'.spltest(/\s/), function (digit) {
      return char + digit;
    });
  });

  t.is(result,[
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3']
  ]);
});
