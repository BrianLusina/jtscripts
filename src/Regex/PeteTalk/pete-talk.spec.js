var PeteTalk = require('./pete-talk')
const test = require("ava");
const expect = require("expect");

test('Test 1', t => {
  var pete = new PeteTalk();
  expect(pete.peteTalk('')).toEqual();
});

test('Test 2', t => {
  var pete = new PeteTalk();
  expect(pete.peteTalk('I want to punch someone in the face')).toEqual('I w**t to p***h s*****e in t*e f**e');
});

test('Test 3', t => {
  var pete = new PeteTalk();
  expect(pete.peteTalk('uh!')).toEqual('Uh!');
});

test('Test 4', t => {
  var pete = new PeteTalk();
  expect(pete.peteTalk('What the hell am I doing here? And where is my wallet? PETE SMASH!')).toEqual('W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!');
});

test('Test 5', t => {
  var pete = new PeteTalk();
  expect(pete.peteTalk('I want to punch someone in the face', ['someone', 'face'])).toEqual('I w**t to p***h someone in t*e face');
});

test('Test 6', t => {
  var pete = new PeteTalk();
  expect(pete.peteTalk('I want to punch someone in the face', ['drink', 'job', 'girls'])).toEqual('I w**t to p***h s*****e in t*e f**e');
});
