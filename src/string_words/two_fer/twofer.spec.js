var test = require("ava");
var expect = require("expect");
var TwoFer = require('./two-fer');

var twoFer = new TwoFer();

test('gives one to you if no parameter given', t => {
  expect(twoFer.twoFer()).toEqual('One for you, one for me.');
});

test('gives one to Alice if \'Alice\' is given', t => {
  expect(twoFer.twoFer('Alice')).toEqual('One for Alice, one for me.');
});

test('gives one to Bob if \'Bob\' is given', t => {
  expect(twoFer.twoFer('Bob')).toEqual('One for Bob, one for me.');
});
