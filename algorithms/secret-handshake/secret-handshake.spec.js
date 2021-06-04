const SecretHandshake = require('./secret-handshake')

test('1 is a wink', () => {
  const handshake = new SecretHandshake(1)
  expect(handshake.commands()).toEqual(['wink'])
})

test('10 is a double blink', () => {
  const handshake = new SecretHandshake(2)
  expect(handshake.commands()).toEqual(['double blink'])
})

test('100 is close your eyes', () => {
  const handshake = new SecretHandshake(4)
  expect(handshake.commands()).toEqual(['close your eyes'])
})

test('1000 is jump', () => {
  const handshake = new SecretHandshake(8)
  expect(handshake.commands()).toEqual(['jump'])
})

test('11 is wink and double blink', () => {
  const handshake = new SecretHandshake(3)
  expect(handshake.commands()).toEqual(['wink', 'double blink'])
})

test('10011 is double blink and wink', () => {
  const handshake = new SecretHandshake(19)
  expect(handshake.commands()).toEqual(['double blink', 'wink'])
})

test('11111 is jump, close your eyes, double blink, and wink', () => {
  const handshake = new SecretHandshake(31)
  expect(handshake.commands()).toEqual(['jump', 'close your eyes', 'double blink', 'wink'])
})

test('text is an invalid secret handshake', () => {
  expect(() => {
    const handshake = new SecretHandshake('piggies')
  }).toThrow(new Error('Handshake must be a number'))
})
