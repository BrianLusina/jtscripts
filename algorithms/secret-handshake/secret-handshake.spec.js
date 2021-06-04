const SecretHandshake = require('./secret-handshake')
const test = require('ava')
const expect = require('expect')

test('1 is a wink', t => {
  const handshake = new SecretHandshake(1)
  t.is(handshake.commands(), ['wink'])
})

test('10 is a double blink', t => {
  const handshake = new SecretHandshake(2)
  t.is(handshake.commands(), ['double blink'])
})

test('100 is close your eyes', t => {
  const handshake = new SecretHandshake(4)
  t.is(handshake.commands(), ['close your eyes'])
})

test('1000 is jump', t => {
  const handshake = new SecretHandshake(8)
  t.is(handshake.commands(), ['jump'])
})

test('11 is wink and double blink', t => {
  const handshake = new SecretHandshake(3)
  t.is(handshake.commands(), ['wink', 'double blink'])
})

test('10011 is double blink and wink', t => {
  const handshake = new SecretHandshake(19)
  t.is(handshake.commands(), ['double blink', 'wink'])
})

test('11111 is jump, close your eyes, double blink, and wink', t => {
  const handshake = new SecretHandshake(31)
  t.is(handshake.commands(), ['jump', 'close your eyes', 'double blink', 'wink'])
})

test('text is an invalid secret handshake', t => {
  t.is(t => {
    const handshake = new SecretHandshake('piggies')
  }).toThrow(new Error('Handshake must be a number'))
})
