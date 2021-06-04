const telephoneCheck = require('./telephoneCheck')

test('test 1', () => {
  expect(telephoneCheck('555-555-5555')).toEqual(true)
})

test('test 2', () => {
  expect(telephoneCheck('1 555-555-5555')).toEqual(true)
})

test('test 3', () => {
  expect(telephoneCheck('1 (555) 555-5555')).toEqual(true)
})

test('test 4', () => {
  expect(telephoneCheck('5555555555')).toEqual(true)
})

test('test 5', () => {
  expect(telephoneCheck('555-555-5555')).toEqual(true)
})

test('test 6', () => {
  expect(telephoneCheck('(555)555-5555')).toEqual(true)
})

test('test 7', () => {
  expect(telephoneCheck('1(555)555-5555')).toEqual(true)
})

// test.todo('look at this');
// test("test 8", function(){
//     expect(telephoneCheck('1 555)555-5555'),false);
// });

test('test 9', () => {
  expect(telephoneCheck('1 555 555 5555')).toEqual(true)
})

test('test 10', () => {
  expect(telephoneCheck('1 456 789 4444')).toEqual(true)
})

test('test 11', () => {
  expect(telephoneCheck('123**&!!asdf#')).toEqual(false)
})

test('test 12', () => {
  expect(telephoneCheck('55555555')).toEqual(false)
})

test('test 13', () => {
  expect(telephoneCheck('(6505552368)')).toEqual(false)
})

test('test 14', () => {
  expect(telephoneCheck('2 (757) 622-7382')).toEqual(false)
})

test('test 15', () => {
  expect(telephoneCheck('0 (757) 622-7382')).toEqual(false)
})

test('test 16', () => {
  expect(telephoneCheck('-1 (757) 622-7382')).toEqual(false)
})

test('test 17', () => {
  expect(telephoneCheck('2 757 622-7382')).toEqual(false)
})

test('test 18', () => {
  expect(telephoneCheck('10 (757) 622-7382')).toEqual(false)
})

test('test 19', () => {
  expect(telephoneCheck('27576227382')).toEqual(false)
})

test('test 20', () => {
  expect(telephoneCheck('(275)76227382')).toEqual(false)
})

test('test 21', () => {
  expect(telephoneCheck('2(757)6227382')).toEqual(false)
})

test('test 22', () => {
  expect(telephoneCheck('2(757)622-7382')).toEqual(false)
})

test('test 23', () => {
  expect(telephoneCheck('555)-555-5555')).toEqual(false)
})

test('test 24', () => {
  expect(telephoneCheck('(555-555-5555')).toEqual(false)
})
