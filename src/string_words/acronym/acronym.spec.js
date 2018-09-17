var test = require("ava");
var expect = require('expect');
var Acronyms = require('./acronym.js');

test('title cased phrases', t => {
  expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
});

test('other title cased phrases', t => {
  expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
});

test('inconsistently cased phrases', t => {
  expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
});

test('phrases with punctuation', t => {
  expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
});

test('other phrases with punctuation', t => {
  expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
});

test('phrases with punctuation and sentence casing', t => {
  expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
});
