/**
 * Created by lusinabrian on 27/02/17.
 */
const test = require('ava')
const expect = require('expect')
const pigLatin = require('./pig-latin.js')

test('translates a word beginning with a', t => {
  t.is(pigLatin.translate('apple'), 'appleay')
})

test('translates a word beginning with e', t => {
  t.is(pigLatin.translate('ear'), 'earay')
})

test('translates a word beginning with p', t => {
  t.is(pigLatin.translate('pig'), 'igpay')
})

test('translates a word beginning with k', t => {
  t.is(pigLatin.translate('koala'), 'oalakay')
})

test('translates a word beginning with ch', t => {
  t.is(pigLatin.translate('chair'), 'airchay')
})

test('translates a word beginning with qu', t => {
  t.is(pigLatin.translate('queen'), 'eenquay')
})

test('translates a word with a consonant preceding qu', t => {
  t.is(pigLatin.translate('square'), 'aresquay')
})

test('translates a word beginning with th', t => {
  t.is(pigLatin.translate('therapy'), 'erapythay')
})

test('translates a word beginning with thr', t => {
  t.is(pigLatin.translate('thrush'), 'ushthray')
})

test('translates a word beginning with sch', t => {
  t.is(pigLatin.translate('school'), 'oolschay')
})

test('translates a phrase', t => {
  t.is(pigLatin.translate('quick fast run'))
    .toEqual('ickquay astfay unray')
})

test('translate pig latin is cool', t => {
  t.is(pigLatin.translate('Pig latin is cool'), 'igPay atinlay isay oolcay')
})

test('translate carlifornia', t => {
  t.is(pigLatin.translate('california'), 'aliforniacay')
})

test('translate paragraphs', t => {
  t.is(pigLatin.translate('paragraphs'), 'aragraphspay')
})

test('translates glove', t => {
  t.is(pigLatin.translate('glove'), 'oveglay')
})

test('translate algorithm', t => {
  t.is(pigLatin.translate('algorithm'), 'algorithmay')
})

test('translate eight', t => {
  t.is(pigLatin.translate('eight'), 'eightay')
})
