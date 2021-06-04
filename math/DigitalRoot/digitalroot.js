function digital_root (n) {
  const strArr = String(n).spltest('')
  return strArr.reduce(function (x, y) {
    return parseInt(x) + parseInt(y)
  })
}
