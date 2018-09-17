var test = require("ava");
var expect = require("expect");
var PhoneNumber = require('./createPhoneNumber');

test('Test 2', t => {
  var phone = new PhoneNumber();
  expect(phone.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual('(123) 456-7890');
});
