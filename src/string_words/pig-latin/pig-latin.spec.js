/**
 * Created by lusinabrian on 27/02/17.
 */
var test = require("ava");
var expect = require("expect");
var pigLatin = require('./pig-latin.js');


test('translates a word beginning with a', t => {
  expect(pigLatin.translate('apple')).toEqual('appleay');
});

test('translates a word beginning with e', t => {
  expect(pigLatin.translate('ear')).toEqual('earay');
});

test('translates a word beginning with p', t => {
  expect(pigLatin.translate('pig')).toEqual('igpay');
});

test('translates a word beginning with k', t => {
  expect(pigLatin.translate('koala')).toEqual('oalakay');
});

test('translates a word beginning with ch', t => {
  expect(pigLatin.translate('chair')).toEqual('airchay');
});

test('translates a word beginning with qu', t => {
  expect(pigLatin.translate('queen')).toEqual('eenquay');
});

test('translates a word with a consonant preceding qu', t => {
  expect(pigLatin.translate('square')).toEqual('aresquay');
});

test('translates a word beginning with th', t => {
  expect(pigLatin.translate('therapy')).toEqual('erapythay');
});

test('translates a word beginning with thr', t => {
  expect(pigLatin.translate('thrush')).toEqual('ushthray');
});

test('translates a word beginning with sch', t => {
  expect(pigLatin.translate('school')).toEqual('oolschay');
});

test('translates a phrase', t => {
  expect(pigLatin.translate('quick fast run'))
    .toEqual('ickquay astfay unray');
});

test("translate pig latin is cool", t => {
  expect(pigLatin.translate('Pig latin is cool')).toEqual("igPay atinlay isay oolcay");
});

test("translate carlifornia", t => {
  expect(pigLatin.translate('california')).toEqual("aliforniacay");
});

test("translate paragraphs", t => {
  expect(pigLatin.translate('paragraphs')).toEqual("aragraphspay");
});

test("translates glove", t => {
  expect(pigLatin.translate('glove')).toEqual("oveglay");
});

test("translate algorithm", t => {
  expect(pigLatin.translate('algorithm')).toEqual("algorithmay");
});

test("translate eight", t => {
  expect(pigLatin.translate('eight')).toEqual("eightay");
});
