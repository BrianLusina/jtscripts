var test = require("ava");
var expect = require("expect");
var WordProblem = require('./wordy').WordProblem;
var ArgumentError = require('./wordy').ArgumentError;


test('add 1', t => {
  var question = 'What is 1 plus 1?';
  expect(new WordProblem(question).answer()).toEqual(2);
});

test('add 2', t => {
  var question = 'What is 53 plus 2?';
  expect(new WordProblem(question).answer()).toEqual(55);
});

test('add negative numbers', t => {
  var question = 'What is -1 plus -10?';
  expect(new WordProblem(question).answer()).toEqual(-11);
});

test('add more digits', t => {
  var question = 'What is 123 plus 45678?';
  expect(new WordProblem(question).answer()).toEqual(45801);
});

test('subtract', t => {
  var question = 'What is 4 minus -12?';
  expect(new WordProblem(question).answer()).toEqual(16);
});

test('multiply', t => {
  var question = 'What is -3 multiplied by 25?';
  expect(new WordProblem(question).answer()).toEqual(-75);
});

test('divide', t => {
  var question = 'What is 33 divided by -3?';
  expect(new WordProblem(question).answer()).toEqual(-11);
});

test('add twice', t => {
  var question = 'What is 1 plus 1 plus 1?';
  expect(new WordProblem(question).answer()).toEqual(3);
});

test('add then subtract', t => {
  var question = 'What is 1 plus 5 minus -2?';
  expect(new WordProblem(question).answer()).toEqual(8);
});

test('subtract twice', t => {
  var question = 'What is 20 minus 4 minus 13?';
  expect(new WordProblem(question).answer()).toEqual(3);
});

test('subtract then add', t => {
  var question = 'What is 17 minus 6 plus 3?';
  expect(new WordProblem(question).answer()).toEqual(14);
});

test('multiply twice', t => {
  var question = 'What is 2 multiplied by -2 multiplied by 3?';
  expect(new WordProblem(question).answer()).toEqual(-12);
});

test('add then multiply', t => {
  var question = 'What is -3 plus 7 multiplied by -2?';
  expect(new WordProblem(question).answer()).toEqual(-8);
});

test('divide twice', t => {
  var question = 'What is -12 divided by 2 divided by -3?';
  expect(new WordProblem(question).answer()).toEqual(2);
});

test('too advanced', t => {
  var question = 'What is 53 cubed?';
  var problem = new WordProblem(question);

  expect(problem.answer.bind(problem)).toThrow(new ArgumentError());
});

test('irrelevant', t => {
  var question = 'Who is the president of the United States?';
  var problem = new WordProblem(question);

  expect(problem.answer.bind(problem)).toThrow(new ArgumentError());
});
