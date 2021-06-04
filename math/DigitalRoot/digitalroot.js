function digital_root (n) {
  const strArr = String(n).split('')
  return strArr.reduce(function (x, y) {
    return parseInt(x) + parseInt(y)
  })
}
