const fibsFizzBuzz = require('./fizzBuzz')

test('should work for a value of 2', () => {
  expect(fibsFizzBuzz(2)).toEqual([1, 1])
})

test('should work for a value of 5', () => {
  expect(fibsFizzBuzz(5)).toEqual([1, 1, 2, 'Fizz', 'Buzz'])
})

test('should work for a value of 20', () => {
  expect(fibsFizzBuzz(20)).toEqual([1, 1, 2, 'Fizz', 'Buzz', 8, 13, 'Fizz', 34, 'Buzz', 89, 'Fizz', 233, 377, 'Buzz', 'Fizz', 1597, 2584, 4181, 'FizzBuzz'])
})
