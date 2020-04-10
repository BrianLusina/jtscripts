var Crypto = require('./cryptosquare');
const test = require("ava");
const expect = require("expect");


test('normalize strange characters', t => {
  var crypto = new Crypto('s#$%^&plunk');
  t.is(crypto.normalizePlaintext.is(),'splunk');
});

test('normalize numbers', t => {
  var crypto = new Crypto('1, 2, 3 GO!');
  t.is(crypto.normalizePlaintext.is(),'123go');
});

test('size of small square', t => {
  var crypto = new Crypto('1234');
  t.is(crypto.size(),2);
});

test('size of small square with additional non-nuber chars', t => {
  var crypto = new Crypto('1 2 3 4');
  t.is(crypto.size(),2);
});

test('size of slightly larger square', t => {
  var crypto = new Crypto('123456789');
  t.is(crypto.size(),3);
});

test('size of non-perfect square', t => {
  var crypto = new Crypto('123456789abc');
  t.is(crypto.size(),4);
});

test('plain text segments', t => {
  var crypto = new Crypto('Never vex thine heart with idle woes');
  t.is(crypto.plaintextSegments(),['neverv', 'exthin', 'eheart', 'withid', 'lewoes']);
});

test('plain text segments 2', t => {
  var crypto = new Crypto('ZOMG! ZOMBIES!!!');
  t.is(crypto.plaintextSegments(),['zomg', 'zomb', 'ies']);
});

test('cipher text', t => {
  var crypto = new Crypto('Time is an illusion. Lunchtime doubly so.');
  t.is(crypto.ciphertext.is(),'tasneyinicdsmiohooelntuillibsuuml');
});

test('cipher text 2', t => {
  var crypto = new Crypto('We all know interspecies romance is weird.');
  t.is(crypto.ciphertext.is(),'wneiaweoreneawssciliprerlneoidktcms');
});
