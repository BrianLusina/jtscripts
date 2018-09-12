var SecretHandshake = require('../../jssnips/algorithms/secret-handshake/secret-handshake');

test('Secret Handshake', function() {
  test('1 is a wink', function() {
    var handshake = new SecretHandshake(1);
    expect(handshake.commands()).toEqual(['wink']);
  });

  test('10 is a double blink', function() {
    var handshake = new SecretHandshake(2);
    expect(handshake.commands()).toEqual(['double blink']);
  });

  test('100 is close your eyes', function() {
    var handshake = new SecretHandshake(4);
    expect(handshake.commands()).toEqual(['close your eyes']);
  });

  test('1000 is jump', function() {
    var handshake = new SecretHandshake(8);
    expect(handshake.commands()).toEqual(['jump']);
  });

  test('11 is wink and double blink', function() {
    var handshake = new SecretHandshake(3);
    expect(handshake.commands()).toEqual(['wink','double blink']);
  });

  test('10011 is double blink and wink', function() {
    var handshake = new SecretHandshake(19);
    expect(handshake.commands()).toEqual(['double blink','wink']);
  });

  test('11111 is jump, close your eyes, double blink, and wink', function() {
    var handshake = new SecretHandshake(31);
    expect(handshake.commands()).toEqual(['jump','close your eyes','double blink','wink']);
  });

  test('text is an invalid secret handshake', function() {
    expect( function () {
      var handshake = new SecretHandshake('piggies');
    }).toThrow(new Error('Handshake must be a number'));
  });
});