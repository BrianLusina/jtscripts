function pattern (n) {
  let output = ''
  const range = []
  const res = []
  if (n === 1) {
    output = '1'
  } else {
    for (let i = 1; i <= n; i++) {
      range.push(String(i))
    }
    range.reverse()
    for (let x = 0; x < n; x++) {
      res.push(range.join(''))
      const last = range.pop()
    }
    output = res.join('\n')
  }
  return output
}

module.exports = pattern
