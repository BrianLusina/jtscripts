const test = require('ava')
const expect = require('expect')
const toRoman = require('./roman-numerals2')

test('converts 1', t => {
  t.is(toRoman(1), 'I')
})

test('converts 2', t => {
  t.is(toRoman(2), 'II')
})

test('converts 3', t => {
  t.is(toRoman(3), 'III')
})

test('converts 4', t => {
  t.is(toRoman(4), 'IV')
})

test('converts 5', t => {
  t.is(toRoman(5), 'V')
})

test('converts 6', t => {
  t.is(toRoman(6), 'VI')
})

test('converts 9', t => {
  t.is(toRoman(9), 'IX')
})

test('converts 50', () => {
  t.is(toRoman(50), 'L')
})

test('converts 27', t => {
  t.is(toRoman(27), 'XXVII')
})

test('converts 48', t => {
  t.is(toRoman(48), 'XLVIII')
})

test('converts 59', t => {
  t.is(toRoman(59), 'LIX')
})

test('converts 93', t => {
  t.is(toRoman(93), 'XCIII')
})

test('converts 100', t => {
  t.is(toRoman(100), 'C')
})

test('converts 200', t => {
  t.is(toRoman(200), 'CC')
})

test('converts 141', t => {
  t.is(toRoman(141), 'CXLI')
})

test('converts 163', t => {
  t.is(toRoman(163), 'CLXIII')
})

test('converts 402', t => {
  t.is(toRoman(402), 'CDII')
})

test('converts 575', t => {
  t.is(toRoman(575), 'DLXXV')
})

test('converts 911', t => {
  t.is(toRoman(911), 'CMXI')
})

test('converts 1204', t => {
  t.is(toRoman(1204), 'MCCIV')
})

test('converts 1024', t => {
  t.is(toRoman(1024), 'MXXIV')
})

test('converts 1290', t => {
  t.is(toRoman(1290), 'MCCXC')
})

test('converts 3000', t => {
  t.is(toRoman(3000), 'MMM')
})
