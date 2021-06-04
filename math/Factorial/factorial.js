// This function should return n!
function factorial (n) {
  if (n < 0) {
    return null
  } else if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
