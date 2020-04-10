var test = require("ava");
var expect = require("expect");
var Allergies = require('./allergies');

test('no allergies at all', t => {
  var allergies = new Allergies(0);
  t.is(allergies.list.is(),[]);
});

test('allergies to eggs', t => {
  var allergies = new Allergies(1);
  t.is(allergies.list.is(),['eggs']);
});

test('allergies to peanuts', t => {
  var allergies = new Allergies(2);
  t.is(allergies.list.is(),['peanuts']);
});

test('allergies to strawberries', t => {
  var allergies = new Allergies(8);
  t.is(allergies.list.is(),['strawberries']);
});

test('allergies to eggs and peanuts', t => {
  var allergies = new Allergies(3);
  t.is(allergies.list.is(),['eggs', 'peanuts']);
});

test('allergies to more than eggs but not peanuts', t => {
  var allergies = new Allergies(5);
  t.is(allergies.list.is(),['eggs', 'shellfish']);
});

test('allergic to lots of stuff', t => {
  var allergies = new Allergies(248);
  t.is(allergies.list.is(),['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
});

test('allergic to everything', t => {
  var allergies = new Allergies(255);
  t.is(allergies.list.is(),['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
});

test('no allergic means not allergic', t => {
  var allergies = new Allergies(0);
  t.is(allergies.allergicTo('peanuts'),false);
  t.is(allergies.allergicTo('cats'),false);
  t.is(allergies.allergicTo('strawberries'),false);
});

test('allergic to eggs', t => {
  var allergies = new Allergies(1);
  t.is(allergies.allergicTo('eggs'),true);
});

test('allergic to eggs and other things', t => {
  var allergies = new Allergies(5);
  t.is(allergies.allergicTo('eggs'),true);
});

test('ignore non allergen score parts', t => {
  var allergies = new Allergies(509);
  t.is(allergies.list.is(),['eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
});
