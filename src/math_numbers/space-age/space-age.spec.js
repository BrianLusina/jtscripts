var test = require("ava");
var expect = require("expect");
var SpaceAge = require('./space-age');

test('age in seconds', t => {
  var age = new SpaceAge(1000000);
  expect(age.seconds).toEqual(1000000);
});

test('age in earth years', t => {
  var age = new SpaceAge(1000000000);
  expect(age.onEarth()).toEqual(31.69);
});

test('age in mercury years', t => {
  var age = new SpaceAge(2134835688);
  expect(age.onEarth()).toEqual(67.65);
  expect(age.onMercury()).toEqual(280.88);
});

test('age in venus years', t => {
  var age = new SpaceAge(189839836);
  expect(age.onEarth()).toEqual(6.02);
  expect(age.onVenus()).toEqual(9.78);
});

test('age in mars years', t => {
  var age = new SpaceAge(2329871239);
  expect(age.onEarth()).toEqual(73.83);
  expect(age.onMars()).toEqual(39.25);
});

test('age in jupiter years', t => {
  var age = new SpaceAge(901876382);
  expect(age.onEarth()).toEqual(28.58);
  expect(age.onJupiter()).toEqual(2.41);
});

test('age in saturn years', t => {
  var age = new SpaceAge(3000000000);
  expect(age.onEarth()).toEqual(95.06);
  expect(age.onSaturn()).toEqual(3.23);
});

test('age in uranus years', t => {
  var age = new SpaceAge(3210123456);
  expect(age.onEarth()).toEqual(101.72);
  expect(age.onUranus()).toEqual(1.21);
});

test('age in neptune year', t => {
  var age = new SpaceAge(8210123456);
  expect(age.onEarth()).toEqual(260.16);
  expect(age.onNeptune()).toEqual(1.58);
});
