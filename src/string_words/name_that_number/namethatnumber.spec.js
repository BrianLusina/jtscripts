var test = require("ava");
var expect = require("expect");
var NameNumber = require('./namethatnumber');

test('test 1, Zero', t => {
  var name = new NameNumber();
  t.is(name.nameThatNumber(0),'zero');
});

test('test 2, Four', t => {
  var name = new NameNumber();
  t.is(name.nameThatNumber(4),'four');
});

test('test 3, Nine', t => {
  var name = new NameNumber();
  t.is(name.nameThatNumber(9),'nine');
});

test('test 23', t => {
  var name = new NameNumber();
  t.is(name.nameThatNumber(23),'twenty three');
});

test('test 40', t => {
  var name = new NameNumber();
  t.is(name.nameThatNumber(40),'forty');
});
