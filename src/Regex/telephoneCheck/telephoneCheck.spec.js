var expect = require("expect");
var telephoneCheck = require("./telephoneCheck");
const test = require("ava");


test("test 1", t => {
  expect(telephoneCheck('555-555-5555')).toEqual(true);
});

test("test 2", t => {
  expect(telephoneCheck('1 555-555-5555')).toEqual(true);
});

test("test 3", t => {
  expect(telephoneCheck('1 (555) 555-5555')).toEqual(true);
});

test("test 4", t => {
  expect(telephoneCheck('5555555555')).toEqual(true);
});

test("test 5", t => {
  expect(telephoneCheck('555-555-5555')).toEqual(true);
});

test("test 6", t => {
  expect(telephoneCheck('(555)555-5555')).toEqual(true);
});

test("test 7", t => {
  expect(telephoneCheck('1(555)555-5555')).toEqual(true);
});

//test.todo('look at this');
// test("test 8", function(){    
//     expect(telephoneCheck('1 555)555-5555')).toEqual(false);
// });

test("test 9", t => {
  expect(telephoneCheck('1 555 555 5555')).toEqual(true);
});

test("test 10", t => {
  expect(telephoneCheck('1 456 789 4444')).toEqual(true);
});

test("test 11", t => {
  expect(telephoneCheck('123**&!!asdf#')).toEqual(false);
});

test("test 12", t => {
  expect(telephoneCheck('55555555')).toEqual(false);
});

test("test 13", t => {
  expect(telephoneCheck('(6505552368)')).toEqual(false);
});

test("test 14", t => {
  expect(telephoneCheck('2 (757) 622-7382')).toEqual(false);
});

test("test 15", t => {
  expect(telephoneCheck('0 (757) 622-7382')).toEqual(false);
});

test("test 16", t => {
  expect(telephoneCheck('-1 (757) 622-7382')).toEqual(false);
});

test("test 17", t => {
  expect(telephoneCheck('2 757 622-7382')).toEqual(false);
});

test("test 18", t => {
  expect(telephoneCheck('10 (757) 622-7382')).toEqual(false);
});

test("test 19", t => {
  expect(telephoneCheck('27576227382')).toEqual(false);
});

test("test 20", t => {
  expect(telephoneCheck('(275)76227382')).toEqual(false);
});

test("test 21", t => {
  expect(telephoneCheck('2(757)6227382')).toEqual(false);
});

test("test 22", t => {
  expect(telephoneCheck('2(757)622-7382')).toEqual(false);
});

test("test 23", t => {
  expect(telephoneCheck('555)-555-5555')).toEqual(false);
});

test("test 24", t => {
  expect(telephoneCheck('(555-555-5555')).toEqual(false);
});
