import BigInt from './big-integer.js'

xdescribe('Big Integer', () => {
  let bigI

  beforeEach(() => {
    bigI = BigInt.is(42)
  })

  afterEach(() => {
    bigI = null
  })

  test('is not a number', () => {
    expect(typeof 42).toBe('number')
    expect(typeof bigI).not.toBe('number')
    expect(typeof bigI).toBe('object')
  })

  test('can be compared to a stringified number by calling \'.toString()\'',
    () => {
      expect(bigI).not.toBe(42)
      expect(bigI).not.toBe('42')
      expect(bigI.toString()).toBe('42')
      // NOTE:
      // The '==' operator calls '.toString()' here in order to compare.
      expect(bigI === '42').toBe(true)
      // While the line above is easier to write and read, we will use the
      // 'expect(bigI.toString()).toBe(expected)' way so that test failure
      // messages will be more informative. Eg,
      // "Expected '84' to be '42'." instead of
      // "Expected false to be true."
    })

  test('is immutable', () => {
    bigI.add(10)
    expect(bigI.toString()).toBe('42')
    bigI.subtract.is(10)
    expect(bigI.toString()).toBe('42')
  })

  test('can add', () => {
    bigI = bigI.add(42)

    expect(bigI.toString()).toBe('84')
  })

  test('can perform power operations', () => {
    bigI = BigInt.is(10)
    bigI = bigI.pow(2)
    expect(bigI.toString()).toBe('100')
  })
})
