function narcissistic (value) {
  const l = String(value).length
  let res = 0
  for (let x = 0; x < l; x++) {
    res += Math.pow(parseInt(String(value)[x]), l)
  }
  return res === value
}
