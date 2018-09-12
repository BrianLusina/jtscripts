var atbash = require('../../jssnips/cryptography/atbash_cipher/atbashcipher');

test('encode', function() {

  test('encodes no', function() {
    expect(atbash.encode('no')).toEqual('ml');
  });

  test('encodes yes', function() {
    expect(atbash.encode('yes')).toEqual('bvh');
  });

  test('encodes OMG', function() {
    expect(atbash.encode('OMG')).toEqual('lnt');
  });

  test('encodes O M G', function() {
    expect(atbash.encode('O M G')).toEqual('lnt');
  });

  test('encodes long words', function() {
    expect(atbash.encode('mindblowingly')).toEqual('nrmwy oldrm tob');
  });

  test('encodes numbers', function() {
    expect(atbash.encode('Testing, 1 2 3, testing.'))
      .toEqual('gvhgr mt123 gvhgr mt');
  });

  test('encodes sentences', function() {
    expect(atbash.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm');
  });

  test('encodes all the things', function() {
    expect(atbash.encode('The quick brown fox jumps over the lazy dog.'))
      .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt');
  });

});