var expect = require("expect");
var telephoneCheck = require("./telephoneCheck");
const test = require("ava");


test("test 1", t => {
  t.is(telephoneCheck('555-555-5555'),true);
});

test("test 2", t => {
  t.is(telephoneCheck('1 555-555-5555'),true);
});

test("test 3", t => {
  t.is(telephoneCheck('1 (555) 555-5555'),true);
});

test("test 4", t => {
  t.is(telephoneCheck('5555555555'),true);
});

test("test 5", t => {
  t.is(telephoneCheck('555-555-5555'),true);
});

test("test 6", t => {
  t.is(telephoneCheck('(555)555-5555'),true);
});

test("test 7", t => {
  t.is(telephoneCheck('1(555)555-5555'),true);
});

//test.todo('look at this');
// test("test 8", function(){
//     t.is(telephoneCheck('1 555)555-5555'),false);
// });

test("test 9", t => {
  t.is(telephoneCheck('1 555 555 5555'),true);
});

test("test 10", t => {
  t.is(telephoneCheck('1 456 789 4444'),true);
});

test("test 11", t => {
  t.is(telephoneCheck('123**&!!asdf#'),false);
});

test("test 12", t => {
  t.is(telephoneCheck('55555555'),false);
});

test("test 13", t => {
  t.is(telephoneCheck('(6505552368)'),false);
});

test("test 14", t => {
  t.is(telephoneCheck('2 (757) 622-7382'),false);
});

test("test 15", t => {
  t.is(telephoneCheck('0 (757) 622-7382'),false);
});

test("test 16", t => {
  t.is(telephoneCheck('-1 (757) 622-7382'),false);
});

test("test 17", t => {
  t.is(telephoneCheck('2 757 622-7382'),false);
});

test("test 18", t => {
  t.is(telephoneCheck('10 (757) 622-7382'),false);
});

test("test 19", t => {
  t.is(telephoneCheck('27576227382'),false);
});

test("test 20", t => {
  t.is(telephoneCheck('(275)76227382'),false);
});

test("test 21", t => {
  t.is(telephoneCheck('2(757)6227382'),false);
});

test("test 22", t => {
  t.is(telephoneCheck('2(757)622-7382'),false);
});

test("test 23", t => {
  t.is(telephoneCheck('555)-555-5555'),false);
});

test("test 24", t => {
  t.is(telephoneCheck('(555-555-5555'),false);
});
