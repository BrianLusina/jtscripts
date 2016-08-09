var PeteTalk = require('./pete-talk')

describe("Pete Talk Tests", function(){
  it("Test 1", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("")).toEqual();
  });

})
