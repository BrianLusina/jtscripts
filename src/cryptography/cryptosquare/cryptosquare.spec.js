var Crypto = require('./cryptosquare');
const test = require("ava");
const expect = require("expect");


test('normalize strange characters', t => {
  var crypto = new Crypto('s#$%^&plunk');
  expect(crypto.normalizePlaintext()).toEqual('splunk');
});

test('normalize numbers', t => {
  var crypto = new Crypto('1, 2, 3 GO!');
  expect(crypto.normalizePlaintext()).toEqual('123go');
});

test('size of small square', t => {
  var crypto = new Crypto('1234');
  expect(crypto.size()).toEqual(2);
});

test('size of small square with additional non-nuber chars', t => {
  var crypto = new Crypto('1 2 3 4');
  expect(crypto.size()).toEqual(2);
});

test('size of slightly larger square', t => {
  var crypto = new Crypto('123456789');
  expect(crypto.size()).toEqual(3);
});

test('size of non-perfect square', t => {
  var crypto = new Crypto('123456789abc');
  expect(crypto.size()).toEqual(4);
});

test('plain text segments', t => {
  var crypto = new Crypto('Never vex thine heart with idle woes');
  expect(crypto.plaintextSegments()).toEqual(['neverv', 'exthin', 'eheart', 'withid', 'lewoes']);
});

test('plain text segments', t => {
  var crypto = new Crypto('ZOMG! ZOMBIES!!!');
  expect(crypto.plaintextSegments()).toEqual(['zomg', 'zomb', 'ies']);
});

test('cipher text', t => {
  var crypto = new Crypto('Time is an illusion. Lunchtime doubly so.');
  expect(crypto.ciphertext()).toEqual('tasneyinicdsmiohooelntuillibsuuml');
});

test('cipher text', t => {
  var crypto = new Crypto('We all know interspecies romance is weird.');
  expect(crypto.ciphertext()).toEqual('wneiaweoreneawssciliprerlneoidktcms');
});
