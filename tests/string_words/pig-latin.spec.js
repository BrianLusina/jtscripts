/**
 * Created by lusinabrian on 27/02/17.
 */

var pigLatin = require('../../jssnips/string_words/pig-latin/pig-latin.js');

test('pigLatin', function () {

  test('translates a word beginning with a', function () {
    expect(pigLatin.translate('apple')).toEqual('appleay');
  });

  test('translates a word beginning with e', function () {
    expect(pigLatin.translate('ear')).toEqual('earay');
  });

  test('translates a word beginning with p', function () {
    expect(pigLatin.translate('pig')).toEqual('igpay');
  });

  test('translates a word beginning with k', function () {
    expect(pigLatin.translate('koala')).toEqual('oalakay');
  });

  test('translates a word beginning with ch', function () {
    expect(pigLatin.translate('chair')).toEqual('airchay');
  });

  test('translates a word beginning with qu', function () {
    expect(pigLatin.translate('queen')).toEqual('eenquay');
  });

  test('translates a word with a consonant preceding qu', function () {
    expect(pigLatin.translate('square')).toEqual('aresquay');
  });

  test('translates a word beginning with th', function () {
   expect(pigLatin.translate('therapy')).toEqual('erapythay');
  });

  test('translates a word beginning with thr', function () {
    expect(pigLatin.translate('thrush')).toEqual('ushthray');
  });

  test('translates a word beginning with sch', function () {
    expect(pigLatin.translate('school')).toEqual('oolschay');
  });

  test('translates a phrase', function () {
    expect(pigLatin.translate('quick fast run'))
      .toEqual('ickquay astfay unray');
  });

  test("translate pig latin is cool", function(){
    expect(pigLatin.translate('Pig latin is cool')).toEqual("igPay atinlay isay oolcay");
  });

  test("translate carlifornia", function(){
    expect(pigLatin.translate('california')).toEqual("aliforniacay");
  });

  test("translate paragraphs", function(){
    expect(pigLatin.translate('paragraphs')).toEqual("aragraphspay");
  });

  test("translates glove", function(){
    expect(pigLatin.translate('glove')).toEqual("oveglay");
  });

  test("translate algorithm", function(){
    expect(pigLatin.translate('algorithm')).toEqual("algorithmay");
  });

  test("translate eight", function(){
    expect(pigLatin.translate('eight')).toEqual("eightay");
  });

});
