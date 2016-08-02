var PhoneNumber = require('./createPhoneNumber')

describe("Create Phone Number Test Suite", function(){
  it("Test 2", function(){
    var phone = new PhoneNumber();
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
  });
});
