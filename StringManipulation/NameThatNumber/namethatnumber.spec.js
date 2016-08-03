var NameNumber = require('./namethatnumber')

describe("Name That Number tests",function(){
  it("test 1, Zero", function(){
    var name = NameNumber();
    expect(name.nameThatNumber(0)).toEqual('zero');
  });

  it("test 2, Four", function(){
    var name = NameNumber();
    expect(name.nameThatNumber(4)).toEqual('four');
  });

  it("test 3, Nine", function(){
    var name = NameNumber();
    expect(name.nameThatNumber(9)).toEqual('nine');
  });

  it("test 23", function(){
    var name = NameNumber();
    expect(name.nameThatNumber(23)).toEqual('twenty three');
  });

});
