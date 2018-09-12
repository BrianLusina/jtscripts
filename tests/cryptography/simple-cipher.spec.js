var Cipher = require('../../jssnips/cryptography/simple-cipher/simplecipher2');
//var Cipher = require('../../jssnips/cryptography/simple-cipher/simplecipher');

test('Random key cipher', function () {
  var cipher = new Cipher();

  test('has a key made of letters', function () {
    expect(cipher.key).toMatch(/[a-z]+/);
  });

  // Here we take advantage of the fact that plaintext of "aaa..."
  // outputs the key. This is a critical problem with shift ciphers, some
  // characters will always output the key verbatim.
  test('can encode', function () {
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  });

  test('can decode', function () {
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  });

  test('is reversible', function () {
    var plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });
});

test('Incorrect key cipher', function () {
  test('throws an error with an all caps key', function () {
    expect( function () {
      new Cipher('ABCDEF');
    }).toThrow(new Error('Bad key!'));
  });

  test('throws an error with a numeric key', function () {
    expect( function () {
      new Cipher('12345');
    }).toThrow(new Error('Bad key!'));
  });

  test('throws an error with an empty key', function () {
    expect( function () {
      new Cipher('');
    }).toThrow(new Error('Bad key!'));
  });
});

test('Substitution cipher', function () {
  var key = 'abcdefghij';
  var cipher = new Cipher(key);

  test('keeps the submitted key', function () {
    expect(cipher.key).toEqual(key);
  });

  test('can encode', function () {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  });

  test('can decode', function () {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  });

  test('is reversible', function () {
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
  });

  test(': double shift encode', function () {
    expect(new Cipher('iamapandabear').encode('iamapandabear'))
      .toEqual('qayaeaagaciai');
  });

  test('can wrap', function () {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  });
});
