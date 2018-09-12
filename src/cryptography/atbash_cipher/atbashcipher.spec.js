var atbash = require('./atbashcipher');
const test = require("ava");
const expect = require("expect");

test('encodes no', t => {
  expect(atbash.encode('no')).toEqual('ml');
});

test('encodes yes', t => {
  expect(atbash.encode('yes')).toEqual('bvh');
});

test('encodes OMG', t => {
  expect(atbash.encode('OMG')).toEqual('lnt');
});

test('encodes O M G', t => {
  expect(atbash.encode('O M G')).toEqual('lnt');
});

test('encodes long words', t => {
  expect(atbash.encode('mindblowingly')).toEqual('nrmwy oldrm tob');
});

test('encodes numbers', t => {
  expect(atbash.encode('Testing, 1 2 3, testing.'))
    .toEqual('gvhgr mt123 gvhgr mt');
});

test('encodes sentences', t => {
  expect(atbash.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm');
});

test('encodes all the things', t => {
  expect(atbash.encode('The quick brown fox jumps over the lazy dog.'))
    .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt');
});
