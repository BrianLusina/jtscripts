const pigLatin = require('./pig-latin.js')

test('translates a word beginning with a', () => {
  expect(pigLatin.translate('apple')).toEqual('appleay')
})

test('translates a word beginning with e', () => {
  expect(pigLatin.translate('ear')).toEqual('earay')
})

test('translates a word beginning with p', () => {
  expect(pigLatin.translate('pig')).toEqual('igpay')
})

test('translates a word beginning with k', () => {
  expect(pigLatin.translate('koala')).toEqual('oalakay')
})

test('translates a word beginning with ch', () => {
  expect(pigLatin.translate('chair')).toEqual('airchay')
})

test('translates a word beginning with qu', () => {
  expect(pigLatin.translate('queen')).toEqual('eenquay')
})

test('translates a word with a consonant preceding qu', () => {
  expect(pigLatin.translate('square')).toEqual('aresquay')
})

test('translates a word beginning with th', () => {
  expect(pigLatin.translate('therapy')).toEqual('erapythay')
})

test('translates a word beginning with thr', () => {
  expect(pigLatin.translate('thrush')).toEqual('ushthray')
})

test('translates a word beginning with sch', () => {
  expect(pigLatin.translate('school')).toEqual('oolschay')
})

test('translates a phrase', () => {
  expect(pigLatin.translate('quick fast run'))
    .toEqual('ickquay astfay unray')
})

test('translate pig latin is cool', () => {
  expect(pigLatin.translate('Pig latin is cool')).toEqual('igPay atinlay isay oolcay')
})

test('translate carlifornia', () => {
  expect(pigLatin.translate('california')).toEqual('aliforniacay')
})

test('translate paragraphs', () => {
  expect(pigLatin.translate('paragraphs')).toEqual('aragraphspay')
})

test('translates glove', () => {
  expect(pigLatin.translate('glove')).toEqual('oveglay')
})

test('translate algorithm', () => {
  expect(pigLatin.translate('algorithm')).toEqual('algorithmay')
})

test('translate eight', () => {
  expect(pigLatin.translate('eight')).toEqual('eightay')
})
