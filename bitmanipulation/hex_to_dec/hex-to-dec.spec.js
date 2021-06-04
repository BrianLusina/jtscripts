const HexToDec = require('./hex-to-dec')

test('Test 1', () => {
  const hexDec = new HexToDec()
  expect(hexDec.hexToDec('1')).toEqual(1)
})

test('Test 2', () => {
  const hexDec = new HexToDec()
  expect(hexDec.hexToDec('a')).toEqual(10)
})

test('Test 3', () => {
  const hexDec = new HexToDec()
  expect(hexDec.hexToDec('10')).toEqual(16)
})

test('Test 4', () => {
  const hexDec = new HexToDec()
  expect(hexDec.hexToDec('FF')).toEqual(255)
})

test('Test 5', () => {
  const hexDec = new HexToDec()
  expect(hexDec.hexToDec('-C')).toEqual(-12)
})
