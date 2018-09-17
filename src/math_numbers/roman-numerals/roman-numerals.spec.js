var test = require("ava");
var expect = require("expect");
var toRoman = require('./roman-numerals2');

test('converts 1', t => {
  expect(toRoman(1)).toEqual('I');
});

test('converts 2', t => {
  expect(toRoman(2)).toEqual('II');
});

test('converts 3', t => {
  expect(toRoman(3)).toEqual('III');
});

test('converts 4', t => {
  expect(toRoman(4)).toEqual('IV');
});

test('converts 5', t => {
  expect(toRoman(5)).toEqual('V');
});

test('converts 6', t => {
  expect(toRoman(6)).toEqual('VI');
});

test('converts 9', t => {
  expect(toRoman(9)).toEqual('IX');
});

test("converts 50", () => {
  expect(toRoman(50)).toEqual("L");
});

test('converts 27', t => {
  expect(toRoman(27)).toEqual('XXVII');
});

test('converts 48', t => {
  expect(toRoman(48)).toEqual('XLVIII');
});

test('converts 59', t => {
  expect(toRoman(59)).toEqual('LIX');
});

test('converts 93', t => {
  expect(toRoman(93)).toEqual('XCIII');
});

test('converts 100', t => {
  expect(toRoman(100)).toEqual('C');
});

test('converts 200', t => {
  expect(toRoman(200)).toEqual('CC');
});

test('converts 141', t => {
  expect(toRoman(141)).toEqual('CXLI');
});

test('converts 163', t => {
  expect(toRoman(163)).toEqual('CLXIII');
});

test('converts 402', t => {
  expect(toRoman(402)).toEqual('CDII');
});

test('converts 575', t => {
  expect(toRoman(575)).toEqual('DLXXV');
});

test('converts 911', t => {
  expect(toRoman(911)).toEqual('CMXI');
});

test('converts 1204', t => {
  expect(toRoman(1204)).toEqual('MCCIV');
});

test('converts 1024', t => {
  expect(toRoman(1024)).toEqual('MXXIV');
});

test('converts 1290', t => {
  expect(toRoman(1290)).toEqual('MCCXC');
});

test('converts 3000', t => {
  expect(toRoman(3000)).toEqual('MMM');
});
