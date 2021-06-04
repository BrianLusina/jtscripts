function curryN (fn, n) {
  n = n || fn.length
  return function curryMe (arg) {
    return (n <= 1) ? fn(arg) : curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN
