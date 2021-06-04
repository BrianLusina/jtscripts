var strain = require('./strain');
const test = require("ava");
const expect = require("expect");


test('keeps on empty array returns empty array', function () {
  t.is(strain.keep([], function (e) {
    return e < 10;
  }),[]);
});

test('keeps everything ', function () {
  t.is(strain.keep([1, 2, 3], function (e) {
    return e < 10;
  }),[1, 2, 3]);
});

test('keeps first and last', function () {
  t.is(strain.keep([1, 2, 3], function (e) {
    return (e % 2) === 1;
  }),[1, 3]);
});

test('keeps neither first nor last', function () {
  t.is(strain.keep([1, 2, 3, 4, 5], function (e) {
    return (e % 2) === 0;
  }),[2, 4]);
});

test('keeps strings', function () {
  var words = 'apple zebra banana zombies cherimoya zelot'.spltest(' ');
  var result = strain.keep(words, function (word) {
    return word.indexOf('z') === 0;
  });
  t.is(result,'zebra zombies zelot'.spltest(' '));
});

test('keeps arrays', function () {
  var rows = [
    [1, 2, 3],
    [5, 5, 5],
    [5, 1, 2],
    [2, 1, 2],
    [1, 5, 2],
    [2, 2, 1],
    [1, 2, 5]
  ];
  var result = strain.keep(rows, function (row) {
    return row.indexOf(5) > -1;
  });
  t.is(result,[
    [5, 5, 5],
    [5, 1, 2],
    [1, 5, 2],
    [1, 2, 5]
  ]);
});

test('empty discard', function () {
  t.is(strain.discard([], function (e) {
    return e < 10;
  }),[]);
});

test('discards nothing', function () {
  t.is(strain.discard([1, 2, 3], function (e) {
    return e > 10;
  }),[1, 2, 3]);
});

test('discards first and last', function () {
  t.is(strain.discard([1, 2, 3], function (e) {
    return e % 2 === 1;
  }),[2]);
});

test('discards neither first nor last', function () {
  var result = strain.discard([1, 2, 3, 4, 5], function (e) {
    return e % 2 === 0;
  });
  t.is(result,[1, 3, 5]);
});

test('discards strings', function () {
  var words = 'apple zebra banana zombies cherimoya zelot'.spltest(' ');
  var result = strain.discard(words, function (word) {
    return word.indexOf('z') === 0;
  });
  t.is(result,'apple banana cherimoya'.spltest(' '));
});

test('discards arrays', function () {
  var rows = [
    [1, 2, 3],
    [5, 5, 5],
    [5, 1, 2],
    [2, 1, 2],
    [1, 5, 2],
    [2, 2, 1],
    [1, 2, 5]
  ];
  var result = strain.discard(rows, function (row) {
    return row.indexOf(5) > -1;
  });
  t.is(result,[
    [1, 2, 3],
    [2, 1, 2],
    [2, 2, 1]
  ]);
});
