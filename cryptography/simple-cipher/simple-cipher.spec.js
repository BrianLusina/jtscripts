const Cipher = require('./simplecipher2')

// var Cipher = require('../../src/cryptography/simple-cipher/simplecipher');

var cipher = new Cipher()

test('has a key made of letters', () => {
  expect(cipher.key).toMatch(/[a-z]+/)
})

// Here we take advantage of the fact that plaintext of "aaa..."
// outputs the key. This is a critical problem with shift ciphers, some
// characters will always output the key verbatim.
test('can encode', () => {
  expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10))
})

test('can decode', () => {
  expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa')
})

test('is reversible', () => {
  const plaintext = 'abcdefghij'
  expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext)
})

test('throws an error with an all caps key', () => {
  expect(() => {
    new Cipher('ABCDEF')
  }).toThrow(new Error('Bad key!'))
})

test('throws an error with a numeric key', () => {
  expect(() => {
    new Cipher('12345')
  }).toThrow(new Error('Bad key!'))
})

test('throws an error with an empty key', () => {
  expect(() => {
    new Cipher('')
  }).toThrow(new Error('Bad key!'))
})

const key = 'abcdefghij'
var cipher = new Cipher(key)

test('keeps the submitted key', () => {
  expect(cipher.key).toEqual(key)
})

test('can encode 1', () => {
  expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij')
})

test('can decode 2', () => {
  expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa')
})

test('is reversible 3', () => {
  expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij')
})

test(': double shift encode', () => {
  expect(new Cipher('iamapandabear').encode('iamapandabear'))
    .toEqual('qayaeaagaciai')
})

test('can wrap', () => {
  expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi')
})
