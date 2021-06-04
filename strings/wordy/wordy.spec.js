const test = require('ava')
const expect = require('expect')
const WordProblem = require('./wordy').WordProblem
const ArgumentError = require('./wordy').ArgumentError

test('add 1', t => {
  const question = 'What is 1 plus 1?'
  t.is(new WordProblem(question).answer(), 2)
})

test('add 2', t => {
  const question = 'What is 53 plus 2?'
  t.is(new WordProblem(question).answer(), 55)
})

test('add negative numbers', t => {
  const question = 'What is -1 plus -10?'
  t.is(new WordProblem(question).answer(), -11)
})

test('add more digits', t => {
  const question = 'What is 123 plus 45678?'
  t.is(new WordProblem(question).answer(), 45801)
})

test('subtract', t => {
  const question = 'What is 4 minus -12?'
  t.is(new WordProblem(question).answer(), 16)
})

test('multiply', t => {
  const question = 'What is -3 multiplied by 25?'
  t.is(new WordProblem(question).answer(), -75)
})

test('divide', t => {
  const question = 'What is 33 divided by -3?'
  t.is(new WordProblem(question).answer(), -11)
})

test('add twice', t => {
  const question = 'What is 1 plus 1 plus 1?'
  t.is(new WordProblem(question).answer(), 3)
})

test('add then subtract', t => {
  const question = 'What is 1 plus 5 minus -2?'
  t.is(new WordProblem(question).answer(), 8)
})

test('subtract twice', t => {
  const question = 'What is 20 minus 4 minus 13?'
  t.is(new WordProblem(question).answer(), 3)
})

test('subtract then add', t => {
  const question = 'What is 17 minus 6 plus 3?'
  t.is(new WordProblem(question).answer(), 14)
})

test('multiply twice', t => {
  const question = 'What is 2 multiplied by -2 multiplied by 3?'
  t.is(new WordProblem(question).answer(), -12)
})

test('add then multiply', t => {
  const question = 'What is -3 plus 7 multiplied by -2?'
  t.is(new WordProblem(question).answer(), -8)
})

test('divide twice', t => {
  const question = 'What is -12 divided by 2 divided by -3?'
  t.is(new WordProblem(question).answer(), 2)
})

test('too advanced', t => {
  const question = 'What is 53 cubed?'
  const problem = new WordProblem(question)

  t.is(problem.answer.bind(problem)).toThrow(new ArgumentError())
})

test('irrelevant', t => {
  const question = 'Who is the president of the United States?'
  const problem = new WordProblem(question)

  t.is(problem.answer.bind(problem)).toThrow(new ArgumentError())
})
