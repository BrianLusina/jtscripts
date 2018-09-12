var Cipher = require('./simplecipher2');
const test = require("ava");
const expect = require("expect");

//var Cipher = require('../../jssnips/cryptography/simple-cipher/simplecipher');

var cipher = new Cipher();

test('has a key made of letters', t => {
  expect(cipher.key).toMatch(/[a-z]+/);
});

// Here we take advantage of the fact that plaintext of "aaa..."
// outputs the key. This is a critical problem with shift ciphers, some
// characters will always output the key verbatim.
test('can encode', t => {
  expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
});

test('can decode', t => {
  expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
});

test('is reversible', t => {
  var plaintext = 'abcdefghij';
  expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
});

test('throws an error with an all caps key', t => {
  expect(t => {
    new Cipher('ABCDEF');
  }).toThrow(new Error('Bad key!'));
});

test('throws an error with a numeric key', t => {
  expect(t => {
    new Cipher('12345');
  }).toThrow(new Error('Bad key!'));
});

test('throws an error with an empty key', t => {
  expect(() => {
    new Cipher('');
  }).toThrow(new Error('Bad key!'));
});

var key = 'abcdefghij';
var cipher = new Cipher(key);

test('keeps the submitted key', t => {
  expect(cipher.key).toEqual(key);
});

test('can encode', t => {
  expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
});

test('can decode', t => {
  expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
});

test('is reversible', t => {
  expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
});

test(': double shift encode', t => {
  expect(new Cipher('iamapandabear').encode('iamapandabear'))
    .toEqual('qayaeaagaciai');
});

test('can wrap', t => {
  expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
});
