var test = require("ava");
var expect = require("expect")
var fibsFizzBuzz = require('./fizzBuzz');

test('should work for a value of 2', t => {
  t.is(fibsFizzBuzz(2),[1, 1]);
});

test('should work for a value of 5', t => {
  t.is(fibsFizzBuzz(5),[1, 1, 2, 'Fizz', 'Buzz']);
});

test('should work for a value of 20', t => {
  t.is(fibsFizzBuzz(20),[1, 1, 2, 'Fizz', 'Buzz', 8, 13, 'Fizz', 34, 'Buzz', 89, 'Fizz', 233, 377, 'Buzz', 'Fizz', 1597, 2584, 4181, 'FizzBuzz']);
});
