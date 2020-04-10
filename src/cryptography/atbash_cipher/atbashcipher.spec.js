var atbash = require('./atbashcipher');
const test = require("ava");
const expect = require("expect");

test('encodes no', t => {
  t.is(atbash.encode('no'),'ml');
});

test('encodes yes', t => {
  t.is(atbash.encode('yes'),'bvh');
});

test('encodes OMG', t => {
  t.is(atbash.encode('OMG'),'lnt');
});

test('encodes O M G', t => {
  t.is(atbash.encode('O M G'),'lnt');
});

test('encodes long words', t => {
  t.is(atbash.encode('mindblowingly'),'nrmwy oldrm tob');
});

test('encodes numbers', t => {
  t.is(atbash.encode('Testing, 1 2 3, testing.'))
    .toEqual('gvhgr mt123 gvhgr mt');
});

test('encodes sentences', t => {
  t.is(atbash.encode('Truth is fiction.'),'gifgs rhurx grlm');
});

test('encodes all the things', t => {
  t.is(atbash.encode('The quick brown fox jumps over the lazy dog.'))
    .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt');
});
