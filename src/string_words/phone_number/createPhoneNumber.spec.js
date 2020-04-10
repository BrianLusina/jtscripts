var test = require("ava");
var expect = require("expect");
var PhoneNumber = require('./createPhoneNumber');

test('Test 2', t => {
  var phone = new PhoneNumber();
  t.is(phone.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),'(123) 456-7890');
});
