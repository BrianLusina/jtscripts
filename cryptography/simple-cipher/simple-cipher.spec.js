var Cipher = require('./simplecipher2');
const test = require("ava");
const expect = require("expect");

//var Cipher = require('../../src/cryptography/simple-cipher/simplecipher');

var cipher = new Cipher();

test('has a key made of letters', t => {
  t.is(cipher.key).toMatch(/[a-z]+/);
});

// Here we take advantage of the fact that plaintext of "aaa..."
// outputs the key. This is a critical problem with shift ciphers, some
// characters will always output the key verbatim.
test('can encode', t => {
  t.is(cipher.encode('aaaaaaaaaa'),cipher.key.substr(0, 10));
});

test('can decode', t => {
  t.is(cipher.decode(cipher.key.substr(0, 10)),'aaaaaaaaaa');
});

test('is reversible', t => {
  var plaintext = 'abcdefghij';
  t.is(cipher.decode(cipher.encode(plaintext)),plaintext);
});

test('throws an error with an all caps key', t => {
  t.is(t => {
    new Cipher('ABCDEF');
  }).toThrow(new Error('Bad key!'));
});

test('throws an error with a numeric key', t => {
  t.is(t => {
    new Cipher('12345');
  }).toThrow(new Error('Bad key!'));
});

test('throws an error with an empty key', t => {
  t.is(() => {
    new Cipher('');
  }).toThrow(new Error('Bad key!'));
});

var key = 'abcdefghij';
var cipher = new Cipher(key);

test('keeps the submitted key', t => {
  t.is(cipher.key,key);
});

test('can encode 1', t => {
  t.is(cipher.encode('aaaaaaaaaa'),'abcdefghij');
});

test('can decode 2', t => {
  t.is(cipher.decode('abcdefghij'),'aaaaaaaaaa');
});

test('is reversible 3', t => {
  t.is(cipher.decode(cipher.encode('abcdefghij')),'abcdefghij');
});

test(': double shift encode', t => {
  t.is(new Cipher('iamapandabear').encode('iamapandabear'))
    .toEqual('qayaeaagaciai');
});

test('can wrap', t => {
  t.is(cipher.encode('zzzzzzzzzz'),'zabcdefghi');
});
