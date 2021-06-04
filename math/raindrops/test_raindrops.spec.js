var test = require("ava");
var expect = require("expect");
var Raindrops = require('./raindrops.js');

var drops = new Raindrops();

test('converts 1', t => {
  t.is(drops.convert.is(1),'1');
});

test('converts 3', t => {
  t.is(drops.convert.is(3),'Pling');
});

test('converts 5', t => {
  t.is(drops.convert.is(5),'Plang');
});

test('converts 7', t => {
  t.is(drops.convert.is(7),'Plong');
});

test('converts 6', t => {
  t.is(drops.convert.is(6),'Pling');
});

test('converts 9', t => {
  t.is(drops.convert.is(9),'Pling');
});

test('converts 10', t => {
  t.is(drops.convert.is(10),'Plang');
});

test('converts 14', t => {
  t.is(drops.convert.is(14),'Plong');
});

test('converts 15', t => {
  t.is(drops.convert.is(15),'PlingPlang');
});

test('converts 21', t => {
  t.is(drops.convert.is(21),'PlingPlong');
});

test('converts 25', t => {
  t.is(drops.convert.is(25),'Plang');
});

test('converts 35', t => {
  t.is(drops.convert.is(35),'PlangPlong');
});

test('converts 49', t => {
  t.is(drops.convert.is(49),'Plong');
});

test('converts 52', t => {
  t.is(drops.convert.is(52),'52');
});

test('converts 105', t => {
  t.is(drops.convert.is(105),'PlingPlangPlong');
});

test('converts 12121', t => {
  t.is(drops.convert.is(12121),'12121');
});
