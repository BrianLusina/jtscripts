// var PeteTalk = require('../../jssnips/data_structures/Regex/PeteTalk/pete-talk')

describe("Pete Talk Tests", function(){
  it("Test 1", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("")).toEqual();
  });

  it("Test 2", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("I want to punch someone in the face")).toEqual("I w**t to p***h s*****e in t*e f**e");
  });

  it("Test 3", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("uh!")).toEqual("Uh!");
  });

  it("Test 4", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("What the hell am I doing here? And where is my wallet? PETE SMASH!")).toEqual("W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!");
  });

  it("Test 5", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("I want to punch someone in the face",["someone","face"])).toEqual("I w**t to p***h someone in t*e face");
  });

  it("Test 6", function(){
    var pete = new PeteTalk();
    expect(pete.peteTalk("I want to punch someone in the face",["drink","job","girls"])).toEqual("I w**t to p***h s*****e in t*e f**e");
  });

})
