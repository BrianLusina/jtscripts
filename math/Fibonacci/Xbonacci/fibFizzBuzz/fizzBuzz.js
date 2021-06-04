module.exports = function fibsFizzBuzz (num) {
  const fib = [1, 1]

  if (fib.length === num) {
    return fib
  }

  for (let x = 0; x < fib.length; x++) {
    const nxt = fib[x] + fib[x + 1]
    fib.push(nxt)
    if (fib.length >= num) {
      break
    }
  }

  return fib.map(function (elem) {
    if (elem % 5 === 0 && elem % 3 === 0) {
      elem = 'FizzBuzz'
    }
    if (elem % 3 === 0) {
      elem = 'Fizz'
    }	else if (elem % 5 === 0) {
      elem = 'Buzz'
    }
    return elem
  })
}
