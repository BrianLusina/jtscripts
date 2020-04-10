var test = require("ava");
var expect = require("expect");
var TitleCase = require('./titlecase');

test('Test 1', function () {
  var title = new TitleCase();
  t.is(title.titleCase('a clash of KINGS', 'a an the of'),'A Clash of Kings');
});

test('Test 2', function () {
  var title = new TitleCase();
  t.is(title.titleCase('THE WIND IN THE WILLOWS', 'The In'),'The Wind in the Willows');
});

test('Test 3', function () {
  var title = new TitleCase();
  t.is(title.titleCase('the quick brown fox'),'The Quick Brown Fox');
});
